import { reviews } from "../data";

const ReviewBox = ({ image, name, review, rating }) => (
  <div className="flex items-center gap-4 shadow-2xl shadow-[#6366f1] p-5 rounded-lg ">
    <img
      src={image}
      alt="#"
      className="w-[100px] h-[100px] object-cover rounded-full"
    />
    <div className="flex flex-col items-center justify-center">
      <p className="text-gray-400 text-center">{review}</p>
      <span className="text-white capitalize my-3">
        {name} <span className="text-[#6366f1]">{rating}</span>
      </span>
      <div className="flex items-center gap-2">
        <svg className="w-[30px] h-[30px] " viewBox="0 0 16 16">
          <path
            fill="#fbbf24"
            d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z"
          ></path>
        </svg>
        <svg className="w-[30px] h-[30px]" viewBox="0 0 16 16">
          <path
            fill="#fbbf24"
            d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z"
          ></path>
        </svg>
        <svg className="w-[30px] h-[30px]" viewBox="0 0 16 16">
          <path
            fill="#fbbf24"
            d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z"
          ></path>
        </svg>
        <svg className="w-[30px] h-[30px]" viewBox="0 0 16 16">
          <path
            fill="#fbbf24"
            d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z"
          ></path>
        </svg>
        <svg className="w-[30px] h-[30px]" viewBox="0 0 16 16">
          <path
            fill="#fbbf24"
            d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
);

const Review = () => {
  return (
    <div className="my-[80px] px-4 md:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 my-[40px]">
          {reviews.map((review) => (
            <ReviewBox {...review} key={review.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
