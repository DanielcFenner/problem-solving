function cockroachSpeed(s) {
    cmPerHour = s * 100000
    cmPerMin = cmPerHour / 60
    cmPerSecond = cmPerMin / 60
    return Math.floor(cmPerSecond)
  }