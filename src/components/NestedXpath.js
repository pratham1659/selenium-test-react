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

        <main>
          <section>
            <div className="container mx-auto p-8">
              <div className="family-tree">
                <h1 className="family-tree-mt">Family Tree for Nested Xpath Testing</h1>
                <ul>
                  <li>
                    <div className="member">Ancestor-1</div>
                    <ul>
                      <li>
                        <div className="member">Parent-2</div>
                      </li>
                      <li>
                        <div className="member">Parent-3</div>
                        <ul>
                          <li>
                            <div className="member">Self-5</div>
                          </li>
                          <li>
                            <div className="member">Self-6</div>
                            <ul>
                              <li>
                                <div className="member">Child-8</div>
                                <ul>
                                  <li>
                                    <div className="member">GrandChild-10</div>
                                  </li>
                                  <li>
                                    <div className="member">GrandChild-11</div>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <div className="member">Child-9</div>
                                <ul>
                                  <li>
                                    <div className="member">GrandChild-12</div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <div className="member">Self-7</div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="member">Parent-4</div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default NestedXpath;
