import React from "react";
import { TableHeader, TableBody, TableFooter } from "./components/index";
import data from "./data.json";

class Table extends React.Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody items={data} />
                <TableFooter items={data} />
            </table>
        );
    }
}

export default Table;