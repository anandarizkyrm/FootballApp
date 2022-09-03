import Highlights from "../Highlights/Highlights";
import { useFetch } from "../Hooks/useFetch";
import RenderIfTrue from "../RenderIfTrue/RenderIfTrue";
import style from "./Home.module.css";
const Home: any = () => {
  const { data }: any = useFetch(
    `https://www.scorebat.com/video-api/v3/feed/?token=${process.env.REACT_APP_API_VIDEO}`
  );

  return (
    <div className={style.main}>
      <div className={style.header}>
        <h2>Watch the latest football highlights across Europe & America</h2>
        <h4 style={{ color: "gray", margin: 0, padding: 0 }}>
          Bringing you livescores,standings,stats,live streaming url's &
          highlights from all over Europe and America on the palm of your hands
        </h4>
      </div>
      <RenderIfTrue condition={data ? true : false}>
        <Highlights matches={data?.response} />
      </RenderIfTrue>
      {/* <div
        style={{
          width: "100%",
          height: "0px",
          position: "relative",
          paddingBottom: "56.250%",
          background: "#000",
        }}
      >
        <iframe
          src="https:/www.scorebat.com/embed/v/dE1WZkxOaVJHR2t0ODhDR0tLT2xIQT09/?token=MjUyODlfMTY2MTk0OTU0M19hMTg1ZTQ4OGQ1NWI3ODNkMDUyMGVhN2JmNzJmNmU2Y2YwOTUwOTEz&utm_source=api&utm_medium=video&utm_campaign=apifd"
          frameBorder="0"
          width="100%"
          height="100%"
          allowFullScreen
          allow="autoplay; fullscreen"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0px",
            top: "0px",
            overflow: "hidden",
          }}
        ></iframe>
      </div> */}
      {/* <iframe
        src="https://www.scorebat.com/embed/?token=MjUyODlfMTY2MTkwNzkxOF80YWEzZTUxZmNjNDY5MjAwNDc1YjlhNmQwYTExNGQwOTQzODA5MDA5"
        frameBorder="0"
        width="600"
        height="760"
        allowFullScreen
        allow="autoplay; fullscreen"
        style={{
          width: "100%",
          height: "760px",
          overflow: "hidden",
          display: "block",
        }}
        className="_scorebatEmbeddedPlayer_"
      ></iframe> */}
    </div>
  );
};

export default Home;
