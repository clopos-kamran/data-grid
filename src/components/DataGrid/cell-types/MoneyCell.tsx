import React, { FC } from "react";
import { Cell, CellProps } from "../Cell";
import { DataCellProps } from "../DataCell";
import { cn } from "../utils";

export interface MoneyCellProps extends DataCellProps {
    icon?: boolean;
    colored?: boolean;
}

export const MoneyCell: React.FC<MoneyCellProps> = ({
    data,
    icon = false,
    colored = true,
    ...props
}) => {
    const value = Number(data[props.column.field]);
    const colorClass = value > 0 ? "text-green-500" : "text-red-500";
    return (
        <Cell
            {...props}
            className={cn("flex justify-between gap-1", {
                [colorClass]: colored,
            })}
        >
            {icon && <NumberSign value={value} />}
            <span className={cn("flex-1", { [colorClass]: colored })}>
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "GBP",
                }).format(value)}
            </span>
        </Cell>
    );
};

const NumberSign: FC<{ value: number }> = ({ value }) => {
    if (value > 0) {
        return <span className="text-green-500">↑</span>;
    } else if (value < 0) {
        return <span className="text-red-500">↓</span>;
    } else {
        return null;
    }
};
