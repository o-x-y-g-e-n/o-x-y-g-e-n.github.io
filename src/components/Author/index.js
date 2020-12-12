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
            passionate about open source projects, I thrive to improve processes
            and user engagement.
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
            </a>{" "}.
          </p>

      {fullText && (
            <>
              <p>
                I've been creating and contributing to few open source projects in the last
                years, for example:
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
                  href="https://github.com/frontendbr"
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
                  href="https://github.com/appium/appium-espresso-driver"
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
                  href="https://github.com/getgauge/taiko"
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
      </div>
    </Content>
  )
}

Author.propTypes = {
  fullText: PropTypes.bool,
}

export default Author
