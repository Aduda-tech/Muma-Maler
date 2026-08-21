// Book introductions (generated from Ratil New Testament study notes)
export interface BookIntro {
  author: string;
  location: string;
  date: string;
  summary: string;
  overview: string;
  sections: { title: string; range: string }[];
}

export const BOOK_INTROS: Record<string, BookIntro> = {
  "Mathayo": {
    author: "Mathayo",
    location: "Palestina",
    date: "60 - 65 E YIK RUOTH (AD)",
    summary: "Injili mar Mathayo mondiki gi Mathayo mane en jasol osuru. En e achiel kuom ji mane Yesu oluongo mokuongo e kinde mane ochako tichne kendo en janeno wang' gi wang' kuom tije mang'eny mane Yesu otimo. Kitabuni ochak ndike kinyisogo kuom nyuol Yesu gi Bikira Maria, batisone gi temne e thim.Yesu nobiro koyalo kuom pinyruodh polo gi, donjo e ngima manyaka chieng'. Polo idonje mana kuom lokruok e richo kod yie. Mathayo otweyo puonj mag Yesu e migepe abich magin tim, lando Injili, ngeche, lalruok kod pinyruodh polo. Tho kod chier mar Yesu ema Injilini orumogo kopuonjo mondo wadhi e piny duto waland Injili mar Yesu Kristo.",
    overview: "Gima duong’ mane omiyo Mathayo ondiko kitabuni en nine opuonjo ni Yesu ema ochopo singruok manie Muma Machon. Mae emomiyo kitabuni nyisoni Yesu oa e koth Ruoth Daudi kaachiel gi Abraham. (1:1), kendo Mathayo otiyo ni weche mang'eny mokor manie Muma Machon konyiso godo adimba kuom ngima mar Yesu. Yesu nobiro kaka Jawar mar Jo-Yahudi 1:21, dhout ogendini 4:13-16, to mogik to en Jawar mar piny 28:19. Tim kod kido mar oganda mar pinyruodh polo iyudo kondikie Injili mar Got 5-7 kama timbe mag piny ok nyal to pinyruodh polo gi wachne makare kende emani kod teko 6:33.",
    sections: [
      { title: "Nyuol Yesu kod tichne", range: "1:1-4:25" },
      { title: "Injili e got", range: "5:1-7:29" },
      { title: "Puonj mopogore opogore, weche gi weche mamoko", range: "8:1-18:35" },
      { title: "Wuoth madhi Jerusalem kod siem mogik", range: "19:1-23:29" },
      { title: "Weche mokor kuom ndalo mag giko", range: "24:1-25:46" },
      { title: "Tho kod chier", range: "26:1-28:20" },
    ]
  },
  "Mariko": {
    author: "Mariko",
    location: "Rumi",
    date: "60-65 E YIK RUOTH (AD)",
    summary: "Johana Mariko ne jatich kaachiel gi Jaote Paulo. Bang’e nodar modhi odak e dala mar Rumi, kama ne ondikoe gik mane Jaote Petro nyalo paro. Omiyo Injili mar Mariko nyiso weche mag janeno kuom gik mowuoyo kuomgigi. Gima duong’ mane omiyo ondiko bugni ne en nikech nodwaro mondo ochok weche duto mane ong’eyo kuom Injili. Omiyo onyiso malong’o kuom tije mane Yesu otiyo moloyo gik mane owacho to moloyo to owuoyo ahinya kuom tij Yesu kuom juma mogik. Injili mar Mariko ochakore gi tij Yesu ayanga kendo ka oyalo Injili mar Pinyruodh Nyasaye. En kod puonj mang’e- ny kendo moyangore manyiso kaka tho Yesu biro bedo 8:31 -9:31,10:33,34,45, bang’e to ogik gi tho Yesu e msalaba mondo othone richo mar piny.",
    overview: "Mariko nyiso Yesu kaka jatich mar Nyasaye mane obiro mondo onyis dwaro mar Nyasaye. Timbe mag honni, chang, bedo giteko kuom jochiende gi tekone owuon nyiso piny ni Yesu ok ne en mana jatich kaka jomoko, to ne en Wuod Nyasaye 15:39 chier mar Yesu nyiso duto mane otimo kendo sani warito duoke kod duong’ koa e polo. Mariko bende nondiko kojiwogo Jo-Kristo man Rumi mondo gibed motegno to moloyo to e ndalo mag sandruok.",
    sections: [
      { title: "Johana jabatiso gi batiso mar Ruoth", range: "1:1-13" },
      { title: "Tich Yesu e dala mar Galili :", range: "1:14-9:50" },
      { title: "Wuoth madhi Jerusalem gi donjone", range: "10:1-11:26" },
      { title: "Lweny mane otimore e dala maduong", range: "11:27-12:44" },
      { title: "Koro weche kuom gik mabiro 13: 1-37.", range: "" },
      { title: "Tho Yesu kod chierne 14:1-16:8(9-20) 9-20 - kitepe moko", range: "" },
    ]
  },
  "Luka": {
    author: "Luka",
    location: "Rumi",
    date: "60 E YIK RUOTH (AD)",
    summary: "Luka ne en jathieth kendo ne en jawuodh jaote Paulo. Injili mare ne ondikone Ja- Yunani molony miluongoni Theofila 1:3, kanyise, kit Yesu mar dhano kod ngimane kaka obet. Mae nomiyo Luka notang' kuom weche duto mane ondiko konyiso adimba tarik gi odiechieng' mane gimoro ka gimoro timoree, ochako gi nyuol Yesu kod bikira Maria, konyise nyaka weche mamoko maok ondiki kamoro amora. Ondiko kuom tij Yesu e dala mar Galili, bang'e opuonjo marabora kuom wuoth mane Yesu odhigo Jerusalem. Bang' tho Yesu gi chierne, jopuonjre odong' ka gin kod ilo ka girito teko mar Nyasaye ma ae polo mondo opong’gi.",
    overview: "Kaka Mathayo nyiso ni Yesu en Mesia mar Jo-Yahudi, Mariko to nyiso ni Yesu en Jatich mar Nyasaye. Luka to nyiso ni Yesu en Nyasaye Maler kendo en dhano moa kuom koth Adam 3:23-38. Yesu en jal mosetimo gik moko madongo e ndalo mar ngimane, moloyo ng'a- to ang'ata e piny. En dhano maduong’ moloyo ng'ato ang'ata kaluwore gi puonjne, gik mane otimo, gimane omiyo otho kaachiel gi chier aa kuom joma otho. Magi duto ema omiyo nyaka wayie kuome ni en Ruoth.",
    sections: [
      { title: "Nyuol gi ndalone mane en rawera 1:1-2:52.", range: "" },
      { title: "Batiso mar Yesu kod tem", range: "3:1-4:13" },
      { title: "Tij Yesu ei Galili", range: "4:14-950" },
      { title: "Wuodh Yesu Jerusalem", range: "9:51-19:27" },
      { title: "Tij Yesu ei Jerusalem", range: "19:28-20:47" },
      { title: "Kor kuom gik mabiro 21:1-38.", range: "" },
      { title: "Tho Yesu, gi chierne", range: "22:1-24:53" },
    ]
  },
  "Johana": {
    author: "Johana Jaote",
    location: "Efeso",
    date: "90-96 E YIK RUOTH (AD)",
    summary: "Injili mar Johana nondiki gi Jaote Johana higni mang'eny bang' tho Yesu kod chierne. Nondike mondo joma some oyie kuom Kristo kendo mondo ni giyud ngima kuom nyinge (20:3) Johana ondiko weche motelo mana miyudo e kitabuni kende konyisogo ngima mane Yesu nigo gi Wuoro kapok onyuole e piny mondo onyis ni Yesu ne ok en ng’ama lich kende to ni ne en Nyasaye madier. Nitie honni kod puonj mang'eny mag Yesu maok yudre kamoro amora makmana e kitabuni. Kwasomo sula 14-17 to wayudo puonj mane Yesu opuonjo godo jopuonjrene kapok otho. Bang' tho gi chier Yesu wasomo kaka Yesu nofwenyore ni jootene.",
    overview: "Injili mar Johana nigi puonj moko maok yudi e buge mamoko mag Injili moloyo to opuonjo kuom kit Nyasaye manie i Kristo kaachiel gi puonj matut kuom ngimane. Opuonjo kuome gi ngeche kaka ler, adiera, hera, jakwath maber, dhoot, chier gi ngima, pi mar ngima, makati ma adiera to gi mamoko.Weche mamit mwayudo e sula 14-17, nyisowa hera matut mane Yesu nigodo kuom joma oyie kaachiel gi kuwe ma yie kelo kain kuom Kristo.",
    sections: [
      { title: "Chakruokne manyiso kaka Yesu en Nyasaye", range: "1:1-14" },
      { title: "Tichne kane pok ochako Injili e Galili", range: "1:15-4:54" },
      { title: "Injili dala mar Galili gi lwenje mane omonje Jerusalem.", range: "5:1-10:42" },
      { title: "Chiero Lazaro koa kuom joma otho", range: "11:157" },
      { title: "Giko mar tich Yesu 12:1-13:38.", range: "" },
      { title: "Puonj mogik mag Yesu", range: "14:1-17:26" },
      { title: "Tho mar Yesu kod chierne", range: "18:1-20:10" },
      { title: "Chier Yesu kod nenruokne", range: "20:11-21:25" },
    ]
  },
  "Tich Joote": {
    author: "Luka",
    location: "Ok ong’ere",
    date: "65-70 E YIK RUOTH (AD)",
    summary: "Kitabu mar Tich Joote en ndiko machopo wi kama Injili mar Luka nogikie, ka Luka nyiso joma some ni tich mane Yesu ochako e piny, pod odhi nyime kotimo mano e ngima kanisa. Kitabuni e chakne opuonjo kaka joote nopong’ gi teko mar Nyasaye kendo ka giyalo matek ma chieng’no ji 3,000 norwako Yesu kaka Jawar mar chunygi 2:41. Opuonjo ngima mar kanisa ei Jerusalem, kaka Injili nolandore mochopo Samaria, kaachiel gi tich jaote Petro, kod sand mager mokuongo majoma noyie noyudo. Bang' mae to koro kitabuni wuoyo kuom jaote Paulo kendo kaka nolando Injili ne dhout ogendini. Wuodhe nyadi dek mar tero Injili owuoye malach, kendo kitabuni orumo gi wuodh Paulo Rumi. Jopuonjre mamoko mag muma to wacho ni Luka nedwaro ndiko kitabu maradek manyiso kaka nogony Paulo e jela, wuodhene mamoko, makne kaachiel kod thone.",
    overview: "Tich Joote nondiki mondo wang’e kaka Injili nolandore koa e gwenge Jo-Yahudi nyaka ochopo e dhout ogendini 1:8. Wach maber manyiso kaka Yesu notho, kendo nochier ne en wach mane ok nyal mana nyis bath piny konchiel kende, to Nyasaye ned- waro nong’ere e piny mangima. Mae emomiyo Nyasaye nomiyo joge teko mondo ochopi tijgi. Roho Maler e wuon tekono. Teko mar Nyasaye maduong’ kuom gik moko duto nenore kuom locho mar tich Injili kuom timbe mag piny kod sand, to kata obedoni onyalo miyo ngima ji mang’eny lal (mana kaka Petro gi Paulo ma Tich Joote wuoyo kuomgi). To giyudo loch kuom Kristo.",
    sections: [
      { title: "Ndalo mag chakruok kanisa", range: "1:1-5:42" },
      { title: "Sand kod landruok mar Injili", range: "6:1-9:31" },
      { title: "Tich Petro mar tero Injili", range: "9:32-12:25" },
      { title: "Wuodh Paulo mokuongo mar tero Injili", range: "13:1-14:28" },
      { title: "Romo mane obedo Jerusalem", range: "15:1-41" },
      { title: "Wuodh Paulo marariyo mar tero Injili", range: "16:1-18:22" },
      { title: "Wuodh Paulo maradek mar tero Injili", range: "18:23-21:14" },
      { title: "Mak mar Paulo kod wuodhe ma Rumi 21:15---", range: "28:31" },
    ]
  },
  "Jo-Rumi": {
    author: "Jaote Paulo",
    location: "Korintho",
    date: "58 kata 59 E YIK RUOTH (AD)",
    summary: "Paulo neni Korintho e wuodhe mar tero injili maradek kendo nochano kaka dodhi Rumi, kata obedo ninepok odhi kuno nyaka nene. Nondikonegi baruwani konyisogo kanisa ni en ng’a kendo konyisogi e yo machuok weche mane opuonjo mag muma. Mae e baruwa ma Paulo ondiko manenore moriere maloyoe barupene mamoko. Ochake konyiso- go kaka ji duto gin joricho. Kuom mano dhout ogendini kata jo-Yahudi onge gi ratiro moro amora kuom Nyasaye nikech richo osemayogi ratirono, mak mana Nyasaye mang'eny gi miwafu kane pod wan joricho nolosonwa yo mwadok godo ire 5:8. En ema wanyalo yudoe ngima man kod loch kaka jo-Kristo. Bang’e Paulo puonjo kuom chenro mar Nyasaye kuom Jo-Yahudi 9-11, kendo otieko gi puonj moko mag siem kuom tim.",
    overview: "Tim makare mar Nyasaye, kaka otiyo gipiny kod adiera, chenro makare mar warruok, magi e puonj manie kitabuni. Nyasaye inyiso kaka ng’at maduong’, kendo Nyasaye maler mar piny mangima, ok onyal mbeko chik nikech gia kuome. Kendo kaluwore gi chikego, noloso yo mar warruok machalre ni Jo-Yahudi, kaachiel gi dhout ogendini kane ooro Wuode koa e polo mondo othone richo mag piny. Omiyo koro ng’ato ang’ata moyie kuom Yesu noyud warruok 10:9, kendo yudo teko Nyasaye kuom richo, e ngimane. Kaluwore gi hera mar Nyasaye onge gima koro pogo ng'ama oyie kuome kode 8:38-39",
    sections: [
      { title: "Weche motelo", range: "1:1-17" },
      { title: "Richo kod warruok kuom yie man kuom Kristo", range: "1:18-15:21" },
      { title: "Loch kuom richo, e teko mar Kristo", range: "6:1-8:39" },
      { title: "Chenro mar Nyasaye kuom Jo-Yahudi", range: "9:1-11:36" },
      { title: "Kaka ngima gi dak Jakristo onego obedi", range: "17:1-15:13" },
      { title: "Weche mogik", range: "15:14-16:27" },
    ]
  },
  "1 Jo-Korintho": {
    author: "Jaote Paulo",
    location: "Efeso",
    date: "56 E YIK RUOTH (AD)",
    summary: "Paulo nosechako kanisa e dala maduong’ mar Jo-Yunane miluongoni Korintho kane en e wuodhe mar Injili tero mar ariyo(Tich joote 18:1-8,) to bang’ wuokne kanyo noyudo wach ni weche neok beyo. Mae nochune ndikonegi baruwa kaluwore gi chandruok mang'eny mane gin godo. Jogi neok oyie gi chunygi ni Paulo ne en jaote adier, neok gimio mesa mar Ruoth luor, ne gichandore kuom chamo ring’o mane oyang’ne liswa, ne gidonjone jowete- gi e kar yalo bura, ne ok gikwedo timbe mochido, ne ok giyie ni chier nitie kendo ne gichan- dore e weche mag kend, to magi gin mana matin kuom chandruok mang’eny mane gin godo. Paulo noneno ni nyaka nondiki kuom wechegi kapok jo- Kristo man Korintho opogore mogore piny. E kinde ma Paulo puonjo kuom chandruokgi omedo puonjo matut ahinya kuom weche mag yie.",
    overview: "Gima duong' momiyo Paulo nondiko baruwani en ni nodwaro mondo osiem Jo-Kristo man Korintho e timbe moko manono mane nitie e diergi konyisogi ber mar dak makare kaka Jo-Kristo. Ok oromo mondo waluongre ni wan Jo-Kristo, to nyaka watim gik moko kaka jo-Kristo. Tamruok timo mano en njawo nying Kristo. Paulo medo puonjo kaka Kristo ema oromo chutho e weche duto ne ng’atno moyie. Kuom Kristo oketwa maler, opwodhwa kendo orwakwa e nyim Nyasaye (1:30 )",
    sections: [
      { title: "Mos mar Paulo", range: "1:1-9" },
      { title: "Chandruok mar pogruok", range: "1:10-4:21" },
      { title: "Chandruok mar timbe gath", range: "5:1-13" },
      { title: "Chandruok mar tero wadu eod bura", range: "6:1-11" },
      { title: "Chandruok mar timbe chode", range: "6:12-20" },
      { title: "Chandruok eweche mag kend", range: "7:1-40" },
      { title: "Chandruok kuom lamo nyiseche", range: "8:1-1:11" },
      { title: "Chandruok kuom lemo", range: "11:2-14:40" },
      { title: "Chandruok kuom chier", range: "15:1-58" },
      { title: "Weche mogik", range: "16:1-24" },
    ]
  },
  "2 Jo-Korintho": {
    author: "Jaote Paulo",
    location: "Efeso",
    date: "57 E YIK RUOTH (AD)",
    summary: "Barup Paulo mokuongo ne kanisa man Korintho ne ok otieko chandruok duto. Kata ne okonyo weche moko kuomgi to moko mang’eny nepod odong’ manyaka ne otim. Mokuongo nochuno Paulo mondo olernegi kuom ng’ama nomiye teko mar yalo. Weche mang'eny mag miriambo nosewach kuome maok wang’eyo gimomiyo, kuom mano nochuno Paulo mondo ondiki kuom teko mane en-go kaka Jaote. Bende otemo puonjo kuom weche moko motegno to moloyo to kaka ginyalo konyo jowadgi modhier ma Jo- Kristo man kuonde mamoko.",
    overview: "Loch kuom jasigu nie baruwani aa chakruokne nyaka gikone. En barup osiepe, mane ondiki gi jal mohero joge, kata obedo nine gisekethone kamano. Ka Paulo nyiso kit ngi- mane, kod kit Injili mar ja-Kristo to inyalo neno ng’wono mar Nyasaye katiyo kokelo ber kuom rach. Satan nigi teko kendo otemo mar ketho tich Nyasaye to Nyasaye pod nigi teko moloye kendo osiro ji duto mogene.",
    sections: [
      { title: "Mos mar Paulo", range: "1:1-11" },
      { title: "Weche moko kuom timbe Paulo", range: "1:12-2:13" },
      { title: "Weche moko kuom tich ja-Kriskto", range: "2:14-6:10" },
      { title: "Weche moko kuom Paulo", range: "6:11-17:16" },
      { title: "Golo chiwo ne joma odhier man Jerusalem", range: "8:1-9:15" },
      { title: "Paulo osiro luongne mar jaote", range: "10:1-13:10" },
      { title: "Weche mogik", range: "13:11-14" },
    ]
  },
  "Jo-Galatia": {
    author: "Jaote Paulo",
    location: "Ok ong’ere",
    date: "48 kata 49 E YIK RUOTH (AD)",
    summary: "Paulo noseyalo ne Jo-Galatia e wuodhe mar tero Injili mokwongo-(Tich Joote 13:14- 23). Bang' kane osewuok kae to nenore ni jo-Yahudi moko moyie nobiro ka chuno jo- Ogendini moyie ni nyaka gimak chik Musa eka inyalo wargi. Paulo ondiko ka siemogi kuom puonj marachni konyisogi ni Ibrahim mane odak higni 400 kane pok ondik chike Musa nowar nikech noyie kuom Injili. Kuom mano ere kaka inyalo wachi ni mako chik nyalo waro ng’ato kata nyalo miyo ng’ama oyie kuom Kristo bedo ng’at makare moloyo? Paulo siro maa motegno kowuoyo kuome owuon kaka Jaote kendo ojiwogi mondo giwuothi kaka jo-Kristo.",
    overview: "Paulo siro Injili gi tekone duto konyisogi ni dhano yudo warruok mana kuom ng’wono mar Nyasaye kokadho e yie kuom Kristo, kendo onge yo moro machielo. Puonj moro mopogore en ketho adiera mar Nyasaye. Oketwa kare e wang' Nyasaye kuom yie 2:16, kendo wabedo jo-Nyasaye (yawuot Ibrahim) mana e yo achielno, kuom yie 3:17. Nikech wan thuolo kuom Kristo, kik koro wawe ng'ato ang'ata wuondwa ni nyaka watii matek eka wayud warruok, to nyaka wadag kuom Injili. Mae puonjowa mondo waluor Roho mar Nyasaye 5:16, kendo mondo waher owetewa moloyo kaka waherore wan wawegi 5:14.",
    sections: [
      { title: "Paulo osiro kare kod Injili bende", range: "1:1-2:21" },
      { title: "Thuolo kuom kuong' mar chik", range: "3:1-24" },
      { title: "Injili nigi teko maloyo chik", range: "3:25-4:31" },
      { title: "Thuolo mar ja-Kristo", range: "5:1-26" },
      { title: "Weche moko mag puonj", range: "6:1-18" },
    ]
  },
  "Jo-Efeso": {
    author: "Jaote Paulo",
    location: "Rumi",
    date: "60 kata 61 E YIK RUOTH (AD)",
    summary: "Baruwani Paulo nondike kaen e twech e dala mar Rumi, nondike mondo ohogo kendo ojiwgo jo-Kristo mane odak e piny Asia Matin. Otemo nyisogi weche mamoko mane osetimore chon, aa chakruok kama Nyasaye noselosoe chenro mar piny, nyaka kawuono makoro Nyasaye chiwo warruok ne joma oyie kuom Kristo, kendo nyaka giko kama richo duto ibiro tieko chuth. Onyisogi ni ngima mwadakieni nitie chandruok mang'eny nikech wan kod lweny gi teko maricho 6:12, to kaka wanto wan kaachiel e ringre Kristo, wan gi teko mar chungo motegno. Bang' mae to koro Paulo nyiso kaka wanyalo dak adimba kaka jo-Kristo e yore mag kend, timbewa jonyuol, nyithindo kod jotich .",
    overview: "Puonj maduong' ne jo-Efeso nyisowa ni chenro mar Nyasaye mosiko iyudo kuom Kristo, kod kuom ringre ma en kanisa. Ka ng’ato oyie, to en kuom Kristo kendo onwang’o warruok kod kar pondo. Magi duto Nyasaye nochano aa chakruok, kendo joma oyie Nyasaye osemiyo gik ma giremo duto. Paulo tieko kitabuni kopuonjo jakristo mwandu ma Nyasasye osechiwo ni joge, kuom mano Satan onge teko nikech giko lweny to ja- Kristo ema nigi loch.",
    sections: [
      { title: "Chenro mar Nyasaye gi warruok mar ng'at moyie", range: "1:1-2:22" },
      { title: "Midhiero mar Injili 3:1-21.", range: "" },
      { title: "Ngima mar ja-Kristo e piny", range: "4:1-5:21" },
      { title: "Dak mar ja-Kristo gijowadgi", range: "5:22-6:9" },
      { title: "Lwenj ja-Kristo kod richo", range: "6:10-24" },
    ]
  },
  "Jo-Filipi": {
    author: "Jaote Paulo",
    location: "Rumi",
    date: "60 kata 61 E YIK RUOTH (AD)",
    summary: "Baruwani Paul nondike kaen e twech Rumi ne osiepene moko mogeno kogoyo nigi erokamano kuom pesa moko mane gikowone mondo okonyrego. Ochako kony- isogi ni en kodgi kod geno mang'eny, kendo onyisogi pek moko moneno kaen Rumi. Ok ong’eyo kata obiro tho kata obiro bedo mangima, to kaponi tho ema obirone to odhi bedo mamor e nyim Kristo, to kapod ongima to obiro medo tiyone Nyasaye kaka onyalo. Onyiso jo-Filipi ni mondo gidembre kaka Kristo. Kik giyie puonj mag miri- ambo kata matin. Nyimine ariyo madhawo ikwayo ni mondo giwinjre kendo joma oyie bende ikwayo mondo giwegi gibed gi timbe malong’o ka ging’eyo ni Nyasaye biro miyogi duto ma gichando.",
    overview: "E barup osiepe ma Paulo ondikoni puonj maduong’ mar bedo mamor ineno e chakruok nyaka giko. Ka ng’ato ngima to obed mamor nikech Nyasaye ohere, Kristo nothone kendo Nyasaye osemiyie gik moko duto modwaro e ngimane. Ka ng’ato otho to mondo obed gimor nikech en e nyim Kristo nyaka chieng'. Mae ok onyiso nikoro jo-Kristo ok nobed gi chandruok kata matin. Mana kaka Kristo notimo chir e msalaba wan bende nyaka wabed mohikore mar luwo ranyisino mar bolruok e e nyim Nyasaye ka mano e gima dwarore. To nikech polo e thurwa (3:20) onego wabed gi parono e chunywa kinde duto.",
    sections: [
      { title: "Paulo gi chandruok kaen Rumi", range: "1:1-30" },
      { title: "Ranyisi mar muolo Yesu", range: "2:1-30" },
      { title: "Siem kod puonj kuom dak ja-Kristo", range: "3:1-21" },
      { title: "Kuwe mar Nyasaye kod chik Nyasaye ni joma oyie", range: "4:1-23" },
    ]
  },
  "Jo-Kolosai": {
    author: "Jaote Paulo",
    location: "Rumi",
    date: "60 kata 61 E YIK RUOTH (AD)",
    summary: "Paulo nondiko baruwani kaen e twech Rumi, nondike e dala mane pok olimo nyaka nene. Magi gin joma nowinjo wach kuomgi ni giyie kane en e dala mar Efeso e wuodhe mar tero Injili mar ariyo, to chunye nechandore bang' kane owinjo kit lamo moko magalagala mag jopiny mane donjo ei kanisa. Weche mane chando jo-Kolosai ne gin gik mopogore opogore machalo yedhe mag ajuoge mag pinyni,weche mag somo sulwe kod din jo-Yahudi mane koro miyo Kristo nenore matin mana kaka malaika. Paulo nondiko mondo okwed puonj marachni konyisogi ni Kristo en Nyasaye adiera kendo kido duto mag Nyasaye manyaka chieng’ nitie kuome 2:9. Opuonjogi bende kaka ginyalo dak kaka jo-Kristo.",
    overview: "Baruwani ma Paulo ondiko gi chunye tee, onyisowa maber kuom kit Kristo kaka en Nyasaye kod duong’ne. En duto kuom duto kendo ja-Kristo yudo gimoro amora modwaro kuom Kristo. Paulo kwero jo-Kristo ni mondo kik wuondgi gi weche mofu - wo kod rieko manono mag dhano (2:8). Ochiwo puonj kuom dak mar ja-Kristo many- iso teko Nyasaye ne dhano kod mor ma joma oyie nyalo bedogo ka gitiyo gi gik moko duto magin-go koa kuom Kristo.",
    sections: [
      { title: "Lemb Paulo mokwongo 1:1-14 2.", range: "" },
      { title: "Duong' mar Kristo", range: "1:15-2:3" },
      { title: "Siem kuom yie mag miriambo", range: "2:4-23" },
      { title: "Puonj kuom dak ja-Kristo", range: "3:1-4:1" },
      { title: "Puonj kuom lamo gi weche mogik", range: "4:2-18" },
    ]
  },
  "1 Jo-Thesalonika": {
    author: "Jaote Paulo",
    location: "Korintho",
    date: "51 KATA 52 E YIK RUOTH (AD)",
    summary: "Nene nitie weche mang'eny mane miyo Paulo ondiko baruani. Ne ondike mondo oteg Jokristo manyien mane ni Thessalonika, mane neno tem mang'eny. Ne odwaro mondo onyisgi kaka Jokristo dak, kendo ritore. Ne onyisogi ni mondo gi dhi nyime kod tijegi nyaka Ruoth Yesu duogi. Ne nitie ji mane puonjo ji ni onge ohand tiyo nikech Kristo chiegni duogo. Bende ne odwaro puonjo gi adiera mar geno Jo-Kristo matho ka oyie kuom Yesu.",
    overview: "Sula duto mag barua mokwongo mar Thessalonika puonjo duogo mar ariyo mar Kristo. Sula mar ang'wen moloyo puonjo wachni (4:13-18). Paulo temo nyiso kaka Kristo en wuod Nyasaye kendo bang' dokne e polo obet e bat korachwich mar Nyasaye.",
    sections: [
      { title: "Goyo erokamano ni Jo-Thessalonika (1:1-10)", range: "" },
      { title: "Rito tich jaote kaka entie/kata oonge", range: "(2-3)" },
      { title: "Puonjo kod chiko Jo-Thessalonika (4:1-5:1-22)", range: "" },
      { title: "Lemo mogik kod mos (5:23-28)", range: "" },
    ]
  },
  "2 Jo-Thesalonika": {
    author: "Jaote Paulo",
    location: "Korintho",
    date: "51 KATA 52 EYIK RUOTH (AD)",
    summary: "Nenore ni barua ni ne Paulo ondiko bang' dweche auchiel kaluwo mokwongo nikech wach mar barua mokwongo - dwogo mar ariyo mar Kristo ne pod ok orumo. Jimoko ne wacho ni Kristo oseduogo to moko kwer ni podi ok oduogo. Omiyo ji ne opogore e wachni. Paulo ne ondiko kanyiso ni duogo Kristo ne ok nyalre e kindego nikech satan ne pod ok one. Bende ne omedo jiwo Jo-Kristo mondo gi dhi nyime kod tijegi nikech duogo Kristo mar ariyo ok ne ong'ere to onyalo bedo e saa asaya.",
    overview: "Kaka jogo moyie kuom Kristo wan kod geno ni oduogo mapiyo. Ka waweyo paro mawa ni piny chiegni rumo nyaka wang'e ni satan biro tungo pinymalich ka Kristo pod ok oduogo. To kik wabed gi luoro nikech Kristo pod ok oduogo. To kik wabed gi luoro nikech Kristo oseloyo satan kane ochier oa kuom jomotho. Tichna kod mor marwa, kaka nyiri mane riek kendo e ngech Yesu (Mathayo 25:1-13) en ni nyaka wabed maler e duogo mar ariyo mar Kristo Yesu mondo okaw joge kaka mikayi mose yikne.",
    sections: [
      { title: "Chako (Sula 1:1-12)", range: "" },
      { title: "Weche puonj (2:1-17)", range: "" },
      { title: "Wach mogik e puonjruok (3:1-18)", range: "" },
    ]
  },
  "1 Timotheo": {
    author: "Jaote Paulo",
    location: "Ok ong’ere",
    date: "64 E YIK RUOTH (AD)",
    summary: "Baruani nondiki kod Paulo ka ndalo mar thone ne chiegni, kendo ne ondike ne jalupne Timotheo, mane onwang’o oweyo Efeso mondo olose weche moko mane nitiere e kanisa. E kindeni ne nitiere weche moko manechendo mag puonj mane nitiere e kanisa , telo e kanisa kod gik mopoge opogore mamulo ngima mar ngima mar ja- Kristo. Paulo ne ondiko mondo olerne Timetheo kuom wechegi mondo mi tich otimre maber e kanisa. To bende ne ondiko ka ojiwo Timothero mondo kik ool kuom ngimane kaka ja-Kristo, to obed ka omiyo Nyasaye duong’ kinde duto. Bende nitiere puonj makende mochiw mawuoyo kuom walo jotich mag kanisa.",
    overview: "Puonj maduong’ e baruani en ber mar bedo gi yie madier to gi tim makare. Paulo jiwo motegno ni nyaka wang’e adiera kendo mondo warite maber kuom puonj mawuok mag miriambo. To bende nyaka wabed motang’ mondo wadag e ngima molu- wore kod puonjno eka Jachien ok nonwang’ thuolo kuom jo- Nyasaye. To bende ojiwo motegno ber mar joma chunygi ler kendo ochiwore mar telone kanisa.",
    sections: [
      { title: "Siem kuom puonj mag miriambo (1:1-20)", range: "" },
      { title: "Puonj kaka onego lem (2:1-15)", range: "" },
      { title: "Puonj kaka iwalo jotend kanisa gi gokonygi (3:1-16)", range: "" },
      { title: "Jip kod tich (4:1-5:25)", range: "" },
      { title: "Tij ja- Kristo kod ng’ado rieko ni Timotheo (6:1-21)", range: "" },
    ]
  },
  "2 Timotheo": {
    author: "Jaote Paulo",
    location: "Ok ong’ere",
    date: "66 E YIK RUOTH (AD)",
    summary: "Baruani nyalo bedo ni en e barua mogik mane Paulo ondiko kendo ondike ne jal mane gitiyogo miluongoni Timotheo. En barua mar osiep manyiso gima ni e chuny Paulo maiye kendo kaka ne en gi adiera mi kata obedo ni ne ochiegni tho, Nyasaye ne osekanone ngima mochwere e polo 1:10-12. Paulo bende paro kaka ng’wono mar Nyasaye ose taye e ngimane duto tee, to bende oparo kuom kinde maricho mabiro ma ji biro weyo luwo adiera ka gidagi yie ni Nyasaye en Ruoth. Ojiwo Timotheo mondo ochung’ motegno kuom sand e kinde mabiro.",
    overview: "Puonj maduong’ mar baruani en teko ma Nyasaye nigo ewi gik moko duto kata bedo ni chandruok nitie kendo biro medore, to Nyasaye pod ni e loch kendo jogo moyie kuome ok noluor gimoro ngang’. Paulo bende medo wuoyo kuom chal mar ngi- mane mar yie, ka owuoyo kaka ne okedone adiera kendo kaka Nyasaye nomiye pok chieng’ giko (4:6-8)",
    sections: [
      { title: "Duoko erokamano mar Paulo kuom Timotheo (1:1-5)", range: "" },
      { title: "Paulo ng’ado rieko ni Timotheo (1:6-2:2)", range: "" },
      { title: "Puoch kuom jatich makare (2:3-26)", range: "" },
      { title: "Puonj kuom puonj maricho mabiro (3:1-17)", range: "" },
      { title: "Weche Paulo mogik (4:1-22)", range: "" },
    ]
  },
  "Tito": {
    author: "Jaote Paulo",
    location: "Ok ong’ere",
    date: "65 E YIK RUOTH (AD)",
    summary: "Tito ne en jatiend Paulo kendo ne okonye e kinde mane owuotho koyalo injili. Kane Paulo owuok e tuechne mokuongo Roma ne giyalo injili kod Tito e piny Crete moweyo Tito e chulano mondo odhi nyime kod wach yalo injili.",
    overview: "Barua ni nene nyiso Tito kaka onego oti e kanisa kendo kaka onego opuonj Jokristo dak maber. Ne onyise kaka jogo madwaro tiyo ni Kristo onego yier kendo kaka idwaro mondo gibedi.",
    sections: [
      { title: "Mos (1:1-4)", range: "" },
      { title: "Chike mag jodongo (1:5-9)", range: "" },
      { title: "Weche koluwore kod jopuonj manono (1:10-16)", range: "" },
      { title: "Puonj e kind ji mopogore e kanisa (2:1-15)", range: "" },
      { title: "Puonj ma jo-Kristo onego luw (3:1-8)", range: "" },
      { title: "Puonjo joma oweyo yor chier (3:9-11)", range: "" },
      { title: "Tieko (3:12-15)", range: "" },
    ]
  },
  "Filemon": {
    author: "Jaote Paulo",
    location: "Rumi",
    date: "60 E YIK RUOTH (AD)",
    summary: "Barua nondiko ni Filemon Ja-kristo modak Kolosai. Filemon ne nigi misumba miluongo ni Onesimo mane oyudo okwale aye oringo, mani ne en richo mane nyalo miyo oneg Onesimo. Kata kamano Onesimo noromo kod Paulo mane oloke mobedo Jakristo. Bang yie ne ogombo mondo odog ir Ruodhe Filemon. Omiyo Paulo nondiko ne Filemon mondo oyie kaka Jakristo okaw Onesimo makoro bende noselopkore obedo Jakristo. Paulo nondiko gi chuny mar hera ka onyiso Filemon hera manie kind Jokristo kaka owete kuom Ruoth. Ne okwaye ni oyie ong'uonne Onesimo kuom ketho mane osetimo ne kendo oruake kaka owadgi e nying Kristo.",
    overview: "",
    sections: [
      { title: "Mos", range: "(1-3)" },
      { title: "Goyo erokamano kod lamo", range: "(4-7)" },
      { title: "Kwayo mar Paulo ni Onesimo kuom Filemon", range: "(8-21)" },
      { title: "Kwayo mogik, mos kod lamo", range: "(22-25)" },
    ]
  },
  "Jo-Hibrania": {
    author: "Ok ong’ere nikech ok ofalo nyinge",
    location: "Rumi",
    date: "70 E YIK RUOTH (AD)",
    summary: "Baruani ondiki ni jo-Kristo ma Jo-yahudi. Magi ne gin jo Yahudi mane osebedo giparo mar duogo e din mar Jo-Juda nikech yomyom margi e winjo e tiend ndiko.",
    overview: "Jo-Hibrania phonjo duong’ kod loch mar Yesu Kristo kod bedo jalno ma ochung’n- wa e bura kod Ruoth Nyasaye. Baruani nyiso ber kod loch Yesu kuom gik mang’eny.",
    sections: [
      { title: "Chakruok (1:1-4)", range: "" },
      { title: "Loch kod duong' Kristo ewi Jotelo moko (1:5-7:28)", range: "" },
      { title: "Kristo duong' kendo lochne ohingo mar malaike (1:5-2:18)", range: "" },
      { title: "Kristo oloyo Musa kod duong' (3:1-4:13)", range: "" },
      { title: "Kristo duong'ne oloyo mar Jadolo Harun (4:14-7-28)", range: "" },
      { title: "Kristo e Jadolo maduong' ma wan-go", range: "(8-10)" },
      { title: "Kwayo mogik mar chung' e yie Kristo kende", range: "(11-12)" },
      { title: "Tieko mos kod lamo (13:1-25)", range: "" },
    ]
  },
  "Jakobo": {
    author: "Jakobo owadgi gi Yesu",
    location: "Ok ong’ere",
    date: "45-48 E YIK RUOTH (AD)",
    summary: "Kitabu mar Jakobo nondikne jo- Yahudi ma jo- Kristo mondo okonygi kod puonj kuom ngima jo- Kristo mapile. Oting’o weche moko machwok mag ngeche kendo onyiso matut puonj mag Yesu kod puonj mago mane opuonjo ewi got. Chandruok mowuoyo kuomgi nyiso kit pek mane chando kanisa. Wasomo kuom sunga, buono ji, wuoro, gombo, wuondruok, timbe jopiny kod kuoth. Jakobo ndiko mondo orie timbe marichogi ka onyiso ni yie maonge kod tim otho (2:26), mano tiendeni wacho gi dhok ni ng’ato oyie ok oromo kata matin yie maradiera biro kelo ngima maber mana kaka yien maber nyago olemo.",
    overview: "Jakobo siro motegno ni dak maber mar jo- Kristo mondo onyis adier yie ma ng’a- to nigo e chunye kendo mondo onyis jopiny ni Injili miyo lokruok bedo e ngima ji. Ka ng’ato wachoni en ja- Kristo to ok opogore kaka ne en chon kane pod en japiny to ere ohala ma en-go owuon kata ne piny man gi dwaro? To adier, Injili miyo lokruok bedo e ngima ji, omiyo ka wachiwore ne Kristo, to wabiro nwang’o ni kuom yiewa mangi- ma biro wuok timbe mangima mag hera kod ng’wono.",
    sections: [
      { title: "Ngima madier mar yie (1:1-27)", range: "" },
      { title: "Kony ma yie kelo e kanyakla mar ji (2:1-13)", range: "" },
      { title: "Yie kod tim (2:14-26)", range: "" },
      { title: "Puonj kuom rito lep (3:1-18)", range: "" },
      { title: "Puonj mar ngima mapile (4:1-17)", range: "" },
      { title: "Jomwandu osiem (5:1-6)", range: "" },
      { title: "Weche mag jip mogik (5:7-20)", range: "" },
    ]
  },
  "1 Petro": {
    author: "Jaote Petro",
    location: "Ok ong’ere to onyalo bedo Rumi",
    date: "63-64 E YIK RUOTH (AD)",
    summary: "Jaote Petro nondiko baruani ka thone chiegni mondo ojiw kendo oho jo-Kristo ma jo-Yahudi mane odak Asia matin. Otemo nyisogi ni sandruok en gima nyaka timre e ngima ja-Kristo kendo ni Nyasaye nigi pok maok lal ne jogo mogeno kuome. Kadipo ni nenitiero jomoko mane paro dok e din jo-Yahudi mondo mi kik ginwang’ sand, Petro nyiso kanisa ni koro osebedo oganda moyier kendo jodolo mag Nyasaye (2:9). Omiyo paro moro amora mar dok e din jo-Yahudi en kayiem nono. Petro bang’e tiyo gi ranyisi mar Kristo mane osandore kendo jiwo joma oyie mondo oikre ne gima chal kamano. Baruani rumo kod puonj mopogore opogore ne oganda mopogore opogore mar jo-Kristo .",
    overview: "Puonj maduong’ mar Petro mokwongo en locho kokadho kuom sand. Jo-kristo machon ne odak e ngima matek; yiegi ne nyalo miyo oneg-gi, to baruani nyiso ni en gima kare kata obedo ni ang’o maditimre. Nyasaye ong’eyo gik moko tim- ore kaka berne. Nyaka waket yiewa kuome kendo wabed kawengewa ng’iyo polo gi geno kawang’eyo ni dalawa en kuno maok piny ka.",
    sections: [
      { title: "Duong’ mar warruok mar Kristo (1:1-25)", range: "" },
      { title: "Luor mar ja-Kristo (2:1-10)", range: "" },
      { title: "Sandruok kod ranyis mar Kristo (2:11-25)", range: "" },
      { title: "Dak ja-Kristo e dala kendo e piny (3:1-17)", range: "" },
      { title: "Sandruok kod ranyisi mar Kristo (3:18-4:9)", range: "" },
      { title: "Tij ja-Kristo kod weche mogik (5:1-14)", range: "" },
    ]
  },
  "2 Petro": {
    author: "Jaote Petro",
    location: "Ok ong’ere to onyalo bedo Rumi",
    date: "66 E YIE RUOTH (AD)",
    summary: "Baruani nondiki kod Petro ka thone ne chiegni kendo owuoyo kuom chandruok mane Petro oneno ni biro bedo bang’ ka osetho. Otemo jiwo jo- Kristo mondo omed dongo e ngmagi mar yie, kagimedo ng’eyo adieri manie Injili mar jo- Kristo. Ok ondike sigana to mana weche mag adiera. Osiemogi kuom jopuonj mag miriambo mabiro tamore winjo adieri ka gijiwo puonjgi giwegi magala gala mopogore gi puonj kanisa. To mogik to owachoni Kristo biro duogo odiechieng’ moro mondo oketh kendo otiek chenro manie pinyni omiyo kuom mano kik waket yiewa kuom pinyni.",
    overview: "Petro mar ariyo wuoyo kuom bedo motegno e kind sand mang’eny ma kedo kodwa mondo mi wawe adieri. Piny temo mondo otiek gik ma Nyasaye timo, to nyaka wakwed gik ma kamago ka wadak e ngima mowinjore e nyim Nyasaye, kawageno kuom adiera, dhil e sand, yie kuom Nyasaye, kod bedo gi geno kuom biro Kristo.",
    sections: [
      { title: "Chenro maber makelo dongruok ne ngima ja- Kristo (1:1-21)", range: "" },
      { title: "Siem kuom jopuonj mag miriambo (2:1-22)", range: "" },
      { title: "Jip mawuoyo kuom biro Kristo mar ariyo (3:1-18)", range: "" },
    ]
  },
  "1 Johana": {
    author: "Jaote Johana",
    location: "Ok ong’ere to onyalo bedo Efeso",
    date: "85-96 E YIK RUOTH (AD)",
    summary: "Barua mar osiepni ne ondik gi Jaote Johana kane en ng’ama hike ng’eny ne jo- Kristo mane ogeno ahinya. Ondiko ka oluongogi ni nyithinda matindo kendo omiyo- gi puonj mar dak mapile kaka jo- Kristo. Ochako puonj ka oleronigi malong’o kuom nyuol mane onyuolgo Yesu e ringruok kendo ogero chikene e adier ni jogo mong’eyo Yesu ong’eyo Wuoro bende. To jogo maok ong’eyo Yesu ok ong’eyo Wuoro, to bende ok ging’eyo hera mar Wuoro kata matin. Jo- Kristo to oserwako kendo ong’eyo hera Nyasaye e kit ngimagi nikech Nyasaye en hera, omiyo onge tiende mondo gibed gi luoro e ngima masani kata e ngima mabiro.",
    overview: "Johana medo puonjo ahinya e baruani kuom adiera mar yie ja-Kristo mondo oho kendo ojiw nyithinde kuom yie. Wach maduong’ ka en hera, weyo richo, lalruok, loyo richo, bedo gadiera, bedo maler kod ngima mochwere oket kanyakla e chenro maber marieny gi ler mar Nyasaye e piny motimo mudho.",
    sections: [
      { title: "Lalruok mar ja- Kristo gi Nyasaye (1:1-10)", range: "" },
      { title: "Chik manyien mondo Waherre (2:1-17)", range: "" },
      { title: "Siem kuom joma kwedo Kristo kod timbe maricho (2:18-29)", range: "" },
      { title: "Kaka ja- Kristo onego odagi (3:1-24)", range: "" },
      { title: "Jopuonj mag miriambo (4:1-6)", range: "" },
      { title: "Hera mar Nyasaye (4:7-21)", range: "" },
      { title: "Locho mar yie (5:1-21)", range: "" },
    ]
  },
  "2 Johana": {
    author: "Jaote Johana",
    location: "Ok ong’ere, to nyalo bedo Efeso",
    date: "85-96 E YIK RUOTH (AD)",
    summary: "Baruwa machwokni nyalo bedo ni nondikne dhako moro ma ja- Krissto ma Johana nong’eyo kata ne kanisa moro mane opar luongo ni dhako. To kuom adier, nondike mondo ojiw hera madier mar jo-Kristo kendo mondo osiem jomiriambo mane donjo e piny. Johana siemo jo-Kristo mondo kik gibedi e achiel kuom timbe maricho to gichung’ motegno e adier kata obedo ni lweny tek manade.",
    overview: "Puonj maduong’ mar baruwani en ni mondo jo-Kristo duto obed motang’ kendo mariek ne puonj mag miriambo. Nyaka wabed ka wang’eyo ni puonj mag miriambo nitiere omiyo nyaka wabed moikore mondo wakwede ka obironwa. Kata kamano nyaka wadag e ngima mar hera mar Nyasaye.",
    sections: [
      { title: "Mos", range: "(1-3)" },
      { title: "Dak e ngima mar hera", range: "(4-6)" },
      { title: "Tamruok joma kwedo Kristo kod jo-Kristo kod jo-miriambo.", range: "(7-13)" },
    ]
  },
  "3 Johana": {
    author: "Jaote Johana",
    location: "Ok ong’ere, to nyalo bedo Efeso",
    date: "85-70 E YIK RUOTH (AD)",
    summary: "Baruwa machwok mar osiepni ondiki gi Jaote Johana ne osiepne Gaius, kojiwe mondo okony jogo malando injili kuonde mopogore opogore ka giyalo wach adiera. Osiemo Gaius kuom ji machalo kaka Diotrefes motamore chiwo kony e lando injili to bende opwoyo joma moko kaka Demetrias kuom chiwo kony.",
    overview: "Jo- Kristo nyaka konyre ng’ato ka ng’ato e tich Kristo. Ka ok watimo kamano to nyiso ni watimo tich Jachien, madwaro mana tieko ngima jo- Kristo. Johana jiwo matek ni jo- Kristo nyaka bed e yie achiel kaka jo- Kristo kendo nyaka wati tich mamiyo ji duto mor.",
    sections: [
      { title: "Mos", range: "(1-4)" },
      { title: "Ber bedo ja- Kristo", range: "(5-8)" },
      { title: "Tich marach mar Diotrefes", range: "(9-11)" },
      { title: "Tich maber mar Demetrias (12)", range: "" },
      { title: "Weche mogik", range: "(13-15)" },
    ]
  },
  "Juda": {
    author: "Juda ma owadgi Yesu",
    location: "OK ong’ere",
    date: "65-70 E YIK RUOTH (AD)",
    summary: "Ok ong’ere malong’o ni buruwani nondikne ng’a, chandruok ma Juda wuoyeka win- jore malong’o. Juda jiwo jo-Kristo mondo gichung’ motegno e yie ma gin-go, ne puonj mag miriambo kod jopuonj mag miriambo. E nonro marabora, Juda chiwo ranyisi kaka chon Nyasaye ne ng’ado bura kuom richo kod timbe maricho mar ngima jopuonj mag miriambo. Juda tieko wachne gi puonj ne jo-Kristo mondo ochung’ motegno gi teko mar Nyasaye mabiro sirowa mondo kik wapodhi.",
    overview: "Puonj maduong’ mar kitabuni en siem kuom gik ma puonj mag miriambo kelo to bende opuonjowa mondo wabed joma otang’ kaka kanisa. Juda wachonwa mondo watang’ gi gik ma ji wacho kod kit ngima ma gin-go mondo omi wakaw mana gik maber e wang’ Nyasaye kende. Omiyo wanyalo kwayo Nyasaye mondo okonywa e ma ka wan gi adier chutho ni obiro winjowa kendo duoko lamowa.",
    sections: [
      { title: "Mos", range: "(1-2)" },
      { title: "Siem kuom jopuonj mag mirambo", range: "(3-7)" },
      { title: "Kit ngima marach mag jopuonj mag miriambo", range: "(8-19)" },
      { title: "Puonj ne jo- Kristo", range: "(20-23)" },
      { title: "Pak", range: "(24-25)" },
    ]
  },
  "Fweny": {
    author: "Jaote Johana",
    location: "Fatimo",
    date: "90-96 E YIK RUOTH (AD)",
    summary: "Nitiere migepe ariyo madongo e kitabu ma tiende winjo tekni, mokwongo en barupe ne kanise abiriyo mantie e piny Asia (1-3) to mar ariyo wuoyo kuom fweny mopogore opogore kaka: ngima ja- Kristo kod sand ma jo- Nyasaye yudo, loch mol- ogo timbe maricho, dwok Kristo, ng’ado bura mogik, higa alafu achiel kod polo (4-22). Migepe madongo mar fwenygi wuoyo kuom masiche mang’eny mool e piny bang’ goyo turumbeta kod mago manie bakunde kama mirimb Nyarambo (Yesu) inyiso e lela. Moriwore ei fwenygi gin fweny mar jo- Nyasaye man e polo mane onegi nikech yie margi kaachiel gi sand ma jogo mopwodhi yudo e piny. Fwenygi medo nenore e kedo mantiere kind ochot gi Babulon (ma en tim marach) to gi locho mar Wach Nyasaye, ma en Jatelo mar jotelo kendo Ruodh ruodhi (9:16) mabiro tieko gik mari- cho kaeto oiko nyasi ne jo- Kristo. Bang’ magi to nitiere weche mag kum kod chiwo dwong’ ka itieko gi lamo ni: \"Amin! Bi, Ruoth Yesu\" (22:20)",
    overview: "Kitabu malich miwuoroni wuoyo kuom Yesu mayande ocha, ma nyarombo mar Nyasaye mayande onegi nikech richo mag piny, koro obedo gi teko morito gik mati- more e piny e kinde mag giko kendo omiyo gik mabeyo makrum ( manyaka chieng’) obedo ka otieko timbe maricho kendo ka oketo tim makare mondo obed manyaka chieng’. En e geno madieri mar ja- Kristo ni gik moko duto nobed maber chieng’ moro kendo Nyasaye nobed moromo kuom gik moko duto. Pi wenge noywe oko, kendo tho, kuyo, ywak kod lit ok nobedie ngang’ (21:4). Wach hochni en mar joma oyie duto tee.",
    sections: [
      { title: "Fweny mokuongo", range: "1:1-20" },
      { title: "Barupe abiriyo mag kanise", range: "2:1-3:22" },
      { title: "Fweny kuom Nyasaye kod Nyarombo", range: "4:1-5:14" },
      { title: "Kido abiriyo mag kum", range: "6:1-8:5" },
      { title: "Tunge abiriyo mag kum", range: "8:6-11:19" },
      { title: "Fweny mar kedo manie kind piny gi polo", range: "12:1-14:20" },
      { title: "Bakunde abiriyo mag kum", range: "15:1-16:21" },
      { title: "Kum mar jachode kod Babulon", range: "17:1-19:21" },
      { title: "Giko mar ndaloni to gi ndalo mabiro", range: "20:1-22" },
    ]
  },
  "Chakruok": {
    author: "Musa",
    location: "Thim mar Sinai",
    date: "c. 1445-1405 KA POK KRISTO (BC)",
    summary: "Chakruok en kitap machakore mar Muma, mondiki gi Musa. Nyiso kaka Nyasaye nochweyo piny kod dhano, kendo kaka richo nodonjo e piny. Kanyo ema Nyasaye nochakogo singruokne gi ngima mar warruok ka oluongo Ibrahim, Isaka gi Jakobo.",
    overview: "Chakruok opogore e migepe madongo ariyo: chuech piny gi dhano (1-11), kod sigand kwaru mag Israel (12-50). Nyasaye nochweyo gik moko duto maber, to richo noketho piny kendo ne okel tho kod pogruok. To kata kamano, Nyasaye nosingo warruok kod ng'ato mane nobi konyo (3:15). Bang'e noluongo Ibrahim mi otimo singruok kode, kosingo ni ogandane nobed oganda maduong' kendo koth Ibrahim ema nomi piny gweth.",
    sections: [
      { title: "Chuech mar piny", range: "1:1-2:25" },
      { title: "Richo donjo e piny", range: "3:1-11:32" },
      { title: "Ibrahim, Isaka gi Jakobo", range: "12:1-36:43" },
      { title: "Josef gi owetene", range: "37:1-50:26" },
    ]
  },
  "Wuok": {
    author: "Musa",
    location: "Thim mar Sinai",
    date: "c. 1445-1405 KA POK KRISTO (BC)",
    summary: "Wuok nyiso kaka Nyasaye noreso jo-Israel e tij wasumbni e piny Misri, kaka nogolgi kalwore gi teko maduong', kendo kaka nomiyogi chike e got Sinai. Kitapni kelo wach Pasaka, chike apar, kod gero mar Hemb Romo.",
    overview: "Wuok e sigand resruok maduong' moloyo e Muma Machon. Nyasaye nowinjo ywak mar joge ma ne ni e bwo wasumbni mi ochiko Musa mondo oresgi. Kuom masiche apar, Nyasaye noketho Misri mi oreso joge, kendo nokalo e Nam Makwar. E got Sinai, Nyasaye nomiyogi chike kendo notimo singruok kodgi mondo gibed joge. Gero mar Hemb Romo nonyiso ni Nyasaye ne dwaro dak e dier joge.",
    sections: [
      { title: "Jo-Israel e wasumbni Misri", range: "1:1-12:30" },
      { title: "Wuok e Misri", range: "12:31-18:27" },
      { title: "Chike e got Sinai", range: "19:1-24:18" },
      { title: "Chike mag Hemb Romo", range: "25:1-31:18" },
      { title: "Nyarombo mar dhahabu kod lokruok", range: "32:1-40:38" },
    ]
  },
  "Tim Jo-Lawi": {
    author: "Musa",
    location: "Thim mar Sinai",
    date: "c. 1445-1405 KA POK KRISTO (BC)",
    summary: "Tim Jo-Lawi opuonjo jodolo kod jo-Israel kaka gibiro lamo Nyasaye maler. Kitapni opong' gi chike mag misengini, pwodhruok, chiemo mowinjore, kod seche mag nyasi maler. Gima duong' en ni Nyasaye en maler kendo joge nyaka bed maler.",
    overview: "Tim Jo-Lawi osirwa ni Nyasaye maler en Nyasaye machiegni to bende mopogore gi richo. Ka joge ne dwaro dhi e nyim Nyasaye, ne onego gikel misango mar pwodhruok. Kitapni puonjo kuom misango mopogore opogore, tij jodolo, kendo odiechieng' mag pwodhruok (Kipir). Wacho ni hera Nyasaye ne joge nyaka neni e ngimagi maler, nimar “Beduru maler, nikech an maler.”",
    sections: [
      { title: "Misango kod pwodhruok", range: "1:1-7:38" },
      { title: "Jodolo kod tiendgi", range: "8:1-10:20" },
      { title: "Pwodhruok gi chiemo", range: "11:1-15:33" },
      { title: "Od Paw Pwodhruok", range: "16:1-34" },
      { title: "Nyasi maler kod chike", range: "17:1-27:34" },
    ]
  },
  "Kwan": {
    author: "Musa",
    location: "Pap mar Moab",
    date: "c. 1445-1405 KA POK KRISTO (BC)",
    summary: "Kwan wuoyo kuom kwan mar jo-Israel kendo kuom wuodhgi e thim higni piero ang'wen. Nyiso kuom tamruok mar jogo ka girango piny Kanaan, kendo kaka Nyasaye norito joge kata ka ne gingo'yo.",
    overview: "Kitap Kwan nyiso wuoth mar jo-Israel koa e got Sinai nyaka e pap mar Moab. Jogo nokwan e yo maber kendo negichan kaka oganda mar lweny. To kata obedo ni Nyasaye ne otelonegi gi ranyisi mag bor polo, ne gingo'yo kendo ng'ur, omiyo tieng' mangima ne otue e thim kuom higni piero ang'wen. Kata kamano, Nyasaye ne dhi nyime riito joge kendo ne oikogi mondo gidonj e piny mane osingonegi.",
    sections: [
      { title: "Kwan kod chano", range: "1:1-10:10" },
      { title: "Wuoth e thim", range: "10:11-21:35" },
      { title: "Balak kod Balaam", range: "22:1-25:18" },
      { title: "Kwan mar ariyo kod chike mogik", range: "26:1-36:13" },
    ]
  },
  "Rapar Mar Chik": {
    author: "Musa",
    location: "Pap mar Moab",
    date: "c. 1405 KA POK KRISTO (BC)",
    summary: "Rapar Mar Chik en ndiko mar chike mar Musa kendo opuonjo ni nyaka iher Jehova Nyasaye gi chunyi duto. Kitapni ochokore e puonj kod siem ma Musa nomiyo jo-Israel e kinde mokwongo donjo e piny Kanaan.",
    overview: "Rapar Mar Chik ndiko kendo chike mar Musa ne tieng' manyien ma pok odonjo piny Kanaan. Musa nopo joge kuom ng'wono mar Nyasaye kendo nosiemogi ni girit chike. Chik maduong' en ni “Her Jehova Nyasaye ma Nyasachi gi chunyi duto” (6:5). Musa nokwayogi mondo giyier ngima to ok tho, kendo nosingonegi gweth kod kuong' kaluwore gi winjo.",
    sections: [
      { title: "Musa ng'eyo chik", range: "1:1-4:43" },
      { title: "Her gi winjo", range: "5:1-26:19" },
      { title: "Gweth gi kuong'", range: "27:1-30:20" },
      { title: "Weyo gi tho Musa", range: "31:1-34:12" },
    ]
  },
  "Joshua": {
    author: "Joshua",
    location: "Piny Kanaan",
    date: "c. 1405-1385 KA POK KRISTO (BC)",
    summary: "Joshua nyiso kaka jo-Israel nokawo piny Kanaan kaka Nyasaye nosingonegi. Kitapni lando kuom lwenje madongo, pogo piny, kendo nyasi mar loso singruok. Wach maduong' en ni Nyasaye ogeno kendo otimo singruokne.",
    overview: "Joshua notelo ne jo-Israel bang' tho Musa kendo nokelogi e piny Kanaan. Kuom lwenje mag Jeriko gi mamoko, Nyasaye noketo joge e piny mane osingonegi. Joshua nopogo piny ne dhout Israel, kendo ka ochopo tichne, nosiemo jogo ni girito adiera ne Jehova Nyasaye, kowacho ni, “An to an kod jooda, wabiro tiyo ne Jehova Nyasaye.”",
    sections: [
      { title: "Donjo e piny Kanaan", range: "1:1-5:12" },
      { title: "Lwenje mag kawo piny", range: "5:13-12:24" },
      { title: "Pogo piny", range: "13:1-21:45" },
      { title: "Siem mogik mar Joshua", range: "22:1-24:33" },
    ]
  },
  "Jong’ad Bura": {
    author: "Samuel",
    location: "Israel",
    date: "c. 1050-1000 KA POK KRISTO (BC)",
    summary: "Jong’ad Bura nyiso ngima jo-Israel e kinde mane jong'ad bura telonegi. Kitapni lando e yo mayoreya ka jogo ne dhi nyime podho e richo, Nyasaye ne chiwogi e lwet wasiki, to ka ne giywak ne resogi.",
    overview: "E kinde mane jo-Israel ne onge gi ruoth, Nyasaye ne kelo jong'ad bura mondo ores joge. Kata kamano, jogo ne dhi nyime timo richo, ka ng'ato ka ng'ato otimo gima oneno ni ber e wang'e (21:25). Wach maduong' en ni Nyasaye ok nyal weyo joge, kendo nigi kech kuomgi seche duto.",
    sections: [
      { title: "Chakruok gi podho", range: "1:1-3:6" },
      { title: "Jong'ad bura telo", range: "3:7-16:31" },
      { title: "Masira mar e kinde jolal", range: "17:1-21:25" },
    ]
  },
  "Ruth": {
    author: "Samuel",
    location: "Israel",
    date: "c. 1000 KA POK KRISTO (BC)",
    summary: "Ruth en sigand moro maber mar hera gi adiera. Ruth ma ja-Moab ne osiko koda min chwore Naomi kendo ne odonjo e oganda Nyasaye. Nyiso kaka Nyasaye tiyo kuom joma obolore mondo ochiw warruok kendo keto geno.",
    overview: "Ruth ne en dhako ma ja-Moab ma noyie weyo nyiseche gi pinje mondo oluw Naomi min chwore. Kuom adierane, Nyasaye nomiyo gweth mi okendo Boaz, jal ma ne en wat kodwargi. Kuom keny, Ruth nobedo kwaro Ruoth Daudi, kendo bende nyinge nitie e koth Yesu Kristo. Sigandni nyiso ni Nyasaye rito joma oket genogi kuome.",
    sections: [
      { title: "Naomi odok Bethlehem", range: "1:1-22" },
      { title: "Ruth ochoko cham", range: "2:1-23" },
      { title: "Kendo mar Boaz", range: "3:1-4:22" },
    ]
  },
  "1 Samuel": {
    author: "Samuel, Nathan kod Gad",
    location: "Israel",
    date: "c. 930 KA POK KRISTO (BC)",
    summary: "1 Samuel nyiso ngima mar Samuel, ruoth Saul, kod ruoth Daudi. Kitapni lando lokruok mar Israel koa e kinde jong'ad bura nyaka e loch ruoth, kendo nyiso kaka Nyasaye oyiero ruoth kaluwore gi chuny ng'ato.",
    overview: "1 Samuel ochakore gi nywol Samuel, janabi mane otelo ne Israel, kendo gikone en yiero mar ruoth. Jogo nokwayo ruoth, kendo Saul nobedo ruoth mokwongo, to nolal nikech tamruok. Nyasaye noyiero Daudi “ng'at machalo gi chunye” kendo kitapuni nyiso kaka Daudi nomedo dongo ka Saul ne dhi nyime teme.",
    sections: [
      { title: "Samuel janabi", range: "1:1-7:17" },
      { title: "Yiero ruoth Saul", range: "8:1-15:35" },
      { title: "Daudi oyier", range: "16:1-20:42" },
      { title: "Saul dwaro nego Daudi", range: "21:1-31:13" },
    ]
  },
  "2 Samuel": {
    author: "Samuel, Nathan kod Gad",
    location: "Israel",
    date: "c. 930 KA POK KRISTO (BC)",
    summary: "2 Samuel nyiso loch mar Daudi, ruoth maberie kendo marech. Nyiso lokruok mar Jerusalem e dala maduong', singruok mar Nyasaye gi Daudi, richo Daudi gi Bathsheba, kod chandruok mane oluwo.",
    overview: "2 Samuel lando kaka Daudi nobedo ruoth gi loch maduong' kendo Nyasaye notimo singruok kode ni koth Daudi nobed nyaka chieng'. To kata kamano, richo mar Daudi kod Bathsheba nokelo masiche madongo e ode. Sigandni nyiso ni kata ka Ng'at Nyasaye ohero podho, Ng'wono mar Nyasaye duong' kendo en owuon ema reso.",
    sections: [
      { title: "Loch Daudi", range: "1:1-10:19" },
      { title: "Richo gi masiche", range: "11:1-20:26" },
      { title: "Gik mag loch Daudi", range: "21:1-24:25" },
    ]
  },
  "1 Ruodhi": {
    author: "Jeremia",
    location: "Israel",
    date: "c. 560-540 KA POK KRISTO (BC)",
    summary: "1 Ruodhi nyiso ngima Solomon ka nolocho gi rieko kendo nogero hekalu. Bang' tho Solomon, pinyruoth nopogore ariyo, kendo ruodhi mang'eny mawacho nokelo lalruok mar adiera. Eliya janabi noluong jogo ni gidog ir Nyasaye.",
    overview: "1 Ruodhi ochako gi loch mar Solomon, ng'at mane rieko kendo noparo hekalu mar Jehova Nyasaye. To chuny Solomon nolokore kuom nyiseche manono, kendo bang' thone, pinyruoth nopogore. Kitapuni nyiso lwenje mag ruodhi mawacho kendo tich janabi Eliya mane osiemo ruodhi kod jogo mondo gidog ir Nyasaye.",
    sections: [
      { title: "Loch Solomon", range: "1:1-11:43" },
      { title: "Pinyruoth pogo ariyo", range: "12:1-16:34" },
      { title: "Tich janabi Eliya", range: "17:1-22:53" },
    ]
  },
  "2 Ruodhi": {
    author: "Jeremia",
    location: "Israel",
    date: "c. 560-540 KA POK KRISTO (BC)",
    summary: "2 Ruodhi nyiso podho mar jo-Israel gi jo-Juda kuom richo. Kitapni lando tich janabi Elisha, tero jo-Israel e twech e piny Asuria, kod keth mar Jerusalem. Nyiso ni tamruok kelo kum, to lokruok okelo ng'wono.",
    overview: "2 Ruodhi dhi nyime gi sigand ruodhi mawacho. Janabi Elisha noyudo duong' mar nyalo mar timo honni, kendo notelo ne jogo. Kata kamano, jogo ne dhi nyime timo richo nyaka jo-Israel ne oter e twech e Asuria (722 BC) kendo Jerusalem noketh (586 BC). Nyasaye nosiemogi chon kuom jonabi, to ne gidagi winjo.",
    sections: [
      { title: "Tich Elisha", range: "1:1-8:29" },
      { title: "Ruodhi mag Israel gi Juda", range: "9:1-17:41" },
      { title: "Podho mar Juda", range: "18:1-25:30" },
    ]
  },
  "1 Weche Mag Ndalo": {
    author: "Ezra",
    location: "Jerusalem",
    date: "c. 450-430 KA POK KRISTO (BC)",
    summary: "1 Weche Mag Ndalo nyiso ngima jo-Israel koa e Adam nyaka e loch Daudi. Kitapni golo kwan mag jogo, sigend kwaru, kod loch Daudi, kendo nyiso kaka Nyasaye nochiko weche mag lamo kod tim.",
    overview: "1 Weche Mag Ndalo ogoyo sigand dhout Israel koa Adam nyaka Daudi, kogolo kuom weche mane ondik chon. Kitapuni ketore ahinya kuom jokanyo, jodolo, gi wer; kendo nyiso ni Nyasaye en e chuny ngima ogandane. Ndiko mar loch Daudi nyiso ni Nyasaye norito joge kendo nosik koda singruokne.",
    sections: [
      { title: "Sigand kwaru", range: "1:1-9:44" },
      { title: "Tho Saul", range: "10:1-14" },
      { title: "Loch Daudi", range: "11:1-29:30" },
    ]
  },
  "2 Weche Mag Ndalo": {
    author: "Ezra",
    location: "Jerusalem",
    date: "c. 450-430 KA POK KRISTO (BC)",
    summary: "2 Weche Mag Ndalo dhi nyime gi sigand ruodhi mag Juda, nyaka e loch Solomon kod hekalu. Kitapni nyiso duong' mar hekalu, kendo kaka joma owachore e lamo ne yudo gweth mag Nyasaye.",
    overview: "2 Weche Mag Ndalo nyiso loch Solomon gi lamo e hekalu, kendo kaka nyasi mag lamo ne dhi nyime kuom ruodhi mag Juda. Kitapuni keto gen mare ahinya kuom Nyasaye, konyiso ni ruodhi mowinjo Nyasaye ne yudo gweth, to mawinjo wasike ne kelo masiche. Ndukone wacho ni Nyasaye osingore ni nyalo kelo lokruok kuom joge ka gilokore.",
    sections: [
      { title: "Hekalu mar Solomon", range: "1:1-9:31" },
      { title: "Ruodhi mag Juda", range: "10:1-36:23" },
    ]
  },
  "Ezra": {
    author: "Ezra",
    location: "Jerusalem",
    date: "c. 440 KA POK KRISTO (BC)",
    summary: "Ezra nyiso duogo mar jo-Israel oa e twech e piny Babulon kendo gero mar hekalu mar ariyo. Ezra noloko jogo e chik mar Nyasaye kendo noduogo ne giwiro adiera. Kitapni nyiso ni wach Nyasaye nigi teko mar loko chuny ji.",
    overview: "Ezra lando kaka Nyasaye nochiwo jo-Israel teko mar duogo oa Babulon. Zerubabel notelo ne jogo e gero hekalu, bang'e Ezra noloko jogo e chik. Kuom lamo, tim nyasi, kod somo chik, jogo nomedo chako ngima gi Nyasaye. Kitapuni nyiso ni ngima maler oa kuom wach Nyasaye kendo kuom winjo.",
    sections: [
      { title: "Duogo kendo gero hekalu", range: "1:1-6:22" },
      { title: "Ezra duogo gi puonj", range: "7:1-10:44" },
    ]
  },
  "Nehemia": {
    author: "Nehemia",
    location: "Jerusalem",
    date: "c. 430 KA POK KRISTO (BC)",
    summary: "Nehemia nyiso kaka Nehemia noduogo Jerusalem mondo oger ohinga kendo olos jogo. Kitapni lando lamo, tich, kod lweny gi wasike, kendo nyiso kaka ng'at achiel ma gen Nyasaye nyalo loko gik moko.",
    overview: "Nehemia, jatich ruoth e piny Persia, nowinjo wach mar keth Jerusalem mi nokwayo thuolo mar duogo mondo oger ohinga. Kata ka wasike ne teme, nogero ohinga e ndalo apar gariyo (52) kuom lamo gi tich kanyakla. Bang'e nosomo chik ne jogo kendo ne olokogi e singruok mar rit chik. Sigandni puonjo ni lamo kod tich nyalo loko chandruok.",
    sections: [
      { title: "Nehemia duogo Jerusalem", range: "1:1-2:20" },
      { title: "Gero ohinga", range: "3:1-7:73" },
      { title: "Somo chik kod nyasi", range: "8:1-10:39" },
      { title: "Tich mogik mar Nehemia", range: "11:1-13:31" },
    ]
  },
  "Esta": {
    author: "Ok ong'ere",
    location: "Piny Persia",
    date: "c. 465 KA POK KRISTO (BC)",
    summary: "Esta nyiso kaka Nyasaye noreso jo-Yahudi e piny Persia kuom chir mar Esta. Kitapni lando kaka Esta nobedo ruoth madhako kendo kaka oyudo rieko mar reso joge oa e chenro mar keth. Nyiso ni Nyasaye tiyo e yo mopondo.",
    overview: "Esta ne en nyar jo-Yahudi mane obedo ruoth madhako e piny Persia. Haman nochano mondo oketh jo-Yahudi duto, to kuom lamo, ngima chiemo, kod chir mar Esta, Nyasaye noloko chenro mar richo mi jo-Yahudi noresi. Kata ka nying Nyasaye ok ondiki e kitapni, lwete nenore e ngima joge. Nyasi mar Purim en paro mar resruokno.",
    sections: [
      { title: "Esta obedo ruoth madhako", range: "1:1-2:18" },
      { title: "Chenro mar Haman", range: "2:19-5:14" },
      { title: "Resruok mar jo-Yahudi", range: "6:1-10:3" },
    ]
  },
  "Ayub": {
    author: "Ok ong'ere",
    location: "Piny Uz",
    date: "c. 2000-1500 KA POK KRISTO (BC)",
    summary: "Ayub nyiso sand mar ng'at makare kendo penjore ni ang'o momiyo joma kare sandore. Kitapni lando wuoyo mag Ayub gi osiepene, kendo Nyasaye dwoko ayi. Nyiso ni Nyasaye nigi teko kendo rieko, kendo en owuon e ma nigi dwoko.",
    overview: "Ayub ne en ng'at makare ma Nyasaye noweyo Satan oteme. Kata ka ne osando ka olalo gik moko duto, Ayub ne odagi ketho adiera. Osiepene ne temo dwoko penjo, to dwokogi ne ok rom. E gikone, Nyasaye owuon noluongo Ayub mi onyise duong'ne gi riekone, kendo Ayub noyudo ngima manyien. Kitapuni puonjo ni sandruok en tem, kendo Nyasaye nigi dwarone e gik moko duto.",
    sections: [
      { title: "Tem mokwongo mar Ayub", range: "1:1-2:13" },
      { title: "Wuoyo gi osiepene", range: "3:1-31:40" },
      { title: "Elihu wuoyo", range: "32:1-37:24" },
      { title: "Nyasaye dwoko Ayub", range: "38:1-42:17" },
    ]
  },
  "Zaburi": {
    author: "Daudi kod jomoko",
    location: "Israel",
    date: "c. 1440-400 KA POK KRISTO (BC)",
    summary: "Zaburi en kitap mag wende kod lamo. Oting'o pak, goyo erokamano, ywak, kwayo kony, kod geno. Nyiso kaka wanyalo nyiso chunywa e nyim Nyasaye e seche duto, e mor kata e kuyo.",
    overview: "Zaburi opogore e kitape abich, kendo oting'o wende mopogore opogore ma jo-Israel nowero e nyim Nyasaye. Daudi nondiko mang'eny, to jomoko kaka Asaf, yawuot Kora, gi Musa bende nondiko. Kitapuni puonjo lamo e ngima mapile, kendo nyiso ni Nyasaye winjo ywak joge e seche duto. Zaburi 23, 51, kod 100 gin moko kuom wende moyudo ahinya.",
    sections: [
      { title: "Zaburi 1-41", range: "1:1-41:13" },
      { title: "Zaburi 42-72", range: "42:1-72:20" },
      { title: "Zaburi 73-89", range: "73:1-89:52" },
      { title: "Zaburi 90-106", range: "90:1-106:48" },
      { title: "Zaburi 107-150", range: "107:1-150:6" },
    ]
  },
  "Ngeche": {
    author: "Solomon kod jomoko",
    location: "Israel",
    date: "c. 950-700 KA POK KRISTO (BC)",
    summary: "Ngeche en kitap mar rieko ma puonjo kaka ng'ato onego odag e yo makare. Opong' gi siem gi puonj mayot ma telo ji e ngima, lamo, chuny, gi yore. Nyiso ni luoro Jehova Nyasaye e chakruok mar rieko.",
    overview: "Ngeche otiyo gi ngeche manyalo telo ji e ngima pile. Solomon nondiko mang'eny, to Agur gi Lemuel bende nondiko. Kitapuni puonjo rieko, adiera, tich, wacho, gi rit dhok. “Luoro Jehova Nyasaye e chakruok mar rieko” (9:10) en wach maduong'. Ngeche maduong' ahinya en wach dhako ma kite long'o e giko (31).",
    sections: [
      { title: "Siem mag rieko", range: "1:1-9:18" },
      { title: "Ngeche mag Solomon", range: "10:1-24:34" },
      { title: "Ngeche mag Agur gi Lemuel", range: "25:1-31:31" },
    ]
  },
  "Eklesiastes": {
    author: "Solomon",
    location: "Jerusalem",
    date: "c. 935 KA POK KRISTO (BC)",
    summary: "Eklesiastes nyiso nono mar ngima maonge Nyasaye. Jayalo wacho ni gik moko duto en nono, kendo ngima ok nyal yudo tiende ka Nyasaye onge. Puonj mogik en ni nyaka iluor Nyasaye kendo irit chikene.",
    overview: "Jayalo (Solomon) nopenje ni ang'o ma ngima nyalo miyo dhano. Noparo rieko, mor, tich, kod mwandu, kendo nogik ni gik moko duto “en nono.” To ka Nyasaye en e chuny ngima, to tich gi mor yudo tiendgi. Puonj mogik en ni “luor Nyasaye kendo rit chikene, nikech ma e tij dhano duto” (12:13).",
    sections: [
      { title: "Nono mar ngima", range: "1:1-6:12" },
      { title: "Rieko gi rieko", range: "7:1-11:6" },
      { title: "Ngima kod giko", range: "11:7-12:14" },
    ]
  },
  "Wer Mamit": {
    author: "Solomon",
    location: "Jerusalem",
    date: "c. 960 KA POK KRISTO (BC)",
    summary: "Wer Mamit en wend hera ma nyiso hera maduong' e kind chwo gi dhako. Nyiso ni hera en mich mar Nyasaye ma en gi teko mar tho, kendo en kido mar hera mar Nyasaye ne joge.",
    overview: "Wer Mamit (Song of Solomon) en wend hera maber ahinya e Muma. Nyiso hera e kind wuon kisera gi miaha, kendo wuoyo kuom dwaro, mor, gi adiera mag hera. Jopuonj Muma bende nyiso ni hera maduong' e kind Nyasaye kod joge. Hera en “mach mager” ma pi mang'eny ok nyal nego (8:6-7).",
    sections: [
      { title: "Chakruok mar hera", range: "1:1-3:5" },
      { title: "Hera dhi nyime", range: "3:6-5:1" },
      { title: "Herani tek", range: "5:2-8:14" },
    ]
  },
  "Isaya": {
    author: "Isaya",
    location: "Jerusalem",
    date: "c. 700-680 KA POK KRISTO (BC)",
    summary: "Isaya en janabi maduong' ma nokoro kuom Mesia. Kitapni nyiso siem mag kum ne richo, kendo bende nyiso geno mar warruok. Isaya nokoro nywol Yesu, sande, tho, kod lochne.",
    overview: "Isaya noyudo fweny maduong' e hekalu kendo noluonge mondo okor ne jo-Juda. Nokoro kum ne richo, to bende nokoro geno mar warruok. Weche mag jatich Nyasaye (52:13-53:12) nyiso sand gi tho mar Mesia nikech richowa. Isaya bende nokoro polo manyien (65) ma Nyasaye biro loso. Wechegi osechopo kuom Yesu Kristo.",
    sections: [
      { title: "Siem gi luong Isaya", range: "1:1-6:13" },
      { title: "Kum ne ogendini", range: "7:1-23:18" },
      { title: "Ngima gi warruok", range: "24:1-35:10" },
      { title: "Hiskia gi duoko", range: "36:1-39:8" },
      { title: "Kar neno gi kueyo", range: "40:1-48:22" },
      { title: "Jatich gi warruok", range: "49:1-57:21" },
      { title: "Polo manyien", range: "58:1-66:24" },
    ]
  },
  "Jeremia": {
    author: "Jeremia",
    location: "Jerusalem kod Misri",
    date: "c. 585-580 KA POK KRISTO (BC)",
    summary: "Jeremia noluong ni “janabi maywak” kendo nokoro keth mar Jerusalem nikech richo. Kitapni nyiso siem mar Nyasaye, to bende geno mar singruok manyien ma Nyasaye biro timo gi joge.",
    overview: "Jeremia noluong mondo okor ne jo-Juda ni gidog ir Nyasaye, to ne gitame. Nokoro keth mar Jerusalem (586 BC) kendo noluong jogo ni girwak twech kaka kum mar Nyasaye. Kata kamano, Jeremia bende nokoro singruok manyien ma Nyasaye biro keto chik e chuny ji (31:31-34). En geno ma ochopo kuom Yesu Kristo.",
    sections: [
      { title: "Luong Jeremia", range: "1:1-19" },
      { title: "Siem ne Juda", range: "2:1-29:32" },
      { title: "Singruok manyien", range: "30:1-33:26" },
      { title: "Keth Jerusalem", range: "34:1-45:5" },
      { title: "Kor ne ogendini", range: "46:1-52:34" },
    ]
  },
  "Ywagruok": {
    author: "Jeremia",
    location: "Jerusalem",
    date: "c. 586 KA POK KRISTO (BC)",
    summary: "Ywagruok en wende mag kuyo ma Jeremia nondiko bang' keth Jerusalem. Nyiso kuyo mar keth, to bende nyiso geno madieri ni ng'wono mar Nyasaye nyien okinyi kokinyi.",
    overview: "Ywagruok (Lamentations) en wende abich mag kuyo kuom keth mar Jerusalem. Jeremia noywag nikech masiche mar joge, kendo nong'ado ni richo ema okelo kumno. To e dier kuyo, nitiere wach mar geno maduong': “Hera maduong' mar Jehova Nyasaye osiko mochwere, kendo ng'wonone ok rum” (3:22-23).",
    sections: [
      { title: "Kuyo kuom keth Jerusalem", range: "1:1-2:22" },
      { title: "Geno e dier kuyo", range: "3:1-66" },
      { title: "Giko mar kuyo", range: "4:1-5:22" },
    ]
  },
  "Ezekiel": {
    author: "Ezekiel",
    location: "Piny Babulon",
    date: "c. 570 KA POK KRISTO (BC)",
    summary: "Ezekiel janabi noluongo e piny Babulon kendo noyudo fwenje mag duong' mar Nyasaye. Nokoro keth Jerusalem, kendo bende duogo jogo, hekalu manyien, kod chuny manyien ma Nyasaye biro chiwo.",
    overview: "Ezekiel ne en jadolo ma noter e twech e Babulon. Noyudo fwenje mag duong' mar Nyasaye kendo nokoro keth Jerusalem. To bende nokoro duogo joge, chuny manyien, kod hekalu manyien. Fweny mar holo mag chok (37) nyiso ni Nyasaye nyalo chiero joge motho e chuny. Wechegi chopo e ngima manyien ma Nyasaye chiwo kuom Roho Maler.",
    sections: [
      { title: "Luong gi fwenje", range: "1:1-24:27" },
      { title: "Kor kuom ogendini", range: "25:1-32:32" },
      { title: "Duogo joge", range: "33:1-39:29" },
      { title: "Hekalu manyien", range: "40:1-48:35" },
    ]
  },
  "Daniel": {
    author: "Daniel",
    location: "Piny Babulon",
    date: "c. 536 KA POK KRISTO (BC)",
    summary: "Daniel nyiso ngima Daniel gi osiepene e piny Babulon, kendo fwenje mag giko mar ndalo. Nyiso ni Nyasaye e Ruoth e wi ruodhi duto, kendo pinyruodhe osiko nyaka chieng'.",
    overview: "Daniel ne oter e twech e Babulon to ne odag gi adiera gi geno e Nyasaye. Nyasaye nores gi e bug sibuoche kendo nogolo Shadrak, Meshak gi Abednego e kendo mach. Daniel noyudo fwenje mag giko mar ndalo ma nyiso loch mar Nyasaye e wi ruodhi duto, kod biro mar Wuod Dhano ma pinyruodhe ok rum (7:13-14).",
    sections: [
      { title: "Adiera e Babulon", range: "1:1-6:28" },
      { title: "Fwenje mag Daniel", range: "7:1-12:13" },
    ]
  },
  "Hosea": {
    author: "Hosea",
    location: "Israel",
    date: "c. 715 KA POK KRISTO (BC)",
    summary: "Hosea nyiso hera mar Nyasaye kuom ranyisi mar ngima Hosea ma chi ne owito. Nyiso ni Nyasaye ohero joge kata ka gijwang'e, kendo odwaro ni gidwog ire.",
    overview: "Hosea noluong mondo okend dhako ma ne nigi kido mar terruok, mondo obed ranyisi mar hera Nyasaye ne Israel ma ne osejwang'e. Kata ka jogo ne dhi ir nyiseche manono, Nyasaye ne dhi nyime herogi. Hosea noluongo jogo ni gidwog ir Nyasaye, nikech hera Nyasaye osiko. Wach maduong' en ni “Ahero ni adiera, ok misango” (6:6).",
    sections: [
      { title: "Hera Nyasaye ne Israel", range: "1:1-3:5" },
      { title: "Kum ne richo", range: "4:1-13:16" },
      { title: "Duogo ir Nyasaye", range: "14:1-9" },
    ]
  },
  "Joel": {
    author: "Joel",
    location: "Juda",
    date: "c. 835 KA POK KRISTO (BC)",
    summary: "Joel nyiso odiechieng' mar Jehova Nyasaye, ma en odiechieng' mar kum ne richo. Nokoro chiwo mar Roho Maler, kendo noluongo jogo mondo gilokre. Nyiso ni Ng'at ma luongo nying Jehova Nyasaye noresi.",
    overview: "Joel nokoro kum mar bonyo gi odiechieng' mar Jehova Nyasaye. Noluongo jogo mondo gilokre gi chunygi duto, kendo nokoro ni Nyasaye biro olo Roho Maler kuom ji duto (2:28-29), wach ma nochopo e Pentekost (Tich Joote 2). “Ng'ato ang'ata maluongo nying Jehova Nyasaye noresi” (2:32).",
    sections: [
      { title: "Kum mar bonyo", range: "1:1-20" },
      { title: "Lokreuru", range: "2:1-17" },
      { title: "Chiwo Roho Maler", range: "2:18-32" },
      { title: "Kum ne ogendini", range: "3:1-21" },
    ]
  },
  "Amos": {
    author: "Amos",
    location: "Israel",
    date: "c. 760-750 KA POK KRISTO (BC)",
    summary: "Amos ne en jakwath ma Nyasaye noluongo mondo okor ne Israel. Nokwero timbe maricho kod miriambo, kendo noluongo jogo ni tim makare mondo oyudore. Nyiso ni Nyasaye dwaro tim makare e wi misango.",
    overview: "Amos ne en jakwath kod jachok cham, to Nyasaye noluonge mondo okor ne Israel. Nokwero richo mag jogo, mwandu mar miriambo, kod lamo maonge tim. Wach maduong' en ni “tim makare mondo oyudore ka pi, kendo adiera ka aora mopong'” (5:24). Amos nokoro kum, to bende geno mar duoko joge.",
    sections: [
      { title: "Kum ne ogendini", range: "1:1-2:16" },
      { title: "Siem ne Israel", range: "3:1-6:14" },
      { title: "Fwenje abich", range: "7:1-9:15" },
    ]
  },
  "Obadia": {
    author: "Obadia",
    location: "Juda",
    date: "c. 840 KA POK KRISTO (BC)",
    summary: "Obadia e kitap matinie moloyo e Muma Machon. Nyiso kum mar Edom nikech sunga gi timbe mage ne jo-Israel, kendo nyiso ni pinyruodh Jehova Nyasaye nobed maduong'.",
    overview: "Obadia nokoro kum ne Edom, oganda mane oa kuom Esau, nikech ne gihero keth mar jo-Israel kendo ne gisungore. Nokoro ni Nyasaye biro locho kendo pinyruodhe nobed maduong' e piny duto. Puonj maduong' en ni sunga kelo kum, to Nyasaye rito joge.",
    sections: [
      { title: "Kum mar Edom", range: "1:1-14" },
      { title: "Odiechieng' Jehova", range: "1:15-21" },
    ]
  },
  "Jona": {
    author: "Jona",
    location: "Israel",
    date: "c. 760 KA POK KRISTO (BC)",
    summary: "Jona nyiso kaka Nyasaye ohero ogendini duto, ok jo-Israel kende. Nyiso ng'wono mar Nyasaye ne joma lokore, kendo puonjo ni ok onego waketh chuny ne joma Nyasaye ohero.",
    overview: "Jona noluong mondo odhi okor e Nineve, to noringo odhi yo machielo. Nyasaye noore nam maduong' mi nam moloye, to nokwoyo e ich rech. Kane Jona okoro wach Nyasaye e Nineve, jogo nolokore, kendo Nyasaye nong'wononegi. Jona nokecho, to Nyasaye nopuonje ni ohero ji duto. Yesu bende noluongo Jona kaka ranyisi mar thone gi chierne (Mathayo 12:40).",
    sections: [
      { title: "Jona rwako ng'wono", range: "1:1-2:10" },
      { title: "Nineve lokore", range: "3:1-4:11" },
    ]
  },
  "Mika": {
    author: "Mika",
    location: "Juda",
    date: "c. 700 KA POK KRISTO (BC)",
    summary: "Mika nokoro keth Samaria gi Jerusalem, to bende nokoro nywol Mesia e Bethlehem. Nyiso gima Nyasaye dwaro ni dhano otim: adiera, kech, kod wuoth mobolore.",
    overview: "Mika noluong jo-Juda mondo gilokre kendo nokoro keth Jerusalem. Kata kamano, nokoro ni Mesia nonywol e Bethlehem (5:2), wach ma nochopo kuom Yesu. Mika bende nopuonjo gima Nyasaye dwaro ni dhano otim: “tim gima kare, her kech, kod wuoth mobolore gi Nyasachi” (6:8).",
    sections: [
      { title: "Siem ne Juda", range: "1:1-3:12" },
      { title: "Nywol Mesia", range: "4:1-5:15" },
      { title: "Gima Nyasaye dwaro", range: "6:1-7:20" },
    ]
  },
  "Nahum": {
    author: "Nahum",
    location: "Juda",
    date: "c. 660 KA POK KRISTO (BC)",
    summary: "Nahum nyiso kum mar Nineve, dala maduong' mar Asuria, nikech richo. Nyiso ni Nyasaye nigi teko kendo adiera, to bende en kar pondo ne joma ogeno kuome.",
    overview: "Nahum nokoro keth mar Nineve, dala mane osando jo-Israel. Nyasaye en Nyasaye ma nyiego osiko, ma ok nyal weyo richo maok kum. To Nahum bende wacho ni “Jehova Nyasaye ber, en kar pondo e kinde mag chandruok, orito joma ogeno kuome” (1:7).",
    sections: [
      { title: "Duong' Nyasaye", range: "1:1-15" },
      { title: "Keth Nineve", range: "2:1-3:19" },
    ]
  },
  "Habakuk": {
    author: "Habakuk",
    location: "Juda",
    date: "c. 600 KA POK KRISTO (BC)",
    summary: "Habakuk nopenjo Nyasaye ni ang'o momiyo richo ne dhi nyime, kendo Nyasaye nodwoke. Nyiso ni joma kare nobed mangima kuom yie, kendo ngima mangima oa kuom geno Nyasaye.",
    overview: "Habakuk ne ochandore ka oneno richo e piny, mi openjo Nyasaye penjo mapek. Nyasaye nodwoke ni obiro kelo kum kuom joketho. Habakuk nong'ado ni “joma kare nobed mangima kuom yie” (2:4), wach ma ochopo e Injili. E gikone, nowacho ni kata ka gik moko ong'iel, obiro mor kuom Jehova Nyasaye (3:17-18).",
    sections: [
      { title: "Penjo mar Habakuk", range: "1:1-2:20" },
      { title: "Lamo mar Habakuk", range: "3:1-19" },
    ]
  },
  "Zefania": {
    author: "Zefania",
    location: "Juda",
    date: "c. 625 KA POK KRISTO (BC)",
    summary: "Zefania nyiso odiechieng' maduong' mar Jehova Nyasaye, ma biro kelo kum ne richo. To bende nyiso geno ni Nyasaye biro choko joge kendo nobed gi mor kodgi.",
    overview: "Zefania nokoro odiechieng' mar Jehova Nyasaye, ma en odiechieng' mar kum ne richo. Noluongo jogo mondo gimany Jehova Nyasaye ka pok chieng'no ochopo. Kata kamano, Zefania bende nokoro ni Nyasaye biro res joge, kendo “obiwo bedo gi mor maduong' kuomi, kendo obiro kweyo chunyi gi herane” (3:17).",
    sections: [
      { title: "Odiechieng' mar Jehova", range: "1:1-2:15" },
      { title: "Kum gi geno", range: "3:1-20" },
    ]
  },
  "Hagai": {
    author: "Hagai",
    location: "Jerusalem",
    date: "c. 520 KA POK KRISTO (BC)",
    summary: "Hagai noluongo jogo mondo oger hekalu mar Nyasaye. Nyiso ni nyaka wadwar pinyruodh Nyasaye mokwongo, kendo ni Nyasaye biro miyo hekalu marieny duong'.",
    overview: "Bang' duogo oa e twech, jogo ne oweyo gero hekalu kendo ne gidhi nyime gi ngima giwegi. Hagai noluongogi mondo gidwog e tich, kosingo ni Nyasaye nobed kodgi. Nokoro ni duong' mar hekalu mar ariyo biro moloyo mar mokwongo, kendo Nyasaye biro keto kuwe.",
    sections: [
      { title: "Luong mar gero hekalu", range: "1:1-15" },
      { title: "Duong' mar hekalu", range: "2:1-23" },
    ]
  },
  "Zekaria": {
    author: "Zekaria",
    location: "Jerusalem",
    date: "c. 520-470 KA POK KRISTO (BC)",
    summary: "Zekaria nokoro duogo joge, biro mar Mesia, kendo loch manyien. Fwenjege nyiso Yesu kaka Jatich, kaka ruoth, kendo kaka jakwath ma goe. Nyiso ni “ok timre kuom teko, to kuom Roho mara.”",
    overview: "Zekaria noluong jogo mondo gidwog ir Nyasaye kendo nokoro biro mar Mesia. Fwenjege nyiso Mesia ka Jakwath ma igoyo (13:7), Ruoth ma muol (9:9), kod ng'at mane ichwoyo (12:10). Bende nokoro ni tich Nyasaye “ok timre kuom nyalo kata kuom teko, to mana kuom Roho mara” (4:6).",
    sections: [
      { title: "Luong mar lokruok", range: "1:1-6:15" },
      { title: "Fwenje mar Mesia", range: "7:1-14:21" },
    ]
  },
  "Malaki": {
    author: "Malaki",
    location: "Jerusalem",
    date: "c. 430 KA POK KRISTO (BC)",
    summary: "Malaki en kitap mogik mar Muma Machon. Nyiso siem ne jodolo kod jogo, kendo nokoro biro mar jaotene kendo odiechieng' maduong' mar Jehova Nyasaye.",
    overview: "Malaki noluongo jogo mondo gidwog ir Nyasaye, nikech ne gichayo lamo, kendo ne gichiwo misango maricho. Nokoro biro mar jaotene (Yohana Ja-Batiso) ma biro iko yo ni Ruoth (3:1), kod duogo Elija. Malaki otieko Muma Machon gi geno mar biro mar Ruoth, ma ochopo e Injili.",
    sections: [
      { title: "Her Nyasaye ne joge", range: "1:1-5" },
      { title: "Siem ne jodolo", range: "1:6-2:17" },
      { title: "Odiechieng' mar Jehova", range: "3:1-4:6" },
    ]
  },
};
