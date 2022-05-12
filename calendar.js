
const date = new Date();
const today = new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const calendar = document.getElementById("calendar");    // select <div class="calendar"></div>

const renderCalendar = () => {
    

    /*===== CURRENT MONTH & YEAR =====*/

    const month = months[date.getMonth()];
    const year = date.getFullYear().toString();

    document.querySelector('.month-year').innerHTML = `${year} ${month}`; // <div class="month-year">July 2021</div>



    /*===== FILLING IN CALDENDAR =====*/



    /*----- PREVIOUS MONTH FILL IN -----*/

    date.setDate(1); // set date to 1st date of the month
    const prevDays = new Date(date.getFullYear(), date.getMonth(), 0).getDate();  // last date of previous month
    const prevMon = new Date(date.getFullYear(), date.getMonth(), 0);  // previous month
    const firstDayIndex = date.getDay();    // 1st day of the current month

    for (h = firstDayIndex; h > 0; h--) {
        //create divs for each day
        const day = document.createElement("div"); // <div></div>
        const monthDate = document.createElement("div"); // <div></div>
        const events = document.createElement("div"); // <div></div>

        //add class name to each divs
        day.className = `prev-day ${prevDays - h + 1}`;
        monthDate.className = "prev-date";
        events.className = "events";

        //if saturday
        prevMon.setDate(prevDays - h + 1)
        if (prevMon.getDay() == 6) {
            day.className = `prev-day ${prevDays - h + 1} sat`;
        };

        //if today
        if (today.getDate() == prevDays - h + 1 && today.getDay() == prevMon.getDay() && today.getFullYear() == prevMon.getFullYear()) {
            day.setAttribute('id', 'today');
        };

        //append date to .date
        const text = document.createTextNode(`${prevDays - h + 1}`);
        monthDate.appendChild(text); // <div class="date">1</div>

        //append divs to index.html
        day.appendChild(monthDate); // add <div class="date">1</div> to .day
        day.appendChild(events);    // add <div class="events"></div> to .day
        calendar.appendChild(day);   // add <div class="day 1"></div> to .caldendar 

    };



    /*----- CURRENT MONTH FILL IN -----*/

    const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // num of days in current month

    for (i = 1; i <= days; i++) {
        //create divs for each day
        const day = document.createElement("div"); // <div></div>
        const monthDate = document.createElement("div"); // <div></div>
        const events = document.createElement("div"); // <div></div>

        //add class name to each div
        day.className = `day ${i}`;
        monthDate.className = "date";
        events.className = "events";

        //if saturday
        date.setDate(i)
        if (date.getDay() == 6) {
            day.className = `day ${i} sat`;
        };

        //if today
        if (today.getDate() == i && today.getDay() == date.getDay() && today.getFullYear() == date.getFullYear()) {
            day.setAttribute('id', 'today');
        };

        //append date to .date
        const text = document.createTextNode(`${i}`);
        monthDate.appendChild(text); // <div class="date">1</div>

        //append divs to index.html
        day.appendChild(monthDate); // add <div class="date">1</div> to .day
        day.appendChild(events);    // add <div class="events"></div> to .day
        calendar.appendChild(day);   // add <div class="day 1"></div> to .caldendar 
        
    };


    /*----- NEXT MONTH FILL IN -----*/

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay(); // last day of the current month
    const nextDays = 6 - lastDayIndex;    // leftover days on the calendar
    const nextMon = new Date(date.getFullYear(), date.getMonth() + 1, 1);  // previous month

    for (j = 1; j <= nextDays; j++) {
        //create divs for each day
        const day = document.createElement("div"); // <div></div>
        const monthDate = document.createElement("div"); // <div></div>
        const events = document.createElement("div"); // <div></div>

        // add class name to each div
        monthDate.className = "next-date";
        events.className = "events";
        day.className = `next-day ${j}`;

        // if saturday
        nextMon.setDate(j)
        if (nextMon.getDay() == 6) {
            day.className = `next-day ${j} sat`;
        };

        //if today
        if (today.getDate() == j && today.getDay() == nextMon.getDay() && today.getFullYear() == nextMon.getFullYear()) {
            day.setAttribute('id', 'today')
        };

        //add date to .date
        const text = document.createTextNode(`${j}`);
        monthDate.appendChild(text); // <div class="date">1</div>

        //append divs to index.html
        day.appendChild(monthDate); // add <div class="date">1</div> to .day
        day.appendChild(events);    // add <div class="events"></div> to .day
        calendar.appendChild(day);   // add <div class="day 1"></div> to .caldendar 

    };
};






/*===== ICON CLICK =====*/
let leftButton = document.querySelector('.fa-caret-left');
let rightButton = document.querySelector('.fa-caret-right');

const moveNextMonth = () => {
    date.setDate(1)
    date.setMonth(date.getMonth()+1);
    calendar.innerHTML='';
    renderCalendar();
};

const movePrevMonth = () => {
    date.setDate(1)
    date.setMonth(date.getMonth()-1);
    calendar.innerHTML='';
    renderCalendar();
};

leftButton.onclick = movePrevMonth;
rightButton.onclick = moveNextMonth;

renderCalendar();



