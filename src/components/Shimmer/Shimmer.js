const Shimmer = () => {
  return Array(20)
    .fill(0)
    .map((n, i) => (
      <div key={i} className="border border-black rounded m-4 p-4">
        <div className="w-64 h-64 p-4 m-4 bg-gray-200 rounded" />
        <div className="w-36 h-1 p-1 m-4 bg-gray-200"></div>
      </div>
    ));
};
export default Shimmer;
