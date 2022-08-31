import Match from "./Match";
import style from "./Highlights.module.css";
interface IProps {
  matches: any;
}
const Highlights = ({ matches }: IProps) => {
  return (
    <div>
      {matches.map((match: any) => (
        <Match key={match.videos.id} match={match} />
      ))}
    </div>
  );
};

export default Highlights;
