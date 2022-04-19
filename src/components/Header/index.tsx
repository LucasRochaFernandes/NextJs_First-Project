import { useState } from "react";
import { SignInButton } from "./SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logoReact.png" alt="ig.news" />
        <nav>
          <a href="/">Home</a>
          <a href="/Post">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
