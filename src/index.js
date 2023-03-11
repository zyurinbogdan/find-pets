import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainPage } from "./pages/mainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainMenu } from "./components/mainMenu";
import { Announcements } from "./pages/announcements";
import { AddAnnouncementPage } from "./pages/addAnnouncementPage";
import { store } from "./redux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />}>
          <Route path="/" element={<MainPage />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="addannouncement" element={<AddAnnouncementPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

{
  /* <Route path="announcements" element={<Announcements />} />
        <Route path="addannouncement" element={<AddAnnouncement />} />
        <Route path="help" element={<Help />} /> */
}
{
  /* <Route path="*" element={<NotFound />} /> */
}
