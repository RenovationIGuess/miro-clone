import { Canvas } from "./_components/canvas";

interface BoardIdPageProsp {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProsp) => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Canvas boardId={params.boardId} />
    </main>
  );
};

export default BoardIdPage;
