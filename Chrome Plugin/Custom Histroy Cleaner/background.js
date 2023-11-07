chrome.runtime.onInstalled.addListener(function() {
  console.log("History Cleaner Extension Installed");
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "deleteHistory") {
    var blacklist = request.blacklist;
    
    // Iterate over the blacklist items and delete history for each item
    blacklist.forEach(function(item) {
      chrome.history.search({text: item}, function(results) {
        for (var i = 0; i < results.length; i++) {
          chrome.history.deleteUrl({url: results[i].url});
        }
      });
    });
  }
});

