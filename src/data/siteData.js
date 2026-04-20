// Sabarm Business Solutions — chartered accounting, audit & advisory | Harare
// Single source of truth for all page content.

export const business = {
  name: "Sabarm Business Solutions",
  shortName: "Sabarm",
  tagline: "We promise to deliver. We deliver our promise.",
  established: 2016,
  city: "Harare",
  country: "Zimbabwe",
  rating: 4.9,
  reviewCount: 20,
  whatsapp: "+263778562152",
  whatsappDisplay: "+263 77 856 2152",
  phone: "+263 77 856 2152",
  email: "info@sabarm.co.zw",
  address: "Number 5, Premium Close, Mount Pleasant Business Park, Harare",
  shortAddress: "Mount Pleasant Business Park, Harare",
  hours: {
    weekdays: "08:00 – 17:00",
    saturday: "09:00 – 13:00",
    sunday: "Closed",
  },
  logo: "/logo.png",
  mapQuery: "Mount+Pleasant+Business+Park+Harare+Zimbabwe",
};

export const waHref = (msg) =>
  `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;
export const mailHref = (subject, body = "") =>
  `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// ---------- HERO ----------
export const hero = {
  eyebrow: "Chartered · Independent · Harare",
  headline: "Accounting, audit and advisory",
  headlineAccent: "for Zimbabwean ambition.",
  sub: "Sabarm is a Harare-based firm of chartered accountants helping directors, founders and finance teams report with clarity, plan with foresight, and grow with confidence — across mining, manufacturing, financial services, retail and the NGO sector.",
  ctaPrimary: { label: "Book a consultation", to: "/contact" },
  ctaSecondary: { label: "Our services", to: "/services" },
  image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80",
  imageAlt: "Financial ledger and calculator on a minimal desk",
  secondaryImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
  secondaryImageAlt: "African professional woman reviewing financial statements on a laptop",
  meta: [
    { k: "Founded", v: "2016" },
    { k: "Clients", v: "140+" },
    { k: "Sectors", v: "5" },
    { k: "Google", v: "4.9 / 5" },
  ],
};

// ---------- STATS ----------
export const stats = [
  { value: "140+", label: "Clients served across Zimbabwe" },
  { value: "9", label: "Years in independent practice" },
  { value: "5", label: "Industries under specialist coverage" },
  { value: "ICAZ", label: "Registered practising partners" },
];

// ---------- VALUES ----------
export const values = [
  {
    icon: "ShieldCheck",
    title: "Integrity",
    body: "The numbers we sign are the numbers we stand behind. Independence is not a posture — it is a professional obligation.",
  },
  {
    icon: "Target",
    title: "Precision",
    body: "Audit rigour, tax accuracy and reporting clarity. We do the detailed work so boards can make confident decisions.",
  },
  {
    icon: "Handshake",
    title: "Partnership",
    body: "We are an extension of your finance function — responsive, accessible, and commercially fluent in your sector.",
  },
  {
    icon: "Scales",
    title: "Independence",
    body: "We serve the company, not the conversation. Our advice holds up under scrutiny from boards, lenders and regulators.",
  },
];

// ---------- SERVICES ----------
export const services = [
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    short: "Statutory audits, agreed-upon procedures and internal audit co-sourcing.",
    icon: "ClipboardText",
    sub: [
      "Statutory financial statement audits (IFRS / IFRS for SMEs)",
      "Group audits and component reporting",
      "Agreed-upon procedures & review engagements",
      "Internal audit co-sourcing and control walkthroughs",
      "Donor funds assurance and grant acquittals",
    ],
    hero: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    body: "Our audit practice is built around rigour, scepticism and plain language. We invest time upfront understanding your business, its risks and its controls — then design an approach that is proportionate to materiality and focused on where misstatement actually lives. You get a clean file, a useful management letter, and an audit opinion that boards, lenders and regulators respect.",
  },
  {
    slug: "tax",
    title: "Tax",
    short: "ZIMRA compliance, planning, transfer pricing and dispute resolution.",
    icon: "Receipt",
    sub: [
      "Corporate, PAYE and VAT compliance",
      "Tax planning & efficient structuring",
      "Transfer pricing documentation",
      "ZIMRA audits, objections & appeals",
      "Expatriate and cross-border tax",
    ],
    hero: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    body: "Tax in Zimbabwe rewards the prepared. We keep your returns filed, your positions documented, and your structure efficient — all the way from routine PAYE through to the transfer-pricing files ZIMRA now expects on demand. When disputes arise, we represent your case with evidence and temperament.",
  },
  {
    slug: "advisory",
    title: "Advisory",
    short: "Budgeting, forecasting, transactions and finance function design.",
    icon: "ChartLineUp",
    sub: [
      "Budgets, rolling forecasts and 13-week cash",
      "Business valuations and financial modelling",
      "M&A support — buy-side & sell-side",
      "Finance function design and ERP selection",
      "Board-level CFO advisory",
    ],
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    body: "Advisory at Sabarm is practical, numerate and commercially honest. We build the models, sit in the rooms and write the papers — whether you are pricing a deal, defending a budget, selecting an ERP, or installing a CFO-grade finance function for the first time.",
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    short: "Monthly books, management accounts and IFRS-aligned reporting.",
    icon: "BookOpen",
    sub: [
      "Day-to-day transaction posting",
      "Bank, debtor & creditor reconciliations",
      "Monthly management accounts",
      "Inventory and fixed-asset registers",
      "IFRS for SMEs year-end pack",
    ],
    hero: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1600&q=80",
    body: "A clean set of books is the foundation of every good decision. We run outsourced bookkeeping for SMEs and mid-market groups — on-site, remote, or hybrid — delivering month-end packs that directors can actually use and auditors can actually sign.",
  },
  {
    slug: "payroll",
    title: "Payroll",
    short: "Managed payroll, PAYE, NSSA, NEC and pension compliance.",
    icon: "Users",
    sub: [
      "Monthly managed payroll (ZiG & USD)",
      "PAYE, AIDS Levy & NSSA returns",
      "NEC and pension reconciliations",
      "Payslips, ITF16s and tax clearance",
      "HR policy & expatriate payrolls",
    ],
    hero: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    body: "Payroll is where compliance, confidentiality and employee experience meet. We run accurate, dual-currency payrolls that file correctly with ZIMRA and NSSA, reconcile cleanly to the ledger, and give your people payslips they can trust.",
  },
  {
    slug: "company-secretarial",
    title: "Company Secretarial",
    short: "Statutory registers, minutes, filings and Companies Act compliance.",
    icon: "Vault",
    sub: [
      "Company formations (PBC, PVT, Trust)",
      "Statutory registers & minute books",
      "Annual returns and CR14 / CR6 filings",
      "Board & shareholder resolutions",
      "ZIMRA, NSSA, PRAZ registrations",
    ],
    hero: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    body: "Good governance starts with good records. We keep your statutory registers complete, your filings current at the Registrar, and your board documentation defensible — so that a lender, investor or regulator asking for proof receives it within the hour.",
  },
  {
    slug: "due-diligence",
    title: "Due Diligence",
    short: "Financial, tax and operational DD for acquisitions and investment.",
    icon: "MagnifyingGlass",
    sub: [
      "Buy-side financial due diligence",
      "Vendor / sell-side DD reports",
      "Quality of earnings analyses",
      "Tax and structuring reviews",
      "Working capital and net debt work",
    ],
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    body: "When a transaction is on the table, speed and judgement both matter. Our due-diligence teams read the numbers, pressure-test the story, and flag the things that move price — concisely and on time for the investment committee.",
  },
];

// ---------- INDUSTRIES ----------
export const industries = [
  {
    slug: "financial-services",
    name: "Financial Services",
    tagline: "Banks, microfinance, insurers and asset managers.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
    points: [
      "RBZ, IPEC and SECZIM reporting",
      "IFRS 9 ECL modelling",
      "Controls assurance for lenders",
    ],
  },
  {
    slug: "mining",
    name: "Mining",
    tagline: "Gold, chrome, lithium and small-scale operations.",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Royalties and MMCZ compliance",
      "Exploration cost accounting",
      "Tribute and JV structuring",
    ],
  },
  {
    slug: "retail",
    name: "Retail & FMCG",
    tagline: "Supermarkets, wholesalers and consumer brands.",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Inventory control and gross-margin review",
      "Dual-currency VAT reconciliations",
      "Multi-branch consolidations",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    tagline: "Factory accounting for food, textile and industrial producers.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Standard costing and variance analysis",
      "Capital allowances and SI 127 claims",
      "Raw-material and bonded warehouse audits",
    ],
  },
  {
    slug: "ngos",
    name: "NGOs & Donor-funded",
    tagline: "INGOs, local NGOs and faith-based organisations.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Donor grant audits (USAID, EU, UN)",
      "PVO compliance and governance",
      "Project and programme reporting",
    ],
  },
];

// ---------- TEAM ----------
export const team = [
  {
    name: "Sabelo Mhlanga",
    role: "Managing Partner",
    creds: "CA(Z), B.Compt. Hons",
    bio: "Sabelo leads the firm's audit and advisory practice. Before founding Sabarm in 2016, he spent nine years with a Big Four firm in Harare, where he led audits across banking, mining and manufacturing.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Rumbidzai Marufu",
    role: "Partner — Tax",
    creds: "CA(Z), MCom Taxation",
    bio: "Rumbidzai heads our tax practice. She advises listed groups and family businesses on Zimbabwean corporate tax, transfer pricing and cross-border structuring, and routinely represents clients in ZIMRA objections.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Tafadzwa Mapfumo",
    role: "Partner — Advisory",
    creds: "CFA, ACCA",
    bio: "Tafadzwa leads financial modelling, valuations and transaction advisory. He has closed mandates across mining, FMCG and financial services totalling over US$180m in enterprise value.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Linda Chikwanha",
    role: "Senior Manager — Audit",
    creds: "CA(Z), B.Acc Hons",
    bio: "Linda manages the firm's financial services and NGO audit portfolios. She specialises in IFRS 9 and donor-funded assurance engagements.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Brian Nyamhunga",
    role: "Manager — Bookkeeping & Payroll",
    creds: "CIMA Adv. Dip., ICSAZ",
    bio: "Brian runs our outsourced finance function — managed books, dual-currency payroll and monthly reporting for 60+ SMEs and mid-market clients.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Nyaradzo Kativhu",
    role: "Manager — Company Secretarial",
    creds: "ICSAZ, LLB",
    bio: "Nyaradzo oversees statutory compliance, board secretariat work and corporate governance assignments for our portfolio of 90+ entities.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kudakwashe Zulu",
    role: "Senior — Tax & Advisory",
    creds: "ACCA, B.Acc",
    bio: "Kudakwashe focuses on SME tax planning, financial modelling and management reporting for growth-stage companies.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Tanyaradzwa Moyo",
    role: "Senior — Audit",
    creds: "CA(Z) (In Progress), B.Acc Hons",
    bio: "Tanyaradzwa leads field teams on mid-market audit engagements across retail, manufacturing and mining.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  },
];

// ---------- INSIGHTS ----------
export const insights = [
  {
    slug: "finance-act-2024-highlights",
    title: "Finance Act 2024: nine changes that will shape your 2025 return",
    excerpt: "From the IMTT adjustments to the new special allowance regime, here is what directors and finance teams should be building into budgets and cash-flow models for 2025.",
    category: "Tax",
    readTime: "8 min read",
    date: "12 February 2025",
    author: "Rumbidzai Marufu",
    cover: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    body: `
      <p>Every Finance Act asks the same question of a Zimbabwean business: where does my effective tax rate move next, and what am I going to do about it? The 2024 Act is no different. We have distilled the nine provisions most likely to show up in your 2025 numbers.</p>
      <h3>1. IMTT threshold adjustments</h3>
      <p>The intermediated money transfer tax thresholds have been refreshed in line with the continued dual-currency environment. Finance teams should re-map their payment rails and re-test the exempt thresholds in their ERP tax tables.</p>
      <h3>2. Special initial allowance</h3>
      <p>Capital-intensive taxpayers — particularly in manufacturing and mining — should revisit their CAPEX plans. The revised SIA rates materially change the NPV of the 2025 investment pipeline.</p>
      <h3>3. PAYE tax tables</h3>
      <p>Payroll software must be reconfigured before the first January run. Expect corrections in February to propagate into your management accounts, particularly where employees are paid partly in foreign currency.</p>
      <h3>4. VAT on digital services</h3>
      <p>Foreign suppliers of digital services continue to be drawn into the VAT net. Where you are the recipient, the reverse-charge mechanics deserve a second look.</p>
      <h3>5. Mining royalties — lithium and PGMs</h3>
      <p>Royalty schedules have been tightened. Expect MMCZ and ZIMRA to ask for reconciliations of shipped tonnage against declared royalties with new seriousness.</p>
      <h3>6. Transfer pricing documentation</h3>
      <p>Transfer pricing documentation is now explicitly a "contemporaneous" requirement. If your master file and local file are being written after year-end, you are already late.</p>
      <h3>7. Withholding tax on contracts</h3>
      <p>The 10% WHT rules continue to catch suppliers. Contract templates and vendor onboarding flows should be refreshed to confirm tax-clearance status prior to payment.</p>
      <h3>8. Deductions and interest limitation</h3>
      <p>Thin-capitalisation ratios are worth re-running on any intra-group debt — particularly US-dollar denominated shareholder loans.</p>
      <h3>9. Tax clearance renewals</h3>
      <p>The new online issuance channel is faster, but revokes more aggressively. Good news for compliant businesses; a problem for those running a rolling arrears balance.</p>
      <p>Sabarm works with finance teams to translate each Act into working cash, effective-rate and provision impacts. Contact us if you want a one-page 2025 exposure map for your business.</p>
    `,
  },
  {
    slug: "transfer-pricing-101",
    title: "Transfer pricing 101 for Zimbabwean groups",
    excerpt: "A practical primer on documentation, arm's-length testing and the file ZIMRA now expects on demand — written for directors, not specialists.",
    category: "Tax",
    readTime: "10 min read",
    date: "28 January 2025",
    author: "Rumbidzai Marufu",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    body: `
      <p>Ten years ago, transfer pricing was something multinationals worried about. Today, any Zimbabwean company transacting with a related party — including the shareholder living in South Africa or the sister company in Mauritius — is in scope.</p>
      <h3>What is actually required?</h3>
      <p>A master file, a local file, and arm's-length support for every related-party transaction above the threshold. None of those are optional any longer.</p>
      <h3>Where do groups get caught?</h3>
      <p>Intra-group management fees, intra-group loans, and centralised procurement are the three most common audit flashpoints. All three can be defended — but only with documentation prepared before the ZIMRA letter arrives.</p>
      <h3>What does a good local file look like?</h3>
      <p>A good local file tells the story of why a related-party transaction looks the way it does, benchmarks it against comparable arm's-length arrangements, and leaves an auditor with nothing material to ask.</p>
      <p>We help groups build their master and local files as a standing compliance rhythm — not a fire drill.</p>
    `,
  },
  {
    slug: "zig-and-financial-reporting",
    title: "ZiG and financial reporting: functional currency decisions in 2025",
    excerpt: "Since the introduction of ZiG, every Zimbabwean preparer has had to revisit IAS 21. Here is a structured way to think about functional currency in dual-currency businesses.",
    category: "Reporting",
    readTime: "9 min read",
    date: "18 January 2025",
    author: "Sabelo Mhlanga",
    cover: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80",
    body: `
      <p>IAS 21 asks a simple question: which currency most faithfully represents the economic substance of your business? In practice, Zimbabwean preparers have to answer that in an environment where sales, costs and financing arrive in two different currencies.</p>
      <h3>Start with the revenue</h3>
      <p>The currency that most of your revenue is priced in will usually dominate the analysis. For import-led retailers and miners, that tends to be US$. For formal-sector services businesses, it is increasingly ZiG.</p>
      <h3>Triangulate with costs and financing</h3>
      <p>If your costs and financing are in a different currency from your revenue, the secondary indicators in IAS 21.10 matter more.</p>
      <h3>Document the judgement</h3>
      <p>The auditor is going to ask. Good practice is a one-page board memo, updated annually, setting out the indicators and the conclusion — with supporting numbers.</p>
    `,
  },
  {
    slug: "internal-audit-for-mid-market",
    title: "Why mid-market groups should have an internal audit function — and how to build one",
    excerpt: "Internal audit is no longer the preserve of listed entities. Here is the case for bringing assurance in-house, and the three lightweight models that work.",
    category: "Advisory",
    readTime: "7 min read",
    date: "4 January 2025",
    author: "Tafadzwa Mapfumo",
    cover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    body: `
      <p>A mid-market group with five branches, 150 staff and two warehouses has the risk profile of a listed company — it just does not yet have the assurance machinery. Internal audit fills the gap between month-end management accounts and the annual external audit.</p>
      <h3>Three models to consider</h3>
      <ul>
        <li>Fully outsourced — an annual programme delivered by a firm like ours</li>
        <li>Co-sourced — a small in-house function, topped up with specialist skills</li>
        <li>In-house — typically viable once staff headcount exceeds 300</li>
      </ul>
      <h3>What to audit first</h3>
      <p>Start with cash, revenue completeness and procurement. That alone will pay for the function in most SMEs.</p>
    `,
  },
  {
    slug: "ifrs-9-ecl-in-a-dual-currency-world",
    title: "IFRS 9 ECL modelling in a dual-currency world",
    excerpt: "Practical guidance for Zimbabwean microfinanciers and insurers on running defensible expected-credit-loss models when the functional currency is in flux.",
    category: "Financial Services",
    readTime: "11 min read",
    date: "16 December 2024",
    author: "Linda Chikwanha",
    cover: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1600&q=80",
    body: `
      <p>Expected-credit-loss modelling has never been mechanical. In Zimbabwe today, the PD, LGD and EAD all shift with the currency in which the exposure is settled.</p>
      <h3>Segment before you model</h3>
      <p>Model USD exposures separately from ZiG exposures. The two behave differently, and collapsing them masks the signal.</p>
      <h3>Forward-looking information</h3>
      <p>A credible FLI overlay is now a board-level topic. Expect the external auditor to ask for the committee minute that signed it off.</p>
    `,
  },
  {
    slug: "choosing-an-erp-in-zimbabwe",
    title: "Choosing an ERP in Zimbabwe: five principles that save you a year",
    excerpt: "Our selection framework for mid-market groups evaluating Sage, Odoo, Microsoft Dynamics, Pastel and locally hosted alternatives.",
    category: "Advisory",
    readTime: "8 min read",
    date: "5 December 2024",
    author: "Tafadzwa Mapfumo",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    body: `
      <p>An ERP selection gone wrong costs two things: eighteen months, and the goodwill of your finance team. A few principles avoid both.</p>
      <h3>1. Buy for your second year, not your first month</h3>
      <p>The cheapest option in month one is rarely the cheapest option in year three.</p>
      <h3>2. Multi-currency must be native, not bolted on</h3>
      <p>In Zimbabwe, anything less fails the first audit.</p>
      <h3>3. Tax engines must be configurable locally</h3>
      <p>If a ZIMRA update in December means a platform update from a vendor in April, you have the wrong platform.</p>
    `,
  },
];

// ---------- REVIEWS ----------
export const reviews = [
  {
    name: "Panashe Chigumba",
    role: "Finance Director, listed retail group",
    quote:
      "Sabarm's audit partners engage with the substance of the issues, not just the disclosures. Our management letter this year was the most useful document we have had from any auditor in a decade.",
    rating: 5,
  },
  {
    name: "Dr Chipo Makoni",
    role: "CEO, microfinance institution",
    quote:
      "They built our IFRS 9 ECL model from the ground up, walked our board through it, and defended it to the external auditor. Calm, technical, and patient with the regulator.",
    rating: 5,
  },
  {
    name: "Jonathan Parirewa",
    role: "Managing Director, mining services",
    quote:
      "On our acquisition of a chrome operation, Sabarm's due-diligence report surfaced two working-capital items that moved the price by US$1.4m. Precise, well-evidenced, delivered on time.",
    rating: 5,
  },
  {
    name: "Rangarirai Chiweshe",
    role: "Country Director, international NGO",
    quote:
      "A rare firm that understands donor audit requirements and treats them with the same respect as a statutory audit. Our project acquittals have never been cleaner.",
    rating: 5,
  },
];

// ---------- FAQ ----------
export const faqs = [
  {
    q: "Are your partners registered with ICAZ?",
    a: "Yes. Our signing partners are Chartered Accountants (Zimbabwe) registered with the Institute of Chartered Accountants of Zimbabwe (ICAZ) and in good standing.",
  },
  {
    q: "Do you work with small and medium businesses?",
    a: "Absolutely. A large share of our clients are SMEs — we provide outsourced bookkeeping, monthly management accounts, payroll, tax and statutory compliance tailored to that stage.",
  },
  {
    q: "Can Sabarm be appointed as statutory auditor for a listed entity?",
    a: "Our partners are registered public-interest-entity auditors. We accept appointments subject to our independence and capacity acceptance procedures.",
  },
  {
    q: "How do you charge?",
    a: "Assurance engagements are quoted on a fixed fee based on scope and risk. Advisory and tax mandates are scoped either as fixed fee or capped time-cost, always agreed upfront.",
  },
  {
    q: "Do you handle ZIMRA audits and objections?",
    a: "Yes — tax controversy is a core part of our tax practice. We represent clients in ZIMRA audits, objections, and appeals through the Fiscal Appeal Court.",
  },
  {
    q: "Where is your office?",
    a: "We are located at Number 5, Premium Close, Mount Pleasant Business Park, Harare. Parking is on-site and meetings are by appointment.",
  },
];

// ---------- CREDENTIALS ----------
export const credentials = [
  { label: "ICAZ registered", k: "Institute of Chartered Accountants of Zimbabwe" },
  { label: "ACCA members", k: "Association of Chartered Certified Accountants" },
  { label: "ICSAZ affiliated", k: "Institute of Chartered Secretaries" },
  { label: "CFA charterholders", k: "CFA Institute" },
];

// ---------- PROCESS ----------
export const process = [
  {
    n: "01",
    title: "Discovery",
    body: "We meet your leadership team, walk through the numbers, and map the risk profile. No cost and no commitment.",
  },
  {
    n: "02",
    title: "Proposal",
    body: "A scoped engagement letter — clear deliverables, fixed fee, named team, and a timeline your board can plan around.",
  },
  {
    n: "03",
    title: "Execution",
    body: "Senior-led teams work on-site, remotely or hybrid. Weekly status notes and a single point of accountability.",
  },
  {
    n: "04",
    title: "Delivery",
    body: "A partner presents the outcome to your board — opinion, report, model or filing — with recommendations for the year ahead.",
  },
];

// ---------- NAV ----------
export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/team", label: "Team" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];
