"use client";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
//import Select from "./ui/Select";
import prisma from "@/lib/prisma";
import { jobType } from "@/lib/jobTypes";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { FilterJobs } from "@/lib/filterAction";
import { jobFilterValues } from "@/lib/validation";
import FormSubmitButton from "./FormSubmitButton";

// async function FilterJobs (formData:FormData){

//     console.log("serever action form")
//    console.log(formData.get('q') as string)
// }

interface jobfilterProps {
  defaultValues: jobFilterValues;
}

export default async function JobFilterSidebar({
  defaultValues,
}: jobfilterProps) {
  const { pending } = useFormStatus();
  const locations = await prisma.job.findMany({
    where: { approved: true },
    select: { location: true },
    distinct: "location",
  });
  //.then((locations)=>
  //     locations.map((loc)=>loc).filter(Boolean)
  //    })) as String[];

  return (
    <div className="md:w-[250px] p-3 lg:w-[250px] sticky top:0 lg:top-2 md:top-2 h-fit bg-background rounded-lg border">
      <form action={FilterJobs} key={JSON.stringify(defaultValues)}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Title</Label>
            <Input
              type="text"
              placeholder="title , company etc"
              name="q"
              defaultValue={defaultValues.q}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Type</Label>
            <select
              name="type"
              defaultValue={defaultValues.type}
              className="h-10 rounded-md px-2 border w-full  appearance-none truncate bg-background border-input"
            >
              <option value="">Job Type</option>
              {jobType.map((d, i) => {
                return <option value={d}>{d}</option>;
              })}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">location</Label>
            <select
              name="location"
              defaultValue={defaultValues.location}
              className="h-10 rounded-md px-2 border w-full  appearance-none truncate bg-background border-input"
            >
              <option value="">All locations</option>
              {locations.map((d, i) => {
                return <option value={d?.location}>{d?.location}</option>;
              })}
            </select>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" value={"remote"} name="remote" />
            <Label>Remote</Label>
          </div>
        </div>
        <FormSubmitButton>Submit</FormSubmitButton>
      </form>
    </div>
  );
}
