// Quran Database for Islamic Ruqyah/Healing
// Includes Surah Al-Fatiha, Al-Baqarah (key verses), Al-Mulk, Al-Ikhlas, Al-Falaq, An-Nas

export const AUDIO_BASE_URL = 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/';

export const ruqyahInfo = {
  title: 'Islamic Ruqyah',
  description: 'Ruqyah is the practice of reciting Quran and supplications to seek healing and protection from Allah. The Prophet Muhammad (peace be upon him) used to perform Ruqyah and encouraged others to do so.',
  guidelines: [
    'Perform Wudu (ablution) before reciting',
    'Recite with sincerity and faith in Allah',
    'Understand that healing comes only from Allah',
    'Recite in a calm and focused state',
    'Blow gently over yourself or water after reciting'
  ]
};

export const surahs = [
  {
    id: 1,
    name: 'Al-Fatiha',
    arabicName: 'الفاتحة',
    englishName: 'The Opening',
    totalVerses: 7,
    revelation: 'Meccan',
    description: 'The greatest Surah in the Quran. Recited in every unit of prayer. Known as "The Healer" (Ash-Shifa) and "The Mother of the Quran" (Umm al-Quran).',
    benefits: [
      'Complete cure for diseases',
      'Protection from evil',
      'Essential for every prayer',
      'Opens the doors of mercy'
    ],
    verses: [
      {
        number: 1,
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        transliteration: 'Bismillahir Rahmanir Raheem',
        translation: 'In the name of Allah, the Most Gracious, the Most Merciful',
        audioId: 1
      },
      {
        number: 2,
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        transliteration: 'Alhamdu lillahi Rabbil aalameen',
        translation: 'All praise is due to Allah, Lord of the worlds',
        audioId: 2
      },
      {
        number: 3,
        arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
        transliteration: 'Ar-Rahmanir-Raheem',
        translation: 'The Most Gracious, the Most Merciful',
        audioId: 3
      },
      {
        number: 4,
        arabic: 'مَالِكِ يَوْمِ الدِّينِ',
        transliteration: 'Maliki Yawmid-Deen',
        translation: 'Master of the Day of Judgment',
        audioId: 4
      },
      {
        number: 5,
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        transliteration: 'Iyyaka nabudu wa iyyaka nastaeen',
        translation: 'You alone we worship, and You alone we ask for help',
        audioId: 5
      },
      {
        number: 6,
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        transliteration: 'Ihdinas-Siratal-Mustaqeem',
        translation: 'Guide us to the straight path',
        audioId: 6
      },
      {
        number: 7,
        arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        transliteration: 'Siratal-lazeena anamta alaihim ghairil-maghdubi alaihim wa lad-dalleen',
        translation: 'The path of those upon whom You have bestowed favor, not of those who have earned anger or of those who are astray',
        audioId: 7
      }
    ]
  },
  {
    id: 2,
    name: 'Al-Baqarah',
    arabicName: 'البقرة',
    englishName: 'The Cow',
    totalVerses: 286,
    revelation: 'Medinan',
    description: 'The longest Surah in the Quran. Contains Ayat al-Kursi (The Throne Verse) which is the greatest verse in the Quran, and the last two verses which are powerful for protection.',
    benefits: [
      'Drives away Shaytan from the home',
      'Protection from evil eye and magic',
      'Ayat al-Kursi protects until morning/evening',
      'The last two verses are sufficient protection for the night'
    ],
    sections: [
      {
        name: 'Ayat al-Kursi',
        arabicName: 'آية الكرسي',
        description: 'The Throne Verse - the greatest verse in the Quran. Recite for protection morning and evening.',
        startVerse: 255,
        endVerse: 255
      },
      {
        name: 'Last Two Verses',
        arabicName: 'خواتيم سورة البقرة',
        description: 'The Prophet (ﷺ) said: "Whoever recites the last two verses of Surah Al-Baqarah at night, they will suffice him."',
        startVerse: 285,
        endVerse: 286
      }
    ],
    verses: [
      {
        number: 255,
        name: 'Ayat al-Kursi',
        arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
        transliteration: 'Allahu la ilaha illa Huwal-Hayyul-Qayyum. La ta\'khuzuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man zal-lazee yashfa\'u \'indahu illa bi-iznih. Ya\'lamu ma baina aideehim wa ma khalfahum. Wa la yuheetoona bi shai\'im-min \'ilmihi illa bima sha\'a. Wasi\'a kursiyyuhus-samawati wal-ard. Wa la ya\'uduhu hifzuhuma. Wa Huwal-\'Aliyyul-\'Azeem.',
        translation: 'Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.',
        audioId: 262
      },
      {
        number: 285,
        arabic: 'آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ',
        transliteration: 'Amanar-Rasulu bima unzila ilaihi mir-Rabbihi wal-mu\'minun. Kullun amana billahi wa mala\'ikatihi wa kutubihi wa rusulih. La nufarriqu baina ahadim-mir-rusulih. Wa qalu sami\'na wa ata\'na ghufranaka Rabbana wa ilaikal-masir.',
        translation: 'The Messenger has believed in what was revealed to him from his Lord, and so have the believers. All of them have believed in Allah and His angels and His books and His messengers, saying, "We make no distinction between any of His messengers." And they say, "We hear and we obey. Grant us Your forgiveness, our Lord, and to You is the final destination."',
        audioId: 292
      },
      {
        number: 286,
        arabic: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
        transliteration: 'La yukallifullahu nafsan illa wus\'aha. Laha ma kasabat wa \'alaiha mak-tasabat. Rabbana la tu\'akhizna in-nasina aw akhta\'na. Rabbana wa la tahmil \'alaina isran kama hamaltahu \'alal-lazeena min qablina. Rabbana wa la tuhammilna ma la taqata lana bih. Wa\'fu \'anna waghfir lana warhamna. Anta Maulana fansurna \'alal-qawmil-kafireen.',
        translation: 'Allah does not burden a soul beyond that it can bear. It will have the consequence of what good it has gained, and it will bear the consequence of what evil it has earned. "Our Lord, do not impose blame upon us if we forget or make a mistake. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people."',
        audioId: 293
      }
    ]
  },
  {
    id: 67,
    name: 'Al-Mulk',
    arabicName: 'الملك',
    englishName: 'The Sovereignty',
    totalVerses: 30,
    revelation: 'Meccan',
    description: 'Also known as "Tabarak". The Prophet (ﷺ) said: "There is a surah in the Quran of thirty verses which intercedes for a man until he is forgiven."',
    benefits: [
      'Intercedes for its reciter on Day of Judgment',
      'Protection from punishment of the grave',
      'Recommended to recite before sleep',
      'Shield against torment'
    ],
    verses: [
      { number: 1, arabic: 'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ', transliteration: 'Tabarakal-lazee biyadihil-mulku wa Huwa \'ala kulli shay\'in Qadeer', translation: 'Blessed is He in whose hand is dominion, and He is over all things competent', audioId: 5242 },
      { number: 2, arabic: 'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ', transliteration: 'Allazee khalaqal-mawta wal-hayata liyabluwakum ayyukum ahsanu \'amala; wa Huwal-\'Azeezul-Ghafoor', translation: 'He who created death and life to test you as to which of you is best in deed - and He is the Exalted in Might, the Forgiving', audioId: 5243 },
      { number: 3, arabic: 'الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِنْ تَفَاوُتٍ ۖ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِنْ فُطُورٍ', transliteration: 'Allazee khalaqa sab\'a samaawaatin tibaaqam-maa taraa fee khalqir-Rahmaani min tafaawut; farji\'il-basara hal taraa min futoor', translation: 'He who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency. So return your vision; do you see any breaks?', audioId: 5244 },
      { number: 4, arabic: 'ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنْقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا وَهُوَ حَسِيرٌ', transliteration: 'Summar-ji\'il-basara karrataini yanqalib ilaikal-basaru khaasi\'anw-wa huwa haseer', translation: 'Then return your vision twice again. Your vision will return to you humbled while it is fatigued', audioId: 5245 },
      { number: 5, arabic: 'وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِلشَّيَاطِينِ ۖ وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ', transliteration: 'Wa laqad zaiyannas-samaa\'ad-dunyaa bimasaa-beeha wa ja\'alnaahaa rujoomal-lish-Shayaateeni wa a\'tadnaa lahum \'azaabas-sa\'eer', translation: 'And We have certainly beautified the nearest heaven with stars and have made them what is thrown at the devils and have prepared for them the punishment of the Blaze', audioId: 5246 },
      { number: 6, arabic: 'وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ ۖ وَبِئْسَ الْمَصِيرُ', transliteration: 'Wa lillazeena kafaroo bi Rabbihim \'azaabu Jahannama wa bi\'sal-maseer', translation: 'And for those who disbelieved in their Lord is the punishment of Hell, and wretched is the destination', audioId: 5247 },
      { number: 7, arabic: 'إِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا وَهِيَ تَفُورُ', transliteration: 'Izaa ulqoo feehaa sami\'oo lahaa shaheeqanw-wa hiya tafoor', translation: 'When they are thrown into it, they hear from it a dreadful inhaling while it boils up', audioId: 5248 },
      { number: 8, arabic: 'تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ ۖ كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ سَأَلَهُمْ خَزَنَتُهَا أَلَمْ يَأْتِكُمْ نَذِيرٌ', transliteration: 'Takaadu tamayyazu minal-ghaizi kullamaaa ulqiya feehaa fawjun sa\'alahum khazanatuhaa alam ya\'tikum nazeer', translation: 'It almost bursts with rage. Every time a company is thrown into it, its keepers ask them, "Did there not come to you a warner?"', audioId: 5249 },
      { number: 9, arabic: 'قَالُوا بَلَىٰ قَدْ جَاءَنَا نَذِيرٌ فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ اللَّهُ مِنْ شَيْءٍ إِنْ أَنْتُمْ إِلَّا فِي ضَلَالٍ كَبِيرٍ', transliteration: 'Qaaloo balaa qad jaaa\'anaa nazeerun fakazzabnaa wa qulnaa maa nazzalal-laahu min shai\'in in antum illaa fee dalaalin kabeer', translation: 'They will say, "Yes, a warner had come to us, but we denied and said, \'Allah has not sent down anything. You are not but in great error.\'"', audioId: 5250 },
      { number: 10, arabic: 'وَقَالُوا لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ مَا كُنَّا فِي أَصْحَابِ السَّعِيرِ', transliteration: 'Wa qaaloo law kunnaa nasma\'u aw na\'qilu maa kunnaa feee as-haabis-sa\'eer', translation: 'And they will say, "If only we had been listening or reasoning, we would not be among the companions of the Blaze"', audioId: 5251 },
      { number: 11, arabic: 'فَاعْتَرَفُوا بِذَنْبِهِمْ فَسُحْقًا لِأَصْحَابِ السَّعِيرِ', transliteration: 'Fa\'tarafoo bizambihim fasuhqal-li as-haabis-sa\'eer', translation: 'And they will admit their sin, so it is alienation for the companions of the Blaze', audioId: 5252 },
      { number: 12, arabic: 'إِنَّ الَّذِينَ يَخْشَوْنَ رَبَّهُمْ بِالْغَيْبِ لَهُمْ مَغْفِرَةٌ وَأَجْرٌ كَبِيرٌ', transliteration: 'Innal-lazeena yakhshawna Rabbahum bilghaibi lahum maghfiratunw-wa ajrun kabeer', translation: 'Indeed, those who fear their Lord unseen will have forgiveness and great reward', audioId: 5253 },
      { number: 13, arabic: 'وَأَسِرُّوا قَوْلَكُمْ أَوِ اجْهَرُوا بِهِ ۖ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ', transliteration: 'Wa asirroo qawlakum awijharoo bih; innahoo \'Aleemum bizaatis-sudoor', translation: 'And conceal your speech or publicize it; indeed, He is Knowing of that within the breasts', audioId: 5254 },
      { number: 14, arabic: 'أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ', transliteration: 'Alaa ya\'lamu man khalaq; wa Huwal-Lateeful-Khabeer', translation: 'Does He who created not know, while He is the Subtle, the Acquainted?', audioId: 5255 },
      { number: 15, arabic: 'هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِنْ رِزْقِهِ ۖ وَإِلَيْهِ النُّشُورُ', transliteration: 'Huwal-lazee ja\'ala lakumul-arda zaloolan famshoo fee manaakibihaa wa kuloo mir-rizqih; wa ilaihin-nushoor', translation: 'It is He who made the earth tame for you - so walk among its slopes and eat of His provision - and to Him is the resurrection', audioId: 5256 },
      { number: 16, arabic: 'أَأَمِنْتُمْ مَنْ فِي السَّمَاءِ أَنْ يَخْسِفَ بِكُمُ الْأَرْضَ فَإِذَا هِيَ تَمُورُ', transliteration: 'A-amintum man fis-samaaa\'i ai-yakhsifa bikumul-arda fa-izaa hiya tamoor', translation: 'Do you feel secure that He who is above would not cause the earth to swallow you while it shakes?', audioId: 5257 },
      { number: 17, arabic: 'أَمْ أَمِنْتُمْ مَنْ فِي السَّمَاءِ أَنْ يُرْسِلَ عَلَيْكُمْ حَاصِبًا ۖ فَسَتَعْلَمُونَ كَيْفَ نَذِيرِ', transliteration: 'Am amintum man fis-samaaa\'i ai-yursila \'alaikum haasiban fasata\'lamoona kaifa nazeer', translation: 'Or do you feel secure that He who is above would not send against you a storm of stones? Then you would know how severe was My warning', audioId: 5258 },
      { number: 18, arabic: 'وَلَقَدْ كَذَّبَ الَّذِينَ مِنْ قَبْلِهِمْ فَكَيْفَ كَانَ نَكِيرِ', transliteration: 'Wa laqad kazzabal-lazeena min qablihim fakaifa kaana nakeer', translation: 'And already had those before them denied, and how terrible was My denouncement', audioId: 5259 },
      { number: 19, arabic: 'أَوَلَمْ يَرَوْا إِلَى الطَّيْرِ فَوْقَهُمْ صَافَّاتٍ وَيَقْبِضْنَ ۚ مَا يُمْسِكُهُنَّ إِلَّا الرَّحْمَٰنُ ۚ إِنَّهُ بِكُلِّ شَيْءٍ بَصِيرٌ', transliteration: 'Awalam yaraw ilat-tairi fawqahum saaaffaatinw-wa yaqbidn; maa yumsikuhunna illar-Rahmaan; innahoo bikulli shai\'im Baseer', translation: 'Do they not see the birds above them with wings outspread and sometimes folded? None holds them except the Most Merciful. Indeed He is, of all things, Seeing', audioId: 5260 },
      { number: 20, arabic: 'أَمَّنْ هَٰذَا الَّذِي هُوَ جُنْدٌ لَكُمْ يَنْصُرُكُمْ مِنْ دُونِ الرَّحْمَٰنِ ۚ إِنِ الْكَافِرُونَ إِلَّا فِي غُرُورٍ', transliteration: 'Amman haazal-lazee huwa jundul-lakum yansurukum min doonir-Rahmaan; inil-kaafiroona illaa fee ghuroor', translation: 'Or who is it that could be an army for you to aid you other than the Most Merciful? The disbelievers are not but in delusion', audioId: 5261 },
      { number: 21, arabic: 'أَمَّنْ هَٰذَا الَّذِي يَرْزُقُكُمْ إِنْ أَمْسَكَ رِزْقَهُ ۚ بَلْ لَجُّوا فِي عُتُوٍّ وَنُفُورٍ', transliteration: 'Amman haazal-lazee yarzuqukum in amsaka rizqah; bal-lajjoo fee \'utuwwinw-wa nufoor', translation: 'Or who is it that could provide for you if He withheld His provision? But they have persisted in insolence and aversion', audioId: 5262 },
      { number: 22, arabic: 'أَفَمَنْ يَمْشِي مُكِبًّا عَلَىٰ وَجْهِهِ أَهْدَىٰ أَمَّنْ يَمْشِي سَوِيًّا عَلَىٰ صِرَاطٍ مُسْتَقِيمٍ', transliteration: 'Afamany-yamshee mukibban \'alaa wajhiheee ahdaaa ammany-yamshee sawiyyan \'alaa Siratim-Mustaqeem', translation: 'Then is one who walks fallen on his face better guided or one who walks erect on a straight path?', audioId: 5263 },
      { number: 23, arabic: 'قُلْ هُوَ الَّذِي أَنْشَأَكُمْ وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۖ قَلِيلًا مَا تَشْكُرُونَ', transliteration: 'Qul Huwal-lazee ansha-akum wa ja\'ala lakumus-sam\'a wal-absaara wal-af\'idata qaleelam-maa tashkuroon', translation: 'Say, "It is He who produced you and made for you hearing and vision and hearts; little are you grateful"', audioId: 5264 },
      { number: 24, arabic: 'قُلْ هُوَ الَّذِي ذَرَأَكُمْ فِي الْأَرْضِ وَإِلَيْهِ تُحْشَرُونَ', transliteration: 'Qul Huwal-lazee zara-akum fil-ardi wa ilaihi tuhsharoon', translation: 'Say, "It is He who has multiplied you throughout the earth, and to Him you will be gathered"', audioId: 5265 },
      { number: 25, arabic: 'وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ إِنْ كُنْتُمْ صَادِقِينَ', transliteration: 'Wa yaqooloona mataa haazal-wa\'du in kuntum saadiqeen', translation: 'And they say, "When is this promise, if you should be truthful?"', audioId: 5266 },
      { number: 26, arabic: 'قُلْ إِنَّمَا الْعِلْمُ عِنْدَ اللَّهِ وَإِنَّمَا أَنَا نَذِيرٌ مُبِينٌ', transliteration: 'Qul innamal-\'ilmu \'indal-laahi wa innamaaa ana nazeerum-mubeen', translation: 'Say, "The knowledge is only with Allah, and I am only a clear warner"', audioId: 5267 },
      { number: 27, arabic: 'فَلَمَّا رَأَوْهُ زُلْفَةً سِيئَتْ وُجُوهُ الَّذِينَ كَفَرُوا وَقِيلَ هَٰذَا الَّذِي كُنْتُمْ بِهِ تَدَّعُونَ', transliteration: 'Falammaa ra-awhu zulfatan seee\'at wujoohul-lazeena kafaroo wa qeela haazal-lazee kuntum bihee tadda\'oon', translation: 'But when they see it approaching, the faces of those who disbelieved will be distressed, and it will be said, "This is that for which you used to call"', audioId: 5268 },
      { number: 28, arabic: 'قُلْ أَرَأَيْتُمْ إِنْ أَهْلَكَنِيَ اللَّهُ وَمَنْ مَعِيَ أَوْ رَحِمَنَا فَمَنْ يُجِيرُ الْكَافِرِينَ مِنْ عَذَابٍ أَلِيمٍ', transliteration: 'Qul ara\'aitum in ahlaka-niyal-laahu wa mam-ma\'iya aw rahimanaa famany-yujeerul-kaafireena min \'azaabin aleem', translation: 'Say, "Have you considered: whether Allah should cause my death and those with me or have mercy upon us, who can protect the disbelievers from a painful punishment?"', audioId: 5269 },
      { number: 29, arabic: 'قُلْ هُوَ الرَّحْمَٰنُ آمَنَّا بِهِ وَعَلَيْهِ تَوَكَّلْنَا ۖ فَسَتَعْلَمُونَ مَنْ هُوَ فِي ضَلَالٍ مُبِينٍ', transliteration: 'Qul Huwar-Rahmaanu aamannaa bihee wa \'alaihi tawakkalnaa fasata\'lamoona man huwa fee dalaalim-mubeen', translation: 'Say, "He is the Most Merciful; we have believed in Him, and upon Him we have relied. And you will know who it is that is in clear error"', audioId: 5270 },
      { number: 30, arabic: 'قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ', transliteration: 'Qul ara\'aitum in asbaha maaa\'ukum ghawran famany-ya\'teekum bimaaa\'im-ma\'een', translation: 'Say, "Have you considered: if your water was to become sunken into the earth, then who could bring you flowing water?"', audioId: 5271 }
    ]
  },
  {
    id: 112,
    name: 'Al-Ikhlas',
    arabicName: 'الإخلاص',
    englishName: 'The Sincerity',
    totalVerses: 4,
    revelation: 'Meccan',
    description: 'Equivalent to one-third of the Quran. The Prophet (ﷺ) said: "Is any one of you incapable of reciting one-third of the Quran in one night?" They said it was too hard. He said: "Qul Huwa Allahu Ahad is one-third of the Quran."',
    benefits: [
      'Equals one-third of the Quran in reward',
      'Affirms the oneness of Allah (Tawhid)',
      'Protection when recited 3 times morning and evening',
      'Part of the protecting surahs before sleep'
    ],
    verses: [
      { number: 1, arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ', transliteration: 'Qul Huwal-laahu Ahad', translation: 'Say, "He is Allah, the One"', audioId: 6222 },
      { number: 2, arabic: 'اللَّهُ الصَّمَدُ', transliteration: 'Allahus-Samad', translation: 'Allah, the Eternal Refuge', audioId: 6223 },
      { number: 3, arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', transliteration: 'Lam yalid wa lam yoolad', translation: 'He neither begets nor is born', audioId: 6224 },
      { number: 4, arabic: 'وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ', transliteration: 'Wa lam yakul-lahoo kufuwan ahad', translation: 'Nor is there to Him any equivalent', audioId: 6225 }
    ]
  },
  {
    id: 113,
    name: 'Al-Falaq',
    arabicName: 'الفلق',
    englishName: 'The Daybreak',
    totalVerses: 5,
    revelation: 'Meccan',
    description: 'One of the two "Mu\'awwidhatayn" (the two surahs of seeking refuge). The Prophet (ﷺ) used to seek protection by reciting this surah.',
    benefits: [
      'Protection from evil of all creation',
      'Protection from darkness and night',
      'Protection from witchcraft and magic',
      'Protection from envious people'
    ],
    verses: [
      {
        number: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
        transliteration: 'Qul a\'uzhu bi Rabbil-falaq',
        translation: 'Say, "I seek refuge in the Lord of daybreak',
        audioId: 6226
      },
      {
        number: 2,
        arabic: 'مِنْ شَرِّ مَا خَلَقَ',
        transliteration: 'Min sharri ma khalaq',
        translation: 'From the evil of that which He created',
        audioId: 6227
      },
      {
        number: 3,
        arabic: 'وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ',
        transliteration: 'Wa min sharri ghasiqin iza waqab',
        translation: 'And from the evil of darkness when it settles',
        audioId: 6228
      },
      {
        number: 4,
        arabic: 'وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
        transliteration: 'Wa min sharrin-naffathati fil-\'uqad',
        translation: 'And from the evil of the blowers in knots (witchcraft)',
        audioId: 6229
      },
      {
        number: 5,
        arabic: 'وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ',
        transliteration: 'Wa min sharri hasidin iza hasad',
        translation: 'And from the evil of an envier when he envies',
        audioId: 6230
      }
    ]
  },
  {
    id: 114,
    name: 'An-Nas',
    arabicName: 'الناس',
    englishName: 'Mankind',
    totalVerses: 6,
    revelation: 'Meccan',
    description: 'The final surah of the Quran and one of the "Mu\'awwidhatayn". Seeks protection from the whisperer who whispers evil into hearts.',
    benefits: [
      'Protection from Shaytan and evil whispers',
      'Protection from jinn and mankind',
      'Strengthens the heart against doubts',
      'Complete protection when recited with Al-Falaq'
    ],
    verses: [
      {
        number: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        transliteration: 'Qul a\'uzhu bi Rabbin-nas',
        translation: 'Say, "I seek refuge in the Lord of mankind',
        audioId: 6231
      },
      {
        number: 2,
        arabic: 'مَلِكِ النَّاسِ',
        transliteration: 'Malikin-nas',
        translation: 'The Sovereign of mankind',
        audioId: 6232
      },
      {
        number: 3,
        arabic: 'إِلَٰهِ النَّاسِ',
        transliteration: 'Ilahin-nas',
        translation: 'The God of mankind',
        audioId: 6233
      },
      {
        number: 4,
        arabic: 'مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
        transliteration: 'Min sharril-waswasil-khannas',
        translation: 'From the evil of the retreating whisperer',
        audioId: 6234
      },
      {
        number: 5,
        arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
        transliteration: 'Allazee yuwaswisu fee sudurin-nas',
        translation: 'Who whispers in the breasts of mankind',
        audioId: 6235
      },
      {
        number: 6,
        arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
        transliteration: 'Minal-jinnati wan-nas',
        translation: 'From among the jinn and mankind',
        audioId: 6236
      }
    ]
  }
];

// Healing Duas (Supplications)
export const healingDuas = [
  {
    id: 1,
    name: 'Dua for Healing',
    arabic: 'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِهِ وَأَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا',
    transliteration: 'Allahumma Rabban-nas, azhibil-ba\'s, ishfihi wa Antash-Shafi, la shifa\'a illa shifa\'uka, shifa\'an la yughadiru saqama',
    translation: 'O Allah, Lord of mankind, remove the affliction. Heal, for You are the Healer. There is no healing except Your healing, a healing that leaves no illness behind.',
    reference: 'Sahih al-Bukhari',
    times: 3
  },
  {
    id: 2,
    name: 'Dua for Protection',
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
    transliteration: 'A\'udhu bi kalimatillahit-tammati min sharri ma khalaq',
    translation: 'I seek refuge in the perfect words of Allah from the evil of what He has created.',
    reference: 'Sahih Muslim',
    times: 3
  },
  {
    id: 3,
    name: 'Dua for Pain',
    arabic: 'بِسْمِ اللَّهِ ثَلَاثًا وَقُلْ سَبْعَ مَرَّاتٍ أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ',
    transliteration: 'Bismillah (3 times). A\'udhu billahi wa qudratihi min sharri ma ajidu wa uhazhir (7 times)',
    translation: 'In the name of Allah (3 times). I seek refuge in Allah and His Power from the evil of what I feel and what I fear (7 times).',
    reference: 'Sahih Muslim',
    times: 7
  },
  {
    id: 4,
    name: 'Morning & Evening Protection',
    arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    transliteration: 'Bismillahil-lazee la yadurru ma\'asmihi shay\'un fil-ardi wa la fis-sama\'i wa Huwas-Samee\'ul-\'Aleem',
    translation: 'In the name of Allah, with Whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, the All-Knowing.',
    reference: 'Abu Dawud, Tirmidhi',
    times: 3
  }
];

// Ruqyah Program/Routine
export const ruqyahProgram = [
  {
    id: 1,
    title: 'Morning Ruqyah',
    description: 'Recite after Fajr prayer',
    items: [
      { type: 'surah', surahId: 1, times: 1, note: 'Surah Al-Fatiha' },
      { type: 'verse', surahId: 2, verseNumber: 255, times: 1, note: 'Ayat al-Kursi' },
      { type: 'surah', surahId: 113, times: 3, note: 'Surah Al-Falaq' },
      { type: 'surah', surahId: 114, times: 3, note: 'Surah An-Nas' },
      { type: 'dua', duaId: 4, times: 3, note: 'Morning Protection Dua' }
    ]
  },
  {
    id: 2,
    title: 'Evening Ruqyah',
    description: 'Recite after Maghrib prayer',
    items: [
      { type: 'surah', surahId: 1, times: 1, note: 'Surah Al-Fatiha' },
      { type: 'verse', surahId: 2, verseNumber: 255, times: 1, note: 'Ayat al-Kursi' },
      { type: 'surah', surahId: 113, times: 3, note: 'Surah Al-Falaq' },
      { type: 'surah', surahId: 114, times: 3, note: 'Surah An-Nas' },
      { type: 'dua', duaId: 4, times: 3, note: 'Evening Protection Dua' }
    ]
  },
  {
    id: 3,
    title: 'Before Sleep',
    description: 'Recite before going to bed',
    items: [
      { type: 'verse', surahId: 2, verseNumber: 255, times: 1, note: 'Ayat al-Kursi' },
      { type: 'verse', surahId: 2, verseNumber: 285, times: 1, note: 'Last verses of Al-Baqarah' },
      { type: 'verse', surahId: 2, verseNumber: 286, times: 1, note: '' },
      { type: 'surah', surahId: 113, times: 3, note: 'Blow into hands and wipe over body' },
      { type: 'surah', surahId: 114, times: 3, note: '' }
    ]
  },
  {
    id: 4,
    title: 'Full Ruqyah Session',
    description: 'For intensive spiritual healing',
    items: [
      { type: 'surah', surahId: 1, times: 7, note: 'Surah Al-Fatiha - The Healer' },
      { type: 'verse', surahId: 2, verseNumber: 255, times: 7, note: 'Ayat al-Kursi' },
      { type: 'verse', surahId: 2, verseNumber: 285, times: 3, note: 'Last verses of Al-Baqarah' },
      { type: 'verse', surahId: 2, verseNumber: 286, times: 3, note: '' },
      { type: 'surah', surahId: 113, times: 7, note: 'Surah Al-Falaq' },
      { type: 'surah', surahId: 114, times: 7, note: 'Surah An-Nas' },
      { type: 'dua', duaId: 1, times: 7, note: 'Dua for Healing' },
      { type: 'dua', duaId: 2, times: 7, note: 'Dua for Protection' }
    ]
  }
];

// Daily Adhkar (Morning & Evening Remembrances)
export const dailyAdhkar = {
  morning: {
    id: 'morning',
    title: 'Morning Adhkar',
    arabicTitle: 'أذكار الصباح',
    timing: 'After Fajr until sunrise',
    description: 'Ibn al-Qayyim said: "The morning and evening adhkar play the role of a shield; the thicker it is, the more its owner is protected."',
    items: [
      {
        id: 1,
        type: 'surah',
        surahId: 112,
        times: 3,
        name: 'Surah Al-Ikhlas',
        arabicName: 'سورة الإخلاص',
        benefit: 'Equals one-third of Quran'
      },
      {
        id: 2,
        type: 'surah',
        surahId: 113,
        times: 3,
        name: 'Surah Al-Falaq',
        arabicName: 'سورة الفلق',
        benefit: 'Protection from evil'
      },
      {
        id: 3,
        type: 'surah',
        surahId: 114,
        times: 3,
        name: 'Surah An-Nas',
        arabicName: 'سورة الناس',
        benefit: 'Protection from whispers'
      },
      {
        id: 4,
        type: 'verse',
        surahId: 2,
        verseNumber: 255,
        times: 1,
        name: 'Ayat al-Kursi',
        arabicName: 'آية الكرسي',
        benefit: 'Protection until evening'
      },
      {
        id: 5,
        type: 'dhikr',
        arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
        transliteration: 'Asbahna wa asbahal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamdu wa Huwa \'ala kulli shay\'in Qadeer',
        translation: 'We have reached the morning and at this very time all sovereignty belongs to Allah. All praise is for Allah. None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent.',
        times: 1,
        name: 'Morning Dhikr',
        arabicName: 'ذكر الصباح',
        reference: 'Abu Dawud'
      },
      {
        id: 6,
        type: 'dhikr',
        arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',
        transliteration: 'Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namootu, wa ilaykan-nushoor',
        translation: 'O Allah, by Your leave we have reached the morning, and by Your leave we have reached the evening, by Your leave we live and die and unto You is our resurrection.',
        times: 1,
        name: 'Morning Supplication',
        arabicName: 'دعاء الصباح',
        reference: 'Tirmidhi'
      },
      {
        id: 7,
        type: 'dhikr',
        arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
        transliteration: 'Bismillahil-ladhi la yadurru ma\'asmihi shay\'un fil-ardi wa la fis-sama\'i wa Huwas-Sami\'ul-\'Alim',
        translation: 'In the name of Allah, with Whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, the All-Knowing.',
        times: 3,
        name: 'Protection Dhikr',
        arabicName: 'ذكر الحماية',
        reference: 'Abu Dawud, Tirmidhi',
        benefit: 'Whoever says this 3 times, nothing will harm them'
      },
      {
        id: 8,
        type: 'dhikr',
        arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
        transliteration: 'A\'udhu bi kalimatillahit-tammati min sharri ma khalaq',
        translation: 'I seek refuge in the perfect words of Allah from the evil of what He has created.',
        times: 3,
        name: 'Seeking Refuge',
        arabicName: 'الاستعاذة',
        reference: 'Muslim'
      },
      {
        id: 9,
        type: 'dhikr',
        arabic: 'رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا',
        transliteration: 'Radheetu billahi Rabba, wa bil-Islami deena, wa bi-Muhammadin sallallahu alayhi wa sallama nabiyya',
        translation: 'I am pleased with Allah as a Lord, and Islam as a religion and Muhammad (peace be upon him) as a Prophet.',
        times: 3,
        name: 'Declaration of Faith',
        arabicName: 'إعلان الرضا',
        reference: 'Abu Dawud',
        benefit: 'Allah will please him on Day of Judgment'
      },
      {
        id: 10,
        type: 'dhikr',
        arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
        transliteration: 'SubhanAllahi wa bihamdihi',
        translation: 'Glory be to Allah and His is the praise.',
        times: 100,
        name: 'Tasbeeh',
        arabicName: 'التسبيح',
        reference: 'Bukhari & Muslim',
        benefit: 'Sins forgiven even if like foam of sea'
      }
    ]
  },
  evening: {
    id: 'evening',
    title: 'Evening Adhkar',
    arabicTitle: 'أذكار المساء',
    timing: 'After Asr until Maghrib',
    description: 'The evening remembrances provide protection through the night. Never abandon these adhkar.',
    items: [
      {
        id: 1,
        type: 'surah',
        surahId: 112,
        times: 3,
        name: 'Surah Al-Ikhlas',
        arabicName: 'سورة الإخلاص',
        benefit: 'Equals one-third of Quran'
      },
      {
        id: 2,
        type: 'surah',
        surahId: 113,
        times: 3,
        name: 'Surah Al-Falaq',
        arabicName: 'سورة الفلق',
        benefit: 'Protection from evil'
      },
      {
        id: 3,
        type: 'surah',
        surahId: 114,
        times: 3,
        name: 'Surah An-Nas',
        arabicName: 'سورة الناس',
        benefit: 'Protection from whispers'
      },
      {
        id: 4,
        type: 'verse',
        surahId: 2,
        verseNumber: 255,
        times: 1,
        name: 'Ayat al-Kursi',
        arabicName: 'آية الكرسي',
        benefit: 'Protection until morning'
      },
      {
        id: 5,
        type: 'dhikr',
        arabic: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
        transliteration: 'Amsayna wa amsal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamdu wa Huwa \'ala kulli shay\'in Qadeer',
        translation: 'We have reached the evening and at this very time all sovereignty belongs to Allah. All praise is for Allah. None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent.',
        times: 1,
        name: 'Evening Dhikr',
        arabicName: 'ذكر المساء',
        reference: 'Abu Dawud'
      },
      {
        id: 6,
        type: 'dhikr',
        arabic: 'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ',
        transliteration: 'Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namootu, wa ilaykal-maseer',
        translation: 'O Allah, by Your leave we have reached the evening, and by Your leave we have reached the morning, by Your leave we live and die and unto You is our return.',
        times: 1,
        name: 'Evening Supplication',
        arabicName: 'دعاء المساء',
        reference: 'Tirmidhi'
      },
      {
        id: 7,
        type: 'dhikr',
        arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
        transliteration: 'Bismillahil-ladhi la yadurru ma\'asmihi shay\'un fil-ardi wa la fis-sama\'i wa Huwas-Sami\'ul-\'Alim',
        translation: 'In the name of Allah, with Whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, the All-Knowing.',
        times: 3,
        name: 'Protection Dhikr',
        arabicName: 'ذكر الحماية',
        reference: 'Abu Dawud, Tirmidhi',
        benefit: 'Whoever says this 3 times, nothing will harm them'
      },
      {
        id: 8,
        type: 'dhikr',
        arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
        transliteration: 'A\'udhu bi kalimatillahit-tammati min sharri ma khalaq',
        translation: 'I seek refuge in the perfect words of Allah from the evil of what He has created.',
        times: 3,
        name: 'Seeking Refuge',
        arabicName: 'الاستعاذة',
        reference: 'Muslim'
      },
      {
        id: 9,
        type: 'dhikr',
        arabic: 'رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا',
        transliteration: 'Radheetu billahi Rabba, wa bil-Islami deena, wa bi-Muhammadin sallallahu alayhi wa sallama nabiyya',
        translation: 'I am pleased with Allah as a Lord, and Islam as a religion and Muhammad (peace be upon him) as a Prophet.',
        times: 3,
        name: 'Declaration of Faith',
        arabicName: 'إعلان الرضا',
        reference: 'Abu Dawud',
        benefit: 'Allah will please him on Day of Judgment'
      },
      {
        id: 10,
        type: 'dhikr',
        arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
        transliteration: 'SubhanAllahi wa bihamdihi',
        translation: 'Glory be to Allah and His is the praise.',
        times: 100,
        name: 'Tasbeeh',
        arabicName: 'التسبيح',
        reference: 'Bukhari & Muslim',
        benefit: 'Sins forgiven even if like foam of sea'
      }
    ]
  },
  beforeSleep: {
    id: 'sleep',
    title: 'Before Sleep Adhkar',
    arabicTitle: 'أذكار النوم',
    timing: 'Before going to bed',
    description: 'The Prophet (ﷺ) never slept until he recited these. Blow into your hands after the three Quls and wipe over your body.',
    items: [
      {
        id: 1,
        type: 'verse',
        surahId: 2,
        verseNumber: 255,
        times: 1,
        name: 'Ayat al-Kursi',
        arabicName: 'آية الكرسي',
        benefit: 'Guardian angel until morning, no devil comes near'
      },
      {
        id: 2,
        type: 'surah',
        surahId: 112,
        times: 3,
        name: 'Surah Al-Ikhlas',
        arabicName: 'سورة الإخلاص',
        note: 'Blow into hands and wipe over body'
      },
      {
        id: 3,
        type: 'surah',
        surahId: 113,
        times: 3,
        name: 'Surah Al-Falaq',
        arabicName: 'سورة الفلق',
        note: 'Blow into hands and wipe over body'
      },
      {
        id: 4,
        type: 'surah',
        surahId: 114,
        times: 3,
        name: 'Surah An-Nas',
        arabicName: 'سورة الناس',
        note: 'Blow into hands and wipe over body'
      },
      {
        id: 5,
        type: 'verse',
        surahId: 2,
        verseNumber: 285,
        times: 1,
        name: 'Last Verses of Al-Baqarah',
        arabicName: 'خواتيم البقرة',
        benefit: 'Sufficient for whoever recites them at night'
      },
      {
        id: 6,
        type: 'verse',
        surahId: 2,
        verseNumber: 286,
        times: 1,
        name: 'Last Verses of Al-Baqarah',
        arabicName: 'خواتيم البقرة'
      },
      {
        id: 7,
        type: 'surah',
        surahId: 67,
        times: 1,
        name: 'Surah Al-Mulk',
        arabicName: 'سورة الملك',
        benefit: 'Protection from punishment of the grave'
      },
      {
        id: 8,
        type: 'dhikr',
        arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
        transliteration: 'Bismika Allahumma amootu wa ahya',
        translation: 'In Your name, O Allah, I die and I live.',
        times: 1,
        name: 'Sleep Dhikr',
        arabicName: 'ذكر النوم',
        reference: 'Bukhari'
      },
      {
        id: 9,
        type: 'dhikr',
        arabic: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ',
        transliteration: 'Allahumma qini \'adhabaka yawma tab\'athu \'ibadak',
        translation: 'O Allah, protect me from Your punishment on the Day You resurrect Your servants.',
        times: 3,
        name: 'Protection from Punishment',
        arabicName: 'الوقاية من العذاب',
        reference: 'Abu Dawud'
      }
    ]
  }
};

// Helper function to get surah by ID
export const getSurahById = (id) => surahs.find(s => s.id === id);

// Helper function to get verse audio URL
export const getVerseAudioUrl = (audioId) => `${AUDIO_BASE_URL}${audioId}.mp3`;

// Helper function to get dua by ID
export const getDuaById = (id) => healingDuas.find(d => d.id === id);

// Helper function to get adhkar by type
export const getAdhkarByType = (type) => dailyAdhkar[type];

// Helper function to build autoplay playlist for a program
export const buildPlaylist = (programId) => {
  const program = ruqyahProgram.find(p => p.id === programId);
  if (!program) return [];

  const playlist = [];

  program.items.forEach(item => {
    if (item.type === 'surah') {
      const surah = getSurahById(item.surahId);
      if (surah && surah.verses) {
        for (let t = 0; t < item.times; t++) {
          surah.verses.forEach(verse => {
            playlist.push({
              type: 'verse',
              surahId: surah.id,
              surahName: surah.name,
              arabicName: surah.arabicName,
              verseNumber: verse.number,
              arabic: verse.arabic,
              transliteration: verse.transliteration,
              translation: verse.translation,
              audioUrl: getVerseAudioUrl(verse.audioId),
              repetition: t + 1,
              totalRepetitions: item.times
            });
          });
        }
      }
    } else if (item.type === 'verse') {
      const surah = getSurahById(item.surahId);
      if (surah) {
        const verse = surah.verses.find(v => v.number === item.verseNumber);
        if (verse) {
          for (let t = 0; t < item.times; t++) {
            playlist.push({
              type: 'verse',
              surahId: surah.id,
              surahName: surah.name,
              arabicName: surah.arabicName,
              verseNumber: verse.number,
              name: verse.name || item.note,
              arabic: verse.arabic,
              transliteration: verse.transliteration,
              translation: verse.translation,
              audioUrl: getVerseAudioUrl(verse.audioId),
              repetition: t + 1,
              totalRepetitions: item.times
            });
          }
        }
      }
    } else if (item.type === 'dua') {
      const dua = getDuaById(item.duaId);
      if (dua) {
        for (let t = 0; t < item.times; t++) {
          playlist.push({
            type: 'dua',
            name: dua.name,
            arabic: dua.arabic,
            transliteration: dua.transliteration,
            translation: dua.translation,
            reference: dua.reference,
            repetition: t + 1,
            totalRepetitions: item.times,
            audioUrl: null // Duas don't have audio in this implementation
          });
        }
      }
    }
  });

  return playlist;
};

// Helper function to build adhkar playlist
export const buildAdhkarPlaylist = (adhkarType) => {
  const adhkar = dailyAdhkar[adhkarType];
  if (!adhkar) return [];

  const playlist = [];

  adhkar.items.forEach(item => {
    if (item.type === 'surah') {
      const surah = getSurahById(item.surahId);
      if (surah && surah.verses) {
        for (let t = 0; t < item.times; t++) {
          surah.verses.forEach(verse => {
            playlist.push({
              type: 'verse',
              itemName: item.name,
              arabicName: item.arabicName,
              surahId: surah.id,
              surahName: surah.name,
              verseNumber: verse.number,
              arabic: verse.arabic,
              transliteration: verse.transliteration,
              translation: verse.translation,
              audioUrl: getVerseAudioUrl(verse.audioId),
              repetition: t + 1,
              totalRepetitions: item.times,
              benefit: item.benefit
            });
          });
        }
      }
    } else if (item.type === 'verse') {
      const surah = getSurahById(item.surahId);
      if (surah) {
        const verse = surah.verses.find(v => v.number === item.verseNumber);
        if (verse) {
          for (let t = 0; t < item.times; t++) {
            playlist.push({
              type: 'verse',
              itemName: item.name,
              arabicName: item.arabicName,
              surahId: surah.id,
              surahName: surah.name,
              verseNumber: verse.number,
              arabic: verse.arabic,
              transliteration: verse.transliteration,
              translation: verse.translation,
              audioUrl: getVerseAudioUrl(verse.audioId),
              repetition: t + 1,
              totalRepetitions: item.times,
              benefit: item.benefit
            });
          }
        }
      }
    } else if (item.type === 'dhikr') {
      for (let t = 0; t < item.times; t++) {
        playlist.push({
          type: 'dhikr',
          itemName: item.name,
          arabicName: item.arabicName,
          arabic: item.arabic,
          transliteration: item.transliteration,
          translation: item.translation,
          reference: item.reference,
          repetition: t + 1,
          totalRepetitions: item.times,
          benefit: item.benefit,
          audioUrl: null // Dhikr doesn't have pre-recorded audio
        });
      }
    }
  });

  return playlist;
};

export default {
  surahs,
  healingDuas,
  ruqyahProgram,
  ruqyahInfo,
  dailyAdhkar,
  getSurahById,
  getVerseAudioUrl,
  getDuaById,
  getAdhkarByType,
  buildPlaylist,
  buildAdhkarPlaylist
};
