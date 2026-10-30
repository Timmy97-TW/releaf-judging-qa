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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q034"
},
{
"q_en":"Your own page says the OD600 reading is purely turbidity and not absorbed light. Beer's law is a law about absorption, so on what grounds do you take a logarithm at all, and where does that stop working?",
"q_zh":"你們自己的頁面寫 OD600 讀到的其實純粹是濁度，不是吸收。Beer's law 講的是吸收，那你們憑什麼還取 log？這個做法什麼時候會失效？",
"type":"design",
"tier":"A",
"deep":1,
"pages":[
"hardware-photometer#2.1",
"measurement#Dual light path inline photometer",
"software"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"nothing absorbs at 600 nm",
"single scattering only",
"slope 0.995 falls to 0.59"
],
"kw_zh":[
"600 nm 幾乎沒有吸收",
"只在單次散射成立",
"斜率 0.995 掉到 0.59"
],
"a_en":"Because at 600 nanometres almost nothing in the culture absorbs. The cells scatter light out of the beam, so the detector loses photons to deflection, not to absorption. In a thin, dilute sample each cell removes light independently, so transmission falls exponentially with concentration and a logarithm straightens that out. It is an empirical fit, not Beer's law, and it fails when light scattered by one cell is scattered again by another, because some of it reaches the detector anyway. Our own data shows exactly that: above OD 2.5 the slope against the reference drops from 0.995 to 0.59. That is where our stated working limit of about OD 2.5 comes from.",
"a_zh":"因為在 600 nm 幾乎沒有東西在吸收。細菌是把光散射出光束之外，感測器少掉的光是被偏折掉的，不是被吸收掉的。在很薄又很稀的樣品裡，每個細胞各自擋光，所以穿透率隨濃度指數下降，取 log 就把它拉直。這是經驗式的擬合，不是 Beer's law。它會失效，是因為被一顆細胞散射的光又被另一顆散射，有一部分還是會回到感測器。我們自己的數據就是這樣：OD 2.5 以上，對參考儀器的斜率從 0.995 掉到 0.59。我們大約 OD 2.5 的工作上限就是從這裡來的。",
"trap_en":"Calling it absorbance and quoting Beer's law as if an extinction coefficient of the cells existed.",
"trap_zh":"把它講成吸光度，還引 Beer's law，好像細胞有一個莫耳吸收係數一樣。",
"basis":"Measurement nomination: judges test whether the physics behind OD600 is understood",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q035"
},
{
"q_en":"Before the silica run you predicted your in-line builds would read below the benchtop instrument. Explain the geometry behind that prediction, and then tell me where each instrument's usable range actually ends.",
"q_zh":"做 silica 那次之前，你們就預測自己的線上光度計會讀得比桌上型低。請解釋背後的幾何原因，再說兩台儀器實際可用的範圍各到哪裡。",
"type":"design",
"tier":"A",
"deep":1,
"pages":[
"measurement#One data set, eleven algorithms",
"hardware-photometer#5.2",
"results"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"forward scatter still lands",
"H3, slope 0.6 to 1.0",
"reference unreliable above 1"
],
"kw_zh":[
"前向散射還是打到感測器",
"H3，斜率 0.6 到 1.0",
"參考儀器 OD 1 以上不可靠"
],
"a_en":"What we measure is light that missed the detector, so geometry sets the number. Our path is 2 millimetres and the sensor sits right behind the cuvette, so light deflected by a small angle still lands on it and the sample looks less turbid than it is. We pre-registered that as prediction H3, expected slope 0.6 to 1.0. The Slim, whose fibre tip is a millimetre from the cell, reads a fifth of the Pro's scale for the same reason. The ranges end in different places: Professor Chang told us the BioDrop loses accuracy above OD 1, so from October we read it through two-fold and four-fold dilutions, which is why its silica trace turns irregular past OD 2. Ours works to about OD 2.5.",
"a_zh":"我們量到的是「沒打到感測器的光」，所以幾何決定讀值。我們的光程只有 2 mm，感測器就貼在比色管後面，偏折角度小的光還是會落在上面，樣品看起來就比實際不濁。我們事先把這件事登記成預測 H3，預期斜率落在 0.6 到 1.0。Slim 的光纖尖端離比色管只有 1 mm，道理一樣，所以它的刻度大約只有 Pro 的五分之一。兩台可用範圍的終點不一樣：張老師告訴我們 BioDrop 在 OD 1 以上就不準，所以從 10 月 10 日起我們把它的樣品稀釋兩倍、四倍再乘回去，這也是它的 silica 曲線過了 OD 2 之後變得不規則的原因。我們自己的工作上限大約是 OD 2.5。",
"trap_en":"Saying the reference saturates at OD 2.5; our pages say it loses accuracy above OD 1 and was read through dilutions.",
"trap_zh":"說參考儀器在 OD 2.5 飽和；我們頁面寫的是它 OD 1 以上就不準，所以改用稀釋來讀。",
"basis":"Hardware judges ask why a short-path in-line sensor compresses at high density",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q036"
},
{
"q_en":"Walk me through what the reference channel removes from a reading and what it cannot. Where do LED temperature drift, LED spectral width and detector dark current each land in that answer?",
"q_zh":"請說清楚參考通道到底消掉了什麼、又消不掉什麼。LED 溫度漂移、LED 光譜寬度、感測器暗電流，這三項各自落在哪一邊？",
"type":"boundary",
"tier":"A",
"deep":1,
"pages":[
"measurement#From lux to optical density",
"hardware-photometer#2.2",
"engineering"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"split before the cuvette",
"four dark readings per burst",
"spectrum never measured"
],
"kw_zh":[
"在比色管之前分光",
"每次 4 筆暗讀值",
"光譜從沒量過"
],
"a_en":"The reference beam is split off before the cuvette, so it sees the source and never the culture. In our algebra sample over reference equals a fixed optical constant times transmittance, and dividing by the blank removes that constant, so anything changing the LED's output cancels: ageing, supply current, warming. We flag the ratio if it leaves 0.85 to 1.15. Dark current and room light are handled separately, by four readings taken with the LED off and subtracted from every burst. Spectral width is the one we never measured; if the peak shifts with temperature the ratio cannot see it, because both sensors shift together. Nor can it see a fouled window or a bubble, which sit after the split.",
"a_zh":"參考光是在比色管之前就分出去的，它只看光源，看不到菌液。我們的式子是：sample 除以 reference 等於一個固定的光學常數乘上穿透率，再除掉空白就把那個常數消掉，所以凡是改變 LED 輸出的因素都會抵消：老化、電流、變熱。這個比值跑出 0.85 到 1.15 我們就會發旗標。暗電流和室光是另外處理的：每一組都先關掉 LED 讀 4 筆，再扣掉。光譜寬度是我們從來沒量過的那一項；如果峰值隨溫度偏移，比值看不出來，因為兩個感測器一起偏。它也看不到比色管結垢或氣泡，那些都在分光之後。",
"trap_en":"Saying the reference fixes everything; on 19 July it moved 6.4 percent when nothing in the cuvette had changed.",
"trap_zh":"說有參考通道就萬無一失；7 月 19 日比色管裡什麼都沒變，參考通道卻動了 6.4%。",
"basis":"A reference channel is the design's main claim, so its limits get probed",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q037"
},
{
"q_en":"Explain why median and MAD beat mean and standard deviation inside a burst, then tell me what a bubble does to one sample as against to a whole window, and what your filtering could hide.",
"q_zh":"請解釋為什麼在一組 burst 裡用中位數和 MAD 比用平均和標準差好，再說一顆氣泡對單一讀值和對整個時間窗各做了什麼，以及你們的濾波可能把什麼藏起來。",
"type":"design",
"tier":"A",
"deep":1,
"pages":[
"measurement#With bubbles the premise fails",
"measurement#The lever is the gate after the estimator",
"hardware-photometer#8.1"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"outlier widens its own fence",
"air slug: all agree, wrong",
"jump gate delays real steps"
],
"kw_zh":[
"離群值會自己把界線撐寬",
"整段進空氣：全一致全錯",
"jump gate 會延後真實跳階"
],
"a_en":"Inside a burst the mean is dragged by one outlier and the standard deviation is inflated by the same outlier, so the fence widens enough to admit it; the median and the MAD both ignore it, so the fence stays tight. One bubble costs one or two of fourteen samples. A whole window of air is a different failure: every sample agrees and every sample is wrong. The Pro read 0.74 to 0.91 against a true 3.18 and the bubble flag caught none of it. What the gates can hide is a genuine jump, because a reading more than 0.05 OD from the last accepted value is withheld until three readings agree.",
"a_zh":"在一組 burst 裡，平均會被一個離群值拉走，標準差也被同一個離群值撐大，於是界線寬到剛好把它收進來；中位數和 MAD 都不理它，界線就維持很緊。一顆氣泡大概只毀掉 14 筆裡的 1 到 2 筆。整段流道灌進空氣是完全不同的失效：每一筆都彼此一致，而且全部都錯。Pro 讀到 0.74 到 0.91，真值是 3.18，氣泡旗標一筆都沒抓到。我們的 gate 可能藏起來的是真正的跳階：和上一個被接受的值差超過 0.05 OD 就先壓住，要三筆一致才接受新水準。我們接受這個代價，因為菌不會長那麼快，而且 gate 是發警報，不是偷偷修掉。",
"trap_en":"Calling the rejection percentage a bubble rate; on quantised data it was counting quantisation flicker.",
"trap_zh":"把剔除百分比當成氣泡率；在量化的數據上它數的是量化抖動。",
"basis":"Robust statistics are the software claim; judges ask what they cost",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q038"
},
{
"q_en":"How does your pipeline tell a slow drift from a step change, and what are your limit of detection and limit of quantification?",
"q_zh":"你們的流程怎麼分辨緩慢漂移和突然跳階？你們的偵測極限和定量極限各是多少？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"measurement#The lever is the gate after the estimator",
"software",
"results#Fault detection"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"jump gate for steps",
"reference axis for drift",
"no LOD number published"
],
"kw_zh":[
"跳階靠 jump gate",
"漂移靠參考通道軸",
"LOD 數值沒有公布"
],
"a_en":"Two different detectors. A step is caught at the reading level by the jump gate: more than 0.05 OD or five percent from the last accepted value, and a new level only accepted after three agreeing readings. A slow drift is caught by a fault model that scores the reference beam, which never sees the culture, separately from the growth rate. On the 434 hour run it flagged the sensor 26.7 hours before the OD channel failed, at a 6.1 percent false alarm rate. We pre-registered both limits, as three and ten times the blank standard deviation, but no number for either is published. The pages give the finest step instead: 0.21 milligrams of silica for the Pro, 0.49 for the Slim.",
"a_zh":"是兩套不同的偵測。跳階在單筆讀值這一層用 jump gate 抓：和上一個被接受的值差超過 0.05 OD 或 5%，而且要三筆一致才接受新水準。緩慢漂移在更長的時間軸上抓：故障模型把從不穿過菌液的參考光和生長速率分成兩軸分別評分。在 434 小時那次，它在 216.3 小時就標記了感測器，比 OD 通道失效早 26.7 小時，在未見過的安靜時段誤報率 6.1%。兩個極限我們確實事先登記過，定義是空白標準差的三倍和十倍，但兩個數值都沒有公布。頁面上給的是各機型在 silica 上能分辨的最小變化：Pro 0.21 mg，Slim 0.49 mg。",
"trap_en":"Quoting the 0.0039 OD estimator spread as an accuracy figure; it only says the estimators agree in clean flow.",
"trap_zh":"把 0.0039 OD 的估計量差距當成準確度；那只說明流道乾淨時各估計量彼此一致。",
"basis":"Metrology question: a monitoring instrument needs stated detection limits",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q039"
},
{
"q_en":"Your calibration ladder is one micron silica beads. A Bacillus subtilis cell is not that. Name the ways they differ optically, and tell me which direction those differences push your reading.",
"q_zh":"你們的校正梯度用的是 1 微米的 silica 微球，但 Bacillus subtilis 不是那樣的東西。請說出它們光學上有哪些不同，以及這些差異會把你們的讀值往哪個方向推。",
"type":"boundary",
"tier":"A",
"deep":1,
"pages":[
"measurement#What this calibration does not establish",
"hardware-photometer#7.4",
"results"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"1.46 against 1.33 to 1.41",
"rods in chains, not spheres",
"particle equivalents only"
],
"kw_zh":[
"1.46 對 1.33 到 1.41",
"是成串的桿狀，不是球",
"只能算等效顆粒數"
],
"a_en":"A bead is a 1 micron sphere, refractive index 1.46, density 2.3; a vegetative cell is a rod, often in chains, nearer 1.33 to 1.41 and about 1.1. So the differences are index contrast against water, shape, and a size distribution that shifts as the culture grows and sporulates. Lower index contrast means a cell scatters less per particle, and chains scatter differently again from singles. What we cannot do is sign the total error from our own data, because our concentration axis is milligrams of silica, not cells. The ladder gives equivalent particle counts, not cell mass, and a dilution series of washed cells is still owed.",
"a_zh":"微球是 1 微米的球，折射率 1.46，密度 2.3；營養期的菌是桿狀，常常成串，折射率大約 1.33 到 1.41，密度約 1.1。所以差異有三個：對水的折射率對比、形狀，還有隨著生長和產孢一直在變的大小分布。折射率對比較低代表每顆細胞散射得比較少，而成串又和單顆散射不一樣。我們做不到的是從自己的數據判斷總誤差的正負號，因為我們的濃度軸是「加了幾毫克 silica」，不是細胞數。這個梯度給的是等效顆粒數，不是細胞質量，洗過的菌體稀釋序列我們還欠著。",
"trap_en":"Saying the silica run calibrates the instrument for culture; it calibrates the instrument, not the organism.",
"trap_zh":"說 silica 那次校正把儀器對菌液也校好了；它校的是儀器，不是生物。",
"basis":"The calibration standard is not the analyte, and the wiki admits it",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q040"
},
{
"q_en":"Suppose a judge wants your number in cells per millilitre rather than in OD. What would you have to measure, and what does the iGEM measurement work on absolute units ask for that you have not done?",
"q_zh":"假設評審要的是每毫升幾顆細胞，不是 OD。你們還得量什麼？iGEM 關於絕對單位的那套做法，有哪一步你們沒有做？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"results#Turbidity calibration",
"measurement#What this calibration does not establish",
"hardware-photometer#5.2"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"plate counts plus dry weight",
"Beal 2020, particles per mL",
"mass ladder, no bead counts"
],
"kw_zh":[
"菌落計數加乾重",
"Beal 2020，顆粒數濃度",
"我們用質量，沒數微球"
],
"a_en":"We would need one paired series on one culture: a dilution ladder of washed cells read on our photometer, the same samples plated for colony counts, and a dry weight arm, repeated often enough that the conversion has a confidence interval and not just a slope. The absolute units argument, which we cite as Beal and colleagues in 2020, is that OD is instrument specific and a silica bead ladder lets you report particles per millilitre instead. We used silica, but as a weighed mass ladder. We never counted beads, and we never put cells beside them. So our OD600 is comparable with the BioDrop below 2.5 and with nothing else.",
"a_zh":"要在同一批菌上做一組配對實驗：洗過的菌體做稀釋梯度，用我們的光度計讀，同一批樣品塗盤算菌落，再加一組乾重，而且要重複到那個換算有信賴區間，不只是一條斜率。絕對單位的論點，就是我們引的 Beal 等人 2020：OD 是儀器專屬的量，用 silica 微球梯度才能改報每毫升顆粒數。我們有用 silica，但是當成秤重的質量梯度。我們沒有去數微球，也沒有把細胞和微球放在一起比。所以我們的 OD600 在 2.5 以下可以跟 BioDrop 比，除此之外不能跟任何東西比。",
"trap_en":"Saying OD 1 equals a textbook cell number; our own pages refuse that step.",
"trap_zh":"說 OD 1 就等於教科書上的某個細胞數；我們自己的頁面就否決了這一步。",
"basis":"Measurement committee position on calibrated absolute units",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q041"
},
{
"q_en":"Your His-tag ELISA is a competitive format. Explain what that does to the shape of the curve, where the usable window sits, and what your untransformed host control reading of about five micrograms per millilitre means quantitatively.",
"q_zh":"你們的 His-tag ELISA 是競爭型的。請解釋這會讓曲線變成什麼形狀、可用的範圍在哪裡，以及未轉殖宿主對照讀到大約 5 µg/mL，在定量上代表什麼。",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"measurement#Competitive His-tag ELISA",
"measurement#Standard curve and valid measurement range",
"results"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"signal falls as target rises",
"re-assay outside 20 to 80",
"host control is our floor"
],
"kw_zh":[
"目標越多訊號越低",
"20 到 80% 以外要重做",
"宿主對照就是我們的底線"
],
"a_en":"In a competitive assay the sample and a labelled tracer compete for one antibody, so more target gives less signal. Our percent B over B zero falls from 95.1 at 0.093 micrograms per millilitre to 31.6 at three. The kit says re-assay anything outside 20 to 80 percent, and our six standards only span 31.6 to 95.1. All four ACC deaminase wells read below 20 percent, off the bottom of the standards, so 13.5 to 19.1 micrograms per millilitre is an extrapolation. The control matters most: untransformed WB800 read 5.452 and 4.562, the same range as four of our six constructs. That is our floor, so no ranking on that plate can be attributed to expression.",
"a_zh":"競爭型的做法是樣品和帶標記的 tracer 搶同一個抗體，所以目標蛋白越多，訊號越低。我們的 %B/B0 從 0.093 µg/mL 的 95.1 降到 3 µg/mL 的 31.6。試劑盒要求 20 到 80% 以外的要重做，而我們六個標準點只涵蓋 31.6 到 95.1。ACC deaminase 四個孔都讀在 20% 以下，掉到標準品的下緣之外，所以 13.5 到 19.1 µg/mL 是外插值。最關鍵的是對照：未轉殖的 WB800 讀到 5.452 和 4.562，跟六個構築中的四個同一個範圍。那就是我們的底線，所以那塊盤上的排名不能歸因於表達量。",
"trap_en":"Reading 13.5 to 19.1 micrograms per millilitre as a quantity; our own page says it only means higher than LEA14 and BoPep4.",
"trap_zh":"把 13.5 到 19.1 µg/mL 當成定量值；我們自己的頁面寫它只代表「比 LEA14 和 BoPep4 高」。",
"basis":"Competitive-format ELISA is easy to over-read, and the control failed",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q042"
},
{
"q_en":"Both your ELISA and your Western blot read the same polyhistidine tag. A band at about 37 kilodaltons is a size, not an identity. What else could an anti-His antibody be binding, and what would make the identification stick?",
"q_zh":"你們的 ELISA 和 Western blot 讀的是同一個 polyhistidine tag。大約 37 kDa 的一條帶只是分子量，不是身分。anti-His 抗體還可能抓到什麼？要怎樣才算真的確認身分？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"measurement#Western blot",
"results",
"engineering"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"histidine-rich host proteins",
"35, 37 and 42 predicted",
"host lane, elution, mass spec"
],
"kw_zh":[
"富含組胺酸的宿主蛋白",
"預測值 35、37、42",
"宿主對照、洗出、質譜"
],
"a_en":"Any host protein with a run of surface histidines can give an anti-His signal, and so can carry over from a rich medium; that is the most likely reading of a negative control that comes back in the sample range. Size does not settle it either. Our own pages predict the monomer at about 35, 37 and 42 kilodaltons in different places, and some light-plate blots run between 63 and 100, which we call a possible dimer and say we have not validated. What would make it stick is an untransformed host lane on the same gel, which our 2 August blot lacks along with any loading control, the elution fractions tracking with purification, and mass spectrometry, which we never ran.",
"a_zh":"任何表面帶一串組胺酸的宿主蛋白都可能給出 anti-His 訊號，豐富培養基帶過來的東西也可能；陰性對照讀到和樣品同範圍，最合理的解釋就是這個。分子量也定不了身分。我們自己的頁面在不同地方把單體寫成大約 35、37 和 42 kDa，而燈板的某些 blot 跑在 63 到 100 之間，我們說那可能是雙體，而且明講還沒驗證。要真的確認身分，需要同一塊膠上有未轉殖宿主的 lane，我們 8 月 2 日那塊 blot 沒有，而且也沒有 loading control；還需要 imidazole 洗出的各管跟著純化走；最後需要質譜，而我們從來沒做。",
"trap_en":"Saying the band is at the size the construct predicts and stopping there; our own pages predict that size three different ways.",
"trap_zh":"說那條帶就在構築預測的分子量上就不講了；我們自己的頁面對那個預測值有三種說法。",
"basis":"Antibody specificity is the weak joint in both protein assays",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q043"
},
{
"q_en":"What does DNPH actually derivatise in your assay, why is an overnight endpoint reading not a rate, and why do your two activity figures differ fourteenfold?",
"q_zh":"你們的 DNPH 到底衍生化了什麼？為什麼過夜的終點讀值不算速率？還有，你們兩個活性數字為什麼差了十四倍？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"measurement#ACC deaminase activity by DNPH assay",
"measurement#Defining the quantitative range",
"results"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"carbonyl to hydrazone at 540",
"endpoint, so total product",
"0.52 against 7.25 mU/mL"
],
"kw_zh":[
"羰基變 hydrazone，540 nm",
"終點法，是累積產物",
"0.52 對 7.25 mU/mL"
],
"a_en":"DNPH condenses with the carbonyl of alpha-ketobutyrate, the product of ACC cleavage, giving a hydrazone we read at 540 nanometres. Because we incubate overnight at thirty degrees and read once, the number is total product accumulated, not an initial velocity, and 41 millimolar substrate does not guarantee the reaction stayed linear. That is why the two figures disagree. The 30.9 nanomoles per millilitre per hour from the twelve-hour reactions is 0.52 milliunits per millilitre, against 7.25 from a thirty-minute reaction on the permeate; a long reaction averages down as substrate depletes and the enzyme loses activity. Our page says it plainly: until the same sample is read both ways, neither is a rate we can quote.",
"a_zh":"DNPH 和 alpha-ketobutyrate 的羰基縮合，那是 ACC 被切開後的產物，生成 hydrazone，我們在 540 nm 讀。因為是 30 度過夜、只讀一次，這個數字是累積的總產物，不是初速，而且 41 mM 的基質也不保證反應一直在線性區。這就是兩個數字對不起來的原因：12 小時反應算出來的 30.9 nmol/mL/h 等於 0.52 mU/mL，而透過膜的 permeate 用 30 分鐘反應讀到 7.25 mU/mL；反應時間拉長，基質耗掉、酵素也失活，平均下來就變低。我們頁面上講得很直接：在同一個樣品用兩種方式都讀過之前，兩個數字都不能當成速率來引用。",
"trap_en":"Quoting a specific activity in units per milligram; no such figure is on the published wiki, because neither activity number is yet a rate.",
"trap_zh":"報一個 U/mg 的比活性；已發表的 wiki 上沒有這個數字，因為兩個活性數值都還不算速率。",
"basis":"Endpoint colorimetry over-read as kinetics, on the page's own unreconciled numbers",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q044"
},
{
"q_en":"In-line turbidity probes are sold for bioreactors and open-source OD meters are almost a genre in iGEM. What in your photometer is therefore not new, and how much of that prior work did you actually survey?",
"q_zh":"線上濁度探頭本來就有商品，開源 OD 計在 iGEM 幾乎是一種類型了。那你們的光度計裡哪些其實不新？你們到底查了多少前人的工作？",
"type":"history",
"tier":"A",
"deep":1,
"pages":[
"hardware-photometer",
"contribution",
"measurement"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"probes and reference beams exist",
"LPA is a published design",
"no prior-art survey published"
],
"kw_zh":[
"探頭和參考光早就有",
"LPA 是已發表的設計",
"我們頁面沒有前人技術回顧"
],
"a_en":"Almost none of the pieces is new, and we should say so. In-line optical cell density probes are a commercial product. Six hundred nanometres is the field convention. A split reference beam is textbook ratiometric photometry. Robust statistics are much older than us. Silica as a scattering standard comes straight from the iGEM measurement work we cite. Open hardware is already in the project: our light plate is the published LPA design, and we credit it. The honest part is that our photometer pages carry no prior art survey of other teams' OD meters. We compared ourselves against one benchtop instrument, not against the open designs, so we make no priority claim.",
"a_zh":"幾乎沒有一個零件是新的，這點我們應該直說。線上光學細胞密度探頭本來就有商品；600 nm 是這個領域的慣例；分出一道參考光是教科書裡的比值式光度法；穩健統計比我們老得多；用 silica 當散射標準品是我們引用的 iGEM 測量工作直接來的。開源硬體在這個專案裡本來就有：我們的燈板就是已發表的 LPA 設計，我們有標明出處。誠實的部分是：我們光度計的頁面沒有針對其他隊伍 OD 計的前人技術回顧。我們只跟一台桌上型儀器比過，沒有跟那些開源設計比，所以我們不主張這是首創。",
"trap_en":"Claiming the first in-line OD600 in iGEM; nothing on our wiki supports a priority claim.",
"trap_zh":"說這是 iGEM 第一個線上 OD600；我們的 wiki 沒有任何東西能支持首創的說法。",
"basis":"DIY photometers are a worn iGEM genre; judges test positioning honesty",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q045"
},
{
"q_en":"Grant that the parts are all old. What did your team actually add that someone reading your pages could not have got from the designs that already existed?",
"q_zh":"就當所有零件都是舊的。那你們這組到底加了什麼，是讀你們頁面的人從既有設計裡拿不到的？",
"type":"history",
"tier":"A",
"deep":1,
"pages":[
"measurement#One data set, eleven algorithms",
"results#Culture monitoring",
"hardware-photometer#5.2"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"434 hours, honest at 243",
"calibrate to mass, not machines",
"pre-registered, five failed"
],
"kw_zh":[
"434 小時，243 小時就說實話",
"對質量校正，不是對機器",
"事先登記，五項沒過"
],
"a_en":"Four things, and they are documentation rather than invention. One: the instrument ran in the loop of a working perfusion reactor for 434 hours with nothing withdrawn, and we publish where it stopped being usable, at 243 hours. Two: we calibrated against weighed mass, titanium dioxide and then one micron silica, instead of against another machine, so the concentration axis is independent of both instruments. Three: we pre-registered eleven algorithms and eight predictions, replayed them all on one raw data set, and report the five predictions the data did not support. Four: the raw bursts, the replay scripts and the pre-registration are published, so the whole analysis can be repeated on somebody else's photometer in about four days.",
"a_zh":"四件事，而且都是文件工作，不是發明。第一，這台儀器裝在一個真的在跑的灌流反應器迴路裡連續跑了 434 小時，中間沒有抽樣，而且我們公開寫出它從 243 小時起就不能用了。第二，我們是對秤出來的質量校正，先二氧化鈦再 1 微米 silica，不是對另一台機器校正，所以濃度軸獨立於兩台儀器。第三，我們事先登記了十一種演算法和八個預測，全部在同一份原始資料上重跑，而且把數據不支持的那五個預測照實報出來。第四，原始 burst、重播腳本和事先登記都公開，別人用自己的光度計大概四個工作日就能重做整套分析。",
"trap_en":"Leading with the cost saving; the contribution is the documented calibration and the published raw data.",
"trap_zh":"一開口就講省錢；真正的貢獻是有文件的校正和公開的原始資料。",
"basis":"Nomination needs a crisp statement of what is genuinely new",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q046"
},
{
"q_en":"A benchtop spectrophotometer is a better instrument than yours in every optical respect. Why build this at all, and please be careful with the cost comparison.",
"q_zh":"桌上型分光光度計在光學上每一項都比你們的好。那為什麼還要做這台？順便，成本的比較請小心一點。",
"type":"history",
"tier":"A",
"deep":1,
"pages":[
"hardware-photometer#10.1",
"contribution",
"hardware-photometer#5.2"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"cannot sit in the loop",
"repeatability over accuracy",
"US$372 against about US$470"
],
"kw_zh":[
"它沒辦法裝在迴路上",
"重複性比準確度重要",
"372 美元對約 470 美元"
],
"a_en":"Because a benchtop instrument cannot sit in the loop. Every reading it gives costs a sampling event, which for a sealed reactor meant to run outside a lab is a contamination risk and a person standing there. Ours reads every ten minutes for weeks with nothing withdrawn, and for following one vessel repeatability matters more than absolute accuracy: we return the median of a burst on a flowing loop, the BioDrop one hand-pipetted cuvette. On cost, be careful. The photometer and measurement pages say US$371.78 for the Pro against NT$15,000, about US$470, for the BioDrop. Our Contribution page still says about US$360 against roughly US$15,000, and that is a currency slip we should fix.",
"a_zh":"因為桌上型儀器沒辦法裝在迴路上。它每給一個讀值就要抽一次樣，而對一個密閉、設計上要在實驗室外運轉的反應器來說，那就是污染風險，還需要有人站在那裡。我們的每十分鐘讀一次、連續幾週，中間什麼都不抽；而要追一個反應器，重複性比絕對準確度重要：我們回報的是流動迴路上一組 burst 的中位數，BioDrop 是一管手動吸的比色管。成本要講清楚：光度計頁和 Measurement 頁寫 Pro 是 US$371.78，BioDrop 是 NT$15,000，大約 470 美元。我們的 Contribution 頁還寫著大約 360 美元對大約一萬五千美元，那是幣別弄錯了，應該修掉。",
"trap_en":"Repeating the Contribution page's US$15,000; the bill of materials prices the reference at NT$15,000, about US$470.",
"trap_zh":"照抄 Contribution 頁的一萬五千美元；零件表寫參考儀器是 NT$15,000，大約 470 美元。",
"basis":"The obvious sceptical question, and our own cost claim is wrong on some pages",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q047"
},
{
"q_en":"Your silica concentration axis is set by pipetted volume. The measurement page gives the loop volume as 50 millilitres and the photometer page as 500. Does your calibration survive that?",
"q_zh":"你們 silica 的濃度軸是用吸量的體積定的。Measurement 頁寫迴路體積 50 mL，光度計頁寫 500 mL。這樣你們的校正還站得住嗎？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"measurement#What this calibration does not establish",
"hardware-photometer#5.2",
"results#Silica calibration"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"slopes need mass, not volume",
"H1 needs mg/mL",
"report milligrams added"
],
"kw_zh":[
"斜率只要質量，不要體積",
"H1 需要 mg/mL",
"改報加進去的毫克數"
],
"a_en":"The fitted slopes and the agreement with the reference survive, because those are instrument against instrument and instrument against milligrams added, and none of that needs the volume. What does not survive is any concentration in milligrams per millilitre, and that is exactly the unit one of our own pre-registered predictions is written in: H1 asks whether the benchtop reference agrees with single-scattering theory, with a threshold of 1.8 to 2.8 OD per milligram per millilitre. You cannot score that without the volume. Measurement says a measured hold-up of 50 millilitres; the photometer and Results pages put the silica into 500. So I would report the ladder in milligrams added and remeasure the loop before quoting any concentration.",
"a_zh":"擬合出來的斜率和跟參考儀器的一致性都還站得住，因為那些是儀器對儀器、儀器對加進去的毫克數，完全不需要體積。站不住的是任何以 mg/mL 表示的濃度，而那剛好就是我們自己事先登記的預測所用的單位：H1 問的是桌上型參考儀器是否符合單次散射理論，門檻訂在每 mg/mL 1.8 到 2.8 OD。沒有體積就沒辦法判定這一條。Measurement 頁寫量到的迴路持液量是 50 mL，光度計頁和 Results 頁卻寫 silica 是加進 500 mL。所以我會改報「加了幾毫克」，並在引用任何濃度之前把迴路重新量一次。",
"trap_en":"Picking one volume on the spot; the arithmetic that follows is wrong either way until the loop is remeasured.",
"trap_zh":"當場挑一個體積講；在迴路重新量過之前，後面的算術兩種都是錯的。",
"basis":"A concentration axis the pages give two ways is the weakest link in the calibration",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q048"
},
{
"q_en":"Your summary line says: within 3.8 percent of the benchtop BioDrop with no transform fitted, slope 1.001 against it. Take that apart for me, and then state the result the way a metrologist would.",
"q_zh":"你們的摘要寫：未擬合任何轉換就與桌上型 BioDrop 相差 3.8% 以內，對它的斜率是 1.001。請把這句話拆開講，再用計量的方式把結果重新陳述一次。",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"measurement#Two standards, two validation runs",
"hardware-photometer#5.2",
"engineering"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"two different runs",
"slope CI 0.892 to 1.110",
"offset 0.123, p 0.005"
],
"kw_zh":[
"兩個不同的實驗",
"斜率區間 0.892 到 1.110",
"偏移 0.123，p 0.005"
],
"a_en":"The two halves come from different runs. The 3.8 percent is a median paired difference on titanium dioxide in August, read undiluted, so that comparison is trustworthy only to about OD 1. The slope of 1.001 comes from eight silica points in October, and the headline leaves out what sits beside it: a constant offset of minus 0.123 OD, significant at p equals 0.005. Stated properly, the slope's 95 percent interval runs 0.892 to 1.110, so eight points pin it only to within about eleven percent of one, and the paired difference is minus 0.123 OD, interval minus 0.150 to minus 0.095. A scale error would have moved the slope; this moved the intercept.",
"a_zh":"這句話的兩半來自兩個不同的實驗。3.8% 是 8 月用二氧化鈦做的配對差中位數，而且是未稀釋讀的，所以那個比較只能信到大約 OD 1。斜率 1.001 來自 10 月 silica 的八個點，而摘要漏掉了旁邊那一項：固定偏移 −0.123 OD，p = 0.005 達顯著。正確的陳述是：斜率的 95% 區間是 0.892 到 1.110，所以八個點只能把它定在 1 的約 11% 之內；配對差是 −0.123 OD，區間 −0.150 到 −0.095。如果是刻度錯誤，動的會是斜率；這裡動的是截距，所以問題指向空白值，而不是光學。",
"trap_en":"Quoting slope 1.001 as if it were exact; the interval says eight points fix it only to about eleven percent.",
"trap_zh":"把斜率 1.001 當成精確值；區間顯示八個點只能把它定到約 11% 之內。",
"basis":"The headline claim is assembled from two runs and drops its offset",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q049"
},
{
"q_en":"You have never run a dilution series of washed Bacillus subtilis at known densities against this photometer. Predict what you would see, and say what result would surprise you.",
"q_zh":"你們從來沒拿洗過、已知密度的 Bacillus subtilis 做稀釋序列去對這台光度計。請預測你們會看到什麼，以及什麼結果會讓你們意外。",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"measurement#What this calibration does not establish",
"hardware-photometer#7.4",
"results"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"lower slope than beads",
"bends earlier than OD 2.5",
"age changes the scattering"
],
"kw_zh":[
"斜率比微球低",
"比 OD 2.5 更早彎掉",
"菌齡會改變散射"
],
"a_en":"I would expect the response to stay straight at low density, with the slope per milligram of dry cells coming out below silica's, because a cell's refractive index is nearer 1.33 to 1.41 against the bead's 1.46, so each particle scatters less. I would expect the departure from linearity to begin below OD 2.5, because rods and chains throw more light forward than spheres do and our short path collects that light. And I would expect replicate scatter to grow with culture age, as cells lengthen, chain and sporulate. What would surprise me is a slope above silica's, or a straight line all the way to OD 4.",
"a_zh":"我預期在低密度時反應還是直的，而每毫克乾菌重的斜率會比 silica 低，因為細胞的折射率大約 1.33 到 1.41，微球是 1.46，所以每顆散射得比較少。我預期開始偏離線性的點會低於 OD 2.5，因為桿狀和成串比球體往前散射更多，而我們的短光程剛好把那些光收進來。我也預期重複樣品之間的離散會隨菌齡變大，因為細胞會變長、成串、產孢。會讓我意外的是：斜率比 silica 高，或者一路直到 OD 4 都還是直線。",
"trap_en":"Predicting that the silica numbers transfer unchanged; the 5.57 factor and the OD 2.5 limit describe the instruments.",
"trap_zh":"預測 silica 的數字可以原封不動搬過來；5.57 這個係數和 OD 2.5 的上限描述的是儀器本身。",
"basis":"The experiment the wiki says is still owed, so the answer must be derived",
"dom":"measurement",
"star":0,
"nodes":[],
"figs":[],
"id":"q050"
},
{
"q_en":"In your light-plate assay the bacteria should respond differently to red and to green. What did you actually observe — do they stop producing under red and start under green?",
"q_zh":"你們的光板實驗裡，細菌對紅光和綠光應該有不同反應。你們實際觀察到什麼？紅光下停止生產、綠光下開始生產嗎？",
"type":"validate",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#Short-term light response",
"results#Long-term light response",
"results#What it settles"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"modulation, not switching",
"ELISA flat, DNPH moves",
"14-fold at 13 hours"
],
"kw_zh":[
"是調節，不是開關",
"ELISA 平的、DNPH 會動",
"13 小時 14 倍"
],
"a_en":"Modulation rather than switching, and the two assays say different things. The ELISA is flat: about 3 micrograms per millilitre before illumination and 2.6 to 3.2 at every time point under both colours in the short-term set, and 12 to 13 in all four conditions of the long-term set. The DNPH activity does move — green above red at every short-term point, 8 against 6 at three hours, 12 against 9 at six and 18 against 16 at eight, and strongly at thirteen hours in the long-term set, 0.1249 against 0.0089 millimolar alpha-ketobutyrate, a fourteen-fold induction ratio. So no, they do not stop under red: green raises activity, red does not switch it off, and with n = 2 and overlapping error bars the honest sentence is supported at thirteen hours and unresolved at sixteen.",
"a_zh":"是調節而不是開關，而兩個 assay 講的不是同一件事。ELISA 是平的：短期組照光前大約 3 微克每毫升，兩種顏色的每個時間點都是 2.6 到 3.2；長期組四個條件全部都是 12 到 13。DNPH 的活性確實會動——短期組每個時間點綠光都高於紅光，3 小時 8 對 6、6 小時 12 對 9、8 小時 18 對 16；長期組在 13 小時差距很大，0.1249 對 0.0089 毫莫耳 α-ketobutyrate，誘導比 14 倍。所以答案是「不會」：綠光會提高活性，紅光沒有把它關掉，而在 n = 2、誤差棒重疊的情況下，誠實的說法是 13 小時支持、16 小時未定。",
"trap_en":"Quoting our own Results key-result line, green light switches ACCD on. If a judge reads it out, correct it to green raises activity and red is not a clean off.",
"trap_zh":"照著我們 Results 頁上的 key result「Green light switches ACCD on」講。如果評審念出來，要主動修正成「綠光提高活性，紅光不是乾淨的 off」。",
"nodes":[
"W_LIGHT",
"C_GATE",
"M_ACT"
],
"figs":[
"h07",
"m07"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"measurement",
"id":"q051"
},
{
"q_en":"After thirteen hours we see a rise in production under the red light. How would you explain that rise?",
"q_zh":"13 小時之後，紅光組的生產量反而上升。你們怎麼解釋這個上升？",
"type":"reason",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#Long-term light response",
"results#Culture duration, 16 hr against 13 hr"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"green falls more than red rises",
"640 is not 672 nanometres",
"alpha-ketobutyrate turnover"
],
"kw_zh":[
"綠光掉得比紅光升得多",
"640 不是 672 奈米",
"α-ketobutyrate 被代謝掉"
],
"a_en":"The crossover is as much green falling as red rising: green went from 0.1249 to 0.0130 millimolar while red went from 0.0089 to 0.0923. For red not being a clean off state the explanation is hardware — CcaSR needs about 672 nanometres to switch off and our red LEDs emit at 640, and in the earlier wild-type blots the red reference was as strong as the brightest green, which looks like leakage from the green channel. For the fall under green we have two candidates we have not separated: the protein losing activity over extended incubation, and metabolic turnover of alpha-ketobutyrate, since DNPH measures an accumulated product and not a rate. Since the freeze we have built a 670 nanometre red plate specifically to get a clean off state, and that is the experiment that settles it.",
"a_zh":"這個交叉與其說是紅光升上去，不如說是綠光掉下來：綠光從 0.1249 掉到 0.0130 毫莫耳，紅光從 0.0089 升到 0.0923。紅光不是乾淨的 off，解釋在硬體：CcaSR 需要大約 672 奈米才關得掉，我們的紅光 LED 是 640 奈米；而早期野生型的 blot 裡紅光參考組和最亮的綠光一樣強，那看起來像是綠光通道的光譜外洩。綠光掉下來這邊，我們有兩個還沒分開的候選解釋：蛋白在長時間培養後失去活性，以及 α-ketobutyrate 被代謝掉——因為 DNPH 量的是累積的產物，不是速率。凍結之後我們做了 670 奈米的紅光板，就是為了拿到乾淨的 off 狀態，那就是收掉這題的實驗。",
"trap_en":"Explaining only the red rise. Most of the gap at sixteen hours is the green group collapsing from 0.1249 to 0.0130, and that needs its own explanation.",
"trap_zh":"只解釋紅光為什麼升。16 小時的差距大部分來自綠光組從 0.1249 崩到 0.0130，那需要自己的解釋。",
"nodes":[
"W_LIGHT",
"C_GATE"
],
"figs":[
"m07",
"h07"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"measurement",
"id":"q052"
},
{
"q_en":"In your Western blot data the signal sits close to 100 kilodaltons, when ACC deaminase should be near 35 to 40. How do you explain that?",
"q_zh":"你們 Western blot 的訊號落在接近 100 kDa，但 ACC 去胺酶應該在 35 到 40 附近。這個數據怎麼解釋？",
"type":"validate",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#Protein over time",
"results#Containment and release",
"measurement"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"two blot sets disagree",
"reactor blot 35 to 48 kilodaltons",
"no loading control on the plate blots"
],
"kw_zh":[
"兩組 blot 互相矛盾",
"反應器那組 35 到 48 kDa",
"光板那組沒有 loading control"
],
"a_en":"Our two blot sets disagree, and the one with the predicted size is the reactor run: anti-His on cell lysate, lumen and shell medium between fourteen and forty-four hours gave bands between 35 and 48 kilodaltons, consistent with the roughly 41 kilodalton recombinant enzyme. The light-plate blots put the band just below or between the 75 and 100 kilodalton markers, and the same construct cannot have two masses, so something in those gels is wrong — the likeliest candidates are an incompletely denatured dimer, since ACC deaminase is only active as a multimer, or a marker and lane assignment error. We cannot choose between them from the images we have, because those blots carry no loading control and no plasmid-free WB800 lane. The fix is specified and cheap: re-run with a fresh ladder, a loading control and a WB800 lane, and quantify against it.",
"a_zh":"我們兩組 blot 互相矛盾，而符合預測大小的是反應器那組：14 到 44 小時之間，anti-His 測細胞裂解液、lumen 和 shell 培養液，帶落在 35 到 48 kDa，跟大約 41 kDa 的重組酵素一致。光板那組的帶落在 75 到 100 kDa 標記之間或略低，而同一個構築不可能有兩個分子量，所以那幾片膠裡有東西錯了——最可能的是沒有完全變性的二聚體（ACC 去胺酶本來就只有多聚體有活性），或是標記與 lane 對應錯誤。從我們手上的影像沒辦法二選一，因為那組 blot 既沒有 loading control 也沒有無質體 WB800 lane。補救方法很明確也很便宜：換新的 ladder、加 loading control、加一條 WB800，重跑一次並據此定量。",
"trap_en":"Defending the high-molecular-weight band as if it were the right answer. The correct posture is that this blot set has a problem and the reactor set is the one we quote.",
"trap_zh":"替那條高分子量的帶辯護，好像它就是對的。正確的姿態是「這組 blot 有問題，我們引用的是反應器那組」。",
"nodes":[
"W_SEC",
"C_CTRL"
],
"figs":[
"m08"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"measurement",
"id":"q053"
},
{
"q_en":"Crucial: your ELISA shows no difference between green and red light, but your DNPH assay does. How do you explain that?",
"q_zh":"關鍵問題：你們的 ELISA 在綠光和紅光之間看不出差別，但 DNPH 看得出來。這個現象怎麼解釋？",
"type":"reason",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#ELISA and DNPH assay",
"results#Bioreactor test",
"results#ELISA"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"amount against activity",
"PLP and multimer maturation",
"plasmid-free control gives signal"
],
"kw_zh":[
"量 vs 活性",
"PLP 與多聚體成熟",
"無質體對照也有訊號"
],
"a_en":"They measure different things: competitive anti-His ELISA counts the protein whether or not it works, while DNPH only detects enzyme that actually turns ACC into alpha-ketobutyrate. The same gap appears in the reactor, where ELISA peaked at twelve hours and activity only at eighteen, with specific activity under 1 unit per milligram before rising to 6.3, so our reading is post-secretory maturation: ACC deaminase has to assemble as a multimer and load pyridoxal-5-phosphate, and neither happens the instant it crosses into the medium. Two things weaken the ELISA side specifically — the plasmid-free WB800 control gave 4.5 to 5.5 micrograms per millilitre on the same assay, and several wells sat above the top of the standard curve, so those are extrapolated comparisons and not certified concentrations. We have not tested the maturation explanation directly, and we also suspect light crosstalk between neighbouring light-plate wells flattened the ELISA further; both are named on the page as untested.",
"a_zh":"它們量的是不同的東西：競爭型 anti-His ELISA 不管蛋白有沒有在工作都會算進去，而 DNPH 只偵測真正能把 ACC 轉成 α-ketobutyrate 的酵素。同樣的落差在反應器裡也出現：ELISA 在 12 小時達峰，活性要到 18 小時，比活性在 18 小時之前低於 1 U/mg，之後升到 6.3——所以我們的解讀是分泌後成熟：ACC 去胺酶必須組成多聚體並裝上 pyridoxal-5-phosphate，這兩件事都不會在它一跨進培養液的瞬間完成。有兩件事特別削弱 ELISA 這一側——無質體的 WB800 對照在同一個 assay 上讀到 4.5 到 5.5 微克每毫升，而且有幾個孔超出標準曲線上緣，所以那些是外推的比較、不是確定的濃度。成熟這個解釋我們沒有直接測過，我們也懷疑光板鄰孔之間的光外洩讓 ELISA 更平；這兩點頁面上都標示為未經驗證。",
"trap_en":"Going straight to the maturation story. This question tests whether you know your assay floor: admit the plasmid-free control signal and the out-of-range wells first.",
"trap_zh":"直接跳到成熟那套解釋。這題考的是你知不知道自己 assay 的地板：先承認無質體對照有訊號、有幾個孔超出曲線範圍。",
"nodes":[
"M_ACT",
"C_CTRL",
"W_PLP"
],
"figs":[
"m06",
"m07"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"measurement",
"id":"q054"
},
{
"q_en":"You built two photometers, and one ran a twenty-day record. On the measurement page you tried different algorithms for the final OD value. What did you find after running all the algorithm tests?",
"q_zh":"你們做了兩台光度計，其中一台跑了二十天的紀錄。量測頁上你們試了不同演算法來算最終 OD 值。全部跑完之後發現了什麼？",
"type":"validate",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"measurement#Software algorithm calibration",
"hardware-photometer#8.1",
"measurement#od600-calibration"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"the estimator is not the lever",
"H6 failed",
"2.44 down to 0.016 OD"
],
"kw_zh":[
"估計量不是槓桿",
"H6 失敗",
"2.44 降到 0.016 OD"
],
"a_en":"That the estimator is not the lever and the gate after it is. We replayed eleven algorithms on the same logged raw bursts, so the only difference is the algorithm, and in clean flow the largest gap between any two of eight was 0.0039 OD, less than a fifth of our own calibration scatter. Our sharpest pre-registered prediction failed: H6 said the upper estimator, which trusts the brighter half of each burst, would scatter at most half as much as the symmetric MAD; it scattered 0.77 against 0.78, because a bubble brightens the Pro at high OD and darkens the fibre-coupled Slim, so any one-sided estimator is betting on the geometry it happens to sit in. What fixed it was two acceptance gates — a spread gate catching 97 percent of bubble readings while rejecting none of the clean ones, and a jump gate that cut the worst bubble error from 2.44 OD to 0.016. Five of the eight predictions were not supported and we report all eight.",
"a_zh":"結論是：估計量不是槓桿，估計量之後的那道 gate 才是。我們把十一種演算法在同一批已記錄的原始 burst 上重跑，所以唯一的差異就是演算法本身；在乾淨流動下，八種之間最大的差距是 0.0039 OD，不到我們自己校正散度的五分之一。我們最鋒利的預先登記預測失敗了：H6 說 upper（只信每個 burst 較亮的那一半）的散度最多只有對稱 MAD 的一半；結果是 0.77 對 0.78，因為氣泡在高 OD 下讓 Pro 變亮、卻讓光纖耦合的 Slim 變暗——所以任何單邊估計量都是在賭它剛好坐在哪一種幾何上。真正解決問題的是兩道接受 gate：spread gate 抓到 97% 的氣泡讀值而且沒有誤殺任何乾淨讀值，jump gate 把最糟的氣泡誤差從 2.44 OD 降到 0.016。八個預測有五個不被支持，而我們八個全部報出來。",
"trap_en":"Listing the algorithms. The result is a negative one about the premise behind the shipped estimator, plus the gate that replaced it; and the same study explained the 434-hour curve's false steps as quantisation.",
"trap_zh":"把演算法一個一個列出來。真正的結果是「出貨版估計量背後的前提被推翻」加上取代它的那道 gate；同一個研究也解釋了 434 小時那條曲線的假階梯其實是量化假影。",
"nodes":[
"M_BUBBLE",
"M_434",
"C_CTRL"
],
"figs":[
"m02",
"m03"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"measurement",
"id":"q055"
},
{
"q_en":"Your plasmid-free WB800 control reads 4.5 to 5.5 micrograms per millilitre on the same ELISA, and several samples sit above the top of the standard curve. What is your limit of quantification, and which conclusions survive it?",
"q_zh":"你們無質體的 WB800 對照在同一個 ELISA 上讀到 4.5 到 5.5 微克每毫升，而且有幾個樣品超出標準曲線上緣。你們的定量極限是多少？哪些結論還站得住？",
"type":"boundary",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#ELISA",
"results#DNPH assay"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"0.093 to 3 micrograms per millilitre",
"host background, not zero",
"relative claims survive"
],
"kw_zh":[
"0.093 到 3 微克每毫升",
"宿主背景不是零",
"相對比較還站得住"
],
"a_en":"The standard curve runs from 0.093 to 3 micrograms per millilitre in duplicate with an R-squared of 0.9967, so anything above 3 is extrapolation and we should call it that rather than a concentration. The plasmid-free WB800 control reading 4.5 to 5.5 means the assay also carries a host background in this matrix, so our numbers are apparent His-tagged protein and not recombinant-specific yield. What survives is the comparisons where both arms sit in the same matrix on the same plate — lumen against shell at 10.7 and 10.5, the shell permeate staying above the plasmid-free control through seventy-two hours, and the rank order of ACC deaminase against LEA14 and BoPep4 at roughly three to one. What does not survive is any absolute titre, and the fix is a dilution series that brings the samples inside the curve plus a matched medium blank.",
"a_zh":"標準曲線是 0.093 到 3 微克每毫升、每點兩重複、R² 0.9967，所以超過 3 的都是外推，我們應該這樣稱呼它而不是叫它濃度。無質體 WB800 對照讀到 4.5 到 5.5，意思是這個 assay 在這個基質裡本來就帶宿主背景，所以我們的數字是「表觀 His-tag 蛋白」，不是重組蛋白專一的產量。還站得住的是兩邊在同一塊盤、同一個基質裡的比較——lumen 對 shell 的 10.7 對 10.5、shell 透過液 72 小時都高於無質體對照、以及 ACC 去胺酶大約是 LEA14 和 BoPep4 三倍的排序。站不住的是任何絕對效價；補救方法是把樣品稀釋到曲線範圍內，再加一個相同基質的空白對照。",
"trap_en":"Quoting 16 micrograms per millilitre as a titre. It is above the validated range of the curve, and the control on the same plate was not zero.",
"trap_zh":"把 16 微克每毫升當效價報出來。它超出曲線的有效範圍，而且同一塊盤上的對照組不是零。",
"nodes":[
"C_CTRL",
"M_CURVE"
],
"figs":[
"m06"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"measurement",
"id":"q056"
},
{
"q_en":"In your PLP experiment the csn arm without PLP gives about 21 and the WB800 control gives about 32. The control is higher than the sample, yet your page says they are nearly identical. Which is it?",
"q_zh":"你們 PLP 那個實驗裡，csn 不加 PLP 大約 21，而 WB800 對照大約 32。對照組比樣品還高，但你們頁面上寫「幾乎相同」。到底是哪一個？",
"type":"gap",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#DNPH assay: ACCD activity and the PLP requirement",
"results#DNPH assay"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"the page overstates it",
"indistinguishable, not equal",
"PLP claim still holds"
],
"kw_zh":[
"頁面講過頭了",
"是不可分辨，不是相等",
"PLP 的結論仍成立"
],
"a_en":"The page overstates it and the right word is indistinguishable, not identical: the control sits above the csn arm, which at a single well per point and at the low end of the assay's range means the two cannot be separated, not that they are equal. What we can still claim is the comparison the experiment was built for — adding PLP raised csn by 13.7 nanomoles of product above the WB800 baseline and SamyQ with PLP by 30.0, so the cofactor requirement holds on both arms. What we cannot claim from this figure is that csn without PLP has no activity, because the host background in this matrix is at least as large. The honest sentence is that PLP is required for us to measure activity at all, and that this particular comparison needs replicates before it says anything about the arm without it.",
"a_zh":"頁面講過頭了，正確的字是「不可分辨」而不是「相同」：對照組比 csn 那一組還高，而在每點只有一個孔、而且落在 assay 範圍低端的情況下，這意思是兩者分不開，不是兩者相等。還能主張的是這個實驗原本要做的比較——加了 PLP 之後 csn 比 WB800 基線高出 13.7 奈莫耳產物，SamyQ 加 PLP 高出 30.0，所以兩組都支持輔因子需求。不能從這張圖主張的是「csn 不加 PLP 就沒有活性」，因為這個基質裡的宿主背景至少一樣大。誠實的講法是：PLP 是我們量得到活性的前提，而這個特定比較在講不加 PLP 那一組之前，需要先有重複數。",
"trap_en":"Reading the sentence off the page. Naming the inconsistency yourself and saying which claim still stands is worth more than defending the wording.",
"trap_zh":"照頁面上那句念。自己先點出不一致、再說哪一個主張仍然成立，比替用詞辯護有價值得多。",
"nodes":[
"W_PLP",
"C_CTRL"
],
"figs":[
"m07"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"measurement",
"id":"q057"
},
{
"q_en":"ELISA peaks at twelve hours and activity at eighteen, and you call it post-secretory maturation. Give me one experiment that separates maturation from a protease clipping the His tag, and one that separates it from an assay artefact.",
"q_zh":"ELISA 在 12 小時達峰、活性在 18 小時，你們說那是分泌後成熟。請給我一個實驗分開「成熟」和「蛋白酶把 His-tag 切掉」，再給一個分開「成熟」和「assay 假影」。",
"type":"reason",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#Bioreactor test: ELISA and DNPH over time",
"results#Product in the permeate"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"bench-hold a 12-hour sample",
"blot for size, not amount",
"spiked recovery"
],
"kw_zh":[
"把 12 小時樣品放著",
"blot 看大小不是看量",
"加標回收"
],
"a_en":"For maturation against proteolysis, take the twelve-hour permeate, split it, and hold one half at assay temperature with PLP while the other goes straight to the freezer: if activity climbs in the held half with no new protein present, that is maturation, because nothing was being made. Proteolysis predicts the opposite signature and is read on a blot rather than an ELISA — a clipped His tag loses ELISA signal while the band shifts down a few kilodaltons, so the discriminator is size, not amount. For the assay artefact, run a spiked recovery: add a known amount of active enzyme into early permeate and into late permeate and see whether both return the same percentage, because matrix interference at six hours would show up as low recovery there and nowhere else. None of those three has been run, which is why the page says we have not tested this directly.",
"a_zh":"要分開成熟和蛋白分解：取 12 小時的透過液，分成兩半，一半在 assay 溫度下加 PLP 放著、另一半直接冷凍；如果放著那一半活性自己爬上來、而且沒有新的蛋白被製造出來，那就是成熟，因為那段時間什麼都沒在做。蛋白分解預測的是相反的特徵，而且要用 blot 看而不是 ELISA——His-tag 被切掉會讓 ELISA 訊號下降、同時帶往下移幾個 kDa，所以判準是大小不是量。要排除 assay 假影就做加標回收：把已知量的活性酵素分別加進早期和晚期的透過液，看兩者回收率是否相同，因為 6 小時那個基質如果有干擾，就只會在那裡出現低回收。這三個實驗我們都還沒做，這也是頁面上寫「我們沒有直接測過」的原因。",
"trap_en":"Restating the mechanism in more detail. The question asks for discriminating experiments, so answer with the three designs and then say none has been run.",
"trap_zh":"把機制講得更詳細一點。這題要的是能分辨的實驗設計，所以要回答三個設計，然後說我們都還沒做。",
"nodes":[
"M_ACT"
],
"figs":[
"m07",
"m08"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"measurement",
"id":"q058"
},
{
"q_en":"91.5 percent of your reference readings in the 434-hour run fell on an exact integer count, and 26 of the OD jumps came from the pipeline rather than the culture. Everything before October was read through that pipeline. Which published numbers change?",
"q_zh":"434 小時那次實驗裡，91.5% 的參考通道讀值落在整數上，而 26 次 OD 跳動來自訊號處理而不是培養本身。十月之前的所有東西都是經過那條管線讀出來的。哪些已發表的數字會因此改變？",
"type":"reason",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"measurement#Software algorithm calibration",
"measurement#What the instrument had already recorded"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"shape survives, steps do not",
"calibrations are independent",
"run 6 is the gated record"
],
"kw_zh":[
"形狀還能用，階梯不能",
"校正是獨立的",
"run 6 才是上了 gate 的紀錄"
],
"a_en":"The shape of the 434-hour curve survives and the small steps inside it do not. The outlier gate keeps samples within three median absolute deviations of the median, and when more than half of sixteen samples share one integer the deviation is zero, so the fence has no width and the filter collapses into taking the most common count: at 32 counts with a path-length factor of 5, one count is 0.067 OD. So the endurance claim, the fault-detection result and the 26.7 hours of lead all stand, because they rest on the reference channel stepping and on the run lasting, not on the OD value between steps; what cannot be read is any small OD change in that window, and the rejection percentage we had been calling bubbles was counting quantisation flicker in that regime. The TiO2 and SiO2 calibrations are unaffected, because they are paired readings against a benchtop instrument at each concentration. Run 6 is the first record taken with the gate fitted, which is why we point at it for growth numbers.",
"a_zh":"434 小時那條曲線的形狀還能用，裡面那些小階梯不能。離群值 gate 保留中位數上下三個 MAD 內的樣本，而當十六個樣本有超過一半落在同一個整數上，MAD 就是零、圍籬寬度歸零，整個濾波器塌縮成「取最常見的那個整數」：在 32 counts、光程因子 5 的情況下，一個 count 就是 0.067 OD。所以耐久性的主張、故障偵測的結果、26.7 小時的提前量都站得住，因為它們靠的是參考通道在跳、以及這次實驗撐了多久，不是階梯之間的 OD 值；不能讀的是那段時間裡任何小幅度的 OD 變化，而我們原本當成「氣泡」在報的拒絕率，在那個狀態下算的是量化抖動。TiO₂ 和 SiO₂ 校正不受影響，因為那是每個濃度都和桌上型儀器配對讀值。run 6 是第一份裝了 gate 之後的紀錄，所以講生長數字時我們指的是它。",
"trap_en":"Saying the 434-hour run is invalid. It is the run that produced the fault-detection result; what is invalid is reading small OD steps inside it.",
"trap_zh":"說 434 小時那次實驗作廢。那次實驗正是故障偵測結果的來源；作廢的是「讀它裡面的小幅 OD 階梯」。",
"nodes":[
"M_434",
"M_BUBBLE"
],
"figs":[
"m03",
"m04"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"measurement",
"id":"q059"
},
{
"q_en":"Your photometer's working limit is about OD 2.5 and the 5.57 scaling factor comes from one silica run. Your reactor runs report 2.71 and 3.77. What is the 3.77 worth?",
"q_zh":"你們光度計的工作上限大約是 OD 2.5，而 5.57 的換算係數來自一次二氧化矽實驗。但反應器的紀錄報了 2.71 和 3.77。那個 3.77 值多少？",
"type":"boundary",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"hardware-photometer#7.4",
"measurement#October 10",
"results#Six runs"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"above the limit it is extrapolation",
"sample beam a tenth of reference",
"silica calibrates the instrument, not the cell"
],
"kw_zh":[
"超過上限就是外推",
"樣品光束剩參考的十分之一",
"二氧化矽校的是儀器不是細胞"
],
"a_en":"Above the working limit it is a turbidity extrapolation and not a density we would defend. Beyond about 2.7 the sample signal falls to a tenth of the reference, which trips the low-signal warning, and that is exactly what ended run 6 at thirty-seven hours: the beam died, the reported value stepped to about 9.9, and the gate marked the stretch rather than publishing it. The deeper limit applies to every number on that axis — silica calibrates the instrument, not the organism, because a one-micrometre bead is a sphere of refractive index 1.46 at 2.3 grams per cubic centimetre while a vegetative Bacillus subtilis cell is a rod, often in chains, nearer 1.33 to 1.41 and 1.1. So the ladder converts a reading into equivalent particle counts, and a dilution series of washed cells is still owed before any of it becomes cell mass.",
"a_zh":"超過工作上限之後那是濁度的外推，不是我們會替它辯護的密度。大約 2.7 之上，樣品訊號會掉到參考的十分之一、觸發低訊號警示，而這正是 run 6 在 37 小時結束的原因：光束掛了、報出來的值跳到大約 9.9，而 gate 把那一段標記起來而不是發布它。更深一層的限制適用於那個軸上的每一個數字——二氧化矽校的是儀器不是生物，因為 1 微米的球是折射率 1.46、密度 2.3 克每立方公分的圓球，而營養期的 B. subtilis 是桿狀、常常成鏈，折射率約 1.33 到 1.41、密度 1.1。所以這條梯子把讀值換成「等效顆粒數」，而在它變成細胞質量之前，我們還欠一條洗過的細胞稀釋系列。",
"trap_en":"Quoting 3.77 as a cell density. Say it is a turbidity reading above the characterised range, and that the conversion to cell count has not been done.",
"trap_zh":"把 3.77 當細胞密度報出來。要說那是超出已表徵範圍的濁度讀值，而且換算成細胞數這件事還沒做。",
"nodes":[
"M_SIO2",
"M_CURVE"
],
"figs":[
"m01"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"measurement",
"id":"q060"
},
{
"q_en":"Two things changed between run 5 and run 6 — the acceptance gate went on and the permeate draw was halved. How do you separate them?",
"q_zh":"run 5 和 run 6 之間變了兩件事——接受 gate 上線，同時透過液抽取率減半。你們怎麼把這兩件事分開？",
"type":"gap",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"measurement#The next run was the test",
"results#Six runs"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"we cannot, and the page says so",
"31 readings held back",
"the end of the run called correctly"
],
"kw_zh":[
"分不開，頁面也這樣寫",
"31 筆被攔下來",
"run 的結尾判對了"
],
"a_en":"We cannot, and the page says so rather than claiming the clean record for the gate. A slower draw pulls in fewer bubbles, so the fact that no window in run 6 exceeded twenty percent bubbles cannot be credited to the gate alone. What belongs to the gate by itself is narrower and we state it that way: thirty-one of 1083 readings held back instead of published, and the end of the run called correctly when the sample beam fell to a tenth of the reference and the reported value stepped to about 9.9 with nothing abnormal inside the bursts. Separating them properly is one run at the same draw rate with the gate off, which is a day of reactor time and the experiment we would run next on this axis.",
"a_zh":"分不開，而頁面上寫的是這句話，不是把乾淨的紀錄記在 gate 頭上。抽得慢本來就會帶進比較少的氣泡，所以 run 6 沒有任何一個視窗超過 20% 氣泡，不能全算是 gate 的功勞。單獨屬於 gate 的部分比較窄，我們也是這樣講：1083 筆裡有 31 筆被攔下來而沒有發布，以及當樣品光束掉到參考的十分之一、報值跳到大約 9.9、而 burst 內部看起來完全正常時，run 的結尾被正確判定。要真正分開，就是在同樣抽取率下把 gate 關掉再跑一次，那是一天的反應器時間，也是我們在這條線上接下來要做的實驗。",
"trap_en":"Crediting the clean bubble record to the gate. Two variables moved together; name the narrow claim that is the gate's alone.",
"trap_zh":"把乾淨的氣泡紀錄算成 gate 的功勞。兩個變數一起動了；要講出單獨屬於 gate 的那個窄主張。",
"nodes":[
"M_BUBBLE"
],
"figs":[
"m05"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"measurement",
"id":"q061"
},
{
"q_en":"Your jump gate accepts a new level once three readings agree. An air slug lasting longer than ninety seconds therefore gets accepted. What is the fix?",
"q_zh":"你們的 jump gate 只要三筆讀值一致就接受新的水準。那麼超過 90 秒的氣柱還是會被接受。怎麼解決？",
"type":"boundary",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"measurement#What this calibration does not establish",
"hardware-photometer#8.1"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"the page states this limit",
"alarm, not silent correction",
"fix it in the plumbing"
],
"kw_zh":[
"頁面自己寫了這個限制",
"發警報而不是默默修正",
"要在管路上解決"
],
"a_en":"That limit is stated on the page, and it is why the gate raises an alarm instead of silently correcting: a growing culture does not move 0.05 OD in thirty seconds, so any accepted step that large deserves a human look. Software cannot do better than that, because when the flow cell fills completely with air all fourteen samples in a burst agree perfectly and are all wrong together — on 10 October the Pro read 0.74 to 0.91 against a true 3.18 and nothing inside those bursts looks abnormal. So the real fix is in the plumbing: fix the inlet below the surface, keep it clear of the stirring vortex, and add a bubble trap, because a gate can reject a bad reading but cannot replace it. On the day it happened the cause was an inlet tube that had fallen out of the beaker, and one alarm would have had someone put it back inside the first minute.",
"a_zh":"這個限制頁面上就寫了，也正是 gate 選擇發警報而不是默默修正的原因：一個在生長的培養不會在 30 秒內移動 0.05 OD，所以任何被接受的這麼大的階梯都值得人去看一眼。軟體做不到更好，因為當流通池完全充滿空氣時，一個 burst 裡的十四個樣本會完全一致、而且一起錯——10 月 10 日那次 Pro 讀 0.74 到 0.91，真值是 3.18，而那些 burst 裡面沒有任何異常。所以真正的解法在管路：把進水口固定在液面下、遠離攪拌漩渦，並加裝氣泡收集器，因為 gate 可以拒絕一筆壞讀值，但沒辦法生出一筆好的來替代。那天真正的原因是進水管掉出燒杯，而一個警報就能讓人在第一分鐘內把它放回去。",
"trap_en":"Proposing a cleverer filter. No estimator rescues a reading taken through air; the answer is an alarm plus hardware.",
"trap_zh":"提出一個更聰明的濾波器。沒有任何估計量能救回一筆穿過空氣量到的讀值；答案是警報加硬體。",
"nodes":[
"M_BUBBLE"
],
"figs":[
"m02"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"measurement",
"id":"q062"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q063"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q064"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q065"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q066"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q067"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q068"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q069"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q070"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q071"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q072"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q073"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q074"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q075"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q076"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q077"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q078"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q079"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q080"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q081"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q082"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q083"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q084"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q085"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q086"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q087"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q088"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q089"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q090"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q091"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q092"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q093"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q094"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q095"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q096"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q097"
},
{
"q_en":"Before we go deep: what physically drives liquid across the fibre wall, and what sets how much permeate you actually get?",
"q_zh":"先問基本的：是什麼把液體推過纖維壁的？你們實際收到多少滲透液，又是由什麼決定的？",
"type":"design",
"tier":"A",
"pages":[
"hardware",
"software",
"biomanufacturing"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"transmembrane pressure drives it",
"263 at 0.30 bar",
"shell pump sets rate"
],
"kw_zh":[
"跨膜壓驅動",
"263 配 0.30 bar",
"殼側幫浦決定速率"
],
"a_en":"Transmembrane pressure drives it, but in practice a pump sets the rate. Permeation follows the pressure difference across the wall, and our membrane cycles recommend 263 millilitres a minute at a transmembrane pressure of 0.30 bar. In a run, though, a second pump draws the shell side at a rate we choose: 24 millilitres a minute on 8 October, halved to 12 for the 14 October run and raised to 17 for the 17 October run. There is no permeate flow meter, so what we know is the pump setting, not a measured flux. On 200 square centimetres, 12 millilitres a minute is about 36 LMH.",
"a_zh":"是跨膜壓在驅動，但實際上速率是幫浦設定的。滲透量取決於膜兩側的壓差，我們的薄膜循環建議的操作點是 263 mL/min、跨膜壓 0.30 bar。不過真正運轉時，是第二顆幫浦按我們設定的速率把殼側抽出來：10 月 8 日是 24 mL/min，10 月 14 日那次減半到 12，10 月 17 日那次提高到 17。我們沒有裝滲透側流量計，所以我們知道的是幫浦設定值，不是量到的通量。以 200 平方公分來算，12 mL/min 大約是 36 LMH。",
"trap_en":"Quoting the 2 LMH design flux as what the reactor runs at. Every scaling number on Biomanufacturing uses 2 LMH, while the October runs drew 36 and 51 LMH, and the user manual says the transmembrane pressure is a few kilopascals in normal operation, not 0.30 bar.",
"trap_zh":"把 2 LMH 的設計通量講成反應器實際的操作值。Biomanufacturing 上每個放大數字都用 2 LMH，但十月那兩次運轉抽的是 36 和 51 LMH；而使用手冊寫的是正常運轉下跨膜壓只有幾個 kPa，不是 0.30 bar。",
"basis":"a judge checks whether the headline flux is measured, assumed, or simply a pump setting",
"dom":"hardware",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q098"
},
{
"q_en":"You report the fouling trend as permeability halving from 2,520 to 1,210, and you also say no fouling threshold was reached, with the alarm set at seventy per cent of steady state. Reconcile those two for me.",
"q_zh":"你們把污垢趨勢寫成通透率從 2,520 掉到 1,210、少了一半，同時又說沒有觸發任何污垢門檻，而警報設在穩態的七成。請幫我把這兩件事對起來。",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"software",
"engineering",
"contribution"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"1.9 to 4.4 kilopascals",
"halved is past seventy",
"one sweep one module"
],
"kw_zh":[
"1.9 升到 4.4 kPa",
"減半已低於七成",
"一次掃描一個模組"
],
"a_en":"I cannot fully reconcile them, and that is a fair hit. Over the 77 hour run on 17 October the pressure the module needed beyond clean water at the same flow rose from 1.9 to 4.4 kilopascals, and permeability fell from 2,520 to 1,210 litres per square metre per hour per bar. Our controller alarms when permeability drops below seventy per cent of steady state, and a halving is well past that, yet our pages say no threshold was reached. Either the alarm is keyed to a steady state we never established, or the trace and the alarm are not the same quantity. We should state which. The baseline is one clean-water sweep on one module.",
"a_zh":"我沒辦法完全對起來，這個質疑是合理的。10 月 17 日那次 77 小時運轉，模組在同樣流量下比清水多需要的壓力從 1.9 升到 4.4 kPa，通透率從 2,520 掉到 1,210 LMH/bar。我們的控制器設定是通透率低於穩態的七成就警報，減半早就超過了，可是我們頁面上寫沒有觸發任何門檻。要嘛那個警報是對著一個我們從來沒建立起來的穩態，要嘛曲線上那個量和警報監看的量根本不是同一個。我們應該把是哪一種寫清楚。而且基線只有同一個模組的一次清水掃描。",
"trap_en":"Saying the rise is small so the membrane is fine. The absolute kilopascals are small, but a permeability halving is the number the alarm is written against, and the comparison baseline is a single sweep on a single module.",
"trap_zh":"說壓力升幅很小、所以膜沒問題。絕對的 kPa 數字確實小，但警報判準寫的就是通透率，而通透率掉了一半；而且比較用的基線只有單一模組的單次掃描。",
"basis":"the project's own fouling datum and its own alarm threshold disagree in print",
"dom":"hardware",
"star":0,
"nodes":[],
"figs":[],
"id":"q099"
},
{
"q_en":"Your pages name the duty-cycled recirculation pump as the next experiment and say you have not run it. Predict for me what happens inside the fibres during the off phase.",
"q_zh":"你們的頁面把「循環幫浦間歇運轉」列為下一個實驗，也說還沒做。請預測一下：停機那段時間，纖維裡面會發生什麼事？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"biomanufacturing",
"hardware",
"software"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"shear sweeps the membrane",
"1 mm bore sediments",
"first loop failed sedimentation"
],
"kw_zh":[
"剪切負責掃膜",
"1 mm 內徑會沉降",
"第一版就敗在沉降"
],
"a_en":"Cells would settle in the lumens and I would expect the fouling trace to rise faster. Duty cycling the recirculation pump cuts the dominant electrical load, the cumulative shear exposure and the medium draw all at once, which is why it is the first experiment we would run on the hardware side. The risk is that wall shear is the thing sweeping the membrane, and with the pump off there is none. A one millimetre bore is narrow enough for a dense culture to sediment, and our very first loop failed on sedimentation until we put a stirrer under the reservoir. We have no backflush or relaxation step either, and no cleaning protocol: a fouled module is replaced.",
"a_zh":"細胞會在管腔裡沉下來，我預期污垢曲線會升得更快。讓循環幫浦間歇運轉可以同時減少最大的耗電、累積剪切暴露和培養基用量，所以這是硬體端我們最想先做的實驗。風險在於掃膜靠的就是壁剪切，幫浦停掉就完全沒有。1 毫米的內徑對高密度菌液來說夠細，足以沉降；我們最早那版迴路就是敗在沉降，後來在儲液瓶下面加了攪拌子才解決。而且我們既沒有逆洗也沒有鬆弛步驟，連清洗程序都沒有：模組髒了是直接換掉。",
"trap_en":"Answering that the biology responds over hours so the off phase is harmless. That is the argument for trying it; the open question is settling and fouling in the fibres, which nobody has measured.",
"trap_zh":"回答「生物反應是以小時為尺度，所以停機沒差」。那是「值得一試」的理由；真正未知的是纖維裡的沉降與結垢，沒有人量過。",
"basis":"the highest-value unrun hardware experiment the team has named itself",
"dom":"hardware",
"star":0,
"nodes":[],
"figs":[],
"id":"q100"
},
{
"q_en":"A 0.2 micron pore and a protein running at about forty kilodaltons. Explain why the protein goes through and a cell does not, and then tell me what else goes through.",
"q_zh":"0.2 微米的孔徑，配上一個大約四十千道爾頓的蛋白。請解釋為什麼蛋白過得去、細胞過不去；然後告訴我還有什麼東西也會一起過去。",
"type":"boundary",
"tier":"A",
"deep":1,
"pages":[
"hardware",
"safety-and-security",
"results",
"engineering"
],
"seat":"hw",
"backup":"wet2",
"kw_en":[
"pore is 200 nanometres",
"barrier is cellular",
"vesicles and debris pass"
],
"kw_zh":[
"孔徑是 200 奈米",
"阻隔是細胞級的",
"囊泡與碎片會過"
],
"a_en":"Size, and nothing cleverer. The pore is 200 nanometres. Our ACC deaminase runs at about 42 kilodaltons on the blot, a few nanometres across, so it passes freely, while a Bacillus cell is micrometre scale and cannot. That means the barrier is cellular, not molecular. Vesicles and cell debris in the 20 to 200 nanometre range go through with the protein, along with every medium component. We used to specify a 50 kilodalton cut-off and claim the membrane retained vesicles; when we froze the specification against the invoices we found the part is 0.2 micron microfiltration and withdrew both claims in writing.",
"a_zh":"就是尺寸，沒有更聰明的機制。孔徑是 200 奈米。我們的 ACC deaminase 在膜上跑在大約 42 kDa，直徑只有幾奈米，所以輕鬆通過，而 Bacillus 的細胞是微米級，過不去。這表示這層阻隔是細胞級的，不是分子級的。20 到 200 奈米的囊泡和細胞碎片會跟蛋白一起出去，培養基成分也都會。我們以前的規格寫 50 kDa 截留、還說膜能擋住囊泡；後來把規格對著發票凍結時，發現買到的是 0.2 微米微過濾模組，就把這兩個說法正式撤掉了。",
"trap_en":"Quoting one cell size as settled. Safety, the Bioreactor page and Contribution say 0.25 to 1.0 micron; Results and the fouling model say a 1 to 2 micron rod and 0.8 by 3 microns, with no citation. Say which page you are quoting.",
"trap_zh":"把某一個細胞尺寸講成定論。Safety、Bioreactor 頁和 Contribution 寫 0.25 到 1.0 微米；Results 和污垢模型寫 1 到 2 微米的桿狀、還有 0.8 乘 3 微米，而且都沒有引用。要說清楚你引的是哪一頁。",
"basis":"the withdrawn molecular-weight cut-off is the team's best honesty story and a judge will test whether they understand it",
"dom":"hardware",
"star":0,
"nodes":[],
"figs":[],
"id":"q101"
},
{
"q_en":"Your bioreactor page headlines that the lumen and shell sides read the same, 10.7 against 10.5 by ELISA. Your Results page says the port each sample came from was never recorded. Which is it, and what sieving coefficient do you have?",
"q_zh":"你們 Bioreactor 頁的主打結果是管腔側和殼側讀數一樣，ELISA 10.7 對 10.5。可是 Results 頁說每個樣品是從哪個接口抽的根本沒有記錄。到底是哪一個？你們的篩分係數是多少？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"results",
"hardware",
"software",
"contribution"
],
"seat":"hw",
"backup":"wet2",
"kw_en":[
"10.7 against 10.5",
"port not recorded",
"above the top standard"
],
"kw_zh":[
"10.7 對 10.5",
"接口沒有記錄",
"超出最高標準品"
],
"a_en":"Both are on our wiki and they do not sit together. The 8 October ELISA gives 10.7 micrograms per millilitre in the lumen against 10.5 on the shell side, with a time course where both sides peak near 16 hours and stay within about 0.8 of each other. Our Results page then says that for the October reactor samples the record does not say which port each was drawn from, and quotes 3.4 to 6.5 across both runs. Most samples also read above the top standard of about 3 micrograms per millilitre, so they are extrapolated. We have no sieving coefficient. A paired lumen and shell sample with the port written down is what would give us one.",
"a_zh":"這兩段都在我們 wiki 上，而且對不起來。10 月 8 日的 ELISA 給出管腔側 10.7 µg/mL、殼側 10.5，時間序列上兩側都在大約 16 小時達到高峰，彼此相差約 0.8 以內。可是我們 Results 頁又說，十月那兩次反應器樣品的記錄沒有寫每一個是從哪個接口抽的，並且報的是兩次運轉合起來 3.4 到 6.5。另外多數樣品都讀在最高標準品（大約 3 µg/mL）之上，所以數值是外推的。我們沒有篩分係數。要拿到它，需要的是一組配對的管腔與殼側樣品，而且把接口寫下來。",
"trap_en":"Defending 10.7 against 10.5 as proof the protein crosses freely. Two numbers that close cannot be defended when the ports are unrecorded, the values are extrapolated above the top standard, and Results says membrane passage is not conclusively demonstrated.",
"trap_zh":"拿 10.7 對 10.5 當成蛋白自由通過的證明。接口沒記錄、數值是超出最高標準品的外推值，而 Results 還寫著過膜尚未確證——這麼接近的兩個數字守不住。",
"basis":"the project's central product claim rests on numbers its own Results page will not assign to a side",
"dom":"hardware",
"star":0,
"nodes":[],
"figs":[],
"id":"q102"
},
{
"q_en":"What is the pinch valve really for? Convince me it is not just a tap.",
"q_zh":"那顆夾管閥到底是幹什麼的？說服我它不只是一個開關。",
"type":"design",
"tier":"A",
"deep":1,
"pages":[
"hardware",
"software",
"engineering"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"Chang found nothing drove it",
"0.5 bar releases latches",
"0.70 bar stops pumps"
],
"kw_zh":[
"張教授指出沒有推力",
"0.5 bar 釋放並鎖定",
"0.70 bar 停幫浦"
],
"a_en":"It exists because an expert found a hole in our design. On 18 June Professor Chang pointed out that nothing was pushing the protectant from the lumen to the shell side, and that a higher flow rate would only recirculate the fluid. He recommended a valve after the membrane. So the pinch valve clamps the return line about fifty millimetres past the out-lumen port and builds the pressure across the fibres. It is also the safety actuator: past 0.5 bar on lumen-in or transmembrane pressure for five samples running it releases and latches a fault, and a separate 0.70 bar trip stops both pumps. We chose a servo over a stepper because a stepper releases when the power is cut.",
"a_zh":"它會存在，是因為外部專家指出我們設計上的一個漏洞。6 月 18 日張教授點出：沒有任何東西把保護蛋白從管腔側推到殼側，而且把流量開大只是讓液體一直繞圈而已。他建議在膜之後加一顆閥。所以這顆夾管閥夾住離出管腔口大約 50 毫米的回流管，建立起纖維兩側的壓差。它同時是安全執行件：管腔入口或跨膜壓超過 0.5 bar、連續五個取樣就會釋放並鎖定故障，另外還有一個獨立的 0.70 bar 跳脫會停掉兩顆幫浦。我們選伺服而不是步進，是因為步進一斷電就鬆開。",
"trap_en":"Describing it only as pressure regulation. Half the answer is that an outside reviewer found the gap it fills, and the other half is that holding position on power loss is why it is a servo, with a live culture in the loop.",
"trap_zh":"只把它講成壓力調節。答案的一半是「這個缺口是外部審查者指出來的」，另一半是「斷電時能保持位置」才是選伺服的理由——因為迴路裡是活的菌液。",
"basis":"user feedback driving a specific hardware change is a Hardware judging criterion",
"dom":"hardware",
"star":0,
"nodes":[],
"figs":[],
"id":"q103"
},
{
"q_en":"Where does your culture see the most shear, in the pump head or in the fibre lumen, and how do you know it is tolerable?",
"q_zh":"你們的菌液受到最大剪切的地方是在幫浦頭還是纖維管腔？你怎麼知道細胞承受得住？",
"type":"compare",
"tier":"A",
"deep":1,
"pages":[
"biomanufacturing",
"hardware",
"software"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"4064 per second at 263",
"divide by fibre count",
"138 passes an hour"
],
"kw_zh":[
"263 時 4064 /s",
"先除以纖維數",
"每小時約 138 次"
],
"a_en":"In the fibre by calculation, but the pump may be what actually damages the protein. At our recommended 263 millilitres a minute the wall shear is about 4,064 per second, mid-range in the vendor's 2,000 to 6,000 window, and two independent routes to that number agree within 2.8 per cent. The first step is to divide cross-flow by the fibre count; feeding the pump total into the single-fibre formula overstates shear by that factor, and we found that error in more than one published write-up. A walled Bacillus is not a CHO cell, so single pass is safe. Cumulative exposure is open: about 138 passes an hour, and van Reis blames aggregation on pump passages and air entrainment.",
"a_zh":"用算的是在纖維裡，但真正可能傷到蛋白的是幫浦。在我們建議的 263 mL/min 下，壁剪切大約 4,064 /s，落在廠商 2,000 到 6,000 建議區間的中段，而且兩條互相獨立的計算路徑算出來差不到 2.8%。第一步一定要先把交叉流量除以纖維數；直接把幫浦總流量代進單根纖維的公式，剪切會被高估到好幾倍，我們在不只一篇已發表的文件裡看到這個錯。有細胞壁的 Bacillus 不是 CHO 細胞，所以單次通過是安全的。未知的是累積暴露：每小時大約通過 138 次，而 van Reis 把蛋白聚集歸因於幫浦通過和夾帶空氣。",
"trap_en":"Quoting the 3 to 5 pascal ceiling from mammalian perfusion. It does not apply to a walled bacterium, and our own shear envelope is tabulated on eight fibres, which makes those numbers the conservative high ones.",
"trap_zh":"拿哺乳動物灌流的 3 到 5 Pa 上限來套。那對有細胞壁的細菌不適用；而且我們自己的剪切表是用八根纖維算的，所以那些數字是偏保守、偏高的那一組。",
"basis":"wall shear is the master variable in their own scale-out argument and the divide-by-N error is in their own record",
"dom":"hardware",
"star":0,
"nodes":[],
"figs":[],
"id":"q104"
},
{
"q_en":"Distinguish for me your recirculation rate from the residence time that actually matters to the biology, and tell me which one limits your control loop.",
"q_zh":"請幫我區分「循環流量」和真正對生物有意義的「停留時間」，並說明哪一個才是控制迴路的限制。",
"type":"boundary",
"tier":"B",
"deep":1,
"pages":[
"biomanufacturing",
"software",
"hardware"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"single pass under a second",
"shell exchange 150 minutes",
"CcaS half time 105"
],
"kw_zh":[
"單次通過不到一秒",
"殼側換液 150 分鐘",
"CcaS 半時 105 分"
],
"a_en":"They differ by orders of magnitude and people confuse them constantly. At 263 millilitres a minute a single pass down a 0.6 metre fibre takes under a second, so recirculation sets wall shear and mixing, not how long anything stays. The time that matters is the shell exchange time, our system time constant: about 150 minutes at 2 LMH and about fifteen at twenty. Against that, the dead time is dominated by the CcaS activation half-time of 105 minutes, so the ratio of dead time to time constant lands between 0.7 and 7. Raising the flux shortens the time constant and makes control worse, which is why we cannot pick the delivery rate on plant grounds alone.",
"a_zh":"這兩個差了好幾個數量級，很多人會混在一起。263 mL/min 之下，菌液通過 0.6 公尺的纖維一趟不到一秒，所以循環流量決定的是壁剪切和混合，不是停留多久。真正有意義的是殼側換液時間，也就是系統時間常數：2 LMH 大約 150 分鐘，20 LMH 大約 15 分鐘。相對地，死區時間由 CcaS 的活化半時 105 分鐘主導，所以死區時間對時間常數的比值落在 0.7 到 7 之間。把通量拉高會縮短時間常數，控制反而更難，所以輸送速率不能只按植物端的需求來定。",
"trap_en":"Calling the fast recirculation a short response time. The loop is dead-time dominated by the light switch, so pumping faster does not make the system respond faster.",
"trap_zh":"把快速循環說成反應時間短。這個迴路是被光開關的死區時間主導的，幫浦打更快不會讓系統反應更快。",
"basis":"the dead-time-to-time-constant ratio is what fixes what the device can be used for",
"dom":"hardware",
"star":0,
"nodes":[],
"figs":[],
"id":"q105"
},
{
"q_en":"Tell me how oxygen and carbon dioxide get into and out of a closed recirculating loop, and what you measured.",
"q_zh":"一個封閉的循環迴路，氧氣和二氧化碳是怎麼進出的？你們實際量了什麼？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"biomanufacturing",
"software",
"hardware",
"human-practices"
],
"seat":"hw",
"backup":"wet2",
"kw_en":[
"kLa 12.5 per hour",
"two minutes of oxygen",
"DO sensor never calibrated"
],
"kw_zh":[
"需要 kLa 12.5 /h",
"只有兩分鐘的氧",
"溶氧感測器校不起來"
],
"a_en":"We measured neither, and we worked around oxygen by guessing. Our sheet says the culture needs a kLa of about 12.5 per hour at carrying capacity, modest for a sparged tank and hard for a closed loop with no gas port. A hundred millilitre loop at thirty per cent of saturation holds about two minutes of oxygen at that demand. We could not calibrate the dissolved oxygen sensor and neither probe can be autoclaved, so it is not on the bioreactor. When the 8 October run showed few bubbles we suspected oxygen shortage and took the next run from one litre back to 500 millilitres. Carbon dioxide we never measured, and the pH loop adds base only, no acid.",
"a_zh":"兩個我們都沒量，氧氣的部分是靠猜來繞過的。我們的計算說菌液在承載上限時需要 kLa 大約 12.5 /h，這對有通氣的發酵槽不難，對一個沒有氣體入口的封閉迴路卻很吃力。100 毫升的迴路在三成飽和度下，按那個需求只夠用大約兩分鐘。我們的溶氧感測器校不起來，而且兩種探頭都不能高壓滅菌，所以它根本沒裝在反應器上。10 月 8 日那次看到氣泡很少，我們懷疑缺氧，所以下一次運轉就把培養液從 1 公升降回 500 毫升。二氧化碳我們從來沒量，而且 pH 迴路只加鹼、不加酸。",
"trap_en":"Claiming the volume change fixed the oxygen problem. It was a hypothesis acted on without a dissolved oxygen reading, so the cause of the pH drift is still unproven. Professor Chang also advised a mechanical foam breaker and none is in the build.",
"trap_zh":"說把體積降下來就解決了缺氧。那只是在沒有溶氧讀數的情況下照假設行動，pH 漂移的原因到現在還沒證實。另外張教授建議過機械破泡裝置，實際機器裡並沒有。",
"basis":"oxygen caps density before anything else and the sensor that would show it is the one they could not get working",
"dom":"hardware",
"star":0,
"nodes":[],
"figs":[],
"id":"q106"
},
{
"q_en":"Why is a Bacillus culture in your recirculating loop not the same organism it is in a shake flask?",
"q_zh":"為什麼同一株 Bacillus 在你們的循環迴路裡，跟在搖瓶裡其實不是同一回事？",
"type":"compare",
"tier":"A",
"deep":1,
"pages":[
"hardware",
"engineering",
"results"
],
"seat":"hw",
"backup":"wet2",
"kw_en":[
"0.304 tube 0.48 reservoir",
"mixing and sampling point",
"flask was at 37"
],
"kw_zh":[
"管內 0.304 瓶內 0.48",
"混合與取樣位置",
"搖瓶是 37 度"
],
"a_en":"Because position inside the loop changes the reading and the growth. In our first loop run the tube finished at OD 0.304 while the reservoir read 0.48, which told us that without mixing an in-line sample underestimates the culture and that cells were settling and nutrients stratifying. Adding a stirrer at 200 rpm and moving the sampler to the reservoir outlet fixed it. I should be careful with the flask comparison, though: in that first run the flask control was at 37 degrees while the loop was at 22, so the two arms were not matched, and the next cycle changed the stirrer, the temperature and the sampling point all at once.",
"a_zh":"因為在迴路裡的位置會改變讀數，也會改變生長。我們第一次跑迴路時，管內最後是 OD 0.304，儲液瓶卻是 0.48，這告訴我們：沒有混合的話，在線取樣會低估整體菌液，而且細胞在沉降、養分在分層。後來加了 200 rpm 的攪拌、把取樣點移到儲液瓶出口就改善了。不過搖瓶那個比較我必須講清楚：第一次運轉的搖瓶對照是 37 度，迴路卻是 22 度，兩組條件並不對等；而下一輪又同時改了攪拌、溫度和取樣位置三件事。",
"trap_en":"Saying the loop beat the flask. The 37 degree comparison, plateau in two hours against four and a half, is one run each and changed three variables at once; the 22 degree comparison was not temperature-matched at all.",
"trap_zh":"說迴路贏過搖瓶。37 度那個比較（2 小時對 4.5 小時到平台）各只有一次，而且一次改了三個變數；22 度那個比較連溫度都沒有對齊。",
"basis":"the loop-versus-flask claim is the project's most-quoted reactor result and its weakest controlled comparison",
"dom":"hardware",
"star":0,
"nodes":[],
"figs":[],
"id":"q107"
},
{
"q_en":"Is this a chemostat? Tell me the washout condition for your reactor, what a steady state would look like in your own data, and what your longest run actually demonstrated.",
"q_zh":"這算是連續培養槽嗎？請說明你們反應器的沖洗條件、在你們自己的數據裡穩態長什麼樣子，以及你們最長那次運轉真正證明了什麼。",
"type":"compare",
"tier":"A",
"deep":1,
"pages":[
"biomanufacturing",
"hardware",
"software"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"dilution can exceed growth",
"cell-specific perfusion rate",
"no closed-loop feeding"
],
"kw_zh":[
"稀釋率可超過生長率",
"細胞比灌流率",
"沒有閉環補料"
],
"a_en":"No, and the membrane is exactly why. In a chemostat dilution must stay below the maximum growth rate or the cells wash out; here the permeate leaves and the biomass does not, so dilution can exceed growth freely. That is the defining property of perfusion. Our governing quantity is cell-specific perfusion rate: ours is about 0.0007 nanolitres per cell per day against a modern band of 0.02 to 0.5, so we feed lean. A steady state would be a flat optical density at constant flux, and we have never held one: the 17 October run climbed from 0.19 to 3.34 over 77 hours. We also have no level sensing and no closed-loop feeding, so what leaves is not replaced.",
"a_zh":"不是，而原因正好就是那層膜。連續培養槽的稀釋率必須低於最大生長率，否則菌會被沖掉；我們這裡滲透液會離開、菌體不會，所以稀釋率可以隨意超過生長率。這就是灌流的定義性質。我們真正的主控量是細胞比灌流率，我們大約是每顆細胞每天 0.0007 奈升，而現代灌流的區間是 0.02 到 0.5，所以我們餵得非常稀。穩態應該長成通量固定、OD 打平，而我們從來沒維持過：10 月 17 日那次 77 小時從 0.19 一路爬到 3.34。另外我們沒有液位偵測、也沒有閉環補料，抽走的並沒有補回去。",
"trap_en":"Calling the long runs perfusion steady states. What 116 hours in September and 77 hours in October demonstrate is that the loop can be left alone for days with its instruments logging, not that density was held.",
"trap_zh":"把那幾次長時間運轉說成灌流穩態。九月的 116 小時和十月的 77 小時真正證明的是「迴路可以帶著儀器自己記錄、好幾天不用管」，不是密度被維持住了。",
"basis":"perfusion versus chemostat is the single most likely conceptual question in the Biomanufacturing village",
"dom":"hardware",
"star":0,
"nodes":[],
"figs":[],
"id":"q108"
},
{
"q_en":"Your Safety page says automated alerts trigger containment protocols on transmembrane pressure and that droplet leakage is detected. Your bioreactor page calls both of those planned. Which is true, and what does containment rest on today?",
"q_zh":"你們 Safety 頁寫跨膜壓會自動警報、觸發圍阻程序，也寫會偵測滴漏。可是 Bioreactor 頁把這兩件事都列為規劃中。哪個才是真的？今天圍阻實際靠的是什麼？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"hardware",
"safety-and-security",
"measurement",
"results"
],
"seat":"hw",
"backup":"wet2",
"kw_en":[
"numbers only displayed today",
"no breach test recorded",
"two platings no LRV"
],
"kw_zh":[
"目前只有顯示數字",
"沒有破損測試紀錄",
"兩次塗盤無 LRV"
],
"a_en":"The bioreactor page is accurate and the Safety page overstates it. Pressure is read at three ports and shown on the dashboard, but today those numbers are only displayed; the alarm that stops the pump and opens the pinch valve is a planned firmware change, and the droplet sensor is one sensor and a tray we have not fitted. The shell-side breach detector is fitted with no breach test on record. So containment today is the membrane plus procedure: two shell-side platings with no replicate and no log reduction value, and a rule that the shell side is plated on the first run after every module change, with the harvest treated as live culture until that plate grows nothing.",
"a_zh":"Bioreactor 頁才是準確的，Safety 頁講得太滿。壓力在三個接口都有讀、也顯示在儀表板上，但目前就只是顯示；那個會停幫浦、打開夾管閥的警報是規劃中的固件修改，滴漏感測器則是一顆還沒裝的新感測器加一個集水盤。殼側破損偵測器是裝了，但沒有任何破損測試的紀錄。所以今天的圍阻是膜加上流程：兩次殼側塗盤，沒有重複、沒有對數削減值；另外一條規則是每次換模組後的第一次運轉都要塗殼側，而且在那盤長不出東西之前，收穫液一律當成活菌處理。",
"trap_en":"Defending the Safety page's wording. Also do not claim a fibre break shows up in the pressure trace: the manual says a few kilopascals in normal operation against a sensor good to about ten, and the manual itself forbids pressure monitoring standing in for looking.",
"trap_zh":"替 Safety 頁的寫法辯護。也不要說斷纖維會在壓力曲線上看出來：手冊寫正常運轉只有幾個 kPa，而感測器精度大約是 10 kPa；手冊自己也明訂壓力監測不能取代用眼睛檢查。",
"basis":"two pages of the same wiki disagree about whether the containment alarms exist",
"dom":"hardware",
"star":0,
"nodes":[],
"figs":[],
"id":"q109"
},
{
"q_en":"You scale out rather than up. Name the quantity that does not come along for free, and tell me where the first wall is.",
"q_zh":"你們選的是複製單元而不是放大槽體。哪一個量不會自動跟著變好？第一道牆會撞在哪裡？",
"type":"impact",
"tier":"A",
"deep":1,
"pages":[
"biomanufacturing",
"hardware",
"entrepreneurship"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"area comes free",
"pumping power binds first",
"45 watt panel short"
],
"kw_zh":[
"膜面積免費跟上",
"幫浦電力先撞牆",
"45 W 板子不夠"
],
"a_en":"Membrane area comes free and almost nothing else does. Replicating a fixed module holds wall shear, permeate flux and the fouling margin constant by construction, which is the published linear scale-up rule, so area goes from 200 to 1,600 square centimetres with no new physics. The wall is power. Each module needs its own recirculation pump running continuously, three to eight watts, so eight modules draw 24 to 64, and a 45 watt panel harvests about 101 watt hours a day. Medium binds in aggregate at 7.7 litres a day. Oxygen binds per unit. The membrane is last on that list, which is both the point of the design and the warning.",
"a_zh":"只有膜面積是免費跟上的，其他幾乎都不是。複製一個固定模組，壁剪切、滲透通量和結垢餘裕在設計上就維持不變，這就是文獻上的線性放大法則，所以面積從 200 平方公分變成 1,600 不需要新的物理。真正的牆是電力。每個模組都要有自己的循環幫浦持續運轉，3 到 8 瓦，八個模組就是 24 到 64 瓦，而 45 瓦的太陽能板一天只收到大約 101 瓦時。培養基是總量上的限制，一天 7.7 公升。氧氣是每一台各自的限制。膜排在這張清單的最後，這既是設計的用意，也是警訊。",
"trap_en":"Answering with membrane area or permeate rate. Those are the two quantities that do scale; the binding ones are medium, pumping power, oxygen and energy.",
"trap_zh":"拿膜面積或滲透速率來回答。那兩個正好是會跟著放大的；真正會卡住的是培養基、幫浦電力、氧氣和能源。",
"basis":"Biomanufacturing is a nominated area and the scale-out table is the page's core argument",
"dom":"hardware",
"star":0,
"nodes":[],
"figs":[],
"id":"q110"
},
{
"q_en":"Hollow-fibre perfusion is a mature industrial technology. Tell me honestly what is not novel about your reactor.",
"q_zh":"中空纖維灌流是一項成熟的工業技術。老實告訴我，你們這台反應器有哪些部分其實不新？",
"type":"history",
"tier":"A",
"deep":1,
"pages":[
"biomanufacturing",
"hardware",
"engineering"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"crossflow retention is standard",
"van Reis 1997 scale-up",
"module is a bought part"
],
"kw_zh":[
"交叉流截留是標準做法",
"van Reis 1997 放大法",
"模組是買來的"
],
"a_en":"Almost all of the separation, and we should not pretend otherwise. Crossflow microfiltration for cell retention, perfusion as an operating mode and the hollow-fibre format are standard bioprocess practice. Van Reis published the linear scale-up method we use in 1997 and carried a 400-fold scale-up with it; Maiorella characterised crossflow of cells in 1991; the critical flux concept we quote is Field in 1995. Our cartridge is a bought vendor part, a Cobetter Biophsep MiniLab, mPES, 0.2 micron, and the pump, the transducers and the flow meter are catalogue items. We did not invent perfusion. What is ours is a very small configuration, run with cells, and a written record of what it did and did not do.",
"a_zh":"分離這一塊幾乎都不是新的，我們不該假裝。用交叉流微過濾留住細胞、用灌流當操作模式、用中空纖維當形式，都是標準的生物製程做法。我們用的線性放大法是 van Reis 1997 年發表的，他當年還靠它做了 400 倍放大；Maiorella 1991 年就描述過細胞的交叉流過濾；我們引用的臨界通量概念來自 Field 1995。我們的膜柱是買來的廠商零件，Cobetter Biophsep MiniLab、mPES、0.2 微米，幫浦、壓力傳送器和流量計也都是目錄上的貨。我們沒有發明灌流。真正屬於我們的是一個非常小的組態、真的拿細胞跑過，以及一份寫下來的、說清楚做到與沒做到什麼的紀錄。",
"trap_en":"Claiming membrane containment as the team's invention. Dr Brophy told us in April to make physical containment primary rather than a kill switch, and Professor Chen told us in April to keep the bacteria in a vessel. The idea came from reviewers.",
"trap_zh":"把膜圍阻說成團隊的發明。Brophy 博士四月就告訴我們要以物理圍阻為主、不要靠自殺開關，陳教授四月也說把細菌留在容器裡。這個想法是審查者給的。",
"basis":"a judge who knows bioprocessing will test whether the team knows the field it sits in",
"dom":"hardware",
"star":0,
"nodes":[],
"figs":[],
"id":"q111"
},
{
"q_en":"What previous iGEM work and open hardware does this build on, and what did you add on top of it?",
"q_zh":"你們是站在哪些過去的 iGEM 作品和開源硬體上？你們自己又加了什麼？",
"type":"history",
"tier":"A",
"deep":1,
"pages":[
"hardware",
"drylab-notebook",
"software",
"contribution"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"Gerhardt 2016 LPA",
"Aachen 2017 pump",
"twenty-two builds reviewed"
],
"kw_zh":[
"Gerhardt 2016 的 LPA",
"Aachen 2017 幫浦",
"比較過二十二個版本"
],
"a_en":"Quite a lot, and we try to name every piece. Our light plate follows the Light Plate Apparatus from Gerhardt and colleagues in 2016 and is named after it; the CcaS and CcaR switch comes from Castillo-Hair in 2019, not from us. Our fluidics reference was an open-source peristaltic pump from iGEM Aachen 2017, and we used an Aachen hardware page as our quality bar. Before building the photometer we reviewed twenty-two prior open-source builds. What we added is the dual-wavelength column layout with output-matched LEDs, the in-line dual-beam photometer whose reference channel never sees the culture, and the alarm that flagged that photometer 26.7 hours before its reading failed.",
"a_zh":"很多，而且我們盡量把每一樣都寫出來。我們的光板沿用 Gerhardt 等人 2016 年的 Light Plate Apparatus，連名字都是跟它取的；CcaS 與 CcaR 的開關來自 Castillo-Hair 2019，不是我們想的。流體部分我們參考的是 iGEM Aachen 2017 的開源蠕動幫浦，也拿 Aachen 的硬體頁面當我們的品質標竿。做光度計之前，我們先比較過二十二個前人的開源版本。我們自己加上去的是：雙波長的欄位配置搭配按實測輸出配對的 LED、參考通道永遠看不到菌液的在線雙光束光度計，還有那個在讀數失效前 26.7 小時就示警的警報。",
"trap_en":"Overclaiming the light plate or the optogenetic switch as original. Our own LPA page says the pattern and the biology are from the literature, and that only the column layout, the matched LEDs and the enclosure are ours.",
"trap_zh":"把光板或光遺傳開關說成原創。我們自己的 LPA 頁就寫了型式和生物學都來自文獻，只有欄位配置、配對過的 LED 和外殼是我們的。",
"basis":"positioning against prior art, where the team's own pages are unusually explicit",
"dom":"hardware",
"star":0,
"nodes":[],
"figs":[],
"id":"q112"
},
{
"q_en":"Last question. Why should I be impressed by this rig rather than by a bought one?",
"q_zh":"最後一個問題。我為什麼該對你們這台機器印象深刻，而不是對一台買來的？",
"type":"history",
"tier":"A",
"deep":1,
"pages":[
"hardware",
"software",
"measurement",
"biomanufacturing"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"known materials 1022 dollars",
"interlocks in the firmware",
"no comparison done yet"
],
"kw_zh":[
"已知材料 1022 美元",
"連鎖寫在固件裡",
"成本比較還沒做"
],
"a_en":"Cost, integration and documentation, not invention. Our known materials come to 1,022 US dollars, with the membrane the largest single line at 245, and the controller and its mainboard are not even in that total. It is wired into the biology: the pinch valve exists because an expert found that nothing drove the protectant across, and every interlock lives in the microcontroller, so a dead browser cannot push the loop past a limit. The documentation is an 82-page notebook over 30 weeks, a ten-page assembly guide, a sixteen-page manual, the STLs and MIT-licensed software. And we have not costed any of it against what a farmer buys today, which is the comparison you are really asking for.",
"a_zh":"是成本、整合和文件，不是發明。我們已知的材料費是 1,022 美元，最大單項是薄膜 245 美元，而控制器和它的主板根本還沒算進這個總額。它也真的接進生物：夾管閥會存在，是因為專家指出沒有任何東西把保護蛋白推過膜；而且每一條連鎖都跑在微控制器裡，瀏覽器掛掉也推不動迴路越界。文件方面是 30 週、82 頁的筆記本，10 頁組裝指南，16 頁使用手冊，STL 檔，加上 MIT 授權的軟體。另外要誠實說，我們還沒有把這些成本跟農民今天買得到的東西做過比較，而那其實正是你想問的。",
"trap_en":"Saying the photometer replaces a fifteen thousand dollar instrument. Our own pages price the BioDrop at NT$15,000, about 470 US dollars, against 371.78 for the Pro, so the argument is in-line continuous measurement, not price.",
"trap_zh":"說光度計取代了一台一萬五千美元的儀器。我們自己的頁面寫 BioDrop 是新台幣 15,000 元、大約 470 美元，而 Pro 是 371.78 美元，所以真正的論點是在線連續量測，不是價格。",
"basis":"the question a hardware judge actually decides the nomination on",
"dom":"hardware",
"star":0,
"nodes":[],
"figs":[],
"id":"q113"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q114"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q115"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q116"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q117"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q118"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q119"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q120"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q121"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q122"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q123"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q124"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q125"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q126"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q127"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q128"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q129"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q130"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q131"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q132"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q133"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q134"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q135"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q136"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q137"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q138"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q139"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q140"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q141"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q142"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q143"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q144"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q145"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q146"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q147"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q148"
},
{
"q_en":"What is special about your bioreactor?",
"q_zh":"你們的生物反應器特別在哪裡？",
"type":"history",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"hardware-bioreactor#3.4",
"hardware-bioreactor#Pressure and sampling",
"hardware-bioreactor#10.1"
],
"seat":"hw",
"backup":"biz",
"kw_en":[
"closed loop, open harvest",
"harvest on demand at 0.16 bar",
"US$1,022 of parts, all files public"
],
"kw_zh":[
"閉迴路加開放採收",
"0.16 bar 隨需採收",
"US$1,022 的料、檔案全公開"
],
"a_en":"Two circuits that touch only at the fibre wall: a culture loop closed for the whole run, and a shell-side harvest path that is the only thing leaving the machine. Harvest is on demand rather than a continuous bleed — closing the pinch valve and opening the shell valve for sixty seconds lifts mean transmembrane pressure from 0.03 to 0.16 bar and yields twenty to thirty millilitres without interrupting the culture. We read OD600, pH, flow and three pressures in line through a 116-hour run without opening the vessel, and the pH loop taught us something the vessel alone could not: holding pH and resupplying erythromycin together removed the spurious second exponential phase. Every build file, STL and parts list is published, and the known materials come to US$1,022.67.",
"a_zh":"兩個迴路只在纖維壁這一處相接：一個整場密閉的培養迴路，以及殼側那條唯一會離開機器的採收路徑。採收是隨需而不是持續排放——關上夾管閥、打開殼側閥六十秒，平均跨膜壓從 0.03 升到 0.16 bar，可以在不中斷培養的情況下取得二十到三十毫升。我們在一次 116 小時的實驗裡全程線上讀 OD600、pH、流量和三個壓力，而且沒有打開容器；pH 這個迴路教了我們一件單看容器學不到的事：同時維持 pH 和補充紅黴素，才讓那個假的第二指數期消失。所有組裝檔、STL 和零件清單都公開，已知的材料成本是 US$1,022.67。",
"trap_en":"Calling it novel. Hollow-fibre perfusion is not new; what is ours is production, recovery and containment as one unit operation at 1 L with instruments we had to build.",
"trap_zh":"說它很新穎。中空纖維灌流不是新東西；屬於我們的是「在 1 L 尺度上，生產、回收和圍阻是同一個單元操作，而儀器是我們自己做的」。",
"nodes":[
"H_LOOP",
"H_PINCH",
"C_MEM"
],
"figs":[
"h02",
"h06"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"hardware",
"id":"q149"
},
{
"q_en":"You integrated a pH sensor. What have you learned from it, and what does it bring to your results on top of the OD?",
"q_zh":"你們裝了 pH 感測器。從它身上學到什麼？除了 OD 之外它給了你們什麼？",
"type":"validate",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#pH and antibiotic resupply",
"hardware-bioreactor#4.2",
"results#Growth in the reactor"
],
"seat":"hw",
"backup":"wet2",
"kw_en":[
"the inflection sits at pH 6.5",
"a control variable, not a monitor",
"antibiotic resupply, not only base"
],
"kw_zh":[
"轉折點就在 pH 6.5",
"是控制變數不是監看值",
"要補的不只是鹼，還有抗生素"
],
"a_en":"It turned pH from something we watched into something we hold. With all sensors working in cycle 3, pH fell monotonically from about 6.9 to 6.4, and superimposing the growth curve showed the OD600 inflection sitting exactly where pH crossed 6.5 — below which both Bacillus subtilis growth and the enzyme's stability suffer — so automated correction became a design requirement. The loop then taught us two more things: 1 molar potassium hydroxide corroded the feeding valve after one night, so dosing went back to a human, and because the daily feed carried erythromycin alongside base, the spurious second exponential phase disappeared, which is what identified it as plasmid loss rather than a metabolic transition. pH also cross-checks the OD: when the pump ran partly dry the OD600 climbed while flow and pressure did not follow, so a rise without its partners is now read as a hydraulic fault and not as growth.",
"a_zh":"它把 pH 從「我們在看的東西」變成「我們在維持的東西」。第三個循環所有感測器都正常時，pH 從大約 6.9 單調下降到 6.4，而把生長曲線疊上去之後，OD600 的轉折點正好落在 pH 跨過 6.5 的地方——在那之下 B. subtilis 的生長和酵素的結構穩定性都會受損——所以自動校正成為設計要求。接著這個迴路又教了我們兩件事：1 M 氫氧化鉀一個晚上就把進料閥腐蝕了，所以加鹼又回到人工；而因為每天的補料同時帶了紅黴素，那個假的第二指數期消失了，這才確認它是質體流失而不是代謝轉換。pH 也用來交叉檢查 OD：當泵半乾運轉時 OD600 會往上爬，但流量和壓力沒有跟著動，所以現在「上升但夥伴訊號沒跟上」被讀成水力故障，不是生長。",
"trap_en":"Saying it keeps the culture healthy. The specific findings are the 6.5 inflection, the corroded valve that ended automated dosing, and that antibiotic resupply was the real requirement.",
"trap_zh":"只說「它讓培養保持健康」。具體發現是 6.5 的轉折點、被腐蝕而導致自動加藥停止的閥，以及真正的要求其實是補抗生素。",
"nodes":[
"H_LOOP",
"H_TMP"
],
"figs":[
"h04",
"s02"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"hardware",
"id":"q150"
},
{
"q_en":"What would you do if the bacteria leaked?",
"q_zh":"如果細菌洩漏了，你們會怎麼做？",
"type":"boundary",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"hardware-bioreactor#Containment & Safety",
"safety-and-security#Bioreactor safety",
"hardware-bioreactor#9.2"
],
"seat":"hw",
"backup":"ihp",
"kw_en":[
"it happened at 38 hours",
"the membrane did not fail",
"traced to the peroxide line"
],
"kw_zh":[
"38 小時那次真的發生過",
"膜沒有失效",
"追到過氧化氫那條管"
],
"a_en":"It has already happened, and the useful part is that we traced it. In integrated prototype 3 a Luer valve at the start of the lumen loop broke in half at the thirty-eight-hour mark and culture medium leaked into the incubator; the membrane did not fail, and we traced the break to the clean-in-place step, where 35 percent hydrogen peroxide reaches the valves before it is diluted in the reservoir. The response is BSL-1 standard: contain inside the incubator with the spill kit, disinfect with ten percent bleach, autoclave the solid waste at 121 degrees for fifteen to thirty minutes, and plate the shell side to confirm the barrier. The design answers are specified — an oxidiser-resistant valve body, a droplet sensor under the loop, and a pressure trip that stops the pump and opens the pinch valve — and I should be clear that our containment evidence is two single platings with no replicate and no recorded detection limit, so we claim retention demonstrated and not a log reduction.",
"a_zh":"這件事已經發生過了，而有價值的部分是我們把原因追出來。在整合第三代原型，lumen 迴路起點的一個 Luer 閥在 38 小時斷成兩半，培養液漏進培養箱裡；膜沒有失效，而我們把斷裂追到清洗（CIP）步驟——35% 過氧化氫在被反應槽稀釋之前就會先經過那些閥。處置是 BSL-1 標準：用溢漏處理包在培養箱內圍堵、用 10% 漂白水消毒、固體廢棄物 121 度高壓滅菌 15 到 30 分鐘，並且塗盤殼側來確認屏障。設計上的答案也都寫明了——耐氧化劑的閥體、迴路下方的液滴感測器，以及會停泵並打開夾管閥的壓力跳脫——而我必須講清楚：我們的圍阻證據是兩次單一塗盤，沒有重複、也沒有記錄偵測極限，所以我們主張的是「已展示滯留」，不是 log reduction。",
"trap_en":"Answering only with a procedure. Lead with the leak that actually happened and what it was traced to; a judge rates the diagnosis above the SOP.",
"trap_zh":"只回答一套流程。要先講真正發生過的那次洩漏以及追到的原因；評審看重診斷能力勝過 SOP。",
"nodes":[
"H_PLATE",
"C_MEM"
],
"figs":[
"f01",
"h09"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"hardware",
"id":"q151"
},
{
"q_en":"You say the similar ELISA values may come from light leaking between neighbouring light-plate wells. The whole selling point of that plate is independently programmable wells. Which claim do you drop?",
"q_zh":"你們說 ELISA 值相近可能是因為光板相鄰孔之間的光外洩。但那塊板子的賣點就是每個孔可以獨立程控。你們要放棄哪一個主張？",
"type":"gap",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#What it settles",
"hardware-diopal"
],
"seat":"hw",
"backup":"wet1",
"kw_en":[
"neither, they are different claims",
"per-well drive against per-well optics",
"measurable with an empty well"
],
"kw_zh":[
"兩個都不用放棄",
"獨立驅動 vs 光學隔離",
"放空孔就量得出來"
],
"a_en":"Neither, because they are different claims: every well has its own LED and its own duty cycle, which is the electronics, while whether a lit well spills photons into its neighbour is mechanical shielding. Both can be true at once, and ours is an open rack of tubes rather than a sealed microplate, so spill between positions is exactly the failure mode you would predict from the geometry. It is also measurable in an afternoon — put an empty tube next to a well at 100 percent and read the irradiance in it, which is the test we have not run. Until we do, the honest version is that we offer light crosstalk as an untested explanation, and the page says so.",
"a_zh":"兩個都不用放棄，因為它們是不同的主張：每個孔有自己的 LED 和自己的工作週期，那是電子部分；而一個亮著的孔會不會把光子灑到鄰孔，那是機構遮光。兩件事可以同時成立，而我們的是開放式的試管架、不是密封的微孔盤，所以位置之間的外洩正是從幾何上就會預期到的失效模式。這件事一個下午就能量——在一個開到 100% 的孔旁邊放一支空管，讀裡面的輻照度，而這個測試我們還沒做。在做之前，誠實的版本是「我們把光外洩當成一個未經驗證的解釋提出來」，頁面上也是這樣寫的。",
"trap_en":"Defending the plate by dropping the crosstalk explanation, or vice versa. Separating independent drive from optical isolation is the answer.",
"trap_zh":"為了保住板子而放棄光外洩的解釋，或反過來。把「獨立驅動」和「光學隔離」分開講才是答案。",
"nodes":[
"H_LPA",
"C_GATE"
],
"figs":[
"h07"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"hardware",
"id":"q152"
},
{
"q_en":"Your bioreactor page gives 0.037 milliunits per millilitre at eighteen hours and your Results page gives about 30 nanomoles per millilitre per hour for the same sample. Those differ by a factor of roughly a thousand. Which is right?",
"q_zh":"你們生物反應器頁寫 18 小時 0.037 mU/mL，Results 頁對同一個樣品寫大約 30 nmol/mL/h。這兩個差了大約一千倍。哪一個才對？",
"type":"gap",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"hardware-bioreactor#5.2",
"results#Bioreactor v2.1 accumulation time-course"
],
"seat":"hw",
"backup":"wet2",
"kw_en":[
"the bioreactor panel is wrong",
"specific activity only works with the larger value",
"Results is the authority"
],
"kw_zh":[
"反應器那張圖的單位錯了",
"比活性只有用大的那個才算得通",
"以 Results 頁為準"
],
"a_en":"The larger value is right and the bioreactor page's activity panel is wrong by three orders of magnitude; thank you for finding it, because we would rather name it than be caught by it. The arithmetic settles it: specific activity on that same figure is 6.3 units per milligram at eighteen hours, and that only comes out if the volumetric activity is about 30 nanomoles per millilitre per hour against roughly 6 micrograms per millilitre of protein, not 0.037 milliunits. Results is the authority for the assay numbers, because it carries the standard curves and the full nine-point series. The page needs a correction and it is on our list; nothing downstream depends on the smaller number, because the claim we make from that run is that functional enzyme appears at eighteen hours and holds between 5 and 8.4 units per milligram to seventy-two.",
"a_zh":"大的那個才對，生物反應器頁的活性面板錯了三個數量級；謝謝你找出來，因為我們寧願自己講出來，也不要被抓到。用算術就能定案：同一張圖上 18 小時的比活性是 6.3 U/mg，而這個數字只有在體積活性約 30 nmol/mL/h、蛋白約 6 微克每毫升的情況下才算得出來，不可能是 0.037 mU/mL。assay 的數字以 Results 頁為準，因為標準曲線和完整的九點系列都在那裡。那一頁需要更正，已經在我們的清單上；下游沒有任何東西依賴那個小數字，因為我們從那次實驗做出的主張是「有功能的酵素在 18 小時出現，並且維持在 5 到 8.4 U/mg 直到 72 小時」。",
"trap_en":"Trying to reconcile the two numbers. One is a typo; say which page is the authority and move on.",
"trap_zh":"試著把兩個數字湊起來解釋。其中一個就是寫錯了；說清楚哪一頁是準的，然後往前走。",
"nodes":[
"M_ACT",
"H_LOOP"
],
"figs":[
"m07"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"hardware",
"id":"q153"
},
{
"q_en":"Your leak happened at the lowest-pressure point in the loop, and the lumen pressure rose instead of falling. If pressure cannot see a leak, what is your planned pressure layer actually protecting you from?",
"q_zh":"你們的洩漏發生在迴路壓力最低的地方，而且 lumen 壓力是上升而不是下降。如果壓力看不到洩漏，那你們規劃的壓力那一層到底在防什麼？",
"type":"reason",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"hardware-bioreactor#Pressure and sampling",
"hardware-bioreactor#9.2.2",
"hardware-bioreactor#9.2.3"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"it prevents, not detects",
"feed 0.19 to 0.37 bar, TMP unchanged",
"droplet sensor is the detector"
],
"kw_zh":[
"它是預防不是偵測",
"進料 0.19 到 0.37 bar，TMP 不變",
"偵測靠液滴感測器"
],
"a_en":"The pressure layer prevents a breach rather than detecting one, and the leak is why we can state that precisely. When the feeding valve failed, feed pressure climbed from about 0.19 to 0.37 bar while transmembrane pressure showed no significant change, so the pressure signature is diagnostic only in combination with flow and the other channels, never on its own. What over-pressure does protect against is the condition most likely to force cells through a damaged fibre or burst a fitting: past a threshold the controller sounds an alarm, stops the culture pump and opens the pinch valve, before anything escapes. Detecting liquid that has already escaped is the droplet sensor's job, which is layer two and is one new part, and a fault neither layer can see is still caught the way it is caught today, by plating the shell side.",
"a_zh":"壓力這一層是在預防破口，不是在偵測破口，而正因為發生過那次洩漏，我們才能把這件事講精確。進料閥失效時，進料壓力從大約 0.19 升到 0.37 bar，而跨膜壓沒有明顯變化，所以壓力特徵只有在和流量及其他通道一起看時才有診斷力，單獨看沒有。過壓真正防的是「最可能把細胞推過受損纖維、或讓接頭爆開」的那個狀況：超過閾值時控制器會發警報、停下培養泵、打開夾管閥——在任何東西逸出之前。偵測已經逸出的液體是液滴感測器的工作，那是第二層、只需要一個新零件；而兩層都看不到的故障，仍然用今天的方法抓：塗盤殼側。",
"trap_en":"Claiming pressure monitoring detects loss of containment. The run shows the opposite, and the page says a dedicated leak detector is required.",
"trap_zh":"說壓力監測可以偵測圍阻失效。那次實驗顯示的正好相反，頁面也寫了需要專門的洩漏偵測裝置。",
"nodes":[
"H_TMP",
"C_MEM"
],
"figs":[
"h09",
"m09"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"hardware",
"id":"q154"
},
{
"q_en":"Your refill plan ships a spore cartridge at room temperature. Have you shown WB800 sporulates, germinates, and keeps a 10 kilobase plasmid through that?",
"q_zh":"你們的補充卡匣計畫是常溫運送孢子。你們證明過 WB800 會形成孢子、能發芽，而且在這個過程中保住 10 kb 的質體嗎？",
"type":"boundary",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"hardware-bioreactor#9.2.5",
"results#Electroporation"
],
"seat":"hw",
"backup":"biz",
"kw_en":[
"no, it is declared future work",
"the printed parts were not watertight",
"plasmid retention untested"
],
"kw_zh":[
"沒有，是列出來的未來工作",
"印出來的件不防水",
"質體保留沒測過"
],
"a_en":"No, and the page lists it as future work rather than as a result. Three things are owed before a cartridge exists: a reliable seal, because the printed parts were not watertight and it needs moulded parts or O-ring glands; sterility across repeated changeovers; and confirmation that the strain sporulates and germinates reliably from stored spores. Plasmid retention through sporulation is the one you are pointing at and it is the hardest, because our device plasmid is about 10 kilobases and we already know what that size costs us at the wall — electroporation had to be worked out per construct, down to 1.1 kilovolts for some of them. A genomic integration would remove the problem entirely and that is the direction we would take it, which also means the cartridge is a design, not a demonstration.",
"a_zh":"沒有，頁面上把它列為未來工作而不是結果。在卡匣真的存在之前還欠三件事：可靠的密封，因為印出來的件不防水，需要射出成型的件或 O 形環槽；多次更換之間的無菌性；以及確認這株菌能從儲存的孢子穩定地形成並發芽。你指的「質體保留」是最難的那一項，因為我們的裝置質體大約 10 kb，而我們已經知道這個大小在細胞壁上的代價——電穿孔必須一個構築一個構築去調，有些甚至要降到 1.1 kV。把基因整合到基因體上可以完全移除這個問題，那也是我們會走的方向；這同時意味著卡匣目前是一個設計，不是一個展示。",
"trap_en":"Describing how the cartridge would work as if it had been built. Say it is a design, then name the three things owed.",
"trap_zh":"把卡匣的運作方式講得像已經做出來。要說它是一個設計，然後講出還欠的三件事。",
"nodes":[
"C_SCALE",
"Z_FARMER"
],
"figs":[
"n03"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"hardware",
"id":"q155"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q156"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q157"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q158"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q159"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q160"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q161"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q162"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q163"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q164"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q165"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q166"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q167"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q168"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q169"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q170"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q171"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q172"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q173"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q174"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q175"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q176"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q177"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q178"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q179"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q180"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q181"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q182"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q183"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q184"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q185"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q186"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q187"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q188"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q189"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q190"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q191"
},
{
"q_en":"I see you only have physical biosafety and no engineered containment method. Why?",
"q_zh":"我看到你們只有物理性的生物安全，沒有任何基因層面的圍阻機制。為什麼？",
"type":"design",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"safety-and-security#Bioreactor safety",
"hardware-bioreactor#Containment & Safety",
"human-practices"
],
"seat":"ihp",
"backup":"hw",
"kw_en":[
"Brophy: switches mutate and fail",
"a pore does not depend on genotype",
"layers are planned, not present"
],
"kw_zh":[
"Brophy：開關會突變、會失效",
"孔徑不依賴基因型",
"多層是規劃中，不是現在就有"
],
"a_en":"Because Dr. Jennifer Brophy told us to make physical containment the primary mechanism rather than relying on a kill switch, and we took it: a biological switch is a piece of DNA under selection, so it mutates and fails, while a 0.2 micrometre pore does not depend on the organism's genotype at all. In our architecture the barrier is also the product path, so monitoring the membrane is monitoring containment — which is why transmembrane pressure, flow and leak detection are on the instrument list, and why a plate is required after every module change. A kill step sitting on that path would also have to be kept away from the protein we are trying to harvest. I will not claim this is finished: the planned layers are a pressure trip that stops the pump and opens the pinch valve, and a droplet sensor under the loop, and genetic containment sits on the 2027 roadmap.",
"a_zh":"因為 Jennifer Brophy 博士建議我們把物理圍阻當成主要機制，而不是依賴自殺開關，而我們接受了：生物性的開關是一段處在選擇壓力下的 DNA，所以它會突變、會失效，而 0.2 微米的孔徑完全不依賴生物體的基因型。在我們的架構裡，那道屏障同時也是產品路徑，所以監看膜就等於監看圍阻——這也是為什麼跨膜壓、流量和洩漏偵測都在儀器清單上，以及為什麼每次換模組之後都必須塗一次盤。而一個放在那條路徑上的滅殺步驟，還得想辦法不要碰到我們正要採收的蛋白。我不會說這件事已經完成：規劃中的層次是「會停泵並打開夾管閥的壓力跳脫」和「迴路下方的液滴感測器」，而基因層面的圍阻在 2027 年的路線圖上。",
"trap_en":"Present tense on the layers. Entrepreneurship says redundancy with genetic and membrane containment and schedules kill switches for 2027; if a judge quotes it, say the present tense on that page is wrong and the future plan is fine.",
"trap_zh":"把多層講成現在就有。Entrepreneurship 頁寫「genetic 與 membrane 的冗餘」並把自殺開關排在 2027；如果評審引用，就說那一頁的現在式寫錯了，未來計畫本身沒問題。",
"nodes":[
"C_MEM",
"I_BROPHY",
"Z_CONTAIN"
],
"figs":[
"i06",
"f01"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"ihp",
"id":"q192"
},
{
"q_en":"Through the whole project, which experts gave you the most valuable feedback, and how did they reshape the project?",
"q_zh":"整個專案走下來，哪些專家給了你們最有價值的回饋？他們怎麼改變了這個專案？",
"type":"integrate",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"human-practices",
"hardware-bioreactor#6.1",
"hardware-bioreactor#6.3"
],
"seat":"ihp",
"backup":"hw",
"kw_en":[
"Chen: keep it in a vessel, sell the consumable",
"Brophy: no kill switch",
"Chang: nothing drove the product across"
],
"kw_zh":[
"陳：留在容器裡、賣消耗品",
"Brophy：不要自殺開關",
"張：沒有東西推產品過膜"
],
"a_en":"Professor Chen Wen-liang in April: he told us engineered bacteria released into open soil are hard to defend, so keep them in a vessel and sell the consumable rather than the device — that killed our transgenic rhizobacterium plan and is the reason a bioreactor exists at all. Dr. Jennifer Brophy then removed our kill switch, which made the membrane the containment and changed what the hardware has to monitor. Professor Chang Jo-Shu found the gap that would have sunk the first build: nothing in our design pushed the protectant from the lumen to the shell, because a higher flow rate only recirculates — hence the pinch valve, a smaller membrane, and the pressure and flow instruments that show fouling. And two reviewers changed things we had not asked about: Teacher He of Owl Lab replaced our two-board plan with one mainboard, which also ended the unstable pressure readings, and Dr. Peng voided one of our own hydroponic runs because culture volume was not standardised across arms.",
"a_zh":"四月的陳文亮教授：他告訴我們「放到開放土壤裡的基改菌很難辯護，所以把它留在容器裡，賣消耗品而不是賣機器」——這句話殺掉了我們的轉基因根圈菌計畫，也正是為什麼今天會有一台生物反應器。接著 Jennifer Brophy 博士拿掉了我們的自殺開關，這讓膜成為圍阻本身，也改變了硬體需要監看什麼。張嘉修教授找出了會讓第一版報廢的缺口：我們的設計裡沒有任何東西把保護蛋白從 lumen 推到 shell，因為提高流速只是讓液體循環——於是有了夾管閥、更小的膜，以及顯示結垢的壓力與流量儀器。還有兩位審閱者改掉了我們根本沒問的東西：貓頭鷹實驗室的何老師把我們的雙板設計換成一塊主板，順手終結了壓力讀值不穩的問題；而彭博士因為各組培養液體積沒有統一，判定我們自己一次水耕實驗作廢。",
"trap_en":"Listing names without the before and after. Pair every expert with one concrete change, and include Dr. Peng voiding our own run — a judge rates that higher than praise.",
"trap_zh":"只列名字而沒有前後對照。每一位專家都要配一個具體的改變，而且要包含彭博士判定我們自己的實驗作廢——評審看重這個勝過讚美。",
"nodes":[
"I_BROPHY",
"I_CHEN",
"I_CHANG"
],
"figs":[
"i05",
"i06"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"ihp",
"id":"q193"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q194"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q195"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q196"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q197"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q198"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q199"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q200"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q201"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q202"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q203"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q204"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q205"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q206"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q207"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q208"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q209"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q210"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q211"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q212"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q213"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q214"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q215"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q216"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q217"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q218"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q219"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q220"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q221"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q222"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q223"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q224"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q225"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q226"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q227"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q228"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q229"
},
{
"q_en":"What is special about your solution in biomanufacturing?",
"q_zh":"你們的方案在生物製造上特別在哪裡？",
"type":"history",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"biomanufacturing",
"hardware-bioreactor#2.2",
"measurement#Software algorithm calibration"
],
"seat":"hw",
"backup":"biz",
"kw_en":[
"one unit operation",
"containment is the product path",
"instruments we had to build"
],
"kw_zh":[
"同一個單元操作",
"圍阻就是產品路徑",
"儀器是我們自己做的"
],
"a_en":"Production, recovery and containment are one unit operation: the same 0.2 micrometre hollow-fibre wall that holds the cells in is the wall the product crosses to leave, so there is no separate downstream step and nothing is lysed. It runs at the point of use, so the protectant never enters a cold chain, and keeping the organism in the machine splits the regulation in two — contained use for the strain, and a plant-biostimulant route for the cell-free output. We also had to build our own instruments because nobody sells them at one litre: an in-line photometer that read a 434-hour culture with no sample withdrawn, and a signal-processing study whose eleven algorithms and eight predictions were committed to the repository before the calibration run. What I would not claim is titre: 2.5 to 6.5 micrograms per millilitre on the shell side is low for a bioprocess, and longer runs do not mean bigger harvests.",
"a_zh":"生產、回收和圍阻是同一個單元操作：那層把細胞擋住的 0.2 微米中空纖維壁，也正是產品穿出去的那道壁，所以沒有獨立的下游步驟，也不需要把細胞打破。它在使用現場運轉，所以保護蛋白從來不進冷鏈；而把生物體留在機器裡，等於把法規切成兩條路——菌株走封閉使用，無細胞產出走植物生物刺激劑或肥料。我們也必須自己做儀器，因為一公升這個尺度沒有人賣：一台在 434 小時裡不抽一次樣的線上光度計，以及一份在校正實驗之前就把十一個演算法和八個預測提交進版本庫的訊號處理研究。我不會主張的是效價：殼側 2.5 到 6.5 微克每毫升，對一個生物製程來說是低的，而且跑得更久不代表收得更多。",
"trap_en":"Claiming hollow-fibre perfusion as the novelty. It is not new; the claim is the three functions in one unit operation at this scale, with the instruments and the pre-registration.",
"trap_zh":"把中空纖維灌流當成新穎之處。那不是新東西；主張是「在這個尺度上三個功能合成一個單元操作」，加上儀器和預先登記。",
"nodes":[
"Z_CONTAIN",
"C_MEM",
"C_CF"
],
"figs":[
"n01",
"h03"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"biomanufacturing",
"id":"q230"
},
{
"q_en":"You claim you are developing a decentralised bioreactor for everyone to use. What is the advantage, and what is the disadvantage?",
"q_zh":"你們說要做一台讓每個人都能用的去中心化生物反應器。優點是什麼，缺點是什麼？",
"type":"compare",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"biomanufacturing#Field Deployment",
"entrepreneurship#Break-even analysis",
"hardware-bioreactor#2.3"
],
"seat":"biz",
"backup":"hw",
"kw_en":[
"no cold chain, fresh and known dose",
"one machine per farm",
"no field trial, no TEA"
],
"kw_zh":[
"沒有冷鏈、新鮮且劑量已知",
"每個農場要一台",
"沒有田間試驗、沒有 TEA"
],
"a_en":"The advantage is that the protectant is made on the day it is needed, so there is no refrigerated storage, no refrigerated transport and no shelf life to manage, and the farmer buys a consumable rather than a cold-chain product. The disadvantage is that every farm then needs its own machine: capital is US$2,280 per hectare in the business plan and US$3,800 in our own Math Model, and the maintenance, sterility and leak-watching move to someone who is not a microbiologist. We have no field trial and no techno-economic analysis, and our own model's payback at efficacy one is sixty-eight years against the Geospatial analysis's 4.9 — a factor of fourteen our pages name and do not resolve. That is why the plan is five to ten pilot units for one growing season before any sale, and why cooperative purchase, seasonal rental and a cartridge subscription are all still on the table.",
"a_zh":"優點是保護蛋白在需要的那一天才製造，所以沒有冷藏儲存、沒有冷藏運輸、沒有效期要管，而農民買的是消耗品而不是冷鏈產品。缺點是每個農場都要一台機器：商業計畫裡每公頃資本是 US$2,280，我們自己的數學模型算出來是 US$3,800，而維護、無菌和盯洩漏這些工作會落到一個不是微生物學家的人身上。我們沒有田間試驗也沒有技術經濟分析，而我們自己模型在效力為 1 時的回收期是六十八年，對上地理空間分析的 4.9 年——相差十四倍，我們頁面上把這件事指出來、但沒有解決。這也是為什麼計畫是先做五到十台試驗機、跑一個生長季再談銷售，以及為什麼合作社共購、季節租賃和卡匣訂閱都還在選項裡。",
"trap_en":"Giving a soft disadvantage like farmers need training. The real ones are the capital per hectare, the payback disagreement, and that no unit has ever run on a farm.",
"trap_zh":"給一個軟性的缺點，例如「農民需要訓練」。真正的缺點是每公頃資本、回收期的不一致，以及從來沒有一台機器真的在農場上運轉過。",
"nodes":[
"Z_FARMER",
"C_SCALE",
"B_BREAK"
],
"figs":[
"n02",
"b02"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"biomanufacturing",
"id":"q231"
},
{
"q_en":"If I wanted to scale up the bioreactor instead of using multiple units, what factors should be considered?",
"q_zh":"如果我要把反應器放大，而不是用很多台，要考慮哪些因素？",
"type":"impact",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"biomanufacturing#Scaling",
"hardware-bioreactor#9.2.7",
"hardware-bioreactor#4.1"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"every length-scale quantity re-established",
"wall shear sets the critical flux",
"we scale out instead"
],
"kw_zh":[
"每個跟尺度有關的量都要重做",
"壁面剪切決定臨界通量",
"我們改成平行複製"
],
"a_en":"Scaling up one vessel means re-establishing every quantity that depends on a length scale: oxygen transfer, where we need a kLa of 12.5 per hour at OD 1.45, heat removal, mixing time, membrane area per unit volume, and the wall shear rate that sets the critical flux and the fouling margin. We scale out instead, because tangential-flow filtration has a formal linear method — hold wall shear and transmembrane pressure constant, increase only the channel count — and a scale-down hollow-fibre module has the same fibre length as an industrial one, so our module is the unit cell to be replicated. Worked from one module to eight, the membrane is the last thing to bind; what binds first is medium draw at 0.96 rising to 7.7 litres a day, eight continuous cross-flow pumps, and energy from 3 to 8 watts rising to 24 to 64 against a 45 watt panel that harvests 101 watt-hours a day. Running the recirculation pump on a duty cycle relieves three of those four at once, and the cost is settling in the fibres during the off phase, which is the first experiment we would run.",
"a_zh":"放大單一容器意味著每一個跟尺度有關的量都要重新建立：氧氣傳遞（OD 1.45 時我們需要 kLa 12.5 每小時）、散熱、混合時間、單位體積的膜面積，以及決定臨界通量和結垢餘裕的壁面剪切速率。我們改成平行複製，因為切向流過濾有一套正式的線性放大方法——固定壁面剪切和跨膜壓，只增加通道數——而且縮小型中空纖維模組和工業型的纖維長度相同，所以我們的模組本身就是要被複製的單元。從一個模組推到八個，膜是最後才成為限制的；先成為限制的是培養基用量（0.96 升／天升到 7.7）、八台連續運轉的切向流泵，以及能耗（3 到 8 瓦升到 24 到 64 瓦，而一片 45 瓦的太陽能板一天收 101 瓦時）。把循環泵改成間歇運轉可以一次緩解其中三項，代價是停泵期間纖維內的沉降，那就是我們會先做的實驗。",
"trap_en":"Listing scale-up factors without saying we chose scale-out and why. The method, not the list, is the answer.",
"trap_zh":"把放大的因素列一串，但沒說我們選了平行複製以及為什麼。答案是那套方法，不是清單。",
"nodes":[
"C_SCALE",
"H_TMP"
],
"figs":[
"m09",
"h03"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"biomanufacturing",
"id":"q232"
},
{
"q_en":"Have you tested how long the protectant lasts before it is delivered to the crop? Could it degrade before it reaches the plant?",
"q_zh":"你們測過保護蛋白在送到作物之前能撐多久嗎？會不會在到達植物之前就降解掉？",
"type":"boundary",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#Product in the permeate",
"plant#The updated model",
"model"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"inside the machine, yes, to 72 hours",
"a harvested preparation, never",
"0.7 to 1.5 hours against rising over 8"
],
"kw_zh":[
"機器內有，撐到 72 小時",
"採收後的製劑從沒測過",
"0.7 到 1.5 小時 vs 八小時上升"
],
"a_en":"Inside the machine, yes: the shell permeate held ACC deaminase above 2 micrograms per millilitre through seventy-two hours, and specific activity sat between 5 and 8.4 units per milligram from eighteen hours to the end of the run, so it is not falling apart in the reactor. Outside the machine, no, and this is one of our declared gaps. Our two stability readings point opposite ways: one tube fell from 0.5503 to 0.1414 millimolar alpha-ketobutyrate between three and six hours, giving an apparent half-time of 0.7 to 1.5 hours, while a replicated run rose across its first eight hours — and the tube that fell was read once. Neither measured a harvested preparation, which is the quantity that decides whether stock can be banked, and that matters because ten twenty-litre reactors need 5.4 days to make one hectare's dose against a three-day forecast, so the system has to run on banked stock; if it cannot be banked, stabilisation becomes the limiting problem.",
"a_zh":"在機器裡面有：殼側透過液的 ACC 去胺酶在七十二小時內都維持在 2 微克每毫升以上，比活性從十八小時到實驗結束都在 5 到 8.4 U/mg 之間，所以它在反應器裡並沒有崩掉。在機器外面沒有，而這是我們自己列出來的缺口。我們兩個穩定性讀值方向相反：有一管在三到六小時之間從 0.5503 掉到 0.1414 毫莫耳 α-ketobutyrate，推出 0.7 到 1.5 小時的表觀半衰期，而另一次有重複的實驗在前八小時是上升的——而掉下來那一管只讀了一次。兩者都不是在測「採收後的製劑」，而那才是決定能不能備庫的量；這件事很重要，因為十台二十公升的反應器需要 5.4 天才能做出一公頃的用量，而預報只看得到三天，所以系統必須靠備庫運轉。如果不能備庫，穩定化就會變成限制性的問題。",
"trap_en":"Answering only with the 72-hour reactor data. The question is about the harvested material in a tank or an irrigation line, and that has never been measured.",
"trap_zh":"只用反應器 72 小時的數據回答。問題問的是採收後在桶子或灌溉管線裡的材料，而那從來沒有被量過。",
"nodes":[
"M_ACT",
"D_TIMING",
"C_CF"
],
"figs":[
"m07"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"biomanufacturing",
"id":"q233"
},
{
"q_en":"Name the two links in your chain that have never been demonstrated.",
"q_zh":"說出你們整條鏈上從來沒有被展示過的兩個環節。",
"type":"integrate",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#Overview",
"results#Stress detection",
"plant#Application"
],
"seat":"hw",
"backup":"dry",
"kw_en":[
"forecast to light",
"permeate to irrigation",
"each has a smallest closing experiment"
],
"kw_zh":[
"預測到燈",
"透過液到灌溉",
"各有一個最小的收口實驗"
],
"a_en":"Forecast to light, and permeate to irrigation. No forecast has ever driven a light that reached a culture — the models were scored on recorded runs and the green strip was never fitted inside the reactor, so that stage is not joined to the next end to end. And every plant trial applied the material by hand, so the irrigation line with its mixing point and drip emitters is a design, not a result. The smallest experiment that closes the first is one reactor run where the stress index sets the lamp level automatically and the light is logged alongside OD and activity; for the second it is one hydroponic bed fed from the shell side through the mixing point, with the protectant measured at the emitter rather than at the reactor.",
"a_zh":"預測到燈，以及透過液到灌溉。從來沒有任何一次預測驅動的燈照到過培養液——模型是在已記錄的實驗上評分的，而綠光燈條也從來沒有裝進反應器本體，所以這一段和下一段並沒有端到端接起來。另外每一次植物試驗都是手動施用，所以那條帶著混合點和滴灌出水口的灌溉管線是一個設計，不是一個結果。收掉第一個的最小實驗是：跑一次反應器，讓逆境指數自動決定燈的強度，並把光照和 OD、活性一起記錄下來；第二個則是用殼側經過混合點去餵一張水耕床，並且在出水口而不是在反應器量保護蛋白。",
"trap_en":"Naming weak links instead of missing ones. These two are absent, not weak, and a judge values hearing them volunteered.",
"trap_zh":"講出「比較弱的環節」而不是「缺失的環節」。這兩個是完全不存在，不是弱；評審重視你主動講出來。",
"nodes":[
"Z_CONTAIN",
"C_GATE",
"D_TIMING"
],
"figs":[
"n01"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"biomanufacturing",
"id":"q234"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q235"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q236"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q237"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q238"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q239"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q240"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q241"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q242"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q243"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q244"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q245"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q246"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q247"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q248"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q249"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q250"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q251"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q252"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q253"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q254"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q255"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q256"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q257"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q258"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q259"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q260"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q261"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q262"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q263"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q264"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q265"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q266"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q267"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q268"
},
{
"q_en":"Your financial projection runs five years, your initial investment looks low when it is unusual to make money in the first three or four years, and there is no terminal value anywhere in it. What makes you think the projection is reasonable?",
"q_zh":"你們的財務預測只做五年，初始投資看起來很低——但前三四年賺不到錢其實才是常態——而且整份裡面沒有任何終值。你們憑什麼覺得這份預測合理？",
"type":"boundary",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"entrepreneurship#Break-even analysis",
"entrepreneurship#Return for investors",
"entrepreneurship#Investment Cost"
],
"seat":"biz",
"backup":"dry",
"kw_en":[
"a cash plan, not a valuation",
"peak funding US$196k, break-even Year 4",
"70 percent case goes to Year 6 and minus 7 percent"
],
"kw_zh":[
"這是現金計畫不是估值",
"資金低點 19.6 萬美金、第 4 年損益兩平",
"七成情境變第 6 年、IRR −7%"
],
"a_en":"Because it is a cash plan and not a valuation: we are a social enterprise asking what funding gets us to self-sustaining, so we report the peak cash low point of minus US$196,000 in Year 1 and break-even at 226 hectares against US$627,000 of fixed cost in Years 0 to 4, rather than a terminal value we would have to invent a multiple for. We also took the harder version on purpose — we could have sold to industrial farms in the first four years to reach break-even faster and chose not to, and our price is fixed at twice our cost. Where I would want to be judged is the sensitivity case: at seventy percent of planned hectares, break-even moves to Year 6 and the internal rate of return goes to about minus seven percent, which is exactly why our own subsidy to farmers only starts after cumulative cash turns positive. And the number that should worry you most is not the terminal value — it is that the capital line uses US$2,280 per hectare while our own Math Model derives US$3,800, and this analysis has not been rebuilt on that figure.",
"a_zh":"因為這是一份現金計畫而不是估值：我們是社會企業，問的是「要多少資金才能走到自給自足」，所以我們報的是第 1 年的現金低點 −19.6 萬美金、以及在第 0 到 4 年 62.7 萬美金固定成本下、226 公頃的損益兩平點，而不是一個得自己發明倍數的終值。我們也刻意選了比較難的版本——我們本來可以在前四年賣給工業化農場、更快達到損益兩平，但我們沒有，而且定價固定在成本的兩倍。我希望被檢驗的是敏感度情境：在計畫公頃數的七成時，損益兩平延到第 6 年、內部報酬率掉到大約 −7%，這也正是為什麼我們自己對農民的補貼要等到累積現金轉正之後才開始。而最該讓你擔心的數字不是終值——是資本那一行用的是每公頃 US$2,280，而我們自己的數學模型算出來是 US$3,800，而這份分析還沒有用後面那個數字重做過。",
"trap_en":"Defending the low initial investment. Year 0 is a build year, the US$627,000 is cumulative over five years, and Year 1 assumes twenty paying hectares before any field data exists.",
"trap_zh":"替「初始投資很低」辯護。第 0 年是建置年、62.7 萬是五年累積，而第 1 年假設在沒有任何田間數據之前就賣出二十公頃。",
"nodes":[
"B_BREAK",
"C_MKT",
"C_SCALE"
],
"figs":[
"b02"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"entrepreneurship",
"id":"q269"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q270"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q271"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q272"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q273"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q274"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q275"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q276"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q277"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q278"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q279"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q280"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q281"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q282"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q283"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q284"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q285"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q286"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q287"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q288"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q289"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q290"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q291"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q292"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q293"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q294"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q295"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q296"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q297"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q298"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q299"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q300"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q301"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q302"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q303"
},
{
"q_en":"You report that the CH peptide, a product sold against drought, also confers salinity tolerance. What are the candidate molecular mechanisms, and which of them can your data actually distinguish?",
"q_zh":"你們說 CH 胜肽這個主打乾旱的產品，在鹽逆境下也有耐受效果。可能的分子機制有哪些？而你們的數據真的分得出是哪一個嗎？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"plant#Testing the efficacy of commercial CH Bio peptide",
"results",
"plant#Outreach"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"components not disclosed",
"timing, not mechanism",
"separate it first"
],
"kw_zh":[
"成分未揭露",
"我們有的是時機",
"要先分離組分"
],
"a_en":"We cannot name one, and I want to be precise about why. 富肽2號 is a finished product and CH Biotech did not disclose its active components, so we treat it as a product-level comparison and not as evidence for any compound. What we have is timing. In trial 1, with twenty-five seedlings a condition, post-treatment gave the highest chlorophyll and fresh weight of the three timings at 100 millimolar sodium chloride. In trial 2 post-treatment again gave the strongest recovery at 100 millimolar, while co-treatment helped most at 75. Naming a mechanism would mean separating the preparation into components first, and we have not done that.",
"a_zh":"我們講不出來，而我想把原因說精確。富肽2號是成品，正瀚生技沒有揭露有效成分，所以我們只把它當成產品層級的比較，不當成任何特定化合物的證據。我們手上有的是時機。trial 1 每個條件二十五株，100 mM NaCl 下事後處理的葉綠素和鮮重是三個時機裡最高的。trial 2 在 100 mM 下又是事後處理恢復最強，而 75 mM 時同時處理最有幫助。要講機制，得先把這個製劑分離成組分，這件事我們還沒做。",
"trap_en":"Reciting a mechanism out of the plant elicitor peptide literature as if it had been measured here. The CH preparation is not BoPEP4, its composition is undisclosed, and no mechanistic assay was run on it.",
"trap_zh":"把 plant elicitor peptide 文獻上的機制背出來，講得好像自己量過。CH 的製劑不是 BoPEP4，成分未揭露，我們也沒對它做過機制性實驗。",
"author":"Kyle Peng",
"author_zh":"Kyle Peng（植物顧問）",
"basis":"from Kyle Peng's 24 Oct research-highlights note, CH peptide mechanism inquiry",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q304"
},
{
"q_en":"How do you experimentally exclude the confounding hypothesis that a protectant preparation acted simply as a nitrogen-rich nutrient source, that is, a fertilisation effect rather than protection?",
"q_zh":"你們怎麼用實驗排除另一個解釋：保護劑製劑其實只是含氮的營養來源，也就是施肥效果，而不是保護效果？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"plant#Evaluating ACC deaminase rescue efficacy",
"measurement",
"plant#Effect of different trehalose concentrations"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"carrier controlled, nitrogen not",
"TB and 1/40 WB800",
"set 4 unstressed gain"
],
"kw_zh":[
"控制了載體，沒控制氮",
"TB 和 1/40 WB800",
"set 4 無逆境也變重"
],
"a_en":"Partly, and I will say which part. On agar, sets 9, 10 and 11 put TB medium on the control plates to stand in for the bacterial culture without protectant, and in hydroponics every protectant run carried a 1/40 untransformed WB800 control, which is B. subtilis in TB medium with no protectant, specifically to separate the carrier from the protein. Those controls do rule out the medium. They do not rule out nitrogen, because none is matched to what a working enzyme releases. And set 4 shows a nutrient-type effect is real here: trehalose raised fresh weight in the unstressed plants. A nitrogen-matched arm would close it.",
"a_zh":"部分排除了，我直接說是哪一部分。瓊脂上 set 9、10、11 的對照盤加的是 TB 培養基，用來代表沒有保護劑的菌液；水耕每一次保護劑實驗都帶一組 1/40 未轉型的 WB800，也就是 TB 培養基裡的 B. subtilis 但沒有保護劑，就是為了把載體和蛋白分開。這些對照確實排除了培養基，但沒有排除氮，因為沒有一組的氮量是跟一個正在作用的酵素所釋放的量配對的。而 set 4 顯示營養型的效果在我們系統裡是真的：trehalose 讓沒有逆境的植株鮮重上升。要關掉這個問題，需要一組等氮量的對照。",
"trap_en":"Claiming the TB medium control already rules out a nutrient effect. It controls for the carrier, not for the nitrogen the enzyme reaction releases.",
"trap_zh":"說 TB 培養基對照已經排除了營養效果。那控制的是載體，不是酵素反應釋放出來的氮。",
"author":"Kyle Peng",
"author_zh":"Kyle Peng（植物顧問）",
"basis":"from Kyle Peng's 24 Oct research-highlights note, fertilisation-effect confound",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q305"
},
{
"q_en":"Your enzyme's own reaction products are ammonia and alpha-ketobutyrate. On a plate, how do you separate ACC deaminase activity from the nitrogen the reaction releases?",
"q_zh":"你們這個酵素的反應產物本身就是氨和 alpha-ketobutyrate。在平板上，你們怎麼把 ACC deaminase 的活性跟反應放出來的氮分開？",
"type":"reason",
"tier":"B",
"deep":1,
"pages":[
"measurement#DNPH assay for ACC deaminase activity",
"plant#Implications for ACC deaminase testing",
"results"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"ammonia is a product",
"we read both products",
"dead enzyme control"
],
"kw_zh":[
"氨就是產物",
"兩個產物我們都讀",
"失活酵素對照"
],
"a_en":"We have not separated them, and it is a fair worry, because ammonia is a product of the reaction. ACC deaminase cleaves ACC into alpha-ketobutyrate and ammonia, and we read both: the DNPH assay measures the alpha-ketobutyrate and the indophenol blue assay measures the ammonia. On a plate that same ammonia is nitrogen. Our controls are TB medium, a 1/40 untransformed WB800 supernatant, and PLP alone, and none of them is matched to the nitrogen a turning-over enzyme would release. The clean separation is a catalytically dead enzyme at the same concentration, which our anti-His ELISA could match, or ammonium added to the control.",
"a_zh":"我們沒有分開，而這個質疑很合理，因為氨就是反應產物。ACC deaminase 把 ACC 切成 alpha-ketobutyrate 和氨，而這兩個產物我們都讀：DNPH 測 alpha-ketobutyrate，indophenol blue 測氨。放到平板上，同一份氨就是氮。我們的對照是 TB 培養基、1/40 未轉型 WB800 上清液，還有單獨的 PLP，沒有一組的氮量跟一個正在催化的酵素所釋放的量配對。乾淨的分法是用一個失去催化活性的酵素，濃度用我們的 anti-His ELISA 配對，或者直接在對照組補上銨。",
"trap_en":"Saying the amount is too small to matter. We have never put a number on the ammonia delivered onto a plate, so we cannot claim it is negligible.",
"trap_zh":"說「量太小不重要」。我們從來沒算過一個平板上帶進多少氨，所以不能說它可以忽略。",
"author":"Kyle Peng",
"author_zh":"Kyle Peng（植物顧問）",
"basis":"from Kyle Peng's 24 Oct research-highlights note, nitrogen-source confound applied to ACCD",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q306"
},
{
"q_en":"Resource allocation theory posits a trade-off between vegetative growth rate and stress tolerance. Did your tolerance gains come with a fitness cost, and in which arm of your design would that cost appear?",
"q_zh":"資源分配理論認為營養生長速率和逆境耐受之間會有取捨。你們拿到的耐受性有付出代價嗎？如果有，會出現在你們設計的哪一組？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"plant#Evaluating ACC deaminase rescue efficacy under prolonged 37 °C heat stress",
"plant#BoPEP4 against 100 mM NaCl",
"plant#WB800 culture"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"every run has unstressed row",
"pre and co cut weight",
"BoPEP4 anthocyanin"
],
"kw_zh":[
"每次都有無逆境那排",
"預先和同時變輕",
"BoPEP4 出花青素"
],
"a_en":"Yes, in some protectants and at some timings, and we can show it because every run carries an unstressed row. Under heat, post-treatment ACC deaminase grew like the control while pre- and co-treatment reduced fresh weight. In hydroponics without salt, BoPEP4 from 1/40 to 1/100 accumulated anthocyanin while the matched 1/40 WB800 and 0.1 times MS controls did not, which we read as BoPEP4 inhibiting growth when no stress is applied. The carrier has a cost too: WB800 culture alone stunted plants until we diluted it at least sixteen-fold. What we cannot speak to is lifetime fitness, because we score at day twelve to seventeen.",
"a_zh":"有，在某些保護劑和某些時機下有，而我們看得到是因為每一次實驗都有一排沒有逆境的組。熱逆境下，事後處理的 ACC deaminase 長得跟對照一樣，而預先和同時處理讓鮮重下降。水耕沒有加鹽的那組，BoPEP4 從 1/40 到 1/100 都累積花青素，而配對的 1/40 WB800 和 0.1 倍 MS 對照沒有，我們解讀成沒有逆境時 BoPEP4 可能抑制生長。載體本身也有代價：單獨的 WB800 菌液會讓植株變小，所以我們至少稀釋十六倍。我們講不到的是整個生命週期的適存度，因為我們在第十二到十七天就判讀了。",
"trap_en":"Answering with the rescue numbers only. The question is about the unstressed row, and ours shows real costs for BoPEP4 and for pre- and co-treatment ACC deaminase.",
"trap_zh":"只拿拯救效果的數字回答。問的是沒有逆境那一排，而我們在 BoPEP4 和預先、同時處理的 ACC deaminase 上都看到真實代價。",
"author":"Kyle Peng",
"author_zh":"Kyle Peng（植物顧問）",
"basis":"from Kyle Peng's 24 Oct research-highlights note, growth versus tolerance trade-off",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q307"
},
{
"q_en":"Did the tolerance gain compromise defence against biotic stresses, such as phytophagous insects or pathogens? BoPEP4 in particular is an elicitor, so what would you predict?",
"q_zh":"耐受性提升會不會犧牲對生物性逆境的防禦，例如食植性昆蟲或病原菌？尤其 BoPEP4 是個 elicitor，你們預期會怎樣？",
"type":"gap",
"tier":"B",
"deep":1,
"pages":[
"plant#Stress protocols",
"protein-design",
"plant#BoPEP4 against 100 mM NaCl"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"no biotic challenge run",
"PEPR raises defence",
"contamination is a confound"
],
"kw_zh":[
"沒做過生物性挑戰",
"PEPR 提升防禦",
"污染是干擾不是實驗"
],
"a_en":"We did not test it. Eleven agar and two soil salinity sets, three agar and two soil heat sets, and no insect or pathogen challenge in any of them, so I have no measurement to give you. What we can reason is the direction. BoPEP4 is a plant elicitor peptide read by PEPR1 and PEPR2, which recruit the co-receptor BAK1 and switch on defence, so we would expect biotic defence to rise and growth to pay for it, rather than the reverse. That fits what we saw without stress, where BoPEP4 accumulated anthocyanin. The microbes we actually met were contamination in plates and hydroponic boxes, which is a confound, not a challenge.",
"a_zh":"我們沒有測。鹽逆境做了十一組瓊脂和兩組土壤，熱逆境三組瓊脂和兩組土壤，沒有一組做過昆蟲或病原菌的挑戰，所以我拿不出量測結果。我們能推理的是方向。BoPEP4 是 plant elicitor peptide，由 PEPR1 和 PEPR2 辨識，再招募共受體 BAK1 啟動防禦，所以我們預期生物性防禦會上升、生長來付代價，而不是反過來。這也跟我們在沒有逆境時看到的一致，BoPEP4 那幾組累積了花青素。我們真正遇到的微生物是平板和水耕盒裡的污染，那是干擾因子，不是挑戰實驗。",
"trap_en":"Treating plate contamination as a biotic-stress result. It wrecked runs; it was never a controlled challenge.",
"trap_zh":"把平板污染當成生物性逆境的結果。它毀了幾次實驗，但從來不是有控制的挑戰實驗。",
"author":"Kyle Peng",
"author_zh":"Kyle Peng（植物顧問）",
"basis":"from Kyle Peng's 24 Oct research-highlights note, biotic-defence half of the trade-off question",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q308"
},
{
"q_en":"What are the stability profiles and degradation half-lives of your bioprotectants in soil, in hydroponic medium and on a foliar surface?",
"q_zh":"你們的生物保護劑在土壤、水耕液和葉表面上的穩定性和降解半衰期各是多少？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"model#Current limits",
"model",
"plant#The updated model"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"0.7 to 1.5 hours",
"too short to bank",
"three sites unmeasured"
],
"kw_zh":[
"0.7 到 1.5 小時",
"短到存不起來",
"三個場所都沒量"
],
"a_en":"We have one number and it is not for any of the three places you named. Two readings by different routes, one in live culture and one across a twenty-eight hour reaction, put the apparent half-time of the secreted protectant at 0.7 to 1.5 hours. Neither is replicated and both sit near the limits of the assay, so our model carries it as provisional, but the direction matters: on that timescale activity is too short to bank. Soil, hydroponic medium and the leaf surface are all unmeasured, shelf life has no direct measurement, and the two-day protection window our dosing assumes is an assumption, not a result.",
"a_zh":"我們有一個數字，但不是您問的那三個場所。兩個不同途徑的讀值，一個在活菌培養裡，一個是二十八小時的反應，把分泌出來的保護劑表觀半衰期放在 0.7 到 1.5 小時。兩個都沒有重複，而且都接近測定極限，所以我們的模型只當它是暫定值；但方向很重要：在那個時間尺度上，活性短到沒辦法先做好存起來。土壤、水耕液和葉表面三個都沒有量，保存期限沒有直接量測，而我們劑量計算裡假設的兩天保護窗是假設，不是結果。",
"trap_en":"Quoting 0.7 to 1.5 hours as if it described the protectant on a leaf. It bounds activity in the vessel; a harvested, cooled or formulated preparation is unmeasured.",
"trap_zh":"把 0.7 到 1.5 小時講成葉子上的情況。那是框住反應槽裡的活性，收下來、冷藏或配製過的樣品都沒量過。",
"author":"Kyle Peng",
"author_zh":"Kyle Peng（植物顧問）",
"basis":"from Kyle Peng's 24 Oct research-highlights note, stability and degradation half-life inquiry",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q309"
},
{
"q_en":"Is there empirical evidence confirming cellular uptake and systemic translocation of these intact molecules by the host plant?",
"q_zh":"有沒有實驗證據證明這些分子是以完整形式被植物吸收進細胞，並在體內運輸？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"plant#Application",
"results",
"measurement"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"no label, no localisation",
"we admit poor root uptake",
"ELISA is culture only"
],
"kw_zh":[
"沒標記、沒定位",
"我們自己承認根吸收差",
"ELISA 只讀培養液"
],
"a_en":"None. We have no label, no immunolocalisation and no tissue fractionation, so we have never shown an intact molecule entering a cell or moving between tissues. The nearest thing on our wiki is an admission rather than evidence: we sprayed ACC deaminase onto shoots because it is a larger enzyme and is absorbed through roots with difficulty. That sentence concedes exactly the problem you are pointing at. Our anti-His ELISA does put a concentration on the protein, between 3.4 and 6.5 micrograms per millilitre across both October reactor runs, but that is protein in the culture and says nothing about where it goes on a plant.",
"a_zh":"沒有。我們沒有做標記、沒有免疫定位、沒有組織分離，所以從來沒有證明完整分子進到細胞裡或在組織之間移動。我們 wiki 上最接近的一句不是證據而是承認：我們把 ACC deaminase 噴在地上部，是因為它是比較大的酵素，經由根吸收比較困難。那句話正好承認了您指出的問題。我們的 anti-His ELISA 確實量到濃度，兩次十月反應器運轉都在每毫升 3.4 到 6.5 微克之間，但那是培養液裡的蛋白，講不到它上了植物之後去哪裡。",
"trap_en":"Offering the ELISA concentration as uptake evidence. It counts His-tagged protein in culture medium, not in plant tissue.",
"trap_zh":"拿 ELISA 的濃度當吸收證據。它數的是培養液裡帶 His tag 的蛋白，不是植物組織裡的。",
"author":"Kyle Peng",
"author_zh":"Kyle Peng（植物顧問）",
"basis":"from Kyle Peng's 24 Oct research-highlights note, uptake and systemic translocation inquiry",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q310"
},
{
"q_en":"Most high-molecular-weight proteins cannot passively traverse the plant cell wall. By what mechanism, then, does exogenous ACC deaminase provide abiotic stress tolerance, given the enzyme's native intracellular localisation and its substrate accessibility?",
"q_zh":"大多數高分子量蛋白無法被動穿過植物細胞壁。那麼考慮到這個酵素原生的胞內定位和底物可及性，外源施用的 ACC deaminase 是透過什麼機制賦予非生物逆境耐受的？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"plant#Implications for ACC deaminase testing",
"measurement#PLP is what makes the enzyme work",
"parts"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"works outside the root",
"ACC already exuded",
"no PLP, no activity"
],
"kw_zh":[
"在根外作用",
"ACC 已經分泌出來",
"沒有 PLP 就沒活性"
],
"a_en":"Our reading is that it does not have to get in. The review we build on has plant-growth-promoting bacteria degrading ACC into ammonia and alpha-ketobutyrate outside the plant, which lowers the ACC available for ethylene and keeps growth going under salinity, so the substrate is ACC that has already left the root. On that account the cell wall is not the barrier for this enzyme. There is a condition and our own assay found it: without added PLP our construct turned substrate over no faster than the untransformed host. So wherever the enzyme works, the cofactor has to be there too, which is why PLP goes in with every dose.",
"a_zh":"我們的理解是它不需要進去。我們依據的那篇回顧，講的是促生菌在植物外面把 ACC 分解成氨和 alpha-ketobutyrate，降低可用來做乙烯的 ACC，讓植物在鹽逆境下還能生長，所以底物是已經從根分泌出來的 ACC。照這個說法，細胞壁對這個酵素不是障礙。但有一個條件，是我們自己的測定找到的：沒有外加 PLP 時，我們的構築體轉化底物的速度跟未轉型的宿主一樣。所以酵素在哪裡作用，輔因子就得在那裡，這也是為什麼每一次給藥都一起加 PLP。",
"trap_en":"Arguing the enzyme enters the cell. The whole point of the rhizosphere account is that it acts on ACC already outside the root, and it needs PLP there as well.",
"trap_zh":"硬說酵素會進到細胞裡。根圈那套說法的重點是它作用在已經在根外的 ACC，而且 PLP 也得在那裡。",
"author":"Kyle Peng",
"author_zh":"Kyle Peng（植物顧問）",
"basis":"from Kyle Peng's 24 Oct research-highlights note, cell-wall barrier and ACCD localisation inquiry",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q311"
},
{
"q_en":"You sprayed the enzyme onto shoots. The rhizosphere account you have just described is a root-zone argument, so how does a sprayed leaf fit the mechanism you are claiming?",
"q_zh":"你們是把酵素噴在地上部的。你剛說的根圈機制是根部的論證，那噴在葉子上要怎麼和你主張的機制對得上？",
"type":"boundary",
"tier":"A",
"deep":1,
"pages":[
"plant#Application",
"plant#ACC deaminase against 100 mM NaCl",
"model"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"our reason cuts against us",
"hydroponics is right geometry",
"culture volume not standardised"
],
"kw_zh":[
"理由反而不利於我們",
"水耕才是對的幾何",
"菌液體積沒統一"
],
"a_en":"Our stated reason is honest but it cuts against us: we sprayed because ACC deaminase is a larger enzyme and is absorbed through roots with difficulty. So the route we chose is the one where the rhizosphere account does not apply, and the route where it does apply is the one we could not interpret. In hydroponics the enzyme goes into the root medium, which is the right geometry, but you pointed out after that run that we had not standardised the culture volume between groups, so a higher enzyme dose came with more medium. We could not separate the two, and we say on the page that the run cannot support a conclusion.",
"a_zh":"我們寫出來的理由很誠實，但其實對我們不利：我們噴是因為 ACC deaminase 是比較大的酵素，經由根吸收比較困難。所以我們選的路線剛好是根圈機制不適用的那條，而真正適用的那條我們又解讀不了。水耕是把酵素加進根部培養液，那個幾何是對的，但您在那次之後指出我們沒有把各組的菌液體積統一，所以酵素劑量越高、培養液也越多。這兩者分不開，我們也在頁面上寫了這一次沒辦法支持結論。",
"trap_en":"Defending the spray as the intended field route. The reason we gave for spraying is that root uptake is hard, which is a concession, not a mechanism.",
"trap_zh":"把噴灑講成原本設計的田間施用方式。我們給的理由是根吸收困難，那是讓步，不是機制。",
"author":"Kyle Peng",
"author_zh":"Kyle Peng（植物顧問）",
"basis":"derived from Kyle Peng's 24 Oct note: his substrate-accessibility point pressed on the foliar route",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q312"
},
{
"q_en":"Glutathione is known to enhance adaptation to heat, salinity and drought. Do your three bioprotectants act through glutathione-related pathways, or by upregulating the plant's own glutathione homeostasis?",
"q_zh":"Glutathione 已知可以提升植物對高溫、鹽害和乾旱的適應。你們這三種生物保護劑是走 glutathione 相關的路徑，還是靠提升植物自己的 glutathione 恆定？",
"type":"gap",
"tier":"B",
"deep":1,
"pages":[
"plant#Stress protocols",
"plant#References",
"measurement"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"never measured it",
"our heat protocol's own paper",
"downstream convergence"
],
"kw_zh":[
"沒量過",
"熱逆境方法那篇論文",
"下游匯聚"
],
"a_en":"We never measured it, so I cannot answer directly. But the question sits closer to our work than it looks, because the thermo-priming protocol our whole heat assay is built on comes from Auverlot and colleagues, and their evidence is in glutathione biosynthesis mutants. So the experiment is already named for us: run our five-day 37 degree protocol on those mutants and see whether the protectant still rescues. On mechanism I would reason rather than claim. The three target different proximal things, ethylene, protein damage and defence signalling, so a shared glutathione node would be downstream convergence. The reduced to oxidised ratio is the first measurement.",
"a_zh":"我們沒有量過，所以我沒辦法直接回答。但這個問題其實比看起來更貼近我們的工作，因為我們整個熱逆境實驗所依據的 thermo-priming 流程來自 Auverlot 等人，而他們的證據就是在 glutathione 生合成突變體上。所以實驗其實已經被指定好了：把我們 37 度五天的流程跑在那些突變體上，看保護劑還救不救得起來。機制上我只能推論，不敢斷言。這三個近端標的不一樣，分別是乙烯、蛋白受損和防禦訊息，所以共用 glutathione 這個節點會是下游的匯聚。第一步要量的是還原態和氧化態的比例。",
"trap_en":"Asserting an antioxidant mechanism because chlorophyll was retained. Retained chlorophyll is consistent with many pathways and identifies none.",
"trap_zh":"因為葉綠素有保留就斷定是抗氧化機制。葉綠素保留和很多路徑都相容，指不出任何一條。",
"author":"Kyle Peng",
"author_zh":"Kyle Peng（植物顧問）",
"basis":"from Kyle Peng's 24 Oct research-highlights note, shared GSH-pathway inquiry",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q313"
},
{
"q_en":"Your first highlight credits crude, unpurified ACC deaminase and BoPEP4 from your own bioreactor with the anticipated protective effects. State precisely what that rests on, and where it stops.",
"q_zh":"你們第一個重點把預期的保護效果歸給自家生物反應器產出的粗製、未純化 ACC deaminase 和 BoPEP4。請精確說明這個結論建立在什麼上，又在哪裡停住。",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"plant#Chlorophyll content",
"plant#BoPEP4 against 100 mM NaCl",
"results"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"1.74 against 1.03",
"BoPEP4 1/40 stayed green",
"activity never quantified"
],
"kw_zh":[
"1.74 對 1.03",
"BoPEP4 1/40 保持綠色",
"活性沒有定量"
],
"a_en":"It rests on phenotype, and it stops at activity. On agar, pre-treatment ACC deaminase under 100 millimolar sodium chloride held about 1.74 against about 1.03 milligrams per gram in the untreated control, roughly seventy per cent more chlorophyll, tested by one-way ANOVA with Dunnett's test. In hydroponics BoPEP4 at 1/40 kept every plant green under the same salt, while the matched carrier control did not. Where it stops is that ACC deaminase activity in the material we applied was never quantified, so we cannot say how much working enzyme reached those plants. Each condition was one plate, and both results need replication.",
"a_zh":"它建立在表徵上，停在活性。瓊脂上 100 mM NaCl 下，預先處理的 ACC deaminase 保留每克約 1.74 毫克，未處理對照約 1.03 毫克，大約多七成的葉綠素，用 one-way ANOVA 加 Dunnett 檢定。水耕裡 1/40 的 BoPEP4 在同樣鹽濃度下每一株都保持綠色，而配對的載體對照沒有。停住的地方是：我們施用的那批材料裡 ACC deaminase 的活性從來沒有定量，所以我們說不出有多少能作用的酵素真的到了那些植物上。而且每個條件只有一個平板，這兩個結果都需要重複驗證。",
"trap_en":"Quoting 70% more chlorophyll and stopping there. The judge's next question is how much active enzyme was in the spray, and we do not know.",
"trap_zh":"講完「葉綠素多七成」就停住。評審下一句會問噴上去的裡面有多少有活性的酵素，而我們不知道。",
"author":"Kyle Peng",
"author_zh":"Kyle Peng（植物顧問）",
"basis":"from Kyle Peng's 24 Oct research-highlights note, laboratory-production highlight and its limit",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q314"
},
{
"q_en":"Crude culture or purified protein, which is your active ingredient? And what does working with a crude preparation cost you in attribution?",
"q_zh":"你們的有效成分到底是粗製培養液還是純化蛋白？用粗製品做實驗，在歸因上讓你們付出什麼代價？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"results",
"experiments",
"plant#Application"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"concentration yes, activity no",
"filter is sterilisation",
"purification gave no result"
],
"kw_zh":[
"有濃度沒活性",
"過濾是除菌",
"純化沒有結果"
],
"a_en":"Concentration we have; purity and activity we do not. Our anti-His ELISA puts ACC deaminase at 3.4 to 6.5 micrograms per millilitre through both October reactor runs, present from the first hour with no rise over time. But the purification and dialysis protocol produced no result on our wiki, and what went onto plants was supernatant through a 0.22 micron filter, which is sterilisation rather than purification. The ELISA counts His-tagged protein and says nothing about whether it folds or turns substrate over, which is what the DNPH assay is for, and that activity is still unquantified. Crude suits a farm, but it costs us attribution.",
"a_zh":"濃度我們有，純度和活性沒有。我們的 anti-His ELISA 在兩次十月反應器運轉裡把 ACC deaminase 定在每毫升 3.4 到 6.5 微克，從第一個小時就測得到，而且沒有隨時間上升。但純化與透析的流程在我們 wiki 上沒有產出結果，而施到植物上的是通過 0.22 µm 濾膜的上清液，那是除菌不是純化。ELISA 數的是帶 His tag 的蛋白，講不到它有沒有正確折疊或能不能轉化底物，那是 DNPH 的工作，而那個活性目前還沒有定量。粗製品適合農場，但代價是歸因。",
"trap_en":"Saying the 0.22 micron filter made it pure, or offering the ELISA concentration as proof of activity. The wiki itself keeps those two numbers apart.",
"trap_zh":"說 0.22 µm 過濾之後就純了，或者拿 ELISA 的濃度當活性的證明。我們 wiki 自己就把這兩個數字分開寫。",
"author":"Kyle Peng",
"author_zh":"Kyle Peng（植物顧問）",
"basis":"derived from Kyle Peng's 24 Oct note: his crude-preparation highlight read as an active-ingredient question",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q315"
},
{
"q_en":"Your second highlight says sequence-modified protectants maintained bioactivity. Which modification was tested, and if a variant performs like wild type, is that evidence of robustness or of a method that cannot resolve a difference?",
"q_zh":"你們第二個重點說經過序列修改的保護劑仍保有活性。實際測的是哪一個修改？而如果變異體表現和野生型一樣，那是穩健的證據，還是你們的方法本來就分不出差別？",
"type":"validate",
"tier":"B",
"deep":1,
"pages":[
"parts",
"protein-design",
"results"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"first fifteen codons only",
"S15A and G17A are controls",
"rho about plus 0.05"
],
"kw_zh":[
"只改前十五個密碼子",
"S15A 和 G17A 是對照",
"rho 約 +0.05"
],
"a_en":"I have to separate three things that the word modified runs together. The codon optimisation recodes only the first fifteen codons, to loosen the mRNA at the translation start, so not one amino acid changes and bioactivity could not change. The real protein-level change is the BoPEP4 truncation, which is registered and still in draft; we hold both lengths and have not run the head-to-head titre. And S15A and G17A are not activity-preserving variants, they are loss-of-function controls we ordered on published activities roughly a hundredfold and over four thousandfold below wild type. On your second half, our own audit found the docking score is ninety-three per cent explained by length and charge, and correlates with measured activity at rho about plus 0.05.",
"a_zh":"我得把「修改」這個詞混在一起的三件事分開。密碼子最佳化只重新編碼前十五個密碼子，目的是鬆開轉譯起始處的 mRNA，一個胺基酸都沒變，活性本來就不會變。真正在蛋白層級的改動是 BoPEP4 的截短，它已登錄但還是草稿；兩個長度我們都有，但還沒跑過一對一的產量比較。而 S15A 和 G17A 根本不是保有活性的變異體，是我們依照已發表資料訂來當失活對照的，活性大約比野生型低一百倍和四千倍以上。至於您的後半段，我們自己的審核發現 docking 分數有九成三可以用長度和電荷解釋，而它和實測活性的相關性 rho 大約只有 +0.05。",
"trap_en":"Letting codon optimisation count as a sequence modification that preserved activity, or presenting S15A and G17A as variants that worked. They were built to fail.",
"trap_zh":"把密碼子最佳化算成「保有活性的序列修改」，或把 S15A 和 G17A 說成有效的變異體。那兩個本來就是設計成失活的。",
"author":"Kyle Peng",
"author_zh":"Kyle Peng（植物顧問）",
"basis":"derived from Kyle Peng's 24 Oct note: his structural-modification highlight read as a method-resolution question",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q316"
},
{
"q_en":"You propose isolating active polypeptide motifs and scaling up toward field application. In practice, what breaks first when you try that?",
"q_zh":"你們打算分離出有活性的短序列，再往田間規模放大。實際上，這條路最先卡在哪裡？",
"type":"boundary",
"tier":"A",
"deep":1,
"pages":[
"plant#Dry lab collaborations",
"model#Current limits",
"biomanufacturing"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"one plate per condition",
"efficacy is an axis",
"5.4 days against 3"
],
"kw_zh":[
"每條件一個平板",
"效力只能當軸",
"5.4 天對 3 天"
],
"a_en":"Replication breaks first, then efficacy, then litres. Each condition in our sets was a single plate, so our own stated next steps are independent replicates, a consistent treatment protocol, proper controls and a dose-response series for ACC deaminase. Efficacy is unbounded: no plant run of ours says how much of a salinity loss the protectant takes back, so the model carries it as an axis and never at a value. On litres, three sprays delivered 1.67 millilitres onto a 78.5 square centimetre plate, which is 2,126 litres a hectare and 37.6 kilounits per application, and ten twenty-litre reactors need 5.4 days against a three-day forecast.",
"a_zh":"最先卡的是重複次數，接著是效力，再來是公升數。我們每個條件只有一個平板，所以我們自己寫下來的下一步就是獨立重複、統一的處理流程、適當的對照，還有 ACC deaminase 的劑量反應曲線。效力目前沒有上下界：我們沒有任何一次植物實驗能說出保護劑把鹽害損失救回多少，所以模型只能把它當成一個軸，從來不給定值。公升數上，三噴送出 1.67 毫升到 78.5 平方公分的平板，換算是每公頃 2,126 公升、每次施用 37.6 kU，而十台二十公升的反應器需要 5.4 天，對上只有三天的預報。",
"trap_en":"Answering with biology only. The binding constraints here are independent replication and an unbounded efficacy term, not whether an active motif can be found.",
"trap_zh":"只用生物學回答。真正的瓶頸是獨立重複和沒有界限的效力項，不是找不找得到有活性的序列。",
"author":"Kyle Peng",
"author_zh":"Kyle Peng（植物顧問）",
"basis":"from Kyle Peng's 24 Oct research-highlights note, spectrum-expansion and scale-up highlight",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q317"
},
{
"q_en":"Before we come to your data: what does ethylene actually do to a plant under stress, and why would taking its precursor away help?",
"q_zh":"先不談你們的數據。植物在逆境下，ethylene 到底對它做了什麼？為什麼把前驅物拿掉會有幫助？",
"type":"fact",
"tier":"A",
"pages":[
"plant#Implications for ACC deaminase testing",
"measurement",
"plant#Heat stress"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"stress ethylene rises",
"shorter roots, less photosynthesis",
"ACC is the precursor"
],
"kw_zh":[
"逆境下 ethylene 上升",
"根變短、光合下降",
"ACC 是前驅物"
],
"a_en":"Ethylene is the stress hormone that holds a stressed plant back. Under salinity the plant accumulates ACC, the precursor, and the ethylene made from it inhibits root elongation and impairs photosynthesis. So the two things we score, a short root and a pale leaf, are partly the plant's own hormone response and not only the salt. ACC deaminase is a bacterial enzyme that degrades ACC into ammonia and alpha-ketobutyrate, which lowers the excess ethylene. Our heat data add one detail worth knowing: ethylene rises twice, when the heat is applied and again when it is removed and the plant enters recovery.",
"a_zh":"ethylene 是把受逆境植物壓住的逆境荷爾蒙。鹽逆境下植物會累積前驅物 ACC，由它做出來的 ethylene 會抑制根的延長，也會損害光合作用。所以我們量的那兩件事，根變短、葉子變淡，有一部分是植物自己的荷爾蒙反應，不只是鹽。ACC deaminase 是細菌的酵素，它把 ACC 分解成氨和 alpha-ketobutyrate，把過多的 ethylene 降下來。我們的熱逆境數據還補上一個值得知道的細節：ethylene 會上升兩次，一次是加熱的時候，另一次是熱移除、植物進入恢復期的時候。",
"trap_en":"Treating ethylene as only a fruit-ripening hormone, or saying ACC deaminase breaks down ethylene itself rather than its precursor.",
"trap_zh":"把 ethylene 只當成催熟荷爾蒙，或說 ACC deaminase 分解的是 ethylene 本身，而不是它的前驅物。",
"basis":"the hormone the whole project is aimed at",
"dom":"plant",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q318"
},
{
"q_en":"Salt stress is often called two stresses in one. What are the two, and which one does your 100 mM plate deliver first?",
"q_zh":"鹽逆境常被說是兩種逆境合在一起。是哪兩種？你們 100 mM 的平板先給植物的是哪一種？",
"type":"fact",
"tier":"A",
"pages":[
"plant#Initial screening",
"plant#Stress design",
"measurement"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"water pulled away first",
"sodium builds up later",
"no mannitol control"
],
"kw_zh":[
"先是吸不到水",
"鈉之後才累積",
"沒有 mannitol 對照"
],
"a_en":"The two are osmotic and ionic. The osmotic part arrives at once: sodium chloride lowers the water potential outside the root so the plant cannot take water up, and in our first screening 150 mM killed seedlings quickly through exactly that. The ionic part builds over days, as sodium accumulates in the tissue and interferes with enzymes and with potassium. We chose 100 mM because it gives a strong response without killing, so it delivers the osmotic hit on day one and the ionic damage across the five to seven days we watch. I should be honest that we cannot separate them. We never ran an iso-osmotic control such as mannitol.",
"a_zh":"一種是滲透逆境，一種是離子逆境。滲透的部分馬上就到：NaCl 把根外的水勢降低，植物吸不到水，而我們最早的篩選裡 150 mM 就是這樣很快把幼苗弄死的。離子的部分要幾天才累積起來，鈉進到組織裡干擾酵素，也干擾鉀。我們選 100 mM 是因為它會造成明顯反應但不致死，所以它第一天給的是滲透壓的衝擊，離子傷害則分散在我們觀察的那五到七天裡。我必須老實說我們沒辦法把兩者分開，我們從來沒有做等滲透壓的對照，例如 mannitol。",
"trap_en":"Naming only the osmotic half, or claiming the data separate osmotic from ionic damage when no iso-osmotic control was run.",
"trap_zh":"只講滲透壓這一半，或說數據能分開滲透與離子傷害，但其實沒有做等滲透壓對照。",
"basis":"the stress the whole screen is built on",
"dom":"plant",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q319"
},
{
"q_en":"Chlorophyll is your main number. When chlorophyll falls, what has actually happened in the leaf?",
"q_zh":"葉綠素是你們最主要的數字。葉綠素下降的時候，葉子裡實際上發生了什麼事？",
"type":"fact",
"tier":"A",
"pages":[
"plant#Score",
"plant#Heat stress",
"plant#Chlorophyll content",
"measurement"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"pigment is degraded",
"late integrative symptom",
"0.02 g flatters per gram"
],
"kw_zh":[
"色素被分解",
"晚期的綜合症狀",
"0.02 克會抬高每克值"
],
"a_en":"It means pigment has been degraded. It does not mean we measured photosynthesis. Salt and heat break chlorophyll down, which is the chlorosis and bleaching we photograph, and we read it as chlorophyll a plus b in eighty per cent acetone at 645 and 663 nanometres using the Arnon equations. So it is a late, integrative symptom: it says the leaf was damaged, not which mechanism did it. And it has to be read with the fresh weight beside it. In our heat run the stressed seedlings weighed about 0.02 grams, roughly ninety-five per cent less than the controls, which pushed per-gram chlorophyll above the unstressed plants.",
"a_zh":"代表色素被分解掉了，不代表我們量到了光合作用。鹽害和熱害會把葉綠素分解，那就是我們拍照記錄的黃化和白化，而我們是用 80% 丙酮在 645 和 663 奈米下、以 Arnon 公式讀葉綠素 a 加 b。所以它是一個晚期的、綜合性的症狀：它說葉子受傷了，但不說是哪個機制造成的。而且它必須跟鮮重一起看。我們的熱逆境實驗裡，受逆境的幼苗只有大約 0.02 公克，比對照輕了大約九成五，結果每克葉綠素反而比沒受逆境的植物還高。",
"trap_en":"Equating a chlorophyll number with photosynthetic capacity, or quoting a per-gram value without saying the denominator collapsed.",
"trap_zh":"把葉綠素數值等同於光合能力，或引用每克的數值卻不說分母掉得很慘。",
"basis":"the readout most of the plant claims rest on",
"dom":"plant",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q320"
},
{
"q_en":"Your hydroponic box is supposed to control things a soil pot cannot. Name them, and then tell me what your box failed to control.",
"q_zh":"水耕盒應該能控制土盆控制不了的東西。請說出是哪些，然後告訴我你們的盒子沒控制住什麼。",
"type":"design",
"tier":"A",
"pages":[
"plant#Why hydroponics",
"plant#ACC deaminase against 100 mM NaCl",
"plant#WB800 culture"
],
"seat":"plant",
"backup":"hw",
"kw_en":[
"pH, EC, oxygen, dose",
"culture volume not standardised",
"dilute WB800 sixteen-fold"
],
"kw_zh":[
"pH、EC、溶氧、劑量",
"菌液體積沒有統一",
"WB800 稀釋十六倍"
],
"a_en":"A box controls the root environment. We set pH, electrical conductivity, temperature and dissolved oxygen, the nutrient solution reaches every root the same way, and there is no soil matrix to bind or move the salt and no native microbial community. Then the honest half. In the ACC deaminase salinity run Dr. Peng pointed out that we had not standardised the volume of bacterial culture per group, so a stronger enzyme dilution also meant more culture, and we could not separate the enzyme from the medium. We had already shown WB800 culture alone stresses plants, which is why we now dilute it at least sixteen-fold.",
"a_zh":"水耕盒控制的是根部環境。pH、導電度、溫度、溶氧都由我們設定，營養液以同樣方式到每一條根，而且沒有土壤基質去吸附或搬動鹽，也沒有原生微生物相。接下來是老實的那一半。在 ACC deaminase 的鹽害實驗裡，彭老師指出我們沒有統一每組加入的菌液體積，所以酵素濃度較高的組同時也加了比較多菌液，我們沒辦法把酵素和培養基的效果分開。而我們本來就已經測出單獨的 WB800 菌液會讓植物產生逆境反應，所以現在至少稀釋十六倍才用。",
"trap_en":"Listing the textbook advantages of hydroponics and leaving out that enzyme dose and culture volume moved together in the ACCD run.",
"trap_zh":"只背出水耕的教科書優點，卻漏掉 ACCD 那一輪裡酵素劑量和菌液體積是一起變動的。",
"basis":"a nominated-area system the judges will probe",
"dom":"plant",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q321"
},
{
"q_en":"Why does a root grow away from salt, and what did looking for that buy you?",
"q_zh":"根為什麼會往遠離鹽的方向長？你們去找這個現象，實際上得到了什麼？",
"type":"fact",
"tier":"A",
"pages":[
"measurement",
"plant#Stress protocols",
"plant#Score"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"auxin shifts in the tip",
"needs a gradient",
"our plate is uniform"
],
"kw_zh":[
"根尖生長素重分配",
"需要濃度梯度",
"我們的平板是均勻的"
],
"a_en":"The root tip redistributes auxin away from the salty side, so the root bends away from the salt and looks for medium without osmotic stress. We expected it and we wrote that down. What it bought us is less than it sounds, because we mixed sodium chloride uniformly through the agar, so there is no gradient inside a plate for a root to bend away from. What we actually measure there is growth inhibition: root length differs between salted and unsalted plates, not within one. To use halotropism as evidence that the salt reached the seedling we would need a salt patch or a split plate, and we never ran that.",
"a_zh":"根尖會把生長素往離鹽比較遠的那一側重新分配，所以根會彎開、去找沒有滲透壓逆境的培養基。我們本來就預期會看到，也寫下來了。但它帶給我們的東西比聽起來少，因為我們是把 NaCl 均勻拌進瓊脂裡，平板內部沒有梯度可以讓根彎離。那裡我們真正量到的是生長抑制：根長的差別出現在有鹽和無鹽的平板之間，不是在同一個平板裡面。如果要用 halotropism 證明鹽確實作用到幼苗，我們需要做鹽區塊或分隔平板，而那個實驗我們沒有做。",
"trap_en":"Offering halotropism as proof the stress reached the plants, when salt was mixed uniformly so no gradient existed.",
"trap_zh":"拿 halotropism 當作逆境確實到達植物的證據，但鹽是均勻混入的、根本沒有梯度。",
"basis":"a classic warm-up with a hidden design limit",
"dom":"plant",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q322"
},
{
"q_en":"Nine seedlings on one plate, and that plate has one position on the rack. Tell me what your n of nine is actually counting.",
"q_zh":"一個平板上九株幼苗，而那個平板在架上只有一個位置。請告訴我你們的 n=9 實際上在數什麼？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"plant#How much protectant",
"plant#Set 9",
"results",
"plant#Transfer"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"plate is the unit",
"not independent replicates",
"no randomising recorded"
],
"kw_zh":[
"平板才是單位",
"不是獨立重複",
"沒有記錄隨機化"
],
"a_en":"It is counting seedlings, not experiments. Nine seedlings share one plate: one pour of medium, one position on the rack, one handling history. So the plate is the experimental unit and the nine are sub-samples of it. We say this ourselves in the dry lab section, that each condition was a single plate and its seedlings were not independent replicates. The Results page is blunter about the ACC deaminase figure: three replicates per bar, and the experiment was not independently repeated. It also means any gradient across the rack travels with the treatment, and nothing in our record says we randomised or rotated positions.",
"a_zh":"它數的是幼苗，不是實驗。九株幼苗共用同一個平板：同一次倒的培養基、架上同一個位置、同一套操作過程。所以平板才是實驗單位，那九株是它底下的子樣本。我們自己在乾實驗室那一節就寫了，每個條件只有一個平板，它上面的幼苗不是獨立重複。Results 頁對 ACC deaminase 那張圖講得更直接：每根柱子三個重複，而且這個實驗沒有獨立重做。這也表示架上任何梯度都會跟著處理一起走，而我們的記錄裡沒有任何地方寫到位置有隨機化或輪轉過。",
"trap_en":"Calling n = 9 nine biological replicates, instead of conceding the plate is the unit and carries its rack position with it.",
"trap_zh":"把 n=9 說成九個生物重複，而不承認平板才是單位、而且位置效應跟著它一起走。",
"basis":"pseudo-replication is the first thing a statistician checks",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q323"
},
{
"q_en":"Which test produced the asterisks on your figures, and what exactly do those asterisks compare?",
"q_zh":"你們圖上的星號是哪一種檢定算出來的？而那些星號比較的到底是什麼？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"results",
"plant#Set 9",
"plant#Set 6"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"ANOVA with Dunnett's",
"salt levels, not treatment",
"1.74 against 1.03"
],
"kw_zh":[
"ANOVA 搭 Dunnett",
"比的是鹽濃度不是處理",
"1.74 對 1.03"
],
"a_en":"The test is named: one-way ANOVA with Dunnett's multiple comparisons against the matched untreated salt-stressed control, reported as mean with SEM. The harder question is what the stars compare on the ACC deaminase figure, which carries our headline plant result: pre-treatment at 100 mM NaCl gave about 1.74 against about 1.03 milligrams per gram, roughly seventy per cent more chlorophyll. The stars there mark differences between salt concentrations inside one treatment group, not between treated and untreated plants, so they do not establish that ACC deaminase significantly improved anything. We say that ourselves, and it is the per-gram panel, three replicates a bar.",
"a_zh":"檢定方法是寫明的：one-way ANOVA 搭配 Dunnett 多重比較，對照是同一鹽濃度下未處理的逆境組，呈現方式是平均值加 SEM。比較難的問題是 ACC deaminase 那張圖上的星號在比什麼，而那張圖正是我們的代表性植物結果：100 mM NaCl 下預先處理約 1.74，對照約 1.03 毫克每公克，葉綠素多了大約七成。那裡的星號標的是同一個處理組內不同鹽濃度之間的差異，不是處理組和未處理組之間的差異，所以並不能證明 ACC deaminase 有顯著改善。我們自己也是這樣寫的，而且那是每克的那張圖，每根柱子三個重複。",
"trap_en":"Pointing at the four stars as proof the protectant worked, when they compare salt levels within one treatment arm, and forgetting 1.74 is a per-gram value.",
"trap_zh":"拿四顆星當作保護劑有效的證據，但那些星號比較的是同一處理組內的鹽濃度；也忘了 1.74 是每克的數值。",
"basis":"the figure's significance does not test the claim",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q324"
},
{
"q_en":"Suppose chlorophyll per gram goes up forty per cent and fresh weight does not move. What has changed in that plant, and what has not?",
"q_zh":"假設每克葉綠素上升了四成，而鮮重完全沒動。那株植物身上什麼改變了，什麼沒有改變？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"plant#Chlorophyll content",
"plant#Execution of salinity trials",
"plant#Scoring a plant"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"greener, not bigger",
"pigment not biomass",
"r = minus 0.85"
],
"kw_zh":[
"更綠，但沒變大",
"是色素不是生物量",
"r 等於負 0.85"
],
"a_en":"It means the tissue is greener, not that the plant is bigger. Chlorophyll per gram is a ratio, so with the denominator still the numerator moved: the leaf kept or rebuilt pigment. That is a senescence result and not a yield result, because what a farmer sells is biomass. It also says check the denominator every time. Our soil run is the clean example. Co-treatment led on chlorophyll per gram, but its tubes held twenty-two to one hundred and ninety-nine milligrams of tissue, per-gram chlorophyll tracked tissue weight at r of minus 0.85, and read as total chlorophyll co-treatment came last.",
"a_zh":"代表組織變綠了，不代表植物變大了。每克葉綠素是一個比值，分母沒動就表示分子動了，也就是葉子把色素保留下來或重新做出來。這是關於老化的結果，不是產量的結果，因為農民賣的是生物量。它也提醒我們每次都要看分母。我們的土壤實驗就是最乾淨的例子：同時處理組在每克葉綠素上領先，但它的管子裡只有二十二到一百九十九毫克的組織，每克葉綠素和組織重量的相關是負 0.85，而改看總葉綠素時，同時處理組反而是最後一名。",
"trap_en":"Converting a per-gram percentage into a claim about growth, rescue or yield.",
"trap_zh":"把每克的百分比直接講成生長、拯救或產量的結論。",
"basis":"the normalisation trap in the team's own figures",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q325"
},
{
"q_en":"Dose, concentration and total amount applied are three different things across your sets. Walk me through them.",
"q_zh":"在你們各個 set 裡，劑量、濃度、總施用量是三件不同的事。請帶我走一遍。",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"plant#Application",
"plant#How much protectant",
"model",
"plant#Heat stress"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"in agar versus sprayed",
"1.67 mL on 78.5 cm2",
"dose that worked"
],
"kw_zh":[
"拌進瓊脂 vs 噴灑",
"78.5 平方公分噴 1.67 毫升",
"是有效的劑量"
],
"a_en":"Three different things, and they are not interchangeable. Trehalose was mixed into fifty millilitres of agar before autoclaving, so that is a concentration the seedling sits in for the whole run. The CH Bio peptide was one millilitre of a one-in-five-hundred dilution left on the plate surface, a total amount delivered once. A spray is a rate: three sprays put 1.67 millilitres onto a ten-centimetre plate of 78.5 square centimetres, which scales to 2,126 litres per hectare, while on vertical plates three sprays deliver 0.536 millilitres. The model turns that spray into 37.6 kilounits per hectare. It is the dose that worked, not the smallest that works.",
"a_zh":"這是三件不同的事，而且不能互換。trehalose 是在滅菌前拌進五十毫升的瓊脂裡，所以那是一個幼苗整場泡在裡面的濃度。CH Bio 胜肽是一毫升、1:500 稀釋的液體留在平板表面，那是一次給完的總量。噴灑則是一個單位面積的量：三噴在十公分、78.5 平方公分的平板上是 1.67 毫升，換算成每公頃 2,126 公升；而在直立平板上三噴是 0.536 毫升。模型把這個噴灑量換成每公頃 37.6 千單位。那是有效的劑量，不是最低有效劑量。",
"trap_en":"Quoting one spray volume as the dose without saying which plate format it is a rate for, or calling it the minimum effective dose.",
"trap_zh":"引用某一個噴灑體積當劑量卻不說是哪種平板的單位面積量，或把它說成最低有效劑量。",
"basis":"the bioreactor is sized from this number",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q326"
},
{
"q_en":"Your three timing arms are one day apart. What can one day actually change in an Arabidopsis seedling, and what is that arm really asking?",
"q_zh":"你們三個時機組只差一天。一天在阿拉伯芥幼苗身上實際能改變什麼？這一組真正在問的是什麼？",
"type":"design",
"tier":"A",
"deep":1,
"pages":[
"plant#Treatment timing",
"plant#Heat schedule",
"plant#When it must arrive",
"plant#Execution of salinity trials"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"tests forecast, not growth",
"ethylene rises twice",
"agar and soil disagree"
],
"kw_zh":[
"測預報，不是測生長",
"ethylene 上升兩次",
"瓊脂和土壤結果相反"
],
"a_en":"Twenty-four hours changes gene expression and almost nothing else, so the timing arm is not asking whether the plant had time to grow. It asks whether the protectant has to arrive before the stress surge, and that decides whether the reactor, the forecast and the field sensors are worth building. Our heat data give it a mechanism: ethylene rises both when heat is applied and again when it is removed in recovery, so a one-day offset lands on a different hormonal moment. The answer is not settled. On agar at 75 mM pre-treatment gave the highest fresh weight, 0.164 against 0.144 grams, while in soil at 300 mM only post-treatment beat the control.",
"a_zh":"二十四小時能改變基因表現，其他幾乎什麼都改變不了，所以這一組不是在問植物有沒有時間長大。它問的是保護劑是不是必須在逆境高峰之前就到，而這決定了反應器、預報和田間感測器值不值得做。我們的熱逆境數據還給了它一個機制：ethylene 在加熱時和熱移除、進入恢復期時各上升一次，所以差一天就落在不同的荷爾蒙時刻。但答案還沒定。瓊脂上 75 mM 時預先處理鮮重最高，0.164 對 0.144 公克；而土壤 300 mM 時只有事後處理贏過對照。",
"trap_en":"Reporting a best timing as settled, when agar favours pre-treatment and the soil run favours post-treatment.",
"trap_zh":"把最佳施用時機講成已經確定，但瓊脂偏向預先處理、土壤那一輪偏向事後處理。",
"basis":"timing is the result the AIoT forecast is justified by",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q327"
},
{
"q_en":"Rescue and priming are not the same claim. Which one are you testing, and which one could your assay even detect?",
"q_zh":"拯救和預先誘導（priming）是兩種不同的主張。你們測的是哪一種？而你們的實驗設計又真的能測出哪一種？",
"type":"compare",
"tier":"A",
"deep":1,
"pages":[
"human-practices",
"plant#Heat schedule",
"plant#Stress protocols",
"plant#Chlorophyll content"
],
"seat":"plant",
"backup":"ihp",
"kw_en":[
"pre-treatment is priming",
"needs a second challenge",
"one endpoint only"
],
"kw_zh":[
"預先處理就是 priming 組",
"需要第二次逆境",
"只有一個終點讀值"
],
"a_en":"Rescue means the molecule does the work. Priming means the plant does it, faster, because it was warned. Dr. Verslues pushed us that way, to work with the plant's natural response rather than simply supply more proline, and toward early detection rather than recovery after damage. We use the word ourselves: pre-treatment is meant to prime the plant's defences before cellular damage, and our heat protocol is thermo-priming for acquired thermotolerance. The problem is that our assay cannot separate them. A primed plant is defined by how it answers a later stress, so you need a second challenge or a time course. We read one endpoint after one stress.",
"a_zh":"拯救是分子自己把工作做完，priming 是植物自己做、只是因為事先被提醒過所以反應更快。Dr. Verslues 把我們往這個方向推，要我們配合植物自己的反應，而不是單純補更多 proline，也要我們做早期偵測而不是受害後的恢復。我們自己也在用這個詞：預先處理的目的就是在細胞受損之前先把防禦 prime 起來，而我們的熱逆境流程本身就是誘導耐熱性的 thermo-priming。問題是我們的設計分不開這兩者。一株被 prime 過的植物，定義在於它怎麼回應下一次逆境，所以需要第二次逆境或一條時間曲線，而我們只在一次逆境後讀一個終點。",
"trap_en":"Claiming a priming mechanism from a single-stress, single-endpoint experiment.",
"trap_zh":"用單一逆境、單一終點的實驗去主張 priming 機制。",
"basis":"an advisor redirected the project from rescue to prevention",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q328"
},
{
"q_en":"ACC and the step that makes ethylene are inside the plant cell, and a cell wall will not pass a forty-kilodalton enzyme. So how is a sprayed ACC deaminase supposed to lower ethylene at all?",
"q_zh":"ACC 和製造 ethylene 的那一步都在植物細胞裡，而細胞壁不會讓一個四十幾 kDa 的酵素通過。那噴上去的 ACC deaminase 到底要怎麼降低 ethylene？",
"type":"design",
"tier":"A",
"deep":1,
"pages":[
"plant#Implications for ACC deaminase testing",
"human-practices",
"plant#Heat stress",
"plant#Application"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"sink outside the root",
"exudation down a gradient",
"our wording says uptake"
],
"kw_zh":[
"根外的消耗端",
"順梯度被排出",
"我們的寫法講的是吸收"
],
"a_en":"It never has to get inside. The enzyme works as a sink outside the plant: it cleaves ACC in the root zone into ammonia and alpha-ketobutyrate, which lowers external ACC, and the gradient pulls more ACC out of the root as exudate, so less is left inside to become ethylene. Prof. Huang told us as much, that a protectant like ACC deaminase only needs to reach the root zone rather than enter the root directly. I should flag our own wording, though. Our heat section says we sprayed because the enzyme is large and poorly absorbed through roots, and that frames it as uptake when the mechanism is really an external sink.",
"a_zh":"它根本不需要進去。這個酵素是在植物外面當一個消耗端：它在根圈把 ACC 切成氨和 alpha-ketobutyrate，使外部的 ACC 濃度下降，這個梯度就把更多 ACC 以根分泌物的形式拉出來，於是細胞內剩下能變成 ethylene 的就少了。黃老師也是這樣跟我們說的，像 ACC deaminase 這樣的保護劑只需要到根圈，不需要直接進到根裡面。不過我也要指出我們自己的寫法：熱逆境那一節寫我們改用噴灑是因為酵素比較大、不容易被根吸收，這個說法把它講成吸收問題，而機制其實是一個外部的消耗端。",
"trap_en":"Saying the enzyme enters the plant or acts on ethylene directly, instead of explaining the external ACC sink and the exudation gradient.",
"trap_zh":"說酵素進到植物裡、或直接作用在 ethylene 上，而不是解釋根外的 ACC 消耗端與外排梯度。",
"basis":"the mechanism a plant postdoc will test first",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q329"
},
{
"q_en":"Distinguish the apoplastic ACC pool from the intracellular one. Which pool does your enzyme see, and what follows for how much of it you need to make?",
"q_zh":"請區分細胞外質體（apoplast）的 ACC 池和細胞內的 ACC 池。你們的酵素看得到哪一個？由此推論你們到底需要生產多少酵素？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"plant#Implications for ACC deaminase testing",
"protein-design#methodology",
"plant#How much protectant",
"model"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"outside pool only",
"cuticle not crossed",
"exudation sets the ceiling"
],
"kw_zh":[
"只有外部的池",
"沒有穿過角質層",
"外排速率決定上限"
],
"a_en":"The pool our enzyme can see is the external one, in the medium or the root zone. The intracellular pool, where ACC is made and then oxidised, sits behind a membrane the enzyme does not cross, and a leaf apoplast sits behind a cuticle; our own protein design page is careful that a docked model cannot say whether a peptide is taken up or even survives the apoplast. Two things follow. The plant's exudation rate sets a ceiling, so past some point more enzyme buys nothing and the useful lever is delivery to the root zone, not a bigger reactor. And our 37.6 kilounits per hectare is a scaled spray rate, not a measured requirement.",
"a_zh":"我們的酵素看得到的是外部那個池，在培養基或根圈裡。細胞內那個池，也就是 ACC 被合成然後被氧化的地方，隔著一層酵素過不去的膜；而葉片的 apoplast 隔著角質層，我們自己的蛋白設計頁也很小心地說，對接模型沒辦法回答胜肽有沒有被吸收、甚至能不能在 apoplast 裡存活。由此推出兩件事。植物的外排速率就是天花板，超過那個點再多酵素也沒有用，真正有用的槓桿是把它送到根圈，而不是把反應器做大。另外，我們那個每公頃 37.6 千單位是由噴灑量換算出來的，不是量到的需求量。",
"trap_en":"Assuming more enzyme always means more effect, instead of recognising that export of ACC by the plant is rate-limiting.",
"trap_zh":"以為酵素越多效果就越好，而沒看出限速的是植物把 ACC 排出去的速率。",
"basis":"the dose target the bioreactor is sized against",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q330"
},
{
"q_en":"ACC has signalling roles of its own, independent of ethylene. What does that do to your mechanism?",
"q_zh":"ACC 本身也有獨立於 ethylene 的訊息傳遞角色。這對你們的機制有什麼影響？",
"type":"boundary",
"tier":"B",
"deep":1,
"pages":[
"plant#Implications for ACC deaminase testing",
"plant#Score",
"results"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"ACC is also a signal",
"we only read growth",
"block perception to test"
],
"kw_zh":[
"ACC 本身也是訊息",
"我們只讀生長指標",
"阻斷感知來檢驗"
],
"a_en":"It means draining ACC is not a neutral act. Our story is less ACC, less ethylene, longer roots, and that treats ACC purely as a precursor. Our own soil section is careful to say ethylene has important roles in normal development and that it is the excess which hurts. If ACC also signals in its own right, independently of ethylene perception, an enzyme that removes it could take away a wanted signal along with an unwanted one, and we would not see the difference, because our readouts are root length, fresh weight and chlorophyll. The test is to apply the enzyme to a line that cannot perceive ethylene. We have not run it.",
"a_zh":"這表示把 ACC 抽掉並不是中性的動作。我們的說法是 ACC 少、ethylene 少、根就長，這等於把 ACC 純粹當成前驅物。我們自己的土壤那一節也很小心地寫，ethylene 在正常發育和逆境反應裡都有重要角色，有害的是過量。如果 ACC 本身也是訊息、而且不經過 ethylene 的感知，那麼把它移除的酵素可能同時拿掉需要的和不需要的訊息，而我們看不出差別，因為我們的讀值只有根長、鮮重和葉綠素。檢驗方法是把酵素用在無法感知 ethylene 的品系上，而這個實驗我們沒有做。",
"trap_en":"Treating ACC as nothing but an ethylene precursor, and so missing that the growth readouts cannot attribute the effect.",
"trap_zh":"把 ACC 只當成 ethylene 的前驅物，因此沒意識到生長指標無法歸因效果來源。",
"basis":"attribution of the effect to ethylene is not established",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q331"
},
{
"q_en":"Under salt the plant has to manage its stomata and its sodium to potassium ratio. Which of those could your protectant touch, and which did you measure?",
"q_zh":"鹽逆境下植物必須處理氣孔，也必須處理鈉鉀比。你們的保護劑可能影響哪一個？你們又量了哪一個？",
"type":"boundary",
"tier":"A",
"deep":1,
"pages":[
"plant#Score",
"plant#Why hydroponics",
"measurement"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"we measured no ions",
"enzyme moves no sodium",
"senescence, not transport"
],
"kw_zh":[
"離子完全沒量",
"酵素搬不動鈉",
"是老化不是運輸"
],
"a_en":"Plausibly the stomatal and senescence side, certainly not the ionic side. Lowering stress ethylene could slow leaf ageing and change how fast the plant shuts down, and chlorophyll retention is consistent with that. Sodium exclusion and holding potassium in the cell are transporter jobs, and an enzyme sitting in the root zone moves no ions. So the osmotic and signalling half of salt stress is in reach and the ionic half is not, which predicts that any effect of ours should look larger early and fade as sodium accumulates. The honest part is that we measured none of it. Our readouts are root length, fresh weight, chlorophyll and scored phenotype.",
"a_zh":"有可能影響氣孔和老化這一側，離子那一側幾乎不可能。把逆境 ethylene 降下來，可以讓葉片老化變慢、讓植物關機的速度改變，而葉綠素被保留下來跟這個是一致的。但排鈉、把鉀留在細胞裡是運輸蛋白的工作，一個待在根圈的酵素搬不動任何離子。所以鹽逆境裡滲透和訊息那一半我們有機會碰到，離子那一半碰不到；這也預測我們若真有效果，應該早期比較明顯，隨著鈉累積而淡掉。老實的部分是，這些我們一個都沒量，我們的讀值只有根長、鮮重、葉綠素和表徵記錄。",
"trap_en":"Claiming the protectant improves salt tolerance generally, when nothing in the data addresses ion homeostasis.",
"trap_zh":"籠統地說保護劑提升耐鹽性，但數據裡完全沒有任何離子平衡的證據。",
"basis":"half of salt stress is outside the proposed mechanism",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q332"
},
{
"q_en":"A thermo-priming treatment rewrites a transcriptome within hours. Your readouts are a weight and a pigment on day seventeen. What sits in that gap, and what does the far end look like for a farmer?",
"q_zh":"thermo-priming 在幾個小時內就把轉錄體改寫了，而你們的讀值是第十七天的重量和色素。中間那一段是什麼？而對農民來說，最後那一端又長什麼樣子？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"plant#Heat stress",
"human-practices",
"plant#Chlorophyll content",
"plant#Stress protocols"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"hours versus day seventeen",
"no ROS data",
"rosette weight is not yield"
],
"kw_zh":[
"幾小時 vs 第十七天",
"沒有 ROS 數據",
"蓮座重不是產量"
],
"a_en":"There is a time-scale gap in the middle of that run. Five days at thirty-seven degrees changes gene expression within hours, and we read fresh weight, root length and pigment on day seventeen after five days of recovery, with nothing in between. Prof. Cheng told us what belonged in the gap: visual ROS staining, as an early readout of oxidative damage. There is no ROS data anywhere in our work. So when pre-treatment retained the most chlorophyll under heat, about thirteen per cent of its non-stressed value, we cannot say the plant was less oxidatively stressed rather than greener at the end. And none of this is yield.",
"a_zh":"那一輪實驗中間有一段時間尺度的空白。三十七度五天在幾小時內就改變基因表現，而我們是在五天恢復期之後、第十七天才讀鮮重、根長和色素，中間什麼都沒有。鄭老師告訴過我們那段空白該放什麼：目視的 ROS 染色，作為氧化傷害的早期讀值。而我們整個專案裡沒有任何 ROS 數據。所以當熱逆境下預先處理組保留了最多葉綠素、大約是它無逆境值的百分之十三時，我們沒辦法說那株植物真的氧化壓力比較低，而不只是最後比較綠。而這些都還不是產量。",
"trap_en":"Offering end-point chlorophyll as evidence of a priming mechanism, with no early biochemical readout between the two.",
"trap_zh":"拿終點的葉綠素當 priming 機制的證據，中間完全沒有早期的生化讀值。",
"basis":"no measurement sits between the treatment and the phenotype",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q333"
},
{
"q_en":"BoPEP4 works through PEPR1-type receptor kinases, which switch on immunity. Would you expect that to cost the plant growth?",
"q_zh":"BoPEP4 是透過 PEPR1 這類受體激酶作用的，而那會啟動免疫反應。你們會預期這讓植物在生長上付出代價嗎？",
"type":"boundary",
"tier":"B",
"deep":1,
"pages":[
"plant#BoPEP4 against 100 mM NaCl",
"protein-design",
"plant#BoPEP4 against 37 C heat stress",
"description"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"immunity draws on growth",
"anthocyanin with no stress",
"only 1/40 rescued"
],
"kw_zh":[
"免疫和生長搶資源",
"無逆境下出現花青素",
"只有 1/40 有效"
],
"a_en":"Yes, and our own hydroponic data point that way. BoPEP4 is an elicitor peptide from broccoli, read by the PEPR1 and PEPR2 receptor kinases with BAK1 as co-receptor, and the output is pattern-triggered immunity, which draws on the same resources as growth. With no stress applied, BoPEP4 from one in forty to one in a hundred gave slight anthocyanin accumulation while the culture and medium controls gave none, which we read as possible growth inhibition in an unstressed plant. Under 100 mM salt, one in forty was the only group where every plant stayed green, with the highest fresh weight and chlorophyll per plant. Narrow window, and one run.",
"a_zh":"會，而我們自己的水耕數據也指向這個方向。BoPEP4 是來自青花菜的誘導胜肽，由 PEPR1 和 PEPR2 受體激酶讀取、以 BAK1 當共受體，而輸出是 pattern-triggered immunity，它和生長搶同樣的資源。在完全沒有加逆境的組裡，BoPEP4 從 1/40 到 1/100 都出現了輕微的花青素累積，而菌液對照和培養基對照都沒有，我們把這解讀為在無逆境植物上可能有生長抑制。而在 100 mM 鹽逆境下，1/40 是唯一所有植株都保持綠色的組，每株鮮重和葉綠素也最高。有效區間很窄，而且只做過一輪。",
"trap_en":"Presenting BoPEP4 as just a third protectant like the other two, and skipping the anthocyanin seen without any stress.",
"trap_zh":"把 BoPEP4 講成和另外兩個一樣的第三種保護劑，又跳過無逆境時觀察到的花青素。",
"basis":"a defence elicitor is not a protectant in the same sense",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q334"
},
{
"q_en":"Exogenous spraying of plant protectants is already a commercial business. What exists on the market today, and what in your approach is actually new?",
"q_zh":"外源噴施植物保護劑其實已經是一個商業領域了。市面上現在已經有什麼？你們的做法裡真正新的是什麼？",
"type":"history",
"tier":"A",
"deep":1,
"pages":[
"plant#Industry",
"human-practices",
"plant#Set 7",
"model"
],
"seat":"plant",
"backup":"biz",
"kw_en":[
"biostimulants already sold",
"our comparator is one",
"made on the farm"
],
"kw_zh":[
"生物刺激素已在販售",
"我們的對照就是其中之一",
"在農場現地生產"
],
"a_en":"It exists and we used it. Our comparator was 富肽2號, a finished CH Biotech biostimulant applied at the supplier's one-in-five-hundred field dilution, which we did not change because a farmer would not. They never disclosed its active components, so we treat it as a product-level comparison, and they walked us through delivery by root irrigation, foliar spray and drone, regulatory requirements, and cost per unit area. So neither the molecule nor the spraying is new. What is new is making it on the farm in a contained reactor, which removes shelf life and transport, and releasing it on a forecast. Our model prices that at eighty-one litres of vessel per hectare.",
"a_zh":"已經有了，而且我們還用了它。我們的對照是正瀚生技的成品生物刺激素「富肽2號」，依廠商建議的 1:500 田間稀釋使用，我們沒有改，因為農民也不會改。他們沒有揭露活性成分，所以我們把它當成產品層級的對照；他們也跟我們講了灌根、葉面噴施和無人機噴施這些施用方式，還有法規要求和每單位面積的成本。所以分子和噴施這件事都不新。新的是在農場上用密閉反應器現地生產，省掉保存期限和運輸，並依預報釋放。我們的模型把它估成每公頃八十一公升的槽體。",
"trap_en":"Claiming exogenous protectant spraying is novel, when the team's own comparator is a commercial product used at the supplier's dilution.",
"trap_zh":"說外源噴施保護劑是新的，但自己的對照就是照廠商稀釋倍數使用的商品。",
"basis":"positioning against the product the team benchmarked against",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q335"
},
{
"q_en":"In soil at 300 mM, two of your three timings came out below the untreated control. Walk me through that.",
"q_zh":"土壤 300 mM 那一輪，你們三個施用時機裡有兩個低於未處理對照。請跟我說清楚這件事。",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"plant#Execution of salinity trials",
"plant#Salt schedule",
"plant#Set 9",
"results"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"1.00 control, 0.67, 0.30",
"only post beat it",
"opposite of agar"
],
"kw_zh":[
"對照 1.00、0.67、0.30",
"只有事後處理贏",
"和瓊脂相反"
],
"a_en":"That is right, and I will give you the numbers. Without fresh-weight normalisation the extracts read about 1.00 milligrams per litre for the untreated control, 0.67 for pre-treatment, 0.30 for co-treatment and 1.13 for post-treatment. So only post-treatment beat the control, by about thirteen per cent, and the other two came out worse. That is the opposite ranking to our agar set 9, where pre-treatment was the best arm. One explanation we offer is the stress level: post-treatment went on a day after the first 300 mM dose, so it is a delayed co-treatment given once stress had developed. It is one preliminary pot series and it needs repeating.",
"a_zh":"是的，而我直接把數字給你。在沒有以鮮重正規化的情況下，萃取液大約是未處理對照 1.00 毫克每公升、預先處理 0.67、同時處理 0.30、事後處理 1.13。所以只有事後處理贏過對照，大約多百分之十三，另外兩組反而更差。這和我們瓊脂 set 9 的排序相反，那裡預先處理是最好的一組。我們提出的一個解釋是逆境強度：事後處理是在第一次 300 mM 之後一天才施用，所以它其實是逆境已經發展出來後才給的延遲同時處理。這只是一輪初步的盆栽實驗，需要重做。",
"trap_en":"Quoting the plus thirteen per cent for post-treatment without saying pre- and co-treatment fell below the untreated control.",
"trap_zh":"只引用事後處理多百分之十三，卻不說預先和同時處理其實低於未處理對照。",
"basis":"soil is the system closest to a field and it reverses the agar ranking",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q336"
},
{
"q_en":"Nothing in your project measures ethylene. What is the longest chain you can actually defend, and where exactly does it break?",
"q_zh":"你們整個專案都沒有量到 ethylene。你真正能站得住的推論鏈最長到哪裡？又是在哪一環斷掉的？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"results",
"model",
"measurement#DNPH assay",
"plant#Set 9"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"no ethylene ever measured",
"7.25 below quantitation",
"22-fold apart"
],
"kw_zh":[
"從未量過 ethylene",
"7.25 低於定量下限",
"相差二十二倍"
],
"a_en":"We have never measured ethylene, or ACC, in a plant, and there is no gas chromatography anywhere in our work. What I can defend runs like this. The literature says stress raises ethylene and that ethylene shortens roots and impairs photosynthesis, and that ACC deaminase cleaves ACC. Our own DNPH assay reads the alpha-ketobutyrate product, and gave 7.25 milliunits per millilitre from the permeate on the seventh of October, a single sample below the quantitation limit. Reading the same sample over twenty-eight hours instead gives 0.33, twenty-two-fold apart. So we cannot yet say how much active enzyme was in what we sprayed, let alone that plant ethylene fell.",
"a_zh":"我們從來沒有在植物身上量過 ethylene，也沒有量過 ACC，而我們整個專案裡也沒有任何氣相層析。我能站得住的推論是這樣：文獻說逆境會讓 ethylene 上升，而 ethylene 會讓根變短、損害光合作用，也說 ACC deaminase 會切 ACC。我們自己的 DNPH 分析讀的是產物 alpha-ketobutyrate，十月七日從透過液讀到 7.25 毫單位每毫升，只有一個樣品，而且低於定量下限。同一個樣品改以二十八小時反應讀，得到 0.33，兩者差了二十二倍。所以我們還沒辦法說噴出去的東西裡有多少活性酵素，更不用說植物體內的 ethylene 下降了。",
"trap_en":"Offering the DNPH number as evidence that plant ethylene fell, when it measures a reaction product in a tube and sits below quantitation.",
"trap_zh":"拿 DNPH 的數字當作植物體內 ethylene 下降的證據，但它量的是試管裡的反應產物，而且低於定量下限。",
"basis":"the project's central mechanism has no in-plant measurement",
"dom":"plant",
"star":0,
"nodes":[],
"figs":[],
"id":"q337"
},
{
"q_en":"Nine seedlings on one plate is n = 1, not n = 9. What happens to your p below 0.0001?",
"q_zh":"一盤九棵苗，那是 n = 1 不是 n = 9。你們那個 p < 0.0001 還剩下什麼？",
"type":"gap",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"plant#Results",
"results#Agar-based salinity stress",
"plant#Independent replicates"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"seedlings in a plate are pseudoreplicates",
"the plate is the unit",
"the trend survives, the p value does not"
],
"kw_zh":[
"同盤的苗是偽重複",
"盤才是實驗單位",
"趨勢還在，p 值沒了"
],
"a_en":"You are right, and it is the single biggest weakness in our plant work: seedlings inside one plate share their medium, their salt and their position in the chamber, so the plate is the experimental unit and the p value computed across nine seedlings is an overstatement. What survives is the trend rather than the statistic — the salt ladder is monotone across four levels, 74.95, 34.77, 11.00 and 1.36 millimetres of root length at 0, 75, 100 and 150 millimolar, and a dose response that clean does not depend on the test. What does not survive is any single-plate comparison between a treated and an untreated condition, which is why the Results page says no protectant of ours has a validated rescue while the Plants page reports what we saw. The fix is on our future-work list and it is specific: at least three independent plates per condition, so an improvement is a property of the condition and not of one plate.",
"a_zh":"你說得對，而這是我們植物實驗最大的單一弱點：同一盤裡的苗共用培養基、共用鹽、也共用在生長箱裡的位置，所以盤才是實驗單位，用九棵苗算出來的 p 值是誇大的。還站得住的是趨勢而不是統計量——鹽度梯度在四個濃度上是單調的，0、75、100、150 mM 對應的主根長是 74.95、34.77、11.00、1.36 毫米，這麼乾淨的劑量反應不依賴任何檢定。站不住的是任何「單一盤的處理組對未處理組」的比較，這也是為什麼 Results 頁寫「我們沒有任何保護蛋白有經驗證的 rescue」，而 Plants 頁只報我們看到的現象。補救方式在我們的 future work 上，而且很具體：每個條件至少三個獨立的盤，讓改善成為條件的性質，而不是某一盤的性質。",
"trap_en":"Defending the n. Concede the pseudoreplication first, then point at the monotone ladder as the result that does not need the test.",
"trap_zh":"替 n 辯護。先承認偽重複，再指向那條單調的鹽度梯度——那是不需要檢定的結果。",
"nodes":[
"C_PSR",
"P_LADDER"
],
"figs":[
"p03",
"p02"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"plant",
"id":"q338"
},
{
"q_en":"Your clearest rescues are trehalose at 8.7-fold and a commercial peptide. Neither is yours. Why should I believe your proteins do anything?",
"q_zh":"你們最清楚的 rescue 是 8.7 倍的海藻糖和一個商業胜肽，兩個都不是你們做的。那我憑什麼相信你們的蛋白有用？",
"type":"gap",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"plant#Pretests: trehalose",
"plant#Testing the efficacy of commercial CH Bio peptide",
"results#Protectant function"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"they are reference compounds",
"they prove the assay can see a rescue",
"ours are positives without replicates"
],
"kw_zh":[
"那是參考化合物",
"證明這套 assay 看得到 rescue",
"我們的是沒有重複的正向結果"
],
"a_en":"You should not believe it yet, and we say so on the Results page. Trehalose and the CH Biotech peptide are reference compounds, and their job in our work is to show the assay can detect a rescue at all — trehalose at 5 millimolar raised chlorophyll about 8.7-fold at 100 millimolar sodium chloride with a clean dose series behind it. Our own positives are real but thin: ACC deaminase pre-treatment held about seventy percent more chlorophyll at 100 millimolar, ACC deaminase post-treatment was fourteen percent above the heat control, and BoPep4 at one in forty kept hydroponic seedlings green under salt — each one plate or one pot per condition, with the best timing differing between trials. So the claim is that we built an assay that can see a rescue and have not yet run our own proteins through it with the replication a claim needs.",
"a_zh":"你現在還不該相信，而我們在 Results 頁上就是這樣寫的。海藻糖和正瀚的胜肽是參考化合物，它們在我們的工作裡的任務是證明「這套 assay 偵測得到 rescue」——5 mM 海藻糖在 100 mM NaCl 下讓葉綠素提高大約 8.7 倍，而且背後有一條乾淨的劑量系列。我們自己的正向結果是真的，但很薄：ACC 去胺酶事前處理在 100 mM 下多保住大約七成葉綠素、ACC 去胺酶事後處理比熱逆境對照高 14%、BoPep4 1/40 讓水耕苗在鹽逆境下維持綠色——每一個都是一個條件一盤或一盆，而且最佳時機在不同 trial 之間還不一致。所以我們的主張是：我們做出了一套看得到 rescue 的 assay，但還沒有用一個主張所需要的重複數把自己的蛋白跑過一遍。",
"trap_en":"Inflating our own positives to match the reference compounds. The strength of this answer is the order: assay first, our results second, with their n stated.",
"trap_zh":"把自己的正向結果吹到跟參考化合物一樣強。這題的力量在順序：先講 assay，再講我們的結果，並且把 n 講出來。",
"nodes":[
"P_TREH",
"C_PSR"
],
"figs":[
"p01",
"p02"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"plant",
"id":"q339"
},
{
"q_en":"Your hydroponic data show the host culture alone stresses the plants, and you voided the ACC deaminase salinity run because culture volume was not standardised. How do you know any rescue is the protein and not the medium?",
"q_zh":"你們的水耕數據顯示光是宿主菌培養液就會讓植物有壓力，而且你們因為各組培養液體積沒有統一而把 ACC 去胺酶的鹽逆境實驗作廢。那你們怎麼知道 rescue 是蛋白而不是培養基？",
"type":"validate",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"plant#WB800 culture (protectant-negative control)",
"plant#Hydroponics",
"results#Hydroponic salinity stress"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"WB800 is the protectant-negative control",
"diluted at least sixteen times",
"volume was not standardised, so one run is void"
],
"kw_zh":[
"WB800 是無保護蛋白對照",
"至少稀釋十六倍",
"體積沒統一，所以那次作廢"
],
"a_en":"The control is built for exactly that: every protectant arm is matched against WB800 culture carrying no protectant construct, at the same dilution, so a difference between those two is the protein and not the broth. That control is also what told us the vehicle itself stresses the plants, which is why everything is diluted at least sixteen-fold and one in forty became the working dose — in the salinity run at 100 millimolar the one in forty BoPep4 group stayed green with the highest fresh weight and chlorophyll while the one in forty WB800 group did not. Where the control was not enough is the run Dr. Peng voided: culture volume differed between arms, so the groups also differed in how much broth they received and a dilution series cannot be read as a dose. Our future work names the three things that fix it — a fixed interval for changing the medium, the same culture volume in every group, and evaporation accounted for instead of topped up.",
"a_zh":"對照組就是為這件事設計的：每一個保護蛋白組都對上「不帶保護蛋白構築」的 WB800 培養液，而且稀釋倍數相同，所以這兩組之間的差異是蛋白、不是培養液。也正是這個對照告訴我們載體本身會讓植物有壓力，所以所有東西至少稀釋十六倍，1/40 成為工作劑量——在 100 mM 的鹽逆境實驗裡，1/40 的 BoPep4 組維持綠色、鮮重和葉綠素都最高，而 1/40 的 WB800 組沒有。對照不夠用的地方就是彭博士判定作廢的那次：各組培養液體積不同，所以組與組之間連「拿到多少培養液」都不一樣，稀釋系列就不能當劑量讀。我們的 future work 寫出了修正它的三件事——固定換液間隔、每組相同的培養液體積，以及把蒸發計入而不是直接補水。",
"trap_en":"Saying the control settles it. It settles the matched comparisons; it does not rescue the run where the volume varied, and that run is void.",
"trap_zh":"說有對照組就解決了。對照組解決的是配對比較；它救不了體積不一致那一次，而那一次是作廢的。",
"nodes":[
"P_HYDRO",
"C_CTRL"
],
"figs":[
"p05",
"p06"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"plant",
"id":"q340"
},
{
"q_en":"Everything you applied to a plant was 0.22 micrometre filtered crude supernatant with no activity number behind the batch. So what was the dose?",
"q_zh":"你們施用到植物上的全部都是 0.22 微米過濾的粗上清，而且每一批背後都沒有活性數字。那劑量到底是多少？",
"type":"boundary",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"plant#Application",
"plant#How much protectant",
"plant#Effective dose"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"filtered crude supernatant, not purified enzyme",
"dose is a dilution and a volume",
"no minimum effective dose exists"
],
"kw_zh":[
"過濾粗上清，不是純化酵素",
"劑量是稀釋倍數加體積",
"沒有最小有效劑量"
],
"a_en":"The dose is a dilution and a volume, not an activity, and I want to be exact about the material: it was 0.22 micrometre filtered crude supernatant, so if any page of ours says the purified enzyme, that is a wording slip. What we can state is the geometry — three sprays delivered 1.67 millilitres onto a 78.5 square centimetre plate, which is the same rate as 2126 litres per hectare, and in hydroponics the arms are dilutions of one in forty to one in a hundred against a matched WB800 culture. The model turns that into 37.6 kilounits per hectare per application by multiplying the sprayed volume by one measured secreted activity, and it is the dose that worked rather than the smallest that works, because our sets varied salt level and timing but never the applied amount. No dilution series was ever run in soil, so there is no minimum effective dose, and that is the first experiment on the plant side.",
"a_zh":"劑量是稀釋倍數加體積，不是活性，而我想把材料講精確：那是 0.22 微米過濾的粗上清，所以如果我們任何一頁寫「純化酵素」，那是用詞失誤。我們能講的是幾何——三次噴灑把 1.67 毫升施到 78.5 平方公分的盤上，相當於每公頃 2126 公升；水耕那邊各組是 1/40 到 1/100 的稀釋，對上相同稀釋的 WB800 培養液。模型把這個換成每公頃每次施用 37.6 kU，做法是噴灑體積乘上一個量到的分泌活性，而那是「有效的劑量」而不是「最小有效劑量」，因為我們的實驗組變動的是鹽度和時機，從來沒有變動施用量。土壤裡從來沒有做過稀釋系列，所以不存在最小有效劑量，那也是植物端的第一個實驗。",
"trap_en":"Quoting 37.6 kilounits per hectare as a measured dose. It is a volume multiplied by one activity reading; say so, and say the minimum effective dose does not exist yet.",
"trap_zh":"把每公頃 37.6 kU 當成量到的劑量報出來。那是體積乘上一個活性讀值；要講清楚，並且說最小有效劑量目前還不存在。",
"nodes":[
"C_CF",
"P_ACCD"
],
"figs":[
"p10",
"p03"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"plant",
"id":"q341"
},
{
"q_en":"BoPep4 co-treatment harmed the plants even without salt, and your own page says the protectant brings harm when released without demand. Is that not an argument against a machine that produces continuously?",
"q_zh":"BoPep4 同時處理在沒有鹽的情況下也傷害植物，而你們頁面上自己寫「在沒有需求時釋放反而造成傷害」。這不正好是反對一台持續生產的機器嗎？",
"type":"integrate",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"plant#Evaluating BoPEP4 rescue efficacy",
"results#Hydroponic salinity stress",
"plant#Evaluating AtLEA14 rescue efficacy"
],
"seat":"plant",
"backup":"wet1",
"kw_en":[
"it argues for the gate, not against it",
"growth against tolerance",
"the dose window is owed"
],
"kw_zh":[
"這是支持那道閘門，不是反對",
"生長 vs 耐受",
"還欠劑量窗口"
],
"a_en":"It is an argument for the gate rather than against it, and it is the strongest one we have from our own data. Every BoPep4 co-treated plate was chlorotic, and the unstressed co-treated plate sat below the mock control on both weight and chlorophyll, which is the growth-versus-tolerance trade-off appearing in our own plants: an elicitor peptide that switches a plant into defence costs it growth when there is nothing to defend against. That is precisely why the decision of when to produce sits in the field, in a forecast and a light, instead of being wired into a constitutive strain — a machine that produced continuously would be delivering this penalty all season. What it also means is that we owe a dose and timing window before any of this is deployable, and that window is the measurement, not the mechanism, that we are missing.",
"a_zh":"這是支持那道閘門的論據，而不是反對它的，而且這是我們從自己數據裡拿到最強的一條。每一盤 BoPep4 同時處理的都出現黃化，而沒有加鹽的同時處理組在鮮重和葉綠素上都低於 mock 對照——這就是「生長 vs 耐受」的取捨出現在我們自己的植物上：一個把植物切進防禦狀態的 elicitor peptide，在沒有東西要防禦的時候會讓它付出生長的代價。這正是為什麼「什麼時候生產」這個決定放在田裡、放在預測和一盞燈上，而不是接進一株組成型的菌裡——一台持續生產的機器會整季都在交付這個代價。它同時也意味著：在任何部署之前我們還欠一個劑量與時機窗口，而我們缺的是那個量測，不是機制。",
"trap_en":"Treating this as a weakness to be minimised. It is the project's own evidence for why the light gate exists; lead with that and then concede the missing dose window.",
"trap_zh":"把這題當成要淡化的弱點。它是這個專案自己拿出來、說明為什麼需要光閘門的證據；先講這個，再承認缺少劑量窗口。",
"nodes":[
"P_BOPEP",
"C_THR"
],
"figs":[
"p06"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"plant",
"id":"q342"
},
{
"q_en":"ACC deaminase post-treatment falls below the heat control in both soil trials, and your two agar heat trials disagree on which timing is best. What do you actually claim about timing?",
"q_zh":"ACC 去胺酶事後處理在兩次土壤試驗裡都低於熱逆境對照，而你們兩次 agar 熱逆境試驗對「哪個時機最好」的結論又相反。那你們對時機到底主張什麼？",
"type":"gap",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"plant#Evaluating ACC deaminase rescue efficacy under prolonged 37",
"results#Agar-based heat stress",
"plant#Soil"
],
"seat":"plant",
"backup":"dry",
"kw_en":[
"timing decides the sign, not the size",
"the two trials disagree",
"efficacy is an axis in the model"
],
"kw_zh":[
"時機決定正負號，不是大小",
"兩次 trial 結論相反",
"模型把效力當成一個軸"
],
"a_en":"Only that timing decides the sign of the effect, not which timing is best. Our runs do not agree: on agar at 75 millimolar pre-treatment gave the highest fresh weight, 0.164 against 0.144 grams for co-treatment; in the agar heat set trial 1 favoured pre-treatment and trial 2 favoured post-treatment at plus fourteen percent chlorophyll; and in soil heat, post-treatment fell below the heat control in both trials. What is consistent across the whole programme is that co-treatment is the worst option and that applying a protectant with no stress present can hurt, which is a direction rather than a number. That is why the model treats efficacy as an axis instead of a fixed value, and why the experiment we owe is the three timings against a standardised salt load with three independent replicates each, so the timings can be compared on equal terms.",
"a_zh":"我們只主張「時機決定效果的正負號」，不主張哪個時機最好。我們的實驗彼此不一致：agar 75 mM 下事前處理鮮重最高，0.164 對同時處理的 0.144 公克；agar 熱逆境 trial 1 偏向事前處理、trial 2 偏向事後處理（葉綠素高出 14%）；而土壤熱逆境裡，事後處理在兩次試驗都低於熱逆境對照。整個計畫裡一致的是「同時處理是最差的選項」以及「在沒有逆境時施用保護蛋白可能有害」，那是一個方向而不是一個數字。這也是為什麼模型把效力當成一個軸而不是固定值，以及為什麼我們欠的實驗是：在標準化鹽負荷下比較三個時機，每組三個獨立重複，讓時機能在同一條件下被比較。",
"trap_en":"Picking a best timing to sound decisive. The honest claim is the sign, plus naming the soil result that goes against us.",
"trap_zh":"為了聽起來果斷而挑一個最佳時機。誠實的主張是正負號，再加上主動講出那個對我們不利的土壤結果。",
"nodes":[
"P_SOIL",
"C_THR"
],
"figs":[
"p07",
"p03"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"plant",
"id":"q343"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q344"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q345"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q346"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q347"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q348"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q349"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q350"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q351"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q352"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q353"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q354"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q355"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q356"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q357"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q358"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q359"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q360"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q361"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q362"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q363"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q364"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q365"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q366"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q367"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q368"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q369"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q370"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q371"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q372"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q373"
},
{
"q_en":"Your construct predicts an ACC deaminase of about 35 kDa. Why do some of your light-plate blots show a band just under 100?",
"q_zh":"你們的構築預測 ACC 去胺酶約 35 kDa。為什麼有些光照板的 Western blot 出現接近 100 kDa 的帶？",
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
"regrounded":"2026-10-25",
"dom":"wetlab",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q374"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q375"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q376"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q377"
},
{
"q_en":"Your Parts page calls AcdS 2.1 the same enzyme with its first fifteen codons recoded. Tell me precisely what that recoding changed, and what it could not change.",
"q_zh":"你們 Parts 頁說 AcdS 2.1 是同一個酵素，只是前十五個密碼子重新編碼。請精確說明那個重編碼改了什麼，又不可能改到什麼？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"parts",
"engineering",
"protein-design/methodology"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"same protein, different mRNA",
"start+15 0.563 to 0.773",
"CAI fell to 0.75"
],
"kw_zh":[
"蛋白質一樣、mRNA 不同",
"start+15 從 0.563 到 0.773",
"CAI 掉到 0.75"
],
"a_en":"It changed the messenger RNA and nothing about the enzyme. The protein sequence is identical, and we verified that before ordering, so the recoding cannot make the enzyme more stable or more active. What it changes is how open the start of the message is: the first codons after the ATG can base-pair back into the ribosome binding site and occlude the Shine-Dalgarno core. For ACC deaminase, accessibility over the first fifteen bases went from 0.563 in the wild type to 0.773 with the coding sequence recoded, and codon adaptation fell from about 0.85 to 0.75. That is a translation initiation claim, and it is a prediction, not a yield.",
"a_zh":"它改的是 mRNA，跟酵素本身無關。蛋白質序列完全一樣，這點我們在下訂前就驗證過，所以重編碼不可能讓酵素更穩定或更有活性。它改的是訊息開頭有多開放：ATG 後面的頭幾個密碼子會跟核糖體結合位反向配對，把 Shine-Dalgarno core 遮住。對 ACC deaminase 來說，前十五個鹼基的可及性從野生型的 0.563 提高到重編碼後的 0.773，而密碼子適應度從大約 0.85 掉到 0.75。那是一個關於轉譯起始的主張，而且是預測，不是產量。",
"trap_en":"Saying optimisation improves the protein or helps it survive in the field. Synonymous recoding cannot touch the protein sequence.",
"trap_zh":"說最佳化讓蛋白質變好或更耐田間環境。同義重編碼不可能動到蛋白質序列。",
"basis":"design check: what a synonymous change can and cannot do",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q378"
},
{
"q_en":"Your ordered cassettes span codon adaptation index 0.59 to 0.81 against 0.85 to 0.87 for the wild types. You made them worse on that measure. Why?",
"q_zh":"你們訂的卡匣 codon adaptation index 是 0.59 到 0.81，而野生型是 0.85 到 0.87。在這個指標上你們把它弄差了。為什麼？",
"type":"boundary",
"tier":"B",
"deep":1,
"pages":[
"engineering",
"protein-design/methodology"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"CAI was a constraint, not the target",
"proxy for tRNA supply",
"high CAI, worst start site"
],
"kw_zh":[
"CAI 是限制條件不是目標",
"tRNA 供給的代理指標",
"CAI 高、起始位點最差"
],
"a_en":"Because initiation comes first, and codon adaptation was recorded as a constraint rather than optimised. CAI is roughly how often each codon you used is the one B. subtilis 168 prefers, from the Kazusa usage table. It is a proxy for tRNA supply, not a measurement of it, and it is an average, so it hides where the slow codons sit. Our own constructs make the point: BoPep4 carries a high adaptation index of 0.87 and the lowest start-codon accessibility of anything we built. We traded adaptation for an open start site, most steeply on the two designs that also recode the signal peptide, which fall to 0.59 and 0.63.",
"a_zh":"因為起始要先過關，而密碼子適應度只是被記錄下來的限制條件，不是最佳化的目標。CAI 大致是說你用的每個密碼子有多常是 B. subtilis 168 偏好的那一個，數字來自 Kazusa 的使用頻率表。它是 tRNA 供給的代理指標，不是量測，而且是平均值，所以會藏住慢密碼子的位置。我們自己的構築就說明了這件事：BoPep4 的適應度高達 0.87，起始密碼子可及性卻是我們做過的所有構築裡最低的。我們是用適應度換開放的起始位點，而把信號肽也一起重編碼的那兩個設計換得最兇，掉到 0.59 和 0.63。",
"trap_en":"Treating a higher CAI as a better design. Note also that our own page attaches 0.87 to BoPep4 in the prose and to the wild type in the table.",
"trap_zh":"把 CAI 越高當成設計越好。另外要注意，我們自己的頁面在文字裡把 0.87 掛在 BoPep4 上，在表格裡卻是野生型。",
"basis":"the team's own finding that contradicts standard practice",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q379"
},
{
"q_en":"Why did you spend the optimisation on the first fifteen bases and the Shine-Dalgarno core, rather than on the whole gene?",
"q_zh":"為什麼你們把最佳化的力氣花在前十五個鹼基和 Shine-Dalgarno core，而不是整個基因？",
"type":"design",
"tier":"A",
"deep":1,
"pages":[
"engineering",
"protein-design/methodology"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"ribosome loads on unpaired RNA",
"Ho1 benchmark 0.681",
"full length made it worse"
],
"kw_zh":[
"核糖體上在未配對的 RNA",
"Ho1 基準 0.681",
"全長最佳化反而更差"
],
"a_en":"Because the ribosome has to load, and it loads on unpaired RNA. We folded a 236-base window with ViennaRNA 2.7.2 at 37 degrees, covering the recombination site, MF001, a one-base spacer, the 93-base SamyQ signal peptide and the first 90 bases of cargo, and read the mean unpaired probability over the Shine-Dalgarno core and over the first fifteen and thirty bases after the start codon. Ho1, a well-expressed gene in this chassis, gave us a benchmark at 0.681, and we set 0.50 as the minimum acceptable. The whole-gene route was tried in phase two and it made initiation worse by lowering start+15, which is why we stopped there.",
"a_zh":"因為核糖體必須上得去，而它只能上在沒有配對的 RNA 上。我們用 ViennaRNA 2.7.2 在 37 度折疊一個 236 個鹼基的視窗，涵蓋重組位點、MF001、一個鹼基的 spacer、93 個鹼基的 SamyQ 信號肽，再到貨物基因的前 90 個鹼基，然後讀 Shine-Dalgarno core 以及起始密碼子後前十五和前三十個鹼基的平均未配對機率。Ho1 是這個底盤裡表現良好的基因，給了我們 0.681 這個基準，而我們把 0.50 設為可接受的下限。整個基因一起最佳化的做法在第二階段試過，結果是 start+15 下降、起始變差，所以我們就停在那裡。",
"trap_en":"Claiming you model an elongation ramp. We model initiation only, and recoding the signal peptide would have removed any ramp there.",
"trap_zh":"說你們有模擬延伸期的 ramp。我們只模擬起始，而把信號肽重編碼反而會把那裡的 ramp 拿掉。",
"basis":"design check: the objective function the team actually ranked on",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q380"
},
{
"q_en":"Name what synonymous recoding can break. Which of those did you screen for, and what did your screen miss?",
"q_zh":"請說出同義密碼子重編碼可能破壞什麼。這些當中你們篩了哪些？你們的篩查又漏了什麼？",
"type":"boundary",
"tier":"A",
"deep":1,
"pages":[
"engineering",
"protein-design/methodology"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"seven enzymes excluded, both strands",
"missed BpiI and BsmBI",
"6-A run was a warning only"
],
"kw_zh":[
"排除七種酶、兩股都查",
"漏掉 BpiI 和 BsmBI",
"6 個 A 只當警告"
],
"a_en":"It can create a restriction site that breaks Golden Gate, make a Shine-Dalgarno-like sequence inside the gene, remove a deliberate pause, change how fast the message is degraded, or push repeats past what a synthesis house will make. We did screen: of about fifty thousand variants folded per construct we excluded any introducing BsaI, EcoRI, XbaI, SpeI, PstI, NotI or HindIII on either strand across the recoded span plus eight flanking bases, leaving thirty-three to forty-one thousand legal ones. Two misses are ours to own. The scan covered only the recoded window, so it does not certify the whole insert, and it left out BpiI and BsmBI, which are our Level 0 and Level 2 assembly enzymes.",
"a_zh":"它可能造出破壞 Golden Gate 的限制酶位點、在基因內部做出類似 Shine-Dalgarno 的序列、拿掉刻意的停頓、改變訊息被降解的速度，或讓重複序列超出合成廠做得出來的範圍。我們確實篩了：每個構築折疊大約五萬個變異體，排除任何在重編碼範圍加上兩側八個鹼基內、於任一股上造出 BsaI、EcoRI、XbaI、SpeI、PstI、NotI 或 HindIII 位點的設計，剩下三萬三千到四萬一千個合法變異體。但有兩個漏洞是我們要承認的：掃描只涵蓋重編碼的那個視窗，所以不能保證整段插入；而且它沒有包含 BpiI 和 BsmBI，那正是我們 Level 0 和 Level 2 組裝用的酶。",
"trap_en":"Claiming the screen was complete. A homopolymer run was logged as a warning, not a rejection: three of eight cassettes carry a 6-A run.",
"trap_zh":"說篩查做得很完整。同聚物只被記成警告、不是排除標準：八個卡匣裡有三個帶 6 個連續 A。",
"basis":"judge pattern: what could this have broken, and did you look",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q381"
},
{
"q_en":"Suppose you ran your recoded ACC deaminase against the wild-type-codon version, same promoter, same signal peptide, same reactor. Predict the result, and tell me which way you would bet.",
"q_zh":"假設你們把重編碼的 ACC deaminase 跟野生型密碼子版本對打，同一個啟動子、同一個信號肽、同一台反應器。預測一下結果，並說你會賭哪一邊。",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"engineering",
"results",
"measurement"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"I would bet on a small gain",
"the rebuilt context cut the gain",
"initiation is not the bottleneck"
],
"kw_zh":[
"我賭只有小幅提升",
"換了元件後優勢縮小",
"瓶頸不在起始"
],
"a_en":"I would bet on a small gain or none in protein per OD, and I would say so before running it. Two reasons from our own work. We designed the cassettes behind MF001 and then built them behind RiboJ and RBS0, and recalculating in the element we actually built cut the predicted gain sharply; most of the original improvement came from breaking a pairing that RiboJ prevents anyway. And our own page says the model diagnoses initiation only, not secretion efficiency, signal-recognition targeting or degradation by HtrA and HtrB outside the cell. If it does anything, I would expect a faster rise to detectable enzyme rather than a higher plateau.",
"a_zh":"我會賭每單位 OD 的蛋白量只有小幅提升或完全沒差，而且我願意在跑之前就這樣說。理由有兩個，都來自我們自己的工作。第一，我們是在 MF001 後面設計這些卡匣，實際組裝卻放在 RiboJ 加 RBS0 後面；用真正建出來的元件重算之後，預測的提升大幅縮小，因為原本的大部分優勢來自打斷一個配對，而 RiboJ 本來就會阻止那個配對。第二，我們自己的頁面寫了，這個模型只診斷起始，不管分泌效率、訊號辨識，也不管細胞外 HtrA 和 HtrB 的降解。如果它真有作用，我預期是比較快到達可偵測的酵素量，而不是平台值變高。",
"trap_en":"Predicting a large gain. Our own text says a higher start+15 identifies a construct worth testing and does not predict yield.",
"trap_zh":"預測會有大幅提升。我們自己的文字就說，start+15 較高只表示這個構築值得測試，不預測產量。",
"basis":"reasoning: predict an experiment the team never ran, from what they do know",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q382"
},
{
"q_en":"Which of your sequence choices has ever been tested against its alternative in the lab?",
"q_zh":"你們的序列選擇裡，有哪一個真的在實驗室裡跟它的替代方案比過？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"results",
"measurement",
"engineering"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"no CSN construct beside the optimised one",
"control read in the same range",
"correction factor with nothing to correct"
],
"kw_zh":[
"沒有 CSN 構築陪跑",
"對照讀到同一個範圍",
"修正係數無物可修"
],
"a_en":"Properly, none of them. We designed for it twice and have not closed either. The anti-His ELISA was built to compare the two gene sequences, but no CSN construct was assayed beside the recoded one, so the fold difference cannot be calculated and the correction factor of 2.66 we took from the literature has nothing yet to correct. The two constructs also differ in both the signal peptide and the gene version, so even run together they confound two variables. One panel did put BoPep4 against its two recodings, and the untransformed WB800 control read 5.5 and 4.6 micrograms per millilitre, the same range as four of six constructs, so nothing in it can be attributed to expression.",
"a_zh":"嚴格講，一個都沒有。我們設計了兩次，兩次都還沒收尾。anti-His ELISA 本來就是為了比較兩個基因序列而設計的，但沒有任何 CSN 構築跟重編碼版本一起量，所以倍數差算不出來，而我們從文獻拿來的 2.66 修正係數目前沒有東西可以修正。那兩個構築還同時差在信號肽和基因版本，所以即使一起跑也混了兩個變數。有一組 panel 確實把 BoPep4 跟它的兩個重編碼版本放在一起，但未轉型的 WB800 對照讀到每毫升 5.5 和 4.6 微克，跟六個構築裡的四個同一個範圍，所以裡面沒有任何差異能歸因於表達。",
"trap_en":"Presenting the ELISA concentrations as the codon comparison. They quantify one construct; they do not compare two gene sequences.",
"trap_zh":"把 ELISA 的濃度當成密碼子比較。那些數字只定量了一個構築，沒有比較兩個基因序列。",
"basis":"team's own gap: the comparison the order set was designed for is still owed an assay",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q383"
},
{
"q_en":"If you could only do one of three things to raise titre, codon optimisation, a stronger promoter or a better signal peptide, which one and why?",
"q_zh":"如果要提高產量，密碼子最佳化、更強的啟動子、更好的信號肽，你只能做一件，你選哪一個？為什麼？",
"type":"compare",
"tier":"A",
"deep":1,
"pages":[
"measurement",
"results",
"engineering"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"signal peptide first",
"SamyQ 2.19 times Csn net",
"light moved it a few percent"
],
"kw_zh":[
"先換信號肽",
"SamyQ 淨值是 Csn 的 2.19 倍",
"光只動了幾個百分點"
],
"a_en":"Signal peptide. It is the only one of the three that has moved a number in our hands. With PLP added, SamyQ reached 89.7 nanomoles of product against 73.4 for Csn, which is 2.19 times the net over the host baseline, although that is one well each and the two also differ in gene version. The literature says the best signal peptide is cargo-specific and cannot be predicted, so it has to be screened, and that is a week. The promoter is not our problem: under green against red light our ELISA reads 12.9 against 11.8 micrograms per millilitre, so light-dependent regulation is still unverified and more transcription is not the lever.",
"a_zh":"信號肽。三個裡面只有它在我們手上真的動過數字。加了 PLP 之後，SamyQ 做出 89.7 奈莫耳產物，Csn 是 73.4，扣掉宿主基線後是 2.19 倍；不過各只有一個孔，而且兩者的基因版本也不同。文獻說最好的信號肽跟貨物有關、沒辦法預測，所以只能篩，而篩一輪大概一週。啟動子不是我們的問題：綠光對紅光，我們的 ELISA 讀到每毫升 12.9 對 11.8 微克，所以光控調節還沒被證實，而轉錄更多不是那根槓桿。",
"trap_en":"Choosing the promoter. Our own results say protein expression did not consistently increase with green light, so reliable light control is unverified.",
"trap_zh":"選啟動子。我們自己的結果說蛋白表達並沒有隨綠光穩定上升，所以可靠的光控還沒被證實。",
"basis":"judge pattern: force a single prioritised intervention with a reason",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q384"
},
{
"q_en":"Assume the codons are fine. What else is holding your yield down, and in what order would you bet on them?",
"q_zh":"假設密碼子已經沒問題了。還有什麼在壓住你們的產量？你會依什麼順序下注？",
"type":"boundary",
"tier":"A",
"deep":1,
"pages":[
"engineering",
"results",
"protein-design/methodology"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"secretion and SRP targeting",
"HtrA and HtrB outside",
"folding after export"
],
"kw_zh":[
"分泌與 SRP 標的辨識",
"細胞外的 HtrA 與 HtrB",
"出去之後才摺疊"
],
"a_en":"Our own limits section lists them, and I would bet in that order. Secretion first: signal-recognition targeting and co-translational export, which the initiation model says nothing about. Then degradation outside the cell by HtrA and HtrB, which our page flags as worse for a disordered protein like LEA14. Then folding, and we have a result there: AmilCP never coloured the medium, and the explanation we accept is that secreted protein crosses the membrane unfolded and has to fold outside, which a beta-barrel chromoprotein cannot do fast enough. Inclusion bodies are not our evidence; the 2 August fractionation blot put ACC deaminase in the supernatant and left both pellet lanes blank.",
"a_zh":"我們自己的「限制」那一節就列出來了，我也會照那個順序下注。第一是分泌：訊號辨識的標的導向和共轉譯輸出，而起始模型對這些完全沒有話說。第二是細胞外的 HtrA 和 HtrB 降解，我們頁面特別註明這對像 LEA14 這種無序蛋白更嚴重。第三是摺疊，而這裡我們有結果：AmilCP 從來沒讓培養液出現顏色，我們接受的解釋是分泌的蛋白是以未摺疊狀態穿過膜、必須在外面才摺疊，而 beta-barrel 色蛋白來不及。包涵體不是我們的證據；8 月 2 日的分層墨點把 ACC deaminase 放在上清液，兩個沉澱道都是空的。",
"trap_en":"Reciting a textbook list. Name the evidence in our own records for each one, and say which we cannot support.",
"trap_zh":"背一串教科書清單。每一項都要講出我們自己記錄裡的證據，並說出哪些我們沒辦法支持。",
"basis":"boundary: what the codon model explicitly does not cover",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q385"
},
{
"q_en":"Your pages mix silent recoding with real amino-acid changes. Tell me which is which, and what evidence each kind owes us.",
"q_zh":"你們的頁面把沉默的重編碼和真正改胺基酸的變化混在一起。請說明哪個是哪個，以及每一類各欠我們什麼證據。",
"type":"design",
"tier":"B",
"deep":1,
"pages":[
"protein-design/methodology",
"engineering",
"parts"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"silent owes more protein",
"missense owes activity per mg",
"Y156C did not exist"
],
"kw_zh":[
"沉默的要交出更多蛋白",
"錯義的要交出每毫克活性",
"Y156C 根本不存在"
],
"a_en":"The 2.1 and 2.2 cargoes are silent: same protein, so what they owe is more protein, not proof of function. A change that alters the protein owes activity on the same material the protein was quantified on, so we can quote activity per milligram. We have an example of why care matters. A pairwise alignment against the crystal's organism found position 156 is tyrosine there and phenylalanine in ours, so a substitution our design document called Y156C does not exist in our protein, and three docking runs had already gone out on the wrong background. The enzyme variants were ranked by predicted stability, and that method's blind-test error is wider than most of our differences.",
"a_zh":"2.1 和 2.2 這些貨物序列是沉默的：蛋白質一樣，所以它們要交出的是更多蛋白，不是功能的證明。會改到蛋白質的那些變化標準不一樣，它們欠的是在同一份已定量蛋白的樣品上做的活性量測，這樣我們才能講每毫克的活性。我們有一個例子說明為什麼要小心：跟晶體那個物種做兩兩比對後發現，位置 156 在晶體裡是 tyrosine，在我們的構築裡是 phenylalanine，所以設計文件叫 Y156C 的那個突變在我們的蛋白裡根本不存在，而那時已經有三次 docking 用錯的背景送出去了。酵素變異體我們是用預測的穩定性排序，而那個方法的盲測誤差比我們大部分的差異還大。",
"trap_en":"Treating recoded and mutated parts as the same kind of modification. One owes titre, the other owes activity, and no enzyme variant reached an order.",
"trap_zh":"把重編碼和突變當成同一類修改。一個欠產量、一個欠活性，而且沒有任何酵素變異體真的下訂。",
"basis":"design check: what evidence each class of sequence change requires",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q386"
},
{
"q_en":"Codon optimisation is a button on every synthesis vendor's website. What did yours add?",
"q_zh":"密碼子最佳化在每家合成廠網站上都是一個按鈕。你們自己做的多了什麼？",
"type":"history",
"tier":"B",
"deep":1,
"pages":[
"engineering",
"protein-design/methodology"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"vendor maximises adaptation",
"signal peptide codons 2 to 31",
"v2 and v3 ordered as a pair"
],
"kw_zh":[
"廠商只拚適應度",
"信號肽密碼子 2 到 31",
"v2 與 v3 成對訂購"
],
"a_en":"A vendor tool maximises codon adaptation and does not touch the signal peptide. We did three things it would not. We made start-region accessibility the objective and adaptation only a constraint, which is why our ordered set sits below wild type there. We opened SamyQ codons two to thirty-one, the stretch folding back onto the start site, and for ACC deaminase that lifted accessibility further than editing the cargo alone. And we ordered the comparison rather than the winner: ACC deaminase and AmilCP each went out as a cargo-only and a signal-peptide-edited version, so the question is testable. We also ran a published low-GC heuristic as a control, and for LEA14 it came out worse than wild type.",
"a_zh":"廠商的工具是把密碼子適應度拚到最高，而且不會動信號肽。我們做了三件它不會做的事。第一，我們把起始區可及性當成目標，適應度只當限制條件，這也是為什麼我們訂的那一套在適應度上低於野生型。第二，我們把 SamyQ 的密碼子 2 到 31 開放可改，那正是折回去蓋住起始位點的那一段；對 ACC deaminase 來說，這比只改貨物基因把可及性拉得更高。第三，我們訂的是「比較」而不只是贏家：ACC deaminase 和 AmilCP 各做了一個只改貨物、一個連信號肽一起改的版本，所以這個問題是可以測的。我們也把一篇文獻的低 GC 經驗法則當對照跑，而對 LEA14 它比野生型更差。",
"trap_en":"Claiming the pipeline is novel in general. The new parts are the objective, the editable signal peptide and the paired order, and none is validated yet.",
"trap_zh":"籠統地說這個流程很新。新的部分是目標函數、可編輯的信號肽，以及成對訂購，而且都還沒被驗證。",
"basis":"positioning: what a team adds over a vendor's default optimiser",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q387"
},
{
"q_en":"Your Level 0 entry uses BbsI, Level 1 uses BsaI, and the Level 2 fusion into pSTK-EXP2 uses BsmBI. Walk me through why the hierarchy needs a different enzyme at each level, and what the recognition sites are doing to themselves as you go up.",
"q_zh":"你們 Level 0 用 BbsI，Level 1 用 BsaI，接到 pSTK-EXP2 的 Level 2 融合又用 BsmBI。請說明為什麼每一層都需要換一種酶，以及每往上一層，辨識位點本身發生了什麼事。",
"type":"design",
"tier":"B",
"deep":1,
"pages":[
"engineering#cloning",
"experiments#golden-gate-assembly",
"parts#collection"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"nested sites, BbsI outside",
"cutting removes the site",
"reaction runs one way"
],
"kw_zh":[
"位點套疊，BbsI 在外",
"切完位點就消失",
"反應只能往前走"
],
"a_en":"Because each level has to cut the level below without cutting itself. Our primers read outward as a spacer, a BbsI site setting the Level 0 overhang, a BsaI site setting the Level 1 position, then the gene-specific annealing region, so the sites are nested with BbsI outside. At Level 0 BbsI cuts outward and the fragment entering pSTK-0 keeps the BsaI site but loses the BbsI one. At Level 1 BsaI cuts and that site leaves with the trimmed ends. BsmBI then joins the cassette to the sensor and chromophore modules in pSTK-EXP2. Each step destroys the site it used, so the product cannot be re-cut.",
"a_zh":"因為每一層都要能切下一層，但不能切到自己。我們的 primer 從外到內是 spacer、一個設定 Level 0 突出端的 BbsI 位點、一個設定 Level 1 位置的 BsaI 位點，再接基因專一的 annealing 區，所以位點是套疊的，BbsI 在外面。Level 0 用 BbsI 往外切，進到 pSTK-0 的片段留下 BsaI 位點、失去 BbsI 位點。Level 1 換 BsaI 切，那個位點也隨著切掉的兩端離開。接著 BsmBI 在 pSTK-EXP2 裡把卡匣跟感光與發色團模組接起來。每一步都毀掉自己用過的位點，所以產物不會被再切。",
"trap_en":"Saying BbsI and BpiI are two different enzymes. Our Engineering text lists both at Level 0, but GAAGAC is one recognition site under two suppliers' names; the three that actually differ are BbsI, BsaI and BsmBI.",
"trap_zh":"把 BbsI 和 BpiI 當成兩種不同的酶。我們 Engineering 的文字 Level 0 兩個都列，但 GAAGAC 是同一個辨識序列、兩家廠商的名字；真正不同的三個是 BbsI、BsaI 和 BsmBI。",
"basis":"nested type IIS logic is the first thing a cloning examiner tests",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q388"
},
{
"q_en":"Your primer tails set four-base fusion sites: CTGA and GAGG at Level 0, and TATG, TGTC, ACAT, AGAG, ATGT at Level 1. What does a set like that have to satisfy, and what does it have to avoid?",
"q_zh":"你們的 primer 尾巴設定了四個鹼基的接合端：Level 0 是 CTGA 和 GAGG，Level 1 是 TATG、TGTC、ACAT、AGAG、ATGT。這樣一組序列必須滿足什麼條件，又必須避開什麼？",
"type":"reason",
"tier":"B",
"deep":1,
"pages":[
"engineering#cloning",
"experiments#golden-gate-assembly"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"unique and non-palindromic",
"none complementary to another",
"position decides the scar"
],
"kw_zh":[
"唯一且非迴文",
"彼此不能互補",
"位置決定接痕"
],
"a_en":"Every member has to be unique, non-palindromic, and not complementary to any other member. A palindromic overhang anneals to itself and closes the fragment into a circle; two junctions sharing an overhang let a part land in the wrong slot; and near-matches still ligate, because T4 ligase seals a mismatched four-base pair at a low rate, which is where wrong clones come from. We also stay off all-A or all-T, too weak to ligate reliably. The position is not free either: TATG carries the ATG itself, so the junction at the front of a coding sequence is the start codon and no extra residue is added to the protein.",
"a_zh":"每一個都要是唯一的、非迴文的，而且彼此不能互補。迴文的突出端會自己接自己，把片段環化；兩個不同接點共用同一個突出端，零件就會插錯位置；而且差一個鹼基還是會接起來，T4 ligase 對四鹼基的錯配有一定機率會封口，錯誤的 clone 就是從那裡來的。另外也要避開全 A 或全 T，太弱、接不穩。位置也不是隨便的：TATG 本身就含 ATG，所以 CDS 前端的接點就是起始密碼子，蛋白質不會多出胺基酸。",
"trap_en":"Reading ACAT and ATGT as a clash in the set. They are the two halves of one junction written from opposite strands, the forward primer on the top and the reverse on the bottom. The real failure mode is two different junctions sharing one overhang.",
"trap_zh":"把 ACAT 和 ATGT 當成這組裡的衝突。它們是同一個接點、從互補的兩條股寫出來的，forward primer 寫上股、reverse 寫下股。真正的失敗模式是兩個不同的接點共用同一個突出端。",
"basis":"fusion-site fidelity is where a four-base standard actually fails",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q389"
},
{
"q_en":"Your codon pipeline threw out any synonymous variant that introduced a BsaI, EcoRI, XbaI, SpeI, PstI, NotI or HindIII site, but you state it did not screen for BpiI or BsmBI. Those are the enzymes you assemble with at Level 0 and Level 2. What follows from that?",
"q_zh":"你們的密碼子流程會把任何帶入 BsaI、EcoRI、XbaI、SpeI、PstI、NotI 或 HindIII 位點的同義變體剔除，但你們自己寫說沒有篩 BpiI 和 BsmBI。那正好是你們 Level 0 和 Level 2 組裝用的酶。這會有什麼後果？",
"type":"design",
"tier":"A",
"deep":1,
"pages":[
"engineering#cloning",
"protein-design/methodology#codon-optimisation"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"internal site cuts insert",
"BpiI and BsmBI missed",
"window only, not insert"
],
"kw_zh":[
"內部位點會切掉插入片段",
"漏掉兩個組裝用酶",
"只掃重編區，不是全長"
],
"a_en":"A recoded cassette could have picked up a site for the very enzyme that assembles it. If a BpiI site sits inside the coding sequence, the Level 0 reaction cuts my own insert in two, with overhangs nobody designed, and what grows is empty vector or a shortened insert that can still look near the right size. We drew about fifty thousand synonymous variants per construct and kept thirty-three to forty-one thousand legal ones, so the screen was cheap and two enzymes were simply left off the list. The second limit we also state: the scan covered the recoded window plus eight flanking bases, not the whole insert. The fix is to rescan the eight ordered cassettes for all three.",
"a_zh":"重新編碼的卡匣有可能剛好帶進組裝它自己那支酶的位點。如果 CDS 裡面有一個 BpiI 位點，Level 0 的反應就會把我自己的插入片段切成兩段、帶著沒人設計過的突出端，長出來的是空載體或縮短的片段，而且尺寸看起來還可能差不多。我們每個構築抽了約五萬個同義變體、留下三萬三到四萬一千個合法的，所以這個篩選很便宜，只是名單上漏了兩支酶。第二個限制我們也寫了：掃描只涵蓋重編區加兩側各八個鹼基，不是整段插入片段。解法是把訂的八個卡匣對三支酶重新掃一次。",
"trap_en":"Saying domestication does not matter because the protein sequence is unchanged. An internal site destroys the part inside the assembly reaction, long before expression is relevant.",
"trap_zh":"說 domestication 不重要，因為蛋白質序列沒變。內部位點是在組裝反應裡就把零件毀掉了，根本還沒到表現那一步。",
"basis":"the team's own stated limit on its restriction-site scan",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q390"
},
{
"q_en":"On a Level 1 plate, how do you tell a correct assembly from an empty vector or a partial ligation, before you sequence anything?",
"q_zh":"在 Level 1 的盤子上，在還沒定序之前，你們怎麼分辨正確的組裝、空載體，和只接了一半的產物？",
"type":"design",
"tier":"A",
"deep":1,
"pages":[
"engineering#cloning",
"experiments#colony-pcr"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"sfGFP dropout",
"chloramphenicol then ampicillin",
"three negative band patterns"
],
"kw_zh":[
"sfGFP dropout",
"先氯黴素再安比西林",
"三種算陰性的條帶"
],
"a_en":"Three things, in that order. First the dropout: our vectors arrive as pSTK-0-sfGFP and pSTK-1A to 1D-sfGFP, and the insert replaces that sfGFP cassette, so a vector that was never cut still carries a reporter instead of our part. Second the marker, chloramphenicol at Level 0 against ampicillin at Level 1, so a carried-over entry plasmid cannot grow on the Level 1 plate. That is the one that broke on us, because pGEM-T Easy was ampicillin too, and the third cycle moved entry onto pSTK-0C to separate them. All sixteen Csn:LEA14 colonies then gave 811 bp. Third colony PCR, scoring three patterns negative: no band, empty-vector size, or any other size.",
"a_zh":"三件事，照這個順序。第一是 dropout：我們的載體拿到的時候是 pSTK-0-sfGFP 和 pSTK-1A 到 1D-sfGFP，插入片段會取代那段 sfGFP，所以沒被切開的載體身上還是報告基因，不是我們的零件。第二是抗性標記，Level 0 氯黴素對 Level 1 安比西林，帶過來的 entry plasmid 在 Level 1 的盤上長不起來。這一點我們真的踩到過，因為 pGEM-T Easy 也是安比西林，所以第三輪把進入步驟改到 pSTK-0C 把兩者分開，之後十六個 Csn:LEA14 菌落全都給出 811 bp。第三是菌落 PCR，三種算陰性：沒有條帶、空載體大小、或任何其他大小。",
"trap_en":"Claiming you screened colonies green against white by eye. The dropout is in the vector names, but every screen we report is a colony PCR on a gel; we have no record of scoring Level 1 colonies by colour.",
"trap_zh":"說你們是用肉眼看綠白菌落篩的。dropout 只是在載體名字裡，我們報告的每一次篩選都是菌落 PCR 跑膠；我們沒有用顏色篩 Level 1 菌落的記錄。",
"basis":"selection and dropout logic is what makes Golden Gate screenable",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q391"
},
{
"q_en":"Three consecutive Level 2 Golden Gate rounds returned nothing with no design change between them. Then you swept the insert-to-vector ratio to 1:5 and 1:7 and both worked. Why would a molar excess of insert rescue a reaction where every end is already defined?",
"q_zh":"你們連續三輪 Level 2 的 Golden Gate 都什麼都沒長，中間沒有改設計。後來把插入片段對載體的比例掃到 1:5 和 1:7，兩個都成功了。既然每一個末端都已經定好了，為什麼插入片段過量會救回這個反應？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"engineering#cloning",
"experiments#golden-gate-assembly"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"five pieces must meet",
"excess beats self-closure",
"cut-and-ligate cycling"
],
"kw_zh":[
"四個片段要同時到位",
"過量贏過載體自封",
"切與接的溫度循環"
],
"a_en":"Because defined ends fix which products are possible, not how often they form. A four-module Level 2 needs five pieces to meet in one complex, and that probability falls steeply with each extra partner, while the cut vector can always just close on itself. Raising insert concentration makes a productive collision more likely than self-closure, which is why 1:7 was carried forward and reused for the BsmBI assembly. The cycling does the rest: alternating a digest temperature with a cooler ligation step means a wrong join still carries its recognition site and gets re-cut, while a correct join has lost the site and is trapped, so the pool drifts into the one product the reaction cannot undo.",
"a_zh":"因為末端定好了只決定哪些產物可能發生，不決定它們發生的頻率。四模組的 Level 2 要五個片段在同一個複合體裡相遇，每多一個夥伴，這個機率就陡降，而切開的載體隨時可以自己封回去。把插入片段濃度拉高，就讓有效的碰撞比自封更有機會，這就是為什麼 1:7 被沿用，後來 BsmBI 的組裝也用它。剩下的靠溫度循環：在切的溫度和較低的接合溫度之間交替，接錯的產物身上還留著辨識位點、會被再切開，接對的已經失去位點、被鎖住，所以整池會漂向那個無法回頭的產物。",
"trap_en":"Saying more insert simply means more product. It changes the competition between a five-way productive assembly and vector self-closure; past some excess the extra insert only adds wrong-order products.",
"trap_zh":"說插入片段越多產物就越多。它改變的是五方正確組裝和載體自封之間的競爭；超過某個過量之後，多的插入片段只會增加順序錯誤的產物。",
"basis":"the one stoichiometry change that unblocked Level 2",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q392"
},
{
"q_en":"You have a colony PCR band at the expected size. Be precise with me: what has that excluded, and what has it not?",
"q_zh":"你拿到一條在預期大小的菌落 PCR 條帶。請精準一點：那條帶排除了什麼，又沒有排除什麼？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"engineering#cloning",
"results#complete-systems",
"experiments#colony-pcr"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"excludes empty and truncated",
"blind to point mutations",
"one module, not four"
],
"kw_zh":[
"排除空載體和截短",
"看不到點突變",
"一個模組不代表四個"
],
"a_en":"It excludes an empty vector, a grossly truncated insert and a mis-primed product, because all three run at a different length. Beyond that, very little. A gel at that resolution cannot see a point mutation, a small insertion or deletion, or a few bases lost at a junction, and our own learn step says colony PCR confirms only that an insert of about the right size is present. It also cannot tell me the colony is pure. And as we wrote after Level 2, one module being positive does not determine the state of the rest. That is why almost every construct in our table carries a named sequenced clone, and the two that do not are flagged as such.",
"a_zh":"它排除了空載體、嚴重截短的插入片段，和 mis-prime 的產物，因為這三種長度都不一樣。除此之外排除得很少。那個解析度的膠看不到點突變、小的插入或缺失，也看不到接點掉了幾個鹼基，我們自己的 learn 就寫著菌落 PCR 只能確認「大約正確大小」的片段存在。它也不能告訴我這個菌落是純的。而且像我們在 Level 2 之後寫的，一個模組是陽性並不決定其他模組的狀態。所以我們表上幾乎每一個構築都有具名、送過定序的 clone，而沒有的那兩個也標示出來了。",
"trap_en":"Saying a correct band plus a restriction digest is as good as sequencing. A digest answers the same length question another way; neither one reads a base.",
"trap_zh":"說條帶正確再加一個酶切就等於定序。酶切只是用另一種方式回答同一個長度問題，兩個都沒有讀到任何一個鹼基。",
"basis":"gels carry most of the project's cloning evidence",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q393"
},
{
"q_en":"For the Level 2 you have three junction PCRs on three clones and a double digest that gave 10,293 base pairs with EcoRI and 7,543 with EcoRI plus BtsI. What would end-to-end sequencing add that those two checks cannot give you?",
"q_zh":"你們的 Level 2 有三個 clone 的三個接點 PCR，加上雙酶切：EcoRI 給 10,293 bp、EcoRI 加 BtsI 給 7,543 bp。那麼全長定序能補上這兩種檢查給不了的什麼？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"engineering#cloning",
"results#complete-systems",
"parts#collection"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"order and length, not identity",
"nothing reads the 10 kb",
"sequencing cell still empty"
],
"kw_zh":[
"只有順序和長度",
"沒有人讀那 10 kb",
"定序欄還是空的"
],
"a_en":"Order and length, which is what those two give, are not identity. The junctions say the four modules are joined in the right order in three separate clones, and the digest says the plasmid is the right total size and cuts where a correct assembly predicts. Neither reads the ten kilobases between the junctions, and our page says exactly that. Sequencing would cover the coding sequences and the regulatory parts in their final context, catch a point mutation or small indel from any earlier step, and read the backbone. Our own build record's Level 2 sequencing cell is empty for both devices, so sending them is the fix.",
"a_zh":"順序和長度這兩件事不等於身分。接點說四個模組在三個獨立 clone 裡接的順序是對的，酶切說質體的總長度正確、而且切在正確組裝該切的地方。但兩者都沒有讀接點之間那十個千鹼基，我們頁面上就是這樣寫的。定序會把 CDS 和調控零件在最終位置上讀一遍，抓到前面任何一步產生的點突變或小插入缺失，也會讀到骨架。我們自己建構紀錄裡 Level 2 的定序欄，兩個裝置都是空的，所以解法就是把它們送去定序。",
"trap_en":"Treating the double digest as equivalent to sequencing because both numbers came out right. Two correct fragment sizes are two measurements of length; a compensating pair of errors inside a module would leave both unchanged.",
"trap_zh":"因為兩個數字都對，就把雙酶切當成等同定序。兩個正確的片段大小只是兩次長度量測；模組內部一對互相補償的錯誤，會讓這兩個數字都不變。",
"basis":"the project's strongest cloning evidence is also its most over-read",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q394"
},
{
"q_en":"Your Results construct table ticks a Sequenced column for both Level 2 devices, clone 2 and clone 1. Your Engineering page says no Level 2 construct has been sequenced end to end and the sequencing cell is empty for both. Which is it?",
"q_zh":"你們 Results 的構築表在兩個 Level 2 裝置的「已定序」欄都打了勾，clone 2 和 clone 1。但 Engineering 又說沒有任何 Level 2 構築做過全長定序，而且兩個裝置的定序欄都是空的。到底是哪一個？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"results#complete-systems",
"engineering#cloning",
"parts#collection"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"a read is not coverage",
"Engineering is strict",
"name the span read"
],
"kw_zh":[
"有讀過不等於全長",
"Engineering 那句才嚴格",
"說清楚讀了哪一段"
],
"a_en":"The strict statement is the right one, and the table is the one to fix. What the tick records is that a clone was named and sent; what Engineering states is that nothing reads the ten kilobases between the junctions, so no Level 2 device has end-to-end coverage. A partial read and a verified plasmid are not the same claim, and our Engineering build text makes it worse by saying assembly was followed by sequencing confirmation. Until we can name a span and a date, the honest line is junction-checked and digest-checked, not sequenced. I would rather you held us to that than to the tick.",
"a_zh":"嚴格的那句才是對的，要改的是那張表。打勾記錄的是有一個 clone 被命名、被送出去；Engineering 說的是沒有人讀接點之間那十個千鹼基，所以沒有任何 Level 2 裝置有全長覆蓋。部分讀序和「質體已驗證」不是同一個主張，而我們 Engineering 的 build 文字寫「組裝之後經定序確認」，讓情況更糟。在我們能講出讀了哪一段、哪一天之前，誠實的說法是接點檢查過、酶切檢查過，不是定序過。我寧願你用這句來要求我們，而不是那個勾。",
"trap_en":"Defending the tick because a clone number is attached, or guessing which region was read. Beware the count drift too: Biomanufacturing still says nine Level 1 modules, while the Results summary says fourteen constructs and the table it summarises carries fifteen rows.",
"trap_zh":"因為有附 clone 編號就替那個勾辯護，或是猜讀了哪一段。也要小心數字漂移：Biomanufacturing 還寫九個 Level 1 模組，Results 的總結說十四個構築，而它總結的那張表其實有十五列。",
"basis":"two pages on main disagree about Level 2 sequencing",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q395"
},
{
"q_en":"A Sanger trace comes back clean for two hundred bases and then every position shows two peaks. What do you conclude, and what do you do next?",
"q_zh":"一段 Sanger 的圖譜前兩百個鹼基很乾淨，之後每一個位置都出現雙峰。你的判斷是什麼，下一步會做什麼？",
"type":"boundary",
"tier":"B",
"deep":1,
"pages":[
"engineering#cloning",
"experiments#colony-pcr"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"two templates, not one mutation",
"indel slips reads apart",
"re-streak, read both strands"
],
"kw_zh":[
"兩個模板，不是一個突變",
"插入缺失讓兩段錯開",
"重畫單菌落、讀兩股"
],
"a_en":"Double peaks from one point onward means two templates, not one mutation. Either the colony was never pure, or the miniprep carries two plasmids, or one copy has an insertion or deletion so the two reads slip out of register from that base on. A single changed base shows as two peaks at one position only. I would re-streak to single colonies, miniprep from one and re-sequence, and read the reverse strand so each junction is covered twice. We have no mixed trace on record, but we do have the case that makes the point: the AmilCP gels gave fragments close to the expected size and sequencing showed they did not carry the construct at all.",
"a_zh":"從某一點開始連續雙峰，意思是有兩個模板，不是一個突變。可能是菌落本來就不純、可能 miniprep 裡有兩種質體，也可能其中一份有插入或缺失，所以兩段讀序從那個鹼基開始錯開。單一個鹼基改變只會在一個位置出現雙峰。我會重新畫單菌落、從其中一個做 miniprep 再送定序，而且讀反向股，讓每個接點被讀到兩次。我們沒有混合圖譜的記錄，但有一個同樣說明問題的案例：AmilCP 的膠給出接近預期大小的片段，定序卻顯示它們根本沒有帶那個構築。",
"trap_en":"Calling it a heterozygous point mutation. Bacteria carrying a multicopy plasmid give a mixed trace from mixed template, and a run of double peaks rather than a single one points at an indel or two plasmids.",
"trap_zh":"說那是異型合子的點突變。帶多拷貝質體的細菌出現混合圖譜是因為模板混了，而且連續雙峰而不是單一個雙峰，指向的是插入缺失或兩種質體。",
"basis":"reading a trace honestly is a skill a judge can test in one minute",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q396"
},
{
"q_en":"Your double digest would catch a Level 2 that lost a whole module. What kind of rearrangement would it still miss, and how would you go after that?",
"q_zh":"你們的雙酶切可以抓到整個模組掉掉的 Level 2。那還有哪一種重排它抓不到，你又要怎麼去找？",
"type":"reason",
"tier":"B",
"deep":1,
"pages":[
"engineering#cloning",
"results#complete-systems"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"junctions survive a duplication",
"digest reads length only",
"long-range PCR or long reads"
],
"kw_zh":[
"重複之後接點還在",
"酶切只讀長度",
"長距離 PCR 或長讀長"
],
"a_en":"It would miss anything that keeps the total length and the cut positions. A duplicated small part, a terminator or a ribosome binding site, moves the plasmid by a few hundred bases on ten kilobases, which a gel against a ten kilobase ladder will not resolve. A junction PCR misses a duplication outright, because a doubled module still has its junction and still gives the band. And a deletion inside a module between the two EcoRI sites changes neither fragment. What I would do is a long-range PCR spanning more than one module, the way we ran the CcaR-forward to Csn-reverse span at 1,424 base pairs, and then long-read sequencing of the whole plasmid.",
"a_zh":"它抓不到那些不改變總長度和切位的情況。一個小零件重複，比如終止子或 RBS，在十個千鹼基上只移動幾百個鹼基，用十千鹼基的 ladder 在膠上看不出來。接點 PCR 則完全抓不到重複，因為重複的模組接點還在、條帶照樣出現。而兩個 EcoRI 位點之間、模組內部的缺失，兩段片段都不會變。我會做的是跨一個模組以上的長距離 PCR，像我們跑的 CcaR forward 到 Csn reverse 那段 1,424 bp，然後對整個質體做長讀長定序。",
"trap_en":"Offering more junction PCRs. More junctions of the same kind add confidence about order and nothing about copy number; the readout has to span a length you can predict, or read the bases.",
"trap_zh":"回答說再多做幾個接點 PCR。同一種接點做再多，只增加對順序的信心，對拷貝數毫無幫助；判讀必須跨過一段你算得出長度的區域，或者直接讀鹼基。",
"basis":"repeated regulatory parts were the team's own stated recombination worry",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q397"
},
{
"q_en":"In your 116-hour run the culture plateaued near forty hours and grew again from about forty-seven. You explain that as the erythromycin degrading and cells losing the plasmid. How would you turn that explanation into a measurement?",
"q_zh":"你們那次 116 小時的運轉，培養在四十小時左右進入平台期，約四十七小時又開始長。你們的解釋是紅黴素降解、細胞開始失去質體。你要怎麼把這個解釋變成一個量測？",
"type":"boundary",
"tier":"A",
"deep":1,
"pages":[
"engineering#bioreactor",
"engineering#cloning",
"results#growth-in-the-reactor"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"plate with and without drug",
"digest plasmid from the end",
"replicon never recorded"
],
"kw_zh":[
"加藥與不加藥各塗一盤",
"把末段的質體拿去酶切",
"複製起點從未記錄"
],
"a_en":"By plating the same sample twice, with and without erythromycin, and taking the ratio at each timepoint. If the fraction of drug-resistant colonies falls as the second growth phase begins, that is segregational loss, and the explanation stands. If the fraction holds, something else is driving it. I would also recover plasmid from the last timepoint and digest it, because losing part of the plasmid is structural instability and reads differently. Our honest position is that this is a theory from one run, not a measurement, and Professor Chang raised plasmid stability independently in September. We also never recorded the replicon type or measured copy number, which is what decides which failure comes first.",
"a_zh":"把同一個樣本塗兩盤，一盤加紅黴素一盤不加，每個時間點取比值。如果抗藥菌落的比例在第二個生長期開始時下降，那就是分離型流失，這個解釋成立。如果比例不變，推動它的是別的東西。我也會把最後一個時間點的質體回收下來做酶切，因為質體掉了一段是結構型不穩定，讀起來不一樣。我們誠實的立場是：這是單一次運轉得到的理論，不是量測，而且 Chang 教授九月也獨立提出過質體穩定性的問題。我們也從來沒有記錄複製起點的類型、沒有量過拷貝數，而那正是決定哪一種失敗會先發生的東西。",
"trap_en":"Guessing a replicon type or a copy number out loud. Neither is on our wiki, and a number invented at the podium is worse than the gap; name the two instability modes and the test for each.",
"trap_zh":"當場猜複製起點的類型或拷貝數。兩個都不在我們的 wiki 上，在台上編一個數字比承認空缺更糟；講清楚兩種不穩定的模式和各自的檢查。",
"basis":"the project's one observed hint of plasmid loss is unmeasured",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q398"
},
{
"q_en":"WB800 has eight extracellular proteases deleted. What does that buy you for a secreted product, what does it cost, and how far do your own data take the comparison with 168?",
"q_zh":"WB800 剔除了八個胞外蛋白酶。這對一個分泌型產物買到了什麼、代價是什麼，而你們自己的數據把跟 168 的比較推進到哪裡？",
"type":"compare",
"tier":"A",
"deep":1,
"pages":[
"engineering#cloning",
"results#electroporation",
"results#overview"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"secreted protein lives outside",
"168 degraded its own product",
"no identical-conditions pair"
],
"kw_zh":[
"分泌蛋白一直在細胞外",
"168 分解自己的產物",
"沒有同條件的對照"
],
"a_en":"They buy survival in the supernatant. A secreted, His-tagged enzyme spends its working life outside the cell wall, exactly where wild-type Bacillus pours proteases, and strain 168 made barely detectable ACC deaminase, probably by degrading its own product. WB800, from Professor Huang, has NprE, AprE, Epr, Bpr, Mpr, NprB, Vpr and WprA deleted, which also makes the protein easier to see on a blot. In practice it is the better host for us: our sheet records countable colonies for WB800 across 2.1 to 2.5 kilovolts and only a handful for 168. The cost is a weaker, more fastidious host, and the comparison is not clean, because the two were never run under identical conditions.",
"a_zh":"它買到的是在上清液裡活下來。一個分泌型、帶 His 標籤的酵素整個工作期間都在細胞壁外面，正好是野生型 Bacillus 倒蛋白酶的地方，而 168 分泌的 ACC deaminase 幾乎測不到，很可能就是自己把產物分解掉了。WB800 是 Huang 教授給的，剔除了 NprE、AprE、Epr、Bpr、Mpr、NprB、Vpr 和 WprA，也讓蛋白在墨點上更容易看到。實務上它對我們是更好的宿主：我們的流程表記錄 WB800 在 2.1 到 2.5 千伏都有可數的菌落，168 只有零星幾個。代價是宿主比較弱、比較挑，而這個比較並不乾淨，因為兩株從來沒有在相同條件下跑過。",
"trap_en":"Comparing the raw colony counts across strains. The high WB800 plates were spread at a 1:2,000,000 dilution and the 168 plates undiluted, and our own figure note says counts are comparable within a group and not across the fill. Our summary also says WB800 and 168 remain untested under identical conditions.",
"trap_zh":"把兩株的菌落數直接拿來比。WB800 高密度的盤是 1:2,000,000 稀釋塗的，168 的盤沒有稀釋，而我們自己的圖註就寫著菌落數只能在同一組內比較、不能跨稀釋比較。我們的總結也寫著 WB800 和 168 在相同條件下仍未測試。",
"basis":"the production strain arrived late and was never benchmarked",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q399"
},
{
"q_en":"Your own learn step says electroporating a Level 2 over ten kilobases was extremely difficult and that you should look at natural transformation instead. Take that seriously for me: what would that route actually require, and would you also move the circuit into the chromosome?",
"q_zh":"你們自己的 learn 寫著，把超過十個千鹼基的 Level 2 電穿孔進去非常困難，未來應該考慮自然轉形。請認真談一下：那條路實際上需要什麼，你們會不會也把電路放進染色體？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"engineering#cloning",
"results#electroporation",
"biomanufacturing"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"competence needs its own window",
"one copy cannot be lost",
"lower dose, slower edits"
],
"kw_zh":[
"competence 有自己的時間窗",
"單一拷貝不會掉",
"劑量低、改得慢"
],
"a_en":"It would require a competence medium and hitting a narrow window late in growth, which is a different protocol from the one we optimised, and we never ran it, so I am reasoning rather than reporting. The attraction is real: a pulse strong enough to push a ten kilobase plasmid through the wall is also what killed our cells, which is why our best voltages dropped to 1.1 kilovolts for the small BoPep4 construct. Integration goes further. A single chromosomal copy cannot be lost by segregation and needs no erythromycin, which is what a week unattended in a field needs. What I lose is gene dose and speed, and our circuit was still being rebuilt in September.",
"a_zh":"那需要 competence 培養液，還要抓到生長後期很窄的時間窗，是跟我們優化過的方法完全不同的流程，而我們從來沒跑過，所以我是在推理，不是在報告。但吸引力是真的：強到能把十千鹼基質體推過細胞壁的電擊，也正是把我們細胞打死的東西，所以小的 BoPep4 構築最佳電壓掉到 1.1 千伏。整合進染色體更進一步。單一染色體拷貝不會因分離而掉，也不需要紅黴素，而那正是在田裡無人照顧一個禮拜需要的。我失去的是基因劑量和速度，而我們的電路到九月還在重建。",
"trap_en":"Saying natural transformation is simply easier. It needs its own medium and timing, it is not obviously better for a replicating ten kilobase plasmid, and nothing on our wiki tests it.",
"trap_zh":"說自然轉形就是比較簡單。它需要自己的培養液和時機，對一個十千鹼基的複製型質體也不見得更好，而且我們 wiki 上沒有任何測試。",
"basis":"the team names the alternative but never tries it",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q400"
},
{
"q_en":"You check every construct with SignalP before ordering it. What are the two things that check is actually for, and what does cleavage leave you with at the mature N-terminus?",
"q_zh":"你們每個構築在下訂之前都會用 SignalP 檢查。那個檢查實際上是為了兩件什麼事，而切割之後成熟蛋白的 N 端剩下什麼？",
"type":"design",
"tier":"A",
"deep":1,
"pages":[
"protein-design/methodology#codon-optimisation",
"results#protectant-release",
"engineering#cloning"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"cleaved where intended",
"no cryptic site inside cargo",
"mature end starts at +1"
],
"kw_zh":[
"切在該切的地方",
"貨物裡沒有隱藏切位",
"成熟端從 +1 開始"
],
"a_en":"Two things. First, that each signal peptide and mature junction is cleaved where we intended, so the released protein has the N-terminus we designed rather than a truncated or extended one. That matters because the mature N-terminal residues carry charge rules affecting secretion efficiency, and one of our substitutions sits in that region. Second, that no cleavage site is cryptically predicted inside the mature sequence, which would cut the protectant itself; a construct that passes structural triage and fails this check is not orderable. After cleavage the ninety-three base SamyQ signal is gone and the protein begins at the plus-one residue. When we made SamyQ codons two to thirty-one editable, we verified the cleavage site unchanged.",
"a_zh":"兩件事。第一，每一個訊號肽和成熟序列的接點都切在我們預期的位置，讓釋放出來的蛋白有我們設計的 N 端，而不是被截短或延長的。這很重要，因為成熟端前幾個殘基帶有影響分泌效率的電荷規則，而我們其中一個取代就在那個區域。第二，成熟序列裡面沒有被預測出隱藏的切位，否則會把保護蛋白本身切斷；一個通過結構篩選卻沒過這個檢查的構築，是不能下訂的。切完之後九十三個鹼基的 SamyQ 訊號就不在了，蛋白從 +1 殘基開始。我們把 SamyQ 第 2 到 31 個密碼子開放可改時，有驗證切位沒有變。",
"trap_en":"Claiming Csn and SamyQ were compared head to head. Both are in the collection, but the only fractionation evidence is the two August blot on a Csn ACC deaminase construct, bands in the supernatant and nothing in either pellet, and no CSN construct was ever assayed beside the optimised one.",
"trap_zh":"說 Csn 和 SamyQ 有正面比較過。兩個都在零件集裡，但唯一的分部證據是 8 月 2 日 Csn-ACC deaminase 構築的墨點，上清有條帶、兩個沉澱都沒有，而且從來沒有把 CSN 構築和優化版放在一起檢測。",
"basis":"the secretion tag is the one part the whole reactor design assumes works",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q401"
},
{
"q_en":"Asn23's free carboxylate is BoPep4's anchor, and you moved the His tag to the N-terminus for constructs ordered after sixteen August. Yet your variant panel is written as carrying a C-terminal tag. Where does that leave the molecule you actually built?",
"q_zh":"Asn23 的游離羧基是 BoPep4 的錨點，而你們 8 月 16 日之後下訂的構築都把 His 標籤移到 N 端。可是你們的變體組又寫成帶 C 端標籤。那你們實際做出來的分子算什麼？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"protein-design/methodology",
"engineering#cloning",
"parts#collection"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"five-contact clamp on Asn23",
"tag occupies the carboxylate",
"our records disagree"
],
"kw_zh":[
"Asn23 上的五點夾持",
"標籤佔住羧基",
"我們的紀錄不一致"
],
"a_en":"Two things. First, that each signal peptide and mature junction is cleaved where we intended, so the released protein has the N-terminus we designed rather than a truncated or extended one. That matters because the mature N-terminal residues carry charge rules affecting secretion efficiency, and one of our substitutions sits in that region. Second, that no cleavage site is cryptically predicted inside the mature sequence, which would cut the protectant itself; a construct that passes structural triage and fails this check is not orderable. After cleavage the ninety-three base SamyQ signal is gone and the protein begins at plus one. When we opened SamyQ codons two to thirty-one, we verified the cleavage site unchanged.",
"a_zh":"答案是還沒定案，而我們自己也這樣寫。Asn23 是被五個接觸夾住的，不是一個鹽橋，而整個界面最短的接觸是它的末端氧對 Arg487 的 2.40 埃。在那裡接上六個組胺酸，那個氧就不再是游離羧基，錨點就沒了，這就是 8 月 16 日之後標籤移到 N 端的原因。但我們自己的紀錄在設計文字裡寫 C 端、在構築表裡寫 N 端，primer 組兩種方向都有。拉力很明顯：anti-His 墨點和 ELISA 是我們唯一的定量判讀，所以讓胜肽看得見的那個標籤，正好是讓它失效的那個。",
"trap_en":"Naming Arg491 as a second anchor. Our own PDBePISA run found it makes no hydrogen bond and no salt bridge at all, buries twelve square angstroms and nothing more, so we stopped scoring models against it.",
"trap_zh":"把 Arg491 說成第二個錨點。我們自己跑的 PDBePISA 顯示它完全沒有氫鍵也沒有鹽橋，只埋了十二平方埃，所以我們不再用它來評分模型。",
"basis":"the tag that makes the peptide measurable is the tag that kills it",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q402"
},
{
"q_en":"Set the biology aside. Your assembly sits on the SubtiToolKit and on eleven earlier Registry parts. What in your cloning work is genuinely new, and what did you simply inherit?",
"q_zh":"先把生物學放一邊。你們的組裝建立在 SubtiToolKit 和十一個前人的 Registry 零件上。在你們的選殖工作裡，哪些是真正新的，哪些只是繼承來的？",
"type":"history",
"tier":"A",
"deep":1,
"pages":[
"parts#built-on",
"parts#collection",
"engineering#cloning"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"kit and syntax inherited",
"thirty-one registered, three draft",
"fusions and devices are ours"
],
"kw_zh":[
"套件和語法是繼承的",
"三十一個註冊、三個草稿",
"融合與裝置是我們的"
],
"a_en":"The standard is inherited and the cargo is ours. The SubtiToolKit, its four Level 1 destination vectors, the shuttle vectors and the four-base syntax all came from outside, and a professor connected to the original paper handed us the kit, which we record as luck rather than planning. The switch is Castillo-Hair's CcaS-CcaR, and we name eleven Registry parts we build on, including Pveg, PliaG, ccaSm3*, CcaR, ho1-pcyA and the ninety-three base SamyQ. What is new is the thirty-one entries we registered this year with three more in draft: the PcpcG2-veg hybrid promoter, the eight secretion fusions, the recoded cassettes, and the two Level 2 devices.",
"a_zh":"標準是繼承的，貨物是我們的。SubtiToolKit、它的四個 Level 1 目標載體、穿梭載體，還有四鹼基的語法，全部來自外面，而且是一位跟原始論文有關係的教授把套件給我們的，我們把那件事記成運氣而不是規劃。開關是 Castillo-Hair 的 CcaS-CcaR，而我們列出十一個建立在上面的 Registry 零件，包含 Pveg、PliaG、ccaSm3*、CcaR、ho1-pcyA 和九十三個鹼基的 SamyQ。新的是我們今年註冊的三十一個條目加三個草稿：PcpcG2-veg 這個混合啟動子、八個分泌融合、重新編碼的卡匣，以及兩個 Level 2 裝置。",
"trap_en":"Claiming the Golden Gate hierarchy as a contribution. The levels, the enzymes and the overhang standard are the kit's; the contribution is the parts put into it, and the failure record of getting them there.",
"trap_zh":"把 Golden Gate 的層級架構說成是自己的貢獻。層級、酶和突出端標準都是套件的；貢獻是放進去的零件，以及把它們放進去那段失敗的記錄。",
"basis":"a judge will ask what is yours and what came in the box",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q403"
},
{
"q_en":"Take me through the phosphorelay itself. Where does the phosphate come from, where does it go, and what happens to it when you take the green light away?",
"q_zh":"請帶我走一遍磷酸傳遞本身。磷酸從哪裡來、傳到哪裡去，綠光移除之後它又怎麼了？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"engineering#the-four-modules",
"parts#light-circuit",
"model#induction-at-one-intensity",
"measurement#optogenetic-control"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"histidine to aspartate",
"PCB shifts conformation",
"rates never measured"
],
"kw_zh":[
"histidine 傳到 aspartate",
"PCB 改變構形",
"速率沒量過"
],
"a_en":"Green light is absorbed by the phycocyanobilin bound to CcaS-m3. That shifts the protein's conformation, and the kinase takes a phosphate off ATP onto a histidine on itself, because CcaS-m3 is a histidine kinase photoreceptor. The phosphoryl group then goes to an aspartate on the receiver domain of CcaR, and phosphorylated CcaR switches into its DNA-binding state and turns on PcpcG2-veg. Switching off is the same chemistry in reverse: red light near 672 nanometres drives CcaS back toward its dark state and phospho-CcaR loses its phosphate, so output decays. Neither rate has been measured on our strain; we take the published Bacillus curve as it stands.",
"a_zh":"綠光被結合在 CcaS-m3 上的 phycocyanobilin 吸收，蛋白的構形改變，kinase 就把 ATP 上的磷酸轉到自己的一個 histidine 上，因為 CcaS-m3 是 histidine kinase 型的光受體。磷酸基接著傳到 CcaR 接收區的 aspartate，磷酸化的 CcaR 轉成能結合 DNA 的狀態，把 PcpcG2-veg 打開。關閉是同一套化學反過來跑：約 672 nm 的紅光把 CcaS 推回暗態，磷酸化的 CcaR 失去磷酸，輸出就衰減。這兩個速率我們都沒有在自己的菌株上量過，Bacillus 的曲線是直接採用文獻的。",
"trap_en":"Saying CcaS-m3 itself binds the promoter, or describing the published kinetics as if the team had measured them.",
"trap_zh":"說 CcaS-m3 自己去結合啟動子，或把文獻的動力學講得像是團隊自己量過的。",
"basis":"tests whether the student owns the chemistry, not the cartoon",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q404"
},
{
"q_en":"Suppose the circuit works tomorrow. What physically sets the floor and the ceiling of what you can get out of PcpcG2-veg?",
"q_zh":"假設電路明天就會動。那麼 PcpcG2-veg 的輸出下限和上限，實際上是由什麼決定的？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"results#what-it-settles",
"model#equations",
"engineering#the-four-modules",
"measurement#optogenetic-control"
],
"seat":"wet1",
"backup":"dry",
"kw_en":[
"red is not silent",
"hybrid promoter fires",
"no plasmid-free lane"
],
"kw_zh":[
"紅光並非完全沉默",
"融合啟動子會啟動",
"沒有無質體對照"
],
"a_en":"The floor is basal transcription, and we have evidence it is not zero: on the light plate the red lane at full power was not silent at eight hours, and red is meant to be the off condition. The output promoter is a hybrid, PcpcG2 fused to veg, so some firing with no signal is expected; dark-state CcaS-m3 also phosphorylates a little, and plasmid copy number multiplies whatever one copy does, which we never measured. The ceiling is saturation. The published half-maximal intensity in Bacillus is 4.66 micromoles per square metre per second, and our lamp ceiling of twenty reaches 0.94 of maximum.",
"a_zh":"下限是基礎轉錄，而我們有證據它不是零：在光盤上，全功率紅光那一道在八小時並不是完全沉默，而紅光本來應該是關的條件。輸出啟動子是融合的，PcpcG2 接上 veg，所以沒有訊號時也會有一些啟動；暗態的 CcaS-m3 也會有一點磷酸化，而 plasmid copy number 會把單套的輸出乘上去，這個我們沒量過。上限是飽和。文獻在 Bacillus 的半飽和光強是 4.66 µmol m⁻² s⁻¹，我們燈的上限二十就已經到最大值的 0.94。",
"trap_en":"Answering only about light intensity, and forgetting that red at full power already gave signal on their own blot.",
"trap_zh":"只談光強度，忘了自己的墨點上全功率紅光本來就有訊號。",
"basis":"dynamic range is a design consequence they can reason about",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q405"
},
{
"q_en":"CcaS, CcaR and PcpcG2 are cyanobacterial. What did you have to change to run them in Bacillus subtilis, and what did you deliberately leave alone?",
"q_zh":"CcaS、CcaR 和 PcpcG2 都來自藍綠菌。要在 Bacillus subtilis 裡跑，你們改了什麼，又刻意不動什麼？",
"type":"compare",
"tier":"A",
"deep":1,
"pages":[
"engineering#the-four-modules",
"parts#light-circuit",
"parts#parts-we-built-on",
"results#the-four-modules"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"no PCB in Bacillus",
"xylose swapped for constitutive",
"proteins unchanged"
],
"kw_zh":[
"Bacillus 沒有 PCB",
"木糖換成持續型",
"蛋白序列不動"
],
"a_en":"Three things changed. The chromophore: Bacillus makes no phycocyanobilin, so the device carries ho1 and pcyA, where Ho1 oxidises the cell's own heme to biliverdin IX-alpha and PcyA reduces that to PCB. The receptor: Castillo-Hair induced the sensor with xylose or IPTG, and we put it behind constitutive Bacillus promoters, PlepA or PliaG, so CcaS-m3 is present all the time and we cannot tune its level the way that paper could. The output promoter is a hybrid, PcpcG2 fused to veg, not the native cyanobacterial promoter. What we left alone is the proteins; CcaS-m3 and CcaR are the published sequences.",
"a_zh":"改了三件事。發色團：Bacillus 不會做 phycocyanobilin，所以裝置要帶 ho1 和 pcyA，Ho1 把細胞自己的 heme 氧化成 biliverdin IXα，PcyA 再還原成 PCB。受體：Castillo-Hair 是用木糖或 IPTG 誘導 sensor，我們把它放在 Bacillus 的持續型啟動子後面，PlepA 或 PliaG，所以 CcaS-m3 一直都在，我們沒辦法像那篇一樣調整它的量。輸出啟動子是融合的，PcpcG2 接上 veg，不是原本藍綠菌的啟動子。沒動的是蛋白本身，CcaS-m3 和 CcaR 用的都是文獻序列。",
"trap_en":"Claiming they redesigned or codon-optimised the sensor proteins; only the regulatory context and the chromophore supply are theirs.",
"trap_zh":"說自己重新設計或密碼子最佳化了 sensor 蛋白；其實只有調控環境和發色團供應是他們做的。",
"basis":"a judge will test whether they know what a port actually involves",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q406"
},
{
"q_en":"Bacillus subtilis runs plenty of its own two-component systems. What stops one of its histidine kinases from phosphorylating CcaR, and how would you find out?",
"q_zh":"Bacillus subtilis 自己就有不少 two-component 系統。有什麼東西能阻止它的 histidine kinase 去磷酸化 CcaR？你們要怎麼查？",
"type":"reason",
"tier":"B",
"deep":1,
"pages":[
"parts#light-circuit",
"results#what-it-settles",
"engineering#the-four-modules"
],
"seat":"wet1",
"backup":"dry",
"kw_en":[
"docking surface specificity",
"phosphodonors lift baseline",
"CcaR-only control"
],
"kw_zh":[
"介面決定專一性",
"磷酸供體抬高基線",
"只帶 CcaR 的對照"
],
"a_en":"Nothing in our design does, and we never tested it. Two-component pairs are mostly kept apart by the docking surface between the kinase and the receiver domain, so a host kinase is usually a poor donor to a foreign regulator, and CcaR's target is a cyanobacterial operator no Bacillus regulator is expected to bind. The worry runs the other way too: small phosphodonors in the cytoplasm can charge a receiver domain and lift the dark baseline, which looks exactly like a leaky promoter. Our own results page already says the blots need a WB800 lane carrying no plasmid. A CcaR-only strain with no CcaS would separate the two.",
"a_zh":"我們的設計裡沒有任何東西在防這件事，而且我們也沒測過。two-component 的配對主要靠 kinase 和接收區之間的介面維持專一性，所以宿主的 kinase 通常不是外來 regulator 的好磷酸供體；而 CcaR 認的是藍綠菌的操作子，應該沒有 Bacillus 的 regulator 會去結合。反方向的疑慮也在：細胞質裡的小分子磷酸供體可以把接收區充電，把暗態基線抬高，看起來就跟啟動子漏表現一樣。我們自己的 Results 頁已經寫了，墨點需要一條不帶質體的 WB800。再做一株只有 CcaR、沒有 CcaS 的菌，就能分開這兩件事。",
"trap_en":"Asserting the system is orthogonal because the parts are foreign, instead of naming the control that would show it.",
"trap_zh":"因為零件是外來的就斷言系統正交，而不是講出能證明的對照。",
"basis":"orthogonality is assumed everywhere and tested nowhere",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q407"
},
{
"q_en":"Your sensor only works with the chromophore attached. How would you show that the CcaS-m3 in your cells is holoprotein and not apoprotein?",
"q_zh":"你們的 sensor 只有接上發色團才會動。你要怎麼證明細胞裡的 CcaS-m3 是 holoprotein，而不是 apoprotein？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"parts#pcb-production",
"engineering#module-1",
"model#induction-at-one-intensity",
"biomanufacturing"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"no PCB measurement",
"bilin absorbance band",
"with and without module"
],
"kw_zh":[
"沒有 PCB 的量測",
"bilin 吸收峰",
"有無模組對照"
],
"a_en":"We cannot show it yet, because there is no phycocyanobilin measurement anywhere in our records. The direct test is spectroscopic: extract the pigment and read its absorbance spectrum, or purify CcaS-m3 and look for the bilin absorbance band that an apoprotein does not have. The cheaper test is comparative: run the same output cassette with the ho1-pcyA module and without it, and feed purified PCB from outside in a third arm. If the response needs the module, the chromophore is doing the work. What we can say today is only cloning: the rebuilt chromophore module gave the expected 1,833 base pairs in eleven of twelve colonies, and clone 1 was sequence-verified.",
"a_zh":"現在還不能證明，因為我們的紀錄裡完全沒有 phycocyanobilin 的量測。直接的做法是光譜：把色素萃取出來讀吸收光譜，或是把 CcaS-m3 純化出來看有沒有 apoprotein 不會有的 bilin 吸收峰。比較省錢的做法是對照：同一個輸出卡匣，一組帶 ho1-pcyA 模組、一組不帶，第三組從外面餵純化的 PCB。如果反應需要這個模組，就是發色團在做事。今天我們能講的只有選殖：重建後的發色團模組在十二個菌落中有十一個出現預期的 1,833 bp，clone 1 定序確認過。",
"trap_en":"Treating a sequence-verified ho1-pcyA module as proof that PCB is made and loaded onto the sensor.",
"trap_zh":"把 ho1-pcyA 模組定序確認當成 PCB 已經做出來並裝到 sensor 上的證據。",
"basis":"the chromophore is the one component with no readout at all",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q408"
},
{
"q_en":"If phycocyanobilin runs short in the cell, what happens to your switch? And why might it run short?",
"q_zh":"如果細胞裡的 phycocyanobilin 不夠，你們的開關會怎樣？又為什麼可能不夠？",
"type":"boundary",
"tier":"A",
"deep":1,
"pages":[
"engineering#the-four-modules",
"parts#pcb-production",
"model#induction-at-one-intensity"
],
"seat":"wet1",
"backup":"plant",
"kw_en":[
"apo cannot sense",
"curve shifts right",
"heme is shared"
],
"kw_zh":[
"apo 感不到光",
"曲線往右移",
"heme 是共用的"
],
"a_en":"If PCB is short, part of the CcaS-m3 pool is apoprotein and cannot sense light at all. The sensing population shrinks, so the same green intensity gives less output and the dose-response looks shifted and less sensitive than the published curve. In the limit the promoter only reports its own basal activity, so the switch looks dead rather than leaky, which is a different diagnosis. It can run short because PCB comes from the cell's own heme: Ho1 and PcyA compete with the cytochromes and the catalases for that pool, and the cell needs heme to respire. Pulling hard on it is itself a burden. We have measured neither PCB nor heme.",
"a_zh":"如果 PCB 不夠，一部分 CcaS-m3 就是 apoprotein，根本感不到光。能感光的比例變小，所以同樣的綠光強度輸出會變少，劑量反應看起來往右移、比文獻曲線不敏感。極端情況下啟動子只反映自己的基礎活性，開關看起來是壞掉而不是漏，這是完全不同的診斷。會不夠的原因是 PCB 來自細胞自己的 heme：Ho1 和 PcyA 要跟 cytochrome、catalase 搶同一個池子，而細胞呼吸也需要 heme，拉太兇本身就是負擔。PCB 和 heme 我們都沒量過。",
"trap_en":"Saying the switch would get leaky. Chromophore limitation kills the ON state; it does not raise the OFF state.",
"trap_zh":"說開關會變漏。發色團不足是壓掉 ON，不是把 OFF 拉高。",
"basis":"distinguishes a sensitivity failure from a leak failure",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q409"
},
{
"q_en":"You put CcaR on Pveg and CcaS-m3 on PliaG or PlepA, which are not the same strength. Why that way round, and what breaks if the ratio is wrong?",
"q_zh":"你們把 CcaR 放在 Pveg、CcaS-m3 放在 PliaG 或 PlepA，這幾個強度不一樣。為什麼這樣配？比例錯了會壞在哪裡？",
"type":"design",
"tier":"A",
"deep":1,
"pages":[
"parts#parts-we-built-on",
"parts#light-circuit",
"engineering#four-modules-into-one-plasmid"
],
"seat":"wet1",
"backup":"dry",
"kw_en":[
"regulator in excess",
"PliaG is weak",
"both versions carried"
],
"kw_zh":[
"regulator 要過量",
"PliaG 比較弱",
"兩個版本都留"
],
"a_en":"The regulator has to be the one in excess, so CcaR sits behind Pveg, the promoter we use for everything we want constantly on, and the receptor sits behind a weaker one; our parts page calls PliaG the weak constitutive promoter the light-sensing unit is deposited behind. With too little CcaR the kinase saturates the regulator pool and you lose the top of the range, because more light cannot make more phospho-CcaR. With too much kinase for the regulator the floor rises, because dark-state phosphorylation scales with how much kinase is there. We could not predict the ratio, so both receptor versions were built, and without a graded induction curve we cannot choose between them.",
"a_zh":"需要過量的是 regulator，所以 CcaR 放在 Pveg 後面，那是我們用來讓東西一直開著的啟動子；受體則放在比較弱的後面，我們 Parts 頁就把 PliaG 寫成光感測單元登錄時所用的弱型持續啟動子。CcaR 太少的話，kinase 會把 regulator 池子打飽，範圍的上端就不見了，因為再加光也生不出更多磷酸化的 CcaR。kinase 相對太多的話，下限會被抬起來，因為暗態磷酸化跟 kinase 的量成正比。我們沒辦法事先算出比例，所以兩個受體版本都做了；沒有分級的誘導曲線之前沒辦法選。",
"trap_en":"Saying stronger is always better, or treating the two promoters as a redundancy measure rather than an untested variable.",
"trap_zh":"說越強越好，或把兩個啟動子當成備援，而不是一個還沒測的變數。",
"basis":"stoichiometry is the classic two-component failure mode",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q410"
},
{
"q_en":"Your device puts four transcription units on one plasmid, and you deliberately diversified the RBS and terminator in module one. What does a construct that size cost the host, and what in your own data speaks to it?",
"q_zh":"你們的裝置把四個轉錄單元放在同一個質體上，還刻意把模組一的 RBS 和終止子換掉。這麼大的構築對宿主的代價是什麼？你們自己的數據裡有什麼能講這件事？",
"type":"reason",
"tier":"B",
"deep":1,
"pages":[
"engineering#four-modules-into-one-plasmid",
"biomanufacturing",
"hardware#diopal",
"software#the-registered-prediction"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"10,293 base pairs",
"0.279 to 0.317",
"same plasmid every arm"
],
"kw_zh":[
"10,293 個鹼基對",
"0.279 到 0.317",
"每組都同一質體"
],
"a_en":"Four units on one replicon means four promoters competing for the same polymerase and ribosome pool, plus replicating 10,293 base pairs at whatever copy number it sits at, and the resistance marker on top. Our design argument is that gating the cargo on light lowers that burden while the plants are not stressed, but that is a design claim with no measurement behind it. The only growth data is the 19 September light plate: six arms at 0.279 to 0.317 per hour, all within one standard error. That is not a burden measurement, because every arm carried the same plasmid, and our hardware page says light leaked between wells, so those arms are not comparable anyway.",
"a_zh":"四個單元在同一個複製子上，就是四個啟動子搶同一池 polymerase 和 ribosome，再加上要複製 10,293 個鹼基對（不管它的 copy number 是多少），還有抗性標記。我們的設計論點是把 cargo 用光控住，在植物沒受壓的時候可以降低這個負擔，但那是設計上的說法，背後沒有量測。唯一的生長數據是 9 月 19 日的光盤：六組在 0.279 到 0.317 每小時，全部落在一個標準誤內。那不是負擔的量測，因為六組帶的是同一個質體，而且我們 Hardware 頁說孔之間有漏光，所以那幾組本來就不能互相比較。",
"trap_en":"Quoting the six light arms as proof the plasmid is not a burden; those arms share one plasmid and leaked light into each other.",
"trap_zh":"拿那六組當作質體沒有負擔的證據；那六組帶同一個質體，而且孔間還漏光。",
"basis":"they have growth data that does not answer the burden question",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q411"
},
{
"q_en":"Your light plate shines up through a two millilitre tube. The reactor is a stirred loop whose culture reaches OD600 of 3.8. What does green light actually do in there?",
"q_zh":"你們的光盤是從下面打進 2 mL 的試管。反應器是攪拌的迴路，培養液 OD600 會到 3.8。綠光在裡面到底會發生什麼事？",
"type":"integrate",
"tier":"A",
"deep":1,
"pages":[
"software#what-is-not-in-the-twin",
"results#the-102-4-hour-run",
"hardware#bioreactor",
"hardware#diopal"
],
"seat":"wet1",
"backup":"hw",
"kw_en":[
"light is surface flux",
"not measured in culture",
"no green on reactor"
],
"kw_zh":[
"光是表面通量",
"培養液裡沒量",
"反應器沒有綠光"
],
"a_en":"It does not reach the cells the same way. Light is a surface flux, so dose per cell falls as the culture thickens, and at OD close to four most of the green is absorbed and scattered in a thin layer near the wall while the cells in the middle sit in the dark condition. Our digital twin page lists exactly this among what is missing: induction light in the culture is not measured, and a dense culture will dim it by an amount nothing on the bioreactor reads. It also says green light is not built into the bioreactor at all, only onto the light plate. Scaling means a thin illuminated path or an illuminated side loop.",
"a_zh":"它不會以同樣的方式到達細胞。光是表面通量，培養液越濃，每個細胞拿到的劑量越少；OD 接近四的時候，大部分綠光在靠壁的薄層就被吸收散射掉，中間的細胞其實在暗態。我們 Digital Twin 頁的缺口清單就寫了這一條：培養液裡的誘導光沒有被量測，而高密度培養的變暗程度是反應器上沒有任何東西在讀的。那一頁也寫了綠光根本沒有裝在反應器上，只裝在光盤上。要放大就得用薄的光程，或者做一條被照光的旁路。",
"trap_en":"Treating the light plate result as transferable to the reactor, or forgetting the reactor has no induction light at all.",
"trap_zh":"把光盤的結果直接當成可以搬到反應器，或忘了反應器根本沒有誘導光源。",
"basis":"the light plate and the reactor are different optical problems",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q412"
},
{
"q_en":"CcaS and CcaR have been used by other teams and are published as a Bacillus toolkit. What did ReLEAF add beyond re-using them?",
"q_zh":"CcaS 和 CcaR 其他團隊用過，也已經有發表成 Bacillus 的工具組。ReLEAF 除了沿用之外，加了什麼？",
"type":"history",
"tier":"A",
"deep":1,
"pages":[
"contribution#parts",
"parts#parts-we-built-on",
"parts#the-collection",
"hardware#diopal"
],
"seat":"wet1",
"backup":"biz",
"kw_en":[
"eleven parts reused",
"output side is new",
"characterisation is missing"
],
"kw_zh":[
"沿用十一個零件",
"輸出端是新的",
"缺的是 characterisation"
],
"a_en":"The switch itself is not our contribution and I would not claim it. Castillo-Hair's group characterised CcaSR in Bacillus, and our thirty-one registered entries are assembled from eleven Registry entries deposited by earlier teams and by the SubtiToolKit, CcaR, ccaS-m3 and the ho1-pcyA operon among them. What is new is the output side: the secretion fusions with their His tags, the codon-optimised AcdS 2.1, fourteen constitutive cassettes that give the light-gated version a benchmark, two complete Level 2 devices, and a microscale ACC deaminase activity assay. The light plate is also a published design; we added the dual-wavelength column layout and LEDs matched by measured output. Characterisation is what we did not add.",
"a_zh":"開關本身不是我們的貢獻，我也不會那樣講。Castillo-Hair 的團隊已經在 Bacillus 裡 characterise 過 CcaSR，而我們登錄的三十一個條目是用十一個先前團隊與 SubtiToolKit 登錄的零件組起來的，CcaR、ccaS-m3 和 ho1-pcyA operon 都在裡面。新的是輸出端：帶 His tag 的分泌融合、密碼子最佳化的 AcdS 2.1、十四個持續表現卡匣作為光控版的對照基準、兩個完整的 Level 2 裝置，還有一套微量的 ACC deaminase 活性檢測。光盤也是已發表的設計，我們加的是雙波長的欄位排列和依實測輸出配對的 LED。我們沒有加上的就是 characterisation。",
"trap_en":"Claiming the light switch as an original contribution, or giving part counts without naming what is reused.",
"trap_zh":"把光開關說成原創貢獻，或只報零件數量而不講哪些是沿用的。",
"basis":"positioning against prior art the judges already know",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q413"
},
{
"q_en":"Your whole project is light-controlled production. Tell me precisely what your green-versus-red data establish, and what they do not.",
"q_zh":"你們整個專案是光控生產。請精確告訴我，綠光對紅光的數據證明了什麼、又沒有證明什麼？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"results#protein-over-time",
"results#what-it-settles",
"measurement#optogenetic-control",
"hardware#diopal"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"rises with time",
"not with intensity",
"red not silent"
],
"kw_zh":[
"隨時間上升",
"不隨強度排序",
"紅光並非沉默"
],
"a_en":"We have a light response, and it is not a graded one. Bands rise with time under green at every intensity, but they do not order themselves by intensity: green at 2 per cent was faint until six hours, while green at 12 per cent at eight hours was the strongest green lane, and red at full power was not silent at eight hours either. The ELISA on the 13 and 16 hour pair puts green above red by 1.1 and 0.4 micrograms per millilitre, two samples a side with overlapping ranges. The 19 September plate also leaked light between wells, so those arms are not comparable as doses. Light-dependent regulation is unverified.",
"a_zh":"我們有光反應，但不是分級的反應。綠光下每個強度的條帶都隨時間增強，可是沒有按強度排序：綠光 2% 到六小時前都很淡，綠光 12% 在八小時反而是綠光各道裡最強的，而全功率紅光在八小時也不是沉默的。13 和 16 小時那一對用 ELISA 讀出綠光比紅光高 1.1 和 0.4 µg/mL，但每邊只有兩個樣本，範圍還重疊。9 月 19 日那塊盤子孔之間還有漏光，所以那幾組不能當成劑量來比較。光依賴的調控還沒有被驗證。",
"trap_en":"Overclaiming from the ELISA pair. It compares full green against full red, so it says nothing about the graded series.",
"trap_zh":"拿 ELISA 那一對講太多。它比的是全功率綠對全功率紅，對分級系列什麼都沒講。",
"basis":"the central claim of the project, and the data are nearly there",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q414"
},
{
"q_en":"Your constitutive blot puts ACC deaminase at about 37 kilodaltons, but the light-plate bands run between 63 and 100. Why, and how would you settle it?",
"q_zh":"你們持續表現的墨點把 ACC deaminase 放在約 37 kDa，但光盤的條帶跑在 63 到 100 之間。為什麼？要怎麼確定？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"results#protein-over-time",
"measurement#optogenetic-control",
"results#protein-expression",
"results#protectant-release"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"37 kDa on constitutive",
"63 to 100 light plate",
"dimer only a possibility"
],
"kw_zh":[
"持續型 37 kDa",
"光盤 63 到 100",
"二聚體只是可能"
],
"a_en":"The constitutive blot sits where it should: one band at about 37 kilodaltons in the supernatant, which is the size the secreted construct predicts. The light-plate blots are the problem. Against a monomer of about 35 kilodaltons, the ABDI bands ran near the 63 to 75 kilodalton markers and the ABDQ band between 75 and 100. Our own suggestion is a homodimer around 70 kilodaltons, and we label that a possibility, not a finding; our measurement page says the same, that identity is not settled by size alone. Settling it means re-running with fresh reducing agent and full denaturation, a positive control lane, and the expected mass computed from the fusion sequence.",
"a_zh":"持續表現那張墨點落在該落的位置：上清液中一條約 37 kDa，正是分泌型構築預期的大小。問題在光盤的墨點。單體大約 35 kDa，但 ABDI 的條帶跑在 63 到 75 kDa 標記附近，ABDQ 的條帶在 75 到 100 之間。我們自己提出的解釋是約 70 kDa 的同源二聚體，而我們標明那是一種可能、不是結論；Measurement 頁也寫了一樣的話，光靠大小不能確定身分。要確定就得換新的還原劑、確實變性再跑一次，帶一條陽性對照，並且用融合序列算出的預期質量去對。",
"trap_en":"Stating the dimer as the explanation. The wiki calls it a possibility and promises validation, and the student should too.",
"trap_zh":"把二聚體講成就是答案。wiki 說那是一種可能、要再驗證，學生也該這樣講。",
"basis":"a band twice the expected size needs an answer, not a guess",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q415"
},
{
"q_en":"You built reporter cassettes so you could read the switch out quickly. What happened to them, and what did that cost you?",
"q_zh":"你們做了報導基因卡匣，本來是為了快速讀出開關的狀態。後來怎麼了？這讓你們付出什麼代價？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"results#the-chromoprotein-reporter",
"engineering#amilcp",
"engineering#gana-gala"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"right band wrong clone",
"AmilCP folds too fast",
"galactosidase never cloned"
],
"kw_zh":[
"條帶對選殖株不對",
"AmilCP 摺疊太快",
"半乳糖苷酶沒選殖成功"
],
"a_en":"Both failed, and both failed at cloning. AmilCP was chosen because a blue-purple colony can be judged by eye and then quantified on a plate reader. Gels gave fragments close to the expected size, but sequencing showed they did not carry the construct, and after repeated attempts with different chromoproteins we stopped. That taught us a band of the right length cannot tell a correct clone from an incorrect one. The galactosidase arm was a seven-part reaction with two redesigns, a 24-colony screen and a repeat, and no sequence-verified clone either. We also think AmilCP folds too fast inside the cell to secrete well through Sec. The cost is that every readout became a blot.",
"a_zh":"兩個都失敗，而且都是在選殖這一步失敗。選 AmilCP 是因為藍紫色的菌落可以用眼睛判斷，再用吸光度定量。膠上出現接近預期大小的片段，但定序顯示它們並沒有帶我們要的構築，換過不同的色素蛋白反覆嘗試之後我們就停了。這教了我們一件事：長度對的條帶沒辦法分辨選殖株對不對。半乳糖苷酶那一組是七個零件的反應、改了兩次設計，篩了 24 個菌落還重做一次，也沒有定序確認的選殖株。我們也認為 AmilCP 在細胞內摺疊太快，不容易經 Sec 分泌出去。代價就是每個讀出都變成墨點。",
"trap_en":"Describing the kit's sfGFP dropout as their circuit reporter; that is a cloning screen, not a readout of PcpcG2.",
"trap_zh":"把 kit 的 sfGFP dropout 說成他們的電路報導基因；那是選殖篩選，不是 PcpcG2 的讀出。",
"basis":"the fast readout failed, and that shaped every later experiment",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q416"
},
{
"q_en":"Name the experiment that would turn your light response into a control signal, in enough detail that I could run it tomorrow.",
"q_zh":"請講出一個能把你們的光反應變成控制訊號的實驗，細節要夠到我明天就能做。",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"results#what-it-settles",
"hardware#diopal",
"development#produce",
"measurement#optogenetic-control"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"fix the light leak",
"convert lux to flux",
"loading control and blank"
],
"kw_zh":[
"先修漏光",
"lux 換成光子通量",
"載量對照與空白"
],
"a_en":"Three fixes, then the intensity run. First the hardware: the 19 September plate leaked light between wells through the white tube holder, so the arms cannot be read as doses, and the rebuilt black holder has not been re-tested. Second the units: every reading we have is in lux, which is weighted for human vision, so until it is converted to photon flux our tiers cannot be placed on the published dose scale where the half-maximal intensity is 4.66. Third the blot: quantify it against a loading control and add a WB800 lane with no plasmid. Then repeat the dose series. Our results page calls this the most important next step.",
"a_zh":"三個修正，然後才是強度實驗。第一是硬體：9 月 19 日那塊盤子透過白色試管架在孔之間漏光，所以那幾組不能當劑量讀，而重做的黑色架子還沒再測過。第二是單位：我們所有讀值都是 lux，那是依人眼加權的，在換成光子通量之前，我們的強度階沒辦法放到文獻那個半飽和光強 4.66 的劑量尺度上。第三是墨點：用載量對照把它定量，再加一條不帶質體的 WB800。然後把劑量系列重做一次。我們 Results 頁就把這件事列為最重要的下一步。",
"trap_en":"Jumping to more replicates. The leak and the lux-to-photon-flux conversion have to be fixed before a replicate means anything.",
"trap_zh":"直接說要多做重複。漏光和 lux 換算到光子通量沒解決之前，重複沒有意義。",
"basis":"judges reward a specific closing experiment over an apology",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q417"
},
{
"q_en":"Your blots and your ELISA both read a whole culture at once. What could that miss entirely?",
"q_zh":"你們的墨點和 ELISA 都是一次讀整個培養液。這樣可能完全漏掉什麼？",
"type":"reason",
"tier":"B",
"deep":1,
"pages":[
"results#protein-expression",
"results#the-chromoprotein-reporter",
"measurement#optogenetic-control"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"mean hides histogram",
"copy number varies",
"no fluorescent reporter"
],
"kw_zh":[
"平均值藏住分布",
"copy number 不一",
"沒有螢光報導基因"
],
"a_en":"The shape of the population. If only part of the culture responds, a bulk reading at ten per cent of maximum looks identical to every cell sitting at ten per cent, and those have opposite fixes: one is plasmid stability or chromophore loading in a subpopulation, the other is sensitivity across the whole culture. Plasmid-borne circuits are the classic case, because copy number varies cell to cell and cells that lost the plasmid still scatter light and still count in OD600. Telling them apart needs single cells, a fluorescent reporter on a flow cytometer. We had no materials for fluorescent reporters, and both chromoprotein reporters failed to clone.",
"a_zh":"族群的分布形狀。如果只有一部分細胞有反應，整體讀到最大值的百分之十，跟每個細胞都在百分之十，看起來完全一樣，但解法剛好相反：一個是某個子族群的質體穩定性或發色團裝載問題，另一個是整個培養液的敏感度問題。質體上的電路最典型，因為 copy number 細胞之間本來就不一樣，而掉了質體的細胞一樣會散射光、一樣算進 OD600。要分辨就得看單細胞，用螢光報導基因搭配流式細胞儀。我們沒有做螢光報導基因的材料，而兩個色素蛋白報導基因又都沒有選殖成功。",
"trap_en":"Answering only 'we would need more replicates'. Replicates of a mean are still means.",
"trap_zh":"只回答「要多做重複」。重複多次的平均值還是平均值。",
"basis":"bulk readouts cannot see an all-or-none population",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q418"
},
{
"q_en":"Suppose you set up a Level 1 Golden Gate reaction and forgot to add the BsaI, but everything else went in and you plated it as usual. What would you expect on the plate and on the colony PCR gel, and why?",
"q_zh":"假設你們做 Level 1 Golden Gate，忘了加 BsaI，其他東西都加了，照平常方式塗盤。你預期平板上和菌落 PCR 的膠上會看到什麼？為什麼？",
"type":"reason",
"tier":"B",
"deep":1,
"pages":[
"engineering",
"parts",
"results"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"no cut, no new ends",
"parent vector still transforms",
"every lane at empty size"
],
"kw_zh":[
"沒切就沒有新末端",
"原始載體照樣轉形",
"每一道都是空載體大小"
],
"a_en":"I would expect colonies, and all of them wrong. Without BsaI nothing is cut, so T4 ligase has no new ends to join. The only intact circle in the tube is the pSTK-1 destination vector, which still carries its sfGFP dropout and its ampicillin marker, so it transforms DH5 alpha and grows perfectly well. On the colony PCR gel every lane would sit at the empty vector size, which is one of the outcomes we already score as negative. It would look very like our first MoClo screen, where the bands sat at one height across almost every lane. We have not run that control, so this is a prediction.",
"a_zh":"我預期會長菌落，而且全是錯的。沒有 BsaI 就沒有東西被切開，T4 ligase 也就沒有新末端可以接。管子裡唯一完整的環就是 pSTK-1 目標載體，它還帶著自己的 sfGFP dropout 和 ampicillin 抗性，所以照樣轉進 DH5 alpha 並長得很好。菌落 PCR 的膠上，每一道都會落在空載體的大小，那正是我們本來就判為陰性的結果之一。看起來會很像我們第一次 MoClo 的篩選，幾乎每一道的帶都在同一個高度。這個對照我們沒有做過，所以這是推論。",
"trap_en":"Saying there would be no colonies. The uncut destination vector carries its own resistance marker, so colonies do appear; it is the band size, not the plate, that gives the mistake away.",
"trap_zh":"回答說不會長菌落。沒被切的目標載體自己就帶抗性基因，所以還是會長；真正露出破綿的是帶的大小，不是平板。",
"basis":"reasoning question; no answer written on the wiki",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q419"
},
{
"q_en":"Imagine a single extra base slipped into codon five of the SamyQ signal peptide during PCR. What would your anti-His blot and your Level 0 colony PCR each show, and which step in your workflow catches it?",
"q_zh":"假設 PCR 時在 SamyQ 訊號肽的第五個密碼子多插進一個鹼基。你的 anti-His blot 和 Level 0 菌落 PCR 各會顯示什麼？你們流程裡哪一步會抓到它？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"protein-design",
"engineering",
"results"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"plus one shifts everything after",
"no tag, no band",
"only sequencing sees it"
],
"kw_zh":[
"多一個就全部位移",
"沒有標籤就沒有帶",
"只有定序看得到"
],
"a_en":"The blot would show nothing at all, not a smaller band. SamyQ is thirty-one codons, so one extra base at codon five throws every codon after it out of frame, including the six-histidine tag at the end, and a random frame hits a stop codon within a few dozen codons. No tag means no anti-His signal and no mature protectant. The colony PCR is useless here: our BoPep4 Level 0 screen runs at five hundred and thirty-six base pairs, and five hundred and thirty-seven runs in the same place on agarose. Only the Level 0 sequencing catches it, which is why that step was added.",
"a_zh":"Blot 上會完全沒有訊號，不是出現一條比較小的帶。SamyQ 是三十一個密碼子，第五個密碼子多一個鹼基，後面每一個密碼子都位移了，包含結尾的六個組胺酸標籤；而隨機讀框通常幾十個密碼子內就會撞到終止密碼子。沒有標籤就沒有 anti-His 訊號，也沒有成熟的保護蛋白。菌落 PCR 在這裡沒有用：我們 BoPep4 的 Level 0 篩選是 536 bp，537 bp 在膠上就是同一個位置。只有 Level 0 定序抓得到，這也正是當初加上那一步的理由。",
"trap_en":"Predicting a band at a slightly lower molecular weight, as if a frameshift truncated the protein cleanly. A frameshift scrambles everything downstream, so the epitope the antibody needs is simply not there.",
"trap_zh":"預期會出現一條分子量稍低的帶，好像位移只是把蛋白乾淨地截短。位移會把下游整段打亂，抗體要認的抗原決定位根本不存在。",
"basis":"derive it in the room; nothing written down for this case",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q420"
},
{
"q_en":"You run a Level 1 assembly with a pSTK-0C donor and a pSTK-1 destination, and by mistake you plate on chloramphenicol instead of ampicillin. What grows, and what will your screen tell you?",
"q_zh":"你用 pSTK-0C 的供給質體和 pSTK-1 目標載體做 Level 1 組裝，結果誤塗在 chloramphenicol 而不是 ampicillin 的盤上。什麼會長起來？你的篩選又會告訴你什麼？",
"type":"reason",
"tier":"B",
"deep":1,
"pages":[
"engineering",
"parts"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"cam selects the donor",
"assembly sits on amp",
"screen primers give nothing"
],
"kw_zh":[
"cam 選到的是供給質體",
"組裝好的在 amp 上",
"篩選引子沒有產物"
],
"a_en":"Chloramphenicol selects the donor, not the assembly. Our pSTK-0 entry vectors are chloramphenicol resistant and the Level 1 destination vectors, 1A to 1D, are ampicillin resistant. So that plate grows leftover uncut donor plasmid carried over from the reaction and nothing that was actually assembled. I would get colonies, and the Level 1 screening primers would give no product in any of them, because the Level 1 junction is not in those cells at all. The fix is to restreak on ampicillin. This is the same marker logic that made us drop pGEM-T Easy, which shared ampicillin with the destination.",
"a_zh":"Chloramphenicol 選到的是供給質體，不是組裝產物。我們的 pSTK-0 entry vector 帶 chloramphenicol 抗性，Level 1 的目標載體 1A 到 1D 帶 ampicillin 抗性。所以那盤長出來的是反應裡沒被切掉的供給質體，不是真正組裝好的東西。會有菌落，但用 Level 1 篩選引子在任何一株都跑不出產物，因為那些細胞裡根本沒有 Level 1 的接點。處理方式就是重新劃到 ampicillin 盤上。這跟我們當初放棄 pGEM-T Easy 的標記邏輯一樣，它和目標載體共用 ampicillin。",
"trap_en":"Assuming the plate is simply dead and reporting no colonies. The donor plasmid is chloramphenicol resistant, so the plate fills with the wrong cells, which misleads more than an empty plate would.",
"trap_zh":"以為那盤就是不會長、回答沒有菌落。供給質體本身就帶 chloramphenicol 抗性，所以盤上滿是錯的細胞，比空盤更容易誤導人。",
"basis":"no wiki answer; worked out from the team's own marker map",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q421"
},
{
"q_en":"Your no-DNA negative control plate comes up as a lawn. Give me the two most likely causes and the one experiment that tells them apart.",
"q_zh":"你們不加 DNA 的陰性對照盤長成一片菌毯。說出兩個最可能的原因，以及一個可以分辨它們的實驗。",
"type":"reason",
"tier":"B",
"deep":1,
"pages":[
"engineering",
"experiments"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"plate not selecting",
"cells or medium contaminated",
"streak a plasmid-free strain"
],
"kw_zh":[
"盤沒有在篩選",
"細胞或培養液被污染",
"劃一株沒有質體的菌"
],
"a_en":"Either the plate is not selecting or something resistant got in. Ampicillin plates lose potency with age, and once a few resistant cells grow they release beta-lactamase and clear the drug around them, which gives you a lawn or a fog of satellites. The other case is contamination of the competent cells or the recovery medium. One experiment separates them. Streak plasmid-free DH5 alpha from the freezer onto the same plate batch, and in parallel plate the recovery medium on its own. If the plasmid-free strain grows, the plates failed. If only the medium plate grows, the medium is the problem.",
"a_zh":"要嘛那盤沒有在篩選，要嘛有帶抗性的東西進去了。Ampicillin 盤放久會失效，而且只要先長出幾顆抗性菌，它們釋出的 beta-lactamase 會把周圍的藥分解掉，就會變成一片菌毯或一團衛星菌落。另一種情況是勝任細胞或回復培養液被污染。一個實驗就能分辨：從冷凍管拿沒有質體的 DH5 alpha 劃到同一批盤上，同時單獨把回復培養液塗一盤。如果沒有質體的菌長起來，就是盤壞了；如果只有培養液那盤長，就是培養液的問題。",
"trap_en":"Blaming the enzyme or the ligation. A no-DNA control contains no DNA at all, so nothing about the assembly chemistry can explain growth on it.",
"trap_zh":"把問題歸到酵素或接合反應。不加 DNA 的對照裡根本沒有 DNA，組裝反應的化學完全解釋不了它為什麼會長。",
"basis":"standard bench diagnosis; the wiki never describes this failure",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q422"
},
{
"q_en":"Your light-plate blots put the ACC deaminase band near 70 kDa when the monomer is about 35, and you offer a homodimer as the explanation. What else could put a band there, and what would settle it?",
"q_zh":"你們光照板的 blot 把 ACC deaminase 的帶放在接近 70 kDa，而單體大約是 35 kDa，你們提出同源二聚體作為解釋。還有什麼可能造成那條帶？要怎麼定案？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"results",
"measurement",
"parts"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"seventy is twice thirty-five",
"dimer or duplicated cargo",
"August blot ran monomer"
],
"kw_zh":[
"70 是 35 的兩倍",
"二聚體或重複插入",
"八月那張是單體"
],
"a_en":"Seventy is almost exactly twice thirty-five, so whatever it is behaves like two copies, and that doubling is the whole clue. A dimer that survives SDS means the sample was not fully denatured, so under-boiling or tired reducing agent would do it. A duplicated cargo from the Golden Gate step would do it too. But our own August fractionation blot put the secreted enzyme at thirty-five to forty kilodaltons, and that is the same protein, which argues for sample handling rather than the construct. To settle it, re-boil with fresh reducing agent and run a plasmid-free WB800 lane beside it.",
"a_zh":"70 幾乎正好是 35 的兩倍，所以不管那是什麼，它的行為就像兩份，而「剛好兩倍」就是關鍵線索。能在 SDS 下存活的二聚體，表示樣品沒有完全變性，煮不夠或還原劑放壞了都會這樣。Golden Gate 接出重複的貨物也會。但我們八月自己那張分層 blot 把分泌出來的酵素放在 35 到 40 kDa，那是同一個蛋白，這比較支持樣品處理的問題，而不是構築的問題。要定案就用新的還原劑重新煮沸再跑一次，旁邊加一道不帶質體的 WB800。",
"trap_en":"Accepting the dimer because the arithmetic works. Two copies fits a dimer, a duplication and an incompletely denatured sample equally well, and these blots carry no plasmid-free lane to exclude a host band.",
"trap_zh":"因為數字剛好就接受二聚體的說法。兩份同樣符合二聚體、重複插入和沒有完全變性的樣品，而這些 blot 也沒有不帶質體的對照道可以排除宿主的帶。",
"basis":"the wiki names one possibility and leaves the reasoning open",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q423"
},
{
"q_en":"Suppose you repeat the August fractionation and this time the ACC deaminase sits in the pellet lanes with a blank supernatant. What are the two most likely causes, and how would you tell which it is?",
"q_zh":"假設你重做八月那次分層實驗，這次 ACC deaminase 出現在沉澱道、上清液是空白。兩個最可能的原因是什麼？你要怎麼判斷是哪一個？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"results",
"protein-design",
"engineering"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"Sec saturated by constitutive load",
"signal peptide not cut",
"compare the band sizes"
],
"kw_zh":[
"持續表現把 Sec 塞住",
"訊號肽沒被切掉",
"比較兩條帶的大小"
],
"a_en":"Either the Sec pathway is saturated or the signal peptide is not being cut. On a constitutive promoter the cell can make precursor faster than the translocase clears it, and unexported precursor stays inside, which puts it in the pellet. The other case is cleavage failing, which leaves the protein tethered at the membrane. The sizes separate them. A precursor still carries the thirty-one residue signal peptide, roughly three kilodaltons, so it runs heavier than the thirty-five to forty we see in the supernatant. Same size in the pellet means it was made and never exported; heavier means the peptide was not cut.",
"a_zh":"要嘛 Sec 路徑被塞住，要嘛訊號肽沒被切掉。在持續型啟動子下，細胞做前驅蛋白的速度可能快過轉位酶清掉它，沒送出去的前驅蛋白留在細胞內，就會落在沉澱裡。另一種情況是切割失敗，蛋白被卡在細胞膜上。用大小就能分辨：前驅蛋白還帶著三十一個胺基酸的訊號肽，大約三 kDa，所以會比我們在上清液看到的 35 到 40 kDa 跑得高。沉澱裡的大小一樣，就表示做出來但沒送出去；比較大，就表示訊號肽沒被切。",
"trap_en":"Calling it a dead construct. A pellet band means the protein was made, so the failure is export or cleavage, which are different problems with different fixes.",
"trap_zh":"說構築是壞的。沉澱裡有帶就表示蛋白做出來了，失敗的是分泌或切割，那是不同的問題、不同的解法。",
"basis":"hypothetical outcome; nothing on the wiki covers it",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q424"
},
{
"q_en":"Your His-tag ELISA standard curve runs from 3 down to 0.093 µg/mL, and you report ACC deaminase at 13.5 to 19.1. What is wrong with that number, and what would you do to the sample?",
"q_zh":"你們 His-tag ELISA 的標準曲線從 3 µg/mL 到 0.093 µg/mL，但你們報出 ACC deaminase 是 13.5 到 19.1。那個數字有什麼問題？你會怎麼處理樣品？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"measurement",
"results"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"below the bottom standard",
"flat curve, huge error",
"dilute towards the IC50"
],
"kw_zh":[
"低於最低標準品",
"曲線平掉誤差很大",
"稀釋到 IC50 附近"
],
"a_en":"It is an extrapolation, not a measurement. Those wells read below twenty per cent of maximum binding, which is off the bottom of our standards, and in a competitive assay the signal falls as concentration rises, so beyond the last standard the curve is almost flat. A few milli-absorbance of noise then moves the answer by whole micrograms. The honest statement is that ACC deaminase reads higher than LEA14 and BoPep4, which is what we say. To fix it I would dilute about sixteen-fold, to land near the IC50 of 1.21, and check that two dilutions agree within twenty per cent.",
"a_zh":"那是外插，不是量測。那些孔讀出來低於最大結合的百分之二十，已經掉出我們標準品的下緣；而競爭型分析的訊號是隨濃度上升而下降，所以超過最後一個標準品之後曲線幾乎是平的。這時候幾個 milli-absorbance 的雜訊，就會讓答案差上好幾微克。誠實的說法是 ACC deaminase 讀起來比 LEA14 和 BoPep4 高，我們頁面上就是這樣寫。要修正，我會稀釋大約十六倍，落在 IC50 的 1.21 附近，再確認兩個稀釋度彼此相差在百分之二十以內。",
"trap_en":"Treating 13.5 to 19.1 as a yield because it came off a fitted curve. The fit is only valid between the standards, and a 1:2 dilution does not bring a sixteen-microgram sample into range.",
"trap_zh":"因為是從擬合曲線讀出來的，就把 13.5 到 19.1 當成產量。擬合只在標準品之間有效，而 1:2 稀釋根本不足以把十六微克的樣品帶進範圍內。",
"basis":"arithmetic the wiki implies but never works through",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q425"
},
{
"q_en":"Your six light arms on the nineteenth of September all grow between nought point two eight and nought point three two per hour, and you read that as no growth penalty. Estimate the burden you would expect from carrying the Level 2 device, and tell me whether that experiment could have seen it.",
"q_zh":"9 月 19 日那六個光照組的生長速率都在每小時 0.279 到 0.317 之間，你們據此說誘導沒有生長代價。請估算帶著 Level 2 裝置本身會有多少負擔，並告訴我那個實驗能不能看到它。",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"biomanufacturing",
"results",
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"every arm carried the plasmid",
"ten kb on four megabases",
"no copy number, no closure"
],
"kw_zh":[
"每一組都帶同一個質體",
"十 kb 對四百萬 bp",
"沒有拷貝數就算不完"
],
"a_en":"That experiment could not have seen a plasmid burden, because every arm carried the same plasmid. It compares light conditions, not carrying the device against not carrying it. On size, our Level 2 device is 10,293 base pairs against a genome of about four million, so one copy is roughly a quarter of one per cent of the cell's DNA. Replication is therefore cheap and the real cost sits in translation and Sec throughput. We have no copy number for the shuttle vector on the wiki, so I cannot close the arithmetic. The honest test is a plasmid-free arm beside the carriers, with replicates, and we have not run it.",
"a_zh":"那個實驗看不到質體負擔，因為每一組都帶同一個質體。它比較的是光照條件，不是「帶裝置」對「不帶裝置」。從大小看，我們的 Level 2 裝置是 10,293 bp，對上大約四百萬 bp 的基因體，一個拷貝大概是細胞 DNA 的千分之二點五。所以複製本身很便宜，真正的成本在轉譯和 Sec 的通量。Wiki 上沒有這個 shuttle vector 的拷貝數，所以這個算式我收不了尾。老實的做法是在旁邊加一組不帶質體的對照，而且要有重複，而我們沒有做。",
"trap_en":"Defending the six arms as evidence of no burden. They share the plasmid, so the comparison has no plasmid-free reference and cannot answer the question that was asked.",
"trap_zh":"拿那六組當作沒有負擔的證據。它們共用同一個質體，整個比較沒有不帶質體的參考點，答不了被問的問題。",
"basis":"reasoning from the team's own numbers; conclusion stated nowhere",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q426"
},
{
"q_en":"On the His-tag ELISA your untransformed WB800 control reads about five micrograms per millilitre, the same range as four of your six constructs. Reason out what is producing that, and what you would do about it.",
"q_zh":"在 His-tag ELISA 上，你們沒有轉形的 WB800 對照讀到大約 5 µg/mL，和六個構築裡的四個落在同一個範圍。請推論那個訊號是什麼造成的，以及你會怎麼處理。",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"measurement",
"results"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"no plasmid, no recombinant protein",
"tracer competition, not product",
"spike and check recovery"
],
"kw_zh":[
"沒有質體就沒有重組蛋白",
"競爭的不是產物",
"加標回收率測試"
],
"a_en":"It cannot be recombinant protein, because that strain has no plasmid. A competitive anti-His assay reads anything that competes with the labelled tracer for the antibody, so histidine-rich host proteins, or something in the Terrific Broth itself, can do it, and a rich medium is exactly where that happens. That means five micrograms is a floor on this assay, not a background I am entitled to subtract, unless I first show the two signals add. I would spike a known His standard into untransformed host supernatant and check the recovery, and until that works I would not rank constructs off this plate.",
"a_zh":"那不可能是重組蛋白，因為那一株沒有質體。競爭型 anti-His 分析讀到的是任何會跟標記的 tracer 競爭抗體的東西，所以富含組胺酸的宿主蛋白，或 Terrific Broth 本身的成分，都可能造成，而豐富培養基正是最容易出事的地方。這表示 5 µg/mL 是這個分析的底線，不是我有資格直接相減的背景，除非我先證明兩個訊號是可以相加的。我會把已知濃度的 His 標準品加到沒有轉形的宿主上清液裡，檢查回收率；在那之前，我不會用這張盤替構築排名。",
"trap_en":"Subtracting the host reading from each construct. Subtraction assumes the two signals are additive, and that is exactly what this control has put in doubt.",
"trap_zh":"把宿主的讀值從每個構築裡減掉。相減的前提是兩個訊號可以相加，而這個對照質疑的正是這一點。",
"basis":"the wiki reports the control; the explanation is not written",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q427"
},
{
"q_en":"You ran green and red at three intensities and the protein did not track intensity. Leaving aside the loading control and the plasmid-free lane you already name, what arms is that experiment still missing?",
"q_zh":"你們跑了綠光和紅光各三個強度，蛋白量沒有隨強度變化。先不談你們已經提到的上樣對照和不帶質體的對照道，那個實驗還少了哪些組？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"results",
"biomanufacturing",
"parts"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"no dark arm anywhere",
"red is not darkness",
"chromophore-free strain"
],
"kw_zh":[
"完全沒有暗處組",
"紅光不等於暗處",
"缺色素基團的菌株"
],
"a_en":"A dark arm, and a strain that cannot see light. There is no dark condition anywhere in those twelve tubes, and red is not a substitute, because red is meant to drive the system to its off state, which is an active condition and not a baseline. Without dark I have no number for what the promoter does with no input, so I cannot say what fold change green bought. The second arm is a strain without the ho1 pcyA module: no chromophore means the photoreceptor is apoprotein, so it cannot respond to green however bright, which separates the circuit from heating by the LEDs.",
"a_zh":"少了暗處組，也少了一株看不到光的菌。那十二管裡完全沒有暗處的條件，而紅光不能代替，因為紅光的作用是把系統推到關閉狀態，那是一個主動的條件，不是基線。沒有暗處，我就沒有「沒有輸入時啟動子做什麼」的數字，也就說不出綠光換到了幾倍。第二組是沒有 ho1 pcyA 模組的菌株：沒有色素基團，光受體就只是沒有輔基的蛋白，不管光多亮都不會對綠光反應，這樣才分得開迴路和 LED 的發熱。",
"trap_en":"Treating red at full intensity as the negative control. Red actively switches the system off through the same receptor, so it tests the off state rather than giving a no-input baseline.",
"trap_zh":"把全強度的紅光當成陰性對照。紅光是透過同一個受體主動把系統關掉，所以它測的是關閉狀態，不是沒有輸入的基線。",
"basis":"experiment design beyond what the page already lists",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q428"
},
{
"q_en":"Take a cysteine-rich plant defensin with four disulfide bonds and put it through your own route, SamyQ and Bacillus subtilis into the supernatant. What breaks first?",
"q_zh":"假設拿一個富含半胱胺酸、有四個雙硫鍵的植物 defensin，走你們自己的路線：SamyQ 加 Bacillus subtilis，分泌到上清液。最先壞掉的是哪一環？",
"type":"reason",
"tier":"B",
"deep":1,
"pages":[
"results",
"protein-design",
"biomanufacturing"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"Sec exports unfolded protein",
"AmilCP already failed so",
"counted but not active"
],
"kw_zh":[
"Sec 送出去是未折疊的",
"AmilCP 已經這樣失敗",
"測得到但沒有活性"
],
"a_en":"Folding breaks first, and we already have the result that says so. Bacillus subtilis exports through Sec in an unfolded state, so the protein has to fold outside the cell. That is why AmilCP failed as our secretion reporter: its beta barrel has to fold fast enough to hold its chromophore, and no colour ever appeared in the medium. Four disulfides formed outside the cell is the same problem, harder. So I would expect protein the anti-His ELISA can count and no activity at all. Proteolysis is the second worry, though WB800 has eight extracellular proteases deleted. We have never tried it.",
"a_zh":"最先壞的是折疊，而我們已經有一個結果這樣告訴我們。Bacillus subtilis 透過 Sec 送出去的是未折疊的狀態，所以蛋白必須在細胞外折好。這就是 AmilCP 當分泌報告蛋白失敗的原因：它的 beta barrel 必須折得夠快才能抓住發色團，而培養液裡從來沒有出現顏色。要在細胞外形成四個雙硫鍵，是同樣的問題，而且更難。所以我預期會得到 anti-His ELISA 數得到、但完全沒有活性的蛋白。第二個顧慮是被蛋白酶切掉，不過 WB800 已經刪掉八個胞外蛋白酶。這個我們沒有做過。",
"trap_en":"Expecting the cloning or the codon optimisation to be the obstacle. Those set how much precursor is made; this molecule fails after it has already left the cell.",
"trap_zh":"以為障礙在選殖或密碼子最佳化。那些決定的是前驅蛋白做多少；這個分子是離開細胞之後才失敗的。",
"basis":"transfer question; outside everything the team built",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q429"
},
{
"q_en":"Your fresh-culture arm gained signal from two to eight hours, but the arm you grew overnight first was strong at three and six hours and weaker at eight. Reason that out for me.",
"q_zh":"你們直接放進板子的那一組訊號從 2 到 8 小時持續上升，但先養隔夜再放進去的那一組在 3 和 6 小時很強、8 小時變弱。請幫我推論原因。",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"results",
"parts",
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"overnight starts near stationary",
"veg core falls with growth",
"repeat in fresh medium"
],
"kw_zh":[
"隔夜培養已接近穩定期",
"veg 核心隨生長下降",
"換新鮮培養液重做"
],
"a_en":"The simplest reading is that production stopped rather than that protein was destroyed. The overnight arm starts near the end of growth, and our output promoter is a hybrid carrying a veg core, a growth-phase promoter, so its output should fall as the culture slows. The fresh arm is still accelerating, so it keeps gaining. I would not reach for protease, because WB800 has eight extracellular proteases deleted. To test it I would pair every blot lane with an OD600 and a loading control, then repeat the overnight arm in fresh medium at the same density. We have not done that, so this is a prediction.",
"a_zh":"最簡單的解讀是生產停了，而不是蛋白被破壞掉。先養隔夜的那一組，一開始就接近生長末期，而我們輸出端的啟動子是帶 veg 核心的混合啟動子，屬於生長期型，所以培養物慢下來時輸出應該跟著下降。直接放進去的那一組還在加速，所以會一直往上。我不會先想到蛋白酶，因為 WB800 已經刪掉八個胞外蛋白酶。要驗證，我會讓每一道 blot 都配一個 OD600 和一個上樣對照，再用新鮮培養液在相同密度下重做隔夜那一組。我們還沒做，所以這是推論。",
"trap_en":"Calling the drop at eight hours protein degradation. WB800 is the protease-deleted strain, so degradation is the less likely of the two, and nothing on that blot distinguishes them without a loading control.",
"trap_zh":"把 8 小時的下降說成蛋白降解。WB800 是刪掉蛋白酶的菌株，所以降解是比較不可能的那一個；而且沒有上樣對照，那張 blot 根本分不出來。",
"basis":"the wiki records the pattern and offers no explanation",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q430"
},
{
"q_en":"Your reactor supernatant holds three point four to six point five micrograms per millilitre of ACC deaminase. Roughly how many molecules has each cell had to make to get there?",
"q_zh":"你們反應器的上清液裡 ACC deaminase 大約是 3.4 到 6.5 µg/mL。粗估一下，每個細胞大概要做出多少個分子才會到這個量？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"results",
"biomanufacturing",
"measurement"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"five µg/mL over 35 kDa",
"a billion cells per OD",
"tens of thousands per cell"
],
"kw_zh":[
"5 µg/mL 除以 35 kDa",
"每 OD 十億個細胞",
"每個細胞幾萬個"
],
"a_en":"Call it tens of thousands per cell. Take five micrograms per millilitre, which is five milligrams per litre, and divide by thirty-five thousand grams per mole: about one point four times ten to the minus seven moles per litre, so roughly ten to the fourteen molecules per millilitre. Our own figure is a billion cells per millilitre per OD unit, and run six reached about two point seven, so about three times ten to the nine cells. Divide and you land near thirty thousand copies per cell across the whole run. That is a real load for a secreted protein but not an impossible one.",
"a_zh":"大概是每個細胞幾萬個。拿 5 µg/mL，也就是每公升 5 毫克，除以每莫耳三萬五千公克：大約是每公升 1.4 乘以十的負七次方莫耳，換成分子數大約是每毫升十的十四次方個。我們自己用的換算是每個 OD 單位每毫升十億個細胞，而第六次運轉到大約 2.71，所以大約是三乘以十的九次方個細胞。相除之後落在每個細胞三萬個左右，橫跨整段運轉。對一個分泌蛋白來說這是真實的負擔，但不是做不到的量。",
"trap_en":"Reading the concentration as a per-cell rate. It is an accumulated total in the medium over the whole run, so it divides by cells, not by cells per hour.",
"trap_zh":"把濃度當成每個細胞的速率。那是整段運轉在培養液裡累積的總量，所以要除以細胞數，不是除以每小時的細胞數。",
"basis":"an order-of-magnitude the wiki never attempts",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q431"
},
{
"q_en":"The Level 2 reaction gives no colonies at all, three rounds running. What are the two most likely causes, and the one experiment that separates them?",
"q_zh":"Level 2 反應連續三輪都完全沒有菌落。兩個最可能的原因是什麼？哪一個實驗可以分辨？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"engineering",
"results",
"parts"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"five pieces multiply the odds",
"an internal BsaI site recuts",
"try a two-part subset"
],
"kw_zh":[
"五個片段機率相乘",
"內部 BsaI 位點一直被切",
"先試兩個零件的子集"
],
"a_en":"Stoichiometry, or a BsaI site that survived inside a module. With four inserts plus the destination, all five pieces have to meet in one complex, so the probability falls as a product and a bad insert to vector ratio can take you to zero. That is what happened to us: three consecutive rounds returned nothing with no design change, and sweeping one to five and one to seven on the twenty-eighth of August gave positives at all three junctions. The other cause is an internal BsaI site, which keeps recutting the product. The experiment is a two-part subset: if pairs join, it was stoichiometry, and if one pair always fails, that module carries the site.",
"a_zh":"要嘛是比例問題，要嘛是某個模組裡還留著 BsaI 位點。四個插入加上目標載體，五個片段要在同一個複合物裡碰頭，機率是相乘的，所以插入與載體比例不對就可能直接掉到零。我們就遇過：連續三輪什麼都沒有、中間沒有改設計，8 月 28 日把比例掃過 1:5 和 1:7，三個接點都出現陽性。另一個原因是內部有 BsaI 位點，產物一直被切回去。實驗是先做兩個零件的子集：兩兩接得起來就是比例問題；某一對永遠失敗，那個模組就帶著位點。",
"trap_en":"Blaming the competent cells first. Transformation can be checked with a control plasmid in an afternoon, but it does not explain three rounds failing with cells that worked at Level 1.",
"trap_zh":"先把問題推給勝任細胞。轉形效率拿一個對照質體一個下午就能驗，但它解釋不了用在 Level 1 成功過的細胞、連續三輪都失敗。",
"basis":"diagnosis exercise; the cause is not written out on any page",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q432"
},
{
"q_en":"Suppose you had to move one of these inserts by classical single-enzyme restriction and ligation, and you forgot to dephosphorylate the cut vector. What would the plate look like, and why does your Golden Gate workflow not need that step?",
"q_zh":"假設你得用傳統的單一酵素切接把其中一個插入片段搬過去，而你忘了把切好的載體去磷酸化。平板會長成什麼樣子？為什麼你們的 Golden Gate 流程不需要那一步？",
"type":"reason",
"tier":"B",
"deep":1,
"pages":[
"engineering",
"parts"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"one enzyme, two identical ends",
"self-ligation beats two pieces",
"recutting suppresses wrong product"
],
"kw_zh":[
"一種酵素就是兩個相同末端",
"自接贏過雙片段反應",
"重複切壓住錯的產物"
],
"a_en":"The plate would be mostly empty vector. One enzyme leaves the vector two identical compatible ends, so it closes on itself, and a one-piece reaction beats a two-piece one, so the background swamps the real product. That is the pattern of our first MoClo screen, with bands at one height across almost every lane. Golden Gate does not need the phosphatase for two reasons. BsaI leaves two different four-base overhangs, so the vector cannot close on itself in frame, and any vector that does take its sfGFP dropout back still carries the enzyme sites and gets cut again, while the correct product has lost its sites and survives.",
"a_zh":"平板上大部分會是空載體。用一種酵素切，載體就得到兩個完全一樣、彼此相容的末端，所以它會自己接起來；而單片段反應比雙片段反應快，所以背景會把真正的產物蓋掉。這就是我們第一次 MoClo 篩選的樣子，幾乎每一道的帶都在同一個高度。Golden Gate 不需要去磷酸化有兩個理由：BsaI 留下的是兩個不同的四鹼基黏端，載體沒辦法自己正確接回去；而且把自己的 sfGFP dropout 接回去的載體還帶著酵素位點，會被再切一次，而正確的產物已經失去位點，就留下來了。",
"trap_en":"Saying Golden Gate is clean because the enzyme is more specific. Specificity is not the point; directional overhangs and continuous recutting of the wrong product are what remove the need for a phosphatase.",
"trap_zh":"說 Golden Gate 乾淨是因為酵素比較專一。重點不是專一性，而是方向性的黏端加上錯的產物會被持續切回去，這兩件事才讓去磷酸化變成不必要。",
"basis":"method the project never used; reason it out from first principles",
"dom":"wetlab",
"star":0,
"nodes":[],
"figs":[],
"id":"q433"
},
{
"q_en":"Why optogenetics at all? Is the light control in your system necessary — you could have used constitutive expression instead.",
"q_zh":"為什麼要用光遺傳學？你們系統裡的光控制真的必要嗎？直接用組成型表現不就好了。",
"type":"design",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"biomanufacturing#Optogenetics for bioproduction",
"results#Optogenetic control",
"hardware-bioreactor#2.2"
],
"seat":"wet1",
"backup":"dry",
"kw_en":[
"threshold out of the cell",
"nothing added, nothing left",
"signals through a sealed vessel"
],
"kw_zh":[
"閾值搬出細胞",
"不加東西、不留殘留",
"訊號穿過密閉容器"
],
"a_en":"Because the decision of when to make the protectant belongs in the field, not inside the cell: rice photosynthesis is inhibited above about 25 degrees while sorghum stays optimal to about 32.5, so stress sensing built into the bacterium would have to be re-engineered for every crop we sell into. Light is how a number from our model reaches the cells — nothing is added to the culture, nothing is left in a product sprayed on food, and an LED signals through a sealed vessel without opening the 0.2 micrometre membrane that is our containment. It also separates growth from production, and we checked the trigger is cheap: across six light arms the growth rates ran 0.279 to 0.317 per hour, all within one standard error of each other. We did build constitutive versions of every cargo and they are our controls, not our product, which is how a negative result gets assigned to the protectant rather than to the light system.",
"a_zh":"因為「什麼時候該做保護蛋白」這個決定屬於田裡，不屬於細胞裡：水稻的光合作用大約 25 度以上就開始受抑制，高粱要到約 32.5 度才離開最適範圍，所以把逆境感測做進菌體裡，等於每換一種作物就要重新改造菌株。光是模型算出來的數字抵達細胞的方式——不必往培養液裡加任何東西、噴在食用作物上的產品不會有殘留，而且 LED 可以在容器密閉的狀態下送訊號，不必打開那層 0.2 微米、也就是我們唯一圍阻的膜。它同時把生長和生產分開，而我們確認過這個觸發本身很便宜：六組光照條件下生長速率落在每小時 0.279 到 0.317 之間，彼此都在一個標準誤以內。我們每一個產物都另外做了組成型版本，那是我們的對照組、不是我們的產品，這樣一個陰性結果才能歸因到保護蛋白本身而不是光反應系統。",
"trap_en":"Saying optogenetics was chosen because it is novel, or implying the switch has been shown to work. The reasons are crop-specific thresholds and a sealed vessel; on the evidence the honest sentence is supported at 13 hours, unresolved at 16 hours, n = 2.",
"trap_zh":"說選光遺傳學是因為它比較新，或暗示光開關已經證明有效。理由是作物閾值和密閉容器；證據上誠實的說法是「13 小時支持、16 小時未定、n = 2」。",
"nodes":[
"W_LIGHT",
"C_GATE",
"I_BROPHY"
],
"figs":[
"h07",
"n01"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"wetlab",
"id":"q434"
},
{
"q_en":"Why do you think AmilCP failed? The culture never changed colour at all.",
"q_zh":"你們覺得 AmilCP 為什麼失敗？培養液從頭到尾都沒有變色。",
"type":"gap",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#The chromoprotein reporter"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"A588 0.081 against 0.082",
"beta-barrel folds fast, Sec needs unfolded",
"we stopped building a proxy"
],
"kw_zh":[
"A588 0.081 對 0.082",
"β-barrel 折太快，Sec 要未折疊",
"我們停下來不再做替代指標"
],
"a_en":"It never coloured anything: the medium stayed colourless and absorbance at 588 nanometres was 0.081 with the construct against 0.082 without, so there is no chromogenic AmilCP in either the medium or the cells. Our explanation is secretion rather than expression — AmilCP is a beta-barrel that folds rapidly in the cytoplasm, and the Bacillus subtilis Sec pathway requires a protein to stay unfolded during translocation, which is a documented bottleneck for heterologous cargo in Bacillus. Rather than repeat it we reasoned to that mechanism, moved to GanA, failed that too, and then abandoned reporters entirely and measured the protectants directly by ELISA and the DNPH assay. Knowing when to stop building a proxy was the engineering result.",
"a_zh":"它完全沒有顯色：培養液始終無色，588 奈米吸光帶構築是 0.081、不帶是 0.082，所以培養液和菌體裡都沒有會顯色的 AmilCP。我們的解釋是分泌而不是表現——AmilCP 是 β-barrel，在細胞質裡折疊得很快，而 B. subtilis 的 Sec 途徑要求蛋白在轉運過程中保持未折疊，這在 Bacillus 的異源蛋白文獻裡是已知的瓶頸。我們沒有重複做，而是推到這個機制、轉向 GanA、那個也失敗，最後完全放棄報告蛋白，直接用 ELISA 和 DNPH 測保護蛋白本身。知道什麼時候該停止做替代指標，本身就是一個工程結果。",
"trap_en":"Claiming we proved it is a folding problem. We ran no cytoplasmic-versus-secreted comparison, so never made has not been excluded; say our explanation is secretion, not that we showed it.",
"trap_zh":"說我們證明了這是折疊問題。我們沒有做細胞質內 vs 分泌的對照，所以「根本沒做出來」還沒被排除；要說「我們的解釋是分泌」，不是「我們證明了」。",
"nodes":[
"C_SEC",
"W_SEC"
],
"figs":[
"m08"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"wetlab",
"id":"q435"
},
{
"q_en":"Why did you choose these three protectants — ACC deaminase, BoPep4 and LEA14?",
"q_zh":"你們為什麼選這三個保護蛋白——ACC 去胺酶、BoPep4 和 LEA14？",
"type":"design",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"protein-design",
"results#Protectant production",
"plant#Stress protocols"
],
"seat":"wet1",
"backup":"plant",
"kw_en":[
"three mechanisms",
"catalytic, stoichiometric, amplifying",
"all secretable"
],
"kw_zh":[
"三種機制",
"催化／化學計量／放大",
"三個都能分泌"
],
"a_en":"Three different mechanisms, so the failure of one is not the failure of the idea. ACC deaminase is a true catalyst: it degrades ACC, the ethylene precursor, before ACC oxidase can make ethylene, so one molecule works many times, which is why every bench result on the wiki was produced with it. LEA14 is stoichiometric, an intrinsically disordered hydrophilin that protects membranes and proteins through dehydration, so the only levers are more copies or more work per copy; BoPep4 is a twenty-three-amino-acid Brassica elicitor peptide that triggers the plant's own salt-tolerance programme through PEPR1, which is amplification rather than substitution. All three are small secreted proteins, and that is what lets one 0.2 micrometre membrane be both the containment and the delivery path.",
"a_zh":"三種不同的機制，所以其中一個失敗不等於整個想法失敗。ACC 去胺酶是真正的催化劑：它在 ACC 氧化酶把 ACC 轉成乙烯之前就先把 ACC 分解掉，一個分子可以做很多次反應，這也是為什麼 wiki 上每一個實驗結果都是用它做的。LEA14 是化學計量型的，是一個內在無序的 hydrophilin，在脫水過程中保護膜和蛋白，所以能動的只有「更多份」或「每一份做更多事」；BoPep4 是 23 個胺基酸的 Brassica elicitor peptide，透過 PEPR1 啟動植物自己的耐鹽程式，是放大而不是替代。三個都是小的分泌型蛋白，這正是為什麼一層 0.2 微米的膜可以同時是圍阻和輸送路徑。",
"trap_en":"Presenting the three as equally evidenced. ACC deaminase has reactor data; BoPep4 has one hydroponic working dilution at 1/40; LEA14 has one agar set where 75 millimolar was best. Say which is which.",
"trap_zh":"把三個講得證據一樣強。ACC 去胺酶有反應器數據；BoPep4 只有一個水耕工作稀釋 1/40；LEA14 只有一組 agar，75 mM 表現最好。要說清楚哪個是哪個。",
"nodes":[
"W_THREE",
"C_CF"
],
"figs":[
"n01",
"r01"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"wetlab",
"id":"q436"
},
{
"q_en":"You used codon optimisation to make protectant synthesis more efficient. What did you observe in your results, and what do you conclude?",
"q_zh":"你們用了密碼子優化來讓保護蛋白合成更有效率。結果觀察到什麼，結論是什麼？",
"type":"validate",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#ELISA: wild-type and codon-optimized variants",
"results#Protein expression"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"per OD600 it went the wrong way",
"1.45 times wild type",
"signal peptide confounds it"
],
"kw_zh":[
"除以 OD600 後方向是反的",
"野生型是 1.45 倍",
"訊號肽把它confound掉"
],
"a_en":"For ACC deaminase, per OD600 it went the wrong way: wild-type Csn-ACCD read about 1.45 times the optimised arm, 29.9 against 19.5 at eight hours and 21.2 against 15.5 at twelve. For BoPep4 it went our way, with both optimised variants above wild type at twelve hours, 6.3 and 5.4 against 4.7 micrograms per millilitre. The comparison is confounded and we say so: our two ACC deaminase constructs differ in codon usage and in signal peptide, Csn against SamyQ, and the only thing that flips the direction is a 2.66-fold correction taken from published secretion efficiencies for other cargoes, which is not our measurement. So codon optimisation is not demonstrated to raise yield here; the optimised construct was kept for a practical reason, that the wild-type strain could not be recovered from glycerol stock, and the experiment owed is the matched pair, one signal peptide and both codon versions.",
"a_zh":"ACC 去胺酶這邊，除以 OD600 之後方向是反的：野生型 Csn-ACCD 大約是優化版的 1.45 倍，8 小時 29.9 對 19.5，12 小時 21.2 對 15.5。BoPep4 這邊方向是對我們有利的，兩個優化版在 12 小時都高於野生型，6.3 和 5.4 對 4.7 微克每毫升。這個比較被confound了，我們也寫出來：兩個 ACC 去胺酶構築同時換了密碼子和訊號肽（Csn 對 SamyQ），而唯一能把方向翻過來的是一個 2.66 倍的修正，那是從別的蛋白的文獻分泌效率推來的，不是我們量的。所以密碼子優化在這裡沒有被證明能提高產量；留下優化版是務實理由——野生型菌株無法從甘油保存液救回來——而該補的實驗是對照組：同一個訊號肽、兩種密碼子版本。",
"trap_en":"Saying codon optimisation worked. Per OD600 it is 1.45-fold the other way for ACC deaminase, and the 2.66 correction is literature, not data.",
"trap_zh":"說密碼子優化有效。ACC 去胺酶除以 OD600 後是反方向的 1.45 倍，而 2.66 的修正是文獻值不是我們的數據。",
"nodes":[
"W_CODON",
"C_SEC"
],
"figs":[
"m06"
],
"basis":"instructor's priority set, 30 Oct read-through of Results, Hardware and Plants",
"dom":"wetlab",
"id":"q437"
},
{
"q_en":"SamyQ with PLP gives 2.19 times the net product of Csn with PLP. Is that secretion, expression, or folding?",
"q_zh":"SamyQ 加 PLP 的淨產物是 Csn 加 PLP 的 2.19 倍。這是分泌、表現，還是折疊的差別？",
"type":"reason",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#DNPH assay",
"results#Protein expression"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"this experiment cannot tell",
"supernatant activity only",
"need the cell-associated fraction"
],
"kw_zh":[
"這個實驗分不出來",
"只量了上清活性",
"要量細胞內那一份"
],
"a_en":"This experiment cannot tell them apart, and I would rather say that than pick one. What we measured is activity in the culture supernatant — 89.7 nanomoles of total product for SamyQ with PLP against the Csn with PLP arm — so the number is everything that happened upstream of the medium rolled into one: how much was transcribed and translated, how much crossed the membrane, and how much of what crossed folded into an active multimer. Separating them means assaying the cell-associated fraction and the total alongside the supernatant on the same culture, which we did not do. Until then SamyQ is the better signal peptide for this cargo in our hands, and that is the whole claim.",
"a_zh":"這個實驗分不出來，我寧願這樣講，而不是挑一個講。我們量的是培養上清的活性——SamyQ 加 PLP 的總產物是 89.7 奈莫耳，高於 Csn 加 PLP 那一組——所以這個數字把進入培養液之前發生的所有事情全部壓在一起：轉錄轉譯了多少、有多少穿過膜、穿過去的裡面有多少折成有活性的多聚體。要分開就得在同一批培養裡同時測細胞結合的那一份和總量，這件事我們沒做。在那之前，我們能講的就只有「在我們手上，對這個蛋白來說 SamyQ 是比較好的訊號肽」。",
"trap_en":"Answering secretion with confidence. Only the supernatant was assayed, so expression and folding are inside the same number.",
"trap_zh":"很有自信地回答「是分泌」。只量了上清，所以表現和折疊都還混在同一個數字裡。",
"nodes":[
"C_SEC",
"W_CODON"
],
"figs":[
"m08"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"wetlab",
"id":"q438"
},
{
"q_en":"Your short-term ELISA baseline before any light is already 3.0 micrograms per millilitre against 1.3 for the plasmid-free control. So the circuit leaks in the dark. How much, and does it matter on a farm?",
"q_zh":"你們短期實驗在還沒照光前，ELISA 基線就已經是 3.0 微克每毫升，而無質體對照是 1.3。所以這個線路在黑暗中就會漏表現。漏多少？在田裡會有影響嗎？",
"type":"boundary",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#Short-term light response",
"results#What it settles"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"baseline above control",
"dark state not clean",
"640 against 672 nanometres"
],
"kw_zh":[
"基線高於對照",
"off 狀態不乾淨",
"640 對 672 奈米"
],
"a_en":"Yes, there is signal before the light goes on: about 3.0 micrograms per millilitre at baseline against about 1.3 for the plasmid-free control, so roughly twice the host background with no illumination. We read that as the off state not being clean rather than as production, and the hardware gives a reason: CcaSR needs about 672 nanometres to switch off and our red LEDs emit at 640, so the cultures were never driven to a true off in any of these runs. On a farm it matters as wasted chassis resource and as protectant made when no stress has been forecast, which is the thing the architecture exists to avoid. Since the freeze we have built a 670 nanometre plate precisely to measure the dark state against a real off, and until that run exists the size of the leak is not something we can quote.",
"a_zh":"是，照光之前就有訊號：基線大約 3.0 微克每毫升，無質體對照大約 1.3，所以在完全沒照光的情況下大約是宿主背景的兩倍。我們把這個讀成「off 狀態不乾淨」而不是「有在生產」，而硬體給了理由：CcaSR 需要大約 672 奈米才關得掉，我們的紅光 LED 是 640 奈米，所以這幾次實驗從來沒有把培養推到真正的 off。在田裡這代表兩件事：底盤資源的浪費，以及在沒有預測到逆境時仍然在做保護蛋白——而那正是整個架構要避免的事。凍結之後我們做了 670 奈米的板子，就是為了拿真正的 off 來量這個暗態；在那次實驗跑出來之前，漏多少我們沒辦法報一個數字。",
"trap_en":"Calling the baseline noise. It is twice the plasmid-free control on the same plate, so it is signal; the honest frame is an unclean off state we have not yet measured properly.",
"trap_zh":"把基線講成雜訊。它是同一塊盤上無質體對照的兩倍，所以那是訊號；誠實的框架是「off 狀態不乾淨，而我們還沒有好好量過」。",
"nodes":[
"W_LIGHT",
"C_GATE"
],
"figs":[
"h07"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"wetlab",
"id":"q439"
},
{
"q_en":"Your light-plate data is n = 2 with no statistics. What is the smallest experiment that would let you say green controls ACC deaminase and mean it?",
"q_zh":"你們光板的數據是 n = 2 而且沒有統計。最小需要什麼實驗，才能真的講「綠光控制 ACC 去胺酶」？",
"type":"validate",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#What it settles",
"results#Optogenetic control"
],
"seat":"wet1",
"backup":"dry",
"kw_en":[
"three biological replicates",
"a real off at 670 nanometres",
"one primary endpoint, named first"
],
"kw_zh":[
"三個生物重複",
"670 奈米的真 off",
"先指定一個主要指標"
],
"a_en":"Three biological replicates per arm, a true off state, and a primary endpoint named before the run. The off state is the part people forget: our red LEDs are at 640 nanometres and CcaSR needs about 672, so the comparison has to be green against the 670 nanometre plate we built after the freeze, not green against our old red. The plate also needs a plasmid-free WB800 lane and a loading control, because the blots we have carry neither, and the endpoint has to be fixed in advance — activity by DNPH, with ELISA as the protein denominator — so that a green-high, red-low result at one time point cannot be chosen after the fact. That is about one week of plate work, and it is the single experiment that converts our strongest claim from partial to shown.",
"a_zh":"每組三個生物重複、一個真正的 off 狀態，以及在實驗開始前就指定好的主要指標。off 狀態是大家最容易忘的部分：我們的紅光是 640 奈米，而 CcaSR 需要大約 672，所以比較必須是綠光對上凍結之後做的那塊 670 奈米板子，不是綠光對上我們舊的紅光。那塊板子還需要一個無質體的 WB800 lane 和一個 loading control，因為我們現有的 blot 兩個都沒有；指標也要事先定好——用 DNPH 的活性當主要指標、ELISA 當蛋白的分母——這樣就不會事後挑一個綠高紅低的時間點來講。這大約是一週的板子工作，而它是唯一能把我們最強的主張從 partial 變成 shown 的實驗。",
"trap_en":"Answering with more repeats alone. Without a 670 nanometre off state the extra replicates just measure the same unclean comparison more precisely.",
"trap_zh":"只回答「多做幾次重複」。沒有 670 奈米的 off 狀態，多做重複只是把同一個不乾淨的比較量得更精準而已。",
"nodes":[
"W_LIGHT",
"C_CTRL"
],
"figs":[
"h07"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"wetlab",
"id":"q440"
},
{
"q_en":"How many parts did you put on the Registry, and how are they organised?",
"q_zh":"你們在 Registry 上放了幾個 parts？怎麼組織的？",
"type":"fact",
"tier":"A",
"pages":[
"parts"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"41 parts, four levels",
"12 / 12 / 13 / 4",
"14 borrowed"
],
"kw_zh":[
"41 個 parts、四層",
"12 / 12 / 13 / 4",
"借用 14 個"
],
"a_en":"Forty-one, in four assembly levels. Twelve basic parts, twelve transcriptional units, thirteen cassettes and four whole four-unit systems, built on fourteen parts from earlier teams. Our wiki presents thirty-five of the forty-one, because four were withheld and the last corrected re-deposits landed after that page was written. If you are counting from the Registry you will get forty-one, and that is the number I would use.",
"a_zh":"四十一個，分成四個組裝層級。十二個基本元件、十二個轉錄單元、十三個表現卡匣，以及四個完整的四單元系統，建立在十四個過去隊伍的 parts 上。我們的 wiki 介紹其中三十五個，因為有四個保留，而最後幾筆修正後的重新上傳是在那一頁寫完之後才上去的。如果你是從 Registry 數，會得到四十一，那也是我會用的數字。",
"trap_en":"Saying thirty-five because that is the number on the wiki, when the judge is looking at the Registry listing.",
"trap_zh":"因為 wiki 上寫三十五就說三十五，而評審看的是 Registry 的清單。",
"basis":"the first thing a judge checks against the organisation page",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q441"
},
{
"q_en":"Which of your parts are you proudest of, and why that one?",
"q_zh":"你們最得意的是哪一個 part？為什麼是它？",
"type":"design",
"tier":"A",
"pages":[
"parts",
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"BBa_26GJIT8W, 177 bp",
"exists because of a mistake",
"re-deposited four"
],
"kw_zh":[
"BBa_26GJIT8W、177 bp",
"因為一個錯誤而存在",
"重新上傳四個"
],
"a_en":"PcpcG2-veg, 177 base pairs, the smallest thing we deposited. It exists because we caught a mistake: our first green-light cassettes carried a 1045 bp third-party part that includes an sfGFP dropout cassette where the promoter should be. We isolated the promoter, deposited it ourselves, and re-deposited four corrected constructs around it. A part that exists because of a failure is worth more to the next team than a part that happened to work.",
"a_zh":"PcpcG2-veg，177 個鹼基對，是我們上傳過最小的東西。它存在的原因是我們抓到一個錯誤：最早的綠光卡匣在啟動子的位置上帶著一個 1045 bp 的第三方 part，裡面包含 sfGFP dropout 卡匣。我們把啟動子單獨切出來、自己上傳，再用它重新上傳四個修正後的構築。一個因為失敗而存在的 part，對下一隊的價值高於一個剛好能用的 part。",
"trap_en":"Naming the Level 2 system because it is the biggest. It is also the one still carrying the uncorrected deposit.",
"trap_zh":"因為最大就說 Level 2 系統。那正好也是還帶著未修正版本的那一個。",
"basis":"standard opener; the answer decides whether the next ten minutes are yours",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q442"
},
{
"q_en":"Two of your parts have exactly the same title. Did you upload the same thing twice?",
"q_zh":"你們有兩個 parts 標題一模一樣。是同一個東西上傳了兩次嗎？",
"type":"gap",
"tier":"A",
"pages":[
"parts"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"not the same, 868 bp apart",
"old carries sfGFP dropout",
"kept both, gels ran on the old"
],
"kw_zh":[
"不一樣，差 868 bp",
"舊的帶 sfGFP dropout",
"兩個都留，膠跑的是舊的"
],
"a_en":"No. They are different sequences, 868 base pairs apart. The first carries a third-party promoter part that includes an sfGFP dropout cassette; the second carries the 177 bp promoter we deposited ourselves. Four pairs do this. We kept both of each because our gels were run on the first one, so deleting it would orphan the evidence that is already published.",
"a_zh":"不是。它們是不同的序列，差 868 個鹼基對。第一個帶著一個包含 sfGFP dropout 卡匣的第三方啟動子 part；第二個帶的是我們自己上傳的 177 bp 啟動子。像這樣的有四對。每一對我們都留著，因為膠是在第一個上面跑的，刪掉它會讓已經發表的證據變成孤兒。",
"trap_en":"Saying 'that was a mistake' and stopping. The second half, what you did about it, is the part that scores.",
"trap_zh":"只說「那是個錯誤」就停住。真正得分的是後半段：你們為此做了什麼。",
"basis":"visible from the organisation listing without opening anything",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q443"
},
{
"q_en":"Five of your published parts have no documentation at all. Why those five?",
"q_zh":"你們有五個已發布的 parts 完全沒有文件。為什麼是那五個？",
"type":"gap",
"tier":"A",
"pages":[
"parts"
],
"seat":"wet1",
"backup":"ihp",
"kw_en":[
"EEBD-RBS0 in thirteen",
"PcpcG2-veg is the fix",
"empty are not unimportant"
],
"kw_zh":[
"EEBD-RBS0 在十三個裡",
"PcpcG2-veg 是那個修正",
"空的不是不重要的"
],
"a_en":"No good reason, and the empty ones are not the unimportant ones. EEBD-RBS0 sits inside thirteen of our constructs and is the constant that makes the Csn against SamyQ comparison fair. PcpcG2-veg is the promoter we deposited to fix the sfGFP problem, and its page says only 'light induced promoter'. Those are the two I would write first and I can tell you now what each would say.",
"a_zh":"沒有好理由，而且空白的那幾個不是不重要的。EEBD-RBS0 在我們十三個構築裡面，是讓 Csn 和 SamyQ 能公平比較的那個常數。PcpcG2-veg 是我們為了修正 sfGFP 問題而上傳的啟動子，而它的頁面只寫了「light induced promoter」。那兩個我會最先補，而且我現在就可以告訴你每一頁會寫什麼。",
"trap_en":"Promising to write them later. Say which two matter and what they would contain, in the room.",
"trap_zh":"承諾以後再補。要在現場說出哪兩個最重要，以及它們會寫什麼。",
"basis":"one click from the organisation listing",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q444"
},
{
"q_en":"Walk me up your assembly levels. What is the difference between a Level 1 cassette and a Level 2 system?",
"q_zh":"帶我走一遍你們的組裝層級。Level 1 卡匣和 Level 2 系統差在哪裡？",
"type":"fact",
"tier":"A",
"pages":[
"parts",
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"L0 basic, L1 unit, L2 cassette",
"L3 is four units",
"BsaI then BsmBI"
],
"kw_zh":[
"L0 基本、L1 單元、L2 卡匣",
"L3 是四個單元",
"先 BsaI 再 BsmBI"
],
"a_en":"A Level 0 part is one element: a promoter, an RBS or a coding sequence. A Level 1 part fuses a signal peptide to a cargo, or puts a promoter in front of one gene. A Level 2 cassette is promoter, RBS, fusion and terminator on one transformable plasmid, assembled with BsaI. The whole system puts four of those transcriptional units on a single plasmid with BsmBI: the chromophore module, the sensor, the response regulator and the output.",
"a_zh":"Level 0 是單一元件：一個啟動子、一個 RBS 或一段編碼序列。Level 1 把訊號肽接到 cargo 上，或把一個啟動子放到一個基因前面。Level 2 卡匣是啟動子、RBS、融合和終止子組在一個可轉形的質體上，用 BsaI 組裝。完整系統再用 BsmBI 把四個這樣的轉錄單元放到同一個質體上：色素基團模組、感測器、反應調節子，以及輸出。",
"trap_en":"Describing the biology instead of the assembly. The question is about how the parts nest.",
"trap_zh":"講生物學而不是組裝。這題問的是 parts 怎麼層層包起來。",
"basis":"the structure question that sets up everything after it",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q445"
},
{
"q_en":"Fourteen of the parts in your constructs are not yours. What did you actually add?",
"q_zh":"你們構築裡有十四個 parts 不是你們的。那你們到底加了什麼？",
"type":"history",
"tier":"A",
"pages":[
"parts",
"contribution"
],
"seat":"wet1",
"backup":"biz",
"kw_en":[
"CcaSR and Pveg are borrowed",
"we added the fusions and cassettes",
"and our own PcpcG2-veg"
],
"kw_zh":[
"CcaSR 和 Pveg 是借的",
"我們加的是融合與卡匣",
"以及自己的 PcpcG2-veg"
],
"a_en":"The light-sensing machinery is borrowed: CcaS, CcaR, the Ho1-pcyA fusion, Pveg, PliaG, the terminators. What we added is everything between a secretion signal and a plant: eight signal-peptide fusions, thirteen cassettes, four whole systems, our own PcpcG2-veg deposit, and codon-recoded versions of three cargoes. Nobody had put a plant protectant behind a green-light switch in Bacillus subtilis and deposited the whole chain.",
"a_zh":"光感測的機制是借的：CcaS、CcaR、Ho1-pcyA 融合、Pveg、PliaG、終止子。我們加的是從分泌訊號到植物之間的一切：八個訊號肽融合、十三個卡匣、四個完整系統、我們自己的 PcpcG2-veg，以及三個 cargo 的密碼子重編碼版本。在枯草桿菌裡把植物保護蛋白放在綠光開關後面、並且把整條鏈上傳，這是沒有人做過的。",
"trap_en":"Listing what you built without naming what was borrowed. A judge who has read the composition already knows.",
"trap_zh":"只列你們做了什麼，卻不說哪些是借的。讀過組成的評審早就知道了。",
"basis":"positioning question; the composition tab makes it unavoidable",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q446"
},
{
"q_en":"Who wrote your part documentation?",
"q_zh":"你們的 part 文件是誰寫的？",
"type":"fact",
"tier":"B",
"pages":[
"parts",
"team"
],
"seat":"wet1",
"backup":"ihp",
"kw_en":[
"one author",
"17 and 18 October",
"visible in the edit record"
],
"kw_zh":[
"一位作者",
"10 月 17、18 日",
"編輯紀錄上看得到"
],
"a_en":"I did, all forty-one pages, mostly across the seventeenth and eighteenth of October. That is in the Registry's own edit record so there is no point saying otherwise, and it is also the honest answer to why five pages are empty. The science on them is the whole team's; the writing was two days and one person.",
"a_zh":"我寫的，四十一頁全部，主要集中在十月十七和十八日。這在 Registry 自己的編輯紀錄上就看得到，沒有必要講別的；這也誠實地回答了為什麼有五頁是空的。頁面上的科學是整個團隊的，但寫作是兩天、一個人。",
"trap_en":"Spreading the credit vaguely. The record is public and checking it takes one click.",
"trap_zh":"含糊地把功勞分給大家。紀錄是公開的，點一下就查得到。",
"basis":"asked when a collection looks uneven",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q447"
},
{
"q_en":"If another team wanted to build on your work tomorrow, which part would you tell them to take?",
"q_zh":"如果別的隊伍明天想接著你們做，你會叫他們拿哪一個 part？",
"type":"impact",
"tier":"A",
"pages":[
"parts",
"contribution"
],
"seat":"wet1",
"backup":"biz",
"kw_en":[
"the replaceable-CDS cassette",
"swap cargo, keep the circuit",
"its page is Design only"
],
"kw_zh":[
"可換 CDS 的卡匣",
"換 cargo、留線路",
"它的頁面只有 Design"
],
"a_en":"The CDS-replaceable cassette, with mScarlet-I in the slot. It lets you swap your own cargo into our green-light system without rebuilding the circuit, and the reporter is there so you can see the swap worked before you commit anything expensive. I should say the page is Design only at the moment, so what I have just described is a claim rather than a demonstration.",
"a_zh":"可換 CDS 的卡匣，槽位上放著 mScarlet-I。它讓你把自己的 cargo 換進我們的綠光系統，不用重建線路，而報導基因放在那裡，是讓你在投入昂貴的東西之前先確認換得起來。我得說，它的頁面目前只有 Design，所以我剛剛描述的是一個主張，不是一次展示。",
"trap_en":"Over-selling it. The last sentence is what keeps the rest credible.",
"trap_zh":"講得太滿。最後那一句才是讓前面可信的東西。",
"basis":"the contribution question, asked through the parts",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q448"
},
{
"q_en":"Your cassette page says the insert is 906 base pairs. The deposited sequence is 712. Which is right?",
"q_zh":"你們卡匣頁面寫插入片段是 906 個鹼基對，上傳的序列是 712。哪個對？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"parts",
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"the sequence is right",
"Pveg is 97, not 290",
"one fault, seven pages"
],
"kw_zh":[
"序列是對的",
"Pveg 是 97，不是 290",
"一個錯誤、七個頁面"
],
"a_en":"The sequence. The stated number is wrong and it is wrong the same way on seven of our cassettes: the promoter length we carried into the insert arithmetic was about 290 base pairs, and Pveg is 97. You can see it without arithmetic on three of them, because three architecturally identical cassettes are all 712 bp and state 910, 906 and 906. The gels are not affected; those band sizes match our wiki captions.",
"a_zh":"序列。寫下來的數字是錯的，而且在我們七個卡匣上錯法一樣：帶進插入長度計算的啟動子長度大約是 290 個鹼基對，而 Pveg 是 97。其中三個根本不用算就看得出來，因為三個結構完全相同的卡匣都是 712 bp，卻分別寫了 910、906、906。膠沒有受影響，那些帶大小和我們 wiki 上的圖說一致。",
"trap_en":"Defending the stated number. It cannot be right; the sequence is on the same page.",
"trap_zh":"替寫下來的數字辯護。它不可能對，序列就在同一頁上。",
"basis":"arithmetic a judge can do from the Sequence tab",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q449"
},
{
"q_en":"This page says the expected band is 1145 base pairs, and the caption underneath says 7767. Same gel.",
"q_zh":"這一頁說期望帶是 1145 個鹼基對，下面的圖說寫 7767。同一張膠。",
"type":"gap",
"tier":"A",
"pages":[
"parts",
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"neither is right",
"1195 from the sequence",
"1145 is another part's number"
],
"kw_zh":[
"兩個都不對",
"依序列算是 1195",
"1145 是另一個 part 的數字"
],
"a_en":"That is a mistake on a live page and it is ours. Neither number is right. Working from the deposited sequence and the two primers the page names, the product is 1195 base pairs. The 1145 figure belongs to a different part's gel caption, and 7767 is plasmid scale and cannot be this amplicon. The gel itself is fine: one colony, one band, sequence-verified afterwards.",
"a_zh":"那是線上頁面上的錯誤，是我們的錯。兩個數字都不對。用上傳的序列和頁面寫的那兩支引子算，產物是 1195 個鹼基對。1145 是另一個 part 的膠說明上的數字，7767 是質體等級，不可能是這個產物。膠本身沒有問題：一個菌落、一條帶，之後有定序確認。",
"trap_en":"Picking one of the two printed numbers to defend. Compute the third and say so.",
"trap_zh":"從印出來的兩個數字裡挑一個來辯護。要算出第三個並且說出來。",
"basis":"a page that contradicts itself eight lines apart",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q450"
},
{
"q_en":"Two of your parts state the same insert length, 1122 base pairs, but they carry different signal peptides. How can both be right?",
"q_zh":"你們兩個 parts 寫了同樣的插入長度 1122 個鹼基對，但它們帶的是不同的訊號肽。怎麼可能兩個都對？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"parts"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"they cannot both be right",
"SamyQ 93, Csn 108",
"the Csn one should be 1137"
],
"kw_zh":[
"兩個不可能都對",
"SamyQ 93、Csn 108",
"Csn 那個應該是 1137"
],
"a_en":"They cannot both be right. SamyQ is 93 base pairs and Csn is 108, so the two fusions differ by fifteen even with the same cargo and the same tag. The number is correct for the SamyQ fusion. The Csn one should read 1137 and it was copied across. It is the same copy-paste event that put a wrong cross-reference on a sibling page, so I treat the two as one error.",
"a_zh":"兩個不可能都對。SamyQ 是 93 個鹼基對，Csn 是 108，所以即使 cargo 和標籤相同，兩個融合也差十五。那個數字對 SamyQ 的融合是對的。Csn 那個應該是 1137，是被複製過去的。這和把錯誤交叉連結貼到姊妹頁面上的是同一次複製貼上，所以我把兩者當成同一個錯誤。",
"trap_en":"Not knowing the two signal peptide lengths. Fifteen base pairs is the whole answer.",
"trap_zh":"不知道兩個訊號肽的長度。十五個鹼基對就是整個答案。",
"basis":"two sibling tabs open side by side",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q451"
},
{
"q_en":"I pulled the sequence of this cassette. There is an sfGFP coding sequence in the middle of it. Why?",
"q_zh":"我把這個卡匣的序列拉出來看，中間有一段 sfGFP 編碼序列。為什麼？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"parts",
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"dropout cassette, not replaced",
"pre-assembly map",
"fixed by re-depositing"
],
"kw_zh":[
"dropout 卡匣，沒被換掉",
"組裝前的圖譜",
"靠重新上傳修正"
],
"a_en":"Because that deposit is the pre-assembly map, not the finished construct. The SubtiToolKit vectors carry an sfGFP dropout between Type IIS sites, so a white colony means the insert replaced it. What we deposited there still shows the dropout, and worse, it puts a terminator between the promoter and the ribosome binding site. Editing text cannot fix that, so we deposited the promoter on its own and re-deposited the corrected construct.",
"a_zh":"因為那一筆上傳的是組裝前的圖譜，不是完成的構築。SubtiToolKit 載體在 Type IIS 位點之間帶著 sfGFP dropout，所以白色菌落代表插入片段把它換掉了。我們上傳的那一筆上面還留著 dropout，更糟的是，它把一個終止子放在啟動子和核醣體結合位之間。這不是改文字能修的，所以我們把啟動子單獨上傳，再重新上傳修正後的構築。",
"trap_en":"Calling it a naming convention. The suffix on the vector name is; 868 bases inside the deposited sequence are not.",
"trap_zh":"說那是命名慣例。載體名稱上的後綴是，但上傳序列裡面那 868 個鹼基不是。",
"basis":"the worst thing in the collection, and visible to anyone who opens the sequence",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q452"
},
{
"q_en":"This is registered as a coding sequence and it has neither a start nor a stop codon. Explain.",
"q_zh":"這個登記成編碼序列，卻沒有起始也沒有終止密碼子。解釋一下。",
"type":"design",
"tier":"A",
"pages":[
"parts"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"deliberate",
"start lives in the signal peptide",
"stop after the His tag"
],
"kw_zh":[
"刻意的",
"起始在訊號肽裡",
"終止在 His 標籤後"
],
"a_en":"Deliberately. The native start and stop were removed so the cargo can be fused behind a signal peptide and in front of a His tag: the start codon lives in SamyQ or Csn and the stop sits after the tag. All eight of our cargo parts are like that. We explain it in a draft that is not published, which is why the live page does not say it, and that is a fair thing to catch us on.",
"a_zh":"這是刻意的。原生的起始與終止被拿掉，好讓 cargo 可以接在訊號肽後面、His 標籤前面：起始密碼子在 SamyQ 或 Csn 裡，終止密碼子在標籤之後。我們八個 cargo parts 都是這樣。我們在一份還沒發布的草稿裡有說明，所以線上頁面上看不到，這一點被抓到是合理的。",
"trap_en":"Treating it as an error. It is correct for a fusion library and the page simply fails to say so.",
"trap_zh":"把它當成錯誤。對一個融合元件庫來說這是正確的，只是頁面沒有寫出來。",
"basis":"a role-versus-sequence mismatch any curator notices",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q453"
},
{
"q_en":"SamyQ is a registered part on your pages. Csn is not. Where is Csn?",
"q_zh":"SamyQ 在你們頁面上是一個註冊的 part，Csn 不是。Csn 在哪裡？",
"type":"boundary",
"tier":"B",
"pages":[
"parts"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"only inside the fusions",
"108 bp in one, 111 in another",
"should be its own part"
],
"kw_zh":[
"只存在於融合裡",
"一個 108 bp、另一個 111",
"應該自己成為一個 part"
],
"a_en":"Only inside the fusions. SamyQ is cited properly as an earlier team's part, and the chitosanase signal is not registered anywhere, so a judge clicking for it finds nothing. Worse, our two Csn fusions imply different lengths for it, 108 bases in one and 111 in the other, because one carries an extra upstream ATG. If I deposit one more part it is Csn, with that discrepancy resolved.",
"a_zh":"只存在於融合裡面。SamyQ 有好好引用成過去隊伍的 part，而 chitosanase 訊號肽沒有在任何地方註冊，所以評審想點進去會找不到。更糟的是，我們兩個 Csn 融合暗示它有不同長度，一個 108 個鹼基、另一個 111，因為其中一個多了一個上游的 ATG。如果我再上傳一個 part，那就是 Csn，並且把這個差異解決掉。",
"trap_en":"Saying it is in the fusion and leaving it there. The two different lengths are the real finding.",
"trap_zh":"只說「它在融合裡」就結束。兩個不同長度才是真正的發現。",
"basis":"a dead end a judge hits while comparing the two signal peptides",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q454"
},
{
"q_en":"One of your Csn fusions starts ATG-ATG. Why are there two start codons?",
"q_zh":"你們其中一個 Csn 融合是 ATG-ATG 開頭。為什麼有兩個起始密碼子？",
"type":"reason",
"tier":"B",
"deep":1,
"pages":[
"parts"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"an extra upstream ATG",
"582 not 579",
"the AcdS sibling does not have it"
],
"kw_zh":[
"多一個上游 ATG",
"582 而不是 579",
"AcdS 的姊妹沒有"
],
"a_en":"There is an extra upstream ATG on the LEA14 fusion that the AcdS fusion does not carry, which is why that part is 582 base pairs rather than 579 and why its Csn segment runs from position four. I cannot tell you from the Registry whether that was designed in or came in with the synthesis order. It is a three-base difference that would shift a reading frame if anything downstream depended on it, and nothing does, but it should be documented.",
"a_zh":"LEA14 的融合上多了一個上游的 ATG，而 AcdS 的融合沒有，這就是為什麼那個 part 是 582 個鹼基對而不是 579，也是為什麼它的 Csn 片段從第四位開始。光看 Registry 我沒辦法告訴你那是設計進去的，還是隨著合成訂單進來的。那是三個鹼基的差異，如果下游有東西依賴它就會移碼，而目前沒有，但這應該被記錄下來。",
"trap_en":"Claiming it is a Kozak-like element. Bacillus does not use one and the page says nothing.",
"trap_zh":"說那是類似 Kozak 的元件。枯草桿菌沒有這種東西，而頁面上什麼都沒寫。",
"basis":"base-by-base comparison of two sibling fusions",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q455"
},
{
"q_en":"How do you know your Level 2 assembly is actually correct?",
"q_zh":"你們怎麼知道 Level 2 的組裝真的是對的？",
"type":"validate",
"tier":"A",
"pages":[
"parts",
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"three junctions, three clones",
"632, 375, 441 bp",
"no end-to-end sequencing"
],
"kw_zh":[
"三個接點、三個 clone",
"632、375、441 bp",
"沒有端到端定序"
],
"a_en":"At the junctions, not end to end. We screened every module boundary rather than one, because one module being right does not verify the others: the cross-module products come out at 632, 375 and 441 base pairs and we got all three in three separate clones. That says the four units are joined in the right order. It says nothing about the sequence between the junctions, and no Level 2 construct of ours has been sequenced end to end.",
"a_zh":"在接點上，不是端到端。我們篩的是每一個模組的邊界，而不是只篩一個，因為一個模組對不代表其他也對：跨模組的產物落在 632、375 和 441 個鹼基對，三個獨立的 clone 我們三個都拿到了。這說明四個單元接的順序是對的，但它沒有說接點之間的序列是對的，而我們沒有任何一個 Level 2 構築做過端到端定序。",
"trap_en":"Saying 'it was sequenced'. The build record's Level 2 sequencing cell is empty and the page says so.",
"trap_zh":"說「有定序」。組裝紀錄裡 Level 2 的定序欄是空的，頁面上也寫了。",
"basis":"the obvious follow-up to any assembly claim",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q456"
},
{
"q_en":"If I gave you an hour before this session, what would you fix on the Registry first?",
"q_zh":"如果在這場會談前給你一小時，你會先修 Registry 上的什麼？",
"type":"impact",
"tier":"A",
"pages":[
"parts"
],
"seat":"wet1",
"backup":"ihp",
"kw_en":[
"the wrong-part paragraph",
"the self-contradicting gel",
"then EEBD-RBS0's page"
],
"kw_zh":[
"貼錯 part 的那一段",
"自相矛盾的那張膠",
"再來是 EEBD-RBS0 的頁面"
],
"a_en":"Three things in order. Delete the paragraph on our chromophore module that describes cloning a completely different construct, because it is plainly wrong and deletion needs no new data. Fix the page that states two different expected band sizes for the same gel. Then write EEBD-RBS0's page, because it sits in thirteen constructs and is currently blank. The band sizes across the seven Pveg cassettes need recomputing too, and that is more than an hour.",
"a_zh":"三件事，照順序。刪掉色素基團模組上那一段描述完全不同構築選殖過程的文字，因為它明顯是錯的，而刪除不需要新資料。修掉那一頁對同一張膠寫了兩個期望帶大小的問題。接著寫 EEBD-RBS0 的頁面，因為它在十三個構築裡，現在卻是空白。七個 Pveg 卡匣的帶大小也要重算，而那超過一小時。",
"trap_en":"Answering with a wish list. Name three, in order, with a reason each, and admit what will not fit.",
"trap_zh":"用一串願望清單回答。要說出三件、排好順序、各給一個理由，並承認什麼做不完。",
"basis":"asked to see whether you know your own weak points by rank",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q457"
},
{
"q_en":"Your own simulation says a C-terminal His tag abolishes the contact BoPep4 works through. Every BoPep4 part you registered has one.",
"q_zh":"你們自己的模擬說 C 端 His 標籤會消掉 BoPep4 賴以作用的接觸。而你們註冊的每一個 BoPep4 part 都有。",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"protein-design",
"parts"
],
"seat":"dry",
"backup":"wet1",
"kw_en":[
"bidentate 100% to 0%",
"4.0 to 20.1 angstrom",
"no ordering record"
],
"kw_zh":[
"雙齒 100% 到 0%",
"4.0 到 20.1 埃",
"沒有訂購紀錄"
],
"a_en":"That is right, and the figure is on our own pages: bidentate engagement with Arg487 falls from a hundred percent of frames to zero and the charge centres separate from four to twenty point one angstroms. One of our legends records a decision to move the tag to the N terminus for constructs ordered after the sixteenth of August. All three SamyQ-BoPep4 deposits are C-terminal, so either they predate that decision or it was never applied, and I do not have the ordering record to tell you which.",
"a_zh":"沒錯，而且那張圖就在我們自己的頁面上：與 Arg487 的雙齒結合從 100% 的影格掉到 0，電荷中心從四埃拉開到二十點一埃。我們有一段圖說記錄了一個決定：八月十六日之後訂的構築要把標籤移到 N 端。三筆 SamyQ-BoPep4 的上傳都是 C 端，所以不是它們早於那個決定，就是那個決定沒有被執行，而我沒有訂購紀錄可以告訴你是哪一個。",
"trap_en":"Claiming the plant effect proves the tag is fine. One unreplicated dilution cannot overturn your own model.",
"trap_zh":"說植物有效果就證明標籤沒問題。一個沒有重複的稀釋倍數推翻不了你們自己的模型。",
"basis":"the sharpest juxtaposition in the collection",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q458"
},
{
"q_en":"Your page says the His tag is fused N-terminally and the description says C-terminus. Which is it?",
"q_zh":"你們頁面寫 His 標籤融合在 N 端，簡述卻說在 C 端。到底是哪一個？",
"type":"fact",
"tier":"A",
"pages":[
"parts"
],
"seat":"wet1",
"backup":"dry",
"kw_en":[
"C-terminal, the sequence settles it",
"six His codons before the stop",
"template error on seven pages"
],
"kw_zh":[
"C 端，序列可以定案",
"終止前六個組胺酸密碼子",
"七頁的模板錯誤"
],
"a_en":"C-terminal. The deposited sequence ends in six histidine codons before the stop on all three SamyQ-BoPep4 parts, so there is no ambiguity in the DNA. The element-list line saying N-terminal is a template error that propagated onto seven pages, and the short description on those same pages has it right. I would rather tell you what comes next: our own simulation says that position costs the Asn23 contact.",
"a_zh":"C 端。三個 SamyQ-BoPep4 的 part，上傳的序列都在終止密碼子前以六個組胺酸密碼子結尾，所以 DNA 上沒有模糊空間。元件列表裡寫「N 端」那一行是模板錯誤，擴散到七頁，而同樣這些頁面的簡述寫的是對的。我寧可主動告訴你下一件事：我們自己的模擬說那個位置會犧牲 Asn23 的接觸。",
"trap_en":"Hedging. The sequence is public and it settles it in one direction.",
"trap_zh":"含糊其詞。序列是公開的，而且只指向一個方向。",
"basis":"a page that contradicts itself in two adjacent fields",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q459"
},
{
"q_en":"You built a negative control that was supposed to fail. What happened?",
"q_zh":"你們做了一個應該要失敗的陰性對照。結果呢？",
"type":"design",
"tier":"A",
"deep":1,
"pages":[
"protein-design",
"parts"
],
"seat":"dry",
"backup":"wet1",
"kw_en":[
"pre-registered to fail all four",
"passed all four",
"criteria measured the wrong thing"
],
"kw_zh":[
"事先登記會四項全敗",
"四項全過",
"標準量錯了東西"
],
"a_en":"It passed. We wrote down four acceptance criteria before the run, together with an explicit prediction that the fifteen-to-twenty-three fragment would fail all four, because it loses half the contact surface. It passed all four: receptor RMSD 2.10 angstroms, peptide 1.83, the salt bridge held for 99.9 percent of frames. We published that as the result rather than moving the criteria, and the reading in our own caption is that the criteria were measuring something other than binding.",
"a_zh":"它通過了。我們在跑之前就寫下四項接受標準，以及一個明確的預測：15 到 23 這個片段會四項全部失敗，因為它少掉一半的接觸面。結果四項全部通過：受體 RMSD 2.10 埃、胜肽 1.83，鹽橋在 99.9% 的影格裡維持。我們照樣把它當成結果發表，沒有事後改標準；我們自己的圖說裡的解讀是：那些標準量到的不是結合。",
"trap_en":"Presenting it as a success. The value is that it is a loss you kept in public.",
"trap_zh":"把它講成一次成功。它的價值在於那是一次你們公開留著的失敗。",
"basis":"the strongest honesty card on the collection",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q460"
},
{
"q_en":"Your codon figure stars a sequence. Is that the sequence you actually ordered?",
"q_zh":"你們的密碼子圖標了一個候選。那是你們真正訂的序列嗎？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"protein-design",
"parts"
],
"seat":"dry",
"backup":"wet1",
"kw_en":[
"not for AcdS and LEA14",
"SamyQ unchanged in all four",
"BoPep4 matches base for base"
],
"kw_zh":[
"AcdS 和 LEA14 不是",
"四個融合裡 SamyQ 都沒改",
"BoPep4 逐鹼基相同"
],
"a_en":"For BoPep4, yes: the starred candidate's first forty-five nucleotides are the deposit base for base. For AcdS and LEA14, no, and that is a real inconsistency. Those two figures star a candidate that recodes the SamyQ segment by nineteen to twenty-one bases, and the ninety-three base pair SamyQ segment is identical to wild type in all four of our SamyQ fusions. The cargo recoding is real, fifteen bases of a thousand and eleven for AcdS, but the starred row is from a different search run than the sequence we ordered.",
"a_zh":"BoPep4 是：標星候選的前四十五個核苷酸和上傳的序列逐鹼基相同。AcdS 和 LEA14 不是，而這是一個真的不一致。那兩張圖標星的候選把 SamyQ 區段重新編碼了十九到二十一個鹼基，而在我們四個 SamyQ 融合裡，那段九十三個鹼基對的 SamyQ 和野生型完全相同。cargo 的重新編碼是真的，AcdS 是一千零十一中的十五個，但標星的那一列來自和我們實際訂購序列不同的搜尋。",
"trap_en":"Saying the figure is illustrative. It is on the part page, so a reader takes it as that part's own recoding.",
"trap_zh":"說那張圖只是示意。它就放在 part 頁面上，讀者會當成那個 part 自己的重編碼。",
"basis":"a figure and a sequence that do not match, on one page",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q461"
},
{
"q_en":"Your design page says this recoding ranks one out of forty-three thousand. Is that a result?",
"q_zh":"你們的設計頁面說這個重編碼在四萬三千多個裡排第一。那算結果嗎？",
"type":"boundary",
"tier":"A",
"deep":1,
"pages":[
"protein-design",
"parts"
],
"seat":"dry",
"backup":"wet1",
"kw_en":[
"it is a score from a folding model",
"translation never measured",
"pages say so"
],
"kw_zh":[
"那是摺疊模型的分數",
"轉譯從未量過",
"頁面上有寫"
],
"a_en":"No, it is a ranking inside a folding model's own scoring, and our pages say so in writing: these scores are predictions, and translation initiation from the recoded cassette has not been measured. What is real is the change in the DNA: six to twelve synonymous codon changes, the protein and the SamyQ cleavage site unchanged. Whether that buys us more protein is untested, so the ordering of wild type, 2.1 and 2.2 is a prediction to be tested rather than a ranking we earned.",
"a_zh":"不算，那是摺疊模型自己評分裡的排名，而我們的頁面白紙黑字寫著：這些分數是預測，而重編碼卡匣的轉譯起始沒有被量過。真實的是 DNA 上的改變：六到十二個同義密碼子改動，蛋白和 SamyQ 切位不變。那是否真的換來更多蛋白並未驗證，所以野生型、2.1、2.2 的排序是一個待驗證的預測，不是我們掙到的排名。",
"trap_en":"Quoting the percentile as if it were a yield. The top 0.002 percent of a simulated pool is not protein.",
"trap_zh":"把百分位數當產量引用。模擬池裡的前 0.002% 不是蛋白。",
"basis":"a number that looks like a measurement and is not",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q462"
},
{
"q_en":"Did any of your modelling change what you actually built?",
"q_zh":"你們的模擬有改變任何你們真正做出來的東西嗎？",
"type":"integrate",
"tier":"A",
"pages":[
"protein-design",
"parts",
"engineering"
],
"seat":"dry",
"backup":"wet1",
"kw_en":[
"chose where to truncate",
"chose the recodings ordered",
"did not move the tag"
],
"kw_zh":[
"決定在哪裡截短",
"決定訂哪個重編碼",
"沒有移動標籤"
],
"a_en":"In two places yes and in one place no. The docking ladder is why we sampled the truncations where we did, and the codon searches are why we ordered 2.1 and 2.2 rather than a naive low-GC recoding. Where it did not change what we built is the His tag: the simulation says the C-terminal position costs the binding contact, a legend records a decision to move it, and the deposits are still C-terminal. That is the honest edge of the integration.",
"a_zh":"兩個地方有，一個地方沒有。docking 的階梯圖決定了我們在哪些位置取截短樣本，密碼子搜尋決定了我們訂 2.1 和 2.2 而不是一個簡單的低 GC 重編碼。沒有改變的是 His 標籤：模擬說 C 端的位置會犧牲結合接觸，有一段圖說記錄了要移動它的決定，而上傳的序列仍然是 C 端。那就是這個整合誠實的邊界。",
"trap_en":"Claiming the modelling drove everything. Naming the one place it did not is what makes the other two believable.",
"trap_zh":"說模擬主導了一切。說出它沒有生效的那一處，才讓另外兩處可信。",
"basis":"the dry-lab-to-wet-lab question, asked through the deposits",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q463"
},
{
"q_en":"There are unfilled square brackets on your pages. What are those?",
"q_zh":"你們頁面上有沒填的方括號。那些是什麼？",
"type":"gap",
"tier":"A",
"pages":[
"parts"
],
"seat":"wet1",
"backup":"ihp",
"kw_en":[
"126 on 35 of 41 pages",
"drafting template went public",
"deliberately not guessed"
],
"kw_zh":[
"41 頁中 35 頁、共 126 個",
"草稿模板上線了",
"刻意不用猜的填"
],
"a_en":"Unfilled placeholders from our drafting template that went public. There are a hundred and twenty-six of them across thirty-five of the forty-one pages, twenty inside figure captions. We know where every one is and what each resolves to. The ones that cannot be resolved from our own records are staying bracketed rather than being guessed at, because a plausible wrong number is worse on a public page than a visible gap.",
"a_zh":"那是我們草稿模板裡沒填的佔位符，跟著上線了。四十一頁裡有三十五頁帶著，總共一百二十六個，其中二十個在圖說裡。我們知道每一個在哪裡、各自該填什麼。那些從我們自己的紀錄裡無法確定的，我們寧可讓它保持方括號，也不要用猜的，因為在公開頁面上，一個看起來合理的錯誤數字比一個看得見的空缺更糟。",
"trap_en":"Calling it a rendering bug. It is an unfinished page and saying so costs less.",
"trap_zh":"說那是顯示錯誤。那就是一頁沒寫完的頁面，直接承認代價比較小。",
"basis":"visible on most pages without scrolling",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q464"
},
{
"q_en":"Your strain is written in square brackets on twenty-four pages. Do you know which strain you used?",
"q_zh":"你們的菌株在二十四頁上是寫在方括號裡的。你們知道自己用的是哪一株嗎？",
"type":"gap",
"tier":"A",
"pages":[
"parts",
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"WB800, settled 7 October",
"168 for the early reactor run",
"the bracket is a template leftover"
],
"kw_zh":[
"WB800，10 月 7 日定案",
"早期反應器跑的是 168",
"方括號是模板殘留"
],
"a_en":"Yes. Everything with a blot or an assay behind it is WB800, the eight-protease-knockout strain, and that was settled on the seventh of October. The bracket is a template leftover from when both 168 and WB800 were in play: the early bioreactor run was in 168, which barely made detectable enzyme, probably because its secreted proteases degrade the product, and that is why we moved. The pages should say WB800 and they will.",
"a_zh":"知道。所有背後有墨點圖或檢測的都是 WB800，那個敲掉八個蛋白酶的菌株，這在十月七日就定案了。方括號是當時 168 和 WB800 都還在考慮時留下的模板殘留：早期的生物反應器跑的是 168，幾乎測不到酵素，可能是因為它分泌的蛋白酶把產物降解掉，這就是我們換掉它的原因。那些頁面應該寫 WB800，之後也會。",
"trap_en":"Saying 'both'. One produced the data; say which and why you switched.",
"trap_zh":"回答「兩個都是」。產出數據的只有一個，說出是哪一個、以及為什麼換。",
"basis":"a bracket on the most basic fact in the collection",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q465"
},
{
"q_en":"Three of your reference links end in a chatgpt tracking tag. Do you want to explain that?",
"q_zh":"你們有三個參考文獻連結結尾帶著 chatgpt 的追蹤標記。要解釋一下嗎？",
"type":"gap",
"tier":"A",
"pages":[
"parts",
"attributions"
],
"seat":"wet1",
"backup":"ihp",
"kw_en":[
"a copied URL",
"the references themselves are right",
"we can give the citation"
],
"kw_zh":[
"複製網址帶進來的",
"文獻本身是對的",
"引用資訊我們給得出來"
],
"a_en":"It is a copied URL and it should not be there. The underlying references are the right ones, they are UniProt and NCBI entries, and I can give you the accession and the paper for each. We used language models the way we used search, to find sources, and then read the sources; what went wrong here is hygiene, not provenance. I would rather you saw it and asked than found it and did not.",
"a_zh":"那是複製網址帶進來的，不該在那裡。底下的文獻本身是對的，是 UniProt 和 NCBI 的條目，每一個的編號和論文我都給得出來。我們用語言模型的方式和用搜尋一樣，是拿來找來源，然後去讀來源；這裡出問題的是整潔，不是來源本身。我寧可你看到並問出來，也不要你發現了卻不問。",
"trap_en":"Getting defensive about having used a model. The defensible position is that you read the source.",
"trap_zh":"因為用過模型就變得防衛。站得住腳的立場是：你們讀過原始來源。",
"basis":"the kind of detail a careful reader notices and remembers",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q466"
},
{
"q_en":"You use codenames like ABDI and ABDQ in your figure captions. What are they?",
"q_zh":"你們圖說裡用了 ABDI、ABDQ 這些代號。那是什麼？",
"type":"fact",
"tier":"B",
"pages":[
"parts",
"results"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"internal strain shorthand",
"ABDI Csn wild type, ABDQ SamyQ 2.1",
"never defined on a page"
],
"kw_zh":[
"內部菌株簡稱",
"ABDI 是 Csn 野生型、ABDQ 是 SamyQ 2.1",
"頁面上從未定義"
],
"a_en":"Internal strain shorthand. ABDI is the Level 2 system with the wild-type cargo behind the Csn signal peptide; ABDQ is the one with the codon-optimised AcdS 2.1 behind SamyQ. They appear in captions on six part pages and are defined on none of them, which is a fair catch. The same is true of the PL codes in our plant captions, which are wiki figure identifiers that should not have travelled to the Registry.",
"a_zh":"內部的菌株簡稱。ABDI 是 Level 2 系統，帶著 Csn 訊號肽後面的野生型 cargo；ABDQ 是 SamyQ 後面接密碼子最佳化 AcdS 2.1 的那一個。它們出現在六個 part 頁面的圖說裡，卻沒有任何一頁定義過，這一點被抓到是合理的。植物圖說裡的 PL 代號也一樣，那是 wiki 的圖片編號，本來不該跟著到 Registry 上。",
"trap_en":"Explaining the names without conceding the pages never define them.",
"trap_zh":"解釋了名字，卻不承認頁面上從來沒有定義過它們。",
"basis":"undefined shorthand in public figure captions",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q467"
},
{
"q_en":"Could another team reproduce your assembly from the Registry alone?",
"q_zh":"別的隊伍光靠 Registry 能重現你們的組裝嗎？",
"type":"compare",
"tier":"A",
"deep":1,
"pages":[
"parts",
"engineering",
"experiments"
],
"seat":"wet1",
"backup":"biz",
"kw_en":[
"the cloning yes, the culture no",
"no media, no OD, no volumes",
"band sizes need recomputing"
],
"kw_zh":[
"選殖可以、培養不行",
"沒有培養基、OD、體積",
"帶大小需要重算"
],
"a_en":"The cloning, mostly yes: the vectors, the enzymes, the overhangs, the thermal cycles and the primer tables are all there, and the sequences are deposited. The culture work, no. The pages never state a growth medium for expression, an induction OD, a culture volume or a shaking speed, and the light intensities are given as percentages with no irradiance behind them. They would also have to recompute seven of our stated band sizes, and I would tell them that rather than let them find it.",
"a_zh":"選殖部分大致可以：載體、酵素、黏端、溫度循環和引子表都在，序列也上傳了。培養的部分不行。那些頁面從來沒有寫表現用的培養基、誘導時的 OD、培養體積或轉速，而光照強度是用百分比給的，背後沒有照度。他們還得重算我們寫的七個帶大小，而我會先告訴他們，而不是讓他們自己撞上。",
"trap_en":"Answering yes. The reproducibility question rewards the person who names the missing half.",
"trap_zh":"直接回答可以。可重現性這題，獎勵的是說得出缺了哪一半的人。",
"basis":"the real test of a parts collection",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q468"
},
{
"q_en":"You wrote two collection documents and never created them on the Registry. Why not?",
"q_zh":"你們寫了兩份 collection 文件，卻沒有在 Registry 上建立。為什麼？",
"type":"boundary",
"tier":"B",
"pages":[
"parts",
"contribution"
],
"seat":"wet1",
"backup":"ihp",
"kw_en":[
"ran out of time",
"shared prose duplicated instead",
"that is how errors spread"
],
"kw_zh":[
"時間不夠",
"共用文字只能重複貼",
"錯誤就是這樣擴散的"
],
"a_en":"Time. They are written and they would move about eighteen thousand words of shared prose out of the individual pages. Because they do not exist, the shared cloning block is duplicated across the composites instead, and that duplication is exactly how a wrong cross-reference and an unsupported salinity claim ended up on several sibling pages at once. So the missing collections are not a cosmetic gap; they are the mechanism behind two of our defects.",
"a_zh":"時間。它們已經寫好了，而且會把大約一萬八千字的共用文字從個別頁面移出去。因為它們不存在，共用的選殖段落只能在各個複合元件上重複貼，而那個重複正是一個錯誤的交叉引用和一個沒有證據的鹽逆境主張，同時出現在好幾個姊妹頁面上的原因。所以缺少 collection 不只是外觀問題，它是我們兩個缺陷背後的機制。",
"trap_en":"Treating it as a tidiness issue. Say what the duplication caused.",
"trap_zh":"把它當成整潔問題。要說出重複造成了什麼。",
"basis":"asked when a collection reads repetitive",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q469"
},
{
"q_en":"What does your Registry entry give the community that your wiki does not?",
"q_zh":"你們的 Registry 條目給社群什麼是 wiki 給不了的？",
"type":"history",
"tier":"A",
"pages":[
"parts",
"contribution"
],
"seat":"wet1",
"backup":"biz",
"kw_en":[
"sequences, not narrative",
"composition is machine-readable",
"the wiki freezes, parts do not"
],
"kw_zh":[
"序列，不是敘事",
"組成是機器可讀的",
"wiki 會凍結，parts 不會"
],
"a_en":"Sequence and structure that a machine can read. The wiki is our narrative and it freezes; the part pages carry the deposited DNA, the composition tree and the documentation, and they stay editable, which is why four corrected constructs went up after the freeze. A team wanting our green-light output cassette does not need our story, they need the overhangs and the sequence, and those are only on the Registry.",
"a_zh":"機器可以讀的序列與結構。wiki 是我們的敘事，而且會凍結；part 頁面帶著上傳的 DNA、組成樹和文件，而且仍然可以編輯，這就是為什麼有四個修正後的構築是在凍結之後才上去的。想要我們綠光輸出卡匣的隊伍不需要我們的故事，他們需要的是黏端和序列，而那些只在 Registry 上。",
"trap_en":"Describing the wiki again. The question is what the Registry adds, and the answer is reusability.",
"trap_zh":"又把 wiki 講一次。這題問的是 Registry 多給了什麼，答案是可重用性。",
"basis":"the contribution question, in its positioning form",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q470"
},
{
"q_en":"Your part pages carry claims with no figure, no citation and no cross-reference. Which ones?",
"q_zh":"你們的 part 頁面上有一些主張，沒有圖、沒有引用、也沒有交叉連結。是哪些？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"parts"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"BoPep4 secretion by ELISA",
"LEA14 expressed and secreted",
"RBS0 high-strength"
],
"kw_zh":[
"BoPep4 分泌靠 ELISA",
"LEA14 有表現並分泌",
"RBS0 高強度"
],
"a_en":"I can name three. Our BoPep4 cassettes say secretion was assessed by ELISA, and no BoPep4 ELISA data appears on any of the forty-one pages. Our LEA14 cassettes say the protein is expressed and secreted, and neither page has a characterisation section or a blot. And RBS0's one-line description calls it high-strength and optimised for Bacillus, with no measurement anywhere. Those three should either get their data or lose the sentence.",
"a_zh":"我可以點出三個。我們的 BoPep4 卡匣說分泌是用 ELISA 評估的，而四十一頁裡沒有任何 BoPep4 的 ELISA 數據。我們的 LEA14 卡匣說蛋白有表現並分泌，而那兩頁都沒有 characterisation 區段，也沒有墨點圖。還有 RBS0 那一行簡述說它是高強度、為枯草桿菌最佳化的，而任何地方都沒有量測。這三個要嘛補上數據，要嘛把那句話拿掉。",
"trap_en":"Saying you cannot think of any. Naming three unprompted is worth more than defending forty-one.",
"trap_zh":"說想不出來。主動點出三個，價值高於替四十一個辯護。",
"basis":"the honesty question, aimed at the collection",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q471"
},
{
"q_en":"You say the output cassette is replaceable. Have you ever replaced it?",
"q_zh":"你們說輸出卡匣是可替換的。你們換過嗎？",
"type":"boundary",
"tier":"A",
"pages":[
"parts",
"contribution"
],
"seat":"wet1",
"backup":"dry",
"kw_en":[
"designed, not demonstrated",
"page is Design only",
"only AcdS was ever behind it"
],
"kw_zh":[
"設計過、沒有展示",
"頁面只有 Design",
"後面只放過 AcdS"
],
"a_en":"Not yet, and the page says Design only. The architecture supports it: the cassette sits behind our own PcpcG2-veg with BsaI sites, and we put mScarlet-I in the slot so a user can see the swap worked. But only ACC deaminase has ever actually been placed behind the green-light promoter in a finished system, so 'any protectant can be swapped in' is a design claim we have not cashed. The swap overhangs are also not written on the page, which is the one thing a reusing team needs.",
"a_zh":"還沒有，而且那一頁只有 Design。架構上支援：卡匣放在我們自己的 PcpcG2-veg 後面、帶著 BsaI 位點，而我們在槽位上放了 mScarlet-I，讓使用者看得到換成功了。但實際上只有 ACC deaminase 真正被放在綠光啟動子後面做成完整系統，所以「任何保護蛋白都可以換進來」是一個我們還沒兌現的設計主張。而且替換用的黏端沒有寫在頁面上，那正是要重用的隊伍唯一需要的東西。",
"trap_en":"Describing the mechanism as though describing it were doing it.",
"trap_zh":"把機制描述一遍，彷彿描述過就等於做過。",
"basis":"the reuse claim, tested",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q472"
},
{
"q_en":"A judge tells you your Registry upload is very impressive. What do you say next?",
"q_zh":"評審說你們的 Registry 上傳非常厲害。你接下來要說什麼？",
"type":"integrate",
"tier":"A",
"pages":[
"parts"
],
"seat":"wet1",
"backup":"ihp",
"kw_en":[
"thank you, then offer the limit",
"name a weak page first",
"the compliment precedes the question"
],
"kw_zh":[
"先謝謝，再主動講限制",
"先點出一個薄弱頁面",
"稱讚是問題的前半句"
],
"a_en":"Thank them in four words and then go first. A compliment about the upload is usually the first half of a question about one line inside it, so the useful move is to name a limit before it is found: five of the forty-one pages are empty, the band sizes on seven cassettes need recomputing, and no blot carries a plasmid-free lane. Offering those buys you the right to be believed about everything else on the collection.",
"a_zh":"用四個字謝過，然後自己先講。對上傳的稱讚通常是某一行問題的上半句，所以有用的動作是在被找到之前先說出限制：四十一頁裡有五頁是空的、七個卡匣的帶大小需要重算、沒有任何一張墨點圖有無質體對照道。主動交出這些，才換得到「其他部分被相信」的權利。",
"trap_en":"Saying thank you and waiting. The pause after a compliment is where the real question lands.",
"trap_zh":"說完謝謝就等著。稱讚之後的那個停頓，正是真正的問題落下來的地方。",
"basis":"the move that decides what the next five minutes are about",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q473"
},
{
"q_en":"You can very clearly see a double band on your Western blots against the His tag. Could you comment on that?",
"q_zh":"你們用 His-tag 抗體做的 Western blot 上可以很清楚看到雙帶。可以說明一下嗎？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"results",
"measurement",
"experiments"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"we never purified",
"crude supernatant or lysate",
"no plasmid-free lane"
],
"kw_zh":[
"我們沒有純化",
"粗萃上清或裂解液",
"沒有無質體對照道"
],
"a_en":"First, there is no purification step behind our blots to produce a degradation product. We have one imidazole elution panel and nothing else; every other blot is crude culture supernatant, cell lysate or shell permeate. Second, what we do have is a size shift we cannot explain: the Csn construct runs lower than the SamyQ 2.1 construct though they encode the same mature enzyme. We wrote that on the Engineering page as unexplained, with oligomer formation as an untested hypothesis. And we have no plasmid-free WB800 lane on any blot, which is the control that would settle whether a band is ours.",
"a_zh":"第一，我們的墨點圖背後沒有純化步驟可以產生降解產物。我們只有一張 imidazole 沖提的圖，其他全部是粗萃培養上清、細胞裂解液或殼側透過液。第二，我們真正有的是一個無法解釋的大小位移：Csn 構築跑得比 SamyQ 2.1 構築低，雖然兩者編碼同一個成熟酵素。我們在 Engineering 頁面上把它寫成「未解釋」，並把寡聚體形成列為未驗證的假說。而且我們沒有任何一張墨點圖有無質體的 WB800 對照道，那正是能定案「某條帶是不是我們的」的那一道。",
"trap_en":"Agreeing that it is a degradation product. A judge who says 'I guess' is guessing, and agreeing with a guess you cannot support is worse than correcting it.",
"trap_zh":"順著回答「那是降解產物」。說「我猜」的評審就是在猜，順著一個你撐不起來的猜測，比直接更正還糟。",
"basis":"asked verbatim of another team at a 2025 judging session",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q474"
},
{
"q_en":"Your blot says the band is at seventy-five kilodaltons and your other pages say this protein is thirty-seven. Explain.",
"q_zh":"你們的墨點圖說帶在 75 kDa，其他頁面說這個蛋白是 37。解釋一下。",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"results",
"measurement"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"37 on constitutive, 63-75 on Level 2",
"homodimer about 70, untested",
"41 is the untagged literature enzyme"
],
"kw_zh":[
"組成型 37、Level 2 63-75",
"約 70 的二聚體，未驗證",
"41 是文獻上無標籤的酵素"
],
"a_en":"Both are on our pages and we have not reconciled them. On the constitutive supernatant blots the band is at about 37 kilodaltons, which is where we predicted the secreted enzyme against a 35 kilodalton monomer, and those agree. On the Level 2 light blots it runs at 63 to 75 and once just under 100. ACC deaminase forms a homodimer at about 70, which is our reading, and our own caption calls it a possibility we plan to test. The 41 kilodalton figure from the literature is the untagged, signal-peptide-free purified enzyme, so it is not directly comparable.",
"a_zh":"兩個都寫在我們的頁面上，而且我們還沒有把它們對起來。組成型上清的墨點圖上，帶在大約 37 kDa，正是我們對分泌型酵素的預測，對上 35 kDa 的單體是吻合的。Level 2 的光控圖上它跑在 63 到 75，有一次在 100 下面一點。ACC deaminase 會形成大約 70 kDa 的同源二聚體，那是我們的解讀，而我們自己的圖說就說那是一個打算驗證的可能。文獻上的 41 kDa 是無標籤、沒有訊號肽的純化酵素，不能直接比較。",
"trap_en":"Asserting the dimer as fact. No cross-linking, no native gel, no plasmid-free lane; it stays a hypothesis.",
"trap_zh":"把二聚體當事實講。沒有交聯、沒有原生膠、沒有無質體對照道，它只能是假說。",
"basis":"five molecular weights across the part pages, none reconciled",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q475"
},
{
"q_en":"How do you know the band on that blot is your protein and not something the host makes?",
"q_zh":"你們怎麼知道那張膠上的帶是你們的蛋白，而不是宿主本來就有的東西？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"results",
"measurement"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"we cannot, from the blot",
"no untransformed lane anywhere",
"the ELISA host read 4.6 to 5.5"
],
"kw_zh":[
"光看圖不能",
"任何圖都沒有未轉形道",
"ELISA 宿主讀到 4.6 到 5.5"
],
"a_en":"From the blot alone we cannot. Nine blot figures across six part pages and not one carries an untransformed WB800, empty-vector or dark lane; red light is the only negative control on the light blots. We name that gap in our own summary. Where we did run the untransformed host, on the ELISA, it read 4.562 to 5.452 micrograms per millilitre, the same range as four of our six constructs, so we reported that plate as defeated by its own control.",
"a_zh":"光看墨點圖沒辦法。六個 part 頁面上的九張圖，沒有一張有未轉形的 WB800、空載體或暗處對照道；在光控的圖上，紅光是唯一的陰性對照。這個缺口是我們自己在 Summary 裡點名的。真正有跑未轉形宿主的是 ELISA，讀到 4.562 到 5.452 微克每毫升，和我們六個構築裡的四個同一個範圍，所以我們把那一盤報告成被自己的對照打敗。",
"trap_en":"Saying the His tag proves specificity. An anti-His antibody can cross-react, which is exactly what the missing lane would test.",
"trap_zh":"說 His 標籤就證明了專一性。抗 His 抗體可能交叉反應，而那正是少掉的那一道要檢驗的事。",
"basis":"the control question, asked of any blot",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q476"
},
{
"q_en":"Two of your part pages describe the same two blots and reach opposite conclusions. Which caption do I believe?",
"q_zh":"你們兩個 part 頁面描述同樣兩張墨點圖，卻得到相反的結論。我該相信哪一段圖說？",
"type":"gap",
"tier":"A",
"pages":[
"parts",
"results"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"the conservative one",
"green and red not distinguishable",
"ELISA 12.9 against 11.8"
],
"kw_zh":[
"保守的那一段",
"綠紅分不出來",
"ELISA 12.9 對 11.8"
],
"a_en":"The conservative one. One page says intensities were similar across all lanes and the other says the green lanes looked somewhat stronger; both captions are ours and they disagree, so we take the reading that claims less. On those blots green and red are not distinguishable, the ELISA on the same four samples reads 12.9 against 11.8 micrograms per millilitre, and we have never measured our dark-state background, so we do not claim a fold change for the SamyQ system.",
"a_zh":"保守的那一段。一頁說各道強度相近，另一頁說綠光那幾道看起來稍強；兩段圖說都是我們寫的，而且互相矛盾，所以我們採主張較小的那個讀法。在那些圖上綠光和紅光分不出來，同樣四個樣品的 ELISA 是 12.9 對 11.8 微克每毫升，而且我們從來沒有量過暗態背景，所以 SamyQ 系統我們不主張任何倍率。",
"trap_en":"Defending the stronger caption because it is the better result. The judge has both tabs open.",
"trap_zh":"因為結論比較好就替比較強的那段圖說辯護。評審兩個分頁都開著。",
"basis":"two sibling part pages for the same Level 2 construct",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q477"
},
{
"q_en":"You have one purification panel. What did it actually tell you?",
"q_zh":"你們只有一張純化的圖。它到底告訴了你們什麼？",
"type":"boundary",
"tier":"A",
"pages":[
"measurement",
"experiments"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"which buffers recovered protein",
"no quantitation",
"concentration list still bracketed"
],
"kw_zh":[
"哪些緩衝液回收到蛋白",
"沒有定量",
"濃度還夾在方括號裡"
],
"a_en":"Which imidazole buffers recovered protein, and nothing more. The fractions were loaded 25, 10, 150 and 250 millimolar in that order, bands appear in the last three and the strongest is at 250, so there is no quantitative relationship between concentration and yield to read off it. We have no purified yield, no purified gel and no concentration: the purification and dialysis sheet produced no result on our wiki. And the concentration list in that caption is still an unfilled placeholder.",
"a_zh":"哪些 imidazole 緩衝液回收到蛋白，就這樣。分液的上樣順序是 25、10、150、250 毫莫耳，後三個有帶，最強的是 250，所以從這張圖讀不出濃度和產量之間的定量關係。我們沒有純化後的產量、沒有純化後的膠、也沒有濃度：純化與透析那一張實驗表在我們 wiki 上沒有產出結果。而且那段圖說裡的濃度清單到現在還是沒填的佔位符。",
"trap_en":"Implying you have purified protein in hand. You have one panel and no yield.",
"trap_zh":"暗示你們手上有純化好的蛋白。你們只有一張圖，沒有產量。",
"basis":"follows any mention of a His tag",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q478"
},
{
"q_en":"Your colony PCR has an extra bright band at 250 base pairs. What is it?",
"q_zh":"你們的菌落 PCR 在 250 個鹼基對有一條多出來的亮帶。那是什麼？",
"type":"validate",
"tier":"A",
"pages":[
"parts",
"engineering"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"non-specific, we said so",
"colony template",
"that is why we sequenced"
],
"kw_zh":[
"非專一性，我們自己寫了",
"菌落模板",
"所以才要定序"
],
"a_en":"Non-specific amplification, and that is written in our own caption rather than waiting to be asked. The 632 base pair band is the junction we were screening; the bright 250 and the faint high-molecular-weight bands come off a colony template, which carries genomic DNA as well as plasmid. It is ordinary for colony PCR and it is exactly why a positive colony still has to be sequence-verified before it goes anywhere.",
"a_zh":"非專一性擴增，而且這是我們自己在圖說裡寫出來的，不是等人問。632 個鹼基對那條是我們要篩的接點；亮的 250 和微弱的高分子量帶來自菌落模板，裡面除了質體還有基因體 DNA。菌落 PCR 本來就會這樣，這也正是陽性菌落還是要先定序確認才能往下用的原因。",
"trap_en":"Apologising for it. It is the one figure where you called an extra band before anyone asked; say that.",
"trap_zh":"為它道歉。那是你們唯一一張在被問之前就自己點出多餘帶的圖；要把這件事說出來。",
"basis":"the easiest figure-level question on the collection",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q479"
},
{
"q_en":"Your fractionation blot has two lanes both labelled S. What is the difference between them?",
"q_zh":"你們的分層墨點圖上有兩道都標著 S。它們差在哪裡？",
"type":"gap",
"tier":"A",
"pages":[
"biomanufacturing",
"results"
],
"seat":"wet2",
"backup":"hw",
"kw_en":[
"not recorded",
"P1, P2, S, S",
"no loading control either"
],
"kw_zh":[
"沒有紀錄",
"P1、P2、S、S",
"也沒有上樣對照"
],
"a_en":"We do not know, and the caption says so. The lanes are P1, P2, S and S; signal appears only in the two supernatant lanes, which is the result, but what distinguishes the duplicates was never written down. The same caption also records that there is no loading control and that the ladders are unlabelled on the original. If those two S lanes are the Csn and SamyQ constructs, that blot would serve two part pages, and I cannot tell you which is which.",
"a_zh":"我們不知道，圖說上也這樣寫。那四道是 P1、P2、S、S；訊號只出現在兩道上清，那就是結果，但兩道重複之間的差別從來沒有被記下來。同一段圖說也記錄了沒有上樣對照，以及原始底片上的標準品沒有標示。如果那兩道 S 是 Csn 和 SamyQ 的構築，這張圖就能服務兩個 part 頁面，而我沒辦法告訴你哪一道是哪一個。",
"trap_en":"Guessing that one is a replicate. The caption says the distinction is unrecorded; say that instead.",
"trap_zh":"猜其中一道是重複。圖說寫的是「沒有紀錄」，要照這個說。",
"basis":"four lanes, two of them identically labelled",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q480"
},
{
"q_en":"On your flagship light blot, what did the red control lane do at eight hours?",
"q_zh":"在你們招牌的那張光控墨點圖上，紅光對照道在八小時做了什麼？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"results",
"parts"
],
"seat":"wet2",
"backup":"wet1",
"kw_en":[
"it peaked too",
"caption never reports it",
"why we moved to ABDQ"
],
"kw_zh":[
"它也達到最強",
"圖說從未交代",
"所以才換成 ABDQ"
],
"a_en":"It showed its strongest band, the same as the green. That is the honest answer and the caption on that figure does not report it; the sentence is on a different part page, where we write that the original construct gave an unclear result because the red reference also peaked at eight hours, which is why we moved to the codon-optimised one. Spectral leakage is one explanation, our red LEDs emit at 640 nanometres where CcaSR wants about 672 to switch off, and we have not tested either directly.",
"a_zh":"它也出現最強的帶，和綠光一樣。那是誠實的答案，而那張圖的圖說沒有交代；那句話在另一個 part 頁面上，我們在那裡寫著：原本的構築結果不清楚，因為紅光參考組在八小時也達到最強，這就是我們換成密碼子最佳化版本的原因。光譜外溢是一個解釋，我們的紅光 LED 發射在 640 奈米，而 CcaSR 需要大約 672 才會關閉，兩個解釋我們都沒有直接驗證。",
"trap_en":"Narrating the green lanes, which is what the caption does. The question is about the lane the caption skips.",
"trap_zh":"照著圖說講綠光那幾道。這題問的是圖說跳過的那一道。",
"basis":"the control the flagship caption goes silent on",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q481"
},
{
"q_en":"This gel screened ten colonies and your next figure says clone fourteen. Where did clone fourteen come from?",
"q_zh":"這張膠篩了十個菌落，下一張圖卻說 clone 14。clone 14 是哪裡來的？",
"type":"gap",
"tier":"A",
"pages":[
"parts"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"lanes numbered 9 to 19",
"a window, not the whole plate",
"caption counts lanes"
],
"kw_zh":[
"道次編號 9 到 19",
"局部，不是整盤",
"圖說數的是道數"
],
"a_en":"The gel answers it, once you look at it. Its lanes are numbered 9 to 19, so the picture is a window onto a bigger plate rather than the whole screen, and clone 14 sits inside that window. The caption's 'one of ten' is counting lanes on the image, not colonies on the plate. The wording should say which ten and it does not, so I can see why it reads as a contradiction.",
"a_zh":"看一下那張膠就有答案了。它的道次編號是 9 到 19，所以這張圖是比較大的盤子的局部，而不是整次篩選，clone 14 就落在這個範圍裡。圖說的「10 個中的 1 個」數的是圖片上的道數，不是盤子上的菌落數。文字應該寫清楚是哪十個，而它沒有，所以我明白為什麼讀起來像矛盾。",
"trap_en":"Saying you cannot reconcile it without looking at the gel. The lane numbers are printed on the image.",
"trap_zh":"沒看膠就說對不起來。道次編號就印在圖片上。",
"basis":"two numbers on adjacent figures of one page",
"ev_en":"BBa_269A97I7 Figure 1: eleven lanes numbered 9 to 19, with the band in lane 14.",
"ev_zh":"BBa_269A97I7 的 Figure 1：十一道，編號 9 到 19，帶在第 14 道。",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q482"
},
{
"q_en":"Which construct's supernatant actually went on the plants?",
"q_zh":"真正噴到植物上的是哪一個構築的上清液？",
"type":"gap",
"tier":"A",
"pages":[
"plant",
"parts"
],
"seat":"plant",
"backup":"wet1",
"kw_en":[
"the Csn construct",
"figure legend names it",
"the cross-reference is wrong"
],
"kw_zh":[
"Csn 的構築",
"圖說上寫著",
"交叉引用是錯的"
],
"a_en":"The Csn ACC deaminase construct. I say that because the figure legend on the plant panel names it, and a legend written at the bench beats an Application sentence written afterwards. The Application paragraph on the Csn page points at the SamyQ page for the same result, which makes a loop, and that sentence is wrong. So we have a plant result for one construct's supernatant, and not a Csn against SamyQ comparison.",
"a_zh":"Csn 的 ACC deaminase 構築。我這樣說，是因為植物那一格的圖說寫的就是它，而在實驗台旁寫下的圖說勝過事後補上的 Application 句子。Csn 頁面上的 Application 段落把同一個結果指向 SamyQ 頁面，造成一個迴圈，而那句話是錯的。所以我們有一個構築上清液的植物結果，但沒有 Csn 對 SamyQ 的比較。",
"trap_en":"Saying 'both'. Only one supernatant was sprayed, and claiming two gives away a comparison you never ran.",
"trap_zh":"回答「兩個都有」。只噴過一種上清液，講兩個等於送出一個你們從沒做過的比較。",
"basis":"two pages that point at each other",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q483"
},
{
"q_en":"Your Application section says this part helped plants under salinity. Did you put this part on a plant?",
"q_zh":"你們的 Application 說這個 part 在鹽逆境下幫助了植物。你們把這個 part 放到植物上了嗎？",
"type":"boundary",
"tier":"A",
"pages":[
"plant",
"parts"
],
"seat":"plant",
"backup":"wet1",
"kw_en":[
"no part touched a plant",
"filtered WB800 supernatant",
"evidence stops at the cargo"
],
"kw_zh":[
"沒有 part 碰過植物",
"過濾的 WB800 上清",
"證據只到 cargo"
],
"a_en":"No. Every trial applied a 0.22 micron filtered culture supernatant from WB800 carrying one of the cassettes, so the evidence reaches the cargo and stops there. We cannot tell you from any plant figure whether a 2.1 coding variant outperforms its wild type, because that comparison was never run on a plant. The sentence should read 'the supernatant from this construct', and where it says 'this part' that is us overreaching.",
"a_zh":"沒有。每一次試驗施用的都是帶著某個卡匣的 WB800、經 0.22 微米過濾的培養上清，所以證據到 cargo 這一層就停了。任何一張植物圖都無法告訴你某個 2.1 編碼變體是否優於它的野生型，因為那個比較從來沒有在植物上做過。那句話應該寫「這個構築的上清液」，寫成「這個 part」就是我們講過頭了。",
"trap_en":"Defending the sentence. Correcting your own wording in the room costs less than having it corrected for you.",
"trap_zh":"替那句話辯護。在現場自己更正用字，代價小於被別人更正。",
"basis":"the claim that sits on twenty Application sections",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q484"
},
{
"q_en":"Your vehicle control suppresses plant growth by a factor of ten. What does that do to your protectant results?",
"q_zh":"你們的載體對照把植物生長壓了十倍。這對你們的保護蛋白結果有什麼影響？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"plant"
],
"seat":"plant",
"backup":"biz",
"kw_en":[
"0.065 g against 0.006 g",
"read against matched vehicle",
"not against medium alone"
],
"kw_zh":[
"0.065 g 對 0.006 g",
"對比配對的載體",
"不是對純培養基"
],
"a_en":"It means every protectant result has to be read against a matched vehicle control and not against medium alone, which is what we did. Undiluted TB medium carrying WB800 drops fresh weight from about 0.065 grams to about 0.006, and even one in sixteen stays well below the no-medium group. So the comparison that counts is one-in-forty protectant against one-in-forty WB800, both carrying the same suppressive vehicle. It also means we cannot quote an absolute effect size against an untreated plant.",
"a_zh":"這表示每一個保護蛋白的結果都必須對照配對的載體對照來讀，而不是對照純培養基，而我們就是這樣做的。未稀釋、帶著 WB800 的 TB 培養液把鮮重從大約 0.065 公克壓到大約 0.006，就算稀釋到十六分之一，還是遠低於完全沒有培養液的組。所以真正算數的比較是 1/40 的保護蛋白對 1/40 的 WB800，兩邊帶著同樣會抑制生長的載體。這也表示我們沒辦法引用一個相對於未處理植物的絕對效果量。",
"trap_en":"Treating the vehicle figure as a problem to explain away. It is the control that makes the rest readable.",
"trap_zh":"把載體那張圖當成要辯解掉的問題。它正是讓其他結果可讀的那個對照。",
"basis":"a figure the team published themselves, and should lead with",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q485"
},
{
"q_en":"Your heat-stressed untreated plate is marked contaminated on the figure itself. What is the claim then?",
"q_zh":"你們熱逆境的未處理對照盤，在圖上就被標記為污染。那你們的主張是什麼？",
"type":"gap",
"tier":"A",
"pages":[
"plant",
"results"
],
"seat":"plant",
"backup":"wet1",
"kw_en":[
"three of eight contaminated",
"stars compare the wrong pair",
"no tested advantage"
],
"kw_zh":[
"八盤中三盤污染",
"星號比錯了對象",
"沒有經檢定的優勢"
],
"a_en":"The claim is weaker than the panel looks, and our own caption says so. Three of the eight plates are marked contaminated, including the untreated heat-stressed control, which is the one the treatment would have to beat. The significance brackets run from the unstressed control to everything else, so they do not compare a treated group with its own stressed control. No panel there shows a statistically tested advantage of ACC deaminase. We left both facts on the public page rather than cropping them out.",
"a_zh":"主張比那張圖看起來弱，而我們自己的圖說就這樣寫。八個盤裡有三個被標記污染，包括未處理的熱逆境對照，而那正是處理組必須勝過的對象。顯著性的括號是從無逆境對照連到其他所有組，所以它們並沒有拿處理組和它自己的逆境對照相比。那裡沒有任何一格顯示 ACC deaminase 有經統計檢定的優勢。我們把這兩件事都留在公開頁面上，沒有裁掉。",
"trap_en":"Reading the panel as a positive result. The honest version is stronger here than the optimistic one.",
"trap_zh":"把那張圖讀成正面結果。在這裡誠實的版本比樂觀的版本更有力。",
"basis":"the team's own legend writes the judge's question for them",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q486"
},
{
"q_en":"Your BoPep4 helped plants at one dilution out of four. Is that a result?",
"q_zh":"你們的 BoPep4 在四個稀釋倍數裡只有一個對植物有幫助。那算結果嗎？",
"type":"validate",
"tier":"A",
"pages":[
"plant",
"parts"
],
"seat":"plant",
"backup":"wet2",
"kw_en":[
"one dilution, one run, no repeat",
"two of three readouts",
"third panel reverses"
],
"kw_zh":[
"一個稀釋、一次、沒重複",
"三個指標裡的兩個",
"第三格反過來"
],
"a_en":"It is an observation, not a result. One in forty improved fresh weight and chlorophyll per plant against both controls in one unreplicated hydroponic run, and one in sixty, eighty and a hundred gave nothing. On the third panel, relative chlorophyll, the medium-only control is actually the highest salt-stressed group, above one in forty. So the honest sentence is that a filtered supernatant improved two of three readouts at a single dilution in one run, and we say that rather than calling it salinity rescue.",
"a_zh":"那是一個觀察，不是一個結果。在一次沒有重複的水耕試驗裡，1/40 在鮮重和每株葉綠素上都勝過兩個對照，而 1/60、1/80、1/100 完全沒有效果。在第三格的相對葉綠素上，純培養基對照其實是鹽逆境組裡最高的，高過 1/40。所以誠實的說法是：一次試驗、單一稀釋倍數下，過濾上清改善了三個指標裡的兩個；我們這樣說，而不是說它拯救了鹽逆境。",
"trap_en":"Quoting the strongest panel and skipping the third. The judge has the figure open.",
"trap_zh":"只引用最強的那一格、跳過第三格。評審圖就開著。",
"basis":"dose-response with one responder and no repeat",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q487"
},
{
"q_en":"Only six of your forty-one parts have a characterisation section. Why so few?",
"q_zh":"你們四十一個 parts 裡只有六個有 characterisation 區段。為什麼這麼少？",
"type":"fact",
"tier":"A",
"pages":[
"parts",
"measurement"
],
"seat":"wet1",
"backup":"wet2",
"kw_en":[
"only ACC deaminase was measured",
"BoPep4 too small to blot",
"no LEA14 blot exists"
],
"kw_zh":[
"只有 ACC deaminase 被量過",
"BoPep4 太小跑不出來",
"LEA14 沒有墨點圖"
],
"a_en":"Because characterisation means measured behaviour and we only have it for ACC deaminase. All six are ACCD. BoPep4 is twenty-three residues and does not resolve on a standard blot, which is why ELISA is its detection method, and we never ran a blot for LEA14 at all. Writing a characterisation section for the other thirty-five would mean writing up something we did not measure, and I would rather have an empty slot than that.",
"a_zh":"因為 characterisation 指的是量到的行為，而我們只有 ACC deaminase 有。六個全部是 ACCD。BoPep4 只有二十三個胺基酸，標準墨點圖解析不出來，所以它的偵測方法是 ELISA；LEA14 我們則完全沒有跑過墨點圖。替其他三十五個寫 characterisation，就等於寫我們沒有量過的東西，我寧可留白。",
"trap_en":"Promising they are coming. Say what exists, say why the rest does not, and stop.",
"trap_zh":"承諾之後會補。講清楚現在有什麼、其他為什麼沒有，然後停住。",
"basis":"a coverage gap visible from the collection index",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q488"
},
{
"q_en":"Your DNPH assay shows a fourteen-fold light response at thirteen hours and the opposite at sixteen. What happened?",
"q_zh":"你們的 DNPH 在十三小時顯示十四倍的光反應，十六小時卻反過來。發生了什麼事？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"results",
"measurement"
],
"seat":"wet2",
"backup":"dry",
"kw_en":[
"neither point repeated",
"error bar 5 to 16",
"colour p = 0.72"
],
"kw_zh":[
"兩點都沒重複",
"誤差棒 5 到 16",
"顏色 p = 0.72"
],
"a_en":"We do not know, and the shape of the data says we should not read much into either point. Thirteen hours gives green over red fourteen to one, the cleanest light response this assay has produced. Sixteen hours inverts it. Neither point is repeated, the error bar on the thirteen hour green point runs from about five to sixteen on the activity scale, and across both times colour comes out at p equals 0.72. The experiment that would settle it is one culture, one maturation time, both colours, repeated, and it is not in our record.",
"a_zh":"我們不知道，而且數據的形狀告訴我們兩個點都不該讀太多。十三小時綠光以十四比一勝過紅光，是這個檢測給過我們最乾淨的光反應。十六小時反轉。兩個點都沒有重複，十三小時綠光那一點的誤差棒在活性尺度上從大約五延伸到十六，而兩個時間合起來看，顏色的 p 值是 0.72。能定案的實驗是同一批培養、固定一個成熟時間、兩種顏色、做重複，而我們的紀錄裡沒有。",
"trap_en":"Leading with the fourteen-fold number. It is the one a judge will ask you to defend.",
"trap_zh":"用十四倍這個數字開場。那正是評審會要你辯護的那一個。",
"basis":"a single-well result with a reversal three hours later",
"dom":"registry",
"star":0,
"nodes":[],
"figs":[],
"id":"q489"
},
{
"q_en":"What is the single piece of evidence on your Registry you would stake the project on?",
"q_zh":"你們 Registry 上，哪一個證據是你敢拿整個專題去賭的？",
"type":"impact",
"tier":"A",
"pages":[
"results",
"biomanufacturing"
],
"seat":"wet2",
"backup":"hw",
"kw_en":[
"the shell permeate",
"above 2 ug/mL through 72 h",
"active from 18 h, 6.3 U/mg"
],
"kw_zh":[
"殼側透過液",
"72 小時維持 2 µg/mL 以上",
"18 小時起有活性、6.3 U/mg"
],
"a_en":"The permeate. ACC deaminase in shell permeate above two micrograms per millilitre through a seventy-two hour run, and catalytically active from eighteen hours, with specific activity reaching 6.3 units per milligram and holding between five and eight through to seventy-two. It is the one place where protein identity, protein quantity and enzyme function are measured on the same material coming out of the rig, and the lag between the protein appearing and the activity appearing is itself informative.",
"a_zh":"透過液。殼側透過液裡的 ACC deaminase 在七十二小時的運轉中維持在兩微克每毫升以上，而且從十八小時起具有催化活性，比活性達到 6.3 單位每毫克，一路到七十二小時維持在五到八之間。那是唯一一個地方：蛋白的身分、蛋白的量和酵素的功能，量的是同一份從機器裡出來的材料；而且蛋白先出現、活性後出現的那個時間差本身就有意義。",
"trap_en":"Reaching for the ELISA construct panel or a DNPH plate. Those did not clear their controls.",
"trap_zh":"去拿 ELISA 的構築面板或某一盤 DNPH。那些沒有通過自己的對照。",
"basis":"asked when a panel wants your strongest card",
"dom":"registry",
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q490"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q491"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q492"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q493"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q494"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q495"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q496"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q497"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q498"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q499"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q500"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q501"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q502"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q503"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q504"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q505"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q506"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q507"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q508"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q509"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q510"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q511"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q512"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q513"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q514"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q515"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q516"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q517"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q518"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q519"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q520"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q521"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q522"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q523"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q524"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q525"
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
"deep":0,
"star":0,
"nodes":[],
"figs":[],
"id":"q526"
},
{
"q_en":"Your truncation series was ranked on HADDOCK score. Take me inside that number: what is it a sum of, and what does it leave out that matters for a flexible peptide?",
"q_zh":"你們的截短系列是用 HADDOCK score 排序的。請帶我看看這個數字裡面有什麼：它是哪些項加起來的？對一個柔軟的肽來說，它漏掉了什麼？",
"type":"boundary",
"tier":"A",
"deep":1,
"pages":[
"protein-design/methodology",
"protein-design/sprints"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"four weighted terms",
"93% length and charge",
"anchor 13 A out"
],
"kw_zh":[
"四個加權項",
"93% 由長度與電荷解釋",
"錨點偏 13 Å"
],
"a_en":"It is a weighted sum of four terms, van der Waals, electrostatics, desolvation and the restraint energy, in arbitrary units. No entropy term, and it is not a free energy. Our audit on 30 July found 93 percent of its variance across BoPEP4 variants is explained by length and net charge alone, and its correlation with Pearce's measured activities is rho about plus 0.05. Worse, our best-scoring and most convergent cluster is the one with the C-terminal anchor 13 angstrom out of place, and its whole advantage sat in the electrostatic term. So we compare per unit of interface, never raw.",
"a_zh":"它是四個項的加權和：van der Waals、靜電、去溶劑化，還有 restraint 能量，單位是任意單位。沒有熵的項，也不是自由能。我們 7 月 30 日的審查發現，BoPEP4 各變異體之間的分數變異有 93% 只用長度和淨電荷就能解釋，而它跟 Pearce 量測活性的相關係數 rho 大約只有 +0.05。更糟的是，我們分數最好、收斂最好的那個 cluster，正是 C 端錨點偏離 13 Å 的那一個，而它的優勢全部來自靜電項。所以我們一律換算成每單位界面來比，不看原始分數。",
"trap_en":"Defending a score difference between two rungs. A longer chain buries more surface and scores better for that reason alone.",
"trap_zh":"替兩個階梯之間的分數差辯護。鏈越長埋藏面積越大，光是這一點就讓分數變好。",
"basis":"judge pattern: make them define the metric their own figure is drawn on",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q527"
},
{
"q_en":"Your methodology page says nine two-body docking runs on BoPEP4 produced nothing usable. What went wrong, and what did you do instead?",
"q_zh":"你們的 methodology 頁寫，BoPEP4 的九次雙體 docking 沒有一個可用。問題出在哪裡？後來你們改做什麼？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"protein-design/methodology",
"protein-design/sprints"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"best only 4.44 A",
"nine different start conformers",
"neutral termini deleted the anchor"
],
"kw_zh":[
"最好只有 4.44 Å",
"九個不同起始構形",
"中性端刪掉了錨點"
],
"a_en":"Measured against the crystal, no cluster representative came within 4 angstrom of the native backbone and the best reached 4.44. The run with the tightest convergence put the conserved C-terminal anchor 13 angstrom out of position. Two faults explain it. Each of the nine runs started from a different peptide conformation, so the series was never a controlled comparison. And every run built the termini neutral, which deletes the C-terminal carboxylate that makes the 2.40 angstrom anchor contact, so the thing the peptide binds with was not in the model. We moved to threading on the crystal backbone and kept HADDOCK for refinement only.",
"a_zh":"跟晶體比對後，沒有任何一個 cluster 代表結構落在原生主鏈 4 Å 以內，最好的是 4.44 Å。而收斂最緊的那一次，把保守的 C 端錨點放偏了 13 Å。兩個錯誤造成這件事：九次 run 各自從不同的肽構形出發，所以這個系列從來不是受控比較；而且每一次都把兩端建成中性，這會刪掉形成 2.40 Å 錨點接觸的 C 端羧基，也就是肽真正用來結合的那個基團根本不在模型裡。後來我們改成在晶體主鏈上 threading，HADDOCK 只留著做精修。",
"trap_en":"Presenting the docking as a successful prediction. It did not reproduce the crystal, and the page says so.",
"trap_zh":"把 docking 說成成功的預測。它沒有重現晶體，頁面上也這樣寫。",
"basis":"the negative result the team published about its own main tool",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q528"
},
{
"q_en":"Your cross-run table reports backbone RMSD. What is that actually tracking, and why do you refuse to rank constructs on it?",
"q_zh":"你們的跨 run 表格有報 backbone RMSD。它實際上在追蹤什麼？為什麼你們不用它來替構築排名？",
"type":"boundary",
"tier":"B",
"deep":1,
"pages":[
"md-simulations",
"protein-design/molecular-dynamics"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"movement, not grip",
"Spearman +0.29 salt bridge",
"RMSD ranks 6xHis first"
],
"kw_zh":[
"位移，不是抓力",
"鹽橋 Spearman +0.29",
"RMSD 把 6xHis 排第一"
],
"a_en":"Backbone RMSD is how far the peptide has moved from where it started, not how well the receptor is holding it. Across our eight peptide-bearing runs it tracks the Asn23 to Arg487 salt bridge at Spearman plus 0.29, and the four-contact clamp at plus 0.03, the wrong way; contact count does better at plus 0.55. The proof is in our own table. Ranked on RMSD, the 6xHis construct comes first in the whole set, and that is the one construct with no salt bridge left to measure. RMSF did answer its own question: Gly1 fluctuates 3.51 angstrom and everything from Glu12 on stays under one.",
"a_zh":"Backbone RMSD 量的是肽離起點移動了多遠，不是受體抓得有多穩。在我們八個帶肽的 run 裡，它跟 Asn23 對 Arg487 的鹽橋相關是 Spearman +0.29，跟四接觸的 clamp 是 +0.03，而且方向是反的；接觸數好一些，是 +0.55。證據就在我們自己的表上：照 RMSD 排，6xHis 構築是全套第一名，而那正是唯一一個已經沒有鹽橋可以量的構築。RMSF 倒是回答了它自己能回答的問題：Gly1 擺動 3.51 Å，從 Glu12 往後都在 1 Å 以內。",
"trap_en":"Treating a low RMSD as a stable complex. On our set the most stable-looking run is the broken construct.",
"trap_zh":"把低 RMSD 當成複合體穩定。在我們這一套裡，看起來最穩的那個 run 就是壞掉的構築。",
"basis":"the metric a judge will see on the figure and read as stability",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q529"
},
{
"q_en":"Thirty nanoseconds, one seed per system. Put a number on the gap between that and the process you care about, and tell me what the single seed costs you.",
"q_zh":"每個系統 30 奈秒、只有一個隨機種子。請給我一個數量級，說明這跟你們真正在意的過程差多少？只有一個種子又讓你們失去什麼？",
"type":"boundary",
"tier":"A",
"deep":1,
"pages":[
"md-simulations",
"protein-design/molecular-dynamics"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"three to six orders short",
"one seed, one relaxation path",
"apo floor half an angstrom"
],
"kw_zh":[
"短三到六個數量級",
"一個種子一條鬆弛路徑",
"apo 底線約半 Å"
],
"a_en":"Thirty nanoseconds is three to six orders of magnitude short of a dissociation event, so nothing on that page is an affinity, an off rate or a free energy. The 15-23 run was meant to give us a leaving time and could not have, whatever it did. Each system has one seed after the same equilibration schedule, so a difference between two runs may only be two relaxation paths. And pH 5.5 means we held three histidines protonated for the whole thirty nanoseconds from model pKa values, not constant-pH MD. The apo run is the guard rail: any receptor-side difference under about half an angstrom sits inside its floor.",
"a_zh":"30 奈秒比一次解離事件短了三到六個數量級，所以那一頁上沒有任何東西是親和力、解離速率或自由能。15-23 那個 run 本來是要給我們一個離開時間，但不管它跑出什麼都給不了。每個系統在同一套平衡流程之後只有一個種子，所以兩個 run 之間的差異可能只是兩條鬆弛路徑。而所謂 pH 5.5，其實是我們依模型 pKa 把三個 histidine 固定成質子化狀態整整 30 奈秒，不是 constant-pH MD。apo 那個 run 是護欄：受體端小於大約半個 Å 的差異，都落在它的底線裡面。",
"trap_en":"Calling thirty nanoseconds a stability measurement, or reading a difference between two single-seed runs as a result.",
"trap_zh":"把 30 奈秒說成穩定性的量測，或把兩個單種子 run 之間的差異當成結果。",
"basis":"judge pattern: how long, how many, and what does that buy",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q530"
},
{
"q_en":"You report AlphaFold confidence for these complexes. What did the 0.73 against 0.74 result tell you, and what did you change because of it?",
"q_zh":"你們有報這些複合體的 AlphaFold 信心值。0.73 對 0.74 那個結果告訴你們什麼？你們因此改了什麼？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"protein-design/methodology",
"protein-design/sprints"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"0.73 dead vs 0.74 wild type",
"confidence is not activity",
"pDockQ2 per chain pair"
],
"kw_zh":[
"0.73 死的對 0.74 野生型",
"信心不是活性",
"pDockQ2 逐對計分"
],
"a_en":"Our 30 July audit found AlphaFold 3 returned ipTM 0.73 for a peptide published as more than four thousandfold inactive, against 0.74 for BoPEP4. Confidence is not activity, so after that we used it only as a structural confidence estimate and never to rank a design. Two things changed. We score each chain pair separately with pDockQ2, because one averaged number lets a confident pair hide a failed one. And we gate before the unknown: per-residue confidence across the groove, a Ramachandran and clash check, and US-align onto 5GR8 so the groove has to superpose. Five models from one seed are the predictor's uncertainty about one answer, not an ensemble.",
"a_zh":"我們 7 月 30 日的審查發現，AlphaFold 3 給一個文獻上活性差四千倍以上的肽 ipTM 0.73，而 BoPEP4 是 0.74。信心值不是活性，所以之後我們只把它當結構信心的估計，絕不用它替設計排名。有兩件事因此改了：我們用 pDockQ2 對每一組鏈分開計分，因為單一平均值會讓一組有信心的界面蓋住另一組失敗的；還有我們在跑未知目標前先設門檻——溝槽上的逐殘基信心、Ramachandran 與碰撞檢查，以及用 US-align 疊到 5GR8，溝槽必須疊得起來。同一個種子的五個模型只是預測器對一個答案的不確定度，不是構形集合。",
"trap_en":"Quoting a confidence value as evidence the peptide binds. Published benchmarks also put receptor-peptide-co-receptor assemblies among the harder cases.",
"trap_zh":"拿信心值當作肽會結合的證據。文獻的 benchmark 也把受體—肽—共受體這類組裝列為較難的案例。",
"basis":"confidence scores read as activity is the commonest in-silico overclaim",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q531"
},
{
"q_en":"You cut eight residues off the front for the 9-23 candidate. Tell me what each part of that segment was doing, and what your own MD says about cutting at nine.",
"q_zh":"為了 9-23 這個候選，你們把前面八個殘基切掉。請說明那一段裡各個部分原本在做什麼，還有你們自己的 MD 對「切在 9」有什麼說法？",
"type":"design",
"tier":"A",
"deep":1,
"pages":[
"protein-design/sprints",
"md-simulations",
"protein-design/methodology"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"1 to 6 bury nothing",
"Lys7 is an anchor",
"clamp 77% vs 98.5%"
],
"kw_zh":[
"1 到 6 不埋任何面積",
"Lys7 是錨點",
"clamp 77% 對 98.5%"
],
"a_en":"Residues one to six make no receptor contact and the hydrophobic GILIG block is a secretion liability, so cutting them costs nothing we can measure. Lysine 7 is different: it is the first belt residue, and K7A was the only alanine mutant that moved the peptide, by 1.62 angstrom. Cutting at nine removes that anchor while keeping the nine to fourteen segment it was holding, and clamp integrity drops to 77 percent against 98.5 for 7-23 and 99.9 for 15-23. The ladder is not monotonic; it dips at 9-23. Shorter is not worse, losing an anchor without its segment is. All three cuts are in the panel, so the bench can settle it.",
"a_zh":"殘基 1 到 6 不跟受體接觸，而疏水的 GILIG 區塊對分泌是個負擔，所以切掉它們沒有我們量得出來的代價。Lysine 7 不一樣：它是帶狀結構的第一個殘基，而 K7A 是唯一一個會讓肽移動的 alanine 突變，移了 1.62 Å。切在 9 等於把那個錨點拿掉，卻留著它原本在固定的 9 到 14 這一段，於是 clamp 完整度掉到 77%，7-23 是 98.5%，15-23 是 99.9%。這個階梯不是單調的，它在 9-23 凹下去。所以不是越短越差，是失去錨點卻留著它錨住的那一段比較差。三個切點都在 panel 裡，所以這件事實驗桌可以定。",
"trap_en":"Saying 1-8 does nothing. Lys7 and Lys8 are not the same residue, and our own pages disagree about whether 7-23 was ordered.",
"trap_zh":"說 1 到 8 什麼都沒做。Lys7 跟 Lys8 不一樣，而我們自己的頁面對 7-23 有沒有訂也說法不一。",
"basis":"the production molecule's boundary is the one design choice the bench inherits",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q532"
},
{
"q_en":"Suppose I grant you the structural work. Design me the bench experiment that decides whether that short motif is sufficient, and name what makes it interpretable.",
"q_zh":"假設我接受你們的結構工作。請設計一個實驗桌上的實驗，決定那個短 motif 到底夠不夠，並說出什麼能讓它被解讀。",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"engineering",
"results",
"measurement"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"three cuts against two dead controls",
"quantify before activity",
"untransformed host control"
],
"kw_zh":[
"三個切點對兩個死對照",
"先定量再測活性",
"未轉型宿主對照"
],
"a_en":"The panel is already built for it: three truncations, 7-23, 9-23 and 15-23, on one backbone, beside S15A and G17A, which published work puts about a hundredfold and more than four thousandfold down. The plan on our Engineering page is to grow verified transformants in the reactor under dark and red or green light, take lumen lysate, lumen medium and shell medium at each time point, and run anti-His blots, then compare each variant against its constitutive version. Two things make it readable. Quantify before activity, because activity per milligram is the number that means something. And carry an untransformed host control, because ours has already read in the same range as the constructs once.",
"a_zh":"這個 panel 本來就是為它建的：同一個骨架上三個截短版 7-23、9-23、15-23，旁邊放 S15A 和 G17A，文獻把它們放在大約差一百倍和四千倍以上。我們 Engineering 頁上的計畫是：把定序確認的轉型株放進反應器，在暗處、紅光和綠光下培養，每個時間點取管腔細胞裂解液、管腔培養液和殼側培養液，跑 anti-His 墨點，再把每個變異體跟它的組成型版本比。有兩件事讓它能讀：先定量再測活性，因為有意義的數字是每毫克的活性；還要帶未轉型的宿主對照，因為我們的宿主對照已經有一次讀到跟構築同一個範圍。",
"trap_en":"Describing a blot without a quantified denominator. Protein per millilitre of supernatant is not activity per milligram of enzyme.",
"trap_zh":"描述一個沒有定量分母的墨點。每毫升上清液的蛋白量不等於每毫克酵素的活性。",
"basis":"judge pattern: turn an in-silico claim into a falsifiable experiment",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q533"
},
{
"q_en":"Six histidines on a peptide this short. Beyond the anchor contact you have told me about, what is that tag doing?",
"q_zh":"在這麼短的肽上掛六個 histidine。除了你們已經說過的錨點接觸之外，這個標籤還做了什麼？",
"type":"design",
"tier":"B",
"deep":1,
"pages":[
"md-simulations",
"protein-design/sprints",
"engineering"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"six residues on nine",
"no OXT, so no bond",
"tandem reaches it too"
],
"kw_zh":[
"九個殘基上掛六個",
"沒有 OXT 就沒有鍵",
"串聯分析也得出同一結論"
],
"a_en":"On the registered truncation fusion the payload is nine residues and the tag is six, so most of what we secrete is tag. Position matters more than that. Asn23 is held by five contacts, the shortest being its OXT to Arg487 at 2.40 angstrom. On the tagged construct there is no OXT at all: Asn23 became internal and its carboxylate was spent forming the bond to His24, which is why 2.4 percent occupancy there is not a weak salt bridge, it is no salt bridge. Our tandem-repeat analysis reached the same conclusion from chain chemistry alone. The June and July cassettes append the tag directly after the peptide; constructs ordered after 16 August put it at the front.",
"a_zh":"在已登錄的截短融合裡，酬載是九個殘基、標籤是六個，所以我們分泌出去的東西大部分是標籤。但位置比這個更重要。Asn23 是靠五個接觸固定的，最短的是它的 OXT 對 Arg487 的 2.40 Å。而在帶標籤的構築上根本沒有 OXT：Asn23 變成內部殘基，它的羧基被用去跟 His24 形成鍵，所以那裡 2.4% 的占有率不是「弱鹽橋」，是沒有鹽橋。我們的串聯重複分析只用鏈端化學也得到同一個結論。6、7 月的卡匣是把標籤直接接在肽後面；8 月 16 日之後訂的構築改放在前面。",
"trap_en":"Saying every construct is N-terminal. Engineering records C-terminal in the design text and N-terminal in the construct table, with primers for both.",
"trap_zh":"說所有構築都是 N 端。Engineering 的設計文字寫 C 端、構築表寫 N 端，而且兩個方向的 primer 都有。",
"basis":"the project's own caught-in-time mistake, pushed one step further",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q534"
},
{
"q_en":"Of everything on your protein design pages, what has an experimental counterpart?",
"q_zh":"你們蛋白質設計那幾頁上的東西，有哪些有對應的實驗？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"results",
"measurement",
"engineering",
"md-simulations"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"ACC deaminase yes, the other two no",
"3.4 to 6.5 ug/mL",
"AmilCP never coloured"
],
"kw_zh":[
"ACC deaminase 有，另兩個沒有",
"3.4 到 6.5 µg/mL",
"AmilCP 沒出顏色"
],
"a_en":"One of the three, and I should be precise about which. ACC deaminase has bench work: anti-His ELISA puts it between 3.4 and 6.5 micrograms per millilitre through both October reactor runs, the 2 August fractionation blot found it in the supernatant and not the pellets, and in one salt experiment treated plants held more chlorophyll than their controls. BoPEP4 and LEA14 have none. No binding assay, no thermal shift, and their effects on plants remain untested, so the activity assay that would rank the truncations against our two dead controls is not among our results. The reporter we expected to read by eye, AmilCP, never coloured the medium at all.",
"a_zh":"三個裡面只有一個，而我應該講清楚是哪一個。ACC deaminase 有實驗：anti-His ELISA 在十月兩次反應器實驗中都把它放在每毫升 3.4 到 6.5 微克，8 月 2 日的分層墨點在上清液裡找到它、沉澱裡沒有，而在一次鹽逆境實驗中處理過的植株葉綠素比對照高。BoPEP4 和 LEA14 都沒有：沒有結合實驗、沒有熱位移，對植物的效果也還沒測，所以能把截短版和兩個死對照排序的活性實驗不在我們的結果裡。而我們本來打算用肉眼判讀的 AmilCP 報告子，培養液從來沒有出現顏色。",
"trap_en":"Saying nothing has been tested. ACC deaminase now has a quantified ELISA and a plant result, and claiming otherwise undersells real work.",
"trap_zh":"說什麼都還沒測。ACC deaminase 現在有定量的 ELISA 和植物結果，講得太低反而低估了真正做過的工作。",
"basis":"team's own gap: two of three designed protectants have no bench counterpart",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q535"
},
{
"q_en":"AlphaFold and HADDOCK are free, and every team in your village can run them. What in this work is yours?",
"q_zh":"AlphaFold 和 HADDOCK 都是免費的，你們 village 裡每一隊都跑得動。那這份工作裡，哪一部分是你們自己的？",
"type":"history",
"tier":"B",
"deep":1,
"pages":[
"protein-design/methodology",
"protein-design/sprints"
],
"seat":"dry",
"backup":"wet2",
"kw_en":[
"ran the dead peptide",
"the mutation that did not exist",
"refused to dock the enzyme"
],
"kw_zh":[
"跑了死掉的肽",
"不存在的那個突變",
"拒絕 dock 那個酵素"
],
"a_en":"Not the tools. Three things. We ran the controls that embarrass the tools: the four-thousandfold-dead peptide scored 0.73 against wild type's 0.74, and the score audit voided every claim resting on a score difference. We caught a sequence error with an alignment: a substitution our design document called Y156C does not exist in our protein, it is F156C, and three docking runs had already gone out against the wrong background. And we declined to dock ACC deaminase at all, because its cofactor and substrate are covalently attached before chemistry starts, so a docking number would have meant nothing. We followed the field rather than our own familiarity.",
"a_zh":"不是工具，是三件事。第一，我們跑了會讓工具難堪的對照：那個活性差四千倍的肽拿到 0.73，野生型是 0.74；而分數審查作廢了所有建立在分數差上的主張。第二，我們用序列比對抓到一個錯誤：設計文件一直叫 Y156C 的突變在我們的蛋白裡根本不存在，它是 F156C，而那時已經有三次 docking 用錯的背景送出去了。第三，我們決定完全不對 ACC deaminase 做 docking，因為它的輔因子和受質在化學反應開始前就已經共價接上，docking 的數字不會有意義。我們選擇跟著這個領域的做法，而不是跟著自己熟悉的工具。",
"trap_en":"Claiming the pipeline is novel. The pipeline is standard; the controls, the caught error and the tool we refused to use are what a team adds now.",
"trap_zh":"說這個流程很新。流程是標準的；現在一支隊伍能加上的，是對照、抓到的錯誤，以及我們拒絕使用的那個工具。",
"basis":"positioning: everyone runs the same tools, so what counts is the control",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q536"
},
{
"q_en":"Write down the state vector of your Kalman filter for me, and tell me what the process noise term and the measurement noise term mean physically in your bioreactor.",
"q_zh":"請你把 Kalman filter 的 state vector 寫出來，然後告訴我 process noise 和 measurement noise 這兩項，在你們的生物反應器裡實際上代表什麼物理意義。",
"type":"design",
"tier":"A",
"deep":1,
"pages":[
"software",
"biomanufacturing"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"level and trend",
"sensor lying",
"biology moved"
],
"kw_zh":[
"level 與 trend",
"感測器在騙人",
"生物真的變了"
],
"a_en":"Two states: the level of the OD600 reading and its trend. So the state is where the culture is and how fast it is moving, nothing more. Measurement noise is everything between the culture and the number, lamp drift, bubbles, the scatter of the photometer itself; windows carrying more than twenty percent bubbles are thrown out before the filter ever sees them. Process noise is the real change we cannot predict, a lag ending, a plateau, the fall we saw between 120 and 160 hours. One term says the sensor is lying, the other says the biology moved. The settings we ran are recorded with the figure data, not in the page text, which is a fair criticism.",
"a_zh":"兩個 state：OD600 讀值的 level，還有它的 trend。所以 state 就是培養液現在在哪、走多快，沒有別的。Measurement noise 是培養液到那個數字之間的所有東西，燈源漂移、氣泡、photometer 本身的散佈；氣泡超過兩成的視窗在進 filter 之前就被丟掉了。Process noise 是我們預測不到的真實變化，lag 結束、進入 plateau、還有 120 到 160 小時那次下降。一項在說感測器在騙人，另一項在說生物真的變了。我們實際用的參數是記在圖的資料檔裡，不在頁面文字上，這點被批評是合理的。",
"trap_en":"Reciting that the filter 'tracks biomass and growth rate' when the state is the optical reading, and quoting covariance values as if the page printed them.",
"trap_zh":"把 state 說成「生物量和生長速率」，其實是光學讀值；或把 covariance 數值講得好像頁面上有寫。",
"basis":"a filter is only as defensible as its state and noise model",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q537"
},
{
"q_en":"Bacterial growth is exponential and then saturates, which is not linear, and your noise is not obviously Gaussian. Why is a linear filter defensible here at all, and what happens when your covariance settings are wrong for a run?",
"q_zh":"細菌生長是指數成長然後飽和，這不是線性的，而且你們的雜訊也不見得是 Gaussian。那用線性 filter 到底為什麼站得住腳？如果 covariance 設定對某一次實驗來說是錯的，會發生什麼事？",
"type":"design",
"tier":"A",
"deep":1,
"pages":[
"software"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"tracking not modelling",
"trend pays further out",
"run 7 flipped it"
],
"kw_zh":[
"追蹤不是建模",
"trend 要長時距才划算",
"run 7 整個翻轉"
],
"a_en":"Because we are tracking growth, not modelling it. Over two to twelve hours exponential growth is nearly a straight line, so level and trend is a local approximation refreshed at every reading, and the models that assume a shape lose: exponential assumes growth keeps accelerating, global linear weighs old data as heavily as new. The best evidence of what wrong settings cost is our own repeat. We left the filter exactly as it was and scored run 7, and the advantage turned over: 41 percent better than persistence at two hours in September became nothing at two hours, and a quarter at eight and twelve. Run 7 climbs in steps, so the trend term only pays further out.",
"a_zh":"因為我們是在追蹤生長，不是在建模。在兩到十二小時的尺度上，指數成長幾乎就是一條直線，所以 level 加 trend 是一個局部近似，每筆讀值都重新更新；假設形狀的模型就輸了，exponential 假設生長一直加速，global linear 把舊資料看得跟新資料一樣重。參數不對會付什麼代價，最好的證據是我們自己的重複實驗：filter 設定完全不動，拿 run 7 再評一次，優勢整個翻轉——九月在兩小時好 41%，run 7 在兩小時變成完全沒有優勢，八小時和十二小時各好四分之一。run 7 的讀值是一階一階往上爬，所以 trend 這一項要比較長的時距才划算。",
"trap_en":"Quoting the 41 percent as if it held on both runs; on run 7 the two-hour gain is zero with the same settings.",
"trap_zh":"把 41% 講成兩次實驗都成立；同樣設定下 run 7 的兩小時優勢是零。",
"basis":"model misspecification is the first thing a modeller is examined on",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q538"
},
{
"q_en":"Given the sensors you actually have working on the bioreactor, which states are genuinely inferable and which are not? And when a reading fails its own checks mid-run, what does the filter actually receive?",
"q_zh":"就生物反應器上真正能用的感測器來說，哪些 state 是真的推得出來的，哪些推不出來？還有跑到一半某筆讀值沒通過自己的檢查時，filter 實際上收到的是什麼？",
"type":"boundary",
"tier":"A",
"deep":1,
"pages":[
"software",
"biomanufacturing"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"photometer not biomass",
"gate holds last value",
"blind above the beam"
],
"kw_zh":[
"預測讀值不是生物量",
"gate 沿用上一筆",
"光束之上就瞎了"
],
"a_en":"Only the level and the trend of the optical reading are observable, not biomass. On the September run the twelve-hour median went from 1.06 to 3.75 against a linear limit of OD 1.2, so what we forecast is the photometer reading. Four things are not inferable at all: loop temperature, because the probe never answered; dissolved oxygen, which we could not calibrate; the induction light inside a dense culture; and the photometer's own top end, which run 7 showed we have not found. On a failed window the acceptance gate holds the last good value, 31 of 1,083 windows in run 6. So the filter gets a repeat, not a gap, and a repeat looks like no change.",
"a_zh":"真正可觀測的只有兩件事：光學讀值的 level 和 trend，不是生物量。九月那次實驗十二小時中位數從 1.06 升到 3.75，而線性上限是 OD 1.2，所以我們預測的是 photometer 的讀值。有四件事完全推不出來：迴路溫度，因為探針從來沒回應，是操作者手動輸入的；溶氧，我們校不起來；高濃度培養液裡的誘導光；還有 photometer 自己的上限，run 7 顯示我們還沒找到。某個視窗沒通過檢查時，acceptance gate 會沿用上一筆好的值，run 6 是 1,083 個視窗裡有 31 個。所以 filter 拿到的是重複值、不是缺值，而重複值看起來像「沒有變化」，不會讓不確定帶變寬。",
"trap_en":"Saying the twin knows biomass, or that a failed reading is left as a gap; the gate holds the last good value, which hides the loss of information.",
"trap_zh":"說 twin 知道生物量，或說壞掉的讀值會留空；gate 是沿用上一筆好值，反而把資訊損失藏起來。",
"basis":"observability decides what the twin may legitimately claim",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q539"
},
{
"q_en":"Your forecast beats persistence, which is a very low bar. What was it tested on that it had not seen, how is the error measured, and did you ever compare it against a fitted growth curve?",
"q_zh":"你們的預測贏過 persistence，但那個門檻很低。它到底是在什麼沒看過的資料上被測的？誤差怎麼量？還有你們有沒有跟一條擬合好的生長曲線比過？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"software"
],
"seat":"dry",
"backup":"plant",
"kw_en":[
"walk-forward, two runs",
"RMSE in OD",
"no logistic on a batch"
],
"kw_zh":[
"逐步前推、兩次實驗",
"RMSE 用 OD",
"沒拿 logistic 比過"
],
"a_en":"Every scored forecast is out of sample in time. We made one every hour from hour twelve using only data up to that point, and the metric is RMSE in OD units. In September it was 0.040 against persistence's 0.067 at two hours, 41 percent better, and 17 percent at twelve. Run 7 scored it again on the strain we actually use: nothing at two hours, 24 percent at eight and twelve. Two runs, and we say so. On the light plate we held data out properly, one arm at a time, and the prior predicted 24 hour OD within 7 percent against 29 to 68 without it. We never scored a logistic fitted on a bioreactor run.",
"a_zh":"每一筆被計分的預測在時間上都是樣本外的。我們從第 12 小時開始每小時做一次，只用當下之前的資料，指標是 OD 單位的 RMSE。九月在兩小時是 0.040、persistence 0.067，好 41%，十二小時好 17%。run 7 用我們真正要用的菌株把同一個比較再做一次：兩小時沒有優勢，八小時和十二小時各好 24%。就兩次實驗，我們頁面上也這樣寫。光照盤那邊我們有好好留出資料，一次留一個 arm，有 prior 時預測 24 小時 OD 誤差在 7% 以內，沒有 prior 是 29 到 68%，NRMSE 1.9%，而生物製程模型的標準是 15%。我們從來沒有把擬合在反應器實驗上的 logistic 拿來跟 filter 比。",
"trap_en":"Quoting 41 percent as the headline without the run 7 column, and treating persistence as a sufficient baseline.",
"trap_zh":"只講 41% 這個標題數字、不講 run 7 那一欄；還把 persistence 當成足夠的對照基準。",
"basis":"a baseline that is too weak makes a real result look bigger than it is",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q540"
},
{
"q_en":"You registered a growth forecast before the run instead of fitting it afterwards. What did that commit you to, and what exactly passed?",
"q_zh":"你們是在實驗之前先登記生長預測，而不是事後擬合。這樣做綁住了你們什麼？還有到底是什麼通過了？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"software"
],
"seat":"dry",
"backup":"plant",
"kw_en":[
"three endpoints, one scored",
"0.286 inside interval",
"ceiling did not cross"
],
"kw_zh":[
"三個終點只計一個",
"0.286 落在區間內",
"上限沒有轉移過去"
],
"a_en":"It commits you to a number and a pass rule you cannot move afterwards. On 1 October, before any WB800 run with constitutive ACC deaminase secretion, we registered three endpoints from the light plate prior and said only the growth rate would be scored: 0.2986 per hour, 90 percent interval 0.2705 to 0.3300. Run 5 broke down after ten hours, so it was scored on run 6, which gave 0.286 plus or minus 0.010. Inside the interval, thirteen days later. What did not pass matters as much: the shape and the time to OD 0.5 stay unscored, because the plate-reader scale was never cross-calibrated, and the bioreactor passed the prior's ceiling before hour seven.",
"a_zh":"它綁住你一個數字和一條事後不能改的通過規則。10 月 1 日，在任何帶 constitutive ACC deaminase 分泌的 WB800 實驗之前，我們用光照盤的 prior 登記了三個終點，並說明只有生長速率會計分：0.2986 每小時，90% 區間 0.2705 到 0.3300。run 5 跑十小時就壞了，所以是用 run 6、也就是 10 月 14 到 16 日那次來計分，結果是 0.286 ± 0.010，落在區間內，而且是登記後十三天。沒通過的部分一樣重要：曲線形狀和到 OD 0.5 的時間都沒有計分，因為上限和起始濃度是在 plate reader 的尺度上、兩個尺度之間還沒有交叉校正，而反應器在第七小時之前就衝過了盤子的上限 1.005。",
"trap_en":"Claiming the whole registration passed. Only the rate was scored, and the rate is fitted over five hours where a line fits the readings as well as an exponential.",
"trap_zh":"說整份登記都通過了。只有速率有計分，而那個速率是擬合在五個小時上，那段期間直線跟指數一樣貼合讀值。",
"basis":"pre-registration is only worth something if you report the unscored endpoints too",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q541"
},
{
"q_en":"Your autoencoder learns what a healthy run looks like and flags departures. So what does it do on a fault it has never seen, what is your false positive rate, and how much of that 26.7 hours did the network actually buy you?",
"q_zh":"你們的 autoencoder 是學「健康的實驗長什麼樣」然後標出偏離。那遇到從沒見過的故障會怎樣？誤報率多少？還有那 26.7 小時裡，有多少其實是這個網路賺來的？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"software",
"contribution"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"first 120 hours",
"6.1 percent false alarms",
"PCA within half an hour"
],
"kw_zh":[
"前 120 小時",
"誤報 6.1%",
"PCA 只差半小時"
],
"a_en":"It is trained on the healthy first 120 hours of one 434 hour run, and the alarm limit is the 99.5th percentile of that training score, fixed before anything was scored. It flagged the photometer at 216.3 hours against a channel that failed at 243, so 26.7 hours of warning, at a 6.1 percent false alarm rate on quiet windows it had not seen. On a fault it has never seen we cannot tell you: two events in one run means no detection rate is reportable. And a plain PCA version alarmed within half an hour of ours, so the network is not what bought the lead time. The reference channel that never sees the culture is.",
"a_zh":"它是用一次 434 小時實驗中健康的前 120 小時訓練的，警報門檻是那段訓練分數的 99.5 百分位，而且在開始計分之前就定好。它在 216.3 小時標出 photometer，而那個通道在 243 小時才真正失效，所以提前 26.7 小時，在沒看過的平靜時段誤報率是 6.1%。遇到沒見過的故障，老實說我們答不出來：一次實驗兩個事件，就報不出偵測率。而且同樣想法用單純的 PCA 做，報警時間跟我們只差半小時，所以提前量不是這個網路賺來的，是那條從不穿過培養液的參考通道賺來的。",
"trap_en":"Crediting the autoencoder for the 26.7 hours. A linear baseline matches it; the design idea is the reference channel, not the network.",
"trap_zh":"把 26.7 小時歸功於 autoencoder。線性方法也做得到；真正的設計巧思是參考通道，不是網路。",
"basis":"anomaly detection on one healthy stretch cannot report a detection rate",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q542"
},
{
"q_en":"Take me from a milliunit per millilitre on a plate assay to litres per hectare in a field, step by step, and tell me which step carries the most uncertainty.",
"q_zh":"請你一步一步，從盤上實驗的 mU per mL 一路走到田裡的每公頃公升數，然後告訴我哪一步的不確定性最大。",
"type":"integrate",
"tier":"A",
"deep":1,
"pages":[
"model",
"plant",
"measurement"
],
"seat":"dry",
"backup":"plant",
"kw_en":[
"canopy 2.44",
"1.68 to 3.52",
"different preparations"
],
"kw_zh":[
"canopy 2.44",
"1.68 到 3.52",
"兩個不同製備"
],
"a_en":"The protocol uses 10 centimetre round plates, so the area is 78.5 square centimetres, and one treatment was three nozzle actuations delivering 1.67 millilitres. A recorded volume over a known area is a rate, and that rate scales to 2,126 litres per hectare with no modelling in between. Then the one modelled step, a canopy correction of 2.44 from a leaf area index of 4.5 against 0.115 on a plate, giving the 5,188 litre scenario and 37.6 kilounits per hectare. That correction is the widest uncertainty: it spans 1.68 to 3.52. There is a second weakness. The titre and the volume come from different preparations, and the activity of what was sprayed was never measured.",
"a_zh":"protocol 用的是 10 公分圓盤，所以面積是 78.5 平方公分，而一次處理是三下噴頭、總共 1.67 毫升。記錄下來的體積除以已知面積就是一個施用率，那個率可以直接換成每公頃 2,126 公升，中間沒有任何模型。接下來才是唯一一個模型步驟：canopy correction 2.44，來自葉面積指數 4.5 對盤上的 0.115，算出 5,188 公升這個情境、每公頃 37.6 kU。那個校正是最大的不確定性，它自己就橫跨 1.68 到 3.52。還有第二個弱點：活性和體積來自兩個不同的製備，而真正噴到植物上那一批的活性從來沒有量過。",
"trap_en":"Calling 5,188 litres a validated dose, or forgetting that 2,126 is a dose that worked rather than the smallest that works.",
"trap_zh":"把 5,188 公升說成驗證過的劑量；或忘了 2,126 是「有效的劑量」，不是「最小有效劑量」。",
"basis":"the headline litres per hectare is the number a judge will pull apart",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q543"
},
{
"q_en":"You give me a payback period as a single number. Why is a point estimate the wrong way to report that, and if you ran a sensitivity analysis, what would it put first?",
"q_zh":"你們給的回收期是一個單一數字。為什麼用點估計報告這件事是錯的？如果做敏感度分析，排在最前面的會是什麼？",
"type":"validate",
"tier":"A",
"deep":1,
"pages":[
"model",
"geospatial-analysis",
"entrepreneurship"
],
"seat":"dry",
"backup":"plant",
"kw_en":[
"efficacy is an axis",
"68 years to 2.0",
"17 of 25 quiet"
],
"kw_zh":[
"效能是一個軸",
"68 年變 2.0 年",
"25 季有 17 季不啟動"
],
"a_en":"We try not to. Efficacy is plotted across its whole axis rather than fixed, because no run of ours bounds it, and no point on that axis returns the capital on a useful horizon. On our own loss figure, at the physical ceiling of efficacy one, payback is 68 years, and five years would need an efficacy of 14, which exceeds the whole loss. Share one fleet across the 2.5 hectares it serves and the same arithmetic gives 27 years; use the Geospatial benefit instead and it is 2.0. A point estimate also hides the weather: 17 of 25 seasons never cross the threshold. Sensitivity would put the benefit figure first, then ownership, then efficacy.",
"a_zh":"我們盡量不這樣報。效能是整個軸畫出來的，不是固定一個值，因為我們沒有任何實驗能給它上下界；而那個軸上沒有一點能在有意義的年限內回收資本。用我們自己的損失數字，就算效能到物理上限 1，回收期也是 68 年，要五年回收需要效能 14，超過損失本身。換成共享所有權，同樣的算法在一組機隊服務的 2.5 公頃上攤開是 27 年；改用 Geospatial 的效益數字則是 2.0 年。點估計還會把天氣藏起來：25 季裡有 17 季根本不會跨過門檻，機隊只在 4.3% 的日子運轉。敏感度排最前面的是用哪個效益數字，然後是所有權，再然後是效能。",
"trap_en":"Defending a single payback number, or quoting 2.0 years without saying it rests on the Geospatial benefit the Math Model does not stand behind.",
"trap_zh":"替某一個回收期數字辯護；或引用 2.0 年卻不說它建立在 Math Model 並不採信的 Geospatial 效益上。",
"basis":"a decision number without its spread is not a model output",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q544"
},
{
"q_en":"What is the spatial resolution of your input layers against the size of a real Taiwanese farm, and how does an index built from that relate to what one plant in one field actually experiences?",
"q_zh":"你們圖層的空間解析度，跟台灣一塊真實農地的大小比起來是什麼量級？用那種資料建出來的指數，跟田裡某一株植物真正經歷到的東西，關係是什麼？",
"type":"boundary",
"tier":"B",
"deep":1,
"pages":[
"geospatial-analysis",
"model",
"software"
],
"seat":"dry",
"backup":"plant",
"kw_en":[
"346 nodes, 743,500 ha",
"county per season",
"leaf sensor on a bench"
],
"kw_zh":[
"346 節點、74 萬公頃",
"一縣一季一個數",
"葉片感測器還在桌上"
],
"a_en":"Nothing in the geospatial work resolves a single farm, and we should say that plainly. The routing model starts from 2,792,536 real parcels but aggregates them into 346 township nodes over about 743,500 hectares, so one node is roughly two thousand hectares against an average farm of 0.9 to 1.1, with 99.2 percent of farms under two. The stress index is one number per county per season. So the maps say where small farms and unstable weather overlap, not what a plant feels. The leaf sensor should close that gap and it is still on a bench reading 1.2 to 1.9 degrees warm. Our own guide says state the coordinate system; the page never records which projection measured area.",
"a_zh":"地理空間這部分沒有任何一層解析得到單一一塊農地，這點應該講清楚。路網模型是從 2,792,536 筆真實地塊出發，但把它們合併成 346 個鄉鎮需求節點、約 74 萬 3 千公頃，所以一個節點大概兩千公頃，而平均農場只有 0.9 到 1.1 公頃，99.2% 的農場不到兩公頃。壓力指數是一縣一季一個數字。所以地圖說的是小農和不穩定天氣在哪裡重疊，不是植物感受到什麼。本來要補上這個落差的是葉片感測器，而它還在桌上，讀值偏高 1.2 到 1.9 度。我們自己的 QGIS 教學就要求合併圖層前先宣告座標系統，但頁面從沒記下地塊面積是用哪個投影量的。",
"trap_en":"Talking as if the maps were parcel-resolved because the parcel count is large; 2.79 million parcels still collapse into 346 nodes.",
"trap_zh":"因為地塊數字很大就講得好像地圖是地塊級解析；279 萬筆地塊最後還是縮成 346 個節點。",
"basis":"township and county layers cannot support farm-level claims",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q545"
},
{
"q_en":"Neighbouring counties share the same typhoon and the same light deficit. How many independent observations does your stress index really have, and would your deployment picture survive a different weighting?",
"q_zh":"鄰近縣市會遇到同一個颱風、同一段日照不足。你們的壓力指數真正獨立的觀測有幾個？還有如果換一組權重，部署的圖像還站得住嗎？",
"type":"validate",
"tier":"B",
"deep":1,
"pages":[
"model",
"geospatial-analysis"
],
"seat":"dry",
"backup":"plant",
"kw_en":[
"years held out, not counties",
"four of sixteen",
"weights fitted, soil guessed"
],
"kw_zh":[
"留的是年份不是縣市",
"十六分之四",
"權重是擬合、土壤是猜的"
],
"a_en":"Fewer than the county-season count suggests. We fitted on 25 years of county harvests and scored every candidate on years the fit had not seen, but not on counties it had not seen, and west coast counties meet the same typhoon and light deficit, so the independent unit is closer to the season. The blind test is four of sixteen counties, 7.9 percent error against the trend's 8.8, and four is too few: we underpredicted Hualien and Pingtung, overpredicted Taitung, and only Taichung landed close. On weighting, the index weights are fitted, not chosen. The soft layer is the soil map, where sandy loam is both the most volatile class and the one our heuristic assigns most broadly.",
"a_zh":"比縣市季的數量少。我們用 25 年的縣市收成擬合，每個候選都在沒看過的年份上評分，但不是在沒看過的縣市上評分；而西部各縣市遇到的是同一個颱風、同一段日照不足，所以獨立單位比較接近「年」而不是「縣市季」。盲測是十六個縣市裡的四個，誤差 7.9% 對趨勢的 8.8%，而我們自己說四個太少：這四個裡面花蓮和屏東被低估、台東被高估，只有台中接近預測。權重方面，指數的權重是從 32,767 種組合裡擬合出來的，不是人選的。真正軟的那一層是土壤圖，砂質壤土既是波動最大的類別，也是我們海岸判斷規則指派得最廣的類別。",
"trap_en":"Defending the volatility index weights, which the page names terms for but never publishes, or calling the four-county blind test a validation.",
"trap_zh":"替波動指數的權重辯護，頁面只列了項目、沒公布權重；或把四個縣市的盲測當成已驗證。",
"basis":"spatial and temporal correlation inflate apparent confidence",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q546"
},
{
"q_en":"Your Math Model and your Geospatial Analysis put a completely different price on a stressed hectare. How far apart are they, and which number do you stand behind?",
"q_zh":"你們的 Math Model 和 Geospatial Analysis 對一公頃受逆境農地的定價完全不同。差多少？還有你們站在哪一個數字後面？",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"model",
"geospatial-analysis"
],
"seat":"dry",
"backup":"plant",
"kw_en":[
"a factor of fourteen",
"not the same hectare",
"we quote our own"
],
"kw_zh":[
"差十四倍",
"不是同一公頃",
"我們用自己的數字"
],
"a_en":"A factor of fourteen, and we print that on the page. Our stress index attributes US$138 per hectare per crop to the weather this protectant acts on, which is 68 years of payback at efficacy one. Geospatial Analysis reaches US$1,931 from its own chlorophyll work, which pays back in 4.9 years. So either our index misses most of what stress costs a field, or their chlorophyll-to-yield step is too generous. We stand behind our own figure and mark where theirs falls, because ours is fitted to 25 years of harvests. Three things would settle it: a yield endpoint instead of chlorophyll, one stress definition across both pages, and whether a hectare returns once or twice a year.",
"a_zh":"差十四倍，而且我們是把它寫在頁面上，不是藏起來。我們的壓力指數認為這個保護劑能處理的天氣，每公頃每期值 US$138，效能為 1 時回收期 68 年。Geospatial Analysis 用他們自己的葉綠素工作算出每公頃每期 US$1,931，回收期 4.9 年。所以要嘛是我們的指數漏掉了逆境對一塊田造成的大部分損失，要嘛是他們從葉綠素換算到產量那一步太寬鬆。我們採用自己的數字，並在圖上標出他們的落點，因為我們的是擬合在 25 年收成上的。三件事可以解決它：用產量終點取代葉綠素終點、兩頁統一一個壓力定義、以及對一公頃一年受保護一次還是兩次達成共識。",
"trap_en":"Defending both numbers or averaging them. They are not two estimates of the same hectare, and the US$1,931 figure is not shown on the Geospatial page itself.",
"trap_zh":"同時替兩個數字辯護或取平均。它們不是對同一公頃的兩個估計，而 US$1,931 這個數字在 Geospatial 頁上根本沒有出現。",
"basis":"two pages of the same wiki giving incompatible economics",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q547"
},
{
"q_en":"Somebody on your team has quoted holding 86.3 percent and 25.3 percent of unstressed performance at two salt levels. Show me the measurement those came from.",
"q_zh":"你們團隊有人引用過在兩個鹽度下「保住 86.3% 和 25.3% 的未逆境表現」。請把這兩個數字背後的量測拿出來給我看。",
"type":"gap",
"tier":"A",
"deep":1,
"pages":[
"geospatial-analysis",
"measurement",
"plant"
],
"seat":"dry",
"backup":"plant",
"kw_en":[
"not on any page",
"direction, not percentage",
"efficacy is an axis"
],
"kw_zh":[
"任何頁面都沒有",
"只能講方向不講百分比",
"效能是一個軸"
],
"a_en":"I cannot, and we do not quote them. Neither number appears anywhere on our wiki, in prose or in a table, so I am not going to defend them from memory. What our chlorophyll work supports is a direction: every ACC deaminase treated group retained more chlorophyll than its matched control at the same salinity, on agar, and the page warns the untreated controls were low enough that absolute values need care. Soil-validated efficacy is still being developed, which is why the coverage radius downstream is a modelling assumption. The one efficacy number we carry is 0.58 from Arabidopsis fresh weight, and the model carries even that as an axis, not a coefficient.",
"a_zh":"我拿不出來，而且我們不引用它們。這兩個數字在我們整個 wiki 上都找不到，無論是段落還是表格，所以我不會憑記憶替它們辯護。我們的葉綠素工作真正支持的是一個方向：在相同鹽度下，每一組 ACC deaminase 處理的葉綠素都比對應的對照高，這是在洋菜上做的；頁面也寫了未處理對照偏低，所以跨實驗比絕對值要小心。土壤驗證的效能資料還在做，這正是為什麼下游的覆蓋半徑只是一個模型假設。我們真正帶著走的效能數字是來自阿拉伯芥鮮重的 0.58，而連這個，模型都是當成一個軸、不是一個係數，因為我們沒有任何實驗能給它界限。",
"trap_en":"Trying to reconstruct the numbers from a literature curve, or offering them as 'roughly right'; neither is traceable to a measurement of ours.",
"trap_zh":"試著用文獻曲線把這兩個數字湊出來，或說「大致上對」；兩者都追不到我們自己的任何量測。",
"basis":"an untraceable headline percentage is the fastest way to lose a judge's trust",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q548"
},
{
"q_en":"Digital twins, Kalman filters and reconstruction-error fault detection are routine in industrial bioprocess. What in your implementation is actually new, and what is honestly just a re-implementation?",
"q_zh":"digital twin、Kalman filter、用重建誤差做故障偵測，在工業生物製程裡都是常規做法。你們這套真正新的是什麼？老實說哪些只是重做一遍？",
"type":"history",
"tier":"B",
"deep":1,
"pages":[
"software",
"biomanufacturing",
"contribution"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"mostly re-implementation",
"companion that cannot see",
"registered before the run"
],
"kw_zh":[
"大部分是重做",
"給感測器看不到的同伴",
"實驗前先登記"
],
"a_en":"Most of it is a re-implementation, and we cite the papers it comes from. The filter, the autoencoder, the logistic prior and even the model, shadow and twin distinction are standard bioprocess practice. Three things are ours. Giving a sensor a companion that cannot see what it measures: the reference beam never passes through the culture and is scored as its own axis, which is what separated an instrument fault from a real drop in optical density. Calibrating against a known dose of titanium dioxide and silica rather than against another instrument. And registering a forecast before the run with the prior file fixed. Honestly, the models ran on recorded data, so the loop is not closed.",
"a_zh":"大部分是重做一遍，而且我們都有引出處的論文。filter、autoencoder、logistic prior，甚至 model、shadow、twin 的區分，都是標準的生物製程做法。有三件事我會說真的是我們的。第一，給感測器一個看不到它所量東西的同伴：參考光束從不穿過培養液，而且是單獨一個軸評分，這才把儀器故障和光密度真的下降分開。第二，用已知劑量的二氧化鈦和二氧化矽校正，而不是拿另一台儀器來校。第三，在實驗之前就登記預測、prior 檔案鎖定，這在文獻裡也不常見。也要老實說：模型是在每次實驗結束後跑記錄下來的資料，所以迴路還沒閉合。",
"trap_en":"Claiming the twin itself is novel, or claiming the loop is closed; the page says a person still makes every decision.",
"trap_zh":"說 twin 本身是創新，或說迴路已經閉合；頁面寫的是每個決定還是由人做。",
"basis":"positioning a student build honestly against standard industrial practice",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q549"
},
{
"q_en":"Suppose next year's second crop is hit by a record heat wave rather than by wind or badly timed water. What does your chain predict happens, and why?",
"q_zh":"假設明年第二期稻作遇到的是破紀錄的熱浪，而不是風或水分時機不對。你們整條鏈會預測發生什麼事？為什麼？",
"type":"reason",
"tier":"A",
"deep":1,
"pages":[
"model",
"plant",
"geospatial-analysis"
],
"seat":"dry",
"backup":"plant",
"kw_en":[
"heat earned nothing",
"lamp stays off",
"wet lab runs heat"
],
"kw_zh":[
"高溫沒有貢獻",
"燈不會亮",
"濕實驗卻在做熱"
],
"a_en":"It predicts that very little happens, and that is uncomfortable for us. When we scored all 32,767 combinations, the second crop paid for wind, light and badly timed water, and heat added nothing once those three were in. So a heat season barely moves the index, the release trigger stays below threshold, the lamp stays off and no protectant is made while the field is damaged. Our own wet lab runs a heat programme this index does not support. And I cannot tell you from the fit whether the harvest record cannot see heat at county and season resolution, or whether the terms we kept already carry it. Settling that needs a heat endpoint on rice.",
"a_zh":"它會預測幾乎什麼都不會發生，而這對我們來說是不舒服的。當我們把 32,767 種組合全部評分時，第二期稻作有貢獻的是風、光，以及水分時機不對；一旦這三個進來，高溫就沒有額外貢獻。所以熱浪那一季指數幾乎不動，釋放門檻不會被跨過，燈不會亮，也不會做出保護劑，而田其實正在受損。我們自己的濕實驗卻在做熱逆境的程序，而這個指數不支持它，這就是矛盾的地方。而且光看擬合，我沒辦法告訴你是收成紀錄在縣市與季的解析度下根本看不到高溫，還是我們留下來的那些項目已經把高溫的損害吸收進去了。要解決這個，需要在水稻上做一個熱的終點，不是再多擬合天氣。",
"trap_en":"Inventing a heat response for the index, or assuming the salinity efficacy of 0.58 transfers to heat.",
"trap_zh":"替指數編一個對高溫的反應；或假設鹽害的 0.58 效能可以套用到高溫。",
"basis":"a scenario the index was selected against exposes whether the chain is understood",
"dom":"drylab",
"star":0,
"nodes":[],
"figs":[],
"id":"q550"
},
{
"q_en":"Your forecast beats persistence by 41 percent at two hours, but you say most of the run sits above the range where OD is linear in cell count. So you are forecasting the photometer reading. Why is that useful?",
"q_zh":"你們的預測在兩小時尺度上比 persistence 好 41%，但你們自己說大部分的實驗都在 OD 與細胞數不成線性的範圍之上。所以你們預測的是光度計讀值。那這有什麼用？",
"type":"boundary",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#Forecast skill",
"results#Stress detection",
"software"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"the control loop acts on the reading",
"all five models forecast the same signal",
"cell count needs plate counts"
],
"kw_zh":[
"控制迴路用的就是讀值",
"五個模型預測的是同一個訊號",
"細胞數要靠塗盤計數"
],
"a_en":"Because the decisions it feeds are made on the reading, not on a cell count: when to harvest, when to feed, when to switch the light, and whether the instrument is still telling the truth. For those, a two-hour forecast with an RMSE of 0.040 against 0.067 for persistence is directly useful, and the gain survives to twelve hours at 0.310 against 0.373. The ranking is also unaffected by the non-linearity, because all five models forecast the same signal, so the comparison is fair even where the signal is not proportional to biomass. What we cannot do is call it a biomass forecast — converting optical density into cell counts needs a calibration against plate counts that we have not run, and the page states that limit next to the result.",
"a_zh":"因為它餵的那些決策本來就是用讀值做的：什麼時候採收、什麼時候補料、什麼時候切燈，以及儀器還有沒有在講實話。對這些來說，兩小時 RMSE 0.040 對 persistence 的 0.067 是直接有用的，而且這個優勢撐到十二小時，0.310 對 0.373。非線性也不影響排名，因為五個模型預測的是同一個訊號，所以即使訊號跟生物量不成比例，比較仍然是公平的。我們不能做的是把它叫成生物量預測——把光密度換成細胞數需要對塗盤計數做校正，而那個校正我們沒做，頁面上也把這個限制寫在結果旁邊。",
"trap_en":"Defending it as a growth forecast. Say what the loop actually acts on, and that the cell-count conversion has not been done.",
"trap_zh":"把它當成生長預測來辯護。要講清楚控制迴路實際作用在什麼上面，以及細胞數的換算還沒做。",
"nodes":[
"D_RUNS",
"M_CURVE"
],
"figs":[
"s02"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"drylab",
"id":"q551"
},
{
"q_en":"You registered three endpoints on 1 October. One passed and two were not scored. Is reporting the one that passed not exactly what pre-registration is supposed to prevent?",
"q_zh":"你們 10 月 1 日登記了三個指標，一個通過、兩個未評分。只報通過的那一個，不正是預先登記本來要防止的事嗎？",
"type":"gap",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"results#The registered prediction",
"measurement#Pre-registered before measurement"
],
"seat":"dry",
"backup":"hw",
"kw_en":[
"the two were unscorable when written",
"no cross-calibration to the inline cuvette",
"the primary has its own boundary"
],
"kw_zh":[
"那兩個在登記時就無法評分",
"與線上流通池沒有互校",
"主要指標自己也有邊界"
],
"a_en":"It would be, if the two had been dropped after we saw the data — they were declared unscorable in the registration itself, for the reason that both depend on plate-reader quantities with no cross-calibration to the inline cuvette, and that sentence was written before the run. What was scored is the primary endpoint: a specific growth rate of 0.2986 per hour with a 90 percent interval of 0.2705 to 0.3300, against an observed 0.286 plus or minus 0.010 thirteen days later in a one-litre perfusion loop. I would rather volunteer the boundary on that than defend it: the fit runs over five hours in which a straight line describes the readings as well as an exponential does, so the rate comes from a stretch where the two shapes cannot be told apart. The same pre-registration discipline is why the algorithm study reports all eight predictions including the five that failed.",
"a_zh":"如果那兩個是在看到數據之後才被拿掉，那就會是——但它們在登記文件本身就被宣告為無法評分，理由是兩者都依賴盤式讀值、而盤式讀值和線上流通池之間沒有互校，而那句話是在實驗之前寫的。被評分的是主要指標：比生長速率 0.2986 每小時、90% 區間 0.2705 到 0.3300，對上十三天後在一公升灌流迴路裡觀測到的 0.286 ± 0.010。這一點的邊界我寧願自己講出來而不是替它辯護：那個擬合只跑五小時，在那段時間裡直線和指數同樣能描述讀值，所以速率來自一段分不出兩種形狀的區間。同樣的預先登記紀律，也是演算法研究把八個預測全部報出來、包括失敗的五個的原因。",
"trap_en":"Getting defensive. The answer is that the exclusion was pre-dated and written down, and then volunteering the limit of the endpoint that did pass.",
"trap_zh":"變得防衛。答案是「那個排除是事前寫下來的」，然後主動講出通過那個指標自己的限制。",
"nodes":[
"M_PREREG",
"D_FROZEN"
],
"figs":[
"s02"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"drylab",
"id":"q552"
},
{
"q_en":"Your model says heat adds nothing to the second-crop stress index once wind, light and badly timed water are in. That does not support your wet lab's heat programme. Who is right?",
"q_zh":"你們的模型說，當風、光和時機不對的水分都放進去之後，熱對第二期作的逆境指數沒有額外貢獻。這並不支持濕實驗室的熱逆境計畫。誰對？",
"type":"integrate",
"tier":"A",
"deep":1,
"star":1,
"pages":[
"model",
"results#Agar-based heat stress",
"plant#Soil heat schedule"
],
"seat":"dry",
"backup":"plant",
"kw_en":[
"different questions, both answered",
"county yield against one plant",
"it changes priority, not validity"
],
"kw_zh":[
"兩個問題都被回答了",
"縣級產量 vs 單株生理",
"改變的是優先順序不是有效性"
],
"a_en":"Both are right about different questions, and the page says the disagreement out loud rather than hiding it. The model asks which weather terms reduce county-level rice yield error over twenty-five years, and heat drops out of the second crop once wind, radiation and badly timed water are in; the wet lab asks whether a protectant changes how one Arabidopsis plant survives 37 degrees, and it does. So the model is not saying heat is harmless to a plant, it is saying heat is not the limiting economic signal in that crop and that season. What it changes is priority: if we had another season of wet-lab time, the model would send it to salinity and to water timing before heat, and that is the kind of redirection we want a model for.",
"a_zh":"兩邊各自回答不同的問題，而頁面把這個不一致明講出來，沒有藏起來。模型問的是「哪些天氣項能降低二十五年來縣級稻作產量的預測誤差」，而在風、輻射和時機不對的水分都放進去之後，熱在第二期作就掉出來了；濕實驗室問的是「保護蛋白會不會改變單株阿拉伯芥在 37 度下的存活」，而答案是會。所以模型沒有說熱對植物無害，它說的是「在那個作物、那個季節裡，熱不是限制性的經濟訊號」。它改變的是優先順序：如果我們還有一季的濕實驗室時間，模型會建議先投到鹽度和水分時機，而不是熱——而這正是我們要一個模型來做的事。",
"trap_en":"Choosing a side. The useful answer separates the economic signal from the physiological one and then says what the model would reprioritise.",
"trap_zh":"選一邊站。有價值的答案是把經濟訊號和生理訊號分開，然後說模型會把優先順序改成什麼。",
"nodes":[
"D_INDEX",
"C_THR"
],
"figs":[
"d01"
],
"basis":"instructor's follow-up set, 30 Oct",
"dom":"drylab",
"id":"q553"
}
];
