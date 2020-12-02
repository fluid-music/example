const fluid = require('fluid-music')
const kit = require('@fluid-music/kit')
const g3rd = require('@fluid-music/g3rd')
const dLibrary = new Array(10).fill(0).map((_, i) => { return { trimDb: -18 + i*2 } })

const session = new fluid.FluidSession({ bpm: 66, dLibrary }, [
  { name: 'guitars', tLibrary: g3rd.guitars.tLibrary, children: [
    { name: 'guitar' },
    { name: 'guitarX' },
    { name: 'guitarR' },
  ]},
  { name: 'gStrs', tLibrary: g3rd.guitars.tLibraryStretched, children: [
    { name: 'gStr' },
    { name: 'gStrR' },
    { name: 'gStrX' },
  ]},
  { name: 'drums', tLibrary: kit.tLibrary, children: [
    { name: 'kick' },
    { name: 'snare' },
    { name: 'tamb', gainDb: -7.5 },
    { name: 'rides', tLibrary: g3rd.rides.tLibrary ,children: [
      { name: 'ride' },
      { name: 'rideX' },
    ]},
  ]},
  { name: 'sub', tLibrary: fluid.tLibrary.midiScale(21), plugins: [fluid.plugins.podolskiVst2Presets.sineSlowDecay()] },
  { name: 'g3', tLibrary: g3rd.tLibrary, children: [
    { name: 'g3g' },
    { name: 'g3r' },
    { name: 'g3s' },
    { name: 'g3x'}
  ]},
])

session.editCursorTime = 2
session.insertScore({
  r:      '1 2 3 4..',
  kick:   'D        ',
  snare:  '       kk',
  tamb:   't t t t  ',
  ride:   'a-b-c-d--',
  rideX:  '    a-',
  guitar: 'a---b----',
  guitarX:'      c--',
  sub:    'E        ',
})

session.insertScore({
  r:    '1+2+3+4....',
  sub:  'E          ',
  kick: 'D     D   d',
  snare:'  r    k   ',
  tamb: ' t t t  tt ',
  ride: 'a----------',
  rideX:'b-----.....',
  gStrR:'g----------',
})

session.insertScore({
  r:      '1 2 3 4..',
  kick:   'D        ',
  snare:  '       kk',
  tamb:   't t t t  ',
  ride:   'a-b-c-d--',
  rideX:  '    a-',
  guitar: 'i--------',
  guitarX:'      c--',
  sub:    'E        ',
})

session.insertScore({
  r:   '1e+a234h',
  g3s: ['f', '', 'd'],
  g3x: ['f------', 'd-------'],
}, { startTime: 2 })

session.finalize()

async function run() {
  await session.saveAsReaperFile('out.RPP')
  console.warn('Saved: out.RPP')
}

run()
  .then(() => console.warn('Done'))
  .catch(e => console.error('Failed'))


