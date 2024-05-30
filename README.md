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

## Result

Displayed in 24-hour format.\
Under / After the relative time.\
Your brower's local timezone.\
<img width="149" alt="Screenshot 2024-05-30 at 11 44 44" src="https://github.com/BitSteve/github-full-datetime/assets/93230279/603ef4f4-a47e-4451-bef7-c6c22cbc2b24">


## An Alternative Approach

Add this bookmark\
Name: Convert\
URL: `javascript:(function() %7B    var style %3D document.createElement(%27style%27)%3B    document.head.appendChild(style)%3B    var sheet %3D style.sheet%3B    sheet.addRule(%27time-ago:before,relative-time:before%27, %27content: attr(title)%3Bdisplay: block%3Bfont-size: 0.5rem%3B%27)%3B  %7D)()`

Click it to convert relative time to absolute time.
