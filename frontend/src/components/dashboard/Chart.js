import {useState} from 'react'
import {Doughnut} from "react-chartjs-2"

const UserChart = ({balance}) => {
  // const [balance, setchartdata] = useState(amount.balance)
  const [chartdata, setchartdata] = useState("")
  
  const set = ({
    labels: ["Total Balance", "Total Spent", "Total Saved"],
    datasets: [
      {
        label: "Price in USD",
        data: [10, 20, 30],
        backgroundColor: [
          "#ffbb11",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ]
      }
    ]
  });
  console.log(balance)
  return (
    <div>
      <Doughnut
        data={set}
        options={{
          plugins: {
            title: {
              display: true,
              text: "User Amounts"
            },
            legend: {
              display: true,
              position: "bottom"
          }
          }
        }}
      />
    </div>
  )
}

export default UserChart;
