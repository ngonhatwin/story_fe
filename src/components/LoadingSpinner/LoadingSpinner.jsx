export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 pointer-events-none">
      <div className="relative w-12 h-12 rounded-full border-4 border-white border-t-transparent animate-spin">
        <div className="absolute inset-0 m-auto w-10 h-10 rounded-full border-4 border-transparent border-b-red-500 border-r-red-500 animation-rotation-back"></div>
        <div className="absolute inset-0 m-auto w-8 h-8 rounded-full border-4 border-white border-t-transparent animation-rotation"></div>
      </div>
    </div>
  );
};
