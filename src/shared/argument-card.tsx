import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { LinkItem } from "../models";
import { Link } from "@mui/material";

export interface ArgumentCardProps {
  title: string;
  links: LinkItem[];
}
export const ArgumentCard = (props: ArgumentCardProps) => {
  return (
    <div className="flex-col max-w-96 max-h-96 min-w-72 shadow-md p-4 gap-2 rounded border">
      <div className="flex gap-2 items-center pb-3">
        <div className="bg-slate-500 rounded-full h-10 w-10 justify-center items-center flex">
          <AccessTimeIcon style={{ color: "white" }} />
        </div>
        <h1 className="font-bold">{props.title}</h1>
      </div>
      {props.links.map((l, i: number) => (
        <div key={i}>
          <Link key={l.title} href={`${l.path}/${l.section}`}>
            {l.title}
          </Link>
        </div>
      ))}
    </div>
  );
};
