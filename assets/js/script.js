// Display the current day at the top of the calender when a user opens the planner.
var currentDay = moment().format('dddd Do MMMM YYYY');
$('#currentDay').text(currentDay);
// Present timeblocks for standard business hours when the user scrolls down.

//check local storage

//  Load timeline for the day and time blocks for each hour beside the timeline;
var nowCheck = moment();
var time1 = moment('23', 'hh');

//setting colour base on time
var gap = time1.diff(nowCheck, 'hours');
$('#hour1').text(gap);
console.log(gap);
var timeBlock1 = document.querySelector(".time-block");
if (gap < 0) {
    timeBlock1.classList.add('past');
} else if (gap > 0) {
    timeBlock1.classList.add('future');
} else {
    timeBlock1.classList.add('present');
}




// Color - code each timeblock based on past, present, and future when the timeblock is viewed.
// Set the colour of the time blocks to past present or future, (grey, red, green)

// Allow a user to enter an event when they click a timeblock
// make box a submit form

// Allow the time block to have text entered

// Save the event in local storage when the save button is clicked in that timeblock.
// Connect a save button to save content into local storage

// Collect existing content from local storage when page loads.

// Persist events between refreshes of a page;