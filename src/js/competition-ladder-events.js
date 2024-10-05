function switchTab(tab) {
    const standingSection = document.getElementById('cl__standing');
    const bracketSection = document.getElementById('cl__bracket');

    const standingTab = document.getElementById('standing-tab-btn');
    const bracketingTab = document.getElementById('bracketing-tab-btn');

    if (tab === 'standing') {
        standingSection.classList.remove('hide');
        bracketSection.classList.add('hide');

        standingTab.classList.add('tab-active');
        bracketingTab.classList.remove('tab-active');
    } else { // 'else focus on brackets'
        standingSection.classList.add('hide');
        bracketSection.classList.remove('hide');

        standingTab.classList.remove('tab-active');
        bracketingTab.classList.add('tab-active');
    }
}

function toggleDropdown() {
    const dropDownContent = document.getElementById("cl__drop-down-content");
    const dropDownBtn = document.getElementById("cl__drop-down-btn");
    const dropDownChev = document.querySelector(".cl__drop-down-chev-down");

    if (dropDownContent.classList.contains("hide")) {
        dropDownContent.classList.remove("hide");
        dropDownContent.classList.add("show");
        dropDownBtn.setAttribute("aria-expanded", "true");
        dropDownChev.classList.add("rotate-feedback");
    } else {
        dropDownContent.classList.remove("show");
        dropDownContent.classList.add("hide");
        dropDownBtn.setAttribute("aria-expanded", "false");
        dropDownChev.classList.remove("rotate-feedback");
    }
}

document.getElementById("cl__drop-down-btn").addEventListener("click", toggleDropdown);
