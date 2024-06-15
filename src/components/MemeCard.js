const MemeCard = ({ data }) => {
  const { url, author, title } = data;

  return (
    <div className="border border-black m-4 p-4 w-80 h-auto">
      <div className="truncate">{title}</div>
      <img className="w-64 h-64 p-4 m-4" src={url} alt="meme" />
      <p>{author}</p>
    </div>
  );
};

export default MemeCard;
