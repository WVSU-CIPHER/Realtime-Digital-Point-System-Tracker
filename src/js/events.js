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
    height: 220,
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

var chart = new ApexCharts(document.querySelector("#donut-chart"), options);
chart.render();

// Bar chart
var teamNames = ['Radeon', 'Nexus', 'Ryzen', 'Oracle'];

var originalData = [10, 2, 5, 12];

var randomMultiplier = Math.floor(Math.random() * 10) + 1;

var chartData = originalData.map(value => value * randomMultiplier);

var options = {
  series: [{
    data: chartData
  }],
  chart: {
    type: 'bar',
    height: 300,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      barHeight: '70%',
      horizontal: true,
      dataLabels: {
        position: 'bottom',
      },
      distributed: true,
      columnWidth: '100%',
      barGap: 0
    }
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: [
        '#D2FFA566',
        '#E9C60D',
        '#1220A0',
        '#A21616'
      ],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  colors: [
    '#4B710166',
    '#95860B',
    '#060C43',
    '#6F0707'
  ],
  dataLabels: {
    enabled: true,
    textAnchor: 'middle',
    offsetX: 50,
    style: {
      colors: ['#fff'],
      fontFamily: 'Oxanium',
      fontSize: '18px'
    },
    formatter: function (val, opt) {
      return teamNames[opt.dataPointIndex] || ''; 
    },
    dropShadow: {
      enabled: true
    }
  },
  stroke: {
    width: 0
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  xaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: true,
      color: '#FF94222',
      width: 1
    },
    axisTicks: {
      show: false
    }
  },
  tooltip: {
    theme: 'dark',
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return '';
        }
      },
      formatter: function (val, opt) {
        return teamNames[opt.dataPointIndex];
      }
    }
  },
  legend: {
    show: false
  }
};

var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
chart.render();
