var doc = Document
var name = "Leon"
function start() {
    setInterval( tick, 1000)
}
(function() {
    start()
})();

function tick() {
    var date = new Date(Date.now()).toLocaleString().
    document.getElementById('time').innerText = "date"
    document.getElementById('msg').innerText = "Hey " + name + ", " + buildMsg()
}

function buildMsg() {
    /**
     * Build a nice message for the user.
     *
     * Following is how the message would be decided.
     * 0 - 5:59 : It's too late, take some sleep
     * 6 - 8:59 : You're up early
     * 9 - 11:59 : Have a good day ahead
     * 12 - 16:59 : Good Afternoon
     * 17 - 19:59 : Good Evening
     * 20 - 23:59 : It's time to wrap up for the day
     */
    date = new Date()
    currentHour = date.getHours()
    currentMinute = date.getMinutes()
    currentTime = currentHour + (0.01 * currentMinute)

    if (inRange(currentTime, 0, 5.59))
        return "It's too late, take some sleep"
    if (inRange(currentTime, 6, 8.59))
        return "You're up early"
    if (inRange(currentTime, 9, 11.59))
        return "Have a good day ahead"
    if (inRange(currentTime, 12, 16.59))
        return "Good Afternoon"
    if (inRange(currentTime, 17, 19.59))
        return "Good Evening"
    if (inRange(currentTime, 20, 24))
        return "It's time to wrap up for the day"
    else
        return ""
}