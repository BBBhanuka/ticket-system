import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

function TaskCard({ ticket }) {
  return (
    <Card sx={{ maxWidth: 1000, mx: "auto" }}>
      <CardContent sx={{ background: "#e3f2fd" }}>
        <Typography variant="h6" gutterBottom>
          {ticket.title} - {ticket.id}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {ticket.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 1,
            marginTop: 2,
          }}
        >
          <Chip
            label={`Priority: ${ticket.priority}`}
            color="warning"
            size="small"
          />
          <Chip
            label={`Category: ${ticket.category}`}
            color="info"
            size="small"
          />
          <Chip
            label={`Reporter: ${ticket.reporter}`}
            color="success"
            size="small"
          />
          <Chip
            label={`Status: ${ticket.status}`}
            color="primary"
            size="small"
          />
        </Box>
      </CardContent>

      <CardActions sx={{ background: "#f5f5f5" }}>
        <Box sx={{ marginLeft: "auto" }}>
          <Button
            component={Link}
            to={`/ticket/${ticket.id}`}
            variant="contained"
            size="small"
          >
            View Ticket
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default TaskCard;