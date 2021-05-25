import React, { useState } from 'react';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Activities } from './pages/Activities';
import { Route } from 'react-router';
import { Resources } from './pages/Resources';
import { Videos } from './pages/Videos';
import { TaskPage } from './pages/Activities/TaskPage';
import { ResourcesPage } from './pages/Resources/ResourcesPage';

function App() {
  const [messages, setMessages] = useState(['first']);
  return (
    <div className="main">
      <Nav />
      <div className="section">
        <Header />
        <Route exact path="/">
          <Activities />
        </Route>
        <Route path="/task/:id">
          <TaskPage messages={messages} setMessages={setMessages} />
        </Route>
        <Route exact path="/resources">
          <Resources />
        </Route>
        <Route path="/resources/:id">
          <ResourcesPage />
        </Route>
        <Route path="/videos">
          <Videos />
        </Route>
      </div>
    </div>
  );
}

export default App;
