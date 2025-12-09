"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useRouter } from "next/navigation"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"

const events = [
  {
    id: "devfest-2024",
    title: "DevFest 2024",
    date: "December 15, 2024",
    location: "SRGPV Campus",
    description: "The biggest developer festival of the year featuring talks, workshops, and networking.",
    tag: "Flagship Event",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "flutter-forward",
    title: "Flutter Forward",
    date: "January 20, 2025",
    location: "Tech Hub Auditorium",
    description: "Explore the latest in Flutter development with hands-on sessions and expert insights.",
    tag: "Workshop",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "cloud-study-jam",
    title: "Cloud Study Jam",
    date: "February 8, 2025",
    location: "Innovation Lab",
    description: "Deep dive into Google Cloud technologies with guided learning paths and certifications.",
    tag: "Study Jam",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
]

export default function Events() {
  const ref = useRef(null)
  const router = useRouter()
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight mb-6">
            Upcoming <span className="font-medium">Events</span>
          </h2>
          <p className="text-lg text-neutral-500 font-light max-w-2xl mx-auto">
            Join us at our upcoming events and be part of the developer community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => router.push('/events')}
            whileHover={{ x: 5 }}
            className="group inline-flex items-center gap-2 text-neutral-900 font-medium"
          >
            View All Events
            <motion.span className="relative">
              <ArrowRight className="w-5 h-5" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-900 group-hover:w-full transition-all duration-300" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

interface EventCardProps {
  id: string
  title: string
  date: string
  location: string
  description: string
  tag: string
  image: string
}

function EventCard({ id, title, date, location, description, tag, image }: EventCardProps) {
  const router = useRouter()
  
  return (
    <motion.div
      onClick={() => router.push(`/events/${id}`)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative h-full cursor-pointer"
    >
      <div className="relative h-full bg-white rounded-3xl overflow-hidden flex flex-col border border-neutral-200 hover:border-neutral-300 hover:shadow-xl transition-all duration-300">
        
        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
             <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide uppercase bg-white/90 backdrop-blur-sm rounded-full text-neutral-900 shadow-sm">
                {tag}
             </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-2">
            {description}
          </p>

          <div className="space-y-3 text-sm text-neutral-400 pt-6 border-t border-neutral-100">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Hover arrow (visible on desktop hover) */}
        <motion.div
          className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 hidden lg:block"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <ArrowRight className="w-5 h-5 text-primary-600" />
        </motion.div>
      </div>
    </motion.div>
  )
}