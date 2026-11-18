const GEIT_PARTS = [

/* ===== TOPIC 1 ===== */
{id:'1a',t:1,title:'What is governance?',blurb:'The definition, four pillars and three levels of governance.',
 points:[
  {h:'IT governance',b:'The system by which the use of IT in an organisation is <b>directed and controlled</b>, ensuring alignment with business strategy, management of risk and delivery of value.'},
  {h:'Why it matters',b:'It gives <b>structure</b>: risk management, accountability, compliance and trust, and value creation. Without governance, technology growth outpaces our ability to manage its risks.'},
  {h:'Three levels of governance',b:'<ul><li><b>Corporate governance</b> manages the whole corporation: run the company to achieve its mission and vision for stakeholders.</li><li><b>IT governance</b> manages the role of IT: achieve business objectives most efficiently and maximise benefits.</li><li><b>AI governance</b> manages AI within IT governance: effective controls that create value.</li></ul>Each model is independent, with different emphasis but similar objectives.'},
  {h:'How important is IT governance?',b:'Failure can mean business disruption or worse. In mild cases, no governance means wastage and lost opportunities. A lack of IT governance <b>does not necessarily</b> mean business failure. Digitalisation keeps raising its importance.'}
 ],
 vis:{title:'The four pillars of IT governance (tap each)',items:[
  ['Strategic Management','Align IT with the business strategy.'],
  ['Benefits Realization','Make sure IT investments deliver the promised business value.'],
  ['Risk Optimization','Identify, assess and mitigate IT risks before they become crises.'],
  ['Resource Optimization','Use IT resources (people, money, assets) well.']]},
 cards:[
  ['Define IT governance','The system by which the use of IT is directed and controlled, ensuring alignment with business strategy, risk management and value delivery.'],
  ['The four pillars of IT governance','Strategic Management, Benefits Realization, Risk Optimization, Resource Optimization.'],
  ['Corporate governance focuses on...','Managing the whole corporation to achieve its mission and vision in line with stakeholders\' needs.'],
  ['IT governance focuses on...','Managing the role of IT in a corporation to achieve business objectives efficiently and maximise benefits.'],
  ['AI governance focuses on...','Managing AI within IT governance through effective controls that create value.'],
  ['Does lack of IT governance always mean business failure?','No. It may mean wastage and lost opportunities; it does not necessarily mean failure.']],
 check:[
  {q:'Which is NOT one of the four pillars of IT governance?',o:['Strategic Management','Benefits Realization','Risk Optimization','Compliance Auditing'],a:3,e:'The pillars are Strategic Management, Benefits Realization, Risk Optimization and Resource Optimization.'},
  {q:'AI governance is best described as managing:',o:['The whole corporation','AI within IT governance through effective controls','Only AI suppliers','Corporate finances'],a:1,e:'Corporate governance covers the whole corporation, IT governance the role of IT, AI governance AI within IT governance.'},
  {q:'According to the slides, a lack of IT governance:',o:['Always causes business failure','May cause wastage and lost opportunities but not necessarily failure','Has no effect','Is only a problem for listed companies'],a:1,e:'Watch for absolute words such as always.'}]},

{id:'1b',t:1,title:'Corporate governance',blurb:'The MAS Code, Enron, and the six OECD principles.',
 points:[
  {h:'Code of Corporate Governance',b:'Published by the <b>Monetary Authority of Singapore (MAS)</b> for publicly-listed companies. It describes board composition and functions and provides accountability, transparency and confidence for publicly traded companies.'},
  {h:'What the Code emphasises',b:'<ul><li>Board composition and independence (separate Chairman and CEO where possible)</li><li>Accountability and transparency</li><li>Remuneration practices (fair, transparent, linked to performance)</li><li>Shareholder rights</li><li>Culture and ethics</li></ul>'},
  {h:'Role of corporate governance',b:'Public companies are run by senior management on behalf of shareholders. Governance stops management benefiting themselves at the expense of the public good (<b>Enron, 2001</b>). The board is appointed to ensure accountability and define objectives. For private companies it serves the owners; for government agencies it ensures the government\'s objectives are met.'},
  {h:'The need for governance',b:'To make sure the enterprise does the <b>right thing</b>: achieve its owners\' aims while keeping stakeholders\' interests intact. Key questions: what is the right thing, who are the owners and stakeholders, and how do we ensure it is done.'}
 ],
 vis:{title:'The six OECD principles (tap each)',items:[
  ['I Framework','Basis for an effective framework: transparent and efficient markets, rule of law, clear division of responsibilities.'],
  ['II Shareholder rights','Protect and facilitate the exercise of shareholders\' rights and key ownership functions.'],
  ['III Equitable treatment','All shareholders treated equitably, including minority and foreign shareholders, with redress for violations.'],
  ['IV Stakeholders','Recognise stakeholder rights and encourage co-operation in creating wealth, jobs and sustainable enterprises.'],
  ['V Disclosure','Timely and accurate disclosure on all material matters: finances, performance, ownership, governance.'],
  ['VI Board','Strategic guidance, effective monitoring of management, and board accountability to the company and shareholders.']]},
 cards:[
  ['Who publishes the Code of Corporate Governance in Singapore?','The Monetary Authority of Singapore (MAS), for publicly-listed companies.'],
  ['Name the five emphases of the Code','Board composition and independence; accountability and transparency; remuneration; shareholder rights; culture and ethics.'],
  ['Which scandal illustrates why governance is needed?','Enron (2001): management acted for their own benefit at the expense of the public.'],
  ['What is the "right thing" for an enterprise?','Achieve the aims of its owners while keeping stakeholders\' interests intact.'],
  ['How many OECD principles are there?','Six: framework; shareholder rights; equitable treatment; stakeholders; disclosure and transparency; board responsibilities.'],
  ['Who ensures accountability and defines objectives?','The board of directors.']],
 check:[
  {q:'Who publishes the Code of Corporate Governance for listed companies in Singapore?',o:['OECD','ISACA','Monetary Authority of Singapore','IFAC'],a:2,e:'MAS publishes the Code.'},
  {q:'The Enron scandal (2001) illustrates the need to stop:',o:['Hackers stealing data','Management acting for their own benefit at the expense of the public good','AI bias','Data centre energy use'],a:1,e:'Governance keeps management accountable to shareholders and the public.'},
  {q:'How many OECD corporate governance principles are covered?',o:['4','5','6','7'],a:2,e:'Six.'}]},

{id:'1c',t:1,title:'Responsible AI',blurb:'Six principles, the risks of ungoverned AI, and trustworthy AI.',
 points:[
  {h:'Why governance can\'t wait',b:'AI decisions affect jobs, health, credit and criminal justice. Without governance AI can perpetuate bias, erode privacy and operate without accountability.'},
  {h:'Risks of ungoverned AI',b:'<ul><li><b>Algorithmic bias</b> (facial recognition, hiring AI)</li><li><b>Privacy violations</b> (training on personal data, mass surveillance)</li><li><b>Deepfakes and misinformation</b></li><li><b>Autonomous system failures</b> (self-driving accidents, trading flash crashes)</li><li><b>Job displacement</b></li><li><b>Concentration of power</b> in a few companies</li></ul>'},
  {h:'Lessons from past technology cycles',b:'The Internet was deployed before privacy and content rules. Social media prioritised engagement over wellbeing. In genetic engineering the <b>Asilomar Conference (1975)</b> paused research to set safety norms, a model of proactive governance. "Move fast and break things" is not acceptable for AI.'},
  {h:'Building trustworthy AI',b:'AI ethics policy, explainability tools, diverse training data, bias testing and auditing, human-in-the-loop review, and an incident response plan.'}
 ],
 vis:{title:'The six Responsible AI principles (tap each)',items:[
  ['Fairness','Treat everyone equitably; do not perpetuate or amplify discrimination.'],
  ['Transparency','How AI works and decides must be explainable and understandable.'],
  ['Privacy & Security','Respect data privacy and consent; protect against misuse and cyber threats.'],
  ['Human Oversight','Humans stay in control of consequential decisions; systems must be correctable.'],
  ['Accountability','Clear lines of responsibility for AI outcomes and harms.'],
  ['Safety & Reliability','Perform as intended, be robust to adversarial inputs, and fail safely.']]},
 cards:[
  ['Six Responsible AI principles','Fairness, Transparency, Privacy & Security, Human Oversight, Accountability, Safety & Reliability.'],
  ['Which principle: humans must stay in control and systems must be correctable?','Human Oversight.'],
  ['Which principle: AI must be explainable and understandable?','Transparency.'],
  ['What was the Asilomar Conference (1975)?','Genetic engineering research was paused to set safety norms: a model of proactive governance.'],
  ['Six risks of ungoverned AI','Bias, privacy violations, deepfakes/misinformation, autonomous system failures, job displacement, concentration of power.'],
  ['Practical steps for trustworthy AI','AI ethics policy, explainability tools, diverse training data, bias testing and auditing, human-in-the-loop review, incident response plan.']],
 check:[
  {q:'A hiring AI systematically disadvantages women. Which principle is most directly breached?',o:['Fairness','Safety & Reliability','Privacy & Security','Human Oversight'],a:0,e:'Fairness: treat individuals equitably and do not amplify discrimination.'},
  {q:'Which principle says humans must remain in control of consequential AI decisions?',o:['Transparency','Accountability','Human Oversight','Safety & Reliability'],a:2,e:'Human Oversight.'},
  {q:'The Asilomar Conference (1975) is a model of proactive governance in which field?',o:['The Internet','Social media','Genetic engineering','Cloud computing'],a:2,e:'Genetic engineering researchers paused work to set safety norms.'}]},

{id:'1d',t:1,title:'Sustainability & Green IT',blurb:'Three pillars, ESG, Green IT, and AI\'s two-sided impact.',
 points:[
  {h:'The paradox',b:'Technology is both our greatest tool for environmental problems (smart grids, precision agriculture) and one of the fastest-growing sources of harm. <b>Governance</b> decides which path we take. Data centres use 2 to 3% of global electricity, ICT is about 4% of global CO2, and over 50 million tonnes of e-waste are generated yearly.'},
  {h:'Three pillars of sustainability',b:'<ul><li><b>Environmental</b>: carbon footprint, energy efficiency, e-waste, green data centres</li><li><b>Social</b>: digital inclusion, fair labour, privacy and human rights, workforce transition</li><li><b>Economic</b>: long-term value, circular economy, sustainable business models</li></ul>'},
  {h:'ESG',b:'<b>Environmental, Social, Governance</b>: a framework investors and regulators use to evaluate organisations. For tech companies it is shifting from <b>voluntary to mandatory disclosure</b>. It drives access to capital, compliance, reputation and talent.'},
  {h:'Green IT strategies',b:'Data centre efficiency (<b>PUE</b>, Power Usage Effectiveness), circular economy (refurbish, recycle), renewable energy (PPAs), cloud optimisation, carbon accounting (Scope 1, 2, 3), sustainable software engineering.'},
  {h:'AI and sustainability',b:'<b>Costs:</b> training energy, cooling water, rapid hardware refresh and rare earths, continuous inference demand. <b>Benefits:</b> optimised grids, precision agriculture, materials and carbon-capture research, predictive maintenance.'},
  {h:'Who is responsible?',b:'Board and executives set direction; IT leadership (CIO/CISO/CTO) implements frameworks; data scientists build responsibly; legal and compliance manage regulation; employees follow policy and report violations; governments and regulators set frameworks. Emerging: agentic AI, quantum computing, digital sovereignty, climate tech urgency.'}
 ],
 vis:{title:'ESG in technology (tap each)',items:[
  ['E: Environmental','Scope 1/2/3 emissions, renewable energy targets, water use, e-waste.'],
  ['S: Social','Diversity and inclusion, employee wellbeing, community impact, supply chain ethics.'],
  ['G: Governance','Board diversity, executive pay, anti-corruption, data privacy, tax transparency.']]},
 cards:[
  ['Three pillars of sustainability','Environmental, Social, Economic.'],
  ['What does ESG stand for?','Environmental, Social, Governance.'],
  ['PUE stands for...','Power Usage Effectiveness: a measure of data centre energy efficiency.'],
  ['ESG disclosure for tech companies is moving from...','Voluntary reporting to mandatory disclosure.'],
  ['What is carbon accounting?','Measuring and reporting Scope 1, 2 and 3 emissions across the IT value chain.'],
  ['Name two environmental costs of AI','Training energy and data centre cooling water (also hardware refresh and inference demand).']],
 check:[
  {q:'The three pillars of sustainability in technology governance are:',o:['Environmental, Social, Economic','Energy, Safety, Efficiency','People, Process, Technology','Risk, Value, Resource'],a:0,e:'Not to be confused with ESG, where the G is Governance.'},
  {q:'In Green IT, PUE stands for:',o:['Power Usage Effectiveness','Programmable Utility Engine','Public Utility Emissions','Predictive Usage Estimate'],a:0,e:'PUE measures data centre energy efficiency.'},
  {q:'ESG reporting for technology companies is shifting:',o:['From voluntary to mandatory','From mandatory to voluntary','Only for banks','Away from emissions'],a:0,e:'It now drives access to capital, compliance, reputation and talent.'}]},

/* ===== TOPIC 2 ===== */
{id:'2a',t:2,title:'Enterprise governance',blurb:'Players, the ISACA definition, conformance vs performance, key assets.',
 points:[
  {h:'The players',b:'<ul><li><b>Board of Directors:</b> sets the overall direction; accountable to shareholders.</li><li><b>CEO and executive management</b> (CFO, CIO, COO...): execute operations based on the board\'s direction.</li><li><b>Employees:</b> do the actual work and answer to executive management.</li></ul>'},
  {h:'Enterprise governance (ISACA)',b:'A set of responsibilities and practices exercised by the <b>board and executive management</b> to: provide strategic direction, ensure objectives are achieved, ascertain that risks are managed appropriately, and verify that resources are used responsibly.'},
  {h:'Conformance and performance (IFAC, Oct 2003)',b:'<b>Conformance</b> (corporate governance): corporate structure, roles, executive remuneration; gives accountability and assurance. <b>Performance</b> (business governance): strategy and value creation, managing risk appetite; gives value creation and resource utilisation.'},
  {h:'Six key assets (Weill & Ross, 2004)',b:'Human, Financial, Physical, IP, Information & IT, Relationship assets. Financial governance practices cover financial assets; IT governance practices cover information and IT assets.'}
 ],
 vis:{title:'The six key assets (tap each)',items:[
  ['Human','People and their skills.'],['Financial','Money and financial resources.'],['Physical','Buildings, equipment, facilities.'],
  ['IP','Intellectual property.'],['Information & IT','Data and technology (IT governance practices).'],['Relationship','Relationships with customers, partners, suppliers.']]},
 cards:[
  ['ISACA\'s definition of enterprise governance (four goals)','Provide strategic direction; ensure objectives are achieved; manage risks appropriately; use resources responsibly.'],
  ['Conformance covers...','Corporate structure, roles, executive remuneration; leads to accountability and assurance.'],
  ['Performance covers...','Strategy, value creation, managing risk appetite; leads to value creation and resource utilisation.'],
  ['Which body described conformance and performance?','IFAC (International Federation of Accountants), October 2003.'],
  ['The six key assets','Human, financial, physical, IP, information & IT, relationship.'],
  ['Who is accountable to the shareholders?','The board of directors.']],
 check:[
  {q:'According to IFAC (2003), which dimension focuses on strategy and value creation?',o:['Conformance','Performance','Compliance','Assurance'],a:1,e:'Performance = strategy, value creation, risk appetite.'},
  {q:'The definition of enterprise governance in the slides comes from:',o:['ISACA','IFAC','MAS','OECD'],a:0,e:'ISACA defines it; IFAC gives the two dimensions; Weill and Ross give the assets.'},
  {q:'Which is NOT one of the six key assets?',o:['IP assets','Relationship assets','Human assets','Marketing assets'],a:3,e:'The six: human, financial, physical, IP, information & IT, relationship.'}]},

{id:'2b',t:2,title:'GEIT frameworks',blurb:'Governance vs management frameworks, and why COBIT leads.',
 points:[
  {h:'Two groups of frameworks',b:'Frameworks hold best practice to guide implementation. Those for the <b>governance</b> of enterprise IT are <b>COBIT</b> and <b>ISO 38500</b>. Those for the <b>management</b> of enterprise IT are CMMI, ISO 27001, ISO 9000, ISO/IEC 20000, ISO 31000:2009, TOGAF, M_o_R and ITIL.'},
  {h:'COBIT is the umbrella',b:'COBIT aligns with the other standards at a high level, so it can be the <b>overarching framework</b> for the governance and management of enterprise IT.'},
  {h:'Why frameworks matter',b:'They are the experts\' collected wisdom, minimise mis-spent resources, and are constantly revised. The absence of a framework does <b>not</b> mean everyone fails, only that success is not optimal.'}
 ],
 vis:{title:'What each management standard is for (tap each)',items:[
  ['CMMI','Capability Maturity Model Integration.'],['ISO 27001','Information security.'],['ISO 9000','Quality management.'],
  ['ISO/IEC 20000','IT service management.'],['ISO 31000','Risk management.'],['TOGAF','The Open Group Architecture Framework.'],
  ['M_o_R','Management of Risk.'],['ITIL','IT Infrastructure Library.']]},
 cards:[
  ['Two frameworks for the governance of enterprise IT','COBIT (ISACA) and ISO 38500.'],
  ['ISO 27001 is the standard for...','Information security.'],
  ['ISO 9000 is the standard for...','Quality management.'],
  ['ISO/IEC 20000 is the standard for...','IT service management.'],
  ['ISO 31000:2009 is the standard for...','Risk management.'],
  ['Why can COBIT be the overarching framework?','It aligns at a high level with the other relevant standards and frameworks.']],
 check:[
  {q:'Which pair are both frameworks for the GOVERNANCE of enterprise IT?',o:['COBIT and ISO 38500','ITIL and CMMI','TOGAF and ISO 27001','COBIT and ITIL'],a:0,e:'ITIL, CMMI, TOGAF and ISO 27001 are management frameworks.'},
  {q:'ISO 27001 is the standard for:',o:['Quality management','IT service management','Information security','Risk management'],a:2,e:'ISO 9000 = quality, ISO/IEC 20000 = IT service management, ISO 31000 = risk.'},
  {q:'Without an IT governance framework:',o:['Everyone will fail','The rate of success will not be optimal','IT is illegal','Nothing is affected'],a:1,e:'Frameworks improve the odds; they are not a prerequisite for survival.'}]},

{id:'2c',t:2,title:'Pain points & trigger events',blurb:'What creates the need for IT governance.',
 points:[
  {h:'Business drivers',b:'Business drivers constitute the need for IT governance. Pain points or trigger events make an organisation realise it needs improvement. IT governance starts immediate action to mitigate the pain and builds a platform for future improvement.'},
  {h:'Pain points (ongoing problems)',b:'<ul><li>Failed initiatives, rising IT costs, low business value</li><li>IT incidents (data loss, project failure)</li><li>Outsourcing service levels not met</li><li>Failure to meet regulatory requirements</li><li>IT limiting innovation and agility</li><li>Regular audit findings of poor IT performance</li><li>Hidden IT spending; duplicated initiatives</li><li>Insufficient or unskilled IT staff</li><li>IT changes late or over budget</li><li>Management reluctant to engage with IT; complex decentralised operating models</li></ul>'},
  {h:'Trigger events (things that happen)',b:'<ul><li>Merger, acquisition or divestiture</li><li>Shift in market or competition</li><li>New regulatory or compliance requirements</li><li>Enterprise-wide governance project</li><li>New CIO, CFO, CEO or board member</li><li>External audit or consultant assessment</li><li>A new business strategy; desire to improve value from IT</li></ul>'},
  {h:'Getting buy-in',b:'Engaging a <b>third party</b> for a review may increase buy-in. GEIT success depends on participation of everyone in the enterprise.'}
 ],
 cards:[
  ['Pain point or trigger? Rising IT costs','Pain point.'],
  ['Pain point or trigger? A merger','Trigger event.'],
  ['Pain point or trigger? New CIO appointed','Trigger event.'],
  ['Pain point or trigger? Hidden IT spending','Pain point.'],
  ['Pain point or trigger? New regulatory requirements','Trigger event (failing to meet them is a pain point).'],
  ['How can an organisation increase buy-in for GEIT?','Engage a third party to review; get participation of everyone in the enterprise.']],
 check:[
  {q:'A newly appointed CEO prompts the company to start a GEIT initiative. This is a:',o:['Pain point','Trigger event','Barrier','Enabler'],a:1,e:'New CIO/CFO/CEO/board members are trigger events.'},
  {q:'Which is a pain point?',o:['A merger','Hidden IT spending','A new CEO','A new business strategy'],a:1,e:'Hidden IT spending is an ongoing problem, so a pain point.'},
  {q:'What may increase buy-in for GEIT initiatives?',o:['Engaging a third-party review','Keeping them secret','Only IT staff taking part','Avoiding audits'],a:0,e:'Success depends on everyone participating, and an independent review helps.'}]},

{id:'2d',t:2,title:'COBIT components & IT strategy tools',blurb:'The 7 components, SWOT and the BCG matrix.',
 points:[
  {h:'Components',b:'Components interact to support a comprehensive governance and management system. They are anything that helps achieve enterprise objectives (frameworks, principles, structures, processes, practices). The key is a <b>holistic approach</b> to how they interact. COBIT identifies <b>7</b>.'},
  {h:'IT strategy',b:'IT strategy must align with the enterprise\'s mission, vision and values. Two techniques to identify it: <b>SWOT</b> and the <b>BCG matrix</b>.'},
  {h:'SWOT',b:'<b>S</b>trengths (keep developing), <b>W</b>eaknesses (mitigate), <b>O</b>pportunities (develop into future strengths), <b>T</b>hreats (address before they become serious).'}
 ],
 vis:{title:'The 7 COBIT components (tap each)',items:[
  ['Principles, policies, frameworks','The rules and guidance that direct behaviour.'],
  ['Processes','Organised sets of practices and activities.'],
  ['Organizational structures','Decision-making bodies and roles.'],
  ['Culture, ethics, behaviour','Of individuals and of the enterprise.'],
  ['Information','Data produced and used by the enterprise.'],
  ['Services, infrastructure, applications','The technology and capabilities that provide IT processing.'],
  ['People, skills, competencies','The people needed to run and govern.']]},
 vis2:{title:'BCG matrix (tap each)',items:[
  ['Star','Generates a lot of returns and the most benefit, but requires large cash flows. Maintain or develop it into a cash cow.'],
  ['Cash cow','Takes few resources now but produces a lot of returns. The best area to be in.'],
  ['Question mark','Not generating much benefit yet, but has potential to become a cash cow with enough investment.'],
  ['Dog','Does not take up many resources, but does not generate many benefits either.']]},
 cards:[
  ['How many COBIT components are there?','Seven.'],
  ['List the 7 COBIT components','Principles/policies/frameworks; processes; organisational structures; culture, ethics, behaviour; information; services, infrastructure, applications; people, skills, competencies.'],
  ['SWOT: what do you do with Opportunities?','Develop them into future strengths.'],
  ['BCG: the best area to be in','Cash cow: few resources, lots of returns.'],
  ['BCG: high returns but needs large cash flows','Star.'],
  ['BCG: low resources and low benefits','Dog.'],
  ['BCG: potential to become a cash cow with investment','Question mark.']],
 check:[
  {q:'How many key components does COBIT identify for GEIT?',o:['5','6','7','9'],a:2,e:'Seven.'},
  {q:'In the BCG matrix, which area uses few resources but produces a lot of returns?',o:['Star','Dog','Question mark','Cash cow'],a:3,e:'A cash cow is the best area to be in.'},
  {q:'A SWOT "Opportunity" should be:',o:['Mitigated','Developed into a future strength','Ignored','Reported to regulators'],a:1,e:'Weaknesses are mitigated; threats are addressed before they worsen.'}]},

{id:'2e',t:2,title:'Roles and the RACI chart',blurb:'Who is accountable for what.',
 points:[
  {h:'Why structures matter',b:'IT-related decisions must be made transparently, with effective communication between business and IT management. Organisational structures are an enabler in COBIT. Not every role must exist, but someone should be able to identify with each.'},
  {h:'Senior roles',b:'<ul><li><b>Board:</b> accountable for governance and overall control of resources</li><li><b>CEO:</b> total management of the enterprise</li><li><b>CFO:</b> financial management, financial risk and controls, accurate accounts</li><li><b>COO:</b> operation of the enterprise</li><li><b>CRO:</b> all aspects of risk management (an IT risk officer may oversee IT risk)</li><li><b>CIO:</b> aligning IT and business strategies; planning, resourcing and delivering IT services</li><li><b>CISO:</b> security of enterprise information in all forms</li><li><b>Business executive:</b> a specific business unit or subsidiary</li></ul>'},
  {h:'RACI chart',b:'<b>R</b>esponsible, <b>A</b>ccountable, <b>C</b>onsulted, <b>I</b>nformed. COBIT uses RACI to assign governance responsibilities to roles and give end-to-end coverage. In the EDM01 example the Board is Accountable.'},
  {h:'The responsibility poem',b:'Everybody, Somebody, Anybody and Nobody: a job everybody thought somebody would do, so nobody did it. It shows why responsibility must be assigned explicitly.'}
 ],
 cards:[
  ['CIO','Aligns IT and business strategies; accountable for planning, resourcing and delivering IT services.'],
  ['CISO','Accountable for the security of enterprise information in all its forms.'],
  ['CRO','Accountable for all aspects of risk management across the enterprise.'],
  ['CFO','Accountable for all aspects of financial management, including financial risk and controls.'],
  ['RACI stands for...','Responsible, Accountable, Consulted, Informed.'],
  ['What does the responsibility poem teach?','Responsibilities must be explicitly assigned, or nobody does the job.']],
 check:[
  {q:'Which role is accountable for aligning IT and business strategies?',o:['CISO','CRO','CIO','COO'],a:2,e:'CIO.'},
  {q:'Which role is accountable for the security of enterprise information in all its forms?',o:['CIO','CISO','CRO','CFO'],a:1,e:'CISO.'},
  {q:'In COBIT, RACI stands for:',o:['Responsible, Accountable, Consulted, Informed','Risk, Assurance, Control, Information','Review, Approve, Confirm, Inform','Resource, Audit, Compliance, Integrity'],a:0,e:'RACI links governance activities to roles.'}]},

/* ===== TOPIC 3 ===== */
{id:'3a',t:3,title:'Strategic alignment & the SAM',blurb:'Aligning IT with the business, and the Strategic Alignment Model.',
 points:[
  {h:'What strategic management does',b:'Corporate and IT governance must be in place for an enterprise to achieve its aims, and business-IT alignment must be achieved. Strategic management aims for <b>strategic alignment</b> by asking two questions: how is IT aligned with the business, and how is the business aligned with IT? It is a <b>two-way</b> relationship.'},
  {h:'Strategic Alignment Model (SAM)',b:'Four boxes: <b>Business Strategy</b> and <b>IT Strategy</b> (external domain), <b>Organization Infrastructure & Processes</b> and <b>IS Infrastructure & Processes</b> (internal domain). The business domain is on the left and the IT domain on the right.'},
  {h:'Domains and integration',b:'<ul><li><b>External domain:</b> business strategy and IT strategy.</li><li><b>Internal domain:</b> key business processes, policies, guidelines, procedures.</li><li><b>Strategic integration:</b> the vertical link between external and internal.</li><li><b>Functional integration:</b> the horizontal link between business and IT.</li><li><b>Cross alignment:</b> business strategy to IT infrastructure and processes, and IT strategy to organisation infrastructure and processes.</li></ul>'},
  {h:'Strategic planning process',b:'Business strategy is defined first and IT strategy is developed from it. It takes into account <b>external factors</b> (market, industry, geopolitics) and <b>internal factors</b> (culture, organisation, risk appetite).'}
 ],
 vis:{title:'The four SAM boxes (tap each)',items:[
  ['Business Strategy','External domain, business side.'],['IT Strategy','External domain, IT side.'],
  ['Organization Infra & Processes','Internal domain, business side.'],['IS Infra & Processes','Internal domain, IT side.']]},
 cards:[
  ['Strategic management aims to achieve...','Strategic alignment between business and IT.'],
  ['The two key questions of strategic management','How is IT aligned with the business? How is the business aligned with IT?'],
  ['SAM external domain','Business strategy and IT strategy.'],
  ['SAM internal domain','Key business processes, policies, guidelines and procedures (organisation and IS infrastructure and processes).'],
  ['Strategic vs functional integration','Strategic = vertical (external to internal). Functional = horizontal (business to IT).'],
  ['External vs internal factors in planning','External: market, industry, geopolitics. Internal: culture, organisation, appetite.']],
 check:[
  {q:'In the SAM, the external domain consists of:',o:['Business strategy and IT strategy','Business processes and IT processes','Policies and procedures','Hardware and software'],a:0,e:'The internal domain is the infrastructure and processes.'},
  {q:'The relationship between business strategy and IT is:',o:['One-way, business to IT','One-way, IT to business','Two-way','Unrelated'],a:2,e:'IT can also create opportunities that change business strategy.'},
  {q:'Which are examples of external factors in strategic planning?',o:['Culture and appetite','Market, industry, geopolitics','Organisation structure','Employee skills'],a:1,e:'Internal: culture, organisation, appetite.'}]},

{id:'3b',t:3,title:'COBIT goals cascade',blurb:'From stakeholder needs down to governance objectives.',
 points:[
  {h:'Why a cascade',b:'COBIT\'s goals cascade helps translate stakeholder needs into enterprise goals, alignment goals, governance and management objectives, and then IT goals. IT goals link back to their source, <b>stakeholder drivers and needs</b>, so they stay tied to the mission.'},
  {h:'Value of the cascade',b:'It lets enterprise IT governance be defined from the enterprise\'s objectives and risk, which is an essential step in strategic management. It: defines <b>relevant, tangible goals</b> at each level of responsibility; <b>filters COBIT knowledge</b> to give relevant guidance for projects; and <b>communicates</b> how governance and management objectives help achieve enterprise goals.'},
  {h:'Changing strategy',b:'Business strategy is constantly revised, so IT must readjust continually. Failure causes misalignment and <b>systemic failures</b> in governance. IT can also create opportunities that change business strategy, so it is two-way.'}
 ],
 vis:{title:'The 4 steps of the goals cascade (tap each)',items:[
  ['Stakeholder drivers & needs','Drivers (strategy changes, regulation, new technology) influence stakeholder needs.'],
  ['Enterprise goals','Stakeholder needs cascade to a set of generic enterprise goals.'],
  ['Alignment goals','COBIT 5 defines alignment goals for each enterprise goal.'],
  ['Governance & management objectives','Specific goals defined in the governance and management objectives.']]},
 cards:[
  ['Order of the goals cascade','Stakeholder drivers and needs, enterprise goals, alignment goals, governance and management objectives.'],
  ['What influences stakeholder needs?','Stakeholder drivers: strategy changes, changing business and regulatory environment, new technologies.'],
  ['Three values of the goals cascade','Defines tangible goals at each level; filters COBIT knowledge for projects; communicates how objectives support enterprise goals.'],
  ['IT goals link back to...','Their source: stakeholder drivers and needs (a two-way relationship).'],
  ['What happens if IT fails to adjust to strategy changes?','Misalignment with business objectives and systemic failures in governance.']],
 check:[
  {q:'In the COBIT goals cascade, enterprise goals cascade directly to:',o:['Stakeholder needs','Alignment goals','Governance & management objectives','IT policies'],a:1,e:'Needs, enterprise goals, alignment goals, objectives.'},
  {q:'The goals cascade is valuable because it:',o:['Replaces the board','Defines relevant, tangible goals at each level of responsibility','Removes the need for policies','Guarantees profit'],a:1,e:'It also filters COBIT guidance and communicates how objectives support goals.'},
  {q:'Stakeholder needs are influenced by:',o:['Alignment goals','Stakeholder drivers','IT goals','Maturity levels'],a:1,e:'Step 1: drivers influence needs.'}]},

{id:'3c',t:3,title:'Agility & the agility loops',blurb:'Adapting quickly: monitor, improve, create.',
 points:[
  {h:'What agility is',b:'The enterprise\'s ability to <b>adapt quickly</b> to environmental change. It requires constantly assessing strategic business changes and their impact on IT. Agility is an <b>ongoing process</b>, not a one-time effort.'},
  {h:'Three loops',b:'<ul><li><b>Loop 1 monitoring and deciding:</b> environmental monitoring and responsive decisions; the most profitable alignment opportunities often come from agile responses to unexpected events.</li><li><b>Loop 2 improving existing processes:</b> standardise, eliminate root causes, automate, improve reliability.</li><li><b>Loop 3 creating new processes:</b> detect new threats and opportunities, create new processes and retire obsolete ones.</li></ul>'},
  {h:'Inputs to loops 2 and 3',b:'Usually <b>non-standard inputs</b>: either errors in the input data or system operations, or correct data that shows a new trend or event.'}
 ],
 vis:{title:'The three agility loops (tap each)',items:[
  ['Loop 1: monitoring & deciding','Watch the environment and decide responsively.'],
  ['Loop 2: improving existing processes','Standardise, eliminate root causes, automate, improve reliability.'],
  ['Loop 3: creating new processes','Detect new threats and opportunities; create new processes; retire obsolete ones.']]},
 cards:[
  ['Define agility','The enterprise\'s ability to adapt quickly to changes in the environment.'],
  ['Is agility a one-time project?','No, it is an ongoing process.'],
  ['Loop 1','Monitoring and deciding.'],
  ['Loop 2','Improving existing processes (automation, reliability, eliminate root causes).'],
  ['Loop 3','Creating new processes and retiring obsolete ones.'],
  ['Inputs to loops 2 and 3 are usually...','Non-standard inputs: errors in data or operations, or correct data showing a new trend or event.']],
 check:[
  {q:'Which agility loop focuses on creating new processes and retiring obsolete ones?',o:['Loop 1','Loop 2','Loop 3','All three'],a:2,e:'Loop 1 monitors and decides; Loop 2 improves existing; Loop 3 creates new.'},
  {q:'Automating and improving the reliability of existing operations belongs to:',o:['Loop 1','Loop 2','Loop 3','None'],a:1,e:'Loop 2 improves existing processes.'},
  {q:'According to the slides, agility is:',o:['A one-time project','An ongoing process','Only for start-ups','The same as alignment'],a:1,e:'There is no end stage.'}]},

{id:'3d',t:3,title:'Barriers, policies & communication',blurb:'Why alignment fails and the CIO\'s role.',
 points:[
  {h:'Three barriers to strategic alignment',b:'Studies identify three: <b>expression</b>, <b>specification</b> and <b>implementation</b> barriers.'},
  {h:'Policies and procedures',b:'They support business-IT alignment, reflect management guidance, and are tools strategic management uses to give guidance and direction.'},
  {h:'Communication and the CIO',b:'Business and IT objectives must be continuously communicated to IT personnel so business strategy is not lost. The <b>CIO is central</b>: explain the IT strategy, make IT staff supporters, and make sure the IT strategy evolves when business goals change.'}
 ],
 vis:{title:'Barriers to strategic alignment (tap each)',items:[
  ['Expression barrier','Senior management cannot communicate business strategy to operational management.'],
  ['Specification barrier','Lack of IT involvement in strategy development, so IT and business end up with two different strategies.'],
  ['Implementation barrier','Difficulty implementing the strategy because of the current IT portfolio, e.g. legacy systems.']]},
 cards:[
  ['Expression barrier','Senior management cannot communicate business strategy to operational management.'],
  ['Specification barrier','IT not involved in strategy development, so two different strategies.'],
  ['Implementation barrier','The current IT portfolio (e.g. legacy systems) makes the strategy hard to implement.'],
  ['Who is central to communicating strategy to IT staff?','The CIO.'],
  ['What are policies and procedures for?','Supporting alignment: tools to provide guidance and direction.']],
 check:[
  {q:'Legacy systems that make a strategy hard to implement are an example of an:',o:['Expression barrier','Specification barrier','Implementation barrier','Communication barrier'],a:2,e:'Implementation barriers stem from the current IT portfolio.'},
  {q:'IT was not involved in developing the strategy, so IT and business have different strategies. This is a:',o:['Expression barrier','Specification barrier','Implementation barrier','Policy barrier'],a:1,e:'Specification barrier.'},
  {q:'Which role is central to continuous communication of business and IT objectives to IT staff?',o:['CFO','CIO','Board chair','Auditor'],a:1,e:'The CIO.'}]},

/* ===== TOPIC 4 ===== */
{id:'4a',t:4,title:'What is benefits realization?',blurb:'Purpose, the business case, and types of benefit.',
 points:[
  {h:'Objective',b:'Ensure that: IT-enabled business investments achieve the promised benefits and deliver business value; required capabilities are delivered <b>on time and within budget</b>; and IT services and assets <b>continue</b> to contribute to business value. Many high IT expenditures do not realise their expected benefits.'},
  {h:'Business case',b:'A comprehensive business case is critical. It contains <b>assumptions</b> on how value will be created, and these must be well tested. It is the <b>primary tool</b> for designing and articulating expected benefits.'},
  {h:'Program and project management',b:'Value needs effective use of IT <b>plus</b> changes in business processes, individual work and organisational structures. Keep constant focus on desired business outcomes, relationships between initiatives, and how they contribute to value.'},
  {h:'Two types of benefit',b:'<b>Business benefits</b> create value by increasing profits. <b>Intermediate benefits</b> do not directly create value but benefit stakeholders (for example better customer service that does not raise profit). Benefits realization ensures intermediate benefits contribute to business benefits, and that returns merit the resources spent. Without it, value is eroded or destroyed.'}
 ],
 vis:{title:'Which type of benefit? (tap each)',items:[
  ['Business benefit','Increases the company\'s profits, so it creates value.'],
  ['Intermediate benefit','Benefits some stakeholders but does not directly create value. Must be linked to a business benefit.']]},
 cards:[
  ['Three aims of benefits realization','Promised benefits delivered; capabilities on time and within budget; IT services and assets keep contributing value.'],
  ['The primary tool for articulating expected benefits','The business case.'],
  ['What must be tested in a business case?','The assumptions on how value will be created.'],
  ['Business benefit vs intermediate benefit','Business: increases profit. Intermediate: benefits stakeholders but not profit directly.'],
  ['Without benefits realization...','Optimal value is not created, or value is eroded or destroyed.']],
 check:[
  {q:'Improved customer service that does not directly increase profit is a(n):',o:['Business benefit','Intermediate benefit','Financial benefit','Portfolio benefit'],a:1,e:'Business benefits raise profit.'},
  {q:'The primary tool for designing and articulating expected benefits is the:',o:['Business case','Balanced scorecard','RACI chart','SWOT analysis'],a:0,e:'It holds assumptions that must be tested.'},
  {q:'Realising value requires IT together with:',o:['Only more budget','Changes in business process, individual work and organisational structures','Fewer staff','Outsourcing'],a:1,e:'IT alone does not deliver value.'}]},

{id:'4b',t:4,title:'Full economic life cycle',blurb:'The five phases from investment to retirement.',
 points:[
  {h:'The problem',b:'The main issue with managing programs is <b>lack of continuity</b> after the required capabilities are delivered. Benefits and value usually arrive some time later, so the program must be seen through its <b>full economic life cycle</b>.'},
  {h:'Remember it',b:'<b>I A V V R</b>: Investment, Adoption, Value creation, Value sustainment, Retirement. The business case spans investment and adoption; the service portfolio spans value creation and sustainment; a new business case may follow in sustainment.'}
 ],
 vis:{title:'The 5 phases (tap each)',items:[
  ['Investment','Developing the necessary capabilities.'],
  ['Adoption','Implementing the capabilities.'],
  ['Value creation','Achieving the expected performance and moving capabilities into the active service portfolio.'],
  ['Value sustainment','Assuring the assets keep creating value; may need additional investment.'],
  ['Retirement','Decommissioning the resulting assets.']]},
 cards:[
  ['Five phases of the full economic life cycle','Investment, Adoption, Value creation, Value sustainment, Retirement.'],
  ['Investment phase','Developing the necessary capabilities.'],
  ['Adoption phase','Implementing the capabilities.'],
  ['Value creation phase','Reaching expected performance and moving capabilities into the active service portfolio.'],
  ['Value sustainment phase','Assuring assets continue to create value, possibly with more investment.'],
  ['Retirement phase','Decommissioning the assets.']],
 check:[
  {q:'What is the correct order of the life cycle?',o:['Investment, Adoption, Value creation, Value sustainment, Retirement','Adoption, Investment, Value creation, Retirement, Value sustainment','Investment, Value creation, Adoption, Value sustainment, Retirement','Investment, Adoption, Value sustainment, Value creation, Retirement'],a:0,e:'I-A-V-V-R.'},
  {q:'In which phase do assets keep creating value, possibly with additional investment?',o:['Adoption','Value creation','Value sustainment','Retirement'],a:2,e:'Value sustainment.'},
  {q:'The main program-management problem full life cycle management addresses is:',o:['Too many staff','Lack of continuity after capabilities are delivered','Too much documentation','Low interest rates'],a:1,e:'Benefits arrive after delivery.'}]},

{id:'4c',t:4,title:'Portfolio management',blurb:'Managing investments as a group, and the COBIT processes.',
 points:[
  {h:'What a portfolio is',b:'A collection of programs, projects and/or operations managed as a group to achieve strategic objectives. Components may not be interdependent or even related. <b>Portfolio management</b> is the centralised management of portfolios: identifying, prioritising, authorising, managing and controlling work to achieve strategic objectives.'},
  {h:'Aim and activities',b:'Secure <b>optimal value</b> across the portfolio of IT-enabled investments. Establish and manage the resource portfolio; define investment thresholds; evaluate, prioritise and select, defer or reject investments; manage and optimise the portfolio; monitor and report. Programs must be defined, evaluated, prioritised, selected and actively managed through their full economic life cycle.'},
  {h:'Benefits of portfolio management',b:'A holistic view of enterprise objectives; sharing, economies of scale and mutual benefits; resources allocated by relative importance and urgency.'},
  {h:'Three ways to organise portfolios',b:'<ul><li><b>Category:</b> synergies, resource sharing and specialisation.</li><li><b>Product or service:</b> timely realisation of benefits at launch.</li><li><b>Resource usage:</b> common resources, specialisation, economies of scale, innovation.</li></ul>'}
 ],
 vis:{title:'COBIT portfolio management processes (tap each)',items:[
  ['Establish target investment mix','Ensure the mix (cost, alignment, ROI) is optimal.'],
  ['Determine funds','Find the funding sources and what they imply for return expectations.'],
  ['Evaluate & select programs','Evaluate and prioritise business cases; allocate funds; start programs.'],
  ['Monitor, optimise, report','Regularly monitor and optimise portfolio and program performance.'],
  ['Manage benefits achievement','Monitor benefits against the agreed and current business case.']]},
 cards:[
  ['Define a portfolio','A collection of programs, projects and/or operations managed as a group to achieve strategic objectives.'],
  ['Must portfolio components be interdependent?','No, they may be unrelated but are managed together.'],
  ['Aim of portfolio management','Secure optimal value across the portfolio of IT-enabled investments.'],
  ['Three ways to organise a portfolio','By category, by product or service, by resource usage.'],
  ['First COBIT portfolio process','Establish target investment mix.'],
  ['Five COBIT portfolio processes','Target mix; determine funds; evaluate and select programs; monitor, optimise, report; manage benefits achievement.']],
 check:[
  {q:'Which is NOT a way the slides say portfolios can be organised?',o:['By category','By product or service','By resource usage','By geography'],a:3,e:'Category, product/service, resource usage.'},
  {q:'The first COBIT portfolio management process is to:',o:['Manage benefits achievement','Establish target investment mix','Monitor and report on performance','Retire assets'],a:1,e:'Target mix, funds, select, monitor, benefits.'},
  {q:'Which statement about a portfolio is correct?',o:['Components must be tightly interdependent','Components may be unrelated but are managed together for strategic objectives','Only projects allowed','It ends when the first project ends'],a:1,e:'It can include programs, projects and operations.'}]},

{id:'4d',t:4,title:'Benefit calculation techniques',blurb:'Payback, ROI and non-financial techniques.',
 points:[
  {h:'Why calculate benefits',b:'Benefit calculation techniques communicate the expected value of a business plan. Examples: breakeven analysis, cost-benefit analysis (CBA), payback period, return on investment (ROI), service life cycle.'},
  {h:'Financial techniques (preferred)',b:'Based on quantifiable values, so they give absolute values to measure benefit. <b>Payback period:</b> the time needed to recoup the initial investment; used to evaluate or compare mutually exclusive investments. <b>ROI:</b> the ratio of expected profit to initial cost, compared with the <b>opportunity cost of capital</b>; the greater the return, the more likely the investment goes ahead.'},
  {h:'Non-financial CBA',b:'Used when benefits are largely intangible or have no ready market value. It finds a <b>surrogate measure</b>. Examples: <b>organizational flexibility</b> (ability and ease of responding, a source of competitive advantage) and <b>information economics</b> (information has economic value).'}
 ],
 vis:{title:'Which technique? (tap each)',items:[
  ['Payback period','Time to recoup the initial investment. Compare mutually exclusive options.'],
  ['ROI','Expected profit divided by initial cost, compared with the opportunity cost of capital.'],
  ['Non-financial CBA','Surrogate measures for intangible costs and benefits, such as organizational flexibility or information economics.']]},
 cards:[
  ['Payback period','The time needed to recoup the initial investment.'],
  ['ROI','Ratio of expected profit to initial investment cost, compared with the opportunity cost of capital.'],
  ['Why are financial techniques preferred?','They are based on quantifiable values and give absolute measures of benefit.'],
  ['When is non-financial CBA used?','When benefits are intangible or hard to quantify and have no ready market value.'],
  ['Two non-financial techniques','Organizational flexibility and information economics.'],
  ['Organizational flexibility','The ability of the organisation to respond and its ease of responding; a source of competitive advantage.']],
 check:[
  {q:'Which technique measures the time needed to recoup the initial investment?',o:['ROI','Payback period','Information economics','Organizational flexibility'],a:1,e:'Used to compare mutually exclusive investments.'},
  {q:'ROI is compared against:',o:['The payback period','The opportunity cost of capital','The maturity level','The portfolio mix'],a:1,e:'A greater return means the investment is more likely to proceed.'},
  {q:'Non-financial cost-benefit analysis relies on:',o:['Surrogate measures','Exact profit figures','Audit findings','Legacy data'],a:0,e:'Used when benefits are intangible.'}]},

{id:'4e',t:4,title:'Measurement & maturity levels',blurb:'Balanced Scorecard and the six capability levels.',
 points:[
  {h:'Why measure',b:'Measurement of performance is essential: management needs to know how well benefits are being realised. The <b>Balanced Scorecard</b> evaluates IT from the <b>user\'s perspective</b>.'},
  {h:'Maturity model (ISO 15504)',b:'Evaluates the capability of the organisation against <b>six levels</b>, 0 to 5. Each level includes all attributes of the levels below it. Capability maturity measures the maturity of the process.'},
  {h:'Remember it',b:'<b>I P M E P O</b>: Incomplete, Performed, Managed, Established, Predictable, Optimizing.'}
 ],
 vis:{title:'The six maturity levels (tap each)',items:[
  ['0 Incomplete','Process not implemented or fails its purpose; little or no evidence of systematic achievement.'],
  ['1 Performed','The implemented process achieves its purpose.'],
  ['2 Managed','Performed in a managed fashion; work products established, controlled and maintained.'],
  ['3 Established','Implemented using a defined process capable of achieving its outcomes.'],
  ['4 Predictable','Operates within defined limits to achieve its outcomes.'],
  ['5 Optimizing','Continuously improved to meet current and projected business goals.']]},
 cards:[
  ['Which standard is the maturity model based on?','ISO 15504.'],
  ['How many maturity levels?','Six: 0 to 5.'],
  ['Level 0','Incomplete.'],['Level 3','Established: uses a defined process.'],
  ['Level 4','Predictable: operates within defined limits.'],
  ['Level 5','Optimizing: continuously improved for current and projected goals.'],
  ['The Balanced Scorecard evaluates IT from whose perspective?','The user\'s perspective.']],
 check:[
  {q:'Which level means the process operates within defined limits to achieve its outcomes?',o:['Level 2 Managed','Level 3 Established','Level 4 Predictable','Level 5 Optimizing'],a:2,e:'Level 3 = defined process; 4 = defined limits.'},
  {q:'A process that is not implemented or fails its purpose is at level:',o:['0 Incomplete','1 Performed','2 Managed','3 Established'],a:0,e:'Levels run 0 to 5.'},
  {q:'The Balanced Scorecard allows IT to be evaluated from whose perspective?',o:['The auditor\'s','The user\'s','The regulator\'s','The supplier\'s'],a:1,e:'It is a process and service measurement technique.'}]}
];
const GEIT_MCQ = [
{t:1,q:"Which is NOT one of the four pillars of IT governance?",o:["Strategic Management","Benefits Realization","Risk Optimization","Compliance Auditing"],a:3,e:"The four pillars are Strategic Management, Benefits Realization, Risk Optimization and Resource Optimization."},
{t:1,q:"The Code of Corporate Governance for publicly-listed companies in Singapore is published by:",o:["OECD","ISACA","Monetary Authority of Singapore","IFAC"],a:2,e:"MAS publishes the Code. OECD has six international principles, ISACA defines enterprise governance, IFAC identified conformance and performance."},
{t:1,q:"A hiring AI systematically disadvantages women. Which Responsible AI principle is most directly breached?",o:["Fairness","Safety & Reliability","Privacy & Security","Human Oversight"],a:0,e:"Fairness means treating individuals equitably and not amplifying discrimination."},
{t:1,q:"The Asilomar Conference (1975) is cited as a model of proactive governance in which field?",o:["The Internet","Social media","Genetic engineering","Cloud computing"],a:2,e:"Researchers paused genetic engineering work to set safety norms before going on."},
{t:1,q:"The Enron scandal (2001) is used to illustrate the need for governance to stop:",o:["Hackers stealing customer data","Senior management acting for their own benefit at the expense of the public good","Companies failing to adopt AI","Data centres using too much energy"],a:1,e:"Corporate governance exists so management does not benefit itself at the expense of shareholders and the public."},
{t:1,q:"AI governance is best described as focusing on:",o:["Managing the whole corporation","Managing AI within IT governance through effective controls","Replacing IT governance","Managing only AI vendors"],a:1,e:"Corporate governance manages the whole corporation, IT governance manages the role of IT, AI governance manages AI within IT governance."},
{t:1,q:"How many principles are in the OECD Principles of Corporate Governance covered in the slides?",o:["4","5","6","7"],a:2,e:"Six principles, from the basis of an effective framework through to the responsibilities of the board."},
{t:1,q:"The three pillars of sustainability in technology governance are:",o:["Environmental, Social, Economic","Energy, Safety, Efficiency","People, Process, Technology","Risk, Value, Resource"],a:0,e:"Environmental, Social and Economic. Do not confuse with ESG, which is Environmental, Social, Governance."},
{t:1,q:"In Green IT, PUE stands for:",o:["Power Usage Effectiveness","Programmable Utility Engine","Public Utility Emissions","Predictive Usage Estimate"],a:0,e:"PUE measures data centre energy efficiency."},
{t:1,q:"Which statement about ESG reporting for technology companies matches the slides?",o:["It is shifting from voluntary to mandatory disclosure","It applies only to banks","It only covers financial results","It is being phased out"],a:0,e:"ESG is rapidly shifting from voluntary reporting to mandatory disclosure."},
{t:1,q:"According to the slides, a lack of IT governance:",o:["Always causes business failure","May lead to wastage and lost opportunities, but does not necessarily mean business failure","Has no effect","Only matters for listed companies"],a:1,e:"Watch absolute words. The slides say lack of IT governance may not mean business failure or loss."},
{t:1,q:"Which Responsible AI principle requires that humans stay in control of consequential decisions and that systems can be corrected?",o:["Transparency","Accountability","Human Oversight","Safety & Reliability"],a:2,e:"Human Oversight: humans remain in control, and systems must be correctable."},
{t:1,q:"Measuring Scope 1, 2 and 3 emissions across the IT value chain is called:",o:["Carbon accounting","Cloud optimisation","Circular economy","Right-sizing"],a:0,e:"Carbon accounting measures and reports Scope 1, 2 and 3 emissions."},

{t:2,q:"Which pair are both frameworks for the GOVERNANCE (not management) of enterprise IT?",o:["COBIT and ISO 38500","ITIL and CMMI","TOGAF and ISO 27001","COBIT and ITIL"],a:0,e:"COBIT and ISO 38500 target governance. ITIL, CMMI, TOGAF and ISO 27001 target management."},
{t:2,q:"A newly appointed CEO prompts a company to start a GEIT initiative. This is an example of a:",o:["Pain point","Trigger event","Barrier","Enabler"],a:1,e:"New CIO, CFO, CEO or board member, mergers and new regulations are trigger events."},
{t:2,q:"In the BCG matrix, which area uses few resources but produces a lot of returns?",o:["Star","Dog","Question mark","Cash cow"],a:3,e:"A cash cow is the best area to be in. A star needs large cash flows."},
{t:2,q:"Which role is accountable for aligning IT and business strategies?",o:["CISO","CRO","CIO","COO"],a:2,e:"The CIO aligns IT and business strategy and manages delivery of IT services. The CISO handles information security."},
{t:2,q:"According to the IFAC report (2003), which dimension of enterprise governance focuses on strategy and value creation?",o:["Conformance","Performance","Compliance","Assurance"],a:1,e:"Performance covers strategy, value creation and risk appetite. Conformance covers structure, roles and remuneration."},
{t:2,q:"How many key components does COBIT identify for achieving GEIT?",o:["5","6","7","9"],a:2,e:"Seven: principles/policies/frameworks, processes, organisational structures, culture/ethics/behaviour, information, services/infrastructure/applications, people/skills/competencies."},
{t:2,q:"The definition of enterprise governance used in the slides comes from:",o:["ISACA","IFAC","MAS","OECD"],a:0,e:"ISACA gives the definition. IFAC (2003) gives conformance and performance. Weill and Ross give the six key assets."},
{t:2,q:"In a COBIT RACI chart, the letters stand for:",o:["Responsible, Accountable, Consulted, Informed","Risk, Assurance, Control, Information","Review, Approve, Confirm, Inform","Resource, Audit, Compliance, Integrity"],a:0,e:"RACI links each governance process to roles."},
{t:2,q:"Which is NOT one of the six key assets of enterprise governance?",o:["IP assets","Relationship assets","Human assets","Marketing assets"],a:3,e:"The six are human, financial, physical, IP, information & IT, and relationship assets."},
{t:2,q:"In a SWOT analysis, why does an organisation identify its Opportunities?",o:["To mitigate them","So they can be developed into future strengths","To remove them","To report to regulators"],a:1,e:"Strengths are developed, weaknesses mitigated, opportunities developed into strengths, threats addressed before they worsen."},
{t:2,q:"In the BCG matrix, an area that is not yet generating much benefit but could become a cash cow with enough investment is a:",o:["Star","Dog","Question mark","Cash cow"],a:2,e:"Question mark: potential with investment. A dog uses few resources and gives few benefits."},
{t:2,q:"Which role is accountable for the security of enterprise information in all its forms?",o:["CIO","CISO","CRO","CFO"],a:1,e:"CISO = information security. CRO = enterprise-wide risk. CFO = financial management."},
{t:2,q:"ISO 27001 is the standard for:",o:["Quality management","IT service management","Information security","Risk management"],a:2,e:"ISO 9000 = quality, ISO/IEC 20000 = IT service management, ISO 31000 = risk."},
{t:2,q:"The slides say the absence of an IT governance framework means:",o:["Everyone will fail","The rate of success will not be optimal","IT is illegal","Nothing changes"],a:1,e:"Frameworks are collected wisdom. Without them success is not guaranteed to be optimal, but failure is not certain."},

{t:3,q:"In the COBIT goals cascade, enterprise goals cascade directly to:",o:["Stakeholder needs","Alignment goals","Governance & management objectives","IT policies"],a:1,e:"Order: stakeholder drivers and needs, enterprise goals, alignment goals, governance and management objectives."},
{t:3,q:"Legacy systems that make a new strategy hard to implement are an example of which barrier to strategic alignment?",o:["Expression barrier","Specification barrier","Implementation barrier","Communication barrier"],a:2,e:"Implementation barriers come from the current IT portfolio, such as legacy systems."},
{t:3,q:"Senior management cannot communicate the business strategy to operational management. This is an:",o:["Expression barrier","Specification barrier","Implementation barrier","Agility barrier"],a:0,e:"Expression barrier = strategy not communicated down."},
{t:3,q:"IT was not involved in developing the strategy, so IT and the business end up with two different strategies. This is a:",o:["Expression barrier","Specification barrier","Implementation barrier","Policy barrier"],a:1,e:"Specification barrier = lack of IT involvement in strategy development."},
{t:3,q:"Which agility loop focuses on creating new processes and retiring obsolete ones?",o:["Loop 1","Loop 2","Loop 3","All three loops"],a:2,e:"Loop 1 = monitoring and deciding, Loop 2 = improving existing processes, Loop 3 = creating new processes."},
{t:3,q:"Automating and improving the reliability of existing operations belongs to which agility loop?",o:["Loop 1","Loop 2","Loop 3","None"],a:1,e:"Loop 2 improves existing processes, often through automation and enhanced reliability."},
{t:3,q:"According to the slides, agility is:",o:["A one-time project","An ongoing process","Only for start-ups","The same as alignment"],a:1,e:"Agility is the enterprise's ability to adapt quickly, and it is an ongoing process with no end stage."},
{t:3,q:"In the Strategic Alignment Model, the external domain consists of:",o:["Business strategy and IT strategy","Business processes and IT processes","Policies and procedures","Hardware and software"],a:0,e:"External = business strategy and IT strategy. Internal = organisational and IS infrastructure and processes."},
{t:3,q:"Which role is central to continuously communicating business and IT objectives to IT personnel?",o:["CFO","CIO","Board chair","Auditor"],a:1,e:"The CIO explains the IT strategy, wins IT staff over, and evolves the strategy when business goals change."},
{t:3,q:"The relationship between business strategy and IT is described in the slides as:",o:["One-way, business to IT","One-way, IT to business","Two-way","Unrelated"],a:2,e:"Business drives IT strategy, but IT can also create opportunities that change business strategy."},
{t:3,q:"The goals cascade is valuable because it:",o:["Replaces the board","Defines relevant, tangible goals at each level of responsibility","Removes the need for policies","Guarantees profit"],a:1,e:"It also filters COBIT knowledge for projects and communicates how objectives support enterprise goals."},

{t:4,q:"Improved customer service that does not directly increase profit is a(n):",o:["Business benefit","Intermediate benefit","Financial benefit","Portfolio benefit"],a:1,e:"Intermediate benefits help stakeholders but do not directly create value. Business benefits raise profit."},
{t:4,q:"What is the correct order of the full economic life cycle?",o:["Investment, Adoption, Value creation, Value sustainment, Retirement","Adoption, Investment, Value creation, Retirement, Value sustainment","Investment, Value creation, Adoption, Value sustainment, Retirement","Investment, Adoption, Value sustainment, Value creation, Retirement"],a:0,e:"I-A-V-V-R."},
{t:4,q:"In which phase do assets keep creating value, possibly with additional investment?",o:["Adoption","Value creation","Value sustainment","Retirement"],a:2,e:"Value sustainment assures the assets continue to create value."},
{t:4,q:"The primary tool for designing and articulating the expected benefits of an IT project is the:",o:["Business case","Balanced scorecard","RACI chart","SWOT analysis"],a:0,e:"A business case holds the assumptions about how value will be created, and those assumptions must be tested."},
{t:4,q:"Which technique measures the time needed to recoup the initial investment?",o:["ROI","Payback period","Information economics","Organizational flexibility"],a:1,e:"Payback period is used to evaluate or compare mutually exclusive investments."},
{t:4,q:"ROI is compared against:",o:["The payback period","The opportunity cost of capital","The maturity level","The portfolio mix"],a:1,e:"If the return is greater than the opportunity cost of capital, the investment is more likely to go ahead."},
{t:4,q:"Non-financially-oriented cost-benefit analysis is used when benefits are intangible. It relies on:",o:["Surrogate measures","Exact profit figures","Audit findings","Legacy data"],a:0,e:"Examples: organizational flexibility and information economics."},
{t:4,q:"In the ISO 15504 maturity model, which level means the process operates within defined limits to achieve its outcomes?",o:["Level 2 Managed","Level 3 Established","Level 4 Predictable","Level 5 Optimizing"],a:2,e:"Level 3 uses a defined process, Level 4 operates within defined limits, Level 5 improves continuously."},
{t:4,q:"A process that is not implemented or fails to achieve its purpose is at maturity level:",o:["0 Incomplete","1 Performed","2 Managed","3 Established"],a:0,e:"Levels run 0 Incomplete, 1 Performed, 2 Managed, 3 Established, 4 Predictable, 5 Optimizing."},
{t:4,q:"The Balanced Scorecard allows IT to be evaluated from whose perspective?",o:["The auditor's","The user's","The regulator's","The supplier's"],a:1,e:"The Balanced Scorecard is a process and service measurement technique that takes the user's perspective."},
{t:4,q:"Which statement about a portfolio is correct?",o:["Its components must be tightly interdependent","Its components may not be related but are managed together for strategic objectives","It can contain only projects","It ends when the first project finishes"],a:1,e:"A portfolio can hold programs, projects and operations managed as a group."},
{t:4,q:"Which is NOT a way the slides say portfolios can be organised?",o:["By category","By product or service","By resource usage","By geography"],a:3,e:"Portfolios are organised by category, product or service, or resource usage."},
{t:4,q:"The first COBIT portfolio management process is to:",o:["Manage benefits achievement","Establish target investment mix","Monitor and report on performance","Retire assets"],a:1,e:"Order: target mix, funding sources, evaluate and select programs, monitor/optimise/report, manage benefits achievement."},
{t:4,q:"The main program-management problem that full economic life cycle management addresses is:",o:["Too many staff","Lack of continuity after the capabilities are delivered","Too much documentation","Low interest rates"],a:1,e:"Benefits arrive after delivery, so programs must be seen through the whole life cycle."}
];
const GEIT_SA = [
{t:1,q:"Explain the three levels of governance (corporate, IT, AI) and how they relate.",model:"Corporate governance ensures the whole company is run to achieve its mission and vision in line with stakeholders' needs. IT governance manages the role of IT so business objectives are met efficiently and benefits maximised. AI governance manages AI within IT governance through effective controls that create value. Each model is independent, with different emphasis but similar objectives.",pts:["Corporate governance: whole company, mission and vision, stakeholders' needs","IT governance: IT managed to achieve business objectives efficiently, maximise benefits","AI governance: AI managed through effective controls, within IT governance, to create value","Each model is independent with different emphasis but similar objectives"]},
{t:1,q:"A bank's AI loan-approval system is found to reject female applicants more often. Using the Responsible AI principles, explain what went wrong and what controls should be in place.",model:"This is algorithmic bias that breaches Fairness. A lack of Transparency hid the problem, lack of Accountability means no clear owner, and lack of Human Oversight let decisions go uncorrected. Controls: diverse training data, bias testing and auditing, explainability tools, human-in-the-loop review, an AI ethics policy and an incident response plan.",pts:["Identifies algorithmic bias / breach of Fairness","Links to Transparency, Accountability or Human Oversight","Controls: diverse data, bias testing and auditing","Controls: explainability, human-in-the-loop review, ethics policy or incident response"]},
{t:1,q:"Describe the three pillars of sustainability and give one Green IT strategy for each.",model:"Environmental (carbon, energy, e-waste): improve data centre PUE or use renewable energy through PPAs. Social (digital inclusion, fair labour, privacy, workforce transition): support workforce transition and reskilling. Economic (long-term value, circular economy, sustainable business models): refurbish devices and extend hardware life. Governance decides whether technology helps or harms across all three.",pts:["Names Environmental, Social and Economic","Environmental example (PUE, renewables, e-waste, carbon accounting)","Social example (inclusion, fair labour, workforce transition)","Economic example (circular economy, long-term value, sustainable models)"]},
{t:2,q:"Distinguish the conformance and performance dimensions of enterprise governance, and name the six key assets.",model:"Per IFAC (2003), conformance (corporate governance) covers structure, roles and executive remuneration, giving accountability and assurance. Performance (business governance) covers strategy, value creation and managing risk appetite, giving value creation and resource utilisation. The six assets are human, financial, physical, IP, information & IT, and relationship assets.",pts:["Conformance: structure, roles, executive remuneration, accountability","Performance: strategy, value creation, risk appetite","IFAC (2003) as the source","All six assets: human, financial, physical, IP, information & IT, relationship"]},
{t:2,q:"A company has just appointed a new CIO and failed its last regulatory audit. Identify the trigger events and pain points, and list the seven COBIT components a GEIT initiative should address.",model:"Trigger events: the new CIO, and the external audit or new compliance requirement. Pain point: failure to meet regulatory requirements. The seven components: principles, policies and frameworks; processes; organisational structures; culture, ethics and behaviour; information; services, infrastructure and applications; people, skills and competencies. A holistic approach to how they interact is key.",pts:["Trigger: new CIO","Trigger or pain point: audit / regulatory failure","Lists all 7 COBIT components","Notes the holistic interaction of components"]},
{t:3,q:"Explain the COBIT goals cascade and why it is valuable.",model:"Stakeholder drivers influence stakeholder needs, which cascade to enterprise goals, then alignment goals, then governance and management objectives. It translates stakeholder needs into tangible IT goals, links IT goals to their source, defines relevant goals at each level of responsibility, filters COBIT guidance for projects, and communicates how objectives support enterprise goals, achieving business and IT alignment.",pts:["Four steps in the correct order","Links IT goals back to stakeholder needs (two-way)","Defines relevant, tangible goals at each level","Filters COBIT guidance / communicates how objectives support enterprise goals"]},
{t:3,q:"A retailer's CEO announces a new online strategy but IT staff keep working on old plans, and legacy systems cannot support it. Identify the alignment barriers and recommend actions.",model:"Expression barrier: strategy was not communicated to operations. Implementation barrier: the legacy IT portfolio. Possibly a specification barrier if IT was not involved in setting the strategy. Actions: the CIO communicates and wins IT buy-in, involve IT in strategy development, use the goals cascade, apply the agility loops (monitor, improve existing, create new processes and retire obsolete ones), and revise policies and procedures.",pts:["Expression barrier","Implementation barrier (legacy systems)","Specification barrier or involving IT in strategy","Actions: CIO communication, agility loops, goals cascade or policies"]},
{t:4,q:"Describe the five phases of the full economic life cycle and explain why managing only to project delivery destroys value.",model:"Investment (develop capabilities), Adoption (implement), Value creation (reach expected performance, enter the service portfolio), Value sustainment (keep creating value, maybe reinvest), Retirement (decommission). Benefits usually arrive after delivery and programs often lack continuity after capabilities are delivered. Without managing the full cycle, value is eroded or never realised.",pts:["Five phases in the right order","Brief description of each phase","Benefits arrive after delivery / lack of continuity","Value eroded or not realised without full-cycle management"]},
{t:4,q:"A firm is choosing between two IT projects. Compare payback period, ROI and a non-financial technique, and say when each is appropriate.",model:"Payback period is the time to recoup the initial investment and suits comparing mutually exclusive projects. ROI is expected profit divided by initial cost, compared with the opportunity cost of capital. Both are financial and quantifiable, so they are preferred. When benefits are intangible, use non-financial CBA with a surrogate measure such as organizational flexibility or information economics.",pts:["Payback period: time to recoup, compares mutually exclusive investments","ROI: profit / initial cost vs opportunity cost of capital","Financial techniques are quantifiable and preferred","Non-financial CBA for intangibles, with an example (org flexibility, information economics)"]},
{t:4,q:"Explain portfolio management and how a portfolio can be organised.",model:"A portfolio is a collection of programs, projects and operations managed together for strategic objectives. Portfolio management centrally identifies, prioritises, authorises, manages and controls them to secure optimal value. Organise by category (synergies, resource sharing), product or service (timely benefit realisation) or resource usage (specialisation, economies of scale). COBIT processes: target investment mix, funding sources, evaluate and select programs, monitor/optimise/report, manage benefits achievement.",pts:["Definition of a portfolio and of portfolio management","Aim: optimal value across the investments","Three ways to organise: category, product/service, resource usage","COBIT processes (target mix, funding, select, monitor, benefits)"]},
{t:4,q:"A team's process is performed and follows a defined process, but is not yet measured against limits. Which maturity level is it, and what must it do to reach level 5?",model:"Level 3 Established (defined process). Level 4 Predictable requires operating within defined limits to achieve outcomes. Level 5 Optimizing requires continuous improvement to meet current and projected business goals. Each level includes the attributes of the previous ones.",pts:["Level 3 Established","Level 4 Predictable: within defined limits","Level 5 Optimizing: continuous improvement for current and projected goals","Levels are cumulative"]}
];
