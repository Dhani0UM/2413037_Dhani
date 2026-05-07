export default function learnpage(){
    return (

        <div className="bg-white h-screen flex gap-4 justify-center">


        <div className="bg-purple-100 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
            <div>
                <img src="/palette.svg"/>
                <p className="text-black font-medium">Design</p>
          </div>
          <div>
            <h1 className="text-2xl text-black font-bold">FIGMA</h1>
            <p className="text-black"> 8 hours ago</p>
          </div>
        </div>

        <div className="bg-orange-100 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
            <div>
                <img src="/terminal.svg"/>
                <p className="text-black font-medium">Coding</p>
          </div>
          <div>
            <h1 className="text-2xl text-black font-bold">Python</h1>
            <p className="text-black"> 2 days ago</p>
          </div>
        </div>

        <div className="bg-red-100 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
            <div>
                <img src="/palette.svg"/>
                <p className="text-black font-medium">Design</p>
          </div>
          <div>
            <h1 className="text-2xl text-black font-bold">Sketch</h1>
            <p className="text-black"> 4 days ago</p>
          </div>
        </div>
    </div>

    )
}

