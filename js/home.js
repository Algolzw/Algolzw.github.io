/**
 * Created by jetluo on 16/7/1.
 */
$(document).ready(function () {
    $(".text-flash > p").bumpyText();

    var colors = ["#a94442", "#CDDDA8", "#386AA0", "#00FEFE", "#F98481", "#FDCF69", "#503874", "#FFDEAD", "#CD5C5C"];

    timeShuffle(colors);

    $("#content-title b").bind("mouseenter", function () {
        $(this).stop();
        var index = $(this).index();
        // alert(colors[index]);
        $(this).animate({color: colors[index]}, "fast");

    }).bind("mouseleave", function () {
        var index = $(this).index();
        setTimeout(function () {
            $("#content-title b").animate({color: '#FEFEFE'}, "fast");
        }, 8000);
    });


});

function timeShuffle(arr) {
    // alert("time counts");
    shuffle(arr);
    t = setTimeout(function () {
        timeShuffle(arr);
    }, 8000);
}

function shuffle(arr) {
    var r = 0;
    for (var i = 0; i < arr.length; i++) {
        r = Math.floor(Math.random() * arr.length);
        if (r == i) continue;
        var tmp = arr[i];
        arr[i] = arr[r];
        arr[r] = tmp;
    }
}

