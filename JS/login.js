$(function() {
    var loginForm = $("#loginForm");
    var signupForm = $("#signUpForm");

    signupForm.on("submit", function(event) {
        event.preventDefault();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var email = $("#Email").val();
        var password = $("#Psw").val();
        var user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        var users = getLocalStorageItem("users") || [];
        users.push(user);
        setLocalStorageItem("users", users);
        window.location.href="SignIn.html"

    });   
    loginForm.on("submit", function (event) {
        event.preventDefault();
        var email = $("#email").val();
        var password = $("#psw").val();
        var users = getLocalStorageItem("users") || [];
        var user = findUser(users, email, password);

        if (user) {
            window.location.href="../HTML/Home.html"
        }
        else {
            alert("Invalid Email or password");
        }
    });
    function getLocalStorageItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    function setLocalStorageItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    function findUser(users, email, password) {
        for (var index = 0; index < users.length; index++) {
            if(users[index].email === email && users[index].password === password) {
                return users[index];
            }            
        }
        return null;
    }
})