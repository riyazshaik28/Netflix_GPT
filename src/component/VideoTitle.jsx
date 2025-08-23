const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video p-4 pt-[15%] rounded-lg absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white mb-2">{title}</h1>
      <p className="text-lg text-white  py-6 w-1/4">{overview}</p>
     <div className="flex gap-4 mt-4">
  <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold text-lg shadow-md cursor-pointer hover:bg-gray-200 transition duration-200">
    <span>🎥</span>
    <span>Play</span>
  </button>

  <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold text-lg shadow-md cursor-pointer hover:bg-gray-200 transition duration-200 ">
    <span>🛈</span>
    <span>More Info</span>
  </button>
</div>
    </div>
  );
};

export default VideoTitle;
