

const logos = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];

const Slider = () => {
  return (
    <div className="overflow-hidden w-full mt-10 sm:mt-14 py-4 rounded-l-full rounded-r-full">
      <div className="flex w-max animate-scroll">
        {logos.map((logo, index) => (
          <div key={index} className="mx-4">
            <img src={logo} alt={`logo-${index}`} className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="mx-4">
            <img src={logo} alt={`logo-${index}`} className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
