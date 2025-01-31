"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@piassa/ui/components/avatar";
import dynamic from "next/dynamic";

const LiveClock = dynamic(
  () => import("@/components/dashboard/header/live-clock"),
  { ssr: false, loading: () => <LiveClockSkeleton /> },
);
const Profile = () => {
  return (
    <div className="mx-10 flex w-full flex-1 items-center justify-center gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>LW</AvatarFallback>
      </Avatar>
      <LiveClock />
    </div>
  );
};
export function LiveClockSkeleton() {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg">
      {/* Skeleton for the date */}
      <div className="h-4 w-32 animate-pulse rounded bg-gray-300" />
      {/* Skeleton for the time */}
      <div className="h-4 w-32 animate-pulse rounded bg-gray-300" />
    </div>
  );
}

export default Profile;
