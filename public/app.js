function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value, 
        subject: document.getElementById("subject").value,
    };
    const serviceID = "service_b060d3t";
    const templateID = "template_7pb048c"

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("subject").value = "";
        console.log(res);

        alert("your form submit successfull");
    }
)
.catch((err)=> console.log(err)); 
}

