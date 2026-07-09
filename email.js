function sendEmail(event) {
    var params = {
        name: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone_number").value,
    };
    event.preventDefault();         


const serviceID = "service_ep1c8db";    
const templateID = "template_jx2jmvk";  
emailjs.send(serviceID, templateID, params) 
    .then((res) => {                
        document.getElementById("fullname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone_number").value = "";
        console.log(res);
        alert("Your message sent successfully!!");  
        document.getElementById("email-status").innerText = "Your message sent successfully!!";
        

    })
    .catch((err) => console.log(err));
}
