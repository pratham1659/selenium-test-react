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
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-4 text-blue-700">Selenium TestLab: Exploring Automated Testing Realms</h1>
      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white shadow-md border-r p-6 h-screen overflow-y-auto">
          <h2 className="text-xl font-bold mb-2">Navigation Menu</h2>
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
                <Link to={item.path} className="block py-2 px-3 bg-gray-200 hover:bg-blue-500 hover:text-white rounded-md transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-center text-gray-500">Pratham-Selenium All Rights Reserved</p>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white shadow-md rounded-lg m-0">
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
        </main>
      </div>
    </div>
  );
}

export default MainPage;
