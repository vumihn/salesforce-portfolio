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
          <h1 className="font-serif text-[32px] md:text-[40px] text-black leading-tight mb-8 md:mb-16">
            🔵 Building with Nonprofit Cloud in Salesforce
          </h1>

          <div className="border-s-yellow-400 border-s-8 rounded-lg px-4 py-4 font-semibold space-y-4">
            <p>🌟Nonprofits are busy organizations running on limited resources, and most of them manage their operations across spreadsheets and email chains. Volunteer scheduling, donor tracking, grant applications, and reporting all live in different places, handled by different people, with no single source of truth.</p>
              
            <p>I built this project as a complete Salesforce system for a simulated nonprofit, designed around three roles: the Coordinator who manages volunteers, the Fundraiser who manages donors and grants, and the Executive who needs answers without asking anyone for a report.</p>
          </div>

          {/* Outcome */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-[32px] font-medium text-black">Outcome</h2>
            <div className="flex flex-col gap-4">
              <div className="bg-[#e0ffda] rounded-lg p-4 flex flex-col gap-2">
                <h3 className="font-sans text-base font-semibold text-[#2f9119]">For the Coordinator</h3>
                <p className="font-sans text-sm text-[#2f9119]">Scheduling a volunteer takes under 2 minutes with automatic conflict checks, confirmation emails, and shift reminders handled by the system.</p>
              </div>
              <div className="bg-[#e0ffda] rounded-lg p-4 flex flex-col gap-2">
                <h3 className="font-sans text-base font-semibold text-[#2f9119]">For the Fundraiser</h3>
                <p className="font-sans text-sm text-[#2f9119]">Lapsed donors are flagged automatically, grants create donation records when awarded, and every outreach email is personalized without manual writing.</p>
              </div>
              <div className="bg-[#e0ffda] rounded-lg p-4 flex flex-col gap-2">
                <h3 className="font-sans text-base font-semibold text-[#2f9119]">For the Executive</h3>
                <p className="font-sans text-sm text-[#2f9119]">A single dashboard answers the two most important operational questions. No reports requested, no waiting.</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-10">
            <h2 className="font-serif text-[32px] font-medium text-black">Details</h2>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">⚙️ Foundation & Data Model</h3>
                <div className="font-sans text-base text-black space-y-4">
                  <p>
                    Built on NPSP (Salesforce's nonprofit package), which restructures the platform around individual donors and household giving rather than business accounts. On top of NPSP, I added two custom objects: Volunteer Shifts and Grants. I then connected everything to Campaigns so every dollar and every volunteer hour is tied to the program it serves.
                  </p>
                  <p>
                    Four donation pipelines (Donation, Grant, Major Gift, In-Kind) each have their own stages and embedded coaching notes so fundraisers know exactly what to do at each step.
                  </p>
                </div>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">NPSP</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">DATA MODELING</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">SALES PROCESSES</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">VALIDATION RULES</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">🎨 Contact Record—Redesigned for Two Roles</h3>
              <div className="font-sans text-base text-black space-y-4">
                <p>
                  Out of the box, NPSP's Contact page shows 40+ fields with no sense of priority. A volunteer coordinator looking for a volunteer's shift history has to scroll past fields they'll never use.
                </p>
                <p>
                  I redesigned the Contact record, removed some default B2B-oriented fields and added two clear sections: Volunteer Profile (hours, upcoming role, last shift) and Donor Profile (total giving, last donation, donor tier). I also split the related tab into Volunteer History and Donation History.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">PAGE LAYOUTS</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">LIGHTNING RECORD PAGES</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">UX DESIGN</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">🗓️ Volunteer Scheduling Flow</h3>
              <div className="font-sans text-base text-black space-y-4">
                <p>
                  The Volunteer Scheduling Flow was designed around a coordinator's actual workflow, not around Salesforce's data model. Before building a single screen, I mapped the coordinator's process: find the volunteer, review their history, configure the shift, check for conflicts, confirm and send. Every screen corresponds exactly to one of those steps.
                </p>
                <p>
                  On confirmation, a personalized email goes to the volunteer automatically. The day before every shift, a reminder email goes out without any coordinator involvement.
                </p>
                <p>
                  To help users navigating through the flow and keep them engaged through out the process, I utilize Display Text and Screen Stage features for each screen. I want the Volunteer Scheduling Flow to mimic an actual app rather than a Salesforce flow.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">SCREEN FLOW</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">UX DESIGN</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">PROMPT BUILDER</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">✅ Log Shift Complete: One-Click Action</h3>
              <div className="font-sans text-base text-black space-y-4">
                <p>
                  Marking a shift complete used to mean navigating away from the Contact, finding the right shift record, opening it, and editing the status. Now it's a button on the Contact record.
                </p>
                <p>
                  One click opens a confirmation screen showing the shift details. By clicking “Finish”, the shift is marked complete, the volunteer's total hours update automatically, and their profile reflects the change immediately.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">SCREEN FLOW</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">AUTOMATION</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">💵 Donor Pipeline & Automated Outreach</h3>
              <div className="font-sans text-base text-black space-y-4">
                <p>
                  Three automated emails run without coordinator involvement: a welcome email for first-time donors, a daily shift reminder for upcoming volunteers, and a monthly re-engagement email for donors who haven't given in over a year.
                </p>
                <p>
                  When a grant is awarded, the system automatically creates a donation record linked to the grant's campaign so grant funding flows directly into financial reporting without anyone having to enter it manually.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">PROMPT BUILDER</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">AUTOMATION</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">GRANT PIPELINE</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">📊 Volunteer Hub App & Executive Dashboard</h3>
              <div className="font-sans text-base text-black space-y-4">
                <p>
                  The Volunteer Hub app organizes everything by role—shifts and contacts first for coordinators, grants and donations for fundraisers, dashboards for executives. The home page shows the executive dashboard and management-oriented information of volunteer shifts and recent items at a glance.
                </p>
                <p>
                  The executive dashboard answers two questions without any manual reporting: Which program rely most on volunteer? and Where is our donor base?
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">LIGHTNING APP BUILDER</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">DASHBOARDS</span>
              </div>
            </div>

          </div>

          {/* Reflection */}
          <div className="bg-[#f0f0f0] rounded-lg px-4 py-6 flex flex-col gap-4">
            <h2 className="font-serif text-[32px] font-medium text-black">Reflection</h2>
            <div className="font-sans text-base text-[#8f8f8f] space-y-4">
              <p>
                This is my first time working with NPSP, so besides the initial learning curve when getting used to Salesforce Nonprofit Cloud, setup and configuration for the org was quite straightforward. The thing that I really dived deeper with this project, compared to TechBridge Solutions, was starting with the people before the platform. 
                I mapped each role's workflow before touching a single field or flow, and every decision came back to the same question: does this reduce friction for the person who has to use it? The UX work and the Salesforce work aren't separate: they're the same problem viewed from different angles.
                </p>
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
                  <span className="font-sans text-base text-black">Salesforce NPSP (Nonprofit Cloud)</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xs text-[#b1b1b1] uppercase">KEY FEATURES</span>
                  <span className="font-sans text-base text-black">Screen Flows, UX, Lightning App Builder</span>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xs text-[#b1b1b1] uppercase">ROLE</span>
                  <span className="font-sans text-base text-black">Salesforce Admin & Builder</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xs text-[#b1b1b1] uppercase">AI INTEGRATION</span>
                  <span className="font-sans text-base text-black">Einstein Prompt Builder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Images — vertically stacked, full 4-col width, no sticky */}
          <div className="flex flex-col gap-5">
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/volunteershift.png"
                alt="Volunteer Shift Record Page"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/grant.png"
                alt="Grant Record Page"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/salesprocess.png"
                alt="Sales Path for Opportunities, with Guidance for Success."
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/recordtype.png"
                alt="4 Record types of Opportunities: Grant, Donation, In-Kind Gift, Major Gift"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/contactrecord.png"
                alt="Reorganized contact record page"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/tabs.png"
                alt="Volunteer tabs and Donation History tabs"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <video
                src="/assets/volunteersignupflow.mp4"
                aria-label="Video of how Volunteer Sign Up Screen Flow is executed"
                controls
                width={800}
                height={520}
                muted
                className="w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/email.png"
                alt="Shift Confirmation Email"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/home.png"
                alt="Volunteer Hub's Homepage"
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