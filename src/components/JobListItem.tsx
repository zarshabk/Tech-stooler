import { Job } from "@prisma/client"
import { Suspense } from "react"
import {Banknote, Briefcase, Clock, Globe2, MapPin} from 'lucide-react'
import { formatMoney, relativeDate } from "@/lib/utils"
import Badge from "./Badge"
interface JobListItemProps {
job:Job
}

export default function JobListItem({job:{
    title,
    companyName,
    companyLogo,
    createdAt,
    location,
    locationType,
    description,
    salary,
    type,
    slug
}}:JobListItemProps)
{
    return (
     <Suspense fallback={<h1>Wait please...</h1>}>
          <div className="flex gap-3 p-5 my-2 border rounded-lg hover:bg-gray-50">
              <img src="https://www.freeiconspng.com/thumbs/software-icon/software-icon-30.png"
              height={100} width={100} 
              className="rounded-lg self-center"/>
              <div className="flex-grow space-y-3">
                  <div>
                    <h2 className="text-xl font-medium">{title}</h2>
                    <p className="text-gray-500">{companyName}</p>
                  </div>
                  <div className="text-muted-foreground">
                      <p className="flex items-center gap-1.5 sm:hidden">
                        <Briefcase size={16} className="shrink-0"/>
                        {type}
                      </p>
                      <p className="flex items-center gap-1.5 ">
                        <MapPin size={16} className="shrink-0"/>
                        {locationType}
                      </p>
                      <p className="flex items-center gap-1.5 ">
                        <Globe2 size={16} className="shrink-0"/>
                        {location || "worldwide"}
                      </p>
                      <p className="flex items-center gap-1.5 ">
                        <Banknote size={16} className="shrink-0"/>
                        {formatMoney(salary)}
                      </p>
                      <p className="flex items-center gap-1.5 sm:hidden">
                        <Clock size={16} className="shrink-0"/>
                        {relativeDate(createdAt)}
                      </p>
                  </div>
              </div>
              <div className="hidden sm:flex shrink-0 flex-col items-end justify-between">
                   <Badge >{type}</Badge>
                   <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock size={16} className="shrink-0"/>
                        {relativeDate(createdAt)}
                      </span>
              </div>
          </div>
     </Suspense>
    )
}