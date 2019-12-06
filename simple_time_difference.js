function msToMins(duration) {
  let mins = Math.floor(duration / (1000 * 60) % 60);
  return (mins < 10) ? `0${mins}` : mins;
}

function msToHours(duration) {
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  return (hours < 10) ? `0${hours}` : hours;
}

function solve(times) {
  formattedTimes = [];
  times.forEach(function(time) {
      let x = time.split("");
      formattedTimes.push(new Date(2019, 06, 10, parseInt(x.slice(0,2).join("")), parseInt(x.slice(3,5).join(""))));
  })
  formattedTimes.sort();
  formattedTimes.push(new Date(formattedTimes[0].getTime() + 86400000));
  formattedTimes.unshift(new Date(formattedTimes[formattedTimes.length - 2].getTime() - 86400000));
  let timeDiff = formattedTimes[1] - formattedTimes[0];
  for (i = 1; i < formattedTimes.length - 1; i++) {
    let newTimeDiff = formattedTimes[i + 1] - formattedTimes[i];
    if (newTimeDiff > timeDiff) {
      timeDiff = newTimeDiff;
    }
  }
  timeDiff -= 60 * 1000;
  return `${msToHours(timeDiff)}:${msToMins(timeDiff)}`;
}

var assert = require('assert');
assert.equal(solve(["14:51"]), "23:59")
assert.equal(solve(["23:00","04:22","18:05","06:24"]),"11:40")
assert.equal(solve(["21:14", "15:34", "14:51", "06:25", "15:30"]),"09:10")
