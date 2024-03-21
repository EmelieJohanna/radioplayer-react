import Skeleton from "react-loading-skeleton";

function StationSkeleton() {
  return (
    <div className=" p-4">
      <div className="flex">
        <div className="w-28 h-28 rounded-lg">
          <Skeleton height={112} width={112} />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold">
            <Skeleton width={300} />
          </h2>
          <p>
            <Skeleton width={300} height={20} />
          </p>
          <audio>
            <Skeleton width={200} height={20} />
          </audio>
        </div>
      </div>
    </div>
  );
}

function Skeletons() {
  return (
    <>
      <StationSkeleton />
      <StationSkeleton />
      <StationSkeleton />
      <StationSkeleton />
      <StationSkeleton />
    </>
  );
}

export default Skeletons;
