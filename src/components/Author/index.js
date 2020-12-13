import React from "react"
import PropTypes from "prop-types"

import Content from "../../components/Content"

const Author = ({ fullText }) => {
  return (
    <Content>
      <div itemScope itemType="http://schema.org/Person">
        <>
          <h1>Namaste!</h1>

          <p>
            My name is <span itemProp="name">Shivam Gohel</span> from India.
            I've been working as{" "}
            <span itemProp="jobTitle">Software Engineer</span> since 2019. I'm
            passionate about open source projects. I thrive to improve processes
            and user engagement. I am trying to connect the dots between design,
            technology and healthcare.
          </p>

          <p>
            Currently, I'm a Software Engineer at{" "}
            <a
              href="https://www.infostretch.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver"
              itemProp="affiliation"
            >
              Infostretch Corporation
            </a>{" "}
            .
          </p>

          {fullText && (
            <>
              <p>
                I've been creating and contributing to few open source projects
                in the last years, for example:
              </p>
            </>
          )}
        </>
        {fullText && (
          <>
            <ul>
              <li>
                <a
                  itemProp="owns"
                  href="https://github.com/o-x-y-g-e-n/Web-Scraping-With-Sentiment-Analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Web Scraping with Sentiment Analysis"
                >
                  Web Scraping with Sentiment Analysis
                </a>
              </li>
              <li>
                <a
                  itemProp="owns"
                  href="https://github.com/o-x-y-g-e-n/whatsapp-assistant-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Whatsapp Assistant Bot"
                >
                  Whatsapp Assistant Bot
                </a>
              </li>
              <li>
                <a
                  itemProp="owns"
                  href="https://github.com/o-x-y-g-e-n/Facebook-AutoReply-Bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook Auto-Reply Bot"
                >
                  Facebook Auto-Reply Bot
                </a>
              </li>
              <li>
                <a
                  itemProp="owns"
                  href="https://github.com/appium/appium-espresso-driver/pulls?q=is%3Apr+is%3Aclosed+author%3Ao-x-y-g-e-n"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Appium"
                >
                  Appium (appium-espresso-driver)
                </a>
              </li>
              <li>
                <a
                  itemProp="owns"
                  href="https://github.com/getgauge/taiko/pulls?q=is%3Apr+is%3Aclosed+author%3Ao-x-y-g-e-n"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Taiko"
                >
                  Taiko
                </a>
              </li>
            </ul>
          </>
        )}
        {fullText && (
          <>
            <p>
              I try to stay updated with current technology and domain trends,
              see my recent participation here:
            </p>
          </>
        )}
        {fullText && (
          <>
            <ul>
              <li>
                <a
                  itemProp="owns"
                  href="https://credentials.edx.org/credentials/0915bf75db5a4f53bc57824f9faee621/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Product Design & Health"
                >
                  Product Design & Health <span>by DefltX</span>
                </a>
              </li>
              <li>
                <a
                  itemProp="owns"
                  href="https://www.youracclaim.com/badges/67c476ef-8b99-47b6-bd2a-9fc08248bb83?source=linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="IBM Enterprise Design Thinking Practitioner"
                >
                  IBM Enterprise Design Thinking Practitioner
                </a>
              </li>
              <li>
                <a
                  itemProp="owns"
                  href="https://plusacumen.novoed.com/#!/courses/design-kit-2020-3/statements/2237033"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Introduction to Human-centered Design"
                >
                  Introduction to Human-centered Design{" "}
                  <span>by Acumen Academy</span>
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </Content>
  )
}

Author.propTypes = {
  fullText: PropTypes.bool,
}

export default Author
