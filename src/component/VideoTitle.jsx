const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-40 left-3 max-w-xl bg-gradient-to-r from-black/90 via-black/50 to-transparent p-6 rounded-md">
      <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
      <p className="text-gray-300 mb-6">{overview}</p>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-md font-semibold shadow hover:bg-gray-200 transition">
          <span>⯈</span> Play
        </button>
        <button className="flex items-center gap-2 bg-gray-700 bg-opacity-70 text-white px-5 py-3 rounded-md font-semibold shadow hover:bg-gray-600 transition">
          <span>🛈</span> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
