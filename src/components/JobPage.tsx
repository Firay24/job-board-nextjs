import { Job } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface JobPageProps {
  job: Job;
}

export default function JobPage({
  job: {
    title,
    description,
    companyName,
    applicationUrl,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
  },
}: JobPageProps) {
  return (
    <section className="w-full grow space-y-5">
      <div className="flex items-center gap-3">
        {companyLogoUrl && (
          <Image
            src={companyLogoUrl}
            alt="company logo"
            width={100}
            height={100}
            className="rounded-xl"
          />
        )}
      </div>
      <div></div>
    </section>
  );
}
