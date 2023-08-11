$(function () {
  $("#logoutButton").click(function () {
      window.location.href = "../HTML/SignIn.HTML";
    });
    $("#takeQuizButton").click(function () {
      window.location.href = "../HTML/Form.HTML";
    });
    var users = getLocalStorageItem("users") || [];
    users.sort(function (a, b) {
      return b.totalScore - a.totalScore;
    });
    for (var i = 0; i < users.length; i++) {
      if(users[i].totalScore !== null) {
        $("#leaderbordList").append("<li>"+ users[i].firstName + " - Score: " + users[i].totalScore + " %" +"</li>");
      }
    }
    function getLocalStorageItem(key) {
      return JSON.parse(localStorage.getItem(key));
    }
    var users = getLocalStorageItem("users") || []
    var ID = getLocalStorageItem("currentUser");
    function getLocalStorageItem(key) {
      return JSON.parse(localStorage.getItem(key));
    }
})


