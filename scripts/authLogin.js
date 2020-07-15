// Login Logic
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // const loginEmail = loginForm['email'].val;
    // const loginPassword = loginForm['password'].val;
    const loginEmail = $("#email").val();
    const loginPassword = $("#password").val();

    console.log(loginEmail, loginPassword)

    auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(() => {
        alert("Login Successfully")
        loginForm.reset()
        window.location.replace("../payment.html")
    }).catch(error => {
        let errCode = error.errCode
        let errMsg = error.message
        if (errCode) {
            console.log(errCode)
        } else {
            console.log(errMsg)
        }
        console.log(error)
    })
})
