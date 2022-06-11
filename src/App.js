import { List } from './components/List'
import { useState } from 'react'
import data from "./data";

function App() {
  const [ people, setPeople ] = useState(data)

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center bg-pink-400 shadow-2xl">
        <div className="rounded-md bg-white p-5 shadow-2xl">
          <div className="mb-5">
            <h1 className="text-3xl text-gray-600">{people.length} birthdays today</h1>
          </div>
          <div className="mb-4 mr-4">
            <List people={people}/>
          </div>
          <div className="flex items-center justify-center">
            <button className="p-2 bg-gradient-to-r from-pink-400 to-pink-600 rounded-md text-white" onClick={() => setPeople([])}>Clear all</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
