import AddNewReviewForm from "./Reviews/AddNewReviewForm";

export default function Reviews() {
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
            <div className="overflow-hidden bg-white rounded-md">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-7.jpg"
                    alt=""
                  />
                  <div className="min-w-0 ml-3 mr-auto">
                    <p className="text-base font-semibold text-black truncate">
                      Annette Black
                    </p>
                    <p className="text-sm text-gray-600 truncate">@darrels</p>
                  </div>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change and click save.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
