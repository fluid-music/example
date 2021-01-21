const session = require('./session-template')

session.loopEnabled = true
session.loopRegion.startTime = 1
session.loopRegion.duration = 2

session.insertScore({
  r:     '1234',
  gStrs: ' >- ',
  reverb:' >--',
})

session.insertScore({
  r:      '1 2 3 4..',
  guitar: 'a---b----', // guitar
  guitarX:'      c--',
  gStrs:  '<        ', // stretched guitars
  gStrX:  'f--------',
  gStrI:  'f',
  kick:   'D        ', // drums
  snare:  '       kk',
  tamb:   't t t t  ',
  ride:   'C-A-B-D--',
  rideX:  '    C-   ',
  sub:    'E        ',
  reverb: '<---',
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
  ride:   'C----------',
  rideX:  'A-----.....',
  sub:    'E          ',
})

session.insertScore({
  r:      '1 2 3 4..',
  guitar: 'h-----   ', // guitars
  guitarX:'   g-----',
  guitarI:'',
  gStrs:  '',          // stretched guitar
  gStrI:  'd g------',
  gStrX:  'a-b-c-def',
  kick:   'D        ', // drums
  snare:  '         ',
  tamb:   't t t t  ',
  ride:   'C-A-B-D--',
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
  ride:   'C----------',
  rideX:  '',
  rideI:  'b-',
})


session.finalize()

module.exports = session
