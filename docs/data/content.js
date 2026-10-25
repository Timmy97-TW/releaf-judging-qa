/* Hand-written bilingual content: site chrome, coaching rules, seats, delivery craft,
 * the five-minute opening, and the day sheet. Project facts live in the generated files. */
var CONTENT = {

tiles: [
  { href: 'facts.html', title_en: 'Fact Foundation', title_zh: '事實庫',
    blurb_en: 'Every number your project can be asked about, with the wiki page it came from. Learn the ten that carry the session.',
    blurb_zh: '所有可能被問到的數字，以及它們來自哪一頁 wiki。先把撐起整場的十個記熟。' },
  { href: 'terms.html', title_en: 'Term Trainer', title_zh: '術語訓練',
    blurb_en: 'Search any term from DNPH to hollow fiber. Three keywords first, then one compact definition. The quiz box keeps turning.',
    blurb_zh: '從 DNPH 到中空纖維，任何術語都能查。先三個關鍵字，再一句精簡定義。測驗盒會不斷換題。' },
  { href: 'bank.html', title_en: 'Question Bank', title_zh: '題庫',
    blurb_en: 'All 510 questions in one searchable place, tagged by area and by kind. Three keywords first, the full answer folded away, and the figures a judge could point at while asking. Bring your own questions in through the shared sheet.',
    blurb_zh: '全部 510 題集中在一個可搜尋的地方，依領域與題型標上標籤。先給三個關鍵字，完整答案收起來，再附上評審問這題時可能指著的圖。你自己的問題可以透過共用表單加進來。' },
  { href: 'registry.html', title_en: 'Registry Room', title_zh: 'Registry 會場',
    blurb_en: 'Forty-one parts, four assembly levels, one author. Click any part and see its lineage, every figure on its page, and the question a judge would ask standing in front of it.',
    blurb_zh: '四十一個 parts、四個組裝層級、一位作者。點任一個 part，就看到它的家族線、它頁面上的每張圖，以及評審站在它面前會問的那個問題。' },
  { href: 'mock.html', title_en: 'Mock Judging Room', title_zh: '模擬會場',
    blurb_en: 'A panel generated on the spot, a question from someone you cannot read, ninety seconds, and points for calling the right seat. Five questions, or ten. It ends in a card you can post.',
    blurb_zh: '現場生成的評審、一個你看不出底細的人提問、九十秒，指對位置就有分。五題或十題一局，結束時給你一張可以貼出去的成績卡。' },
  { href: 'figures.html', title_en: 'Figure Room', title_zh: '看圖會場',
    blurb_en: '162 figures, ten to a run: your wiki, and now every picture on your Registry part pages. Either say what one is out loud, or pick it out of four. The same four judges, pointing at a picture.',
    blurb_zh: '162 張圖，一局十題：來自你們的 wiki，現在還加上 Registry part 頁面上的每一張圖。可以直接說出它是什麼，也可以四選一。一樣是那四位評審，只是這次他們指著一張圖。' },
  { href: 'seats.html', title_en: 'Mic Map', title_zh: '麥克風地圖',
    blurb_en: 'Seven seats, seven territories, and a rule for every question that belongs to two people at once.',
    blurb_zh: '七個位置、七塊領域，以及每一題「兩個人都沾到」時的歸屬規則。' },
  { href: 'delivery.html', title_en: 'Delivery Lab', title_zh: '答題技巧',
    blurb_en: 'How to open, how to hand over, what to say when you do not know, and the eleven habits that cost teams points.',
    blurb_zh: '如何開口、如何交棒、不知道時怎麼說，以及十一個讓隊伍失分的習慣。' },
  { href: 'timeline.html', title_en: 'The Year in Evidence', title_zh: '一年的證據',
    blurb_en: 'The dated results in the order they happened, with the figure each one produced. Learn the month, not the date.',
    blurb_zh: '有日期的結果，依發生順序排列，並附上當時產出的圖。記月份，不要記日期。' },
  { href: 'facts.html#gaps', title_en: 'The Honest List', title_zh: '誠實清單',
    blurb_en: 'The places where your own pages disagree, or claim more than the data shows. Judges find these. Get there first.',
    blurb_zh: '你們頁面彼此矛盾、或說得比數據更多的地方。評審會找到，你們要先找到。' }
],

rules: [
  { head_en: 'Answer the question that was asked, in the first sentence.',
    head_zh: '第一句話就回答被問的問題。',
    body_en: 'Judges score whether you can answer, not whether you can talk. Say the number or the name first, then the evidence. If the first sentence is background, you have already lost half the answer.',
    body_zh: '評審評的是你能不能回答，不是你能不能講話。先說數字或名稱，再說證據。如果第一句還在講背景，這個回答就已經少了一半。' },
  { head_en: 'Say what you did, not what you would do.',
    head_zh: '說你做過什麼，而不是你會做什麼。',
    body_en: 'The future-plans card is worth almost nothing on its own, and reaching for it reads as nothing to show. Even when the honest answer is no, you can name the nearest thing you actually did measure, build or ask someone.',
    body_zh: '「未來計畫」這張卡單獨打出來幾乎沒有分數，而且會被聽成「沒有東西可以展示」。就算誠實的答案是「沒有」，你也可以說出最接近的、你真的量過、做過或問過的那件事。' },
  { head_en: 'One voice per question, chosen in under two seconds.',
    head_zh: '一題一個人回答，兩秒內決定。',
    body_en: 'Four students stepping forward at once, or a silent look around, both read as a team that does not know its own project. The Mic Map exists so that pause never happens.',
    body_zh: '四個人同時上前，或是互看一圈沒人動，兩種都會被看成「這組不熟自己的專題」。麥克風地圖就是為了讓那個停頓不要發生。' },
  { head_en: 'Know your three weakest claims better than your three best.',
    head_zh: '最弱的三個論點要比最強的三個更熟。',
    body_en: 'The panel has read the wiki. They will go where the evidence is thin, and a student who gets there first, names the limit and still shows what the data does support, scores higher than one who is caught.',
    body_zh: '評審讀過 wiki，他們會往證據薄弱的地方去。先一步指出限制、同時說清楚數據確實支持什麼的學生，分數高於被抓到才承認的學生。' },
  { head_en: 'Twenty minutes is about fourteen questions. Make each answer short.',
    head_zh: '二十分鐘大約十四題。每個回答都要短。',
    body_en: 'Sixty to ninety seconds is a full answer. Three minutes is a speech, and it costs the panel two questions they wanted to ask, which they will remember as a team that did not listen.',
    body_zh: '六十到九十秒就是一個完整的回答。講三分鐘是演講，會讓評審少問兩題，而他們會記成「這組不聽人說話」。' }
],

seats: [
  { id: 'plant', n: 1, name_en: 'Plants', name_zh: '植物',
    owns_en: 'Plant experiments, stress treatments, root and chlorophyll readouts, agar, soil and hydroponic systems, ethylene biology, what the protectant does to a plant.',
    owns_zh: '植物實驗、逆境處理、根長與葉綠素等指標、洋菜、土耕與水耕系統、乙烯生理，以及保護蛋白對植物做了什麼。',
    not_en: 'Not the protein that was produced, not the rig that produced it.',
    not_zh: '不負責蛋白本身怎麼生產，也不負責生產它的機器。',
    pages: ['plant', 'experiments', 'hardware-hydroponics'] },
  { id: 'wet1', n: 2, name_en: 'Cloning &amp; Circuit', name_zh: '選殖與線路',
    owns_en: 'Construct design, Golden Gate assembly, backbones, promoters, the CcaSR light circuit, strains, transformation, sequencing status, Registry parts.',
    owns_zh: '構築設計、Golden Gate 組裝、骨架、啟動子、CcaSR 光感應線路、菌株、轉形、定序狀態、Registry parts。',
    not_en: 'Not expression yields and not assay numbers; hand those to Seat 3.',
    not_zh: '不負責表現量與檢測數據，那些交給第 3 位。',
    pages: ['engineering', 'parts', 'description'] },
  { id: 'wet2', n: 3, name_en: 'Protein &amp; Assays', name_zh: '蛋白與檢測',
    owns_en: 'Expression and secretion, WB800 and proteases, SDS-PAGE and Western blots, ELISA, the DNPH activity assay, yields, the cell-free shell result.',
    owns_zh: '表現與分泌、WB800 與蛋白酶、SDS-PAGE 與西方墨點、ELISA、DNPH 活性檢測、產量，以及無細胞側的結果。',
    not_en: 'Not the photometer hardware, and not how the construct was built.',
    not_zh: '不負責光度計硬體，也不負責構築怎麼組出來。',
    pages: ['results', 'experiments', 'measurement'] },
  { id: 'hw', n: 4, name_en: 'Hardware', name_zh: '硬體',
    owns_en: 'The bioreactor and its runs, hollow fiber and pressure, pumps and valves, the photometer as an instrument, the light plate, the leaf sensor, DiOPAL, cost and the bill of materials, electrical and mechanical safety.',
    owns_zh: '生物反應器與各次運轉、中空纖維與壓力、泵與閥、光度計這台儀器、光照板、葉片感測器、DiOPAL、成本與零件表、電氣與機械安全。',
    not_en: 'Not what the readings mean biologically, and not the models fed by them.',
    not_zh: '不負責讀數的生物意義，也不負責用這些讀數跑的模型。',
    pages: ['hardware', 'hardware-bioreactor', 'hardware-photometer', 'hardware-diopal'] },
  { id: 'dry', n: 5, name_en: 'Software &amp; Models', name_zh: '軟體與模型',
    owns_en: 'The digital twin and the app, the stress index and forecasting, fault detection, the math model, geospatial analysis, protein design and MD, code availability.',
    owns_zh: '數位孿生與 App、逆境指數與預測、故障偵測、數學模型、地理空間分析、蛋白設計與分子動力學、程式碼公開情形。',
    not_en: 'Not the sensors themselves, and not the wet-lab result a model was fitted to.',
    not_zh: '不負責感測器本身，也不負責模型所擬合的濕式實驗結果。',
    pages: ['model', 'software', 'digital-twin-app', 'geospatial-analysis', 'protein-design'] },
  { id: 'biz', n: 6, name_en: 'Business &amp; Law', name_zh: '商業與法規',
    owns_en: 'The business model and why a social enterprise, cost per dose and payback, market size, competitors, funding, scaling economics, GMO regulation in Taiwan and the EU, liability, IP and openness.',
    owns_zh: '商業模式與為什麼選社會企業、每劑成本與回本期、市場規模、競爭者、資金、規模化經濟、台灣與歐盟的 GMO 法規、責任歸屬、專利與開放。',
    not_en: 'Not the biology of the product, and not the engineering of the rig.',
    not_zh: '不負責產品的生物學，也不負責機器的工程。',
    pages: ['entrepreneurship', 'laws-and-regulations', 'biomanufacturing'] },
  { id: 'ihp', n: 7, name_en: 'Human Practices &amp; Team', name_zh: '人文實踐與團隊',
    owns_en: 'Every stakeholder and what changed because of them, education and outreach, inclusivity, sustainability, safety review, and the general questions: next steps, who did what, what you would do with funding.',
    owns_zh: '所有利害關係人以及因他們而改變的設計、教育與推廣、共融、永續、安全審查，以及一般性問題：下一步、誰做了什麼、有資金會怎麼做。',
    not_en: 'Takes the question nobody else owns, and only hands it on if it turns technical.',
    not_zh: '承接沒人認領的問題，只有在問題轉向技術細節時才交棒。',
    pages: ['human-practices', 'education', 'inclusivity', 'sustainability', 'team'] }
],

/* Questions that genuinely belong to two seats. The rule decides in advance. */
routing: [
  { q_en: 'How accurate is your photometer?', q_zh: '你們的光度計有多準？',
    a: 'hw', b: 'wet2', rule_en: 'The instrument answers for itself: calibration, R² and range go to Hardware. It moves to Protein only if the judge asks what the reading means for the culture.',
    rule_zh: '儀器本身的事由硬體回答：校正、R²、量測範圍。只有當評審問「這個讀數對菌體代表什麼」時才轉給蛋白。' },
  { q_en: 'Does the light actually switch production on?', q_zh: '光真的能把生產打開嗎？',
    a: 'wet1', b: 'hw', rule_en: 'The circuit answers first, because the claim is biological. Hardware adds one sentence on the light source only if asked how the dose was delivered.',
    rule_zh: '先由線路回答，因為這個論點是生物性的。只有被問到光劑量如何給的時候，硬體才補一句光源的事。' },
  { q_en: 'How do you know the bacteria stay inside?', q_zh: '你們怎麼知道菌真的留在裡面？',
    a: 'hw', b: 'wet2', rule_en: 'Membrane and pressure to Hardware; the plating evidence and its limits to Protein. Agree beforehand that Hardware opens and names the limit, then passes for the plate result.',
    rule_zh: '薄膜與壓力歸硬體；塗盤證據及其限制歸蛋白。事先約定由硬體開場並講出限制，再交棒給蛋白講塗盤結果。' },
  { q_en: 'What does the digital twin know if I unplug the sensors?', q_zh: '如果我把感測器拔掉，數位孿生還知道什麼？',
    a: 'dry', b: 'hw', rule_en: 'Software owns it. Hardware only names which channels exist on the rig, in one sentence, if the judge pushes on what is really wired.',
    rule_zh: '軟體負責。只有評審追問「實際接了哪些線」時，硬體才用一句話說明機器上有哪些通道。' },
  { q_en: 'What does one dose cost a farmer?', q_zh: '一劑對農民來說成本多少？',
    a: 'biz', b: 'dry', rule_en: 'Business answers the price and the payback. Software answers only the arithmetic behind it if challenged on how the number was derived.',
    rule_zh: '商業回答價格與回本。只有在數字怎麼算出來被質疑時，軟體才解釋背後的計算。' },
  { q_en: 'Why ACC deaminase at all?', q_zh: '為什麼要用 ACC deaminase？',
    a: 'plant', b: 'wet1', rule_en: 'The plant reason comes first: ethylene and stress. Cloning follows with why it was the easiest of the three to express, if asked.',
    rule_zh: '先講植物面的理由：乙烯與逆境。被問到時，選殖再補為什麼它是三個之中最容易表現的。' },
  { q_en: 'Is this legal to put on a farm?', q_zh: '這個放到農場上合法嗎？',
    a: 'biz', b: 'ihp', rule_en: 'Law and regulation to Business. Human Practices adds the regulator or expert you actually spoke to, by name, in one sentence.',
    rule_zh: '法規歸商業。人文實踐用一句話補上你們真的談過的主管機關或專家姓名。' },
  { q_en: 'Which parts of this were yours and which came from advisors?',
    q_zh: '這裡面哪些是你們自己的，哪些來自指導老師？',
    a: 'ihp', b: 'any', rule_en: 'Human Practices opens with the honest division, then each seat names one thing they personally built or ran. This was asked of a Taiwanese high-school team in 2025; have the sentence ready.',
    rule_zh: '由人文實踐開場誠實說明分工，接著每個位置各說一件自己親手做的事。2025 年有台灣高中隊被問過這題，把句子先準備好。' },
  { q_en: 'Could another team rebuild your machine from the wiki?',
    q_zh: '別的隊伍能照你們的 wiki 重做這台機器嗎？',
    a: 'hw', b: 'dry', rule_en: 'Hardware answers with the bill of materials and the build pages. Software adds whether the firmware and code are public, in one sentence.',
    rule_zh: '硬體用零件表與組裝頁回答。軟體用一句話補上固件與程式碼是否公開。' },
  { q_en: 'How did talking to farmers change the machine?',
    q_zh: '和農民談過之後，機器有什麼改變？',
    a: 'ihp', b: 'hw', rule_en: 'Human Practices names the farmer and the request; Hardware names the physical change that followed. Practise this as a two-sentence relay, because the loop is what Best IHP scores.',
    rule_zh: '人文實踐說出農民是誰、提出什麼要求；硬體說出隨之而來的實體改變。把它練成兩句話的接力，因為「迴路」才是最佳整合人文實踐在評的東西。' }
],

/* Delivery Lab */
answerShape: [
  { k_en: 'Thanks, briefly and not every time', k_zh: '簡短道謝，而且不要每題都說',
    d_en: 'Four words at most. "Thank you" or "Good question" twice in a row sounds like filler; by the fourth time it sounds like stalling. Alternate with simply starting the answer.',
    d_zh: '最多四個字。連續兩次「Thank you」聽起來像填充詞，到第四次就像在拖時間。和「直接開始回答」交替使用。' },
  { k_en: 'The answer, with a number or a name', k_zh: '答案本身，帶一個數字或名稱',
    d_en: 'First sentence, always. "R squared 0.992 against silica standards." "Yes, pre-treatment and post-treatment both rescued; co-treatment did not."',
    d_zh: '永遠放在第一句。「對二氧化矽標準品的 R² 是 0.992。」「有，前處理與後處理都有救回來；同時處理沒有。」' },
  { k_en: 'The evidence we actually have', k_zh: '我們真正有的證據',
    d_en: 'What was run, on what, how many times. Name the page or figure so the judge can look: "that is figure 2 on the Results page".',
    d_zh: '做了什麼、在什麼上面做、做了幾次。說出頁面或圖號讓評審可以去看：「那是 Results 頁的圖 2」。' },
  { k_en: 'The limit, in your own words', k_zh: '限制，用你自己的話說',
    d_en: 'One clause. "That is a single plating, so I would not call it a log reduction." Naming the limit yourself is the single cheapest way to gain credibility in this room.',
    d_zh: '一個子句。「那只是一次塗盤，所以我不會說它是 log reduction。」自己講出限制，是這個房間裡最便宜的信任來源。' },
  { k_en: 'Then, and only then, the next step', k_zh: '最後，而且只有在這時候，才講下一步',
    d_en: 'One clause, and only if the wiki says it. A next step offered before any evidence reads as having nothing.',
    d_zh: '一個子句，而且只有 wiki 上寫了才講。在證據之前就先講下一步，會被聽成「什麼都沒有」。' }
],

phrases: [
  { cat_en: 'Buying two seconds', cat_zh: '買兩秒鐘', items: [
    { en: 'Can I check I understood: you are asking about X, not Y?', zh: '我確認一下我的理解：您問的是 X，而不是 Y，對嗎？' },
    { en: 'Could you say that once more? The room is a little loud.', zh: '可以請您再說一次嗎？現場有點吵。' },
    { en: 'Let me take that in two parts.', zh: '我分兩部分回答。' }
  ]},
  { cat_en: 'Handing over', cat_zh: '交棒', items: [
    { en: 'Mei will take the membrane side of that.', zh: '薄膜那一部分由小梅回答。' },
    { en: 'That is the assay, so I will pass to our protein side.', zh: '那是檢測的部分，我交給負責蛋白的同學。' },
    { en: 'I can answer the biology; may my teammate add the hardware in one sentence?', zh: '生物的部分我可以回答，可以讓我的隊友用一句話補硬體嗎？' }
  ]},
  { cat_en: 'When you do not know', cat_zh: '當你不知道時', items: [
    { en: 'We did not measure that. What we did measure is …', zh: '那一項我們沒有量。我們量到的是……' },
    { en: 'I do not have that number in my head. It is on the Measurement page and I can pull it up.', zh: '那個數字我記不住。它在 Measurement 頁，我可以現在調出來。' },
    { en: 'Honestly, that is a gap. The nearest thing we have is …', zh: '老實說那是一個缺口。我們最接近的是……' },
    { en: 'That one belongs to a teammate who is not at the mic; may I come back to it?', zh: '那題屬於沒在麥克風前的隊友，我可以稍後回來回答嗎？' }
  ]},
  { cat_en: 'Reasoning it out in the room', cat_zh: '在現場推理', items: [
    { en: 'We have not run that experiment. Let me reason it from what we did measure.', zh: '那個實驗我們沒有做過。讓我從我們真的量到的東西推一下。' },
    { en: 'If that were true, we would expect to see X. We see Y, so the more likely explanation is …', zh: '如果那是真的，我們應該會看到 X。我們看到的是 Y，所以比較可能的解釋是……' },
    { en: 'Two things could cause that, and the experiment that separates them is …', zh: '有兩個原因都可能造成那個結果，能分辨它們的實驗是……' },
    { en: 'I am reasoning here, not quoting a result. I want to be clear which is which.', zh: '我現在是在推理，不是引用結果。我想先把這兩件事分清楚。' }
  ]},
  { cat_en: 'Owning a weak claim', cat_zh: '承認薄弱的論點', items: [
    { en: 'That claim is stronger on the page than in the data, and here is what the data does support …', zh: '那個說法在頁面上比在數據裡更強，數據真正支持的是……' },
    { en: 'Two of our pages disagree on that number. The one I trust is X, because …', zh: '我們有兩頁對那個數字說法不同。我相信的是 X，因為……' },
    { en: 'n equals one, so I would call it an indication rather than a result.', zh: 'n 等於一，所以我會說那是一個跡象，而不是一個結果。' }
  ]},
  { cat_en: 'Closing an answer', cat_zh: '收尾', items: [
    { en: 'So the short version: X, measured on Y.', zh: '所以簡短版是：X，在 Y 上量到的。' },
    { en: 'Does that answer it, or would you like the numbers?', zh: '這樣回答到了嗎？還是您想看數字？' }
  ]}
],

traps: [
  { en: 'Starting with the problem statement. The judges read your wiki; they know the problem.',
    zh: '從問題背景開始講。評審讀過你們的 wiki，他們知道問題是什麼。' },
  { en: 'Saying "in the future we plan to" before saying anything you did.',
    zh: '在說任何做過的事之前就先說「未來我們計畫」。' },
  { en: 'Two students answering the same question, contradicting each other on a number.',
    zh: '兩個學生回答同一題，而且數字互相矛盾。' },
  { en: 'Using a term you cannot define if asked. If you say "autoencoder", be ready for "what is that?".',
    zh: '用自己定義不出來的術語。說了 autoencoder，就要準備回答「那是什麼」。' },
  { en: 'Quoting a number with no unit, or the wrong unit. Units are the fastest way to lose a measurement judge.',
    zh: '講數字不講單位，或講錯單位。單位是最快失去量測評審信任的方式。' },
  { en: 'Answering a boundary probe ("could this work on rice?") as if it were a fact question. Say what would have to be true.',
    zh: '把邊界試探（「這能用在稻米上嗎？」）當成事實題回答。要說「需要什麼條件成立」。' },
  { en: 'Answering a reasoning question with a guess dressed up as a fact. Say that you are reasoning, then show the steps.',
    zh: '把猜測包裝成事實來回答推理題。要先說這是推理，再把步驟講出來。' },
  { en: 'Letting one person answer five questions in a row while six stand silent.',
    zh: '讓一個人連答五題，另外六個人全程沉默。' },
  { en: 'Filling silence. If you have answered, stop. The judge will ask the next one.',
    zh: '用話填補沉默。回答完就停。評審會問下一題。' },
  { en: 'Arguing with a judge who has spotted a real weakness. Agree, bound it, move on.',
    zh: '和指出真實弱點的評審爭辯。承認、界定範圍、往下走。' },
  { en: 'Reading from slides or a script while answering. Backup slides are for showing a figure, not for reading.',
    zh: '回答時照著投影片或稿子念。備用投影片是用來展示圖表，不是用來念的。' },
  { en: 'Running over. A three-minute answer costs the panel two questions they wanted to ask.',
    zh: '超時。一個三分鐘的回答會讓評審少問兩題。' }
],

/* The five-minute opening */


/* Day sheet */


};
