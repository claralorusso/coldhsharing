import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useLocation, useNavigate } from "react-router-dom";
import { useI18n } from "../../i18n";

export const Topbar = () => {
  const { t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();

  const activeArea = location.pathname.startsWith("/cliente")
    ? "cliente"
    : "fornitore";

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
         <Toolbar
            sx={{
              maxWidth: "1120px",
              width: "100%",
              mx: "auto",
              px: 2,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              gap: { xs: 1, sm: 0 },
            }}
          >

        {/* Logo + titolo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexGrow: 1 }}>
          {/* Immagine logo */}
            <Box
              component="img"
              src="/logotrasp.png"
              alt="Coldsharing"
              sx={{
                height: { xs: 48, sm: 80, md: 120 },
                width: "auto",
                borderRadius: 1,
              }}
            />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
              {t("topbar.title")}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#64748b" }} // text-slate-500
            >
              {t("topbar.subtitle")}
            </Typography>
          </Box>
        </Box>

        {/* Switch Cliente / Fornitore */}
        <ToggleButtonGroup
          exclusive
          value={activeArea}
          onChange={(_, value) => {
            if (!value) return;
            navigate(value === "cliente" ? "/cliente" : "/fornitore");
          }}
          size="small"
          sx={{
          mr: { xs: 0, sm: 2 },
          mt: { xs: 1, sm: 0 },
          alignSelf: { xs: "stretch", sm: "auto" },
          justifyContent: { xs: "center", sm: "flex-start" },
          backgroundColor: "#f1f5f9",
          borderRadius: "999px",
          padding: "4px",
          "& .MuiToggleButton-root": {
            border: 0,
            textTransform: "none",
            borderRadius: "999px",
            fontWeight: 700,
            px: 2,
            py: 0.75,
            flex: { xs: 1, sm: "unset" },
          },
          "& .Mui-selected": {
            backgroundColor: "#0f172a",
            color: "#ffffff",
            "&:hover": { backgroundColor: "#0f172a" },
          },
        }}

        >
          <ToggleButton value="cliente">{t("topbar.area.cliente")}</ToggleButton>
          <ToggleButton value="fornitore">{t("topbar.area.fornitore")}</ToggleButton>
        </ToggleButtonGroup>

        {/* Bottone piattaforma */}
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
          fontSize: { xs: 13, sm: 14 },
          px: { xs: 2, sm: 2.5 },
          mt: { xs: 1, sm: 0 },
          alignSelf: { xs: "stretch", sm: "auto" },
          whiteSpace: "nowrap",
        }}
      >
        {t("topbar.cta")}
      </Button>
      </Toolbar>
    </AppBar>
  );
};
