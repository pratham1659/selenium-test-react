import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import PopupAlert from "../components/PopupAlert";
import FileUpload from "../components/FileUpload";
import DragAction from "../components/DragAction";
import BrowserTab from "../components/BrowserTab";
import MouseMove from "../components/MouseMove";
import Buttons from "../components/Buttons";
import Table from "../components/Table";
import DropDown from "../components/DropDown";
import DatePicker from "../components/DatePicker";
import ContactUs from "../components/ContactUs";
import LoginForm from "../components/LoginForm";
import LogoutPage from "../components/LogoutPage";
import Frame from "../components/Frame";
import TestStore from "../components/TestStore";
import Predictive from "../components/Predictive";
import LoaderJs from "../components/LoaderJs";
import HiddenText from "../components/HiddenText";
import NestedXpath from "../components/NestedXpath";
import FamilyTree from "../components/FamilyTree";

function MainPage() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <h1 className="text-3xl font-bold text-center py-4 text-blue-700 bg-white shadow-sm">
        Selenium TestLab: Exploring Automated Testing Realms
      </h1>
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white shadow-md border-r flex flex-col h-full">
          <div className="p-6 pb-4">
            <h2 className="text-xl font-bold mb-4">Navigation Menu</h2>
            <nav className="flex-1 overflow-y-auto">
              <ul className="space-y-2">
                {[
                  { path: "/", label: "HOMEPAGE" },
                  { path: "/actions", label: "ACTIONS" },
                  { path: "/browsertabs", label: "BROWSER TABS" },
                  { path: "/buttons", label: "BUTTONS" },
                  { path: "/contactus", label: "CONTACT US FORM TEST" },
                  { path: "/loginportal", label: "LOGIN PORTAL TEST" },
                  { path: "/mousemovement", label: "MOUSE MOVEMENT" },
                  { path: "/popupalerts", label: "POP UPS & ALERTS" },
                  { path: "/predictivesearch", label: "PREDICTIVE SEARCH" },
                  { path: "/datepicker", label: "DATE PICKER" },
                  { path: "/tables", label: "TABLES" },
                  { path: "/dropdown", label: "DROPDOWN CHECKBOX RADIO" },
                  { path: "/fileupload", label: "FILE UPLOAD" },
                  { path: "/hiddenelements", label: "HIDDEN ELEMENTS" },
                  { path: "/iframes", label: "IFRAMES" },
                  { path: "/loader", label: "LOADER" },
                  { path: "/nestedxpath", label: "NESTED XPATH" },
                  { path: "/familytree", label: "FAMILY TREE" },
                  { path: "/teststore", label: "TEST STORE" },
                ].map((item) => (
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
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-auto bg-gray-50 p-4">
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/actions" element={<DragAction />} />
              <Route path="/browsertabs" element={<BrowserTab />} />
              <Route path="/mousemovement" element={<MouseMove />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/dropdown" element={<DropDown />} />
              <Route path="/tables" element={<Table />} />
              <Route path="/datepicker" element={<DatePicker />} />
              <Route path="/fileupload" element={<FileUpload />} />
              <Route path="/iframes" element={<Frame />} />
              <Route path="/popupalerts" element={<PopupAlert />} />
              <Route path="/predictivesearch" element={<Predictive />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/hiddenelements" element={<HiddenText />} />
              <Route path="/loader" element={<LoaderJs />} />
              <Route path="/teststore" element={<TestStore />} />
              <Route path="/nestedxpath" element={<NestedXpath />} />
              <Route path="/familytree" element={<FamilyTree />} />
              <Route path="/loginportal" element={<LoginForm setLoggedInUser={setLoggedInUser} />} />
              <Route path="/logout" element={<LogoutPage loggedInUser={loggedInUser} />} />
            </Routes>
          </div>
        </main>
      </div>
      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-center w-full gap-2">
            <p className="text-xs text-center sm:text-sm w-full">© {new Date().getFullYear()} Pratham-Selenium. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
