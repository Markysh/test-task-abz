import React from "react";
import styles from "./App.module.scss"
import { Header } from "./components/header/header";
import { Banner } from "./components/banner/banner";
import { PersonalInformation } from "./components/personal-information/personal-information";
import { Users } from "./components/users/users";
import { RegisterForm } from "./components/register-form/register-form";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <PersonalInformation/>
      <Users/>
      <RegisterForm />
    </div>
  );
}

export default App;
