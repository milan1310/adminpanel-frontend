// Sales chart
const salesCtx = document.getElementById('sales-chart');
const data = {
    labels: [
        'New sales',
        'Recurrent Sales',
    ],
    datasets: [{
        label: 'Sales Databse',
        data: [254, 105],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
        ],
        hoverOffset: 4
    }]
}
const salesConfig = {
    type: 'doughnut',
    data: data,
}
const salesChart = new Chart(salesCtx, salesConfig)

// Users chart

  const userData = {
    labels: ['Jan','Feb','March',"Apr",'May','Jun','July'],
    datasets: [{
    label: 'New users',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
  }
  const userConfig = {
    type: 'line',
    data: userData
  };
  const userCtx = document.getElementById('users-chart');

  new Chart(userCtx,userConfig);

// Subscriber chart
const subCtx = document.getElementById('subscriber-chart')
const subData ={
        labels: ['New Subscribers', 'Old Subscribers'],
        datasets: [
          {
            label: 'Subscriber dataset',
            data:[450,550],
            backgroundColor:['rgb(75, 192, 192)','rgb(54, 162, 235'] ,
          }
        ]
}

const subConfig = {
    type: 'pie',
    data: subData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Subscribers Pie Chart'
        }
      }
    },
  };

  new Chart(subCtx,subConfig)
