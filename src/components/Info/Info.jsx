import "./Info.css";
import React, { useState } from "react";
import { send } from "emailjs-com";


function Info() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setSenderName(e.target.value);
  };

  const handleEmail = (e) => {
    setSenderEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_yy6cema",
      "template_oac8oyi",
      { senderName, senderEmail, message },
      "yi52NYQzDcSn6qEW3"
    )
      .then((response) => {
        console.log("message sent successfuly", response.status, response.text);
      })
      .catch((err) => {
        console.log("Failed", err);
      });
    setSenderName("");
    setSenderEmail("");
    setMessage("");
  };

 

  return (
    <div className="contact-info">
      
      <form className="form-info" onSubmit={sendMail}>
        <input
          type="text"
          name="sender_name"
          value={senderName}
          onChange={handleName}
          required
          placeholder="imię"
        />
        <input
          type="email"
          name="sender_email"
          value={senderEmail}
          onChange={handleEmail}
          required
          placeholder="e-mail"
        />
        <textarea
          className="form-text"
          name="message"
          value={message}
          onChange={handleMessage}
          required
          placeholder="wpisz wiadomość"
          rows={20}
        />
        <button type="submit" className="button-info">Wyślij</button>
      </form>
    </div>
  );
}

export default Info;
