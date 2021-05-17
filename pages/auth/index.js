import FireApp from "../../components/Auth/index";
import React from "react";
import UserProvider from "../../components/Auth/providers/UserProvider";
function App() {
  return (
    <div className="pt-40 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <UserProvider>
        <FireApp />
      </UserProvider>
    </div>
  );
}
export default App;
