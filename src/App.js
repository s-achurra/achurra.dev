import './App.css';
import LinkIcon from './components/LinkIcon';
import { useEffect, useState } from 'react';

const links = [
  {
    icon: 'fa-github',
    href: 'https://github.com/s-achurra',
    uneven: true,
  },
  {
    icon: 'fa-linkedin',
    href: 'https://www.linkedin.com/in/stephen-achurra/',
    uneven: true,
  },
  {
    icon: 'fa-envelope',
    href: 'mailto:contact@achurra.dev',
  },
]

function App() {
  const [backgroundClass, setBackgroundClass] = useState('background-image')

  useEffect(() => {
    setBackgroundClass('background-image visible');
  }, [])

  const linkItems = links.map((link, index) => {
    return <LinkIcon href={link.href}
              icon={link.icon}
              key={index}
              uneven={link.uneven}
    />
  })

  return (
    <div className="App">
      <div className={backgroundClass}></div>
      <div id="content">
        <h1>achurra.dev</h1>
        <ul>
          {linkItems}
        </ul>
      </div>
    </div>
  );
}

export default App;
