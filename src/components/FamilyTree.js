import React from "react";

const FamilyTree = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Family Tree for XPath Testing</h1>
      </header>

      {/* Tree Container */}
      <div className="flex flex-col items-center space-y-6 w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg">
        {/* Ancestor */}
        <div
          className="generation ancestor text-lg font-semibold text-gray-900 bg-blue-200 px-6 py-3 rounded-md w-full text-center"
          data-testid="ancestor">
          Ancestor
        </div>

        {/* Parents */}
        <div className="generation parents flex justify-around w-full space-x-4">
          <div className="bg-green-200 px-4 py-2 rounded-md w-1/2 text-center" data-testid="parent-1">
            Parent 1
          </div>
          <div className="bg-green-200 px-4 py-2 rounded-md w-1/2 text-center" data-testid="parent-2">
            Parent 2
          </div>
        </div>

        {/* Children */}
        <div className="generation children flex justify-around w-full space-x-3">
          <div className="bg-yellow-200 px-4 py-2 rounded-md w-1/3 text-center" data-testid="child-1">
            Self 1
          </div>
          <div className="bg-yellow-200 px-4 py-2 rounded-md w-1/3 text-center" data-testid="child-2">
            Self 2
          </div>
          <div className="bg-yellow-200 px-4 py-2 rounded-md w-1/3 text-center" data-testid="child-3">
            Self 3
          </div>
        </div>

        {/* Grandchildren */}
        <div className="generation grandchildren flex justify-around w-full space-x-2">
          <div className="bg-orange-200 px-4 py-2 rounded-md w-1/4 text-center" data-testid="grandchild-1">
            Child 1
          </div>
          <div className="bg-orange-200 px-4 py-2 rounded-md w-1/4 text-center" data-testid="grandchild-2">
            Child 2
          </div>
          <div className="bg-orange-200 px-4 py-2 rounded-md w-1/4 text-center" data-testid="grandchild-3">
            Child 3
          </div>
          <div className="bg-orange-200 px-4 py-2 rounded-md w-1/4 text-center" data-testid="grandchild-4">
            Child 4
          </div>
        </div>

        {/* Great-Grandchildren */}
        <div className="generation great-grandchildren flex justify-around w-full space-x-1">
          <div className="bg-red-200 px-4 py-2 rounded-md w-1/5 text-center" data-testid="great-grandchild-1">
            Grandchild 1
          </div>
          <div className="bg-red-200 px-4 py-2 rounded-md w-1/5 text-center" data-testid="great-grandchild-2">
            Grandchild 2
          </div>
          <div className="bg-red-200 px-4 py-2 rounded-md w-1/5 text-center" data-testid="great-grandchild-3">
            Grandchild 3
          </div>
          <div className="bg-red-200 px-4 py-2 rounded-md w-1/5 text-center" data-testid="great-grandchild-4">
            Grandchild 4
          </div>
          <div className="bg-red-200 px-4 py-2 rounded-md w-1/5 text-center" data-testid="great-grandchild-5">
            Grandchild 5
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyTree;
