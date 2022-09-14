$(document).ready(() =>{
async function displayTime() {
    //use setInterval to run the function every 1000ms (1s)
    setInterval(() => {
        //Use date constructor to create  a new object. Source https://www.w3schools.com/jsref/jsref_obj_date.asp
        let date = new Date();
        // create variables for the required hours, minutes seconds and AM PM
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
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
        $("#timeDiv").html(currentTime);
       
    }, 1000);
}
displayTime();
});
