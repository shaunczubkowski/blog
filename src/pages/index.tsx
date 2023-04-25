import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import {
  container,
  aboutMe,
  contactLinks,
  contactLinksText,
  photo,
} from "./index.module.css";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="I'm Shaun Czubkowski and I write code.">
      <div className={container}>
        <div className={aboutMe}>
          <p>
            Welcome to my blog! Here you'll find projects I've worked on, issues
            I've overcame, and status updates on my projects.
          </p>
          <p>
            I'm currently located in Salt Lake City, UT and I work full-time as
            a Software Engineer II for a remote company.
          </p>
          <p>
            I'm a full-stack engineer with experience writing enterprise
            software and web applications. I primarily work with Front-End
            technologies such as Javascript, Typescript, Angular, CSS, HTML.
          </p>
          <p>
            Outside of work, I like to dabble in learning new technologies.
            Currently, I'm learning game development and improving my existing
            skills as a software engineer. Besides that, I enjoy spending time
            outdoors, biking, reading and playing with my two cats, Havoc and
            Mustang.
          </p>
        </div>
        <div>
          <StaticImage
            className={photo}
            alt="Shaun Czubkowski"
            src="../images/shaunczubkowski.jpg"
            layout="fixed"
            width={300}
            height={425}
          />
        </div>
        <div className="contactContainer">
          <h3>Connect</h3>
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
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
