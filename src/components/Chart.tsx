export const Chart = () => {
  return (
    <div className="w-full flex gap-4 mx-2">
      {[1, 2, 3, 4, 5, 6, 7].map((idx) => (
        <div key={idx} className="w-8 h-40 bg-gray-100 relative z-0">
          <div className="h-10 w-full bg-gray-900 absolute bottom-0 z-10"></div>
        </div>
      ))}
      <div className="h-full flex flex-col content-between">
        <div>100</div>
        <div>50</div>
        <div>0</div>
      </div>
    </div>
  );
};
