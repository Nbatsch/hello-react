// import logo from './logo.svg';
/* eslint-disable no-unused-vars */
import { supabase } from './supabaseClient';
import './App.css';
import 'react-data-grid/lib/styles.css';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

// 1. import `NextUIProvider` component

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: Books, error } = await supabase
      .from('Books')
      .select('*')
    setMyBooks(Books);
  }
  // getBooks();
  return (
    <>
    <button onClick={getBooks}>Get Data</button>
    <table border ="1" id='booktab'>
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
        </tr>
      ))
    }
    </table>
    </>
  )
}


const games = [{
    id: 1,
    title: 'Valorant',
    genre: 'First-Person Shooter',
    isOnsteam: false
  },
  {
    id: 2,
    title: 'Counter-Strike: Global Offensive',
    genre: 'First-Person Shooter',
    isOnsteam: true
  },
  {
    id: 3,
    title: 'Spin Rhythm XD',
    genre: 'Rhythm',
    isOnsteam: true
  },
  {
    id: 4,
    title: 'Crab Champions',
    genre: 'Third-Person Roguelike',
    isOnsteam: true
  },
]

function GameLib() {
  const listGames = games.map(game =>
    <
    li key = {
      game.id
    }
    style = {
      {
        color: game.isOnsteam ? 'green' : 'red'
      }
    } > {
      game.title
    } 
    </li>
  );
  return ( <
    ul > {
      listGames
    } 
    </ul>
  );
}



function Toggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">This will be a togglable button later</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}




function MagicButton() {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
  }
  return ( 
    <>
      <h3> This is a magic button </h3> 
      <button onClick={doMagic}> Magic {count}</button> </>
  );
}

function SpinnyGif() {
  return ( <img src = "https://media.tenor.com/zFXNSUVN__MAAAAC/color-illusions.gif"
    alt = "SpinGif" />
  );
}



function App() {
  return ( 
    <div className = "App" >
      <header className = "App-header" >
        <Library />
        <Toggle />
        <MagicButton />
        <GameLib />
        <SpinnyGif />
    I tried several other things, but they didn't work as intended 
    </header> 
    </div>
  );
}

export default App;