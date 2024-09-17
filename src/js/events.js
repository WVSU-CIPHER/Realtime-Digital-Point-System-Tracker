const completedBtn = document.getElementById('btn-completed');
const ongoingBtn = document.getElementById('btn-ongoing');
const upcomingBtn = document.getElementById('btn-upcoming');

const completedContent = document.getElementById('completed-events');
const ongoingContent = document.getElementById('ongoing-events');
const upcomingContent = document.getElementById('upcoming-events');

const buttons = document.querySelectorAll('.main__event-status a');

function clearActiveClasses() {
    buttons.forEach(btn => btn.classList.remove('main__active')); 
    completedContent.classList.remove('active');
    ongoingContent.classList.remove('active');
    upcomingContent.classList.remove('active');
}

completedBtn.addEventListener('click', function(e) {
    e.preventDefault();
    clearActiveClasses();
    completedBtn.classList.add('main__active'); 
    completedContent.classList.add('active');
});

ongoingBtn.addEventListener('click', function(e) {
    e.preventDefault();
    clearActiveClasses();
    ongoingBtn.classList.add('main__active');
    ongoingContent.classList.add('active');
});

upcomingBtn.addEventListener('click', function(e) {
    e.preventDefault();
    clearActiveClasses();
    upcomingBtn.classList.add('main__active');
    upcomingContent.classList.add('active');
});
