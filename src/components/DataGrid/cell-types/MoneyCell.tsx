import React from "react";
import { Cell, CellProps } from "../Cell";
import { DataCellProps } from "../DataCell";

export interface MoneyCellProps extends DataCellProps {
    icon?: boolean;
}

export const MoneyCell: React.FC<MoneyCellProps> = ({
    data,
    icon = true,
    ...props
}) => {
    return (
        <Cell {...props}>
            {icon && (
                <img
                    src="https://www.svgrepo.com/show/303207/pound-gbp.svg"
                    alt="gbp"
                    className="w-4 h-4 mr-2"
                />
            )}
            {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "GBP",
            }).format(Number(data[props.column.field]))}
        </Cell>
    );
};
