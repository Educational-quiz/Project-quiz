$(function () {
  $("#logoutButton").click(function () {
      window.location.href = "../HTML/SignIn.HTML";
    });
    $("#takeQuizButton").click(function () {
      window.location.href = "../HTML/Form.HTML";
    });
    var users = getLocalStorageItem("users") || [];
    users.sort(function (a, b) {
      return b.score - a.score;
    });
    var leaderboardList = $("#leaderbordList");
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      console.log(user);
      $("#leaderbordList").append("<li>"+ user.firstName + " - Score: " + user.totalScore +"</li>");
    }
    function getLocalStorageItem(key) {
      return JSON.parse(localStorage.getItem(key));
    }
})