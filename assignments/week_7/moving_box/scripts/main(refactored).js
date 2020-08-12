$(document).ready(function () {

    //Buttons Start
    $("#up").click(function () {
        moveBox("top", 2, "min", "remove");
    });

    $("#left").click(function () {
        moveBox("left", 2, "min", "remove");
    });

    $("#right").click(function () {
        moveBox("left", 1000, "max", "add");
    });

    $("#down").click(function () {
        moveBox("top", 1000, "max", "add");
    });
    //Buttons End

    $(document).keydown(function (event) {

        if (event.which === 37) {
            event.preventDefault();
            moveBox("left", 2, "min", "remove");
        } else if (event.which === 40) {
            event.preventDefault();
            moveBox("top", 1000, "max", "add");
        } else if (event.which === 38) {
            event.preventDefault();
            moveBox("top", 2, "min", "remove");
        } else if (event.which === 39 ) {
            event.preventDefault();
            moveBox("left", 1000, "max", "add");
        }
    });
});

function moveBox(cssProperty, limit, minmax, addRemove) {
    var currentTopPos = $("#box").css(cssProperty);

    var topValue = parseInt(currentTopPos);

    if (minmax === "min") {
        if (topValue <= limit) {return;}
    } else if (minmax === "max") {
        if (topValue >= limit) {return;}
    }

    if (addRemove === "remove") {
        var newTopValue = topValue - 50;
    } else if (addRemove === "add") {
        var newTopValue = topValue + 50;
    }

    var cssTopValue = newTopValue + "px";

    $("#box").css(cssProperty, cssTopValue);
}