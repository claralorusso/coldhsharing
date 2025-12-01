import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

type CookieRow = {
  nome: string;
  fornitore: string;
  scopo: string;
  durata: string;
  tipo: string;
};

type CookieTableProps = {
  title?: string;
  rows: CookieRow[];
};

export default function CookieTable({ title, rows }: CookieTableProps) {
  return (
    <TableContainer component={Paper} sx={{ mt: 3, borderRadius: 3 }}>
      {title && (
        <Typography variant="h6" sx={{ p: 2 }}>
          {title}
        </Typography>
      )}
      <Table sx={{ tableLayout: "fixed", width: "100%" }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell sx={{ width: "15%" }}>
              <b>Nome</b>
            </TableCell>
            <TableCell sx={{ width: "15%" }}>
              <b>Fornitore</b>
            </TableCell>
            <TableCell sx={{ width: "40%", whiteSpace: "normal", wordBreak: "break-word" }}>
              <b>Scopo</b>
            </TableCell>
            <TableCell sx={{ width: "20%" }}>
              <b>Durata massima di archiviazione</b>
            </TableCell>
            <TableCell sx={{ width: "10%" }}>
              <b>Tipo</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fafafa" } }}
            >
              <TableCell>{row.nome}</TableCell>
              <TableCell>{row.fornitore}</TableCell>
              <TableCell>{row.scopo}</TableCell>
              <TableCell>{row.durata}</TableCell>
              <TableCell>{row.tipo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
