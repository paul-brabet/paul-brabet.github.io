$('.nav-button').click(function(e) {
  $('.nav-button').not(this).removeClass('pressed')
  $(this).toggleClass('pressed')
  e.preventDefault()
})