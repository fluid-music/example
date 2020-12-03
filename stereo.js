const fluid = require('fluid-music')

/**
 * @typedef {import('fluid-music').UseContext} UseContext
 * @typedef {import('fluid-music').FluidTrack} FluidTrack
 * @typedef {Object} AutomationPoint
 * @property {number} startTime
 * @property {number} value
 * @property {number} curve
 */

/**
 * Get the active automation point at a particular time. If there are no
 * automation points before a particular time, create and return a point with
 * the track's width. Note that if an automation point is created in this way,
 * if you change its values, they will not be reflected in the track.
 *
 * @param {FluidTrack} track
 * @param {number} time Time measured in whole notes
 * @returns {AutomationPoint}
 */
function getWidthAtTime(track, time) {
  // Charles: In the code below, we check `if point.startTime === 0`, but this
  // shouldn't be relied on.
  let candidate = {
    value: track.width,
    curve: 0,
    startTime: 0
  }
  if (track.automation.width) {
    for (const point of track.automation.width.points) {
      if (point.startTime >= candidate.startTime && point.startTime <= time) {
        candidate = point
      }
    }
  }
  return candidate
}

/**
 * 
 */
class WidthRamp {
  /**
   * @param {number} target bipolar stereo width: 1=normal 0=mono -1=reversed
   * @param {number} curve 
   */
  constructor (target, curve = 0) {
    if (typeof target !== 'number') {
      throw new Error('WidthRamp constructor expected an number')
    }

    this.target = target
    this.curve = curve
  }

  /**
   * @param {UseContext} context 
   */
  use(context) {
    const point = getWidthAtTime(context.track, context.startTime)

    if (point.startTime === 0 || point.startTime !== context.startTime) {
      const params = { paramKey: 'width', curve: this.curve , value: point.value }
      const point1 = new fluid.techniques.TrackAutomation(params)
      point1.use(context)
    }

    context.startTime = context.startTime + context.duration
    context.startTimeSeconds = context.startTimeSeconds + context.durationSeconds
    const params = { paramKey: 'width', curve: 0, value: this.target }
    const point2 = new fluid.techniques.TrackAutomation(params)
    point2.use(context)
  }
}

const tLibrary = {
  '<': new WidthRamp(1),   // ramp to stereo
  '>': new WidthRamp(0),   // ramp to mono
  '=': new WidthRamp(0.5), // ramp to 'half' stereo
  'I': new WidthRamp(-1),  // ramp to swap left<->right
}

module.exports = {
  tLibrary,
  WidthRamp,
}
