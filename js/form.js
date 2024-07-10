function sendEmail() {
          Email.send({
                    SecureToken: "c4e64a17-e633-4981-ae98-7db76437495f",
                    To: 'mlaishram38@gmail.com',
                    From: 'rajjitlai82@outlook.com',
                    Subject: "New Contact Form Enquiry",
                    Body: "Name: " + document.getElementById("name").value
                              + "<br> Email: " + document.getElementById("email").value
                              + "<br> Subject: " + document.getElementById("subject").value
                              + "<br> Message: " + document.getElementById("message").value
          }).then(
                    message => alert("Message Sent Successfully")
          );
}