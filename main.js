createCalendar = function(container, year, month) {
    container.innerHTML = `
    <table id="calendar">
      <thead>
      <th>пн</th>
      <th>вт</th>
      <th>ср</th>
      <th>чт</th>
      <th>пт</th>
      <th>сб</th>
      <th>нд</th>
    </thead>
    <tbody></tbody>
    </table>
    `;
    const calendarContent = document.querySelector('#calendar>tbody');
    const firstDayOfMonth = new Date(`${year}-${month}-01`).getDay();
    const daysInCurrentMonth = new Date(year, month, 0).getDate();
    let i = 1;
    while (i <= daysInCurrentMonth) {
        const week = document.createElement('tr');
        for (let j = 1; j <= 7; j++) {
            const day = document.createElement('td');
            if ((i === 1 && j < firstDayOfMonth) || (i > daysInCurrentMonth)) {
                day.textContent = '';
            } else {
                day.textContent = `${i}`;
                i++;
            }
            week.append(day);
        }
        calendarContent.append(week);
    }
};
let cal = document.querySelector('#calendar');
createCalendar(cal, 2012, 9);
