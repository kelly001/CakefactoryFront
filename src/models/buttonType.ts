import React from "react";

interface ButtonType {
    type: "button"|"submit"|"reset",
    className: string,
    disabled: boolean,
    onClick: (e: React.FormEvent) => void,
}

export default ButtonType