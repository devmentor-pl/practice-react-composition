import React from "react";

export default function TableRow (props){
    const {children} = props;

    return(
        <tr>
            {children}
        </tr>
    )
}