import { useForm } from "react-hook-form";
import { useAddNewReviewMutation } from "../../../redux/features/reviews/reviewApiSlice";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/hook";
import { toast } from "react-hot-toast";

interface IAddNewReview {
  review: string;
}

export default function AddNewReviewForm() {
  const { register, handleSubmit, reset } = useForm<IAddNewReview>();
  const [addNewReview, { isError, isLoading }] = useAddNewReviewMutation();
  const { id } = useParams();

  const { user } = useAppSelector((state) => state.auth || {});

  const onSubmit = (data: IAddNewReview) => {
    const newReview = {
      id,
      data: {
        review: data.review,
        email: user?.email,
        fullName: user?.fullName,
        userId: user?._id,
      },
    };
    addNewReview(newReview);
    toast.success("Successfully Added a review 🥰");
    reset();
  };

  return (
    <div className=" w-2/4 rounded-md ">
      {isLoading && <p className="text-green-800 font-semibold">Loading...</p>}
      {isError && (
        <p className="text-red-800 font-semibold">Something went wrong!!!</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("review", { required: true })}
          name="review"
          placeholder="Enter your reviews..."
          className="border-black border-2 shadow-lg  w-full h-20 p-2 rounded-md"
        />
        <div className="text-end w-full">
          <button
            type="submit"
            className="border-2 border-black rounded-md font-semibold duration-300 ease-in-out transition-all active:scale-95 hover:bg-black hover:text-white  px-2 py-1 "
          >
            Add New Review
          </button>
        </div>
      </form>
    </div>
  );
}
