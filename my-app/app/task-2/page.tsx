export default function Task2Page() {
  return (
    <div className="bg-white h-screen flex gap-10 justify-center items-center">

      <div className="bg-blue-100 h-65 w-96 flex flex-col justify-between p-8 rounded-3xl shadow-md">
        <div className="flex gap-5 items-center">
          <img src="/palette.svg" alt="icon" className="w-6 h-6"/>
          <p className="text-black font-medium">Design</p>
        </div>
        <div>
          <h1 className="text-2xl text-black font-bold">Adobe Photoshop</h1>
          <div className="flex items-center justify-between mt-2">
          <p className="text-black">in 3 days</p>
            <div className="flex">
              <img src="/avatarwuwa1.jpg" className="w-8 h-8 rounded-full border-2 border-white"/>
              <img src="/avatarwuwa2.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-3.5"/>
              <img src="/avatar3.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-3.5"/>
                <div className="w-8 h-8 rounded-full bg-blue-100 text-xs flex items-center justify-center font-medium text-black border-2 border-white -ml-3.5">
                 9+
                </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-green-100 h-65 w-96 flex flex-col justify-between p-8 rounded-3xl shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <img src="/terminal.svg" alt="icon" className="w-6 h-6"/>
            <p className="text-black font-medium">AI</p>
          </div>
          <img src="/star.svg" alt="star" className="w-5 h-5"/>
        </div>
        
        <div>
          <h1 className="text-2xl text-black font-bold">DALL·E 2, MidJourney, Stable Diffusion</h1>
          <div className="flex items-center justify-between mt-2">
            <p className="text-black">in 5 days</p>
            <div className="flex">
              <img src="/avatarwuwa4.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-3.5"/>
              <img src="/pfp1.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-3.5"/>
              <img src="/pfp2.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-3.5"/>
              <div className="w-8 h-8 rounded-full bg-green-100 text-xs flex items-center justify-center font-medium text-black border-2 border-white -ml-3.5">
               3+
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}