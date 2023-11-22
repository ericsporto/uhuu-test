import { useRouter } from 'next/navigation';

interface CastCardProps {
  background?: string;
  name?: string;
  country?: string;
}
const CastCard: React.FC<CastCardProps> = ({ background, name, country }) => {
  const path = `https://image.tmdb.org/t/p/w500` + background;
  const noImage =
    'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  const cardStyle = {
    backgroundImage: background ? `url(${path})` : `url(${noImage})`,
  };

  return (
    <div className="w-full max-w-[191px] h-[336px] p-2 bg-theme-neutral rounded border shadow-xl">
      <div
        className="w-[175px] h-[222px] bg-contain rounded overflow-hidden border border-[#E7E7E7]"
        style={cardStyle}
      ></div>
      <p className="font-bold text-lg leading-[30px] text-theme-dark mt-4">{name}</p>
      <p className="font-normal text-base leading-6 text-theme-dark">{country}</p>
    </div>
  );
};

export default CastCard;
