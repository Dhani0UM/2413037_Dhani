export default function holidaypage(){
    return (

        <div className="bg-gray-200 h-screen flex gap-4 justify-center">
        <div className="bg-white h-150 w-96 flex flex-col rounded-3xl p-2">
            <div>
                <img src="/avatarwuwa3.jpg" className="w-100 h-80 mt-2.5 rounded-3xl"/>
            
          </div>
          <div className="ml-6 mt-3">
            <h1 className="text-3xl text-black font-bold ">San Francisco</h1>
            <p className="text-gray-400">Premium Economy</p>
            <div className="flex items-center gap-2 mt-3">
                <img src="/tag.svg"/>
                <p className="text-black font-medium">From $240</p>
                        <div className="flex items-center gap-2">
                <img src="/plane-tilt.svg"/>
                <p className="text-black font-medium">SFO</p>
                </div>
                </div>
            </div>

            </div>
          </div>

    )
}

