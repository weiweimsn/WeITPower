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
    var row = 1;
    var startIndex = row * firstDay + 6;
    while(count <= numberOfDays){
        var calendarCell = document.getElementsByClassName("col");
        calendarCell[startIndex].innerHTML = count;
        calendarCell[today + 11].classList.add('today'); 
        count++;
        startIndex++;
    }
}