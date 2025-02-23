import { listArguments } from "../constant";
import { ArgumentCard } from "../shared";

export const Home = () => {
  return (
    <div className="h-full w-full">
      <h1 className="font-bold p-4 text-2xl">Sfoglia per argomento</h1>
      <div className="grid h-full w-full p-4 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
