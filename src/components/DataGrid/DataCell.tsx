import React from "react";
import { Column } from "./DataGrid";
import { alignClassMap, cn } from "./utils";
import { Cell, CellProps } from "./Cell";

export interface DataCellProps extends Omit<CellProps, "children"> {
    data: any;
}

export const DataCell: React.FC<DataCellProps> = ({ data, column }) => {
    return <Cell column={column}>{data[column.field]}</Cell>;
};
