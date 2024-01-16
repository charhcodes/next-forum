import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Char's Forum / ",
  description: "A Simple Web Forum",
};

export default function postPage() {
  return (
    <main>
      <a href="/">
        <h1>my forum</h1>
      </a>

      <div className="postContainer">
        {/* <h2>{{.Post.Title}}</h2>
        <p>{{.Post.Content}}</p>

        <p>Likes: {{ .Likes }} </p>  
        <p>Dislikes: {{ .Dislikes }} </p> */}
        <p>
          Categories:
          {/* {{ range .Post.Categories }}
                {{ .Name }}
            {{ end }} */}
        </p>

        <form action="/post-like/{{ .PostID }}" method="POST">
          <input type="hidden" name="action" value="like" />
          <button type="submit">Like</button>
        </form>
        <form action="/post-like/{{ .PostID }}" method="POST">
          <input type="hidden" name="action" value="dislike" />
          <button type="submit">Dislike</button>
        </form>
      </div>

      {/* {{ if .Success }} */}
      <p>Comment successfully posted!</p>
      {/* {{ end }} */}

      <div className="post-comment-container">
        <h3>Post a Comment:</h3>
        <form action="/post-comment/{{ .PostID }}" method="post">
          <textarea name="commentContent" rows={4} cols={50}></textarea>
          <br />
          <input type="submit" value="Submit Comment" />
        </form>
      </div>

      {/* {{ $postID := .PostID }}*/}

      <div className="comments-container">
        <h3>Comments:</h3>
        {/* {{ range .Comments }} */}

        {/* <p>{{ .Content }}</p> */}
        {/* <p>Like {{.LikesCount }}</p>
        <p>Dislike {{ .DislikeCount }}</p> */}
        <form action="/comment-like/{{ $postID }}" method="POST">
          <input type="hidden" name="comment-action" value="like" />
          <input
            type="text"
            name="reaction-id"
            // hidden value={{.CommentID}}
          />
          <button type="submit">Like </button>
        </form>
        <form action="/comment-like/{{ $postID }}" method="POST">
          <input type="hidden" name="comment-action" value="dislike" />
          <input
            type="text"
            name="reaction-id"
            // hidden value={{.CommentID}}
          />
          <button type="submit">Dislike </button>
        </form>
        {/* <p>Posted at: {{ .Time }}</p> */}
        {/* {{ end }} */}
      </div>
    </main>
  );
}
