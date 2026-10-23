var TERMS = [
{
"term":"%B/B0",
"kw_en":[
"binding relative to maximum",
"valid 20 to 80",
"curve 31.6 to 95.1"
],
"kw_zh":[
"相對最大結合",
"有效範圍 20 至 80",
"曲線 31.6 至 95.1"
],
"def_en":"Sample signal as a percentage of maximum-binding signal after blank and non-specific correction. It falls as protein rises. ReLEAF re-assays samples outside 20 to 80, and its standard curve only covers 31.6 to 95.1.",
"def_zh":"扣除空白與非專一結合後，樣品訊號占最大結合訊號的百分比，蛋白質越多越低。ReLEAF 對 20 至 80 以外的樣品要重測，而標準曲線只涵蓋 31.6 至 95.1。",
"cat":"assay",
"src":"measurement",
"dom":"measurement"
},
{
"term":"2 mm path and the ×5 factor",
"kw_en":[
"2 mm cuvette",
"×5 gives the 1 cm basis",
"short path avoids saturation"
],
"kw_zh":[
"2 mm 流動槽",
"×5 換算成 1 cm",
"短光徑避免飽和"
],
"def_en":"The flow cuvette is 2 mm thick, not the standard 10 mm. Software multiplies the absorbance by 5 (10 mm ÷ 2 mm) so it reads as OD600. The short path keeps a dense culture from saturating the reading.",
"def_zh":"流動槽厚 2 mm，不是標準的 10 mm。軟體把吸光度乘以 5（10 mm ÷ 2 mm），讓結果以 OD600 呈現。短光徑可避免高密度培養液讓讀值飽和。",
"cat":"hardware",
"src":"hardware-photometer#8.2 OD600 Calculation",
"dom":"hardware"
},
{
"term":"Abiotic stress",
"kw_en":[
"non-living cause",
"salt and heat",
"cuts yield"
],
"kw_zh":[
"非生物性因素",
"鹽與高溫",
"降低產量"
],
"def_en":"Plant damage caused by the environment, not by a pathogen: here salt and heat. ReLEAF tested only these two; drought and pH stress were not tested.",
"def_zh":"由環境而非病原造成的植物傷害，這裡指鹽與高溫。ReLEAF 只測了這兩種，沒有測乾旱或 pH 逆境。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"ACC (precursor)",
"kw_en":[
"ethylene precursor",
"made under stress",
"cleaved by ACCD"
],
"kw_zh":[
"乙烯前驅物",
"逆境下累積",
"被 ACCD 分解"
],
"def_en":"1-aminocyclopropane-1-carboxylic acid, the compound a plant turns into ethylene. Lowering ACC is the way ACC deaminase is meant to reduce stress ethylene.",
"def_zh":"1-aminocyclopropane-1-carboxylic acid，植物把它轉成乙烯。降低 ACC 就是 ACC deaminase 想減少逆境乙烯的方式。",
"cat":"biology",
"src":"plant",
"dom":"plant"
},
{
"term":"ACC deaminase (ACCD)",
"kw_en":[
"breaks down ACC",
"lowers ethylene",
"true enzyme"
],
"kw_zh":[
"分解 ACC",
"降低乙烯",
"真正的酵素"
],
"def_en":"An enzyme from Pseudomonas putida UW4 that breaks ACC, the precursor of the stress hormone ethylene, into α-ketobutyrate and ammonia. It is ReLEAF's lead protectant and the only one carried through the reactor and the light circuit.",
"def_zh":"來自 Pseudomonas putida UW4 的酵素，把壓力荷爾蒙乙烯的前驅物 ACC 分解成 α-酮丁酸與氨。它是 ReLEAF 的主力保護蛋白，也是唯一走完反應器與光電路的一個。",
"cat":"biology",
"src":"parts",
"dom":"wetlab"
},
{
"term":"ACC deaminase variants",
"kw_en":[
"no mutant sent",
"cysteine removal held",
"DDMut error 1.14-2.24"
],
"kw_zh":[
"沒有送突變體",
"半胱胺酸移除暫緩",
"DDMut 誤差 1.14 到 2.24"
],
"def_en":"ACC deaminase is a PLP enzyme, so it was not docked. We screened 17 point changes with ConSurf and DDMut, designed C41V, C67A, C162A, C282A, and sent only wild type.",
"def_zh":"ACC deaminase 是 PLP 酵素，所以沒有對接。我們用 ConSurf 與 DDMut 篩選 17 個點突變，設計出 C41V、C67A、C162A、C282A，但只送出野生型。",
"cat":"biology",
"src":"protein-design-sprints",
"dom":"drylab"
},
{
"term":"Acceptance gate",
"kw_en":[
"spread gate",
"jump gate",
"3 agreeing readings"
],
"kw_zh":[
"離散閘門",
"跳動閘門",
"連續三筆一致"
],
"def_en":"A check after the estimator that withholds untrustworthy readings. Spread: MAD and 90th percentile differ by over 0.03 OD. Jump: more than 0.05 OD or 5 percent from the last accepted value, so a new level needs three agreeing readings.",
"def_zh":"在估計法之後把不可信讀值擋下的檢查。離散：MAD 與第 90 百分位差超過 0.03 OD。跳動：距上次接受值超過 0.05 OD 或 5%，新水準需連續三筆一致。",
"cat":"software",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Acceptance gate (OD600)",
"kw_en":[
"holds last good value",
"bubbles and level shifts",
"31 of 1083 rejected"
],
"kw_zh":[
"保留上一個好值",
"氣泡與位準跳動",
"1083 中拒絕 31"
],
"def_en":"A filter on the in-line photometer that rejects windows with bubbles or sudden shifts and holds the last good value. Run 6 turned away 31 of 1083 windows, run 7 81 of 5009.",
"def_zh":"對 in-line photometer 的過濾器，遇到氣泡或突然位移就拒絕該視窗並保留上一個好值。run 6 拒絕 1083 個視窗中的 31 個，run 7 為 5009 中的 81 個。",
"cat":"hardware",
"src":"software",
"dom":"drylab"
},
{
"term":"Acceptance gates",
"kw_en":[
"spread gate 0.03 OD",
"jump gate 5%",
"worst error 2.44 to 0.016"
],
"kw_zh":[
"離散閘 0.03 OD",
"跳變閘 5%",
"最壞誤差 2.44 降至 0.016"
],
"def_en":"Two checks after the filter. One rejects a reading if two estimators differ by over 0.03 OD; the other holds back jumps over 0.05 OD or 5% until three readings agree. Needed because a full-air cell reads steadily and wrongly.",
"def_zh":"濾波之後的兩道檢查。一道在兩種估計值差超過 0.03 OD 時剔除該讀值；另一道把超過 0.05 OD 或 5% 的跳變先擋住，等三次讀值一致才接受。因為整個比色槽充滿空氣時讀值穩定卻是錯的。",
"cat":"software",
"src":"hardware-photometer#8.1",
"dom":"hardware"
},
{
"term":"Agar plate assay",
"kw_en":[
"½ MS agar",
"controlled",
"fast screening"
],
"kw_zh":[
"½ MS 培養基",
"高度控制",
"快速篩選"
],
"def_en":"Seedlings grown on gel medium with nutrients. It gives uniform nutrients and exact stress, so ReLEAF used it to screen protectants first. Round plates hold about 40 seedlings, vertical square plates 9 to 10.",
"def_zh":"幼苗長在含營養的膠體培養基上，養分一致、逆境精準，所以 ReLEAF 先用它篩選保護劑。圓盤約 40 株，方形直立盤 9 至 10 株。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"Agro-pesticides Management Act (農藥管理法)",
"kw_en":[
"APHIA handles",
"pathogen claims",
"gray mold track"
],
"kw_zh":[
"動植物防疫檢疫署",
"病原防治宣稱",
"灰黴病路線"
],
"def_en":"Taiwan's pesticide law, run by APHIA. It would apply only if ReLEAF claims pathogen control, such as BoPep4 against gray mold after the Jamboree. The abiotic-stress claims are aimed at the fertilizer route instead.",
"def_zh":"臺灣的農藥法規，由防檢署執行。只有在 ReLEAF 宣稱防治病原時才適用，例如 Jamboree 之後 BoPep4 對抗灰黴病。非生物逆境的宣稱則走肥料路線。",
"cat":"law",
"src":"laws-and-regulations",
"dom":"biomanufacturing"
},
{
"term":"AIoT",
"kw_en":[
"leaf sensor",
"forecast and history",
"app alerts"
],
"kw_zh":[
"葉片感測器",
"預報與歷史",
"App 警報"
],
"def_en":"Artificial intelligence plus internet of things. ReLEAF's leaf sensor and weather data feed a model that predicts stress and triggers the green-light signal. Prof. Chang and Mr. Lu pushed for usability and extra sensors.",
"def_zh":"人工智慧加物聯網。ReLEAF 的葉片感測器與天氣資料輸入模型來預測逆境並啟動綠光訊號。張教授與盧先生要求更好用與更多感測器。",
"cat":"software",
"src":"description",
"dom":"ihp"
},
{
"term":"AIoT (digital twin vs model vs shadow)",
"kw_en":[
"live data plus models",
"return to the vessel",
"a person approves"
],
"kw_zh":[
"即時資料加模型",
"回饋到反應器",
"由人核准"
],
"def_en":"AIoT: sensors and valves wired to a board that logs readings, with models fitted to the logs. A digital twin closes the loop back to the vessel; a shadow gets live data but needs a person to act. ReLEAF's loop is not yet closed.",
"def_zh":"AIoT：感測器和閥門接到會記錄讀值的板子，模型再用這些紀錄擬合。數位孿生會把結果回饋到反應器；數位影子有即時資料但需人來行動。ReLEAF 的迴路尚未閉合。",
"cat":"software",
"src":"software",
"dom":"biomanufacturing"
},
{
"term":"Alanine scan",
"kw_en":[
"swap one side chain",
"18 mutants",
"hotspots K7 R9 R11 E12 H14 K18 H22 N23"
],
"kw_zh":[
"逐一換成丙胺酸",
"18 個突變",
"熱點 K7、R9、R11、E12、H14、K18、H22、N23"
],
"def_en":"Replacing one residue at a time with alanine to see which positions the interface cannot lose. Ours found eight hotspots but missed S15A and G17A, which published work shows are strongly weakened.",
"def_zh":"逐一把殘基換成丙胺酸，看界面不能失去哪些位置。我們找到八個熱點，但沒看出 S15A 與 G17A，而已發表研究顯示它們活性大幅下降。",
"cat":"biology",
"src":"protein-design-sprints",
"dom":"drylab"
},
{
"term":"Algorithm replay",
"kw_en":[
"same raw bursts",
"11 algorithms",
"no burst-to-burst noise"
],
"kw_zh":[
"同一份原始 burst",
"11 種演算法",
"排除 burst 間差異"
],
"def_en":"Logging every individual sensor sample so many estimators can be run offline on exactly the same input. Replay reproduced all eight logged OD outputs within 0.005 OD, so the offline analysis matches the firmware.",
"def_zh":"記錄每一個感測器原始讀值，讓多種估計法在完全相同的輸入上離線運算。重播結果與八個記錄的 OD 輸出差在 0.005 OD 內，所以離線分析和韌體一致。",
"cat":"software",
"src":"measurement",
"dom":"measurement"
},
{
"term":"AlphaFold ipTM",
"kw_en":[
"interface confidence",
"not activity",
"0.73 for a dead peptide"
],
"kw_zh":[
"界面信心分數",
"不等於活性",
"失活肽也有 0.73"
],
"def_en":"AlphaFold's confidence in how two chains sit together. It gave 0.73 to a peptide published as over 4000-fold inactive and 0.74 to BoPEP4, so we use it only as a structural confidence estimate.",
"def_zh":"AlphaFold 對兩條鏈如何結合的信心分數。它給已發表為失活 4000 倍以上的肽 0.73、給 BoPEP4 0.74，所以我們只當作結構信心的參考。",
"cat":"software",
"src":"protein-design-methodology",
"dom":"drylab"
},
{
"term":"AmilCP",
"kw_en":[
"blue chromoprotein",
"reporter that failed",
"folds too fast"
],
"kw_zh":[
"藍色色蛋白",
"失敗的報告蛋白",
"折疊太快"
],
"def_en":"A blue-purple chromoprotein used as a visible reporter for secretion. Constructs were sequence-verified but cells stayed colourless (A588 0.082 vs 0.081). The team thinks it folds in the cell before the Sec pathway can export it; untested.",
"def_zh":"作為分泌可見指標的藍紫色色蛋白。構築經定序正確，但菌體沒有顏色（A588 為 0.082 對 0.081）。團隊推測它在細胞內折疊太快，Sec 路徑來不及輸出；尚未驗證。",
"cat":"assay",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"Anthocyanin",
"kw_en":[
"purple-red pigment",
"stress colour",
"visual score"
],
"kw_zh":[
"紫紅色素",
"逆境顏色",
"目視記錄"
],
"def_en":"A red-purple pigment plants build under stress. ReLEAF recorded it by eye, and it also appeared in unstressed plants given BoPEP4 or too much bacterial culture.",
"def_zh":"植物受逆境時累積的紫紅色素。ReLEAF 用肉眼記錄；未受逆境但給了 BoPEP4 或過多菌液的植株也出現了它。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"Arabidopsis thaliana (Col-0)",
"kw_en":[
"small mustard",
"standard lab model",
"fast life cycle"
],
"kw_zh":[
"小型芥菜",
"標準實驗模式",
"生命週期短"
],
"def_en":"A small mustard plant used worldwide as the lab model for plant biology. ReLEAF used the Col-0 line on agar, in hydroponics and in soil to test whether a protectant helps under salt or heat.",
"def_zh":"全世界通用的植物模式生物，是一種小型芥菜。ReLEAF 使用 Col-0 品系，在瓊脂、水耕與土壤中測試保護劑在鹽或熱逆境下是否有幫助。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"Arduino App Lab / Uno Q rig app",
"kw_en":[
"firmware holds interlocks",
"Python backend",
"browser UI"
],
"kw_zh":[
"韌體負責聯鎖",
"Python 後端",
"瀏覽器介面"
],
"def_en":"The software that runs the rig, ver. 4.13 with UI v6.2.2. Firmware on the microcontroller samples instruments and trips the pressure interlock; the Linux-side backend computes and logs; the browser interface holds no interlock.",
"def_zh":"控制反應器的軟體，版本 4.13、介面 v6.2.2。微控制器韌體取樣儀器並觸發壓力聯鎖；Linux 端後端負責計算與記錄；瀏覽器介面本身沒有聯鎖。",
"cat":"software",
"src":"digital-twin-app",
"dom":"biomanufacturing"
},
{
"term":"Arduino Uno Q and mainboard",
"kw_en":[
"Linux side plus microcontroller",
"one mainboard",
"modules plug in"
],
"kw_zh":[
"Linux 加微控制器",
"單一主板",
"感測器模組可插拔"
],
"def_en":"Uno Q is the small computer that runs the photometer and bioreactor with no laptop attached. Owl Lab's mainboard brings every pin out with 12 V to 5 V and 3.3 V conversion, so sensors plug in as modules.",
"def_zh":"Uno Q 是不需接筆電就能運行光度計與反應器的小電腦。Owl Lab 的主板把所有腳位引出並提供 12 V 轉 5 V 與 3.3 V，感測器可以模組方式插上。",
"cat":"hardware",
"src":"hardware-bioreactor#6.2",
"dom":"hardware"
},
{
"term":"Arduino UNO Q and the mainboard",
"kw_en":[
"3.3 V logic",
"MCU plus Linux side",
"mainboard: plug-in modules"
],
"kw_zh":[
"3.3 V 邏輯",
"MCU 加 Linux 端",
"主機板：插拔式模組"
],
"def_en":"The controller: a microcontroller side reads sensors and holds interlocks, a Linux side serves the dashboard. It runs 3.3 V logic. The mainboard brings out every pin with a 12 V to 5 V and 3.3 V converter so sensors plug in as modules.",
"def_zh":"控制器：微控制器端讀感測器並執行保護機制，Linux 端提供儀表板；使用 3.3 V 邏輯。主機板把每支腳位引出並內建 12 V 轉 5 V、3.3 V 的轉換器，讓感測器像模組一樣插上去。",
"cat":"hardware",
"src":"hardware-bioreactor#6.2; software#The Digital Twin",
"dom":"hardware"
},
{
"term":"AtPP2-B11 and LEA14 partner",
"kw_en":[
"F-box protein",
"only published partner",
"interface unpredictable"
],
"kw_zh":[
"F-box 蛋白",
"唯一已發表的夥伴",
"界面無法預測"
],
"def_en":"AtPP2-B11 is the only published binding partner of LEA14. AlphaFold could not predict their interface (ipTM 0.16) while controls passed, so the LEA14 docking strand stopped by prior agreement.",
"def_zh":"AtPP2-B11 是 LEA14 唯一已發表的結合夥伴。控制組都通過時，AlphaFold 卻無法預測兩者的界面（ipTM 0.16），所以 LEA14 的對接依事先約定停止。",
"cat":"biology",
"src":"protein-design-sprints",
"dom":"drylab"
},
{
"term":"Autoclaving",
"kw_en":[
"121 °C, 15–30 min",
"waste is autoclaved",
"loop cleaned in place"
],
"kw_zh":[
"121 °C、15–30 分鐘",
"廢棄物高壓滅菌",
"循環系統現場清潔"
],
"def_en":"Steam sterilization at 121 °C for 15 to 30 minutes. ReLEAF autoclaves solid biological waste and bleaches liquids, at BSL-1. The assembled bioreactor loop cannot go into an autoclave, so it is cleaned in place with peroxide instead.",
"def_zh":"以 121 °C 蒸氣滅菌 15 至 30 分鐘。ReLEAF 在 BSL-1 下把固態生物廢棄物高壓滅菌、液體廢棄物用漂白水處理。組裝好的反應器循環放不進高壓滅菌鍋，所以改用過氧化氫現場清潔。",
"cat":"hardware",
"src":"safety-and-security#Biological waste management; engineering",
"dom":"hardware"
},
{
"term":"Autoencoder (fault model)",
"kw_en":[
"trained on healthy 120 h",
"reconstruction error",
"two axes"
],
"kw_zh":[
"用健康的 120 小時訓練",
"重建誤差",
"兩條軸"
],
"def_en":"A neural network trained only on healthy data. When new readings reconstruct badly, it raises an alarm. Ours scores a sensor axis and a process axis separately and flagged the photometer 26.7 h early.",
"def_zh":"只用健康資料訓練的神經網路，新讀值重建得很差時就發出警報。我們的分成感測器軸與製程軸分開評分，提早 26.7 小時標出 photometer 異常。",
"cat":"software",
"src":"software",
"dom":"drylab"
},
{
"term":"Autoencoder fault detector",
"kw_en":[
"trained on healthy hours",
"sensor axis vs process axis",
"26.7 h lead"
],
"kw_zh":[
"用健康時段訓練",
"感測器軸與製程軸",
"領先 26.7 小時"
],
"def_en":"A model trained on the first 120 healthy hours of run 3 that scores the reference beam and the growth rate separately. It flagged the instrument at 216.3 h, 26.7 h before failure, with a 6.1 percent false-alarm rate.",
"def_zh":"用第 3 次實驗前 120 小時健康資料訓練的模型，分別對參考光束和生長率評分。它在 216.3 小時標記儀器，比失效早 26.7 小時，誤報率 6.1%。",
"cat":"software",
"src":"results",
"dom":"measurement"
},
{
"term":"Automatic pH control (KOH)",
"kw_en":[
"base only",
"6.8 triggers, 7.0 target",
"KOH corroded the valve"
],
"kw_zh":[
"只加鹼",
"6.8 啟動、目標 7.0",
"KOH 腐蝕閥"
],
"def_en":"One-sided feedback: when lumen pH falls to 6.8, a pump adds 5 mL of 1 M KOH per minute until pH 7.0. It worked the first night; then KOH corroded the feeding valve and the team dosed by hand once a day.",
"def_zh":"單向回饋控制：管腔側 pH 降到 6.8 時，幫浦每分鐘加 5 mL 的 1 M KOH，直到 pH 回到 7.0。第一晚運作正常，之後 KOH 腐蝕進料閥，改成每天手動加一次。",
"cat":"hardware",
"src":"hardware-bioreactor#4.2 DBTL 4",
"dom":"hardware"
},
{
"term":"B2B (business-to-business)",
"kw_en":[
"sell to middlemen",
"distributors",
"then farmers"
],
"kw_zh":[
"賣給中間商",
"經銷商",
"再到農民"
],
"def_en":"Selling to other businesses, not directly to end users. ReLEAF sells to agricultural distributors who then reach farmers, because they have the connections and trust a small team lacks.",
"def_zh":"賣給其他企業，而不是直接賣給最終使用者。ReLEAF 賣給農業經銷商，再由他們接觸農民，因為他們有小團隊缺少的人脈與信任。",
"cat":"business",
"src":"entrepreneurship#Distribution",
"dom":"entrepreneurship"
},
{
"term":"Bacillus subtilis 168",
"kw_en":[
"wild-type lab strain",
"makes proteases",
"early runs"
],
"kw_zh":[
"野生型實驗菌株",
"會分泌蛋白酶",
"早期運轉"
],
"def_en":"The standard wild-type laboratory strain, non-pathogenic and a natural secretor. ReLEAF's reactor runs up to September used it, but it made barely detectable ACC deaminase, probably because its proteases degrade the product.",
"def_zh":"標準的野生型實驗菌株，無致病性且天然會分泌蛋白。ReLEAF 9 月之前的反應器運轉都用它，但 ACC 去胺酶幾乎偵測不到，可能是它的蛋白酶分解了產物。",
"cat":"biology",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"Bacillus subtilis WB800",
"kw_en":[
"8 proteases removed",
"secretion host",
"BSL-1"
],
"kw_zh":[
"缺 8 種蛋白酶",
"分泌宿主",
"BSL-1"
],
"def_en":"A lab strain lacking eight secretory proteases so secreted protein is not degraded. Strain 168 grew well but made little detectable enzyme. Both are non-pathogenic and handled at BSL-1.",
"def_zh":"缺少八種分泌型蛋白酶的實驗菌株，分泌的蛋白不會被分解。168 長得好但幾乎測不到酵素。兩者都不致病，在 BSL-1 操作。",
"cat":"biology",
"src":"results",
"dom":"biomanufacturing"
},
{
"term":"Barrier to entry",
"kw_en":[
"what stops competitors",
"need several skills",
"regulation and capital"
],
"kw_zh":[
"什麼擋住競爭者",
"需多種能力",
"法規與資金"
],
"def_en":"Something that makes it hard for newcomers to enter a market. ReLEAF lists investment cost, branding trust, technology that must work as one system, and access to specialised resources.",
"def_zh":"讓新進者難以進入市場的因素。ReLEAF 列出投資成本、品牌信任、必須整合運作的技術，以及特殊資源的取得。",
"cat":"business",
"src":"entrepreneurship#Barriers to entry",
"dom":"entrepreneurship"
},
{
"term":"Bill of materials (BOM) and known costs",
"kw_en":[
"US$1022.67 known costs",
"photometer US$371.78, membrane US$245",
"controller and KOH pump not listed"
],
"kw_zh":[
"已知成本 US$1022.67",
"光度計 US$371.78、膜 US$245",
"控制器與 KOH 幫浦未列入"
],
"def_en":"The priced parts list. Bioreactor known costs are US$1022.67. It leaves out the UNO Q, the mainboard with its converter, the KOH dosing pump and the stir bar, and the pinch-valve nuts and screws are not priced.",
"def_zh":"有標價的零件清單。反應器已知成本為 US$1022.67；其中沒有列入 UNO Q、含轉換器的主機板、KOH 加料幫浦與攪拌子，夾管閥的螺帽螺絲也未計價。",
"cat":"business",
"src":"hardware-bioreactor#10.1 Materials List & Cost",
"dom":"hardware"
},
{
"term":"BioDrop",
"kw_en":[
"benchtop reader",
"reference instrument",
"NT$15 000"
],
"kw_zh":[
"桌上型儀器",
"對照儀器",
"約 NT$15 000"
],
"def_en":"The benchtop spectrophotometer the team compared against, about US$470. It needs a sample drawn out and loses accuracy above OD 1, so from 10 October its high-density samples were diluted and multiplied back.",
"def_zh":"團隊拿來對照的桌上型分光光度計，約 470 美元。它需要抽樣，OD 1 以上準確度下降，所以 10 月 10 日起高濃度樣品先稀釋再乘回。",
"cat":"hardware",
"src":"hardware-photometer",
"dom":"measurement"
},
{
"term":"BioDrop and the TiO₂ / SiO₂ standards",
"kw_en":[
"benchtop reference",
"TiO₂ August, SiO₂ October",
"particles, not cells"
],
"kw_zh":[
"桌上型參考儀器",
"8 月 TiO₂、10 月 SiO₂",
"是顆粒不是細胞"
],
"def_en":"BioDrop is the benchtop spectrophotometer used as the reference, diluted above OD 1. TiO₂ (cheap) and iGEM's SiO₂ are non-living particle standards. Neither tells you a cell count; that needs plate counts, not yet done.",
"def_zh":"BioDrop 是當作參考的桌上型分光光度計，OD 超過 1 要先稀釋。TiO₂（便宜）與 iGEM 標準的 SiO₂ 是非活體顆粒標準品。兩者都不能換算成細胞數，那需要菌落計數，目前還沒做。",
"cat":"hardware",
"src":"hardware-photometer#5.2; results#Calibration",
"dom":"hardware"
},
{
"term":"Bioprotectant",
"kw_en":[
"protein or peptide",
"applied to plants",
"made on farm"
],
"kw_zh":[
"蛋白或胜肽",
"施用於植物",
"在農場生產"
],
"def_en":"A biological product that shields plants from stress. ReLEAF's are proteins secreted by Bacillus subtilis WB800, filtered at 0.22 µm and sprayed or added to the medium.",
"def_zh":"保護植物免於逆境的生物製品。ReLEAF 的保護劑是枯草桿菌 WB800 分泌的蛋白質，經 0.22 µm 過濾後噴灑或加入培養液。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"Biosafety exam",
"kw_en":[
"full score",
"retake",
"signed consent"
],
"kw_zh":[
"滿分才算過",
"重考",
"簽同意書"
],
"def_en":"Every team member must pass a written biosafety exam at a perfect score, retaking until they do, and sign a consent form, before starting a two-month bench training.",
"def_zh":"每位成員都要通過書面生物安全考試且需滿分，沒滿分就重考，並簽署同意書，之後進行為期兩個月的基礎實驗訓練。",
"cat":"law",
"src":"safety-and-security#Training",
"dom":"ihp"
},
{
"term":"Biosafety vs biosecurity",
"kw_en":[
"protect from exposure",
"prevent misuse",
"release and access"
],
"kw_zh":[
"防止暴露",
"防止濫用",
"釋放與取用"
],
"def_en":"Biosafety protects people and environment from accidental exposure. Biosecurity prevents misuse, unauthorised access or release. The safety page covers both: training and containment, plus restricted access.",
"def_zh":"生物安全是保護人與環境免於意外暴露；生物保全是防止濫用、未授權取用或釋放。安全頁兩者都有：訓練與圍堵，加上限制取用。",
"cat":"law",
"src":"safety-and-security#Biosafety",
"dom":"ihp"
},
{
"term":"Biostimulant (plant biostimulant)",
"kw_en":[
"improves stress tolerance",
"not a pesticide",
"PFC 6(B)"
],
"kw_zh":[
"提升逆境耐受",
"不是農藥",
"PFC 6(B)"
],
"def_en":"A product that helps plants cope with stress without killing pests or giving nutrients. ReLEAF aims its cell-free output at this category, which is cheaper to register than a pesticide, so it limits its claims to abiotic stress.",
"def_zh":"幫助植物應付逆境、但不是殺蟲殺菌或提供養分的產品。ReLEAF 將無細胞產物定位在此類別，登記比農藥便宜，所以只主張非生物逆境。",
"cat":"law",
"src":"laws-and-regulations#Function → Claim → Classification",
"dom":"entrepreneurship"
},
{
"term":"Blank",
"kw_en":[
"zero reference",
"clean medium",
"refused if bad"
],
"kw_zh":[
"歸零參考",
"乾淨培養基",
"異常就拒絕"
],
"def_en":"A reading of the cuvette with medium and no cells, used as zero for every later point. ReLEAF refuses a blank if a sensor saturates, too few readings survive or a channel reads zero. Mismatched blanks caused early 20 percent errors.",
"def_zh":"只放培養基、沒有細胞時比色管的讀值，當作之後每個點的零點。感測器飽和、留下讀值太少或通道為零時，ReLEAF 會拒絕這個空白。空白不一致曾造成早期約 20% 的誤差。",
"cat":"hardware",
"src":"hardware-photometer",
"dom":"measurement"
},
{
"term":"BLASTAM rule",
"kw_en":[
"rice blast",
"wet 10 h at 22-25 C",
"RH 90% counts wet"
],
"kw_zh":[
"稻熱病",
"濕潤 10 小時、22-25 °C",
"相對濕度 90% 算濕"
],
"def_en":"A Japanese rule for leaf-blast infection from leaf wetness and temperature. The twin shows the warning to the grower but it does not switch the green light, and it is unchecked against Taiwanese records.",
"def_zh":"依葉面濕潤與溫度推估稻熱病感染的日本規則。twin 只把警告顯示給農民，不會控制綠光，也還沒有用台灣紀錄檢驗。",
"cat":"plant",
"src":"software",
"dom":"drylab"
},
{
"term":"Bolting and growth stage",
"kw_en":[
"rosette to flowering",
"senescence",
"variability"
],
"kw_zh":[
"蓮座到開花",
"老化",
"變異"
],
"def_en":"Bolting is the flower stem shooting up, which marks the move to flowering and ageing. One-month-old plants were near this stage, adding noise, so the soil window moved to 2-week-old plants.",
"def_zh":"抽苔是花莖竄出，代表進入開花與老化。一個月大的植株接近此階段而增加雜訊，因此土壤實驗改用兩週大的植株。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"BoPep4",
"kw_en":[
"23-residue peptide",
"broccoli elicitor",
"PEPR1 receptor"
],
"kw_zh":[
"23 個胺基酸胜肽",
"花椰菜激發子",
"PEPR1 受體"
],
"def_en":"A 23-residue plant elicitor peptide from broccoli that binds the receptor PEPR1 and switches on the plant's own defenses. ReLEAF built it with recodings and truncations. Applied alone without stress, it inhibited Arabidopsis growth.",
"def_zh":"來自花椰菜的 23 個胺基酸植物激發子胜肽，結合 PEPR1 受體啟動植物自己的防禦。ReLEAF 做了重新編碼與截短版。沒有逆境時單獨施用會抑制 Arabidopsis 生長。",
"cat":"biology",
"src":"parts",
"dom":"wetlab"
},
{
"term":"BoPEP4 and PEPR1",
"kw_en":[
"23-residue elicitor peptide",
"receptor kinase",
"C-terminal anchor"
],
"kw_zh":[
"23 個胺基酸的誘導肽",
"受體激酶",
"C 端錨點"
],
"def_en":"BoPEP4 is a Brassica oleracea plant elicitor peptide that switches on a plant's own stress response by binding the receptor PEPR1. Its free C-terminal carboxylate is the anchor.",
"def_zh":"BoPEP4 是甘藍的植物誘導肽，結合受體 PEPR1 後啟動植物自身的逆境反應。它自由的 C 端羧基是錨點。",
"cat":"biology",
"src":"protein-design",
"dom":"drylab"
},
{
"term":"Break-even",
"kw_en":[
"revenue equals cost",
"226 hectares",
"Year 4"
],
"kw_zh":[
"收入等於成本",
"226 公頃",
"第 4 年"
],
"def_en":"The point where total revenue covers total cost. ReLEAF needs about 226 paying hectares to cover US$627 000 of fixed costs; cumulative cash turns positive in Year 4 of the growth plan.",
"def_zh":"總收入剛好抵過總成本的點。ReLEAF 需約 226 付費公頃才能涵蓋 62.7 萬美元固定成本；成長計畫中累計現金於第 4 年轉正。",
"cat":"business",
"src":"entrepreneurship#Break-even analysis",
"dom":"entrepreneurship"
},
{
"term":"BSL-1",
"kw_en":[
"non-pathogenic chassis",
"Bacillus subtilis",
"lowest biosafety level"
],
"kw_zh":[
"非致病宿主",
"枯草桿菌",
"最低生物安全等級"
],
"def_en":"Biosafety Level 1. All ReLEAF wet-lab work uses non-pathogenic B. subtilis at BSL-1, and waste handling follows BSL-1 standards.",
"def_zh":"生物安全第一級。ReLEAF 所有濕實驗都以非致病的枯草桿菌在 BSL-1 進行，廢棄物處理也遵守 BSL-1 標準。",
"cat":"biology",
"src":"safety-and-security",
"dom":"ihp"
},
{
"term":"BSL-1 and GRAS",
"kw_en":[
"non-pathogenic chassis",
"FDA GRAS strains",
"autoclave 121 °C"
],
"kw_zh":[
"非致病宿主",
"FDA 認定 GRAS",
"121 °C 高壓滅菌"
],
"def_en":"Biosafety level 1 work with a non-pathogenic B. subtilis chassis; the FDA classes nontoxigenic strains as Generally Recognized as Safe. Waste is autoclaved at 121 °C for 15 to 30 minutes or bleached.",
"def_zh":"以非致病的 B. subtilis 為宿主進行第一級生物安全實驗；FDA 將無毒株列為公認安全（GRAS）。廢棄物以 121 °C 滅菌 15 至 30 分鐘或漂白水處理。",
"cat":"biology",
"src":"safety-and-security; hardware-bioreactor#2.2",
"dom":"hardware"
},
{
"term":"Burst sampling",
"kw_en":[
"16 lit readings",
"4 dark readings",
"drop first 2"
],
"kw_zh":[
"16 次亮讀值",
"4 次暗讀值",
"捨棄前 2 次"
],
"def_en":"One logged OD point is built from a short burst: four dark readings with the LED off, then sixteen lit readings with the first two dropped while the LED settles. Raw readings are stored, so any value can be recomputed.",
"def_zh":"每個記錄的 OD 點由一段短 burst 組成：LED 關閉時 4 次暗讀值，再 16 次亮讀值，前 2 次在 LED 穩定期間捨棄。原始讀值都保存，任何數值都能重算。",
"cat":"hardware",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Burst, MAD filter and acceptance gate",
"kw_en":[
"16 readings, drop 2",
"median ± 3 MAD",
"gates flagged 97% of bubbles"
],
"kw_zh":[
"16 次讀數、丟前 2 次",
"中位數 ± 3 MAD",
"閘門抓到 97% 氣泡"
],
"def_en":"Each reading is a burst of 16 lux samples; the first 2 are dropped and the rest cut at median ± 3 MAD. Two gates then reject a reading whose estimators differ by over 0.03 OD or that jumps over 0.05 OD or 5%.",
"def_zh":"每筆讀數是 16 次照度取樣，丟掉前 2 次，其餘依中位數 ± 3 MAD 剔除離群值。接著兩道閘門：兩種估計值相差超過 0.03 OD，或與上一筆相差超過 0.05 OD 或 5%，該筆讀數就被擋下。",
"cat":"hardware",
"src":"hardware-photometer#8.1 Data Acquisition and Filtering",
"dom":"hardware"
},
{
"term":"CAC (customer acquisition cost)",
"kw_en":[
"cost to win one customer",
"distributors lower it",
"referral discount"
],
"kw_zh":[
"獲得一位客戶的成本",
"經銷商降低成本",
"推薦折扣"
],
"def_en":"The total sales and marketing spend divided by customers won. The wiki gives no CAC figure; its plan lowers CAC by selling through distributors and cooperatives and by a referral discount after pilots succeed.",
"def_zh":"銷售與行銷總花費除以新增客戶數。維基沒有給出 CAC 數字；計畫透過經銷商、合作社，以及試點成功後的推薦折扣來降低 CAC。",
"cat":"business",
"src":"entrepreneurship#Distribution; entrepreneurship#Promotion and advertising",
"dom":"entrepreneurship"
},
{
"term":"Canopy correction",
"kw_en":[
"plate to field",
"x2.44",
"modeled not measured"
],
"kw_zh":[
"從培養皿到田間",
"乘 2.44",
"模型值不是量測"
],
"def_en":"The factor that scales a dose from a seedling plate to a rice canopy, from leaf area index 4.5 against 0.115. It spans 1.68 to 3.52 and every dollar figure inherits it.",
"def_zh":"把劑量從幼苗培養皿放大到稻株冠層的係數，由葉面積指數 4.5 對 0.115 推算，範圍 1.68 到 3.52，所有金額數字都承襲它。",
"cat":"model",
"src":"model",
"dom":"drylab"
},
{
"term":"CAPRI tiers",
"kw_en":[
"acceptable medium high",
"graded against 5GR8",
"26 / 3 / 0"
],
"kw_zh":[
"acceptable、medium、high",
"對照 5GR8 評分",
"26 / 3 / 0"
],
"def_en":"The community grading of a predicted complex against a known structure. Of 68 BoPEP4 clusters, 26 were acceptable, 3 medium and none high; a medium model can still miss the key contact.",
"def_zh":"社群用來把預測的複合體對照已知結構分級的標準。68 個 BoPEP4 cluster 中，26 個 acceptable、3 個 medium、沒有 high；medium 的模型仍可能漏掉關鍵接觸。",
"cat":"software",
"src":"protein-design-methodology",
"dom":"drylab"
},
{
"term":"Cavitation",
"kw_en":[
"water column snaps",
"air bubble",
"click sound"
],
"kw_zh":[
"水柱斷裂",
"氣泡",
"咔咔聲"
],
"def_en":"In drought, water in the plant's stem is under so much tension that the column breaks into an air bubble, making an ultrasonic click. This is the sound in the exhibit.",
"def_zh":"乾旱時莖內的水柱張力過大而斷裂形成氣泡，發出超音波點擊聲。這就是展示中的聲音。",
"cat":"plant",
"src":"data-physicalization-listening#The mechanism",
"dom":"ihp"
},
{
"term":"CcaR",
"kw_en":[
"response regulator",
"takes the phosphate",
"activates PcpcG2-veg"
],
"kw_zh":[
"反應調控蛋白",
"接收磷酸基",
"啟動 PcpcG2-veg"
],
"def_en":"The response regulator that receives the phosphoryl group from CcaS-m3 and then binds the PcpcG2-veg promoter to turn it on. ReLEAF expresses it from the constitutive promoter Pveg to keep its level steady.",
"def_zh":"接收 CcaS-m3 磷酸基的反應調控蛋白，之後結合 PcpcG2-veg 啟動子並將它打開。ReLEAF 用持續表現的 Pveg 讓它的量保持穩定。",
"cat":"biology",
"src":"parts",
"dom":"wetlab"
},
{
"term":"CcaS-m3",
"kw_en":[
"miniaturized photoreceptor",
"histidine kinase",
"needs PCB"
],
"kw_zh":[
"縮小版光受體",
"組胺酸激酶",
"需要 PCB"
],
"def_en":"An optimized, smaller variant of the CcaS green-light histidine kinase (BBa_K3317069). Once loaded with phycocyanobilin it autophosphorylates under green light. ReLEAF drives it from the constitutive PlepA or PliaG promoter.",
"def_zh":"CcaS 綠光組胺酸激酶的最佳化縮小版（BBa_K3317069）。結合 phycocyanobilin 後在綠光下自磷酸化。ReLEAF 用持續表現的 PlepA 或 PliaG 啟動子表現它。",
"cat":"biology",
"src":"parts",
"dom":"wetlab"
},
{
"term":"CcaS/CcaR",
"kw_en":[
"green on, red off",
"two-component light sensor",
"from literature"
],
"kw_zh":[
"綠光開、紅光關",
"雙組分光感測系統",
"來自文獻"
],
"def_en":"A light-sensing two-component system in engineered B. subtilis: green light activates CcaS, which switches on CcaR and the production genes; red switches it back. Characterized in B. subtilis by Castillo-Hair et al. 2019.",
"def_zh":"基因改造 B. subtilis 中的雙組分光感測系統：綠光啟動 CcaS，進而開啟 CcaR 與生產基因；紅光使其關閉。Castillo-Hair 等人 2019 年在 B. subtilis 中鑑定。",
"cat":"biology",
"src":"hardware-diopal#4.2",
"dom":"hardware"
},
{
"term":"CcaS/CcaR green-on, red-off switch",
"kw_en":[
"green activates CcaS",
"red switches it off",
"wavelengths differ by page"
],
"kw_zh":[
"綠光活化 CcaS",
"紅光關閉",
"各頁波長不一致"
],
"def_en":"A two-component light switch: green light activates CcaS, which activates CcaR and the production genes; red switches CcaS off. The wiki gives 520/660, 535/670 and 525/630 nm for green and red, and says the red LEDs emit at 640 nm.",
"def_zh":"兩成分光開關：綠光活化 CcaS，再活化 CcaR 與生產基因；紅光把 CcaS 關掉。wiki 對綠光與紅光分別寫 520/660、535/670、525/630 nm，結果頁還說紅光 LED 實際發光約 640 nm。",
"cat":"biology",
"src":"hardware-diopal#4.2; home; results#What it settles",
"dom":"hardware"
},
{
"term":"CcaSR",
"kw_en":[
"two-component system",
"green on, red off",
"phosphate relay"
],
"kw_zh":[
"雙組分系統",
"綠光開紅光關",
"磷酸基傳遞"
],
"def_en":"A green/red light-sensing two-component system: the kinase CcaS-m3 senses light and passes a phosphate to the regulator CcaR. ReLEAF uses it in WB800 so a green LED can start ACC deaminase production.",
"def_zh":"綠光／紅光感測的雙組分系統：激酶 CcaS-m3 感光後把磷酸基傳給調控蛋白 CcaR。ReLEAF 在 WB800 中用它，讓綠光 LED 啟動 ACC 去胺酶的生產。",
"cat":"biology",
"src":"parts",
"dom":"wetlab"
},
{
"term":"CcaSR optogenetic system",
"kw_en":[
"green light on",
"red light off",
"105 min half-time"
],
"kw_zh":[
"綠光開啟",
"紅光關閉",
"半衰時間 105 分鐘"
],
"def_en":"A light-switched gene circuit: green light makes the sensor CcaS activate CcaR, which turns on the protectant gene. ReLEAF uses it so production starts only when needed. Its long activation half-time dominates loop delay.",
"def_zh":"以光控制的基因線路：綠光讓感測器 CcaS 活化 CcaR，開啟保護蛋白基因。ReLEAF 用它讓生產只在需要時啟動。它很長的活化半衰時間主導迴路延遲。",
"cat":"biology",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"Cell-specific perfusion rate",
"kw_en":[
"medium per cell",
"0.0007 nL/day",
"30x under band"
],
"kw_zh":[
"每顆細胞的培養基量",
"0.0007 nL/天",
"低於常用範圍 30 倍"
],
"def_en":"Volume of medium delivered per cell per day. Modern perfusion runs 0.02 to 0.5 nL; ReLEAF's design point is 0.0007, so cells are fed very lean. Feeding at the band would need medium the unit cannot carry for a week.",
"def_zh":"每顆細胞每天獲得的培養基體積。現代灌流為 0.02 至 0.5 nL；ReLEAF 的設計點是 0.0007，細胞吃得很少。若要達到該範圍，培養基量無法支撐無人看管一週。",
"cat":"model",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"CH Bio peptide",
"kw_en":[
"commercial product",
"1/500 dilution",
"undisclosed contents"
],
"kw_zh":[
"商業產品",
"稀釋 1/500",
"成分未公開"
],
"def_en":"A commercial plant-protection peptide from CH Biotech (正瀚生技) sold against abiotic stress. ReLEAF used it as a reference protectant to learn timing, not as evidence for a specific compound.",
"def_zh":"正瀚生技販售、用來抵抗非生物逆境的商業胜肽。ReLEAF 把它當參考保護劑來摸索施用時機，不能當作特定成分有效的證據。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"Chlorophyll a+b equation",
"kw_en":[
"A663 and A645",
"80% acetone",
"per gram fresh weight"
],
"kw_zh":[
"A663 與 A645",
"80% 丙酮",
"每克鮮重"
],
"def_en":"Total chlorophyll = (8.02 x A663 + 20.20 x A645) x V / (1000 x fresh weight), after extracting seedlings in 80 percent acetone. ReLEAF reports it per gram and also as total in the extract.",
"def_zh":"總葉綠素 = (8.02 x A663 + 20.20 x A645) x V / (1000 x 鮮重)，幼苗用 80% 丙酮萃取。ReLEAF 同時報告每克數值和萃取液總量。",
"cat":"plant",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Chlorophyll a+b extraction",
"kw_en":[
"80% acetone",
"A645 and A663",
"Arnon equation"
],
"kw_zh":[
"80% 丙酮",
"A645 與 A663",
"Arnon 公式"
],
"def_en":"Extract pigment from whole seedlings in 80% acetone, read absorbance at 645 and 663 nm, and compute total chlorophyll. It is ReLEAF's main number for stress damage and rescue.",
"def_zh":"用 80% 丙酮從整株幼苗萃取色素，讀 645 與 663 nm 吸光值並算出總葉綠素。這是 ReLEAF 衡量逆境傷害與拯救的主要數字。",
"cat":"assay",
"src":"plant",
"dom":"plant"
},
{
"term":"Chlorosis",
"kw_en":[
"yellow or white leaves",
"chlorophyll loss",
"stress sign"
],
"kw_zh":[
"葉片黃白化",
"葉綠素流失",
"逆境徵兆"
],
"def_en":"Leaves turning yellow or white because chlorophyll breaks down. It was the main visible sign of salt and heat damage in ReLEAF plates, and the reason chlorophyll became a readout.",
"def_zh":"葉綠素分解使葉片變黃或變白。它是 ReLEAF 平板上鹽害與熱害最主要的可見徵兆，也是選用葉綠素當指標的原因。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"Clean-in-place (CIP)",
"kw_en":[
"no autoclave",
"35% H2O2 diluted first",
"starch-iodide check"
],
"kw_zh":[
"不用高壓滅菌",
"35% 過氧化氫先稀釋",
"澱粉碘化物試紙"
],
"def_en":"Sterilizing the assembled loop by circulating hydrogen peroxide, then rinsing until test paper shows none left. Used because probes and the loop cannot be autoclaved. Sterility itself is not assayed.",
"def_zh":"把過氧化氫打進組裝好的管路循環滅菌，再沖洗到試紙測不到為止。因為探頭與管路不能高壓滅菌。滅菌效果本身沒有被檢測。",
"cat":"hardware",
"src":"hardware-bioreactor#4.2",
"dom":"hardware"
},
{
"term":"Clean-in-place with hydrogen peroxide",
"kw_en":[
"900 mL water + 100 mL 35% H₂O₂",
"starch–iodide test paper",
"about five 1 L rinses"
],
"kw_zh":[
"900 mL 水＋100 mL 35% H₂O₂",
"澱粉碘化物試紙",
"約五次 1 L 沖洗"
],
"def_en":"Sterilizing the assembled loop: 900 mL water and 100 mL of 35% H₂O₂ circulate for 15 min, starch–iodide paper checks for peroxide, then about five 1 L rinses. In integrated run 3 undiluted peroxide reached a Luer valve, which broke at 38 h.",
"def_zh":"現場滅菌組裝好的循環：900 mL 水加 100 mL 35% H₂O₂ 循環 15 分鐘，用澱粉碘化物試紙檢查過氧化氫，再以約五次 1 L 水沖洗。整合第三次運轉中未稀釋的過氧化氫流到 Luer 閥，閥在 38 小時斷裂。",
"cat":"hardware",
"src":"hardware-bioreactor#4.2 DBTL 3",
"dom":"hardware"
},
{
"term":"Climate volatility index",
"kw_en":[
"diurnal and seasonal range",
"rainfall variability",
"weights unpublished"
],
"kw_zh":[
"日溫差與季節溫差",
"降雨變異",
"權重未公布"
],
"def_en":"A score of how unstable a place's weather is, built from temperature ranges and rainfall variability. It is overlaid on small-farm parcels in QGIS to find farmers with the least capacity to adapt.",
"def_zh":"衡量一地天氣有多不穩定的分數，由溫度範圍與降雨變異組成。我們在 QGIS 把它疊在小農地塊上，找出最缺乏調適能力的農民。",
"cat":"model",
"src":"geospatial-analysis",
"dom":"drylab"
},
{
"term":"CMC 7 (microbial positive list)",
"kw_en":[
"four microbe groups",
"B. subtilis not listed",
"culture knockout"
],
"kw_zh":[
"四類微生物",
"枯草桿菌不在內",
"菌株被淘汰"
],
"def_en":"EU component material category for microorganisms in biostimulants, limited to Azotobacter, mycorrhizal fungi, Rhizobium and Azospirillum. B. subtilis is absent, so the culture scores 1 of 5 in EU rankings.",
"def_zh":"歐盟生物刺激素中微生物的成分類別，只限 Azotobacter、菌根真菌、Rhizobium 和 Azospirillum。枯草桿菌不在內，所以歐盟排序中菌株得 1/5。",
"cat":"law",
"src":"laws-and-regulations",
"dom":"biomanufacturing"
},
{
"term":"Codon optimisation (start-region recoding)",
"kw_en":[
"first 15 codons",
"ViennaRNA",
"ribosome site opens"
],
"kw_zh":[
"前 15 個密碼子",
"ViennaRNA",
"核糖體結合位開放"
],
"def_en":"Synonymous recoding of the first codons after the start so the mRNA start region is less folded. About 50 000 variants per construct were folded; eight cassettes were ordered. Gains shrank once RiboJ + RBS0 replaced MF001.",
"def_zh":"同義重新編碼起始密碼子後的前幾個密碼子，讓 mRNA 起始區較不摺疊。每個構築模擬約 50 000 個變體；訂購了八個卡匣。把 MF001 換成 RiboJ + RBS0 後增益縮小。",
"cat":"model",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"Cold chain",
"kw_en":[
"refrigerated storage",
"shipping",
"shelf life"
],
"kw_zh":[
"冷藏儲存",
"運送",
"保存期限"
],
"def_en":"Refrigerated storage and transport that a shipped biological needs. A protectant made on the farm never enters it, but every farm then needs its own machine, which is the trade ReLEAF's case rests on.",
"def_zh":"運送的生物製劑所需的冷藏儲存與運輸。在農場現做的保護蛋白不必進入冷鏈，但每個農場就需要自己的機器，ReLEAF 的論點正建立在這個取捨上。",
"cat":"business",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"Colony PCR",
"kw_en":[
"screen colonies",
"band size only",
"sequencing decides"
],
"kw_zh":[
"篩選菌落",
"只看條帶大小",
"定序才定案"
],
"def_en":"PCR using a bacterial colony as the template, run on a gel to check insert size. It cannot catch point mutations, and at ReLEAF right-sized bands sometimes came from wrong clones, so sequencing stayed the deciding check.",
"def_zh":"以菌落直接當模板做 PCR，跑膠看插入片段大小。它抓不到點突變，ReLEAF 也出現過大小正確但選殖株錯誤的條帶，所以定序仍是最後判斷。",
"cat":"assay",
"src":"experiments",
"dom":"wetlab"
},
{
"term":"Competitive anti-His ELISA",
"kw_en":[
"amount of tagged protein",
"standard curve 0.093 to 3",
"not activity"
],
"kw_zh":[
"標籤蛋白的量",
"標準曲線 0.093 至 3",
"不是活性"
],
"def_en":"A Cayman kit assay that estimates His-tagged protein as µg/mL against a six-point standard curve. It counts the protein whether folded or active. ReLEAF's control values and out-of-range readings limit how far the numbers can be pushed.",
"def_zh":"Cayman 套組的檢測，以六點標準曲線估計 His 標籤蛋白的 µg/mL 濃度。不論蛋白是否摺疊或有活性都會計入。ReLEAF 的對照值與超出範圍的讀數限制了數字能解讀的程度。",
"cat":"assay",
"src":"experiments",
"dom":"wetlab"
},
{
"term":"Competitive His-tag ELISA",
"kw_en":[
"same tag, one kit",
"signal falls as protein rises",
"Cayman 10012445"
],
"kw_zh":[
"同一個標籤一個套組",
"蛋白質越多訊號越低",
"Cayman 10012445"
],
"def_en":"An immunoassay where His-tagged protein in the sample competes with a labelled tracer for antibody, so signal drops as protein rises. All three protectants carry a His tag, so one plate quantifies them in ug/mL.",
"def_zh":"樣品中的 His 標籤蛋白與標記追蹤劑競爭抗體，蛋白質越多訊號越低。三種保護蛋白都有 His 標籤，所以一種盤就能定量成 ug/mL。",
"cat":"assay",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Constitutive promoter (Pveg) versus light-switched",
"kw_en":[
"always on",
"all integrated runs",
"light switch ran on LPA only"
],
"kw_zh":[
"持續表現",
"所有整合運轉",
"光開關只在 LPA 測"
],
"def_en":"A constitutive promoter is always on. Every integrated bioreactor run used it, so light control was out of the test and the loop itself was examined. Light-switched expression with CcaS/CcaR was tested on the LPA only.",
"def_zh":"組成型啟動子是持續表現的。所有整合反應器運轉都用它，所以光控制不在測試之內，被檢驗的是循環系統本身。CcaS/CcaR 的光控表現只在 LPA 上測過。",
"cat":"biology",
"src":"hardware-bioreactor#4.2; software#Current limits",
"dom":"hardware"
},
{
"term":"ConSurf and DDMut",
"kw_en":[
"conservation grade",
"stability change",
"one predictor only"
],
"kw_zh":[
"保守度分級",
"穩定度變化",
"只有一個預測器"
],
"def_en":"ConSurf grades how conserved each position is across 150 homologs; DDMut predicts a stability change. Only DDMut ran, with a published error wider than most differences it was used to read.",
"def_zh":"ConSurf 依 150 個同源序列為每個位置的保守度分級；DDMut 預測穩定度變化。只跑了 DDMut，其已發表的誤差比它所要判讀的多數差異還寬。",
"cat":"software",
"src":"protein-design-sprints",
"dom":"drylab"
},
{
"term":"Contained use vs environmental release",
"kw_en":[
"sealed device",
"no live cells leave",
"regulatory route"
],
"kw_zh":[
"密閉裝置",
"活菌不外洩",
"法規路徑"
],
"def_en":"Contained use means engineered microbes stay inside sealed equipment; environmental release means they are put into the field. ReLEAF argues for contained use, but its Laws page says Taiwan's framework is unconfirmed.",
"def_zh":"密閉使用指基改微生物留在密閉設備內；環境釋放指放入田間。ReLEAF 主張屬密閉使用，但法規頁說台灣的適用框架尚未確認。",
"cat":"law",
"src":"laws-and-regulations#Exploring the Gray",
"dom":"entrepreneurship"
},
{
"term":"Containment (physical vs kill switch)",
"kw_en":[
"membrane is the barrier",
"advice from Dr. Brophy",
"size exclusion only"
],
"kw_zh":[
"膜是主要屏障",
"Brophy 博士的建議",
"只靠尺寸篩除"
],
"def_en":"Keeping engineered cells in by a physical barrier instead of a genetic kill switch. The 0.2 µm pore stops whole cells but lets vesicles and debris through, so the shell side is plated after module changes.",
"def_zh":"用物理屏障而不是基因自殺開關把工程細胞留住。0.2 µm 孔徑擋得住完整細胞，但讓囊泡與碎屑通過，所以換模組後要對殼側塗盤。",
"cat":"hardware",
"src":"hardware-bioreactor#6.3, #8",
"dom":"hardware"
},
{
"term":"Continuous engagement",
"kw_en":[
"five core experts",
"two or three visits",
"what we brought back"
],
"kw_zh":[
"五位核心專家",
"多次拜訪",
"帶回什麼成果"
],
"def_en":"Repeat consultations with five experts (Cheng, Chen, Chang, Sattely, Huang). Each return visit presented new prototypes or data and recorded advice and what changed.",
"def_zh":"與五位專家（鄭、陳、張、Sattely、黃）的重複諮詢。每次回訪都展示新原型或數據，並記錄建議與改變。",
"cat":"hp",
"src":"human-practices#Continuous engagement",
"dom":"ihp"
},
{
"term":"Contribution (per hectare)",
"kw_en":[
"price minus variable cost",
"US$2775",
"covers fixed cost"
],
"kw_zh":[
"售價減變動成本",
"2775 美元",
"用來攤固定成本"
],
"def_en":"What each sale leaves after its own direct cost, available to pay fixed costs and then profit. ReLEAF's Year 1 contribution is about US$2775 per hectare; renewals add about US$45.",
"def_zh":"每筆銷售扣除直接成本後剩下的金額，用來支付固定成本，之後才是利潤。ReLEAF 第一年每公頃貢獻約 2775 美元；續購約再多 45 美元。",
"cat":"business",
"src":"entrepreneurship#Variable cost and price per hectare",
"dom":"entrepreneurship"
},
{
"term":"Cooperative / shared ownership",
"kw_en":[
"group buys one machine",
"farmers' association",
"rental"
],
"kw_zh":[
"團體共買一台",
"農會",
"租賃"
],
"def_en":"Several farmers or an association owning and using one device together. The Math Model and Geospatial pages say individual ownership is out of reach for farms under 2 ha, so sharing is the structure the numbers allow.",
"def_zh":"多位農民或農會共同擁有並使用一台設備。數學模型與地理空間頁面指出 2 公頃以下的農場難以個別擁有，所以共享是數字允許的結構。",
"cat":"business",
"src":"geospatial-analysis#Business plan",
"dom":"entrepreneurship"
},
{
"term":"Cost-plus pricing (2 x cost)",
"kw_en":[
"price from cost",
"transparent",
"same for every farm"
],
"kw_zh":[
"由成本定價",
"透明",
"每個農場相同"
],
"def_en":"Setting price by adding a fixed markup to full cost. ReLEAF's markup is 2 times cost for every farm, so farmers can see what they pay for and small farms pay no extra.",
"def_zh":"在完整成本上加固定加成來定價。ReLEAF 的加成是成本的 2 倍、每個農場相同，農民看得懂價格，小農也不會多付。",
"cat":"business",
"src":"entrepreneurship#Choices we made as a social enterprise",
"dom":"entrepreneurship"
},
{
"term":"County trend baseline",
"kw_en":[
"yield below trend",
"no-weather model",
"held-out years"
],
"kw_zh":[
"低於趨勢的產量",
"不含天氣的模型",
"留出的年份"
],
"def_en":"The expected yield for a county from its own history without weather. A season below it counts as stressed, and the index is scored on years it has not seen against this baseline.",
"def_zh":"只用縣市自身歷史、不含天氣所預期的產量。低於它的季節視為受壓力，指數在沒看過的年份上對照這條基準評分。",
"cat":"model",
"src":"model",
"dom":"drylab"
},
{
"term":"Critical flux (J_crit)",
"kw_en":[
"46 LMH",
"below it no cake",
"J/Jcrit 0.04"
],
"kw_zh":[
"46 LMH",
"低於它不堵塞",
"J/Jcrit 0.04"
],
"def_en":"The permeate flux below which cells do not build up on the membrane. ReLEAF calculated 46 LMH from the shear-induced diffusion model and compared it with a 2 LMH design flux. It is a model result, not a measurement.",
"def_zh":"低於此透過通量時，細胞不會堆積在膜上。ReLEAF 用剪切誘導擴散模型算出 46 LMH，並與 2 LMH 的設計通量比較。這是模型結果，不是實測。",
"cat":"model",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"Cross-flow (tangential flow)",
"kw_en":[
"sweeps the wall",
"not through it",
"limits cake"
],
"kw_zh":[
"沿壁掃過",
"不直接穿過",
"減少濾餅"
],
"def_en":"Culture flows along the membrane surface rather than straight through it, which keeps cells from piling up on the wall. It is the basis of the formal scale-up method ReLEAF follows.",
"def_zh":"培養液沿著膜表面流動而不是直接穿過，避免細胞堆積在膜壁。這是 ReLEAF 採用的正式放大方法的基礎。",
"cat":"hardware",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"Cross-flow versus dead-end filtration",
"kw_en":[
"sweeps along the wall",
"only part crosses",
"pump sets the flow"
],
"kw_zh":[
"沿著管壁掃過",
"只有一部分穿膜",
"幫浦決定流量"
],
"def_en":"Dead-end filtration pushes all the liquid straight at the membrane, so cells pile up. Cross-flow sweeps the culture along the fiber walls while only part crosses, which keeps the surface cleaner. ReLEAF runs cross-flow.",
"def_zh":"死端過濾是把液體整個壓向膜面，細胞會堆積；錯流（cross-flow）則讓菌液沿著纖維管壁流過，只有一部分穿過膜，膜面比較不容易堵。ReLEAF 採用錯流。",
"cat":"hardware",
"src":"biomanufacturing#The bioreactor system",
"dom":"hardware"
},
{
"term":"Csn",
"kw_en":[
"chitosanase signal",
"BBa_26NXOP7S fusion",
"33.8% in E. coli"
],
"kw_zh":[
"幾丁聚醣酶訊號肽",
"BBa_26NXOP7S 融合",
"大腸桿菌 33.8%"
],
"def_en":"The chitosanase signal peptide, one of two secretion tags used. Published data give 33.8% secretion of its own cargo in E. coli. Used for Csn-AcdS-Histag, the construct run in the first reactor cycle.",
"def_zh":"幾丁聚醣酶的訊號肽，是使用的兩種分泌標籤之一。文獻顯示在大腸桿菌中對自身目標蛋白分泌約 33.8%。用於 Csn-AcdS-Histag，也就是第一次反應器運轉的構築。",
"cat":"biology",
"src":"results",
"dom":"wetlab"
},
{
"term":"Cumulative cash / funding need",
"kw_en":[
"running total of cash",
"lowest point",
"-US$196 000"
],
"kw_zh":[
"現金累計值",
"最低點",
"-19.6 萬美元"
],
"def_en":"The running total of cash in minus cash out. Its lowest point is how much outside money must be raised. ReLEAF's low point is -US$196 000 in Year 1.",
"def_zh":"現金流入減流出的累計值。最低點就是必須對外募集的資金。ReLEAF 的最低點是第 1 年的 -19.6 萬美元。",
"cat":"business",
"src":"entrepreneurship#Growth plan",
"dom":"entrepreneurship"
},
{
"term":"Data physicalization",
"kw_en":[
"map and sound",
"see, hear, touch",
"not a graph"
],
"kw_zh":[
"地圖與聲音",
"看聽摸",
"不是圖表"
],
"def_en":"Turning data into a physical object. ReLEAF built a styrofoam map (paper color = rice yield, LED flashing = heat stress) and a sound site with drought clicks, shown at the 5 September booth.",
"def_zh":"把資料變成實體物件。ReLEAF 做了保麗龍地圖（紙色=稻米產量、LED 閃爍=熱逆境）與乾旱點擊聲網站，在 9/5 攤位展示。",
"cat":"hp",
"src":"data-physicalization",
"dom":"ihp"
},
{
"term":"DBTL cycle",
"kw_en":[
"design build test learn",
"12 cloning cycles",
"failures recorded"
],
"kw_zh":[
"設計建造測試學習",
"12 輪選殖",
"失敗也留紀錄"
],
"def_en":"Design, build, test, learn: the loop ReLEAF used to report each result. The cloning write-up has twelve cycles across three pipelines and keeps failed ones, such as MoClo 2.0, AmilCP and GanA.",
"def_zh":"設計、建造、測試、學習：ReLEAF 用來記錄每項成果的循環。選殖寫作有三條管線共十二輪，並保留失敗的，例如 MoClo 2.0、AmilCP 與 GanA。",
"cat":"biology",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"DBTL in education",
"kw_en":[
"design lesson",
"trial in school",
"learn and refine"
],
"kw_zh":[
"設計課程",
"學校試教",
"學習並修正"
],
"def_en":"Design, Build/Prep, Test, Learn applied to teaching. The elementary lesson ran in four trials, each changed by the previous survey and teacher comments.",
"def_zh":"把設計、建置/準備、測試、學習用在教學上。國小課程跑了四次試行，每次都依前次問卷與老師意見調整。",
"cat":"hp",
"src":"education#Execution",
"dom":"ihp"
},
{
"term":"De-risk",
"kw_en":[
"reduce investor risk",
"prove step by step",
"field data"
],
"kw_zh":[
"降低投資人風險",
"逐步證明",
"田間資料"
],
"def_en":"To remove uncertainty so a funder is more willing to invest. For ReLEAF that means field trial data, containment proof and a clear regulatory pathway, which the wiki says funders need to see.",
"def_zh":"消除不確定性，讓出資者更願意投入。對 ReLEAF 來說就是田間試驗資料、密閉性證明與明確的法規路徑，維基說這些是出資者需要看到的。",
"cat":"business",
"src":"entrepreneurship#Investments",
"dom":"entrepreneurship"
},
{
"term":"Dead time and time constant (θ/τ)",
"kw_en":[
"delay over response",
"0.7 to 7.0",
"slow loop"
],
"kw_zh":[
"延遲比反應時間",
"0.7 至 7.0",
"反應慢的迴路"
],
"def_en":"Dead time θ is the total delay from sensing to effect, dominated by the 105 min CcaSR half-time. Time constant τ is the shell exchange time. The ratio says the loop is controllable but slow.",
"def_zh":"死區時間 θ 是從感測到產生效果的總延遲，由 105 分鐘的 CcaSR 半衰時間主導。時間常數 τ 是殼側交換時間。比值顯示迴路可控制但很慢。",
"cat":"model",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"Digital twin",
"kw_en":[
"returns result to vessel",
"not model or shadow",
"closed loop not yet"
],
"kw_zh":[
"結果送回反應器",
"不是 model 或 shadow",
"閉環尚未完成"
],
"def_en":"Software that mirrors the reactor and sends its decisions back to it. A digital model is updated by hand and a shadow only receives data. Ours runs on recorded data and a person decides.",
"def_zh":"鏡像反應器並把決策送回去的軟體。digital model 靠人工更新，shadow 只接收資料。我們的目前跑在記錄資料上，由人做決定。",
"cat":"software",
"src":"software",
"dom":"drylab"
},
{
"term":"Dilution factor (1/40)",
"kw_en":[
"culture dilution",
"not a true dose",
"volume confound"
],
"kw_zh":[
"菌液稀釋倍數",
"不是真正劑量",
"體積混淆"
],
"def_en":"How much the secreted-protein culture is diluted before dosing. In hydroponics culture volume was not equal across groups, so a dilution series cannot yet be read as a protein dose.",
"def_zh":"分泌蛋白的菌液給藥前的稀釋倍數。水耕實驗各組菌液體積不一致，所以稀釋系列還不能當成蛋白質劑量來讀。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"Dilution rate and washout",
"kw_en":[
"D versus µ",
"chemostat rule",
"membrane breaks it"
],
"kw_zh":[
"稀釋率對生長率",
"恆化器規則",
"膜讓規則失效"
],
"def_en":"In a chemostat, culture washes out if dilution rate exceeds growth rate. With a 0.2 µm membrane keeping the cells, ReLEAF's dilution can exceed growth without washout. The twin shows the actual dilution D in the app.",
"def_zh":"恆化器中若稀釋率大於生長率，菌會被沖掉。ReLEAF 的 0.2 µm 膜把細胞留住，稀釋率可以超過生長率也不會沖掉。App 會顯示實際稀釋率 D。",
"cat":"model",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"DiOPAL",
"kw_en":[
"team's internal name for the LPA",
"appears in file names",
"do not invent an expansion"
],
"kw_zh":[
"LPA 的團隊內部名稱",
"出現在檔案名稱",
"不要自己編全名"
],
"def_en":"The team's internal name for the LPA hardware; it shows in the page address and STL file names. The page itself is titled LPA: Light Plate Apparatus and the wiki does not spell out DiOPAL, so do not make up an expansion.",
"def_zh":"團隊對 LPA 硬體的內部稱呼，出現在網址與 STL 檔名中。頁面標題是 LPA: Light Plate Apparatus，wiki 沒有說明 DiOPAL 的全名，所以不要自己編造。",
"cat":"hardware",
"src":"hardware-diopal; drylab-notebook",
"dom":"hardware"
},
{
"term":"Dissolved oxygen (DO) probe",
"kw_en":[
"two probes tried",
"calibration did not hold",
"not on the reactor"
],
"kw_zh":[
"試過兩支探頭",
"校正維持不住",
"未裝在反應器上"
],
"def_en":"A sensor for oxygen in the liquid. Two were tried; calibration did not hold and neither can be autoclaved, so no DO record exists. Oxygen limitation is suspected but unmeasured.",
"def_zh":"量測液體中氧氣的感測器。試過兩支，校正無法維持且都不能高壓滅菌，所以沒有任何 DO 紀錄。懷疑氧氣不足但未量測。",
"cat":"hardware",
"src":"software#Current limits; development#Monitor",
"dom":"hardware"
},
{
"term":"Dissolved-oxygen and temperature probes",
"kw_en":[
"two DO probes, not fitted",
"calibration did not hold",
"temperature probe not responding"
],
"kw_zh":[
"兩支 DO 探頭未安裝",
"校正無法維持",
"溫度探頭沒回應"
],
"def_en":"Two dissolved-oxygen probes were tried, but calibration did not hold and neither can be autoclaved, so no DO is measured. A DS18B20 temperature probe is fitted but not responding; runs used a temperature typed in by the operator.",
"def_zh":"曾嘗試兩支溶氧探頭，但校正無法維持、也不能高壓滅菌，所以沒有任何溶氧數據。DS18B20 溫度探頭已安裝但沒有回應，運轉時使用操作員手動輸入的溫度。",
"cat":"hardware",
"src":"software#Current limits; development#Monitor",
"dom":"hardware"
},
{
"term":"DNPH assay",
"kw_en":[
"ACCD activity",
"alpha-ketobutyrate",
"colour at 540 nm"
],
"kw_zh":[
"ACCD 活性",
"α-ketobutyrate",
"540 nm 顯色"
],
"def_en":"A colourimetric activity test. ACC deaminase turns ACC into alpha-ketobutyrate; DNPH makes a hydrazone read at 540 nm. ReLEAF scaled it down twenty-fold to a 96-well plate to ask whether secreted enzyme still works.",
"def_zh":"比色式活性測試。ACC 脫胺酶把 ACC 變成 α-ketobutyrate，DNPH 形成在 540 nm 讀值的 hydrazone。ReLEAF 縮小二十倍到 96 孔盤，檢查分泌出來的酵素是否還有作用。",
"cat":"assay",
"src":"measurement",
"dom":"measurement"
},
{
"term":"DNPH assay vs ELISA (in the permeate)",
"kw_en":[
"amount vs activity",
"α-ketobutyrate",
"peaks six hours apart"
],
"kw_zh":[
"數量對活性",
"α-酮丁酸",
"高峰差六小時"
],
"def_en":"Anti-His ELISA counts ACC deaminase protein; DNPH measures its activity as α-ketobutyrate. In the 72 h run, ELISA peaked at 12 h and activity at 18 h, so protein appears before working enzyme.",
"def_zh":"anti-His ELISA 計算 ACC deaminase 蛋白量；DNPH 以 α-酮丁酸測活性。在 72 小時運轉中，ELISA 在 12 小時達高峰、活性在 18 小時，所以蛋白比有活性的酵素先出現。",
"cat":"assay",
"src":"results",
"dom":"biomanufacturing"
},
{
"term":"DURC",
"kw_en":[
"dual-use research of concern",
"evaluated",
"restricted access"
],
"kw_zh":[
"兩用性研究",
"已評估",
"限制取用"
],
"def_en":"Dual-use research of concern: legitimate work that could be misused. ReLEAF judged its system beneficial and non-pathogenic, restricts access to strains and protocols to authorised staff, and commits not to enable misuse.",
"def_zh":"有疑慮的兩用性研究：正當研究但可能被濫用。ReLEAF 評估系統有益且非致病，菌株與流程僅限授權人員取用，並承諾不協助濫用。",
"cat":"law",
"src":"safety-and-security#Dual use",
"dom":"ihp"
},
{
"term":"E. coli DH5α",
"kw_en":[
"cloning host",
"chemical transformation",
"assembly first goes here"
],
"kw_zh":[
"選殖宿主",
"化學轉形",
"組裝先在這裡"
],
"def_en":"The E. coli strain used to assemble and screen every construct by chemical transformation before the plasmid is moved into B. subtilis. The EEBD keeps cargo genes quiet in it.",
"def_zh":"用化學轉形組裝並篩選每個構築的大腸桿菌菌株，之後質體才轉入枯草桿菌。EEBD 讓目標基因在其中保持不表現。",
"cat":"biology",
"src":"experiments",
"dom":"wetlab"
},
{
"term":"EEBD (E. coli expression blocking device)",
"kw_en":[
"double terminator",
"dif sites",
"quiet in E. coli"
],
"kw_zh":[
"雙終止子",
"dif 位點",
"在大腸桿菌中不表現"
],
"def_en":"A double terminator flanked by dif sites, built into the EEBD-RBS0 part. It stops a cargo gene being expressed while cloned in E. coli and is removed in B. subtilis, so toxic proteins do not build up during cloning.",
"def_zh":"兩側有 dif 位點的雙終止子，包在 EEBD-RBS0 零件裡。目標基因在大腸桿菌中選殖時不表現，進入枯草桿菌後被移除，避免毒性蛋白在選殖時累積。",
"cat":"biology",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"Efficacy and payback",
"kw_en":[
"share of loss recovered",
"68 years at 1",
"14x gap"
],
"kw_zh":[
"回收的損失比例",
"效能 1 時 68 年",
"相差 14 倍"
],
"def_en":"Efficacy is the share of a weather loss the protectant recovers; payback is capital divided by efficacy times loss. No run of ours bounds efficacy, so payback is plotted across the whole axis.",
"def_zh":"效能是保護劑挽回的天氣損失比例；回收期是資本除以（效能乘以損失）。我們沒有任何實驗能界定效能，所以回收期畫成整條效能軸。",
"cat":"business",
"src":"model",
"dom":"drylab"
},
{
"term":"Electrocompetent cells",
"kw_en":[
"prepared cells",
"OD and washes differ",
"trehalose for WB800"
],
"kw_zh":[
"預備好的細胞",
"OD 與洗滌不同",
"WB800 用海藻糖"
],
"def_en":"Cells washed so they survive a pulse. 168: harvest at OD600 0.85 to 0.95, two washes. WB800: grow to OD600 2.2, four washes with 1.5 M trehalose buffer, because it tolerates electroporation worse.",
"def_zh":"經過洗滌、能承受電擊的細胞。168：在 OD600 0.85 至 0.95 收取，洗兩次。WB800：長到 OD600 2.2，用 1.5 M 海藻糖緩衝液洗四次，因為它對電穿孔的耐受較差。",
"cat":"assay",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"Electroporation",
"kw_en":[
"high-voltage pulse",
"voltage depends on construct",
"colonies counted"
],
"kw_zh":[
"高壓脈衝",
"電壓隨構築而異",
"計算菌落"
],
"def_en":"A brief high-voltage pulse that opens pores so plasmid DNA enters cells. ReLEAF used it for B. subtilis, with 3 hours recovery in SOC. Best voltage moved with strain, construct and cuvette gap, between 1.1 and 2.3 kV.",
"def_zh":"短暫的高壓脈衝打開細胞孔洞，讓質體 DNA 進入。ReLEAF 用它轉形枯草桿菌，之後在 SOC 恢復 3 小時。最佳電壓隨菌株、構築與電擊杯間距而變，在 1.1 至 2.3 kV 之間。",
"cat":"assay",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"Enzyme unit (U) and specific activity",
"kw_en":[
"1 umol per hour",
"activity per protein",
"U/mg"
],
"kw_zh":[
"每小時 1 微莫耳",
"每單位蛋白的活性",
"U/mg"
],
"def_en":"One unit releases 1 umol of alpha-ketobutyrate per hour under the assay conditions. Specific activity divides DNPH activity by ELISA concentration. In the reactor it reached 6.3 U/mg at 18 h, built on single samples.",
"def_zh":"一個單位在分析條件下每小時釋放 1 微莫耳 α-ketobutyrate。比活性是 DNPH 活性除以 ELISA 濃度。在反應器中 18 小時達 6.3 U/mg，但來自單一樣品。",
"cat":"assay",
"src":"results",
"dom":"measurement"
},
{
"term":"ERA5 reanalysis",
"kw_en":[
"gridded weather record",
"2001 to 2025",
"fits the stress terms"
],
"kw_zh":[
"網格化天氣紀錄",
"2001 到 2025",
"用來擬合壓力因子"
],
"def_en":"A global weather dataset built by re-running observations through a weather model. We use daily ERA5 from 2001 to 2025 to build the fifteen candidate stress terms and the night-warming maps.",
"def_zh":"把觀測資料重新跑過天氣模型所建立的全球氣象資料集。我們用 2001 到 2025 的逐日 ERA5 建立十五個候選壓力因子與夜間升溫地圖。",
"cat":"model",
"src":"geospatial-analysis",
"dom":"drylab"
},
{
"term":"Erythromycin selection",
"kw_en":[
"5 µg/mL",
"keeps the plasmid",
"second growth phase"
],
"kw_zh":[
"5 µg/mL",
"留住質體",
"第二段生長"
],
"def_en":"The antibiotic that keeps B. subtilis carrying the plasmid. In the first reactor run the culture grew again after about 47 h, which the team attributes to erythromycin breaking down and cells shedding the plasmid; daily top-ups removed it.",
"def_zh":"讓枯草桿菌保有質體的抗生素。第一次反應器運轉在約 47 小時後培養物再度生長，團隊認為是 erythromycin 分解、細胞丟掉質體；每天補充後這現象就消失。",
"cat":"biology",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"Escape frequency and kill switch",
"kw_en":[
"below 1 in 10⁸",
"auxotrophy",
"planned, not built"
],
"kw_zh":[
"低於 1/10⁸",
"營養缺陷",
"規劃中、未建造"
],
"def_en":"Fraction of cells that survive outside containment. The Laws page plans biocontainment (auxotrophy or kill switch) with a target below 1 in 10⁸ cells, a commonly cited benchmark. None of this is built yet.",
"def_zh":"逃出隔離後仍存活的細胞比例。Laws 頁規劃生物阻隔（營養缺陷或自殺開關），目標低於每 10⁸ 個細胞 1 個，是常被引用的標準。目前都還沒建造。",
"cat":"biology",
"src":"laws-and-regulations",
"dom":"biomanufacturing"
},
{
"term":"Ethylene",
"kw_en":[
"stress hormone",
"slows roots",
"made from ACC"
],
"kw_zh":[
"逆境荷爾蒙",
"抑制根伸長",
"由 ACC 合成"
],
"def_en":"A gas hormone plants make more of under stress. Too much stops root growth and speeds ageing. ReLEAF never measured ethylene; it relies on literature for the link to ACC deaminase.",
"def_zh":"植物在逆境下會增產的氣體荷爾蒙，過量會抑制根生長並加速老化。ReLEAF 沒有量測乙烯，兩者關聯依賴文獻。",
"cat":"biology",
"src":"plant",
"dom":"plant"
},
{
"term":"Expansion scoring (40-point)",
"kw_en":[
"8 criteria",
"tiers 24 and 18",
"knockout caps"
],
"kw_zh":[
"八項標準",
"24 與 18 分界",
"淘汰條件封頂"
],
"def_en":"Eight scores (bioreactor, culture, output laws, farmland, farm size, entry ease, technology acceptance, deployment fit) summed to 40. Tier 1 is 24 or more. A positive-list knockout, as in the EU, caps the culture score at 1.",
"def_zh":"八項分數（反應器、菌株、產品法規、農地面積、農場規模、進入容易度、技術接受度、部署適合度）加總 40 分。24 分以上為第 1 級。如歐盟的正面表列淘汰會把菌株分數封頂在 1。",
"cat":"business",
"src":"laws-and-regulations",
"dom":"biomanufacturing"
},
{
"term":"Fertilizer Management Act (肥料管理法)",
"kw_en":[
"registration certificate",
"AFA registers",
"own-use exemption"
],
"kw_zh":[
"需登記證",
"農糧署登記",
"自用例外"
],
"def_en":"Taiwan law needing a registration certificate before fertilizer is made, imported or sold. It lists 植物生長輔助劑類 as a category, exempts farmers' own-use organic fertilizer, and bars repackaging or diluting registered product for sale.",
"def_zh":"臺灣要求肥料製造、輸入或販售前須取得登記證的法律。列有「植物生長輔助劑類」，豁免農民自用有機肥，並禁止為銷售而分裝或稀釋已登記產品。",
"cat":"law",
"src":"laws-and-regulations",
"dom":"biomanufacturing"
},
{
"term":"ff19SB / OPC / HMR",
"kw_en":[
"protein force field",
"water model",
"4 fs time step"
],
"kw_zh":[
"蛋白質力場",
"水模型",
"4 fs 時間步長"
],
"def_en":"The settings of our MD: ff19SB describes the protein, OPC the water, and hydrogen mass repartitioning (HMR) allows a 4 femtosecond step so 30 ns per system fits on one A100.",
"def_zh":"我們 MD 的設定：ff19SB 描述蛋白質、OPC 描述水，氫質量重分配（HMR）讓時間步長可到 4 飛秒，所以 30 ns 可以在一張 A100 上完成。",
"cat":"biology",
"src":"md-simulations",
"dom":"drylab"
},
{
"term":"FIFRA plant regulator risk",
"kw_en":[
"US pesticide law",
"ACCD lowers ethylene",
"non-FIFRA ruling"
],
"kw_zh":[
"美國農藥法",
"ACCD 降低乙烯",
"非 FIFRA 認定"
],
"def_en":"The US pesticide law. Because ACC deaminase lowers ethylene, a regulator could read it as a plant growth regulator. The plan is to request an EPA non-FIFRA determination.",
"def_zh":"美國農藥法。因為 ACC deaminase 會降低乙烯，主管機關可能視它為植物生長調節劑。計畫是向 EPA 申請「非 FIFRA」認定。",
"cat":"law",
"src":"laws-and-regulations",
"dom":"biomanufacturing"
},
{
"term":"Five pipelines",
"kw_en":[
"plant and stress",
"protectant design",
"deployment"
],
"kw_zh":[
"植物與逆境",
"保護劑設計",
"落地部署"
],
"def_en":"How expert engagement is organised: plant and stress biology, protectant design, gene circuit and cloning, bioreactor and hardware, deployment. Each pipeline links advice to a named design decision.",
"def_zh":"專家訪談的組織方式：植物與逆境生物學、保護劑設計、基因電路與選殖、生物反應器與硬體、部署。每條線把建議連到具體設計決定。",
"cat":"hp",
"src":"human-practices#Expert engagement",
"dom":"ihp"
},
{
"term":"Fixed cost",
"kw_en":[
"does not change with sales",
"staff and rent",
"US$627 000"
],
"kw_zh":[
"不隨銷量改變",
"人事與租金",
"62.7 萬美元"
],
"def_en":"A cost you pay whether you sell one unit or many, such as salaries, rent and R&D. ReLEAF's fixed cost is about US$627 000 over Years 0 to 4, mostly a team growing from 3 to 5 people.",
"def_zh":"不論賣一個或很多都要付的成本，例如薪資、租金與研發。ReLEAF 第 0 至 4 年固定成本約 62.7 萬美元，主要是從 3 人增加到 5 人的團隊。",
"cat":"business",
"src":"entrepreneurship#Fixed cost",
"dom":"entrepreneurship"
},
{
"term":"Fleet utilization",
"kw_en":[
"49 reactor-days",
"4.3% of calendar",
"2.5 ha per fleet"
],
"kw_zh":[
"49 個反應器日",
"日曆的 4.3%",
"每組服務 2.5 公頃"
],
"def_en":"How much of the year the reactors actually run. Ten 20 L units need 49 reactor-days for a nine-pass season, so one fleet runs 4.3% of the calendar and serves 2.5 ha, which argues for shared ownership.",
"def_zh":"反應器一年實際運轉的比例。十個 20 L 單元跑一季九次施用需要 49 個反應器日，一組只用日曆的 4.3%、服務 2.5 公頃，所以主張共有。",
"cat":"business",
"src":"model",
"dom":"drylab"
},
{
"term":"Floating plate and freeboard",
"kw_en":[
"sealed air pontoons",
"13 seed holes",
"freeboard 4.8 mm predicted"
],
"kw_zh":[
"密封空氣浮筒",
"13 個種子孔",
"預測乾舷 4.8 mm"
],
"def_en":"A printed plate that floats on its own sealed air chambers so roots stay at one depth as the medium falls. Freeboard is how high the slab rides above the water; the predicted value was never measured.",
"def_zh":"靠自身密封空氣室漂浮的列印板，培養液下降時根部深度不變。乾舷是板面高出水面的距離；預測值從未實測。",
"cat":"hardware",
"src":"hardware-hydroponics#4.3",
"dom":"hardware"
},
{
"term":"Flux and LMH",
"kw_en":[
"liters per m² per hour",
"2 LMH designed",
"36–72 LMH in runs"
],
"kw_zh":[
"每平方公尺每小時幾公升",
"設計值 2 LMH",
"實際運轉 36–72 LMH"
],
"def_en":"Flux is permeate volume per membrane area per hour; LMH is liters per square meter per hour. The 200 cm² module at 2 LMH gives 0.67 mL/min. Runs drew 12 to 24 mL/min, which is 36 to 72 LMH.",
"def_zh":"通量（flux）是單位膜面積、單位時間內通過的濾液量；LMH 是每平方公尺每小時幾公升。200 cm² 的模組在 2 LMH 時約 0.67 mL/min；實際運轉抽取 12 至 24 mL/min，也就是 36 至 72 LMH。",
"cat":"hardware",
"src":"biomanufacturing#Scaling; software#Every run so far",
"dom":"hardware"
},
{
"term":"Fouling and critical flux",
"kw_en":[
"cake on the membrane",
"46 LMH threshold",
"J/Jcrit 0.04 at design"
],
"kw_zh":[
"膜面結垢",
"臨界通量 46 LMH",
"設計值 J/Jcrit 0.04"
],
"def_en":"Fouling is cells and debris caking on the membrane so resistance rises. Critical flux is the flux below which that is negligible; the model gives 46 LMH at 263 mL/min. At the 2 LMH design flux, J/Jcrit is 0.04.",
"def_zh":"積垢（fouling）是細胞與碎屑附著在膜面使阻力上升。臨界通量是低於它就幾乎不會積垢的通量；模型算出在 263 mL/min 時為 46 LMH。以設計通量 2 LMH 計，J/Jcrit 為 0.04。",
"cat":"model",
"src":"biomanufacturing#Critical flux and the fouling margin",
"dom":"hardware"
},
{
"term":"Freeboard and load line",
"kw_en":[
"slab height above water",
"1 mm per 3.5 g",
"4.8 mm predicted, unmeasured"
],
"kw_zh":[
"板面高出水面的距離",
"每 3.5 g 沉 1 mm",
"預測 4.8 mm、未實測"
],
"def_en":"Freeboard is the height of the slab above the water; the load line is the computed freeboard for each load. About 1 mm lower per 3.5 g; 4.8 mm predicted at 71.3 g. It is computed from the STL files, not measured on a print.",
"def_zh":"乾舷（freeboard）是板面高出水面的高度；載重線是每種載重下算出的乾舷。每增加約 3.5 g 下沉約 1 mm；71.3 g 時預測為 4.8 mm。數值由 STL 幾何算出，沒有在實際列印件上量過。",
"cat":"hardware",
"src":"hardware-hydroponics#4.3 Buoyancy Design",
"dom":"hardware"
},
{
"term":"Fresh weight",
"kw_en":[
"whole seedling",
"biomass",
"one balance reading"
],
"kw_zh":[
"整株幼苗",
"生物量",
"天平讀值"
],
"def_en":"The weight of harvested seedlings before drying. It tracks accumulated biomass. Trehalose and several treatments raised chlorophyll without raising fresh weight.",
"def_zh":"收成後未乾燥的幼苗重量，反映累積的生物量。trehalose 與數種處理能提高葉綠素，卻沒有提高鮮重。",
"cat":"assay",
"src":"plant",
"dom":"plant"
},
{
"term":"Fresh-weight normalisation",
"kw_en":[
"divide by biomass",
"can invert the trend",
"report total too"
],
"kw_zh":[
"除以生物量",
"可能讓趨勢顛倒",
"也要報總量"
],
"def_en":"Dividing a measurement by plant fresh weight. When stress destroys biomass the denominator collapses and chlorophyll looks higher. ReLEAF saw 0.366 versus 0.121 mg/g while total fell 91 percent, so both are shown.",
"def_zh":"把測量值除以植物鮮重。逆境破壞生物量時分母變很小，葉綠素看起來反而更高。ReLEAF 看到 0.366 對 0.121 mg/g，但總量掉了 91%，所以兩者都呈現。",
"cat":"plant",
"src":"measurement",
"dom":"measurement"
},
{
"term":"FTO (freedom to operate)",
"kw_en":[
"check existing patents",
"avoid infringing",
"key activity"
],
"kw_zh":[
"檢查現有專利",
"避免侵權",
"關鍵活動"
],
"def_en":"A check that selling your product will not infringe someone else's patents. ReLEAF lists verifying FTO alongside existing patents and planned patent applications as key activities.",
"def_zh":"確認販售產品不會侵犯他人專利的檢查。ReLEAF 把查核現有專利的 FTO 與規劃中的專利申請列為關鍵活動。",
"cat":"business",
"src":"entrepreneurship#Key activities",
"dom":"entrepreneurship"
},
{
"term":"GanA (β-galactosidase)",
"kw_en":[
"second reporter",
"seven-part reaction",
"never obtained"
],
"kw_zh":[
"第二個報告蛋白",
"七個零件反應",
"始終沒做出來"
],
"def_en":"A B. subtilis β-galactosidase, tried as a second secretion reporter read with X-gal or ONPG. A seven-part Golden Gate reaction never gave a sequence-verified clone, so reporters were dropped for direct Western and ELISA tests.",
"def_zh":"枯草桿菌的 β-半乳糖苷酶，當作第二個分泌報告蛋白，用 X-gal 或 ONPG 判讀。七個零件的 Golden Gate 反應始終沒有得到定序正確的選殖株，於是放棄報告蛋白，改直接用西方墨點與 ELISA。",
"cat":"assay",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"Genetically modified microorganism (GMM), contained use",
"kw_en":[
"engineered microbe",
"inside a closed system",
"separate rules"
],
"kw_zh":[
"工程微生物",
"在封閉系統內",
"另有規範"
],
"def_en":"A GMM handled inside containment so it does not reach the environment. ReLEAF regulates the engineered B. subtilis cartridge separately as contained use (EU Directive 2009/41/EC); the Taiwan framework is unconfirmed.",
"def_zh":"在隔離設施內操作、不會進入環境的基因改造微生物。ReLEAF 把工程枯草桿菌匣獨立視為封閉使用 (EU Directive 2009/41/EC)；臺灣適用架構尚未確認。",
"cat":"law",
"src":"laws-and-regulations",
"dom":"biomanufacturing"
},
{
"term":"GIS demand node",
"kw_en":[
"township aggregate",
"346 nodes",
"2.79 million parcels"
],
"kw_zh":[
"以鄉鎮合併",
"346 個節點",
"279 萬筆地塊"
],
"def_en":"A unit in the fertilizer routing model: parcels summed by township. 2,792,536 parcels became 346 nodes over about 743,500 ha, each reached by road distance from companies in the same county.",
"def_zh":"肥料配送模型中的單位：把地塊依鄉鎮加總。2,792,536 筆地塊合成 346 個節點、約 743,500 公頃，各節點由同縣市公司以道路距離配送。",
"cat":"model",
"src":"geospatial-analysis",
"dom":"drylab"
},
{
"term":"Golden Gate assembly",
"kw_en":[
"type IIS enzymes",
"one-pot reaction",
"ordered joins"
],
"kw_zh":[
"IIS 型限制酶",
"一鍋式反應",
"無縫接合"
],
"def_en":"A cloning method where a type IIS enzyme (BsaI, BbsI/BpiI) cuts outside its site, leaving designed overhangs so many parts join in order in one tube with ligase. ReLEAF used it at every level.",
"def_zh":"一種選殖方法：IIS 型限制酶（BsaI、BbsI/BpiI）在辨識位點外切割，留下設計好的突出端，讓許多零件在同一管內與連接酶依序接合。ReLEAF 每一層級都用它。",
"cat":"biology",
"src":"experiments",
"dom":"wetlab"
},
{
"term":"GRAFT pipeline",
"kw_en":[
"Generate Restraints Assembly",
"Flex then Triage",
"one pipeline, three protectants"
],
"kw_zh":[
"產生、限制、組裝",
"Flex 再分級",
"一條流程三種保護劑"
],
"def_en":"Our protein design workflow: Generate candidates, Restraints, Assembly (docking), Flex (MD) and Triage. The same steps run on BoPEP4, LEA14 and ACC deaminase, and the evidence decides how far each goes.",
"def_zh":"我們的蛋白質設計流程：Generate 產生候選、Restraints、Assembly（對接）、Flex（MD）、Triage 分級。BoPEP4、LEA14、ACC deaminase 走同一流程，證據多寡決定能走多遠。",
"cat":"biology",
"src":"protein-design-methodology",
"dom":"drylab"
},
{
"term":"GRAS",
"kw_en":[
"generally recognised safe",
"FDA label",
"nontoxigenic strains"
],
"kw_zh":[
"公認安全",
"FDA 分類",
"不產毒菌株"
],
"def_en":"FDA status for substances regarded as safe under good manufacturing practice. The wiki cites it for non-pathogenic, nontoxigenic B. subtilis strains as one reason for choosing it. It describes the host, not the engineered product.",
"def_zh":"FDA 對在良好製造規範下被視為安全物質的分類。wiki 引用它說明非致病、不產毒的枯草桿菌是選擇理由之一。它講的是宿主，不是工程後的產品。",
"cat":"law",
"src":"hardware-bioreactor",
"dom":"biomanufacturing"
},
{
"term":"Green Media",
"kw_en":[
"forum co-host",
"published article",
"farmers' market event"
],
"kw_zh":[
"論壇共同主辦",
"發表報導",
"農民市集活動"
],
"def_en":"Media partner that co-hosted the 5 September forum, introduced the team to unexpected farmer concerns in early July, and published an article on the event.",
"def_zh":"共同主辦 9/5 論壇的媒體夥伴，7 月初讓團隊知道意料之外的農民關切，並發表活動報導。",
"cat":"hp",
"src":"human-practices#Public engagement",
"dom":"ihp"
},
{
"term":"HADDOCK and fnat",
"kw_en":[
"restraint-driven docking",
"fraction native contacts",
"score is not accuracy"
],
"kw_zh":[
"受限條件的對接",
"原生接觸比例",
"分數不等於準確度"
],
"def_en":"HADDOCK docks molecules using restraints and gives each model a score. fnat is the fraction of crystal contacts a model recovers. In our runs the score did not track fnat, so we graded against 5GR8.",
"def_zh":"HADDOCK 依限制條件對接並給每個模型打分；fnat 是模型重現的晶體接觸比例。在我們的實驗中分數和 fnat 沒有對應，所以改用 5GR8 評分。",
"cat":"software",
"src":"protein-design-sprints",
"dom":"drylab"
},
{
"term":"Hagen–Poiseuille",
"kw_en":[
"laminar pressure drop",
"theory for open tubes",
"0.90 to 1.26 of theory"
],
"kw_zh":[
"層流壓降公式",
"開放管的理論值",
"實測為理論 0.90 至 1.26 倍"
],
"def_en":"The textbook formula for pressure loss in smooth laminar flow through tubes. We used it to check the module: net drop was 0.90 to 0.96 times theory from 113 to 263 mL/min, which suggests all 11 fibers are open.",
"def_zh":"層流通過圓管壓降的教科書公式。我們用來檢查模組：113 至 263 mL/min 時，扣除管路後的壓降為理論的 0.90 至 0.96 倍，顯示 11 條纖維都是通的。",
"cat":"model",
"src":"hardware-bioreactor#4.1",
"dom":"hardware"
},
{
"term":"Hall-effect flow meter",
"kw_en":[
"pulses per liter",
"2580 pulses/L",
"matches manual R2 0.995"
],
"kw_zh":[
"每公升脈衝數",
"2580 脈衝/L",
"與手動 R2 0.995"
],
"def_en":"A ZJ-TM02 meter where a magnet in a spinning rotor triggers a fixed sensor once per turn; pulse frequency tracks flow. Validated against flow caught by hand at R2 0.995, after hand readings proved operator-dependent.",
"def_zh":"ZJ-TM02 流量計：旋轉轉子裡的磁鐵每轉一圈觸發固定感測器一次，脈衝頻率對應流量。與手動收集的水量比對 R2 為 0.995；手動讀值被證明會因人而異。",
"cat":"hardware",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Hall-effect flowmeter (ZJ-TM02)",
"kw_en":[
"magnet on a rotor",
"2580 pulses per liter",
"R² 0.995 versus by hand"
],
"kw_zh":[
"轉子上的磁鐵",
"每公升 2580 脈衝",
"與手動比對 R² 0.995"
],
"def_en":"A magnet on a spinning rotor gives one pulse per pass, and pulse frequency gives flow. It costs US$2 and agreed with catching the outflow by hand at R² 0.995. It replaced hand timing after the 14 August readings varied by operator.",
"def_zh":"轉子上的磁鐵每轉過感測器一次就產生一個脈衝，脈衝頻率即流量。單價 US$2，與手動接水量測比對的 R² 為 0.995。8 月 14 日的手動讀數因人而異，之後就改用它。",
"cat":"hardware",
"src":"measurement#How the flow was measured; hardware-bioreactor#10.1",
"dom":"hardware"
},
{
"term":"Halotropism",
"kw_en":[
"roots bend away",
"auxin",
"salt avoidance"
],
"kw_zh":[
"根彎離鹽",
"生長素",
"避鹽反應"
],
"def_en":"Roots growing away from salt, driven by auxin redistribution in the root tip. ReLEAF saw it in set 4 and used it as evidence that the salt treatment really reached the seedlings.",
"def_zh":"根往遠離鹽的方向生長，由根尖生長素重新分配驅動。ReLEAF 在 set 4 看到它，並用來證明鹽處理確實作用在幼苗上。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"Hay infusion medium",
"kw_en":[
"hay, okara, sugarcane",
"on-farm waste",
"vs LB"
],
"kw_zh":[
"乾草豆渣甘蔗渣",
"農場廢棄物",
"對照 LB"
],
"def_en":"A culture medium made from farm residues instead of lab-grade LB, supporting SDG 12. The 1:1:2 hay:okara:sugarcane mix reached OD600 0.720 against LB 0.573, with two cultures each.",
"def_zh":"用農業殘餘物取代實驗室級 LB 的培養基，支持 SDG 12。乾草：豆渣：甘蔗渣 1:1:2 的 OD600 為 0.720，LB 為 0.573，每種兩管。",
"cat":"biology",
"src":"contribution#Agricultural waste as culture medium",
"dom":"ihp"
},
{
"term":"Hill function (CcaSR curve)",
"kw_en":[
"light to output",
"K1/2 4.66, n 1.88",
"published, untested by us"
],
"kw_zh":[
"光強對輸出",
"K1/2 4.66、n 1.88",
"文獻值，我們沒測過"
],
"def_en":"An S-shaped curve linking green light intensity to gene output, from Castillo-Hair et al. 2019. The model uses it to set the lamp, but every induction we ran was at one intensity.",
"def_zh":"連結綠光強度與基因輸出的 S 形曲線，出自 Castillo-Hair 等人 2019。模型用它設定燈光，但我們所有誘導實驗都只用一種強度。",
"cat":"model",
"src":"model",
"dom":"drylab"
},
{
"term":"His tag (6×His)",
"kw_en":[
"six histidines",
"lets us detect it",
"anti-His"
],
"kw_zh":[
"六個組胺酸",
"用來偵測",
"抗 His 抗體"
],
"def_en":"Six histidines added to a protein so anti-His antibodies and the Cayman ELISA kit can detect it, and Ni-NTA can purify it. ReLEAF's ELISA counts the tag whether or not the protein is folded or active.",
"def_zh":"加在蛋白質上的六個組胺酸，讓抗 His 抗體與 Cayman ELISA 套組能偵測它，Ni-NTA 也能純化。ReLEAF 的 ELISA 不管蛋白是否摺疊或有活性，只要有標籤都會計入。",
"cat":"biology",
"src":"experiments",
"dom":"wetlab"
},
{
"term":"ho1-pcyA",
"kw_en":[
"heme oxygenase fusion",
"heme to biliverdin to PCB",
"module 1"
],
"kw_zh":[
"血基質氧化酶融合",
"血基質到 PCB",
"模組 1"
],
"def_en":"A fusion of heme oxygenase 1 and phycocyanobilin:ferredoxin oxidoreductase. Ho1 turns heme into biliverdin IXα and PcyA turns that into phycocyanobilin, the chromophore CcaS-m3 needs. Cells do not make it naturally.",
"def_zh":"血基質氧化酶 1 與 phycocyanobilin:ferredoxin oxidoreductase 的融合酵素。Ho1 把血基質變成 biliverdin IXα，PcyA 再變成 CcaS-m3 需要的發色團 phycocyanobilin。",
"cat":"biology",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"Hollow-fiber membrane",
"kw_en":[
"straw-like fibers",
"0.2 µm pores",
"cells in, enzyme out"
],
"kw_zh":[
"吸管狀纖維",
"0.2 µm 孔徑",
"細胞留、酵素過"
],
"def_en":"A cartridge of thin porous tubes. Culture flows inside the tubes (lumen); anything smaller than 0.2 µm crosses the wall to the shell side. ReLEAF's module is mPES, 200 cm², 11 fibers.",
"def_zh":"由許多多孔細管組成的濾匣。菌液流過管內（管腔），小於 0.2 µm 的東西穿過管壁到殼側。ReLEAF 的模組是 mPES、200 cm²、11 條纖維。",
"cat":"hardware",
"src":"hardware-bioreactor",
"dom":"hardware"
},
{
"term":"Hollow-fiber membrane module",
"kw_en":[
"0.2 µm fibers",
"lumen and shell",
"retains cells"
],
"kw_zh":[
"0.2 µm 纖維",
"內腔與殼側",
"擋住細胞"
],
"def_en":"A cartridge of thin porous tubes. Culture runs inside the tubes (lumen); small soluble protein crosses the wall to the shell side. In ReLEAF it is both the separation step and the containment barrier.",
"def_zh":"由許多細多孔管組成的濾芯。培養液在管內（內腔）流動，小分子可溶蛋白穿過管壁到殼側。在 ReLEAF 中它同時是分離步驟與阻隔屏障。",
"cat":"hardware",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"Hollow-fiber module (HFM)",
"kw_en":[
"11 fibers, 1 mm bore",
"0.2 µm mPES pores",
"200 cm² area"
],
"kw_zh":[
"11 根纖維、內徑 1 mm",
"0.2 µm mPES 孔徑",
"面積 200 cm²"
],
"def_en":"A cartridge of 11 thin tubes whose walls have 0.2 µm pores (Cobetter MiniLab, mPES, 200 cm²). Culture flows inside the tubes, secreted protein crosses the wall, cells cannot. It makes the harvest and holds the bacteria in.",
"def_zh":"一個含 11 根細管的濾芯（Cobetter MiniLab，mPES，面積 200 cm²），管壁孔徑 0.2 µm。菌液在管內流動，分泌的蛋白質可穿過管壁，細菌不能。它同時負責收成產物並把細菌留在系統內。",
"cat":"hardware",
"src":"hardware-bioreactor#7.1.1 Specifications",
"dom":"hardware"
},
{
"term":"Hydroponic floating plate",
"kw_en":[
"floats on its own sealed air",
"13 seedlings, 16 pieces",
"about US$1.80 of PLA"
],
"kw_zh":[
"靠自身密封空氣浮起",
"13 株幼苗、16 個零件",
"PLA 約 US$1.80"
],
"def_en":"A printed Arabidopsis plate with two sealed air pontoons (42.27 cm³), so roots stay at one depth as the medium falls. Thirteen seedlings, sixteen printed pieces, no glue, in a 1000 µL pipette-tip box under a black box.",
"def_zh":"印出來的阿拉伯芥浮板，兩個密封氣室浮筒（共 42.27 cm³），培養液下降時根仍維持在同一深度。可放 13 株幼苗，由 16 個列印零件組成、不用膠，放在 1000 µL 吸管尖盒中並套上黑盒。",
"cat":"hardware",
"src":"hardware-hydroponics#4.1 Specifications",
"dom":"hardware"
},
{
"term":"Hydroponics",
"kw_en":[
"roots in solution",
"tube rack",
"floating plate"
],
"kw_zh":[
"根在培養液中",
"試管架",
"漂浮板"
],
"def_en":"Growing plants with roots in nutrient solution. It sits between agar and soil and mimics delivery through circulating water. ReLEAF moved from tip boxes to tube racks because plants grew better there.",
"def_zh":"根泡在營養液中的栽培法，介於瓊脂與土壤之間，能模擬透過循環水給藥。ReLEAF 後來從 tip box 改用試管架，因為植物長得比較好。",
"cat":"plant",
"src":"hardware-hydroponics",
"dom":"plant"
},
{
"term":"ImageJ with in-frame ruler",
"kw_en":[
"scale from an object",
"150 mm ruler",
"trace primary root"
],
"kw_zh":[
"用畫面內物體校正",
"150 mm 尺",
"描繪主根"
],
"def_en":"Root length is traced from photographs in ImageJ, with a 150 mm ruler in every frame to set the scale. This avoids assuming camera distance and exposes tilted plates. Plate racks were printed to stop tilt.",
"def_zh":"根長用 ImageJ 在照片上描繪，每張照片都放一把 150 mm 的尺來設定比例。這樣不用假設相機距離，也能發現培養皿傾斜。團隊還印了架子防止傾斜。",
"cat":"plant",
"src":"measurement",
"dom":"measurement"
},
{
"term":"In-line flow-cell photometer",
"kw_en":[
"reads the loop",
"no sample drawn",
"2 mm cuvette"
],
"kw_zh":[
"直接讀迴路",
"不用抽樣",
"2 mm 比色管"
],
"def_en":"An OD600 sensor with a flow cuvette plumbed into the bioreactor loop. ReLEAF built it so long runs need no sampling, which cuts contamination risk and works outside a lab. Nobody sells this instrument, so the team built two versions.",
"def_zh":"把流動比色管接進生物反應器迴路的 OD600 感測器。ReLEAF 自己做，讓長時間培養不用抽樣，減少污染風險，也能在實驗室外使用。市面上沒有這種儀器，所以團隊做了兩個版本。",
"cat":"hardware",
"src":"hardware-photometer",
"dom":"measurement"
},
{
"term":"In-line photometer",
"kw_en":[
"reads inside the loop",
"no sample drawn",
"Pro and Slim"
],
"kw_zh":[
"在迴路內讀取",
"不抽樣",
"Pro 與 Slim"
],
"def_en":"Our own OD600 meter plumbed into the culture loop. Nobody sells one for this job. It avoids hand sampling, which disturbs the culture and risks contamination. Pro costs US$371.78, Slim US$235.29.",
"def_zh":"我們自製、接在培養迴路內的 OD600 計。市面上沒有這種產品。它避免手動抽樣造成的擾動與污染風險。Pro 成本 US$371.78，Slim US$235.29。",
"cat":"hardware",
"src":"hardware-photometer",
"dom":"hardware"
},
{
"term":"In-line photometer (Pro and Slim)",
"kw_en":[
"OD600 in the flowing loop",
"Pro US$371.78",
"Slim US$235.29, ×5.57"
],
"kw_zh":[
"循環中直接量 OD600",
"Pro 成本 US$371.78",
"Slim US$235.29、×5.57"
],
"def_en":"An OD600 sensor inside the loop, so no sample is drawn. The Pro has a 600 nm LED, lens and 90:10 beam splitter. The Slim uses two optical fibers, reads about one fifth as high, and needs a ×5.57 factor.",
"def_zh":"裝在循環管路內的 OD600 感測器，不需抽樣。Pro 使用 600 nm LED、透鏡與 90:10 分光鏡；Slim 改用兩條光纖，讀數約為 Pro 的五分之一，需乘上 ×5.57。",
"cat":"hardware",
"src":"hardware-photometer#Summary; #7.1 Which One to Use",
"dom":"hardware"
},
{
"term":"Integrated Human Practices",
"kw_en":[
"stakeholder feedback",
"design changes",
"loop back"
],
"kw_zh":[
"利害關係人回饋",
"設計改變",
"回頭驗證"
],
"def_en":"Human Practices that changes the project itself. ReLEAF returned to the same experts with prototypes and data, and each round changed bioreactor, plant, circuit or business choices.",
"def_zh":"會真正改變專案本身的人類實踐。ReLEAF 帶著原型與數據回頭找同一批專家，每一輪都改變了反應器、植物、電路或商業選擇。",
"cat":"hp",
"src":"human-practices",
"dom":"ihp"
},
{
"term":"IRR (internal rate of return)",
"kw_en":[
"yearly return rate",
"24% before tax",
"compare to alternatives"
],
"kw_zh":[
"年報酬率",
"稅前 24%",
"與其他投資比較"
],
"def_en":"The yearly rate of return that makes all the money in and out add up to zero. ReLEAF's growth plan gives 24% before tax; the conservative case gives about -7%.",
"def_zh":"讓所有現金流入流出加總為零的年報酬率。ReLEAF 成長計畫稅前為 24%；保守情境約為 -7%。",
"cat":"business",
"src":"entrepreneurship#Return for investors",
"dom":"entrepreneurship"
},
{
"term":"ISLSDR (2nd International Symposium on Living Systems Design Research)",
"kw_en":[
"NCHU",
"11 Sep",
"invited by Prof. Huang"
],
"kw_zh":[
"中興大學",
"9/11",
"黃教授邀請"
],
"def_en":"Symposium at National Chung Hsing University where professors told the team to understand its experimental data and the ACCD mechanism more deeply and to make the story more problem-driven.",
"def_zh":"中興大學舉辦的研討會，教授們建議團隊更深入理解實驗數據與 ACCD 機制，並讓故事更以問題為導向。",
"cat":"hp",
"src":"human-practices#Deployment",
"dom":"ihp"
},
{
"term":"Junction PCR and double digest",
"kw_en":[
"order of modules",
"375, 632, 661 bp",
"10 293 bp"
],
"kw_zh":[
"模組順序",
"375、632、661 bp",
"10 293 bp"
],
"def_en":"How the Level 2 plasmid was checked without end-to-end sequencing: primers across each of three module junctions show the order, and EcoRI and EcoRI plus BtsI digests show the length. Neither reads the sequence between.",
"def_zh":"在沒有全長定序下檢查 Level 2 質體的方法：跨三個模組接點的引子顯示順序，EcoRI 與 EcoRI 加 BtsI 的酵素切割顯示長度。兩者都沒讀接點之間的序列。",
"cat":"assay",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"Kalman filter",
"kw_en":[
"state estimate",
"weighs reading vs noise",
"2 to 12 h ahead"
],
"kw_zh":[
"狀態估計",
"權衡讀值與雜訊",
"提前 2 到 12 小時"
],
"def_en":"A forecasting method that keeps a running estimate of the culture's state and weighs each new reading against its noise. It is the batch forecast model in our twin and beat persistence on both scored runs.",
"def_zh":"持續維護培養狀態估計，並把每筆新讀值和雜訊一起權衡的預測方法。它是我們 twin 的批次預測模型，在兩次計分的實驗中都勝過 persistence。",
"cat":"model",
"src":"software",
"dom":"drylab"
},
{
"term":"KAP survey",
"kw_en":[
"Knowledge",
"Attitude",
"Practice"
],
"kw_zh":[
"知識",
"態度",
"行動"
],
"def_en":"Knowledge-Attitude-Practice questionnaire. ReLEAF used it after the forum, at the market booth and in every school lesson to measure what people learned, felt and said they would do.",
"def_zh":"知識、態度、行動問卷。ReLEAF 在論壇後、市集攤位及每堂學校課程使用，測量人們學到什麼、感受如何、打算做什麼。",
"cat":"hp",
"src":"human-practices#Survey analysis",
"dom":"ihp"
},
{
"term":"Khait et al. 2023",
"kw_en":[
"Tel Aviv University",
"Cell paper",
"tomato and tobacco"
],
"kw_zh":[
"特拉維夫大學",
"Cell 論文",
"番茄與菸草"
],
"def_en":"The Cell paper that recorded ultrasonic clicks from stressed tomato and tobacco. ReLEAF used its open recordings, pitch-shifted down, and did not record plants itself.",
"def_zh":"錄下受逆境番茄與菸草超音波點擊聲的 Cell 論文。ReLEAF 使用其公開錄音並降調，沒有自己錄音。",
"cat":"plant",
"src":"data-physicalization#References",
"dom":"ihp"
},
{
"term":"Kill switch",
"kw_en":[
"genetic off-switch",
"can mutate or fail",
"not the main layer"
],
"kw_zh":[
"基因自殺開關",
"可能突變或失效",
"不是主要防線"
],
"def_en":"A built-in genetic mechanism that kills engineered cells outside the lab. Dr. Brophy warned it can fail, so ReLEAF makes physical containment primary and only evaluates an extra switch.",
"def_zh":"讓工程細胞在實驗室外死亡的內建基因機制。Brophy 博士提醒它可能失效，所以 ReLEAF 以物理圍堵為主，額外開關僅評估中。",
"cat":"biology",
"src":"human-practices#Bioreactor and hardware",
"dom":"ihp"
},
{
"term":"kLa (oxygen transfer)",
"kw_en":[
"oxygen into liquid",
"12.5 h⁻¹ needed",
"closed loop"
],
"kw_zh":[
"氧氣進入液體的速度",
"需 12.5 h⁻¹",
"封閉迴路"
],
"def_en":"How fast oxygen is driven from gas into liquid. ReLEAF needs 12.5 per hour at OD 1.454, easy in a sparged fermenter but hard in a closed loop with no gas port, so oxygen caps cell density.",
"def_zh":"氧氣從氣體進入液體的速率。ReLEAF 在 OD 1.454 需要每小時 12.5，噴氣式發酵槽輕鬆做到，但沒有氣體埠的封閉迴路很難，所以氧氣限制細胞密度。",
"cat":"hardware",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"kU (activity unit)",
"kw_en":[
"activity not mass",
"37.6 kU per ha",
"from DNPH reading"
],
"kw_zh":[
"活性而非質量",
"每公頃 37.6 kU",
"來自 DNPH 讀值"
],
"def_en":"A unit of enzyme activity. The dose of 37.6 kU per hectare comes from the secreted activity of one DNPH reading, which is below the quantitation limit.",
"def_zh":"酵素活性單位。每公頃 37.6 kU 的劑量來自一次 DNPH 讀值的分泌活性，而該讀值低於定量極限。",
"cat":"model",
"src":"model",
"dom":"drylab"
},
{
"term":"LEA14",
"kw_en":[
"late embryogenesis abundant",
"protects proteins",
"not an enzyme"
],
"kw_zh":[
"晚期胚胎發生豐富蛋白",
"保護蛋白質",
"不是酵素"
],
"def_en":"A 151-residue Arabidopsis protein (At1g01470) that helps cells survive drying and salt. Not an enzyme, so one copy protects one thing. ReLEAF built it as a secreted protectant; the wiki cites overexpression raising salt tolerance.",
"def_zh":"Arabidopsis 的 151 個胺基酸蛋白（At1g01470），幫助細胞度過乾旱與鹽害。不是酵素，一個分子只保護一個對象。ReLEAF 把它做成分泌型保護蛋白；wiki 引用過量表現可提高耐鹽性。",
"cat":"biology",
"src":"parts",
"dom":"wetlab"
},
{
"term":"Leaf sensor (SN-3001-YM-N01)",
"kw_en":[
"leaf temperature",
"leaf wetness",
"bench only"
],
"kw_zh":[
"葉溫",
"葉面濕潤度",
"只在桌上測過"
],
"def_en":"A Modbus RS485 sensor read by an ESP32 that reports a leaf's temperature and surface wetness, paired with an SHT31 air sensor. Tested only in air on 10 October; wetness never wetted, nothing on a plant.",
"def_zh":"透過 ESP32 以 Modbus RS485 讀取、回報葉溫與葉面濕潤度的感測器，搭配 SHT31 空氣感測器。僅在 10 月 10 日於空氣中測試；濕潤度從未弄濕，也沒有放在植物上。",
"cat":"hardware",
"src":"software#The leaf and air sensors on the bench",
"dom":"hardware"
},
{
"term":"Leaf sensor channels",
"kw_en":[
"leaf temperature and wetness",
"SHT31 air reference",
"bench only, never wetted"
],
"kw_zh":[
"葉溫與葉面濕度",
"SHT31 空氣參考",
"只在桌上測、未沾濕"
],
"def_en":"The SN-3001-YM-N01 reads leaf temperature and leaf wetness over RS485; an SHT31 gives air temperature and humidity. Leaf minus air flags water stress, and wetness drives the rice blast rule. Wetness read 0.0% because it was never wetted.",
"def_zh":"SN-3001-YM-N01 以 RS485 讀葉溫與葉面濕度，SHT31 提供空氣溫濕度。葉溫減氣溫用來判斷水分逆境，葉面濕度用於稻熱病規則。濕度讀到 0.0%，因為從未被弄濕。",
"cat":"hardware",
"src":"software#The leaf and air sensors on the bench",
"dom":"hardware"
},
{
"term":"Leaf-disk flotation",
"kw_en":[
"spinach disks",
"oxygen bubbles",
"warm water slows"
],
"kw_zh":[
"菠菜葉片圓盤",
"氧氣泡",
"溫水變慢"
],
"def_en":"A classroom photosynthesis test: spinach leaf disks float as they make oxygen. Warmer water slowed or stopped flotation, showing heat can harm enzymes. Used in elementary, junior high and high school lessons.",
"def_zh":"課堂光合作用實驗：菠菜葉圓盤產生氧氣而浮起。水溫較高時浮起變慢或停止，顯示熱可能傷害酵素。國小、國中、高中課程都用。",
"cat":"plant",
"src":"education#Experiment",
"dom":"ihp"
},
{
"term":"LED matching",
"kw_en":[
"40 LEDs measured one by one",
"spread 26% green, 22% red",
"groups within 0.4–1.8%"
],
"kw_zh":[
"40 顆逐一量測",
"綠 26%、紅 22% 差異",
"組內差 0.4–1.8%"
],
"def_en":"Each LED was measured at 5 V and sorted into groups of four. Before sorting green varied by 26% and red by 22%; inside a group they agree within 0.4 to 1.8%. Groups differ little from each other, so PWM sets the tiers.",
"def_zh":"每顆 LED 在 5 V 下逐一量測，再四顆一組。分組前綠光差異 26%、紅光 22%；同組內相差 0.4 至 1.8%。各組之間差異很小，所以強度層級改由 PWM 設定。",
"cat":"hardware",
"src":"hardware-diopal#2.2 DBTL Cycle 2",
"dom":"hardware"
},
{
"term":"Level 0 / 1 / 2",
"kw_en":[
"part, unit, device",
"BbsI then BsaI",
"four units in one plasmid"
],
"kw_zh":[
"零件、單元、裝置",
"先 BbsI 後 BsaI",
"四個單元一個質體"
],
"def_en":"Assembly tiers: Level 0 holds a single part, Level 1 joins promoter, RBS, coding sequence and terminator into one transcription unit, Level 2 joins four units into one plasmid. ReLEAF's Level 2 device is about 10 kb.",
"def_zh":"組裝層級：Level 0 放單一零件，Level 1 把啟動子、RBS、編碼序列與終止子接成一個轉錄單元，Level 2 把四個單元接成一個質體。ReLEAF 的 Level 2 裝置約 10 kb。",
"cat":"biology",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"Light Plate Apparatus (LPA)",
"kw_en":[
"24 tubes",
"6 light conditions",
"US$65.52"
],
"kw_zh":[
"24 支試管",
"6 種光條件",
"US$65.52"
],
"def_en":"A 4 x 6 LED array that lights 24 cultures under green or red at three intensities, four replicates each. It characterizes the CcaSR switch at fixed doses; it does not control the reactor.",
"def_zh":"4 x 6 的 LED 陣列，用綠光或紅光三種強度照射 24 管培養，每條件四重複。用來在固定劑量下鑑定 CcaSR 開關，並不控制反應器。",
"cat":"hardware",
"src":"hardware-diopal",
"dom":"hardware"
},
{
"term":"Linear range / dynamic range",
"kw_en":[
"where response is straight",
"Pro to about OD 2.5",
"tested on silica only"
],
"kw_zh":[
"反應呈直線的範圍",
"Pro 約到 OD 2.5",
"只在二氧化矽測過"
],
"def_en":"The span where reading is proportional to concentration. The Pro reads directly up to about OD 2.5 on silica; above it the slope drops from 0.995 to 0.594. The limit is not yet tested on culture.",
"def_zh":"讀值與濃度成正比的範圍。Pro 在二氧化矽上約到 OD 2.5 都可直接讀；超過後斜率從 0.995 掉到 0.594。這個上限還沒用菌液驗證。",
"cat":"hardware",
"src":"hardware-photometer",
"dom":"measurement"
},
{
"term":"LMH",
"kw_en":[
"liters per m² per hour",
"flux unit",
"200 cm² module"
],
"kw_zh":[
"每平方公尺每小時公升數",
"通量單位",
"200 cm² 模組"
],
"def_en":"Unit of permeate flux: liters of liquid per square meter of membrane per hour. At 200 cm², 2 LMH is 0.67 mL/min; run 7 used 51 LMH.",
"def_zh":"透過通量單位：每平方公尺膜每小時通過的公升數。膜面積 200 cm² 時 2 LMH 等於 0.67 mL/min；run 7 用了 51 LMH。",
"cat":"hardware",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"Log reduction and detection limit",
"kw_en":[
"powers of ten removed",
"smallest count the plate sees",
"neither recorded"
],
"kw_zh":[
"去除幾個數量級",
"平板能看到的最小量",
"兩者都沒記錄"
],
"def_en":"A log reduction counts how many powers of ten of bacteria a barrier removes; a detection limit is the smallest count the plating can see. Both containment platings gave zero shell colonies, but neither number was recorded, so no log reduction is claimed.",
"def_zh":"對數減量是屏障去除了幾個數量級的細菌；偵測極限是平板法能看見的最小菌量。兩次殼側平板都沒長出菌落，但這兩個數字都沒有記錄，所以不宣稱任何對數減量。",
"cat":"hardware",
"src":"results#Containment and release",
"dom":"hardware"
},
{
"term":"Logistic growth prior",
"kw_en":[
"r, K and X0",
"from light plate",
"rate transferred, ceiling not"
],
"kw_zh":[
"r、K、X0",
"來自光照盤",
"速率可轉移，上限不行"
],
"def_en":"A growth curve with a ceiling K, fitted to the light plate (r 0.299 h-1, K 1.005) and used as a starting guess for the reactor. The rate carried over to the bioreactor; the ceiling did not.",
"def_zh":"有上限 K 的生長曲線，用光照盤資料擬合（r 0.299 h-1，K 1.005），當作反應器的起始預測。速率可以轉移到生物反應器，上限則不行。",
"cat":"model",
"src":"software",
"dom":"drylab"
},
{
"term":"LOI (letter of intent)",
"kw_en":[
"non-binding promise",
"evidence of demand",
"none on wiki"
],
"kw_zh":[
"無約束力的意向",
"需求證據",
"維基沒有"
],
"def_en":"A short signed note saying a buyer or partner intends to deal, without being bound. Investors use it as evidence of demand. The ReLEAF wiki records no LOI, only advice and verbal support.",
"def_zh":"買家或夥伴簽署、表示有合作意願但無法律約束的簡短文件。投資人常用它當作需求證據。ReLEAF 維基沒有記錄任何 LOI，只有建議與口頭支持。",
"cat":"business",
"src":"entrepreneurship#Sales objectives",
"dom":"entrepreneurship"
},
{
"term":"LPA (Light Plate Apparatus)",
"kw_en":[
"24 tubes, 4 × 6",
"6 conditions, 4 replicates",
"US$65.52"
],
"kw_zh":[
"24 管、4 × 6",
"6 種條件、4 重複",
"US$65.52"
],
"def_en":"A holder of 24 culture tubes on an 18 mm pitch, each above its own LED. Green and red at low, mid and high give six conditions with four replicates. One Arduino and three MOSFETs drive it. The design follows Gerhardt et al. 2016.",
"def_zh":"一個容納 24 支培養管（間距 18 mm）的架子，每支管下方有自己的 LED。綠光與紅光各分低、中、高，共六種條件、每種四重複。由一個 Arduino 與三個 MOSFET 驅動。設計參考 Gerhardt 等人 2016。",
"cat":"hardware",
"src":"hardware-diopal#4.1 Specifications; #References",
"dom":"hardware"
},
{
"term":"Luer valve",
"kw_en":[
"three-way stopcock",
"sampling port",
"servo-automated"
],
"kw_zh":[
"三通閥",
"取樣口",
"伺服自動化"
],
"def_en":"A small three-way valve with Luer connectors, used for sampling and dosing. Some became servo-driven. A hydrogen peroxide step and 1 M KOH each broke a Luer valve during runs.",
"def_zh":"附 Luer 接頭的小型三通閥，用於取樣與加液，部分改為伺服驅動。過氧化氫清洗與 1 M KOH 都曾在運轉中弄壞 Luer 閥。",
"cat":"hardware",
"src":"hardware-bioreactor#4.2",
"dom":"hardware"
},
{
"term":"Lumen / shell side",
"kw_en":[
"inside the tube",
"outside the tube",
"cells vs permeate"
],
"kw_zh":[
"管內側",
"管外側",
"細胞對透過液"
],
"def_en":"Lumen is the inside of each fiber, where the engineered culture circulates. Shell is the space outside the fibers, where the cell-free product collects. Results compare the two sides to show cells stay in and protein passes.",
"def_zh":"內腔是每條纖維的內部，工程菌液在此循環；殼側是纖維外的空間，無細胞的產物在此收集。Results 比較兩側，證明細胞留在內、蛋白能通過。",
"cat":"hardware",
"src":"results",
"dom":"biomanufacturing"
},
{
"term":"Lumen and shell",
"kw_en":[
"cells inside",
"protein outside",
"0.2 µm membrane"
],
"kw_zh":[
"細胞在內側",
"蛋白在外側",
"0.2 µm 膜"
],
"def_en":"The two sides of the hollow-fiber module. Culture circulates in the lumen; secreted protein crosses the 0.2 µm membrane into the cell-free shell, where it is sampled. Only whole cells are known to be held back.",
"def_zh":"中空纖維模組的兩側。培養液在管腔循環；分泌的蛋白穿過 0.2 µm 的膜進入無細胞的殼側被取樣。目前只知道整顆細胞會被擋住。",
"cat":"hardware",
"src":"results",
"dom":"wetlab"
},
{
"term":"Lumen and shell side",
"kw_en":[
"inside the fibers",
"outside the fibers",
"one wall between"
],
"kw_zh":[
"纖維內側",
"纖維外側",
"中間隔一層膜"
],
"def_en":"Lumen is the inside of the fibers, where the culture circulates. Shell is the space around them, where the product collects. The membrane wall is the only place the two circuits touch.",
"def_zh":"管腔是纖維內側，菌液在此循環；殼側是纖維外圍，產物在此收集。膜壁是兩個迴路唯一接觸的地方。",
"cat":"hardware",
"src":"hardware-bioreactor",
"dom":"hardware"
},
{
"term":"Lumen side and shell side",
"kw_en":[
"lumen holds the cells",
"shell holds the product",
"wall is the only crossing"
],
"kw_zh":[
"管腔側裝細胞",
"殼側裝產物",
"只有管壁相通"
],
"def_en":"Lumen is the inside of the fibers, where the engineered B. subtilis circulates. Shell is the space around the fibers, where cell-free protectant collects and leaves. Only the fiber wall connects the two.",
"def_zh":"管腔側（lumen）是纖維內部，基因改造枯草桿菌在這裡循環；殼側（shell）是纖維外圍的空間，收集不含細胞的保護物並送出。兩側只靠纖維管壁相通。",
"cat":"hardware",
"src":"hardware-bioreactor#3.4 The System, Stage by Stage",
"dom":"hardware"
},
{
"term":"Lux sensor (GY-302 BH1750)",
"kw_en":[
"US$2 each",
"two on one I²C bus",
"reports lux, not photons"
],
"kw_zh":[
"每個 US$2",
"兩個共用 I²C",
"量的是 lux 不是光子"
],
"def_en":"A BH1750 chip lux meter. Two share one I²C bus in the photometer, one for the sample and one for the reference. Lux is illuminance weighted for the human eye, so ReLEAF uses the ratio of the two, not the absolute number.",
"def_zh":"BH1750 晶片照度計。光度計內兩個共用一條 I²C 匯流排，一個量樣品、一個量參考。lux 是依人眼敏感度加權的照度，所以 ReLEAF 用兩者的比值，而不是絕對數值。",
"cat":"hardware",
"src":"hardware-photometer#7.2.1 Specifications",
"dom":"hardware"
},
{
"term":"Lux versus photon flux",
"kw_en":[
"lux is eye-weighted",
"photon flux is what cells use",
"LPA reports lux only"
],
"kw_zh":[
"lux 依人眼加權",
"光子通量才是細胞用的",
"LPA 只報 lux"
],
"def_en":"Lux weights light by human vision, so green counts far more than red. Photon flux counts the photons the bacteria can use. The LPA reports lux only, so green and red doses are not comparable; photon flux is stated as future work.",
"def_zh":"lux 依人眼視覺加權，綠光的權重遠高於紅光；光子通量則是計算細菌可用的光子數。LPA 只報告 lux，因此綠光與紅光的劑量不能直接比較；光子通量被列為未來工作。",
"cat":"hardware",
"src":"hardware-diopal#Summary; development",
"dom":"hardware"
},
{
"term":"Lux vs photon flux",
"kw_en":[
"lux weights human eye",
"photon flux is what cells get",
"not yet converted"
],
"kw_zh":[
"勒克斯依人眼加權",
"細胞受到的是光子通量",
"尚未換算"
],
"def_en":"Lux counts light the way a human eye sees it, peaking near 555 nm. Cells respond to photons, so the dose should be in µmol per m² per s. ReLEAF reports only lux, so doses cannot be compared with papers.",
"def_zh":"勒克斯依人眼感光計量，峰值約 555 nm。細胞反應的是光子，劑量應以 µmol/m²/s 表示。ReLEAF 只有勒克斯，劑量無法與文獻比較。",
"cat":"hardware",
"src":"hardware-diopal; engineering#Light plate apparatus",
"dom":"hardware"
},
{
"term":"M1 stress-index model",
"kw_en":[
"stress index",
"right amount, right time",
"avoid over-protection"
],
"kw_zh":[
"壓力指數",
"適量適時",
"避免過度保護"
],
"def_en":"ReLEAF's mathematical model M1: turns field conditions into stress indices so protectant is released at the right moment and amount. The wiki ties its design to natural farmers' over-intervention warnings.",
"def_zh":"ReLEAF 的數學模型 M1：把田間條件轉成壓力指數，在適當時機與劑量釋放保護劑。頁面把其設計連到自然農法對過度介入的警告。",
"cat":"model",
"src":"human-practices#Tamsui Happy Farm",
"dom":"ihp"
},
{
"term":"MAD (median absolute deviation)",
"kw_en":[
"median of deviations",
"not fooled by outliers",
"median +/- 3 MAD"
],
"kw_zh":[
"偏差的中位數",
"不怕離群值",
"中位數 +/- 3 MAD"
],
"def_en":"The median of how far readings sit from their median. ReLEAF keeps burst readings within three MAD of the median, since bubbles drag a mean but barely move a median. Clean flow made all estimators agree.",
"def_zh":"讀值離中位數距離的中位數。ReLEAF 只保留中位數 +/- 3 MAD 內的 burst 讀值，因為氣泡會拉動平均值，卻幾乎不動中位數。流動乾淨時所有估計法結果一致。",
"cat":"software",
"src":"measurement",
"dom":"measurement"
},
{
"term":"MAD filter",
"kw_en":[
"median plus or minus 3 MAD",
"16 readings keep 14",
"resists bubbles"
],
"kw_zh":[
"中位數加減 3 MAD",
"讀 16 個留 14 個",
"抗氣泡干擾"
],
"def_en":"Median absolute deviation. Each reading is a burst of 16; readings beyond the median plus or minus 3 MAD are rejected, so one or two bubble spikes cannot drag the result as an average would.",
"def_zh":"中位數絕對偏差。每次讀 16 個，超出中位數加減 3 MAD 的讀值被剔除，一兩個氣泡尖峰不會像平均值那樣拉歪結果。",
"cat":"software",
"src":"hardware-photometer#8.1",
"dom":"hardware"
},
{
"term":"Matched LEDs and PWM tiers",
"kw_en":[
"measure each LED",
"groups of four",
"intensity set in code"
],
"kw_zh":[
"逐顆量測",
"四顆一組",
"強度用程式設定"
],
"def_en":"Cheap LEDs sold as identical varied by about 26 percent, so each was measured and sorted into groups of four within 1 to 2 percent. The low-to-high gap after sorting was small, so intensity tiers come from PWM duty cycle.",
"def_zh":"標示相同的便宜 LED 實際相差約 26%，所以逐顆量測並分成四顆一組，組內差 1 至 2%。分組後低到高的差距很小，所以強度分級靠 PWM 工作週期。",
"cat":"hardware",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Mean ± SEM and asterisks",
"kw_en":[
"error bars",
"P-value stars",
"test unnamed"
],
"kw_zh":[
"誤差線",
"P 值星號",
"未寫檢定"
],
"def_en":"SEM is the standard error of the mean, drawn as error bars. Asterisks mark P below 0.05 to 0.0001. The plant page does not say which statistical test produced them.",
"def_zh":"SEM 是平均值的標準誤，畫成誤差線。星號代表 P 小於 0.05 至 0.0001。植物頁沒有寫是哪種統計檢定產生的。",
"cat":"assay",
"src":"plant",
"dom":"plant"
},
{
"term":"Membrane fouling",
"kw_en":[
"cake on the wall",
"pressure rises",
"permeability falls"
],
"kw_zh":[
"細胞堆積在膜壁",
"壓力上升",
"滲透率下降"
],
"def_en":"Cells and debris building up on the membrane so it passes less liquid. ReLEAF watches it as extra pressure above a clean-water baseline: 2.0 to 3.8 kPa in run 6, 1.9 to 4.4 kPa in run 7.",
"def_zh":"細胞與碎屑堆積在膜上，使通過量下降。ReLEAF 用超出清水基線的額外壓力來看：第 6 次 2.0 至 3.8 kPa，第 7 次 1.9 至 4.4 kPa。",
"cat":"hardware",
"src":"software#Every run so far",
"dom":"hardware"
},
{
"term":"MoClo 2.0",
"kw_en":[
"first assembly system",
"high background",
"no usable clone"
],
"kw_zh":[
"第一套組裝系統",
"背景很高",
"沒有可用選殖株"
],
"def_en":"The Modular Cloning kit ReLEAF used first. It gave screens full of empty vectors and off-target bands and no usable Level 1 clone, so the team moved to the SubtiToolKit. The failed data are not shown.",
"def_zh":"ReLEAF 最先用的模組化選殖套組。篩選結果充滿空載體與非預期條帶，沒有任何可用的 Level 1 選殖株，所以改用 SubtiToolKit。失敗的數據未呈現。",
"cat":"biology",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"Molecular dynamics (MD)",
"kw_en":[
"atoms move over time",
"30 ns, one seed",
"BoPEP4 only"
],
"kw_zh":[
"原子隨時間移動",
"30 ns、單一種子",
"只做 BoPEP4"
],
"def_en":"A simulation of every atom in a complex moving in water. We ran nine 30 ns trajectories of BoPEP4 on PEPR1 to test whether docked contacts persist. It says nothing about binding strength, and nothing was checked at the bench.",
"def_zh":"模擬複合體所有原子在水中運動。我們跑了九條 30 ns 的 BoPEP4 對 PEPR1 軌跡，檢驗對接出的接觸是否持續。它不能說明結合強度，也沒有在實驗室驗證。",
"cat":"biology",
"src":"md-simulations",
"dom":"drylab"
},
{
"term":"MOSFET (IRLZ44N)",
"kw_en":[
"electronic switch",
"one per intensity tier",
"logic-level"
],
"kw_zh":[
"電子開關",
"每個強度一顆",
"邏輯準位驅動"
],
"def_en":"A transistor used as a fast electronic switch. Three IRLZ44N MOSFETs, one per intensity tier, are driven by Arduino PWM pins and each switches a green and a red column of four LEDs.",
"def_zh":"當作快速電子開關的電晶體。三顆 IRLZ44N MOSFET，每個強度一顆，由 Arduino PWM 腳位驅動，各自切換一欄綠光與一欄紅光各四顆 LED。",
"cat":"hardware",
"src":"hardware-diopal#4.3",
"dom":"hardware"
},
{
"term":"NaCl stress (osmotic and ionic)",
"kw_en":[
"water uptake blocked",
"toxic ions",
"root zone"
],
"kw_zh":[
"吸水受阻",
"離子毒害",
"根圈"
],
"def_en":"Salt stress hurts a plant in two ways: it lowers water uptake and lets toxic sodium build up. ReLEAF applied NaCl in agar, by drench on agar, or by drenching soil.",
"def_zh":"鹽逆境用兩種方式傷害植物：降低吸水，並讓有毒的鈉離子累積。ReLEAF 把 NaCl 混入培養基、淋在瓊脂上，或淋在土壤中。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"Natural farming",
"kw_en":[
"minimal intervention",
"own resilience",
"painkiller analogy"
],
"kw_zh":[
"少介入",
"自身韌性",
"止痛藥比喻"
],
"def_en":"A farming approach that avoids extra inputs so plants build their own resilience. Ms. Chen and Dr. Li warned that over-intervention treats symptoms; this shaped ReLEAF's release-only-when-needed design.",
"def_zh":"避免額外投入、讓植物自己養成韌性的耕作方式。陳女士與李博士提醒過度介入只治症狀；這影響了 ReLEAF 只在需要時釋放的設計。",
"cat":"hp",
"src":"human-practices#Farmer engagement",
"dom":"ihp"
},
{
"term":"Negative control (WB800 host)",
"kw_en":[
"untransformed host",
"should read near zero",
"read 5 ug/mL"
],
"kw_zh":[
"未轉殖宿主",
"應接近零",
"讀到 5 ug/mL"
],
"def_en":"The same strain without the construct, run through the same assay. In the ELISA it read 5.452 and 4.562 ug/mL, similar to four of six constructs, so differences between constructs cannot be credited to expression.",
"def_zh":"同一株菌但沒有構築，走相同分析。ELISA 中它讀到 5.452 和 4.562 ug/mL，和六個構築中的四個差不多，所以構築間的差異不能算成表達量。",
"cat":"assay",
"src":"measurement",
"dom":"measurement"
},
{
"term":"NPV (net present value)",
"kw_en":[
"future cash in today's money",
"discount rate",
"US$111 000 at 10%"
],
"kw_zh":[
"未來現金折成現值",
"貼現率",
"10% 時 11.1 萬美元"
],
"def_en":"Future cash flows converted into today's money using a discount rate, minus what you put in. ReLEAF's NPV is US$111 000 at 10% but -US$4000 at 25%.",
"def_zh":"用貼現率把未來現金流折成現在的價值，再扣掉投入。ReLEAF 的 NPV 在 10% 為 11.1 萬美元，25% 時為 -4000 美元。",
"cat":"business",
"src":"entrepreneurship#Return for investors",
"dom":"entrepreneurship"
},
{
"term":"NSB and B0 wells",
"kw_en":[
"non-specific binding",
"maximum binding",
"blank-subtracted"
],
"kw_zh":[
"非專一結合",
"最大結合",
"已扣空白"
],
"def_en":"Plate controls for ELISA. NSB wells have no antibody and read 0.005 after blank, showing almost nothing sticks. B0 wells have maximum binding, 1.109 corrected, the value every sample is divided by. Two B0 wells differed by 11 percent.",
"def_zh":"ELISA 的盤上對照。NSB 孔沒有抗體，扣空白後只有 0.005，代表幾乎沒有非專一吸附。B0 孔是最大結合，校正後 1.109，是所有樣品要除的值。兩個 B0 孔差了 11%。",
"cat":"assay",
"src":"measurement",
"dom":"measurement"
},
{
"term":"OD600",
"kw_en":[
"cloudiness at 600 nm",
"cell density proxy",
"1 cm basis"
],
"kw_zh":[
"600 nm 混濁度",
"細胞密度指標",
"1 cm 標準"
],
"def_en":"Optical density at 600 nm, a measure of how much a culture scatters light. ReLEAF reads it in the loop and scales the 2 mm path by 5 to the usual 1 cm basis. It is turbidity, not an exact cell count.",
"def_zh":"600 nm 的光學密度，代表菌液散射光的程度。ReLEAF 在迴路中直接讀取，並把 2 mm 光程乘 5 換成一般的 1 cm 標準。它是混濁度，不是精確的細胞數。",
"cat":"hardware",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Organic certification",
"kw_en":[
"bans GMO products",
"Art. 3 and 15",
"not our market"
],
"kw_zh":[
"禁止基改產品",
"第 3、15 條",
"不是我們的市場"
],
"def_en":"A label that follows legal organic rules. Taiwan's Organic Agriculture Promotion Act excludes GMOs and their products, so even cell-free output from an engineered strain cannot be claimed organic; ReLEAF targets conventional smallholders.",
"def_zh":"依法定有機規範核發的標章。台灣有機農業促進法排除基改生物及其產品，所以即使是基改菌株生產的無細胞產物也不能宣稱有機；ReLEAF 的對象是慣行小農。",
"cat":"law",
"src":"entrepreneurship#Organic farming and genetically modified organism (GMO) concerns",
"dom":"entrepreneurship"
},
{
"term":"Organic eligibility vs containment",
"kw_en":[
"GMO products excluded",
"membrane not enough",
"certifier decides"
],
"kw_zh":[
"GMO 產物被排除",
"膜不足以解決",
"由驗證機構決定"
],
"def_en":"Organic standards in Taiwan, the US, the EU and Malaysia restrict inputs made with genetic engineering, regardless of whether live cells remain. Retaining the bacteria does not by itself make the product organic.",
"def_zh":"臺灣、美國、歐盟與馬來西亞的有機標準限制以基因工程製成的投入物，不管有沒有活菌殘留。把細菌擋住本身不會讓產品變成有機。",
"cat":"law",
"src":"laws-and-regulations",
"dom":"biomanufacturing"
},
{
"term":"Path-length factor (x5)",
"kw_en":[
"2 mm to 10 mm",
"standard cuvette basis",
"multiply by 5"
],
"kw_zh":[
"2 mm 換 10 mm",
"標準比色管",
"乘以 5"
],
"def_en":"OD scales with path length. The flow cuvette is 2 mm, standard OD600 is quoted for 10 mm, so the log ratio is multiplied by 5. It is why the Pro can be compared with the BioDrop at all.",
"def_zh":"OD 與光程成正比。流動比色管是 2 mm，標準 OD600 以 10 mm 表示，所以對數比值乘以 5。這讓 Pro 能和 BioDrop 比較。",
"cat":"hardware",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Payback period",
"kw_en":[
"time to recover cost",
"3.6 years investor",
"farmer 3 years"
],
"kw_zh":[
"回收成本的時間",
"投資人 3.6 年",
"農民 3 年"
],
"def_en":"How long until money put in is earned back. The wiki gives 3.6 years for investors from Year 1, and says a farmer must gain about US$1900 a year to pay back in 3 years.",
"def_zh":"投入的錢要多久才賺回來。維基給出投資人自第 1 年起 3.6 年，並指出農民每年需獲益約 1900 美元才能在 3 年內回本。",
"cat":"business",
"src":"entrepreneurship#Return for investors",
"dom":"entrepreneurship"
},
{
"term":"PcpcG2-veg",
"kw_en":[
"green-light promoter",
"177 bp hybrid",
"CcaR-activated"
],
"kw_zh":[
"綠光啟動子",
"177 bp 混合型",
"被 CcaR 啟動"
],
"def_en":"The hybrid green-light-inducible promoter (177 bp, BBa_26GJIT8W). Phosphorylated CcaR switches it on, so the protectant is made only in green light. It sits in front of every light-gated cassette.",
"def_zh":"混合型的綠光誘導啟動子（177 bp，BBa_26GJIT8W）。磷酸化的 CcaR 會打開它，所以保護蛋白只在綠光下生產。所有受光控的卡匣都放在它後面。",
"cat":"biology",
"src":"parts",
"dom":"wetlab"
},
{
"term":"Perfusion",
"kw_en":[
"medium in, product out",
"cells retained",
"116 h longest run"
],
"kw_zh":[
"培養基進、產物出",
"細胞被留住",
"最長運轉 116 小時"
],
"def_en":"Continuous culture where fresh medium goes in and product-bearing liquid comes out while the cells are kept, so density stays high. In ReLEAF the 0.2 µm membrane does the keeping; the longest logged run is 116 h.",
"def_zh":"灌流培養：新鮮培養基持續進入、含產物的液體持續流出，細胞則被留在系統裡，所以細胞密度能維持很高。ReLEAF 由 0.2 µm 膜負責留住細胞；最長的一次運轉記錄了 116 小時。",
"cat":"hardware",
"src":"hardware-bioreactor#3.1 Hollow-Fiber Perfusion",
"dom":"hardware"
},
{
"term":"Perfusion bioreactor",
"kw_en":[
"fresh medium in",
"waste and product out",
"cells stay"
],
"kw_zh":[
"新鮮培養基進",
"廢液與產物出",
"細胞留在內"
],
"def_en":"A culture vessel where medium flows through while the cells are kept inside. ReLEAF uses it so the protectant can be collected as a steady stream and the engineered bacteria never leave the machine.",
"def_zh":"培養基持續流過、細胞被留在系統內的培養裝置。ReLEAF 用它讓保護蛋白能穩定收集，而基因改造細菌不會離開機器。",
"cat":"hardware",
"src":"hardware-bioreactor",
"dom":"hardware"
},
{
"term":"Perfusion culture",
"kw_en":[
"fresh medium in",
"product out",
"cells kept"
],
"kw_zh":[
"持續換新培養基",
"產物持續移出",
"細胞留下"
],
"def_en":"Continuous culture in which medium flows through while a filter keeps the cells inside. ReLEAF uses it so one culture makes protein repeatedly instead of being harvested after each batch.",
"def_zh":"培養基持續流過、濾膜把細胞留在槽內的連續培養。ReLEAF 用它讓同一批菌反覆產蛋白，而不是每批結束就收掉。",
"cat":"hardware",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"Peristaltic pump",
"kw_en":[
"rollers squeeze the tubing",
"closed fluid path",
"magnetic pump failed"
],
"kw_zh":[
"滾輪擠壓管子",
"流體路徑封閉",
"磁力幫浦失敗"
],
"def_en":"A pump that squeezes silicone tubing from outside, so the fluid never touches the pump head. It drives the loop; 263 mL/min is the recommended flow. A magnetic pump was tried for long runs but could not move the medium.",
"def_zh":"從外側擠壓矽膠管來推動液體的幫浦，液體不會接觸幫浦本體。它驅動整個循環，建議流量為 263 mL/min。團隊也試過磁力幫浦，但它推不動培養基，所以放棄。",
"cat":"hardware",
"src":"hardware-bioreactor#3.4; 4.1 DBTL 4",
"dom":"hardware"
},
{
"term":"Permeate",
"kw_en":[
"cell-free stream",
"leaves the machine",
"the product"
],
"kw_zh":[
"無細胞液流",
"離開機器",
"就是產品"
],
"def_en":"The liquid that crosses the membrane to the shell side. It contains the secreted protectant plus medium components and small debris. It is what reaches the plant and what would be regulated as the product.",
"def_zh":"穿過膜到殼側的液體，含有分泌的保護蛋白，以及培養基成分和小碎片。它是送到植物的東西，也是法規上被當成產品的部分。",
"cat":"hardware",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"Permeate flux (LMH)",
"kw_en":[
"liters per m² per hour",
"36 to 72 in runs",
"2 in scaling table"
],
"kw_zh":[
"每平方公尺每小時公升數",
"實驗 36 至 72",
"規模表用 2"
],
"def_en":"How much liquid crosses the membrane per area per hour. Runs used 72, 36 and 51 LMH (24, 12, 17 mL/min over 200 cm²); the scaling table assumes a 2 LMH design flux.",
"def_zh":"每單位膜面積每小時通過的液量。實驗用 72、36、51 LMH（200 cm² 上 24、12、17 mL/min）；規模表假設設計通量 2 LMH。",
"cat":"hardware",
"src":"software; biomanufacturing#Scaling",
"dom":"hardware"
},
{
"term":"Persistence baseline",
"kw_en":[
"predict no change",
"simplest benchmark",
"must beat it"
],
"kw_zh":[
"預測不變",
"最簡單的基準",
"一定要贏過它"
],
"def_en":"A forecast that says the next value equals the last one. If a model cannot beat it, it adds nothing. At 2 h on run 7 our Kalman filter only tied it.",
"def_zh":"預測下一個值等於上一個值的做法。模型若贏不了它就沒有價值。在 run 7 的 2 小時，我們的 Kalman 只和它打平。",
"cat":"model",
"src":"software",
"dom":"drylab"
},
{
"term":"Persistence forecast / Kalman filter",
"kw_en":[
"no-change baseline",
"41% better at 2 h",
"weighs noise"
],
"kw_zh":[
"假設不變的基準",
"2 小時好 41%",
"考慮雜訊"
],
"def_en":"Persistence predicts the next value equals the last. The Kalman filter also weighs each reading against noise and a trend. It beat persistence by 41% at 2 h on run 4 but by 0% at 2 h on run 7.",
"def_zh":"持續性預測假設下一個值等於上一個。Kalman 濾波還會把每個讀值與雜訊和趨勢比較。在 run 4 的 2 小時預測好 41%，在 run 7 的 2 小時則好 0%。",
"cat":"model",
"src":"software",
"dom":"biomanufacturing"
},
{
"term":"pGEM-T Easy (TA cloning)",
"kw_en":[
"T-overhang vector",
"fast intermediate",
"ampicillin clash"
],
"kw_zh":[
"T 突出端載體",
"快速中間步驟",
"抗生素衝突"
],
"def_en":"A vector with single T overhangs that ligates PCR products carrying A overhangs directly. ReLEAF used it as a Level 0 intermediate in cycle 2, then dropped it because it shares ampicillin resistance with the Level 1 vectors.",
"def_zh":"帶單一 T 突出端的載體，可直接接上帶 A 突出端的 PCR 產物。ReLEAF 在第 2 輪用它當 Level 0 中間載體，之後因它與 Level 1 載體同為安比西林抗性而放棄。",
"cat":"biology",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"PGPB (plant growth-promoting bacteria)",
"kw_en":[
"helpful soil microbes",
"ACC deaminase",
"inoculants"
],
"kw_zh":[
"有益土壤菌",
"ACC deaminase",
"接種劑"
],
"def_en":"Bacteria that help plants grow under stress, often by making ACC deaminase. ReLEAF copies one of their tools but delivers the protein, not live cells, to keep engineered bacteria out of the field.",
"def_zh":"在逆境下幫助植物生長的細菌，常靠產生 ACC deaminase。ReLEAF 借用其工具，但只送蛋白質、不送活菌，避免工程菌進入田間。",
"cat":"biology",
"src":"plant",
"dom":"plant"
},
{
"term":"PGPR",
"kw_en":[
"plant growth-promoting rhizobacteria",
"original idea",
"released into soil"
],
"kw_zh":[
"植物促生根圍細菌",
"最初構想",
"釋放到土壤"
],
"def_en":"The original concept: engineered Bacillus subtilis released into soil to sense stress and release protectants. Prof. Chen and Dr. Brophy pushed the team to a contained bioreactor instead.",
"def_zh":"最初構想：把工程枯草桿菌放進土壤，感測逆境並釋放保護劑。陳教授與 Brophy 博士促使團隊改採封閉式生物反應器。",
"cat":"biology",
"src":"human-practices#Project evolution map",
"dom":"ihp"
},
{
"term":"Phycocyanobilin (PCB)",
"kw_en":[
"light-absorbing chromophore",
"made from heme",
"CcaS-m3 binds it"
],
"kw_zh":[
"吸光發色團",
"由血基質合成",
"CcaS-m3 結合"
],
"def_en":"A light-absorbing pigment that CcaS-m3 must bind before it can sense green light. ReLEAF's cells make it from their own heme using ho1-pcyA. The wiki shows no direct measurement that PCB is made.",
"def_zh":"CcaS-m3 必須先結合才能感測綠光的吸光色素。ReLEAF 的細胞用 ho1-pcyA 由自身血基質合成。wiki 沒有直接量測 PCB 是否有生成。",
"cat":"biology",
"src":"parts",
"dom":"wetlab"
},
{
"term":"Physical containment",
"kw_en":[
"primary safety layer",
"membrane not mutation",
"cells stay inside"
],
"kw_zh":[
"主要安全層",
"用膜而非基因",
"細胞留在裡面"
],
"def_en":"Keeping the engineered cells inside with a physical barrier. In ReLEAF this is the 0.2 µm hollow-fiber membrane, chosen after Dr. Brophy's advice, backed by pressure and leak monitoring.",
"def_zh":"用物理屏障把工程細胞留在內部。在 ReLEAF 是 0.2 µm 中空纖維膜，依 Brophy 博士建議採用，並搭配壓力與漏液監測。",
"cat":"hardware",
"src":"safety-and-security#Bioreactor safety",
"dom":"ihp"
},
{
"term":"Pilot programme",
"kw_en":[
"small real-world trial",
"one season",
"success metrics"
],
"kw_zh":[
"小規模實地試驗",
"一個作季",
"成功指標"
],
"def_en":"A limited trial with real users before wider sales. ReLEAF plans a first pilot of 5 to 10 systems for one season, and Taiwan field trials with 20 to 50 devices, judged on crop loss and spray events.",
"def_zh":"在擴大銷售前，用真實使用者做的小規模試驗。ReLEAF 規劃首批 5 至 10 套系統試用一季，以及 20 至 50 台裝置的台灣田間試驗，以作物損失與噴藥次數評估。",
"cat":"business",
"src":"entrepreneurship#Sales process; entrepreneurship#Target crop field testing",
"dom":"entrepreneurship"
},
{
"term":"Pinch valve",
"kw_en":[
"clamps the return line",
"adds outward pressure",
"60 s per sample"
],
"kw_zh":[
"夾住回流管",
"產生向外的壓力",
"每次取樣 60 秒"
],
"def_en":"A servo that clamps the culture return line to raise pressure across the fibers and push product to the shell side. Prof. Chang noted that raising flow alone gives no outward force. One minute closed gave 20 to 30 mL.",
"def_zh":"一個伺服馬達夾住培養液回流管，使纖維兩側壓力升高，把產物推向殼側。張嘉修教授指出光加大流量只會循環、沒有向外的推力。夾閉一分鐘可得約 20 至 30 mL。",
"cat":"hardware",
"src":"hardware-bioreactor#6.1 Prof. Chang; 4.2 DBTL 4",
"dom":"hardware"
},
{
"term":"Plant biostimulant (PFC 6(B))",
"kw_en":[
"abiotic stress claim",
"non-microbial",
"EU fertilising products"
],
"kw_zh":[
"非生物逆境宣稱",
"非微生物",
"歐盟肥料產品"
],
"def_en":"EU Regulation 2019/1009 category for products that improve plant tolerance to abiotic stress. 6(B) is the non-microbial branch. ReLEAF's cell-free permeate may fit; the engineered culture cannot use the microbial branch.",
"def_zh":"歐盟 Regulation 2019/1009 中改善植物對非生物逆境耐受性的產品類別。6(B) 是非微生物分支。ReLEAF 的無細胞透過液可能符合；工程菌本身不能走微生物分支。",
"cat":"law",
"src":"laws-and-regulations",
"dom":"biomanufacturing"
},
{
"term":"Plasmid stability and erythromycin",
"kw_en":[
"selection antibiotic",
"second growth at 47 h",
"topped up daily"
],
"kw_zh":[
"篩選抗生素",
"47 小時第二次生長",
"每天補充"
],
"def_en":"Erythromycin keeps cells holding the plasmid. Run 4 grew twice, thought to be erythromycin degrading and plasmid loss. When erythromycin was topped up each morning in run 7, the second growth did not appear.",
"def_zh":"紅黴素讓細胞保留質體。第 4 次運轉出現兩次生長，推測是紅黴素降解與質體流失。第 7 次每天補充紅黴素後，第二次生長沒有再出現。",
"cat":"biology",
"src":"hardware-bioreactor#4.2",
"dom":"hardware"
},
{
"term":"Plasmolysis",
"kw_en":[
"onion cells",
"3 M and 6 M salt",
"high school lesson"
],
"kw_zh":[
"洋蔥細胞",
"3 M 與 6 M 鹽",
"高中課程"
],
"def_en":"Cell shrinkage when salt pulls water out. High school students watched onion cell pigment change in 3 M and 6 M salt after 15 minutes; it was the most-correct post-survey question.",
"def_zh":"鹽把水抽出導致細胞皺縮。高中生觀察洋蔥細胞色素在 3 M 與 6 M 鹽水 15 分鐘後的變化；這題在後測答對率最高。",
"cat":"plant",
"src":"education#Experiment: Plasmolysis",
"dom":"ihp"
},
{
"term":"PliaG and PlepA",
"kw_en":[
"constitutive promoters",
"photoreceptor expression",
"two Level 2 versions"
],
"kw_zh":[
"持續表現啟動子",
"光受體表現",
"兩個 Level 2 版本"
],
"def_en":"Two constitutive promoters that express CcaS-m3 at a steady level instead of using an inducer. Both versions were built, giving Level 2 devices ACDI (PlepA) and ABDI (PliaG); the wiki cannot choose between them yet.",
"def_zh":"兩個讓 CcaS-m3 穩定表現而不需誘導劑的持續表現啟動子。兩個版本都做了，得到 Level 2 裝置 ACDI（PlepA）與 ABDI（PliaG）；目前 wiki 還無法分出優劣。",
"cat":"biology",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"PLP (pyridoxal 5'-phosphate)",
"kw_en":[
"ACCD cofactor",
"keep fixed",
"Csn matched host without it"
],
"kw_zh":[
"ACCD 輔因子",
"必須固定",
"沒有它 Csn 等於宿主"
],
"def_en":"The cofactor ACC deaminase needs. Without PLP the Csn construct read the same as the host; with PLP it rose. So any comparison across constructs keeps PLP fixed, and every ACCD plant treatment carries PLP.",
"def_zh":"ACC 脫胺酶需要的輔因子。沒有 PLP 時 Csn 構築和宿主讀值一樣，加了就上升。所以跨構築比較都要固定 PLP，每個 ACCD 植物處理也都加 PLP。",
"cat":"biology",
"src":"measurement",
"dom":"measurement"
},
{
"term":"PLP (pyridoxal 5′-phosphate)",
"kw_en":[
"ACCD cofactor",
"added to the assay",
"raises activity"
],
"kw_zh":[
"ACCD 輔因子",
"加進檢測",
"提高活性"
],
"def_en":"The coenzyme ACC deaminase needs. In the DNPH assay, adding PLP raised activity, so ReLEAF supplies it in every later assay. The team also argues secreted ACCD may load PLP slowly outside the cell, which was not measured.",
"def_zh":"ACC 去胺酶需要的輔酶。DNPH 檢測加入 PLP 後活性上升，所以之後每次檢測都補充。團隊也推測分泌出來的 ACCD 在細胞外結合 PLP 較慢，但尚未量測。",
"cat":"biology",
"src":"results",
"dom":"wetlab"
},
{
"term":"PLP (pyridoxal phosphate)",
"kw_en":[
"ACCD coenzyme",
"added with enzyme",
"boosts activity"
],
"kw_zh":[
"ACCD 輔酶",
"與酵素一起加",
"提高活性"
],
"def_en":"The vitamin B6 cofactor ACC deaminase needs. In ReLEAF's DNPH assay, samples with PLP showed higher activity, so PLP was applied together with ACCD in hydroponics.",
"def_zh":"ACC deaminase 需要的維生素 B6 輔因子。DNPH 實驗中加 PLP 的樣品活性較高，所以水耕實驗把 PLP 與 ACCD 一起給。",
"cat":"biology",
"src":"results",
"dom":"plant"
},
{
"term":"Pre-, co- and post-treatment",
"kw_en":[
"day -1, 0, +1",
"farmer timing",
"forecast link"
],
"kw_zh":[
"前一天、當天、後一天",
"農民施用時機",
"連結預測"
],
"def_en":"Giving the protectant one day before, with, or one day after the stress. It models a farmer acting on a forecast, on arrival of stress, or after damage, and tests whether prediction is needed.",
"def_zh":"在逆境前一天、同時、或後一天給保護劑。模擬農民依預報、逆境來臨時、或受害後施用，用來檢驗是否需要預測。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"Pre-registration",
"kw_en":[
"written before measuring",
"8 predictions",
"5 not supported"
],
"kw_zh":[
"測量前先寫下",
"8 項預測",
"5 項不成立"
],
"def_en":"Committing the algorithm list, metrics, pass thresholds and exclusion rules to the repository before the first calibration reading. ReLEAF also registered a growth rate on 1 October, 0.2986 per hour, which run 6 met at 0.286.",
"def_zh":"在第一筆校正讀值之前，把演算法清單、指標、通過門檻和排除規則提交到儲存庫。ReLEAF 也在 10 月 1 日登記生長率 0.2986 每小時，第 6 次實驗得到 0.286，落在區間內。",
"cat":"software",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Pressure transducer (BP8G-AGB)",
"kw_en":[
"0–1 MPa, 0–5 V",
"3 on the rig",
"1% full scale ≈ 0.1 bar"
],
"kw_zh":[
"0–1 MPa、0–5 V",
"實驗台上 3 個",
"滿量程 1% ≈ 0.1 bar"
],
"def_en":"Ceramic gauge sensor, 0 to 1 MPa, 1.0% of full scale overall, about 0.1 bar. Three read feed, retentate and permeate. TMP is only a few kPa, so fouling has to be read as a trend, not from one value.",
"def_zh":"陶瓷壓力傳送器，量程 0 至 1 MPa，整體準確度為滿量程的 1.0%（約 0.1 bar）。三個分別讀進料、回流、滲透側。TMP 只有幾 kPa，所以積垢要看趨勢，不能看單一數值。",
"cat":"hardware",
"src":"hardware-bioreactor#4.1 DBTL 1; biomanufacturing#Oxygen, energy and dead time",
"dom":"hardware"
},
{
"term":"Pressure transducer BP8G-AGB",
"kw_en":[
"ceramic, 0 to 1 MPa",
"1% of full scale",
"read as a trend"
],
"kw_zh":[
"陶瓷、0 至 1 MPa",
"精度 1% 滿量程",
"看趨勢不看單點"
],
"def_en":"Jingfeng ceramic pressure sensor. A 1 MPa part working at a few tens of kPa, so a single absolute value is not trusted. A 0 to 100 kPa sensor would read about ±1 kPa and is the suggested upgrade.",
"def_zh":"精工陶瓷壓力感測器。1 MPa 的零件實際只工作在幾十 kPa，所以不信任單一絕對值。建議升級為 0 至 100 kPa 的感測器，約 ±1 kPa 解析度。",
"cat":"hardware",
"src":"hardware-bioreactor#4.1; biomanufacturing",
"dom":"hardware"
},
{
"term":"Pressure trip and droplet sensor",
"kw_en":[
"trip at 0.70 bar",
"armed in 77 h run, peak 0.57",
"droplet sensor: planned"
],
"kw_zh":[
"0.70 bar 跳脫",
"77 小時運轉待命、最高 0.57",
"漏液感測器：規劃中"
],
"def_en":"Pressure trip: firmware stops both pumps and releases the pinch valve above 0.70 bar; it was armed in the 77-hour run, peak 0.57 bar. Droplet sensor: a moisture sensor under the loop, which the bioreactor page calls planned.",
"def_zh":"壓力跳脫：壓力超過 0.70 bar 時，韌體停止兩個幫浦並放開夾管閥；77 小時那次運轉中待命，最高 0.57 bar。漏液感測器：裝在迴路下方的濕度感測器，反應器頁面說仍在規劃。",
"cat":"hardware",
"src":"engineering; software#The Digital Twin; hardware-bioreactor#9.2.3",
"dom":"hardware"
},
{
"term":"Primary root length (ImageJ)",
"kw_en":[
"hand-traced",
"vertical plates",
"growth inhibition"
],
"kw_zh":[
"手動描繪",
"直立盤",
"生長抑制"
],
"def_en":"Length of the main root measured from photographs by tracing it in ImageJ. Vertical plates let roots grow along a surface; the readout tracks how much stress stops growth.",
"def_zh":"用 ImageJ 在照片上描繪主根而得的長度。直立盤讓根沿著表面生長；此指標反映逆境抑制生長的程度。",
"cat":"assay",
"src":"plant",
"dom":"plant"
},
{
"term":"Printer-and-ink (cartridge) model",
"kw_en":[
"buy device once",
"refill cartridges",
"recurring revenue"
],
"kw_zh":[
"設備買一次",
"補充匣",
"經常性收入"
],
"def_en":"A business where a reusable device is sold once and a consumable is bought repeatedly. Prof. Chen suggested it: the bioreactor is the printer, the Bacillus subtilis cartridge is the ink, about US$90 a year.",
"def_zh":"一次賣出可重複使用的設備、再持續賣耗材的模式。陳教授提出此建議：生物反應器是印表機，枯草桿菌補充匣是墨水，每年約 90 美元。",
"cat":"business",
"src":"entrepreneurship#Cartridge design",
"dom":"entrepreneurship"
},
{
"term":"Pro photometer",
"kw_en":[
"beam splitter",
"sensitive build",
"US$371.78"
],
"kw_zh":[
"分光鏡",
"較靈敏版本",
"371.78 美元"
],
"def_en":"The first design: amber LED, collimating lens, 90:10 beam splitter and two lux sensors in a tilted body. About 5.3 times more sensitive than the Slim and the unit that ran the 434 hour test.",
"def_zh":"第一版設計：琥珀 LED、準直透鏡、90:10 分光鏡和兩個照度感測器，裝在傾斜的本體。比 Slim 靈敏約 5.3 倍，跑 434 小時實驗的就是它。",
"cat":"hardware",
"src":"hardware-photometer",
"dom":"measurement"
},
{
"term":"Process analytical technology (PAT)",
"kw_en":[
"measure in the stream",
"no sample drawn",
"reference beam"
],
"kw_zh":[
"在管線中量測",
"不需取樣",
"參考光束"
],
"def_en":"Measuring a process while it runs. The inline photometer reads turbidity without drawing a sample, and a reference beam separates an instrument fault from a real culture event.",
"def_zh":"在製程進行時直接量測。管線內光度計不取樣就讀濁度，參考光束能分辨是儀器故障還是培養真的出了狀況。",
"cat":"hardware",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"Project Evolution Map",
"kw_en":[
"four phases",
"Feb to Oct",
"who changed what"
],
"kw_zh":[
"四個階段",
"二到十月",
"誰改變了什麼"
],
"def_en":"The page's timeline of four phases: Idea Formation, System Design, System Optimization, Real-World Implementation, each listing the stakeholders met and the decisions that followed.",
"def_zh":"頁面的四階段時間軸：構想形成、系統設計、系統優化、真實世界實施，列出每階段訪談對象與後續決定。",
"cat":"hp",
"src":"human-practices#Project evolution map",
"dom":"ihp"
},
{
"term":"Protectant / biostimulant",
"kw_en":[
"ACCD, LEA14, BoPEP4",
"made on demand",
"cell-free output"
],
"kw_zh":[
"三種保護劑",
"按需生產",
"無細胞產物"
],
"def_en":"The plant-protective proteins and peptides ReLEAF's bacteria secrete: ACC deaminase, LEA14 and BoPEP4. CH Biotech described such products as biostimulants, which shaped delivery and regulation questions.",
"def_zh":"ReLEAF 細菌分泌的植物保護蛋白與胜肽：ACC deaminase、LEA14、BoPEP4。正瀚生技稱這類產品為生物刺激素，影響了施用與法規的討論。",
"cat":"biology",
"src":"human-practices#Protectant design",
"dom":"ihp"
},
{
"term":"pSTK-EXP1 / pSTK-EXP2",
"kw_en":[
"shuttle vectors",
"E. coli and Bacillus",
"Level 1 vs Level 2"
],
"kw_zh":[
"穿梭載體",
"大腸桿菌與枯草桿菌",
"Level 1 對 Level 2"
],
"def_en":"Shuttle plasmids that replicate in both E. coli and B. subtilis. EXP1 carries single constitutive cassettes; EXP2 carries the four-module Level 2 circuit. Selection in Bacillus is erythromycin at 5 µg/mL.",
"def_zh":"能在大腸桿菌與枯草桿菌中複製的穿梭質體。EXP1 放單一持續表現卡匣；EXP2 放四模組的 Level 2 電路。枯草桿菌用 5 µg/mL erythromycin 篩選。",
"cat":"biology",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"Pveg",
"kw_en":[
"constitutive promoter",
"always on",
"BBa_K143012"
],
"kw_zh":[
"持續表現啟動子",
"一直開著",
"BBa_K143012"
],
"def_en":"A constitutive B. subtilis promoter from an earlier iGEM part. ReLEAF uses it for ccaR in the light circuit and for every protectant cassette in the constitutive module that produced the bench results.",
"def_zh":"來自舊 iGEM 零件的枯草桿菌持續表現啟動子。ReLEAF 用它表現光電路中的 ccaR，也用在產出所有桌面數據的持續表現模組的每個保護蛋白卡匣。",
"cat":"biology",
"src":"parts",
"dom":"wetlab"
},
{
"term":"PWM (pulse-width modulation)",
"kw_en":[
"fast on-off switching",
"duty cycle sets brightness",
"analogWrite 5, 31, 255"
],
"kw_zh":[
"快速開關",
"工作週期決定亮度",
"analogWrite 5、31、255"
],
"def_en":"The Arduino switches an LED on and off very fast; the share of time it is on, the duty cycle, sets the average brightness. The LPA tiers use analogWrite 5, 31 and 255 on pins 9, 10, 11: about 2%, 12% and 100%.",
"def_zh":"Arduino 讓 LED 極快地開關，開啟時間所佔的比例（工作週期）決定平均亮度。LPA 在腳位 9、10、11 用 analogWrite 5、31、255，約為 2%、12%、100%。",
"cat":"hardware",
"src":"hardware-diopal#4.1 Specifications",
"dom":"hardware"
},
{
"term":"Quantisation",
"kw_en":[
"whole-count sensor",
"lost sub-count detail",
"91.5 percent on integers"
],
"kw_zh":[
"整數計數感測器",
"小數資訊消失",
"91.5% 落在整數"
],
"def_en":"A sensor that reports only whole counts. The reference sat near 32 counts, so one count moved OD by 0.067, and the MAD gate collapsed to the most common value. It made fake steps in the 434 hour trace.",
"def_zh":"感測器只輸出整數計數。參考通道約 32 個計數，差 1 個計數 OD 就差 0.067，MAD 閘門退化成取最常見的值，在 434 小時資料中造成假階梯。",
"cat":"hardware",
"src":"measurement",
"dom":"measurement"
},
{
"term":"R2 (coefficient of determination)",
"kw_en":[
"fit to a line",
"1 is perfect",
"not accuracy"
],
"kw_zh":[
"直線擬合程度",
"1 為完美",
"不等於準確"
],
"def_en":"How well points follow a fitted line. ReLEAF reports R2 for each instrument against known mass. A high R2 means linear, not correct: the Pro had R2 0.9874 on silica yet sat 0.12 OD below the BioDrop.",
"def_zh":"資料點貼近擬合直線的程度。ReLEAF 對已知質量報告各儀器的 R2。R2 高代表線性，不代表正確：Pro 在二氧化矽上 R2 為 0.9874，卻比 BioDrop 低 0.12 OD。",
"cat":"model",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Reactive oxygen species (ROS)",
"kw_en":[
"heat by-product",
"cell damage",
"recovery step"
],
"kw_zh":[
"高溫副產物",
"細胞損傷",
"恢復階段"
],
"def_en":"Reactive molecules that build up in cells under heat. The heat assay's recovery period lets the team watch how plants clear them, which is why post-treatment was given after heat ended.",
"def_zh":"高溫下在細胞中累積的活性分子。熱逆境實驗的恢復期讓團隊觀察植物如何清除它們，這也是事後處理安排在高溫結束後的原因。",
"cat":"biology",
"src":"plant",
"dom":"plant"
},
{
"term":"Reference beam and sample-to-reference ratio",
"kw_en":[
"10% of the light, no culture",
"drift cancels in the ratio",
"reference failed after about 240 h"
],
"kw_zh":[
"10% 的光、不經過菌液",
"漂移在比值中抵消",
"約 240 小時後參考通道故障"
],
"def_en":"A second sensor sees 10% of the LED light without the culture, so OD comes from a ratio and slow LED drift cancels. Clean medium gives about 9:1. In the 434 h run the reference channel itself failed after about 240 h.",
"def_zh":"第二個感測器看到不經過菌液的 10% LED 光，所以 OD 由比值得出，LED 的緩慢漂移會被抵消。乾淨培養基的比值約 9:1。在 434 小時的運轉中，參考通道本身約在 240 小時後故障。",
"cat":"hardware",
"src":"hardware-photometer#7.2.2 Optical Layout; #5.1",
"dom":"hardware"
},
{
"term":"Reference channel (beam splitter)",
"kw_en":[
"10% of the light",
"tracks LED drift",
"ratio cancels drift"
],
"kw_zh":[
"10% 的光",
"追蹤 LED 漂移",
"比值抵消漂移"
],
"def_en":"A 90:10 beam splitter sends 10% of the LED light to a second sensor that never sees the culture. OD comes from the sample-to-reference ratio, so slow LED drift is not read as growth.",
"def_zh":"90:10 分光器把 10% 的 LED 光送到不經過菌液的第二個感測器。OD 由樣品與參考的比值得出，LED 緩慢漂移不會被當成生長。",
"cat":"hardware",
"src":"hardware-photometer#7.2.2",
"dom":"hardware"
},
{
"term":"Reference channel (dual beam)",
"kw_en":[
"second sensor",
"never sees culture",
"cancels LED drift"
],
"kw_zh":[
"第二個感測器",
"不經過菌液",
"抵消 LED 飄移"
],
"def_en":"A second lux sensor that sees only the LED, not the culture. Taking the sample to reference ratio means a dimming LED is not read as growth. A drift flag fires if R/R0 leaves 0.85 to 1.15.",
"def_zh":"第二個只看 LED、不經過菌液的照度感測器。取樣品與參考的比值，LED 變暗就不會被誤讀成生長。R/R0 超出 0.85 至 1.15 就會亮飄移旗標。",
"cat":"hardware",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Registered forecast",
"kw_en":[
"written before the run",
"pass band 0.2705 to 0.3300",
"scored 0.286"
],
"kw_zh":[
"跑之前先登記",
"通過區間 0.2705 至 0.3300",
"結果 0.286"
],
"def_en":"A prediction committed in writing before the experiment, with a pass criterion. On 1 Oct 2026 we registered a growth rate of 0.2986 h-1; run 6 gave 0.286 h-1, inside the interval.",
"def_zh":"實驗前以書面登記的預測與通過條件。2026 年 10 月 1 日登記生長率 0.2986 h-1；第 6 次運轉得到 0.286 h-1，落在區間內。",
"cat":"model",
"src":"software#Registered forecast",
"dom":"hardware"
},
{
"term":"Registry part (BBa_26…)",
"kw_en":[
"iGEM Registry entry",
"35 team parts",
"composite or basic"
],
"kw_zh":[
"iGEM Registry 條目",
"35 個團隊零件",
"複合或基本"
],
"def_en":"A documented, deposited DNA part. ReLEAF's 35 entries span a Level 2 device, circuit units, cassettes, secretion fusions, cargo sequences and regulatory parts, built from 14 earlier parts. Each lists sequence, level, function and validation status.",
"def_zh":"已登錄並有文件的 DNA 零件。ReLEAF 的 35 個條目涵蓋 Level 2 裝置、電路單元、卡匣、分泌融合、目標蛋白序列與調控零件，由 14 個舊零件組成。每個條目列出序列、層級、功能與驗證狀態。",
"cat":"biology",
"src":"parts",
"dom":"wetlab"
},
{
"term":"Residual SD / RMSE",
"kw_en":[
"scatter around the line",
"0.011 OD",
"0.016 OD"
],
"kw_zh":[
"離直線的散布",
"0.011 OD",
"0.016 OD"
],
"def_en":"Typical distance of readings from a fitted line, in OD units. The Pro had RMSE 0.011 OD on TiO2 test 2 and a residual SD of 0.016 OD on silica, against 0.024 OD for the August calibration.",
"def_zh":"讀值離擬合直線的一般距離，單位是 OD。Pro 在 TiO2 第二次的 RMSE 為 0.011 OD，二氧化矽殘差 SD 為 0.016 OD，8 月校正則是 0.024 OD。",
"cat":"model",
"src":"results",
"dom":"measurement"
},
{
"term":"RMSE and forecast horizon",
"kw_en":[
"typical error size",
"hours ahead",
"0.040 vs 0.067"
],
"kw_zh":[
"典型誤差大小",
"往前預測幾小時",
"0.040 對 0.067"
],
"def_en":"RMSE is the typical size of a forecast error. The horizon is how many hours ahead the forecast looks. Our errors are for the photometer reading and grow from 2 h to 12 h.",
"def_zh":"RMSE 是預測誤差的典型大小，時距是往前預測幾小時。我們的誤差是針對 photometer 讀值，從 2 小時到 12 小時逐漸變大。",
"cat":"model",
"src":"software",
"dom":"drylab"
},
{
"term":"Salt bridge occupancy and clamp",
"kw_en":[
"fraction of frames",
"Asn23 to Arg487",
"named contacts beat RMSD"
],
"kw_zh":[
"占畫面比例",
"Asn23 對 Arg487",
"指名接觸勝過 RMSD"
],
"def_en":"The share of simulation frames in which a contact exists. The key one is the Asn23 carboxylate gripping Arg487. We judge constructs on named contacts like this because RMSD tracked the salt bridge poorly (Spearman +0.29).",
"def_zh":"模擬畫面中某個接觸存在的比例。關鍵的是 Asn23 羧基抓住 Arg487。我們用這類指名接觸來判斷構築，因為 RMSD 與鹽橋的相關很弱（Spearman +0.29）。",
"cat":"biology",
"src":"md-simulations",
"dom":"drylab"
},
{
"term":"SAM (serviceable available market)",
"kw_en":[
"part you can reach",
"399 M farms",
"climate-hit 70%"
],
"kw_zh":[
"可服務的部分",
"3.99 億農場",
"受氣候影響 70%"
],
"def_en":"The slice of the TAM your product and channels can actually serve. ReLEAF uses 399 million farms, the 70% of farmers reporting climate impact in a Bayer survey, which is a share of farmers, not a measured market.",
"def_zh":"TAM 中你的產品與通路實際能服務的部分。ReLEAF 用 3.99 億個農場，即 Bayer 調查中 70% 回報受氣候影響的農民，這是農民比例，不是實測市場。",
"cat":"business",
"src":"entrepreneurship#Industry analysis",
"dom":"entrepreneurship"
},
{
"term":"SamyQ",
"kw_en":[
"α-amylase signal",
"93 bp",
"about 90% secretion"
],
"kw_zh":[
"α-澱粉酶訊號肽",
"93 bp",
"約 90% 分泌"
],
"def_en":"The α-amylase signal peptide (BBa_K1074014, 93 bp), reported at about 90% secretion for α-amylase in B. subtilis. Used in six of the eight secretion fusions and in the WB800 reactor runs.",
"def_zh":"α-澱粉酶訊號肽（BBa_K1074014，93 bp），文獻報告在枯草桿菌分泌 α-澱粉酶約 90%。用在八個分泌融合中的六個，也用於 WB800 反應器運轉。",
"cat":"biology",
"src":"parts",
"dom":"wetlab"
},
{
"term":"Sanger sequencing",
"kw_en":[
"read the DNA",
"per clone",
"deciding check"
],
"kw_zh":[
"讀出 DNA 序列",
"逐株檢查",
"最終判斷"
],
"def_en":"Reading the base sequence of a plasmid insert. ReLEAF used it to confirm Level 0 and Level 1 clones. No Level 2 construct has been sequenced end to end.",
"def_zh":"讀出質體插入片段的鹼基序列。ReLEAF 用它確認 Level 0 與 Level 1 選殖株。沒有任何 Level 2 構築被全長定序。",
"cat":"assay",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"Saturation",
"kw_en":[
"signal stops responding",
"sample beam 1/10 of reference",
"low-signal warning"
],
"kw_zh":[
"訊號不再變化",
"樣品光為參考的十分之一",
"低訊號警告"
],
"def_en":"When a sensor or optical path can no longer respond to more density. In run 6 the sample beam fell to a tenth of the reference near OD 2.7 and the gate raised a low-signal warning. The BioDrop also loses accuracy above OD 1.",
"def_zh":"感測器或光路無法再隨密度變化的狀態。第 6 次實驗在約 OD 2.7 時樣品光降到參考的十分之一，閘門發出低訊號警告。BioDrop 在 OD 1 以上也會失準。",
"cat":"hardware",
"src":"results",
"dom":"measurement"
},
{
"term":"Scale-out",
"kw_en":[
"copy the module",
"membrane never binds",
"pumps, power, medium bind"
],
"kw_zh":[
"複製模組",
"膜不是瓶頸",
"幫浦、電力、培養基才是"
],
"def_en":"Growing capacity by adding identical modules, not a bigger vessel. From one to eight modules, the table says membrane area never limits; medium draw, pumping and energy do.",
"def_zh":"用增加相同模組而不是放大容器來增加產能。從一個到八個模組，表中顯示膜面積不是限制；培養基用量、泵送與能耗才是。",
"cat":"hardware",
"src":"biomanufacturing#Scaling; hardware-bioreactor#9.2.7",
"dom":"hardware"
},
{
"term":"Scale-out vs scale-up",
"kw_en":[
"replicate the unit",
"not enlarge",
"oxygen and power bind"
],
"kw_zh":[
"複製單元",
"不是放大",
"氧氣和電力成為限制"
],
"def_en":"Scale-up enlarges one vessel and must re-establish mass transfer, oxygen, heat and mixing. Scale-out copies a unit already characterised. ReLEAF scales out; in the eight-module table the membrane is the last thing to bind.",
"def_zh":"放大是把單一容器變大，需重新確立質傳、氧氣、散熱與混合；水平複製是重複已知特性的單元。ReLEAF 採水平複製；八模組表中膜最後才受限。",
"cat":"business",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"SDG selection",
"kw_en":[
"2, 4, 10, 12, 15",
"eight shortlisted",
"3, 7, 13 not claimed"
],
"kw_zh":[
"2、4、10、12、15",
"八個候選",
"3、7、13 不主張"
],
"def_en":"ReLEAF shortlisted eight SDGs and kept five it can act on: Zero Hunger, Quality Education, Reduced Inequalities, Responsible Consumption, Life on Land. Climate Action is affected but not claimed.",
"def_zh":"ReLEAF 先列八個 SDG，保留可行動的五個：消除飢餓、優質教育、減少不平等、責任消費與生產、陸域生態。氣候行動有影響但不主張。",
"cat":"hp",
"src":"sustainability",
"dom":"ihp"
},
{
"term":"SDS-PAGE",
"kw_en":[
"separate by size",
"120 V gel run",
"ladder in first and last lane"
],
"kw_zh":[
"依大小分離",
"120 V 跑膠",
"首尾泳道放標準"
],
"def_en":"Gel electrophoresis that separates denatured proteins by molecular weight. ReLEAF used it as the first half of the Western blot: samples heated at 95 C in Laemmli buffer, then run at 120 V with a ladder for size.",
"def_zh":"把變性蛋白質依分子量分離的電泳。ReLEAF 把它當 Western blot 的前半：樣品在 Laemmli buffer 中 95 度 C 加熱，再以 120 V 跑膠，並放 ladder 對照大小。",
"cat":"assay",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Secretion (Sec pathway, signal peptide)",
"kw_en":[
"Csn or SamyQ",
"exported unfolded",
"no lysis"
],
"kw_zh":[
"Csn 或 SamyQ",
"以未摺疊狀態輸出",
"不用破菌"
],
"def_en":"A signal peptide on the protein sends it out of the cell through the Sec pathway, which needs the protein unfolded. ReLEAF uses Csn or SamyQ so product can be collected without breaking cells. A rapid-folding chromoprotein failed to secrete.",
"def_zh":"蛋白上的訊號肽讓它經 Sec 路徑輸出細胞，過程需蛋白保持未摺疊。ReLEAF 用 Csn 或 SamyQ，不必破菌就能收集產物。快速摺疊的色素蛋白無法有效分泌。",
"cat":"biology",
"src":"results",
"dom":"biomanufacturing"
},
{
"term":"Seed exchange platform",
"kw_en":[
"Ms. Chen's idea",
"post supply and demand",
"matching"
],
"kw_zh":[
"陳女士的啟發",
"張貼供需",
"配對"
],
"def_en":"A feature that lets farmers post seed supply and demand and get matched. It came from Ms. Chen's in-person seed event, which was inefficient, and from seed loss after typhoons.",
"def_zh":"讓農民張貼種子供需並配對的功能。起因是陳女士辦的面對面種子交換活動效率不高，以及颱風後種子流失。",
"cat":"software",
"src":"human-practices#Seed exchange",
"dom":"ihp"
},
{
"term":"Sensitivity analysis / conservative case",
"kw_en":[
"what if sales fall",
"70% of plan",
"break-even Year 6"
],
"kw_zh":[
"銷量下降會怎樣",
"計畫的 70%",
"第 6 年損益兩平"
],
"def_en":"Re-running a model with worse inputs to see how fragile it is. ReLEAF's conservative case sells only 70% of planned hectares: break-even slips to Year 6 and IRR drops to about -7%.",
"def_zh":"用較差的輸入重算模型，看它有多脆弱。ReLEAF 的保守情境只賣出計畫公頃的 70%：損益兩平延到第 6 年，IRR 降到約 -7%。",
"cat":"model",
"src":"entrepreneurship#Return for investors",
"dom":"entrepreneurship"
},
{
"term":"Sensor alarm (autoencoder)",
"kw_en":[
"trained on healthy 120 h",
"sensor axis and process axis",
"26.7 h early warning"
],
"kw_zh":[
"用健康的前 120 小時訓練",
"感測軸與製程軸",
"提早 26.7 小時"
],
"def_en":"A model that learns normal sensor behavior and flags drift. It watched the reference beam separately from growth, so it could tell a failing photometer from a culture event, and flagged the 434 h run's failure 26.7 h early.",
"def_zh":"學習正常感測行為並標示異常的模型。它把參考光束與生長分開看，因此能分辨光度計故障與培養事件，並在 434 小時運轉中提早 26.7 小時示警。",
"cat":"software",
"src":"software#The 434-hour run",
"dom":"hardware"
},
{
"term":"Sensor axis vs process axis",
"kw_en":[
"reference beam",
"growth rate",
"instrument vs culture"
],
"kw_zh":[
"參考光束",
"生長速率",
"儀器對培養物"
],
"def_en":"The sensor axis watches the reference beam, which never passes through the culture, so it sees instrument faults. The process axis watches specific growth rate, so it sees culture events. Together they separate the two.",
"def_zh":"感測器軸看參考光束（不經過培養液），所以抓儀器故障；製程軸看比生長速率，所以抓培養物變化。兩者合起來能分辨是儀器還是培養物出問題。",
"cat":"software",
"src":"software",
"dom":"drylab"
},
{
"term":"Sensor status labels",
"kw_en":[
"live",
"bench tested",
"tested, not integrated"
],
"kw_zh":[
"運轉中",
"桌上測試",
"測過但未整合"
],
"def_en":"The Digital Twin labels each channel live, bench tested, tested not integrated, experimented not integrated, or external. Use these words when asked what the system really measures: green light and DO are not live, leaf sensor is bench only.",
"def_zh":"數位孿生為每個通道標示：運轉中、桌上測試、測過但未整合、實驗過但未整合、外部資料。被問到系統實際量什麼時用這些詞：綠光與 DO 不是運轉中，葉片感測器只做過桌上測試。",
"cat":"software",
"src":"software#What our digital twin measures",
"dom":"hardware"
},
{
"term":"Signal peptide",
"kw_en":[
"export tag",
"N-terminal",
"Sec pathway"
],
"kw_zh":[
"輸出標籤",
"接在 N 端",
"Sec 路徑"
],
"def_en":"A short N-terminal tag that sends a protein out of the cell through the Sec pathway. ReLEAF fused Csn or SamyQ in front of each cargo. The Sec pathway needs the protein unfolded, which may be why AmilCP failed.",
"def_zh":"接在蛋白質 N 端的短標籤，讓蛋白質經 Sec 路徑運出細胞。ReLEAF 在每個目標蛋白前接 Csn 或 SamyQ。Sec 路徑要求蛋白質未折疊，這可能是 AmilCP 失敗的原因。",
"cat":"biology",
"src":"results",
"dom":"wetlab"
},
{
"term":"SiO2 microsphere standard",
"kw_en":[
"1 um beads",
"iGEM standard",
"10 October"
],
"kw_zh":[
"1 微米微球",
"iGEM 標準",
"10 月 10 日"
],
"def_en":"Monodisperse 1 micron silica beads, close to a Bacillus cell in size, added by pipetted volume. Used to calibrate both builds and to test the software. It calibrates the instrument, not the organism.",
"def_zh":"單一粒徑 1 微米的二氧化矽微球，大小接近枯草桿菌，依移液體積加入。用來校正兩個版本並測試軟體。它校正的是儀器，不是生物。",
"cat":"hardware",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Slim photometer",
"kw_en":[
"optical fibres",
"more linear",
"US$235.29"
],
"kw_zh":[
"光纖",
"線性較好",
"235.29 美元"
],
"def_en":"The simplified design: two optical fibres replace the lens and beam splitter, feeding the same 2 mm cuvette. Cheaper and smaller, linear on silica (R2 0.992), but it reads about one fifth of the Pro and has not run long on culture.",
"def_zh":"簡化版設計：兩條光纖取代透鏡和分光鏡，接到同樣 2 mm 比色管。較便宜較小，對二氧化矽線性好（R2 0.992），但讀值約為 Pro 的五分之一，也還沒長時間跑過菌液。",
"cat":"hardware",
"src":"hardware-photometer",
"dom":"measurement"
},
{
"term":"Social business model canvas",
"kw_en":[
"nine blocks",
"beneficiaries",
"payers"
],
"kw_zh":[
"九大區塊",
"受益者",
"付費者"
],
"def_en":"A one-page business plan adapted for social ventures. It separates beneficiaries (who gains) from payers (who funds), because here they can differ. ReLEAF fills in partners, activities, resources, channels, cost structure and revenue.",
"def_zh":"為社會事業調整的一頁式商業計畫。它把受益者（受惠者）與付費者（出資者）分開，因為兩者可能不同。ReLEAF 填入夥伴、活動、資源、通路、成本結構與收入。",
"cat":"business",
"src":"entrepreneurship#Social business model canvas",
"dom":"entrepreneurship"
},
{
"term":"Social enterprise",
"kw_en":[
"commercial revenue",
"social mission",
"not an NGO"
],
"kw_zh":[
"商業收入",
"社會使命",
"不是 NGO"
],
"def_en":"A business that earns money to pay for its own operation and a social goal, unlike an NGO that relies on donations. ReLEAF uses a fixed price of 2 times cost, a free pilot and later subsidies to help small farmers.",
"def_zh":"用商業收入維持營運並達成社會目標的事業，不同於靠捐款的 NGO。ReLEAF 以成本 2 倍的固定價格、免費試點與日後補貼來幫助小農。",
"cat":"business",
"src":"entrepreneurship#What is a social enterprise business model?",
"dom":"entrepreneurship"
},
{
"term":"Soil pot assay",
"kw_en":[
"real matrix",
"2-week-old plants",
"top drench"
],
"kw_zh":[
"真實介質",
"兩週大植株",
"由上淋洗"
],
"def_en":"Arabidopsis in pots to test protectants where salt moves and binds differently. ReLEAF used 14-day-old plants for salt and 10-day-old for heat, with a 100, 200, 300 mM NaCl drench.",
"def_zh":"把阿拉伯芥種在盆中，測試保護劑在鹽的移動與吸附都不同的環境。鹽害用 14 天大植株、熱害用 10 天大，以 100、200、300 mM NaCl 淋洗。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"SOM (serviceable obtainable market)",
"kw_en":[
"share you can win",
"hard to quantify",
"Taiwan plan"
],
"kw_zh":[
"能拿下的份額",
"難以量化",
"台灣計畫"
],
"def_en":"The share of the SAM you can realistically win in the near term. ReLEAF's page says SOM is hard to quantify; its real near-term target is the Taiwan plan of 226 paying hectares to break even.",
"def_zh":"短期內你實際能贏得的 SAM 份額。ReLEAF 頁面說 SOM 難以量化；實際的近期目標是台灣計畫中損益兩平所需的 226 付費公頃。",
"cat":"business",
"src":"entrepreneurship#Industry analysis",
"dom":"entrepreneurship"
},
{
"term":"Specific growth rate (r)",
"kw_en":[
"per hour",
"doubling time",
"0.286 h-1"
],
"kw_zh":[
"每小時",
"倍增時間",
"0.286 h-1"
],
"def_en":"How fast a culture grows per hour. Run 6 gave 0.286 ± 0.010 h-1, a doubling time of 145 min. Over the fitted window a straight line fit as well as an exponential.",
"def_zh":"培養物每小時的生長速度。run 6 得到 0.286 ± 0.010 h-1，倍增時間 145 分鐘。在擬合時段內，直線和指數的擬合一樣好。",
"cat":"model",
"src":"software",
"dom":"drylab"
},
{
"term":"Standard curve and extrapolation",
"kw_en":[
"six known points",
"3 to 0.093 ug/mL",
"outside curve is a guess"
],
"kw_zh":[
"六個已知濃度",
"3 至 0.093 ug/mL",
"曲線外只是估計"
],
"def_en":"Known concentrations used to convert signal into concentration. A sample reading beyond the lowest or highest standard is extrapolated. All four ACCD wells fell outside, so ReLEAF calls them extrapolations, not quantities.",
"def_zh":"用已知濃度把訊號換算成濃度。樣品讀值超出最低或最高標準品就是外插。四個 ACCD 孔全在曲線外，所以 ReLEAF 稱它們為外插，不是定量值。",
"cat":"assay",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Stratification",
"kw_en":[
"4 days at 4 °C",
"synchronises germination",
"breaks dormancy"
],
"kw_zh":[
"4 °C 四天",
"讓發芽同步",
"解除休眠"
],
"def_en":"A cold, dark period for seeds before growth. It lifts dormancy so seeds germinate together, which keeps differences between plants from coming from uneven germination.",
"def_zh":"種子生長前的低溫黑暗處理。它解除休眠，讓種子同時發芽，避免組間差異來自發芽不整齊。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"Stress index",
"kw_en":[
"fitted to harvest record",
"32,767 combinations",
"32% less error"
],
"kw_zh":[
"用收成紀錄擬合",
"32,767 種組合",
"誤差少 32%"
],
"def_en":"A score of how hard weather pushes a rice crop, with weights fitted to 25 years of county yields instead of expert judgment. It decides only whether to act, not how much.",
"def_zh":"衡量天氣對稻作壓力的分數，權重由 25 年縣市產量擬合，而不是靠專家判斷。它只決定要不要行動，不決定用量。",
"cat":"model",
"src":"model",
"dom":"drylab"
},
{
"term":"Stress index (plant)",
"kw_en":[
"root, weight, chlorophyll",
"matched control",
"near 1 is healthy"
],
"kw_zh":[
"根、重量、葉綠素",
"對照組比值",
"接近 1 為健康"
],
"def_en":"A score comparing each measurement with the unstressed control from the same experiment: near 1 is like the control, near 0 is severe impairment. Original numbers are kept beside it.",
"def_zh":"把每項量測與同一實驗的未逆境對照相比的分數：接近 1 像對照，接近 0 表示嚴重受損。原始數據仍並列保留。",
"cat":"model",
"src":"plant",
"dom":"plant"
},
{
"term":"STS3215 servo",
"kw_en":[
"serial bus servo",
"UART",
"replaced PCA9685"
],
"kw_zh":[
"串列匯流排伺服",
"UART 通訊",
"取代 PCA9685"
],
"def_en":"A 12 V servo driven over UART that drives the pinch valve and automated Luer valves. Chosen on Owl Lab's advice because the PCA9685 driver could stop at 85 degrees when told 90, risking a pressure spike.",
"def_zh":"透過 UART 驅動的 12 V 伺服，用於夾管閥與自動 Luer 閥。依 Owl Lab 建議選用，因為 PCA9685 驅動板下指令 90 度時可能停在 85 度，造成壓力突波。",
"cat":"hardware",
"src":"hardware-bioreactor#6.2",
"dom":"hardware"
},
{
"term":"STS3215 servo and Luer valve",
"kw_en":[
"12 V serial bus servo",
"5 units: 1 pinch, 4 Luer",
"replaced PCA9685"
],
"kw_zh":[
"12 V 序列匯流排伺服",
"5 顆：1 夾管、4 Luer",
"取代 PCA9685"
],
"def_en":"A 12 V bus servo driven over UART. Five are used: one on the pinch valve, four on automated Luer valves. Owl Lab advised it because the PCA9685 driver could stop at 85° when told 90°, and a missed valve can spike pressure.",
"def_zh":"以 UART 控制的 12 V 序列匯流排伺服馬達。系統用了五顆：一顆夾管閥、四顆自動 Luer 閥。Owl Lab 建議採用，因為原本的 PCA9685 驅動板下令 90° 時可能只轉到 85°，閥位不準會造成壓力突升。",
"cat":"hardware",
"src":"hardware-bioreactor#6.2 Teacher He, Owl Lab",
"dom":"hardware"
},
{
"term":"Subsidy",
"kw_en":[
"government help",
"lowers upfront cost",
"TARI"
],
"kw_zh":[
"政府補助",
"降低前期成本",
"TARI"
],
"def_en":"Money from government or partners that lowers what the buyer pays. Officials at Smart Agriweek said they would support products like ReLEAF; ReLEAF's own subsidy starts after Year 4.",
"def_zh":"政府或夥伴提供、降低買方支付金額的資金。Smart Agriweek 的官員表示願意支持像 ReLEAF 這樣的產品；ReLEAF 自己的補貼在第 4 年後才開始。",
"cat":"business",
"src":"entrepreneurship#Who pays and who benefits",
"dom":"entrepreneurship"
},
{
"term":"SubtiToolKit (STK)",
"kw_en":[
"Bacillus part kit",
"from Caro-Astorga",
"pSTK vectors"
],
"kw_zh":[
"枯草桿菌零件套組",
"來自 Caro-Astorga",
"pSTK 載體"
],
"def_en":"A bioengineering kit for B. subtilis and other Gram-positive bacteria, supplied to ReLEAF by Dr Joaquín Caro-Astorga. It provides the pSTK vectors and parts (RBS0, EEBD, B0015) used for all Level 0, 1 and 2 builds.",
"def_zh":"適用枯草桿菌與其他革蘭氏陽性菌的生物工程套組，由 Dr Joaquín Caro-Astorga 提供給 ReLEAF。提供所有 Level 0、1、2 建構用的 pSTK 載體與零件（RBS0、EEBD、B0015）。",
"cat":"biology",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"SWOT / PESTEL",
"kw_en":[
"internal and external",
"strengths to threats",
"six outside forces"
],
"kw_zh":[
"內部與外部",
"優勢到威脅",
"六種外部力量"
],
"def_en":"Two checklists. SWOT lists strengths, weaknesses, opportunities and threats. PESTEL looks at political, economic, social, technological, environmental and legal forces. ReLEAF uses both to find risks such as organic rules and membrane blockage.",
"def_zh":"兩種檢核表。SWOT 列出優勢、劣勢、機會與威脅；PESTEL 檢視政治、經濟、社會、科技、環境與法律力量。ReLEAF 用它們找出有機規範、膜堵塞等風險。",
"cat":"business",
"src":"entrepreneurship#SWOT analysis; entrepreneurship#PESTEL analysis",
"dom":"entrepreneurship"
},
{
"term":"TAM (total addressable market)",
"kw_en":[
"everyone who could buy",
"570 M farms",
"top of funnel"
],
"kw_zh":[
"所有可能買家",
"5.7 億農場",
"漏斗頂端"
],
"def_en":"The whole demand for a product if everyone who could use it did. ReLEAF's is about 570 million farms worldwide. It is a ceiling, not a forecast, because our plan models only Taiwan.",
"def_zh":"假設所有可能使用者都買時的總需求。ReLEAF 的 TAM 約為全球 5.7 億個農場。這是上限而非預測，因為我們的計畫只模擬台灣。",
"cat":"business",
"src":"entrepreneurship#Industry analysis",
"dom":"entrepreneurship"
},
{
"term":"Technical vs biological replicate",
"kw_en":[
"same sample repeated",
"independent cultures",
"pooled tube"
],
"kw_zh":[
"同一樣品重複",
"獨立培養",
"合併一管"
],
"def_en":"A technical replicate re-measures the same sample; a biological replicate is an independent culture or plant. ReLEAF chlorophyll uses three wells from one pooled tube, so error bars show assay spread, not plant-to-plant variation.",
"def_zh":"技術重複是重測同一個樣品；生物重複是獨立的培養或植株。ReLEAF 的葉綠素用同一合併管的三個孔，所以誤差線反映的是分析的離散，不是植株間的差異。",
"cat":"assay",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Technical vs independent replicate",
"kw_en":[
"same sample re-read",
"new experiment",
"n problem"
],
"kw_zh":[
"同樣本重讀",
"重新做實驗",
"n 的問題"
],
"def_en":"A technical replicate rereads one sample, such as three plate wells. An independent replicate repeats the whole experiment. ReLEAF's plant page says it needs at least three independent replicates per condition.",
"def_zh":"技術重複是重複讀同一個樣本（例如三個孔）；獨立重複是整個實驗重做。ReLEAF 植物頁承認每個條件至少需要三次獨立重複。",
"cat":"assay",
"src":"plant",
"dom":"plant"
},
{
"term":"Techno-economic analysis",
"kw_en":[
"cost per unit",
"break-even yield",
"not yet done"
],
"kw_zh":[
"每單位成本",
"損益兩平產量",
"尚未完成"
],
"def_en":"A calculation setting production and running cost against output to give cost per unit of protectant. The Biomanufacturing page says ReLEAF has only a hand-built prototype cost and has not done this analysis.",
"def_zh":"把生產與營運成本對照產出，算出每單位保護蛋白成本的分析。Biomanufacturing 頁說 ReLEAF 目前只有手工原型的成本，尚未做這項分析。",
"cat":"business",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"Techno-economic analysis (TEA)",
"kw_en":[
"cost per unit of product",
"break-even yield",
"not done"
],
"kw_zh":[
"每單位產品成本",
"損益兩平產量",
"尚未完成"
],
"def_en":"A study that sets production and operating cost against output to get cost per unit of product. The wiki says one would be needed and shows only the NT$83 028 prototype cost.",
"def_zh":"把生產與營運成本對照產量，算出每單位產品成本的研究。維基說需要做一份，目前只顯示 NT$83 028 的原型成本。",
"cat":"business",
"src":"biomanufacturing#Field Deployment",
"dom":"entrepreneurship"
},
{
"term":"Thermo-priming",
"kw_en":[
"37 °C for 5 days",
"then recovery",
"not heat shock"
],
"kw_zh":[
"37 °C 五天",
"再恢復",
"不是熱休克"
],
"def_en":"A prolonged, moderate heat exposure followed by recovery at normal temperature. ReLEAF copied it from Auverlot et al. because it resembles slow warming in fields better than a sudden heat shock.",
"def_zh":"持續而溫和的高溫處理，之後回到正常溫度恢復。ReLEAF 參考 Auverlot 等人，因為它比突然的熱休克更像田間緩慢升溫。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"TiO2 and SiO2 standards",
"kw_en":[
"non-growing particles",
"mass added is truth",
"silica is the iGEM standard"
],
"kw_zh":[
"不會生長的顆粒",
"加入質量為標準",
"矽膠是 iGEM 標準"
],
"def_en":"Particle suspensions used instead of culture to calibrate OD, because cells grow, settle and lyse. TiO2 (August) was cheaper; 1 µm silica (10 October) is iGEM's standard. Neither equals real cells.",
"def_zh":"用顆粒懸浮液代替菌液校正 OD，因為細胞會生長、沉降、裂解。TiO2（8 月）較便宜；1 µm 矽膠珠（10 月）是 iGEM 標準。兩者都不等於真正的細胞。",
"cat":"hardware",
"src":"hardware-photometer#5.2.1",
"dom":"hardware"
},
{
"term":"TiO2 standard",
"kw_en":[
"titanium dioxide",
"added by mass",
"23 August"
],
"kw_zh":[
"二氧化鈦",
"依質量添加",
"8 月 23 日"
],
"def_en":"A cheap non-growing scattering powder added by weight to the loop. Used first because it was already in the lab. The Pro agreed with the BioDrop to a median 3.8 percent, with R2 0.9999.",
"def_zh":"便宜、不會生長的散射粉末，依重量加進迴路。因為實驗室本來就有，先用它。Pro 與 BioDrop 的差距中位數 3.8%，R2 為 0.9999。",
"cat":"hardware",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Transfer to field crop",
"kw_en":[
"lab model",
"rice canopy factor",
"not yet tested"
],
"kw_zh":[
"實驗室模式",
"水稻冠層係數",
"尚未測試"
],
"def_en":"Moving results from Arabidopsis to a farm crop. ReLEAF has no crop trial; its dose model uses a modeled rice canopy factor of 2.44 (range 1.68 to 3.52).",
"def_zh":"把阿拉伯芥的結果推到農作物。ReLEAF 沒有作物實驗；劑量模型使用模型估計的水稻冠層係數 2.44（範圍 1.68 至 3.52）。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"Transmembrane pressure (TMP)",
"kw_en":[
"(feed + retentate)/2 - permeate",
"three transmitters",
"read as a trend"
],
"kw_zh":[
"(進料+回流)/2-滲出",
"三個變送器",
"看趨勢"
],
"def_en":"The pressure pushing across the membrane, from three transmitters. August series lacked the permeate channel so showed lumen drop only. In operation mean TMP was about 0.03 bar, small against the transmitter's stated 1 percent of full scale.",
"def_zh":"推動液體穿過膜的壓力，由三個變送器算出。8 月的資料沒有滲出側通道，只呈現管腔壓降。運轉時平均 TMP 約 0.03 bar，比變送器標示的滿量程 1% 還小。",
"cat":"hardware",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Trehalose and T6P",
"kw_en":[
"sugar protectant",
"growth arrest",
"protocol sample"
],
"kw_zh":[
"糖類保護劑",
"生長停滯",
"流程樣品"
],
"def_en":"A sugar that can protect cells from salt, but at 0.5 to 1 mM it can build trehalose-6-phosphate and stunt growth. ReLEAF used it only to validate the protocol, never in the circuit.",
"def_zh":"一種可保護細胞抵抗鹽的糖，但 0.5 至 1 mM 時可能累積 trehalose-6-phosphate 而抑制生長。ReLEAF 只用它驗證流程，從未放進電路。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"Truncation ladder",
"kw_en":[
"cut the N-terminus",
"1-23 7-23 9-23 15-23",
"9-23 is the production length"
],
"kw_zh":[
"切短 N 端",
"1-23、7-23、9-23、15-23",
"9-23 是生產長度"
],
"def_en":"A series of BoPEP4 constructs cut from the front end, to find how short it can be before the interface fails. 9-23 has 33% less mass; all four rungs went to the bench.",
"def_zh":"從 BoPEP4 前端逐步切短的一組構築，找出多短還不會破壞界面。9-23 質量少 33%；四個長度都已送到實驗室。",
"cat":"biology",
"src":"protein-design-sprints",
"dom":"drylab"
},
{
"term":"TSCA Part 725 / MCAN",
"kw_en":[
"US engineered microbes",
"90-day notice",
"exemption possible"
],
"kw_zh":[
"美國工程微生物",
"90 天通知",
"可能豁免"
],
"def_en":"EPA biotechnology rules under the Toxic Substances Control Act, 40 CFR Part 725. A Microbial Commercial Activity Notice is due 90 days before commercialising; some recipient organisms are exempt. ReLEAF's status is still to be determined.",
"def_zh":"EPA 依有毒物質管制法制定的生物技術規則（40 CFR Part 725）。商業化前 90 天須提出微生物商業活動通知 (MCAN)；部分受體生物可豁免。ReLEAF 的適用情形尚待確定。",
"cat":"law",
"src":"laws-and-regulations",
"dom":"biomanufacturing"
},
{
"term":"Unit economics",
"kw_en":[
"per unit",
"price minus cost",
"per hectare"
],
"kw_zh":[
"每單位",
"售價減成本",
"每公頃"
],
"def_en":"Revenue and cost for one unit of what you sell. ReLEAF uses one hectare: a farm pays about US$5550, it costs us about US$2775, leaving about US$2775 toward fixed costs and profit.",
"def_zh":"賣出一個單位所得的收入與成本。ReLEAF 以一公頃為單位：農場付約 5550 美元，我們成本約 2775 美元，剩下約 2775 美元用來支付固定成本與利潤。",
"cat":"business",
"src":"entrepreneurship#Variable cost and price per hectare",
"dom":"entrepreneurship"
},
{
"term":"Untreated, mock and negative controls",
"kw_en":[
"no protectant",
"equal liquid",
"TB or WB800"
],
"kw_zh":[
"不含保護劑",
"等量液體",
"TB 或 WB800"
],
"def_en":"Groups without protectant that get the same liquid volume (sterile water, TB medium, or WB800 culture). They separate the protectant's effect from the effect of the liquid or the culture.",
"def_zh":"不給保護劑但給等量液體（無菌水、TB 培養基或 WB800 菌液）的組別，用來把保護劑本身的效果與液體或菌液的影響分開。",
"cat":"assay",
"src":"plant",
"dom":"plant"
},
{
"term":"Value proposition",
"kw_en":[
"promise to customer",
"on-site factory",
"two in one"
],
"kw_zh":[
"對客戶的承諾",
"現場工廠",
"二合一"
],
"def_en":"The reason a customer should choose you. ReLEAF's is an on-site, on-demand field factory that senses stress and makes the protectant, instead of the farmer deciding when, where and how much to spray.",
"def_zh":"客戶選擇你的理由。ReLEAF 的價值主張是現場、隨需的田間工廠：自動感測壓力並生產保護劑，不用農民自己決定何時、何處、噴多少。",
"cat":"business",
"src":"entrepreneurship#Value proposition",
"dom":"entrepreneurship"
},
{
"term":"Variable cost",
"kw_en":[
"rises with each sale",
"parts and freight",
"US$2775 per ha"
],
"kw_zh":[
"隨每筆銷售增加",
"零件與運費",
"每公頃 2775 美元"
],
"def_en":"A cost that grows with each unit sold. For ReLEAF this is the hardware, sensors, cartridge, freight, set-up visits and warranty for each hectare, about US$2775.",
"def_zh":"隨每賣出一個單位而增加的成本。對 ReLEAF 來說是每公頃的硬體、感測器、補充匣、運費、安裝拜訪與保固，約 2775 美元。",
"cat":"business",
"src":"entrepreneurship#Variable cost and price per hectare",
"dom":"entrepreneurship"
},
{
"term":"ViennaRNA recoding",
"kw_en":[
"mRNA folding near start",
"unpaired probability",
"ranking is leader-specific"
],
"kw_zh":[
"起始附近的 mRNA 折疊",
"未配對機率",
"排名只適用該 leader"
],
"def_en":"A tool that predicts how mRNA folds. We recoded the start of each cargo to open the ribosome site. After the leader changed to RiboJ plus RBS0, six of eight ordered cassettes still beat wild type, not the two BoPep4 ones.",
"def_zh":"預測 mRNA 如何折疊的工具。我們重新編碼各基因起始處以打開核糖體結合位點。leader 換成 RiboJ 加 RBS0 之後，八個已訂購卡匣中有六個仍勝過野生型，但兩個 BoPep4 沒有。",
"cat":"software",
"src":"protein-design-sprints",
"dom":"drylab"
},
{
"term":"Wall shear and TMP",
"kw_en":[
"pressure and flow cross-check",
"agree to 2.8%",
"fouling trace"
],
"kw_zh":[
"壓力與流量互相驗證",
"相差 2.8%",
"結垢趨勢"
],
"def_en":"Wall shear is the force of flow on the membrane; TMP is trans-membrane pressure. The twin computes both from the pressure transducers and flow meter, which check each other, and tracks fouling from them.",
"def_zh":"壁剪應力是流體作用在膜上的力，TMP 是跨膜壓力。twin 由壓力傳感器與流量計算出兩者，兩種感測器互相驗證，並以此追蹤結垢。",
"cat":"hardware",
"src":"software",
"dom":"drylab"
},
{
"term":"Wall shear rate",
"kw_en":[
"flow past the wall",
"4881 s⁻¹ at floor",
"cells vs sweeping"
],
"kw_zh":[
"流過管壁的速度",
"最低轉速 4881 s⁻¹",
"掃膜與傷細胞的平衡"
],
"def_en":"How fast liquid is sheared at the fiber wall. High shear sweeps the membrane clean but can harm cells. ReLEAF's lowest pump setting gives 4881 s⁻¹ for eight fibers, in the upper half of the usual band.",
"def_zh":"液體在纖維壁被剪切的速度。剪切高能掃淨膜面，但可能傷害細胞。ReLEAF 最低的幫浦設定在 8 條纖維下為 4881 s⁻¹，落在常用範圍的上半部。",
"cat":"model",
"src":"biomanufacturing",
"dom":"biomanufacturing"
},
{
"term":"WB800",
"kw_en":[
"eight proteases deleted",
"protects secreted protein",
"production strain"
],
"kw_zh":[
"缺八種蛋白酶",
"保護分泌蛋白",
"生產菌株"
],
"def_en":"A 168 derivative lacking eight extracellular proteases (nprE, aprE, epr, bpr, mpr, nprB, vpr, wprA), so secreted proteins survive better. ReLEAF's host for the light circuit, light-plate runs and the later reactor runs.",
"def_zh":"168 的衍生株，缺少八種胞外蛋白酶（nprE、aprE、epr、bpr、mpr、nprB、vpr、wprA），分泌的蛋白質更容易存活。是 ReLEAF 光電路、光盤實驗與後期反應器運轉的宿主。",
"cat":"biology",
"src":"engineering",
"dom":"wetlab"
},
{
"term":"WB800 culture control",
"kw_en":[
"no protectant",
"medium effect",
"dilute 16x"
],
"kw_zh":[
"不含保護劑",
"培養液效應",
"稀釋 16 倍"
],
"def_en":"Bacillus subtilis WB800 culture without the protectant gene, used to isolate the medium's effect. It stunted plants at strong dilutions, so cultures were diluted at least 16-fold.",
"def_zh":"不含保護劑基因的枯草桿菌 WB800 菌液，用來分離培養液本身的效果。濃度高時會抑制植物，所以菌液至少稀釋 16 倍。",
"cat":"plant",
"src":"plant",
"dom":"plant"
},
{
"term":"Western blot",
"kw_en":[
"anti-His band",
"size and presence",
"not quantitative alone"
],
"kw_zh":[
"抗 His 條帶",
"大小與有無",
"單獨不能定量"
],
"def_en":"Proteins separated by size, then probed with an anti-His antibody to show whether the tagged protein is there and how big. ReLEAF used it for the reactor time course and the light plate; band sizes were not always the expected one.",
"def_zh":"蛋白質依大小分離後用抗 His 抗體偵測，看有沒有標籤蛋白與大小。ReLEAF 用於反應器時間序列與光盤實驗；條帶大小不一定符合預期。",
"cat":"assay",
"src":"results",
"dom":"wetlab"
},
{
"term":"Western blot (anti-His)",
"kw_en":[
"presence and size",
"PVDF membrane",
"37 kDa band"
],
"kw_zh":[
"有沒有、多大",
"PVDF 膜",
"37 kDa 條帶"
],
"def_en":"Proteins are separated by size on a gel, transferred to a membrane and detected through the His tag. It shows whether a band of the expected size exists, not how much. It was the cheap first screen before ELISA.",
"def_zh":"蛋白質在膠上依大小分離，轉印到膜上，再經 His 標籤偵測。它能顯示預期大小的條帶是否存在，不能告訴你有多少。它是 ELISA 之前便宜的初步篩選。",
"cat":"assay",
"src":"measurement",
"dom":"measurement"
},
{
"term":"Withdraw-one add-one ladder",
"kw_en":[
"pipetted volumes",
"50 mL loop",
"C stock x (1 - ((V-1)/V)^n)"
],
"kw_zh":[
"移液體積",
"迴路體積",
"濃度公式"
],
"def_en":"A way to build many concentrations: remove one volume of suspension, add one volume of stock, repeat. Concentration comes from the formula and pipetting, so no instrument under test sets the scale.",
"def_zh":"做出多個濃度的方法：取出一份懸浮液，補入一份原液，重複。濃度由公式和移液決定，所以被測儀器不會決定刻度。",
"cat":"hardware",
"src":"measurement",
"dom":"measurement"
},
{
"term":"α-ketobutyrate (α-KB)",
"kw_en":[
"ACCD product",
"what DNPH detects",
"activity unit"
],
"kw_zh":[
"ACCD 的產物",
"DNPH 偵測對象",
"活性單位"
],
"def_en":"The molecule released when ACC deaminase splits ACC (together with ammonia). The DNPH assay measures it; activity is reported as nmol α-KB per mL per hour, and one unit releases 1 µmol per hour.",
"def_zh":"ACC 去胺酶分解 ACC 時釋出的分子（連同氨）。DNPH 檢測它；活性以每毫升每小時 nmol α-KB 表示，一個單位為每小時釋出 1 µmol。",
"cat":"assay",
"src":"results",
"dom":"wetlab"
},
{
"term":"ΔP–Q curve (ΔP = aQ + bQ²)",
"kw_en":[
"friction plus minor losses",
"plumbing is 46–55%",
"R² 0.995"
],
"kw_zh":[
"摩擦加局部損失",
"管路佔 46–55%",
"R² 0.995"
],
"def_en":"The fitted link between flow Q and pressure drop ΔP: linear friction plus minor losses at valves and fittings. Running the loop with and without the module showed plumbing is 46 to 55% of the drop. R² was 0.995 on 16 August.",
"def_zh":"流量 Q 與壓降 ΔP 的擬合關係：一次項是層流摩擦，二次項是閥與接頭的局部損失。有、無模組各測一次，發現管路佔壓降的 46 至 55%。8 月 16 日的 R² 為 0.995。",
"cat":"hardware",
"src":"hardware-bioreactor#4.1 DBTL 3",
"dom":"hardware"
},
{
"term":"農友助手 (Farmer's Assistant)",
"kw_en":[
"LINE official account",
"stress alert, crop assistant",
"open-sourced bot"
],
"kw_zh":[
"LINE 官方帳號",
"壓力警報與作物小幫手",
"開源機器人"
],
"def_en":"ReLEAF's LINE platform for smallholders: news, product intro, heat-stress alerts, a crop assistant with AI, a farmer diary, feedback. Built after farmers struggled to find information; the auto-reply is offered to other teams.",
"def_zh":"ReLEAF 為小農做的 LINE 平台：最新消息、產品介紹、熱逆境警報、含 AI 的作物小幫手、農友日記、意見回饋。因農民難以找到資訊而建，自動回覆開放給其他團隊。",
"cat":"software",
"src":"human-practices#農友助手 LINE platform",
"dom":"ihp"
}
];
