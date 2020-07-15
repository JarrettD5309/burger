$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");

        var newDevourState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devoured", newDevourState.devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".undevour").on("click", function (event) {
        var id = $(this).data("id");

        var newDevourState = {
            devoured: false
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devoured", newDevourState.devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".burger-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim()
        };

        console.log("THIS: " + newBurger)

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});