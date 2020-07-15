$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
  
      var newDevourState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devoured", newDevourState.devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});