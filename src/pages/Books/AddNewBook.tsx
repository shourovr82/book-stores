export default function AddNewBook() {
  return (
    <div>
      <section className="py-3 bg-gray-100 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto mt-12 sm:my-16">
            <div className="mt-6 overflow-hidden bg-white rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-gray-900">
                  Add new Book
                </h3>

                <form className="mt-14">
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Book Title
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="Title"
                          id="Title"
                          placeholder="Enter your Book Title..."
                          className="block w-full px-4 py-4 shadow-inner shadow-gray-400 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md  caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="Genre"
                        className="text-base font-medium text-gray-900"
                      >
                        Genre
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="Genre"
                          id="Genre"
                          placeholder="Enter your Book Genre..."
                          className="block w-full px-4 py-4 shadow-inner shadow-gray-400 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md  caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="publicationDate"
                        className="text-base font-medium text-gray-900"
                      >
                        Publication Date
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="datetime-local"
                          name="publicationDate"
                          id="publicationDate"
                          placeholder="Enter your Book Publication Date..."
                          className="block w-full px-4 py-4 shadow-inner shadow-gray-400 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md  caret-blue-600"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600  border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Add new Book
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
