import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";


const DashboardCard = ({ icon, title, number, extraNumber, extraLabel, iconColor }) => {
    return (
    <div className="card-container">
      <Card className="icon-container" sx={{ maxWidth: 345 }}>
        <CardContent styles={{backgroundColor:iconColor === "red" ? "red" : "white"}}>{icon}</CardContent>
      </Card>
      <Card className="card" sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h6" color="#7b809a" className="title">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {number}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {extraNumber} {extraLabel}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCard;
