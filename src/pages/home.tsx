import { listArguments } from "../constant";
import { ArgumentCard } from "../shared";

export const Home = () => {
  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full p-4">
        {listArguments.map((item) => (
          <ArgumentCard
            key={item.title}
            title={item.title}
            links={item.links}
          />
        ))}
      </div>
    </div>
  );
};
