import { MovieById } from '@/interfaces/movieById';
import CastCard from './CastCard';

interface CarrouselProps {
  movie?: MovieById;
}

const CarrouselField: React.FC<CarrouselProps> = ({ movie }) => {
  return (
    <section className="w-full flex flex-col pt-12 lg:pt-24 px-4 lg:px-28">
      <span className="font-bold text-theme-dark text-[28px] leading-8">
        Elenco original
      </span>
      <div className='w-full py-8 flex overflow-auto gap-4'>
        {movie?.production_companies.map((item) => (
          <CastCard
            key={item.id}
            background={item.logo_path}
            name={item.name}
            country={item.origin_country}
          />
        ))}
      </div>
    </section>
  );
};

export default CarrouselField;
