import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Monetiza+"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <div className="md:flex items-center gap-8">
            <Link 
              href="/"
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/sign-up"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Sign up
            </Link>
            <Link 
              href="/sign-in"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Sign in
            </Link>
            <Link 
              href="/contact"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            A place where<br />
            your <span className="text-orange-500">creativity</span><br />
            turns into <span className="text-orange-500">money</span>
          </h1>

          <div className="max-w-2xl space-y-8">
            <p className="text-xl text-gray-600">
              Empower your <span className="text-orange-500">content creation journey</span> with seamless{' '}
              <span className="text-orange-500">monetization tools</span> and a{' '}
              <span className="text-orange-500">thriving community</span> of{' '}
              <span className="text-orange-500">1M+ subscribers</span>
            </p>

            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-full"
            >
              Start Monetizing
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}