import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";
import { forwardRef } from "react";


export default forwardRef<HTMLSelectElement,React.HTMLProps<HTMLSelectElement>
> (function Select({className,...props},ref){
  return <div className="relative">
     <select className={cn('h-10 rounded-md px-2 border w-full  appearance-none truncate bg-background border-input',className)}
     ref={ref} 
     {...props} />
      <ChevronDown className="absolute right-3 h-4 w-4 top-3 opacity-50"/>

  </div>
})