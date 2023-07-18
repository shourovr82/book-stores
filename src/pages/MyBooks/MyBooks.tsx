import { Outlet } from "react-router-dom";
import MyBooksBar from "./MyBooksBar";

const MyBooks = () => {
  return (
    <section className="px-[5px] lg:px-0 py-5 font-inter bg-[#f6f6f7]">
      <div className="container mx-auto">
        <div className="md:grid grid-cols-12 gap-8">
          <MyBooksBar />
          <div className=" col-span-9 bg-gray-200 shadow-book-details-card p-5 ">
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBooks;
