import { getAbberviation } from "../../../../../utils/getAbbreviation";
import style from "./PlayerResultSearch.module.css";

interface IProps {
  data: any;
}
function PlayerResultSearch({ data }: IProps) {
  return (
    <div className={style.main}>
      <div>
        <img width={80} height={60} alt={data.firstName} src={data.flag} />
      </div>
      <div className={style.textContainer}>
        <p>
          {data.firstName}
          <span style={{ fontWeight: 500 }}> {data.lastName}</span>
        </p>
        <div style={{ display: "flex" }}>
          {data?.position?.map((data: any, idx: number) => (
            <p
              key={idx}
              style={{
                fontSize: "12px",
                marginRight: "12px",
                color: "gray",
              }}
            >
              {data}
            </p>
          ))}
        </div>
        <p style={{ fontSize: "12px" }}>
          {data.club} {getAbberviation(data.club)}
        </p>
      </div>
    </div>
  );
}

export default PlayerResultSearch;
