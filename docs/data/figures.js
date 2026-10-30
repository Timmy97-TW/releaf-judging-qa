var FIGURES = {
"meta":{
"doms":[
{
"id":"hardware",
"en":"Hardware",
"zh":"硬體",
"tier":1
},
{
"id":"measurement",
"en":"Measurement",
"zh":"量測",
"tier":1
},
{
"id":"cloning",
"en":"Cloning",
"zh":"選殖",
"tier":1
},
{
"id":"plant",
"en":"Plants",
"zh":"植物",
"tier":1
},
{
"id":"ihp",
"en":"Human Practices",
"zh":"人文實踐",
"tier":1
},
{
"id":"business",
"en":"Business",
"zh":"商業",
"tier":2
},
{
"id":"law",
"en":"Law",
"zh":"法規",
"tier":2
},
{
"id":"model",
"en":"Math Model",
"zh":"數學模型",
"tier":2
},
{
"id":"protein",
"en":"Protein Design",
"zh":"蛋白設計",
"tier":2
},
{
"id":"software",
"en":"Software & Twin",
"zh":"軟體與孿生",
"tier":2
},
{
"id":"biomanufacturing",
"en":"Biomanufacturing",
"zh":"生物製造",
"tier":2
},
{
"id":"safety",
"en":"Safety",
"zh":"安全",
"tier":2
},
{
"id":"geo",
"en":"Geospatial",
"zh":"地理空間",
"tier":2
},
{
"id":"education",
"en":"Education",
"zh":"教育",
"tier":2
},
{
"id":"dataphys",
"en":"Data Physical.",
"zh":"資料實體化",
"tier":2
},
{
"id":"sustainability",
"en":"Sustainability",
"zh":"永續",
"tier":2
},
{
"id":"overview",
"en":"Overview",
"zh":"總覽",
"tier":2
},
{
"id":"registry",
"en":"Registry",
"zh":"Registry",
"tier":3
}
],
"n":162,
"t1":50,
"t2":36,
"t3":76,
"prio":32
},
"items":[
{
"id":"c01",
"img":"c01.webp",
"tier":1,
"page":"engineering",
"ask_en":"What is this gel, and what exactly does it prove?",
"ask_zh":"這是什麼膠？它到底證明了什麼？",
"a_en":"19 September 2026, the strongest cloning evidence we have. Three independent ACDI clones, X1, X3 and X9, each screened across three internal junctions: junction A at 375 bp, junction B at 632 bp, junction C at 661 bp. Nine correct junctions say the four modules are joined in the right order in three separate clones. They say nothing about the sequence between the junctions, which is why we do not claim a verified sequence from this gel alone.",
"a_zh":"2026 年 9 月 19 日，我們手上最強的選殖證據。三個獨立的 ACDI 選殖株 X1、X3、X9，各自檢查三個內部接點：接點 A 375 bp、接點 B 632 bp、接點 C 661 bp。九個正確的接點說明四個模組在三個獨立選殖株裡都以正確順序接上了。它們對接點之間的序列什麼都沒說——所以我們不會光憑這張膠就宣稱序列已經驗證。",
"kw_en":[
"three clones x three junctions",
"375, 632, 661 bp",
"says nothing between junctions"
],
"kw_zh":[
"三個選殖株乘三個接點",
"375、632、661 bp",
"接點之間沒有說明"
],
"q_en":"What do the nine lanes on this gel establish?",
"q_zh":"這張膠上的九道電泳帶確立了什麼？",
"opt_en":[
"That four modules are joined in the right order in three independent clones, across three junctions each",
"That the whole Level 2 plasmid has been sequence-verified end to end",
"That the construct expresses ACC deaminase in B. subtilis",
"That nine separate colonies carry nine different constructs"
],
"opt_zh":[
"四個模組在三個獨立選殖株中都以正確順序接上，每株各查三個接點",
"整個 Level 2 質體已從頭到尾完成定序驗證",
"這個構築能在 B. subtilis 中表現 ACC 去胺酶",
"九個獨立菌落帶的是九種不同的構築"
],
"ans":0,
"trap_en":"Upgrading junction PCR to sequence verification. Junctions prove order, not content.",
"trap_zh":"把接點 PCR 升格成定序驗證。接點證明的是順序，不是內容。",
"dom":"cloning"
},
{
"id":"c02",
"img":"c02.webp",
"tier":1,
"page":"engineering",
"ask_en":"What experiment is this, and what are the two band sizes?",
"ask_zh":"這是什麼實驗？兩種條帶大小各是多少？",
"a_en":"A restriction digest of the Level 2 construct from two independent clones. EcoRI alone, in lanes 1 and 3, linearises the plasmid at the expected 10,293 bp. EcoRI together with BtsI, in lanes 2 and 4, gives the expected 7,543 bp fragment. Lane 5 is the 10 kb ladder. This is an orthogonal check on the junction PCR: a different enzyme, a different prediction, the same construct.",
"a_zh":"這是把 Level 2 構築從兩個獨立選殖株取出做的限制酶切。第 1、3 道只用 EcoRI，把質體切成線狀，落在預期的 10,293 bp。第 2、4 道用 EcoRI 加 BtsI，切出預期的 7,543 bp 片段。第 5 道是 10 kb 階梯。這是對接點 PCR 的正交驗證：不同的酵素、不同的預測、同一個構築。",
"kw_en":[
"EcoRI linearises at 10,293 bp",
"EcoRI plus BtsI gives 7,543 bp",
"orthogonal to junction PCR"
],
"kw_zh":[
"EcoRI 切成 10,293 bp 線狀",
"EcoRI 加 BtsI 得 7,543 bp",
"與接點 PCR 正交"
],
"q_en":"What does EcoRI alone do to the Level 2 plasmid here?",
"q_zh":"在這裡，只用 EcoRI 會對 Level 2 質體做什麼？",
"opt_en":[
"Linearise it at the expected 10,293 bp",
"Cut out the 7,543 bp insert",
"Leave it uncut, as a negative control",
"Cut it into three fragments of equal size"
],
"opt_zh":[
"把它切成線狀，落在預期的 10,293 bp",
"切出 7,543 bp 的插入片段",
"完全不切，當作陰性對照",
"切成三段等長的片段"
],
"ans":0,
"trap_en":"Forgetting why a digest matters alongside the PCR. It tests the whole plasmid length, which junction primers never see.",
"trap_zh":"忘了為什麼有了 PCR 還要做酶切。酶切檢查的是整段質體長度，那是接點引子看不到的。",
"dom":"cloning"
},
{
"id":"c03",
"img":"c03.webp",
"tier":1,
"page":"engineering",
"ask_en":"What variable is being swept here, and which setting was carried forward?",
"ask_zh":"這裡在掃描什麼變因？最後採用的是哪一個設定？",
"a_en":"28 August 2026, the insert-to-vector ratio sweep for the Level 2 Golden Gate assembly, verified with primers specific to each module. Lanes 1 to 3 are 1:5, lanes 4 to 6 are 1:7, each labelled with its expected size of 375, 632 or 661 bp. Both ratios gave all three junctions; 1:7 was the one carried forward.",
"a_zh":"2026 年 8 月 28 日，Level 2 Golden Gate 組裝插入片段對載體比例掃描，用各模組專一的引子驗證。第 1 到 3 道是 1:5，第 4 到 6 道是 1:7，每一道都標了自己的預期大小 375、632 或 661 bp。兩種比例都跑出三個接點；最後帶著往下做的是 1:7。",
"kw_en":[
"insert to vector ratio",
"1:5 and 1:7",
"1:7 carried forward"
],
"kw_zh":[
"插入片段對載體比例",
"1:5 與 1:7",
"採用 1:7"
],
"q_en":"What is being compared between lanes 1-3 and lanes 4-6?",
"q_zh":"第 1 到 3 道與第 4 到 6 道之間在比較什麼？",
"opt_en":[
"Two insert-to-vector ratios in the Golden Gate assembly, 1:5 against 1:7",
"Two annealing temperatures in the colony PCR",
"Two electroporation voltages for the transformation",
"Two different restriction enzymes used for the digest"
],
"opt_zh":[
"Golden Gate 組裝中兩種插入片段對載體的比例：1:5 對 1:7",
"菌落 PCR 的兩種黏合溫度",
"轉形時的兩種電穿孔電壓",
"酶切使用的兩種不同限制酶"
],
"ans":0,
"trap_en":"Saying 1:7 was better. Both worked; 1:7 was the one we carried on with, which is a choice, not a result.",
"trap_zh":"說 1:7 比較好。兩種都成功；1:7 只是我們選擇往下做的那一個，那是決定，不是結果。",
"dom":"cloning"
},
{
"id":"c04",
"img":"c04.webp",
"tier":1,
"page":"engineering",
"ask_en":"A judge points at this gel and asks what it shows. What is the honest answer?",
"ask_zh":"評審指著這張膠問它顯示了什麼。誠實的回答是什麼？",
"a_en":"This is the MoClo 2.0 Level 1 screen as it reached us, from the 21 September writing document. It arrived with no lane map, no date and no expected sizes, so it can be shown but it cannot be read. The bands sit at one height across almost every lane, which is the pattern our own learn step describes as suspect. We keep it on the page as a record and we do not draw a conclusion from it.",
"a_zh":"這是 MoClo 2.0 Level 1 的篩選膠，來自 9 月 21 日的寫作文件，傳到我們手上時沒有道次對照表、沒有日期、也沒有預期大小，所以它可以被展示，但沒辦法被判讀。幾乎每一道的帶都落在同一個高度，這正是我們自己在 learn 步驟裡描述過的可疑樣態。我們把它留在頁面上當作紀錄，但不從它推出任何結論。",
"kw_en":[
"no lane map, no sizes",
"shown but not read",
"we draw no conclusion"
],
"kw_zh":[
"沒有道次表、沒有大小",
"可展示但無法判讀",
"我們不下結論"
],
"q_en":"Why does our own wiki say this gel 'can be shown but not read'?",
"q_zh":"為什麼我們自己的 wiki 說這張膠「可以展示但無法判讀」？",
"opt_en":[
"It reached us with no lane map, no date and no expected sizes",
"The image resolution is too low to resolve the bands",
"The ladder was omitted from the gel entirely",
"The gel was run at the wrong voltage so the bands smeared"
],
"opt_zh":[
"它傳到我們手上時沒有道次對照表、沒有日期、也沒有預期大小",
"影像解析度太低，看不清楚條帶",
"這張膠完全沒有跑階梯標記",
"電壓跑錯，條帶整個糊掉"
],
"ans":0,
"trap_en":"Defending it. The strongest move is to say plainly what is missing and point at the gels that are readable instead.",
"trap_zh":"替它辯護。最好的回答是直接講清楚缺了什麼，再把話題帶到那些讀得出來的膠。",
"dom":"cloning"
},
{
"id":"c05",
"img":"c05.webp",
"tier":1,
"page":"engineering",
"ask_en":"What is this screen, and did it work?",
"ask_zh":"這是什麼篩選？它成功了嗎？",
"a_en":"Twenty-four colonies, L1 to L24, screened for pSTK-EXP1-3P-EEBD-RBS0-Csn:GanA-Gala-L3S2P21 on the EXP forward and Csn reverse primers, with the 1 kb ladder in M. It failed. No lane gives a band at the expected 3535 bp: six lanes show something that runs far below the 3 kb ladder step, and the rest show only low-molecular-weight primer dimer. This is the galactosidase reporter arm, and it is the arm we dropped.",
"a_zh":"二十四個菌落 L1 到 L24，用 EXP 正向與 Csn 反向引子篩選 pSTK-EXP1-3P-EEBD-RBS0-Csn:GanA-Gala-L3S2P21，M 道是 1 kb 階梯。它失敗了。沒有任何一道出現預期的 3535 bp：有六道看得到東西，但跑得遠低於 3 kb 的階梯刻度，其餘各道只有低分子量的引子二聚體。這是半乳糖苷酶報導基因那一支，也是我們後來放棄的那一支。",
"kw_en":[
"expected 3535 bp, none seen",
"primer dimer only",
"the arm we dropped"
],
"kw_zh":[
"預期 3535 bp，一道都沒有",
"只有引子二聚體",
"後來放棄的那一支"
],
"q_en":"What is the result of this 24-colony screen?",
"q_zh":"這個 24 菌落篩選的結果是什麼？",
"opt_en":[
"A failure: no lane reaches the expected 3535 bp, and most show only primer dimer",
"A success: twenty-four of twenty-four colonies carry the construct",
"A partial success: six of twenty-four carry the correct band",
"Inconclusive: the ladder was missing so no size could be assigned"
],
"opt_zh":[
"失敗：沒有任何一道達到預期的 3535 bp，多數只有引子二聚體",
"成功：二十四個菌落全部帶有該構築",
"部分成功：二十四個中有六個帶正確條帶",
"無法判定：因為缺少階梯標記，無法指定大小"
],
"ans":0,
"trap_en":"Counting the six low bands as partial success. They run far below the expected size, which makes them the wrong product, not a weak right one.",
"trap_zh":"把那六條低帶算成部分成功。它們跑得遠低於預期大小，那是錯的產物，不是弱的正確產物。",
"dom":"cloning"
},
{
"id":"c06",
"img":"c06.webp",
"tier":1,
"page":"engineering",
"ask_en":"What decision is being argued on this board, and which half did you follow?",
"ask_zh":"這塊白板上在爭論什麼決定？你們最後走的是哪一半？",
"a_en":"11 June 2026, the two assembly strategies as they were argued. Strategy 1, across the middle, is a MoClo-to-SubtiToolKit linker. Strategy 2, below it, is the kit's own basic-part syntax, with the 1A to 1D transcription-unit overhangs listed on the right. The build follows the lower half of this board, the kit's own syntax, which is why our parts carry STK overhangs rather than linker-adapted MoClo ones.",
"a_zh":"2026 年 6 月 11 日，當時被拿出來爭論的兩種組裝策略。策略 1 在白板中間，是 MoClo 轉接到 SubtiToolKit 的連接子方案。策略 2 在下半部，是直接用套件本身的基本零件語法，右邊列出 1A 到 1D 轉錄單元的黏端。我們實際的建構走的是這塊白板的下半部，也就是套件本身的語法——這就是為什麼我們的零件帶的是 STK 黏端，而不是加了連接子的 MoClo 黏端。",
"kw_en":[
"MoClo linker vs STK syntax",
"1A to 1D overhangs",
"we followed the lower half"
],
"kw_zh":[
"MoClo 連接子對 STK 語法",
"1A 到 1D 黏端",
"我們走下半部"
],
"q_en":"Which strategy did the build actually follow?",
"q_zh":"實際的建構最後採用了哪一個策略？",
"opt_en":[
"Strategy 2, the SubtiToolKit's own basic-part syntax with 1A to 1D overhangs",
"Strategy 1, a MoClo-to-SubtiToolKit linker",
"Neither; the team switched to Gibson assembly instead",
"Both in parallel, one for each protectant"
],
"opt_zh":[
"策略 2，SubtiToolKit 自己的基本零件語法，使用 1A 到 1D 黏端",
"策略 1，MoClo 轉接 SubtiToolKit 的連接子方案",
"兩個都沒有；團隊改用 Gibson 組裝",
"兩個並行，各用於一種保護劑"
],
"ans":0,
"trap_en":"Describing the project as a MoClo build. The overhang syntax is the SubtiToolKit's; MoClo is the thing we decided against on this board.",
"trap_zh":"把這個專題說成 MoClo 建構。黏端語法用的是 SubtiToolKit 的；MoClo 正是在這塊白板上被否決的那一個。",
"dom":"cloning"
},
{
"id":"c07",
"img":"c07.webp",
"tier":1,
"page":"engineering",
"ask_en":"What is this diagram, and what are the sites hidden in the tails for?",
"ask_zh":"這是什麼圖？藏在引子尾巴裡的那些切位是做什麼用的？",
"a_en":"An amplicon map of CcaR, 760 bp, with primer 1 covering bases 1 to 50 and primer 2 covering 711 to 760. Each primer tail carries a BbsI site and a BsaI site. That is the Golden Gate grammar: BbsI cuts at the Level 0 step and BsaI at the Level 1 step, so one amplicon can be used twice without re-ordering primers, and the scar-free overhangs are designed in from the start.",
"a_zh":"這是 CcaR 的擴增片段圖，全長 760 bp，引子 1 涵蓋第 1 到 50 鹼基，引子 2 涵蓋第 711 到 760 鹼基。兩條引子的尾巴裡各藏了一個 BbsI 切位與一個 BsaI 切位。這就是 Golden Gate 的文法：BbsI 在 Level 0 這一步切，BsaI 在 Level 1 這一步切，所以同一段擴增產物不必重新訂引子就能用兩次，無疤痕的黏端一開始就設計進去了。",
"kw_en":[
"amplicon map, 760 bp",
"BbsI and BsaI in the tails",
"two Golden Gate levels"
],
"kw_zh":[
"擴增片段圖 760 bp",
"尾巴裡的 BbsI 與 BsaI",
"兩個 Golden Gate 階層"
],
"q_en":"Why does each primer tail carry both a BbsI and a BsaI site?",
"q_zh":"為什麼每條引子的尾巴裡同時有 BbsI 與 BsaI 切位？",
"opt_en":[
"So one amplicon serves both Golden Gate levels: BbsI at Level 0 and BsaI at Level 1",
"So the fragment can be screened by two different restriction digests",
"So the primers can anneal at two different temperatures",
"So the part can be cloned into either E. coli or B. subtilis vectors"
],
"opt_zh":[
"讓同一段擴增產物可以用在兩個 Golden Gate 階層：Level 0 用 BbsI，Level 1 用 BsaI",
"讓片段可以用兩種不同的限制酶切來檢查",
"讓引子可以在兩種不同溫度下黏合",
"讓這個零件可以選擇接進大腸桿菌或枯草桿菌載體"
],
"ans":0,
"trap_en":"Calling them screening sites. They are assembly sites: the whole point of Golden Gate is that the enzyme cuts outside its own recognition sequence.",
"trap_zh":"把它們說成檢查用的切位。它們是組裝用的：Golden Gate 的重點就是酵素切在自己辨識序列之外。",
"dom":"cloning"
},
{
"id":"c08",
"img":"c08.webp",
"tier":1,
"page":"engineering",
"ask_en":"What is on this plate, and why does the dilution matter?",
"ask_zh":"這個培養皿上是什麼？稀釋倍數為什麼重要？",
"a_en":"pSTK-EXP2-CcaSRv1-AcdS 2.1 on LB agar at a 1 to 2,000,000 dilution. This is the assembled 10 kb light circuit recovered in B. subtilis WB800. The dilution matters because the plate is still crowded with several hundred colonies at two million fold: that is what makes it an efficiency claim and not just a 'it transformed' photo.",
"a_zh":"LB 洋菜上長的是 pSTK-EXP2-CcaSRv1-AcdS 2.1，稀釋倍數是一比兩百萬。這是組裝完成的 10 kb 光控線路在 B. subtilis WB800 中被回收到的證據。稀釋倍數之所以重要，是因為在兩百萬倍稀釋下這盤還是密密麻麻幾百個菌落：這才讓它成為一個效率的說法，而不只是一張「有轉形到」的照片。",
"kw_en":[
"10 kb light circuit in WB800",
"1:2,000,000 dilution",
"hundreds of colonies"
],
"kw_zh":[
"10 kb 光控線路進入 WB800",
"一比兩百萬稀釋",
"數百個菌落"
],
"q_en":"What makes this plate worth showing a judge?",
"q_zh":"這個培養皿值得拿給評審看的原因是什麼？",
"opt_en":[
"A 10 kb construct recovered in WB800 with hundreds of colonies still visible at a 1:2,000,000 dilution",
"It is the shell-side sterility test after a 24 hour run",
"It compares two electroporation voltages on the same construct",
"It shows the colour change produced by the AmilCP reporter"
],
"opt_zh":[
"10 kb 的構築在 WB800 中被回收，而且在一比兩百萬稀釋下仍有數百個菌落",
"這是跑了 24 小時之後的殼側無菌測試",
"它比較同一構築的兩種電穿孔電壓",
"它顯示 AmilCP 報導基因產生的顏色變化"
],
"ans":0,
"trap_en":"Showing a crowded plate without its dilution. Without the dilution factor the picture carries no information about efficiency at all.",
"trap_zh":"拿一盤滿滿的菌落卻不講稀釋倍數。沒有稀釋倍數，這張照片對效率完全沒有任何資訊量。",
"dom":"cloning"
},
{
"id":"c09",
"img":"c09.webp",
"tier":1,
"page":"engineering",
"ask_en":"What is collected in these six panels?",
"ask_zh":"這六個子圖收錄的是什麼？",
"a_en":"The whole output library on one plate: six expression cassettes across the three protectants. A is Csn-AcdS-Histag, one clone at 7762 bp. B is SamyQ-AcdS 2.1-Histag, eight colonies at 1904 bp. C is Csn-LEA14-Histag, one clone at 735 bp. D is SamyQ-LEA14 2.1-Histag, lanes 1 and 4 at 1423 bp. E and F are the two BoPep4 versions, 2.1 and 2.2, with F at 309 bp. Note the honest footnote: the writing document gives 1984 and 7767 where the plate itself is labelled 1904 and 7762, and we carry the plate's own labels.",
"a_zh":"這是把整個輸出端的構築庫放在一張圖上：三種保護劑、六個表現匣。A 是 Csn-AcdS-Histag，一個選殖株，7762 bp。B 是 SamyQ-AcdS 2.1-Histag，八個菌落，1904 bp。C 是 Csn-LEA14-Histag，一個選殖株，735 bp。D 是 SamyQ-LEA14 2.1-Histag，第 1 與第 4 道，1423 bp。E 與 F 是 BoPep4 的 2.1 與 2.2 兩版，F 在 309 bp。要注意我們自己加的誠實註腳：寫作文件寫的是 1984 與 7767，而膠上標的是 1904 與 7762，我們以膠上的標示為準。",
"kw_en":[
"six cassettes, three protectants",
"A to F with their sizes",
"plate labels beat the document"
],
"kw_zh":[
"六個表現匣、三種保護劑",
"A 到 F 各有大小",
"以膠上標示為準"
],
"q_en":"What do the six panels A to F represent?",
"q_zh":"A 到 F 這六個子圖代表什麼？",
"opt_en":[
"Six expression cassettes across the three protectants, each screened by colony PCR",
"Six time points of one bioreactor run",
"Six light conditions tested on the LPA",
"Six salt concentrations tested on Arabidopsis"
],
"opt_zh":[
"橫跨三種保護劑的六個表現匣，每一個都做了菌落 PCR 篩選",
"一次反應器實驗的六個時間點",
"在 LPA 上測試的六種光照條件",
"在阿拉伯芥上測試的六種鹽濃度"
],
"ans":0,
"trap_en":"Missing the size discrepancy. Our own page flags that the writing document and the gel disagree; saying so first is stronger than being caught.",
"trap_zh":"漏掉大小不一致那件事。我們自己的頁面已經標出寫作文件與膠上的數字不同；主動講比被抓到好。",
"dom":"cloning"
},
{
"id":"c10",
"img":"c10.webp",
"tier":1,
"page":"engineering",
"ask_en":"Which module is this, and which lane failed?",
"ask_zh":"這是哪一個模組？哪一道失敗了？",
"a_en":"30 July 2026, the rebuilt chromophore module PtagC-RBS-Ho1:pcyA-L3S2P21, twelve colonies A1 to A12 screened at 1833 bp on the BioBrick prefix and STK-seq reverse primers. A11 is the one failure, carrying only a low smear. A1, A2 and A3 sequenced positive the next day. The chromophore module is what makes the phycocyanobilin that CcaS needs, so without it the light circuit cannot sense anything.",
"a_zh":"2026 年 7 月 30 日，重建的發色團模組 PtagC-RBS-Ho1:pcyA-L3S2P21，十二個菌落 A1 到 A12，用 BioBrick prefix 與 STK-seq 反向引子篩選，預期 1833 bp。A11 是唯一失敗的一道，只有一條低的拖尾。A1、A2、A3 隔天定序確認正確。發色團模組負責做出 CcaS 需要的藻藍膽素，沒有它整條光控線路就什麼都感測不到。",
"kw_en":[
"chromophore module at 1833 bp",
"A11 is the one failure",
"makes PCB for CcaS"
],
"kw_zh":[
"發色團模組 1833 bp",
"A11 是唯一失敗的",
"為 CcaS 製造 PCB"
],
"q_en":"What does this chromophore module do in the circuit?",
"q_zh":"這個發色團模組在整條線路裡的作用是什麼？",
"opt_en":[
"It makes the phycocyanobilin that the CcaS light sensor needs in order to respond to light",
"It is the output cassette that secretes the protectant",
"It is the transcriptional regulator that binds the output promoter",
"It is the terminator that stops read-through into the vector"
],
"opt_zh":[
"它製造 CcaS 光感測器要能對光反應所需要的藻藍膽素（PCB）",
"它是分泌保護劑的輸出匣",
"它是結合輸出啟動子的轉錄調控因子",
"它是防止轉錄讀穿進載體的終止子"
],
"ans":0,
"trap_en":"Forgetting that B. subtilis does not make PCB on its own. Without this module, CcaS is blind.",
"trap_zh":"忘了 B. subtilis 自己做不出 PCB。沒有這個模組，CcaS 是瞎的。",
"dom":"cloning"
},
{
"id":"h01",
"img":"h01.webp",
"tier":1,
"page":"measurement",
"ask_en":"Which two instruments are side by side here, and what is the difference between them?",
"ask_zh":"這裡並排的是哪兩台儀器？它們的差別是什麼？",
"a_en":"Our two in-line photometer builds, drawn at the same scale. Left is the Pro, the beam-splitter design on a tilted tripod stand. Right is the Slim, the fiber design, which puts the fiber collimator and the flow cuvette into one compact housing. The Slim stands about a quarter of the Pro's height. Both sit in the culture loop and read OD600 without anyone taking a sample.",
"a_zh":"我們自製的兩台線上光度計，以同一比例畫在一起。左邊是 Pro，分光鏡式設計，架在傾斜的三腳底座上。右邊是 Slim，光纖式設計，把光纖準直器和流動比色槽整合進一個小機殼。Slim 大約只有 Pro 的四分之一高。兩台都接在菌液迴路上，不用取樣就能讀 OD600。",
"kw_en":[
"Pro, beam splitter",
"Slim, fiber",
"same scale"
],
"kw_zh":[
"Pro 分光鏡",
"Slim 光纖",
"同一比例"
],
"q_en":"What does this figure put side by side?",
"q_zh":"這張圖把什麼東西並排在一起？",
"opt_en":[
"Our two in-line photometer designs at the same scale: the beam-splitter Pro and the fiber-based Slim",
"Our photometer next to the commercial BioDrop benchtop spectrophotometer",
"The first and the last prototype of the bioreactor rig",
"The lumen-side and shell-side ports of the hollow fiber module"
],
"opt_zh":[
"我們兩種線上光度計設計，以同一比例並排：分光鏡式的 Pro 與光纖式的 Slim",
"我們的光度計與市售 BioDrop 桌上型分光光度計",
"生物反應器機組的第一代與最後一代原型",
"中空纖維模組的管腔側與殼側接口"
],
"ans":0,
"trap_en":"Calling the smaller one a commercial instrument. Both of these are ours; the commercial reference is the BioDrop, which is not in this picture.",
"trap_zh":"把比較小的那台說成市售儀器。這兩台都是我們做的；市售的對照是 BioDrop，不在這張圖裡。",
"dom":"hardware"
},
{
"id":"h02",
"img":"h02.webp",
"tier":1,
"page":"hardware-bioreactor",
"ask_en":"What are the two coloured paths in this diagram, and why do they never meet?",
"ask_zh":"這張圖上的兩條顏色路徑各是什麼？它們為什麼不會交會？",
"a_en":"This is bioreactor version 4, the final loop. Pink is the culture loop: the stirred B. subtilis bottle with its pH probe, the pump, the flow meter, the in-line photometer, the pressure transducers, up through the hollow fiber lumens, past the pinch valve and back. Blue is the protectant path, which leaves the shell side of the membrane through the shell Luer valve to its own output bottle. The only way out of the culture is through the 0.2 micrometre fiber wall, so the cells stay in and only the secreted protein leaves.",
"a_zh":"這是生物反應器第四版，也是最終版的迴路圖。粉紅色是菌液迴路：裝 B. subtilis 的攪拌瓶與瓶蓋上的 pH 探針、蠕動幫浦、流量計、線上光度計、壓力感測器，往上穿過中空纖維的管腔，經過夾管閥再回到瓶子。藍色是保護劑的路徑，從薄膜的殼側經殼側 Luer 閥流到自己的收集瓶。菌液唯一的出口是 0.2 微米的纖維孔壁，所以細胞留在裡面，只有分泌出來的蛋白離開。",
"kw_en":[
"pink culture loop",
"blue protectant",
"only exit is the membrane"
],
"kw_zh":[
"粉紅菌液迴路",
"藍色保護劑",
"唯一出口是薄膜"
],
"q_en":"In this final bioreactor loop diagram, what do the pink and blue paths stand for?",
"q_zh":"在這張最終版反應器迴路圖裡，粉紅色與藍色的路徑分別代表什麼？",
"opt_en":[
"Pink is the closed B. subtilis culture loop; blue is the protectant leaving the shell side of the membrane",
"Pink is hot water for sterilisation; blue is the cooling circuit",
"Pink is the feed of fresh medium; blue is the waste line to the drain",
"Pink is the air supply through the filter; blue is the pH dosing line"
],
"opt_zh":[
"粉紅是封閉的 B. subtilis 菌液迴路；藍色是從薄膜殼側離開的保護劑",
"粉紅是滅菌用熱水；藍色是冷卻迴路",
"粉紅是新鮮培養基進料；藍色是排到廢液桶的管線",
"粉紅是經過濾器的供氣；藍色是 pH 加藥管線"
],
"ans":0,
"trap_en":"Describing the blue line as waste. It is the product: the shell-side permeate is what the farm actually uses.",
"trap_zh":"把藍色那條說成廢液。那是產品：殼側透過液才是最後用到田裡的東西。",
"dom":"hardware",
"prio":1
},
{
"id":"h03",
"img":"h03.webp",
"tier":1,
"page":"measurement",
"ask_en":"What does this figure prove, and how strong is that evidence?",
"ask_zh":"這張圖證明了什麼？這個證據有多強？",
"a_en":"The cutaway shows the hollow fiber module: culture runs inside the fiber lumens from feed to retentate, the shell space collects what crosses the 0.2 micrometre wall. Cells are wider than any pore, so they stay in the lumen; the secreted protein crosses. The two plates below are the test: (a) is lumen-side medium and grows colonies, (b) is shell-side medium after a 24 hour run and is clear. Honest limit: this is one plating from one run, not a validated containment claim.",
"a_zh":"剖面圖畫的是中空纖維模組：菌液從進料端進入纖維管腔、從濃縮端出來，殼側空間收集穿過 0.2 微米孔壁的東西。細胞比任何孔都大，所以留在管腔裡；分泌出來的蛋白可以穿過去。下面兩個培養皿就是驗證：(a) 是管腔側培養基，長出菌落；(b) 是跑了 24 小時之後的殼側培養基，是乾淨的。要誠實講清楚的限制：這是一次實驗的一次塗盤，還不足以當成通過驗證的圍堵宣稱。",
"kw_en":[
"lumen keeps the cells",
"shell plate is clear",
"one plating only"
],
"kw_zh":[
"管腔留住細胞",
"殼側培養皿乾淨",
"只做過一次塗盤"
],
"q_en":"What are the two agar plates at the bottom of this figure?",
"q_zh":"這張圖下半部的兩個洋菜培養皿是什麼？",
"opt_en":[
"Lumen-side medium, which grows colonies, and shell-side medium after 24 h, which is clear",
"A before-and-after of the clean-in-place peroxide wash",
"Two electroporation voltages compared for colony yield",
"Medium at pH 5.7 and at pH 7, to test B. subtilis growth"
],
"opt_zh":[
"管腔側培養基（長出菌落）與跑了 24 小時後的殼側培養基（乾淨無菌落）",
"就地清洗過氧化氫沖洗前後的對照",
"兩種電穿孔電壓的菌落數比較",
"pH 5.7 與 pH 7 的培養基，用來測 B. subtilis 生長"
],
"ans":0,
"trap_en":"Overclaiming. Say what it is: one plating, from one run, after 24 hours. It is the only containment evidence the project has.",
"trap_zh":"把話說得太滿。要講清楚它是什麼：一次實驗、24 小時後、一次塗盤。這是整個專題唯一的圍堵證據。",
"dom":"hardware",
"prio":1
},
{
"id":"h04",
"img":"h04.webp",
"tier":1,
"page":"hardware-bioreactor",
"ask_en":"What is on this screen, and which value on it is computed rather than measured?",
"ask_zh":"這個畫面上是什麼？上面哪一個數值是算出來的、不是量出來的？",
"a_en":"The operator dashboard, 4 September 2026, 53 hours into a recording. It carries OD600 with its sample and reference channels, the flow rate, and the feed, retentate and permeate pressures. Transmembrane pressure is the computed one: it comes from the three measured pressures, not from a sensor of its own.",
"a_zh":"這是操作儀表板，2026 年 9 月 4 日，紀錄進行到第 53 小時。上面有 OD600 以及它的樣品與參考通道、流量，還有進料、濃縮、透過三個壓力。跨膜壓差（TMP）是算出來的那一個：它是由那三個量到的壓力推出來的，沒有自己的感測器。",
"kw_en":[
"OD600 plus two channels",
"three measured pressures",
"TMP is computed"
],
"kw_zh":[
"OD600 與兩個通道",
"三個量到的壓力",
"TMP 是算出來的"
],
"q_en":"On this operator dashboard, which quantity is derived from the others rather than read from its own sensor?",
"q_zh":"在這個操作儀表板上，哪一個量是從其他數值推出來的，而不是自己的感測器讀到的？",
"opt_en":[
"Transmembrane pressure, computed from the feed, retentate and permeate pressures",
"The flow rate, computed from the pump dial setting",
"OD600, computed from the pH reading",
"The feed pressure, computed from the permeate pressure"
],
"opt_zh":[
"跨膜壓差，由進料、濃縮與透過三個壓力算出來",
"流量，由幫浦轉盤刻度算出來",
"OD600，由 pH 讀值算出來",
"進料壓力，由透過側壓力算出來"
],
"ans":0,
"trap_en":"Treating TMP as a fourth sensor reading. There is no TMP sensor; it is arithmetic on three real ones.",
"trap_zh":"把 TMP 當成第四個感測器讀值。沒有 TMP 感測器，它是用三個真實讀值算出來的。",
"dom":"hardware",
"prio":1
},
{
"id":"h05",
"img":"h05.webp",
"tier":1,
"page":"engineering",
"ask_en":"What is this part, and whose criticism does it answer?",
"ask_zh":"這個零件是什麼？它回應的是誰提出的問題？",
"a_en":"The 3D printed pinch valve, driven by an STS3215 serial servo, squeezing the silicone culture-return tube. It answers the gap Professor Chang Jo-Shu named in June: the design had no driving force to move product across the membrane. Closing the valve raises transmembrane pressure and pushes permeate out to the shell side. It is one of the two servo valves that make a hands-off harvest possible.",
"a_zh":"這是 3D 列印的夾管閥，由 STS3215 序列伺服機驅動，夾住回流的矽膠管。它回應的是張嘉修教授六月指出的缺口：原本的設計沒有任何驅動力把產物推過薄膜。把閥夾緊會提高跨膜壓差，把透過液推到殼側。這是讓收料可以不用人顧的兩個伺服閥之一。",
"kw_en":[
"pinch valve",
"Prof. Chang's gap",
"raises TMP"
],
"kw_zh":[
"夾管閥",
"張教授指出的缺口",
"提高跨膜壓差"
],
"q_en":"What does closing this valve do?",
"q_zh":"把這個閥夾緊會造成什麼？",
"opt_en":[
"It raises the transmembrane pressure, which drives permeate across the membrane",
"It stops the culture from being contaminated by room air",
"It switches the LED from red to green to induce the circuit",
"It diverts the culture past the photometer so the light path can be cleaned"
],
"opt_zh":[
"提高跨膜壓差，把透過液推過薄膜",
"阻止室內空氣污染菌液",
"把 LED 從紅光切成綠光以誘導線路",
"讓菌液繞過光度計，以便清潔光程"
],
"ans":0,
"trap_en":"Describing it as a safety shut-off. Its job is to create the driving force for harvest, not to isolate the reactor.",
"trap_zh":"把它講成安全切斷閥。它的工作是製造收料所需的驅動力，不是隔離反應器。",
"dom":"hardware"
},
{
"id":"h06",
"img":"h06.webp",
"tier":1,
"page":"engineering",
"ask_en":"What is this valve for, and which side of the membrane does it sit on?",
"ask_zh":"這個閥的用途是什麼？它裝在薄膜的哪一側？",
"a_en":"The automated Luer valve on the shell side, a printed gear on the valve handle driven by a serial servo. It seals the opening from the lumen to the shell until a harvest is wanted, so the vessel keeps its medium and nobody has to stand at the bench to take product off.",
"a_zh":"這是殼側的自動化 Luer 閥，閥把手上裝了列印的齒輪，由序列伺服機驅動。在要收料之前，它把管腔通往殼側的開口封住，所以反應器留得住培養基，也不需要有人守在實驗桌邊收產物。",
"kw_en":[
"shell side",
"servo-driven Luer valve",
"hands-off harvest"
],
"kw_zh":[
"殼側",
"伺服驅動 Luer 閥",
"免顧收料"
],
"q_en":"Where does this automated valve sit and what does it control?",
"q_zh":"這個自動閥裝在哪裡？它控制什麼？",
"opt_en":[
"On the shell side, sealing the lumen-to-shell opening until a harvest is wanted",
"On the air inlet, controlling aeration of the culture bottle",
"On the base feed line, controlling the KOH dose",
"Inside the photometer, switching between the sample and reference beams"
],
"opt_zh":[
"在殼側，在要收料之前封住管腔通往殼側的開口",
"在進氣口，控制菌液瓶的通氣",
"在鹼液管線上，控制 KOH 加藥量",
"在光度計內部，切換樣品光束與參考光束"
],
"ans":0,
"trap_en":"Confusing it with the pinch valve. The pinch valve is on the culture return and makes the pressure; this one is on the shell side and opens the product path.",
"trap_zh":"跟夾管閥搞混。夾管閥在菌液回流端、負責製造壓力；這一個在殼側，負責打開產物的通路。",
"dom":"hardware",
"prio":1
},
{
"id":"h07",
"img":"h07.webp",
"tier":1,
"page":"measurement",
"ask_en":"What is drawn here, and what does each well contain?",
"ask_zh":"這張剖面圖畫的是什麼？每一格裡面有什麼？",
"a_en":"A cross-section of the Light Plate Apparatus, the LPA. The light path runs from an LED at the bottom of each well, through a diffuser, up into the culture tube sitting in the rack above. Each well is its own light program, so six light conditions run at once in one incubator and the green-versus-red comparison is made on cultures grown side by side.",
"a_zh":"這是光照板裝置（LPA）的剖面圖。光的路徑從每一格底部的 LED 出發，穿過擴散片，往上照進上方試管架裡的培養管。每一格都有自己的光照程式，所以同一個培養箱裡可以同時跑六種光照條件，綠光與紅光的比較是在並排培養的菌液上做出來的。",
"kw_en":[
"LPA cross-section",
"LED, diffuser, tube",
"six arms at once"
],
"kw_zh":[
"LPA 剖面",
"LED、擴散片、培養管",
"同時六組條件"
],
"q_en":"What does this cross-section show?",
"q_zh":"這張剖面圖顯示的是什麼？",
"opt_en":[
"The LPA light path: an LED and a diffuser under each well, lighting the culture tube above it",
"The optical path inside the in-line photometer, from LED to sensor",
"A cutaway of the hollow fiber membrane cartridge",
"The layered containment design of the commercial bioreactor"
],
"opt_zh":[
"LPA 的光路：每一格下方有 LED 與擴散片，往上照亮培養管",
"線上光度計內部從 LED 到感測器的光路",
"中空纖維薄膜濾芯的剖面",
"商用反應器的分層圍堵設計"
],
"ans":0,
"trap_en":"Mixing up the LPA with the photometer. The LPA puts light into cultures; the photometer reads light through one.",
"trap_zh":"把 LPA 跟光度計搞混。LPA 是把光打進菌液，光度計是讓光穿過菌液去讀值。",
"dom":"hardware",
"prio":1
},
{
"id":"h08",
"img":"h08.webp",
"tier":1,
"page":"hardware-hydroponics",
"ask_en":"What is this part, and what problem does it solve?",
"ask_zh":"這個零件是什麼？它解決了什麼問題？",
"a_en":"The printed floating plate for the hydroponic boxes: thirteen bores in rows of four, five and four, a handle clipped at each end, and the seed holders that drop into the bores. A fixed plate makes the root depth drift as the medium level falls through a run; a floating plate falls with the level, so the roots stay at one depth. It floats on a closed hollow frame and sits in a pipette tip box.",
"a_zh":"這是水耕盒用的 3D 列印浮板：十三個孔，排成四、五、四三列，兩端各夾一個把手，旁邊是放進孔裡的種子座。固定板會讓根的深度隨著實驗中液面下降而跑掉；浮板會跟著液面一起下沉，所以根一直維持在同一個深度。它靠板下封閉的中空框架浮起來，放在吸管尖盒裡使用。",
"kw_en":[
"floating plate",
"thirteen bores",
"roots stay at one depth"
],
"kw_zh":[
"浮板",
"十三個孔",
"根維持同一深度"
],
"q_en":"Why is this plate designed to float rather than being fixed to the box?",
"q_zh":"這塊板子為什麼設計成會浮動，而不是固定在盒子上？",
"opt_en":[
"So the roots stay at one depth as the medium level falls through a run",
"So the plate can be lifted out for weighing without touching the plants",
"So the plants can be rotated under the light each day",
"So the box can be stacked with other boxes in the growth chamber"
],
"opt_zh":[
"讓根在實驗過程中液面下降時仍維持在同一個深度",
"讓板子可以整個拿起來秤重而不碰到植物",
"讓植物每天可以在燈下換方向",
"讓盒子可以在生長箱裡疊起來"
],
"ans":0,
"trap_en":"Saying it is for convenience. The reason is experimental: a drifting root depth would confound every reading taken over the run.",
"trap_zh":"說它只是為了方便。這是實驗上的理由：根的深度一直跑掉，整段實驗的讀值都會被干擾。",
"dom":"hardware"
},
{
"id":"h09",
"img":"h09.webp",
"tier":1,
"page":"engineering",
"ask_en":"What has failed here, and what did the team change afterwards?",
"ask_zh":"這裡壞掉的是什麼？之後團隊改了什麼？",
"a_en":"A connection post snapped off the base plate of the LPA after the overnight run on the shaker. Two screws had been carrying the load; four bear it now. The honest part: the repaired base has not been back on the shaker, so the fix is not yet proven.",
"a_zh":"LPA 底板上的一根連接柱，在整夜的搖床實驗之後從根部斷掉。原本是兩根螺絲在承受負載，現在改成四根。要誠實講的是：修好的底板還沒有再上過搖床，所以這個修正還沒被驗證過。",
"kw_en":[
"snapped post",
"two screws to four",
"not re-tested on the shaker"
],
"kw_zh":[
"斷掉的連接柱",
"兩根螺絲改四根",
"尚未再上搖床驗證"
],
"q_en":"What does this photo document?",
"q_zh":"這張照片記錄的是什麼？",
"opt_en":[
"A printed connection post that snapped off the LPA base plate during an overnight shaker run",
"A cracked cuvette window in the photometer light path",
"A hollow fiber cartridge that leaked under transmembrane pressure",
"A servo horn that stripped on the pinch valve"
],
"opt_zh":[
"LPA 底板上一根列印的連接柱，在整夜搖床實驗中斷裂",
"光度計光路上破裂的比色槽窗口",
"在跨膜壓差下滲漏的中空纖維濾芯",
"夾管閥上滑牙的伺服機搖臂"
],
"ans":0,
"trap_en":"Hiding the unproven part. The repair is a design change that has not been re-tested; say so before a judge finds it.",
"trap_zh":"把還沒驗證的部分藏起來。這個修正是尚未重測的設計變更；在評審問出來之前自己先講。",
"dom":"hardware",
"prio":1
},
{
"id":"h10",
"img":"h10.webp",
"tier":1,
"page":"hardware-photometer",
"ask_en":"What is being compared, and what is the headline number?",
"ask_zh":"這張圖在比較什麼？關鍵數字是什麼？",
"a_en":"The Pro and the Slim photometers rendered at the same scale, both lit, each with a short tube of culture out of its flow cell. The Slim stands about a quarter of the Pro's height. The size is the point: the Slim is the build a farm or another team could actually put in a loop, and on the silica ladder it is about five times less sensitive than the Pro but just as straight.",
"a_zh":"Pro 與 Slim 兩台光度計以同一比例算圖，兩台都亮著燈，各自有一小段裝著菌液的管子從流動槽接出來。Slim 大約只有 Pro 的四分之一高。尺寸就是重點：Slim 才是農場或別的隊伍真的有辦法接進迴路裡的版本，在二氧化矽梯度上它的靈敏度大約是 Pro 的五分之一，但一樣是直線。",
"kw_en":[
"same scale",
"Slim is a quarter the height",
"five times less sensitive"
],
"kw_zh":[
"同一比例",
"Slim 約四分之一高",
"靈敏度約五分之一"
],
"q_en":"What is the main thing this render is making a point about?",
"q_zh":"這張算圖主要想說明什麼？",
"opt_en":[
"Size: the Slim is about a quarter of the Pro's height, at the same scale",
"Colour: the two builds use different LED wavelengths",
"Cost: the Slim uses a cheaper sensor than the Pro",
"Accuracy: the Slim reads closer to the BioDrop than the Pro does"
],
"opt_zh":[
"尺寸：在同一比例下，Slim 大約只有 Pro 的四分之一高",
"顏色：兩台用的是不同波長的 LED",
"成本：Slim 用的感測器比 Pro 便宜",
"準確度：Slim 的讀值比 Pro 更接近 BioDrop"
],
"ans":0,
"trap_en":"Claiming the Slim is the more accurate build. It is the smaller and more reproducible one; the Pro tracks the BioDrop's slope more closely.",
"trap_zh":"宣稱 Slim 比較準。Slim 是比較小、比較好複製的那一台；在斜率上比較貼近 BioDrop 的是 Pro。",
"dom":"hardware"
},
{
"id":"i01",
"img":"i01.webp",
"tier":1,
"page":"human-practices",
"ask_en":"What is this diagram, and how is it organised?",
"ask_zh":"這張圖是什麼？它是怎麼組織的？",
"a_en":"Our stakeholder map: everyone we engaged with, grouped into four lobes around ReLEAF. Farmers and target customers hold Ms. Chen Hui-Wen, Mr. Chen Ke-Wei and the growers we met; the other lobes hold the academics, the companies and the public bodies. The count stands at 31 after the French Office in Taipei was added on 21 October. It is the map we use to show that the advice came from more than one kind of person.",
"a_zh":"這是我們的利害關係人地圖：所有接觸過的對象，以 ReLEAF 為中心分成四大區塊。農民與目標顧客那一區有陳惠文女士、陳科維先生與我們拜訪過的農友；其他區塊則是學界、業界與公部門。10 月 21 日把法國在台辦事處加進來之後，總數是 31 位。我們用這張圖說明：建議不是只來自同一種人。",
"kw_en":[
"four lobes around ReLEAF",
"31 stakeholders",
"farmers, academics, industry, public bodies"
],
"kw_zh":[
"ReLEAF 周圍四個區塊",
"31 位利害關係人",
"農民、學界、業界、公部門"
],
"q_en":"What is this figure?",
"q_zh":"這張圖是什麼？",
"opt_en":[
"The stakeholder map: everyone the team engaged with, grouped into four categories",
"The influence-interest grid used to prioritise stakeholder attention",
"The evolution map showing how the project design changed over the year",
"The seat map for the judging session"
],
"opt_zh":[
"利害關係人地圖：團隊接觸過的所有對象，分成四大類",
"用來排定關注優先序的影響力—興趣矩陣",
"呈現專題設計整年演變的演化地圖",
"評審會談的座位分配圖"
],
"ans":0,
"trap_en":"Confusing it with the influence-interest grid on the Entrepreneurship page. That one places people by power and interest; this one simply groups who we talked to.",
"trap_zh":"跟創業頁上的影響力—興趣矩陣搞混。那一張是依權力與興趣定位；這一張只是把談過的對象分組。",
"dom":"ihp"
},
{
"id":"i02",
"img":"i02.webp",
"tier":1,
"page":"human-practices",
"ask_en":"What is this, why LINE, and what are the six buttons for?",
"ask_zh":"這是什麼？為什麼用 LINE？那六個按鈕是做什麼的？",
"a_en":"The main menu of 農友助手, our LINE official account. Six functions: Latest News, Product Introduction, Crop Stress Alerts, Crop Assistant, Farmer's Diary and Feedback. We built it because the Farmer Expo and Ms. Chen Hui-Wen's interview told us the same thing: the information exists on government pages and websites, but many smallholders are not comfortable finding it. LINE is already on their phones, so one tap takes them to the right page.",
"a_zh":"這是我們的 LINE 官方帳號「農友助手」的主選單，六個功能：最新消息、產品介紹、壓力警報、作物小幫手、農友日記、意見回饋。我們會做這個，是因為農夫市集與陳惠文女士的訪談都指向同一件事：資訊在政府網頁跟各種網站上都有，但很多小農不習慣去找。LINE 本來就在他們手機裡，點一下就能連到該看的那一頁。",
"kw_en":[
"LINE official account 農友助手",
"six functions",
"farmers already use LINE"
],
"kw_zh":[
"LINE 官方帳號 農友助手",
"六個功能",
"農民本來就在用 LINE"
],
"q_en":"Why did the team build this on LINE rather than as its own app?",
"q_zh":"團隊為什麼把這個做在 LINE 上，而不是自己做一個 app？",
"opt_en":[
"Because smallholders already use LINE, so the information needs no new app to reach them",
"Because LINE is the only platform that allows automated weather alerts in Taiwan",
"Because an app would have required a government licence",
"Because the team could not afford app store fees"
],
"opt_zh":[
"因為小農本來就在用 LINE，資訊不需要再裝一個新 app 才送得到",
"因為在台灣只有 LINE 能做自動天氣警報",
"因為自己做 app 需要政府核可",
"因為團隊付不起 app 商店的費用"
],
"ans":0,
"trap_en":"Presenting it as a technical choice. It is a Human Practices decision: the platform was chosen from what the farmers we met actually use.",
"trap_zh":"把它講成技術選擇。這是人文實踐的決定：平台是根據我們訪談到的農民實際在用什麼而選的。",
"dom":"ihp"
},
{
"id":"i03",
"img":"i03.webp",
"tier":1,
"page":"human-practices",
"ask_en":"What was asked here, how many people answered, and what does the green bar mean?",
"ask_zh":"這題問的是什麼？有多少人回答？綠色那條代表什麼？",
"a_en":"A knowledge question from our booth KAP survey: which region of Taiwan has the highest plant stress. Yilan County, the correct answer, is the tall green bar at 51.6 percent, 32 of 62 respondents. Kaohsiung is 19.4 percent, Taichung 17.7 and Tainan 11.3, all grey. Total responses 62. It measures whether the stress map we showed actually landed, not whether people liked the booth.",
"a_zh":"這是我們攤位 KAP 問卷裡的知識題：台灣哪一個地區的植物逆境最嚴重。正確答案宜蘭縣是最高的綠色長條，51.6%，62 人中有 32 人答對。高雄 19.4%、台中 17.7%、台南 11.3%，都是灰色。總回應數 62。它量的是我們展示的逆境地圖有沒有真的傳達出去，而不是大家喜不喜歡這個攤位。",
"kw_en":[
"booth KAP knowledge question",
"Yilan, 51.6% of 62",
"green is the correct answer"
],
"kw_zh":[
"攤位 KAP 知識題",
"宜蘭，62 人中 51.6%",
"綠色是正確答案"
],
"q_en":"What does the green bar mark in this chart?",
"q_zh":"這張圖裡的綠色長條標的是什麼？",
"opt_en":[
"The correct answer, Yilan County, chosen by 51.6 percent of 62 respondents",
"The region where the team ran its field visits",
"The answer given by the farmers, as opposed to the general public",
"The region with the largest rice-growing area"
],
"opt_zh":[
"正確答案宜蘭縣，62 位受訪者中有 51.6% 選了它",
"團隊進行田間拜訪的地區",
"農民（相對於一般民眾）所給的答案",
"稻作面積最大的地區"
],
"ans":0,
"trap_en":"Reading 51.6 percent as a success without the denominator. Sixty-two responses is a small sample and should be said out loud.",
"trap_zh":"把 51.6% 當成成功卻不講分母。62 份回應是小樣本，要主動講出來。",
"dom":"ihp"
},
{
"id":"i04",
"img":"i04.webp",
"tier":1,
"page":"human-practices",
"ask_en":"Whose survey is this, and what is the weakness of a result like this?",
"ask_zh":"這是誰的問卷結果？這種結果的弱點在哪裡？",
"a_en":"The farmers' KAP results from our public forum: knowledge, attitude and practice all at 80 percent. We also surveyed the speakers, who scored 100 across all three, and the general public, at 90, 95 and 100. The weakness is that these are self-reported post-event scores with no pre-event baseline for this audience, so they measure agreement on the day rather than change. Our elementary school lessons do have a matched pre and post survey, and that is the stronger dataset.",
"a_zh":"這是公眾論壇上農民的 KAP 問卷結果：知識、態度、行為三項都是 80%。我們也調查了講者（三項都是 100%）與一般民眾（90%、95%、100%）。弱點在於：這些是活動後的自評分數，這一群受訪者沒有活動前的基線，所以它量到的是當天的認同度，不是改變量。我們在國小課程那邊才有配對的前後測問卷，那組資料比較紮實。",
"kw_en":[
"forum farmer KAP, all 80%",
"post-event only, no baseline",
"the school lessons have pre and post"
],
"kw_zh":[
"論壇農民 KAP 三項皆 80%",
"只有事後，沒有基線",
"國小課程有前後測"
],
"q_en":"What is the honest limitation of this forum KAP result?",
"q_zh":"這份論壇 KAP 結果誠實來講的限制是什麼？",
"opt_en":[
"It is a post-event self-report with no matched pre-event baseline for this audience",
"The sample was drawn only from the team's own school",
"The questions were asked in English, which farmers could not read",
"The scores were estimated by the team rather than collected"
],
"opt_zh":[
"這是活動後的自評，這群受訪者沒有配對的活動前基線",
"樣本只來自團隊自己的學校",
"問卷是用英文問的，農民看不懂",
"分數是團隊估的，不是實際蒐集來的"
],
"ans":0,
"trap_en":"Quoting a flat 80 percent as impact. Without a baseline it is agreement, not change; point to the pre/post school data for change.",
"trap_zh":"拿一個平平的 80% 當成影響力。沒有基線，那是認同度不是改變；要談改變就指向國小的前後測資料。",
"dom":"ihp"
},
{
"id":"i05",
"img":"i05.webp",
"tier":1,
"page":"human-practices",
"ask_en":"Who is this, and name one thing in the hardware that exists because of him.",
"ask_zh":"這是誰？講出一個因為他而存在的硬體設計。",
"a_en":"Professor Chang Jo-Shu's second visit, 4 September 2026, with the bioreactor on the table. We showed him the new progress and two problems: protectant and B. subtilis coming through the hollow fiber membrane with no driving force, and difficulty interpreting our own data. The pinch valve on the culture return exists because of the gap he named in June: the design had no driving force to push product across the membrane. He also pushed us towards usability, AIoT integration and a replaceable bacterial capsule.",
"a_zh":"這是張嘉修教授 2026 年 9 月 4 日的第二次來訪，桌上就是生物反應器。我們向他說明新的進展，也講了兩個問題：在沒有任何驅動力的情況下保護劑與 B. subtilis 仍會穿過中空纖維膜，以及我們自己的數據難以判讀。菌液回流端的夾管閥之所以存在，就是因為他六月指出的缺口：設計裡沒有任何把產物推過薄膜的驅動力。他也把我們推向易用性、AIoT 整合與可更換的菌種膠囊。",
"kw_en":[
"Prof. Chang Jo-Shu, 4 Sep",
"no driving force across the membrane",
"pinch valve, usability, capsule"
],
"kw_zh":[
"張嘉修教授，9 月 4 日",
"沒有跨膜驅動力",
"夾管閥、易用性、膠囊"
],
"q_en":"Which hardware change came out of Professor Chang's feedback?",
"q_zh":"哪一項硬體改動是出自張教授的建議？",
"opt_en":[
"The pinch valve, which creates the driving force to push product across the membrane",
"The in-line photometer, which replaced hand sampling",
"The floating plate in the hydroponic boxes",
"The light plate apparatus for parallel optogenetic culture"
],
"opt_zh":[
"夾管閥，它製造把產物推過薄膜所需的驅動力",
"線上光度計，取代人工取樣",
"水耕盒裡的浮板",
"做平行光遺傳學培養的光照板裝置"
],
"ans":0,
"trap_en":"Naming a visit without naming what changed. Every IHP photo should come with a before and an after.",
"trap_zh":"只講拜訪了誰，卻沒講改了什麼。每一張人文實踐的照片都應該附上「之前」與「之後」。",
"dom":"ihp",
"prio":1
},
{
"id":"i06",
"img":"i06.webp",
"tier":1,
"page":"human-practices",
"ask_en":"What is on this slide, and what safety decision followed from this meeting?",
"ask_zh":"這張投影片上是什麼？這場會議之後做了什麼安全決定？",
"a_en":"Dr. Jennifer Brophy of Stanford, 18 April. The slide lists the four ways we had considered signalling the bacteria: light, electricity, chemical and sound. Her point on biosafety changed the project: physical containment should be the primary safety mechanism rather than relying on a kill switch. Before, we had planned a kill switch to prevent B. subtilis leakage. After, physical containment became primary, which is why the semi-permeable hollow fiber membrane that retains the cells and passes the protectant is the design we built.",
"a_zh":"這是史丹佛的 Jennifer Brophy 博士，4 月 18 日。投影片上列的是我們當時考慮過的四種對細菌發訊方式：光、電、化學、聲音。她在生物安全上的意見改變了整個專題：實體圍堵應該是主要的安全機制，而不是依賴自殺開關。在那之前，我們打算用自殺開關防止 B. subtilis 外洩；之後，實體圍堵變成主要機制——這就是為什麼我們最後建的是能留住細胞、讓保護劑通過的半透性中空纖維膜。",
"kw_en":[
"Dr. Brophy, four signalling options",
"kill switch out, physical containment in",
"the membrane is the answer"
],
"kw_zh":[
"Brophy 博士，四種發訊選項",
"自殺開關out、實體圍堵in",
"答案是那層薄膜"
],
"q_en":"What changed in the project after this meeting?",
"q_zh":"這場會議之後，專題改變了什麼？",
"opt_en":[
"Physical containment replaced the kill switch as the primary biosafety mechanism",
"The team switched the signal from light to a chemical inducer",
"The team added a second kill switch for redundancy",
"The bacterial chassis was changed from E. coli to B. subtilis"
],
"opt_zh":[
"實體圍堵取代自殺開關，成為主要的生物安全機制",
"團隊把訊號從光改成化學誘導物",
"團隊再加了一個自殺開關做備援",
"宿主從大腸桿菌換成枯草桿菌"
],
"ans":0,
"trap_en":"Saying the kill switch was abandoned outright. The page says physical containment is primary while whether an additional kill switch is necessary is still being evaluated.",
"trap_zh":"說自殺開關被完全放棄。頁面寫的是以實體圍堵為主，是否還需要額外的自殺開關仍在評估。",
"dom":"ihp",
"prio":1
},
{
"id":"i07",
"img":"i07.webp",
"tier":1,
"page":"human-practices",
"ask_en":"What is the slide behind them, and what did this consultation change about how the model and the lab relate?",
"ask_zh":"他們後面那張投影片是什麼？這次諮詢改變了模型與實驗之間的什麼關係？",
"a_en":"Professor Chen pointing at our own slide titled Auto-filling medium. Before this consultation, the mathematical model and the wet-lab experiments were developed as fairly separate components. After it, we set up a feedback loop between the two: test different salt concentrations and treatment durations to get a dose-time-response relationship, and extend the bioreactor testing period so there is enough data to validate the model against. He also pointed us towards Yes Health iFarm for hydroponics.",
"a_zh":"這是陳教授指著我們自己那張標題為「自動補液」的投影片。在這次諮詢之前，數學模型與濕實驗基本上是分開發展的兩塊。之後我們在兩者之間建立回饋迴路：測試不同鹽濃度與處理時長，取得劑量—時間—反應的關係；並且延長反應器的測試時間，讓資料足夠用來驗證模型。他也建議我們去看看「源鮮智慧農場」的水耕系統。",
"kw_en":[
"model and wet lab were separate",
"feedback loop established",
"longer reactor runs for validation"
],
"kw_zh":[
"模型與濕實驗原本分開",
"建立回饋迴路",
"延長反應器實驗以利驗證"
],
"q_en":"What did this consultation change?",
"q_zh":"這次諮詢改變了什麼？",
"opt_en":[
"The model and the wet lab stopped being separate: a feedback loop was set up between them",
"The team switched from Arabidopsis to rice as the model plant",
"The hollow fiber membrane was replaced by a dialysis bag",
"The project dropped heat stress and kept only salinity"
],
"opt_zh":[
"模型與濕實驗不再各做各的：兩者之間建立了回饋迴路",
"團隊把模式植物從阿拉伯芥換成水稻",
"中空纖維膜改成透析袋",
"專題放棄熱逆境，只保留鹽逆境"
],
"ans":0,
"trap_en":"Describing a visit as encouragement. The useful answer names the working practice that changed.",
"trap_zh":"把一次拜訪講成「給我們鼓勵」。有用的回答要講出實際改變的做法。",
"dom":"ihp"
},
{
"id":"i08",
"img":"i08.webp",
"tier":1,
"page":"human-practices",
"ask_en":"Who is speaking here, and name a question from this audience that changed the project.",
"ask_zh":"這裡發言的是誰？講一個來自這群聽眾、並且改變了專題的問題。",
"a_en":"A farmer taking the microphone from the audience at our public forum. Two of their questions changed work on the wiki. One asked how many bioreactors a farm would actually need, which is why the financial projection on the Entrepreneurship page exists. The other asked whether our solution breaks organic certification rules; we researched the organic regulations and confirmed that it cannot be used on certified organic farms. That led to the online interview with Mr. Chen Ke-Wei of the Lanyang River cooperative.",
"a_zh":"這是公眾論壇上一位農民從聽眾席拿起麥克風發言。他們提的兩個問題改變了 wiki 上的工作。一個問的是一座農場到底需要幾台反應器——創業頁上的財務推估就是因此而生。另一個問的是我們的方案會不會牴觸有機認證規定；我們去查了有機法規，確認它不能用在通過認證的有機農場上。這也促成後來與蘭陽溪友善耕作合作社陳科維先生的線上訪談。",
"kw_en":[
"farmer at the public forum",
"how many reactors per farm",
"cannot be used on organic farms"
],
"kw_zh":[
"論壇上的農民",
"一座農場要幾台反應器",
"不能用於有機農場"
],
"q_en":"Which answer came out of a farmer's question at this forum?",
"q_zh":"哪一個答案是出自這場論壇上農民的提問？",
"opt_en":[
"That ReLEAF cannot be applied on certified organic farms, confirmed by researching the organic regulations",
"That the protectant must be applied before the stress, not after",
"That the hollow fiber pore size should be 0.2 micrometres",
"That B. subtilis WB800 is the right chassis for secretion"
],
"opt_zh":[
"ReLEAF 不能用在通過認證的有機農場上，這是查閱有機法規後確認的",
"保護劑必須在逆境之前施用，不能在之後",
"中空纖維的孔徑應該是 0.2 微米",
"B. subtilis WB800 是適合分泌的宿主"
],
"ans":0,
"trap_en":"Only telling the flattering half. The organic finding is a limit on our own market, and saying it first is what makes the engagement credible.",
"trap_zh":"只講好聽的那一半。有機那項發現是對我們自己市場的限制，主動先講才讓這段互動有說服力。",
"dom":"ihp"
},
{
"id":"i09",
"img":"i09.webp",
"tier":1,
"page":"human-practices",
"ask_en":"What is on the screen, and what did this review change about how you explain the twin?",
"ask_zh":"畫面上是什麼？這次檢視改變了你們解釋數位孿生的哪一件事？",
"a_en":"The 15 October call with Professor Chen, showing the 3D model of the bioreactor cabinet. He challenged us to say why ReLEAF needs a specialised bioreactor at all, and gave positive feedback on the real-time interface and the AI chat. Before, we introduced the digital twin through the textbook definitions of digital model, shadow and twin, and explained hardware and software before the application. After, we lead with the agricultural scenario, the inputs, the outputs and the feedback loop, and only then define the twin.",
"a_zh":"這是 10 月 15 日與陳教授的線上會議，畫面上是反應器機櫃的 3D 模型。他要我們說清楚 ReLEAF 到底為什麼需要一台專門的反應器，同時對即時監控介面與 AI 對話介面給了正面評價。在那之前，我們是用數位模型、數位陰影、數位孿生這三個定義來開場，先講硬體與軟體再講應用。之後，我們改成先講農業情境、輸入、輸出與回饋迴路，最後才給數位孿生的定義。",
"kw_en":[
"why a specialised bioreactor at all",
"scenario first, definition last",
"praise for the interface"
],
"kw_zh":[
"為什麼需要專門的反應器",
"先情境、後定義",
"介面獲得肯定"
],
"q_en":"What did the team change about how the Digital Twin is introduced?",
"q_zh":"團隊改變了數位孿生的哪一種介紹方式？",
"opt_en":[
"They lead with the agricultural scenario and the feedback loop, and define the twin afterwards",
"They removed the Digital Twin from the wiki entirely",
"They replaced the dashboard with a printed report for farmers",
"They moved the twin from the Software page to the Hardware page"
],
"opt_zh":[
"改成先講農業情境與回饋迴路，之後才給數位孿生的定義",
"把數位孿生整個從 wiki 上拿掉",
"把儀表板換成給農民的紙本報表",
"把數位孿生從軟體頁搬到硬體頁"
],
"ans":0,
"trap_en":"Treating a communication change as not counting as impact. Judges read an explanation that was rebuilt after expert feedback as real integration.",
"trap_zh":"以為溝通方式的改變不算影響。評審會把「依專家意見重寫的說明」視為真正的整合。",
"dom":"ihp"
},
{
"id":"i10",
"img":"i10.webp",
"tier":1,
"page":"human-practices",
"ask_en":"Where is this, and what did the team learn here that a laboratory could not have told them?",
"ask_zh":"這是在哪裡？團隊在這裡學到了什麼是實驗室裡學不到的？",
"a_en":"Ms. Chen Hui-Wen's farm in Tamsui, crouched in a vegetable bed with students looking at the soil. She is one of the farmers on the stakeholder map, and the visit is where the ReLEAF farmer-facing work comes from: her account of how smallholders actually find information is the reason the 農友助手 LINE account exists, and the field conditions she described are what the deployment questions on the Entrepreneurship page have to answer.",
"a_zh":"這是陳惠文女士在淡水的農場，她蹲在菜畦裡，學生在旁邊一起看土。她是利害關係人地圖上的農民之一，而 ReLEAF 面向農民的工作就是從這次拜訪長出來的：她描述小農實際上怎麼找資訊，是「農友助手」LINE 帳號存在的理由；她講的田間條件，則是創業頁上那些佈署問題必須回答的對象。",
"kw_en":[
"Ms. Chen Hui-Wen, Tamsui farm",
"how smallholders find information",
"led to the LINE account"
],
"kw_zh":[
"陳惠文女士，淡水農場",
"小農怎麼找資訊",
"促成 LINE 帳號"
],
"q_en":"What came out of this farm visit?",
"q_zh":"這次農場拜訪催生了什麼？",
"opt_en":[
"The 農友助手 LINE account, built because smallholders could not easily reach the information that already exists",
"The decision to use Arabidopsis as the model plant",
"The 0.2 micrometre pore size of the hollow fiber membrane",
"The choice of green light rather than red light as the induction signal"
],
"opt_zh":[
"「農友助手」LINE 帳號，因為小農不容易取得其實已經存在的資訊而建立",
"採用阿拉伯芥作為模式植物的決定",
"中空纖維膜 0.2 微米的孔徑",
"選擇綠光而非紅光作為誘導訊號"
],
"ans":0,
"trap_en":"Using a field photo as decoration. Each one should carry the sentence 'and this is what we changed because of it'.",
"trap_zh":"把田間照片當裝飾用。每一張都應該帶著一句「因為這件事，我們改了什麼」。",
"dom":"ihp"
},
{
"id":"m01",
"img":"m01.svg",
"tier":1,
"page":"measurement",
"ask_en":"What is on each axis here, and what are the three traces?",
"ask_zh":"這張圖兩軸各是什麼？三條線分別是什麼？",
"a_en":"Optical density against silica added, over 41 doses. The three traces are our Pro photometer, our Slim photometer and the benchtop BioDrop reference. The Pro is about 5.3 times more sensitive than the Slim. At the top of the ladder the Pro departs 11.5 percent from its own low-range straight line and the Slim departs 2.9 percent, so the Slim is the more linear of the two over the whole range.",
"a_zh":"橫軸是加入的二氧化矽量，縱軸是光密度，一共 41 個加料點。三條線分別是我們的 Pro 光度計、我們的 Slim 光度計，以及桌上型 BioDrop 參考儀。Pro 的靈敏度大約是 Slim 的 5.3 倍。在梯度最上端，Pro 偏離自己低濃度段直線 11.5%，Slim 只偏離 2.9%，所以整個量程看下來 Slim 反而比較線性。",
"kw_en":[
"silica ladder",
"Pro 5.3x the Slim",
"11.5% vs 2.9%"
],
"kw_zh":[
"二氧化矽梯度",
"Pro 是 Slim 的 5.3 倍",
"11.5% 對 2.9%"
],
"q_en":"What does this silica ladder show about the two photometer builds?",
"q_zh":"這張二氧化矽梯度圖說明了兩台光度計的什麼事？",
"opt_en":[
"The Pro is about 5.3 times more sensitive, but the Slim stays straighter at the top of the range",
"Both builds read exactly the same values once the blank is subtracted",
"The Slim saturates before the Pro does",
"Neither build tracks the BioDrop at any concentration"
],
"opt_zh":[
"Pro 的靈敏度約為 5.3 倍，但在量程上端 Slim 比較不偏離直線",
"扣掉空白之後兩台讀出來的數值完全相同",
"Slim 比 Pro 更早飽和",
"兩台在任何濃度下都跟不上 BioDrop"
],
"ans":0,
"trap_en":"Equating sensitivity with accuracy. More sensitive is not more linear, and this figure separates the two.",
"trap_zh":"把靈敏度當成準確度。比較靈敏不等於比較線性，這張圖剛好把兩件事分開。",
"dom":"measurement",
"prio":1
},
{
"id":"m02",
"img":"m02.svg",
"tier":1,
"page":"measurement",
"ask_en":"What is the challenge in this figure, and how much did the gates buy you?",
"ask_zh":"這張圖做的是什麼挑戰測試？那兩道關卡幫你們改善了多少？",
"a_en":"An eleven-minute bubble challenge on the Pro. The amber trace is the raw reading, swinging between 0.74 and 3.19 against a true level of 3.175. The green trace, through both rejection gates, stays flat on the truth. Ungated the worst reading is 2.44 OD away from the truth; gated the worst is 0.016. On the Slim the same change goes from 0.28 to 0.003.",
"a_zh":"這是在 Pro 上做的十一分鐘氣泡挑戰。琥珀色是原始讀值，在 0.74 到 3.19 之間亂跳，真值是 3.175。綠色那條是通過兩道剔除關卡之後的結果，穩穩貼在真值上。沒有關卡時最差的讀值離真值 2.44 OD；有關卡時最差只差 0.016。在 Slim 上同樣的改善是從 0.28 降到 0.003。",
"kw_en":[
"bubble challenge",
"2.44 OD down to 0.016",
"two rejection gates"
],
"kw_zh":[
"氣泡挑戰",
"2.44 OD 降到 0.016",
"兩道剔除關卡"
],
"q_en":"What is the amber trace in this figure?",
"q_zh":"這張圖裡琥珀色那條線是什麼？",
"opt_en":[
"The raw reading during a bubble challenge, before the rejection gates are applied",
"The BioDrop reference measured in parallel",
"The reference channel of the photometer in sensor counts",
"The reading from the Slim build rather than the Pro"
],
"opt_zh":[
"氣泡挑戰期間的原始讀值，也就是還沒套上剔除關卡之前",
"同時並行量測的 BioDrop 參考值",
"光度計參考通道的感測器計數",
"來自 Slim 而非 Pro 的讀值"
],
"ans":0,
"trap_en":"Claiming bubbles are 'handled' in general. This is one controlled challenge on the bench, with its own worst-case numbers; quote them.",
"trap_zh":"籠統地說氣泡「已經處理好了」。這是實驗桌上一次受控的挑戰測試，有自己的最壞值；把數字講出來。",
"dom":"measurement",
"prio":1
},
{
"id":"m03",
"img":"m03.svg",
"tier":1,
"page":"measurement",
"ask_en":"What is this histogram of, and what is wrong with the picture?",
"ask_zh":"這張直方圖統計的是什麼？這張圖透露了什麼問題？",
"a_en":"Where the photometer's reference channel sat across the 434-hour run, in sensor counts from 18 to 36. Of 2671 readings, 91.5 percent fall on an exact integer count, with 1219 of them at 32. That is what a burst returning a single count value looks like, not what an average over sixteen samples looks like. In other words, the reference channel was not really averaging, which is a fault we found in our own data.",
"a_zh":"統計的是 434 小時那次長跑中，光度計參考通道落在哪些值，橫軸是 18 到 36 的感測器計數。2671 筆讀值裡有 91.5% 剛好落在整數上，其中 1219 筆落在 32。這是「一個突發取樣只回傳同一個計數值」的樣子，不是「十六次取樣平均」該有的樣子。換句話說，參考通道其實沒有在做平均——這是我們從自己的資料裡找出來的缺陷。",
"kw_en":[
"reference channel counts",
"91.5% land on integers",
"not really averaging"
],
"kw_zh":[
"參考通道計數",
"91.5% 落在整數",
"其實沒在平均"
],
"q_en":"What does the pile-up of readings on exact integer counts tell you?",
"q_zh":"讀值全部堆在整數計數上，代表什麼？",
"opt_en":[
"The reference channel was returning single burst values, not an average over sixteen samples",
"The culture had stopped growing, so the reading stopped changing",
"The LED had failed and the sensor was reading only dark current",
"The data were rounded to integers when they were written to disk"
],
"opt_zh":[
"參考通道回傳的是單次突發值，不是十六次取樣的平均",
"菌液停止生長，所以讀值不再變化",
"LED 壞掉，感測器只讀到暗電流",
"資料寫入磁碟時被四捨五入成整數"
],
"ans":0,
"trap_en":"Blaming rounding on output. The raw samples are stored; the shape of this histogram is about how the channel was sampled, not how it was printed.",
"trap_zh":"推說是輸出時四捨五入。原始取樣都有存下來；這張直方圖的形狀講的是通道怎麼取樣，不是怎麼列印。",
"dom":"measurement",
"prio":1
},
{
"id":"m04",
"img":"m04.svg",
"tier":1,
"page":"measurement",
"ask_en":"What do the shaded bands mark, and what do they prove?",
"ask_zh":"圖上的陰影區塊標的是什麼？它們證明了什麼？",
"a_en":"Hours 77 to 101 of the 434-hour run, two panels on one time axis. The top is reported OD600 stepping up from about 0.78 to 0.94; the bottom is the reference channel stepping between 32, 32.5 and 33 counts. The shaded bands are every stretch where the reference has left 32. The reported density is higher inside every band and settles again when the reference returns, which proves the steps were an instrument artefact, not growth.",
"a_zh":"這是 434 小時長跑中第 77 到 101 小時，兩個子圖共用同一條時間軸。上面是回報的 OD600，從大約 0.78 一階一階升到 0.94；下面是參考通道在 32、32.5、33 計數之間跳動。陰影標出的是每一段參考值離開 32 的區間。回報的濃度在每一段陰影裡都比較高，等參考值回到 32 就又降回去——這證明那些階梯是儀器假訊號，不是真的生長。",
"kw_en":[
"reference leaves 32 counts",
"OD steps up inside every band",
"artefact, not growth"
],
"kw_zh":[
"參考值離開 32",
"每段陰影裡 OD 都往上跳",
"是假訊號不是生長"
],
"q_en":"What is the relationship these two panels demonstrate?",
"q_zh":"這兩個子圖展示的是什麼關係？",
"opt_en":[
"Reported OD600 steps up exactly when the reference channel leaves 32 counts, so the steps are an artefact",
"OD600 rises whenever the pH falls, so the culture is acidifying as it grows",
"The flow rate drops whenever transmembrane pressure rises",
"The sample channel and the reference channel agree to within one count all run"
],
"opt_zh":[
"回報的 OD600 剛好在參考通道離開 32 計數時往上跳，所以那些階梯是假訊號",
"pH 下降時 OD600 就上升，表示菌液邊長邊酸化",
"跨膜壓差上升時流量就下降",
"整段實驗中樣品通道與參考通道差距都在一個計數以內"
],
"ans":0,
"trap_en":"Reading the steps as real growth. The point of the figure is that they are not; this is the team catching its own instrument out.",
"trap_zh":"把那些階梯當成真的生長。這張圖的重點正好相反：是團隊自己抓到儀器的問題。",
"dom":"measurement",
"prio":1
},
{
"id":"m05",
"img":"m05.svg",
"tier":1,
"page":"measurement",
"ask_en":"What do the two bars represent, and what is the difference between them?",
"ask_zh":"這兩條長條各代表什麼？它們的差別在哪裡？",
"a_en":"Each bar is a whole logged record from the same reactor and the same strain, six days apart. The solid part is what can be read as a growth curve. Run 5, without the gate, is solid for only its first 10.6 hours and hatched for the remaining 27, with three restarts. Run 6, with the gate running, is solid for 37 hours and hatched for the last 4.8, where the beam was lost and flagged. Same hardware, same organism: the difference is the software gate.",
"a_zh":"每一條長條是一整段紀錄，來自同一台反應器、同一株菌，相隔六天。實心的部分是真的可以當成生長曲線來讀的段落。第 5 次實驗沒有開關卡，只有前 10.6 小時是實心，後面 27 小時都是斜線，中間還重開了三次。第 6 次實驗開了關卡，實心有 37 小時，只有最後 4.8 小時是斜線——那是光束失去並被標記的時候。同樣的硬體、同樣的菌：差別就在軟體關卡。",
"kw_en":[
"same reactor six days apart",
"10.6 h usable vs 37 h",
"the gate is the difference"
],
"kw_zh":[
"同一台反應器相隔六天",
"10.6 小時對 37 小時可用",
"差別在關卡"
],
"q_en":"What makes the difference between the two bars?",
"q_zh":"造成這兩條長條差異的原因是什麼？",
"opt_en":[
"The software rejection gate: with it running, far more of the record is readable as a growth curve",
"A different strain of B. subtilis in each run",
"A change from the Pro photometer to the Slim photometer",
"A new hollow fiber cartridge fitted between the two runs"
],
"opt_zh":[
"軟體剔除關卡：開了之後，紀錄中可以當成生長曲線來讀的比例大幅提高",
"兩次實驗用的是不同的 B. subtilis 菌株",
"從 Pro 光度計換成 Slim 光度計",
"兩次實驗之間換了新的中空纖維濾芯"
],
"ans":0,
"trap_en":"Claiming the gate improved the biology. It improved how much of the record is usable, nothing more.",
"trap_zh":"宣稱關卡讓生物表現變好。它只是讓紀錄中可用的比例變高，僅此而已。",
"dom":"measurement",
"prio":1
},
{
"id":"m06",
"img":"m06.webp",
"tier":1,
"page":"measurement",
"ask_en":"What kind of curve is this, and why does it fall rather than rise?",
"ask_zh":"這是什麼樣的曲線？它為什麼是往下掉而不是往上升？",
"a_en":"The ELISA standard curve for His-tagged protein: six concentrations from 0.093 to 3 micrograms per millilitre, in duplicate, plotted as percent B over B-zero. It falls because this is a competitive ELISA: more analyte means less binding of the labelled competitor. The plotted trend is logarithmic, y equals minus 17.984 ln x plus 52.996, R squared 0.9967, but the concentrations in our tables are read off a constrained four-parameter logistic fit, not off this line.",
"a_zh":"這是 His 標籤蛋白的 ELISA 標準曲線：六個濃度，從 0.093 到 3 微克/毫升，各做兩重複，縱軸是 %B/B0。它往下掉是因為這是競爭型 ELISA：待測物越多，帶標記的競爭者結合得越少。圖上畫的趨勢線是對數式，y = −17.984 ln(x) + 52.996，R² = 0.9967；但我們表格裡的濃度是用受限四參數邏輯斯迴歸讀出來的，不是用這條線。",
"kw_en":[
"competitive ELISA",
"%B/B0 falls",
"4PL is what the tables use"
],
"kw_zh":[
"競爭型 ELISA",
"%B/B0 下降",
"表格用的是 4PL"
],
"q_en":"Why does this standard curve go down as concentration goes up?",
"q_zh":"為什麼這條標準曲線隨著濃度升高反而往下掉？",
"opt_en":[
"It is a competitive ELISA, so more analyte means less signal from the labelled competitor",
"The protein degrades at the higher standard concentrations",
"The plate reader saturates above 1 microgram per millilitre",
"The axis is inverted so that the fit can be drawn as a straight line"
],
"opt_zh":[
"這是競爭型 ELISA，待測物越多，帶標記競爭者產生的訊號就越少",
"蛋白在較高濃度的標準品中會降解",
"盤讀機在 1 微克/毫升以上就飽和",
"縱軸是反過來畫的，為了讓擬合看起來是直線"
],
"ans":0,
"trap_en":"Quoting the logarithmic equation as the one that produced our numbers. It is drawn on the figure; the tables come from the four-parameter logistic fit.",
"trap_zh":"把圖上那條對數方程式說成我們數字的來源。那只是畫在圖上的趨勢線；表格裡的數字來自四參數邏輯斯擬合。",
"dom":"measurement",
"prio":1
},
{
"id":"m07",
"img":"m07.webp",
"tier":1,
"page":"measurement",
"ask_en":"What is being tracked here, and where is the peak?",
"ask_zh":"這張圖追蹤的是什麼？高峰在哪裡？",
"a_en":"A DNPH time course of the ACC deaminase activity that B. subtilis WB800 carrying AcdS 2.1 secreted into the shell side of the bioreactor, in nanomoles of alpha-ketobutyrate per millilitre per hour. It is near zero at 1, 6 and 12 hours, peaks at 18 hours at about 31, then falls to about 19 at 24 hours and about 11 at 30. The peak at 18 hours is what sets our harvest timing.",
"a_zh":"這是 DNPH 時間序列，測的是帶 AcdS 2.1 的 B. subtilis WB800 分泌到反應器殼側的 ACC 去胺酶活性，單位是奈莫耳 α-酮丁酸/毫升/小時。1、6、12 小時都接近零，18 小時衝到最高約 31，24 小時掉到約 19，30 小時約 11。18 小時這個高峰就是我們收料時機的依據。",
"kw_en":[
"DNPH time course",
"shell side",
"peak at 18 h"
],
"kw_zh":[
"DNPH 時間序列",
"殼側",
"18 小時達高峰"
],
"q_en":"What does this time course show?",
"q_zh":"這張時間序列顯示了什麼？",
"opt_en":[
"Secreted ACC deaminase activity on the shell side peaking at about 18 hours",
"Optical density of the culture rising through a 72-hour run",
"The pH of the culture bottle falling as the culture grows",
"ELISA concentration of BoPep4 under green and red light"
],
"opt_zh":[
"殼側分泌的 ACC 去胺酶活性，大約在 18 小時達到高峰",
"菌液在 72 小時實驗中光密度的上升",
"菌液瓶 pH 隨著生長而下降",
"綠光與紅光下 BoPep4 的 ELISA 濃度"
],
"ans":0,
"trap_en":"Confusing activity with concentration. DNPH measures what the enzyme does; ELISA measures how much of it is there. The two time courses are not the same figure.",
"trap_zh":"把活性跟濃度搞混。DNPH 測的是酵素做了什麼，ELISA 測的是有多少酵素。這兩條時間序列不是同一張圖。",
"dom":"measurement",
"prio":1
},
{
"id":"m08",
"img":"m08.webp",
"tier":1,
"page":"measurement",
"ask_en":"What technique is this, and what does panel C show?",
"ask_zh":"這是什麼技術？C 圖顯示了什麼？",
"a_en":"An anti-His Western blot of ACC deaminase from B. subtilis, with a mouse monoclonal anti-His antibody. Panel A is culture supernatant from the constitutive Pveg construct with one band at about 37 kilodaltons. Panel B is purification by imidazole elution at 25, 10, 150 and 250 millimolar. Panel C is a bioreactor run sampled from 14 to 44 hours, as lumen-side cell lysate, lumen-side medium and shell-side medium: the lysate lanes are dark and the two medium groups are nearly blank, which is the honest limit on how much we can see in the medium by blot.",
"a_zh":"這是 B. subtilis 產生的 ACC 去胺酶的抗 His Western blot，用小鼠單株抗 His 抗體偵測。A 圖是組成型 Pveg 構築的培養上清液，在約 37 kDa 有一條帶。B 圖是以咪唑沖提純化，濃度依序是 25、10、150、250 mM。C 圖是一次反應器實驗從 14 到 44 小時的取樣，分成管腔側細胞裂解液、管腔側培養基、殼側培養基三組：裂解液那幾道顏色很深，兩組培養基幾乎空白——這就是 blot 在培養基上能看到多少的誠實上限。",
"kw_en":[
"anti-His Western blot",
"band at ~37 kDa",
"medium lanes nearly blank"
],
"kw_zh":[
"抗 His Western blot",
"約 37 kDa 的帶",
"培養基那幾道幾乎空白"
],
"q_en":"In panel C, which lanes carry the dark bands?",
"q_zh":"在 C 圖裡，哪一組的帶是深的？",
"opt_en":[
"The lumen-side cell lysate lanes; the lumen and shell medium lanes are nearly blank",
"The shell-side medium lanes, which is how secretion was proven",
"Every lane equally, because the loading control worked",
"Only the 44-hour lanes, across all three sample types"
],
"opt_zh":[
"管腔側細胞裂解液那幾道；管腔側與殼側培養基幾乎空白",
"殼側培養基那幾道，分泌就是這樣被證明的",
"每一道都一樣深，因為載量對照做得好",
"只有 44 小時那幾道，三種樣品都是"
],
"ans":0,
"trap_en":"Using this blot as proof of secretion into the shell. It is not; the shell-side evidence is the ELISA and DNPH on the permeate, not this blot.",
"trap_zh":"拿這張 blot 當作分泌到殼側的證據。它不是；殼側的證據是透過液的 ELISA 與 DNPH，不是這張 blot。",
"dom":"measurement",
"prio":1
},
{
"id":"m09",
"img":"m09.webp",
"tier":1,
"page":"measurement",
"ask_en":"What are the two traces, and what is the ratio between them?",
"ask_zh":"這兩條線各是什麼？它們之間的比值是多少？",
"a_en":"Pressure drop against flow on 16 August. The grey trace is the loop with a plain tube in place of the module, the background; the blue trace is the same loop with the hollow fiber module fitted. With the module in, the drop is roughly 1.8 to 1.9 times the tubing-only value across dials 12 to 24, reaching 1.87 times at dial 24. Subtracting the background is how we get the membrane's own pressure drop.",
"a_zh":"這是 8 月 16 日的壓降對流量圖。灰色是把模組換成一段直管時的迴路，也就是背景；藍色是同一個迴路裝上中空纖維模組之後。裝上模組之後，在轉盤 12 到 24 的範圍內壓降大約是只有管路時的 1.8 到 1.9 倍，在轉盤 24 時達到 1.87 倍。把背景扣掉，才得到薄膜自己的壓降。",
"kw_en":[
"with and without the module",
"1.8 to 1.9 times",
"subtract the background"
],
"kw_zh":[
"有裝與沒裝模組",
"1.8 到 1.9 倍",
"扣掉背景"
],
"q_en":"What is the grey trace in this figure?",
"q_zh":"這張圖裡灰色那條線是什麼？",
"opt_en":[
"The same loop with a plain tube in place of the membrane module: the background to subtract",
"The theoretical Hagen-Poiseuille prediction for the fibers",
"A second series taken on a different day with the same module",
"The permeate flow on the shell side rather than the lumen flow"
],
"opt_zh":[
"同一個迴路但把薄膜模組換成直管：要扣掉的背景",
"纖維的 Hagen-Poiseuille 理論預測",
"同一個模組在不同日期量的第二組數據",
"殼側透過液的流量，而非管腔流量"
],
"ans":0,
"trap_en":"Quoting the measured drop as the membrane's. Most of it is plumbing until you subtract the background.",
"trap_zh":"把量到的壓降直接說成薄膜的壓降。在扣掉背景之前，大部分其實是管路造成的。",
"dom":"measurement",
"prio":1
},
{
"id":"m10",
"img":"m10.webp",
"tier":1,
"page":"measurement",
"ask_en":"What software is this, what is being measured, and what sets the scale?",
"ask_zh":"這是什麼軟體？在量什麼？比例尺怎麼定的？",
"a_en":"ImageJ, with twelve numbered traces along the primary roots of one agar plate, drawn below a baseline. The root lengths come out of these traces. The scale is set first with Set Scale against the 150 millimetre ruler photographed in every frame, then each root is traced with the segmented line tool and saved in the ROI manager so the measurement can be re-opened and checked.",
"a_zh":"這是 ImageJ，在一盤洋菜培養皿上沿著十二條主根畫了十二條編號軌跡，基準線畫在上方。根長就是從這些軌跡量出來的。比例尺是先用 Set Scale 對著每張照片裡都入鏡的 150 公釐直尺設定，再用分段線工具描每一條根，並存進 ROI 管理員，之後可以重新打開檢查。",
"kw_en":[
"ImageJ segmented line",
"150 mm ruler sets the scale",
"ROI manager"
],
"kw_zh":[
"ImageJ 分段線工具",
"150 公釐直尺定比例",
"ROI 管理員"
],
"q_en":"What sets the scale for these root-length measurements?",
"q_zh":"這些根長測量的比例尺是靠什麼定出來的？",
"opt_en":[
"A 150 mm ruler photographed in every frame, entered through ImageJ's Set Scale dialog",
"The known diameter of the petri dish, assumed to be standard",
"The camera's reported focal length and working distance",
"The spacing of the seed template holes, which is fixed by the 3D print"
],
"opt_zh":[
"每張照片裡都入鏡的 150 公釐直尺，透過 ImageJ 的 Set Scale 對話框輸入",
"培養皿已知的直徑，假設它是標準規格",
"相機回報的焦距與工作距離",
"種子模板孔距，因為那是 3D 列印固定的"
],
"ans":0,
"trap_en":"Saying the dish diameter sets it. The ruler is in the frame on purpose, so the scale travels with the photograph.",
"trap_zh":"說是用培養皿直徑定的。直尺是刻意放進畫面的，比例尺才會跟著照片一起走。",
"dom":"measurement"
},
{
"id":"p01",
"img":"p01.webp",
"tier":1,
"page":"plant",
"ask_en":"What are the rows and columns of this plate grid?",
"ask_zh":"這個培養盤矩陣的行與列各是什麼？",
"a_en":"Eight square agar plates, photographed on harvest day, day 13. The top row is 0 millimolar trehalose and the bottom row is 5 millimolar. The columns are 0, 75, 100 and 150 millimolar NaCl. Seedlings shrink sharply from left to right in both rows, which is the salt dose response; the question the figure is set up to answer is whether the bottom row holds up better than the top at each salt level.",
"a_zh":"八個方形洋菜培養盤，在收樣日第 13 天拍攝。上排是 0 毫莫耳海藻糖，下排是 5 毫莫耳。四個欄位分別是 0、75、100、150 毫莫耳 NaCl。兩排的幼苗都從左到右明顯變小，這是鹽的劑量反應；而這張圖要回答的問題是：在每一個鹽濃度下，下排有沒有撐得比上排好。",
"kw_en":[
"rows are trehalose 0 and 5 mM",
"columns are NaCl 0 to 150 mM",
"day 13 harvest"
],
"kw_zh":[
"上下排是海藻糖 0 與 5 mM",
"欄位是 NaCl 0 到 150 mM",
"第 13 天收樣"
],
"q_en":"What varies down the rows of this plate grid?",
"q_zh":"這個培養盤矩陣的「上下兩排」變動的是什麼？",
"opt_en":[
"Trehalose: 0 mM on top and 5 mM below",
"Treatment timing: pre-treatment on top and post-treatment below",
"Temperature: 22 degrees on top and 37 degrees below",
"Protectant: ACC deaminase on top and BoPep4 below"
],
"opt_zh":[
"海藻糖：上排 0 mM，下排 5 mM",
"施用時機：上排前處理，下排後處理",
"溫度：上排 22 度，下排 37 度",
"保護劑：上排 ACC 去胺酶，下排 BoPep4"
],
"ans":0,
"trap_en":"Reading a plate grid without saying which way the dose runs. Always name the rows and the columns before the conclusion.",
"trap_zh":"讀培養盤矩陣卻不講清楚劑量往哪個方向跑。先把行與列講出來，再講結論。",
"dom":"plant",
"prio":1
},
{
"id":"p02",
"img":"p02.webp",
"tier":1,
"page":"plant",
"ask_en":"What are the four panels, and what does the red box mark?",
"ask_zh":"這四個子圖是什麼？紅框標的是什麼？",
"a_en":"The readouts for the same trehalose set: fresh weight, relative chlorophyll with fresh-weight normalisation, relative chlorophyll without it, and primary root length. The significance brackets sit at 75, 100 and 150 millimolar. The red box marks 100 millimolar NaCl, where 5 millimolar trehalose significantly enhanced salt tolerance. That is the one condition we claim; we do not claim rescue at every salt level.",
"a_zh":"這是同一組海藻糖實驗的量化結果：鮮重、以鮮重標準化的相對葉綠素、未標準化的相對葉綠素，以及主根長。顯著性括號出現在 75、100、150 毫莫耳。紅框標的是 100 毫莫耳 NaCl，在這個條件下 5 毫莫耳海藻糖顯著提升了耐鹽性。我們宣稱的就是這一個條件；我們不會宣稱在每個鹽濃度下都有挽救效果。",
"kw_en":[
"four readouts",
"red box at 100 mM NaCl",
"one condition, not all"
],
"kw_zh":[
"四個量化指標",
"紅框在 100 mM NaCl",
"只有一個條件，不是全部"
],
"q_en":"What does the red box in this figure mark?",
"q_zh":"這張圖裡的紅框標示的是什麼？",
"opt_en":[
"The 100 mM NaCl condition, where 5 mM trehalose significantly improved salt tolerance",
"The control group, which was excluded from the statistics",
"A plate lost to mould contamination",
"The highest salt level tested, where all groups died"
],
"opt_zh":[
"100 mM NaCl 這個條件，5 mM 海藻糖在此顯著提升耐鹽性",
"被排除在統計之外的對照組",
"因為黴菌污染而作廢的培養盤",
"測試過最高的鹽濃度，在此所有組別都死亡"
],
"ans":0,
"trap_en":"Generalising one significant condition into a general claim about trehalose.",
"trap_zh":"把一個顯著的條件推廣成海藻糖的通論。",
"dom":"plant",
"prio":1
},
{
"id":"p03",
"img":"p03.webp",
"tier":1,
"page":"plant",
"ask_en":"What is varied across this grid, and why is one plate marked ND?",
"ask_zh":"這個矩陣變動的是什麼？為什麼有一盤標著 ND？",
"a_en":"Set 9, the main ACC deaminase salinity experiment, trial 1, photographed on day 8. Rows are 0, 75 and 100 millimolar NaCl; columns are no ACCD, pre-treatment, co-treatment and post-treatment. Pre-treatment plates carry the densest green rosettes at every salt level. The 100 millimolar post-treatment plate is marked ND, not determined, because it was excluded for extensive mould growth. TB medium was the negative control, 9 seedlings per condition.",
"a_zh":"這是第 9 組，ACC 去胺酶抗鹽主實驗的第一次試驗，第 8 天拍攝。三排分別是 0、75、100 毫莫耳 NaCl；四欄分別是不加 ACCD、前處理、同時處理、後處理。前處理那一欄在每一個鹽濃度下都有最密最綠的蓮座。100 毫莫耳的後處理盤標著 ND（未判定），因為黴菌長得太嚴重而被排除。陰性對照是 TB 培養基，每個條件 9 株幼苗。",
"kw_en":[
"timing: pre, co, post",
"pre-treatment looks best",
"ND means excluded for mould"
],
"kw_zh":[
"時機：前、同時、後",
"前處理看起來最好",
"ND 是因黴菌排除"
],
"q_en":"Why is one plate in this grid labelled ND?",
"q_zh":"為什麼這個矩陣裡有一盤標著 ND？",
"opt_en":[
"It was excluded because mould grew across the agar",
"The treatment was never applied to that condition",
"The plate was read but the chlorophyll value was negative",
"ND marks the untreated negative control"
],
"opt_zh":[
"因為洋菜上長滿黴菌而被排除",
"那個條件根本沒有施加處理",
"那盤有讀，但葉綠素數值是負的",
"ND 標的是未處理的陰性對照"
],
"ans":0,
"trap_en":"Glossing over the ND. A missing cell in a timing grid is exactly what a judge will ask about; say what happened to it.",
"trap_zh":"把 ND 含糊帶過。時機矩陣裡缺一格正是評審會問的；直接講清楚那一盤發生了什麼事。",
"dom":"plant",
"prio":1
},
{
"id":"p04",
"img":"p04.webp",
"tier":1,
"page":"plant",
"ask_en":"What is the salt ladder here, and what did the top of it tell you?",
"ask_zh":"這裡的鹽濃度梯度是什麼？最高的那一階告訴你們什麼？",
"a_en":"Set 5, trial 2, day 12. Rows are 0, 150 and 250 millimolar NaCl; columns are 0, 1, 5 and 10 millimolar trehalose. Root growth falls and chlorosis gets worse as salt rises. At 250 millimolar the inhibition is so severe that two plates are marked ND and the rest carry only tiny seedlings, so 250 is above the useful window: it leaves no room to see a protectant work.",
"a_zh":"這是第 5 組第二次試驗，第 12 天。三排分別是 0、150、250 毫莫耳 NaCl；四欄是 0、1、5、10 毫莫耳海藻糖。鹽濃度越高，根長越差、黃化越明顯。在 250 毫莫耳下抑制嚴重到有兩盤標 ND，其餘只剩極小的幼苗，所以 250 已經超出可用的視窗：壓得太死，保護劑有沒有效都看不出來。",
"kw_en":[
"0, 150, 250 mM NaCl",
"250 mM is excessive inhibition",
"no room to see rescue"
],
"kw_zh":[
"0、150、250 mM NaCl",
"250 mM 抑制過度",
"看不出挽救空間"
],
"q_en":"What did this figure establish about 250 mM NaCl?",
"q_zh":"這張圖關於 250 mM NaCl 確立了什麼？",
"opt_en":[
"It causes excessive growth inhibition, leaving no window in which a protectant could be seen to work",
"It is the concentration at which trehalose works best",
"It is the concentration used for every later salinity experiment",
"It produces the same phenotype as the unsalted control"
],
"opt_zh":[
"它造成過度的生長抑制，留不下任何能看出保護劑有效的視窗",
"它是海藻糖效果最好的濃度",
"它是後續所有抗鹽實驗採用的濃度",
"它產生的表型跟未加鹽的對照一樣"
],
"ans":0,
"trap_en":"Treating a harsher stress as a better experiment. Choosing the dose that leaves a measurable difference is the design decision this figure records.",
"trap_zh":"以為壓力下得越重實驗越好。選一個還量得出差異的劑量，才是這張圖記錄下來的設計決定。",
"dom":"plant"
},
{
"id":"p05",
"img":"p05.webp",
"tier":1,
"page":"plant",
"ask_en":"What is this rack, and what state are the plants in?",
"ask_zh":"這個試管架是什麼？上面的植物處於什麼狀態？",
"a_en":"The hydroponic tube rack after heat stress, photographed from above with its red labels: ACCD and BoPep4 each at 1/40, 1/60, 1/80 and 1/100, with the controls. Most rosettes are bleached white; only a few of the ACCD groups still carry green leaves. The 'before' photograph of the same layout is on the same page, which is what makes the comparison readable.",
"a_zh":"這是熱逆境之後的水耕試管架，從上方拍攝，紅色標籤標的是 ACCD 與 BoPep4 各自的 1/40、1/60、1/80、1/100 稀釋，以及對照組。多數蓮座已經白化，只有少數 ACCD 組還留著綠葉。同一頁上也有同一排佈局的「處理前」照片，有這張對照，這張圖才讀得出意義。",
"kw_en":[
"after heat, same layout as before",
"most rosettes bleached",
"a few ACCD groups stay green"
],
"kw_zh":[
"熱處理後，與處理前同佈局",
"多數蓮座白化",
"少數 ACCD 組仍綠"
],
"q_en":"What makes this 'after heat' rack photograph readable as evidence?",
"q_zh":"這張「熱處理後」的試管架照片，為什麼能當作證據來讀？",
"opt_en":[
"A photograph of the identical labelled layout before the heat stress is published alongside it",
"Every rosette was weighed individually in the frame",
"The rack carries its own internal temperature logger",
"The image was taken under a calibrated light box"
],
"opt_zh":[
"同一排、同樣標示的佈局在熱逆境之前也拍了一張，一起發表",
"畫面中每一株蓮座都單獨秤過重",
"試管架上有自己的溫度紀錄器",
"照片是在校正過的燈箱下拍的"
],
"ans":0,
"trap_en":"Showing an 'after' photo on its own. A phenotype picture without its matched 'before' or its control row is not evidence.",
"trap_zh":"只拿「處理後」的照片出來。表型照片沒有配對的「處理前」或對照排，就不是證據。",
"dom":"plant",
"prio":1
},
{
"id":"p06",
"img":"p06.webp",
"tier":1,
"page":"measurement",
"ask_en":"What is on the y-axis here, and which group is the one to point at?",
"ask_zh":"這張圖縱軸是什麼？要指出來的是哪一組？",
"a_en":"Fresh weight in grams for twelve groups: BoPep4 at 1/40, 1/60, 1/80 and 1/100 with two controls, at 0 and at 100 millimolar NaCl. The six unsalted groups run between about 0.056 and 0.106 grams; all six salted groups are lower. Within the 100 millimolar block, 1/40 BoPep4 is the only group that stays near the unsalted range, at about 0.051 grams, against 0.029 for 0.1 times MS medium.",
"a_zh":"縱軸是鮮重（公克），共十二組：BoPep4 的 1/40、1/60、1/80、1/100 稀釋加上兩個對照，分別在 0 與 100 毫莫耳 NaCl 下。六個未加鹽的組落在大約 0.056 到 0.106 公克之間；六個加鹽的組全部比較低。在 100 毫莫耳那一區塊裡，1/40 BoPep4 是唯一還留在接近未加鹽範圍的一組，約 0.051 公克，而 0.1 倍 MS 培養基只有 0.029。",
"kw_en":[
"fresh weight, twelve groups",
"1/40 BoPep4 is the only one",
"0.051 vs 0.029 g"
],
"kw_zh":[
"鮮重，十二組",
"只有 1/40 BoPep4",
"0.051 對 0.029 公克"
],
"q_en":"Which group stays nearest the unsalted range under 100 mM NaCl?",
"q_zh":"在 100 mM NaCl 下，哪一組最接近未加鹽的範圍？",
"opt_en":[
"1/40 BoPep4",
"1/100 BoPep4",
"0.1x MS medium alone",
"1/40 WB800 supernatant"
],
"opt_zh":[
"1/40 BoPep4",
"1/100 BoPep4",
"只有 0.1 倍 MS 培養基",
"1/40 WB800 上清液"
],
"ans":0,
"trap_en":"Forgetting the WB800 control. The untransformed supernatant is what separates a protectant effect from a medium effect.",
"trap_zh":"忘了 WB800 對照。未轉形菌的上清液才是把「保護劑效果」跟「培養基效果」分開的關鍵。",
"dom":"plant",
"prio":1
},
{
"id":"p07",
"img":"p07.webp",
"tier":1,
"page":"plant",
"ask_en":"What two methods are compared here, and which one was kept?",
"ask_zh":"這裡比較的是哪兩種方法？最後留下哪一種？",
"a_en":"Four soil pots from above, two methods by two days. The left column is the sub-irrigation accumulation method and the right column is Professor Cheng's top-down wash protocol; the top row is day 0 of salinity and the bottom row day 5. By day 5 the wash pot carries smaller, paler rosettes. The wash protocol produced reproducible salt stress and a visible phenotype; the accumulation method did not, so the wash protocol is the one we kept for soil.",
"a_zh":"四個土耕盆從上方拍攝，兩種方法乘兩個時間點。左欄是底部灌溉累積法，右欄是鄭教授的由上而下沖洗法；上排是施鹽第 0 天，下排是第 5 天。到第 5 天，沖洗法那一盆的蓮座比較小、比較淡。沖洗法做得出可重現的鹽逆境與看得見的表型差異，累積法做不出來，所以土耕的部分我們留下的是沖洗法。",
"kw_en":[
"accumulation vs top-down wash",
"day 0 and day 5",
"wash protocol kept"
],
"kw_zh":[
"累積法對由上而下沖洗法",
"第 0 天與第 5 天",
"留下沖洗法"
],
"q_en":"Which soil salinity method did the team keep?",
"q_zh":"土耕的鹽逆境方法，團隊最後留下哪一種？",
"opt_en":[
"The top-down wash protocol, because it produced reproducible stress and a visible phenotype",
"The sub-irrigation accumulation method, because it is gentler on the roots",
"Neither; the soil arm was dropped after this test",
"Both, alternated between replicates"
],
"opt_zh":[
"由上而下沖洗法，因為它做得出可重現的逆境與看得見的表型",
"底部灌溉累積法，因為它對根比較溫和",
"兩種都沒有；這次測試後土耕這一支就被放棄了",
"兩種都用，在重複之間交替"
],
"ans":0,
"trap_en":"Naming the method without naming who it came from. This protocol came out of a Human Practices visit, which is worth a sentence.",
"trap_zh":"只講方法卻不講它從哪來。這個流程來自一次人文實踐的拜訪，值得用一句話交代。",
"dom":"plant",
"prio":1
},
{
"id":"p08",
"img":"p08.webp",
"tier":1,
"page":"plant",
"ask_en":"What kind of figure is this, and what does it tell a judge about reproducibility?",
"ask_zh":"這是什麼類型的圖？它告訴評審關於可重現性的什麼事？",
"a_en":"The revised hydroponic workflow drawn as one sheet: seedling preparation down the left, then salinity and protectant treatment on racks. It specifies 2.1 millilitres of 0.1x MS per well at 7 days old, changed to 1.9 millilitres at 10 days, a master mix per treatment from WB800, 0.1x MS, ACC deaminase or BoPep4 and PLP at 1/100 for ACCD only, then 2.1 millilitres of master mix plus 0.07 millilitres of 3 molar NaCl per rack, and seven days of observation. The heat arm runs the same way and finishes in a 37 degree incubator. It is the document that lets another team repeat the assay.",
"a_zh":"這是修訂後的水耕實驗流程，畫成一整張圖：左邊是幼苗準備，右邊是試管架上的鹽逆境與保護劑處理。它寫明 7 天大時每孔 2.1 毫升 0.1 倍 MS、10 天大時改成 1.9 毫升；每個處理配一份 master mix，成分是 WB800、0.1 倍 MS、ACC 去胺酶或 BoPep4，PLP 只有 ACCD 那組加 1/100；每個試管架加 2.1 毫升 master mix 與 0.07 毫升 3 莫耳 NaCl，然後觀察七天。熱逆境那一支流程相同，最後放進 37 度培養箱。這就是讓別的隊伍可以重做這個試驗的文件。",
"kw_en":[
"workflow sheet with volumes",
"master mix per treatment",
"lets another team repeat it"
],
"kw_zh":[
"含體積的流程圖",
"每個處理一份 master mix",
"讓別隊能重做"
],
"q_en":"What is the point of publishing this workflow sheet rather than only the results?",
"q_zh":"除了結果之外還把這張流程圖放上去，用意是什麼？",
"opt_en":[
"It carries the volumes, ages and mixes another team needs to repeat the assay",
"It is the statistical analysis plan for the chlorophyll data",
"It records which team member ran each experiment",
"It is the risk assessment required by the safety form"
],
"opt_zh":[
"它載明了別的隊伍重做這個試驗所需要的體積、苗齡與配方",
"它是葉綠素數據的統計分析計畫",
"它記錄每個實驗是由哪位隊員執行的",
"它是安全表格要求的風險評估"
],
"ans":0,
"trap_en":"Calling it a summary graphic. Its value is that it is specific enough to be followed.",
"trap_zh":"把它當成摘要插圖。它的價值在於夠具體、可以照著做。",
"dom":"plant"
},
{
"id":"p09",
"img":"p09.webp",
"tier":1,
"page":"plant",
"ask_en":"What is the headline of this figure, and what do the asterisks mean?",
"ask_zh":"這張圖的主結論是什麼？星號代表什麼？",
"a_en":"Set 7, trial 2: the CH Bio commercial peptide at 0, 75 and 100 millimolar NaCl, as no peptide, co-treatment and post-treatment. Post-treatment gives the most recovery in chlorophyll retention. Panels are fresh weight and relative total chlorophyll in two forms, 9 seedlings per condition, mean plus or minus SEM. Three asterisks is p below 0.001, four is p below 0.0001, ns is not significant.",
"a_zh":"這是第 7 組第二次試驗：CH Bio 市售胜肽在 0、75、100 毫莫耳 NaCl 下，分成不加胜肽、同時處理、後處理三組。後處理在葉綠素保留上的挽救效果最好。子圖是鮮重與兩種形式的相對總葉綠素，每個條件 9 株幼苗，呈現平均值 ± SEM。三顆星是 p 小於 0.001，四顆星是 p 小於 0.0001，ns 是不顯著。",
"kw_en":[
"CH Bio peptide timing",
"post-treatment best for chlorophyll",
"*** is p<0.001"
],
"kw_zh":[
"CH Bio 胜肽施用時機",
"後處理葉綠素最好",
"*** 是 p<0.001"
],
"q_en":"Which treatment timing gave the most chlorophyll recovery in this trial?",
"q_zh":"在這次試驗中，哪一個施用時機的葉綠素挽救效果最好？",
"opt_en":[
"Post-treatment, applied after the salt stress",
"Pre-treatment, applied before the salt stress",
"Co-treatment, applied at the same time as the salt",
"All three were equal within error"
],
"opt_zh":[
"後處理，在鹽逆境之後施用",
"前處理，在鹽逆境之前施用",
"同時處理，與鹽同時施用",
"三者在誤差範圍內相同"
],
"ans":0,
"trap_en":"Carrying one protectant's best timing over to another. ACC deaminase did best as pre-treatment; the CH Bio peptide did best as post-treatment. They are different figures.",
"trap_zh":"把一種保護劑的最佳時機套到另一種上。ACC 去胺酶是前處理最好，CH Bio 胜肽是後處理最好。那是不同的圖。",
"dom":"plant"
},
{
"id":"p10",
"img":"p10.webp",
"tier":1,
"page":"plant",
"ask_en":"What does this timeline specify, and on which day does the stress land?",
"ask_zh":"這條時間軸規定了什麼？逆境在第幾天施加？",
"a_en":"The experimental design for the ACC deaminase and LEA14 salinity runs. Day 0 stratify at 4 degrees, day 4 grow on to 7 days old, day 11 pre-treatment with three sprays, day 12 co-treatment with three sprays of 75 or 100 millimolar NaCl on the stress groups, day 13 post-treatment, then day 20 after seven days of observation: leaf area, chlorophyll extraction, fresh weight, MDA, total protein and relative gene expression. The salt lands on day 12, which is what defines pre, co and post.",
"a_zh":"這是 ACC 去胺酶與 LEA14 抗鹽實驗的設計。第 0 天 4 度春化，第 4 天開始生長到 7 天大，第 11 天前處理噴三次，第 12 天同時處理、對逆境組噴三次 75 或 100 毫莫耳 NaCl，第 13 天後處理，第 20 天在七天觀察之後收樣：葉面積、葉綠素萃取、鮮重、MDA、總蛋白與相對基因表現。鹽是第 12 天下去的，前處理、同時處理、後處理就是以這一天為基準定義的。",
"kw_en":[
"salt lands on day 12",
"pre day 11, post day 13",
"seven days of observation"
],
"kw_zh":[
"第 12 天施鹽",
"前處理第 11 天、後處理第 13 天",
"觀察七天"
],
"q_en":"What fixes the meaning of pre-, co- and post-treatment in this design?",
"q_zh":"在這個設計裡，是什麼定義了前處理、同時處理與後處理？",
"opt_en":[
"The day the salt is applied, day 12: pre is day 11 and post is day 13",
"The age of the seedlings when they are moved to the growth chamber",
"Whether the protectant is sprayed or added to the medium",
"The number of sprays given, which differs between the three arms"
],
"opt_zh":[
"施鹽的那一天，也就是第 12 天：前處理是第 11 天，後處理是第 13 天",
"幼苗移進生長箱時的苗齡",
"保護劑是用噴的還是加進培養基",
"噴灑的次數，三組各不相同"
],
"ans":0,
"trap_en":"Describing the timings without anchoring them to the stress day. The whole design hangs on that one date.",
"trap_zh":"講時機卻沒有把它們錨定在施加逆境的那一天。整個設計就掛在那一個日期上。",
"dom":"plant",
"prio":1
},
{
"id":"q01",
"img":"0316beea2c6c.avif",
"dir":"reg",
"tier":3,
"part":"BBa_261XH2RS",
"ask_en":"The part is 1693 bp. This map says 3792. Where did the rest come from?",
"ask_zh":"這個部件是 1693 bp，圖上卻寫 3792。多出來的是什麼？",
"a_en":"The map is the whole plasmid, not the part. The insert is the light-sensing unit: PliaG, R0-RBS, ccaS-m3, then the B0015 double terminator. That is the 1693 bp we deposited. Everything else is pSTK-1B backbone, the bla CDS and a high-copy ColE1 origin, so it is kept in E. coli on ampicillin. The name still carries sfGFP from the parent dropout vector.",
"a_zh":"圖畫的是整個質體，不是部件本身。插入片段是光感測單元：PliaG、R0-RBS、ccaS-m3，再接 B0015 雙終止子，這就是我們存放的 1693 bp。其餘全是 pSTK-1B 骨架：bla CDS 和高拷貝 ColE1 起點，所以在大腸桿菌裡用安比西林篩選。構築名稱裡仍留著母載體的 sfGFP 字樣。",
"kw_en":[
"insert only is deposited",
"1693 of 3792 bp",
"bla plus ColE1 backbone"
],
"kw_zh":[
"只存放插入片段",
"3792 中的 1693 bp",
"bla 加 ColE1 骨架"
],
"q_en":"The construct name reads pSTK-1B-sfGFP. What does sfGFP mean here?",
"q_zh":"構築名稱寫著 pSTK-1B-sfGFP，這裡的 sfGFP 是什麼意思？",
"opt_en":[
"It names the parent dropout vector; the sfGFP cassette was replaced by this insert",
"sfGFP is co-expressed as a reporter of ccaS-m3 activity",
"sfGFP is translationally fused to the C-terminus of CcaS-m3",
"sfGFP sits on the backbone as a transformation control"
],
"opt_zh":[
"那是母載體 dropout 的名字；sfGFP 卡匣已被這段插入片段取代",
"sfGFP 與 ccaS-m3 共同表達，作為活性報導基因",
"sfGFP 以轉譯融合方式接在 CcaS-m3 的 C 端",
"sfGFP 留在骨架上作為轉型對照"
],
"ans":0,
"trap_en":"Reading sfGFP in the construct name as a reporter that is still present in this plasmid.",
"trap_zh":"把構築名稱裡的 sfGFP 當成這個質體裡還存在的報導基因。",
"dom":"registry"
},
{
"id":"q02",
"img":"2ea9a37bd6c1.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26NXOP7S",
"ask_en":"This is not a SubtiToolKit vector. What is it, and why use it?",
"ask_zh":"這不是 SubtiToolKit 的載體。那是什麼？為什麼用它？",
"a_en":"It is Csn-AcdS-6xHis sitting in pGEM-T Easy, 4212 bp in total. You can see AmpR, the ColE1 ori, an f1 ori, lacZ-alpha split across the cloning site, and T7 and SP6 promoters flanking the insert. It is a holding step: PCR the coding sequence, confirm it here by blue-white screening and T7/SP6 colony PCR, then take the verified fragment into Golden Gate. No sfGFP dropout is involved.",
"a_zh":"這是 Csn-AcdS-6xHis 放在 pGEM-T Easy 裡，全長 4212 bp。圖上看得到 AmpR、ColE1 起點、f1 起點、被選殖位點切開的 lacZ-alpha，以及兩側的 T7 與 SP6 啟動子。它只是暫存步驟：先 PCR 出編碼序列，用藍白篩選和 T7/SP6 菌落 PCR 在這裡確認，再把驗證過的片段帶進 Golden Gate。這裡沒有 sfGFP dropout。",
"kw_en":[
"pGEM-T Easy, 4212 bp",
"blue-white on lacZ-alpha",
"entry step before Golden Gate"
],
"kw_zh":[
"pGEM-T Easy，4212 bp",
"lacZ-alpha 藍白篩選",
"進 Golden Gate 前的暫存"
],
"q_en":"How were correct clones picked in this vector?",
"q_zh":"在這個載體裡，正確的選殖株是怎麼挑出來的？",
"opt_en":[
"White colonies from lacZ-alpha disruption, then colony PCR with T7 and SP6",
"White colonies from the pSTK sfGFP dropout being replaced",
"Green versus red light screening of the CcaSR output",
"Erythromycin selection after transformation into B. subtilis"
],
"opt_zh":[
"lacZ-alpha 被破壞而產生白色菌落，再用 T7 與 SP6 做菌落 PCR",
"pSTK 的 sfGFP dropout 被取代而產生白色菌落",
"用綠光與紅光篩選 CcaSR 的輸出",
"轉型進枯草桿菌後用紅黴素篩選"
],
"ans":0,
"trap_en":"Assuming every entry clone in this project used the pSTK sfGFP dropout for white-colony screening.",
"trap_zh":"以為這個專案裡每個入門選殖株都是用 pSTK 的 sfGFP dropout 來做白色菌落篩選。",
"dom":"registry"
},
{
"id":"q03",
"img":"312e8b798260.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26D5AX7S",
"ask_en":"Why is this map 7191 bp when the deposited part is 1093 bp?",
"ask_zh":"存放的部件是 1093 bp，為什麼這張圖是 7191 bp？",
"a_en":"Because the drawing is the whole plasmid. The insert is pVeg, RiboJ, R0-RBS, SamyQ, LEA14 2.1 with a 6xHis, and B0015, which is the 1093 bp we deposited. The other 6098 bp is the pSTK-EXP1 backbone: Erm from the STK124 part, the bla CDS, repB, ColE1 and a truncated pBR322 ori. That same 6098 bp backbone is under every EXP1 map in this set.",
"a_zh":"因為圖畫的是整個質體。插入片段是 pVeg、RiboJ、R0-RBS、SamyQ、帶 6xHis 的 LEA14 2.1，再接 B0015，就是我們存放的 1093 bp。其餘 6098 bp 是 pSTK-EXP1 骨架：來自 STK124 的 Erm、bla CDS、repB、ColE1 和截短的 pBR322 起點。這組圖裡每張 EXP1 地圖下面都是同樣的 6098 bp 骨架。",
"kw_en":[
"1093 bp insert",
"6098 bp EXP1 backbone",
"Erm plus bla on the map"
],
"kw_zh":[
"1093 bp 插入片段",
"6098 bp EXP1 骨架",
"圖上同時有 Erm 與 bla"
],
"q_en":"The map shows both an Erm cassette and a bla CDS. Which one selects in B. subtilis?",
"q_zh":"圖上同時有 Erm 卡匣與 bla CDS。在枯草桿菌裡是靠哪一個篩選？",
"opt_en":[
"Erythromycin; bla is the E. coli marker on the shuttle backbone",
"Ampicillin, because bla is the larger and more prominent CDS",
"Chloramphenicol, as on the Level 0 entry vector",
"Both, since the shuttle backbone works the same way in each host"
],
"opt_zh":[
"紅黴素；bla 是穿梭骨架上給大腸桿菌用的標記",
"安比西林，因為 bla 是圖上比較大、比較顯眼的 CDS",
"氯黴素，和 Level 0 入門載體一樣",
"兩者皆是，因為穿梭骨架在兩個宿主裡作用相同"
],
"ans":0,
"trap_en":"Seeing bla on the map and calling the construct an ampicillin plasmid in B. subtilis.",
"trap_zh":"看到圖上有 bla，就說這個構築在枯草桿菌裡是安比西林質體。",
"dom":"registry"
},
{
"id":"q04",
"img":"796dddbd81cc.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26J0GJGZ",
"ask_en":"Point at the insert here and tell me what the rest of the plasmid is.",
"ask_zh":"指出這裡的插入片段，其餘的質體是什麼？",
"a_en":"The insert is the short run near the left: a small SamyQ arrow, then LEA14 2.1-Histag with the 6xHis marked under it. That is 564 bp of a 2645 bp plasmid. The rest is pSTK-0C, the Level 0 entry vector: a chloramphenicol acetyltransferase CDS drawn as two arrows because it straddles the point where the circle was cut open for drawing, plus a high-copy ColE1 origin.",
"a_zh":"插入片段在偏左的短段：一個小的 SamyQ 箭頭，接著是 LEA14 2.1-Histag，下面標著 6xHis。那是 2645 bp 質體裡的 564 bp。其餘是 Level 0 入門載體 pSTK-0C：一個氯黴素乙醯轉移酶 CDS 被畫成兩個箭頭，因為它跨過了為了畫圖而把環狀質體切開的那一點，另外還有高拷貝 ColE1 起點。",
"kw_en":[
"564 bp of 2645 bp",
"pSTK-0C, chloramphenicol",
"CAT split by the cut point"
],
"kw_zh":[
"2645 中的 564 bp",
"pSTK-0C，氯黴素",
"CAT 被切開點分成兩段"
],
"q_en":"Why does the chloramphenicol acetyltransferase appear twice on this map?",
"q_zh":"為什麼氯黴素乙醯轉移酶在圖上出現兩次？",
"opt_en":[
"It is one CDS, split by where the circular plasmid was linearised for the drawing",
"There are two copies, giving a higher level of chloramphenicol resistance",
"One is CAT and the other is a second, unrelated resistance marker",
"The clone carries a tandem duplication picked up during cloning"
],
"opt_zh":[
"那是一個 CDS，被畫圖時把環狀質體線性化的位置切成兩段",
"有兩份拷貝，可以提高氯黴素抗性",
"一個是 CAT，另一個是第二個不相干的抗性標記",
"這個選殖株在選殖過程中產生了串聯重複"
],
"ans":0,
"trap_en":"Counting the two arrows as two separate genes rather than one CDS across the linearisation point.",
"trap_zh":"把兩個箭頭算成兩個基因，而不是一個跨過線性化位置的 CDS。",
"dom":"registry"
},
{
"id":"q05",
"img":"7aa19e0d0524.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26TOGLX3",
"ask_en":"What is this, and what separates it from the LEA14 map next to it?",
"ask_zh":"這是什麼？它和旁邊那張 LEA14 地圖差在哪裡？",
"a_en":"Same Level 0 vector, different cargo. SamyQ, then an AcdS 2.1-Histag arrow with the 6xHis marked beneath, 1125 bp deposited inside a 3206 bp plasmid. The backbone is identical to the LEA14 one, chloramphenicol acetyltransferase and the ColE1 origin. Apart from the gene name on the arrow, the thing that separates them is total length: AcdS is about 560 bp longer than LEA14.",
"a_zh":"同一個 Level 0 載體，不同的貨物。SamyQ 之後是 AcdS 2.1-Histag 箭頭，下面標著 6xHis，3206 bp 質體裡存放了 1125 bp。骨架和 LEA14 那張完全一樣：氯黴素乙醯轉移酶和 ColE1 起點。除了箭頭上的基因名稱，分辨兩者的就是總長度：AcdS 比 LEA14 長約 560 bp。",
"kw_en":[
"1125 bp of 3206 bp",
"same pSTK-0C backbone",
"length is the difference"
],
"kw_zh":[
"3206 中的 1125 bp",
"相同的 pSTK-0C 骨架",
"差別在長度"
],
"q_en":"What does the 2.1 on the AcdS arrow refer to?",
"q_zh":"AcdS 箭頭上的 2.1 是指什麼？",
"opt_en":[
"A recoded version: 12 of the first 15 acdS codons were changed to open up the mRNA start",
"The second clone picked from the first plate",
"Version 2 of the SnapGene map file, revision 1",
"An insert of about 2.1 kb"
],
"opt_zh":[
"重新編碼的版本：acdS 前 15 個密碼子中有 12 個被改過，以打開 mRNA 起始端的結構",
"第一塊培養皿上挑出的第二個選殖株",
"SnapGene 地圖檔的第 2 版、第 1 次修訂",
"大約 2.1 kb 的插入片段"
],
"ans":0,
"trap_en":"Reading 2.1 as a size in kilobases or as a clone number rather than a sequence variant.",
"trap_zh":"把 2.1 讀成 kb 大小或選殖株編號，而不是序列變體。",
"dom":"registry"
},
{
"id":"q06",
"img":"8349ecd5ea36.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26PGPSGK",
"ask_en":"The same picture sits on two part pages. Which page does it actually match?",
"ask_zh":"同一張圖出現在兩個部件頁面上。它其實對應哪一個？",
"a_en":"It is the Level 1 output unit in pSTK-1D: PcpcG2-veg, EEBD, R0-RBS, Csn-AcdS-Histag with 6xHis, and B0015, on a bla and ColE1 backbone, 3857 bp total. Take off the 2108 bp pSTK-1D backbone and the insert is 1749 bp, which is BBa_26PGPSGK. The other page, BBa_26Q3LKZU, is listed at 2617 bp, 868 bp larger. The map fits the corrected deposit, not the older one.",
"a_zh":"這是 pSTK-1D 裡的 Level 1 輸出單元：PcpcG2-veg、EEBD、R0-RBS、帶 6xHis 的 Csn-AcdS-Histag，再接 B0015，骨架是 bla 與 ColE1，全長 3857 bp。扣掉 2108 bp 的 pSTK-1D 骨架，插入片段是 1749 bp，也就是 BBa_26PGPSGK。另一個頁面 BBa_26Q3LKZU 登記 2617 bp，多了 868 bp。這張圖對應的是修正後的存放版本，不是舊的那個。",
"kw_en":[
"3857 minus 2108 backbone",
"insert is 1749 bp",
"matches the corrected deposit"
],
"kw_zh":[
"3857 減 2108 骨架",
"插入片段 1749 bp",
"對應修正後的版本"
],
"q_en":"What are the extra 868 bp in BBa_26Q3LKZU?",
"q_zh":"BBa_26Q3LKZU 多出來的 868 bp 是什麼？",
"opt_en":[
"The 1045 bp third-party BBa_254UKC9E, PcpcG2 plus an sfGFP reporter, where the team's own 177 bp PcpcG2-veg belongs",
"An sfGFP dropout that was never excised from the pSTK-1D vector",
"A second copy of the EEBD-RBS0 regulatory region",
"The pSTK-1D backbone mistakenly counted into the part length"
],
"opt_zh":[
"1045 bp 的第三方部件 BBa_254UKC9E，也就是 PcpcG2 加一個 sfGFP 報導基因，取代了團隊自己的 177 bp PcpcG2-veg",
"pSTK-1D 載體裡沒切掉的 sfGFP dropout",
"多了一份 EEBD-RBS0 調控區",
"把 pSTK-1D 骨架誤算進部件長度"
],
"ans":0,
"trap_en":"Assuming one figure on two pages means the two pages hold the same construct.",
"trap_zh":"以為同一張圖放在兩個頁面上，就代表兩個頁面是同一個構築。",
"dom":"registry"
},
{
"id":"q07",
"img":"9d5aa3d1fdfd.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26XVQ3FS",
"ask_en":"Walk me left to right across the insert on this map.",
"ask_zh":"請從左到右講一遍這張圖上的插入片段。",
"a_en":"From the left edge: pVeg, RiboJ, the R0-RBS and its scar, SamyQ, then the AcdS 2.1-Histag arrow, then the B0015 double terminator. That is the 1654 bp deposited part. After it comes the pSTK-EXP1 backbone, Erm from the STK124 part, bla, repB, ColE1 and a truncated pBR322 ori, for 7752 bp total. The map shows order and annotation, not a sequencing read.",
"a_zh":"從左邊開始：pVeg、RiboJ、R0-RBS 和它的 scar、SamyQ，接著是 AcdS 2.1-Histag 箭頭，然後是 B0015 雙終止子。那就是存放的 1654 bp。再來是 pSTK-EXP1 骨架：來自 STK124 的 Erm、bla、repB、ColE1 和截短的 pBR322 起點，全長 7752 bp。圖顯示的是順序與註解，不是定序結果。",
"kw_en":[
"pVeg RiboJ RBS0 SamyQ",
"1654 bp insert",
"annotation not sequencing"
],
"kw_zh":[
"pVeg RiboJ RBS0 SamyQ",
"1654 bp 插入片段",
"是註解不是定序"
],
"q_en":"This plasmid is 7752 bp and the Csn version of the same unit is 7767. What is the 15 bp?",
"q_zh":"這個質體是 7752 bp，同一單元的 Csn 版本是 7767。那 15 bp 是什麼？",
"opt_en":[
"Csn is 108 bp and SamyQ is 93 bp, so swapping the signal peptide costs 15 bp",
"Only the Csn version carries the C-terminal 6xHis tag",
"AcdS 2.1 has five extra recoded codons compared with wild-type acdS",
"The Csn version uses a longer terminator than B0015"
],
"opt_zh":[
"Csn 是 108 bp、SamyQ 是 93 bp，換訊號胜肽就差 15 bp",
"只有 Csn 版本帶 C 端的 6xHis 標籤",
"AcdS 2.1 比野生型 acdS 多了五個重新編碼的密碼子",
"Csn 版本用的終止子比 B0015 長"
],
"ans":0,
"trap_en":"Treating the two signal peptides as interchangeable in length as well as in function.",
"trap_zh":"以為兩個訊號胜肽不只功能可互換，長度也一樣。",
"dom":"registry"
},
{
"id":"q08",
"img":"bb80d9f09143.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26RF0X2E",
"ask_en":"What does this growth curve settle, and what does it leave open?",
"ask_zh":"這條生長曲線解決了什麼？又留下了什麼沒解決？",
"a_en":"OD600 of WB800 carrying the CcaSR system, red 100% on the left and green 100% on the right, read at 2, 4, 6, 8 and 24 hours. Both end in the same place, 1.026 and 1.017, against a blank of 0.057 to 0.061. So green light does not cost growth. It says nothing about expression or secretion. Red is n=1, and nothing was read between 8 and 24 hours.",
"a_zh":"帶有 CcaSR 系統的 WB800 的 OD600，左邊紅光 100%、右邊綠光 100%，在 2、4、6、8 和 24 小時讀取。兩邊最後落在同一個地方，1.026 與 1.017，空白值是 0.057 到 0.061。所以綠光不會損失生長。它對表達或分泌沒有任何說明。紅光只有 n=1，而且 8 到 24 小時之間沒有量測。",
"kw_en":[
"1.026 red, 1.017 green",
"growth cost only",
"red is n=1"
],
"kw_zh":[
"紅光 1.026、綠光 1.017",
"只談生長代價",
"紅光只有 n=1"
],
"q_en":"What does the straight segment from 8 h to 24 h represent?",
"q_zh":"從 8 小時到 24 小時那段直線代表什麼？",
"opt_en":[
"Nothing was measured in between; it is a line joining two points",
"Steady exponential growth continued at a constant rate",
"The culture had entered stationary phase",
"Hourly readings were taken and the points overlap at this scale"
],
"opt_zh":[
"中間沒有量測；那只是連接兩個點的直線",
"指數生長以固定速率持續進行",
"菌液已進入穩定期",
"其實每小時都有讀值，只是在這個比例尺下點重疊了"
],
"ans":0,
"trap_en":"Reading the 8 to 24 hour segment as measured growth kinetics rather than interpolation.",
"trap_zh":"把 8 到 24 小時那段當成量到的生長動力學，而不是內插的直線。",
"dom":"registry"
},
{
"id":"q09",
"img":"bd8c162daae6.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26PX0UGH",
"ask_en":"The deposited insert is 183 bp. Find it on this map.",
"ask_zh":"存放的插入片段是 183 bp。在這張圖上找出來。",
"a_en":"It is the short arrow at the far left, labelled SamyQ-BoPep4 2.1-Histag, with 6xHis marked underneath. The whole fusion is drawn as one feature rather than split into signal peptide, peptide and tag. That is 183 bp of a 2263 bp plasmid; the rest is pSTK-0C, chloramphenicol acetyltransferase and the ColE1 origin. BoPep4 itself is only 69 bp, so most of the insert is signal and tag.",
"a_zh":"就是最左邊那個短箭頭，標示 SamyQ-BoPep4 2.1-Histag，下面標著 6xHis。整個融合被畫成一個特徵，沒有拆成訊號胜肽、胜肽和標籤。那是 2263 bp 質體裡的 183 bp；其餘是 pSTK-0C、氯黴素乙醯轉移酶和 ColE1 起點。BoPep4 本身只有 69 bp，所以插入片段大部分是訊號和標籤。",
"kw_en":[
"one arrow, whole fusion",
"183 bp of 2263 bp",
"BoPep4 is only 69 bp"
],
"kw_zh":[
"一個箭頭畫完整個融合",
"2263 中的 183 bp",
"BoPep4 只有 69 bp"
],
"q_en":"Of the 183 bp insert, how much is the BoPep4 peptide itself?",
"q_zh":"183 bp 的插入片段裡，BoPep4 胜肽本身佔多少？",
"opt_en":[
"69 bp; the other 114 bp is the 93 bp SamyQ signal plus the His tag",
"All 183 bp; the insert is the peptide coding sequence",
"108 bp, the length of the secretion signal",
"141 bp, the same as the Bopep4 15-23 truncation"
],
"opt_zh":[
"69 bp；其餘 114 bp 是 93 bp 的 SamyQ 訊號加上 His 標籤",
"全部 183 bp；插入片段就是胜肽的編碼序列",
"108 bp，也就是分泌訊號的長度",
"141 bp，和 Bopep4 15-23 截短版一樣"
],
"ans":0,
"trap_en":"Taking the deposited part length as the length of the peptide it encodes.",
"trap_zh":"把存放的部件長度當成它編碼的胜肽長度。",
"dom":"registry"
},
{
"id":"q10",
"img":"c751930c77cf.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26RF0X2E",
"ask_en":"This is the whole system. Name the four units in the order you see them.",
"ask_zh":"這是完整系統。照你看到的順序說出四個單元。",
"a_en":"Left to right: PtagC with RBS driving Ho1 and pcyA, closed by L3S2P21; then PliaG with ccaSm3; then pVeg with ccaR; then PcpcG2-veg with RiboJ, R0-RBS, SamyQ and the AcdS arrow labelled ACC. B0015 closes the last three. 10,377 bp in all on the pSTK-EXP2 backbone with a chloramphenicol cassette, repB, ColE1 and a truncated pBR322 ori.",
"a_zh":"由左到右：PtagC 加 RBS 驅動 Ho1 與 pcyA，由 L3S2P21 收尾；接著是 PliaG 加 ccaSm3；再來是 pVeg 加 ccaR；最後是 PcpcG2-veg 加 RiboJ、R0-RBS、SamyQ 和標示為 ACC 的 AcdS 箭頭。後三個單元都由 B0015 收尾。全長 10,377 bp，骨架是 pSTK-EXP2，含氯黴素卡匣、repB、ColE1 和截短的 pBR322 起點。",
"kw_en":[
"PCB, sensor, CcaR, output",
"10,377 bp with backbone",
"junction PCR only"
],
"kw_zh":[
"PCB、感測、CcaR、輸出",
"含骨架 10,377 bp",
"只有接點 PCR"
],
"q_en":"What does the evidence behind this Level 2 map actually support?",
"q_zh":"這張 Level 2 地圖背後的證據，實際上支持到哪裡？",
"opt_en":[
"That the four modules are present in this order; the sequence between junctions is unverified",
"That all 10,377 bp were sequenced and are free of mutations",
"That the circuit was shown to switch output on under green light",
"That each module was individually sequenced inside this finished plasmid"
],
"opt_zh":[
"四個模組以這個順序存在；接點之間的序列尚未驗證",
"全部 10,377 bp 都已定序且沒有突變",
"已證實電路在綠光下會把輸出打開",
"每個模組都在這個完成的質體裡個別定序過"
],
"ans":0,
"trap_en":"Letting the Level 1 caption \"sequence-verified\" carry over to a 10.4 kb Level 2 plasmid that was only checked by junction PCR.",
"trap_zh":"把 Level 1 圖說的「序列已驗證」套到只做過接點 PCR 的 10.4 kb Level 2 質體上。",
"dom":"registry"
},
{
"id":"q11",
"img":"c8c3303a0770.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26DE5E2Q",
"ask_en":"The page says 2602 bp and this map says 3842. Do those two agree?",
"ask_zh":"頁面寫 2602 bp，這張圖寫 3842。這兩個數字對得上嗎？",
"a_en":"No. The map is the whole plasmid, so the insert is 3842 minus the 2108 bp pSTK-1D backbone, which is 1734 bp. That is the corrected construct carrying the team's own 177 bp PcpcG2-veg, deposited separately as BBa_263IW021. The page this figure sits on is the older 2602 bp version with the 1045 bp third-party part, 868 bp larger. One of the reverse primers is still named Csn:ACCD on a SamyQ construct.",
"a_zh":"對不上。圖畫的是整個質體，所以插入片段是 3842 減掉 2108 bp 的 pSTK-1D 骨架，等於 1734 bp。那是帶團隊自己 177 bp PcpcG2-veg 的修正版構築，另外以 BBa_263IW021 存放。這張圖所在的頁面是舊的 2602 bp 版本，含 1045 bp 的第三方部件，多了 868 bp。另外，SamyQ 構築上有一支反向引子仍叫 Csn:ACCD。",
"kw_en":[
"3842 minus 2108 is 1734",
"page lists 2602 bp",
"868 bp apart"
],
"kw_zh":[
"3842 減 2108 等於 1734",
"頁面登記 2602 bp",
"相差 868 bp"
],
"q_en":"Which deposit does the construct drawn here actually correspond to?",
"q_zh":"這裡畫的構築，實際上對應哪一個存放部件？",
"opt_en":[
"BBa_263IW021, the corrected 1734 bp version",
"BBa_26DE5E2Q, the page the figure sits on",
"BBa_26PGPSGK, the Csn version of the same unit",
"BBa_26GJIT8W, the PcpcG2-veg promoter on its own"
],
"opt_zh":[
"BBa_263IW021，修正後的 1734 bp 版本",
"BBa_26DE5E2Q，也就是這張圖所在的頁面",
"BBa_26PGPSGK，同一單元的 Csn 版本",
"BBa_26GJIT8W，單獨的 PcpcG2-veg 啟動子"
],
"ans":0,
"trap_en":"Trusting the length printed on the page because the figure happens to sit under it.",
"trap_zh":"因為圖剛好放在那個頁面下方，就相信頁面上印的長度。",
"dom":"registry"
},
{
"id":"q12",
"img":"cde051c48ace.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26BDO8AQ",
"ask_en":"What is missing from this unit that every output unit has?",
"ask_zh":"這個單元少了每個輸出單元都有的什麼東西？",
"a_en":"A signal peptide and a 6xHis tag. This is the transduction unit in pSTK-1C: pVeg, R0-RBS, ccaR, B0015, 964 bp of a 3243 bp plasmid, with bla and a ColE1 origin as backbone. There is no SamyQ or Csn on it and no His tag, and no RiboJ either. CcaR is the response regulator and works inside the cell, so it is neither secreted nor pulled down on nickel.",
"a_zh":"少了訊號胜肽和 6xHis 標籤。這是 pSTK-1C 裡的傳遞單元：pVeg、R0-RBS、ccaR、B0015，3243 bp 質體裡的 964 bp，骨架是 bla 與 ColE1 起點。上面沒有 SamyQ 或 Csn，也沒有 His 標籤，連 RiboJ 都沒有。CcaR 是反應調節蛋白，在細胞內作用，所以既不分泌，也不用鎳柱拉下來。",
"kw_en":[
"no signal, no His tag",
"964 bp of 3243 bp",
"CcaR stays intracellular"
],
"kw_zh":[
"沒有訊號、沒有 His 標籤",
"3243 中的 964 bp",
"CcaR 留在細胞內"
],
"q_en":"Why does ccaR carry no 6xHis tag when the cargo genes all do?",
"q_zh":"貨物基因都帶 6xHis，為什麼 ccaR 沒有？",
"opt_en":[
"It stays intracellular as the response regulator, so there is nothing to secrete or purify from the medium",
"A C-terminal tag would block CcaR binding at the PcpcG2 promoter",
"It was simply left off by mistake during design",
"The B0015 terminator already provides a purification handle"
],
"opt_zh":[
"它是反應調節蛋白、留在細胞內，沒有東西要分泌或從培養液純化",
"C 端標籤會阻擋 CcaR 結合 PcpcG2 啟動子",
"設計時單純漏掉了",
"B0015 終止子已經提供了純化用的把手"
],
"ans":0,
"trap_en":"Expecting every CDS in the kit to carry a secretion signal and a His tag.",
"trap_zh":"以為這套工具包裡每個 CDS 都該帶分泌訊號和 His 標籤。",
"dom":"registry"
},
{
"id":"q13",
"img":"d03c0ee204e2.avif",
"dir":"reg",
"tier":3,
"part":"BBa_267B69E3",
"ask_en":"How does this map differ from the BoPep4 2.1 map in the same vector?",
"ask_zh":"這張圖和同一載體裡的 BoPep4 2.1 地圖差在哪？",
"a_en":"Barely at all. Same pSTK-0C vector, same chloramphenicol acetyltransferase and ColE1 origin, same fusion drawn as one arrow with 6xHis beneath. This one reads 2264 bp and the 2.1 map reads 2263. But both inserts are deposited at 183 bp, so that one-base gap is a drawing inconsistency, not a real difference. 2.1 and 2.2 are codon variants of the same 69 bp peptide.",
"a_zh":"幾乎沒差。同一個 pSTK-0C 載體，同樣的氯黴素乙醯轉移酶和 ColE1 起點，同樣用一個箭頭畫完整個融合、下面標 6xHis。這張寫 2264 bp，2.1 那張寫 2263。但兩個插入片段都登記為 183 bp，所以那一個鹼基的差距是畫圖不一致，不是真的差異。2.1 和 2.2 是同一段 69 bp 胜肽的密碼子變體。",
"kw_en":[
"2264 against 2263 bp",
"both inserts are 183 bp",
"codon variants, same length"
],
"kw_zh":[
"2264 對 2263 bp",
"兩個插入片段都是 183 bp",
"密碼子變體、長度相同"
],
"q_en":"How do BoPep4 2.1 and 2.2 actually differ?",
"q_zh":"BoPep4 2.1 和 2.2 實際上差在哪裡？",
"opt_en":[
"They are codon variants of the same 69 bp peptide and are the same length",
"2.2 is one base longer, exactly as the two map totals show",
"2.2 swaps the SamyQ signal peptide for Csn",
"2.2 carries a second His tag at the N-terminus"
],
"opt_zh":[
"它們是同一段 69 bp 胜肽的密碼子變體，長度相同",
"2.2 多一個鹼基，就和兩張圖的總長一樣",
"2.2 把 SamyQ 訊號胜肽換成 Csn",
"2.2 在 N 端多帶一個 His 標籤"
],
"ans":0,
"trap_en":"Trusting the 1 bp difference between the two map totals as a real sequence difference.",
"trap_zh":"把兩張圖總長相差的 1 bp 當成真正的序列差異。",
"dom":"registry"
},
{
"id":"q14",
"img":"d09d66204dd3.avif",
"dir":"reg",
"tier":3,
"part":"BBa_260MVA1K",
"ask_en":"The page title says Csn. What does the label under this map say?",
"ask_zh":"頁面標題寫 Csn。這張圖下面的標示寫什麼？",
"a_en":"SamyQ. The bold name reads ccaSR-SamyQ-AcdS-Histag, and that contradicts the page, which is CcaSR-Csn-AcdS-Histag. The map's own feature settles it: the fourth unit is annotated CDS-Csn_Acc, and the deposited sequence for BBa_260MVA1K is the Csn version at 6061 bp. So the page and the feature arrow are right and the bottom label is a mislabel. This map also prints no total length.",
"a_zh":"寫 SamyQ。粗體名稱是 ccaSR-SamyQ-AcdS-Histag，這和頁面的 CcaSR-Csn-AcdS-Histag 矛盾。圖上自己的特徵就能判定：第四個單元註解為 CDS-Csn_Acc，而 BBa_260MVA1K 存放的序列是 6061 bp 的 Csn 版本。所以頁面和特徵箭頭是對的，底下的構築名稱標錯了。這張圖也沒有印出總長度。",
"kw_en":[
"bottom label says SamyQ",
"feature says CDS-Csn_Acc",
"deposited sequence is Csn"
],
"kw_zh":[
"底下標示寫 SamyQ",
"特徵寫 CDS-Csn_Acc",
"存放序列是 Csn"
],
"q_en":"Page title and map label disagree. Which one does the deposited sequence back?",
"q_zh":"頁面標題和地圖標示矛盾。存放的序列支持哪一個？",
"opt_en":[
"The page and the map's own CDS-Csn_Acc feature; the bold name at the bottom is wrong",
"The bold name at the bottom; the page title was never updated",
"Both, because SamyQ and Csn are two names for the same signal peptide",
"It cannot be decided from this figure alone"
],
"opt_zh":[
"頁面以及圖上自己的 CDS-Csn_Acc 特徵；底下的粗體名稱是錯的",
"底下的粗體名稱；頁面標題一直沒更新",
"兩者皆可，因為 SamyQ 和 Csn 是同一個訊號胜肽的兩種叫法",
"光靠這張圖無法判斷"
],
"ans":0,
"trap_en":"Reading the bold construct name under a map as the authoritative identity of the plasmid.",
"trap_zh":"把地圖下方的粗體構築名稱當成這個質體身分的權威依據。",
"dom":"registry"
},
{
"id":"q15",
"img":"d1767d23bdba.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26IA55UY",
"ask_en":"What is this map, and what can you not tell from it?",
"ask_zh":"這是什麼圖？有什麼是你從圖上看不出來的？",
"a_en":"The BoPep4 2.2 expression construct in pSTK-EXP1: pVeg, RiboJ, R0-RBS, the fusion drawn as one arrow, 6xHis, B0015. That is 712 bp of insert on the 6098 bp EXP1 backbone with Erm, bla, repB and ColE1, 6810 bp in all. What you cannot tell is which BoPep4 variant it is. The arrow is labelled SamyQ-Bopep4-v2t1 and the 2.1 map is the same length with the same label.",
"a_zh":"pSTK-EXP1 裡的 BoPep4 2.2 表達構築：pVeg、RiboJ、R0-RBS、用一個箭頭畫完的融合、6xHis、B0015。那是 712 bp 的插入片段，放在 6098 bp 的 EXP1 骨架上，含 Erm、bla、repB 和 ColE1，全長 6810 bp。看不出來的是它究竟是哪個 BoPep4 變體：箭頭標示為 SamyQ-Bopep4-v2t1，而 2.1 那張圖長度相同、標示也相同。",
"kw_en":[
"712 bp insert, 6810 bp total",
"arrow says v2t1 on both",
"map cannot separate the variants"
],
"kw_zh":[
"712 bp 插入、全長 6810 bp",
"兩張箭頭都寫 v2t1",
"圖分不出變體"
],
"q_en":"How would you tell this plasmid apart from the BoPep4 2.1 version?",
"q_zh":"你要怎麼把這個質體和 BoPep4 2.1 版本分開？",
"opt_en":[
"You cannot from the map: same length, same features, same arrow label. You need the sequence",
"The 2.2 plasmid is one base longer than the 2.1 plasmid",
"The 2.1 version uses the Csn signal peptide instead of SamyQ",
"The 2.2 version carries an extra RiboJ insulator"
],
"opt_zh":[
"從圖上分不出來：長度一樣、特徵一樣、箭頭標示也一樣，要看序列",
"2.2 的質體比 2.1 多一個鹼基",
"2.1 版本用的是 Csn 訊號胜肽，不是 SamyQ",
"2.2 版本多帶一個 RiboJ 絕緣子"
],
"ans":0,
"trap_en":"Assuming two different part numbers must look different on a plasmid map.",
"trap_zh":"以為兩個不同的部件編號在質體圖上一定看起來不一樣。",
"dom":"registry"
},
{
"id":"q16",
"img":"dd7ceaa83e24.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26CXI09X",
"ask_en":"Which signal peptide is on this one, and how does the length show it?",
"ask_zh":"這個用的是哪個訊號胜肽？長度怎麼看得出來？",
"a_en":"Csn. The fusion is drawn as a single arrow, Csn-AcdS-Histag, in pSTK-EXP1 at 7767 bp. The SamyQ version of the same unit is 7752, which is 15 bp smaller, exactly Csn 108 minus SamyQ 93. The deposited inserts agree: 1669 against 1654. Everything else is the same 6098 bp backbone with Erm, bla, repB and ColE1, so length is the one number separating the two pictures.",
"a_zh":"是 Csn。融合被畫成單一箭頭 Csn-AcdS-Histag，在 pSTK-EXP1 裡是 7767 bp。同一單元的 SamyQ 版本是 7752，小 15 bp，正好是 Csn 的 108 減 SamyQ 的 93。存放的插入片段也對得上：1669 對 1654。其餘都是同樣的 6098 bp 骨架，含 Erm、bla、repB 和 ColE1，所以長度是分辨兩張圖的唯一數字。",
"kw_en":[
"Csn, 7767 bp",
"15 bp bigger than SamyQ",
"1669 against 1654 bp"
],
"kw_zh":[
"Csn，7767 bp",
"比 SamyQ 大 15 bp",
"1669 對 1654 bp"
],
"q_en":"Why does the team carry both a Csn and a SamyQ version of each cargo?",
"q_zh":"為什麼每個貨物都同時做了 Csn 和 SamyQ 兩個版本？",
"opt_en":[
"They are two Sec signal peptides being compared head to head for secretion of the same protein",
"Csn works in E. coli and SamyQ works in B. subtilis",
"SamyQ is the His-tagged variant and Csn is the untagged one",
"Csn is used at Level 1 and SamyQ only at Level 2"
],
"opt_zh":[
"那是兩個 Sec 訊號胜肽，拿來正面比較同一個蛋白的分泌效果",
"Csn 在大腸桿菌裡有效，SamyQ 在枯草桿菌裡有效",
"SamyQ 是帶 His 標籤的版本，Csn 是不帶標籤的",
"Csn 用在 Level 1，SamyQ 只用在 Level 2"
],
"ans":0,
"trap_en":"Treating one of the two signal peptides as a failed version rather than as one arm of a comparison.",
"trap_zh":"把兩個訊號胜肽裡的一個當成失敗的版本，而不是比較實驗的其中一組。",
"dom":"registry"
},
{
"id":"q17",
"img":"e300abd83e05.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26XZYM10",
"ask_en":"Why does this unit exist, and why are Ho1 and pcyA drawn as one piece?",
"ask_zh":"這個單元為什麼要存在？Ho1 和 pcyA 為什麼被畫成一段？",
"a_en":"It makes the chromophore. Ho1 turns heme into biliverdin and PcyA reduces that to PCB, which CcaS needs in order to sense green light, and B. subtilis does not make PCB on its own. The two enzymes are joined by a GGGGS double linker and expressed as one fusion, which is why the arrows abut. Driven by PtagC+RBS, closed by L3S2P21: 1655 bp of a 3754 bp pSTK-1A plasmid.",
"a_zh":"它負責做發色團。Ho1 把血紅素轉成膽綠素，PcyA 再把它還原成 PCB，而 CcaS 需要 PCB 才能感測綠光，枯草桿菌自己不會做 PCB。兩個酵素由 GGGGS 雙重連接子接在一起、以單一融合蛋白表達，所以兩個箭頭是相連的。由 PtagC+RBS 驅動、L3S2P21 收尾：3754 bp 的 pSTK-1A 質體裡的 1655 bp。",
"kw_en":[
"Ho1 and PcyA make PCB",
"GGGGS x2 fusion",
"1655 bp of 3754 bp"
],
"kw_zh":[
"Ho1 與 PcyA 做出 PCB",
"GGGGS x2 融合",
"3754 中的 1655 bp"
],
"q_en":"What does the GGGGS x2 linker between Ho1 and pcyA mean here?",
"q_zh":"Ho1 和 pcyA 之間的 GGGGS x2 連接子在這裡代表什麼？",
"opt_en":[
"The two enzymes are translated as a single fusion protein, which raises PCB output",
"It is a scar left behind by the Golden Gate junction",
"It separates two independent CDSs, each with its own RBS",
"It is the site where signal peptidase cuts the product"
],
"opt_zh":[
"兩個酵素以單一融合蛋白轉譯，可以提高 PCB 產量",
"那是 Golden Gate 接點留下的 scar",
"它分隔兩個各自帶 RBS 的獨立 CDS",
"那是訊號胜肽酶切開產物的位置"
],
"ans":0,
"trap_en":"Counting Ho1 and pcyA as two separately expressed genes in one operon.",
"trap_zh":"把 Ho1 和 pcyA 當成同一個操縱組裡兩個各自表達的基因。",
"dom":"registry"
},
{
"id":"q18",
"img":"f3cde1565dbc.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26ZQ1T72",
"ask_en":"This is Csn-LEA14. What should it weigh against the SamyQ version?",
"ask_zh":"這是 Csn-LEA14。它和 SamyQ 版本相比應該差多少？",
"a_en":"Fifteen base pairs more, if the signal peptide is the only change. The SamyQ-LEA14 2.1 map in the same pSTK-0C vector is 2645 bp and this one is 2660, which fits Csn 108 against SamyQ 93. But the deposited lengths are 582 and 564, which is 18 apart. Those two gaps do not match, so three bases somewhere need checking. Otherwise it is the same picture: one fusion arrow, 6xHis, CAT, ColE1.",
"a_zh":"如果只換訊號胜肽，應該多 15 個鹼基對。同一個 pSTK-0C 載體裡的 SamyQ-LEA14 2.1 地圖是 2645 bp，這張是 2660，正好符合 Csn 的 108 對 SamyQ 的 93。但存放的長度是 582 和 564，相差 18。這兩個差距對不上，所以有三個鹼基需要查。其餘都一樣：一個融合箭頭、6xHis、CAT、ColE1。",
"kw_en":[
"2660 against 2645 bp",
"deposited 582 against 564",
"15 and 18 disagree"
],
"kw_zh":[
"2660 對 2645 bp",
"存放 582 對 564",
"15 與 18 對不上"
],
"q_en":"Compare the two length gaps between the Csn and SamyQ LEA14 parts. What do you find?",
"q_zh":"比較 Csn 與 SamyQ 版 LEA14 的兩組長度差，你發現什麼？",
"opt_en":[
"15 bp on the plasmid maps against 18 bp on the deposited lengths; they disagree by three bases",
"15 bp and 15 bp; the maps and the deposited lengths agree",
"18 bp and 18 bp; the maps and the deposited lengths agree",
"They cannot be compared, because the two parts sit in different vectors"
],
"opt_zh":[
"質體圖上差 15 bp，存放長度差 18 bp；兩者差了三個鹼基",
"都是 15 bp；圖和存放長度一致",
"都是 18 bp；圖和存放長度一致",
"無法比較，因為兩個部件在不同載體裡"
],
"ans":0,
"trap_en":"Checking only one of the two length pairs and calling the pair of parts consistent.",
"trap_zh":"只對了其中一組長度就說這兩個部件沒問題。",
"dom":"registry"
},
{
"id":"q19",
"img":"f96a66b9dd79.avif",
"dir":"reg",
"tier":3,
"part":"BBa_269A97I7",
"ask_en":"This is the same 6810 bp as the BoPep4 2.2 map. Is that right?",
"ask_zh":"這張和 BoPep4 2.2 的圖同樣是 6810 bp。這樣對嗎？",
"a_en":"Yes, and here two maps agreeing is the correct answer. Both BoPep4 Level 1 units are deposited at 712 bp and both sit on the 6098 bp pSTK-EXP1 backbone, so both plasmids come to 6810. The pSTK-0C maps of the same two inserts print 2263 and 2264, and those cannot both be right. Features here: pVeg, RiboJ, the fusion arrow, 6xHis, B0015, Erm and bla.",
"a_zh":"對，而且這裡兩張圖數字一樣才是正確的。兩個 BoPep4 的 Level 1 單元都登記為 712 bp，也都放在 6098 bp 的 pSTK-EXP1 骨架上，所以兩個質體都是 6810。同樣這兩個插入片段的 pSTK-0C 地圖卻印成 2263 和 2264，那兩個不可能都對。這裡的特徵：pVeg、RiboJ、融合箭頭、6xHis、B0015、Erm 和 bla。",
"kw_en":[
"712 plus 6098 is 6810",
"both EXP1 maps agree",
"the 0C pair does not"
],
"kw_zh":[
"712 加 6098 等於 6810",
"兩張 EXP1 圖一致",
"0C 那組不一致"
],
"q_en":"Which pair of BoPep4 maps is internally consistent with the deposited lengths?",
"q_zh":"哪一組 BoPep4 地圖和存放長度彼此一致？",
"opt_en":[
"The two pSTK-EXP1 maps, both 6810 bp, matching two 712 bp inserts",
"The two pSTK-0C maps, 2263 and 2264 bp",
"Neither pair matches its deposited lengths",
"Both pairs do, since one base is within normal drawing error"
],
"opt_zh":[
"兩張 pSTK-EXP1 地圖，都是 6810 bp，對應兩個 712 bp 的插入片段",
"兩張 pSTK-0C 地圖，2263 與 2264 bp",
"兩組都和存放長度對不上",
"兩組都一致，因為一個鹼基在畫圖誤差範圍內"
],
"ans":0,
"trap_en":"Assuming a one-base difference is too small to be an error worth naming.",
"trap_zh":"以為差一個鹼基太小，不值得當成錯誤提出來。",
"dom":"registry"
},
{
"id":"v01",
"img":"007541e6fe24.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26PGPSGK",
"ask_en":"Six lanes here. Which ones are positive, and what did that band prove?",
"ask_zh":"這裡有六個泳道。哪幾個是陽性？那條帶又證明了什麼？",
"a_en":"M plus six colony lanes. Only lanes 3 and 6 carry a band, sitting just above the 1.5 kb rung and labelled 1588 bp. That is the 2 of 6. Every lane, positives included, has a bright blob at the gel front, which is primer dimer off a colony template. The band says a fragment of roughly the right length went in. It does not say the four parts are in order or free of mutation. Clone 3 was sequenced.",
"a_zh":"M 加上六個菌落泳道。只有第 3 和第 6 道有帶，位置略高於 1.5 kb 標記，標註為 1588 bp，也就是 6 選 2。包含陽性在內的每一道，膠前緣都有一團亮點，那是以菌落為模板時的引子二聚體。這條帶只說明插入片段長度大致正確，並沒有說明四個元件的順序正確或沒有突變。送定序的是選殖株 3。",
"kw_en":[
"2 of 6",
"1588 bp",
"length only"
],
"kw_zh":[
"6 選 2",
"1588 bp",
"只測長度"
],
"q_en":"The page calls the insert 1788 bp, yet the product from primers flanking that insert is given as 1588 bp. What is wrong?",
"q_zh":"頁面寫插入片段為 1788 bp，但用跨越該插入片段的引子所得的產物卻寫成 1588 bp。問題出在哪？",
"opt_en":[
"A product spanning the insert cannot be shorter than the insert, so one number is wrong",
"Nothing: Golden Gate removes the BsaI sites, shortening the product by about 200 bp",
"Nothing: colony PCR routinely under-reports length on agarose",
"The 1788 bp figure includes the vector and the 1588 bp figure does not"
],
"opt_zh":[
"跨越插入片段的產物不可能短於該插入片段，所以兩個數字必有一錯",
"沒問題：Golden Gate 切掉 BsaI 位點，讓產物短了約 200 bp",
"沒問題：菌落 PCR 在洋菜膠上本來就會低估長度",
"1788 bp 含載體序列，1588 bp 不含"
],
"ans":0,
"trap_en":"Reading \"band at the expected size\" as proof of correct assembly, when the gel only measures length.",
"trap_zh":"把「帶出現在預期大小」當成組裝正確的證據，但這張膠只量得出長度。",
"dom":"registry"
},
{
"id":"v02",
"img":"0b523a149a6f.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26TOGLX3",
"ask_en":"Two lanes, numbered 2 and 11. What does that numbering tell you?",
"ask_zh":"只有兩道，編號是 2 和 11。這個編號透露了什麼？",
"a_en":"M plus two colony lanes, labelled 2 and 11. Both carry a band high up the gel, bracketed as 1331 bp. The caption says 2 of 2, but lane numbers 2 and 11 mean at least eleven colonies were picked and only two were run. The only labelled rungs are 800 and 700 bp, both far below the band, so nothing on this image sizes 1331 bp. Clone 2 was sequenced.",
"a_zh":"M 加上兩個菌落泳道，編號 2 和 11。兩道都在膠的上方有帶，括號標為 1331 bp。圖說寫「2 選 2」，但泳道編號 2 和 11 表示至少挑了十一個菌落，只跑了兩個。唯一有標字的刻度是 800 與 700 bp，都遠在帶的下方，所以這張圖本身無法定出 1331 bp。送定序的是選殖株 2。",
"kw_en":[
"lane numbering",
"ladder off-range",
"2 of 2"
],
"kw_zh":[
"泳道編號",
"標記超出範圍",
"2 選 2"
],
"q_en":"Why can this gel not confirm a 1331 bp product?",
"q_zh":"為什麼這張膠無法確認 1331 bp 的產物？",
"opt_en":[
"The only marked ladder rungs are 800 and 700 bp, both far below the band",
"The band is saturated, so its centre cannot be located",
"SamyQ is only 93 bp, too small to change migration",
"pSTK-0C migrates anomalously on agarose"
],
"opt_zh":[
"唯一有標字的刻度只有 800 與 700 bp，都遠在該帶下方",
"帶已過曝，無法定出中心位置",
"SamyQ 只有 93 bp，太小，不足以改變遷移",
"pSTK-0C 在洋菜膠上遷移異常"
],
"ans":0,
"trap_en":"Taking \"2 of 2\" at face value when the lane labels show at least eleven colonies existed.",
"trap_zh":"照字面接受「2 選 2」，卻忽略泳道編號顯示至少存在過十一個菌落。",
"dom":"registry"
},
{
"id":"v03",
"img":"101fcb99f2b1.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26DE5E2Q",
"ask_en":"Count the positives, then read the size. What does the caption get wrong?",
"ask_zh":"先數陽性，再看大小。圖說哪裡寫錯了？",
"a_en":"A ladder at both ends and sixteen colony lanes. Seven lanes give a clear band between the 1 kb and 1.5 kb rungs: 2, 3, 7, 9, 13, 14 and 15. That matches 7 of 16. Lanes 12 and 16 show a faint band at the same height that was not counted. The gel annotation and the methods text both say 1420 bp. The caption under the gel says 1588 bp. Clone 2 was sequenced.",
"a_zh":"兩端各有一條標記，中間十六個菌落泳道。有七道在 1 kb 與 1.5 kb 刻度之間出現清楚的帶：第 2、3、7、9、13、14、15 道，與「16 選 7」相符。第 12 和 16 道在同一高度有淡帶，沒有被計入。圖上的標註和方法段文字都寫 1420 bp，膠下方的圖說卻寫 1588 bp。送定序的是選殖株 2。",
"kw_en":[
"7 of 16",
"1420 vs 1588",
"faint lanes"
],
"kw_zh":[
"16 選 7",
"1420 對 1588",
"淡帶泳道"
],
"q_en":"The figure is annotated 1420 bp but its caption says [1588 bp]. Which number belongs here?",
"q_zh":"圖上標註 1420 bp，圖說卻寫 [1588 bp]。哪個數字才是這裡該用的？",
"opt_en":[
"1420 bp: the methods text and the gel annotation agree, and 1588 bp is the sister construct's number",
"1588 bp: the caption is the reviewed text and overrides the image",
"Both: 1420 bp is the insert and 1588 bp adds the vector",
"Neither: the primers are internal, so the product is the 1773 bp insert"
],
"opt_zh":[
"1420 bp：方法段文字與圖上標註一致，1588 bp 是姊妹構築的數字",
"1588 bp：圖說是經過審閱的文字，應以圖說為準",
"兩個都對：1420 bp 是插入片段，1588 bp 再加上載體",
"兩個都不對：引子在內部，產物應為 1773 bp 的插入片段"
],
"ans":0,
"trap_en":"Counting the faint bands in lanes 12 and 16 as positives, or taking the caption's 1588 bp as this construct's screen size.",
"trap_zh":"把第 12、16 道的淡帶算成陽性，或把圖說的 1588 bp 當成這個構築的篩選大小。",
"dom":"registry"
},
{
"id":"v04",
"img":"1bb1bfecc9e2.avif",
"dir":"reg",
"tier":3,
"part":"BBa_2654HAF3",
"ask_en":"Three primer pairs, two clones. Does this gel prove the four modules are correct?",
"ask_zh":"三組引子、兩個選殖株。這張膠能證明四個模組都正確嗎？",
"a_en":"M plus six lanes: one clone in lanes 1 to 3, a second in lanes 4 to 6, each screened with three primer pairs at 375, 632 and 661 bp. All six bands land where the 300 to 700 rungs put them. Three junctions do fix the order of four modules. They say nothing about the sequence inside a module, and no Level 2 construct here has been sequenced end to end. Note the third pair is 661 bp here and 441 bp on the sister gel.",
"a_zh":"M 加上六道：第 1 至 3 道是一個選殖株，第 4 至 6 道是另一個，各用三組引子篩，預期 375、632、661 bp。六條帶都落在 300 至 700 刻度該有的位置。三個接點確實能定出四個模組的順序，卻完全不能說明模組內部的序列，而且這裡沒有任何 Level 2 構築做過全長定序。另外，第三組引子在這張是 661 bp，在姊妹膠上卻是 441 bp。",
"kw_en":[
"three junctions",
"module order",
"no full sequence"
],
"kw_zh":[
"三個接點",
"模組順序",
"未全長定序"
],
"q_en":"The caption claims \"correct bands across all 4 modules\". What did the gel actually test?",
"q_zh":"圖說寫「四個模組都有正確的帶」。這張膠實際測的是什麼？",
"opt_en":[
"Three junctions between the modules, not the modules' own sequences",
"All four module sequences, end to end",
"The four BsmBI overhangs used in the Level 2 reaction",
"The presence of the pSTK-EXP2 backbone in each clone"
],
"opt_zh":[
"模組之間的三個接點，而不是模組本身的序列",
"四個模組的全長序列",
"Level 2 反應所用的四個 BsmBI 黏末端",
"每個選殖株中 pSTK-EXP2 骨架的存在"
],
"ans":0,
"trap_en":"Hearing \"all 4 modules\" and treating three junction bands as a sequence check.",
"trap_zh":"聽到「四個模組」就把三條接點帶當成序列驗證。",
"dom":"registry"
},
{
"id":"v05",
"img":"2438a0dda56a.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26ZQ1T72",
"ask_en":"Sixteen out of sixteen. Is that a good result or a warning?",
"ask_zh":"16 選 16。這是好結果，還是警訊？",
"a_en":"M plus sixteen colony lanes, every one with a band at the same height just above the 800 bp rung, bracketed 811 bp. The bands are even in intensity, there is no empty lane and no control, so nothing on this gel shows what a failed colony looks like. The page's own arithmetic is 576 bp of insert plus 235 bp of vector, while sister pages quote about 209 bp for that same vector stretch. Clone 16 was sequenced.",
"a_zh":"M 加十六個菌落泳道，每一道都在 800 bp 刻度稍上方的同一高度有帶，括號標為 811 bp。亮度相當均勻，沒有空白道也沒有對照，所以這張膠裡看不到失敗的菌落長什麼樣。頁面自己的算法是插入片段 576 bp 加載體 235 bp，但姊妹頁對同一段載體寫的是約 209 bp。送定序的是選殖株 16。",
"kw_en":[
"16 of 16",
"no control",
"vector arithmetic"
],
"kw_zh":[
"16 選 16",
"沒有對照",
"載體長度算法"
],
"q_en":"What single extra lane would have made this 16-of-16 gel much stronger?",
"q_zh":"多跑哪一道，就能讓這張 16 選 16 的膠強上許多？",
"opt_en":[
"A no-template or empty-vector control, to show what a negative looks like",
"A second ladder on the right-hand side of the gel",
"A lane of uncut plasmid as a size reference",
"A repeat of lane 1 loaded at half the volume"
],
"opt_zh":[
"無模板或空載體對照，用來顯示陰性長什麼樣",
"膠右側再放一條標記",
"一道未切割質體，當作大小參考",
"把第 1 道用一半體積再上樣一次"
],
"ans":0,
"trap_en":"Treating a clean sweep as strong evidence when there is no negative on the gel to calibrate it.",
"trap_zh":"把全數通過當成強證據，但膠上沒有陰性可以校準判讀。",
"dom":"registry"
},
{
"id":"v06",
"img":"2463682d514c.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26J0GJGZ",
"ask_en":"Two lanes, labelled 1 and 3. What is missing from \"two of two\"?",
"ask_zh":"兩道，編號 1 和 3。「2 選 2」漏掉了什麼？",
"a_en":"M plus two colony lanes, numbered 1 and 3. Both carry a band between the 700 and 800 bp rungs, consistent with the stated 770 bp. That sizing is the one thing this small gel does well, because the band falls between two labelled markers. The caption says 2 of 2, but the lane labels skip 2, so at least three colonies existed. Lane 3 also has a heavy low smear. Clone 1 was sequenced.",
"a_zh":"M 加兩個菌落泳道，編號 1 和 3。兩道的帶都落在 700 與 800 bp 刻度之間，與所寫的 770 bp 相符。這張小膠最可取的就是這點：帶剛好夾在兩個有標字的刻度中間。圖說寫「2 選 2」，但泳道編號跳過了 2，表示至少有三個菌落。第 3 道下方還有一大片拖尾。送定序的是選殖株 1。",
"kw_en":[
"770 bp",
"lane 2 skipped",
"bracketed by rungs"
],
"kw_zh":[
"770 bp",
"跳過第 2 道",
"夾在刻度之間"
],
"q_en":"Why is this small gel's size claim better supported than most in the set?",
"q_zh":"為什麼這張小膠的大小主張，比這批裡大多數都站得住腳？",
"opt_en":[
"The 770 bp band falls between two labelled rungs, 700 and 800 bp",
"Both lanes agree, so the size is confirmed by replication",
"The ladder is a 100 bp ladder, which resolves to about 10 bp",
"The insert was sequenced before the gel was run"
],
"opt_zh":[
"770 bp 的帶剛好落在 700 與 800 bp 兩個有標字的刻度之間",
"兩道結果一致，等於用重複驗證了大小",
"用的是 100 bp 標記，解析度可達約 10 bp",
"插入片段在跑膠之前就已經定序過"
],
"ans":0,
"trap_en":"Mistaking two agreeing lanes for a size check; agreement is not calibration.",
"trap_zh":"把兩道結果一致誤當成大小驗證；一致不等於校準。",
"dom":"registry"
},
{
"id":"v07",
"img":"43e883f568b3.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26XZYM10",
"ask_en":"The caption says \"all colonies\". How many is that?",
"ask_zh":"圖說寫「所有菌落」。那到底是幾個？",
"a_en":"M plus three colony lanes, and all three carry a bright band between the 1.5 and 2 kb rungs, bracketed 1721 bp. \"All colonies\" means three here, because three is what was loaded. The missing denominator is the fix this figure needs. The bands are overloaded and run together across the three lanes, so a small difference in size between clones would not show. Clone 1 was sequenced.",
"a_zh":"M 加三個菌落泳道，三道都在 1.5 與 2 kb 刻度之間有明亮的帶，括號標為 1721 bp。這裡的「所有菌落」就是三個，因為只上了三道。這張圖要補的就是缺少的分母。帶都過載，三道之間幾乎連成一片，所以選殖株之間若有小幅大小差異也看不出來。送定序的是選殖株 1。",
"kw_en":[
"no denominator",
"three lanes",
"overloaded"
],
"kw_zh":[
"沒有分母",
"三個泳道",
"上樣過量"
],
"q_en":"The page says insert 1660 bp plus vector gives 1721 bp. What does that imply?",
"q_zh":"頁面寫插入片段 1660 bp 加載體後是 1721 bp。這代表什麼？",
"opt_en":[
"Only about 61 bp of vector lies between the two priming sites",
"The Ho1 F primer sits inside the insert, so the product is shorter than the insert",
"The L3S2P21 terminator was not included in the amplicon",
"pSTK-1A adds 61 bp of BsaI scar on each side of the insert"
],
"opt_zh":[
"兩個引子結合位之間只有約 61 bp 的載體序列",
"Ho1 F 引子落在插入片段內部，所以產物比插入片段短",
"L3S2P21 終止子沒有被包含在擴增產物裡",
"pSTK-1A 在插入片段兩側各加了 61 bp 的 BsaI 疤痕"
],
"ans":0,
"trap_en":"Accepting \"all colonies\" as a count, when the figure never says how many were screened.",
"trap_zh":"把「所有菌落」當成一個數目，但圖從頭到尾沒說篩了幾個。",
"dom":"registry"
},
{
"id":"v08",
"img":"469dcae98058.avif",
"dir":"reg",
"tier":3,
"part":"BBa_269A97I7",
"ask_en":"Lanes run from 9 to 19. How does that square with \"1 of 10\"?",
"ask_zh":"泳道從 9 編到 19。這要怎麼跟「10 選 1」對得起來？",
"a_en":"M plus eleven lanes, numbered 9 to 19, which makes this the back half of a bigger screen. One faint band, in lane 14, bracketed 678 bp, and it sits level with the 750 bp rung rather than below it. The caption says 1 of 10 and then the page names clone 14, a number larger than ten. Every lane carries a bright primer-dimer blob at the front. One faint band from one colony is thin evidence.",
"a_zh":"M 加十一道，編號 9 到 19，所以這是一次較大篩選的後半段。只有第 14 道有一條淡帶，括號標為 678 bp，而且它和 750 bp 刻度齊平，而不是在其下方。圖說寫「10 選 1」，頁面接著說送定序的是選殖株 14，比十還大。每一道前緣都有明亮的引子二聚體。一個菌落、一條淡帶，證據很薄。",
"kw_en":[
"lanes 9-19",
"clone 14",
"faint single band"
],
"kw_zh":[
"第 9 至 19 道",
"選殖株 14",
"單一淡帶"
],
"q_en":"What is the clearest internal contradiction on this page?",
"q_zh":"這一頁最明顯的內部矛盾是什麼？",
"opt_en":[
"It screens ten colonies but takes clone 14 forward",
"The ladder is labelled 750 and 500 bp, which cannot resolve 678 bp",
"The gel shows eleven lanes, so eleven colonies were positive",
"It names clone 14, but lane 14 is the only empty lane on the gel"
],
"opt_zh":[
"說篩了十個菌落，卻把選殖株 14 送下游",
"標記只標 750 與 500 bp，無法解析 678 bp",
"膠上有十一道，所以有十一個菌落是陽性",
"說選殖株 14，但第 14 道是膠上唯一的空白道"
],
"ans":0,
"trap_en":"Reading the single faint band as a clean positive without noticing it runs at the 750 bp rung.",
"trap_zh":"把那條單一淡帶當成乾淨的陽性，沒注意到它跑在 750 bp 刻度上。",
"dom":"registry"
},
{
"id":"v09",
"img":"54aa2f3c3988.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26NXOP7S",
"ask_en":"Which lanes are positive here, and what is wrong with the ladder labels?",
"ask_zh":"這裡哪幾道是陽性？標記的標字又有什麼問題？",
"a_en":"M plus four colony lanes from a pGEM-T Easy ligation. Lanes 3 and 4 give bright bands just under the 1.5 kb rung, bracketed 1372 bp. Lane 2 has a faint band at the same height that the 2-of-4 count leaves out, and lane 1 is empty. The lower ladder mark is printed \"400k\", which has to mean 400 bp. The 1122 bp insert length quoted here is also quoted for the SamyQ version, though the two signal peptides differ by 15 bp.",
"a_zh":"M 加四個菌落泳道，來自 pGEM-T Easy 接合。第 3、4 道在 1.5 kb 刻度略下方有明亮的帶，括號標為 1372 bp。第 2 道在同一高度有一條淡帶，沒有被「4 選 2」算進去，第 1 道空白。標記下方那格印成「400k」，實際上應該是 400 bp。這裡寫的插入片段 1122 bp，在 SamyQ 版頁面上也是 1122 bp，但兩個訊號胜肽長度差 15 bp。",
"kw_en":[
"lane 2 faint",
"400k typo",
"1122 bp reused"
],
"kw_zh":[
"第 2 道淡帶",
"400k 筆誤",
"1122 bp 重複使用"
],
"q_en":"Lane 2 shows a faint band at the same height as lanes 3 and 4. What is the honest call?",
"q_zh":"第 2 道在和第 3、4 道同高處有淡帶。誠實的判讀應該是什麼？",
"opt_en":[
"Call it a weak positive worth rescreening, not a clean negative",
"Ignore it; anything fainter than the brightest band is non-specific",
"Count it and take it forward without rescreening",
"Discard the gel, because faint bands mean the PCR failed"
],
"opt_zh":[
"當成值得重篩的弱陽性，而不是乾淨的陰性",
"忽略它；比最亮的帶暗的都算非專一性產物",
"直接算成陽性並送下游，不必重篩",
"整張膠作廢，因為出現淡帶代表 PCR 失敗"
],
"ans":0,
"trap_en":"Calling it 2 of 4 without mentioning the faint band in lane 2.",
"trap_zh":"直接說「4 選 2」，卻不提第 2 道那條淡帶。",
"dom":"registry"
},
{
"id":"v10",
"img":"68787dec5c52.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26RF0X2E",
"ask_en":"Count the banded lanes, then count the labels. What does not add up?",
"ask_zh":"先數有帶的泳道，再數標號。哪裡對不起來？",
"a_en":"M then a run of banded lanes in repeating 375 / 632 / 441 triplets. I count twelve such lanes, but only three triplets carry the numbers 1, 2, 3. One triplet between the first and second labelled group has bands and no labels. Each triplet is one clone checked at three junctions. Nine or twelve, the junctions prove module order only. Nothing here reads the sequence inside a module.",
"a_zh":"M 之後是一連串有帶的泳道，以 375 / 632 / 441 三條一組重複。我數到十二道，但只有三組標了 1、2、3；在第一組與第二組標號之間，還有一組有帶卻沒有標號。每一組代表一個選殖株、三個接點。不論是九道還是十二道，接點只能證明模組順序，這裡沒有任何資料讀到模組內部的序列。",
"kw_en":[
"twelve lanes",
"three labelled triplets",
"order only"
],
"kw_zh":[
"十二個泳道",
"三組有標號",
"只證順序"
],
"q_en":"Three correct junction bands per clone prove what, exactly?",
"q_zh":"每個選殖株三條正確的接點帶，究竟證明了什麼？",
"opt_en":[
"That the four modules sit in the intended order",
"That all four modules are free of mutations",
"That the Level 2 plasmid is the right total size",
"That the assembled construct responds to green light"
],
"opt_zh":[
"四個模組排在預期的順序上",
"四個模組都沒有突變",
"Level 2 質體的總長度正確",
"組好的構築會對綠光產生反應"
],
"ans":0,
"trap_en":"Repeating the caption's \"lanes 1, 2 and 3\" without noticing the gel carries more banded lanes than labels.",
"trap_zh":"照抄圖說的「第 1、2、3 道」，沒注意膠上有帶的泳道比標號還多。",
"dom":"registry"
},
{
"id":"v11",
"img":"7ae42b9bff17.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26IA55UY",
"ask_en":"Four of five. Which lane failed, and how sure can you be of the reading?",
"ask_zh":"5 選 4。哪一道失敗了？這個判讀又有多確定？",
"a_en":"M plus five colony lanes. Lanes 1, 3, 4 and 5 carry a band between the 600 and 700 bp rungs, consistent with 678 bp. Lane 2 shows only a faint smudge at that height plus a lower band. That is the 4 of 5. The exposure is heavy: the positive bands are saturated and bleed sideways into each other. So the gel can say a band is present, not that it is a single clean product. Clone 5 was sequenced.",
"a_zh":"M 加五個菌落泳道。第 1、3、4、5 道在 600 與 700 bp 刻度之間有帶，與 678 bp 相符；第 2 道在那個高度只有一片模糊，另有一條較低的帶。這就是「5 選 4」。曝光偏重：陽性帶都過曝並向兩側暈開，所以這張膠只能說有帶，不能說那是單一乾淨的產物。送定序的是選殖株 5。",
"kw_en":[
"4 of 5",
"lane 2 smudge",
"saturated"
],
"kw_zh":[
"5 選 4",
"第 2 道模糊",
"過曝"
],
"q_en":"What does the overexposure on this gel cost you?",
"q_zh":"這張膠的過曝讓你損失了什麼？",
"opt_en":[
"You cannot tell one band from two close bands, or judge how much product there is",
"The band migrates higher than it should once saturated",
"The ladder rungs shift, so 678 bp cannot be verified",
"Nothing; saturation only affects how the ladder is quantified"
],
"opt_zh":[
"分不出是一條帶還是兩條靠得很近的帶，也判斷不了產量",
"帶一旦過曝就會往上跑，位置偏高",
"標記刻度會位移，所以無法驗證 678 bp",
"沒有損失；過曝只影響標記的定量"
],
"ans":0,
"trap_en":"Calling the positives \"single, clean bands\" when saturation makes that undecidable.",
"trap_zh":"把陽性稱為「單一乾淨的帶」，但過曝下根本無法判斷。",
"dom":"registry"
},
{
"id":"v12",
"img":"8834ba1b94f0.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26PX0UGH",
"ask_en":"Eighteen of nineteen. Look at lane 6: what actually happened there?",
"ask_zh":"19 選 18。看第 6 道，那裡究竟發生了什麼？",
"a_en":"M plus nineteen colony lanes. Eighteen carry a band sitting just above the 500 bp rung, bracketed 536 bp. Lane 6 is not empty. Its band runs clearly lower than the rest, so that colony amplified something shorter, not nothing. BoPep4 2.1 and 2.2 are both quoted at a 177 bp insert and a 536 bp product, so this gel cannot tell the two versions apart. Clone 2 was sequenced.",
"a_zh":"M 加十九個菌落泳道。其中十八道在 500 bp 刻度略上方有帶，括號標為 536 bp。第 6 道並非空白：它的帶明顯跑得比其他道低，表示那個菌落擴增出較短的東西，而不是什麼都沒有。BoPep4 2.1 與 2.2 兩版的插入片段都寫 177 bp、產物都寫 536 bp，所以這張膠分不出兩版。送定序的是選殖株 2。",
"kw_en":[
"lane 6 runs low",
"536 bp",
"2.1 vs 2.2"
],
"kw_zh":[
"第 6 道偏低",
"536 bp",
"2.1 對 2.2"
],
"q_en":"BoPep4 2.1 and 2.2 give the same 536 bp screen band. What follows from that?",
"q_zh":"BoPep4 2.1 與 2.2 的篩選帶同樣是 536 bp。這代表什麼？",
"opt_en":[
"Only sequencing can distinguish the two recoded versions",
"The two versions can be told apart by band intensity",
"Version 2.2 runs 15 bp higher because its signal peptide is longer",
"The 536 bp band confirms the recoded first 15 codons"
],
"opt_zh":[
"只有定序才分得出這兩個重新編碼的版本",
"可以靠帶的亮度分辨兩個版本",
"2.2 版因為訊號胜肽較長，會高 15 bp",
"536 bp 的帶可以確認前 15 個密碼子已重新編碼"
],
"ans":0,
"trap_en":"Describing lane 6 as a failed reaction when it carries a band at the wrong size.",
"trap_zh":"把第 6 道說成反應失敗，其實它有帶，只是大小不對。",
"dom":"registry"
},
{
"id":"v13",
"img":"a2f980ff8969.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26SG0NQQ",
"ask_en":"One lane, one band. How much does this figure actually establish?",
"ask_zh":"一道、一條帶。這張圖實際上建立了多少？",
"a_en":"One colony lane beside the ladder. The band called 735 bp is barely visible, a faint smudge below the 800 rung, while the brightest thing in the lane is the primer-dimer blob at the front. The ladder lane is overloaded enough that the 800 to 500 rungs merge into a white column, so the reference is poor too. One colony, one faint band. The page then says clone [X] was sequenced, leaving the placeholder unfilled.",
"a_zh":"標記旁只有一個菌落泳道。標為 735 bp 的帶幾乎看不見，只是 800 刻度下方一片淡淡的痕跡，而這一道最亮的東西是前緣的引子二聚體。標記那一道也過載，800 到 500 的刻度糊成一條白柱，參考價值很低。一個菌落、一條淡帶。頁面接著寫「選殖株 [X] 已定序」，佔位符根本沒填。",
"kw_en":[
"faint band",
"ladder saturated",
"[X] placeholder"
],
"kw_zh":[
"淡帶",
"標記過曝",
"[X] 佔位符"
],
"q_en":"Which problem on this page is easiest to fix?",
"q_zh":"這一頁哪個問題最容易修？",
"opt_en":[
"The unfilled clone placeholder, \"[X]\", in the sequencing line",
"The missing ladder, which would need the gel rerun",
"The band size, which would need a new primer pair",
"The colony count, which would need a fresh transformation"
],
"opt_zh":[
"定序那一句裡沒填的選殖株佔位符「[X]」",
"缺少的標記，必須重跑整張膠",
"帶的大小，必須換一組新引子",
"菌落數，必須重做一次轉型"
],
"ans":0,
"trap_en":"Calling a barely visible smudge a band at the expected size.",
"trap_zh":"把幾乎看不見的痕跡說成「位於預期大小的帶」。",
"dom":"registry"
},
{
"id":"v14",
"img":"b207909c8639.avif",
"dir":"reg",
"tier":3,
"part":"BBa_261XH2RS",
"ask_en":"All three lanes have a band, yet the caption says 1 of 3. Why?",
"ask_zh":"三道都有帶，圖說卻寫「3 選 1」。為什麼？",
"a_en":"Three colony lanes with the ladder on the right, which is unusual but fine. All three carry a bright band near the 1.5 kb rung. Lane 1 runs a little higher than lanes 2 and 3, and only lane 1 is bracketed 1602 bp. So \"1 of 3\" is a judgement about migration height, not about presence. On a gel this overloaded that difference is a few pixels wide. Clone 1 was sequenced, and that is the evidence that holds.",
"a_zh":"三個菌落泳道，標記放在右側，雖然少見但沒問題。三道在 1.5 kb 刻度附近都有明亮的帶。第 1 道跑得比第 2、3 道略高，而且只有第 1 道被括號標為 1602 bp。所以「3 選 1」是對遷移高度的判斷，不是對有無帶的判斷。在這麼過載的膠上，那個差距只有幾個像素寬。送定序的是選殖株 1，真正站得住的是定序。",
"kw_en":[
"all three banded",
"height judgement",
"overloaded"
],
"kw_zh":[
"三道都有帶",
"以高度判定",
"上樣過量"
],
"q_en":"What would settle whether lanes 2 and 3 really carry a shorter product?",
"q_zh":"要怎麼確定第 2、3 道真的是較短的產物？",
"opt_en":[
"Rerun them on a longer gel beside the ladder, or sequence them",
"Compare the band intensities against lane 1",
"Repeat the colony PCR with more cycles",
"Nothing is needed; the bracket in the figure already settles it"
],
"opt_zh":[
"在較長的膠上與標記並排重跑，或直接定序",
"把亮度拿來和第 1 道比較",
"用更多循環數重做一次菌落 PCR",
"不必再做；圖上的括號已經有結論"
],
"ans":0,
"trap_en":"Saying lanes 2 and 3 were negative, when all three lanes carry a band.",
"trap_zh":"說第 2、3 道是陰性，但其實三道都有帶。",
"dom":"registry"
},
{
"id":"v15",
"img":"ba762e02cb85.avif",
"dir":"reg",
"tier":3,
"part":"BBa_2654HAF3",
"ask_en":"Three bands per lane here. Which is the one that counts?",
"ask_zh":"這裡每道有三條帶。哪一條才算數？",
"a_en":"M plus four colony lanes, numbered 2 to 5. Lanes 3, 4 and 5 each show a band between the 500 and 750 rungs, the 632 bp junction product. Lane 2 is empty. Each positive lane also carries a band near 250 bp that is brighter than the target, plus faint high-molecular-weight material. The caption names both as non-specific amplification from a colony template, which is the right thing to do. Clone 4, at insert:vector 1:7, was sequenced.",
"a_zh":"M 加四個菌落泳道，編號 2 到 5。第 3、4、5 道在 500 與 750 刻度之間各有一條帶，就是 632 bp 的接點產物；第 2 道空白。每個陽性道還有一條約 250 bp、比目標帶更亮的帶，以及上方淡淡的高分子量痕跡。圖說把這兩者都點名為以菌落為模板的非專一性擴增，這是正確的做法。送定序的是選殖株 4（插入:載體 = 1:7）。",
"kw_en":[
"632 bp junction",
"named non-specifics",
"lane 2 blank"
],
"kw_zh":[
"632 bp 接點",
"點名非專一帶",
"第 2 道空白"
],
"q_en":"This caption does something most of the set does not. What?",
"q_zh":"這則圖說做了一件這批圖大多沒做的事。是什麼？",
"opt_en":[
"It names its own non-specific bands instead of ignoring them",
"It gives a denominator for the colonies screened",
"It reports the ladder brand and the run voltage",
"It states that the clone was sequenced end to end"
],
"opt_zh":[
"它主動點名自己的非專一性帶，而不是略過不提",
"它給出了篩選菌落的分母",
"它寫出標記的廠牌和電泳電壓",
"它說明該選殖株已做過全長定序"
],
"ans":0,
"trap_en":"Calling the brightest band in each lane the result; the 250 bp band is non-specific and the 632 bp one is the target.",
"trap_zh":"把每道最亮的帶當成結果；250 bp 那條是非專一性的，632 bp 那條才是目標。",
"dom":"registry"
},
{
"id":"v16",
"img":"bd64752e9f98.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26XVQ3FS",
"ask_en":"The caption says one of one. Count the lanes with a band near 2 kb.",
"ask_zh":"圖說寫「1 選 1」。數數看有幾道在 2 kb 附近有帶。",
"a_en":"M plus eight colony lanes. Four of them, lanes 2, 4, 5 and 7, carry a band just below the 2 kb rung, but only lane 7 is bracketed 1984 bp. Lanes 1 and 8 give a much shorter product and lanes 3 and 6 show only front smear. The caption's \"1 of 1 colonies\" does not describe this gel: eight were screened and at least four look positive. Clone 1 was sequenced, though lane 7 is the annotated one.",
"a_zh":"M 加八個菌落泳道。其中四道（第 2、4、5、7 道）在 2 kb 刻度略下方有帶，但只有第 7 道被括號標為 1984 bp。第 1、8 道是明顯短得多的產物，第 3、6 道只有前緣拖尾。圖說的「1 選 1」根本沒有描述這張膠：篩了八個，至少四個看起來是陽性。頁面說送定序的是選殖株 1，被標註的卻是第 7 道。",
"kw_en":[
"eight lanes",
"four positives",
"caption mismatch"
],
"kw_zh":[
"八個泳道",
"四道陽性",
"圖說不符"
],
"q_en":"Which statement about this figure is true?",
"q_zh":"關於這張圖，哪個敘述是對的？",
"opt_en":[
"Eight colonies were run and four show a band near the labelled size",
"One colony was run and it was positive",
"Eight colonies were run and only lane 7 shows any band at all",
"Lanes 1 and 8 are ladder lanes rather than colonies"
],
"opt_zh":[
"跑了八個菌落，其中四道在標註大小附近有帶",
"只跑了一個菌落，而且是陽性",
"跑了八個菌落，但只有第 7 道有帶",
"第 1 和第 8 道是標記道，不是菌落"
],
"ans":0,
"trap_en":"Repeating \"1 of 1 colonies\" without counting the eight lanes actually on the gel.",
"trap_zh":"照抄「1 選 1」，沒去數膠上其實有八道。",
"dom":"registry"
},
{
"id":"v17",
"img":"c00e095c212c.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26RF0X2E",
"ask_en":"Eleven for eleven at 632 bp. What can you not check on this image?",
"ask_zh":"11 道全部在 632 bp。這張圖上有什麼是你查不了的？",
"a_en":"M plus eleven colony lanes, every one with a strong band at the same height, bracketed 632 bp. Several lanes also show a faint lower band. The ladder lane has rungs but no printed sizes at all, so on this image alone you cannot place the band against any marker. The 632 bp claim rests on the sister gel, where the ladder is labelled. Eleven matching bands still prove only this one junction. Clone 1 was sequenced.",
"a_zh":"M 加十一個菌落泳道，每一道都在同一高度有明顯的帶，括號標為 632 bp。有幾道下方還有一條淡帶。標記那一道雖然有刻度，卻完全沒有印上數字，所以單憑這張圖無法把帶對到任何參考點，632 bp 這個說法得靠姊妹膠（那張的標記有標字）。十一條一致的帶，仍然只證明這一個接點。送定序的是選殖株 1。",
"kw_en":[
"unlabelled ladder",
"one junction",
"11 lanes"
],
"kw_zh":[
"標記沒標字",
"單一接點",
"十一道"
],
"q_en":"What is missing from this gel image that the other Level 2 gels have?",
"q_zh":"這張膠少了其他 Level 2 膠都有的什麼？",
"opt_en":[
"Printed size labels on the ladder",
"A separate lane for each of the three primer pairs",
"A no-template control lane",
"A bracket naming the expected product size"
],
"opt_zh":[
"標記上印出的大小數字",
"三組引子各自獨立的泳道",
"一道無模板對照",
"標出預期產物大小的括號"
],
"ans":0,
"trap_en":"Accepting 632 bp from this image alone, when its ladder carries no size labels.",
"trap_zh":"單憑這張圖就接受 632 bp，但它的標記上沒有任何大小數字。",
"dom":"registry"
},
{
"id":"v18",
"img":"c99753738e91.avif",
"dir":"reg",
"tier":3,
"part":"BBa_267B69E3",
"ask_en":"Four for four. What does the loading do to this gel?",
"ask_zh":"4 選 4。上樣量對這張膠造成了什麼影響？",
"a_en":"M plus four colony lanes, each with a band just above the 500 bp rung, consistent with 536 bp. All four are overloaded and spread sideways until lanes 2, 3 and 4 nearly merge, so you cannot say whether any lane holds a second, close product. Four of four with no negative control means nothing on this gel shows what a failed colony looks like. Clone 1 was sequenced; the gel measured length only.",
"a_zh":"M 加四個菌落泳道，每道在 500 bp 刻度略上方有帶，與 536 bp 相符。四道都上樣過量並向兩側擴散，第 2、3、4 道幾乎連在一起，所以無法判斷任何一道是否還藏著第二條靠得很近的產物。4 選 4 又沒有陰性對照，等於這張膠裡看不到失敗的菌落長什麼樣。送定序的是選殖株 1；膠本身只量了長度。",
"kw_en":[
"4 of 4",
"lanes merge",
"no control"
],
"kw_zh":[
"4 選 4",
"泳道相連",
"沒有對照"
],
"q_en":"The page says insert 177 bp plus vector gives 536 bp. What is the vector contributing?",
"q_zh":"頁面寫插入片段 177 bp 加上載體後是 536 bp。載體貢獻了多少？",
"opt_en":[
"About 359 bp, where sister pages put the same vector stretch at roughly 209 bp",
"About 359 bp, matching every other pSTK-0C screen on the wiki",
"Nothing; 536 bp is the insert plus the 6xHis tag",
"About 177 bp, since insert and vector contribute equally"
],
"opt_zh":[
"約 359 bp，但姊妹頁對同一段載體寫的是約 209 bp",
"約 359 bp，與 wiki 上其他 pSTK-0C 篩選完全一致",
"沒有貢獻；536 bp 是插入片段加上 6xHis 標籤",
"約 177 bp，因為插入片段與載體各佔一半"
],
"ans":0,
"trap_en":"Calling the four bands \"single, clean\" when they are overloaded into one another.",
"trap_zh":"把這四條帶說成「單一乾淨」，其實它們過載到彼此相連。",
"dom":"registry"
},
{
"id":"v19",
"img":"ebfd0c76c34d.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26D5AX7S",
"ask_en":"Two of seven. What is lane 2 doing, and does it count?",
"ask_zh":"7 選 2。第 2 道在做什麼？它算不算數？",
"a_en":"M plus seven colony lanes. Lanes 1 and 4 carry a band just below the 1.5 kb rung, bracketed 1423 bp, which is the 2 of 7. Lane 2 is not blank: it has a strong band far lower down, a wrong-size product, and lanes 1 and 4 show faint low doublets of their own. Lanes 3, 5 and 7 are empty. A band at 1423 bp fixes length only. Clone 1 was sequenced and that is what the page rests on.",
"a_zh":"M 加七個菌落泳道。第 1、4 道在 1.5 kb 刻度略下方有帶，括號標為 1423 bp，也就是「7 選 2」。第 2 道並非空白：它在很下方有一條明亮的帶，是大小不對的產物；第 1、4 道自己下方也各有一對淡帶。第 3、5、7 道空白。1423 bp 的帶只固定了長度。送定序的是選殖株 1，頁面靠的是那份定序。",
"kw_en":[
"2 of 7",
"lane 2 wrong size",
"low doublets"
],
"kw_zh":[
"7 選 2",
"第 2 道大小不對",
"下方雙帶"
],
"q_en":"Lane 2's strong low band most likely means what?",
"q_zh":"第 2 道那條位置很低的亮帶，最可能代表什麼？",
"opt_en":[
"That colony amplified a shorter, wrong product: a mis-assembly or a primer artefact",
"That colony carries the insert in reverse orientation",
"That colony carries two copies of the plasmid",
"The lane was overloaded, which pushed the band downward"
],
"opt_zh":[
"那個菌落擴增出較短、錯誤的產物：組裝錯誤或引子假象",
"那個菌落的插入片段方向相反",
"那個菌落帶有兩套質體",
"那一道上樣過量，把帶往下推了"
],
"ans":0,
"trap_en":"Describing lanes 2 and 6 as failed reactions when they carry wrong-size product instead.",
"trap_zh":"把第 2、6 道說成反應失敗，其實它們是跑出大小不對的產物。",
"dom":"registry"
},
{
"id":"v20",
"img":"ec8e3cdacc85.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26CXI09X",
"ask_en":"The band here is multi-kilobase. What should it have been?",
"ask_zh":"這裡的帶是好幾 kb。它本來應該是多少？",
"a_en":"One colony lane beside a high-range ladder marked 10k, 8k and 6k. The single band sits between the 8k and 10k rungs, bracketed 7767 bp. The same page's methods say a correct band runs at [1145 bp], and the deposited sequence with the stated Csn F and ACCD R primers gives 1195 bp. Three numbers for one band, none matching the other two. Whatever this lane shows, it is not a 1.2 kb insert check.",
"a_zh":"一個菌落泳道，旁邊是標著 10k、8k、6k 的高範圍標記。唯一的帶落在 8k 與 10k 刻度之間，括號標為 7767 bp。同一頁的方法段寫「正確的帶在 [1145 bp]」，而用頁面所列的 Csn F 與 ACCD R 引子對已登錄序列計算，應為 1195 bp。一條帶、三個數字，彼此都對不上。這一道不論是什麼，都不是 1.2 kb 的插入片段檢查。",
"kw_en":[
"7767 vs 1145",
"1195 bp real",
"high-range ladder"
],
"kw_zh":[
"7767 對 1145",
"實際 1195 bp",
"高範圍標記"
],
"q_en":"This page gives the expected band as [1145 bp] in text and [7767 bp] in the caption. Which is closest to right?",
"q_zh":"這頁在正文寫預期帶為 [1145 bp]，圖說卻寫 [7767 bp]。哪一個最接近正確？",
"opt_en":[
"Neither; the deposited sequence with those primers gives 1195 bp",
"1145 bp, and the caption is a typo for the whole plasmid size",
"7767 bp, because the stated primers sit on the backbone",
"Both are right: 1145 bp linear and 7767 bp supercoiled"
],
"opt_zh":[
"兩個都不對；用那組引子對已登錄序列計算應為 1195 bp",
"1145 bp，圖說是把整個質體大小誤植上去",
"7767 bp，因為所列的引子落在骨架上",
"兩個都對：1145 bp 是線性，7767 bp 是超螺旋"
],
"ans":0,
"trap_en":"Picking whichever of the two published numbers sounds better, when neither matches the deposited sequence.",
"trap_zh":"在兩個已發布的數字裡挑一個聽起來順的，其實兩個都對不上已登錄序列。",
"dom":"registry"
},
{
"id":"v21",
"img":"fa7885bfe062.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26BDO8AQ",
"ask_en":"Two of four. What are lanes 1 and 3 showing?",
"ask_zh":"4 選 2。第 1 和第 3 道顯示的是什麼？",
"a_en":"M plus four colony lanes. Lanes 2 and 4 carry a band just below the 1.5 kb rung, bracketed 1442 bp, which is the 2 of 4. Lanes 1 and 3 are not empty: both give a bright, much shorter product, so those colonies amplified the wrong thing rather than nothing. The ladder is labelled only at 3K and 1.5K, so the 1442 bp reading rests on one nearby rung. Clone 4 was sequenced.",
"a_zh":"M 加四個菌落泳道。第 2、4 道在 1.5 kb 刻度略下方有帶，括號標為 1442 bp，也就是「4 選 2」。第 1、3 道並非空白：兩道都有明亮且短得多的產物，表示那些菌落擴增出錯的東西，而不是什麼都沒有。標記只在 3K 與 1.5K 有標字，所以 1442 bp 的判讀只靠附近一個刻度。送定序的是選殖株 4。",
"kw_en":[
"2 of 4",
"short wrong product",
"two rungs only"
],
"kw_zh":[
"4 選 2",
"較短的錯誤產物",
"只有兩個刻度"
],
"q_en":"This page quotes the ccaR composite insert twice. What is the problem?",
"q_zh":"這一頁兩次提到 ccaR 複合插入片段的長度。問題在哪？",
"opt_en":[
"It is given as 1257 bp in one place and 1174 bp in another",
"It is given in kilobases in one place and base pairs in another",
"It includes B0015 in one place and omits it in the other",
"It is quoted as 1442 bp, which is the amplicon rather than the insert"
],
"opt_zh":[
"一處寫 1257 bp，另一處寫 1174 bp",
"一處用 kb，另一處用 bp",
"一處含 B0015，另一處漏掉它",
"寫成 1442 bp，那是擴增產物而不是插入片段"
],
"ans":0,
"trap_en":"Calling lanes 1 and 3 negative when both carry a bright band at the wrong size.",
"trap_zh":"把第 1、3 道說成陰性，其實兩道都有大小不對的亮帶。",
"dom":"registry"
},
{
"id":"w01",
"img":"18639698c5cc.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26RF0X2E",
"ask_en":"Green beats red at all three times here. How big is that effect really?",
"ask_zh":"這張圖三個時間點綠光都高於紅光。這個差距到底有多大？",
"a_en":"This is the DNPH assay, so it reports activity, not amount. Baseline before light is about 2.7. Green is above red at every time: roughly 8 against 6 at 3 h, 12 against 9 at 6 h, 18 against 16 at 8 h. The clean gap is at 6 h. At 3 h and 8 h the error bars overlap. There is no plasmid-free bar on this plot, and the axis is still labelled concentration in µg/mL.",
"a_zh":"這是 DNPH 活性測定，量的是活性不是蛋白量。照光前的 baseline 約 2.7。每個時間點綠光都高於紅光：3 小時約 8 比 6，6 小時約 12 比 9，8 小時約 18 比 16。差距最乾淨的是 6 小時；3 小時與 8 小時的誤差線互相重疊。這張圖沒有無質體的對照柱，而且 y 軸仍標成濃度 µg/mL。",
"kw_en":[
"baseline 2.7",
"gap clean only at 6 h",
"no plasmid-free bar"
],
"kw_zh":[
"baseline 2.7",
"只有 6 小時差距乾淨",
"沒有無質體對照柱"
],
"q_en":"The ELISA from the same experiment carries one bar this plot does not. Which?",
"q_zh":"同一組實驗的 ELISA 有一根這張圖沒有的柱子，是哪一根？",
"opt_en":[
"A plasmid-free WB800 negative control",
"A baseline sample taken before illumination",
"A green-light sample at 6 h",
"A red-light sample at 3 h"
],
"opt_zh":[
"無質體的 WB800 陰性對照",
"照光前取的 baseline 樣本",
"6 小時的綠光樣本",
"3 小時的紅光樣本"
],
"ans":0,
"trap_en":"Calling the rising bars proof of light control when the error bars overlap at two of the three time points.",
"trap_zh":"把逐漸升高的柱子當成光控制的證據，但三個時間點中有兩個的誤差線是重疊的。",
"dom":"registry"
},
{
"id":"w02",
"img":"23a9b510db69.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26CXI09X",
"ask_en":"Your caption says this measures secretion and diffusion. Show me where.",
"ask_zh":"圖說寫這張圖在看分泌與擴散。請指給我看在哪裡。",
"a_en":"Nine time points, three fractions, each strip cropped to 35 to 48 kDa. The only signal is the lumen cell lysate at 14, 16 and 18 h, and it is saturated black, so it cannot be quantified. Both medium sets, lumen and shell, are blank at every time point. The 20 to 24 h row shows nothing anywhere. The figure shows intracellular protein; it does not show secretion or shell-side diffusion.",
"a_zh":"九個時間點、三種樣品，每一條都只裁到 35 至 48 kDa。唯一有訊號的是 14、16、18 小時的管內側細胞裂解液，而且訊號已經飽和成全黑，無法定量。管內側與殼側的兩組培養液在所有時間點都是空白。20 至 24 小時那一排整條都沒有東西。這張圖呈現的是細胞內的蛋白，並沒有呈現分泌或往殼側的擴散。",
"kw_en":[
"lysate only, saturated",
"both medium sets blank",
"strips cropped 35-48 kDa"
],
"kw_zh":[
"只有裂解液且已飽和",
"兩組培養液都空白",
"只裁 35-48 kDa"
],
"q_en":"Across all nine time points, what do the lumen medium and shell medium lanes show?",
"q_zh":"在全部九個時間點裡，管內側培養液與殼側培養液的泳道顯示什麼？",
"opt_en":[
"No detectable band at any time point",
"A band that grows steadily from 14 h to 24 h",
"A band on the shell side only after 40 h",
"A doublet at 37 and 70 kDa"
],
"opt_zh":[
"所有時間點都偵測不到條帶",
"從 14 小時到 24 小時逐漸變強的條帶",
"只有 40 小時之後殼側才出現條帶",
"37 與 70 kDa 的雙條帶"
],
"ans":0,
"trap_en":"Reading the heavy black in the early lysate lanes as high secretion, when it is an overloaded intracellular sample and the medium lanes beside it are empty.",
"trap_zh":"把早期裂解液泳道的濃黑讀成分泌量高，其實那是過載的細胞內樣品，旁邊的培養液泳道是空的。",
"dom":"registry"
},
{
"id":"w03",
"img":"4c16bfff0d3c.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26U8UTMH",
"ask_en":"Where is that band sitting, and what size did you predict?",
"ask_zh":"這條帶跑在哪裡？你們預測的分子量是多少？",
"a_en":"Three lanes, green light only, sampled 3, 6 and 8 h after a 16 h dark culture. Lane M is the ladder at 180, 130 and 100 kDa. Each lane carries one band just below 100 kDa. Our AcdS monomer is predicted at about 35 kDa, so this runs far too high. We offer a roughly 70 kDa homodimer as a possibility we have not tested. There is no red, dark or plasmid-free lane on this blot.",
"a_zh":"三條泳道，全部都是綠光，在 16 小時暗培養後的 3、6、8 小時取樣。M 是 marker，標示 180、130、100 kDa。每一道都有一條略低於 100 kDa 的條帶。我們的 AcdS 單體預測約 35 kDa，所以這個位置明顯偏高。我們提出約 70 kDa 的同源二聚體作為一個尚未驗證的可能解釋。這張膜上沒有紅光、暗處或無質體的泳道。",
"kw_en":[
"one band just below 100 kDa",
"predicted 35 kDa monomer",
"green lanes only"
],
"kw_zh":[
"單一條帶略低於 100 kDa",
"預測單體 35 kDa",
"只有綠光泳道"
],
"q_en":"This same blot is captioned on two part pages. How do the two readings differ?",
"q_zh":"同一張膜在兩個 part 頁面各有一段圖說，兩邊的判讀差在哪裡？",
"opt_en":[
"One calls the three lanes similar; the other calls 8 h weaker than 3 and 6 h",
"One gives the band as 37 kDa, the other as 70 kDa",
"One says the samples are supernatant, the other says cell lysate",
"One says green light, the other says red light"
],
"opt_zh":[
"一邊說三道差不多，另一邊說 8 小時比 3、6 小時弱",
"一邊說條帶是 37 kDa，另一邊說是 70 kDa",
"一邊說樣品是上清液，另一邊說是細胞裂解液",
"一邊說是綠光，另一邊說是紅光"
],
"ans":0,
"trap_en":"Saying the band confirms ACCD without naming the gap between where it runs and the 35 kDa we predicted.",
"trap_zh":"說這條帶證實了 ACCD，卻沒有講出它跑的位置和我們預測的 35 kDa 之間的落差。",
"dom":"registry"
},
{
"id":"w04",
"img":"59fdb2dd4530.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26RF0X2E",
"ask_en":"Walk me through the bar chart you put next to this blot.",
"ask_zh":"請帶我看一下你們放在這張膜旁邊的長條圖。",
"a_en":"The bars are the blot quantified, relative to 3 h set at 1.00: 6 h is 1.10 and 8 h is 0.65, so signal falls by about a third at 8 h. That is one blot, one replicate, and no loading control, so the numbers are normalised only to themselves. The band itself sits just below the 100 kDa marker, against a predicted 35 kDa monomer. All three lanes are green at 100 percent.",
"a_zh":"長條圖是這張膜的定量結果，以 3 小時設為 1.00：6 小時是 1.10，8 小時是 0.65，也就是 8 小時掉了約三分之一。這是單一張膜、單一重複，而且沒有 loading control，所以這些數字只是自己對自己的正規化。條帶本身落在略低於 100 kDa 的位置，而預測單體是 35 kDa。三條泳道全部是 100% 綠光。",
"kw_en":[
"G3 1.00, G6 1.10, G8 0.65",
"no loading control",
"n = 1"
],
"kw_zh":[
"G3 1.00、G6 1.10、G8 0.65",
"沒有 loading control",
"n = 1"
],
"q_en":"What does this densitometry still lack before the numbers mean anything?",
"q_zh":"這組定量還缺什麼，數字才有意義？",
"opt_en":[
"A loading control to normalise against",
"The position of the 100 kDa marker",
"A stated sampling time for each lane",
"A note of which light colour was used"
],
"opt_zh":[
"一個可以用來正規化的 loading control",
"100 kDa marker 的位置",
"每一道的取樣時間",
"註明用的是哪一種光色"
],
"ans":0,
"trap_en":"Quoting 1.10 and 0.65 as expression levels when they are ratios from a single unnormalised blot.",
"trap_zh":"把 1.10 和 0.65 當成表現量來引用，其實它們只是單一張未正規化的膜算出來的比值。",
"dom":"registry"
},
{
"id":"w05",
"img":"90114dd860dc.avif",
"dir":"reg",
"tier":3,
"part":"BBa_262YYNPV",
"ask_en":"Is this a structure of your protein?",
"ask_zh":"這是你們自己那個蛋白的結構嗎？",
"a_en":"No. It is PDB 1TZJ chain A, a Pseudomonas ACC deaminase solved by X-ray at 1.99 Å, 83 percent identical to our acdS over 330 aligned residues. We use it as a reference for the fold and the active site. Panel b shows pyridoxal-5'-phosphate held by a Schiff base to Lys51, which aligns to Lys50 in our sequence, with D-vinylglycine bound as a substrate analogue. No structure of our own acdS has been determined.",
"a_zh":"不是。這是 PDB 1TZJ 的 A 鏈，一個 Pseudomonas 的 ACC 去胺酶 X 光結構，解析度 1.99 Å，和我們的 acdS 在 330 個比對殘基上有 83% 相同。我們把它當作摺疊方式與活性中心的參考。(b) 圖顯示 pyridoxal-5'-phosphate 透過 Schiff base 接在 Lys51 上，對應到我們序列中的 Lys50，並有基質類似物 D-vinylglycine 結合在口袋裡。我們自己的 acdS 沒有解過結構。",
"kw_en":[
"PDB 1TZJ chain A",
"83% over 330 residues",
"PLP Schiff base to Lys51"
],
"kw_zh":[
"PDB 1TZJ A 鏈",
"330 殘基 83% 相同",
"PLP 以 Schiff base 接 Lys51"
],
"q_en":"What holds the PLP cofactor in the active site in panel b?",
"q_zh":"(b) 圖中，是什麼把 PLP 輔因子固定在活性中心？",
"opt_en":[
"A Schiff base to Lys51",
"A disulfide bond to a nearby cysteine",
"A salt bridge to Arg487",
"A zinc ion coordinated by three histidines"
],
"opt_zh":[
"與 Lys51 形成的 Schiff base",
"與鄰近半胱胺酸形成的雙硫鍵",
"與 Arg487 形成的鹽橋",
"由三個組胺酸配位的鋅離子"
],
"ans":0,
"trap_en":"Presenting this as a model of the team's own enzyme instead of an 83 percent identical homologue used as a reference.",
"trap_zh":"把這張圖講成是團隊自己那個酵素的模型，其實它只是 83% 相同的同源蛋白，用來當參考。",
"dom":"registry"
},
{
"id":"w06",
"img":"b8766a706c15.avif",
"dir":"reg",
"tier":3,
"part":"BBa_265CD14Z",
"ask_en":"What does your C-terminal His tag do to the contact in panel b?",
"ask_zh":"你們的 C 端 His tag 會對 (b) 圖裡那個接觸造成什麼影響？",
"a_en":"BoPep4, Gly1 to Asn23, is the orange chain lying in the inner groove of the PEPR1 ectodomain. It is threaded onto the 5GR8 PEPR1-AtPep1 crystal structure, so this is a model and the starting point of our MD runs, not an experiment. Panel b is the problem: the free C-terminal carboxylate of Asn23 is gripped by Arg487, with Asn465 and Asp441. A C-terminal 6xHis tag blocks that carboxylate, and every BoPep4 part we deposited carries one.",
"a_zh":"橘色那條是 BoPep4，Gly1 到 Asn23，躺在 PEPR1 外域的內側溝槽裡。它是接到 5GR8（PEPR1-AtPep1）晶體結構上的，所以這是模型、是我們所有 MD 的起始結構，不是實驗。(b) 圖才是問題所在：Asn23 游離的 C 端羧基被 Arg487 夾住，Asn465 與 Asp441 一起完成這個夾持。C 端加 6xHis tag 會擋住那個羧基，而我們登錄的每一個 BoPep4 part 都帶著這個 tag。",
"kw_en":[
"Asn23 carboxylate to Arg487",
"threaded onto 5GR8",
"His tag blocks it"
],
"kw_zh":[
"Asn23 羧基接 Arg487",
"接到 5GR8 上建模",
"His tag 會擋住"
],
"q_en":"Which part of BoPep4 does the Arg487 clamp grip?",
"q_zh":"Arg487 夾住的是 BoPep4 的哪個部位？",
"opt_en":[
"The free C-terminal carboxylate of Asn23",
"The N-terminal amine of Gly1",
"A lysine side chain near the middle of the peptide",
"The backbone carbonyl at residue 12"
],
"opt_zh":[
"Asn23 游離的 C 端羧基",
"Gly1 的 N 端胺基",
"胜肽中段的一個離胺酸側鏈",
"第 12 個殘基的主鏈羰基"
],
"ans":0,
"trap_en":"Describing the docked pose as a measured binding result, when it is a threaded model and the MD starting structure.",
"trap_zh":"把這個對接姿勢講成量測到的結合結果，其實它只是接出來的模型，也是 MD 的起始結構。",
"dom":"registry"
},
{
"id":"w07",
"img":"ba29fa86398c.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26RF0X2E",
"ask_en":"Your caption describes four lanes. Show me the four lanes.",
"ask_zh":"你們的圖說寫有四條泳道，請指給我看那四條。",
"a_en":"I have to flag the figure first. The caption describes four lanes, green and red at 13 and 16 h, but the image under it is the three-lane green-only blot from Figure 2, with the same G3, G6, G8 bar chart beside it. The four-lane blot the caption describes sits on BBa_26U8UTMH, where one band runs between the 75 and 100 kDa markers in all four lanes. Read the caption against that figure, not this one.",
"a_zh":"我得先說圖本身的問題。圖說描述的是四條泳道，13 和 16 小時的綠光與紅光，但圖說底下那張圖其實是 Figure 2 那張只有綠光的三道膜，旁邊還是同一組 G3、G6、G8 長條圖。圖說描述的那張四道膜在 BBa_26U8UTMH 上，四條泳道都有一條跑在 75 與 100 kDa marker 之間的條帶。請拿那張圖來對照這段圖說，而不是這一張。",
"kw_en":[
"image does not match caption",
"duplicate of Figure 2",
"four-lane blot is on BBa_26U8UTMH"
],
"kw_zh":[
"圖與圖說不符",
"與 Figure 2 重複",
"四道膜在 BBa_26U8UTMH"
],
"q_en":"What is actually shown in the image sitting under this Figure 3 caption?",
"q_zh":"這段 Figure 3 圖說底下那張圖，實際上畫的是什麼？",
"opt_en":[
"The three-lane green-only 3, 6 and 8 h blot from Figure 2",
"Four lanes: green and red at 13 h and 16 h",
"An imidazole elution series, S1 to S4",
"A bioreactor time course across lumen and shell fractions"
],
"opt_zh":[
"Figure 2 那張只有綠光、3/6/8 小時的三道膜",
"四條泳道：13 與 16 小時的綠光與紅光",
"S1 到 S4 的 imidazole 沖提系列",
"管內側與殼側的生物反應器時間序列"
],
"ans":0,
"trap_en":"Answering from the caption and describing four lanes that are not in the picture.",
"trap_zh":"照著圖說回答，描述了一張圖上根本沒有的四條泳道。",
"dom":"registry"
},
{
"id":"w08",
"img":"bd3754cc481d.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26XVQ3FS",
"ask_en":"Two lanes here. Which one is your negative control?",
"ask_zh":"這張只有兩道。哪一道是你們的陰性對照？",
"a_en":"Neither. The lanes are the ladder, at 63, 48 and 35 kDa, and the culture supernatant. The band sits between 35 and 48, at about 37 kDa, against a predicted 35 kDa for the secreted protein, and that agreement is real: this is one of the few figures on our site where the size matches. The band is saturated, so I would not quantify it, and there is no untransformed WB800 or empty-vector lane.",
"a_zh":"兩道都不是。這兩道一道是 marker，標示 63、48、35 kDa，另一道是培養上清液。條帶落在 35 與 48 之間，大約 37 kDa，而分泌型蛋白的預測值是 35 kDa，這個吻合是真的：這是我們網站上少數幾張分子量對得上的圖。條帶已經飽和，所以我不會拿它定量；而且這裡沒有未轉形的 WB800，也沒有空載體的泳道。",
"kw_en":[
"about 37 kDa",
"agrees with predicted 35 kDa",
"no control lane"
],
"kw_zh":[
"約 37 kDa",
"與預測 35 kDa 吻合",
"沒有對照泳道"
],
"q_en":"Why is roughly 37 kDa worth saying out loud on this particular figure?",
"q_zh":"為什麼在這張圖上，「大約 37 kDa」這件事值得特別講出來？",
"opt_en":[
"It matches the predicted 35 kDa monomer, unlike the light-induced blots",
"It matches the roughly 70 kDa homodimer we propose elsewhere",
"It shows the His tag was cleaved off during secretion",
"It confirms the protein stayed inside the cell"
],
"opt_zh":[
"它和預測的 35 kDa 單體吻合，和那些光誘導的膜不一樣",
"它和我們在別處提出的約 70 kDa 同源二聚體吻合",
"它顯示 His tag 在分泌過程中被切掉了",
"它證實蛋白留在細胞內"
],
"ans":0,
"trap_en":"Calling this blot evidence of light-controlled secretion, when the construct is the constitutive Pveg version with no light input at all.",
"trap_zh":"把這張膜當成光控分泌的證據，其實這個構築是組成型 Pveg 版本，完全沒有光的輸入。",
"dom":"registry"
},
{
"id":"w09",
"img":"cf26d4e64d66.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26CXI09X",
"ask_en":"Panel B. Talk me through your purification.",
"ask_zh":"(B) 圖，請講一下你們的純化。",
"a_en":"Panel B is the only purification panel we have anywhere. Lane S1 at 25 mM imidazole is empty; S2 at 10 mM, S3 at 150 mM and S4 at 250 mM each give a band just above the 35 kDa marker, and S2 also shows a fainter band near 40. Two caveats: the labels run 25 then 10 mM, which is not a rising series, and the page caption prints 100 mM for S2. We report no purified yield or concentration anywhere.",
"a_zh":"(B) 圖是我們整個網站上唯一的純化圖。S1 的 25 mM imidazole 是空的；S2 的 10 mM、S3 的 150 mM、S4 的 250 mM 各有一條略高於 35 kDa marker 的條帶，S2 另外還有一條較淡、靠近 40 的條帶。兩個要注意的地方：標示是 25 之後接 10 mM，並不是遞增的序列；而且頁面圖說把 S2 寫成 100 mM。我們在任何地方都沒有給出純化的產量或濃度。",
"kw_en":[
"S1 empty, S2-S4 band near 35 kDa",
"labels not a rising series",
"no yield reported"
],
"kw_zh":[
"S1 空白，S2-S4 在 35 kDa 附近有帶",
"標示不是遞增序列",
"沒有報告產量"
],
"q_en":"What does the page caption print for lane S2 that the figure itself does not?",
"q_zh":"頁面圖說給 S2 的數字和圖上標的不一樣，差在哪？",
"opt_en":[
"100 mM, where the figure is labelled 10 mM",
"250 mM, where the figure is labelled 150 mM",
"A purified yield in mg per litre",
"An elution volume in millilitres"
],
"opt_zh":[
"圖說寫 100 mM，圖上標的是 10 mM",
"圖說寫 250 mM，圖上標的是 150 mM",
"一個 mg/L 的純化產量",
"一個以毫升計的沖提體積"
],
"ans":0,
"trap_en":"Describing this as a purified protein preparation when no yield, no gel and no concentration exist for it.",
"trap_zh":"把這個講成已經純化好的蛋白製劑，其實它沒有產量、沒有膠圖、也沒有濃度。",
"dom":"registry"
},
{
"id":"w10",
"img":"d087c7afc2e9.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26IN6G1D",
"ask_en":"Why is the N-terminal arm coloured orange in both panels?",
"ask_zh":"為什麼兩張圖裡 N 端那條手臂都是橘色的？",
"a_en":"Because it has no fixed structure. This one is our own protein: PDB 1XO8 residues 2 to 151 are exactly the mature LEA14 our cassette encodes. The core is a 9-stranded β-sandwich with one helix. Panel b colours and thickens each residue by RMSF across the 20 NMR models: the core, residues 28 to 143, averages 0.42 Å, while the N-terminal 1 to 16 averages 8.75 Å and reaches 11.9 Å. Order actually begins at residue 17, already 1.13 Å.",
"a_zh":"因為它沒有固定的結構。這一張是我們自己的蛋白：PDB 1XO8 的第 2 到 151 個殘基，正好就是我們卡匣編碼的成熟型 LEA14。核心是九股 β-sandwich 加一段螺旋。(b) 圖用 20 個 NMR 模型的每殘基 RMSF 來上色與加粗：核心（殘基 28 到 143）平均 0.42 Å，而 N 端 1 到 16 平均 8.75 Å，最高到 11.9 Å。真正開始有序是在第 17 個殘基，已經降到 1.13 Å。",
"kw_en":[
"N-term 1-16 at 8.75 A",
"core 28-143 at 0.42 A",
"PDB 1XO8, our own protein"
],
"kw_zh":[
"N 端 1-16 為 8.75 Å",
"核心 28-143 為 0.42 Å",
"PDB 1XO8，是我們自己的蛋白"
],
"q_en":"Of the three structure figures on these part pages, which one shows the team's own protein?",
"q_zh":"這些 part 頁面上的三張結構圖，哪一張畫的是團隊自己的蛋白？",
"opt_en":[
"LEA14, PDB 1XO8, residues 2 to 151",
"ACC deaminase, PDB 1TZJ chain A",
"BoPep4 threaded onto PEPR1 from 5GR8",
"All three are models of our own sequences"
],
"opt_zh":[
"LEA14，PDB 1XO8，殘基 2 到 151",
"ACC 去胺酶，PDB 1TZJ 的 A 鏈",
"接在 5GR8 的 PEPR1 上的 BoPep4",
"三張都是我們自己序列的模型"
],
"ans":0,
"trap_en":"Treating the disordered arm as a modelling artefact rather than a measured spread across 20 deposited NMR models.",
"trap_zh":"把那條無序的手臂當成建模的假象，其實它是 20 個已登錄 NMR 模型量出來的分布。",
"dom":"registry"
},
{
"id":"w11",
"img":"e4d3f567128c.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26RF0X2E",
"ask_en":"Does this plate separate green from red?",
"ask_zh":"這塊盤分得出綠光和紅光嗎？",
"a_en":"No. Four bars, all between about 12 and 13 µg/mL: green at 13 h is highest at about 12.9 and red at 16 h lowest at about 12.1, so the whole spread is under 1 µg/mL with small error bars. Colour does nothing here and neither does time. Note what is missing against the short-term plate: there is no plasmid-free WB800 bar on this chart, so the floor is not shown.",
"a_zh":"分不出來。四根柱子全部落在約 12 到 13 µg/mL：13 小時綠光最高，約 12.9；16 小時紅光最低，約 12.1，整個範圍不到 1 µg/mL，誤差線也很小。光色沒有造成差別，時間也沒有。還要注意相對於短期那塊盤少了什麼：這張圖上沒有無質體 WB800 的柱子，所以底線沒有被畫出來。",
"kw_en":[
"all four 12-13 ug/mL",
"spread under 1 ug/mL",
"no plasmid-free bar"
],
"kw_zh":[
"四根都在 12-13 µg/mL",
"全距不到 1 µg/mL",
"沒有無質體柱"
],
"q_en":"The DNPH assay on these same four samples reported what at 13 h?",
"q_zh":"同樣這四個樣品，DNPH 測定在 13 小時報告了什麼？",
"opt_en":[
"Green about fourteen times red, which this ELISA does not see",
"Green and red within 10 percent of each other",
"Red about three times green",
"No measurable activity in any sample"
],
"opt_zh":[
"綠光約為紅光的十四倍，而這張 ELISA 完全看不到",
"綠光與紅光相差不到一成",
"紅光約為綠光的三倍",
"所有樣品都量不到活性"
],
"ans":0,
"trap_en":"Quoting 12.9 against 12.1 as a green-over-red difference when the error bars sit on top of each other.",
"trap_zh":"把 12.9 對 12.1 當成綠光勝過紅光的差異，其實誤差線根本疊在一起。",
"dom":"registry"
},
{
"id":"w12",
"img":"e566cdecd66e.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26U8UTMH",
"ask_en":"Point me at the difference between green and red on this blot.",
"ask_zh":"請在這張膜上指出綠光和紅光的差別。",
"a_en":"Five lanes: the ladder at 180, 130, 100 and 75 kDa, then green and red at 13 h and again at 16 h. One band per sample lane, running between the 75 and 100 kDa markers. By eye the four intensities are similar, which is what this caption says; our other page calls the green lanes somewhat stronger. Similar is the defensible reading, because nothing was quantified. Red light is the only negative control here.",
"a_zh":"五條泳道：marker 標 180、130、100、75 kDa，然後是 13 小時的綠光與紅光，再來是 16 小時的綠光與紅光。每條樣品泳道一條帶，跑在 75 與 100 kDa marker 之間。用眼睛看，四道深淺差不多，這也是這段圖說寫的；我們另一頁則說綠光那兩道看起來稍微強一點。比較站得住腳的講法是「差不多」，因為我們沒有做定量。這裡唯一的陰性對照就是紅光。",
"kw_en":[
"band between 75 and 100 kDa",
"four lanes similar by eye",
"red is the only control"
],
"kw_zh":[
"條帶在 75 與 100 kDa 之間",
"四道目視差不多",
"紅光是唯一對照"
],
"q_en":"What negative control does this blot carry?",
"q_zh":"這張膜帶了什麼陰性對照？",
"opt_en":[
"Red light only; there is no dark and no plasmid-free lane",
"An untransformed WB800 lane beside the ladder",
"An empty-vector lane at each time point",
"A dark-grown lane sampled at 13 h and 16 h"
],
"opt_zh":[
"只有紅光；沒有暗處，也沒有無質體的泳道",
"marker 旁邊有一道未轉形的 WB800",
"每個時間點都有一道空載體",
"13 與 16 小時各有一道暗培養的樣品"
],
"ans":0,
"trap_en":"Saying the green lanes are stronger, which is the other page's wording and was never quantified on either page.",
"trap_zh":"說綠光那幾道比較強——那是另一頁的寫法，而且兩頁都沒有做過定量。",
"dom":"registry"
},
{
"id":"w13",
"img":"eb9f556de867.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26RF0X2E",
"ask_en":"This is your biggest light effect. How much weight does it carry?",
"ask_zh":"這是你們最大的光反應。它能承擔多少份量？",
"a_en":"It is the cleanest light response we got and also the least supported. At 13 h green is about 10.4 nmol alpha-KB per mL per hour against about 0.7 for red, roughly fourteen to one. At 16 h it inverts: green about 1.1, red about 3.8. The 13 h green error bar runs from about 5 to 16, neither time point was repeated, and across both times colour comes out at p = 0.72.",
"a_zh":"這是我們做出來最乾淨的光反應，同時也是支撐最弱的。13 小時綠光約 10.4 nmol alpha-KB mL⁻¹ h⁻¹，紅光約 0.7，大約十四比一。到 16 小時則反過來：綠光約 1.1，紅光約 3.8。13 小時綠光的誤差線從大約 5 拉到 16，兩個時間點都沒有重複，而且把兩個時間一起看，光色的 p 值是 0.72。",
"kw_en":[
"13 h green 10.4 vs red 0.7",
"16 h inverts",
"p = 0.72"
],
"kw_zh":[
"13 小時綠 10.4 對紅 0.7",
"16 小時反轉",
"p = 0.72"
],
"q_en":"What happens to the green-over-red ordering at 16 h?",
"q_zh":"到了 16 小時，綠光高於紅光這個順序發生什麼事？",
"opt_en":[
"It inverts: red is about 3.8 and green about 1.1",
"It holds, with green still roughly fourteen times red",
"Both conditions fall to zero",
"Green rises further, to about 18"
],
"opt_zh":[
"反轉了：紅光約 3.8，綠光約 1.1",
"維持不變，綠光仍約為紅光的十四倍",
"兩組都掉到零",
"綠光繼續上升到約 18"
],
"ans":0,
"trap_en":"Quoting the fourteen-fold figure on its own without the error bar, the missing replicate, or the inversion three hours later.",
"trap_zh":"只引用十四倍這個數字，卻不講誤差線、沒有重複，以及三小時後就反轉這件事。",
"dom":"registry"
},
{
"id":"w14",
"img":"ef5b2ee4ffa5.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26RF0X2E",
"ask_en":"What does the light actually do to the amount of ACCD here?",
"ask_zh":"在這張圖裡，光到底對 ACCD 的量做了什麼？",
"a_en":"Nothing measurable. Baseline before any light is already about 3.0 µg/mL, and every illuminated sample sits between 2.6 and 3.2, green and red alike, with 6 h and 8 h slightly below the 3 h pair. The last bar, WB, is plasmid-free WB800 at about 1.3, and it separates clearly from the rest. That makes this one of the few figures we have where the negative control actually works.",
"a_zh":"沒有造成可量到的改變。照光前的 baseline 已經約 3.0 µg/mL，所有照過光的樣品都落在 2.6 到 3.2 之間，綠光紅光都一樣，6 與 8 小時比 3 小時那一組略低一點。最後一根 WB 是無質體的 WB800，約 1.3，和其他柱子分得很開。這也讓它成為我們少數幾張陰性對照真的有作用的圖。",
"kw_en":[
"baseline already 3.0 ug/mL",
"all samples 2.6-3.2",
"WB control at 1.3"
],
"kw_zh":[
"baseline 已經 3.0 µg/mL",
"所有樣品 2.6-3.2",
"WB 對照 1.3"
],
"q_en":"What does the WB bar on the right of this plot represent?",
"q_zh":"這張圖最右邊那根 WB 柱代表什麼？",
"opt_en":[
"Plasmid-free WB800, at about 1.3 µg/mL",
"The sample taken before illumination began",
"Western blot densitometry added for comparison",
"A purified ACCD standard at a known concentration"
],
"opt_zh":[
"無質體的 WB800，約 1.3 µg/mL",
"照光開始前取的樣本",
"拿來比較的西方墨點定量值",
"已知濃度的純化 ACCD 標準品"
],
"ans":0,
"trap_en":"Reading WB as western blot rather than the plasmid-free WB800 host, which is the one working negative control on the plot.",
"trap_zh":"把 WB 讀成西方墨點，其實它是無質體的 WB800 宿主，也是這張圖上唯一有作用的陰性對照。",
"dom":"registry"
},
{
"id":"w15",
"img":"f858b4d704db.avif",
"dir":"reg",
"tier":3,
"part":"BBa_260MVA1K",
"ask_en":"Look at panel B. Which lane is the darkest?",
"ask_zh":"請看 (B) 圖。最深的是哪一道？",
"a_en":"Red 100 percent at 8 h, which is our off control. It peaks at the same time as green, so this blot does not show light control, and that is why we dropped this ABDI construct for ABDQ. That sentence lives on the Level 2 part page, not under this figure. The bands run at roughly 63 to 75 kDa against a 35 kDa monomer. The 0 h lane is the same strain before light, not a plasmid-free control.",
"a_zh":"是 8 小時的 100% 紅光，也就是我們的關閉對照。它和綠光同時達到最強，所以這張膜並沒有顯示出光控制，這也是我們後來放棄這個 ABDI 構築、改用 ABDQ 的原因。不過那句話寫在 Level 2 的 part 頁面上，不在這張圖底下。條帶跑在大約 63 到 75 kDa，而單體是 35 kDa。0 小時那一道是同一株菌照光前的樣品，不是無質體對照。",
"kw_en":[
"red 100 at 8 h is darkest",
"off control failed",
"bands at 63-75 kDa"
],
"kw_zh":[
"8 小時紅光 100 最深",
"關閉對照失效",
"條帶在 63-75 kDa"
],
"q_en":"What is the 0 h lane in each panel?",
"q_zh":"每一張圖裡的 0 小時那一道是什麼？",
"opt_en":[
"The same strain sampled before light exposure",
"Untransformed WB800 with no plasmid",
"An empty-vector control",
"A purified ACCD standard"
],
"opt_zh":[
"同一株菌在照光前取的樣品",
"未轉形、沒有質體的 WB800",
"空載體對照",
"純化的 ACCD 標準品"
],
"ans":0,
"trap_en":"Claiming signal rose under green but not red, which is the application text on this page and the opposite of what panel B shows.",
"trap_zh":"聲稱訊號只在綠光下上升、紅光下沒有——那是這一頁應用段落的寫法，和 (B) 圖看到的正好相反。",
"dom":"registry"
},
{
"id":"x01",
"img":"32d2074018a8.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26D5AX7S",
"ask_en":"What do these three LEA14 salinity panels actually show?",
"ask_zh":"這三張 LEA14 鹽逆境圖實際上顯示了什麼？",
"a_en":"Three readouts from the salinity set at 0, 75 and 100 mM NaCl, for untreated, pre-treatment and post-treatment LEA14 supernatant. Panel (a), fresh weight, carries one point per bar: untreated at 0 mM is highest at about 0.84 g and every other group sits between 0.54 and 0.61 g. Panel (b) divides chlorophyll by that single weight, panel (c) does not. Post-treatment has no 0 mM group, and the only significance bracket runs from untreated 0 mM to untreated 75 mM.",
"a_zh":"這是鹽逆境組在 0、75、100 mM NaCl 下的三項讀數，比較未處理、前處理與後處理 LEA14 上清液。(a) 鮮重每根柱只有一個點：未處理 0 mM 最高，約 0.84 g，其餘各組都落在 0.54 到 0.61 g。(b) 是葉綠素除以那個單一鮮重，(c) 則未除。後處理沒有 0 mM 組，而唯一的顯著性括號是從未處理 0 mM 連到未處理 75 mM。",
"kw_en":[
"one point per bar",
"FW normalisation",
"missing 0 mM group"
],
"kw_zh":[
"每柱一點",
"鮮重標準化",
"缺 0 mM 組"
],
"q_en":"In panel (b) post-treatment LEA14 at 75 mM NaCl is the tallest bar, near 1.8. What most limits that bar?",
"q_zh":"在 (b) 圖中，後處理 LEA14 於 75 mM NaCl 是最高的一根，約 1.8。這根柱最大的限制是什麼？",
"opt_en":[
"It is chlorophyll divided by fresh weight, and fresh weight is a single pooled measurement per group, so a small denominator lifts the ratio.",
"It is the only bar without replicate points, so it carries no error bar.",
"It was measured at 100 mM NaCl rather than 75 mM, so the label is wrong.",
"It is significantly different from its own salt-stressed control, as the bracket shows."
],
"opt_zh":[
"它是葉綠素除以鮮重，而鮮重每組只有一個合併測值，分母一小、比值就被抬高。",
"它是唯一沒有重複點的柱，所以沒有誤差棒。",
"它其實量的是 100 mM NaCl 而非 75 mM，標籤標錯了。",
"如括號所示，它和自己的鹽逆境對照組有顯著差異。"
],
"ans":0,
"trap_en":"Reading panel (b) as protection: the same group falls to about 0.85 in panel (c), where chlorophyll is not divided by fresh weight.",
"trap_zh":"把 (b) 圖當成保護效果：同一組在未除鮮重的 (c) 圖只剩約 0.85。",
"dom":"registry"
},
{
"id":"x02",
"img":"3cafffeb48fc.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26LYCBW0",
"ask_en":"Take me through this BoPep4 folding figure.",
"ask_zh":"帶我看一下這張 BoPep4 摺疊圖。",
"a_en":"A 236 nt translation-initiation window folded in ViennaRNA 2.7.2 at 37 °C. The table ranks the ordered design fourth of 42,581 variants: start+15 accessibility 0.396 to 0.497, Shine-Dalgarno core 0.067 to 0.634, nine codons changed, 11 bases recoded, CAI 0.87 down to 0.77. Panels (b) and (c) are the predicted minimum-free-energy structures and (d) the per-base unpaired probability. All of it is folding prediction. Translation initiation from this cassette has never been measured.",
"a_zh":"這是 236 nt 的轉譯起始視窗，用 ViennaRNA 2.7.2 在 37 °C 下摺疊。表格顯示訂購的設計在 42,581 個變體中排第 4：start+15 可及性由 0.396 升到 0.497，Shine-Dalgarno 核心由 0.067 升到 0.634，改了 9 個密碼子、11 個鹼基，CAI 由 0.87 降到 0.77。(b)(c) 是預測的最低自由能結構，(d) 是每個鹼基的未配對機率。全部都是摺疊預測，這個卡匣的轉譯起始從未被量測過。",
"kw_en":[
"ViennaRNA prediction",
"start+15 0.497",
"rank 4 of 42,581"
],
"kw_zh":[
"ViennaRNA 預測",
"start+15 0.497",
"42,581 中第 4"
],
"q_en":"The ordered variant has a lower MFE (-49.1) than the wild type (-43.2). Why is that not a contradiction?",
"q_zh":"訂購的變體 MFE（-49.1）比野生型（-43.2）更低，為什麼這不矛盾？",
"opt_en":[
"The score is local accessibility at the ribosome binding site and start codon, not whole-window stability; the window can fold tighter elsewhere while opening at initiation.",
"Lower MFE always means better initiation, so the two numbers agree.",
"MFE and accessibility are in different units, so the two can never be compared at all.",
"The ordered variant is shorter than the wild type, so its MFE is not comparable."
],
"opt_zh":[
"評分看的是核醣體結合位與起始密碼子的局部可及性，不是整段視窗的穩定度；視窗其他地方可以摺得更緊，起始區仍然打開。",
"MFE 越低就代表起始越好，所以兩個數字本來就一致。",
"MFE 和可及性單位不同，兩者根本無法比較。",
"訂購的變體比野生型短，所以 MFE 不能相比。"
],
"ans":0,
"trap_en":"Treating the accessibility gain as measured expression; it is a ViennaRNA number and no translation from this cassette has been measured.",
"trap_zh":"把可及性的提升當成量到的表現量；那只是 ViennaRNA 的數字，這個卡匣的轉譯從未量測。",
"dom":"registry"
},
{
"id":"x03",
"img":"3da62e90de50.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26LYCBW0",
"ask_en":"What does this Asn23-Arg487 panel tell you about the His tag?",
"ask_zh":"這張 Asn23–Arg487 圖告訴你 His 標籤的什麼事？",
"a_en":"Three panels on the one contact the design rests on. In (a) Arg487 grips the Asn23 C-terminal carboxylate with both oxygens in 100.0 % of wild-type frames and 99.5 % of AtPep1 frames; with a C-terminal 6xHis tag bidentate engagement is 0.0 % and monodentate 99.3 %. In (b) the first shell is the peptide C-terminal COO- for both controls and a backbone carbonyl for the tagged system. In (c) the charge centres sit 4.0 Å apart for the controls and 20.1 Å with the tag.",
"a_zh":"三張圖都在講設計所倚靠的那一個接觸。(a) Arg487 以兩個氧抓住 Asn23 的 C 端羧基，野生型 100.0 % 的 frames、AtPep1 99.5 %；加上 C 端 6xHis 標籤後，雙齒結合變成 0.0 %，單齒 99.3 %。(b) 第一殼層在兩組對照是胜肽 C 端 COO−，在加標籤的系統則換成主鏈羰基。(c) 電荷中心距離在對照是 4.0 Å，加標籤後是 20.1 Å。",
"kw_en":[
"bidentate 100 to 0",
"4.0 to 20.1 A",
"backbone carbonyl"
],
"kw_zh":[
"雙齒 100 變 0",
"4.0 變 20.1 Å",
"主鏈羰基"
],
"q_en":"Every BoPep4 part the team deposited carries a C-terminal His tag. What does panel (c) imply for them?",
"q_zh":"團隊上傳的每一個 BoPep4 part 都帶 C 端 His 標籤。(c) 圖對它們意味著什麼？",
"opt_en":[
"The charge pair the model says holds the peptide is 20.1 Å apart in the tagged system, so the deposited constructs lack the contact the design rests on.",
"Nothing, because SamyQ cleavage removes the C-terminal tag during secretion.",
"The tag pulls the charge pair closer, so binding is predicted to improve.",
"Nothing, because panel (c) only concerns AtPep1 and not BoPep4."
],
"opt_zh":[
"模型認為抓住胜肽的那對電荷，在加標籤的系統相距 20.1 Å，所以上傳的構築缺少設計所倚靠的那個接觸。",
"沒有影響，因為分泌時 SamyQ 的切割會把 C 端標籤移除。",
"標籤把電荷對拉得更近，所以預測結合會變好。",
"沒有影響，因為 (c) 圖只牽涉 AtPep1，與 BoPep4 無關。"
],
"ans":0,
"trap_en":"Reading the red bar at 99.3 % in panel (a) as healthy engagement; it is monodentate, a backbone carbonyl standing in for the free carboxylate.",
"trap_zh":"把 (a) 圖紅柱的 99.3 % 讀成結合良好；那是單齒，由主鏈羰基頂替了自由羧基。",
"dom":"registry"
},
{
"id":"x04",
"img":"426238dcca98.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26XVQ3FS",
"ask_en":"Point at the green plants on this rack. What can you conclude?",
"ask_zh":"指著這盤架上還綠的植株，你能下什麼結論？",
"a_en":"The hydroponic rack after four days at 37 °C. Most rosettes have bleached to white or pale yellow. Green is retained across the ACC deaminase row at all four dilutions, and also in the 1/40 WB800 vehicle bracketed in the same block; the 0.1x MS medium control in that block is bleached. It is one photograph of one rack, three seedlings per bracketed group, no repeat and no quantification on the panel itself.",
"a_zh":"這是在 37 °C 放四天之後的水耕盤架。多數蓮座葉已經白化或變成淡黃。ACC deaminase 那一列四個稀釋度都還留著綠色，同一區塊裡被括起來的 1/40 WB800 載體對照也是綠的；同區塊的 0.1x MS 培養基對照則已白化。這只是一盤、一張照片，每個括號組三株，沒有重複，也沒有任何量化。",
"kw_en":[
"bleached rosettes",
"vehicle also green",
"one rack"
],
"kw_zh":[
"白化蓮座葉",
"載體也是綠的",
"只有一盤"
],
"q_en":"The 1/40 WB800 vehicle beside the ACC deaminase row is also green. What does that do to the claim?",
"q_zh":"ACC deaminase 列旁邊的 1/40 WB800 載體對照也是綠的。這對結論有什麼影響？",
"opt_en":[
"It weakens it: a control with no protectant survived as well, so greenness in that block cannot be attributed to the cargo.",
"Nothing, because the WB800 vehicle is known to be inert.",
"It strengthens it, because the vehicle carries the same ACC deaminase cassette.",
"It means the ACC deaminase dose was too low to matter at any dilution."
],
"opt_zh":[
"會削弱結論：一個不含保護蛋白的對照也活得一樣好，所以那一區塊的綠色不能歸功於貨物蛋白。",
"沒有影響，因為已知 WB800 載體本身是惰性的。",
"會強化結論，因為載體帶有相同的 ACC deaminase 卡匣。",
"代表任何稀釋度下 ACC deaminase 劑量都低到沒有作用。"
],
"ans":0,
"trap_en":"Scoring green against bleached across the rack by eye and calling it an effect of the supernatant, when the matching vehicle control in the same block is green too.",
"trap_zh":"用肉眼比對整盤的綠與白化就當成上清液的效果，但同區塊相對應的載體對照同樣是綠的。",
"dom":"registry"
},
{
"id":"x05",
"img":"4ff207877161.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26XVQ3FS",
"ask_en":"What is this pre-stress rack photograph good for?",
"ask_zh":"這張逆境前的盤架照片能用來做什麼？",
"a_en":"The same hydroponic rack photographed before the heat stress, with 15-day-old Arabidopsis. Every plug is green and the rosettes look comparable. The rack carries ACC deaminase at 1/40, 1/60, 1/80 and 1/100, BoPep4 at the same four dilutions, and a 1/40 WB800 vehicle plus a 0.1x MS medium control repeated for each arm, three seedlings per bracket. White fuzz is visible on at least two plugs. This image carries no measurement.",
"a_zh":"這是同一組水耕盤架在熱逆境之前拍的，裡面是 15 天大的阿拉伯芥。每個孔的植株都是綠的，蓮座葉看起來彼此相當。盤上有 ACC deaminase 的 1/40、1/60、1/80、1/100，BoPep4 同樣四個稀釋度，以及每一臂各自重複的 1/40 WB800 載體與 0.1x MS 培養基對照，每括號三株。至少兩個孔上看得到白色菌絲。這張照片本身沒有任何測量值。",
"kw_en":[
"baseline image",
"uniform green",
"two fuzzy plugs"
],
"kw_zh":[
"基線照片",
"一致的綠",
"兩孔有白絲"
],
"q_en":"What is the legitimate use of this photograph in the argument?",
"q_zh":"在論證裡，這張照片的正當用途是什麼？",
"opt_en":[
"Showing the rack started uniform and healthy, so later bleaching is not a pre-existing difference between groups.",
"Showing that ACC deaminase supernatant already improved growth before the heat stress began.",
"Scoring chlorophyll, since leaf colour in this image is quantitative.",
"Establishing the replicate number, which the photograph sets at nine seedlings per group."
],
"opt_zh":[
"顯示盤架一開始是整齊而健康的，所以後來的白化不是各組原本就有的差異。",
"顯示在熱逆境開始前，ACC deaminase 上清液就已經促進了生長。",
"用來評分葉綠素，因為這張影像的葉色是可量化的。",
"用來確立重複數，照片顯示每組有九株。"
],
"ans":0,
"trap_en":"Reading small size differences in the baseline photograph as a dose response; nothing was measured at this point.",
"trap_zh":"把基線照片裡細微的大小差異讀成劑量反應；這個時間點什麼都還沒量。",
"dom":"registry"
},
{
"id":"x06",
"img":"563e8334c64d.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26LYCBW0",
"ask_en":"Walk me through the four trajectory panels.",
"ask_zh":"帶我看一下這四張軌跡圖。",
"a_en":"Eight peptide-bound systems plus apo PEPR1, 30 ns each, 1,500 frames, smoothed over 500 ps. Panel (a) is receptor Ca RMSD against a 3.0 A gate, (b) peptide backbone RMSD in the receptor frame against 4.0 A, (c) the minimum heavy-atom distance across Asn23-Arg487 with the 4 A cut-off and the 5GR8 crystal value at 2.4 A, and (d) clamp contacts against a floor of 3 of 4. Only the two 9-23 systems leave the band for long.",
"a_zh":"八個結合胜肽的系統加上單獨的 PEPR1，各跑 30 ns、1,500 frames，用 500 ps 滾動平均平滑。(a) 是受體 Cα RMSD 對 3.0 Å 的門檻，(b) 是在受體座標下的胜肽主鏈 RMSD 對 4.0 Å，(c) 是 Asn23–Arg487 的最短重原子距離，標了 4 Å 判定線與 5GR8 晶體的 2.4 Å，(d) 是夾持接觸數對 4 取 3 的底線。只有兩個 9–23 系統長時間離開區間。",
"kw_en":[
"30 ns, 1500 frames",
"acceptance gates",
"9-23 pH 5.5"
],
"kw_zh":[
"30 ns、1500 frames",
"驗收門檻",
"9–23 pH 5.5"
],
"q_en":"The red trace, wild type plus C-terminal His6, hugs the wild type in panel (c). Why is that misleading?",
"q_zh":"紅色曲線（野生型加 C 端 His6）在 (c) 圖幾乎貼著野生型。為什麼這會誤導人？",
"opt_en":[
"Panel (c) is a minimum heavy-atom distance, which a backbone carbonyl can satisfy; in that system the bidentate carboxylate contact is 0.0 % of frames.",
"The red trace is in fact above the 4 A line for most of the run.",
"The tagged system was only run for 10 ns, so the rest of its trace is padding.",
"The minimum distance in the tagged system is measured to a different arginine."
],
"opt_zh":[
"(c) 圖量的是最短重原子距離，主鏈羰基就能滿足；而在那個系統裡，雙齒羧基接觸是 0.0 % 的 frames。",
"紅色曲線其實大半段都在 4 Å 線之上。",
"加標籤的系統只跑了 10 ns，後面的曲線是補上去的。",
"加標籤系統的最短距離是量到另一個精胺酸。"
],
"ans":0,
"trap_en":"Taking a trace that stays inside the gates as evidence of binding; the tagged and truncated systems stay inside while losing the contact the design rests on.",
"trap_zh":"把留在門檻內的曲線當成結合的證據；加標籤與截短的系統都待在門檻內，卻失去了設計所倚靠的接觸。",
"dom":"registry"
},
{
"id":"x07",
"img":"5e77975cbd45.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26LYCBW0",
"ask_en":"Which of these bars should worry you most?",
"ask_zh":"這些長條裡，哪一根最該讓你擔心？",
"a_en":"Fraction of the 1,500 production frames in which each contact is made, for eight systems. Dashed red lines mark the 60 % pass mark on Arg487 within 4 A and on clamp at 3 of 4 or better, written down before the runs. Only BoPep4 9-23 at pH 5.5 fails, at 23.6 % and 19.3 %. BoPep4 WT plus C-His6 reads 99.8, 100.0, 99.7 and 100.0, and 15-23, the pre-registered negative control, reads 99.9, 97.1, 99.9 and 100.0.",
"a_zh":"這是八個系統在 1,500 個生產 frames 中各接觸出現的比例。紅色虛線標出事前寫下的 60 % 通過線，分別落在 Arg487 ≤4 Å 與夾持 ≥3/4 兩欄。只有 BoPep4 9–23 在 pH 5.5 不通過，為 23.6 % 與 19.3 %。BoPep4 WT 加 C-His6 是 99.8、100.0、99.7、100.0；事前登記為陰性對照的 15–23 則是 99.9、97.1、99.9、100.0。",
"kw_en":[
"60 % pass mark",
"C-His6 passes all",
"9-23 pH 5.5 fails"
],
"kw_zh":[
"60 % 通過線",
"C-His6 全數通過",
"9–23 pH 5.5 不通過"
],
"q_en":"Which system here is the clearest sign the criteria are not measuring binding?",
"q_zh":"圖上哪一個系統最清楚顯示這些標準量的不是結合？",
"opt_en":[
"BoPep4 WT plus C-His6, which passes all four although the His tag removes the free C-terminal carboxylate entirely.",
"BoPep4 9-23 at pH 5.5, which fails two of the four.",
"AtPep1 7-23, the literature control, which scores 100 %.",
"BoPep4 7-23, whose Asn465 occupancy is only 62.9 %."
],
"opt_zh":[
"BoPep4 WT 加 C-His6：His 標籤把自由 C 端羧基完全拿掉，它卻四項全過。",
"BoPep4 9–23 於 pH 5.5，它四項中有兩項不過。",
"文獻對照 AtPep1 7–23，它拿到 100 %。",
"BoPep4 7–23，它的 Asn465 佔有率只有 62.9 %。"
],
"ans":0,
"trap_en":"Reading a bar near 100 % as a strong interface; occupancy counts a distance being satisfied, not which chemical group satisfies it.",
"trap_zh":"把接近 100 % 的長條當成界面很強；佔有率只算距離有沒有被滿足，不管是哪個化學基團滿足它。",
"dom":"registry"
},
{
"id":"x08",
"img":"62bf14698087.avif",
"dir":"reg",
"tier":3,
"part":"BBa_269A97I7",
"ask_en":"Does the BoPep4 salinity run show a protective effect?",
"ask_zh":"這組 BoPep4 鹽逆境試驗有顯示保護效果嗎？",
"a_en":"Three panels from the BoPep4 salinity run, twelve groups each, one bar per group, three seedlings, no error bars and no repeat. On fresh weight the best salt-stressed group is 1/40 BoPep4 at about 0.049 g, against 0.043 g for the 1/40 WB800 vehicle and 0.028 g for 0.1x MS medium. On chlorophyll per plant 1/40 BoPep4 reaches about 8.4 ug against 2.1 and 4.4. The third panel reverses the order.",
"a_zh":"這是 BoPep4 鹽逆境試驗的三張圖，每張 12 組，每組一根柱、三株苗，沒有誤差棒也沒有重複。鮮重上，鹽逆境中最高的是 1/40 BoPep4 約 0.049 g，1/40 WB800 載體約 0.043 g，0.1x MS 培養基約 0.028 g。每株葉綠素上，1/40 BoPep4 約 8.4 µg，對照分別是 2.1 與 4.4。第三張圖則把順序倒過來。",
"kw_en":[
"1/40 highest",
"no error bars",
"third panel reverses"
],
"kw_zh":[
"1/40 最高",
"沒有誤差棒",
"第三圖倒轉"
],
"q_en":"Panels one and two favour 1/40 BoPep4. What does the third panel do?",
"q_zh":"前兩張圖都偏向 1/40 BoPep4，第三張圖呢？",
"opt_en":[
"It reverses the ranking: 0.1x MS medium is the highest salt-stressed group at about 0.99, above 1/40 BoPep4 at about 0.81.",
"It repeats the same ranking on a smaller scale, with 1/40 BoPep4 still on top.",
"It shows 1/40 BoPep4 highest again, this time with error bars added.",
"It drops the medium control, so no comparison can be made there."
],
"opt_zh":[
"它把順序倒過來：0.1x MS 培養基是鹽逆境組中最高的，約 0.99，高於 1/40 BoPep4 的約 0.81。",
"它以較小的尺度重複同樣的排序，1/40 BoPep4 仍然最高。",
"它再次顯示 1/40 BoPep4 最高，而且這次加了誤差棒。",
"它把培養基對照拿掉了，所以沒辦法比較。"
],
"ans":0,
"trap_en":"Quoting the chlorophyll panel alone; the relative chlorophyll panel on the same figure puts the untreated medium control on top.",
"trap_zh":"只引用葉綠素那一張；同一張圖的相對葉綠素把未處理的培養基對照放在最上面。",
"dom":"registry"
},
{
"id":"x09",
"img":"65b84544f840.avif",
"dir":"reg",
"tier":3,
"part":"BBa_269A97I7",
"ask_en":"Read me the heated groups in this BoPep4 heat figure.",
"ask_zh":"把這張 BoPep4 熱逆境圖的加熱組念給我聽。",
"a_en":"Three panels, twelve groups, one bar per group. Heat flattens everything: fresh weight falls from about 0.09 g unheated to between 0.011 and 0.030 g heated. Among the heated groups the 1/40 WB800 vehicle is the heaviest at about 0.030 g, above every BoPep4 dilution. On chlorophyll per plant 1/40 BoPep4 leads at about 2.2 ug against 0.6 for the vehicle, and on relative chlorophyll it leads at about 0.81 against 0.26. The two readouts disagree.",
"a_zh":"三張圖、12 組，每組一根柱。熱逆境把一切壓平：鮮重從未加熱的約 0.09 g 掉到加熱後的 0.011 至 0.030 g。加熱組裡最重的是 1/40 WB800 載體，約 0.030 g，高於每一個 BoPep4 稀釋度。每株葉綠素上，1/40 BoPep4 約 2.2 µg，載體約 0.6；相對葉綠素上，1/40 BoPep4 約 0.81，載體約 0.26。兩種讀數彼此不一致。",
"kw_en":[
"vehicle heaviest",
"1/40 leads chlorophyll",
"readouts disagree"
],
"kw_zh":[
"載體最重",
"1/40 葉綠素領先",
"讀數不一致"
],
"q_en":"On fresh weight, which heated group is the heaviest?",
"q_zh":"就鮮重而言，加熱組裡哪一組最重？",
"opt_en":[
"The 1/40 WB800 vehicle, at about 0.030 g, above every BoPep4 dilution.",
"1/40 BoPep4, at about 0.030 g, just above the vehicle.",
"0.1x MS medium, at about 0.055 g.",
"1/100 BoPep4, which recovers to roughly the unheated level."
],
"opt_zh":[
"1/40 WB800 載體，約 0.030 g，高於每一個 BoPep4 稀釋度。",
"1/40 BoPep4，約 0.030 g，剛好高過載體。",
"0.1x MS 培養基，約 0.055 g。",
"1/100 BoPep4，它回復到大約未加熱的水準。"
],
"ans":0,
"trap_en":"Showing only the chlorophyll panels; on fresh weight the vehicle control sits above every treated group.",
"trap_zh":"只秀葉綠素那兩張；在鮮重上，載體對照高於每一個處理組。",
"dom":"registry"
},
{
"id":"x10",
"img":"6e350dfaf39f.avif",
"dir":"reg",
"tier":3,
"part":"BBa_262YYNPV",
"ask_en":"What does this AcdS folding figure claim, and what does it not?",
"ask_zh":"這張 AcdS 摺疊圖主張了什麼，又沒有主張什麼？",
"a_en":"A 236 nt initiation window folded in ViennaRNA 2.7.2 at 37 °C. The table ranks the ordered design third of 49,987: start+15 accessibility 0.563 to 0.773, Shine-Dalgarno core 0.088 to 0.203, twelve synonymous codon changes, 15 bases recoded, CAI 0.85 to 0.75. Panels (b) and (c) are predicted structures and (d) the per-base unpaired probability. Two limits: initiation has never been measured, and the deposited fusion keeps the 93 bp SamyQ segment identical to wild type.",
"a_zh":"這是 236 nt 的起始視窗，用 ViennaRNA 2.7.2 在 37 °C 下摺疊。表格顯示訂購的設計在 49,987 個變體中排第 3：start+15 可及性 0.563 升到 0.773，Shine-Dalgarno 核心 0.088 升到 0.203，12 個同義密碼子變更、15 個鹼基改寫，CAI 由 0.85 降到 0.75。(b)(c) 是預測結構，(d) 是每鹼基未配對機率。兩個限制：起始從未被量測；而上傳的融合序列中，93 bp 的 SamyQ 區段與野生型完全相同。",
"kw_en":[
"rank 3 of 49,987",
"0.563 to 0.773",
"SamyQ unchanged in deposit"
],
"kw_zh":[
"49,987 中第 3",
"0.563 到 0.773",
"上傳的 SamyQ 未改"
],
"q_en":"The folded window includes the SamyQ signal peptide. Why does that matter for the deposited part?",
"q_zh":"摺疊的視窗包含 SamyQ 訊號胜肽，這對上傳的 part 有什麼影響？",
"opt_en":[
"The starred candidate recodes bases inside SamyQ, but the deposited fusions keep that 93 bp segment identical to wild type, so figure and deposit come from different runs.",
"It does not matter, because SamyQ is cleaved off the mature protein anyway.",
"It means the signal peptide was redesigned in the deposited sequence as well.",
"It means the 236 nt window is too short to reach the start codon."
],
"opt_zh":[
"被標記的候選在 SamyQ 內部改寫了鹼基，但上傳的融合序列把那 93 bp 區段保持與野生型相同，所以圖和上傳的序列來自不同次執行。",
"沒有影響，因為 SamyQ 本來就會從成熟蛋白上被切掉。",
"代表上傳的序列裡訊號胜肽也一併重新設計過。",
"代表 236 nt 的視窗太短，根本涵蓋不到起始密碼子。"
],
"ans":0,
"trap_en":"Assuming the sequence drawn in this panel is the sequence you would order; for AcdS the deposit keeps SamyQ wild type.",
"trap_zh":"以為圖上畫的序列就是你會訂到的序列；AcdS 的上傳版本把 SamyQ 保留為野生型。",
"dom":"registry"
},
{
"id":"x11",
"img":"6f90097d0ba9.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26YHOQCL",
"ask_en":"Explain this predicted-versus-measured table.",
"ask_zh":"解釋一下這張「預測對上量測」的表。",
"a_en":"Four rows setting the pre-registered acceptance criteria against what the run gave. All four were predicted to fail. All four passed: receptor Ca RMSD 2.10 A against a 3.0 A gate, peptide backbone RMSD 1.83 A against 4.0 A, Asn23-Arg487 within 4 A for 99.9 % of frames, and clamp at 3 of 4 or better for 100.0 %. The note under the table says the criteria cannot tell this fragment from the wild type.",
"a_zh":"四列把事前登記的驗收標準和實際跑出來的結果並排。四項都被預測為不通過，結果四項全過：受體 Cα RMSD 2.10 Å（門檻 3.0 Å）、胜肽主鏈 RMSD 1.83 Å（門檻 4.0 Å）、Asn23–Arg487 在 4 Å 內佔 99.9 % 的 frames、夾持 ≥3/4 佔 100.0 %。表下的註記直說：這些標準分辨不出這個片段和野生型。",
"kw_en":[
"pre-registered",
"predicted FAIL",
"four of four passed"
],
"kw_zh":[
"事前登記",
"預測不通過",
"四項全過"
],
"q_en":"15-23 was built as a negative control and passed every criterion. What did the team do about it?",
"q_zh":"15–23 是當陰性對照做的，卻每一項都通過。團隊怎麼處理？",
"opt_en":[
"Published it and concluded the criteria were measuring something other than binding.",
"Loosened the gates until 15-23 failed, then reported the revised criteria.",
"Dropped 15-23 from the panel as a failed simulation.",
"Reclassified 15-23 as a positive control and claimed a second active peptide."
],
"opt_zh":[
"照樣發表，並下結論說這些標準量到的不是結合。",
"把門檻放寬到 15–23 不通過為止，再報告修改後的標準。",
"把 15–23 當成失敗的模擬，從面板中拿掉。",
"把 15–23 改歸類為陽性對照，宣稱找到第二個有活性的胜肽。"
],
"ans":0,
"trap_en":"Reading four passes as four successes; failure was the prediction, so a pass here is a failure of the test, not of the peptide.",
"trap_zh":"把四項通過讀成四項成功；原本預測的就是不通過，所以這裡的通過是測試失敗，不是胜肽失敗。",
"dom":"registry"
},
{
"id":"x12",
"img":"773fb3882789.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26IN6G1D",
"ask_en":"What changed between the wild type and the ordered LEA14 cassette?",
"ask_zh":"野生型和訂購的 LEA14 卡匣之間改了什麼？",
"a_en":"A 236 nt initiation window folded in ViennaRNA 2.7.2 at 37 °C, wild type against the ordered recoding, ranked first of 43,944. Start+15 accessibility rises from 0.538 to 0.669 and the balance score from 0.895 to 0.976, but Shine-Dalgarno core accessibility falls slightly, 0.357 to 0.307, and CAI drops from 0.85 to 0.81. Six codons changed, nine bases recoded. All predicted; initiation has not been measured, and the deposit keeps SamyQ wild type.",
"a_zh":"236 nt 的起始視窗，用 ViennaRNA 2.7.2 在 37 °C 摺疊，野生型對上訂購的改寫版，在 43,944 個變體中排第 1。start+15 可及性由 0.538 升到 0.669，平衡分數由 0.895 升到 0.976，但 Shine-Dalgarno 核心可及性略降，從 0.357 到 0.307，CAI 由 0.85 降到 0.81。改了 6 個密碼子、9 個鹼基。全是預測；起始未經量測，且上傳版本的 SamyQ 保留野生型。",
"kw_en":[
"rank 1 of 43,944",
"SD core falls",
"6 codons, 9 bases"
],
"kw_zh":[
"43,944 中第 1",
"SD 核心下降",
"6 密碼子、9 鹼基"
],
"q_en":"This variant ranks first of 43,944 but its Shine-Dalgarno accessibility goes down. How is that possible?",
"q_zh":"這個變體在 43,944 個中排第 1，Shine-Dalgarno 可及性卻下降了，怎麼可能？",
"opt_en":[
"The ranking uses a balance score combining start-codon and Shine-Dalgarno accessibility, so a large start+15 gain outweighs a small Shine-Dalgarno loss.",
"The ranking uses minimum free energy alone, so accessibility does not enter it.",
"The Shine-Dalgarno value is a typo; the structure panels show it rising.",
"Rank 1 refers to the codon adaptation index, which improved."
],
"opt_zh":[
"排名用的是把起始密碼子與 Shine-Dalgarno 可及性合併的平衡分數，所以 start+15 的大幅提升蓋過 Shine-Dalgarno 的小幅下降。",
"排名只看最低自由能，可及性根本不計入。",
"Shine-Dalgarno 那個數字是打錯了，結構圖顯示它是上升的。",
"第 1 名指的是密碼子適應指數，而那項有改善。"
],
"ans":0,
"trap_en":"Reporting rank 1 of 43,944 as a measured improvement; it is a position inside a folding-model search, not an expression result.",
"trap_zh":"把「43,944 中第 1」講成量到的改善；那只是摺疊模型搜尋裡的名次，不是表現量結果。",
"dom":"registry"
},
{
"id":"x13",
"img":"857f2439d39f.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26XVQ3FS",
"ask_en":"What do the significance brackets in panel (b) compare?",
"ask_zh":"(b) 圖裡的顯著性括號在比較什麼？",
"a_en":"Four readouts from the agar thermo-priming set on day 15, one plate per condition. In (a) fresh weight, the unheated untreated plate is 0.065 g while pre-, co- and post-treatment reach about 0.455, 0.23 and 0.665 g; all heated groups sit near 0.02 to 0.04 g. Panel (b) divides chlorophyll by that weight and sets the unheated untreated plate as the 1.0 reference. Panel (c) is unnormalised. In (d) the co-treatment box collapses to a line near 20 mm.",
"a_zh":"這是洋菜熱馴化組第 15 天的四項讀數，每個條件只有一盤。(a) 鮮重：未加熱未處理為 0.065 g，前、同、後處理分別約 0.455、0.23、0.665 g；加熱各組都在 0.02 到 0.04 g 之間。(b) 把葉綠素除以那個鮮重，並以未加熱未處理盤當作 1.0 的基準。(c) 則未標準化。(d) 中同處理那一格塌成一條約 20 mm 的線。",
"kw_en":[
"one plate per condition",
"1.0 reference",
"collapsed box"
],
"kw_zh":[
"每條件一盤",
"1.0 基準",
"塌成一線的盒"
],
"q_en":"In panel (b), what do the four **** brackets actually compare?",
"q_zh":"(b) 圖的四個 **** 括號實際上在比較什麼？",
"opt_en":[
"The unstressed untreated control against the other groups; no bracket compares a treated group with its own heat-stressed control.",
"Each treatment against its own heat-stressed control, which is the comparison that matters.",
"Pre-treatment against post-treatment within the heat-stressed block.",
"The normalised and unnormalised chlorophyll panels against each other."
],
"opt_zh":[
"是未逆境、未處理的對照對上其他各組；沒有任何括號把處理組和它自己的熱逆境對照相比。",
"是每個處理對上它自己的熱逆境對照，也就是真正重要的那個比較。",
"是熱逆境區塊內前處理對上後處理。",
"是標準化與未標準化兩張葉綠素圖互比。"
],
"ans":0,
"trap_en":"Taking the brackets as evidence that ACC deaminase helped; they only show other groups differ from the unstressed untreated plate.",
"trap_zh":"把這些括號當成 ACC deaminase 有效的證據；它們只顯示其他組和未逆境未處理那盤不同。",
"dom":"registry"
},
{
"id":"x14",
"img":"967ad6a6fb98.avif",
"dir":"reg",
"tier":3,
"part":"BBa_269A97I7",
"ask_en":"Why does this vehicle-only figure sit on a BoPep4 part page?",
"ask_zh":"為什麼這張純載體的圖會放在 BoPep4 的 part 頁上？",
"a_en":"The vehicle on its own: TB medium carrying WB800 with no protectant, at 1, 1/2, 1/4, 1/8, 1/16 and 0, at pH 5.7 and pH 7.1. Undiluted vehicle drops fresh weight to about 0.006 g against 0.065 g with no medium at all, and even 1/16 stays below the no-medium group. Chlorophyll per plant follows the same order. Relative chlorophyll reverses it, with the 1/2 dilutions topping that panel near 3.3 and 3.5.",
"a_zh":"這是單獨測載體：帶 WB800 但不含保護蛋白的 TB 培養液，稀釋為 1、1/2、1/4、1/8、1/16 與 0，並分 pH 5.7 與 pH 7.1。未稀釋的載體把鮮重壓到約 0.006 g，而完全不加培養液是約 0.065 g；就算 1/16 也仍低於不加培養液那組。每株葉綠素的順序相同。相對葉綠素則倒過來，1/2 那兩組衝到約 3.3 與 3.5 的最高點。",
"kw_en":[
"0.065 to 0.006 g",
"1/16 still below",
"ratio inverts"
],
"kw_zh":[
"0.065 降到 0.006 g",
"1/16 仍偏低",
"比值倒轉"
],
"q_en":"Why is every protectant run read against a 1/40 WB800 control rather than medium alone?",
"q_zh":"為什麼每次保護蛋白試驗都要對 1/40 WB800 來讀，而不是只對培養基？",
"opt_en":[
"Because the vehicle is not inert: undiluted it drops fresh weight from about 0.065 g to about 0.006 g, so medium alone is the wrong baseline.",
"Because 0.1x MS medium cannot be made at those dilutions.",
"Because WB800 supernatant already contains the protectant at a known concentration.",
"Because pH 5.7 and pH 7.1 give different results, so a second control is needed."
],
"opt_zh":[
"因為載體不是惰性的：未稀釋時把鮮重從約 0.065 g 壓到約 0.006 g，所以單用培養基當基準是錯的。",
"因為 0.1x MS 培養基沒辦法配到那些稀釋度。",
"因為 WB800 上清液本來就含有已知濃度的保護蛋白。",
"因為 pH 5.7 和 pH 7.1 結果不同，所以需要第二個對照。"
],
"ans":0,
"trap_en":"Reading the relative chlorophyll panel as a benefit of the vehicle; the ratio climbs because the fresh weight in its denominator has collapsed.",
"trap_zh":"把相對葉綠素那張讀成載體有好處；比值變高是因為分母的鮮重垮掉了。",
"dom":"registry"
},
{
"id":"x15",
"img":"a1dda76e26ac.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26YHOQCL",
"ask_en":"What does 15-23 keep and what does it give up?",
"ask_zh":"15–23 保住了什麼、又放棄了什麼？",
"a_en":"Panel (a) plots total contact occupancy for each BoPep4 residue on the 30 ns wild-type run, residues 1-14 lost in red and 15-23 retained in teal; Asn23 is the tallest bar near 5.9, and His14, just outside the fragment, is about 4.2. Panel (b) is the ledger: 49.8 % of contact occupancy retained, 8 of 8 crystallographic contacts kept, 17 receptor partners lost including 5 tyrosines, Asn23-Arg487 kept, Arg9-Asp179 and Lys7-Asp129 lost.",
"a_zh":"(a) 圖畫出 30 ns 野生型軌跡中每個 BoPep4 殘基的總接觸佔有率，紅色是 15–23 丟掉的 1–14 殘基，藍綠色是保留的 15–23；Asn23 是最高的一根，約 5.9，而剛好落在片段外的 His14 約 4.2。(b) 是帳本：接觸佔有率保留 49.8 %，8 個晶體接觸全數保留，失去 17 個受體夥伴（其中 5 個酪胺酸），Asn23–Arg487 保住，Arg9–Asp179 與 Lys7–Asp129 丟失。",
"kw_en":[
"49.8 % retained",
"8 of 8 contacts",
"17 partners lost"
],
"kw_zh":[
"保留 49.8 %",
"8 個接觸全留",
"失去 17 夥伴"
],
"q_en":"15-23 keeps all eight crystallographic contacts. Why is that not reassuring?",
"q_zh":"15–23 保住了全部八個晶體接觸，為什麼這並不讓人放心？",
"opt_en":[
"The checklist contacts survive while half the occupancy and two near-permanent salt bridges do not, so the checklist is not tracking the whole interface.",
"Because the eight contacts were measured on a different receptor from the one simulated.",
"Because all eight contacts lie inside residues 1-14 and were therefore lost.",
"Because contact occupancy below 50 % is conventionally ignored."
],
"opt_zh":[
"清單上的接觸都留著，但一半的佔有率和兩條近乎恆存的鹽橋沒了，可見這份清單追蹤的不是整個界面。",
"因為那八個接觸是在另一個受體上量的，不是模擬的這個。",
"因為那八個接觸全都位在 1–14 殘基裡，所以都丟失了。",
"因為低於 50 % 的接觸佔有率照慣例可以忽略。"
],
"ans":0,
"trap_en":"Treating 'all eight contacts kept' as binding preserved; 17 receptor partners and half the contact occupancy are gone.",
"trap_zh":"把「八個接觸全留」當成結合沒變；17 個受體夥伴和一半的接觸佔有率已經不見了。",
"dom":"registry"
},
{
"id":"x16",
"img":"bf0adfe3ac46.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26XVQ3FS",
"ask_en":"Do these ACC deaminase panels agree with each other?",
"ask_zh":"這些 ACC deaminase 的圖彼此一致嗎？",
"a_en":"Three panels, twelve groups, one bar per group, three seedlings, no error bars. On chlorophyll per plant every heated ACC deaminase dilution sits above both heated controls, about 2.6 to 3.0 ug against 2.0 for the 1/40 WB800 vehicle and 1.75 for 0.1x MS medium. On fresh weight the heated bars are flat and do not line up: 1/40 ACC deaminase is about 0.014 g, below the vehicle at about 0.018 g.",
"a_zh":"三張圖、12 組，每組一根柱、三株苗，沒有誤差棒。每株葉綠素上，加熱後每一個 ACC deaminase 稀釋度都高於兩個加熱對照，約 2.6 到 3.0 µg，而 1/40 WB800 載體約 2.0、0.1x MS 培養基約 1.75。鮮重上加熱各組都很平，而且對不上：1/40 ACC deaminase 約 0.014 g，低於載體的約 0.018 g。",
"kw_en":[
"chlorophyll favours ACCD",
"fresh weight does not",
"no error bars"
],
"kw_zh":[
"葉綠素偏向 ACCD",
"鮮重不支持",
"沒有誤差棒"
],
"q_en":"Chlorophyll favours ACC deaminase and fresh weight does not. How does the page handle that?",
"q_zh":"葉綠素偏向 ACC deaminase，鮮重卻不支持，頁面怎麼處理？",
"opt_en":[
"It says so: the captions state that the two readouts point opposite ways rather than quoting the chlorophyll panel alone.",
"It removes the fresh-weight panel from the figure.",
"It normalises fresh weight away by plotting only ratios.",
"It treats fresh weight as the primary endpoint and reports no effect at all."
],
"opt_zh":[
"直說：圖說明寫出兩種讀數指向相反，而不是只引用葉綠素那一張。",
"把鮮重那張從圖裡拿掉。",
"只畫比值，把鮮重標準化掉。",
"把鮮重當成主要指標，然後報告完全沒有效果。"
],
"ans":0,
"trap_en":"Quoting the chlorophyll gain alone; with one bar per group and no repeat, a 1 ug gap is not a result on its own.",
"trap_zh":"只引用葉綠素的增幅；每組一根柱又沒有重複，1 µg 的差距本身構不成結果。",
"dom":"registry"
},
{
"id":"x17",
"img":"c0ae657fc1d1.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26YHOQCL",
"ask_en":"Why was 15-23 picked off this docking ladder?",
"ask_zh":"為什麼從這張對接階梯上挑出 15–23？",
"a_en":"Every N-terminal truncation from 1-23 to 17-23 docked twice: AlphaFold3 ipTM in green on the left axis, HADDOCK score in grey on the right. HADDOCK worsens steadily, from -197.8 for the wild type to -97.8 at 15-23, which is circled in red. ipTM stays between 0.86 and 0.94 down to 13-23, drops to 0.54 at 14-23, then reads 0.63, 0.62 and 0.73. Shading marks where AtPep1 equivalents stop being active in the literature.",
"a_zh":"從 1–23 到 17–23 的每一個 N 端截短都做了兩種對接：綠色是左軸的 AlphaFold3 ipTM，灰色是右軸的 HADDOCK 分數。HADDOCK 一路變差，從野生型的 -197.8 到 15–23 的 -97.8，15–23 被紅圈標出。ipTM 一直到 13–23 都維持在 0.86 到 0.94，在 14–23 掉到 0.54，之後分別是 0.63、0.62、0.73。背景色標出文獻中 AtPep1 對應片段失去活性的位置。",
"kw_en":[
"two scoring methods",
"-197.8 to -97.8",
"ipTM not monotonic"
],
"kw_zh":[
"兩種評分法",
"-197.8 到 -97.8",
"ipTM 非單調"
],
"q_en":"ipTM for 17-23 is about 0.73, higher than 15-23 at 0.63. What follows from that?",
"q_zh":"17–23 的 ipTM 約 0.73，高於 15–23 的 0.63。這能推出什麼？",
"opt_en":[
"The ipTM curve is not monotonic in truncation length, so a single ipTM value cannot rank these fragments by activity.",
"17-23 is the better peptide and should have been ordered instead of 15-23.",
"15-23 was mis-docked and that run should be repeated.",
"ipTM and HADDOCK agree here, so both confirm 17-23 is active."
],
"opt_zh":[
"ipTM 隨截短長度並非單調變化，所以單一個 ipTM 值無法依活性排序這些片段。",
"17–23 是比較好的胜肽，當初應該訂它而不是 15–23。",
"15–23 對接出錯，那一次應該重跑。",
"這裡 ipTM 和 HADDOCK 一致，兩者都確認 17–23 有活性。"
],
"ans":0,
"trap_en":"Reading the ladder as a dose-response in peptide length; the two docking scores disagree in shape and neither was tested in a plant.",
"trap_zh":"把這張階梯讀成胜肽長度的劑量反應；兩種對接分數的形狀彼此不合，而且都沒有在植物上測過。",
"dom":"registry"
},
{
"id":"x18",
"img":"c82f7570ce2f.avif",
"dir":"reg",
"tier":3,
"part":"BBa_269A97I7",
"ask_en":"Can you rank the dilutions from this salinity rack photograph?",
"ask_zh":"光看這張鹽逆境盤架照片，你能把稀釋度排序嗎？",
"a_en":"The salinity rack with 15-day-old Arabidopsis: the upper block at 0 mM NaCl, the lower block at 100 mM. Within each block BoPep4 runs at 1/40, 1/60, 1/80 and 1/100, with a 1/40 WB800 vehicle and a 0.1x MS medium control, three seedlings per bracket. The salt block is visibly smaller, with purple-red and bleached leaves across all groups including 1/40. One rack, one photograph, no scoring, no repeat.",
"a_zh":"這是鹽逆境盤架，裡面是 15 天大的阿拉伯芥：上半區 0 mM NaCl，下半區 100 mM。每一區裡 BoPep4 有 1/40、1/60、1/80、1/100，加上 1/40 WB800 載體與 0.1x MS 培養基對照，每括號三株。加鹽那一區明顯較小，所有組（含 1/40）都有紫紅與白化的葉片。只有一盤、一張照片，沒有評分、沒有重複。",
"kw_en":[
"two salt blocks",
"purple and bleached",
"three seedlings"
],
"kw_zh":[
"兩個鹽區塊",
"紫紅與白化",
"每組三株"
],
"q_en":"A judge asks you to rank the four dilutions from this image. What is the right answer?",
"q_zh":"評審要你從這張影像把四個稀釋度排序，正確的回答是什麼？",
"opt_en":[
"You cannot: three seedlings per bracket in one rack, no scoring and no repeat, so the ordering has to come from the measured panels.",
"You can: 1/40 is clearly the largest in both blocks.",
"You can, by counting leaves per plug, which is a validated proxy for biomass.",
"You cannot, because this photograph was taken before the salt was applied."
],
"opt_zh":[
"不能：一盤裡每括號只有三株，沒有評分也沒有重複，排序必須回到有量測的圖去看。",
"可以：1/40 在兩個區塊裡都明顯最大。",
"可以，數每個孔的葉片數就行，那是經過驗證的生物量替代指標。",
"不能，因為這張照片是在加鹽之前拍的。"
],
"ans":0,
"trap_en":"Reading leaf colour across the rack as a dose effect; position and plug-to-plug variation are not controlled in a single rack.",
"trap_zh":"把整盤的葉色差異讀成劑量效應；單一盤架裡並沒有控制位置與孔間變異。",
"dom":"registry"
},
{
"id":"x19",
"img":"c8817e5e189a.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26YHOQCL",
"ask_en":"Which trace is the negative control, and how does it behave?",
"ask_zh":"哪一條是陰性對照，它的表現如何？",
"a_en":"Four systems over 30 ns, 1,500 frames, smoothed over 500 ps. In (a) the teal 15-23 trace is the one that travels furthest, touching about 3.5 A above the 3.0 A gate around 14 to 18 ns, though its 2.10 A mean passes. In (c) 15-23 holds the Asn23-Arg487 distance flat near 2.8 A for the whole run, flatter than the wild type, and in (d) its clamp never leaves 4 of 4. Only 9-23 misbehaves.",
"a_zh":"四個系統各跑 30 ns、1,500 frames，用 500 ps 平滑。(a) 中藍綠色的 15–23 跑得最遠，在 14 到 18 ns 間觸到約 3.5 Å、越過 3.0 Å 門檻，但它的平均值 2.10 Å 仍通過。(c) 中 15–23 把 Asn23–Arg487 距離整段壓在約 2.8 Å，比野生型還平；(d) 中它的夾持從未離開 4/4。只有 9–23 不守規矩。",
"kw_en":[
"15-23 steadiest",
"crosses 3.0 A in (a)",
"9-23 only outlier"
],
"kw_zh":[
"15–23 最平穩",
"(a) 圖越過 3.0 Å",
"只有 9–23 例外"
],
"q_en":"The negative control is the steadiest trace on the salt-bridge panel. What does that tell you?",
"q_zh":"陰性對照在鹽橋那張圖上是最平穩的曲線，這告訴你什麼？",
"opt_en":[
"That the salt bridge survives the truncation, so it cannot distinguish a fragment missing half its interface from the full peptide.",
"That 15-23 binds the receptor more tightly than the wild type does.",
"That the wild-type run was too short to equilibrate properly.",
"That the salt bridge is an artefact of the force field and should be ignored."
],
"opt_zh":[
"鹽橋在截短後仍然存在，所以它分辨不出少了一半界面的片段和完整胜肽。",
"15–23 和受體的結合比野生型更緊。",
"野生型那一次跑太短，沒有平衡好。",
"鹽橋是力場造成的假象，應該忽略。"
],
"ans":0,
"trap_en":"Taking steadiness for affinity; a stable contact over 30 ns is not a binding constant, and no binding assay was run.",
"trap_zh":"把穩定當成親和力；30 ns 內接觸穩定不是結合常數，而且根本沒做結合試驗。",
"dom":"registry"
},
{
"id":"x20",
"img":"de3fe476b68b.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26XVQ3FS",
"ask_en":"How many plates here are marked contaminated, and which ones?",
"ask_zh":"這裡有幾盤被標為污染，是哪幾盤？",
"a_en":"Eight vertical agar plates on day 15: the top row held at 22 °C, the bottom row thermo-primed at 37 °C, columns untreated, pre-, co- and post-treatment. Nine to ten seedlings per plate and one plate per condition, so the plate is the replicate. Three carry a printed *contaminated mark: co-treatment at 22 °C, and under heat both the co-treatment plate and the untreated control. Heated seedlings are white or pale yellow with much shorter roots.",
"a_zh":"第 15 天的八盤垂直洋菜板：上排整段維持 22 °C，下排在 37 °C 熱馴化，欄位由左至右為未加、前處理、同處理、後處理。每盤 9 到 10 株，每個條件只有一盤，所以盤本身就是重複單位。其中三盤印有 *contaminated 標記：22 °C 的同處理，以及加熱組的同處理與未處理對照。加熱的苗是白色或淡黃，根也短得多。",
"kw_en":[
"three contaminated",
"plate is the replicate",
"heat control lost"
],
"kw_zh":[
"三盤污染",
"盤即重複單位",
"熱逆境對照失守"
],
"q_en":"Of the three contaminated plates, which one costs the argument most?",
"q_zh":"三盤污染裡，哪一盤對論證傷害最大？",
"opt_en":[
"The heat-stressed untreated control, because it is the plate any treatment has to beat.",
"The 22 °C co-treatment plate, because it sets the unstressed baseline.",
"The heat-stressed co-treatment plate, because co-treatment is the lead timing.",
"None of them, because contamination was corrected for in the analysis."
],
"opt_zh":[
"加熱的未處理對照，因為任何處理都必須勝過的就是那一盤。",
"22 °C 的同處理盤，因為它決定了未逆境的基線。",
"加熱的同處理盤，因為同處理是主打的施用時機。",
"都不嚴重，因為分析時已經校正了污染。"
],
"ans":0,
"trap_en":"Comparing a treated heat plate against the heat control without noticing that control is one of the three marked contaminated.",
"trap_zh":"拿處理過的加熱盤去比熱逆境對照，卻沒注意到那個對照正是三盤被標污染的其中之一。",
"dom":"registry"
},
{
"id":"x21",
"img":"f2d532ebc455.avif",
"dir":"reg",
"tier":3,
"part":"BBa_26XVQ3FS",
"ask_en":"What floor does this vehicle series set for the ACC deaminase runs?",
"ask_zh":"這組載體系列為 ACC deaminase 的試驗定下了什麼底線？",
"a_en":"The same vehicle-only series repeated on the ACC deaminase page: TB medium carrying WB800 with no protectant at 1, 1/2, 1/4, 1/8, 1/16 and 0, at pH 5.7 and pH 7.1. Fresh weight climbs with dilution at both pH values, from about 0.006 g undiluted to 0.065 g with no medium at pH 5.7, and 0.004 to 0.057 g at pH 7.1. The dose response on this figure belongs to the medium, not to any protectant.",
"a_zh":"同一組純載體系列也出現在 ACC deaminase 頁：帶 WB800 但不含保護蛋白的 TB 培養液，稀釋為 1、1/2、1/4、1/8、1/16 與 0，分 pH 5.7 與 pH 7.1。兩個 pH 下鮮重都隨稀釋上升，pH 5.7 由未稀釋的約 0.006 g 升到不加培養液的約 0.065 g，pH 7.1 則是 0.004 升到 0.057 g。這張圖上的劑量反應屬於培養液本身，不屬於任何保護蛋白。",
"kw_en":[
"vehicle toxicity",
"two pH values",
"dose response of medium"
],
"kw_zh":[
"載體毒性",
"兩個 pH 值",
"培養液的劑量反應"
],
"q_en":"What does this figure establish for the ACC deaminase trials?",
"q_zh":"這張圖為 ACC deaminase 的試驗確立了什麼？",
"opt_en":[
"The toxicity of the carrier itself, which is why the protectant runs compare against a matched 1/40 WB800 vehicle.",
"The optimum pH for ACC deaminase activity, which the enzyme literature puts at 8.0.",
"The detection limit of the chlorophyll assay at low biomass.",
"The dilution at which ACC deaminase stops being active."
],
"opt_zh":[
"載體本身的毒性，這也正是保護蛋白試驗要對上配對的 1/40 WB800 載體的原因。",
"ACC deaminase 活性的最適 pH，酵素文獻定在 8.0。",
"低生物量下葉綠素測定的偵測極限。",
"ACC deaminase 失去活性的稀釋度。"
],
"ans":0,
"trap_en":"Reading 1/16 as harmless; it still sits well below the no-medium group at both pH values.",
"trap_zh":"把 1/16 當成無害；在兩個 pH 下它仍遠低於完全不加培養液那組。",
"dom":"registry"
},
{
"id":"b01",
"img":"b01.webp",
"tier":2,
"dom":"business",
"page":"entrepreneurship",
"ask_en":"What does this diagram claim to be, and what is in it?",
"ask_zh":"這張圖宣稱自己是什麼？裡面有什麼？",
"a_en":"Our minimum viable product: the bioreactor as we would sell it. The pink B. subtilis path runs from the stirred culture bottle with its pH probe and air filter, through the pump, flow meter, in-line photometer and pressure transducers, into the hollow fiber membrane, through the pinch valve and the feeding Luer valve where a second pump adds KOH, and back. The blue protectant path leaves the shell side through the shell Luer valve to the output bottle. It is the same loop as bioreactor version 4 in the lab, drawn as a product.",
"a_zh":"這是我們的最小可行產品：如果要賣，就是這台反應器。粉紅色的 B. subtilis 路徑從帶 pH 探針與空氣濾器的攪拌菌液瓶出發，經過幫浦、流量計、線上光度計與壓力感測器進入中空纖維膜，再經夾管閥與加料 Luer 閥（第二顆幫浦在此加 KOH）回到瓶子。藍色的保護劑路徑從殼側經殼側 Luer 閥流到產出瓶。它跟實驗室裡的反應器第四版是同一個迴路，只是畫成產品的樣子。",
"kw_en":[
"minimum viable product",
"same loop as reactor v4",
"pink culture, blue product"
],
"kw_zh":[
"最小可行產品",
"與反應器第四版同一迴路",
"粉紅菌液、藍色產物"
],
"q_en":"What is the relationship between this MVP diagram and the lab bioreactor?",
"q_zh":"這張 MVP 圖與實驗室的反應器是什麼關係？",
"opt_en":[
"It is the same loop as bioreactor version 4, presented as the product we would sell",
"It is a future concept with components the lab rig does not have",
"It is the commercial cabinet design with its layered containment",
"It is a simplified teaching diagram with the sensors left out"
],
"opt_zh":[
"它就是反應器第四版的同一個迴路，以「我們要賣的產品」呈現",
"它是未來概念，含有實驗室機組沒有的元件",
"它是商用機櫃設計，含分層圍堵",
"它是教學用的簡化圖，把感測器省略了"
],
"ans":0,
"trap_en":"Selling the MVP as something more finished than the rig. The honest claim is that the MVP is the loop we actually ran.",
"trap_zh":"把 MVP 講得比實驗機組更完成。誠實的說法是：MVP 就是我們真的跑過的那個迴路。"
},
{
"id":"b02",
"img":"b02.webp",
"tier":2,
"dom":"business",
"page":"entrepreneurship",
"ask_en":"What is the break-even point on this chart, and what price assumption sits behind it?",
"ask_zh":"這張圖的損益兩平點在哪？背後的定價假設是什麼？",
"a_en":"Revenue overtakes total cost once we have sold 226 hectares. Cumulative revenue and cost run over Years 0 to 4 against hectares sold to paying farms, 0 to 300. The total cost line starts at a fixed cost of US$627,000; the revenue line starts at zero and is drawn at a price of twice our cost. The 226 hectare figure is therefore a consequence of that two-times pricing assumption, not an independent measurement.",
"a_zh":"賣到 226 公頃時，營收超過總成本。累計營收與成本畫在第 0 到第 4 年，橫軸是賣給付費農場的公頃數，0 到 300。總成本線從 627,000 美元的固定成本起跳；營收線從零開始，定價假設是成本的兩倍。所以 226 公頃這個數字是那個「兩倍定價」假設的結果，不是獨立量出來的數字。",
"kw_en":[
"break-even at 226 hectares",
"fixed cost US$627,000",
"price is 2x cost"
],
"kw_zh":[
"226 公頃損益兩平",
"固定成本 62.7 萬美元",
"定價為成本兩倍"
],
"q_en":"What assumption does the 226-hectare break-even point depend on?",
"q_zh":"226 公頃的損益兩平點取決於什麼假設？",
"opt_en":[
"That the product is priced at twice our cost",
"That every farm buys exactly one unit",
"That the government subsidises half the capital cost",
"That the fixed cost falls as volume grows"
],
"opt_zh":[
"產品定價是成本的兩倍",
"每一座農場剛好買一台",
"政府補助一半的資本支出",
"固定成本隨著規模增加而下降"
],
"ans":0,
"trap_en":"Quoting 226 hectares as a fact. Say the assumption in the same breath, or a judge will ask what price it assumes.",
"trap_zh":"把 226 公頃當成事實來引用。講數字時要一起講假設，否則評審一定會問「這是用什麼價格算的」。",
"prio":1
},
{
"id":"b03",
"img":"b03.webp",
"tier":2,
"dom":"business",
"page":"entrepreneurship",
"ask_en":"What are the three circles, and what defines the innermost one?",
"ask_zh":"這三個圈各是什麼？最內圈的定義是什麼？",
"a_en":"A TAM, SAM, SOM market-sizing diagram. The outer circle, the total addressable market, is small and industrial farmers. The middle, the serviceable market, is those same farmers who actually experience heat, salinity or biotic stress. The inner, the obtainable market, is sustainable farmers: the ones whose practice and priorities make them our realistic first customers.",
"a_zh":"這是 TAM、SAM、SOM 的市場規模圖。最外圈 TAM（總體可觸及市場）是小農與工業化農場。中間 SAM（可服務市場）是其中真的遭遇高溫、鹽害或生物性逆境的那一群。最內圈 SOM（可取得市場）是永續農業的農民：以他們的耕作方式與優先順序來看，是我們實際上最先可能成交的客戶。",
"kw_en":[
"TAM, SAM, SOM",
"SAM is the stressed subset",
"SOM is sustainable farmers"
],
"kw_zh":[
"TAM、SAM、SOM",
"SAM 是遭遇逆境的子集",
"SOM 是永續農業農民"
],
"q_en":"What narrows TAM to SAM in this diagram?",
"q_zh":"在這張圖裡，從 TAM 縮到 SAM 的條件是什麼？",
"opt_en":[
"Only the farmers who actually experience heat, salinity or biotic stress",
"Only the farmers in Taiwan",
"Only the farms large enough to afford a bioreactor",
"Only the farms already using hydroponics"
],
"opt_zh":[
"只有真的遭遇高溫、鹽害或生物性逆境的農民",
"只有在台灣的農民",
"只有大到買得起反應器的農場",
"只有已經在用水耕的農場"
],
"ans":0,
"trap_en":"Giving TAM, SAM, SOM as three numbers with no rule for how one becomes the next. The rule is what a judge is testing.",
"trap_zh":"把 TAM、SAM、SOM 講成三個數字卻說不出從一層縮到下一層的規則。評審考的就是那個規則。"
},
{
"id":"l01",
"img":"l01.webp",
"tier":2,
"dom":"law",
"page":"laws-and-regulations",
"ask_en":"What are the three circles, and what is written in the middle?",
"ask_zh":"這三個圈是什麼？中間寫的是什麼？",
"a_en":"A three-circle Venn of the regulatory themes in the United States, the European Union and Taiwan, on the abiotic pathway. Each circle lists that market's rules for the bioreactor, the culture and the output: OSHA and EPA TSCA 40 CFR Part 725 in the US, the Machinery Regulation 2023/1230 and Directive 2009/41/EC in the EU, BSMI and the Fertilizer Management Act in Taiwan. The overlaps hold what is shared, GMO biosafety and plant-biostimulant or fertilizer regulation. The centre is our core claim: improves plant tolerance to abiotic stress, an agricultural input rather than a pesticide.",
"a_zh":"這是美國、歐盟、台灣三方在非生物性逆境路徑上的法規主題范氏圖。每個圈分別列出該市場對反應器、菌液與產出的規定：美國是 OSHA 與 EPA TSCA 40 CFR Part 725，歐盟是機械法規 2023/1230 與指令 2009/41/EC，台灣是 BSMI 與肥料管理法。交集處是三方共有的部分：基改生物安全，以及植物生物刺激素或肥料的管理。中心寫的是我們的核心主張：提升植物對非生物逆境的耐受性，屬於農業資材而非農藥。",
"kw_en":[
"US, EU, Taiwan Venn",
"bioreactor, culture, output",
"core claim: input, not pesticide"
],
"kw_zh":[
"美、歐、台三方范氏圖",
"反應器、菌液、產出",
"核心主張：資材不是農藥"
],
"q_en":"What is written at the centre of this Venn diagram?",
"q_zh":"這張范氏圖的中心寫的是什麼？",
"opt_en":[
"The core claim: improves tolerance to abiotic stress, an agricultural input rather than a pesticide",
"The list of countries where ReLEAF has already been approved",
"The GMO release permit number issued in Taiwan",
"The price point at which the product is competitive in all three markets"
],
"opt_zh":[
"核心主張：提升對非生物逆境的耐受性，屬於農業資材而非農藥",
"ReLEAF 已經取得核可的國家清單",
"台灣核發的基改釋出許可字號",
"在三個市場都具競爭力的價格點"
],
"ans":0,
"trap_en":"Describing the centre as approval. It is the claim we would make in a filing, not a decision anyone has given us.",
"trap_zh":"把中心講成已經核准。那是我們在送件時會提出的主張，不是任何人給我們的決定。"
},
{
"id":"l02",
"img":"l02.webp",
"tier":2,
"dom":"law",
"page":"laws-and-regulations",
"ask_en":"What are the two branches of this tree, and which one would ReLEAF go down?",
"ask_zh":"這棵樹分成哪兩支？ReLEAF 會走哪一支？",
"a_en":"CH Biotech's breakdown of how Taiwan splits fertilizers from pesticides. The Ministry of Agriculture branches to the Agriculture and Food Agency, which covers fertilizers and biostimulants, and to the Animal and Plant Health Inspection Agency, which covers chemical pesticides, biological pesticides and non-registered plant protection materials. Our claim is that the protectant improves tolerance rather than controlling a pest, so it belongs on the fertilizer and biostimulant branch, under the Agriculture and Food Agency.",
"a_zh":"這是正瀚生技替我們拆解的「台灣如何區分肥料與農藥」。農業部下分成農糧署（管肥料與生物刺激素）與動植物防疫檢疫署（管化學農藥、生物農藥，以及非列管植物保護資材）。我們的主張是保護劑提升的是耐受性、不是防治病蟲害，所以它屬於肥料與生物刺激素那一支，歸農糧署管。",
"kw_en":[
"MOA splits into AFA and APHIA",
"fertilizer/biostimulant vs pesticide",
"we are on the biostimulant branch"
],
"kw_zh":[
"農業部分為農糧署與防檢署",
"肥料／生物刺激素對農藥",
"我們走生物刺激素那一支"
],
"q_en":"Which Taiwanese authority covers the branch ReLEAF's protectant would fall under?",
"q_zh":"ReLEAF 的保護劑會落在哪一支，由哪個單位主管？",
"opt_en":[
"The Agriculture and Food Agency, which covers fertilizers and biostimulants",
"The Animal and Plant Health Inspection Agency, which covers biological pesticides",
"The Bureau of Standards, Metrology and Inspection, which covers equipment",
"The Food and Drug Administration, which covers biological products"
],
"opt_zh":[
"農糧署，主管肥料與生物刺激素",
"動植物防疫檢疫署，主管生物農藥",
"標準檢驗局，主管設備",
"食品藥物管理署，主管生物製劑"
],
"ans":0,
"trap_en":"Forgetting that the bioreactor itself is regulated separately as equipment. The product and the machine take different routes.",
"trap_zh":"忘了反應器本身是以設備另外管理的。產品跟機器走的是不同的路線。"
},
{
"id":"l03",
"img":"l03.webp",
"tier":2,
"dom":"law",
"page":"laws-and-regulations",
"ask_en":"What are the two axes, and what is the honest caveat on this chart?",
"ask_zh":"這張圖的兩軸是什麼？它誠實的但書是什麼？",
"a_en":"Expansion markets placed by regulatory and commercialisation challenge on the horizontal axis against strategic value for ReLEAF on the vertical. The Philippines is highest on value and lowest on challenge; Taiwan and Thailand sit below it; the European Union is high on value but furthest right on challenge. Each market carries its regulatory advantages and challenges. The caveat is printed on our own page: these positions are our qualitative synthesis of the frameworks we reviewed, not official ratings and not approval predictions.",
"a_zh":"這是把擴張市場依「法規與商業化難度」（橫軸）對「對 ReLEAF 的策略價值」（縱軸）定位。菲律賓價值最高、難度最低；台灣與泰國在它下面；歐盟價值高但難度最靠右。每個市場旁邊都列了法規上的優勢與挑戰。但書就印在我們自己的頁面上：這些位置是我們對所查閱框架的質性綜合判斷，不是官方評等，也不是核准預測。",
"kw_en":[
"challenge vs strategic value",
"Philippines best placed",
"our qualitative synthesis, not official"
],
"kw_zh":[
"難度對策略價值",
"菲律賓位置最好",
"質性綜合判斷，非官方"
],
"q_en":"What does our own page say about where these market positions come from?",
"q_zh":"我們自己的頁面怎麼說明這些市場位置的來源？",
"opt_en":[
"They are the team's qualitative synthesis of reviewed frameworks, not official ratings or approval predictions",
"They are scores published by each market's regulator",
"They are derived from the break-even model on the Entrepreneurship page",
"They were assigned by CH Biotech's regulatory researcher"
],
"opt_zh":[
"它們是團隊對所查閱框架的質性綜合判斷，不是官方評等或核准預測",
"它們是各市場主管機關公布的評分",
"它們是從創業頁的損益兩平模型推導出來的",
"它們是正瀚生技的法規研究員指派的"
],
"ans":0,
"trap_en":"Presenting a positioning chart as data. Saying it is a judgement, and whose, is what keeps it credible.",
"trap_zh":"把定位圖當成數據呈現。講明它是判斷、以及是誰的判斷，才保得住可信度。"
},
{
"id":"d01",
"img":"d01.webp",
"tier":2,
"dom":"model",
"page":"model",
"ask_en":"What is on the x-axis, what does green mean, and what does the star mean?",
"ask_zh":"橫軸是什麼？綠色代表什麼？星號代表什麼？",
"a_en":"Two panels, second crop and first crop, ranking fifteen candidate weather stresses. The x-axis is the mean change in county prediction error in kilograms per hectare when that stress is added: left means it helps, right means it hurts. Green is kept in the final model, grey is dropped. The star marks a variable that came from the student model, and the percentage is the share of the 16,383 variable combinations in which adding it helped. For the second crop, rain across five stages and typhoon wind both help in 100 percent of combinations.",
"a_zh":"兩個子圖分別是二期作與一期作，把十五個候選氣象逆境排名。橫軸是把該逆境加進模型後，縣市預測誤差的平均變化（公斤/公頃）：往左代表有幫助，往右代表變差。綠色是最終模型保留的，灰色是捨棄的。星號代表這個變數來自學生版模型，百分比則是在 16,383 種變數組合中「加了它有幫助」的比例。二期作方面，分五個生育階段的降雨與颱風風速在 100% 的組合中都有幫助。",
"kw_en":[
"change in county error",
"green kept, grey dropped",
"16,383 combinations"
],
"kw_zh":[
"縣市誤差的變化",
"綠色保留、灰色捨棄",
"16,383 種組合"
],
"q_en":"In this figure, what does a bar extending to the left mean?",
"q_zh":"在這張圖裡，長條往左延伸代表什麼？",
"opt_en":[
"Adding that stress variable reduces the county prediction error, so it helps",
"That stress variable was measured in fewer counties",
"That stress occurs earlier in the growing season",
"That stress was taken from the published literature rather than our own data"
],
"opt_zh":[
"加入那個逆境變數會降低縣市預測誤差，也就是有幫助",
"那個逆境變數在較少的縣市有量測",
"那個逆境發生在生育期比較早的階段",
"那個逆境取自已發表文獻，而非我們自己的資料"
],
"ans":0,
"trap_en":"Reading the ranking as importance in the final model. It ranks what each variable does to the error when added, which is not the same thing.",
"trap_zh":"把排名當成在最終模型中的重要性。它排的是「加進來對誤差造成什麼影響」，那不是同一件事。",
"prio":1
},
{
"id":"d02",
"img":"d02.webp",
"tier":2,
"dom":"model",
"page":"model",
"ask_en":"What is this validation doing, and by how much does the model beat the baseline?",
"ask_zh":"這個驗證在做什麼？模型比基準好多少？",
"a_en":"Island first-crop yield plotted against two predictions made from earlier years only, so neither has seen the year it is predicting. The baseline is the trend and the other is our model. Over 2016 to 2025 the county error is 419 kilograms per hectare for the trend and 365 for the model. The bar panel breaks the island error down year by year. The honest framing: a 13 percent improvement over a trend line, not a transformation.",
"a_zh":"這是把全島一期作產量，對兩個「只用更早年份資料做出來」的預測畫在一起，所以兩個預測都沒看過它要預測的那一年。基準是趨勢線，另一個是我們的模型。2016 到 2025 年間，縣市誤差趨勢線是 419 公斤/公頃，模型是 365。下方的長條圖把全島誤差逐年拆開。誠實的講法是：比趨勢線改善約 13%，不是什麼翻天覆地的突破。",
"kw_en":[
"trained on earlier years only",
"419 vs 365 kg/ha",
"about 13 percent better"
],
"kw_zh":[
"只用更早年份訓練",
"419 對 365 公斤/公頃",
"約好 13%"
],
"q_en":"What is the baseline that the model is compared against here?",
"q_zh":"這裡模型是跟什麼基準比較？",
"opt_en":[
"A trend line fitted to earlier years, which gives 419 kg/ha county error against the model's 365",
"The official government yield forecast for the same counties",
"A second machine-learning model trained on the same data",
"The previous year's actual yield, carried forward unchanged"
],
"opt_zh":[
"用更早年份擬合的趨勢線，縣市誤差 419 公斤/公頃，模型是 365",
"政府對同一批縣市發布的官方產量預測",
"用同一批資料訓練的第二個機器學習模型",
"直接沿用前一年的實際產量"
],
"ans":0,
"trap_en":"Quoting the model error alone. A prediction error means nothing without the baseline it beats.",
"trap_zh":"只報模型的誤差。預測誤差沒有拿來比的基準，就沒有意義。"
},
{
"id":"d03",
"img":"d03.webp",
"tier":2,
"dom":"model",
"page":"model",
"ask_en":"What makes this figure different from an ordinary validation plot?",
"ask_zh":"這張圖跟一般的驗證圖差在哪裡？",
"a_en":"It is a blind forecast. We froze the 2026 first-crop prediction on 26 September 2026, before the official yields were published, and this figure compares that frozen forecast against the official numbers as they come out. Four of sixteen counties have published so far; the second panel places those counties on the historical index-to-loss curve. The point is the date: nothing here was fitted after the answer was known.",
"a_zh":"這是盲測預報。我們在 2026 年 9 月 26 日把 2026 年一期作的預測凍結，那時官方產量還沒公布；這張圖就是把那份凍結的預測跟陸續公布的官方數字對照。目前十六個縣市中有四個已經公布；第二個子圖把這四個縣市放在歷史的指數—損失曲線上。重點在那個日期：這裡沒有任何東西是在知道答案之後才去擬合的。",
"kw_en":[
"frozen on 26 September 2026",
"before official yields published",
"4 of 16 counties so far"
],
"kw_zh":[
"2026 年 9 月 26 日凍結",
"早於官方產量公布",
"十六縣市目前四個已公布"
],
"q_en":"What makes this a blind test?",
"q_zh":"這為什麼算是盲測？",
"opt_en":[
"The forecast was frozen on 26 September 2026, before the official yields were published",
"The counties were chosen at random after the data arrived",
"The model was run by someone outside the team",
"The official yields were withheld from the modellers but known to the team"
],
"opt_zh":[
"預測在 2026 年 9 月 26 日就凍結，早於官方產量公布",
"縣市是在資料拿到之後才隨機挑選的",
"模型是由團隊以外的人跑的",
"官方產量對建模者保密，但團隊其他人知道"
],
"ans":0,
"trap_en":"Claiming a full validation. Four of sixteen counties have published; the rest of the test is still open.",
"trap_zh":"宣稱已經完整驗證。十六個縣市目前只有四個公布，其餘的測試還沒結束。"
},
{
"id":"r01",
"img":"r01.webp",
"tier":2,
"dom":"protein",
"page":"protein-design",
"ask_en":"What pipeline is this, and what do the five stages stand for?",
"ask_zh":"這是什麼流程？五個階段各代表什麼？",
"a_en":"GRAFT, our protein design pipeline: Generate, Restraints, Assembly, Flex meaning molecular dynamics, and Triage and packaging. The diagram runs from the protectant search in the literature across osmotic, heat, salinity and biotic stress, through mutation ideation on the sequence, docking prep with MUSCLE, WHISCY, US-Align and DisVis, into structural docking in binary and ternary modes beside AI co-folding, and ends in structure scoring and validation with HADDOCK score, CAPRI, PDBePISA and wwPDB MolProbity.",
"a_zh":"這是我們的蛋白設計流程 GRAFT：Generate（生成）、Restraints（限制條件）、Assembly（組裝）、Flex（分子動力學）、Triage & packaging（分流與打包）。圖從文獻中搜尋保護劑開始，涵蓋滲透、高溫、鹽害與生物性逆境，接著是序列上的突變構想，再到用 MUSCLE、WHISCY、US-Align、DisVis 做對接前處理，然後是二體與三體的結構對接以及旁邊的 AI 共摺疊，最後以結構評分與驗證收尾，用的是 HADDOCK 分數、CAPRI、PDBePISA 與 wwPDB MolProbity。",
"kw_en":[
"GRAFT pipeline",
"Generate, Restraints, Assembly, Flex, Triage",
"docking plus AI co-folding"
],
"kw_zh":[
"GRAFT 流程",
"生成、限制、組裝、動力學、分流",
"對接加 AI 共摺疊"
],
"q_en":"What does the F in GRAFT stand for?",
"q_zh":"GRAFT 的 F 代表什麼？",
"opt_en":[
"Flex: the molecular dynamics stage that tests whether a docked pose holds when the atoms move",
"Filter: the step that removes candidates with poor solubility",
"Fold: the AlphaFold prediction of the receptor structure",
"Fit: the least-squares fit of the dose-response curve"
],
"opt_zh":[
"Flex：分子動力學階段，測試對接出來的構型在原子可以動之後還站不站得住",
"Filter：把溶解度差的候選者篩掉的步驟",
"Fold：用 AlphaFold 預測受體結構",
"Fit：劑量—反應曲線的最小平方擬合"
],
"ans":0,
"trap_en":"Describing the pipeline as 'we used AlphaFold'. AI co-folding is one lane beside the docking lane; the validation stage is what decides between them.",
"trap_zh":"把整套流程講成「我們用了 AlphaFold」。AI 共摺疊只是對接之外的另一條線；真正決定取捨的是驗證階段。",
"prio":1
},
{
"id":"r02",
"img":"r02.webp",
"tier":2,
"dom":"protein",
"page":"protein-design",
"ask_en":"What is plotted here, and what does a tall bar mean?",
"ask_zh":"這張圖畫的是什麼？長條很高代表什麼？",
"a_en":"A BoPep4 alanine scan from S6 to N23 against PEPR1, after HADDOCK refinement. The y-axis is the change in HADDOCK score versus wild type, where positive means destabilising, with the ensemble mean marked as a dot. A tall bar means mutating that residue to alanine costs binding, so it is a hotspot. K7, R9, R11, E12, H14, K18, H22 and N23 come out as binding hotspots; the glycines, prolines and serines in the middle read as structural or conformational rather than contact residues.",
"a_zh":"這是 BoPep4 從 S6 到 N23 對 PEPR1 的丙胺酸掃描，經 HADDOCK 精修後的結果。縱軸是相對於野生型的 HADDOCK 分數變化，正值代表去穩定化，黑點是集合平均。長條越高，代表把那個殘基換成丙胺酸會讓結合變差，也就是熱點。K7、R9、R11、E12、H14、K18、H22、N23 被判為結合熱點；中段的甘胺酸、脯胺酸與絲胺酸則偏向結構或構型角色，不是接觸殘基。",
"kw_en":[
"alanine scan vs PEPR1",
"positive = destabilising",
"K7, K18, N23 are hotspots"
],
"kw_zh":[
"對 PEPR1 的丙胺酸掃描",
"正值代表去穩定化",
"K7、K18、N23 是熱點"
],
"q_en":"What does a tall positive bar in this alanine scan indicate?",
"q_zh":"在這張丙胺酸掃描中，長條往正值很高代表什麼？",
"opt_en":[
"Mutating that residue to alanine destabilises binding, so the residue is a binding hotspot",
"That residue is the most flexible in the molecular dynamics run",
"That residue is conserved across the PROPEP family",
"That position tolerates mutation without any cost"
],
"opt_zh":[
"把那個殘基換成丙胺酸會讓結合變不穩，所以它是結合熱點",
"那個殘基在分子動力學中最柔軟",
"那個殘基在 PROPEP 家族中最保守",
"那個位置可以隨意突變而沒有代價"
],
"ans":0,
"trap_en":"Reading a computed scan as measured affinity. These are HADDOCK score changes, not binding constants from an experiment.",
"trap_zh":"把計算出來的掃描當成量到的親和力。這些是 HADDOCK 分數的變化，不是實驗得到的結合常數。"
},
{
"id":"r03",
"img":"r03.webp",
"tier":2,
"dom":"protein",
"page":"protein-design",
"ask_en":"Which residue is this, and what did simulating it catch in time?",
"ask_zh":"這是哪一個殘基？模擬它及時攔下了什麼？",
"a_en":"Asn23, the peptide's C-terminus, sitting in the PEPR1 groove. Five contacts hold that C-terminus, not one salt bridge as the protocol had assumed. The catch: a six-histidine purification tag on the C-terminus, which every earlier check had approved, abolishes the salt bridge once simulated. That is why the production construct does not carry a C-terminal His tag on BoPep4. We also measured the crystal first: Arg487 clamps the carboxylate at 2.40 angstroms.",
"a_zh":"這是 Asn23，也就是胜肽的 C 端，卡在 PEPR1 的溝槽裡。固定這個 C 端的是五個接觸，不是原本流程假設的單一鹽橋。被攔下來的問題是：C 端那組六個組胺酸的純化標籤——先前每一道檢查都放行過——一旦跑模擬就會破壞那個鹽橋。這就是為什麼量產用的構築裡 BoPep4 不帶 C 端 His 標籤。我們也先量了晶體結構：Arg487 以 2.40 埃夾住那個羧基。",
"kw_en":[
"Asn23 C-terminus anchor",
"five contacts, not one salt bridge",
"C-terminal His tag abolishes it"
],
"kw_zh":[
"Asn23 C 端錨點",
"五個接觸而非單一鹽橋",
"C 端 His 標籤會破壞它"
],
"q_en":"What did the molecular dynamics on this residue catch in time?",
"q_zh":"針對這個殘基做的分子動力學及時攔下了什麼？",
"opt_en":[
"That a C-terminal six-histidine purification tag abolishes the contact the peptide depends on",
"That the peptide folds into a helix and cannot enter the groove",
"That PEPR2 binds the peptide more tightly than PEPR1",
"That the peptide is cleaved by a protease in the apoplast"
],
"opt_zh":[
"C 端那組六個組胺酸的純化標籤會破壞胜肽賴以結合的接觸",
"胜肽會摺成螺旋而進不了溝槽",
"PEPR2 跟胜肽的結合比 PEPR1 更緊",
"胜肽在質外體中會被蛋白酶切斷"
],
"ans":0,
"trap_en":"Presenting the design work as all upside. Our own page calls this a record of what we got wrong and caught in time; say that.",
"trap_zh":"把設計工作講得全是好消息。我們自己的頁面說它是「我們犯了什麼錯、又及時抓到」的紀錄；照著講。"
},
{
"id":"s01",
"img":"s01.webp",
"tier":2,
"dom":"software",
"page":"software",
"ask_en":"What is on this screen, and which parts of it are derived rather than measured?",
"ask_zh":"這個畫面上是什麼？其中哪些是推導出來的、不是直接量到的？",
"a_en":"The Digital Twin dashboard, interface v6.2.2, reading from the board during run 7 on 18 October 2026. It shows optical density, pH and the four pressure traces, plus the derived membrane warnings and the feed valve and feed pump panels. The measured quantities are OD, pH and the four pressures; the membrane-filtration values and the warnings are computed from them. The twin reads and warns; induction is not yet automatic, so the control loop is not closed.",
"a_zh":"這是數位孿生的儀表板，介面版本 v6.2.2，2026 年 10 月 18 日第 7 次實驗期間直接從控制板讀取。畫面上有光密度、pH 與四條壓力曲線，加上推導出來的薄膜警示，以及進料閥與進料幫浦的面板。量到的是 OD、pH 與四個壓力；薄膜過濾的數值與警示是由它們算出來的。孿生目前是讀取與警示，誘導還不是自動的，所以控制迴路尚未閉合。",
"kw_en":[
"interface v6.2.2, run 7",
"pressures measured, warnings derived",
"loop not yet closed"
],
"kw_zh":[
"介面 v6.2.2，第 7 次實驗",
"壓力是量的、警示是算的",
"迴路尚未閉合"
],
"q_en":"What is the honest status of this Digital Twin today?",
"q_zh":"這套數位孿生目前誠實的狀態是什麼？",
"opt_en":[
"It reads live data and raises derived warnings, but induction is not yet automatic so the loop is not closed",
"It fully controls the reactor, including when to switch the light on",
"It runs only on recorded data and has never been connected to the board",
"It is a design mock-up with no live data behind it"
],
"opt_zh":[
"它讀即時資料並發出推導出來的警示，但誘導還不是自動的，所以迴路尚未閉合",
"它完全控制反應器，包含何時開燈",
"它只能跑錄好的資料，從未接上控制板",
"它是設計樣張，背後沒有任何即時資料"
],
"ans":0,
"trap_en":"Calling it a digital twin without saying which arrow is still open. Our own diagram marks what is live, what runs on recorded data, and what is designed but not connected.",
"trap_zh":"說它是數位孿生卻不講哪一條箭頭還沒接上。我們自己的圖就標了哪些是即時、哪些跑錄好的資料、哪些只有設計還沒接。"
},
{
"id":"s02",
"img":"s02.svg",
"tier":2,
"dom":"software",
"page":"software",
"ask_en":"How many runs are here, and what does grey mark?",
"ask_zh":"這裡有幾次實驗？灰色標的是什麼？",
"a_en":"Seven bioreactor runs of B. subtilis, optical density at 600 nanometres against time. Runs 1 and 2 are hand-sampled against a shake flask; run 3 is 434 hours in line; run 4 is in two logged parts with a 10-hour unlogged gap; run 5 breaks down after ten hours; run 6 rises cleanly over 42 hours with a fitted growth rate; run 7 runs 77 hours to an optical density of 3.3 with the reading intact. Grey marks the readings the twin does not use, which is how we show the failures rather than hiding them.",
"a_zh":"這是 B. subtilis 的七次反應器實驗，600 奈米光密度對時間。第 1、2 次是人工取樣並與搖瓶對照；第 3 次是線上量測 434 小時；第 4 次分成兩段紀錄，中間有 10 小時沒有記錄；第 5 次在十小時之後就壞掉；第 6 次在 42 小時內乾淨上升並擬合出生長速率；第 7 次跑了 77 小時到光密度 3.3，讀值全程完好。灰色標的是孿生不採用的讀值——我們用這種方式把失敗攤出來，而不是藏起來。",
"kw_en":[
"seven runs",
"grey = not used by the twin",
"run 7 is the clean one"
],
"kw_zh":[
"七次實驗",
"灰色＝孿生不採用",
"第 7 次是乾淨的那一次"
],
"q_en":"What does grey mark in these seven panels?",
"q_zh":"這七個子圖裡的灰色標的是什麼？",
"opt_en":[
"Readings the Digital Twin does not use, including the gaps and the failed stretches",
"Readings taken by hand rather than in line",
"The periods when the light was switched to red",
"The hours when the culture was in stationary phase"
],
"opt_zh":[
"數位孿生不採用的讀值，包含資料缺口與壞掉的段落",
"人工取樣而非線上量測的讀值",
"光源切換成紅光的時段",
"菌液進入穩定期的時數"
],
"ans":0,
"trap_en":"Showing only the clean run. Publishing all seven, with the unusable stretches marked, is the stronger answer.",
"trap_zh":"只拿乾淨的那一次出來。把七次全部放上去、並標出不可用的段落，才是更強的回答。",
"prio":1
},
{
"id":"s03",
"img":"s03.svg",
"tier":2,
"dom":"software",
"page":"software",
"ask_en":"What was measured here, and what is the catch in the caption?",
"ask_zh":"這裡量的是什麼？圖說裡的但書是什麼？",
"a_en":"Leaf minus air temperature for nine five-minute bench runs at three sites on 10 October 2026, with the mean of each run. The incubator sits near plus 1.8 degrees and the stairwell near plus 1.3. The catch is in the caption: there was no leaf between the sensors. So this is the offset between the leaf sensor and the SHT31 in the same air, which is a calibration of the instrument pair, not a measurement of canopy temperature depression.",
"a_zh":"這是 2026 年 10 月 10 日在三個地點做的九次五分鐘桌上測試，量「葉溫減氣溫」，並標出每次的平均。培養箱大約是 +1.8 度，樓梯間大約是 +1.3 度。但書寫在圖說裡：兩個感測器之間沒有夾任何葉子。所以這量到的是葉面感測器與 SHT31 在同一團空氣中的偏差，屬於這對儀器的校正，不是冠層溫差的量測。",
"kw_en":[
"leaf minus air, nine bench runs",
"no leaf between the sensors",
"offset, not canopy measurement"
],
"kw_zh":[
"葉溫減氣溫，九次桌上測試",
"兩感測器間沒有葉子",
"是偏差不是冠層量測"
],
"q_en":"What was between the two sensors during these runs?",
"q_zh":"這些測試中，兩個感測器之間放了什麼？",
"opt_en":[
"Nothing: there was no leaf, so this measures the offset between the two instruments in the same air",
"A fresh Arabidopsis leaf, measured within a minute of picking",
"A wet filter paper standing in for a transpiring leaf",
"A calibrated blackbody reference plate"
],
"opt_zh":[
"什麼都沒有：沒有放葉子，所以這量的是兩台儀器在同一團空氣中的偏差",
"一片剛採下一分鐘內量測的阿拉伯芥葉子",
"一張濕濾紙，用來代替會蒸散的葉子",
"一塊校正過的黑體參考板"
],
"ans":0,
"trap_en":"Letting a bench calibration be heard as a field result. The leaf channel has never been used on a real leaf in this dataset.",
"trap_zh":"讓桌上校正被聽成田間結果。在這組資料裡，葉面通道從來沒有真的用在一片葉子上。"
},
{
"id":"n01",
"img":"n01.webp",
"tier":2,
"dom":"biomanufacturing",
"page":"biomanufacturing",
"ask_en":"What are the two panels, and what does the lower one explain?",
"ask_zh":"這兩個子圖各是什麼？下面那個在解釋什麼？",
"a_en":"Panel (a) is the ReLEAF production chain: plant stresses, an AIoT sensor, a green light signal, B. subtilis carrying CcaSR, the hollow fiber membrane, protectant secretion, protected plant. Panel (b) is the mechanism: abiotic stress raises ACC, which ACC oxidase would normally turn into ethylene; ACC deaminase breaks ACC down before that happens, so the plant is spared the excess ethylene that stunts growth.",
"a_zh":"(a) 是 ReLEAF 的生產鏈：植物逆境、AIoT 感測器、綠光訊號、帶 CcaSR 的 B. subtilis、中空纖維膜、保護劑分泌、植物獲得保護。(b) 是機制：非生物逆境會讓 ACC 上升，正常情況下 ACC 氧化酶會把它變成乙烯；ACC 去胺酶則在這之前先把 ACC 分解掉，讓植物不必承受那些抑制生長的過量乙烯。",
"kw_en":[
"chain from stress to protected plant",
"ACC to ethylene pathway",
"ACCD breaks ACC down first"
],
"kw_zh":[
"從逆境到植物受保護的鏈",
"ACC 轉乙烯路徑",
"ACCD 搶先分解 ACC"
],
"q_en":"What does ACC deaminase do in the pathway shown in panel (b)?",
"q_zh":"在 (b) 圖的路徑裡，ACC 去胺酶做的是什麼？",
"opt_en":[
"It breaks ACC down before ACC oxidase can turn it into ethylene",
"It converts ethylene back into ACC",
"It blocks the plant's ethylene receptor",
"It raises ACC so the plant mounts a stronger stress response"
],
"opt_zh":[
"在 ACC 氧化酶把 ACC 變成乙烯之前，先把 ACC 分解掉",
"把乙烯轉回成 ACC",
"阻斷植物的乙烯受體",
"提高 ACC，讓植物啟動更強的逆境反應"
],
"ans":0,
"trap_en":"Saying ACC deaminase 'blocks ethylene'. It removes the precursor; it does not touch the receptor or the hormone itself.",
"trap_zh":"說 ACC 去胺酶「阻斷乙烯」。它移除的是前驅物，不碰受體，也不碰乙烯本身。",
"prio":1
},
{
"id":"n02",
"img":"n02.webp",
"tier":2,
"dom":"biomanufacturing",
"page":"biomanufacturing",
"ask_en":"What does this diagram add beyond the lab loop?",
"ask_zh":"這張圖比實驗室迴路多了什麼？",
"a_en":"The perfusion bioreactor system layout. The culture loop is the familiar one: engineered B. subtilis under a green LED, peristaltic pump, sampler, in-line photometer, pressure sensing and a pinch valve for backpressure. What this diagram adds is the downstream: the permeate enters a separate delivery loop with its own pumping, pH monitoring and regulation, and connects to a hydroponic system or a soil sprinkler line. That is where the product actually reaches a plant.",
"a_zh":"這是灌流式反應器的系統佈局圖。菌液迴路是熟悉的那一套：綠光 LED 下的工程化 B. subtilis、蠕動幫浦、取樣器、線上光度計、壓力感測，以及用來建立背壓的夾管閥。這張圖多出來的是下游：透過液進入另一個獨立的輸送迴路，有自己的幫浦、pH 監測與調節，並接到水耕系統或土耕的灑水管線。產物就是在這裡真正送到植物身上。",
"kw_en":[
"culture loop plus delivery loop",
"pH regulation downstream",
"hydroponics or sprinkler"
],
"kw_zh":[
"菌液迴路加輸送迴路",
"下游 pH 調節",
"接水耕或灑水管線"
],
"q_en":"What happens to the permeate in this layout?",
"q_zh":"在這個佈局裡，透過液會發生什麼事？",
"opt_en":[
"It enters a separate delivery loop with pH regulation and feeds hydroponics or a sprinkler line",
"It is returned to the culture bottle to keep the volume constant",
"It is autoclaved and discarded as biological waste",
"It is concentrated by a second membrane before storage"
],
"opt_zh":[
"進入獨立的輸送迴路，經 pH 調節後供應水耕系統或灑水管線",
"回到菌液瓶中以維持體積恆定",
"高壓滅菌後當生物廢棄物丟棄",
"經第二道薄膜濃縮後儲存"
],
"ans":0,
"trap_en":"Stopping the story at the membrane. The delivery loop is the part that answers 'and then what reaches the field'.",
"trap_zh":"故事講到薄膜就停了。輸送迴路才是回答「然後呢，到底什麼東西到得了田裡」的部分。",
"prio":1
},
{
"id":"n03",
"img":"n03.webp",
"tier":2,
"dom":"biomanufacturing",
"page":"biomanufacturing",
"ask_en":"What form is the unit in here, and what does it hold?",
"ask_zh":"這裡的機器是什麼形態？裡面裝了什麼？",
"a_en":"The ReLEAF bioreactor as a sealed black carry case with a handle, one side open to show the culture reservoir, the peristaltic pump, the hollow fiber module and the tubing. It is the biomanufacturing page's picture of the unit as built, as distinct from the commercial cabinet we designed but have not made. The point of the case form is on-farm manufacture: the protectant is produced where it is used rather than shipped.",
"a_zh":"這是把 ReLEAF 反應器做成一個有提把的密閉黑色手提箱，側面打開可以看到菌液瓶、蠕動幫浦、中空纖維模組與管路。這是生物製造頁上「實際做出來的機器」的照片，跟我們設計但還沒做出來的商用機櫃不同。做成手提箱的用意是在農場端生產：保護劑在要用的地方製造，而不是運過去。",
"kw_en":[
"sealed carry case",
"as built, not the commercial cabinet",
"manufacture where it is used"
],
"kw_zh":[
"密閉手提箱",
"實際做出來的，不是商用機櫃",
"在使用地製造"
],
"q_en":"What distinction does this picture carry on the Biomanufacturing page?",
"q_zh":"這張照片在生物製造頁上帶著什麼區別？",
"opt_en":[
"It is the unit as built, as opposed to the commercial cabinet which is designed but not made",
"It is the commercial product, already in production",
"It is a scale model used only for the public forum booth",
"It is a competitor's unit photographed at a trade exhibition"
],
"opt_zh":[
"這是實際做出來的機器，跟只有設計、尚未製造的商用機櫃不同",
"這是已經量產的商用產品",
"這是只用在公眾論壇攤位上的縮小模型",
"這是在展覽會上拍到的競爭對手機器"
],
"ans":0,
"trap_en":"Blurring 'built' and 'designed'. The wiki keeps the two apart in every hardware section; keep them apart out loud too.",
"trap_zh":"把「做出來的」跟「設計的」混在一起講。wiki 在每個硬體章節都把兩者分開；講話時也要分開。",
"prio":1
},
{
"id":"f01",
"img":"f01.webp",
"tier":2,
"dom":"safety",
"page":"safety-and-security",
"ask_en":"What test is this, and what exactly does each plate show?",
"ask_zh":"這是什麼測試？兩個培養皿各顯示什麼？",
"a_en":"The cell retention and sterility assessment of the shell-side permeate. Plate (a) is lumen-side medium sampled after running 24 hours in the bioreactor, and it shows colonies. Plate (b) is shell-side medium from the same run, and no colony grew. It is the evidence behind the one containment claim this project makes, and it is one plating from one run.",
"a_zh":"這是殼側透過液的細胞截留與無菌性評估。(a) 是在反應器中運轉 24 小時後取的管腔側培養基，有長出菌落。(b) 是同一次實驗的殼側培養基，沒有任何菌落長出來。這是整個專題唯一一個圍堵宣稱背後的證據，而它是一次實驗的一次塗盤。",
"kw_en":[
"lumen grows, shell is clear",
"after 24 hours",
"one plating from one run"
],
"kw_zh":[
"管腔長菌、殼側乾淨",
"24 小時後",
"一次實驗一次塗盤"
],
"q_en":"What does plate (b) in this figure represent?",
"q_zh":"這張圖裡的 (b) 培養皿代表什麼？",
"opt_en":[
"Shell-side medium after 24 hours in the bioreactor, with no colonies grown",
"An uninoculated LB plate used as a sterility control",
"Lumen-side medium diluted one thousand fold",
"The same plate before incubation"
],
"opt_zh":[
"在反應器中跑了 24 小時後的殼側培養基，沒有長出菌落",
"未接種的 LB 培養皿，作為無菌對照",
"稀釋一千倍的管腔側培養基",
"同一個培養皿在培養之前的樣子"
],
"ans":0,
"trap_en":"Calling this a validated containment system. It is a single, honest result and we say so on the page.",
"trap_zh":"把它說成已驗證的圍堵系統。它是單一一次、我們誠實標示出來的結果，頁面上就是這樣寫的。",
"prio":1
},
{
"id":"f02",
"img":"f02.webp",
"tier":2,
"dom":"safety",
"page":"safety-and-security",
"ask_en":"What is the white cartridge, and what role does it play in biosafety?",
"ask_zh":"那個白色濾芯是什麼？它在生物安全上扮演什麼角色？",
"a_en":"The hollow fiber membrane cartridge mounted upright in the bioreactor case, with the tubing that carries the culture through it and the medium bottle beside it. Its 0.2 micrometre pore wall is the physical containment: the cells are wider than any pore so they stay in the lumen, while the secreted protectant crosses to the shell. After Dr. Brophy's advice this became the project's primary biosafety mechanism, in place of a kill switch.",
"a_zh":"這是中空纖維膜濾芯，直立安裝在反應器機箱裡，旁邊是把菌液送過它的管路與培養基瓶。它 0.2 微米的孔壁就是實體圍堵：細胞比任何孔都大，所以留在管腔裡，而分泌出來的保護劑可以穿到殼側。在 Brophy 博士建議之後，這變成整個專題主要的生物安全機制，取代了自殺開關。",
"kw_en":[
"hollow fiber cartridge",
"0.2 micrometre pores",
"primary containment, not a kill switch"
],
"kw_zh":[
"中空纖維濾芯",
"0.2 微米孔徑",
"主要圍堵，不是自殺開關"
],
"q_en":"Why does this cartridge appear on the Safety page at all?",
"q_zh":"這個濾芯為什麼會出現在安全頁上？",
"opt_en":[
"Because it is the project's primary physical containment, keeping cells in while the protectant crosses",
"Because it is the component most likely to fail and cause a spill",
"Because it must be autoclaved before every run",
"Because it is classed as a controlled item under Taiwanese law"
],
"opt_zh":[
"因為它是專題主要的實體圍堵，把細胞留住、讓保護劑通過",
"因為它是最可能故障並造成洩漏的元件",
"因為每次實驗前都必須高壓滅菌",
"因為它在台灣法規下屬於列管品項"
],
"ans":0,
"trap_en":"Describing containment only as lab practice. Here the containment is a component, which is why it belongs in the hardware answer too.",
"trap_zh":"只把圍堵講成實驗室作業規範。在這裡圍堵是一個零件，所以它也屬於硬體那一題的答案。"
},
{
"id":"f03",
"img":"f03.webp",
"tier":2,
"dom":"safety",
"page":"safety-and-security",
"ask_en":"What is on this door, and what biosafety level does it name?",
"ask_zh":"這扇門上貼的是什麼？它標的是哪一個生物安全等級？",
"a_en":"Three posters on the lab door: the GEMS Academy laboratory rules, a Laboratory Area sign and a chart of the GHS hazard pictograms. The Laboratory Area sign lists biological hazard, toxic and poison materials, and P1 laboratory, together with the required personal protective equipment: lab coat, gloves, long trousers and closed-toe shoes. The emergency contact table is blurred in the published photograph.",
"a_zh":"實驗室門上貼了三張：GEMS Academy 的實驗室規則、一張 Laboratory Area 標示，以及 GHS 危害圖示表。Laboratory Area 標示上列出生物危害、毒性物質，以及 P1 實驗室，還有必備的個人防護裝備：實驗衣、手套、長褲與包鞋。公開照片上的緊急聯絡人表格做了模糊處理。",
"kw_en":[
"P1 laboratory",
"PPE: coat, gloves, trousers, closed shoes",
"contacts blurred"
],
"kw_zh":[
"P1 實驗室",
"防護：實驗衣、手套、長褲、包鞋",
"聯絡資料已模糊"
],
"q_en":"What laboratory classification does the sign in this photograph name?",
"q_zh":"這張照片裡的標示上寫的是哪一個實驗室分級？",
"opt_en":[
"P1 laboratory",
"P3 laboratory",
"A cleanroom of ISO class 7",
"A GMP manufacturing area"
],
"opt_zh":[
"P1 實驗室",
"P3 實驗室",
"ISO 7 級無塵室",
"GMP 製造區"
],
"ans":0,
"trap_en":"Not knowing your own containment level. P1 is the right answer and it should come without hesitation.",
"trap_zh":"不知道自己實驗室的圍堵等級。答案是 P1，應該要不假思索講得出來。"
},
{
"id":"g01",
"img":"g01.webp",
"tier":2,
"dom":"geo",
"page":"geospatial-analysis",
"ask_en":"What two things are overlaid on this map, and why put them together?",
"ask_zh":"這張地圖疊了哪兩種資料？為什麼要疊在一起？",
"a_en":"Counties shaded by the average age of farmers in 2016, from 55 years in pale yellow to 61 and over in dark blue, with dark red circles at the weather stations sized by temperature change from 1991 to 2020. The overlay asks whether the counties facing the most heat stress are also the ones with the oldest farmers, which is a question about who will have to adapt and how much capacity they have to do it.",
"a_zh":"縣市底色是 2016 年農民平均年齡，淡黃色 55 歲到深藍色 61 歲以上；上面疊的是各氣象站的深紅色圓圈，大小代表 1991 到 2020 年的溫度變化。這個疊圖問的是：承受最多熱逆境的縣市，是不是也是農民最高齡的縣市——這是在問「誰得去適應」以及「他們有多少餘力去適應」。",
"kw_en":[
"farmer age shading",
"warming circles at stations",
"who has to adapt"
],
"kw_zh":[
"農民年齡底色",
"氣象站暖化圓圈",
"誰得去適應"
],
"q_en":"What do the dark red circles on this map represent?",
"q_zh":"這張地圖上的深紅色圓圈代表什麼？",
"opt_en":[
"Temperature change at each weather station from 1991 to 2020, sized by magnitude",
"Rice production volume by county in 2024",
"The locations of farms the team actually visited",
"The number of farmers over 65 in each county"
],
"opt_zh":[
"各氣象站 1991 到 2020 年的溫度變化，圓圈大小代表幅度",
"2024 年各縣市的稻米產量",
"團隊實際拜訪過的農場位置",
"各縣市 65 歲以上農民的人數"
],
"ans":0,
"trap_en":"Reading an overlay as a correlation that has been tested. The map poses the question; it does not report a statistic.",
"trap_zh":"把疊圖當成已經檢定過的相關性。這張圖提出的是問題，不是統計結果。"
},
{
"id":"g02",
"img":"g02.webp",
"tier":2,
"dom":"geo",
"page":"geospatial-analysis",
"ask_en":"What is mapped here, and why is this particular window of the year chosen?",
"ask_zh":"這張圖畫的是什麼？為什麼挑這一段時間？",
"a_en":"The change in November to December minimum temperature between 1961-1990 and 2015-2024, by county, from 0 to 1.0 degrees in pale yellow up to 1.9 to 2.05 degrees in dark red. Miaoli, Taichung, Nantou, Chiayi, Tainan and Kaohsiung are the darkest. That window is tomato flowering: warm nights during flowering cut fruit set, so a night-warming map over those two months is the one that matters for tomato yield.",
"a_zh":"這張畫的是各縣市 11 到 12 月最低溫，從 1961–1990 年到 2015–2024 年的變化，淡黃是 0 到 1.0 度，深紅是 1.9 到 2.05 度。苗栗、台中、南投、嘉義、台南、高雄最深。這一段時間正是番茄的開花期：開花期夜溫偏高會降低著果率，所以針對這兩個月做的夜間暖化圖，才是對番茄產量真正有意義的那一張。",
"kw_en":[
"Nov-Dec minimum temperature",
"1961-1990 vs 2015-2024",
"tomato flowering window"
],
"kw_zh":[
"11 至 12 月最低溫",
"1961–1990 對 2015–2024",
"番茄開花期"
],
"q_en":"Why does this map cover November and December specifically?",
"q_zh":"這張地圖為什麼特別只看 11 月與 12 月？",
"opt_en":[
"Because that is the tomato flowering window, when warm nights cut fruit set",
"Because those are the only months with complete station records",
"Because the rice second crop is harvested then",
"Because the team's field visits happened in those months"
],
"opt_zh":[
"因為那是番茄的開花期，夜溫偏高會降低著果率",
"因為只有那兩個月的測站紀錄是完整的",
"因為二期稻作在那時候收割",
"因為團隊的田間拜訪發生在那兩個月"
],
"ans":0,
"trap_en":"Showing a warming map with no crop window attached. The biology is what turns a climate map into an agricultural claim.",
"trap_zh":"拿一張暖化圖出來卻沒有扣住作物的時期。有生物學上的理由，氣候圖才變成農業上的主張。"
},
{
"id":"g03",
"img":"g03.webp",
"tier":2,
"dom":"geo",
"page":"geospatial-analysis",
"ask_en":"What experiment is this flow chart, and what is the result?",
"ask_zh":"這張流程圖是什麼實驗？結果是什麼？",
"a_en":"A validation of our structured geospatial prompt against a plain-language one. The same 15,138-row dataset and the same question go to both. The structured prompt checks coordinate range and coordinate reference system, flags a precision problem (only 3,739 unique points), applies the filter and returns 2,502 rows. The plain-language prompt checks only for missing values, applies no filter and hands back all 15,138 rows. The structured prompt is the one that catches the data problem.",
"a_zh":"這是把我們的結構化地理空間提示詞，拿來跟自然語言提示詞做驗證比較。同一份 15,138 列的資料、同一個問題，分別送給兩者。結構化提示詞會檢查座標範圍與座標參考系統，標出精度問題（只有 3,739 個不重複的點），套用篩選條件後回傳 2,502 列。自然語言提示詞只檢查缺失值，不做任何篩選，把 15,138 列原封不動丟回來。能抓到資料問題的是結構化提示詞。",
"kw_en":[
"same 15,138 rows, two prompts",
"structured flags 3,739 unique points",
"2,502 rows vs all 15,138"
],
"kw_zh":[
"同樣 15,138 列、兩種提示詞",
"結構化版標出 3,739 個不重複點",
"2,502 列對全部 15,138 列"
],
"q_en":"What did the structured prompt catch that the plain-language prompt missed?",
"q_zh":"結構化提示詞抓到了什麼是自然語言提示詞漏掉的？",
"opt_en":[
"A coordinate precision problem: only 3,739 unique points among 15,138 rows",
"That the dataset was in the wrong units of temperature",
"That the county names were spelled inconsistently",
"That the file had been truncated during download"
],
"opt_zh":[
"座標精度問題：15,138 列裡只有 3,739 個不重複的點",
"資料集的溫度單位用錯了",
"縣市名稱拼寫不一致",
"檔案在下載過程中被截斷"
],
"ans":0,
"trap_en":"Presenting prompt engineering as a style preference. Here it is tested: same data, same question, two different answers, and only one of them notices the problem.",
"trap_zh":"把提示詞工程講成個人風格偏好。這裡是真的做了測試：同樣的資料、同樣的問題、兩個不同的答案，而只有一個注意到問題。"
},
{
"id":"e01",
"img":"e01.webp",
"tier":2,
"dom":"education",
"page":"education",
"ask_en":"What is happening here, and why does it matter for the education claim?",
"ask_zh":"這裡在做什麼？它對教育的主張為什麼重要？",
"a_en":"Elementary students at laptops answering a Kahoot quiz at the start of a lesson: the pre-survey. It matters because it is the baseline. Everything we claim about knowledge growth in the elementary programme rests on having asked the same questions before the lesson as after it, across four different visits.",
"a_zh":"國小學生在課程一開始用筆電作答 Kahoot 測驗：這是前測。它之所以重要，是因為它就是基線。我們對國小課程「知識有成長」的所有主張，都建立在「同樣的題目在課前問過、課後再問一次」這件事上，而且做了四次不同的拜訪。",
"kw_en":[
"Kahoot pre-survey",
"the baseline",
"same questions before and after"
],
"kw_zh":[
"Kahoot 前測",
"基線",
"課前課後同一份題目"
],
"q_en":"Why is this pre-survey the important part of the education programme?",
"q_zh":"為什麼這份前測是整個教育課程中重要的部分？",
"opt_en":[
"It is the baseline that lets the team claim knowledge growth rather than just a good score",
"It decides which students are allowed to do the experiment",
"It is how the team recruited volunteers for the forum",
"It replaces the written lab report at the end of the lesson"
],
"opt_zh":[
"它是基線，讓團隊可以宣稱「知識有成長」，而不只是「分數不錯」",
"它決定哪些學生可以做實驗",
"這是團隊替論壇招募志工的方式",
"它取代了課程結束時的書面實驗報告"
],
"ans":0,
"trap_en":"Reporting a post-lesson score with nothing to compare it to. The forum KAP survey has exactly that weakness; the school programme does not.",
"trap_zh":"報一個課後分數卻沒有東西可以對照。論壇的 KAP 問卷就是這個弱點，而國小課程沒有。"
},
{
"id":"e02",
"img":"e02.webp",
"tier":2,
"dom":"education",
"page":"education",
"ask_en":"What experiment is being demonstrated, and what does it teach?",
"ask_zh":"這裡示範的是什麼實驗？它在教什麼？",
"a_en":"A team member demonstrating the spinach leaf-disk experiment to elementary students around a table. Leaf disks sink in bicarbonate solution and float again as photosynthesis fills them with oxygen, so the class watches the rate of photosynthesis directly, with no instrument. It is the hands-on half of the lesson that the pre and post survey then measures.",
"a_zh":"隊員在桌邊向國小學生示範菠菜葉圓盤實驗。葉圓盤放進碳酸氫鈉溶液中會沉下去，隨著光合作用產生氧氣又浮起來，所以全班不需要任何儀器就能直接看到光合作用的速率。這是課程中動手的那一半，而前後測量的就是這一段的效果。",
"kw_en":[
"spinach leaf-disk assay",
"disks float as oxygen builds",
"photosynthesis without an instrument"
],
"kw_zh":[
"菠菜葉圓盤實驗",
"產氧後圓盤浮起",
"不用儀器看光合作用"
],
"q_en":"What makes the leaf-disk experiment suitable for an elementary classroom?",
"q_zh":"葉圓盤實驗為什麼適合國小教室？",
"opt_en":[
"The disks float as photosynthesis produces oxygen, so the rate is visible with no instrument",
"It uses the same photometer the team built for the bioreactor",
"It demonstrates DNA base pairing with coloured cards",
"It requires a biosafety cabinet, which the school already has"
],
"opt_zh":[
"光合作用產生氧氣後圓盤會浮起來，不用任何儀器就看得到速率",
"它用的是團隊替反應器做的那台光度計",
"它用彩色卡片示範 DNA 鹼基配對",
"它需要生物安全櫃，而學校剛好有"
],
"ans":0,
"trap_en":"Confusing the leaf-disk experiment with the ATCG card game. Both are in the lesson; only one of them is about photosynthesis.",
"trap_zh":"把葉圓盤實驗跟 ATCG 卡牌遊戲搞混。兩個都在課程裡，但只有一個是在講光合作用。"
},
{
"id":"e03",
"img":"e03.webp",
"tier":2,
"dom":"education",
"page":"education",
"ask_en":"What are the students playing, and which concept does it carry?",
"ask_zh":"學生在玩什麼？它承載的是哪一個概念？",
"a_en":"The ATCG base-pairing card game: elementary students around a table holding cards, matching bases while a team member watches. It carries DNA complementarity, the idea that A pairs with T and C with G, in a form a ten-year-old can play. The pre and post survey shows the related question, DNA codons, moving from 25 percent correct to 89 percent.",
"a_zh":"這是 ATCG 鹼基配對卡牌遊戲：國小學生圍著桌子拿著卡片配對，隊員在旁邊看著。它承載的是 DNA 互補配對的概念——A 配 T、C 配 G——而且做成十歲小孩玩得動的形式。前後測顯示相關的那一題（DNA 密碼子）從 25% 答對提升到 89%。",
"kw_en":[
"ATCG card game",
"DNA complementarity",
"25% to 89% on the related question"
],
"kw_zh":[
"ATCG 卡牌遊戲",
"DNA 互補配對",
"相關題目 25% 升到 89%"
],
"q_en":"What concept does the ATCG card game teach?",
"q_zh":"ATCG 卡牌遊戲教的是哪一個概念？",
"opt_en":[
"DNA base pairing: A with T and C with G",
"The difference between biotic and abiotic stress",
"The inputs and outputs of photosynthesis",
"How a bioreactor keeps bacteria contained"
],
"opt_zh":[
"DNA 鹼基配對：A 配 T、C 配 G",
"生物性逆境與非生物性逆境的差別",
"光合作用的輸入與輸出",
"生物反應器怎麼把細菌關住"
],
"ans":0,
"trap_en":"Describing outreach as activities. Each activity here maps to a survey question, and that mapping is the evidence.",
"trap_zh":"把推廣講成「我們辦了哪些活動」。這裡每個活動都對應到一道問卷題目，那個對應才是證據。"
},
{
"id":"y01",
"img":"y01.webp",
"tier":2,
"dom":"dataphys",
"page":"data-physicalization",
"ask_en":"What is this booth, and what is the blue board in the middle?",
"ask_zh":"這個攤位是什麼？中間那塊藍板是什麼？",
"a_en":"Our data physicalization booth at the public forum, in an outdoor market. The blue board headed 作物的感官警報 is the sound exhibit, with the headphones on the table in front of it for listeners. The bioreactor prototype sits beside it, and the styrofoam stress map of Taiwan is the other exhibit. The idea is that a visitor hears and touches the stress data rather than reading a chart of it.",
"a_zh":"這是我們在戶外市集公眾論壇上的資料實體化攤位。中間那塊標題為「作物的感官警報」的藍板是聲音展件，前面桌上擺著給聽眾用的耳機。旁邊放著反應器原型，另一個展件是保麗龍做的台灣逆境地圖。概念是：讓參觀者用聽的、用摸的去接觸逆境資料，而不是去看一張圖表。",
"kw_en":[
"data physicalization booth",
"blue board is the sound exhibit",
"hear and touch, not read"
],
"kw_zh":[
"資料實體化攤位",
"藍板是聲音展件",
"用聽的用摸的，不是用讀的"
],
"q_en":"What is the blue board in the middle of this booth?",
"q_zh":"這個攤位中間那塊藍板是什麼？",
"opt_en":[
"The sound exhibit, with headphones on the table in front of it",
"The project poster explaining the genetic circuit",
"The styrofoam stress map of Taiwan",
"The KAP survey sign-up sheet"
],
"opt_zh":[
"聲音展件，前面桌上放著耳機",
"解釋基因線路的專題海報",
"保麗龍做的台灣逆境地圖",
"KAP 問卷的報名表"
],
"ans":0,
"trap_en":"Describing the booth as a poster stand. The point of data physicalization is the sense the data arrives through.",
"trap_zh":"把攤位講成海報展示區。資料實體化的重點是：資料是透過哪一種感官傳進來的。"
},
{
"id":"y02",
"img":"y02.webp",
"tier":2,
"dom":"dataphys",
"page":"data-physicalization",
"ask_en":"What is on this screen, and what is actually being plotted?",
"ask_zh":"這個畫面上是什麼？實際畫出來的是什麼？",
"a_en":"The listening site, with the header reading Tobacco, Drought and a counter showing 0 of 27 clicks played. Below it is a scatter of pitch in kilohertz against seconds into the recording, with a shaded band marked 40 to 80 kilohertz as the typical range, and a note that bigger dots mean louder clicks. These are the ultrasonic clicks a drought-stressed plant emits, drawn as data and played as sound.",
"a_zh":"這是聆聽網站的畫面，標題寫著「Tobacco, Drought」，計數器顯示 27 個喀噠聲中播放了 0 個。下面是一張散佈圖，縱軸是音高（千赫），橫軸是錄音的秒數，陰影帶標出 40 到 80 千赫的典型範圍，旁邊註明點越大代表聲音越大。這些是乾旱逆境下植物發出的超音波喀噠聲，既畫成資料也播成聲音。",
"kw_en":[
"listening site, tobacco drought",
"pitch in kHz against time",
"27 clicks, 40-80 kHz band"
],
"kw_zh":[
"聆聽網站，菸草乾旱",
"音高（千赫）對時間",
"27 個喀噠聲、40–80 千赫"
],
"q_en":"What does each dot on this scatter represent?",
"q_zh":"這張散佈圖上的每一個點代表什麼？",
"opt_en":[
"One ultrasonic click from a stressed plant, placed by pitch and time, sized by loudness",
"One visitor's response to the booth survey",
"One weather station reading of night temperature",
"One seedling's chlorophyll measurement"
],
"opt_zh":[
"逆境下植物發出的一個超音波喀噠聲，依音高與時間定位，大小代表音量",
"一位參觀者對攤位問卷的回答",
"一個氣象站的夜溫讀值",
"一株幼苗的葉綠素量測值"
],
"ans":0,
"trap_en":"Presenting the plant sounds as our own measurement. These are published recordings we made listenable, not data we collected.",
"trap_zh":"把植物的聲音說成我們自己量的。那是已發表的錄音，我們把它做成可以聽的形式，不是我們蒐集的資料。"
},
{
"id":"y03",
"img":"y03.webp",
"tier":2,
"dom":"dataphys",
"page":"data-physicalization",
"ask_en":"What is this chart, and which bar is the green one?",
"ask_zh":"這是什麼圖？綠色那條是哪一個？",
"a_en":"The knowledge question from the booth survey: which region has the highest plant stress. Yilan County, marked as the correct answer, is the green bar at 51.6 percent, 32 of 62 respondents. Kaohsiung is 19.4 percent, Taichung 17.7 and Tainan 11.3, all grey. It is the data physicalization page's own version of the KAP knowledge result.",
"a_zh":"這是攤位問卷的知識題：哪一個地區的植物逆境最嚴重。被標為正確答案的宜蘭縣是綠色長條，51.6%，62 人中有 32 人。高雄 19.4%、台中 17.7%、台南 11.3%，都是灰色。這是資料實體化頁上自己呈現的 KAP 知識結果版本。",
"kw_en":[
"which region has the highest stress",
"Yilan 51.6% of 62",
"green marks the correct answer"
],
"kw_zh":[
"哪一區逆境最高",
"宜蘭 62 人中 51.6%",
"綠色是正確答案"
],
"q_en":"What was the question behind this chart?",
"q_zh":"這張圖背後問的是什麼問題？",
"opt_en":[
"Which region of Taiwan has the highest plant stress",
"Which exhibit at the booth visitors enjoyed most",
"Whether visitors would share what they learned with family",
"Which crop visitors thought was most at risk"
],
"opt_zh":[
"台灣哪一個地區的植物逆境最嚴重",
"參觀者最喜歡攤位上的哪一個展件",
"參觀者會不會把學到的事情分享給家人",
"參觀者認為哪一種作物風險最高"
],
"ans":0,
"trap_en":"Mixing the knowledge chart up with the attitude and practice charts. Knowledge is the one with a right answer.",
"trap_zh":"把知識題的圖跟態度題、行為題的圖搞混。知識題才是有正確答案的那一種。"
},
{
"id":"u01",
"img":"u01.webp",
"tier":2,
"dom":"sustainability",
"page":"sustainability",
"ask_en":"What does this chart measure, and which question moved most?",
"ask_zh":"這張圖量的是什麼？哪一題進步最多？",
"a_en":"Knowledge growth across seven questions, pre-survey against post-survey, from four elementary school visits. Correct responses rose from 18 to 82 percent on the purpose of photosynthesis, 81 to 93 on its inputs, 31 to 88 on its outputs, 16 to 91 on biotic versus abiotic stress, 65 to 86 on identifying a biotic stressor, 25 to 89 on DNA codons, and 74 to 92 on climate change impact. Biotic versus abiotic stress moved most, from 16 to 91.",
"a_zh":"這張量的是七個題目的知識成長，前測對後測，來自四次國小拜訪。答對率的變化：光合作用的目的從 18% 到 82%，光合作用的輸入從 81% 到 93%，輸出從 31% 到 88%，生物性與非生物性逆境的分辨從 16% 到 91%，辨識生物性逆境源從 65% 到 86%，DNA 密碼子從 25% 到 89%，氣候變遷影響從 74% 到 92%。進步最多的是生物性與非生物性逆境的分辨，從 16% 到 91%。",
"kw_en":[
"pre and post survey, seven questions",
"four school visits",
"biotic vs abiotic 16% to 91%"
],
"kw_zh":[
"前後測，七個題目",
"四次國小拜訪",
"生物／非生物逆境 16% 到 91%"
],
"q_en":"Which question showed the largest gain between pre- and post-survey?",
"q_zh":"哪一題在前後測之間的進步幅度最大？",
"opt_en":[
"Biotic versus abiotic stress, from 16 to 91 percent correct",
"The inputs of photosynthesis, from 81 to 93 percent",
"Climate change impact, from 74 to 92 percent",
"Identifying a biotic stressor, from 65 to 86 percent"
],
"opt_zh":[
"生物性與非生物性逆境的分辨，從 16% 到 91%",
"光合作用的輸入，從 81% 到 93%",
"氣候變遷的影響，從 74% 到 92%",
"辨識生物性逆境源，從 65% 到 86%"
],
"ans":0,
"trap_en":"Quoting the highest post-survey number instead of the biggest gain. A question that started at 81 percent had little room to move.",
"trap_zh":"引用後測最高分而不是進步最多的那一題。本來就 81% 的題目，本來就沒有多少進步空間。"
},
{
"id":"u02",
"img":"u02.webp",
"tier":2,
"dom":"sustainability",
"page":"sustainability",
"ask_en":"What level is this class, and which SDG does this work sit under?",
"ask_zh":"這堂課是哪個學制？這項工作歸在哪一個 SDG 下？",
"a_en":"A team member teaching a high school class in front of a slide reading Abiotic vs Biotic Stress. On the Sustainability page this sits under SDG 4, quality education: the problem we name there is that many people carry misconceptions about synthetic biology because the only accessible material is scientific papers that are hard to read. Teaching across three school levels is our answer to that.",
"a_zh":"隊員在一張標題為「Abiotic vs Biotic Stress」的投影片前，對高中班級授課。在永續頁上，這項工作歸在 SDG 4（優質教育）之下：我們在那裡指出的問題是，很多人對合成生物學抱持誤解，因為唯一拿得到的材料是難讀的科學論文。跨三個學制去上課，就是我們對這件事的回應。",
"kw_en":[
"high school class",
"SDG 4 quality education",
"three school levels"
],
"kw_zh":[
"高中班級",
"SDG 4 優質教育",
"三個學制"
],
"q_en":"Which SDG does the Sustainability page file this teaching work under?",
"q_zh":"永續頁把這項教學工作歸在哪一個 SDG 下？",
"opt_en":[
"SDG 4, quality education",
"SDG 2, zero hunger",
"SDG 15, life on land",
"SDG 12, responsible consumption"
],
"opt_zh":[
"SDG 4，優質教育",
"SDG 2，消除飢餓",
"SDG 15，陸域生態",
"SDG 12，負責任的消費"
],
"ans":0,
"trap_en":"Listing SDGs without saying which piece of work sits under each. The page pairs every goal with a specific problem and a specific action.",
"trap_zh":"只列 SDG 卻不講哪一項工作歸在哪一個底下。頁面上每一個目標都配著一個具體問題與一個具體行動。"
},
{
"id":"u03",
"img":"u03.webp",
"tier":2,
"dom":"sustainability",
"page":"sustainability",
"ask_en":"What are the rows and columns here, and what does the last row show?",
"ask_zh":"這張圖的行與列是什麼？最後一排顯示什麼？",
"a_en":"Hydroponic boxes photographed from above: columns are box 1 control, box 2 pre-treatment, box 3 co-treatment and box 4 post-treatment; rows are 25 July, 28 July and 4 August. By 4 August the co-treatment box carries the largest and greenest rosettes while the control and the post-treatment boxes have browned. On the Sustainability page it sits under SDG 2, zero hunger, as the evidence that the protectant can hold a crop through a stress.",
"a_zh":"水耕盒由上方拍攝：四欄分別是第 1 盒對照、第 2 盒前處理、第 3 盒同時處理、第 4 盒後處理；三排是 7 月 25 日、7 月 28 日、8 月 4 日。到 8 月 4 日，同時處理那一盒的蓮座最大也最綠，對照組與後處理組則已經褐化。在永續頁上，它放在 SDG 2（消除飢餓）之下，作為「保護劑能幫作物撐過一次逆境」的證據。",
"kw_en":[
"four boxes by three dates",
"co-treatment greenest by 4 August",
"SDG 2 zero hunger"
],
"kw_zh":[
"四盒乘三個日期",
"8 月 4 日同時處理最綠",
"SDG 2 消除飢餓"
],
"q_en":"Which box is doing best by the last row of this figure?",
"q_zh":"到這張圖最後一排為止，哪一盒狀況最好？",
"opt_en":[
"Box 3, co-treatment",
"Box 1, the control",
"Box 2, pre-treatment",
"Box 4, post-treatment"
],
"opt_zh":[
"第 3 盒，同時處理",
"第 1 盒，對照組",
"第 2 盒，前處理",
"第 4 盒，後處理"
],
"ans":0,
"trap_en":"Carrying this result across to the agar plates. The best timing differs between the hydroponic and agar systems and between protectants; name the system every time.",
"trap_zh":"把這個結果直接套到洋菜盤上。最佳時機在水耕與洋菜系統之間、在不同保護劑之間都不一樣；每次都要講清楚是哪一個系統。"
},
{
"id":"o01",
"img":"o01.webp",
"tier":2,
"dom":"overview",
"page":"description",
"ask_en":"Walk this diagram from left to right in one breath.",
"ask_zh":"一口氣把這張圖從左講到右。",
"a_en":"Plant stresses, an AIoT sensor that picks them up, a green light signal, B. subtilis carrying the CcaSR circuit, the hollow fiber membrane, protectant secretion, plant protected. Seven steps. It is the one diagram every member should be able to narrate without notes, because it names what senses, what decides, what makes and what contains.",
"a_zh":"植物逆境、感測到逆境的 AIoT 感測器、綠光訊號、帶 CcaSR 線路的 B. subtilis、中空纖維膜、保護劑分泌、植物獲得保護。七個步驟。這是每一位隊員都應該不看稿就講得出來的那一張圖，因為它把「誰在感測、誰在決定、誰在製造、誰在圍堵」都講完了。",
"kw_en":[
"seven steps",
"sensor, green light, CcaSR, membrane",
"everyone should know this one"
],
"kw_zh":[
"七個步驟",
"感測器、綠光、CcaSR、薄膜",
"每個人都該會講"
],
"q_en":"What is the signal that carries the decision from the sensor to the bacteria?",
"q_zh":"把決定從感測器傳到細菌的訊號是什麼？",
"opt_en":[
"A green light signal, read by the CcaSR system in B. subtilis",
"A chemical inducer added to the medium",
"A change in the medium's pH",
"A temperature setpoint sent to the incubator"
],
"opt_zh":[
"綠光訊號，由 B. subtilis 的 CcaSR 系統接收",
"加進培養基的化學誘導物",
"培養基 pH 的改變",
"送給培養箱的溫度設定值"
],
"ans":0,
"trap_en":"Skipping the sensor. The chain begins outside the reactor, with something in the field that notices a stress.",
"trap_zh":"跳過感測器。這條鏈的起點在反應器之外，是田裡某個東西察覺到逆境。"
},
{
"id":"o02",
"img":"o02.webp",
"tier":2,
"dom":"overview",
"page":"description",
"ask_en":"What are the four modules, and which one would a judge most likely probe?",
"ask_zh":"這四個模組是什麼？評審最可能追問哪一個？",
"a_en":"The genetic circuit inside B. subtilis, in four modules. Module 1, PCB synthesis, turns heme into phycocyanobilin with ho1::pcyA. Module 2, light sensing, is CcaS in the membrane, switched on by green light under stress and off by red light when there is none. Module 3, transcriptional output, is CcaR and its dimer. Module 4 is the output: translation and the folded protectant leaving the cell. Module 1 is the one to be ready on, because B. subtilis does not make PCB on its own and without it CcaS cannot see light at all.",
"a_zh":"這是 B. subtilis 體內的基因線路，分成四個模組。模組 1 是 PCB 合成，用 ho1::pcyA 把血紅素變成藻藍膽素。模組 2 是光感測，CcaS 位在膜上，逆境時綠光把它打開，沒有逆境時紅光把它關掉。模組 3 是轉錄輸出，CcaR 與它的雙體。模組 4 是輸出：轉譯以及摺疊好的保護劑離開細胞。要準備好被問的是模組 1，因為 B. subtilis 自己做不出 PCB，沒有它 CcaS 根本看不到光。",
"kw_en":[
"four modules",
"ho1::pcyA makes PCB",
"green on, red off"
],
"kw_zh":[
"四個模組",
"ho1::pcyA 製造 PCB",
"綠光開、紅光關"
],
"q_en":"What does module 1, ho1::pcyA, produce?",
"q_zh":"模組 1 的 ho1::pcyA 產生的是什麼？",
"opt_en":[
"Phycocyanobilin, the chromophore CcaS needs in order to respond to light",
"The ACC deaminase protectant itself",
"The CcaR transcriptional regulator",
"The secretion signal peptide that exports the protectant"
],
"opt_zh":[
"藻藍膽素（PCB），CcaS 要能感光所需要的發色團",
"ACC 去胺酶保護劑本身",
"CcaR 轉錄調控因子",
"把保護劑送出細胞的分泌訊號胜肽"
],
"ans":0,
"trap_en":"Describing the circuit as 'green light turns it on' and stopping there. Without module 1 there is nothing for the light to act on.",
"trap_zh":"把線路講成「綠光一照就開」就停了。沒有模組 1，光根本沒有東西可以作用。"
},
{
"id":"o03",
"img":"o03.webp",
"tier":2,
"dom":"overview",
"page":"description",
"ask_en":"What two variables are on this map, and what is the claim it supports?",
"ask_zh":"這張地圖上有哪兩個變數？它支持的主張是什麼？",
"a_en":"County nighttime temperature, 18:00 to midnight, averaged through 2024, in five bands from 20.51 to 27.26 degrees, blue to red. The white proportional circles are the rice yield trend at each station over 2005 to 2024, from minus 0.044 to plus 0.058 tonnes per hectare per year. The hottest counties are in the north and the south. It supports the opening claim that warm nights, not just hot days, are what is eroding rice yield in Taiwan.",
"a_zh":"底色是各縣市 2024 年全年平均的夜間溫度（18:00 到午夜），分成 20.51 到 27.26 度五個級距，由藍到紅。白色的比例圓圈是各測站 2005 到 2024 年的稻作產量趨勢，從每年每公頃 −0.044 到 +0.058 公噸。最熱的縣市分布在北部與南部。它支持的是開場的那個主張：侵蝕台灣稻作產量的是暖夜，不只是熱天。",
"kw_en":[
"night temperature 18:00 to midnight",
"circles are the yield trend",
"warm nights, not just hot days"
],
"kw_zh":[
"夜溫 18:00 到午夜",
"圓圈是產量趨勢",
"暖夜不只是熱天"
],
"q_en":"What do the white proportional circles on this map show?",
"q_zh":"這張地圖上的白色比例圓圈顯示什麼？",
"opt_en":[
"The rice yield trend at each station over 2005 to 2024, in tonnes per hectare per year",
"The number of weather stations in each county",
"The area of farmland under rice in each county",
"The average age of farmers at each location"
],
"opt_zh":[
"各測站 2005 到 2024 年的稻作產量趨勢，單位是每年每公頃公噸",
"各縣市的氣象站數量",
"各縣市種稻的農地面積",
"各地點農民的平均年齡"
],
"ans":0,
"trap_en":"Reading the map as proof of causation. It is the motivating picture; the causal work is the stress model on the Math Model page.",
"trap_zh":"把這張地圖當成因果的證明。它是用來帶出動機的圖；真正做因果的是數學模型頁上的逆境模型。"
}
]
};
