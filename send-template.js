// send the session template only to cybr
const path = require('path')
const fluid = require('fluid-music')
const session = require('./session-content')

const tracktionFilename = path.join(__dirname, 'tracktionedit', 'out.tracktionedit')
const client = new fluid.Client()

client.send([
  fluid.cybr.global.activate(tracktionFilename, true),
  fluid.sessionToTemplateFluidMessage(session),
])
