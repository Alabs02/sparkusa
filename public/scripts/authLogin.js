// Login Logic
var loadingState = document.getElementById("loader")
loadingState.style.visibility = "hidden"

const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // const loginEmail = loginForm['email'].val;
    // const loginPassword = loginForm['password'].val;
    loadingState.style.visibility = "visible"
    const loginEmail = $("#email").val();
    const loginPassword = $("#password").val();

    console.log(loginEmail, loginPassword)

    auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(() => {
        alert("Login Successfully")
        loginForm.reset()
        loadingState.style.visibility = "hidden"
        window.location.replace("../payment.html")
    }).catch(error => {
        let errCode = error.errCode
        let errMsg = error.message
        if (errCode) {
            console.log(errCode)
            // loadingState.style.visibility = "hidden"
        } else {
            console.log(errMsg)
            // loadingState.style.visibility = "hidden"
        }
        loadingState.style.visibility = "hidden"
        console.log(error)
    })
})
