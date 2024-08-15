import React, { useState } from "react";

interface AuthProps {
  onSignIn: { username: string; password: string };
  onSignOut: boolean;
}

const AuthenticationPage: React.FC<AuthProps> = ({ onSignIn, onSignOut }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleSignIn = () => {
    // onSignIn(username, password);
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // onSignOut();
    setIsAuthenticated(false);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleSignOut}><a href="home"></a>Sign Out</button>
        </div>
      ) : (
        <div>
          <h2>Sign In</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      )}
    </div>
  );
};

export default AuthenticationPage;
