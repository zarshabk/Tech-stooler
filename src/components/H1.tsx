import { cn } from "@/lib/utils";

export default function H1(props:React.HTMLProps<HTMLHeadingElement>){
    return (
        <h1 {...props}
        className={cn("text-4xl lg:text5xl tracking-tight font-extrabold",
        props.className)}
        />
    )
}