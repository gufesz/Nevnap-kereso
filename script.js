document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector('button[type="button"]');
    function searchName() {
      var inputName = document.querySelector('input[type="text"][name="keresztnév"]').value;
      var inputDate = document.querySelector('input[type="date"][name="kereszt-datum"]').value;
      
      var nameResult = "";
      var dateResult = "";
      
      var dateParts = inputDate.split("-");
      var month = parseInt(dateParts[1]);
      var day = parseInt(dateParts[2]);
      
      for (var i = 1; i <= 12; i++) {
        var monthNames = honapok[i];
        for (var j = 1; j < monthNames.length; j++) {
          if (monthNames[j].toLowerCase().includes(inputName.toLowerCase())) {
            nameResult += monthNames[j] + "<br>";
          }
          if (i == month && j == day) {
            dateResult += monthNames[j] + "<br>";
          }
        }
      }
      
      var result = "";
      if (nameResult != "") {
        result += "Names found: <br>" + nameResult;
      }
      if (dateResult != "") {
        result += "Name found on date: <br>" + dateResult;
      }
      
      document.getElementById("datum").innerHTML = result;
    }
    
    button.addEventListener("click", searchName);
  });
  