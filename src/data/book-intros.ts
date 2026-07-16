export interface BookIntro {
  author: string;
  location: string;
  date: string;
  summary: string;
  overview: string;
  sections: { title: string; range: string }[];
}

export const BOOK_INTROS: Record<string, BookIntro> = {
  'Mathayo': {
    author: 'Mathayo Jaote',
    location: 'Palestine koso Suria',
    date: '60-70 AD',
    summary: 'Injili mar Mathayo nondik mondo onyis ni Yesu en Mesia mane osing',
    overview: 'Kitabuni wuoyo mang’eny kuom pinyruodh Nyasaye...',
    sections: [
      { title: 'Chakruok mar Yesu', range: '1:1-2:23' },
      { title: 'Tich Johana Ja-Batiso', range: '3:1-12' },
      // ... will add more later
    ]
  },
  'Mariko': {
    author: 'Mariko (Johana Mariko)',
    location: 'Rumi',
    date: '65-70 E YIK RUOTH (AD)',
    summary: 'Injili mar Mariko e Injili mokuongo mane ondiki. Opuonjo mang’eny kuom tich mane Yesu otiyo e piny.',
    overview: 'Mariko ne ok en achiel kuom joote apar gariyo, to ne en osiep Petro kendo ne owuotho gi Paulo gi Barnaba. Nondiko Injili mare mondo onyis ni Yesu en Jatich Nyasaye mane ochiwo ngimane nikech warruok mar piny. Kitabuni wuoyo matek kuom tije honni mane Yesu otimo kendo onyiso matek ni Yesu en Wuod Nyasaye mane nigi teko kuom gik moko duto.',
    sections: [
      { title: 'Chakruok mar tich Yesu', range: '1:1-13' },
      { title: 'Tich Yesu e Galili', range: '1:14-9:50' },
      { title: 'Wuoth mar dhi Jerusalem', range: '10:1-52' },
      { title: 'Odiechieng’ mag giko Jerusalem', range: '11:1-15:47' },
      { title: 'Chier mar Yesu', range: '16:1-20' }
    ]
  },
  'Luka': {
    author: 'Luka (Laktar)',
    location: 'Ok ong’ere',
    date: '65-70 E YIK RUOTH (AD)',
    summary: 'Luka nondiko Injili mare ne ng’at moro miluongo ni Theofilo.',
    overview: 'Luka ne en laktar kendo ne en osiep Paulo. Nondiko Injili mare konyisogo ni Yesu e Jawar mar piny mangima, ok ne Jo-Yahudi kende. Opuonjo mang’eny kuom kech mar Nyasaye ne joma odhier kendo joma piny ochayo. Kitabuni bende wuoyo mang\'eny kuom nywol mar Yesu kendo onyiso kaka tich Nyasaye chopo ne ji duto.',
    sections: [
      { title: 'Chakruok mar Yesu', range: '1:1-2:52' },
      { title: 'Tich Johana Ja-Batiso gi chakruok mar tich Yesu', range: '3:1-4:13' },
      { title: 'Tich Yesu e Galili', range: '4:14-9:50' },
      { title: 'Wuoth mar dhi Jerusalem', range: '9:51-19:27' },
      { title: 'Odiechieng’ mag giko Jerusalem', range: '19:28-23:56' },
      { title: 'Chier mar Yesu', range: '24:1-53' }
    ]
  },
  'Johana': {
    author: 'Johana Jaote',
    location: 'EFESO',
    date: '90-96 E YIK RUOTH (AD)',
    summary: 'Injili mar Johana nondiki gi Jaote Johana higni mang\'eny bang\' tho Yesu kod chierne. Nondike mondo joma some oyie kuom Kristo kendo mondo ni giyud ngima kuom nyinge.',
    overview: 'Johana ondiko weche motelo mana miyudo e kitabuni kende konyisogo ngima mane Yesu nigo gi Wuoro kapok onyuole e piny mondo onyis ni Yesu ne ok en ng’ama lich kende to ni ne en Nyasaye madier. Nitie honni kod puonj mang\'eny mag Yesu maok yudre kamoro amora makmana e kitabuni. Kwasomo sula 14-17 to wayudo puonj mane Yesu opuonjo godo jopuonjrene kapok otho. Bang\' tho gi chier Yesu wasomo kaka Yesu nofwenyore ni jootene. Injili mar Johana nigi puonj moko maok yudi e buge mamoko mag Injili moloyo to opuonjo kuom kit Nyasaye manie i Kristo kaachiel gi puonj matut kuom ngimane. Opuonjo kuome gi ngeche kaka ler, adiera, hera, jakwath maber, dhoot, chier gi ngima, pi mar ngima, makati ma adiera to gi mamoko. Weche mamit mwayudo e sula 14-17, nyisowa hera matut mane Yesu nigodo kuom joma oyie kaachiel gi kuwe ma yie kelo kain kuom Kristo.',
    sections: [
      { title: 'Chakruokne manyiso kaka Yesu en Nyasaye', range: '1:1-14' },
      { title: 'Tichne kane pok ochako Injili e Galili', range: '1:15-4:54' },
      { title: 'Injili dala mar Galili gi lwenje mane omonje Jerusalem.', range: '5:1-10:42' },
      { title: 'Chiero Lazaro koa kuom joma otho', range: '11:157' },
      { title: 'Giko mar tich Yesu', range: '12:1-13:38.' },
      { title: 'Puonj mogik mag Yesu', range: '14:1-17:26' },
      { title: 'Tho mar Yesu kod chierne', range: '18:1-20:10' },
      { title: 'Chier Yesu kod nenruokne', range: '20:11-21:25' }
    ]
  },
  'Tich Joote': {
    author: 'Luka',
    location: 'Ok ong’ere',
    date: '65-70 E YIK RUOTH (AD)',
    summary: 'Kitabu mar Tich Joote en ndiko machopo wi kama Injili mar Luka nogikie, ka Luka nyiso joma some ni tich mane Yesu ochako e piny, pod odhi nyime kotimo mano e ngima kanisa.',
    overview: 'Kitabuni e chakne opuonjo kaka joote nopong’ gi teko mar Nyasaye kendo ka giyalo matek ma chieng’no ji 3,000 norwako Yesu kaka Jawar mar chunygi 2:41. Opuonjo ngima mar kanisa ei Jerusalem, kaka Injili nolandore mochopo Samaria, kaachiel gi tich jaote Petro, kod sand mager mokuongo majoma noyie noyudo. Bang\' mae to koro kitabuni wuoyo kuom jaote Paulo kendo kaka nolando Injili ne dhout ogendini. Wuodhe nyadi dek mar tero Injili owuoye malach, kendo kitabuni orumo gi wuodh Paulo Rumi. Jopuonjre mamoko mag muma to wacho ni Luka nedwaro ndiko kitabu maradek manyiso kaka nogony Paulo e jela, wuodhene mamoko, makne kaachiel kod thone. Tich Joote nondiki mondo wang’e kaka Injili nolandore koa e gwenge Jo-Yahudi nyaka ochopo e dhout ogendini 1:8. Wach maber manyiso kaka Yesu notho, kendo nochier ne en wach mane ok nyal mana nyis bath piny konchiel kende, to Nyasaye nedwaro nong’ere e piny mangima. Mae emomiyo Nyasaye nomiyo joge teko mondo ochopi tijgi. Roho Maler e wuon tekono. Teko mar Nyasaye maduong’ kuom gik moko duto nenore kuom locho mar tich Injili kuom timbe mag piny kod sand, to kata obedoni onyalo miyo ngima ji mang’eny lal (mana kaka Petro gi Paulo ma Tich Joote wuoyo kuomgi). To giyudo loch kuom Kristo.',
    sections: [
      { title: 'Ndalo mag chakruok kanisa', range: '1:1-5:42' },
      { title: 'Sand kod landruok mar Injili', range: '6:1-9:31' },
      { title: 'Tich Petro mar tero Injili', range: '9:32-12:25' },
      { title: 'Wuodh Paulo mokuongo mar tero Injili', range: '13:1-14:28' },
      { title: 'Romo mane obedo Jerusalem', range: '15:1-41' },
      { title: 'Wuodh Paulo marariyo mar tero Injili', range: '16:1-18:22' },
      { title: 'Wuodh Paulo maradek mar tero Injili', range: '18:23-21:14' },
      { title: 'Mak mar Paulo kod wuodhe ma Rumi', range: '21:15-28:31' }
    ]
  },
  'Jo-Rumi': {
    author: 'Jaote Paulo',
    location: 'Korintho',
    date: '58 kata 59 E YIK RUOTH (AD)',
    summary: 'Paulo neni Korintho e wuodhe mar tero injili maradek kendo nochano kaka dodhi Rumi, kata obedo ninepok odhi kuno nyaka nene. Nondikonegi baruwani konyisogo kanisa ni en ng’a kendo konyisogi e yo machuok weche mane opuonjo mag muma.',
    overview: 'Tim makare mar Nyasaye, kaka otiyo gipiny kod adiera, chenro makare mar warruok, magi e puonj manie kitabuni. Nyasaye inyiso kaka ng’at maduong’, kendo Nyasaye maler mar piny mangima, ok onyal mbeko chik nikech gia kuome. Kendo kaluwore gi chikego, noloso yo mar warruok machalre ni Jo-Yahudi, kaachiel gi dhout ogendini kane ooro Wuode koa e polo mondo othone richo mag piny. Omiyo koro ng’ato ang’ata moyie kuom Yesu noyud warruok 10:9, kendo yudo teko Nyasaye kuom richo, e ngimane.',
    sections: [
      { title: 'Weche motelo', range: '1:1-17' },
      { title: 'Richo kod warruok kuom yie man kuom Kristo', range: '1:18-15:21' },
      { title: 'Loch kuom richo, e teko mar Kristo', range: '6:1-8:39' },
      { title: 'Chenro mar Nyasaye kuom Jo-Yahudi', range: '9:1-11:36' },
      { title: 'Kaka ngima gi dak Jakristo onego obedi', range: '12:1-15:13' },
      { title: 'Weche mogik', range: '15:14-16:27' }
    ]
  },
  '1 Jo-Korintho': {
    author: 'Jaote Paulo',
    location: 'Efeso',
    date: '55 E YIK RUOTH (AD)',
    summary: 'Paulo nondiko baruwani ne kanisa mar Korintho mondo okonygi e peche mang’eny mane gitiyo kuro.',
    overview: 'Korintho ne en dala maduong’ kendo ne en gi joma moa e pinje mang’eny. Kanisa mar kuro noyudo nigi lwenje e kindgi, kendo Paulo nondiko baruwani mondo opuonjgi kuom hera, kendo kaka ginyalo dak kaachiel e kuwe. Opuonjo mang’eny kuom Mich mar Roho Maler kendo kuom chier mar joma otho (sula 15).',
    sections: [
      { title: 'Wach msalaba kendo rieko mar Nyasaye', range: '1:1-2:16' },
      { title: 'Lwenje ei kanisa', range: '3:1-4:21' },
      { title: 'Dak maler kod winjruok', range: '5:1-7:40' },
      { title: 'Hera kod mich mar Roho', range: '8:1-14:40' },
      { title: 'Chier mar joma otho', range: '15:1-58' },
      { title: 'Gik mogik', range: '16:1-24' }
    ]
  },
  '2 Jo-Korintho': {
    author: 'Jaote Paulo',
    location: 'Makedonia',
    date: '55-56 E YIK RUOTH (AD)',
    summary: 'Paulo nondiko baruwani mar ariyo ne kanisa mar Korintho mondo ohokgi kendo onyisgi ratiro mar tichne kaka jaote.',
    overview: 'Bang’ ndiko baruwa mokuongo, ne nitie joma noyore godo Paulo e kanisa mar Korintho. Nondiko baruwani mondo omiyo ji winjo tiende maber, kendo mondo ochikgi kuom chiwo (sula 8-9). Opuonjo mang’eny kuom riwa hera, kendo ni teko mar Nyasaye fwenyore e nyawo dhano.',
    sections: [
      { title: 'Weche motelo kod hokruok', range: '1:1-11' },
      { title: 'Paulo neno tichne kaka jaote', range: '1:12-7:16' },
      { title: 'Chiwo ne kanyakla ei Jerusalem', range: '8:1-9:15' },
      { title: 'Paulo siro tichne', range: '10:1-13:10' },
      { title: 'Giko', range: '13:11-14' }
    ]
  },
  'Jo-Galatia': {
    author: 'Jaote Paulo',
    location: 'Ok ong’ere',
    date: '48 kata 49 E YIK RUOTH (AD)',
    summary: 'Paulo nondiko baruwani ka siemogi kuom puonj marachni konyisogi ni dhano yudo warruok mana kuom ng’wono mar Nyasaye kokadho e yie kuom Kristo.',
    overview: 'Paulo noseyalo ne Jo-Galatia e wuodhe mar tero Injili mokwongo. Bang\' kane osewuok kae to nenore ni jo-Yahudi moko moyie nobiro ka chuno jo Ogendini moyie ni nyaka gimak chik Musa eka inyalo wargi. Paulo siro maa motegno kowuoyo kuome owuon kaka Jaote kendo ojiwogi mondo giwuothi kaka jo-Kristo.',
    sections: [
      { title: 'Paulo osiro kare kod Injili bende', range: '1:1-2:21' },
      { title: 'Thuolo kuom kuong\' mar chik', range: '3:1-24' },
      { title: 'Injili nigi teko maloyo chik', range: '3:25-4:31' },
      { title: 'Thuolo mar ja-Kristo', range: '5:1-26' },
      { title: 'Weche moko mag puonj', range: '6:1-18' }
    ]
  },
  'Jo-Efeso': {
    author: 'Jaote Paulo',
    location: 'Rumi',
    date: '60 kata 61 E YIK RUOTH (AD)',
    summary: 'Paulo nondiko baruwani mondo ohogo kendo ojiwgo jo-Kristo mane odak e piny Asia Matin.',
    overview: 'Baruwani Paulo nondike kaen e twech e dala mar Rumi. Otemo nyisogi weche mamoko mane osetimore chon, aa chakruok kama Nyasaye noselosoe chenro mar piny, nyaka kawuono makoro Nyasaye chiwo warruok ne joma oyie kuom Kristo. Onyisogi ni kaka wanto wan kaachiel e ringre Kristo, wan gi teko mar chungo motegno.',
    sections: [
      { title: 'Chenro mar Nyasaye gi warruok mar ng\'at moyie', range: '1:1-2:22' },
      { title: 'Midhiero mar Injili', range: '3:1-21' },
      { title: 'Ngima mar ja-Kristo e piny', range: '4:1-5:21' },
      { title: 'Dak mar ja-Kristo gijowadgi', range: '5:22-6:9' },
      { title: 'Lwenj ja-Kristo kod richo', range: '6:10-24' }
    ]
  },
  'Jo-Filipi': {
    author: 'Jaote Paulo',
    location: 'Rumi',
    date: '60 kata 61 E YIK RUOTH (AD)',
    summary: 'Baruwani Paulo nondike ne osiepene moko mogeno kogoyo nigi erokamano kuom chiwo mane gikowone.',
    overview: 'Paulo nondike kaen e twech Rumi. Onyiso jo-Filipi ni mondo gidembre kaka Kristo. Ojiwogi kowacho ni, "Ka angima, to angima nikech Kristo, to ka atho to en ohala." Opuonjogi ni polo e thurwa, omiyo onego wabed mamor kinde duto.',
    sections: [
      { title: 'Paulo gi chandruok kaen Rumi', range: '1:1-30' },
      { title: 'Ranyisi mar muolo Yesu', range: '2:1-30' },
      { title: 'Siem kod puonj kuom dak ja-Kristo', range: '3:1-21' },
      { title: 'Kuwe mar Nyasaye kod chik Nyasaye', range: '4:1-23' }
    ]
  },
  'Jo-Kolosai': {
    author: 'Jaote Paulo',
    location: 'Rumi',
    date: '60 kata 61 E YIK RUOTH (AD)',
    summary: 'Paulo nondiko baruwani mondo okwed puonj mag miriambo mane chando kanisa mar Kolosai.',
    overview: 'Paulo nondiko baruwani kaen e twech Rumi, ne dala mane pok olimo nyaka nene. Opuonjo ni Kristo en Nyasaye adiera kendo kido duto mag Nyasaye manyaka chieng’ nitie kuome. Opuonjogi bende kaka ginyalo dak kaka jo-Kristo ka gikwedo rieko manono mag dhano.',
    sections: [
      { title: 'Lemb Paulo mokwongo', range: '1:1-14' },
      { title: 'Duong\' mar Kristo', range: '1:15-2:3' },
      { title: 'Siem kuom yie mag miriambo', range: '2:4-23' },
      { title: 'Puonj kuom dak ja-Kristo', range: '3:1-4:1' },
      { title: 'Puonj kuom lamo gi weche mogik', range: '4:2-18' }
    ]
  },
  '1 Jo-Thesalonika': {
    author: 'Jaote Paulo',
    location: 'Korintho',
    date: '51 E YIK RUOTH (AD)',
    summary: 'Paulo nondiko baruwani mondo ojiw kendo opuonj kanisa manyien mar Thesalonika.',
    overview: 'Baruwani en achiel kuom buge machon moloyo mag muma manyien. Paulo ohero kanisani kendo oywaknegi erokamano. Opuonjogi kuom chier mar jomaler kod biro mar Ruoth.',
    sections: [
      { title: 'Erokamano kuom yie mar Jo-Thesalonika', range: '1:1-3:13' },
      { title: 'Ngima maler kod biro Ruoth', range: '4:1-5:28' }
    ]
  },
  '2 Jo-Thesalonika': {
    author: 'Jaote Paulo',
    location: 'Korintho',
    date: '51-52 E YIK RUOTH (AD)',
    summary: 'Paulo nondiko baruwani mar ariyo mondo ogol confusion mane nitie kuom biro mar Ruoth.',
    overview: 'Jomoko ne parowa ni "Odiechieng\' mar Ruoth" osechopo. Paulo siemogi kowacho ni nyaka gik moko moko otimre eka Ruoth bi kendo. Ojiwogi mondo gichu e tich maber.',
    sections: [
      { title: 'Biro mar Ruoth kod kum ne jomaricho', range: '1:1-12' },
      { title: 'Ng\'ama rach kod biro mar Ruoth', range: '2:1-17' },
      { title: 'Tich maber kod weche mogik', range: '3:1-18' }
    ]
  },
  '1 Timotheo': {
    author: 'Jaote Paulo',
    location: 'Makedonia',
    date: '62-64 E YIK RUOTH (AD)',
    summary: 'Paulo nondiko baruwani ne Timotheo mondo okonye e rito kanisa mar Efeso.',
    overview: 'Opuonjo Timotheo kaka rito kanisa kendo kaka yiego jotend kanisa (joduong\' gi jodikoni). Osieme mondo orangre gi puonj mag miriambo.',
    sections: [
      { title: 'Siem kuom puonj miriambo', range: '1:1-20' },
      { title: 'Wach lamo kod jotend kanisa', range: '2:1-3:16' },
      { title: 'Puonj ne Timotheo kendo kaka orito kanisa', range: '4:1-6:21' }
    ]
  },
  '2 Timotheo': {
    author: 'Jaote Paulo',
    location: 'Rumi (Twech)',
    date: '66-67 E YIK RUOTH (AD)',
    summary: 'Ma e barua mogik mane Paulo ondiko kapok onege.',
    overview: 'Paulo nigi kwayo ne Timotheo mondo obi limne mapiyo. Ojiwe mondo ochung\' motegno e yie kendo oywakne maber Wach Nyasaye.',
    sections: [
      { title: 'Agera ne Timotheo', range: '1:1-18' },
      { title: 'Tich maber mar Kristo', range: '2:1-26' },
      { title: 'Ndalo mag giko kod Wach Nyasaye', range: '3:1-4:5' },
      { title: 'Weche mogik mag Paulo', range: '4:6-22' }
    ]
  },
  'Tito': {
    author: 'Jaote Paulo',
    location: 'Ok ong’ere',
    date: '63-65 E YIK RUOTH (AD)',
    summary: 'Paulo nondiko baruwani ne Tito mondo okonye e rito kanisni mag Krete.',
    overview: 'Chik manyiso kaka jotend kanisa onego obedi kendo kaka jo-Kristo onego odak e piny manyiso timbe mabeyo.',
    sections: [
      { title: 'Yiero jotend kanisa', range: '1:1-16' },
      { title: 'Dak maber mar ja-Kristo', range: '2:1-3:15' }
    ]
  },
  'Filemon': {
    author: 'Jaote Paulo',
    location: 'Rumi',
    date: '60-62 E YIK RUOTH (AD)',
    summary: 'Baruwa machwok mane Paulo ondiko ne Filemon kuom Onisimo.',
    overview: 'Onisimo ne en misumba Filemon maneoringo. Bang\'e noromo gi Paulo mi oyie. Paulo koro kwayo Filemon mondo orwak Onisimo kaka owadgi e Kristo.',
    sections: [
      { title: 'Lamo kod pak ne Filemon', range: '1-7' },
      { title: 'Kwayo kuom Onisimo', range: '8-25' }
    ]
  },
  'Hibrania': {
    author: 'Ok ong’ere',
    location: 'Ok ong’ere',
    date: '67-69 E YIK RUOTH (AD)',
    summary: 'Baruwani nondik ne jo-kristo ma jo-Yahudi mane gajore ni gidue kendo e chik jo-Yahudi nikech sand.',
    overview: 'Onyiso ni Kristo duong\' moloyo malaike, Musa, kod dolo machon. Ojiwogi mondo gimak yie matek (sula 11).',
    sections: [
      { title: 'Kristo duong\' moloyo malaike kod Musa', range: '1:1-4:13' },
      { title: 'Kristo Jadolo Maduong\'', range: '4:14-10:18' },
      { title: 'Yie kod kinda', range: '10:19-12:29' },
      { title: 'Weche mogik', range: '13:1-25' }
    ]
  },
  'Jakobo': {
    author: 'Jakobo',
    location: 'Jerusalem',
    date: '45-50 E YIK RUOTH (AD)',
    summary: 'Jakobo nondiko baruwani ne jo-Kristo duto mogur e piny.',
    overview: 'Puonj mathoth kuom dak maber manyiso yie kuom timbe mabeyo. Osiemi kuom rieko ma piny kod rieko mar polo.',
    sections: [
      { title: 'Yie kod temruok', range: '1:1-18' },
      { title: 'Yie kod tich', range: '1:19-2:26' },
      { title: 'Rieko kod dho dhano', range: '3:1-4:12' },
      { title: 'Siem kuom mwandu kod kinda', range: '4:13-5:20' }
    ]
  },
  '1 Petro': {
    author: 'Jaote Petro',
    location: 'Rumi',
    date: '62-64 E YIK RUOTH (AD)',
    summary: 'Petro nondiko baruwani mondo ojiw jo-Kristo mane sandore.',
    overview: 'Ojiwogi ni gichung\' motegno kendo gisak e hera nikech warruok mane giyudo kuom Kristo.',
    sections: [
      { title: 'Warruok manyien kod ngima maler', range: '1:1-2:10' },
      { title: 'Sandruok ne Kristo', range: '2:11-4:19' },
      { title: 'Puonj ne jaduong kanisa kod jandiko', range: '5:1-14' }
    ]
  },
  '2 Petro': {
    author: 'Jaote Petro',
    location: 'Rumi',
    date: '65-68 E YIK RUOTH (AD)',
    summary: 'Petro siemo kanisa kuom jopuonj miriambo.',
    overview: 'Opuonjogi mondo gidhi nyime dongo e ng\'eyo mar Nyasaye kendo rito biro mar Ruoth.',
    sections: [
      { title: 'Dongo e yie', range: '1:1-21' },
      { title: 'Jopuonj mag miriambo', range: '2:1-22' },
      { title: 'Biro mar Ruoth', range: '3:1-18' }
    ]
  },
  '1 Yohana': {
    author: 'Jaote Johana',
    location: 'Efeso',
    date: '90-95 E YIK RUOTH (AD)',
    summary: 'Johana nondiko baruwani mondo onyis ji adiera mar Yesu kendo mondo gisedak e hera.',
    overview: 'Opuonjo ji manyalo ng\'eyo Nyasaye. Nyasaye en ler kendo Nyasaye en hera. Ng\'at man gi Nyasaye onego oher wadgi.',
    sections: [
      { title: 'Nyasaye en ler', range: '1:1-2:29' },
      { title: 'Nyasaye en hera', range: '3:1-4:21' },
      { title: 'Warruok manyaka chieng\'', range: '5:1-21' }
    ]
  },
  '2 Yohana': {
    author: 'Jaote Johana',
    location: 'Efeso',
    date: '90-95 E YIK RUOTH (AD)',
    summary: 'Baruwa machwok ne "miyo moyier".',
    overview: 'Ojiwogi mondo gikud adiera kendo giwuothie e hera, kendo gitang\' gi jopuonj miriambo.',
    sections: [
      { title: 'Wuotho e adiera kod hera', range: '1-13' }
    ]
  },
  '3 Yohana': {
    author: 'Jaote Johana',
    location: 'Efeso',
    date: '90-95 E YIK RUOTH (AD)',
    summary: 'Baruwa ne Gaius.',
    overview: 'Johana pako Gaius nikech rwakoye welo kod jowete tich. Osundo Diotrefe kendo pako Demetrio.',
    sections: [
      { title: 'Pako Gaius kod siem kuom Diotrefe', range: '1-15' }
    ]
  },
  'Juda': {
    author: 'Juda',
    location: 'Ok ong’ere',
    date: '65-80 E YIK RUOTH (AD)',
    summary: 'Juda siemo kanisa kuom jomaricho mane osedonjo e dier ji.',
    overview: 'Ojiwogi mondo giked matek kuom yie mane ochiwnegi. Onyiso kaka Nyasaye biro kumogi.',
    sections: [
      { title: 'Siem kuom joparicho', range: '1-16' },
      { title: 'Kinda kod lamo', range: '17-25' }
    ]
  },
  'Fweny': {
    author: 'Jaote Johana',
    location: 'Patmos',
    date: '95-96 E YIK RUOTH (AD)',
    summary: 'Kitabu mar Fweny e kitabu mogik e muma manyien, kendo Johana nondiko fweny mane Nyasaye onyise kendo dhood Johana.',
    overview: 'Johana nondiko baruwani kane en e twech e chula mar Patmos. Kitabuni opong\' gi ngero mathoth manyiso locho mar Nyasaye kuom Satan, kendo manyiso kaka jo-Kristo biro loyo sand duto kendo dak gi Nyasaye chieng\' maber e Jerusalem Manyien.',
    sections: [
      { title: 'Weche motelo kod baruwa ne kanise abiriyo', range: '1:1-3:22' },
      { title: 'Fweny mar polo kod siche abiriyo', range: '4:1-8:1' },
      { title: 'Turumbe abiriyo', range: '8:2-11:19' },
      { title: 'Lweny mar Nyasaye gi ng\'ama rach', range: '12:1-14:20' },
      { title: 'Agulu mag mirima gi kethruok Babilon', range: '15:1-19:10' },
      { title: 'Loch Kristo mar higa alufu achiel kod bura mogik', range: '19:11-20:15' },
      { title: 'Jerusalem manyien kod giko', range: '21:1-22:21' }
    ]
  }
};
