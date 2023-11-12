const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Plástico', 'Metal', 'Vidro', 'Orgânicos', 'Rejeitos'],
    datasets: [{
      label: 'Kg',
      data: [1002.56, 4385.55, 1560.75, 433.2, 10.72],
      backgroundColor: [
        'rgba(107, 59, 37, 0.42)',
        'rgba(54, 0, 107, 0.42)',
        'rgba(105, 107, 0, 0.42)',
        'rgba(0, 107, 96, 0.42)',
        'rgba(190, 192, 64, 0.42)'
      ],
      borderColor: [
        'rgba(107, 59, 37, 1)',
        'rgba(54, 0, 107, 1)',
        'rgba(105, 107, 0, 1)',
        'rgba(0, 107, 96, 1)',
        'rgba(190, 192, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
   	//cutoutPercentage: 40,
    responsive: true,

  }
});