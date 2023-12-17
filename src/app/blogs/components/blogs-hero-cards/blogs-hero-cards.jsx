import Card from "../../../../components/ui/card/card";

const BlogsHeroCards = ({ data }) => {
  return (
    <div className="bg-[#f6f6f7] py-4 min-h-[110vh] px-8 md:px-20 flex flex-col items-center">
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 h-full gap-6 mt-72">
        {data.map((blog) => {
          return (
            <Card
              key={blog.id}
              data={{
                cardImage: blog.blogImage,
                cardTag: blog.blogTag,
                cardReading: blog.blogRead,
                cardDate: blog.blogDate,
                cardTitle: blog.blogTitle,
                cardSlug: blog.blogSlug,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogsHeroCards;
