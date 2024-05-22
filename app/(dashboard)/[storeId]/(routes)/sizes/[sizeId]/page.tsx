import SizeForm from "@/components/SizeForm";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { Billboard, Size } from "@prisma/client";

const SizePage = async ({ params }: { params: { sizeId: string } }) => {
  let sizes: Size | null = null;
  if (params.sizeId !== "new") {
    sizes = await prismadb.size.findUnique({
      where: {
        id: params.sizeId,
      },
    });
  }
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={sizes} />
      </div>
    </div>
  );
};

export default SizePage;
