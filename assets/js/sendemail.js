function sendMail(contactForm) {
    emailjs.send("outlook","rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("ERROR", error);
        });
}