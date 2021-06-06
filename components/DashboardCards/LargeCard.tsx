import React from 'react'
import { Line } from 'react-chartjs-2'
interface Props {}

function LargeCard(props: Props) {
    const {
        
    } = props
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        type:'',
        datasets: [
          {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            type:''
          },
          {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
          },
        ]
      };

    return (
        <div className='large-card-container padding-large border-radius-small dark-shadow'>
            <Line style={{
                maxHeight:'40vh',
                transitionDuration:'0s'
                
            }} data={data} type='line'/>
        </div>
    )
}

export default LargeCard
