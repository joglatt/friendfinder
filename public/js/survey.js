    $("#submit").on("click", function (event) {
        event.preventDefault();
        var newFriend = {
            name: $("#name").val().trim().replace(/\s+/g, "").toLowerCase(),
            array: [$("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
            ]
        }
        console.log(newFriend);

        $.post("/api/friends", newFriend,
            function (data) {
                console.log("created")


                $("#name").val("");
                $("#q1").val("");
                $("#q2").val("");
                $("#q3").val("");
                $("#q4").val("");
                $("#q5").val("");
                $("#q6").val("");
                $("#q7").val("");
                $("#q8").val("");
                $("#q9").val("");
                $("#q10").val("");
                $("#modal").show();
                $("#container").hide();

            });

        var currentURL = window.location.origin;

        // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
        $.ajax({ url: currentURL + "/api/friends", method: "GET" })
            .then(function (friendData) {
                // Here we are logging the URL so we have access to it for troubleshooting
                console.log("------------------------------------");
                console.log("URL: " + currentURL + "/api/friends");
                console.log("------------------------------------");

                // Here we then log the NYTData to console, where it will show up as an object.
                console.log(friendData);
                console.log("------------------------------------");
                var friend;

                (function differences() {
                    var total;
                    // loops through objects
                    for (var j = 0; j < friendData.length - 1; j++) {
                        total = 0;
                        //loops through arrays
                        for (var k = 0; k < friendData[j].array.length; k++) {
                            total += Math.abs(
                                friendData[friendData.length - 1].array[k] - friendData[j].array[k]
                            );
                            friendData[j].difference = total;

                        }
                    }
                    var temp = friendData[0].difference;
                    friend = friendData[0].name;
                    for (var i = 0; i < friendData.length - 1; i++) {
                        if (friendData[i].difference < temp) {
                            temp = friendData[i].difference;
                            friend = friendData[i].name;
                        }
                        console.log(friend);
                    }


                })()




                // Create the HTML Well (Section) and Add the table content for each reserved tabl
                $("#modal-content").append("<h2>" + "Your New Friend is: " + friend + "</h2>");
            });
    });

    $("#close").on("click", function (event) {
        $("#modal").hide();
        $("#container").show();
    });