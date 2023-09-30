import React from 'react';
import NameSection from "./components/name-section";
import UpperInfo from "./components/upper-info";
import MiddleChart from "./components/middle-chart";
import SearchTable from "./components/table";
import LowerPart from "./components/lower-part";

const Dashboard = () => {
    return (
        <div>
            <NameSection />
            <UpperInfo />
            <MiddleChart />
            <SearchTable />
            <LowerPart />
        </div>
    );
};

export default Dashboard;