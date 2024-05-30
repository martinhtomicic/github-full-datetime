if (window.location.href.match(/^https:\/\/github\.com\/.*$/)) {
  function formatDateTime(date) {
    // Format the date part
    const datePart = date
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "2-digit",
      })
      .replace(",", ""); // Remove the comma

    // Format the time part
    const timePart = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    // Combine the date and time parts
    return `${datePart} ${timePart}`;
  }

  function updateRunTimeDisplay() {
    const timeElements = document.querySelectorAll("relative-time");

    console.log("Found time elements:", timeElements.length); // Debugging line

    timeElements.forEach((el) => {
      const fullTime = el.getAttribute("datetime");
      const localTime = formatDateTime(new Date(fullTime));
      if (fullTime && !el.classList.contains("full-time-updated")) {
        const newElement = document.createElement("div");
        newElement.textContent = `${localTime}`;
        // newElement.style.cssText = 'position: absolute; top: 0; left: 0;';
        el.parentElement.style = "position: relative; white-space: nowrap;";
        // Hide the relative time.
        // el.style = "display: none; visibility: hidden;";

        // Remove or hide the SVG element
        const svgElement = el.parentElement.querySelector(
          "svg.octicon-calendar",
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
