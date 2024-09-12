import React from "react";

export default function TableFooter (props) {
    const {children} = props;

    return (
        <tfoot>
            {children}
        </tfoot>
    )
}

