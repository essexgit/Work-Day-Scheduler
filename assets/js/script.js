// Display the current day at the top of the calender when a user opens the planner.
var currentDay = moment().format('dddd Do MMMM YYYY');
$('#currentDay').text(currentDay);

// save current day to localStorage 
// set element root as container for rows
let listRoot = $('.container');
// set row section
let rowSection = $('<div>');
rowSection.addClass('row');
// set time place
let hour = $('<div>');
hour.addClass('hour');
//set textarea
let timeBlock = $('<textarea>');
timeBlock.addClass('timeBlock');
//set save button
let save = $('<button>');
save.addClass('saveBtn');


// put main into local if empty or if local day != current day
if (!localStorage.busObj) {
    localStorage.setItem('busObj', JSON.stringify(businessDayObj));
}

//  set main to local
businessDayObj = JSON.parse(localStorage.getItem('busObj'));

// Present timeblocks for standard business hours when the user scrolls down.
//create row
function createRow() {

}

// append rows for workday

//  set text from main



// loop through main object to populate rows

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


// Save the event in local storage when the save button is clicked in that timeblock.