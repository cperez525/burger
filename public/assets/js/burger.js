$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var isDevoured = $(this).data("isdevoured");

    console.log(isDevoured)
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: isDevoured
    }).then(function () {
      
      location.reload();
    }
    );
  });

  $(".create-form").on("submit", function (event) {

    event.preventDefault();

    var newBurger = {
      name: $("#bgr").val().trim(),
    };

    console.log(newBurger)
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {

      location.reload();
    }
    );
  });
})