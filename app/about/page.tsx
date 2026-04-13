import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="bg-white w-full grid grid-cols-1 md:grid-cols-9 gap-[40px] px-6 md:px-[64px]">
      <div className='col-span-1 md:col-start-3 md:col-span-5'>
        {/* Navigation Header */}
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between pt-12 md:pt-32 pb-8 md:pb-12">
          <div>
            <Link href="/">
              <Image
                src="/assets/minhnguyen.png"
                alt="my logo"
                width={240}
                height={38}
                className="w-[180px] md:w-[240px] h-auto"
              />
            </Link>
          </div>
          
          <nav className="flex gap-10 items-center">
            <Link href="#about" className="font-sans font-medium text-lg text-black hover:opacity-70 transition-opacity">
              About me
            </Link>
            <Link href="#" className="font-sans font-medium text-lg text-black hover:opacity-70 transition-opacity">
              Random
            </Link>
          </nav>
        </header>

        {/* About Section */}
        <section id="socials" className="mb-12 md:mb-20">
          <p className="font-sans text-base font-medium text-black max-w-[540px]">
            👨‍💻 I'm a Salesforce enthusiast, web designer and technologist. I use this website as a way to track my progress with Salesforce, utilizing Salesforce to provide solutions to real business problems.
          </p>
        </section>

        {/* Projects Section */}
        <section id="about" className="pb-24 md:pb-32 grid grid-cols-1 md:grid-cols-9 gap-8 items-start">
            <div className="md:col-span-5 flex justify-start">
                <div
                className="
                    inline-block
                    border-4 border-white
                    rounded-sm
                    shadow-md
                    -rotate-6
                    transition-transform duration-300 ease-out
                    hover:-rotate-12
                "
                >
                <Image
                    src="/assets/profilepic.jpeg"
                    alt="man with black t-shirt on beige background"
                    width={196}
                    height={262}
                    className="rounded-sm"
                />
                </div>
            </div>

            <div className="md:col-start-6 md:col-span-4 space-y-4">
                <p>✉️ Reach out to me via <a href="mailto:vuminhnguyenpham1010@gmail.com" className="font-medium underline hover:opacity-70 transition-opacity">Email.</a></p>
                <p>👨‍💻 Connect with me via <a href="https://www.linkedin.com/in/minh-nguyen-40a99322a/" className="font-medium underline hover:opacity-70 transition-opacity">LinkedIn.</a></p>
                <p>🎉 Socialize with me via <a href="https://www.instagram.com/vumihn/" className="font-medium underline hover:opacity-70 transition-opacity">Instagram.</a></p>
                <p>🙈 See things that I like via <a href="https://www.are.na/minh-nguyen-shgknsh_ire/channels" className="font-medium underline hover:opacity-70 transition-opacity">Are.na.</a></p>
            </div> 
        </section>
      </div>
    </div>
  )
}