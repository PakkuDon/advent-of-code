const checkSum = (records) => {
  const events = parseRecords(records)

  const minutesAsleepByGuard = {}
  events.forEach((event, index) => {
    if (!minutesAsleepByGuard[event.guardId]) {
      minutesAsleepByGuard[event.guardId] = []
    }

    const previousEvent = events[index - 1]
    if (previousEvent && !previousEvent.awake) {
      for (let i = previousEvent.minute; i < event.minute; i++) {
        minutesAsleepByGuard[event.guardId].push(i)
      }
    }
  })

  const tallySleepByGuardByMinutes = {}
  for (let guardId in minutesAsleepByGuard) {
    tallySleepByGuardByMinutes[guardId] = {}
    minutesAsleepByGuard[guardId].forEach((minute) => {
      if (!tallySleepByGuardByMinutes[guardId][minute]) {
        tallySleepByGuardByMinutes[guardId][minute] = 0
      }
      tallySleepByGuardByMinutes[guardId][minute]++
    })
  }

  let mostTimesAsleepOnSameMinute = 0
  let minuteWithRecord
  let guardWithRecord
  for (let guardId in tallySleepByGuardByMinutes) {
    for (let minute in tallySleepByGuardByMinutes[guardId]) {
      const amountOfTimesAsleep = tallySleepByGuardByMinutes[guardId][minute]
      if (amountOfTimesAsleep > mostTimesAsleepOnSameMinute) {
        mostTimesAsleepOnSameMinute = amountOfTimesAsleep
        minuteWithRecord = minute
        guardWithRecord = guardId
      }
    }
  }

  return minuteWithRecord * guardWithRecord
}

const parseRecords = (records) => {
  records.sort()

  let events = records.sort().map((record, index, array) => {
    let guardId
    let awake
    const [_, day, hour, minute] = record.match(
      /\[\d{4}-\d{2}-(\d{2}) (\d{2}):(\d{2})/
    )

    if (record.includes("begins shift")) {
      guardId = record.match(/#(\d+)/)[1]
      awake = true
    }
    if (record.includes("falls asleep")) {
      awake = false
    } else if (record.includes("wakes up")) {
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
