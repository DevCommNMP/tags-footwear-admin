import LineChartComponent from './LineChartComponent';
import BarChartComponent from './BarChartComponent';
import { lineChartData } from './lineChartData';
import { barChartData } from './barChartData';

const MyChartsComponent = () => {
  return (
    <div>
      <LineChartComponent data={lineChartData} />
      <BarChartComponent data={barChartData} />
    </div>
  );
};

export default MyChartsComponent;
