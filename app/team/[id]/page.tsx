import Image from "next/image"
import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import Link from "next/link"

// Dummy team data (same as in TeamPage)
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

  export default async function MemberPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const member = team.find((m) => m.id === id)
  

  if (!member) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-semibold mb-4">Member not found</h1>
        <Link href="/team" className="text-blue-600 underline">
          Go back
        </Link>
      </main>
    )
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <div className="pt-32 pb-20 px-6 md:px-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-64 h-64 rounded-3xl overflow-hidden flex-shrink-0 shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold text-neutral-900 mb-4">{member.name}</h1>
              <h2 className="text-lg font-medium text-neutral-500 mb-6">{member.role}</h2>
              <p className="text-neutral-700 leading-relaxed text-lg">{member.bio}</p>

              <div className="mt-10">
                <Link
                  href="/team"
                  className="text-blue-600 hover:text-blue-700 transition font-medium"
                >
                  ← Back to Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
