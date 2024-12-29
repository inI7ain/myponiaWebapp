import { ReactElement } from "react";
import "./searchfield.styles.scss";

export default function Searchfield (className = "", children: any, ...rest: any[]): ReactElement {
    return (
        <>
            <div className={`${className} ${children} ${rest}`}>
                <label htmlFor="">Search</label>
                <input type="text" />
            </div>
        </>
    );
}