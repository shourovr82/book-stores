import { useForm } from "react-hook-form";
import { IBook } from "../../interfaces/book.interfaces";
import { useAddNewBookMutation } from "../../redux/features/books/booksSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

export default function AddNewBook() {
  const [addNewBook] = useAddNewBookMutation();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state?.auth || {});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBook>();

  const onSubmit = (data: IBook) => {
    const book = {
      title: data.title,
      author: data.author,
      genre: data.genre,
      image: data?.image,
      publicationDate: data.publicationDate,
      email: user?.email,
      name: user?.fullName,
      userId: user?._id,
    };
    addNewBook(book);
    toast.success("Successfully added new Book");
    navigate("/all-books");
  };
  return (
    <div>
      <section className="py-3 bg-gray-100 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-5xl">
          <div className="max-w-5xl mx-auto mt-3">
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="px-6  sm:p-10">
                <h3 className="text-3xl font-semibold text-center text-gray-900">
                  Add new Book
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                  <div className="gap-4 grid grid-cols-2 justify-center items-center">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Book Title
                        <span className="ml-2 text-red-800 font-semibold text-sm">
                          {errors?.title?.message}
                        </span>
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          {...register("title", {
                            required: "Email is required",
                          })}
                          name="title"
                          id="title"
                          placeholder="Enter your Book Title..."
                          className="block w-full px-4 py-4 shadow-inner shadow-gray-400 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md  caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Author
                        <span className="ml-2 text-red-800 font-semibold text-sm">
                          {errors?.author?.message}
                        </span>
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          {...register("author", {
                            required: "Author is required",
                          })}
                          name="author"
                          id="author"
                          placeholder="Author ..."
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
                        <span className="ml-2 text-red-800 font-semibold text-sm">
                          {errors?.genre?.message}
                        </span>
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          {...register("genre", {
                            required: "Genre is required",
                          })}
                          name="genre"
                          id="genre"
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
                        <span className="ml-2 text-red-800 font-semibold text-sm">
                          {errors?.publicationDate?.message}
                        </span>
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          {...register("publicationDate", {
                            required: "publication Year is required",
                          })}
                          name="publicationDate"
                          id="publicationDate"
                          placeholder="Enter your Book Publication Year..."
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
