const fluid = require('fluid-music')
const kit = require('@fluid-music/kit')
const g3rd = require('@fluid-music/g3rd')
const dLibrary = new Array(10).fill(0).map((_, i) => { return { trimDb: -18 + i*2 } })
const stereo = require('./stereo')

const subBassSynth = fluid.plugins.podolskiVst2Presets.sineSlowDecay()
const reverb = new fluid.plugins.DragonflyRoomVst2({
  dryLevelPercent: 0,
  lateLevelPercent: 80,
  earlySendPercent: 33,
  earlyLevelPercent: 12,
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
  { name: 'guitars', tLibrary: g3rd.guitars.tLibrary, children: [
    { name: 'guitar' },
    { name: 'guitarX' },
    { name: 'guitarI' },
  ]},
  { name: 'gStrs', sends: [{ to: 'reverb', gainDb: 0 }], tLibrary: g3rd.guitars.tLibraryStretched, children: [
    { name: 'gStr' },
    { name: 'gStrI' },
    { name: 'gStrX' },
  ]},
  { name: 'drums', sends: [{ to: 'reverb', gainDb: 0 }], tLibrary: kit.tLibrary, children: [
    { name: 'kick' },
    { name: 'snare', gainDb: -4.75 },
    { name: 'tamb', gainDb: -7.5 },
    { name: 'rides', gainDb: -2, tLibrary: g3rd.rides.tLibrary ,children: [
      { name: 'ride' },
      { name: 'rideX' },
      { name: 'rideI' },
    ]},
  ]},
  { name: 'sub', tLibrary: fluid.tLibrary.midiScale(21), plugins: [subBassSynth] },
  { name: 'reverb', gainDb: -16, plugins: [reverb] }
])

module.exports = session
