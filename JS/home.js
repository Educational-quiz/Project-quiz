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
      var leaderboardList = $("#leaderboardList");
      for (var i = 0; i < users.length; i++) {
        leaderboardList.append(`<li>${users[i].firstName} - Score: ${users[i].score}</li>`);
      }
      function getLocalStorageItem(key) {
        return JSON.parse(localStorage.getItem(key));
      }
})