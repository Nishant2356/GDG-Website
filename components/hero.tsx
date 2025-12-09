// "use client"

// import { motion } from "framer-motion"
// import MagneticButton from "./magnetic-button"

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100">
//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.div
//             className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 shadow-sm"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//           >
//             <span className="w-2 h-2 rounded-full bg-neutral-900 animate-pulse" />
//             <span className="text-sm font-medium text-neutral-700">GDG SOIT RGPV</span>
//           </motion.div>

//           <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 tracking-tight leading-[1.1] text-balance">
//             Empowering
//             <br />
//             Developers.
//           </h1>

//           <motion.p
//             className="mt-8 text-lg md:text-xl text-neutral-600 font-normal max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//           >
//             Join GDG SOIT RGPV — where innovation meets collaboration. Build amazing projects, connect with developers,
//             and grow together.
//           </motion.p>

//           <motion.div
//             className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//           >
//             <MagneticButton variant="primary">Join Us</MagneticButton>
//             <MagneticButton variant="outline">Explore Events</MagneticButton>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Image from "next/image";

export default function BackgroundRippleEffectDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <BackgroundRippleEffect />

      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* GDG Logo/Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-900/80">
          <div
            className="-my-3 -ml-1 overflow-hidden rounded-md"
            style={{ mixBlendMode: "multiply" }}
          >
            <Image
              src="/gdg-gif.gif"
              alt="GDG Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
              unoptimized
            />
          </div>
          <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
            Google Developer Groups
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-balance text-center text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-7xl dark:text-white">
          GDG on Campus
          <span className="mt-2 block bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC04] bg-clip-text text-transparent">
            SOIT RGPV
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 max-w-2xl text-pretty text-center text-lg text-neutral-600 md:text-xl dark:text-neutral-400">
          Where curiosity meets code. Learn, build, and grow with a community of
          passionate developers shaping tomorrow&apos;s technology today.
        </p>

        <div className="group relative mt-10">
          {/* Animated gradient border */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC04] to-[#34A853] opacity-70 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md" />
          <div
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC04] to-[#34A853] opacity-0 transition-opacity duration-500 group-hover:animate-spin-slow group-hover:opacity-40"
            style={{ animationDuration: "3s" }}
          />

          <button className="relative flex items-center gap-3 rounded-full bg-neutral-900 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-white dark:text-neutral-900">
            <span>Join Now</span>
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        {/* Stats/Social Proof */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-neutral-900 dark:text-white">
              500+
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Members
            </p>
          </div>
          <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-700" />
          <div>
            <p className="text-2xl font-bold text-neutral-900 dark:text-white">
              50+
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Events
            </p>
          </div>
          <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-700" />
          <div>
            <p className="text-2xl font-bold text-neutral-900 dark:text-white">
              20+
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Workshops
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
