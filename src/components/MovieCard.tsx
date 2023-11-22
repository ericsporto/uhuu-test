interface MovieCardProps {
  background?: string;
  name?: string;
  date?: string;
}
const MovieCard: React.FC<MovieCardProps> = ({ background, name, date }) => {
  const path = `https://image.tmdb.org/t/p/w500` + background;
  const noImage = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"

  const cardStyle = {
    backgroundImage: background ? `url(${path})` : `url(${noImage})`,
  };

  return (
    <div className="w-full max-w-[176px] h-[320px] mb-10">
      <div
        className="w-full h-[264px] bg-contain rounded overflow-hidden border border-[#E7E7E7] cursor-pointer hover:opacity-80"
        style={cardStyle}
      ></div>
      <p className="font-bold text-base leading-6 mt-2">{name}</p>
      <p className="font-bold text-sm leading-6 text-theme-basic">{date}</p>
    </div>
  );
};

export default MovieCard;
