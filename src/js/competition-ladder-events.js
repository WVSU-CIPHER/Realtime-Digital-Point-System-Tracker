// Switch between tabs and handle showing/hiding sections
function switchTab(tab) {
    const sections = document.querySelectorAll(".container > section");
    const tabs = document.querySelectorAll("nav > .tab");

    // Hide the section that is not focused
    sections.forEach(section =>
        section.classList.toggle("hide", !section.classList.contains(tab))
    );

    // Set the tab button state when clicked
    tabs.forEach(t =>
        t.classList.toggle("tab-active", t.classList.contains(tab))
    );
};

// Toggle the dropdown visibility and rotate the chevron
function toggleDropdown() {
    const dropDownContent = document.getElementById("cl__drop-down-content");
    const dropDownBtn = document.getElementById("cl__drop-down-btn");
    const dropDownChev = document.querySelector(".cl__drop-down-chev-down");

    const isHidden = dropDownContent.classList.contains("hide");

    dropDownContent.classList.toggle("hide", !isHidden);
    dropDownContent.classList.toggle("show", isHidden);
    dropDownBtn.setAttribute("aria-expanded", isHidden);
    dropDownChev.classList.toggle("rotate-feedback", isHidden);
};

document.getElementById("cl__drop-down-btn").addEventListener("click", toggleDropdown);
