
with(obj_fmod_convolution_reverb)
{
	mix = max(mix - .1, 0);
	fmod_dsp_connection_set_mix(dsp_reverb_connection,mix)
	
	var _error = fmod_last_result();
	if (_error != FMOD_RESULT.OK) {
		show_debug_message(fmod_error_string(_error))
	}
}
