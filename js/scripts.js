$(document).ready(function() {
  $(".term").click(function() {
    $(".space").toggle();
    $(".hiddn").fadeToggle();
  });

  $(".carousel-control").click(function() {
    $(".hiddn").hide();
    $(".space").show();
  });

});

//Great idea putting your flashcards in a carousel! Saved a lot of time not having to add invidual jQuery strings for each item.
