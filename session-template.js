const fluid = require('fluid-music')
const kit = require('@fluid-music/kit')
const g3rd = require('@fluid-music/g3rd')
const rides = require('@fluid-music/rides')

const dLibrary = new Array(10).fill(0).map((_, i) => { return { trimDb: -18 + i*2 } })
const stereo = require('./stereo')

const subBassSynth = fluid.plugins.podolskiVst2Presets.sineSlowDecay()
const reverb = new fluid.plugins.DragonflyRoomVst2({
  dryLevelPercent: 0,
  lateLevelPercent: 85,
  earlySendPercent: 55,
  earlyLevelPercent: 7,
  sizeMeters: 25,
  predelayMs: 16,
  diffusePercent: 98,
  spinHz: 3,
  wanderPercent: 12,
  highCutHz: 16000,
  earlyDampHz: 6000,
  lateDampHz: 5000,
  lowCutHz: 50,
  lowBoostHz: 500,
  lowBoostPercent: 30,
})

const session = new fluid.FluidSession({ bpm: 66, dLibrary, tLibrary: stereo.tLibrary }, [
  { name: 'guitars', children: [
    { name: 'guitar', tLibrary: g3rd.guitar },
    { name: 'guitarX', tLibrary: g3rd.reverse },
    { name: 'guitarI', tLibrary: g3rd.reverseLeadIn },
  ]},
  { name: 'gStrs', sends: [{ to: 'reverb', gainDb: 0 }], children: [
    { name: 'gStr', tLibrary: g3rd.stretch },
    { name: 'gStrX', tLibrary: g3rd.stretchReverse },
    { name: 'gStrI', tLibrary: g3rd.stretchReverseLeadIn },
  ]},
  { name: 'drums', sends: [{ to: 'reverb', gainDb: -9 }], tLibrary: kit.tLibrary, children: [
    { name: 'kick' },
    { name: 'snare', gainDb: -4.75 },
    { name: 'tamb', gainDb: -8 },
    { name: 'rides', gainDb: -2, children: [
      { name: 'ride', gainDb: -3, tLibrary: rides.rides },
      { name: 'rideX', tLibrary: rides.ridesReverse },
      { name: 'rideI', tLibrary: rides.ridesReverseLeadIn },
    ]},
  ]},
  { name: 'sub', tLibrary: fluid.tLibrary.midiScale(21), plugins: [subBassSynth] },
  { name: 'reverb', gainDb: 0, plugins: [reverb] }
])

module.exports = session
