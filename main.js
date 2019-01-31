$(function () {
    $("#messageButton").on("click", toggleText);
});

function toggleText() {
    if ($("#testfield").text() === "Hello World") {
        $("#testfield").text("");
        $("#messageButton").text("Show Message");
    }

    else {
        $("#testfield").text("Hello World");
        $("#messageButton").text("Hide Message")
    }
}