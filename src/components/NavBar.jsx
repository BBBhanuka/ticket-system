import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function NavBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* System Name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ticket System
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={Link} to="/" color="inherit" variant="text">
            Home
          </Button>

          <Button
            component={Link}
            to="/dashboard"
            color="inherit"
            variant="text"
          >
            Dashboard
          </Button>

          <Button component={Link} to="/tickets" color="inherit" variant="text">
            Tickets
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
