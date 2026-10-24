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
}
],
"n":86,
"t1":50,
"t2":36
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
"page":"hardware#bioreactor",
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
"dom":"hardware"
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
"dom":"hardware"
},
{
"id":"h04",
"img":"h04.webp",
"tier":1,
"page":"hardware#bioreactor",
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
"dom":"hardware"
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
"dom":"hardware"
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
"dom":"hardware"
},
{
"id":"h08",
"img":"h08.webp",
"tier":1,
"page":"hardware#hydroponics",
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
"dom":"hardware"
},
{
"id":"h10",
"img":"h10.webp",
"tier":1,
"page":"hardware#photometer",
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
"dom":"ihp"
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
"dom":"ihp"
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
"dom":"measurement"
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
"dom":"measurement"
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
"dom":"measurement"
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
"dom":"measurement"
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
"dom":"measurement"
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
"dom":"measurement"
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
"dom":"measurement"
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
"dom":"measurement"
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
"dom":"measurement"
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
"dom":"plant"
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
"dom":"plant"
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
"dom":"plant"
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
"dom":"plant"
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
"dom":"plant"
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
"dom":"plant"
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
"dom":"plant"
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
"trap_zh":"把 226 公頃當成事實來引用。講數字時要一起講假設，否則評審一定會問「這是用什麼價格算的」。"
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
"trap_zh":"把排名當成在最終模型中的重要性。它排的是「加進來對誤差造成什麼影響」，那不是同一件事。"
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
"trap_zh":"把整套流程講成「我們用了 AlphaFold」。AI 共摺疊只是對接之外的另一條線；真正決定取捨的是驗證階段。"
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
"trap_zh":"只拿乾淨的那一次出來。把七次全部放上去、並標出不可用的段落，才是更強的回答。"
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
"trap_zh":"說 ACC 去胺酶「阻斷乙烯」。它移除的是前驅物，不碰受體，也不碰乙烯本身。"
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
"trap_zh":"故事講到薄膜就停了。輸送迴路才是回答「然後呢，到底什麼東西到得了田裡」的部分。"
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
"trap_zh":"把「做出來的」跟「設計的」混在一起講。wiki 在每個硬體章節都把兩者分開；講話時也要分開。"
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
"trap_zh":"把它說成已驗證的圍堵系統。它是單一一次、我們誠實標示出來的結果，頁面上就是這樣寫的。"
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
