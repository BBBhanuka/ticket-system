import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  useEffect(() => {
    let allTickets = [];

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let ticket = JSON.parse(localStorage.getItem(key));
      allTickets.push(ticket);
    }

    setTickets(allTickets);
  }, []);

  // Apply filters
  const filteredTickets = tickets.filter((ticket) => {
    const matchTitle = ticket.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchStatus = statusFilter ? ticket.status === statusFilter : true;
    const matchPriority = priorityFilter
      ? ticket.priority === priorityFilter
      : true;
    return matchTitle && matchStatus && matchPriority;
  });

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: "20px", mb: "50px" }}>
      {/* Search and Filters */}
      <Box
        sx={{
          backgroundColor: "#f0f4c3",
          padding: 3,
          borderRadius: 2,
          boxShadow: 1,
          marginBottom: 4,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Heading */}
        <Typography variant="h6" align="center" gutterBottom>
          Search and Filter
        </Typography>

        {/* Inputs Row */}
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Search by title"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              select
              variant="outlined"
              label="Filter by Status"
              value={statusFilter}
              sx={{ width: 200 }}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <MenuItem value="">All Status</MenuItem>
              <MenuItem value="Open">Open</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Resolved">Resolved</MenuItem>
              <MenuItem value="Closed">Closed</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              select
              variant="outlined"
              label="Filter by Priority"
              value={priorityFilter}
              sx={{ width: 200 }}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <MenuItem value="">All Priority</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Box>

      {/* Ticket List */}
      {filteredTickets.length === 0 ? (
        <Typography
          variant="h5"
          align="center"
          sx={{ marginTop: 5, color: "text.secondary" }}
        >
          No Tickets Found
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mb: 5,
            minWidth: 300,
            width: "100%",
            alignItems: "center",
            paddingBottom: "50px",
          }}
        >
          {filteredTickets.map((ticket, index) => (
            <Box key={index} sx={{ minWidth: 300, width: "100%" }}>
              <TaskCard ticket={ticket} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Tickets;
