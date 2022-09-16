$(document).ready(() => {

    async function displayTime() {

        //use setInterval to run the function every 1000ms (1s)
        setInterval(() => {
            //Use date constructor to create  a new object. Source https://www.w3schools.com/jsref/jsref_obj_date.asp
            let date = new Date(),
                // create variables for the required hours, minutes seconds and AM PM
                hour = date.getHours(),
                minutes = date.getMinutes(),
                seconds = date.getSeconds(),
                day = date.getDay(),
                month = date.getMonth(),
                dayofMonth = date.getDate(),
                year = date.getFullYear(),
                daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            day = daysOfWeek[day];
            //if the hour is less than then add a 0 to pad and maintain 24 hour clock appearance
            if (hour < 10) {
                hour = "0" + hour;
            }
            //if the minutes is less than then add a 0 to pad and maintain 24 hour clock appearance
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            //if the seconds is less than then add a 0 to pad and maintain 24 hour clock appearance
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            //create variable currentTime and concatenate above variables along with the : between the numbers
            let currentTime = hour + ":" + minutes + ":" + seconds;
            let currentDate = dayofMonth + "/" + month + "/" + year;
            $("#dateDiv").html("Today is " + day + " " + currentDate);
            $("#timeDiv").html( currentTime);

        }, 1000);
    }
    displayTime();
});