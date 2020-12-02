const fluid = require('fluid-music')
const kit = require('@fluid-music/kit')
const g3rd = require('@fluid-music/g3rd')
const dLibrary = new Array(10).fill(0).map((_, i) => { return { trimDb: -18 + i*2 } })

const subBassSynth = fluid.plugins.podolskiVst2Presets.sineSlowDecay()

const session = new fluid.FluidSession({ bpm: 66, dLibrary }, [
  { name: 'guitars', tLibrary: g3rd.guitars.tLibrary, children: [
    { name: 'guitar' },
    { name: 'guitarX' },
    { name: 'guitarI' },
  ]},
  { name: 'gStrs', tLibrary: g3rd.guitars.tLibraryStretched, children: [
    { name: 'gStr' },
    { name: 'gStrI' },
    { name: 'gStrX' },
  ]},
  { name: 'drums', tLibrary: kit.tLibrary, children: [
    { name: 'kick' },
    { name: 'snare', gainDb: -4.75 },
    { name: 'tamb', gainDb: -7.5 },
    { name: 'rides', tLibrary: g3rd.rides.tLibrary ,children: [
      { name: 'ride' },
      { name: 'rideX' },
    ]},
  ]},
  { name: 'sub', tLibrary: fluid.tLibrary.midiScale(21), plugins: [subBassSynth] },
])

module.exports = session
