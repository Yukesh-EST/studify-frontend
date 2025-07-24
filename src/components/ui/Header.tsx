
const Header = () => {
  return (
    <header className="w-full h-15 bg-white flex p-2 justify-between items-center drop-shadow-xs">
      <h1 className="ml-4 text-lg font-bold text-gray-800">Abnormality</h1>
      <section className="mr-4 w-50 flex items-center justify-end gap-3">
        <div className="text-right">
          <h4 className="font-semibold">User Name</h4>
          <h6 className="italic">Role</h6>
        </div>
         <div className="bg-blue-900 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold">U</div>
      </section>
    </header>
  )
}

export default Header