window.onload = function(){
    renderCalendar();

}

function renderCalendar(){
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
    
    while(count <= numberOfDays){
        var calendarCell = document.getElementsByClassName("col");
        // show time
        var time = hour + ' : ' + minutes + ' ' + seconds;
        calendarCell[startIndex].innerHTML = count;
        calendarCell[today + 11].classList.add('today'); 
        currentDay = calendarCell[today + 11];
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
        currentDay.innerHTML = today + '</br>' + '</br>' + time;
    }, (1000));
}