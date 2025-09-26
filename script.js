// Smooth scroll for navbar or buttons
$(document).ready(function(){
  $("a[href^='#']").on('click', function(e) {
    e.preventDefault();
    var target = this.hash;
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
  });

  // Ticket booking form submission
  $("#ticketForm").submit(function(e){
    e.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();
    let tickets = $("#tickets").val();

    alert(`🎟️ Thank you, ${name}! You have successfully booked ${tickets} ticket(s). A confirmation has been sent to ${email}.`);

    // close modal after submission
    $("#ticketModal").modal('hide');
    $("#ticketForm")[0].reset();
  });
});
