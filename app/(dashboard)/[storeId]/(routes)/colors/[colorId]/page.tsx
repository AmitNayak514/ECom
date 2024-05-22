import ColorForm from "@/components/ColorForm";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { Color } from "@prisma/client";

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  let colors: Color | null = null;
  if (params.colorId !== "new") {
    colors = await prismadb.color.findUnique({
      where: {
        id: params.colorId,
      },
    });
  }
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={colors} />
      </div>
    </div>
  );
};

export default ColorPage;
