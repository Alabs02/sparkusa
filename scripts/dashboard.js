const currentUser = auth.currentUser;
const docRef = db.collection("users").doc(currentUser.uid.toString());
const fundRef = db.collection("funds").doc(currentUser.uid.toString());

const name, email, username, uid, funds, gain

if (currentUser != null) {
    username = currentUser.displayName
    email = currentUser.email
    uid = currentUser.uid
    // Render to the dom
    document.getElementById("myUsername").innerHTML = username
    document.getElementById("myEmail").innerHTML = email
    document.getElementById("myUid").innerHTML = uid
} else {
    alert("An error occured, please check your internet connection")
}

// docRef.get().then(doc => {
//     if (doc.exists) {
//         console.log(doc.data())
//         const data = doc.data()
//         name = `${data.fname} ${data.lname}`
//         // Render to the dom
//         document.getElementById("").innerHTML = name
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// })

fundRef.get().then(doc => {
    if (doc.exists) {
        console.log(doc.data())
        const fundData = doc.data()
        funds = `${fundData.amount}`
        gain = `${fundData.gain}`
        // Render to the dom
        document.getElementById("myFunds").innerHTML = funds
        document.getElementById("myGain").innerHTML = gain
    } else {
        
    }
})



