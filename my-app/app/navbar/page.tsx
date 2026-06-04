export default function navbarpage(){
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-white flex-col h-170 w-96 p-2 flex rounded-2xl ">
                <img src="/layout-dashboard.svg" className="h-5 w-5 rounded-2xl" />
                <p className="text-2xl text-black font-medium">Dashboard</p>
                
                <img src="/message.svg" className="h-5 w-5 rounded-2xl" />
                <p className="text-2xl text-black font-medium">Messages</p>
                
                <img src="/checklist.svg" className="h-5 w-5 rounded-2xl" />
                <p className="text-2xl text-black font-medium">tasks</p>
                <img src="/note.svg" className="h-5 w-5 rounded-2xl" />
                <p className="text-2xl text-black font-medium">Notes</p>
                <img src="/mail.svg" className="h-5 w-5 rounded-2xl" />
                <p className="text-2xl text-black font-medium">email</p>
                <img src="/database.svg" className="h-5 w-5 rounded-2xl" />
                <p className="text-2xl text-black font-medium">reports</p>
                <img src="/star.svg" className="h-5 w-5 rounded-2xl" />
                <p className="text-2xl text-black font-medium">automation</p>
                <img src="/usb.svg" className="h-5 w-5 rounded-2xl" />
                <p className="text-2xl text-black font-medium">workflows</p>
                <img src="/chevron-down.svg" className="h-5 w-5 rounded-2xl" />
                <p className="text-2xl text-black font-medium">favorites</p>
            </div>
        </div>


    )
}