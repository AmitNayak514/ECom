import ProductForm from "@/components/ProductForm";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { Image, Product } from "@prisma/client";

const ProductPage = async ({
  params,
}: {
  params: { productId: string; storeId: string };
}) => {
  let product: (Product & { images: Image[] }) | null = null;
  if (params.productId !== "new") {
    product = await prismadb.product.findUnique({
      where: {
        id: params.productId,
      },
      include: {
        images: true,
      },
    });
  }

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          initialData={product}
          categories={categories}
          colors={colors}
          sizes={sizes}
        />
      </div>
    </div>
  );
};

export default ProductPage;
