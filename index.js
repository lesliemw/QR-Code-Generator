let codeBox = document.getElementById("codeBox");
let qrCode = document.getElementById("qrCode");
let qrText = document.getElementById("qrText");

function createQr() {
    if (qrText.value.length > 0) {
        qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        codeBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        },1000);
    }
}