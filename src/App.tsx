import React from "react";

const App: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-800">
      <div className="flex space-x-2 items-center">
        <h1 className="text-white text-2xl">Hello World</h1>
        <div className="animate-spin text-3xl">🌎</div>
      </div>
    </div>
  );
};

export default App;
