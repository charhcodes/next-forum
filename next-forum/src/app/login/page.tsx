import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Char's Forum / Login",
  description: "A Simple Web Forum",
};

export default function Login() {
  return (
    <main>
      <a href="/">
        <h2>Login</h2>
      </a>
      <form action="/login" method="post">
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" required />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <h4>Register</h4>
      <form action="/register">
        <button className="register-button">Register</button>
      </form>
    </main>
  );
}
