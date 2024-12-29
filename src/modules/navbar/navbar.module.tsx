import { ReactElement } from "react";
import Searchfield from "../searchField/searchfield.module";
import "./navbar.styles.scss";

export default function Navbar(): ReactElement {
  return (
    <>
      <nav className="NavigationBar">
        <img className="logo" src="/src/assets/myponia_logo.png" alt="logo" />
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
          <li>
            <Searchfield className="searchField"/>
          </li>
        </ul>
      </nav>
    </>
  );
}
