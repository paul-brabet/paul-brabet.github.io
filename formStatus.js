$(function() {
  const HTMLForm = $('#ajax-contact')

  //Prevents <form> from submitting. AJAX will handle it instead
  $(HTMLForm).submit(function(event) {
    event.preventDefault()
    $("#form-zone").hide("slow")
    $("#sending").show("slow")

    const formData = $(HTMLForm).serialize()

    $.ajax({
        type: 'POST',
        url: $(HTMLForm).attr('action'),
        data: formData,
      })
      .done(function(response) {
        $("#sending").hide("slow")
        $("#success").show("slow")

        $('#name').val('')
        $('#email').val('')
        $('#message').val('')
      })
      .fail(function(response) {
        $("#sending").hide("slow")
        $("#error").show("slow")
        console.log(response)
      })
  })
})

$(function() {
  $("#send-another").click(function() {
    $('#name').val('')
    $('#email').val('')
    $('#message').val('')
    $("#success").hide("slow")
    $("#form-zone").show("slow")
  })
})

$(function() {
  $("#try-again").click(function() {
    $("#error").hide("slow")
    $("#form-zone").show("slow")
  })
})