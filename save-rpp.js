const session = require('./session-content')

const filename = 'out.RPP'
session.saveAsReaperFile(filename)
  .then(() => console.warn('Saved:', filename))
  .catch(e => console.error('Save failed', filename, e))
