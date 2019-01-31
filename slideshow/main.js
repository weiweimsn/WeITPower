var currentPicIndex = 0;
window.onload = function () {
    var currentPic = document.getElementById("slideshow").children[0];
    currentPic.style.display = "block";
    setInterval(function () {
        var nextPic = getNextPicture(currentPic);
        nextPic.style.display = "block";
        currentPic.style.display = "none";
        currentPic = nextPic;
    }, 3000);


    // setInterval(function () {
    //     $('#slideshow > div:first')
    //         .fadeOut(1000)
    //         .next()
    //         .fadeIn(1000)
    //         .end()
    //         .appendTo('#slideshow');
    // }, 3000);
};

function getNextPicture(currentPic) {
    var pics = document.getElementById("slideshow").children;
    for (var i = 0; i < pics.length; i++) {
        if (currentPic.children[0].src === pics[i].children[0].src) {
            var index = (i + 1) % 3;
            return pics[index];
        }
    }
}

function getPrevPic(currentPic){
    var pics = document.getElementById("slideshow").children;
    for (var i = 0; i < pics.length; i++) {
        if (currentPic.children[0].src === pics[i].children[0].src) {
            var index = (i - 1 + 3) % 3;
            return pics[index];
        }
    }
}

function goToPrevPic(){
    var currentPic = document.getElementById("slideshow").children[currentPicIndex];
    currentPic.style.display = "block";
    var nextPic = getPrevPic(currentPic);
    nextPic.style.display = "block";
    currentPic.style.display = "none";
    currentPicIndex = (currentPicIndex - 1 + 3) % 3;
}
function goToNextPic(){
    var currentPic = document.getElementById("slideshow").children[currentPicIndex];
    currentPic.style.display = "block";
    var nextPic = getNextPicture(currentPic);
    nextPic.style.display = "block";
    currentPic.style.display = "none";
    currentPicIndex = ++currentPicIndex % 3;
}