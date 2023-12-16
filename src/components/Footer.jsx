const Footer = ({ setShow }) => {
  return (
    <div className="px-4 md:px-0">
      <div className="container mx-auto">
        <div className="h-[50vh] flex flex-col items-center justify-center p-5 gap-[15px] border-t bg-gradient-to-b from-[#1e293b] to-transparent rounded-lg border-b border-[#eeeeee68] mb-5">
          <h2 className="capitalize text-gray-400 font-bold text-center text-2xl md:text-4xl">
            We make it easy to plug into Dapp.
          </h2>
          <button
            className="py-[15px] px-[30px] bg-[#6366f1] text-white capitalize border border-[#5355f1] hover:bg-transparent hover:text-[#6366f1] transition-all ease-in-out duration-300 rounded-md mt-5"
            onClick={() => setShow(true)}
          >
            connect Wallet
          </button>
        </div>
        <div className="flex items-center justify-between text-white capitalize my-[40px]">
          <svg
            className="w-8 h-8"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="0%"
                y1="32.443%"
                x2="104.18%"
                y2="50%"
                id="flogo-a"
              >
                <stop stop-color="#FFF" stop-opacity=".299" offset="0%"></stop>
                <stop
                  stop-color="#7587E4"
                  stop-opacity="0"
                  offset="100%"
                ></stop>
              </linearGradient>
              <linearGradient
                x1="18.591%"
                y1="0%"
                x2="100%"
                y2="100%"
                id="flogo-b"
              >
                <stop stop-color="#818CF8" offset="0%"></stop>
                <stop stop-color="#C7D2FE" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <path fill="#3730A3" d="M16 18.5V32l15.999-9.25V9.25z"></path>
              <path fill="#4F46E5" d="m0 23 16 9V18.501L0 9.251z"></path>
              <path
                fill-opacity=".64"
                fill="url(#flogo-a)"
                d="M16 13 0 23l16 9 16-9z"
              ></path>
              <path
                fill="url(#flogo-b)"
                d="M16 0 0 9.25l16 9.25 15.999-9.25z"
              ></path>
            </g>
          </svg>
          <span>all rights reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
