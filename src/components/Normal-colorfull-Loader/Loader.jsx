import { useState, useEffect } from "react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Optional: You could add logic here to control visibility
    // For example, hide loader after certain time
  }, []);

  return (
    <div className="flex items-center">
      <div className={`relative w-24 h-24 ${isVisible ? "block" : "hidden"}`}>
        {/* Spinner container with animation */}
        <div
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: "1.5s" }}
        >
          {/* 8 dots positioned in a circle */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((degree, index) => {
            const transformValue = `rotate(${degree}deg) translateY(-32px)`;
            const animationDelay = `${index * 0.15}s`;

            return (
              <div
                key={index}
                className="absolute w-4 h-4 bg-blue-500 rounded-full opacity-20 left-10 top-10"
                style={{
                  transform: transformValue,
                  transformOrigin: "center",
                  animation: "pulse 1.5s ease-in-out infinite",
                  animationDelay,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Add animation keyframes with style tag */}
      <style jsx={"true"}>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
