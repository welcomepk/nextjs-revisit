import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import CardWrapper from '@/app/ui/dashboard/cards';
import { Suspense } from 'react';
import { LatestInvoicesSkeleton, RevenueChartSkeleton, CardsSkeleton } from '@/app/ui/skeletons';

export default async function Page() {

    const revenue: any[] = [] //await fetchRevenue()

    // await new Promise(res => setTimeout(res, 3500))

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>

                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nostrum numquam neque, a ipsa expedita molestias mollitia possimus assumenda quae aperiam tenetur optio fugiat voluptas eius, aspernatur voluptatum eveniet dolorum! Alias aliquam, molestias odit minus id pariatur sunt, necessitatibus omnis eveniet aperiam quos quod maiores tempore obcaecati porro cum officiis consectetur corporis rerum illo qui similique. Consequatur saepe reprehenderit quisquam modi quod. Hic possimus distinctio voluptatum numquam, voluptates perferendis voluptatibus facere, commodi, ipsa enim modi? Mollitia natus cupiditate fuga eos voluptas enim eum perspiciatis esse eveniet sunt, debitis in repudiandae? Quis ipsam cumque obcaecati iste alias quasi praesentium tempora veniam quae at necessitatibus suscipit blanditiis, debitis eveniet nesciunt possimus rerum, aspernatur quidem, sequi voluptate! Et quam vitae rem ipsa nobis quo maiores. Obcaecati, explicabo, ex, iusto voluptatem nulla delectus itaque voluptate perferendis dolor illo temporibus eligendi incidunt voluptates et fuga. Quas voluptatum distinctio non perspiciatis officiis! Libero magni, ea soluta est maxime reiciendis natus quisquam distinctio a aliquid tenetur illum sequi dolore facilis dicta molestiae quo cumque provident vitae? Alias modi illo vero. Molestias consequuntur adipisci numquam. Error commodi et amet cum mollitia laudantium sunt, autem ab iusto corrupti impedit placeat tempore illum voluptas iste quia perspiciatis odio, iure ipsa inventore illo culpa nemo? Cupiditate amet accusamus voluptatem soluta atque, natus obcaecati eius dolorum ad laborum? Aperiam, rerum dolorem cupiditate similique totam eligendi nostrum necessitatibus repudiandae doloribus possimus temporibus atque at veniam commodi inventore sit ad. Velit neque reprehenderit perferendis nisi sit voluptas, excepturi voluptatem beatae eius vitae deserunt placeat, magni est eaque hic harum veniam accusamus quidem, necessitatibus architecto. Provident officia vitae ratione suscipit, debitis animi earum quia nihil quos doloribus fugit ab iusto porro totam itaque id similique facilis nesciunt iste quisquam repudiandae mollitia nam! Eum a sunt dolore reprehenderit iste quos. Excepturi corrupti ab delectus illo sit.</div>
        </main>
    );
}
