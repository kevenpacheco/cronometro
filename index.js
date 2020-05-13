let hrs = 0;
let min = 0;
let seg = 0;

let cron;

function start() {
    cron = setInterval(() => {tempo()}, 1000)

    document.getElementById("start").disabled = true
}

function pause() {
    clearInterval(cron)

    document.getElementById("start").disabled = false
}

function reset() {
    hrs = 0
    min = 0
    seg = 0

    document.getElementById("contador").innerHTML = "00:00:00"
    clearInterval(cron);

    document.getElementById("start").disabled = false
}

function tempo() {
    if(seg < 60) {
        seg++

        if(seg == 60) {
            min++
            seg = 0

            if(min == 60) {
                hrs++
                min = 0
            }
        }
    }

    var formato = (hrs < 10 ? "0" + hrs : hrs) + ":" + (min < 10 ? "0" + min : min) + ":" + (seg < 10 ? "0" + seg : seg)
    document.getElementById("contador").innerHTML = formato
}


