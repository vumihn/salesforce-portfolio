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
            🏢 TechBridge Solutions - Full Salesforce Org Build
          </h1>

          <div className="space-y-4">
            <p>I built a complete Salesforce org from scratch simulating a real B2B SaaS company deployment. The project covers the full admin and consultant skill set: security model, Sales Cloud lead-to-close process, 
                automated client onboarding, Service Cloud case management with SLA enforcement, and an Agentforce AI agent handling Tier 1 customer support.</p>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-10">
            <h2 className="font-serif text-[32px] font-medium text-black">Details</h2>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">⚙️ Org Setup & Configuration</h3>
              <p className="font-sans text-base text-black">
                Configured OWDs to Private across Accounts, Opportunities, and Cases—forcing all record visibility to flow through a structured Role Hierarchy (VP → Regional Manager → Rep/Agent) across both the Sales and Customer Success orgs. Created Permission Sets over Profiles following modern Salesforce best practice, with Field-Level Security hiding sensitive contract data from support agents.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">SECURITY MODEL</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">ROLE HIERARCHY</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">OWD</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">PERMISSION SETS</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">SHARING RULES</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">FLS</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">💵 Lead-to-Close Sales Process</h3>
              <p className="font-sans text-base text-black">
                Designed a full B2B SaaS sales cycle: custom Lead fields for company size and ARR estimates, validation rules blocking conversion without contact data, Lead Assignment Rules routing Enterprise vs SMB leads to separate queues, 
                and a 7-stage Opportunity process with Path and Guidance for Success. A Screen Flow walks reps through a structured discovery form before an Opportunity is created, and a Record-Triggered Flow automatically sets Contact Roles to "Decision Maker" for VP and Director-level contacts.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">SCREEN FLOW</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">RECORD-TRIGGERED FLOW</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">SALES PATH</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">LEAD ASSIGNMENT RULES</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">🚀 Automated Client Onboarding</h3>
              <div className="font-sans text-base text-black space-y-4">
                <p>When a deal moves to Closed Won, a multi-step Record-Triggered Flow orchestrates the entire onboarding sequence without any human intervention—updating the Account status, creating an Onboarding Project record with a 30-day go-live target, generating five sequenced Onboarding Task records assigned to the CS team queue, sending a templated welcome email to the primary contact, and posting a Chatter notification tagging the Customer Success Manager.</p>
                
              </div>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">AUTOMATION</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">RECORD-TRIGGERED FLOW</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">CHATTER ACTION</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">🎧 Service Cloud & SLA Enforcement</h3>
              <div className="font-sans text-base text-black space-y-4">
                <p>Built a full Service Cloud operation with a 6-stage support process, Case Assignment Rules routing by product type to Enterprise and General queues, and Escalation Rules auto-escalating cases stale for 48 hours. Configured Entitlements and Milestones enforcing differentiated SLAs: Enterprise customers get First Response in 4 hours and Resolution in 24 hours; Standard customers get 8 and 72 hours respectively—with milestone violation alerts to the Support Manager. 
                    A Case Deflection Screen Flow surfaces Knowledge articles before a case is submitted, reducing unnecessary ticket volume.</p>
                
              </div>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">ENTITLEMENTS & MILESTONES</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">ESCALATION RULES</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">CASE ASSIGNMENT RULES</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">KNOWLEDGE BASE</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">SCREEN FLOW</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">🤖 Agentforce AI Support Agent</h3>
              <div className="font-sans text-base text-black space-y-4">
                <p>Lama is TechBridge's autonomous Tier 1 support assistant, built from scratch using <a href='https://github.com/vumihn/TechBridge-Agentforce-AgentScript' className='underline font-bold'>AgentScript YAML</a> and seven custom Autolaunched Flows as Agent Actions. She handles three topics: Case Status Lookup, Billing and Account Questions, and Human Escalation Handoff, using multi-topic reasoning, typed global session variables, and explicit action sequencing. When a customer signals cancellation, Lama creates a high-priority At-Risk case and notifies the customer that their success manager will follow up. Escalations trigger a structured handoff: 
                    Lama generates a summary, updates the case to Escalated and confirms the handoff to the customer—all without human involvement. Deployed on Experience Cloud via Embedded Messaging.</p>
                
              </div>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">AGENTFORCE</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">AUTOLAUNCHED FLOW</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs px-2 py-2 rounded-lg">EXPERIENCE CLOUD</span>
              </div>
            </div>
          </div>

          {/* Outcome */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-[32px] font-medium text-black">Outcome</h2>
            <div className="flex flex-col gap-4">
              <div className="bg-[#e0ffda] rounded-lg p-4 flex flex-col gap-2">
                <h3 className="font-sans text-base font-semibold text-[#2f9119]">Governed, Scalable Org</h3>
                <p className="font-sans text-xs text-[#2f9119]">A Private OWD model with Role Hierarchy and Permission Sets means every user sees exactly what they should and nothing more—without any manual sharing configuration per record.</p>
              </div>
              <div className="bg-[#e0ffda] rounded-lg p-4 flex flex-col gap-2">
                <h3 className="font-sans text-base font-semibold text-[#2f9119]">Autonomous Tier 1 Support</h3>
                <p className="font-sans text-xs text-[#2f9119]">Lama handles case lookups, contract inquiries, and at-risk escalations end-to-end with no human agent required until a structured, context-rich handoff is triggered.</p>
              </div>
              <div className="bg-[#e0ffda] rounded-lg p-4 flex flex-col gap-2">
                <h3 className="font-sans text-base font-semibold text-[#2f9119]">Zero-Touch Onboarding</h3>
                <p className="font-sans text-xs text-[#2f9119]">Closing a deal automatically creates an onboarding project, five sequenced tasks, a welcome email, and a Chatter notification, replacing hours of manual setup with a single Flow.</p>
              </div>
            </div>
          </div>

          {/* Reflection */}
          <div className="bg-[#f0f0f0] rounded-lg px-4 py-6 flex flex-col gap-4">
            <h2 className="font-serif text-[32px] font-medium text-black">Reflection</h2>
            <div className="font-sans text-base text-[#8f8f8f] space-y-4">
              <p>This is by far the most complex project I've done so far. It taught me to think in systems rather than features, how to configure different features of Salesforce and how to combine them into a running, scalable system.</p>
              <p>The most challenging part about this project is definitely building the Support Agent with Agent Builder. This is the first time I get to configure an agent from scratch to truly understand how it functions. I ran into Salesforce's schema caching behavior where output variables added to an 
                existing flow aren't reflected in an already-deployed Agent Action, and learned to work around it by cloning flows and creating new actions. I also ran into some issues while working with Agentforce in my Free Developer Edition as I was unable to make my Agent to notify an account's 
                contact via Chatter due to licensing constraints.</p>
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
                  <span className="font-sans text-base text-black">Flows, Prompt Builder, Formula</span>
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
                src="/assets/roles.png"
                alt="TechBridge Roles: CEO - Regional Manager - Reps - Customer Manager - Support Agent"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/schema.png"
                alt="New Case fields and Opportunity fields, along with Onboarding Project and Onboarding Task objects"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/onboardingproject.png"
                alt="Onboarding Flow triggered when an opportunity is closed."
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/contactroles.png"
                alt="Record-triggered flow when a new opportunity is created, contact that are senior roles will be decision maker for contact roles."
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/agentbuilder.png"
                alt="Agent Detail for my support agent - Lama"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <video
                src="/assets/LamaBot.mp4"
                aria-label="Conversation with Support Agent Lama to cancel a subscription"
                controls
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/caserecordpage.png"
                alt="At Risk Case created by Agent Conversation"
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