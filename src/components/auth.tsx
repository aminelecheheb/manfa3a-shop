"use client";

import { signIn, signOut } from "next-auth/react";
import styles from "@/styles/Dashboard.module.css";
import styles2 from "@/styles/Layout.module.css";
import { AiOutlinePoweroff } from "react-icons/ai";

export const LoginButton = () => {
  return <button onClick={() => signIn()}>Sign in</button>;
};

export const LogoutButton = () => {
  return (
    <button
      className={`${styles.signout_btn} ${styles2.signout}`}
      onClick={() => signOut()}
    >
      <AiOutlinePoweroff className={styles.signout_icon} />
      <h3>تسجيل الخروج</h3>
    </button>
  );
};
