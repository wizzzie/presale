import { issues } from "../data";

const Issues = ({ name, text, btn, setShow }) => (
  <div className="flex flex-col items-center p-5 gap-[15px] bg-[#0f172a46] backdrop-blur-xl rounded-xl shadow-2xl shadow-[#0084d6]">
    <span className="bg-white h-[30px] w-[30px] rounded-full block"></span>
    <h4 className="text-white capitalize text-2xl text-center">{name}</h4>
    <p className="text-gray-500 text-lg capitalize text-center">{text}</p>
    <button
      className="bg-white text-black py-[15px] px-[30px] capitalize rounded-lg"
      onClick={() => setShow(true)}
    >
      {btn}
    </button>
  </div>
);

const Problem = ({ setShow }) => {
  return (
    <div className="my-[60px] px-4 md:px-0">
      <div className="container mx-auto">
        <div>
          <h2 className="text-white text-center text-2xl md:text-5xl font-semibold mb-[70px]">
            Opening the doors of new world of Dapp experiences.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {issues.map((issue, i) => (
              <Issues {...issue} key={i} setShow={setShow} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
