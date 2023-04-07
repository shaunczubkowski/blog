import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteHeader,
  siteTitle,
  subTitleContainer,
  subTitleText,
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

  return (
    <div className={container}>
      <header className={siteHeader}>
        <div className={siteTitle}>{data.site.siteMetadata.title}</div>
        <ul className={subTitleContainer}>
          <li className={subTitleText}>Software Engineer</li>
          <li className={subTitleText}>Cat Dad</li>
          <li className={subTitleText}>Reader</li>
        </ul>
      </header>
      <nav>
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
      </nav>
      <hr />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <hr />
      <footer></footer>
    </div>
  );
};

export default Layout;
