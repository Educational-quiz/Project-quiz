$(function () {
  var loginForm = $("#loginForm"); //assign HTML login form to variable loginForm
  var signupForm = $("#signUpForm"); //assign HTML signUp form to variable signupForm

  signupForm.on("submit", function (event) {
    //excute this function when we click on submit input
    event.preventDefault();
    var firstName = $("#firstName").val(); //assign the values of inputs to variables
    var lastName = $("#lastName").val();
    var email = $("#Email").val();
    var password = $("#Psw").val();
    var user = {
      //inserting the values of inputs into an object
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    var users = getLocalStorageItem("users") || []; //retrives the user data from local storage or set value to empty array if user doesn't exist
    users.push(user); //push our user inside the array
    setLocalStorageItem("users", users); //store the array user inside the local storage
    window.location.href = "SignIn.html"; //redirect as to signIn html page
  });
  loginForm.on("submit", function (event) {
    //excute this function when we click on submit input
    event.preventDefault();
    var email = $("#email").val(); //assign the values of inputs to variables
    var password = $("#psw").val();
    var users = getLocalStorageItem("users") || []; //retrives the user data from local storage or set value to empty array if user doesn't exist
    var user = findUser(users, email, password); //verify if our user exist

    if (user) {
      window.location.href = "../HTML/Home.html"; //redirect as to home html page
    } else {
      alert("Invalid Email or password");
    }
  });
  function getLocalStorageItem(key) {
    //retrives the value of our key from local storage as a string
    return JSON.parse(localStorage.getItem(key)); //use JSON method to convert the value string to an object
  }
  function setLocalStorageItem(key, value) {
    //store the value in the local storage from a specific key
    localStorage.setItem(key, JSON.stringify(value)); //use JSON method to convert the value as on object to a string
  }
  function findUser(users, email, password) {
    //Loop over the array and check the values of
    for (var index = 0; index < users.length; index++) {
      //the keys if the exist in the user object
      if (users[index].email === email && users[index].password === password) {
        return users[index];
      }
    }
    return null; //indicates that user was not found to display error message
  }
});
