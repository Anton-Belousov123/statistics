// Ваш JavaScript-код в файле chart.js
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
        datasets: [{
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'blue',
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
