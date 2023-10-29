import React, { useState } from 'react'

const NavModeBtn = () => {

  const [isDark, setIsDark] = useState(false);

  function toggleButton() {
    setIsDark((prevIsDark) => !prevIsDark);
  }


  return (
    <div>
      <button className={`${isDark ? 'bg-white text-black' : 'bg-gray-800 text-white'} hover:bg-blue-700  font-bold py-2 px-4 mr-5 rounded`}
        onClick={toggleButton}
      >
        {isDark ? '😎Light' : '🌛Dark' }
      </button>
    </div>
  )

}
export default NavModeBtn
