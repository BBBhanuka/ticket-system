import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Chip,
  Select,
  MenuItem,
  Button,
  TextField,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function TicketDetails() {
  const { id } = useParams();
  const ticket = JSON.parse(localStorage.getItem(id));
  const [status, setStatus] = useState(ticket?.status || "");
  const [notes, setNotes] = useState(ticket?.notes || []);
  const [note, setNote] = useState("");

  if (!ticket) {
    return (
      <Typography variant="h5" align="center" sx={{ mt: 5 }}>
        Ticket not found
      </Typography>
    );
  }

  function updateStatus() {
    const updatedTicket = { ...ticket, status };
    localStorage.setItem(id, JSON.stringify(updatedTicket));
    alert("Status updated successfully");
  }

  function addNote() {
    if (!note.trim()) {
      alert("Field is empty");
      return;
    }

    const newNotes = [...notes, note];
    const updatedTicket = { ...ticket, notes: newNotes };
    localStorage.setItem(id, JSON.stringify(updatedTicket));
    setNotes(newNotes);
    setNote("");
    alert("Note added successfully");
  }

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, pb: 6 }}>
      <Card variant="outlined" sx={{ boxShadow: 3 }}>
        <CardHeader
          title="Ticket Details"
          sx={{ backgroundColor: "primary.main", color: "white" }}
        />

        <CardContent>
          <Typography variant="h5">
            {ticket.title}{" "}
            <Chip label={`ID: ${ticket.id}`} color="secondary" size="small" />
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography>
            <strong>Description:</strong>
            <br />
            {ticket.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              mt: 3,
              alignItems: "center",
            }}
          >
            <Box>
              <Typography>
                <strong>Category</strong>
                <br />
                {ticket.category}
              </Typography>
            </Box>

            <Box>
              <Typography>
                <strong>Priority</strong>
                <br />
                <Chip label={ticket.priority} color="error" size="small" />
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box>
                <Typography>
                  <strong>Status</strong>
                  <br />
                  <Chip label={status} color="success" size="small" />
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  Set Status
                </Typography>
                <Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  size="small"
                  sx={{ minWidth: 150 }}
                >
                  <MenuItem value="">Choose...</MenuItem>
                  <MenuItem value="Open">Open</MenuItem>
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="Resolved">Resolved</MenuItem>
                  <MenuItem value="Closed">Closed</MenuItem>
                </Select>
              </Box>

              <Box sx={{ mt: 1 }}>
                <Button variant="contained" onClick={updateStatus}>
                  Save Status
                </Button>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography>
              <strong>Reporter:</strong>
              <br />
              {ticket.reporter}
            </Typography>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
              Add Note
            </Typography>
            <Stack direction="row" spacing={1}>
              <TextField
                fullWidth
                size="small"
                placeholder="Write a note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <Button variant="contained" onClick={addNote}>
                Add
              </Button>
            </Stack>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
              Notes
            </Typography>
            {notes.length > 0 ? (
              <List sx={{ bgcolor: "background.paper" }}>
                {notes.map((n, index) => (
                  <ListItem key={index} divider>
                    <ListItemText primary={n} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography color="text.secondary">No notes yet</Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default TicketDetails;
