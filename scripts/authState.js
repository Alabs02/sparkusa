var authState = false;
//
var loginBtn = document.getElementById("loginBtn")
var logoutBtn = document.getElementById("logoutBtn")
var signupBtn = document.getElementById("registerBtn")

auth.onAuthStateChanged((user) => {
    if (user) {
        authState = true
        console.log("User is signed in.")
    } else {
        authState = false
        console.log("No user is signed in")
    }
    hideBtns();
})

function hideBtns() {
    if (authState === true) {
        loginBtn.style.display = "none"
        signupBtn.style.display = "none"
        logoutBtn.style.display = "relative"
    } else if (authState === false) {
        loginBtn.style.display = "relative"
        signupBtn.style.display = "relative"
        logoutBtn.style.display = "none"
    }
}
