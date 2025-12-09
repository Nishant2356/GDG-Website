import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: "devfest-2024",
    title: "DevFest 2024",
    date: "December 15, 2024",
    location: "SOIT Campus",
    description:
      "The biggest developer festival of the year featuring talks, workshops, and networking.",
    tag: "Featured",
    details:
      "DevFest 2024 brings developers, designers, and tech enthusiasts together to explore cutting-edge technologies, participate in hands-on sessions, and network with like-minded professionals. Expect keynote speakers, live coding, and a celebration of community innovation!",
  },
  {
    id: "flutter-forward",
    title: "Flutter Forward",
    date: "January 20, 2025",
    location: "Tech Hub Auditorium",
    description:
      "Explore the latest in Flutter development with hands-on sessions and expert insights.",
    tag: "Workshop",
    details:
      "Flutter Forward dives deep into the modern cross-platform development ecosystem. Learn how to build beautiful apps faster and explore what's new in Flutter 4.0 with Google's developer experts.",
  },
  {
    id: "cloud-study-jam",
    title: "Cloud Study Jam",
    date: "February 8, 2025",
    location: "Innovation Lab",
    description:
      "Deep dive into Google Cloud technologies with guided learning paths and certifications.",
    tag: "Study Jam",
    details:
      "Our Cloud Study Jam gives you practical experience with Google Cloud through guided labs and real-world challenges. Perfect for developers eager to upskill and earn badges and certifications.",
  },
  {
    id: "web-dev-bootcamp",
    title: "Web Development Bootcamp",
    date: "March 5, 2025",
    location: "Online",
    description:
      "Master modern web development with React, Next.js, and TypeScript.",
    tag: "Bootcamp",
    details:
      "Join this immersive online bootcamp to master the full stack — from frontend frameworks like React and Next.js to backend APIs. Build projects, gain mentorship, and level up your web dev skills.",
  },
  {
    id: "ai-ml-meetup",
    title: "AI & Machine Learning Meetup",
    date: "March 22, 2025",
    location: "Innovation Center",
    description:
      "Discover the latest trends in AI, ML, and explore practical applications.",
    tag: "Meetup",
    details:
      "An open meetup where developers, data scientists, and AI enthusiasts discuss trends, breakthroughs, and practical implementations of AI and ML across industries.",
  },
  {
    id: "android-workshop",
    title: "Android Development Workshop",
    date: "April 10, 2025",
    location: "SOIT Lab",
    description:
      "Build scalable Android applications with Kotlin and modern architecture patterns.",
    tag: "Workshop",
    details:
      "A complete hands-on session covering modern Android development using Kotlin, Jetpack Compose, and MVVM architecture. Build, test, and deploy your first app with experts from GDG SOIT RGPV.",
  },
]

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = events.find((e) => e.id === id)

  if (!event) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-semibold mb-4">Event not found</h1>
        <Link href="/events" className="text-blue-600 underline">
          Go back
        </Link>
      </main>
    )
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <div className="pt-32 pb-20 px-6 md:px-8 max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="inline-flex px-4 py-1 text-sm font-medium rounded-full bg-neutral-900 text-white">
              {event.tag}
            </span>
          </div>
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">{event.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-neutral-500 mb-10">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed mb-12">{event.details}</p>

          <Link
            href="/events"
            className="text-blue-600 hover:text-blue-700 font-medium transition"
          >
            ← Back to Events
          </Link>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
