const sendData = document.querySelector("#sendForm");
sendData.addEventListener('submit', (e) => {
    e.preventDefault()

    alert("Message sent successfully!")
    sendData.reset();
})