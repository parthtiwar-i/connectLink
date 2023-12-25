const moment = require("moment-timezone");
const additionalTimezonesTestData = require("./testArr");

function availabilityTraker(teamMembersAvailability) {
  let availableTimeCount = new Map();

  for (memeber of teamMembersAvailability) {
    try {
      const commmonStart = moment.tz(memeber.start, memeber.timezone).tz("UTC");
      const commmonEnd = moment.tz(memeber.end, memeber.timezone).tz("UTC");

      for (
        let current = commmonStart;
        current.isBefore(commmonEnd);
        current.add(15, "minutes")
      ) {
        const key = current.toISOString();
        availableTimeCount.set(key, (availableTimeCount.get(key) || 0) + 1);
      }
    } catch {
      console.error("Error processing member's availability:", member, error);
    }
  }

  let freeSlot;
  let maxMember = 0;
  for ([availabliTime, memberAvailable] of availableTimeCount) {
    if (memberAvailable > maxMember) {
      maxMember = memberAvailable;
      freeSlot = availabliTime;
    }
  }

  return [freeSlot , maxMember];
}

const testData = additionalTimezonesTestData;

const [mostCommonTime , members] = availabilityTraker(testData);
console.log(
  `Most of the team members are available at -> ${mostCommonTime} UTC  \n and the members available are ${members}`
);
