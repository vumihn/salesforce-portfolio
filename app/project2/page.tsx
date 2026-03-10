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
            🌿 Vietnam E-Commerce Eco-Refund Engine
          </h1>

          <div className="border-s-yellow-400 border-s-8 rounded-lg px-4 py-4 font-semibold space-y-4">
            <p>🌟Traditional e-commerce refunds default to physical returns: the item ships back, gets inspected, restocked or discarded. For a premium Vietnamese e-commerce platform, this created a triple cost: reverse logistics overhead, carbon emissions from unnecessary shipments, and customer friction from slow resolutions. This solution transforms avoidable returns into Eco-Credit offers, reducing costs, emissions, and resolution time simultaneously.</p>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-10">
            <h2 className="font-serif text-[32px] font-medium text-black">Features</h2>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">🍏 Sustainable UX & Selective Routing</h3>
              <p className="font-sans text-base text-black">
                Not every refund request is actually a refund. A customer who bought the wrong size has different intent than one who received a damaged item. The Flow's intent analysis logic identifies these scenarios before routing, steering avoidable returns toward Eco-Credit alternatives and only triggering physical return processes when genuinely necessary. This reduces unnecessary reverse logistics at the source.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">SCREEN FLOW</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">INTENT ANALYSIS</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">VARIABLES</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">🤖 AI-Generated Eco-Credit Offers</h3>
              <div className="font-sans text-base text-black space-y-4">
                <p>
                  Einstein Prompt Builder uses a Flex Template to generate personalized, Vietnamese-language Eco-Credit offers for each refund scenario. The tone is professional and warm, designed for the cultural context of the platform's customer base.
                </p>
                <p>
                  Generating offers in Vietnamese wasn't just a language setting, it required deliberate prompt engineering to match the platform's premium, relationship-first tone. 
                  A culturally mismatched offer would damage trust more than a generic one. The prompt template was iterated specifically to feel human-written, not machine-generated.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">PROMPT BUILDER</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">FLEX TEMPLATE</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-black">🧑‍💻 Human Review & Automated Email</h3>
              <div className="font-sans text-base text-black space-y-4">
                <p>AI generates the offer; a human approves it. This isn't a bottleneck—it's a trust mechanism. Agents review the AI-generated text on a single screen, make edits if needed, and send with one click. 
                  The full offer is logged on the Refund Request record, creating an audit trail for reporting and compliance. The agent saves only when satisfied, ensuring quality control while keeping the workflow fast and frictionless.</p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">SCREEN FLOW</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">UI DESIGN</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">FIELD UPDATE</span>
                <span className="bg-[#ffdfdf] text-[#cd0000] text-xs font-semibold px-2 py-2 rounded-lg">EMAIL ACTION</span>
              </div>
            </div>
          </div>

          {/* Outcome */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-[32px] font-medium text-black">Outcome</h2>
            <div className="flex flex-col gap-4">
              <div className="bg-[#e0ffda] rounded-lg p-4 flex flex-col gap-2">
                <h3 className="font-sans text-base font-semibold text-[#2f9119]">Reduced Physical Returns</h3>
                <p className="font-sans text-sm text-[#2f9119]">Avoidable returns are intercepted before they trigger logistics, reducing reverse shipping costs and the platform's carbon footprint per order.</p>
              </div>
              <div className="bg-[#e0ffda] rounded-lg p-4 flex flex-col gap-2">
                <h3 className="font-sans text-base font-semibold text-[#2f9119]">Faster Agent Resolution</h3>
                <p className="font-sans text-sm text-[#2f9119]">What previously required manual drafting and back-and-forth is now a single-screen workflow—agents resolve refund requests in minutes, not hours.</p>
              </div>
              <div className="bg-[#e0ffda] rounded-lg p-4 flex flex-col gap-2">
                <h3 className="font-sans text-base font-semibold text-[#2f9119]">Localized, Culturally Relevant AI</h3>
                <p className="font-sans text-sm text-[#2f9119]">AI offers are generated in Vietnamese with tone-matched to the platform's premium brand—customers receive personalized communication, not a translated template.</p>
              </div>
            </div>
          </div>

          {/* Reflection */}
          <div className="bg-[#f0f0f0] rounded-lg px-4 py-6 flex flex-col gap-4">
            <h2 className="font-serif text-[32px] font-medium text-black">Reflection</h2>
            <div className="font-sans text-base text-[#8f8f8f] space-y-4">
              <p>This is one of my first attempts to utilize AI Prompt to solve a business solution. Engineering the Prompt Builder template for Vietnamese language and cultural tone was the hardest part. 
                A generic prompt produces a generic offer. I had to iterate on the context structure: customer tier, order value, refund reason to get output that felt genuinely tailored rather than machine-generated. The human review step wasn't just a safety net; it was a deliberate trust mechanism for the agents using the tool.</p>
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
                src="/assets/flowecofund.png"
                alt="Eco-Fund Flow"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/prompt2.png"
                alt="Prompt"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/screenflow.png"
                alt="Screen Flow for Review"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/flowaction.png"
                alt="Flow Action"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/genoffer.png"
                alt="Generated Offer"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/beforeemail.png"
                alt="Before Email"
                width={800}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
              <Image
                src="/assets/afteremail.png"
                alt="After Email"
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