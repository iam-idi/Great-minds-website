// src/components/Circle.jsx

// eslint-disable-next-line react/prop-types
const Circle = ({ label }) => {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* Two-piece border */}
      <div className="absolute w-full h-full rounded-full border-t-4 border-l-4 border-blue-500 animate-spin-slow"></div>
      <div className="absolute w-full h-full rounded-full border-b-4 border-r-4 border-blue-500 animate-spin-slow-reverse"></div>
      {/* Text inside the circle */}
      <div className="absolute text-xl font-semibold text-center">{label}</div>
    </div>
  );
};

export default Circle;
