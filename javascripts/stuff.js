$(function() {

  var one_day       = 60 * 60 * 24 * 1000
  ,   today         = new Date()
  ,   end_of_world  = new Date(2012, 11, 21)
  ,   days_left     = Math.round(Math.abs((end_of_world.getTime() - today.getTime()) / one_day));

  $('#doomsday-counter').text(days_left + ' days');

});