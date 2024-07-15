import { useState } from "react";
import { LoginConext } from "./LoginContext.js";

export default function LoginSection({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="loginSection">
      <button
        className="loginButton"
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? "ログアウト" : " ログイン"}
      </button>

      <section className="content">
        <LoginConext.Provider value={isLoggedIn}>
          {children}
        </LoginConext.Provider>
      </section>
    </div>
  );
}
