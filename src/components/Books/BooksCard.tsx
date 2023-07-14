import BookCard from "./BookCard";

export default function BooksCard() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-5 ">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}
