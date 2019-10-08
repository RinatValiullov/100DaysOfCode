let getDayName = dateString => {
  let dayName;
  let getDayNumber = new Date(dateString).getDay();
  switch (getDayNumber) {
    case 0:
      dayName = 'Sunday';
      break;
    case 1:
      dayName = 'Monday';
      break;
    case 2:
      dayName = 'Tuesday';
      break;
    case 3:
      dayName = 'Wednesday';
      break;
    case 4:
      dayName = 'Thursday';
      break;
    case 5:
      dayName = 'Friday';
      break;
    case 6:
      dayName = 'Saturday';
      break;
  }
  return dayName;
};

let result1 = getDayName('10/11/2009');
let result2 = getDayName('11/10/2010');

console.log(result1, result2);
