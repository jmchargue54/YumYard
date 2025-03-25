var m_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var d_names = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get today's date
var myDate = new Date();
var curr_date = myDate.getDate();
var curr_month = myDate.getMonth();
var curr_day = myDate.getDay();

// Get tomorrow's date by adding 1 day to today's date
var tomorrow = new Date();
tomorrow.setDate(myDate.getDate() + 1);
var tomorrow_date = tomorrow.getDate();
var tomorrow_month = tomorrow.getMonth();
var tomorrow_day = tomorrow.getDay();

// Display both the dates
document.getElementById("curr-display").innerText =
  d_names[curr_day] + ", " + m_names[curr_month] + " " + curr_date;

document.getElementById("date-display").innerText =
  d_names[tomorrow_day] + ", " + m_names[tomorrow_month] + " " + tomorrow_date;
