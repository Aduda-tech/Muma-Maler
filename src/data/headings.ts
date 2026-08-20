// Section headings (NT from Ratil, OT from Biblica Open New Luo Translation)
export interface HeadingEntry {
  verse: number;
  title: string;
}

export const HEADINGS: Record<string, Record<number, HeadingEntry[]>> = {

  "Mathayo": {
    1: [
      { verse: 1, title: "Nonro Mar Anywola Mar Yesu" },
      { verse: 18, title: "Nywol Mar Yesu Kristo" },
    ],
    2: [
      { verse: 1, title: "Limbe Mar Joma Riek" },
      { verse: 13, title: "Tony Dhi Misiri" },
      { verse: 19, title: "Dok Nazareth" },
    ],
    3: [
      { verse: 1, title: "Johana Ja-Batiso Oloso Yo" },
      { verse: 13, title: "Batiso Mar Yesu" },
    ],
    4: [
      { verse: 1, title: "Tem Mar Yesu" },
      { verse: 12, title: "Yesu Ochako Yalo" },
      { verse: 18, title: "Luong Mar Jopuonjre Mokwongo" },
      { verse: 23, title: "Yesu Ochango Joma Tuo" },
    ],
    5: [
      { verse: 1, title: "Kit Joma Ogwedhi" },
      { verse: 13, title: "Chumbi Gi Ler" },
      { verse: 17, title: "Chopo Chik" },
      { verse: 21, title: "Nek" },
      { verse: 27, title: "Terruok" },
      { verse: 31, title: "Ketho Keny" },
      { verse: 33, title: "Kuong’ruok" },
      { verse: 38, title: "Wang’ Kar Wang’" },
      { verse: 43, title: "Hero Wasigu" },
    ],
    6: [
      { verse: 1, title: "Chiwone Joma Ochando" },
      { verse: 5, title: "Lamo" },
      { verse: 16, title: "Tweyo Chiemo" },
      { verse: 19, title: "Mwandu Manie Polo" },
      { verse: 25, title: "Kik Uluor" },
    ],
    7: [
      { verse: 1, title: "Ng’ado Ne Ji Bura." },
      { verse: 7, title: "Kwa, Dwar, Dwong’" },
      { verse: 13, title: "Dho Rangach Madiny Kod Dho Rangach Malach" },
      { verse: 15, title: "Yien Kod Olembege" },
      { verse: 24, title: "Jogedo Mariek Gi Jogedo Mofuwo" },
    ],
    8: [
      { verse: 1, title: "Ng’at Man-gi Dhoho" },
      { verse: 5, title: "Yie Mar Ja-Kenturo" },
      { verse: 14, title: "Yesu Ochango Ji Mang’eny" },
      { verse: 18, title: "Nengo Mar Luwo Yesu" },
      { verse: 23, title: "Yesu Okweyo Ahiti" },
      { verse: 28, title: "Chang Mar Ji Ariyo Man-gi Jochiende" },
    ],
    9: [
      { verse: 1, title: "Yesu Ochango Ng’ama Nigi Athany" },
      { verse: 9, title: "Luong Mar Mathayo" },
      { verse: 14, title: "Openj Yesu wach kuom Tweyo Chiemo" },
      { verse: 18, title: "Nyako Motho Gi Dhako Matuo" },
      { verse: 27, title: "Yesu Ochango Muofu Gi Momo" },
      { verse: 35, title: "Jotich Nok" },
    ],
    10: [
      { verse: 1, title: "Yesu Ooro Jopuonjre Apar Gariyo" },
    ],
    11: [
      { verse: 1, title: "Yesu Gi Johana Jabatiso" },
      { verse: 20, title: "Malit Ma Taonde Modagi Lokore Biro Neno" },
      { verse: 25, title: "Yweyo Ne Joma Ojony" },
    ],
    12: [
      { verse: 1, title: "Ruodh Sabato" },
      { verse: 15, title: "Jatich Nyasaye Moyier" },
      { verse: 22, title: "Yesu Gi Belzebub" },
      { verse: 38, title: "Ranyisi Mar Jona" },
      { verse: 46, title: "Min Yesu Gi Owetene" },
    ],
    13: [
      { verse: 1, title: "Ngech Jakomo" },
      { verse: 24, title: "Ngech Buya" },
      { verse: 31, title: "Ngech Koth Karadali Gi Ngech Thowi" },
      { verse: 36, title: "Onyis Tiend Ngech Buya" },
      { verse: 44, title: "Ngech Mwandu Mopandi Kod Kidi Ma Nengone Tek" },
      { verse: 47, title: "Ngech Gogo" },
      { verse: 53, title: "Janabi Maok Oluor" },
    ],
    14: [
      { verse: 1, title: "Ong’ad Wi Johana Ja- Batiso" },
      { verse: 13, title: "Yesu Opidho Ji Alufu Abich." },
      { verse: 22, title: "Yesu Owuotho Ewi Pi" },
    ],
    15: [
      { verse: 1, title: "Gik Maler Kod Gik Mogak" },
      { verse: 21, title: "Yie Mar Chi Kanaan" },
      { verse: 29, title: "Yesu Opidho Ji Alufu Ang’wen" },
    ],
    16: [
      { verse: 1, title: "Kwayo Mar Ranyisi" },
      { verse: 5, title: "Thowi Mar Jo Farisai Gi Jo Sadukai" },
      { verse: 13, title: "Petro Ohulo Ni Yesu En Ng’a" },
      { verse: 21, title: "Yesu Okoro Thone" },
    ],
    17: [
      { verse: 1, title: "Kit Yesu Olokore" },
      { verse: 14, title: "Ochang Wuowi Mane Nigi Jachien" },
      { verse: 24, title: "Osuru Mar Hekalu" },
    ],
    18: [
      { verse: 1, title: "Ng’at Maduong’ Moloyo E Pinyruodh Polo" },
      { verse: 10, title: "Ngech Rombo Molal" },
      { verse: 15, title: "Owadu Mokethoni" },
      { verse: 21, title: "Ngech Jatich Maonge Kech" },
    ],
    19: [
      { verse: 1, title: "Ketho Keny" },
      { verse: 13, title: "Nyithindo Matindo Kod Yesu" },
      { verse: 16, title: "Wuowi Ma Jamoko" },
    ],
    20: [
      { verse: 1, title: "Ngech Jotich Manie Puoth Mzabibu" },
      { verse: 17, title: "Yesu Ochako Okoro Thone Kendo" },
      { verse: 20, title: "Kwayo Mar Miyo" },
      { verse: 29, title: "Muofni Ariyo Oneno" },
    ],
    21: [
      { verse: 1, title: "Yesu Odonjo Jerusalem Gi Rwak Maduong’" },
      { verse: 12, title: "Yesu Odonjo E Hekalu" },
      { verse: 18, title: "Yiend Ng’owo Oner" },
      { verse: 23, title: "Opingi Teko Yesu" },
      { verse: 28, title: "Ngech Yawuowi Ariyo" },
      { verse: 33, title: "Ngech Jorit Puodho" },
    ],
    22: [
      { verse: 1, title: "Ngech Nyasi Mar Arus" },
      { verse: 15, title: "Golo Osuru Ne Kaisar" },
      { verse: 23, title: "Wach Kend Chieng’ Chier" },
      { verse: 34, title: "Chik Maduong’ Mogik" },
      { verse: 41, title: "Kristo En Wuod Ng’a?" },
    ],
    23: [
      { verse: 1, title: "Chandruok Abiriyo" },
    ],
    24: [
      { verse: 1, title: "Ranyisi Mag Ndalo Giko" },
      { verse: 36, title: "Odiechieng’ Gi Saa Ok Ong’ere" },
    ],
    25: [
      { verse: 1, title: "Ngech Nyiri Apar" },
      { verse: 14, title: "Ngech Talanta" },
      { verse: 31, title: "Rombe Gi Diek" },
    ],
    26: [
      { verse: 1, title: "Chenro Mar Nego Yesu" },
      { verse: 6, title: "Owir Yesu Bethani" },
      { verse: 14, title: "Judas Oyie Ndhogo Yesu" },
      { verse: 17, title: "Pasaka Mar Ruoth" },
      { verse: 31, title: "Yesu Okoro Ni Petro Biro Kwede" },
      { verse: 36, title: "Gethsemane" },
      { verse: 47, title: "Yesu Omaki" },
      { verse: 57, title: "Yesu E Nyim Sanhedrin" },
      { verse: 69, title: "Petro Okwedo Yesu" },
    ],
    27: [
      { verse: 1, title: "Judas Odere Owuon" },
      { verse: 11, title: "Yesu E Nyim Pilato" },
      { verse: 27, title: "Askeche Ojaro Yesu" },
      { verse: 32, title: "Gur Mar Yesu" },
      { verse: 45, title: "Tho Mar Yesu" },
      { verse: 57, title: "Ik Mar Yesu" },
      { verse: 62, title: "Jarito Mane Nie Liel" },
    ],
    28: [
      { verse: 1, title: "Chier Mar Yesu" },
      { verse: 11, title: "Milome Mar Jorito" },
      { verse: 16, title: "Ote Maduong’" },
    ],
  },
  "Mariko": {
    1: [
      { verse: 1, title: "Johana Jabatiso Oiko Yor Yesu" },
      { verse: 9, title: "Yesu Otisi Kendo Otem" },
      { verse: 14, title: "Luong Mar Jopuonjre Mokwongo" },
      { verse: 21, title: "Yesu Oriembo Jachien Marach" },
      { verse: 29, title: "Yesu Ochango Ji Mathoth." },
      { verse: 35, title: "Yesu Olemo Kar Kende" },
      { verse: 40, title: "Ng’at Man-gi Dhoho" },
    ],
    2: [
      { verse: 1, title: "Yesu Ochango Ja Athany" },
      { verse: 13, title: "Luong Mar Lawi" },
      { verse: 18, title: "Openj Yesu Wach Tweyo Chiemo" },
      { verse: 23, title: "Ruodh Sabato" },
    ],
    3: [
      { verse: 7, title: "Oganda Maduong’ Oluwo Yesu" },
      { verse: 13, title: "Walo Joote Apar Gariyo" },
      { verse: 20, title: "Yesu Kod Belzebub" },
      { verse: 31, title: "Min Yesu Gi Owetene" },
    ],
    4: [
      { verse: 1, title: "Ngech Jachuoyo" },
      { verse: 21, title: "Taya Man Kama Oting’ore" },
      { verse: 26, title: "Ngech Kodhi Madongo" },
      { verse: 30, title: "Ngech Koth Karadali" },
      { verse: 35, title: "Yesu Okweyo Ahiti" },
    ],
    5: [
      { verse: 1, title: "Ng’at Ma Jachien Sando Ochangi" },
      { verse: 21, title: "Nyako Motho Kod Dhako Matuo" },
    ],
    6: [
      { verse: 1, title: "Janabi Maonge Luor" },
      { verse: 7, title: "Yesu Ooro Ji Apar Gariyo" },
      { verse: 14, title: "Ong’ad Wi Johana Jabatiso" },
      { verse: 30, title: "Yesu Opidho Ji Alufu Abich" },
      { verse: 45, title: "Yesu Owuotho E Wi Pi" },
    ],
    7: [
      { verse: 1, title: "Gik Maler Gi Gik Mochido." },
      { verse: 24, title: "Yie Mar Dhako Ma Ja Grik-Foinike" },
      { verse: 31, title: "Ochang Ng’ama Ite Odino Kendo Mamomo." },
    ],
    8: [
      { verse: 1, title: "Yesu Opidho Ji Alufu Ang’wen" },
      { verse: 14, title: "Thop Jo Farisai Gi Mar Herode" },
      { verse: 22, title: "Chang Mar Muofu E Bethsaida" },
      { verse: 27, title: "Petro Ohulo Ni Yesu E Kristo" },
      { verse: 31, title: "Yeus Okoro Tho Mare" },
    ],
    9: [
      { verse: 2, title: "Kit Yesu Olokore" },
      { verse: 14, title: "Chang Mar Wuowi Man-gi Jachien Marach" },
      { verse: 33, title: "En Ng’ano Maduong’ Moloyo" },
      { verse: 38, title: "Ng’at Maok Ked Kodwa En Jakorwa" },
      { verse: 42, title: "Rwako Nyawadu E Richo" },
    ],
    10: [
      { verse: 1, title: "Ketho Keny" },
      { verse: 13, title: "Nyithindo Matindo Kod Yesu" },
      { verse: 17, title: "Rawera Ma Jamoko" },
      { verse: 32, title: "Yesu Okoro Kendo Thone" },
      { verse: 35, title: "Kwayo Mar Jakobo Gi Yohana" },
      { verse: 46, title: "Bartimau Ma Muofu Oneno" },
    ],
    11: [
      { verse: 1, title: "Donjo E Dala Gi Loch" },
      { verse: 12, title: "Yesu Oriembo Ji Ei Hekalu." },
      { verse: 20, title: "Yiend Ng’owo Motwo" },
      { verse: 27, title: "Openj Teko Ma Yesu Nigo" },
    ],
    12: [
      { verse: 1, title: "Ngech Jorit Puodho" },
      { verse: 13, title: "Chulo Osuru Ni Kaisari" },
      { verse: 18, title: "Wach Kuom Kendruok Bang’ Chier" },
      { verse: 28, title: "Chik Maduong’ Moloyo" },
      { verse: 35, title: "Kristo En Wuod Ng’a" },
      { verse: 41, title: "Chiwo Mar Chi Liel" },
    ],
    13: [
      { verse: 1, title: "Ranyisi Mag Ndalo Giko" },
      { verse: 32, title: "Odiechieng’ Kod Saa Ok Ong’ere" },
    ],
    14: [
      { verse: 1, title: "Owir Yesu Gi Mo Bethania" },
      { verse: 12, title: "Pasaka Mar Ruoth" },
      { verse: 27, title: "Yesu Ohulo Ni Petro Biro Kwede" },
      { verse: 32, title: "Yesu Olemo Gethsemane" },
      { verse: 43, title: "Omak Yesu" },
      { verse: 53, title: "Oter Yesu E Nyim Sanhedrin." },
      { verse: 66, title: "Petro Okwedo Yesu" },
    ],
    15: [
      { verse: 1, title: "Oter Yesu E Nyim Pilato" },
      { verse: 16, title: "Askeche Ocharo Yesu" },
      { verse: 21, title: "Ogur Yesu E Msalaba" },
      { verse: 33, title: "Yesu Otho" },
      { verse: 42, title: "Oiki Yesu" },
    ],
    16: [
      { verse: 1, title: "Yesu Ochier" },
    ],
  },
  "Luka": {
    1: [
      { verse: 1, title: "Wach Motelo" },
      { verse: 5, title: "Nyuol Johana Jabatiso Onyis Motelo" },
      { verse: 26, title: "Nyuol Yesu Onyis Motelo." },
      { verse: 39, title: "Mariam Olimo Elizabeth." },
      { verse: 46, title: "Wende Mariam" },
      { verse: 57, title: "Nyuol Mar Johana Jaabatiso" },
      { verse: 67, title: "Wend Zakaria" },
    ],
    2: [
      { verse: 1, title: "Nyuol Mar Yesu" },
      { verse: 8, title: "Jokwadh Rombe Kod Malaike" },
      { verse: 21, title: "Oter Yesu E Hekalu" },
      { verse: 41, title: "Wuowi Yesu Ni E Hekalu" },
    ],
    3: [
      { verse: 1, title: "Johana Jabatiso Loso Yo" },
      { verse: 21, title: "Batiso Gi Anywola Mar Yesu" },
    ],
    4: [
      { verse: 1, title: "Tem Mar Yesu" },
      { verse: 14, title: "Yesu Okwedi E Nazareth" },
      { verse: 31, title: "Yesu Oriembo Jachien Oko" },
      { verse: 38, title: "Yesu Chango Ji Mang’eny" },
    ],
    5: [
      { verse: 1, title: "Luong Mar Jopuonjre Mokwongo." },
      { verse: 12, title: "Ng’at Man-gi Dhoho." },
      { verse: 17, title: "Yesu Ochango Jathany" },
      { verse: 27, title: "Luong Mar Lawi" },
      { verse: 33, title: "Yesu Openji Kuom Wach Tueyo Chiemo" },
    ],
    6: [
      { verse: 1, title: "Ruodh Sabato" },
      { verse: 12, title: "Jopuonjre Apar Gariyo" },
      { verse: 17, title: "Gweth Gi Kuong’" },
      { verse: 27, title: "Hera Ni Wasigu" },
      { verse: 37, title: "Ng’ado Bura Ni Joma Moko" },
      { verse: 43, title: "Yath Gi Olembene" },
      { verse: 46, title: "Jagedo Mariek Kod Mofuwo" },
    ],
    7: [
      { verse: 1, title: "Yie Mar Jaduong’ Lweny" },
      { verse: 11, title: "Yesu Ochiero Wuod Chi Liel" },
      { verse: 18, title: "Yesu Kod Johana Jabatiso" },
      { verse: 36, title: "Yesu Owir Gi Mo Kod Dhako Majaricho" },
    ],
    8: [
      { verse: 1, title: "Ngech Ja Chuoyo" },
      { verse: 16, title: "Taya E Rachungi" },
      { verse: 19, title: "Min Yesu Gi Owetene" },
      { verse: 22, title: "Yesu Okweyo Apaka" },
      { verse: 26, title: "Chango Mar Ng’at Man Gi Jachien" },
      { verse: 40, title: "Nyako Motho Gi Dhako Matuo" },
    ],
    9: [
      { verse: 1, title: "Yesu Ooro Jopuonjre Apar Gariyo" },
      { verse: 10, title: "Yesu Opidho Ji Alufu Abich" },
      { verse: 18, title: "Petro Ohulo Kristo" },
      { verse: 28, title: "Kit Yesu Olokore" },
      { verse: 37, title: "Ochang Wuowi Man-Gi Jachien Marach" },
      { verse: 46, title: "Ng’ano Mabiro Bedo Maduong’ Moloyo" },
      { verse: 51, title: "Akweda Mar Jo Samaria." },
      { verse: 57, title: "Nengo Mar Luwo Yesu." },
    ],
    10: [
      { verse: 1, title: "Yesu Ooro Ji Piero Abiriyo Gariyo" },
      { verse: 25, title: "Ngech Ja Samaria Maber" },
      { verse: 38, title: "Yesu E Od Maritha Gi Mariam" },
    ],
    11: [
      { verse: 1, title: "Puonj Mar Yesu Kuom Lamo" },
      { verse: 14, title: "Yesu Gi Belzebub" },
      { verse: 29, title: "Ranyisi Mar Jona" },
      { verse: 33, title: "Taya Mar Ringruok" },
      { verse: 37, title: "Masirni Auchiel" },
    ],
    12: [
      { verse: 1, title: "Siem Kod Jip" },
      { verse: 13, title: "Ngech Jomoko Mofuwo" },
      { verse: 22, title: "Kik Iparri" },
      { verse: 35, title: "Rito" },
      { verse: 49, title: "Ok Kuwe To Pogruok" },
      { verse: 54, title: "Ng’eyo Tiend Kinde Mabiro," },
    ],
    13: [
      { verse: 1, title: "Lokreuru Kata Ulal" },
      { verse: 10, title: "Dhako Mong’ol Ochang Chieng’ Sabato" },
      { verse: 18, title: "Ngero Mar Koth Karadali Kod Thowe." },
      { verse: 22, title: "Dhoot Madiny" },
      { verse: 31, title: "Chuny Malit Mar Yesu Ni Jerusalem" },
    ],
    14: [
      { verse: 1, title: "Yesu E Od Jafarisai." },
      { verse: 15, title: "Ngero Mar Nyasi Maduong’" },
      { verse: 25, title: "Nengo Mar Bedo Japuonjre Yesu" },
    ],
    15: [
      { verse: 1, title: "Ngero Mar Rombo Molal" },
      { verse: 8, title: "Ngero Mar Pesa Molal" },
      { verse: 11, title: "Ngero Mar Wuowi Molal." },
    ],
    16: [
      { verse: 1, title: "Ngero Mar Wuon Tich Mariek" },
      { verse: 16, title: "Puonj Mamoko" },
      { verse: 19, title: "Jamoko Kod Lazaro" },
    ],
    17: [
      { verse: 1, title: "Richo, Yie, Tich" },
      { verse: 11, title: "Jodhoho Apar Ochangi." },
      { verse: 20, title: "Biro Mar Pinyruoth Nyasaye" },
    ],
    18: [
      { verse: 1, title: "Ngech Chi Liel Mamien." },
      { verse: 9, title: "Ngero Mar Ja Farisai Gi Jasol Usuru." },
      { verse: 15, title: "Nyithindo Matindo Gi Yesu" },
      { verse: 18, title: "Jamoko Ma Ruoth" },
      { verse: 31, title: "Yesu Ochako Okoro Kendo Kuom Thone." },
      { verse: 35, title: "Jakwecho Ma Muofu Oneno" },
    ],
    19: [
      { verse: 1, title: "Zakayo Jasol Osuru" },
      { verse: 11, title: "Ngech Siling’ Alufu Achiel, Achiel" },
      { verse: 28, title: "Donjo Gi Loch Marahuma" },
      { verse: 45, title: "Yesu E Hekalu" },
    ],
    20: [
      { verse: 1, title: "Openj Teko Mar Yesu" },
      { verse: 9, title: "Ngech Jopur" },
      { verse: 20, title: "Golo Osuru Ni Kaisari." },
      { verse: 27, title: "Chier Kod Kend" },
      { verse: 41, title: "Kristo Wuod Ng’a?" },
    ],
    21: [
      { verse: 1, title: "Chiwo Mar Chi Liel" },
      { verse: 5, title: "Ranyisi Mag Giko Mar Ndalo" },
    ],
    22: [
      { verse: 1, title: "Judas Oyie Mondo Ondhog Yesu" },
      { verse: 7, title: "Sap Ruoth" },
      { verse: 39, title: "Yesu Lemo E Wi Got Zeituni" },
      { verse: 47, title: "Yesu Omaki" },
      { verse: 54, title: "Petro Okwedo Yesu" },
      { verse: 63, title: "Askeche Marito Ojaro Yesu" },
      { verse: 66, title: "Yesu E Nyim Pilato Gi Herode." },
    ],
    23: [
      { verse: 26, title: "Gur E Msalaba" },
      { verse: 44, title: "Tho Yesu" },
      { verse: 50, title: "Ik Mar Yesu" },
    ],
    24: [
      { verse: 1, title: "Chier Mar Yesu" },
      { verse: 13, title: "E Yo Madhiyo Emau." },
      { verse: 36, title: "Yesu Ofwenyore Ni Jopuonjre" },
      { verse: 50, title: "Dhiyo E Polo" },
    ],
  },
  "Johana": {
    1: [
      { verse: 1, title: "Wach Nobedo Ringruok" },
      { verse: 19, title: "Johana Ja Batiso Okwer Ni Ok En Kristo" },
      { verse: 29, title: "Yesu Nyarombo Nyasaye" },
      { verse: 35, title: "Jopuonjre Yesu Mokwongo" },
      { verse: 43, title: "Yesu Oluongo Filipo Gi Nathaniel" },
    ],
    2: [
      { verse: 1, title: "Yesu Oloko Pi Divai" },
      { verse: 12, title: "Yesu Opuodho Hekalu" },
    ],
    3: [
      { verse: 1, title: "Yesu Opuonjo Nikodemo" },
      { verse: 22, title: "Nend Johana Ja Batiso Kuom Yesu" },
    ],
    4: [
      { verse: 1, title: "Yesu Owuoyo Gi Chi Samaria" },
      { verse: 27, title: "Jopuonjre Oduogo Ir Yesu" },
      { verse: 39, title: "Jo Samaria Mang’eny Oyie" },
      { verse: 43, title: "Yesu Ochango Wuod Jatelo" },
    ],
    5: [
      { verse: 1, title: "Yesu Ochango Ja- Songa E Dho Yawo" },
      { verse: 16, title: "Ngima Miyudo Kuom Wuowi" },
      { verse: 31, title: "Neno Kuom Yesu" },
    ],
    6: [
      { verse: 1, title: "Yesu Opidho Ji Alufu Abich" },
      { verse: 16, title: "Yesu Owuotho Ewi Pi" },
      { verse: 25, title: "Yesu E Makati Mar Ngima" },
      { verse: 60, title: "Jopuonjre Mang’eny Oweyo Yesu" },
    ],
    7: [
      { verse: 1, title: "Yesu Odhi E Sap Kiche" },
      { verse: 14, title: "Yesu Opuonjo E Sawo" },
      { verse: 25, title: "Bende Yesu En Kristo Adier?" },
      { verse: 45, title: "Jotend Jo Yahudi Otamore Yie" },
    ],
    8: [
      { verse: 12, title: "Gimomiyo Nend Yesu En Adier" },
      { verse: 31, title: "Nyithind Ibrahim" },
      { verse: 42, title: "Nyithind Jachien" },
      { verse: 48, title: "Gik Ma Yesu Nowacho Kuome Owuon" },
    ],
    9: [
      { verse: 1, title: "Yesu Ochango Ng’ama Nonywol Ka Muofu" },
      { verse: 13, title: "Jo Farisai Onono Kaka Muofu Okelo Chango" },
      { verse: 35, title: "Bedo Muofu E Chuny" },
    ],
    10: [
      { verse: 1, title: "Jakwath Gi Rombege" },
      { verse: 22, title: "Tamruok Yie Mar Jo Yahudi" },
    ],
    11: [
      { verse: 1, title: "Tho Mar Lazaro" },
      { verse: 17, title: "Yesu Ohoyo Maritha Gi Nyamin" },
      { verse: 38, title: "Yesu Ochiero Lazaro" },
      { verse: 45, title: "Jotelo Ochano Nego Yesu" },
    ],
    12: [
      { verse: 1, title: "Owir Yesu Gi Mo Bethani" },
      { verse: 12, title: "Yesu Odonjo Jerusalem Gi Rwak Maduong’" },
      { verse: 20, title: "Yesu Okoro Thone" },
      { verse: 37, title: "Jo Yahudi Osiko E Tamruok Yie Margi" },
    ],
    13: [
      { verse: 1, title: "Yesu Oluoko Tiende Jopuonjrene" },
      { verse: 18, title: "Yesu Okoro Ni Ibiro Ndhoge" },
      { verse: 31, title: "Yesu Okoro Ni Petro Biro Kwede." },
    ],
    14: [
      { verse: 1, title: "Yesu Ojiwo Jopuonjrene" },
      { verse: 5, title: "Yesu E Yo Madhi Ka Wuoro" },
      { verse: 15, title: "Yesu Osingo Roho Maler" },
    ],
    15: [
      { verse: 1, title: "Mzabibu Gi Bedene" },
      { verse: 18, title: "Piny Ochayo Jopuonjre" },
    ],
    16: [
      { verse: 5, title: "Tij Roho Maler" },
      { verse: 17, title: "Kuyo Mar Jopuonjre Biro Lokore Mor" },
    ],
    17: [
      { verse: 1, title: "Yesu Olamo Ne En Owuon" },
      { verse: 6, title: "Yesu Olamo Ne Jopuonjrene" },
      { verse: 20, title: "Yesu Olamo Ne Ji Duto Moyie" },
    ],
    18: [
      { verse: 1, title: "Yesu Omaki" },
      { verse: 12, title: "Oter Yesu Ir Anas" },
      { verse: 15, title: "Petro Okwedo Yesu Mokwongo" },
      { verse: 19, title: "Jadolo Maduong’ Omiyo Yesu Penjo" },
      { verse: 25, title: "Petro Okwedo Yesu Nyadiriyo Kendo Nyadidek" },
      { verse: 28, title: "Yesu E Nyim Pilato" },
    ],
    19: [
      { verse: 1, title: "Ong’adne Yesu Bura Mondo Ogure" },
      { verse: 17, title: "Ogur Yesu" },
      { verse: 28, title: "Tho Mar Yesu" },
      { verse: 38, title: "Ik Mar Yesu" },
    ],
    20: [
      { verse: 1, title: "Bur-ik Modong’ Nono" },
      { verse: 10, title: "Yesu Ofwenyore Ne Mariam Magdala" },
      { verse: 19, title: "Yesu Ofwenyore Ne Jopuonjrene" },
      { verse: 24, title: "Yesu Ofwenyore Ne Thomas" },
    ],
    21: [
      { verse: 1, title: "Yesu Omiyo Jopuonjrene Omako Rech Mang’eny" },
      { verse: 15, title: "Yesu Ochako Oguro Petro" },
    ],
  },
  "Tich Joote": {
    1: [
      { verse: 1, title: "Oter Yesu Malo E Polo" },
      { verse: 12, title: "Oyier Mathias Kar Judas" },
    ],
    2: [
      { verse: 1, title: "Roho Maler Obiro Chieng’ Pentekost" },
      { verse: 14, title: "Petro Owuoyo Gi Oganda" },
      { verse: 42, title: "Lalruok Mar Joma Oyie" },
    ],
    3: [
      { verse: 1, title: "Petro Ochango Puth Ma Jakwecho" },
      { verse: 11, title: "Petro Olero Ne Ji Wach" },
    ],
    4: [
      { verse: 1, title: "Petro Gi Johana E Nyim Sanhedrin" },
      { verse: 23, title: "Joma Oyie Olamo Nyasaye" },
      { verse: 32, title: "Joma Oyie Opogo Mwandugi Gi Jowetegi" },
    ],
    5: [
      { verse: 1, title: "Anania Gi Safira" },
      { verse: 12, title: "Joote Ochango Ji Mang’eny" },
      { verse: 17, title: "Osand Joote" },
    ],
    6: [
      { verse: 1, title: "Yiero Mar Jokony Abiriyo" },
      { verse: 8, title: "Omak Stefano" },
    ],
    7: [
      { verse: 1, title: "Stefano Owuoyo Ni Buch Sanhedrin" },
      { verse: 54, title: "Ochiel Stefano Gi Kite" },
    ],
    8: [
      { verse: 2, title: "Osand Kanisa Mi Joma Oyie Oke." },
      { verse: 4, title: "Filipo Ka Ni Samaria" },
      { verse: 9, title: "Simon Ma Jandagla" },
      { verse: 26, title: "Filipo Gi Ja Ethiopia" },
    ],
    9: [
      { verse: 1, title: "Lokruok Mar Saulo" },
      { verse: 20, title: "Saulo Oyalo Injili Damaski Gi Jerusalem" },
      { verse: 32, title: "Ainea Gi Dorka" },
    ],
    10: [
      { verse: 1, title: "Kornelio Oluongo Petro" },
      { verse: 9, title: "Petro Oneno Fweny" },
      { verse: 24, title: "Petro E Od Kornelio" },
    ],
    11: [
      { verse: 1, title: "Petro Olero Tiend Gik Motimo." },
      { verse: 19, title: "Kanisa Man Antiokia" },
    ],
    12: [
      { verse: 1, title: "Malaika Ogolo Petro E Jela" },
      { verse: 20, title: "Tho Herode" },
    ],
    13: [
      { verse: 1, title: "Owal Barnaba Gi Saulo E Tich Makende" },
      { verse: 4, title: "Oyal Wach Saipras" },
      { verse: 13, title: "Paulo Gi Barnaba Jochopo Antiokia E Piny Pisidia" },
    ],
    14: [
      { verse: 1, title: "Paulo Gi Barnaba Ochopo Ikonio" },
      { verse: 8, title: "Paulo Gi Barnaba Ochopo Lustra, Gi Derbe" },
      { verse: 21, title: "Paulo Jodok Antiokia E Piny Siria" },
    ],
    15: [
      { verse: 1, title: "Oket Bura Jerusalem" },
      { verse: 22, title: "Bura Ondiko Barua Ne Joma Oyie Ma Ok Jo Yahudi" },
      { verse: 36, title: "Pogruok Obet E Kind Paulo Gi Barnaba" },
    ],
    16: [
      { verse: 1, title: "Timotheo Odhi Gi Paulo Gi Sila" },
      { verse: 6, title: "Paulo Oneno Fweny Mar Ja Makedonia" },
      { verse: 11, title: "Lidia Oyudo Warruok Filipi" },
      { verse: 16, title: "Otwe Paulo Gi Sila E Jela" },
    ],
    17: [
      { verse: 1, title: "Injili Ochopo Thesalonika" },
      { verse: 10, title: "Injili Ochopo Berea" },
      { verse: 16, title: "Injili Ochopo Athens" },
    ],
    18: [
      { verse: 1, title: "Injili Ochopo Korintho" },
      { verse: 18, title: "Priskila Gi Akula Kod Apolo" },
    ],
    19: [
      { verse: 1, title: "Paulo E Dala Mar Efeso" },
      { verse: 23, title: "Tulo Maduong’ Owuok Efeso" },
    ],
    20: [
      { verse: 1, title: "Paulo Okadho Makedonia Gi Gris" },
      { verse: 7, title: "Paulo Ochiero Yutiko E Gweng’ Troa" },
      { verse: 13, title: "Paulo Ogoyo Oriti Ne Jodong Efeso" },
    ],
    21: [
      { verse: 1, title: "Wuodh Paulo Kodhi Jerusalem" },
      { verse: 17, title: "Paulo Ochopo Jerusalem" },
      { verse: 27, title: "Omak Paulo" },
      { verse: 37, title: "Paulo Owuoyo Gi Oganda" },
    ],
    22: [
      { verse: 22, title: "Paulo Japiny Rumi" },
      { verse: 30, title: "Paulo E Nyim Buch Jodong Sanhedrin" },
    ],
    23: [
      { verse: 12, title: "Jo Yahudi Ochano Nego Paulo" },
      { verse: 23, title: "Oter Paulo Kaisaria" },
    ],
    24: [
      { verse: 1, title: "Oyal Paulo E Nyim Feliks." },
    ],
    25: [
      { verse: 1, title: "Oyal Paulo E Nyim Festo." },
      { verse: 13, title: "Festo Onyiso Ruoth Agripa Wach Paulo" },
    ],
    27: [
      { verse: 1, title: "Paulo Okwang’ Kadhi Rumi" },
      { verse: 13, title: "Yamo Mager" },
      { verse: 27, title: "Yie Obarore" },
    ],
    28: [
      { verse: 1, title: "Paulo Ochopo Malta." },
      { verse: 11, title: "Paulo Jochopo Rumi" },
      { verse: 17, title: "Paulo Oyalo Injili Rumi Ka Irite" },
    ],
  },
  "Jo-Rumi": {
    1: [
      { verse: 8, title: "Paulo Ogombo Limo Rumi" },
      { verse: 18, title: "Mirimb Nyasaye Kuom Dhano" },
    ],
    2: [
      { verse: 1, title: "Nyasaye Ng’ado Bura Makare" },
      { verse: 17, title: "Jo-Yahudi Kod Chik" },
    ],
    3: [
      { verse: 1, title: "Adiera Mar Nyasaye" },
      { verse: 9, title: "Onge Ng’ama Jaadiera" },
      { verse: 21, title: "Bedo Makare E Yor Yie" },
    ],
    4: [
      { verse: 1, title: "Ibrahim Obedo Jaadiera Kuom Yie" },
    ],
    5: [
      { verse: 1, title: "Kuwe Kod Mor" },
      { verse: 12, title: "Tho Kuom Adam, Ngima Kuom Kristo" },
    ],
    6: [
      { verse: 1, title: "Tho Ne Richo, Bedo Mang’ima Ei Kristo" },
      { verse: 15, title: "Wasumbini Ne Tim Makare" },
    ],
    7: [
      { verse: 1, title: "Puonj Kuom Kend" },
      { verse: 7, title: "Nyagrouk Gi Richo." },
    ],
    8: [
      { verse: 1, title: "Ngima Kuom Roho" },
      { verse: 18, title: "Duong’ Mabiro Achien" },
      { verse: 28, title: "Joloch Maloyo Joloch" },
    ],
    9: [
      { verse: 1, title: "Yier Nyasaye Makende" },
      { verse: 30, title: "Tamruok Yie Mar Israel" },
    ],
    11: [
      { verse: 1, title: "Jo-Israel Mane Otony" },
      { verse: 11, title: "Bede Yien Maok Ochwogi" },
      { verse: 25, title: "Jo Israel Duto Ibiro War" },
      { verse: 33, title: "Wend Pak" },
    ],
    12: [
      { verse: 1, title: "Misango Mangima" },
      { verse: 9, title: "Hera" },
    ],
    13: [
      { verse: 1, title: "Winjo Jorit Loch" },
      { verse: 8, title: "Herruru, Giko Chiegni" },
    ],
    14: [
      { verse: 1, title: "Joma Yom Yom Gi Joma Otegno" },
    ],
    15: [
      { verse: 14, title: "Paulo Jatich E Kind Ogendini" },
      { verse: 23, title: "Paulo Ochano Limo Rumi" },
    ],
    16: [
      { verse: 1, title: "Mos Mag Ji Giwegi" },
    ],
  },
  "1 Jo-Korintho": {
    1: [
      { verse: 4, title: "Dwoko Erokamano" },
      { verse: 10, title: "Pogruok Ei Kanisa." },
      { verse: 18, title: "Kristo En Rieko Gi Teko Nyasaye" },
    ],
    2: [
      { verse: 6, title: "Rieko Moa Kuom Roho" },
    ],
    3: [
      { verse: 1, title: "Wach Kuom Pogruok E Kanisa" },
    ],
    4: [
      { verse: 1, title: "Joote Mag Kristo" },
    ],
    5: [
      { verse: 1, title: "Riemburu Owadwa Materore" },
    ],
    6: [
      { verse: 1, title: "Joma Oyie Kik Donj Ni Jowetegi Od Bura." },
      { verse: 12, title: "Richo Mar Chode" },
    ],
    7: [
      { verse: 1, title: "Weche Kend" },
    ],
    8: [
      { verse: 1, title: "Chiemo Motimgo Misango Ni Nyiseche Manono" },
    ],
    9: [
      { verse: 1, title: "Ratiro Mag Jaote" },
    ],
    10: [
      { verse: 1, title: "Siem Miyudo E Sigand Israel" },
      { verse: 14, title: "Nyasi Mag Nyiseche Manono Kod Sawo Mar Ruoth." },
      { verse: 23, title: "Thuolo Mar Joma Oyie" },
    ],
    11: [
      { verse: 2, title: "Gik Madwarore E Lemo" },
      { verse: 17, title: "Sawo Mar Ruoth" },
    ],
    12: [
      { verse: 1, title: "Mich Mag Roho" },
      { verse: 12, title: "Ringruok Achiel Gi Fuonde Mang’eny" },
    ],
    13: [
      { verse: 1, title: "Hera" },
    ],
    14: [
      { verse: 1, title: "Mich Mag Koro Wach Kod Wuoyo Gi Dhok Mayoreyore." },
      { verse: 26, title: "Chenro Mar Lemo E Kanisa" },
    ],
    15: [
      { verse: 1, title: "Chier Mar Kristo" },
      { verse: 12, title: "Chier Mar Joma Otho" },
      { verse: 35, title: "Ringruok Mochier" },
    ],
    16: [
      { verse: 1, title: "Chiwo Michoko Ni Jo Nyasaye" },
      { verse: 5, title: "Kwayo Mag Paulo Owuon" },
      { verse: 19, title: "Mos Mogik" },
    ],
  },
  "2 Jo-Korintho": {
    1: [
      { verse: 3, title: "Nyasach Hoch Duto" },
      { verse: 12, title: "Paulo Oloko Chenro Mage" },
    ],
    2: [
      { verse: 5, title: "Weyo Ni Jaricho Richone" },
      { verse: 12, title: "Jotich Mag Singruok Manyien" },
    ],
    3: [
      { verse: 7, title: "Duong’ Mar Singruok Manyien" },
    ],
    4: [
      { verse: 1, title: "Mwandu Manie Agulini Mag Lowo." },
    ],
    5: [
      { verse: 1, title: "Kar Dakwa Manie Polo" },
      { verse: 11, title: "Tich Mar Kelo Winjruok" },
    ],
    6: [
      { verse: 3, title: "Pek Ma Paulo Oyudo" },
      { verse: 14, title: "Kik Uriwru Gi Jopiny" },
    ],
    7: [
      { verse: 2, title: "Mor Ma Paulo Nigo" },
    ],
    8: [
      { verse: 1, title: "Jip Kuom Chiwo" },
      { verse: 16, title: "Oor Tito Korintho." },
    ],
    9: [
      { verse: 6, title: "Chiwo Migolo Kuom Ng'wono." },
    ],
    10: [
      { verse: 1, title: "Paulo Osiro Tije Kaka Jaote" },
    ],
    11: [
      { verse: 1, title: "Paulo Kod Jo-ote Mag Miriambo" },
      { verse: 16, title: "Sunga Paulo E Chandruok" },
    ],
    12: [
      { verse: 1, title: "Fweny Ma Paulo Noneno Kod Kudho Manie Ngimane" },
      { verse: 11, title: "Gima Paulo Paro Kuom Jo-Korintho" },
    ],
    13: [
      { verse: 1, title: "Siem Mogik" },
      { verse: 11, title: "Mos Mogik" },
    ],
  },
  "Jo-Galatia": {
    1: [
      { verse: 6, title: "Onge Injili Machielo" },
      { verse: 11, title: "Paulo Oluong Gi Nyasaye" },
    ],
    2: [
      { verse: 1, title: "Joote Mamoko Orwako Paulo" },
      { verse: 11, title: "Paulo Okwero Petro" },
    ],
    3: [
      { verse: 1, title: "Yie Koso Rito Chik" },
      { verse: 15, title: "Chik Kod Singruok" },
      { verse: 26, title: "Nyithind Nyasaye" },
    ],
    4: [
      { verse: 8, title: "Paulo Okecho Jo Galatia" },
      { verse: 21, title: "Hagar Gi Sara" },
    ],
    5: [
      { verse: 1, title: "Thuolo Ei Kristo" },
      { verse: 16, title: "Ngima Kuom Roho" },
    ],
    6: [
      { verse: 1, title: "Timo Maber Ne Ji Duto" },
      { verse: 11, title: "Ok Tero Ji Nyangu To Chwech Manyien" },
    ],
  },
  "Jo-Efeso": {
    1: [
      { verse: 3, title: "Gweth Mag Chuny Man Kuom Kristo" },
      { verse: 15, title: "Duoko Erokamano Kod Lamo" },
    ],
    2: [
      { verse: 1, title: "Bedo Mangima Ei Kristo" },
      { verse: 11, title: "Achiel E Kristo" },
    ],
    3: [
      { verse: 1, title: "Paulo Jayalo Mar Ogendini" },
      { verse: 14, title: "Lamo Ni Jo-Efeso" },
    ],
    4: [
      { verse: 1, title: "Bedo E Achiel Kuom Kristo" },
      { verse: 17, title: "Dak Kaka Nyithind Ler" },
    ],
    5: [
      { verse: 22, title: "Mon Kod Chwo" },
    ],
    6: [
      { verse: 1, title: "Nyithindo Kod Jonyuol" },
      { verse: 5, title: "Wasumbini Kod Ruodhi" },
      { verse: 10, title: "Gii Lweny Mag Nyasaye" },
      { verse: 21, title: "Mos Mogik" },
    ],
  },
  "Jo-Filipi": {
    1: [
      { verse: 3, title: "Duoko Erokamano Kod Lemo" },
      { verse: 12, title: "Twech Paulo Medo Keyo Injili" },
    ],
    2: [
      { verse: 1, title: "Kaw Muolo Machal Gi Mar Kristo" },
      { verse: 12, title: "Ngima Marieny Ka Sulwe" },
      { verse: 19, title: "Timotheo Gi Epafrodito" },
    ],
    3: [
      { verse: 1, title: "Onge Geno Kuom Ringruok" },
      { verse: 12, title: "Paulo Ringo ka Hawo Thorro" },
    ],
    4: [
      { verse: 2, title: "Puonj Moko Machien" },
      { verse: 10, title: "Erokamano Kuom Michgi." },
      { verse: 21, title: "Mos Mogik" },
    ],
  },
  "Jo-Kolosai": {
    1: [
      { verse: 3, title: "Erokamano Kod Lamo" },
      { verse: 15, title: "Kristo Duong’ Moloyo Duto" },
      { verse: 24, title: "Tij Paulo Ma Otiyo Ni Kanisa" },
    ],
    2: [
      { verse: 6, title: "Bedo Thuolo Kuom Chike Dhano Kaluore Gi Ngima Kuom Kristo" },
    ],
    3: [
      { verse: 1, title: "Chike Mag Ngima Maler" },
      { verse: 18, title: "Chike Momi Jo Kristo Kaka Owinjore Gidagu" },
    ],
    4: [
      { verse: 2, title: "Weche Mag Puonj Mamoko" },
      { verse: 7, title: "Mos Mogik" },
    ],
  },
  "1 Jo-Thesalonika": {
    1: [
      { verse: 2, title: "Paulo Opako Yie Mar Jo-Thesalonika" },
    ],
    2: [
      { verse: 1, title: "Tij Paulo Ei Thesalonika" },
      { verse: 17, title: "Paulo Gombo Limo Jo Thesalonika Kendo" },
    ],
    3: [
      { verse: 6, title: "Ripod Timotheo Kuom Chal Jo Thesalonika" },
    ],
    4: [
      { verse: 1, title: "Ngima Mamiyo Nyasaye Mor" },
      { verse: 13, title: "Biro Mar Ruoth" },
    ],
    5: [
      { verse: 12, title: "Weche Mogik" },
    ],
  },
  "2 Jo-Thesalonika": {
    1: [
      { verse: 3, title: "Duoko Erokamano kod lemo." },
    ],
    2: [
      { verse: 1, title: "Ng’at Mochayo Chik" },
      { verse: 13, title: "Chung Motegno" },
    ],
    3: [
      { verse: 1, title: "Paulo Okwayo Lamo" },
      { verse: 6, title: "Siem Kuom Budho Abudha" },
      { verse: 16, title: "Mos Mogik" },
    ],
  },
  "1 Timotheo": {
    1: [
      { verse: 3, title: "Siem Kuom Jopuonj Mag Miriambo Mag Chik." },
      { verse: 12, title: "Ng’wono Mar Ruoth Kuom Paulo." },
    ],
    2: [
      { verse: 1, title: "Puonj Kuom Lemo" },
    ],
    3: [
      { verse: 1, title: "Jotend Kanisa Gi Jokonygi" },
    ],
    4: [
      { verse: 1, title: "Puonj Momi Timotheo" },
    ],
    5: [
      { verse: 1, title: "Ng’ado Rieko Kuom Mond Liete, Jodongo Gi Wasumbini" },
    ],
    6: [
      { verse: 3, title: "Hero Pesa" },
      { verse: 11, title: "Jip Mar Paulo Ni Timotheo" },
    ],
  },
  "2 Timotheo": {
    1: [
      { verse: 3, title: "Jip Mondo Obed Jadiera" },
    ],
    2: [
      { verse: 14, title: "Jatich Ma Nyasaye Oyiego" },
    ],
    3: [
      { verse: 1, title: "Rem Luoro Nyasaye E Ndalo Giko" },
      { verse: 10, title: "Chik Ma Paulo Omiyo Timotheo" },
    ],
    4: [
      { verse: 9, title: "Weche Paulo Owuon" },
      { verse: 19, title: "Mos Mogik" },
    ],
  },
  "Tito": {
    1: [
      { verse: 5, title: "Tich Momi Tito" },
    ],
    2: [
      { verse: 1, title: "Gik Monego Puonji Ne Kidienje Mopogore Pogore" },
    ],
    3: [
      { verse: 1, title: "Timo Timbe Mabeyo" },
      { verse: 12, title: "Weche Mogik" },
    ],
  },
  "Filemon": {
    1: [
      { verse: 4, title: "Erokamano Kod Lamo" },
      { verse: 8, title: "Paulo Kwayo Ne Onesimo" },
    ],
  },
  "Jo-Hibrania": {
    1: [
      { verse: 1, title: "Wuowi Duong’ Moloyo Malaike" },
    ],
    2: [
      { verse: 1, title: "Siem Kuom Keto Chuny" },
      { verse: 5, title: "Yesu Ochalo Gi Owetene" },
    ],
    3: [
      { verse: 1, title: "Yesu Duong' Moloyo Musa" },
      { verse: 7, title: "Siem Kuom Tamruok Yie" },
    ],
    4: [
      { verse: 1, title: "Yweyo Mar Sabato Ne Jo Nyasaye" },
      { verse: 14, title: "Yesu En Jadolo Maduong' Moloyo" },
    ],
    5: [
      { verse: 11, title: "Siem Kuom Bayo Yo" },
    ],
    6: [
      { verse: 13, title: "Adiera Mar Singruok Nyasaye" },
    ],
    7: [
      { verse: 1, title: "Melkizedek Jadolo" },
      { verse: 11, title: "Yesu Chalo Melkizedek" },
    ],
    8: [
      { verse: 1, title: "Jadolo Maduong’ Mar Singruok Manyien" },
    ],
    9: [
      { verse: 1, title: "Lemo E Hemb Romo Mar Piny" },
      { verse: 11, title: "Remb Kristo" },
    ],
    10: [
      { verse: 1, title: "Misango Kristo Notim Dichiel Mogik" },
      { verse: 19, title: "Jip Kuom Timo Kinda" },
    ],
    11: [
      { verse: 1, title: "Kuom Yie" },
    ],
    12: [
      { verse: 1, title: "Nyasaye Rieyo Nyithinde" },
      { verse: 14, title: "Siem Kuom Tamruok Winjo Nyasaye" },
    ],
    13: [
      { verse: 1, title: "Jip Mogik" },
    ],
  },
  "Jakobo": {
    1: [
      { verse: 2, title: "Tembe Mopogore Opogore" },
      { verse: 19, title: "Winjo Wach Kendo Timo" },
    ],
    2: [
      { verse: 1, title: "Okwer Dewo Wang’" },
      { verse: 14, title: "Yie gi Tim" },
    ],
    3: [
      { verse: 1, title: "Boyo Lep" },
      { verse: 13, title: "Kit Rieko Ariyo" },
    ],
    4: [
      { verse: 1, title: "Bolreuru Ni Nyasaye" },
      { verse: 13, title: "Sungruok Kuom Kiny" },
    ],
    5: [
      { verse: 1, title: "Siem Ne Jomwandu Mathiro Ji" },
      { verse: 7, title: "Bedo Jakinda E Sand" },
      { verse: 13, title: "Lamo Mar Yie" },
    ],
  },
  "1 Petro": {
    1: [
      { verse: 3, title: "Pak Ni Nyasaye Kuom Geno Mangima." },
      { verse: 13, title: "Beduru Maler" },
    ],
    2: [
      { verse: 4, title: "Kidi Mangima Kod Joma Oyier" },
      { verse: 13, title: "Winjo Joloch Kod Ruodhi" },
    ],
    3: [
      { verse: 1, title: "Mon Gi Chwo" },
      { verse: 8, title: "Neno Sand Kuom Timo Maber" },
    ],
    4: [
      { verse: 1, title: "Dak Ni Nyasaye" },
      { verse: 12, title: "Sand Kuom Bedo Ja Kristo." },
    ],
    5: [
      { verse: 1, title: "Ni Jodongo Gi Jomatindo" },
      { verse: 12, title: "Mos Mogik" },
    ],
  },
  "2 Petro": {
    1: [
      { verse: 3, title: "Miyo Luong Mar Ng’ato Kod Yierone Bedo Adiera." },
      { verse: 12, title: "Koro Mar Ndiko" },
    ],
    2: [
      { verse: 1, title: "Jopuonj Mag Miriambo Kod Kethruokgi." },
    ],
    3: [
      { verse: 1, title: "Odiechieng Ruoth" },
    ],
  },
  "1 Johana": {
    1: [
      { verse: 1, title: "Is Wach Mar Ngima" },
      { verse: 5, title: "Wuotho E Ler" },
    ],
    2: [
      { verse: 15, title: "Kik Uher Piny" },
      { verse: 18, title: "Siem Kuom Wasik Kristo" },
      { verse: 28, title: "Nyithind Nyasaye" },
    ],
    3: [
      { verse: 11, title: "Herreuru Ng'ato Gi Ng'ato" },
    ],
    4: [
      { verse: 1, title: "Pim Chunje" },
      { verse: 7, title: "Hera Mar Nyasaye Kod Marwa." },
    ],
    5: [
      { verse: 1, title: "Yie Kuom Wuod Nyasaye." },
      { verse: 13, title: "Weche Mogik" },
    ],
  },
  "Juda": {
    1: [
      { verse: 3, title: "Richo Gi Kum Mar Joma Kia Nyasaye" },
      { verse: 17, title: "Rit Ne Luong" },
      { verse: 24, title: "Pak" },
    ],
  },
  "Fweny": {
    1: [
      { verse: 1, title: "Weche Motelo" },
      { verse: 4, title: "Mos Kod Pak" },
      { verse: 9, title: "Ng’at Machalo Gi Wuod Dhano" },
    ],
    2: [
      { verse: 1, title: "Ne Kanisa Man Efeso" },
      { verse: 8, title: "Ne Kanisa Man Smurna" },
      { verse: 12, title: "Ne Kanisa Man Pergamo" },
      { verse: 18, title: "Ne Kanisa Man Thiatira" },
    ],
    3: [
      { verse: 1, title: "Ne Kanisa Man Sarde" },
      { verse: 7, title: "Ne Kanisa Man Filadelfia" },
      { verse: 14, title: "Ne Kanisa Man Laudikia" },
    ],
    4: [
      { verse: 1, title: "Kom Duong’ Man E Polo" },
    ],
    5: [
      { verse: 1, title: "Kitabu Kod Nyarombo" },
    ],
    6: [
      { verse: 1, title: "Kido" },
    ],
    7: [
      { verse: 1, title: "Ji 144,000 Moyier" },
      { verse: 9, title: "Oganda Maduong' Morwakore Gi Kandho Marachere." },
    ],
    8: [
      { verse: 1, title: "Alama Mar Abiriyo Gi Tap Wang'o Ubani Molos Gi Dhahabu." },
      { verse: 6, title: "Turumbeta" },
    ],
    10: [
      { verse: 1, title: "Malaika Gi Kitabu Matin" },
    ],
    11: [
      { verse: 1, title: "Joneno Ariyo" },
      { verse: 15, title: "Turumbeta Mar Abiriyo" },
    ],
    12: [
      { verse: 1, title: "Dhako Kod Thuol Malich" },
    ],
    13: [
      { verse: 2, title: "Ondiegi Magalagala Owuok E Nam" },
      { verse: 11, title: "Ondiek Malich Moa E Piny" },
    ],
    14: [
      { verse: 1, title: "Nyarombo Gi Ji Alufu Mia Achiel Piero Ang'wen Gang'wen (144,000)" },
      { verse: 6, title: "Malaike Adek" },
      { verse: 14, title: "Keyo Mar Piny" },
    ],
    15: [
      { verse: 1, title: "Malaike Abiriyo Makelo Masiche Abiriyo" },
    ],
    16: [
      { verse: 1, title: "Tewni Abiriyo Mag Mirimb Nyasaye" },
    ],
    17: [
      { verse: 1, title: "Dhako Mobet Kuom Ondiek Malich" },
    ],
    18: [
      { verse: 1, title: "Babulon Opodho" },
    ],
    19: [
      { verse: 1, title: "Haleluya!" },
      { verse: 11, title: "Jaith Faras Marachar" },
    ],
    20: [
      { verse: 1, title: "Higni Alufu Achiel" },
      { verse: 7, title: "Oloo Satan" },
      { verse: 11, title: "Jomotho Ing'ado Nigi Bura" },
    ],
    21: [
      { verse: 1, title: "Jerusalem Manyien" },
    ],
    22: [
      { verse: 1, title: "Aora Mar Ngima" },
      { verse: 7, title: "Yesu Biro" },
    ],
  },
  "Chakruok": {
    1: [
      { verse: 1, title: "Kar Chakruok" },
    ],
    2: [
      { verse: 4, title: "Adam gi Hawa" },
    ],
    3: [
      { verse: 1, title: "Dhano oketho" },
    ],
    4: [
      { verse: 1, title: "Kain gi Abel" },
    ],
    5: [
      { verse: 1, title: "Chakruok mar dhano koa e Adam nyaka" },
      { verse: 1, title: "Nowa" },
    ],
    6: [
      { verse: 1, title: "Pi oimo piny" },
    ],
    7: [
    ],
    8: [
    ],
    9: [
      { verse: 1, title: "Singruok mar Nyasaye gi Nowa" },
      { verse: 18, title: "Yawuot Nowa" },
    ],
    10: [
      { verse: 1, title: "Chakruok mar pinje" },
      { verse: 2, title: "Joka Jafeth" },
      { verse: 6, title: "Joka Ham" },
      { verse: 21, title: "Nyikwa Shem" },
    ],
    11: [
      { verse: 1, title: "Ohinga mar Babel" },
      { verse: 10, title: "Kochakore Shem nyaka Abram" },
    ],
    12: [
      { verse: 1, title: "Luong mar Abram" },
      { verse: 10, title: "Abram e piny Misri" },
    ],
    13: [
      { verse: 1, title: "Abram kod Lut opogore" },
    ],
    14: [
      { verse: 1, title: "Abram oreso Lut" },
    ],
    15: [
      { verse: 1, title: "Singruok Nyasaye kod Abram" },
    ],
    16: [
      { verse: 1, title: "Hagar kod Ishmael" },
    ],
    17: [
      { verse: 1, title: "Singruok mar nyangu" },
    ],
    18: [
      { verse: 1, title: "Welo adek" },
      { verse: 16, title: "Ibrahim okwayo Nyasaye mondo ong’won ne" },
      { verse: 16, title: "Sodom" },
    ],
    19: [
      { verse: 1, title: "Sodom gi Gomora okethi" },
      { verse: 30, title: "Lut kod nyige" },
    ],
    20: [
      { verse: 1, title: "Ibrahim kod Abimelek" },
    ],
    21: [
      { verse: 1, title: "Nywol mar Isaka" },
      { verse: 8, title: "Oriemb Hagar kod Ishmael" },
      { verse: 22, title: "Otim singruok Bersheba" },
    ],
    22: [
      { verse: 1, title: "Otem Ibrahim" },
      { verse: 20, title: "Yawuot Nahor" },
    ],
    23: [
      { verse: 1, title: "Tho mar Sara" },
    ],
    24: [
      { verse: 1, title: "Isaka gi Rebeka" },
    ],
    25: [
      { verse: 1, title: "Tho mar Ibrahim" },
      { verse: 12, title: "Yawuot Ishmael" },
      { verse: 19, title: "Jakobo gi Esau" },
    ],
    26: [
      { verse: 1, title: "Isaka gi Abimelek" },
    ],
    27: [
      { verse: 1, title: "Isaka ogwedho Jakobo" },
      { verse: 41, title: "Jakobo oringo odhi ir Laban" },
    ],
    28: [
      { verse: 10, title: "Lek ma Jakobo oleko Bethel" },
    ],
    29: [
      { verse: 1, title: "Jakobo ochopo Padan Aram" },
      { verse: 15, title: "Jakobo okendo Lea gi Rael" },
      { verse: 31, title: "Nyithind Jakobo" },
    ],
    30: [
      { verse: 25, title: "Medruok mag jamb Jakobo" },
    ],
    31: [
      { verse: 1, title: "Jakobo oringo oa ka Laban" },
      { verse: 22, title: "Laban olawo Jakobo" },
    ],
    32: [
      { verse: 1, title: "Jakobo oikore mondo orom gi Esau" },
      { verse: 22, title: "Jakobo oi gi Nyasaye" },
    ],
    33: [
      { verse: 1, title: "Jakobo oromo gi Esau" },
    ],
    34: [
      { verse: 1, title: "Dina gi jo-Shekem" },
    ],
    35: [
      { verse: 1, title: "Jakobo odwogo Bethel" },
      { verse: 16, title: "Tho mar Rael gi Isaka" },
    ],
    36: [
      { verse: 1, title: "Nyikwa Esau" },
      { verse: 31, title: "Ruodhi mag Edom" },
    ],
    37: [
      { verse: 1, title: "Lek mar Josef" },
      { verse: 12, title: "Owete mag Josef ouse" },
    ],
    38: [
      { verse: 1, title: "Juda gi Tamar" },
    ],
    39: [
      { verse: 1, title: "Josef gi chi Potifa" },
    ],
    40: [
      { verse: 1, title: "Jagam divai gi jatend makati" },
    ],
    41: [
      { verse: 1, title: "Lek mar Farao" },
      { verse: 41, title: "Oket Josef jatend Misri" },
    ],
    42: [
      { verse: 1, title: "Owete Josef odhi Misri" },
    ],
    43: [
      { verse: 1, title: "Wuoth madok Misri" },
    ],
    44: [
      { verse: 1, title: "Kikombe mar mula manie gunia" },
    ],
    45: [
      { verse: 1, title: "Josef ohulore ni owetene" },
    ],
    46: [
      { verse: 1, title: "Jakobo odhi e piny Misri" },
    ],
    47: [
      { verse: 13, title: "Josef kod kech e piny Misri" },
    ],
    48: [
      { verse: 1, title: "Manase kod Efraim" },
    ],
    49: [
      { verse: 1, title: "Jakobo ogwedho yawuote" },
      { verse: 29, title: "Tho mar Jakobo" },
    ],
    50: [
      { verse: 15, title: "Josef omiyo chuny owetene obedo gi kwe" },
      { verse: 22, title: "Tho mar Josef" },
    ],
  },
  "Wuok": {
    1: [
      { verse: 1, title: "Thagruok mar jo-Israel e piny Misri" },
    ],
    2: [
      { verse: 1, title: "Nywol mar Musa" },
      { verse: 11, title: "Musa oringo odhi e piny jo-Midian" },
    ],
    3: [
      { verse: 1, title: "Musa kod bungu mawang’" },
    ],
    4: [
      { verse: 1, title: "Ranyisi momi Musa" },
      { verse: 18, title: "Musa odok Misri" },
    ],
    5: [
      { verse: 1, title: "Matafari maonge lum" },
      { verse: 22, title: "Nyasaye osingo ne jo-Israel resruok" },
    ],
    6: [
      { verse: 13, title: "Anywola joka Musa gi Harun" },
      { verse: 28, title: "Harun dhi wuoyo kar Musa" },
    ],
    7: [
      { verse: 8, title: "Ludh Harun olokore thuol" },
      { verse: 14, title: "Masira mar remo" },
      { verse: 25, title: "Masira mar ogwende" },
    ],
    8: [
      { verse: 16, title: "Masira mar kikun" },
      { verse: 20, title: "Masira mar lwang’ni" },
    ],
    9: [
      { verse: 1, title: "Masich tho mar jamni" },
      { verse: 8, title: "Masich tuo mar buche" },
      { verse: 13, title: "Masich pe" },
    ],
    10: [
      { verse: 1, title: "Masich bonyo" },
      { verse: 21, title: "Masich mudho mandiwa" },
    ],
    11: [
      { verse: 1, title: "Tho nyithindo makayo" },
    ],
    12: [
      { verse: 1, title: "Nyasi mar Pasaka" },
      { verse: 31, title: "Jo-Israel owuok e piny Misri" },
      { verse: 43, title: "Chike mag Pasaka" },
    ],
    13: [
      { verse: 1, title: "Walo nyithindo makayo" },
      { verse: 17, title: "Ng’ado Nam Makwar" },
    ],
    14: [
    ],
    15: [
      { verse: 1, title: "Wend Musa gi Miriam" },
      { verse: 22, title: "Pige mag Mara gi Elim" },
    ],
    16: [
      { verse: 1, title: "Manna gi aluru" },
    ],
    17: [
      { verse: 1, title: "Pi owuok e lwanda" },
      { verse: 8, title: "Jo-Israel oloyo jo-Amalek" },
    ],
    18: [
      { verse: 1, title: "Jethro olimo Musa" },
    ],
    19: [
      { verse: 1, title: "Jo-Israel ochopo e Got Sinai" },
    ],
    20: [
      { verse: 1, title: "Chike Apar" },
      { verse: 22, title: "Nyiseche manono gi kende mag misango" },
    ],
    21: [
      { verse: 2, title: "Chike mag rito jo-Hibrania ma" },
      { verse: 2, title: "wasumbini" },
      { verse: 12, title: "Chike mag timbe mahundu" },
    ],
    22: [
      { verse: 1, title: "Chike mag rito mwandu" },
      { verse: 16, title: "Chike mag rito dak" },
    ],
    23: [
      { verse: 1, title: "Chike mag ng’ado bura makare kod adiera" },
      { verse: 10, title: "Chike mag Sabato" },
      { verse: 14, title: "Sewni adek madongo mitimo higa ka higa" },
      { verse: 20, title: "Malaika mar Nyasaye nolos yo" },
    ],
    24: [
      { verse: 1, title: "Jo-Israel otimo winjruok gi Nyasaye" },
    ],
    25: [
      { verse: 1, title: "Chiwo mar Hemb Romo" },
      { verse: 10, title: "Sandug Muma" },
      { verse: 23, title: "Kaka iloso mesa mar makati miketo e nyim" },
      { verse: 23, title: "Nyasaye" },
      { verse: 31, title: "Rachungi mar taya" },
    ],
    26: [
      { verse: 1, title: "Hemb Romo" },
    ],
    27: [
      { verse: 1, title: "Gedo mar kendo mar misango miwang’o pep" },
      { verse: 9, title: "Laru mar Hemb Romo" },
      { verse: 20, title: "Mo mar rachungi taya" },
    ],
    28: [
      { verse: 1, title: "Lewni mag dolo" },
      { verse: 6, title: "Law dolo miluongo ni efod" },
      { verse: 15, title: "Law akor" },
      { verse: 31, title: "Lep dolo mamoko" },
    ],
    29: [
      { verse: 1, title: "Walo jodolo" },
    ],
    30: [
      { verse: 1, title: "Kendo mar misango miwang’oe ubani" },
      { verse: 11, title: "Chiwo mar pwodhruok" },
      { verse: 17, title: "Karaya mar luok" },
      { verse: 22, title: "Mo mar pwodhruok" },
      { verse: 34, title: "Ubani" },
    ],
    31: [
      { verse: 1, title: "Bazalel gi Oholiab" },
      { verse: 12, title: "Chik Sabato" },
    ],
    32: [
      { verse: 1, title: "Nyaroya molos gi dhahabu" },
    ],
    33: [
      { verse: 7, title: "Hemb Romo" },
      { verse: 12, title: "Musa kod duong’ mar Jehova Nyasaye" },
    ],
    34: [
      { verse: 1, title: "Kite ariyo mopa manyien" },
      { verse: 29, title: "Wang’ Musa olokore" },
    ],
    35: [
      { verse: 1, title: "Chike mag Sabato" },
      { verse: 4, title: "Gik milosogo Hemb Romo" },
      { verse: 30, title: "Bazalel gi Oholiab" },
    ],
    36: [
      { verse: 8, title: "Hemb Romo" },
    ],
    37: [
      { verse: 1, title: "Sandug Muma" },
      { verse: 10, title: "Loso mesa mar makati" },
      { verse: 17, title: "Loso rachung taya" },
      { verse: 25, title: "Loso kendo mar misango miwang’oe ubani" },
    ],
    38: [
      { verse: 1, title: "Loso kendo mar misango miwang’o pep" },
      { verse: 8, title: "Loso karaya mar luokruok" },
      { verse: 9, title: "Loso laru mar hekalu" },
      { verse: 21, title: "Gik mane otigo" },
    ],
    39: [
      { verse: 1, title: "Loso lep dolo" },
      { verse: 2, title: "Law dolo miluongo ni efod" },
      { verse: 8, title: "Loso law akor" },
      { verse: 22, title: "Loso lewni mamoko mag dolo" },
      { verse: 32, title: "Musa onono tich mar Hemb Romo" },
    ],
    40: [
      { verse: 1, title: "Chielo laru mar Hemb Romo" },
      { verse: 34, title: "Duong’ Jehova Nyasaye" },
    ],
  },
  "Tim Jo-Lawi": {
    1: [
      { verse: 1, title: "Misango miwang’o pep" },
    ],
    2: [
      { verse: 1, title: "Misango mar cham" },
    ],
    3: [
      { verse: 1, title: "Misango mar lalruok" },
    ],
    4: [
      { verse: 1, title: "Misango mar golo richo" },
    ],
    5: [
      { verse: 14, title: "Misango mipwodhogo ketho" },
    ],
    6: [
      { verse: 1, title: "Misango mipwodhogo ketho mar gowi" },
      { verse: 8, title: "Misango miwang’o pep" },
      { verse: 14, title: "Misango mar cham" },
      { verse: 24, title: "Misango mar golo richo" },
    ],
    7: [
      { verse: 1, title: "Misango mipwodhogo ketho" },
      { verse: 11, title: "Misango mar lalruok" },
      { verse: 22, title: "Chik odagi chamo bor gi remo" },
      { verse: 28, title: "Migawo mar jadolo" },
    ],
    8: [
      { verse: 1, title: "Owal Harun gi yawuote e tich dolo" },
    ],
    9: [
      { verse: 1, title: "Jodolo ochako tichgi" },
    ],
    10: [
      { verse: 1, title: "Tho mar Nadab gi Abihu" },
      { verse: 6, title: "Chike moko momako jodolo" },
      { verse: 12, title: "Pok jodolo" },
    ],
    11: [
      { verse: 1, title: "Chiemo michamo gi mago makwero" },
    ],
    12: [
      { verse: 1, title: "Pwodhruok mar mon bang’ nywol" },
    ],
    13: [
      { verse: 1, title: "Chike kuom tuoche malandore mag del" },
      { verse: 47, title: "Chike kuom lewni mopur" },
    ],
    14: [
      { verse: 1, title: "Pwodhruok kuom tuoche malandore mag del" },
      { verse: 33, title: "Pwodhruok kuom gik mopur" },
    ],
    15: [
      { verse: 1, title: "Gik machwer e del mamiyo ng’ato bedo" },
      { verse: 1, title: "mogak" },
    ],
    16: [
      { verse: 1, title: "Odiechieng pwodhruok" },
    ],
    17: [
      { verse: 1, title: "Okwer chamo remo" },
    ],
    18: [
      { verse: 1, title: "Okwer timbe mag terruok" },
    ],
    19: [
      { verse: 1, title: "Chike mopogore opogore" },
    ],
    20: [
      { verse: 1, title: "Kum kuom ketho chik" },
    ],
    21: [
      { verse: 1, title: "Chike momi jodolo" },
    ],
    22: [
      { verse: 17, title: "Misengini ma Nyasaye odagi" },
    ],
    23: [
      { verse: 1, title: "Nyasi moyiedhi" },
      { verse: 3, title: "Sabato" },
      { verse: 4, title: "Pasaka kod makati ma ok oketie thowi" },
      { verse: 9, title: "Nyak mokwongo" },
      { verse: 15, title: "Sewni mag Jumbe" },
      { verse: 23, title: "Sawo mar Turumbete" },
      { verse: 26, title: "Odiechieng Pwodhruok" },
      { verse: 33, title: "Sap Kiche" },
    ],
    24: [
      { verse: 1, title: "Mo gi makati e nyim Jehova Nyasaye" },
      { verse: 10, title: "Kum mar ng’ama yanyo nying Jehova Nyasaye" },
    ],
    25: [
      { verse: 1, title: "Higa mar Sabato" },
      { verse: 8, title: "Higa mar mor" },
    ],
    26: [
      { verse: 1, title: "Gweth miyudo kuom winjo Chik" },
      { verse: 14, title: "Kum ma tamruok winjo chik kelo" },
    ],
    27: [
      { verse: 1, title: "Chike mag walo gige Jehova Nyasaye" },
    ],
  },
  "Kwan": {
    1: [
      { verse: 1, title: "Kweno mar jo-Israel" },
    ],
    2: [
      { verse: 1, title: "Chenro mar kuonde dak mag dhoudi" },
    ],
    3: [
      { verse: 1, title: "Jo-Lawi" },
    ],
    4: [
      { verse: 1, title: "Jo-Kohath" },
      { verse: 21, title: "Joka Gershon" },
      { verse: 29, title: "Joka Merari" },
      { verse: 34, title: "Kwan mar dhout jo-Lawi" },
    ],
    5: [
      { verse: 1, title: "Pwodhruok mar kambi" },
      { verse: 5, title: "Chudo mar joketho" },
      { verse: 11, title: "Tem mar dhako ma ok ja-ratiro" },
    ],
    6: [
      { verse: 1, title: "Ng’at mowal ne ruoth kaka ja-Nazir" },
      { verse: 22, title: "Gweth mar jadolo" },
    ],
    7: [
      { verse: 1, title: "Chiwo mar walo hekalu" },
    ],
    8: [
      { verse: 1, title: "Keto teyni kuonde mowinjore" },
      { verse: 5, title: "Walo jo-Lawi tenge" },
    ],
    9: [
      { verse: 1, title: "Sawo mar Pasaka" },
      { verse: 15, title: "Bor polo moumo hekalu" },
    ],
    10: [
      { verse: 1, title: "Turumbete mag fedha" },
      { verse: 11, title: "Jo-Israel owuok Sinai" },
    ],
    11: [
      { verse: 1, title: "Mach moa kuom Jehova Nyasaye" },
      { verse: 4, title: "Manna moa kuom Jehova Nyasaye" },
    ],
    12: [
      { verse: 1, title: "Miriam kod Harun okwedo Musa" },
    ],
    13: [
      { verse: 1, title: "Oor jonono Kanaan" },
      { verse: 26, title: "Dwoko mar nono piny Kanaan" },
    ],
    14: [
      { verse: 1, title: "Ji ong’anyo" },
    ],
    15: [
      { verse: 1, title: "Misengini mamoko" },
      { verse: 22, title: "Misengini mag richo ma ng’ato otimo kokia" },
      { verse: 32, title: "Ng’ama oketho Sabato inego" },
      { verse: 37, title: "Usi motwang’ e riak law" },
    ],
    16: [
      { verse: 1, title: "Kora, Dathan kod Abiram jong’anyo" },
    ],
    17: [
      { verse: 1, title: "Odunga mar Harun oloth" },
    ],
    18: [
      { verse: 1, title: "Tije mag jodolo kod jo-Lawi" },
      { verse: 8, title: "Chiwo mag jodolo kod jo-Lawi" },
    ],
    19: [
      { verse: 1, title: "Pi mar pwodhruok" },
    ],
    20: [
      { verse: 1, title: "Pi mowuok e lwanda" },
      { verse: 14, title: "Jo-Edom otamo jo-Israel kadho e pinygi" },
      { verse: 22, title: "Tho mar Harun" },
    ],
    21: [
      { verse: 1, title: "Piny Arad omuki" },
      { verse: 4, title: "Thuol mar mula" },
      { verse: 10, title: "Wuoth madhi Moab" },
      { verse: 21, title: "Olo Sihon kod Og" },
    ],
    22: [
      { verse: 1, title: "Balak oluonge Balaam" },
      { verse: 21, title: "Punda mar Balaam" },
    ],
    23: [
      { verse: 1, title: "Ote mokwongo mane Nyasaye omiyo Balaam" },
      { verse: 13, title: "Ote mar ariyo mane Nyasaye omiyo Balaam" },
      { verse: 27, title: "Ote mar adek mane Nyasaye omiyo Balaam" },
    ],
    24: [
      { verse: 15, title: "Ote mar ang’wen mane Nyasaye omiyo" },
      { verse: 15, title: "Balaam" },
      { verse: 20, title: "Ote mogik mane Nyasaye omiyo Balaam" },
    ],
    25: [
      { verse: 1, title: "Moab olombo Israel" },
    ],
    26: [
      { verse: 1, title: "Kweno mar ariyo" },
    ],
    27: [
      { verse: 1, title: "Nyi Zelofehad" },
      { verse: 12, title: "Oyier Joshua mondo okaw kar Musa" },
    ],
    28: [
      { verse: 1, title: "Misengini michiwo pile ka pile" },
      { verse: 9, title: "Misengini mag Sabato" },
      { verse: 11, title: "Misengini mag dwe ka dwe" },
      { verse: 16, title: "Pasaka" },
      { verse: 26, title: "Nyasi mag jumbe" },
    ],
    29: [
      { verse: 1, title: "Nyasi mag turumbete" },
      { verse: 7, title: "Odiechieng’ mar pwodhruok" },
      { verse: 12, title: "Nyasi mag hekalu" },
    ],
    30: [
      { verse: 1, title: "Chike mag kwong’ruok" },
    ],
    31: [
      { verse: 1, title: "Lweny gi jo-Midian" },
      { verse: 25, title: "Pogo gigo moyaki kod mope" },
    ],
    32: [
      { verse: 1, title: "Dhout Israel mane odong’ loka Jordan" },
    ],
    33: [
      { verse: 1, title: "Migepe mag wuodh jo-Israel" },
    ],
    34: [
      { verse: 1, title: "Tong’ piny Kanaan" },
    ],
    35: [
      { verse: 1, title: "Miech jo-Lawi" },
      { verse: 6, title: "Mier mag tony" },
    ],
    36: [
      { verse: 1, title: "Pok mwandu mag nyi Zelofehad" },
    ],
  },
  "Rapar Mar Chik": {
    1: [
      { verse: 1, title: "Chik mondo giwuog Horeb" },
      { verse: 9, title: "Yiero mar jotelo" },
      { verse: 19, title: "Okwach kich oor" },
      { verse: 26, title: "Ng’anyo ne Jehova Nyasaye" },
    ],
    2: [
      { verse: 1, title: "Digni jo-Israel e thim" },
      { verse: 24, title: "Olo Sihon Ruodh Heshbon" },
    ],
    3: [
      { verse: 1, title: "Olo Og Ruodh Bashan" },
      { verse: 12, title: "Keto tong’ mar piny" },
      { verse: 21, title: "Otam Musa ng’ado Aora Jordan" },
    ],
    4: [
      { verse: 1, title: "Musa ojiwo jo-Israel mondo orit chik" },
      { verse: 15, title: "Timbe mag lamo nyiseche manono" },
      { verse: 32, title: "Jehova Nyasaye e Nyasaye" },
      { verse: 41, title: "Mier mag tony" },
      { verse: 44, title: "Weche motelo mag chike" },
    ],
    5: [
      { verse: 1, title: "Chike Apar" },
    ],
    6: [
      { verse: 1, title: "En Jehova Nyasaye ma Nyasachu" },
    ],
    7: [
      { verse: 1, title: "Riembo ogendini mamoko" },
    ],
    8: [
      { verse: 1, title: "Kik wiu wil gi Jehova Nyasaye" },
    ],
    9: [
      { verse: 1, title: "Kum miyudo kuom weyo Nyasaye" },
      { verse: 7, title: "Nyaroch mula" },
    ],
    10: [
      { verse: 1, title: "Kite machal gi mokwongo" },
      { verse: 12, title: "Luoruru Jehova Nyasaye" },
    ],
    11: [
      { verse: 1, title: "Heruru Jehova Nyasaye kendo uluore" },
    ],
    12: [
      { verse: 1, title: "Kar lemo mar jo-Israel" },
    ],
    13: [
      { verse: 1, title: "Lamo nyiseche mamoko" },
    ],
    14: [
      { verse: 1, title: "Chiemo maler kod ma ok ler" },
      { verse: 22, title: "Chiwo mar achiel kuom apar" },
    ],
    15: [
      { verse: 1, title: "Higa mar weyo gope" },
      { verse: 12, title: "Weyo wasumbini thuolo" },
      { verse: 19, title: "Chiayo mokwong nywolo" },
    ],
    16: [
      { verse: 1, title: "Chike mag Pasaka" },
      { verse: 9, title: "Sewni mag jumbe" },
      { verse: 13, title: "Sawo mag kiche" },
      { verse: 18, title: "Chike mag ng’ado bura" },
      { verse: 21, title: "Lamo nyiseche mamoko" },
    ],
    17: [
      { verse: 8, title: "Kuonde yalo buche" },
      { verse: 14, title: "Chike mag tich Ruoth" },
    ],
    18: [
      { verse: 1, title: "Pok ma jodolo gi jo-Lawi yudo" },
      { verse: 9, title: "Timbe mamono" },
      { verse: 14, title: "Janabi" },
    ],
    19: [
      { verse: 1, title: "Mier madongo mag pondo" },
      { verse: 15, title: "Joneno" },
    ],
    20: [
      { verse: 1, title: "Chike mag lweny" },
    ],
    21: [
      { verse: 1, title: "Pwodhruok mitimo ka janek ok oyudi" },
      { verse: 10, title: "Chike mag kendo dhako momak e lweny" },
      { verse: 15, title: "Ratiro mar wuowi makayo" },
      { verse: 18, title: "Wuowi ma jendeke" },
      { verse: 22, title: "Chike mamoko" },
    ],
    22: [
      { verse: 13, title: "Ketho keny" },
    ],
    23: [
      { verse: 1, title: "Joma nyaka gol e dier chokruok" },
      { verse: 9, title: "Bedo mogak e kambi" },
      { verse: 15, title: "Chike mamoko" },
    ],
    24: [
    ],
    25: [
    ],
    26: [
      { verse: 1, title: "Chiwo mar gik mokwongo nyak kod achiel" },
      { verse: 1, title: "kuom apar" },
      { verse: 16, title: "Luwuru chike Jehova Nyasaye" },
    ],
    27: [
      { verse: 1, title: "Kendo mar misango man e Got Ebal" },
      { verse: 9, title: "Weche mag kwong’ moa e Got Ebal" },
    ],
    28: [
      { verse: 1, title: "Gweth miyudo kuom rito chik" },
      { verse: 15, title: "Kwong’ miyudo kuom tamruok rito chik" },
    ],
    29: [
      { verse: 1, title: "Oket singruok manyien" },
    ],
    30: [
      { verse: 1, title: "Gweth miyudo ka isedwogo ir Jehova Nyasaye" },
      { verse: 11, title: "Yiero ngima kata tho" },
    ],
    31: [
      { verse: 1, title: "Joshua obedo ruoth bang’ Musa" },
      { verse: 9, title: "Somo chik ne jo-Israel" },
      { verse: 14, title: "Okor ng’anyo mar jo-Israel" },
      { verse: 30, title: "Wend Musa" },
    ],
    32: [
      { verse: 48, title: "Okor ni Musa biro tho ewi Got Nebo" },
    ],
    33: [
      { verse: 1, title: "Musa ogwedho dhout Israel" },
    ],
    34: [
      { verse: 1, title: "Tho mar Musa" },
    ],
  },
  "Joshua": {
    1: [
      { verse: 1, title: "Jehova Nyasaye ogolo chik ne Joshua" },
    ],
    2: [
      { verse: 1, title: "Rahab kod joma oor mondo odhi onon piny" },
    ],
    3: [
      { verse: 1, title: "Jo-Israel ong’ado Aora Jordan" },
    ],
    4: [
    ],
    5: [
      { verse: 1, title: "Oter jo-Israel nyangu Gilgal" },
      { verse: 13, title: "Jeriko opodho" },
    ],
    6: [
    ],
    7: [
      { verse: 1, title: "Richo mar Akan" },
    ],
    8: [
      { verse: 1, title: "Ai okethi" },
      { verse: 30, title: "Otim singruok mar Sandug Muma e Got" },
      { verse: 30, title: "Ebal" },
    ],
    9: [
      { verse: 1, title: "Jo-Gibeon owuondo jo-Israel" },
    ],
    10: [
      { verse: 1, title: "Chieng’ ochung’ kar tiende" },
      { verse: 16, title: "Ruodhi abich mag Amor onegi" },
      { verse: 29, title: "Olo mier madongo man milambo" },
    ],
    11: [
      { verse: 1, title: "Olo ruodhi ma yo nyandwat" },
    ],
    12: [
      { verse: 1, title: "Nying ruodhi mane olo" },
    ],
    13: [
      { verse: 1, title: "Kuonde mapok okaw e piny Kanaan" },
      { verse: 8, title: "Pok mar piny ma yo wuok chieng’ mar Aora" },
      { verse: 8, title: "Jordan" },
    ],
    14: [
      { verse: 1, title: "Pok mar piny ma yo wuok chieng’ mar Aora" },
      { verse: 1, title: "Jordan" },
      { verse: 6, title: "Hebron omi Kaleb" },
    ],
    15: [
      { verse: 1, title: "Pok mar Juda" },
      { verse: 13, title: "Bath piny Juda momi Kaleb" },
    ],
    16: [
      { verse: 1, title: "Pok mar jo-Efraim gi jo-Manase" },
    ],
    17: [
    ],
    18: [
      { verse: 1, title: "Pogo kuonde mane odong’" },
      { verse: 11, title: "Pok mar joka Benjamin" },
    ],
    19: [
      { verse: 1, title: "Pok mar joka Simeon" },
      { verse: 10, title: "Pok mar joka Zebulun" },
      { verse: 17, title: "Pok mar joka Isakar" },
      { verse: 24, title: "Pok mar joka Asher" },
      { verse: 32, title: "Pok mar joka Naftali" },
      { verse: 40, title: "Pok mar joka Dan" },
      { verse: 49, title: "Pok mar joka Joshua" },
    ],
    20: [
      { verse: 1, title: "Mier madongo mag tony" },
    ],
    21: [
      { verse: 1, title: "Mier matindo mag jo-Lawi" },
    ],
    22: [
      { verse: 1, title: "Dhoudi ma yo wuok chieng’ odwogo dala" },
    ],
    23: [
      { verse: 1, title: "Joshua ogoyo oriti ne jotelo" },
    ],
    24: [
      { verse: 1, title: "Singruok manyien e dala Shekem" },
      { verse: 28, title: "Tho mar Joshua" },
    ],
  },
  "Jong’ad Bura": {
    1: [
      { verse: 1, title: "Jo-Israel okedo gi Jo-Kanaan modong’" },
      { verse: 17, title: "a" },
      { verse: 26, title: "a" },
      { verse: 26, title: "Dala Maduong' mar" },
      { verse: 26, title: "Othidhe." },
    ],
    2: [
      { verse: 1, title: "Malaika mar Jehova Nyasaye oor Bokim" },
      { verse: 6, title: "Tamruok winjo wach kod loch" },
    ],
    3: [
      { verse: 7, title: "Othniel" },
      { verse: 12, title: "Ehud" },
      { verse: 14, title: "a" },
      { verse: 25, title: "a" },
      { verse: 25, title: "Dala Maduong' mar" },
      { verse: 25, title: "Othidhe." },
      { verse: 31, title: "Shamgar" },
    ],
    4: [
      { verse: 1, title: "Debora" },
    ],
    5: [
      { verse: 1, title: "Wend Debora" },
    ],
    6: [
      { verse: 1, title: "Gideon" },
    ],
    7: [
      { verse: 1, title: "Gideon oloyo jo-Midian" },
    ],
    8: [
      { verse: 1, title: "Zeba gi Zalmuna" },
      { verse: 22, title: "Efod mar Gideon" },
      { verse: 28, title: "Tho mar Gideon" },
    ],
    9: [
      { verse: 1, title: "Abimelek" },
    ],
    10: [
      { verse: 1, title: "Tola" },
      { verse: 3, title: "Jair" },
      { verse: 6, title: "Jeftha" },
    ],
    11: [
    ],
    12: [
      { verse: 1, title: "Jeftha gi Efraim" },
      { verse: 8, title: "Ibzan, Elon kod Abdon" },
    ],
    13: [
      { verse: 1, title: "Nywol mar Samson" },
    ],
    14: [
      { verse: 1, title: "Nyombo mar Samson" },
    ],
    15: [
      { verse: 1, title: "Samson ochulo kuor ne jo-Filistia" },
    ],
    16: [
      { verse: 1, title: "Samson kod Delila" },
      { verse: 23, title: "Tho mar Samson" },
    ],
    17: [
      { verse: 1, title: "Nyiseche mopa mag Mika" },
    ],
    18: [
      { verse: 1, title: "Jo-Dan odak Laish" },
    ],
    19: [
      { verse: 1, title: "Ja-Lawi gi chotne" },
    ],
    20: [
      { verse: 1, title: "Jo-Israel okedo gi jo-Benjamin" },
    ],
    21: [
      { verse: 1, title: "Onwang’ mon ne jo-Benjamin" },
    ],
  },
  "Ruth": {
    1: [
      { verse: 1, title: "Naomi gi Ruth" },
    ],
    2: [
      { verse: 1, title: "Ruth oromo gi Boaz" },
    ],
    3: [
      { verse: 1, title: "Ruth gi Boaz e kar dino cham" },
    ],
    4: [
      { verse: 1, title: "Boaz okendo Ruth" },
      { verse: 13, title: "Anywolo mar Daudi" },
    ],
  },
  "1 Samuel": {
    1: [
      { verse: 1, title: "Nywol mar Samuel" },
      { verse: 21, title: "Hana osingo ni Nyasaye Samuel" },
    ],
    2: [
      { verse: 1, title: "Lamo mar Hana" },
      { verse: 12, title: "Yawuot Eli macheje" },
      { verse: 27, title: "Wach mokor makwedo od Eli" },
    ],
    3: [
      { verse: 1, title: "Jehova Nyasaye oluongo Samuel" },
    ],
    4: [
      { verse: 2, title: "Jo-Filistia okawo Sandug Muma" },
      { verse: 12, title: "Tho mar Eli" },
    ],
    5: [
      { verse: 1, title: "Sandug Muma ni Ashdod gi Ekron" },
    ],
    6: [
      { verse: 1, title: "Sandug Muma odwok Israel" },
    ],
    7: [
      { verse: 2, title: "Samuel oloyo jo-Filistia Mizpa" },
    ],
    8: [
      { verse: 1, title: "Jo-Israel okwayo mondo omigi Ruoth" },
    ],
    9: [
      { verse: 1, title: "Samuel owiro Saulo mondo obed Ruoth" },
    ],
    10: [
      { verse: 9, title: "Oket Saulo ruoth" },
    ],
    11: [
      { verse: 1, title: "Saulo oreso Dala Maduong’ mar Jabesh" },
      { verse: 12, title: "Owal Saulo bedo ruoth" },
    ],
    12: [
      { verse: 1, title: "Twak ma Samuel ogoyogo oriti" },
    ],
    13: [
      { verse: 1, title: "Samuel okwero Saulo" },
      { verse: 16, title: "Jo-Israel onge gi gige lweny" },
      { verse: 23, title: "Jonathan omonjo jo-Filistia" },
    ],
    14: [
      { verse: 15, title: "Jo-Israel oloyo jo-Filistia" },
      { verse: 24, title: "Jonathan chamo mor kich" },
      { verse: 49, title: "Jood Saulo" },
    ],
    15: [
      { verse: 1, title: "Jehova Nyasaye odagi ni Saulo ok bed" },
      { verse: 1, title: "ruoth" },
    ],
    16: [
      { verse: 1, title: "Samuel owiro Daudi ruoth" },
      { verse: 14, title: "Daudi tiyone Saulo" },
    ],
    17: [
      { verse: 1, title: "Daudi gi Goliath" },
    ],
    18: [
      { verse: 1, title: "Saulo obedo gi nyiego kuom Daudi" },
    ],
    19: [
      { verse: 1, title: "Saulo otemo nego Daudi" },
    ],
    20: [
      { verse: 1, title: "Daudi kod Jonathan" },
    ],
    21: [
      { verse: 1, title: "Daudi odhi Nob" },
      { verse: 10, title: "Daudi odhi Gath" },
    ],
    22: [
      { verse: 1, title: "Daudi odhi Adulam kod Mizpa" },
      { verse: 6, title: "Saulo onego jodolo mag Nob" },
    ],
    23: [
      { verse: 1, title: "Daudi oreso Keila" },
      { verse: 7, title: "Saulo olawo Daudi" },
      { verse: 29, title: "a" },
    ],
    24: [
      { verse: 1, title: "Daudi ong’wono ne Saulo ma ok onege" },
      { verse: 3, title: "a" },
      { verse: 3, title: "Sela Hamalekoth" },
      { verse: 3, title: "Kama lwanda" },
      { verse: 3, title: "opogoree." },
    ],
    25: [
      { verse: 1, title: "Daudi, Nabal kod Abigael" },
    ],
    26: [
      { verse: 1, title: "Daudi ochako oweyo Saulo ma ok onego" },
    ],
    27: [
      { verse: 1, title: "Daudi odak e piny jo-Filistia" },
    ],
    28: [
      { verse: 3, title: "Saulo gi ajwoga madhako modak Endor" },
    ],
    29: [
      { verse: 1, title: "Akish odwoko Daudi Ziklag" },
    ],
    30: [
      { verse: 1, title: "Daudi onego jo-Amalek" },
    ],
    31: [
      { verse: 1, title: "Tho Saulo gi yawuote" },
    ],
  },
  "2 Samuel": {
    1: [
      { verse: 1, title: "Daudi owinjo tho mar Saulo" },
      { verse: 17, title: "Daudi oywago Saulo gi Jonathan" },
    ],
    2: [
      { verse: 1, title: "Daudi owir mondo obed ruodh Juda" },
      { verse: 8, title: "Lweny e kind dhood Daudi gi dhood Saulo" },
    ],
    3: [
      { verse: 6, title: "Abner odhi ir Daudi Hebron" },
      { verse: 22, title: "Joab onego Abner" },
    ],
    4: [
      { verse: 1, title: "Oneg Ish-Bosheth" },
    ],
    5: [
      { verse: 1, title: "Daudi obedo ruodh Israel" },
      { verse: 6, title: "Daudi okawo Jerusalem" },
      { verse: 17, title: "Daudi oloyo jo-Filistia" },
    ],
    6: [
      { verse: 1, title: "Sandug Muma okel Jerusalem" },
    ],
    7: [
      { verse: 1, title: "Singo mar Nyasaye ni Daudi" },
      { verse: 18, title: "Lamo mar Daudi" },
    ],
    8: [
      { verse: 1, title: "Lwenje ma Daudi oloyo" },
      { verse: 15, title: "Jodong Daudi" },
    ],
    9: [
      { verse: 1, title: "Daudi gi Mefibosheth" },
    ],
    10: [
      { verse: 1, title: "Daudi oloyo jo-Amon e lweny" },
    ],
    11: [
      { verse: 1, title: "Daudi gi Bathsheba" },
    ],
    12: [
      { verse: 1, title: "Nathan okwero Daudi" },
    ],
    13: [
      { verse: 1, title: "Amnon gi Tamar" },
      { verse: 23, title: "Abisalom onego Amnon" },
    ],
    14: [
      { verse: 1, title: "Abisalom odwogo Jerusalem" },
    ],
    15: [
      { verse: 1, title: "Abisalom ochano loko loch" },
      { verse: 13, title: "Daudi oringo odhi pondo" },
    ],
    16: [
      { verse: 1, title: "Daudi gi Ziba" },
      { verse: 5, title: "Shimei okwong’o Daudi" },
      { verse: 15, title: "Hushai gi Ahithofel ong’adone Abisalom" },
      { verse: 15, title: "rieko" },
    ],
    17: [
      { verse: 24, title: "Tho mar Abisalom" },
    ],
    18: [
      { verse: 19, title: "Daudi oywak" },
    ],
    19: [
      { verse: 9, title: "Daudi odok Jerusalem" },
    ],
    20: [
      { verse: 1, title: "Sheba ong’anyo ni Daudi" },
      { verse: 23, title: "Jotelo man ka Daudi" },
    ],
    21: [
      { verse: 1, title: "Ochul kuor nikech jo-Gibeon" },
      { verse: 15, title: "Lwenje mane oked gi jo-Filistia" },
    ],
    22: [
      { verse: 1, title: "Wend Daudi mar pak" },
    ],
    23: [
      { verse: 1, title: "Weche Daudi mogik" },
      { verse: 8, title: "Thuondi mag Daudi" },
    ],
    24: [
      { verse: 1, title: "Daudi okwano jolweny" },
      { verse: 18, title: "Daudi ogero kendo mar misango" },
    ],
  },
  "1 Ruodhi": {
    1: [
      { verse: 1, title: "Adonija oketore kende kaka ruoth" },
      { verse: 28, title: "Daudi oketo Solomon ruoth" },
    ],
    2: [
      { verse: 1, title: "Daudi siemo Solomon" },
      { verse: 13, title: "Loch Solomon ogurore" },
    ],
    3: [
      { verse: 1, title: "Solomon okwayo rieko" },
      { verse: 16, title: "Ng’ado bura makare" },
    ],
    4: [
      { verse: 1, title: "Jodong Solomon gi jotelo" },
      { verse: 20, title: "Konyruok mapile mag Solomon" },
      { verse: 29, title: "Rieko Solomon" },
    ],
    5: [
      { verse: 1, title: "Ikruok mar gero hekalu" },
    ],
    6: [
      { verse: 1, title: "Solomon gero hekalu" },
    ],
    7: [
      { verse: 1, title: "Solomon ogero ode" },
      { verse: 13, title: "Gige hekalu" },
    ],
    8: [
      { verse: 1, title: "Sandug Muma okel e hekalu" },
      { verse: 22, title: "Lemo mar Solomon mar gwedho hekalu" },
      { verse: 62, title: "Solomon ogwedho hekalu" },
    ],
    9: [
      { verse: 1, title: "Jehova Nyasaye ofwenyore ne Solomon" },
      { verse: 10, title: "Tije mamoko mag Solomon" },
    ],
    10: [
      { verse: 1, title: "Ruoth madhako mar Sheba olimo Solomon" },
      { verse: 14, title: "Huma mar mwandu Solomon" },
    ],
    11: [
      { verse: 1, title: "Mond Solomon" },
      { verse: 14, title: "Wasik Solomon" },
      { verse: 26, title: "Jeroboam ong’anyo ne Solomon" },
      { verse: 41, title: "Tho mar Solomon" },
    ],
    12: [
      { verse: 1, title: "Israel ong’anyo ne Rehoboam" },
      { verse: 25, title: "Nyiroye mag dhahabu man Bethel gi Dan" },
    ],
    13: [
      { verse: 1, title: "Ng’at Nyasaye moa Juda" },
    ],
    14: [
      { verse: 1, title: "Wach mane Ahija okoro kuom Jeroboam" },
      { verse: 21, title: "Rehoboam ruodh Juda" },
    ],
    15: [
      { verse: 1, title: "Abija ruodh Juda" },
      { verse: 9, title: "Asa ruodh Juda" },
      { verse: 25, title: "Nadab ruodh Israel" },
      { verse: 33, title: "Baasha ruodh Israel" },
    ],
    16: [
      { verse: 8, title: "Ela ruodh Israel" },
      { verse: 15, title: "Zimri ruodh Israel" },
      { verse: 21, title: "Omri ruodh Israel" },
      { verse: 29, title: "Ahab obedo ruodh Israel" },
    ],
    17: [
      { verse: 1, title: "Elija olando ni oro maduong’ biro" },
      { verse: 2, title: "Agak omiyo Elija chiemo" },
      { verse: 7, title: "Elija kod dhako ma chwore otho man" },
      { verse: 7, title: "Zarefath" },
    ],
    18: [
      { verse: 1, title: "Elija gi Obadia" },
      { verse: 16, title: "Elija ewi Got Karmel" },
    ],
    19: [
      { verse: 1, title: "Elija oringo odhi Horeb" },
      { verse: 10, title: "Jehova Nyasaye ofwenyore ne Elija" },
      { verse: 19, title: "Luong mar Elisha" },
    ],
    20: [
      { verse: 1, title: "Ben-Hadad omonjo Samaria" },
      { verse: 13, title: "Ahab oloyo Ben-Hadad" },
      { verse: 35, title: "Janabi okwong’o Ahab" },
    ],
    21: [
      { verse: 1, title: "Puoth Naboth mar mzabibu" },
    ],
    22: [
      { verse: 1, title: "Mikaya okoro Ahab" },
      { verse: 29, title: "Oneg Ahab e piny Ramoth Gilead" },
      { verse: 41, title: "Jehoshafat ruodh Juda" },
      { verse: 51, title: "Ahazia ruodh Israel" },
    ],
  },
  "2 Ruodhi": {
    1: [
      { verse: 1, title: "Jehova Nyasaye ong’ado bura ne Ahazia" },
    ],
    2: [
      { verse: 1, title: "Elija oter e polo malo" },
      { verse: 19, title: "Pi marach olok mamit" },
      { verse: 23, title: "Elisha oyany" },
    ],
    3: [
      { verse: 1, title: "Jo-Moab ong’anyo" },
    ],
    4: [
      { verse: 1, title: "Mo mar dhako ma chwore otho" },
      { verse: 8, title: "Ores ngima wuod ja-Shunem" },
      { verse: 38, title: "Tho man ei agulu" },
      { verse: 42, title: "Omi ji mia achiel chiemo" },
    ],
    5: [
      { verse: 1, title: "Ochang dhoho Naaman" },
    ],
    6: [
      { verse: 1, title: "Wi le olewo ewi pi" },
      { verse: 8, title: "Elisha omako jo-Aram ka muofu" },
      { verse: 24, title: "Kech omako Samaria ma wasigu olworo" },
    ],
    7: [
      { verse: 3, title: "Ageng’a mane olworo dala maduong’no ogol" },
    ],
    8: [
      { verse: 1, title: "Odwokne chi ja-Shunem lope" },
      { verse: 7, title: "Hazael onego Ben-Hadad" },
      { verse: 16, title: "Jehoram ruodh Juda" },
      { verse: 25, title: "Ahazia ruodh Juda" },
    ],
    9: [
      { verse: 1, title: "Owir Jehu ruodh Israel" },
      { verse: 14, title: "Jehu onego Joram kod Ahazia" },
      { verse: 30, title: "Oneg Jezebel" },
    ],
    10: [
      { verse: 1, title: "Oneg jood Ahab" },
      { verse: 18, title: "Jodolo mag Baal onegi" },
    ],
    11: [
      { verse: 1, title: "Athalia kod Joash" },
    ],
    12: [
      { verse: 1, title: "Joash oloso kuonde momukore mag hekalu" },
    ],
    13: [
      { verse: 1, title: "Jehoahaz ruodh Israel" },
      { verse: 10, title: "Jehoash ruodh Israel" },
    ],
    14: [
      { verse: 1, title: "Amazia ruodh Juda" },
      { verse: 23, title: "Jeroboam obedo ruodh Israel" },
    ],
    15: [
      { verse: 1, title: "Azaria ruodh Juda" },
      { verse: 8, title: "Zekaria ruodh Israel" },
      { verse: 13, title: "Shalum ruodh Israel" },
      { verse: 17, title: "Menahem ruodh Israel" },
      { verse: 23, title: "Pekahia ruodh Israel" },
      { verse: 27, title: "Peka ruodh Israel" },
      { verse: 32, title: "Jotham ruodh Juda" },
    ],
    16: [
      { verse: 1, title: "Ahaz ruodh Juda" },
    ],
    17: [
      { verse: 1, title: "Hoshea ruoth mogik mar Israel" },
      { verse: 7, title: "Jo-Israel oter e twech nikech richo" },
      { verse: 24, title: "Okel jopinje moko mondo odag Samaria" },
    ],
    18: [
      { verse: 1, title: "Hezekia ruodh Juda" },
      { verse: 17, title: "Senakerib ochano kedo gi Jerusalem" },
    ],
    19: [
      { verse: 1, title: "Okor kaka Jerusalem ibiro resi" },
      { verse: 14, title: "Lamo mar Hezekia" },
      { verse: 20, title: "Isaya okoro ni Senakerib biro podho" },
    ],
    20: [
      { verse: 1, title: "Tuo mar Hezekia" },
      { verse: 12, title: "Joote moa Babulon" },
    ],
    21: [
      { verse: 1, title: "Manase ruodh Juda" },
      { verse: 19, title: "Amon ruodh Juda" },
    ],
    22: [
      { verse: 1, title: "Oyud Kitap Chik" },
    ],
    23: [
      { verse: 1, title: "Josia otimo winjruok" },
      { verse: 31, title: "Jehoahaz ruodh Juda" },
      { verse: 36, title: "Jehoyakim ruodh Juda" },
    ],
    24: [
      { verse: 8, title: "Jehoyakin ruodh Juda" },
      { verse: 18, title: "Zedekia ruoth Juda" },
    ],
    25: [
      { verse: 1, title: "Jerusalem opodho" },
      { verse: 27, title: "Ogony Jehoyakin" },
    ],
  },
  "1 Weche Mag Ndalo": {
    1: [
      { verse: 1, title: "Nonro mar ndiko chakre Adam nyaka" },
      { verse: 1, title: "Ibrahim" },
      { verse: 1, title: "Yawuot Noa" },
      { verse: 5, title: "Joka Jafeth" },
      { verse: 8, title: "Joka Ham" },
      { verse: 17, title: "Joka Shem" },
      { verse: 28, title: "Joka Ibrahim" },
      { verse: 29, title: "Nyikwa Hagar" },
      { verse: 32, title: "Nyikwa Ketura" },
      { verse: 34, title: "Nyikwa Sara" },
      { verse: 35, title: "Yawuot Esau" },
      { verse: 38, title: "Jo-Seir man Edom" },
      { verse: 41, title: "a" },
      { verse: 43, title: "a" },
      { verse: 43, title: "Alvan" },
      { verse: 43, title: "Alian." },
      { verse: 43, title: "Ruodhi mag Edom" },
    ],
    2: [
      { verse: 1, title: "Yawuot Israel" },
      { verse: 3, title: "Juda" },
      { verse: 3, title: "Ne Yawuot Hezron" },
      { verse: 10, title: "Yawuot Ram wuod Hezron" },
      { verse: 18, title: "Kaleb Wuod Hezron" },
      { verse: 25, title: "Jeramel wuod Hezron" },
      { verse: 42, title: "Anywola Kaleb" },
    ],
    3: [
      { verse: 1, title: "Yawuot Daudi" },
      { verse: 10, title: "Ruodhi mag Juda" },
      { verse: 17, title: "Nonro mar joka ruoth bang’ ka gisewuok e" },
      { verse: 17, title: "twech" },
    ],
    4: [
      { verse: 1, title: "Nyikwa Juda mamoko" },
      { verse: 24, title: "Nyikwa Simeon" },
    ],
    5: [
      { verse: 1, title: "Nyikwa Reuben" },
      { verse: 11, title: "Nyikwa Gad" },
      { verse: 23, title: "Nus mar dhood jo-Manase" },
    ],
    6: [
      { verse: 1, title: "Lawi" },
      { verse: 31, title: "Jower mag hekalu" },
    ],
    7: [
      { verse: 1, title: "Isakar" },
      { verse: 6, title: "Benjamin" },
      { verse: 13, title: "Naftali" },
      { verse: 14, title: "Manase" },
      { verse: 20, title: "Efraim" },
      { verse: 30, title: "Asher" },
    ],
    8: [
      { verse: 1, title: "Nonro mar Saulo ja-Benjamin" },
    ],
    9: [
      { verse: 2, title: "Ji modak Jerusalem" },
      { verse: 35, title: "Nonro mar anywola Saulo" },
    ],
    10: [
      { verse: 1, title: "Tho mar Saulo" },
    ],
    11: [
      { verse: 1, title: "Daudi obedo ruodh Israel" },
      { verse: 4, title: "Daudi okawo dala mar Jerusalem" },
      { verse: 10, title: "Thuondi mag Daudi" },
    ],
    12: [
      { verse: 1, title: "Jolweny mane odhi moriwore gi Daudi" },
      { verse: 23, title: "Joma moko oriwore gi Daudi Hebron" },
    ],
    13: [
      { verse: 1, title: "Duogo Sandug Muma" },
    ],
    14: [
      { verse: 1, title: "Jood Daudi gi anywolane" },
      { verse: 8, title: "Daudi oloyo jo-Filistia" },
    ],
    15: [
      { verse: 1, title: "Okel Sandug Muma mar Nyasaye Jerusalem" },
      { verse: 21, title: "alamoth" },
      { verse: 21, title: "a" },
      { verse: 22, title: "a" },
      { verse: 22, title: "sheminith." },
      { verse: 22, title: "b" },
    ],
    16: [
      { verse: 5, title: "b" },
      { verse: 7, title: "Zaburi mar Daudi mar goyo erokamano" },
    ],
    17: [
      { verse: 1, title: "Singruok mar Nyasaye ne Daudi" },
      { verse: 16, title: "Lemo mar Daudi" },
    ],
    18: [
      { verse: 1, title: "Lwenje mane Daudi oloyo" },
      { verse: 14, title: "Jodongo mag Daudi" },
    ],
    19: [
      { verse: 1, title: "Kedo gi jo-Amon" },
    ],
    20: [
      { verse: 1, title: "Okaw dala miluongo ni Raba" },
      { verse: 4, title: "Kedo gi jo-Filistia" },
    ],
    21: [
      { verse: 1, title: "Daudi okwano joma nyalo dhiyo e lweny" },
    ],
    22: [
      { verse: 2, title: "Ikruok mar gero hekalu" },
    ],
    23: [
      { verse: 1, title: "Jo-Lawi" },
      { verse: 7, title: "Joka Gershom" },
      { verse: 12, title: "Joka Kohath" },
      { verse: 21, title: "Joka Merari" },
    ],
    24: [
      { verse: 1, title: "Migepe mag jodolo" },
      { verse: 20, title: "Joka Lawi mamoko" },
    ],
    25: [
      { verse: 1, title: "Jower" },
    ],
    26: [
      { verse: 1, title: "Jorit rangeye" },
      { verse: 20, title: "Jokeno kod jotelo mamoko" },
    ],
    27: [
      { verse: 1, title: "Migepe mag jolweny" },
      { verse: 16, title: "Jotend dhoudi" },
      { verse: 25, title: "Jodong ruoth" },
    ],
    28: [
      { verse: 1, title: "Daudi ochano gero hekalu" },
    ],
    29: [
      { verse: 1, title: "Chiwo mag hekalu" },
      { verse: 10, title: "Lemo mar Daudi" },
      { verse: 21, title: "Solomon obedo ruoth" },
      { verse: 26, title: "Tho mar Daudi" },
    ],
  },
  "2 Weche Mag Ndalo": {
    1: [
      { verse: 1, title: "Solomon okwayo rieko" },
    ],
    2: [
      { verse: 1, title: "Chenro mar gero hekalu" },
    ],
    3: [
      { verse: 1, title: "Solomon ogero hekalu" },
    ],
    4: [
      { verse: 1, title: "Gige hekalu" },
    ],
    5: [
      { verse: 2, title: "Sandug Muma okel e hekalu" },
    ],
    6: [
      { verse: 12, title: "Lemb Solomon mar Walo hekalu" },
    ],
    7: [
      { verse: 1, title: "Walo hekalu" },
      { verse: 11, title: "Jehova Nyasaye ofwenyore ne Solomon" },
    ],
    8: [
      { verse: 1, title: "Gik mamoko mane Solomon otimo" },
    ],
    9: [
      { verse: 1, title: "Ruoth madhako mar Sheba odhi limo" },
      { verse: 1, title: "Solomon" },
      { verse: 13, title: "Duong’ mane Solomon nigo" },
      { verse: 29, title: "Tho mar Solomon" },
    ],
    10: [
      { verse: 1, title: "Jo-Israel odagi Rehoboam" },
    ],
    11: [
      { verse: 5, title: "Rehoboam ochielo Juda motegno" },
      { verse: 18, title: "Joka Rehoboam" },
    ],
    12: [
      { verse: 1, title: "Shishak omonjo Jerusalem" },
    ],
    13: [
      { verse: 1, title: "Abija obedo ruodh Juda" },
    ],
    14: [
      { verse: 2, title: "Asa obedo ruodh Juda" },
    ],
    15: [
      { verse: 1, title: "Asa oloso piny Juda" },
    ],
    16: [
      { verse: 1, title: "Higni mogik mag Asa" },
    ],
    17: [
      { verse: 1, title: "Jehoshafat ruodh Juda" },
    ],
    18: [
      { verse: 1, title: "Mikaya okoro wach marach kuom Ahab" },
      { verse: 28, title: "Onego Ahab e Ramoth Gilead" },
    ],
    19: [
      { verse: 4, title: "Jehoshafat oyiero jong’ad bura" },
    ],
    20: [
      { verse: 1, title: "Jehoshafat oloyo jo-Moab kod jo-Amon" },
      { verse: 31, title: "Giko mar loch Jehoshafat" },
    ],
    21: [
      { verse: 4, title: "Jehoram ruodh Juda" },
    ],
    22: [
      { verse: 1, title: "Loch Ahazia ruodh Juda" },
      { verse: 10, title: "Athalia kod Joash" },
    ],
    23: [
    ],
    24: [
      { verse: 1, title: "Joash oloso kuonde momukore e hekalu" },
      { verse: 17, title: "Timbe Joash maricho" },
    ],
    25: [
      { verse: 1, title: "Amazia ruodh Juda" },
    ],
    26: [
      { verse: 1, title: "Uzia ruodh Juda" },
    ],
    27: [
      { verse: 1, title: "Jotham ruodh Juda" },
    ],
    28: [
      { verse: 1, title: "Ahaz ruodh Juda" },
    ],
    29: [
      { verse: 1, title: "Hezekia opwodho hekalu" },
    ],
    30: [
      { verse: 1, title: "Hezekia otimo Sap Pasaka" },
    ],
    31: [
      { verse: 2, title: "Chiwruok ne lemo" },
    ],
    32: [
      { verse: 1, title: "Senakerib obwogo Jerusalem" },
      { verse: 24, title: "Sunga, tich maber kod tho mar Hezekia" },
    ],
    33: [
      { verse: 1, title: "Manase ruodh Juda" },
      { verse: 21, title: "Amon ruodh Juda" },
    ],
    34: [
      { verse: 1, title: "Tij Josia maber" },
      { verse: 14, title: "Kitap Chik oyudi" },
    ],
    35: [
      { verse: 1, title: "Josia otimo Sap Pasaka" },
      { verse: 20, title: "Tho mar Josia" },
    ],
    36: [
      { verse: 2, title: "Jehoahaz ruodh Juda" },
      { verse: 5, title: "Jehoyakim ruodh Juda" },
      { verse: 9, title: "Jehoyakin ruodh Juda" },
      { verse: 11, title: "Zedekia ruodh Juda" },
      { verse: 15, title: "Podho mar Jerusalem" },
    ],
  },
  "Ezra": {
    1: [
      { verse: 1, title: "Sairas okonyo joma ni e twech odwogo" },
    ],
    2: [
      { verse: 1, title: "Kwan kod nying joma ne otwe mane" },
      { verse: 1, title: "odwogo" },
    ],
    3: [
      { verse: 1, title: "Gero kendo manyien mar misango" },
      { verse: 7, title: "Gedo manyien mar hekalu" },
    ],
    4: [
      { verse: 1, title: "Okwed gedo manyien mar hekalu" },
      { verse: 6, title: "Kwedo gedo mar hekalu e bwo loch Sakses" },
      { verse: 6, title: "kod Artaksases" },
    ],
    5: [
      { verse: 1, title: "Barup Tatenai ne Darius" },
    ],
    6: [
      { verse: 1, title: "Chik ma Darius ogolo" },
      { verse: 13, title: "Tieko gedo kendo gwedho hekalu" },
      { verse: 19, title: "Pasaka" },
    ],
    7: [
      { verse: 1, title: "Ezra obiro Jerusalem" },
      { verse: 11, title: "Barup ruoth Artaksases ne Ezra" },
    ],
    8: [
      { verse: 1, title: "Nying kod kwan jotend dhoudi mane" },
      { verse: 1, title: "odwogo gi Ezra" },
      { verse: 15, title: "Duogo Jerusalem" },
    ],
    9: [
      { verse: 1, title: "Lemo mar Ezra kuom nyuomo nyi dhoudi" },
      { verse: 1, title: "mamoko" },
    ],
    10: [
      { verse: 1, title: "Ji ofulo richo mag-gi" },
      { verse: 18, title: "Joma ne nigi ketho mar nyombo e dhoudi" },
      { verse: 18, title: "mamoko" },
    ],
  },
  "Nehemia": {
    1: [
      { verse: 1, title: "Lemo mar Nehemia" },
    ],
    2: [
      { verse: 1, title: "Ruoth Artaksases ooro Nehemia odhi" },
      { verse: 1, title: "Jerusalem" },
      { verse: 11, title: "Nehemia Onono ohinga mar Jerusalem" },
    ],
    3: [
      { verse: 1, title: "Jogedo mar ohinga" },
    ],
    4: [
      { verse: 1, title: "Wasigu omonjo jogedo" },
    ],
    5: [
      { verse: 1, title: "Nehemia okonyo joma odhier" },
    ],
    6: [
      { verse: 1, title: "Wasigu pod oramo ni gedo mar ohinga ok" },
      { verse: 1, title: "dhi nyime" },
      { verse: 16, title: "Otiek gedo mar ohinga" },
    ],
    7: [
      { verse: 4, title: "Nying joma noduogo koa e twech" },
    ],
    8: [
      { verse: 1, title: "Ezra osomone jo-Israel Chike" },
    ],
    9: [
      { verse: 1, title: "Jo-Israel ohulo richogi" },
      { verse: 38, title: "Ji oketo winjruok" },
    ],
    10: [
    ],
    11: [
      { verse: 1, title: "Joma odak ei Jerusalem" },
    ],
    12: [
      { verse: 1, title: "Jodolo kod jo-Lawi" },
      { verse: 27, title: "Gwedho ohinga mar Jerusalem" },
    ],
    13: [
      { verse: 1, title: "Nehemia okelo lokruok mogik" },
    ],
  },
  "Esta": {
    1: [
      { verse: 1, title: "Ogol Vashti kuom bedo mikach ruoth" },
    ],
    2: [
      { verse: 1, title: "Esta oket mondo obed mikach ruoth" },
      { verse: 19, title: "Modekai ofwenyo ni jomoko dwaro nego" },
      { verse: 19, title: "ruoth" },
    ],
    3: [
      { verse: 1, title: "Haman ochano mondo otiek jo-Yahudi" },
      { verse: 8, title: "pur" },
    ],
    4: [
      { verse: 1, title: "Modekai okwayo Esta mondo okony" },
      { verse: 1, title: "jo-Yahudi" },
    ],
    5: [
      { verse: 1, title: "Kwayo mane Esta okwayo ruoth" },
      { verse: 9, title: "Mirima omako Haman nikech Modekai" },
    ],
    6: [
      { verse: 1, title: "Omi Modekai duong’" },
    ],
    7: [
      { verse: 1, title: "Haman onegi" },
    ],
    8: [
      { verse: 1, title: "Chik mane ruoth ogolo mar konyo" },
      { verse: 1, title: "jo-Yahudi" },
    ],
    9: [
      { verse: 1, title: "Jo-Yahudi olocho" },
      { verse: 18, title: "Nyasi mar Purim" },
      { verse: 25, title: "pur" },
      { verse: 27, title: "pur" },
    ],
    10: [
      { verse: 1, title: "Duong’ mar Modekai" },
    ],
  },
  "Ayub": {
    1: [
      { verse: 1, title: "Weche motelo" },
      { verse: 6, title: "Tem mokwongo mar Ayub" },
    ],
    2: [
      { verse: 1, title: "Tem mar ariyo mar Ayub" },
      { verse: 11, title: "Osiepe Ayub adek" },
    ],
    3: [
      { verse: 1, title: "Ayub owuoyo" },
    ],
    4: [
      { verse: 1, title: "Elifaz" },
    ],
    5: [
    ],
    6: [
      { verse: 1, title: "Ayub odwoko Elifaz" },
    ],
    7: [
    ],
    8: [
      { verse: 1, title: "Bildad odwoko Ayub" },
    ],
    9: [
      { verse: 1, title: "Ayub odwoko Bildad" },
    ],
    10: [
    ],
    11: [
      { verse: 1, title: "Zofar" },
    ],
    12: [
      { verse: 1, title: "Ayub odwoko Zofar" },
    ],
    13: [
    ],
    14: [
    ],
    15: [
      { verse: 1, title: "Elifaz odwoko Ayub" },
    ],
    16: [
      { verse: 1, title: "Ayub odwoko" },
    ],
    17: [
    ],
    18: [
      { verse: 1, title: "Bildad odwoko Ayub" },
    ],
    19: [
      { verse: 1, title: "Ayub odwoko Bildad" },
    ],
    20: [
      { verse: 1, title: "Zofar odwoko Ayub" },
    ],
    21: [
      { verse: 1, title: "Ayub odwoko Zofar" },
    ],
    22: [
      { verse: 1, title: "Elifaz odwoko Ayub" },
    ],
    23: [
      { verse: 1, title: "Ayub odwoko Elifaz" },
    ],
    24: [
    ],
    25: [
      { verse: 1, title: "Bildad odwoko Ayub" },
    ],
    26: [
      { verse: 1, title: "Ayub odwoko Bildad" },
    ],
    27: [
    ],
    28: [
    ],
    29: [
    ],
    30: [
    ],
    31: [
    ],
    32: [
      { verse: 1, title: "Elihu odwoko osiepe Ayub" },
    ],
    33: [
    ],
    34: [
    ],
    35: [
    ],
    36: [
    ],
    37: [
    ],
    38: [
      { verse: 1, title: "Jehova Nyasaye odwoko Ayub" },
    ],
    39: [
    ],
    40: [
    ],
    41: [
    ],
    42: [
      { verse: 1, title: "Ayub" },
      { verse: 7, title: "Weche mogik" },
    ],
  },
  "Zaburi": {
    1: [
      { verse: 1, title: "KITABU MOKWONGO" },
      { verse: 1, title: "Zaburi 1–41" },
    ],
    2: [
    ],
    3: [
      { verse: 1, title: "Zaburi mar Daudi, kane oringo oa ir" },
      { verse: 1, title: "wuode Abisalom." },
    ],
    4: [
      { verse: 1, title: "Kuom jatend wer. Miwero gi gig wer" },
      { verse: 1, title: "man-gi tondegi. Zaburi mar Daudi." },
    ],
    5: [
      { verse: 1, title: "Kuom jatend wende miwero gi asili." },
      { verse: 1, title: "Zaburi Mar Daudi." },
    ],
    6: [
      { verse: 1, title: "Kuom jatend wer. Miwero gi gig wer" },
      { verse: 1, title: "man-gi tondegi. Kaluwore gi" },
      { verse: 1, title: "sheminith" },
      { verse: 1, title: "." },
      { verse: 1, title: "Zaburi Mar Daudi." },
    ],
    7: [
      { verse: 1, title: "Wend" },
      { verse: 1, title: "shigaion" },
      { verse: 1, title: "mane Daudi owero ne" },
      { verse: 1, title: "Jehova Nyasaye kuom Kush ja-Benjamin." },
    ],
    8: [
      { verse: 1, title: "Kuom Jatend Wer. Kaluwore Gi" },
      { verse: 1, title: "Gitith" },
      { verse: 1, title: "." },
      { verse: 1, title: "Zaburi Mar Daudi." },
    ],
    9: [
      { verse: 1, title: "Kuom jatend wer. E dwol mar “Tho mar" },
      { verse: 1, title: "wuowi.” Zaburi mar Daudi." },
    ],
    10: [
    ],
    11: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi." },
    ],
    12: [
      { verse: 1, title: "Kuom jatend wer. Kaluwore gi" },
      { verse: 1, title: "sheminith" },
      { verse: 1, title: "." },
      { verse: 1, title: "Zaburi mar Daudi." },
    ],
    13: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi." },
    ],
    14: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi." },
    ],
    15: [
      { verse: 1, title: "Zaburi Mar Daudi." },
    ],
    16: [
      { verse: 1, title: "Miktam" },
      { verse: 1, title: "mar Daudi." },
    ],
    17: [
      { verse: 1, title: "Lamo mar Daudi." },
    ],
    18: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi" },
      { verse: 1, title: "jatich Jehova Nyasaye. Nowerone Jehova" },
      { verse: 1, title: "Nyasaye weche mag wendni kinde mane" },
      { verse: 1, title: "Jehova Nyasaye orese e lwet wasike duto" },
      { verse: 1, title: "kendo e lwet Saulo. Nowacho niya:" },
    ],
    19: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi." },
    ],
    20: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi." },
    ],
    21: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi." },
    ],
    22: [
      { verse: 1, title: "Kuom jatend wer. E dwol mar “Mwanda" },
      { verse: 1, title: "mar Okinyi.” Zaburi mar Daudi." },
    ],
    23: [
      { verse: 1, title: "Zaburi mar Daudi." },
    ],
    24: [
      { verse: 1, title: "Zaburi mar Daudi." },
    ],
    25: [
      { verse: 1, title: "Zaburi mar Daudi." },
    ],
    26: [
      { verse: 1, title: "Zaburi mar Daudi." },
    ],
    27: [
      { verse: 1, title: "Zaburi mar Daudi." },
    ],
    28: [
      { verse: 1, title: "Zaburi mar Daudi." },
    ],
    29: [
      { verse: 1, title: "Zaburi mar Daudi." },
    ],
    30: [
      { verse: 1, title: "Zaburi. Wer mar gwedho hekalu. Zaburi" },
      { verse: 1, title: "mar Daudi." },
    ],
    31: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi." },
    ],
    32: [
      { verse: 1, title: "Zaburi mar Daudi. Wer mower gi" },
      { verse: 1, title: "maskil." },
    ],
    33: [
    ],
    34: [
      { verse: 1, title: "Zaburi mar Daudi. Kane owuondore ni in" },
      { verse: 1, title: "janeko e nyim Abimelek, mane oriembe" },
      { verse: 1, title: "mi oa odhi." },
    ],
    35: [
      { verse: 1, title: "Zaburi mar Daudi." },
    ],
    36: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi" },
      { verse: 1, title: "jatich Jehova Nyasaye." },
    ],
    37: [
      { verse: 1, title: "Zaburi mar Daudi." },
    ],
    38: [
      { verse: 1, title: "Zaburi mar Daudi. Lemo mar kwayo" },
      { verse: 1, title: "kony." },
    ],
    39: [
      { verse: 1, title: "Kuom jatend wer. Ne Jeduthun. Zaburi" },
      { verse: 1, title: "mar Daudi." },
    ],
    40: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi." },
    ],
    41: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi." },
    ],
    42: [
      { verse: 1, title: "KITABU MAR ARIYO" },
      { verse: 1, title: "Zaburi 42–72" },
      { verse: 1, title: "Kuom jatend wer." },
      { verse: 1, title: "Maskil" },
      { verse: 1, title: "mar yawuot" },
      { verse: 1, title: "Kora." },
    ],
    43: [
    ],
    44: [
      { verse: 1, title: "Kuom jatend wer." },
      { verse: 1, title: "Maskil" },
      { verse: 1, title: "mar yawuot" },
      { verse: 1, title: "Kora." },
    ],
    45: [
      { verse: 1, title: "Kuom jatend wer. Gi dwol mar" },
      { verse: 1, title: "“Ondanyo.”" },
      { verse: 1, title: "Maskil" },
      { verse: 1, title: "mar yawuot Kora." },
      { verse: 1, title: "Wend Arus." },
    ],
    46: [
      { verse: 1, title: "Kuom jatend wer. Mar yawuot Kora." },
      { verse: 1, title: "Kaluwore gi dwond" },
      { verse: 1, title: "alamoth" },
      { verse: 1, title: ". Wer." },
    ],
    47: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar yawuot" },
      { verse: 1, title: "Kora." },
    ],
    48: [
      { verse: 1, title: "Wer. Zaburi mar yawuot Kora." },
    ],
    49: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar yawuot" },
      { verse: 1, title: "Kora." },
    ],
    50: [
      { verse: 1, title: "Zaburi mar Asaf." },
    ],
    51: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi." },
      { verse: 1, title: "Kane janabi Nathan obiro ire bang’ ka" },
      { verse: 1, title: "Daudi noseterore gi Bathsheba." },
    ],
    52: [
      { verse: 1, title: "Kuom jatend wer." },
      { verse: 1, title: "Maskil" },
      { verse: 1, title: "mar Daudi." },
      { verse: 1, title: "Kane noyudo Doeg ja-Edom nosedhi ir" },
      { verse: 1, title: "Saulo kendo onyise niya, “Daudi osedhi e" },
      { verse: 1, title: "od Ahimelek.”" },
    ],
    53: [
      { verse: 1, title: "Kuom jatend wer. Kaluwore gi dwol mar" },
      { verse: 1, title: "mahalath." },
      { verse: 1, title: "Maskil" },
      { verse: 1, title: "mar Daudi." },
    ],
    54: [
      { verse: 1, title: "Kuom jatend wer. Wer miwero gi thumbe" },
      { verse: 1, title: "man-gi waya." },
      { verse: 1, title: "Maskil" },
      { verse: 1, title: "mar Daudi. Kane" },
      { verse: 1, title: "jo-Zif osedhi ir Saulo kendo onyise niya," },
      { verse: 1, title: "“Donge Daudi ma imanyo opondo e" },
      { verse: 1, title: "gweng’wa?”" },
    ],
    55: [
      { verse: 1, title: "Kuom jatend wer. Wer gi thumbe man-gi" },
      { verse: 1, title: "Waya." },
      { verse: 1, title: "Maskil" },
      { verse: 1, title: "mar Daudi." },
    ],
    56: [
      { verse: 1, title: "Kuom jatend wer. E dwol mar “Akuru" },
      { verse: 1, title: "mopiyo e onera man mabor.”" },
      { verse: 1, title: "Miktam" },
      { verse: 1, title: "mar Daudi. Kane jo-Filistia osemake" },
      { verse: 1, title: "Gath." },
    ],
    57: [
      { verse: 1, title: "Kuom jatend wer. E dwond “Kik iketh" },
      { verse: 1, title: "gik moko.”" },
      { verse: 1, title: "Miktam" },
      { verse: 1, title: "mar Daudi. Kane" },
      { verse: 1, title: "oringone Saulo mi opondo e rogo." },
    ],
    58: [
      { verse: 1, title: "Kuom jatend wer. E dwol mar “Kik iketh" },
      { verse: 1, title: "gik moko.”" },
      { verse: 1, title: "Miktam" },
      { verse: 1, title: "mar Daudi." },
    ],
    59: [
      { verse: 1, title: "Kuom jatend wer. E dwol mar “Kik iketh" },
      { verse: 1, title: "gik moko.”" },
      { verse: 1, title: "Miktam" },
      { verse: 1, title: "mar Daudi. Kane" },
      { verse: 1, title: "Saulo ooro ji mondo ocher od Daudi" },
      { verse: 1, title: "mondo onege." },
    ],
    60: [
      { verse: 1, title: "Kuom jatend wer. E dwol mar “Ondanyo" },
      { verse: 1, title: "mar singruok.”" },
      { verse: 1, title: "Miktam" },
      { verse: 1, title: "mar Daudi. Mar" },
      { verse: 1, title: "puonjo. Kane okedo gi Aram-Naharaim" },
      { verse: 1, title: "kod Aram Zoba, kendo kane Joab" },
      { verse: 1, title: "odwogo mi onego jo-Edom alufu apar" },
      { verse: 1, title: "gariyo e Holo mar Chumbi." },
    ],
    61: [
      { verse: 1, title: "Kuom jatend wer. Gi gig wer man-gi" },
      { verse: 1, title: "tondegi. Mar Daudi." },
    ],
    62: [
      { verse: 1, title: "Kuom jatend wer. Mar Jeduthun. Zaburi" },
      { verse: 1, title: "mar Daudi." },
    ],
    63: [
      { verse: 1, title: "Zaburi mar Daudi kane en e thim mar" },
      { verse: 1, title: "Juda." },
    ],
    64: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi." },
    ],
    65: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi. Wer." },
    ],
    66: [
      { verse: 1, title: "Kuom jatend wer. Wer. Zaburi." },
    ],
    67: [
      { verse: 1, title: "Kuom jatend wer. Gik miwergo man-gi" },
      { verse: 1, title: "tondegi. Zaburi. Wer." },
    ],
    68: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi. Wer." },
    ],
    69: [
      { verse: 1, title: "Kuom jatend wer e dwol mar “Ondanyo.”" },
      { verse: 1, title: "Mar Daudi." },
    ],
    70: [
      { verse: 1, title: "Kuom jatend wer. Kwayo mar Daudi." },
    ],
    71: [
    ],
    72: [
      { verse: 1, title: "Mar Solomon." },
    ],
    73: [
      { verse: 1, title: "KITABU MAR ADEK" },
      { verse: 1, title: "Zaburi 73–89" },
      { verse: 1, title: "Zaburi mar Asaf." },
    ],
    74: [
      { verse: 1, title: "Maskil" },
      { verse: 1, title: "mar Asaf." },
    ],
    75: [
      { verse: 1, title: "Kuom jatend wer. E dwol mar “Kik iketh" },
      { verse: 1, title: "gik moko.” Zaburi mar Asaf. Wer." },
    ],
    76: [
      { verse: 1, title: "Kuom jatend wer. Gi gig wer man-gi" },
      { verse: 1, title: "tondegi. Zaburi mar Asaf. Wer." },
    ],
    77: [
      { verse: 1, title: "Kuom jatend wer. Ne Jeduthun. Mar Asaf." },
      { verse: 1, title: "Zaburi." },
    ],
    78: [
      { verse: 1, title: "Maskil" },
      { verse: 1, title: "mar Asaf." },
    ],
    79: [
      { verse: 1, title: "Zaburi mar Asaf." },
    ],
    80: [
      { verse: 1, title: "Kuom jatend wer. E dwol mar “Ondanyo" },
      { verse: 1, title: "mar Singruok.” Mar Asaf. Zaburi." },
    ],
    81: [
      { verse: 1, title: "Kuom jatend wer. Wer mower kaluwore gi" },
      { verse: 1, title: "Gitith" },
      { verse: 1, title: ". Mar Asaf." },
    ],
    82: [
      { verse: 1, title: "Zaburi mar Asaf." },
    ],
    83: [
      { verse: 1, title: "Wer. Zaburi mar Asaf." },
    ],
    84: [
      { verse: 1, title: "Kuom jatend wer. Kaluwore gi" },
      { verse: 1, title: "gitith" },
      { verse: 1, title: "." },
      { verse: 1, title: "Zaburi mar Yawuot Kora." },
    ],
    85: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar yawuot" },
      { verse: 1, title: "Kora." },
    ],
    86: [
      { verse: 1, title: "Lemo mar Daudi." },
    ],
    87: [
      { verse: 1, title: "Zaburi mar yawuot Kora. Wer." },
    ],
    88: [
      { verse: 1, title: "Wer. Zaburi mar yawuot Kora. Kuom" },
      { verse: 1, title: "jatend wer. Kaluwore gi" },
      { verse: 1, title: "mahalath" },
      { verse: 1, title: "leanoth." },
      { verse: 1, title: "Maskil" },
      { verse: 1, title: "mar Heman ja-Ezra." },
    ],
    89: [
      { verse: 1, title: "Maskil" },
      { verse: 1, title: "mar Ethan ja-Ezra." },
    ],
    90: [
      { verse: 1, title: "KITABU MAR ANG’WEN" },
      { verse: 1, title: "Zaburi 90–106" },
      { verse: 1, title: "Lamo mar Musa ng’at Nyasaye." },
    ],
    91: [
    ],
    92: [
      { verse: 1, title: "Zaburi. Wer. Ne chieng’ Sabato." },
    ],
    93: [
    ],
    94: [
    ],
    95: [
    ],
    96: [
    ],
    97: [
    ],
    98: [
      { verse: 1, title: "Zaburi." },
    ],
    99: [
    ],
    100: [
      { verse: 1, title: "Zaburi mar goyo erokamano." },
    ],
    101: [
      { verse: 1, title: "Zaburi mar Daudi." },
    ],
    102: [
      { verse: 1, title: "Lamo mar ng’at mawinjo marach" },
      { verse: 1, title: "kendo machiwo ywakne e nyim Jehova" },
      { verse: 1, title: "Nyasaye." },
    ],
    103: [
      { verse: 1, title: "Mar Daudi." },
    ],
    104: [
    ],
    105: [
    ],
    106: [
    ],
    107: [
      { verse: 1, title: "KITABU MAR ABICH" },
      { verse: 1, title: "Zaburi 107–150" },
    ],
    108: [
      { verse: 1, title: "Wer. Zaburi mar Daudi." },
    ],
    109: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi." },
    ],
    110: [
      { verse: 1, title: "Zaburi mar Daudi." },
    ],
    111: [
    ],
    112: [
    ],
    113: [
    ],
    114: [
    ],
    115: [
    ],
    116: [
    ],
    117: [
    ],
    118: [
    ],
    119: [
      { verse: 1, title: "אAlef" },
      { verse: 9, title: "בBeth" },
      { verse: 17, title: "גGimel" },
      { verse: 25, title: "דDaleth" },
      { verse: 33, title: "הHe" },
      { verse: 41, title: "וWaw" },
      { verse: 49, title: "זZayin" },
      { verse: 57, title: "חHeth" },
      { verse: 65, title: "טTeth" },
      { verse: 73, title: "יYodh" },
      { verse: 81, title: "כKaf" },
      { verse: 89, title: "לLamedh" },
      { verse: 97, title: "מMem" },
      { verse: 105, title: "נNun" },
      { verse: 113, title: "סSamek" },
      { verse: 121, title: "עAyin" },
      { verse: 129, title: "פPe" },
      { verse: 137, title: "צTsadhe" },
      { verse: 145, title: "קKof" },
      { verse: 153, title: "רResh" },
      { verse: 161, title: "שSin gi Shin" },
      { verse: 169, title: "תTaw" },
    ],
    120: [
      { verse: 1, title: "Wer miwero ka ji dhi e hekalu." },
    ],
    121: [
      { verse: 1, title: "Wer ma ji wero kadhi e hekalu." },
    ],
    122: [
      { verse: 1, title: "Wer ma ji wero kadhi e hekalu. Mar" },
      { verse: 1, title: "Daudi." },
    ],
    123: [
      { verse: 1, title: "Wer ma ji wero kadhi e hekalu." },
    ],
    124: [
      { verse: 1, title: "Wer ma ji wero kadhi e hekalu. Mar" },
      { verse: 1, title: "Daudi." },
    ],
    125: [
      { verse: 1, title: "Wer ma ji wero kadhi e hekalu." },
    ],
    126: [
      { verse: 1, title: "Wer ma ji wero kadhi e hekalu." },
    ],
    127: [
      { verse: 1, title: "Wer ma ji wero kadhi e hekalu. Mar" },
      { verse: 1, title: "Solomon." },
    ],
    128: [
      { verse: 1, title: "Wer ma ji wero kadhi e hekalu." },
    ],
    129: [
      { verse: 1, title: "Wer ma ji wero kadhi e hekalu." },
    ],
    130: [
      { verse: 1, title: "Wer ma ji wero kadhi e hekalu." },
    ],
    131: [
      { verse: 1, title: "Wer ma ji wero kadhi e hekalu. Mar" },
      { verse: 1, title: "Daudi." },
    ],
    132: [
      { verse: 1, title: "Wer ma ji wero kadhi e hekalu." },
    ],
    133: [
      { verse: 1, title: "Wer ma ji wero kadhi e hekalu. Mar" },
      { verse: 1, title: "Daudi." },
    ],
    134: [
      { verse: 1, title: "Wer ma ji wero kadhi e hekalu." },
    ],
    135: [
    ],
    136: [
    ],
    137: [
    ],
    138: [
      { verse: 1, title: "Zaburi mar Daudi." },
    ],
    139: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi." },
    ],
    140: [
      { verse: 1, title: "Kuom jatend wer. Zaburi mar Daudi." },
    ],
    141: [
      { verse: 1, title: "Zaburi Mar Daudi." },
    ],
    142: [
      { verse: 1, title: "Maskil" },
      { verse: 1, title: "mar Daudi. Kane en ei bur. Lamo." },
    ],
    143: [
      { verse: 1, title: "Zaburi mar Daudi." },
    ],
    144: [
      { verse: 1, title: "Mar Daudi." },
    ],
    145: [
      { verse: 1, title: "Zaburi mar pak. Mar Daudi." },
    ],
    146: [
    ],
    147: [
    ],
    148: [
    ],
    149: [
    ],
    150: [
    ],
  },
  "Ngeche": {
    1: [
      { verse: 1, title: "GIMA OMIYO NONDIK KITABU MAR" },
      { verse: 1, title: "NGECHE KOD THORO MARE" },
      { verse: 8, title: "WECHE MOTELO: JIP MAR RWAKO RIEKO" },
      { verse: 8, title: "Siem kuom hoch manono" },
      { verse: 20, title: "Siem kuom tamruok kawo rieko" },
    ],
    2: [
      { verse: 1, title: "Ber mar dak mobidhore mar rieko" },
    ],
    3: [
      { verse: 1, title: "Ber mamoko mag rieko" },
    ],
    4: [
      { verse: 1, title: "Ohala miyudo kuom bedo gi rieko" },
    ],
    5: [
      { verse: 1, title: "Siem kuom terruok" },
    ],
    6: [
      { verse: 1, title: "Siem kuom fuwo" },
      { verse: 20, title: "Siem kuom terruok" },
    ],
    7: [
      { verse: 1, title: "Siem kuom dhako ma jachode" },
    ],
    8: [
      { verse: 1, title: "Luong mar rieko" },
    ],
    9: [
      { verse: 1, title: "Luong mag rwako rieko kod mag fuwo" },
    ],
    10: [
      { verse: 1, title: "NGECHE MAG SOLOMON" },
    ],
    11: [
    ],
    12: [
    ],
    13: [
    ],
    14: [
    ],
    15: [
    ],
    16: [
    ],
    17: [
    ],
    18: [
    ],
    19: [
    ],
    20: [
    ],
    21: [
    ],
    22: [
      { verse: 17, title: "WECHE PIERO ADEK MAG JOMARIEK" },
      { verse: 17, title: "Wach Mokwongo" },
      { verse: 22, title: "Wach mar ariyo" },
      { verse: 24, title: "Wach mar adek" },
      { verse: 26, title: "Wach mar ang’wen" },
      { verse: 28, title: "Wach mar abich" },
      { verse: 29, title: "Wach mar auchiel" },
    ],
    23: [
      { verse: 1, title: "Wach mar abiriyo" },
      { verse: 4, title: "Wach mar aboro" },
      { verse: 6, title: "Wach mar ochiko" },
      { verse: 9, title: "Wach mar apar" },
      { verse: 10, title: "Wach mar apar gachiel" },
      { verse: 12, title: "Wach mar apar gariyo" },
      { verse: 13, title: "Wach mar apar gadek" },
      { verse: 15, title: "Wach mar apar gang’wen" },
      { verse: 17, title: "Wach mar apar gabich" },
      { verse: 19, title: "Wach mar apar gauchiel" },
      { verse: 22, title: "Wach mar apar gabiriyo" },
      { verse: 26, title: "Wach mar apar gaboro" },
      { verse: 29, title: "Wach mar apar gochiko" },
    ],
    24: [
      { verse: 1, title: "Wach mar piero ariyo" },
      { verse: 3, title: "Wach mar piero ariyo gachiel" },
      { verse: 5, title: "Wach mar piero ariyo gariyo" },
      { verse: 7, title: "Wach mar piero ariyo gadek" },
      { verse: 8, title: "Wach mar piero ariyo gang’wen" },
      { verse: 10, title: "Wach mar piero ariyo gabich" },
      { verse: 13, title: "Wach mar piero ariyo gauchiel" },
      { verse: 15, title: "Wach mar piero ariyo gabiriyo" },
      { verse: 17, title: "Wach mar piero ariyo gaboro" },
      { verse: 19, title: "Wach mar piero ariyo gochiko" },
      { verse: 21, title: "Wach mar piero adek" },
      { verse: 23, title: "WECHE MAMOKO MAG JOMARIEK" },
    ],
    25: [
      { verse: 1, title: "NGECHE MAMOKO MAG SOLOMON" },
    ],
    26: [
    ],
    27: [
    ],
    28: [
    ],
    29: [
    ],
    30: [
      { verse: 1, title: "WECHE MAG AGUR" },
    ],
    31: [
      { verse: 1, title: "WECHE MAG RUOTH LEMUEL" },
      { verse: 10, title: "WECHE MOGIK: DHAKO MA KITE LONG’O" },
    ],
  },
  "Eklesiastes": {
    1: [
      { verse: 1, title: "Gik moko duto konon to onge tiendgi" },
      { verse: 12, title: "Rieko onge tiende" },
    ],
    2: [
      { verse: 1, title: "Mor mokalo tong’ onge tiende" },
      { verse: 12, title: "Rieko kod fuwo onge tiendgi" },
      { verse: 17, title: "Tich matek onge tiende" },
    ],
    3: [
      { verse: 1, title: "Gimoro amora nigi kindene" },
    ],
    4: [
      { verse: 1, title: "Adiera onge e piny" },
      { verse: 13, title: "Bedo gi dongruok onge tiende" },
    ],
    5: [
      { verse: 1, title: "Luoro Nyasaye" },
      { verse: 8, title: "Mwandu onge tiende" },
    ],
    6: [
    ],
    7: [
      { verse: 1, title: "Ber mar rieko" },
    ],
    8: [
      { verse: 2, title: "Luor Ruoth" },
    ],
    9: [
      { verse: 1, title: "Giko mar ji duto chalre" },
      { verse: 13, title: "Rieko ber moloyo fuwo" },
    ],
    10: [
    ],
    11: [
      { verse: 1, title: "Timbe ng’at mariek" },
      { verse: 7, title: "Par Jachwechni kapod itin" },
    ],
    12: [
      { verse: 9, title: "Weche mogik" },
    ],
  },
  "Wer Mamit": {
    1: [
      { verse: 2, title: "Nyako" },
      { verse: 5, title: "Osiepe" },
      { verse: 5, title: "Nyako" },
      { verse: 8, title: "Osiepe" },
      { verse: 9, title: "Wuowi" },
      { verse: 12, title: "Nyako" },
      { verse: 15, title: "Wuowi" },
      { verse: 16, title: "Nyako" },
      { verse: 17, title: "Wuowi" },
    ],
    2: [
      { verse: 1, title: "Nyako" },
      { verse: 2, title: "Wuowi" },
      { verse: 3, title: "Nyako" },
      { verse: 14, title: "Wuowi" },
      { verse: 16, title: "Nyako" },
    ],
    3: [
    ],
    4: [
      { verse: 1, title: "Wuowi" },
      { verse: 16, title: "Nyako" },
    ],
    5: [
      { verse: 1, title: "Wuowi" },
      { verse: 2, title: "Osiepe" },
      { verse: 2, title: "Nyako" },
      { verse: 9, title: "Osiepe" },
      { verse: 10, title: "Nyako" },
    ],
    6: [
      { verse: 1, title: "Osiepe" },
      { verse: 2, title: "Nyako" },
      { verse: 4, title: "Wuowi" },
      { verse: 10, title: "Osiepe" },
      { verse: 11, title: "Wuowi" },
      { verse: 13, title: "Osiepe" },
    ],
    7: [
      { verse: 1, title: "Wuowi" },
      { verse: 10, title: "Nyako" },
    ],
    8: [
      { verse: 5, title: "Osiepe" },
      { verse: 6, title: "Nyako" },
      { verse: 8, title: "Osiepe" },
      { verse: 10, title: "Nyako" },
      { verse: 13, title: "Wuowi" },
      { verse: 14, title: "Nyako" },
    ],
  },
  "Isaya": {
    1: [
      { verse: 2, title: "Oganda mong’anyo" },
    ],
    2: [
      { verse: 1, title: "Got mar Jehova Nyasaye" },
      { verse: 6, title: "Odiechieng Jehova Nyasaye" },
    ],
    3: [
      { verse: 1, title: "Kum ne Jerusalem kod Juda" },
    ],
    4: [
      { verse: 2, title: "Bad Yath mar Jehova Nyasaye" },
    ],
    5: [
      { verse: 1, title: "Wend jarit puoth mzabibu" },
      { verse: 8, title: "Masiche kod ng’ado bura" },
    ],
    6: [
      { verse: 1, title: "Luong mar Isaya" },
    ],
    7: [
      { verse: 1, title: "Ranyisi mar Imanuel" },
    ],
    8: [
      { verse: 1, title: "Jehova Nyasaye tiyo gi Asuria" },
      { verse: 11, title: "Luor Nyasaye" },
    ],
    9: [
      { verse: 1, title: "Osenywolnwa nyathi" },
      { verse: 8, title: "Mirimb Jehova Nyasaye kuom jo-Israel" },
    ],
    10: [
      { verse: 5, title: "Nyasaye ng’ado bura ne jo-Asuria" },
      { verse: 20, title: "Jo-Israel modong’" },
    ],
    11: [
      { verse: 1, title: "Bad Yath moa kuom Jesse" },
    ],
    12: [
      { verse: 1, title: "Wende mag pak" },
    ],
    13: [
      { verse: 1, title: "Wach mokor kuom Babulon" },
    ],
    14: [
      { verse: 24, title: "Wach mokor kuom jo-Asuria" },
      { verse: 28, title: "Wach mokor kuom jo-Filistia" },
    ],
    15: [
      { verse: 1, title: "Wach mokor nibiro timore ne jo-Moab" },
    ],
    16: [
    ],
    17: [
      { verse: 1, title: "Wach mokor nibiro timore ne Damaski" },
    ],
    18: [
      { verse: 1, title: "Wach mokor nibiro timore ne Kush" },
    ],
    19: [
      { verse: 1, title: "Wach mokor kuom Misri" },
    ],
    20: [
      { verse: 1, title: "Wach mokor nibiro timore ne Misri kod Kush" },
    ],
    21: [
      { verse: 1, title: "Wach mokor nibiro timore ne Babulon" },
      { verse: 11, title: "Wach mokor ni biro timore ne Edom" },
      { verse: 13, title: "Wach mokor nibiro timore ne jo-Arabu" },
    ],
    22: [
      { verse: 1, title: "Wach mokor kuom Jerusalem" },
    ],
    23: [
      { verse: 1, title: "Wach mokor kuom Turo" },
    ],
    24: [
      { verse: 1, title: "Jehova Nyasaye biro ketho piny" },
    ],
    25: [
      { verse: 1, title: "Pak obed ne Jehova Nyasaye" },
    ],
    26: [
      { verse: 1, title: "Wend pak" },
    ],
    27: [
      { verse: 1, title: "Resruok mar Israel" },
    ],
    28: [
      { verse: 1, title: "Siem ne jo-Efraim" },
    ],
    29: [
      { verse: 1, title: "Siem ne Dala Maduong’ mar Daudi" },
    ],
    30: [
      { verse: 1, title: "Siem ne ogandana wigi tek" },
    ],
    31: [
      { verse: 1, title: "Siem ne joma oketo genogi kuom Misri" },
    ],
    32: [
      { verse: 1, title: "Pinyruoth makare" },
      { verse: 9, title: "Mond Jerusalem" },
    ],
    33: [
      { verse: 1, title: "Achiedh-nade kod resruok" },
    ],
    34: [
      { verse: 1, title: "Kum ne ogendini" },
    ],
    35: [
      { verse: 1, title: "Mor mar joma oresi" },
    ],
    36: [
      { verse: 1, title: "Senakerib omonjo Jerusalem" },
    ],
    37: [
      { verse: 1, title: "Fweny ni Jerusalem noresi" },
      { verse: 14, title: "Lamo mar Hezekia" },
      { verse: 21, title: "Senakerib otieki" },
    ],
    38: [
      { verse: 1, title: "Tuo mar Hezekia" },
    ],
    39: [
      { verse: 1, title: "Joote moa Babulon" },
    ],
    40: [
      { verse: 1, title: "Hoch kuom jo-Nyasaye" },
    ],
    41: [
      { verse: 1, title: "Jehova Nyasaye en jakony mar Israel" },
    ],
    42: [
      { verse: 1, title: "Jatich Jehova Nyasaye" },
      { verse: 10, title: "Wend pak ne Jehova Nyasaye" },
      { verse: 18, title: "Israel muofu kendo ite odino" },
    ],
    43: [
      { verse: 1, title: "Jakony makende mar Israel" },
      { verse: 14, title: "Ng’wono mar Nyasaye gi jo-Israel ma ok" },
      { verse: 14, title: "joratiro" },
    ],
    44: [
      { verse: 1, title: "Israel oganda moyier" },
      { verse: 6, title: "Jehova Nyasaye ma ok nyiseche manono" },
      { verse: 24, title: "Ji nodag Jerusalem" },
    ],
    45: [
    ],
    46: [
      { verse: 1, title: "Nyiseche mag Babulon" },
    ],
    47: [
      { verse: 1, title: "Babulon opodho" },
    ],
    48: [
      { verse: 1, title: "Jo-Israel matheko" },
      { verse: 12, title: "Ogony Israel" },
    ],
    49: [
      { verse: 1, title: "Jatich Jehova Nyasaye" },
      { verse: 8, title: "Jo-Israel oduogi" },
    ],
    50: [
      { verse: 1, title: "Richo mar Israel kod bolruok mar jatich" },
    ],
    51: [
      { verse: 1, title: "Resruok manyaka chieng’ ne dala Sayun" },
      { verse: 17, title: "Kikombe moting’o mirima mager mar Jehova" },
      { verse: 17, title: "Nyasaye" },
    ],
    52: [
      { verse: 13, title: "Sandruok kod duong’ mar jatich" },
    ],
    53: [
    ],
    54: [
      { verse: 1, title: "Duong’ mabiro ne dala Sayun" },
    ],
    55: [
      { verse: 1, title: "Luong ne joma riyo oloyo" },
    ],
    56: [
      { verse: 1, title: "Resruok mar ogendini mamoko" },
      { verse: 9, title: "Nyasaye ng’ado bura ne joricho" },
    ],
    57: [
      { verse: 14, title: "Hoyo chuny ng’ama oneno richone" },
    ],
    58: [
      { verse: 1, title: "Kit tweyo chiemo mowinjore" },
    ],
    59: [
      { verse: 1, title: "Richo, ulo richo kod resruok" },
    ],
    60: [
      { verse: 1, title: "Duong’ mar Sayun" },
    ],
    61: [
      { verse: 1, title: "Higa mar ng’wono mar Jehova Nyasaye" },
    ],
    62: [
      { verse: 1, title: "Omi Sayun nying manyien" },
    ],
    63: [
      { verse: 1, title: "Odiechieng’ ma Nyasaye chuloe kuor kendo" },
      { verse: 1, title: "keloe resruok" },
      { verse: 7, title: "Pak kod lamo" },
    ],
    64: [
    ],
    65: [
      { verse: 1, title: "Kum kod resruok" },
      { verse: 17, title: "Polo manyien gi piny manyien" },
    ],
    66: [
      { verse: 1, title: "Kum kod bedo gi geno" },
    ],
  },
  "Jeremia": {
    1: [
      { verse: 4, title: "Luong Jeremia" },
    ],
    2: [
      { verse: 1, title: "Israel ojwang’o Nyasaye" },
    ],
    3: [
      { verse: 6, title: "Israel ok ja-ratiro" },
    ],
    4: [
      { verse: 5, title: "Masira moa yo nyandwat" },
    ],
    5: [
      { verse: 1, title: "Onge ng’ama ja-ratiro" },
    ],
    6: [
      { verse: 1, title: "Omonj Jerusalem" },
    ],
    7: [
      { verse: 1, title: "Dinde manono onge tiendgi" },
      { verse: 30, title: "Holo mar nek" },
    ],
    8: [
      { verse: 4, title: "Richo gi kum" },
    ],
    9: [
    ],
    10: [
      { verse: 1, title: "Nyasaye kod nyiseche manono" },
      { verse: 17, title: "Masira mabiro gi sand mabiro" },
      { verse: 23, title: "Lemo mar Jeremia" },
    ],
    11: [
      { verse: 1, title: "Oketh singruok" },
      { verse: 18, title: "Chano timo marach ne Jeremia" },
    ],
    12: [
      { verse: 1, title: "Ywagruok Jeremia" },
      { verse: 5, title: "Dwoko mar Nyasaye" },
    ],
    13: [
      { verse: 1, title: "Okanda mar law" },
      { verse: 12, title: "Ndede mag divai" },
      { verse: 15, title: "Kihondko mar twech" },
    ],
    14: [
      { verse: 1, title: "Oro, kech gi ligangla" },
    ],
    15: [
    ],
    16: [
      { verse: 1, title: "Odiechieng’ masira" },
    ],
    17: [
      { verse: 19, title: "Rito odiechieng’ lemo maler" },
    ],
    18: [
      { verse: 1, title: "E od jachwe agulni" },
    ],
    19: [
    ],
    20: [
      { verse: 1, title: "Jeremia kod Pashur" },
      { verse: 7, title: "Ywagruok Jeremia" },
    ],
    21: [
      { verse: 1, title: "Nyasaye otamore winjo kwayo mar Zedekia" },
    ],
    22: [
      { verse: 1, title: "Kum ne ruodhi ma timbegi mono" },
    ],
    23: [
      { verse: 1, title: "Bad yath makare" },
      { verse: 9, title: "Jonabi ma jo-miriambo" },
      { verse: 33, title: "Wach mar miriambo kod jonabi ma" },
      { verse: 33, title: "jo-miriambo" },
    ],
    24: [
      { verse: 1, title: "Kikepni ariyo mag ng’ope" },
    ],
    25: [
      { verse: 1, title: "Higni piero abiriyo mag twech" },
      { verse: 15, title: "Kikombe mar mirimb Nyasaye" },
    ],
    26: [
      { verse: 1, title: "Jeremia obwog gi tho" },
    ],
    27: [
      { verse: 1, title: "Juda noti ne Nebukadneza" },
    ],
    28: [
      { verse: 1, title: "Hanania jakoro ma ja-miriambo" },
    ],
    29: [
      { verse: 1, title: "Baruwa ne joma ni e twech" },
      { verse: 24, title: "Wach ne Shemaya" },
    ],
    30: [
      { verse: 1, title: "Oduog jo-Israel" },
    ],
    31: [
    ],
    32: [
      { verse: 1, title: "Jeremia ong’iewo puodho" },
    ],
    33: [
      { verse: 1, title: "Singo mar duogo" },
    ],
    34: [
      { verse: 1, title: "Osiem Zedekia" },
      { verse: 8, title: "Wasumbini owe thuolo" },
    ],
    35: [
      { verse: 1, title: "Joka Rekab" },
    ],
    36: [
      { verse: 1, title: "Jehoyakim owang’o kitap Jeremia" },
    ],
    37: [
      { verse: 1, title: "Jeremia ni e twech" },
    ],
    38: [
      { verse: 1, title: "Odir Jeremia ei bur" },
      { verse: 14, title: "Zedekia openjo Jeremia kendo" },
    ],
    39: [
      { verse: 1, title: "Jerusalem okaw" },
    ],
    40: [
      { verse: 1, title: "Jeremia owe thuolo" },
      { verse: 7, title: "Oneg Gedalia" },
    ],
    41: [
      { verse: 16, title: "Dar dhi Misri" },
    ],
    42: [
    ],
    43: [
    ],
    44: [
      { verse: 1, title: "Masiche miyudo nikech lamo nyiseche" },
      { verse: 1, title: "manono" },
    ],
    45: [
      { verse: 1, title: "Ote ne Baruk" },
    ],
    46: [
      { verse: 1, title: "Ote kuom Misri" },
    ],
    47: [
      { verse: 1, title: "Ote kuom jo-Filistia" },
    ],
    48: [
      { verse: 1, title: "Wach kuom Moab" },
    ],
    49: [
      { verse: 1, title: "Wach kuom Amon" },
      { verse: 7, title: "Wach Kuom Edom" },
      { verse: 23, title: "Wach kuom Damaski" },
      { verse: 28, title: "Wach kuom Keda kod Hazo" },
      { verse: 34, title: "Wach kuom Elam" },
    ],
    50: [
      { verse: 1, title: "Wach Babulon" },
    ],
    51: [
    ],
    52: [
      { verse: 1, title: "Jerusalem opodho" },
      { verse: 31, title: "Owe Jehoyakin thuolo" },
    ],
  },
  "Ywagruok": {
    1: [
    ],
    2: [
    ],
    3: [
    ],
    4: [
    ],
    5: [
    ],
  },
  "Ezekiel": {
    1: [
      { verse: 1, title: "Gik mangima kod duong’ mar Jehova Nyasaye" },
    ],
    2: [
      { verse: 1, title: "Luong mar Ezekiel" },
    ],
    3: [
      { verse: 16, title: "Osiem jo-Israel" },
    ],
    4: [
      { verse: 1, title: "Onyis kaka ibiro go ageng’a ne Jerusalem" },
    ],
    5: [
    ],
    6: [
      { verse: 1, title: "Gima okor kuom gode mag Israel" },
    ],
    7: [
      { verse: 1, title: "Giko osechopo" },
    ],
    8: [
      { verse: 1, title: "Lamo nyiseche manono ei hekalu" },
    ],
    9: [
      { verse: 1, title: "Oneg joma lamo nyiseche mamoko" },
    ],
    10: [
      { verse: 1, title: "Duong’ mar Nyasaye oweyo hekalu" },
    ],
    11: [
      { verse: 1, title: "Bura ming’adone jotend Israel" },
      { verse: 16, title: "Nyasaye osingore ni noduog jo-Israel" },
    ],
    12: [
      { verse: 1, title: "Ranyisi mar twech mar jo-Juda" },
    ],
    13: [
      { verse: 1, title: "Okwed jokor wach mag miriambo" },
    ],
    14: [
      { verse: 1, title: "Ong’ad bura ne joma lamo nyiseche manono" },
      { verse: 12, title: "Onge ng’ama notony ne kum" },
    ],
    15: [
      { verse: 1, title: "Jerusalem en mzabibu maonge tich" },
    ],
    16: [
      { verse: 1, title: "Sigand podho mar jo-Israel" },
    ],
    17: [
      { verse: 1, title: "Yadh mzabibu kod ongoe ariyo" },
    ],
    18: [
      { verse: 1, title: "Ng’at motimo richo nyaka tho" },
    ],
    19: [
      { verse: 1, title: "Ywak miywagogo yawuot ruodhi mag Israel" },
    ],
    20: [
      { verse: 1, title: "Jo-Israel ohero ng’anyo" },
      { verse: 30, title: "Kinde mar ng’ado bura kod resruok ne jo-Israel" },
      { verse: 45, title: "Okor wach kuom piny ma yo milambo" },
    ],
    21: [
      { verse: 1, title: "Ligangla ma Nyasaye ng’adogo ne ji bura en" },
      { verse: 1, title: "Babulon" },
    ],
    22: [
      { verse: 1, title: "Richo mag Jerusalem" },
    ],
    23: [
      { verse: 1, title: "Nyimine ariyo ma jochode" },
    ],
    24: [
      { verse: 1, title: "Aguch tedo" },
      { verse: 15, title: "Tho mar chi Ezekiel" },
    ],
    25: [
      { verse: 1, title: "Wach mokor kuom Amon" },
      { verse: 8, title: "Wach mokor kuom Moab" },
      { verse: 12, title: "Wach mokor kuom Edom" },
      { verse: 15, title: "Wach mokor kuom Filistia" },
    ],
    26: [
      { verse: 1, title: "Wach mokor kuom Turo" },
    ],
    27: [
      { verse: 1, title: "Wer miywagogo Turo" },
    ],
    28: [
      { verse: 1, title: "Wach mokor kuom ruodh Turo" },
      { verse: 20, title: "Wach mokor kuom Sidon" },
    ],
    29: [
      { verse: 1, title: "Wach mokor kuom Misri" },
      { verse: 1, title: "Kum kuom Farao" },
      { verse: 17, title: "Mich momi Nebukadneza" },
    ],
    30: [
      { verse: 1, title: "Wer miywagogo Misri" },
      { verse: 20, title: "Bede Farao otur" },
    ],
    31: [
      { verse: 1, title: "Yiend sida man Lebanon" },
    ],
    32: [
      { verse: 1, title: "Wer miywagogo Farao" },
      { verse: 17, title: "Misri olwar e hoho mar tho" },
    ],
    33: [
      { verse: 1, title: "Ezekiel jarito" },
      { verse: 21, title: "Podho mar Jerusalem" },
    ],
    34: [
      { verse: 1, title: "Jokwath gi rombe" },
    ],
    35: [
      { verse: 1, title: "Wach mokor kuom Edom" },
    ],
    36: [
      { verse: 1, title: "Wach mokor kuom gode mag Israel" },
    ],
    37: [
      { verse: 1, title: "Holo mar choke motwo" },
      { verse: 15, title: "Piny Juda gi piny Efraim e bwo ruoth achiel" },
    ],
    38: [
      { verse: 1, title: "Wach mokor kuom Gog" },
    ],
    39: [
    ],
    40: [
      { verse: 1, title: "Hekalu manyien" },
      { verse: 5, title: "Rangach man yo wuok chieng’ midonjogo e" },
      { verse: 5, title: "laru ma oko" },
      { verse: 17, title: "Laru ma oko" },
      { verse: 20, title: "Rangach man yo nyandwat" },
      { verse: 24, title: "Rangach man yo milambo" },
      { verse: 28, title: "Dhorangeye mag laru ma iye" },
      { verse: 38, title: "Ute mag wang’o misengini" },
      { verse: 44, title: "Ute jodolo" },
      { verse: 48, title: "Hekalu" },
    ],
    41: [
    ],
    42: [
      { verse: 1, title: "Ute jodolo" },
    ],
    43: [
      { verse: 1, title: "Duong’ mar Nyasaye odwogo ei hekalu" },
      { verse: 13, title: "Kendo mar misango" },
    ],
    44: [
      { verse: 1, title: "Wuod Ruoth, jo-Lawi gi jodolo" },
    ],
    45: [
      { verse: 1, title: "Pogo piny Israel" },
      { verse: 13, title: "Chiwo kod odiechieng’ maler" },
    ],
    46: [
    ],
    47: [
      { verse: 1, title: "Aora mamol koa ei hekalu" },
      { verse: 13, title: "Kuonde tong’ mag pinyno" },
    ],
    48: [
      { verse: 1, title: "Pogo lowo e kind dhout Israel" },
      { verse: 30, title: "Dhorangeye mag Dala Maduong’ Manyien" },
    ],
  },
  "Daniel": {
    1: [
      { verse: 1, title: "Tiegruok mar Daniel e Babulon" },
    ],
    2: [
      { verse: 1, title: "Lek mar Nebukadneza" },
      { verse: 24, title: "Daniel oloko lek mokwongo" },
    ],
    3: [
      { verse: 1, title: "Kido molos gi dhahabu gi mach makakni" },
    ],
    4: [
      { verse: 1, title: "Yien mane Nebukadneza oleko" },
      { verse: 19, title: "Daniel oloko lek" },
      { verse: 28, title: "Lek ochopo kare" },
    ],
    5: [
      { verse: 1, title: "Weche mondiki e kor ot" },
    ],
    6: [
      { verse: 1, title: "Daniel olut e bur sibuoche" },
    ],
    7: [
      { verse: 1, title: "Ondiegi ang’wen ma Daniel oneno e fweny" },
      { verse: 15, title: "Olok ne Daniel lek" },
    ],
    8: [
      { verse: 1, title: "Daniel oneno fweny mar im gi nywok" },
      { verse: 15, title: "Onyis Daniel tiend fweny" },
    ],
    9: [
      { verse: 1, title: "Lamo mar Daniel" },
      { verse: 20, title: "Higni mia ang’wen gi piero ochiko" },
    ],
    10: [
      { verse: 1, title: "Ng’at mane Daniel oneno e fweny" },
    ],
    11: [
      { verse: 2, title: "Ruodhi mag milambo gi nyandwat" },
      { verse: 36, title: "Ruoth mamiyore duong’ owuon" },
    ],
    12: [
      { verse: 1, title: "Ndalo giko" },
    ],
  },
  "Hosea": {
    1: [
      { verse: 2, title: "Chi Hosea gi nyithindgi" },
    ],
    2: [
      { verse: 2, title: "Jo-Israel okum kendo oduogi" },
    ],
    3: [
      { verse: 1, title: "Hosea otimo winjruok gi chiege" },
    ],
    4: [
      { verse: 1, title: "Bura mondonjnego jo-Israel" },
    ],
    5: [
      { verse: 1, title: "Kum ni jo-Israel" },
    ],
    6: [
      { verse: 1, title: "Jo-Israel odagi lokore" },
    ],
    7: [
    ],
    8: [
      { verse: 1, title: "Jo-Israel biro kayo kalausi" },
    ],
    9: [
      { verse: 1, title: "Kum ne jo-Israel" },
    ],
    10: [
    ],
    11: [
      { verse: 1, title: "Hera ma Nyasaye oherogo Israel" },
      { verse: 12, title: "Richo jo-Israel" },
    ],
    12: [
    ],
    13: [
      { verse: 1, title: "Mirimb Jehova Nyasaye kuom jo-Israel" },
    ],
    14: [
      { verse: 1, title: "Lokruok kuom richo kelo gweth" },
    ],
  },
  "Joel": {
    1: [
      { verse: 2, title: "Bonyo omonjo piny" },
      { verse: 13, title: "Luong mar lokruok" },
    ],
    2: [
      { verse: 1, title: "Mony mar bonyo" },
      { verse: 12, title: "Lokuru chunyu" },
      { verse: 18, title: "Dwoko mar Jehova Nyasaye" },
      { verse: 28, title: "Odiechieng’ mar Jehova Nyasaye" },
    ],
    3: [
      { verse: 1, title: "Ong’ad bura ne pinje" },
      { verse: 17, title: "Gweth ne jo-Nyasaye" },
    ],
  },
  "Amos": {
    1: [
      { verse: 3, title: "Bura mibiro ng’ado ni ogendini modak" },
      { verse: 3, title: "mokiewo gi jo-Israel" },
    ],
    2: [
      { verse: 6, title: "Bura ma ibiro ng’adne jo-Israel" },
    ],
    3: [
      { verse: 1, title: "Oluong joneno mondo ong’ad bura ni jo-Israel" },
    ],
    4: [
      { verse: 1, title: "Jo-Israel otamore duogo ir Nyasaye" },
    ],
    5: [
      { verse: 1, title: "Oluong jo-Israel mondo olokre" },
      { verse: 18, title: "Odiechieng’ mar Jehova Nyasaye" },
    ],
    6: [
      { verse: 1, title: "Osiem jo-Israel ne kum mabiro" },
      { verse: 8, title: "Nyasaye osin gi sunga mar jo-Israel" },
    ],
    7: [
      { verse: 1, title: "Fweny adek" },
      { verse: 10, title: "Amos kod Amazia" },
    ],
    8: [
      { verse: 1, title: "Fweny mar ang’wen en atonga moting’o" },
      { verse: 1, title: "olemo mochiek" },
    ],
    9: [
      { verse: 1, title: "Israel ibiro kethi" },
      { verse: 11, title: "Israel ibiro reso" },
    ],
  },
  "Obadia": {
    1: [
    ],
  },
  "Jona": {
    1: [
      { verse: 1, title: "Jona opondo ne Jehova Nyasaye" },
    ],
    2: [
      { verse: 1, title: "Lemo mar Jona" },
    ],
    3: [
      { verse: 1, title: "Jona odhiyo Nineve" },
    ],
    4: [
      { verse: 1, title: "Jona chunye odoko malit kuom kech mar" },
      { verse: 1, title: "Nyasaye ne jo-Nineve" },
    ],
  },
  "Mika": {
    1: [
      { verse: 3, title: "Bura mong’adne Samaria gi Jerusalem" },
      { verse: 8, title: "Ywak gi dengo" },
    ],
    2: [
      { verse: 1, title: "Chenro mar dhano gi mar Nyasaye" },
      { verse: 6, title: "Jonabi mag miriambo" },
      { verse: 12, title: "Osing resruok ne jo-Israel" },
    ],
    3: [
      { verse: 1, title: "Okwed jotelo kod jonabi mag Israel" },
    ],
    4: [
      { verse: 1, title: "Got mar Jehova Nyasaye" },
      { verse: 6, title: "Chenro mar Jehova Nyasaye" },
    ],
    5: [
      { verse: 1, title: "Ruoth mosingi ni noa Bethlehem" },
      { verse: 5, title: "Resruok kod kethruok" },
    ],
    6: [
      { verse: 1, title: "Wach ma Jehova Nyasaye nigo kuom jo-Israel" },
      { verse: 9, title: "Ketho kod kum mar jo-Israel" },
    ],
    7: [
      { verse: 1, title: "Midhiero mar Israel" },
      { verse: 8, title: "Israel biro chung’ kendo" },
      { verse: 14, title: "Lamo gi pak" },
    ],
  },
  "Nahum": {
    1: [
      { verse: 2, title: "Mirimb Jehova Nyasaye kuom Nineve" },
    ],
    2: [
      { verse: 1, title: "Nineve biro podho" },
    ],
    3: [
      { verse: 1, title: "Lit mabiro ne jo-Nineve" },
    ],
  },
  "Habakuk": {
    1: [
      { verse: 2, title: "Ywak mar Habakuk" },
      { verse: 5, title: "Jehova Nyasaye odwoko Habakuk" },
      { verse: 12, title: "Ywak Habakuk mar ariyo" },
    ],
    2: [
      { verse: 2, title: "Jehova Nyasaye odwoko Habakuk" },
    ],
    3: [
      { verse: 1, title: "Lemo mar Habakuk" },
    ],
  },
  "Zefania": {
    1: [
      { verse: 2, title: "Siem kuom kum mabiro" },
      { verse: 4, title: "Kum mar jo-Juda" },
      { verse: 14, title: "Odiechieng’ maduong’ mar Jehova Nyasaye" },
    ],
    2: [
      { verse: 1, title: "Juda kod Jerusalem ong’adnigi bura machalre" },
      { verse: 1, title: "gi ogendini mamoko" },
      { verse: 1, title: "Owachne Juda mondo opwodhre kuom richo" },
      { verse: 4, title: "Kum mar jo-Filistia" },
      { verse: 8, title: "Kum mar jo-Moab kod jo-Amon" },
      { verse: 12, title: "Kum mar jo-Kush" },
      { verse: 13, title: "Kum mar jo-Asuria" },
    ],
    3: [
      { verse: 1, title: "Chal mar Jerusalem e ndalo mabiro" },
      { verse: 6, title: "Jerusalem otamore pwodhore kuom richo" },
      { verse: 9, title: "Israel biro keto genogi kuom Jehova Nyasaye" },
    ],
  },
  "Hagai": {
    1: [
      { verse: 1, title: "Ojiw jo-Israel mondo oger hekalu" },
    ],
    2: [
      { verse: 1, title: "Duong’ mar hekalu" },
      { verse: 10, title: "Gweth mosing ni joma orito singruok" },
      { verse: 20, title: "Singruok mar Jehova Nyasaye ni Zerubabel" },
    ],
  },
  "Zekaria": {
    1: [
      { verse: 1, title: "Oluong jo-Israel mondo oduogi ir Jehova" },
      { verse: 1, title: "Nyasaye" },
      { verse: 7, title: "Ng’at mochung’ e dier yiend kuth ochwoga" },
      { verse: 18, title: "Tunge ang’wen kod jotheth ang’wen" },
    ],
    2: [
      { verse: 1, title: "Ng’at moting’o tond pimo e lwete" },
    ],
    3: [
      { verse: 1, title: "Lewni maler mag Jadolo Maduong’" },
    ],
    4: [
      { verse: 1, title: "Rachung taya mar dhahabu gi yiende ariyo" },
      { verse: 1, title: "mag Zeituni" },
    ],
    5: [
      { verse: 1, title: "Kalatas mafuyo e kor yamo" },
      { verse: 5, title: "Dhako mantie ei atonga" },
    ],
    6: [
      { verse: 1, title: "Geche ang’wen mag lweny" },
      { verse: 9, title: "Osidh ni Joshua osimbo mar rapar" },
    ],
    7: [
      { verse: 1, title: "Bura makare, bedo mang’won kod tweyo" },
      { verse: 1, title: "chiemo" },
    ],
    8: [
      { verse: 1, title: "Jehova Nyasaye osingore ni obiro gwedho" },
      { verse: 1, title: "Jerusalem" },
    ],
    9: [
      { verse: 1, title: "Ng’ado bura ni wasik Israel" },
      { verse: 9, title: "Biro ma Ruodh Sayun" },
      { verse: 14, title: "Jehova Nyasaye biro nenore ratiro" },
    ],
    10: [
      { verse: 1, title: "Jehova Nyasaye biro rito jo-Juda" },
    ],
    11: [
      { verse: 4, title: "Jokwath ariyo" },
    ],
    12: [
      { verse: 1, title: "Wasik Jerusalem ibiro lo" },
      { verse: 10, title: "Ywak miywagogo Jal mane gichwowo" },
    ],
    13: [
      { verse: 1, title: "Pwodhruok kuom richo" },
      { verse: 7, title: "Ogo jakwath mi rombe oke" },
    ],
    14: [
      { verse: 1, title: "Jehova Nyasaye biro gi loch" },
    ],
  },
  "Malaki": {
    1: [
      { verse: 2, title: "Jakobo oher, to Esau ok oher" },
      { verse: 6, title: "Misango ma ok owinjore" },
    ],
    2: [
      { verse: 1, title: "Siem mosiemgo jodolo" },
      { verse: 10, title: "Juda oketho winjruok" },
      { verse: 17, title: "Chieng’ bura" },
    ],
    3: [
      { verse: 6, title: "Mayo Nyasaye" },
    ],
    4: [
      { verse: 1, title: "Odiechieng Jehova Nyasaye" },
    ],
  },
};
