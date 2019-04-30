
$(document).ready(function () {

    //**DONE** Create for each loop that creates a new button for each item in the array when the page is loaded

    var topics = ["Laugh", "Cry", "Jump", "Sit", "Cat", "Dog", "Fun", "Boring", "Rain", "Sun", "Left", "Right", "Big", "Small", "Yum", "Eww", "Disney", "DreamWorks"];

    function seeGifs() {
        var gifItems = $(this).attr("data-name")

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +

            gifItems + "&api_key=NqLYJSa8F6JZSHyUV9m2auX6Bs03cJ8P&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                console.log(response)

                $("showGif").empty()

                var responseArray = response.data

                responseArray.forEach(function (responseItem) {
                    console.log(responseItem.images.fixed_height.url)

                    var newImageDiv = $("<div>")

                    var myImage = $("<img>")

                    myImage.attr("src", responseItem.images.fixed_height.url)
                    myImage.addClass("myGif")

                    newImageDiv.append(myImage)

                    var ratingPlace = $("<div>")
                    ratingPlace.text("Rating: " + responseItem.rating)

                    newImageDiv.append(ratingPlace)

                    $("#showGif").append(newImageDiv)
                })
            })
    }

    function displayButtons() {

        $("#showButton").empty();

        topics.forEach(function (topicsItems) {
            var newButton = $("<button>")
            newButton.addClass("oppositeGif")
            newButton.attr("data-name", topicsItems)
            newButton.text(topicsItems)

            $("#showButton").append(newButton)
        })
    }

    $(".findGif").on('click', function (event) {

        event.preventDefault()

        var userChoice = $("#userChoice").val().trim()

        topics.push(userChoice)

        displayButtons()
    })

    displayButtons()

    $(document).on('click', ".oppositeGif", seeGifs)

})

