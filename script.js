$(function () {
  let currentDay = dayjs().format('D MMM YYYY');
  $('#currentDay').text(currentDay);

  $('.time-block').each(function() {
    let hour = parseInt($(this).attr('id').split('-')[1]);
    let currentHour = dayjs().hour();
  
    // Convert hour to 24-hour format
    if (hour < 9) { 
      hour += 12;
    }
    $(this).removeClass('past present future');

    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }

    let event = localStorage.getItem('hour-' + hour);
    if (event) {
      $(this).find('.description').val(event);
    }
  });

  $('.saveBtn').click(function() {
    let hour = $(this).parent().attr('id').split('-')[1];
    let event = $(this).siblings('.description').val();

    localStorage.setItem('hour-' + hour, event);
  });
});
