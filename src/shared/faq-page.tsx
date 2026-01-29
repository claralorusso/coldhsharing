import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export type FaqItem = {
  id: string;
  question: React.ReactNode;
  answer: React.ReactNode;
};

export type FaqHelp = {
  title: string;
  body: React.ReactNode;
  severity?: "info" | "warning" | "error" | "success";
};

export function FaqPage({
  title,
  description,
  items,
  help,
}: {
  title: string;
  description?: string;
  items: FaqItem[];
  help?: FaqHelp;
}) {
  const { section } = useParams();
  const [expanded, setExpanded] = useState("");

  useEffect(() => {
    if (section) setExpanded(section);
    else setExpanded("");
  }, [section]);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : "");
    };

  return (
    <div className="h-full w-full p-4">
      <h1 className="text-xl font-bold pb-1">{title}</h1>
      {description ? <div className="pb-2">{description}</div> : null}

      {items.map((it) => (
        <Accordion
          key={it.id}
          expanded={expanded === it.id}
          onChange={handleChange(it.id)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {it.question}
          </AccordionSummary>
          <AccordionDetails>{it.answer}</AccordionDetails>
        </Accordion>
      ))}

      {help ? (
        <div className="pt-4">
          <Alert severity={help.severity ?? "info"}>
            <AlertTitle className="font-bold">{help.title}</AlertTitle>
            {help.body}
          </Alert>
        </div>
      ) : null}
    </div>
  );
}

export function HelpDeskLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link to={href} className="text-blue-500 underline">
      {children}
    </Link>
  );
}
