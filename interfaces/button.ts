import { ReactElement } from "react";

export interface ButtonInterface {
    text: string;
    icon?: ReactElement;
    textFirst?: boolean;
    className?: string;
    showLoading?: boolean;
    onPressed: (param?: boolean | string | number) => void;
}