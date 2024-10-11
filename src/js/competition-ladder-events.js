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
    const dropDownContent = document.getElementById("cl--drop-down-content");
    const dropDownBtn = document.getElementById("cl--drop-down-btn");
    const dropDownChev = document.querySelector(".cl--drop-down-chev-down");

    const isHidden = dropDownContent.classList.contains("hide");

    dropDownContent.classList.toggle("hide", !isHidden);
    dropDownContent.classList.toggle("show", isHidden);
    dropDownBtn.setAttribute("aria-expanded", isHidden);
    dropDownChev.classList.toggle("rotate-feedback", isHidden);
};



const desktopEventItems = document.querySelectorAll(".cl--event-item");

desktopEventItems.forEach((ei) => {

    ei.addEventListener("click", (e) => {
        // Remove 'active' class from all event items
        desktopEventItems.forEach(item => item.classList.remove("active"));
        // Add 'active' class for selected item
        ei.classList.toggle("active");

    })
}
);

const mobileEventItems = document.querySelectorAll(".cl--drop-down-content-item")
mobileEventItems.forEach(ei => {
    ei.addEventListener("click", (e) => {
        mobileEventItems.forEach(item => item.classList.remove("active"));

        ei.classList.toggle("active")
    })
})



document.getElementById("cl--drop-down-btn").addEventListener("click", toggleDropdown);
