import React from "react"
import PropTypes from "prop-types"

import Content from "../../components/Content"

const Author = ({ fullText }) => {
  return (
    <Content>
      <div itemScope itemType="http://schema.org/Person">
        <>
          <h1>Hi!</h1>

          <p>
            My name is <span itemProp="name">Felipe Fialho</span> from Brazil.
            I've been working as{" "}
            <span itemProp="jobTitle">Front-End Developer</span> since 2009. I'm
            passionate about open source projects, I believe that the
            dissemination of knowledge and good ideas inspires and improves the
            world.
          </p>

          <p>
            Currently, I'm a Tech Lead at{" "}
            <a
              href="https://juntossomosmais.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver"
              itemProp="affiliation"
            >
              Juntos Somos Mais
            </a>{" "}
            and I've created the{" "}
            <a
              href="https://github.com/frontendbr"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver"
              itemProp="owns"
            >
              Front-end BR
            </a>{" "}
            organization on Github. I'm also a one of the founders of{" "}
            <span itemProp="organizer">Meetup CSS</span> and I helped in
            organization of{" "}
            <span itemProp="organizer">Conferência CSS Brasil 2015</span>.
          </p>

          <p>
            {" "}
            I also have an{" "}
            <a
              href="https://www.youtube.com/FelipeFialhoCSS"
              target="_blank"
              rel="noopener noreferrer"
              title="View channel"
            >
              YouTube channel
            </a>
            .{" "}
          </p>

          {fullText && (
            <>
              <p>
                I'm in love with football (soccer), whether watching or playing.
                As people say "football is the most important thing among the
                least important things." I also like beer and music, especially
                both together.
              </p>

              <p>
                {" "}
                In my free time I like to watch movies and series, eventually I
                like to read books and philosophizing about life. And I need to
                say: I have two cats and I love they{" "}
                <span className="small" role="img" aria-label="Cat's emoji">
                  😽
                </span>
              </p>

              <p>
                I've been creating a lot of open source projects in the last
                years, for example:
              </p>
            </>
          )}
        </>
        )
        {fullText && (
          <>
            <ul>
              <li>
                <a
                  itemProp="owns"
                  href="https://github.com/frontendbr"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Front-end BR"
                >
                  Front-end BR
                </a>
              </li>
              <li>
                <a
                  itemProp="owns"
                  href="https://github.com/felipefialho/css-components"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="CSS Components"
                >
                  CSS Components
                </a>
              </li>
              <li>
                <a
                  itemProp="owns"
                  href="https://github.com/felipefialho/frontend-challenges"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Front-end Challenges"
                >
                  Front-end Challenges
                </a>
              </li>
              <li>
                <a
                  itemProp="owns"
                  href="https://github.com/felipefialho/kratos-boilerplate"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Kratos Boilerplate"
                >
                  Kratos Boilerplate
                </a>
              </li>
              <li>
                <a
                  itemProp="owns"
                  href="https://github.com/felipefialho/piano"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Piano"
                >
                  Piano
                </a>
              </li>
              <li>
                <a
                  itemProp="owns"
                  href="https://survey.frontendbr.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Survey"
                >
                  Survey
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
