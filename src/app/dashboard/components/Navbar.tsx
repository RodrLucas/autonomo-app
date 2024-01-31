import UserDropdown from "./UserDropdown";

export default function Navbar() {
  return (
    <>
      <div className="md:bg-blue-800">
        <nav className="w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
          <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            {/* Brand */}
            <span className="text-gray-400 text-sm uppercase inline-block font-semibold"></span>
            {/* User */}
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
              <UserDropdown />
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
