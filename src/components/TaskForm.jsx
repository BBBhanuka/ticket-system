import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [reporter, setReporter] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const count = localStorage.length;
    const id = count + 1;

    const ticket = {
      id,
      title,
      description,
      category,
      priority,
      reporter,
      status: "Open",
      notes: [],
    };

    localStorage.setItem(id, JSON.stringify(ticket));

    if (localStorage.length - count === 1) {
      alert("Adding Ticket Successful!");

      // Clear input fields
      setTitle("");
      setDescription("");
      setCategory("");
      setPriority("");
      setReporter("");
    } else {
      alert("Something Went Wrong!");
    }

    console.log(ticket);
  }

  function clearLocalStorage() {
    if (localStorage.length === 0) {
      alert("Nothing to clear!");
      return;
    }

    if (confirm("Are you sure you want to clear all data from LocalStorage?")) {
      localStorage.clear();
      if (localStorage.length === 0) {
        alert("LocalStorage is successfully cleared!");
      }
    } else {
      alert("Operation cancelled.");
    }
  }

  function clearForm() {
    if (confirm("Are you sure you want to clear form ?")) {
      setTitle("");
      setDescription("");
      setCategory("");
      setPriority("");
      setReporter("");
    }
  }

  return (
    <Box sx={{ maxWidth: 700, margin: "20px auto", p: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        UCS Mini Service Desk
      </Typography>

      <Typography variant="h5" gutterBottom>
        Ticket Creation
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
        {/* Title */}
        <TextField
          label="Ticket Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          margin="normal"
        />

        {/* Description */}
        <TextField
          label="Ticket Description"
          fullWidth
          multiline
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          margin="normal"
        />

        <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
          {/* Ticket Category */}
          <TextField
            select
            label="Ticket Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            fullWidth
            sx={{ flex: 1 }} // fills half of container minus gap
          >
            <MenuItem value="">Choose...</MenuItem>
            <MenuItem value="Bug">Bug</MenuItem>
            <MenuItem value="Feature Request">Feature Request</MenuItem>
            <MenuItem value="Support">Support</MenuItem>
            <MenuItem value="Technical issue">Technical issue</MenuItem>
          </TextField>

          {/* Ticket Priority */}
          <TextField
            select
            label="Ticket Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
            fullWidth
            sx={{ flex: 1 }} // fills half of container minus gap
          >
            <MenuItem value="">Choose...</MenuItem>
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </TextField>
        </Box>

        {/* Reporter */}
        <TextField
          label="Reporter"
          fullWidth
          value={reporter}
          onChange={(e) => setReporter(e.target.value)}
          required
          margin="normal"
        />

        {/* Submit Button */}
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>

        {/* Clear LocalStorage & Form*/}
        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-around" }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={clearLocalStorage}
          >
            Clear Local Storage
          </Button>

          <Button variant="outlined" color="secondary" onClick={clearForm}>
            Clear Form
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default TaskForm;
