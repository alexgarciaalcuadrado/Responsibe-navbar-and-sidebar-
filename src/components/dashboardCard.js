import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";

const DashboardCard = ({
  icon,
  title,
  number,
  extraNumber,
  extraLabel,
  iconColor,
}) => {
  return (
    <div className="card-container">
      <div>
        <Card className="icon-container" sx={{ maxWidth: 345 }}>
          <Box
            sx={{
              backgroundColor: iconColor,
              background: iconColor,
              color: "white",
            }}
          >
            <CardContent>{icon}</CardContent>
          </Box>
        </Card>
        <Card
          className="card"
          sx={{
            maxWidth: 345,
            borderRadius: 2,
            // boxShadow: "0px 10px 19px -12px rgba(4,2,26,0.62)",
          }}
        >
          <CardContent>
            <Box
              sx={{
                position: "relative",
                bottom: "10px",
              }}
            >
              <Typography
                style={{ margin: 0 }}
                gutterBottom
                variant="h6"
                color="#7b809a"
                className="title"
              >
                {title}
              </Typography>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "900",
                  color: "rgb(114 114 114)",
                }}
                color="text.secondary"
              >
                {number}
              </Typography>
            </Box>
            <Box sx={{}}>
              <Typography variant="body2" color="text.secondary">
                <span style={{ color: "#4CAF50", fontWeight: "600" }}>
                  {extraNumber}
                </span>{" "}
                {extraLabel}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardCard;
