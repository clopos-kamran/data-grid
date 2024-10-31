import React, { FC, isValidElement } from "react";
import { cn } from "../utils";
import { Slot } from "@radix-ui/react-slot";

interface DoubleDataCellProps extends React.HTMLAttributes<HTMLDivElement> {
    value1: React.ReactNode;
    value2: React.ReactNode;
}

export const DoubleDataCell: FC<DoubleDataCellProps> = ({
    value1,
    value2,
    className,
    children,
    ...props
}) => {
    const value1Props: React.HTMLAttributes<HTMLDivElement> = {
        className: "tw-text-sm",
    };
    const value2Props: React.HTMLAttributes<HTMLDivElement> = {
        className: "tw-text-xs tw-text-gray-400",
    };

    return (
        <div
            {...props}
            className={cn(
                "tw-flex tw-flex-col tw-items-center tw-justify-center tw-flex-1 -tw-mt-1",
                className
            )}
        >
            {isValidElement(value1) ? (
                <Slot {...value1Props}>{value1}</Slot>
            ) : (
                <div {...value1Props}>{value1}</div>
            )}
            {isValidElement(value2) ? (
                <Slot {...value2Props}>{value2}</Slot>
            ) : (
                <div {...value2Props}>{value2}</div>
            )}
        </div>
    );
};
