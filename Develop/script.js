var ContainerEl = document.querySelector('#container');
var currentDay = document.querySelector('#currentDay');
var currentTime = moment().format('LLLL');
$('#currentDay').html(currentTime);

// function to save/set event description in local storage
$('.saveBtn').on('click', function(){
    var description = $(this).parent().siblings('td').children().val();
    var hour = parseInt($(this).parent().siblings('td').children().attr('id'));
    console.log(hour);
    window.localStorage.setItem(hour, description);
});

// retrieves the event from local storage
$('#8').val(window.localStorage.getItem('8'));
console.log(window.localStorage.getItem('8'));

// function to check event time
var checkTime = function() {
    $('input').each(function() {
        var timeNow = parseInt(moment().format('HH'));
        var eventHour = parseInt($(this).attr('id'));
    if(eventHour < timeNow) {
        $(this).addClass('past');
    }
    if (eventHour === timeNow) {
        $(this).addClass('present');
    }
    })
};
checkTime();