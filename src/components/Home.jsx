import { Typography, Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 8, px: 2 }}>
      {/* Heading */}
      <Typography variant="h3" align="center" gutterBottom>
        UCS Mini Service Desk
      </Typography>

      {/* Add New Ticket Section */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 8 }}
      >
        <Typography variant="h5">Need to create new Ticket?</Typography>
        <Button
          component={Link}
          to="/addNew"
          variant="contained"
          color="primary"
          size="large"
        >
          Add New Ticket
        </Button>
      </Stack>

      {/* View Tickets Section */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 6 }}
      >
        <Typography variant="h5">View Existing Tickets?</Typography>
        <Button
          component={Link}
          to="/tickets"
          variant="contained"
          color="secondary"
          size="large"
        >
          View All Tickets
        </Button>
      </Stack>
    </Box>
  );
}

export default Home;