var RECORDED = [
{
"q":"What's the virtual model? If I unplug the sensors, what does the digital twin still know?",
"team":"Timmy",
"year":null,
"level":"",
"sheet":"Bioreactors",
"kw":"",
"note":""
},
{
"q":"Or do you see areas where you could cut costs or make ease of use better?",
"team":"",
"year":null,
"level":"",
"sheet":"Hardware",
"kw":"",
"note":""
},
{
"q":"Your hardware won Best Hardware — what could commercial lab equipment not do that made you build your own instead?",
"team":"UPenn",
"year":2021,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"unmet need; cost gap; customization; accessibility; open design",
"note":"A hardware project is only convincing if the team can name a specific gap: commercial instruments are often expensive, closed-source, fixed in format, or not built for the assay the team needs. The strongest answer states the exact function missing (throughput, wavelength control, size, price) and shows the custom device fills it, rather than claiming a homemade device is better in general."
},
{
"q":"How did you validate your device against a commercial instrument, and how close were the readings?",
"team":"UPenn",
"year":2021,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"benchmarking; calibration curve; commercial comparison; reproducibility; error quantification",
"note":"Validation means running the same samples on the custom device and a trusted commercial instrument, then comparing with a calibration curve, correlation, and replicate variance. A credible answer reports quantitative agreement and limits (dynamic range, detection limit) and says honestly where the homemade device is worse."
},
{
"q":"What was the single biggest source of noise or error in your hardware, and how did you reduce it?",
"team":"UPenn",
"year":2021,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"signal-to-noise; light leakage; sensor drift; shielding; replicate averaging",
"note":"Typical error sources in biology hardware are stray ambient light, temperature drift, sensor variability, and mechanical misalignment. A strong answer identifies the dominant one with data, then explains the fix (enclosure, shielding, blank subtraction, averaging, recalibration) and shows the improvement was measured."
},
{
"q":"Could another iGEM team with no engineering background rebuild your device from your documentation?",
"team":"UPenn",
"year":2021,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"documentation; bill of materials; reproducibility; open-source; build instructions",
"note":"The Best Hardware criteria reward devices others can reproduce. That needs a full parts list with costs, CAD or wiring files, firmware, assembly steps, and ideally evidence that someone outside the team built it. Gaps in documentation are the most common reason hardware doesn't get reused."
},
{
"q":"How did the hardware iterations change after you started testing with real biological samples?",
"team":"UPenn",
"year":2021,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"design iteration; build-test-learn; real-sample testing; failure modes; engineering cycle",
"note":"Benchtop tests with dyes or controls often hide problems that appear with living cells: evaporation, heat, bubbles, contamination, or cell-density variation. The team should describe at least one concrete redesign driven by failed or noisy biological data, which shows a genuine engineering cycle."
},
{
"q":"What safety considerations did you design into the hardware, given it sits near living cultures and electronics?",
"team":"UPenn",
"year":2021,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"electrical safety; biosafety; containment; light or heat hazards; user protection",
"note":"Hardware near cultures needs electrical isolation from liquids, cleanable surfaces, safe temperatures and light intensities, and containment if used with GMOs. A good answer shows safety was designed in from the start (fuses, enclosed wiring, material choice) and was reviewed with a mentor or biosafety officer."
},
{
"q":"Why build your own bioreactor instead of buying a benchtop fermenter, and what did you give up?",
"team":"NUS_Singapore",
"year":2021,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"cost reduction; customization; open-source; reduced precision; scalability",
"note":"Commercial fermenters can cost thousands of dollars and are built around fixed sensors and software, whereas an open-source bioreactor is cheap, modifiable, and can integrate optogenetic illumination. The trade-off is lower precision, less regulatory-grade control, and more maintenance, so the team should state what performance was verified."
},
{
"q":"How does your hardware deliver light to the yeast, and how do you make sure every cell gets the same dose?",
"team":"NUS_Singapore",
"year":2021,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"LED illumination; light uniformity; mixing; light penetration; intensity calibration",
"note":"Optogenetic control only works if light dose is consistent. As cultures densify, light scatters and cells near the vessel wall receive more than those at the center, so uniform dose depends on LED placement, intensity calibration with a light meter, and good mixing. The team should report measured intensity across the vessel."
},
{
"q":"What sensors and control loops does your bioreactor need to keep a yeast culture healthy?",
"team":"NUS_Singapore",
"year":2021,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"temperature control; pH monitoring; dissolved oxygen; agitation; feedback control",
"note":"Yeast production needs stable temperature, pH, aeration and stirring. A hardware answer names which of these the device measures and actively controls, which are only monitored, and how the feedback loop (for example PID for temperature) was tuned and tested for stability."
},
{
"q":"Contamination ruins a fermentation run — how did you keep your low-cost hardware sterile?",
"team":"NUS_Singapore",
"year":2021,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"sterilization; autoclavable parts; sealed fittings; filtered air; aseptic sampling",
"note":"Low-cost builds often use 3D-printed or hobbyist parts that can't be autoclaved. The team should explain which parts contact the culture, how they are sterilized (autoclave, ethanol, UV), how air is filtered, and what contamination rate they observed over repeated runs."
},
{
"q":"How would someone in a low-resource setting actually build and maintain your bioreactor?",
"team":"NUS_Singapore",
"year":2021,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"bill of materials; local sourcing; assembly guide; maintenance; software accessibility",
"note":"Accessibility means common parts, a clear parts list with price, build instructions, and software that runs on cheap microcontrollers. A strong answer describes who tested the build and what broke, not just that the design is open."
},
{
"q":"Does your bioreactor scale beyond a lab flask, or is it a proof-of-concept?",
"team":"NUS_Singapore",
"year":2021,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"scale-up limits; volume; oxygen transfer; light penetration depth; proof-of-concept",
"note":"Scale-up is hard, especially with light-driven systems, because light penetration drops as volume and cell density grow and oxygen transfer limits yeast growth. An honest answer states the working volume tested and what would have to change (internal illumination, impeller design) for larger vessels."
},
{
"q":"You built a luminometer from a wooden box and cheap components — how did you show it measures light accurately enough for real experiments?",
"team":"INSA_Lyon",
"year":2022,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"low-cost luminometer; light-tight enclosure; calibration; photodetector; benchmark comparison",
"note":"A homemade luminometer needs proof, so the team should compare it against a commercial plate reader on the same luminescent samples, report linearity and detection limit, and show the enclosure blocks stray light. The cheap build is a feature only if the data hold up."
},
{
"q":"Why use a wooden enclosure, and what are the downsides compared with a 3D-printed or metal one?",
"team":"INSA_Lyon",
"year":2022,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"material choice; light-tightness; low cost; durability; cleanability",
"note":"Wood is cheap, easy to cut, and opaque, but it absorbs liquids, is hard to disinfect, and can leak light at joints. A good answer admits that trade-off and describes the sealing, painting, or lining used to make it light-tight and wipeable."
},
{
"q":"What photodetector or sensor did you choose, and why that one over alternatives?",
"team":"INSA_Lyon",
"year":2022,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"photodiode; PMT; sensitivity; dynamic range; cost trade-off",
"note":"Bioluminescence is faint, so sensor choice sets what can be measured. A photomultiplier tube is very sensitive but expensive, while photodiodes or photodiode-amplifier modules are cheap but less sensitive. The team should justify the pick against the signal strength of its reporter."
},
{
"q":"Your project tracked pathogen spread in a host — how did the hardware change what you could measure in the biology?",
"team":"INSA_Lyon",
"year":2022,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"bioluminescence reporter; time-course data; throughput; infection model; quantitative readout",
"note":"Hardware matters most when it enables a measurement the biology needed, such as repeated, quantitative luminescence readings over time instead of a single endpoint. The answer should link the device directly to a result in the project, not treat it as a separate side build."
},
{
"q":"You also wrote analysis software — how do the hardware and software work together, and how is the data processed?",
"team":"INSA_Lyon",
"year":2022,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"data acquisition; microcontroller; background subtraction; analysis pipeline; open-source software",
"note":"A usable instrument needs a pipeline from raw sensor voltage to interpretable numbers: acquisition, noise filtering, blank subtraction, normalization, and plotting. The team should describe each step and say whether the code is documented and shareable."
},
{
"q":"What would you need to change to make your luminometer usable by other iGEM teams or a teaching lab?",
"team":"INSA_Lyon",
"year":2022,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"documentation; standardization; usability; calibration protocol; reproducibility",
"note":"Reuse requires a bill of materials, build guide, calibration protocol, and a way to compare readings across copies of the device. The team should say what a first-time builder would struggle with and what they did to test the instructions."
},
{
"q":"Your hardware moves electromagnetic coils around a plate of cells — why does the coil need to move rather than stay fixed?",
"team":"Cambridge",
"year":2024,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"spatial targeting; coil positioning; multi-well plate; field localization; throughput",
"note":"Magnetic fields fall off quickly with distance, so one fixed coil cannot expose every well equally. Moving the coil lets the system apply a field to specific wells or conditions on one plate, which gives controlled comparisons and higher throughput than fixed coils."
},
{
"q":"How do you know the magnetic field reaching the cells is the strength and pattern you intended?",
"team":"Cambridge",
"year":2024,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"field mapping; Gauss meter; calibration; field uniformity; simulation",
"note":"A magnetogenetic claim depends on knowing the field, so the field should be measured with a magnetometer at the cell plane and compared with simulation. The answer should include field strength, spatial profile, and how it changes with coil current and position."
},
{
"q":"Running current through coils generates heat — how do you separate a magnetic effect from a heating effect on the cells?",
"team":"Cambridge",
"year":2024,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"thermal artifact; temperature control; heat sensing; control experiments; sham coil",
"note":"Heating is the classic confound in magnetogenetics because small temperature changes alone can alter gene expression. The team should show temperature monitoring (the system includes thermal imaging), a no-field or heat-matched control, and data showing the response isn't explained by temperature."
},
{
"q":"Your imaging system captures fluorescence and heat — why combine them, and what does each tell you?",
"team":"Cambridge",
"year":2024,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"fluorescence readout; thermal imaging; simultaneous measurement; gene expression reporter; artifact detection",
"note":"Fluorescence reports gene expression while thermal imaging reports whether the coil is warming the sample. Reading both in the same run lets the team tie any expression change to the field and rule out heat, instead of inferring it from separate experiments."
},
{
"q":"You consulted neuroscience and oncology experts — what hardware requirement did they change?",
"team":"Cambridge",
"year":2024,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"spatial resolution; toxicity limits; stakeholder feedback; field strength; application constraints",
"note":"Expert input turns a lab demo into a tool for real use. The answer should name a specific change, such as targeting precision or keeping field strength and heating within tolerable limits, and show how it altered the coil or control design."
},
{
"q":"Your point-of-care system uses swappable microfluidic chips — what makes that modular design better than a single-purpose device?",
"team":"LCG-Global",
"year":2024,
"level":"Highschool",
"sheet":"Hardware",
"kw":"modular design; swappable chip; multiple biomarkers; standardized interface; reusability",
"note":"A standardized core with a replaceable chip means new biomarkers can be tested by changing the chip and biosensor, not rebuilding the optics, fluidics and heating. That lowers cost and gives future iGEM teams a base to build on, provided the interfaces are well documented."
},
{
"q":"How does your device detect fluorescence from the biosensor, and how sensitive does it need to be for a real sample?",
"team":"LCG-Global",
"year":2024,
"level":"Highschool",
"sheet":"Hardware",
"kw":"fluorescence detection; excitation light; optical filters; limit of detection; clinical range",
"note":"A fluorescence reader needs an excitation source, filters to block it from the detector, and a sensor sensitive enough for the biomarker's clinical concentration. The team should state the detection limit achieved and compare it with the concentrations that matter in patient samples."
},
{
"q":"Why is temperature control built into the device, and how accurate is it?",
"team":"LCG-Global",
"year":2024,
"level":"Highschool",
"sheet":"Hardware",
"kw":"temperature control; biosensor stability; heater; thermistor; reaction consistency",
"note":"Biosensor reactions and fluorescence output depend on temperature, so uncontrolled variation makes results unreliable. A good answer gives the target temperature, the heater and sensor used, and measured stability during a run."
},
{
"q":"As high school students, what was the hardest engineering problem, and how did you get past it?",
"team":"LCG-Global",
"year":2024,
"level":"Highschool",
"sheet":"Hardware",
"kw":"problem solving; mentorship; iterative prototyping; fluid handling; limited resources",
"note":"Judges look for honest account of difficulty and learning. The strongest answer names one concrete obstacle, for example leaks or bubbles in microfluidics or optical alignment, describes the prototypes that failed, and credits specific outside help or testing that solved it."
},
{
"q":"Your emergency blood conversion kit has to work in the field — what hardware constraints does a first responder setting impose?",
"team":"ASU",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"portability; no power or minimal power; ease of use; shelf stability; speed",
"note":"Field use means the device must be rugged, fast, usable by non-experts with minimal training, and stable without refrigeration or lab power. The team should explain which of those it actually tested and which remain open."
},
{
"q":"How would the device confirm that blood-type antibodies have actually been removed before transfusion?",
"team":"ASU",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"antibody detection; verification assay; safety check; sensitivity threshold; false negatives",
"note":"Because a missed antibody could be fatal, a removal step needs a built-in check, such as a rapid assay with a defined sensitivity threshold. The answer should address false negatives explicitly and what safety margin the design provides."
},
{
"q":"The project is patent-protected — how does that fit with iGEM's emphasis on openness, and what do you share?",
"team":"ASU",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"intellectual property; open science; provisional patent; shared documentation; iGEM values",
"note":"iGEM encourages sharing, while patenting protects a path to real-world use. A balanced answer describes what is documented publicly (design principles, parts, protocols), what is protected, and why the team chose that balance."
},
{
"q":"Where do you see your product in the greater market? How will you implement it?",
"team":"GEMS-TAIWAN",
"year":2025,
"level":"Highschool",
"sheet":"Hardware",
"kw":"",
"note":""
},
{
"q":"Have you identified any potential funding sources or investors that are interested in collaborating with you to de-risk the technology o hte point that you can potentially bring it to market?",
"team":"GEMS-TAIWAN",
"year":2025,
"level":"Highschool",
"sheet":"Hardware",
"kw":"",
"note":""
},
{
"q":"How would you improve on the project if you were given funding?",
"team":"GEMS-TAIWAN",
"year":2025,
"level":"Highschool",
"sheet":"Hardware",
"kw":"",
"note":""
},
{
"q":"Or do you see areas where you could cut costs or make ease of use better?",
"team":"SUS-TECH",
"year":2025,
"level":"Overgrad",
"sheet":"Hardware",
"kw":"Good as it is --> Justisfy why",
"note":"Our project use a handware and made to the lyophilized powder. t's just back to our rural area volunteer teaching experiments. So we face this like the areas and not cause the people cannot use our bacterias may not may not caused by the poverty they have. But it's about a long term transport. So we made our product to be a lyophilized powder"
},
{
"q":"How could you scale this?",
"team":"GEMS-TAIWAN",
"year":2024,
"level":"Highschool",
"sheet":"Hardware",
"kw":"",
"note":""
},
{
"q":"May you give a speech on your entrepenuership?",
"team":"GEMS-TAIWAN",
"year":2024,
"level":"Highschool",
"sheet":"Hardware",
"kw":"Multifaceted --> education --> public engagement --> company meetings ",
"note":""
},
{
"q":"May I ask about the cost?",
"team":"GEMS-TAIWAN",
"year":2024,
"level":"Highschool",
"sheet":"Hardware",
"kw":"Says calculations --> Mentions up scaling logistics of multiplying labor and equipment",
"note":""
},
{
"q":"DO you plan to upscale?",
"team":"BNUZH CHINA",
"year":2025,
"level":"Highschool",
"sheet":"Hardware",
"kw":"Explaining experimental costs (which they didn't calculated) --> Talking equipment ",
"note":""
},
{
"q":"How do you plan on collaborating with industry",
"team":"Eindhov",
"year":2024,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"Explaining in person meet ups --> And communication you have settled with them ",
"note":""
},
{
"q":"How scalable is the product and when will it be commercially available?",
"team":"BWYA",
"year":2025,
"level":"Highschool",
"sheet":"Hardware",
"kw":"Patent landscape → proprietary shRNA → FTO strategy → patent application → IP protection",
"note":""
},
{
"q":"How do you manage long-term funding challenges?",
"team":"TSINGLAN",
"year":2025,
"level":"Highschool",
"sheet":"Hardware",
"kw":"Development cycles long → upfront investment huge → milestone-based budgeting → efficient allocation → quarterly risk reviews",
"note":""
},
{
"q":"How did you validate your business model?",
"team":"KULEUVEN",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"KICK Challenge competition → 4-minute pitch → 15-minute Q&A → semi-finals → business coach feedback",
"note":""
},
{
"q":"How scalable is the product and when commercially available?",
"team":"ICT-MUMBAI",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"Currently early development stages → specific timeline TBD → dual market approach → terrestrial + space sectors",
"note":""
},
{
"q":"What is your go-to-market strategy?",
"team":"ICT-MUMBAI",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"Educate masses → raise synthetic biology awareness → vegan positioning → environmentally friendly branding → address GMO perception gap",
"note":""
},
{
"q":"How do you acquire customers?",
"team":"ICT-MUMBAI",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"Social media strategy → influencer collaboration → YouTube explainer videos → NGO partnerships → school engagement",
"note":""
},
{
"q":"How do you fund the transition to space?",
"team":"ICT-MUMBAI",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"Terrestrial sales revenue → reinvest into R&D → space sector entry → phased funding → escalating ambition",
"note":""
},
{
"q":"What unmet market needs do you address?",
"team":"ICJFLS",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"Raw material instability → climate dependency → customization demand → fixed ratios problem → personalized essential oils",
"note":""
},
{
"q":"How do you demonstrate commercialization viability?",
"team":"ICJFLS",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"Comprehensive market research → cost calculations → profit models → NPD iteration path → clear logic + data",
"note":""
},
{
"q":"What is your cost advantage?",
"team":"ICJFLS",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"Single fermentation process → eliminates multiple extractions → reduces component loss → microbial fermentation → avoids climate fluctuations",
"note":""
},
{
"q":"What is your expansion strategy?",
"team":"ICJFLS",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"Citrus-Sandalwood combinations → Jasmine-Ylang pairings → shared metabolic pathways → technology extension → scale across aromatics",
"note":""
},
{
"q":"How do you reduce customer acquisition costs?",
"team":"TSINGHUA",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"Digital pre-sales toolkits → ROI calculators → technical brochures → video walkthroughs → reduce in-person demos",
"note":""
},
{
"q":"How do you maintain service quality at scale?",
"team":"TSINGHUA",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"Standardized implementation protocols → minimize customization → train local partners → regional integrators → reduce central dependency",
"note":""
},
{
"q":"How do you incorporate customer feedback?",
"team":"TSINGHUA",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"Feedback-driven iteration → client operators input → workflow tuning → co-ownership creation → continuous improvement cycles",
"note":""
},
{
"q":"How do you track emerging risks?",
"team":"TSINGHUA",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"Real-time KRI monitoring → cost deviations → production yield → client feedback → early warning signals",
"note":""
},
{
"q":"What are your key stakeholder relationships?",
"team":"SCIENCE-TOKYO",
"year":2025,
"level":"Overgrad",
"sheet":"Hardware",
"kw":"Farmers as users → agricultural cooperatives → government/policy → investors → technology partners",
"note":""
},
{
"q":"How do you support farmer adoption?",
"team":"SCIENCE-TOKYO",
"year":2025,
"level":"Overgrad",
"sheet":"Hardware",
"kw":"Feedback mechanisms → small-scale field tests → pilot projects → agricultural cooperative partnerships → distribution reach",
"note":""
},
{
"q":"What funding and expertise do you need?",
"team":"SCIENCE-TOKYO",
"year":2025,
"level":"Overgrad",
"sheet":"Hardware",
"kw":"Development capital → commercialization funding → business strategy advice → profitability demonstration → regular reporting",
"note":""
},
{
"q":"What public concerns do you address?",
"team":"SCIENCE-TOKYO",
"year":2025,
"level":"Overgrad",
"sheet":"Hardware",
"kw":"Safety concerns → farmer education → trust building → transparent communication → stakeholder dialogue",
"note":""
},
{
"q":"How did you develop your business model?",
"team":"UBC-VANCOUVER",
"year":2025,
"level":"Overgrad",
"sheet":"Hardware",
"kw":"DBTL entrepreneurship cycle → Design: user needs → Build: pitch refinement → Test: iterative reviews → Learn: feedback integration",
"note":""
},
{
"q":"How do you refine your pitch?",
"team":"UBC-VANCOUVER",
"year":2025,
"level":"Overgrad",
"sheet":"Hardware",
"kw":"Stakeholder mapping → messaging testing → competitive positioning → assess market fit → technical feasibility validation",
"note":""
},
{
"q":"How do you validate assumptions?",
"team":"UBC-VANCOUVER",
"year":2025,
"level":"Overgrad",
"sheet":"Hardware",
"kw":"Iterative peer reviews → advisor benchmarking → clarity assessment → impact evaluation → multiple feedback sources",
"note":""
},
{
"q":"How do you improve from feedback?",
"team":"UBC-VANCOUVER",
"year":2025,
"level":"Overgrad",
"sheet":"Hardware",
"kw":"Emotional appeal sharpening → dual-use value emphasis → competitive advantage validation → feedback-informed design",
"note":""
},
{
"q":"How do you understand end-user needs?",
"team":"UBC-VANCOUVER",
"year":2025,
"level":"Overgrad",
"sheet":"Hardware",
"kw":"Expert stakeholder interviews → identify problems (Earth + space) → create clear narrative → validate assumptions → iterate design",
"note":""
},
{
"q":"Why choose a social enterprise and not a conventional business model , and what drove you to make that choice?",
"team":"From Timmy's website",
"year":null,
"level":"",
"sheet":"Hardware",
"kw":"",
"note":""
},
{
"q":"Do you have a strategy for taking this toward a trial or a real application?",
"team":"Peking",
"year":2025,
"level":"Undergrad",
"sheet":"Hardware",
"kw":"salt-affected first; 2.4 year payback; ordinary paddy never; storage stability; field trial needed",
"note":"Our own economics tell us where to start, and they ruled out the market we assumed. On ordinary paddy the system pays back in 64.7 years and never reaches five even at the physical ceiling of efficacy. On salt-affected coastal land the same hardware pays back in 2.4 years. So deployment starts on sa…"
},
{
"q":"How did you quantify your system's minimum production, and the change in output?",
"team":"Munich",
"year":2025,
"level":"Overgrad",
"sheet":"Measurement",
"kw":"never varied dose; upper bound not minimum; dilution series; honest gap; one plate fixes it",
"note":"We did not, and that is a real gap rather than an oversight we can talk around. Our anchor experiment varied salt level and application timing but never varied the amount applied, so 1670 L/ha is a dose that worked, not the smallest dose that works. That makes our figure an upper bound on what is ne…"
},
{
"q":"Do you do any replicates?",
"team":"Munich",
"year":2025,
"level":"Overgrad",
"sheet":"Measurement",
"kw":"n equals one; one assay one day; LOD and LOQ; decorrelation argument; replication needed",
"note":"No, and we flag it rather than bury it. The enzyme activity is a single assay on a single culture on a single day, with no biological or technical replication, and the titre sits above the detection limit but below the quantification limit of our own standard curve. What we can defend without replic…"
},
{
"q":"Why use __ as your model organism?",
"team":"IISER-Kolkata",
"year":2025,
"level":"Highschool",
"sheet":"Experiments",
"kw":"",
"note":""
},
{
"q":"Why use __ as your model organism?",
"team":"XJTLU CHINA",
"year":2025,
"level":"Highschool",
"sheet":"Experiments",
"kw":"",
"note":""
},
{
"q":"Why use __ as your model organism?",
"team":"Estonia Tubi",
"year":2025,
"level":"Highschool",
"sheet":"Experiments",
"kw":"",
"note":""
},
{
"q":"Walk me through your construct design. What does each part do, and why that order?",
"team":"",
"year":null,
"level":"Highschool",
"sheet":"Experiments",
"kw":"",
"note":""
},
{
"q":"Your design says light is the control signal, yet the LPA columns differ by only a few percent (about 2.33 to 2.45 kLux). What does that mean for any induction experiment you could have run with them?",
"team":"",
"year":null,
"level":"",
"sheet":"Experiments",
"kw":"",
"note":""
},
{
"q":"Why is CcaR on a constitutive promoter (Pveg) rather than light-regulated? What goes wrong if CcaR is overexpressed relative to CcaS-m3?",
"team":"",
"year":null,
"level":"",
"sheet":"Experiments",
"kw":"",
"note":""
},
{
"q":"Which strain, 168 or WB800, did you use for expression, and why? Do your results transfer between them?",
"team":"",
"year":null,
"level":"",
"sheet":"Experiments",
"kw":"",
"note":""
},
{
"q":"What experimental evidence supports that claim?",
"team":"Heidelberg",
"year":2025,
"level":"Overgrad",
"sheet":"Experiments",
"kw":"empty vector zero; out-of-sample; frozen model; below LOQ; graded claims",
"note":"We grade our claims by the evidence behind them rather than stating them all at one confidence. Block 1 is validated: 25 years held out, 32 percent below the no-weather trend on the second crop, plus a pre-registered 2026 blind test scored against a hash-frozen model. Block 2 is measured: the empty-…"
},
{
"q":"Do you have any evidence that it would actually work?",
"team":"Heidelberg",
"year":2025,
"level":"Overgrad",
"sheet":"Experiments",
"kw":"Arabidopsis protection; empty vector control; rice untested; literature transfer; honest gap",
"note":"Partly, and the gap is specific. We have evidence that the enzyme protects plants under salinity: in experiment #9 treated plates recovered the full salt-induced fresh-weight loss, and the empty-vector control rules out the growth medium as the cause. What we do not have is evidence in rice. Our ric…"
},
{
"q":"If you could run a few more experiments to validate your computational approach, which would you run first?",
"team":"DTU-Denmark",
"year":2025,
"level":"Overgrad",
"sheet":"Experiments",
"kw":"lifetime 10.5x; plate area 3x; dilution series; ranked not listed; closable fast",
"note":"Ranked by effect on the answer. First, spray lifetime on a leaf, currently assumed at two days and unmeasured, which alone moves the seasonal volume by a factor of 10.5: spray, then sample at 1, 2, 4, 8 and 15 days. Second, the treated plate area, never recorded, which moves every figure threefold a…"
},
{
"q":"Which condition would you start with when you test next: pressure, temperature, pH or salt?",
"team":"AIS-China",
"year":2025,
"level":"Highschool",
"sheet":"Experiments",
"kw":"pH first; apoplast 5.5 to 6.5; optimum 8.5; could be fatal; then persistence",
"note":"pH, and not because it is convenient but because it could kill the product. ACC deaminase has an optimum near pH 8.5 and loses activity below 7.0, while the leaf apoplast we are targeting sits around 5.5 to 6.5. Our modelled derating suggests the enzyme retains only a few percent of assay activity t…"
},
{
"q":"Which do you think is most critical to test first?",
"team":"AIS-China",
"year":2025,
"level":"Highschool",
"sheet":"Experiments",
"kw":"pH first; apoplast 5.5 to 6.5; optimum 8.5; could be fatal; then persistence",
"note":"pH, because it is the one that could invalidate the product rather than merely change a number. ACC deaminase has an optimum near pH 8.5 and loses activity below 7.0, while the leaf apoplast we target sits around 5.5 to 6.5. Our modelled derating suggests only a few percent of assay activity survive…"
},
{
"q":"Hear more about the models that you made and how did it help carry out the experiemtal work?",
"team":"GEMS Taiwan",
"year":2025,
"level":"Undergrad",
"sheet":"Model",
"kw":"Visualizing structure -> Predicting Optimal Condition",
"note":"We  first used pymol to do molecular modeling to carry out docking and visualization of structure, helping develop our variants. We also used RSM to predict the optimal temperatures and pH of the variants. We didn't advance the kinematics modeling into experiemnts, it was still helpful to understand the degredation process. "
},
{
"q":"Why did you choose to go for the structural (type of) modeling of protein considering its a hard process?",
"team":"Great Bay SCIE",
"year":2025,
"level":"Highschool",
"sheet":"Model",
"kw":"Experts advise, enzyme performance, important",
"note":"At the start we heard first hand from a professor that this was the shining point of our project and we got to know this from the first hand. Enzymes are the core of this project and we want them to perform well to kill mold. "
},
{
"q":"Does that mean the enzymes you found in literature or perhaps the lab were not enough for your project in terms of activity and production levels?",
"team":"Great Bay SCIE",
"year":2025,
"level":"Highschool",
"sheet":"Model",
"kw":"Optimal Conditions (room temp), PRCHIA more soluble expression ",
"note":"We initially wanted to improve our enzyme candidates as their conditions are mostly set around 50-60 degrees celcius. We wanted to optimize it so it can function well at room temperature and also pH value. This was unsuccessful though as it was almost impossible to change the optimal conditions. However, the PRCHIA was able to increase its soluble expression, we initially targetted to improve the enzyme candidates that being our goal. "
},
{
"q":"Did you find any correlation between the protein mutations/modeling predictions and real testing activity or yield?",
"team":"Great Bay SCIE",
"year":2025,
"level":"Highschool",
"sheet":"Model",
"kw":"",
"note":"Yes, the SASA (Solvent Accessible Surface Area) score showed a positive correlation with soluble protein yield, validating the predictive utility of the model."
},
{
"q":"Why is Casper faster at designing RPA primers and sgRNAs than existing tools like Prime Sherlock?",
"team":"Lambert",
"year":2025,
"level":"Highschool",
"sheet":"Model",
"kw":"",
"note":"Casper utilizes a top-down computational pipeline. Low-overhead sequence criteria are evaluated first to filter candidate pools before running computationally intensive algorithms (such as ViennaRNA secondary structure prediction)."
},
{
"q":"Why was Casper tested on only one target gene construct?",
"team":"Lambert",
"year":2025,
"level":"Highschool",
"sheet":"Model",
"kw":"",
"note":"Initial testing focused on the internal Lyme construct due to time limits. However, the underlying algorithm is target-agnostic and is currently undergoing external testing by collaborators at ETH Zurich."
},
{
"q":"If you had like more time or more funding whatsoever, what kind of movements or improvements you could do for [Kohera-Tune]?\"",
"team":"McGill",
"year":2025,
"level":"Undergrad",
"sheet":"Model",
"kw":"",
"note":""
},
{
"q":"Do you do everything in silico first, and then the lab follows?",
"team":"Heidelberg",
"year":2025,
"level":"Overgrad",
"sheet":"Model",
"kw":"both directions; control added; stop Arabidopsis; forecast not reactive; efficacy ceiling",
"note":"It runs in both directions, and we can name instances each way. The lab constrained the model: the empty-vector control was run because the model could not otherwise attribute the activity, and it closed that gap at zero. The model then redirected the lab: working the payback backwards showed experi…"
},
{
"q":"How closely did your wet-lab results match your in silico predictions?",
"team":"DTU-Denmark",
"year":2025,
"level":"Overgrad",
"sheet":"Model",
"kw":"benchmarks reproduced; verification not validation; no field trial; honest gap; blind test",
"note":"We separate verification from validation, and we are explicit that Block 3 has only the first. Verification: our pipeline reproduces its three benchmark seasons exactly, 2008 to 17 applications, 2023 to 12 and 2024 to zero, and passes eleven internal consistency checks. Validation against reality ex…"
},
{
"q":"Can you give a concrete example of how your experiments improved your model, or your model improved your experiments?",
"team":"DTU-Denmark",
"year":2025,
"level":"Overgrad",
"sheet":"Model",
"kw":"46 percent calibration error; dose never varied; three missing fields; model changed lab; lab changed model",
"note":"Two concrete examples. The model improved the data: re-deriving our standard curve from pipetted volumes rather than tube labels revealed the concentrations had been computed against 110 microlitres when the standard was actually 160.6, so every derived activity was 46 percent too high. We corrected…"
},
{
"q":"How do you characterise and validate the predictive accuracy of your model?",
"team":"TAU-Israel",
"year":2025,
"level":"Overgrad",
"sheet":"Model",
"kw":"trend baseline; 32 percent reduction; fourfold bias; frozen hash; stated weaknesses",
"note":"Against an explicit no-skill baseline, which is each county's own yield trend with no weather in it at all. Under the strictest out-of-sample test we cut error 32 percent below that trend on the second crop and 8 percent on the first, with most of the gain in bad seasons, which is where it matters. …"
},
{
"q":"How do you validate the predictive accuracy?",
"team":"TAU-Israel",
"year":2025,
"level":"Overgrad",
"sheet":"Model",
"kw":"held out years; beats trend; pre-registered; partial blind test; weak at ranking",
"note":"Short version: by predicting years the model never saw, and comparing against the trend baseline rather than against nothing. 32 percent error reduction on the second crop out-of-sample, and a pre-registered 2026 test where the model was hash-frozen before any yield was published. Four of sixteen co…"
},
{
"q":"Did you consider any other modelling approaches, for example structure-based ones?",
"team":"Toronto",
"year":2025,
"level":"Overgrad",
"sheet":"Model",
"kw":"32767 combinations; three selection tests; permutation; rejected heat; negative result",
"note":"Yes, exhaustively in Block 1. We fitted all 32,767 combinations of 15 candidate stress terms and scored each on years it had not seen, then judged every candidate three ways: average change in out-of-sample error, the share of combinations in which it helped, and a permutation test. That process rej…"
},
{
"q":"Could you have reached the same biological insight with a simpler or faster model?",
"team":"SUSTech-Bio",
"year":2025,
"level":"Undergrad",
"sheet":"Model",
"kw":"simplest that answers; statistics not ODE; four arithmetic steps; complexity justified; not built what we cannot support",
"note":"We think so in places, and we chose the simplest tool that answered each question. Block 1 is deliberately statistical rather than mechanistic, because the question is which weather costs yield and 25 years of harvests answer that directly without a physiological model we could not validate. Block 3…"
},
{
"q":"Could you have used a simpler model on your wet-lab data instead of a full dynamics model?",
"team":"SUSTech-Bio",
"year":2025,
"level":"Undergrad",
"sheet":"Model",
"kw":"wet lab is one plate; no dynamics built; arithmetic plus one model; band not point; judge pressed twice",
"note":"From our wet-lab data specifically, the honest answer is that a complex model would not have been justified, and we did not build one. We have one plate experiment with one dose, so the chain from it is deliberately arithmetic: a measured volume over an area, scaled to a hectare, with a single model…"
},
{
"q":"How does your model compare to industry standards in compute cost and runtime?",
"team":"NJU-China",
"year":2025,
"level":"Undergrad",
"sheet":"Model",
"kw":"laptop scale; seconds not hours; no training; deliberately cheap; reproducible anywhere",
"note":"Our whole pipeline runs on a laptop in seconds, and that is deliberate rather than a limitation. Block 1's selection step was the only heavy part, fitting all 32,767 combinations, and it is a one-off. The production model is a closed-form equation per crop, so there is no training loop and nothing t…"
},
{
"q":"Is your model complete enough for someone else to use, and has anyone outside your team used it?",
"team":"NJU-China",
"year":2025,
"level":"Undergrad",
"sheet":"Model",
"kw":"farmer calculator; land size input; 17 counties; extensible; nobody external yet",
"note":"A farmer-facing calculator is live: enter a field size in fen, jia or hectares and a stress level, and it returns litres per application, applications per season and the seasonal total. The science does not change with field size, so the same per-hectare rate serves a smallholder and a ten-hectare f…"
},
{
"q":"Did you estimate how muhc of your product is actually needed, and how much would be enough to be effective?",
"team":"Peking",
"year":2025,
"level":"Undergrad",
"sheet":"Model",
"kw":"measured anchor; canopy correction; scenario not dose; minimum untested; upper bound",
"note":"Yes, and we are careful about what that estimate is. Our anchor is measured: experiment #9 applied 1.67 mL of supernatant to a plate, which scales to 1670 L/ha. A modelled canopy correction of 2.44 takes that to about 4082 L per hectare per application. But that is a scenario, not a validated rice d…"
},
{
"q":"Can you explain exactly what your simulation does, and what properties of the system it models?",
"team":"Peking",
"year":2025,
"level":"Undergrad",
"sheet":"Model",
"kw":"three blocks; stress index; titre; litres per hectare; sequential pipeline",
"note":"Our model is three sequential blocks, not one simulation. Block 1 is statistical: it regresses 25 years of Taiwanese county rice yields on weather terms to produce a dekad-by-dekad stress index, and separates total loss from the share ACC deaminase could address. Block 2 is mechanistic: a Hill trans…"
},
{
"q":"Did you publish the code you used on your wiki",
"team":"Peking",
"year":2025,
"level":"Undergrad",
"sheet":"Model",
"kw":"public repo; numbered scripts; one data file; eleven checks; start here",
"note":"Yes. The pipeline is a numbered sequence of scripts run in order, each writing a named output, and every figure on the model pages is generated from one data file rather than typed in. Result 1 is produced by a single script that emits result1_data.json and runs eleven internal consistency checks, a…"
},
{
"q":"Is the team GitHub the place where you actually put the scripts you ran?",
"team":"Peking",
"year":2025,
"level":"Undergrad",
"sheet":"Model",
"kw":"same repo; numbered order; data files included; checks printed; no hidden steps",
"note":"Yes, it is the same repository, and the scripts are numbered in run order so the chain can be reproduced end to end rather than inspected piecemeal. The intermediate data files are included, not just the final figures, so anyone can re-run from the stress table through to the per-hectare volumes. Wh…"
},
{
"q":"Were the literature values you used measured on a comparable system, or on a simplified one?",
"team":"IZJU-China",
"year":2025,
"level":"Undergrad",
"sheet":"Model",
"kw":"light not spray; different species; conventional not sourced; stated band; replace with measurement",
"note":"This is the right question to ask us, and the honest answer is that several of our borrowed values were measured on a different system. Our canopy extinction coefficient k comes from studies of light interception, but light arrives diffuse from every direction while spray droplets carry momentum and…"
},
{
"q":"Were those values derived from a simplified model system rather than the real one?",
"team":"IZJU-China",
"year":2025,
"level":"Undergrad",
"sheet":"Model",
"kw":"simplified geometry; plate is sparse; rice is dense; invariants agree; validity check",
"note":"Yes, our transfer rests on a simplified geometry and we can say where it breaks. The plate is modelled as a sparse canopy with a leaf area index of 0.115 and rice as a dense one at 4.5, and the correction is the ratio of dose per unit leaf between them. The reassurance we can offer is that two indep…"
},
{
"q":"How do you ensure the parameters throughout your model are correct?",
"team":"PekingHSC",
"year":2025,
"level":"Undergrad",
"sheet":"Model",
"kw":"provenance tags; measured literature assumed; swept ranges; one data file; eleven checks",
"note":"We do not claim every parameter is correct. We tag each one by where it came from, measured by us, taken from literature, or chosen by us, and we sweep the chosen ones across their plausible range rather than reporting a point. For example the spray lifetime is assumed at two days, so we carry 1, 2,…"
},
{
"q":"Validation is hard within iGEM, but did you look into how you could validate your simulations?",
"team":"PekingHSC",
"year":2025,
"level":"Undergrad",
"sheet":"Model",
"kw":"verification vs validation; benchmarks reproduce; field trial absent; blind test; named next experiment",
"note":"We separate the two and are explicit that only one is done. Verification, meaning the code computes what we intended, is complete: the pipeline reproduces its three benchmark seasons exactly and passes eleven checks. Validation against reality exists only in Block 1, where the index was tested on ye…"
},
{
"q":"Did any experimental results feed back into your model?",
"team":"PekingHSC",
"year":2025,
"level":"Undergrad",
"sheet":"Model",
"kw":"empty vector; 46 percent correction; stop Arabidopsis; forecast not reactive; both directions",
"note":"Yes, in both directions, and we can name instances. The lab fed the model: the empty-vector control was run because the model could not otherwise attribute the enzyme activity, and it came back at exactly zero, which closed that gap. Re-deriving the standard curve from pipetted volumes revealed our …"
},
{
"q":"Why did you choose those 3 protectants?",
"team":"",
"year":null,
"level":"",
"sheet":"Model",
"kw":"",
"note":""
},
{
"q":"Can you give me one of your best examples of feedback from outreach that has helped change your project, direction, or learn something you didn't know?",
"team":"Lambert",
"year":2025,
"level":"Highschool",
"sheet":"IHP",
"kw":"Problem, Interview with doctor, Pivot ",
"note":"Initially we were not able to determine if the Borrelia burgdorferi was present in our body. Through a meeting with Johns Hopkins doctor Baumgart we got redirected to target surface proteins which started our whole project. "
},
{
"q":"How did your educational outreach maintain a two-way dialogue and feed back into your project design?",
"team":"Great Bay",
"year":2025,
"level":"Highschool",
"sheet":"IHP",
"kw":"",
"note":"An advice box in their iGEM club allowed students to submit questions (e.g., requesting comparisons between yeast and E. coli editing protocols), which shaped subsequent lesson topics. Interactive tools like real-time feedback cards, games, and post-activity surveys across age groups were used to continuously refine their communication strategies."
},
{
"q":"What key challenges exist for the CRISPRi therapeutic, and how did Human Practices inform solutions?",
"team":"Lambert",
"year":2025,
"level":"Highschool",
"sheet":"IHP",
"kw":"",
"note":"Main hurdles include testing in Borrelia directly (restricted by BSL-1 lab limitations) and implementing lipid nanoparticle (LNP) delivery vectors. Feedback from Georgia Tech experts (Dr. Kwong and Dr. Casas-Ferrer) was used to build LNP protocols for future validation."
},
{
"q":"How is the educational course reaching women in Afghanistan given internet access restrictions?",
"team":"Lambert",
"year":2025,
"level":"Highschool",
"sheet":"IHP",
"kw":"",
"note":"he program operates through the established \"Flowers for the Future\" network. For students experiencing internet disruptions, offline/asynchronous platforms (such as Moodle) are being deploye"
},
{
"q":"Regarding the sign language education initiative for deaf individuals, what did you learn and find enriching during development?",
"team":"HG Tokyo",
"year":2025,
"level":"Highschool",
"sheet":"IHP",
"kw":"",
"note":"During a \"deaf lab\" exercise (wearing noise-canceling headphones playing loud music), the team realized standard lab environments depend heavily on verbal communication. To solve this, they created specialized sign language gestures and captioned instructional videos for synthetic biology terms (e.g., E. coli, transcription). The material was subsequently used at a school in Hong Kong to teach deaf students."
},
{
"q":"Name the three most outstanding educational projects your team executed.",
"team":"HG Tokyo",
"year":2025,
"level":"Highschool",
"sheet":"IHP",
"kw":"",
"note":"Hands-on Lab Workshop: An E. coli GFP transformation workshop for Japanese students who rarely get hands-on syn-bio laboratory experience.    2. Imperial College London (ICL) Webinar: Their largest virtual event, where over 80% of surveyed participants reported a deeper understanding of synthetic biology.  3. Wikipedia Page Editing for Jabara: Documenting Jabara fruit properties to support regional economic revitalization for Kitayama village in Wakayama Prefecture."
},
{
"q":"What challenges and considerations arose when designing educational materials for diverse target audiences?",
"team":"HG Tokyo",
"year":2025,
"level":"Highschool",
"sheet":"IHP",
"kw":"",
"note":"When communicating with the general public at interactive booths, complex concepts were simplified to gather feedback on public safety perception and acceptance. For the deaf education project, signs were designed around foundational visual concepts (e.g., a \"building block\" hand motion for synthetic biology), allowing the gestures to double as effective visual aids for both deaf and hearing audiences."
},
{
"q":"What expert judgement or validation does your tool have from people in the field?",
"team":"HPi-Potsdam",
"year":2025,
"level":"Overgrad",
"sheet":"IHP",
"kw":"official yield data; farm-gate price; growth stage calendars; farmer units; no grower yet",
"note":"Our inputs are institutional rather than invented: county rice yields published by the Agriculture and Food Agency since 2001, the official 2026 farm-gate price for the money conversion, and Taiwanese growth-stage calendars for which dekad the crop is in. The outputs are in units a farmer actually u…"
},
{
"q":"Which stakeholders would you go to in order to prove your predictions are right?",
"team":"HPi-Potsdam",
"year":2025,
"level":"Overgrad",
"sheet":"IHP",
"kw":"extension agronomists; irrigation association; salt-affected growers; agency statisticians; field trial partner",
"note":"Three groups, each testing a different claim. Extension agronomists and the local irrigation association can check whether our application calendar matches when they would actually act, which tests Block 1's timing. Growers on salt-affected coastal land are the market our own payback analysis points…"
},
{
"q":"You built a custom open-source bioreactor and an optogenetically controlled yeast chassis instead of using a standard inducible promoter — walk us through why light control was worth the extra engineering.",
"team":"NUS_Singapore",
"year":2021,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"Light-inducible control; no chemical inducer cost; tight temporal tuning; open-source bioreactor; scalable low-cost production",
"note":"PRYSM used blue-light-controlled gene circuits in yeast to drive production of Human Beta Defensin, an antimicrobial peptide meant to work as a bio-bactericide/fungicide on farms. Optogenetic control avoids the recurring cost and leaky expression of chemical inducers like IPTG, and light can be switched on/off instantly and non-invasively, giving finer temporal control over when the peptide is made. Pairing this with a low-cost, open-source bioreactor design was meant to make the whole production platform realistic for smallholder or field-level deployment, not just a lab demo."
},
{
"q":"Perfumery already uses natural extraction and chemical synthesis — what does a synthetic cyanobacteria/yeast consortium give you that those two methods can't?",
"team":"Toulouse_INSA-UPS",
"year":2021,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"Mute flower; cyanobacteria-yeast consortium; ionone production; atmospheric CO2 feedstock; sustainable fragrance",
"note":"Elixio targeted 'mute flowers' like violet, whose scent molecules (ionones) can't be extracted directly because the flower itself produces almost none — historically these scents were reconstructed by chemical synthesis instead. The team built a synthetic microbial consortium pairing engineered cyanobacteria (fixing atmospheric CO2) with engineered yeast (converting that fixed carbon into ionones), so the whole production chain starts from CO2 rather than petrochemical feedstocks. They demonstrated real ionone production and validated the violet-like scent, positioning it as a sustainable alternative pathway the fragrance industry had shown interest in."
},
{
"q":"Decursin is currently only available from a slow-growing, geographically limited root crop — how does engineering bacteria to make it actually solve the supply problem, and not just relocate it?",
"team":"Technion-Israel",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"Angelica gigas root; apoptosis-prevention compound; bacterial bioproduction; chemo-induced hair loss; scalable low-cost synthesis",
"note":"Decursin, extracted from the rare Angelica gigas Nakai root grown almost exclusively in Korea and China, helps prevent apoptosis in hair follicle cells and is a candidate ingredient against chemotherapy-induced hair loss. Because the plant yields very little decursin and is slow to cultivate, natural extraction is expensive and hard to scale. Technion's team engineered bacterial enzyme pathways to biosynthesize decursin directly, aiming for a cheaper, faster, more scalable and more environmentally sustainable production route that could feed into shampoos, creams, and other haircare formulations."
},
{
"q":"You're proposing a bacterial aerogel as a building insulation material — what has to be true about its performance and cost for it to actually compete with foam or mineral wool insulation?",
"team":"EPFL",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"Hydrophobic E. coli aerogel; thermal insulation; biodegradable; sustainable construction material; life-cycle waste reduction",
"note":"HESTIA (Hydrophobic E.coli-based Sustainable Thermally Insulative Aerogel) is a synthetic-biology-derived, modular insulation material engineered to be both high-performance and fully biodegradable, aimed at cutting the energy use and end-of-life waste associated with conventional petrochemical insulation foams. The 'hydrophobic' engineering matters because most bio-based materials absorb moisture and lose insulating performance over time; making the E. coli-derived matrix water-resistant was central to making it a credible substitute rather than just a proof of concept."
},
{
"q":"You combined reduced graphene oxide with silk proteins for a nerve graft — what's the biomanufacturing challenge in getting a biological system to produce a composite with a non-biological material in it?",
"team":"Exeter",
"year":2022,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"Reduced graphene oxide; silk biocomposite; nerve regeneration graft; conductivity plus biocompatibility; peripheral nerve injury",
"note":"BionExe combined highly conductive reduced graphene oxide (rGO) with strong, biocompatible silk proteins to create an implantable biocomposite graft intended to speed up and improve the extent of nerve regeneration after peripheral nerve injuries. The biomanufacturing challenge was producing a silk protein scaffold engineered to interface well with the rGO component, balancing electrical conductivity (which nerve tissue needs for signal propagation) against biocompatibility and mechanical strength so the graft would not be rejected or degrade too quickly in vivo."
},
{
"q":"Verbenone can already be made by plant extraction or chemical synthesis — what made a biomanufacturing chassis the better investment for a forest-conservation compound like this?",
"team":"WWU_Muenster",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"Monoterpenoid platform; verbenone production; bark beetle deterrent; adaptable chassis; forest conservation application",
"note":"MonChassis is an adaptable microbial platform for producing monoterpenoids — a broad class of biomolecules with uses across healthcare, agriculture, and consumer products — starting with verbenone, a compound used to repel bark beetles and protect forests from beetle infestations. Plant extraction of monoterpenoids is often low-yield and seasonal, and chemical synthesis can be costly or environmentally harsh; the team's pitch was that a single adaptable chassis could be reconfigured to produce different monoterpenoids on demand, making the platform useful well beyond just verbenone."
},
{
"q":"You're using engineered Pseudomonas fluorescens to protect stone cultural relics — how do you make sure the mineral film the bacteria produce actually matches the natural calcium oxalate patina instead of just coating over it?",
"team":"CAU_China",
"year":2022,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"Pseudomonas fluorescens; calcium oxalate film; bio-mineralization; cultural relic conservation; biomimetic protective coating",
"note":"This team engineered Pseudomonas fluorescens to drive Bacteria-Induced Mineral Precipitation, replicating the natural calcium oxalate protective film that forms on some stone surfaces over centuries and is prized by conservators because it protects relics without altering their appearance. Rather than applying an external synthetic sealant (which conservators often avoid because it can trap moisture or discolor stone), the team's approach lets engineered bacteria biomanufacture a mineral layer that mimics the real, naturally protective patina."
},
{
"q":"You're using E. coli to biomanufacture metal nanoparticles for photothermal cancer therapy — what's the advantage of a biological production route over standard chemical nanoparticle synthesis here?",
"team":"Leiden",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"E. coli-produced metal nanoparticles; photothermal therapy; head and neck cancer; biomanufacturing platform; foundation for future teams",
"note":"     "
},
{
"q":"PHA bioplastic already exists — you say it's expensive to produce. What specifically did your project change about that production process, rather than just using PHA as-is?",
"team":"Leiden",
"year":2023,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"Polyhydroxyalkanoate (PHA); bacterial biodegradable plastic; microplastic reduction; agricultural fertilizer capsules; production cost",
"note":"PHAse Out targeted microplastics that enter food via slow-release fertilizer capsules, proposing bacterially-produced PHA (polyhydroxyalkanoate) — a plastic bacteria naturally make as an energy store, fully biodegradable in about three months — as a replacement material. PHA already existed as a concept, but is expensive to produce at scale; the team's engineering work focused on the bacterial production process itself to make PHA more practical and cost-competitive for agricultural applications specifically."
},
{
"q":"You built three separate bacterial cellulose modification systems in one project — why not focus on just one application instead of splitting effort three ways?",
"team":"Vilnius-Lithuania",
"year":2023,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"Bacterial cellulose (Komagataeibacter xylinus); chitin/chitosan copolymer; in vivo staining; PHB-cellulose composite; bio-based material versatility",
"note":"Exullose engineered Komagataeibacter xylinus to produce enhanced bacterial cellulose in three distinct ways: a copolymer with chitin or chitosan (extending biomedical applicability), a system that stains the cellulose as it's produced (simplifying downstream processing), and a composite with polyhydroxybutyrate for plastic-like biodegradable properties. The team's rationale was demonstrating that a single bacterial cellulose chassis could be a versatile, modular biomanufacturing platform for multiple industrial material needs at once, rather than a narrow one-off product."
},
{
"q":"Your team was nominated for Best Biomanufacturing Project two years running (2023 and the 2025 win) — what changed in your production system between those two projects?",
"team":"BNU-China",
"year":2023,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"Repeat Best Biomanufacturing nominee; undergraduate-stage part collection; iterative platform development; China-only nominee that year",
"note":"In 2023, BNU-China was the only mainland Chinese team nominated for Best Biomanufacturing Project, and separately won the Best New Basic Part award at the undergraduate stage — a first for the team. This built organizational and technical groundwork (part design, characterization workflow, mentorship pipeline) that the team then carried into their 2025 project, V-CHARGEs, which went on to win Best Biomanufacturing Project outright."
},
{
"q":"You picked up four separate nominee awards this year — Best Biomanufacturing, Best New Basic Part, Best Measurement, and Best Hardware. Which of those four best reflects the actual bottleneck you had to solve in the wet lab?",
"team":"HiZJU-China",
"year":2024,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"Multi-category nominee; Zhejiang University chemical/biological engineering; fourth iGEM participation; historic team result",
"note":"HiZJU-China, made up primarily of undergraduates from Zhejiang University's College of Chemical and Biological Engineering, earned a Gold Medal and four nominee awards (Best Biomanufacturing Project, Best New Basic Part, Best Measurement, Best Hardware) in their fourth year competing since the team's 2021 founding — the team's best result to date."
},
{
"q":"You're using biomanufactured organoids to model sepsis instead of animal models — what does the organoid actually need to reproduce accurately for that substitution to be scientifically valid?",
"team":"University-of-Florida",
"year":2024,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"Induced pluripotent stem cells (iPSCs); bone marrow organoid; sepsis modeling; animal-model replacement; computational growth model",
"note":"The UF team built on their 2023 silver-medal project to reprogram induced pluripotent stem cells (iPSCs) into an organoid simulating human bone marrow, aimed at studying sepsis — the body's dysregulated, potentially fatal response to infection. Because organoids can substitute for animal models in preclinical studies, the team also built a computational model of cell population growth and behavior within the simulated marrow, arguing that a validated organoid plus growth model gives more human-relevant, and more ethical, preclinical data than animal testing alone."
},
{
"q":"V-CHARGEs re-generates ATP using a VLP-coupled enzyme system — why does the cell's own ATP supply become the bottleneck in the first place, and how does coupling to a virus-like particle solve that?",
"team":"BNU-China",
"year":2025,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"VLP-coupled enzyme system; ATP regeneration; cofactor recycling; biomanufacturing cost reduction; enzymatic production efficiency",
"note":"V-CHARGEs (VLP-Coupled High-efficiency ATP Re-Generating Enzyme system) tackles a common bottleneck in cell-based and cell-free biomanufacturing: many valuable bioproduction reactions consume ATP faster than the host cell or system can regenerate it, capping yield and raising cost. By coupling an ATP-regenerating enzyme system to a virus-like particle (VLP) scaffold, the team aimed to concentrate and stabilize the regeneration machinery for higher, more sustained ATP turnover, directly improving the efficiency of whatever downstream biomanufacturing process depends on it. This won Best Biomanufacturing Project in 2025, plus nominee awards for Best Part Collection and Best Education."
},
{
"q":"You're proposing biological production of UV filters as a 'reef-safe' alternative — what makes a chemically synthesized UV filter unsafe for reefs in the first place, and how does a biomanufactured version avoid that?",
"team":"Goethe-Frankfurt",
"year":2025,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"Reef-safe UV filters; sustainable natural-compound production; coral bleaching; sunscreen chemical replacement; biosynthesis pathway",
"note":"SOLAR (Save Our Lives and Reefs) targeted the sustainable production of natural sunscreen compounds meant to protect human skin from UV damage while avoiding the coral-reef toxicity associated with common synthetic UV filters like oxybenzone, which have been linked to coral bleaching. The team's synthetic biology approach centered on producing these UV-filtering compounds biologically, aiming for a production route that's both scalable for cosmetic use and free of the reef-damaging byproducts tied to conventional chemical synthesis."
},
{
"q":"Human Beta Defensin is naturally a human immune peptide — what's the risk of the yeast cells being harmed by the very peptide they're producing, and how would you address it?",
"team":"NUS_Singapore",
"year":2021,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"host self-toxicity; peptide secretion; inducible expression timing; producer strain viability; downstream purification",
"note":"A known risk in antimicrobial peptide bioproduction is that the peptide can damage the membrane of the very cell making it, since antimicrobial peptides are often broadly membrane-disruptive rather than pathogen-specific. PRYSM's light-inducible system lets the team delay peptide expression until the yeast culture has reached healthy biomass, limiting the window of self-exposure, and secreting the peptide out of the cell rather than accumulating it internally would further reduce toxicity to the producer strain."
},
{
"q":"Why target farm use specifically instead of a clinical antimicrobial application, given Human Beta Defensin's immune role in humans?",
"team":"NUS_Singapore",
"year":2021,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"agricultural application; cost sensitivity; regulatory pathway; farm-scale demand; non-clinical deployment",
"note":"Clinical antimicrobial peptide products face a long, expensive regulatory pathway before reaching patients, while agricultural biopesticide approval, though still regulated, is typically faster and cheaper to bring to market. Framing PRYSM as a farm-use bio-bactericide let the team target a real, cost-sensitive market where a lower-cost, locally producible alternative to chemical pesticides has clear demand, without needing to clear the much higher bar required for a human therapeutic."
},
{
"q":"What would you need to validate before a farmer could actually use this in the field, beyond what you showed in the lab?",
"team":"NUS_Singapore",
"year":2021,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"field trial validation; environmental persistence; non-target organism safety; shelf stability; regulatory approval",
"note":"Before field deployment, the team would need field trials showing the peptide actually suppresses target pathogens on real crops, data on how long it persists and whether it affects non-target soil organisms, shelf-stability testing since farms can't always refrigerate inputs, and movement through whatever biopesticide regulatory process applies in the target country."
},
{
"q":"Your consortium needs both engineered cyanobacteria and engineered yeast to work together — what happens if one population outgrows or outcompetes the other?",
"team":"Toulouse_INSA-UPS",
"year":2021,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"co-culture stability; population balance; metabolic cross-feeding; consortium engineering; growth rate mismatch",
"note":"Co-culturing two different engineered organisms is risky because they often have different growth rates and nutrient needs, so one population can outcompete the other over time, destabilizing production. A synthetic consortium like this typically needs metabolic cross-feeding or growth-rate matching designed in — for example, the cyanobacteria's fixed carbon becoming the yeast's limiting nutrient — so neither partner can run away from the other."
},
{
"q":"How do you know the ionone you produced actually smells like violet, rather than just being chemically similar?",
"team":"Toulouse_INSA-UPS",
"year":2021,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"sensory validation; chemical analysis (GC-MS); scent authentication; ionone isomer specificity; perfumery standard comparison",
"note":"Confirming a 'violet scent' claim credibly requires more than chemical detection — different ionone isomers smell different, and only specific isomers match violet's actual scent profile. The team would need to confirm they're producing the correct isomer at sufficient purity, ideally assessed against a recognized violet-scent reference or the industry-standard synthetic violet compounds already used by perfumers."
},
{
"q":"Perfume houses already have cheap synthetic violet-scent alternatives — what's the actual market case for a more complex biological production route?",
"team":"Toulouse_INSA-UPS",
"year":2021,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"sustainability positioning; petrochemical-free sourcing; natural-origin labeling; biomanufacturing cost curve; green chemistry demand",
"note":"The team's case rests on sustainability rather than near-term cost parity: synthetic violet-scent compounds are petrochemical-derived, and there's growing demand in fragrance for natural-origin, lower-carbon ingredients. A CO2-fed biological route can be marketed as green-chemistry alternative commanding a price premium, even if raw production cost doesn't yet beat traditional synthesis at scale."
},
{
"q":"You're producing a human-relevant compound in bacteria — how do you make sure the bacterially-produced decursin is actually bioactive, and not just structurally similar?",
"team":"Technion-Israel",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"enzymatic pathway fidelity; bioactivity assay; apoptosis-prevention testing; structural vs functional equivalence; in vitro validation",
"note":"Structural similarity doesn't guarantee identical biological behavior — stereochemistry or trace byproducts from the bacterial pathway could affect activity. The team would need an in vitro bioactivity assay testing the bacterially-produced decursin's actual apoptosis-prevention effect on hair follicle cells, ideally compared directly against plant-extracted decursin to confirm functional, not just structural, equivalence."
},
{
"q":"Angelica gigas root is slow-growing and geographically limited — did you consider scaling up plant cultivation instead of engineering a new production pathway?",
"team":"Technion-Israel",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"cultivation scalability; geographic limitation; production cost trajectory; engineering vs agriculture tradeoff; supply chain resilience",
"note":"Scaling cultivation doesn't solve the core problem: Angelica gigas is viable almost exclusively in specific regions of Korea and China, constrained by land, climate, and multi-year growth cycles rather than investment alone. A bacterial pathway decouples supply from that bottleneck entirely, letting production scale with fermentation capacity instead of arable land — a fundamentally faster-scaling cost curve."
},
{
"q":"What's the biggest safety consideration in formulating this into shampoos or creams, given it comes from engineered bacteria?",
"team":"Technion-Israel",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"purification and endotoxin removal; dermal safety testing; formulation stability; residual host-cell protein; cosmetic regulatory standard",
"note":"The main concern is purifying decursin well enough to remove bacterial residues — endotoxins, residual host-cell proteins — that could irritate skin even if decursin itself is safe. The product would also need standard cosmetic-grade dermal safety and stability testing before it could legitimately go into a haircare formulation."
},
{
"q":"You made the aerogel hydrophobic to prevent moisture absorption — what did you actually have to engineer in E. coli to get that property?",
"team":"EPFL",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"surface hydrophobicity engineering; moisture resistance; protein/material surface modification; insulation performance retention; bio-based material engineering",
"note":"Standard bio-based aerogels tend to be hydrophilic and lose insulating performance when they absorb moisture, since trapped water conducts heat far better than trapped air. Getting a hydrophobic bio-based aerogel out of E. coli likely meant engineering the bacteria to produce a hydrophobic protein or polymer component intrinsic to the matrix, rather than applying an external waterproof coating afterward."
},
{
"q":"Mineral wool and foam insulation are cheap and already everywhere — what has to happen for a bacterial aerogel to actually displace them in construction?",
"team":"EPFL",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"cost-competitiveness at scale; production scale-up; building-code certification; thermal performance benchmarking; industry adoption barriers",
"note":"The aerogel would need R-value performance benchmarked directly against mineral wool and foam, a production process that scales from lab quantities to construction volumes, and formal building-code certification. Cost is the biggest hurdle: biomanufactured materials rarely match commodity petrochemical pricing out of the gate, so early entry would likely target a premium 'sustainable building' niche."
},
{
"q":"Your team included an architecture student for the first time — what did that interdisciplinary input actually change about the project's direction?",
"team":"EPFL",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"interdisciplinary design input; real-world installation constraints; architecture-biology collaboration; material form factor; practical building application",
"note":"Having an architecture student involved meant the biology had to be shaped around real building-industry constraints from the start — how insulation is actually installed, what form factor (panels, loose fill, sprayed) is practical on a job site, and how a new material interacts with existing building assemblies, rather than optimizing purely for lab-scale material properties."
},
{
"q":"You're combining a conductive non-biological material with a biological scaffold — how do you keep the graphene oxide from being toxic to surrounding nerve tissue?",
"team":"Exeter",
"year":2022,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"biocompatibility testing; graphene oxide dosage control; silk encapsulation; in vivo toxicity assessment; tissue interface safety",
"note":"Graphene oxide's biocompatibility is dose- and form-dependent — at high concentrations it can be cytotoxic or trigger inflammation, so the team would need to carefully control rGO content and likely rely on the silk matrix to encapsulate and stabilize it, reducing direct tissue contact. In vivo or in vitro toxicity assays on nerve cells would be necessary before any implantation consideration."
},
{
"q":"Silk alone is already used in some nerve grafts — what specific advantage does adding the graphene oxide give you that justifies the added complexity?",
"team":"Exeter",
"year":2022,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"electrical conductivity enhancement; nerve signal propagation; silk-only graft limitation; composite material advantage; functional recovery improvement",
"note":"Plain silk grafts are biocompatible and supportive but electrically insulating, which doesn't help regenerating fibers that rely on electrical signal propagation to mature. Adding a conductive rGO component is meant to give the graft conductivity closer to native nerve tissue, which should, by the team's hypothesis, improve the speed and quality of regeneration compared to a silk-only graft."
},
{
"q":"How would you actually manufacture this biocomposite at a scale and consistency that a hospital could rely on?",
"team":"Exeter",
"year":2022,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"manufacturing reproducibility; biomedical-grade quality control; silk protein production scale-up; composite uniformity; regulatory-grade manufacturing",
"note":"Hospital use requires batch-to-batch consistency, a much higher bar than a one-off lab demonstration — silk production and rGO integration would both need standardized, reproducible processes ensuring uniform rGO distribution and consistent mechanical/electrical properties batch after batch, likely requiring dedicated process development beyond what's feasible in one iGEM season."
},
{
"q":"You call this an 'adaptable chassis' for multiple monoterpenoids — what in the design actually makes it adaptable, rather than just built for verbenone specifically?",
"team":"WWU_Muenster",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"modular pathway design; interchangeable enzyme components; chassis-pathway separation; platform reusability; monoterpenoid diversity",
"note":"An adaptable chassis typically separates core host engineering (precursor supply, general metabolic optimization) from the specific terminal enzyme that converts a shared precursor into the final molecule, so swapping in a different terminal synthase should redirect the chassis toward a different monoterpenoid. The team's adaptability claim rests on how cleanly that precursor layer is decoupled from the product-specific enzyme layer."
},
{
"q":"Verbenone needs to actually repel bark beetles in a forest, not just get produced in a flask — how do you get from a lab strain to something deployable outdoors?",
"team":"WWU_Muenster",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"environmental release considerations; outdoor deployment challenges; compound delivery method; regulatory hurdles for GMO release; dispersal and persistence",
"note":"Moving outdoors raises two problems: how the verbenone would actually be delivered and dispersed in a forest (likely as a purified, formulated product rather than releasing the organism itself, to avoid GMO release concerns), and demonstrating the compound retains beetle-repellent activity and persistence once applied outdoors versus in a controlled lab bioassay."
},
{
"q":"Forest services already use synthetic verbenone lures — what's actually wrong with the current supply that your biomanufacturing approach fixes?",
"team":"WWU_Muenster",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"production cost reduction; supply chain simplification; chemical synthesis complexity; scalable fermentation-based alternative; sustainability positioning",
"note":"Chemically synthesizing verbenone can involve costly multi-step routes that don't scale cheaply, keeping commercial lure prices relatively high. A fermentation-based route, if it hits comparable purity and cost, offers a cheaper, more scalable, more sustainable supply chain, and a chassis redirectable to other monoterpenoids gives it more long-term value than a single-compound process."
},
{
"q":"How do you control where the bacteria deposit the calcium oxalate film, so it doesn't just grow unevenly or get deposited in cracks you don't want filled?",
"team":"CAU_China",
"year":2022,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"localized application method; controlled bacterial growth; film uniformity; application technique; conservation precision",
"note":"Controlling deposition likely comes down to how the bacterial solution is physically applied (spraying, brushing, localized injection) combined with controlling growth conditions to favor even film formation. Conservators need thickness and coverage to be predictable, since an uneven or overly thick deposit could visually alter the relic in ways the natural patina wouldn't."
},
{
"q":"Conservators are historically cautious about applying anything new to cultural relics — what evidence would you need to convince them this treatment is safe long-term?",
"team":"CAU_China",
"year":2022,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"reversibility testing; long-term stability; conservator trust and adoption; comparative aging studies; non-destructive testing",
"note":"Convincing conservators requires long-term stability data showing the induced film behaves like the natural patina over years, plus evidence it doesn't trap moisture or accelerate decay the way some synthetic sealants do. Given how risk-averse conservation practice is, human practices work with conservators to validate against established standards would be central to real-world adoption."
},
{
"q":"Why engineer bacteria to do this rather than directly synthesizing and applying calcium oxalate chemically onto the stone?",
"team":"CAU_China",
"year":2022,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"biomimicry advantage; in-situ controlled growth; natural patina authenticity; chemical application limitations; bio-based precision deposition",
"note":"Directly applying synthesized calcium oxalate risks behaving like an external sealant — uneven, prone to flaking, or trapping moisture underneath. Using bacteria to grow the mineral in situ more closely mimics how the protective layer forms naturally over centuries, which conservators value because it doesn't functionally or visually behave like an artificial coating."
},
{
"q":"Photothermal therapy nanoparticles are usually made with tightly controlled chemical synthesis for size uniformity — how does a biological production process match that precision?",
"team":"Leiden",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"particle size control; biological synthesis precision; batch uniformity; genetic control of nanoparticle formation; comparative yield consistency",
"note":"Size uniformity depends on how tightly the team controls genetic and physiological conditions driving nanoparticle nucleation inside the bacteria — expression levels of relevant enzymes and growth-phase timing. The team would need to characterize particle size distribution directly and compare batch consistency against chemically synthesized nanoparticles to make a credible precision claim."
},
{
"q":"You frame this as a 'foundation for future teams' rather than a finished therapy — what's the single biggest unsolved problem standing between your project and an actual treatment?",
"team":"Leiden",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"translational gap; purification from bacterial production; in vivo efficacy validation; dosing and delivery; biomanufacturing-to-clinic pipeline",
"note":"The biggest gap is translational: moving from producing nanoparticles inside bacteria to a purified, sterile, dosage-controlled product validated for photothermal efficacy and safety in a living system. That purification and in vivo validation pipeline is substantial, which is why the team positioned the project as a foundation rather than a near-term treatment."
},
{
"q":"What made E. coli the right chassis for this, rather than a mammalian cell line closer to the final therapeutic application?",
"team":"Leiden",
"year":2022,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"E. coli production speed; cost-effective fermentation; genetic tractability; scalability advantage; proof-of-concept chassis choice",
"note":"E. coli is faster to grow, cheaper to culture, and far more genetically tractable than mammalian cell lines, making it practical for proving out a biomanufacturing concept in one season. The tradeoff is that E. coli-produced nanoparticles would still need purification and safety validation before clinical application, since bacterial production introduces contaminants mammalian systems don't."
},
{
"q":"PHA is biodegradable in about three months you say — does that mean it just breaks down the moment it's in soil, defeating the point of a slow-release fertilizer capsule?",
"team":"Leiden",
"year":2023,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"controlled degradation rate; slow-release timing match; PHA formulation tuning; biodegradation vs. release kinetics; agricultural timing requirements",
"note":"Degradation timeline and fertilizer release timeline are two different, tunable things: PHA's roughly three-month biodegradation window needs to be engineered or formulated to match how long the capsule must stay intact to control release, not break down immediately. The capsule needs to hold structural integrity for the intended release period before fully biodegrading."
},
{
"q":"You say PHA production is too expensive today — what specifically in your project reduces that cost, rather than just using PHA as it currently exists?",
"team":"Leiden",
"year":2023,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"production cost reduction strategy; fermentation process optimization; yield improvement; cheaper feedstock use; scalable bacterial production",
"note":"Cost reduction generally comes from improving fermentation yield, using cheaper or waste-derived feedstocks instead of pure sugars, or engineering strains that accumulate PHA more efficiently under simpler conditions. The team's engineering work on the production bacteria, not just sourcing existing commercial PHA, is the actual cost-reduction mechanism."
},
{
"q":"How do you know PHA capsules won't leach anything harmful into food crops while they're breaking down?",
"team":"Leiden",
"year":2023,
"level":"Overgrad",
"sheet":"Biomanufacturing",
"kw":"biodegradation byproduct safety; soil ecotoxicity testing; food-crop safety validation; agricultural regulatory standard; non-toxic breakdown confirmation",
"note":"PHA's natural breakdown products are generally non-toxic since it's a naturally occurring bacterial energy-storage polymer, but a credible safety claim still needs soil ecotoxicity and crop-uptake testing to confirm nothing problematic leaches out during degradation — a required step before regulatory approval, beyond what's typically achievable within an iGEM timeline."
},
{
"q":"Your in vivo staining system is meant to simplify downstream processing — what does conventional cellulose staining normally require that yours avoids?",
"team":"Vilnius-Lithuania",
"year":2023,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"downstream dyeing elimination; post-production processing step; in vivo stain integration; process simplification; manufacturing cost reduction",
"note":"Conventionally, bacterial cellulose has to be harvested and then separately dyed in an additional step, adding time, cost, and synthetic dye inputs. Engineering the staining to happen as cellulose is produced folds that step directly into fermentation, reducing the number of separate manufacturing stages needed afterward."
},
{
"q":"The PHB-cellulose composite is meant to give plastic-like properties — how do you make sure the two materials actually bond, rather than just sitting side by side?",
"team":"Vilnius-Lithuania",
"year":2023,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"composite material integration; PHB-cellulose bonding mechanism; material compatibility; mechanical property testing; interfacial adhesion",
"note":"For the composite to behave as one material, there needs real interfacial bonding, likely engineered at production (co-producing both components in the same bacterial system) rather than blending separately produced materials afterward. Mechanical testing — tensile strength, flexibility — would be the actual evidence showing the composite behaves differently than either material alone."
},
{
"q":"Three different modification systems in one bacterial chassis — did engineering one system interfere with the others?",
"team":"Vilnius-Lithuania",
"year":2023,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"genetic interference risk; multi-pathway engineering complexity; metabolic burden; system modularity testing; chassis resource competition",
"note":"Running multiple engineered systems risks metabolic burden, each competing for limited cellular resources, or direct genetic interference if pathways share components. The team would need to test each system independently and in combination to confirm, for example, that the chitin-copolymer system didn't reduce the in vivo staining system's efficiency running in the same cells."
},
{
"q":"What stops the protein connector itself from falling off the nanosilica surface once it's attached?",
"team":"BNU-China",
"year":2023,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"connector attachment stability; protein-silica binding strength; biomolecule retention; functional surface durability; attachment robustness testing",
"note":"Attachment stability depends on the strength and nature of the bond — covalent, high-affinity non-covalent, or weaker binding that could desorb over time. The team would need to test retention under realistic conditions (biological buffers, time, mechanical stress) to confirm durability for actual drug-carrier use, not just an initial binding assay."
},
{
"q":"You call this 'orthogonal' modification — what does that actually mean for someone trying to attach two different biomolecules to the same particle?",
"team":"BNU-China",
"year":2023,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"orthogonal attachment chemistry; multiple simultaneous modifications; independent binding sites; no cross-reactivity; modular particle design",
"note":"Orthogonal modification means the chemistry attaching one biomolecule doesn't interfere with the chemistry attaching a different biomolecule, so multiple distinct cargo molecules can be attached to the same particle independently. That matters for a therapeutic application that might need, say, both a targeting molecule and a drug payload on the same particle without one process disrupting the other."
},
{
"q":"Mesoporous nanosilica as a drug carrier isn't new — what's the actual novel contribution of your project versus existing nanosilica drug-delivery research?",
"team":"BNU-China",
"year":2023,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"modular protein-based attachment novelty; existing nanosilica literature; incremental vs fundamental advance; biomanufacturing contribution; comparative positioning",
"note":"The claimed contribution is the modular, protein-based, orthogonal connector system — not the use of mesoporous nanosilica as a carrier, which is already established. The positioning is that existing attachment methods are less flexible, and their connector platform is more generalizable and swappable for other researchers' nanosilica-biomolecule applications."
},
{
"q":"You were nominated for both Best Biomanufacturing Project and Best Hardware the same year — how did the hardware component actually support the biomanufacturing side of the project?",
"team":"HiZJU-China",
"year":2024,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"hardware-biology integration; process monitoring equipment; custom device design; production support tooling; cross-category project design",
"note":"A Best Hardware nomination alongside Best Biomanufacturing usually means custom monitoring, control, or processing equipment was built specifically to support production, rather than hardware and biology being separate tracks. Exact specifics aren't independently confirmed here — worth checking directly against the team's current wiki."
},
{
"q":"What's the relationship between your Best New Basic Part nomination and your biomanufacturing system — is the part central to production, or a separate contribution?",
"team":"HiZJU-China",
"year":2024,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"basic part characterization; production pathway component; part registry contribution; modular biological part design; project integration",
"note":"A Best New Basic Part nomination reflects a genetic part characterized well enough to be reusable by future teams, often a core enzyme or regulatory element central to the production pathway in a biomanufacturing-focused project. Exact function in HiZJU-China's specific system isn't independently confirmed here."
},
{
"q":"This was your fourth year competing — what carried over from previous years' projects into this one?",
"team":"HiZJU-China",
"year":2024,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"multi-year team continuity; cumulative expertise building; prior project foundation; institutional knowledge transfer; iterative improvement across seasons",
"note":"Teams competing across multiple years often carry forward lab infrastructure, already-characterized chassis organisms, and institutional knowledge about what project framings succeed, even as the specific topic changes. What exactly carried over for HiZJU-China isn't specifically confirmed here, but this is a reasonable pattern for a fourth-year team achieving its best result to date."
},
{
"q":"How do you validate that your iPSC-derived organoid is actually behaving like real human bone marrow, rather than just looking similar under a microscope?",
"team":"University_of_Florida",
"year":2024,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"functional validation assays; marker gene expression; cell-type composition; organoid-tissue comparison; biological fidelity testing",
"note":"Visual similarity isn't sufficient — validation typically requires checking the right cell types are present in roughly correct proportions via marker expression, and ideally testing that the organoid functionally responds the way real bone marrow would, for example producing expected immune signaling in response to an inflammatory stimulus relevant to sepsis."
},
{
"q":"If organoids could fully replace animal models, that would be a huge claim — what are they still worse at capturing compared to a live animal system?",
"team":"University_of_Florida",
"year":2024,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"organoid model limitations; systemic physiology gap; immune system complexity; vascularization absence; whole-organism interaction",
"note":"Organoids typically lack the full systemic physiology of a live animal — no real blood flow, no complete immune system interacting across multiple organs, and no whole-body feedback loops (nervous, endocrine) that shape how sepsis actually progresses. The team's realistic claim is reducing reliance on animal models for certain questions, not eliminating the need for them entirely."
},
{
"q":"Why build a computational growth model in addition to the organoid itself — what question does the organoid alone not answer?",
"team":"University_of_Florida",
"year":2024,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"computational modeling complement; cell population dynamics prediction; experimental design guidance; predictive simulation value; organoid-model synergy",
"note":"A physical organoid tells you what happened in one specific run, but a computational growth model lets the team predict how the organoid should respond under untested conditions and helps interpret whether a result is expected or anomalous. Pairing the two gives both real experimental data and a predictive tool, guiding future experimental design more efficiently than organoid testing alone."
},
{
"q":"Coupling the enzyme system to a VLP scaffold adds a whole extra manufacturing step — how do you justify that complexity instead of just optimizing the free enzyme system directly?",
"team":"BNU-China",
"year":2024,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"scaffold-based enzyme concentration; spatial proximity advantage; reaction efficiency gain; added production complexity tradeoff; system performance justification",
"note":"Free enzymes in solution are diffusion-limited, whereas concentrating and spatially organizing them on a VLP scaffold boosts local enzyme concentration and proximity between reaction partners, improving turnover beyond simply adding more free enzyme. The case for added complexity needs to show the VLP-coupled system outperforms an equivalent free-enzyme system per unit cost, not just that it technically works."
},
{
"q":"ATP regeneration bottlenecks exist in a lot of different biomanufacturing processes — is your system specific to one application, or meant to be broadly reusable?",
"team":"BNU-China",
"year":2024,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"platform generalizability; application-agnostic design; modular enzyme coupling; cross-process reusability; biomanufacturing infrastructure tool",
"note":"Based on how the team framed the project around solving a general bottleneck rather than one end-product, V-CHARGEs appears intended as a reusable platform component other ATP-dependent biomanufacturing processes could plug into. Confirming the actual breadth of generalizability depends on specific enzyme systems tested, not independently confirmed here."
},
{
"q":"What happens to production cost if you have to manufacture VLPs as an additional input on top of the enzymes themselves?",
"team":"BNU-China",
"year":2024,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"VLP production cost; added manufacturing input; cost-benefit tradeoff; scalability of scaffold production; overall process economics",
"note":"Manufacturing VLPs is itself a biomanufacturing process with its own cost and yield considerations, so overall economics depend on whether the ATP-regeneration efficiency gain outweighs the added cost of producing the VLP scaffold. A credible cost case needs total process cost (enzymes plus VLP) compared against the free-enzyme baseline, not just efficiency improvement in isolation."
},
{
"q":"Oxybenzone and similar synthetic UV filters are already banned in some reef areas — what makes your biomanufactured UV filter actually safer for coral, rather than just being a different chemical with unknown reef effects?",
"team":"Goethe-Frankfurt",
"year":2024,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"ecotoxicology testing; coral safety validation; natural-compound precedent; reef-safe certification; comparative environmental impact",
"note":"Being biomanufactured doesn't automatically make a compound reef-safe — the team would need direct ecotoxicology testing on coral or coral-associated organisms to confirm their compound doesn't cause bleaching-related harm, rather than assuming safety from production method alone. Natural-compound precedent strengthens the case but wouldn't replace direct testing."
},
{
"q":"What UV protection spectrum does your compound actually cover, and how does that compare to what sunscreen regulations require?",
"team":"Goethe-Frankfurt",
"year":2024,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"UVA/UVB coverage; broad-spectrum protection requirement; SPF-equivalent testing; cosmetic regulatory standard; sunscreen efficacy validation",
"note":"Most sunscreen regulations require broad-spectrum protection covering both UVA and UVB, so the team would need to characterize exactly which wavelengths their compound absorbs and how efficiently, then test against SPF and broad-spectrum standards a regulator would require before it could legally be marketed as sunscreen."
},
{
"q":"How do you biomanufacture a compound that's useful on human skin while keeping it affordable compared to cheap synthetic UV filters?",
"team":"Goethe-Frankfurt",
"year":2024,
"level":"Undergrad",
"sheet":"Biomanufacturing",
"kw":"production cost competitiveness; fermentation scale-up economics; premium natural-origin positioning; cost-per-gram comparison; market entry strategy",
"note":"Synthetic UV filters are very cheap to produce industrially, so a biomanufactured alternative would likely need to enter as a premium, natural-origin or reef-safe-certified ingredient rather than compete on cost initially. Optimizing fermentation yield and purification efficiency over time would be necessary to narrow that cost gap for broader adoption."
},
{
"q":"What is the next step for this project?",
"team":"Peking",
"year":2025,
"level":"Undergrad",
"sheet":"Other",
"kw":"lifetime time course; plate area; dilution series; ranked by effect; one afternoon each",
"note":"Three experiments, ranked by how far each moves our answer rather than by how interesting they are. First, spray lifetime on a leaf: it is assumed at two days and unmeasured, and it moves the seasonal volume by a factor of 10.5, so we would spray and then sample at 1, 2, 4, 8 and 15 days. Second, me…"
},
{
"q":"Which parts of the design and conceptualisation were yours, and which came from your advisors?",
"team":"AIS-China",
"year":2025,
"level":"Highschool",
"sheet":"Other",
"kw":"students built pipeline; advisors reviewed; instructor model compared; errors we found; honest split",
"note":"The modelling pipeline, the stress index selection, and the dose chain were built by the student team, and we can show the numbered scripts and the commit history behind them. Our advisors supplied the wet-lab protocols, access to the yield and weather data sources, and review. The clearest evidence…"
},
{
"q":"Walk me through a real case in the field, from sampling through to getting a result.",
"team":"HK-Joint-School",
"year":2025,
"level":"Highschool",
"sheet":"Other",
"kw":"county forecast; dekad trigger; brew ahead; spray before window; 400 L tank",
"note":"For a real field the sequence is: the county stress index is computed for the coming dekad, and if the addressable stress crosses the trigger the system flags a release window. Because production takes 4.5 days on a ten-unit fleet against a 3-day forecast, the reactor is already brewing continuously…"
},
{
"q":"What would the timeline of events be?",
"team":"HK-Joint-School",
"year":2025,
"level":"Highschool",
"sheet":"Other",
"kw":"dekad is 10 days; 8.8 day production; 1 day lead; every 2 days; Sep and Nov windows",
"note":"A dekad is a 10-day period, and our whole calendar runs on them. Producing one hectare-application takes about 8.8 days from a standing start, which is why stock is held rather than brewed on demand. Within a window the first pass goes one day before it opens and then every two days, using the assum…"
}
];
