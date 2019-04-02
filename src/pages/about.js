import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const AboutPage = () => (
<Layout>
 <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  <div>
   <h1>About Me</h1>
   <p>Hi, my name is Joe Bender. I am currently a Data Science student at Lambda School. I am also studying physics. I am exploring how both of those disciplines can work together.  I enjoy working with computers, I find anything to do with rockets and space science and exploration fascinating. My hobbies include art, in particular anything involving metalworking, and I also enjoy working with embedded system development.</p>
  </div>
</Layout>
 )

export default AboutPage;
