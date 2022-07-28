import "./App.css";
import Header from "./components/Header";
import SocialPosts from "./components/SocialPosts";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="post-container">
        <SocialPosts />
      </div>
    </div>
  );
}

export default App;
