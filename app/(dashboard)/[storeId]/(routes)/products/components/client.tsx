"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProductColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";
interface ProductClientProps {
  data: ProductColumn[];
}

const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center mb-2 justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Manage products for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator className="mb-4" />
      <DataTable searchKey="name" data={data} columns={columns} />
      <Heading title={`API`} description="API calls for Products" />
      <Separator className="mb-4" />
      <ApiList entityName="products" entityIdName="productId" />
    </div>
  );
};

export default ProductClient;
