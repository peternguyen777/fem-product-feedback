import React from "react";

function ProgressBar({
  filterRoadmap,
  setFilterRoadmap,
  reqPlanned,
  reqProgress,
  reqLive,
}) {
  return (
    <div className='grid h-[59px] select-none grid-cols-3 border-b border-[#8C92B3] border-opacity-25 md:hidden'>
      <div
        className='group relative mt-5 cursor-pointer'
        onClick={() => setFilterRoadmap("Planned")}
      >
        <p
          className={`body3 text-center text-lightnavy opacity-40 group-hover:opacity-100 ${
            filterRoadmap !== "Planned" ? `opacity-40` : `opacity-100`
          }`}
        >
          Planned ({reqPlanned?.length || 0})
        </p>
        <div
          className={`absolute -bottom-[1px] h-1 w-full bg-blue ${
            filterRoadmap !== "Planned" && `hidden`
          }`}
        />
      </div>
      <div
        className='group relative mt-5 cursor-pointer'
        onClick={() => setFilterRoadmap("In-Progress")}
      >
        <p
          className={`body3 text-center text-lightnavy opacity-40 group-hover:opacity-100 ${
            filterRoadmap !== "In-Progress" ? `opacity-40` : `opacity-100`
          }`}
        >
          In-In-Progress ({reqProgress?.length || 0})
        </p>
        <div
          className={`absolute -bottom-[1px] h-1 w-full bg-blue ${
            filterRoadmap !== "In-Progress" && `hidden`
          }`}
        />
      </div>
      <div
        className='group relative mt-5 cursor-pointer'
        onClick={() => setFilterRoadmap("Live")}
      >
        <p
          className={`body3 text-center text-lightnavy opacity-40 group-hover:opacity-100 ${
            filterRoadmap !== "Live" ? `opacity-40` : `opacity-100`
          }`}
        >
          Live ({reqLive?.length || 0})
        </p>
        <div
          className={`absolute -bottom-[1px] h-1 w-full bg-blue ${
            filterRoadmap !== "Live" && `hidden`
          }`}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
