function checkLogin(){
    //get user input elements
    let usernameElement = document.getElementById("username")
    let passwordElement = document.getElementById("password")

    //get values for user input
    let username = usernameElement.value
    let password = passwordElement.value

    //if username and password match
    if (username == "Username" && password == "Password"){
        //tell them they logged in
        container.innerHTML = "Successfully Logged In"
    }else{
        //call them a hacker
        container.innerHTML = "No Hackers Allowed"
    }

}