welcomeMessage();
// 
function welcomeMessage() {
    let userName = prompt("Welcome to My Page ! Please enter your name:");

    if (userName === '' || userName === null) {
        userName = "Anonimous";
    }

    document.getElementById("greeting").innerText = "Hi, " + userName + "!";
}

function InputMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === '' || email === '' || message === '') {
        return;
    }

    document.getElementById("showname").innerText = "Name " + " "+ name;
    document.getElementById("showemail").innerText = "Email " +" "+  email;
    document.getElementById("showmessage").innerText = "Message " +" "+  message;

}

function ResetForm() {
    document.getElementById("myForm").reset();

    document.getElementById("showname").innerText = "Name " +" ";
    document.getElementById("showemail").innerText = "Email " +" ";
    document.getElementById("showmessage").innerText = "Message " +" ";
}