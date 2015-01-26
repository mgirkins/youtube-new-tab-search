chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (1<2)
    	chrome.tabs.create({"url": request.greeting,"active":true});
      sendResponse({farewell: "goodbye"});
  });