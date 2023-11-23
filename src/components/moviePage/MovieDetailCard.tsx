interface MovieCardProps {
  background?: string;
}
const MovieDetailCard: React.FC<MovieCardProps> = ({ background }) => {
  const path = `https://image.tmdb.org/t/p/w500` + background;
  const noImage =
    'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  const cardStyle = {
    backgroundImage: background ? `url(${path})` : `url(${noImage})`,
    boxShadow: 'box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  };

  return (
    <div
      className="w-[186px] lg:w-[383px] h-[279px] lg:h-[574px] bg-contain bg-no-repeat rounded-lg overflow-hidden border border-[#E7E7E7]"
      style={cardStyle}
    ></div>
  );
};

export default MovieDetailCard;
