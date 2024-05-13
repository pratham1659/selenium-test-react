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
          <section>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Element</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Grandparent</td>
                    <td>This is the grandparent element.</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Parent</td>
                    <td>This is the parent element.</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Child</td>
                    <td>This is the first child element.</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Grandchild</td>
                    <td>This is the grandchild element.</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Great Grandchild</td>
                    <td>This is the great-grandchild element.</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Child</td>
                    <td>This is the second child element.</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Parent</td>
                    <td>This is the second parent element.</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Child</td>
                    <td>This is the third child element.</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Child</td>
                    <td>This is the fourth child element.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
        <footer className="nested-footer">
          <p>&copy; 2024 Nested Tags Demo. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default NestedXpath;
