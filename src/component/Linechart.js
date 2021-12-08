import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
 ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )


const data = {
    labels: ["1st", "2nd", "3rd", "4th", "5th", "6th"],
    datasets: [
      {
        label: "Bitcoin dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "#18341f",
        borderColor: "#18341f"
      }
    ]
  };
  
  export default function Linechart() {
    return (
      <div className="linechart">
        <Line data={data} />
      </div>
    );
  }