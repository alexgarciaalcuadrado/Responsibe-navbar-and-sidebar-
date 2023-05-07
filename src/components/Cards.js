import DashboardCard from "./dashboardCard";
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import DoorbellIcon from '@mui/icons-material/Doorbell';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Cards = () => {
    return (
        <div className="cards-container">
        <DashboardCard 
        icon={<PersonIcon />}
        iconColor="#002c54"
        title="New patients"
        number="2300"
        extraNumber="+3%"
        extraLabel="than yesterday"
        />
        <DashboardCard 
        icon={<BarChartIcon />}
        iconColor="linear-gradient(195deg, #49a3f1, #1A73E8)"
        title="Sales"
        number="128"
        extraNumber="+55%"
        extraLabel="than past week"
        />
        <DashboardCard 
        icon={<DoorbellIcon />}
        iconColor="linear-gradient(195deg, #66BB6A, #43A047)"
        title="Renovations"
        number="34K"
        extraNumber="+1%"
        extraLabel="than yesterday"
        />
        <DashboardCard 
        icon={<PersonAddIcon />}
        iconColor="linear-gradient(195deg, #EC407A, #D81B60)"
        title="Payments"
        number="2.312"
        extraNumber=""
        extraLabel="Today"
        />
        </div>
    )
}

export default Cards;