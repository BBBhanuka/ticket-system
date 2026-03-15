import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Dashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    let allTickets = [];

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let ticket = JSON.parse(localStorage.getItem(key));
      allTickets.push(ticket);
    }

    setTickets(allTickets);
  }, []);

  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "Open").length;
  const progress = tickets.filter((t) => t.status === "In Progress").length;
  const resolved = tickets.filter((t) => t.status === "Resolved").length;
  const closed = tickets.filter((t) => t.status === "Closed").length;

  const cardData = [
    { label: "Total Tickets", value: total, borderColor: "grey.300" },
    { label: "Open", value: open, borderColor: "primary.main" },
    { label: "In Progress", value: progress, borderColor: "warning.main" },
    { label: "Resolved", value: resolved, borderColor: "success.main" },
    { label: "Closed", value: closed, borderColor: "text.primary" },
  ];

  return (
    <Box sx={{ maxWidth: 1200, margin: "20px auto", padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Dashboard
      </Typography>

      <Typography variant="h6" gutterBottom>
        Tickets by Status
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <Card
              sx={{
                textAlign: "center",
                boxShadow: 3,
                border: 2,
                borderColor: card.borderColor,
                minWidth: 200,
                width: "100%",
              }}
            >
              <CardContent>
                <Typography variant="subtitle1">{card.label}</Typography>
                <Typography variant="h4">{card.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Dashboard;
