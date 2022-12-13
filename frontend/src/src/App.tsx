import React,{} from 'react';
import { MantineProvider } from '@mantine/core';
import MyRoute from './Routes/MyRoute';

function App() {

  return (
    <MantineProvider>
      <MyRoute/>
    </MantineProvider>
  )
}

export default App