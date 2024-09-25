"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Form() {
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        mail: e.target.mail.value,
        phone: e.target.phone.value,
        message: e.target.message.value,
      }),
    })
      .then(() => {
        console.log("mail envoyé");
        toast.success("Message envoyé !");
      })
      .catch((err) => console.log({ err }));
  };
  return (
    <article className="contact_article">
      <h2>Contactez nous</h2>
      <p>
        Une question, une envie de pizza ? Contactez-nous, nous sommes là pour
        vous répondre !
      </p>
      <div className="form_container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(e);
          }}
        >
          <label htmlFor="name">Votre Nom*</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Nom et prénom"
            autoComplete="name"
          />
          <label htmlFor="mail">Adresse Email*</label>
          <input
            id="mail"
            type="mail"
            name="mail"
            placeholder="Adresse Email"
            autoComplete="email"
          />
          <label htmlFor="phone">Numéro de Téléphone*</label>
          <input
            id="phone"
            type="phone"
            name="phone"
            placeholder="Téléphone"
            autoComplete="tel"
          />
          <label htmlFor="message">Votre Message*</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <button>Envoyer un message</button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </form>
      </div>
    </article>
  );
}
