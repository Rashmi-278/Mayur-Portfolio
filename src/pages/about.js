import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="About mayur" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About me
            </h1>
            <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl">
            Hello, I'm Mayur.
            </h2>
            <div className="mt-4 leading-loose">

I'm an aspiring entrepreneur who's currently working as a sales manager at Zerodha. Entrepreneurship and financial markets are two things I am passionate about.

During the course of my school years, I was an average student academically. I watched many Patric Bet David videos on YouTube that inspired me to be an entrepreneur.
 <br />
 <br />
For that reason, I enrolled in Commerce college in my hometown (Dharwad) after completing my high school.

Three months later, I dropped out of college because they didn't emphasize entrepreneurship, and I began learning business by working in a cafe. I was fortunate that my parents were supportive.

Attending entrepreneurship events (TIEcon hubli, Sandbox startups etc) was also something I did to meet people and learn.

Here are some pictures :
<br />
<br />
A recommendation from my elder sister led me to discover stock markets at the age of 16, where I began virtual trading.

The year I turned 18, I opened my first trading account at Zerodha and began my journey in the stock market.

Back then I aspired to become one of the legendary investors and traders like Ray Dalio, Nithin Kamath and many others.

More about my trading journey here (Link)
<br />
<br />

My trading career was not successful, so I decided to become a stock broker at India's largest brokerage company Zerodha.

Luckily I got the job at Zerodha because of my knowledge and passion for stock markets.

Also, I created the social media brand BTI, which had more than 40,000 Organic Followers on major social media platforms. My goal was to make it similar to Moneycontrol's website, but I later opted to stop and focus on trading full-time.

This is my journey up to now.
              <br />
              <br />
              I'm happy to hear from you:
              <br />
              <a
                href="mailto:kreatonmayur@gmail.com"
                className="border-b border-gray-500 hover:border-blue-600 hover:text-blue-600"
              >
                kreatonmayur@gmail.com
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img
              fluid={data.author.childImageSharp.fluid}
              alt="John Doe"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
//<Newsletter/> component exists
export default AboutPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "mayur.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 480, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
