/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link } from "react-router-dom";
import { IProps } from "../../interfaces/book.interfaces";

export default function BookCard({ book }: IProps) {
  const { title, author, genre, _id, publicationDate } = book || {};

  return (
    <div className="w-full">
      <Link to={`/book-details/${_id}`}>
        <div className="hover:ring-2 hover:shadow-xl shadow-gray-500 transition-all duration-300 hover:cursor-pointer border-green-800 rounded-lg bg-white">
          <img
            src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg"
            alt="image"
            className="w-full"
          />
          <div className=" text-center px-4 py-3">
            <div>
              <h3 className="text-start font-bold text-sm">{title}</h3>
              <p className="text-start my-2 text-[#758293] mb-3 text-xs font-medium ">
                Genre : {genre}
              </p>
            </div>
            {/* author details */}
            <div>
              <hr />
              <div className="my-2 ">
                <div className="text-start">
                  <h4 className="text-sm font-semibold">Author : {author}</h4>
                  <p className="text-xs text-[#abb1b8] font-semibold">
                    Fullstack Developer
                  </p>
                </div>

                <div className="text-start mt-1">
                  <h2 className="text-sm font-semibold">Publication Date</h2>
                  <p className="text-xs text-[#abb1b8] font-semibold">
                    {publicationDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
