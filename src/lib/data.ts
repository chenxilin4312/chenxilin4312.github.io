export type Project = {
  slug: string;
  number: string; // e.g. "01 / 05" position in the sample log
  lab: string;
  role: string;
  location: string;
  span: string;
  techniques: string[];
  title: string;
  dek: string; // one-line summary for home page cards
  hook: string; // first-person opening, 2-3 sentences
  stats?: { value: string; label: string }[];
  sections: {
    heading: string;
    body: string[];
    image?: {
      src?: string;
      alt: string;
      label?: string; // shown on the placeholder box when src is unset
      caption?: string;
      variant?: "photo" | "figure";
    };
  }[];
  liveUrl?: string;
  heroAlt: string;
  heroImage?: string;
  heroImageVariant?: "photo" | "figure";
  heroCaption?: string; // e.g. photo credit/attribution
};

export const projects: Project[] = [
  {
    slug: "livecell-segmentation",
    number: "01 / 05",
    lab: "LIVECell U-Net Segmentation",
    role: "Independent Project",
    location: "Ithaca, NY",
    span: "August 2026",
    techniques: ["PyTorch", "Python", "Streamlit", "scikit-image", "NumPy"],
    title: "LIVECell U-Net Segmentation",
    dek: "A U-Net segmentation pipeline for the LIVECell benchmark, rebuilt around a three-class boundary model to pull cells apart where plain Dice can't tell.",
    hook: "Dice score looks great even when a model can't tell two touching cells apart — it just doesn't penalize a merged blob the way it should. I wanted a segmentation pipeline that got that failure mode right, so I built one against the LIVECell benchmark and measured it with metrics that actually catch it.",
    sections: [
      {
        heading: "The pipeline",
        body: [
          "I built and scaled a U-Net segmentation pipeline on the LIVECell benchmark — 5,387 images across 8 cancer cell lines — converting COCO annotations into cached instance masks across the official train/validation/test splits.",
        ],
      },
      {
        heading: "Splitting touching cells apart",
        body: [
          "Plain binary segmentation merges cells that touch. I replaced it with a three-class interior/boundary model, trained with a distance-weighted border loss and decoded with seeded watershed, which improved CTC SEG from ~0.55 to ~0.72 while reaching 0.92 Dice and 0.85 IoU.",
        ],
      },
      {
        heading: "Evaluating past aggregate Dice",
        body: [
          "Aggregate Dice hides exactly the failures this project targeted, so I built instance-level evaluation instead: CTC SEG, detection F1, merge/split error counts, COCO AP/AFNR, and size-stratified recall, to surface failures that a single blended score would bury.",
        ],
      },
    ],
    heroAlt: "U-Net instance segmentation of LIVECell microscopy images, cells separated by a three-class interior/boundary model",
  },
  {
    slug: "joey-elm",
    number: "02 / 05",
    lab: "Joey ELM",
    role: "Co-Founder & CEO",
    location: "Ithaca, NY",
    span: "June 2026 — Present",
    techniques: ["TypeScript", "Postgres", "Supabase", "Claude tool-use"],
    title: "Joey ELM",
    dek: "The lab notebook that connects every experiment, with an AI partner that only ever speaks from your own data.",
    hook: "Every lab I've worked in loses these connections the moment they're written down. A result points back to a protocol, that protocol borrows from a paper, and one reagent quietly ties together a dozen experiments — none of which survives once it's scattered across six different tools. I got tired of it, so I spent 30 days building the first version myself.",
    stats: [
      { value: "30", label: "days, solo, idea to production" },
      { value: "191", label: "commits" },
      { value: "27K", label: "lines of TypeScript" },
      { value: "10+", label: "student researchers using it at Cornell" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Most lab notebooks are just a pile of blank pages. Which protocol a result came from, which paper the protocol borrows from, which reagent quietly ties a dozen experiments together — none of it survives being written down. It ends up split across a notebook, an inventory spreadsheet, an equipment calendar, and whatever search engine happens to be open.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "The agent side, joey AI, runs on 16 tools through a Claude tool-use loop, with real write access to notebook entries, reagent counts, equipment bookings, and to-dos. You can check off a to-do, log inventory usage, or book equipment from the same chat, instead of juggling five separate apps. An AI Digitizer takes a photographed handwritten page or a dropped-in PDF and turns it into a structured entry — title, category, reagents, steps — ready to confirm, not just OCR'd text.",
          "I designed and shipped the first version alone in 30 days: schema, the agent loop, the tool definitions, and the UI, on Postgres and Supabase. Leo Qian, a Cornell CS/ORIE researcher, joined shortly after as co-founder and CTO and now leads engineering.",
        ],
        image: {
          src: "/images/joey-elm/notebook.jpg",
          alt: "Joey ELM notebook entry editor",
          caption: "Notebook entry — structured fields, markdown body",
        },
      },
      {
        heading: "Everything laid out as a graph",
        body: [
          "Joey ELM treats bench work as one connected whole, not a stack of loose pages. Every entry is a typed node you can link, search, and lay out as a graph: Personal Mind for your own work, Lab Mind for what the lab shares. The shape of the research shows up on its own, instead of staying buried in someone's head.",
        ],
        image: {
          src: "/images/joey-elm/mind-graph.jpg",
          alt: "Personal Mind — a force-directed graph of notebook entries and how they link together",
          caption: "Personal Mind — notebook entries laid out as a graph",
        },
      },
      {
        heading: "Honest by design",
        body: [
          "There's one rule joey AI is built around: it only ever speaks from real data. It answers from a lab's own experiments, cites real papers with working DOIs, and never invents a citation. It also never saves anything to the notebook without the researcher approving the draft first.",
        ],
      },
      {
        heading: "Literature, wired into the lab",
        body: [
          "joey AI backs its answers with live search across OpenAlex, Semantic Scholar, and the researcher's own notebook, so a question about prior results pulls from what the lab has actually tried, not just whatever's on the open web. Literature reviews that used to take a few hours now take seconds.",
        ],
        image: {
          src: "/images/joey-elm/literature-search.jpg",
          alt: "joey AI literature search results with relevance scores, citation counts, and working DOIs",
          caption: "Live literature search — real papers, real DOIs",
        },
      },
      {
        heading: "Where it stands",
        body: [
          "Joey ELM is live at joeyelm.com, in daily use by 10+ student researchers at Cornell. It's private by default, scoped to each lab, and has replaced six disconnected tools with one connected workspace.",
        ],
        image: {
          src: "/images/joey-elm/agent-query.jpg",
          alt: "Joey AI answering a plain-language inventory question with a live tool call",
          caption: "joey AI checking live inventory, no app-switching",
        },
      },
    ],
    liveUrl: "https://joeyelm.com",
    heroAlt: "Joey ELM landing page, showing the live lab mind graph",
    heroImage: "/images/joey-elm/hero.jpg",
  },
  {
    slug: "lee-lab",
    number: "03 / 05",
    lab: "Lee Lab",
    role: "Research Assistant",
    location: "Cornell University, Ithaca, NY",
    span: "May 2025 — Present",
    techniques: ["C. elegans", "NGM plate prep", "RNAi", "Lab management"],
    title: "Lee Lab",
    dek: "Running the plate-prep pipeline behind high-throughput C. elegans lifespan studies.",
    hook: "High-throughput lifespan studies live or die on plate quality. If the auxin concentration is off by a little, or a plate gets contaminated, weeks of data go with it. I run that pipeline for the lab, at a scale where consistency has to be a system, not just a habit.",
    sections: [
      {
        heading: "What I do",
        body: [
          "I prepare 300+ NGM plates a week, including custom auxin and RNAi plates, to support the lab's high-throughput C. elegans lifespan and stress-resistance studies.",
          "I also train and manage two undergraduates on plate production, and keep the lab's general stocks — LB media, antibiotics, molecular biology buffers — topped off so experiments never stall waiting on supplies.",
        ],
        image: {
          src: "/images/lee-lab/plate-prep.jpg",
          variant: "photo",
          alt: "Stacks of custom auxin and DMSO-control NGM plates prepared in the biosafety cabinet",
          caption: "Auxin & DMSO-control plates, prepped and stacked",
        },
      },
      {
        heading: "Why it matters",
        body: [
          "Lifespan studies need hundreds of nearly identical plates poured correctly, week after week. Getting that pipeline right — and training others to run it the same way — is what makes the lab's larger experiments possible at all.",
        ],
      },
    ],
    heroAlt: "Fat/lipid-stained C. elegans, imaged for a stress-resistance study",
    heroImage: "/images/lee-lab/fat-staining.jpg",
    heroImageVariant: "figure",
  },
  {
    slug: "roeder-lab",
    number: "04 / 05",
    lab: "Roeder Lab",
    role: "Undergraduate Researcher",
    location: "Cornell University, Ithaca, NY",
    span: "December 2024 — Present",
    techniques: [
      "MATLAB",
      "Biomechanical modeling",
      "Confocal microscopy",
      "Laser ablation",
      "Segmentation",
    ],
    title: "Roeder Lab",
    dek: "A biomechanical model of plant cell growth, validated against live-cell imaging, plus ongoing laser-ablation work on tissue buckling.",
    hook: "Plant cells and animal cells grow completely differently, but there are experimental tricks that turn one into something that behaves like the other. I built a model to ask a simple question about that transformation: does the resulting growth behavior come from the cell's geometry, or from its material properties?",
    sections: [
      {
        heading: "The model",
        body: [
          "I built a MATLAB biomechanical model of plant-to-animal cell transformation, with tunable cell wall thickness, shape, and osmolyte concentration. Using it, I found that geometry drives growth behavior; wall thickness and osmolyte concentration only scale that behavior, they don't change its character.",
          "I validated the model against several large experimental datasets using curve fitting and stochastic modeling, which sharpened its predictions of both stress-strain and osmoregulatory behavior.",
        ],
        image: {
          src: "/images/roeder-lab/model.png",
          alt: "MATLAB model output — deterministic spherical cell volume growth curve alongside stochastic growth simulations with Gaussian noise across multiple paths",
          caption: "Model output, MATLAB",
          variant: "figure",
        },
      },
      {
        heading: "Getting the data to check it against",
        body: [
          "To generate that validation data, I optimized protoplast isolation and growth protocols, then tracked morphology in real time by live-cell confocal microscopy. That work was done in collaboration with the Odde Lab (Minnesota) and the Boudaoud Lab (École Polytechnique), under the NSF URoL:EN grant.",
        ],
        image: {
          src: "/images/roeder-lab/protoplast.gif",
          alt: "Live-cell confocal timelapse of isolated protoplasts, showing spherical morphology and growth over time, scale bar 50 microns",
          caption: "Live confocal timelapse, protoplasts",
          variant: "photo",
        },
      },
      {
        heading: "Current work: laser ablation on Arabidopsis sepals",
        body: [
          "I'm now running laser ablation experiments on Arabidopsis sepals to test whether releasing tissue tension causes the surrounding epidermis to buckle. I image the ablated region by confocal microscopy and quantify the resulting cell shape change through segmentation.",
          "The imaging and segmentation dataset I'm generating is being used by a collaborating lab to build a computational model of the buckling behavior.",
        ],
        image: {
          alt: "Laser ablation on Arabidopsis sepals and segmentation of the resulting cell shape change",
          label: "Laser ablation & segmentation",
        },
      },
    ],
    heroAlt: "Segmented confocal images of Arabidopsis sepals across three developmental stages, cells colored by size to show growth heterogeneity",
    heroImage: "/images/roeder-lab/hero.png",
    heroImageVariant: "photo",
  },
  {
    slug: "blenis-lab",
    number: "05 / 05",
    lab: "Blenis Lab",
    role: "Undergraduate Researcher",
    location: "Weill Cornell Medicine, New York, NY",
    span: "July 2022 — August 2024",
    techniques: [
      "Proteomics",
      "Metabolomics",
      "Gel electrophoresis",
      "3D & 2D tissue culture",
      "CRISPR",
    ],
    title: "Blenis Lab",
    dek: "Two years of independent cancer metabolism research, tracing how prostate cancer cells scale up amino acid uptake under stress, and into androgen signaling.",
    hook: "This was where I learned to run a research question from hypothesis to data, mostly on my own. My independent project asked how prostate cancer cells change their handling of branched-chain amino acids (BCAAs) under the stresses of a real tumor — low oxygen, 3D growth — and found that two of the three BCAAs feed directly into the signaling pathway that drives the cancer's growth.",
    sections: [
      {
        heading: "Hypoxia switches on BCAA metabolism",
        body: [
          "Tumors are hypoxic on the inside, where oxygen can drop to 1–2%, well below the ~21% most cell culture is run at. In two prostate cancer lines, LNCaP and 22Rv1, dropping oxygen from 21% to 2% increased LAT1 (the transporter that imports BCAAs) and BCAT2 (the enzyme that metabolizes them) on Western blot — even as those same hypoxic conditions slightly slowed the cells' own growth rate under the microscope.",
        ],
        image: {
          src: "/images/blenis-lab/fig1-hypoxia.png",
          variant: "figure",
          alt: "Western blot and phase-contrast images showing hypoxia increases LAT1 and BCAT2 in LNCaP and 22Rv1 prostate cancer cells",
          caption: "Fig. 1 — hypoxia promotes BCAA uptake & metabolism",
        },
      },
      {
        heading: "Isoleucine and valine drive androgen signaling",
        body: [
          "Of the three BCAAs, it was isoleucine and valine that specifically increased androgen receptor (AR) and its downstream target PSA in both cell lines — not leucine, the one most commonly studied for its role in cell signaling. Leucine's effect on PSA was comparatively muted. That specificity was the most surprising result of the project. It pointed away from the well-studied leucine/mTOR axis and toward a separate, less-studied mechanism, one we hypothesized could run through propionyl-CoA, a metabolite unique to isoleucine and valine breakdown, though that link is still untested.",
        ],
        image: {
          src: "/images/blenis-lab/fig-ar-psa.png",
          variant: "figure",
          alt: "Western blot showing isoleucine and valine, but not leucine, increase androgen receptor and PSA levels in LNCaP and 22RV1 cells",
          caption: "Isoleucine & valine increase AR and PSA; leucine is muted",
        },
      },
      {
        heading: "The effect holds — and grows — in 3D",
        body: [
          "2D culture flattens cells onto plastic; real tumors don't grow that way. Moving LNCaP and 22Rv1 cells into spheroids and Matrigel domes — culture formats that better mimic an actual tumor's architecture — further increased LAT1 and BCAT2 expression over flat 2D culture, suggesting BCAA dependence is even stronger in a physiologically realistic tumor context.",
          "As an independent project without institutional biostatistics support, I was upfront in my own writeup: these differences are based on blots, not yet quantified with statistics. That's the honest next step before the finding is conclusive — I didn't want to bury it as a footnote.",
        ],
        image: {
          src: "/images/blenis-lab/fig2-3d-culture.png",
          variant: "figure",
          alt: "Western blot and phase-contrast images comparing 2D, spheroid, and Matrigel culture, showing 3D culture increases LAT1 and BCAT2",
          caption: "Fig. 2 — 3D culture enhances BCAA uptake & metabolism",
        },
      },
      {
        heading: "TGF-β and EMT in lung cancer",
        body: [
          "In a second project, I demonstrated experimentally that low-dose TGF-β induces epithelial-to-mesenchymal transition (EMT) in lung cancer cells — a phenotype switch strongly linked to invasiveness and metastasis.",
        ],
      },
      {
        heading: "Technique base",
        body: [
          "Across both projects I built up a broad wet-lab toolkit — proteomics and metabolomics, gel electrophoresis (TCA acid extraction, SDS-PAGE, LI-COR Odyssey and ECL imaging), 2D and 3D tissue culture, CRISPR. It's the technical foundation everything I've done since has built on.",
        ],
      },
    ],
    heroAlt: "Confocal microscopy image of PC3 prostate cancer cells, actin and nuclei stained",
    heroImage: "/images/blenis-lab/pc3-confocal.jpg",
    heroImageVariant: "photo",
    heroCaption: "PC3 prostate cancer cells, confocal · Griersonj5, CC BY-SA 4.0",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
