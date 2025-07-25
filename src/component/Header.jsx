
const Header = () => {
  return (
    <div className="  flex justify-between w-full absolute px-8 py-3 mt-0.5 bg-gradient-to-b border border-none rounded-2xl z-10">
      
        <img  className=" pl-4 w-44 h-16 "src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix logo" />
      <button className="mt-4 text-white font-bold bg-red-600 w-18 h-7 text-center border  border-none rounded-l-sm cursor-pointer hover:text-blue-100 ">
        Sign In
      </button>
    </div>
  )
}

export default Header;