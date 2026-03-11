import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-5xl font-bold mb-4 text-blue-900">ChinaMediGuide</h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
        Your trusted platform for accessing medical services in China
      </p>
      <div className="flex gap-4 mb-12">
        <Link href="/en">
          <Button size="lg" className="text-lg px-8">
            English
          </Button>
        </Link>
        <Link href="/zh">
          <Button size="lg" variant="outline" className="text-lg px-8">
            中文
          </Button>
        </Link>
        <Link href="/ja">
          <Button size="lg" variant="outline" className="text-lg px-8">
            日本語
          </Button>
        </Link>
        <Link href="/ko">
          <Button size="lg" variant="outline" className="text-lg px-8">
            한국어
          </Button>
        </Link>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mt-12">
        <div className="text-center p-6">
          <div className="text-4xl mb-4">🏥</div>
          <h3 className="font-semibold text-lg mb-2">Find Hospitals</h3>
          <p className="text-gray-600">Search and compare top hospitals in China</p>
        </div>
        <div className="text-center p-6">
          <div className="text-4xl mb-4">👨‍⚕️</div>
          <h3 className="font-semibold text-lg mb-2">Book Doctors</h3>
          <p className="text-gray-600">Schedule appointments with English-speaking doctors</p>
        </div>
        <div className="text-center p-6">
          <div className="text-4xl mb-4">🌐</div>
          <h3 className="font-semibold text-lg mb-2">Translation Services</h3>
          <p className="text-gray-600">Professional medical interpretation support</p>
        </div>
      </div>
    </main>
  )
}
