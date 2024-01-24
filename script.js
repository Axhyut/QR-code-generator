const wrapper = document.querySelector(".wrapper");
const qrInput = document.querySelector(".form input");
const generateBtn = document.querySelector(".form button");
const qrImg = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return; //if input is empty then return from here
    generateBtn.innerText = "Generating QR Code..."
    //getting a QR code of user entered value using the qrserver
    //api and passing the api returned img src to qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
    qrImg.addEventListener("load",() => {
        wrapper.classList.add('active');
    });  
});