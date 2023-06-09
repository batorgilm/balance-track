export const ListSkeleton = () => {
  return (
    <div className="w-full flex items-center space-x-4">
      <div className="w-10 h-10 rounded-full bg-gray-200"></div>
      <div className="w-full py-6 flex items-end justify-between border-b border-gray-200">
        <div className="h-2 bg-gray-200 rounded-full w-16"></div>
        <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};
