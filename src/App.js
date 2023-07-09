import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import "./App.css";

// Navbar Component
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="/youtube-logo.png" alt="YouTube Logo" />
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </div>
      <div className="navigation-links">
        <Link to="/trending">Trending</Link>
        <Link to="/subscriptions">Subscriptions</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

// Video Player Component
function VideoPlayer({ videoId }) {
  return (
    <div className="video-player">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video Player"
      ></iframe>
    </div>
  );
}

// Sidebar Component
function Sidebar() {
  // Sidebar content and logic here
  return <div className="sidebar">Sidebar</div>;
}

// Comment Component
function Comment({ author, text }) {
  return (
    <div className="comment">
      <p>{author}</p>
      <p>{text}</p>
    </div>
  );
}

// Like and Dislike Component
function LikeDislike({ likes, dislikes }) {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  return (
    <div className="like-dislike">
      <button onClick={handleLike}>
        Like ({likeCount})
      </button>
      <button onClick={handleDislike}>
        Dislike ({dislikeCount})
      </button>
    </div>
  );
}

// Subscription Component
function Subscription() {
  // Subscription logic here
  return <div className="subscription">Subscription</div>;
}

// User Profile Component
function UserProfile() {
  // User profile logic here
  return <div className="user-profile">User Profile</div>;
}

// Trending Videos Component
function TrendingVideos() {
  // Trending videos logic here
  return <div className="trending-videos">Trending Videos</div>;
}

// Related Videos Component
function RelatedVideos() {
  // Related videos logic here
  return <div className="related-videos">Related Videos</div>;
}

// Authentication Components
function LoginForm() {
  // Login form logic here
  return <div className="login-form">Login Form</div>;
}

function RegistrationForm() {
  // Registration form logic here
  return <div className="registration-form">Registration Form</div>;
}

// Home Component
function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('https://api.example.com/videos');
      setVideos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>YouTube Clone</h1>
      {videos.map(video => (
        <div key={video.id}>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/videos/:videoId" component={VideoPlayer} />
          <Route path="/trending" component={TrendingVideos} />
          <Route path="/subscriptions" component={Subscription} />
          <Route path="/profile" component={UserProfile} />
        </Routes>

        <Sidebar />
        <Comment author="John" text="Great video!" />
        <LikeDislike likes={10} dislikes={2} />

        <RelatedVideos />
        <LoginForm />
        <RegistrationForm />
      </div>
    </Router>
  );
}

export default App;
