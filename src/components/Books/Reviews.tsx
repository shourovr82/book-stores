import { useParams } from "react-router-dom";
import { useGetReviewsQuery } from "../../redux/features/reviews/reviewApiSlice";
import AddNewReviewForm from "./Reviews/AddNewReviewForm";
import { IReview } from "../../interfaces/book.interfaces";

export default function Reviews() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetReviewsQuery(id);

  return (
    <>
      <section className=" bg-gray-50 rounded-lg py-5">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className=" flex justify-between ">
            <h2 className="text-3xl  font-bold  leading-tight text-black sm:text-4xl lg:text-5xl">
              Book Reviews
            </h2>
            <AddNewReviewForm />
          </div>

          <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 ">
            {isLoading && (
              <p className="text-xl font-semibold text-green-800 ">
                Loading...
              </p>
            )}

            {isError && (
              <p className="text-xl font-semibold text-red-800 ">
                Something Error Occurred !!!
              </p>
            )}
            {data?.data?.map((singleReview: IReview) => (
              <div
                key={singleReview?._id}
                className="overflow-hidden bg-white rounded-md"
              >
                <div className="px-5 py-6">
                  <div className="flex items-center justify-between">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-7.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3 mr-auto">
                      <p className="text-base font-semibold text-black truncate">
                        {singleReview?.fullName}
                      </p>
                      <p className="text-sm text-gray-600 truncate">
                        @{singleReview?.fullName?.slice(0, 5)?.toLowerCase()}
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-5">
                    <p className="text-base text-gray-800">
                      {singleReview?.review}
                    </p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
