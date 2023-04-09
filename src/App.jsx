
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import ContextGlobal from "./Components/utils/global.context";
import { useEffect, useState } from "react";
import Layout from "./Components/Layout";


export const themes = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "black",
  },
};

function App() {

  const localTheme = JSON.parse(localStorage.getItem('theme'));

  const [theme, setTheme] = useState(localTheme?? themes.light);
  
  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  useEffect(()=>{
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);


  return (
      <div className="App">
        <ContextGlobal.Provider value={{theme, handleChangeTheme}}>
          <Layout>
            <Navbar/>
            <Outlet/>
            <Footer/>
          </Layout>
        </ContextGlobal.Provider>
      </div>
  );
}

export default App;
