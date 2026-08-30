import data from "@/data/data";

const { blogMedia } = data;

const fillImgStyle = {
  position: "absolute",
  height: "100%",
  width: "100%",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  color: "transparent",
};

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5">
      <path
        fill="#4C4C6D"
        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
      />
    </svg>
  );
}

export default function BlogMedia() {
  const { blogsData, mediaData } = blogMedia;
  const featuredBlog = blogsData[0];
  const secondaryBlog = blogsData[1];
  const featuredMedia = mediaData[0];
  const secondaryMedia = mediaData[1];

  return (
    <div className="text-[#20172A]">
      <h2 className="font-semibold text-[32px] lg:text-[40px] text-[#20172A]">
        {blogMedia.title}
      </h2>
      <div className="flex flex-col lg:flex-row w-full gap-3 md:flex-col lg:h-[91vh] md:mt-6 mt-3">
        <a
          className="flex lg:w-1/2 flex-col h-[65vw] md:h-[50vw] items-end justify-between rounded-[12px] p-3 pt-6 lg:h-full group bg-contain"
          style={{
            backgroundImage: `url(${featuredBlog.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          href={featuredBlog.slug ? `#${featuredBlog.slug}` : "#"}
        >
          <span
            aria-hidden="true"
            className="group-hover:rotate-[-45deg] group flex items-center mr-3 justify-center w-[40px] h-[40px] rounded-[50%] bg-[#F1F6F9] duration-300 transition-transform"
          >
            <ArrowIcon />
          </span>
          <div className="font-medium w-full">
            <p className="text-[14px] text-white w-[78px] rounded-t-[12px] py-1 bg-[#6537A6] text-center">
              Blog
            </p>
            <p className="text-[16px] w-full rounded-[12px] rounded-tl-[0px] p-[10px] bg-opacity-80 bg-white bg-white/80">
              {featuredBlog.title}
            </p>
          </div>
        </a>
        <div className="flex flex-col lg:w-full gap-3">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative lg:w-1/2 md:h-[45vw] lg:h-[40vh] h-[65vw] group">
              <a href={featuredMedia.link} target="_blank" rel="noopener noreferrer">
                <img
                  alt={featuredMedia.alt_text}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full rounded-[12px] object-cover"
                  style={fillImgStyle}
                  src={featuredMedia.image}
                />
              </a>
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 mt-6 group-hover:rotate-[-45deg] group flex items-center mr-3 justify-center w-[40px] h-[40px] rounded-[50%] bg-[#F1F6F9] duration-300 transition-transform"
              >
                <ArrowIcon />
              </span>
              <div className="absolute bottom-0 font-medium w-full">
                <p className="text-[14px] text-white w-[25%] rounded-t-[12px] py-1 text-center mx-3 bg-[#6537A6]">
                  Media
                </p>
                <div className="px-3 pb-3">
                  <p className="text-[16px] w-full rounded-[12px] rounded-tl-[0px] p-[10px] bg-opacity-80 bg-white bg-white/80">
                    {featuredMedia.title}
                  </p>
                </div>
              </div>
            </div>
            <a
              className="flex flex-col items-end justify-between rounded-[12px] md:w-1/2 p-3 pt-6 md:h-[45vw] lg:h-[40vh] h-[65vw] group"
              style={{
                backgroundImage: `url(${secondaryBlog.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              href={secondaryBlog.slug ? `#${secondaryBlog.slug}` : "#"}
            >
              <span
                aria-hidden="true"
                className="group-hover:rotate-[-45deg] group flex items-center mr-3 justify-center w-[40px] h-[40px] rounded-[50%] bg-[#F1F6F9] duration-300 transition-transform"
              >
                <ArrowIcon />
              </span>
              <div className="font-medium w-full">
                <p className="text-[14px] text-white w-[78px] rounded-t-[12px] py-1 bg-[#6537A6] text-center">
                  Blog
                </p>
                <p className="text-[16px] w-full rounded-[12px] rounded-tl-[0px] p-[10px] bg-opacity-80 bg-white bg-white/80">
                  {secondaryBlog.title}
                </p>
              </div>
            </a>
          </div>
          <div className="relative lg:w-full md:h-[45vw] h-[65vw] lg:h-[49vh] group">
            <a href={secondaryMedia.link} target="_blank" rel="noopener noreferrer">
              <img
                alt={secondaryMedia.alt_text}
                loading="lazy"
                decoding="async"
                className="w-full h-full rounded-[12px] object-cover"
                style={fillImgStyle}
                src={secondaryMedia.image}
              />
            </a>
            <span
              aria-hidden="true"
              className="absolute top-0 right-0 mt-6 group-hover:rotate-[-45deg] group flex items-center mr-3 justify-center w-[40px] h-[40px] rounded-[50%] bg-[#F1F6F9] duration-300 transition-transform"
            >
              <ArrowIcon />
            </span>
            <div className="absolute bottom-0 font-medium w-full">
              <p className="text-[14px] text-white w-[25%] rounded-t-[12px] py-1 text-center mx-3 bg-[#6537A6]">
                Media
              </p>
              <div className="px-3 pb-3">
                <p className="text-[16px] w-full rounded-[12px] rounded-tl-[0px] p-[10px] bg-opacity-80 bg-white bg-white/80">
                  {secondaryMedia.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href={blogMedia.moreHref}>
        <div className="relative flex justify-center mt-3 md:mt-6 overflow-hidden">
          <button
            aria-busy="false"
            className="flex font-semibold items-center justify-center w-[132px] h-[44px] gap-[10px] rounded-[12px] text-white duration-500 transition-colors ease-in-out disabled:cursor-not-allowed disabled:opacity-70 bg-[#6537A6]"
          >
            <p>{blogMedia.moreLabel}</p>
            <div className="relative" style={{ transform: "none" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[20px] h-[20px]">
                <path
                  fill="white"
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                />
              </svg>
            </div>
          </button>
        </div>
      </a>
    </div>
  );
}
