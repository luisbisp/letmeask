
import { ButtonHTMLAttributes } from "react";
type ButtonProps = ButtonHTMLAttributes;
export function Button(props){
    return(
        <button className="button" {...props}/>
    )
}