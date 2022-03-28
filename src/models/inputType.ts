import React from "react";

interface InputType {
    id: string,
    type: string,
    label: string,
    helpText: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
}

export default InputType