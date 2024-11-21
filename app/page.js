import Link from "next/link"
export default function HOME() {
  return (
    <>
      <div className="flex justify-center flex-col text-center gap-8 text-white md:h-[90vh] items-center px-6 md:px-0 h-[90vh]">
        <div className="font-bold flex md:gap-6 gap-2 items-center text-3xl md:text-6xl bg-white bg-clip-text text-transparent bg-[radial-gradient(100%_100%_at_top_left,white,rgb(74,32,138,.5))]">Get Me a Chai <span><img className="md:w-[5rem] w-[4rem] mb-4" src="/tea.gif" alt="" /></span></div>

        <p className="mt-[-10px] text-center text-xl font-bold ">
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>
        <div>
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>

          <Link href={"/about"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>

        </div>
      </div>

      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto py-20 pt-14 px-2">
        <h1 className="md:text-3xl max-md:px-10 text-2xl font-bold text-center mb-14">Your Fans can buy you a Chai.</h1>
        <div className="flex md:gap-5 gap-7 justify-around max-md:flex-col">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="w-28 bg-slate-400 px-3.5 rounded-full flex flex-col justify-center items-center" src="man.gif" alt="" />
            <div className="text space-y-1 text-center"><p className=" text-white font-bold">Fans want to help</p>
              <p className=" text-white text-center">Your fans are available for you to help you</p>
            </div>        </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="w-28 bg-slate-400 p-3 rounded-full flex flex-col justify-center items-center" src="coin.gif" alt="" />
            <div className="text space-y-1 text-center"><p className=" text-white font-bold">Fans want to help</p>
              <p className=" text-white text-center">Your fans are available for you to help you</p>
            </div>        </div>
          <div className="item space-y-3 flex justify-center items-center flex-col">
            <img className="w-28 p-2 py-3 bg-slate-400 rounded-full flex flex-col justify-center items-center" src="donate.gif" alt="" />
            <div className="text space-y-1 text-center"><p className=" text-white font-bold">Fans want to help</p>
              <p className=" text-white text-center">Your fans are available for you to help you</p>
            </div> </div>

        </div>
      </div>

      <div className="bg-white h-1 opacity-10">
      </div>


      <div className="text-white container mx-auto py-20 pt-14">
        <h1 className="md:text-3xl text-2xl font-bold text-center mb-14">Learn more about us</h1>
        <div className="flex gap-5 justify-around">
          <iframe className="px-3 w-[560px] h-[302px] max-[592px]:h-[206px] max-[592px]:w-[391px] max-[408px]:h-[176px] max-[408px]:w-[335px]" src="https://www.youtube.com/embed/nq1M_Wc4FIc?si=DbC3WX3D2E084Xeh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  )
}
