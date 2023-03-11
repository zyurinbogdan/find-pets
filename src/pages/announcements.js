import React, { useState, useEffect } from "react";
import { Search } from "../components/search";
import { Filter } from "../components/filter";
import { AnnouncementsList } from "../components/AnnouncementsList";
import { app } from "../utils/base";
import { getDatabase, ref, get, child, onValue } from "firebase/database";

export const Announcements = () => {
  const dbRef = ref(getDatabase());
  const [data, setData] = useState([]);

  useEffect(() => {
    get(child(dbRef, `announcement`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Search />
      <Filter />
      <AnnouncementsList data={data}/>
    </>
  );
};
