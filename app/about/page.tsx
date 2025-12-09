import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"

export default function AboutPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <div className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">About GDG SOIT RGPV</h1>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p className="text-xl">
                Google Developer Groups (GDG) SOIT RGPV is a community-driven initiative for developers interested in
                Google technologies and open-source software. We provide a platform for developers to learn, connect,
                and collaborate.
              </p>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-black">Our Mission</h2>
                <p>
                  Our mission is to foster a vibrant developer community at RGPV's School of Information Technology by
                  promoting knowledge sharing, innovation, and collaboration. We aim to empower developers with
                  cutting-edge skills and technologies through workshops, talks, and hands-on projects.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-black">What We Do</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Organize technical workshops and training sessions</li>
                  <li>Host speaker talks from industry experts</li>
                  <li>Facilitate peer-to-peer learning and collaboration</li>
                  <li>Provide mentorship and career guidance</li>
                  <li>Build projects collaboratively</li>
                  <li>Create networking opportunities within the tech community</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-black">Our Community</h2>
                <p>
                  We have a diverse community of students, developers, and tech enthusiasts from RGPV and beyond.
                  Everyone is welcome regardless of skill level - whether you're just starting your coding journey or an
                  experienced developer, there's something for everyone at GDG SOIT RGPV.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-black">Join Us</h2>
                <p>
                  Be part of a thriving community of developers and innovators. Attend our events, participate in
                  workshops, collaborate on projects, and grow your skills. Together, we build the future of technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
