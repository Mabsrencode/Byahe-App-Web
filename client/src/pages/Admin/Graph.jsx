import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import moment from 'moment';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = () => {
    const currentMonth = moment().format('MMMM'); // Format the current month to its full name

    const options = {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: `Monthly Visitors and Users for the month of ${currentMonth}`
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 51.08, label: "Chrome" },
                { y: 27.34, label: "Internet Explorer" },
                { y: 10.62, label: "Firefox" },
                { y: 5.02, label: "Microsoft Edge" },
                { y: 4.07, label: "Safari" },
                { y: 1.22, label: "Opera" },
                { y: 0.44, label: "Others" }
            ]
        }]
    };

    return (
        <div className='w-full h-full'>
            <CanvasJSChart options={options} />
        </div>
    );
};

export default Graph;

