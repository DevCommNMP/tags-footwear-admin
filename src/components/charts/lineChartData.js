// lineChartData.js

export const lineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Sales",
      tension: 0.3,
      fill: true,
      backgroundColor: "rgba(44, 120, 220, 0.2)",
      borderColor: "rgba(44, 120, 220)",
      data: [18, 17, 4, 3, 2, 20, 25, 31, 25, 22, 20, 9],
    },
    {
      label: "Visitors",
      tension: 0.3,
      fill: true,
      backgroundColor: "rgba(4, 209, 130, 0.2)",
      borderColor: "rgb(4, 209, 130)",
      data: [40, 20, 17, 9, 23, 35, 39, 30, 34, 25, 27, 17],
    },
    {
      label: "Products",
      tension: 0.3,
      fill: true,
      backgroundColor: "rgba(380, 200, 230, 0.2)",
      borderColor: "rgb(380, 200, 230)",
      data: [30, 10, 27, 19, 33, 15, 19, 20, 24, 15, 37, 6],
    },
  ],
};
