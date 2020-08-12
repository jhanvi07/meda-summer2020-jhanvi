$(document).ready(function () {

    //Buttons Start
    $("#up").click(function () {
        var currentTopPos = $("#box").css("top");
        console.log(currentTopPos);

        var topValue = parseInt(currentTopPos);
        console.log(topValue);

        if (topValue <= 0) {
            return;
        }

        var newTopValue = topValue - 50;
        console.log(newTopValue); 

        var cssTopValue = newTopValue + "px";
        console.log(cssTopValue);

        $("#box").css("top", cssTopValue);

        // This does not work.
        //$("#box").css("top", (newTopValue + "px"));
    });

    $("#left").click(function () {
        var currentLeftPos = $("#box").css("left");

        var leftValue = parseInt(currentLeftPos);

        if (leftValue <= 0) {
            return;
        }

        var newLeftValue = leftValue - 50;

        var cssLeftValue = newLeftValue + "px";

        $("#box").css("left", cssLeftValue);
    });

    $("#right").click(function () {
        var currentLeftPos = $("#box").css("left");

        var leftValue = parseInt(currentLeftPos);

        if (leftValue >= 1000) {
            return;
        }

        var newLeftValue = leftValue + 50;

        var cssLeftValue = newLeftValue + "px";

        $("#box").css("left", cssLeftValue);
    });

    $("#down").click(function () {
        var currentTopPos = $("#box").css("top");

        var topValue = parseInt(currentTopPos);

        if (topValue >= 1000) {
            return;
        }

        var newTopValue = topValue + 50;

        var cssTopValue = newTopValue + "px";

        $("#box").css("top", cssTopValue);
    });
    //Buttons End

    $(document).keydown(function (event) {
        console.log(event.which);

        // 37 key  == Left Arrow
        if (event.which === 37) {
            

            var currentLeftPos = $("#box").css("left");
            var leftValue = parseInt(currentLeftPos);
            console.log(leftValue);
            if (leftValue <= 2) {
                return;
            }
            var newLeftValue = leftValue - 50;
            var cssLeftValue = newLeftValue + "px";
            $("#box").css("left", cssLeftValue);
        // 40 key == down Arrow
        } else if (event.which === 40) {
            event.preventDefault();

            var currentTopPos = $("#box").css("top");
            var topValue = parseInt(currentTopPos);
            if (topValue >= 1000) {
                return;
            }
            var newTopValue = topValue + 50;
            var cssTopValue = newTopValue + "px";
            $("#box").css("top", cssTopValue);
        } else if (event.which === 38) {
            event.preventDefault();

            var currentTopPos = $("#box").css("top");
            var topValue = parseInt(currentTopPos);
            if (topValue <= 2) {
                return;
            }
            var newTopValue = topValue - 50;
            var cssTopValue = newTopValue + "px";
            $("#box").css("top", cssTopValue);

        } else if (event.which === 39 ) {
            event.preventDefault();

            var currentLeftPos = $("#box").css("left");
            var leftValue = parseInt(currentLeftPos);
            if (leftValue >= 1000) {
                return;
            }
            var newLeftValue = leftValue + 50;
            var cssLeftValue = newLeftValue + "px";
            $("#box").css("left", cssLeftValue);
        }
    });
});
