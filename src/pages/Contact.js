import React, { useState } from "react";

function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Message:", message);
    // Add your own logic here to submit the form to your server or email service
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">Send Message</button>
    </form>
  );
}

export default Contact;
