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
    var ID = getLocalStorageItem('currentUser');
    if (users[ID].totalScore !== null) {
      $("#takeQuizButton").text("Retake Quiz");
    }
    for (var i = 0; i < users.length; i++) {
      if(users[i].totalScore !== null) {
        $("#leaderbordList").append("<li>"+ users[i].username + " - Score: " + users[i].totalScore + " %" +"</li>");
      }
    }
    function getLocalStorageItem(key) {
      return JSON.parse(localStorage.getItem(key));
    }
    function getLocalStorageItem(key) {
      return JSON.parse(localStorage.getItem(key));
    }
})


