import type { Metadata } from 'next';
import CategoryWork from '@/components/CategoryWork';
import { getCategory } from '@/data/workCategories';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  const title = category?.title ?? 'Selected Work';
  const description = category?.description ?? 'Selected work by Lumes & Chromes.';

  return {
    title,
    description,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: `${title} | Lumes & Chromes`,
      description,
      url: `/work/${slug}`,
      type: 'website',
    },
  };
}

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