document.getElementById("go").addEventListener("click", function () {
  var firstHref = "https://justin226.github.io/cfda";
  
  console.log(firstHref);
  
  chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    
});
