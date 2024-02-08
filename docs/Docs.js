

/**
 * @func fmod_channel_set_frequency
 * @desc > **FMOD Function:** [Channel::setFrequency](https://www.fmod.com/docs/2.02/api/core-api-channel.html#channel_setfrequency)
 * This function sets the frequency or playback rate.
 * @param {real} channel_ref
 * @param {real} frequency
 * @returns {real}
 */
function fmod_channel_set_frequency(channel_ref, frequency) {}


/**
 * @func fmod_channel_get_frequency
 * @desc > **FMOD Function:** [Channel::getFrequency](https://www.fmod.com/docs/2.02/api/core-api-channel.html#channel_getfrequency)
 * This function retrieves the playback frequency or playback rate.
 * @param {real} channel_ref
 * @returns {real}
 */
function fmod_channel_get_frequency(channel_ref) {}


/**
 * @func fmod_channel_set_priority
 * @desc > **FMOD Function:** [Channel::setPriority](https://www.fmod.com/docs/2.02/api/core-api-channel.html#channel_setpriority)
 * This function sets the priority used for virtual voice ordering.
 * @param {real} channel_ref
 * @param {real} priority
 * @returns {real}
 */
function fmod_channel_set_priority(channel_ref, priority) {}


/**
 * @func fmod_channel_get_priority
 * @desc > **FMOD Function:** [Channel::getPriority](https://www.fmod.com/docs/2.02/api/core-api-channel.html#channel_getpriority)
 * This function retrieves the priority used for virtual voice ordering.
 * @param {real} channel_ref
 * @returns {real}
 */
function fmod_channel_get_priority(channel_ref) {}


/**
 * @func fmod_channel_set_position
 * @desc > **FMOD Function:** [Channel::setPosition](https://www.fmod.com/docs/2.02/api/core-api-channel.html#channel_setposition)
 * This function sets the current playback position.
 * @param {real} channel_ref
 * @param {real} position
 * @param {real} time_unit
 * @returns {real}
 */
function fmod_channel_set_position(channel_ref, position, time_unit) {}


/**
 * @func fmod_channel_get_position
 * @desc > **FMOD Function:** [Channel::getPosition](https://www.fmod.com/docs/2.02/api/core-api-channel.html#channel_getposition)
 * This function retrieves the current playback position.
 * @param {real} channel_ref
 * @param {real} time_unit
 * @returns {real}
 */
function fmod_channel_get_position(channel_ref, time_unit) {}


/**
 * @func fmod_channel_set_channel_group
 * @desc > **FMOD Function:** [Channel::setChannelGroup](https://www.fmod.com/docs/2.02/api/core-api-channel.html#channel_setchannelgroup)
 * This function sets the ChannelGroup this object outputs to.
 * @param {real} channel_ref
 * @param {real} channel_group_ref
 * @returns {real}
 */
function fmod_channel_set_channel_group(channel_ref, channel_group_ref) {}


/**
 * @func fmod_channel_get_channel_group
 * @desc > **FMOD Function:** [Channel::getChannelGroup](https://www.fmod.com/docs/2.02/api/core-api-channel.html#channel_getchannelgroup)
 * This function retrieves the ChannelGroup this object outputs to.
 * @param {real} channel_ref
 * @returns {real}
 */
function fmod_channel_get_channel_group(channel_ref) {}


/**
 * @func fmod_channel_set_loop_count
 * @desc > **FMOD Function:** [Channel::setLoopCount](https://www.fmod.com/docs/2.02/api/core-api-channel.html#channel_setloopcount)
 * This function sets the number of times to loop before stopping.
 * @param {real} channel_ref
 * @param {real} loop_count
 * @returns {real}
 */
function fmod_channel_set_loop_count(channel_ref, loop_count) {}


/**
 * @func fmod_channel_get_loop_count
 * @desc > **FMOD Function:** [Channel::getLoopCount](https://www.fmod.com/docs/2.02/api/core-api-channel.html#channel_getloopcount)
 * This function retrieves the number of times to loop before stopping.
 * @param {real} channel_ref
 * @returns {real}
 */
function fmod_channel_get_loop_count(channel_ref) {}


/**
 * @func fmod_channel_set_loop_points
 * @desc > **FMOD Function:** [Channel::setLoopPoints](https://www.fmod.com/docs/2.02/api/core-api-channel.html#channel_setlooppoints)
 * This function sets the loop start and end points.
 * @param {real} channel_ref
 * @param {real} loop_start
 * @param {real} loop_start_type
 * @param {real} loop_end
 * @param {real} loop_end_type
 * @returns {real}
 */
function fmod_channel_set_loop_points(channel_ref, loop_start, loop_start_type, loop_end, loop_end_type) {}


/**
 * @func fmod_channel_get_loop_points
 * @desc > **FMOD Function:** [Channel::getLoopPoints](https://www.fmod.com/docs/2.02/api/core-api-channel.html#channel_getlooppoints)
 * This function retrieves the loop start and end points.
 * @param {real}_channel_ref
 * @param {enum.FMOD_TIMEUNIT} loop_start_type
 * @param {enum.FMOD_TIMEUNIT} loop_end_type
 * @returns {struct.FmodLoopPoints}
 */
function fmod_channel_get_loop_points(channel_ref, loop_start_type, loop_end_type) {}


/**
 * @func fmod_channel_is_virtual
 * @desc > **FMOD Function:** [Channel::isVirtual](https://www.fmod.com/docs/2.02/api/core-api-channel.html#channel_isvirtual)
 * This function retrieves whether the Channel is being emulated by the virtual voice system.
 * @param {real} channel_ref
 * @returns {real}
 */
function fmod_channel_is_virtual(channel_ref) {}


/**
 * @func fmod_channel_get_current_sound
 * @desc > **FMOD Function:** [Channel::getCurrentSound](https://www.fmod.com/docs/2.02/api/core-api-channel.html#channel_getcurrentsound)
 * This function etrieves the currently playing Sound.
 * @param {real} channel_ref
 * @returns {real}
 */
function fmod_channel_get_current_sound(channel_ref) {}


/**
 * @func fmod_channel_get_index
 * @desc > **FMOD Function:** [Channel::getIndex](https://www.fmod.com/docs/2.02/api/core-api-channel.html#channel_getindex)
 * This function retrieves the index of this object in the System Channel pool.
 * @param {real} channel_ref
 * @returns {real}
 */
function fmod_channel_get_index(channel_ref) {}


/**
 * @func fmod_channel_get_system_object
 * @desc > **FMOD Function:** [ChannelControl::getSystemObject](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getsystemobject)
 * 
 * @param {real} channel_ref
 * @returns {real}
 */
function fmod_channel_get_system_object(channel_ref) {}


/**
 * @func fmod_channel_control_is_playing
 * @desc > **FMOD Function:** [ChannelControl::isPlaying](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_isplaying)
 * This function retrieves the playing state.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_is_playing(channel_control_ref) {}


/**
 * @func fmod_channel_control_stop
 * @desc > **FMOD Function:** [ChannelControl::stop](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_stop)
 * This function stops the Channel (or all Channels in nested ChannelGroups) from playing.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_stop(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_paused
 * @desc > **FMOD Function:** [ChannelControl::setPaused](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setpaused)
 * This function sets the paused state.
 * @param {real} channel_control_ref
 * @param {real} paused
 * @returns {real}
 */
function fmod_channel_control_set_paused(channel_control_ref, paused) {}


/**
 * @func fmod_channel_control_get_paused
 * @desc > **FMOD Function:** [ChannelControl::getPaused](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getpaused)
 * This function retrieves the paused state.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_get_paused(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_mode
 * @desc > **FMOD Function:** [ChannelControl::setMode](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setmode)
 * This function sets the playback mode that controls how this object behaves.
 * @param {real} channel_control_ref
 * @param {real} mode
 * @returns {real}
 */
function fmod_channel_control_set_mode(channel_control_ref, mode) {}


/**
 * @func fmod_channel_control_get_mode
 * @desc > **FMOD Function:** [ChannelControl::getMode](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getmode)
 * This function retrieves the playback mode bits that control how this object behaves.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_get_mode(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_pitch
 * @desc > **FMOD Function:** [ChannelControl::setPitch](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setpitch)
 * This function sets the relative pitch / playback rate.
 * @param {real} channel_control_ref
 * @param {real} pitch
 * @returns {real}
 */
function fmod_channel_control_set_pitch(channel_control_ref, pitch) {}


/**
 * @func fmod_channel_control_get_pitch
 * @desc > **FMOD Function:** [ChannelControl::getPitch](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getpitch)
 * This function retrieves the relative pitch / playback rate.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_get_pitch(channel_control_ref) {}


/**
 * @func fmod_channel_control_get_audibility
 * @desc > **FMOD Function:** [ChannelControl::getAudibility](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getaudibility)
 * This function retrieves an estimation of the output volume.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_get_audibility(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_volume
 * @desc > **FMOD Function:** [ChannelControl::setVolume](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setvolume)
 * This function sets the volume level.
 * @param {real} channel_control_ref
 * @param {real} volume
 * @returns {real}
 */
function fmod_channel_control_set_volume(channel_control_ref, volume) {}


/**
 * @func fmod_channel_control_get_volume
 * @desc > **FMOD Function:** [ChannelControl::getVolume](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getvolume)
 * This function retrieves the volume level.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_get_volume(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_volume_ramp
 * @desc > **FMOD Function:** [ChannelControl::setVolumeRamp](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setvolumeramp)
 * This function sets whether volume changes are ramped or instantaneous.
 * @param {real} channel_control_ref
 * @param {real} ramp
 * @returns {real}
 */
function fmod_channel_control_set_volume_ramp(channel_control_ref, ramp) {}


/**
 * @func fmod_channel_control_get_volume_ramp
 * @desc > **FMOD Function:** [ChannelControl::getVolumeRamp](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getvolumeramp)
 * This function retrieves whether volume changes are ramped or instantaneous.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_get_volume_ramp(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_mute
 * @desc > **FMOD Function:** [ChannelControl::setMute](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setmute)
 * This function sets the mute state.
 * @param {real} channel_control_ref
 * @param {real} mute
 * @returns {real}
 */
function fmod_channel_control_set_mute(channel_control_ref, mute) {}


/**
 * @func fmod_channel_control_get_mute
 * @desc > **FMOD Function:** [ChannelControl::getMute](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getmute)
 * This function retrieves the mute state.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_get_mute(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_3d_attributes
 * @desc > **FMOD Function:** [ChannelControl::set3DAttributes](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_set3dattributes)
 * This function sets the 3D position and velocity used to apply panning, attenuation and doppler.
 * @param {real} control_ref
 * @param {struct.FmodVector} pos
 * @param {struct.FmodVector} vel
 */
function fmod_channel_control_set_3d_attributes(channel_control_ref, pos, vel) {}


/**
 * @func fmod_channel_control_get_3d_attributes
 * @desc > **FMOD Function:** [ChannelControl::get3DAttributes](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_get3dattributes)
 * This function retrieves the 3D position and velocity used to apply panning, attenuation and doppler.
 * @param {real} control_ref
 * @returns {struct.FmodControl3DAttributes}
 */
function fmod_channel_control_get_3d_attributes(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_3d_cone_orientation
 * @desc > **FMOD Function:** [ChannelControl::set3DConeOrientation](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_set3dconeorientation)
 * This function sets the orientation of a 3D cone shape, used for simulated occlusion.
 * @param {real} control_ref
 * @param {struct.FmodVector} orientation
 */
function fmod_channel_control_set_3d_cone_orientation(channel_control_ref, orientation) {}


/**
 * @func fmod_channel_control_get_3d_cone_orientation
 * @desc > **FMOD Function:** [ChannelControl::get3DConeOrientation](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_get3dconeorientation)
 * This function retrieves the orientation of a 3D cone shape, used for simulated occlusion.
 * @param {real} control_ref
 * @returns {struct.FmodVector}
 */
function fmod_channel_control_get_3d_cone_orientation(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_3d_cone_settings
 * @desc > **FMOD Function:** [ChannelControl::set3DConeSettings](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_set3dconesettings)
 * This function sets the angles and attenuation levels of a 3D cone shape, for simulated occlusion which is based on direction.
 * @param {real} channel_control_ref
 * @param {real} inside_cone_angle
 * @param {real} outside_cone_angle
 * @param {real} outside_volume
 * @returns {real}
 */
function fmod_channel_control_set_3d_cone_settings(channel_control_ref, inside_cone_angle, outside_cone_angle, outside_volume) {}


/**
 * @func fmod_channel_control_get_3d_cone_settings
 * @desc > **FMOD Function:** [ChannelControl::get3DConeSettings](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_get3dconesettings)
 * This function retrieves the angles and attenuation levels of a 3D cone shape, for simulated occlusion which is based on direction.
 * @param {real} control_ref
 * @returns {struct.Fmod3DConeSettings}
 */
function fmod_channel_control_get_3d_cone_settings(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_3d_custom_rolloff
 * @desc > **FMOD Function:** [ChannelControl::set3DCustomRolloff](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_set3dcustomrolloff)
 * This function sets a custom roll-off shape for 3D distance attenuation.
 * @param {real} control_ref
 * @param {array[struct.FmodVector]} points
 */
function fmod_channel_control_set_3d_custom_rolloff(channel_control_ref, points) {}


/**
 * @func fmod_channel_control_get_3d_custom_rolloff
 * @desc > **FMOD Function:** [ChannelControl::get3DCustomRolloff](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_get3dcustomrolloff)
 * This function retrieves the current custom roll-off shape for 3D distance attenuation.
 * @param {real} control_ref
 * @returns {array[struct.FmodVector]}
 */
function fmod_channel_control_get_3d_custom_rolloff(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_3d_distance_filter
 * @desc > **FMOD Function:** [ChannelControl::set3DDistanceFilter](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_set3ddistancefilter)
 * This function sets an override value for the 3D distance filter.
 * @param {real} channel_control_ref
 * @param {real} custom
 * @param {real} custom_level
 * @param {real} center_freq
 * @returns {real}
 */
function fmod_channel_control_set_3d_distance_filter(channel_control_ref, custom, custom_level, center_freq) {}


/**
 * @func fmod_channel_control_get_3d_distance_filter
 * @desc > **FMOD Function:** [ChannelControl::get3DDistanceFilter](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_get3ddistancefilter)
 * This function retrieves the override values for the 3D distance filter.
 * @param {real} control_ref
 * @returns {struct.FmodControl3DDistanceFilter}
 */
function fmod_channel_control_get_3d_distance_filter(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_3d_doppler_level
 * @desc > **FMOD Function:** [ChannelControl::set3DDopplerLevel](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_set3ddopplerlevel)
 * This function sets the amount by which doppler is scaled.
 * @param {real} channel_control_ref
 * @param {real} level
 * @returns {real}
 */
function fmod_channel_control_set_3d_doppler_level(channel_control_ref, level) {}


/**
 * @func fmod_channel_control_get_3d_doppler_level
 * @desc > **FMOD Function:** [ChannelControl::get3DDopplerLevel](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_get3ddopplerlevel)
 * This function retrieves the amount by which doppler is scaled.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_get_3d_doppler_level(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_3d_level
 * @desc > **FMOD Function:** [ChannelControl::set3DLevel](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_set3dlevel)
 * This function sets the blend between 3D panning and 2D panning.
 * @param {real} channel_control_ref
 * @param {real} level
 * @returns {real}
 */
function fmod_channel_control_set_3d_level(channel_control_ref, level) {}


/**
 * @func fmod_channel_control_get_3d_level
 * @desc > **FMOD Function:** [ChannelControl::get3DLevel](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_get3dlevel)
 * This function retrieves the blend between 3D panning and 2D panning.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_get_3d_level(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_3d_min_max_distance
 * @desc > **FMOD Function:** [ChannelControl::set3DMinMaxDistance](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_set3dminmaxdistance)
 * This function sets the minimum and maximum distances used to calculate the 3D roll-off attenuation.
 * @param {real} channel_control_ref
 * @param {real} min
 * @param {real} max
 * @returns {real}
 */
function fmod_channel_control_set_3d_min_max_distance(channel_control_ref, min, max) {}


/**
 * @func fmod_channel_control_get_3d_min_max_distance
 * @desc > **FMOD Function:** [ChannelControl::get3DMinMaxDistance](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_get3dminmaxdistance)
 * This function retrieves the minimum and maximum distances used to calculate the 3D roll-off attenuation.
 * @param {real} control_ref
 * @returns {struct.FmodControl3DMinMaxDistance}
 */
function fmod_channel_control_get_3d_min_max_distance(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_3d_occlusion
 * @desc > **FMOD Function:** [ChannelControl::set3DOcclusion](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_set3docclusion)
 * This function sets the 3D attenuation factors for the direct and reverb paths.
 * @param {real} channel_control_ref
 * @param {real} direct_occlusion
 * @param {real} reverb_occlusion
 * @returns {real}
 */
function fmod_channel_control_set_3d_occlusion(channel_control_ref, direct_occlusion, reverb_occlusion) {}


/**
 * @func fmod_channel_control_get_3d_occlusion
 * @desc > **FMOD Function:** [ChannelControl::get3DOcclusion](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_get3docclusion)
 * This function retrieves the 3D attenuation factors for the direct and reverb paths.
 * @param {real} control_ref
 * @returns {struct.FmodControl3DOcclusion}
 */
function fmod_channel_control_get_3d_occlusion(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_3d_spread
 * @desc > **FMOD Function:** [ChannelControl::set3DSpread](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_set3dspread)
 * This function sets the spread of a 3D sound in speaker space.
 * @param {real} channel_control_ref
 * @param {real} angle
 * @returns {real}
 */
function fmod_channel_control_set_3d_spread(channel_control_ref, angle) {}


/**
 * @func fmod_channel_control_get_3d_spread
 * @desc > **FMOD Function:** [ChannelControl::get3DSpread](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_get3dspread)
 * This function retrieves the spread of a 3D sound in speaker space.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_get_3d_spread(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_pan
 * @desc > **FMOD Function:** [ChannelControl::setPan](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setpan)
 * This function sets the left/right pan level.
 * @param {real} channel_control_ref
 * @param {real} pan
 * @returns {real}
 */
function fmod_channel_control_set_pan(channel_control_ref, pan) {}


/**
 * @func fmod_channel_control_set_mix_levels_input
 * @desc > **FMOD Function:** [ChannelControl::setMixLevelsInput](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setmixlevelsinput)
 * This function sets the incoming volume level for each channel of a multi-channel signal.
 * @param {real} control_ref
 * @param {array<real>} levels
 */
function fmod_channel_control_set_mix_levels_input(channel_control_ref, levels) {}


/**
 * @func fmod_channel_control_set_mix_levels_output
 * @desc > **FMOD Function:** [ChannelControl::setMixLevelsOutput](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setmixlevelsoutput)
 * This function sets the outgoing volume levels for each speaker.
 * @param {real} channel_control_ref
 * @param {real} front_left
 * @param {real} front_right
 * @param {real} center
 * @param {real} lfe
 * @param {real} surround_left
 * @param {real} surround_right
 * @param {real} back_left
 * @param {real} back_right
 * @returns {real}
 */
function fmod_channel_control_set_mix_levels_output(channel_control_ref, front_left, front_right, center, lfe, surround_left, surround_right, back_left, back_right) {}


/**
 * @func fmod_channel_control_set_mix_matrix
 * @desc > **FMOD Function:** [ChannelControl::setMixMatrix](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setmixmatrix)
 * This function sets a 2 dimensional pan matrix that maps the signal from input channels (columns) to output speakers (rows).
 * @param {real} control_ref
 * @param {array<real>} matrix
 * @param {real} out_channels
 * @param {real} in_channels
 * @param {real} in_channel_hop
 */
function fmod_channel_control_set_mix_matrix(channel_control_ref, matrix, out_channels, in_channels, in_channel_hop) {}


/**
 * @func fmod_channel_control_get_mix_matrix
 * @desc > **FMOD Function:** [ChannelControl::getMixMatrix](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getmixmatrix)
 * This function retrieves a 2 dimensional pan matrix that maps the signal from input channels (columns) to output speakers (rows).
 * @param {real} control_ref
 * @returns {struct.FmodControlMixMatrix}
 */
function fmod_channel_control_get_mix_matrix(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_reverb_properties
 * @desc > **FMOD Function:** [ChannelControl::setReverbProperties](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setreverbproperties)
 * This function sets the wet / send level for a particular reverb instance.
 * @param {real} channel_control_ref
 * @param {real} reverb_instance
 * @param {real} wet
 * @returns {real}
 */
function fmod_channel_control_set_reverb_properties(channel_control_ref, reverb_instance, wet) {}


/**
 * @func fmod_channel_control_get_reverb_properties
 * @desc > **FMOD Function:** [ChannelControl::getReverbProperties](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getreverbproperties)
 * This function retrieves the wet / send level for a particular reverb instance.
 * @param {real} channel_control_ref
 * @param {real} reverb_instance
 * @returns {real}
 */
function fmod_channel_control_get_reverb_properties(channel_control_ref, reverb_instance) {}


/**
 * @func fmod_channel_control_set_low_pass_gain
 * @desc > **FMOD Function:** [ChannelControl::setLowPassGain](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setlowpassgain)
 * This function sets the gain of the dry signal when built in lowpass / distance filtering is applied.
 * @param {real} channel_control_ref
 * @param {real} gain
 * @returns {real}
 */
function fmod_channel_control_set_low_pass_gain(channel_control_ref, gain) {}


/**
 * @func fmod_channel_control_get_low_pass_gain
 * @desc > **FMOD Function:** [ChannelControl::getLowPassGain](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getlowpassgain)
 * This function retrieves the gain of the dry signal when built in lowpass / distance filtering is applied.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_get_low_pass_gain(channel_control_ref) {}


/**
 * @func fmod_channel_control_add_dsp
 * @desc > **FMOD Function:** [ChannelControl::addDSP](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_adddsp)
 * This function adds a DSP unit to the specified index in the DSP chain.
 * @param {real} channel_control_ref
 * @param {real} dsp_chain_offset
 * @param {real} dsp_ref
 * @returns {real}
 */
function fmod_channel_control_add_dsp(channel_control_ref, dsp_chain_offset, dsp_ref) {}


/**
 * @func fmod_channel_control_remove_dsp
 * @desc > **FMOD Function:** [ChannelControl::removeDSP](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_removedsp)
 * This function removes the specified DSP unit from the DSP chain.
 * @param {real} channel_control_ref
 * @param {real} dsp_ref
 * @returns {real}
 */
function fmod_channel_control_remove_dsp(channel_control_ref, dsp_ref) {}


/**
 * @func fmod_channel_control_get_num_dsps
 * @desc > **FMOD Function:** [ChannelControl::getNumDSPs](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getnumdsps)
 * This function retrieves the number of DSP units in the DSP chain.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_get_num_dsps(channel_control_ref) {}


/**
 * @func fmod_channel_control_get_dsp
 * @desc > **FMOD Function:** [ChannelControl::getDSP](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getdsp)
 * This function retrieves the DSP unit at the specified index in the DSP chain.
 * @param {real} channel_control_ref
 * @param {real} index
 * @returns {real}
 */
function fmod_channel_control_get_dsp(channel_control_ref, index) {}


/**
 * @func fmod_channel_control_set_dsp_index
 * @desc > **FMOD Function:** [ChannelControl::setDSPIndex](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setdspindex)
 * This function sets the index in the DSP chain of the specified DSP.
 * @param {real} channel_control_ref
 * @param {real} dsp_ref
 * @param {real} chain_index
 * @returns {real}
 */
function fmod_channel_control_set_dsp_index(channel_control_ref, dsp_ref, chain_index) {}


/**
 * @func fmod_channel_control_get_dsp_index
 * @desc > **FMOD Function:** [ChannelControl::getDSPIndex](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getdspindex)
 * This function retrieves the index of a DSP inside the Channel or ChannelGroup's DSP chain.
 * @param {real} channel_control_ref
 * @param {real} dsp_ref
 * @returns {real}
 */
function fmod_channel_control_get_dsp_index(channel_control_ref, dsp_ref) {}


/**
 * @func fmod_channel_control_get_dsp_clock
 * @desc > **FMOD Function:** [ChannelControl::getDSPClock](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getdspclock)
 * This function retrieves the DSP clock values at this point in time.
 * @param {real} control_ref
 * @returns {struct.FmodControlDSPClock}
 */
function fmod_channel_control_get_dsp_clock(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_delay
 * @desc > **FMOD Function:** [ChannelControl::setDelay](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setdelay)
 * This function sets a sample accurate start (and/or stop) time relative to the parent ChannelGroup DSP clock.
 * @param {real} control_ref
 * @param {real} dsp_clock_start
 * @param {real} dsp_clock_end
 * @param {bool} stop_channels
 */
function fmod_channel_control_set_delay(channel_control_ref, dsp_clock_start, dsp_clock_end, stop_channels) {}


/**
 * @func fmod_channel_control_get_delay
 * @desc > **FMOD Function:** [ChannelControl::getDelay](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getdelay)
 * This function retrieves a sample accurate start (and/or stop) time relative to the parent ChannelGroup DSP clock.
 * @param {real} control_ref
 * @returns {struct.FmodControlDelay}
 */
function fmod_channel_control_get_delay(channel_control_ref) {}


/**
 * @func fmod_channel_control_add_fade_point
 * @desc > **FMOD Function:** [ChannelControl::addFadePoint](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_addfadepoint)
 * This function adds a sample accurate fade point at a time relative to the parent ChannelGroup DSP clock.
 * @param {real} control_ref
 * @param {real} dsp_clock
 * @param {real} volume
 */
function fmod_channel_control_add_fade_point(channel_control_ref, dsp_clock, volume) {}


/**
 * @func fmod_channel_control_set_fade_point_ramp
 * @desc > **FMOD Function:** [ChannelControl::setFadePointRamp](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setfadepointramp)
 * This function adds a volume ramp at the specified time in the future using fade points.
 * @param {real} control_ref
 * @param {real} dsp_clock
 * @param {real} volume
 */
function fmod_channel_control_set_fade_point_ramp(channel_control_ref, dsp_clock, volume) {}


/**
 * @func fmod_channel_control_remove_fade_points
 * @desc > **FMOD Function:** [ChannelControl::removeFadePoints](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_removefadepoints)
 * This function removes all fade points between the two specified clock values (inclusive).
 * @param {real} control_ref
 * @param {real} dsp_clock_start
 * @param {real} dsp_clock_end
 */
function fmod_channel_control_remove_fade_points(channel_control_ref, dsp_clock_start, dsp_clock_end) {}


/**
 * @func fmod_channel_control_get_fade_points
 * @desc > **FMOD Function:** [ChannelControl::getFadePoints](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getfadepoints)
 * This function retrieves information about stored fade points.
 * @param {real} control_ref
 * @returns {struct.FmodControlFadePoints}
 */
function fmod_channel_control_get_fade_points(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_callback
 * @desc > **FMOD Function:** [ChannelControl::setCallback](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setcallback)
 * This function sets the callback for ChannelControl level notifications.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_set_callback(channel_control_ref) {}


/**
 * @func fmod_channel_control_get_system_object
 * @desc > **FMOD Function:** [ChannelControl::getSystemObject](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getsystemobject)
 * This function retrieves the System that created this object.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_get_system_object(channel_control_ref) {}


/**
 * @func fmod_channel_control_set_user_data
 * @desc > **FMOD Function:** [ChannelControl::setUserData](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_setuserdata)
 * This function sets a user value associated with this object.
 * @param {real} channel_control_ref
 * @param {real} data
 * @returns {real}
 */
function fmod_channel_control_set_user_data(channel_control_ref, data) {}


/**
 * @func fmod_channel_control_get_user_data
 * @desc > **FMOD Function:** [ChannelControl::getUserData](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getuserdata)
 * This function retrieves a user value associated with this object.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_channel_control_get_user_data(channel_control_ref) {}


/**
 * @func fmod_channel_group_get_num_channels
 * @desc > **FMOD Function:** [ChannelGroup::getNumChannels](https://www.fmod.com/docs/2.02/api/core-api-channelgroup.html#channelgroup_getnumchannels)
 * This function retrieves the number of Channels that feed into to this group.
 * @param {real} channel_group_ref
 * @returns {real}
 */
function fmod_channel_group_get_num_channels(channel_group_ref) {}


/**
 * @func fmod_channel_group_get_channel
 * @desc > **FMOD Function:** [ChannelGroup::getChannel](https://www.fmod.com/docs/2.02/api/core-api-channelgroup.html#channelgroup_getchannel)
 * This function retrieves the Channel at the specified index in the list of Channel inputs.
 * @param {real} channel_group_ref
 * @param {real} index
 * @returns {real}
 */
function fmod_channel_group_get_channel(channel_group_ref, index) {}


/**
 * @func fmod_channel_group_add_group
 * @desc > **FMOD Function:** [ChannelGroup::addGroup](https://www.fmod.com/docs/2.02/api/core-api-channelgroup.html#channelgroup_addgroup)
 * This function adds a ChannelGroup as an input to this group.
 * @param {real} channel_group_ref
 * @param {real} child_channel_group_ref
 * @param {real} propagate_dsp_clock
 * @returns {real}
 */
function fmod_channel_group_add_group(channel_group_ref, child_channel_group_ref, propagate_dsp_clock) {}


/**
 * @func fmod_channel_group_get_num_groups
 * @desc > **FMOD Function:** [ChannelGroup::getNumGroups](https://www.fmod.com/docs/2.02/api/core-api-channelgroup.html#channelgroup_getnumgroups)
 * This function retrieves the number of ChannelGroups that feed into to this group.
 * @param {real} channel_group_ref
 * @returns {real}
 */
function fmod_channel_group_get_num_groups(channel_group_ref) {}


/**
 * @func fmod_channel_group_get_group
 * @desc > **FMOD Function:** [ChannelGroup::getGroup](https://www.fmod.com/docs/2.02/api/core-api-channelgroup.html#channelgroup_getgroup)
 * This function retrieves the ChannelGroup at the specified index in the list of group inputs.
 * @param {real} channel_group_ref
 * @param {real} group_index
 * @returns {real}
 */
function fmod_channel_group_get_group(channel_group_ref, group_index) {}


/**
 * @func fmod_channel_group_get_parent_group
 * @desc > **FMOD Function:** [ChannelGroup::getParentGroup](https://www.fmod.com/docs/2.02/api/core-api-channelgroup.html#channelgroup_getparentgroup)
 * This function retrieves the ChannelGroup this object outputs to.
 * @param {real} channel_group_ref
 * @returns {real}
 */
function fmod_channel_group_get_parent_group(channel_group_ref) {}


/**
 * @func fmod_channel_group_get_name
 * @desc > **FMOD Function:** [ChannelGroup::getName](https://www.fmod.com/docs/2.02/api/core-api-channelgroup.html#channelgroup_getname)
 * This function retrieves the name set when the group was created.
 * @param {real} channel_group_ref
 * @returns {string}
 */
function fmod_channel_group_get_name(channel_group_ref) {}


/**
 * @func fmod_channel_group_release
 * @desc > **FMOD Function:** [ChannelGroup::release](https://www.fmod.com/docs/2.02/api/core-api-channelgroup.html#channelgroup_release)
 * This function frees the memory for the group.
 * @param {real} channel_group_ref
 * @returns {real}
 */
function fmod_channel_group_release(channel_group_ref) {}


/**
 * @func fmod_channel_group_get_system_object
 * @desc > **FMOD Function:** [ChannelControl::getSystemObject](https://www.fmod.com/docs/2.02/api/core-api-channelcontrol.html#channelcontrol_getsystemobject)
 * This function retrieves the System that created this object.
 * @param {real} channel_group_ref
 * @returns {real}
 */
function fmod_channel_group_get_system_object(channel_group_ref) {}


/**
 * @func fmod_file_get_disk_busy
 * @desc > **FMOD Function:** [File_GetDiskBusy](https://www.fmod.com/docs/2.02/api/core-api-common.html#file_getdiskbusy)
 * This is an information function to retrieve the state of FMOD disk access.
 * @returns {real}
 */
function fmod_file_get_disk_busy() {}


/**
 * @func fmod_file_set_disk_busy
 * @desc > **FMOD Function:** [File_SetDiskBusy](https://www.fmod.com/docs/2.02/api/core-api-common.html#file_setdiskbusy)
 * This function sets the busy state for disk access ensuring mutual exclusion of file operations.
 * @param {real} busy
 * @returns {real}
 */
function fmod_file_set_disk_busy(busy) {}


/**
 * @func fmod_memory_get_stats
 * @desc > **FMOD Function:** [Memory_GetStats](https://www.fmod.com/docs/2.02/api/core-api-common.html#memory_getstats)
 * This function returns information on the memory usage of FMOD.
 * @returns {struct.FmodMemoryStats}
 */
function fmod_memory_get_stats(blocking) {}


/**
 * @func fmod_debug_initialize
 * @desc > **FMOD Function:** [Debug_Initialize](https://www.fmod.com/docs/2.02/api/core-api-common.html#debug_initialize)
 * This function specifies the level and delivery method of log messages when using the logging version of FMOD.
 * @param {real} flags
 * @param {real} mode
 * @param {string} filename
 * @returns {real}
 */
function fmod_debug_initialize(flags, mode, filename) {}


/**
 * @func fmod_thread_set_attributes
 * @desc > **FMOD Function:** [Thread_SetAttributes](https://www.fmod.com/docs/2.02/api/core-api-common.html#thread_setattributes)
 * This function specifies the affinity, priority and stack size for all FMOD created threads.
 * @param {real} type
 * @param {real} affinity
 * @param {real} priority
 * @param {real} stacksize
 * @returns {real}
 */
function fmod_thread_set_attributes(type, affinity, priority, stacksize) {}


/**
 * @func fmod_dsp_add_input
 * @desc > **FMOD Function:** [DSP::addInput](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_addinput)
 * This function adds a DSP unit as an input to this object.
 * @param {real} dsp_ref
 * @param {real} dsp_input_ref
 * @param {real} dsp_connection_type
 * @returns {real}
 */
function fmod_dsp_add_input(dsp_ref, dsp_input_ref, dsp_connection_type) {}


/**
 * @func fmod_dsp_get_input
 * @desc > **FMOD Function:** [DSP::getInput](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getinput)
 * This function retrieves the DSP unit at the specified index in the input list.
 * @param {real} dsp_ref
 * @returns {struct.FmodDSPConnectionData}
 */
function fmod_dsp_get_input(dsp_ref, dsp_input_index) {}


/**
 * @func fmod_dsp_get_output
 * @desc > **FMOD Function:** [DSP::getOutput](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getoutput)
 * This function retrieves the DSP unit at the specified index in the output list.
 * @param {real} dsp_ref
 * @returns {struct.FmodDSPConnectionData}
 */
function fmod_dsp_get_output(dsp_ref, dsp_output_index) {}


/**
 * @func fmod_dsp_get_num_inputs
 * @desc > **FMOD Function:** [DSP::getNumInputs](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getnuminputs)
 * This function retrieves the number of DSP units in the input list.
 * @param {real} dsp_ref
 * @returns {real}
 */
function fmod_dsp_get_num_inputs(dsp_ref) {}


/**
 * @func fmod_dsp_get_num_outputs
 * @desc > **FMOD Function:** [DSP::getNumOutputs](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getnumoutputs)
 * This function retrieves the number of DSP units in the output list.
 * @param {real} dsp_ref
 * @returns {real}
 */
function fmod_dsp_get_num_outputs(dsp_ref) {}


/**
 * @func fmod_dsp_disconnect_all
 * @desc > **FMOD Function:** [DSP::disconnectAll](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_disconnectall)
 * This function disconnects all inputs and/or outputs.
 * @param {real} dsp_ref
 * @param {real} inputs
 * @param {real} outputs
 * @returns {real}
 */
function fmod_dsp_disconnect_all(dsp_ref, inputs, outputs) {}


/**
 * @func fmod_dsp_disconnect_from
 * @desc > **FMOD Function:** [DSP::disconnectFrom](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_disconnectfrom)
 * This function disconnects the specified input DSP.
 * @param {real} dsp_ref
 * @param {real} dsp_other_ref
 * @param {real} dsp_connection_ref
 * @returns {real}
 */
function fmod_dsp_disconnect_from(dsp_ref, dsp_other_ref, dsp_connection_ref) {}


/**
 * @func fmod_dsp_get_data_parameter_index
 * @desc > **FMOD Function:** [DSP::getDataParameterIndex](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getdataparameterindex)
 * This function retrieves the index of the first data parameter of a particular data type.
 * @param {real} dsp_ref
 * @param {real} data_type
 * @returns {real}
 */
function fmod_dsp_get_data_parameter_index(dsp_ref, data_type) {}


/**
 * @func fmod_dsp_get_num_parameters
 * @desc > **FMOD Function:** [DSP::getNumParameters](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getnumparameters)
 * This function retrieves the number of parameters exposed by this unit.
 * @param {real} dsp_ref
 * @returns {real}
 */
function fmod_dsp_get_num_parameters(dsp_ref) {}


/**
 * @func fmod_dsp_set_parameter_bool
 * @desc > **FMOD Function:** [DSP::setParameterBool](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_setparameterbool)
 * This function sets a boolean parameter by index.
 * @param {real} dsp_ref
 * @param {real} parameter_index
 * @param {real} value
 * @returns {real}
 */
function fmod_dsp_set_parameter_bool(dsp_ref, parameter_index, value) {}


/**
 * @func fmod_dsp_get_parameter_bool
 * @desc > **FMOD Function:** [DSP::getParameterBool](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getparameterbool)
 * This function retrieves a boolean parameter by index.
 * @param {real} dsp_ref
 * @param {real} parameter_index
 * @returns {real}
 */
function fmod_dsp_get_parameter_bool(dsp_ref, parameter_index) {}


/**
 * @func fmod_dsp_set_parameter_data
 * @desc > **FMOD Function:** [DSP::setParameterData](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_setparameterdata)
 * This function sets a binary data parameter by index.
 * @param {real} dsp_ref
 * @param {real} parameter_index
 * @param {Id.Buffer} buffer
 * @param {real} length
 */
function fmod_dsp_set_parameter_data(dsp_ref, parameter_index, buff, length) {}


/**
 * @func fmod_dsp_get_parameter_data
 * @desc > **FMOD Function:** [DSP::getParameterData](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getparameterdata)
 * This function retrieves a binary data parameter by index.
 * @param {real} dsp_ref
 * @param {real} parameter_index
 * @param {Id.Buffer} buffer
 * @param {real} length
 */
function fmod_dsp_get_parameter_data(dsp_ref, parameter_index, buff, length) {}


/**
 * @func fmod_dsp_set_parameter_float
 * @desc > **FMOD Function:** [DSP::setParameterFloat](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_setparameterfloat)
 * This function sets a floating point parameter by index.
 * @param {real} dsp_ref
 * @param {real} parameter_index
 * @param {real} value
 * @returns {real}
 */
function fmod_dsp_set_parameter_float(dsp_ref, parameter_index, value) {}


/**
 * @func fmod_dsp_get_parameter_float
 * @desc > **FMOD Function:** [DSP::getParameterFloat](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getparameterfloat)
 * This function retrieves a floating point parameter by index.
 * @param {real} dsp_ref
 * @param {real} parameter_index
 * @returns {real}
 */
function fmod_dsp_get_parameter_float(dsp_ref, parameter_index) {}


/**
 * @func fmod_dsp_set_parameter_int
 * @desc > **FMOD Function:** [DSP::setParameterInt](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_setparameterint)
 * This function sets an integer parameter by index.
 * @param {real} dsp_ref
 * @param {real} parameter_index
 * @param {real} value
 * @returns {real}
 */
function fmod_dsp_set_parameter_int(dsp_ref, parameter_index, value) {}


/**
 * @func fmod_dsp_get_parameter_int
 * @desc > **FMOD Function:** [DSP::getParameterInt](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getparameterint)
 * This function retrieves an integer parameter by index.
 * @param {real} dsp_ref
 * @param {real} parameter_index
 * @returns {real}
 */
function fmod_dsp_get_parameter_int(dsp_ref, parameter_index) {}


/**
 * @func fmod_dsp_get_parameter_info
 * @desc > **FMOD Function:** [DSP::getParameterInfo](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getparameterinfo)
 * This function retrieves information about a specified parameter.
 * @param {real} dsp_ref
 * @returns {struct}
 */
function fmod_dsp_get_parameter_info(dsp_ref, parameter_index) {}


/**
 * @func fmod_dsp_set_channel_format
 * @desc > **FMOD Function:** [DSP::setChannelFormat](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_setchannelformat)
 * This function sets the PCM input format this DSP will receive when processing.
 * @param {real} dsp_ref
 * @param {real} channel_mask
 * @param {real} num_channels
 * @param {real} speaker_mode
 * @returns {real}
 */
function fmod_dsp_set_channel_format(dsp_ref, channel_mask, num_channels, speaker_mode) {}


/**
 * @func fmod_dsp_get_channel_format
 * @desc > **FMOD Function:** [DSP::getChannelFormat](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getchannelformat)
 * This function retrieves the PCM input format this DSP will receive when processing.
 * @param {real} dsp_ref
 * @returns {struct.FmodDSPChannelFormat}
 */
function fmod_dsp_get_channel_format(dsp_ref) {}


/**
 * @func fmod_dsp_get_output_channel_format
 * @desc > ** FMOD Function:** [DSP::getOutputChannelFormat](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getoutputchannelformat)
 * This function retrieves the output format this DSP will produce when processing based on the input specified.
 * @param {real} dsp_ref
 * @param {enum.FMOD_CHANNELMASK} channel_mask_in
 * @param {real} num_channels_in
 * @param {enum.FMOD_SPEAKERMODE} speaker_mode_in
 * @returns {struct.FmodDSPChannelFormat}
 */
function fmod_dsp_get_output_channel_format(dsp_ref, channel_mask_in, num_channels_in, speaker_mode_in) {}


/**
 * @func fmod_dsp_get_metering_info
 * @desc > **FMOD Function:** [DSP::getMeteringInfo](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getmeteringinfo)
 * This function retrieves the signal metering information.
 * @param {real} dsp_ref
 * @returns {struct.FmodDSPInOutMeteringInfo}
 */
function fmod_dsp_get_metering_info(dsp_ref) {}


/**
 * @func fmod_dsp_set_metering_enabled
 * @desc > **FMOD Function:** [DSP::setMeteringEnabled](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_setmeteringenabled)
 * This function sets the input and output signal metering enabled states.
 * @param {real} dsp_ref
 * @param {real} enabled_in
 * @param {real} enabled_out
 * @returns {real}
 */
function fmod_dsp_set_metering_enabled(dsp_ref, enabled_in, enabled_out) {}


/**
 * @func fmod_dsp_get_metering_enabled
 * @desc > **FMOD Function:** [DSP::getMeteringEnabled](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getmeteringenabled)
 * This function retrieves the input and output signal metering enabled states.
 * @param {real} dsp_ref
 * @returns {struct.FmodDSPMeteringEnableInfo}
 */
function fmod_dsp_get_metering_enabled(dsp_ref) {}


/**
 * @func fmod_dsp_set_active
 * @desc > **FMOD Function:** [DSP::setActive](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_setactive)
 * This function sets the processing active state.
 * @param {real} dsp_ref
 * @param {real} active
 * @returns {real}
 */
function fmod_dsp_set_active(dsp_ref, active) {}


/**
 * @func fmod_dsp_get_active
 * @desc > **FMOD Function:** [DSP::getActive](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getactive)
 * This function retrieves the processing active state.
 * @param {real} dsp_ref
 * @returns {real}
 */
function fmod_dsp_get_active(dsp_ref) {}


/**
 * @func fmod_dsp_set_bypass
 * @desc > **FMOD Function:** [DSP::setBypass](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_setbypass)
 * This function sets the processing bypass state.
 * @param {real} dsp_ref
 * @param {real} bypass
 * @returns {real}
 */
function fmod_dsp_set_bypass(dsp_ref, bypass) {}


/**
 * @func fmod_dsp_get_bypass
 * @desc > **FMOD Function:** [DSP::getBypass](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getbypass)
 * This function retrieves the processing bypass state.
 * @param {real} dsp_ref
 * @returns {real}
 */
function fmod_dsp_get_bypass(dsp_ref) {}


/**
 * @func fmod_dsp_set_wet_dry_mix
 * @desc > **FMOD Function:** [DSP::setWetDryMix](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_setwetdrymix)
 * This function sets the scale of the wet and dry signal components.
 * @param {real} dsp_ref
 * @param {real} prewet
 * @param {real} postwet
 * @param {real} dry
 * @returns {real}
 */
function fmod_dsp_set_wet_dry_mix(dsp_ref, prewet, postwet, dry) {}


/**
 * @func fmod_dsp_get_wet_dry_mix
 * @desc > **FMOD Function:** [DSP::getWetDryMix](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getwetdrymix)
 * This function retrieves the scale of the wet and dry signal components.
 * @param {real} dsp_ref
 * @returns {struct.FmodDSPWetDryMixInfo}
 */
function fmod_dsp_get_wet_dry_mix(dsp_ref) {}


/**
 * @func fmod_dsp_get_idle
 * @desc > **FMOD Function:** [DSP::getIdle](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getidle)
 * This function retrieves the idle state.
 * @param {real} dsp_ref
 * @returns {real}
 */
function fmod_dsp_get_idle(dsp_ref) {}


/**
 * @func fmod_dsp_reset
 * @desc > **FMOD Function:** [DSP::reset](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_reset)
 * This function reset a DSPs internal state ready for new input signal.
 * @param {real} dsp_ref
 * @returns {real}
 */
function fmod_dsp_reset(dsp_ref) {}


/**
 * @func fmod_dsp_release
 * @desc > **FMOD Function:** [DSP::release](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_release)
 * This function frees a DSP object.
 * @param {real} dsp_ref
 * @returns {real}
 */
function fmod_dsp_release(dsp_ref) {}


/**
 * @func fmod_dsp_get_type
 * @desc > **FMOD Function:** [DSP::getType](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_gettype)
 * This function retrieves the pre-defined type of a FMOD registered DSP unit.
 * @param {real} dsp_ref
 * @returns {real}
 */
function fmod_dsp_get_type(dsp_ref) {}


/**
 * @func fmod_dsp_get_info
 * @desc > **FMOD Function:** [DSP::getInfo](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getinfo)
 * This function retrieves information about this DSP unit.
 * @param {real} dsp_ref
 * @returns {struct.FmodDSPInfo}
 */
function fmod_dsp_get_info(dsp_ref) {}


/**
 * @func fmod_dsp_get_cpu_usage
 * @desc > **FMOD Function:** [DSP::getCPUUsage](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getcpuusage)
 * This function retrieves statistics on the mixer thread CPU usage for this unit.
 * @param {real} dsp_ref
 * @returns {struct.FmodCPUTimeUsage}
 */
function fmod_dsp_get_cpu_usage(dsp_ref) {}


/**
 * @func fmod_dsp_set_user_data
 * @desc > **FMOD Function:** [DSP::setUserData](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_setuserdata)
 * This function sets a user value associated with this object.
 * @param {real} dsp_ref
 * @param {real} data
 * @returns {real}
 */
function fmod_dsp_set_user_data(dsp_ref, data) {}


/**
 * @func fmod_dsp_get_user_data
 * @desc > **FMOD Function:** [DSP::getUserData](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getuserdata)
 * This function retrieves a user value associated with this object.
 * @param {real} dsp_ref
 * @returns {real}
 */
function fmod_dsp_get_user_data(dsp_ref) {}


/**
 * @func fmod_dsp_set_callback
 * @desc > **FMOD Function:** [DSP::setCallback](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_setcallback)
 * This function sets the callback for DSP notifications.
 * @param {real} dsp_ref
 * @returns {real}
 */
function fmod_dsp_set_callback(dsp_ref) {}


/**
 * @func fmod_dsp_get_system_object
 * @desc > **FMOD Function:** [DSP::getSystemObject](https://www.fmod.com/docs/2.02/api/core-api-dsp.html#dsp_getsystemobject)
 * This function retrieves the parent System object.
 * @param {real} dsp_ref
 * @returns {real}
 */
function fmod_dsp_get_system_object(dsp_ref) {}


/**
 * @func fmod_dsp_connection_set_mix
 * @desc > **FMOD Function:** [DSPConnection::setMix](https://www.fmod.com/docs/2.02/api/core-api-dspconnection.html#dspconnection_setmix)
 * This function sets the connection's volume scale.
 * @param {real} dsp_connection_ref
 * @param {real} volume
 * @returns {real}
 */
function fmod_dsp_connection_set_mix(dsp_connection_ref, volume) {}


/**
 * @func fmod_dsp_connection_get_mix
 * @desc > **FMOD Function:** [DSPConnection::getMix](https://www.fmod.com/docs/2.02/api/core-api-dspconnection.html#dspconnection_getmix)
 * This function retrieves the connection's volume scale.
 * @param {real} dsp_connection_ref
 * @returns {real}
 */
function fmod_dsp_connection_get_mix(dsp_connection_ref) {}


/**
 * @func fmod_dsp_connection_set_mix_matrix
 * @desc > **FMOD Function:** [DSPConnection::setMixMatrix](https://www.fmod.com/docs/2.02/api/core-api-dspconnection.html#dspconnection_setmixmatrix)
 * This function sets a 2 dimensional pan matrix that maps the signal from input channels (columns) to output speakers (rows).
 * @param {real} dsp_connection_ref
 * @param {array<real>} matrix
 * @param {real} out_channels
 * @param {real} in_channels
 * @param {real} in_channel_hop
 */
function fmod_dsp_connection_set_mix_matrix(dsp_connection_ref, matrix, out_channels, in_channels, in_channel_hop) {}


/**
 * @func fmod_dsp_connection_get_mix_matrix
 * @desc > **FMOD Function:** [DSPConnection::getMixMatrix](https://www.fmod.com/docs/2.02/api/core-api-dspconnection.html#dspconnection_getmixmatrix)
 * This function retrieves a 2 dimensional pan matrix that maps the signal from input channels (columns) to output speakers (rows).
 * @param {real} dsp_connection_ref
 * @param {real} in_channel_hop
 * @returns {struct.FmodDSPConnectionMixMatrix}
 */
function fmod_dsp_connection_get_mix_matrix(dsp_connection_ref, in_channel_hop) {}


/**
 * @func fmod_dsp_connection_get_input
 * @desc > **FMOD Function:** [DSPConnection::getInput](https://www.fmod.com/docs/2.02/api/core-api-dspconnection.html#dspconnection_getinput)
 * This function retrieves the connection's input DSP unit.
 * @param {real} dsp_connection_ref
 * @returns {real}
 */
function fmod_dsp_connection_get_input(dsp_connection_ref) {}


/**
 * @func fmod_dsp_connection_get_output
 * @desc > **FMOD Function:** [DSPConnection::getOutput](https://www.fmod.com/docs/2.02/api/core-api-dspconnection.html#dspconnection_getoutput)
 * This function retrieves the connection's output DSP unit.
 * @param {real} dsp_connection_ref
 * @returns {real}
 */
function fmod_dsp_connection_get_output(dsp_connection_ref) {}


/**
 * @func fmod_dsp_connection_get_type
 * @desc > **FMOD Function:** [DSPConnection::getType](https://www.fmod.com/docs/2.02/api/core-api-dspconnection.html#dspconnection_gettype)
 * This function retrieves the type of the connection between 2 DSP units.
 * @param {real} dsp_connection_ref
 * @returns {real}
 */
function fmod_dsp_connection_get_type(dsp_connection_ref) {}


/**
 * @func fmod_dsp_connection_set_user_data
 * @desc > **FMOD Function:** [DSPConnection::setUserData](https://www.fmod.com/docs/2.02/api/core-api-dspconnection.html#dspconnection_setuserdata)
 * This function sets a user value associated with this object.
 * @param {real} dsp_connection_ref
 * @param {real} data
 * @returns {real}
 */
function fmod_dsp_connection_set_user_data(dsp_connection_ref, data) {}


/**
 * @func fmod_dsp_connection_get_user_data
 * @desc > **FMOD Function:** [DSPConnection::getUserData](https://www.fmod.com/docs/2.02/api/core-api-dspconnection.html#dspconnection_getuserdata)
 * This function retrieves a user value associated with this object.
 * @param {real} dsp_connection_ref
 * @returns {real}
 */
function fmod_dsp_connection_get_user_data(dsp_connection_ref) {}


/**
 * @func fmod_geometry_set_polygon_attributes
 * @desc > **FMOD Function:** [Geometry::setPolygonAttributes](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_setpolygonattributes)
 * This function sets individual attributes for a polygon inside a geometry object.
 * @param {real} geometry_ref
 * @param {real} polygon_index
 * @param {real} direct_occlusion
 * @param {real} reverb_occlusion
 * @param {real} double_sided
 * @returns {real}
 */
function fmod_geometry_set_polygon_attributes(geometry_ref, polygon_index, direct_occlusion, reverb_occlusion, double_sided) {}


/**
 * @func fmod_geometry_get_polygon_attributes
 * @desc > **FMOD Function:** [Geometry::getPolygonAttributes](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_getpolygonattributes)
 * This function retrieves the attributes for a polygon.
 * @param {real} geometry_ref
 * @param {real} polygon_index
 * @returns {struct.FmodGeometryPolygonAttributes}
 */
function fmod_geometry_get_polygon_attributes(geometry_ref, polygon_index) {}


/**
 * @func fmod_geometry_get_polygon_num_vertices
 * @desc > **FMOD Function:** [Geometry::getPolygonNumVertices](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_getpolygonnumvertices)
 * This function gets the number of vertices in a polygon.
 * @param {real} geometry_ref
 * @param {real} polygon_index
 * @returns {real}
 */
function fmod_geometry_get_polygon_num_vertices(geometry_ref, polygon_index) {}


/**
 * @func fmod_geometry_set_polygon_vertex
 * @desc > **FMOD Function:** [Geometry::setPolygonVertex](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_setpolygonvertex)
 * This function alters the position of a polygon's vertex inside a geometry object.
 * @param {real} geometry_ref
 * @param {real} polygon_index
 * @param {real} vertex_index
 * @param {struct.FmodVector} position
 */
function fmod_geometry_set_polygon_vertex(geometry_ref, polygon_index, vertex_index, position) {}


/**
 * @func fmod_geometry_get_polygon_vertex
 * @desc > **FMOD Function:** [Geometry::getPolygonVertex](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_getpolygonvertex)
 * This function retrieves the position of a vertex.
 * @param {real} geometry_ref
 * @param {real} polygon_index
 * @param {real} vertex_index
 * @returns {struct.FmodVector}
 */
function fmod_geometry_get_polygon_vertex(geometry_ref, polygon_index, vertex_index) {}


/**
 * @func fmod_geometry_set_position
 * @desc > **FMOD Function:** [Geometry::setPosition](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_setposition)
 * This function sets the 3D position of the object.
 * @param {real} geometry_ref
 * @param {struct.FmodVector} position
 */
function fmod_geometry_set_position(geometry_ref, position) {}


/**
 * @func fmod_geometry_get_position
 * @desc > **FMOD Function:** [Geometry::getPosition](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_getposition)
 * This function retrieves the 3D position of the object.
 * @param {real} geometry_ref
 * @returns {struct.FmodVector}
 */
function fmod_geometry_get_position(geometry_ref) {}


/**
 * @func fmod_geometry_set_rotation
 * @desc > **FMOD Function:** [Geometry::setRotation](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_setrotation)
 * This function sets the 3D orientation of the object.
 * @param {real} geometry_ref
 * @param {struct.FmodVector} forward
 * @param {struct.FmodVector} up
 */
function fmod_geometry_set_rotation(geometry_ref, forward, up) {}


/**
 * @func fmod_geometry_get_rotation
 * @desc > **FMOD Function:** [Geometry::getRotation](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_getrotation)
 * This function retrieves the 3D orientation of the object.
 * @param {real} geometry_ref
 * @returns {struct.FmodGeometryRotation}
 */
function fmod_geometry_get_rotation(geometry_ref) {}


/**
 * @func fmod_geometry_set_scale
 * @desc > **FMOD Function:** [Geometry::setScale](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_setscale)
 * This function sets the 3D scale of the object.
 * @param {real} geometry_ref
 * @param {struct.FmodVector} scale
 */
function fmod_geometry_set_scale(geometry_ref, scale) {}


/**
 * @func fmod_geometry_get_scale
 * @desc > **FMOD Function:** [Geometry::getScale](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_getscale)
 * This function retrieves the 3D scale of the object.
 * @param {real} geometry_ref
 * @returns {struct.FmodVector}
 */
function fmod_geometry_get_scale(geometry_ref) {}


/**
 * @func fmod_geometry_add_polygon
 * @desc > **FMOD Function:** [Geometry::addPolygon](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_addpolygon)
 * This function adds a polygon.
 * @param {real} geometry_ref
 * @param {real} direct_occlusion
 * @param {real} reverb_occlusion
 * @param {bool} double_sided
 * @param {array<struct.FmodVector>} vertices
 */
function fmod_geometry_add_polygon(geometry_ref, direct_occlusion, reverb_occlusion, double_sided, vertices) {}


/**
 * @func fmod_geometry_set_active
 * @desc > **FMOD Function:** [Geometry::setActive](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_setactive)
 * This function sets whether an object is processed by the geometry engine.
 * @param {real} geometry_ref
 * @param {real} active
 * @returns {real}
 */
function fmod_geometry_set_active(geometry_ref, active) {}


/**
 * @func fmod_geometry_get_active
 * @desc > **FMOD Function:** [Geometry::getActive](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_getactive)
 * This function retrieves whether an object is processed by the geometry engine.
 * @param {real} geometry_ref
 * @returns {real}
 */
function fmod_geometry_get_active(geometry_ref) {}


/**
 * @func fmod_geometry_get_max_polygons
 * @desc > **FMOD Function:** [Geometry::getMaxPolygons](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_getmaxpolygons)
 * This function retrieves the maximum number of polygons and vertices allocatable for this object.
 * @param {real} geometry_ref
 * @param {Id.Buffer} buff_return
 * @returns {real}
 */
function fmod_geometry_get_max_polygons(geometry_ref, buff_return) {}


/**
 * @func fmod_geometry_get_num_polygons
 * @desc > **FMOD Function:** [Geometry::getNumPolygons](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_getnumpolygons)
 * This function retrieves the number of polygons in this object.
 * @param {real} geometry_ref
 * @returns {real}
 */
function fmod_geometry_get_num_polygons(geometry_ref) {}


/**
 * @func fmod_geometry_set_user_data
 * @desc > **FMOD Function:** [Geometry::setUserData](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_setuserdata)
 * This function sets a user value associated with this object.
 * @param {real} geometry_ref
 * @param {real} data
 * @returns {real}
 */
function fmod_geometry_set_user_data(geometry_ref, data) {}


/**
 * @func fmod_geometry_get_user_data
 * @desc > **FMOD Function:** [Geometry::getUserData](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_getuserdata)
 * This function retrieves a user value associated with this object.
 * @param {real} geometry_ref
 * @returns {real}
 */
function fmod_geometry_get_user_data(geometry_ref) {}


/**
 * @func fmod_geometry_release
 * @desc > **FMOD Function:** [Geometry::release](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_release)
 * This function frees a geometry object and releases its memory.
 * @param {real} geometry_ref
 * @returns {real}
 */
function fmod_geometry_release(geometry_ref) {}


/**
 * @func fmod_geometry_save
 * @desc > **FMOD Function:** [Geometry::save](https://www.fmod.com/docs/2.02/api/core-api-geometry.html#geometry_save)
 * This function saves the geometry object as a serialized binary block to a user memory buffer.
 * @param {real} geometry_ref
 * @param {Id.Buffer} buff
 * @returns {real}
 */
function fmod_geometry_save(geometry_ref, buff) {}


/**
 * @func fmod_reverb_3d_set_3d_attributes
 * @desc > **FMOD Function:** [Reverb3D::set3DAttributes](https://www.fmod.com/docs/2.02/api/core-api-reverb3d.html#reverb3d_set3dattributes)
 * This function sets the 3D attributes of a reverb sphere.
 * @param {real} reverb_3d_ref
 * @param {struct.FmodVector} position
 * @param {real} min_distance
 * @param {real} max_distance
 */
function fmod_reverb_3d_set_3d_attributes(reverb_3d_ref, position, min_distance, max_distance) {}


/**
 * @func fmod_reverb_3d_get_3d_attributes
 * @desc > **FMOD Function:** [Reverb3D::get3DAttributes](https://www.fmod.com/docs/2.02/api/core-api-reverb3d.html#reverb3d_get3dattributes)
 * This function retrieves the 3D attributes of a reverb sphere.
 * @param {real} reverb_3d_ref
 * @returns {struct.FmodReverb3DAttributes}
 */
function fmod_reverb_3d_get_3d_attributes(reverb_3d_ref) {}


/**
 * @func fmod_reverb_3d_set_properties
 * @desc > **FMOD Function:** [Reverb3D::setProperties](https://www.fmod.com/docs/2.02/api/core-api-reverb3d.html#reverb3d_setproperties)
 * This function sets the environmental properties of a reverb sphere.
 * @param {real} reverb_3d_ref
 * @param {real} decay_time
 * @param {real} early_delay
 * @param {real} late_delay
 * @param {real} hf_reference
 * @param {real} hf_decay_ratio
 * @param {real} diffusion
 * @param {real} density
 * @param {real} low_shelf_frequency
 * @param {real} low_shelf_gain
 * @param {real} high_cut
 * @param {real} early_late_mix
 * @param {real} wet_level
 * @returns {real}
 */
function fmod_reverb_3d_set_properties(reverb_3d_ref, decay_time, early_delay, late_delay, hf_reference, hf_decay_ratio, diffusion, density, low_shelf_frequency, low_shelf_gain, high_cut, early_late_mix, wet_level) {}


/**
 * @func fmod_reverb_3d_get_properties
 * @desc > **FMOD Function:** [Reverb3D::getProperties](https://www.fmod.com/docs/2.02/api/core-api-reverb3d.html#reverb3d_getproperties)
 * This function retrieves the environmental properties of a reverb sphere.
 * @param {real} reverb_3d_ref
 * @returns {struct.FmodReverbProperties}
 */
function fmod_reverb_3d_get_properties(reverb_3d_ref) {}


/**
 * @func fmod_reverb_3d_set_active
 * @desc > **FMOD Function:** [Reverb3D::setActive](https://www.fmod.com/docs/2.02/api/core-api-reverb3d.html#reverb3d_setactive)
 * This function sets the active state.
 * @param {real} reverb_3d_ref
 * @param {real} active
 * @returns {real}
 */
function fmod_reverb_3d_set_active(reverb_3d_ref, active) {}


/**
 * @func fmod_reverb_3d_get_active
 * @desc > **FMOD Function:** [Reverb3D::getActive](https://www.fmod.com/docs/2.02/api/core-api-reverb3d.html#reverb3d_getactive)
 * This function retrieves the active state.
 * @param {real} reverb_3d_ref
 * @returns {real}
 */
function fmod_reverb_3d_get_active(reverb_3d_ref) {}


/**
 * @func fmod_reverb_3d_release
 * @desc > **FMOD Function:** [Reverb3D::release](https://www.fmod.com/docs/2.02/api/core-api-reverb3d.html#reverb3d_release)
 * This function releases the memory for a reverb object and makes it inactive.
 * @param {real} reverb_3d_ref
 * @returns {real}
 */
function fmod_reverb_3d_release(reverb_3d_ref) {}


/**
 * @func fmod_reverb_3d_set_user_data
 * @desc > **FMOD Function:** [Reverb3D::setUserData](https://www.fmod.com/docs/2.02/api/core-api-reverb3d.html#reverb3d_setuserdata)
 * This function sets a user value associated with this object.
 * @param {real} reverb_3d_ref
 * @param {real} data
 * @returns {real}
 */
function fmod_reverb_3d_set_user_data(reverb_3d_ref, data) {}


/**
 * @func fmod_reverb_3d_get_user_data
 * @desc > **FMOD Function:** [Reverb3D::getUserData](https://www.fmod.com/docs/2.02/api/core-api-reverb3d.html#reverb3d_getuserdata)
 * This function retrieves a user value associated with this object.
 * @param {real} reverb_3d_ref
 * @returns {real}
 */
function fmod_reverb_3d_get_user_data(reverb_3d_ref) {}


/**
 * @func fmod_sound_get_name
 * @desc > **FMOD Function:** [Sound::getName](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getname)
 * This function retrieves the name of a sound.
 * @param {real} sound_ref
 * @returns {string}
 */
function fmod_sound_get_name(sound_ref) {}


/**
 * @func fmod_sound_get_format
 * @desc > **FMOD Function:** [Sound::getFormat](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getformat)
 * This function returns format information about the sound.
 * @param {real} sound_ref
 * @returns {struct.FmodSoundFormat}
 */
function fmod_sound_get_format(sound_ref) {}


/**
 * @func fmod_sound_get_length
 * @desc > **FMOD Function:** [Sound::getLength](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getlength)
 * This function retrieves the length using the specified time unit.
 * @param {real} sound_ref
 * @param {real} length_type
 * @returns {real}
 */
function fmod_sound_get_length(sound_ref, length_type) {}


/**
 * @func fmod_sound_get_num_tags
 * @desc > **FMOD Function:** [Sound::getNumTags](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getnumtags)
 * This function retrieves the number of metadata tags.
 * @param {real} sound_ref
 * @returns {struct.FmodSoundNumTags}
 */
function fmod_sound_get_num_tags(sound_ref) {}


/**
 * @func fmod_sound_get_tag
 * @desc > **FMOD Function:** [Sound::getTag](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_gettag)
 * This function retrieves a metadata tag.
 * @param {real} sound_ref
 * @param {real} tag_index
 * @param {Id.Buffer} data_buffer
 * @returns {struct.FmodSoundTag}
 */
function fmod_sound_get_tag(sound_ref, tag_index, data_buffer) {}


/**
 * @func fmod_sound_set_3d_cone_settings
 * @desc > **FMOD Function:** [Sound::set3DConeSettings](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_set3dconesettings)
 * This function sets the angles and attenuation levels of a 3D cone shape, for simulated occlusion which is based on direction.
 * @param {real} sound_ref
 * @param {real} inside_cone_angle
 * @param {real} outside_cone_angle
 * @param {real} outside_volume
 * @returns {real}
 */
function fmod_sound_set_3d_cone_settings(sound_ref, inside_cone_angle, outside_cone_angle, outside_volume) {}


/**
 * @func fmod_sound_get_3d_cone_settings
 * @desc > **FMOD Function:** [Sound::get3DConeSettings](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_get3dconesettings)
 * This function retrieves the inside and outside angles of the 3D projection cone and the outside volume.
 * @param {real} sound_ref
 * @returns {struct.Fmod3DConeSettings}
 */
function fmod_sound_get_3d_cone_settings(sound_ref) {}


/**
 * @func fmod_sound_set_3d_custom_rolloff
 * @desc > **FMOD Function:** [Sound::set3DCustomRolloff](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_set3dcustomrolloff)
 * This function sets a custom roll-off shape for 3D distance attenuation.
 * @param {real} sound_ref
 * @param {array<struct.FmodVector>} points
 */
function fmod_sound_set_3d_custom_rolloff(sound_ref, points) {}


/**
 * @func fmod_sound_get_3d_custom_rolloff
 * @desc > **FMOD Function:** [Sound::get3DCustomRolloff](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_get3dcustomrolloff)
 * This function retrieves the current custom roll-off shape for 3D distance attenuation.
 * @param {real} sound_ref
 * @returns {array<struct.FmodVector>}
 */
function fmod_sound_get_3d_custom_rolloff(sound_ref) {}


/**
 * @func fmod_sound_set_3d_min_max_distance
 * @desc > **FMOD Function:** [Sound::set3DMinMaxDistance](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_set3dminmaxdistance)
 * This function sets the minimum and maximum audible distance for a 3D sound.
 * @param {real} sound_ref
 * @param {real} min
 * @param {real} max
 * @returns {real}
 */
function fmod_sound_set_3d_min_max_distance(sound_ref, min, max) {}


/**
 * @func fmod_sound_get_3d_min_max_distance
 * @desc > **FMOD Function:** [Sound::get3DMinMaxDistance](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_get3dminmaxdistance)
 * This function retrieves the minimum and maximum audible distance for a 3D sound.
 * @param {real} sound_ref
 * @returns {struct.FmodMinMaxDistance}
 */
function fmod_sound_get_3d_min_max_distance(sound_ref) {}


/**
 * @func fmod_sound_set_defaults
 * @desc > **FMOD Function:** [Sound::setDefaults](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_setdefaults)
 * This function sets a sound's default playback attributes.
 * @param {real} sound_ref
 * @param {real} frequency
 * @param {real} priority
 * @returns {real}
 */
function fmod_sound_set_defaults(sound_ref, frequency, priority) {}


/**
 * @func fmod_sound_get_defaults
 * @desc > **FMOD Function:** [Sound::getDefaults](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getdefaults)
 * This function retrieves a sound's default playback attributes.
 * @param {real} sound_ref
 * @returns {struct.FmodSoundDefaults}
 */
function fmod_sound_get_defaults(sound_ref) {}


/**
 * @func fmod_sound_set_mode
 * @desc > **FMOD Function:** [Sound::setMode](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_setmode)
 * This function sets or alters the mode of a sound.
 * @param {real} sound_ref
 * @param {real} mode
 * @returns {real}
 */
function fmod_sound_set_mode(sound_ref, mode) {}


/**
 * @func fmod_sound_get_mode
 * @desc > **FMOD Function:** [Sound::getMode](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getmode)
 * This function retrieves the mode of a sound.
 * @param {real} sound_ref
 * @returns {real}
 */
function fmod_sound_get_mode(sound_ref) {}


/**
 * @func fmod_sound_set_loop_count
 * @desc > **FMOD Function:** [Sound::setLoopCount](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_setloopcount)
 * This function sets the sound to loop a specified number of times before stopping if the playback mode is set to looping.
 * @param {real} sound_ref
 * @param {real} count
 * @returns {real}
 */
function fmod_sound_set_loop_count(sound_ref, count) {}


/**
 * @func fmod_sound_get_loop_count
 * @desc > **FMOD Function:** [Sound::getLoopCount](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getloopcount)
 * This function retrieves the sound's loop count.
 * @param {real} sound_ref
 * @returns {real}
 */
function fmod_sound_get_loop_count(sound_ref) {}


/**
 * @func fmod_sound_set_loop_points
 * @desc > **FMOD Function:** [Sound::setLoopPoints](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_setlooppoints)
 * This function sets the loop points within a sound.
 * @param {real} sound_ref
 * @param {real} loop_start
 * @param {real} loop_start_type
 * @param {real} loop_end
 * @param {real} loop_end_type
 * @returns {real}
 */
function fmod_sound_set_loop_points(sound_ref, loop_start, loop_start_type, loop_end, loop_end_type) {}


/**
 * @func fmod_sound_get_loop_points
 * @desc > **FMOD Function:** [Sound::getLoopPoints](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getlooppoints)
 * This function retrieves the loop points for a sound.
 * @param {real} sound_ref
 * @param {real} loop_start_type
 * @param {real} loop_end_type
 * @returns {struct.FmodLoopPoints}
 */
function fmod_sound_get_loop_points(sound_ref, loop_start_type, loop_end_type) {}


/**
 * @func fmod_sound_set_sound_group
 * @desc > **FMOD Function:** [Sound::setSoundGroup](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_setsoundgroup)
 * This function moves the sound from its existing SoundGroup to the specified sound group.
 * @param {real} sound_ref
 * @param {real} sound_group_ref
 * @returns {real}
 */
function fmod_sound_set_sound_group(sound_ref, sound_group_ref) {}


/**
 * @func fmod_sound_get_sound_group
 * @desc > **FMOD Function:** [Sound::getSoundGroup](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getsoundgroup)
 * This function retrieves the sound's current sound group.
 * @param {real} sound_ref
 * @returns {real}
 */
function fmod_sound_get_sound_group(sound_ref) {}


/**
 * @func fmod_sound_get_num_sub_sounds
 * @desc > **FMOD Function:** [Sound::getNumSubSounds](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getnumsubsounds)
 * This function retrieves the number of subsounds stored within a sound.
 * @param {real} sound_ref
 * @returns {real}
 */
function fmod_sound_get_num_sub_sounds(sound_ref) {}


/**
 * @func fmod_sound_get_sub_sound
 * @desc > **FMOD Function:** [Sound::getSubSound](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getsubsound)
 * This function retrieves a handle to a Sound object that is contained within the parent sound.
 * @param {real} sound_ref
 * @param {real} sub_sound_index
 * @returns {real}
 */
function fmod_sound_get_sub_sound(sound_ref, sub_sound_index) {}


/**
 * @func fmod_sound_get_sub_sound_parent
 * @desc > **FMOD Function:** [Sound::getSubSoundParent](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getsubsoundparent)
 * This function retrieves the parent Sound object that contains this subsound.
 * @param {real} sound_ref
 * @returns {real}
 */
function fmod_sound_get_sub_sound_parent(sound_ref) {}


/**
 * @func fmod_sound_get_open_state
 * @desc > **FMOD Function:** [Sound::getOpenState](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getopenstate)
 * This function retrieves the state a sound is in after being opened with the non blocking flag, or the current state of the streaming buffer.
 * @param {real} sound_ref
 * @returns {struct.FmodSoundOpenState}
 */
function fmod_sound_get_open_state(sound_ref) {}


/**
 * @func fmod_sound_read_data
 * @desc > **FMOD Function:** [Sound::readData](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_readdata)
 * This function reads data from an opened sound to a specified buffer, using FMOD's internal codecs.
 * @param {real} sound_ref
 * @param {Id.Buffer} buff
 * @param {real} length
 * @param {real} offset
 */
function fmod_sound_read_data(sound_ref, buff, length, offset) {}


/**
 * @func fmod_sound_seek_data
 * @desc > **FMOD Function:** [Sound::seekData](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_seekdata)
 * This function seeks a sound for use with data reading, using FMOD's internal codecs.
 * @param {real} sound_ref
 * @param {real} pcm
 * @returns {real}
 */
function fmod_sound_seek_data(sound_ref, pcm) {}


/**
 * @func fmod_sound_lock
 * @desc > **FMOD Function:** [Sound::lock](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_lock)
 * This function gives access to a portion or all the sample data of a sound for direct manipulation.
 * @param {real} sound_ref
 * @param {real} offset
 * @param {real} length
 * @param {Id.Buffer} buff1
 * @param {Id.Buffer} buff2
 * @returns {struct.FmodSoundLock}
 */
function fmod_sound_lock(sound_ref, offset, length, buff1, buff2) {}


/**
 * @func fmod_sound_unlock
 * @desc > **FMOD Function:** [Sound::unlock](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_unlock)
 * This function finalizes a previous sample data lock and submits it back to the Sound object.
 * @param {real} sound_ref
 * @param {real} buff1
 * @param {real} len1
 * @param {real} address1
 * @param {real} buff2
 * @param {real} len2
 * @param {real} address2
 */
function fmod_sound_unlock(sound_ref, buff1, len1, address1, buff2, len2, address2) {}


/**
 * @func fmod_sound_get_music_num_channels
 * @desc > **FMOD Function:** [Sound::getMusicNumChannels](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getmusicnumchannels)
 * This function gets the number of music channels inside a MOD/S3M/XM/IT/MIDI file.
 * @param {real} sound_ref
 * @returns {real}
 */
function fmod_sound_get_music_num_channels(sound_ref) {}


/**
 * @func fmod_sound_set_music_channel_volume
 * @desc > **FMOD Function:** [Sound::setMusicChannelVolume](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_setmusicchannelvolume)
 * This function sets the volume of a MOD/S3M/XM/IT/MIDI music channel volume.
 * @param {real} sound_ref
 * @param {real} channel_index
 * @param {real} volume
 * @returns {real}
 */
function fmod_sound_set_music_channel_volume(sound_ref, channel_index, volume) {}


/**
 * @func fmod_sound_get_music_channel_volume
 * @desc > **FMOD Function:** [Sound::getMusicChannelVolume](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getmusicchannelvolume)
 * This function retrieves the volume of a MOD/S3M/XM/IT/MIDI music channel volume.
 * @param {real} sound_ref
 * @param {real} channel_index
 * @returns {real}
 */
function fmod_sound_get_music_channel_volume(sound_ref, channel_index) {}


/**
 * @func fmod_sound_set_music_speed
 * @desc > **FMOD Function:** [Sound::setMusicSpeed](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_setmusicspeed)
 * This function sets the relative speed of MOD/S3M/XM/IT/MIDI music.
 * @param {real} sound_ref
 * @param {real} speed
 * @returns {real}
 */
function fmod_sound_set_music_speed(sound_ref, speed) {}


/**
 * @func fmod_sound_get_music_speed
 * @desc > **FMOD Function:** [Sound::getMusicSpeed](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getmusicspeed)
 * This function gets the relative speed of MOD/S3M/XM/IT/MIDI music.
 * @param {real} sound_ref
 * @returns {real}
 */
function fmod_sound_get_music_speed(sound_ref) {}


/**
 * @func fmod_sound_get_sync_point
 * @desc > **FMOD Function:** [Sound::getSyncPoint](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getsyncpoint)
 * This function retrieves a sync point.
 * @param {real} sound_ref
 * @param {real} point_index
 * @param {enum.FMOD_TIMEUNIT} offset_type
 * @returns {struct.FmodSyncPoint}
 */
function fmod_sound_get_sync_point(sound_ref, point_index, offset_type) {}


/**
 * @func fmod_sound_get_num_sync_points
 * @desc > **FMOD Function:** [Sound::getNumSyncPoints](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getnumsyncpoints)
 * This function retrieves the number of sync points stored within a sound.
 * @param {real} sound_ref
 * @returns {real}
 */
function fmod_sound_get_num_sync_points(sound_ref) {}


/**
 * @func fmod_sound_add_sync_point
 * @desc > **FMOD Function:** [Sound::addSyncPoint](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_addsyncpoint)
 * This function adds a sync point at a specific time within the sound.
 * @param {real} sound_ref
 * @param {real} offset
 * @param {real} offset_type
 * @param {string} name
 * @returns {real}
 */
function fmod_sound_add_sync_point(sound_ref, offset, offset_type, name) {}


/**
 * @func fmod_sound_delete_sync_point
 * @desc > **FMOD Function:** [Sound::deleteSyncPoint](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_deletesyncpoint)
 * This function deletes a sync point within the sound.
 * @param {real} sound_ref
 * @param {real} point_index
 * @returns {real}
 */
function fmod_sound_delete_sync_point(sound_ref, point_index) {}


/**
 * @func fmod_sound_release
 * @desc > **FMOD Function:** [Sound::release](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_release)
 * This function frees a sound object.
 * @param {real} sound_ref
 * @returns {real}
 */
function fmod_sound_release(sound_ref) {}


/**
 * @func fmod_sound_get_system_object
 * @desc > **FMOD Function:** [Sound::getSystemObject](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getsystemobject)
 * This function retrieves the parent System object.
 * @param {real} sound_ref
 * @returns {real}
 */
function fmod_sound_get_system_object(sound_ref) {}


/**
 * @func fmod_sound_set_user_data
 * @desc > **FMOD Function:** [Sound::setUserData](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_setuserdata)
 * This function sets a user value associated with this object.
 * @param {real} sound_ref
 * @param {real} data
 * @returns {real}
 */
function fmod_sound_set_user_data(sound_ref, data) {}


/**
 * @func fmod_sound_get_user_data
 * @desc > **FMOD Function:** [Sound::getUserData](https://www.fmod.com/docs/2.02/api/core-api-sound.html#sound_getuserdata)
 * This function retrieves a user value associated with this object.
 * @param {real} sound_ref
 * @returns {real}
 */
function fmod_sound_get_user_data(sound_ref) {}


/**
 * @func fmod_sound_group_set_max_audible
 * @desc > **FMOD Function:** [SoundGroup::setMaxAudible](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_setmaxaudible)
 * This function sets the maximum number of playbacks to be audible at once in a sound group.
 * @param {real} sound_group_ref
 * @param {real} max_audible
 * @returns {real}
 */
function fmod_sound_group_set_max_audible(sound_group_ref, max_audible) {}


/**
 * @func fmod_sound_group_get_max_audible
 * @desc > **FMOD Function:** [SoundGroup::getMaxAudible](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_getmaxaudible)
 * This function retrieves the maximum number of playbacks to be audible at once in a sound group.
 * @param {real} sound_group_ref
 * @returns {real}
 */
function fmod_sound_group_get_max_audible(sound_group_ref) {}


/**
 * @func fmod_sound_group_set_max_audible_behavior
 * @desc > **FMOD Function:** [SoundGroup::setMaxAudibleBehavior](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_setmaxaudiblebehavior)
 * This function changes the way the sound playback behaves when too many sounds are playing in a soundgroup.
 * @param {real} sound_group_ref
 * @param {real} behavior
 * @returns {real}
 */
function fmod_sound_group_set_max_audible_behavior(sound_group_ref, behavior) {}


/**
 * @func fmod_sound_group_get_max_audible_behavior
 * @desc > **FMOD Function:** [SoundGroup::getMaxAudibleBehavior](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_getmaxaudiblebehavior)
 * This function retrieves the current max audible behavior.
 * @param {real} sound_group_ref
 * @returns {real}
 */
function fmod_sound_group_get_max_audible_behavior(sound_group_ref) {}


/**
 * @func fmod_sound_group_set_mute_fade_speed
 * @desc > **FMOD Function:** [SoundGroup::setMuteFadeSpeed](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_setmutefadespeed)
 * This function sets a mute fade time.
 * @param {real} sound_group_ref
 * @param {real} speed
 * @returns {real}
 */
function fmod_sound_group_set_mute_fade_speed(sound_group_ref, speed) {}


/**
 * @func fmod_sound_group_get_mute_fade_speed
 * @desc > **FMOD Function:** [SoundGroup::getMuteFadeSpeed](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_getmutefadespeed)
 * This function retrieves the current mute fade time.
 * @param {real} sound_group_ref
 * @returns {real}
 */
function fmod_sound_group_get_mute_fade_speed(sound_group_ref) {}


/**
 * @func fmod_sound_group_set_volume
 * @desc > **FMOD Function:** [SoundGroup::setVolume](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_setvolume)
 * This function sets the volume of the sound group.
 * @param {real} sound_group_ref
 * @param {real} volume
 * @returns {real}
 */
function fmod_sound_group_set_volume(sound_group_ref, volume) {}


/**
 * @func fmod_sound_group_get_volume
 * @desc > **FMOD Function:** [SoundGroup::getVolume](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_getvolume)
 * This function retrieves the volume of the sound group.
 * @param {real} sound_group_ref
 * @returns {real}
 */
function fmod_sound_group_get_volume(sound_group_ref) {}


/**
 * @func fmod_sound_group_get_num_sounds
 * @desc > **FMOD Function:** [SoundGroup::getNumSounds](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_getnumsounds)
 * This function retrieves the current number of sounds in this sound group.
 * @param {real} sound_group_ref
 * @returns {real}
 */
function fmod_sound_group_get_num_sounds(sound_group_ref) {}


/**
 * @func fmod_sound_group_get_sound
 * @desc > **FMOD Function:** [SoundGroup::getSound](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_getsound)
 * This function retrieves a sound.
 * @param {real} sound_group_ref
 * @param {real} sound_index
 * @returns {real}
 */
function fmod_sound_group_get_sound(sound_group_ref, sound_index) {}


/**
 * @func fmod_sound_group_get_num_playing
 * @desc > **FMOD Function:** [SoundGroup::getNumPlaying](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_getnumplaying)
 * This function retrieves the number of currently playing Channels for the SoundGroup.
 * @param {real} sound_group_ref
 * @returns {real}
 */
function fmod_sound_group_get_num_playing(sound_group_ref) {}


/**
 * @func fmod_sound_group_stop
 * @desc > **FMOD Function:** [SoundGroup::stop](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_stop)
 * This function stops all sounds within this soundgroup.
 * @param {real} sound_group_ref
 * @returns {real}
 */
function fmod_sound_group_stop(sound_group_ref) {}


/**
 * @func fmod_sound_group_get_name
 * @desc > **FMOD Function:** [SoundGroup::getName](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_getname)
 * This function retrieves the name of the sound group.
 * @param {real} sound_group_ref
 * @returns {string}
 */
function fmod_sound_group_get_name(sound_group_ref) {}


/**
 * @func fmod_sound_group_release
 * @desc > **FMOD Function:** [SoundGroup::release](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_release)
 * This function releases a soundgroup object and returns all sounds back to the master sound group.
 * @param {real} sound_group_ref
 * @returns {real}
 */
function fmod_sound_group_release(sound_group_ref) {}


/**
 * @func fmod_sound_group_get_system_object
 * @desc > **FMOD Function:** [SoundGroup::getSystemObject](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_getsystemobject)
 * This function retrieves the parent System object.
 * @param {real} sound_group_ref
 * @returns {real}
 */
function fmod_sound_group_get_system_object(sound_group_ref) {}


/**
 * @func fmod_sound_group_set_user_data
 * @desc > **FMOD Function:** [SoundGroup::setUserData](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_setuserdata)
 * This function sets a user value associated with this object.
 * @param {real} sound_group_ref
 * @param {real} data
 * @returns {real}
 */
function fmod_sound_group_set_user_data(sound_group_ref, data) {}


/**
 * @func fmod_sound_group_get_user_data
 * @desc > **FMOD Function:** [SoundGroup::getUserData](https://www.fmod.com/docs/2.02/api/core-api-soundgroup.html#soundgroup_getuserdata)
 * This function retrieves a user value associated with this object.
 * @param {real} sound_group_ref
 * @returns {real}
 */
function fmod_sound_group_get_user_data(sound_group_ref) {}


/**
 * @func fmod_studio_bank_get_loading_state
 * @desc > **FMOD Function:** [Studio::Bank::getLoadingState](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_getloadingstate)
 * This function retrieves the loading state.
 * @param {real} bank_ref 
 * @returns {enum.FMOD_STUDIO_LOADING_STATE}
 */
function fmod_studio_bank_get_loading_state(bank_ref) {}


/**
 * @func fmod_studio_bank_load_sample_data
 * @desc > **FMOD Function:** [Studio::Bank::loadSampleData](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_loadsampledata)
 * This function loads non-streaming sample data for all events in the bank.
 * @param {real} bank_ref
 * @returns {real}
 */
function fmod_studio_bank_load_sample_data(bank_ref) {}


/**
 * @func fmod_studio_bank_unload_sample_data
 * @desc > **FMOD Function:** [Studio::Bank::unloadSampleData](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_unloadsampledata)
 * This function unloads non-streaming sample data for all events in the bank.
 * @param {real} bank_ref
 * @returns {real}
 */
function fmod_studio_bank_unload_sample_data(bank_ref) {}


/**
 * @func fmod_studio_bank_get_sample_loading_state
 * @desc > **FMOD Function:** [Studio::Bank::getSampleLoadingState](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_getsampleloadingstate)
 * This function retrieves the loading state of the samples in the bank.
 * @param {real} bank_ref
 * @returns {real}
 */
function fmod_studio_bank_get_sample_loading_state(bank_ref) {}


/**
 * @func fmod_studio_bank_unload
 * @desc > **FMOD Function:** [Studio::Bank::unload](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_unload)
 * This function unloads the bank.
 * @param {real} bank_ref
 * @returns {real}
 */
function fmod_studio_bank_unload(bank_ref) {}


/**
 * @func fmod_studio_bank_get_bus_count
 * @desc > **FMOD Function:** [Studio::Bank::getBusCount](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_getbuscount)
 * This function retrieves the number of buses in the bank.
 * @param {real} bank_ref
 * @returns {real}
 */
function fmod_studio_bank_get_bus_count(bank_ref) {}


/**
 * @func fmod_studio_bank_get_bus_list
 * @desc > **FMOD Function:** [Studio::Bank::getBusList](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_getbuslist)
 * This function retrieves a list of the buses in the bank.
 * @param {real} bank_ref
 * @returns {array<real>}
 */
function fmod_studio_bank_get_bus_list(bank_ref) {}


/**
 * @func fmod_studio_bank_get_event_count
 * @desc > **FMOD Function:** [Studio::Bank::getEventCount](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_geteventcount)
 * This function retrieves the number of event descriptions in the bank.
 * @param {real} bank_ref
 * @returns {real}
 */
function fmod_studio_bank_get_event_count(bank_ref) {}


/**
 * @func fmod_studio_bank_get_event_description_list
 * @desc > **FMOD Function:** [Studio::Bank::getEventList](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_geteventlist)
 * This function retrieves a list of the event descriptions in the bank.
 * @param {real} bank_ref
 * @returns {array<real>}
 */
function fmod_studio_bank_get_event_description_list(bank_ref) {}


/**
 * @func fmod_studio_bank_get_string_count
 * @desc > **FMOD Function:** [Studio::Bank::getStringCount](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_getstringcount)
 * This function retrieves the number of string table entries in the bank.
 * @param {real} bank_ref
 * @returns {real}
 */
function fmod_studio_bank_get_string_count(bank_ref) {}


/**
 * @func fmod_studio_bank_get_string_info
 * @desc > **FMOD Function:** [Studio::Bank::getStringInfo](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_getstringinfo)
 * This function retrieves a string table entry.
 * @param {real} bank_ref
 * @param {real} string_index
 * @returns {struct.FmodStudioStringInfo}
 */
function fmod_studio_bank_get_string_info(bank_ref, string_index) {}


/**
 * @func fmod_studio_bank_get_vca_count
 * @desc > **FMOD Function:** [Studio::Bank::getVCACount](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_getvcacount)
 * This function retrieves the number of VCAs in the bank.
 * @param {real} bank_ref
 * @returns {real}
 */
function fmod_studio_bank_get_vca_count(bank_ref) {}


/**
 * @func fmod_studio_bank_get_vca_list
 * @desc > **FMOD Function:** [Studio::Bank::getVCAList](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_getvcalist)
 * This function retrieves a list of the VCAs in the bank.
 * @param {real} bank_ref
 * @returns {array<real>}
 */
function fmod_studio_bank_get_vca_list(bank_ref) {}


/**
 * @func fmod_studio_bank_get_id
 * @desc > **FMOD Function:** [Studio::Bank::getID](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_getid)
 * This function retrieves the GUID.
 * @param {real} bank_ref
 * @returns {string}
 */
function fmod_studio_bank_get_id(bank_ref) {}


/**
 * @func fmod_studio_bank_get_path
 * @desc > **FMOD Function:** [Studio::Bank::getPath](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_getpath)
 * This function retrieves the path.
 * @param {real} bank_ref
 * @returns {string}
 */
function fmod_studio_bank_get_path(bank_ref) {}


/**
 * @func fmod_studio_bank_is_valid
 * @desc > **FMOD Function:** [Studio::Bank::isValid](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_isvalid)
 * This function checks that the Bank reference is valid.
 * @param {real} bank_ref
 * @returns {real}
 */
function fmod_studio_bank_is_valid(bank_ref) {}


/**
 * @func fmod_studio_bank_set_user_data
 * @desc > **FMOD Function:** [Studio::Bank::setUserData](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_setuserdata)
 * This function sets the bank user data.
 * @param {real} bank_ref
 * @param {real} data
 * @returns {real}
 */
function fmod_studio_bank_set_user_data(bank_ref, data) {}


/**
 * @func fmod_studio_bank_get_user_data
 * @desc > **FMOD Function:** [Studio::Bank::getUserData](https://www.fmod.com/docs/2.02/api/studio-api-bank.html#studio_bank_getuserdata)
 * This function retrieves the bank user data.
 * @param {real} bank_ref
 * @returns {real}
 */
function fmod_studio_bank_get_user_data(bank_ref) {}


/**
 * @func fmod_studio_bus_set_paused
 * @desc > **FMOD Function:** [Studio::Bus::setPaused](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_setpaused)
 * This function sets the pause state.
 * @param {real} bus_ref
 * @param {real} pause
 * @returns {real}
 */
function fmod_studio_bus_set_paused(bus_ref, pause) {}


/**
 * @func fmod_studio_bus_get_paused
 * @desc > **FMOD Function:** [Studio::Bus::getPaused](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_getpaused)
 * This function retrieves the pause state.
 * @param {real} bus_ref
 * @returns {real}
 */
function fmod_studio_bus_get_paused(bus_ref) {}


/**
 * @func fmod_studio_bus_stop_all_events
 * @desc > **FMOD Function:** [Studio::Bus::stopAllEvents](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_stopallevents)
 * This function stops all event instances that are routed into the bus.
 * @param {real} bus_ref
 * @param {real} stop_mode
 * @returns {real}
 */
function fmod_studio_bus_stop_all_events(bus_ref, stop_mode) {}


/**
 * @func fmod_studio_bus_set_volume
 * @desc > **FMOD Function:** [Studio::Bus::setVolume](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_setvolume)
 * This function sets the volume level.
 * @param {real} bus_ref
 * @param {real} volumen
 * @returns {real}
 */
function fmod_studio_bus_set_volume(bus_ref, volumen) {}


/**
 * @func fmod_studio_bus_get_volume
 * @desc > **FMOD Function:** [Studio::Bus::getVolume](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_getvolume)
 * This function retrieves the volume level.
 * @param {real} bus_ref
 * @returns {real}
 */
function fmod_studio_bus_get_volume(bus_ref) {}


/**
 * @func fmod_studio_bus_set_mute
 * @desc > **FMOD Function:** [Studio::Bus::setMute](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_setmute)
 * This function sets the mute state.
 * @param {real} bus_ref
 * @param {real} mute
 * @returns {real}
 */
function fmod_studio_bus_set_mute(bus_ref, mute) {}


/**
 * @func fmod_studio_bus_get_mute
 * @desc > **FMOD Function:** [Studio::Bus::getMute](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_getmute)
 * This function retrieves the mute state.
 * @param {real} bus_ref
 * @returns {real}
 */
function fmod_studio_bus_get_mute(bus_ref) {}


/**
 * @func fmod_studio_bus_set_port_index
 * @desc > **FMOD Function:** [Studio::Bus::setPortIndex](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_setportindex)
 * This function sets the port index to use when attaching to an output port.
 * @param {real} bus_ref
 * @param {real} port_index
 */
function fmod_studio_bus_set_port_index(bus_ref, port_index) {}


/**
 * @func fmod_studio_bus_get_port_index
 * @desc > **FMOD Function:** [Studio::Bus::getPortIndex](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_getportindex)
 * This function retrieves the port index assigned to the bus.
 * @param {real} bus_ref
 * @returns {real} port_index
 */
function fmod_studio_bus_get_port_index(bus_ref) {}


/**
 * @func fmod_studio_bus_get_channel_group
 * @desc > **FMOD Function:** [Studio::Bus::getChannelGroup](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_getchannelgroup)
 * This function retrieves the core ChannelGroup.
 * @param {real} bus_ref
 * @returns {real}
 */
function fmod_studio_bus_get_channel_group(bus_ref) {}


/**
 * @func fmod_studio_bus_lock_channel_group
 * @desc > **FMOD Function:** [Studio::Bus::lockChannelGroup](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_lockchannelgroup)
 * This function locks the core ChannelGroup.
 * @param {real} bus_ref
 * @returns {real}
 */
function fmod_studio_bus_lock_channel_group(bus_ref) {}


/**
 * @func fmod_studio_bus_unlock_channel_group
 * @desc > **FMOD Function:** [Studio::Bus::unlockChannelGroup](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_unlockchannelgroup)
 * This function unlocks the core ChannelGroup.
 * @param {real} bus_ref
 * @returns {real}
 */
function fmod_studio_bus_unlock_channel_group(bus_ref) {}


/**
 * @func fmod_studio_bus_get_cpu_usage
 * @desc > **FMOD Function:** [Studio::Bus::getCPUUsage](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_getcpuusage)
 * This function retrieves the bus CPU usage data.
 * @param {real} bus_ref
 * @returns {struct.FmodCPUUsage}
 */
function fmod_studio_bus_get_cpu_usage(bus_ref) {}


/**
 * @func fmod_studio_bus_get_memory_usage
 * @desc > **FMOD Function:** [Studio::Bus::getMemoryUsage](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_getmemoryusage)
 * This function retrieves memory usage statistics.
 * @param {real} bus_ref
 * @param {Id.Buffer} buff_return
 * @returns {real}
 */
function fmod_studio_bus_get_memory_usage(bus_ref, buff_return) {}


/**
 * @func fmod_studio_bus_get_id
 * @desc > **FMOD Function:** [Studio::Bus::getID](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_getid)
 * This function retrieves the GUID.
 * @param {real} bus_ref
 * @returns {string}
 */
function fmod_studio_bus_get_id(bus_ref) {}


/**
 * @func fmod_studio_bus_get_path
 * @desc > **FMOD Function:** [Studio::Bus::getPath](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_getpath)
 * This function retrieves the path.
 * @param {real} bus_ref
 * @returns {string}
 */
function fmod_studio_bus_get_path(bus_ref) {}


/**
 * @func fmod_studio_bus_is_valid
 * @desc > **FMOD Function:** [Studio::Bus::isValid](https://www.fmod.com/docs/2.02/api/studio-api-bus.html#studio_bus_isvalid)
 * This function checks that the Bus reference is valid.
 * @param {real} bus_ref
 * @returns {real}
 */
function fmod_studio_bus_is_valid(bus_ref) {}


/**
 * @func fmod_studio_command_replay_set_bank_path
 * @desc > **FMOD Function:** [Studio::CommandReplay::setBankPath](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_setbankpath)
 * This function sets a path substition that will be used when loading banks with this replay.
 * @param {real} command_replay_ref
 * @param {string} path
 * @returns {real}
 */
function fmod_studio_command_replay_set_bank_path(command_replay_ref, path) {}


/**
 * @func fmod_studio_command_replay_set_create_instance_callback
 * @desc > **FMOD Function:** [Studio::CommandReplay::setCreateInstanceCallback](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_setcreateinstancecallback)
 * This function sets the create event instance callback.
 * @param {real} command_replay_ref
 * @returns {real}
 */
function fmod_studio_command_replay_set_create_instance_callback(command_replay_ref) {}


/**
 * @func fmod_studio_command_replay_set_frame_callback
 * @desc > **FMOD Function:** [Studio::CommandReplay::setFrameCallback](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_setframecallback)
 * This function sets a callback that is issued each time the replay reaches a new frame.
 * @param {real} command_replay_ref
 * @returns {real}
 */
function fmod_studio_command_replay_set_frame_callback(command_replay_ref) {}


/**
 * @func fmod_studio_command_replay_set_load_bank_callback
 * @desc > **FMOD Function:** [Studio::CommandReplay::setLoadBankCallback](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_setloadbankcallback)
 * This function sets the bank loading callback.
 * @param {real} command_replay_ref
 * @param {string} path
 * @returns {real}
 */
function fmod_studio_command_replay_set_load_bank_callback(command_replay_ref, path) {}


/**
 * @func fmod_studio_command_replay_start
 * @desc > **FMOD Function:** [Studio::CommandReplay::start](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_start)
 * This function begins playback.
 * @param {real} command_replay_ref
 * @returns {real}
 */
function fmod_studio_command_replay_start(command_replay_ref) {}


/**
 * @func fmod_studio_command_replay_stop
 * @desc > **FMOD Function:** [Studio::CommandReplay::stop](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_stop)
 * This function stops playback.
 * @param {real} command_replay_ref
 * @returns {real}
 */
function fmod_studio_command_replay_stop(command_replay_ref) {}


/**
 * @func fmod_studio_command_replay_get_current_command
 * @desc > **FMOD Function:** [Studio::CommandReplay::getCurrentCommand](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_getcurrentcommand)
 * This function retrieves the progress through the command replay.
 * @param {real} command_replay_ref
 * @returns {struct.FmodCommandReplayCurrentCommand}
 */
function fmod_studio_command_replay_get_current_command(command_replay_ref) {}


/**
 * @func fmod_studio_command_replay_get_playback_state
 * @desc > **FMOD Function:** [Studio::CommandReplay::getPlaybackState](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_getplaybackstate)
 * This function retrieves the playback state.
 * @param {real} command_replay_ref
 * @returns {real}
 */
function fmod_studio_command_replay_get_playback_state(command_replay_ref) {}


/**
 * @func fmod_studio_command_replay_set_paused
 * @desc > **FMOD Function:** [Studio::CommandReplay::setPaused](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_setpaused)
 * This function sets the paused state.
 * @param {real} command_replay_ref
 * @param {real} pause
 * @returns {real}
 */
function fmod_studio_command_replay_set_paused(command_replay_ref, pause) {}


/**
 * @func fmod_studio_command_replay_get_paused
 * @desc > **FMOD Function:** [Studio::CommandReplay::getPaused](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_getpaused)
 * This function retrieves the paused state.
 * @param {real} command_replay_ref
 * @returns {real}
 */
function fmod_studio_command_replay_get_paused(command_replay_ref) {}


/**
 * @func fmod_studio_command_replay_seek_to_command
 * @desc > **FMOD Function:** [Studio::CommandReplay::seekToCommand](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_seektocommand)
 * This function seeks the playback position to a command.
 * @param {real} command_replay_ref
 * @param {real} command_index
 * @returns {real}
 */
function fmod_studio_command_replay_seek_to_command(command_replay_ref, command_index) {}


/**
 * @func fmod_studio_command_replay_seek_to_time
 * @desc > **FMOD Function:** [Studio::CommandReplay::seekToTime](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_seektotime)
 * This function seeks the playback position to a time.
 * @param {real} command_replay_ref
 * @param {real} time
 * @returns {real}
 */
function fmod_studio_command_replay_seek_to_time(command_replay_ref, time) {}


/**
 * @func fmod_studio_command_replay_get_command_at_time
 * @desc > **FMOD Function:** [Studio::CommandReplay::getCommandAtTime](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_getcommandattime)
 * This function retrieves the command index corresponding to the given playback time.
 * @param {real} command_replay_ref
 * @param {real} time
 * @returns {real}
 */
function fmod_studio_command_replay_get_command_at_time(command_replay_ref, time) {}


/**
 * @func fmod_studio_command_replay_get_command_count
 * @desc > **FMOD Function:** [Studio::CommandReplay::getCommandCount](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_getcommandcount)
 * This function retrieves the number of commands in the replay.
 * @param {real} command_replay_ref
 * @returns {real}
 */
function fmod_studio_command_replay_get_command_count(command_replay_ref) {}


/**
 * @func fmod_studio_command_replay_get_command_info
 * @desc > **FMOD Function:** [Studio::CommandReplay::getCommandInfo](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_getcommandinfo)
 * This function retrieves command information.
 * @param {real} command_replay_ref
 * @param {real} command_index
 * @returns {struct.FmodCommandReplayCommandInfo}
 */
function fmod_studio_command_replay_get_command_info(command_replay_ref, command_index) {}


/**
 * @func fmod_studio_command_replay_get_command_string
 * @desc > **FMOD Function:** [Studio::CommandReplay::getCommandString](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_getcommandstring)
 * This function retrieves the string representation of a command.
 * @param {real} command_replay_ref
 * @param {real} command_index
 * @returns {string}
 */
function fmod_studio_command_replay_get_command_string(command_replay_ref, command_index) {}


/**
 * @func fmod_studio_command_replay_get_length
 * @desc > **FMOD Function:** [Studio::CommandReplay::getLength](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_getlength)
 * This function retrieves the total playback time.
 * @param {real} command_replay_ref
 * @returns {real}
 */
function fmod_studio_command_replay_get_length(command_replay_ref) {}


/**
 * @func fmod_studio_command_replay_get_system_object
 * @desc > **FMOD Function:** [Studio::CommandReplay::getSystem](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_getsystem)
 * This function retrieves the Studio System object associated with this replay object.
 * @param {real} command_replay_ref
 * @returns {real}
 */
function fmod_studio_command_replay_get_system_object(command_replay_ref) {}


/**
 * @func fmod_studio_command_replay_is_valid
 * @desc > **FMOD Function:** [Studio::CommandReplay::isValid](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_isvalid)
 * This function checks that the CommandReplay reference is valid.
 * @param {real} command_replay_ref
 * @returns {real}
 */
function fmod_studio_command_replay_is_valid(command_replay_ref) {}


/**
 * @func fmod_studio_command_replay_set_user_data
 * @desc > **FMOD Function:** [Studio::CommandReplay::setUserData](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_setuserdata)
 * This function sets user data.
 * @param {real} command_replay_ref
 * @param {real} data
 * @returns {real}
 */
function fmod_studio_command_replay_set_user_data(command_replay_ref, data) {}


/**
 * @func fmod_studio_command_replay_get_user_data
 * @desc > **FMOD Function:** [Studio::CommandReplay::getUserData](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_getuserdata)
 * This function retrieves user data.
 * @param {real} command_replay_ref
 * @returns {real}
 */
function fmod_studio_command_replay_get_user_data(command_replay_ref) {}


/**
 * @func fmod_studio_command_replay_release
 * @desc > **FMOD Function:** [Studio::CommandReplay::release](https://www.fmod.com/docs/2.02/api/studio-api-commandreplay.html#studio_commandreplay_release)
 * This function releases the command replay.
 * @param {real} command_replay_ref
 * @returns {real}
 */
function fmod_studio_command_replay_release(command_replay_ref) {}


/**
 * @func fmod_studio_event_description_create_instance
 * @desc > **FMOD Function:** [Studio::EventDescription::createInstance](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_createinstance)
 * This function creates a playable instance.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_create_instance(event_description_ref) {}


/**
 * @func fmod_studio_event_description_get_instance_count
 * @desc > **FMOD Function:** [Studio::EventDescription::getInstanceCount](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getinstancecount)
 * This function retrieves the number of instances.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_get_instance_count(event_description_ref) {}


/**
 * @func fmod_studio_event_description_get_instance_list
 * @desc > **FMOD Function:** [Studio::EventDescription::getInstanceList](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getinstancelist)
 * This function retrieves a list of the instances.
 * @param {real} event_descriptor_ref
 * @returns {array<real>}
 */
function fmod_studio_event_description_get_instance_list(event_description_ref) {}


/**
 * @func fmod_studio_event_description_release_all_instances
 * @desc > **FMOD Function:** [Studio::EventDescription::releaseAllInstances](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_releaseallinstances)
 * This function releases all instances.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_release_all_instances(event_description_ref) {}


/**
 * @func fmod_studio_event_description_load_sample_data
 * @desc > **FMOD Function:** [Studio::EventDescription::loadSampleData](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_loadsampledata)
 * This function loads non-streaming sample data used by the event.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_load_sample_data(event_description_ref) {}


/**
 * @func fmod_studio_event_description_unload_sample_data
 * @desc > **FMOD Function:** [Studio::EventDescription::unloadSampleData](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_unloadsampledata)
 * This function unloads all non-streaming sample data.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_unload_sample_data(event_description_ref) {}


/**
 * @func fmod_studio_event_description_get_sample_loading_state
 * @desc > **FMOD Function:** [Studio::EventDescription::getSampleLoadingState](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getsampleloadingstate)
 * This function retrieves the sample data loading state.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_get_sample_loading_state(event_description_ref) {}


/**
 * @func fmod_studio_event_description_is_3d
 * @desc > **FMOD Function:** [Studio::EventDescription::is3D](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_is3d)
 * This function retrieves the event's 3D status.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_is_3d(event_description_ref) {}


/**
 * @func fmod_studio_event_description_is_doppler_enabled
 * @desc > **FMOD Function:** [Studio::EventDescription::isDopplerEnabled](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_isdopplerenabled)
 * This function retrieves the event's doppler status.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_is_doppler_enabled(event_description_ref) {}


/**
 * @func fmod_studio_event_description_is_oneshot
 * @desc > **FMOD Function:** [Studio::EventDescription::isOneshot](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_isoneshot)
 * This function retrieves the event's oneshot status.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_is_oneshot(event_description_ref) {}


/**
 * @func fmod_studio_event_description_is_snapshot
 * @desc > **FMOD Function:** [Studio::EventDescription::isSnapshot](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_issnapshot)
 * This function retrieves the event's snapshot status.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_is_snapshot(event_description_ref) {}


/**
 * @func fmod_studio_event_description_is_stream
 * @desc > **FMOD Function:** [Studio::EventDescription::isStream](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_isstream)
 * This function retrieves the event's stream status.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_is_stream(event_description_ref) {}


/**
 * @func fmod_studio_event_description_has_sustain_point
 * @desc > **FMOD Function:** [Studio::EventDescription::hasSustainPoint](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_hassustainpoint)
 * This function retrieves whether the event has any sustain points.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_has_sustain_point(event_description_ref) {}


/**
 * @func fmod_studio_event_description_get_min_max_distance
 * @desc > **FMOD Function:** [Studio::EventDescription::getMinMaxDistance](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getminmaxdistance)
 * This function retrieves the minimum and maximum distances for 3D attenuation.
 * @param {real} event_description_ref
 * @returns {struct.FmodMinMaxDistance}
 */
function fmod_studio_event_description_get_min_max_distance(event_description_ref) {}


/**
 * @func fmod_studio_event_description_get_sound_size
 * @desc > **FMOD Function:** [Studio::EventDescription::getSoundSize](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getsoundsize)
 * This function retrieves the sound size for 3D panning.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_get_sound_size(event_description_ref) {}


/**
 * @func fmod_studio_event_description_get_parameter_description_by_name
 * @desc > **FMOD Function:** [Studio::EventDescription::getParameterDescriptionByName](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getparameterdescriptionbyname)
 * This function retrieves an event parameter description by name.
 * @param {real} event_descriptor_ref
 * @param {string} name
 * @returns {struct.FmodStudioParameterDescription}
 */
function fmod_studio_event_description_get_parameter_description_by_name(event_description_ref, name) {}


/**
 * @func fmod_studio_event_description_get_parameter_description_by_id
 * @desc > **FMOD Function:** [Studio::EventDescription::getParameterDescriptionByID](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getparameterdescriptionbyid)
 * This function retrieves an event parameter description by id.
 * @param {real} event_descriptor_ref
 * @param {struct.FmodStudioParameterId} parameter_id
 * @returns {struct.FmodStudioParameterDescription}
 */
function fmod_studio_event_description_get_parameter_description_by_id(event_description_ref, parameter_id) {}


/**
 * @func fmod_studio_event_description_get_parameter_description_by_index
 * @desc > **FMOD Function:** [Studio::EventDescription::getParameterDescriptionByIndex](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getparameterdescriptionbyindex)
 * This function retrieves an event parameter description by index.
 * @param {real} event_descriptor_ref
 * @param {real} parameter_index
 * @returns {struct.FmodStudioParameterDescription}
 */
function fmod_studio_event_description_get_parameter_description_by_index(event_description_ref, index) {}


/**
 * @func fmod_studio_event_description_get_parameter_description_count
 * @desc > **FMOD Function:** [Studio::EventDescription::getParameterDescriptionCount](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getparameterdescriptioncount)
 * This function retrieves the number of parameters in the event.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_get_parameter_description_count(event_description_ref) {}


/**
 * @func fmod_studio_event_description_get_parameter_label_by_name
 * @desc > **FMOD Function:** [Studio::EventDescription::getParameterLabelByName](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getparameterlabelbyname)
 * This function retrieves an event parameter label by name or path.
 * @param {real} event_description_ref
 * @param {string} name
 * @param {real} label_index
 * @returns {string}
 */
function fmod_studio_event_description_get_parameter_label_by_name(event_description_ref, name, label_index) {}


/**
 * @func fmod_studio_event_description_get_parameter_label_by_id
 * @desc > **FMOD Function:** [Studio::EventDescription::getParameterLabelByID](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getparameterlabelbyid)
 * This function retrieves an event parameter label by ID.
 * @param {real} event_descriptor_ref
 * @param {struct.FmodStudioParameterId} parameter_id
 * @param {real} label_index
 * @returns {string}
 */
function fmod_studio_event_description_get_parameter_label_by_id(event_description_ref, parameter_id, label_index) {}


/**
 * @func fmod_studio_event_description_get_parameter_label_by_index
 * @desc > **FMOD Function:** [Studio::EventDescription::getParameterLabelByIndex](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getparameterlabelbyindex)
 * This function retrieves an event parameter label by index.
 * @param {real} event_description_ref
 * @param {real} index
 * @param {real} label_index
 * @returns {string}
 */
function fmod_studio_event_description_get_parameter_label_by_index(event_description_ref, index, label_index) {}


/**
 * @func fmod_studio_event_description_get_user_property
 * @desc > **FMOD Function:** [Studio::EventDescription::getUserProperty](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getuserproperty)
 * This function retrieves a user property by name.
 * @param {real} event_description_ref
 * @param {string} name
 * @param {Id.Buffer} buff_return
 * @returns {real}
 */
function fmod_studio_event_description_get_user_property(event_description_ref, name, buff_return) {}


/**
 * @func fmod_studio_event_description_get_user_property_by_index
 * @desc > **FMOD Function:** [Studio::EventDescription::getUserPropertyByIndex](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getuserpropertybyindex)
 * This function retrieves a user property by index.
 * @param {real} event_description_ref
 * @param {real} index
 * @param {Id.Buffer} buff_return
 * @returns {real}
 */
function fmod_studio_event_description_get_user_property_by_index(event_description_ref, index, buff_return) {}


/**
 * @func fmod_studio_event_description_get_user_property_count
 * @desc > **FMOD Function:** [Studio::EventDescription::getUserPropertyCount](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getuserpropertycount)
 * This function retrieves the number of user properties attached to the event.
 * @param {real} event_description_ref
 * @param {string} name
 * @returns {real}
 */
function fmod_studio_event_description_get_user_property_count(event_description_ref, name) {}


/**
 * @func fmod_studio_event_description_get_id
 * @desc > **FMOD Function:** [Studio::EventDescription::getID](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getid)
 * This function retrieves the GUID.
 * @param {real} event_description_ref
 * @returns {string}
 */
function fmod_studio_event_description_get_id(event_description_ref) {}


/**
 * @func fmod_studio_event_description_get_length
 * @desc > **FMOD Function:** [Studio::EventDescription::getLength](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getlength)
 * This function retrieves the length of the timeline.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_get_length(event_description_ref) {}


/**
 * @func fmod_studio_event_description_get_path
 * @desc > **FMOD Function:** [Studio::EventDescription::getPath](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getpath)
 * This function retrieves the path.
 * @param {real} event_description_ref
 * @returns {string}
 */
function fmod_studio_event_description_get_path(event_description_ref) {}


/**
 * @func fmod_studio_event_description_set_callback
 * @desc > **FMOD Function:** [Studio::EventDescription::setCallback](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_setcallback)
 * This function sets the user callback.
 * @param {real} event_description_ref
 * @param {real} type
 * @returns {real}
 */
function fmod_studio_event_description_set_callback(event_description_ref, type) {}


/**
 * @func fmod_studio_event_description_set_user_data
 * @desc > **FMOD Function:** [Studio::EventDescription::setUserData](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_setuserdata)
 * This function sets the event user data.
 * @param {real} event_description_ref
 * @param {real} data
 * @returns {real}
 */
function fmod_studio_event_description_set_user_data(event_description_ref, data) {}


/**
 * @func fmod_studio_event_description_get_user_data
 * @desc > **FMOD Function:** [Studio::EventDescription::getUserData](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_getuserdata)
 * This function retrieves the event user data.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_get_user_data(event_description_ref) {}


/**
 * @func fmod_studio_event_description_is_valid
 * @desc > **FMOD Function:** [Studio::EventDescription::isValid](https://www.fmod.com/docs/2.02/api/studio-api-eventdescription.html#studio_eventdescription_isvalid)
 * This function checks that the EventDescription reference is valid.
 * @param {real} event_description_ref
 * @returns {real}
 */
function fmod_studio_event_description_is_valid(event_description_ref) {}


/**
 * @func fmod_studio_event_instance_start
 * @desc > **FMOD Function:** [Studio::EventInstance::start](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_start)
 * This function starts playback.
 * @param {real} event_instance_ref
 * @returns {real}
 */
function fmod_studio_event_instance_start(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_stop
 * @desc > **FMOD Function:** [Studio::EventInstance::stop](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_stop)
 * This function stops playback.
 * @param {real} event_instance_ref
 * @param {real} mode
 * @returns {real}
 */
function fmod_studio_event_instance_stop(event_instance_ref, mode) {}


/**
 * @func fmod_studio_event_instance_get_playback_state
 * @desc > **FMOD Function:** [Studio::EventInstance::getPlaybackState](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_getplaybackstate)
 * This function retrieves the playback state.
 * @param {real} event_instance_ref
 * @returns {real}
 */
function fmod_studio_event_instance_get_playback_state(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_set_paused
 * @desc > **FMOD Function:** [Studio::EventInstance::setPaused](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_setpaused)
 * This function sets the pause state.
 * @param {real} event_instance_ref
 * @param {real} pause
 * @returns {real}
 */
function fmod_studio_event_instance_set_paused(event_instance_ref, pause) {}


/**
 * @func fmod_studio_event_instance_get_paused
 * @desc > **FMOD Function:** [Studio::EventInstance::getPaused](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_getpaused)
 * This function retrieves the pause state.
 * @param {real} event_instance_ref
 * @returns {real}
 */
function fmod_studio_event_instance_get_paused(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_keyoff
 * @desc > **FMOD Function:** [Studio::EventInstance::keyOff](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_keyoff)
 * This function allows an event to continue past a sustain point.
 * @param {real} event_instance_ref
 * @returns {real}
 */
function fmod_studio_event_instance_keyoff(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_set_pitch
 * @desc > **FMOD Function:** [Studio::EventInstance::setPitch](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_setpitch)
 * This function sets the pitch multiplier.
 * @param {real} event_instance_ref
 * @param {real} pitch
 * @returns {real}
 */
function fmod_studio_event_instance_set_pitch(event_instance_ref, pitch) {}


/**
 * @func fmod_studio_event_instance_get_pitch
 * @desc > **FMOD Function:** [Studio::EventInstance::getPitch](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_getpitch)
 * This function retrieves the pitch multiplier.
 * @param {real} event_instance_ref
 * @returns {real}
 */
function fmod_studio_event_instance_get_pitch(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_set_property
 * @desc > **FMOD Function:** [Studio::EventInstance::setProperty](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_setproperty)
 * This function sets the value of a built-in property.
 * @param {real} event_instance_ref
 * @param {real} property
 * @param {real} value
 * @returns {real}
 */
function fmod_studio_event_instance_set_property(event_instance_ref, property, value) {}


/**
 * @func fmod_studio_event_instance_get_property
 * @desc > **FMOD Function:** [Studio::EventInstance::getProperty](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_getproperty)
 * This function retrieves the value of a built-in property.
 * @param {real} event_instance_ref
 * @param {real} property
 * @returns {real}
 */
function fmod_studio_event_instance_get_property(event_instance_ref, property) {}


/**
 * @func fmod_studio_event_instance_set_timeline_position
 * @desc > **FMOD Function:** [Studio::EventInstance::setTimelinePosition](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_settimelineposition)
 * This function sets the timeline cursor position.
 * @param {real} event_instance_ref
 * @param {real} position
 * @returns {real}
 */
function fmod_studio_event_instance_set_timeline_position(event_instance_ref, position) {}


/**
 * @func fmod_studio_event_instance_get_timeline_position
 * @desc > **FMOD Function:** [Studio::EventInstance::getTimelinePosition](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_gettimelineposition)
 * This function retrieves the timeline cursor position.
 * @param {real} event_instance_ref
 * @returns {real}
 */
function fmod_studio_event_instance_get_timeline_position(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_set_volume
 * @desc > **FMOD Function:** [Studio::EventInstance::setVolume](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_setvolume)
 * This function sets the volume level.
 * @param {real} event_instance_ref
 * @param {real} volume
 * @returns {real}
 */
function fmod_studio_event_instance_set_volume(event_instance_ref, volume) {}


/**
 * @func fmod_studio_event_instance_get_volume
 * @desc > **FMOD Function:** [Studio::EventInstance::getVolume](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_getvolume)
 * This function retrieves the volume level.
 * @param {real} event_instance_ref
 * @returns {struct.FmodStudioEventInstanceVolume}
 */
function fmod_studio_event_instance_get_volume(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_is_virtual
 * @desc > **FMOD Function:** [Studio::EventInstance::isVirtual](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_isvirtual)
 * This function retrieves the virtualization state.
 * @param {real} event_instance_ref
 * @returns {real}
 */
function fmod_studio_event_instance_is_virtual(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_set_3d_attributes
 * @desc > **FMOD Function:** [Studio::EventInstance::set3DAttributes](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_set3dattributes)
 * This function sets the 3D attributes.
 * @param {real} event_instance_ref
 * @param {struct.Fmod3DAttributes} attributes
 */
function fmod_studio_event_instance_set_3d_attributes(event_instance_ref, attributes) {}


/**
 * @func fmod_studio_event_instance_get_3d_attributes
 * @desc > **FMOD Function:** [Studio::EventInstance::get3DAttributes](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_get3dattributes)
 * This function retrieves the 3D attributes.
 * @param {real} event_instance_ref
 * @returns {struct.Fmod3DAttributes}
 */
function fmod_studio_event_instance_get_3d_attributes(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_set_listener_mask
 * @desc > **FMOD Function:** [Studio::EventInstance::setListenerMask](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_setlistenermask)
 * This function sets the listener mask.
 * @param {real} event_instance_ref
 * @param {real} mask
 * @returns {real}
 */
function fmod_studio_event_instance_set_listener_mask(event_instance_ref, mask) {}


/**
 * @func fmod_studio_event_instance_get_listener_mask
 * @desc > **FMOD Function:** [Studio::EventInstance::getListenerMask](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_getlistenermask)
 * This function retrieves the listener mask.
 * @param {real} event_instance_ref
 * @returns {real}
 */
function fmod_studio_event_instance_get_listener_mask(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_get_min_max_distance
 * @desc > **FMOD Function:** [Studio::EventInstance::getMinMaxDistance](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_getminmaxdistance)
 * This function retrieves the minimum and maximum distances for 3D attenuation.
 * @param {real} event_instance_ref
 * @returns {struct.FmodMinMaxDistance}
 */
function fmod_studio_event_instance_get_min_max_distance(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_set_parameter_by_name
 * @desc > **FMOD Function:** [Studio::EventInstance::setParameterByName](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_setparameterbyname)
 * This function sets a parameter value by name.
 * @param {real} event_instance_ref
 * @param {string} name
 * @param {real} value
 * @param {real} ignore_seek_speed
 * @returns {real}
 */
function fmod_studio_event_instance_set_parameter_by_name(event_instance_ref, name, value, ignore_seek_speed) {}


/**
 * @func fmod_studio_event_instance_set_parameter_by_name_with_label
 * @desc > **FMOD Function:** [Studio::EventInstance::setParameterByNameWithLabel](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_setparameterbynamewithlabel)
 * This function sets a parameter value by name, looking up the value label.
 * @param {real} event_instance_ref
 * @param {string} name
 * @param {string} label
 * @param {real} ignore_seek_speed
 * @returns {real}
 */
function fmod_studio_event_instance_set_parameter_by_name_with_label(event_instance_ref, name, label, ignore_seek_speed) {}


/**
 * @func fmod_studio_event_instance_get_parameter_by_name
 * @desc > **FMOD Function:** [Studio::EventInstance::getParameterByName](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_getparameterbyname)
 * This function retrieves a parameter value by name.
 * @param {real} event_instance_ref
 * @param {string} name
 * @returns {struct.FmodStudioParameter}
 */
function fmod_studio_event_instance_get_parameter_by_name(event_instance_ref, name) {}


/**
 * @func fmod_studio_event_instance_set_parameter_by_id
 * @desc > **FMOD Function:** [Studio::EventInstance::setParameterByID](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_setparameterbyid)
 * This function sets a parameter value by unique identifier.
 * @param {real} event_instance_ref
 * @param {struct.FmodStudioParameterId} parameter_id
 * @param {real} value
 * @param {bool} ignore_seek_speed
 */
function fmod_studio_event_instance_set_parameter_by_id(event_instance_ref, parameter_id, value, ignore_seek_speed) {}


/**
 * @func fmod_studio_event_instance_set_parameter_by_id_with_label
 * @desc > **FMOD Function:** [Studio::EventInstance::setParameterByIDWithLabel](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_setparameterbyidwithlabel)
 * This function sets a parameter value by unique identifier, looking up the value label.
 * @param {real} event_instance_ref
 * @param {struct.FmodStudioParameterId} parameter_id
 * @param {string} label
 * @param {bool} ignore_seek_speed
 */
function fmod_studio_event_instance_set_parameter_by_id_with_label(event_instance_ref, parameter_id, label, ignore_seek_speed) {}


/**
 * @func fmod_studio_event_instance_get_parameter_by_id
 * @desc > **FMOD Function:** [Studio::EventInstance::getParameterByID](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_getparameterbyid)
 * This function retrieves a parameter value by unique identifier.
 * @param {real} event_instance_ref
 * @param {struct.FmodStudioParameterId} parameter_id
 * @returns {struct.FmodStudioParameter}
 */
function fmod_studio_event_instance_get_parameter_by_id(event_instance_ref, parameter_id) {}


/**
 * @func fmod_studio_event_instance_get_channel_group
 * @desc > **FMOD Function:** [Studio::EventInstance::getChannelGroup](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_getchannelgroup)
 * This function retrieves the core ChannelGroup.
 * @param {real} event_instance_ref
 * @returns {real}
 */
function fmod_studio_event_instance_get_channel_group(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_set_reverb_level
 * @desc > **FMOD Function:** [Studio::EventInstance::setReverbLevel](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_setreverblevel)
 * This function sets the core reverb send level.
 * @param {real} event_instance_ref
 * @param {real} index
 * @param {real} level
 * @returns {real}
 */
function fmod_studio_event_instance_set_reverb_level(event_instance_ref, index, level) {}


/**
 * @func fmod_studio_event_instance_get_reverb_level
 * @desc > **FMOD Function:** [Studio::EventInstance::getReverbLevel](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_getreverblevel)
 * This function retrieves the core reverb send level.
 * @param {real} event_instance_ref
 * @param {real} index
 * @returns {real}
 */
function fmod_studio_event_instance_get_reverb_level(event_instance_ref, index) {}


/**
 * @func fmod_studio_event_instance_get_cpu_usage
 * @desc > **FMOD Function:** [Studio::EventInstance::getCPUUsage](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_getcpuusage)
 * This function retrieves the event CPU usage data.
 * @param {real} event_instance_ref
 * @returns {struct.FmodCPUUsage}
 */
function fmod_studio_event_instance_get_cpu_usage(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_get_memory_usage
 * @desc > **FMOD Function:** [Studio::EventInstance::getMemoryUsage](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_getmemoryusage)
 * This function retrieves memory usage statistics.
 * @param {real} event_instance_ref
 * @returns {struct.FmodStudioMemoryUsage}
 */
function fmod_studio_event_instance_get_memory_usage(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_set_callback
 * @desc > **FMOD Function:** [Studio::EventInstance::setCallback](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_setcallback)
 * This function sets the user callback.
 * @param {real} event_instance_ref
 * @param {real} type
 * @returns {real}
 */
function fmod_studio_event_instance_set_callback(event_instance_ref, type) {}


/**
 * @func fmod_studio_event_instance_set_user_data
 * @desc > **FMOD Function:** [Studio::EventInstance::setUserData](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_setuserdata)
 * This function sets the event instance user data.
 * @param {real} event_instance_ref
 * @param {real} data
 * @returns {real}
 */
function fmod_studio_event_instance_set_user_data(event_instance_ref, data) {}


/**
 * @func fmod_studio_event_instance_get_user_data
 * @desc > **FMOD Function:** [Studio::EventInstance::getUserData](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_getuserdata)
 * This function retrieves the event instance user data.
 * @param {real} event_instance_ref
 * @returns {real}
 */
function fmod_studio_event_instance_get_user_data(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_get_description
 * @desc > **FMOD Function:** [Studio::EventInstance::getDescription](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_getdescription)
 * This function retrieves the event description.
 * @param {real} event_instance_ref
 * @returns {real}
 */
function fmod_studio_event_instance_get_description(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_release
 * @desc > **FMOD Function:** [Studio::EventInstance::release](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_release)
 * This function marks the event instance for release.
 * @param {real} event_instance_ref
 * @returns {real}
 */
function fmod_studio_event_instance_release(event_instance_ref) {}


/**
 * @func fmod_studio_event_instance_is_valid
 * @desc > **FMOD Function:** [Studio::EventInstance::isValid](https://www.fmod.com/docs/2.02/api/studio-api-eventinstance.html#studio_eventinstance_isvalid)
 * This function checks that the EventInstance reference is valid.
 * @param {real} event_instance_ref
 * @returns {real}
 */
function fmod_studio_event_instance_is_valid(event_instance_ref) {}


/**
 * @func fmod_studio_system_create
 * @desc > **FMOD Function:** [Studio::System::create](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_create)
 * This is the FMOD Studio System creation function.
 * @returns {real}
 */
function fmod_studio_system_create() {}


/**
 * @func fmod_studio_system_init
 * @desc > **FMOD Function:** [Studio::System::initialize](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_initialize)
 * This function initializes the Studio System.
 * @param {real} max_channels
 * @param {real} studio_flags
 * @param {real} core_flags
 * @returns {real}
 */
function fmod_studio_system_init(max_channels, studio_flags, core_flags) {}


/**
 * @func fmod_studio_system_release
 * @desc > **FMOD Function:** [Studio::System::release](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_release)
 * This function shuts down and frees the Studio System object.
 * @returns {real}
 */
function fmod_studio_system_release() {}


/**
 * @func fmod_studio_system_update
 * @desc > **FMOD Function:** [Studio::System::update](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_update)
 * This function updates the FMOD Studio System.
 * @returns {real}
 */
function fmod_studio_system_update() {}


/**
 * @func fmod_studio_system_flush_commands
 * @desc > **FMOD Function:** [Studio::System::flushCommands](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_flushcommands)
 * This function blocks until all pending commands have been executed.
 * @returns {real}
 */
function fmod_studio_system_flush_commands() {}


/**
 * @func fmod_studio_system_flush_sample_loading
 * @desc > **FMOD Function:** [Studio::System::flushSampleLoading](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_flushsampleloading)
 * This function blocks until all sample loading and unloading has completed.
 * @returns {real}
 */
function fmod_studio_system_flush_sample_loading() {}


/**
 * @func fmod_studio_system_load_bank_custom
 * @desc > **FMOD Function:** [Studio::System::loadBankCustom](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_loadbankcustom)
 * This function loads the metadata of a Studio bank using custom read callbacks.
 * @param {real} flags
 * @returns {real}
 */
function fmod_studio_system_load_bank_custom(flags) {}


/**
 * @func fmod_studio_system_load_bank_file
 * @desc > **FMOD Function:** [Studio::System::loadBankFile](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_loadbankfile)
 * This function loads the metadata of a Studio bank from file.
 * @param {string} filename
 * @param {real} flags
 * @returns {real}
 */
function fmod_studio_system_load_bank_file(filename, flags) {}


/**
 * @func fmod_studio_system_load_bank_memory
 * @desc > **FMOD Function:** [Studio::System::loadBankMemory](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_loadbankmemory)
 * This function loads the metadata of a Studio bank from memory.
 * @param {real} buff_data
 * @param {real} length
 * @param {enum.FMOD_STUDIO_LOAD_MEMORY_MODE} mode
 * @param {enum.FMOD_STUDIO_LOAD_BANK} flags
 * @returns {real}
 */
function fmod_studio_system_load_bank_memory(buff_data, length, mode, flags) {}


/**
 * @func fmod_studio_system_unload_all
 * @desc > **FMOD Function:** [Studio::System::unloadAll](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_unloadall)
 * This function unloads all currently loaded banks.
 * @returns {real}
 */
function fmod_studio_system_unload_all() {}


/**
 * @func fmod_studio_system_get_bank
 * @desc > **FMOD Function:** [Studio::System::getBank](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getbank)
 * This function retrieves a loaded bank.
 * @param {string} path
 * @returns {real}
 */
function fmod_studio_system_get_bank(path) {}


/**
 * @func fmod_studio_system_get_bank_by_id
 * @desc > **FMOD Function:** [Studio::System::getBankByID](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getbankbyid)
 * This function retrieves a loaded bank.
 * @param {string} guid_str
 * @returns {real}
 */
function fmod_studio_system_get_bank_by_id(guid_str) {}


/**
 * @func fmod_studio_system_get_bank_count
 * @desc > **FMOD Function:** [Studio::System::getBankCount](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getbankcount)
 * This function retrieves the number of loaded banks.
 * @returns {real}
 */
function fmod_studio_system_get_bank_count() {}


/**
 * @func fmod_studio_system_get_bank_list
 * @desc > **FMOD Function:** [Studio::System::getBankList](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getbanklist)
 * This function retrieves the loaded Banks.
 * @returns {array<real>}
 */
function fmod_studio_system_get_bank_list() {}


/**
 * @func fmod_studio_system_set_listener_attributes
 * @desc > **FMOD Function:** [Studio::System::setListenerAttributes](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_setlistenerattributes)
 * This function sets the 3D attributes of the listener.
 * @param {real} listener_index
 * @param {struct.Fmod3DAttributes} attributes
 * @param {struct.FmodVector} attenuation
 */
function fmod_studio_system_set_listener_attributes(listener_index, attributes, attenuation) {}


/**
 * @func fmod_studio_system_get_listener_attributes
 * @desc > **FMOD Function:** [Studio::System::getListenerAttributes](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getlistenerattributes)
 * This function retrieves listener 3D attributes.
 * @param {real} listener_index
 * @returns {struct.FmodStudioListenerAttributes}
 */
function fmod_studio_system_get_listener_attributes(listener_index) {}


/**
 * @func fmod_studio_system_set_listener_weight
 * @desc > **FMOD Function:** [Studio::System::setListenerWeight](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_setlistenerweight)
 * This function sets the listener weighting.
 * @param {real} listener_index
 * @param {real} weight
 * @returns {real}
 */
function fmod_studio_system_set_listener_weight(listener_index, weight) {}


/**
 * @func fmod_studio_system_get_listener_weight
 * @desc > **FMOD Function:** [Studio::System::getListenerWeight](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getlistenerweight)
 * This function retrieves listener weighting.
 * @param {real} listener_index
 * @returns {real}
 */
function fmod_studio_system_get_listener_weight(listener_index) {}


/**
 * @func fmod_studio_system_set_num_listeners
 * @desc > **FMOD Function:** [Studio::System::setNumListeners](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_setnumlisteners)
 * This function sets the number of listeners in the 3D sound scene.
 * @param {real} num
 * @returns {real}
 */
function fmod_studio_system_set_num_listeners(num) {}


/**
 * @func fmod_studio_system_get_num_listeners
 * @desc > **FMOD Function:** [Studio::System::getNumListeners](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getnumlisteners)
 * This function retrieves the number of listeners.
 * @returns {real}
 */
function fmod_studio_system_get_num_listeners() {}


/**
 * @func fmod_studio_system_get_bus
 * @desc > **FMOD Function:** [Studio::System::getBus](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getbus)
 * This function retrieves a loaded bus.
 * @param {string} path
 * @returns {real}
 */
function fmod_studio_system_get_bus(path) {}


/**
 * @func fmod_studio_system_get_bus_by_id
 * @desc > **FMOD Function:** [Studio::System::getBusByID](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getbusbyid)
 * This function retrieves a loaded bus by its ID.
 * @param {string} guid
 * @returns {real}
 */
function fmod_studio_system_get_bus_by_id(guid) {}


/**
 * @func fmod_studio_system_get_event
 * @desc > **FMOD Function:** [Studio::System::getEvent](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getevent)
 * This function retrieves an EventDescription.
 * @param {string} path
 * @returns {real}
 */
function fmod_studio_system_get_event(path) {}


/**
 * @func fmod_studio_system_get_event_by_id
 * @desc > **FMOD Function:** [Studio::System::getEventByID](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_geteventbyid)
 * This function retrieves an EventDescription.
 * @param {string} guid_str
 * @returns {real}
 */
function fmod_studio_system_get_event_by_id(guid_str) {}


/**
 * @func fmod_studio_system_get_parameter_by_id
 * @desc > **FMOD Function:** [Studio::System::getParameterByID](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getparameterbyid)
 * This function retrieves a global parameter value by unique identifier.
 * @param {struct.FmodStudioParameterId} parameter_id
 */
function fmod_studio_system_get_parameter_by_id(parameter_id) {}


/**
 * @func fmod_studio_system_set_parameter_by_id
 * @desc > **FMOD Function:** [Studio::System::setParameterByID](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_setparameterbyid)
 * This function sets a global parameter value by unique identifier.
 * @param {struct.FmodStudioParameterId} parameter_id
 * @param {real} value
 * @param {bool} ignore_seek_speed
 */
function fmod_studio_system_set_parameter_by_id(parameter_id, value, ignore_seek_speed) {}


/**
 * @func fmod_studio_system_set_parameter_by_id_with_label
 * @desc > **FMOD Function:** [Studio::System::setParameterByIDWithLabel](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_setparameterbyidwithlabel)
 * This function sets a global parameter value by unique identifier, looking up the value label.
 * @param {struct.FmodStudioParameterId} parameter_id
 * @param {string} label
 * @param {bool} ignore_seek_speed
 */
function fmod_studio_system_set_parameter_by_id_with_label(parameter_id, label, ignore_seek_speed) {}


/**
 * @func fmod_studio_system_get_parameter_by_name
 * @desc > **FMOD Function:** [Studio::System::getParameterByName](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getparameterbyname)
 * This function retrieves a global parameter value by name.
 * @param {string} name
 * @returns {struct.FmodStudioParameter}
 */
function fmod_studio_system_get_parameter_by_name(name) {}


/**
 * @func fmod_studio_system_set_parameter_by_name
 * @desc > **FMOD Function:** [Studio::System::setParameterByName](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_setparameterbyname)
 * This function sets a global parameter value by name.
 * @param {string} name
 * @param {real} value
 * @param {real} ignore_seek_speed
 * @returns {real}
 */
function fmod_studio_system_set_parameter_by_name(name, value, ignore_seek_speed) {}


/**
 * @func fmod_studio_system_set_parameter_by_name_with_label
 * @desc > **FMOD Function:** [Studio::System::setParameterByNameWithLabel](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_setparameterbynamewithlabel)
 * This function sets a global parameter value by name, looking up the value label.
 * @param {string} name
 * @param {string} label
 * @param {real} ignore_seek_speed
 * @returns {real}
 */
function fmod_studio_system_set_parameter_by_name_with_label(name, label, ignore_seek_speed) {}


/**
 * @func fmod_studio_system_get_parameter_description_by_name
 * @desc > **FMOD Function:** [Studio::System::getParameterDescriptionByName](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getparameterdescriptionbyname)
 * This function retrieves a global parameter by name or path.
 * @param {string} name
 * @returns {struct.FmodStudioParameterDescription}
 */
function fmod_studio_system_get_parameter_description_by_name(name) {}


/**
 * @func fmod_studio_system_get_parameter_description_by_id
 * @desc > **FMOD Function:** [Studio::System::getParameterDescriptionByID](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getparameterdescriptionbyid)
 * This function retrieves a global parameter by ID.
 * @param {struct.FmodStudioParameterId} parameter_id
 * @returns {struct.FmodStudioParameterDescription}
 */
function fmod_studio_system_get_parameter_description_by_id(parameter_id) {}


/**
 * @func fmod_studio_system_get_parameter_description_count
 * @desc > **FMOD Function:** [Studio::System::getParameterDescriptionCount](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getparameterdescriptioncount)
 * This function retrieves the number of global parameters.
 * @returns {real}
 */
function fmod_studio_system_get_parameter_description_count() {}


/**
 * @func fmod_studio_system_get_parameter_description_list
 * @desc > **FMOD Function:** [Studio::System::getParameterDescriptionList](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getparameterdescriptionlist)
 * This function retrieves a list of global parameters.
 * @returns {array<struct.FmodStudioParameterDescription>}
 */
function fmod_studio_system_get_parameter_description_list() {}


/**
 * @func fmod_studio_system_get_parameter_label_by_name
 * @desc > **FMOD Function:** [Studio::System::getParameterLabelByName](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getparameterlabelbyname)
 * This function retrieves a global parameter label by name or path.
 * @param {string} name
 * @param {real} labelindex
 * @returns {string}
 */
function fmod_studio_system_get_parameter_label_by_name(name, labelindex) {}


/**
 * @func fmod_studio_system_get_parameter_label_by_id
 * @desc > **FMOD Function:** [Studio::System::getParameterLabelByID](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getparameterlabelbyid)
 * This function retrieves a global parameter label by ID.
 * @param {struct.FmodStudioParameterId} parameter_id
 * @param {real} label_index
 * @returns {string}
 */
function fmod_studio_system_get_parameter_label_by_id(parameter_id, label_index) {}


/**
 * @func fmod_studio_system_get_vca
 * @desc > **FMOD Function:** [Studio::System::getVCA](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getvca)
 * This function retrieves a loaded VCA.
 * @param {string} path
 * @returns {real}
 */
function fmod_studio_system_get_vca(path) {}


/**
 * @func fmod_studio_system_get_vca_by_id
 * @desc > **FMOD Function:** [Studio::System::getVCAByID](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getvcabyid)
 * This function retrieves a loaded VCA.
 * @param {string} guid_str
 * @returns {real}
 */
function fmod_studio_system_get_vca_by_id(guid_str) {}


/**
 * @func fmod_studio_system_set_advanced_settings
 * @desc > **FMOD Function:** [Studio::System::setAdvancedSettings](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_setadvancedsettings)
 * This function sets advanced settings.
 * @param {struct.FmodStudioAdvancedSettings} settings
 */
function fmod_studio_system_set_advanced_settings(settings) {}


/**
 * @func fmod_studio_system_get_advanced_settings
 * @desc > **FMOD Function:** [Studio::System::getAdvancedSettings](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getadvancedsettings)
 * This function retrieves advanced settings.
 * @returns {struct.FmodStudioAdvancedSettings}
 */
function fmod_studio_system_get_advanced_settings() {}


/**
 * @func fmod_studio_system_start_command_capture
 * @desc > **FMOD Function:** [Studio::System::startCommandCapture](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_startcommandcapture)
 * This function starts recording Studio commands to a file.
 * @param {string} filename
 * @param {real} flags
 * @returns {real}
 */
function fmod_studio_system_start_command_capture(filename, flags) {}


/**
 * @func fmod_studio_system_stop_command_capture
 * @desc > **FMOD Function:** [Studio::System::stopCommandCapture](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_stopcommandcapture)
 * This function stops recording Studio commands.
 * @returns {real}
 */
function fmod_studio_system_stop_command_capture() {}


/**
 * @func fmod_studio_system_load_command_replay
 * @desc > **FMOD Function:** [Studio::System::loadCommandReplay](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_loadcommandreplay)
 * This function loads a command replay.
 * @param {string} filename
 * @param {real} flags
 * @returns {real}
 */
function fmod_studio_system_load_command_replay(filename, flags) {}


/**
 * @func fmod_studio_system_get_buffer_usage
 * @desc > **FMOD Function:** [Studio::System::getBufferUsage](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getbufferusage)
 * This function retrieves buffer usage information.
 * @returns {struct.FmodStudioBufferUsage}
 */
function fmod_studio_system_get_buffer_usage() {}


/**
 * @func fmod_studio_system_reset_buffer_usage
 * @desc > **FMOD Function:** [Studio::System::resetBufferUsage](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_resetbufferusage)
 * This function resets memory buffer usage statistics.
 * @returns {real}
 */
function fmod_studio_system_reset_buffer_usage() {}


/**
 * @func fmod_studio_system_get_cpu_usage
 * @desc > **FMOD Function:** [Studio::System::getCPUUsage](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getcpuusage)
 * This function retrieves the amount of CPU used for different parts of the Studio engine.
 * @returns {struct.FmodStudioCPUUsage}
 */
function fmod_studio_system_get_cpu_usage() {}


/**
 * @func fmod_studio_system_get_memory_usage
 * @desc > **FMOD Function:** [Studio::System::getMemoryUsage](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getmemoryusage)
 * This function retrieves memory usage statistics.
 * @returns {struct.FmodStudioMemoryUsage}
 */
function fmod_studio_system_get_memory_usage() {}


/**
 * @func fmod_studio_system_set_callback
 * @desc > **FMOD Function:** [Studio::System::setCallback](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_setcallback)
 * This function sets a callback for the FMOD Studio System.
 * @param {real} type
 * @returns {real}
 */
function fmod_studio_system_set_callback(type) {}


/**
 * @func fmod_studio_system_set_user_data
 * @desc > **FMOD Function:** [Studio::System::setUserData](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_setuserdata)
 * This function sets the user data.
 * @param {real} data
 * @returns {real}
 */
function fmod_studio_system_set_user_data(data) {}


/**
 * @func fmod_studio_system_get_user_data
 * @desc > **FMOD Function:** [Studio::System::getUserData](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getuserdata)
 * This function retrieves the user data.
 * @returns {real}
 */
function fmod_studio_system_get_user_data() {}


/**
 * @func fmod_studio_system_get_sound_info
 * @desc > **FMOD Function:** [Studio::System::getSoundInfo](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getsoundinfo)
 * This function retrieves information for loading a sound from the audio table.
 * @param {string} key
 * @returns {struct.FmodStudioSoundInfo}
 */
function fmod_studio_system_get_sound_info(key) {}


/**
 * @func fmod_studio_system_get_core_system
 * @desc > **FMOD Function:** [Studio::System::getCoreSystem](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_getcoresystem)
 * This function retrieves the Core System.
 * @returns {real}
 */
function fmod_studio_system_get_core_system() {}


/**
 * @func fmod_studio_system_lookup_id
 * @desc > **FMOD Function:** [Studio::System::lookupID](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_lookupid)
 * This function retrieves the ID for a bank, event, snapshot, bus or VCA.
 * @param {string} path
 * @returns {string}
 */
function fmod_studio_system_lookup_id(path) {}


/**
 * @func fmod_studio_system_lookup_path
 * @desc > **FMOD Function:** [Studio::System::lookupPath](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_lookuppath)
 * This function retrieves the path for a bank, event, snapshot, bus or VCA.
 * @param {string} str_guid
 * @returns {string}
 */
function fmod_studio_system_lookup_path(str_guid) {}


/**
 * @func fmod_studio_system_is_valid
 * @desc > **FMOD Function:** [Studio::System::isValid](https://www.fmod.com/docs/2.02/api/studio-api-system.html#studio_system_isvalid)
 * This function checks that the System reference is valid and has been initialized.
 * @returns {real}
 */
function fmod_studio_system_is_valid() {}


/**
 * @func fmod_studio_vca_set_volume
 * @desc > **FMOD Function:** [Studio::VCA::setVolume](https://www.fmod.com/docs/2.02/api/studio-api-vca.html#studio_vca_setvolume)
 * This function sets the volume level.
 * @param {real} vca_ref
 * @param {real} volume
 * @returns {real}
 */
function fmod_studio_vca_set_volume(vca_ref, volume) {}


/**
 * @func fmod_studio_vca_get_volume
 * @desc > **FMOD Function:** [Studio::VCA::getVolume](https://www.fmod.com/docs/2.02/api/studio-api-vca.html#studio_vca_getvolume)
 * This function retrieves the volume level.
 * @param {real} vca_ref
 * @returns {real}
 */
function fmod_studio_vca_get_volume(vca_ref) {}


/**
 * @func fmod_studio_vca_get_id
 * @desc > **FMOD Function:** [Studio::VCA::getID](https://www.fmod.com/docs/2.02/api/studio-api-vca.html#studio_vca_getid)
 * This function retrieves the GUID.
 * @param {real} vca_ref
 * @returns {string}
 */
function fmod_studio_vca_get_id(vca_ref) {}


/**
 * @func fmod_studio_vca_get_path
 * @desc > **FMOD Function:** [Studio::VCA::getPath](https://www.fmod.com/docs/2.02/api/studio-api-vca.html#studio_vca_getpath)
 * This function retrieves the path.
 * @param {real} vca_ref
 * @returns {string}
 */
function fmod_studio_vca_get_path(vca_ref) {}


/**
 * @func fmod_studio_vca_is_valid
 * @desc > **FMOD Function:** [Studio::VCA::isValid](https://www.fmod.com/docs/2.02/api/studio-api-vca.html#studio_vca_isvalid)
 * This function checks that the VCA reference is valid.
 * @param {real} vca_ref
 * @returns {real}
 */
function fmod_studio_vca_is_valid(vca_ref) {}


/**
 * @func fmod_system_create
 * @desc > **FMOD Function:** [System_Create](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_create)
 * This function creates an instance of the FMOD system.
 * @returns {real}
 */
function fmod_system_create() {}


/**
 * @func fmod_system_select
 * @desc GM-specific function - TODO
 * 
 * @param {real} system_ref
 * @returns {real}
 */
function fmod_system_select(system_ref) {}


/**
 * @func fmod_system_count
 * @desc GM-specific function - TODO
 * 
 * @returns {real}
 */
function fmod_system_count() {}


/**
 * @func fmod_system_init
 * @desc > **FMOD Function:** [System::init](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_init)
 * This function initializes the system object and prepares FMOD for playback.
 * @param {real} max_channels
 * @param {real} flags
 * @returns {real}
 */
function fmod_system_init(max_channels, flags) {}


/**
 * @func fmod_system_release
 * @desc > **FMOD Function:** [System::release](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_release)
 * This function closes and frees this object and its resources.
 * @param {real} system_ref
 * @returns {real}
 */
function fmod_system_release(system_ref) {}


/**
 * @func fmod_system_close
 * @desc > **FMOD Function:** [System::close](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_close)
 * This function close the connections to the output and returns to an uninitialized state without releasing the object.
 * @param {real} system_ref
 * @returns {real}
 */
function fmod_system_close(system_ref) {}


/**
 * @func fmod_system_update
 * @desc > **FMOD Function:** [System::update](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_update)
 * This function updates the FMOD system.
 * @returns {real}
 */
function fmod_system_update() {}


/**
 * @func fmod_system_mixer_suspend
 * @desc > **FMOD Function:** [System::mixerSuspend](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_mixersuspend)
 * This function suspends the mixer thread and relinquishes usage of audio hardware while maintaining internal state.
 * @returns {real}
 */
function fmod_system_mixer_suspend() {}


/**
 * @func fmod_system_mixer_resume
 * @desc > **FMOD Function:** [System::mixerResume](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_mixerresume)
 * This function resumes the mixer thread and reacquires access to audio hardware.
 * @returns {real}
 */
function fmod_system_mixer_resume() {}


/**
 * @func fmod_system_set_output
 * @desc > **FMOD Function:** [System::setOutput](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_setoutput)
 * This function sets the type of output interface used to run the mixer.
 * @param {real} output
 * @returns {real}
 */
function fmod_system_set_output(output) {}


/**
 * @func fmod_system_get_output
 * @desc > **FMOD Function:** [System::getOutput](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getoutput)
 * This function retrieves the type of output interface used to run the mixer.
 * @returns {real}
 */
function fmod_system_get_output() {}


/**
 * @func fmod_system_get_num_drivers
 * @desc > **FMOD Function:** [System::getNumDrivers](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getnumdrivers)
 * This function retrieves the number of output drivers available for the selected output type.
 * @returns {real}
 */
function fmod_system_get_num_drivers() {}


/**
 * @func fmod_system_get_driver_info
 * @desc > **FMOD Function:** [System::getDriverInfo](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getdriverinfo)
 * This function retrieves identification information about a sound device specified by its index, and specific to the selected output mode.
 * @param {real} driver_index
 * @returns {struct.FmodSystemDriverInfo}
 */
function fmod_system_get_driver_info(driver_index) {}


/**
 * @func fmod_system_set_driver
 * @desc > **FMOD Function:** [System::setDriver](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_setdriver)
 * This function sets the output driver for the selected output type.
 * @param {real} driver
 * @returns {real}
 */
function fmod_system_set_driver(driver) {}


/**
 * @func fmod_system_get_driver
 * @desc > **FMOD Function:** [System::getDriver](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getdriver)
 * This function retrieves the output driver for the selected output type.
 * @returns {real}
 */
function fmod_system_get_driver() {}


/**
 * @func fmod_system_set_software_channels
 * @desc > **FMOD Function:** [System::setSoftwareChannels](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_setsoftwarechannels)
 * This function sets the maximum number of software mixed Channels possible.
 * @param {real} software_channels
 * @returns {real}
 */
function fmod_system_set_software_channels(software_channels) {}


/**
 * @func fmod_system_get_software_channels
 * @desc > **FMOD Function:** [System::getSoftwareChannels](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getsoftwarechannels)
 * This function retrieves the maximum number of software mixed Channels possible.
 * @returns {real}
 */
function fmod_system_get_software_channels() {}


/**
 * @func fmod_system_set_software_format
 * @desc > **FMOD Function:** [System::setSoftwareFormat](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_setsoftwareformat)
 * This function sets the output format for the software mixer.
 * @param {real} sample_rate
 * @param {real} speaker_mode
 * @param {real} num_raw_speakers
 * @returns {real}
 */
function fmod_system_set_software_format(sample_rate, speaker_mode, num_raw_speakers) {}


/**
 * @func fmod_system_get_software_format
 * @desc > **FMOD Function:** [System::getSoftwareFormat](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getsoftwareformat)
 * This function retrieves the output format for the software mixer.
 * @returns {struct.FmodSystemSoftwareFormat}
 */
function fmod_system_get_software_format() {}


/**
 * @func fmod_system_set_dsp_buffer_size
 * @desc > **FMOD Function:** [System::setDSPBufferSize](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_setdspbuffersize)
 * This function sets the buffer size for the FMOD software mixing engine.
 * @param {real} buff_size
 * @param {real} num_buffers
 * @returns {real}
 */
function fmod_system_set_dsp_buffer_size(buff_size, num_buffers) {}


/**
 * @func fmod_system_get_dsp_buffer_size
 * @desc > **FMOD Function:** [System::getDSPBufferSize](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getdspbuffersize)
 * This function retrieves the buffer size settings for the FMOD software mixing engine.
 * @returns {struct.FmodSystemDSPBufferSize}
 */
function fmod_system_get_dsp_buffer_size() {}


/**
 * @func fmod_system_set_stream_buffer_size
 * @desc > **FMOD Function:** [System::setStreamBufferSize](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_setstreambuffersize)
 * This function sets the default file buffer size for newly opened streams.
 * @param {real} file_buffer_size
 * @param {real} file_buffer_size_type
 * @returns {real}
 */
function fmod_system_set_stream_buffer_size(file_buffer_size, file_buffer_size_type) {}


/**
 * @func fmod_system_get_stream_buffer_size
 * @desc > **FMOD Function:** [System::getStreamBufferSize](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getstreambuffersize)
 * This function retrieves the default file buffer size for newly opened streams.
 * @returns {struct.FmodSystemStreamBufferSize}
 */
function fmod_system_get_stream_buffer_size() {}


/**
 * @func fmod_system_set_advanced_settings
 * @desc > **FMOD Function:** [System::setAdvancedSettings](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_setadvancedsettings)
 * This function sets advanced settings for the system object, typically to allow adjusting of settings related to resource usage or audio quality.
 * @param {struct.FmodSystemAdvancedSettings} settings
 */
function fmod_system_set_advanced_settings(settings) {}


/**
 * @func fmod_system_get_advanced_settings
 * @desc > **FMOD Function:** [System::getAdvancedSettings](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getadvancedsettings)
 * This function retrieves the advanced settings for the system object.
 * @returns {struct.FmodSystemAdvancedSettings}
 */
function fmod_system_get_advanced_settings() {}


/**
 * @func fmod_system_set_speaker_position
 * @desc > **FMOD Function:** [System::setSpeakerPosition](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_setspeakerposition)
 * This function sets the position of the specified speaker for the current speaker mode.
 * @param {real} speaker
 * @param {real} x
 * @param {real} y
 * @param {real} active
 * @returns {real}
 */
function fmod_system_set_speaker_position(speaker, x, y, active) {}


/**
 * @func fmod_system_get_speaker_position
 * @desc > **FMOD Function:** [System::getSpeakerPosition](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getspeakerposition)
 * This function retrieves the position of the specified speaker for the current speaker mode.
 * @param {enum.FMOD_SPEAKER} speaker
 * @returns {struct.FmodSystemSpeakerPosition}
 */
function fmod_system_get_speaker_position(speaker) {}


/**
 * @func fmod_system_set_3d_settings
 * @desc > **FMOD Function:** [System::set3DSettings](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_set3dsettings)
 * This function sets the global doppler scale, distance factor and log roll-off scale for all 3D sound in FMOD.
 * @param {real} doppler_scale
 * @param {real} distance_factor
 * @param {real} rolloff_scale
 * @returns {real}
 */
function fmod_system_set_3d_settings(doppler_scale, distance_factor, rolloff_scale) {}


/**
 * @func fmod_system_get_3d_settings
 * @desc > **FMOD Function:** [System::get3DSettings](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_get3dsettings)
 * This function retrieves the global doppler scale, distance factor and roll-off scale for all 3D sounds.
 * @returns {struct.FmodSystem3DSettings}
 */
function fmod_system_get_3d_settings() {}


/**
 * @func fmod_system_set_3d_num_listeners
 * @desc > **FMOD Function:** [System::set3DNumListeners](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_set3dnumlisteners)
 * This function sets the number of 3D 'listeners' in the 3D sound scene.
 * @param {real} num
 * @returns {real}
 */
function fmod_system_set_3d_num_listeners(num) {}


/**
 * @func fmod_system_get_3d_num_listeners
 * @desc > **FMOD Function:** [System::get3DNumListeners](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_get3dnumlisteners)
 * This function retrieves the number of 3D listeners.
 * @returns {real}
 */
function fmod_system_get_3d_num_listeners() {}


/**
 * @func fmod_system_set_3d_rolloff_callback
 * @desc > **FMOD Function:** [System::set3DRolloffCallback](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_set3drolloffcallback)
 * This function sets a callback to allow custom calculation of distance attenuation.
 * @returns {real}
 */
function fmod_system_set_3d_rolloff_callback() {}


/**
 * @func fmod_system_set_network_proxy
 * @desc > **FMOD Function:** [System::setNetworkProxy](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_setnetworkproxy)
 * This function set a proxy server to use for all subsequent internet connections.
 * @param {string} proxy
 * @returns {real}
 */
function fmod_system_set_network_proxy(proxy) {}


/**
 * @func fmod_system_get_network_proxy
 * @desc > **FMOD Function:** [System::getNetworkProxy](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getnetworkproxy)
 * This function retrieves the URL of the proxy server used in internet streaming.
 * @returns {string}
 */
function fmod_system_get_network_proxy() {}


/**
 * @func fmod_system_set_network_timeout
 * @desc > **FMOD Function:** [System::setNetworkTimeout](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_setnetworktimeout)
 * This function sets the timeout for network streams.
 * @param {real} timeout
 * @returns {real}
 */
function fmod_system_set_network_timeout(timeout) {}


/**
 * @func fmod_system_get_network_timeout
 * @desc > **FMOD Function:** [System::getNetworkTimeout](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getnetworktimeout)
 * This function retrieves the timeout value for network streams.
 * @returns {real}
 */
function fmod_system_get_network_timeout() {}


/**
 * @func fmod_system_get_version
 * @desc > **FMOD Function:** [System::getVersion](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getversion)
 * This function retrieves the FMOD version number.
 * @returns {real}
 */
function fmod_system_get_version() {}


/**
 * @func fmod_system_get_channels_playing
 * @desc > **FMOD Function:** [System::getChannelsPlaying](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getchannelsplaying)
 * This function retrieves the number of currently playing Channels.
 * @returns {struct.FmodSystemChannelsPlaying}
 */
function fmod_system_get_channels_playing() {}


/**
 * @func fmod_system_get_cpu_usage
 * @desc > **FMOD Function:** [System::getCPUUsage](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getcpuusage)
 * This function retrieves the amount of CPU used for different parts of the Core engine.
 * @returns {struct.FmodCPUUsage}
 */
function fmod_system_get_cpu_usage() {}


/**
 * @func fmod_system_get_file_usage
 * @desc > **FMOD Function:** [System::getFileUsage](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getfileusage)
 * This function retrieves information about file reads.
 * @returns {struct.FmodSystemFileUsage}
 */
function fmod_system_get_file_usage() {}


/**
 * @func fmod_system_get_default_mix_matrix
 * @desc > **FMOD Function:** [System::getDefaultMixMatrix](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getdefaultmixmatrix)
 * This function retrieves the default matrix used to convert from one speaker mode to another.
 * @param {real} source_speaker_mode
 * @param {real} target_speaker_mode
 * @param {real} matrix_hop
 * @returns {real}
 */
function fmod_system_get_default_mix_matrix(source_speaker_mode, target_speaker_mode, matrix_hop) {}


/**
 * @func fmod_system_get_speaker_mode_channels
 * @desc > **FMOD Function:** [System::getSpeakerModeChannels](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getspeakermodechannels)
 * This function retrieves the channel count for a given speaker mode.
 * @param {real} mode
 * @returns {real}
 */
function fmod_system_get_speaker_mode_channels(mode) {}


/**
 * @func fmod_system_create_sound
 * @desc > **FMOD Function:** [System::createSound](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_createsound)
 * This function loads a sound into memory, opens it for streaming or sets it up for callback based sounds.
 * @param {string|Id.Buffer} name_or_buff
 * @param {enum.FMOD_MODE} mode
 * @param {struct.FmodSystemCreateSoundExInfo} extra
 */
function fmod_system_create_sound(name_or_data, mode, buff_extra) {}


/**
 * @func fmod_system_create_stream
 * @desc > **FMOD Function:** [System::createStream](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_createstream)
 * This function opens a sound for streaming.
 * @param {string|Id.Buffer} name_or_buff
 * @param {enum.FMOD_MODE} mode
 * @param {struct.FmodSystemCreateSoundExInfo} extra
 */
function fmod_system_create_stream(name_or_data, mode, buff_extra) {}


/**
 * @func fmod_system_create_dsp
 * @desc > **FMOD Function:** [System::createDSP](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_createdsp)
 * This function creates a DSP object given a plugin description structure.
 * @returns {real}
 */
function fmod_system_create_dsp() {}


/**
 * @func fmod_system_create_dsp_by_type
 * @desc > **FMOD Function:** [System::createDSPByType](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_createdspbytype)
 * This function creates a DSP object given a built-in type index.
 * @param {real} type
 * @returns {real}
 */
function fmod_system_create_dsp_by_type(type) {}


/**
 * @func fmod_system_create_channel_group
 * @desc > **FMOD Function:** [System::createChannelGroup](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_createchannelgroup)
 * This function creates a ChannelGroup object.
 * @param {string} name
 * @returns {real}
 */
function fmod_system_create_channel_group(name) {}


/**
 * @func fmod_system_create_sound_group
 * @desc > **FMOD Function:** [System::createSoundGroup](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_createsoundgroup)
 * This function creates a SoundGroup object.
 * @param {string} name
 * @returns {real}
 */
function fmod_system_create_sound_group(name) {}


/**
 * @func fmod_system_create_reverb_3d
 * @desc > **FMOD Function:** [System::createReverb3D](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_createreverb3d)
 * This function creates a 'virtual reverb' object. This object reacts to 3D location and morphs the reverb environment based on how close it is to the reverb object's center.
 * @returns {real}
 */
function fmod_system_create_reverb_3d() {}


/**
 * @func fmod_system_play_sound
 * @desc > **FMOD Function:** [System::playSound](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_playsound)
 * This function plays a Sound on a Channel.
 * @param {real} sound_ref
 * @param {real} channel_group_ref
 * @param {real} pause
 * @returns {real}
 */
function fmod_system_play_sound(sound_ref, channel_group_ref, pause) {}


/**
 * @func fmod_system_play_dsp
 * @desc > **FMOD Function:** [System::playDSP](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_playdsp)
 * This function plays a DSP along with any of its inputs on a Channel.
 * @param {real} dsp_ref
 * @param {real} channel_group_ref
 * @param {real} pause
 * @returns {real}
 */
function fmod_system_play_dsp(dsp_ref, channel_group_ref, pause) {}


/**
 * @func fmod_system_get_channel
 * @desc > **FMOD Function:** [System::getChannel](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getchannel)
 * This function retrieves a handle to a Channel by ID.
 * @param {real} index
 * @returns {real}
 */
function fmod_system_get_channel(index) {}


/**
 * @func fmod_system_get_master_channel_group
 * @desc > **FMOD Function:** [System::getMasterChannelGroup](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getmasterchannelgroup)
 * This function retrieves the master ChannelGroup that all sounds ultimately route to.
 * @returns {real}
 */
function fmod_system_get_master_channel_group() {}


/**
 * @func fmod_system_get_master_sound_group
 * @desc > **FMOD Function:** [System::getMasterSoundGroup](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getmastersoundgroup)
 * This function retrieves the default SoundGroup, where all sounds are placed when they are created.
 * @returns {real}
 */
function fmod_system_get_master_sound_group() {}


/**
 * @func fmod_system_set_3d_listener_attributes
 * @desc > **FMOD Function:** [System::set3DListenerAttributes](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_set3dlistenerattributes)
 * This function sets the position, velocity and orientation of the specified 3D sound listener.
 * @param {real} listener_index
 * @param {struct.FmodVector} position
 * @param {struct.FmodVector} velocity
 * @param {struct.FmodVector} forward
 * @param {struct.FmodVector} up
 */
function fmod_system_set_3d_listener_attributes(listener_index, position, velocity, forward, up) {}


/**
 * @func fmod_system_get_3d_listener_attributes
 * @desc > **FMOD Function:** [System::get3DListenerAttributes](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_get3dlistenerattributes)
 * This function retrieves the position, velocity and orientation of the specified 3D sound listener.
 * @param {real} listener_index
 * @returns {struct.Fmod3DAttributes}
 */
function fmod_system_get_3d_listener_attributes(listener_index) {}


/**
 * @func fmod_system_set_reverb_properties
 * @desc > **FMOD Function:** [System::setReverbProperties](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_setreverbproperties)
 * This function sets parameters for the global reverb environment.
 * @param {real} reverb_instance_index
 * @param {struct.FmodReverbProperties} properties
 */
function fmod_system_set_reverb_properties(instance_index, properties) {}


/**
 * @func fmod_system_get_reverb_properties
 * @desc > **FMOD Function:** [System::getReverbProperties](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getreverbproperties)
 * This function retrieves the current reverb environment for the specified reverb instance.
 * @param {real} reverb_instance_index
 * @returns {struct.FmodReverbProperties}
 */
function fmod_system_get_reverb_properties(instance_index) {}


/**
 * @func fmod_system_attach_channel_group_to_port
 * @desc > **FMOD Function:** [System::attachChannelGroupToPort](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_attachchannelgrouptoport)
 * This function connects the output of the specified ChannelGroup to an audio port on the output driver.
 * @param {real} port_type
 * @param {real} port_index
 * @param {real} channel_group_ref
 * @param {bool} pass_thru
 */
function fmod_system_attach_channel_group_to_port(port_type, port_index, channel_group_ref, pass_thru) {}


/**
 * @func fmod_system_detach_channel_group_from_port
 * @desc > **FMOD Function:** [System::detachChannelGroupFromPort](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_detachchannelgroupfromport)
 * This function disconnects the output of the specified ChannelGroup from an audio port on the output driver.
 * @param {real} channel_group_ref
 * @returns {real}
 */
function fmod_system_detach_channel_group_from_port(channel_group_ref) {}


/**
 * @func fmod_system_get_record_num_drivers
 * @desc > **FMOD Function:** [System::getRecordNumDrivers](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getrecordnumdrivers)
 * This function retrieves the number of recording devices available for this output mode. Use this to enumerate all recording devices possible so that the user can select one.
 * @returns {struct.FmodSystemRecordNumDrivers}
 */
function fmod_system_get_record_num_drivers() {}


/**
 * @func fmod_system_get_record_driver_info
 * @desc > **FMOD Function:** [System::getRecordDriverInfo](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getrecorddriverinfo)
 * This function retrieves identification information about an audio device specified by its index, and specific to the output mode.
 * @param {real} record_driver_index
 * @returns {struct.FmodSystemRecordDriverInfo}
 */
function fmod_system_get_record_driver_info(recording_device_index) {}


/**
 * @func fmod_system_get_record_position
 * @desc > **FMOD Function:** [System::getRecordPosition](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getrecordposition)
 * This function retrieves the current recording position of the record buffer in PCM samples.
 * @param {real} device_index
 * @returns {real}
 */
function fmod_system_get_record_position(device_index) {}


/**
 * @func fmod_system_record_start
 * @desc > **FMOD Function:** [System::recordStart](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_recordstart)
 * This function starts the recording engine recording to a pre-created Sound object.
 * @param {real} device_index
 * @param {real} sound_ref
 * @param {real} loop
 * @returns {real}
 */
function fmod_system_record_start(device_index, sound_ref, loop) {}


/**
 * @func fmod_system_record_stop
 * @desc > **FMOD Function:** [System::recordStop](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_recordstop)
 * This function stops the recording engine from recording to a pre-created Sound object.
 * @param {real} device_index
 * @returns {real}
 */
function fmod_system_record_stop(device_index) {}


/**
 * @func fmod_system_is_recording
 * @desc > **FMOD Function:** [System::isRecording](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_isrecording)
 * This function retrieves the state of the FMOD recording API, i.e. if it is currently recording or not.
 * @param {real} device_index
 * @returns {real}
 */
function fmod_system_is_recording(device_index) {}


/**
 * @func fmod_system_create_geometry
 * @desc > **FMOD Function:** [System::createGeometry](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_creategeometry)
 * This is a geometry creation function. This function will create a base geometry object which can then have polygons added to it.
 * @param {real} max_polygons
 * @param {real} max_vertices
 * @returns {real}
 */
function fmod_system_create_geometry(max_polygons, max_vertices) {}


/**
 * @func fmod_system_set_geometry_settings
 * @desc > **FMOD Function:** [System::setGeometrySettings](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_setgeometrysettings)
 * This function sets the maximum world size for the geometry engine for performance / precision reasons.
 * @param {real} max_world_size
 * @returns {real}
 */
function fmod_system_set_geometry_settings(max_world_size) {}


/**
 * @func fmod_system_get_geometry_settings
 * @desc > **FMOD Function:** [System::getGeometrySettings](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getgeometrysettings)
 * This function retrieves the maximum world size for the geometry engine.
 * @returns {real}
 */
function fmod_system_get_geometry_settings() {}


/**
 * @func fmod_system_load_geometry
 * @desc > **FMOD Function:** [System::loadGeometry](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_loadgeometry)
 * This function creates a geometry object from a block of memory which contains pre-saved geometry data.
 * @param {Id.Buffer} buff
 * @param {real} length
 * @returns {real}
 */
function fmod_system_load_geometry(buff, length) {}


/**
 * @func fmod_system_get_geometry_occlusion
 * @desc > **FMOD Function:** [System::getGeometryOcclusion](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getgeometryocclusion)
 * This function calculates geometry occlusion between a listener and a sound source.
 * @returns {struct.FmodSystemGeometryOcclusion}
 */
function fmod_system_get_geometry_occlusion() {}


/**
 * @func fmod_system_lock_dsp
 * @desc > **FMOD Function:** [System::lockDSP](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_lockdsp)
 * This is a mutual exclusion function to lock the FMOD DSP engine (which runs asynchronously in another thread), so that it will not execute.
 * @returns {real}
 */
function fmod_system_lock_dsp() {}


/**
 * @func fmod_system_unlock_dsp
 * @desc > **FMOD Function:** [System::unlockDSP](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_unlockdsp)
 * This is a mutual exclusion function to unlock the FMOD DSP engine (which runs asynchronously in another thread) and let it continue executing.
 * @returns {real}
 */
function fmod_system_unlock_dsp() {}


/**
 * @func fmod_system_set_callback
 * @desc > **FMOD Function:** [System::setCallback](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_setcallback)
 * This function sets the callback for System level notifications.
 * @param {real} type
 * @returns {real}
 */
function fmod_system_set_callback(type) {}


/**
 * @func fmod_system_set_user_data
 * @desc > **FMOD Function:** [System::setUserData](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_setuserdata)
 * This function sets a user value associated with a System object.
 * @param {real} channel_control_ref
 * @param {real} data
 * @returns {real}
 */
function fmod_system_set_user_data(channel_control_ref, data) {}


/**
 * @func fmod_system_get_user_data
 * @desc > **FMOD Function:** [System::getUserData](https://www.fmod.com/docs/2.02/api/core-api-system.html#system_getuserdata)
 * This function retrieves a user value associated with a System object.
 * @param {real} channel_control_ref
 * @returns {real}
 */
function fmod_system_get_user_data(channel_control_ref) {}


/**
 * @func fmod_fetch_callbacks
 * @desc This function fetches the FMOD callbacks.
 * 
 * @param {Id.Buffer} buffer
 * @param {real} length
 * @returns {real}
 */
function fmod_fetch_callbacks(buffer, length) {}


/**
 * @func fmod_last_result
 * @desc This function returns the result of the last call to any of FMOD's functions.
 * 
 * @returns {real}
 */
function fmod_last_result() {}


/**
 * @module home
 * @title Home
 * 
 * @module_end
 */
