import React from "react";

interface ButtonType {
    type: "button"|"submit"|"reset",
    className: string,
    disabled: boolean,
    onClick: (e: React.MouseEvent) => void,
}

export default ButtonType