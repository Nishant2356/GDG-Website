import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"

export default function ContactPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <div className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Get In Touch</h1>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-black mb-2">Email</h3>
                    <p className="text-gray-600">contact@gdgsoitrgpv.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Follow Us</h3>
                    <div className="flex gap-4">
                      <a href="#" className="text-gray-600 hover:text-black transition">
                        Twitter
                      </a>
                      <a href="#" className="text-gray-600 hover:text-black transition">
                        Instagram
                      </a>
                      <a href="#" className="text-gray-600 hover:text-black transition">
                        LinkedIn
                      </a>
                      <a href="#" className="text-gray-600 hover:text-black transition">
                        GitHub
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Location</h3>
                    <p className="text-gray-600">School of Information Technology, RGPV, Indore</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
