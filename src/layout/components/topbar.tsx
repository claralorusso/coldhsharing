import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export const Topbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        color: "#0f172a", // text-slate-900
        borderBottom: "1px solid #e2e8f0", // border-slate-200
      }}
    >
      <Toolbar sx={{ maxWidth: "1120px", width: "100%", mx: "auto", px: 2 }}>
        {/* Logo + titolo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexGrow: 1 }}>
          {/* Immagine logo */}
          <Box
            component="img"
            src="/logoabout.png"
            alt="Coldsharing"
            sx={{
              height: 150,
              width: "auto",
              borderRadius: 1,
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
              Cold Sharing Help Center
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#64748b" }} // text-slate-500
            >
              Guide, FAQ e supporto per i Fornitori
            </Typography>
          </Box>
        </Box>

        {/* Bottone Home */}
       <Button
        variant="contained"
        startIcon={<HomeIcon />}
        onClick={() => window.open("https://www.cellefrigo.net", "_blank")}
        sx={{
          textTransform: "none",
          borderRadius: "999px",
          backgroundColor: "#22c55e",
          "&:hover": { backgroundColor: "#16a34a" },
          boxShadow: "0 4px 10px rgba(34,197,94,0.25)",
          fontSize: 14,
          px: 2.5,
        }}
      >
        Accedi in Cold Sharing
      </Button>
      </Toolbar>
    </AppBar>
  );
};
