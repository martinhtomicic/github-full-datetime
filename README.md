# To Use This Extension

Follow this guide to install raw chrome extensions:
https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked

In short:
1. Download this repo to a folder locally.
2. Go to `chrome://extensions/`
3. Toggle on the Developer mode on the top right if you haven't.
4. Click "Load unpacked" button.
5. Select the downloaded folder. Click open.

Github community discussion: https://github.com/orgs/community/discussions/58663


## An Alternative Approach

Add this bookmark\
Name: Convert\
URL: `javascript:(function() %7B    var style %3D document.createElement(%27style%27)%3B    document.head.appendChild(style)%3B    var sheet %3D style.sheet%3B    sheet.addRule(%27time-ago:before,relative-time:before%27, %27content: attr(title)%3Bdisplay: block%3Bfont-size: 0.5rem%3B%27)%3B  %7D)()`

Click it to convert relative time to absolute time.