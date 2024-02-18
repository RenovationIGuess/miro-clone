import { Skeleton } from "@/components/ui/skeleton";

export const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div>Pencil</div>
        <div>Pen</div>
        <div>Circle</div>
        <div>Square</div>
        <div>Rect</div>
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <div>Undo</div>
        <div>Redo</div>
        <div>Clear</div>
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] shadow-md rounded-md left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px]">
      <Skeleton className="h-full w-full bg-muted-400" />
    </div>
  );
};
