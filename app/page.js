import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center gap-4 items-center flex-col h-[44vh] text-white ">
    <div className="font-bold flex gap-2 justify-center items-center text-4xl"> Buy me a Chai <span><img src="/tea.gif" width={88} alt="" /></span></div>
    <p>A Crowd funding platform for creators. Get funded by your fans and followers. Start now!</p>
    <div>
      <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
    </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div>
      <h1>Your fans can buy you a Chai</h1>
      <div className="flex gap-5">
        <div className="item">
          <img src="" alt="" />
        </div>
      </div>

    </div>
    </>
  );
}
