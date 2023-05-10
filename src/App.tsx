import {Controls} from 'common/components/Controls';
import {Header} from 'common/components/Header';
import {Main} from 'common/components/Main';
import React from 'react';

function App() {
  return (
    <>
      <Header/>
      <Main>
        <Controls/>
      </Main>
    </>
  );
}

export default App;
