import { twMerge } from "tailwind-merge";
import classNames from "classnames";

export const getGridStyle = (colsCount: number) => ({
    gridColumn: `span ${colsCount} / span ${colsCount}`,
});

export function cn(...inputs: any[]) {
    return twMerge(classNames(inputs));
}

export const alignClassMap = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
};
