import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const RouteError = () => {
  const { status, statusText, error } = useRouteError();
  return (
    <section className="absolute top-0 left-0 min-h-screen w-full flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          {status} | {statusText}
        </h2>
        <p className="text-md text-gray-700 mb-2">{error?.message}</p>
        <Link t={"/"} className="text-gray-700 underline text-md">Go back to home</Link>
      </div>
    </section>
  );
};
export default RouteError;
