let container = document.getElementById("container")

function checkLogin(){
    let usernameElement = document.getElementById("username")
    let passwordElement = document.getElementById("password")

    let username = usernameElement.value
    let password = passwordElement.value

    if (username == "Username" && password == "Password"){
        container.innerHTML = "Successfully Logged In"
    }else{
        container.innerHTML = "No Hackers Allowed"
    }

}