import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
export const Topbar = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coldsharing - Help
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleHomeClick}
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
