export interface Article {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
  content: string;
}

export const articles: Article[] = [
  {
    title: 'Understanding IPC Class 2 vs Class 3 Standards',
    date: '2024-12-15',
    excerpt:
      'A deep dive into the differences between IPC Class 2 and Class 3 standards, and how to determine which level of quality your product requires.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    slug: 'ipc-class-2-vs-class-3',
    content: `IPC standards define the acceptability criteria for printed circuit board assemblies. The two most common classifications you'll encounter are Class 2 and Class 3 — and choosing the wrong one can either inflate your costs unnecessarily or create field failures in critical applications.

**IPC Class 2: General Electronics**

Class 2 covers general-purpose electronics where continued performance is required but uninterrupted service is not critical. Products like consumer devices, industrial controls, and commercial electronics typically fall under this classification. Minor cosmetic imperfections are acceptable as long as they don't affect functionality or reliability.

At RS PCB Assembly, the vast majority of our builds are IPC Class 2. This standard provides an excellent balance of quality and cost-effectiveness for most applications.

**IPC Class 3: High-Performance Electronics**

Class 3 is reserved for electronics where continued high performance or performance-on-demand is critical — and where failure cannot be tolerated. Medical devices, aerospace systems, military equipment, and life-support systems fall into this category.

Class 3 requires tighter process controls, stricter inspection criteria, more thorough documentation, and often specialized materials. Assembly costs are typically 20–40% higher than Class 2 due to the additional inspection steps and lower defect tolerances.

**How to Choose**

Ask yourself: what happens if this board fails in the field? If the answer is inconvenience or minor financial loss, Class 2 is appropriate. If the answer involves safety risk, loss of life, or catastrophic system failure, you need Class 3.

When in doubt, discuss your application with your contract manufacturer. At RS PCB Assembly, we'll help you determine the right standard for your product — and we'll never upsell you to Class 3 if Class 2 is the right fit.`,
  },
  {
    title: 'The Complete Guide to Turnkey PCB Manufacturing',
    date: '2024-11-28',
    excerpt:
      'Everything you need to know about turnkey PCB assembly — from component sourcing to final delivery — and why it saves time and money.',
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80',
    slug: 'turnkey-pcb-manufacturing-guide',
    content: `Turnkey PCB manufacturing is the most hands-off approach to getting your boards assembled. You hand off the design files and specifications — and your CM handles everything from there. Here's what that actually means and why it works.

**What's Included in Turnkey**

A true turnkey service covers three major phases: PCB fabrication (ordering bare boards from a fab house), component procurement (sourcing every part on your BOM), and PCB assembly (soldering components onto the bare boards at the CM's facility).

Some CMs also include testing, conformal coating, and packaging in their turnkey offering. At RS PCB Assembly, we coordinate with our network of trusted fabricators and suppliers so you deal with one point of contact for the entire project.

**The Sourcing Advantage**

One of the biggest benefits of turnkey is purchasing power. A contract manufacturer orders components in volume across many customer projects, giving them access to better pricing and shorter lead times than a single buyer could negotiate. During component shortages, established CMs also have better access to allocated parts.

**When Turnkey Makes Sense**

Turnkey is ideal when your team lacks purchasing infrastructure, when speed-to-market is a priority, or when you're producing prototype quantities where managing suppliers yourself isn't worth the overhead. It's also the right choice if you don't have an existing supplier relationship for all the components on your BOM.

**What You Need to Provide**

To get a turnkey quote, you'll need Gerber files (or ODB++ files), a drill file, a complete Bill of Materials with manufacturer part numbers, and an assembly drawing or centroid file. The more complete your package, the faster and more accurate your quote will be.

Contact our team at sales@rspcbassembly.com and we'll typically turn around a quote the same business day.`,
  },
  {
    title: 'How to Prepare Your BOM for PCB Assembly',
    date: '2024-11-10',
    excerpt:
      'Best practices for creating a clean, accurate Bill of Materials that speeds up quoting and reduces errors during production.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    slug: 'prepare-bom-pcb-assembly',
    content: `A well-prepared Bill of Materials is one of the most impactful things you can do to speed up quoting and reduce production errors. A messy BOM leads to clarification rounds, procurement mistakes, and delays. Here's how to get it right the first time.

**Required Fields in Every BOM**

Every line in your BOM should include: a reference designator (matching your schematic exactly), a quantity, a manufacturer name, a manufacturer part number (MPN), and a description. The MPN is the most critical field — it removes all ambiguity about exactly which part should be used.

**Approved Alternatives**

If you have approved alternate parts (second sources), list them as additional columns on the same BOM line. This gives your CM purchasing flexibility when the primary part is unavailable or has a long lead time, without requiring you to approve substitutions during production.

**Avoid Generic Descriptions**

"100nF capacitor" is not a specification — it's a category. Capacitors have voltage ratings, temperature coefficients (X5R, X7R, C0G), package sizes, and tolerance specs that all matter. Always tie each line to a specific MPN. If you truly want to allow flexibility, provide a complete specification set rather than leaving it open-ended.

**Handle DNP Parts Clearly**

Parts marked "Do Not Populate" should be clearly flagged in a dedicated column — not just left blank or noted in comments. A clear DNP designation prevents accidental assembly of test points, future-option pads, or debug headers.

**Format Matters**

Provide your BOM as a spreadsheet (Excel or CSV), not a PDF. PDFs require manual re-entry and introduce transcription errors. Column headers should be in the first row with no merged cells. One BOM line per unique MPN.

A clean BOM gets you a faster, more accurate quote — and fewer surprises when your boards come off the line.`,
  },
  {
    title: 'SMT vs Through-Hole: Choosing the Right Assembly Method',
    date: '2024-10-25',
    excerpt:
      'Comparing surface mount and through-hole technology — when to use each, cost implications, and how mixed assemblies work.',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80',
    slug: 'smt-vs-through-hole',
    content: `Surface Mount Technology (SMT) and Through-Hole Technology (THT) are the two fundamental methods for attaching components to a PCB. Most modern boards use both — understanding the strengths of each helps you make better design decisions.

**Surface Mount Technology (SMT)**

SMT components are soldered directly onto pads on the board surface. They're smaller, lighter, and can be placed on both sides of the board — enabling much higher component density. SMT is highly automated, making it cost-effective at any volume. The vast majority of modern electronic components are available only in SMT packages.

SMT is ideal for: compact designs, high-volume production, and designs that need components on both sides of the board.

**Through-Hole Technology (THT)**

THT components have leads that pass through drilled holes in the board and are soldered on the opposite side. They create a stronger mechanical bond — important for connectors, switches, and components that experience mechanical stress. They're also easier to replace in the field, making them popular for serviceable equipment.

THT is ideal for: high-stress components (connectors, transformers), prototypes where easy rework matters, and legacy designs.

**Mixed Assemblies**

Most real-world boards use both technologies — SMT for the bulk of the logic and passives, through-hole for connectors, bulk capacitors, and mechanical components. Mixed assemblies require additional process steps: typically SMT assembly and reflow first, followed by through-hole insertion and wave soldering or selective soldering.

At RS PCB Assembly, we handle full mixed assemblies in-house. When quoting, let us know if your board has through-hole components so we can plan the right process flow.`,
  },
  {
    title: 'Why Montreal is a Hub for Electronics Manufacturing',
    date: '2024-10-08',
    excerpt:
      "Montreal's growing electronics ecosystem, proximity to aerospace giants, and skilled workforce make it an ideal location for PCB assembly.",
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    slug: 'montreal-electronics-manufacturing',
    content: `Montreal doesn't always come to mind when people think of electronics manufacturing — but it should. The city has a deep engineering culture, world-class universities, and a dense cluster of technology companies that make it one of Canada's strongest manufacturing ecosystems.

**Aerospace and Defense**

Montreal is home to some of the world's largest aerospace companies — Bombardier, CAE, Pratt & Whitney Canada, and Bell Textron all have major operations here. These companies demand precision electronics built to the highest quality standards, and that demand has created a local supply chain capable of meeting those standards.

RS PCB Assembly has been serving the Montreal aerospace and industrial electronics community since 2003. We understand the quality requirements these industries impose, and we build our processes around meeting them consistently.

**Engineering Talent**

McGill, Polytechnique Montréal, Concordia, and UQAM collectively graduate thousands of engineers and technologists every year. This pipeline of talent keeps Montreal's manufacturing sector technically sophisticated and continuously improving.

**Strategic Location**

Saint-Laurent, where RS PCB Assembly is headquartered, is the industrial heart of the Montreal region. Close to the Trans-Canada Highway and accessible from across the island, it's an efficient logistics hub for receiving components from suppliers and shipping finished assemblies to customers across Quebec and the rest of North America.

**Supporting Canadian Manufacturing**

Choosing a Montreal-based CM keeps your supply chain domestic. Shorter shipping distances, no customs delays, easier communication across time zones, and the ability to visit the facility — these practical advantages compound over a long manufacturing relationship.`,
  },
  {
    title: 'Reducing Lead Times in PCB Production',
    date: '2024-09-20',
    excerpt:
      'Practical strategies for shortening your PCB assembly lead time, from early BOM review to selecting the right manufacturing partner.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&q=80',
    slug: 'reducing-pcb-lead-times',
    content: `Lead time is one of the most critical variables in product development. A delayed PCB build can cascade into missed deadlines, extended engineering cycles, and lost revenue. Here are the most effective strategies for keeping your build on schedule.

**Start with a Complete Package**

The single biggest cause of delays is an incomplete design package. Missing Gerbers, BOMs with generic part descriptions, or absent assembly drawings force your CM to ask clarifying questions — every round of back-and-forth adds days. Provide a complete package on day one: Gerbers, drill files, BOM with MPNs, centroid file, and an assembly drawing.

**Flag Long-Lead Components Early**

Some components — certain microcontrollers, specialized connectors, and power semiconductors — can have lead times of 20+ weeks during normal market conditions, and much longer during shortages. Identify these parts early in your design cycle and order them before you finalize the rest of the design. Your CM can help you identify long-lead items during the quoting process.

**Use Approved Alternates**

Designing in one approved alternate per critical component gives your CM purchasing flexibility. If the primary part has a 12-week lead time but an equivalent alternate is in stock, you could cut your component lead time from months to days.

**Choose the Right CM**

Not all contract manufacturers offer the same responsiveness. At RS PCB Assembly, our standard lead time for assembly-only builds is 1–2 weeks, and we offer quickturn options down to 5–7 business days for urgent projects. For true emergencies, call us — we've delivered in 24–48 hours when the situation required it.

**Communicate Early and Often**

If your schedule is tight, tell your CM upfront. We can prioritize purchasing, reserve machine time, and alert you to any risks before they become problems. A CM who knows your deadline can work with you to protect it — but only if you share that information early.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
