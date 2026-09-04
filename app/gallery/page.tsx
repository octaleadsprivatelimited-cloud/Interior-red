import PageContent from './PageContent';
import { pageMetadata } from '@/lib/seo';
import PageSeo from '@/components/PageSeo';

export const metadata = pageMetadata('/gallery');

export default function Page() {
  return <><PageSeo path="/gallery" /><PageContent /></>;
}
