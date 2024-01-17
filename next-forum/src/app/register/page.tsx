import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Char's Forum / Register",
  description: "A Simple Web Forum",
};

export default function Register() {
  return (
    <main>
      <a href="/">
        <h2>Register</h2>
      </a>
      <form action="/register" method="post">
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="username">Username:</label>
        <br />
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" required />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <h4>Login</h4>
      <form action="/login">
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </main>
  );
}
