import CategoryForm from "@/components/CategoryForm";
import prismadb from "@/lib/prismadb";
import { Category } from "@prisma/client";

const BillboardPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  let category: Category | null = null;
  if (params.categoryId !== "new") {
    category = await prismadb.category.findUnique({
      where: {
        id: params.categoryId,
      },
    });
  }
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
};

export default BillboardPage;
