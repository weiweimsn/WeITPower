window.onload = function(){
    // renderCalendarDays();
    var rowsOfCurrentMonth = CountOfRow();
    RenderCalander(rowsOfCurrentMonth);
    renderCalendarDays();
}

function renderCalendarDays(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var today = date.getDate();
    var firstDay = new Date(year, month - 1, 1).getDay();
    var dayOfWeek = date.getDay() === 0? 7: date.getDate();
    var numberOfDays = new Date(year, month, 0).getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var count = 1;
    var startIndex = firstDay + 6;
    var currentDay;
    var gap = firstDay - 1 + 6;
    
    while(count <= numberOfDays){
        var calendarCell = document.getElementsByClassName("col");
        // show time
        var time = hour + ' : ' + minutes + ' ' + seconds;
        calendarCell[startIndex].innerHTML = count;
        calendarCell[today + gap].classList.add('today'); 
        currentDay = calendarCell[today + gap];
        count++;
        startIndex++;
    }
    SetTime(currentDay, today, hour, minutes,seconds);
}

function SetTime(currentDay,today, hour, minute, second){
    setInterval(() => {
        second ++;
        if(second >= 60){
            second = second % 60;
            minute ++;
        }
        if(minute >= 60){
            minute = minute % 60;
            hour++;
        }
        hour = hour >= 24? hour % 24: hour;
        var time = hour + ' : ' + minute + ' ' + second;
        currentDay.innerHTML = today + '</br>' + '</br>' + '<div>' + time + '</div>';
    }, (1000));
}

function CountOfRow(firstDayOfWeek, currentMonth, currentYear){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var numberOfDays = new Date(year, month + 1, 0).getDate();
    var firstDay = new Date(year, month, 1).getDay();

    var rows = Math.ceil((numberOfDays + firstDay - 1) / 7);
    return rows;
}

function RenderCalander(rows){
    var calendar = document.getElementsByClassName('calendarBody')[0];

    for(var i= 0; i< rows; i ++){
        // create rows
        var row = document.createElement('div');
        row.className = 'row';

        // create days in a row
        for(var j = 0; j< 7; j++){
            var cell = document.createElement('div');
            cell.className = 'col';
            row.appendChild(cell);
        }
        calendar.appendChild(row);
    }
}