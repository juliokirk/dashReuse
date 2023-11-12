const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Plástico', 'Metal', 'Vidro', 'Orgânicos', 'Rejeitos'],
    datasets: [{
      label: 'Kg',
      data: [1002.56, 4385.55, 1560.75, 433.2, 10.72],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
   	//cutoutPercentage: 40,
    responsive: false,

  }
});