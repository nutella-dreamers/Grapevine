/**
 * Grapevine Project
 * Sandra Rodriguez
 * 2017 UCF Coding Bootcamp
 */

//Google Search Key - AIzaSyByJ2xR0StP_Name6BNMXY2tIUEc82X4eM
// wikipedia id in google search cx = '010171944163159885044:ommzsavsdkm';
/*
/*
 <script>
 // for google search
 (function() {
 var cx = '010171944163159885044:ommzsavsdkm';
 var gcse = document.createElement('script');
 gcse.type = 'text/javascript';
 gcse.async = true;
 gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
 var s = document.getElementsByTagName('script')[0];
 s.parentNode.insertBefore(gcse, s);
 })();
 </script>
 <gcse:search></gcse:search>
 */

    //$.param({'q': 'beyonce knowles'})
    //"q=beyonce%20knowles"

    /* var settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://www.googleapis.com/customsearch/v1?q=beyonce%20wikipedia&key=AIzaSyByJ2xR0StP_Name6BNMXY2tIUEc82X4eM&cx=010171944163159885044%3Aommzsavsdkm&fields=items(link)",
     "method": "GET",
     "headers": {
     "cache-control": "no-cache",
     "postman-token": "b6c11dce-ae86-cae6-4184-13f81fb111ae"
     }
     }
     */

    $("#actorButton").on("click", function (e) {
        e.preventDefault();

        // get input and replace spaces with %20
        var actorName = $("#actor-input").val().replace(/ /g, "%20");

        if(actorName) {
            $("#actor-input").empty;

            queryUrl = "https://www.googleapis.com/customsearch/v1?q=" + actorName + "%20wikipedia&key=AIzaSyByJ2xR0StP_Name6BNMXY2tIUEc82X4eM&cx=010171944163159885044%3Aommzsavsdkm&fields=items(link)";

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": queryUrl,
                "method": "GET",
                "headers": {
                    "cache-control": "no-cache",
                    "postman-token": "5c1085b0-051d-9a1e-b0e7-470c8ef53d8f"
                }
            }

            $.ajax(settings).done(function (response) {
                // check if anything was returned
                if (response.items) {
                    console.log(response);
                    console.log(response.items[0].link);

                    var win = window.open(response.items[0].link, '_blank');

                    if (win) {
                        //Browser has allowed it to be opened
                        win.focus();
                    } else {
                        //Browser has blocked it
                        alert('Please allow popups for this website');
                    }
                }
                else {
                    $("#errorResponse").html("No Entry found in Wikipedia.");
                }
            });
        }
        else
        {
            $("#actorButton").focus();
            $("#errorResponse").html("Please enter an actor's name.");
        }

    });

    function getWiki(actorName){
        // get input and replace spaces with %20
        var actorNameModified = actorName.replace(/ /g, "%20");

        if(actorNameModified) {

            queryUrl = "https://www.googleapis.com/customsearch/v1?q=" + actorNameModified + "%20wikipedia&key=AIzaSyByJ2xR0StP_Name6BNMXY2tIUEc82X4eM&cx=010171944163159885044%3Aommzsavsdkm&fields=items(link)";

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": queryUrl,
                "method": "GET",
                "headers": {
                    "cache-control": "no-cache",
                    "postman-token": "5c1085b0-051d-9a1e-b0e7-470c8ef53d8f"
                }
            }

            $.ajax(settings).done(function (response) {
                // check if anything was returned
                if (response.items) {
                   // console.log(response);
                   // console.log(response.items[0].link);

                    var win = window.open(response.items[0].link, '_blank');

                    if (win) {
                        //Browser has allowed it to be opened
                        win.focus();
                    } else {
                        //Browser has blocked it
                        alert('Please allow popups for this website');
                    }
                }
                else {
                    //$("#errorResponse").html("No Wikipedia found.");
                    return;  // add error here
                }
            });
        }
        else
        {
            return;
        }
    }