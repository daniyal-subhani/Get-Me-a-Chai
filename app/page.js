import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center gap-4 items-center flex-col h-[44vh] text-white ">
        <div className="font-bold flex gap-2 justify-center items-center text-4xl">
          {" "}
          Buy me a Chai{" "}
          <span>
            <Image src="/tea.gif" width={88} height={88} alt="" />
          </span>
        </div>
        <p>
          A Crowd funding platform for creators. Get funded by your fans and
          followers. Start now!
        </p>
        <div>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Start Here
          </button>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14">
        <h1 className="text-2xl font-bold text-center mb-14">Your fans can buy you a Chai</h1>
        <div className="flex gap-5 justify-around items-center">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image className="bg-slate-400 rounded-full p-2 text-black" src="/man.gif" width={88} height={88} alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image className="bg-slate-400 rounded-full p-2 text-black" src="/coin.gif" width={88} height={88} alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image className="bg-slate-400 rounded-full p-2 text-black" src="/group.gif" width={88} height={88} alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-aut pb-32 pt-14 flex flex-col  items-center justify-center"> 
        <h1 className="text-2xl font-bold text-center mb-14">Learn more about us</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=eeOXBihrtQ4PbK8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
}
