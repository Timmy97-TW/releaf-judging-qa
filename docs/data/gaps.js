var GAPS = [
{
"issue_en":"The headline 'Pro within 3.8% of the BioDrop, no transform' is quoted with different numbers on different pages. Measurement and photometer give R2 0.9999 and a 0.12 OD offset on silica (slope 1.001, or 0.93 with the blank); Engineering plots a slope of 0.942 for TiO2; Results gives TiO2 slope 1.018, R2 0.987 and 400 mL where the others say 500 mL. Engineering also says the optical density is raw output and not traceable to any reference instrument.",
"issue_zh":"『Pro 與 BioDrop 差 3.8%、不需轉換』這個主打數字，在不同頁面引用的數值不同。Measurement 與光度計頁寫 R2 0.9999，二氧化矽上有 0.12 OD 偏移（斜率 1.001，含空白則 0.93）；Engineering 圖上 TiO2 斜率是 0.942；Results 寫 TiO2 斜率 1.018、R2 0.987、400 mL，其他頁寫 500 mL。Engineering 也說這個 OD 是原始輸出，無法追溯到任何參考儀器。",
"where":"measurement, hardware-photometer, engineering, results",
"say_en":"Say the claim is about scale agreement on a mass standard: the slope is near one and the Pro sits a constant 0.12 OD low on silica, and we apply no correction. Point to the raw CSVs on GitLab, and do not quote a single R2 for the Pro without naming the standard and the range.",
"say_zh":"要說這個主張是指在質量標準品上刻度一致：斜率接近 1，二氧化矽上 Pro 固定低約 0.12 OD，而且我們沒有做任何校正。指向 GitLab 上的原始 CSV，不要在沒說明標準品和範圍的情況下只報一個 Pro 的 R2。",
"dom":"measurement",
"id":"g001"
},
{
"issue_en":"Several ELISA numbers are not true quantities. All four ACCD wells fall outside the standard curve, most reactor samples read above the 3 ug/mL top standard, and LEA14's 1:1 wells sit below the curve's lowest %B/B0 (31.6). The untransformed WB800 negative control reads 5.452 and 4.562 ug/mL, the same range as four of six constructs. Yet Results says ACCD is about 16 ug/mL and about three times LEA14 and BoPep4.",
"issue_zh":"ELISA 的幾個數字並不是真正的定量值。ACCD 四個孔全在標準曲線之外，反應器大部分樣品高於 3 ug/mL 的最高標準品，LEA14 的 1:1 孔也低於曲線最低的 %B/B0（31.6）。未轉殖 WB800 陰性對照讀到 5.452 與 4.562 ug/mL，跟六個構築中的四個同範圍。但 Results 寫 ACCD 約 16 ug/mL、約為 LEA14 和 BoPep4 的三倍。",
"where":"measurement, results, hardware-bioreactor",
"say_en":"Say the ELISA figures are estimates, the host control reads like the samples, and no ranking of constructs can be credited to expression. Then pivot to what does hold: His-tag Western blots and DNPH activity net of the host.",
"say_zh":"要說 ELISA 數字是估計值，宿主對照讀值跟樣品一樣，構築間的排名不能歸因於表達量。然後轉到站得住腳的部分：His 標籤的 Western blot，以及扣掉宿主的 DNPH 活性。",
"dom":"measurement",
"id":"g002"
},
{
"issue_en":"Activity units do not line up. Hardware-bioreactor prints the 18 h reactor activity as 0.037 mU/mL, but the measurement and results pages give 30.9 nmol per mL per hour, which is 30.9 mU/mL; the 6.3 U/mg specific activity only works if 0.037 is U/mL. The DNPH procedure also gives a 122 uL reaction while the results table uses 160.6 uL, and Results says '12 h incubation' where the method says overnight.",
"issue_zh":"活性單位對不起來。hardware-bioreactor 頁把 18 小時反應器活性寫成 0.037 mU/mL，但 measurement 與 results 頁是 30.9 nmol/mL/h，也就是 30.9 mU/mL；6.3 U/mg 的比活性只有在 0.037 其實是 U/mL 時才成立。DNPH 步驟寫反應體積 122 uL，結果表卻用 160.6 uL，Results 寫『12 小時培養』，方法則寫過夜。",
"where":"hardware-bioreactor, measurement, results",
"say_en":"Say the relative result is solid in shape: protein peaks at 12 h and activity at 18 h. The unit label on one page is a typo we found, and the specific activity of about 6 U/mg is calculated from single samples.",
"say_zh":"要說相對的結果形狀是可靠的：蛋白質在 12 小時到頂，活性在 18 小時。其中一頁的單位標示是我們發現的筆誤，約 6 U/mg 的比活性是用單一樣品算出來的。",
"dom":"measurement",
"id":"g003"
},
{
"issue_en":"The light switch is described two ways. The Results key result says green light switches ACCD on and blots rise with green intensity, while Measurement says expression rises with time but does not order itself by intensity, red at full power is not silent, ELISA is flat across conditions, and the DNPH green advantage at 13 h inverts at 16 h. Red LEDs peak at 640 nm while CcaS turns off at 672 nm.",
"issue_zh":"光控開關有兩種說法。Results 的重點結果寫綠光開啟 ACCD、blot 隨綠光強度上升，但 Measurement 說表達隨時間上升、沒有依強度排序，全強度紅光也不是零，ELISA 各條件持平，13 小時 DNPH 綠光的優勢到 16 小時反轉。紅光 LED 峰值 640 nm，而 CcaS 要 672 nm 才關。",
"where":"results, measurement",
"say_en":"Say the plate delivers light without slowing growth and the switch moves activity above a dark baseline, but a clean graded response is not yet shown. Name the experiment that would settle it: one culture, one maturation time, both colours, repeated.",
"say_zh":"要說光盤能提供光照而不影響生長，開關也能讓活性高於黑暗基準，但乾淨的分級反應還沒證明。講出能解決的實驗：同一個培養、同一個成熟時間、兩種顏色、重複做。",
"dom":"measurement",
"id":"g004"
},
{
"issue_en":"Band size for ACC deaminase is inconsistent: about 37 kDa (Measurement), about 41 kDa theoretical and 35 to 48 kDa (Results), about 42 kDa (Engineering and Hardware-bioreactor), 63 to 75 kDa on the light-plate blots, and 75 to 100 kDa for AcdS 2.1. Measurement says the lysate band is strongest and lumen and shell bands are faint to absent, while Results says the product reaches the shell in all three fractions.",
"issue_zh":"ACC 脫胺酶的條帶大小不一致：約 37 kDa（Measurement）、理論約 41 kDa 與 35 至 48 kDa（Results）、約 42 kDa（Engineering 與 Hardware-bioreactor）、光盤 blot 為 63 至 75 kDa、AcdS 2.1 為 75 至 100 kDa。Measurement 說細胞裂解液條帶最強、管腔和殼側的條帶很淡或沒有，Results 卻說三個部分都有產物到達殼側。",
"where":"measurement, results, engineering, hardware-bioreactor",
"say_en":"Say size alone does not settle identity and the Csn and SamyQ constructs run at different sizes, possibly oligomers, which we have not tested. What supports the claim that the enzyme crosses the membrane is the DNPH activity and ELISA on the shell side, with the shell band faint on the blot.",
"say_zh":"要說光靠大小不能確認身分，Csn 與 SamyQ 構築跑出的大小不同，可能是寡聚體，但我們沒測過。支持酵素穿過膜的證據是殼側的 DNPH 活性和 ELISA，blot 上殼側的條帶其實很淡。",
"dom":"measurement",
"id":"g005"
},
{
"issue_en":"The same photometer events get different explanations. The 434 h run: Measurement blames integer-count quantisation and a reference near 32 counts, the photometer page and Engineering blame the pump swap knocking the optical axis around 1 August, and Results gives a fault flag at 216.3 h. Run 5: Measurement says bubbles and a reference moving 4.8x, Engineering says incorrect calibration. Run 6 end: Measurement says a dead optical path at 9.9, Results says the instrument's upper limit near 2.7. The manual's rejection rule (5% below the upper envelope) is the one-sided rule that the 10 October data refuted, and the downloadable app defaults to 'upper'.",
"issue_zh":"同樣的光度計事件有不同解釋。434 小時實驗：Measurement 歸因於整數計數量化和參考通道約 32 個計數；光度計頁與 Engineering 歸因於 8 月 1 日前後換幫浦碰歪光軸；Results 則給 216.3 小時的故障旗標。第 5 次：Measurement 說是氣泡和參考通道變動 4.8 倍，Engineering 說是校正不正確。第 6 次結尾：Measurement 說光路失效讀到 9.9，Results 說是儀器上限約 2.7。手冊的剔除規則（低於上包絡線 5%）正是 10 月 10 日資料推翻的單邊規則，可下載的 app 預設也是 upper。",
"where":"measurement, hardware-photometer, engineering, results",
"say_en":"Say more than one thing was wrong in that run and we found them in layers: a signal-chain artefact, then a real optical fault. Be clear that the symmetric MAD plus gates is the current method, and that the app must be set to mad to match the wiki.",
"say_zh":"要說那次實驗不只一個問題，我們是一層一層找到的：先是訊號處理的假象，之後才是真的光路故障。要說清楚目前的方法是對稱 MAD 加閘門，而且 app 必須設成 mad 才會跟 wiki 一致。",
"dom":"measurement",
"id":"g006"
},
{
"issue_en":"Plant statistics. Measurement says chlorophyll uses three technical wells from one pooled tube per group, shown as mean with SEM, and that the trehalose and heat pretest charts had no significance testing; Results shows asterisks up to p < 0.0001 without naming the test, and the plant stress windows rest on one plate per group. Measurement also notes the temperature is 37 C in the protocol and 33 C on one timeline figure.",
"issue_zh":"植物統計。Measurement 說葉綠素是每組合併一管、讀三個技術重複孔，用 mean with SEM 呈現，且 trehalose 與熱預試的圖沒有做顯著性檢定；Results 的圖有高到 p < 0.0001 的星號，卻沒說用了什麼檢定，而且植物逆境範圍每組只有一個培養皿。Measurement 還提到溫度在步驟中是 37 度 C，一張時間線圖上卻是 33 度 C。",
"where":"measurement, results",
"say_en":"Say the replicate unit is a pooled tube read in three wells, so the stars describe our measurements, not independent plants. We treat the plant results as consistent trends, and the dose windows as starting points that others should confirm.",
"say_zh":"要說重複單位是合併的一管讀三個孔，所以星號描述的是我們的測量，不是獨立植株。我們把植物結果當成一致的趨勢，劑量範圍當成起點，讓別人再去確認。",
"dom":"measurement",
"id":"g007"
},
{
"issue_en":"The recommended operating numbers do not match what the runs measured or used. 263 mL/min at TMP 0.30 bar is a design choice from water tests; run logs show TMP near zero (manual: a few kPa) and feed flow of about 350 to 370 mL/min. The module drop at 263 mL/min is 0.084 bar (Bioreactor) or 0.096 bar (Development, Digital Twin, Biomanufacturing). The scaling table assumes 2 LMH flux while runs used 36 to 72 LMH. The Measurement page says no TMP had been computed from the calibration rig.",
"issue_zh":"建議的操作數字與實際量到或使用的數字不符。263 mL/min、TMP 0.30 bar 是由水測試選的設計值；運轉紀錄顯示 TMP 接近零（手冊寫幾 kPa），進料流量約 350 至 370 mL/min。263 mL/min 時模組壓降在 Bioreactor 頁是 0.084 bar，在 Development、Digital Twin、Biomanufacturing 是 0.096 bar。規模表假設通量 2 LMH，實驗卻用 36 至 72 LMH。Measurement 頁說該校正台尚未算出任何 TMP。",
"where":"hardware-bioreactor#4.1; development#Contain; software#Module pressure drop; measurement#Flow and pressure monitoring; biomanufacturing#Scaling; engineering#Bioreactor",
"say_en":"Say 263 mL/min and 0.30 bar are our recommended operating point from water tests, not what the culture runs used. Real runs ran about 350 to 370 mL/min with TMP near zero, and the pages differ on the module drop, 0.084 or 0.096 bar, which we are reconciling.",
"say_zh":"要說 263 mL/min 與 0.30 bar 是我們由水測試提出的建議操作點，不是培養實驗實際使用的條件。實際運轉約 350 至 370 mL/min、TMP 接近零，各頁對模組壓降寫 0.084 或 0.096 bar，我們正在核對。",
"dom":"hardware",
"id":"g008"
},
{
"issue_en":"Safety-related layers are described as working on some pages and as planned on others. Safety and Biomanufacturing use the present tense for TMP alerts, a droplet sensor and shell-side turbulence detection; the Bioreactor page says pressure is only displayed and the pressure alarm and droplet sensor are planned. The firmware has a 0.70 bar trip (armed in run 7, never fired). Development says no leaks in six runs, yet two runs had a broken Luer valve that leaked medium. Engineering found pressure alone could not detect the leak.",
"issue_zh":"有些頁面把安全相關層寫成已運作，有些寫成規劃中。Safety 與 Biomanufacturing 用現在式寫 TMP 警報、滴漏感測器與殼側紊流偵測；Bioreactor 頁說壓力只是顯示，壓力警報與滴漏感測器是規劃。韌體有 0.70 bar 跳脫（第 7 次運轉啟用、從未觸發）。Development 說六次運轉沒有漏液，但有兩次運轉 Luer 閥斷裂漏出培養液。Engineering 發現單靠壓力偵測不到漏液。",
"where":"safety-and-security#Bioreactor safety; biomanufacturing#Regulation and biosafety; hardware-bioreactor#8, #9.2; development#Contain; engineering#Bioreactor cycle 7",
"say_en":"Say the membrane plating is the demonstrated containment, the 0.70 bar trip is in the firmware, and the droplet sensor and full pressure alarm are planned for the cabinet. Admit two valve breaks leaked medium, and that the membrane itself did not fail.",
"say_zh":"要說已證明的圍阻是薄膜塗盤，0.70 bar 跳脫在韌體裡，滴漏感測器與完整壓力警報是規劃給機櫃的。要承認有兩次閥斷裂漏出培養液，但薄膜本身沒有失效。",
"dom":"hardware",
"id":"g009"
},
{
"issue_en":"Run counts and run identities differ between pages. Hardware summary: three integrated runs; Bioreactor page: four integrated prototypes (1 Sep, 8, 14, 17 Oct); Development and Contribution: six runs, longest 102.4 h; Digital Twin: seven runs. The photometer page calls the 14 October run both 'integrated run 3' and 'run 6'. The 434 h run is on the twin as run 3 with the module fitted, but Engineering says it used a simplified loop with no hollow-fiber module. 116 h versus 102.4 h is the same run (logged part).",
"issue_zh":"各頁對運轉次數與編號不一致。硬體摘要：三次整合運轉；Bioreactor 頁：四個整合原型（9/1、10/8、10/14、10/17）；Development 與 Contribution：六次、最長 102.4 小時；Digital Twin：七次。Photometer 頁把 10 月 14 日那次同時叫『整合運轉 3』與『運轉 6』。434 小時那次在 twin 上是第 3 次且裝有模組，但 Engineering 說它用的是沒有中空纖維模組的簡化迴路。116 小時與 102.4 小時是同一次運轉（記錄到的部分）。",
"where":"hardware-bioreactor#Summary, #4.2; development#Bioreactor; software#Every run so far; hardware-photometer#8.1; engineering#Bioreactor cycle 3",
"say_en":"Use the Digital Twin table, seven runs, four integrated, and say 116 h was the run and 102.4 h the logged part. For the 434 h run say it was a photometer test on wild type at 22 °C, and that the engineering page notes the loop had no membrane module in it.",
"say_zh":"以 Digital Twin 的表為準：七次運轉、四次整合，並說 116 小時是整次運轉、102.4 小時是記錄到的部分。講 434 小時時要說那是野生型 22 °C 的光度計測試，且 Engineering 頁註明該迴路沒有薄膜模組。",
"dom":"hardware",
"id":"g010"
},
{
"issue_en":"Evidence that cells are retained and the shear is tolerable is thinner than the headline. Retention rests on two single platings, no replicate, no detection limit. Cell size is given as 0.25 to 1.0 µm (Safety) and as a 1 to 2 µm rod or 0.8 x 3 µm (Biomanufacturing). Shear of 4000 to 6000 s-1 is called comfortable, yet the Measurement page cites a study where B. subtilis cells shrank and oxidative stress rose at 1482 s-1, and viability after circulation was never read. The 0.2 µm pore also passes vesicles and debris.",
"issue_zh":"細胞被留住與剪切可耐受的證據比標題薄弱。留住只靠兩次單一塗盤，沒有重複、沒有偵測極限。細胞大小在 Safety 寫 0.25 至 1.0 µm，在 Biomanufacturing 寫 1 至 2 µm 桿狀或 0.8 x 3 µm。4000 至 6000 s-1 的剪切被說成還算舒適，但 Measurement 頁引用的研究顯示 B. subtilis 在 1482 s-1 時細胞縮小、氧化壓力上升，而且循環後的細胞存活率從未量測。0.2 µm 孔徑也會讓囊泡與碎屑通過。",
"where":"hardware-bioreactor#8; safety-and-security#Primary containment; biomanufacturing#Critical flux; measurement#Flow and pressure monitoring; engineering#Bioreactor cycle 1",
"say_en":"Say no colonies were seen on two plates under the tested conditions, which is evidence of retention but not a log reduction. Say shear tolerance is an expectation, not a measurement, and viability after circulation is something we still owe.",
"say_zh":"要說在測試條件下兩個盤都沒長出菌落，這是留住的證據，但不是對數減少量。要說剪切耐受只是預期而非量測，循環後的細胞存活率是我們還欠的實驗。",
"dom":"hardware",
"id":"g011"
},
{
"issue_en":"Photometer accuracy is quoted differently on different pages, and none is on cells. Median 3.8% from BioDrop on TiO2; slope 0.942 R² 0.9997 (Description, Engineering plot); slope 1.018 to OD 1.2 (Digital Twin); slope 0.995 to OD 2.5 (Development, Engineering); slope 1.001 with a constant 0.12 OD offset, or 0.93 with the blank (Photometer). The Pro is 5.3 times (Measurement) or 5.57 times (Photometer) more sensitive than the Slim. Working limit OD 2.5, but run 6 lost its beam above 2.7 and run 7 read to 3.34. Tilt is 7.5 degrees (Photometer) or 10 degrees (Development, Engineering). BioDrop price is NT$15,000 (about US$470) on Photometer but about US$15,000 on Contribution; Pro parts are US$371.78 or about US$360.",
"issue_zh":"不同頁對光度計準確度的寫法不同，且都不是細胞。TiO2 上與 BioDrop 中位差 3.8%；斜率 0.942、R² 0.9997（Description、Engineering 圖）；OD 1.2 內斜率 1.018（Digital Twin）；OD 2.5 內斜率 0.995（Development、Engineering）；斜率 1.001 加固定 0.12 OD 偏移，含空白為 0.93（Photometer）。Pro 比 Slim 靈敏 5.3 倍（Measurement）或 5.57 倍（Photometer）。工作上限 OD 2.5，但第 6 次運轉 2.7 以上失去光束，第 7 次讀到 3.34。傾斜角在 Photometer 是 7.5 度，在 Development、Engineering 是 10 度。BioDrop 價格在 Photometer 是 NT$15,000（約 US$470），在 Contribution 卻是約 US$15,000；Pro 零件成本是 US$371.78 或約 US$360。",
"where":"hardware-photometer#5.2, #7.1, #10.1; description; software#Photometer calibration; development#Monitor; measurement#Dual light path; contribution#In-line optical density photometer; engineering#In-line photometer",
"say_en":"Quote the test with the number: 3.8% median on titanium dioxide, slope 1.001 and 0.12 OD low on silica. Say all are particle standards, the exact slope depends on range and blank, and the high-density limit and the x5.57 factor still need a repeat on cells.",
"say_zh":"引用數字時要帶著實驗：二氧化鈦中位差 3.8%，矽膠斜率 1.001 且低 0.12 OD。要說全是顆粒標準品，確切斜率取決於範圍與空白，高密度上限與 5.57 係數仍需在細胞上重做。",
"dom":"hardware",
"id":"g012"
},
{
"issue_en":"Claims about pH control and monitoring are stronger on some pages than the Bioreactor page supports. Engineering says the loop held pH 7 for 77 hours by itself; the Bioreactor page says the automatic control worked only the first night, KOH then corroded the valve, and pH was adjusted by hand daily. The twin shows pH ranged 6.34 to 7.97 despite 53 doses. No pH probe calibration against buffers is on record, dissolved oxygen was never measured, the loop temperature probe does not respond, and sterility after peroxide cleaning is not assayed. Permeability halved (2520 to 1210 LMH/bar) while no cleaning threshold was called reached.",
"issue_zh":"pH 控制與監測的說法在某些頁面比 Bioreactor 頁能支持的更強。Engineering 說迴路自己維持 pH 7 達 77 小時；Bioreactor 頁說自動控制只有第一晚有效，之後 KOH 腐蝕閥，改為每天手動調 pH。twin 顯示雖然加了 53 次，pH 仍在 6.34 至 7.97 間波動。沒有 pH 探頭用緩衝液校正的紀錄，溶氧從未量測，迴路溫度探頭沒有反應，過氧化氫清洗後的無菌性也沒有檢測。滲透率減半（2520 降到 1210 LMH/bar），卻說沒有達到任何清洗門檻。",
"where":"engineering#Abstract, #Bioreactor cycle 8; hardware-bioreactor#4.2 prototype 4; software#Every run so far, #Current limits; development#Monitor",
"say_en":"Say automatic pH worked for the first night, then the KOH corroded the valve and we dosed by hand, so the 77 hours were not hands-off. Say dissolved oxygen and loop temperature are not measured, and fouling is one module, one run, no replacement interval.",
"say_zh":"要說自動 pH 第一晚有效，之後 KOH 腐蝕了閥，我們改成手動加，所以 77 小時並非完全免人工。要說溶氧與迴路溫度沒有量測，污垢只有一個模組、一次運轉，無法訂出更換週期。",
"dom":"hardware",
"id":"g013"
},
{
"issue_en":"The light plate's wavelengths, dose and intensity test are unclear. Home says 520 nm green and 660 nm red; Photometer, Contribution and Geospatial say about 535 and 670 nm; the LPA page states no wavelength, and Development lists verifying the real wavelengths as future work. Readings are in lux, not photon flux. Fixture lux (green about 2.3 to 2.4 klux at 5 V) differs from the plate map (green 220, 510, 3850 lux, red 168 measured, other red values calculated). The LPA page says the intensity test was not run, while Development reports ELISA green 12.9 vs red 12.5 and calls light control unconfirmed. The first run had light leakage and shaker fixes are not re-tested; only 12 of 24 wells were used.",
"issue_zh":"光盤的波長、劑量與強度實驗不清楚。Home 寫綠光 520 nm、紅光 660 nm；Photometer、Contribution、Geospatial 寫約 535 與 670 nm；LPA 頁沒有給波長，Development 把確認實際波長列為未來工作。讀值是勒克斯而非光子通量。治具量到的勒克斯（5 V 下綠光約 2.3 至 2.4 klux）與孔位圖（綠光 220、510、3850 lux；紅光只有 168 為實測，其餘為計算值）不同。LPA 頁說還沒做強度實驗，Development 卻報告 ELISA 綠光 12.9 對紅光 12.5 並說光控制未確認。第一次實驗有漏光、振盪修正尚未重測，且 24 孔只用了 12 孔。",
"where":"home; hardware-diopal; hardware-photometer#7.2.2; contribution#Light plate apparatus; geospatial-analysis; development#LPA; measurement#Optogenetic control",
"say_en":"Say the circuit is designed for green around 535 nm on and red around 670 nm off, but we have not verified the LED wavelengths or measured photon flux. Say the plate's value so far is a worked method for matched LEDs and a growth result, not a dose-response.",
"say_zh":"要說電路設計上是約 535 nm 綠光開、約 670 nm 紅光關，但我們還沒驗證 LED 的實際波長，也沒量光子通量。要說光盤目前的價值是配對 LED 的方法和一個生長結果，還不是劑量反應。",
"dom":"hardware",
"id":"g014"
},
{
"issue_en":"The leaf sensor is presented as a working part of the detect chain but has only been on a bench. Tested 10 October in air beside an air sensor, no leaf. Offset by site was +1.71, +1.31 and +0.47 °C (quoted as 1.2 to 1.9, and as minus 0.2 to plus 1.8 on Results), so no fixed correction works. Leaf wetness read 0.0% in all 540 samples because it was never wetted. Development still marks the detect row 'Successful'. The BLASTAM wet threshold is a default and the rule is unchecked against Taiwan disease records.",
"issue_zh":"葉片感測器被當作偵測鏈的運作部分，但只在桌上測過。10 月 10 日在空氣中與空氣感測器並排、沒有葉片。各地點偏差為 +1.71、+1.31、+0.47 °C（他處寫 1.2 至 1.9，Results 寫 -0.2 至 +1.8），所以固定修正行不通。540 筆的葉面濕潤度全是 0.0%，因為從未弄濕。Development 仍把偵測列標為『成功』。BLASTAM 的濕潤門檻是預設值，規則也沒有用台灣病害紀錄檢驗。",
"where":"software#The leaf and air sensors on the bench; results#Field sensors; development#Detect, Forecast & Activate; description#Hardware",
"say_en":"Say only the bench test is done: the leaf sensor reads warm by an amount that changes with site, wetness is untested, and nothing has been on a plant. The next step is the offset correction, then wetting and a leaf, as the pages say.",
"say_zh":"要說只完成桌上測試：葉片感測器偏暖，且偏差隨地點改變，濕潤度未測，也沒有放在植物上。下一步依頁面所述是先做偏差修正，再做弄濕與放上葉片。",
"dom":"hardware",
"id":"g015"
},
{
"issue_en":"The recommended operating point (263 mL/min at TMP 0.30 bar) was never used in a run. Runs fed about 300 to 390 mL/min (about 305 in the sampling record) at a mean TMP near 0.03 bar. TMP reached 0.16 bar only for 60 s with the pinch valve closed. The 313 mL/min row of the window table is already marked not recommended.",
"issue_zh":"建議的操作點（263 mL/min、TMP 0.30 bar）從未用於實際運轉。實際進料約 300 至 390 mL/min（取樣紀錄中約 305），平均 TMP 約 0.03 bar；只有夾管閥關閉的 60 秒 TMP 才到 0.16 bar。操作窗口表中 313 mL/min 那一列本身就標示為不建議。",
"where":"hardware-bioreactor#4.1 DBTL 3, #7.1.1; results#Pressure and sampling",
"say_en":"We set 263 mL/min and 0.30 bar from calibration with water, but our culture runs fed about 300 to 390 mL/min at a TMP near 0.03 bar. So the operating point is a recommendation we have not yet run at.",
"say_zh":"263 mL/min 和 0.30 bar 是用水校正得出的建議值，但我們的培養運轉進料約 300 至 390 mL/min，TMP 約 0.03 bar。所以這個操作點是我們還沒有實際跑過的建議值。",
"dom":"hardware",
"id":"g016"
},
{
"issue_en":"Design flux is 2 LMH on Biomanufacturing (J/Jcrit 0.04, threshold 46 LMH), but the Digital Twin runs drew 24 mL/min (72 LMH), 12 mL/min (36 LMH) and 17 mL/min (51 LMH) through 200 cm². Run 5 at 72 and run 7 at 51 are above the 46 LMH threshold. The 0.04 describes the design, not the runs. Medium draw of 0.96 L/day also assumes 2 LMH.",
"issue_zh":"生物製造頁的設計通量是 2 LMH（J/Jcrit 0.04、門檻 46 LMH），但數位孿生記錄的運轉在 200 cm² 上抽 24 mL/min（72 LMH）、12 mL/min（36 LMH）、17 mL/min（51 LMH）。第 5 次的 72 與第 7 次的 51 高於 46 LMH 門檻。0.04 描述的是設計值，不是實際運轉；每日培養基 0.96 L 也是以 2 LMH 計。",
"where":"biomanufacturing#Critical flux and the fouling margin, #Scaling; software#Every run so far",
"say_en":"Our scaling table uses 2 LMH, but we actually ran 36 to 72 LMH, and our fouling model puts the limit at 46. The fouling trend we saw was mild, 1.9 to 4.4 kPa in 77 hours, but that is one module in one run.",
"say_zh":"我們的擴大規模表用 2 LMH，但實際跑的是 36 至 72 LMH，而我們的積垢模型把上限放在 46。我們看到的積垢趨勢不大，77 小時內從 1.9 升到 4.4 kPa，但那只是一個模組、一次運轉。",
"dom":"hardware",
"id":"g017"
},
{
"issue_en":"DNPH activity units disagree by about 1000 times: 0.037 mU/mL at 18 h on the bioreactor page against about 30 nmol α-KB per mL per hour (about 30 mU/mL) on Results. Only the Results figure fits the stated specific activity of 2.3 to 8.3 U/mg. Development converts 30.9 nmol/mL/h to 0.52 mU/mL with a per-minute unit, a third convention.",
"issue_zh":"DNPH 活性單位相差約一千倍：反應器頁 18 小時為 0.037 mU/mL，結果頁約 30 nmol α-KB/mL/h（約 30 mU/mL）。只有結果頁的數字符合所寫的比活性 2.3 至 8.3 U/mg。開發頁把 30.9 nmol/mL/h 換成 0.52 mU/mL，用的是每分鐘的單位，是第三種算法。",
"where":"hardware-bioreactor#5.2; results#Product in the permeate; development#Demonstrate that the secreted enzyme is active",
"say_en":"The 0.037 mU/mL on the bioreactor page is about a thousand times below the roughly 30 nmol per mL per hour on Results, and only the Results value gives the 2.3 to 8.3 U/mg we state. I would state the unit definition first before quoting any activity.",
"say_zh":"反應器頁的 0.037 mU/mL 比結果頁約 30 nmol/mL/h 小約一千倍，只有結果頁的值才能得到我們所寫的 2.3 至 8.3 U/mg。我會先說明單位定義，再報活性數字。",
"dom":"hardware",
"id":"g018"
},
{
"issue_en":"Net membrane pressure drop at 263 mL/min is 0.084 bar (0.90 times theory) on the bioreactor page but 0.096 bar (1.03 times) on Digital Twin, Biomanufacturing and Development, both from the 16 August series. Module geometry also has two versions: 200 cm² and 11 fibers (rig, manual) against 150 cm² and 8 fibers (vendor reference on Results; the Biomanufacturing shear table).",
"issue_zh":"263 mL/min 時模組淨壓降，反應器頁是 0.084 bar（理論的 0.90 倍），數位孿生、生物製造與開發頁是 0.096 bar（1.03 倍），都來自 8 月 16 日那組實驗。模組規格也有兩種版本：200 cm²、11 根纖維（實驗台、手冊）對 150 cm²、8 根纖維（結果頁的廠商參考、生物製造頁的剪切表）。",
"where":"hardware-bioreactor#4.1 DBTL 3; software#Module pressure drop; development; biomanufacturing#Where the geometry comes from; results#References",
"say_en":"We have two values for the net module pressure drop at 263 mL/min, 0.084 and 0.096 bar, and both are close to theory. The vendor reference lists 150 cm² and 8 fibers, but the bench check supports 11 fibers and 200 cm², which is what we use.",
"say_zh":"263 mL/min 時模組淨壓降我們有兩個數值，0.084 和 0.096 bar，兩者都接近理論值。廠商參考資料寫 150 cm²、8 根纖維，但實驗台的檢查支持 11 根、200 cm²，這也是我們採用的。",
"dom":"hardware",
"id":"g019"
},
{
"issue_en":"Containment evidence is two single platings (2 mL on 6 June; a lumen against shell pair after 24 h at 37 °C), with no replicates, no recorded detection limit and no log reduction. Cell width is 0.25 to 1.0 µm on Safety, 0.8 to 2.0 µm on Results, 1 to 2 µm on Development, and the bioreactor page says the pores are smaller than any cell.",
"issue_zh":"封閉性證據是兩次單次平板（6 月 6 日取 2 mL；以及 37 °C 培養 24 小時的管腔側對殼側一組），沒有重複、沒有記錄偵測極限、也沒有對數減量。細胞寬度在安全頁是 0.25 至 1.0 µm，結果頁是 0.8 至 2.0 µm，開發頁是 1 至 2 µm，而反應器頁說孔比任何細胞都小。",
"where":"results#Containment and release; safety-and-security#Primary containment; development#Contain; hardware-bioreactor#9.2.1",
"say_en":"Our containment evidence is two single platings, with no replicates, no recorded detection limit and no log reduction. Cell width is quoted differently on different pages, so we call retention preliminary, not a measured efficiency.",
"say_zh":"我們的封閉性證據是兩次單次平板，沒有重複、沒有記錄偵測極限、也沒有對數減量。各頁對細胞寬度的寫法不同，所以我們稱保留效果只是初步證據，不是量測出的效率。",
"dom":"hardware",
"id":"g020"
},
{
"issue_en":"Safety describes automated TMP alerts, droplet leak detection and shell-side turbulence detection as working. The bioreactor page calls the pressure alarm and droplet sensor planned, and no droplet or turbulence sensor is on the cost list. A 0.70 bar pressure trip is in the firmware (armed in the 77-hour run, peak 0.57 bar, never fired). In integrated run 3 pressure did not catch a real leak: feed pressure rose 0.19 to 0.37 bar while TMP stayed flat.",
"issue_zh":"安全頁把自動 TMP 警報、漏液偵測和殼側紊流偵測寫成已在運作。反應器頁則說壓力警報和漏液感測器還在規劃，成本表裡也沒有漏液或紊流感測器。韌體裡有 0.70 bar 的壓力跳脫（77 小時那次運轉待命，最高 0.57 bar，從未動作）。整合第 3 次運轉中壓力沒有抓到真正的漏液：進料壓從 0.19 升到 0.37 bar，TMP 卻沒變。",
"where":"safety-and-security#Secondary containment; hardware-bioreactor#9.2.1 to 9.2.3; biomanufacturing#Regulation and biosafety; results#Pressure and sampling; engineering",
"say_en":"A 0.70 bar pressure trip exists in the firmware and was armed but never fired; the droplet sensor and shell-side turbulence detection are not built. In integrated run 3 a real leak raised feed pressure and left TMP flat, so pressure alone did not catch it.",
"say_zh":"韌體裡有 0.70 bar 的壓力跳脫，待命但從未動作；漏液感測器和殼側紊流偵測還沒做出來。整合第 3 次運轉的真實漏液讓進料壓上升、TMP 卻沒變，所以光靠壓力沒有抓到。",
"dom":"hardware",
"id":"g021"
},
{
"issue_en":"The leaf sensor was bench-tested in air only, with no leaf. Site offsets were +1.71, +1.31 and +0.47 °C (single runs from −0.09 to +1.86), so the 1.2 to 1.9 °C summary leaves out the +0.47 site. The wetness channel read 0.0% and has never been wetted. Results says the correction needed is −0.2 to +1.8 °C.",
"issue_zh":"葉片感測器只在空氣中做過桌上測試，沒有葉片。各地點偏差為 +1.71、+1.31、+0.47 °C（單次從 −0.09 到 +1.86），所以「1.2 至 1.9 °C」的摘要漏掉了 +0.47 的地點。濕度通道讀 0.0%，從未被弄濕。結果頁說需要的校正範圍是 −0.2 至 +1.8 °C。",
"where":"software#The leaf and air sensors on the bench; results#Field sensors; home",
"say_en":"The leaf sensor has only been on a bench, in air, with no leaf. Its offset ranged from +0.47 to +1.71 °C by site, so the 1.2 to 1.9 °C summary hides the smallest one, and the wetness channel has never been wetted.",
"say_zh":"葉片感測器只在桌上、空氣中、沒有葉片的情況下測過。各地點偏差從 +0.47 到 +1.71 °C，所以「1.2 至 1.9 °C」的摘要把最小的那個地點藏起來了，而且濕度通道從未被弄濕。",
"dom":"hardware",
"id":"g022"
},
{
"issue_en":"The LPA page says the intensity test the array was built for has not been run, yet Results shows Western blots at 2%, 12% and 100% green that did not order by intensity (red at full power was not silent). Light is reported only in lux, never photon flux. Matched groups are only about 3% apart in green (2.33 to 2.40 klux) and under 10% in red, so PWM sets the levels. The first culture run had light leaking between wells.",
"issue_zh":"LPA 頁面說這個陣列原本要做的強度測試還沒進行，但結果頁有 2%、12%、100% 綠光的 Western blot，且不依強度排序（全功率紅光也不是沒有訊號）。光只用 lux 報告，沒有光子通量。配對後各組綠光只差約 3%（2.33 至 2.40 klux）、紅光不到 10%，所以強度由 PWM 設定。第一次培養運轉有光線在孔間外漏。",
"where":"hardware-diopal#Summary, #2.2, #3.1; results#Optogenetic control; measurement#plate map",
"say_en":"The LPA intensity test is not done: our Western blots at 2, 12 and 100% green did not order by intensity, and the first culture run had light leaking between wells. Light is in lux only, and the matched groups are only about 3% apart in green, so PWM sets the levels.",
"say_zh":"LPA 的強度測試還沒完成：2%、12%、100% 綠光的 Western blot 不依強度排序，第一次培養運轉也有光線在孔間外漏。光只用 lux 表示，配對後各組綠光只差約 3%，所以強度由 PWM 設定。",
"dom":"hardware",
"id":"g023"
},
{
"issue_en":"Wavelengths differ by page: Home says 520 nm green and 660 nm red; Hardware, Contribution, Geospatial and Entrepreneurship say about 535 and 670; Results says 525 and 630 and that the red LEDs emit at 640 nm against the 672 nm CcaS needs. The LPA page gives no wavelength, and Development lists verifying the real wavelengths as future work.",
"issue_zh":"各頁波長不一：首頁寫綠光 520 nm、紅光 660 nm；硬體、貢獻、地理空間與創業頁寫約 535 和 670；結果頁寫 525 和 630，並說紅光 LED 約 640 nm，而 CcaS 需要 672 nm。LPA 頁面沒有給波長，開發頁把驗證真實波長列為未來工作。",
"where":"home; hardware-bioreactor#7.1.1; hardware-diopal; contribution; results#What it settles; development#LPA",
"say_en":"The wiki gives 520 and 660 nm on Home, about 535 and 670 elsewhere, and 525 and 630 on Results, which also says our red LEDs emit at 640 nm. We have not measured the real LED wavelengths, so I would quote them as literature values.",
"say_zh":"wiki 首頁寫 520 和 660 nm，其他頁約 535 和 670，結果頁寫 525 和 630，並說我們的紅光 LED 約 640 nm。我們沒有量過 LED 的真實波長，所以我會把這些說成文獻數值。",
"dom":"hardware",
"id":"g024"
},
{
"issue_en":"Green light was never fitted to the bioreactor in a working way. Every integrated run used a constitutive promoter, so light control was out of the test. The Digital Twin lists green light as tested, not integrated, and a 3 m green LED strip appears on the rig specification. On the LPA, green and red ELISA values were similar (12.9 and 12.5 µg/mL at 13 h), so light-dependent regulation is unconfirmed.",
"issue_zh":"綠光從未以可運作的方式裝進反應器。每次整合運轉都用組成型啟動子，所以光控制不在測試之內。數位孿生把綠光標為「測過但未整合」，規格表則有一條 3 m 綠光 LED 燈帶。在 LPA 上，綠光與紅光的 ELISA 數值相近（13 小時為 12.9 與 12.5 µg/mL），所以光依賴的調控尚未確認。",
"where":"software#Current limits, #What our digital twin measures; hardware-bioreactor#4.2, #7.1.1; development#Show that green light controls production; biomanufacturing#Abstract",
"say_en":"Green-light control was tested on the LPA only. Every integrated bioreactor run used a constitutive promoter, and the Digital Twin lists green light as tested, not integrated.",
"say_zh":"綠光控制只在 LPA 上測過。每一次整合反應器運轉都用組成型啟動子，數位孿生也把綠光列為「測過但未整合」。",
"dom":"hardware",
"id":"g025"
},
{
"issue_en":"Run records conflict. Integrated run 2 pH: too acidic (bioreactor page) against pH rose (Results). First September run volume: 500 mL (bioreactor, Engineering, Results) against 1 L (Digital Twin); Biomanufacturing says 300 mL before and 1 L since, and 400 mL in its abstract. First Western blot: faint at best against confirmed selective passage. Valve failure: peroxide (bioreactor) against KOH (Engineering) against indistinguishable (Results). Temperature probe never answered and DO probes failed. Three transducers on the rig against four listed live. Pump named BP1000 (1 L/min), ZP4000 (230 to 2600 mL/min), measured up to 1535 mL/min. Run numbers also differ: hardware integrated runs 1 to 4 are Digital Twin runs 4 to 7.",
"issue_zh":"運轉紀錄互相矛盾。整合第 2 次 pH：反應器頁說太酸，結果頁說上升。9 月第一次運轉體積：反應器、工程、結果頁寫 500 mL，數位孿生寫 1 L；生物製造頁說先前 300 mL、9 月起 1 L，摘要又寫 400 mL。第一張 Western blot：反應器頁說微弱，結果頁說確認選擇性通過。閥的損壞：反應器頁歸因過氧化氫，工程頁歸因 KOH，結果頁說無法分辨。溫度探頭從未回應、DO 探頭失敗。實驗台三個壓力感測器，卻列了四個運轉中。幫浦寫 BP1000（1 L/min）、ZP4000（230 至 2600 mL/min），實測最高 1535 mL/min。運轉編號也不同：硬體頁整合第 1 至 4 次就是數位孿生的第 4 至 7 次。",
"where":"hardware-bioreactor#4.2, #7.1.1, #10.1; results#Growth in the reactor, #pH and antibiotic resupply; software#Every run so far, #Current limits; engineering; biomanufacturing",
"say_en":"Some run details differ between our pages: the pH direction in run 2, the volume of the first September run, how clear the first Western blot was, and what broke the valve. I would state both versions, say which page I trust, and not guess.",
"say_zh":"我們的頁面對部分運轉細節說法不同：第 2 次的 pH 方向、9 月第一次運轉的體積、第一張 Western blot 清不清楚，還有是什麼弄壞了閥。我會兩種說法都講，說明我信哪一頁，不亂猜。",
"dom":"hardware",
"id":"g026"
},
{
"issue_en":"Cost: US$1022.67 is known costs only. The controller (UNO Q), mainboard and converter, KOH dosing pump and stir bar are not listed; the pinch-valve nuts and screws are unpriced. The photometer is 36% of it. No comparison with a commercial hollow-fiber system exists; FiberCell appears only as a sourcing note. US$2277 is a planning estimate. Contribution quotes the Pro at US$360.60, the photometer page US$371.78.",
"issue_zh":"成本：US$1022.67 只含已知成本。控制器（UNO Q）、主機板與轉換器、KOH 加料幫浦、攪拌子都沒列入，夾管閥螺帽螺絲未標價。光度計佔其中 36%。沒有與商用中空纖維系統的比較；FiberCell 只出現在採購備註。US$2277 是規劃估算。貢獻頁寫 Pro 為 US$360.60，光度計頁寫 US$371.78。",
"where":"hardware-bioreactor#10.1; entrepreneurship; contribution; drylab-notebook; biomanufacturing#Field Deployment",
"say_en":"US$1022.67 is the known cost: it leaves out the controller, mainboard, KOH pump and stir bar. We have not compared it with a commercial hollow-fiber system, and the US$2277 in the business plan is a planning estimate, not a quote.",
"say_zh":"US$1022.67 是已知成本：沒有算控制器、主機板、KOH 幫浦和攪拌子。我們沒有和商用中空纖維系統比較過，商業計畫書的 US$2277 是規劃估算，不是報價。",
"dom":"hardware",
"id":"g027"
},
{
"issue_en":"Hydroponics: the predicted freeboard (4.8 mm at 71.3 g, about 1 mm per 3.5 g) comes from the STL files and was never measured on a printed plate. The CH Bio peptide salt pre-tests ran with one plate per arm, so treatments cannot be ranked, and after several failed plantings the later protectant runs moved to tube racks.",
"issue_zh":"水耕：預測的乾舷（71.3 g 時 4.8 mm，每 3.5 g 約 1 mm）來自 STL 檔，從未在實際列印的浮板上量過。CH Bio 胜肽的鹽逆境前測每個處理只有一塊板，無法排出優劣；盒子裡幾次種植失敗後，後來的保護物實驗改用試管架。",
"where":"hardware-hydroponics#Summary, #3 Results, #4.3; drylab-notebook; plant",
"say_en":"The plate's 4.8 mm freeboard is a calculation from the print files and has not been measured on a real plate. The salt pre-tests ran with one plate per arm, and the later protectant runs moved to tube racks.",
"say_zh":"浮板 4.8 mm 的乾舷是由列印檔算出來的，還沒有在真正的浮板上量過。鹽逆境前測每個處理只有一塊板，後來的保護物實驗就改用試管架。",
"dom":"hardware",
"id":"g028"
},
{
"issue_en":"Shear on the cells: wall shear is about 4060 s⁻¹ at 263 mL/min, but culture viability after circulation at that shear was not read, and cumulative exposure is not established. The one published figure the team found (B. subtilis in Couette flow at up to 1482 s⁻¹) shrank cells to about half size with 9.3-fold more reactive oxygen species, though in a different vessel.",
"issue_zh":"細胞承受的剪切：263 mL/min 時管壁剪切率約 4060 s⁻¹，但沒有測過在這個剪切下循環後的細胞存活率，累積暴露量也沒有釐清。團隊找到的唯一已發表數字（枯草桿菌在 Couette 流中最高 1482 s⁻¹）顯示細胞縮小到約一半、活性氧增加 9.3 倍，不過那是不同的容器。",
"where":"measurement#Flow and pressure monitoring; biomanufacturing#Wall shear and the operating envelope; hardware-bioreactor#4.1 DBTL 3",
"say_en":"We computed a wall shear of about 4060 s⁻¹ but did not read cell viability after circulating at it. The one published figure we found points the other way, so the safe margin is an expectation, not a measurement.",
"say_zh":"我們算出管壁剪切率約 4060 s⁻¹，但沒有測在這個剪切下循環後的細胞存活率。我們找到的唯一已發表數字方向相反，所以安全餘裕只是預期，不是量測結果。",
"dom":"hardware",
"id":"g029"
},
{
"issue_en":"Containment evidence is thinner than the safety wording. The safety page abstract reports no shell-side colonies at 24 h; the Results page says 72 h of active ACCD with no colonies; the hardware page says containment rests on two single platings with no replicates, no recorded detection limit and no log-reduction measure. The safety page also describes automated leak alerts and droplet sensors as in place, while the hardware page lists the droplet sensor as planned. The safety page gives cell size as 0.25 to 1.0 µm; the hardware page gives 0.8 to 2.0 µm wide.",
"issue_zh":"圍堵證據比安全頁的措辭薄弱。安全頁摘要寫 24 小時殼側無菌落；Results 頁寫 72 小時活性 ACCD 且無菌落；硬體頁則說圍堵證據只有兩次單次塗盤，沒有重複、沒記錄偵測極限、沒有對數減少量。安全頁把自動漏液警報與液滴感測器寫得像已完成，硬體頁卻列為規劃中。安全頁寫細胞大小 0.25 至 1.0 µm，硬體頁寫寬 0.8 至 2.0 µm。",
"where":"safety-and-security, results, hardware-bioreactor, laws-and-regulations",
"say_en":"Say: 'The membrane is designed to retain cells. Our evidence is a single plating with no colonies on the shell side, so it is preliminary. The droplet sensor is planned, and we need replicates before claiming an efficiency.' Do not say 'proven' or give a single hour count.",
"say_zh":"要說：「膜在設計上能留住細胞。我們的證據是一次塗盤、殼側沒有菌落，所以只是初步。液滴感測器是規劃中，要有重複實驗才能主張效率。」不要說「已證明」，也不要只報一個小時數。",
"dom":"ihp",
"id":"g030"
},
{
"issue_en":"Human practices wording and the hardware record do not fully match. HP says Prof. Chang's September advice led to a 'modular, farmer-friendly capsule unit'; the hardware page says the capsule is future work. HP lists leakage of protectant and B. subtilis through the membrane 'even without any driving force' as a problem, while the hardware page (June 18) describes the problem as nothing driving protectant across the membrane. HP lists the Arduino Uno Q plus Mega 2560 as the result of Owl Lab's review; the hardware page says a single mainboard replaced that two days later.",
"issue_zh":"人類實踐頁的說法與硬體頁紀錄不完全一致。HP 說張教授 9 月的建議讓硬體轉向「模組化、對農民友善的膠囊單元」，硬體頁卻說膠囊是未來工作。HP 把保護劑與枯草桿菌「即使沒有驅動力也會從膜漏出」當成問題，硬體頁（6/18）描述的問題卻是沒有任何力量把保護劑推過膜。HP 把 Arduino Uno Q 加 Mega 2560 寫成 Owl Lab 審查的結果，硬體頁說兩天後被單一主機板取代。",
"where":"human-practices, hardware-bioreactor",
"say_en":"Say: 'The capsule is future work. The final electronics use one mainboard. The September leakage note is on the human practices page and Prof. Chang helped us troubleshoot; the hardware page has the detail.' Use the hardware page when the two differ.",
"say_zh":"要說：「膠囊是未來工作。最終電子系統是單一主機板。9 月的滲漏紀錄在人類實踐頁，張教授協助我們排除，細節在硬體頁。」兩頁不同時以硬體頁為準。",
"dom":"ihp",
"id":"g031"
},
{
"issue_en":"Reach numbers differ across pages. Booth visitors: 116 (data physicalization abstract) vs 160 (its Impact section and HP) with 62 survey responses; event visitors 400+, participants 200+, 'general public 200+'. Students taught: 140 (education, three places) vs 144 (Contribution). Elementary card-game fans: 75 of 88 (education) vs 75 of 99 (Contribution); 88 is the post-survey count and 99 the pre-survey count. HP abstract says 'seven months' while the body says nine months (February to October). The 31 stakeholders are not listed in one place.",
"issue_zh":"各頁觸及人數不一致。攤位訪客：116（資料實體化摘要）對 160（其成效段與 HP），問卷回收 62；活動訪客 400 多、參與者 200 多、「一般大眾 200+」。教學學生數：140（教育頁三處）對 144（貢獻頁）。國小喜歡卡牌的人數：75/88（教育頁）對 75/99（貢獻頁），88 是後測人數、99 是前測人數。HP 摘要寫「七個月」，內文寫九個月（2 月到 10 月）。31 位利害關係人沒有一次列出。",
"where":"data-physicalization, human-practices, education, contribution",
"say_en":"Say: 'Our pages differ. The numbers I am sure of are 140 students, 62 survey responses and 160 booth visitors.' Use 140 and 75 of 88, and tell the judge the other figures come from a different count.",
"say_zh":"要說：「我們各頁數字有差異。我確定的是 140 位學生、62 份問卷、160 位攤位訪客。」用 140 和 75/88，並說明其他數字是不同的計算方式。",
"dom":"ihp",
"id":"g032"
},
{
"issue_en":"SDG claims are inconsistent and thinly evidenced. The sustainability abstract names four SDGs (2, 4, 10, 15) but the body claims five (adds 12). SDG 2 rests on 'first trials on Arabidopsis', and the page says the product does not directly solve world hunger. The claim that the mixed waste medium 'works just as well as LB' rests on two cultures per medium. The weed concern is credited to Mr. Chen Ke-Wei on this page but is not in his HP record. The SDG 15 line says protectants 'already exist in plants'.",
"issue_zh":"SDG 主張不一致且證據薄弱。永續頁摘要列四個 SDG（2、4、10、15），內文卻主張五個（多了 12）。SDG 2 只靠「阿拉伯芥的初步試驗」，頁面也承認產品不能直接解決世界飢餓。混合廢棄物培養基「與 LB 一樣好」只有每種兩管。雜草疑慮在本頁歸給陳可為先生，但他在 HP 的紀錄裡沒有。SDG 15 寫保護劑「本來就存在於植物中」。",
"where":"sustainability, human-practices, contribution",
"say_en":"Say: 'We claim five SDGs: 2, 4, 10, 12 and 15. Our evidence for 2 is early Arabidopsis work, for 12 two cultures per medium, and our page lists negatives.' Do not claim to fight hunger.",
"say_zh":"要說：「我們主張五個 SDG：2、4、10、12、15。SDG 2 的證據是早期阿拉伯芥實驗，SDG 12 是每種培養基兩管，頁面也列出負面影響。」不要說我們解決飢餓。",
"dom":"ihp",
"id":"g033"
},
{
"issue_en":"Biotic stress: farmers at the Expo named pests and disease more than heat, and HP says biotic stress was added as a target in May. But the business page limits claims to abiotic stress, the laws page says the iGEM high school white list stops gray mold testing, and the mission statement still mentions combined biotic and abiotic stress. Several experts also told the team to focus on one stress (Sattely, World Vegetable Center), while the continuous engagement section says the focus was narrowed to heat and salinity.",
"issue_zh":"生物性逆境：花博的農民提到病蟲害多於高溫，HP 說 5 月把生物性逆境加入目標。但商業頁把主張限制在非生物逆境，法規頁說 iGEM 高中組白名單讓團隊不能測灰黴病，使命宣言卻仍提到生物與非生物逆境並存。多位專家也要求只專注一種逆境（Sattely、世界蔬菜中心），而持續互動段寫焦點縮小到熱與鹽。",
"where":"human-practices, entrepreneurship, laws-and-regulations",
"say_en":"Say: 'Farmers told us pests matter most. We cannot test them under the high school white list, so our evidence is abiotic: heat and salinity on Arabidopsis. BoPep4 for gray mold is planned after the Jamboree.'",
"say_zh":"要說：「農民告訴我們病蟲害最重要。高中組白名單讓我們不能測，所以證據是非生物的：阿拉伯芥的熱與鹽害。BoPep4 用於灰黴病是大會後的規劃。」",
"dom":"ihp",
"id":"g034"
},
{
"issue_en":"First international market is inconsistent. The laws page names the Philippines as the first international market to explore; the business page says the Philippines and Indonesia after Taiwan; HP says 'target France first' through Mr. Quillere, and the BIO Asia entry says the team decided to expand into Southeast Asia. Also, HP says the team now targets conventional farms and cannot serve organic farms, yet the first interviews were with organic farmers, so the Expo sample is not the target market.",
"issue_zh":"第一個海外市場說法不一。法規頁把菲律賓列為第一個要探索的國際市場；商業頁寫台灣之後是菲律賓與印尼；HP 寫透過 Quillere 先以法國為目標，BIO Asia 一段又說決定擴展到東南亞。另外 HP 說現在以慣行農場為目標、不能服務有機農場，但最早的訪談對象是有機農民，所以花博的樣本不是目標市場。",
"where":"laws-and-regulations, entrepreneurship, human-practices",
"say_en":"Say: 'Taiwan first. The Philippines is the first market we studied for regulation. France is a relationship we are building through the French Office.' Admit that our first interviews were with organic farmers, who are not our target.",
"say_zh":"要說：「先台灣。菲律賓是我們第一個研究法規的市場。法國是透過法國在台辦事處建立的關係。」並承認最早訪談的有機農民不是我們的目標客群。",
"dom":"ihp",
"id":"g035"
},
{
"issue_en":"Who did what is not on the wiki as text. The Attribution page contains only the iGEM form embedded from teams.igem.org, and the team page builds its cards with JavaScript from a roster file (the page source says it introduces forty-seven people). The Inclusivity page is not part of the frozen text and is only a placeholder in the working files, so inclusivity claims live elsewhere: bilingual education materials, free access (education), SDG 10 and small-farmer pricing (sustainability), and the LINE platform for farmers who are unfamiliar with technology.",
"issue_zh":"「誰做了什麼」沒有以文字形式放在維基上。貢獻頁只嵌入 teams.igem.org 的 iGEM 表單，團隊頁用 JavaScript 從名單檔建立卡片（頁面原始碼說介紹四十七人）。包容性頁面不在凍結的文字內，工作檔中也只是預留頁，所以包容性主張分散在其他頁：雙語教材與免費取用（教育）、SDG 10 與小農定價（永續）、給不熟悉科技農民的 LINE 平台。",
"where":"attributions, team, education, sustainability, human-practices",
"say_en":"Say: 'The full attribution is in our iGEM form. I can tell you my own part and which advisor gave which idea.' For inclusivity, point to bilingual free materials, subsidised access for small farmers and the LINE platform.",
"say_zh":"要說：「完整貢獻在我們的 iGEM 表單。我可以說明我自己的部分，以及哪位顧問提出哪個想法。」談包容性時，指向雙語免費教材、小農補貼取得與 LINE 平台。",
"dom":"ihp",
"id":"g036"
},
{
"issue_en":"Outreach evidence is self-reported and has selection limits. The booth survey went to visitors who completed all six booths (62 of 160), families filled one form per group, there was no pre-test, and the forum KAP shows percentages (speaker 100%, farmers 80%) without the number of respondents. The data map's Yilan/Nantou explanation mixes tourism, landslides and salinity, although the map encodes heat stress and rice yield. HP says the sound recordings 'confirmed that using natural plant signals was a great way to explain our biosensors', but ReLEAF uses a leaf sensor, not sound.",
"issue_zh":"推廣證據是自我回報且有選擇偏誤。攤位問卷只發給走完六攤的訪客（160 人中 62 人），家庭一組填一份，沒有前測；論壇 KAP 只給百分比（講者 100%、農民 80%），沒有回收份數。資料地圖對宜蘭、南投的解釋混合了觀光、山崩與鹽度，但地圖編碼的是熱逆境與稻米產量。HP 說聲音錄音「證實用自然的植物訊號來解釋我們的生物感測器很好」，但 ReLEAF 用的是葉片感測器，不是聲音。",
"where":"data-physicalization, human-practices",
"say_en":"Say: 'The surveys show interest and recall, not behaviour change. The sound exhibit is a teaching tool; our system senses leaf temperature and moisture, not sound.' Give 51.6% as the knowledge test result.",
"say_zh":"要說：「問卷顯示的是興趣與記憶，不是行為改變。聲音展示是教學工具；我們的系統感測葉片溫度與濕度，不是聲音。」知識測驗結果就講 51.6%。",
"dom":"ihp",
"id":"g037"
},
{
"issue_en":"Strain, volume and run provenance disagree across pages. Biomanufacturing says every run to September was strain 168 and WB800 ran only twice in October; Hardware: Bioreactor and Results say every cycle after the first used WB800, and Results reports a 72 h WB800 permeate series (cycle 4) while the Digital Twin run table lists the 1 to 6 September run as 168. The abstract says a 400 mL bioreactor; the same page says 1 L working volume since September and 300 mL before; Results says 500 mL for several cycles.",
"issue_zh":"各頁對菌株、體積與運轉來源的說法不一致。Biomanufacturing 說 9 月前每次都是 168、WB800 只在 10 月跑兩次；Hardware: Bioreactor 與 Results 說第一次之後都用 WB800，Results 還有 72 小時 WB800 透過液數據（第 4 輪），但 Digital Twin 的運轉表把 9 月 1 至 6 日那次列為 168。摘要寫 400 mL 生物反應器，同頁又說 9 月起工作體積 1 L、之前 300 mL，Results 則有數輪是 500 mL。",
"where":"biomanufacturing, hardware-bioreactor, results, software",
"say_en":"Say which numbers you can place: the 102.4 h run was strain 168, and the October runs were WB800. Admit that the cycle numbering on Results and the run numbering on the Digital Twin page were written separately and that you would check the raw files before quoting a strain next to a number.",
"say_zh":"只講你能確定的：102.4 小時那次是 168，10 月的運轉是 WB800。坦白承認 Results 的循環編號和 Digital Twin 的運轉編號是分開寫的，引用數字配菌株之前要先查原始檔案。",
"dom":"biomanufacturing",
"id":"g038"
},
{
"issue_en":"The headline run and the product do not line up. The 102.4 h run is the 'longest reactor run' with ACC deaminase secretion, but Results says strain 168 secreted very little ACC deaminase. Biomanufacturing says permeate concentration and activity are not yet quantified, while Results shows ELISA above 2 µg/mL and DNPH activity in the shell for 72 h. The 434 h wild-type run is longer than 102.4 h. ACCD figures also vary: about 16 µg/mL (Results Fig. 13), 12 to 13 and 9 (variants), 6.5 peak at 12 h (72 h run), 10.7 lumen and 10.5 shell (Hardware), about 5 flat (Digital Twin).",
"issue_zh":"主打的運轉與產物對不起來。102.4 小時是有 ACC deaminase 分泌的「最長運轉」，但 Results 說 168 菌株幾乎沒分泌 ACC deaminase。Biomanufacturing 說透過液濃度與活性尚未量化，Results 卻有殼側 72 小時 ELISA 高於 2 µg/mL 和 DNPH 活性。434 小時的野生型運轉比 102.4 小時更長。ACCD 數字也不一：約 16 µg/mL（Results 圖 13）、12 至 13 和 9（變體）、72 小時運轉 12 小時高峰 6.5、Hardware 的內腔 10.7 殼側 10.5、Digital Twin 的約 5 且持平。",
"where":"biomanufacturing, results, software, hardware-bioreactor",
"say_en":"Say that the 102.4 h run shows the loop holds a culture, and the protein evidence comes from the WB800 runs, which were shorter. Give a range of 2.5 to 8.5 µg/mL for the permeate and say the values come from different constructs, times and preparations, each a single series.",
"say_zh":"說 102.4 小時證明迴路能維持培養，蛋白的證據來自較短的 WB800 運轉。透過液濃度給 2.5 至 8.5 µg/mL 的範圍，並說明數值來自不同構築、時間與製備，每組都是單一系列。",
"dom":"biomanufacturing",
"id":"g039"
},
{
"issue_en":"Containment evidence is thinner than the claim. Two plating tests, single platings, no replicates, no recorded detection limit, undocumented incubation for the June sample, no log reduction. The same membrane recovers the product and is the only containment, with no kill or filtration step after it. Cell size is quoted as 0.8 to 3 µm (Biomanufacturing), 0.8 to 2.0 µm wide (Results) and 0.25 to 1.0 µm (Safety). Residual DNA, spores and vesicles of 20 to 200 nm were not tested. CH Biotech told us regulators need undeniable proof.",
"issue_zh":"阻隔證據比宣稱薄弱。只有兩次塗盤測試，單次、無重複、沒記錄偵測極限、6 月樣品的培養條件沒記錄、沒有對數減少值。同一片膜既回收產物又是唯一的阻隔，後面沒有殺菌或過濾步驟。細胞大小在三頁寫法不同：0.8 至 3 µm (Biomanufacturing)、寬 0.8 至 2.0 µm (Results)、0.25 至 1.0 µm (Safety)。殘留 DNA、孢子和 20 至 200 nm 的囊泡都沒測。正瀚生技告訴我們主管機關要無可否認的證據。",
"where":"results, biomanufacturing, safety-and-security, laws-and-regulations",
"say_en":"Say it is preliminary evidence consistent with retention, and name what is missing: replicates, a recorded detection limit, a seven-log challenge, and DNA and spore tests. Say the pore size is 0.2 µm and the cells are larger, so the physics supports it, but we have not measured the margin.",
"say_zh":"說這是與阻留一致的初步證據，並講出缺少什麼：重複實驗、有記錄的偵測極限、七個對數挑戰，以及 DNA 與孢子測試。說孔徑 0.2 µm、細胞比它大，原理上合理，但我們沒有量測安全餘裕。",
"dom":"biomanufacturing",
"id":"g040"
},
{
"issue_en":"The fouling and geometry numbers are inconsistent. J/Jcrit of 0.04 is at a 2 LMH design flux, but runs 5, 6 and 7 drew 72, 36 and 51 LMH, above the 46 LMH threshold in two of them. Module geometry is 11 fibers and 200 cm² on the bench check and 8 fibers and 150 cm² in the vendor line. Cross-flow is quoted as 263, about 305 and about 371 mL/min. The fouling trend of 1.9 to 4.4 kPa is smaller than the transducer resolution of ±10 kPa. The oxygen calculation uses OD 1.454 as carrying capacity while runs reached OD 3.77.",
"issue_zh":"堵塞與幾何數字不一致。J/Jcrit 0.04 是在 2 LMH 設計通量，但 run 5、6、7 實際取 72、36、51 LMH，其中兩次高於 46 LMH 門檻。模組幾何在實測是 11 條、200 cm²，廠商規格寫 8 條、150 cm²。交叉流速寫成 263、約 305 和約 371 mL/min。堵塞趨勢 1.9 至 4.4 kPa 比壓力傳感器解析度 ±10 kPa 還小。氧氣計算把 OD 1.454 當承載量，但實際運轉到 OD 3.77。",
"where":"biomanufacturing, software, results, hardware-bioreactor",
"say_en":"Say that 0.04 is a design-point calculation and that the runs used higher, intermittent permeate draws, so you read fouling from the pressure trend, not from the margin. Say the 11-fiber geometry is the one checked against the bench, and the shear table is deliberately the higher, eight-fiber case.",
"say_zh":"說 0.04 是設計點的計算，實際運轉的透過液取量較高且是間歇的，所以堵塞是看壓力趨勢而不是看餘裕。說 11 條纖維是和實驗桌比對過的幾何，剪切表刻意採用較高的 8 條纖維情況。",
"dom":"biomanufacturing",
"id":"g041"
},
{
"issue_en":"The scale and cost story uses two different machines. The Math Model and Geospatial price a 20 L unit at US$937.50 (NT$30 000), but the unit actually built is 1 L, whose bioreactor part cost NT$30 450, and the business plan prices two 1 L bioreactors at US$2280 our cost. The wiki shows no 20 L unit built or quoted. Doses differ 185-fold (203 U vs 37.6 kU per ha per spray). The Math Model's throughput is a 5 h batch cycle; the business plan uses a 1 L batch every 16 h; the perfusion page gives 0.96 L a day. Payback is 68 years (Math Model) vs 4.9 years (Geospatial). Doses per run and plants covered per run are not stated on the Biomanufacturing page.",
"issue_zh":"規模與成本的敘述用了兩台不同的機器。數學模型與地理空間頁把 20 L 單元定價 US$937.50（NT$30 000），但實際做出來的是 1 L，其生物反應器部分成本 NT$30 450，商業計畫兩台 1 L 的成本是 US$2280。wiki 沒顯示 20 L 單元被建造或報價。劑量差 185 倍（每公頃每次 203 U 對 37.6 kU）。數學模型的產能是 5 小時批次循環，商業計畫是每 16 小時 1 L，灌流頁是每天 0.96 L。回收期 68 年（數學模型）對 4.9 年（地理空間）。每次運轉能做幾劑、涵蓋幾株植物，Biomanufacturing 頁沒有寫。",
"where":"model, geospatial-analysis, entrepreneurship, biomanufacturing",
"say_en":"Say plainly that these are three planning scenarios and none is validated on a crop. The 1 L unit is the one we built; the 20 L figure is a modeled costing basis. Say the pilot is meant to measure the real dose and cost per hectare.",
"say_zh":"直接說這是三個規劃情境，沒有一個在作物上驗證過。我們做出來的是 1 L 的機器，20 L 是模型用的成本基準。試點就是要量測真正的劑量和每公頃成本。",
"dom":"biomanufacturing",
"id":"g042"
},
{
"issue_en":"Organic farming and claims are described inconsistently. Biomanufacturing says farmers want to say their crops are organic and the bioreactor was built around that; Laws says Taiwan excludes GMO products from certified organic whatever the containment, and Geospatial says this excludes ReLEAF, while also saying a GMO-derived treatment may be the only input a transitioning organic farmer would consider. BoPep4 is a drought signal on Biomanufacturing, a salinity protectant in the Laws tables, and a gray mold candidate after the Jamboree. The EU section says bacteria vials would be sold separately, while the model elsewhere is a sealed cartridge replaced by the farmer.",
"issue_zh":"有機農業與宣稱的描述不一致。Biomanufacturing 說農民想標示有機、反應器是為此設計；Laws 說臺灣不論有無阻隔都把 GMO 產物排除在認證有機之外，Geospatial 也說這排除了 ReLEAF，卻又說正在轉型有機的農民可能只願意考慮 GMO 衍生的處理。BoPep4 在 Biomanufacturing 是乾旱訊號，在 Laws 表中是耐鹽保護蛋白，Jamboree 之後又是灰黴病候選。歐盟段落說菌液瓶會另外販售，其他地方的模式是農民自行更換的密封菌匣。",
"where":"biomanufacturing, laws-and-regulations, geospatial-analysis, entrepreneurship",
"say_en":"Say that the design keeps live cells out of the product, which helps with safety, but it does not make the product organic under the Taiwan Act. Say the target market is conventional smallholders, and the organic question needs written answers from the Ministry and a certifier.",
"say_zh":"說設計讓活菌不進入產品，對安全有幫助，但依臺灣的法律不會讓產品變成有機。說目標市場是慣行小農，有機問題需要農業部和驗證機構的書面回覆。",
"dom":"biomanufacturing",
"id":"g043"
},
{
"issue_en":"Photometer and run counts do not match across pages. Biomanufacturing quotes R² 0.9999 against a TiO₂ dose and 0.9998 for the BioDrop; the Results table gives 0.987 (ours) and 0.991 (BioDrop) for TiO₂, 0.995 in the text up to OD 1.2, and 0.992 for SiO₂. Results counts six bioreactor runs; the Digital Twin page lists seven. The photometer was calibrated to OD 1.2 (TiO₂) and 2.5 (SiO₂), while runs were read to 3.77 and the beam fails above about 2.7, so higher readings are not calibrated and photometer readings are turbidity, not cell counts.",
"issue_zh":"光度計與運轉次數在各頁不一致。Biomanufacturing 引用對 TiO₂ 劑量 R² 0.9999、BioDrop 0.9998；Results 表中 TiO₂ 是 0.987（我們）與 0.991（BioDrop），文字寫 OD 1.2 以內 0.995，SiO₂ 是 0.992。Results 說六次生物反應器運轉，Digital Twin 頁列出七次。光度計校正範圍是 OD 1.2 (TiO₂) 與 2.5 (SiO₂)，但運轉讀到 3.77，光束在約 2.7 以上就失效，所以更高的讀值未經校正，而且光度計讀的是濁度不是細胞數。",
"where":"biomanufacturing, results, software",
"say_en":"Quote the Results table values and say the calibration used nonliving particles to OD 1.2 to 2.5. Say higher readings are indicative only, and we have not calibrated against plate counts.",
"say_zh":"引用 Results 表中的數值，並說校正是用非生物顆粒做到 OD 1.2 至 2.5。說更高的讀值只供參考，我們還沒用平板計數校正。",
"dom":"biomanufacturing",
"id":"g044"
},
{
"issue_en":"Not on the wiki at all: liability if engineered bacteria escape or a farmer misuses a unit; why B. subtilis over E. coli or yeast (no head-to-head); a farm-scale containment test; the cost per dose; a Taiwan contained-use GMO framework (unresolved); and any written regulator confirmation (none in any market). The Biomanufacturing page cites EU Directive 2009/41/EC for contained use, but the Laws page does not analyse it. The rig software's version label reads ver. 4.13 with UI v6.2.2, while the Software page lists firmware v4.2.2 and backend v6.2.2; the wiki does not name who wrote the v4.13 app, and the next Digital Twin is a demo.",
"issue_zh":"wiki 完全沒寫的：工程菌逃逸或農民誤用時誰負責；為什麼選 B. subtilis 而不是大腸桿菌或酵母（沒有直接比較）；農場規模的阻隔測試；每劑成本；臺灣的封閉使用 GMO 架構（未確定）；以及任何書面的主管機關確認（所有市場都沒有）。Biomanufacturing 頁引用歐盟 Directive 2009/41/EC 作為封閉使用，但 Laws 頁沒有分析它。反應器軟體的版本標示是 ver. 4.13、UI v6.2.2，而 Software 頁寫韌體 v4.2.2、後端 v6.2.2；wiki 沒有指名誰寫了 v4.13 的 app，下一版數位孿生只是示範。",
"where":"laws-and-regulations, biomanufacturing, software, digital-twin-app, next-digital-twin",
"say_en":"Say 'we did not test that' or 'it is not on our wiki', then pivot to the nearest thing you did: the three-part regulatory split, the cartridge design, and the four questions we plan to send every regulator. Do not describe the next Digital Twin as running the rig.",
"say_zh":"說「我們沒有測試這個」或「我們的 wiki 沒有寫」，然後轉到最接近的實作：三部分的法規拆分、菌匣設計，以及我們計畫寄給每個主管機關的四個問題。不要把下一版數位孿生說成正在控制反應器。",
"dom":"biomanufacturing",
"id":"g045"
},
{
"issue_en":"Contained-use status is stated two ways. The Entrepreneurship page says a sealed device can be classed as contained-use equipment and lists 'contained-use answers in Taiwan by Oct 2027' as a highlight. The Laws page says no general Taiwan contained-use GMO framework clearly covers this case, marks it 'unconfirmed', and shows no written regulator confirmation in any of the eight markets (checks B4, C5, P4 all N).",
"issue_zh":"密閉使用的狀態有兩種說法。創業頁面說密閉裝置可歸為密閉使用設備，並把「2027 年 10 月前取得台灣密閉使用答覆」列為重點；法規頁面則說沒有明確涵蓋此情況的台灣一般密閉使用基改框架，標為「未確認」，且八個市場都沒有主管機關書面確認（B4、C5、P4 全為 N）。",
"where":"entrepreneurship; laws-and-regulations",
"say_en":"We believe our sealed design supports a contained-use route, but no regulator has confirmed it in writing. We are asking for written answers by October 2027 and will not call ourselves certified.",
"say_zh":"我們相信密閉設計支持密閉使用的路徑，但沒有任何主管機關書面確認。我們計畫在 2027 年 10 月前取得書面答覆，在那之前不會宣稱已通過認證。",
"dom":"entrepreneurship",
"id":"g046"
},
{
"issue_en":"Dose and hardware cost per hectare disagree between our pages. The business plan assumes 203 U per hectare per spray, two 1 L bioreactors and US$2280 of hardware, built on a hand-built prototype that cost NT$83 028 (about US$2800) for one unit. The Math Model gets 37.6 kU (185 times more), about four 20 L units and US$3800 of capital per hectare, and the business plan says it has not been rebuilt on that figure. No cost per dose or techno-economic analysis is shown, and neither dose has been tested on a crop. The price, the break-even area and the investor return all move with this number.",
"issue_zh":"各頁對每公頃劑量與硬體成本的說法不一致。商業計畫假設每公頃每次噴灑 203 U、兩台 1 公升反應器、2280 美元硬體，並以一台手工原型（NT$83 028，約 2800 美元）為基礎；數學模型得到 37.6 kU（大 185 倍）、約四台 20 公升單位、每公頃資本 3800 美元，商業計畫也說明尚未依此重算。維基沒有每劑成本或技術經濟分析，兩種劑量也都沒有在作物上測試。售價、損益兩平面積與投資人報酬都會隨這個數字改變。",
"where":"entrepreneurship; model; biomanufacturing",
"say_en":"We show both numbers side by side because we do not yet know which is right. The tomato pilot decides the dose, and the price and break-even area will be recalculated with it.",
"say_zh":"我們把兩個數字並列，因為還不知道哪個才對。番茄試點會決定劑量，售價與損益兩平面積會隨之重算。",
"dom":"entrepreneurship",
"id":"g047"
},
{
"issue_en":"There is no traceable number for the farmer's benefit or payback. The business plan says a farmer must gain about US$1900 a year to pay back in 3 years, but gives no baseline for what a farmer loses or spends on chemicals. The Math Model puts the weather loss on ordinary paddy at US$138 per hectare per crop, so payback is 68 years at full efficacy; it cites the Geospatial analysis for US$1931 net benefit and 4.9 years, 14 times higher, but the Geospatial page text does not show that figure. Efficacy itself comes from one Arabidopsis plate per condition (about 70% more chlorophyll) with no field or tomato yield data.",
"issue_zh":"農民效益與回本期沒有可追溯的數字。商業計畫說農民每年需獲益約 1900 美元才能在 3 年內回本，但沒有給出農民目前損失或化學藥劑支出的基準。數學模型把一般稻田的天氣損失定為每公頃每作 138 美元，所以在完全有效時回本要 68 年；它引用地理空間分析的淨效益 1931 美元與 4.9 年，高出 14 倍，但地理空間頁面的文字並未顯示這個數字。療效本身只來自每條件一盤阿拉伯芥（葉綠素約多 70%），沒有田間或番茄產量資料。",
"where":"entrepreneurship; model; geospatial-analysis",
"say_en":"We have not measured the farmer's yield gain in a field, so we cannot give a proven payback. Our two models disagree by a factor of 14, and a yield endpoint in the tomato pilot is what would settle it.",
"say_zh":"我們還沒有在田間量測農民的產量增益，所以不能給出經證實的回本期。兩個模型差了 14 倍，番茄試點中的產量終點指標才能解決這個問題。",
"dom":"entrepreneurship",
"id":"g048"
},
{
"issue_en":"The ownership model is not consistent. The financial model sells a package to a 1 ha farm at a fixed price of 2 times cost, 'the same for every farm'. The Math Model and Geospatial page conclude that, at the current spec, one fleet serves 2.5 ha and individual ownership is out of reach for farms under 2 ha, so a farmers' association must share it. The business canvas also lists 'tiered pricing models, cross-subsidies', which does not match 'same price for every farm'. Rental and per-fen service pricing are planned but no rental price is shown.",
"issue_zh":"所有權模式並不一致。財務模型以成本 2 倍的固定價格把套組賣給 1 公頃農場，「每個農場相同」；數學模型與地理空間頁面卻結論是，依目前規格一組設備服務 2.5 公頃，2 公頃以下農場無法個別擁有，必須由農會共享。商業模式圖又寫「分級定價、交叉補貼」，與「每個農場同價」不符。租賃與以分地計價的服務已列入規劃，但沒有顯示租賃價格。",
"where":"entrepreneurship; model; geospatial-analysis; human-practices",
"say_en":"Our base case prices a one-hectare package, but our own modeling says sharing through a farmers' association is more realistic. The plan includes group purchase and rental, and we have not yet rebuilt the numbers around them.",
"say_zh":"我們的基本情境是以一公頃套組定價，但自己的模型說透過農會共享更實際。計畫包含團購與租賃，但數字還沒有圍繞它們重建。",
"dom":"entrepreneurship",
"id":"g049"
},
{
"issue_en":"The organic story contradicts itself. Entrepreneurship, Laws and the FAQ say ReLEAF cannot be used on organic farms (Taiwan Organic Agriculture Promotion Act, Art. 3 and 15). Biomanufacturing says 'farmers want to say their crops are organic, and the bioreactor was built around that'. Geospatial says organic is the segment 'most predisposed to adopt' and a Nantou farmer wanted an organic-compatible product. Our biggest farmer interview round (over 30 farmers) was with organic farmers, yet they are not our market. Organic share is 3.47% on one page and about 3.7% on two others.",
"issue_zh":"有機的說法自相矛盾。創業頁、法規頁與 FAQ 說 ReLEAF 不能用在有機農場（有機農業促進法第 3、15 條）。生物製造頁卻說「農民希望能說他們的作物是有機的，生物反應器就是為此而建」。地理空間頁說有機是「最傾向採用」的族群，南投一位農民也想要有機相容的產品。我們最大的一輪農民訪談（30 位以上）訪問的是有機農民，但他們不是我們的市場。有機比例一頁寫 3.47%，另兩頁寫約 3.7%。",
"where":"entrepreneurship; laws-and-regulations; biomanufacturing; geospatial-analysis; human-practices",
"say_en":"Organic farms are not our market, because the law excludes products from engineered organisms even when they are cell-free. We learned from organic farmers early on, and we will make no organic claim without written approval.",
"say_zh":"有機農場不是我們的市場，因為法律連無細胞但由基改生物生產的產品也排除。我們早期從有機農民身上學到很多，但沒有書面核准，我們不會做任何有機宣稱。",
"dom":"entrepreneurship",
"id":"g050"
},
{
"issue_en":"The market-size numbers are loose. TAM is about 570 million farms and SAM 399 million is simply 70% of that, taken from a Bayer survey of farmers in eight countries, so it is a share of farmers, not a measured market. The page says SOM is hard to quantify and quotes 4.7 million organic farms, which are the farms ReLEAF excludes. 'Over 97% of farmers worldwide are conventional' is derived from 2.1% of agricultural land being organic, which is land, not farmers. The financial model covers Taiwan only, and the page itself says Taiwan's limited market is a reason to expand.",
"issue_zh":"市場規模的數字不夠紮實。TAM 約 5.7 億個農場，SAM 3.99 億只是其中 70%，來自 Bayer 對八國農民的調查，所以是農民比例，不是實測市場。頁面說 SOM 難以量化，並引用 470 萬個有機農場，而有機農場正是 ReLEAF 排除的對象。「全球超過 97% 的農民是慣行農民」是從 2.1% 的農地為有機推出來的，那是農地不是農民。財務模型只涵蓋台灣，頁面自己也說台灣市場有限是擴張的理由。",
"where":"entrepreneurship; laws-and-regulations",
"say_en":"The global figures are context, not a forecast. Our plan is built on Taiwan: about 226 paying hectares to break even, and we have not derived a proper obtainable market beyond that.",
"say_zh":"全球數字是背景，不是預測。我們的計畫以台灣為基礎：約 226 付費公頃損益兩平，除此之外我們沒有推導出完整的可獲得市場。",
"dom":"entrepreneurship",
"id":"g051"
},
{
"issue_en":"Evidence of demand and money is thin, and some numbers disagree. No investor, buyer, LOI or willingness-to-pay survey is on the wiki. Year 1 sells 20 paying hectares before field results exist, and at 70% of plan the investor loses money (IRR about -7%). The 'cheaper than competitors' claim compares NT$80 000-100 000 for one function with NT$175 400 for both, which is about the same. Product registration cost is not counted and tax is unconfirmed. The funding stage table adds up to about US$52 000-76 000 against a US$196 000 funding need. Pilot size is 20-50 devices, 5-10 systems or four farms depending on the section, and expansion dates differ between the text (Philippines from Oct 2030) and the Gantt chart (Philippine and Vietnam preparation from Oct 2028).",
"issue_zh":"需求與資金的證據薄弱，部分數字也不一致。維基上沒有任何投資人、買家、意向書或付費意願調查。第 1 年在田間結果出來前就賣出 20 付費公頃，而達計畫 70% 時投資人虧損（IRR 約 -7%）。「比競品便宜」的說法是把單一功能 NT$80 000-100 000 與兩種功能 NT$175 400 比較，其實差不多。產品登記成本未計入，稅率未確認。資金階段表加總約 52 000-76 000 美元，而資金需求為 196 000 美元。試點規模依章節為 20-50 台、5-10 套或四個農場；擴張日期文字（菲律賓自 2030 年 10 月）與甘特圖（菲律賓與越南準備自 2028 年 10 月）也不同。",
"where":"entrepreneurship; entrepreneurship-roadmap; human-practices",
"say_en":"We have advice and verbal support, not signed commitments, and our plan is a planning case. The pilot, with a final pilot size and dates, is where we will turn that into evidence.",
"say_zh":"我們有的是建議與口頭支持，不是簽署的承諾，計畫是規劃情境。試點（包含最終的試點規模與日期）才會把這些轉成證據。",
"dom":"entrepreneurship",
"id":"g052"
},
{
"issue_en":"The headline 'pre- and post-treatment rescue, co-treatment does not' (Results key result) is not what every run shows. Salt on agar fits (ACC deaminase set 9, BoPEP4), but agar heat trial 1 favoured pre and trial 2 post > co > pre, soil heat was pre > co > post, soil salt at 300 mM had post only +13%, and the CH Bio hydroponic pre-test grew best with co-treatment. The Results text also ranks heat as post, co, pre, while the Plants text for trial 1 says pre. The Geospatial page says every ACCD-treated group beat its control regardless of timing, which the Plants page contradicts (co-treatment, soil pre and co were not better).",
"issue_zh":"Results 的重點結論「預先與事後處理有效、同時處理無效」並非每次實驗都如此。瓊脂鹽害符合（ACC deaminase set 9、BoPEP4），但瓊脂熱害 trial 1 偏向預先處理、trial 2 是事後 > 同時 > 預先，土壤熱害是預先 > 同時 > 事後，土壤 300 mM 鹽害只有事後處理多 13%，CH Bio 水耕前測則是同時處理長得最好。Results 把熱害排序寫成事後、同時、預先，而 Plants 頁 trial 1 寫預先最好。地理分析頁說每個 ACCD 處理組不論時機都比對照好，Plants 頁並不支持這點（同時處理、土壤預先與同時處理並沒有更好）。",
"where":"results; plant; geospatial-analysis; hardware-hydroponics",
"say_en":"Say the headline holds for ACC deaminase and BoPEP4 on salt agar only, that the best timing was not consistent across systems, and that more independent replicates are what would settle it.",
"say_zh":"說明這個結論只適用於瓊脂鹽害下的 ACC deaminase 和 BoPEP4，各系統的最佳時機並不一致，需要更多獨立重複才能確定。",
"dom":"plant",
"id":"g053"
},
{
"issue_en":"Replication is described three ways. The Plants future-work text says the only runs with a repeat were ACC deaminase heat on agar and in soil, two trials each. Yet the same page lists set 5 (trials 1 and 2), set 7 (3 trials), BoPEP4 (2 trials) and ACC deaminase salt (2 trials). The plotted n is seedlings pooled per extraction (9, 25 or 40), with three technical wells, so the unit for the error bars is unclear. Soil fresh weight is one pot per condition, and the model section says each trehalose condition was a single plate.",
"issue_zh":"重複次數有三種說法。Plants 頁未來工作寫只有瓊脂與土壤的 ACC deaminase 熱害有重複、各兩次試驗；但同一頁列出 set 5（trial 1、2）、set 7（3 次）、BoPEP4（2 次）、ACC deaminase 鹽害（2 次）。圖上的 n 是每次萃取合併的幼苗數（9、25 或 40），再加三個技術重複孔，誤差線的單位不清楚。土壤鮮重每個處理只有一盆，模型段落也說每個 trehalose 條件只有一個平板。",
"where":"plant#Future work; plant#Stress protocols; plant#Set 7; plant#Dry lab collaborations; measurement",
"say_en":"Say plainly that most conditions were not independently replicated, that n counts seedlings per extraction, and that three independent replicates per condition is our stated next step.",
"say_zh":"直接說明多數條件沒有獨立重複，n 指的是每次萃取的幼苗數，每個條件做三次獨立重複是我們寫明的下一步。",
"dom":"plant",
"id":"g054"
},
{
"issue_en":"What the asterisks compare. The plant figures name the test — one-way ANOVA with Dunnett's — but the Measurement page says the trehalose and heat pretest charts had no significance testing and show three technical replicates. The Measurement text also says 0.5 mM trehalose still rescued best, while the Plants page says 1.0 mM was the best dose.",
"issue_zh":"星號在比什麼。植物圖有寫檢定方法——one-way ANOVA 搭配 Dunnett's——但 Measurement 頁說 trehalose 與熱逆境前測圖沒有做顯著性檢定，只顯示三個技術重複。Measurement 還寫 0.5 mM trehalose 效果最好，Plants 頁卻說 1.0 mM 是最佳劑量。",
"where":"plant#Set 4; measurement#Chlorophyll; results",
"say_en":"Say we show mean with SEM and P-value stars, that we will check the raw files rather than guess.",
"say_zh":"說明我們呈現平均值加 SEM 與 P 值星號，維基上看不出是哪種檢定，我們會查原始檔而不是猜。",
"regrounded":"2026-10-25",
"dom":"plant",
"id":"g055"
},
{
"issue_en":"Controls and source of the protectant. On agar the control for ACC deaminase, BoPEP4 and LEA14 was TB medium, not culture from a strain without the gene, yet the hydroponic work showed WB800 culture alone stunts plants and bleaches leaves. BoPEP4 co-treatment harm may partly be a culture effect. Results calls the sprayed material 'purified enzyme', but the Plants page says it was 0.22 µm-filtered culture, and the Experiments page says the purification sheet gave no result. The Plants page calls phase 3 'bioreactor-produced' without saying which batches came from the reactor.",
"issue_zh":"對照與保護劑來源。瓊脂上 ACC deaminase、BoPEP4、LEA14 的對照是 TB 培養基，不是不含該基因菌株的培養液，但水耕實驗顯示單獨的 WB800 菌液就會抑制植物、使葉片白化。BoPEP4 同時處理的傷害可能有一部分是菌液效應。Results 把噴灑的材料稱為「純化酵素」，但 Plants 頁說是 0.22 µm 過濾的培養液，Experiments 頁也說純化流程沒有產出結果。Plants 頁稱第三階段為「生物反應器產出」，卻沒說哪些批次真的來自反應器。",
"where":"plant#Set 9; plant#Hydroponics · buffer control; results#Agar-based salinity stress; experiments",
"say_en":"Say the agar controls were medium only, that hydroponics showed the culture itself can harm plants, and that the sprayed material was filtered culture supernatant, not purified enzyme.",
"say_zh":"說明瓊脂對照只有培養基，水耕顯示菌液本身可能傷害植物，噴灑的材料是過濾的培養上清液，不是純化酵素。",
"dom":"plant",
"id":"g056"
},
{
"issue_en":"Some headline numbers sit on the readout the page warns about. The 8.7-fold trehalose chlorophyll gain (set 6) is on the per-gram panel, while the page says per-gram values inflate when stress shrinks biomass. The '+3 cm root' in the same set sits oddly against the 100 mM control root of 11.00 mm (the 75 mM control is 34.77 mm), and set 4 gave about 35.8 mm for a 100 mM control. The first screening says 0.5 and 1 mM trehalose suppressed growth, yet set 4 reports a rescue at 1.0 mM.",
"issue_zh":"部分標題數字建立在頁面自己警告的指標上。trehalose 葉綠素 8.7 倍（set 6）是每克鮮重的圖，而頁面說逆境讓生物量縮小時每克數值會被放大。同一組「根多 3 cm」與 100 mM 對照根長 11.00 mm 對不太上（75 mM 對照為 34.77 mm），set 4 的 100 mM 對照則約 35.8 mm。初步篩選說 0.5 與 1 mM trehalose 抑制生長，set 4 卻在 1.0 mM 報告有拯救。",
"where":"plant#Set 6; plant#Set 4; plant#Initial screening; plant#Dry lab collaborations",
"say_en":"Say we trust total chlorophyll and root length more than the per-gram fold change, that sets differ in age and day of reading, and that trehalose was only a protocol sample.",
"say_zh":"說明我們比較相信總葉綠素與根長，而不是每克的倍率，各 set 的苗齡與讀值日不同，而且 trehalose 只是流程樣品。",
"dom":"plant",
"id":"g057"
},
{
"issue_en":"The mechanism was not measured in plants. No ethylene or ACC was measured, so the ACC deaminase story rests on literature plus growth readouts. LEA14 is aimed at drought and salt damage to proteins but was never tested under drought, nor under heat on the Plants page, although the heat protocol list shows LEA14 and BoPEP4 sets. The Description calls LEA14 and BoPEP4 'parts for future integration', while the plant pages test them as secreted protectants. BoPEP4 inhibited unstressed plants.",
"issue_zh":"機制沒有在植物上量測。沒有量乙烯或 ACC，ACC deaminase 的說法靠文獻加生長指標。LEA14 針對乾旱與鹽對蛋白質的傷害，卻從未在乾旱下測試，Plants 頁也沒有它的熱逆境數據，雖然熱逆境的清單列出了 LEA14 與 BoPEP4 的實驗。Description 說 LEA14 和 BoPEP4 是「供未來整合的零件」，但植物頁已把它們當分泌的保護劑測試。BoPEP4 也抑制了未受逆境的植株。",
"where":"plant#Stress protocols; description#Our solution; results",
"say_en":"Say we measured growth and chlorophyll, not ethylene, that LEA14 was only tested under salt, and that the circuit currently carries ACC deaminase while the other two were built as parts.",
"say_zh":"說明我們量的是生長與葉綠素，不是乙烯；LEA14 只在鹽害下測過；目前電路帶的是 ACC deaminase，另外兩個是先建好的零件。",
"dom":"plant",
"id":"g058"
},
{
"issue_en":"Protocol numbers disagree between pages. Hydroponic BoPEP4 plants are 15 days old with 4 days of heat on the Plants page, but 11 days old and 5 days of heat (and '4 days' again in the same text) on Results. The LEA14 set is read on day 17 on Plants and day 8 on Results. Heat priming is 5 days in most places but 3 days in the CH Bio heat text. Stratification is 2 days in the first pretests and 4 days later. Seedlings per plate are 10 or 12. One spray set is 1.67 mL and another 0.536 mL. Set 7 has 'trial 2' in the text and 'trial 3' in the table. Results says horizontal agar was the platform while root length needs vertical plates.",
"issue_zh":"各頁的實驗參數不一致。水耕 BoPEP4 植株在 Plants 頁是 15 天大、熱害 4 天，Results 頁卻是 11 天大、熱害 5 天（同段又寫 4 天）。LEA14 實驗在 Plants 頁第 17 天讀值，Results 頁寫第 8 天。熱 priming 多數寫 5 天，CH Bio 熱害段落寫 3 天。春化處理最初前測是 2 天，後來是 4 天。每盤幼苗數是 10 或 12。一組噴灑是 1.67 mL，另一組是 0.536 mL。set 7 文字寫 trial 2，表格寫 trial 3。Results 說平台是水平瓊脂，但根長需要直立盤。",
"where":"plant; results; hardware-hydroponics",
"say_en":"Say the protocol was refined across sets, that different sets used different ages and spray volumes, and that the raw notebook is the reference for any single run.",
"say_zh":"說明流程在各 set 之間逐步修正，不同 set 的苗齡與噴灑量不同，要查單次實驗應以原始筆記為準。",
"dom":"plant",
"id":"g059"
},
{
"issue_en":"Transfer from the lab plant to a field crop is untested. Only Arabidopsis was grown; the dose model uses a modeled rice canopy factor of 2.44 (range 1.68 to 3.52), the business target is tomato, and the field motivation is rice night warming (about 10% yield per 1 °C), which a 37 °C incubator does not reproduce. The model's own stress index finds heat adds nothing for rice, yet the wet lab runs a heat program. The release rule is counted from waterlogging while payback is priced on salinity. Protectant was applied by hand, not through the bioreactor, and soil data are preliminary.",
"issue_zh":"從實驗室植物推到田間作物沒有被測試。只種了阿拉伯芥；劑量模型使用模型估計的水稻冠層係數 2.44（範圍 1.68 至 3.52），商業目標是番茄，田間動機是水稻夜間升溫（每升高 1 °C 約減產 10%），而 37 °C 培養箱無法重現。模型自己的壓力指數發現熱對水稻沒有額外貢獻，但濕實驗卻做了熱逆境。釋放規則以淹水計算，回本卻以鹽害定價。保護劑是手動施用，不是經過生物反應器，土壤數據也只是初步。",
"where":"plant#Dry lab collaborations; geospatial-analysis; model; description#Our solution",
"say_en":"Say this is a proof of concept on a lab plant, that no crop was grown, that the field numbers are modeled projections, and that testing across crops and stages is the stated next step.",
"say_zh":"說明這是實驗室植物的概念驗證，沒有種過任何作物，田間數字是模型推估，跨作物與生長階段測試是明確寫出的下一步。",
"dom":"plant",
"id":"g060"
},
{
"issue_en":"Sequencing claims disagree. Level 2 has never been sequenced end to end, yet Results says constructs were verified by colony PCR and Sanger, Parts says seven Level 1 parts are sequence-confirmed, Biomanufacturing says nine, Development says Level 2 sequencing had not returned, and the Engineering Level 2 text says assembly followed 'sequencing confirmation'.",
"issue_zh":"各頁對定序的說法不一致。Level 2 從未全長定序，但 Results 說構築經菌落 PCR 與 Sanger 驗證、Parts 說七個 Level 1 零件已定序、Biomanufacturing 說九個、Development 說 Level 2 定序尚未回來，Engineering 的 Level 2 文字又說組裝後有「定序確認」。",
"where":"engineering; parts; results; biomanufacturing; development",
"say_en":"Level 0 and Level 1 clones were checked by colony PCR and Sanger. The Level 2 plasmid was checked by three junction PCRs in three clones and by two digests, so order and length are confirmed, but the 10 kb in between is not sequenced.",
"say_zh":"Level 0 和 Level 1 選殖株用菌落 PCR 加 Sanger 檢查。Level 2 質體用三個接點 PCR（三株）與兩種酵素切割檢查，所以順序與長度確認了，但中間的 10 kb 沒有定序。",
"dom":"wetlab",
"id":"g061"
},
{
"issue_en":"The 'ACCD about three times the other two' headline is not stable. Fig 13 gives about 16 vs 6 µg/mL for AcdS 2.1; the construct table gives about 12 to 13 vs 6 for wild type (twofold) and 8 to 9.5 for AcdS 2.1 (about 1.5-fold); the reactor gives 10.7 vs 5.8 vs 6.2. The plasmid-free WB800 control reads 1.3 in some runs but 4.6 to 5.5 in the construct table, similar to LEA14 and BoPep4, and every table value exceeds the 3 µg/mL top standard.",
"issue_zh":"「ACCD 約為另外兩者的三倍」這個標題不穩定。Fig 13 的 AcdS 2.1 約 16 對 6 µg/mL；構築表中野生型約 12 至 13 對 6（兩倍），AcdS 2.1 為 8 至 9.5（約 1.5 倍）；反應器為 10.7、5.8、6.2。不含質體的 WB800 對照在有些實驗是 1.3，在構築表卻是 4.6 至 5.5，與 LEA14 和 BoPep4 相近，而且表中每個數值都超過 3 µg/mL 的最高標準品。",
"where":"results; engineering; development",
"say_en":"ACC deaminase is clearly the highest, about two to three times the others depending on the experiment. LEA14 and BoPep4 are close to the host background in the comparison table, so I would not rank them against each other.",
"say_zh":"ACC 去胺酶明顯最高，依實驗不同約為其他的兩到三倍。在比較表中 LEA14 和 BoPep4 接近宿主背景，所以我不會替它們互相排名。",
"dom":"wetlab",
"id":"g062"
},
{
"issue_en":"Light control is claimed more strongly than the data show. Results key results say green light switches ACCD on, but ELISA protein is flat (about 12 to 13 µg/mL in every condition), DNPH reverses between 13 h and 16 h, the 12 h pre-culture text says red was higher at 3 h and 8 h while the figure text says green was higher, the dark baseline is already about 3 µg/mL, and Development gives p = 0.72 for colour. Red LEDs are 640 nm (630 nm in one section) against about 672 nm needed. The 520 nm on and 660 nm off figures are not on the wiki.",
"issue_zh":"光控的說法比數據強。Results 重點說綠光打開 ACCD，但 ELISA 蛋白是持平的（各條件約 12 至 13 µg/mL）、DNPH 在 13 與 16 小時反轉、12 小時預培養的文字說紅光在 3 與 8 小時較高而圖說寫綠光較高、暗處基線已有約 3 µg/mL、Development 給出顏色 p = 0.72。紅光 LED 是 640 nm（一節寫 630 nm），所需約 672 nm。wiki 上沒有 520 nm 開、660 nm 關這兩個數字。",
"where":"results; development; engineering",
"say_en":"We built the circuit and saw green responses in some readings, but we do not yet have a clean, replicated on and off. The light plate also has spill between wells and mismatched red LEDs, which we have not tested as causes.",
"say_zh":"我們建好了電路，也在部分讀值看到綠光反應，但還沒有乾淨、有重複的開與關。光盤也有孔間漏光與紅光 LED 不匹配的問題，這些原因我們還沒測試。",
"dom":"wetlab",
"id":"g063"
},
{
"issue_en":"Which Level 2 clone was tested is unclear. Three-junction evidence is for ACDI (PlepA photoreceptor); the light-plate blots used ABDI (PliaG), whose clone V7 was only checked one junction at a time and which could not be recovered from glycerol. Later work used ABDQ (SamyQ-AcdS 2.1), for which the wiki shows a single 632 bp colony PCR. Parts says the light-sensing unit is deposited behind PliaG, and the Engineering device table lists PliaG for both devices.",
"issue_zh":"測試的是哪個 Level 2 選殖株並不清楚。三個接點的證據是 ACDI（PlepA 光受體）；光盤墨點用的是 ABDI（PliaG），其選殖株 V7 只逐一檢查過單一接點，也無法從甘油菌種復活。後期用 ABDQ（SamyQ-AcdS 2.1），wiki 只呈現一張 632 bp 的菌落 PCR。Parts 說光感測單元放在 PliaG 後面，Engineering 的裝置表兩個裝置都列 PliaG。",
"where":"engineering; results; parts",
"say_en":"The strongest junction evidence is for the PlepA version, ACDI. The light-plate experiments used the PliaG strains, ABDI and later ABDQ, which have less cloning evidence on the wiki. I would say that and not claim they are equivalent.",
"say_zh":"接點證據最完整的是 PlepA 版本 ACDI。光盤實驗用的是 PliaG 菌株，ABDI 與後來的 ABDQ，wiki 上的選殖證據比較少。我會直接說明，不宣稱它們等價。",
"dom":"wetlab",
"id":"g064"
},
{
"issue_en":"The 72-hour activity claim is not consistently supported. Results says shell-side ACCD is active to 72 h with specific activity 6 to 8 U/mg; Development says the DNPH assay was not carried past 36 h; Engineering says the 48 and 72 h activity points are only on the team's chart. Every DNPH point is a single well, the plasmid-free host already gives DNPH signal (about 32 vs 39 with PLP), and the 1 h ELISA signal is probably carry-over from the inoculum.",
"issue_zh":"72 小時活性的說法沒有一致的支持。Results 說殼側 ACCD 到 72 小時有活性，比活性 6 至 8 U/mg；Development 說 DNPH 只做到 36 小時；Engineering 說 48 與 72 小時的活性點只出現在團隊的圖上。每個 DNPH 點都是單一孔，不含質體的宿主本身就有 DNPH 訊號（約 32，對照加 PLP 的 39），1 小時的 ELISA 訊號也可能是接種物帶來的。",
"where":"results; development; engineering",
"say_en":"Protein in the shell is above control for all nine samples to 72 hours. Activity is shown with confidence to 36 hours; the later points are on our chart but are not in the numbers we quote. Everything is single-well.",
"say_zh":"殼側蛋白在九個樣本直到 72 小時都高於對照。活性有把握的是到 36 小時；之後的點在我們的圖上，但不在我們引用的數字裡。全部都是單一孔。",
"dom":"wetlab",
"id":"g065"
},
{
"issue_en":"The BoPep4 His tag position conflicts. Protein Design says the tag must go on the N-terminus because a C-terminal His tag abolishes the key salt bridge and sends N-His constructs; the built cassettes (SamyQ-BoPep4-Histag, Parts, Results, Contribution) are described with a C-terminal tag; Engineering says its own records give C-terminal in the design text, N-terminal in the construct table, and has primers for both orientations. No activity assay exists for the BoPep4 variant panel.",
"issue_zh":"BoPep4 的 His 標籤位置互相矛盾。Protein Design 說標籤必須放 N 端，因為 C 端 His 會破壞關鍵鹽橋，並送出 N-His 構築；建好的卡匣（SamyQ-BoPep4-Histag，見 Parts、Results、Contribution）卻寫成 C 端標籤；Engineering 說自己的紀錄設計文字寫 C 端、構築表寫 N 端，引子兩種方向都有。BoPep4 變體組也沒有活性檢測。",
"where":"protein-design; parts; engineering; results",
"say_en":"The simulation says N-terminal, and our records are not consistent on what was built. Our ELISA detects the tag either way, so we know the protein is there, not whether the peptide is active. The variant panel's activity assay has not been run.",
"say_zh":"模擬建議 N 端，而我們的紀錄對實際建了什麼並不一致。ELISA 不論標籤在哪端都能偵測，所以我們知道蛋白存在，但不知道胜肽是否有活性。變體組的活性檢測尚未進行。",
"dom":"wetlab",
"id":"g066"
},
{
"issue_en":"The case for WB800 over 168 is not a controlled comparison, and strain coverage is inconsistent. The reactor runs compare 168 with Csn-AcdS (cycle 5) against WB800 with SamyQ-AcdS 2.1 (cycle 6), so strain, signal peptide and codon usage all changed; 168 and WB800 were never compared in the reactor. Biomanufacturing says WB800 took the loop twice in October, Engineering says three times. Results says all constructs were transformed into WB800 but the WB800 electroporation table has no LEA14 cassette, and it includes an 'AcdS 2.2' that is not among the registered or ordered AcdS variants.",
"issue_zh":"WB800 優於 168 的論據不是對照比較，菌株涵蓋範圍也不一致。反應器比較的是 168 搭 Csn-AcdS（第 5 輪）與 WB800 搭 SamyQ-AcdS 2.1（第 6 輪），菌株、訊號肽、密碼子都變了；168 與 WB800 從未在反應器中直接比較。Biomanufacturing 說 WB800 在 10 月上線兩次，Engineering 說三次。Results 說所有構築都已轉入 WB800，但 WB800 電穿孔表沒有 LEA14 卡匣，且出現未列入登錄或訂購清單的「AcdS 2.2」。",
"where":"engineering; results; biomanufacturing; parts",
"say_en":"168 gave barely detectable ACC deaminase and WB800 gave measurable protein, and eight protease deletions are a sound reason. But the two runs differ in more than the strain, so I would call it a well-motivated switch, not a proven fold-change.",
"say_zh":"168 幾乎偵測不到 ACC 去胺酶，WB800 則有可量測的蛋白，而且刪除八種蛋白酶是合理的理由。但兩次運轉不只菌株不同，所以我會說這是有道理的轉換，不是已證實的倍數提升。",
"dom":"wetlab",
"id":"g067"
},
{
"issue_en":"Results says the plant assays used 'purified enzyme', but the Experiments page says the purification and dialysis, large-scale extraction and Bradford sheets produced no result on the wiki, and the hydroponic trials were done with dilutions of culture against a plasmid-free WB800 culture. The wiki does not state which BoPep4 or ACCD construct was applied to plants, and gives no mass dose per plant.",
"issue_zh":"Results 說植物實驗用了「純化酵素」，但 Experiments 頁說純化與透析、大量萃取與 Bradford 三份流程在 wiki 上沒有結果，水耕實驗用的是培養液稀釋，對照是不含質體的 WB800 培養液。wiki 沒有說明施用在植物上的是哪個 BoPep4 或 ACCD 構築，也沒有每株植物的質量劑量。",
"where":"results; experiments",
"say_en":"We applied filtered culture supernatant at stated dilutions, such as 1 in 40, with a plasmid-free WB800 culture as the control. We did not purify and dose by mass, so I cannot give micrograms per plant.",
"say_zh":"我們施用的是過濾後的培養上清液，以標示的稀釋倍數（例如 1/40）使用，並以不含質體的 WB800 培養液作對照。我們沒有純化後依質量給劑量，所以給不出每株植物的微克數。",
"dom":"wetlab",
"id":"g068"
},
{
"issue_en":"Payback is in dispute by a factor of 14 between the Math Model and Geospatial Analysis. Math Model Block 1 attributes US$138 per hectare per crop of weather loss (68 years at full efficacy); it quotes Geospatial as US$1931 per hectare per crop (4.9 years). Earlier team notes said about 8.2 times; the current wiki text says 14. The Geospatial Analysis page itself does not show the US$1931 figure or its chlorophyll-to-yield calculation.",
"issue_zh":"Math Model 與 Geospatial Analysis 的回收期相差 14 倍。Math Model 區塊 1 估計每公頃每期天氣損失 US$138（效能為 1 時 68 年）；它引用 Geospatial 為每公頃每期 US$1931（4.9 年）。團隊較早的筆記說約 8.2 倍，目前 wiki 文字寫 14 倍。Geospatial Analysis 頁本身沒有呈現 US$1931 這個數字，也沒有呈現葉綠素換算成產量的計算。",
"where":"model#Payback and fleet utilization; geospatial-analysis",
"say_en":"Use the wiki's number, 14 times, and say the two pages are not yet estimates of the same hectare: different stress definitions and a chlorophyll step versus a yield step. Do not defend either figure. What would settle it is a yield endpoint, one stress definition, and agreement on one or two protected crops a year.",
"say_zh":"用 wiki 上的數字，14 倍，並說明兩頁還不是對同一公頃的估計：壓力定義不同，一個用葉綠素、一個用產量。不要替任何一個數字辯護。要解決它需要產量終點、統一的壓力定義，以及對每年保護一次還是兩次達成共識。",
"dom":"drylab",
"id":"g069"
},
{
"issue_en":"An 86.3% / 25.3% figure that the team has used has no traceable source. I searched the text of all pages and found neither number in prose or tables.",
"issue_zh":"團隊用過的 86.3% / 25.3% 這組數字查不到來源。我搜尋了所有頁面的文字，在段落與表格中都找不到這兩個數字。",
"where":"not found on any page (searched all live txt files)",
"say_en":"Do not quote it. If a judge raises it, say we cannot trace it to a measurement on our wiki and we do not rely on it, then offer the numbers we can source: 32% less county error, 0.040 vs 0.067, 26.7 h lead time.",
"say_zh":"不要引用。如果評審提到，就說我們無法把它追溯到 wiki 上的某個量測，所以不依賴它，然後改講有來源的數字：縣市誤差少 32%、0.040 對 0.067、提前 26.7 小時。",
"dom":"drylab",
"id":"g070"
},
{
"issue_en":"The forecast win is smaller than the headline. At 2 h on run 7 the Kalman filter ties persistence at 0.070 (0% better). It forecasts the photometer reading, not biomass, because most of the run is above the linear range. Development says the models beat persistence 'out to 12 h' without naming the run.",
"issue_zh":"預測的優勢比標題小。在 run 7 的 2 小時，Kalman 與 persistence 同為 0.070（沒有改善）。它預測的是 photometer 讀值，不是生物量，因為大部分時間超出線性範圍。Development 頁寫「到 12 小時都勝過 persistence」，但沒有指明是哪一次實驗。",
"where":"software#Batch forecasting; development#Detect, Forecast & Activate",
"say_en":"Say 41% at 2 h on the 102-hour run, 24% at 8 and 12 h on a repeat, and a tie at 2 h on the repeat. Say plainly that we forecast the photometer reading and only two runs were scored.",
"say_zh":"說 102 小時實驗在 2 小時好 41%，重複實驗在 8 與 12 小時好 24%，重複實驗在 2 小時打平。並明說我們預測的是 photometer 讀值，而且只有兩次實驗計分。",
"dom":"drylab",
"id":"g071"
},
{
"issue_en":"The leaf sensor offset is quoted three ways. Software text and Development say it reads 1.2 to 1.9 C warm. The same page's table shows the room site at +0.47 ± 0.46 C (runs -0.09 to +0.97). Results says -0.2 to +1.8 C. The wetness channel was never wetted.",
"issue_zh":"葉片感測器偏差有三種說法。Software 文字與 Development 寫偏高 1.2 到 1.9 °C；同頁表格顯示 room 地點為 +0.47 ± 0.46 °C（各次 -0.09 到 +0.97）；Results 寫 -0.2 到 +1.8 °C。濕度通道從未弄濕。",
"where":"software#The leaf and air sensors on the bench; results; development",
"say_en":"Say the offset changes by site, from about 0.5 to 1.7 degrees, so one fixed correction does not work. It is bench-only, with no leaf, and wetness is untested. Do not recite 1.2 to 1.9 as the range.",
"say_zh":"說偏差隨地點改變，約 0.5 到 1.7 度，所以不能用單一固定校正。它只在桌上測試、沒有葉片，濕度也未測試。不要把 1.2 到 1.9 當成範圍背出來。",
"dom":"drylab",
"id":"g072"
},
{
"issue_en":"Tag position in what was built does not match the protein-design story. The design says the BoPEP4 tag must be on the N-terminus because a C-terminal tag removes the salt bridge. But Parts lists every Level 0 part with a C-terminal His tag, the 14 October cloning check says the June and July cassettes and every LEA14 and ACC deaminase construct carry a C-terminal 6xHis, and the Protein Design page calls the LEA14 constructs N-His. The 9-23 peptide is not in Parts; 15-23 is. The BoPep4 ELISA (about 6 ug/mL) was on the C-His cassettes.",
"issue_zh":"實際做出來的標籤位置與蛋白質設計的敘述不符。設計說 BoPEP4 標籤必須在 N 端，因為 C 端標籤會破壞鹽橋。但 Parts 把所有 Level 0 零件都列為 C 端 His 標籤；10 月 14 日的選殖核對說 6、7 月卡匣以及所有 LEA14 與 ACC deaminase 構築都是 C 端 6xHis；Protein Design 頁卻說 LEA14 構築是 N-His。9-23 肽不在 Parts 中，15-23 才在。BoPep4 的 ELISA（約 6 µg/mL）是用 C-His 卡匣量的。",
"where":"protein-design; drylab-notebook#Saturday 10 October; parts",
"say_en":"Say the tag move applies to the BoPEP4 order after 16 August, and that the constructs we have measured so far still carry the C-terminal tag. The cleavage and secretion data are about production, not about receptor binding. Do not say every construct is N-terminal.",
"say_zh":"說標籤移到 N 端只適用於 8 月 16 日之後的 BoPEP4 訂單，目前量過的構築仍是 C 端標籤。分泌與切割的數據只代表生產，不代表受體結合。不要說所有構築都是 N 端。",
"dom":"drylab",
"id":"g073"
},
{
"issue_en":"Very little of the protein design is tested outside the computer. No binding assay has been run, MD was one 30 ns seed per system on BoPEP4 only, neither LEA14 truncation is sequence-verified, the 26 September notebook says none of it is yet applied to a plant, and the Methodology page states that numerical values inside its figures are illustrative of the expected shape, not measurements from a completed run.",
"issue_zh":"蛋白質設計在電腦之外幾乎沒有被測試。沒有做結合實驗；MD 只做 BoPEP4，每個系統單一種 30 ns 種子；兩個 LEA14 截短版都沒有定序確認；9 月 26 日的筆記說還沒有任何設計用在植物上；Methodology 頁也說明圖中的數值是預期形狀的示意，不是完成實驗的量測。",
"where":"protein-design-methodology; md-simulations; drylab-notebook",
"say_en":"Say the protein design chose what to build and ruled things out, and that the bench has to decide whether any of it works. Name the next tests: truncation secretion assay, full-length K7A, PLP occupancy, W112A. Say which figure values are illustrative if asked.",
"say_zh":"說蛋白質設計決定了要做什麼、排除了哪些，而是否有效要由實驗桌決定。講出下一步實驗：截短版分泌實驗、全長 K7A、PLP 占有率、W112A。被問到時說明哪些圖的數值只是示意。",
"dom":"drylab",
"id":"g074"
},
{
"issue_en":"K18R is described two ways. Protein Design and Sprints say it was withdrawn because the Lys18 contact held only 53.7% of frames. The MD page says this does not rule out K18R and it remains untested. Separately, the MD text says the tagged salt bridge was missing in every frame while its table shows 2.4%, which the footnote explains as a neutral amide oxygen.",
"issue_zh":"K18R 有兩種描述。Protein Design 與 Sprints 說因為 Lys18 接觸只占 53.7% 的畫面而撤回；MD 頁則說這不排除 K18R，仍未測試。另外，MD 文字說帶標籤構築的鹽橋在每個畫面都不存在，但表格顯示 2.4%，註腳解釋那是一個中性醯胺氧。",
"where":"protein-design-molecular-dynamics; protein-design-sprints#6 K18R; protein-design",
"say_en":"Say K18R was not ordered because its rationale weakened, and a dedicated simulation would be needed to say more. For the tag, say the salt bridge is absent and the 2.4% is a different atom.",
"say_zh":"說 K18R 因為理由變弱而沒有訂購，要多說什麼需要專門的模擬。關於標籤，說鹽橋不存在，2.4% 是另一個原子。",
"dom":"drylab",
"id":"g075"
},
{
"issue_en":"Several geospatial claims are thinner than they look. The 10% per degree night-heat loss is from the Philippines in 2004. The volatility index weights and full term list are not published. The soil class with the highest volatility (sandy loam) is also the one the geomorphology heuristic assigns most broadly. The Math Model prices a rice hectare, while Geospatial says tomatoes are a better target and rice is overproduced. The notebook says 358 townships and the other pages say 346 demand nodes.",
"issue_zh":"有幾項地理空間的說法比看起來薄弱。夜間高溫每度減產 10% 來自 2004 年的菲律賓。波動指數的權重與完整項目沒有公布。波動最高的土壤類型（砂質壤土）也是地貌分類法指派最廣的類型。Math Model 以稻田計價，但 Geospatial 認為番茄是更好的目標、稻米生產過剩。筆記寫 358 個鄉鎮，其他頁寫 346 個需求節點。",
"where":"geospatial-analysis; model; drylab-notebook#Saturday 26 September",
"say_en":"Say the maps show where small farms and unstable weather overlap, not a measured Taiwan yield loss. The first crop is still open, the index recipe is incomplete on the page, and 346 is the number of demand nodes in the fertilizer model.",
"say_zh":"說地圖顯示的是小農與不穩定天氣重疊的地方，不是量測到的台灣減產。第一個作物還沒定，指數配方在頁面上不完整，346 是肥料模型的需求節點數。",
"dom":"drylab",
"id":"g076"
},
{
"issue_en":"Run counts and instrument ranges differ between pages. Digital Twin lists seven bioreactor runs and a 434-hour run 3; Development and the Contribution page say six runs with 102.4 h the longest. The photometer is quoted as slope 1.018 (R2 0.995) to OD 1.2 on Digital Twin and 0.995 to OD 2.5 on Development; the first is TiO2 and the second silica.",
"issue_zh":"各頁的實驗次數與儀器範圍不一致。Digital Twin 列出七次生物反應器實驗與 434 小時的 run 3；Development 與 Contribution 寫六次、最長 102.4 小時。photometer 在 Digital Twin 寫斜率 1.018（R2 0.995）到 OD 1.2，在 Development 寫 0.995 到 OD 2.5；前者是 TiO2，後者是二氧化矽。",
"where":"software#Every run so far; development#Monitor; contribution",
"say_en":"Say seven runs, with the 434-hour one on wild type at 22 C in the first 243 usable hours. For the photometer, name the standard: TiO2 tracks to OD 1.2, silica to OD 2.5. Defer instrument detail to the hardware seat.",
"say_zh":"說七次實驗，其中 434 小時那次是 22 °C 的野生型，前 243 小時可用。photometer 要說明用的標準：TiO2 到 OD 1.2，二氧化矽到 OD 2.5。儀器細節交給硬體組員。",
"dom":"drylab",
"id":"g077"
}
];
