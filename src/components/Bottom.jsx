const Bottom = () => {
  return (
    <div className="my-[100px] px-4 md:px-0">
      <div className="container mx-auto">
        <div>
          <h2 className=" text-3xl md:text-6xl text-center capitalize my-[40px] text-white font-bold">
            An ecosystem of integrations
          </h2>
          <div className="flex items-center justify-center mt-[90px] mb-[40px] flex-col">
            <div className="bg-[#1a1e4a] p-10 rounded-full">
              <svg
                className="w-[80px] h-[80px]"
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
                    <stop
                      stop-color="#FFF"
                      stop-opacity=".299"
                      offset="0%"
                    ></stop>
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
                  <path fill="#0084d6" d="M16 18.5V32l15.999-9.25V9.25z"></path>
                  <path fill="#0084d6" d="m0 23 16 9V18.501L0 9.251z"></path>
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
            </div>
            <div className="hidden w-full md:flex flex-col items-center justify-center">
              <div className="w-[3px] h-[35px] bg-gray-400 rounded-sm"></div>
              <div className="w-[68%] h-[3px] bg-gray-400 rounded-sm"></div>
              <div className="relative w-full">
                <div className="w-[3px] h-[40px] bg-gray-400 absolute left-[49.87%]"></div>
                <div className="w-[3px] h-[40px] bg-gray-400 absolute right-[16%]"></div>
                <div className="w-[3px] h-[40px] bg-gray-400 absolute left-[16%]"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-[40px] w-full items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="bg-[#1e293b] w-fit flex items-center justify-center p-10 rounded-full">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png"
                    alt="#"
                    className="w-[60px] h-[60px] object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-[#1e293b] w-fit flex items-center justify-center p-10 rounded-full">
                  <img
                    src="https://assets-cdn.trustwallet.com/blockchains/smartchain/info/logo.png"
                    alt="#"
                    className="w-[60px] h-[60px] object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-[#1e293b] w-fit flex items-center justify-center p-10 rounded-full">
                  <img
                    src="https://cryptologos.cc/logos/polygon-matic-logo.png"
                    alt="#"
                    className="w-[60px] h-[60px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
