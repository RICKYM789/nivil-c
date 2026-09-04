import CategoryWork from '@/components/CategoryWork';
import { getCategory } from '@/data/workCategories';

export default async function CategoryWorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);

  return (
    <div className="w-full bg-[#000000] pt-24 pb-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-[1800px] mx-auto">
        <CategoryWork category={category} />
      </div>
    </div>
  );
}