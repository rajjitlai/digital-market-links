function sendEmail() {
          Email.send({
                    SecureToken: "c4e64a17-e633-4981-ae98-7db76437495f",
                    To: 'mlaishram38@gmail.com',
                    From: 'rajjitlai82@outlook.com',
                    Subject: "New Comment",
                    Body: "Name: " + document.getElementById("name").value
                              + "<br> Email: " + document.getElementById("email").value                             
                              + "<br> Comment: " + document.getElementById("comment").value
          }).then(
                    message => alert("Message Sent Successfully")
          );
}