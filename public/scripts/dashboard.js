auth.onAuthStateChanged(user => {
    if (user) {
        const docRef = db.collection("users").doc(user.uid.toString());
        const fundRef = db.collection("funds").doc(user.uid.toString());

        var name, email, username, uid, funds, gain

        if (user != null) {
            username = user.displayName
            email = user.email
            uid = user.uid
            console.log(uid)
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
    } else {
        console.log("User does not exist!")
    }
})




