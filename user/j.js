const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Campaigns Sent',
        data: [30, 25, 40, 45, 35, 50, 55, 60, 65, 70, 75, 80],
        backgroundColor: '#FA496E',
        borderColor: '#FA496E',
        borderWidth: 1,
        borderRadius: 30,
        barThickness: 12,
        hoverBackgroundColor: 'rgba(28, 30, 35, 1)',
        hoverBorderColor: 'rgba(28, 30, 35, 1)',
      },
      {
        label: 'Open Rates',
        data: [20, 22, 25, 28, 27, 30, 32, 35, 38, 40, 42, 45],
        backgroundColor: '#28A745',
        borderColor: '#28A745',
        borderWidth: 1,
        borderRadius: 30,
        barThickness: 12,
        hoverBackgroundColor: 'rgba(28, 30, 35, 1)',
        hoverBorderColor: 'rgba(28, 30, 35, 1)',
      },
      {
        label: 'Click-through Rates',
        data: [5, 7, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        backgroundColor: '#007BFF',
        borderColor: '#007BFF',
        borderWidth: 1,
        borderRadius: 30,
        barThickness: 12,
        hoverBackgroundColor: 'rgba(28, 30, 35, 1)',
        hoverBorderColor: 'rgba(28, 30, 35, 1)',
      },
      {
        label: 'Subscriber Growth',
        data: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105],
        backgroundColor: '#FFC107',
        borderColor: '#FFC107',
        borderWidth: 1,
        borderRadius: 30,
        barThickness: 12,
        hoverBackgroundColor: 'rgba(28, 30, 35, 1)',
        hoverBorderColor: 'rgba(28, 30, 35, 1)',
      },
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, // Ensure the chart scales according to its container
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value + '%';
          },
          stepSize: 10,
        },
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            size: 12,
            family: "'Plus Jakarta Sans', sans-serif",
            lineHeight: 18,
            weight: 600
          }
        }
      }
    }
  }
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: [
      'Total Campaigns Sent',
      'Open Rates',
      'Click-through Rates',
      'Subscriber Growth'
    ],
    datasets: [{
      label: 'Performance Metrics',
      data: [150, 35, 8, 850], // Example values
      borderRadius: 5,
      cutout: 80,
      backgroundColor: [
        'rgb(235, 124, 166)', // Total Campaigns Sent
        'rgb(255, 172, 200)', // Open Rates
        'rgb(204, 111, 248)', // Click-through Rates
        'rgb(124, 92, 252)'  // Subscriber Growth
      ],
      hoverOffset: 4,
      spacing: 8
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    }
  }
});
function checkScreenSize() {
  const errorElement = document.querySelector('.chart-error');
  if (window.innerWidth <= 768) {
    errorElement.style.display = 'block';
  } else {
    errorElement.style.display = 'none';
  }
}

// Close button functionality
document.addEventListener('DOMContentLoaded', function() {
  const closeButton = document.querySelector('.close-btn');
  closeButton.addEventListener('click', function() {
    document.querySelector('.chart-error').style.display = 'none';
  });

  // Check on load
  checkScreenSize();

  // Check on resize
  window.addEventListener('resize', checkScreenSize);
});
