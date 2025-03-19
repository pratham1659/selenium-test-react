import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import routeConfig from "./routeConfig";
import LoginForm from "../components/LoginForm";
import LogoutPage from "../components/LogoutPage";
import TestStore from "./shop/TestStore";
import ProductList from "./shop/ProductList";

function MainPage() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm text-center py-4">
        <h1 className="text-3xl font-bold text-blue-700">Selenium TestLab: Exploring Automated Testing Realms</h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white shadow-md border-r flex flex-col overflow-hidden">
          <div className="pt-2 pb-2 border-b">
            <h2 className="text-xl font-bold text-center mb-2">Navigation Menu</h2>
          </div>

          {/* Scrollable Nav */}
          <nav className="flex-1 overflow-y-auto p-6 pt-2 min-h-0">
            <ul className="space-y-2">
              {routeConfig.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block py-2 px-3 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-md transition-colors
                        text-sm font-medium text-gray-700">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-auto bg-gray-50 p-4">
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
            <Routes>
              {routeConfig.map(({ path, element }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    path === "/loginportal" ? (
                      <LoginForm setLoggedInUser={setLoggedInUser} />
                    ) : path === "/logout" ? (
                      <LogoutPage loggedInUser={loggedInUser} />
                    ) : (
                      element
                    )
                  }
                />
              ))}
              {/* TestStore now handles Navbar inside */}
              <Route
                path="/teststore"
                element={
                  <TestStore
                    user={user}
                    setUser={setUser}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                }>
                <Route path="products/:id" element={<ProductList />} />
              </Route>
            </Routes>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 mt-auto">
        <div className="text-center text-xs sm:text-sm">© {new Date().getFullYear()} Pratham-Selenium. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default MainPage;
