function switchTab(tab) {
    const standingSection = document.getElementById('clStanding');
    const bracketSection = document.getElementById('clBracket');

    const standingTab = document.getElementById('standingTabBtn');
    const bracketingTab = document.getElementById('bracketingTabBtn');

    if (tab === 'standing') {
        standingSection.classList.remove('hide');
        bracketSection.classList.add('hide');

        standingTab.classList.add('tabActive');
        bracketingTab.classList.remove('tabActive');
    } else { // 'else focus on brackets'
        standingSection.classList.add('hide');
        bracketSection.classList.remove('hide');

        standingTab.classList.remove('tabActive');
        bracketingTab.classList.add('tabActive');
    }
}

function toggleDropdown() {
    const dropDownContent = document.getElementById("clDropDownContent");
    const dropDownBtn = document.getElementById("clDropDownBtn");
    const dropDownChev = document.querySelector(".clDropdownChevDown");

    if (dropDownContent.classList.contains("hide")) {
        dropDownContent.classList.remove("hide");
        dropDownContent.classList.add("show");
        dropDownBtn.setAttribute("ariaExpanded", "true");
        dropDownChev.classList.add("rotate-feedback");
    } else {
        dropDownContent.classList.remove("show");
        dropDownContent.classList.add("hide");
        dropDownBtn.setAttribute("ariaExpanded", "false");
        dropDownChev.classList.remove("rotateFeedback");
    }
}

document.getElementById("clDropDownBtn").addEventListener("click", toggleDropdown);
