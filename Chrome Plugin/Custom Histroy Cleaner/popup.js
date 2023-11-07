var blacklist = ["youtube.com"];

document.addEventListener("DOMContentLoaded", function() {
  // Your code here
  document.getElementById("deleteHistoryBtn").addEventListener("click", function() {
    chrome.runtime.sendMessage({ action: "deleteHistory", blacklist: blacklist });
  });
});

