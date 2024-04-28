import prisma from "@/lib/prisma";
import JobListItem from "./JobListItem";
import { jobFilterValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";

interface jobFilterResults {
    filterValues:jobFilterValues
}

export default async function JobResults({filterValues:{q,type,location,remote}}:jobFilterResults){
    const searchString = q?.split(" ").filter(word=>word.length > 0).join(" & ");


     const searchFilter : Prisma.JobWhereInput = searchString ? {
OR:[
    {title:{search:searchString}},
    {type:{search:searchString}},
    {location:{search:searchString}},
    {locationType:{search:searchString}}
]
     }:{

     }

     const where:Prisma.JobWhereInput = {
        AND:[
            searchFilter,
            type?{type}:{},
            location?{location}:{},
            remote?{locationType:"Remote"}:{},
            {approved:true}
        ]
     }

    const jobs = await prisma.job.findMany({
        where,
        orderBy:{createdAt:"desc"}
      });
    return (
        <div className="grow space-y-4">
            {jobs.map((item,i)=>{
            return <JobListItem job={item} key={i}/>
            })}
        </div>
    )
}