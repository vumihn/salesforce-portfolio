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
            <Link href="/about" className="font-sans font-medium text-xl text-black hover:opacity-70 transition-opacity">
              About me
            </Link>
            <Link href="#" className="font-sans font-medium text-xl text-black hover:opacity-70 transition-opacity">
              Random
            </Link>
          </nav>
        </header>

        {/* About Section */}
        <section id="about" className="mb-12 md:mb-20">
          <Image
            src="/assets/profilepicblue.png"
            alt="Profile picture"
            width={154}
            height={154}
            className="mb-6 rounded-full shadow-md"
          />
          <p className="font-sans font-medium text-black max-w-[540px]">
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
                  TechBridge had no sales process, no onboarding automation, and no support triage. This is a full Salesforce org build covering security model, lead-to-close flow, automated onboarding, and an Agentforce AI agent, reducing deal-stage entry time by ~40% and Tier 1 ticket volume by ~30%.
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
                  Most nonprofits track volunteers, donors, and grants across spreadsheets with no single source of truth. This project is a complete NPSP-based system built around three roles: Coordinator, Fundraiser, and Executive with scheduling flows, automated outreach, and a dashboard that answers operational questions without anyone running a report.
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
                  Vendor onboarding was manual and inconsistent, with no visibility into underperforming partners. This system automates the full lifecycle from onboarding to AI-driven coaching, cutting form completion time by ~50%.
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
            href="/assets/resume.pdf"
            download
            className="font-sans text-xl text-[#8f8f8f] underline hover:text-[#6f6f6f] transition-colors cursor-pointer"
          >
            Download Here
          </a>

          <div className="mt-8 w-full max-w-[926px]">
            <iframe
              src="/assets/resume.pdf"
              className="w-full h-[900px] border rounded-lg"
            />
          </div>
        </section>
      </div>
    </div>
  )
}