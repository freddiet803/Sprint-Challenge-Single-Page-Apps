import React from 'react';
import Header from './components/Header.js';
import { Route, Link } from 'react-router-dom';
import WelcomePage from './components/WelcomePage.js';
import CharacterList from './components/CharacterList';

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route
        path="/characters"
        render={props => {
          return <CharacterList {...props} />;
        }}
      />
    </main>
  );
}
