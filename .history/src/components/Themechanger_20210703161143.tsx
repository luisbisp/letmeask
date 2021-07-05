import React, { useState, useEffect } from 'react'
import { Button } from '../components/Button'


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
      if (getTheme === 'dark') return  document.body.classList.add('dark-mode');
    })
    return (
      <div>
        <Button isOutlined onClick={handleChange}>{themeState ? 'Tema Light' : ' Tema Dark'}</Button>
      </div>
    )
  }
  
  export default ThemeChanger;