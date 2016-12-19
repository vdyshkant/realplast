// $( document ).ready(function() {
$(window).load(function() {

	if($('body').is('.page-affair')){











    /* clock timer-00
       ================================================ */

       $("#DateCountdown0").TimeCircles();
       $("#DateCountdown1").TimeCircles();
       $("#DateCountdown2").TimeCircles();
       $("#DateCountdown3").TimeCircles();
       $("#DateCountdown4").TimeCircles();
       // $("#DateCountdown5").TimeCircles();


        $("#CountDownTimer").TimeCircles({ time: { Days: { show: false }, Hours: { show: false } }});
        $("#PageOpenTimer").TimeCircles();

        var updateTime = function(){
            var date = $("#date").val();
            var time = $("#time").val();
            var datetime = date + ' ' + time + ':00';
            $("#DateCountdown0").data('date', datetime).TimeCircles().start();
            $("#DateCountdown1").data('date', datetime).TimeCircles().start();
            $("#DateCountdown2").data('date', datetime).TimeCircles().start();
            $("#DateCountdown3").data('date', datetime).TimeCircles().start();
            $("#DateCountdown4").data('date', datetime).TimeCircles().start();
        };
        $("#date").change(updateTime).keyup(updateTime);
        $("#time").change(updateTime).keyup(updateTime);

        // Start and stop are methods applied on the public TimeCircles instance
        $(".startTimer").click(function() {
            $("#CountDownTimer").TimeCircles().start();
        });
        $(".stopTimer").click(function() {
            $("#CountDownTimer").TimeCircles().stop();
        });

        // Fade in and fade out are examples of how chaining can be done with TimeCircles
        $(".fadeIn").click(function() {
            $("#PageOpenTimer").fadeIn();
        });
        $(".fadeOut").click(function() {
            $("#PageOpenTimer").fadeOut();
        });


    /* === eof clock timer-00 == */










  } // eof if ($('body').is('.page-affair'))
}); // eof .ready
