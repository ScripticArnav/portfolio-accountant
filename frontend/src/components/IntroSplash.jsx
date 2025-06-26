import React from "react";

const IntroSplash = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-600 to-red-900">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white animate-textPop">
        AS Fintacxx Solutions
      </h1>
      <style>{`
        @keyframes textPop {
          0% { transform: scale(0.7); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-textPop {
          animation: textPop 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>
    </div>
  );
};

export default IntroSplash; 