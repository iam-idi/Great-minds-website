import bluehouse from '../assets/images/bluehouse.png';
import lumina from '../assets/images/lumina.png';
import loginallabs from '../assets/images/loginallabs.png';
import nhub from '../assets/images/nhub.png';
import kchub from '../assets/images/kchub.png';
import decentdesigns from '../assets/images/decentdesigns.png';
import stl from '../assets/images/stl.png';
import mehub from '../assets/images/mehub.png';

const logos = [
  bluehouse,
  lumina,
  nhub,
  loginallabs,
  kchub,
  decentdesigns,
  stl,
  mehub, 
];

const Slider = () => {
  return (
    <div className="overflow-hidden w-full mt-10 sm:mt-14 py-4 rounded-l-full rounded-r-full">
      <div className="flex w-max animate-scroll">
        {logos.map((logo, index) => (
          <div key={index} className="mx-4">
            <img src={logo} alt={`logo-${index}`} className="bg-slate-400  border-sky-700 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="mx-4">
            <img src={logo} alt={`logo-${index}`} className="bg-slate-400 border-sky-700 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
