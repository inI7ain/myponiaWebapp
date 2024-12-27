import { ReactElement } from "react";
import "./navbar.styles.scss";

export default function Navbar(): ReactElement {
  return (
    <>
      <nav className="NavigationBar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
