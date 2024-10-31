import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { Column } from "./DataGrid";
import React from "react";

export const getGridStyle = (columns: Column[]): React.CSSProperties => ({
    gridColumn: `span ${columns.length}`,

    // gridColumnStart: "auto",
    // gridColumnEnd: `span ${colsCount}`,
});

export function cn(...inputs: any[]) {
    return twMerge(classNames(inputs));
}

export const alignClassMap = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
};

export function getGridColumnsTemplate(columns: Column[]): React.CSSProperties {
    function getColumnWidth(column: Column) {
        if (column.width) {
            if (typeof column.width === "number") {
                return `${column.width}px`;
            } else {
                return column.width;
            }
        }
        if (column.minWidth || column.maxWidth) {
            return `minmax(${column.minWidth || 0}px, ${
                column.maxWidth ? column.maxWidth + "px" : "auto"
            })`;
        }

        return "auto";
    }

    const columnWidths = columns.map(getColumnWidth);
    return {
        gridTemplateColumns: columnWidths.join(" "),
    };
}
