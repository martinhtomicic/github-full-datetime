if (window.location.href.match(/^https:\/\/github\.com\/.*$/)) {
  function formatDateTime(date) {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const str = new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
    return str;
  }

  function updateRunTimeDisplay() {
    const timeElements = document.querySelectorAll("relative-time");

    console.log("Found time elements:", timeElements.length); // Debugging line

    timeElements.forEach((el) => {
      const fullTime = el.getAttribute("datetime");
      const localTime = formatDateTime(new Date(fullTime));
      if (fullTime && !el.classList.contains("full-time-updated")) {
        const newElement = document.createElement("div");
        const previousSibling = el.previousSibling;
        const space =
          previousSibling &&
          previousSibling.nodeType === Node.TEXT_NODE &&
          previousSibling.textContent.trim() !== ""
            ? " "
            : "";
        newElement.textContent = `${space}${localTime}`; // Add a space before the date if necessary - used e.g. when looking at commits.
        newElement.style.fontSize = "12px"; // A little smaller to fix the layout.
        el.parentElement.style = "position: relative; white-space: nowrap;";

        // Remove or hide the SVG element
        const svgElement = el.parentElement.querySelector(
          "svg.octicon-calendar"
        );
        if (svgElement) {
          svgElement.style.display = "none"; // Hide the SVG element
        }

        // Insert the new element into the DOM
        el.parentElement.insertBefore(newElement, el.nextSibling);
        el.classList.add("full-time-updated");
      }
    });
  }

  function hasClassWithSuffix(suffix) {
    const allElements = document.querySelectorAll("*");

    counter = 0;
    for (const element of allElements) {
      for (const className of element.classList) {
        if (className.endsWith(suffix)) {
          counter++;
          if (counter > 5) {
            return true;
          }
        }
      }
    }

    return false;
  }

  function checkForChanges() {
    const result = hasClassWithSuffix("full-time-updated");
    if (!result) {
      updateRunTimeDisplay();
    }
  }

  // Initial call to update the display
  updateRunTimeDisplay();

  // Set up a polling mechanism to check for changes every 2 seconds
  setInterval(checkForChanges, 2000);
}
