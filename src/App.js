import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Accordion from './components/Accordion';
import Wikipedia from './components/Wikipedia';
import Navigation from './components/Navigation';
import VideoList from './components/Youtube';
import Youtube from './components/Youtube';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
  {
    title: 'What is JSX',
    content: 'JSX is a syntax notation for JavaScript XML',
  },
  {
    title: 'What is virtual DOM',
    content:
      'The virtual DOM (VDOM) is an in-memory representation of Real DOM',
  },
];

const App = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Navigation />
      <div className="container mt-3">
        <Switch>
          <Route path="/accordion" render={() => <Accordion items={items} />} />
          <Route path="/wikipedia" component={Wikipedia} />
          <Route path="/youtube" component={Youtube} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
