"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const team = [
  {
    name: "Alex Chen",
    role: "Community Lead",
    image: "/professional-asian-man-tech-leader.jpg",
  },
  {
    name: "Sarah Miller",
    role: "Events Coordinator",
    image: "/professional-woman-smiling.png",
  },
  {
    name: "David Kim",
    role: "Technical Lead",
    image: "/professional-korean-man-developer.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Content & Outreach",
    image: "/professional-latina-woman-marketing.jpg",
  },
]

export default function Team() {
  const router = useRouter();
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight mb-6">
            Meet the <span className="font-medium">Team</span>
          </h2>
          <p className="text-lg text-neutral-500 font-light max-w-2xl mx-auto">
            Passionate developers and organizers driving the GDG SOIT RGPV community forward.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              onClick={() => {
                router.push('/team')
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface TeamCardProps {
  name: string
  role: string
  image: string
}

function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} className="group relative">
      <div className="relative bg-white rounded-3xl p-6 text-center border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300">
        <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-lg font-medium text-neutral-900 mb-1">{name}</h3>
        <p className="text-sm text-neutral-500">{role}</p>
      </div>
    </motion.div>
  )
}
