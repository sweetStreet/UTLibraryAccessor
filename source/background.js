chrome.browserAction.onClicked.addListener(function(tab) { 
    var tablink = tab.url;
    var newURL = "http://ezproxy.lib.utexas.edu/login?url=" + tablink;
    chrome.tabs.create({ url: newURL });
});