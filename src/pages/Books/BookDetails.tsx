import poddoja from "../../assets/pddoja.jpg";
import { IoShare } from "react-icons/io5";
import { PiHeartBold } from "react-icons/pi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Reviews from "../../components/Books/Reviews";

export const BookDetails = () => {
  return (
    <div>
      <div className=" py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg  overflow-hidden">
            <div className="md:flex gap-4">
              <div className="md:flex-shrink-0">
                <img
                  className="w-[80%] object-center h-[90%] rounded-2xl "
                  src={poddoja}
                  alt="Product"
                />
              </div>
              <div className="p-6 space-y-5 w-full">
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-2">
                    Product Title
                  </h2>
                  <p className="text-gray-600 font-semibold text-sm mb-4">
                    Author : Shafinur Islam
                  </p>
                  <p className="text-gray-600 font-semibold text-sm mb-4">
                    Genre : Romantic
                  </p>
                </div>

                <div className="flex items-center ">
                  <AiFillStar size="20" />
                  <AiFillStar size="20" />
                  <AiFillStar size="20" />
                  <AiFillStar size="20" />
                  <AiOutlineStar size="20" />
                </div>
                <div className="flex  w-full justify-between items-center">
                  <div className="">
                    <h2 className=" space-x-6  font-semibold text-3xl mb-2">
                      <span className="line-through text-gray-300">$99.99</span>
                      <span className=" text-red-600">$99.99</span>
                    </h2>
                  </div>
                  <div className="flex gap-4 items-center ">
                    <button
                      className="border-2 border-black rounded-md p-2 hover:bg-black hover:text-white duration-300 ease-in-out "
                      type="button"
                    >
                      <IoShare size="20" />
                    </button>
                    <button
                      className="border-2 border-black rounded-md p-2 hover:bg-black hover:text-white duration-300 ease-in-out"
                      type="button"
                    >
                      <PiHeartBold size="20" />
                    </button>
                  </div>
                </div>

                {/*  */}
                <div>
                  <p className="text-gray-400 font-thin">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores dolore molestias voluptatem ullam. Fuga optio non
                    quisquam vitae eius eveniet quam, dolore tempora, veniam
                    recusandae illum veritatis quis ea minus!
                  </p>
                </div>

                {/* date  and publisher */}
                <div className=" w-2/4">
                  <div className="flex  justify-between">
                    <h4 className="text-gray-400 font-semibold">Publisher :</h4>
                    <h4 className="font-semibold">Shafinur Islam</h4>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="text-gray-400 font-semibold">
                      Date Of Publishing :
                    </h4>
                    <h4 className="font-semibold">20/20/3000 2:20 Pm</h4>
                  </div>
                </div>

                {/* reviews */}
              </div>
            </div>
            {/* review section */}
            <div>
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
