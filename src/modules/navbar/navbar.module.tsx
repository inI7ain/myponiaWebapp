import { ReactElement } from "react";
import "./navbar.styles.scss";

export default function Navbar(): ReactElement {
  return (
    <>
      <nav className="NavigationBar">
        <ul className="linkList">
          <li>
            <a className="link" href="/">Home</a>
          </li>
          <li>
            <a className="link" href="/About">About</a>
          </li>
          <li>
            <a className="link" href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
