var get_pokable_tab = function(){
  setInterval(function(){
      chrome.tabs.query({}, function(tabs){
      tabs.map(function(tab){
        if (tab.url.indexOf("/pokes") !== -1){
          chrome.tabs.executeScript(tab.id, {file:"poker.js"})
        };
      });
    });
  },2000);
}

chrome.windows.onCreated.addListener(get_pokable_tab);
chrome.tabs.onCreated.addListener(get_pokable_tab);

