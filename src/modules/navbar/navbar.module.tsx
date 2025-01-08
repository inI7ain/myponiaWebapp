import { ReactElement } from "react";
import Searchfield from "../searchField/searchfield.module";
import "./navbar.styles.scss";

export default function Navbar(): ReactElement {
  return (
    <>
      <nav className="navigationBar">
        <div className="logoContainer">
          <img className="logo" src="/myponia_logo.png" alt="logo" />
          <span className="title">Myponia</span>
        </div>
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
            <a className="link" href="/Webshop">Webshop</a>
          </li>
          <li>
            <Searchfield className="searchfield"/>
          </li>
        </ul>
        <a className="link" href="/Signin">Sign in</a>
      </nav>
    </>
  );
}
