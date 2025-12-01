import { LinkItem } from "../models";
import { Link } from "@mui/material";

export interface ArgumentCardProps {
  icon: React.ReactNode;
  title: string;
  links: LinkItem[];
}

export const ArgumentCard = ({ icon, title, links }: ArgumentCardProps) => {
  return (
    <div
      className="
        flex flex-col
        min-w-72 max-w-md
        rounded-2xl border border-slate-200
        bg-white shadow-sm
        p-5
        transition
        hover:shadow-lg hover:-translate-y-1
        hover:bg-[#2ECC71] hover:border-[#2ECC71]
        hover:text-white
        group
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3 pb-3">
        <div
          className="
            flex h-11 w-11 items-center justify-center rounded-full bg-blue-600
            transition group-hover:bg-white
          "
        >
          {/* l’icona diventa verde scuro quando sfondo diventa bianco */}
          <div className="text-white group-hover:text-[#2ECC71]">
            {icon}
          </div>
        </div>

        <h2 className="text-sm font-semibold text-slate-900 leading-snug group-hover:text-white">
          {title}
        </h2>
      </div>

      {/* Lista link */}
      <div className="mt-1 border-t border-slate-100 pt-3 group-hover:border-white">
        <ul className="space-y-1">
          {links.map((l, i) => (
            <li key={i} className="text-sm">
              <Link
                href={`${l.path}/${l.section}`}
                underline="hover"
                className="
                  text-blue-700 
                  group-hover:text-white 
                "
              >
                {l.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
