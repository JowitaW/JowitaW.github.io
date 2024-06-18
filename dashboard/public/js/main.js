let housingData = [];

// Fetch housing data from JSON file
fetch('housing.json')
    .then(response => response.json())
    .then(data => {
        housingData = data;
        initializeCharts();
    })
    .catch(error => console.error('Error fetching data:', error));

function initializeCharts() {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    const ctx2 = document.getElementById('chart2').getContext('2d');
    const ctx3 = document.getElementById('chart3').getContext('2d');
    const ctx4 = document.getElementById('chart4').getContext('2d');

    // Prepare data for charts
    const labels = housingData.map(house => house.name);
    const prices = housingData.map(house => house.price);
    const years = housingData.map(house => house.year);
    const areas = housingData.map(house => house.area);

    // Chart 1: Average Price and Price per Square Meter
    const chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'House Prices',
                data: prices,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Price ($)'
                    }
                }
            }
        }
    });

    // Chart 2: Construction Year and Age of Houses
    const chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Construction Year',
                data: years,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            }
        }
    });

    // Chart 3: House Areas
    const chart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'House Area',
                data: areas,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
          indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Area (sq. ft)'
                    }
                }
            }
        }
    });

    // Chart 4: Price vs Area
    const chart4 = new Chart(ctx4, {
        type: 'scatter',
        data: {
            labels: labels,
            datasets: [{
                label: 'Price vs Area',
                data: housingData.map(house => ({ x: house.area, y: house.price })),
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Area (sq. ft)'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Price ($)'
                    }
                }
            }
        }
    });

    // Interactive calculations for each chart

    // Chart 1 calculations
    document.getElementById('chart1').onclick = function(evt) {
        const activePoints = chart1.getElementsAtEventForMode(evt, 'nearest', { intersect: true });
        if (activePoints.length > 0) {
            const idx = activePoints[0].index;
            const house = housingData[idx];
            const pricePerSqMeter = (house.price / house.area).toFixed(2);

            alert(`
                Calculations for ${house.name}:
                - Price: $${house.price.toLocaleString()}
                - Price per Square Meter: $${pricePerSqMeter}
                - Area: ${house.area} sq. ft
            `);
        }
    };

    // Chart 2 calculations
    document.getElementById('chart2').onclick = function(evt) {
        const activePoints = chart2.getElementsAtEventForMode(evt, 'nearest', { intersect: true });
        if (activePoints.length > 0) {
            const idx = activePoints[0].index;
            const house = housingData[idx];
            const currentYear = new Date().getFullYear();
            const houseAge = currentYear - house.year;

            alert(`
                Calculations for ${house.name}:
                - Construction Year: ${house.year}
                - House Age: ${houseAge} years
                - Current Year: ${currentYear}
            `);
        }
    };

    // Chart 3 calculations
    document.getElementById('chart3').onclick = function(evt) {
        const activePoints = chart3.getElementsAtEventForMode(evt, 'nearest', { intersect: true });
        if (activePoints.length > 0) {
            const idx = activePoints[0].index;
            const house = housingData[idx];

            alert(`
                Calculations for ${house.name}:
                - Area: ${house.area} sq. ft
                - Price: $${house.price.toLocaleString()}
                - Price per sq. ft: $${(house.price / house.area).toFixed(2)}
            `);
        }
    };

    // Chart 4 calculations
    document.getElementById('chart4').onclick = function(evt) {
        const activePoints = chart4.getElementsAtEventForMode(evt, 'nearest', { intersect: true });
        if (activePoints.length > 0) {
            const idx = activePoints[0].index;
            const house = housingData[idx];

            alert(`
                Calculations for ${house.name}:
                - Price: $${house.price.toLocaleString()}
                - Area: ${house.area} sq. ft
                - Price per sq. ft: $${(house.price / house.area).toFixed(2)}
            `);
        }
    };
}
