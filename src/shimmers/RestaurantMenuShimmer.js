import React from "react";

const RestaurantMenuShimmer = () => {
  return (
    <section>
      <div className="max-w-screen-lg w-full mx-auto py-8">
        <div className="animate-pulse w-2/12 h-5 bg-slate-100 rounded-lg mb-2"></div>
        <div className="animate-pulse w-full h-36 bg-slate-100 rounded-2xl mb-10"></div>
        <div className="animate-pulse w-3/12 h-5 bg-slate-100 rounded-lg mb-2"></div>
        <div className="flex gap-5 mb-10">
          <div className="animate-pulse w-5/12 h-20 bg-slate-100 rounded-2xl"></div>
          <div className="animate-pulse w-5/12 h-20 bg-slate-100 rounded-2xl"></div>
          <div className="animate-pulse w-2/12 h-20 bg-slate-100 rounded-2xl"></div>
        </div>
        <div className="animate-pulse w-1/12 h-5 bg-slate-100 rounded-lg mx-auto mb-2"></div>
        <div>
          <div className="animate-pulse w-full h-[1px] bg-slate-100 my-5"></div>
          <div className="flex justify-between mb-2">
            <div className="animate-pulse w-3/12 h-5 bg-slate-100 rounded-lg"></div>
            <div className="animate-pulse w-1/12 h-5 bg-slate-100 rounded-lg"></div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="w-9/12">
              <div className="animate-pulse w-full h-20 bg-slate-100 rounded-md"></div>
            </div>
            <div className="w-3/12">
              <div className="animate-pulse w-full h-20 bg-slate-100 rounded-md"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="animate-pulse w-full h-[1px] bg-slate-100 my-5"></div>
          <div className="flex justify-between mb-2">
            <div className="animate-pulse w-3/12 h-5 bg-slate-100 rounded-lg"></div>
            <div className="animate-pulse w-1/12 h-5 bg-slate-100 rounded-lg"></div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="w-9/12">
              <div className="animate-pulse w-full h-20 bg-slate-100 rounded-md"></div>
            </div>
            <div className="w-3/12">
              <div className="animate-pulse w-full h-20 bg-slate-100 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenuShimmer;
