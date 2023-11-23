import { MovieById } from '@/interfaces/movieById';

interface VideoProps {
  movie?: MovieById;
}

const VideoField: React.FC<VideoProps> = ({ movie }) => {
  const path = `https://image.tmdb.org/t/p/w500` + movie?.video;
  const noVideo =
    'https://png.pngtree.com/png-clipart/20210710/ourlarge/pngtree-prohibition-sign-prohibits-taking-pictures-png-image_3551454.jpg';

  const cardStyle = {
    backgroundImage: `url(${noVideo})`,
    backgroundPosition: 'center',
  };

  return (
    <section className="w-full flex flex-col pt-10 px-4 lg:px-28">
      <span className="font-bold text-theme-dark text-[28px] leading-8">
        Trailer
      </span>
      <div className="w-full py-8 flex overflow-hidden">
        {movie?.video ? (
          <video  className="w-full h-full"
          controls
          style={{ maxWidth: '907px' }} >
            <source src={path} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        ) : (
          <div
            className="w-full lg:w-[907px] h-[182px] lg:h-[510px] bg-contain bg-no-repeat bg-theme-neutral rounded overflow-hidden border border-[#E7E7E7]"
            style={cardStyle}
          ></div>
        )}
      </div>
    </section>
  );
};

export default VideoField;
