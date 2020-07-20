// Logout Logic
function logout() {
    console.log("function fired")
    auth.signOut().then(() => {
        alert("Logout Successfully!")
        window.location.replace("../index.html")
    }).catch(error => {
        alert('An error occured, please try again')
        console.log("Error: ", error)
    });
}



