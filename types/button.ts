import { ReactElement } from "react";

export interface ButtonInterface {
    text: string;
    icon?: ReactElement;
    textFirst?: boolean;
    onPressed: (param?: boolean | string | number) => void;
}