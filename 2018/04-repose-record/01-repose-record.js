const checkSum = (records) => {
  const events = parseRecords(records)

  const minutesAsleepByGuardByDay = {}
  events.forEach((event, index) => {
    if (!minutesAsleepByGuardByDay[event.guardId]) {
      minutesAsleepByGuardByDay[event.guardId] = {}
    }

    if (!minutesAsleepByGuardByDay[event.guardId][event.day]) {
      minutesAsleepByGuardByDay[event.guardId][event.day] = []
    }

    const currentDay = minutesAsleepByGuardByDay[event.guardId][event.day]
    const previousEvent = events[index - 1]
    if (previousEvent && !previousEvent.awake) {
      for (let i = previousEvent.minute; i < event.minute; i++) {
        currentDay.push(i)
      }
    }
  })

  const minutesAsleepByGuard = {}
  for (let guardId in minutesAsleepByGuardByDay) {
    minutesAsleepByGuard[guardId] = 0
    for (let day in minutesAsleepByGuardByDay[guardId]) {
      minutesAsleepByGuard[guardId] += minutesAsleepByGuardByDay[guardId][day].length
    }
  }

  const mostMinutesSlept = Math.max(...Object.values(minutesAsleepByGuard))
  const guardWithMostSleep = Object.keys(minutesAsleepByGuard)
    .find(guardId => minutesAsleepByGuard[guardId] === mostMinutesSlept)

  const tallySleepByMinutes = {}
  for (let day in minutesAsleepByGuardByDay[guardWithMostSleep]) {
    minutesAsleepByGuardByDay[guardWithMostSleep][day].forEach(minute => {
      if (!tallySleepByMinutes[minute]) {
        tallySleepByMinutes[minute] = 0
      }
      tallySleepByMinutes[minute]++
    })
  }

  const mostTimesAsleep = Math.max(...Object.values(tallySleepByMinutes))
  const minuteMostSlept = Object.keys(tallySleepByMinutes)
    .find(minute => tallySleepByMinutes[minute] === mostTimesAsleep)

  return guardWithMostSleep * minuteMostSlept
}

const parseRecords = (records) => {
  records.sort()

  let events = records.sort().map((record, index, array) => {
    let guardId
    let awake
    const [ _, day, hour, minute ] = record.match(/\[\d{4}-\d{2}-(\d{2}) (\d{2}):(\d{2})/)

    if (record.includes('begins shift')) {
      guardId = record.match(/#(\d+)/)[1]
      awake = true
    }
    if (record.includes('falls asleep')) {
      awake = false
    }
    else if (record.includes('wakes up')) {
      awake = true
    }

    return {
      guardId: parseInt(guardId),
      hour: parseInt(hour),
      minute: parseInt(minute),
      day: parseInt(day),
      awake,
    }
  })

  events.forEach((event, index) => {
    if (!event.guardId) {
      event.guardId = events[index - 1].guardId
    }
  })

  return events
}

module.exports = {
  checkSum,
}
