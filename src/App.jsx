import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/post-list-provider';
function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      < div className="app-container" >
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>

          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}
export default App
