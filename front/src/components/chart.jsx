import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function DoughnutChartDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["A", "B", "C"],
      datasets: [
        {
          data: [250, 50, 100],
          backgroundColor: ["#3cfa02", "#02fac4", "#fa021b"],
          hoverBackgroundColor: ["#0b9606", "#039676", "#ab0213"],
        },
      ],
    };
    const options = {
      cutout: "60%",
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card flex justify-content-center">
      <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
    </div>
  );
}
