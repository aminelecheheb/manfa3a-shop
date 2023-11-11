"use client";

import { signIn, signOut } from "next-auth/react";
import styles from "@/styles/Dashboard.module.css";
import { AiOutlinePoweroff } from "react-icons/ai";

export const LoginButton = () => {
  return <button onClick={() => signIn()}>Sign in</button>;
};

export const LogoutButton = () => {
  return (
    <button className={styles.signout_btn} onClick={() => signOut()}>
      <AiOutlinePoweroff className={styles.signout_icon} />
      <h3>تسجيل الخروج</h3>
    </button>
  );
};
