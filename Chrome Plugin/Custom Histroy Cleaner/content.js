// Check if the current website matches the blacklist
var blacklist = ["youtube.com"]; // Add your blacklist here
var currentUrl = window.location.href;

if (blacklist.some(url => currentUrl.includes(url))) {
  chrome.runtime.sendMessage({ action: "deleteHistory", blacklist: blacklist });
}

