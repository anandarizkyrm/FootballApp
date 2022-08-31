import { useFetch } from "../Hooks/useFetch";
import RenderIfTrue from "../RenderIfTrue/RenderIfTrue";
import style from "./Home.module.css";

const Home: any = () => {
  const { data } = useFetch(
    `https://www.scorebat.com/video-api/v3/feed/?token=${process.env.REACT_APP_API_VIDEO}`
  );

  console.log(data);
  return (
    <div className={style.main}>
      <div className={style.header}>
        <h2>Watch the latest football highlights across Europe & America</h2>
        <h4>
          Bringing you livescores,standings,stats,live streaming url's &
          highlights from all over Europe and America on the palm of your hands
        </h4>
      </div>
      <RenderIfTrue condition={false}>
        <h1>sdads</h1>
      </RenderIfTrue>
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
