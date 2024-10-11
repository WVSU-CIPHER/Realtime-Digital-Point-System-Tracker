function switchTab(tab) {
    const standingSection = document.getElementById('cl-standing');
    const bracketSection = document.getElementById('cl-bracket');

    const standingTab = document.getElementById('standing-tab-btn');
    const bracketingTab = document.getElementById('bracketing-tab-btn');

    if (tab === 'standing') {
        standingSection.classList.remove('hide');
        bracketSection.classList.add('hide');

        standingTab.classList.add('tabActive');
        bracketingTab.classList.remove('tabActive');
    } else { // 'else focus on brackets'
        standingSection.classList.add('hide');
        bracketSection.classList.remove('hide');

        standingTab.classList.remove('tab-active');
        bracketingTab.classList.add('tabActive');
    }
}

function toggleDropdown() {
    const dropDownContent = document.getElementById("cl-drop-down-content");
    const dropDownBtn = document.getElementById("cl-drop-down-btn");
    const dropDownChev = document.querySelector(".cl-drop-down-chev-down");

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

document.getElementById("clDropDownBtn").addEventListener("click", toggleDropdown);
