import Switch from 'react-switch';
import React, { useState, useEffect } from 'react'
// export function ThemeChanger(){
// return (
//     <Switch
//     onChange={() => { }}
//     checked={true}
//     checkedIcon={false}
//     uncheckedIcon={false}
//     height={10}
//     width={40}
//     handleDiameter={20}

// />
// )
// }


const ThemeChanger = () => {
    const [themeState, setThemeState] = useState(false);
  
    const handleChange = () => {
      setThemeState(!themeState);
      if (themeState) {
        localStorage.setItem('Theme', 'dark');
        document.div.classList.add('dark-theme');
      } else {
        localStorage.setItem('Theme', 'light');
        document.body.classList.remove('dark-theme');
      }
    }
    useEffect(() => {
      const getTheme = localStorage.getItem('Theme');
      if (getTheme === 'dark') return  document.body.classList.add('dark-mode');
    })
    return (
      <div>
        <button onClick={handleChange}>{themeState ? 'Light Mode' : 'Dark Mode'}</button>
      </div>
    )
  }
  
  export default ThemeChanger;