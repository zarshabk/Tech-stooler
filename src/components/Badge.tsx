interface BadgeProps{
    children:React.ReactNode
}
export default function Badge({children}:BadgeProps){
    return (
       <span className="rounded border px-2 py-0.5 bg-muted text-muted-foreground text-sm font-medium">{children}</span>
    )
}