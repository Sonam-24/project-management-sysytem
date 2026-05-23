import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>

        <p className="mt-4 text-xl font-semibold text-gray-700">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;