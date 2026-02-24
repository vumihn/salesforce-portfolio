import Link from 'next/link'
import Image from 'next/image'

export default function Project1Page() {
  return (
    <div className="bg-white w-full min-h-screen">

      {/* ── Header — 9-column grid, logo + nav in center 5 cols ──────── */}
      <div className="grid grid-cols-1 md:grid-cols-9 gap-[40px] px-6 md:px-[64px] pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="col-span-1 md:col-start-3 md:col-span-5 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link href="/">
            <Image
              src="/assets/minhnguyen.png"
              alt="Minh Nguyen logo"
              width={240}
              height={38}
              className="w-[180px] md:w-[240px] h-auto"
            />
          </Link>
          <nav className="flex gap-8 items-center">
            <Link href="/#about" className="font-serif text-xl text-black hover:opacity-70 transition-opacity">
              About me
            </Link>
            <Link href="/#projects" className="font-serif text-xl text-black hover:opacity-70 transition-opacity">
              Random
            </Link>
          </nav>
        </div>
      </div>

      {/* ── Body — 7-column grid  ─────────────────────────────────────── */}
      {/* left 3 cols = text content   |   right 4 cols = meta + images   */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-[32px] px-6 md:px-[64px] pb-24">

        {/* ════════════════════════════════════
            LEFT — text content  (col-span-3)
        ════════════════════════════════════ */}
        <div className="md:col-span-3 flex flex-col gap-12">

          {/* Back link */}
          <Link
            href="/"
            className="font-sans text-base text-gray-600 hover:text-[#A62020] transition-colors"
          >
            ← Back to Home
          </Link>

          {/* Title */}
          <h1 className="font-serif text-[32px] md:text-[40px] text-black leading-tight md:mb-16">
            💡 Intelligent Partner Lifecycle Optimizer
          </h1>

          <div>
            <p>I architected an end-to-end partner management solution designed to seamlessly onboard vendors and 
              proactively manage their performance through automated health tracking for a premium E-commerce platform. This system automates the entire lifecycle—from initial onboarding to AI-driven performance optimization—ensuring high service standards across the vendor network.</p>
          </div>

          {/* User Stories */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-5 items-start">
              <div className="w-[5px] self-stretch bg-[#a162c9] rounded flex-shrink-0"></div>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans text-base font-semibold text-black">User Story: The Partner Manager</h3>
                <p className="font-sans text-base font-light italic text-black">
                  "As a Partner Manager, I want a guided onboarding wizard so that I can collect all necessary vendor documents (Legal Name, Estimated Annual Revenue, Business Type) without manual back-and-forth emails."
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="w-[5px] self-stretch bg-[#1e8e05] rounded flex-shrink-0"></div>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans text-base font-semibold text-black">User Story: The Executive Analyst</h3>
                <p className="font-sans text-base font-light italic text-black">
                  "As an Executive, I want to see real-time onboarding metrics so that I can identify which type of business in Vietnam are growing the fastest and where we have bottlenecks."
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-10">
            <h2 className="font-serif text-[32px] font-medium text-black">Features</h2>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">💼 Automated Onboarding & Quantifiable Performance Metrics (KPIs)</h3>
              <p className="font-sans text-base text-black">
                A Reactive Screen Flow standardizes new partner entry, simultaneously creating an Account and Partner Review record via Master-Detail relationship. A Health Score field (1–100) aggregates Speed, Quality, and Responsiveness KPIs into a live vendor performance snapshot.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">SCREEN FLOW</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">MASTER-DETAIL</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">FORMULA FIELDS</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">ROLL-UP SUMMARY</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">🤖 AI-Driven Coaching Plan</h3>
              <p className="font-sans text-base text-black">
                Einstein Prompt Builder analyzes specific metric deficits per vendor and generates bespoke coaching plans — including vendors seeking a higher service tier. A Human-in-the-Loop interface lets managers review and finalize AI suggestions before auto-dispatch via email.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">PROMPT BUILDER</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">AGENTFORCE</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">SCREEN FLOW</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">EMAIL ACTION</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">📊 Service Quality Dashboards</h3>
              <div className="font-sans text-base text-black">
                <p className="mb-3">I translated complex relational datasets into a Service Quality Command Center to drive strategic decision-making:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Performance Matrix (Scatter Chart): Displaying individual vendor based on fulfillment speed and quality ratings to identify "High-Velocity Champions" vs. "Operational Risks."</li>
                  <li>Industry Benchmarking (Bar Chart): Displays Average Health Scores by Business Type, highlighting which sectors (e.g., F&B vs. Logistics) require systemic intervention or resource allocation.</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">REPORTS</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">DASHBOARDS</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">INDUSTRY BENCHMARKING</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">📋 Quality Auditing</h3>
              <p className="font-sans text-base text-black">
                Partner Review records can be manually rated and stored by the Quality Audit Manager, or a Scheduled Flow can be configured to automate weekly performance tracking, ensuring consistent oversight without manual reminders or missed review cycles.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">SCHEDULED FLOW</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">AUTOMATION</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">QUALITY AUDIT</span>
              </div>
            </div>
          </div>

          {/* Outcome */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-[32px] font-medium text-black">Outcome</h2>
            <div className="flex flex-col gap-4">
              <div className="bg-[#e0ffda] rounded-lg p-4 flex flex-col gap-2">
                <h3 className="font-sans text-base font-semibold text-[#2f9119]">Friction-Free Onboarding</h3>
                <p className="font-sans text-xs text-[#2f9119]">Eliminated manual back-and-forth with a guided wizard that collects and validates all required vendor documents in a single, standardized flow.</p>
              </div>
              <div className="bg-[#e0ffda] rounded-lg p-4 flex flex-col gap-2">
                <h3 className="font-sans text-base font-semibold text-[#2f9119]">AI-Powered Improvement Plans</h3>
                <p className="font-sans text-xs text-[#2f9119]">Underperforming vendors receive bespoke, AI-generated coaching plans reviewed by managers — replacing guesswork with structured, data-driven guidance.</p>
              </div>
              <div className="bg-[#e0ffda] rounded-lg p-4 flex flex-col gap-2">
                <h3 className="font-sans text-base font-semibold text-[#2f9119]">Executive Visibility</h3>
                <p className="font-sans text-xs text-[#2f9119]">Real-time dashboards surface which business types are thriving or struggling, giving leadership a live pulse on the partner network without manual reporting.</p>
              </div>
            </div>
          </div>

          {/* Reflection */}
          <div className="bg-[#f0f0f0] rounded-lg px-4 py-6 flex flex-col gap-4">
            <h2 className="font-serif text-[32px] font-medium text-black">Reflection</h2>
            <div className="font-sans text-base text-[#8f8f8f] space-y-4">
              <p>This project taught me how to think beyond individual features and design a connected system — where a Screen Flow feeds data into a Health Score, which triggers an AI coaching plan, which is then validated by a human before reaching the vendor. Each component serves the next.</p>
              <p>Using Prompt Builder to generate coaching plans pushed me to think carefully about how context is passed to an LLM and how to structure prompts that return consistent, useful output. The Human-in-the-Loop pattern was a deliberate choice to ensure AI suggestions are always verified, a principle I'll carry into future builds.</p>
            </div>
          </div>

        </div>

        {/* ════════════════════════════════════
            RIGHT — metadata + images  (col-span-4)
        ════════════════════════════════════ */}
        <div className="md:col-span-4 flex flex-col gap-8 pt-0 md:pt-12">

          {/* Metadata — vertical accent bar + two columns of info */}
          <div className="flex gap-4 items-start border-l-4 border-[#b1b1b1] rounded-sm md:mb-20">
            <div className="w-[5px] h-[120px] rounded flex-shrink-0"></div>
            <div className="flex gap-6 md:gap-16 flex-wrap">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xs text-[#b1b1b1] uppercase">PLATFORM</span>
                  <span className="font-sans text-base text-black">Salesforce (Sales & Service Cloud)</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xs text-[#b1b1b1] uppercase">KEY FEATURES</span>
                  <span className="font-sans text-base text-black">Flows, Prompt Builder, Dashboards</span>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xs text-[#b1b1b1] uppercase">ROLE</span>
                  <span className="font-sans text-base text-black">Salesforce Admin & Builder</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xs text-[#b1b1b1] uppercase">AI INTEGRATION</span>
                  <span className="font-sans text-base text-black">Einstein Prompt Builder + Agentforce</span>
                </div>
              </div>
            </div>
          </div>

          {/* Images — vertically stacked, full 4-col width, no sticky */}
          <div className="flex flex-col gap-5">
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/fnbpermit.png"
                alt="Onboarding Screen"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/onboardingflow.png"
                alt="Onboarding Flow"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/partnerreview.png"
                alt="Partner Review Record"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/prompt.png"
                alt="Prompt Builder"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/coachingplanflow.png"
                alt="Get Coaching Plan Flow"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/coachingscreen.png"
                alt="Coaching Plan Screen"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/chart.png"
                alt="Dashboards"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/coachingemail.png"
                alt="Coaching Plan Email"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}