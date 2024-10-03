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
    } else if (tab === 'bracketing') {
        standingSection.classList.add('hide');
        bracketSection.classList.remove('hide');

        standingTab.classList.remove('tab-active');
        bracketingTab.classList.add('tab-active');
    }
}

