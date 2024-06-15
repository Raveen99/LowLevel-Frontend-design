import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    const data = await fetch("https://meme-api.com/gimme/25");
    const json = await data.json();
    setMemes(json.memes);
  };
  return (
    <div className="flex flex-wrap">
      {memes.length > 0 ? (
        memes.map((meme, i) => <MemeCard key={i} data={meme} />)
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
