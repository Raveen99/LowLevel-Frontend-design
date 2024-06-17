import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchMemes();
    }
  };

  const fetchMemes = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/25");
    const json = await data.json();
    setShowShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  };
  return (
    <div className="flex flex-wrap">
      {memes.map((meme, i) => (
        <MemeCard key={i} data={meme} />
      ))}
      {showShimmer ? <Shimmer /> : ""}
    </div>
  );
};

export default Body;
