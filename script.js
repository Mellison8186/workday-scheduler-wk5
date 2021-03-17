var ContainerEl = document.querySelector("#container");
var currentDay = document.querySelector("#currentDay");
var currentTime = moment().format("LLLL");
$("#currentDay").html(currentTime);

// function to save/set event description in local storage
$(".saveBtn").on("click", function () {
  var description = $(this).parent().siblings("td").children().val();
  var hour = parseInt($(this).parent().siblings("td").children().attr("id"));
  console.log(hour);
  window.localStorage.setItem(hour, description);
});

// retrieves event from local storage -- vv copy for each hour
$("#8").val(window.localStorage.getItem("8"));
console.log(window.localStorage.getItem("8"));

$("#9").val(window.localStorage.getItem("9"));
console.log(window.localStorage.getItem("9"));

$("#10").val(window.localStorage.getItem("10"));
console.log(window.localStorage.getItem("10"));

$("#11").val(window.localStorage.getItem("11"));
console.log(window.localStorage.getItem("11"));

$("#12").val(window.localStorage.getItem("12"));
console.log(window.localStorage.getItem("12"));

$("#13").val(window.localStorage.getItem("13"));
console.log(window.localStorage.getItem("13"));

$("#14").val(window.localStorage.getItem("14"));
console.log(window.localStorage.getItem("14"));

$("#15").val(window.localStorage.getItem("15"));
console.log(window.localStorage.getItem("15"));

$("#16").val(window.localStorage.getItem("16"));
console.log(window.localStorage.getItem("16"));

$("#17").val(window.localStorage.getItem("17"));
console.log(window.localStorage.getItem("17"));

// function to check timeNow against eventHour time
var checkTime = function () {
  $("input").each(function () {
    var timeNow = parseInt(moment().format("HH"));
    var eventHour = parseInt($(this).attr("id"));
    if (eventHour < timeNow) {
      $(this).addClass("past");
    }
    if (eventHour === timeNow) {
      $(this).addClass("present");
    }
    if (eventHour > timeNow) {
      $(this).addClass("future");
    }
  });
};
checkTime();
