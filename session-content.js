const session = require('./session-template')

session.editCursorTime = 1
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

session.editCursorTime = 1
session.insertScore({
  r:      '1e+a234',//12+a234
  gStr: [],
  gStrX: ['fgabc--', 'd----f-'],
  gStrI: ['f', '', 'd'],
})

session.finalize()

module.exports = session
