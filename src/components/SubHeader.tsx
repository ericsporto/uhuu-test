import { Dispatch, SetStateAction, useState } from 'react';

interface SubHeaderProps {
  description: string;
  buttonTitles: string[];
  setSearch: (value: string) => void;
}

const SubHeader: React.FC<SubHeaderProps> = ({
  description,
  buttonTitles,
  setSearch,
}) => {
  const [clickedButtons, setClickedButtons] = useState<string[]>([]);

  const handleButtonClick = (title: string) => {
    if (clickedButtons.includes(title)) {
      const updatedButtons = clickedButtons.filter(
        (button) => button !== title
      );
      setClickedButtons(updatedButtons);
      setSearch(updatedButtons.join('+'));
    } else {
      const updatedButtons = [...clickedButtons, title];
      setClickedButtons(updatedButtons);
      setSearch(updatedButtons.join('+'));
    }
  };
  return (
    <section className="flex flex-col w-full h-[449px] bg-theme-primary p-20 text-center">
      <div className="text-theme-neutral font-bold text-5xl px-56 text-center leading-[56px]">
        {description}
      </div>

      <p className="text-sm font-bold leading-5 text-theme-neutral mt-12">
        FILTRE POR:
      </p>
      <div className="px-24 space-x-3 space-y-3">
        {buttonTitles.map((item, index) => (
          <button
            onClick={() => handleButtonClick(item)}
            key={index}
            className={`h-10 w-fit px-4 bg-theme-neutral rounded text-base font-bold leading-6 ${clickedButtons.includes(item) ? 'bg-theme-buttonMarked text-theme-neutral' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SubHeader;
