import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getLS } from '../../utility/LocalStorage';



function ApexChart() {
  

  const alu = ()=>{
    const storeId = getLS('donation')
    const donated = storeId.length * 30;
    const totalDonation = 360 - donated;
    const chartNum = [donated, totalDonation]
    return chartNum
  }

  const [chartData, setChartData] = useState({
    series: alu(),
    options: {
      chart: {
        width: 580,
        type: 'pie',
      },
      labels: ['Your Donation', 'Total Donation'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 480,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart" className=''>
      <ReactApexChart options={chartData.options} series={chartData.series} type="pie" width={580} />
    </div>
  );
}

export default ApexChart;

