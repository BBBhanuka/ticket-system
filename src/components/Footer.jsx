import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box
      sx={{
        height: 30,
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2" sx={{ margin: 0 }}>
        All Rights Reserved
      </Typography>
    </Box>
  );
}

export default Footer;