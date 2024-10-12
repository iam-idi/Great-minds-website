

const logos = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];

const Slider = () => {
  return (
    <div className="overflow-hidden w-full py-4 bg-gray-100">
      <div className="flex w-max animate-scroll">
        {logos.map((logo, index) => (
          <div key={index} className="mx-4">
            <img src={logo} alt={`logo-${index}`} className="w-36" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="mx-4">
            <img src={logo} alt={`logo-${index}`} className="w-36" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
