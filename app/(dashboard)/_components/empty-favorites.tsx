import Image from "next/image";

export const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/empty-favorites.svg"}
        alt="empty-favorites"
        height={140}
        width={140}
      />
      <h2 className="text-2xl font-semibold mt-6">You have no favorites</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Find a board and add it to your favorites
      </p>
    </div>
  );
};
