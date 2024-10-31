import React, { FC, ReactNode, useEffect, useRef } from "react";
import { ViewportList, ViewportListPropsBase } from "react-viewport-list";

interface VirtualizedListProps<T = any>
    extends Omit<ViewportListPropsBase, "viewportRef"> {
    items: T[];
    children: (field: T, i: number) => ReactNode;
    scrollContainerId?: string;
}

export const VirtualizedRows: FC<VirtualizedListProps> = ({
    items,
    children,
    scrollContainerId = "table-root",
    initialPrerender = 10,
    itemSize = 30,
    itemMargin = 0,
    ...props
}) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        (ref as any).current = document.getElementById(
            scrollContainerId
        ) as HTMLDivElement;
    }, [scrollContainerId]);

    return (
        <ViewportList
            // {...props}
            viewportRef={ref}
            items={items}
            // initialPrerender={initialPrerender}
            // itemSize={itemSize}
            // itemMargin={itemMargin}
        >
            {children}
        </ViewportList>
    );
};
