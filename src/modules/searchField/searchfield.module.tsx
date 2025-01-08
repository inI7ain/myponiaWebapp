import React, { InputHTMLAttributes, ReactElement } from "react";
import "./searchfield.styles.scss";

interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export default function Searchfield ({className, children, ...rest}: SearchFieldProps): ReactElement {
    return (
        <>
            <div className={`${className} ${children} ${rest} searchfieldContainer`}>
                <input className="searchfieldInput" type="text" placeholder="search"/>
            </div>
        </>
    );
}