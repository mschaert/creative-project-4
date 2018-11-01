$(document).ready(function() {
    $('#StartPomodoro').click(function() {
        var task = $('#task').val();
        var minutes = 0;
        var seconds = 10;
        var time = (minutes * 60) + seconds;
        
        $('#currentTask').html(task);
        $('#timer').html(formatTime(minutes, seconds));
        $('#taskManager').hide();
        $('#pomodoro').show();

        var timer = setInterval(function() {
            time -= 1;

            if (time < 0) {
                clearInterval(timer);
                $('#pomodoro').hide();

                var completedTask = $("<li>" + task + "</li>");
                $("#completedPomodoros ul").append(completedTask);
                $("#completedPomodoros").show();
                
                $('#task').val("");
                $('#taskManager').show();

                return;
            }

            var minutes = Math.floor((time % (60 * 60)) / (60));
            var seconds = Math.floor(time % 60);

            $('#timer').html(formatTime(minutes, seconds));
        }, 1000);
    });
});

function formatTime(minutes, seconds) {
    var formattedTime;
    if (seconds < 10) {
        formattedTime = minutes + ":0" + seconds;
    }
    else {
        formattedTime = minutes + ":" + seconds;
    }
    return formattedTime;
}
