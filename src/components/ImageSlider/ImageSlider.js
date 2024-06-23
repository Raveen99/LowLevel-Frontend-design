import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ImageSlider = () => {
  const images = [
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg",
    "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
    "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg",
    "https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg",
    "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    "https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg",
    "https://images.pexels.com/photos/2526028/pexels-photo-2526028.jpeg",
    "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    "https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg",
    "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
    "https://images.pexels.com/photos/2137781/pexels-photo-2137781.jpeg",
    "https://images.pexels.com/photos/712850/pexels-photo-712850.jpeg",
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToPrev = () => {
    setActive((active) => (active - 1 < 0 ? images.length - 1 : active - 1));
  };

  const goToNext = () => {
    setActive((active) => (active + 1) % images.length);
  };

  return (
    <div className="relative justify-center items-center flex p-20">
      <div className="overflow-hidden">
        <div onClick={goToPrev}>
          <MdKeyboardArrowLeft className="absolute left-0 top-1/2 text-5xl ml-4 cursor-pointer" />
        </div>
        <div className="flex h-[500px] m-10 gap-10">
          <img className="" src={images[active]} alt="slider" />
        </div>

        <div onClick={goToNext}>
          <MdKeyboardArrowRight
            className="absolute right-0 text-5xl top-1/2 m-4 cursor-pointer"
            click={goToNext}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
