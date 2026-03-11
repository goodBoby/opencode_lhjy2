import { LocaleLayout } from '@/components/layout/locale-layout'

export default function LocaleLayoutWrapper({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  return <LocaleLayout params={params}>{children}</LocaleLayout>
}
