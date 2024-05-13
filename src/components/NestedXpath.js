import React from "react";

const NestedXpath = () => {
  return (
    <div className="headerStyle scrollableList">
      <div className="nested-container">
        <header className="nested-header">
          <h1>Nested Tags Demo</h1>
          <nav className="nested-nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/aboutme">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="nested-main">
          <section className="nested-intro">
            <h2>Welcome!</h2>
            <p>This is a demo showcasing nesting tags in HTML using React.</p>
          </section>
          <section className="nested-content">
            <article>
              <h2>Article 1</h2>
              <p>This is the first article.</p>
              <div className="nested-comments">
                <h3>Comments</h3>
                <ul>
                  <li>Comment 1</li>
                  <li>Comment 2</li>
                </ul>
              </div>
            </article>
            <article>
              <h2>Article 2</h2>
              <p>This is the second article.</p>
            </article>
          </section>
        </main>
        <footer className="nested-footer">
          <p>&copy; 2024 Nested Tags Demo. All rights reserved.</p>
        </footer>

        <main>
          <section>
            <div class="tree">
              <ul>
                <li>
                  <a href="/">Parent</a>
                  <ul>
                    <li>
                      <a href="/">Child A</a>
                      <ul>
                        <li>
                          <a href="/">Grand Child A1</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">Child B</a>
                      <ul>
                        <li>
                          <a href="/">Grand Child B1</a>
                        </li>
                        <li>
                          <a href="/">Grand Child B2</a>
                          <ul>
                            <li>
                              <a href="/">Great Grand Child</a>
                            </li>
                            <li>
                              <a href="/">Great Grand Child</a>
                            </li>
                            <li>
                              <a href="/">Great Grand Child</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Grand Child B3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">Child C</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default NestedXpath;
