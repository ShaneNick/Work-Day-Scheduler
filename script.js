$(function () {
  // Display the current date in the header of the page.
  let currentDay = dayjs().format('D MMM YYYY');
  $('#currentDay').text(currentDay);

  $('.time-block').each(function() {
    let hour = parseInt($(this).attr('id').split('-')[1]);
    let currentHour = dayjs().hour();
  
    // Convert hour to 24-hour format
    if (hour < 9) { // if hour is less than 9 (i.e., 1-8), it's in the afternoon
      hour += 12;
    }
    // Remove any existing classes
    $(this).removeClass('past present future');

    // Add appropriate class
    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }

    // Get any saved events from local storage
    let event = localStorage.getItem('hour-' + hour);
    if (event) {
      $(this).find('.description').val(event);
    }
  });

  // Add a listener for click events on the save button
  $('.saveBtn').click(function() {
    let hour = $(this).parent().attr('id').split('-')[1];
    let event = $(this).siblings('.description').val();

    // Save the event in local storage
    localStorage.setItem('hour-' + hour, event);
  });
});
