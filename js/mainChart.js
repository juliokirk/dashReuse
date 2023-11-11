const ctx = document.getElementById('myChart');

  new Chart(ctx, {
      
    type: 'pie',
    data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};
      
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
