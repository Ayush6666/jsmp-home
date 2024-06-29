function sendMail(){

let parms = {

name: document.getElementById("name").value,

email: document.getElementById("email").value,

message: document.getElementById("message").value,}
 emailjs.send("service_4v7naai","template_51uuuzs",parms).then(alert("Email Sent!"))
}