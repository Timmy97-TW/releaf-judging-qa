var QUESTIONS = [
{
"q_en":"How does your photometer turn light into an OD600 number?",
"q_zh":"你們的光度計是怎麼把光變成 OD600 數字的？",
"type":"fact",
"tier":"A",
"pages":[
"measurement",
"hardware-photometer"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"sample over reference",
"blank ratio",
"times five"
],
"kw_zh":[
"樣品除以參考",
"空白比值",
"乘以五"
],
"a_en":"Two sensors do the work, one after the culture and one on a reference beam. The software takes their ratio, compares it with a blank taken on clean medium, and applies a log. Then it multiplies by five, because our flow cell is 2 millimetres and OD600 is quoted for 1 centimetre. Raw readings are stored, so any value can be recomputed. The limit: we never fitted a curve to the BioDrop.",
"a_zh":"兩個感測器負責，一個在菌液後面，一個在參考光束上。軟體取兩者的比值，跟乾淨培養基量的空白比較，再取對數。然後乘以五，因為我們的流動池是 2 毫米，而 OD600 是以 1 公分為準。原始讀值都有保存，所以任何數值都能重算。限制是：我們沒有拿 BioDrop 去擬合一條校正曲線。",
"trap_en":"Forgetting the reference sensor or the factor of 5 and describing it as a simple light meter.",
"trap_zh":"忘了參考感測器或乘 5 的係數，把它講成單純的照度計。",
"basis":"like KU Leuven-style 'how does it work' openers; Hardware 2021 UPenn: validate against commercial instrument",
"dom":"measurement",
"id":"q001"
},
{
"q_en":"How do you keep bubbles from ruining a reading?",
"q_zh":"你們怎麼避免氣泡毀掉一筆讀值？",
"type":"fact",
"tier":"A",
"pages":[
"measurement",
"hardware-photometer"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"burst of sixteen",
"median plus 3 MAD",
"retake above 50%"
],
"kw_zh":[
"16 次 burst",
"中位數加減 3 MAD",
"超過 50% 重測"
],
"a_en":"Each reading is a burst: four dark readings, then sixteen lit ones, with the first two lit readings dropped. We keep values within the median plus or minus three MAD, and if over half the burst is rejected we retake it and flag bubbling. The tube is also tilted so bubbles climb out. Honest limit: a cell full of air gives sixteen agreeing wrong readings, which MAD alone cannot catch.",
"a_zh":"每筆讀值是一段 burst：先 4 次暗讀值，再 16 次亮讀值，前兩次亮讀值捨棄。我們只留中位數加減 3 個 MAD 內的值，如果超過一半被剔除就重測並標記氣泡。管子也是傾斜的，讓氣泡自己爬出去。誠實的限制是：流動池整個充滿空氣時，會得到一致但全錯的讀值，單靠 MAD 抓不到。",
"trap_en":"Claiming MAD solves bubbles completely; the air slug case fooled it.",
"trap_zh":"說 MAD 完全解決氣泡；空氣塞的情況它就被騙過。",
"basis":"Hardware 2021 UPenn: biggest source of noise and how reduced",
"dom":"measurement",
"id":"q002"
},
{
"q_en":"What does the DNPH assay measure, and how?",
"q_zh":"DNPH 分析測的是什麼？怎麼測？",
"type":"fact",
"tier":"A",
"pages":[
"measurement",
"experiments"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"ACCD activity",
"alpha-ketobutyrate",
"540 nm on a plate"
],
"kw_zh":[
"ACCD 活性",
"α-ketobutyrate",
"96 孔盤 540 nm"
],
"a_en":"It measures whether ACC deaminase is still working. The enzyme cleaves ACC into alpha-ketobutyrate and ammonia, and DNPH turns the alpha-ketobutyrate into a coloured hydrazone read at 540 nanometres. We scaled the classic Penrose and Glick method down twenty-fold onto a 96-well plate. Limit: it is a product readout from single wells, so it says active or not, not a precise rate.",
"a_zh":"它測的是 ACC 脫胺酶是否還有作用。酵素把 ACC 切成 α-ketobutyrate 和氨，DNPH 把 α-ketobutyrate 變成有顏色的 hydrazone，在 540 nm 讀值。我們把 Penrose 和 Glick 的經典方法縮小二十倍，放到 96 孔盤。限制是：它是用產物當讀值，而且是單一孔，所以只能說有沒有活性，不是精確速率。",
"trap_en":"Mixing it up with ELISA: DNPH says working, ELISA says present.",
"trap_zh":"跟 ELISA 搞混：DNPH 看有沒有作用，ELISA 看有沒有蛋白質。",
"basis":"Munich 2025 style: what exactly is measured",
"dom":"measurement",
"id":"q003"
},
{
"q_en":"What is your ELISA standard curve, and over what range can you trust a number?",
"q_zh":"你們的 ELISA 標準曲線是什麼？數字在哪個範圍內可以相信？",
"type":"fact",
"tier":"A",
"pages":[
"measurement"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"six points duplicate",
"31.6 to 95.1 percent",
"outside is extrapolated"
],
"kw_zh":[
"六點雙重複",
"31.6 至 95.1%",
"範圍外是外插"
],
"a_en":"Six His-protein standards from 3 down to 0.093 micrograms per millilitre, each in duplicate with CV under 6 percent. A four-parameter logistic fit gives R squared 0.98 across 31.6 to 95.1 percent of maximum binding. The kit says re-assay anything outside 20 to 80 percent. Anything beyond the curve is an extrapolation, and we label it that way, which includes all four ACCD wells.",
"a_zh":"六個 His 蛋白標準品，從 3 到 0.093 微克每毫升，每點雙重複，CV 小於 6%。四參數 logistic 擬合在最大結合的 31.6 至 95.1% 之間 R 平方是 0.98。套組規定 20 至 80% 以外要重測。超出曲線的就是外插，我們也這樣標示，包括 ACCD 的四個孔。",
"trap_en":"Quoting a concentration without saying whether it sits inside the curve.",
"trap_zh":"報濃度卻沒說它是不是在曲線範圍內。",
"basis":"Munich 2025: LOD and LOQ, assay range",
"dom":"measurement",
"id":"q004"
},
{
"q_en":"Why median and MAD instead of an ordinary mean?",
"q_zh":"為什麼用中位數和 MAD，而不是一般的平均值？",
"type":"design",
"tier":"A",
"pages":[
"measurement",
"hardware-photometer"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"bubbles drag means",
"eleven algorithms replayed",
"kept symmetric MAD"
],
"kw_zh":[
"氣泡拉動平均",
"重播十一種演算法",
"保留對稱 MAD"
],
"a_en":"We expected bubbles to cause short one-sided drops, and a mean gets pulled toward those while a median barely moves. On 10 October we replayed eleven algorithms on the same raw bursts. In clean flow all agreed within 0.004 OD, so the choice hardly mattered. With bubbles our one-sided estimator failed, because a bubble brightens one build and darkens the other. So we kept symmetric MAD and added gates after it.",
"a_zh":"我們原本預期氣泡造成短暫的單邊下降，平均值會被拉過去，中位數卻幾乎不動。10 月 10 日我們把十一種演算法放在同一份原始 burst 上重播。流動乾淨時結果都在 0.004 OD 內，選哪個幾乎沒差。有氣泡時，我們的單邊估計法失敗了，因為氣泡在一個版本讓讀值變亮，在另一個版本卻變暗。所以我們保留對稱的 MAD，並在後面加上閘門。",
"trap_en":"Saying bubbles only block light, which our own data refuted.",
"trap_zh":"說氣泡只會擋光，這點被我們自己的資料推翻了。",
"basis":"Hardware 2021 UPenn: biggest source of error; Munich 2025: honest gap",
"dom":"measurement",
"id":"q005"
},
{
"q_en":"Why 600 nanometres and an amber LED?",
"q_zh":"為什麼選 600 奈米的琥珀色 LED？",
"type":"design",
"tier":"A",
"pages":[
"hardware-photometer",
"measurement"
],
"seat":"hw",
"backup":"wet1",
"kw_en":[
"standard for OD600",
"scattering by cells",
"between CcaSR peaks"
],
"kw_zh":[
"OD600 標準",
"細胞散射",
"夾在 CcaSR 兩峰之間"
],
"a_en":"Three reasons. OD600 is the standard way to report bacterial density, so we can compare with the BioDrop and published curves. At 600 nanometres cells dim the beam mainly by scattering, not by the medium absorbing. And amber sits between the green and red peaks that drive CcaSR, so watching the culture does not switch production on or off. The limit is that this reads turbidity, not cell number.",
"a_zh":"三個理由。OD600 是回報細菌密度的標準方式，所以能跟 BioDrop 和文獻曲線比較。在 600 奈米，菌液變暗主要是細胞散射，不是培養基吸收。而且琥珀色夾在驅動 CcaSR 的綠光和紅光兩個峰之間，所以監測菌液不會開關我們的生產。限制是：它讀的是混濁度，不是細胞數。",
"trap_en":"Forgetting the CcaSR reason, which is the one that ties the photometer to the circuit.",
"trap_zh":"忘了 CcaSR 這個理由，它才是把光度計和電路連起來的關鍵。",
"basis":"like INSA Lyon 2022: why that sensor over alternatives",
"dom":"measurement",
"id":"q006"
},
{
"q_en":"Why did you build two photometers, and which one runs the reactor?",
"q_zh":"為什麼做兩個光度計？反應器用哪一個？",
"type":"design",
"tier":"A",
"pages":[
"measurement",
"hardware-photometer"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"Pro sensitive",
"Slim linear and cheaper",
"Pro runs the loop"
],
"kw_zh":[
"Pro 較靈敏",
"Slim 線性好又便宜",
"迴路用 Pro"
],
"a_en":"The Pro costs US$371.78 and is about 5.3 times more sensitive, and it is the one that ran the reactor loop for 434 hours. The Slim swaps the lens and beam splitter for optical fibres, costs US$235.29, and was more linear on the full silica range, R squared 0.992 against 0.974. The limit: the Slim reads about one fifth of the Pro and has not run a long culture yet.",
"a_zh":"Pro 要 371.78 美元，靈敏度高約 5.3 倍，跑 434 小時迴路實驗的就是它。Slim 把透鏡和分光鏡換成光纖，要 235.29 美元，在完整二氧化矽範圍的線性較好，R 平方 0.992 對 0.974。限制是：Slim 讀值約為 Pro 的五分之一，也還沒長時間跑過菌液。",
"trap_en":"Calling the Slim simply better; it trades sensitivity and has no long run.",
"trap_zh":"把 Slim 說成單純比較好；它是用靈敏度換的，而且沒有長時間實驗。",
"basis":"Hardware 2021 NUS: why build, what was given up",
"dom":"measurement",
"id":"q007"
},
{
"q_en":"What does the second reference sensor buy you?",
"q_zh":"多一個參考感測器到底換到什麼？",
"type":"design",
"tier":"A",
"pages":[
"measurement",
"hardware-photometer"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"90:10 split",
"LED drift cancels",
"Slim fixed a 40% dip"
],
"kw_zh":[
"90:10 分光",
"LED 飄移抵消",
"Slim 修正 40% 下降"
],
"a_en":"A 90:10 beam splitter sends ten percent of the light to a sensor that never sees the culture. If the LED dims, both sensors dim together, the ratio holds, and drift is not read as growth over hundreds of hours. On 10 October a disturbance cut both Slim channels to about 60 percent, and with the reference the drift was only minus 0.0005 OD per minute. The Pro's reference did not respond the same way.",
"a_zh":"90:10 分光鏡把百分之十的光送到一個不經過菌液的感測器。LED 變暗時兩個感測器一起變暗，比值不變，所以幾百小時的飄移不會被誤讀成生長。10 月 10 日一次干擾讓 Slim 兩個通道降到約 60%，有了參考通道，漂移只有每分鐘負 0.0005 OD。Pro 的參考通道則沒有出現同樣的反應。",
"trap_en":"Saying the reference fixes everything; on the Pro the two paths did not respond equally.",
"trap_zh":"說參考通道什麼都能修；在 Pro 上兩條光路的反應並不一致。",
"basis":"Hardware 2021 UPenn: sensor drift",
"dom":"measurement",
"id":"q008"
},
{
"q_en":"How do you know your photometer is accurate?",
"q_zh":"你們怎麼知道光度計是準的？",
"type":"validate",
"tier":"A",
"pages":[
"measurement",
"hardware-photometer"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"weighed mass standards",
"3.8% from BioDrop",
"constant 0.12 OD offset"
],
"kw_zh":[
"稱重質量標準",
"與 BioDrop 差 3.8%",
"固定低 0.12 OD"
],
"a_en":"We judged it against mass, not only against another instrument. On 23 August we added titanium dioxide by weight, and raw Pro output agreed with the BioDrop to a median 3.8 percent, R squared 0.9999. On 10 October we repeated with 1 micron silica. The honest limit: on silica the Pro ran a constant 0.12 OD below the BioDrop, and neither standard is a living cell.",
"a_zh":"我們用質量來評斷，不只是跟另一台儀器比。8 月 23 日我們依重量加入二氧化鈦，Pro 原始輸出與 BioDrop 的差距中位數是 3.8%，R 平方 0.9999。10 月 10 日我們用 1 微米二氧化矽重做。誠實的限制是：在二氧化矽上 Pro 固定比 BioDrop 低約 0.12 OD，而且兩種標準品都不是活細胞。",
"trap_en":"Saying 'within 3.8% of the BioDrop' with no mention of the 0.12 OD offset or that the BioDrop is the weaker reference above OD 1.",
"trap_zh":"只說『跟 BioDrop 差 3.8%』，卻沒提 0.12 OD 的偏移，也沒提 BioDrop 在 OD 1 以上是比較弱的參考。",
"basis":"Hardware 2021 UPenn: how did you validate against a commercial instrument and how close",
"dom":"measurement",
"id":"q009"
},
{
"q_en":"Your reference, the BioDrop, loses accuracy above OD 1. How did you handle that?",
"q_zh":"你們的對照儀器 BioDrop 在 OD 1 以上會失準，你們怎麼處理？",
"type":"validate",
"tier":"A",
"pages":[
"hardware-photometer",
"measurement"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"Prof. Chang advice",
"dilute 2x then 4x",
"August runs undiluted"
],
"kw_zh":[
"張教授建議",
"先稀釋 2 倍再 4 倍",
"8 月沒稀釋"
],
"a_en":"Professor Chang told us that above OD 1 a cuvette sample must be diluted. From the 10 October silica run we diluted BioDrop samples two-fold between OD 1 and 2, four-fold above 2, then multiplied back. The August titanium runs were read undiluted, so we trust that comparison only up to about OD 1. Multiplying back also multiplies error, which is why the BioDrop looks irregular past OD 2.",
"a_zh":"張教授告訴我們，OD 1 以上比色管樣品必須稀釋。從 10 月 10 日的二氧化矽實驗開始，BioDrop 樣品在 OD 1 到 2 之間稀釋 2 倍、2 以上稀釋 4 倍，再乘回去。8 月的二氧化鈦是沒稀釋直接讀的，所以那次比較我們只信到約 OD 1。乘回去也會把誤差一起乘大，所以 BioDrop 在 OD 2 以上看起來不規則。",
"trap_en":"Claiming the 3.8 percent covers the whole range, when the undiluted BioDrop is only trustworthy to about OD 1.",
"trap_zh":"說 3.8% 涵蓋整個範圍，但沒稀釋的 BioDrop 只在約 OD 1 以內可信。",
"basis":"like Munich 2025: what is the reference",
"dom":"measurement",
"id":"q010"
},
{
"q_en":"How did you avoid tuning the analysis after seeing the data?",
"q_zh":"你們怎麼避免看了資料之後再去調整分析方法？",
"type":"validate",
"tier":"A",
"pages":[
"measurement"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"pre-registered",
"8 predictions, 5 failed",
"raw data published"
],
"kw_zh":[
"事先登記",
"8 項預測失敗 5 項",
"原始資料公開"
],
"a_en":"Before the 10 October run we committed the algorithm list, five metrics, selection rule, eight predictions and exclusion criteria to our repository. Only documented hardware failures or operator errors could be excluded. We then reported all eight predictions, and five were not supported, including that bubbles only darken a reading. The raw CSVs, replay scripts and pre-registration are public. The limit: this covers one run on one standard.",
"a_zh":"10 月 10 日實驗之前，我們把演算法清單、五個指標、選擇規則、八項預測和排除條件提交到儲存庫。只有有記錄的硬體故障或操作失誤才能排除。之後我們報告全部八項預測，其中五項沒有被支持，包括氣泡只會讓讀值變暗這一項。原始 CSV、重播程式和事先登記都公開。限制是：這只涵蓋一種標準品的一次實驗。",
"trap_en":"Saying all predictions came true; five did not, and that is the strength.",
"trap_zh":"說預測全部成真；其實五項失敗，而這正是這個做法的價值。",
"basis":"Munich 2025: honest gap; TAU-Israel 2025: pre-registered",
"dom":"measurement",
"id":"q011"
},
{
"q_en":"Do you do any replicates in your protein assays?",
"q_zh":"你們的蛋白質分析有做重複嗎？",
"type":"validate",
"tier":"A",
"pages":[
"measurement",
"results"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"duplicate wells on plate",
"two ELISA trials",
"time courses single wells"
],
"kw_zh":[
"盤上雙重複",
"兩次 ELISA",
"時間序列是單孔"
],
"a_en":"Within a plate, yes. Standards run in duplicate, each sample at two dilutions in duplicate, plus blank, non-specific and maximum-binding controls, and we ran two trials. But the reactor and light time courses are single wells, so we call them trends, not kinetics. We have not repeated those with independent biological cultures, and we say so on the wiki.",
"a_zh":"同一個盤內有。標準品雙重複，每個樣品兩種稀釋各雙重複，另外有空白、非專一結合和最大結合對照，而且我們做了兩次試驗。但反應器和光照的時間序列都是單孔，所以我們稱它們為趨勢，不是動力學。這些我們沒有用獨立的生物培養重複過，wiki 上也寫明了。",
"trap_en":"Saying n equals three; most time courses are n equals one.",
"trap_zh":"說 n 等於 3；其實大部分時間序列是 n 等於 1。",
"basis":"Munich 2025: Do you do any replicates? (n equals one)",
"dom":"measurement",
"id":"q012"
},
{
"q_en":"How do you know the DNPH signal is really ACC deaminase activity?",
"q_zh":"你們怎麼知道 DNPH 訊號真的是 ACC 脫胺酶的活性？",
"type":"validate",
"tier":"A",
"pages":[
"measurement"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"curve on every plate",
"subtract WB800 host",
"PLP fixed"
],
"kw_zh":[
"每盤都有標準曲線",
"扣掉 WB800 宿主",
"固定 PLP"
],
"a_en":"Three checks. Every value is read from a standard curve on the same plate, linear from 0 to 2.049 millimolar with R squared 0.9995, and we quote nothing above it. We subtract the untransformed WB800 host: without PLP the Csn construct matched the host, 57.9 against 59.7 nanomoles, while SamyQ with PLP gave 30 nanomoles more. The limit: those are single wells on one plate.",
"a_zh":"三個檢查。每個數值都從同一盤上的標準曲線讀取，0 到 2.049 mM 呈線性，R 平方 0.9995，超過的我們不引用。我們扣掉未轉殖的 WB800 宿主：沒有 PLP 時 Csn 構築與宿主相同，57.9 對 59.7 nmol，而加 PLP 的 SamyQ 多出 30 nmol。限制是：這些是同一盤上的單一孔。",
"trap_en":"Quoting R squared 0.950 for all eight levels, or comparing constructs without fixing PLP.",
"trap_zh":"引用八個濃度全擬合的 R 平方 0.950，或沒固定 PLP 就比較構築。",
"basis":"Munich 2025: controls and range",
"dom":"measurement",
"id":"q013"
},
{
"q_en":"How many replicates and what statistics sit behind your plant data?",
"q_zh":"你們的植物資料背後有幾個重複？用了什麼統計？",
"type":"validate",
"tier":"A",
"pages":[
"measurement",
"results"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"pooled tube per group",
"three technical wells",
"some charts untested"
],
"kw_zh":[
"每組合併一管",
"三個技術重複孔",
"部分圖沒做檢定"
],
"a_en":"For chlorophyll, each group's seedlings, 9 to 40, go into one tube and are read in three technical wells, shown as mean with SEM. Fresh weight is per group and root length comes from ImageJ traces. Some Results charts carry significance stars, but the trehalose and heat pretest charts were not tested. The limit: technical wells are not independent plants, so we read these as trends.",
"a_zh":"葉綠素是把每組 9 到 40 株幼苗放進一管，讀三個技術重複孔，用 mean with SEM 呈現。鮮重是每組一個數字，根長是用 ImageJ 描繪。Results 有些圖有顯著性星號，但 trehalose 和熱預試的圖沒有做檢定。限制是：技術重複孔不是獨立的植株，所以我們把這些當趨勢來讀。",
"trap_en":"Saying p-values prove rescue; the replicate unit is a pooled tube.",
"trap_zh":"說 p 值證明了拯救效果；其實重複單位是合併的一管。",
"basis":"Munich 2025: replicates; TAU-Israel 2025: stated weaknesses",
"dom":"measurement",
"id":"q014"
},
{
"q_en":"What controls do your plant assays use?",
"q_zh":"你們的植物實驗有哪些對照？",
"type":"validate",
"tier":"A",
"pages":[
"measurement"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"seven control groups",
"protectant without salt",
"empty-vector medium"
],
"kw_zh":[
"七種對照",
"不加鹽只加保護劑",
"空載體培養基"
],
"a_en":"Seven kinds. No salt and no protectant is the healthy baseline. Salt alone is what the protectant must beat. Protectant without salt tests whether it harms healthy plants. Equal volumes of water or TB medium remove volume as a hidden variable. CH peptide and trehalose are reference protectants, filtered medium from empty-vector Bacillus separates medium from protein, and a Western blot checks each sprayed batch. Most groups are one plate.",
"a_zh":"七種。不加鹽也不加保護劑是健康基準。只加鹽是保護劑必須打敗的對象。只加保護劑不加鹽，檢查它會不會傷害健康植物。加入等體積的水或 TB 培養基，排除體積這個隱藏變因。CH peptide 與 trehalose 是參考保護劑，空載體枯草桿菌的過濾培養基用來分辨是培養基還是蛋白質在起作用，每一批噴灑液還用 Western blot 確認。大多數組別只有一個培養皿。",
"trap_en":"Listing only 'control and treated' and missing the protectant-only and medium controls.",
"trap_zh":"只說『對照組和處理組』，漏掉只加保護劑與培養基的對照。",
"basis":"like Munich 2025: controls",
"dom":"measurement",
"id":"q015"
},
{
"q_en":"Why build your own photometer instead of using a commercial spectrophotometer?",
"q_zh":"為什麼自己做光度計，不用市售的分光光度計？",
"type":"compare",
"tier":"A",
"pages":[
"hardware-photometer",
"engineering"
],
"seat":"hw",
"backup":"biz",
"kw_en":[
"no sampling",
"sits in the loop",
"Slim half BioDrop price"
],
"kw_zh":[
"不用抽樣",
"裝在迴路裡",
"Slim 約為 BioDrop 一半"
],
"a_en":"A benchtop reader needs a sample drawn out, which interrupts long runs and risks contamination, and ReLEAF is meant to work outside a lab. Our notes say nobody sells an instrument that sits in the loop. The BioDrop we compared against costs about US$470, and the Slim is US$235.29 in parts. The limit: our output is raw and not traceable to a reference instrument, and we only compared with one reader.",
"a_zh":"桌上型讀數儀需要把樣品抽出來，這會打斷長時間培養還有污染風險，而 ReLEAF 的設計是要在實驗室外運作。我們的紀錄寫明沒有人賣能裝在迴路裡的儀器。我們拿來比對的 BioDrop 約 470 美元，Slim 的零件是 235.29 美元。限制是：我們的輸出是原始值，無法追溯到某個參考儀器，而且只跟一台讀數儀比過。",
"trap_en":"Arguing it is better than a BioDrop; the case is in-line operation and cost, not precision.",
"trap_zh":"主張它比 BioDrop 更好；真正的理由是在線運作和成本，不是精準度。",
"basis":"Hardware 2021 UPenn: what could commercial equipment not do",
"dom":"measurement",
"id":"q016"
},
{
"q_en":"Why a competitive His-tag ELISA and not Bradford or a sandwich ELISA?",
"q_zh":"為什麼用競爭型 His-tag ELISA，不用 Bradford 或夾心 ELISA？",
"type":"compare",
"tier":"A",
"pages":[
"measurement"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"Bradford reads total protein",
"sandwich needs antibody pair",
"one tag, one kit"
],
"kw_zh":[
"Bradford 讀總蛋白",
"夾心要抗體對",
"一個標籤一個套組"
],
"a_en":"Bradford measures total protein, so it cannot tell our protectants from Bacillus's own. A sandwich ELISA needs a matched antibody pair for every target. All three of our proteins carry the same His tag, so one antibody and one plate format cover ACC deaminase, LEA14 and BoPep4. The catch: it counts tagged protein whether or not it works, so we pair it with DNPH.",
"a_zh":"Bradford 測的是總蛋白，分不出我們的保護蛋白和枯草桿菌自己的蛋白。夾心 ELISA 每個目標都需要一對配對抗體。我們三個蛋白都有同一個 His 標籤，所以一種抗體、一種盤式就涵蓋 ACC 脫胺酶、LEA14 和 BoPep4。缺點是：不管蛋白有沒有作用它都會計入，所以我們搭配 DNPH 一起用。",
"trap_en":"Forgetting that ELISA says nothing about whether the enzyme works.",
"trap_zh":"忘了 ELISA 不能告訴你酵素有沒有作用。",
"basis":"Munich 2025: why this assay",
"dom":"measurement",
"id":"q017"
},
{
"q_en":"Why measure the product with DNPH and not detect the ammonia?",
"q_zh":"為什麼用 DNPH 測產物，而不是偵測氨？",
"type":"compare",
"tier":"B",
"pages":[
"measurement"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"carbonyl hydrazone",
"low medium background",
"sensitive enough"
],
"kw_zh":[
"羰基 hydrazone",
"培養基背景低",
"靈敏度夠"
],
"a_en":"DNPH reacts with the carbonyl of alpha-ketobutyrate, and we chose it because the ACC substrate does not interfere strongly, culture-medium background is lower than for ammonium detection, and it is sensitive enough to compare constructs. It also fits a 96-well plate. The costs: DNPH is hazardous to handle, the reaction runs overnight at 30 degrees, and our samples sit near the low end of the curve.",
"a_zh":"DNPH 會跟 α-ketobutyrate 的羰基反應。我們選它是因為 ACC 受質的干擾不大、培養基背景比偵測銨離子低，而且靈敏度夠用來比較不同構築。它也適合 96 孔盤。代價是：DNPH 處理有危險性，反應要在 30 度過夜，而且我們的樣品落在曲線的低端。",
"trap_en":"Calling DNPH a direct measure of enzyme amount; it reads product made.",
"trap_zh":"把 DNPH 說成直接測酵素量；它讀的是產生的產物。",
"basis":"Hardware 2021 NUS: choice of sensor/assay",
"dom":"measurement",
"id":"q018"
},
{
"q_en":"What happens above OD 2.5? Could the photometer follow a much denser culture?",
"q_zh":"OD 超過 2.5 會怎樣？光度計能跟得上更濃的菌液嗎？",
"type":"boundary",
"tier":"A",
"pages":[
"hardware-photometer",
"results",
"measurement"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"Pro limit about OD 2.5",
"slope 0.995 then 0.594",
"Slim untested higher"
],
"kw_zh":[
"Pro 上限約 OD 2.5",
"斜率 0.995 掉到 0.594",
"Slim 更高沒測"
],
"a_en":"On silica the Pro tracks the BioDrop with slope 0.995 up to about OD 2.5, then 0.594 above, so we treat 2.5 as the working limit. In run 6 the sample beam fell to a tenth of the reference near OD 2.7 and the gate marked low signal. The Slim should read denser cultures, maybe five times the BioDrop range, but we have not tested past the top of our series.",
"a_zh":"在二氧化矽上，Pro 到約 OD 2.5 以前與 BioDrop 的斜率是 0.995，之後掉到 0.594，所以我們把 2.5 當作工作上限。第 6 次實驗在約 OD 2.7 時樣品光降到參考的十分之一，閘門標記為低訊號。Slim 應該可以讀更濃的菌液，可能是 BioDrop 範圍的五倍，但我們沒有測過超出實驗範圍的部分。",
"trap_en":"Claiming the instrument reads to OD 3.7 because the log shows it; the gate flagged those values.",
"trap_zh":"因為紀錄上有 3.7 就說儀器能讀到 3.7；那些值是被閘門標記過的。",
"basis":"like INSA Lyon 2022: dynamic range",
"dom":"measurement",
"id":"q019"
},
{
"q_en":"Does your silica calibration tell you the number of bacteria?",
"q_zh":"你們的二氧化矽校正能告訴你細菌數量嗎？",
"type":"boundary",
"tier":"B",
"pages":[
"measurement",
"results"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"calibrates instrument not organism",
"bead vs rod",
"plate counts owed"
],
"kw_zh":[
"校正儀器不是生物",
"圓球對桿狀",
"還欠菌落計數"
],
"a_en":"Not yet. Silica calibrates the instrument, not the organism: a 1 micron bead is a sphere with refractive index 1.46, while a Bacillus cell is a rod nearer 1.33 to 1.41. So the ladder gives equivalent particle counts, not cell mass. A dilution series of washed cells and plate counts are still owed. The closest we did is run live culture through the same photometer for 434 hours.",
"a_zh":"還不能。二氧化矽校正的是儀器，不是生物：1 微米的珠子是圓球，折射率 1.46，枯草桿菌是桿狀，接近 1.33 到 1.41。所以梯度給的是等效顆粒數，不是細胞質量。洗過的細胞稀釋系列和菌落計數都還欠著。我們最接近的是讓活的菌液通過同一台光度計跑了 434 小時。",
"trap_en":"Reporting OD as cells per millilitre.",
"trap_zh":"把 OD 直接說成每毫升細胞數。",
"basis":"Munich 2025: what the number actually means",
"dom":"measurement",
"id":"q020"
},
{
"q_en":"Could another team use your His-tag ELISA for their own protein?",
"q_zh":"別的團隊能把你們的 His-tag ELISA 用在他們的蛋白質嗎？",
"type":"boundary",
"tier":"B",
"pages":[
"measurement"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"needs a His tag",
"transferable workflow",
"check the host control"
],
"kw_zh":[
"需要 His 標籤",
"流程可轉移",
"先看宿主對照"
],
"a_en":"If their protein carries a His tag, yes. We use a commercial Cayman kit, a six-point standard from 3 to 0.093 micrograms per millilitre, and blank, non-specific and maximum-binding wells, and the wiki says the workflow transfers to other microbial systems with His-tagged proteins. One caution from our own plates: the untransformed host read like our samples, so a team should check its host control first.",
"a_zh":"如果他們的蛋白質有 His 標籤，可以。我們用 Cayman 商品化套組，六點標準品從 3 到 0.093 微克每毫升，另有空白、非專一結合和最大結合孔，wiki 也說這個流程可轉移到其他表現 His 標籤蛋白的微生物系統。我們自己盤上的一個提醒是：未轉殖宿主的讀值跟樣品差不多，所以別的團隊應該先檢查宿主對照。",
"trap_en":"Saying it works for any protein without the tag requirement or the control warning.",
"trap_zh":"說任何蛋白質都能用，沒提標籤需求與對照的警告。",
"basis":"like Munich 2025: reuse by other teams",
"dom":"measurement",
"id":"q021"
},
{
"q_en":"How does the photometer data feed into your digital twin and models?",
"q_zh":"光度計的資料怎麼進到數位孿生和模型？",
"type":"integrate",
"tier":"A",
"pages":[
"results",
"measurement"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"twin skips gated stretches",
"fault flag 26.7 h early",
"growth rate registered 1 Oct"
],
"kw_zh":[
"孿生不用被標記的段落",
"提早 26.7 小時預警",
"10 月 1 日登記生長率"
],
"a_en":"The twin uses the inline OD600 but skips stretches the gate marks as low signal. A fault detector trained on the healthy first 120 hours of run 3 flagged the reference channel 26.7 hours before it failed. A forecast beat persistence by 41 percent at two hours on run 4. And a growth rate registered on 1 October, 0.2986 per hour, was met by run 6 at 0.286. No forecast has yet driven a light.",
"a_zh":"孿生使用在線 OD600，但跳過被閘門標為低訊號的段落。用第 3 次實驗健康的前 120 小時訓練的故障偵測器，在參考通道失效前 26.7 小時就標記了。預測在第 4 次實驗中，2 小時的預測比 persistence 好 41%。而 10 月 1 日登記的生長率 0.2986 每小時，第 6 次實驗得到 0.286，落在區間內。目前還沒有任何預測真的去驅動燈光。",
"trap_en":"Implying the whole loop from forecast to light is closed; it is not.",
"trap_zh":"暗示從預測到燈光的整個迴路已經接起來；其實沒有。",
"basis":"TAU-Israel 2025: pre-registered, stated weaknesses; Peking HSC 2025: model validation",
"dom":"measurement",
"id":"q022"
},
{
"q_en":"Did anything in your lab test change how the photometer works?",
"q_zh":"實驗室裡的測試有沒有改變光度計的運作方式？",
"type":"integrate",
"tier":"A",
"pages":[
"measurement",
"hardware-photometer"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"bubble premise failed",
"two gates added",
"2.44 down to 0.016 OD"
],
"kw_zh":[
"氣泡假設失敗",
"加了兩道閘門",
"2.44 降到 0.016 OD"
],
"a_en":"Yes. The 10 October silica run overturned our assumption that bubbles only darken a reading, so we kept symmetric MAD and added two gates: a spread gate at 0.03 OD, and a jump gate at 0.05 OD or 5 percent that needs three agreeing readings. The worst bubble error on the Pro fell from 2.44 to 0.016 OD. We also log every raw burst now. An air slug longer than 90 seconds can still pass.",
"a_zh":"有。10 月 10 日的二氧化矽實驗推翻了我們認為氣泡只會讓讀值變暗的假設，所以我們保留對稱 MAD，並加上兩道閘門：離散閘門 0.03 OD，以及跳動閘門 0.05 OD 或 5%，並要連續三筆一致。Pro 最糟的氣泡誤差從 2.44 降到 0.016 OD。我們現在也記錄每一個原始 burst。超過 90 秒的空氣塞仍然可能通過。",
"trap_en":"Presenting the gate as a cure; its own limit is a long air slug.",
"trap_zh":"把閘門講成根治；它自己的限制是長時間的空氣塞。",
"basis":"like Hardware 2021 UPenn: iterations after real samples",
"dom":"measurement",
"id":"q023"
},
{
"q_en":"How did outside feedback change your measurements?",
"q_zh":"外部回饋怎麼改變你們的測量？",
"type":"integrate",
"tier":"B",
"pages":[
"hardware-photometer",
"hardware-bioreactor"
],
"seat":"ihp",
"backup":"hw",
"kw_en":[
"Chang: dilute above OD 1",
"Owl Lab: plug-in module",
"builders fixed the guide"
],
"kw_zh":[
"張教授：OD 1 以上要稀釋",
"Owl Lab：插拔模組",
"組裝者改了指南"
],
"a_en":"Three changes. Professor Chang said samples above OD 1 must be diluted, so from 10 October our BioDrop reference was diluted and multiplied back. Teacher He at Owl Lab told us to use one mainboard, so the photometer was rebuilt to plug in as a module. And three classmates built the Slim from our guide on 15 and 16 October, which led to three guide changes. It was a small test, and Slim only.",
"a_zh":"三個改變。張教授說 OD 1 以上的樣品必須稀釋，所以從 10 月 10 日起我們的 BioDrop 對照都先稀釋再乘回。Owl Lab 的 He 老師建議用一塊主板，所以光度計重新設計成可插拔的模組。還有三位同學在 10 月 15、16 日照我們的指南組裝 Slim，結果指南改了三處。這是個小規模測試，而且只做了 Slim。",
"trap_en":"Claiming the guide is proven for the Pro; only the Slim was built by outsiders.",
"trap_zh":"宣稱 Pro 的指南也驗證過；外人只組裝了 Slim。",
"basis":"like Hardware 2021 UPenn: could a team with no engineering background rebuild it",
"dom":"measurement",
"id":"q024"
},
{
"q_en":"How do your assays fit together, from Western blot to plant test?",
"q_zh":"你們的分析方法怎麼串在一起，從 Western blot 到植物測試？",
"type":"integrate",
"tier":"A",
"pages":[
"measurement",
"results"
],
"seat":"wet2",
"backup":"plant",
"kw_en":[
"blot is present",
"ELISA how much",
"DNPH works, plant helps"
],
"kw_zh":[
"blot 看有沒有",
"ELISA 看多少",
"DNPH 看有用、植物看有益"
],
"a_en":"Each answers a different question, cheapest first. The Western blot asks whether a band of the right size is there. ELISA asks how much His-tagged protein, in micrograms per millilitre. DNPH asks whether ACC deaminase works. Plant assays ask whether it helps. The link showed in the reactor: ELISA peaked at 12 hours but activity at 18, so protein and function do not peak together. Those are single samples.",
"a_zh":"每個回答不同的問題，從最便宜的開始。Western blot 問正確大小的條帶有沒有出現。ELISA 問有多少 His 標籤蛋白，單位是微克每毫升。DNPH 問 ACC 脫胺酶有沒有作用。植物實驗問它有沒有幫助。在反應器裡就看得出這個關聯：ELISA 在 12 小時達高峰，活性卻在 18 小時，所以蛋白質和功能不會同時到頂。這些都是單一樣品。",
"trap_en":"Treating ELISA and DNPH as interchangeable; the wiki says never substitute them.",
"trap_zh":"把 ELISA 和 DNPH 當成可互換；wiki 明說不能互相取代。",
"basis":"Munich 2025 style: assay logic",
"dom":"measurement",
"id":"q025"
},
{
"q_en":"Your negative control reads about 5 micrograms per millilitre in the ELISA. What does that mean?",
"q_zh":"你們的陰性對照在 ELISA 讀到約 5 微克每毫升，這代表什麼？",
"type":"gap",
"tier":"A",
"pages":[
"measurement",
"results"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"WB800 host 5.45 and 4.56",
"same range as samples",
"no ranking possible"
],
"kw_zh":[
"WB800 宿主 5.45 與 4.56",
"跟樣品同範圍",
"無法排名"
],
"a_en":"It means the assay is reading something besides recombinant protein in those preparations. The untransformed WB800 host gave 5.452 and 4.562, the same range as four of six constructs, so we cannot say which construct expresses more. We published that table because the control failing is the result. What we did is separate evidence: Western blots through the His tag, and DNPH activity net of the host.",
"a_zh":"代表這些樣品裡，分析讀到的不只是重組蛋白。未轉殖的 WB800 宿主讀到 5.452 和 4.562，與六個構築中的四個同範圍，所以我們無法說哪個構築表達得比較多。我們還是公開那張表，因為對照失敗本身就是結果。我們實際有做的是另外的證據：透過 His 標籤的 Western blot，以及扣掉宿主的 DNPH 活性。",
"trap_en":"Explaining the control away or hiding the row.",
"trap_zh":"把對照的結果解釋掉，或把那一列藏起來。",
"basis":"Munich 2025: honest gap, never varied dose",
"dom":"measurement",
"id":"q026"
},
{
"q_en":"Are your ACC deaminase concentrations real quantities?",
"q_zh":"你們的 ACC 脫胺酶濃度是真正的定量值嗎？",
"type":"gap",
"tier":"A",
"pages":[
"measurement",
"hardware-bioreactor"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"all four ACCD wells off-curve",
"reactor samples above top standard",
"call them estimates"
],
"kw_zh":[
"ACCD 四孔都在曲線外",
"反應器樣品高於最高標準",
"稱為估計值"
],
"a_en":"Not strictly. In the two trials all four ACCD wells fell outside the standard curve, and in the reactor run most samples read above the top standard of 3 micrograms per millilitre, so those values are extrapolations. LEA14 was the steadiest, about 5 micrograms per millilitre, with paired dilutions within 10 percent, though its 1:1 wells also sit below the curve. We call ACCD figures estimates and rely on the DNPH assay for function.",
"a_zh":"嚴格來說不是。在兩次試驗中，ACCD 的四個孔都落在標準曲線之外，反應器那次大部分樣品高於 3 微克每毫升的最高標準品，所以那些數值是外插。LEA14 最穩定，約 5 微克每毫升，兩種稀釋差在 10% 內，不過它 1:1 的孔也在曲線之下。我們把 ACCD 的數字稱為估計值，功能則靠 DNPH 分析。",
"trap_en":"Quoting ACCD about 16 micrograms per millilitre or three times the others as a measured yield.",
"trap_zh":"把 ACCD 約 16 微克每毫升或三倍當成量測到的產量來引用。",
"basis":"Munich 2025: LOD and LOQ",
"dom":"measurement",
"id":"q027"
},
{
"q_en":"Does green light really give you a dial for protectant production?",
"q_zh":"綠光真的能當成控制保護蛋白產量的旋鈕嗎？",
"type":"gap",
"tier":"A",
"pages":[
"measurement",
"results"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"blots rise with time not intensity",
"red at full power not silent",
"switch not demonstrated"
],
"kw_zh":[
"blot 隨時間上升不隨強度",
"全強度紅光不是零",
"開關尚未證實"
],
"a_en":"Not yet. On the light plate, growth was the same under red and green, but expression rose with time and did not order itself by intensity, and red at full power was not silent. DNPH activity under light was real but moved with culture age: green beat red by fourteen times at 13 hours, then red led at 16. Our red LED peaks at 640 nanometres, while CcaS turns off at 672. The next experiment is one culture, one time, both colours, repeated.",
"a_zh":"還沒有。在光盤上，紅光和綠光下的生長一樣，但表達隨時間上升，並沒有依強度排序，全強度的紅光也不是零。光照下的 DNPH 活性是真的，但會隨培養時間改變：13 小時時綠光比紅光高十四倍，16 小時紅光反而領先。我們的紅光 LED 峰值在 640 奈米，而 CcaS 在 672 奈米才會關。下一個實驗是同一個培養、同一個時間點、兩種顏色，並且重複。",
"trap_en":"Repeating 'green light switches ACCD on' from the Results headline as proven.",
"trap_zh":"把 Results 摘要的『綠光開啟 ACCD』當成已證實的結論。",
"basis":"Peking HSC 2025 / Munich 2025: honest gap",
"dom":"measurement",
"id":"q028"
},
{
"q_en":"What went wrong in your 434 hour photometer run?",
"q_zh":"你們 434 小時光度計實驗哪裡出了問題？",
"type":"gap",
"tier":"A",
"pages":[
"hardware-photometer",
"measurement",
"results"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"clean to about 240 h",
"reference failed",
"quantisation steps"
],
"kw_zh":[
"約 240 小時前乾淨",
"參考通道失效",
"量化造成階梯"
],
"a_en":"The first 240 hours read as a growth curve, then the reference channel failed around 243 hours, around when the pump was replaced and knocked the optical axis. We also found 91.5 percent of reference readings sat on whole counts, which made false OD steps, and noise was ragged above OD 0.8. The run is useful because a fault detector flagged it at 216 hours. We read only about 240 hours as growth.",
"a_zh":"前 240 小時可以當成生長曲線讀，然後參考通道大約在 243 小時失效，那時換了幫浦，碰歪了光軸。我們也發現 91.5% 的參考讀值落在整數計數，造成假的 OD 階梯，OD 0.8 以上雜訊也變大。這次實驗仍有價值，因為故障偵測器在 216 小時就標記了。我們只把約前 240 小時當成生長來讀。",
"trap_en":"Saying the photometer detected the pump dying; nobody was watching the trace daily.",
"trap_zh":"說光度計偵測到幫浦壞掉；其實當時沒人每天看那條曲線。",
"basis":"Hardware 2021 UPenn: biggest source of noise",
"dom":"measurement",
"id":"q029"
},
{
"q_en":"Run 6 looks clean. Is that the acceptance gate, or did something else change?",
"q_zh":"第 6 次實驗看起來很乾淨。是接受閘門的功勞，還是還有別的改變？",
"type":"gap",
"tier":"B",
"pages":[
"measurement",
"results"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"permeate halved too",
"31 of 1083 held back",
"caught the dead path"
],
"kw_zh":[
"滲出液也減半",
"1083 筆擋下 31 筆",
"抓到光路失效"
],
"a_en":"Two things changed at once: the gate went on, and the permeate draw was halved from 24 to 12 millilitres per minute, which pulls in fewer bubbles. So the clean bubble record cannot be credited to the gate alone. What the gate did by itself was hold back 31 of 1083 readings, under 3 percent, and at 37 hours it caught the sample beam dropping to a tenth of the reference, so about 9.9 never entered the record.",
"a_zh":"有兩件事同時改變：閘門啟用了，滲出液抽取量也從 24 減半到 12 mL/min，抽得慢就吸進較少氣泡。所以乾淨的氣泡紀錄不能全算在閘門頭上。閘門自己做到的是擋下 1083 筆中的 31 筆，不到 3%，而且在 37 小時抓到樣品光降到參考的十分之一，所以約 9.9 的數值沒有進入紀錄。",
"trap_en":"Crediting the gate for the whole improvement.",
"trap_zh":"把整個改善都算在閘門頭上。",
"basis":"TAU-Israel 2025: stated weaknesses",
"dom":"measurement",
"id":"q030"
},
{
"q_en":"Your blot shows ACC deaminase at 37 kDa, but other blots show other sizes. Why?",
"q_zh":"你們的 blot 顯示 ACC 脫胺酶是 37 kDa，但其他 blot 的大小不一樣，為什麼？",
"type":"gap",
"tier":"B",
"pages":[
"measurement",
"results",
"engineering"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"37 vs 41 and 42 kDa",
"bands at 63 to 100 kDa",
"identity not settled by size"
],
"kw_zh":[
"37 對 41、42 kDa",
"63 至 100 kDa 的條帶",
"不能只靠大小確認"
],
"a_en":"We do see that spread, and we do not hide it. The constitutive blot shows one band near 37 kDa, other pages quote about 41 or 42, and the light-plate blots run between 63 and 100 kDa. The Csn and SamyQ constructs also ran at different sizes, and we guess oligomers, which is untested. So size alone does not settle identity; the DNPH activity and the His tag support it.",
"a_zh":"這個差異我們確實有看到，也沒有隱藏。恆定表達的 blot 在 37 kDa 附近有一條帶，其他頁面寫約 41 或 42，而光盤的 blot 落在 63 到 100 kDa。Csn 和 SamyQ 構築跑出來的大小也不同，我們猜是寡聚體，但還沒驗證。所以光靠大小不能確認身分，要靠 DNPH 活性和 His 標籤來支持。",
"trap_en":"Picking one band size and not acknowledging the others.",
"trap_zh":"挑一個條帶大小，卻不承認其他的。",
"basis":"Munich 2025: honest gap",
"dom":"measurement",
"id":"q031"
},
{
"q_en":"Could another team reproduce your measurements?",
"q_zh":"別的團隊能重現你們的測量嗎？",
"type":"impact",
"tier":"A",
"pages":[
"measurement",
"hardware-photometer"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"raw CSVs and scripts public",
"four working days",
"three outside builders"
],
"kw_zh":[
"原始 CSV 與程式公開",
"四個工作天",
"三位外部組裝者"
],
"a_en":"That is the design goal. The raw CSVs from both photometers, the eleven-algorithm replay script, the firmware ports and the pre-registration are on our iGEM GitLab, and the protocol runs in four working days on any photometer that can log raw samples. Three classmates built the Slim from the guide, one in about two hours, and soldering was the hard step. Only the Slim was tested by outside builders.",
"a_zh":"這正是我們的設計目標。兩台光度計的原始 CSV、十一種演算法的重播程式、韌體移植和事先登記都在我們的 iGEM GitLab，任何能記錄原始樣本的光度計，這個流程四個工作天就能跑完。三位同學照指南組裝 Slim，其中一位約兩小時完成，焊接是最難的一步。外部人員只測試過 Slim。",
"trap_en":"Saying the Pro guide was outsider-tested.",
"trap_zh":"說 Pro 的指南也有外人測試過。",
"basis":"Hardware 2021 UPenn: could a team rebuild from documentation",
"dom":"measurement",
"id":"q032"
},
{
"q_en":"What measurement would you do next to make your claims stronger?",
"q_zh":"你們接下來會做什麼測量來讓結論更站得住腳？",
"type":"impact",
"tier":"B",
"pages":[
"measurement",
"results"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"washed-cell dilution series",
"biological replicates",
"loading control and WB800 lane"
],
"kw_zh":[
"洗過細胞的稀釋系列",
"生物重複",
"loading control 與 WB800 泳道"
],
"a_en":"Three things the wiki names. For the photometer, a dilution series of washed Bacillus cells, because silica is not a cell. For the light switch, quantify blots against a loading control, add a WB800 lane without the plasmid, and repeat ELISA and DNPH with biological replicates. And the experiment that would settle the switch: one culture, one maturation time, both colours, repeated.",
"a_zh":"wiki 上寫明的三件事。光度計方面，做洗過的枯草桿菌細胞稀釋系列，因為二氧化矽不是細胞。光控開關方面，用 loading control 把 blot 定量，加一條沒有質體的 WB800 泳道，並用生物重複再做 ELISA 和 DNPH。還有能解決開關問題的實驗：同一個培養、同一個成熟時間、兩種顏色、重複做。",
"trap_en":"Listing new features instead of closing the gaps the wiki already names.",
"trap_zh":"列一堆新功能，而不是補上 wiki 已經指出的缺口。",
"basis":"DTU 2025: which experiment first; Munich 2025: one plate fixes it",
"dom":"measurement",
"id":"q033"
},
{
"q_en":"What can your fault detection give a farmer in practice?",
"q_zh":"你們的故障偵測對農民實際有什麼幫助？",
"type":"impact",
"tier":"B",
"pages":[
"results",
"measurement"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"flagged 26.7 h early",
"proposed leak and blockage alarms",
"none fired on real fault"
],
"kw_zh":[
"提早 26.7 小時",
"提議的洩漏與阻塞警報",
"沒有真正觸發過"
],
"a_en":"The idea is an early warning when a sensor channel is going bad, so a long run is not trusted blindly. The autoencoder flagged the reference beam 26.7 hours before failure, with a 6.1 percent false-alarm rate. For flow and pressure we propose a leak alarm at a sudden drop and a blockage alarm above about 1.3 times the baseline. All of it is tested on one failure, and none of the alarms has fired on a real fault.",
"a_zh":"概念是當某個感測器通道快壞掉時提早預警，讓長時間培養不會被盲目相信。自編碼器在失效前 26.7 小時標記了參考光束，誤報率 6.1%。對流量和壓力，我們提議在突然下降時發出洩漏警報，在高於基準約 1.3 倍時發出阻塞警報。這些都只用一次故障測試過，警報也還沒有在真正的故障中觸發過。",
"trap_en":"Presenting thresholds as validated; they are proposed from calibration runs.",
"trap_zh":"把門檻說成已驗證；它們只是根據校正實驗提議的。",
"basis":"like Peking HSC 2025: validation of simulations; real world next step",
"dom":"measurement",
"id":"q034"
},
{
"q_en":"What membrane do you use in the bioreactor, and what exactly does it do?",
"q_zh":"你們的生物反應器用什麼薄膜？它實際上做什麼？",
"type":"fact",
"tier":"A",
"pages":[
"hardware-bioreactor"
],
"seat":"hw",
"backup":"wet2",
"kw_en":[
"mPES 0.2 µm",
"11 fibers 200 cm²",
"size, not molecule"
],
"kw_zh":[
"mPES 0.2 µm",
"11 條纖維 200 cm²",
"依尺寸不依分子"
],
"a_en":"It is a Cobetter mPES hollow-fiber module with 0.2 µm pores, 200 cm² of area and 11 fibers, each 1 mm wide and 0.60 m long. The culture runs inside the fibers. Anything smaller than 0.2 µm, including the secreted enzyme, crosses to the shell side; whole cells cannot. It sorts by size, not by molecule, so vesicles and debris pass too.",
"a_zh":"這是 Cobetter 的 mPES 中空纖維模組，孔徑 0.2 µm、面積 200 cm²、11 條纖維，每條內徑 1 mm、長 0.60 m。菌液在纖維內流動，小於 0.2 µm 的東西，包括分泌出來的酵素，會穿過到殼側，完整的細胞過不去。它依尺寸篩選，不是依分子，所以囊泡和碎屑也會通過。",
"trap_en":"Saying the membrane blocks everything except the protein. The engineering page withdrew an old 50 kDa cut-off claim; it is 0.2 µm microfiltration.",
"trap_zh":"說薄膜只讓蛋白質通過。Engineering 頁已撤回舊的 50 kDa 截留分子量說法；它是 0.2 µm 微過濾。",
"basis":"like UPenn 2021: what exactly is the device",
"dom":"hardware",
"id":"q035"
},
{
"q_en":"What does your bioreactor cost to build?",
"q_zh":"你們的生物反應器造價多少？",
"type":"fact",
"tier":"A",
"pages":[
"hardware-bioreactor",
"biomanufacturing"
],
"seat":"hw",
"backup":"biz",
"kw_en":[
"US$1022.67 known parts",
"membrane US$245",
"list incomplete"
],
"kw_zh":[
"已知零件 US$1022.67",
"薄膜 US$245",
"清單不完整"
],
"a_en":"The known parts on our materials list add up to US$1022.67. The biggest lines are the hollow-fiber membrane at US$245 and the Pro photometer, US$371.78, which sits inside that total. The controller, mainboard, KOH pump and stir bar are not on the list yet, so the true figure is higher. The business page puts the whole prototype, with the bacterial kit, near NT$83,000, about US$2800.",
"a_zh":"材料清單上已知的零件總共 US$1022.67。最大的是薄膜 US$245，以及 Pro 光度計 US$371.78，後者已包含在總額內。控制器、主板、KOH 幫浦和攪拌子還沒列入，所以實際金額更高。商業頁面把整個原型加上細菌套組算在約 NT$83,000，大約 US$2800。",
"trap_en":"Quoting US$1022.67 as the full cost. The page itself says it is only the known costs and the list counts four pressure sensors where the rig runs three.",
"trap_zh":"把 US$1022.67 當成全部成本。頁面自己說這只是已知成本，而且清單算了四個壓力感測器，實驗台只用三個。",
"basis":"like Bank 38: may I ask about the cost",
"dom":"hardware",
"id":"q036"
},
{
"q_en":"How big is the commercial unit, and has it been built?",
"q_zh":"商用機器多大？已經做出來了嗎？",
"type":"fact",
"tier":"B",
"pages":[
"hardware-bioreactor",
"description"
],
"seat":"hw",
"backup":"biz",
"kw_en":[
"400 x 240 x 620 mm",
"not built yet",
"output unknown"
],
"kw_zh":[
"400 x 240 x 620 mm",
"還沒做出來",
"產量未知"
],
"a_en":"About 400 by 240 by 620 mm, a cabinet that stands beside the crop. It keeps the same one-liter loop, with a 7-inch touchscreen, four pressure sensors, and pH and temperature probes. It has not been built. We do not know its output per day, power draw or weight yet, because those need a built unit. What we built and ran is the open lab rack on a 600 by 900 mm panel.",
"a_zh":"大約 400 x 240 x 620 mm，是放在作物旁邊的機櫃。它保留同樣的 1 L 迴路，有 7 吋觸控螢幕、四個壓力感測器，以及 pH 與溫度探頭。它還沒有做出來。每日產量、耗電和重量目前都不知道，因為需要做出實機才能量。我們實際建造並運轉的是裝在 600 x 900 mm 面板上的開放式實驗台。",
"trap_en":"Describing the cabinet as a tested prototype. Everything we ran was the lab rack in an incubator.",
"trap_zh":"把機櫃說成已測試的原型。我們實際跑的都是在培養箱裡的實驗台。",
"basis":"like NUS 2021: does it scale beyond a flask",
"dom":"hardware",
"id":"q037"
},
{
"q_en":"What wavelength does your photometer use, and why that one?",
"q_zh":"你們的光度計用什麼波長？為什麼選它？",
"type":"fact",
"tier":"A",
"pages":[
"hardware-photometer"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"600 nm amber",
"standard OD600",
"between CcaS peaks"
],
"kw_zh":[
"600 nm 琥珀光",
"標準 OD600",
"位於 CcaS 兩峰之間"
],
"a_en":"600 nm, from an amber LED through a 2 mm flow cuvette. Software scales the reading by five to the standard 1 cm path. We chose it for three reasons: OD600 is the standard so readings compare with the BioDrop, at 600 nm the culture dims the beam mainly by scattering, and amber sits between the green and red peaks of CcaS/CcaR, so the photometer does not switch production on or off.",
"a_zh":"600 nm，用琥珀色 LED 穿過 2 mm 的流動比色槽。軟體把讀值乘五，換算成標準 1 cm 光徑。選它有三個理由：OD600 是標準，所以能和 BioDrop 比較；600 nm 下菌液主要靠散射使光變弱；琥珀光位於 CcaS/CcaR 的綠光與紅光峰之間，所以光度計不會誤開關生產。",
"trap_en":"Mixing it up with the 520 or 535 nm green that drives the circuit. The photometer light is deliberately a different color.",
"trap_zh":"把它和啟動電路的 520 或 535 nm 綠光搞混。光度計的光刻意選不同顏色。",
"basis":"like INSA 2022: why that sensor",
"dom":"hardware",
"id":"q038"
},
{
"q_en":"How many bioreactor runs have you done, and what was the longest?",
"q_zh":"你們跑了幾次生物反應器？最長多久？",
"type":"fact",
"tier":"A",
"pages":[
"hardware-bioreactor",
"software",
"development"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"7 runs on twin page",
"116 h integrated",
"77 h clean"
],
"kw_zh":[
"twin 頁列 7 次",
"整合運轉 116 小時",
"最長乾淨 77 小時"
],
"a_en":"The Digital Twin table lists seven runs from June to October. Four were fully integrated: 1 September, 8, 14 and 17 October. The first integrated run lasted 116 hours, with 102 hours logged. The longest clean run was 77 hours in October. Separately, the photometer logged 434 hours on a wild-type culture. Other pages count three or six runs, so I use the twin table.",
"a_zh":"Digital Twin 的表列出六月到十月共七次運轉，其中四次是完整整合：9 月 1 日，以及 10 月 8、14、17 日。第一次整合運轉 116 小時，記錄到 102 小時。最長的乾淨運轉是 10 月的 77 小時。另外，光度計在野生型菌液上記錄了 434 小時。其他頁面寫三次或六次，我以 twin 的表為準。",
"trap_en":"Quoting one number without saying which page. Judges may have read the summary that says three integrated runs, or Development's six.",
"trap_zh":"只說一個數字卻不說根據哪一頁。評審可能讀過寫三次整合運轉的摘要，或 Development 的六次。",
"basis":"like Bank 36: how could you scale this (numbers must match)",
"dom":"hardware",
"id":"q039"
},
{
"q_en":"Why did you move from releasing bacteria on the roots to a bioreactor?",
"q_zh":"你們為什麼從把細菌放在根部改成用生物反應器？",
"type":"design",
"tier":"A",
"pages":[
"hardware-bioreactor",
"description"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"biosafety first",
"release is uncontrollable",
"contain the organism"
],
"kw_zh":[
"生物安全優先",
"釋放後無法控制",
"把菌關在機器裡"
],
"a_en":"Biosafety was the main reason. Once a transgenic organism is released, its expression, dose and spread can no longer be controlled. Also, lab strains of B. subtilis lack motility and biofilm, so they would struggle in a field anyway. So we keep the organism in a machine and send out only its product. That turned a release problem into a containment problem. Experts like Prof. Chen and Dr. Brophy pushed us that way.",
"a_zh":"主要原因是生物安全。基因改造生物一旦釋放，它的表現、劑量和擴散就再也無法控制。而且實驗室的 B. subtilis 菌株缺乏運動能力和生物膜，在田間本來就很難存活。所以我們把菌留在機器裡，只送出它的產物。這把釋放問題變成圍阻問題。陳教授和 Brophy 博士等專家也把我們推向這個方向。",
"trap_en":"Saying the bacteria 'cannot survive anyway' as the main reason. The main reason on the page is loss of control over dose and spread.",
"trap_zh":"把『反正活不了』當主要理由。頁面上的主因是劑量與擴散失控。",
"basis":"like NUS 2021: why build your own instead",
"dom":"hardware",
"id":"q040"
},
{
"q_en":"Why did you add a pinch valve to the bioreactor?",
"q_zh":"你們為什麼在生物反應器加夾管閥？",
"type":"design",
"tier":"A",
"pages":[
"hardware-bioreactor"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"no force across wall",
"closing raises TMP",
"20 to 30 mL per minute"
],
"kw_zh":[
"沒有力量推過膜",
"關閉提高 TMP",
"每分鐘 20 至 30 mL"
],
"a_en":"Prof. Chang pointed out in June that nothing pushed the protectant from the lumen to the shell side. A higher flow only recirculates fluid. So a servo pinch valve clamps the return line and raises transmembrane pressure. In run 7, closing it for one minute lifted mean TMP from about 0.03 to 0.16 bar and gave roughly 20 to 30 mL of permeate. We chose a servo over a stepper because a stepper lets go when power is cut.",
"a_zh":"張教授在六月指出，沒有任何東西把保護蛋白從管腔推向殼側，單純加大流量只會讓液體循環。所以我們用伺服夾管閥夾住回流管，提高跨膜壓差。第 7 次運轉中，關閉一分鐘讓平均 TMP 從約 0.03 升到 0.16 bar，得到約 20 至 30 mL 滲透液。選伺服不選步進馬達，因為步進馬達斷電就會鬆開。",
"trap_en":"Claiming the valve was our own idea. It came from Prof. Chang's review; say so.",
"trap_zh":"說夾管閥是我們自己的點子。它來自張教授的審查，要講出來。",
"basis":"like LCG 2024: expert changed a hardware requirement",
"dom":"hardware",
"id":"q041"
},
{
"q_en":"Why did you build an in-line photometer with a reference channel and a 2 mm path?",
"q_zh":"你們為什麼要做有參考通道、2 mm 光徑的在線光度計？",
"type":"design",
"tier":"A",
"pages":[
"hardware-photometer"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"no hand sampling",
"reference cancels drift",
"2 mm avoids saturation"
],
"kw_zh":[
"不用手動抽樣",
"參考通道抵消漂移",
"2 mm 避免飽和"
],
"a_en":"A bioreactor on a farm has nobody to sample it, and hand sampling disturbs the culture and risks contamination. So the photometer reads inside the loop. A beam splitter sends 10% of the light to a reference sensor, so LED drift cancels in the ratio. The 2 mm cuvette keeps a dense culture from saturating, and software multiplies by five to report on a 1 cm basis.",
"a_zh":"農場上的生物反應器沒有人可以抽樣，而且手動抽樣會擾動培養並有污染風險，所以光度計直接在迴路內讀值。分光器把 10% 的光送到參考感測器，LED 漂移就在比值中抵消。2 mm 比色槽避免濃的菌液讀值飽和，軟體再乘五換算成 1 cm 光徑。",
"trap_en":"Saying the reference channel makes the reading 'accurate'. It removes LED drift only; it failed after about 240 h in the long run.",
"trap_zh":"說參考通道讓讀值『準確』。它只抵消 LED 漂移；在長時間運轉中約 240 小時後它也失效了。",
"basis":"like UPenn 2021: biggest source of noise and how reduced",
"dom":"hardware",
"id":"q042"
},
{
"q_en":"How did you deal with bubbles in the photometer?",
"q_zh":"你們怎麼處理光度計裡的氣泡？",
"type":"design",
"tier":"B",
"pages":[
"hardware-photometer",
"measurement"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"tilt so bubbles rise",
"median and MAD",
"two acceptance gates"
],
"kw_zh":[
"傾斜讓氣泡上浮",
"中位數與 MAD",
"兩道接受閘"
],
"a_en":"In three steps. A horizontal path trapped bubbles, so we stood it up, then tilted the column 7.5 degrees so there is no flat surface; most bubbles then leave in about a quarter of a second. Software takes a burst of 16, uses the median and rejects beyond 3 MAD. Last, two gates catch air slugs, cutting the worst bubble error from 2.44 to 0.016 OD.",
"a_zh":"分三步。水平光路會卡住氣泡，所以我們把它立起來，再把整個光柱傾斜 7.5 度，讓內部沒有平面；多數氣泡約四分之一秒內離開。軟體每次讀 16 個、取中位數、剔除超過 3 MAD 的值。最後兩道閘門抓空氣塞，把最壞的氣泡誤差從 2.44 降到 0.016 OD。",
"trap_en":"Quoting 10 degrees. The Pro base is 7.5 degrees and the Slim wedge 10; Development and Engineering say 10 for the Pro, so know which you mean.",
"trap_zh":"說 10 度。Pro 底座是 7.5 度、Slim 楔形是 10 度；Development 與 Engineering 把 Pro 寫成 10 度，要清楚你指哪一個。",
"basis":"like UPenn 2021: biggest noise source",
"dom":"hardware",
"id":"q043"
},
{
"q_en":"Why do you use PWM and LED matching in the light plate?",
"q_zh":"你們的光盤為什麼同時用 PWM 和 LED 配對？",
"type":"design",
"tier":"A",
"pages":[
"hardware-diopal"
],
"seat":"hw",
"backup":"wet1",
"kw_en":[
"40 LEDs measured",
"groups within 0.4 to 1.8%",
"tiers set by PWM"
],
"kw_zh":[
"量了 40 顆 LED",
"組內差異 0.4 至 1.8%",
"強度靠 PWM"
],
"a_en":"We measured all 40 LEDs one by one. Green varied by 26% and red by 22%. Matching them in fours brought each group within 0.4 to 1.8%, so the four replicates get the same light. But matching did not give three distinct intensity levels, so low, mid and high are set by PWM in code, about 2%, 12% and 100% duty. Matching gives consistency; software gives the dose.",
"a_zh":"我們逐顆量了 40 顆 LED。綠光相差 26%、紅光相差 22%。四顆一組配對後，每組差異在 0.4 至 1.8% 內，所以四個重複得到相同的光。但配對沒有做出三個明顯不同的強度，所以低、中、高在程式裡用 PWM 設定，約 2%、12%、100% 工作週期。配對提供一致性，軟體提供劑量。",
"trap_en":"Saying matching sets the three intensities. It does not; it only makes columns consistent.",
"trap_zh":"說配對決定了三種強度。不是；它只讓各欄一致。",
"basis":"like NUS 2021: same dose to every culture",
"dom":"hardware",
"id":"q044"
},
{
"q_en":"Why did you design a floating plate for hydroponics?",
"q_zh":"你們為什麼設計漂浮式水耕板？",
"type":"design",
"tier":"B",
"pages":[
"hardware-hydroponics"
],
"seat":"hw",
"backup":"plant",
"kw_en":[
"level drifts",
"floats with the medium",
"freeboard unmeasured"
],
"kw_zh":[
"液面會漂移",
"隨培養液浮動",
"乾舷未實測"
],
"a_en":"A fixed plate needs the medium level set by hand, and the level falls as plants drink and liquid evaporates, so conditions drift between replicates. A plate that floats keeps the roots at one depth. It carries 13 seedlings on 42.27 cm³ of sealed air and prints as 16 pieces. The limit: the predicted freeboard is 4.8 mm, but no printed plate has been weighed or measured.",
"a_zh":"固定的板需要手動設定液面，而植物吸水與蒸發會讓液面下降，造成重複之間的條件漂移。會浮的板讓根部維持同一深度。它用 42.27 cm³ 的密封空氣承載 13 株幼苗，由 16 件列印而成。限制是：預測乾舷 4.8 mm，但從來沒有秤過或量過實際列印的板。",
"trap_en":"Claiming the 4.8 mm freeboard was verified. It is computed from the STL files only.",
"trap_zh":"說 4.8 mm 乾舷已驗證。它只是由 STL 檔計算出來的。",
"basis":"like NUS 2021: how did iterations change",
"dom":"hardware",
"id":"q045"
},
{
"q_en":"What safety did you build into the hardware?",
"q_zh":"你們在硬體裡設計了哪些安全措施？",
"type":"design",
"tier":"A",
"pages":[
"safety-and-security",
"hardware-diopal",
"hardware-bioreactor"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"BSL-1 B. subtilis",
"5 V and 3.3 V logic",
"peroxide with gloves"
],
"kw_zh":[
"BSL-1 的 B. subtilis",
"5 V 與 3.3 V 邏輯",
"過氧化氫戴手套"
],
"a_en":"Biological safety is mostly physical: BSL-1 work with non-pathogenic B. subtilis, the 0.2 µm membrane, and waste autoclaved at 121 °C for 15 to 30 minutes or bleached. Electrically, the instruments run at 5 V and 3.3 V, with pumps and servos on a separate 12 V rail, and the LPA guide says unplug before rewiring. Hydrogen peroxide is handled with gloves and eye protection. The extra containment layers are still planned.",
"a_zh":"生物安全主要靠物理手段：以 BSL-1 處理非致病的 B. subtilis、0.2 µm 薄膜，廢棄物以 121 °C 滅菌 15 至 30 分鐘或用漂白水。電氣方面，儀器用 5 V 與 3.3 V，幫浦與伺服在獨立的 12 V 供電，LPA 指南要求改線前先拔電。過氧化氫要戴手套與護目鏡。額外的圍阻層仍在規劃中。",
"trap_en":"Listing leak sensors and pressure alarms as built. The hardware page marks them as planned for the cabinet.",
"trap_zh":"把漏液感測器與壓力警報說成已完成。硬體頁把它們標為機櫃的規劃項目。",
"basis":"like UPenn 2021: safety near live cultures and electronics",
"dom":"hardware",
"id":"q046"
},
{
"q_en":"How do you know the membrane really keeps the bacteria in?",
"q_zh":"你們怎麼知道薄膜真的把細菌留住了？",
"type":"validate",
"tier":"A",
"pages":[
"hardware-bioreactor",
"development"
],
"seat":"hw",
"backup":"wet2",
"kw_en":[
"lumen grew, shell clean",
"24 h at 37 °C",
"single plating each"
],
"kw_zh":[
"管腔長菌、殼側沒有",
"37 °C 24 小時",
"各只有單一塗盤"
],
"a_en":"We plated medium from both sides of the running bioreactor and incubated it 24 hours at 37 °C. The lumen plate grew; the shell plate had no colonies. An earlier shell-side plating from June also grew nothing. The limit: each was a single plating, with no replicate count or detection limit recorded, so it shows retention but is not a log reduction. The manual makes plating the shell side a standing check after every membrane change.",
"a_zh":"我們從運轉中反應器的兩側取培養液塗盤，37 °C 培養 24 小時。管腔那盤長菌，殼側那盤沒有菌落。六月較早的殼側塗盤也沒有長菌。限制是：每次都只有單一塗盤，沒有記錄重複數與偵測極限，所以它顯示有留住，但還不是對數減少量。使用手冊規定每次換模組後都要對殼側塗盤。",
"trap_en":"Saying 'zero bacteria cross'. The claim is no colonies under the tested conditions; the pore also passes vesicles.",
"trap_zh":"說『零細菌通過』。結論只是在測試條件下沒有菌落；孔徑也會讓囊泡通過。",
"basis":"like Munich 2025: replicates?",
"dom":"hardware",
"id":"q047"
},
{
"q_en":"How do you know your pressure and flow readings can be trusted?",
"q_zh":"你們怎麼知道壓力與流量讀值可信？",
"type":"validate",
"tier":"A",
"pages":[
"hardware-bioreactor",
"measurement"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"hand method varied by person",
"instruments only",
"R² 0.995"
],
"kw_zh":[
"手動法因人而異",
"全改用儀器",
"R² 0.995"
],
"a_en":"Our first hand measurements depended on who held the cylinder: at the same pump output, pressure differed more than threefold between series. So on 16 August we used instruments only, a Hall-effect flow meter and three pressure transducers, and ran the loop twice, with and without the module. Both fit the pressure model at R² 0.995. The flow meter also matched hand collection at R² 0.995.",
"a_zh":"我們最早的手動量測會因為拿量筒的人不同而改變：同一個幫浦輸出，三組系列的壓力相差超過三倍。所以 8 月 16 日改成只用儀器，用霍爾式流量計和三個壓力傳送器，並把迴路跑兩次，一次有模組一次沒有。兩者壓降模型的擬合 R² 都是 0.995。流量計與手動收集的相符度也是 R² 0.995。",
"trap_en":"Claiming TMP was validated in runs. The calibration tables are lumen pressure drop; the Measurement page says no TMP had been computed from that rig.",
"trap_zh":"說 TMP 已在運轉中驗證。校正表是管腔壓降；Measurement 頁說該組數據尚未算出任何 TMP。",
"basis":"like UPenn 2021: single biggest source of error",
"dom":"hardware",
"id":"q048"
},
{
"q_en":"How do you know the loop is sterile after cleaning without an autoclave?",
"q_zh":"沒有高壓滅菌，你們怎麼知道清洗後的管路是無菌的？",
"type":"validate",
"tier":"A",
"pages":[
"hardware-bioreactor",
"engineering"
],
"seat":"hw",
"backup":"wet1",
"kw_en":[
"peroxide circulated",
"test paper checks rinse",
"no sterility assay"
],
"kw_zh":[
"過氧化氫循環",
"試紙檢查沖洗",
"沒有無菌檢測"
],
"a_en":"We clean in place: 100 mL of 35% hydrogen peroxide in 900 mL of water circulates for 15 minutes, then about five 1 L washes, each checked with starch-iodide paper until no peroxide remains. That paper tells us the peroxide is gone. It does not prove sterility, and the pages report no sterility test of the result. We also run erythromycin at 5 µg/mL, which guards against contamination.",
"a_zh":"我們用原位清洗：900 mL 水加 100 mL 35% 過氧化氫循環 15 分鐘，再用約五次 1 L 水沖洗，每次用澱粉碘化物試紙檢查到沒有過氧化氫為止。試紙只告訴我們過氧化氫沖乾淨了，並不能證明無菌，頁面也沒有報告清洗後的無菌檢測。我們另外使用 5 µg/mL 紅黴素，有助於防止污染。",
"trap_en":"Saying the test paper proves the loop is sterile. It only proves the rinse is peroxide-free.",
"trap_zh":"說試紙證明管路無菌。它只證明沖洗水沒有過氧化氫。",
"basis":"like NUS 2021: how keep low-cost hardware sterile",
"dom":"hardware",
"id":"q049"
},
{
"q_en":"How do you know the protectant actually crosses the membrane?",
"q_zh":"你們怎麼知道保護蛋白真的穿過薄膜？",
"type":"validate",
"tier":"A",
"pages":[
"hardware-bioreactor",
"development"
],
"seat":"hw",
"backup":"wet2",
"kw_en":[
"ELISA both sides",
"DNPH shows activity",
"values approximate"
],
"kw_zh":[
"兩側都做 ELISA",
"DNPH 顯示有活性",
"數值屬估計"
],
"a_en":"On 8 October we ran two assays on both sides: ELISA for how much, DNPH for whether it is active. ACC deaminase read 10.7 µg/mL in the lumen and 10.5 on the shell side, and DNPH found activity on both. In run 7 the shell permeate held over 2 µg/mL to 72 hours, active from 18 hours. The limits: most ELISA wells read above the top standard, and every point is a single well.",
"a_zh":"10 月 8 日我們在兩側各做兩種檢測：ELISA 量多少，DNPH 看有沒有活性。ACC deaminase 在管腔側是 10.7 µg/mL，殼側 10.5，DNPH 兩側都偵測到活性。第 7 次運轉中，殼側滲透液到 72 小時都有超過 2 µg/mL，從 18 小時起有活性。限制是：多數 ELISA 孔超出最高標準品，而且每個點都是單一孔。",
"trap_en":"Quoting 10.7 as exact. The same run's time course peaks near 7.5, and Development lists 8.5; say 'about 10, approximate'.",
"trap_zh":"把 10.7 當精確值。同一次運轉的時間序列最高約 7.5，Development 寫 8.5；要說『約 10，屬估計』。",
"basis":"like Munich 2025: replicates?",
"dom":"hardware",
"id":"q050"
},
{
"q_en":"Why not just buy a commercial spectrophotometer instead of building a photometer?",
"q_zh":"為什麼不直接買商用分光光度計，要自己做光度計？",
"type":"compare",
"tier":"A",
"pages":[
"hardware-photometer",
"contribution"
],
"seat":"hw",
"backup":"biz",
"kw_en":[
"cannot sit in the loop",
"Slim US$235.29",
"Pro US$371.78"
],
"kw_zh":[
"無法放進迴路",
"Slim US$235.29",
"Pro US$371.78"
],
"a_en":"A benchtop instrument cannot sit in the loop and read without a sample being drawn, and a farm unit has nobody to draw it. That is the real gain, more than cost. Our parts cost US$371.78 for the Pro and US$235.29 for the Slim. The BioDrop we calibrated against costs NT$15,000, about US$470, so the Slim is roughly half and the Pro a little below. We have not tested a commercial in-line sensor.",
"a_zh":"桌上型儀器不能放在迴路裡讀值而不抽樣，而農場機器沒有人可以抽樣。這才是真正的好處，比成本更重要。Pro 零件成本 US$371.78，Slim 是 US$235.29。我們用來對照的 BioDrop 要 NT$15,000，約 US$470，所以 Slim 大約是它的一半，Pro 略低一點。我們沒有測試過商用的在線感測器。",
"trap_en":"Saying the savings are the main point, or quoting the BioDrop as US$15,000. The Contribution page says US$15,000; the Photometer page says NT$15,000 (about US$470).",
"trap_zh":"把省錢說成重點，或把 BioDrop 說成 US$15,000。Contribution 頁寫 US$15,000；Photometer 頁寫 NT$15,000（約 US$470）。",
"basis":"like INSA 2022 / UPenn 2021: what could commercial equipment not do",
"dom":"hardware",
"id":"q051"
},
{
"q_en":"Which photometer should someone use, the Pro or the Slim?",
"q_zh":"別人該用哪一款光度計，Pro 還是 Slim？",
"type":"compare",
"tier":"A",
"pages":[
"hardware-photometer"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"Pro for long runs",
"Slim cheaper, R² 0.992",
"x5.57 factor"
],
"kw_zh":[
"Pro 用於長時間運轉",
"Slim 較便宜 R² 0.992",
"乘 5.57 係數"
],
"a_en":"The Pro for long bioreactor runs: it has a lens and a 90:10 splitter, reads nearly 1:1 with the BioDrop, and ran 434 hours. The Slim uses two optical fibers split 1:1, stands 72 mm tall, costs 36.71% less, and is more linear on silica, R² 0.992 against 0.974, but reads about a fifth of the scale, so you multiply by 5.57. It has one silica run behind it and no long-term run.",
"a_zh":"長時間的生物反應器運轉用 Pro：有透鏡和 90:10 分光器，讀值與 BioDrop 幾乎 1:1，並且跑過 434 小時。Slim 用兩條光纖 1:1 分光，高 72 mm，便宜 36.71%，在矽膠上線性較好，R² 0.992 對 Pro 的 0.974，但讀值只有約五分之一，要乘 5.57。它只有一次矽膠實驗，沒有長時間運轉。",
"trap_en":"Calling the Slim 'better'. It is linear and cheap, but the x5.57 factor rests on one silica run and not on cells.",
"trap_zh":"說 Slim『比較好』。它線性好又便宜，但 5.57 係數只來自一次矽膠實驗，不是細胞。",
"basis":"like INSA 2022: sensor choice and alternatives",
"dom":"hardware",
"id":"q052"
},
{
"q_en":"Your light plate follows an existing open design. What did you add, and is it better than a commercial plate?",
"q_zh":"你們的光盤是依據現有的開放設計。你們加了什麼？比商用光盤好嗎？",
"type":"compare",
"tier":"B",
"pages":[
"hardware-diopal",
"contribution"
],
"seat":"hw",
"backup":"wet1",
"kw_en":[
"Gerhardt 2016 design",
"dual-wavelength columns",
"US$65.52"
],
"kw_zh":[
"Gerhardt 2016 的設計",
"雙波長欄位",
"US$65.52"
],
"a_en":"The idea is not new: the Light Plate Apparatus is Gerhardt and colleagues' open design, and ours is named after it. We added a dual-wavelength column layout, LEDs matched by measured output, and an enclosure sized for our tubes. It costs US$65.52 for 24 cultures and six conditions. We did not run it side by side with a commercial plate, and our light is in lux, not photon flux, so we cannot compare doses with their paper.",
"a_zh":"這個想法不是新的：Light Plate Apparatus 是 Gerhardt 等人的開放設計，我們的名字就來自它。我們加了雙波長欄位配置、依實測輸出配對的 LED，以及配合我們試管的外殼。24 管、六種條件的成本是 US$65.52。我們沒有和商用光盤並排比較，而且我們的光用勒克斯而非光子通量，所以無法與他們的論文比較劑量。",
"trap_en":"Claiming it is better than commercial plates. The wiki only says commercial hardware is costly; there is no head-to-head test.",
"trap_zh":"說它比商用光盤好。wiki 只說商用硬體昂貴，沒有正面比較。",
"basis":"like UPenn 2021: what could commercial equipment not do",
"dom":"hardware",
"id":"q053"
},
{
"q_en":"Why use a peristaltic pump? Did you try anything else?",
"q_zh":"為什麼用蠕動幫浦？你們試過別的嗎？",
"type":"compare",
"tier":"B",
"pages":[
"hardware-bioreactor"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"peristaltic wears",
"magnetic pump too weak",
"BPT tubing"
],
"kw_zh":[
"蠕動幫浦會磨損",
"磁力幫浦太弱",
"BPT 管"
],
"a_en":"We tried a magnetic pump, because the peristaltic pump wears in long runs. With culture medium it could not build enough pressure, topped out below 200 mL/min against our 263 target, and could not lift liquid from the bottle, so we have no data from it. The peristaltic pump stays. It wears out sooner, and early runs ended on pump-head leaks, so we moved to biocompatible BPT tubing.",
"a_zh":"我們試過磁力幫浦，因為蠕動幫浦在長時間運轉會磨損。在培養基中它無法建立足夠壓力，最高低於 200 mL/min（目標 263），也抽不起瓶中的液體，所以沒有數據。蠕動幫浦留下來。它磨損較快，早期運轉曾因幫浦頭漏液而結束，所以我們換成生物相容的 BPT 管。",
"trap_en":"Saying the magnetic pump was 'tested and rejected on data'. It never held a working flow; there is no data set.",
"trap_zh":"說磁力幫浦『經數據測試後淘汰』。它從沒維持過有效流量，沒有數據。",
"basis":"like NUS 2021: what did you give up",
"dom":"hardware",
"id":"q054"
},
{
"q_en":"What happens if a fiber breaks or a tube leaks?",
"q_zh":"如果纖維破裂或管子漏液會怎樣？",
"type":"boundary",
"tier":"A",
"pages":[
"hardware-bioreactor",
"software",
"engineering"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"membrane is only built layer",
"0.70 bar trip armed",
"pressure cannot see a leak"
],
"kw_zh":[
"膜是唯一已建的圍阻層",
"0.70 bar 跳脫已啟用",
"壓力偵測不到漏液"
],
"a_en":"Today the membrane is the only containment layer we have shown. The firmware has a 0.70 bar pressure trip, armed in run 7 and never triggered, peak 0.57 bar. A pressure alarm tied to the cabinet and a droplet sensor under the unit are planned. We learned that pressure alone cannot see a leak: when a valve broke, feed pressure rose from about 0.19 to 0.37 bar. After any such event we plate the shell side.",
"a_zh":"目前只有薄膜是我們證明過的圍阻層。韌體有 0.70 bar 的壓力跳脫，在第 7 次運轉中啟用但從未觸發，最高 0.57 bar。與機櫃連動的壓力警報和機器底下的滴漏感測器則是規劃中。我們學到單靠壓力看不出漏液：閥斷裂時，進料壓力反而從約 0.19 升到 0.37 bar。發生這類事件後，我們會對殼側塗盤。",
"trap_en":"Saying a leak sensor already protects the rig. It is planned; and the Safety page's present-tense wording is stronger than the hardware page.",
"trap_zh":"說漏液感測器已經在保護機器。那是規劃中；Safety 頁的現在式措辭比硬體頁強。",
"basis":"like UPenn 2021: safety near live cultures",
"dom":"hardware",
"id":"q055"
},
{
"q_en":"Your photometer was calibrated on silica beads. Does that hold for real bacteria at high density?",
"q_zh":"你們的光度計是用矽膠珠校正的。對高密度的真細菌也成立嗎？",
"type":"boundary",
"tier":"A",
"pages":[
"hardware-photometer",
"measurement"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"beads are spheres",
"OD 2.5 and x5.57 approximate",
"beam lost above 2.7"
],
"kw_zh":[
"矽膠珠是球形",
"OD 2.5 與 5.57 屬估計",
"OD 2.7 以上光束喪失"
],
"a_en":"Not proven. Silica beads are spheres, while Bacillus cells are rods that scatter differently, so the working limit of about OD 2.5 and the Slim's 5.57 factor are approximate until we repeat the test on cells at known densities. In practice run 6 lost its sample beam above OD 2.7, though run 7 read up to 3.34. Above the limit we would draw samples by hand and dilute.",
"a_zh":"還沒有證明。矽膠珠是球形，而 Bacillus 細胞是桿狀，散射方式不同，所以約 OD 2.5 的工作上限和 Slim 的 5.57 係數，在用已知密度的細胞重做實驗之前都只是近似值。實際上第 6 次運轉在 OD 2.7 以上失去樣品光束，不過第 7 次讀到 3.34。超過上限我們會手動取樣並稀釋。",
"trap_en":"Saying the photometer is validated up to OD 2.5 on bacteria. The 2.5 comes from silica only.",
"trap_zh":"說光度計在細菌上已驗證到 OD 2.5。2.5 只來自矽膠。",
"basis":"like Cambridge 2024: how do you know it holds in the real condition",
"dom":"hardware",
"id":"q056"
},
{
"q_en":"Can your leaf sensor tell that a plant in the field is stressed?",
"q_zh":"你們的葉片感測器能判斷田裡的植物受逆境嗎？",
"type":"boundary",
"tier":"B",
"pages":[
"software",
"results",
"description"
],
"seat":"dry",
"backup":"dry",
"kw_en":[
"bench test only",
"reads warm by site",
"wetness never wetted"
],
"kw_zh":[
"只在桌上測",
"各地點偏暖程度不同",
"濕潤度從未弄濕"
],
"a_en":"Not yet. On 10 October we ran the leaf sensor beside an air sensor, with no leaf, at three sites, 540 paired readings. The leaf sensor read warm by +1.7, +1.3 and +0.5 °C depending on the site, so no fixed offset corrects it. The wetness channel read 0.0% on every sample because we never wetted it. Nothing has been put on a plant, so no stress threshold can be set.",
"a_zh":"還不行。10 月 10 日我們把葉片感測器和空氣感測器並排放在三個地點測試，沒有葉片，共 540 組讀值。葉片感測器依地點偏暖 +1.7、+1.3、+0.5 °C，所以無法用固定偏差修正。濕潤度通道每筆都讀 0.0%，因為我們從沒弄濕它。沒有放到植物上，所以還不能設定逆境門檻。",
"trap_en":"Saying the leaf sensor works 'with a 1.2 to 1.9 °C offset' as if it were a fixed correction. The offset changes with site.",
"trap_zh":"說葉片感測器『只要修正 1.2 至 1.9 °C 偏差』，好像是固定偏差。偏差會隨地點改變。",
"basis":"like Cambridge 2024: how do you know the real signal",
"dom":"hardware",
"id":"q057"
},
{
"q_en":"Would the bioreactor work at the temperature of a real farm?",
"q_zh":"生物反應器在真實農場的溫度下能運作嗎？",
"type":"boundary",
"tier":"B",
"pages":[
"hardware-bioreactor",
"software",
"hardware-photometer"
],
"seat":"hw",
"backup":"plant",
"kw_en":[
"integrated runs at 37 °C",
"22 °C inconsistent",
"temperature probe not responding"
],
"kw_zh":[
"整合運轉都在 37 °C",
"22 °C 結果不一致",
"溫度探頭沒反應"
],
"a_en":"We have not shown that. Our integrated runs sat in a 37 °C incubator. B. subtilis growth at 22 °C was inconsistent in the first test, and Prof. Chang asked us to repeat it and check plasmid stability. The 434-hour run was at 22 °C but with wild type. The loop temperature probe is fitted but not responding, so runs used a temperature typed in by the operator.",
"a_zh":"我們還沒有證明這點。整合運轉都在 37 °C 培養箱裡。B. subtilis 在 22 °C 的生長在第一次測試時不一致，張教授要我們重做並檢查質體穩定性。434 小時的運轉雖在 22 °C，但用的是野生型。迴路溫度探頭已裝上但沒有反應，所以運轉時的溫度是操作員手動輸入的。",
"trap_en":"Saying the cabinet 'holds temperature' as a tested feature. The temperature-held vessel is a design, and the probe is not working.",
"trap_zh":"把機櫃『可控溫』說成測試過的功能。控溫容器是設計，探頭也沒在運作。",
"basis":"like Cambridge 2024: separate effects from heat",
"dom":"hardware",
"id":"q058"
},
{
"q_en":"How did outside experts change your hardware?",
"q_zh":"外部專家如何改變了你們的硬體？",
"type":"integrate",
"tier":"A",
"pages":[
"hardware-bioreactor"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"Chang: pinch valve",
"Owl Lab: STS3215 and mainboard",
"mainboard fixed pressure noise"
],
"kw_zh":[
"張教授：夾管閥",
"Owl Lab：STS3215 與主板",
"主板解決壓力不穩"
],
"a_en":"Two reviewers changed it most. Prof. Chang found nothing drove product across the membrane, so we added the pinch valve, and he said to watch flow and pressure for fouling, so we added the transducers and flow meter. Teacher He at Owl Lab found the servo driver unreliable and the power supply too weak, so we moved to STS3215 servos and then his single mainboard, which also ended our unstable pressure readings.",
"a_zh":"兩位審查者的影響最大。張教授發現沒有東西推動產物過膜，所以我們加了夾管閥；他也說要監看流量與壓力以判斷污垢，所以我們加了壓力傳送器與流量計。Owl Lab 的何老師發現伺服驅動板不可靠、電源太弱，所以我們換成 STS3215 伺服，再採用他設計的單一主板，這也解決了壓力讀值不穩的問題。",
"trap_en":"Listing feedback without saying what changed on the rig. Each point should end on the part we built.",
"trap_zh":"只列意見卻沒說裝置改了什麼。每一點都應該以我們做出的零件作結。",
"basis":"like LCG 2024 / Cambridge 2024: expert changed a requirement",
"dom":"hardware",
"id":"q059"
},
{
"q_en":"How did what you learned in the bioreactor change the photometer?",
"q_zh":"你們在生物反應器學到的東西如何改變了光度計？",
"type":"integrate",
"tier":"B",
"pages":[
"hardware-photometer",
"hardware-bioreactor"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"dilute above OD 1",
"plug-in module, six wires",
"gates after 434 h run"
],
"kw_zh":[
"OD 1 以上要稀釋",
"插拔模組、六條線",
"434 小時後加閘門"
],
"a_en":"Three ways. Prof. Chang said samples above OD 1 must be diluted, so from the 10 October silica run we diluted BioDrop samples 2 times, then 4 times. Teacher He's mainboard meant we rebuilt the photometer to plug in as a module with six wires, so the pH probe and pinch valve could be added without rewiring. And bubbles in long runs led to the two acceptance gates.",
"a_zh":"有三方面。張教授說 OD 1 以上的樣品必須稀釋，所以從 10 月 10 日的矽膠實驗起，我們把 BioDrop 樣品稀釋 2 倍再 4 倍。何老師的主板讓我們把光度計重做成六條線的插拔模組，這樣加 pH 探頭與夾管閥時不用重新接線。長時間運轉的氣泡問題則促成了兩道接受閘。",
"trap_en":"Saying the dilution advice applied to the in-line photometer. It applies to the BioDrop reference, which is read in a cuvette.",
"trap_zh":"說稀釋建議適用於在線光度計。它適用於對照用的 BioDrop，那是在比色槽裡讀的。",
"basis":"like UPenn 2021: iterations after real samples",
"dom":"hardware",
"id":"q060"
},
{
"q_en":"How did the light plate results feed into your digital twin?",
"q_zh":"光盤的結果如何用到數位孿生裡？",
"type":"integrate",
"tier":"B",
"pages":[
"hardware-diopal",
"software"
],
"seat":"dry",
"backup":"dry",
"kw_en":[
"r = 0.299 growth fit",
"registered 1 Oct",
"run 6 gave 0.286"
],
"kw_zh":[
"r = 0.299 生長擬合",
"10 月 1 日登記",
"第 6 次運轉 0.286"
],
"a_en":"The LPA's 19 September growth fit, rate 0.299 per hour, became the growth prior in the twin. On 1 October we registered a forecast of 0.2986, with a pass interval of 0.2705 to 0.3300. Run 6 gave 0.286, inside it. Used as a prior, the fit predicted each held-out arm's 24 hour OD within 7%, against 29 to 68% without it. The limit: the rate transferred from plate to reactor, the ceiling did not.",
"a_zh":"LPA 在 9 月 19 日的生長擬合，速率 0.299 每小時，成為數位孿生的生長先驗。10 月 1 日我們登記了 0.2986 的預測，通過區間 0.2705 至 0.3300。第 6 次運轉得到 0.286，落在區間內。用作先驗時，這個擬合預測每個留出組別 24 小時 OD 的誤差在 7% 內，沒有先驗則是 29 至 68%。限制是：生長速率能從培養盤轉到反應器，承載量則不能。",
"trap_en":"Presenting this as proof the light plate controls growth. The arms grew alike and the run had light leakage; it supports the growth rate only.",
"trap_zh":"把它當成光盤能控制生長的證據。各組生長相同且有漏光；它只支持生長速率。",
"basis":"like Munich 2025: model and lab link",
"dom":"hardware",
"id":"q061"
},
{
"q_en":"How did farmer and expert feedback shape the design of the commercial unit?",
"q_zh":"農民與專家的回饋如何影響商用機器的設計？",
"type":"integrate",
"tier":"B",
"pages":[
"hardware-bioreactor"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"swappable capsule",
"7-inch screen and phone page",
"cartridges still untested"
],
"kw_zh":[
"可替換膠囊",
"7 吋螢幕與手機頁",
"匣尚未測試"
],
"a_en":"Prof. Chang pressed us on farmer use: modular, with the bacteria in a replaceable capsule swapped like a battery, and no hands-on control. That became the sealed refill cartridge design, with a keyed dock for medium and spores, and a 7-inch screen plus phone page. It is still design. The printed parts were not watertight, and sterility over changeovers and spore germination are untested.",
"a_zh":"張教授強調農民使用：要模組化，把細菌放在像電池一樣可更換的膠囊裡，不需要手動技術操作。這成為密封補充匣的設計，有防錯的對接座放培養基與孢子，還有 7 吋螢幕與手機頁面。這仍然是設計。列印零件不防水，多次更換的無菌性與孢子萌發也未測試。",
"trap_en":"Describing the cartridges as built. The page lists the next steps to a prototype: a reliable seal, sterility, spore germination.",
"trap_zh":"把匣說成已做出。頁面列的是邁向原型的下一步：可靠的密封、無菌性、孢子萌發。",
"basis":"like Peking 2025: trial or real application",
"dom":"hardware",
"id":"q062"
},
{
"q_en":"What was the most serious thing that went wrong with the bioreactor?",
"q_zh":"生物反應器最嚴重出了什麼問題？",
"type":"gap",
"tier":"A",
"pages":[
"hardware-bioreactor",
"engineering"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"pressure unstable in run 4",
"peroxide broke a valve",
"KOH corroded valves"
],
"kw_zh":[
"第 4 次運轉壓力不穩",
"過氧化氫弄壞閥",
"KOH 腐蝕閥"
],
"a_en":"Several things. In the first integrated run the pressure reading was unstable throughout and a computer restart cost about 10 hours. In run 6 a Luer valve broke at 38 hours because our own cleaning step let undiluted peroxide reach it, and medium leaked into the incubator. In run 7, 1 M KOH corroded the dosing valve. The membrane did not fail. We fixed the first two causes; the third needs alkaline-resistant valves.",
"a_zh":"有好幾件。第一次整合運轉中，壓力讀值全程不穩，電腦重啟又損失約 10 小時。第 6 次運轉在 38 小時時，Luer 閥因為我們自己的清洗步驟讓未稀釋的過氧化氫直接打到而斷裂，培養液漏進培養箱。第 7 次運轉中，1 M KOH 腐蝕了加液閥。薄膜沒有失效。前兩個原因我們已修正；第三個需要耐鹼的閥。",
"trap_en":"Hiding the leaks. The Development page says no leaks in six runs; the Bioreactor page records two valve breaks that leaked medium.",
"trap_zh":"隱瞞漏液。Development 頁說六次運轉沒有漏液；Bioreactor 頁記錄了兩次閥斷裂漏出培養液。",
"basis":"like LCG 2024: hardest engineering problem",
"dom":"hardware",
"id":"q063"
},
{
"q_en":"What does your light plate not show?",
"q_zh":"你們的光盤沒有證明什麼？",
"type":"gap",
"tier":"A",
"pages":[
"hardware-diopal",
"development"
],
"seat":"hw",
"backup":"wet1",
"kw_en":[
"light leaked between wells",
"light control unconfirmed",
"lux not photon flux"
],
"kw_zh":[
"孔間漏光",
"光控制未確認",
"勒克斯不是光子通量"
],
"a_en":"It does not yet show that green light controls production. The first run on 19 September grew in all six arms to OD 0.91 to 1.01, but light leaked between wells, so it is not a dose result. Later ELISA read 12.9 against 12.5 µg/mL, green over red, on two samples a side with overlapping ranges, so light control is unconfirmed. We report lux, not photon flux, and the shaker fixes are not yet re-tested.",
"a_zh":"它還沒有證明綠光能控制生產。9 月 19 日的第一次實驗六組都長到 OD 0.91 至 1.01，但孔間漏光，所以不是劑量結果。之後的 ELISA 是綠光 12.9 對紅光 12.5 µg/mL，每邊只有兩個樣品且範圍重疊，所以光控制未確認。我們報告的是勒克斯而不是光子通量，振盪實驗的修正也還沒重新測試。",
"trap_en":"Saying the LPA 'proved' green induces ACCD. Development itself marks light control as unconfirmed.",
"trap_zh":"說 LPA『證明』綠光誘導 ACCD。Development 自己把光控制標為未確認。",
"basis":"like Munich 2025: minimum production and change in output",
"dom":"hardware",
"id":"q064"
},
{
"q_en":"Which of your sensors or monitoring channels do not work or were never tested?",
"q_zh":"你們哪些感測器或監測通道沒有作用，或從未測試？",
"type":"gap",
"tier":"A",
"pages":[
"software",
"development",
"hardware-bioreactor"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"no dissolved oxygen",
"temperature probe silent",
"wetness never wetted"
],
"kw_zh":[
"沒有溶氧",
"溫度探頭沒反應",
"濕潤度從未弄濕"
],
"a_en":"Four. Dissolved oxygen: two probes, calibration did not hold, neither can be autoclaved, so no DO record exists. The loop temperature probe is fitted but not responding. The pH probe has no calibration against reference buffers on record. And the leaf wetness channel read 0.0% because it was never wetted. The photometer also loses its beam at high density, and its reference channel failed after about 240 hours.",
"a_zh":"有四項。溶氧：兩支探頭、校正維持不住、都不能高壓滅菌，所以沒有任何溶氧紀錄。迴路溫度探頭已裝但沒反應。pH 探頭沒有用標準緩衝液校正的紀錄。葉面濕潤度通道讀 0.0%，因為從未弄濕。光度計在高密度時也會失去光束，長時間運轉約 240 小時後參考通道失效。",
"trap_en":"Claiming 'Monitor: all met'. Development marks dissolved oxygen as not tested.",
"trap_zh":"說『監測全部達成』。Development 把溶氧標為未測試。",
"basis":"like Munich 2025: what is not shown",
"dom":"hardware",
"id":"q065"
},
{
"q_en":"Your Safety page lists leak detection and pressure alerts. Are they actually built?",
"q_zh":"你們的 Safety 頁列了漏液偵測與壓力警報，真的做出來了嗎？",
"type":"gap",
"tier":"A",
"pages":[
"safety-and-security",
"hardware-bioreactor",
"biomanufacturing"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"firmware 0.70 bar trip",
"droplet sensor planned",
"shell-side detector not shown"
],
"kw_zh":[
"韌體 0.70 bar 跳脫",
"滴漏感測器規劃中",
"殼側偵測器沒有證據"
],
"a_en":"Partly. The firmware has a 0.70 bar pressure trip that was armed through run 7 and never needed. The hardware page says pressure numbers were only displayed, and that the full pressure alarm and the droplet sensor are planned for the commercial cabinet. The Safety page describes them in the present tense, which is stronger than what we demonstrated. What we demonstrated is the membrane plating.",
"a_zh":"部分完成。韌體有 0.70 bar 的壓力跳脫，第 7 次運轉全程啟用且從未需要動作。硬體頁說壓力數字目前只是顯示，完整的壓力警報和滴漏感測器是規劃給商用機櫃的。Safety 頁用現在式描述，比我們實際證明的更強。我們真正證明的是薄膜塗盤。",
"trap_en":"Defending the Safety wording. Better to say the page describes design intent and point to what was demonstrated.",
"trap_zh":"替 Safety 頁的措辭辯護。比較好的做法是承認那是設計意圖，並指出實際證明的部分。",
"basis":"like Munich 2025: what is not shown",
"dom":"hardware",
"id":"q066"
},
{
"q_en":"You recommend 263 mL/min at 0.30 bar TMP. Did you actually measure that TMP in a run?",
"q_zh":"你們建議 263 mL/min、TMP 0.30 bar。在實際運轉中真的量到這個 TMP 嗎？",
"type":"gap",
"tier":"A",
"pages":[
"hardware-bioreactor",
"measurement",
"engineering"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"0.30 bar is a design value",
"runs near zero to kPa",
"feed flow 350 to 370"
],
"kw_zh":[
"0.30 bar 是設計值",
"運轉時接近零到幾 kPa",
"進料流量 350 至 370"
],
"a_en":"No. 0.30 bar is the operating point we chose from water tests, to keep non-uniformity at 28% and avoid compaction. In real runs TMP sat near zero, and the manual says a few kPa; the pump alone pulses it between about minus 0.06 and plus 0.12 bar. Feed flow was about 350 to 370 mL/min, not 263. Pages also disagree on the module drop at 263: 0.084 or 0.096 bar.",
"a_zh":"沒有。0.30 bar 是我們從水測試選出的操作點，目的是把不均勻度維持在 28% 並避免壓縮。實際運轉中 TMP 接近零，使用手冊寫幾 kPa；單靠幫浦會讓它在約負 0.06 到正 0.12 bar 間脈動。進料流量約 350 至 370 mL/min，不是 263。各頁對 263 時的模組壓降也不一致：0.084 或 0.096 bar。",
"trap_en":"Presenting 263 mL/min and 0.30 bar as the measured running conditions. They are the recommendation, not what the runs used.",
"trap_zh":"把 263 mL/min 與 0.30 bar 說成實際運轉條件。它們是建議值，不是運轉時用的條件。",
"basis":"like Munich 2025: how did you quantify",
"dom":"hardware",
"id":"q067"
},
{
"q_en":"How would you scale this up, and what limits you?",
"q_zh":"你們要如何擴大規模？限制是什麼？",
"type":"impact",
"tier":"A",
"pages":[
"hardware-bioreactor",
"biomanufacturing"
],
"seat":"hw",
"backup":"biz",
"kw_en":[
"scale out, copy module",
"medium, pumps, energy bind",
"design flux 2 vs 36 to 72 LMH"
],
"kw_zh":[
"複製模組擴增",
"培養基、幫浦、能耗是限制",
"設計通量 2 對 36 至 72 LMH"
],
"a_en":"We would scale out, adding copies of the characterized 200 cm² module. From one module to eight, the membrane never limits. What binds is medium draw, 0.96 to 7.7 liters a day, pumps, one to eight, and energy, 3 to 8 W up to 24 to 64 W. A duty-cycled pump would help; we have not tested settling when it is off. Honest caveat: that table assumes 2 LMH, while our runs used 36 to 72 LMH.",
"a_zh":"我們會用橫向擴充，增加已鑑定過的 200 cm² 模組。從一個模組到八個，薄膜都不是限制。限制是培養基用量，每天 0.96 到 7.7 公升、幫浦數量一到八個，以及能耗從 3 至 8 W 增加到 24 至 64 W。讓幫浦間歇運轉會有幫助；關閉時纖維是否沉降我們還沒測試。要誠實說明：那張表假設 2 LMH，而我們的運轉用 36 至 72 LMH。",
"trap_en":"Saying the membrane is oversized so scaling is easy. The table's 2 LMH design flux is far below the fluxes in our runs.",
"trap_zh":"說薄膜綽綽有餘所以好擴充。表中 2 LMH 的設計通量遠低於我們實驗中用的通量。",
"basis":"like Bank 36 and NUS 2021: does it scale",
"dom":"hardware",
"id":"q068"
},
{
"q_en":"Could another team rebuild your hardware from your documentation?",
"q_zh":"另一支隊伍能依你們的文件重建硬體嗎？",
"type":"impact",
"tier":"A",
"pages":[
"hardware",
"hardware-photometer",
"hardware-bioreactor",
"hardware-diopal"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"guides, STLs, cost tables",
"3 outside builders",
"only Slim tested outside"
],
"kw_zh":[
"指南、STL、成本表",
"3 位外部組裝者",
"只有 Slim 被外部測過"
],
"a_en":"Each instrument has an assembly guide, parts list with costs and STL files: bioreactor 10 pages, Pro 12, Slim 13, LPA 10, plus a 16-page user manual and an 82-page notebook. Three classmates outside the team built the Slim in about two hours, and their trouble changed three lines in the guide. The limits: only the Slim has been outside-tested, the LPA has not, and the lab rack uses hand-soldered boards.",
"a_zh":"每個儀器都有組裝指南、附成本的零件清單和 STL 檔：生物反應器 10 頁、Pro 12 頁、Slim 13 頁、LPA 10 頁，另有 16 頁使用手冊和 82 頁筆記本。三位隊外同學依指南約兩小時組出 Slim，他們遇到的困難讓指南修改了三處。限制是：只有 Slim 做過外部測試，LPA 沒有，實驗台的電路板也是手工焊接。",
"trap_en":"Saying the whole bioreactor was outside-tested. The three outside builders built only the Slim photometer.",
"trap_zh":"說整個生物反應器都經過外部測試。三位外部組裝者只組了 Slim 光度計。",
"basis":"like UPenn 2021: could another team rebuild it",
"dom":"hardware",
"id":"q069"
},
{
"q_en":"In one minute, how does your bioreactor keep the bacteria in but let the protein out?",
"q_zh":"請用一分鐘說明，你們的生物反應器怎麼把細菌留住、卻讓蛋白質出去？",
"type":"fact",
"tier":"A",
"pages":[
"hardware-bioreactor",
"results"
],
"seat":"hw",
"backup":"wet2",
"kw_en":[
"0.2 µm pores",
"lumen versus shell",
"two platings"
],
"kw_zh":[
"0.2 µm 孔徑",
"管腔側對殼側",
"兩次平板"
],
"a_en":"The culture circulates inside 11 hollow fibers whose walls have 0.2 µm pores, so cells stay in the lumen and secreted protein crosses to the shell side. We checked it two ways. ACC deaminase read 10.7 µg/mL in the lumen and 10.5 on the shell side, and shell-side medium grew no colonies while the lumen plate did. The pore size is the mechanism; the plating is only two single tests.",
"a_zh":"菌液在 11 根中空纖維內循環，纖維壁有 0.2 µm 的孔，所以細胞留在管腔側，分泌的蛋白質則穿過到殼側。我們用兩種方式檢查：ACC deaminase 在管腔側是 10.7 µg/mL、殼側是 10.5 µg/mL；殼側培養液的平板沒長出菌落，管腔側的平板有。機制靠孔徑，平板證據只有兩次單次實驗。",
"trap_en":"Saying the membrane is proven fully safe. We have two single platings with no log reduction.",
"trap_zh":"說膜已被證明完全安全。我們只有兩次單次平板，沒有對數減量。",
"basis":"judge pattern: explain the core device in your own words",
"dom":"hardware",
"id":"q070"
},
{
"q_en":"Why a hollow-fiber perfusion bioreactor, instead of releasing the bacteria on the roots or using a normal stirred tank?",
"q_zh":"為什麼選中空纖維灌流反應器，而不是把細菌放在根部，或用一般的攪拌槽？",
"type":"design",
"tier":"A",
"pages":[
"hardware-bioreactor",
"biomanufacturing"
],
"seat":"hw",
"backup":"biz",
"kw_en":[
"release becomes containment",
"secreted product",
"scale-out unit cell"
],
"kw_zh":[
"釋放變成封閉",
"分泌型產物",
"可複製的單元"
],
"a_en":"Our first plan was engineered bacteria living on the roots, but once released their dose and spread cannot be controlled. So we keep the organism in a machine and send out only its product. Hollow fiber suits a secreted protein because the wall holds the cells and passes the protectant. It also scales by copying one module. We did not compare it with a stirred tank on cost.",
"a_zh":"我們最初的計畫是讓基因改造細菌住在根部，但一旦釋放，劑量和擴散就無法控制。所以我們把生物留在機器裡，只送出它的產物。中空纖維適合分泌型蛋白，因為膜壁擋住細胞、讓保護物通過，也能靠複製單一模組來擴大規模。我們沒有在成本上和攪拌槽比較過。",
"trap_en":"Giving only the cost or convenience reason. The main reason on the wiki is biosafety.",
"trap_zh":"只講成本或方便。wiki 寫的主要理由是生物安全。",
"basis":"judge pattern: why this design over the obvious alternative",
"dom":"hardware",
"id":"q071"
},
{
"q_en":"How did you arrive at 263 mL/min and a TMP of 0.30 bar as the operating point?",
"q_zh":"你們怎麼得出 263 mL/min、TMP 0.30 bar 這個操作點？",
"type":"fact",
"tier":"A",
"pages":[
"hardware-bioreactor"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"subtract the plumbing",
"4060 s⁻¹ shear",
"28% non-uniformity"
],
"kw_zh":[
"扣掉管路",
"剪切率 4060 s⁻¹",
"不均勻度 28%"
],
"a_en":"We read pressure and flow by instrument on 16 August, once with the module and once with a plain tube, so we could subtract the plumbing, which was 46 to 55% of the drop. The net module drop matched Hagen–Poiseuille theory. At 263 mL/min the shear is about 4060 s⁻¹, mid-window for the manufacturer, and TMP non-uniformity is 28% at 0.30 bar. The 0.30 bar is a chosen target, not what we ran.",
"a_zh":"8 月 16 日我們用儀器讀壓力和流量，一次裝模組、一次換成一般管子，這樣才能扣掉管路，管路佔壓降的 46 至 55%。扣掉後模組本身的壓降符合 Hagen–Poiseuille 理論。263 mL/min 時剪切率約 4060 s⁻¹，位於廠商建議範圍中段，TMP 0.30 bar 時不均勻度為 28%。0.30 bar 是設定的目標值，不是我們實際跑的壓力。",
"trap_en":"Presenting 0.30 bar as a measured running pressure.",
"trap_zh":"把 0.30 bar 說成實際量到的運轉壓力。",
"basis":"judge pattern: how was the key parameter chosen",
"dom":"hardware",
"id":"q072"
},
{
"q_en":"Did you ever actually run the bioreactor at your recommended operating point?",
"q_zh":"你們有真的用建議的操作點運轉過反應器嗎？",
"type":"gap",
"tier":"A",
"pages":[
"hardware-bioreactor",
"results"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"263 mL/min, 0.30 bar recommended",
"~305 mL/min, ~0.03 bar run",
"0.16 bar only pinched"
],
"kw_zh":[
"建議 263 mL/min、0.30 bar",
"實跑約 305 mL/min、0.03 bar",
"夾管才到 0.16 bar"
],
"a_en":"Not exactly. The recommended point is 263 mL/min at a TMP of 0.30 bar, but the runs fed about 300 to 390 mL/min, and in the sampling record the flow was about 305 mL/min with a mean TMP near 0.03 bar. TMP reached 0.16 bar only for 60 seconds while the pinch valve was closed. The operating point comes from water calibration; the runs sit above its flow and far below its pressure.",
"a_zh":"不完全是。建議的操作點是 263 mL/min、TMP 0.30 bar，但實際運轉進料約 300 至 390 mL/min；在取樣紀錄中流量約 305 mL/min，平均 TMP 約 0.03 bar。只有夾管閥關閉的那 60 秒，TMP 才到 0.16 bar。操作點來自用水做的校正，實際運轉的流量比它高、壓力遠比它低。",
"trap_en":"Claiming the runs were at the recommended point. Judges can read the sampling trace.",
"trap_zh":"聲稱實際運轉就在建議操作點。評審看得到取樣的壓力曲線。",
"basis":"honesty probe: spec versus what was run",
"dom":"hardware",
"id":"q073"
},
{
"q_en":"Your design flux is 2 LMH but your runs drew 36 to 72 LMH. Is that above your own fouling limit?",
"q_zh":"你們的設計通量是 2 LMH，但實際運轉抽了 36 至 72 LMH。這不是超過你們自己算的積垢上限嗎？",
"type":"validate",
"tier":"A",
"pages":[
"biomanufacturing",
"software",
"hardware-bioreactor"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"2 LMH designed",
"36–72 LMH run",
"46 LMH threshold"
],
"kw_zh":[
"設計 2 LMH",
"實跑 36–72 LMH",
"門檻 46 LMH"
],
"a_en":"Yes, in part. The scaling table uses a design flux of 2 LMH against a modelled critical flux of 46 LMH. The runs drew 12 to 24 mL/min through 200 cm², which is 36 to 72 LMH, so run 5 at 72 and run 7 at 51 (Digital Twin numbering) were above 46. The extra pressure still rose only from 1.9 to 4.4 kPa over 77 hours, from one module in one run. The 46 is a model for cells in water.",
"a_zh":"部分是的。擴大規模表用的設計通量是 2 LMH，模型算出的臨界通量是 46 LMH。實際運轉透過 200 cm² 抽 12 至 24 mL/min，也就是 36 至 72 LMH，所以第 5 次的 72 與第 7 次的 51（數位孿生的編號）都高於 46。不過額外壓力在 77 小時內只從 1.9 升到 4.4 kPa，而且只有一個模組、一次運轉。46 這個數字是以水中細胞為前提的模型值。",
"trap_en":"Quoting J/Jcrit of 0.04 as if it described the runs. That number is for the 2 LMH design flux.",
"trap_zh":"把 J/Jcrit 0.04 當成實際運轉的數字。那是 2 LMH 設計通量的值。",
"basis":"validate: design numbers versus run numbers",
"dom":"hardware",
"id":"q074"
},
{
"q_en":"Your pages give two different pressure drops at 263 mL/min. Which one is right?",
"q_zh":"你們的頁面在 263 mL/min 給了兩個不同的壓降，哪一個才對？",
"type":"validate",
"tier":"A",
"pages":[
"hardware-bioreactor",
"software",
"development",
"biomanufacturing"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"0.084 bar, 0.90×",
"0.096 bar, 1.03×",
"both near theory"
],
"kw_zh":[
"0.084 bar、0.90 倍",
"0.096 bar、1.03 倍",
"都接近理論"
],
"a_en":"The hardware page tables 0.084 bar, 0.90 times Hagen–Poiseuille theory. Digital Twin, Biomanufacturing and Development quote 0.096 bar, 1.03 times. Both cite the same 16 August water series, and the wiki does not say why they differ. I would say plainly that we have two values. Both put the module close to theory for 11 open fibers, so no fiber is blocked.",
"a_zh":"硬體頁的表格寫 0.084 bar，是 Hagen–Poiseuille 理論的 0.90 倍；數位孿生、生物製造與開發頁寫 0.096 bar，是 1.03 倍。兩者都引用 8 月 16 日同一組水的實驗，wiki 沒有說明為什麼不同。我會直接說我們有兩個數值，兩者都顯示模組接近 11 根纖維全通的理論值，沒有纖維被堵住。",
"trap_en":"Picking one number and hoping the judge has not seen the other page.",
"trap_zh":"挑一個數字講，希望評審沒看過另一頁。",
"basis":"cross-page conflict on the same measurement",
"dom":"hardware",
"id":"q075"
},
{
"q_en":"The bioreactor page reports DNPH activity of 0.037 mU/mL, but Results says about 30 nmol per mL per hour. Which is it?",
"q_zh":"反應器頁的 DNPH 活性寫 0.037 mU/mL，結果頁卻寫約 30 nmol/mL/h，到底是哪個？",
"type":"validate",
"tier":"A",
"pages":[
"hardware-bioreactor",
"results",
"development"
],
"seat":"wet2",
"backup":"hw",
"kw_en":[
"about 1000× apart",
"1 U = 1 µmol per hour",
"only 30 mU/mL fits"
],
"kw_zh":[
"差約一千倍",
"1 U = 每小時 1 µmol",
"只有 30 mU/mL 說得通"
],
"a_en":"They differ by roughly a thousandfold, and only the Results figure fits our stated specific activity. With one unit as 1 µmol per hour, as the bioreactor page defines it, 30 nmol per mL per hour is about 30 mU/mL. Divided by about 6 µg/mL of enzyme that gives roughly 5 U/mg, inside the 2.3 to 8.3 quoted. 0.037 mU/mL would give about 0.006 U/mg, so it looks like a unit slip.",
"a_zh":"兩者差約一千倍，只有結果頁的數字符合我們寫的比活性。依反應器頁的定義，1 單位是每小時釋出 1 µmol，30 nmol/mL/h 約等於 30 mU/mL。除以約 6 µg/mL 的酵素，大約是 5 U/mg，落在所寫的 2.3 至 8.3 之內。0.037 mU/mL 只會得到約 0.006 U/mg，所以看起來是單位寫錯。",
"trap_en":"Defending 0.037 mU/mL. Also note that Development converts 30.9 nmol/mL/h to 0.52 mU/mL with a per-minute unit, a third convention.",
"trap_zh":"替 0.037 mU/mL 辯護。另外開發頁把 30.9 nmol/mL/h 換成 0.52 mU/mL，用的是每分鐘的單位，是第三種算法。",
"basis":"unit conflict; checked by dividing by ELISA concentration",
"dom":"hardware",
"id":"q076"
},
{
"q_en":"How strong is your containment evidence, and how big are B. subtilis cells compared with your 0.2 µm pores?",
"q_zh":"你們的封閉性證據有多強？枯草桿菌細胞和 0.2 µm 的孔相比有多大？",
"type":"validate",
"tier":"A",
"pages":[
"results",
"safety-and-security",
"hardware-bioreactor",
"development"
],
"seat":"hw",
"backup":"wet2",
"kw_en":[
"two single platings",
"no detection limit",
"cell size quoted three ways"
],
"kw_zh":[
"兩次單次平板",
"沒記偵測極限",
"細胞大小有三種說法"
],
"a_en":"It is two single platings: 2 mL of shell-side liquid in June, and a lumen against shell pair after 24 h at 37 °C where the lumen grew and the shell did not. There were no replicates, no recorded detection limit and no log reduction, so it is preliminary. Cell size is quoted three ways: 0.25 to 1.0 µm on Safety, 0.8 to 2.0 µm wide on Results, and the bioreactor page says pores are smaller than any cell.",
"a_zh":"證據是兩次單次平板：6 月取 2 mL 殼側液體，以及一組 37 °C 培養 24 小時的管腔側對殼側比較，管腔長菌、殼側沒有。沒有重複、沒有記錄偵測極限、也沒有對數減量，所以只是初步證據。細胞大小有三種寫法：安全頁寫 0.25 至 1.0 µm，結果頁寫寬 0.8 至 2.0 µm，反應器頁則說孔比任何細胞都小。",
"trap_en":"Saying the membrane was tested many times. It was plated twice, once each.",
"trap_zh":"說膜測過很多次。其實只平板了兩次，各一次。",
"basis":"like Munich 2025: replicates and controls?",
"dom":"hardware",
"id":"q077"
},
{
"q_en":"Your Safety page says you have automated TMP alerts and droplet leak detection. Do you?",
"q_zh":"安全頁說你們有自動 TMP 警報和漏液偵測，真的有嗎？",
"type":"gap",
"tier":"A",
"pages":[
"safety-and-security",
"hardware-bioreactor",
"results",
"software"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"0.70 bar trip armed",
"droplet sensor planned",
"pressure missed the leak"
],
"kw_zh":[
"0.70 bar 跳脫待命",
"漏液感測器規劃中",
"壓力沒抓到漏液"
],
"a_en":"Partly. A pressure trip at 0.70 bar is in the firmware and was armed in the 77-hour run, peak 0.57 bar, so it never fired. The bioreactor page still calls the pressure alarm and droplet sensor planned, and no droplet sensor is on the cost list. In integrated run 3 a valve broke at 38 h and feed pressure rose from 0.19 to 0.37 bar while TMP stayed flat, so pressure alone missed a real leak.",
"a_zh":"部分有。0.70 bar 的壓力跳脫已寫在韌體裡，77 小時那次運轉時待命，最高只到 0.57 bar，所以從未動作。反應器頁仍把壓力警報和漏液感測器寫成規劃中，成本表裡也沒有漏液感測器。整合第 3 次運轉在 38 小時有閥斷裂，進料壓從 0.19 升到 0.37 bar，TMP 卻沒變，所以光靠壓力沒抓到真正的漏液。",
"trap_en":"Reading the Safety page aloud as if every detector is built and tested.",
"trap_zh":"照著安全頁念，好像所有偵測器都已做好並測過。",
"basis":"honesty probe: what is built versus what is described",
"dom":"hardware",
"id":"q078"
},
{
"q_en":"What else can cross a 0.2 µm membrane besides your protein, and what happens if a fiber breaks?",
"q_zh":"0.2 µm 的膜除了你們的蛋白質，還有什麼能穿過？如果纖維破了會怎樣？",
"type":"boundary",
"tier":"A",
"pages":[
"results",
"engineering",
"hardware-bioreactor"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"sorts by size, not molecule",
"vesicles and debris cross",
"plate before trusting"
],
"kw_zh":[
"依大小篩、不分分子",
"囊泡與碎屑會過",
"先平板再信任"
],
"a_en":"A 0.2 µm pore sorts by size, so vesicles and debris of 20 to 200 nm, medium components and the roughly 36 kDa enzyme all cross. Only whole cells are held back. So the shell side is treated as live culture until a plate grows nothing, and the manual asks for plating after every membrane change. The pressure trip only watches for over-pressure; a sudden-drop alarm for a broken fiber is still planned.",
"a_zh":"0.2 µm 的孔只依大小篩選，所以 20 至 200 nm 的囊泡與碎屑、培養基成分，以及約 36 kDa 的酵素都會穿過，只有完整細胞被擋住。因此殼側液體在平板確認沒長菌之前都當作活菌處理，手冊也要求每次換膜後要做平板。壓力跳脫只監看過高壓力；偵測纖維斷裂的壓力驟降警報仍在規劃中。",
"trap_en":"Saying only the protein crosses.",
"trap_zh":"說只有蛋白質會過。",
"basis":"boundary probe: what does the barrier not stop",
"dom":"hardware",
"id":"q079"
},
{
"q_en":"How did expert feedback change your hardware?",
"q_zh":"專家的意見怎麼改變了你們的硬體？",
"type":"integrate",
"tier":"A",
"pages":[
"hardware-bioreactor"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"pinch valve from Chang",
"mainboard from Owl Lab",
"membrane over kill switch"
],
"kw_zh":[
"張教授帶來夾管閥",
"Owl Lab 帶來主機板",
"用膜取代自殺開關"
],
"a_en":"Four changes trace to reviews. Prof. Chang saw nothing pushing product across the wall, so we added the servo pinch valve; he also asked for flow and pressure monitoring, a smaller membrane and the DNPH assay. Teacher He of Owl Lab replaced our PCA9685 driver with STS3215 servos and proposed the single mainboard, which also ended the unstable pressure readings. Dr. Brophy's advice gave us the membrane instead of a kill switch.",
"a_zh":"有四項改變來自審查意見。張嘉修教授指出設計裡沒有東西把產物推過膜壁，所以我們加了伺服夾管閥；他也要求監測流量與壓力、改用較小的膜，並採用 DNPH 檢測。Owl Lab 的何老師把我們的 PCA9685 驅動板換成 STS3215 伺服馬達，並提出單一主機板，連帶解決了壓力讀值不穩的問題。Brophy 博士的建議讓我們用膜取代自殺開關。",
"trap_en":"Listing the experts without saying what physically changed.",
"trap_zh":"只列專家名字，沒說明實際改了什麼。",
"basis":"like Munich 2025: HP to design",
"dom":"hardware",
"id":"q080"
},
{
"q_en":"Why build your own instead of buying a commercial system, and did you compare against one?",
"q_zh":"為什麼自己做、不買商業系統？你們有和商業系統比較過嗎？",
"type":"compare",
"tier":"A",
"pages":[
"hardware-bioreactor",
"hardware-photometer",
"engineering",
"drylab-notebook"
],
"seat":"hw",
"backup":"biz",
"kw_en":[
"no side-by-side",
"membrane bought, rest built",
"photometer ≈ half a BioDrop"
],
"kw_zh":[
"沒有並排比較",
"膜是買的、其餘自製",
"光度計約 BioDrop 一半價"
],
"a_en":"We did not run a side-by-side with a commercial perfusion system, so I cannot give a performance comparison. We bought the hollow-fiber module, US$245, and built the pumps, sensing, valves and dashboard around it. For the photometer, nobody sells an in-line OD600 instrument. The Slim costs US$235 against about US$470 for the BioDrop, which cannot sit in the loop. Known bioreactor materials come to US$1022.67.",
"a_zh":"我們沒有和商業灌流系統做並排比較，所以無法給出性能對照。我們買了中空纖維模組（US$245），其餘的幫浦、感測、閥門和儀表板都是自己做的。光度計方面，市面上沒有在線 OD600 儀器，Slim 成本 US$235，BioDrop 約 US$470 且無法放進循環管路。反應器已知材料成本為 US$1022.67。",
"trap_en":"Inventing a price or performance comparison with a commercial system. None is on the wiki.",
"trap_zh":"編造與商業系統的價格或性能比較，wiki 上沒有。",
"basis":"judge pattern: why not buy it",
"dom":"hardware",
"id":"q081"
},
{
"q_en":"How does your photometer read OD600 without taking a sample?",
"q_zh":"你們的光度計怎麼在不抽樣的情況下讀 OD600？",
"type":"fact",
"tier":"A",
"pages":[
"hardware-photometer",
"measurement"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"600 nm, 2 mm cuvette",
"sample ÷ reference",
"434 h, no sample drawn"
],
"kw_zh":[
"600 nm、2 mm 流動槽",
"樣品 ÷ 參考",
"434 小時不抽樣"
],
"a_en":"An amber 600 nm LED shines through a 2 mm flow cuvette in the loop. A 90:10 beam splitter sends 10% of the light to a reference sensor, and OD600 comes from the sample-to-reference ratio, multiplied by 5 to match a 1 cm path. Against the BioDrop on TiO₂ the raw output sat a median 3.8% apart with no correction. It logged 434 hours without drawing a sample.",
"a_zh":"一顆 600 nm 琥珀色 LED 照過循環管路上 2 mm 的流動槽。90:10 分光鏡把 10% 的光送到參考感測器，OD600 由樣品與參考的比值算出，再乘以 5 換成 1 cm 光徑。在 TiO₂ 上，未經校正的原始輸出與 BioDrop 的中位差距為 3.8%。它連續記錄了 434 小時，沒有抽任何樣品。",
"trap_en":"Forgetting to say the readings are scaled from a 2 mm path to 1 cm.",
"trap_zh":"忘了說讀值是從 2 mm 光徑換算成 1 cm。",
"basis":"judge pattern: how does the instrument work",
"dom":"hardware",
"id":"q082"
},
{
"q_en":"Why 600 nm, and why do you need a reference beam?",
"q_zh":"為什麼選 600 nm？為什麼需要參考光束？",
"type":"design",
"tier":"A",
"pages":[
"hardware-photometer"
],
"seat":"hw",
"backup":"wet1",
"kw_en":[
"standard OD600",
"between green and red",
"drift cancels"
],
"kw_zh":[
"標準 OD600",
"夾在綠紅之間",
"漂移被抵消"
],
"a_en":"600 nm is the standard for OD600, so readings compare with the BioDrop and published curves, and at that wavelength a culture mainly scatters light. Amber also sits between the CcaS green and red response regions, so the photometer's own light does not switch production. The reference beam sees the LED alone, so slow LED drift cancels in the ratio instead of looking like growth.",
"a_zh":"600 nm 是 OD600 的標準波長，所以讀值可以和 BioDrop 及已發表的生長曲線比較，而且在這個波長菌液主要是散射光線。琥珀色也剛好落在 CcaS 綠光與紅光反應區之間，所以光度計自己的光不會誘導或關閉生產。參考光束只看 LED 本身，因此 LED 的緩慢漂移會在比值中抵消，不會被誤認為生長。",
"trap_en":"Saying 600 nm is chosen only because everyone uses it. The CcaSR overlap is the project-specific reason.",
"trap_zh":"只說因為大家都用 600 nm。與 CcaSR 光譜不重疊才是專案特有的理由。",
"basis":"judge pattern: why this wavelength and sensor",
"dom":"hardware",
"id":"q083"
},
{
"q_en":"How do you know your photometer is accurate, and against what?",
"q_zh":"你們怎麼知道光度計準不準？拿什麼當對照？",
"type":"validate",
"tier":"A",
"pages":[
"hardware-photometer",
"results",
"measurement"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"3.8% on TiO₂",
"slope 1.001, −0.12 OD",
"particles, not cells"
],
"kw_zh":[
"TiO₂ 差 3.8%",
"斜率 1.001、低 0.12 OD",
"是顆粒不是細胞"
],
"a_en":"We compared it with a BioDrop on two particle standards. On TiO₂ the raw output was a median 3.8% from the BioDrop, inside the 10% we set beforehand. On silica up to OD 1 the slope was 1.001, but the Pro read about 0.12 OD low, and the slope is 0.93 with the blank included. These are non-living particles; we have no plate-count calibration on cells, and the working limit is about OD 2.5.",
"a_zh":"我們用兩種顆粒標準品和 BioDrop 比對。TiO₂ 上原始輸出與 BioDrop 的中位差距為 3.8%，在事先設定的 10% 之內。矽球在 OD 1 以內斜率是 1.001，但 Pro 整體低約 0.12 OD，把空白點算進去斜率是 0.93。這些都是非活體顆粒，我們還沒有用菌落計數對細胞做校正，工作上限約 OD 2.5。",
"trap_en":"Quoting R² alone. The constant offset and the missing cell-based calibration matter more.",
"trap_zh":"只講 R²。固定偏差和沒有細胞校正更重要。",
"basis":"like Munich 2025: calibration and controls",
"dom":"hardware",
"id":"q084"
},
{
"q_en":"How does your Slim photometer compare with the Pro and with a commercial spectrophotometer?",
"q_zh":"你們的 Slim 光度計和 Pro、和商用分光光度計相比如何？",
"type":"compare",
"tier":"B",
"pages":[
"hardware-photometer",
"measurement"
],
"seat":"hw",
"backup":"biz",
"kw_en":[
"US$235 versus US$372",
"more linear, reads one fifth",
"BioDrop about US$470"
],
"kw_zh":[
"US$235 對 US$372",
"較線性但讀值約五分之一",
"BioDrop 約 US$470"
],
"a_en":"The Slim uses two optical fibers instead of a lens and beam splitter, so it costs US$235.29 against US$371.78 and stands about a quarter of the Pro's height. On silica it was more linear, R² 0.992 against 0.974, but it reads about a fifth as high, so you multiply by 5.57. That was one silica run, not yet repeated on culture. The BioDrop costs about US$470 and cannot sit in the loop.",
"a_zh":"Slim 用兩條光纖取代透鏡和分光鏡，所以成本是 US$235.29，Pro 是 US$371.78，高度約為 Pro 的四分之一。在矽球上它比較線性，R² 0.992 對 0.974，但讀值只有約五分之一，要乘上 5.57。這只是一次矽球實驗，還沒在細胞培養上重複。BioDrop 約 US$470，而且無法放進循環管路。",
"trap_en":"Saying the Slim is better. It trades sensitivity and has not been run long-term.",
"trap_zh":"說 Slim 比較好。它犧牲了靈敏度，也還沒做過長時間運轉。",
"basis":"judge pattern: cheaper build versus commercial",
"dom":"hardware",
"id":"q085"
},
{
"q_en":"You say the leaf sensor reads 1.2 to 1.9 °C warm. How was that tested, and can a farmer trust it?",
"q_zh":"你們說葉片感測器讀值偏高 1.2 至 1.9 °C，是怎麼測的？農民可以信任它嗎？",
"type":"validate",
"tier":"A",
"pages":[
"software",
"results",
"home"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"bench only, no leaf",
"offsets +1.71 to +0.47 °C",
"wetness never wetted"
],
"kw_zh":[
"只在桌上、沒有葉片",
"偏差 +1.71 到 +0.47 °C",
"濕度從未沾濕"
],
"a_en":"It was tested only on a bench, in air, with no leaf: 540 paired readings against an SHT31 air sensor at three sites on 10 October. The offsets were +1.71, +1.31 and +0.47 °C, so the 1.2 to 1.9 summary leaves out the +0.47 site, and the offset drifted between runs. The wetness channel read 0.0% because it was never wetted. No threshold can be set yet; it needs a site correction first.",
"a_zh":"只在桌上、空氣中、沒有葉片的情況下測過：10 月 10 日在三個地點，用 SHT31 空氣感測器做了 540 組成對讀值。偏差分別是 +1.71、+1.31、+0.47 °C，所以「1.2 至 1.9」的摘要漏掉了 +0.47 的地點，而且偏差在不同次測量間還會漂移。濕度通道讀 0.0%，因為從來沒有沾濕過。目前還不能設定閾值，要先做各地點的校正。",
"trap_en":"Repeating 1.2 to 1.9 as one fixed offset. The sites ranged from +0.47 to +1.71 and runs from −0.09 to +1.86.",
"trap_zh":"把 1.2 至 1.9 說成固定偏差。各地點從 +0.47 到 +1.71，單次從 −0.09 到 +1.86。",
"basis":"validate: bench test versus field claim",
"dom":"hardware",
"id":"q086"
},
{
"q_en":"Have you shown that your LPA light intensities give different gene expression, and what light dose is it?",
"q_zh":"你們有證明 LPA 的不同光強度會造成不同的基因表現嗎？光劑量到底是多少？",
"type":"validate",
"tier":"A",
"pages":[
"hardware-diopal",
"results",
"measurement"
],
"seat":"hw",
"backup":"wet1",
"kw_en":[
"intensity test not run",
"lux, never photon flux",
"PWM sets the tiers"
],
"kw_zh":[
"強度測試還沒做",
"只有 lux、沒有光子通量",
"層級靠 PWM"
],
"a_en":"The LPA page says we have not yet run the intensity test the array was built for. Results has early Western blots at 2%, 12% and 100% green, and they did not order by intensity; red at full power was not silent. Light is reported only in lux, never photon flux. Matched green groups sit only about 3% apart, so PWM sets the levels, at 220, 510 and 3850 lux on the plate map.",
"a_zh":"LPA 頁面寫明，這個陣列原本要做的強度測試還沒有進行。結果頁有 2%、12%、100% 綠光的早期 Western blot，但結果不依強度排序，全功率紅光也不是沒有訊號。光只用 lux 報告，沒有光子通量。配對後各組綠光只差約 3%，所以強度層級靠 PWM 設定，培養盤圖上是 220、510、3850 lux。",
"trap_en":"Saying the LPA proved graded light response. The wiki says it has not.",
"trap_zh":"說 LPA 已證明光強度有梯度反應。wiki 說還沒有。",
"basis":"validate: claim versus the page's own caveat",
"dom":"hardware",
"id":"q087"
},
{
"q_en":"What wavelengths are your green and red LEDs, exactly?",
"q_zh":"你們綠光和紅光 LED 的波長到底是多少？",
"type":"gap",
"tier":"A",
"pages":[
"home",
"hardware-diopal",
"results",
"development",
"measurement"
],
"seat":"hw",
"backup":"wet1",
"kw_en":[
"pages disagree",
"red LED about 640 nm",
"never verified"
],
"kw_zh":[
"各頁不一致",
"紅光 LED 約 640 nm",
"沒有驗證過"
],
"a_en":"We do not have one confirmed answer. Home says 520 nm green and 660 nm red, other pages say about 535 and 670, and Results says 525 and 630, and that our red LEDs emit at 640 nm, short of the 672 nm CcaS needs to switch off. The LPA page gives no wavelength, and Development lists verifying the real wavelengths as future work. So the numbers are literature values, not our measurement.",
"a_zh":"我們沒有一個確認過的答案。首頁寫綠光 520 nm、紅光 660 nm，其他頁寫約 535 和 670，結果頁寫 525 和 630，並說我們的紅光 LED 實際發光約 640 nm，比 CcaS 關閉所需的 672 nm 短。LPA 頁面沒有給波長，開發頁把驗證真實波長列為未來工作。所以這些是文獻數值，不是我們的量測。",
"trap_en":"Quoting one pair of numbers. Judges can find the other pages.",
"trap_zh":"只報一組數字。評審找得到其他頁面。",
"basis":"cross-page conflict on a basic specification",
"dom":"hardware",
"id":"q088"
},
{
"q_en":"Is your green-light control actually running in the bioreactor?",
"q_zh":"你們的綠光控制真的有在反應器裡運作嗎？",
"type":"gap",
"tier":"A",
"pages":[
"software",
"hardware-bioreactor",
"development",
"biomanufacturing"
],
"seat":"hw",
"backup":"wet1",
"kw_en":[
"tested on LPA only",
"all runs constitutive",
"green and red alike"
],
"kw_zh":[
"只在 LPA 測過",
"所有運轉都是組成型",
"綠紅結果相近"
],
"a_en":"No. Green-light induction was tested on the LPA only. Every integrated bioreactor run used a constitutive promoter, so light control was out of those tests, and the Digital Twin labels green light as tested, not integrated. A 3 m green LED strip is on the rig specification, but it never induced a culture. On the LPA, green and red gave similar ELISA values, so light control itself is not yet shown.",
"a_zh":"沒有。綠光誘導只在 LPA 上測過。每一次整合反應器運轉都用組成型啟動子，所以光控制不在那些測試裡，數位孿生也把綠光標為「測過但未整合」。規格表有一條 3 m 的綠光 LED 燈帶，但它從未誘導過任何培養。在 LPA 上，綠光與紅光的 ELISA 數值相近，所以光控制本身也還沒被證明。",
"trap_en":"Presenting the pipeline slide as if the light already switches the reactor.",
"trap_zh":"把流程圖講得好像光已經在控制反應器。",
"basis":"honesty probe: pipeline versus what is joined up",
"dom":"hardware",
"id":"q089"
},
{
"q_en":"How did the LPA connect to your digital twin?",
"q_zh":"LPA 和你們的數位孿生是怎麼連起來的？",
"type":"integrate",
"tier":"A",
"pages":[
"hardware-diopal",
"software",
"results"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"logistic fit as growth prior",
"within 7% versus 29–68%",
"0.286 inside interval"
],
"kw_zh":[
"logistic 擬合當先驗",
"誤差 7% 對 29–68%",
"0.286 落在區間內"
],
"a_en":"The 19 September LPA run gave a logistic growth fit, r = 0.299 per hour and K = 1.005, and the twin uses it as a growth prior, though light leaked between wells in that run. Leaving each arm out in turn, its 24 h OD was forecast within 7% with the prior and 29 to 68% off without it. A rate registered on 1 October, 0.2986, met Digital Twin run 6 at 0.286, inside the interval.",
"a_zh":"9 月 19 日 LPA 的運轉得到 logistic 生長擬合，r = 0.299 每小時、K = 1.005，數位孿生拿它當生長先驗，不過那次運轉光線有在孔間外漏。把每一組輪流拿掉，用前 8 小時預測 24 小時 OD，有先驗時誤差在 7% 內，沒有先驗則差 29 至 68%。10 月 1 日登記的速率 0.2986，與數位孿生第 6 次運轉的 0.286 相比，落在區間之內。",
"trap_en":"Skipping that the prior comes from a run where light leaked between wells.",
"trap_zh":"沒提到這個先驗來自光線外漏的那次運轉。",
"basis":"integrate: model and lab, like Munich 2025",
"dom":"hardware",
"id":"q090"
},
{
"q_en":"How does your floating hydroponic plate work?",
"q_zh":"你們的浮動水耕板是怎麼運作的？",
"type":"fact",
"tier":"B",
"pages":[
"hardware-hydroponics"
],
"seat":"hw",
"backup":"plant",
"kw_en":[
"sealed air pontoons",
"13 seedlings, no glue",
"1 mm per 3.5 g"
],
"kw_zh":[
"密封氣室浮筒",
"13 株、免膠",
"每 3.5 g 沉 1 mm"
],
"a_en":"It floats on 42.27 cm³ of sealed air in two pontoons, so seedling roots stay at one depth while the medium level falls. Thirteen seedlings sit in 16 printed PLA pieces that clip together without glue, about US$1.80 of filament. By calculation it sinks about 1 mm for every 3.5 g. It sits in a 1000 µL pipette-tip box with a black box over the lower half to keep light off the medium.",
"a_zh":"它靠兩個浮筒裡共 42.27 cm³ 的密封空氣浮起，所以培養液下降時幼苗的根仍維持同一深度。13 株幼苗放在由 16 個列印 PLA 零件組成、免膠卡合的板上，耗材約 US$1.80。計算上每增加約 3.5 g 下沉約 1 mm。它放在 1000 µL 吸管尖盒中，下半部再套一個黑盒避免培養液照光。",
"trap_en":"Giving the freeboard as a measured value.",
"trap_zh":"把乾舷說成實測值。",
"basis":"judge pattern: how does the hardware work",
"dom":"hardware",
"id":"q091"
},
{
"q_en":"How do you know the plate floats at the height you calculated, and did your plant experiments use it?",
"q_zh":"你們怎麼知道浮板的高度和計算一樣？植物實驗有用它嗎？",
"type":"validate",
"tier":"A",
"pages":[
"hardware-hydroponics",
"drylab-notebook",
"plant"
],
"seat":"hw",
"backup":"plant",
"kw_en":[
"computed, not measured",
"one plate per arm",
"moved to tube racks"
],
"kw_zh":[
"是計算不是實測",
"每組一塊板",
"後來改用試管架"
],
"a_en":"We do not know yet. The 4.8 mm freeboard at 71.3 g is computed from the STL files, and no one has measured the freeboard of a printed plate. The CH Bio peptide salt pre-tests ran in these boxes with one plate per arm, so treatments could not be ranked. After several failed plantings in the boxes, the later protectant runs moved to tube racks, where Arabidopsis grew better.",
"a_zh":"目前還不知道。71.3 g 時 4.8 mm 的乾舷是由 STL 檔計算而來，還沒有人量過實際列印浮板的乾舷。CH Bio 胜肽的鹽逆境前測是在這些盒子裡做的，每個處理只有一塊板，所以無法排出處理的優劣。盒子裡幾次種植失敗後，後來的保護物實驗改用試管架，阿拉伯芥長得比較好。",
"trap_en":"Saying the plate carried all the plant experiments. The later protectant runs used tube racks.",
"trap_zh":"說所有植物實驗都用這塊浮板。後來的保護物實驗用的是試管架。",
"basis":"validate: design prediction versus a measurement",
"dom":"hardware",
"id":"q092"
},
{
"q_en":"Which sensors does your bioreactor really have, and which ones are missing?",
"q_zh":"你們的反應器真正有哪些感測器？哪些是沒有的？",
"type":"gap",
"tier":"A",
"pages":[
"software",
"hardware-bioreactor",
"development"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"OD, pH, flow, 3 pressures",
"no DO probe",
"temperature probe silent"
],
"kw_zh":[
"OD、pH、流量、3 個壓力",
"沒有溶氧探頭",
"溫度探頭沒回應"
],
"a_en":"Live in the runs: in-line OD600, pH, flow and three pressure transducers at feed, retentate and permeate, plus servo control of the pinch valve and four Luer valves. Missing: dissolved oxygen, because both probes failed calibration and cannot be autoclaved. The temperature probe is fitted but not responding, so the operator types the temperature in. There is no level sensing, and green light is not integrated.",
"a_zh":"運轉中有的：在線 OD600、pH、流量，以及進料、回流、滲透側三個壓力感測器，另有夾管閥和四個 Luer 閥的伺服控制。沒有的：溶氧，因為兩支探頭校正都撐不住、也不能高壓滅菌。溫度探頭裝了但沒有回應，所以由操作員手動輸入溫度。也沒有液位感測，綠光也還沒整合。",
"trap_en":"Listing the commercial design's sensors (temperature, four pressures) as if they were on the lab rig.",
"trap_zh":"把商用設計的感測器（溫度、四個壓力）說成實驗台上有的。",
"basis":"like Munich 2025: what sensors and control loops exist",
"dom":"hardware",
"id":"q093"
},
{
"q_en":"Your pages disagree about some runs: the pH in run 2, the volume in run 1, and the first Western blot. What actually happened?",
"q_zh":"你們的頁面對某些運轉說法不一：第 2 次的 pH、第 1 次的體積、第一張 Western blot。實際發生了什麼？",
"type":"validate",
"tier":"A",
"pages":[
"hardware-bioreactor",
"results",
"software",
"engineering"
],
"seat":"hw",
"backup":"wet2",
"kw_en":[
"acidic versus rose",
"500 mL versus 1 L",
"faint versus confirmed"
],
"kw_zh":[
"偏酸對上升",
"500 mL 對 1 L",
"微弱對已確認"
],
"a_en":"On pH, the bioreactor page says integrated run 2 left the medium too acidic, while Results says pH rose; the cause was unclear and we cut the volume to 500 mL. On volume, the first September run was 500 mL on the hardware, Engineering and Results pages, but the Digital Twin table says 1 L. On the blot, the bioreactor page says a shell band is faint at best, while Results says it confirmed selective passage. These are open conflicts.",
"a_zh":"pH 方面，反應器頁說整合第 2 次運轉培養基太酸，結果頁卻說 pH 上升；原因不明，我們把體積降到 500 mL。體積方面，9 月第一次運轉在硬體、工程與結果頁都寫 500 mL，但數位孿生的表格寫 1 L。Western blot 方面，反應器頁說殼側條帶「微弱」，結果頁卻說它確認了選擇性通過。這些是尚未解決的矛盾。",
"trap_en":"Picking the more flattering version of each. State both and say which page you trust.",
"trap_zh":"每項都選比較好看的版本。兩種都要說，並說明你信哪一頁。",
"basis":"cross-page conflicts on run records",
"dom":"hardware",
"id":"q094"
},
{
"q_en":"A valve broke at 38 hours and leaked into the incubator. What broke it, and do you actually know?",
"q_zh":"38 小時時有一個閥斷裂、漏液到培養箱。是什麼弄壞它的？你們真的確定嗎？",
"type":"gap",
"tier":"A",
"pages":[
"hardware-bioreactor",
"results",
"engineering"
],
"seat":"hw",
"backup":"wet2",
"kw_en":[
"peroxide reached it undiluted",
"KOH corroded later valves",
"cannot tell them apart"
],
"kw_zh":[
"過氧化氫未稀釋就到閥",
"KOH 後來腐蝕閥",
"無法分辨兩者"
],
"a_en":"In integrated run 3 a Luer valve at the start of the lumen loop broke in half. We blamed our clean-in-place step, because 35% peroxide reached the valve before it was diluted. Later a valve on the KOH dosing line failed too. Engineering blames KOH, but Results says peroxide and KOH go through the same fitting, so those runs cannot tell them apart. We now premix the peroxide and want alkali-resistant valves.",
"a_zh":"整合第 3 次運轉中，管腔迴路起點的一個 Luer 閥斷成兩半。我們認為是自己的現場清潔步驟造成的，因為 35% 過氧化氫在稀釋前就流到閥。後來 KOH 加料管線上的閥也壞了。工程頁認為是 KOH，但結果頁說過氧化氫和 KOH 通過同一個接頭，這幾次運轉無法分辨。現在我們先把過氧化氫稀釋好再進系統，並打算換耐鹼的閥。",
"trap_en":"Stating one cause with certainty. Results says the two reagents cannot be separated.",
"trap_zh":"很肯定地說只有一個原因。結果頁說兩種試劑無法區分。",
"basis":"honesty probe: what failed and how sure are you",
"dom":"hardware",
"id":"q095"
},
{
"q_en":"How reliable are your pressure readings? Do you have three transducers or four?",
"q_zh":"你們的壓力讀值有多可靠？是三個還是四個壓力感測器？",
"type":"validate",
"tier":"A",
"pages":[
"hardware-bioreactor",
"software",
"biomanufacturing",
"engineering"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"3 on the rig, 4 planned",
"±0.1 bar versus few kPa",
"read as a trend"
],
"kw_zh":[
"實驗台 3 個、規劃 4 個",
"±0.1 bar 對幾 kPa",
"看趨勢"
],
"a_en":"The rig has three, at feed, retentate and permeate. The cost list counts four and the Digital Twin shows four channels, which matches the planned commercial layout. The sensors are 1 MPa parts at 1% of full scale, about 0.1 bar, while our TMP runs a few kPa, so we read fouling as a trend, not a single value. In the 14 to 16 October run the extra pressure rose from 2.0 to 3.8 kPa; a 0 to 100 kPa sensor is the cheap upgrade.",
"a_zh":"實驗台上有三個，分別在進料、回流、滲透側。成本表算了四個，數位孿生也顯示四個通道，這是對應規劃中的商用配置。這些感測器是 1 MPa 量程、準確度為滿量程 1%（約 0.1 bar），而我們的 TMP 只有幾 kPa，所以積垢要看趨勢，不能看單一數值。10 月 14 至 16 日那次運轉的額外壓力從 2.0 升到 3.8 kPa；換成 0 至 100 kPa 的感測器是最便宜的改善。",
"trap_en":"Saying TMP was measured precisely at 0.03 bar. The sensor's stated accuracy is larger than that.",
"trap_zh":"說 TMP 精確量到 0.03 bar。感測器標示的準確度比這個值還大。",
"basis":"validate: instrument resolution versus the signal",
"dom":"hardware",
"id":"q096"
},
{
"q_en":"Is US$1022.67 really what your bioreactor costs?",
"q_zh":"US$1022.67 真的是你們反應器的成本嗎？",
"type":"gap",
"tier":"A",
"pages":[
"hardware-bioreactor",
"biomanufacturing",
"entrepreneurship",
"hardware-photometer"
],
"seat":"hw",
"backup":"biz",
"kw_en":[
"known costs only",
"controller and KOH pump missing",
"planning price US$2277"
],
"kw_zh":[
"只含已知成本",
"缺控制器與 KOH 幫浦",
"規劃價約 US$2277"
],
"a_en":"It is the known cost, not the full cost. The list leaves out the UNO Q controller, the mainboard with its converter, the KOH dosing pump and the stir bar, and the pinch valve's nuts and screws are unpriced. The photometer is US$371.78 of it and the membrane US$245. The business plan gives about US$2277 for a 1 L unit, and the bioreactor part of the prototype is NT$30 450. Those are planning estimates, not quotes.",
"a_zh":"這是已知成本，不是完整成本。清單沒有列入 UNO Q 控制器、含轉換器的主機板、KOH 加料幫浦和攪拌子，夾管閥的螺帽螺絲也沒標價。其中光度計 US$371.78、膜 US$245。商業計畫書給 1 L 機組約 US$2277，原型中反應器部分是 NT$30 450。這些是規劃估算，不是報價。",
"trap_en":"Calling US$1022.67 the total build cost.",
"trap_zh":"把 US$1022.67 說成完整的製作成本。",
"basis":"judge pattern: what does it cost, honestly",
"dom":"hardware",
"id":"q097"
},
{
"q_en":"Could this scale to a real farm? What limits it?",
"q_zh":"這能擴大到真正的農場嗎？限制是什麼？",
"type":"impact",
"tier":"A",
"pages":[
"biomanufacturing",
"hardware-bioreactor"
],
"seat":"hw",
"backup":"biz",
"kw_en":[
"scale out, not up",
"medium, pumps, energy bind",
"design flux assumed 2 LMH"
],
"kw_zh":[
"複製而非放大",
"培養基、幫浦、能源是瓶頸",
"假設設計通量 2 LMH"
],
"a_en":"Our route is scale-out, copying one module, and from one to eight modules the membrane is not the limit. Medium draw, pumps and energy are: 0.96 rising to 7.7 L per day, and 3 to 8 W rising to 24 to 64 W. Those numbers assume the 2 LMH design flux; our runs drew 36 to 72 LMH. The commercial cabinet has not been built, so its output per day, power and weight are not known.",
"a_zh":"我們的路線是複製單一模組（scale-out），從一個到八個模組時，膜不是限制。限制是培養基用量、幫浦和能源：培養基每天 0.96 增加到 7.7 L，功率從 3 至 8 W 增加到 24 至 64 W。這些數字假設設計通量 2 LMH，而我們實際運轉抽了 36 至 72 LMH。商用機櫃還沒有做出來，所以每日產量、耗電與重量都還不知道。",
"trap_en":"Saying the system scales because the membrane never limits. Medium, pumps and power do.",
"trap_zh":"說因為膜不是限制所以能擴大。培養基、幫浦和電力才是。",
"basis":"like Munich 2025: does it scale",
"dom":"hardware",
"id":"q098"
},
{
"q_en":"What is the next step before a farmer could actually use it?",
"q_zh":"在農民真正能使用之前，下一步是什麼？",
"type":"impact",
"tier":"B",
"pages":[
"hardware-bioreactor",
"biomanufacturing",
"entrepreneurship"
],
"seat":"hw",
"backup":"biz",
"kw_en":[
"cabinet is a design only",
"pilot five to ten units",
"cartridge seal unsolved"
],
"kw_zh":[
"機櫃只是設計",
"先試點五到十台",
"卡匣密封尚待解決"
],
"a_en":"The farmer cabinet, about 400 by 240 by 620 mm with a 7-inch screen and sealed refill cartridges, is a design; it has not been built. The planning price is about US$2277 for a 1 L unit. Before any sale the wiki says we would pilot five to ten units for one growing season to measure operating cost, reliability and field performance. The cartridges still need a reliable seal, because the printed parts were not watertight.",
"a_zh":"給農民用的機櫃約 400 × 240 × 620 mm，配 7 吋螢幕和密封補充卡匣，目前只是設計，還沒有做出來。規劃價格約 US$2277（1 L 機組）。wiki 寫明在任何銷售之前，會先試點五到十台、跑一個種植季，量測營運成本、可靠度與田間表現。卡匣還需要可靠的密封，因為列印零件不防水。",
"trap_en":"Describing the commercial cabinet as built or tested.",
"trap_zh":"把商用機櫃說成已做好或測過。",
"basis":"judge pattern: what is the next step and what is the evidence it can work",
"dom":"hardware",
"id":"q099"
},
{
"q_en":"Would your system work for a different or larger protein, or another organism?",
"q_zh":"你們的系統能用在別種或更大的蛋白質，或別的生物上嗎？",
"type":"boundary",
"tier":"A",
"pages":[
"hardware-bioreactor",
"engineering",
"results"
],
"seat":"hw",
"backup":"wet2",
"kw_en":[
"three proteins, one run",
"size sorts what crosses",
"other chassis untried"
],
"kw_zh":[
"三種蛋白、一次運轉",
"大小決定能否通過",
"沒試過其他底盤"
],
"a_en":"Only ACC deaminase was followed for 72 hours. In one run LEA14 and BoPep4 also read the same on both sides, 5.8 against 5.9 and 6.2 against 5.4 µg/mL. The membrane sorts by size and the roughly 36 kDa enzyme crosses, so a much larger protein or aggregate is untested. The hardware is the same for strain 168 or WB800, but 168 barely made enzyme. No other chassis was tried.",
"a_zh":"只有 ACC deaminase 追蹤了 72 小時。在一次運轉中，LEA14 和 BoPep4 兩側的數值也相近，分別是 5.8 對 5.9、6.2 對 5.4 µg/mL。膜依大小篩選，約 36 kDa 的酵素能通過，所以更大的蛋白質或聚集物還沒有測過。硬體對 168 或 WB800 都一樣，但 168 幾乎沒產出酵素。我們沒有試過其他底盤。",
"trap_en":"Saying any protein will cross. Only three were read, in one run.",
"trap_zh":"說任何蛋白質都能通過。只在一次運轉中讀過三種。",
"basis":"boundary probe: can it apply to something else",
"dom":"hardware",
"id":"q100"
},
{
"q_en":"What is the upper limit of your photometer, and what happens in a denser culture?",
"q_zh":"你們光度計的上限是多少？培養液更濃時會怎樣？",
"type":"boundary",
"tier":"A",
"pages":[
"hardware-photometer",
"software",
"results",
"development"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"about OD 2.5 on silica",
"beam lost above 2.7",
"Slim range is an estimate"
],
"kw_zh":[
"矽球約 OD 2.5",
"超過 2.7 光束丟失",
"Slim 範圍只是估計"
],
"a_en":"On silica the Pro reads about 1:1 with the BioDrop up to about OD 2.5, then reads low. In the 14 October run the sample beam fell to a tenth of the reference above about OD 2.7 and the gate marked it low signal; the 77-hour run read to 3.34. Above that, samples would be drawn by hand. The Slim may reach about five times further, but that is an estimate, untested past the top of the series.",
"a_zh":"在矽球上，Pro 與 BioDrop 約 1:1，到約 OD 2.5 為止，之後讀值偏低。10 月 14 日那次運轉在約 OD 2.7 以上樣品光束掉到參考的十分之一，閘門把它標為訊號過低；77 小時那次讀到 3.34。再高就得手動抽樣。Slim 可能能多量約五倍，但那只是估計，沒有測過超出矽球系列上限的範圍。",
"trap_en":"Quoting one limit. The wiki gives about 2.5, 2.7 and 3.34 in different places.",
"trap_zh":"只報一個上限。wiki 在不同地方寫約 2.5、2.7、3.34。",
"basis":"boundary probe: limits of the instrument",
"dom":"hardware",
"id":"q101"
},
{
"q_en":"How do your hardware sensors feed the digital twin?",
"q_zh":"你們的硬體感測器怎麼餵給數位孿生？",
"type":"integrate",
"tier":"A",
"pages":[
"software",
"biomanufacturing",
"hardware-bioreactor"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"shear agrees within 2.8%",
"alarm 26.7 h early",
"Kalman: 41% then 0%"
],
"kw_zh":[
"兩種剪切率差 2.8%",
"提早 26.7 小時警報",
"Kalman：41% 與 0%"
],
"a_en":"Pressure, flow, OD and pH go to the Digital Twin. Wall shear from the pressure sensors and from the flowmeter agree to 2.8%, so each checks the other. An autoencoder on the photometer's reference beam flagged the failing sensor 26.7 hours before OD became unusable. A Kalman filter cut two-hour forecast error by 41% on the September run but 0% on the last run, and 24% at 8 and 12 hours. So far the models run on recorded data and a person decides.",
"a_zh":"壓力、流量、OD、pH 都送進數位孿生。由壓力感測器和由流量計算出的管壁剪切率相差 2.8%，兩者互相檢查。對光度計參考光束做的自編碼器，在 OD 無法使用前 26.7 小時就標出感測器故障。Kalman 濾波在 9 月那次運轉讓兩小時預測誤差降低 41%，在最後一次運轉是 0%，8 與 12 小時則降低 24%。目前模型都在記錄好的資料上跑，決定仍由人做。",
"trap_en":"Saying the twin controls the reactor automatically. A person approves every decision.",
"trap_zh":"說數位孿生會自動控制反應器。每項決定都由人核可。",
"basis":"integrate: hardware to model, like Munich 2025",
"dom":"hardware",
"id":"q102"
},
{
"q_en":"Why a peristaltic pump, and which pump model do you actually use?",
"q_zh":"為什麼用蠕動幫浦？你們實際用的是哪一型？",
"type":"design",
"tier":"A",
"pages":[
"hardware-bioreactor",
"biomanufacturing",
"results"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"magnetic pump could not push medium",
"closed fluid path",
"pump model name unclear"
],
"kw_zh":[
"磁力幫浦推不動培養基",
"流體路徑封閉",
"型號說法不一"
],
"a_en":"A peristaltic tube wears in long runs, so we tested a magnetic pump. With culture medium it could not build pressure, could not lift liquid from the bottle and never held a working flow, so the peristaltic stayed. One loose end: the cost list names a BP1000 rated 1 L/min, our calibration reached 1535 mL/min, and other pages cite a ZP4000 rated 230 to 2600 mL/min. I cannot reconcile the model name from the wiki.",
"a_zh":"蠕動幫浦的管子在長時間運轉會磨損，所以我們試了磁力幫浦。用培養基時它建不起壓力、無法從瓶中抽液，也始終沒有穩定流量，所以還是留用蠕動幫浦。有一個沒解決的地方：成本表寫的是額定 1 L/min 的 BP1000，我們校正時卻到 1535 mL/min，其他頁面則引用額定 230 至 2600 mL/min 的 ZP4000。型號名稱我無法從 wiki 對上。",
"trap_en":"Claiming the peristaltic pump is the better pump. It wears out sooner; it was the only one that worked.",
"trap_zh":"說蠕動幫浦比較好。它磨損較快，只是唯一能用的。",
"basis":"design check plus an unreconciled specification",
"dom":"hardware",
"id":"q103"
},
{
"q_en":"How do you sterilize the loop, and how do you handle the waste?",
"q_zh":"你們怎麼滅菌循環管路？廢棄物怎麼處理？",
"type":"fact",
"tier":"A",
"pages":[
"hardware-bioreactor",
"safety-and-security",
"engineering"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"900 mL water + 100 mL peroxide",
"five 1 L rinses",
"waste at 121 °C"
],
"kw_zh":[
"900 mL 水＋100 mL 過氧化氫",
"五次 1 L 沖洗",
"廢棄物 121 °C"
],
"a_en":"We cannot autoclave the assembled loop, so we clean in place: 900 mL water and 100 mL of 35% hydrogen peroxide circulate for 15 minutes, starch–iodide paper checks for peroxide, then about five 1 L rinses. Waste is separate: solid waste is autoclaved at 121 °C for 15 to 30 minutes and liquids are bleached, at BSL-1. The price was a broken valve when peroxide reached it undiluted, so the mixing step changed.",
"a_zh":"組裝好的循環放不進高壓滅菌鍋，所以我們現場清潔：900 mL 水加 100 mL 35% 過氧化氫循環 15 分鐘，用澱粉碘化物試紙檢查過氧化氫，再沖洗約五次 1 L 的水。廢棄物另外處理：在 BSL-1 下，固態廢棄物以 121 °C 高壓滅菌 15 至 30 分鐘，液體用漂白水處理。代價是過氧化氫未稀釋就流到閥，閥因此斷裂，所以後來改了混合步驟。",
"trap_en":"Saying the loop is autoclaved. It is chemically cleaned; only waste is autoclaved.",
"trap_zh":"說循環管路有高壓滅菌。它是化學清潔，只有廢棄物高壓滅菌。",
"basis":"judge pattern: safety and sterility of the device",
"dom":"hardware",
"id":"q104"
},
{
"q_en":"Give us one example where an expert's advice changed your design, not just your plan.",
"q_zh":"請舉一個專家建議改變了你們「設計」而不只是計畫的例子。",
"type":"integrate",
"tier":"A",
"pages":[
"human-practices",
"hardware-bioreactor",
"safety-and-security"
],
"seat":"ihp",
"backup":"hw",
"kw_en":[
"Brophy, 18 April",
"kill switch to membrane",
"one plating only"
],
"kw_zh":[
"Brophy 4/18",
"自殺開關改成膜",
"只做一次塗盤"
],
"a_en":"Dr. Jennifer Brophy, on April 18. We had planned a kill switch. She said genetic switches can mutate or fail, so physical containment should come first. We changed to a 0.2 micron hollow-fiber membrane that keeps cells in and lets protectant out. Our safety page shows no colonies on the shell side after 24 hours. That is one plating without replicates, so it is preliminary evidence, not proof.",
"a_zh":"Jennifer Brophy 博士，4 月 18 日。我們原本計畫用自殺開關，她指出基因開關可能突變或失效，應該先做物理圍堵。所以我們改用 0.2 微米中空纖維膜，把細胞留在裡面、讓保護劑出來。安全頁顯示 24 小時後殼側沒有菌落，但那只是一次塗盤、沒有重複，所以只是初步證據，不是證明。",
"trap_en":"Saying 'experts gave us feedback' with no named before and after.",
"trap_zh":"只說「專家給了回饋」，沒有講出具體的改變前後。",
"basis":"like Lambert 2025: best feedback that changed the project",
"dom":"ihp",
"id":"q105"
},
{
"q_en":"You met Prof. Chen Wen-Liang three times. What did each meeting change?",
"q_zh":"你們和陳文亮教授見了三次面，每次分別改變了什麼？",
"type":"integrate",
"tier":"A",
"pages":[
"human-practices",
"entrepreneurship"
],
"seat":"ihp",
"backup":"biz",
"kw_en":[
"printer and ink",
"model meets wet lab",
"scenario first"
],
"kw_zh":[
"印表機與墨水",
"模型連結濕實驗",
"先講情境"
],
"a_en":"Each meeting changed something different. April 10: hardware is the printer and Bacillus is the ink, so we stopped releasing bacteria into soil and built a contained bioreactor. June 20: our model and wet lab ran separately, so we linked them and added dissolved oxygen tracking. October 15: open with the farm scenario, so we reordered how we explain the digital twin.",
"a_zh":"每次改變的東西都不一樣。4 月 10 日：硬體是印表機、枯草桿菌是墨水，所以我們不再把細菌放進土壤，改做封閉式生物反應器。6 月 20 日：我們的模型和濕實驗各做各的，於是把兩者連起來，並加入溶氧監測。10 月 15 日：先講農場情境，所以我們重排了數位孿生的說明順序。",
"trap_en":"Listing meeting dates without saying what changed each time.",
"trap_zh":"只報日期，沒說每次改了什麼。",
"basis":"like Lambert 2025: feedback that changed direction",
"dom":"ihp",
"id":"q106"
},
{
"q_en":"Why did you move away from hydroponics as your main plant system?",
"q_zh":"你們為什麼不再把水耕當作主要的植物系統？",
"type":"integrate",
"tier":"A",
"pages":[
"human-practices",
"contribution"
],
"seat":"ihp",
"backup":"plant",
"kw_en":[
"Cheng, 27 March",
"agar then soil",
"unintended stress"
],
"kw_zh":[
"鄭梅君 3/27",
"瓊脂再到土壤",
"非預期壓力"
],
"a_en":"Prof. Cheng Mei-Chun told us on March 27 that hydroponics alone was unstable and that handling can stress plants. She suggested agar plates first, then soil, and gave us Arabidopsis seeds. We also dropped osmotic stress. On August 28 she showed that some earlier results may have come from unintended stress, so we standardised plant age and treatment timing. That is the protocol on our Contribution page.",
"a_zh":"鄭梅君教授 3 月 27 日告訴我們，只靠水耕不穩定，操作本身也會讓植物受壓。她建議先用瓊脂盤再移到土壤，並提供阿拉伯芥種子。我們也放棄了滲透壓逆境。8 月 28 日她指出先前有些結果可能來自非預期壓力，所以我們統一了植株年齡與處理時間。這就是貢獻頁上的實驗流程。",
"trap_en":"Claiming hydroponics was dropped entirely. It is still used, just not as the only proof.",
"trap_zh":"說水耕完全不用了。其實還在用，只是不再當唯一證據。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q107"
},
{
"q_en":"Dr. Sattely told you your proof of concept might not work. What did you do about it?",
"q_zh":"Sattely 博士說你們的概念驗證可能不會成功，你們做了什麼？",
"type":"integrate",
"tier":"A",
"pages":[
"human-practices",
"results"
],
"seat":"ihp",
"backup":"wet2",
"kw_en":[
"test protectant alone",
"one stress",
"RNA and protein"
],
"kw_zh":[
"先單獨測保護劑",
"聚焦一種逆境",
"RNA 與蛋白質"
],
"a_en":"On June 27 she said we had tried too many stresses and not tested the protectant by itself. So we tested purified protectant directly on plants before trusting the bacterial system. On September 12, with Prof. Endy, they asked us to separate the bacteria from the protectant, and to check ACCD at both RNA and protein level. We added those controls and checks. Results are on our Results page.",
"a_zh":"6 月 27 日她指出我們同時試太多逆境，也沒有單獨驗證保護劑。所以我們先把純化的保護劑直接用在植物上，再相信細菌系統。9 月 12 日與 Endy 教授見面時，他們要求我們區分細菌與保護劑的作用，並在 RNA 與蛋白質兩個層級驗證 ACCD。我們因此補上這些對照與驗證，結果在 Results 頁。",
"trap_en":"Presenting her critique as praise.",
"trap_zh":"把她的批評講成稱讚。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q108"
},
{
"q_en":"How did the farmers you interviewed change who you are building for?",
"q_zh":"你們訪談的農民如何改變了你們的目標對象？",
"type":"integrate",
"tier":"A",
"pages":[
"human-practices",
"entrepreneurship"
],
"seat":"ihp",
"backup":"biz",
"kw_en":[
"Expo, 30 farmers",
"pests first",
"not organic"
],
"kw_zh":[
"花博 30 位農民",
"病蟲害優先",
"不是有機"
],
"a_en":"At the Taipei Expo Farmers Market on May 16 we interviewed over 30 organic smallholders. They named pests and disease more than heat, so we added biotic stress as a target. Later the forum raised organic certification. Our research showed engineered inputs do not fit organic rules, so we now aim at conventional and sustainable farms. Our first assumption, organic farmers, was wrong.",
"a_zh":"5 月 16 日在花博農民市集，我們訪談了 30 多位有機小農。他們提到病蟲害比高溫多，所以我們把生物性逆境加入目標。後來論壇上有人問到有機認證，我們研究後發現基因工程投入不符合有機規範，所以現在鎖定慣行與永續農場。我們一開始以為目標是有機農民，這個假設是錯的。",
"trap_en":"Skipping the part where your first target group turned out wrong.",
"trap_zh":"跳過第一個目標族群其實錯了這一段。",
"basis":"like Lambert 2025: feedback that changed direction",
"dom":"ihp",
"id":"q109"
},
{
"q_en":"Your homepage quotes a farmer in Tamsui. How did she shape ReLEAF?",
"q_zh":"首頁引用了淡水的一位農民，她如何影響了 ReLEAF？",
"type":"integrate",
"tier":"A",
"pages":[
"human-practices",
"home",
"sustainability"
],
"seat":"ihp",
"backup":"dry",
"kw_en":[
"Ms. Chen, 21 July",
"too much help",
"release only when needed"
],
"kw_zh":[
"陳女士 7/21",
"幫太多會有害",
"需要時才釋放"
],
"a_en":"Ms. Chen Hui-Wen of Tamsui Happy Farm farms naturally. On July 21 she told us too much support can take away a plant's ability to survive alone. So our M1 model releases protectant only when a stress index says it is needed, and our thresholds are set high so plants still handle some stress. Her seed-loss story also led to our seed exchange platform. The wiki records her as a critic who set limits, not as a customer.",
"a_zh":"淡水快樂農場的陳慧文女士採自然農法。7 月 21 日她告訴我們，給太多支持會讓植物失去自己生存的能力。所以我們的 M1 模型只在壓力指數顯示需要時才釋放保護劑，門檻也設得很高，讓植物仍能自己承受一些壓力。她提到的種子流失也促成了種子交換平台。維基把她記錄為替我們設下限制的批評者，不是客戶。",
"trap_en":"Using her as proof that farmers want the product.",
"trap_zh":"把她當成農民想要這個產品的證據。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q110"
},
{
"q_en":"What business changes came directly from your interviews?",
"q_zh":"哪些商業上的改變是直接來自訪談？",
"type":"integrate",
"tier":"A",
"pages":[
"human-practices",
"entrepreneurship",
"geospatial-analysis"
],
"seat":"ihp",
"backup":"biz",
"kw_en":[
"Wu: one or two crops",
"rice to cherry tomato",
"rental, per-fen"
],
"kw_zh":[
"吳：一兩種作物",
"水稻改小番茄",
"租賃、每分地計價"
],
"a_en":"Director Wu of the Miaoli research station, October 12, said pick one or two crops. We changed the target from rice to cherry tomato and strawberry because rice is overabundant, and added rental and per-fen seasonal pricing. Prof. Chang Hung-Hao, August 31, told us to narrow to one stress and show measurable yield-loss reduction. Our plant results so far are on Arabidopsis, so that proof is still ahead.",
"a_zh":"苗栗區農業改良場的吳場長在 10 月 12 日說要選一兩種作物。因為水稻供過於求，我們把目標作物從水稻改成小番茄和草莓，並加入租賃與每分地的季節計價。8 月 31 日張弘浩教授要求我們縮小到單一逆境，並證明可量測的減損改善。我們目前的植物結果只在阿拉伯芥，所以這個證明還在後面。",
"trap_en":"Claiming a yield result on cherry tomato or strawberry.",
"trap_zh":"宣稱在小番茄或草莓上有產量結果。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q111"
},
{
"q_en":"What hardware changes came from outside reviewers?",
"q_zh":"有哪些硬體改變是外部審查者促成的？",
"type":"integrate",
"tier":"A",
"pages":[
"human-practices",
"hardware-bioreactor"
],
"seat":"ihp",
"backup":"hw",
"kw_en":[
"Chang: TMP, flow",
"Owl Lab: servos",
"mainboard"
],
"kw_zh":[
"張：跨膜壓力與流速",
"Owl Lab：伺服馬達",
"主機板"
],
"a_en":"Prof. Chang Jo-Shu, June 18, said monitor flow rate and transmembrane pressure to catch membrane caking, so we added pressure transducers and a pinch valve. Teacher He at Owl Lab, September 20, found our servo driver could miss positions and cause pressure spikes and leaks, so we switched to STS-3215 servos, and later to one mainboard. The hardware page lists each fix and the build that answered it.",
"a_zh":"張嘉修教授 6 月 18 日建議監測流速與跨膜壓力來發現膜結垢，所以我們加了壓力傳感器和夾管閥。Owl Lab 的何老師 9 月 20 日發現我們的伺服驅動板可能停不到位，造成壓力突增和漏液，所以改用 STS-3215 伺服馬達，後來又改成單一主機板。硬體頁列出每項修正與對應的版本。",
"trap_en":"Quoting the human practices page's two-board plan. The mainboard replaced it two days later.",
"trap_zh":"引用人類實踐頁的雙板方案。兩天後已被主機板取代。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q112"
},
{
"q_en":"Where did your hay-based culture medium idea come from?",
"q_zh":"你們用乾草做培養基的想法從哪裡來？",
"type":"integrate",
"tier":"A",
"pages":[
"human-practices",
"contribution",
"sustainability"
],
"seat":"ihp",
"backup":"biz",
"kw_en":[
"CH Biotech feathers",
"hay, okara, sugarcane",
"two cultures each"
],
"kw_zh":[
"正瀚的羽毛例子",
"乾草豆渣甘蔗渣",
"每種兩管"
],
"a_en":"At our September 5 forum, the CH Biotech expert said feathers can become signal peptides, so sustainability also covers how a product is made. We asked whether farmers could grow the bacteria on farm waste. After 18 hours, the 1:1:2 hay, okara and sugarcane mix reached OD600 0.720 against 0.573 for LB. That was two cultures per medium, so it is early evidence.",
"a_zh":"9 月 5 日論壇上，正瀚生技的代表提到羽毛可以變成訊號胜肽，讓我們想到永續也包括產品怎麼製造。於是我們問：農民能不能用農場廢棄物來養菌？18 小時後，乾草、豆渣、甘蔗渣 1:1:2 的混合物 OD600 為 0.720，LB 是 0.573。但每種培養基只有兩管，所以只是初步證據。",
"trap_en":"Saying it 'works better than LB' as a settled result.",
"trap_zh":"把它說成「比 LB 更好」的定論。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q113"
},
{
"q_en":"How did feedback from your school lessons change the next lesson?",
"q_zh":"學校課程的回饋如何改變了下一堂課？",
"type":"integrate",
"tier":"A",
"pages":[
"education"
],
"seat":"ihp",
"backup":"",
"kw_en":[
"1:5 mentor ratio",
"vocabulary time",
"explain the planter"
],
"kw_zh":[
"一比五輔導",
"多花時間講單字",
"先解釋自動澆水盆"
],
"a_en":"After each trial we read student and teacher feedback and changed the next one. Trial 1 students wanted help with assembly, so we used one mentor per five students. Trial 2 students said too much English, so we spent longer on vocabulary. A teacher asked how the self-watering planter linked to the topic, so we explained it before the activity. The junior high changes are planned, not yet retested.",
"a_zh":"每次試教後，我們都讀學生與老師的回饋再調整下一次。第 1 次有學生說實作時想要更多協助，所以我們改成每五位學生一位輔導。第 2 次有學生說英文太多，所以我們花更多時間講解單字。有老師問自動澆水盆和主題的關係，所以我們在活動前先解釋。國中的調整是計畫，還沒有重新測試。",
"trap_en":"Saying it was two-way without naming one concrete change.",
"trap_zh":"說是雙向交流，卻舉不出一個具體改變。",
"basis":"like Great Bay 2025: two-way dialogue back into the work",
"dom":"ihp",
"id":"q114"
},
{
"q_en":"Could ReLEAF be used on organic farms?",
"q_zh":"ReLEAF 可以用在有機農場嗎？",
"type":"boundary",
"tier":"A",
"pages":[
"human-practices",
"entrepreneurship",
"laws-and-regulations"
],
"seat":"ihp",
"backup":"biz",
"kw_en":[
"engineered inputs excluded",
"cell-free not automatic",
"conventional first"
],
"kw_zh":[
"排除基改投入",
"無細胞也不自動符合",
"先做慣行農"
],
"a_en":"No, we do not target them. Organic standards in Taiwan and the United States exclude inputs made with genetic engineering, and our protectants come from engineered Bacillus subtilis. A cell-free product is not automatically eligible, and our laws page lists organic compatibility in the Philippines as unresolved. A farmer raised this at the September 5 forum. We start with conventional and sustainable farms.",
"a_zh":"不行，我們不以有機農場為目標。台灣和美國的有機標準都排除基因工程製造的投入，而我們的保護劑來自工程枯草桿菌。無細胞產物也不會自動符合資格，法規頁把菲律賓的有機相容性列為尚未確認。這個問題是 9 月 5 日論壇上有農民提出的。我們先從慣行與永續農場開始。",
"trap_en":"Answering 'yes, because the bacteria stay inside the membrane'.",
"trap_zh":"回答「可以，因為細菌留在膜裡面」。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q115"
},
{
"q_en":"What if a typhoon or an animal destroys the bioreactor?",
"q_zh":"如果颱風或動物把生物反應器破壞了怎麼辦？",
"type":"boundary",
"tier":"A",
"pages":[
"human-practices",
"sustainability"
],
"seat":"ihp",
"backup":"hw",
"kw_en":[
"Chen Ke-Wei, 16 Sept",
"indoors, sensor outside",
"no field test"
],
"kw_zh":[
"陳可為 9/16",
"反應器放室內",
"沒做田間測試"
],
"a_en":"Mr. Chen Ke-Wei of the Lanyang River cooperative raised exactly this on September 16: a damaged unit could release Bacillus subtilis. We added damage and extreme weather to our threat analysis and are considering the bioreactor indoors with the sensor outdoors, in manual spray mode. If we later connect to irrigation outdoors, the risk rises, and our sustainability page says so. We have not field-tested a damage scenario.",
"a_zh":"蘭陽溪合作社的陳可為先生 9 月 16 日正好提出這點：設備被破壞可能釋出枯草桿菌。我們把毀損與極端天氣加入威脅分析，並考慮把反應器放室內、感測器放室外，採手動噴灑模式。若之後接上戶外灌溉，風險會升高，永續頁也這樣寫。我們沒有做過毀損情境的田間測試。",
"trap_en":"Saying the membrane makes any breakage harmless.",
"trap_zh":"說有膜就算壞掉也沒關係。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q116"
},
{
"q_en":"Would this work on crops other than Arabidopsis, for example rice?",
"q_zh":"這能用在阿拉伯芥以外的作物嗎，例如水稻？",
"type":"boundary",
"tier":"A",
"pages":[
"human-practices",
"sustainability",
"contribution"
],
"seat":"ihp",
"backup":"plant",
"kw_en":[
"Arabidopsis only",
"rice dropped",
"tomato, strawberry"
],
"kw_zh":[
"只測阿拉伯芥",
"水稻已放棄",
"小番茄與草莓"
],
"a_en":"We have tested Arabidopsis thaliana only. After Director Wu said rice is overabundant, we changed the target crop to cherry tomato and strawberry. We expect carry-over because Arabidopsis is a relative of mustard plants, but that is an expectation, not a result. Mr. Chen Ke-Wei also warned that some crops, such as strawberries, may need little or no intervention. Small-scale crop trials are the next step.",
"a_zh":"我們只在阿拉伯芥上測試過。吳場長說水稻供過於求之後，我們把目標作物改成小番茄和草莓。因為阿拉伯芥和芥菜類是近親，我們預期結果可以延伸，但那是預期，不是結果。陳可為先生也提醒，像草莓這類作物可能很少或不需要介入。小規模作物試驗是下一步。",
"trap_en":"Claiming the result already transfers to rice or tomato.",
"trap_zh":"宣稱結果已經能轉移到水稻或番茄。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q117"
},
{
"q_en":"Farmers told you pests and diseases were their biggest problem. Does ReLEAF deal with them?",
"q_zh":"農民說病蟲害是最大的問題，ReLEAF 能處理嗎？",
"type":"boundary",
"tier":"A",
"pages":[
"human-practices",
"entrepreneurship",
"laws-and-regulations"
],
"seat":"ihp",
"backup":"biz",
"kw_en":[
"biotic named first",
"claims abiotic only",
"white list"
],
"kw_zh":[
"病蟲害被優先提到",
"宣稱只限非生物逆境",
"白名單限制"
],
"a_en":"Not in our tested claims. Farmers at the May 16 expo named biotic stress more than abiotic, so we added it as a target. But our business page limits our claims to abiotic stress, and the iGEM high school white list meant we could not test gray mold. BoPep4 for gray mold is planned after the Jamboree. For now, our evidence is heat and salinity on Arabidopsis.",
"a_zh":"目前測試過的主張不包含。5 月 16 日花博的農民提到生物性逆境多於非生物性，所以我們把它列為目標。但商業計畫頁把主張限制在非生物逆境，而且 iGEM 高中組白名單讓我們不能測試灰黴病。BoPep4 對灰黴病的應用是在大會後規劃。目前我們的證據是阿拉伯芥上的熱與鹽害。",
"trap_en":"Saying biotic stress is covered because farmers asked for it.",
"trap_zh":"因為農民有提，就說已經涵蓋生物性逆境。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q118"
},
{
"q_en":"What if farmers are not comfortable with technology?",
"q_zh":"如果農民不習慣使用科技怎麼辦？",
"type":"boundary",
"tier":"B",
"pages":[
"human-practices"
],
"seat":"ihp",
"backup":"dry",
"kw_en":[
"affordable, accessible, practical",
"LINE platform",
"no usage numbers"
],
"kw_zh":[
"負擔得起、容易、實用",
"LINE 平台",
"沒有使用數據"
],
"a_en":"Farmers at the Expo said they accept technology if it is affordable, accessible and practical. So we built 農友助手 on LINE, which most people in Taiwan already use, with heat-stress alerts, a crop assistant and a farmer diary. Prof. Chang also suggested a swappable bacterial capsule for easy use, which is future work. Our wiki shows no usage numbers for the LINE platform yet.",
"a_zh":"花博的農民說，只要負擔得起、容易取得又實用，他們不排斥科技。所以我們在台灣大家都在用的 LINE 上做了農友助手，有熱逆境警報、作物小幫手和農友日記。張教授也建議做可更換的菌種膠囊讓使用更簡單，那是未來工作。維基上目前沒有 LINE 平台的使用人數。",
"trap_en":"Claiming the LINE platform has been adopted by farmers.",
"trap_zh":"宣稱農民已經在使用 LINE 平台。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q119"
},
{
"q_en":"Which country do you go to first outside Taiwan?",
"q_zh":"在台灣之後，你們第一個要去哪個國家？",
"type":"boundary",
"tier":"A",
"pages":[
"human-practices",
"laws-and-regulations",
"entrepreneurship"
],
"seat":"ihp",
"backup":"biz",
"kw_en":[
"Philippines studied",
"France contact",
"Taiwan first"
],
"kw_zh":[
"研究過菲律賓",
"法國窗口",
"先台灣"
],
"a_en":"Taiwan first. Our laws page names the Philippines as the first international market to explore, and our business page says the Philippines and Indonesia after Taiwan. Our human practices page also says target France first, through a contact at the French Office in Taipei. So the Philippines is the first market we studied for regulation, and France is a relationship we are building. I would say that plainly.",
"a_zh":"先台灣。法規頁把菲律賓列為第一個要探索的國際市場，商業頁寫台灣之後是菲律賓和印尼。人類實踐頁也寫要先以法國為目標，透過法國在台辦事處的窗口。所以菲律賓是我們第一個研究法規的市場，法國是我們正在建立的關係。我會直接這樣說明。",
"trap_en":"Giving one country as if the wiki agreed with itself.",
"trap_zh":"只講一個國家，好像維基沒有互相矛盾。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q120"
},
{
"q_en":"How strong is your evidence that the bacteria cannot escape?",
"q_zh":"你們「細菌不會逃出」的證據有多強？",
"type":"gap",
"tier":"A",
"pages":[
"safety-and-security",
"hardware-bioreactor",
"human-practices"
],
"seat":"ihp",
"backup":"hw",
"kw_en":[
"24 h plating",
"no replicates",
"designed to retain"
],
"kw_zh":[
"24 小時塗盤",
"沒有重複",
"設計上能留住"
],
"a_en":"It is preliminary. We plated shell-side medium after 24 hours and saw no colonies, while the lumen side grew colonies. But each test was a single plating without replicates, the detection limit was not recorded, and we made no quantitative measurement. So we say the membrane is designed to retain cells, and we need replicates. Our human practices page also records leakage through the membrane in September, which Prof. Chang helped us troubleshoot.",
"a_zh":"只是初步證據。我們在 24 小時後塗盤殼側培養液，沒有菌落，而管腔側有菌落。但每次測試只有一次塗盤、沒有重複，也沒有記錄偵測極限，沒有定量測量。所以我們只說膜「設計上」能留住細胞，還需要重複實驗。人類實踐頁也記錄了 9 月膜上出現滲漏的狀況，張教授協助我們排除。",
"trap_en":"Saying 'zero escape' or 'proved safe'.",
"trap_zh":"說「零逃逸」或「已證明安全」。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q121"
},
{
"q_en":"Which expert advice did you not follow, or not manage to follow?",
"q_zh":"有哪些專家建議是你們沒有採用或做不到的？",
"type":"gap",
"tier":"A",
"pages":[
"human-practices",
"hardware-bioreactor",
"laws-and-regulations"
],
"seat":"ihp",
"backup":"hw",
"kw_en":[
"capsule is future work",
"iFarm data not obtained",
"no white-list test"
],
"kw_zh":[
"膠囊是未來工作",
"沒拿到 iFarm 數據",
"不能測灰黴病"
],
"a_en":"Several. Prof. Chang's replaceable bacterial capsule is future work. Yes Health iFarm could not give us some exact technical data. Mr. Lu's irrigation-connected spraying is planned, not built. The 12/12 light cycle from iFarm is recorded as something to investigate. And the high school white list stopped us testing gray mold. We also only evaluate an extra kill switch; none is built.",
"a_zh":"有好幾個。張教授建議的可更換菌種膠囊是未來工作。源鮮智慧農場沒能給我們一些精確的技術數據。盧先生建議的接灌溉自動噴灑是規劃，還沒做出來。農場建議的 12/12 光週期只記錄為待研究。高中組白名單也讓我們不能測灰黴病。額外的自殺開關也只是評估，沒有做。",
"trap_en":"Saying you followed every suggestion.",
"trap_zh":"說每個建議都做到了。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q122"
},
{
"q_en":"Your booth survey says 95% agreed it helped. Why should we trust that?",
"q_zh":"你們的攤位問卷說 95% 同意有幫助，為什麼要相信？",
"type":"gap",
"tier":"A",
"pages":[
"data-physicalization",
"human-practices"
],
"seat":"ihp",
"backup":"dry",
"kw_en":[
"62 of 160",
"only completed six booths",
"self-reported"
],
"kw_zh":[
"160 人中 62 人",
"走完六攤才給問卷",
"自我回報"
],
"a_en":"Read it as a friendly signal, not a measurement. Sixty-two people answered out of 160 visitors, and the survey went to people who had visited all six booths, so they were already engaged. Answers are self-reported, with no before-and-after test. The cleaner knowledge test: 32 of 62, or 51.6%, found Yilan. Next time we plan a legend and an 80% target. Our abstract says 116 visitors, so our numbers differ across pages.",
"a_zh":"請把它當成友善的訊號，而不是測量。160 位訪客中有 62 人回答，而且問卷只發給走完六個攤位的人，他們本來就比較投入。答案是自我回報，沒有前後測。比較乾淨的知識測驗是：62 人中有 32 人，也就是 51.6%，找對宜蘭。下次我們計畫加圖例並設 80% 目標。摘要寫 116 位訪客，所以不同頁面的數字不一致。",
"trap_en":"Quoting 95% as proof the exhibit taught people.",
"trap_zh":"把 95% 當成展示有教會人們的證據。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q123"
},
{
"q_en":"Only 30% of students got DNA base pairing right. Did the lesson fail?",
"q_zh":"只有 30% 學生答對 DNA 鹼基配對，這堂課是失敗的嗎？",
"type":"gap",
"tier":"B",
"pages":[
"education"
],
"seat":"ihp",
"backup":"",
"kw_en":[
"0% to 30%",
"11 students",
"puzzle kit planned"
],
"kw_zh":[
"0% 到 30%",
"只有 11 人",
"色彩拼圖組是計畫"
],
"a_en":"For that concept, partly. In the junior high class, 11 students took the post-survey and 30% answered base pairing correctly, up from 0%. One student matched ATCG to itself. Other topics reached about 80%. We plan to cut the DNA introduction to five minutes and add a colour-coded puzzle kit, but we have not retested. The elementary classes, which played the ATCG card game, reached about 90% on codons, though classes differ.",
"a_zh":"就這個概念而言，部分失敗。國中班有 11 位學生做後測，鹼基配對答對率 30%，從 0% 進步。有一位學生把 ATCG 配成自己。其他主題約達 80%。我們計畫把 DNA 介紹縮到五分鐘並加入色彩拼圖組，但還沒重新測試。玩過 ATCG 卡牌的國小班在密碼子約達 90%，不過班級不同。",
"trap_en":"Hiding the 30% or blaming the students.",
"trap_zh":"隱藏 30% 或怪學生。",
"basis":"like Great Bay 2025: two-way dialogue",
"dom":"ihp",
"id":"q124"
},
{
"q_en":"How do you know farmers actually want ReLEAF?",
"q_zh":"你們怎麼知道農民真的想要 ReLEAF？",
"type":"validate",
"tier":"A",
"pages":[
"human-practices",
"entrepreneurship"
],
"seat":"ihp",
"backup":"biz",
"kw_en":[
"five farmer events",
"affordable, practical",
"market bias"
],
"kw_zh":[
"五場農民活動",
"負擔得起且實用",
"市集樣本偏誤"
],
"a_en":"We held five farmer outreach events between May and September: over 30 organic smallholders at the Expo, a natural farmer in Tamsui, the September 5 forum and market, and a cooperative founder. They said technology is fine if affordable, accessible and practical. But farmers at markets may not represent everyone, and our wiki shows no purchase trial. Willingness to pay is still an open question.",
"a_zh":"5 月到 9 月我們辦了五場農民活動：花博 30 多位有機小農、淡水自然農法農民、9 月 5 日論壇與市集，以及一位合作社創辦人。他們說只要負擔得起、容易取得又實用，科技沒問題。但市集上的農民不一定代表所有農民，維基上也沒有購買試驗。付費意願仍是未解問題。",
"trap_en":"Treating polite interest as demand.",
"trap_zh":"把禮貌性的興趣當成需求。",
"basis":"like HPi-Potsdam 2025: stakeholder validation",
"dom":"ihp",
"id":"q125"
},
{
"q_en":"How do you know your lessons actually worked?",
"q_zh":"你們怎麼知道課程真的有效？",
"type":"validate",
"tier":"A",
"pages":[
"education"
],
"seat":"ihp",
"backup":"",
"kw_en":[
"pre and post survey",
"80% elementary",
"no delayed test"
],
"kw_zh":[
"前後測",
"國小至少 80%",
"沒有延遲測驗"
],
"a_en":"We gave a pre-survey and a KAP post-survey in every class. Across the elementary trials, all seven knowledge questions reached at least 80% after the lesson. In high school, the biotic stress question rose from 32% to 96%. The limits: Trial 3 scored highest but the classes differed, only 11 junior high students answered, and we have no delayed test. We know they learned in the room, not that it lasted.",
"a_zh":"每堂課我們都做前測和 KAP 後測。國小各次合併，七題知識題課後全都至少 80%。高中的生物性逆境題從 32% 升到 96%。限制是：第 3 次得分最高但班級不同，國中只有 11 位學生回答，而且沒有延遲測驗。我們知道學生在課堂上學會了，但不知道能不能持久。",
"trap_en":"Quoting 140 students as if every one was tested.",
"trap_zh":"把 140 位學生講成每個人都被測驗。",
"basis":"like HG Tokyo 2025: outcomes of educational projects",
"dom":"ihp",
"id":"q126"
},
{
"q_en":"How do you know plants really make sounds?",
"q_zh":"你們怎麼知道植物真的會發出聲音？",
"type":"validate",
"tier":"B",
"pages":[
"data-physicalization-listening",
"data-physicalization"
],
"seat":"ihp",
"backup":"plant",
"kw_en":[
"not our recording",
"Khait, Cell 2023",
"tomato about 35 per hour"
],
"kw_zh":[
"不是我們錄的",
"Khait, Cell 2023",
"番茄每小時約 35 次"
],
"a_en":"We did not record them ourselves. We used the open recordings from Khait and colleagues, Cell 2023, Tel Aviv University. They used ultrasonic microphones from 20 to 250 kHz, first in a soundproof chamber, then in a greenhouse. We pitch-shifted the clicks so people can hear them. Healthy plants make under one click an hour; a thirsty tomato about 35. And one click alone cannot tell stresses apart.",
"a_zh":"我們沒有自己錄音。我們用的是特拉維夫大學 Khait 等人 2023 年 Cell 論文的公開錄音。他們用 20 到 250 kHz 的超音波麥克風，先在隔音室，再到溫室驗證。我們把點擊聲降調讓人聽得到。健康植物每小時不到一次，缺水的番茄約 35 次。而且單一聲音無法區分不同逆境。",
"trap_en":"Saying ReLEAF measures plant sound. The sensor is a leaf sensor.",
"trap_zh":"說 ReLEAF 會量測植物聲音。其實感測器是葉片感測器。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q127"
},
{
"q_en":"Which ideas were yours and which came from your advisors?",
"q_zh":"哪些想法是你們自己的，哪些來自指導者？",
"type":"validate",
"tier":"A",
"pages":[
"human-practices",
"attributions",
"team"
],
"seat":"ihp",
"backup":"",
"kw_en":[
"advisors set direction",
"we built responses",
"Attribution form"
],
"kw_zh":[
"顧問給方向",
"我們做出回應",
"貢獻表單"
],
"a_en":"We credit advisors by name. Prof. Chen gave the printer and ink idea, Dr. Brophy the physical containment advice, Prof. Cheng the Arabidopsis plate-to-soil model, and Prof. Huang the WB800 strain and periodic release. What the team built in response: the M1 stress-index model, the LINE platform, the seed exchange platform and the hay medium. The formal list of who did what is in our iGEM Attribution form.",
"a_zh":"我們都明確標示顧問的貢獻。陳教授提出印表機與墨水的概念，Brophy 博士提出物理圍堵的建議，鄭教授提出阿拉伯芥的瓊脂到土壤模型，黃教授提供 WB800 菌株和週期性釋放的建議。團隊自己針對這些做出回應：M1 壓力指數模型、LINE 平台、種子交換平台和乾草培養基。誰做了什麼的正式清單在 iGEM 的貢獻表單。",
"trap_en":"Taking credit for an advisor's idea. Say 'they raised the problem, we built the answer'.",
"trap_zh":"把顧問的想法說成自己的。要說「他們提出問題，我們做出回答」。",
"basis":"like AIS-China 2025: parts yours vs advisors",
"dom":"ihp",
"id":"q128"
},
{
"q_en":"Why not rely on a kill switch, as many iGEM teams do?",
"q_zh":"為什麼不像很多 iGEM 隊伍一樣依賴自殺開關？",
"type":"compare",
"tier":"A",
"pages":[
"human-practices",
"hardware-bioreactor",
"laws-and-regulations"
],
"seat":"ihp",
"backup":"wet1",
"kw_en":[
"switches can fail",
"membrane first",
"none built"
],
"kw_zh":[
"開關可能失效",
"先用膜",
"沒有做"
],
"a_en":"Dr. Brophy told us genetic switches can mutate or fail, so a physical barrier should come first. Our membrane keeps cells in whatever the cells do, and pressure and leak monitoring watch for failure. We are only evaluating an extra kill switch, so none is built and we have no data on one. Our laws page lists biocontainment, below 1 in 10 to the 8 escape, and removing antibiotic markers as future actions.",
"a_zh":"Brophy 博士告訴我們，基因開關可能突變或失效，所以應先用物理屏障。無論細胞怎麼變，膜都能把它們留住，再加上壓力和漏液監測來察覺失效。我們只是評估要不要加額外的自殺開關，所以沒有做，也沒有相關數據。法規頁把生物圍堵（逃逸率低於十的八次方分之一）和移除抗生素標記列為未來行動。",
"trap_en":"Saying a kill switch is useless. The advice was physical first, switch under evaluation.",
"trap_zh":"說自殺開關沒用。建議是物理圍堵為先，開關仍在評估。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q129"
},
{
"q_en":"Automated systems like Agriweather do everything for the farmer. Why would a farmer pick yours?",
"q_zh":"像 Agriweather 這種系統會幫農民全部自動化，農民為什麼要選你們的？",
"type":"compare",
"tier":"B",
"pages":[
"human-practices",
"entrepreneurship"
],
"seat":"ihp",
"backup":"biz",
"kw_en":[
"Lu: more convenient",
"many products in one",
"mixing chamber planned"
],
"kw_zh":[
"盧：他們更方便",
"多合一較便宜",
"混合腔是規劃"
],
"a_en":"Mr. Lu, Agriweather's founder, told us their irrigation-linked system is more convenient, and that we must justify ours because it does not connect to irrigation. At Smart Agriweek we learned our unit covers several functions at a lower price than buying, for example, BioBar and Agriweather together. After Mr. Lu we planned a mixing chamber that delivers through irrigation. That is a plan, not a built feature.",
"a_zh":"Agriweather 創辦人盧先生告訴我們，他們接灌溉的系統更方便，而我們沒有連接灌溉，所以必須說明自己的價值。在智慧農業週我們得知，我們一台涵蓋多項功能，價格比同時購買 BioBar 和 Agriweather 低。和盧先生談過後，我們規劃了經灌溉輸送的混合腔。那是規劃，不是已完成的功能。",
"trap_en":"Dismissing the competitor instead of admitting their convenience advantage.",
"trap_zh":"貶低對手，而不承認對方方便的優勢。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q130"
},
{
"q_en":"What is your next step after the Jamboree?",
"q_zh":"大會之後你們的下一步是什麼？",
"type":"impact",
"tier":"A",
"pages":[
"entrepreneurship",
"laws-and-regulations",
"data-physicalization",
"hardware-bioreactor"
],
"seat":"ihp",
"backup":"",
"kw_en":[
"crop trials",
"replicate containment",
"BoPep4 gray mold"
],
"kw_zh":[
"作物試驗",
"重複圍堵測試",
"BoPep4 灰黴病"
],
"a_en":"Three things the wiki states. First, small-scale crop trials and pilot farms, because our plant results are on Arabidopsis. Second, replicate containment testing, since our retention evidence is a single plating. Third, after the Jamboree, BoPep4 for gray mold and the regulatory route for the cell-free product. For outreach, we will add a legend to the data map and check whether over 80% of visitors read it right.",
"a_zh":"維基寫明的三件事。第一，小規模作物試驗與試點農場，因為我們的植物結果在阿拉伯芥上。第二，重複的圍堵測試，因為我們的留菌證據只是一次塗盤。第三，大會後研究 BoPep4 用於灰黴病，以及無細胞產物的法規途徑。在推廣上，我們會為資料地圖加圖例，並檢查是否有超過 80% 的訪客讀對。",
"trap_en":"Leading with 'in the future' and naming plans the wiki does not state.",
"trap_zh":"開口就說「未來」，講出維基上沒有的計畫。",
"basis":"like Peking 2025: ranked next steps",
"dom":"ihp",
"id":"q131"
},
{
"q_en":"How will your education work last beyond this year?",
"q_zh":"你們的教育成果如何在今年之後持續？",
"type":"impact",
"tier":"B",
"pages":[
"education",
"education-website",
"contribution"
],
"seat":"ihp",
"backup":"",
"kw_en":[
"free website",
"CC BY 4.0",
"3 teacher sign-ups"
],
"kw_zh":[
"免費網站",
"CC BY 4.0",
"3 位老師報名"
],
"a_en":"Everything is on a free education website: three lesson plans, three slide decks, two card games, two online games and a plant stress simulator, mostly bilingual. The files are released under CC BY 4.0, and the site stays up. The site also holds materials from earlier years. Honest limit: only three teachers have signed up through it so far, so reach beyond our own sessions is small today.",
"a_zh":"全部都放在免費的教育網站：三份教案、三份簡報、兩款卡牌遊戲、兩款線上遊戲和一個植物逆境模擬器，大多是雙語。檔案以 CC BY 4.0 釋出，網站會持續上線，也收錄往年的教材。坦白說，目前只有三位老師透過網站報名，所以我們自己課堂之外的觸及目前還很小。",
"trap_en":"Counting downloads. The wiki shows no download numbers.",
"trap_zh":"報下載次數。維基上沒有下載數據。",
"basis":"like Great Bay 2025: two-way dialogue and reuse",
"dom":"ihp",
"id":"q132"
},
{
"q_en":"Small farmers cannot afford new technology. How does ReLEAF avoid widening that gap?",
"q_zh":"小農負擔不起新科技，ReLEAF 如何避免擴大差距？",
"type":"impact",
"tier":"A",
"pages":[
"sustainability",
"entrepreneurship",
"human-practices"
],
"seat":"ihp",
"backup":"biz",
"kw_en":[
"SDG 10",
"rent or subsidise",
"per-fen pricing"
],
"kw_zh":[
"SDG 10",
"租賃或補貼",
"每分地計價"
],
"a_en":"That is our SDG 10 claim. We plan to use profit from selling to industrial farmers, or selling data to researchers, to subsidise small farmers, and to let unions rent bioreactors. Director Wu suggested per-fen seasonal pricing. At the French Office we were asked if farmers could afford IoT and answered with figures. These are plans in a business model; our own subsidy starts after cash turns positive in Year 4.",
"a_zh":"這是我們對 SDG 10 的主張。我們計畫用賣給大型農場或把數據賣給研究者的利潤來補貼小農，也讓合作社或農民組織租用生物反應器。吳場長建議以每分地的季節計價。在法國在台辦事處有人問農民負擔得起物聯網嗎，我們用數字回答。這些是商業模式裡的計畫；我們自己的補貼要等到第 4 年現金轉正之後。",
"trap_en":"Promising affordability without naming the mechanism or the timing.",
"trap_zh":"承諾負擔得起，卻說不出機制和時間。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q133"
},
{
"q_en":"You work in Taiwan. Why did your project start with Ghana?",
"q_zh":"你們在台灣，為什麼專案從迦納開始？",
"type":"design",
"tier":"A",
"pages":[
"human-practices",
"entrepreneurship"
],
"seat":"ihp",
"backup":"biz",
"kw_en":[
"USE-GH, 1 Feb",
"one conversation",
"small farmers"
],
"kw_zh":[
"USE-GH 2/1",
"一次對話",
"小農"
],
"a_en":"On February 1 we spoke with Gilbert Nkpeniyeng of Ubuntu Social Enterprise Ghana to test our assumption. He confirmed climate instability was hurting farmers he knows, and that small farmers were disadvantaged. That shaped our focus on small-scale farmers and our business plan. We then worked in Taiwan, where we could visit farms. The wiki records one conversation with a Ghanaian organisation, so I would not claim wider Ghana fieldwork.",
"a_zh":"2 月 1 日我們為了驗證假設，和迦納 Ubuntu Social Enterprise 的 Gilbert Nkpeniyeng 談話。他證實氣候不穩定正在傷害他認識的農民，而且小農更弱勢。這影響了我們聚焦小農與商業計畫。之後我們在台灣工作，因為可以實地拜訪農場。維基只記錄了一次與迦納組織的對話，所以我不會宣稱做過更多迦納田野工作。",
"trap_en":"Saying you interviewed Ghanaian farmers.",
"trap_zh":"說你們訪談過迦納的農民。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q134"
},
{
"q_en":"Why did you choose SDGs 2, 4, 10, 12 and 15, and not 13?",
"q_zh":"你們為什麼選 SDG 2、4、10、12、15，而不選 13？",
"type":"design",
"tier":"B",
"pages":[
"sustainability"
],
"seat":"ihp",
"backup":"",
"kw_en":[
"eight shortlisted",
"can we act on it",
"negatives listed"
],
"kw_zh":[
"八個候選",
"做得到才主張",
"列出負面影響"
],
"a_en":"We shortlisted eight related goals, 2, 3, 4, 7, 10, 12, 13 and 15, and kept only those we can act on. Climate Action is affected by the bioreactor but is not the point of the project, so we do not claim 13, 3 or 7. Our claims: protectants for 2, education for 4, subsidised access for 10, farm-waste medium for 12, less chemical use for 15. Our page also lists negatives, such as weeds and less plant resilience.",
"a_zh":"我們先列出八個相關目標：2、3、4、7、10、12、13、15，只保留我們做得到的。氣候行動會受生物反應器影響，但那不是專案的重點，所以不主張 13、3、7。我們的主張：保護劑對應 2、教育對應 4、補貼取得對應 10、農場廢棄物培養基對應 12、減少化學投入對應 15。頁面也列出負面影響，例如雜草與植物韌性下降。",
"trap_en":"Saying the abstract's four goals. The body lists five.",
"trap_zh":"照摘要說四個目標。內文其實列了五個。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q135"
},
{
"q_en":"Why build a map and a sound exhibit instead of a poster?",
"q_zh":"為什麼做地圖和聲音展示，而不是海報？",
"type":"design",
"tier":"B",
"pages":[
"data-physicalization",
"data-physicalization-listening"
],
"seat":"ihp",
"backup":"dry",
"kw_en":[
"color = yield",
"LED flash = heat",
"hear drought clicks"
],
"kw_zh":[
"顏色=產量",
"LED 閃爍=熱逆境",
"聽乾旱點擊聲"
],
"a_en":"People often notice climate stress only when food prices rise. Our map uses paper color for rice yield and flashing LEDs for heat stress by county, so a visitor reads two variables at once. We chose heat because ReLEAF protects against it, and yield because it shows the cost. The sound exhibit lets visitors hear drought clicks. Of 62 respondents, 95.2% agreed it helped, but only 51.6% found the highest-stress county.",
"a_zh":"人們常常等到食物漲價才注意到氣候壓力。我們的地圖用紙色代表稻米產量、用閃爍 LED 代表各縣市的熱逆境，讓訪客同時讀兩個變數。我們選熱，是因為 ReLEAF 保護的就是這個；選產量，是因為它顯示損失。聲音展示讓訪客聽乾旱的點擊聲。62 位受訪者中 95.2% 同意有幫助，但只有 51.6% 找對壓力最高的縣市。",
"trap_en":"Saying the map shows plant stress directly. It shows a heat stress index.",
"trap_zh":"說地圖直接顯示植物壓力。它顯示的是熱逆境指數。",
"basis":"like HG Tokyo 2025: educational design choices",
"dom":"ihp",
"id":"q136"
},
{
"q_en":"What biosafety level do you work at, and how are students trained?",
"q_zh":"你們在哪個生物安全等級工作？學生如何受訓？",
"type":"fact",
"tier":"B",
"pages":[
"safety-and-security"
],
"seat":"ihp",
"backup":"wet1",
"kw_en":[
"BSL-1, B. subtilis",
"exam to full score",
"autoclave 121 °C"
],
"kw_zh":[
"BSL-1 枯草桿菌",
"考到滿分",
"121 °C 滅菌"
],
"a_en":"BSL-1, with non-pathogenic Bacillus subtilis. Every member takes biosafety training and a written exam, signs a consent form, and retakes the exam until it is a full score. A two-month bench programme covers miniprep, digestion, Golden Gate, PCR and transformation. Solid waste is autoclaved at 121 degrees for 15 to 30 minutes; liquids get 10% bleach. We also assessed dual-use concern and restrict strain access.",
"a_zh":"BSL-1，使用非致病性的枯草桿菌。每位成員都要上生物安全課、參加書面考試、簽同意書，沒考滿分就重考。為期兩個月的基礎訓練包括質體小量萃取、限制酶切、Golden Gate、PCR 和轉形。固體廢棄物以 121 度滅菌 15 到 30 分鐘；液體用 10% 漂白水處理。我們也評估了兩用性疑慮，並限制菌株取用。",
"trap_en":"Calling it BSL-2 or saying 'we followed the school rules' with no numbers.",
"trap_zh":"說成 BSL-2，或只說「照學校規定」而沒有數字。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q137"
},
{
"q_en":"Who is the 'Farmer Chen' on your homepage?",
"q_zh":"首頁上的「陳農民」是誰？",
"type":"fact",
"tier":"A",
"pages":[
"home",
"human-practices"
],
"seat":"ihp",
"backup":"",
"kw_en":[
"Ms. Chen Hui-Wen",
"Tamsui Happy Farm",
"natural farming"
],
"kw_zh":[
"陳慧文女士",
"淡水快樂農場",
"自然農法"
],
"a_en":"Ms. Chen Hui-Wen, who runs Tamsui Happy Farm and farms naturally. We visited on July 21 and helped on the farm. She said giving plants too much support can take away their ability to survive on their own. That shaped our stress-index model, which releases protectant only when needed. She also described seed loss after typhoons and floods, which led to our seed exchange platform.",
"a_zh":"陳慧文女士，經營淡水快樂農場，採自然農法。7 月 21 日我們去拜訪並幫忙農事。她說給植物太多支持，可能讓它們失去自己生存的能力。這影響了我們的壓力指數模型，只在需要時才釋放保護劑。她也提到颱風水災後種子流失，促成了我們的種子交換平台。",
"trap_en":"Reading the homepage quote as her endorsing ReLEAF.",
"trap_zh":"把首頁引言當成她支持 ReLEAF。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q138"
},
{
"q_en":"In one minute: what is ReLEAF, and what did Human Practices do for it?",
"q_zh":"請用一分鐘說明 ReLEAF 是什麼，人類實踐為它做了什麼？",
"type":"fact",
"tier":"A",
"pages":[
"description",
"human-practices"
],
"seat":"ihp",
"backup":"",
"kw_en":[
"stress-responsive bioreactor",
"31 stakeholders",
"soil to contained"
],
"kw_zh":[
"逆境響應反應器",
"31 位利害關係人",
"從土壤到封閉式"
],
"a_en":"ReLEAF is a stress-responsive bioreactor. A leaf sensor and a model predict plant stress, green light switches on engineered Bacillus subtilis, and a hollow-fiber membrane lets protectants out while keeping cells in. We engaged 31 stakeholders from February to October. Their advice moved us from soil release to a contained bioreactor, from hydroponics to plate-to-soil testing, and from rice to cherry tomato and strawberry.",
"a_zh":"ReLEAF 是一個逆境響應的生物反應器。葉片感測器和模型預測植物逆境，綠光啟動工程枯草桿菌，中空纖維膜讓保護劑出來、把細胞留住。從 2 月到 10 月我們接觸了 31 位利害關係人，他們的建議讓我們從土壤釋放改為封閉式生物反應器，從水耕改為瓊脂盤到土壤的測試，並把目標作物從水稻改成小番茄和草莓。",
"trap_en":"Starting with the biology and never reaching what changed.",
"trap_zh":"一直講生物學，沒講到改變了什麼。",
"basis":"wiki-derived",
"dom":"ihp",
"id":"q139"
},
{
"q_en":"You list 47 team members but only seven of you are here. Who did what?",
"q_zh":"團隊頁列了 47 人，但來這裡的只有七位，誰做了什麼？",
"type":"fact",
"tier":"A",
"pages":[
"team",
"attributions",
"human-practices"
],
"seat":"ihp",
"backup":"",
"kw_en":[
"47 on the team",
"Attribution form",
"your own part"
],
"kw_zh":[
"團隊 47 人",
"貢獻表單",
"你自己的部分"
],
"a_en":"The team page introduces forty-seven people, and the formal record of who did what is in our iGEM Attribution form, not in the wiki text. I can speak for my own part: [one sentence on your own role]. For ideas, advisors set directions such as the bioreactor and containment, and the team built the models, platforms and experiments in response. Ask me about my area and I will say where my knowledge ends.",
"a_zh":"團隊頁介紹了四十七位成員，誰做了什麼的正式紀錄在 iGEM 的貢獻表單，不在維基文字裡。我可以說明我自己的部分：[用一句話說你自己的角色]。至於想法，顧問給了方向，例如生物反應器和圍堵，團隊則針對這些做出模型、平台和實驗。請問我我負責的範圍，我也會說明我的知識界線。",
"trap_en":"Claiming other members' work, or having no sentence about your own role.",
"trap_zh":"把別人的工作說成自己的，或講不出自己的角色。",
"basis":"like AIS-China 2025: parts yours vs advisors",
"dom":"ihp",
"id":"q140"
},
{
"type":"fact",
"tier":"A",
"seat":"hw",
"backup":"wet2",
"pages":[
"biomanufacturing",
"software",
"results"
],
"q_en":"What is the longest run your bioreactor has done, and which strain was in it?",
"q_zh":"你們的生物反應器最長跑了多久？當時用的是哪一株菌？",
"kw_en":[
"102.4 hours",
"strain 168",
"WB800 77 hours"
],
"kw_zh":[
"102.4 小時",
"168 菌株",
"WB800 跑 77 小時"
],
"a_en":"The longest run with a secreting strain was 102.4 hours, four days unattended, OD600 from 0.84 to 3.77, pressure steady within about 0.1 bar. That was Bacillus subtilis 168, not our production strain. With WB800 the longest clean run is 77 hours, reaching OD 3.34. Our wild-type run 3 lasted 434 hours, but it made no protein. We have not run WB800 beyond about three days.",
"a_zh":"有分泌蛋白的菌株，最長是 102.4 小時，無人看管四天，OD600 從 0.84 到 3.77，壓力穩定在約 0.1 bar 內。但那是 Bacillus subtilis 168，不是我們的生產菌株。WB800 最長的乾淨運轉是 77 小時，OD 到 3.34。野生型 run 3 跑了 434 小時，但它不產蛋白。WB800 我們還沒跑超過約三天。",
"trap_en":"Quoting 102.4 h as the WB800 production strain, or forgetting that the 434 h run was wild type with nothing secreted.",
"trap_zh":"把 102.4 小時說成是 WB800 生產菌株，或忘了 434 小時那次是野生型、沒有分泌任何蛋白。",
"basis":"like GEMS-Taiwan 2025 hardware: 'how scalable / when available' follow-up; strain provenance conflicts on the wiki (see gaps)",
"dom":"biomanufacturing",
"id":"q141"
},
{
"type":"fact",
"tier":"A",
"seat":"biz",
"backup":"ihp",
"pages":[
"laws-and-regulations",
"biomanufacturing"
],
"q_en":"Which laws would apply to ReLEAF in Taiwan, and has any authority told you yes?",
"q_zh":"ReLEAF 在臺灣會適用哪些法規？有沒有任何主管機關跟你們說可以？",
"kw_en":[
"three components",
"Fertilizer Management Act",
"no written yes"
],
"kw_zh":[
"三個部分",
"肥料管理法",
"沒有書面同意"
],
"a_en":"We split it into three parts. The cell-free permeate is aimed at the Fertilizer Management Act, where Taiwan lists plant growth auxiliary materials. The engineered culture needs a contained-use route, and we did not find a clear Taiwan framework. The bioreactor is equipment. No authority has confirmed any of this in writing; those checks are still marked no. We learned the routes from legal sources and Cheng Han Biotechnology.",
"a_zh":"我們把它拆成三部分。無細胞的透過液以肥料管理法為目標，臺灣的肥料種類有植物生長輔助劑類。工程菌需要封閉使用的路徑，但我們沒找到明確的臺灣架構。生物反應器則屬於設備。目前沒有任何主管機關以書面確認，這些檢查項目仍是否。這些路徑來自法規原文和正瀚生技的說明。",
"trap_en":"Saying 'we are registered' or 'it is approved'. Only potential pathways exist; none is an approval.",
"trap_zh":"說成「我們已經登記」或「已核准」。目前只有可能的路徑，沒有任何核准。",
"basis":"like Hardware bank 2025 'Where do you see your product in the greater market?'; pathway-not-approval finding on laws-and-regulations",
"dom":"biomanufacturing",
"id":"q142"
},
{
"type":"fact",
"tier":"A",
"seat":"hw",
"backup":"dry",
"pages":[
"biomanufacturing"
],
"q_en":"How much medium does one of your modules use in a day, and how did you get that number?",
"q_zh":"你們一個模組一天用掉多少培養基？這個數字怎麼來的？",
"kw_en":[
"2 LMH design flux",
"0.96 L per day",
"computed not measured"
],
"kw_zh":[
"設計通量 2 LMH",
"每天 0.96 L",
"計算而非實測"
],
"a_en":"At the design flux of 2 liters per square meter per hour, our 200 square centimeter membrane passes 0.67 mL per minute, which is 0.96 liters a day, about ten turnovers of the 100 mL loop. It is arithmetic from the module geometry, not a measurement. Our actual runs drew permeate at 12 to 24 mL per minute, so the daily figure for those runs is higher.",
"a_zh":"設計通量是每平方公尺每小時 2 公升，我們 200 平方公分的膜每分鐘透過 0.67 mL，也就是一天 0.96 公升，約等於 100 mL 迴路換十次。這是由模組幾何算出來的，不是實測。實際運轉我們每分鐘取 12 到 24 mL 透過液，所以那些運轉的每日量比較高。",
"trap_en":"Presenting 0.96 L a day as what the runs used. The runs drew far more per minute.",
"trap_zh":"把每天 0.96 L 說成實際運轉用量。實際運轉每分鐘取得的量大得多。",
"basis":"like Hardware bank 'May I ask about the cost?' style number checks; calculation sheet of 23 Sept",
"dom":"biomanufacturing",
"id":"q143"
},
{
"type":"fact",
"tier":"A",
"seat":"dry",
"backup":"hw",
"pages":[
"digital-twin-app",
"software"
],
"q_en":"What software actually runs your rig today?",
"q_zh":"現在實際控制你們反應器的是什麼軟體？",
"kw_en":[
"App Lab v4.13",
"firmware interlocks",
"person decides"
],
"kw_zh":[
"App Lab v4.13",
"韌體聯鎖",
"由人決定"
],
"a_en":"A single app built in Arduino App Lab, version 4.13 with interface v6.2.2, on the Uno Q board. Firmware on the microcontroller samples the sensors and holds the safety interlocks, including opening the pinch valve above 0.70 bar. A Python side computes OD, growth rate and pH control and logs everything. Run 7 used it for 77 hours. The models run afterwards on recorded data, and a person makes every decision.",
"a_zh":"是在 Arduino App Lab 做的一個 app，版本 4.13、介面 v6.2.2，跑在 Uno Q 板子上。微控制器上的韌體負責取樣感測器和所有安全聯鎖，包含壓力超過 0.70 bar 就打開夾管閥。Python 端計算 OD、生長率、控制 pH 並記錄所有資料。run 7 用它跑了 77 小時。模型是跑完之後用記錄資料分析，每個決定都由人做。",
"trap_en":"Saying the digital twin controls the reactor automatically, or that the newer browser twin is what is running the rig.",
"trap_zh":"說數位孿生會自動控制反應器，或說新的瀏覽器孿生在控制反應器。",
"basis":"like Bioreactors bank (Timmy): 'what does the digital twin still know if sensors are unplugged?'; INSA Lyon 2022 hardware-software link",
"dom":"biomanufacturing",
"id":"q144"
},
{
"type":"fact",
"tier":"B",
"seat":"biz",
"backup":"hw",
"pages":[
"biomanufacturing",
"entrepreneurship"
],
"q_en":"What does one unit cost to build, and what would a farmer pay?",
"q_zh":"一台要花多少錢造？農民要付多少？",
"kw_en":[
"NT$83 028 prototype",
"US$5550 first year",
"US$90 refill"
],
"kw_zh":[
"原型 NT$83 028",
"第一年 US$5550",
"補充匣 US$90"
],
"a_en":"Our hand-built prototype cost NT$83 028, about US$2800: NT$52 578 for the bacterial kit and NT$30 450 for the bioreactor. For a farmer, the business plan prices one hectare at about US$5550 in year one, twice our cost, then about US$90 a year for a refill cartridge. We have not calculated cost per dose of protectant; that analysis is still to be done.",
"a_zh":"我們手工做的原型花了 NT$83 028，約 US$2800：菌種套組 NT$52 578，生物反應器 NT$30 450。對農民，商業計畫是一公頃第一年約 US$5550，是我們成本的兩倍，之後每年補充匣約 US$90。每劑保護蛋白的成本我們還沒算，那項分析還沒做。",
"trap_en":"Quoting the prototype cost as the price at volume. The wiki says it is a one-unit hand-built cost.",
"trap_zh":"把原型成本當成量產價格。wiki 明確說它是一台手工製作的成本。",
"basis":"like GEMS-Taiwan 2024 hardware: 'May I ask about the cost?'",
"dom":"biomanufacturing",
"id":"q145"
},
{
"type":"design",
"tier":"A",
"seat":"wet2",
"backup":"wet1",
"pages":[
"hardware-bioreactor",
"results",
"biomanufacturing"
],
"q_en":"Why did you choose Bacillus subtilis WB800 as the production chassis?",
"q_zh":"為什麼選 Bacillus subtilis WB800 當生產宿主？",
"kw_en":[
"non-pathogenic secretor",
"168 lost product",
"WB800 no proteases"
],
"kw_zh":[
"不致病的分泌者",
"168 產物被分解",
"WB800 缺蛋白酶"
],
"a_en":"Good question. B. subtilis is non-pathogenic, easy to engineer, and secretes protein into the medium, so we never break the cells open. We started with strain 168, which grew well but made almost no detectable enzyme, probably because its own proteases chewed the product. WB800 lacks eight of those proteases. We did not run a head-to-head against E. coli or yeast, so I cannot claim it beats them.",
"a_zh":"好問題。B. subtilis 不致病、容易改造，又會把蛋白分泌到培養基，所以不必把細胞打破。我們一開始用 168，它長得很好但幾乎測不到酵素，可能是自己的蛋白酶把產物分解了。WB800 缺少八種這類蛋白酶。我們沒有和大腸桿菌或酵母做對照，所以不能說它比它們好。",
"trap_en":"Claiming it is better than E. coli or yeast. The wiki gives no such comparison.",
"trap_zh":"宣稱它比大腸桿菌或酵母好。wiki 裡沒有這種比較。",
"basis":"like Leiden 2022 biomanufacturing: 'what made E. coli the right chassis?'",
"dom":"biomanufacturing",
"id":"q146"
},
{
"type":"design",
"tier":"A",
"seat":"hw",
"backup":"wet2",
"pages":[
"biomanufacturing",
"hardware-bioreactor",
"results"
],
"q_en":"Why secrete the protein instead of breaking the cells open and purifying it?",
"q_zh":"為什麼讓蛋白分泌出來，而不是把細胞打破再純化？",
"kw_en":[
"cells stay intact",
"membrane separates",
"no purification"
],
"kw_zh":[
"細胞保持完整",
"膜負責分離",
"沒有純化"
],
"a_en":"Secretion keeps the cells intact, so one culture keeps producing for days, and the same membrane that holds the cells lets the protein through. That is why the page says there is no downstream train. In our second integrated cycle, ELISA read about the same on both sides of the membrane. The limit is that the permeate is not purified. It still carries medium and small debris.",
"a_zh":"分泌讓細胞保持完整，同一批菌可以連續生產好幾天，而擋住細胞的同一片膜也讓蛋白通過，所以本頁說沒有下游純化流程。在第二輪整合運轉中，膜兩側的 ELISA 讀值差不多。限制是透過液沒有純化，還帶有培養基和小碎片。",
"trap_en":"Saying the membrane purifies the protein. It only separates cells from the liquid; lumen and shell read the same.",
"trap_zh":"說膜會純化蛋白。它只是把細胞和液體分開；內腔與殼側的讀值是一樣的。",
"basis":"like NUS 2021 biomanufacturing: 'why light control was worth the extra engineering' (design-justification pattern)",
"dom":"biomanufacturing",
"id":"q147"
},
{
"type":"design",
"tier":"A",
"seat":"hw",
"backup":"dry",
"pages":[
"biomanufacturing",
"hardware-bioreactor"
],
"q_en":"Why a continuous perfusion loop instead of a normal batch fermenter?",
"q_zh":"為什麼用連續灌流迴路，而不是一般的批次發酵槽？",
"kw_en":[
"no harvest per cycle",
"membrane is containment",
"medium is the cost"
],
"kw_zh":[
"不用每批收菌",
"膜兼具阻隔",
"培養基是代價"
],
"a_en":"A batch fermenter harvests the cells after each cycle. Ours keeps the culture circulating and removes product continuously, so one culture supports repeated production, and the membrane doubles as containment. The cost is medium. Feeding cells at normal perfusion rates would take about 29 liters a day, which is the binding constraint for a unit left in a field for a week. We have not run that.",
"a_zh":"批次發酵槽每個循環結束就要收菌。我們讓培養持續循環、持續移出產物，同一批菌可以重複生產，而且膜同時是阻隔。代價是培養基。若用一般灌流的餵養量，每天約要 29 公升，這是無人看管放在田間一週時的限制。這個條件我們沒有實際跑過。",
"trap_en":"Selling perfusion as free. Medium supply for an unattended week is the stated binding constraint.",
"trap_zh":"把灌流說成沒有代價。無人看管一週的培養基供應是 wiki 明說的限制。",
"basis":"like NUS 2021 hardware: 'why build your own bioreactor instead of buying a benchtop fermenter, and what did you give up?'",
"dom":"biomanufacturing",
"id":"q148"
},
{
"type":"design",
"tier":"A",
"seat":"biz",
"backup":"hw",
"pages":[
"biomanufacturing",
"laws-and-regulations"
],
"q_en":"Why did you design the system so that regulation treats it as three separate parts?",
"q_zh":"為什麼把系統設計成法規上看起來是三個獨立的部分？",
"kw_en":[
"equipment, culture, permeate",
"keep organism inside",
"function and claim"
],
"kw_zh":[
"設備、菌液、透過液",
"生物留在機器內",
"功能與宣稱"
],
"a_en":"Because each part raises a different question. The bioreactor is equipment, the engineered culture is a contained microorganism, and the cell-free permeate is classified by what it claims to do. Keeping the organism inside the machine gives the strain and the product two independent paths. The limit: containment does not decide the product's classification, and our proof of containment is two single platings without replicates.",
"a_zh":"因為每個部分會引發不同的法規問題。生物反應器是設備，工程菌是封閉使用的微生物，無細胞的透過液則依它宣稱的功能分類。把生物留在機器內，菌株和產品就有兩條獨立的路徑。限制是阻隔本身不能決定產品的分類，而且我們的阻隔證據只是兩次沒有重複的單次塗盤。",
"trap_en":"Implying containment alone settles classification or approval. The wiki says it does not.",
"trap_zh":"暗示光靠阻隔就能決定分類或核准。wiki 明說不能。",
"basis":"regulation-as-design pattern on laws-and-regulations (function, claim, classification, requirement, market access)",
"dom":"biomanufacturing",
"id":"q149"
},
{
"type":"design",
"tier":"B",
"seat":"hw",
"backup":"biz",
"pages":[
"biomanufacturing"
],
"q_en":"Why do you scale out by copying units instead of building a bigger reactor?",
"q_zh":"為什麼用複製單元的方式擴大，而不是蓋一台更大的反應器？",
"kw_en":[
"replicate known unit",
"linear scale-up",
"same fiber length"
],
"kw_zh":[
"複製已知單元",
"線性放大",
"相同纖維長度"
],
"a_en":"Scaling up one vessel means re-establishing oxygen supply, mixing, heat removal and membrane area at the new size. Copying a unit keeps every module at conditions we have already characterised. Tangential-flow filtration has a formal linear method for this, carried 400-fold in the literature, and a lab hollow-fiber module has the same fiber length as an industrial one. Our eight-module table is arithmetic, not a build.",
"a_zh":"放大單一容器，要在新尺寸重新確立氧氣供應、混合、散熱和膜面積。複製單元則讓每個模組都維持在我們已經了解的條件。切向流過濾有正式的線性放大方法，文獻中曾放大 400 倍，而且實驗室的中空纖維模組與工業用的纖維長度相同。我們的八模組表只是計算，不是實際建造。",
"trap_en":"Saying we tested eight modules. The table is a calculation from one module.",
"trap_zh":"說我們測試過八個模組。那張表是從一個模組推算的。",
"basis":"like GEMS-Taiwan 2024 hardware: 'How could you scale this?'; BNUZH/BWYA 2025 scale-up questions",
"dom":"biomanufacturing",
"id":"q150"
},
{
"type":"validate",
"tier":"A",
"seat":"wet2",
"backup":"hw",
"pages":[
"results",
"biomanufacturing",
"safety-and-security"
],
"q_en":"How do you know the engineered cells stay behind the membrane?",
"q_zh":"你們怎麼知道工程菌被擋在膜後面？",
"kw_en":[
"lumen grew, shell clean",
"single plating",
"no detection limit"
],
"kw_zh":[
"內腔長、殼側乾淨",
"單次塗盤",
"沒有偵測極限"
],
"a_en":"We plated medium from both sides of the running bioreactor. After 24 hours at 37 degrees the lumen plate grew and the shell side showed no colonies, which fits cells larger than the 0.2 micron pores. Honestly, each test was a single plating with no replicates, the detection limit was not recorded, and no log reduction was measured. A seven-log retention challenge is planned, not done.",
"a_zh":"我們把運轉中反應器兩側的培養液都塗盤。37 度 24 小時後，內腔那盤有長，殼側沒有菌落，與細胞比 0.2 微米孔徑大一致。老實說，每次測試都只塗一次、沒有重複，偵測極限沒有記錄，也沒量測對數減少值。七個對數的阻留挑戰測試是計畫，還沒做。",
"trap_en":"Saying 'proved zero escape'. It is preliminary evidence from two unreplicated platings.",
"trap_zh":"說「證明零逃逸」。這只是兩次沒有重複的塗盤得到的初步證據。",
"basis":"like Munich 2025: replicates?; CH Biotech warning on 'undeniable proof'",
"dom":"biomanufacturing",
"id":"q151"
},
{
"type":"validate",
"tier":"A",
"seat":"wet2",
"backup":"dry",
"pages":[
"results"
],
"q_en":"How do you know the protein in the permeate is active and not just present?",
"q_zh":"你們怎麼知道透過液裡的蛋白是有活性的，而不只是存在？",
"kw_en":[
"ELISA amount",
"DNPH activity",
"six hour lag"
],
"kw_zh":[
"ELISA 量",
"DNPH 活性",
"落後六小時"
],
"a_en":"We ran two assays on the same shell samples. Anti-His ELISA counts the protein; the DNPH assay measures the product alpha-ketobutyrate, so it shows activity. In the 72 hour run, ELISA peaked near 6.5 micrograms per mL at 12 hours, activity stayed near zero until 18 hours, then held. The limits are single samples per time point and an untested explanation, that the enzyme needs time to mature.",
"a_zh":"我們對同一批殼側樣品做兩種分析。anti-His ELISA 計算蛋白量；DNPH 測產物 α-酮丁酸，所以代表活性。在 72 小時運轉中，ELISA 在 12 小時達高峰約 6.5 µg/mL，活性到 18 小時前都接近零，之後維持。限制是每個時間點只有單一樣品，而且「酵素需要時間成熟」這個解釋還沒測試。",
"trap_en":"Treating ELISA concentration as proof of function. The two peaks are six hours apart.",
"trap_zh":"把 ELISA 濃度當成有功能的證明。兩個高峰差了六小時。",
"basis":"like Great Bay 2025 model: enzyme activity and production levels; Munich 2025 measurement",
"dom":"biomanufacturing",
"id":"q152"
},
{
"type":"validate",
"tier":"A",
"seat":"hw",
"backup":"dry",
"pages":[
"software",
"biomanufacturing",
"results"
],
"q_en":"How do you know the membrane is not fouling during a run?",
"q_zh":"你們怎麼知道運轉時膜沒有被堵塞？",
"kw_en":[
"TMP trend",
"permeability halved",
"trend not single reading"
],
"kw_zh":[
"跨膜壓差趨勢",
"通透性減半",
"看趨勢不是單點"
],
"a_en":"We read it from the pressure trend. In run 7 the extra pressure across the membrane rose only from 1.9 to 4.4 kPa over 77 hours, though permeability halved from 2520 to 1210 liters per square meter per hour per bar. Shear from the pressure sensors and the flow meter agrees to 2.8 percent. Our transducers resolve only plus or minus 10 kPa, so we read trends, and a finer sensor is the cheapest upgrade.",
"a_zh":"我們用壓力趨勢判斷。run 7 在 77 小時內膜的額外壓差只從 1.9 升到 4.4 kPa，不過通透性從 2520 降到 1210 LMH/bar，減半。由壓力感測器和流量計算出的剪切率相差 2.8%。我們的壓力傳感器解析度只有正負 10 kPa，所以看趨勢，換更精細的感測器是最便宜的升級。",
"trap_en":"Quoting a kPa trend without admitting it is smaller than the sensor resolution the wiki states.",
"trap_zh":"講出 kPa 趨勢，卻沒承認它比 wiki 寫的感測器解析度還小。",
"basis":"like Hardware bank: 'how did you validate against a commercial instrument?' pattern",
"dom":"biomanufacturing",
"id":"q153"
},
{
"type":"validate",
"tier":"B",
"seat":"dry",
"backup":"hw",
"pages":[
"software",
"results"
],
"q_en":"Your forecast model beat a baseline. How do you know it was not just fitted to its own data?",
"q_zh":"你們的預測模型贏過基準線。你們怎麼知道它不是只對自己的資料過擬合？",
"kw_en":[
"registered 1 October",
"0.286 inside interval",
"run 7 0% at 2 h"
],
"kw_zh":[
"10 月 1 日登記",
"0.286 落在區間內",
"run 7 的 2 小時是 0%"
],
"a_en":"For the growth rate we wrote the prediction down on 1 October, before any WB800 bioreactor run: 0.2986 per hour, interval 0.2705 to 0.3300. Run 6 gave 0.286, inside it. For the Kalman forecast, it beat the no-change baseline by 41 percent at 2 hours on run 4, but 0 percent at 2 hours on run 7. Only the growth rate was scored; curve shape and time to OD 0.5 were not.",
"a_zh":"生長率這一項，我們在 10 月 1 日、任何 WB800 生物反應器運轉之前就先寫下預測：每小時 0.2986，區間 0.2705 到 0.3300。run 6 的結果是 0.286，落在區間內。Kalman 預測在 run 4 的 2 小時比不變基準好 41%，但在 run 7 的 2 小時是 0%。只有生長率有評分，曲線形狀和達到 OD 0.5 的時間沒有評分。",
"trap_en":"Quoting only the 41 percent. Run 7 showed 0 percent at 2 hours.",
"trap_zh":"只講 41%。run 7 在 2 小時是 0%。",
"basis":"like Munich 2025: replicates / held-out test; registered-prediction pattern on software",
"dom":"biomanufacturing",
"id":"q154"
},
{
"type":"compare",
"tier":"A",
"seat":"biz",
"backup":"ihp",
"pages":[
"biomanufacturing",
"hardware-bioreactor",
"laws-and-regulations",
"geospatial-analysis"
],
"q_en":"Why not make the protectant in a factory and sell it in a bottle, like Kelpak?",
"q_zh":"為什麼不在工廠生產、裝瓶賣，像 Kelpak 那樣？",
"kw_en":[
"no cold chain",
"fresh known dose",
"every farm needs a machine"
],
"kw_zh":[
"免冷鏈",
"新鮮、劑量已知",
"每個農場要一台機器"
],
"a_en":"A bottle needs cold storage and shipping, and peptides can lose potency before use. Made on the farm, the protectant is fresh and the dose is known. Our parcel-level map found that even same-county fertilizer deliveries travel real road distances. The honest trade is that every farm needs its own machine, and we have not computed cost per dose against what farmers buy today. The pilot of five to ten units is meant to answer that.",
"a_zh":"瓶裝要冷藏和運送，胜肽可能在使用前就失去效力。在農場現做，保護蛋白是新鮮的，劑量也清楚。我們的地籍級地圖發現，連同縣市的肥料配送都要走實際的路程。誠實的取捨是每個農場都要有自己的機器，而且我們還沒算出每劑成本來和農民現在買的東西比較。五到十台的試點就是要回答這件事。",
"trap_en":"Claiming on-site is cheaper. The page says that comparison is not yet computed.",
"trap_zh":"宣稱現場生產比較便宜。本頁明說這個比較還沒算。",
"basis":"like Hardware bank 2025: 'What is your cost advantage?' and Toulouse 2021 biomanufacturing: 'cheap synthetic alternatives already exist'",
"dom":"biomanufacturing",
"id":"q155"
},
{
"type":"compare",
"tier":"A",
"seat":"hw",
"backup":"biz",
"pages":[
"hardware-bioreactor",
"laws-and-regulations"
],
"q_en":"Why not just put the engineered bacteria on the roots? That would be simpler than a machine.",
"q_zh":"為什麼不直接把工程菌放在根部？那樣比做一台機器簡單。",
"kw_en":[
"first design was root bacteria",
"release cannot be controlled",
"containment problem"
],
"kw_zh":[
"最初設計是根部細菌",
"釋放後無法控制",
"轉成阻隔問題"
],
"a_en":"That was our first design, a transgenic root bacterium. We dropped it for biosafety: once released, expression, dose and spread cannot be controlled. Also, lab B. subtilis lacks motility and biofilm, so it would struggle in soil anyway. Keeping the organism in a machine turns a release problem into a containment problem. The cost is a machine per farm, and the law pages treat direct application as a different, harder question.",
"a_zh":"那是我們最初的設計，一種轉殖的根部細菌。我們因為生物安全放棄：一旦釋放，表現量、劑量和擴散都無法控制。另外，實驗室的 B. subtilis 沒有運動力、不能形成生物膜，在土壤裡本來就很難存活。把生物留在機器裡，是把釋放問題變成阻隔問題。代價是每個農場要一台機器，而且法規頁把直接施用視為另一個更難的問題。",
"trap_en":"Forgetting that the root-colonising design was ReLEAF's own first idea and was dropped on purpose.",
"trap_zh":"忘了根部定殖是 ReLEAF 自己最初的點子，而且是刻意放棄的。",
"basis":"like NUS 2021 biomanufacturing: field validation before farmer use; design-history from hardware-bioreactor 2.1",
"dom":"biomanufacturing",
"id":"q156"
},
{
"type":"compare",
"tier":"A",
"seat":"biz",
"backup":"ihp",
"pages":[
"laws-and-regulations",
"biomanufacturing"
],
"q_en":"How does your regulatory position in the EU compare with Taiwan?",
"q_zh":"你們在歐盟和臺灣的法規處境有什麼不同？",
"kw_en":[
"EU has PFC 6(B)",
"B. subtilis not on list",
"Taiwan contained use unresolved"
],
"kw_zh":[
"歐盟有 PFC 6(B)",
"枯草桿菌不在名單",
"臺灣封閉使用未確認"
],
"a_en":"The EU gives a clear category for the cell-free output: non-microbial plant biostimulants, PFC 6(B), which includes abiotic stress tolerance. But its microbial list holds four groups and B. subtilis is not one, so our culture scores 1 out of 5 there. In Taiwan a fertilizer category exists, but we found no clear contained-use framework, and WB800 is unlikely to be on the 16-strain list. In both, we have only potential pathways.",
"a_zh":"歐盟對無細胞產物有明確類別：非微生物植物生物刺激素 PFC 6(B)，包含非生物逆境耐受性。但它的微生物名單只有四類，枯草桿菌不在內，所以我們的菌株在那裡得 1/5。臺灣有肥料類別，但我們找不到明確的封閉使用架構，而且 WB800 不太可能在 16 株名單內。兩邊我們都只有可能的路徑。",
"trap_en":"Saying the EU is easier. The output route is clear, the culture is knocked out.",
"trap_zh":"說歐盟比較容易。產品路線清楚，但菌株被淘汰。",
"basis":"Table 6 and Table 10 comparison on laws-and-regulations; like Hardware bank 'market' questions",
"dom":"biomanufacturing",
"id":"q157"
},
{
"type":"compare",
"tier":"B",
"seat":"hw",
"backup":"dry",
"pages":[
"biomanufacturing"
],
"q_en":"Why a hollow-fiber module rather than a stirred tank with a filter on the side?",
"q_zh":"為什麼用中空纖維模組，而不是旁邊接濾膜的攪拌槽？",
"kw_en":[
"formal scale-out method",
"same fiber length",
"no gas port"
],
"kw_zh":[
"有正式水平複製方法",
"相同纖維長度",
"沒有氣體埠"
],
"a_en":"Tangential-flow filtration has a formal method for scaling, and hollow fiber suits it: a lab module has the same fiber length as an industrial one, so our module is the unit cell to copy. That is why we picked it over a stirred tank. What we gave up is oxygen. A stirred tank can sparge; our closed loop has no gas port, so oxygen limits cell density first. We calculate a transfer rate of 12.5 per hour is needed at OD 1.454.",
"a_zh":"切向流過濾有正式的放大方法，中空纖維很適合：實驗室模組的纖維長度與工業用的相同，所以我們的模組就是要複製的單元。這就是選它而不選攪拌槽的原因。我們放棄的是氧氣。攪拌槽可以通氣；我們的封閉迴路沒有氣體埠，所以氧氣最先限制細胞密度。我們計算在 OD 1.454 時需要每小時 12.5 的氧傳遞率 (kLa)。",
"trap_en":"Saying hollow fiber is better in general. The wiki chose it for the scale-out method and accepts an oxygen limit.",
"trap_zh":"說中空纖維整體比較好。wiki 是為了水平複製方法而選它，並接受氧氣限制。",
"basis":"like NUS 2021 hardware: 'what did you give up?'",
"dom":"biomanufacturing",
"id":"q158"
},
{
"type":"compare",
"tier":"A",
"seat":"biz",
"backup":"ihp",
"pages":[
"laws-and-regulations"
],
"q_en":"The United States scored higher than the Philippines. Why go to the Philippines first?",
"q_zh":"美國的分數比菲律賓高，為什麼先去菲律賓？",
"kw_en":[
"US 32, Philippines 25",
"entry ease 1 of 5",
"names engineered organisms"
],
"kw_zh":[
"美國 32、菲律賓 25",
"進入容易度 1/5",
"明文處理工程生物"
],
"a_en":"The US ranks first at 32 points but scores 1 out of 5 on entry ease: it is about 12 650 kilometers away, has two overlapping regimes, no federal biostimulant definition, and a risk ACCD is read as a plant growth regulator. The Philippines scores 25, the only Asian market naming engineered organisms in its fertilizer system, with provisional registration after one season. The scoring is our own qualitative synthesis, and no regulator has confirmed anything in writing.",
"a_zh":"美國以 32 分排第一，但進入容易度只有 1/5：距離約 12 650 公里、有兩套重疊的制度、沒有聯邦層級的生物刺激素定義，而且 ACCD 可能被視為植物生長調節劑。菲律賓 25 分，是亞洲唯一在肥料制度中明文處理工程生物的市場，一季之後可有暫時登記。這個評分是我們自己的質性整理，沒有主管機關書面確認。",
"trap_en":"Hiding that the Philippines has very small farms (0.79 ha average) and scored low on market size.",
"trap_zh":"不提菲律賓農場很小（平均 0.79 公頃）、市場規模分數低。",
"basis":"like Hardware bank 2025: 'What is your go-to-market strategy?'; Table 7 on laws-and-regulations",
"dom":"biomanufacturing",
"id":"q159"
},
{
"type":"boundary",
"tier":"A",
"seat":"biz",
"backup":"ihp",
"pages":[
"laws-and-regulations",
"geospatial-analysis",
"biomanufacturing"
],
"q_en":"Could organic farmers use ReLEAF, since no engineered bacteria reach the field?",
"q_zh":"既然工程菌不會進到田裡，有機農民能用 ReLEAF 嗎？",
"kw_en":[
"GMO products excluded",
"membrane not enough",
"likely closed"
],
"kw_zh":[
"GMO 產物被排除",
"膜不夠",
"很可能不行"
],
"a_en":"Probably not, and we say so. Taiwan's Organic Agriculture Promotion Act excludes products of genetically modified organisms whatever the containment, and the US, EU and Malaysia are similar. Certified organic is about 3.7 percent of cultivated land. Our membrane keeps cells out of the product, but that does not change how the protein was made. We would need written answers from the Ministry and a certifier before any organic claim.",
"a_zh":"大概不行，我們也這樣說。臺灣的有機農業促進法排除基因改造生物的產物，不管有沒有阻隔，美國、歐盟和馬來西亞也類似。認證有機約佔耕地 3.7%。我們的膜讓細胞不進入產品，但不會改變蛋白是怎麼製成的。要做有機宣稱前，我們需要農業部和驗證機構的書面回覆。",
"trap_en":"Repeating the Biomanufacturing line that the reactor was built around organic claims, without the Laws page caveat.",
"trap_zh":"照念 Biomanufacturing 頁「反應器為有機宣稱而設計」那句，卻不提 Laws 頁的但書。",
"basis":"conflict between biomanufacturing#Regulation and biosafety and laws-and-regulations#Organic Farming; like Science-Tokyo 2025 'farmer adoption'",
"dom":"biomanufacturing",
"id":"q160"
},
{
"type":"boundary",
"tier":"A",
"seat":"hw",
"backup":"biz",
"pages":[
"results",
"biomanufacturing",
"safety-and-security"
],
"q_en":"What happens if the membrane tears or a fitting leaks and nobody is at the farm?",
"q_zh":"如果膜破了或接頭漏了，而農場沒有人，會怎麼樣？",
"kw_en":[
"pressure trip 0.70 bar",
"droplet sensor",
"pressure alone missed a leak"
],
"kw_zh":[
"壓力跳脫 0.70 bar",
"液滴感測器",
"只看壓力漏掉了洩漏"
],
"a_en":"Three safeguards exist: the microcontroller opens the pinch valve above 0.70 bar, pressure and flow are logged, and a droplet sensor sits under the rig. But in our own run a leak at a feeding valve raised lumen pressure instead of dropping it, with transmembrane pressure unchanged, so pressure alone missed it. We concluded a dedicated leak detector is needed for unattended use. A membrane-integrity alarm is designed on the Laws page, not built.",
"a_zh":"有三道防護：微控制器在壓力超過 0.70 bar 時打開夾管閥、持續記錄壓力和流量、機器下方有液滴感測器。但在我們自己的運轉中，進料閥洩漏反而讓內腔壓力上升，跨膜壓差沒變，所以只看壓力漏掉了。我們的結論是無人看管需要專用的洩漏偵測器。膜完整性警報在 Laws 頁是設計，還沒建造。",
"trap_en":"Saying pressure monitoring detects leaks. Our own leak event showed it does not on its own.",
"trap_zh":"說壓力監測可以偵測洩漏。我們自己的洩漏事件顯示單靠它做不到。",
"basis":"like NUS 2021 hardware: contamination / failure handling; Results 'Pressure and sampling'",
"dom":"biomanufacturing",
"id":"q161"
},
{
"type":"boundary",
"tier":"A",
"seat":"hw",
"backup":"dry",
"pages":[
"biomanufacturing"
],
"q_en":"Could one unit run a week in a field with no one looking after it?",
"q_zh":"一台機器可以在田裡一週無人照顧嗎？",
"kw_en":[
"4 days at bench",
"medium, oxygen, power",
"duty-cycle pump"
],
"kw_zh":[
"實驗室跑過 4 天",
"培養基、氧氣、電力",
"間歇運轉幫浦"
],
"a_en":"Not yet. Our longest unattended run was about four days, and in an incubator, not a field. Three things bind: medium, since conventional feeding would need about 29 liters a day; oxygen, where the 100 mL loop runs out in about two minutes if transfer stops; and power, since a 45 watt panel gives 101 watt-hours against a 72 to 192 draw. Running the pump on a duty cycle is the first experiment, and settling in the fibers is unmeasured.",
"a_zh":"還不行。我們最長的無人看管運轉約四天，而且是在培養箱不是田裡。有三件事是限制：培養基，一般餵養法每天約要 29 公升；氧氣，氧傳遞一中斷 100 mL 迴路約兩分鐘就用完；電力，45 瓦面板一天 101 瓦時，而需求是 72 到 192。讓幫浦間歇運轉是第一個要做的實驗，纖維內沉降的問題還沒量測。",
"trap_en":"Claiming field readiness because of the 102 hour run. It was on a bench in an incubator.",
"trap_zh":"因為跑過 102 小時就說可以上田。那是在培養箱內的實驗桌上。",
"basis":"like BNUZH/BWYA 2025 hardware: 'do you plan to upscale / when available?'; NUS 2021 'what to validate before farm use'",
"dom":"biomanufacturing",
"id":"q162"
},
{
"type":"boundary",
"tier":"B",
"seat":"dry",
"backup":"hw",
"pages":[
"software",
"next-digital-twin",
"digital-twin-app"
],
"q_en":"Could your digital twin switch on the green light by itself?",
"q_zh":"你們的數位孿生可以自己打開綠光嗎？",
"kw_en":[
"light not in bioreactor",
"recorded data only",
"person approves"
],
"kw_zh":[
"綠光還沒裝進反應器",
"只用記錄資料",
"由人核准"
],
"a_en":"No. Green light was tested on the light-programmable array only and is not built into the bioreactor. The models run on recorded data after each run, and a person approves any induction. The assays cannot yet set how long to induce. The newer browser twin, with a weather tab and an Ask tab, shows demo data on the wiki and is not driving the rig. It can explain readings but cannot move a valve or the light.",
"a_zh":"不行。綠光只在光控陣列上測試過，還沒裝進生物反應器。模型是每次運轉後用記錄資料分析，任何誘導都由人核准。分析方法目前還無法決定誘導多久。新的瀏覽器孿生有天氣分頁和 Ask 分頁，在 wiki 上顯示的是示範資料，沒有在控制反應器；它能解釋讀值，但不能操作閥門或燈。",
"trap_en":"Presenting the next Digital Twin as a working controller.",
"trap_zh":"把下一版數位孿生說成正在運作的控制器。",
"basis":"like Bioreactors bank (Timmy): 'what does the digital twin still know?'; INSA Lyon 2022 hardware-software integration",
"dom":"biomanufacturing",
"id":"q163"
},
{
"type":"boundary",
"tier":"A",
"seat":"biz",
"backup":"dry",
"pages":[
"laws-and-regulations"
],
"q_en":"What if a regulator decides your permeate is a pesticide and not a biostimulant?",
"q_zh":"如果主管機關認定你們的透過液是農藥而不是生物刺激素呢？",
"kw_en":[
"the claim decides",
"gray mold track separate",
"ACCD as growth regulator"
],
"kw_zh":[
"宣稱決定分類",
"灰黴病路線另外處理",
"ACCD 被當成生長調節劑"
],
"a_en":"The claim decides the route. Abiotic stress claims point to fertilizer or biostimulant; a pathogen-control claim, such as BoPep4 against gray mold after the Jamboree, may trigger a separate pesticide path with efficacy, toxicology and residue studies. In the US, ACCD might be read as a plant growth regulator, so we would ask the EPA for a non-FIFRA determination. Our market ranking does not cover the pesticide path at all.",
"a_zh":"宣稱決定路線。非生物逆境宣稱指向肥料或生物刺激素；防治病原的宣稱，例如 Jamboree 之後 BoPep4 對抗灰黴病，可能觸發另一條農藥路徑，需要藥效、毒理和殘留研究。在美國，ACCD 可能被視為植物生長調節劑，所以我們會向 EPA 申請非 FIFRA 認定。我們的市場排序完全沒有涵蓋農藥路徑。",
"trap_en":"Saying gray mold control is already part of the project. It is a post-Jamboree research idea; high school teams could not test it.",
"trap_zh":"說防治灰黴病已經是專題的一部分。那是 Jamboree 之後的研究想法；高中組無法測試。",
"basis":"Dual-track strategy on laws-and-regulations; like Science-Tokyo 2025 farmer adoption / regulation probes",
"dom":"biomanufacturing",
"id":"q164"
},
{
"type":"integrate",
"tier":"A",
"seat":"dry",
"backup":"hw",
"pages":[
"software",
"results"
],
"q_en":"Give an example where a failure in the reactor changed your software or your hardware.",
"q_zh":"請舉一個反應器出問題而改變你們軟體或硬體的例子。",
"kw_en":[
"run 5 bubbles",
"acceptance gate",
"permeate halved"
],
"kw_zh":[
"run 5 氣泡",
"接受閘門",
"透過液減半"
],
"a_en":"Run 5 broke down after about ten hours: bubbles in a sixth of the measurement windows and the reference beam drifting 4.8-fold. For run 6 we halved the permeate flow to 12 mL per minute and added an acceptance gate that holds the last good value when a reading fails its checks. Run 6 read cleanly to OD 2.71 and run 7 to 3.34. Earlier, the 434 hour failure of the photometer is what trained the fault detector.",
"a_zh":"run 5 約十小時後就壞了：六分之一的量測視窗有氣泡，參考光束漂移 4.8 倍。run 6 我們把透過液流量減半到每分鐘 12 mL，並加上接受閘門，讀值沒通過檢查就保留上一個好的值。run 6 乾淨地讀到 OD 2.71，run 7 讀到 3.34。更早之前，434 小時那次光度計的故障，就是訓練故障偵測器的資料。",
"trap_en":"Saying the fix was only software. Two changes: lower permeate flow and the acceptance gate.",
"trap_zh":"說只改了軟體。其實是兩個改變：降低透過液流量，加上接受閘門。",
"basis":"like INSA Lyon 2022 hardware: 'how do hardware and software work together?'; Munich 2025 model-lab loop",
"dom":"biomanufacturing",
"id":"q165"
},
{
"type":"integrate",
"tier":"A",
"seat":"biz",
"backup":"hw",
"pages":[
"laws-and-regulations",
"safety-and-security"
],
"q_en":"How did regulation change what you plan to build?",
"q_zh":"法規如何改變了你們打算建造的東西？",
"kw_en":[
"regulation as design",
"claims set evidence",
"planned containment upgrades"
],
"kw_zh":[
"法規即設計",
"宣稱決定證據",
"規劃中的阻隔升級"
],
"a_en":"We treat regulation as product design: the claim sets the evidence we must generate, and the three parts are assessed separately. Already built: a sealed replaceable culture cartridge, a pressure trip and a leak sensor. Planned after the Jamboree, not built: chromosomal integration with antibiotic markers removed, a kill switch or auxotrophy aiming below one escapee in 10 to the 8 cells, a seven-log retention test, and a membrane-integrity alarm.",
"a_zh":"我們把法規當成產品設計：宣稱決定我們要產生的證據，三個部分分開評估。已經建好的有：密封可更換的菌匣、壓力跳脫和洩漏感測器。Jamboree 之後規劃但還沒建造的有：把基因嵌入染色體並移除抗生素標記、目標低於每 10 的 8 次方個細胞逃出 1 個的自殺開關或營養缺陷、七個對數的阻留測試，以及膜完整性警報。",
"trap_en":"Describing planned containment upgrades (kill switch, 7-log test) as done.",
"trap_zh":"把規劃中的阻隔升級（自殺開關、七個對數測試）說成已完成。",
"basis":"Table 18 'Requirements ReLEAF has yet to conquer' on laws-and-regulations; Safety page",
"dom":"biomanufacturing",
"id":"q166"
},
{
"type":"integrate",
"tier":"B",
"seat":"dry",
"backup":"biz",
"pages":[
"model",
"entrepreneurship",
"biomanufacturing"
],
"q_en":"How do your reactor numbers connect to the cost of protecting a hectare?",
"q_zh":"你們的反應器數字如何連到保護一公頃的成本？",
"kw_en":[
"dose sets reactor count",
"203 U vs 37.6 kU",
"not field validated"
],
"kw_zh":[
"劑量決定反應器數量",
"203 U 對 37.6 kU",
"沒有田間驗證"
],
"a_en":"The dose sets the number of reactors, and our two plans disagree by 185 times. The business plan assumes 203 units per hectare per spray and two 1 liter reactors. The Math Model scales a plate rate through a canopy factor to 37.6 kilo-units and 81 liters of vessel, costing US$3800 a hectare. Neither dose has been tested on a crop, so the business plan is not yet rebuilt on the Math Model figure.",
"a_zh":"劑量決定反應器數量，而我們兩份計畫相差 185 倍。商業計畫假設每公頃每次噴施 203 單位，用兩台 1 公升反應器。數學模型把培養皿的用量乘上冠層係數，得到 37.6 千單位和 81 公升容器，每公頃資本 US$3800。兩個劑量都沒在作物上測試過，所以商業計畫還沒有改用數學模型的數字重算。",
"trap_en":"Quoting one hectare figure as settled. The wiki flags the 185-fold disagreement itself.",
"trap_zh":"把其中一個每公頃數字當成定案。wiki 自己標示了這個 185 倍的差距。",
"basis":"entrepreneurship#Pricing model and model#Links to the bench; like Great Bay 2025 model-to-lab",
"dom":"biomanufacturing",
"id":"q167"
},
{
"type":"gap",
"tier":"A",
"seat":"wet2",
"backup":"hw",
"pages":[
"biomanufacturing",
"results",
"laws-and-regulations"
],
"q_en":"What have you not shown about the permeate that a regulator would ask for?",
"q_zh":"關於透過液，有哪些法規單位會問、但你們還沒證明的？",
"kw_en":[
"viable cells with limit",
"residual DNA",
"7-log retention"
],
"kw_zh":[
"含偵測極限的活菌數",
"殘留 DNA",
"七個對數阻留"
],
"a_en":"Several things. We have no viable-cell count with a recorded detection limit, no residual recombinant DNA measurement, and no spore test. Fragments of 20 to 200 nanometers may cross a 0.2 micron membrane. Our retention evidence is two unreplicated platings. The Laws page plans a seven-log retention challenge and permeate release testing by plating and qPCR. What we did show is ELISA and DNPH activity in the shell for 72 hours.",
"a_zh":"有好幾項。我們沒有記錄偵測極限的活菌數、沒有殘留重組 DNA 的量測，也沒有孢子測試。20 到 200 奈米的碎片可能通過 0.2 微米的膜。我們的阻留證據只有兩次沒有重複的塗盤。Laws 頁計畫做七個對數的阻留挑戰，以及用塗盤和 qPCR 做透過液放行檢測。我們有做到的是殼側 72 小時的 ELISA 和 DNPH 活性。",
"trap_en":"Saying the permeate is sterile or DNA-free. Neither was measured.",
"trap_zh":"說透過液是無菌或不含 DNA。這兩項都沒量測。",
"basis":"CH Biotech 5 Sept 2026 quote; like Munich 2025 measurement limits",
"dom":"biomanufacturing",
"id":"q168"
},
{
"type":"gap",
"tier":"A",
"seat":"hw",
"backup":"dry",
"pages":[
"biomanufacturing",
"software"
],
"q_en":"Your page says fouling headroom is 0.04, yet your runs drew much more permeate. Explain.",
"q_zh":"你們頁面說堵塞餘裕是 0.04，但實際運轉取的透過液多得多。請說明。",
"kw_en":[
"0.04 is the design point",
"runs 36-72 LMH",
"46 LMH threshold"
],
"kw_zh":[
"0.04 是設計點",
"運轉 36 至 72 LMH",
"門檻 46 LMH"
],
"a_en":"You are right to push. The 0.04 compares a 2 LMH design flux with a calculated 46 LMH threshold. Our runs drew 12 to 24 mL per minute, which is 36 to 72 LMH, and two of three were above 46. Fouling still stayed low, but the shell valve was opened intermittently, 90 collections in run 7, and we have not calculated the time-averaged flux. So 0.04 describes the design point, not those runs.",
"a_zh":"你問得對。0.04 是 2 LMH 的設計通量對上算出的 46 LMH 門檻。我們實際運轉每分鐘取 12 到 24 mL，也就是 36 到 72 LMH，三次中有兩次高於 46。堵塞仍然很低，但殼側閥門是間歇打開的，run 7 有 90 次收集，我們還沒算出時間平均通量。所以 0.04 描述的是設計點，不是那幾次運轉。",
"trap_en":"Defending 0.04 as if it applied to the runs.",
"trap_zh":"硬說 0.04 適用於那幾次運轉。",
"basis":"internal inconsistency: biomanufacturing#Critical flux vs software run table (72, 36, 51 LMH)",
"dom":"biomanufacturing",
"id":"q169"
},
{
"type":"gap",
"tier":"A",
"seat":"wet2",
"backup":"hw",
"pages":[
"results",
"hardware-bioreactor",
"software"
],
"q_en":"What went wrong in your bioreactor work?",
"q_zh":"你們的生物反應器工作中，哪些地方出了問題？",
"kw_en":[
"168 made no enzyme",
"KOH corroded valve",
"leak and lost data"
],
"kw_zh":[
"168 沒產酵素",
"KOH 腐蝕閥門",
"洩漏與資料遺失"
],
"a_en":"Quite a lot. Strain 168 made almost no detectable enzyme. In cycle 4, 1 M potassium hydroxide corroded the feeding valve, so automated pH dosing was withdrawn; we could not separate it from the peroxide used for cleaning. A feeding valve leaked at about 37 hours. About ten hours of data were lost to a computer update. Run 5's photometer broke down after ten hours. Our AmilCP reporter never showed colour.",
"a_zh":"不少。168 菌株幾乎測不到酵素。第 4 輪中，1 M 氫氧化鉀腐蝕了進料閥，所以自動加鹼被撤掉；我們分不出是它還是清潔用的過氧化氫造成的。進料閥在約 37 小時漏了。約十小時的資料因電腦更新而遺失。run 5 的光度計十小時後就壞了。AmilCP 報告蛋白從來沒有顯色。",
"trap_en":"Hiding the corrosion cause. We could not tell KOH from peroxide.",
"trap_zh":"隱瞞腐蝕原因。我們分不出是 KOH 還是過氧化氫。",
"basis":"like Munich 2025: what failed; Results 'pH and antibiotic resupply'",
"dom":"biomanufacturing",
"id":"q170"
},
{
"type":"gap",
"tier":"A",
"seat":"biz",
"backup":"ihp",
"pages":[
"biomanufacturing",
"entrepreneurship",
"model"
],
"q_en":"What is your cost per dose of protectant?",
"q_zh":"你們每一劑保護蛋白的成本是多少？",
"kw_en":[
"not computed",
"dose never tested on crop",
"payback 68 vs 4.9 years"
],
"kw_zh":[
"還沒算",
"劑量未在作物測試",
"回收期 68 年對 4.9 年"
],
"a_en":"We do not have one. The only cost we can stand behind is the hand-built prototype. The business plan prices per hectare from an assumed dose that no crop has received, and our Math Model gives a dose 185 times higher. Payback is 68 years on the Math Model's loss estimate and 4.9 years on the geospatial estimate. A techno-economic analysis and the five-to-ten unit pilot are what would give a real number.",
"a_zh":"我們沒有這個數字。唯一能負責的成本是手工原型。商業計畫是用一個沒有任何作物接受過的假設劑量，按公頃定價；數學模型算出的劑量則高 185 倍。回收期依數學模型的損失估計是 68 年，依地理空間估計是 4.9 年。技術經濟分析和五到十台的試點才能給出真正的數字。",
"trap_en":"Inventing a per-dose price. The wiki says none exists.",
"trap_zh":"編一個每劑價格。wiki 說沒有。",
"basis":"like Hardware bank 2025 'What is your cost advantage?'; Leiden 2023 'what specifically reduces the cost?'",
"dom":"biomanufacturing",
"id":"q171"
},
{
"type":"impact",
"tier":"A",
"seat":"biz",
"backup":"ihp",
"pages":[
"entrepreneurship",
"laws-and-regulations",
"biomanufacturing"
],
"q_en":"What is your path to a first real farm, and what stops you today?",
"q_zh":"你們走到第一個真正農場的路徑是什麼？今天卡在哪裡？",
"kw_en":[
"classification first",
"membrane tests",
"5-10 pilot units"
],
"kw_zh":[
"先釐清分類",
"膜阻留測試",
"五到十台試點"
],
"a_en":"Regulators come first. From November 2026 we plan classification consultations with the Agriculture and Food Agency and APHIA, plus retention and escape testing at a government-recognised institute. A Taiwan pilot and dossier would follow, and five to ten units run one season with cooperatives before any sale. Today we have no written regulator answer, and Taiwan has no confirmed contained-use framework for our strain.",
"a_zh":"先處理法規。從 2026 年 11 月起，我們計畫向農糧署和防檢署諮詢分類，並在政府認可的機構做阻留與逃逸頻率測試。接著是臺灣試點和申請文件，賣出任何一台之前，先和合作社跑一季五到十台。目前我們沒有任何書面的主管機關回覆，臺灣對我們的菌株也沒有確認的封閉使用架構。",
"trap_en":"Skipping regulation and starting with sales. The plan sequences sales after written answers and a pilot.",
"trap_zh":"跳過法規直接談銷售。計畫是先有書面回覆和試點，才進入銷售。",
"basis":"like Hardware bank 2025: 'go-to-market' and 'funding / de-risk'; NUS 2021 'validate before a farmer could use it'",
"dom":"biomanufacturing",
"id":"q172"
},
{
"type":"impact",
"tier":"A",
"seat":"biz",
"backup":"ihp",
"pages":[
"model",
"geospatial-analysis",
"entrepreneurship"
],
"q_en":"Can a Taiwanese smallholder afford this? 99 percent of farmers have under two hectares.",
"q_zh":"臺灣小農負擔得起嗎？99% 的農民農地都不到兩公頃。",
"kw_en":[
"shared ownership",
"4.3% of calendar",
"break-even 226 ha"
],
"kw_zh":[
"共同擁有",
"只用 4.3% 的時間",
"損益兩平 226 公頃"
],
"a_en":"Not individually. Our Math Model finds one ten-unit fleet covers 2.5 hectares yet runs on only 4.3 percent of the calendar, so a single farm owning one sits idle. Both our geospatial and math pages conclude a shared asset through a farmers' association is the only structure that works. We also list cooperative buying, seasonal rental and cartridge subscriptions. Those prices are planning estimates, and payback is unsettled.",
"a_zh":"個別農民負擔不起。數學模型發現一組十台的設備可涵蓋 2.5 公頃，但只用到 4.3% 的時間，單一農場擁有就是閒置。地理空間頁和數學頁都結論：透過農會共同擁有是唯一可行的結構。我們也列出合作社集體購買、季節租賃和補充匣訂閱。這些價格是規劃估計，回收期也還沒定論。",
"trap_en":"Promising a payback period. The two pages disagree: 68 years versus 4.9.",
"trap_zh":"保證一個回收期。兩個頁面不一致：68 年對 4.9 年。",
"basis":"like Science-Tokyo 2025 'support farmer adoption'; Tsinghua 2025 customer acquisition cost",
"dom":"biomanufacturing",
"id":"q173"
},
{
"type":"impact",
"tier":"A",
"seat":"hw",
"backup":"biz",
"pages":[
"biomanufacturing",
"model"
],
"q_en":"If you scaled this a hundred times, what breaks first?",
"q_zh":"如果規模放大一百倍，什麼會最先出問題？",
"kw_en":[
"membrane binds last",
"oxygen, power, medium",
"41x for 100 ha"
],
"kw_zh":[
"膜最後才受限",
"氧氣、電力、培養基",
"100 公頃要放大 41 倍"
],
"a_en":"Not the membrane. Copying units keeps shear, flux and fouling margin the same by construction. What binds is everything around it: oxygen transfer per unit, power, which goes from 3 to 8 watts to 24 to 64 watts at eight modules, medium supply at 7.7 liters a day, and pumping. The Math Model says a 100 hectare association needs 8106 liters, a 41 times scale-up from our spec. None of this has been built.",
"a_zh":"不是膜。複製單元讓剪切率、通量和堵塞餘裕在設計上保持不變。受限的是周邊的一切：每個單元的氧傳遞、電力（八個模組時從 3 到 8 瓦變成 24 到 64 瓦）、每天 7.7 公升的培養基供應，以及泵送。數學模型說 100 公頃的農會需要 8106 公升，比我們的規格放大 41 倍。這些都還沒建造。",
"trap_en":"Saying the membrane is the bottleneck at scale. The wiki table says it binds last.",
"trap_zh":"說放大後膜是瓶頸。wiki 的表說膜最後才受限。",
"basis":"like BWYA/ICT-Mumbai 2025: 'how scalable is the product?'; GEMS-Taiwan 2024 'How could you scale this?'",
"dom":"biomanufacturing",
"id":"q174"
},
{
"type":"impact",
"tier":"B",
"seat":"biz",
"backup":"ihp",
"pages":[
"laws-and-regulations"
],
"q_en":"What would you need to prove before a regulator or farmer could rely on ReLEAF?",
"q_zh":"要讓主管機關或農民能信賴 ReLEAF，你們還需要證明什麼？",
"kw_en":[
"cell-free proof",
"identity and stability",
"written answers"
],
"kw_zh":[
"無細胞證明",
"身分與穩定性",
"書面回覆"
],
"a_en":"Four things, all planned and not done. Biosafety of the strain: genes in the chromosome, escape testing, soil survival over 28 to 90 days in three soils. Proof of cell-free output: a seven-log retention challenge and batch release testing. An identity and stability dossier, with under 15 percent variation across three lots and 12 months of stability. And written regulator answers from Taiwan and the Philippines within six months.",
"a_zh":"四件事，都是計畫、還沒做。菌株的生物安全：基因整合進染色體、逃逸測試、在三種土壤中做 28 到 90 天的存活測試。無細胞產物的證明：七個對數的阻留挑戰和批次放行檢測。身分與穩定性資料，三批之間變異低於 15%，並有 12 個月的穩定性。最後是在六個月內取得臺灣與菲律賓主管機關的書面回覆。",
"trap_en":"Listing the Table 18 targets as results. They are proposed internal targets.",
"trap_zh":"把 Table 18 的目標當成成果。它們是擬定的內部目標。",
"basis":"Table 18 on laws-and-regulations; like NUS 2021 biomanufacturing 'what would you need to validate'",
"dom":"biomanufacturing",
"id":"q175"
},
{
"type":"impact",
"tier":"A",
"seat":"biz",
"backup":"hw",
"pages":[
"laws-and-regulations",
"entrepreneurship"
],
"q_en":"Who is responsible if the engineered bacteria ever got out of a farm unit?",
"q_zh":"如果工程菌真的從農場的機器逃出去，誰負責？",
"kw_en":[
"not stated on wiki",
"operator model decides",
"regulators ask"
],
"kw_zh":[
"wiki 沒有寫",
"營運模式決定",
"主管機關會問"
],
"a_en":"Honestly, our wiki does not assign liability. What it does set out is who would hold the manufacturing licenses under three models: company-operated, farmer-operated, or central production with only permeate distributed. Company operation keeps licenses with us, and central production is the fallback if on-farm use of the engineered culture is refused. We plan to ask regulators whether farm-side production counts as manufacture and whether a sealed cartridge is a GMO release.",
"a_zh":"老實說，我們的 wiki 沒有指定責任歸屬。它有寫的是三種模式下誰持有製造許可：公司營運、農民營運，或集中生產、只配送透過液。公司營運讓許可留在我們這裡，若農場使用工程菌被拒絕，集中生產是備案。我們計畫向主管機關詢問：農場端生產算不算製造、密封菌匣算不算 GMO 釋放。",
"trap_en":"Making up an insurance or liability arrangement. None is on the wiki.",
"trap_zh":"編造保險或責任安排。wiki 上沒有。",
"basis":"Table 18 'Business model and licensing exposure'; like Hardware bank 2025 'maintain service quality at scale'",
"dom":"biomanufacturing",
"id":"q176"
},
{
"q_en":"Where do you see your product in the greater market, and how will you implement it?",
"q_zh":"你們的產品在更大的市場中定位在哪裡？打算如何落實？",
"type":"impact",
"tier":"A",
"pages":[
"entrepreneurship",
"geospatial-analysis"
],
"seat":"biz",
"backup":"ihp",
"kw_en":[
"Taiwan small farms",
"distributors and pilots",
"tomato first"
],
"kw_zh":[
"台灣小農",
"經銷商與試點",
"先做番茄"
],
"a_en":"Our first market is Taiwan's small farms: 99.2% are under 2 hectares and the average is about one hectare. We would sell through agricultural distributors and run pilots with cooperatives, research farms and extension offices, starting with tomato. After Taiwan the order is the Philippines, Thailand, the US and the EU. The honest limit is that we have lab results only, so the pilot planned from October 2027 has to prove it in a field first.",
"a_zh":"我們第一個市場是台灣的小農：99.2% 的農場不到 2 公頃，平均約 1 公頃。我們會透過農業經銷商銷售，並與合作社、研究農場和改良場做試點，第一個作物是番茄。台灣之後依序是菲律賓、泰國、美國和歐盟。老實說，我們目前只有實驗室結果，所以從 2027 年 10 月開始的試點必須先在田間證明。",
"trap_en":"Answering with the global 570 million farms. That is the TAM, not where you start.",
"trap_zh":"拿全球 5.7 億個農場回答。那是 TAM，不是你們的起點。",
"basis":"like GEMS-TAIWAN 2025: where in the greater market?",
"dom":"entrepreneurship",
"id":"q177"
},
{
"q_en":"Have you identified funding sources or investors who could de-risk the technology enough to bring it to market?",
"q_zh":"你們是否找到能協助降低技術風險、把產品推向市場的資金來源或投資人？",
"type":"impact",
"tier":"A",
"pages":[
"entrepreneurship"
],
"seat":"biz",
"backup":"ihp",
"kw_en":[
"no investor committed",
"staged funding types",
"evidence de-risks"
],
"kw_zh":[
"尚無投資人承諾",
"分階段資金類型",
"證據降低風險"
],
"a_en":"Not yet: no investor has committed, and our wiki names types of funding, not signed backers. Early on, university innovation grants and a small biotech sponsor; then a local government subsidy; for the first pilot, agricultural biotech investors, climate-tech funds and accelerators. What de-risks it for them is field trial data, a clear regulatory pathway and containment proof. In our growth plan, funding the US$196,000 low point returns 2.3 times by Year 5.",
"a_zh":"還沒有：目前沒有任何投資人承諾，維基列的是資金類型，不是已簽約的支持者。早期是大學創新補助和小型生技企業贊助，接著是地方政府補助，首次試點則是農業生技投資人、氣候科技基金和加速器。能降低他們風險的是田間試驗資料、明確的法規路徑與密閉性證明。依成長計畫，資助 19.6 萬美元的最低點，到第 5 年可拿回 2.3 倍。",
"trap_en":"Implying named investors or letters of interest exist. The wiki records none.",
"trap_zh":"暗示已有具名投資人或意向書。維基沒有任何記錄。",
"basis":"like GEMS-TAIWAN 2025: investors to de-risk",
"dom":"entrepreneurship",
"id":"q178"
},
{
"q_en":"How would you improve the project if you were given funding?",
"q_zh":"如果給你們資金，你們會如何改進這個專案？",
"type":"impact",
"tier":"A",
"pages":[
"entrepreneurship"
],
"seat":"biz",
"backup":"hw",
"kw_en":[
"containment proof",
"tomato field pilot",
"cartridge redesign"
],
"kw_zh":[
"密閉性證明",
"番茄田間試點",
"補充匣改良"
],
"a_en":"First, containment proof: escape-frequency and membrane-integrity tests, verified by a recognized institute such as TARI, so regulators can answer us. Second, a tomato field pilot of 20 to 50 devices from October 2027 to June 2028, because our plant results are in Arabidopsis only. Third, the cartridge: connect it to irrigation and keep the culture viable for six months. Our funding table asks about US$30,860 for local pilot-scale and compliance work.",
"a_zh":"第一，密閉性證明：做逃逸頻率與膜完整性測試，請 TARI 這類認可機構驗證，讓主管機關能給我們答覆。第二，在 2027 年 10 月到 2028 年 6 月，用 20 到 50 台裝置做番茄田間試點，因為目前植物結果只在阿拉伯芥。第三，改良補充匣：接上灌溉系統，並讓菌液可存活六個月。資金表中在地試點與法遵準備約需 30 860 美元。",
"trap_en":"Listing every future idea. Rank three: containment, field pilot, cartridge.",
"trap_zh":"把所有未來點子都列出來。只排出三項：密閉性、田間試點、補充匣。",
"basis":"like GEMS-TAIWAN 2025: improve if given funding",
"dom":"entrepreneurship",
"id":"q179"
},
{
"q_en":"May I ask about the cost?",
"q_zh":"請問成本是多少？",
"type":"fact",
"tier":"A",
"pages":[
"entrepreneurship"
],
"seat":"biz",
"backup":"hw",
"kw_en":[
"US$5550 first year",
"US$90 refills",
"planning estimate"
],
"kw_zh":[
"第一年 5550 美元",
"每年 90 美元補充匣",
"規劃估算"
],
"a_en":"For a one-hectare farm, about US$5,550 in Year 1, which is NT$175,400: two bioreactors, three moisture sensors, one cartridge, plus freight, set-up and warranty. After that, about US$90 a year for the refill cartridge. That price is twice our own cost of about US$2,775. These are planning estimates, not quotes, and they rest on a dose assumption that no crop has tested yet.",
"a_zh":"一公頃的農場第一年約 5,550 美元，也就是 NT$175,400：包含兩台生物反應器、三個濕度感測器、一個補充匣，加上運費、安裝與保固。之後每年補充匣約 90 美元。這個價格是我們成本約 2,775 美元的兩倍。這些是規劃估算，不是報價，而且建立在一個還沒有任何作物測試過的劑量假設上。",
"trap_en":"Quoting only the US$2280 bioreactor and forgetting the sensors, cartridge and set-up.",
"trap_zh":"只講 2280 美元的反應器，漏掉感測器、補充匣與安裝。",
"basis":"like GEMS-TAIWAN 2024: may I ask about the cost?",
"dom":"entrepreneurship",
"id":"q180"
},
{
"q_en":"How could you scale this?",
"q_zh":"你們要怎麼擴大規模？",
"type":"impact",
"tier":"A",
"pages":[
"biomanufacturing",
"entrepreneurship",
"model"
],
"seat":"biz",
"backup":"hw",
"kw_en":[
"scale out not up",
"support systems bind",
"20 to 120 hectares"
],
"kw_zh":[
"複製擴產而非放大",
"支援系統先卡住",
"20 到 120 公頃"
],
"a_en":"We scale out: we replicate the same one-litre-class module, because that keeps wall shear, flux and fouling margin unchanged. Our table works one module up to eight, and the membrane is the last limit; oxygen transfer, energy, medium supply and pumping bind first. Commercially, the plan grows from 20 paying hectares in Year 1 to 120 in Year 5. Our Math Model says a 100-hectare association would need a 41-fold scale-up, which we have not shown.",
"a_zh":"我們用複製擴產：複製同一個模組，因為這樣壁面剪切、通量與堵塞餘裕都不變。我們把一個模組算到八個，薄膜是最後才受限的，先卡住的是氧氣傳輸、能源、培養基供應和泵送。商業上，計畫從第 1 年的 20 付費公頃成長到第 5 年的 120 公頃。數學模型說 100 公頃的農會需要放大 41 倍，這我們還沒有證明。",
"trap_en":"Saying 'make the vessel bigger'. We chose scale-out, not scale-up.",
"trap_zh":"回答「把容器做大」。我們選的是複製擴產，不是放大。",
"basis":"like GEMS-TAIWAN 2024: how could you scale this?",
"dom":"entrepreneurship",
"id":"q181"
},
{
"q_en":"Why a social enterprise and not a conventional business, and what drove that choice?",
"q_zh":"為什麼是社會企業而不是一般企業？是什麼促成這個選擇？",
"type":"design",
"tier":"A",
"pages":[
"entrepreneurship"
],
"seat":"biz",
"backup":"ihp",
"kw_en":[
"revenue funds mission",
"no industrial farms first",
"fixed 2x price"
],
"kw_zh":[
"收入支持使命",
"先不做大農場",
"固定 2 倍價格"
],
"a_en":"A social enterprise uses commercial revenue to fund a social mission, unlike an NGO. Our users are small farmers who struggle to afford technology, so for four years we chose not to target industrial farms, which would reach break-even faster. Price is fixed at twice cost for everyone, there is a free 4-hectare pilot, and profit funds subsidies once cash turns positive in Year 4. The cost is lower profit and a deeper cash low of about US$196,000.",
"a_zh":"社會企業用商業收入支持社會使命，這和靠捐款的 NGO 不同。我們的使用者是負擔不起新科技的小農，所以前四年我們選擇不鎖定能更快損益兩平的大型農場。價格對所有人固定為成本的兩倍，有 4 公頃免費試點，第 4 年現金轉正後再用利潤做補貼。代價是利潤較低、現金最低點更深，約 19.6 萬美元。",
"trap_en":"Saying 'we are a non-profit'. We earn revenue and return money to investors.",
"trap_zh":"說「我們是非營利」。我們有收入，也要回報投資人。",
"basis":"like Timmy's website: why a social enterprise",
"dom":"entrepreneurship",
"id":"q182"
},
{
"q_en":"How big is your market, and how did you work that out?",
"q_zh":"你們的市場有多大？是怎麼算出來的？",
"type":"fact",
"tier":"A",
"pages":[
"entrepreneurship"
],
"seat":"biz",
"backup":"ihp",
"kw_en":[
"TAM 570 M farms",
"SAM 399 M farms",
"SOM hard to quantify"
],
"kw_zh":[
"TAM 5.7 億農場",
"SAM 3.99 億農場",
"SOM 難以量化"
],
"a_en":"Our total addressable market is about 570 million farms worldwide. The serviceable part is 399 million farms, the 70% of farmers who report being hit by climate stress in a Bayer survey. For the obtainable share, our page says it is hard to quantify. The honest limit is that our actual plan models Taiwan only: 226 paying hectares to break even.",
"a_zh":"我們的總可觸及市場約為全球 5.7 億個農場。可服務的部分是 3.99 億個，也就是 Bayer 調查中 70% 回報受氣候壓力影響的農民。可獲得的份額，我們的頁面說難以量化。老實說，實際計畫只模擬台灣：需要 226 付費公頃才損益兩平。",
"trap_en":"Treating the 70% survey share as a measured market. It is a share of farmers.",
"trap_zh":"把 70% 的調查比例當成實測市場。那只是農民的比例。",
"basis":"like ICJFLS 2025: unmet market needs",
"dom":"entrepreneurship",
"id":"q183"
},
{
"q_en":"How did you validate your business model?",
"q_zh":"你們如何驗證商業模式？",
"type":"validate",
"tier":"A",
"pages":[
"entrepreneurship",
"human-practices"
],
"seat":"ihp",
"backup":"biz",
"kw_en":[
"12 deployment talks",
"plan changed",
"no sales yet"
],
"kw_zh":[
"12 場部署訪談",
"計畫因此修改",
"尚無銷售"
],
"a_en":"We tested it against people, not sales. Our deployment pipeline had 12 conversations from February to October with professors, CH Biotech, Agriweather, a research station director and the World Vegetable Center. They changed the plan: we dropped price competition with chemicals, added missing factory, labor and waste costs, and narrowed to tomato. The limit is that we have no sales, no signed purchase intent and no field data yet.",
"a_zh":"我們是用訪談驗證，不是用銷售。部署管線從二月到十月共有 12 場對話，對象包括教授、正瀚生技、阿龜微氣候、改良場主任與世界蔬菜中心。他們改變了計畫：我們放棄和化學肥料比價、補進遺漏的工廠、人力與廢棄物成本，並聚焦番茄。限制是我們還沒有銷售、沒有簽署的購買意向，也沒有田間資料。",
"trap_en":"Calling interviews 'validation of demand'. Advice is not willingness to pay.",
"trap_zh":"把訪談說成「需求已驗證」。建議不等於付費意願。",
"basis":"like KU Leuven 2025: how did you validate your business model?",
"dom":"entrepreneurship",
"id":"q184"
},
{
"q_en":"What is your cost advantage over existing products?",
"q_zh":"你們相較現有產品的成本優勢是什麼？",
"type":"compare",
"tier":"A",
"pages":[
"entrepreneurship"
],
"seat":"biz",
"backup":"ihp",
"kw_en":[
"two functions one package",
"NT$80-100k each",
"cheaper after Year 1"
],
"kw_zh":[
"兩種功能一個套組",
"各 8-10 萬台幣",
"第一年後更便宜"
],
"a_en":"Our advantage is two functions in one package, not a lower total price. The wiki gives competitor products at about NT$80,000 to 100,000 for either sensing or protectant production alone, while our first-year package for one hectare is about NT$175,400, then only about US$90 a year. So we land near the price of buying both separately, and cheaper in later years. We have not compared against a farmer's current chemical spending.",
"a_zh":"我們的優勢是一個套組有兩種功能，不是總價比較低。維基列出競品單獨感測或單獨生產保護劑約 NT$80,000 到 100,000，而我們一公頃第一年套組約 NT$175,400，之後每年只要約 90 美元。所以我們接近分開買兩樣的價格，後續年份則更便宜。我們還沒有和農民目前的化學藥劑支出做比較。",
"trap_en":"Claiming 'cheaper than competitors' without saying it is about the price of two products.",
"trap_zh":"說「比競品便宜」，卻沒說明只是接近買兩樣的價格。",
"basis":"like ICJFLS 2025: what is your cost advantage?",
"dom":"entrepreneurship",
"id":"q185"
},
{
"q_en":"Why do small farms matter for your business, and what do the numbers say?",
"q_zh":"為什麼小農場對你們的事業很重要？數字怎麼說？",
"type":"fact",
"tier":"A",
"pages":[
"geospatial-analysis",
"entrepreneurship"
],
"seat":"biz",
"backup":"dry",
"kw_en":[
"99.2% under 2 ha",
"average about 1 ha",
"farmer age 63.5"
],
"kw_zh":[
"99.2% 不到 2 公頃",
"平均約 1 公頃",
"農民平均 63.5 歲"
],
"a_en":"In Taiwan, 99.2% of farms are under 2 hectares, they manage 85.3% of the farmland, and the average farm is about one hectare. So we model one hectare as the reference farm and price per hectare. The average farmer is 63.5 years old, so walking the field is getting harder, which supports automation. The limit is size: Taiwan's small market is why we plan to expand abroad after validating here.",
"a_zh":"台灣 99.2% 的農場不到 2 公頃，管理 85.3% 的農地，平均農場約 1 公頃。所以我們以 1 公頃作為參考農場，並按每公頃定價。農民平均 63.5 歲，下田巡視越來越困難，這支持自動化。限制在規模：台灣市場小，所以我們在這裡驗證後計畫擴張到海外。",
"trap_en":"Quoting 99.2% as the share of farmland. It is the share of farms; they hold 85.3% of the land.",
"trap_zh":"把 99.2% 說成農地比例。那是農場數的比例，農地是 85.3%。",
"basis":"like ICJFLS 2025: unmet market needs",
"dom":"entrepreneurship",
"id":"q186"
},
{
"q_en":"Why did you set the price at twice your cost, the same for every farm?",
"q_zh":"為什麼把價格定為成本的兩倍，而且每個農場都一樣？",
"type":"design",
"tier":"A",
"pages":[
"entrepreneurship"
],
"seat":"biz",
"backup":"ihp",
"kw_en":[
"transparent for farmers",
"no extra for small farms",
"pays fixed costs"
],
"kw_zh":[
"對農民透明",
"小農不多付",
"支付固定成本"
],
"a_en":"Farmers can see exactly what they pay for, and no farm pays more for being small. The markup covers our fixed costs of about US$627,000, and it gives about US$2,800 of profit per hectare, so break-even is about 226 hectares. The trade-off is that a one-hectare farm pays about US$5,550 in Year 1, and the wiki says a farmer must gain about US$1,900 a year to pay back in three years.",
"a_zh":"農民可以清楚看見付的錢買了什麼，小農也不會因為規模小而多付。這個加成要支付我們約 62.7 萬美元的固定成本，每公頃約有 2,800 美元利潤，所以損益兩平約 226 公頃。取捨是一公頃的農場第一年要付約 5,550 美元，而維基說農民每年需獲益約 1,900 美元才能在三年內回本。",
"trap_en":"Saying the price is 'cheap'. It is transparent, and the farmer payback is still unproven.",
"trap_zh":"說價格「很便宜」。它是透明的，但農民的回本仍未證實。",
"basis":"design-check on pricing",
"dom":"entrepreneurship",
"id":"q187"
},
{
"q_en":"Walk me through how you calculated your break-even point.",
"q_zh":"請說明你們的損益兩平是怎麼算的。",
"type":"validate",
"tier":"A",
"pages":[
"entrepreneurship"
],
"seat":"biz",
"backup":"dry",
"kw_en":[
"fixed cost / contribution",
"627 000 / 2775",
"226 hectares"
],
"kw_zh":[
"固定成本除以貢獻",
"627 000 / 2775",
"226 公頃"
],
"a_en":"We divide fixed costs by contribution per hectare: about US$627,000 over Years 0 to 4, divided by US$2,775, which is roughly 226 hectares, or about 57 one-hectare farms a year. Contribution is the US$5,550 price minus our US$2,775 cost. The page says the figure leaves out renewal profit and the cost of the free pilot. And it assumes the hardware and dose behind our US$2,280 bioreactor price, which no crop has tested.",
"a_zh":"我們用固定成本除以每公頃貢獻：第 0 到 4 年約 62.7 萬美元，除以 2,775 美元，約 226 公頃，也就是每年約 57 個一公頃農場。貢獻是 5,550 美元售價減去 2,775 美元成本。頁面說這個數字沒有計入續購利潤和免費試點的成本。它也假設了 2,280 美元反應器背後的硬體與劑量，而這還沒有任何作物測試過。",
"trap_en":"Calling 226 'cautious' on all counts. It leaves out both renewal profit and pilot cost.",
"trap_zh":"把 226 說成全面保守。它同時漏掉了續購利潤與試點成本。",
"basis":"like KU Leuven 2025: business model validation",
"dom":"entrepreneurship",
"id":"q188"
},
{
"q_en":"How do you know farmers will actually pay for this?",
"q_zh":"你們怎麼知道農民真的願意付錢？",
"type":"validate",
"tier":"A",
"pages":[
"human-practices",
"entrepreneurship"
],
"seat":"ihp",
"backup":"biz",
"kw_en":[
"signals not measurement",
"affordable accessible practical",
"no price survey"
],
"kw_zh":[
"訊號而非量測",
"負擔得起、容易取得、實用",
"沒有價格調查"
],
"a_en":"We have signals, not a measurement. Over 30 smallholder farmers at the Taipei Expo said they accept technology if it is affordable, accessible and practical, and officials at Smart Agriweek said they would subsidize products like ours. We have not run a price survey or collected signed purchase intent. Our plan sells 20 paying hectares in Year 1, before field results exist, so the pilot is where we test whether farmers pay.",
"a_zh":"我們有的是訊號，不是量測。台北博覽會上超過 30 位小農說，只要負擔得起、容易取得又實用，他們不排斥科技；Smart Agriweek 的官員也說願意補助類似的產品。我們沒有做價格調查，也沒有簽署的購買意向。計畫在第 1 年、田間結果出來前就賣出 20 付費公頃，所以試點才是檢驗農民是否付錢的地方。",
"trap_en":"Claiming farmers 'want to buy'. They said they are open if it is affordable.",
"trap_zh":"說農民「想要買」。他們說的是如果負擔得起就不排斥。",
"basis":"like Science-Tokyo 2025: support farmer adoption",
"dom":"entrepreneurship",
"id":"q189"
},
{
"q_en":"What happens to the business if you sell much less than planned?",
"q_zh":"如果銷售遠低於計畫，這個事業會怎樣？",
"type":"gap",
"tier":"A",
"pages":[
"entrepreneurship"
],
"seat":"biz",
"backup":"dry",
"kw_en":[
"70% of plan",
"break-even Year 6",
"IRR about -7%"
],
"kw_zh":[
"計畫的 70%",
"第 6 年損益兩平",
"IRR 約 -7%"
],
"a_en":"We modeled a conservative case at 70% of planned hectares. Break-even slips from Year 4 to Year 6, funding needed rises from US$196,000 to US$236,000, and investors get only 0.7 times their money back by Year 5, an IRR of about minus 7%. So the plan is sensitive to sales. That is why we spend our own profits on farmer subsidies only after cash turns positive.",
"a_zh":"我們模擬了只達計畫公頃 70% 的保守情境。損益兩平從第 4 年延到第 6 年，所需資金從 19.6 萬美元增加到 23.6 萬美元，投資人到第 5 年只拿回 0.7 倍，IRR 約 -7%。所以這個計畫對銷量很敏感。這也是為什麼我們要等現金轉正後，才用自己的利潤補貼農民。",
"trap_en":"Hiding the downside case. Judges respect a team that shows it.",
"trap_zh":"隱藏不利情境。評審會尊重有展示它的團隊。",
"basis":"like Tsinglan 2025: long-term funding challenges",
"dom":"entrepreneurship",
"id":"q190"
},
{
"q_en":"Can ReLEAF be used on organic farms?",
"q_zh":"ReLEAF 可以用在有機農場嗎？",
"type":"boundary",
"tier":"A",
"pages":[
"entrepreneurship",
"laws-and-regulations"
],
"seat":"biz",
"backup":"ihp",
"kw_en":[
"No",
"GMO products excluded",
"conventional smallholders"
],
"kw_zh":[
"不可以",
"排除基改產品",
"慣行小農"
],
"a_en":"No, and we say so plainly. Taiwan's Organic Agriculture Promotion Act excludes genetically modified organisms and their products, and US and EU rules are similar, so a sealed membrane does not make the output organic. We target conventional and sustainable smallholders and will make no organic claim without written approval from authorities. Only about 3.47% of Taiwan's farmland is organic. Note that our largest farmer interview round, over 30 farmers, was with organic farmers.",
"a_zh":"不可以，我們直接說明。台灣有機農業促進法排除基改生物及其產品，美國和歐盟規範類似，所以即使有密閉薄膜，產物也不能算有機。我們的對象是慣行與永續的小農，沒有主管機關的書面核准，我們不會做任何有機宣稱。台灣只有約 3.47% 的農地是有機。要注意的是，我們最大的一輪農民訪談，超過 30 位，訪問的是有機農民。",
"trap_en":"Saying 'cell-free means organic is fine'. The production method itself is restricted.",
"trap_zh":"說「無細胞所以有機也行」。生產方式本身就受限。",
"basis":"boundary on organic farming; Biomanufacturing says 'built around organic', see gaps",
"dom":"entrepreneurship",
"id":"q191"
},
{
"q_en":"Why did you pick tomato as your target crop?",
"q_zh":"為什麼選番茄作為目標作物？",
"type":"design",
"tier":"A",
"pages":[
"geospatial-analysis",
"human-practices",
"entrepreneurship"
],
"seat":"biz",
"backup":"plant",
"kw_en":[
"valuable and heat-sensitive",
"rice overproduced",
"no tomato data yet"
],
"kw_zh":[
"高價值又怕熱",
"稻米生產過剩",
"尚無番茄資料"
],
"a_en":"Director Wu advised a commercially valuable crop that suffers from stress, and said rice is overproduced in Taiwan. Tomato fruit set falls above about 32 degrees by day and 20 at night, Taiwan grows about 3,628 hectares, and the counties that grow 85% of it warmed 1.9 to 2.0 degrees in winter nights. The honest limit: our plant results are Arabidopsis only, and no tomato dose has been tested.",
"a_zh":"吳主任建議選一個有商業價值、又受逆境之苦的作物，並說台灣稻米生產過剩。番茄在日溫超過約 32 度、夜溫超過 20 度時結果率下降，台灣種植約 3,628 公頃，而生產 85% 番茄的縣市，冬季夜溫升高 1.9 到 2.0 度。老實說，我們的植物結果只在阿拉伯芥，沒有測試過任何番茄劑量。",
"trap_en":"Saying our experiments were on tomato. They were on Arabidopsis.",
"trap_zh":"說我們的實驗是用番茄做的。實際上是阿拉伯芥。",
"basis":"like NUS_Singapore 2021: validate before farmer use",
"dom":"entrepreneurship",
"id":"q192"
},
{
"q_en":"Why not just sell the protectant in a bottle, or use an irrigation controller like Agriweather's?",
"q_zh":"為什麼不直接賣瓶裝保護劑，或用像阿龜微氣候那樣的灌溉控制系統？",
"type":"compare",
"tier":"A",
"pages":[
"entrepreneurship",
"human-practices"
],
"seat":"biz",
"backup":"hw",
"kw_en":[
"no shipping or cold chain",
"made when needed",
"irrigation link planned"
],
"kw_zh":[
"無運輸與冷鏈",
"需要時才生產",
"規劃接灌溉"
],
"a_en":"A bottle needs shipping, storage and a farmer who knows when and how much to spray. Our unit makes the protectant on site when sensors and the forecast call for it. But Agriweather's founder, Mr. Lu, told us a system tied into irrigation does everything for the farmer and is more convenient, because ours leaves the farmer to collect and apply the protectant by hand or by drone. So we are planning an irrigation connection, which is not built yet.",
"a_zh":"瓶裝需要運輸、儲存，也需要農民知道何時、噴多少。我們的裝置在感測器和預報需要時，才在現場生產保護劑。但阿龜微氣候創辦人盧先生告訴我們，連接灌溉的系統會替農民做完一切，比較方便，因為我們的系統要農民自己去取、用手或無人機施用。所以我們正在規劃接上灌溉，但目前還沒有做出來。",
"trap_en":"Dismissing the competitor. Mr. Lu's point is a real weakness we admit.",
"trap_zh":"否定競品。盧先生指出的是我們承認的真實弱點。",
"basis":"alternatives probe: why not X (Mr. Lu, Agriweather)",
"dom":"entrepreneurship",
"id":"q193"
},
{
"q_en":"How do you compete with cheap chemical pesticides and fertilizers?",
"q_zh":"你們如何和便宜的化學農藥與肥料競爭？",
"type":"compare",
"tier":"A",
"pages":[
"entrepreneurship"
],
"seat":"biz",
"backup":"plant",
"kw_en":[
"cannot win on price",
"fewer sprays less runoff",
"pilot targets"
],
"kw_zh":[
"價格贏不了",
"少噴藥少流失",
"試點目標"
],
"a_en":"We cannot beat them on price. Professor Chen told us this, and we removed price competition with chemical fertilizers from our plan. Our case is different: fewer spray days, less chemical runoff, and protection that arrives before stress. Our pilot targets are 10 to 15% higher yield and 20 to 30% less spraying against each farm's own previous season. We have not measured either yet.",
"a_zh":"我們價格上贏不了。陳教授這樣告訴我們，所以我們從計畫中移除了與化學肥料比價。我們的主張不一樣：少噴藥天數、減少化學物流失，以及在壓力來臨前就有保護。試點目標是相較每個農場自己的上一季，產量增加 10 到 15%、噴藥減少 20 到 30%。這兩項我們都還沒有量測。",
"trap_en":"Claiming we are cheaper than chemicals. The wiki says we are not.",
"trap_zh":"宣稱比化學藥劑便宜。維基說我們不是。",
"basis":"like TSINGHUA 2025: customer acquisition and cost",
"dom":"entrepreneurship",
"id":"q194"
},
{
"q_en":"Your Math Model says individual ownership is out of reach, yet your business plan sells a package to a one-hectare farm. Which is it?",
"q_zh":"你們的數學模型說個別擁有是做不到的，但商業計畫卻把套組賣給一公頃的農場。到底是哪一個？",
"type":"gap",
"tier":"A",
"pages":[
"model",
"geospatial-analysis",
"entrepreneurship"
],
"seat":"dry",
"backup":"biz",
"kw_en":[
"pages answer differently",
"shared by association",
"plan not rebuilt"
],
"kw_zh":[
"兩頁答案不同",
"農會共享",
"計畫尚未重算"
],
"a_en":"Our pages answer this differently, and we should say so. The financial model prices a one-hectare farm buying its own package for about US$5,550. Our Math Model and Geospatial page conclude that at today's spec one fleet serves 2.5 hectares, so individual ownership is out of reach and a farmers' association must share it. The business plan already allows group purchase, rental and subsidy, but its base case has not been rebuilt on shared ownership.",
"a_zh":"我們的頁面對這題的答案不同，我們應該說清楚。財務模型把約 5,550 美元的套組賣給一公頃的農場。數學模型與地理空間頁面則結論是，依目前規格，一組設備只服務 2.5 公頃，個別擁有做不到，必須由農會共享。商業計畫已允許團購、租賃與補助，但基本情境還沒有依共享所有權重算。",
"trap_en":"Picking one answer silently. Name the disagreement and the fallback.",
"trap_zh":"默默選一個答案。要指出分歧與備案。",
"basis":"like KU Leuven 2025: business model coherence",
"dom":"entrepreneurship",
"id":"q195"
},
{
"q_en":"How does your Math Model change your cost and dose assumptions?",
"q_zh":"數學模型如何改變你們的成本與劑量假設？",
"type":"integrate",
"tier":"A",
"pages":[
"entrepreneurship",
"model"
],
"seat":"dry",
"backup":"biz",
"kw_en":[
"203 U vs 37.6 kU",
"185 times larger",
"US$3800 vs US$2280"
],
"kw_zh":[
"203 U 對 37.6 kU",
"大 185 倍",
"3800 對 2280 美元"
],
"a_en":"They disagree, and we show both. The business plan assumes 203 units of enzyme per hectare per spray, two one-litre bioreactors and US$2,280 of hardware. The Math Model scales our plate result to 37.6 kilo-units, 185 times more, about four twenty-litre units and US$3,800 of capital per hectare. Neither dose is validated in a field. The tomato trials decide which is right, and the break-even area would move with the answer.",
"a_zh":"它們不一致，我們兩個都呈現。商業計畫假設每公頃每次噴灑 203 單位酵素、兩台 1 公升反應器與 2,280 美元硬體。數學模型把盤式實驗結果放大到 37.6 千單位，大了 185 倍，約需四台 20 公升單位，每公頃資本 3,800 美元。兩種劑量都沒在田間驗證。番茄試驗會決定哪個對，損益兩平的面積也會隨之改變。",
"trap_en":"Quoting only the cheaper figure. The 185-times gap is on our own page.",
"trap_zh":"只講較便宜的數字。185 倍的差距就寫在我們自己的頁面上。",
"basis":"model-to-business integration",
"dom":"entrepreneurship",
"id":"q196"
},
{
"q_en":"How did your conversations with experts change your business plan?",
"q_zh":"和專家的對話如何改變你們的商業計畫？",
"type":"integrate",
"tier":"A",
"pages":[
"human-practices",
"entrepreneurship"
],
"seat":"ihp",
"backup":"biz",
"kw_en":[
"printer and ink",
"missing costs added",
"Southeast Asia and France"
],
"kw_zh":[
"印表機與墨水",
"補上遺漏成本",
"東南亞與法國"
],
"a_en":"Several conversations changed it. Professor Chen gave us the printer-and-ink model and told us to drop price competition with chemicals. Director Wu showed we had missed factory, labor, culture and waste costs, and moved us from rice to tomato. Mr. Lu pushed us toward an irrigation connection and a staged adoption plan. BIO-Asia led us to Southeast Asia, and Mr. Quillere to France first for Europe. These are advice, not contracts.",
"a_zh":"好幾場對話改變了計畫。陳教授給了我們印表機與墨水的模式，並要我們放棄和化學藥劑比價。吳主任指出我們漏掉工廠、人力、菌液培養與廢棄物成本，並讓我們從稻米改為番茄。盧先生促使我們考慮接灌溉和分階段的採用計畫。BIO-Asia 讓我們看向東南亞，Quillere 先生讓我們把法國當作進入歐洲的第一站。這些是建議，不是合約。",
"trap_en":"Listing meetings without saying what changed. Always pair each person with one change.",
"trap_zh":"只列出會議卻沒說改了什麼。每位專家都要配一項改變。",
"basis":"integration probe: HP to business plan",
"dom":"entrepreneurship",
"id":"q197"
},
{
"q_en":"What if the regulator classes your product as a pesticide or a GMO release?",
"q_zh":"如果主管機關把你們的產品歸類為農藥或基改釋放呢？",
"type":"boundary",
"tier":"B",
"pages":[
"entrepreneurship",
"laws-and-regulations"
],
"seat":"biz",
"backup":"wet1",
"kw_en":[
"abiotic claims only",
"fallback model C",
"no written confirmation"
],
"kw_zh":[
"只主張非生物逆境",
"備案模式 C",
"尚無書面確認"
],
"a_en":"We planned for that. We keep claims to abiotic stress because a biopesticide route needs GLP toxicology and multi-season trials, taking several years. If on-farm use of the engineered culture is refused, our fallback is model C: central production, with only the cell-free permeate distributed. The honest limit is that no regulator has given us written confirmation in any market, so this is a plan, not an approval.",
"a_zh":"我們有預先規劃。我們把主張限制在非生物逆境，因為走生物農藥路線需要 GLP 毒理與多季試驗，要花好幾年。如果現場使用基改菌株被拒絕，備案是模式 C：集中生產，只配送無細胞滲出液。老實說，沒有任何市場的主管機關給過我們書面確認，所以這是計畫，不是核准。",
"trap_en":"Saying regulators have approved the approach. None has confirmed anything in writing.",
"trap_zh":"說主管機關已認可這個做法。沒有任何機關書面確認過。",
"basis":"regulatory boundary probe",
"dom":"entrepreneurship",
"id":"q198"
},
{
"q_en":"What does regulation cost you in time and money?",
"q_zh":"法規對你們造成多少時間與金錢成本？",
"type":"gap",
"tier":"A",
"pages":[
"entrepreneurship",
"laws-and-regulations"
],
"seat":"biz",
"backup":"dry",
"kw_en":[
"1 to 2 years",
"standard list is 1 month",
"registration cost not counted"
],
"kw_zh":[
"一至兩年",
"標準規格一個月",
"登記費用未計入"
],
"a_en":"Our time estimate is one to two years for a Taiwan fertilizer registration, mostly field efficacy trials, because protein-based protectants are not on the standard list. A product matching an existing standard takes about a month. But our financial model lists product registration as not counted, so regulatory cost is a known hole in the numbers. A biopesticide route would take several years, which is why we avoid it.",
"a_zh":"我們估計台灣肥料登記需要一到兩年，主要是田間肥效試驗，因為蛋白質保護劑不在標準名單上。符合現有標準的產品約一個月。但財務模型明確列出產品登記費用未計入，所以法規成本是數字中已知的缺口。生物農藥路線要好幾年，這就是我們避開的原因。",
"trap_en":"Giving a time but no money. Say the cost is not in our model.",
"trap_zh":"只講時間不講金額。要說明成本沒有算進模型。",
"basis":"regulatory cost as a barrier",
"dom":"entrepreneurship",
"id":"q199"
},
{
"q_en":"Which Taiwanese laws and regulators decide whether you can sell this?",
"q_zh":"哪些台灣法律與主管機關決定你們能否販售？",
"type":"fact",
"tier":"A",
"pages":[
"laws-and-regulations",
"entrepreneurship"
],
"seat":"biz",
"backup":"wet1",
"kw_en":[
"Fertilizer Management Act",
"Agriculture and Food Agency",
"APHIA for pesticides"
],
"kw_zh":[
"肥料管理法",
"農糧署",
"防檢署管農藥"
],
"a_en":"Taiwan's Ministry of Agriculture oversees both routes. The Agriculture and Food Agency registers fertilizers under the Fertilizer Management Act, and APHIA handles pesticides under the Pesticide Management Act. Taiwan's fertilizer categories include plant growth auxiliary materials, which is where we aim the cell-free output. No authority has classified our proteins yet, so that is our target category, not a decision. The bioreactor needs a separate equipment-safety assessment.",
"a_zh":"台灣農業部管轄這兩條路線。農糧署依肥料管理法登記肥料，防檢署依農藥管理法處理農藥。台灣的肥料類別包含植物生長輔助劑類，這就是我們瞄準的無細胞產物類別。目前還沒有任何機關為我們的蛋白質分類，所以這是我們的目標類別，不是決定。生物反應器另需設備安全評估。",
"trap_en":"Saying the product 'is' a fertilizer. It is a target classification.",
"trap_zh":"說產品「就是」肥料。那只是目標分類。",
"basis":"regulatory fact check",
"dom":"entrepreneurship",
"id":"q200"
},
{
"q_en":"Is your containment-based regulatory pathway confirmed in Taiwan?",
"q_zh":"你們以密閉為基礎的法規路徑在台灣確認了嗎？",
"type":"gap",
"tier":"A",
"pages":[
"entrepreneurship",
"laws-and-regulations"
],
"seat":"biz",
"backup":"wet1",
"kw_en":[
"not confirmed",
"pages differ",
"will not claim certified"
],
"kw_zh":[
"尚未確認",
"兩頁說法不同",
"不宣稱已認證"
],
"a_en":"Not confirmed. Our Entrepreneurship page describes a pathway where a sealed device is classed as contained-use equipment, and our plan seeks written answers by October 2027. But our Laws page says we found no general Taiwan contained-use framework that clearly covers this case, and no regulator has confirmed anything in writing in any of the eight markets. We treat it as unresolved and will not call ourselves certified.",
"a_zh":"尚未確認。創業頁面描述了把密閉裝置視為密閉使用設備的路徑，我們的計畫是在 2027 年 10 月前取得書面答覆。但法規頁面說我們沒有找到明確涵蓋這種情況的台灣一般密閉使用框架，八個市場也都沒有主管機關書面確認。我們視它為未解決，也不會宣稱已認證。",
"trap_en":"Saying 'APHIA says it is contained use, so we are fine'. The Laws page says it is unresolved.",
"trap_zh":"說「防檢署說這是密閉使用，所以沒問題」。法規頁說這仍未解決。",
"basis":"inconsistency between Entrepreneurship and Laws pages",
"dom":"entrepreneurship",
"id":"q201"
},
{
"q_en":"Why the Philippines after Taiwan, and not the United States or Europe?",
"q_zh":"為什麼台灣之後是菲律賓，而不是美國或歐洲？",
"type":"design",
"tier":"B",
"pages":[
"laws-and-regulations",
"entrepreneurship"
],
"seat":"biz",
"backup":"ihp",
"kw_en":[
"scored 8 markets",
"US entry ease 1 of 5",
"Philippines has named regulator"
],
"kw_zh":[
"評分八個市場",
"美國進入難易度 1/5",
"菲律賓有明確主管機關"
],
"a_en":"We scored eight markets on regulation, farmland, farm structure, entry ease, technology acceptance and deployment fit. The US scored highest at 32, but entry ease was 1 out of 5 because of distance and federal plus state rules. The Philippines scored 25, has a named regulator, FPA, and is 1,150 kilometres away, so it goes first abroad, then Thailand. These are our own scores, not official ratings.",
"a_zh":"我們針對法規、農地、農場結構、進入難易度、科技接受度與部署適配度，為八個市場打分數。美國最高為 32 分，但因距離與聯邦與各州雙重規範，進入難易度只有 5 分之 1。菲律賓得 25 分，有明確的主管機關 FPA，距離 1,150 公里，所以是第一個海外市場，接著是泰國。這些是我們自己的評分，不是官方評等。",
"trap_en":"Saying 'because the Philippines has loose laws'. The page says it has a clear regulator to consult first.",
"trap_zh":"說「因為菲律賓法規鬆」。頁面說的是它有明確的主管機關可先諮詢。",
"basis":"like ICT-MUMBAI 2025: go-to-market strategy",
"dom":"entrepreneurship",
"id":"q202"
},
{
"q_en":"What are your milestones from here to commercialization?",
"q_zh":"從現在到商業化，你們的里程碑是什麼？",
"type":"impact",
"tier":"B",
"pages":[
"entrepreneurship-roadmap",
"entrepreneurship"
],
"seat":"biz",
"backup":"ihp",
"kw_en":[
"Phase 1 done",
"Taiwan pilot Oct 2027",
"6 of 19 done"
],
"kw_zh":[
"第 1 階段完成",
"2027 年 10 月台灣試點",
"19 項完成 6 項"
],
"a_en":"Our Gantt chart has five phases from December 2025 to April 2032. Phase 1, concept validation, is complete at the Jamboree. Next are soil testing, safety and regulatory consultations to October 2027, then Taiwan pilot field trials with smallholders from October 2027 to June 2028, then regional expansion. Six of nineteen activities are done. The limit: later dates depend on regulator answers, and our text and chart disagree on some expansion dates.",
"a_zh":"我們的甘特圖從 2025 年 12 月到 2032 年 4 月共五個階段。第 1 階段概念驗證在大會時完成。接著是到 2027 年 10 月的土壤測試、安全與法規諮詢，然後是 2027 年 10 月到 2028 年 6 月與小農的台灣試點田間試驗，再來是區域擴張。19 項活動完成 6 項。限制是後面的日期取決於主管機關答覆，而且文字與圖表在某些擴張日期上不一致。",
"trap_en":"Giving only the vision. Give the next two dated steps.",
"trap_zh":"只講願景。要給出接下來兩個有日期的步驟。",
"basis":"like BWYA 2025: when commercially available",
"dom":"entrepreneurship",
"id":"q203"
},
{
"q_en":"Small farmers cannot afford US$5,550 upfront. How will they pay?",
"q_zh":"小農付不起一開始的 5,550 美元，他們要怎麼付？",
"type":"design",
"tier":"A",
"pages":[
"entrepreneurship",
"biomanufacturing"
],
"seat":"biz",
"backup":"ihp",
"kw_en":[
"group purchase",
"rent or subscribe",
"partner subsidies"
],
"kw_zh":[
"團體共買",
"租賃或訂閱",
"夥伴補助"
],
"a_en":"We offer several ways to buy. Groups of farmers can buy a bioreactor together, rent one for a trial, subscribe to cartridges, or receive partner subsidies from programs such as TARI and the government. The hardware is a low-cost reusable base with replaceable seasonal cartridges, following Professor Chen's printer-and-ink idea. The honest limit: we show no rental price yet, only that rental and per-fen service pricing are planned.",
"a_zh":"我們提供多種購買方式。農民可以團體共買一台、先租來試用、訂閱補充匣，或透過 TARI 與政府等計畫取得夥伴補助。硬體是低成本、可重複使用的基座，搭配可更換的季節性補充匣，源自陳教授印表機與墨水的構想。老實說，我們還沒有顯示租賃價格，只說明規劃了租賃與以分地計價的服務模式。",
"trap_en":"Giving only 'subsidies'. Show the range of purchase options and admit no rental price yet.",
"trap_zh":"只說「補助」。要列出各種購買方式，並承認還沒有租賃價格。",
"basis":"like Science-Tokyo 2025: support farmer adoption",
"dom":"entrepreneurship",
"id":"q204"
},
{
"q_en":"What is your relationship with CH Biotech: partner or competitor?",
"q_zh":"你們和正瀚生技是什麼關係：夥伴還是競爭者？",
"type":"integrate",
"tier":"B",
"pages":[
"laws-and-regulations",
"entrepreneurship",
"human-practices"
],
"seat":"biz",
"backup":"ihp",
"kw_en":[
"adviser",
"also sells biostimulants",
"no contract on wiki"
],
"kw_zh":[
"顧問",
"也賣生物刺激素",
"維基沒有合約"
],
"a_en":"Mostly an adviser. CH Biotech is a Taiwan biostimulant company, so it could also be a competitor, and our stakeholder grid puts it under keep completely informed. In July its regulatory researchers briefed us on authorities in Taiwan, the EU and the US, and in September Director Liu warned that we must show undeniable proof of no bacterial escape. They told us to settle regulations market by market. We have no contract or commercial agreement with them on our wiki.",
"a_zh":"主要是顧問。正瀚生技是台灣的生物刺激素公司，所以也可能是競爭者，我們的利害關係人圖把它放在「完整告知」。七月其法規研究人員向我們說明台灣、歐盟與美國的主管機關，九月劉主任提醒我們必須提出無細菌逃逸的確切證明。他們建議逐一市場先釐清法規。我們的維基上沒有和他們的合約或商業協議。",
"trap_en":"Calling CH Biotech 'our partner' as if there were a contract. It is an adviser.",
"trap_zh":"把正瀚生技說成「我們的夥伴」好像有合約。它是顧問。",
"basis":"partnership probe",
"dom":"entrepreneurship",
"id":"q205"
},
{
"q_en":"Do you plan to patent ReLEAF, or will it be open?",
"q_zh":"你們打算申請專利，還是會公開？",
"type":"boundary",
"tier":"B",
"pages":[
"entrepreneurship",
"entrepreneurship-roadmap",
"contribution"
],
"seat":"biz",
"backup":"dry",
"kw_en":[
"patents planned",
"FTO check",
"MIT and CC BY tools"
],
"kw_zh":[
"規劃專利",
"FTO 查核",
"MIT 與 CC BY 工具"
],
"a_en":"Both, for different things. Our business canvas lists planned patent applications and a freedom-to-operate check against existing patents, and Phase 0 explores protection for our optimized circuits and strains. Our Gantt marks IP on strains and circuits done, but the wiki does not state a filing. Our digital twin software is released under the MIT license and our hardware files under CC BY 4.0, so others can reuse the tools.",
"a_zh":"兩者都有，用在不同東西上。商業模式圖列出規劃中的專利申請，以及對現有專利的自由實施查核，第 0 階段也在探討保護我們優化的電路與菌株。甘特圖把菌株與電路的智慧財產標為完成，但維基沒有說明已送件。我們的數位孿生軟體以 MIT 授權釋出，硬體檔案採用 CC BY 4.0，讓其他人可重複使用這些工具。",
"trap_en":"Saying 'we filed a patent'. The wiki does not say a filing exists.",
"trap_zh":"說「我們已申請專利」。維基沒有說已有送件。",
"basis":"IP and openness probe",
"dom":"entrepreneurship",
"id":"q206"
},
{
"q_en":"What does one dose of protectant cost you to make?",
"q_zh":"製造一劑保護劑對你們的成本是多少？",
"type":"gap",
"tier":"A",
"pages":[
"biomanufacturing",
"entrepreneurship"
],
"seat":"hw",
"backup":"biz",
"kw_en":[
"no cost per dose yet",
"NT$83 028 prototype",
"analysis not done"
],
"kw_zh":[
"尚無每劑成本",
"原型 NT$83 028",
"分析未完成"
],
"a_en":"We do not have a cost per dose yet. The only cost we have measured is our hand-built prototype: NT$83,028, about US$2,800, for one unit including the bacterial kit, which is not a unit cost at volume. A techno-economic analysis would set operating costs against that to give cost per unit of protectant and a break-even yield, and we have not done it. Our planning price uses a dose assumption that no crop has tested.",
"a_zh":"我們目前還沒有每劑成本。唯一實測的成本是手工製作的原型：一台含菌株套組為 NT$83,028，約 2,800 美元，這不是量產的單位成本。技術經濟分析會把營運成本對照這個數字，算出每單位保護劑成本與損益兩平產量，而我們還沒有完成。我們的規劃價格用了一個沒有任何作物測試過的劑量假設。",
"trap_en":"Dividing the prototype price by something to invent a per-dose cost.",
"trap_zh":"把原型價格隨便除一個數字，編出每劑成本。",
"basis":"like Leiden 2023: what reduces cost?",
"dom":"entrepreneurship",
"id":"q207"
},
{
"q_en":"What is the biggest risk to your business?",
"q_zh":"你們事業最大的風險是什麼？",
"type":"impact",
"tier":"A",
"pages":[
"entrepreneurship"
],
"seat":"biz",
"backup":"hw",
"kw_en":[
"cost exceeds farmer budget",
"fallback ownership models",
"breach is high impact"
],
"kw_zh":[
"成本超出農民預算",
"備案所有權模式",
"破損影響大"
],
"a_en":"Our register rates production cost exceeding the farmer's budget as medium probability and high impact. The mitigation names a sensitivity test at 20% higher cost or 20% lower price, and fallbacks: cooperative purchase, NGO bulk buying, seasonal rental or cartridge subscription. The wiki shows our 70%-sales case instead of that exact test. On the biological side, a physical housing breach is rated low probability but high impact.",
"a_zh":"我們的風險登記表把生產成本超出農民預算評為中機率、高影響。因應措施是測試成本高 20% 或售價低 20% 的敏感度，以及備案：合作社購買、NGO 大量採購、季節性租賃或匣式訂閱。維基展示的是 70% 銷量情境，而不是這個確切的測試。生物面來說，外殼物理破損被評為低機率但高影響。",
"trap_en":"Naming only scientific risks. Lead with cost because that is the market risk.",
"trap_zh":"只講科學風險。先講成本，因為那是市場風險。",
"basis":"like Tsinglan 2025: long-term challenges",
"dom":"entrepreneurship",
"id":"q208"
},
{
"q_en":"Why should an investor believe your 24% return?",
"q_zh":"投資人為什麼要相信你們的 24% 報酬？",
"type":"validate",
"tier":"B",
"pages":[
"entrepreneurship"
],
"seat":"biz",
"backup":"dry",
"kw_en":[
"planning case",
"assumptions untested",
"NPV at 25% negative"
],
"kw_zh":[
"規劃情境",
"假設未驗證",
"25% 時 NPV 為負"
],
"a_en":"They should treat it as a planning case. The 24% rests on price at twice cost, sales rising from 20 paying hectares in Year 1 to 120 in Year 5, and a dose no crop has tested. The 20% tax is unconfirmed, and interest, inflation and product registration are not counted. At a 25% discount rate the net present value is minus US$4,000. Our own conservative case returns about minus 7%.",
"a_zh":"他們應該把它當作規劃情境。24% 建立在價格為成本兩倍、銷量從第 1 年 20 付費公頃成長到第 5 年 120 公頃，以及一個沒有作物測試過的劑量上。20% 稅率未確認，利息、通膨與產品登記也沒計入。貼現率 25% 時，淨現值為 -4,000 美元。我們自己的保守情境報酬約為 -7%。",
"trap_en":"Presenting 24% as a forecast. It is the growth plan, not the base expectation.",
"trap_zh":"把 24% 當成預測。它是成長計畫，不是基本預期。",
"basis":"financial credibility probe",
"dom":"entrepreneurship",
"id":"q209"
},
{
"q_en":"How does making culture medium from hay change your economics?",
"q_zh":"用乾草自製培養基如何改變你們的經濟模型？",
"type":"integrate",
"tier":"B",
"pages":[
"entrepreneurship",
"contribution",
"sustainability"
],
"seat":"biz",
"backup":"ihp",
"kw_en":[
"farmers make medium",
"no medium sales counted",
"needs processing"
],
"kw_zh":[
"農民自製培養基",
"未計入培養基銷售",
"需要加工"
],
"a_en":"Farmers can make the bacterial medium from hay, so they do not buy it from us, which lowers their yearly cost. In our test after 18 hours, a 1:1:2 mix of hay, okara and sugarcane gave OD600 0.720 against 0.573 for LB. Our financial base case counts no medium sales, so that revenue is left out. The limit: preparation needs processing, so it would run more realistically through cooperatives or research stations than individual farmers.",
"a_zh":"農民可以用乾草自製細菌培養基，不必向我們購買，這降低了他們的年度成本。我們測試 18 小時後，乾草、豆渣與甘蔗渣以 1:1:2 混合的 OD600 為 0.720，LB 為 0.573。財務基本情境沒有計入培養基銷售，所以這部分收入沒算進去。限制是製備需要加工，比較實際的做法是透過合作社或研究站，而不是個別農民。",
"trap_en":"Saying farmers brew medium at home easily. The contribution page says it needs processing.",
"trap_zh":"說農民在家就能輕鬆自製。貢獻頁面說需要加工。",
"basis":"like SUS-TECH 2025: cut costs",
"dom":"entrepreneurship",
"id":"q210"
},
{
"q_en":"Why did you use Arabidopsis as your model plant?",
"q_zh":"你們為什麼選阿拉伯芥當模式植物？",
"type":"design",
"tier":"A",
"pages":[
"plant",
"description"
],
"seat":"plant",
"backup":"ihp",
"kw_en":[
"standard lab model",
"three systems",
"not a crop"
],
"kw_zh":[
"標準模式植物",
"三種系統",
"不是作物"
],
"a_en":"Arabidopsis thaliana is the standard laboratory model plant, small and quick to grow, and we used the Col-0 line. NTU's Prof. Cheng gave us seeds and showed us how her group grows it. We ran it on agar, in hydroponics and in soil with the same six steps. The honest limit is that it is not a crop. We have not tested rice or tomato, so we call this a lab proof of concept.",
"a_zh":"阿拉伯芥是標準的實驗室模式植物，體型小、長得快，我們用的是 Col-0 品系。台大鄭教授給了我們種子，也教我們她實驗室怎麼種。我們在瓊脂、水耕和土壤三種系統用同一套六步驟。誠實的限制是它不是作物，我們沒有測過水稻或番茄，所以這只能算實驗室的概念驗證。",
"trap_en":"Claiming Arabidopsis proves the protectant works on rice or tomato.",
"trap_zh":"說阿拉伯芥的結果證明保護劑在水稻或番茄上也有效。",
"basis":"like IISER-Kolkata 2025: why use __ as your model organism?",
"dom":"plant",
"id":"q211"
},
{
"q_en":"Which stresses did you test, and how did you apply them?",
"q_zh":"你們測了哪些逆境？怎麼施加？",
"type":"fact",
"tier":"A",
"pages":[
"plant"
],
"seat":"plant",
"backup":"ihp",
"kw_en":[
"salt and heat",
"NaCl on day 0",
"37 °C five days"
],
"kw_zh":[
"鹽與熱",
"第 0 天施鹽",
"37 °C 五天"
],
"a_en":"Two stresses: salt and heat. For salt, NaCl went into the agar or was drenched on at a set concentration on day 0, and in soil we drenched 100, then 200, then 300 mM. For heat, seedlings sat at 37 °C for five days and then recovered for five days at 22 °C. We did not test drought or pH stress.",
"a_zh":"兩種逆境：鹽與高溫。鹽害是在第 0 天把 NaCl 混入培養基或用淋的方式給予固定濃度，土壤則依序淋 100、200、300 mM。熱害是把幼苗放在 37 °C 五天，再回到 22 °C 恢復五天。我們沒有測乾旱或 pH 逆境。",
"trap_en":"Saying drought was tested because CH Bio peptide is a drought product.",
"trap_zh":"因為 CH Bio 是抗旱產品就說有測乾旱。",
"basis":"recorded pattern: what exactly did you measure / how did you apply it",
"dom":"plant",
"id":"q212"
},
{
"q_en":"What did you measure on the plants?",
"q_zh":"你們在植物上量測什麼？",
"type":"fact",
"tier":"A",
"pages":[
"plant",
"geospatial-analysis"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"chlorophyll",
"fresh weight",
"root length"
],
"kw_zh":[
"葉綠素",
"鮮重",
"主根長度"
],
"a_en":"Three numbers. Chlorophyll from an 80% acetone extract read at 645 and 663 nm, fresh weight of the harvested seedlings, and primary root length traced by hand in ImageJ. Leaf colour, anthocyanin and bleaching were recorded by eye. We did not score germination rate or a wilting scale. Leaf area stays qualitative because leaves overlap.",
"a_zh":"三個數字。葉綠素用 80% 丙酮萃取後讀 645 與 663 nm，收成後幼苗的鮮重，以及用 ImageJ 手動描繪的主根長度。葉色、花青素與白化用肉眼記錄。我們沒有計算發芽率或萎凋分級。葉面積因為葉片重疊，只能做質性描述。",
"trap_en":"Listing germination or a wilting score, which the wiki does not report.",
"trap_zh":"把發芽率或萎凋評分說成有做，但維基上沒有。",
"basis":"recorded pattern: which readouts and why",
"dom":"plant",
"id":"q213"
},
{
"q_en":"What is each of your three protectants meant to do in the plant?",
"q_zh":"你們三種保護劑各自想在植物裡做什麼？",
"type":"fact",
"tier":"A",
"pages":[
"description",
"plant"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"ACCD cuts ethylene",
"LEA14 protects proteins",
"BoPEP4 defences"
],
"kw_zh":[
"ACCD 降乙烯",
"LEA14 護蛋白",
"BoPEP4 防禦"
],
"a_en":"ACC deaminase breaks down ACC, the precursor of ethylene, so a stressed plant makes less of the stress hormone. LEA14 is aimed at the damage drought and salt do to proteins. BoPEP4 is a broccoli elicitor peptide meant to switch on the plant's own defences. ACC deaminase is the one carried to the reactor. We never measured ethylene in the plants.",
"a_zh":"ACC deaminase 分解乙烯的前驅物 ACC，讓受逆境的植物少產生這個壓力荷爾蒙。LEA14 針對乾旱與鹽害對蛋白質的傷害。BoPEP4 是花椰菜的誘導肽，想啟動植物自己的防禦。ACC deaminase 是我們帶進反應器的那一個。我們沒有在植物上量過乙烯。",
"trap_en":"Saying ethylene was measured, or that all three were integrated into the circuit.",
"trap_zh":"說有量乙烯，或說三個都已整合進電路。",
"basis":"recorded pattern: mechanism of your protein",
"dom":"plant",
"id":"q214"
},
{
"q_en":"Why 100 mM NaCl as your working stress?",
"q_zh":"為什麼把 100 mM NaCl 當作主要逆境？",
"type":"design",
"tier":"A",
"pages":[
"plant"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"strong but not lethal",
"root 74.95 to 1.36",
"250 too harsh"
],
"kw_zh":[
"強但不致死",
"根長 74.95 到 1.36",
"250 太強"
],
"a_en":"In pretests 100 mM NaCl gave a strong stress response but did not kill the seedlings, so a rescue could still show. Our salt ladder in set 6 had root length falling from 74.95 mm at 0 to 11.00 at 100 and 1.36 mm at 150. At 250 mM leaves bleached within three days. In soil the drench needed 300 mM before stress appeared.",
"a_zh":"前測發現 100 mM NaCl 會造成明顯逆境但不會致死，所以仍看得到拯救效果。set 6 的鹽度梯度中，主根長從 0 mM 的 74.95 mm 降到 100 mM 的 11.00 mm 和 150 mM 的 1.36 mm。250 mM 時葉片三天內白化。土壤淋洗則要到 300 mM 才出現逆境。",
"trap_en":"Giving one salt number for every system; soil needed 300 mM.",
"trap_zh":"所有系統都只講一個鹽濃度；土壤要 300 mM。",
"basis":"recorded pattern: why this concentration",
"dom":"plant",
"id":"q215"
},
{
"q_en":"Why test the protectant before, with and after the stress?",
"q_zh":"為什麼要測壓力前、同時、之後三種給藥時機？",
"type":"design",
"tier":"A",
"pages":[
"plant",
"measurement"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"farmer timing",
"day -1, 0, +1",
"forecast needed?"
],
"kw_zh":[
"農民施用時機",
"前一天、當天、後一天",
"需要預測嗎"
],
"a_en":"It copies what a farmer might do: act on a forecast, act when stress arrives, or rescue after damage. We gave the protectant one day before, together with, or one day after the stress. The answer decides whether prediction and our reactor are needed at all, because a pre-treatment only helps if you know stress is coming.",
"a_zh":"這模擬農民可能的做法：依預報提前施用、逆境來時施用，或受害後搶救。我們在逆境前一天、同時、後一天給保護劑。結果決定我們是否真的需要預測和反應器，因為預先處理只有在知道逆境要來時才有用。",
"trap_en":"Presenting timing as already solved; our runs disagree.",
"trap_zh":"把時機說成已經解決，但我們的結果彼此不一致。",
"basis":"like Munich 2025: why did you choose this design",
"dom":"plant",
"id":"q216"
},
{
"q_en":"Why did you use agar, hydroponics and soil instead of one system?",
"q_zh":"為什麼用瓊脂、水耕和土壤，而不是只用一種？",
"type":"design",
"tier":"A",
"pages":[
"plant"
],
"seat":"plant",
"backup":"hw",
"kw_en":[
"control vs realism",
"screen then confirm",
"delivery route"
],
"kw_zh":[
"控制與真實",
"先篩再驗證",
"給藥途徑"
],
"a_en":"Each trades control for realism. Agar gives uniform nutrients and exact stress, so we screened there first. Hydroponics sits between and matches delivery through circulating water. Soil is closest to a farm. The limit is that the systems did not get the same tests: only ACC deaminase and BoPEP4 reached hydroponics, and soil only saw ACC deaminase.",
"a_zh":"每一種在控制與真實之間取捨。瓊脂養分一致、逆境精準，所以先在那裡篩選。水耕介於中間，也貼近透過循環水給藥。土壤最接近農田。限制是三個系統做的測試不一樣：水耕只有 ACC deaminase 和 BoPEP4，土壤只測了 ACC deaminase。",
"trap_en":"Saying the same assay was repeated across all three systems.",
"trap_zh":"說同一個實驗在三個系統都重複過。",
"basis":"recorded pattern: why this platform",
"dom":"plant",
"id":"q217"
},
{
"q_en":"Why did you move soil tests from one-month-old to two-week-old plants?",
"q_zh":"為什麼把土壤實驗從一個月大改成兩週大的植株？",
"type":"design",
"tier":"B",
"pages":[
"plant"
],
"seat":"plant",
"backup":"ihp",
"kw_en":[
"near bolting",
"baseline noise",
"Prof. Cheng advice"
],
"kw_zh":[
"接近抽苔",
"基線雜訊",
"鄭教授建議"
],
"a_en":"One-month-old plants are near flowering and the lower leaves start to age, which adds noise to a stress assay and can hide a real difference. On Prof. Cheng's advice we moved to two-week-old plants, which are still in active leaf growth and give more uniform tissue. We still used the same readouts.",
"a_zh":"一個月大的植株接近開花，下層葉片開始老化，會替逆境實驗增加雜訊，可能蓋掉真正的差異。依鄭教授建議，我們改用兩週大的植株，它們還在活躍長葉階段，組織比較一致。量測指標維持不變。",
"trap_en":"Saying the age change was our own idea; it came from Prof. Cheng.",
"trap_zh":"說年齡調整是自己想到的；其實是鄭教授建議。",
"basis":"like HPi-Potsdam 2025: expert judgement behind your choice",
"dom":"plant",
"id":"q218"
},
{
"q_en":"Why did you spray ACC deaminase on the shoots instead of the roots?",
"q_zh":"為什麼把 ACC deaminase 噴在地上部而不是根部？",
"type":"design",
"tier":"B",
"pages":[
"plant"
],
"seat":"plant",
"backup":"hw",
"kw_en":[
"large enzyme",
"poor root uptake",
"three sprays"
],
"kw_zh":[
"大分子酵素",
"根吸收差",
"三次噴灑"
],
"a_en":"Protectants are usually given through the roots, but ACC deaminase is a large enzyme and we expected poor root uptake, so we sprayed it, three sprays per plate. One trial grew mold and we suspected the spray nozzle, so we cleaned it with sterile water, 75% ethanol and sterile water again. We did not test root uptake.",
"a_zh":"保護劑通常由根部給，但 ACC deaminase 是大分子酵素，我們預期根吸收不好，所以改用噴的，每盤三次。有一次實驗長黴菌，我們懷疑是噴頭，就用無菌水、75% 酒精、再用無菌水清洗。我們沒有測根部吸收。",
"trap_en":"Claiming the enzyme was shown to be taken up by shoots.",
"trap_zh":"說已證明酵素被地上部吸收。",
"basis":"recorded pattern: why this application method",
"dom":"plant",
"id":"q219"
},
{
"q_en":"How many plants per group, and how many replicates did you run?",
"q_zh":"每組有幾株植物？重複了幾次？",
"type":"validate",
"tier":"A",
"pages":[
"plant",
"results"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"n = 9, 25, 40",
"pooled extraction",
"few repeats"
],
"kw_zh":[
"n = 9、25、40",
"合併萃取",
"重複少"
],
"a_en":"Per condition we used 9 seedlings on vertical plates, 25 in set 7 trial 1, and 40 on round plates, counted per extraction. Chlorophyll wells were read in triplicate. Most sets ran once. Set 7 had three trials, but the plant page itself says we need at least three independent replicates, so our results are preliminary.",
"a_zh":"每個處理在直立盤用 9 株，set 7 trial 1 用 25 株，圓盤用 40 株，以每次萃取計算。葉綠素讀值每樣品三個孔。大部分實驗只做一次。set 7 有三次試驗，但植物頁自己說每個條件至少需要三次獨立重複，所以我們的結果是初步的。",
"trap_en":"Treating three plate wells as three replicates.",
"trap_zh":"把盤上三個孔當成三次重複。",
"basis":"like Munich 2025: do you do any replicates?",
"dom":"plant",
"id":"q220"
},
{
"q_en":"What controls did you run?",
"q_zh":"你們有哪些對照組？",
"type":"validate",
"tier":"A",
"pages":[
"plant"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"four-arm design",
"equal liquid",
"culture control"
],
"kw_zh":[
"四組設計",
"等量液體",
"菌液對照"
],
"a_en":"Each set had an untreated control, stress only, protectant only, and stress plus protectant. On agar every group got the same liquid volume, using sterile water or TB medium, and in hydroponics we added a WB800 culture without the protectant. The limit: on agar the control was TB medium, not culture from the empty strain, and hydroponics showed that culture alone can harm plants.",
"a_zh":"每組實驗都有未處理對照、只有逆境、只有保護劑、逆境加保護劑。瓊脂上每組給等量液體，用無菌水或 TB 培養基，水耕則加入不含保護劑的 WB800 菌液。限制是：瓊脂實驗的對照是 TB 培養基，不是空菌株的培養液，而水耕顯示菌液本身可能傷害植物。",
"trap_en":"Saying every control matched the protectant preparation exactly.",
"trap_zh":"說所有對照都與保護劑製備完全對應。",
"basis":"recorded pattern: what were your controls",
"dom":"plant",
"id":"q221"
},
{
"q_en":"What statistics did you use?",
"q_zh":"你們用了什麼統計方法？",
"type":"validate",
"tier":"A",
"pages":[
"plant",
"measurement"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"mean ± SEM",
"P-value stars",
"test unnamed"
],
"kw_zh":[
"平均值與 SEM",
"P 值星號",
"未寫檢定"
],
"a_en":"Graphs show mean with SEM and asterisks from P below 0.05 up to 0.0001, made in Prism. Our plant page does not name the test, and the measurement page says some charts, such as the trehalose and heat pretest ones, had no significance testing. I would not claim more than the stars show, and I can describe the test only if I check the raw files.",
"a_zh":"圖表顯示平均值與 SEM，星號代表 P 小於 0.05 到 0.0001，用 Prism 繪製。植物頁沒有寫是哪種檢定，量測頁也說部分圖表（例如 trehalose 與熱逆境前測）沒有做顯著性檢定。我不會宣稱超過星號所顯示的，要說明檢定方法得先查原始檔。",
"trap_en":"Naming a test such as ANOVA when the wiki does not say.",
"trap_zh":"在維基沒寫的情況下說是 ANOVA 之類的檢定。",
"basis":"recorded pattern: statistics and significance",
"dom":"plant",
"id":"q222"
},
{
"q_en":"How do you know ACC deaminase really rescued plants under salt?",
"q_zh":"你們怎麼知道 ACC deaminase 真的在鹽害下拯救了植物？",
"type":"validate",
"tier":"A",
"pages":[
"plant",
"results"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"70% more chlorophyll",
"one contaminated trial",
"needs repeats"
],
"kw_zh":[
"多 70% 葉綠素",
"一次有污染的實驗",
"需要重複"
],
"a_en":"In set 9, pre-treated plants at 100 mM NaCl held 1.74 against 1.03 mg per gram of chlorophyll, about 70% more, and had bigger rosettes. But that is one trial with nine seedlings per group and some contamination, and the page says the trend needs further trials. In soil at 300 mM, pre-treatment did not beat the control.",
"a_zh":"set 9 中，100 mM NaCl 下預先處理的植株葉綠素為每克 1.74 mg，對照為 1.03，約多 70%，蓮座也較大。但這只是一次實驗、每組九株、還有污染，頁面也說趨勢需要更多試驗。在土壤 300 mM 下，預先處理並沒有勝過對照。",
"trap_en":"Quoting 70% as a proven effect without the single-trial caveat.",
"trap_zh":"引用 70% 卻不提只有單次試驗。",
"basis":"like Munich 2025: replicates? plus how do you know",
"dom":"plant",
"id":"q223"
},
{
"q_en":"How do you know your stress treatment actually reached the plants?",
"q_zh":"你們怎麼知道逆境處理真的作用在植物上？",
"type":"validate",
"tier":"A",
"pages":[
"plant"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"untreated gradient",
"halotropism",
"drench vs accumulate"
],
"kw_zh":[
"未處理梯度",
"向鹽性反應",
"淋洗對比累積"
],
"a_en":"The untreated groups show it. Root length fell from 74.95 mm to 1.36 mm across 0 to 150 mM NaCl, leaves yellowed, and in set 4 roots bent away from the salt, called halotropism. In soil we compared two methods: top-down drench cut fresh weight about 64% compared with sub-irrigation, which barely stressed the plants. We did not measure salt around the roots.",
"a_zh":"未處理組本身就顯示了。主根長度在 0 到 150 mM NaCl 間從 74.95 mm 降到 1.36 mm，葉片變黃，set 4 還看到根彎離鹽，叫做向鹽性反應。土壤上我們比較了兩種方法：由上淋洗使鮮重比底部吸水法少約 64%，底部吸水幾乎沒有造成逆境。我們沒有量根周圍的鹽量。",
"trap_en":"Claiming soil salt dose is known; it was not measured.",
"trap_zh":"說知道土壤實際鹽量；其實沒有量。",
"basis":"recorded pattern: how do you know the stress worked",
"dom":"plant",
"id":"q224"
},
{
"q_en":"Your trehalose result says 8.7-fold chlorophyll. Why should we trust that number?",
"q_zh":"你們 trehalose 的結果寫葉綠素增加 8.7 倍，為什麼要相信這個數字？",
"type":"validate",
"tier":"A",
"pages":[
"plant",
"measurement"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"per-gram inflates",
"read total instead",
"also +3 cm root"
],
"kw_zh":[
"每克會被放大",
"改看總量",
"根也多 3 cm"
],
"a_en":"Be careful with it. That fold change is on the per-gram panel, and our own page warns that dividing by fresh weight inflates values when stress shrinks the plants. In heat, stressed seedlings lost about 95% of fresh weight yet looked greener per gram. The same set also shows about 3 cm more root, which does not depend on that division, but it is one set.",
"a_zh":"要小心看待。這個倍率來自每克鮮重的圖，而我們自己的頁面就警告，逆境讓植株變小時，除以鮮重會把數值放大。熱逆境中，受害幼苗鮮重掉了約 95%，每克葉綠素卻看起來更高。同一組也顯示根多約 3 cm，這不依賴除以鮮重，但仍只是一組實驗。",
"trap_en":"Repeating 8.7-fold as headline without the normalisation warning.",
"trap_zh":"把 8.7 倍當標題，不提鮮重標準化的警告。",
"basis":"recorded pattern: how do you know the result is real",
"dom":"plant",
"id":"q225"
},
{
"q_en":"Is your hydroponic dilution series a real dose-response?",
"q_zh":"你們的水耕稀釋系列是真正的劑量反應嗎？",
"type":"validate",
"tier":"B",
"pages":[
"plant"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"volume not equal",
"culture harms plants",
"1/40 chosen"
],
"kw_zh":[
"體積不一致",
"菌液會傷害植物",
"選定 1/40"
],
"a_en":"Not yet. Dr. Peng pointed out we did not standardise the volume of bacterial culture added, so stronger doses also meant more culture, and we could not separate the enzyme from the culture. Culture alone harmed plants, so we diluted at least 16-fold and set 1/40 as the top dose. We list a fixed culture volume as the next step.",
"a_zh":"還不是。彭博士指出我們沒有統一加入的菌液體積，所以越濃的劑量也代表越多菌液，我們無法把酵素和菌液的影響分開。菌液本身會傷害植物，所以至少稀釋 16 倍，並把 1/40 訂為最高劑量。統一菌液體積是我們列出的下一步。",
"trap_en":"Calling 1/40, 1/60, 1/80 a dose-response curve.",
"trap_zh":"把 1/40、1/60、1/80 說成劑量反應曲線。",
"basis":"recorded pattern: dose and concentration choice",
"dom":"plant",
"id":"q226"
},
{
"q_en":"How does your protectant compare with the commercial CH Bio peptide?",
"q_zh":"你們的保護劑和商業產品 CH Bio 胜肽比起來如何？",
"type":"compare",
"tier":"A",
"pages":[
"plant",
"hardware-hydroponics"
],
"seat":"plant",
"backup":"biz",
"kw_en":[
"no head-to-head",
"timing differs",
"contents unknown"
],
"kw_zh":[
"沒有直接比較",
"時機結果不同",
"成分不明"
],
"a_en":"We did not run a direct head-to-head. CH Bio peptide, a commercial product from CH Biotech, was our reference to learn timing. On agar post-treatment worked best, but in the hydroponic pre-test co-treatment grew best. CH Biotech did not disclose its components, so we treat it as a product-level comparison, not evidence for a specific compound.",
"a_zh":"我們沒有做直接對比。CH Bio 胜肽是正瀚生技的商品，我們拿它當參考來摸索施用時機。瓊脂上事後處理最好，但水耕前測是同時處理長得最好。正瀚沒有公開成分，所以我們只當作產品層級的比較，不是特定化合物有效的證據。",
"trap_en":"Saying our protein beats the commercial product.",
"trap_zh":"說我們的蛋白質比商業產品好。",
"basis":"recorded pattern: why not use the existing product",
"dom":"plant",
"id":"q227"
},
{
"q_en":"Why not just put the beneficial bacteria into the soil?",
"q_zh":"為什麼不直接把有益菌放進土壤？",
"type":"compare",
"tier":"B",
"pages":[
"description"
],
"seat":"plant",
"backup":"ihp",
"kw_en":[
"first design",
"containment",
"protein not cells"
],
"kw_zh":[
"最初設計",
"無法圍堵",
"送蛋白不送菌"
],
"a_en":"That was our first design: engineered bacteria in the soil sensing stress with a DesK-DesR system. Professors and bioprocess experts told us two things were wrong: the bacteria could not be contained, and biological sensing was neither precise nor controllable. So we moved sensing to sensors and an AIoT model, and keep cells in a bioreactor so only the protein reaches the field.",
"a_zh":"那是我們最初的設計：把工程菌放進土壤，用 DesK-DesR 系統感測壓力。教授和生物製程專家指出兩個問題：細菌無法圍堵，而且生物感測不夠精準、也不好控制。所以我們把感測移到感測器和 AIoT 模型，細胞留在生物反應器裡，只有蛋白質到田間。",
"trap_en":"Pretending the soil-bacteria idea was never considered.",
"trap_zh":"假裝沒考慮過把菌放進土壤。",
"basis":"like Technion 2022: why not the simpler route",
"dom":"plant",
"id":"q228"
},
{
"q_en":"Why not use trehalose, which worked at 5 mM, as your protectant?",
"q_zh":"trehalose 在 5 mM 有效，為什麼不用它當保護劑？",
"type":"compare",
"tier":"B",
"pages":[
"plant"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"protocol sample only",
"narrow window",
"no biomass rescue"
],
"kw_zh":[
"只是流程樣品",
"有效範圍窄",
"沒救回生物量"
],
"a_en":"Trehalose was a commercial sample to validate our protocol, never part of the circuit. It only helped at 100 mM NaCl: no benefit at 75, too little at 150, and at 0.5 to 1 mM it slowed growth. In set 4 it did not restore fresh weight. Two trials of one set also gave opposite trends, so we left it out of the model.",
"a_zh":"trehalose 只是用來驗證流程的商業樣品，從來不是電路的一部分。它只在 100 mM NaCl 有幫助：75 mM 沒有效果，150 mM 不夠，0.5 到 1 mM 還會抑制生長。set 4 中它沒有救回鮮重。另外同一組的兩次試驗趨勢相反，所以我們沒有把它放進模型。",
"trap_en":"Presenting trehalose as one of our candidate products.",
"trap_zh":"把 trehalose 說成我們的候選產品。",
"basis":"recorded pattern: why not the alternative",
"dom":"plant",
"id":"q229"
},
{
"q_en":"Would this work on rice or tomato?",
"q_zh":"這在水稻或番茄上有用嗎？",
"type":"boundary",
"tier":"A",
"pages":[
"plant",
"geospatial-analysis",
"description"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"Arabidopsis only",
"rice factor modeled",
"soil is closest"
],
"kw_zh":[
"只測阿拉伯芥",
"水稻係數是模型",
"土壤最接近"
],
"a_en":"We do not know, because we only tested Arabidopsis. The nearest we got to a farm was soil pots. Rice appears in our dose model as a modeled canopy factor of 2.44 with a range of 1.68 to 3.52, and tomato is a target we chose from geospatial data. Measuring efficacy across crops and growth stages is the work in front of us.",
"a_zh":"我們不知道，因為只測過阿拉伯芥。最接近農田的是土壤盆栽。水稻在劑量模型裡只是一個模型估計的冠層係數 2.44，範圍 1.68 到 3.52，番茄則是我們從地理資料選的目標。跨作物與生長階段測量效果是接下來要做的。",
"trap_en":"Saying rice or tomato was tested.",
"trap_zh":"說水稻或番茄有測過。",
"basis":"like NUS 2021: what would you need to validate before a farmer could use this",
"dom":"plant",
"id":"q230"
},
{
"q_en":"What about drought, or other stresses?",
"q_zh":"那乾旱或其他逆境呢？",
"type":"boundary",
"tier":"A",
"pages":[
"plant",
"description"
],
"seat":"plant",
"backup":"ihp",
"kw_en":[
"salt and heat only",
"LEA14 aimed at drought",
"not tested"
],
"kw_zh":[
"只測鹽與熱",
"LEA14 針對乾旱",
"沒測"
],
"a_en":"We have not tested drought or pH stress. Our plant testing has focused on heat and salinity. LEA14 is meant for damage that drought and salt do to proteins, but we only ran it on agar under salt. CH Bio peptide is sold against drought, yet we used it under salt and heat. Drought would be a new assay.",
"a_zh":"我們沒有測乾旱或 pH 逆境，植物測試集中在高溫與鹽害。LEA14 的目標是乾旱與鹽對蛋白質的傷害，但我們只在瓊脂鹽害下測它。CH Bio 胜肽是賣來抗旱的，我們卻用在鹽與高溫。乾旱會是一個新的實驗。",
"trap_en":"Claiming LEA14 was shown to help under drought.",
"trap_zh":"說 LEA14 已證明對乾旱有效。",
"basis":"recorded pattern: have you considered other stresses",
"dom":"plant",
"id":"q231"
},
{
"q_en":"If a farmer only treats after the damage shows, does it still help?",
"q_zh":"如果農民等到看到損害才處理，還有用嗎？",
"type":"boundary",
"tier":"B",
"pages":[
"plant",
"results"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"mixed evidence",
"post helped on agar",
"post worst in soil heat"
],
"kw_zh":[
"證據不一致",
"瓊脂事後有效",
"土壤熱害最差"
],
"a_en":"Evidence is mixed. On agar, post-treatment gave the best chlorophyll for CH Bio peptide and rescued with BoPEP4, and helped ACC deaminase under heat in trial 2. In soil heat, post-treatment was the worst of the three, below the heat control, and in soil salt it gave only a limited gain. We cannot yet tell a farmer to wait.",
"a_zh":"證據不一致。在瓊脂上，事後處理使 CH Bio 胜肽的葉綠素最好，BoPEP4 也有拯救，ACC deaminase 在熱逆境 trial 2 也有幫助。在土壤熱害中，事後處理是三者中最差，低於熱逆境對照；土壤鹽害也只有有限的進步。我們還不能叫農民等。",
"trap_en":"Using the agar result alone to say post-treatment is enough.",
"trap_zh":"只用瓊脂結果就說事後處理就夠了。",
"basis":"recorded pattern: what if conditions differ",
"dom":"plant",
"id":"q232"
},
{
"q_en":"Can the protectants hurt a plant that is not stressed?",
"q_zh":"保護劑會不會傷害沒有受逆境的植物？",
"type":"boundary",
"tier":"A",
"pages":[
"plant"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"BoPEP4 inhibits",
"culture harms",
"timing matters"
],
"kw_zh":[
"BoPEP4 抑制",
"菌液傷害",
"時機有影響"
],
"a_en":"Yes, some did. BoPEP4 co-treated plants grew worse than the mock control even without salt, and unstressed hydroponic plants showed anthocyanin at 1/40 to 1/100. The WB800 culture alone stunted plants, and ACC deaminase pre or co-treatment cut fresh weight in unstressed plants. Trehalose at 5 mM did not hurt unstressed plants.",
"a_zh":"有，部分會。BoPEP4 同時處理的植株即使沒有鹽也比模擬對照長得差，水耕未受逆境的植株在 1/40 到 1/100 出現花青素。單獨的 WB800 菌液就會抑制植物，ACC deaminase 預先或同時處理也讓未受逆境植株鮮重下降。5 mM trehalose 則沒有傷害未受逆境的植株。",
"trap_en":"Saying the protectants are harmless when no stress is present.",
"trap_zh":"說沒有逆境時保護劑是無害的。",
"basis":"like NUS 2021: what are the risks",
"dom":"plant",
"id":"q233"
},
{
"q_en":"How did the plant data change your math model?",
"q_zh":"植物數據怎麼改變了你們的數學模型？",
"type":"integrate",
"tier":"A",
"pages":[
"plant",
"description"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"salt calibration",
"applied dose",
"timing lead"
],
"kw_zh":[
"鹽度校準",
"施用劑量",
"提前時間"
],
"a_en":"Plant data enter the model at three points. The salt ladder sets the stress range, the sprayed dose, 1.67 mL on a 78.5 cm² plate, is scaled to a hectare, and the timing runs set how far ahead to produce. Trehalose was left out because its replicates were not independent. The limit: efficacy is unbounded, so money figures are drawn against efficacy, not at a measured value.",
"a_zh":"植物數據在三個地方進入模型。鹽度梯度設定逆境範圍，噴灑的劑量（78.5 cm² 平板上 1.67 mL）被換算成每公頃，時機實驗決定要提前多久生產。trehalose 因為重複不是獨立的，所以被排除。限制是：效果沒有上限約束，所以金額數字是對照不同效果來畫，不是用實測值。",
"trap_en":"Implying the model is fitted to our plant data; only some inputs come from it.",
"trap_zh":"暗示模型是用植物數據擬合的；其實只有部分輸入來自它。",
"basis":"like Great Bay 2025: model and real testing correlation",
"dom":"plant",
"id":"q234"
},
{
"q_en":"How did outside experts change your plant protocol?",
"q_zh":"外部專家如何改變了你們的植物實驗流程？",
"type":"integrate",
"tier":"A",
"pages":[
"plant",
"hardware-hydroponics"
],
"seat":"plant",
"backup":"ihp",
"kw_en":[
"Prof. Cheng",
"Verslues vertical plates",
"iFarm fewer transplants"
],
"kw_zh":[
"鄭教授",
"Verslues 直立盤",
"iFarm 少移植"
],
"a_en":"Prof. Cheng told us to start on agar, then led the two-week soil window and the three fixed timings. Dr. Verslues' vertical plates inspired our plate rack, though his gradual salt ramp was too mild. Yes Health iFarm taught us to minimise transplants, and we revised the float plate to thirteen seedlings. Dr. Peng caught the unequal culture volume.",
"a_zh":"鄭教授要我們先從瓊脂開始，並帶出兩週大的土壤實驗時窗與三個固定時機。Verslues 博士的直立盤啟發了我們的平板架，不過他建議的漸進加鹽太溫和。源鮮智慧農場教我們盡量減少移植，我們也把漂浮板改成十三株。彭博士抓到菌液體積不一致的問題。",
"trap_en":"Crediting only our own ideas.",
"trap_zh":"只說是自己的點子。",
"basis":"like HPi-Potsdam 2025: expert input that changed the work",
"dom":"plant",
"id":"q235"
},
{
"q_en":"How did your hydroponic hardware change what the plant team could test?",
"q_zh":"你們的水耕硬體如何改變植物組能做的實驗？",
"type":"integrate",
"tier":"B",
"pages":[
"plant",
"hardware-hydroponics"
],
"seat":"plant",
"backup":"hw",
"kw_en":[
"five prototypes",
"tip box and printed plate",
"moved to tube racks"
],
"kw_zh":[
"五代原型",
"tip box 與印製板",
"改用試管架"
],
"a_en":"Five prototypes fixed leaks, depth and fragile foam boards, ending with a pipette-tip box, a printed floating plate for thirteen seedlings, and a black outer box. The CH Bio peptide pre-tests ran in those boxes. Later runs moved to tube racks because contamination and poor growth persisted, so the final plate carried only the pre-tests.",
"a_zh":"五代原型解決了漏水、深度與易壞泡棉板的問題，最後是 tip box、可載十三株的印製漂浮板和黑色外盒。CH Bio 胜肽前測就是在這些盒子裡做的。後來因為污染與生長不良持續出現，改用試管架，所以最終的板只承載了前測實驗。",
"trap_en":"Saying the final plate carried all the hydroponic results.",
"trap_zh":"說最終的板產出了所有水耕結果。",
"basis":"recorded pattern: how did hardware serve the experiment",
"dom":"plant",
"id":"q236"
},
{
"q_en":"Does your timing result support the forecast and sensor part of ReLEAF?",
"q_zh":"你們的時機結果支持 ReLEAF 的預測和感測器嗎？",
"type":"integrate",
"tier":"A",
"pages":[
"plant",
"results"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"co-treatment failed",
"pre needs forecast",
"5.4 days to make"
],
"kw_zh":[
"同時處理無效",
"預先處理需預測",
"5.4 天製造"
],
"a_en":"Partly. In salt on agar, ACC deaminase and BoPEP4 did not rescue when given with the stress, so applying on arrival is not enough, and a pre-treatment needs a forecast. A forecast reaches three days but ten reactors need 5.4 days per hectare, so we must produce through the season. However post-treatment also worked sometimes, and soil heat favoured pre.",
"a_zh":"部分支持。在瓊脂鹽害中，ACC deaminase 和 BoPEP4 與逆境同時給並沒有拯救，所以等逆境來了才施用不夠，預先處理需要預測。預報約三天，但十個反應器做一公頃要 5.4 天，所以整季都要持續生產。不過事後處理有時也有效，土壤熱害則偏向預先處理。",
"trap_en":"Saying our data prove the forecast is necessary.",
"trap_zh":"說我們的數據證明預測是必要的。",
"basis":"recorded pattern: integration of lab result with system design",
"dom":"plant",
"id":"q237"
},
{
"q_en":"What went wrong in your plant experiments?",
"q_zh":"你們的植物實驗哪裡出了問題？",
"type":"gap",
"tier":"A",
"pages":[
"plant"
],
"seat":"plant",
"backup":"ihp",
"kw_en":[
"contamination",
"fragile seedlings",
"unequal culture volume"
],
"kw_zh":[
"污染",
"幼苗太脆弱",
"菌液體積不一"
],
"a_en":"Several things. Mold and contamination hit agar plates, spray nozzles and hydroponic boxes, and some plates were excluded. Four-day-old seedlings were too fragile for salt. Moving agar seedlings into soil damaged roots. Two trials of trehalose set 3 gave opposite trends. And in hydroponics culture volume was unequal. Each one pushed us to a firmer protocol.",
"a_zh":"好幾件事。黴菌與污染影響了瓊脂平板、噴頭和水耕盒，部分平板被排除。四天大的幼苗對鹽太脆弱。把瓊脂幼苗移到土壤會傷根。trehalose set 3 的兩次試驗趨勢相反。水耕的菌液體積也不一致。每一項都促使我們把流程改得更穩。",
"trap_en":"Hiding the contamination or saying it did not affect the data.",
"trap_zh":"隱藏污染，或說污染不影響數據。",
"basis":"recorded pattern: what failed",
"dom":"plant",
"id":"q238"
},
{
"q_en":"Your headline says pre and post rescue but co-treatment does not. Do all your runs agree?",
"q_zh":"你們的標題說預先和事後有效、同時處理無效，所有實驗都一致嗎？",
"type":"gap",
"tier":"A",
"pages":[
"results",
"plant"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"salt agar only",
"soil heat reversed",
"not consistent"
],
"kw_zh":[
"只限瓊脂鹽害",
"土壤熱害相反",
"不一致"
],
"a_en":"No. That headline comes from ACC deaminase on agar under salt, plus BoPEP4. In heat, agar trial 1 favoured pre, trial 2 favoured post, and in soil pre was best and post worst. In the CH Bio hydroponic pre-test co-treatment grew best. Our plant page says the best timing was not consistent, and more replicates are needed.",
"a_zh":"不是。那個標題來自瓊脂鹽害下的 ACC deaminase，加上 BoPEP4。熱逆境中，瓊脂 trial 1 偏向預先處理，trial 2 偏向事後處理，土壤則是預先處理最好、事後處理最差。CH Bio 水耕前測是同時處理長得最好。植物頁自己說最佳時機並不一致，需要更多重複。",
"trap_en":"Defending the headline as a general rule.",
"trap_zh":"把標題當成通則來辯護。",
"basis":"recorded pattern: do your results hold up",
"dom":"plant",
"id":"q239"
},
{
"q_en":"Did you show that ACC deaminase lowers ethylene in your plants?",
"q_zh":"你們有證明 ACC deaminase 在植物裡降低乙烯嗎？",
"type":"gap",
"tier":"A",
"pages":[
"plant",
"results"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"ethylene not measured",
"DNPH on culture",
"growth readouts only"
],
"kw_zh":[
"沒量乙烯",
"DNPH 量菌液",
"只有生長指標"
],
"a_en":"No. We did not measure ethylene or ACC in the plants. We measured chlorophyll, fresh weight and root growth, and tested the enzyme's activity in culture with the DNPH assay. The ethylene link comes from published work. So our plant data say the treatment may help growth, not that the mechanism is the one we expected.",
"a_zh":"沒有。我們沒有在植物裡量乙烯或 ACC。我們量的是葉綠素、鮮重和根生長，並用 DNPH 實驗在菌液中測酵素活性。乙烯的關聯來自已發表的研究。所以我們的植物數據只說明處理可能幫助生長，不能說機制就是我們預期的那個。",
"trap_en":"Saying the data confirm the ethylene mechanism.",
"trap_zh":"說數據證實了乙烯機制。",
"basis":"recorded pattern: how do you know the mechanism",
"dom":"plant",
"id":"q240"
},
{
"q_en":"Did the protectants work in soil, which is closest to a farm?",
"q_zh":"在最接近農田的土壤裡有效嗎？",
"type":"gap",
"tier":"A",
"pages":[
"plant",
"geospatial-analysis"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"preliminary",
"one pot per condition",
"salt and heat differ"
],
"kw_zh":[
"初步",
"每處理一盆",
"鹽與熱不同"
],
"a_en":"Only weakly, and it is preliminary. Under 300 mM NaCl only post-treatment beat control, by about 13%, while pre and co-treatment were lower. Under heat, pre-treatment held the most chlorophyll, but fresh weight was one pot per condition. Our geospatial page says soil-validated efficacy is still being developed, so downstream coverage numbers are projections.",
"a_zh":"只有微弱效果，而且是初步的。300 mM NaCl 下只有事後處理高於對照約 13%，預先與同時處理反而較低。熱逆境下預先處理葉綠素最多，但鮮重每個處理只有一盆。地理分析頁也說土壤驗證的效果仍在開發中，所以後面的覆蓋數字只是推估。",
"trap_en":"Quoting soil as a success because agar worked.",
"trap_zh":"因為瓊脂有效就說土壤也成功。",
"basis":"recorded pattern: honesty probe on limits",
"dom":"plant",
"id":"q241"
},
{
"q_en":"Which protectant worked best?",
"q_zh":"哪一種保護劑效果最好？",
"type":"gap",
"tier":"B",
"pages":[
"plant",
"results"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"no single winner",
"ACCD pre 70%",
"BoPEP4 1/40"
],
"kw_zh":[
"沒有單一贏家",
"ACCD 預先 70%",
"BoPEP4 1/40"
],
"a_en":"No single winner yet. ACC deaminase pre-treatment gave the biggest agar number, about 70% more chlorophyll under 100 mM NaCl. BoPEP4 post-treatment rescued on agar and 1/40 helped in hydroponic salt. LEA14 did best at 75 mM. CH Bio peptide's clearest rescue was at 100 mM. Each is from one or two trials, so we would rank none yet.",
"a_zh":"目前沒有單一贏家。ACC deaminase 預先處理在瓊脂上數字最大，100 mM NaCl 下葉綠素多約 70%。BoPEP4 事後處理在瓊脂有拯救，水耕鹽害 1/40 也有幫助。LEA14 在 75 mM 最好。CH Bio 胜肽最明顯的拯救在 100 mM。每項都只來自一兩次試驗，所以我們還不排名。",
"trap_en":"Naming a winner from one trial.",
"trap_zh":"根據一次試驗就選出贏家。",
"basis":"recorded pattern: which result is strongest",
"dom":"plant",
"id":"q242"
},
{
"q_en":"How much protectant would a farmer need to apply?",
"q_zh":"農民要施用多少保護劑？",
"type":"impact",
"tier":"A",
"pages":[
"plant",
"model"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"1.67 mL per plate",
"2126 L per hectare",
"dose that worked"
],
"kw_zh":[
"每盤 1.67 mL",
"每公頃 2126 L",
"有效而非最小"
],
"a_en":"Our model scales the dose we sprayed. Three sprays gave 1.67 mL on a 78.5 cm² plate, equal to 2126 liters per hectare, and with a modeled canopy factor and measured activity this becomes 37.6 kU per hectare per application. That is a dose that worked, not the smallest dose that works, because we never ran a dilution series in soil, and the activity figure rests on one assay below the quantification limit.",
"a_zh":"我們的模型把噴灑過的劑量換算出來。三次噴灑在 78.5 cm² 平板上是 1.67 mL，相當於每公頃 2126 公升，加上模型的冠層係數與實測活性，約為每公頃每次 37.6 kU。這是有效的劑量，不是最小有效劑量，因為我們從沒在土壤做過稀釋系列，而且活性數字來自一次低於定量下限的實驗。",
"trap_en":"Presenting 37.6 kU per hectare as a measured field dose.",
"trap_zh":"把每公頃 37.6 kU 說成實測的田間劑量。",
"basis":"recorded pattern: scale and dose",
"dom":"plant",
"id":"q243"
},
{
"q_en":"What is your next plant experiment?",
"q_zh":"你們下一個植物實驗是什麼？",
"type":"impact",
"tier":"A",
"pages":[
"plant"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"three independent replicates",
"soil dilution series",
"fixed culture volume"
],
"kw_zh":[
"三次獨立重複",
"土壤稀釋系列",
"固定菌液體積"
],
"a_en":"First, at least three independent replicates per condition, so a gain can be shown to be reproducible. Second, dilution series in soil to find the minimum effective dose. Third, a fixed culture volume in hydroponics and a standardised salt schedule so the three timings are compared on equal terms. Then an ACC deaminase dose-response for the model.",
"a_zh":"第一，每個條件至少三次獨立重複，才能證明進步是可重現的。第二，在土壤做稀釋系列，找出最小有效劑量。第三，水耕固定菌液體積、統一施鹽流程，讓三個時機在相同條件下比較。接著為模型做 ACC deaminase 的劑量反應。",
"trap_en":"Promising crop or field trials the wiki does not plan.",
"trap_zh":"承諾維基沒有規劃的作物或田間試驗。",
"basis":"recorded pattern: what is your next step",
"dom":"plant",
"id":"q244"
},
{
"q_en":"How does your CcaSR light switch work, step by step?",
"q_zh":"你們的 CcaSR 光開關是怎麼一步一步運作的？",
"type":"fact",
"tier":"A",
"pages":[
"parts",
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"CcaS-m3 senses green",
"CcaR passes signal",
"PcpcG2-veg on"
],
"kw_zh":[
"CcaS-m3 感測綠光",
"CcaR 傳遞訊號",
"PcpcG2-veg 開啟"
],
"a_en":"Thank you. It is a two-component system. The cell first makes phycocyanobilin from its own heme, using ho1 and pcyA. CcaS-m3 binds it, and under green light it passes a phosphate to CcaR. Phosphorylated CcaR then switches on the PcpcG2-veg promoter in front of ACC deaminase. It is designed on in green and off in red. Our data show green higher than red in places, but not yet a clean on and off.",
"a_zh":"謝謝。這是一個雙組分系統。細胞先用 ho1 和 pcyA 把自己的血基質做成 phycocyanobilin。CcaS-m3 結合它，在綠光下把磷酸基傳給 CcaR。磷酸化的 CcaR 再打開 ACC 去胺酶前面的 PcpcG2-veg 啟動子。設計上是綠光開、紅光關。我們的數據顯示綠光有些地方高於紅光，但還不是乾淨的開關。",
"trap_en":"Stopping at 'green turns it on' and claiming a finished switch; the Results data are weaker than that.",
"trap_zh":"只說「綠光就會打開」並宣稱開關已完成；Results 的數據沒有那麼強。",
"basis":"like standard 'walk us through the circuit' openers",
"dom":"wetlab",
"id":"q245"
},
{
"q_en":"What are your three protectants, and what does each one do?",
"q_zh":"你們的三種保護蛋白是什麼？各自的作用是什麼？",
"type":"fact",
"tier":"A",
"pages":[
"description",
"parts",
"protein-design"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"ACCD cuts ethylene",
"LEA14 shields proteins",
"BoPep4 triggers defense"
],
"kw_zh":[
"ACCD 降乙烯",
"LEA14 保護蛋白",
"BoPep4 啟動防禦"
],
"a_en":"ACC deaminase, from Pseudomonas putida, breaks down ACC, the precursor of the stress hormone ethylene. LEA14 is an Arabidopsis protein that protects other proteins from drought and salt damage. BoPep4 is a 23-residue broccoli peptide that switches on the plant's own defenses through the PEPR1 receptor. Only ACC deaminase went through the light circuit and the reactor. LEA14 and BoPep4 were built as parts for later integration.",
"a_zh":"ACC 去胺酶來自 Pseudomonas putida，分解 ACC，也就是壓力荷爾蒙乙烯的前驅物。LEA14 是 Arabidopsis 的蛋白，保護其他蛋白不受乾旱與鹽害傷害。BoPep4 是花椰菜的 23 個胺基酸胜肽，透過 PEPR1 受體啟動植物自己的防禦。只有 ACC 去胺酶走完光電路與反應器。LEA14 和 BoPep4 是為了之後整合而做成的零件。",
"trap_en":"Saying all three are 'integrated into the system'; only ACCD is.",
"trap_zh":"說三個都「整合進系統」；實際只有 ACCD。",
"basis":"like Munich 2025: 'what exactly does your product do'",
"dom":"wetlab",
"id":"q246"
},
{
"q_en":"What are Level 0, Level 1 and Level 2 in your Golden Gate assembly?",
"q_zh":"你們 Golden Gate 組裝裡的 Level 0、Level 1、Level 2 是什麼？",
"type":"fact",
"tier":"A",
"pages":[
"engineering",
"parts"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"L0 single part",
"L1 transcription unit",
"L2 four units"
],
"kw_zh":[
"L0 單一零件",
"L1 轉錄單元",
"L2 四個單元"
],
"a_en":"Level 0 holds one part, for example a cargo with its signal peptide and His tag, cut with BbsI into pSTK-0, which is chloramphenicol resistant. Level 1 joins promoter, RBS, coding sequence and terminator into one transcription unit with BsaI, in ampicillin vectors. Level 2 joins four Level 1 units into one plasmid of about 10 kb: PCB production, CcaS-m3, CcaR, and the green-light cassette.",
"a_zh":"Level 0 放單一零件，例如帶訊號肽與 His 標籤的目標蛋白，用 BbsI 接進有氯黴素抗性的 pSTK-0。Level 1 用 BsaI 把啟動子、RBS、編碼序列、終止子接成一個轉錄單元，放在安比西林抗性的載體。Level 2 把四個 Level 1 單元接成一個約 10 kb 的質體：PCB 生產、CcaS-m3、CcaR 與綠光卡匣。",
"trap_en":"Mixing up which enzyme goes with which level, or forgetting the antibiotic markers differ.",
"trap_zh":"搞混哪種酵素對應哪個層級，或忘記各層抗生素標記不同。",
"basis":"like standard 'explain your assembly standard'",
"dom":"wetlab",
"id":"q247"
},
{
"q_en":"Which of your three proteins was secreted most, and by how much?",
"q_zh":"三種蛋白中哪一個分泌最多？多多少？",
"type":"fact",
"tier":"A",
"pages":[
"results"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"ACCD about 16",
"others about 6",
"two to three times"
],
"kw_zh":[
"ACCD 約 16",
"其他約 6",
"兩到三倍"
],
"a_en":"ACC deaminase. In our ELISA of WB800 supernatants it reached about 16 micrograms per millilitre, while LEA14 and BoPep4 were each about 6, roughly three times lower. All three were secreted. In a second ELISA with the wild-type constructs, the gap was nearer twofold, 12 to 13 against about 6. So the safe summary is two to three times. These are His-tag readings, not purified yield.",
"a_zh":"ACC 去胺酶。WB800 上清液的 ELISA 中，它約 16 微克／毫升，LEA14 和 BoPep4 各約 6，大約低三倍。三種都有分泌。第二個用野生型構築的 ELISA，差距接近兩倍，12 至 13 對約 6。所以穩妥的說法是兩到三倍。這是 His 標籤的讀值，不是純化後的產量。",
"trap_en":"Quoting 'three times' as a firm number without the other ELISA that gives about two times.",
"trap_zh":"把「三倍」當成確定數字，卻沒提另一個 ELISA 只有約兩倍。",
"basis":"like Munich 2025: 'which is higher and by how much'",
"dom":"wetlab",
"id":"q248"
},
{
"q_en":"What is PLP, and why do you add it to your activity assay?",
"q_zh":"PLP 是什麼？為什麼要加進活性檢測？",
"type":"fact",
"tier":"A",
"pages":[
"results",
"engineering"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"pyridoxal phosphate",
"ACCD cofactor",
"activity went up"
],
"kw_zh":[
"磷酸吡哆醛",
"ACCD 輔因子",
"活性上升"
],
"a_en":"PLP, pyridoxal 5-prime-phosphate, is the cofactor ACC deaminase needs. In our DNPH assay, adding it raised activity: about 39 for Csn and 48 for SamyQ, against 21 for Csn without it. So every later assay carries PLP. The limit is the host background: plasmid-free WB800 read about 32 in the same test, so the net signal above background is modest.",
"a_zh":"PLP，也就是磷酸吡哆醛，是 ACC 去胺酶需要的輔因子。在 DNPH 檢測中加入後活性上升：Csn 約 39、SamyQ 約 48，沒加 PLP 的 Csn 約 21。所以之後每次檢測都加 PLP。限制是宿主背景：不含質體的 WB800 在同一測試讀到約 32，所以高於背景的淨訊號不大。",
"trap_en":"Saying PLP 'proves the enzyme works' without mentioning the host-only control is already high.",
"trap_zh":"說加 PLP 就「證明酵素有活性」，卻沒提只有宿主的對照本身就很高。",
"basis":"like standard 'what controls did the assay have'",
"dom":"wetlab",
"id":"q249"
},
{
"q_en":"What did you find when you optimised electroporation?",
"q_zh":"你們優化電穿孔時發現了什麼？",
"type":"fact",
"tier":"A",
"pages":[
"engineering",
"results"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"21 vs 8 colonies",
"WB800 needs trehalose",
"voltage depends on construct"
],
"kw_zh":[
"21 對 8 個菌落",
"WB800 需海藻糖",
"電壓隨構築而異"
],
"a_en":"Three things. In strain 168, 2.1 kilovolts gave 21 colonies and 2.3 gave 8. The 168 protocol failed on WB800, which needed growth to OD 2.2 and washes in 1.5 molar trehalose. And the best voltage depends on the construct: 2.3 kilovolts for our 10 kb CcaSR plasmid, 1.1 in a thinner cuvette for BoPep4. Those are single counts per condition, not replicated.",
"a_zh":"三件事。168 菌株用 2.1 kV 得到 21 個菌落，2.3 kV 只有 8 個。168 的方法在 WB800 失敗，需要長到 OD 2.2 並用 1.5 M 海藻糖洗。最佳電壓還隨構築而變：10 kb 的 CcaSR 質體是 2.3 kV，BoPep4 在較窄的電擊杯用 1.1 kV。這些都是每個條件單次計數，沒有重複。",
"trap_en":"Presenting one 'optimal voltage' for the whole project.",
"trap_zh":"把一個「最佳電壓」說成適用整個專案。",
"basis":"like standard 'optimisation of a protocol'",
"dom":"wetlab",
"id":"q250"
},
{
"q_en":"Why is CcaR on the Pveg promoter, and the photoreceptor on PliaG or PlepA?",
"q_zh":"為什麼 CcaR 用 Pveg 啟動子，光受體用 PliaG 或 PlepA？",
"type":"design",
"tier":"A",
"pages":[
"engineering",
"parts",
"contribution"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"constitutive promoters",
"steady expression",
"light acts at output"
],
"kw_zh":[
"持續表現啟動子",
"表現量穩定",
"光作用在輸出端"
],
"a_en":"All three are constitutive promoters, so the receptor and the regulator are always made and only the output promoter, PcpcG2-veg, answers to light. Pveg keeps ccaR steady. The original 2019 system induced the receptor with xylose or IPTG, and ours is constantly expressed so it responds continuously to green. We built both PlepA and PliaG versions and could not choose between them without a graded induction curve.",
"a_zh":"三個都是持續表現的啟動子，所以受體與調控蛋白一直都有，只有輸出端的 PcpcG2-veg 對光有反應。Pveg 讓 ccaR 的量保持穩定。2019 年的原始系統用木糖或 IPTG 誘導受體，我們的則持續表現，所以對綠光持續有反應。PlepA 與 PliaG 兩個版本都做了，沒有分級誘導曲線就無法選出哪個比較好。",
"trap_en":"Claiming Pveg was picked for a measured reason; the wiki only says it keeps expression steady.",
"trap_zh":"宣稱選 Pveg 有量測依據；wiki 只說它讓表現量穩定。",
"basis":"like standard 'why this promoter'",
"dom":"wetlab",
"id":"q251"
},
{
"q_en":"Why did you choose WB800 instead of wild-type 168?",
"q_zh":"為什麼選 WB800 而不是野生型 168？",
"type":"design",
"tier":"A",
"pages":[
"engineering",
"results"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"8 proteases deleted",
"168 degraded product",
"no controlled pair"
],
"kw_zh":[
"刪除 8 種蛋白酶",
"168 分解產物",
"沒有對照組"
],
"a_en":"WB800 has eight extracellular proteases deleted, so it should break down less of the protein it secretes. In our first reactor run, 168 gave barely detectable ACC deaminase, probably because of its proteases, and 168 transformations were also holding us back. The honest limit: we never ran 168 and WB800 side by side in the reactor, and the two runs also differed in signal peptide, so the evidence is suggestive, not controlled.",
"a_zh":"WB800 刪除了八種胞外蛋白酶，所以應該較少分解自己分泌的蛋白。第一次反應器運轉中，168 幾乎偵測不到 ACC 去胺酶，可能是它的蛋白酶造成的，168 的轉形也拖慢進度。誠實的限制是：我們從未在反應器中把 168 和 WB800 並排比較，兩次運轉的訊號肽也不同，所以證據只是有暗示性，不是對照實驗。",
"trap_en":"Saying WB800 'gave X-fold more protein'; that comparison was never controlled.",
"trap_zh":"說 WB800「多產了幾倍蛋白」；這個比較從未做過對照。",
"basis":"like Munich 2025: 'why this chassis'",
"dom":"wetlab",
"id":"q252"
},
{
"q_en":"Why did you rebuild module 1 with a different promoter, RBS and terminator?",
"q_zh":"為什麼用不同的啟動子、RBS 和終止子重建模組 1？",
"type":"design",
"tier":"A",
"pages":[
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"Pveg version failed",
"recombination worry",
"11 of 12 colonies"
],
"kw_zh":[
"Pveg 版本失敗",
"重組疑慮",
"12 株中 11 株"
],
"a_en":"Two reasons stacked. The Pveg version gave no expression signal even though it sequenced clean, and we worried that repeating Pveg, RBS0 and B0015 across modules could recombine in Bacillus. We rebuilt it with PtagC, a different RBS and the L3S2P21 terminator: 11 of 12 colonies gave the 1833 bp band, and clone 1 was sequenced. Professor Huang later said recombination is probably not the issue, so the module 1 rebuild is what we kept.",
"a_zh":"兩個原因疊加。Pveg 版本即使定序正確也沒有表現訊號，而且我們擔心各模組重複的 Pveg、RBS0、B0015 會在枯草桿菌內重組。我們改用 PtagC、不同的 RBS 與 L3S2P21 終止子重建：12 個菌落中 11 個得到 1833 bp 條帶，選殖株 1 經過定序。Huang 教授之後說重組大概不是問題，所以我們保留的是模組 1 的重建。",
"trap_en":"Presenting recombination as a confirmed problem; the wiki says the premise did not survive.",
"trap_zh":"把重組說成已證實的問題；wiki 說這個前提沒有成立。",
"basis":"like standard 'what did you change after a failure and why'",
"dom":"wetlab",
"id":"q253"
},
{
"q_en":"Why did you build every cargo with a constitutive promoter before testing it under light?",
"q_zh":"為什麼每個目標蛋白都先用持續表現啟動子做，再測光控？",
"type":"design",
"tier":"A",
"pages":[
"engineering",
"contribution"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"separate the causes",
"protectant or switch",
"bench results not light"
],
"kw_zh":[
"分離原因",
"是蛋白還是開關",
"桌面數據不是光控"
],
"a_en":"To separate causes. If a protectant cannot be detected, the constitutive version tells us whether the problem is the protein or the light switch in front of it. It also means every protein, plant and reactor result on our wiki came from the constitutive module. Our Engineering page says plainly that none of the reactor numbers is the light switch doing anything.",
"a_zh":"為了分離原因。如果偵測不到保護蛋白，持續表現版本能告訴我們問題出在蛋白還是前面的光開關。這也表示 wiki 上所有蛋白、植物與反應器結果都來自持續表現模組。Engineering 頁面直接說明，反應器的數字沒有一個是光開關在作用。",
"trap_en":"Letting a judge assume the reactor and plant data came from light-triggered production.",
"trap_zh":"讓評審以為反應器與植物數據來自光觸發的生產。",
"basis":"like standard 'is your final system what you tested'",
"dom":"wetlab",
"id":"q254"
},
{
"q_en":"How do you know your Level 2 plasmid is correct? Is it sequenced?",
"q_zh":"你們怎麼知道 Level 2 質體是對的？有定序嗎？",
"type":"validate",
"tier":"A",
"pages":[
"engineering",
"parts"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"three junction PCRs",
"double digest length",
"not end-to-end sequenced"
],
"kw_zh":[
"三個接點 PCR",
"雙酵素切割長度",
"沒有全長定序"
],
"a_en":"Not end to end, and I will say that plainly. Three ACDI clones were positive at all three internal junctions, 375, 632 and 661 base pairs, so the four modules are in the right order. A digest gave 10 293 bp with EcoRI and 7543 with EcoRI plus BtsI, so the length is right. Neither reads the 10 kb between them. The Level 1 units were sequenced.",
"a_zh":"沒有全長定序，我直接說明。三株 ACDI 在三個內部接點（375、632、661 bp）都呈陽性，所以四個模組順序正確。酵素切割用 EcoRI 得到 10 293 bp，EcoRI 加 BtsI 得到 7543 bp，所以長度正確。兩者都沒有讀接點之間的 10 kb 序列。Level 1 單元則有定序。",
"trap_en":"Saying 'the construct was verified by sequencing' for Level 2; the wiki says it was not.",
"trap_zh":"說 Level 2「經定序驗證」；wiki 明說沒有。",
"basis":"like Munich 2025: 'how do you know your construct is right'",
"dom":"wetlab",
"id":"q255"
},
{
"q_en":"How did you screen colonies, and is a correct-sized band enough?",
"q_zh":"你們怎麼篩選菌落？大小正確的條帶就夠了嗎？",
"type":"validate",
"tier":"A",
"pages":[
"engineering",
"experiments"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"colony PCR",
"size is not identity",
"sequencing decides"
],
"kw_zh":[
"菌落 PCR",
"大小不等於正確",
"定序定案"
],
"a_en":"We used colony PCR with primers across the junction or insert, read on an agarose gel. A band of the right size is not enough. In our reporter cycles, many gels showed bands near the expected size, but sequencing showed the colonies did not carry the construct. So sequencing stayed the deciding check for Level 0 and Level 1. For Level 2 we added junction primers and digests.",
"a_zh":"我們用跨接點或插入片段的引子做菌落 PCR，再用瓊脂糖膠判讀。大小正確的條帶並不夠。在報告蛋白的幾輪實驗中，很多膠上條帶接近預期大小，但定序顯示菌落並沒有帶到構築。所以 Level 0 和 Level 1 仍以定序為最終判斷。Level 2 則加上接點引子與酵素切割。",
"trap_en":"Treating a right-sized band as proof of a correct clone.",
"trap_zh":"把大小正確的條帶當成選殖株正確的證據。",
"basis":"like standard 'how did you verify your clones'",
"dom":"wetlab",
"id":"q256"
},
{
"q_en":"How do you know your ELISA numbers are your protein and not background?",
"q_zh":"你們怎麼知道 ELISA 數字是你們的蛋白，不是背景？",
"type":"validate",
"tier":"A",
"pages":[
"results",
"development"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"plasmid-free control",
"1.3 vs 5 background",
"above the standard curve"
],
"kw_zh":[
"不含質體對照",
"背景 1.3 對 5",
"超出標準曲線"
],
"a_en":"Partly. In the reactor and light-plate runs, plasmid-free WB800 reads 1.3 micrograms per millilitre and our samples sit above that. But in the construct comparison table the WB800 control reads 4.6 to 5.5, about the same as LEA14 and BoPep4, and every value there is above the 3 microgram top standard. So ACC deaminase is clearly above background; LEA14 and BoPep4 are not clearly separated from it.",
"a_zh":"部分可以。在反應器與光盤實驗中，不含質體的 WB800 讀到 1.3 微克／毫升，我們的樣本高於這個值。但在構築比較表中，WB800 對照讀到 4.6 至 5.5，與 LEA14 和 BoPep4 差不多，而且表中每個數值都超過 3 微克的最高標準品。所以 ACC 去胺酶明顯高於背景；LEA14 和 BoPep4 則沒有明確和背景分開。",
"trap_en":"Claiming all three proteins were quantified when the control itself reads close to two of them.",
"trap_zh":"宣稱三種蛋白都被定量，但對照組本身就接近其中兩個。",
"basis":"like Munich 2025: 'what is your negative control reading'",
"dom":"wetlab",
"id":"q257"
},
{
"q_en":"How do you know the ACC deaminase is active, and not just present?",
"q_zh":"你們怎麼知道 ACC 去胺酶有活性，而不只是存在？",
"type":"validate",
"tier":"A",
"pages":[
"results",
"engineering"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"ELISA counts protein",
"DNPH counts activity",
"peaks six hours apart"
],
"kw_zh":[
"ELISA 計蛋白",
"DNPH 計活性",
"高峰差六小時"
],
"a_en":"We run two assays on the same samples. ELISA counts His-tagged protein whether it is folded or not, and the DNPH assay detects alpha-ketobutyrate, the enzyme's product. In the reactor shell, protein peaked at 12 hours, about 6.5 micrograms per millilitre, and activity at 18 hours. The limit is that each point is a single well, and the host alone already gives some DNPH signal.",
"a_zh":"我們對同樣的樣本做兩種檢測。ELISA 不管蛋白是否摺疊都會計入，DNPH 偵測酵素的產物 α-酮丁酸。在反應器殼側，蛋白在 12 小時達高峰，約 6.5 微克／毫升，活性則在 18 小時。限制是每個時間點只有單一孔，而且宿主本身就有一些 DNPH 訊號。",
"trap_en":"Saying ELISA alone shows the enzyme works.",
"trap_zh":"只用 ELISA 就說酵素有作用。",
"basis":"like standard 'protein present vs functional'",
"dom":"wetlab",
"id":"q258"
},
{
"q_en":"How do you know the transformed Bacillus colonies carry your construct?",
"q_zh":"你們怎麼知道轉形後的枯草桿菌菌落帶有你們的構築？",
"type":"validate",
"tier":"B",
"pages":[
"engineering",
"results"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"colony PCR after electroporation",
"23 of 23 lanes",
"168 run not screened"
],
"kw_zh":[
"電穿孔後菌落 PCR",
"23 株全有條帶",
"168 沒篩選"
],
"a_en":"A colony count cannot show that, so we screen with colony PCR. For BoPep4 2.1 in WB800, all 23 transformants gave the band, and a second six-colony screen gave five of six. The gap is the first 168 voltage test: there, 21 colonies at 2.1 kilovolts were counted, but no colony PCR is on record. Also, not every WB800 construct has a recorded electroporation, for example the LEA14 cassettes.",
"a_zh":"菌落數量本身無法證明，所以我們用菌落 PCR 篩選。WB800 中 BoPep4 2.1 的 23 個轉形株全部有條帶，另一次六個菌落的篩選有五個有條帶。缺口在最早的 168 電壓測試：2.1 kV 數了 21 個菌落，但沒有菌落 PCR 紀錄。另外並非每個 WB800 構築都有電穿孔紀錄，例如 LEA14 卡匣。",
"trap_en":"Saying all constructs were verified in WB800; the electroporation table does not list the LEA14 cassettes.",
"trap_zh":"說所有構築都在 WB800 驗證過；電穿孔表沒有列出 LEA14 卡匣。",
"basis":"like standard 'how do you know it is in the cell'",
"dom":"wetlab",
"id":"q259"
},
{
"q_en":"How strong is your evidence that no cells get through to the shell side?",
"q_zh":"你們有多確定沒有細胞穿過膜進到殼側？",
"type":"validate",
"tier":"A",
"pages":[
"results",
"engineering"
],
"seat":"wet2",
"backup":"hw",
"kw_en":[
"two platings",
"no replicates",
"0.2 micron vs vesicles"
],
"kw_zh":[
"兩次塗盤",
"沒有重複",
"0.2 微米對囊泡"
],
"a_en":"Preliminary. We have two platings: on 6 June, 2 millilitres of shell liquid grew nothing, and in a later run the lumen plate grew while the shell plate showed no colonies after 24 hours at 37 degrees. Each was a single plating, with no replicate and no recorded detection limit, so we cannot give a log reduction. The pores are 0.2 micrometres, cells are 0.8 to 2, but vesicles and debris can pass.",
"a_zh":"屬於初步證據。我們有兩次塗盤：6 月 6 日取 2 毫升殼側液體沒長出東西；之後一次運轉中管腔盤長菌，殼側盤在 37 度 24 小時後沒有菌落。每次都是單次塗盤，沒有重複也沒有記錄偵測極限，所以給不出對數減少值。膜孔 0.2 微米，細胞 0.8 至 2 微米，但囊泡與碎片可以通過。",
"trap_en":"Saying 'the membrane guarantees containment'.",
"trap_zh":"說「膜保證可以隔離」。",
"basis":"like Munich 2025: 'how many replicates for the safety claim'",
"dom":"wetlab",
"id":"q260"
},
{
"q_en":"Why did you not stay with MoClo 2.0?",
"q_zh":"為什麼不繼續用 MoClo 2.0？",
"type":"compare",
"tier":"A",
"pages":[
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"no usable Level 1 clone",
"SubtiToolKit for Bacillus",
"extra Level 0 step"
],
"kw_zh":[
"沒有可用 Level 1",
"專為 Bacillus 的套組",
"多一個 Level 0 步驟"
],
"a_en":"We started with it and it did not work for us. The screens were full of empty vectors and off-target bands, Golden Gate efficiency was low, and no trial gave a usable Level 1 clone, so we have no data to show. Dr Joaquín Caro-Astorga then supplied the SubtiToolKit, built for Bacillus. We also added a Level 0 step so every part was sequenced first. It cost a day but removed the ambiguity.",
"a_zh":"我們一開始就用它，但對我們行不通。篩選結果滿是空載體和非預期條帶，Golden Gate 效率低，沒有任何一次得到可用的 Level 1 選殖株，所以沒有數據可以呈現。之後 Dr Joaquín Caro-Astorga 提供了專為 Bacillus 設計的 SubtiToolKit。我們也加了 Level 0 步驟，讓每個零件先定序。多花一天，但消除了模糊地帶。",
"trap_en":"Blaming MoClo itself; the wiki only says it did not work for this build.",
"trap_zh":"把問題歸咎於 MoClo 本身；wiki 只說它對這次建構沒有用。",
"basis":"like standard 'why not use the standard kit'",
"dom":"wetlab",
"id":"q261"
},
{
"q_en":"Which signal peptide is better, Csn or SamyQ?",
"q_zh":"Csn 和 SamyQ 哪個訊號肽比較好？",
"type":"compare",
"tier":"B",
"pages":[
"results",
"engineering"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"both tested",
"two variables changed",
"never compared directly"
],
"kw_zh":[
"兩個都測",
"同時改了兩個變數",
"從未直接比較"
],
"a_en":"We cannot say yet. We tested both because the best one for our proteins was unknown. In the DNPH test with PLP, the SamyQ construct gave 48 against 39 for Csn, but those constructs also differ in codon usage, so two things changed at once. Literature gives about 90 percent secretion for SamyQ and 33.8 for Csn, from different systems and never with ACC deaminase.",
"a_zh":"目前還不能說。我們兩個都測，因為不知道哪個最適合我們的蛋白。加 PLP 的 DNPH 檢測中，SamyQ 構築為 48，Csn 為 39，但這兩個構築的密碼子使用也不同，所以同時改了兩個變數。文獻上 SamyQ 約 90% 分泌、Csn 約 33.8%，來自不同系統，也從未搭配 ACC 去胺酶。",
"trap_en":"Declaring SamyQ the winner from the DNPH numbers.",
"trap_zh":"從 DNPH 數字就宣布 SamyQ 勝出。",
"basis":"like standard 'which variant is best and how do you know'",
"dom":"wetlab",
"id":"q262"
},
{
"q_en":"Why light as the switch? Why not a chemical inducer or a temperature-sensing promoter?",
"q_zh":"為什麼用光當開關？為什麼不用化學誘導劑或感溫啟動子？",
"type":"compare",
"tier":"A",
"pages":[
"description",
"engineering"
],
"seat":"wet1",
"backup":"dry",
"kw_en":[
"threshold depends on crop",
"sensing moved out of cell",
"controller decides"
],
"kw_zh":[
"門檻取決於作物",
"感測移出細胞",
"控制器決定"
],
"a_en":"Our first design had the bacteria sense temperature themselves, with a DesK-DesR system. Experts told us containment and precision were problems. And a stress threshold belongs to the crop, not the stress: tuber formation stops above 25 degrees in potato, but sorghum loses yield only above 32.5. So we moved the threshold into a microcontroller that switches a green light. We did not test a chemical inducer.",
"a_zh":"我們最早的設計是讓細菌用 DesK-DesR 系統自己感測溫度。專家告訴我們隔離與精準度都有問題。而且壓力的門檻屬於作物，不是壓力本身：馬鈴薯超過 25 度塊莖就停止形成，高粱要超過 32.5 度才開始減產。所以我們把門檻移到微控制器，由它控制綠光。我們沒有測試化學誘導劑。",
"trap_en":"Claiming light was tested against other inducers; it was a design argument.",
"trap_zh":"宣稱曾拿光和其他誘導方式比較過；那是設計上的論證。",
"basis":"like standard 'why this input signal'",
"dom":"wetlab",
"id":"q263"
},
{
"q_en":"Why Bacillus subtilis and not E. coli to make the protein?",
"q_zh":"為什麼用枯草桿菌，而不是大腸桿菌來生產蛋白？",
"type":"compare",
"tier":"B",
"pages":[
"description",
"biomanufacturing",
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"natural secretor",
"non-pathogenic",
"no head-to-head"
],
"kw_zh":[
"天然分泌者",
"無致病性",
"沒有直接比較"
],
"a_en":"Bacillus subtilis is non-pathogenic and a natural secretor, so the protein goes into the medium and can be collected without breaking cells open. That matches a reactor where protein crosses a membrane and cells stay in. We used E. coli only for cloning, with the expression blocking device keeping cargo off there. We did not run a head-to-head secretion test against E. coli.",
"a_zh":"枯草桿菌無致病性，也是天然的分泌者，蛋白會進到培養液，不必破壞細胞就能收集。這符合蛋白穿過膜、細胞留在內側的反應器設計。我們只把大腸桿菌用於選殖，並用表現阻擋裝置讓目標基因在那裡不表現。我們沒有做與大腸桿菌直接比較的分泌測試。",
"trap_en":"Claiming Bacillus secretes better than E. coli with data; there is none on the wiki.",
"trap_zh":"宣稱有數據顯示枯草桿菌分泌比大腸桿菌好；wiki 上沒有。",
"basis":"like standard 'why this chassis over the usual one'",
"dom":"wetlab",
"id":"q264"
},
{
"q_en":"Why electroporation? Why not natural transformation?",
"q_zh":"為什麼用電穿孔？為什麼不用自然轉形？",
"type":"compare",
"tier":"B",
"pages":[
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"strain variability",
"10 kb plasmid",
"natural transformation untried"
],
"kw_zh":[
"菌株差異",
"10 kb 質體",
"自然轉形未試"
],
"a_en":"Standard transformation in Bacillus varies a lot between strains, and electroporation was more controllable, so we optimised it per strain. The cost showed with the 10 kb Level 2 plasmid: we found electroporation extremely difficult. Our own write-up says natural transformation might have been easier and faster. We did not test it.",
"a_zh":"標準的枯草桿菌轉形在不同菌株間差異很大，電穿孔比較可控，所以我們逐株優化。代價在 10 kb 的 Level 2 質體上顯現：我們發現電穿孔極為困難。我們自己的紀錄也說自然轉形可能更容易、更快。我們沒有測試它。",
"trap_en":"Saying natural transformation would not have worked; it was not tried.",
"trap_zh":"說自然轉形行不通；其實根本沒試。",
"basis":"like standard 'why not the alternative method'",
"dom":"wetlab",
"id":"q265"
},
{
"q_en":"Why do you test culture supernatant and not purified protein?",
"q_zh":"為什麼測試培養上清液，而不是純化後的蛋白？",
"type":"compare",
"tier":"B",
"pages":[
"experiments",
"results"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"protein in medium",
"purification untested",
"dose in dilutions"
],
"kw_zh":[
"蛋白在培養液中",
"純化沒有結果",
"以稀釋倍數表示劑量"
],
"a_en":"The design is protein in the medium crossing a membrane, so supernatant is the product. We have a Ni-NTA purification and dialysis sheet, but it produced no result on the wiki, and neither did large-scale extraction or the Bradford assay. The hydroponic plant trials used dilutions of culture against a plasmid-free WB800 culture. So we can state a dilution, not a mass of protein per plant.",
"a_zh":"設計上就是蛋白在培養液中穿過膜，所以上清液就是產品。我們有 Ni-NTA 純化與透析流程，但 wiki 上沒有產出結果，大量萃取與 Bradford 測定也沒有。水耕的植物實驗用的是培養液的稀釋，對照是不含質體的 WB800 培養液。所以我們能說稀釋倍數，不能說每株植物的蛋白質量。",
"trap_en":"Saying plants were treated with purified enzyme because one Results line says so.",
"trap_zh":"因為 Results 有一句這麼寫，就說植物是用純化酵素處理。",
"basis":"like standard 'what exactly did you apply to the plants'",
"dom":"wetlab",
"id":"q266"
},
{
"q_en":"Can your system make proteins other than these three?",
"q_zh":"你們的系統能生產這三個以外的蛋白嗎？",
"type":"boundary",
"tier":"A",
"pages":[
"parts",
"contribution",
"description"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"modular design",
"open cassette",
"not yet demonstrated"
],
"kw_zh":[
"模組化設計",
"可替換卡匣",
"尚未證明"
],
"a_en":"The design is modular, so promoters, sensors and cargos can be swapped independently. We registered an open cassette, with an sfGFP and mScarlet-I dropout where the cargo goes, so a future team can add its own protectant. But it is a Draft entry and we have not shown another protein through it. Only ACC deaminase has been put behind the green-light promoter.",
"a_zh":"設計是模組化的，啟動子、感測器與目標蛋白可以各自替換。我們登錄了一個開放卡匣，目標蛋白位置放的是 sfGFP 加 mScarlet-I 的替換區，讓未來團隊放入自己的保護蛋白。但它是 Draft 狀態，我們也沒有證明其他蛋白可以通過它。目前只有 ACC 去胺酶放在綠光啟動子之後。",
"trap_en":"Saying 'yes, any protein' without noting only ACCD was tested light-gated.",
"trap_zh":"只說「可以，任何蛋白」，沒提只有 ACCD 測過光控。",
"basis":"like standard 'is the platform general'",
"dom":"wetlab",
"id":"q267"
},
{
"q_en":"Could you put BoPep4 or LEA14 under the light switch?",
"q_zh":"你們可以把 BoPep4 或 LEA14 放到光開關之後嗎？",
"type":"boundary",
"tier":"B",
"pages":[
"description",
"parts",
"results"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"built as parts",
"only ACCD light-gated",
"BoPep4 harms without stress"
],
"kw_zh":[
"已做成零件",
"只有 ACCD 受光控",
"無逆境時 BoPep4 有害"
],
"a_en":"They are built as parts for later integration, but only ACC deaminase has run light-gated. LEA14 and BoPep4 were made behind the constitutive promoter and secreted by WB800. One caution from our plant data: BoPep4 alone slowed Arabidopsis growth when there was no stress. That suggests a leaky switch would matter more for BoPep4. We have not tested it light-gated.",
"a_zh":"它們已做成零件，準備之後整合，但只有 ACC 去胺酶跑過光控。LEA14 和 BoPep4 是放在持續表現啟動子後面，由 WB800 分泌。植物數據有一個提醒：沒有逆境時，單獨施用 BoPep4 會減緩 Arabidopsis 生長。這表示開關若有漏表現，對 BoPep4 的影響會更大。我們沒有測試過它的光控版本。",
"trap_en":"Implying all three proteins are already on the light switch.",
"trap_zh":"暗示三個蛋白都已經接在光開關上。",
"basis":"like standard 'what if you swap the cargo'",
"dom":"wetlab",
"id":"q268"
},
{
"q_en":"Would your strain keep the plasmid on a farm, without antibiotic?",
"q_zh":"你們的菌株在農場沒有抗生素的情況下能保有質體嗎？",
"type":"boundary",
"tier":"B",
"pages":[
"engineering",
"results"
],
"seat":"wet1",
"backup":"hw",
"kw_en":[
"erythromycin in every run",
"second growth at 47 h",
"no antibiotic-free run"
],
"kw_zh":[
"每次都加 erythromycin",
"47 小時後再生長",
"沒有無抗生素實驗"
],
"a_en":"We do not know. Every reactor run used erythromycin at 5 micrograms per millilitre. In our first run the culture grew a second time after about 47 hours, which we think was erythromycin breaking down and cells shedding the plasmid. When we topped up erythromycin each morning in the later 77-hour run, that second phase disappeared. The wiki shows no antibiotic-free run, so plasmid stability without selection is open.",
"a_zh":"我們不知道。每次反應器運轉都用 5 微克／毫升的 erythromycin。第一次運轉在約 47 小時後培養物又長了一次，我們認為是 erythromycin 分解、細胞丟掉質體。後來 77 小時的運轉每天早上補充 erythromycin，第二段生長就消失了。wiki 上沒有無抗生素的實驗，所以沒有選擇壓力下質體是否穩定仍是未知。",
"trap_en":"Assuming the plasmid is stable because the strain grew well.",
"trap_zh":"因為菌長得好就假設質體穩定。",
"basis":"like standard 'what about real-world deployment'",
"dom":"wetlab",
"id":"q269"
},
{
"q_en":"How did low protein yield change what you did in the lab?",
"q_zh":"蛋白產量低如何改變你們在實驗室的做法？",
"type":"integrate",
"tier":"A",
"pages":[
"engineering",
"results"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"50 000 variants folded",
"8 cassettes ordered",
"gain shrank after RiboJ"
],
"kw_zh":[
"模擬 50 000 個變體",
"訂購 8 個卡匣",
"換 RiboJ 後增益縮小"
],
"a_en":"Low yield sent the cargo sequence to our dry lab. They folded about 50 000 recoded variants per construct and we ordered eight cassettes, predicted to open the ribosome start site 1.3 to 1.9 times. Then we built them behind RiboJ plus RBS0 instead of MF001, and most of the predicted gain went away. In ELISA, recoded ACC deaminase was lower than wild type, about 9 against 12 to 13, while BoPep4 2.1 and 2.2 were higher.",
"a_zh":"產量低，把目標蛋白序列送到了乾實驗室。他們對每個構築模擬約 50 000 個重新編碼的變體，我們訂購了八個卡匣，預測可使核糖體起始位開放 1.3 至 1.9 倍。之後我們把它們建在 RiboJ 加 RBS0 後面，而不是 MF001，大部分預測的增益就消失了。ELISA 中，重新編碼的 ACC 去胺酶低於野生型，約 9 對 12 至 13，BoPep4 2.1 與 2.2 則較高。",
"trap_en":"Saying codon optimisation 'improved yield' across the board.",
"trap_zh":"說密碼子優化全面「提高了產量」。",
"basis":"like standard 'how did modelling change experiments'",
"dom":"wetlab",
"id":"q270"
},
{
"q_en":"How did protein design change what you built? For example, where does the His tag go on BoPep4?",
"q_zh":"蛋白設計如何改變你們的建構？例如 BoPep4 的 His 標籤放在哪裡？",
"type":"integrate",
"tier":"A",
"pages":[
"protein-design",
"engineering",
"results"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"design says N-terminal tag",
"built cassettes say C-terminal",
"records disagree"
],
"kw_zh":[
"設計說 N 端標籤",
"建構寫 C 端",
"紀錄互相矛盾"
],
"a_en":"Protein design said put the tag on the front, because a C-terminal tag caps the group that makes BoPep4's strongest contact with its receptor. But our built cassettes are described as SamyQ-BoPep4-Histag with a C-terminal tag, and our own records disagree on tag position. So the simulation and the wet lab conflict, and no activity assay is on record for the BoPep4 variants to settle it. I would say that openly.",
"a_zh":"蛋白設計建議把標籤放在前面，因為 C 端標籤會蓋住 BoPep4 與受體最強接觸的那個基團。但我們建好的卡匣寫的是 SamyQ-BoPep4-Histag，標籤在 C 端，而且我們自己的紀錄對標籤位置的描述也不一致。所以模擬和濕實驗互相衝突，而且 BoPep4 變體沒有活性檢測紀錄可以釐清。我會公開說明這點。",
"trap_en":"Saying the wet lab followed the design; the tag position suggests it did not for BoPep4.",
"trap_zh":"說濕實驗依照設計做；標籤位置顯示 BoPep4 並沒有。",
"basis":"like Munich 2025: 'how did the model change the build'",
"dom":"wetlab",
"id":"q271"
},
{
"q_en":"How did the reactor results change your wet-lab plan?",
"q_zh":"反應器的結果如何改變你們濕實驗的計畫？",
"type":"integrate",
"tier":"A",
"pages":[
"engineering"
],
"seat":"wet2",
"backup":"hw",
"kw_en":[
"168 switched to WB800",
"shell equals lumen",
"sample shell only"
],
"kw_zh":[
"168 改成 WB800",
"殼側等於管腔",
"只取殼側"
],
"a_en":"Three changes. First, 168 gave barely detectable ACC deaminase in the reactor, so we moved to WB800. Second, we added the DNPH assay on advice, to show the protein is active, not only present. Third, one WB800 run read 10.7 micrograms per millilitre on the lumen side and 10.5 on the shell side, and a later run agreed, so we sample only the shell side. It removes a contamination route.",
"a_zh":"三個改變。第一，168 在反應器中幾乎偵測不到 ACC 去胺酶，所以改用 WB800。第二，依建議加入 DNPH 檢測，證明蛋白有活性，而不只是存在。第三，一次 WB800 運轉管腔側為 10.7 微克／毫升、殼側為 10.5，之後一次運轉也一致，所以我們只取殼側樣本。這也去掉了一條污染途徑。",
"trap_en":"Forgetting that only two runs back the 'shell equals lumen' decision.",
"trap_zh":"忘了「殼側等於管腔」的決定只有兩次運轉支持。",
"basis":"like standard 'how did one subsystem feed back to another'",
"dom":"wetlab",
"id":"q272"
},
{
"q_en":"Your Parts page says seven Level 1 parts are sequence-confirmed; another page says nine. Which is right?",
"q_zh":"Parts 頁面說七個 Level 1 零件已定序確認，另一頁說九個。哪個才對？",
"type":"gap",
"tier":"A",
"pages":[
"parts",
"biomanufacturing",
"development",
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"pages disagree",
"Level 2 not sequenced",
"show the gels"
],
"kw_zh":[
"頁面互相不一致",
"Level 2 沒有定序",
"拿出膠圖"
],
"a_en":"I would not defend one number. Engineering is the most detailed: Level 0 and Level 1 clones were checked by colony PCR and sequencing, and no Level 2 construct is sequenced end to end. Parts says seven, Biomanufacturing says nine, and Development says Level 2 sequencing had not yet returned. Those pages were written at different times. I can show the gels and say exactly what is and is not sequenced.",
"a_zh":"我不會硬護某一個數字。Engineering 最詳細：Level 0 和 Level 1 選殖株經菌落 PCR 與定序檢查，沒有任何 Level 2 構築經過全長定序。Parts 說七個，Biomanufacturing 說九個，Development 說 Level 2 定序尚未回來。這些頁面是在不同時間寫的。我可以拿出膠圖，並明確說哪些有定序、哪些沒有。",
"trap_en":"Picking a number to look consistent, or saying everything was sequenced.",
"trap_zh":"為了看起來一致而挑一個數字，或說全部都定序過。",
"basis":"wiki cross-page conflict",
"dom":"wetlab",
"id":"q273"
},
{
"q_en":"Your Results page says green light switches ACC deaminase on. Do your data show that?",
"q_zh":"Results 說綠光能打開 ACC 去胺酶。你們的數據真的顯示這點嗎？",
"type":"gap",
"tier":"A",
"pages":[
"results",
"development"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"green sometimes higher",
"ELISA flat",
"unconfirmed"
],
"kw_zh":[
"綠光有時較高",
"ELISA 持平",
"尚未確認"
],
"a_en":"Only partly. At 13 hours DNPH activity was about 10 under green against 0.7 under red, but at 16 hours it flipped, 1 against 3.7. ELISA protein was flat, 12 to 13 micrograms in all four conditions. Our Development page says light-dependent regulation is unconfirmed. Possible causes are light spilling between wells and red LEDs at 640 nanometres instead of about 672, but we have not tested either. We need biological replicates and loading controls.",
"a_zh":"只有部分。13 小時 DNPH 活性綠光約 10、紅光 0.7，但 16 小時反過來，1 對 3.7。ELISA 蛋白持平，四個條件都是 12 至 13 微克。Development 頁面也寫光控調節尚未確認。可能原因是孔與孔之間漏光，以及紅光 LED 是 640 nm 而不是約 672 nm，但這兩點都沒有測試。我們需要生物重複與上樣量對照。",
"trap_en":"Repeating the headline 'green switches it on' without the 16-hour reversal.",
"trap_zh":"只重複標題「綠光打開它」，不提 16 小時的反轉。",
"basis":"wiki conflict: Results headline vs Development",
"dom":"wetlab",
"id":"q274"
},
{
"q_en":"Is your switch leaky? What does it do in the dark or under red light?",
"q_zh":"你們的開關會漏嗎？在黑暗或紅光下會怎樣？",
"type":"gap",
"tier":"A",
"pages":[
"results",
"development"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"3.0 µg/mL in the dark",
"red also high",
"not a tight switch"
],
"kw_zh":[
"暗處 3.0 µg/mL",
"紅光也很高",
"不是緊密的開關"
],
"a_en":"It looks leaky, or at least not off. After 12 hours in the dark the culture already held about 3.0 micrograms per millilitre of tagged ACC deaminase, against 1.3 for plasmid-free cells, and it did not rise on illumination. In the first Western blots, red light also gave a strong band. We suspect red LED mismatch and light spill, untested. So we claim a built circuit, not a tight switch.",
"a_zh":"看起來有漏表現，至少沒有完全關閉。在暗處培養 12 小時後，培養物已有約 3.0 微克／毫升的標籤 ACC 去胺酶，不含質體的細胞是 1.3，而且照光後並沒有上升。最初的西方墨點中，紅光也出現很強的條帶。我們懷疑是紅光 LED 不匹配與漏光，但未測試。所以我們宣稱的是建好的電路，不是緊密的開關。",
"trap_en":"Claiming red light switches it off.",
"trap_zh":"宣稱紅光能把它關掉。",
"basis":"like standard 'how leaky is your inducible system'",
"dom":"wetlab",
"id":"q275"
},
{
"q_en":"Is your electroporation optimisation statistically solid?",
"q_zh":"你們的電穿孔優化在統計上站得住腳嗎？",
"type":"gap",
"tier":"B",
"pages":[
"engineering",
"results"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"single counts",
"dilutions not comparable",
"small differences"
],
"kw_zh":[
"單次計數",
"稀釋倍數不可比",
"差異很小"
],
"a_en":"No. We report one count per condition and no error bars. Some plates were at a 1 in 2 000 000 dilution and some undiluted, so those counts cannot be compared. For WB800 with AcdS 2.1, 434 against 403 colonies is a small difference. What we can say is that viability falls at high voltage, and the best setting moved with construct and cuvette gap. For 168, no colony PCR is on record.",
"a_zh":"不夠。我們每個條件只報單次計數，沒有誤差棒。有些盤是 1 比 2 000 000 稀釋，有些沒稀釋，這些計數不能互相比較。WB800 搭配 AcdS 2.1，434 對 403 個菌落差異很小。我們能說的是：電壓高時存活率下降，最佳設定隨構築與電擊杯間距而變。168 的測試沒有菌落 PCR 紀錄。",
"trap_en":"Quoting 2.1 kV as 'optimal' for WB800 on a 434 vs 403 difference.",
"trap_zh":"用 434 對 403 的差異就說 2.1 kV 是 WB800 的「最佳」。",
"basis":"like Munich 2025: 'is the difference significant'",
"dom":"wetlab",
"id":"q276"
},
{
"q_en":"Your Results page says the enzyme stays active in the shell for 72 hours. What do the activity data cover?",
"q_zh":"Results 說酵素在殼側 72 小時都有活性。活性數據涵蓋到哪裡？",
"type":"gap",
"tier":"A",
"pages":[
"results",
"development",
"engineering"
],
"seat":"wet2",
"backup":"hw",
"kw_en":[
"ELISA to 72 h",
"DNPH page says 36 h",
"chart vs numbers"
],
"kw_zh":[
"ELISA 到 72 小時",
"DNPH 頁面寫 36 小時",
"圖與數字不一致"
],
"a_en":"The protein part is solid: ELISA read the shell side at nine points to 72 hours, always above the 1.3 control, peaking at 12 hours. For activity, our pages differ. Results says activity holds to 72 hours; Development says DNPH stopped at 36; Engineering says the 48 and 72 hour points are on our chart but not in the rate numbers. Every point is a single well. I would say activity is shown to 36 hours with confidence.",
"a_zh":"蛋白部分很穩：ELISA 在殼側取九個時間點到 72 小時，都高於 1.3 的對照，高峰在 12 小時。活性部分我們各頁說法不同。Results 說活性維持到 72 小時；Development 說 DNPH 只做到 36 小時；Engineering 說 48 和 72 小時的點在圖上，但不在速率數字裡。每個點都是單一孔。我會說有把握的是活性到 36 小時。",
"trap_en":"Repeating '72 hours active' as one clean fact.",
"trap_zh":"把「72 小時有活性」當成一個乾淨的事實重複。",
"basis":"wiki cross-page conflict",
"dom":"wetlab",
"id":"q277"
},
{
"q_en":"You tried two reporter proteins. What happened and what did you learn?",
"q_zh":"你們試了兩個報告蛋白。結果如何？學到了什麼？",
"type":"gap",
"tier":"B",
"pages":[
"engineering",
"results"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"AmilCP colourless",
"GanA never obtained",
"test protectants directly"
],
"kw_zh":[
"AmilCP 無顏色",
"GanA 始終做不出",
"直接測保護蛋白"
],
"a_en":"Both failed. AmilCP constructs were sequence-verified but cells stayed colourless, with absorbance at 588 nanometres 0.082 against 0.081. We think it folds too fast for the Sec pathway, but did not test that. GanA never gave a sequence-verified clone: 24 colonies, no band at the right size. A seven-part reaction cost more time than it saved, so we tested the protectants directly by Western blot and ELISA.",
"a_zh":"兩個都失敗了。AmilCP 構築經定序正確但菌體沒有顏色，588 nm 吸光度 0.082 對 0.081。我們認為它折疊太快，Sec 路徑運不出去，但沒有驗證。GanA 始終沒有得到定序正確的選殖株：24 個菌落，沒有大小正確的條帶。七個零件的反應花的時間比省下的多，所以我們改用西方墨點與 ELISA 直接測保護蛋白。",
"trap_en":"Hiding the failures or blaming 'bad luck'.",
"trap_zh":"隱藏失敗，或歸咎於運氣不好。",
"basis":"like standard 'what failed and what did you learn'",
"dom":"wetlab",
"id":"q278"
},
{
"q_en":"Your ACC deaminase should be about 41 kDa. Why do some of your blots show bands near 100?",
"q_zh":"你們的 ACC 去胺酶應該約 41 kDa。為什麼有些墨點的條帶接近 100？",
"type":"gap",
"tier":"B",
"pages":[
"results",
"engineering"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"reactor blot 42 kDa",
"light-plate blots 75 to 100",
"oligomer idea untested"
],
"kw_zh":[
"反應器墨點 42 kDa",
"光盤墨點 75 至 100",
"寡聚體想法未驗證"
],
"a_en":"Good catch. The reactor blot shows a band near 42 kilodaltons, matching the expected size. The light-plate blots show bands just below 100, or between 75 and 100. We also saw our Csn construct run lower than the SamyQ one. We suspect oligomers or aggregates, since the enzyme can form them, but we could not quantify aggregation, so it is untested. The larger SamyQ form was still active in DNPH.",
"a_zh":"好問題。反應器墨點的條帶接近 42 kDa，符合預期大小。光盤墨點的條帶在 100 kDa 下方，或 75 至 100 之間。我們也看到 Csn 構築跑得比 SamyQ 構築低。我們懷疑是寡聚體或聚集體，因為這個酵素會形成它們，但我們無法量化聚集，所以沒有驗證。較大的 SamyQ 形式在 DNPH 中仍有活性。",
"trap_en":"Saying the band is 'the right protein' without addressing the size mismatch.",
"trap_zh":"不處理大小不符，就說那條帶「是正確的蛋白」。",
"basis":"like Munich 2025: 'why is the band at the wrong size'",
"dom":"wetlab",
"id":"q279"
},
{
"q_en":"What is the next step for protein yield?",
"q_zh":"蛋白產量的下一步是什麼？",
"type":"impact",
"tier":"A",
"pages":[
"engineering",
"results"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"yield is low",
"peak at 12 h then falls",
"variant panel unassayed"
],
"kw_zh":[
"產量偏低",
"12 小時後下降",
"變體組未檢測"
],
"a_en":"Honestly, yield is low: shell-side ACC deaminase peaked around 6.5 micrograms per millilitre at 12 hours and then fell, so a longer run is not a larger harvest. Our own write-up points to expression elements such as promoter strength. We also built ten BoPep4 and LEA14 variants, including two designed as weak controls, but the activity assay to rank them has not been run. That is what we owe.",
"a_zh":"老實說，產量偏低：殼側 ACC 去胺酶在 12 小時達約 6.5 微克／毫升高峰後下降，所以跑更久不會收穫更多。我們自己的紀錄指出可以優化啟動子強度等表現元件。我們也做了十個 BoPep4 和 LEA14 的變體，包含兩個設計成弱活性的對照，但可以替它們排序的活性檢測還沒進行。這是我們欠的工作。",
"trap_en":"Promising a yield target; the wiki states none.",
"trap_zh":"承諾一個產量目標；wiki 沒有提出任何目標。",
"basis":"like standard 'what is next'",
"dom":"wetlab",
"id":"q280"
},
{
"q_en":"What can a future iGEM team reuse from your wet-lab work?",
"q_zh":"未來的 iGEM 團隊可以重用你們濕實驗的哪些成果？",
"type":"impact",
"tier":"A",
"pages":[
"parts",
"contribution",
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"35 Registry parts",
"strain-specific protocols",
"constitutive module first"
],
"kw_zh":[
"35 個 Registry 零件",
"分菌株的流程",
"先建持續表現模組"
],
"a_en":"Thirty-five Registry parts, from cargo sequences to the Level 2 device, built on 14 earlier parts. We also give strain-specific electroporation protocols for 168 and WB800, the DNPH assay scaled to a 96-well plate, and an open cassette for new cargo. Our advice is the order we learned: build the constitutive expression module, confirm the cargo, then put the light circuit in front.",
"a_zh":"35 個 Registry 零件，從目標蛋白序列到 Level 2 裝置，建立在 14 個舊零件之上。我們也提供 168 和 WB800 各自的電穿孔流程、縮小到 96 孔盤的 DNPH 檢測，以及放新蛋白用的開放卡匣。我們的建議是我們學到的順序：先建持續表現模組、確認目標蛋白，再把光電路接在前面。",
"trap_en":"Listing parts without saying which are characterised and which only 'Experiment' or 'Design'.",
"trap_zh":"只列零件，沒說哪些有特性分析、哪些只是 Experiment 或 Design 狀態。",
"basis":"like standard 'contribution to the community'",
"dom":"wetlab",
"id":"q281"
},
{
"q_en":"If you redid the cloning, what would you change first?",
"q_zh":"如果重做選殖，你們會先改什麼？",
"type":"impact",
"tier":"A",
"pages":[
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"avoid 10 kb electroporation",
"validate every module",
"fix glycerol stocks"
],
"kw_zh":[
"避開 10 kb 電穿孔",
"驗證每個模組",
"修正甘油菌種"
],
"a_en":"Three things, all in our own write-up. First, electroporating a plasmid over 10 kb was extremely difficult, so we would look at natural transformation. Second, one positive module does not tell you the others are right, so we would validate every module. Third, we could not recover the ABDI strain from its glycerol stock and had to re-electroporate, so we would fix our glycerol stock preparation and storage.",
"a_zh":"三件事，都在我們自己的紀錄裡。第一，電穿孔超過 10 kb 的質體極為困難，所以我們會研究自然轉形。第二，一個模組呈陽性不代表其他模組正確，所以我們會驗證每一個模組。第三，ABDI 菌株無法從甘油菌種復活，只能重新電穿孔，所以我們會修正甘油菌種的製備與保存。",
"trap_en":"Answering with only success stories.",
"trap_zh":"只講成功的故事。",
"basis":"like standard 'what would you do differently'",
"dom":"wetlab",
"id":"q282"
},
{
"q_en":"What is the virtual model in your digital twin? If I unplug the sensors, what does it still know?",
"q_zh":"你們 digital twin 裡的虛擬模型到底是什麼？如果把感測器拔掉，它還知道什麼？",
"type":"fact",
"tier":"A",
"pages":[
"software",
"drylab-notebook"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"state estimate",
"growth prior",
"batch record"
],
"kw_zh":[
"狀態估計",
"生長先驗",
"批次紀錄"
],
"a_en":"Good question. The virtual model is a set of models plus a record, not the sensors. Unplugged, it still holds the logistic growth prior from the light plate, whatever state the Kalman filter last estimated, the stored batch record of past runs, and the weather forecast. It cannot know the current OD, so it can only project forward from the prior, and its sensor alarm would be blind. Today a person still decides.",
"a_zh":"好問題。虛擬模型是一組模型加上紀錄，不是感測器本身。拔掉感測器後，它仍保有光照盤得到的 logistic 生長先驗、Kalman 濾波器最後估計的狀態、過去實驗的批次紀錄，以及氣象預報。但它不知道目前的 OD，只能從先驗往前推，感測器警報也失效。目前仍是由人做決定。",
"trap_en":"Saying the twin keeps knowing the culture without sensors. It only projects from a prior and old state.",
"trap_zh":"說成沒有感測器 twin 也能知道培養狀況；其實只能憑先驗與舊狀態往前推。",
"basis":"team's own question, Bioreactors sheet (Timmy); answer assembled from software, no direct wiki statement",
"dom":"drylab",
"id":"q283"
},
{
"q_en":"What does your fault-detection autoencoder do, and how early did it catch a problem?",
"q_zh":"你們的故障偵測 autoencoder 在做什麼？提早多久抓到問題？",
"type":"fact",
"tier":"A",
"pages":[
"software",
"development"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"26.7 h lead",
"6.1% false alarms",
"trained on healthy 120 h"
],
"kw_zh":[
"提前 26.7 小時",
"誤報 6.1%",
"用健康 120 小時訓練"
],
"a_en":"It flagged the failing in-line photometer 26.7 hours before the OD channel gave out, at a 6.1% false-alarm rate on unseen quiet windows. We trained it only on the healthy first 120 hours of a 434-hour run. The limit is that this is one run and one failure, so we have not shown it generalizes.",
"a_zh":"它在 OD 通道失效前 26.7 小時就標出 in-line photometer 異常，在沒看過的平靜時段誤報率 6.1%。我們只用 434 小時實驗中健康的前 120 小時訓練。限制是這只有一次實驗、一次故障，還不能說它能推廣。",
"trap_en":"Forgetting the false-alarm rate or claiming it works on any fault.",
"trap_zh":"忘了說誤報率，或宣稱它能抓任何故障。",
"basis":"like INSA Lyon 2022: how do hardware and software work together",
"dom":"drylab",
"id":"q284"
},
{
"q_en":"How do you know your forecast is better than just assuming nothing changes?",
"q_zh":"你們怎麼知道預測比「假設什麼都不變」更好？",
"type":"validate",
"tier":"A",
"pages":[
"software",
"results"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"persistence baseline",
"0.040 vs 0.067",
"tied at 2 h on run 7"
],
"kw_zh":[
"persistence 基準",
"0.040 對 0.067",
"run 7 的 2 小時打平"
],
"a_en":"We scored it against persistence, which predicts no change. On the 102-hour run the Kalman filter's error at 2 hours was 0.040 against 0.067, 41% lower, and still better at 12 hours. On a repeat run with settings unchanged it tied at 2 hours and won by 24% at 8 and 12 hours. It forecasts the photometer reading, not biomass.",
"a_zh":"我們拿它和 persistence（預測不變）比較。在 102 小時的實驗中，Kalman 濾波器 2 小時的誤差是 0.040，persistence 是 0.067，少 41%，到 12 小時仍較好。在參數不變的重複實驗中，2 小時打平，8 與 12 小時好 24%。它預測的是 photometer 讀值，不是生物量。",
"trap_en":"Quoting only the 41% and hiding that run 7 tied at 2 h.",
"trap_zh":"只講 41%，沒說 run 7 在 2 小時打平。",
"basis":"like TAU-Israel 2025: how do you validate predictive accuracy",
"dom":"drylab",
"id":"q285"
},
{
"q_en":"You say you pre-registered a prediction. What exactly did you register, and did it pass?",
"q_zh":"你們說有事先登記預測，登記了什麼？有通過嗎？",
"type":"validate",
"tier":"A",
"pages":[
"software",
"development"
],
"seat":"dry",
"backup":"plant",
"kw_en":[
"written 1 Oct",
"0.2705 to 0.3300",
"0.286 passed"
],
"kw_zh":[
"10 月 1 日登記",
"0.2705 到 0.3300",
"0.286 通過"
],
"a_en":"On 1 October, before any WB800 bioreactor run, we registered a growth rate of 0.2986 per hour with a 90% interval of 0.2705 to 0.3300. Run 6 gave 0.286 ± 0.010, inside it. Only that rate was scored. The curve shape and time to OD 0.5 missed, and a straight line fit the window as well as an exponential.",
"a_zh":"10 月 1 日，在任何 WB800 生物反應器實驗之前，我們登記了生長速率 0.2986 h-1，90% 區間 0.2705 到 0.3300。run 6 得到 0.286 ± 0.010，落在區間內。但只有速率計分，曲線形狀與到達 OD 0.5 的時間都沒中，而且在擬合時段內直線和指數擬合得一樣好。",
"trap_en":"Saying the whole forecast passed. Only r was scored.",
"trap_zh":"說整個預測都通過；其實只有 r 計分。",
"basis":"like TAU-Israel 2025: pre-registered; partial blind test",
"dom":"drylab",
"id":"q286"
},
{
"q_en":"Why does your autoencoder have two separate axes?",
"q_zh":"為什麼你們的 autoencoder 要分成兩條軸？",
"type":"design",
"tier":"A",
"pages":[
"software"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"reference beam",
"growth rate",
"tell instrument from culture"
],
"kw_zh":[
"參考光束",
"生長速率",
"分辨儀器與培養物"
],
"a_en":"Because a falling OD could be the culture or a failing instrument. The sensor axis watches the reference beam, which never passes through the culture. The process axis watches growth rate. At 120 to 160 hours only the process axis fired and the density really fell. At 220 to 240 hours only the sensor axis fired while OD still looked clean.",
"a_zh":"因為 OD 下降可能是培養物的問題，也可能是儀器壞了。感測器軸看不經過培養液的參考光束，製程軸看生長速率。120 到 160 小時只有製程軸響，密度確實下降；220 到 240 小時只有感測器軸響，但 OD 看起來還很正常。",
"trap_en":"Describing it as one anomaly score. The two axes are the point.",
"trap_zh":"把它講成單一的異常分數；兩條軸才是重點。",
"basis":"design check",
"dom":"drylab",
"id":"q287"
},
{
"q_en":"Why did you choose a Kalman filter instead of a simple fitted curve or a bigger model?",
"q_zh":"為什麼選 Kalman 濾波器，而不是簡單的擬合曲線或更大的模型？",
"type":"compare",
"tier":"A",
"pages":[
"software"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"old data weighs too much",
"exponential over-assumes",
"weighs noise"
],
"kw_zh":[
"舊資料權重太大",
"指數假設過頭",
"權衡雜訊"
],
"a_en":"We compared four models. A global straight line weighs old data as much as new, and an exponential assumes growth keeps accelerating. A local linear fit came close. The Kalman filter also weighs each reading against its noise, so we kept it. We did not test a neural forecaster, so we cannot say how it would compare.",
"a_zh":"我們比較了四種模型。全域直線把舊資料和新資料看得一樣重，指數則假設生長一直加速；局部線性很接近。Kalman 還會把每筆讀值和雜訊一起權衡，所以我們選它。我們沒有測試神經網路預測器，所以不知道它會比較如何。",
"trap_en":"Claiming it beat deep learning. We never ran that comparison.",
"trap_zh":"宣稱它贏過深度學習；我們沒做過這個比較。",
"basis":"like SUSTech 2025: could a simpler model have done it",
"dom":"drylab",
"id":"q288"
},
{
"q_en":"Why build your own twin instead of using commercial bioprocess software?",
"q_zh":"為什麼自己做 twin，不用商業的生物製程軟體？",
"type":"compare",
"tier":"A",
"pages":[
"software"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"no head-to-head",
"runs unattended on board",
"MIT licence"
],
"kw_zh":[
"沒有直接比較",
"在板子上無人值守",
"MIT 授權"
],
"a_en":"We did not benchmark against commercial software, so I cannot claim ours is better. What we built is for a reactor beside a rice field with no operator: it runs on an Arduino Uno Q, logs every reading, judges whether sensor data can be trusted, and is released under the MIT licence so other teams can reuse it.",
"a_zh":"我們沒有和商業軟體做過比較，所以不能說自己的比較好。我們做的是給稻田旁、沒有操作員的反應器用：它跑在 Arduino Uno Q 上，記錄每筆讀值，判斷感測資料可不可信，並以 MIT 授權釋出讓其他隊伍重用。",
"trap_en":"Claiming it is better than commercial tools without a comparison.",
"trap_zh":"沒有比較就說自己比商業工具好。",
"basis":"like INSA Lyon 2022: software and hardware together",
"dom":"drylab",
"id":"q289"
},
{
"q_en":"Would your digital twin work on a different organism or a bigger reactor?",
"q_zh":"你們的 digital twin 能用在別的菌種或更大的反應器嗎？",
"type":"boundary",
"tier":"A",
"pages":[
"software",
"model"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"only B. subtilis runs",
"rate moved, ceiling did not",
"not tested"
],
"kw_zh":[
"只有枯草桿菌",
"速率轉移、上限沒有",
"沒有測試"
],
"a_en":"We have not tested that. Every run so far is Bacillus subtilis, 168 or WB800, in a small hollow fiber loop of 300 mL to 1 L. The closest thing we did is carry the plate growth rate into the bioreactor: the rate transferred, but the ceiling did not. The 20-liter unit in the Math Model is a sizing figure, and the wiki records no run at that size.",
"a_zh":"我們沒有測試過。到目前為止所有實驗都是枯草桿菌（168 或 WB800），在 300 mL 到 1 L 的小型中空纖維迴路裡。最接近的是把培養盤的生長速率帶進生物反應器：速率可以轉移，上限不行。Math Model 裡的 20 公升單元是估算用的尺寸，wiki 沒有這個規模的實驗紀錄。",
"trap_en":"Saying it scales. Only paper sizing exists.",
"trap_zh":"說它可以放大；目前只有紙上估算。",
"basis":"like Estonia/XJTLU: why this organism; scale-up probe",
"dom":"drylab",
"id":"q290"
},
{
"q_en":"How did the light plate experiment change what your twin does?",
"q_zh":"光照盤實驗如何改變你們 twin 的做法？",
"type":"integrate",
"tier":"A",
"pages":[
"software",
"drylab-notebook"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"growth prior",
"7% vs 29-68%",
"rate transferred"
],
"kw_zh":[
"生長先驗",
"7% 對 29-68%",
"速率可轉移"
],
"a_en":"It gave the twin a starting guess. A logistic fit to six light arms, r of 0.299 per hour, predicted each held-out arm's 24-hour OD within 7% from its first 8 hours, against 29 to 68% error without it. We registered that fit, and the bioreactor rate came back at 0.286. The plate ceiling did not carry over.",
"a_zh":"它給了 twin 一個起始猜測。用六個光照組擬合的 logistic（r 為 0.299 h-1），只看前 8 小時就能把被留出那組的 24 小時 OD 預測到 7% 以內，沒有先驗時誤差是 29 到 68%。我們登記了這個擬合，生物反應器的速率是 0.286。培養盤的上限沒有轉移。",
"trap_en":"Saying the plate shows green light controls production. It was a growth readout only.",
"trap_zh":"說光照盤證明綠光控制生產；它只是生長的讀值。",
"basis":"like Heidelberg 2025: both directions, lab changes model",
"dom":"drylab",
"id":"q291"
},
{
"q_en":"What can your twin not do yet?",
"q_zh":"你們的 twin 還有什麼做不到？",
"type":"gap",
"tier":"A",
"pages":[
"software",
"development"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"loop not closed",
"green light not integrated",
"DO and loop temperature"
],
"kw_zh":[
"閉環未完成",
"綠光未整合",
"溶氧與迴路溫度"
],
"a_en":"Quite a lot, and we list it. The loop is not closed: a person decides every induction, and the green light is not integrated into the bioreactor. Dissolved oxygen calibration did not hold, the loop temperature probe was not responding, light inside the culture is not measured, and the photometer loses its beam above about OD 2.7 to 3.3.",
"a_zh":"有不少，而且我們都列出來了。閉環還沒完成：每次誘導都由人決定，綠光也還沒整合到生物反應器。溶氧校正沒有維持、迴路溫度探頭沒有回應、培養液內的光強沒有量測，而且 photometer 在大約 OD 2.7 到 3.3 以上會失去光束。",
"trap_en":"Saying the system is automatic. A person still decides.",
"trap_zh":"說系統是全自動；其實仍由人決定。",
"basis":"honesty probe",
"dom":"drylab",
"id":"q292"
},
{
"q_en":"How accurate is your leaf sensor?",
"q_zh":"你們的葉片感測器有多準？",
"type":"gap",
"tier":"A",
"pages":[
"software",
"results"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"reads warm, site varies",
"never wetted",
"bench only"
],
"kw_zh":[
"讀值偏高且隨地點變",
"從未弄濕",
"只在實驗桌上"
],
"a_en":"On the bench it reads warmer than the air sensor, by 1.7 and 1.3 degrees at two sites but only 0.5 at the third, so no fixed offset corrects it. The leaf wetness channel read 0.0 percent throughout because we never wetted it, so it is untested. Nothing has been put on a plant yet.",
"a_zh":"在實驗桌上，它比空氣感測器讀得高：兩個地點分別高 1.7 與 1.3 度，第三個地點只高 0.5 度，所以沒有固定的偏差值能校正。葉片濕度通道全程讀 0.0%，因為我們從沒把它弄濕，所以是未測試的。目前還沒有裝到植物上。",
"trap_en":"Quoting a single offset such as 1.5 C. The offset changes by site.",
"trap_zh":"只講單一偏差，例如 1.5 °C；偏差隨地點改變。",
"basis":"like Munich 2025: replicates / calibration",
"dom":"drylab",
"id":"q293"
},
{
"q_en":"Could another team actually run your software?",
"q_zh":"別隊真的能跑你們的軟體嗎？",
"type":"impact",
"tier":"A",
"pages":[
"software"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"MIT licence",
"GitLab repo",
"rig-app and next-twin"
],
"kw_zh":[
"MIT 授權",
"GitLab 倉庫",
"rig-app 與 next-twin"
],
"a_en":"The code is public under the MIT licence on iGEM's GitLab, in two parts: rig-app for the running instrument and next-twin for the browser version. The firmware, backend and interface are v4.2.2, v6.2.2 and v6.2.2 on an Arduino Uno Q. The wiki does not say any outside team has run it yet.",
"a_zh":"程式碼以 MIT 授權公開在 iGEM 的 GitLab，分兩部分：跑儀器的 rig-app 與瀏覽器版的 next-twin。韌體、後端、介面分別是 v4.2.2、v6.2.2、v6.2.2，跑在 Arduino Uno Q 上。wiki 沒有說有外部隊伍用過。",
"trap_en":"Saying others already use it. The wiki does not show that.",
"trap_zh":"說已有別隊在用；wiki 沒有這樣的紀錄。",
"basis":"like Peking 2025: did you publish the code; NJU: has anyone used it",
"dom":"drylab",
"id":"q294"
},
{
"q_en":"How did you build your stress index, and how do you know it works?",
"q_zh":"你們的壓力指數怎麼建立？怎麼知道有效？",
"type":"validate",
"tier":"A",
"pages":[
"model"
],
"seat":"dry",
"backup":"plant",
"kw_en":[
"32,767 combinations",
"held-out years",
"32% less error"
],
"kw_zh":[
"32,767 種組合",
"留出的年份",
"誤差少 32%"
],
"a_en":"We fitted its weights to 25 years of county rice yields. For each crop we tried all 32,767 combinations of fifteen weather stresses and scored each on years it had not seen. In the second crop county error is 32% lower than a no-weather trend. The 2026 first-crop forecast is frozen, but only four of sixteen counties have reported.",
"a_zh":"我們用 25 年縣市稻米產量擬合權重。對每一期稻作，試了十五個天氣壓力因子的全部 32,767 種組合，並用沒看過的年份評分。第二期稻作的縣市誤差比不含天氣的趨勢模型少 32%。2026 年第一期稻作預測已凍結，但十六個縣市只有四個公布。",
"trap_en":"Saying 32% is a prospective result. It is on held-out past years; the blind test has only four counties.",
"trap_zh":"把 32% 說成前瞻性結果；那是留出的過去年份，盲測只有四個縣市。",
"basis":"like TAU-Israel 2025: trend baseline; 32 percent reduction",
"dom":"drylab",
"id":"q295"
},
{
"q_en":"Your Math Model and Geospatial Analysis disagree on payback. Which one is right?",
"q_zh":"Math Model 和 Geospatial Analysis 的回收期不一致，哪一個才對？",
"type":"gap",
"tier":"A",
"pages":[
"model",
"geospatial-analysis"
],
"seat":"dry",
"backup":"biz",
"kw_en":[
"68 years vs 4.9",
"14 times apart",
"different stress definitions"
],
"kw_zh":[
"68 年對 4.9 年",
"相差 14 倍",
"壓力定義不同"
],
"a_en":"We do not know yet, and the Math Model page says so. Its loss figure of US$138 per hectare per crop gives 68 years at full efficacy. The figure it attributes to Geospatial is US$1931, about 4.9 years, 14 times higher. They use different stress definitions and chlorophyll versus yield. A yield endpoint and one stress definition would settle it.",
"a_zh":"目前還不知道，Math Model 頁也這樣寫。它的損失數字每公頃每期 US$138，在效能為 1 時回收期 68 年；它歸給 Geospatial 的數字是 US$1931，約 4.9 年，高 14 倍。兩者壓力定義不同，一個用葉綠素、一個用產量。需要產量終點與統一的壓力定義才能解決。",
"trap_en":"Picking the friendlier number (4.9 years). Neither is established.",
"trap_zh":"挑比較好看的 4.9 年；兩個數字都還沒被確立。",
"basis":"honesty probe; model vs geospatial tension",
"dom":"drylab",
"id":"q296"
},
{
"q_en":"What is your climate volatility index and how was it built?",
"q_zh":"你們的氣候波動指數是什麼？怎麼建立的？",
"type":"design",
"tier":"A",
"pages":[
"geospatial-analysis"
],
"seat":"dry",
"backup":"ihp",
"kw_en":[
"diurnal and seasonal range",
"rainfall variability",
"weights not published"
],
"kw_zh":[
"日溫差與季節溫差",
"降雨變異",
"權重未公布"
],
"a_en":"It is a score of how unstable a place's weather is, built from mean diurnal temperature range, seasonal temperature range, precipitation variability and some other terms. We laid it over parcel maps of farms under two hectares in QGIS. The page does not publish the weights or the full list of terms, so I can describe the idea but not hand over the formula.",
"a_zh":"它是衡量一地天氣有多不穩定的分數，由平均日溫差、季節溫差、降雨變異係數以及其他項目組成。我們在 QGIS 把它疊在兩公頃以下農場的地塊圖上。頁面沒有公布權重與完整項目，所以我能說明概念，但沒辦法給出公式。",
"trap_en":"Giving a specific formula or weights that are not on the page.",
"trap_zh":"說出頁面上沒有的公式或權重。",
"basis":"design check",
"dom":"drylab",
"id":"q297"
},
{
"q_en":"How did the geospatial work change your project?",
"q_zh":"地理空間分析如何改變你們的專案？",
"type":"integrate",
"tier":"A",
"pages":[
"geospatial-analysis",
"model",
"drylab-notebook"
],
"seat":"dry",
"backup":"biz",
"kw_en":[
"99.2% under 2 ha",
"shared ownership",
"tomato vs rice"
],
"kw_zh":[
"99.2% 不到 2 公頃",
"共有模式",
"番茄對稻米"
],
"a_en":"It changed the ownership model and reopened the crop. Because 99.2% of farms are under two hectares, one reactor fleet covering 2.5 hectares cannot be bought by one farm, so we point to a shared asset through farmers' associations. It also showed rice is overproduced, so on 12 October we reopened the question of which crop to map.",
"a_zh":"它改變了擁有模式，也讓作物選擇重新討論。因為 99.2% 的農場不到兩公頃，一組涵蓋 2.5 公頃的設備不是單一農戶買得起，所以我們指向透過農會共有。它也顯示稻米生產過剩，所以 10 月 12 日我們重新檢討要為哪種作物畫地圖。",
"trap_en":"Saying the maps proved demand. They show where risk and small farms overlap.",
"trap_zh":"說地圖證明了需求；它只顯示風險與小農重疊的地方。",
"basis":"like Heidelberg 2025: HP and model in both directions",
"dom":"drylab",
"id":"q298"
},
{
"q_en":"Where would you deploy ReLEAF first?",
"q_zh":"ReLEAF 會先部署在哪裡？",
"type":"impact",
"tier":"A",
"pages":[
"geospatial-analysis",
"model"
],
"seat":"dry",
"backup":"biz",
"kw_en":[
"shared fleets",
"west-central counties",
"crop choice open"
],
"kw_zh":[
"共用設備",
"中西部縣市",
"作物仍未定"
],
"a_en":"We have not fixed a first site. The maps point at the west-central counties, where small farms overlap with high climate volatility and where tomatoes warmed 1.9 to 2.0 degrees on winter nights. The Math Model prices one rice hectare, so the crop is open. Whatever we choose, a fleet serves about 2.5 hectares through an association.",
"a_zh":"我們還沒決定第一個地點。地圖指向中西部縣市：小農與高氣候波動重疊，番茄冬季夜間升溫 1.9 到 2.0 度。Math Model 以一公頃稻田計價，所以作物仍未定。不論選哪個，一組設備約服務 2.5 公頃，透過農會共用。",
"trap_en":"Naming a deployment site as decided.",
"trap_zh":"把部署地點說成已決定。",
"basis":"scale / next step",
"dom":"drylab",
"id":"q299"
},
{
"q_en":"Does the night-time heat finding, 10 percent yield loss per degree, apply to Taiwan?",
"q_zh":"夜間高溫每升一度減產約 10% 的結果，適用台灣嗎？",
"type":"boundary",
"tier":"A",
"pages":[
"geospatial-analysis"
],
"seat":"dry",
"backup":"plant",
"kw_en":[
"IRRI Philippines 2004",
"not a Taiwan measurement",
"Taiwan warming is local"
],
"kw_zh":[
"菲律賓 IRRI 2004",
"不是台灣量測",
"台灣暖化資料是另一回事"
],
"a_en":"Not directly. That 10 percent comes from Peng and colleagues' 25-year record at the IRRI farm in the Philippines, in 2004. We did not measure it in Taiwan. What we did compute for Taiwan is warming: tomato-county winter nights warmed 0.9 to 2.0 degrees between 1961-1990 and 2015-2024. We did not turn that into a yield loss.",
"a_zh":"不能直接套用。那個 10% 來自 Peng 等人 2004 年在菲律賓 IRRI 農場 25 年的紀錄，不是我們在台灣量的。我們針對台灣算的是升溫：番茄產區冬季夜間在 1961-1990 與 2015-2024 之間升溫 0.9 到 2.0 度，但沒有把它換算成減產。",
"trap_en":"Presenting the 10 percent as a Taiwan result.",
"trap_zh":"把 10% 說成台灣的結果。",
"basis":"like IZJU 2025: literature values from a different system",
"dom":"drylab",
"id":"q300"
},
{
"q_en":"How much protectant does one hectare need, and what does the equipment cost?",
"q_zh":"一公頃需要多少保護劑？設備要花多少錢？",
"type":"fact",
"tier":"B",
"pages":[
"model"
],
"seat":"dry",
"backup":"biz",
"kw_en":[
"37.6 kU per application",
"81 L of vessel",
"US$3800 per hectare"
],
"kw_zh":[
"每次 37.6 kU",
"81 L 容器",
"每公頃 US$3800"
],
"a_en":"The model gives 37.6 kU of protectant per application and 339 kU in a nine-pass season, which needs 81 liters of vessel running all season and about US$3800 of capital per hectare. Ten 20-liter units cover 2.5 hectares. These are scenario figures: they all carry a modeled canopy correction of 2.44, so they are not validated rice doses.",
"a_zh":"模型算出每次施用 37.6 kU，九次施用的一季為 339 kU，需要 81 公升容器整季運轉，每公頃資本約 US$3800。十個 20 公升單元可服務 2.5 公頃。這些是情境數字：全部都含 2.44 的模型化冠層校正，所以不是經過驗證的稻田劑量。",
"trap_en":"Quoting the dollar figure without saying it inherits the canopy correction.",
"trap_zh":"只報金額，沒說它承襲了冠層校正。",
"basis":"like Peking 2025: how much of your product is needed",
"dom":"drylab",
"id":"q301"
},
{
"q_en":"Why did you anchor the dose on the experiment that worked rather than the smallest effective dose?",
"q_zh":"為什麼劑量以有效的那次實驗為準，而不是最小有效劑量？",
"type":"design",
"tier":"B",
"pages":[
"model"
],
"seat":"dry",
"backup":"plant",
"kw_en":[
"dose that worked",
"dose never varied",
"one plate would fix it"
],
"kw_zh":[
"有效的那個劑量",
"劑量從沒變過",
"一個培養皿就能解決"
],
"a_en":"Because it is the only dose we have a record for. Experiment 9 applied 1.67 mL across a 78.5 square centimeter plate and varied salt and timing but never the amount, so the smallest dose that works is unknown. A single plate with neat, 1 to 3, 1 to 10 and 1 to 30 arms would locate it, and every row below would move.",
"a_zh":"因為這是我們唯一有紀錄的劑量。實驗 9 在 78.5 平方公分的培養皿上施用 1.67 mL，改變了鹽濃度與時機，但從沒改變施用量，所以最小有效劑量未知。只要一個含原液、1:3、1:10、1:30 的培養皿就能找出來，下面每一列數字都會跟著變。",
"trap_en":"Calling 37.6 kU the minimum or the recommended dose.",
"trap_zh":"把 37.6 kU 說成最小或建議劑量。",
"basis":"like Munich 2025: minimum production; never varied dose",
"dom":"drylab",
"id":"q302"
},
{
"q_en":"How long does the enzyme last after the reactor makes it?",
"q_zh":"反應器做出來的酵素能保存多久？",
"type":"gap",
"tier":"B",
"pages":[
"model"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"no shelf-life measurement",
"fell in one tube",
"rose in a replicated run"
],
"kw_zh":[
"沒有保存期限量測",
"一支試管下降",
"重複實驗反而上升"
],
"a_en":"We do not know. One unreplicated tube fell to 26% in three hours, an apparent half-time of 0.7 to 1.5 hours, while a replicated run rose over eight hours of light. Both measured live culture, not a harvested preparation. Holding a cooled or formulated stock and re-assaying it at 0.5, 1, 2, 4 and 28 hours would answer it.",
"a_zh":"我們不知道。一支沒有重複的試管在三小時內降到 26%，視半衰期 0.7 到 1.5 小時；但有重複的實驗在八小時光照中反而上升。兩者量的都是培養中的活細胞，不是收成後的製劑。把冷藏或調配過的保存液在 0.5、1、2、4、28 小時重新測定才能回答。",
"trap_en":"Quoting a half-life of 1.5 hours as established. It is one tube.",
"trap_zh":"把 1.5 小時半衰期當成確定值；那只是一支試管。",
"basis":"honesty probe",
"dom":"drylab",
"id":"q303"
},
{
"q_en":"How did wet lab data change the math model?",
"q_zh":"濕實驗數據如何改變數學模型？",
"type":"integrate",
"tier":"B",
"pages":[
"model",
"software"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"efficacy 0.58 withdrawn",
"5 h cycle vs 12 h peak",
"activity 22-fold apart"
],
"kw_zh":[
"撤回效能 0.58",
"5 小時對 12 小時高峰",
"活性相差 22 倍"
],
"a_en":"In three ways. An efficacy of 0.58 from Arabidopsis on agar was withdrawn because it cannot bound rice yield. A 72-hour ELISA run peaking at 12 hours questioned our five-hour harvest cycle, and a 12-hour cycle raises capital from US$3800 to US$9120. Two DNPH readings 22-fold apart show the activity term is not settled.",
"a_zh":"有三個方面。阿拉伯芥在培養基上得到的效能 0.58 被撤回，因為它不能界定稻米產量。72 小時 ELISA 在 12 小時達高峰，讓我們質疑五小時收成週期；若為 12 小時，資本從 US$3800 增加到 US$9120。兩次相差 22 倍的 DNPH 讀值，顯示活性項還沒有定論。",
"trap_en":"Saying the lab confirmed the model. Mostly the lab weakened it.",
"trap_zh":"說實驗室證實了模型；多半是實驗室削弱了模型。",
"basis":"like DTU 2025: model changed lab; lab changed model",
"dom":"drylab",
"id":"q304"
},
{
"q_en":"Can a single farm own a ReLEAF reactor?",
"q_zh":"單一農戶能擁有一台 ReLEAF 反應器嗎？",
"type":"impact",
"tier":"B",
"pages":[
"model",
"geospatial-analysis"
],
"seat":"dry",
"backup":"biz",
"kw_en":[
"covers 2.5 ha",
"runs 4.3% of calendar",
"shared through associations"
],
"kw_zh":[
"服務 2.5 公頃",
"只用日曆 4.3%",
"透過農會共用"
],
"a_en":"On our arithmetic, no. A ten-unit fleet covers about 2.5 hectares and runs only 4.3% of the calendar, so one farm's reactor would sit idle most of its life. With 99% of Taiwanese farmers working under two hectares, a shared asset held by a farmers' association is the only structure the numbers allow. Both pages reach that from different directions.",
"a_zh":"依我們的算術，不行。一組十個單元約服務 2.5 公頃，卻只用日曆的 4.3%，單一農戶的反應器大部分時間閒置。台灣 99% 的農民耕地不到兩公頃，由農會持有共用資產是數字唯一允許的結構。兩個頁面從不同方向得到同樣結論。",
"trap_en":"Promising a per-farm product.",
"trap_zh":"承諾每個農戶都有自己的機器。",
"basis":"scale / real world",
"dom":"drylab",
"id":"q305"
},
{
"q_en":"What happens if the forecast only gives you three days notice?",
"q_zh":"如果氣象預報只提前三天，會怎麼樣？",
"type":"boundary",
"tier":"B",
"pages":[
"model"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"5.4 days vs 3",
"bank the stock",
"shelf life controls"
],
"kw_zh":[
"5.4 天對 3 天",
"要預先備貨",
"保存期限是關鍵"
],
"a_en":"Then the reactor cannot wait for the forecast. One hectare takes 5.4 days on ten 20-liter units, so 2.4 days of production come before any forecast that would justify it. It has to produce through the season and use the forecast to decide when stock is released. That makes shelf life the controlling quantity, and we have not measured it.",
"a_zh":"那反應器就不能等預報。一公頃要用十個 20 公升單元花 5.4 天，比任何能支持行動的預報多出 2.4 天。它必須整季持續生產，用預報決定何時使用庫存。這讓保存期限成為關鍵，但我們還沒有量過。",
"trap_en":"Saying the forecast triggers production on demand.",
"trap_zh":"說預報一來就能即時生產。",
"basis":"like Heidelberg 2025: forecast not reactive",
"dom":"drylab",
"id":"q306"
},
{
"q_en":"What did molecular dynamics tell you about your purification tag?",
"q_zh":"分子動力學對你們的純化標籤告訴了你們什麼？",
"type":"fact",
"tier":"B",
"pages":[
"protein-design-molecular-dynamics",
"md-simulations"
],
"seat":"dry",
"backup":"wet1",
"kw_en":[
"C-terminal 6xHis",
"salt bridge gone vs 100%",
"tag moved to N-terminus"
],
"kw_zh":[
"C 端 6xHis",
"鹽橋消失對 100%",
"標籤移到 N 端"
],
"a_en":"It showed a tag on the C-terminus abolishes the contact the peptide depends on. The tagged BoPEP4 passed our original distance gate, but a distance and angle test found the bidentate Asn23 to Arg487 salt bridge missing in every frame, against 100% untagged, because the carboxylate is used up in the bond to the tag. We moved the tag to the N-terminus for the orders after 16 August.",
"a_zh":"它顯示 C 端加標籤會破壞肽依賴的那個接觸。帶標籤的 BoPEP4 通過了原本的距離標準，但用距離加角度檢驗，Asn23 對 Arg487 的雙齒鹽橋在每個畫面都不存在，未加標籤則是 100%，因為羧基被用來與標籤形成鍵結。8 月 16 日之後的訂單我們改成 N 端標籤。",
"trap_en":"Saying all built constructs have the N-terminal tag. June and July cassettes and the Parts list have C-terminal tags.",
"trap_zh":"說所有做出來的構築都是 N 端標籤；6、7 月卡匣與 Parts 清單都是 C 端標籤。",
"basis":"like Peng 2025 style: concrete example of dry lab changing the build",
"dom":"drylab",
"id":"q307"
},
{
"q_en":"How reliable is your molecular dynamics? Did you run replicates?",
"q_zh":"你們的分子動力學可靠嗎？有跑重複嗎？",
"type":"validate",
"tier":"B",
"pages":[
"md-simulations",
"protein-design-molecular-dynamics"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"30 ns, one seed",
"apo noise floor 0.5 A",
"nothing tested at bench"
],
"kw_zh":[
"30 ns、單一種子",
"apo 雜訊底線 0.5 Å",
"沒有實驗驗證"
],
"a_en":"Honestly, limited. Each of the nine runs is 30 nanoseconds with one seed, so a difference between two runs may be two relaxation paths. The apo receptor sets a noise floor of about half an angstrom on receptor-side numbers. 30 ns is far too short to show binding strength. Nothing has been checked at the bench, so this is a hypothesis about what to build next.",
"a_zh":"老實說有限。九條軌跡都只有 30 奈秒、單一種子，兩個結果的差異可能只是兩條不同的鬆弛路徑。apo 受體給出接收器側數字約半埃的雜訊底線。30 ns 遠不足以顯示結合強度。完全沒有在實驗室驗證，所以這只是關於接下來要做什麼的假設。",
"trap_en":"Claiming MD shows binding affinity.",
"trap_zh":"宣稱 MD 顯示了結合強度。",
"basis":"like PekingHSC 2025: verification vs validation",
"dom":"drylab",
"id":"q308"
},
{
"q_en":"Why did you pick the 9-23 version of BoPEP4 as the production peptide?",
"q_zh":"為什麼選 BoPEP4 的 9-23 當生產用的肽？",
"type":"design",
"tier":"B",
"pages":[
"protein-design",
"protein-design-sprints",
"protein-design-molecular-dynamics"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"33% less mass",
"half the charge",
"MD says least stable"
],
"kw_zh":[
"質量少 33%",
"電荷減半",
"MD 顯示最不穩"
],
"a_en":"Mostly manufacturing. Against full length, 9-23 has 33% less mass, one trypsin-type cut site instead of three, and half the positive charge, so less sticks to the producer cells. The cost is a published up to tenfold activity loss, and in our MD it was the least stable untagged rung at 77.1% clamp integrity. So we sent the whole ladder and let the bench decide.",
"a_zh":"主要是為了製造。相較於全長，9-23 質量少 33%、胰蛋白酶型切位只有一個而不是三個、正電荷減半，所以較少黏在生產細胞上。代價是已發表的最多十倍活性損失，而且在我們的 MD 中它是未加標籤構築裡最不穩定的，clamp 完整度 77.1%。所以我們把整個長度系列都送去，讓實驗室決定。",
"trap_en":"Saying 9-23 is the best binder. It was chosen for manufacturability.",
"trap_zh":"說 9-23 是最好的結合者；它是為了可製造性而選的。",
"basis":"design check",
"dom":"drylab",
"id":"q309"
},
{
"q_en":"Why didn't you just rank your peptide designs by docking score?",
"q_zh":"為什麼不直接用對接分數替肽設計排名？",
"type":"compare",
"tier":"B",
"pages":[
"protein-design-sprints",
"protein-design-methodology"
],
"seat":"dry",
"backup":"wet1",
"kw_en":[
"93% length and charge",
"rho +0.05",
"best score on wrong construct"
],
"kw_zh":[
"93% 是長度與電荷",
"rho +0.05",
"最高分卻是錯的構築"
],
"a_en":"Because we audited it and it did not work. HADDOCK score across BoPEP4 variants was 93% explained by length and charge alone, and uncorrelated with published activities, rho about plus 0.05. The C-terminal tag scored best and was the construct chemistry rules out. So we judged constructs on named contacts and occupancy over time instead of on score.",
"a_zh":"因為我們稽核過，它沒有用。BoPEP4 各變體的 HADDOCK 分數有 93% 單靠長度與電荷就能解釋，與已發表活性無相關（rho 約 +0.05）。C 端標籤的分數最好，卻是化學上被排除的構築。所以我們改用指名的接觸與隨時間的占有率來判斷，而不是看分數。",
"trap_en":"Saying the docking score picked our constructs.",
"trap_zh":"說是對接分數挑出我們的構築。",
"basis":"like Toronto 2025: other modelling approaches",
"dom":"drylab",
"id":"q310"
},
{
"q_en":"Why didn't you engineer a better ACC deaminase?",
"q_zh":"為什麼不改造出更好的 ACC deaminase？",
"type":"compare",
"tier":"B",
"pages":[
"protein-design",
"protein-design-sprints"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"amount beats quality",
"assay medium pH",
"cysteine variant held"
],
"kw_zh":[
"數量比品質重要",
"培養基 pH",
"半胱胺酸變體暫緩"
],
"a_en":"Because the enzyme meets far less ACC than it could handle, so how much active enzyme is present matters more than how good it is. The modeling pointed to the medium instead: moving it to pH 7.0 shortens clearance roughly 14-fold. We designed a four-cysteine variant for shelf life but held it, and the stability design F156C and the pH design V293T both failed on conservation and stability.",
"a_zh":"因為酵素遇到的 ACC 遠少於它能處理的量，所以有多少活性酵素比酵素多好更重要。模型指向的是培養基：改成 pH 7.0 可讓清除速度快約 14 倍。我們設計了四個半胱胺酸的變體來延長保存期限，但暫緩，穩定度設計 F156C 與 pH 設計 V293T 則都因保守度與穩定度而失敗。",
"trap_en":"Saying we engineered ACC deaminase. Only wild type was sent.",
"trap_zh":"說我們改造了 ACC deaminase；其實只送了野生型。",
"basis":"like Great Bay 2025: why structural modeling of the protein",
"dom":"drylab",
"id":"q311"
},
{
"q_en":"What failed in your protein design work?",
"q_zh":"你們的蛋白質設計中什麼失敗了？",
"type":"gap",
"tier":"B",
"pages":[
"protein-design-methodology",
"protein-design-sprints"
],
"seat":"dry",
"backup":"wet1",
"kw_en":[
"nine docking runs neutral termini",
"LEA14 gate failed",
"controls invisible to docking"
],
"kw_zh":[
"九次對接用了中性末端",
"LEA14 關卡失敗",
"對照組在對接中看不出"
],
"a_en":"Several things. Nine docking runs were built with neutral termini, deleting the carboxylate that anchors the peptide, and nobody noticed for two months. None came within 4 angstroms of the crystal. The LEA14 prediction failed a gate we set in advance and we stopped. A variant named Y156C turned out to be F156C. And docking could not see our two weak controls.",
"a_zh":"有好幾件。九次對接用了中性末端，等於刪掉固定肽的羧基，兩個月都沒有人發現，沒有任何結果距離晶體結構小於 4 埃。LEA14 的預測沒通過我們事先設定的關卡，所以我們停止。一個叫 Y156C 的變體其實是 F156C。對接也看不出我們兩個弱活性對照組。",
"trap_en":"Presenting the pipeline as finished and reliable.",
"trap_zh":"把流程說成已完成而且可靠。",
"basis":"honesty probe",
"dom":"drylab",
"id":"q312"
},
{
"q_en":"Does a good docking score mean the peptide will protect the plant?",
"q_zh":"對接分數好，代表這個肽就能保護植物嗎？",
"type":"boundary",
"tier":"B",
"pages":[
"protein-design-methodology",
"protein-design-sprints"
],
"seat":"dry",
"backup":"plant",
"kw_en":[
"recognition step only",
"no binding assay",
"function read in the cell"
],
"kw_zh":[
"只回答辨識這一步",
"沒有結合實驗",
"功能要在細胞裡看"
],
"a_en":"No. A clean, well scored model only says the sequence can do the recognition step. It does not show the peptide reaches the receptor, survives the apoplast, or triggers the immune response. We ran no binding assay. On plants, BoPEP4 at 1 in 40 carried plants green under salt, but that was a single plate with no statistics yet.",
"a_zh":"不能。分數好、結構乾淨的模型只說明序列能完成辨識這一步，不代表肽會到達受體、能在質外體存活或啟動免疫反應。我們沒有做結合實驗。在植物上，BoPEP4 稀釋 40 倍能讓植物在鹽逆境下保持綠色，但那只是一個培養皿，還沒有統計。",
"trap_en":"Treating in silico binding as proof of protection.",
"trap_zh":"把電腦預測的結合當成保護效果的證明。",
"basis":"like Great Bay 2025: correlation between predictions and testing",
"dom":"drylab",
"id":"q313"
},
{
"q_en":"What from your protein design was actually validated in the lab, and what only in silico?",
"q_zh":"蛋白質設計中哪些在實驗室驗證過，哪些只在電腦中？",
"type":"validate",
"tier":"B",
"pages":[
"protein-design",
"drylab-notebook",
"results",
"parts"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"ACCD wild type made and active",
"BoPEP4 made, tag position differs",
"no binding or function test"
],
"kw_zh":[
"ACCD 野生型有做出且有活性",
"BoPEP4 有做出但標籤位置不同",
"沒有結合或功能測試"
],
"a_en":"Validated: wild-type ACC deaminase is made and active, 2.5 to 8.5 micrograms per mL. BoPEP4 is made, about 6, and ViennaRNA recoding helped BoPEP4 but not ACC deaminase. Only in silico: the ladder, tag placement, S15A and G17A controls, and cysteine variants. Neither LEA14 truncation is sequence-verified, and no binding assay has been run.",
"a_zh":"驗證過的：野生型 ACC deaminase 已做出且有活性，2.5 到 8.5 µg/mL。BoPEP4 有做出，約 6 µg/mL，ViennaRNA 重新編碼對 BoPEP4 有幫助，對 ACC deaminase 則沒有。只在電腦中的：長度系列、標籤位置、S15A 與 G17A 對照、半胱胺酸變體。兩個 LEA14 截短版都沒有定序確認，也沒有做結合實驗。",
"trap_en":"Listing design outcomes as lab results.",
"trap_zh":"把設計結果列成實驗室結果。",
"basis":"like Great Bay 2025: correlation between modeling predictions and real testing",
"dom":"drylab",
"id":"q314"
},
{
"q_en":"How did the dry lab change which protectant constructs the wet lab built?",
"q_zh":"乾實驗室如何改變濕實驗做哪些保護劑構築？",
"type":"integrate",
"tier":"B",
"pages":[
"protein-design",
"protein-design-sprints",
"drylab-notebook"
],
"seat":"dry",
"backup":"wet1",
"kw_en":[
"tag to N-terminus",
"ladder sent whole",
"ACCD wild type only"
],
"kw_zh":[
"標籤移到 N 端",
"長度系列全送",
"ACCD 只送野生型"
],
"a_en":"In four ways. The BoPEP4 tag moved to the N-terminus for orders after 16 August. Nothing computational separated the truncations, so the whole ladder plus S15A and G17A controls went out. ACC deaminase went as wild type only. And the lab pushed back: the cloning record showed the June and July cassettes still carry a C-terminal His tag.",
"a_zh":"有四個方面。8 月 16 日之後的訂單，BoPEP4 標籤移到 N 端。沒有任何計算能分開各個截短版，所以整個長度系列加上 S15A、G17A 對照全部送出。ACC deaminase 只送野生型。而且實驗室也回頭修正：選殖紀錄顯示 6、7 月的卡匣仍是 C 端 His 標籤。",
"trap_en":"Saying the dry lab chose what was built. The wet lab record corrected the dry lab too.",
"trap_zh":"說是乾實驗室決定了做什麼；選殖紀錄也修正了乾實驗室。",
"basis":"like Heidelberg 2025: both directions",
"dom":"drylab",
"id":"q315"
},
{
"q_en":"What are the next experiments for your protein design?",
"q_zh":"你們蛋白質設計接下來的實驗是什麼？",
"type":"impact",
"tier":"B",
"pages":[
"protein-design-molecular-dynamics",
"protein-design-sprints"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"secretion assay of truncations",
"full-length K7A",
"PLP occupancy and W112A"
],
"kw_zh":[
"截短版分泌實驗",
"全長 K7A",
"PLP 占有率與 W112A"
],
"a_en":"The wiki names several. A secretion assay comparing the truncated constructs with wild-type BoPEP4, since shorter is a manufacturability hypothesis. A full-length K7A mutant to test the Lys7 anchor. A PLP occupancy measurement for ACC deaminase variants. And W112A on LEA14, a one-codon test of where its partner binds. None has results yet.",
"a_zh":"wiki 列出幾項。比較截短版與野生型 BoPEP4 的分泌實驗，因為變短只是可製造性的假設；全長 K7A 突變體，用來檢驗 Lys7 錨點；ACC deaminase 變體的 PLP 占有率量測；以及 LEA14 的 W112A，用一個密碼子檢驗夥伴結合位置。目前都還沒有結果。",
"trap_en":"Announcing results for experiments that have not been run.",
"trap_zh":"宣布還沒做的實驗的結果。",
"basis":"next step; stated on wiki",
"dom":"drylab",
"id":"q316"
},
{
"q_en":"Can your protein design pipeline be applied to other proteins?",
"q_zh":"你們的蛋白質設計流程可以用在其他蛋白質嗎？",
"type":"boundary",
"tier":"B",
"pages":[
"protein-design-methodology",
"protein-design"
],
"seat":"dry",
"backup":"wet1",
"kw_en":[
"same steps, evidence decides",
"enzymes are not docked",
"one strand stopped"
],
"kw_zh":[
"同樣步驟、證據決定",
"酵素不對接",
"一條線中止"
],
"a_en":"Partly, and we tested it on three. The same steps ran on a peptide, a folded protein and an enzyme, with the available evidence deciding how far each went. The peptide went all the way. ACC deaminase skipped docking because its cofactor and substrate are covalent. LEA14 stopped when its partner could not be predicted. Docking is not a general tool.",
"a_zh":"部分可以，我們用三個蛋白質測過。同樣的步驟用在一個肽、一個折疊蛋白質和一個酵素上，現有證據決定各自能走多遠。肽走完全程；ACC deaminase 因為輔因子與受質是共價結合而跳過對接；LEA14 因為夥伴無法預測而中止。對接不是通用工具。",
"trap_en":"Saying the pipeline works on any protein.",
"trap_zh":"說這個流程對任何蛋白質都有效。",
"basis":"boundary probe",
"dom":"drylab",
"id":"q317"
},
{
"q_en":"In one sentence, how does your protein design pipeline work?",
"q_zh":"用一句話說，你們的蛋白質設計流程是怎麼運作的？",
"type":"fact",
"tier":"B",
"pages":[
"protein-design",
"protein-design-methodology"
],
"seat":"dry",
"backup":"wet1",
"kw_en":[
"GRAFT five stages",
"docking then MD then triage",
"recognition only"
],
"kw_zh":[
"GRAFT 五階段",
"對接、MD、分級",
"只驗證辨識"
],
"a_en":"GRAFT has five stages: Generate candidates, build Restraints, Assemble by docking, Flex with molecular dynamics, and Triage with five independent checks, where a model must pass all five. It tests whether a molecule can recognise its partner, not whether that produces a plant response. Three protectants went through it: BoPEP4, LEA14 and ACC deaminase.",
"a_zh":"GRAFT 有五個階段：產生候選（Generate）、建立限制條件（Restraints）、對接組裝（Assembly）、用分子動力學檢驗（Flex），以及用五個獨立檢查分級（Triage），模型必須全部通過。它檢驗的是分子能不能辨識夥伴，而不是會不會引起植物反應。BoPEP4、LEA14、ACC deaminase 三種保護劑都跑過。",
"trap_en":"Describing it as a prediction of whether the peptide protects plants.",
"trap_zh":"把它說成預測肽是否能保護植物。",
"basis":"orientation question",
"dom":"drylab",
"id":"q318"
}
];
