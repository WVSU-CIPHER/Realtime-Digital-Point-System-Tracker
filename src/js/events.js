// Active events
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

completedBtn.addEventListener('click', function (e) {
    e.preventDefault();
    clearActiveClasses();
    completedBtn.classList.add('main__active');
    completedContent.classList.add('active');
});

ongoingBtn.addEventListener('click', function (e) {
    e.preventDefault();
    clearActiveClasses();
    ongoingBtn.classList.add('main__active');
    ongoingContent.classList.add('active');
});

upcomingBtn.addEventListener('click', function (e) {
    e.preventDefault();
    clearActiveClasses();
    upcomingBtn.classList.add('main__active');
    upcomingContent.classList.add('active');
});

// Donut Chart 
var percentageValue = 50; // Fundays progress bar

var options = {
    series: [percentageValue],
    chart: {
        height: 250,
        type: 'radialBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: 0,
            endAngle: -360,
            hollow: {
                margin: 0,
                size: '73%',
                background: 'transparent',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                }
            },
            track: {
                background: '#242424',
                strokeWidth: '100%',
                margin: 0,
                dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35
                }
            },

            dataLabels: {
                show: true,
                value: {
                    formatter: function (val) {
                        return parseInt(val) + "%";
                    },
                    color: '#F48128',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    fontFamily: 'Oxanium',
                    show: true,
                    offsetY: -8
                }
            }
        }
    },
    fill: {
        type: 'solid',
        colors: ['#F48128']
    },
    stroke: {
        lineCap: 'round'
    },
    labels: [''],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
