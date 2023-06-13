import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  copyRight,
  connect,
  container,
  contactLinks,
  contactLinksText,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteNav,
  siteTitle,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const copyRightYear = new Date().getFullYear()

  return (
    <div className={container}>
      <header>
        <div className={siteTitle}>{data.site.siteMetadata.title}</div>
        <nav className={siteNav}>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
          </ul>
          <ul className={contactLinks}>
            <li>
              <Link
                className={contactLinksText}
                to="https://github.com/shaunczubkowski"
                target="_blank"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                className={contactLinksText}
                to="https://www.linkedin.com/in/shaun-czubkowski/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
      </header>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <p className={copyRight}>Copyright {copyRightYear} Shaun Czubkowski</p>
      </footer>
    </div>
  );
};

export default Layout;
