export const getDateFromDayOfYear = (day: number) => {
  // Array of month names
  const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  // Array of days in each month (non-leap year)
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let monthIndex = 0;
  let dayOfMonth = day;

  // Find the month index and remaining day of month
  for (let i = 0; i < daysInMonth.length; i++) {
    if (dayOfMonth <= daysInMonth[i]) {
      monthIndex = i;
      break;
    } else {
      dayOfMonth -= daysInMonth[i];
    }
  }

  // Format the date
  const formattedDate = dayOfMonth + ' ' + months[monthIndex];
  return formattedDate;
};
