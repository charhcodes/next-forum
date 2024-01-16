import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Char's Forum / Create and Upload Post",
  description: "A Simple Web Forum",
};

export default function createPost() {
  return (
    <main>
      <a href="/">
        <h1>create post</h1>
      </a>
      <form method="POST" action="/create-post">
        <label htmlFor="post-title">Post Title:</label>
        <textarea
          id="post-title"
          name="postTitle"
          rows={1}
          cols={50}
        ></textarea>
        <label htmlFor="post-content">Post Content:</label>
        <textarea
          id="post-content"
          name="postContent"
          rows={4}
          cols={50}
        ></textarea>
        <br />

        <div className="categories">
          {/* {{range .Categories}} */}
          <input
            type="checkbox"
            id="{{ .Name }}"
            name="postCategories"
            value="{{ .ID }}"
          />
          <label htmlFor="{{ .Name }}">{/* {{ .Name }} */}</label>
          <br />
          {/* {{end}} */}
        </div>
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}
