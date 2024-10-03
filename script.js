const generateBtn = document.getElementById("generateBtn");
const qrText = document.getElementById("qr-text");
const qrBody = document.querySelector(".qr-body");


generateBtn.addEventListener("click", function (event) {
    event.preventDefault(); 
    qrBody.innerHTML = "";
    const text = qrText.value;
    if (text.trim() === "") {
        alert("Please enter some text or URL.");
        return;
    }

    
    const qrCode = new QRCode(qrBody, {
        text: text, 
        width: 180, 
        height: 150, 
        colorDark: "#000000", 
        colorLight: "#ffffff", 
    });
});



document.getElementById("generateBtn").addEventListener("click", function() {
    var inputField = document.getElementById("qr-text");

   
    inputField.classList.add("shake");

    setTimeout(function() {
        inputField.classList.remove("shake");
    }, 500);
});

