import { useMemo } from "react";

// react-chartjs-2 components
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import { Box } from "@mui/material";
import { Typography } from "@material-ui/core";

// ReportsBarChart configurations
import configs from "./configs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ReportsBarChart({ color, title, description, date, chart, background }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  return (
    <div style={{ width: "20rem"}}>
    <Card sx={{ height: "100%",borderRadius:2 }}>
      <Box padding="1rem">
        {useMemo(
          () => (
            <Box
              variant="gradient"
              bgColor={color}
              borderRadius="lg"
              coloredShadow={color}
              py={2}
              pr={0.5}
              mt={-5}
              height="12.5rem"
              sx={{
                background:background,
                margin: 0,
                borderRadius: 2
              }}
            >
              <Bar data={data} options={options} />
            </Box>
          ),
          [chart, color, data, options]
        )}
        <Box pt={3} pb={1} px={1}>
          <Typography variant="h6" textTransform="capitalize" style={{
            color: "#344767",
          }}>
            {title}
          </Typography>
          <Typography style={{
            color: "#7b809a",
          }} fontWeight="light">
            {description}
          </Typography>
          <Divider style={{margin:"10px"}}/>
          
        </Box>
      </Box>
      <Box display="flex" sx={{
            opacity: 1,
            background: "transparent",
            color: "#7b809a",
                paddingLeft: "20px"
          }}>
            <Typography variant="button" lineHeight={1} sx={{ mt: 0.15, mr: 0.5, marginRight: "5px" }}>
              <Icon>schedule</Icon>
            </Typography>
            <Typography>
              {date}
            </Typography>
          </Box>
    </Card>
    </div>
  );
}

export default ReportsBarChart;
