import { modifier } from 'ember-modifier';

export default modifier(function graph(element /*, positional, named*/) {
    // Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart(element, {
    chart: {
        type: 'line'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: 'Monthly Energy Consumption'
    },
    xAxis: {
        categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'
        ]
    },
    yAxis: {
        title: {
            text: 'Energy Consumption (KWH)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: 'Month Wise',
        data: [
            160, 182, 231, 239, 242, 164, 178, 194, 215, 232,
            220, 178
        ],
        color: "brown"
    },
    {
        name: 'Carbon FootPrint',
        data: [
            116, 148, 233, 219, 232, 134, 138, 134, 235,222,
            222, 117
        ],
        color: "black"
    }]
});

});
