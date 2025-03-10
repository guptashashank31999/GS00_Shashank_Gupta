import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Container } from 'reactstrap';

interface ChartSeries {
    name: string;
    type: 'line' | 'column';
    data: number[];
  }
  
  interface ChartOptions {
    chart: {
      height: number;
      type: 'line';
    };
    stroke: {
      width: number[];
    };
    title: {
      text: string;
    };
    dataLabels: {
      enabled: boolean;
      enabledOnSeries: number[];
    };
    labels: string[];
    yaxis: {
      title: { text: string };
      opposite?: boolean;
    }[];
  }

const ChartsComp : React.FC= () => {
    const [state, setState] = React.useState<{
        series: ChartSeries[];
        options: ChartOptions;
      }>({
          
        series: [{
          name: 'PRICE',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
          name: 'In %',
          type: 'line',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
          },
          stroke: {
            width: [0, 4]
          },
          title: {
            text: 'Gross Margin'
          },
          dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
          },
          labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
          yaxis: [{
            title: {
              text: 'Price',
            },
          
          }, {
            opposite: true,
            title: {
              text: 'In %'
            }
          }]
        },
      
      
    });
  return (
    <>
      <Container>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
              </div>
            <div id="html-dist"></div>
          </Container>
    </>
  )
}

export default ChartsComp
