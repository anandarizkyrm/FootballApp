import Style from "./Leagues.module.css";
import { useQuery } from "@apollo/client";
import League from "./League";
import { GET_LEAGUE } from "../../GraphQL/Queries";
import RenderIfTrue from "../RenderIfTrue/RenderIfTrue";

const Leagues = () => {
  const { error, loading, data } = useQuery(GET_LEAGUE);
  console.log(data);
  if (error)
    return (
      <div>
        <h1>Error Server</h1>
      </div>
    );

  return (
    <div className={Style.main}>
      <div className={Style.header}>
        <h2>This Is All of The Leagues and Competition Around the World </h2>
      </div>
      <div className={Style.leagues_container}>
        <RenderIfTrue condition={!loading}>
          {data &&
            data.getLeague.map((data: any, idx: number) => (
              <League data={data} />
            ))}
        </RenderIfTrue>
      </div>
    </div>
  );
};

export default Leagues;
