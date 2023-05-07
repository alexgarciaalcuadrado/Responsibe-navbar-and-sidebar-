import Cards from "../components/Cards";
import ReportsBarChart from "../components/charts/ReportsBarChart";

const Dashboard = () => {
  const reportsBarChartData = {
    labels: ["L", "M", "M", "J", "V", "S", "D"],
    datasets: { label: "Altas", data: [50, 20, 10, 22, 50, 10, 40] },
  };

  const { sales, tasks } = {
    sales: {
      labels: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
      datasets: {
        label: "Ingresos",
        data: [
          Math.floor(Math.random() * (4000000 - 1000000 + 1)) + 1000000,
          Math.floor(Math.random() * (4000000 - 1000000 + 1)) + 1000000,
          Math.floor(Math.random() * (4000000 - 1000000 + 1)) + 1000000,
          Math.floor(Math.random() * (4000000 - 1000000 + 1)) + 1000000,
          Math.floor(Math.random() * (4000000 - 1000000 + 1)) + 1000000,
          Math.floor(Math.random() * (4000000 - 1000000 + 1)) + 1000000,
          Math.floor(Math.random() * (4000000 - 1000000 + 1)) + 1000000,
          Math.floor(Math.random() * (4000000 - 1000000 + 1)) + 1000000,
          Math.floor(Math.random() * (4000000 - 1000000 + 1)) + 1000000,
          Math.floor(Math.random() * (4000000 - 1000000 + 1)) + 1000000,
          Math.floor(Math.random() * (4000000 - 1000000 + 1)) + 1000000,
          Math.floor(Math.random() * (4000000 - 1000000 + 1)) + 1000000,
        ],
      },
    },
    tasks: {
      labels: Array.from({ length: 31 }, (_, i) => i + 1),
      datasets: {
        label: "Ventas",
        data: Array.from(
          { length: 31 },
          () => Math.floor(Math.random() * (100000 - 50000 + 1)) + 50000
        ),
      },
    },
    tasks2: {
      labels: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
      datasets: {
        label: "Desktop apps",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      },
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Cards />
        </div>
        <div className="dashboard-chart">
          <ReportsBarChart
            color="info"
            title="Renovations"
            description="Total renovations of contract"
            date="Updated 1 hour ago"
            chart={reportsBarChartData}
            background="linear-gradient(195deg, #49a3f1, #1A73E8)"
          />
          <ReportsBarChart
            color="success"
            title="Annual consultations"
            description="Including emergencies"
            date="Updated last month"
            chart={sales}
            background="linear-gradient(195deg, #66BB6A, #43A047)"
          />
          <ReportsBarChart
            color="dark"
            title="Monthly sales"
            description="Total of monthly sales"
            date="Updated 2 weeks ago"
            chart={tasks}
            background="linear-gradient(195deg, #002c54, #002c54)"
          />
        </div>
      </header>
    </div>
  );
};

export default Dashboard;
