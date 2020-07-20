// Sign-up Logic
var loadingState = document.getElementById("loader")
loadingState.style.visibility = "hidden"

const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // User info
    loadingState.style.visibility = "visible"
    const fname = signupForm['signupFname'].value;
    const lname = signupForm['signupLname'].value;
    const userName = signupForm['signupUsername'].value;
    const email = signupForm['signupEmail'].value;
    const password = signupForm['signupPassword'].value
    const zipCode = signupForm['signupZipCode'].value
    const phone = signupForm['signupNumber'].value;
    // const country = signupForm['signupCountry'].value;
    const gender = signupForm['signupSex'].value;

   
    auth.createUserWithEmailAndPassword(email, password).then(user => {
        const newUser = auth.currentUser
        console.log(user.user.email, "Created")
        newUser.updateProfile({
            displayName: userName
        }).then(() => {
            console.log("profile added")
            db.collection("users").doc(newUser.uid.toString()).set({
                fname: fname,
                gender: gender,
                lname: lname,
                number: phone,
                zipCode: zipCode
            }).then(() => {
                console.log("document added");
                signupForm.reset()
                newUser.sendEmailVerification().then(function () {
                    alert("We just sent a massage to your mail, thank you for signing up")

                    const fundObj = auth.currentUser
                    db.collection("funds").doc(fundObj.uid.toString()).set({
                        amount: 500,
                        gain: 50,
                        uid: fundObj.uid
                    }).then(() => {
                        alert("Funds data successfully added!")
                    }).catch(error => {
                        console.log("Error occured")
                    })
                    auth.signOut().then(() => {
                        console.log("SignOut successfully")
                        loadingState.style.visibility = "hidden"
                        window.location.replace("../login.html")
                    }).catch((error) => {
                        console.log("Signout error")
                    })
                }).catch(function (error) {
                    alert("An error occurred!")
                });
            }).catch(error => {
                alert(error)
            })
        }).catch(error => {
            alert(error)
        })
    }).catch(error => {
        alert(error)
        let errcode = error.code
        let errMsg = error.message
        if (errCode == "auth/weak-password") {
            console.log('errCode')
            loadingState.style.visibility = "hidden"
        } else {
            console.log(errMsg)
            loadingState.style.visibility = "hidden"
        }
        loadingState.style.visibility = "hidden"
        console.log(error)
    });
});
