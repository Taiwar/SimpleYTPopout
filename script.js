chrome.browserAction.onClicked.addListener(function(activeTab){
    chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
        var url = tabs[0].url;
        var is_yt = /youtube.com\/watch/;
        if (is_yt.test(url)){
            var vid_id_regex = /v?=(.*)/;
            var vid_id = vid_id_regex.exec(url)[1];
            if(vid_id.length > 11){
                vid_id = /v?=(.*)&/.exec(url)[1];
            }
            chrome.windows.create({'url': 'https://www.youtube.com/tv?vq=medium#/watch/video/control?v=' + vid_id + "&resume", 'type': 'popup'}, function(window) {

            });
        }
    });
});

