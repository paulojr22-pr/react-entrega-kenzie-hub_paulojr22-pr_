import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>KenziePosts</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Registro</Link>
          </li>
          <li>
            <a href="http://facebook.com.br" target="_blank">
              Facebook
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
