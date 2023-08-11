$(function () {
  var loginForm = $("#loginForm"); //assign HTML login form to variable loginForm
  var signupForm = $("#signUpForm"); //assign HTML signUp form to variable signupForm


  signupForm.on("submit", function (event) {
    //excute this function when we click on submit input
    var firstName = $("#firstName").val(); //assign the values of inputs to variables
    var lastName = $("#lastName").val();
    var email = $("#Email").val();
    var password = $("#Psw").val();
    var username = $("#username").val();
    var users = getLocalStorageItem("users") || []; //retrives the user data from local storage or set value to empty array if user doesn't exist  
    event.preventDefault();
    if (!validUsername(users, username) && !validEmail(users, email) && validPassword (password)) {
      var user = {
      //inserting the values of inputs into an object
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
      mathScore:0,
      englishScore:0,
      geographyScore:0,
      scienceScore:0,
      historyScore:0,
      totalScore: null
      };
      users.push(user); //push our user inside the array
      setLocalStorageItem("users", users); //store the array user inside the local storage
    
      alert("Successfully Signed Up");
      window.location.href = "SignIn.html"; //redirect as to signIn html page
    }
    else if (validUsername(users, username) && validEmail(users, email)) {
      alert ("Email and username already exists");
    }
    else if (validUsername(users, username)) {
      alert ("Username already exists");
    }
    else if (validEmail(users, email)) {
      alert ("Email already exists");
    }
    else if (!validPassword(password)){
      alert ("Password must be longer than 6");
    }
  });
  loginForm.on("submit", function (event) {
    //excute this function when we click on submit input
    event.preventDefault();
    var email = $("#email").val(); //assign the values of inputs to variables
    var password = $("#psw").val();
    var users = getLocalStorageItem("users") || []; //retrives the user data from local storage or set value to empty array if user doesn't exist
    var user = findUser(users, email, password); //verify if our user exist

    if (user) {
      alert("Successfully Signed In")
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
    //the keys if exists in the user object
    for (var index = 0; index < users.length; index++) {
      if (users[index].email === email && users[index].password === password) {
        localStorage.setItem('currentUser', JSON.stringify(index))
        return users[index];
      }
    }
    return null; //indicates that user was not found to display error message
  }
  function validUsername (users,username)  {
    var exist = false;
    for (var index = 0; index < users.length; index++) {
      if(users[index].username === username) {
        exist = true;
      }
    }
    return exist;
  }
  function validEmail (users, email)  {
    var exist = false;
    for (var index = 0; index < users.length; index++) {
      if(users[index].email === email) {
        exist = true;
      }
    }
    return exist;
  }
  function validPassword (password)  {
    if (password.length >= 6) {
      return true
    }
    else {
      return false
    }
  }    
});

 
