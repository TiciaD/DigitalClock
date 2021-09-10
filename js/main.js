function Time() {
    let date = new Date() // current date and time will be stored in date //

    let hour = date.getHours(); // gets the current hour from the date variable //
    let minute = date.getMinutes(); // gets the current minutes from the date variable //
    let second = date.getSeconds(); // gets the current seconds from the date variable //

    let meridiem = ""; // set variable for PM and AM for 12-hour format //
    if (hour >= 12) {
        meridiem = "PM"; // If current hour is greater than or equal to 12, then the meridiem is PM //
    } else {
        meridiem = "AM" // If the current hour is less than 12, then the meridiem is AM //
    }

    if (hour === 0) {
        hour = 12;  // converting current hour to 12-hour format, if current hour is 0, then current hour updated to 12 //
    } else {
        if (hour > 12) {
            hour = hour - 12;   // if current hour is greater than 12, it's reduced by 12 //
        }
    }

    // set variables to update the hour, minute and seconds elements if they're single digits //
    hour = update(hour);
    minute = update(minute);
    second = update(second);

    function update(digit) {
        if (digit < 10) {
            return "0" + digit; // 0 is appended to parameter less than 10 //
        } else {
            return digit;    // parameter returned as is if digit is 10 or greater //
        }
    }

    // access div’s id "clock" and assign hour, minute, second and meridiem elements using innerText //
    document.getElementById("clock").innerText = hour + ":" + minute + ":" + second + " " + meridiem;
    setTimeout(Time, 1000);
}

Time();
