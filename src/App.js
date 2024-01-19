import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Blog_info from "./pages/BlogInfo/Blog_info";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/blog/blog_info/:id" element={<Blog_info></Blog_info>}></Route>
    </Routes>
    
  );
}

export default App;
