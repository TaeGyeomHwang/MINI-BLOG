import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from 'styled-components';

import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritepage';
import PostViewPage from './component/page/PostViewPage';

// 각 페이지별로 경로 구성
const MainTileText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTileText>태겸의 미니 블로그</MainTileText>
      <Routes>
        <Route index element = {<MainPage />} />
        <Route path="post-write" element = {<PostWritePage />} />
        <Route path="post/:postId" element = {<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
