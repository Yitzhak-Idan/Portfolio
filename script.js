document.querySelectorAll('button1').forEach(button => {
    button.addEventListener('click', function() {
        alert(`going to ${this.textContent} page!`); // Displays alert on button click
    });
});

// Placeholder for any interactive functionality
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.icon').forEach(icon => {
        icon.addEventListener('click', () => {
            alert('You clicked on a recommended VM icon!'); // Interaction example
        });
    });
});

document.getElementById('sendEmailButton').onclick = function() {
            Email.send({
                Host: "smtp.your-email-provider.com",
                Username: "your-email@example.com",
                Password: "your-password",
                To: 'idanmatonda@gmail.com',
                From: "your-email@example.com",
                Subject: "This is the subject",
                Body: "This is the body of the email",
            })
            .then(function (message) {
                alert("Email sent successfully");
            })
            .catch(function (error) {
                alert("There was an error sending the email: " + error);
            });
};
