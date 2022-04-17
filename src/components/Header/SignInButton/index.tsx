import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const isUserLoggedIn = false;

  return !isUserLoggedIn ? (
    <button type="button" className={styles.SigInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  ) : (
    <button type="button" className={styles.SigInButton}>
      <FaGithub color="#04d361" />
      Lucas Rocha Fernandes
      <FiX color="#7b7b84" className={styles.closeIcon} />
    </button>
  );
}
