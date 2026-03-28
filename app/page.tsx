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
            <Link href="/about" className="font-serif text-xl text-black hover:opacity-70 transition-opacity">
              About me
            </Link>
            <Link href="#" className="font-serif text-xl text-black hover:opacity-70 transition-opacity">
              Random
            </Link>
          </nav>
        </header>

        {/* About Section */}
        <section id="about" className="mb-12 md:mb-20">
          <p className="font-sans text-base text-black max-w-[540px]">
            👨‍💻 I'm a Salesforce enthusiast, web designer and technologist. I use this website as a way to track my progress with Salesforce, utilizing Salesforce to provide solutions to real business problems.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20 md:mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-serif text-[32px] md:text-[40px] font-medium text-black whitespace-nowrap">Projects</h2>
            <div className="flex-1 h-[1px] bg-[#d9d9d9]"></div>
          </div>

          <div className="flex flex-col gap-6 max-w-[926px]">
            {/* Project 1: TechBridge */}
            <Link href="/project3" className="flex flex-col gap-4 hover:opacity-90 transition-opacity group">
              <div>
                <Image
                  src="/assets/project3.png"
                  alt="TechBridge Solutions - Full Salesforce Org Build"
                  width={926}
                  height={520}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-[24px] md:text-[32px] text-black">🏢 TechBridge Solutions - Full Salesforce Org Build</h3>
                <p className="font-sans text-base text-black">
                  I built a complete Salesforce org from scratch simulating a real B2B SaaS company deployment. The project covers the full admin and consultant skill set: security model, Sales Cloud lead-to-close process, automated client onboarding, Service Cloud case management with SLA enforcement, and an Agentforce AI agent handling Tier 1 customer support.
                </p>
                <div className="flex flex-wrap gap-2.5 mt-2">
                  <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">SECURITY MODEL</span>
                  <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">AUTOMATION</span>
                  <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">AGENTFORCE</span>

                </div>
              </div>
            </Link>

            {/* Project 2: NPSP */}
            <Link href="/project2" className="flex flex-col gap-4 hover:opacity-90 transition-opacity group">
              <div>
                <Image
                  src="/assets/project4.png"
                  alt="Vietnam E-Commerce Eco-Refund Engine"
                  width={926}
                  height={520}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-[24px] md:text-[32px] text-black">🔵 Building with Nonprofit Cloud in Salesforce</h3>
                <p className="font-sans text-base text-black">
                  This project is a complete Salesforce system for a simulated nonprofit, designed around three roles: the Coordinator who manages volunteers, the Fundraiser who manages donors and grants, and the Executive who needs answers without asking anyone for a report.
                </p>
                <div className="flex flex-wrap gap-2.5 mt-2">
                  <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">NPSP</span>
                  <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">SCREEN FLOW</span>
                  <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">UX DESIGN</span>
                </div>
              </div>
            </Link>

            {/* Project 3: Intelligent Partner */}
            <Link href="/project1" className="flex flex-col gap-4 hover:opacity-90 transition-opacity group">
              <div>
                <Image
                  src="/assets/project2.png"
                  alt="Intelligent Partner Lifecycle Optimizer"
                  width={926}
                  height={520}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-[24px] md:text-[32px] text-black">💡Intelligent Partner Lifecycle Optimizer</h3>
                <p className="font-sans text-base text-black">
                  I architected an end-to-end partner management solution designed to seamlessly onboard vendors and proactively manage their performance through automated health tracking for a premium E-commerce platform. This system automates the entire lifecycle—from initial onboarding to AI-driven performance optimization—ensuring high service standards across the vendor network.
                </p>
                <div className="flex flex-wrap gap-2.5 mt-2">
                  <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">SCREEN FLOW</span>
                  <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">PROMPT BUILDER</span>
                  <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">DASHBOARDS</span>
                  <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">QUALITY AUDITING</span>
                </div>
              </div>
            </Link>

            <div className="w-full h-[1px] bg-[#d9d9d9]"></div>

            
          </div>
        </section>

        {/* Resume Section */}
        <section className="pb-24 md:pb-32">
          <div className="flex items-center gap-4 mb-4 max-w-[926px]">
            <h2 className="font-serif text-[32px] md:text-[40px] font-medium text-black whitespace-nowrap">Resume</h2>
            <div className="flex-1 h-[1px] bg-[#d9d9d9]"></div>
          </div>
          <a 
            href="/assets/Resume.pdf"
            download
            className="font-sans text-xl text-[#8f8f8f] underline hover:text-[#6f6f6f] transition-colors cursor-pointer"
          >
            Download Here
          </a>

          <div className="mt-8 w-full max-w-[926px]">
            <iframe
              src="/assets/Resume.pdf"
              className="w-full h-[900px] border rounded-lg"
            />
          </div>
        </section>
      </div>
    </div>
  )
}