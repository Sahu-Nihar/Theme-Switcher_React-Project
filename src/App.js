import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

const App = () => {
  const [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    if (theme === 'light-theme'){
      setTheme('dark-theme');
    }else{
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Best Mangas of all time </h1>
          <button className="btn" onClick={toggleTheme}>toggle</button>
        </div>
      </nav>
      <section className="articles">
        {
          data.map((manga) => {
            return (
              <Article key={manga.id} {...manga}/>
            );
          })
        }
      </section>
    </main>
  );
}

export default App;