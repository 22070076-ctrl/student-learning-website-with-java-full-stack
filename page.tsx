import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { FeaturedCourses } from "@/components/featured-courses"
import { Stats } from "@/components/stats"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      <Hero />
      <Stats />
      <FeaturedCourses />
      <Footer />
    </div>
  )
}
