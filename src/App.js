import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
// MessageSender from "./MessageSender";
import Widgets from "./Widgets";
import Login from "./Login";
import {useStateValue} from './StateProvider';


function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
      <Login /> 
      ) : (
        <>

  <Header />
    <div className="app__body">
      <Sidebar /> 
      <Feed />
      <Widgets />
      {/* <MessageSender /> */}
    </div>
</>
    )}
    </div>
  );
}





export default App;





// https://www.facebook.com/CleverProgrammerr/videos/609634686416275/