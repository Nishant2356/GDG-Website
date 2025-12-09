"use client"

import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import { Calendar, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"

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

export default function EventsPage() {
  const router = useRouter()

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <div className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Upcoming Events</h1>
              <p className="text-xl text-neutral-600">
                Join us at our upcoming events and connect with the developer community at GDG SOIT RGPV.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  onClick={() => router.push(`/events/${event.id}`)}
                  className="cursor-pointer bg-white rounded-3xl p-8 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-6">
                    <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-neutral-900 text-white">
                      {event.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium text-neutral-900 mb-4">{event.title}</h3>
                  <p className="text-neutral-500 font-light leading-relaxed mb-6">{event.description}</p>
                  <div className="space-y-3 text-sm text-neutral-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <button className="mt-8 w-full py-2 text-neutral-900 font-medium border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
