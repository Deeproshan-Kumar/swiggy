import React, { useEffect, useState } from "react";
import useHelp from "../hooks/useHelp";

const Help = () => {
  const [type, setType] = useState("partner-onboarding");
  const [loading, setLoading] = useState(false);
  const result = useHelp(type);

  useEffect(() => {
    if (result) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [result]);

  const handleHelpBy = (selectedType) => {
    setType(selectedType);
    setLoading(true);
  };

  return (
    <section className="bg-[#37718e]">
      <div className="max-w-7xl w-full mx-auto">
        <div className="py-10">
          <h1 className="text-3xl font-bold text-white mb-1">Help & Support</h1>
          <p className="text-white">
            Let's take a step ahead and help you better.
          </p>
        </div>
        <div className="min-h-screen flex gap-7 bg-white p-14 dark:bg-black">
          <div className="w-3/12 bg-[#edf1f7] p-4 pr-0 dark:bg-gray-900">
            <button
              onClick={() => handleHelpBy("partner-onboarding")}
              className="block w-full text-left font-medium text-gray-700 p-5 pl-8 dark:text-gray-200"
            >
              <span
                className={
                  type === "partner-onboarding"
                    ? "text-[#ff5200]"
                    : "text-gray-700 dark:text-gray-200"
                }
              >
                Partner Onboarding
              </span>
            </button>
            <button
              onClick={() => handleHelpBy("legal")}
              className="block w-full text-left font-medium text-gray-700 p-5 pl-8 dark:text-gray-200"
            >
              <span
                className={
                  type === "legal"
                    ? "text-[#ff5200]"
                    : "text-gray-700 dark:text-gray-200"
                }
              >
                Legal
              </span>
            </button>
            <button
              onClick={() => handleHelpBy("faq")}
              className="block w-full text-left font-medium text-gray-700 p-5 pl-8 dark:text-gray-200"
            >
              <span
                className={
                  type === "faq"
                    ? "text-[#ff5200]"
                    : "text-gray-700 dark:text-gray-200"
                }
              >
                FAQs
              </span>
            </button>
            <button
              onClick={() => handleHelpBy("instamart_onboarding")}
              className="block w-full text-left font-medium p-5 pl-8"
            >
              <span
                className={
                  type === "instamart_onboarding"
                    ? "text-[#ff5200]"
                    : "text-gray-700 dark:text-gray-200"
                }
              >
                Instamart Onboarding
              </span>
            </button>
          </div>
          <div className="w-9/12">
            <div className="w-full h-full py-7 flex justify-center items-center">
              {loading ? (
                <div className="h-12 w-12 border-4 border-t-transparent border-[#ff5200] rounded-full animate-spin"></div>
              ) : (
                <div className="h-full w-full">
                  {result?.meta?.type === "partner-onboarding" && (
                    <h2 className="text-2xl font-bold text-black dark:text-white">
                      Partner Onboarding
                    </h2>
                  )}
                  {result?.meta?.type === "legal" && (
                    <h2 className="text-2xl font-bold text-black dark:text-white">
                      Legal
                    </h2>
                  )}
                  {result?.meta?.type === "faq" && (
                    <h2 className="text-2xl font-bold text-black dark:text-white">
                      FAQ
                    </h2>
                  )}
                  {result?.meta?.type === "instamart_onboarding" && (
                    <h2 className="text-2xl font-bold text-black dark:text-white">
                      Instamart Onboarding
                    </h2>
                  )}
                  {result?.data.map((data) => {
                    const { id, title, description, hyperLinkText, hyperLink } =
                      data;
                    return (
                      <div
                        key={id}
                        className="py-5 border-b border-b-gray-300 cursor-pointer dark:border-b-gray-700"
                      >
                        <details>
                          <summary className="text-gray-700 text-md transition-all duration-200 hover:text-[#ff5200] dark:text-gray-200">
                            {title}
                          </summary>
                          <p className="text-gray-700 text-sm my-2 dark:text-gray-500">
                            {description}
                          </p>
                          {hyperLink && (
                            <a
                              href={hyperLink}
                              className="inline-block text-[#ff5200] border border-[#ff5200] rounded-md p-2"
                            >
                              {hyperLinkText}
                            </a>
                          )}
                        </details>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-14"></div>
    </section>
  );
};

export default Help;
