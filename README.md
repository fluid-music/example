# Fluid Music Example

This short fluid-music composition demonstrates how to watch a score file, and live-update playback on the fluid music server. 

For live update, first `npm install`, and then `npm run watch`. If the `cybr` server is running, playback should begin. When you make a change to [`session-content.js`](https://github.com/fluid-music/example/blob/main/session-content.js) and save the file, you should hear the updated version playing.

The live reload functionality is still is a little unstable. I wouldn't recommend using live reload in a 'production' project yet.

If you just want to open the file in Reaper without playback or reloading the server, you can simply run `node save-rpp.js` (make sure to `npm install` first).
