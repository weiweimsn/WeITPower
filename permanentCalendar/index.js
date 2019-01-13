var currentDate = new Date();
var YearChangeEvent;
var currentYear;
var statHolidays;
var holidays = [];

window.onload = function () {
    preLoad();
    // renderCalendarDays();
    var rowsOfCurrentMonth = CountOfRow(new Date());
    RenderCalander(rowsOfCurrentMonth);
    renderCalendarDays(new Date());
}


function preLoad() {
    YearChangeEvent = new CustomEvent('onYearChanged');
    var prevMonth = document.getElementsByClassName("previousMonth")[0];
    var nextMonth = document.getElementsByClassName("nextMonth")[0];
    currentYear = document.getElementById('currentYear');

    prevMonth.addEventListener('click', goToPrevMonth);
    nextMonth.addEventListener('click', goToNextMonth);
    currentYear.addEventListener('onYearChanged', setYearInfo);
    currentYear.dispatchEvent(YearChangeEvent);

    updateStatHolidays(new Date().getFullYear());
}

function renderCalendarDays(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var today = date.getDate();
    var firstDay = new Date(year, month - 1, 1).getDay();
    var dayOfWeek = date.getDay() === 0 ? 7 : date.getDate();
    var numberOfDays = new Date(year, month, 0).getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var count = 1;
    var startIndex = firstDay == 0 ? 7 + 6 : firstDay + 6;
    var currentDay;
    var gap = firstDay - 1 + 6;
    currentDate = date;

    while (count <= numberOfDays) {
        var calendarCell = document.getElementsByClassName("col");
        var span = document.createElement('div');
        span.classList.add('font-weight-bold');
        span.classList.add('text-center');
        span.innerText = count;
        // if today is Saturday or Sunday, make it red
        if ((startIndex - 5) % 7 === 0 || (startIndex - 6) % 7 === 0) {
            span.style.color = "red";
        }
        // if today is a stat holiday or observed stat holiday, make it red
        count = count < 10 ? "0" + count : count;
        month = month < 10 ? "0" + month : month;
        if (holidays.indexOf(year.toString() + month + count) > -1) {
            span.style.color = "red";
        }
        calendarCell[startIndex].appendChild(span);

        var lunarDate = document.createElement('div');
        lunarDate.className = 'lunarDate';
        const lunarInfo = Lunar.toLunar(year, month, count);
        const statHolidayName = getStatHolidayNameByDate(year.toString() + month + count);

        if (holidays.indexOf(year.toString() + month + count) > -1 && statHolidayName !== "") {
            lunarDate.innerHTML = statHolidayName;
            lunarDate.style.color = "red";
        }

        else if (lunarInfo[8] !== "") {
            lunarDate.innerHTML = lunarInfo[8];
            lunarDate.style.color = "red";
        }
        else {
            lunarDate.innerHTML = lunarInfo[8] === "" ? lunarInfo[5] + ' ' + lunarInfo[6] : lunarInfo[8];
        }
        calendarCell[startIndex].appendChild(lunarDate);

        calendarCell[today + gap].classList.add('today');
        currentDay = calendarCell[today + gap];
        count++;
        startIndex++;

        month++;
        month--;
    }
    // SetTime(currentDay, today, hour, minutes,seconds);

    setDisplayMonth(month - 1);
}

function SetTime(currentDay, today, hour, minute, second) {
    setInterval(() => {
        second++;
        if (second >= 60) {
            second = second % 60;
            minute++;
        }
        if (minute >= 60) {
            minute = minute % 60;
            hour++;
        }
        hour = hour >= 24 ? hour % 24 : hour;
        var time = hour + ' : ' + minute + ' ' + second;
        currentDay.innerHTML = today + '</br>' + '</br>' + '<div>' + time + '</div>';
    }, (1000));
}

function CountOfRow(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var numberOfDays = new Date(year, month + 1, 0).getDate();
    var firstDay = new Date(year, month, 1).getDay();
    firstDay = firstDay == 0 ? 7 : firstDay;

    var rows = Math.ceil((numberOfDays + firstDay - 1) / 7);
    return rows;
}

// create all days / cells in a month in the calendar
function RenderCalander(rows) {
    var calendar = document.getElementsByClassName('calendarBody')[0];
    calendar.innerHTML = '';

    for (var i = 0; i < rows; i++) {
        // create rows
        var row = document.createElement('div');
        row.className = 'row';

        // create days in a row
        for (var j = 0; j < 7; j++) {
            var cell = document.createElement('div');
            cell.className = 'col';
            row.appendChild(cell);
        }
        calendar.appendChild(row);
    }
}

function setDisplayMonth(month) {
    var currentMonth = document.getElementById('currentMonth');
    switch (month) {
        case 0:
            currentMonth.innerHTML = 'January';
            break;
        case 1:
            currentMonth.innerHTML = 'Februry';
            break;
        case 2:
            currentMonth.innerHTML = 'March';
            break;
        case 3:
            currentMonth.innerHTML = 'April';
            break;
        case 4:
            currentMonth.innerHTML = 'May';
            break;
        case 5:
            currentMonth.innerHTML = 'June';
            break;
        case 6:
            currentMonth.innerHTML = 'July';
            break;
        case 7:
            currentMonth.innerHTML = 'August';
            break;
        case 8:
            currentMonth.innerHTML = 'September';
            break;
        case 9:
            currentMonth.innerHTML = 'October';
            break;
        case 10:
            currentMonth.innerHTML = 'November';
            break;
        case 11:
            currentMonth.innerHTML = 'December';
            break;
        default:
            currentMonth.innerHTML = 'Error';
            break;
    }
}

function goToPrevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    currentYear.dispatchEvent(YearChangeEvent);
    var rowsOfCurrentMonth = CountOfRow(currentDate);
    RenderCalander(rowsOfCurrentMonth);
    renderCalendarDays(currentDate);
}

function goToNextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    currentYear.dispatchEvent(YearChangeEvent);
    var rowsOfCurrentMonth = CountOfRow(currentDate);
    RenderCalander(rowsOfCurrentMonth);
    renderCalendarDays(currentDate);
}

function setYearInfo(e) {
    currentYear.innerHTML = currentDate.getFullYear() + '&nbsp&nbsp';

    // upate stat holidays in a new year
    holidays = updateStatHolidays(currentDate.getFullYear());
}

function createCORSRequest() {
    var url = "http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-CA";
    var httpRequest = HttpRequest;
    
    httpRequest.onload = function(response){
        console.log(response);
    }

    httpRequest.onerror = function(error){
        console.log(error);
    }

    httpRequest.send();
}

function updateStatHolidays(year) {
    // mount stat holidays
    statHolidays = [];
    tempHolidays = [];

    statHolidays = CanadaStatHolidays.getStatHolidays(year)
    for (var i = 0; i < statHolidays.length; i++) {
        // holidays.push(statHolidays[i].id);
        if (statHolidays[i].observedDate) {
            tempHolidays.push(statHolidays[i].observedDate);
        }
        // else {
        //     tempHolidays.push(statHolidays[i].id);
        // }
        tempHolidays.push(statHolidays[i].id);
    }
    return tempHolidays;
}

function getStatHolidayNameByDate(dateInString) {
    if (!statHolidays) return "";

    for (var i = 0; i < statHolidays.length; i++) {
        const statHoliday = statHolidays[i];
        if(statHoliday.id === dateInString || statHoliday.observedDate === statHoliday.id){
        // if (statHoliday.id === dateInString) {
            return statHoliday.name;
        }
    }
    return "";
}