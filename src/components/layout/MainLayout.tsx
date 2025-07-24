import Header from "../ui/Header";
import SideBar from "../ui/SideBar";

type MainLayoutProps = {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (

    <div className="w-screen min-h-screen bg-gray-100 flex">
      <SideBar />
      <div className="min-h-full flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-4">
          <div className="h-full w-full rounded-lg bg-white shadow-md flex flex-col">
            <div className="min-h-15 border-b-2 border-gray-100 flex items-center">
              <p className="pl-4 text-lg font-semibold">Abnormality List</p>
            </div>
            <div className="p-2 flex-1">
              <div className="h-full w-full border-2 border-input border-solid border-gray-200 rounded-md">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout