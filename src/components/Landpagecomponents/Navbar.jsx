import React from 'react'

export const Navbar = ({ fetchFunction, searchValue, setSearchValue}) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-md py-3 z-50 pt-5 pb-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
  
        <h1 className="text-2xl font-bold text-blue-800">
          Movie<span className="text-white">-Search</span>
        </h1>

      
        <div className="flex items-center border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search movie..."
            className="px-4 py-2 w-64 border-none focus:outline-none"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={()=>fetchFunction(searchValue)} className="bg-blue-800 text-white px-4 py-2 hover:bg-blue-600 transition">
            Search
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
