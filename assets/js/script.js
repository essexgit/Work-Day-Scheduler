// Display the current day at the top of the calender when a user opens the planner.
var currentDay = moment().format('dddd Do MMMM YYYY');
$('#currentDay').text(currentDay);

// Save the entered text in local storage when the save button is clicked in that timeblock.
$(".saveBtn").on("click", function () {
    let time = $(this).siblings('.hour').attr('id');
    let textExtract = $(this).siblings('.time-block').val();
    localStorage.setItem(time, textExtract);
});

// load text from local storage using hour id as key reference
$(".hour").each(function () {
    let time = $(this).attr('id');
    let value = localStorage.getItem(time);
    $(this).siblings('.time-block').text(value);
});

// set text area colour based on current time
// get current time as number 24hr
let nowCheck = parseInt(moment().format('HH'));
// loop through rows and set background colour
$(".hour").each(function () {
    let timeText = $(this).text();

    let add2Time = 0;
    // convert to number & manage 24hr
    if (timeText.slice(-2) === 'PM' && timeText.slice(0, 2) !== '12') {

    }
    let time = parseInt(timeText.slice(0, 2));
    time = time + add2Time;
    let block = $(this).siblings('textarea');
    if (nowCheck > time) {
        block.addClass('past');
        block.removeClass('future');
        block.removeClass('present');
    } else if (nowCheck < time) {
        block.addClass('future');
        block.removeClass('past');
        block.removeClass('present');
    } else {
        block.addClass('present');
        block.removeClass('future');
        block.removeClass('past');
    }
});