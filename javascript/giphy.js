
        $(document).ready(function () {

            //**DONE** Create for each loop that creates a new button for each item in the array when the page is loaded

            var topics = ["laugh", "cry"];

            for (var i = 0; i < topics.length; i++) {

                let a = $("<button>");

                a.text(topics[i])

                $("#topicButton").append(a);
            }



            for (var i = 0; i < topics.length; i++) {               //**trying to add data-person to each new button
                $("<button>").attr("data-person", topics)
            }                                                            //**



        });                                                                                     //end doc







