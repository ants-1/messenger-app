// import { useEffect } from "react";
// import { io } from "socket.io-client";
import Login from "./pages/Login";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input"

// const socket = io.connect("http://localhost:3000");

function App() {
  // function sendMessage() {
  //   console.log("Button clicked");
  //   socket.emit("send_message", { message: `Hello from ${socket.id}` });
  // }
  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     alert(data.message);
  //   });
  // }, [socket]);

  return (
    // <div className="flex w-full max-w-sm items-center space-x-2">
    //   <Input type="text" placeholder="Message" />
    //   <Button onClick={sendMessage}>Send</Button>
    // </div>
    <>
      <Login />
    </>
  );
}

export default App;
