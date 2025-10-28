import './App.css';
import { Route, Routes } from "react-router-dom" ; 
import Landing from './pages/Home';
import NotFound from './pages/NotFound';
import { ConfigProvider } from 'antd';
import theme from "./theme/ThemeConfig" ; 
import React from 'react';
const App: React.FC = () => (
  <ConfigProvider theme={theme}>
    <Routes>
      <Route path="/:language" element={<Landing/>}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </ConfigProvider>
);

export default App;
