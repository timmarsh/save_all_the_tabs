'use strict';
//TODO - dont close main window


chrome.bookmarks.create({
        'title': 'SaveAllTheTabs'
    },
    function (newFolder) {
        //console.log("added folder: " + newFolder.title);




        chrome.tabs.query({}, function (t) {
            t.forEach(
                function (val, index) {

                    chrome.bookmarks.create({
                        'parentId': newFolder.id,
                        'title': val.title,
                        'url': val.url
                    });


                    //console.log(val.title);
                    //console.log(val.url);
                    //put in logic for last tab here
                    chrome.tabs.remove(val.id);
                }
            );
            chrome.tabs.create({},function(){});
        });

    });