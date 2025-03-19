import Home from "../components/Home";
import DragAction from "../components/DragAction";
import BrowserTab from "../components/BrowserTab";
import MouseMove from "../components/MouseMove";
import Buttons from "../components/Buttons";
import DropDown from "../components/DropDown";
import Table from "../components/Table";
import DatePicker from "../components/DatePicker";
import FileUpload from "../components/FileUpload";
import Frame from "../components/Frame";
import PopupAlert from "../components/PopupAlert";
import Predictive from "../components/Predictive";
import ContactUs from "../components/ContactUs";
import HiddenText from "../components/HiddenText";
import LoaderJs from "../components/LoaderJs";
import TestStore from "./shop/TestStore";
import NestedXpath from "../components/NestedXpath";
import FamilyTree from "../components/FamilyTree";
import LoginForm from "../components/LoginForm";
import LogoutPage from "../components/LogoutPage";

const routeConfig = [
  { path: "/", label: "Homepage", element: <Home /> },
  { path: "/actions", label: "Actions", element: <DragAction /> },
  { path: "/browsertabs", label: "Browser Tabs", element: <BrowserTab /> },
  { path: "/mousemovement", label: "Mouse Movement", element: <MouseMove /> },
  { path: "/buttons", label: "Buttons", element: <Buttons /> },
  { path: "/dropdown", label: "Dropdown, Checkbox & Radio", element: <DropDown /> },
  { path: "/tables", label: "Tables", element: <Table /> },
  { path: "/datepicker", label: "Date Picker", element: <DatePicker /> },
  { path: "/fileupload", label: "File Upload", element: <FileUpload /> },
  { path: "/iframes", label: "iFrames", element: <Frame /> },
  { path: "/popupalerts", label: "Popups & Alerts", element: <PopupAlert /> },
  { path: "/predictivesearch", label: "Predictive Search", element: <Predictive /> },
  { path: "/contactus", label: "Contact Us", element: <ContactUs /> },
  { path: "/hiddenelements", label: "Hidden Elements", element: <HiddenText /> },
  { path: "/loader", label: "Loader", element: <LoaderJs /> },
  { path: "/nestedxpath", label: "Nested XPath", element: <NestedXpath /> },
  { path: "/familytree", label: "Family Tree", element: <FamilyTree /> },
  { path: "/teststore", label: "Test Store", element: <TestStore /> },
  { path: "/loginportal", label: "Login Portal", element: <LoginForm /> },
  { path: "/logout", label: "Logout", element: <LogoutPage /> },
];

export default routeConfig;
