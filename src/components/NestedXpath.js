import React from "react";

const NestedXpath = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Nested Tags Demo</h1>
      </header>

      {/* Tree Container */}
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">Family Tree for Nested XPath Testing</h2>

        {/* Family Tree List */}
        <ul className="list-none space-y-4">
          {/* Ancestor */}
          <li className="ml-0">
            <div className="bg-blue-200 px-4 py-2 rounded-md font-semibold text-center" data-testid="ancestor-1">
              Ancestor-1
            </div>

            {/* Parents */}
            <ul className="list-none pl-6 border-l-2 border-gray-300">
              <li>
                <div className="bg-green-200 px-4 py-2 rounded-md text-center" data-testid="parent-2">
                  Parent-2
                </div>
              </li>

              <li>
                <div className="bg-green-200 px-4 py-2 rounded-md text-center" data-testid="parent-3">
                  Parent-3
                </div>

                {/* Children */}
                <ul className="list-none pl-6 border-l-2 border-gray-300">
                  <li>
                    <div className="bg-yellow-200 px-4 py-2 rounded-md text-center" data-testid="self-5">
                      Self-5
                    </div>
                  </li>

                  <li>
                    <div className="bg-yellow-200 px-4 py-2 rounded-md text-center" data-testid="self-6">
                      Self-6
                    </div>

                    {/* Child Nodes */}
                    <ul className="list-none pl-6 border-l-2 border-gray-300">
                      <li>
                        <div className="bg-orange-200 px-4 py-2 rounded-md text-center" data-testid="child-8">
                          Child-8
                        </div>

                        {/* Grandchildren */}
                        <ul className="list-none pl-6 border-l-2 border-gray-300">
                          <li>
                            <div className="bg-red-200 px-4 py-2 rounded-md text-center" data-testid="grandchild-10">
                              GrandChild-10
                            </div>
                          </li>
                          <li>
                            <div className="bg-red-200 px-4 py-2 rounded-md text-center" data-testid="grandchild-11">
                              GrandChild-11
                            </div>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <div className="bg-orange-200 px-4 py-2 rounded-md text-center" data-testid="child-9">
                          Child-9
                        </div>

                        {/* Grandchild */}
                        <ul className="list-none pl-6 border-l-2 border-gray-300">
                          <li>
                            <div className="bg-red-200 px-4 py-2 rounded-md text-center" data-testid="grandchild-12">
                              GrandChild-12
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <div className="bg-yellow-200 px-4 py-2 rounded-md text-center" data-testid="self-7">
                      Self-7
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <div className="bg-green-200 px-4 py-2 rounded-md text-center" data-testid="parent-4">
                  Parent-4
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NestedXpath;
