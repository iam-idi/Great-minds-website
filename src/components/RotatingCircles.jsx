// src/components/RotatingCircles.jsx
import Circle from "./Circle"; // Import Circle component

const RotatingCircles = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-10 sm:mb-0">
      {/* Top two circles */}
      <div className="flex justify-center space-x-8 mb-6">
        <Circle label="Useful" />
        <Circle label="Secure" />
      </div>
      {/* Bottom centered circle */}
      <div className="flex justify-center">
        <Circle label="Scalable" />
      </div>
    </div>
  );
};

export default RotatingCircles;
