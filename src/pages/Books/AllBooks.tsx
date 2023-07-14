import BooksCard from "../../components/Books/BooksCard";

export default function AllBooks() {
  return (
    <div>
      <section className="px-[15px] lg:px-0 py-10 font-inter mt-[60px] bg-[#f6f6f7]">
        <div className="container mx-auto">
          <div className="md:grid grid-cols-12 gap-8">
            {/* Books */}
            <div className="col-span-9 bg-gray-200 shadow-book-details-card rounded-md p-3">
              <BooksCard />
            </div>
            {/* Filter */}
            <div className="col-span-3 shadow-book-details-card bg-white mb-8 md:mb-0">
              {/* Search bar */}
              <div className="border-b border-[#dadada]">
                <div className="border-b border-[#dadada] py-3">
                  <h4 className="text-lg font-semibold text-[#333] px-5 capitalize">
                    Search
                  </h4>
                </div>
                <div className="py-5 space-y-1">
                  <div className="flex items-center px-5">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full border border-[#dadada] py-2 px-3 focus:outline-none focus:ring-1 focus:ring-etlc-theme"
                    />
                  </div>
                </div>
              </div>
              {/* Genre Filtering */}
              <div className="border-b border-[#dadada]">
                <div className="border-b border-[#dadada] py-3">
                  <h4 className="text-lg font-semibold text-[#333] px-5 capitalize">
                    Genre
                  </h4>
                </div>
                <div className="py-5 space-y-1">
                  <div className="flex items-center px-5">
                    <input
                      type="checkbox"
                      name="category"
                      id="action"
                      className="mr-2"
                    />
                    <label htmlFor="action">Action</label>
                  </div>
                  <div className="flex items-center px-5">
                    <input
                      type="checkbox"
                      name="category"
                      id="drama"
                      className="mr-2"
                    />
                    <label htmlFor="drama">Drama</label>
                  </div>
                  <div className="flex items-center px-5">
                    <input
                      type="checkbox"
                      name="category"
                      id="comedy"
                      className="mr-2"
                    />
                    <label htmlFor="comedy">Comedy</label>
                  </div>
                </div>
              </div>
              {/* Genre Filtering */}
              <div>
                <div className="border-b border-[#dadada] py-3">
                  <h4 className="text-lg font-semibold text-[#333] px-5 capitalize">
                    publication year
                  </h4>
                </div>
                <div className="py-5 space-y-1">
                  <div className="flex items-center px-5">
                    <input
                      type="checkbox"
                      name="category"
                      id="date1"
                      className="mr-2"
                    />
                    <label htmlFor="date1">22 June 2023</label>
                  </div>
                  <div className="flex items-center px-5">
                    <input
                      type="checkbox"
                      name="category"
                      id="date2"
                      className="mr-2"
                    />
                    <label htmlFor="date2">22 June 2023</label>
                  </div>
                  <div className="flex items-center px-5">
                    <input
                      type="checkbox"
                      name="category"
                      id="date3"
                      className="mr-2"
                    />
                    <label htmlFor="date3">22 June 2023</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
