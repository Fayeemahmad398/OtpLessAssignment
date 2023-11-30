

function otpless(otplessUser) {
    console.log(JSON.stringify(otplessUser));
    localStorage.setItem("user", JSON.stringify(otplessUser));
    
    alert("Congratulations, You have successfully logged in!")

    window.location.href = "./Pages/Profile/profile.html";

}


