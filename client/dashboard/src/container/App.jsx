import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getArticles } from '../services/article-api-service';
import ArticleList from '../components/ArticleList/ArticleList';
import './App.css';

const Wrapper = styled.div`
  width: 850px;
  height: 700px;
  margin: 5% 25% 6% 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(articles, setArticles);
  }, []);

  return (
    <Wrapper>
      <h1>My Saved Articles</h1>
      <ArticleList articles={articles} />
    </Wrapper>
  );
}

export default App;
