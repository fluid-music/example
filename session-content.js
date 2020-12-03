const session = require('./session-template')

session.insertScore({
  r:     '1234',
  gStrs: ' >- ',
  reverb:' >--',
})
session.insertScore({
  r:      '1 2 3 4..',
  guitar: 'a---b----', // guitar
  guitarX:'      c--',
  gStrs:  '        ', // stretched guitars
  gStrX:  'f--------',
  gStrI:  'f',
  kick:   'D        ', // drums
  snare:  '       kk',
  tamb:   't t t t  ',
  ride:   'a-b-c-d--',
  rideX:  '    a-   ',
  sub:    'E        ',
  reverb: '',
})

session.insertScore({
  r:      '1+2+3+4....',
  guitar: 'g-------   ', // guitar
  guitarX:'  c--------',
  gStrs:  '           ', // stretched guitars
  gStrX:  '',
  gStrI:  '',
  kick:   'D     D   d', // drums
  snare:  '  r    k   ',
  tamb:   ' t t t  tt ',
  ride:   'a----------',
  rideX:  'b-----.....',
  sub:    'E          ',
})

session.insertScore({
  r:      '1 2 3 4..',
  guitar: 'i-----   ', // guitars
  guitarX:'   g-----',
  guitarI:'',
  gStrs:  '',          // stretched guitar
  gStrI:  'd g------',
  gStrX:  '',
  kick:   'D        ', // drums
  snare:  '         ',
  tamb:   't t t t  ',
  ride:   'a-b-c-d--',
  rideX:  '    a-',
  sub:    'E        ',
})

session.insertScore({
  r:      '1+2+3+4....',
  guitar: 'g-------   ', // guitar
  guitarX:'',
  gStrs:  '           ', // stretched guitars
  gStrX:  '',
  gStrI:  '',
  kick:   'd', // drums
  snare:  '',
  tamb:   '',
  ride:   'a----------',
  rideI:  'a',
  rideX:  '',
})


session.finalize()

module.exports = session
