export default function AddNewReviewForm() {
  return (
    <div className=" w-2/4 rounded-md ">
      <textarea
        placeholder="Enter your reviews..."
        className="border-black border-2 shadow-lg  w-full h-20 p-2 rounded-md"
      />
      <div className="text-end w-full">
        <button className="border-2 border-black rounded-md font-semibold duration-300 ease-in-out transition-all active:scale-95 hover:bg-black hover:text-white  px-2 py-1 ">
          Add New Review
        </button>
      </div>
    </div>
  );
}
