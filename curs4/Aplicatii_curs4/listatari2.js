const countriesData = [
    {
        "name": "South Georgia",
        "capital": "King Edward Point",
        "languages": [
            "English"
        ],
        "population": 30,
        "flag": "https://flagcdn.com/w320/gs.png",
        "currency": "Saint Helena pound"
    },
    {
        "name": "Grenada",
        "capital": "St. George's",
        "languages": [
            "English"
        ],
        "population": 112519,
        "flag": "https://flagcdn.com/w320/gd.png",
        "currency": "Eastern Caribbean dollar"
    },
    {
        "name": "Switzerland",
        "capital": "Bern",
        "languages": [
            "French",
            "Swiss German",
            "Italian",
            "Romansh"
        ],
        "population": 8654622,
        "flag": "https://flagcdn.com/w320/ch.png",
        "currency": "Swiss franc"
    },
    {
        "name": "Sierra Leone",
        "capital": "Freetown",
        "languages": [
            "English"
        ],
        "population": 7976985,
        "flag": "https://flagcdn.com/w320/sl.png",
        "currency": "Sierra Leonean leone"
    },
    {
        "name": "Hungary",
        "capital": "Budapest",
        "languages": [
            "Hungarian"
        ],
        "population": 9749763,
        "flag": "https://flagcdn.com/w320/hu.png",
        "currency": "Hungarian forint"
    },
    {
        "name": "Taiwan",
        "capital": "Taipei",
        "languages": [
            "Chinese"
        ],
        "population": 23503349,
        "flag": "https://flagcdn.com/w320/tw.png",
        "currency": "New Taiwan dollar"
    },
    {
        "name": "Wallis and Futuna",
        "capital": "Mata-Utu",
        "languages": [
            "French"
        ],
        "population": 11750,
        "flag": "https://flagcdn.com/w320/wf.png",
        "currency": "CFP franc"
    },
    {
        "name": "Barbados",
        "capital": "Bridgetown",
        "languages": [
            "English"
        ],
        "population": 287371,
        "flag": "https://flagcdn.com/w320/bb.png",
        "currency": "Barbadian dollar"
    },
    {
        "name": "Pitcairn Islands",
        "capital": "Adamstown",
        "languages": [
            "English"
        ],
        "population": 56,
        "flag": "https://flagcdn.com/w320/pn.png",
        "currency": "New Zealand dollar"
    },
    {
        "name": "Ivory Coast",
        "capital": "Yamoussoukro",
        "languages": [
            "French"
        ],
        "population": 26378275,
        "flag": "https://flagcdn.com/w320/ci.png",
        "currency": "West African CFA franc"
    },
    {
        "name": "Tunisia",
        "capital": "Tunis",
        "languages": [
            "Arabic"
        ],
        "population": 11818618,
        "flag": "https://flagcdn.com/w320/tn.png",
        "currency": "Tunisian dinar"
    },
    {
        "name": "Italy",
        "capital": "Rome",
        "languages": [
            "Italian"
        ],
        "population": 59554023,
        "flag": "https://flagcdn.com/w320/it.png",
        "currency": "Euro"
    },
    {
        "name": "Benin",
        "capital": "Porto-Novo",
        "languages": [
            "French"
        ],
        "population": 12123198,
        "flag": "https://flagcdn.com/w320/bj.png",
        "currency": "West African CFA franc"
    },
    {
        "name": "Indonesia",
        "capital": "Jakarta",
        "languages": [
            "Indonesian"
        ],
        "population": 273523621,
        "flag": "https://flagcdn.com/w320/id.png",
        "currency": "Indonesian rupiah"
    },
    {
        "name": "Cape Verde",
        "capital": "Praia",
        "languages": [
            "Portuguese"
        ],
        "population": 555988,
        "flag": "https://flagcdn.com/w320/cv.png",
        "currency": "Cape Verdean escudo"
    },
    {
        "name": "Saint Kitts and Nevis",
        "capital": "Basseterre",
        "languages": [
            "English"
        ],
        "population": 53192,
        "flag": "https://flagcdn.com/w320/kn.png",
        "currency": "Eastern Caribbean dollar"
    },
    {
        "name": "Laos",
        "capital": "Vientiane",
        "languages": [
            "Lao"
        ],
        "population": 7275556,
        "flag": "https://flagcdn.com/w320/la.png",
        "currency": "Lao kip"
    },
    {
        "name": "Caribbean Netherlands",
        "capital": "Kralendijk",
        "languages": [
            "English",
            "Dutch",
            "Papiamento"
        ],
        "population": 25987,
        "flag": "https://flagcdn.com/w320/bq.png",
        "currency": "United States dollar"
    },
    {
        "name": "Uganda",
        "capital": "Kampala",
        "languages": [
            "English",
            "Swahili"
        ],
        "population": 45741000,
        "flag": "https://flagcdn.com/w320/ug.png",
        "currency": "Ugandan shilling"
    },
    {
        "name": "Andorra",
        "capital": "Andorra la Vella",
        "languages": [
            "Catalan"
        ],
        "population": 77265,
        "flag": "https://flagcdn.com/w320/ad.png",
        "currency": "Euro"
    },
    {
        "name": "Burundi",
        "capital": "Gitega",
        "languages": [
            "French",
            "Kirundi"
        ],
        "population": 11890781,
        "flag": "https://flagcdn.com/w320/bi.png",
        "currency": "Burundian franc"
    },
    {
        "name": "South Africa",
        "capital": "Pretoria",
        "languages": [
            "Afrikaans",
            "English",
            "Southern Ndebele",
            "Northern Sotho",
            "Southern Sotho",
            "Swazi",
            "Tswana",
            "Tsonga",
            "Venda",
            "Xhosa",
            "Zulu"
        ],
        "population": 59308690,
        "flag": "https://flagcdn.com/w320/za.png",
        "currency": "South African rand"
    },
    {
        "name": "France",
        "capital": "Paris",
        "languages": [
            "French"
        ],
        "population": 67391582,
        "flag": "https://flagcdn.com/w320/fr.png",
        "currency": "Euro"
    },
    {
        "name": "Libya",
        "capital": "Tripoli",
        "languages": [
            "Arabic"
        ],
        "population": 6871287,
        "flag": "https://flagcdn.com/w320/ly.png",
        "currency": "Libyan dinar"
    },
    {
        "name": "Mexico",
        "capital": "Mexico City",
        "languages": [
            "Spanish"
        ],
        "population": 128932753,
        "flag": "https://flagcdn.com/w320/mx.png",
        "currency": "Mexican peso"
    },
    {
        "name": "Gabon",
        "capital": "Libreville",
        "languages": [
            "French"
        ],
        "population": 2225728,
        "flag": "https://flagcdn.com/w320/ga.png",
        "currency": "Central African CFA franc"
    },
    {
        "name": "Northern Mariana Islands",
        "capital": "Saipan",
        "languages": [
            "Carolinian",
            "Chamorro",
            "English"
        ],
        "population": 57557,
        "flag": "https://flagcdn.com/w320/mp.png",
        "currency": "United States dollar"
    },
    {
        "name": "North Macedonia",
        "capital": "Skopje",
        "languages": [
            "Macedonian"
        ],
        "population": 2077132,
        "flag": "https://flagcdn.com/w320/mk.png",
        "currency": "denar"
    },
    {
        "name": "China",
        "capital": "Beijing",
        "languages": [
            "Chinese"
        ],
        "population": 1402112000,
        "flag": "https://flagcdn.com/w320/cn.png",
        "currency": "Chinese yuan"
    },
    {
        "name": "Yemen",
        "capital": "Sana'a",
        "languages": [
            "Arabic"
        ],
        "population": 29825968,
        "flag": "https://flagcdn.com/w320/ye.png",
        "currency": "Yemeni rial"
    },
    {
        "name": "Saint Barthélemy",
        "capital": "Gustavia",
        "languages": [
            "French"
        ],
        "population": 4255,
        "flag": "https://flagcdn.com/w320/bl.png",
        "currency": "Euro"
    },
    {
        "name": "Guernsey",
        "capital": "St. Peter Port",
        "languages": [
            "English",
            "French",
            "Guernésiais"
        ],
        "population": 62999,
        "flag": "https://flagcdn.com/w320/gg.png",
        "currency": "British pound"
    },
    {
        "name": "Solomon Islands",
        "capital": "Honiara",
        "languages": [
            "English"
        ],
        "population": 686878,
        "flag": "https://flagcdn.com/w320/sb.png",
        "currency": "Solomon Islands dollar"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "capital": "Longyearbyen",
        "languages": [
            "Norwegian"
        ],
        "population": 2562,
        "flag": "https://flagcdn.com/w320/sj.png",
        "currency": "krone"
    },
    {
        "name": "Faroe Islands",
        "capital": "Tórshavn",
        "languages": [
            "Danish",
            "Faroese"
        ],
        "population": 48865,
        "flag": "https://flagcdn.com/w320/fo.png",
        "currency": "Danish krone"
    },
    {
        "name": "Uzbekistan",
        "capital": "Tashkent",
        "languages": [
            "Russian",
            "Uzbek"
        ],
        "population": 34232050,
        "flag": "https://flagcdn.com/w320/uz.png",
        "currency": "Uzbekistani soʻm"
    },
    {
        "name": "Egypt",
        "capital": "Cairo",
        "languages": [
            "Arabic"
        ],
        "population": 102334403,
        "flag": "https://flagcdn.com/w320/eg.png",
        "currency": "Egyptian pound"
    },
    {
        "name": "Senegal",
        "capital": "Dakar",
        "languages": [
            "French"
        ],
        "population": 16743930,
        "flag": "https://flagcdn.com/w320/sn.png",
        "currency": "West African CFA franc"
    },
    {
        "name": "Sri Lanka",
        "capital": "Sri Jayawardenepura Kotte",
        "languages": [
            "Sinhala",
            "Tamil"
        ],
        "population": 21919000,
        "flag": "https://flagcdn.com/w320/lk.png",
        "currency": "Sri Lankan rupee"
    },
    {
        "name": "Palestine",
        "capital": "Ramallah",
        "languages": [
            "Arabic"
        ],
        "population": 4803269,
        "flag": "https://flagcdn.com/w320/ps.png",
        "currency": "Egyptian pound"
    },
    {
        "name": "Bangladesh",
        "capital": "Dhaka",
        "languages": [
            "Bengali"
        ],
        "population": 164689383,
        "flag": "https://flagcdn.com/w320/bd.png",
        "currency": "Bangladeshi taka"
    },
    {
        "name": "Peru",
        "capital": "Lima",
        "languages": [
            "Aymara",
            "Quechua",
            "Spanish"
        ],
        "population": 32971846,
        "flag": "https://flagcdn.com/w320/pe.png",
        "currency": "Peruvian sol"
    },
    {
        "name": "Singapore",
        "capital": "Singapore",
        "languages": [
            "English",
            "Chinese",
            "Malay",
            "Tamil"
        ],
        "population": 5685807,
        "flag": "https://flagcdn.com/w320/sg.png",
        "currency": "Singapore dollar"
    },
    {
        "name": "Turkey",
        "capital": "Ankara",
        "languages": [
            "Turkish"
        ],
        "population": 84339067,
        "flag": "https://flagcdn.com/w320/tr.png",
        "currency": "Turkish lira"
    },
    {
        "name": "Afghanistan",
        "capital": "Kabul",
        "languages": [
            "Dari",
            "Pashto",
            "Turkmen"
        ],
        "population": 40218234,
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
        "currency": "Afghan afghani"
    },
    {
        "name": "Aruba",
        "capital": "Oranjestad",
        "languages": [
            "Dutch",
            "Papiamento"
        ],
        "population": 106766,
        "flag": "https://flagcdn.com/w320/aw.png",
        "currency": "Aruban florin"
    },
    {
        "name": "Cook Islands",
        "capital": "Avarua",
        "languages": [
            "English",
            "Cook Islands Māori"
        ],
        "population": 18100,
        "flag": "https://flagcdn.com/w320/ck.png",
        "currency": "Cook Islands dollar"
    },
    {
        "name": "United Kingdom",
        "capital": "London",
        "languages": [
            "English"
        ],
        "population": 67215293,
        "flag": "https://flagcdn.com/w320/gb.png",
        "currency": "British pound"
    },
    {
        "name": "Zambia",
        "capital": "Lusaka",
        "languages": [
            "English"
        ],
        "population": 18383956,
        "flag": "https://flagcdn.com/w320/zm.png",
        "currency": "Zambian kwacha"
    },
    {
        "name": "Finland",
        "capital": "Helsinki",
        "languages": [
            "Finnish",
            "Swedish"
        ],
        "population": 5530719,
        "flag": "https://flagcdn.com/w320/fi.png",
        "currency": "Euro"
    },
    {
        "name": "Niger",
        "capital": "Niamey",
        "languages": [
            "French"
        ],
        "population": 24206636,
        "flag": "https://flagcdn.com/w320/ne.png",
        "currency": "West African CFA franc"
    },
    {
        "name": "Christmas Island",
        "capital": "Flying Fish Cove",
        "languages": [
            "English"
        ],
        "population": 2072,
        "flag": "https://flagcdn.com/w320/cx.png",
        "currency": "Australian dollar"
    },
    {
        "name": "Tokelau",
        "capital": "Fakaofo",
        "languages": [
            "English",
            "Samoan",
            "Tokelauan"
        ],
        "population": 1411,
        "flag": "https://flagcdn.com/w320/tk.png",
        "currency": "New Zealand dollar"
    },
    {
        "name": "Guinea-Bissau",
        "capital": "Bissau",
        "languages": [
            "Portuguese",
            "Upper Guinea Creole"
        ],
        "population": 1967998,
        "flag": "https://flagcdn.com/w320/gw.png",
        "currency": "West African CFA franc"
    },
    {
        "name": "Azerbaijan",
        "capital": "Baku",
        "languages": [
            "Azerbaijani"
        ],
        "population": 10110116,
        "flag": "https://flagcdn.com/w320/az.png",
        "currency": "Azerbaijani manat"
    },
    {
        "name": "Réunion",
        "capital": "Saint-Denis",
        "languages": [
            "French"
        ],
        "population": 840974,
        "flag": "https://flagcdn.com/w320/re.png",
        "currency": "Euro"
    },
    {
        "name": "Djibouti",
        "capital": "Djibouti",
        "languages": [
            "Arabic",
            "French"
        ],
        "population": 988002,
        "flag": "https://flagcdn.com/w320/dj.png",
        "currency": "Djiboutian franc"
    },
    {
        "name": "North Korea",
        "capital": "Pyongyang",
        "languages": [
            "Korean"
        ],
        "population": 25778815,
        "flag": "https://flagcdn.com/w320/kp.png",
        "currency": "North Korean won"
    },
    {
        "name": "Mauritius",
        "capital": "Port Louis",
        "languages": [
            "English",
            "French",
            "Mauritian Creole"
        ],
        "population": 1265740,
        "flag": "https://flagcdn.com/w320/mu.png",
        "currency": "Mauritian rupee"
    },
    {
        "name": "Montserrat",
        "capital": "Plymouth",
        "languages": [
            "English"
        ],
        "population": 4922,
        "flag": "https://flagcdn.com/w320/ms.png",
        "currency": "Eastern Caribbean dollar"
    },
    {
        "name": "United States Virgin Islands",
        "capital": "Charlotte Amalie",
        "languages": [
            "English"
        ],
        "population": 106290,
        "flag": "https://flagcdn.com/w320/vi.png",
        "currency": "United States dollar"
    },
    {
        "name": "Colombia",
        "capital": "Bogotá",
        "languages": [
            "Spanish"
        ],
        "population": 50882884,
        "flag": "https://flagcdn.com/w320/co.png",
        "currency": "Colombian peso"
    },
    {
        "name": "Greece",
        "capital": "Athens",
        "languages": [
            "Greek"
        ],
        "population": 10715549,
        "flag": "https://flagcdn.com/w320/gr.png",
        "currency": "Euro"
    },
    {
        "name": "Croatia",
        "capital": "Zagreb",
        "languages": [
            "Croatian"
        ],
        "population": 4047200,
        "flag": "https://flagcdn.com/w320/hr.png",
        "currency": "Euro"
    },
    {
        "name": "Morocco",
        "capital": "Rabat",
        "languages": [
            "Arabic",
            "Berber"
        ],
        "population": 36910558,
        "flag": "https://flagcdn.com/w320/ma.png",
        "currency": "Moroccan dirham"
    },
    {
        "name": "Algeria",
        "capital": "Algiers",
        "languages": [
            "Arabic"
        ],
        "population": 44700000,
        "flag": "https://flagcdn.com/w320/dz.png",
        "currency": "Algerian dinar"
    },
    {
        "name": "Antarctica",
        "capital": "Nu există capitală",
        "languages": [],
        "population": 1000,
        "flag": "https://flagcdn.com/w320/aq.png",
        "currency": "Nu există monedă"
    },
    {
        "name": "Netherlands",
        "capital": "Amsterdam",
        "languages": [
            "Dutch"
        ],
        "population": 16655799,
        "flag": "https://flagcdn.com/w320/nl.png",
        "currency": "Euro"
    },
    {
        "name": "Sudan",
        "capital": "Khartoum",
        "languages": [
            "Arabic",
            "English"
        ],
        "population": 43849269,
        "flag": "https://flagcdn.com/w320/sd.png",
        "currency": "Sudanese pound"
    },
    {
        "name": "Fiji",
        "capital": "Suva",
        "languages": [
            "English",
            "Fijian",
            "Fiji Hindi"
        ],
        "population": 896444,
        "flag": "https://flagcdn.com/w320/fj.png",
        "currency": "Fijian dollar"
    },
    {
        "name": "Liechtenstein",
        "capital": "Vaduz",
        "languages": [
            "German"
        ],
        "population": 38137,
        "flag": "https://flagcdn.com/w320/li.png",
        "currency": "Swiss franc"
    },
    {
        "name": "Nepal",
        "capital": "Kathmandu",
        "languages": [
            "Nepali"
        ],
        "population": 29136808,
        "flag": "https://flagcdn.com/w320/np.png",
        "currency": "Nepalese rupee"
    },
    {
        "name": "Puerto Rico",
        "capital": "San Juan",
        "languages": [
            "English",
            "Spanish"
        ],
        "population": 3194034,
        "flag": "https://flagcdn.com/w320/pr.png",
        "currency": "United States dollar"
    },
    {
        "name": "Georgia",
        "capital": "Tbilisi",
        "languages": [
            "Georgian"
        ],
        "population": 3714000,
        "flag": "https://flagcdn.com/w320/ge.png",
        "currency": "lari"
    },
    {
        "name": "Pakistan",
        "capital": "Islamabad",
        "languages": [
            "English",
            "Urdu"
        ],
        "population": 220892331,
        "flag": "https://flagcdn.com/w320/pk.png",
        "currency": "Pakistani rupee"
    },
    {
        "name": "Monaco",
        "capital": "Monaco",
        "languages": [
            "French"
        ],
        "population": 39244,
        "flag": "https://flagcdn.com/w320/mc.png",
        "currency": "Euro"
    },
    {
        "name": "Botswana",
        "capital": "Gaborone",
        "languages": [
            "English",
            "Tswana"
        ],
        "population": 2351625,
        "flag": "https://flagcdn.com/w320/bw.png",
        "currency": "Botswana pula"
    },
    {
        "name": "Lebanon",
        "capital": "Beirut",
        "languages": [
            "Arabic",
            "French"
        ],
        "population": 6825442,
        "flag": "https://flagcdn.com/w320/lb.png",
        "currency": "Lebanese pound"
    },
    {
        "name": "Papua New Guinea",
        "capital": "Port Moresby",
        "languages": [
            "English",
            "Hiri Motu",
            "Tok Pisin"
        ],
        "population": 8947027,
        "flag": "https://flagcdn.com/w320/pg.png",
        "currency": "Papua New Guinean kina"
    },
    {
        "name": "Mayotte",
        "capital": "Mamoudzou",
        "languages": [
            "French"
        ],
        "population": 226915,
        "flag": "https://flagcdn.com/w320/yt.png",
        "currency": "Euro"
    },
    {
        "name": "Dominican Republic",
        "capital": "Santo Domingo",
        "languages": [
            "Spanish"
        ],
        "population": 10847904,
        "flag": "https://flagcdn.com/w320/do.png",
        "currency": "Dominican peso"
    },
    {
        "name": "Norfolk Island",
        "capital": "Kingston",
        "languages": [
            "English",
            "Norfuk"
        ],
        "population": 2302,
        "flag": "https://flagcdn.com/w320/nf.png",
        "currency": "Australian dollar"
    },
    {
        "name": "Bouvet Island",
        "capital": "Nu există capitală",
        "languages": [
            "Norwegian"
        ],
        "population": 0,
        "flag": "https://flagcdn.com/w320/bv.png",
        "currency": "Nu există monedă"
    },
    {
        "name": "Qatar",
        "capital": "Doha",
        "languages": [
            "Arabic"
        ],
        "population": 2881060,
        "flag": "https://flagcdn.com/w320/qa.png",
        "currency": "Qatari riyal"
    },
    {
        "name": "Madagascar",
        "capital": "Antananarivo",
        "languages": [
            "French",
            "Malagasy"
        ],
        "population": 27691019,
        "flag": "https://flagcdn.com/w320/mg.png",
        "currency": "Malagasy ariary"
    },
    {
        "name": "India",
        "capital": "New Delhi",
        "languages": [
            "English",
            "Hindi",
            "Tamil"
        ],
        "population": 1380004385,
        "flag": "https://flagcdn.com/w320/in.png",
        "currency": "Indian rupee"
    },
    {
        "name": "Syria",
        "capital": "Damascus",
        "languages": [
            "Arabic"
        ],
        "population": 17500657,
        "flag": "https://flagcdn.com/w320/sy.png",
        "currency": "Syrian pound"
    },
    {
        "name": "Montenegro",
        "capital": "Podgorica",
        "languages": [
            "Montenegrin"
        ],
        "population": 621718,
        "flag": "https://flagcdn.com/w320/me.png",
        "currency": "Euro"
    },
    {
        "name": "Eswatini",
        "capital": "Mbabane",
        "languages": [
            "English",
            "Swazi"
        ],
        "population": 1160164,
        "flag": "https://flagcdn.com/w320/sz.png",
        "currency": "Swazi lilangeni"
    },
    {
        "name": "Paraguay",
        "capital": "Asunción",
        "languages": [
            "Guaraní",
            "Spanish"
        ],
        "population": 7132530,
        "flag": "https://flagcdn.com/w320/py.png",
        "currency": "Paraguayan guaraní"
    },
    {
        "name": "El Salvador",
        "capital": "San Salvador",
        "languages": [
            "Spanish"
        ],
        "population": 6486201,
        "flag": "https://flagcdn.com/w320/sv.png",
        "currency": "United States dollar"
    },
    {
        "name": "Ukraine",
        "capital": "Kyiv",
        "languages": [
            "Ukrainian"
        ],
        "population": 44134693,
        "flag": "https://flagcdn.com/w320/ua.png",
        "currency": "Ukrainian hryvnia"
    },
    {
        "name": "Isle of Man",
        "capital": "Douglas",
        "languages": [
            "English",
            "Manx"
        ],
        "population": 85032,
        "flag": "https://flagcdn.com/w320/im.png",
        "currency": "British pound"
    },
    {
        "name": "Namibia",
        "capital": "Windhoek",
        "languages": [
            "Afrikaans",
            "German",
            "English",
            "Herero",
            "Khoekhoe",
            "Kwangali",
            "Lozi",
            "Ndonga",
            "Tswana"
        ],
        "population": 2540916,
        "flag": "https://flagcdn.com/w320/na.png",
        "currency": "Namibian dollar"
    },
    {
        "name": "United Arab Emirates",
        "capital": "Abu Dhabi",
        "languages": [
            "Arabic"
        ],
        "population": 9890400,
        "flag": "https://flagcdn.com/w320/ae.png",
        "currency": "United Arab Emirates dirham"
    },
    {
        "name": "Bulgaria",
        "capital": "Sofia",
        "languages": [
            "Bulgarian"
        ],
        "population": 6927288,
        "flag": "https://flagcdn.com/w320/bg.png",
        "currency": "Bulgarian lev"
    },
    {
        "name": "Greenland",
        "capital": "Nuuk",
        "languages": [
            "Greenlandic"
        ],
        "population": 56367,
        "flag": "https://flagcdn.com/w320/gl.png",
        "currency": "krone"
    },
    {
        "name": "Germany",
        "capital": "Berlin",
        "languages": [
            "German"
        ],
        "population": 83240525,
        "flag": "https://flagcdn.com/w320/de.png",
        "currency": "Euro"
    },
    {
        "name": "Cambodia",
        "capital": "Phnom Penh",
        "languages": [
            "Khmer"
        ],
        "population": 16718971,
        "flag": "https://flagcdn.com/w320/kh.png",
        "currency": "Cambodian riel"
    },
    {
        "name": "Iraq",
        "capital": "Baghdad",
        "languages": [
            "Arabic",
            "Aramaic",
            "Sorani"
        ],
        "population": 40222503,
        "flag": "https://flagcdn.com/w320/iq.png",
        "currency": "Iraqi dinar"
    },
    {
        "name": "French Southern and Antarctic Lands",
        "capital": "Port-aux-Français",
        "languages": [
            "French"
        ],
        "population": 400,
        "flag": "https://flagcdn.com/w320/tf.png",
        "currency": "Euro"
    },
    {
        "name": "Sweden",
        "capital": "Stockholm",
        "languages": [
            "Swedish"
        ],
        "population": 10353442,
        "flag": "https://flagcdn.com/w320/se.png",
        "currency": "Swedish krona"
    },
    {
        "name": "Cuba",
        "capital": "Havana",
        "languages": [
            "Spanish"
        ],
        "population": 11326616,
        "flag": "https://flagcdn.com/w320/cu.png",
        "currency": "Cuban convertible peso"
    },
    {
        "name": "Kyrgyzstan",
        "capital": "Bishkek",
        "languages": [
            "Kyrgyz",
            "Russian"
        ],
        "population": 6591600,
        "flag": "https://flagcdn.com/w320/kg.png",
        "currency": "Kyrgyzstani som"
    },
    {
        "name": "Russia",
        "capital": "Moscow",
        "languages": [
            "Russian"
        ],
        "population": 144104080,
        "flag": "https://flagcdn.com/w320/ru.png",
        "currency": "Russian ruble"
    },
    {
        "name": "Malaysia",
        "capital": "Kuala Lumpur",
        "languages": [
            "English",
            "Malay"
        ],
        "population": 32365998,
        "flag": "https://flagcdn.com/w320/my.png",
        "currency": "Malaysian ringgit"
    },
    {
        "name": "São Tomé and Príncipe",
        "capital": "São Tomé",
        "languages": [
            "Portuguese"
        ],
        "population": 219161,
        "flag": "https://flagcdn.com/w320/st.png",
        "currency": "São Tomé and Príncipe dobra"
    },
    {
        "name": "Cyprus",
        "capital": "Nicosia",
        "languages": [
            "Greek",
            "Turkish"
        ],
        "population": 1207361,
        "flag": "https://flagcdn.com/w320/cy.png",
        "currency": "Euro"
    },
    {
        "name": "Canada",
        "capital": "Ottawa",
        "languages": [
            "English",
            "French"
        ],
        "population": 38005238,
        "flag": "https://flagcdn.com/w320/ca.png",
        "currency": "Canadian dollar"
    },
    {
        "name": "Malawi",
        "capital": "Lilongwe",
        "languages": [
            "English",
            "Chewa"
        ],
        "population": 19129955,
        "flag": "https://flagcdn.com/w320/mw.png",
        "currency": "Malawian kwacha"
    },
    {
        "name": "Saudi Arabia",
        "capital": "Riyadh",
        "languages": [
            "Arabic"
        ],
        "population": 34813867,
        "flag": "https://flagcdn.com/w320/sa.png",
        "currency": "Saudi riyal"
    },
    {
        "name": "Bosnia and Herzegovina",
        "capital": "Sarajevo",
        "languages": [
            "Bosnian",
            "Croatian",
            "Serbian"
        ],
        "population": 3280815,
        "flag": "https://flagcdn.com/w320/ba.png",
        "currency": "Bosnia and Herzegovina convertible mark"
    },
    {
        "name": "Ethiopia",
        "capital": "Addis Ababa",
        "languages": [
            "Amharic"
        ],
        "population": 114963583,
        "flag": "https://flagcdn.com/w320/et.png",
        "currency": "Ethiopian birr"
    },
    {
        "name": "Spain",
        "capital": "Madrid",
        "languages": [
            "Spanish",
            "Catalan",
            "Basque",
            "Galician"
        ],
        "population": 47351567,
        "flag": "https://flagcdn.com/w320/es.png",
        "currency": "Euro"
    },
    {
        "name": "Slovenia",
        "capital": "Ljubljana",
        "languages": [
            "Slovene"
        ],
        "population": 2100126,
        "flag": "https://flagcdn.com/w320/si.png",
        "currency": "Euro"
    },
    {
        "name": "Oman",
        "capital": "Muscat",
        "languages": [
            "Arabic"
        ],
        "population": 5106622,
        "flag": "https://flagcdn.com/w320/om.png",
        "currency": "Omani rial"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "capital": "Saint-Pierre",
        "languages": [
            "French"
        ],
        "population": 6069,
        "flag": "https://flagcdn.com/w320/pm.png",
        "currency": "Euro"
    },
    {
        "name": "Macau",
        "capital": "Nu există capitală",
        "languages": [
            "Portuguese",
            "Chinese"
        ],
        "population": 649342,
        "flag": "https://flagcdn.com/w320/mo.png",
        "currency": "Macanese pataca"
    },
    {
        "name": "San Marino",
        "capital": "City of San Marino",
        "languages": [
            "Italian"
        ],
        "population": 33938,
        "flag": "https://flagcdn.com/w320/sm.png",
        "currency": "Euro"
    },
    {
        "name": "Lesotho",
        "capital": "Maseru",
        "languages": [
            "English",
            "Sotho"
        ],
        "population": 2142252,
        "flag": "https://flagcdn.com/w320/ls.png",
        "currency": "Lesotho loti"
    },
    {
        "name": "Marshall Islands",
        "capital": "Majuro",
        "languages": [
            "English",
            "Marshallese"
        ],
        "population": 59194,
        "flag": "https://flagcdn.com/w320/mh.png",
        "currency": "United States dollar"
    },
    {
        "name": "Sint Maarten",
        "capital": "Philipsburg",
        "languages": [
            "English",
            "French",
            "Dutch"
        ],
        "population": 40812,
        "flag": "https://flagcdn.com/w320/sx.png",
        "currency": "Netherlands Antillean guilder"
    },
    {
        "name": "Iceland",
        "capital": "Reykjavik",
        "languages": [
            "Icelandic"
        ],
        "population": 366425,
        "flag": "https://flagcdn.com/w320/is.png",
        "currency": "Icelandic króna"
    },
    {
        "name": "Luxembourg",
        "capital": "Luxembourg",
        "languages": [
            "German",
            "French",
            "Luxembourgish"
        ],
        "population": 632275,
        "flag": "https://flagcdn.com/w320/lu.png",
        "currency": "Euro"
    },
    {
        "name": "Argentina",
        "capital": "Buenos Aires",
        "languages": [
            "Guaraní",
            "Spanish"
        ],
        "population": 45376763,
        "flag": "https://flagcdn.com/w320/ar.png",
        "currency": "Argentine peso"
    },
    {
        "name": "Turks and Caicos Islands",
        "capital": "Cockburn Town",
        "languages": [
            "English"
        ],
        "population": 38718,
        "flag": "https://flagcdn.com/w320/tc.png",
        "currency": "United States dollar"
    },
    {
        "name": "Nauru",
        "capital": "Yaren",
        "languages": [
            "English",
            "Nauru"
        ],
        "population": 10834,
        "flag": "https://flagcdn.com/w320/nr.png",
        "currency": "Australian dollar"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "capital": "West Island",
        "languages": [
            "English"
        ],
        "population": 544,
        "flag": "https://flagcdn.com/w320/cc.png",
        "currency": "Australian dollar"
    },
    {
        "name": "Western Sahara",
        "capital": "El Aaiún",
        "languages": [
            "Berber",
            "Hassaniya",
            "Spanish"
        ],
        "population": 510713,
        "flag": "https://flagcdn.com/w320/eh.png",
        "currency": "Algerian dinar"
    },
    {
        "name": "Dominica",
        "capital": "Roseau",
        "languages": [
            "English"
        ],
        "population": 71991,
        "flag": "https://flagcdn.com/w320/dm.png",
        "currency": "Eastern Caribbean dollar"
    },
    {
        "name": "Costa Rica",
        "capital": "San José",
        "languages": [
            "Spanish"
        ],
        "population": 5094114,
        "flag": "https://flagcdn.com/w320/cr.png",
        "currency": "Costa Rican colón"
    },
    {
        "name": "Australia",
        "capital": "Canberra",
        "languages": [
            "English"
        ],
        "population": 25687041,
        "flag": "https://flagcdn.com/w320/au.png",
        "currency": "Australian dollar"
    },
    {
        "name": "Thailand",
        "capital": "Bangkok",
        "languages": [
            "Thai"
        ],
        "population": 69799978,
        "flag": "https://flagcdn.com/w320/th.png",
        "currency": "Thai baht"
    },
    {
        "name": "Haiti",
        "capital": "Port-au-Prince",
        "languages": [
            "French",
            "Haitian Creole"
        ],
        "population": 11402533,
        "flag": "https://flagcdn.com/w320/ht.png",
        "currency": "Haitian gourde"
    },
    {
        "name": "Tuvalu",
        "capital": "Funafuti",
        "languages": [
            "English",
            "Tuvaluan"
        ],
        "population": 11792,
        "flag": "https://flagcdn.com/w320/tv.png",
        "currency": "Australian dollar"
    },
    {
        "name": "Honduras",
        "capital": "Tegucigalpa",
        "languages": [
            "Spanish"
        ],
        "population": 9904608,
        "flag": "https://flagcdn.com/w320/hn.png",
        "currency": "Honduran lempira"
    },
    {
        "name": "Equatorial Guinea",
        "capital": "Malabo",
        "languages": [
            "French",
            "Portuguese",
            "Spanish"
        ],
        "population": 1402985,
        "flag": "https://flagcdn.com/w320/gq.png",
        "currency": "Central African CFA franc"
    },
    {
        "name": "Saint Lucia",
        "capital": "Castries",
        "languages": [
            "English"
        ],
        "population": 183629,
        "flag": "https://flagcdn.com/w320/lc.png",
        "currency": "Eastern Caribbean dollar"
    },
    {
        "name": "French Polynesia",
        "capital": "Papeetē",
        "languages": [
            "French"
        ],
        "population": 280904,
        "flag": "https://flagcdn.com/w320/pf.png",
        "currency": "CFP franc"
    },
    {
        "name": "Belarus",
        "capital": "Minsk",
        "languages": [
            "Belarusian",
            "Russian"
        ],
        "population": 9398861,
        "flag": "https://flagcdn.com/w320/by.png",
        "currency": "Belarusian ruble"
    },
    {
        "name": "Latvia",
        "capital": "Riga",
        "languages": [
            "Latvian"
        ],
        "population": 1901548,
        "flag": "https://flagcdn.com/w320/lv.png",
        "currency": "Euro"
    },
    {
        "name": "Palau",
        "capital": "Ngerulmud",
        "languages": [
            "English",
            "Palauan"
        ],
        "population": 18092,
        "flag": "https://flagcdn.com/w320/pw.png",
        "currency": "United States dollar"
    },
    {
        "name": "Guadeloupe",
        "capital": "Basse-Terre",
        "languages": [
            "French"
        ],
        "population": 400132,
        "flag": "https://flagcdn.com/w320/gp.png",
        "currency": "Euro"
    },
    {
        "name": "Philippines",
        "capital": "Manila",
        "languages": [
            "English",
            "Filipino"
        ],
        "population": 109581085,
        "flag": "https://flagcdn.com/w320/ph.png",
        "currency": "Philippine peso"
    },
    {
        "name": "Gibraltar",
        "capital": "Gibraltar",
        "languages": [
            "English"
        ],
        "population": 33691,
        "flag": "https://flagcdn.com/w320/gi.png",
        "currency": "Gibraltar pound"
    },
    {
        "name": "Denmark",
        "capital": "Copenhagen",
        "languages": [
            "Danish"
        ],
        "population": 5831404,
        "flag": "https://flagcdn.com/w320/dk.png",
        "currency": "Danish krone"
    },
    {
        "name": "Cameroon",
        "capital": "Yaoundé",
        "languages": [
            "English",
            "French"
        ],
        "population": 26545864,
        "flag": "https://flagcdn.com/w320/cm.png",
        "currency": "Central African CFA franc"
    },
    {
        "name": "Guinea",
        "capital": "Conakry",
        "languages": [
            "French"
        ],
        "population": 13132792,
        "flag": "https://flagcdn.com/w320/gn.png",
        "currency": "Guinean franc"
    },
    {
        "name": "Bahrain",
        "capital": "Manama",
        "languages": [
            "Arabic"
        ],
        "population": 1701583,
        "flag": "https://flagcdn.com/w320/bh.png",
        "currency": "Bahraini dinar"
    },
    {
        "name": "Suriname",
        "capital": "Paramaribo",
        "languages": [
            "Dutch"
        ],
        "population": 586634,
        "flag": "https://flagcdn.com/w320/sr.png",
        "currency": "Surinamese dollar"
    },
    {
        "name": "DR Congo",
        "capital": "Kinshasa",
        "languages": [
            "French",
            "Kikongo",
            "Lingala",
            "Tshiluba",
            "Swahili"
        ],
        "population": 108407721,
        "flag": "https://flagcdn.com/w320/cd.png",
        "currency": "Congolese franc"
    },
    {
        "name": "Somalia",
        "capital": "Mogadishu",
        "languages": [
            "Arabic",
            "Somali"
        ],
        "population": 15893219,
        "flag": "https://flagcdn.com/w320/so.png",
        "currency": "Somali shilling"
    },
    {
        "name": "Czechia",
        "capital": "Prague",
        "languages": [
            "Czech",
            "Slovak"
        ],
        "population": 10698896,
        "flag": "https://flagcdn.com/w320/cz.png",
        "currency": "Czech koruna"
    },
    {
        "name": "New Caledonia",
        "capital": "Nouméa",
        "languages": [
            "French"
        ],
        "population": 271960,
        "flag": "https://flagcdn.com/w320/nc.png",
        "currency": "CFP franc"
    },
    {
        "name": "Vanuatu",
        "capital": "Port Vila",
        "languages": [
            "Bislama",
            "English",
            "French"
        ],
        "population": 307150,
        "flag": "https://flagcdn.com/w320/vu.png",
        "currency": "Vanuatu vatu"
    },
    {
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "capital": "Jamestown",
        "languages": [
            "English"
        ],
        "population": 53192,
        "flag": "https://flagcdn.com/w320/sh.png",
        "currency": "Pound sterling"
    },
    {
        "name": "Togo",
        "capital": "Lomé",
        "languages": [
            "French"
        ],
        "population": 8278737,
        "flag": "https://flagcdn.com/w320/tg.png",
        "currency": "West African CFA franc"
    },
    {
        "name": "British Virgin Islands",
        "capital": "Road Town",
        "languages": [
            "English"
        ],
        "population": 30237,
        "flag": "https://flagcdn.com/w320/vg.png",
        "currency": "United States dollar"
    },
    {
        "name": "Kenya",
        "capital": "Nairobi",
        "languages": [
            "English",
            "Swahili"
        ],
        "population": 53771300,
        "flag": "https://flagcdn.com/w320/ke.png",
        "currency": "Kenyan shilling"
    },
    {
        "name": "Niue",
        "capital": "Alofi",
        "languages": [
            "English",
            "Niuean"
        ],
        "population": 1470,
        "flag": "https://flagcdn.com/w320/nu.png",
        "currency": "New Zealand dollar"
    },
    {
        "name": "Heard Island and McDonald Islands",
        "capital": "Nu există capitală",
        "languages": [
            "English"
        ],
        "population": 0,
        "flag": "https://flagcdn.com/w320/hm.png",
        "currency": "Nu există monedă"
    },
    {
        "name": "Rwanda",
        "capital": "Kigali",
        "languages": [
            "English",
            "French",
            "Kinyarwanda"
        ],
        "population": 12952209,
        "flag": "https://flagcdn.com/w320/rw.png",
        "currency": "Rwandan franc"
    },
    {
        "name": "Estonia",
        "capital": "Tallinn",
        "languages": [
            "Estonian"
        ],
        "population": 1331057,
        "flag": "https://flagcdn.com/w320/ee.png",
        "currency": "Euro"
    },
    {
        "name": "Romania",
        "capital": "Bucharest",
        "languages": [
            "Romanian"
        ],
        "population": 19286123,
        "flag": "https://flagcdn.com/w320/ro.png",
        "currency": "Romanian leu"
    },
    {
        "name": "Trinidad and Tobago",
        "capital": "Port of Spain",
        "languages": [
            "English"
        ],
        "population": 1399491,
        "flag": "https://flagcdn.com/w320/tt.png",
        "currency": "Trinidad and Tobago dollar"
    },
    {
        "name": "Guyana",
        "capital": "Georgetown",
        "languages": [
            "English"
        ],
        "population": 786559,
        "flag": "https://flagcdn.com/w320/gy.png",
        "currency": "Guyanese dollar"
    },
    {
        "name": "Timor-Leste",
        "capital": "Dili",
        "languages": [
            "Portuguese",
            "Tetum"
        ],
        "population": 1318442,
        "flag": "https://flagcdn.com/w320/tl.png",
        "currency": "United States dollar"
    },
    {
        "name": "Vietnam",
        "capital": "Hanoi",
        "languages": [
            "Vietnamese"
        ],
        "population": 97338583,
        "flag": "https://flagcdn.com/w320/vn.png",
        "currency": "Vietnamese đồng"
    },
    {
        "name": "Uruguay",
        "capital": "Montevideo",
        "languages": [
            "Spanish"
        ],
        "population": 3473727,
        "flag": "https://flagcdn.com/w320/uy.png",
        "currency": "Uruguayan peso"
    },
    {
        "name": "Vatican City",
        "capital": "Vatican City",
        "languages": [
            "Italian",
            "Latin"
        ],
        "population": 451,
        "flag": "https://flagcdn.com/w320/va.png",
        "currency": "Euro"
    },
    {
        "name": "Hong Kong",
        "capital": "City of Victoria",
        "languages": [
            "English",
            "Chinese"
        ],
        "population": 7500700,
        "flag": "https://flagcdn.com/w320/hk.png",
        "currency": "Hong Kong dollar"
    },
    {
        "name": "Austria",
        "capital": "Vienna",
        "languages": [
            "German"
        ],
        "population": 8917205,
        "flag": "https://flagcdn.com/w320/at.png",
        "currency": "Euro"
    },
    {
        "name": "Antigua and Barbuda",
        "capital": "Saint John's",
        "languages": [
            "English"
        ],
        "population": 97928,
        "flag": "https://flagcdn.com/w320/ag.png",
        "currency": "Eastern Caribbean dollar"
    },
    {
        "name": "Turkmenistan",
        "capital": "Ashgabat",
        "languages": [
            "Russian",
            "Turkmen"
        ],
        "population": 6031187,
        "flag": "https://flagcdn.com/w320/tm.png",
        "currency": "Turkmenistan manat"
    },
    {
        "name": "Mozambique",
        "capital": "Maputo",
        "languages": [
            "Portuguese"
        ],
        "population": 31255435,
        "flag": "https://flagcdn.com/w320/mz.png",
        "currency": "Mozambican metical"
    },
    {
        "name": "Panama",
        "capital": "Panama City",
        "languages": [
            "Spanish"
        ],
        "population": 4314768,
        "flag": "https://flagcdn.com/w320/pa.png",
        "currency": "Panamanian balboa"
    },
    {
        "name": "Micronesia",
        "capital": "Palikir",
        "languages": [
            "English"
        ],
        "population": 115021,
        "flag": "https://flagcdn.com/w320/fm.png",
        "currency": "United States dollar"
    },
    {
        "name": "Ireland",
        "capital": "Dublin",
        "languages": [
            "English",
            "Irish"
        ],
        "population": 4994724,
        "flag": "https://flagcdn.com/w320/ie.png",
        "currency": "Euro"
    },
    {
        "name": "Curaçao",
        "capital": "Willemstad",
        "languages": [
            "English",
            "Dutch",
            "Papiamento"
        ],
        "population": 155014,
        "flag": "https://flagcdn.com/w320/cw.png",
        "currency": "Netherlands Antillean guilder"
    },
    {
        "name": "French Guiana",
        "capital": "Cayenne",
        "languages": [
            "French"
        ],
        "population": 254541,
        "flag": "https://flagcdn.com/w320/gf.png",
        "currency": "Euro"
    },
    {
        "name": "Norway",
        "capital": "Oslo",
        "languages": [
            "Norwegian Nynorsk",
            "Norwegian Bokmål",
            "Sami"
        ],
        "population": 5379475,
        "flag": "https://flagcdn.com/w320/no.png",
        "currency": "Norwegian krone"
    },
    {
        "name": "Åland Islands",
        "capital": "Mariehamn",
        "languages": [
            "Swedish"
        ],
        "population": 29458,
        "flag": "https://flagcdn.com/w320/ax.png",
        "currency": "Euro"
    },
    {
        "name": "Central African Republic",
        "capital": "Bangui",
        "languages": [
            "French",
            "Sango"
        ],
        "population": 4829764,
        "flag": "https://flagcdn.com/w320/cf.png",
        "currency": "Central African CFA franc"
    },
    {
        "name": "Burkina Faso",
        "capital": "Ouagadougou",
        "languages": [
            "French"
        ],
        "population": 20903278,
        "flag": "https://flagcdn.com/w320/bf.png",
        "currency": "West African CFA franc"
    },
    {
        "name": "Eritrea",
        "capital": "Asmara",
        "languages": [
            "Arabic",
            "English",
            "Tigrinya"
        ],
        "population": 5352000,
        "flag": "https://flagcdn.com/w320/er.png",
        "currency": "Eritrean nakfa"
    },
    {
        "name": "Tanzania",
        "capital": "Dodoma",
        "languages": [
            "English",
            "Swahili"
        ],
        "population": 59734213,
        "flag": "https://flagcdn.com/w320/tz.png",
        "currency": "Tanzanian shilling"
    },
    {
        "name": "South Korea",
        "capital": "Seoul",
        "languages": [
            "Korean"
        ],
        "population": 51780579,
        "flag": "https://flagcdn.com/w320/kr.png",
        "currency": "South Korean won"
    },
    {
        "name": "Jordan",
        "capital": "Amman",
        "languages": [
            "Arabic"
        ],
        "population": 10203140,
        "flag": "https://flagcdn.com/w320/jo.png",
        "currency": "Jordanian dinar"
    },
    {
        "name": "Mauritania",
        "capital": "Nouakchott",
        "languages": [
            "Arabic"
        ],
        "population": 4649660,
        "flag": "https://flagcdn.com/w320/mr.png",
        "currency": "Mauritanian ouguiya"
    },
    {
        "name": "Lithuania",
        "capital": "Vilnius",
        "languages": [
            "Lithuanian"
        ],
        "population": 2794700,
        "flag": "https://flagcdn.com/w320/lt.png",
        "currency": "Euro"
    },
    {
        "name": "United States Minor Outlying Islands",
        "capital": "Washington DC",
        "languages": [
            "English"
        ],
        "population": 300,
        "flag": "https://flagcdn.com/w320/um.png",
        "currency": "United States dollar"
    },
    {
        "name": "Slovakia",
        "capital": "Bratislava",
        "languages": [
            "Slovak"
        ],
        "population": 5458827,
        "flag": "https://flagcdn.com/w320/sk.png",
        "currency": "Euro"
    },
    {
        "name": "Angola",
        "capital": "Luanda",
        "languages": [
            "Portuguese"
        ],
        "population": 32866268,
        "flag": "https://flagcdn.com/w320/ao.png",
        "currency": "Angolan kwanza"
    },
    {
        "name": "Kazakhstan",
        "capital": "Nur-Sultan",
        "languages": [
            "Kazakh",
            "Russian"
        ],
        "population": 18754440,
        "flag": "https://flagcdn.com/w320/kz.png",
        "currency": "Kazakhstani tenge"
    },
    {
        "name": "Moldova",
        "capital": "Chișinău",
        "languages": [
            "Romanian"
        ],
        "population": 2617820,
        "flag": "https://flagcdn.com/w320/md.png",
        "currency": "Moldovan leu"
    },
    {
        "name": "Mali",
        "capital": "Bamako",
        "languages": [
            "French"
        ],
        "population": 20250834,
        "flag": "https://flagcdn.com/w320/ml.png",
        "currency": "West African CFA franc"
    },
    {
        "name": "Falkland Islands",
        "capital": "Stanley",
        "languages": [
            "English"
        ],
        "population": 2563,
        "flag": "https://flagcdn.com/w320/fk.png",
        "currency": "Falkland Islands pound"
    },
    {
        "name": "Armenia",
        "capital": "Yerevan",
        "languages": [
            "Armenian"
        ],
        "population": 2963234,
        "flag": "https://flagcdn.com/w320/am.png",
        "currency": "Armenian dram"
    },
    {
        "name": "Samoa",
        "capital": "Apia",
        "languages": [
            "English",
            "Samoan"
        ],
        "population": 198410,
        "flag": "https://flagcdn.com/w320/ws.png",
        "currency": "Samoan tālā"
    },
    {
        "name": "Jersey",
        "capital": "Saint Helier",
        "languages": [
            "English",
            "French",
            "Jèrriais"
        ],
        "population": 100800,
        "flag": "https://flagcdn.com/w320/je.png",
        "currency": "British pound"
    },
    {
        "name": "Japan",
        "capital": "Tokyo",
        "languages": [
            "Japanese"
        ],
        "population": 125836021,
        "flag": "https://flagcdn.com/w320/jp.png",
        "currency": "Japanese yen"
    },
    {
        "name": "Bolivia",
        "capital": "Sucre",
        "languages": [
            "Aymara",
            "Guaraní",
            "Quechua",
            "Spanish"
        ],
        "population": 11673029,
        "flag": "https://flagcdn.com/w320/bo.png",
        "currency": "Bolivian boliviano"
    },
    {
        "name": "Chile",
        "capital": "Santiago",
        "languages": [
            "Spanish"
        ],
        "population": 19116209,
        "flag": "https://flagcdn.com/w320/cl.png",
        "currency": "Chilean peso"
    },
    {
        "name": "United States",
        "capital": "Washington, D.C.",
        "languages": [
            "English"
        ],
        "population": 329484123,
        "flag": "https://flagcdn.com/w320/us.png",
        "currency": "United States dollar"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "capital": "Kingstown",
        "languages": [
            "English"
        ],
        "population": 110947,
        "flag": "https://flagcdn.com/w320/vc.png",
        "currency": "Eastern Caribbean dollar"
    },
    {
        "name": "Bermuda",
        "capital": "Hamilton",
        "languages": [
            "English"
        ],
        "population": 63903,
        "flag": "https://flagcdn.com/w320/bm.png",
        "currency": "Bermudian dollar"
    },
    {
        "name": "Seychelles",
        "capital": "Victoria",
        "languages": [
            "Seychellois Creole",
            "English",
            "French"
        ],
        "population": 98462,
        "flag": "https://flagcdn.com/w320/sc.png",
        "currency": "Seychellois rupee"
    },
    {
        "name": "British Indian Ocean Territory",
        "capital": "Diego Garcia",
        "languages": [
            "English"
        ],
        "population": 3000,
        "flag": "https://flagcdn.com/w320/io.png",
        "currency": "United States dollar"
    },
    {
        "name": "Guatemala",
        "capital": "Guatemala City",
        "languages": [
            "Spanish"
        ],
        "population": 16858333,
        "flag": "https://flagcdn.com/w320/gt.png",
        "currency": "Guatemalan quetzal"
    },
    {
        "name": "Ecuador",
        "capital": "Quito",
        "languages": [
            "Spanish"
        ],
        "population": 17643060,
        "flag": "https://flagcdn.com/w320/ec.png",
        "currency": "United States dollar"
    },
    {
        "name": "Martinique",
        "capital": "Fort-de-France",
        "languages": [
            "French"
        ],
        "population": 378243,
        "flag": "https://flagcdn.com/w320/mq.png",
        "currency": "Euro"
    },
    {
        "name": "Tajikistan",
        "capital": "Dushanbe",
        "languages": [
            "Russian",
            "Tajik"
        ],
        "population": 9537642,
        "flag": "https://flagcdn.com/w320/tj.png",
        "currency": "Tajikistani somoni"
    },
    {
        "name": "Malta",
        "capital": "Valletta",
        "languages": [
            "English",
            "Maltese"
        ],
        "population": 525285,
        "flag": "https://flagcdn.com/w320/mt.png",
        "currency": "Euro"
    },
    {
        "name": "Gambia",
        "capital": "Banjul",
        "languages": [
            "English"
        ],
        "population": 2416664,
        "flag": "https://flagcdn.com/w320/gm.png",
        "currency": "dalasi"
    },
    {
        "name": "Nigeria",
        "capital": "Abuja",
        "languages": [
            "English"
        ],
        "population": 206139587,
        "flag": "https://flagcdn.com/w320/ng.png",
        "currency": "Nigerian naira"
    },
    {
        "name": "Bahamas",
        "capital": "Nassau",
        "languages": [
            "English"
        ],
        "population": 393248,
        "flag": "https://flagcdn.com/w320/bs.png",
        "currency": "Bahamian dollar"
    },
    {
        "name": "Kosovo",
        "capital": "Pristina",
        "languages": [
            "Albanian",
            "Serbian"
        ],
        "population": 1775378,
        "flag": "https://flagcdn.com/w320/xk.png",
        "currency": "Euro"
    },
    {
        "name": "Kuwait",
        "capital": "Kuwait City",
        "languages": [
            "Arabic"
        ],
        "population": 4270563,
        "flag": "https://flagcdn.com/w320/kw.png",
        "currency": "Kuwaiti dinar"
    },
    {
        "name": "Maldives",
        "capital": "Malé",
        "languages": [
            "Maldivian"
        ],
        "population": 540542,
        "flag": "https://flagcdn.com/w320/mv.png",
        "currency": "Maldivian rufiyaa"
    },
    {
        "name": "South Sudan",
        "capital": "Juba",
        "languages": [
            "English"
        ],
        "population": 11193729,
        "flag": "https://flagcdn.com/w320/ss.png",
        "currency": "South Sudanese pound"
    },
    {
        "name": "Iran",
        "capital": "Tehran",
        "languages": [
            "Persian (Farsi)"
        ],
        "population": 83992953,
        "flag": "https://flagcdn.com/w320/ir.png",
        "currency": "Iranian rial"
    },
    {
        "name": "Albania",
        "capital": "Tirana",
        "languages": [
            "Albanian"
        ],
        "population": 2837743,
        "flag": "https://flagcdn.com/w320/al.png",
        "currency": "Albanian lek"
    },
    {
        "name": "Brazil",
        "capital": "Brasília",
        "languages": [
            "Portuguese"
        ],
        "population": 212559409,
        "flag": "https://flagcdn.com/w320/br.png",
        "currency": "Brazilian real"
    },
    {
        "name": "Serbia",
        "capital": "Belgrade",
        "languages": [
            "Serbian"
        ],
        "population": 6908224,
        "flag": "https://flagcdn.com/w320/rs.png",
        "currency": "Serbian dinar"
    },
    {
        "name": "Belize",
        "capital": "Belmopan",
        "languages": [
            "Belizean Creole",
            "English",
            "Spanish"
        ],
        "population": 397621,
        "flag": "https://flagcdn.com/w320/bz.png",
        "currency": "Belize dollar"
    },
    {
        "name": "Myanmar",
        "capital": "Naypyidaw",
        "languages": [
            "Burmese"
        ],
        "population": 54409794,
        "flag": "https://flagcdn.com/w320/mm.png",
        "currency": "Burmese kyat"
    },
    {
        "name": "Bhutan",
        "capital": "Thimphu",
        "languages": [
            "Dzongkha"
        ],
        "population": 771612,
        "flag": "https://flagcdn.com/w320/bt.png",
        "currency": "Bhutanese ngultrum"
    },
    {
        "name": "Venezuela",
        "capital": "Caracas",
        "languages": [
            "Spanish"
        ],
        "population": 28435943,
        "flag": "https://flagcdn.com/w320/ve.png",
        "currency": "Venezuelan bolívar soberano"
    },
    {
        "name": "Liberia",
        "capital": "Monrovia",
        "languages": [
            "English"
        ],
        "population": 5057677,
        "flag": "https://flagcdn.com/w320/lr.png",
        "currency": "Liberian dollar"
    },
    {
        "name": "Jamaica",
        "capital": "Kingston",
        "languages": [
            "English",
            "Jamaican Patois"
        ],
        "population": 2961161,
        "flag": "https://flagcdn.com/w320/jm.png",
        "currency": "Jamaican dollar"
    },
    {
        "name": "Poland",
        "capital": "Warsaw",
        "languages": [
            "Polish"
        ],
        "population": 37950802,
        "flag": "https://flagcdn.com/w320/pl.png",
        "currency": "Polish złoty"
    },
    {
        "name": "Cayman Islands",
        "capital": "George Town",
        "languages": [
            "English"
        ],
        "population": 65720,
        "flag": "https://flagcdn.com/w320/ky.png",
        "currency": "Cayman Islands dollar"
    },
    {
        "name": "Brunei",
        "capital": "Bandar Seri Begawan",
        "languages": [
            "Malay"
        ],
        "population": 437483,
        "flag": "https://flagcdn.com/w320/bn.png",
        "currency": "Brunei dollar"
    },
    {
        "name": "Comoros",
        "capital": "Moroni",
        "languages": [
            "Arabic",
            "French",
            "Comorian"
        ],
        "population": 869595,
        "flag": "https://flagcdn.com/w320/km.png",
        "currency": "Comorian franc"
    },
    {
        "name": "Guam",
        "capital": "Hagåtña",
        "languages": [
            "Chamorro",
            "English",
            "Spanish"
        ],
        "population": 168783,
        "flag": "https://flagcdn.com/w320/gu.png",
        "currency": "United States dollar"
    },
    {
        "name": "Tonga",
        "capital": "Nuku'alofa",
        "languages": [
            "English",
            "Tongan"
        ],
        "population": 105697,
        "flag": "https://flagcdn.com/w320/to.png",
        "currency": "Tongan paʻanga"
    },
    {
        "name": "Kiribati",
        "capital": "South Tarawa",
        "languages": [
            "English",
            "Gilbertese"
        ],
        "population": 119446,
        "flag": "https://flagcdn.com/w320/ki.png",
        "currency": "Australian dollar"
    },
    {
        "name": "Ghana",
        "capital": "Accra",
        "languages": [
            "English"
        ],
        "population": 31072945,
        "flag": "https://flagcdn.com/w320/gh.png",
        "currency": "Ghanaian cedi"
    },
    {
        "name": "Chad",
        "capital": "N'Djamena",
        "languages": [
            "Arabic",
            "French"
        ],
        "population": 16425859,
        "flag": "https://flagcdn.com/w320/td.png",
        "currency": "Central African CFA franc"
    },
    {
        "name": "Zimbabwe",
        "capital": "Harare",
        "languages": [
            "Chibarwe",
            "English",
            "Kalanga",
            "Khoisan",
            "Ndau",
            "Northern Ndebele",
            "Chewa",
            "Shona",
            "Sotho",
            "Tonga",
            "Tswana",
            "Tsonga",
            "Venda",
            "Xhosa",
            "Zimbabwean Sign Language"
        ],
        "population": 14862927,
        "flag": "https://flagcdn.com/w320/zw.png",
        "currency": "Zimbabwean dollar"
    },
    {
        "name": "Saint Martin",
        "capital": "Marigot",
        "languages": [
            "French"
        ],
        "population": 38659,
        "flag": "https://flagcdn.com/w320/mf.png",
        "currency": "Euro"
    },
    {
        "name": "Mongolia",
        "capital": "Ulan Bator",
        "languages": [
            "Mongolian"
        ],
        "population": 3278292,
        "flag": "https://flagcdn.com/w320/mn.png",
        "currency": "Mongolian tögrög"
    },
    {
        "name": "Portugal",
        "capital": "Lisbon",
        "languages": [
            "Portuguese"
        ],
        "population": 10305564,
        "flag": "https://flagcdn.com/w320/pt.png",
        "currency": "Euro"
    },
    {
        "name": "American Samoa",
        "capital": "Pago Pago",
        "languages": [
            "English",
            "Samoan"
        ],
        "population": 55197,
        "flag": "https://flagcdn.com/w320/as.png",
        "currency": "United States dollar"
    },
    {
        "name": "Republic of the Congo",
        "capital": "Brazzaville",
        "languages": [
            "French",
            "Kikongo",
            "Lingala"
        ],
        "population": 5657000,
        "flag": "https://flagcdn.com/w320/cg.png",
        "currency": "Central African CFA franc"
    },
    {
        "name": "Belgium",
        "capital": "Brussels",
        "languages": [
            "German",
            "French",
            "Dutch"
        ],
        "population": 11555997,
        "flag": "https://flagcdn.com/w320/be.png",
        "currency": "Euro"
    },
    {
        "name": "Israel",
        "capital": "Jerusalem",
        "languages": [
            "Arabic",
            "Hebrew"
        ],
        "population": 9216900,
        "flag": "https://flagcdn.com/w320/il.png",
        "currency": "Israeli new shekel"
    },
    {
        "name": "New Zealand",
        "capital": "Wellington",
        "languages": [
            "English",
            "Māori",
            "New Zealand Sign Language"
        ],
        "population": 5084300,
        "flag": "https://flagcdn.com/w320/nz.png",
        "currency": "New Zealand dollar"
    },
    {
        "name": "Nicaragua",
        "capital": "Managua",
        "languages": [
            "Spanish"
        ],
        "population": 6624554,
        "flag": "https://flagcdn.com/w320/ni.png",
        "currency": "Nicaraguan córdoba"
    },
    {
        "name": "Anguilla",
        "capital": "The Valley",
        "languages": [
            "English"
        ],
        "population": 13452,
        "flag": "https://flagcdn.com/w320/ai.png",
        "currency": "Eastern Caribbean dollar"
    }
];
// const countriesData = [
//     {
//         name: 'Afghanistan',
//         capital: 'Kabul',
//         languages: ['Pashto', 'Uzbek', 'Turkmen'],
//         population: 38928346,
//         flag: 'https://flagcdn.com/w320/af.png',
//         currency: 'Afghan afghani'
//     },
//     {
//         name: 'Albania',
//         capital: 'Tirana',
//         languages: ['Albanian'],
//         population: 2877797,
//         flag: 'https://flagcdn.com/w320/al.png',
//         currency: 'Albanian lek'
//     },
//     {
//         name: 'Algeria',
//         capital: 'Algiers',
//         languages: ['Arabic'],
//         population: 43851044,
//         flag: 'https://flagcdn.com/w320/dz.png',
//         currency: 'Algerian dinar'
//     },
//     {
//         name: 'Andorra',
//         capital: 'Andorra la Vella',
//         languages: ['Catalan'],
//         population: 77265,
//         flag: 'https://flagcdn.com/w320/ad.png',
//         currency: 'Euro'
//     },
//     {
//         name: 'Angola',
//         capital: 'Luanda',
//         languages: ['Portuguese'],
//         population: 32866272,
//         flag: 'https://flagcdn.com/w320/ao.png',
//         currency: 'Angolan kwanza'
//     },
//     {
//         name: 'Argentina',
//         capital: 'Buenos Aires',
//         languages: ['Spanish'],
//         population: 45195774,
//         flag: 'https://flagcdn.com/w320/ar.png',
//         currency: 'Argentine peso'
//     },
//     {
//         name: 'Armenia',
//         capital: 'Yerevan',
//         languages: ['Armenian'],
//         population: 2963243,
//         flag: 'https://flagcdn.com/w320/am.png',
//         currency: 'Armenian dram'
//     },
//     {
//         name: 'Australia',
//         capital: 'Canberra',
//         languages: ['English'],
//         population: 25499884,
//         flag: 'https://flagcdn.com/w320/au.png',
//         currency: 'Australian dollar'
//     },
//     {
//         name: 'Austria',
//         capital: 'Vienna',
//         languages: ['German'],
//         population: 9006398,
//         flag: 'https://flagcdn.com/w320/at.png',
//         currency: 'Euro'
//     },
//     {
//         name: 'Azerbaijan',
//         capital: 'Baku',
//         languages: ['Azerbaijani'],
//         population: 10139177,
//         flag: 'https://flagcdn.com/w320/az.png',
//         currency: 'Azerbaijani manat'
//     }
// ];
