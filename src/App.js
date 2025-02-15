import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import {Route,Routes,} from 'react-router-dom'
import { useState, useEffect } from 'react';
import EditPost from './EditPost';
import { DataProvider } from './context/DataContext';
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header title="react router"/>
        <Nav />
        <Routes>
          <Route path='/'element={ <Home  />}/>
          <Route path='/Post'element={ <NewPost/>}/>
          <Route path='/edit/:id'element={ <EditPost/>}/>
          <Route path='/Post/:id'element={ <PostPage/>}/>
          <Route path='/about'element={ <About/>}/>
          <Route path='*'element={ <Missing/>}/>

        </Routes>
        <Footer/>
      </DataProvider>

     
    </div>
  );
}

export default App;
