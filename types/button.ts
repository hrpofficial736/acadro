import { ReactElement } from "react";

export interface ButtonInterface {
    text: string;
    icon?: ReactElement;
    textFirst?: boolean;
    className?: string;
    onPressed: (param?: boolean | string | number) => void;
}