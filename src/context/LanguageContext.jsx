// src/context/LanguageContext.jsx
import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("UZ"); // default language
  const translations = {
    EN: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      contactUs: "Contact Us",
      phone: "Phone",
      email: "Email",
      location: "Location",
      send: "Send",
      messageSent: "Message sent successfully!",
      messageError: "Failed to send message.",
    },
    RU: {
      home: "Главная",
      about: "О нас",
      projects: "Проекты",
      contact: "Контакты",
      contactUs: "Связаться с нами",
      phone: "Телефон",
      email: "Почта",
      location: "Адрес",
      send: "Отправить",
      messageSent: "Сообщение успешно отправлено!",
      messageError: "Ошибка отправки сообщения.",
    },
    UZ: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      projects: "Loyihalar",
      contact: "Aloqa",
      contactUs: "Biz bilan bog'laning",
      phone: "Telefon",
      email: "Email",
      location: "Manzil",
      send: "Yuborish",
      messageSent: "Xabar muvaffaqiyatli yuborildi!",
      messageError: "Xabar yuborilmadi.",
    },
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};