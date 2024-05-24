// @ts-check
/// <reference path="./fmod.d.ts" /> 
(function() {
	"use strict";

	/*
		// code to generate function definitions from extension yy
		let code = ``;
		for (const func of yy.files[0].functions) {
			code += `${
				func.documentation.replaceAll("\r", "")
			}${
				func.hidden ? "// HIDDEN\n" : ""
			}_window.${
				func.externalName
			} = function ${
				func.help || ("(" + func.args.map((item, i) => "argument" + i).join(", ") + ")")
			} {
	
};

`;
		}
		console.log(code);  
	*/

	/*
		semi-live reloading, to allow updating the extension's js code without rebuilding
		(you do have to either reload the page or run a console command though)
		how to set up:
		step 1. open a http server at port 8080 in the fmod extension folder
		 (which contains YYFMOD.js)
		step 2. set the below variable to true
		step 3. to update manually, do fmodExt.reload();
	*/

	const SEMILIVE_RELOAD = false;

	/**
	 * @type {any}
	*/
	const _window = window;

	/**
	 * @type {FMOD}
	 */
	const fmod = _window.FMOD;

	/**
	 * @type {{
	 * 	lastResult: FMOD.RESULT,
	 * 	system: FMOD.StudioSystem?,
	 * 	handles: Map<unknown, number>,
	 * 	handleAssocs: Map<unknown, Set<unknown>>,
	 * 	handleAssocsReverse: Map<unknown, Set<unknown>>,
	 * 	handleCount: number,
	 * 	reload: (() => void) | null,
	 *	callbacks: Array<Object>,
	 * }}
	 */
	const ext = _window.fmodExt || {
		lastResult: fmod.OK,
		system: null,
		handles: new Map(),
		handleAssocs: new Map(),
		handleAssocsReverse: new Map(),
		handleCount: 0,
		reload: null,
		callbacks: [],
	};
	// debug
	_window.fmodExt = ext;

	// outputs used by fmod functions
	/**
	 * @type {Out<any>}
	 */
	let ret = {val: null};
	/**
	 * @type {Out<any>}
	 */
	let ret2 = {val: null};

	const utf8encoder = new TextEncoder();
	const utf8decoder = new TextDecoder();

	/**
	 * @param {Object} obj 
	 * @param {...Object} associatedWith
	 */
	function createHandle(obj, ...associatedWith) {
		if (ext.handles.has(obj)) return ext.handles.get(obj);
		const handle = ext.handleCount;
		ext.handles.set(handle, obj);
		ext.handles.set(obj, handle);
		ext.handleCount++;
		for (const assoc of associatedWith) {
			addHandleAssoc(assoc, obj);
		}
		return handle;
	}
	/**
	 * @param {*} handle 
	 * @returns {*}
	 */
	function getHandle(handle) {
		return ext.handles.get(handle);
	}
	/**
	 * @param {*} handle 
	 */
	function destroyHandle(handle) {
		if (ext.handles.has(handle)) {
			const other = ext.handles.get(handle);
			ext.handles.delete(handle);
			ext.handles.delete(other);

			removeHandleAssoc(handle);
			destroyAssociatedHandles(handle);
		}
	}
	/**
	 * @param {*} handle 
	 */
	function destroyAssociatedHandles(handle) {
		if (ext.handleAssocs.has(handle)) {
			const assocs = ext.handleAssocs.get(handle);
			if (!assocs) return;
			for (const associated of assocs) {
				destroyHandle(associated);
			}
		}
	}
	function destroyAllHandles() {
		ext.handles.clear();
		ext.handleAssocs.clear();
		ext.handleAssocsReverse.clear();
	}

	/**
	 * @param {*} handle 
	 * @returns {Object}
	 */
	function getHandleObj(handle) {
		if (typeof handle === "number") return getHandle(handle);
		return handle;
	}

	function addHandleAssoc(handle, associated) {
		if (!ext.handles.has(associated)) createHandle(associated);
		handle = getHandleObj(handle);
		associated = getHandleObj(associated);
		if (!ext.handleAssocs.has(handle)) ext.handleAssocs.set(handle, new Set());
		ext.handleAssocs.get(handle)?.add(associated);
		if (!ext.handleAssocsReverse.has(associated)) ext.handleAssocsReverse.set(associated, new Set());
		ext.handleAssocsReverse.get(associated)?.add(handle);
	}
	function removeHandleAssoc(associated) {
		associated = getHandleObj(associated);
		if (ext.handleAssocsReverse.has(associated)) {
			associated = getHandleObj(associated);
			const reverseAssocs = ext.handleAssocsReverse.get(associated);
			if (reverseAssocs) {
				for (const handle of reverseAssocs) {
					ext.handleAssocs.get(handle)?.delete(associated);
					removeHandleAssoc(handle);
				}
			}
			ext.handleAssocsReverse.delete(associated);
		}
	}

	/**
	 * @typedef {1|2|3|4|5|6|7|8|9|10|11|12|13} buffer_datatype
	 * @typedef {buffer_datatype|255|254|253|252|251|250} ext_buffer_datatype
	 * @typedef {0|1|2} buffer_seekorigin
	 */

	// javascript port of the gml version of ExtBufferIO
	/** @type {buffer_datatype} */ const buffer_u8 = 1;
	/** @type {buffer_datatype} */ const buffer_s8 = 2;
	/** @type {buffer_datatype} */ const buffer_u16 = 3;
	/** @type {buffer_datatype} */ const buffer_s16 = 4;
	/** @type {buffer_datatype} */ const buffer_u32 = 5;
	/** @type {buffer_datatype} */ const buffer_s32 = 6;
	/** @type {buffer_datatype} */ const buffer_f16 = 7;
	/** @type {buffer_datatype} */ const buffer_f32 = 8;
	/** @type {buffer_datatype} */ const buffer_f64 = 9;
	/** @type {buffer_datatype} */ const buffer_bool = 10;
	/** @type {buffer_datatype} */ const buffer_string = 11; // null-terminated UTF-8
	/** @type {buffer_datatype} */ const buffer_u64 = 12;
	/** @type {buffer_datatype} */ const buffer_text = 13; // non-null-terminated UTF-8
	/** @type {buffer_seekorigin} */ const buffer_seek_start = 0;
	/** @type {buffer_seekorigin} */ const buffer_seek_relative = 1;
	/** @type {buffer_seekorigin} */ const buffer_seek_end = 2;

	/** @type {ext_buffer_datatype} */ const BUFFER_STRUCT = 255;
	/** @type {ext_buffer_datatype} */ const BUFFER_ARRAY = 254;
	/** @type {ext_buffer_datatype} */ const BUFFER_BUFFER = 253;
	/** @type {ext_buffer_datatype} */ const BUFFER_POINTER = 252;
	/** @type {ext_buffer_datatype} */ const BUFFER_UNDEFINED = 251;
	/** @type {ext_buffer_datatype} */ const BUFFER_TYPED_ARRAY = 250;
	const EXT_BUFFER_RETURN_SIZE = 2048;

	/**
	 * @type {{[K in buffer_datatype]: number | ((val: any) => number)}}
	 */
	const buffer_sizeof = {
		[buffer_u8]: 1,
		[buffer_s8]: 1,
		[buffer_u16]: 2,
		[buffer_s16]: 2,
		[buffer_u32]: 4,
		[buffer_s32]: 4,
		[buffer_f16]: 2,
		[buffer_f32]: 4,
		[buffer_f64]: 8,
		[buffer_bool]: 1,
		[buffer_string]: (/** @type {string} */ s) => {
			const bytes = utf8encoder.encode(s);
			return bytes.byteLength + 1;
		},
		[buffer_text]: (/** @type {string} */ s) => {
			const bytes = utf8encoder.encode(s);
			return bytes.byteLength;
		},
		[buffer_u64]: 8,
	};

	// since javascript doesn't have pointer or distinct integer types, we just
	// encode the ones we care about into bigints
	const POINTERSPACE = -(1n << 32n); // -0x100000000 and lower
	// between -0x100000000 and 0x100000000: s32 (yes i know this has unused space but whatever)
	const U64SPACE = (1n << 32n); // 0x100000000 and higher

	/**
	 * @param {Uint8Array | ArrayBuffer} buffer 
	 * @param {buffer_datatype} read_type 
	 * @returns {number|string|BigInt|boolean}
	 */
	function buffer_read(buffer, read_type) {
		if (!buffer) return 0;
		// @ts-ignore
		if (!("gmCursor" in buffer)) buffer.gmCursor = 0;

		const view = new DataView(buffer instanceof ArrayBuffer ? buffer : buffer.buffer);

		// @ts-ignore
		let cur = buffer.gmCursor;
		let val = undefined;
		switch (read_type) {
			case buffer_u8:
				val = view.getUint8(cur);
				cur += 1;
			break;
			case buffer_s8:
				val = view.getInt8(cur);
				cur += 1;
			break;
			case buffer_u16:
				val = view.getUint16(cur, true);
				cur += 2;
			break;
			case buffer_s16:
				val = view.getInt16(cur, true);
				cur += 2;
			break;
			case buffer_u32:
				val = view.getUint32(cur, true);
				cur += 4;
			break;
			case buffer_s32:
				val = BigInt(view.getUint32(cur, true));
				cur += 4;
			break;
			case buffer_f16:
				val = NaN; // not supported
				cur += 2;
			break;
			case buffer_f32:
				val = view.getFloat32(cur, true);
				cur += 4;
			break;
			case buffer_f64:
				val = view.getFloat64(cur, true);
				cur += 8;
			break;
			case buffer_bool:
				val = !!view.getUint8(cur);
				cur += 1;
			break;
			case buffer_u64:
				val = view.getBigUint64(cur, true);
				cur += 8;
			break;
			// when reading, these both behave the same
			case buffer_string:
			case buffer_text: {
				const arr = [];
				let value = view.getUint8(cur);
				while (cur < view.byteLength && value != 0) {
					arr.push(value);
					cur += 1;
					value = view.getUint8(cur);
				}
				cur += 1;
				val = utf8decoder.decode(Uint8Array.from(arr));
			} break;
			default:
				throw new Error("Invalid read type: " + read_type);
		}
		// @ts-ignore
		buffer.gmCursor = cur;
		return val;
	}

	/**
	 * @param {Uint8Array | ArrayBuffer} buffer
	 * @param {buffer_datatype} write_type
	 * @param {number|string|BigInt|boolean} val
	 * @returns {any}
	 */
	function buffer_write(buffer, write_type, val) {
		if (!buffer) return;
		// @ts-ignore
		if (!("gmCursor" in buffer)) buffer.gmCursor = 0;

		const view = new DataView(buffer instanceof ArrayBuffer ? buffer : buffer.buffer);

		// @ts-ignore
		let cur = buffer.gmCursor;
		switch (write_type) {
			case buffer_u8:
				view.setUint8(cur, +val);
				cur += 1;
			break;
			case buffer_s8:
				view.setInt8(cur, +val);
				cur += 1;
			break;
			case buffer_u16:
				view.setUint16(cur, +val, true);
				cur += 2;
			break;
			case buffer_s16:
				view.setInt16(cur, +val, true);
				cur += 2;
			break;
			case buffer_u32:
				view.setUint32(cur, +val, true);
				cur += 4;
			break;
			case buffer_s32:
				view.setUint32(cur, Number(val), true);
				cur += 4;
			break;
			case buffer_f16:
				cur += 2; // not supported
			break;
			case buffer_f32:
				view.setFloat32(cur, +val, true);
				cur += 4;
			break;
			case buffer_f64:
				view.setFloat64(cur, +val, true);
				cur += 8;
			break;
			case buffer_bool:
				view.setUint8(cur, Number(val));
				cur += 1;
			break;
			case buffer_u64:
				view.setBigUint64(cur, BigInt(+val), true);
				cur += 8;
			break;
			// when reading, these both behave the same
			case buffer_string:
			case buffer_text: {
				const bytes = utf8encoder.encode(val.toString());
				for (let i = 0; i < bytes.length; i++) {
					view.setUint8(cur, bytes[i]);
					cur += 1;
				}
				view.setUint8(cur, 0);
				cur += 1;
			} break;
			default:
				throw new Error("Invalid write type: " + write_type);
		}
		// @ts-ignore
		buffer.gmCursor = cur;
	}

	/**
	 * @param {Uint8Array | ArrayBuffer} buffer
	 * @param {buffer_seekorigin} origin
	 * @param {number} position
	 */
	function buffer_seek(buffer, origin, position) {
		// @ts-ignore
		if (!("gmCursor" in buffer)) buffer.gmCursor = 0;
		switch (origin) {
			case buffer_seek_start:
				// @ts-ignore
				buffer.gmCursor = position;
				break;
			case buffer_seek_relative:
				// @ts-ignore
				buffer.gmCursor += position;
				break;
			case buffer_seek_end:
				// @ts-ignore
				buffer.gmCursor = buffer.length - 1 - position;
				break;
			default:
				throw new Error("Invalid buffer seek origin " + origin);
		}
	}

	/**
	 * Resets the cursor of a buffer.
	 * @param {Uint8Array | ArrayBuffer} buffer 
	 */
	function buffer_reset(buffer) {
		buffer_seek(buffer, buffer_seek_start, 0);
	}
	
	/**
	 * @param {Uint8Array | ArrayBuffer} _buff
	 * @param {boolean} [_as_map]
	 * @param {boolean} [_gm_structs]
	 * @returns {any}
	 */
	function ext_buffer_unpack(_buff, _as_map = false, _gm_structs = false)
	{
		const _type = /** @type {ext_buffer_datatype} */ (buffer_read(_buff, buffer_u8));
		
		switch(_type)
		{		
			case BUFFER_ARRAY:
			{
				return ext_buffer_unpack_array(_buff, _as_map);
			}
			case BUFFER_TYPED_ARRAY:
			{
				const _size = /** @type {number} */ (buffer_read(_buff, buffer_u16));
				const _elem_type = /** @type {buffer_datatype} */ (buffer_read(_buff, buffer_u8));
				const _array = new Array(_size);
				for (let _i = 0 ; _i < _size ; _i++) {
					_array[_i] = buffer_read(_buff, _elem_type);
				}
				return _array;
			}
			case BUFFER_STRUCT:
			{
				const _size = /** @type {number} */ (buffer_read(_buff, buffer_u16));
						
				if(_as_map)
				{
					const _map = new Map();
					for (let _i = 0 ; _i < _size ; _i++)
					{
						const _key =
							_gm_structs ? ext_buffer_unpack(_buff, _as_map, _gm_structs) :
							buffer_read(_buff, buffer_string);
						const _value = ext_buffer_unpack(_buff, _as_map);
						_map.set(_key, _value);
					}
					return _map
				}
				else
				{
					const _struct = {};
					for (let _i = 0 ; _i < _size ; _i++)
					{
						const _key =
							_gm_structs ? ext_buffer_unpack(_buff, _as_map, _gm_structs) :
							buffer_read(_buff, buffer_string);
						const _value = ext_buffer_unpack(_buff, _as_map);
						_struct[_key] = _value;
					}
					return _struct;
				}
			}
			case BUFFER_UNDEFINED:
			{
				return undefined;
			}
			default: return buffer_read(_buff, /** @type {buffer_datatype} */ (_type));
		}
	}

	/**
	 * @param {Uint8Array | ArrayBuffer} _buffer 
	 * @param {Array|Object|string|boolean|number|bigint} _value 
	 * @param {ext_buffer_datatype} [_type] 
	 */
	function ext_buffer_pack(_buffer, _value, _type = undefined)
	{
		// Encode any value as <<type><data>>
		
		// Array encoded as <<type><size><<child><child>...>>
		if(Array.isArray(_value))
		{
			const _length = _value.length;
			
			buffer_write(_buffer, buffer_u8, BUFFER_ARRAY);
			buffer_write(_buffer, buffer_u16, _length);
		
			// For all children encode <value>
			for(let _i = 0; _i < _length; _i++)
			{
				// Encode value (propagate type)
				ext_buffer_pack(_buffer, _value[_i], _type);
			}
		}
		// Struct encoded as <<type><size><<child><child>...>>
		else if(typeof _value === "object")
		{
			const _names = Object.keys(_value);
			const _length = _names.length;
			
			buffer_write(_buffer, buffer_u8, BUFFER_STRUCT);
			buffer_write(_buffer, buffer_u16, _length);
			
			// For all children encode <<key><value>>
			for (let _i = 0 ; _i < _length ; _i++)
			{
				const _key = _names[_i]
				
				// Encode key
				ext_buffer_pack(_buffer, _key);
				// Encode value (propagate type)
				ext_buffer_pack(_buffer, _value[_key], _type);
			}
		}
		// Forced type cast (used for typed arrays|structs and buffers)
		else if (_type !== undefined)
		{
			buffer_write(_buffer, buffer_u8, _type);
		
			// Encode buffer as <<type><size><address>>
			if (_type === BUFFER_BUFFER)
			{
				// Allow optional
				const _length = _value ?? 0;
				const _address = _value ?? 0;
				
				buffer_write(_buffer, buffer_u32, _length);
				buffer_write(_buffer, buffer_u64, _address);
			}
			// Encode buffer as <<type><address>>
			else if (_type === BUFFER_POINTER)
			{
				// Allow optional
				const _address = _value ?? 0;
				
				buffer_write(_buffer, buffer_u64, _address);
			}
			else
			{
				buffer_write(_buffer, /** @type {buffer_datatype}  */ (_type), _value);
			}
		}
		// Auto detect type
		else {
			if(typeof _value === "string")
			{
				buffer_write(_buffer, buffer_u8, buffer_string);
				buffer_write(_buffer, buffer_string, _value);
			}
			else if(typeof _value === "boolean")
			{
				buffer_write(_buffer, buffer_u8, buffer_bool);
				buffer_write(_buffer, buffer_bool, _value);
			}
			else if(typeof _value === "number") // double
			{
				buffer_write(_buffer, buffer_u8, buffer_f64);
				buffer_write(_buffer, buffer_f64, _value);
			}
			else if(typeof _value === "bigint") // integer types
			{
				if(_value <= POINTERSPACE) // pointer
				{
					buffer_write(_buffer, buffer_u8, BUFFER_POINTER);
					buffer_write(_buffer, buffer_u64, -_value - POINTERSPACE);
				}
				else if(_value >= U64SPACE) // uint64
				{
					buffer_write(_buffer, buffer_u8, buffer_u64);
					buffer_write(_buffer, buffer_u64, _value - U64SPACE);
				}
				else // int32
				{
					buffer_write(_buffer, buffer_u8, buffer_s32);
					buffer_write(_buffer, buffer_s32, _value);
				}
			}
			else if(typeof _value === "undefined")
			{
				buffer_write(_buffer, buffer_u8, BUFFER_UNDEFINED);
			}
			else
			{
				console.error(`Cannot encoding value: '${_value}', invalid type.`);
			}
		}
	}

	/**
	 * @param {Array|Object|string|boolean|number|bigint} val 
	 * @param {ext_buffer_datatype} [_type] 
	 * @returns {number}
	 */
	function ext_buffer_packed_size(val, _type = undefined) {
		let size = 0;
		// Array encoded as <<type><size><<child><child>...>>
		if(Array.isArray(val))
		{
			const _length = val.length;

			size += 3;
		
			// For all children encode <value>
			for(let _i = 0; _i < _length; _i++)
			{
				// Encode value (propagate type)
				size += ext_buffer_packed_size(val[_i], _type);
			}
		}
		// Struct encoded as <<type><size><<child><child>...>>
		else if(typeof val === "object")
		{
			const _names = Object.keys(val);
			const _length = _names.length;

			size += 3;
			
			// For all children encode <<key><value>>
			for (let _i = 0 ; _i < _length ; _i++)
			{
				const _key = _names[_i]
				
				size += ext_buffer_packed_size(_key);
				size += ext_buffer_packed_size(val[_key], _type);
			}
		}
		// Forced type cast (used for typed arrays|structs and buffers)
		else if (_type !== undefined)
		{
			size += 1;
		
			// Encode buffer as <<type><size><address>>
			if (_type === BUFFER_BUFFER)
			{
				size += 4 + 8;
			}
			// Encode buffer as <<type><address>>
			else if (_type === BUFFER_POINTER)
			{
				size += 8;
			}
			else
			{
				const sizeof = buffer_sizeof[_type];
				size += (typeof size === "number") ? sizeof : sizeof(val);
			}
		}
		// Auto detect type
		else {
			size += 1;
			if(typeof val === "string")
			{
				const bytes = utf8encoder.encode(val);
				size += bytes.byteLength + 1;
			}
			else if(typeof val === "boolean")
			{
				size += 1;
			}
			else if(typeof val === "number") // double
			{
				size += 8;
			}
			else if(typeof val === "bigint") // integer types
			{
				if(val <= POINTERSPACE) // pointer
				{
					size += 8;
				}
				else if(val >= U64SPACE) // uint64
				{
					size += 8;
				}
				else // int32
				{
					size += 4;
				}
			}
			else
			{
				console.error(`Cannot encoding value: '${val}', invalid type.`);
			}
		}
		return size;
	}

	/**
	 * @param {Uint8Array | ArrayBuffer} _buff
	 * @param {boolean} _as_map
	 * @returns {Array}
	 */
	function ext_buffer_unpack_array(_buff, _as_map = false) {
		const _size = /** @type {number} */ (buffer_read(_buff, buffer_u16));
		const _array = new Array(_size);
		for (let _i = 0 ; _i < _size ; _i++) {
			_array[_i] = ext_buffer_unpack(_buff, _as_map);
		}
		return _array;
	}

	/**
	 * @returns {FMOD.System?}
	 */
	function getCoreSystem() {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return null;
		}
		ext.system.getCoreSystem(ret);
		const coreSys = /** @type {FMOD.System} */ (ret.val);
		if (!coreSys) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return null;
		}
		return coreSys;
	}

	/**
	 * @param {FMOD.GUID} guid 
	 * @returns {string}
	 */
	function GUIDtoString(guid) {
		return `${
			guid.Data1.toString(16).padStart(8, "0")
		}-${
			guid.Data2.toString(16).padStart(4, "0")
		}-${
			guid.Data3.toString(16).padStart(4, "0")
		}-${
			guid.Data4.slice(0, 2).map(n => n.toString(16).padStart(2, "0")).join("")
		}-${
			guid.Data4.slice(2, 8).map(n => n.toString(16).padStart(2, "0")).join("")
		}`;
	}


	/// @desc
	/// @param {real} channel_ref 
	/// @param {real} frequency 
	/// @returns {real}
	_window.fmod_channel_set_frequency = function(channel_ref, frequency) {
		
	};

	/// @desc
	/// @param {real} channel_ref 
	/// @returns {real}
	_window.fmod_channel_get_frequency = function(channel_ref) {
		
	};

	/// @desc
	/// @param {real} channel_ref 
	/// @param {real} priority 
	/// @returns {real}
	_window.fmod_channel_set_priority = function(channel_ref, priority) {
		
	};

	/// @desc
	/// @param {real} channel_ref 
	/// @returns {real}
	_window.fmod_channel_get_priority = function(channel_ref) {
		
	};

	/// @desc
	/// @param {real} channel_ref 
	/// @param {real} position 
	/// @param {enum.FMOD_TIMEUNIT} time_unit 
	/// @returns {real}
	_window.fmod_channel_set_position = function(channel_ref, position, time_unit) {
		
	};

	/// @desc
	/// @param {real} channel_ref 
	/// @param {enum.FMOD_TIMEUNIT} time_unit 
	/// @returns {real}
	_window.fmod_channel_get_position = function(channel_ref, time_unit) {
		
	};

	/// @desc
	/// @param {real} channel_ref 
	/// @param {real} channel_group_ref 
	/// @returns {real}
	_window.fmod_channel_set_channel_group = function(channel_ref, channel_group_ref) {
		
	};

	/// @desc
	/// @param {real} channel_ref 
	/// @returns {real}
	_window.fmod_channel_get_channel_group = function(channel_ref) {
		
	};

	/// @desc
	/// @param {real} channel_ref 
	/// @param {real} loop_count 
	/// @returns {real}
	_window.fmod_channel_set_loop_count = function(channel_ref, loop_count) {
		
	};

	/// @desc
	/// @param {real} channel_ref 
	/// @returns {real}
	_window.fmod_channel_get_loop_count = function(channel_ref) {
		
	};

	/// @desc
	/// @param {real} channel_ref 
	/// @param {real} loop_start 
	/// @param {enum.FMOD_TIMEUNIT} loop_start_type 
	/// @param {real} loop_end 
	/// @param {enum.FMOD_TIMEUNIT} loop_end_type 
	/// @returns {real}
	_window.fmod_channel_set_loop_points = function(channel_ref, loop_start, loop_start_type, loop_end, loop_end_type) {
		
	};

	/// @desc
	/// @param {real} channel_ref 
	/// @param {real} loop_start_type 
	/// @param {real} loop_end_type 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_get_loop_points_multiplatform = function(channel_ref, loop_start_type, loop_end_type, buff_return) {
		
	};

	/// @desc
	/// @param {real} channel_ref 
	/// @returns {bool}
	_window.fmod_channel_is_virtual = function(channel_ref) {
		
	};

	/// @desc
	/// @param {real} channel_ref 
	/// @returns {real}
	_window.fmod_channel_get_current_sound = function(channel_ref) {
		
	};

	/// @desc
	/// @param {real} channel_ref 
	/// @returns {real}
	_window.fmod_channel_get_index = function(channel_ref) {
		
	};

	/// @desc
	/// @param {real} channel_ref 
	/// @returns {real}
	_window.fmod_channel_get_system_object = function(channel_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {bool}
	_window.fmod_channel_control_is_playing = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {real}
	_window.fmod_channel_control_stop = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {bool} paused 
	/// @returns {real}
	_window.fmod_channel_control_set_paused = function(channel_control_ref, paused) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {bool}
	_window.fmod_channel_control_get_paused = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {enum.FMOD_MODE} mode 
	/// @returns {real}
	_window.fmod_channel_control_set_mode = function(channel_control_ref, mode) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {enum.FMOD_MODE}
	_window.fmod_channel_control_get_mode = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} pitch
	/// @returns {real}
	_window.fmod_channel_control_set_pitch = function(channel_control_ref, pitch_) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {real}
	_window.fmod_channel_control_get_pitch = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {real}
	_window.fmod_channel_control_get_audibility = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} volume 
	/// @returns {real}
	_window.fmod_channel_control_set_volume = function(channel_control_ref, volume) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {real}
	_window.fmod_channel_control_get_volume = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {bool} ramp 
	/// @returns {real}
	_window.fmod_channel_control_set_volume_ramp = function(channel_control_ref, ramp) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {bool}
	_window.fmod_channel_control_get_volume_ramp = function(channel_control_ref, ramp) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {bool} mute 
	/// @returns {real}
	_window.fmod_channel_control_set_mute = function(channel_control_ref, mute) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {bool}
	_window.fmod_channel_control_get_mute = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_set_3d_attributes_multiplatform = function(channel_control_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_get_3d_attributes_multiplatform = function(channel_control_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_set_3d_cone_orientation_multiplatform = function(channel_control_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_get_3d_cone_orientation_multiplatform = function(channel_control_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} inside_cone_angle 
	/// @param {real} outside_cone_angle 
	/// @param {real} outside_volume 
	/// @returns {real}
	_window.fmod_channel_control_set_3d_cone_settings = function(channel_control_ref, inside_cone_angle, outside_cone_angle, outside_volume) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_get_3d_cone_settings_multiplatform = function(channel_control_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_set_3d_custom_rolloff_multiplatform = function(channel_control_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_get_3d_custom_rolloff_multiplatform = function(channel_control_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} custom 
	/// @param {real} custom_level 
	/// @param {real} center_freq 
	/// @returns {real}
	_window.fmod_channel_control_set_3d_distance_filter = function(channel_control_ref, custom, custom_level, center_freq) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_get_3d_distance_filter_multiplatform = function(channel_control_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} level 
	/// @returns {real}
	_window.fmod_channel_control_set_3d_doppler_level = function(channel_control_ref, level) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {real}
	_window.fmod_channel_control_get_3d_doppler_level = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} level 
	/// @returns {real}
	_window.fmod_channel_control_set_3d_level = function(channel_control_ref, level) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {real}
	_window.fmod_channel_control_get_3d_level = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} min 
	/// @param {real} max 
	/// @returns {real}
	_window.fmod_channel_control_set_3d_min_max_distance = function(channel_control_ref, min, max) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_get_3d_min_max_distance_multiplatform = function(channel_control_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} direct_occlusion 
	/// @param {real} reverb_occlusion 
	/// @returns {real}
	_window.fmod_channel_control_set_3d_occlusion = function(channel_control_ref, direct_occlusion, reverb_occlusion) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_get_3d_occlusion_multiplatform = function(channel_control_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} angle 
	/// @returns {real}
	_window.fmod_channel_control_set_3d_spread = function(channel_control_ref, angle) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {real}
	_window.fmod_channel_control_get_3d_spread = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} pan 
	/// @returns {real}
	_window.fmod_channel_control_set_pan = function(channel_control_ref, pan) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_set_mix_levels_input_multiplatform = function(channel_control_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} front_left 
	/// @param {real} front_right 
	/// @param {real} center 
	/// @param {real} lfe 
	/// @param {real} surround_left 
	/// @param {real} surround_right 
	/// @param {real} back_left 
	/// @param {real} back_right 
	/// @returns {real}
	_window.fmod_channel_control_set_mix_levels_output = function(channel_control_ref, front_left, front_right, center, lfe, surround_left, surround_right, back_left, back_right) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_set_mix_matrix_multiplatform = function(channel_control_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} in_channel_hop 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_get_mix_matrix_multiplatform = function(channel_control_ref, in_channel_hop, buff_return) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} reverb_instance 
	/// @param {real} wet 
	/// @returns {real}
	_window.fmod_channel_control_set_reverb_properties = function(channel_control_ref, reverb_instance, wet) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} reverb_instance 
	/// @returns {real}
	_window.fmod_channel_control_get_reverb_properties = function(channel_control_ref, reverb_instance) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} gain 
	/// @returns {real}
	_window.fmod_channel_control_set_low_pass_gain = function(channel_control_ref, gain) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {real}
	_window.fmod_channel_control_get_low_pass_gain = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} dsp_chain_offset 
	/// @param {real} dsp_ref 
	/// @returns {real}
	_window.fmod_channel_control_add_dsp = function(channel_control_ref, dsp_chain_offset, dsp_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} dsp_ref 
	/// @returns {real}
	_window.fmod_channel_control_remove_dsp = function(channel_control_ref, dsp_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {real}
	_window.fmod_channel_control_get_num_dsps = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} index 
	/// @returns {real}
	_window.fmod_channel_control_get_dsp = function(channel_control_ref, index) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} dsp_ref 
	/// @param {real} chain_index 
	/// @returns {real}
	_window.fmod_channel_control_set_dsp_index = function(channel_control_ref, dsp_ref, chain_index) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} dsp_ref 
	/// @returns {real}
	_window.fmod_channel_control_get_dsp_index = function(channel_control_ref, dsp_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_get_dsp_clock_multiplatform = function(channel_control_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_set_delay_multiplatform = function(channel_control_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_get_delay_multiplatform = function(channel_control_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_add_fade_point_multiplatform = function(channel_control_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_set_fade_point_ramp_multiplatform = function(channel_control_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_remove_fade_points_multiplatform = function(channel_control_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_control_get_fade_points_multiplatform = function(channel_control_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {real}
	_window.fmod_channel_control_set_callback = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {real}
	_window.fmod_channel_control_get_system_object = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} data 
	/// @returns {real}
	_window.fmod_channel_control_set_user_data = function(channel_control_ref, data) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {real}
	_window.fmod_channel_control_get_user_data = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {real} channel_group_ref 
	/// @returns {real}
	_window.fmod_channel_group_get_num_channels = function(channel_group_ref) {
		
	};

	/// @desc
	/// @param {real} channel_group_ref 
	/// @param {real} index 
	/// @returns {real}
	_window.fmod_channel_group_get_channel = function(channel_group_ref, index) {
		
	};

	/// @desc
	/// @param {real} channel_group_ref 
	/// @param {real} child_channel_group_ref 
	/// @param {real} propagate_dsp_clock 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_channel_group_add_group_multiplatform = function(channel_group_ref, child_channel_group_ref, propagate_dsp_clock) {
		
	};

	/// @desc
	/// @param {real} channel_group_ref 
	/// @returns {real}
	_window.fmod_channel_group_get_num_groups = function(channel_group_ref) {
		
	};

	/// @desc
	/// @param {real} channel_group_ref 
	/// @param {real} group_index 
	/// @returns {real}
	_window.fmod_channel_group_get_group = function(channel_group_ref, group_index) {
		
	};

	/// @desc
	/// @param {real} channel_group_ref 
	/// @returns {real}
	_window.fmod_channel_group_get_parent_group = function(channel_group_ref) {
		
	};

	/// @desc
	/// @param {real} channel_group_ref 
	/// @returns {string}
	_window.fmod_channel_group_get_name = function(channel_group_ref) {
		
	};

	/// @desc
	/// @param {real} channel_group_ref 
	/// @returns {real}
	_window.fmod_channel_group_release = function(channel_group_ref) {
		
	};

	/// @desc
	/// @param {real} channel_group_ref 
	/// @returns {real}
	_window.fmod_channel_group_get_system_object = function(channel_group_ref) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_file_get_disk_busy = function() {
		
	};

	/// @desc
	/// @param {real} busy 
	/// @returns {real}
	_window.fmod_file_set_disk_busy = function(busy) {
		
	};

	/// @desc
	/// @param {real} blocking 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_memory_get_stats_multiplatform = function(blocking, buff_return) {
		
	};

	/// @desc
	/// @param {enum.FMOD_DEBUG_FLAGS} flags 
	/// @param {enum.FMOD_DEBUG_MODE} mode 
	/// @param {string|pointer} filename 
	/// @returns {real}
	_window.fmod_debug_initialize_multiplatform = function(flags, mode, filename) {
		
	};

	/// @desc
	/// @param {enum.FMOD_THREAD_TYPE} type 
	/// @param {enum.FMOD_THREAD_AFFINITY} affinity 
	/// @param {enum.FMOD_THREAD_PRIORITY} priority 
	/// @param {enum.FMOD_THREAD_STACK_SIZE} stacksize 
	/// @returns {real}
	_window.fmod_thread_set_attributes = function(type, affinity, priority, stacksize) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} dsp_input_ref 
	/// @param {real} dsp_connection_type 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_dsp_add_input_multiplatform = function(dsp_ref, dsp_input_ref, dsp_connection_type) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} dsp_input_index 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_dsp_get_input_multiplatform = function(dsp_ref, dsp_input_index, buff_return) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} dsp_output_index 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_dsp_get_output_multiplatform = function(dsp_ref, dsp_output_index, buff_return) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @returns {real}
	_window.fmod_dsp_get_num_inputs = function(dsp_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @returns {real}
	_window.fmod_dsp_get_num_outputs = function(dsp_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {bool} inputs 
	/// @param {bool} outputs 
	/// @returns {real}
	_window.fmod_dsp_disconnect_all = function(dsp_ref, inputs, outputs) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} dsp_other_ref
	/// @param {real} dsp_connection_ref
	/// @returns {real}
	// HIDDEN
	_window.fmod_dsp_disconnect_from_mutliplatform = function(dsp_ref, dsp_other_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} data_type 
	/// @returns {real}
	_window.fmod_dsp_get_data_parameter_index = function(dsp_ref, data_type) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @returns {real}
	_window.fmod_dsp_get_num_parameters = function(dsp_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} parameter_index 
	/// @param {bool} value 
	/// @returns {real}
	_window.fmod_dsp_set_parameter_bool = function(dsp_ref, parameter_index, value) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} parameter_index 
	/// @returns {real}
	_window.fmod_dsp_get_parameter_bool = function(dsp_ref, parameter_index) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} parameter_index 
	/// @param {Pointer} buff 
	/// @param {real} length 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_dsp_set_parameter_data_multiplatform = function(dsp_ref, parameter_index, buff, length) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} parameter_index 
	/// @param {Pointer} buff 
	/// @param {real} length 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_dsp_get_parameter_data_multiplatform = function(dsp_ref, parameter_index, buff, length) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} parameter_index 
	/// @param {real} value 
	/// @returns {real}
	_window.fmod_dsp_set_parameter_float = function(dsp_ref, parameter_index, value) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} parameter_index 
	/// @returns {real}
	_window.fmod_dsp_get_parameter_float = function(dsp_ref, parameter_index) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} parameter_index 
	/// @param {real} value 
	/// @returns {real}
	_window.fmod_dsp_set_parameter_int = function(dsp_ref, parameter_index, value) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} parameter_index 
	/// @returns {real}
	_window.fmod_dsp_get_parameter_int = function(dsp_ref, parameter_index) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} parameter_index 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_dsp_get_parameter_info_multiplatform = function(dsp_ref, parameter_index, buff_return) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} channel_mask 
	/// @param {real} num_channels 
	/// @param {real} speaker_mode 
	/// @returns {real}
	_window.fmod_dsp_set_channel_format = function(dsp_ref, channel_mask, num_channels, speaker_mode) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_dsp_get_channel_format_multiplatform = function(dsp_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {Pointer} buff_args 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_dsp_get_output_channel_format_multiplatform = function(dsp_ref, buff_args, buff_return) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_dsp_get_metering_info_multiplatform = function(dsp_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {bool} enabled_in 
	/// @param {bool} enabled_out 
	/// @returns {real}
	_window.fmod_dsp_set_metering_enabled = function(dsp_ref, enabled_in, enabled_out) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_dsp_get_metering_enabled_multiplatform = function(dsp_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {bool} active 
	/// @returns {real}
	_window.fmod_dsp_set_active = function(dsp_ref, active) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @returns {bool}
	_window.fmod_dsp_get_active = function(dsp_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {bool} bypass 
	/// @returns {real}
	_window.fmod_dsp_set_bypass = function(dsp_ref, bypass) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @returns {bool}
	_window.fmod_dsp_get_bypass = function(dsp_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} prewet 
	/// @param {real} postwet 
	/// @param {real} dry 
	/// @returns {real}
	_window.fmod_dsp_set_wet_dry_mix = function(dsp_ref, prewet, postwet, dry) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_dsp_get_wet_dry_mix_multiplatform = function(dsp_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @returns {bool}
	_window.fmod_dsp_get_idle = function(dsp_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @returns {real}
	_window.fmod_dsp_reset = function(dsp_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @returns {real}
	_window.fmod_dsp_release = function(dsp_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @returns {enum.FMOD_DSP_TYPE}
	_window.fmod_dsp_get_type = function(dsp_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_dsp_get_info_multiplatform = function(dsp_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_dsp_get_cpu_usage_multiplatform = function(dsp_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} data 
	/// @returns {real}
	_window.fmod_dsp_set_user_data = function(dsp_ref, data) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @returns {real}
	_window.fmod_dsp_get_user_data = function(dsp_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @returns {real}
	_window.fmod_dsp_set_callback = function(dsp_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @returns {real}
	_window.fmod_dsp_get_system_object = function(dsp_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_connection_ref 
	/// @param {real} volume 
	/// @returns {real}
	_window.fmod_dsp_connection_set_mix = function(dsp_connection_ref, volume) {
		
	};

	/// @desc
	/// @param {real} dsp_connection_ref 
	/// @returns {real}
	_window.fmod_dsp_connection_get_mix = function(dsp_connection_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_connection_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_dsp_connection_set_mix_matrix_multiplatform = function(dsp_connection_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} dsp_connection_ref 
	/// @param {real} inchannel_hop 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_dsp_connection_get_mix_matrix_multiplatform = function(dsp_connection_ref, inchannel_hop, buff_return) {
		
	};

	/// @desc
	/// @param {real} dsp_connection_ref 
	/// @returns {real}
	_window.fmod_dsp_connection_get_input = function(dsp_connection_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_connection_ref 
	/// @returns {real}
	_window.fmod_dsp_connection_get_output = function(dsp_connection_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_connection_ref 
	/// @returns {enum.FMOD_DSPCONNECTION_TYPE}
	_window.fmod_dsp_connection_get_type = function(dsp_connection_ref) {
		
	};

	/// @desc
	/// @param {real} dsp_connection_ref 
	/// @param {real} data 
	/// @returns {real}
	_window.fmod_dsp_connection_set_user_data = function(dsp_connection_ref, data) {
		
	};

	/// @desc
	/// @param {real} dsp_connection_ref 
	/// @returns {real}
	_window.fmod_dsp_connection_get_user_data = function(dsp_connection_ref) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {real} polygon_index 
	/// @param {real} direct_occlusion 
	/// @param {real} reverb_occlusion 
	/// @param {real} double_sided 
	/// @returns {real}
	_window.fmod_geometry_set_polygon_attributes = function(geometry_ref, polygon_index, direct_occlusion, reverb_occlusion, double_sided) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {real} polygon_index 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_geometry_get_polygon_attributes_multiplatform = function(geometry_ref, polygon_index, buff_return) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {real} polygon_index 
	/// @returns {real}
	_window.fmod_geometry_get_polygon_num_vertices = function(geometry_ref, polygon_index) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {real} polygon_index 
	/// @param {real} vertex_index 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_geometry_set_polygon_vertex_multiplatform = function(geometry_ref, polygon_index, vertex_index, buff_args) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {real} polygon_index 
	/// @param {real} vertex_index 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_geometry_get_polygon_vertex_multiplatform = function(geometry_ref, polygon_index, vertex_index, buff_return) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_geometry_set_position_multiplatform = function(geometry_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_geometry_get_position_multiplatform = function(geometry_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_geometry_set_rotation_multiplatform = function(geometry_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_geometry_get_rotation_multiplatform = function(geometry_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_geometry_set_scale_multiplatform = function(geometry_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_geometry_get_scale_multiplatform = function(geometry_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_geometry_add_polygon_multiplatform = function(geometry_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {bool} active 
	/// @returns {real}
	_window.fmod_geometry_set_active = function(geometry_ref, active) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @returns {bool}
	_window.fmod_geometry_get_active = function(geometry_ref) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	// HIDDEN
	_window.fmod_geometry_get_max_polygons_multiplatform = function(geometry_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @returns {real}
	_window.fmod_geometry_get_num_polygons = function(geometry_ref) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {real} data 
	/// @returns {real}
	_window.fmod_geometry_set_user_data = function(geometry_ref, data) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @returns {real}
	_window.fmod_geometry_get_user_data = function(geometry_ref) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @returns {real}
	_window.fmod_geometry_release = function(geometry_ref) {
		
	};

	/// @desc
	/// @param {real} geometry_ref 
	/// @param {Pointer} buff_args
	/// @returns {real}
	_window.fmod_geometry_save_multiplatform = function(geometry_ref, buff) {
		
	};

	/// @desc
	/// @param {real} reverb_3d_ref 
	/// @param {Pointer} buff_args 
	/// @param {real} min_distance 
	/// @param {real} max_distance 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_reverb_3d_set_3d_attributes_multiplatform = function(reverb_3d_ref, buff_args, min_distance, max_distance) {
		
	};

	/// @desc
	/// @param {real} reverb_3d_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_reverb_3d_get_3d_attributes_multiplatform = function(reverb_3d_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} reverb_3d_ref 
	/// @param {real} decay_time 
	/// @param {real} early_delay 
	/// @param {real} late_delay 
	/// @param {real} hf_reference 
	/// @param {real} hf_decay_ratio 
	/// @param {real} diffusion 
	/// @param {real} density 
	/// @param {real} low_shelf_frequency 
	/// @param {real} low_shelf_gain 
	/// @param {real} high_cut 
	/// @param {real} early_late_mix 
	/// @param {real} wet_level 
	/// @returns {real}
	_window.fmod_reverb_3d_set_properties = function(reverb_3d_ref, decay_time, early_delay, late_delay, hf_reference, hf_decay_ratio, diffusion, density, low_shelf_frequency, low_shelf_gain, high_cut, early_late_mix, wet_level) {
		
	};

	/// @desc
	/// @param {real} reverb_3d_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_reverb_3d_get_properties_multiplatform = function(reverb_3d_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} reverb_3d_ref 
	/// @param {real} active 
	/// @returns {real}
	_window.fmod_reverb_3d_set_active = function(reverb_3d_ref, active) {
		
	};

	/// @desc
	/// @param {real} reverb_3d_ref 
	/// @returns {real}
	_window.fmod_reverb_3d_get_active = function(reverb_3d_ref) {
		
	};

	/// @desc
	/// @param {real} reverb_3d_ref 
	/// @returns {real}
	_window.fmod_reverb_3d_release = function(reverb_3d_ref) {
		
	};

	/// @desc
	/// @param {real} reverb_3d_ref 
	/// @param {real} data 
	/// @returns {real}
	_window.fmod_reverb_3d_set_user_data = function(reverb_3d_ref, data) {
		
	};

	/// @desc
	/// @param {real} reverb_3d_ref 
	/// @returns {real}
	_window.fmod_reverb_3d_get_user_data = function(reverb_3d_ref) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @returns {string}
	_window.fmod_sound_get_name = function(sound_ref) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_sound_get_format_multiplatform = function(sound_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {enum.FMOD_TIMEUNIT} length_type 
	/// @returns {real}
	_window.fmod_sound_get_length = function(sound_ref, length_type) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_sound_get_num_tags_multiplatform = function(sound_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} tag_index 
	/// @param {Pointer} buff_args 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_sound_get_tag_multiplatform = function(sound_ref, tag_index, buff_args, buff_return) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} inside_cone_angle 
	/// @param {real} outside_cone_angle 
	/// @param {real} outside_volume 
	/// @returns {real}
	_window.fmod_sound_set_3d_cone_settings = function(sound_ref, inside_cone_angle, outside_cone_angle, outside_volume) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_sound_get_3d_cone_settings_multiplatform = function(sound_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_sound_set_3d_custom_rolloff_multiplatform = function(sound_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_sound_get_3d_custom_rolloff_multiplatform = function(sound_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} min 
	/// @param {real} max 
	/// @returns {real}
	_window.fmod_sound_set_3d_min_max_distance = function(sound_ref, min, max) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_sound_get_3d_min_max_distance_multiplatform = function(sound_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} frequency 
	/// @param {real} priority 
	/// @returns {real}
	_window.fmod_sound_set_defaults = function(sound_ref, frequency, priority) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_sound_get_defaults_multiplatform = function(sound_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} mode_ 
	/// @returns {real}
	_window.fmod_sound_set_mode = function(sound_ref, mode_) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @returns {real}
	_window.fmod_sound_get_mode = function(sound_ref) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} count 
	/// @returns {real}
	_window.fmod_sound_set_loop_count = function(sound_ref, count) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @returns {real}
	_window.fmod_sound_get_loop_count = function(sound_ref) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} loop_start 
	/// @param {enum.FMOD_TIMEUNIT} loop_start_type 
	/// @param {real} loop_end 
	/// @param {enum.FMOD_TIMEUNIT} loop_end_type 
	/// @returns {real}
	_window.fmod_sound_set_loop_points = function(sound_ref, loop_start, loop_start_type, loop_end, loop_end_type) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} loop_start_type 
	/// @param {real} loop_end_type 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_sound_get_loop_points_multiplatform = function(sound_ref, loop_start_type, loop_end_type, buff_return) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} sound_group_ref 
	/// @returns {real}
	_window.fmod_sound_set_sound_group = function(sound_ref, sound_group_ref) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @returns {real}
	_window.fmod_sound_get_sound_group = function(sound_ref) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @returns {real}
	_window.fmod_sound_get_num_sub_sounds = function(sound_ref) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} sub_sound_index 
	/// @returns {real}
	_window.fmod_sound_get_sub_sound = function(sound_ref, sub_sound_index) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @returns {real}
	_window.fmod_sound_get_sub_sound_parent = function(sound_ref) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_sound_get_open_state_multiplatform = function(sound_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_sound_read_data_multiplatform = function(sound_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} pcm 
	/// @returns {real}
	_window.fmod_sound_seek_data = function(sound_ref, pcm) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {Pointer} buff_args 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_sound_lock_multiplatform = function(sound_ref, buff_args, buff_return) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_sound_unlock_multiplatform = function(sound_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @returns {real}
	_window.fmod_sound_get_music_num_channels = function(sound_ref) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} channel_index 
	/// @param {real} volume 
	/// @returns {real}
	_window.fmod_sound_set_music_channel_volume = function(sound_ref, channel_index, volumen_) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} channel_index 
	/// @returns {real}
	_window.fmod_sound_get_music_channel_volume = function(sound_ref, channel_index) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} speed 
	/// @returns {real}
	_window.fmod_sound_set_music_speed = function(sound_ref, speed) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @returns {real}
	_window.fmod_sound_get_music_speed = function(sound_ref) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} point_index 
	/// @param {enum.FMOD_TIMEUNIT} offset_type 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_sound_get_sync_point_multiplatform = function(sound_ref, point_index, offset_type, buff_return) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @returns {real}
	_window.fmod_sound_get_num_sync_points = function(sound_ref) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} offset 
	/// @param {enum.FMOD_TIMEUNIT} offset_type 
	/// @param {string} name 
	/// @returns {real}
	_window.fmod_sound_add_sync_point = function(sound_ref, offset, offset_type, name) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} point_index 
	/// @returns {real}
	_window.fmod_sound_delete_sync_point = function(sound_ref, point_index) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @returns {real}
	_window.fmod_sound_release = function(sound_ref) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @returns {real}
	_window.fmod_sound_get_system_object = function(sound_ref) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} data 
	/// @returns {real}
	_window.fmod_sound_set_user_data = function(sound_ref, data) {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @returns {real}
	_window.fmod_sound_get_user_data = function(sound_ref) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @param {real} max_audible 
	/// @returns {real}
	_window.fmod_sound_group_set_max_audible = function(sound_group_ref, max_audible) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @returns {real}
	_window.fmod_sound_group_get_max_audible = function(sound_group_ref) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @param {enum.FMOD_SOUNDGROUP_BEHAVIOR} behavior 
	/// @returns {real}
	_window.fmod_sound_group_set_max_audible_behavior = function(sound_group_ref, behavior) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @returns {enum.FMOD_SOUNDGROUP_BEHAVIOR}
	_window.fmod_sound_group_get_max_audible_behavior = function(sound_group_ref) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @param {real} speed 
	/// @returns {real}
	_window.fmod_sound_group_set_mute_fade_speed = function(sound_group_ref, speed) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @returns {real}
	_window.fmod_sound_group_get_mute_fade_speed = function(sound_group_ref) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @param {real} volume 
	/// @returns {real}
	_window.fmod_sound_group_set_volume = function(sound_group_ref, volume) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @returns {real}
	_window.fmod_sound_group_get_volume = function(sound_group_ref) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @returns {real}
	_window.fmod_sound_group_get_num_sounds = function(sound_group_ref) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @param {real} sound_index 
	/// @returns {real}
	_window.fmod_sound_group_get_sound = function(sound_group_ref, sound_index) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @returns {real}
	_window.fmod_sound_group_get_num_playing = function(sound_group_ref) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @returns {real}
	_window.fmod_sound_group_stop = function(sound_group_ref) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @returns {string}
	_window.fmod_sound_group_get_name = function(sound_group_ref) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @returns {real}
	_window.fmod_sound_group_release = function(sound_group_ref) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @returns {real}
	_window.fmod_sound_group_get_system_object = function(sound_group_ref) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @param {real} data 
	/// @returns {real}
	_window.fmod_sound_group_set_user_data = function(sound_group_ref, data) {
		
	};

	/// @desc
	/// @param {real} sound_group_ref 
	/// @returns {real}
	_window.fmod_sound_group_get_user_data = function(sound_group_ref) {
		
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @returns {enum.FMOD_STUDIO_LOADING_STATE}
	_window.fmod_studio_bank_get_loading_state = function(bank_ref) {

	};

	/// @desc
	/// @param {real} bank_ref 
	/// @returns {real}
	_window.fmod_studio_bank_load_sample_data = function(bank_ref) {
		const bank = /** @type {FMOD.Bank} */(getHandle(bank_ref));
		if (!bank) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = bank.loadSampleData();
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @returns {real}
	_window.fmod_studio_bank_unload_sample_data = function(bank_ref) {
		const bank = /** @type {FMOD.Bank} */(getHandle(bank_ref));
		if (!bank) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = bank.unloadSampleData();
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @returns {enum.FMOD_STUDIO_LOADING_STATE}
	_window.fmod_studio_bank_get_sample_loading_state = function(bank_ref) {
		
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @returns {real}
	_window.fmod_studio_bank_unload = function(bank_ref) {
		const bank = /** @type {FMOD.Bank} */(getHandle(bank_ref));
		if (!bank) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = bank.unload();
		destroyHandle(bank);
		// TODO: destroy associated events somehow
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @returns {real}
	_window.fmod_studio_bank_get_bus_count = function(bank_ref) {
		
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_bank_get_bus_list_multiplatform = function(bank_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @returns {real}
	_window.fmod_studio_bank_get_event_count = function(bank_ref) {
		
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_bank_get_event_description_list_multiplatform = function(bank_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @returns {real}
	_window.fmod_studio_bank_get_string_count = function(bank_ref) {
		
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @param {real} string_index 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_bank_get_string_info_multiplatform = function(bank_ref, string_index, buff_return) {
		
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @returns {real}
	_window.fmod_studio_bank_get_vca_count = function(bank_ref) {
		
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_bank_get_vca_list_multiplatform = function(bank_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @returns {string}
	_window.fmod_studio_bank_get_id = function(bank_ref) {
		
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @returns {string}
	_window.fmod_studio_bank_get_path = function(bank_ref) {
		
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @returns {bool}
	_window.fmod_studio_bank_is_valid = function(bank_ref) {
		const bank = /**@type {FMOD.Bank}*/(getHandle(bank_ref));
		if (!bank) {
			return false;
		}
		return bank.isValid();
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @param {real} data 
	/// @returns {real}
	_window.fmod_studio_bank_set_user_data = function(bank_ref, data) {
		
	};

	/// @desc
	/// @param {real} bank_ref 
	/// @returns {real}
	_window.fmod_studio_bank_get_user_data = function(bank_ref) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @param {bool} pause 
	/// @returns {real}
	_window.fmod_studio_bus_set_paused = function(bus_ref, pause) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @returns {bool}
	_window.fmod_studio_bus_get_paused = function(bus_ref) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @param {enum.FMOD_STUDIO_STOP_MODE} stop_mode 
	/// @returns {real}
	_window.fmod_studio_bus_stop_all_events = function(bus_ref, stop_mode) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @param {real} volumen 
	/// @returns {real}
	_window.fmod_studio_bus_set_volume = function(bus_ref, volumen) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @returns {real}
	_window.fmod_studio_bus_get_volume = function(bus_ref) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @param {real} mute 
	/// @returns {real}
	_window.fmod_studio_bus_set_mute = function(bus_ref, mute) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @returns {real}
	_window.fmod_studio_bus_get_mute = function(bus_ref) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_bus_set_port_index_multiplatform = function(bus_ref, buff_args) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_bus_get_port_index_multiplatform = function(bus_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @returns {real}
	_window.fmod_studio_bus_get_channel_group = function(bus_ref) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @returns {real}
	_window.fmod_studio_bus_lock_channel_group = function(bus_ref) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @returns {real}
	_window.fmod_studio_bus_unlock_channel_group = function(bus_ref) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_bus_get_cpu_usage_multiplatform = function(bus_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	_window.fmod_studio_bus_get_memory_usage_multiplatform = function(bus_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @returns {string}
	_window.fmod_studio_bus_get_id = function(bus_ref) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @returns {string}
	_window.fmod_studio_bus_get_path = function(bus_ref) {
		
	};

	/// @desc
	/// @param {real} bus_ref 
	/// @returns {bool}
	_window.fmod_studio_bus_is_valid = function(bus_ref) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @param {string} path 
	/// @returns {real}
	_window.fmod_studio_command_replay_set_bank_path = function(command_replay_ref, path) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @returns {real}
	_window.fmod_studio_command_replay_set_create_instance_callback = function(command_replay_ref) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @returns {real}
	_window.fmod_studio_command_replay_set_frame_callback = function(command_replay_ref) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @param {string} path 
	/// @returns {real}
	_window.fmod_studio_command_replay_set_load_bank_callback = function(command_replay_ref, path) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @returns {real}
	_window.fmod_studio_command_replay_start = function(command_replay_ref) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @returns {real}
	_window.fmod_studio_command_replay_stop = function(command_replay_ref) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_command_replay_get_current_command_multiplatform = function(command_replay_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @returns {enum.FMOD_STUDIO_PLAYBACK_STATE}
	_window.fmod_studio_command_replay_get_playback_state = function(command_replay_ref) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @param {bool} pause 
	/// @returns {real}
	_window.fmod_studio_command_replay_set_paused = function(command_replay_ref, pause) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @returns {bool}
	_window.fmod_studio_command_replay_get_paused = function(command_replay_ref) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @param {real} command_index 
	/// @returns {real}
	_window.fmod_studio_command_replay_seek_to_command = function(command_replay_ref, command_index) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @param {real} time 
	/// @returns {real}
	_window.fmod_studio_command_replay_seek_to_time = function(command_replay_ref, time) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @param {real} time 
	/// @returns {real}
	_window.fmod_studio_command_replay_get_command_at_time = function(command_replay_ref, time) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @returns {real}
	_window.fmod_studio_command_replay_get_command_count = function(command_replay_ref) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @param {real} command_index 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_command_replay_get_command_info_multiplatform = function(command_replay_ref, command_index, buff_return) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @param {real} command_index 
	/// @returns {string}
	_window.fmod_studio_command_replay_get_command_string = function(command_replay_ref, command_index) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @returns {real}
	_window.fmod_studio_command_replay_get_length = function(command_replay_ref) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @returns {real}
	_window.fmod_studio_command_replay_get_system_object = function(command_replay_ref) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @returns {bool}
	_window.fmod_studio_command_replay_is_valid = function(command_replay_ref) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @param {real} data 
	/// @returns {real}
	_window.fmod_studio_command_replay_set_user_data = function(command_replay_ref, data) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @returns {real}
	_window.fmod_studio_command_replay_get_user_data = function(command_replay_ref) {
		
	};

	/// @desc
	/// @param {real} command_replay_ref 
	/// @returns {real}
	_window.fmod_studio_command_replay_release = function(command_replay_ref) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {real}
	_window.fmod_studio_event_description_create_instance = function(event_description_ref) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = ev.createInstance(ret);
		if (ext.lastResult != fmod.OK) {
			return 0;
		}
		return createHandle(/**@type {FMOD.EventInstance}*/(ret.val), ext.system);
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {real}
	_window.fmod_studio_event_description_get_instance_count = function(event_description_ref) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return 0;
		}
		ext.lastResult = ev.getInstanceCount(ret);
		return ret.val;
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	_window.fmod_studio_event_description_get_instance_list_multiplatform = function(event_description_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {real}
	_window.fmod_studio_event_description_release_all_instances = function(event_description_ref) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = ev.releaseAllInstances();
		destroyAssociatedHandles(ev);
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {real}
	_window.fmod_studio_event_description_load_sample_data = function(event_description_ref) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = ev.loadSampleData();
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {real}
	_window.fmod_studio_event_description_unload_sample_data = function(event_description_ref) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = ev.unloadSampleData();
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {enum.FMOD_STUDIO_LOADING_STATE}
	_window.fmod_studio_event_description_get_sample_loading_state = function(event_description_ref) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = ev.getSampleLoadingState(ret);
		return ret.val;
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {bool}
	_window.fmod_studio_event_description_is_3d = function(event_description_ref) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {bool}
	_window.fmod_studio_event_description_is_doppler_enabled = function(event_description_ref) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {bool}
	_window.fmod_studio_event_description_is_oneshot = function(event_description_ref) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {bool}
	_window.fmod_studio_event_description_is_snapshot = function(event_description_ref) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {bool}
	_window.fmod_studio_event_description_is_stream = function(event_description_ref) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {bool}
	_window.fmod_studio_event_description_has_sustain_point = function(event_description_ref) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_description_get_min_max_distance_multiplatform = function(event_description_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {real}
	_window.fmod_studio_event_description_get_sound_size = function(event_description_ref) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @param {string} name 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_description_get_parameter_description_by_name_multiplatform = function(event_description_ref, name, buff_return) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		// for some reason this function puts stuff directly into ret instead of ret.val
		const _ret = {};
		ext.lastResult = ev.getParameterDescriptionByName(
			name,
			/** @type {FMOD.STUDIO_PARAMETER_DESCRIPTION} */ (/** @type {unknown} */ (_ret))
		);

		// apparently gamemaker can't handle id variables
		_ret.parameter_id = _ret.id;
		delete _ret.id;
		_ret.guid = GUIDtoString(_ret.guid);

		buffer_reset(buff_return);
		ext_buffer_pack(buff_return, _ret);
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @param {Pointer} buff_args 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_description_get_parameter_description_by_id_multiplatform = function(event_description_ref, buff_args, buff_return) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		buffer_reset(buff_args);
		const args = ext_buffer_unpack_array(buff_args);
		const _ret = {};
		ext.lastResult = ev.getParameterDescriptionByID(
			args[0], 
			/** @type {FMOD.STUDIO_PARAMETER_DESCRIPTION} */ (/** @type {unknown} */ (_ret))
		);

		// apparently gamemaker can't handle id variables
		_ret.parameter_id = _ret.id;
		delete _ret.id;
		_ret.guid = GUIDtoString(_ret.guid);

		buffer_reset(buff_return);
		ext_buffer_pack(
			buff_return,
			/** @type {FMOD.STUDIO_PARAMETER_DESCRIPTION} */ (/** @type {unknown} */ (_ret))
		);
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @param {real} index 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_description_get_parameter_description_by_index_multiplatform = function(event_description_ref, index, buff_return) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		const _ret = {};
		ext.lastResult = ev.getParameterDescriptionByIndex(
			index,
			/** @type {FMOD.STUDIO_PARAMETER_DESCRIPTION} */ (/** @type {unknown} */ (_ret))
		);

		// apparently gamemaker can't handle id variables
		_ret.parameter_id = _ret.id;
		delete _ret.id;
		_ret.guid = GUIDtoString(_ret.guid);

		buffer_reset(buff_return);
		ext_buffer_pack(
			buff_return,
			/** @type {FMOD.STUDIO_PARAMETER_DESCRIPTION} */ (/** @type {unknown} */ (_ret))
		)
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {real}
	_window.fmod_studio_event_description_get_parameter_description_count = function(event_description_ref) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return 0;
		}
		ext.lastResult = ev.getParameterDescriptionCount(ret);
		return /** @type {number} */ (ret.val);
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @param {string} name 
	/// @param {real} label_index 
	/// @returns {string}
	_window.fmod_studio_event_description_get_parameter_label_by_name = function(event_description_ref, name, label_index) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return 0;
		}
		ext.lastResult = ev.getParameterLabelByName(name, label_index, ret, 1024, ret2);
		return /** @type {string} */ (ret.val);
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @param {Pointer} buff_args 
	/// @param {real} label_index 
	/// @returns {string}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_description_get_parameter_label_by_id_multiplatform = function(event_description_ref, buff_args, label_index) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return 0;
		}
		buffer_reset(buff_args);
		const args = ext_buffer_unpack_array(buff_args);
		ext.lastResult = ev.getParameterLabelByID(args[0], label_index, ret, 1024, ret2);
		return /** @type {string} */ (ret.val);	
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @param {real} index 
	/// @param {real} label_index 
	/// @returns {string}
	_window.fmod_studio_event_description_get_parameter_label_by_index = function(event_description_ref, index, label_index) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return 0;
		}
		ext.lastResult = ev.getParameterLabelByIndex(index, label_index, ret, 1024, ret2);
		return /** @type {string} */ (ret.val);
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @param {string} name 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	// HIDDEN
	_window.fmod_studio_event_description_get_user_property_multiplatform = function(event_description_ref, name, buff_return) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @param {real} index 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	// HIDDEN
	_window.fmod_studio_event_description_get_user_property_by_index_multiplatform = function(event_description_ref, index, buff_return) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @param {string} name 
	/// @returns {real}
	_window.fmod_studio_event_description_get_user_property_count = function(event_description_ref) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {string}
	_window.fmod_studio_event_description_get_id = function(event_description_ref) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return "";
		}
		ext.lastResult = ev.getID(ret);
		return GUIDtoString(/** @type {FMOD.GUID} */ (ret.val));
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {real}
	_window.fmod_studio_event_description_get_length = function(event_description_ref) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return 0;
		}
		ext.lastResult = ev.getLength(ret);
		return /** @type {number} */ (ret.val);
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {string}
	_window.fmod_studio_event_description_get_path = function(event_description_ref) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return "";
		}
		ext.lastResult = ev.getPath(ret, 1024, ret2);
		return /** @type {string} */ (ret.val);
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @param {enum.FMOD_STUDIO_EVENT_CALLBACK} type 
	/// @returns {real}
	_window.fmod_studio_event_description_set_callback = function(event_description_ref, type) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @param {real} data 
	/// @returns {real}
	_window.fmod_studio_event_description_set_user_data = function(event_description_ref, data) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {real}
	_window.fmod_studio_event_description_get_user_data = function(event_description_ref) {
		
	};

	/// @desc
	/// @param {real} event_description_ref 
	/// @returns {bool}
	_window.fmod_studio_event_description_is_valid = function(event_description_ref) {
		const ev = /**@type {FMOD.EventDescription}*/(getHandle(event_description_ref));
		if (!ev) {
			return false;
		}
		return ev.isValid();
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @returns {real}
	_window.fmod_studio_event_instance_start = function(event_instance_ref) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = inst.start();
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {enum.FMOD_STUDIO_STOP_MODE} mode 
	/// @returns {real}
	_window.fmod_studio_event_instance_stop = function(event_instance_ref, mode) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = inst.stop(mode);
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @returns {enum.FMOD_STUDIO_PLAYBACK_STATE}
	_window.fmod_studio_event_instance_get_playback_state = function(event_instance_ref) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		ext.lastResult = inst.getPlaybackState(ret);
		return ret.val;
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {bool} pause 
	/// @returns {real}
	_window.fmod_studio_event_instance_set_paused = function(event_instance_ref, pause) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = inst.setPaused(pause);
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @returns {bool}
	_window.fmod_studio_event_instance_get_paused = function(event_instance_ref) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = inst.getPaused(ret);
		return /**@type {boolean}*/(ret.val);
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @returns {real}
	_window.fmod_studio_event_instance_keyoff = function(event_instance_ref) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {real} pitch 
	/// @returns {real}
	_window.fmod_studio_event_instance_set_pitch = function(event_instance_ref, pitch) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @returns {real}
	_window.fmod_studio_event_instance_get_pitch = function(event_instance_ref) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {enum.FMOD_STUDIO_EVENT_PROPERTY} property 
	/// @param {real} value 
	/// @returns {real}
	_window.fmod_studio_event_instance_set_property = function(event_instance_ref, property, value) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {enum.FMOD_STUDIO_EVENT_PROPERTY} property 
	/// @returns {real}
	_window.fmod_studio_event_instance_get_property = function(event_instance_ref, property) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {real} position 
	/// @returns {real}
	_window.fmod_studio_event_instance_set_timeline_position = function(event_instance_ref, position) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = inst.setTimelinePosition(position);
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @returns {real}
	_window.fmod_studio_event_instance_get_timeline_position = function(event_instance_ref) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return 0;
		}
		ext.lastResult = inst.getTimelinePosition(ret);
		return /** @type {number} */(ret.val);
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {real} volume 
	/// @returns {real}
	_window.fmod_studio_event_instance_set_volume = function(event_instance_ref, volume) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = inst.setVolume(volume);
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_instance_get_volume_multiplatform = function(event_instance_ref, buff_return) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		buffer_reset(buff_return);
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			ext_buffer_pack(buff_return, undefined);
			return;
		}
		ext.lastResult = inst.getVolume(ret, ret2);
		ext_buffer_pack(buff_return, {
			volume: /**@type {number}*/(ret.val),
			finalVolume: /**@type {number}*/(ret2.val)
		});
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @returns {bool}
	_window.fmod_studio_event_instance_is_virtual = function(event_instance_ref) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return false;
		}
		ext.lastResult = inst.isVirtual(ret);
		return /** @type {boolean} */(ret.val);
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_instance_set_3d_attributes_multiplatform = function(event_instance_ref, buff_args) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		buffer_reset(buff_args);
		const args = ext_buffer_unpack_array(buff_args);
		ext.lastResult = inst.set3DAttributes(args[0]);
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_instance_get_3d_attributes_multiplatform = function(event_instance_ref, buff_return) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		buffer_reset(buff_return);
		ext.lastResult = inst.get3DAttributes(ret);
		ext_buffer_pack(buff_return, ret.val);
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {real} mask 
	/// @returns {real}
	_window.fmod_studio_event_instance_set_listener_mask = function(event_instance_ref, mask) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @returns {real}
	_window.fmod_studio_event_instance_get_listener_mask = function(event_instance_ref) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_instance_get_min_max_distance_multiplatform = function(event_instance_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {string} name 
	/// @param {real} value 
	/// @param {real} ignore_seek_speed 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_instance_set_parameter_by_name_multiplatform = function(event_instance_ref, name, value, ignore_seek_speed) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = inst.setParameterByName(name, value, ignore_seek_speed);
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {string} name 
	/// @param {string} label 
	/// @param {real} ignore_seek_speed 
	/// @returns {real}
	_window.fmod_studio_event_instance_set_parameter_by_name_with_label = function(event_instance_ref, name, label, ignore_seek_speed) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = inst.setParameterByNameWithLabel(name, label, ignore_seek_speed);
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {string} name 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_instance_get_parameter_by_name_multiplatform = function(event_instance_ref, name, buff_return) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = inst.getParameterByName(name, ret, ret2);
		buffer_reset(buff_return);
		ext_buffer_pack(buff_return, {
			value: /** @type {number} */(ret.val),
			final_value: /** @type {number} */(ret2.val),
		});
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {Pointer} buff_args 
	/// @param {real} value 
	/// @param {bool} ignore_seek_speed 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_instance_set_parameter_by_id_multiplatform = function(event_instance_ref, buff_args, value, ignore_seek_speed) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		buffer_reset(buff_args);
		const args = ext_buffer_unpack_array(buff_args);
		ext.lastResult = inst.setParameterByID(args[0], value, ignore_seek_speed);
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {Pointer} buff_args 
	/// @param {string} label 
	/// @param {real} ignore_seek_speed 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_instance_set_parameter_by_id_with_label_multiplatform = function(event_instance_ref, buff_args, label, ignore_seek_speed) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		buffer_reset(buff_args);
		const args = ext_buffer_unpack_array(buff_args);
		ext.lastResult = inst.setParameterByIDWithLabel(args[0], label, ignore_seek_speed);
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {Pointer} buff_args 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_instance_get_parameter_by_id_multiplatform = function(event_instance_ref, buff_args, buff_return) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		buffer_reset(buff_args);
		const args = ext_buffer_unpack_array(buff_args);
		ext.lastResult = inst.getParameterByID(args[0], ret, ret2);
		buffer_reset(buff_return);
		ext_buffer_pack(buff_return, {
			value: /** @type {number} */(ret.val || 0),
			final_value: /** @type {number} */(ret2.val || 0),
		});
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @returns {real}
	_window.fmod_studio_event_instance_get_channel_group = function(event_instance_ref) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {real} index 
	/// @param {real} level 
	/// @returns {real}
	_window.fmod_studio_event_instance_set_reverb_level = function(event_instance_ref, index, level) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {real} index 
	/// @returns {real}
	_window.fmod_studio_event_instance_get_reverb_level = function(event_instance_ref, index) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_instance_get_cpu_usage_multiplatform = function(event_instance_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_event_instance_get_memory_usage_multiplatform = function(event_instance_ref, buff_return) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {enum.FMOD_STUDIO_EVENT_CALLBACK} type 
	/// @returns {real}
	_window.fmod_studio_event_instance_set_callback = function(event_instance_ref, type) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = inst.setCallback((type, event, parameters) => {
			const async_map = {
				type: "fmod_studio_event_description_set_callback",
				kind: type,
				event_instance_ref: createHandle(event, ext.system),
			};


			switch (type)
			{
				case fmod.STUDIO_EVENT_CALLBACK_CREATED:
					break;
				case fmod.STUDIO_EVENT_CALLBACK_DESTROYED:
					break;
				case fmod.STUDIO_EVENT_CALLBACK_STARTING:
					break;
				case fmod.STUDIO_EVENT_CALLBACK_STARTED:
					break;
				case fmod.STUDIO_EVENT_CALLBACK_RESTARTED:
					break;
				case fmod.STUDIO_EVENT_CALLBACK_STOPPED:
					break;
				case fmod.STUDIO_EVENT_CALLBACK_START_FAILED:
					break;
				case fmod.STUDIO_EVENT_CALLBACK_CREATE_PROGRAMMER_SOUND:
				case fmod.STUDIO_EVENT_CALLBACK_DESTROY_PROGRAMMER_SOUND:
				{
					const sound_prop = /** @type {FMOD.STUDIO_PROGRAMMER_SOUND_PROPERTIES} */(parameters);
					async_map.name = sound_prop.name;
					async_map.sub_sound_index = sound_prop.subsoundIndex;

					const sound = sound_prop.sound;
					const sound_id = createHandle(sound, ext.system);

					async_map.sound_ref = sound;

					break;
				}
				case fmod.STUDIO_EVENT_CALLBACK_PLUGIN_CREATED:
				case fmod.STUDIO_EVENT_CALLBACK_PLUGIN_DESTROYED:
				{
					// getUserData() will crash the app
					// FMOD_STUDIO_PLUGIN_INSTANCE_PROPERTIES* plugin_prop = (FMOD_STUDIO_PLUGIN_INSTANCE_PROPERTIES*)parameters;
					// async_add_string(map, "name", plugin_prop->name);
				}
				break;
				case fmod.STUDIO_EVENT_CALLBACK_TIMELINE_MARKER:
				{
					const timeline_prop = /** @type {FMOD.STUDIO_TIMELINE_MARKER_PROPERTIES} */ (parameters);
					async_map.name = timeline_prop.name;
					async_map.position = timeline_prop.position;
					break;
				}
				case fmod.STUDIO_EVENT_CALLBACK_TIMELINE_BEAT:
				{
					const properties = /** @type {FMOD.STUDIO_TIMELINE_BEAT_PROPERTIES} */ (parameters);

					async_map.bar = properties.bar;
					async_map.beat = properties.beat;
					async_map.position = properties.position;
					async_map.tempo = properties.tempo;
					async_map.time_signature_lower = properties.timesignaturelower;
					async_map.time_signature_upper = properties.timesignatureupper;
				}
				break;
				case fmod.STUDIO_EVENT_CALLBACK_SOUND_PLAYED:
					break;
				case fmod.STUDIO_EVENT_CALLBACK_SOUND_STOPPED:
					break;
				case fmod.STUDIO_EVENT_CALLBACK_REAL_TO_VIRTUAL:
					break;
				case fmod.STUDIO_EVENT_CALLBACK_VIRTUAL_TO_REAL:
					break;
				case fmod.STUDIO_EVENT_CALLBACK_START_EVENT_COMMAND:
					break;
				case fmod.STUDIO_EVENT_CALLBACK_NESTED_TIMELINE_BEAT:
				{
					const properties = /** @type {FMOD.STUDIO_TIMELINE_NESTED_BEAT_PROPERTIES} */ (parameters);
					async_map.event_id = GUIDtoString(properties.eventid);
					async_map.bar = properties.properties.bar;
					async_map.beat = properties.properties.beat;
					async_map.position = properties.properties.position;
					async_map.tempo = properties.properties.tempo;
					async_map.time_signature_lower = properties.properties.timesignaturelower;
					async_map.time_signature_upper = properties.properties.timesignatureupper;

					break;
				}
				break;
				case fmod.STUDIO_EVENT_CALLBACK_ALL:
					break;
			}

			ext.callbacks.push(async_map);
			console.log(async_map);
			return fmod.OK;
		}, type);
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @param {real} data 
	/// @returns {real}
	_window.fmod_studio_event_instance_set_user_data = function(event_instance_ref, data) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @returns {real}
	_window.fmod_studio_event_instance_get_user_data = function(event_instance_ref) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @returns {real}
	_window.fmod_studio_event_instance_get_description = function(event_instance_ref) {
		
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @returns {real}
	_window.fmod_studio_event_instance_release = function(event_instance_ref) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			ext.lastResult = fmod.ERR_EVENT_NOTFOUND;
			return;
		}
		ext.lastResult = inst.release();
		destroyHandle(inst);
	};

	/// @desc
	/// @param {real} event_instance_ref 
	/// @returns {bool}
	_window.fmod_studio_event_instance_is_valid = function(event_instance_ref) {
		const inst = /**@type {FMOD.EventInstance}*/(getHandle(event_instance_ref));
		if (!inst) {
			return false;
		}
		return inst.isValid();
	};

	/// @desc
	/// @returns {real}
	_window.fmod_studio_system_create = function() {
		if (ext.system || !fmod.Studio_System_Create) {
			return;
		}
		ext.lastResult = fmod.Studio_System_Create(ret);
		if (ext.lastResult != fmod.OK) {
			return;
		}

		ext.system = ret.val;
	};

	/// @desc
	/// @param {real} max_channels 
	/// @param {enum.FMOD_STUDIO_INIT} studio_flags 
	/// @param {enum.FMOD_INIT} core_flags 
	/// @returns {real}
	_window.fmod_studio_system_init = function(max_channels, studio_flags, core_flags) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		ext.lastResult = ext.system.initialize(max_channels, studio_flags, core_flags, null);
	};

	/// @desc
	/// @returns {real}
	_window.fmod_studio_system_release = function() {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		ext.lastResult = ext.system.release();
		ext.system = null;
		destroyHandle(ext.system);
	};

	/// @desc
	/// @returns {real}
	// HIDDEN
	_window.fmod_studio_system_update_multiplatform = function() {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		ext.lastResult = ext.system.update();
	};

	/// @desc
	/// @returns {real}
	_window.fmod_studio_system_flush_commands = function() {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_studio_system_flush_sample_loading = function() {
		
	};

	/// @desc
	/// @param {enum.FMOD_STUDIO_LOAD_BANK} flags 
	/// @returns {real}
	_window.fmod_studio_system_load_bank_custom = function(flags) {
		
	};

	/// @desc
	/// @param {string} filename 
	/// @param {enum.FMOD_STUDIO_LOAD_BANK} flags 
	/// @returns {real}
	_window.fmod_studio_system_load_bank_file = function(filename, flags) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		ext.lastResult = ext.system.loadBankFile(filename.toLowerCase(), flags, ret);
		if (ext.lastResult != fmod.OK) {
			return 0;
		}
		return createHandle(ret.val, ext.system);
	};

	/// @desc
	/// @param {Pointer} buff_data 
	/// @param {real} length 
	/// @param {enum.FMOD_STUDIO_LOAD_MEMORY_MODE} mode 
	/// @param {enum.FMOD_STUDIO_LOAD_BANK} flags 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_load_bank_memory_multiplatform = function(buff_data, length, mode, flags) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_studio_system_unload_all = function() {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		ext.lastResult = ext.system.unloadAll();
	};

	/// @desc
	/// @param {string} path 
	/// @returns {real}
	_window.fmod_studio_system_get_bank = function(path) {
		
	};

	/// @desc
	/// @param {string} guid_str 
	/// @returns {real}
	_window.fmod_studio_system_get_bank_by_id = function(guid_str) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_studio_system_get_bank_count = function() {
		
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_get_bank_list_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @param {real} listener_index 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_set_listener_attributes_multiplatform = function(listener_index, buff_args) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		buffer_reset(buff_args);
		const args = ext_buffer_unpack_array(buff_args);
		ext.lastResult = ext.system.setListenerAttributes(listener_index, args[0], args[1] || null);
	};

	/// @desc
	/// @param {real} listener_index 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_get_listener_attributes_multiplatform = function(listener_index, buff_return) {
		buffer_reset(buff_return);
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			ext_buffer_pack(buff_return, undefined);
			return;
		}
		ext.lastResult = ext.system.getListenerAttributes(listener_index, ret, ret2);
		ext_buffer_pack(buff_return, {
			attributes: /** @type {FMOD._3D_ATTRIBUTES} */(ret.val),
			attenuation: /** @type {FMOD.VECTOR} */(ret2.val),
		});
	};

	/// @desc
	/// @param {real} listener_index 
	/// @param {real} weight 
	/// @returns {real}
	_window.fmod_studio_system_set_listener_weight = function(listener_index, weight) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		ext.lastResult = ext.system.setListenerWeight(listener_index, weight);
	};

	/// @desc
	/// @param {real} listener_index 
	/// @returns {real}
	_window.fmod_studio_system_get_listener_weight = function(listener_index) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return 0;
		}
		ext.lastResult = ext.system.getListenerWeight(listener_index, ret);
		return /** @type {number} */(ret.val);
	};

	/// @desc
	/// @param {real} num 
	/// @returns {real}
	_window.fmod_studio_system_set_num_listeners = function(num) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		ext.lastResult = ext.system.setNumListeners(num);
	};

	/// @desc
	/// @returns {real}
	_window.fmod_studio_system_get_num_listeners = function() {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return 0;
		}
		ext.lastResult = ext.system.getNumListeners(ret);
		return /** @type {number} */(ret.val);
	};

	/// @desc
	/// @param {string} path 
	/// @returns {real}
	_window.fmod_studio_system_get_bus = function(path) {
		
	};

	/// @desc
	/// @param {string} guid 
	/// @returns {real}
	_window.fmod_studio_system_get_bus_by_id = function(guid) {
		
	};

	/// @desc
	/// @param {string} path 
	/// @returns {real}
	_window.fmod_studio_system_get_event = function(path) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		ext.lastResult = ext.system.getEvent(path, ret);
		if (ext.lastResult != fmod.OK) {
			console.warn("fmod_studio_system_get_event:", ext.lastResult, ret);
			return 0;
		}
		return createHandle(ret.val, ext.system);
	};

	/// @desc
	/// @param {string} guid_str 
	/// @returns {real}
	_window.fmod_studio_system_get_event_by_id = function(guid_str) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		ext.lastResult = ext.system.getEventByID(guid_str, ret);
		if (ext.lastResult != fmod.OK) {
			return 0;
		}
		return createHandle(ret.val, ext.system);
	};

	/// @desc
	/// @param {Pointer} buff_args 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_get_parameter_by_id_multiplatform = function(buff_args, buff_return) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		buffer_reset(buff_args);
		const args = ext_buffer_unpack_array(buff_args);
		ext.lastResult = ext.system.getParameterByName(args[0], ret, ret2);
		buffer_reset(buff_return);
		ext_buffer_pack(buff_return, {
			value: /** @type {number} */(ret.val),
			final_value: /** @type {number} */(ret2.val),
		});
	};

	/// @desc
	/// @param {Pointer} buff_args 
	/// @param {real} value 
	/// @param {bool} ignore_seek_speed 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_set_parameter_by_id_multiplatform = function(buff_args, value, ignore_seek_speed) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		buffer_reset(buff_args);
		const args = ext_buffer_unpack_array(buff_args);
		ext.lastResult = ext.system.setParameterByID(args[0], value, ignore_seek_speed);
	};

	/// @desc
	/// @param {Pointer} buff_args 
	/// @param {string} label 
	/// @param {bool} ignore_seek_speed 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_set_parameter_by_id_with_label_multiplatform = function(buff_args, label, ignore_seek_speed) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		buffer_reset(buff_args);
		const args = ext_buffer_unpack_array(buff_args);
		ext.lastResult = ext.system.setParameterByIDWithLabel(args[0], label, ignore_seek_speed);
	};

	/// @desc
	/// @param {string} name 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_get_parameter_by_name_multiplatform = function(name, buff_return) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		ext.lastResult = ext.system.getParameterByName(name, ret, ret2);
		buffer_reset(buff_return);
		ext_buffer_pack(buff_return, {
			value: /** @type {number} */(ret.val),
			final_value: /** @type {number} */(ret2.val),
		});
	};

	/// @desc
	/// @param {string} name 
	/// @param {real} value 
	/// @param {bool} ignore_seek_speed 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_set_parameter_by_name_multiplatform = function(name, value, ignoreseekspeed) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		ext.lastResult = ext.system.setParameterByName(name, value, ignoreseekspeed);
	};

	/// @desc
	/// @param {string} name 
	/// @param {string} label 
	/// @param {bool} ignore_seek_speed 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_set_parameter_by_name_with_label_multiplatform = function(name, label, ignoreseekspeed) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		ext.lastResult = ext.system.setParameterByNameWithLabel(name, label, ignoreseekspeed);
	};

	/// @desc
	/// @param {string} name 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_get_parameter_description_by_name_multiplatform = function(name, buff_return) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		// for some reason this function puts stuff directly into ret instead of ret.val
		const _ret = {};
		ext.lastResult = ext.system.getParameterDescriptionByName(
			name,
			/** @type {FMOD.STUDIO_PARAMETER_DESCRIPTION} */ (/** @type {unknown} */ (_ret))
		);

		// apparently gamemaker can't handle id variables
		_ret.parameter_id = _ret.id;
		delete _ret.id;
		_ret.guid = GUIDtoString(_ret.guid);

		buffer_reset(buff_return);
		ext_buffer_pack(buff_return, _ret);
	};

	/// @desc
	/// @param {Pointer} buff_args 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_get_parameter_description_by_id_multiplatform = function(buff_args, buff_return) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		buffer_reset(buff_args);
		const args = ext_buffer_unpack_array(buff_args);
		// for some reason this function puts stuff directly into ret instead of ret.val
		const _ret = {};
		ext.lastResult = ext.system.getParameterDescriptionByID(
			args[0],
			/** @type {FMOD.STUDIO_PARAMETER_DESCRIPTION} */ (/** @type {unknown} */ (_ret))
		);

		// apparently gamemaker can't handle id variables
		_ret.parameter_id = _ret.id;
		delete _ret.id;
		_ret.guid = GUIDtoString(_ret.guid);

		buffer_reset(buff_return);
		ext_buffer_pack(buff_return, _ret);
	};

	/// @desc
	/// @returns {real}
	_window.fmod_studio_system_get_parameter_description_count = function() {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return;
		}
		ext.lastResult = ext.system.getParameterDescriptionCount(ret);
		return ret.val;
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_get_parameter_description_list_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @param {string} name 
	/// @param {real} labelindex 
	/// @returns {string}
	_window.fmod_studio_system_get_parameter_label_by_name = function(name, labelindex) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return 0;
		}
		ext.lastResult = ext.system.getParameterLabelByName(name, labelindex, ret, 1024, ret2);
		return /** @type {string} */ (ret.val);
	};

	/// @desc
	/// @param {Pointer} buff_args 
	/// @param {real} label_index 
	/// @returns {string}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_get_parameter_label_by_id_multiplatform = function(buff_args, label_index) {
		if (!ext.system) {
			ext.lastResult = fmod.ERR_NOTREADY;
			return 0;
		}
		buffer_reset(buff_args);
		const args = ext_buffer_unpack_array(buff_args);
		ext.lastResult = ext.system.getParameterLabelByID(args[0], label_index, ret, 1024, ret2);
		return /** @type {string} */ (ret.val);	
	};

	/// @desc
	/// @param {string} path 
	/// @returns {real}
	_window.fmod_studio_system_get_vca = function(path) {
		
	};

	/// @desc
	/// @param {string} guid_str 
	/// @returns {real}
	_window.fmod_studio_system_get_vca_by_id = function(guid_str) {
		
	};

	/// @desc
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_set_advanced_settings_multiplatform = function(buff_args) {
		
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_get_advanced_settings_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @param {string} filename 
	/// @param {real} flags 
	/// @returns {real}
	_window.fmod_studio_system_start_command_capture = function(filename, flags) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_studio_system_stop_command_capture = function() {
		
	};

	/// @desc
	/// @param {string} filename 
	/// @param {real} flags 
	/// @returns {real}
	_window.fmod_studio_system_load_command_replay = function(filename, flags) {
		
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_get_buffer_usage_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_studio_system_reset_buffer_usage = function() {
		
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_get_cpu_usage_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_get_memory_usage_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @param {enum.FMOD_STUDIO_SYSTEM_CALLBACK} type 
	/// @returns {real}
	_window.fmod_studio_system_set_callback = function(type) {
		
	};

	/// @desc
	/// @param {real} data 
	/// @returns {real}
	_window.fmod_studio_system_set_user_data = function(data) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_studio_system_get_user_data = function() {
		
	};

	/// @desc
	/// @param {string} key 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_studio_system_get_sound_info_multiplatform = function(key, buff_return) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_studio_system_get_core_system = function() {
		return ext.system;	
	};

	/// @desc
	/// @param {string} path 
	/// @returns {string}
	_window.fmod_studio_system_lookup_id = function(path) {
		
	};

	/// @desc
	/// @param {string} str_guid 
	/// @returns {string}
	_window.fmod_studio_system_lookup_path = function(str_guid) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_studio_system_is_valid = function() {
		if (!ext.system) {
			return false;
		}
		return ext.system.isValid();
	};

	/// @desc
	/// @param {real} vca_ref 
	/// @param {real} volume 
	/// @returns {real}
	_window.fmod_studio_vca_set_volume = function(vca_ref, volume) {
		
	};

	/// @desc
	/// @param {real} vca_ref 
	/// @returns {real}
	_window.fmod_studio_vca_get_volume = function(vca_ref) {
		
	};

	/// @desc
	/// @param {real} vca_ref 
	/// @returns {string}
	_window.fmod_studio_vca_get_id = function(vca_ref) {
		
	};

	/// @desc
	/// @param {real} vca_ref 
	/// @returns {string}
	_window.fmod_studio_vca_get_path = function(vca_ref) {
		
	};

	/// @desc
	/// @param {real} vca_ref 
	/// @returns {real}
	_window.fmod_studio_vca_is_valid = function(vca_ref) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_create = function() {
		
	};

	/// @desc
	/// @param {real} system_ref 
	/// @returns {real}
	_window.fmod_system_select = function(system_ref) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_count = function() {
		
	};

	/// @desc
	/// @param {real} max_channels 
	/// @param {enum.FMOD_INIT} flags 
	/// @returns {real}
	_window.fmod_system_init = function(max_channels, flags) {
		
	};

	/// @desc
	/// @param {real} system_ref 
	/// @returns {real}
	_window.fmod_system_release = function(system_ref) {
		
	};

	/// @desc
	/// @param {real} system_ref 
	/// @returns {real}
	_window.fmod_system_close = function(system_ref) {
		
	};

	/// @desc
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_update_multiplatform = function() {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_mixer_suspend = function() {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_mixer_resume = function() {
		
	};

	/// @desc
	/// @param {enum.FMOD_OUTPUTTYPE} output 
	/// @returns {real}
	_window.fmod_system_set_output = function(output) {
		const coreSys = getCoreSystem();
		if (!coreSys) return;
		ext.lastResult = coreSys.setOutput(output);
	};

	/// @desc
	/// @returns {enum.FMOD_OUTPUTTYPE}
	_window.fmod_system_get_output = function() {
		const coreSys = getCoreSystem();
		if (!coreSys) return -1;
		ext.lastResult = coreSys.getOutput(ret);
		return /** @type {FMOD.OUTPUTTYPE} */(ret.val);
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_get_num_drivers = function() {
		const coreSys = getCoreSystem();
		if (!coreSys) return 0;
		ext.lastResult = coreSys.getNumDrivers(ret);
		return /** @type {number} */(ret.val);
	};

	/// @desc
	/// @param {real} driver_index 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_get_driver_info_multiplatform = function(system_id, buff_return) {
		
	};

	/// @desc
	/// @param {real} driver 
	/// @returns {real}
	_window.fmod_system_set_driver = function(driver) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_get_driver = function() {
		
	};

	/// @desc
	/// @param {real} software_channels 
	/// @returns {real}
	_window.fmod_system_set_software_channels = function(software_channels) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_get_software_channels = function() {
		
	};

	/// @desc
	/// @param {real} sample_rate 
	/// @param {real} speaker_mode 
	/// @param {real} num_raw_speakers 
	/// @returns {real}
	_window.fmod_system_set_software_format = function(sample_rate, speaker_mode, num_raw_speakers) {
		const coreSys = getCoreSystem();
		if (!coreSys) return;
		ext.lastResult = coreSys.setSoftwareFormat(sample_rate, speaker_mode, num_raw_speakers);
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_get_software_format_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @param {real} buff_size 
	/// @param {real} num_buffers 
	/// @returns {real}
	_window.fmod_system_set_dsp_buffer_size = function(buff_size, num_buffers) {
		const coreSys = getCoreSystem();
		if (!coreSys) return;
		ext.lastResult = coreSys.setDSPBufferSize(buff_size, num_buffers);
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_get_dsp_buffer_size_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @param {real} file_buffer_size 
	/// @param {real} file_buffer_size_type 
	/// @returns {real}
	_window.fmod_system_set_stream_buffer_size = function(file_buffer_size, file_buffer_size_type) {
		
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_get_stream_buffer_size_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_set_advanced_settings_multiplatform = function(buff_args) {
		
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_get_advanced_settings_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @param {enum.FMOD_SPEAKER} speaker 
	/// @param {real} x 
	/// @param {real} y 
	/// @param {real} active 
	/// @returns {real}
	_window.fmod_system_set_speaker_position = function(speaker, x, y, active) {
		
	};

	/// @desc
	/// @param {enum.FMOD_SPEAKER} speaker 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_get_speaker_position_multiplatform = function(speaker, buff_return) {
		
	};

	/// @desc
	/// @param {real} doppler_scale 
	/// @param {real} distance_factor 
	/// @param {real} rolloff_scale 
	/// @returns {real}
	_window.fmod_system_set_3d_settings = function(doppler_scale, distance_factor, rolloff_scale) {
		
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_get_3d_settings_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @param {real} num 
	/// @returns {real}
	_window.fmod_system_set_3d_num_listeners = function(num) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_get_3d_num_listeners = function() {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_set_3d_rolloff_callback = function() {
		
	};

	/// @desc
	/// @param {string} proxy 
	/// @returns {real}
	_window.fmod_system_set_network_proxy = function(proxy) {
		
	};

	/// @desc
	/// @returns {string}
	_window.fmod_system_get_network_proxy = function() {
		
	};

	/// @desc
	/// @param {real} timeout 
	/// @returns {real}
	_window.fmod_system_set_network_timeout = function(timeout) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_get_network_timeout = function() {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_get_version = function() {
		
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_get_channels_playing_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_get_cpu_usage_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_get_file_usage_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @param {enum.FMOD_SPEAKERMODE} source_speaker_mode 
	/// @param {enum.FMOD_SPEAKERMODE} target_speaker_mode 
	/// @param {real} matrix_hop
	/// @param {Pointer} buff_return
	/// @returns {real}
	// HIDDEN
	_window.fmod_system_get_default_mix_matrix_multiplatform = function(source_speaker_mode, target_speaker_mode, matrix_hop, buff_return) {
		
	};

	/// @desc
	/// @param {enum.FMOD_SPEAKERMODE} mode 
	/// @returns {real}
	_window.fmod_system_get_speaker_mode_channels = function(mode) {
		
	};

	/// @desc
	/// @param {string} name_or_data 
	/// @param {real} mode 
	/// @param {Pointer} buff_extra 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_create_sound_multiplatform = function(name_or_data, mode, buff_extra) {
		
	};

	/// @desc
	/// @param {string} name_or_data 
	/// @param {real} mode 
	/// @param {Pointer} buff_extra 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_create_stream_multiplatform = function(name_or_data, mode, buff_extra) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_create_dsp = function() {
		
	};

	/// @desc
	/// @param {enum.FMOD_DSP_TYPE} type 
	/// @returns {real}
	_window.fmod_system_create_dsp_by_type = function(type) {
		
	};

	/// @desc
	/// @param {string} name 
	/// @returns {real}
	_window.fmod_system_create_channel_group = function(name) {
		
	};

	/// @desc
	/// @param {string} name 
	/// @returns {real}
	_window.fmod_system_create_sound_group = function(name) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_create_reverb_3d = function() {
		
	};

	/// @desc
	/// @param {real} sound_ref 
	/// @param {real} channel_group_ref 
	/// @param {bool} pause 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_play_sound_multiplatform = function(sound_ref, channel_group_ref, pause) {
		
	};

	/// @desc
	/// @param {real} dsp_ref 
	/// @param {real} channel_group_ref 
	/// @param {bool} pause 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_play_dsp_multiplatform = function(dsp_ref, channel_group_ref, pause) {
		
	};

	/// @desc
	/// @param {real} index 
	/// @returns {real}
	_window.fmod_system_get_channel = function(index) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_get_master_channel_group = function() {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_get_master_sound_group = function() {
		
	};

	/// @desc
	/// @param {real} listener_index 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_set_3d_listener_attributes_multiplatform = function(listener_index, buff_args) {
		
	};

	/// @desc
	/// @param {real} listener_index 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_get_3d_listener_attributes_multiplatform = function(listener_index, buff_return) {
		
	};

	/// @desc
	/// @param {real} instance_index 
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_set_reverb_properties_multiplatform = function(instance_index, buff_args) {
		
	};

	/// @desc
	/// @param {real} instance_index 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_get_reverb_properties_multiplatform = function(instance_index, buff_return) {
		
	};

	/// @desc
	/// @param {Pointer} buff_args 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_attach_channel_group_to_port_multiplatform = function(buff_args) {
		
	};

	/// @desc
	/// @param {real} channel_group_ref 
	/// @returns {real}
	_window.fmod_system_detach_channel_group_from_port = function(channel_group_ref) {
		
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_get_record_num_drivers_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @param {real} recording_device_index 
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_get_record_driver_info_multiplatform = function(recording_device_index, buff_return) {
		
	};

	/// @desc
	/// @param {real} device_index 
	/// @returns {real}
	_window.fmod_system_get_record_position = function(device_index) {
		
	};

	/// @desc
	/// @param {real} device_index 
	/// @param {real} sound_ref 
	/// @param {bool} loop 
	/// @returns {real}
	_window.fmod_system_record_start = function(device_index, sound_ref, loop) {
		
	};

	/// @desc
	/// @param {real} device_index 
	/// @returns {real}
	_window.fmod_system_record_stop = function(device_index) {
		
	};

	/// @desc
	/// @param {real} device_index 
	/// @returns {bool}
	_window.fmod_system_is_recording = function(device_index) {
		
	};

	/// @desc
	/// @param {real} max_polygons 
	/// @param {real} max_vertices 
	/// @returns {real}
	_window.fmod_system_create_geometry = function(max_polygons, max_vertices) {
		
	};

	/// @desc
	/// @param {real} max_world_size 
	/// @returns {real}
	_window.fmod_system_set_geometry_settings = function(max_world_size) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_get_geometry_settings = function() {
		
	};

	/// @desc
	/// @param {Pointer} buff_args
	/// @param {real} length 
	/// @returns {real}
	// HIDDEN
	_window.fmod_system_load_geometry_multiplatform = function(buff_args, length) {
		
	};

	/// @desc
	/// @param {Pointer} buff_return 
	/// @returns {real}
	/// @ignore
	// HIDDEN
	_window.fmod_system_get_geometry_occlusion_multiplatform = function(buff_return) {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_lock_dsp = function() {
		
	};

	/// @desc
	/// @returns {real}
	_window.fmod_system_unlock_dsp = function() {
		
	};

	/// @desc
	/// @param {enum.FMOD_SYSTEM_CALLBACK} type 
	/// @returns {real}
	_window.fmod_system_set_callback = function(type) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @param {real} data 
	/// @returns {real}
	_window.fmod_system_set_user_data = function(channel_control_ref, data) {
		
	};

	/// @desc
	/// @param {real} channel_control_ref 
	/// @returns {real}
	_window.fmod_system_get_user_data = function(channel_control_ref) {
		
	};

	/// @desc
	/// @param {Pointer} buffer 
	/// @param {real} length 
	/// @returns {real}
	// HIDDEN
	_window.fmod_fetch_callbacks = function(buffer, length) {
		const size = ext_buffer_packed_size(ext.callbacks);
		if (size > (buffer.byteLength ?? buffer?.buffer?.byteLength)) {
			// buffer needs to be resized
			return -size;
		}
		buffer_reset(buffer);
		ext_buffer_pack(buffer, ext.callbacks);
	};

	/// @desc
	/// @returns {enum.FMOD_RESULT}
	_window.fmod_last_result = function() {
		return ext.lastResult;
	};


	// notice for unimplemented functions
	const emptyFuncRegex = /^function\s*\w*\([\w ,]*\)\s*\{\s*\}\s*$/i;
	for (const key of Object.keys(_window)) {
		if (key.startsWith("fmod_") && _window[key] instanceof Function && emptyFuncRegex.test(_window[key].toString())) {
			_window[key] = function() {
				console.warn("UNIMPLEMENTED:", key, arguments);
			};
		}
	}

	async function reloadExt() {
		const code = await (await fetch("http://localhost:8080/YYFMOD.js")).text();
		console.info("[FMODExtHTML5] Semi-live-reloading...");
		(new Function(code))();
	}
	const hasReloaded = !!ext.reload;
	ext.reload = reloadExt;
	if (!hasReloaded && SEMILIVE_RELOAD) reloadExt();
})();