// import logo from './logo.svg';
import './App.css';
import {
  createClient
} from "https://cdn.skypack.dev/@supabase/supabase-js@2.11.0"
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import * as React from 'react';
import { Button } from '@nextui-org/react';
import Draggable from 'react-draggable';

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

const supabaseUrl = 'https://lbbriaijfeimtqzsuzww.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiYnJpYWlqZmVpbXRxenN1end3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4NTAwNDYsImV4cCI6MTk5NDQyNjA0Nn0.CdqCxEb-PONqD64J6HHWgH_DOAaK0Eo-xukk4xCc0BE'
const supabase = createClient(supabaseUrl, supabaseKey)

const Component = () => <Button>Click me</Button>;






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
    } <
    /li>
  );
  return ( <
    ul > {
      listGames
    } < /ul>
  )
}

const columns = [{
    key: 'id',
    name: 'ID'
  },
  {
    key: 'title',
    name: 'Title'
  }
];

const rows = [{
    id: 0,
    title: 'Example'
  },
  {
    id: 1,
    title: 'Demo'
  }
];

function Spreadsheet() {
  return <DataGrid columns = {
    columns
  }
  rows = {
    rows
  }
  />;
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
  return ( <
    >
    <
    h3 > This is a magic button < /h3> <
    button > Magic < /button> < / >
  );
}

function SpinnyGif() {
  return ( <
    img src = "https://media.tenor.com/zFXNSUVN__MAAAAC/color-illusions.gif"
    alt = "SpinGif" /
    >
  );
}



function App() {
  return ( <
    div className = "App" >
    <
    header className = "App-header" >
    <Toggle />
    <
    MagicButton / >
   <
    GameLib / >
    <
    SpinnyGif / >
    I tried several other things, but they didn't work as intended 
    <
    /header> 
    < /
    div >

  );
}



export default App;