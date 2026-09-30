document.getElementById('signupForm').onsubmit = function(e) {
    e.preventDefault(); 
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var location = document.getElementById('location').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    console.log({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        location: location,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    });
}