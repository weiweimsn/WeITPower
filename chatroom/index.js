// after window loads everything, this function will run
window.onload = function(){
    var sendButton = document.getElementsByClassName("sendMessageButton");
    if(sendButton[0]){
        sendButton[0].addEventListener("click", function(){
            sendMessage();
        });
    }
}

function sendMessage(){

    // get the messaage from textarea
    var textArea = document.getElementsByClassName("textbox")[0];
    var message = textArea.value;

    // put message to messageSection
    var messageSection = document.getElementById("messageSection");
    var textarea = document.createElement("textarea");
    textarea.style.width = "100%";
    textarea.rows = 2;
    textarea.innerText = message + "\n";

    // add span / messaage to message section
    messageSection.appendChild(textarea);
}