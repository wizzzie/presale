const Showcase = ({ setShow }) => {
  return (
    <div className="px-4 md:px-0">
      <div className="container mx-auto mt-[60px]">
        <div className="flex flex-col items-center justify-center gap-[60px]">
          <div className="flex flex-col justify-center items-center gap-[25px]">
            <h2 className="text-center md:tex-left text-[#e2e8f0] text-4xl capitalize font-semibold">
              The Presale protocol for Dapp
            </h2>
            <p className="text-center md:text-left text-[#4e6484] text-xl tracking-wide">
              Ecosystem that enables wallets and apps to securely connect and
              interact.
            </p>
            <div className="flex items-center gap-5">
              <button
                onClick={() => setShow(true)}
                className="bg-[#0084d6] text-white capitalize px-[10px] md:px-[30px] py-[15px] font-bold rounded-lg border border-[#0084d6] hover:bg-transparent hover:text-[#0084d6] transition-all ease-in-out duration-300"
              >
                connect wallet
              </button>
              <button
                onClick={() => setShow(true)}
                className="text-[#b5d5e1] bg-[#334155] capitalize px-[10px] md:px-[30px] py-[15px] font-bold rounded-lg border border-[#334155] hover:bg-transparent hover:text-white transition-all ease-in-out duration-300"
              >
                migrate token
              </button>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dvo4tlcrx/image/upload/v1702641164/merge_lmtmcx.webp"
            alt="#"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
