import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { FaArrowDown, FaRegClock, FaStar } from "react-icons/fa";

const RestDetail = () => {
  const { isLoading, error, restaurant } = useSelector(
    (store) => store.product
  );
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error msg={error} />
      ) : (
        restaurant && (
          <div className="flex gap-5">
            <img
              className="w-[150px] max-md:w-[100px] rounded"
              src={restaurant.photo}
            />
            <div className="flex flex-col justify-between">
              <p className="flex gap-5">
                <span className="flex items-center gap-2">
                  {" "}
                  <FaArrowDown className="text-red-500" /> Min{" "}
                  {restaurant.minPrice} Eur
                </span>
                <span className="flex items-center gap-2">
                  {" "}
                  <FaRegClock className="text-red-500" />{" "}
                  {restaurant.estimatedDelivery}Minute
                </span>
              </p>
              <h1 className="text-2xl md:text-3xl font-semibold">
                {restaurant.name}
              </h1>
              <p className="flex items-center gap-2">
                <FaStar className="text-red-500" />
                {restaurant.rating}
                <button className="text-red-500 font-semibold p-1 rounded hover:bg-red-100 transition">
                  See Comments
                </button>
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default RestDetail;
