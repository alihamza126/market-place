import ProductCard from "@/components/common/ProductCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Pagination } from "@nextui-org/pagination";
import { Chip } from "@nextui-org/react";
import Link from "next/link";



const page = async ({ searchParams, params }) => {
  const data = await searchParams.data ? JSON.parse(searchParams.data) : [];
  const { locale, name } = await params;
  const decodedCategoryName = name ? decodeURIComponent(name) : '';
  console.dir(data)


  return (
    <div className="md:container mx-auto py-5 p-1 md:p-4">
      {/* Breadcrumb */}
      <div className="px-2 md:px-0">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href={`/${locale}/`}>Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {/* ------------ */}
            <BreadcrumbItem>
              <Link href={`/${locale}/category/all`}>Category</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/${locale}/category/${decodedCategoryName.toLowerCase()}`}>{decodedCategoryName}</Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Page Title */}
      <div className="flex justify-between flex-wrap items-center mt-5 mb-8 gap-y-2">
        <h2 className="px-2 md:px-1 text-2xl font-bold capitalize text-primary-900"> {decodedCategoryName} Listings</h2>
        <span className="flex gap-1 md:mb-0 mb-4 overflow-auto p-2 scroll-m-3">
          {
            data?.selectedCategory?.map((ele, index) => (
              <Link href={`/${locale}/category/${ele.toLowerCase()}`} key={index + 1}>
                <Chip color="primary" variant='flat' className=" capitalize">{ele}</Chip>
              </Link>
            ))
          }
        </span>
      </div>

      {/* Listing Cards */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-3 md:gap-5">
        <ProductCard locale={locale} />
        <ProductCard locale={locale} />
        <ProductCard locale={locale} />
        <ProductCard locale={locale} />
        <ProductCard locale={locale} />
        <ProductCard locale={locale} />
        <ProductCard locale={locale} />
        <ProductCard locale={locale} />

      </div>

      <div className="mt-10 py-5 flex justify-center">
        <Pagination showControls initialPage={1} total={10} />
      </div>
    </div >


  )
}

export default page