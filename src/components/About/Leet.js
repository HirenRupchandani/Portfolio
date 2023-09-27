import React from "react";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Easy', 'Medium', 'Hard'],
  options: {
    hoverBackgroundColor:'rgba(255, 206, 86, 0.6)',
    responsive: true,
  },
  datasets: [
    {
      hoverOffset: 4,
      label: '# of problems solved',
      data: [89,26,2],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(255, 99, 132, 0.6)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    },
    
  ],
};

function Leet() {
const [leetData, setLeetData] = useState([])
const fetchUserData = () => {
    fetch("https://leetcodestats.cyclic.app/Hiren_Rupchandani")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setLeetData(data)
      })

  }

  useEffect(() => {
    fetchUserData();
    console.log(leetData);
    console.log(leetData);
  }, [])

  return (
    <div style={{height : '300px', width : '27%', fontSize: "18px", textAlign: 'center', display : 'inline-block'}}>
    
    {console.log(leetData.status, leetData.easySolved, leetData.mediumSolved, leetData.hardSolved, leetData.totalSolved)}
    <Doughnut data={data} />
    <p>Total # of Leetcode Problems Done</p>
    </div>);
}

export default Leet;