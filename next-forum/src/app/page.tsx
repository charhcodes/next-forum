import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Char's Forum / Home",
  description: "A Simple Web Forum",
};

export default function Home() {
  return (
    <main>
      <a href="/">
        <h1>my forum</h1>
      </a>
      <div className="login-regi-container">
        <form action="/login">
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <form action="/register">
          <button className="register-button">Register</button>
        </form>
      </div>
      {/* {{if .IsLoggedIn}} */}
      <form action="/logout" method="post">
        <button type="submit">Logout</button>
      </form>
      {/* {{end}} */}

      <br />
      <form action="/filtered-posts" method="GET">
        <div className="categories">
          {/* <label for="category">Select a category:</label> */}
          <select id="category" name="category">
            <option value="lifestyle">Lifestyle</option>
            <option value="news">News</option>
            <option value="gaming">Gaming</option>
            <option value="fashion">Fashion</option>
            <option value="music">Music</option>
            <option value="tv-movies">TV/Movies</option>
          </select>
        </div>
        <button type="submit">Filter</button>
      </form>
      <br />
      <div className="createpostContainer">
        <form action="/create-post">
          <button className="create-button" type="submit">
            Create post
          </button>
        </form>
      </div>

      <h2>All Posts</h2>
      <div className="posts">
        {/* {{range .Posts}}
            <div className="post">
                <h3><a href="{{.URL}}">{{.Title}}</a></h3>
                <p>{{.Content}}</p>
                <p>Post created: {{.Time}}</p>
                <br/>
            </div>
        {{end}} */}
      </div>

      <h2>Liked Posts</h2>
      <div className="posts">
        {/* {{range .LikedPosts}}
        <div className="post">
            <h3><a href="{{.URL}}">{{.Title}}</a></h3>
            <p>{{.Content}}</p>
            <p>Post created: {{.Time}}</p>
            <br/>
        </div>
        {{end}} */}
      </div>

      <h2>Your Posts</h2>
      <div className="posts">
        {/* {{range .YourPosts}}
        <div className="post">
            <h3><a href="{{.URL}}">{{.Title}}</a></h3>
            <p>{{.Content}}</p>
            <p>Post created: {{.Time}}</p>
            <br/>
        </div>
        {{end}} */}
      </div>
    </main>
  );
}
