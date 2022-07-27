$(document).ready(function() {
    $("#myid").datepicker();
});

function view(num) {
    document.getElementById("result").value += num
}

function compute() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

function clr() {
    document.getElementById("result").value = ""
}

function check() {
    var total = 0;
    if (document.getElementById("one").checked) {
        total++;
    }
    if (document.getElementById("two").checked) {
        total++;
    }
    if (document.getElementById("three").checked) {
        total++;
    }
    if (document.getElementById("four").checked) {
        total++;
    }
    if (document.getElementById("five").checked) {
        total++;
    }

    alert("your score is" + total)
}


window.onload = function() {

    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

    buttonStart.onclick = function() {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }


    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }



    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

    }


}

$(document).ready(function() {
    $("#btn1").datepicker()


});