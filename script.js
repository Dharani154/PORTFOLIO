function sendMail()
{
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_gjy2eim","template_fuwfzwe0",parms).then(alert("Email Sent..!!!"))
}