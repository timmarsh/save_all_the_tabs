'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

  chrome.browserAction.setBadgeText({text: 'counting'});
chrome.tabs.query({}, function(t) {
  chrome.browserAction.setBadgeText({text: ''+t.length});
});
 


chrome.tabs.onCreated.addListener(function() {

chrome.tabs.query({}, function(t) {
  if(t.length % 10 == 0){

var opt = {
  type: "basic",
  title: "too many tabs ?",
  message: "is "+t.length+" too many tabs ?",
  iconUrl: "/images/icon-16.png"
};
  chrome.notifications.create("sattnid", opt, function(cbid){});

  }

  chrome.browserAction.setBadgeText({text: ''+t.length});
});
}


);

chrome.tabs.onRemoved.addListener(function() {

chrome.tabs.query({}, function(t) {
  chrome.browserAction.setBadgeText({text: ''+t.length});
});
}
);

