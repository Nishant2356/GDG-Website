"use client"

import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import Image from "next/image"
import { useRouter } from "next/navigation"

const team = [
  {
    id: "alex-chen",
    name: "Alex Chen",
    role: "Community Lead",
    image: "/professional-asian-man-tech-leader.jpg",
    bio: "Passionate about building communities and empowering developers.",
  },
  {
    id: "sarah-miller",
    name: "Sarah Miller",
    role: "Events Coordinator",
    image: "/professional-woman-smiling.png",
    bio: "Organizes amazing events and workshops for the developer community.",
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Technical Lead",
    image: "/professional-korean-man-developer.jpg",
    bio: "Expert in cloud technologies and modern development practices.",
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    role: "Content & Outreach",
    image: "/professional-latina-woman-marketing.jpg",
    bio: "Creates engaging content and manages community outreach programs.",
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    role: "Developer Advocate",
    image: "/professional-man-software-engineer.jpg",
    bio: "Advocates for best practices and mentors junior developers.",
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    role: "Design Lead",
    image: "/professional-indian-woman-designer.jpg",
    bio: "Creates beautiful user experiences and visual designs for events.",
  },
]

export default function TeamPage() {
  const router = useRouter()

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <div className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet the Team</h1>
              <p className="text-xl text-neutral-600">
                The passionate developers and organizers driving the GDG SOIT RGPV community forward.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.id}
                  onClick={() => router.push(`/team/${member.id}`)}
                  className="cursor-pointer bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-medium text-neutral-900 mb-1">{member.name}</h3>
                    <p className="text-sm font-medium text-neutral-500 mb-4">{member.role}</p>
                    <p className="text-neutral-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
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
