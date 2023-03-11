import React from "react";
import { Filter } from "../components/filter";
import { MapComponent } from "../components/map";
import { Search } from "../components/search";

export const MainPage = () => {
    return (
        <>
            <Search/>
            <Filter/>
            <MapComponent/>
        </>
    );
};