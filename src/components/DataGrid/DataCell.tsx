import React from "react";
import { Cell, CellProps } from "./Cell";

export interface DataCellProps extends Omit<CellProps, "children"> {
    data: any;
}

export const DataCell: React.FC<DataCellProps> = ({
    data,
    column,
    ...props
}) => {
    return (
        <Cell column={column} {...props}>
            {data[column.field]}
        </Cell>
    );
};
