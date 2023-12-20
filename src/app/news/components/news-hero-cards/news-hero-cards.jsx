import ReactPaginate from "react-paginate";

import Card from "../../../../components/ui/card/card";
import { useState } from "react";

const NewsHeroCards = ({ data }) => {
  const itemsPerPage = 9;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="bg-[#f6f6f7] min-h-[110vh] px-8 md:px-20 flex flex-col items-center">
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full gap-6 mt-32">
        {currentItems.map((news) => {
          return (
            <Card
              key={news.id}
              data={{
                cardImage: news.newsImage,
                cardTag: news.newsTag,
                cardReading: news.newsRead,
                cardDate: news.newsDate,
                cardTitle: news.newsTitle,
                cardSlug: news.newsSlug,
              }}
            />
          );
        })}
      </div>

      <div className="flex flex-row gap-3 [&>ul]:flex [&>ul]:flex-row [&>ul]:gap-3 [&>ul]:items-center mb-4">
        <ReactPaginate
          activeClassName="bg-[#191919] text-white px-3 py-2 text-xl rounded-md mr-2"
          breakLabel="..."
          nextLabel={
            <button className="border px-3 py-1 rounded-md hover:bg-[#191919] hover:text-white transition">
              Next
            </button>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={
            <button className="border px-3 py-1 rounded-md hover:bg-[#191919] hover:text-white transition">
              Previous
            </button>
          }
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default NewsHeroCards;
