const fluid = require('fluid-music')
const session = require('./session-content')
const cybr = fluid.cybr

// IMPORTANT : this script assumes that the cybr-template already ran
async function run() {
  const client = new fluid.Client()
  await client.connect()
  await client.send([
    cybr.content.clear(),
    fluid.sessionToContentFluidMessage(session),
    fluid.cybr.transport.loop(0, 4),
    fluid.cybr.transport.play(),
    cybr.global.save(),
  ])
  console.warn('Saved tracktionedit/out.tracktionedit')
}

run()
  .then(() => console.warn('send content'))
  .catch(e => console.error('Failed', e))

  