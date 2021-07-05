import React, { useState, useEffect } from 'react'
import Switch from 'react-switch';


const ThemeChanger = () => {

  const [themeState, setThemeState] = useState(false);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  }
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') return document.body.classList.add('dark-mode');
  })
  return (
    <div>
      <Switch
        onChange={handleChange}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
      />
    </div>
  )
}

export default ThemeChanger;