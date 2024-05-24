# GMEXT-FMOD but with HTML5 support

GameMaker's FMOD extension but with some degree of HTML5 support, by reimplementing the C++ FMOD-GM interface in JavaScript. (which is probably the worst possible way to do it)

See also: [the original README](https://github.com/YoYoGames/GMEXT-FMOD?tab=readme-ov-file).

# Usage
Drop the modified extension into your project, and set the `HTML5 SDK` option to the path to your FMOD HTML5 SDK (the same way as all the other platform SDKs). If you use `fmod_studio_system_load_bank_file`, set the `Preload Files` option as well (see [Caveats](#caveats)). You will also need a web server that can serve .wasm files correctly (GM's built-in webserver does).

For developing: Unlike the other platforms, the JS parts have no build step. Simply open up `source/fmod_gml/extensions/FMOD/YYFMOD.js` in a text/code editor (I use Visual Studio Code) and modify it. Type definitions for the FMOD API are included, based on [tadashibashi/fmod-studio-typescript-types](https://github.com/tadashibashi/fmod-studio-typescript-types) (but modified to add more recent FMOD features and allow full compatibilty with JSDoc by defining the constants in the FMOD interface).
YYFMOD.js also has a sort of "semi-live-reload" built-in, see near the start of the file.

# Caveats
- This is ***very*** incomplete. Currently, only basic FMOD Studio features are supported (in terms of the demo project, everything in the Studio Menu except for Recording), and parts are probably inaccurate as well. Unimplemented functions will do nothing and log a warning into the console.
- FMOD Core is not supported at all (the FMOD Studio toggle option will be completely ignored).
- Due to JavaScript limitations (no synchronous fetching), bank files have to be pre-fetched for them to be able to be loaded synchronously with `fmod_studio_system_load_bank_file`. You can do this by setting the `Preload Files` option (though it'll only work for files from Included Files, not the game save folder). For the demo project this should be set to `Master.bank|Master.strings.bank|Music.bank|sfx.bank|vehicles.bank|Dialogue_EN.bank|Dialogue_CN.bank|Dialogue_JP.bank`. This should hopefully be workaroundable in the future once I implement the asynchronous bank loading methods.
- I pretty much made this just for porting [one game](https://store.steampowered.com/app/2231450/Pizza_Tower/), because I was bored (and all existing fanports of PT to other platforms either use GMS audio or just don't have audio at all).
- .sh files are untested because I use Windows.