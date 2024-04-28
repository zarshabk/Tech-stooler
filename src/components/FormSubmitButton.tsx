'use client'
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function FormSubmitButton(props:React.ButtonHTMLAttributes<HTMLButtonElement>){
    const {pending}=useFormStatus()
    return <Button {...props} type="submit"  disabled={props.disabled || pending} className="w-full mt-2">
        {pending ? "wait...":""}
        {props.children}
        </Button>

}