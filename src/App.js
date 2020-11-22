import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [backgroundClass, setBackgroundClass] = useState('background-image')

  useEffect(() => {
    setBackgroundClass('background-image visible');
  }, [])

  return (
    <div className="App">
      <div className={backgroundClass}></div>
      <div id="content">
        <h1>achurra.dev</h1>
        <ul>
          <li className='uneven'>
            <a href='https://github.com/s-achurra'
               className='icon'
               target='_blank'
               rel="noreferrer">
              <i className='fa fa-github' aria-hidden='true'></i>
            </a>
          </li>

          <li className='uneven'>
            <a href='https://www.linkedin.com/in/stephen-achurra/'
               className="icon"
               target='_blank'
               rel="noreferrer">
              <i className='fa fa-linkedin' aria-hidden='true'></i>
            </a>
          </li>

          <li>
            <a href='mailto:contact@achurra.dev' className="icon" target='_top'>
              <i className='fa fa-envelope' aria-hidden='true'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
