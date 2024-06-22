import React from "react";

export const PaginationShimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(10)
        .fill(0)
        .map((n, i) => (
          <div className="shadow-md m-8 h-96">
            <div className="">
              <div className="w-72 h-64 bg-gray-200 border-b-2"></div>
              <div className="p-2 w-72">
                <div className="w-64 h-2 bg-slate-200 mb-2"></div>
                <div className="w-56 h-2 bg-slate-200 mb-2"></div>
                <div className="w-52 h-2 bg-slate-200 mb-2"></div>
                <div className="w-44 h-2 bg-slate-200 truncate"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
