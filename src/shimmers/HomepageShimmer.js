import { SiSpinrilla } from "react-icons/si";
const HomepageShimmer = () => {
  return (
    <section>
      <div className="flex justify-center items-center h-[36vh] bg-slate-950 dark:bg-gray-800 animate-pulse">
        <div>
          <div className="h-14 w-14 mx-auto flex justify-center items-center rounded-full border-2 border-t-transparent border-white mb-2 animate-spin">
            <SiSpinrilla className="text-white text-2xl" />
          </div>
          <h2 className="text-white text-2xl font-semibold">
            Looking for great food near you ...
          </h2>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex gap-10">
          <div className="w-2/12 pt-7 border-l border-r border-gray-200 dark:border-gray-800">
            <div className="bg-gray-100 flex items-center gap-5 p-5 animate-pulse dark:bg-gray-800">
              <div className="h-10 w-10 bg-white rounded-full dark:bg-gray-800"></div>
              <div className="h-4 w-6/12 bg-white dark:bg-gray-800"></div>
            </div>
            <div className="flex items-center gap-5 p-5">
              <div className="h-10 w-10 bg-gray-100 rounded-full animate-pulse dark:bg-gray-800"></div>
              <div className="h-4 w-6/12 bg-gray-100 animate-pulse dark:bg-gray-800"></div>
            </div>
            <div className="flex items-center gap-5 p-5">
              <div className="h-10 w-10 bg-gray-100 rounded-full animate-pulse dark:bg-gray-800"></div>
              <div className="h-4 w-6/12 bg-gray-100 animate-pulse dark:bg-gray-800"></div>
            </div>
            <div className="flex items-center gap-5 p-5">
              <div className="h-10 w-10 bg-gray-100 rounded-full animate-pulse dark:bg-gray-800"></div>
              <div className="h-4 w-6/12 bg-gray-100 animate-pulse dark:bg-gray-800"></div>
            </div>
            <div className="flex items-center gap-5 p-5">
              <div className="h-10 w-10 bg-gray-100 rounded-full animate-pulse dark:bg-gray-800"></div>
              <div className="h-4 w-6/12 bg-gray-100 animate-pulse dark:bg-gray-800"></div>
            </div>
          </div>
          <div className="w-10/12">
            <div className="py-12">
              <div className="h-4 w-1/12 bg-gray-100 animate-pulse mb-12 dark:bg-gray-800"></div>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <div className="h-60 w-full bg-gray-100 animate-pulse mb-4 dark:bg-gray-800"></div>
                  <div className="h-5 w-6/12 bg-gray-100 animate-pulse mb-2 dark:bg-gray-800"></div>
                  <div className="h-5 w-3/12 bg-gray-100 animate-pulse dark:bg-gray-800"></div>
                </div>
                <div>
                  <div className="h-60 w-full bg-gray-100 animate-pulse mb-4 dark:bg-gray-800"></div>
                  <div className="h-5 w-6/12 bg-gray-100 animate-pulse mb-2 dark:bg-gray-800"></div>
                  <div className="h-5 w-3/12 bg-gray-100 animate-pulse dark:bg-gray-800"></div>
                </div>
                <div>
                  <div className="h-60 w-full bg-gray-100 animate-pulse mb-4 dark:bg-gray-800"></div>
                  <div className="h-5 w-6/12 bg-gray-100 animate-pulse mb-2 dark:bg-gray-800"></div>
                  <div className="h-5 w-3/12 bg-gray-100 animate-pulse dark:bg-gray-800"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageShimmer;
