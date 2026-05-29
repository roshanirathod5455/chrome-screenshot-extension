document.getElementById("captureBtn").addEventListener("click", async () => {

```
const status = document.getElementById("status");

status.innerText = "Capturing screenshot...";

let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
});

chrome.tabs.captureVisibleTab(null, { format: "png" }, function(dataUrl) {

    const link = document.createElement("a");

    link.href = dataUrl;

    link.download = "screenshot.png";

    link.click();

    status.innerText = "Screenshot Downloaded!";
});
```

});
