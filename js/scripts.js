$(document).ready(function() {
  $(".term").click(function() {
    $(".hiddn").fadeToggle();
  });

  $(".carousel-control").click(function() {
    $(".hiddn").hide();
  });

});

//Great idea putting your flashcards in a carousel! Saved a lot of time not having to add invidual jQuery strings for each item.
