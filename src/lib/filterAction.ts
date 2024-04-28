'use server';

import { redirect } from "next/navigation";
import { jobFilterSchema } from "./validation";


export async function FilterJobs (formData:FormData){
   
     const values = Object.fromEntries(formData.entries())
     const {q,type,location,remote} = jobFilterSchema.parse(values)
    

     const searchParams = new URLSearchParams({
        ...(q && {q:q.trim()}),
        ...(type && {type:type}),
        ...(location && {location:location}),
        ...(remote && {remote:"true"}),
     })

     redirect(`/?${searchParams.toString()}`)

}
