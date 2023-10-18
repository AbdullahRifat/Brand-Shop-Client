import React from "react";
import {
    BsFillLightbulbOffFill,BsFillLightbulbFill} from "react-icons/bs"

function Mainlayout() {
    const [theme, setTheme] = React.useState('light');
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    // initially set the theme and "listen" for changes to apply them to the HTML tag
    React.useEffect(() => {
      document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);
    return (
      <label className=" fixed right-12 top-7 swap swap-rotate">
        <input onClick={toggleTheme} type="checkbox" />
        <div className="swap-on"><BsFillLightbulbOffFill/></div>
        <div className="swap-off"><BsFillLightbulbFill/></div>
      </label>
    );
  }

export default Mainlayout;