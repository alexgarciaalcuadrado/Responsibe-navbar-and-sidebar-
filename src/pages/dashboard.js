import DashboardCard from "../components/dashboardCard";
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import DoorbellIcon from '@mui/icons-material/Doorbell';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Dashboard = () => {
    return (
    <div className="App">
    <header className="App-header">
      <div style={{ 
        marginTop: "25px",
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)"
      }}>
      <DashboardCard 
      icon={<PersonIcon />}
      iconColor="red"
      title="Altas del día"
      number="2300"
      extraNumber="+3%"
      extraLabel="que ayer"
      />
      <DashboardCard 
      icon={<BarChartIcon />}
      iconColor="red"
      title="Usuarios"
      number="128"
      extraNumber="+55%"
      extraLabel="que la semana pasada"
      />
      <DashboardCard 
      icon={<DoorbellIcon />}
      iconColor="red"
      title="Renovaciones"
      number="34K"
      extraNumber="+1%"
      extraLabel="que ayer"
      />
      <DashboardCard 
      icon={<PersonAddIcon />}
      iconColor="red"
      title="Cobranzas"
      number="2.312"
      extraNumber=""
      extraLabel="hoy"
      />
      </div>
      
    </header>
  </div>)
}

export default Dashboard;