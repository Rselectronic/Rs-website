/**
 * =====================================================
 *  HOW TO ADD A NEW Articles POST (for Anas)
 * =====================================================
 *
 *  1. Copy one of the post blocks below
 *  2. Paste it at the TOP of the array (so it shows first)
 *  3. Fill in:
 *     - slug:    a short URL-friendly name (lowercase, dashes, no spaces)
 *     - title:   the article title
 *     - date:    the publish date (YYYY-MM-DD)
 *     - author:  who wrote it
 *     - excerpt: a 1-2 sentence summary shown on the Articles listing page
 *     - image:   put the image in public/Articles/ and reference it like '/Articles/my-image.jpg'
 *     - content: the full article text (use \n\n for paragraph breaks)
 *  4. Save the file, run `npm run build`, and redeploy to Netlify
 *
 * =====================================================
 */

const ArticlesPosts = [
  {
    slug: 'turnkey-vs-consignment-pcb-assembly',
    title: 'Turnkey vs. Consignment PCB Assembly: Which Is Right for You?',
    date: '2026-03-25',
    author: 'Anas Patel',
    excerpt:
      'Understanding the difference between turnkey and consignment assembly can save you time and money. Here\'s how to decide which model fits your project.',
    image: '/Articles/turnkey-vs-consignment.jpg',
    content: `When it comes to PCB assembly, there's no one-size-fits-all approach. At R.S. Electronique Inc., we offer three flexible service models — Turnkey, Consignment, and Assembly Only — so you can choose the one that best fits your project, budget, and timeline.

Turnkey Assembly is our most popular option. We handle everything from start to finish: component sourcing through DigiKey, Mouser, and 10+ authorized suppliers, bare PCB fabrication via our global fab partners, full assembly, inspection, and shipping. You send us your BOM and Gerbers, and we deliver finished boards. It's the fastest path from design to production.

Consignment Assembly gives you more control. You supply part of the kit — either the components or the bare PCBs — and we take care of the rest. This is ideal if you have preferred suppliers, existing inventory, or specialized components that you want to procure yourself.

Assembly Only is exactly what it sounds like. You provide both the components and the PCBs, and we handle the assembly. This works well for companies with established supply chains who just need reliable assembly capacity.

All three options include our full quality inspection process, including AOI and visual inspection. Not sure which model is right for your project? Reach out to us — we're happy to advise.`,
  },
  {
    slug: 'why-montreal-for-pcb-assembly',
    title: 'Why Montreal Is a Hidden Gem for PCB Assembly',
    date: '2026-03-18',
    author: 'Anas Patel',
    excerpt:
      'Montreal\'s diverse manufacturing ecosystem makes it one of the best places in North America for contract electronics manufacturing. Here\'s why.',
    image: '/Articles/montreal-pcb.jpg',
    content: `Montreal doesn't always come to mind when people think of electronics manufacturing, but it should. The city is home to a thriving ecosystem of aerospace, medical devices, telecommunications, and industrial electronics companies — and that diversity is exactly what makes it a great place for PCB assembly.

At R.S. Electronique Inc., we've spent over 15 years building boards for companies across every major sector. That experience across industries means we've seen it all — from high-reliability aerospace boards with Class 3 IPC requirements to rapid-turn consumer electronics prototypes.

Montreal also benefits from its position as a bilingual hub with strong ties to both North American and European markets. Our clients range from local startups to international OEMs, and we're equipped to handle both English and French communications seamlessly.

The cost advantage is real too. Compared to assembly houses in the US, Canadian manufacturers offer competitive pricing thanks to favorable exchange rates, while maintaining the same quality standards and proximity that nearshoring demands.

If you're currently shipping your boards overseas and dealing with long lead times, quality uncertainty, or communication gaps, it might be time to consider a Canadian alternative. We'd love to show you what Montreal can do.`,
  },
  {
    slug: 'how-to-prepare-bom-for-quoting',
    title: 'How to Prepare Your BOM for Faster, More Accurate Quotes',
    date: '2026-03-10',
    author: 'Anas Patel',
    excerpt:
      'A well-organized BOM is the single biggest factor in getting a fast and accurate PCB assembly quote. Here are the key things to include.',
    image: '/Articles/bom-preparation.jpg',
    content: `If there's one thing that speeds up the quoting process more than anything else, it's a clean, well-organized Bill of Materials. We've quoted thousands of BOMs over the years, and the difference between a 2-hour turnaround and a 2-day back-and-forth almost always comes down to BOM quality.

Here's what makes a great BOM:

Manufacturer Part Numbers (MPN) are essential. Generic descriptions like "100nF capacitor" can match hundreds of parts. An MPN like "GRM155R71C104KA88D" tells us exactly what you need — no guessing, no delays.

Quantities per board and order quantity should both be clearly stated. We need to know how many of each component goes on one board, and how many boards you want assembled.

Reference designators (R1, C5, U3, etc.) help us match your BOM to your assembly drawing. Without them, we're cross-referencing manually, which takes time.

Include all components — even ones you're supplying yourself. Mark them as "Customer Supplied" or "DNS" (Do Not Stuff) as needed. Surprises during production are expensive.

Approved alternates save time. If you have backup part numbers for hard-to-source components, list them. This helps us avoid sourcing delays.

File format matters too. Excel or CSV works best. PDFs are harder to process and can slow things down.

The bottom line: a 30-minute investment in cleaning up your BOM can save days on your quote and avoid costly mistakes in production. If you're not sure whether your BOM is ready, just send it over — we'll let you know.`,
  },
]

export default ArticlesPosts
