$(document).ready(function() {
    $('#task').keydown(function() {
        if (event.which == 13) {
            startPomodoro();
        }
    });
});

function startPomodoro() {
    var task = $('#task').val();
    var minutes = 0;
    var seconds = 5;
    var time = (minutes * 60) + seconds;

    $('#currentTask').html(task);
    formatTime(minutes, seconds);
    
    $('#taskManager').hide();
    $('#completedPomodoros').hide();
    $('#pomodoro').show();

    startTimer("Pomodoro", time);
}

function startBreak() {
    var task = "Break";
    var minutes;
    var seconds;

    if ($('#completedPomodoros ul li').length % 4 == 0) {
        minutes = 0;
        seconds = 30;
        kitKatBar();
    }
    else {
        minutes = 0;
        seconds = 3;
    }

    var time = (minutes * 60) + seconds;

    $('#currentTask').html(task);
    formatTime(minutes, seconds);

    startTimer("Break", time);
}

function endPomodoro() {
    var task = $('#task').val();
    var completedTask = $("<li>" + task + "</li>");
    $("#completedPomodoros ul").append(completedTask);
    $('#task').val("");

    $("#completedPomodoros").show();
    playAlert();
    startBreak();
}

function endBreak() {
    $('#pomodoro').hide();
    $('#taskManager').show();
    $("#kitKat").hide();
    playAlert();
}

function startTimer(activity, time) {
    var timer = setInterval(function() {
        time -= 1;

        if (time < 0) {
            clearInterval(timer);
            if (activity == "Pomodoro") {
                endPomodoro();
            }
            else {
                endBreak();
            }
            return;
        }

        var minutes = Math.floor((time % (60 * 60)) / (60));
        var seconds = Math.floor(time % 60);

        $('#timer').html(formatTime(minutes, seconds));
    }, 1000);
}

function formatTime(minutes, seconds) {
    var url = "time?m=" + minutes + "&s=" + seconds;
    
    $.getJSON(url, function(data) {
       $('#timer').html(data.time);
    });
}

function kitKatBar() {
    $("#kitKat").show();
    $("#kitKat").attr('src', $("#kitKat").attr('src') + '&autoplay=1');
}

function playAlert() {
    var audio = new Audio('alert.wav');
    audio.play();
}
