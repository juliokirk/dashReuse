const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Plástico', 'Metal', 'Vidro', 'Orgânicos', 'Rejeitos'],
    datasets: [{
      label: 'Kg',
      data: [1002.56, 4385.55, 1560.75, 433.2, 10.72],
      backgroundColor: [
        'rgba(173, 38, 23, 1)',
        'rgba(37, 23, 173, 1)',
        'rgba(23, 173, 95, 1)',
        'rgba(173, 151, 23, 1)',
        'rgba(88, 46, 41, 1)'
      ],
      borderColor: [
         'rgba(173, 38, 23, 1)',
        'rgba(37, 23, 173, 1)',
        'rgba(23, 173, 95, 1)',
        'rgba(173, 151, 23, 1)',
        'rgba(88, 46, 41, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
   	//cutoutPercentage: 40,
    responsive: true,

  }
});