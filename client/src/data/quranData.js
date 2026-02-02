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
    id: 18,
    name: 'Al-Kahf',
    arabicName: 'الكهف',
    englishName: 'The Cave',
    totalVerses: 110,
    revelation: 'Meccan',
    description: 'Surah Al-Kahf contains four great stories: The People of the Cave, The Owner of Two Gardens, Musa and Al-Khidr, and Dhul-Qarnayn. The Prophet (ﷺ) said: "Whoever recites Surah Al-Kahf on Friday, a light will shine for him between the two Fridays."',
    benefits: [
      'Protection from Dajjal (Antichrist) - memorize first 10 verses',
      'Light between two Fridays when recited on Friday',
      'Protection from trials and tribulations',
      'Contains lessons about faith, wealth, knowledge, and power'
    ],
    tafsirAvailable: true,
    verses: [
      { number: 1, arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَل لَّهُ عِوَجًا', transliteration: 'Alhamdu lillahil-lazee anzala \'ala \'abdihil-Kitaba wa lam yaj\'al lahu \'iwaja', translation: 'All praise is due to Allah, who has sent down upon His Servant the Book and has not made therein any deviance', audioId: 2141 },
      { number: 2, arabic: 'قَيِّمًا لِّيُنذِرَ بَأْسًا شَدِيدًا مِّن لَّدُنْهُ وَيُبَشِّرَ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا حَسَنًا', transliteration: 'Qayyimal-liyunzira ba\'san shadeedam-mil-ladunhu wa yubashshiral-mu\'mineenal-lazeena ya\'maloonas-saalihaati anna lahum ajran hasana', translation: 'He has made it straight, to warn of severe punishment from Him and to give good tidings to the believers who do righteous deeds that they will have a good reward', audioId: 2142 },
      { number: 3, arabic: 'مَّاكِثِينَ فِيهِ أَبَدًا', transliteration: 'Maakiseena feehi abada', translation: 'In which they will remain forever', audioId: 2143 },
      { number: 4, arabic: 'وَيُنذِرَ الَّذِينَ قَالُوا اتَّخَذَ اللَّهُ وَلَدًا', transliteration: 'Wa yunziral-lazeena qaalut-takhazal-laahu walada', translation: 'And to warn those who say, "Allah has taken a son"', audioId: 2144 },
      { number: 5, arabic: 'مَّا لَهُم بِهِ مِنْ عِلْمٍ وَلَا لِآبَائِهِمْ ۚ كَبُرَتْ كَلِمَةً تَخْرُجُ مِنْ أَفْوَاهِهِمْ ۚ إِن يَقُولُونَ إِلَّا كَذِبًا', transliteration: 'Maa lahum bihee min \'ilminw-wa laa li\'aabaaa\'ihim; kaburat kalimatan takhruju min afwaahihim; iny-yaqooloona illaa kaziba', translation: 'They have no knowledge of it, nor had their fathers. Grave is the word that comes out of their mouths; they speak not except a lie', audioId: 2145 },
      { number: 6, arabic: 'فَلَعَلَّكَ بَاخِعٌ نَّفْسَكَ عَلَىٰ آثَارِهِمْ إِن لَّمْ يُؤْمِنُوا بِهَٰذَا الْحَدِيثِ أَسَفًا', transliteration: 'Fala\'allaka baakhi\'un nafsaka \'alaaa aasaarihim il-lam yu\'minoo bihaazal-hadeesi asafa', translation: 'Then perhaps you would kill yourself through grief over them, if they do not believe in this message, out of sorrow', audioId: 2146 },
      { number: 7, arabic: 'إِنَّا جَعَلْنَا مَا عَلَى الْأَرْضِ زِينَةً لَّهَا لِنَبْلُوَهُمْ أَيُّهُمْ أَحْسَنُ عَمَلًا', transliteration: 'Innaa ja\'alnaa maa \'alal-ardi zeenatal-lahaa linabluwahum ayyuhum ahsanu \'amala', translation: 'Indeed, We have made that which is on the earth adornment for it that We may test them as to which of them is best in deed', audioId: 2147 },
      { number: 8, arabic: 'وَإِنَّا لَجَاعِلُونَ مَا عَلَيْهَا صَعِيدًا جُرُزًا', transliteration: 'Wa innaa lajaa\'iloona maa \'alaihaa sa\'eedan juruza', translation: 'And indeed, We will make that which is upon it into a barren ground', audioId: 2148 },
      { number: 9, arabic: 'أَمْ حَسِبْتَ أَنَّ أَصْحَابَ الْكَهْفِ وَالرَّقِيمِ كَانُوا مِنْ آيَاتِنَا عَجَبًا', transliteration: 'Am hasibta anna Ashaabal-Kahfi war-Raqeemi kaanoo min Aayaatinaa \'ajaba', translation: 'Or have you thought that the companions of the cave and the inscription were, among Our signs, a wonder?', audioId: 2149 },
      { number: 10, arabic: 'إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ فَقَالُوا رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا', transliteration: 'Iz awal-fityatu ilal-kahfi faqaaloo Rabbanaaa aatinaa mil-ladunka rahmatanw-wa hayyi\' lanaa min amrinaa rashada', translation: 'When the youths retreated to the cave and said, "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance"', audioId: 2150 },
      { number: 11, arabic: 'فَضَرَبْنَا عَلَىٰ آذَانِهِمْ فِي الْكَهْفِ سِنِينَ عَدَدًا', transliteration: 'Fadarabnaa \'alaaa aazaanihim fil-kahfi sineena \'adada', translation: 'So We cast a veil over their ears within the cave for a number of years', audioId: 2151 },
      { number: 12, arabic: 'ثُمَّ بَعَثْنَاهُمْ لِنَعْلَمَ أَيُّ الْحِزْبَيْنِ أَحْصَىٰ لِمَا لَبِثُوا أَمَدًا', transliteration: 'Summa ba\'asnaahum lina\'lama ayyul-hizbaini ahsaa limaa labisoo amada', translation: 'Then We awakened them that We might show which of the two factions was most precise in calculating what extent they had remained in time', audioId: 2152 },
      { number: 13, arabic: 'نَّحْنُ نَقُصُّ عَلَيْكَ نَبَأَهُم بِالْحَقِّ ۚ إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ وَزِدْنَاهُمْ هُدًى', transliteration: 'Nahnu naqussu \'alaika naba\'ahum bilhaqq; innahum fityatun aamanoo bi Rabbihim wa zidnaahum huda', translation: 'We relate to you their story in truth. Indeed, they were youths who believed in their Lord, and We increased them in guidance', audioId: 2153 },
      { number: 14, arabic: 'وَرَبَطْنَا عَلَىٰ قُلُوبِهِمْ إِذْ قَامُوا فَقَالُوا رَبُّنَا رَبُّ السَّمَاوَاتِ وَالْأَرْضِ لَن نَّدْعُوَ مِن دُونِهِ إِلَٰهًا ۖ لَّقَدْ قُلْنَا إِذًا شَطَطًا', transliteration: 'Wa rabatnaa \'alaa quloobihim iz qaamoo faqaaloo Rabbunaa Rabbus-samaawaati wal-ardi lan nad\'uwa min dooniheee ilaahan laqad qulnaaa izan shatataa', translation: 'And We made firm their hearts when they stood up and said, "Our Lord is the Lord of the heavens and the earth. Never will we invoke besides Him any deity. We would have certainly spoken, then, an excessive transgression"', audioId: 2154 },
      { number: 15, arabic: 'هَٰؤُلَاءِ قَوْمُنَا اتَّخَذُوا مِن دُونِهِ آلِهَةً ۖ لَّوْلَا يَأْتُونَ عَلَيْهِم بِسُلْطَانٍ بَيِّنٍ ۖ فَمَنْ أَظْلَمُ مِمَّنِ افْتَرَىٰ عَلَى اللَّهِ كَذِبًا', transliteration: 'Haaa\'ulaaa\'i qawmunat-takhazoo min dooniheee aalihatan law laa ya\'toona \'alaihim bisultaanim bayyin; faman azlamu mimmanif-taraa \'alal-laahi kaziba', translation: 'These, our people, have taken besides Him deities. Why do they not bring for worship of them a clear authority? And who is more unjust than one who invents about Allah a lie?', audioId: 2155 },
      { number: 16, arabic: 'وَإِذِ اعْتَزَلْتُمُوهُمْ وَمَا يَعْبُدُونَ إِلَّا اللَّهَ فَأْوُوا إِلَى الْكَهْفِ يَنشُرْ لَكُمْ رَبُّكُم مِّن رَّحْمَتِهِ وَيُهَيِّئْ لَكُم مِّنْ أَمْرِكُم مِّرْفَقًا', transliteration: 'Wa izi\'tazaltumoohum wa maa ya\'budoona illal-laaha fa\'wooo ilal-kahfi yanshur lakum Rabbukum mir-rahmatihee wa yuhayyi\' lakum min amrikum mirfaqa', translation: 'And when you have withdrawn from them and that which they worship other than Allah, retreat to the cave. Your Lord will spread out for you of His mercy and will prepare for you from your affair facility', audioId: 2156 },
      { number: 17, arabic: 'وَتَرَى الشَّمْسَ إِذَا طَلَعَت تَّزَاوَرُ عَن كَهْفِهِمْ ذَاتَ الْيَمِينِ وَإِذَا غَرَبَت تَّقْرِضُهُمْ ذَاتَ الشِّمَالِ وَهُمْ فِي فَجْوَةٍ مِّنْهُ ۚ ذَٰلِكَ مِنْ آيَاتِ اللَّهِ ۗ مَن يَهْدِ اللَّهُ فَهُوَ الْمُهْتَدِ ۖ وَمَن يُضْلِلْ فَلَن تَجِدَ لَهُ وَلِيًّا مُّرْشِدًا', transliteration: 'Wa tarash-shamsa izaa tala\'at tazaawaru \'an kahfihim zaatal-yameeni wa izaa gharabat taqriduhum zaatash-shimaali wa hum fee fajwatim-minh; zaalika min Aayaatil-laah; mai-yahdil-laahu fahuwal-muhtad; wa mai-yudlil falan tajida lahoo waliyyam-murshida', translation: 'And you would see the sun when it rose, inclining away from their cave on the right, and when it set, passing away from them on the left, while they were within an open space thereof. That is from the signs of Allah. He whom Allah guides is the rightly guided, but he whom He leaves astray - never will you find for him a protecting guide', audioId: 2157 },
      { number: 18, arabic: 'وَتَحْسَبُهُمْ أَيْقَاظًا وَهُمْ رُقُودٌ ۚ وَنُقَلِّبُهُمْ ذَاتَ الْيَمِينِ وَذَاتَ الشِّمَالِ ۖ وَكَلْبُهُم بَاسِطٌ ذِرَاعَيْهِ بِالْوَصِيدِ ۚ لَوِ اطَّلَعْتَ عَلَيْهِمْ لَوَلَّيْتَ مِنْهُمْ فِرَارًا وَلَمُلِئْتَ مِنْهُمْ رُعْبًا', transliteration: 'Wa tahsabuhum ayqaazanw-wa hum ruqood; wa nuqallibuhum zaatal-yameeni wa zaatash-shimaali wa kalbuhum baasitun ziraa\'aihi bilwaseed; lawit-tala\'ta \'alaihim la wallaita minhum firaaranw-wa lamuli\'ta minhum ru\'ba', translation: 'And you would think them awake, while they were asleep. And We turned them to the right and to the left, while their dog stretched his forelegs at the entrance. If you had looked at them, you would have turned from them in flight and been filled by them with terror', audioId: 2158 },
      { number: 19, arabic: 'وَكَذَٰلِكَ بَعَثْنَاهُمْ لِيَتَسَاءَلُوا بَيْنَهُمْ ۚ قَالَ قَائِلٌ مِّنْهُمْ كَمْ لَبِثْتُمْ ۖ قَالُوا لَبِثْنَا يَوْمًا أَوْ بَعْضَ يَوْمٍ ۚ قَالُوا رَبُّكُمْ أَعْلَمُ بِمَا لَبِثْتُمْ فَابْعَثُوا أَحَدَكُم بِوَرِقِكُمْ هَٰذِهِ إِلَى الْمَدِينَةِ فَلْيَنظُرْ أَيُّهَا أَزْكَىٰ طَعَامًا فَلْيَأْتِكُم بِرِزْقٍ مِّنْهُ وَلْيَتَلَطَّفْ وَلَا يُشْعِرَنَّ بِكُمْ أَحَدًا', transliteration: 'Wa kazaalika ba\'asnaahum liyatasaaa\'aloo bainahum; qaala qaaa\'ilum-minhum kam labistum qaaloo labisnaa yawman aw ba\'da yawm; qaaloo Rabbukum a\'lamu bimaa labistum fab\'asooo ahadakum biwariqikum haazihee ilal-madeenati falyanzur ayyuhaaa azkaa ta\'aaman falya\'tikum birizqim-minhu walyatalattaf wa laa yush\'iranna bikum ahadaa', translation: 'And similarly, We awakened them that they might question one another. Said a speaker among them, "How long have you remained here?" They said, "We have remained a day or part of a day." They said, "Your Lord is most knowing of how long you remained. So send one of you with this silver coin of yours to the city and let him look to which is the best of food and bring you provision from it and let him be cautious. And let no one be aware of you"', audioId: 2159 },
      { number: 20, arabic: 'إِنَّهُمْ إِن يَظْهَرُوا عَلَيْكُمْ يَرْجُمُوكُمْ أَوْ يُعِيدُوكُمْ فِي مِلَّتِهِمْ وَلَن تُفْلِحُوا إِذًا أَبَدًا', transliteration: 'Innahum iny-yazharoo \'alaikum yarjumookum aw yu\'eedookum fee millatihim wa lan tuflihoo izan abadaa', translation: 'Indeed, if they come to know of you, they will stone you or return you to their religion. And never would you succeed, then - ever', audioId: 2160 },
      { number: 21, arabic: 'وَكَذَٰلِكَ أَعْثَرْنَا عَلَيْهِمْ لِيَعْلَمُوا أَنَّ وَعْدَ اللَّهِ حَقٌّ وَأَنَّ السَّاعَةَ لَا رَيْبَ فِيهَا إِذْ يَتَنَازَعُونَ بَيْنَهُمْ أَمْرَهُمْ ۖ فَقَالُوا ابْنُوا عَلَيْهِم بُنْيَانًا ۖ رَّبُّهُمْ أَعْلَمُ بِهِمْ ۚ قَالَ الَّذِينَ غَلَبُوا عَلَىٰ أَمْرِهِمْ لَنَتَّخِذَنَّ عَلَيْهِم مَّسْجِدًا', transliteration: 'Wa kazaalika a\'sarnaa \'alaihim liya\'lamooo anna wa\'dal-laahi haqqunw-wa annas-Saa\'ata laa raiba feehaaa iz yatanaaza\'oona bainahum amrahum faqaalub-noo \'alaihim bunyaanaa; Rabbuhum a\'lamu bihim; qaalal-lazeena ghalaboo \'alaaa amrihim lanattakhizanna \'alaihim masjida', translation: 'And similarly, We caused them to be found that they would know that the promise of Allah is truth and that of the Hour there is no doubt. When they disputed among themselves about their affair and said, "Construct over them a structure." Their Lord is most knowing about them. Said those who prevailed in the matter, "We will surely take for ourselves over them a masjid"', audioId: 2161 },
      { number: 22, arabic: 'سَيَقُولُونَ ثَلَاثَةٌ رَّابِعُهُمْ كَلْبُهُمْ وَيَقُولُونَ خَمْسَةٌ سَادِسُهُمْ كَلْبُهُمْ رَجْمًا بِالْغَيْبِ ۖ وَيَقُولُونَ سَبْعَةٌ وَثَامِنُهُمْ كَلْبُهُمْ ۚ قُل رَّبِّي أَعْلَمُ بِعِدَّتِهِم مَّا يَعْلَمُهُمْ إِلَّا قَلِيلٌ ۗ فَلَا تُمَارِ فِيهِمْ إِلَّا مِرَاءً ظَاهِرًا وَلَا تَسْتَفْتِ فِيهِم مِّنْهُمْ أَحَدًا', transliteration: 'Sa yaqooloona salaasatur-raabi\'uhum kalbuhum wa yaqooloona khamsatun saadisuhum kalbuhum rajmam bilghaib; wa yaqooloona sab\'atunw-wa saaminuhum kalbuhum; qur-Rabbee a\'lamu bi\'iddatihim maa ya\'lamuhum illaa qaleel; falaa tumaari feehim illaa miraaa\'an zaahiranw-wa laa tastafti feehim minhum ahadaa', translation: 'They will say there were three, the fourth of them being their dog; and they will say there were five, the sixth of them being their dog - guessing at the unseen; and they will say there were seven, and the eighth of them was their dog. Say, "My Lord is most knowing of their number. None knows them except a few. So do not argue about them except with an obvious argument and do not inquire about them among the speculators from anyone"', audioId: 2162 },
      { number: 23, arabic: 'وَلَا تَقُولَنَّ لِشَيْءٍ إِنِّي فَاعِلٌ ذَٰلِكَ غَدًا', transliteration: 'Wa laa taqoolanna lishay\'in innee faa\'ilun zaalika ghadaa', translation: 'And never say of anything, "Indeed, I will do that tomorrow"', audioId: 2163 },
      { number: 24, arabic: 'إِلَّا أَن يَشَاءَ اللَّهُ ۚ وَاذْكُر رَّبَّكَ إِذَا نَسِيتَ وَقُلْ عَسَىٰ أَن يَهْدِيَنِ رَبِّي لِأَقْرَبَ مِنْ هَٰذَا رَشَدًا', transliteration: 'Illaaa ai-yashaaa\'al-laah; wazkur Rabbaka izaa naseeta wa qul \'asaaa ai-yahdi yani Rabbee li\'aqraba min haazaa rashadaa', translation: 'Except when adding, "If Allah wills." And remember your Lord when you forget and say, "Perhaps my Lord will guide me to what is nearer than this to right conduct"', audioId: 2164 },
      { number: 25, arabic: 'وَلَبِثُوا فِي كَهْفِهِمْ ثَلَاثَ مِائَةٍ سِنِينَ وَازْدَادُوا تِسْعًا', transliteration: 'Wa labisoo fee kahfihim salaasa mi\'atin sineena wazdaadoo tis\'aa', translation: 'And they remained in their cave for three hundred years and exceeded by nine', audioId: 2165 },
      { number: 26, arabic: 'قُلِ اللَّهُ أَعْلَمُ بِمَا لَبِثُوا ۖ لَهُ غَيْبُ السَّمَاوَاتِ وَالْأَرْضِ ۖ أَبْصِرْ بِهِ وَأَسْمِعْ ۚ مَا لَهُم مِّن دُونِهِ مِن وَلِيٍّ وَلَا يُشْرِكُ فِي حُكْمِهِ أَحَدًا', transliteration: 'Qulil-laahu a\'lamu bimaa labisoo lahoo ghaibus-samaawaati wal-ardi absir bihee wa asmi\'; maa lahum min doonihee minw-waliyyinw-wa laa yushriku fee hukmihee ahadaa', translation: 'Say, "Allah is most knowing of how long they remained. He has knowledge of the unseen aspects of the heavens and the earth. How Seeing is He and how Hearing! They have not besides Him any protector, and He shares not His legislation with anyone"', audioId: 2166 },
      { number: 27, arabic: 'وَاتْلُ مَا أُوحِيَ إِلَيْكَ مِن كِتَابِ رَبِّكَ ۖ لَا مُبَدِّلَ لِكَلِمَاتِهِ وَلَن تَجِدَ مِن دُونِهِ مُلْتَحَدًا', transliteration: 'Watlu maaa oohiya ilaika min Kitaabi Rabbika laa mubaddila li Kalimaatihee wa lan tajida min doonihee multahadaa', translation: 'And recite what has been revealed to you of the Book of your Lord. There is no changer of His words, and never will you find in other than Him a refuge', audioId: 2167 },
      { number: 28, arabic: 'وَاصْبِرْ نَفْسَكَ مَعَ الَّذِينَ يَدْعُونَ رَبَّهُم بِالْغَدَاةِ وَالْعَشِيِّ يُرِيدُونَ وَجْهَهُ ۖ وَلَا تَعْدُ عَيْنَاكَ عَنْهُمْ تُرِيدُ زِينَةَ الْحَيَاةِ الدُّنْيَا ۖ وَلَا تُطِعْ مَنْ أَغْفَلْنَا قَلْبَهُ عَن ذِكْرِنَا وَاتَّبَعَ هَوَاهُ وَكَانَ أَمْرُهُ فُرُطًا', transliteration: 'Wasbir nafsaka ma\'al-lazeena yad\'oona Rabbahum bilghadaati wal\'ashiyyi yureedoona Wajhahoo wa laa ta\'du \'ainaaka \'anhum tureedu zeenatal-hayaatid-dunyaa wa laa tuti\' man aghfalnaa qalbahoo \'an zikrinaa wattaba\'a hawaahu wa kaana amruhoo furutaa', translation: 'And keep yourself patient by being with those who call upon their Lord in the morning and the evening, seeking His countenance. And let not your eyes pass beyond them, desiring adornments of the worldly life, and do not obey one whose heart We have made heedless of Our remembrance and who follows his desire and whose affair is ever in neglect', audioId: 2168 },
      { number: 29, arabic: 'وَقُلِ الْحَقُّ مِن رَّبِّكُمْ ۖ فَمَن شَاءَ فَلْيُؤْمِن وَمَن شَاءَ فَلْيَكْفُرْ ۚ إِنَّا أَعْتَدْنَا لِلظَّالِمِينَ نَارًا أَحَاطَ بِهِمْ سُرَادِقُهَا ۚ وَإِن يَسْتَغِيثُوا يُغَاثُوا بِمَاءٍ كَالْمُهْلِ يَشْوِي الْوُجُوهَ ۚ بِئْسَ الشَّرَابُ وَسَاءَتْ مُرْتَفَقًا', transliteration: 'Wa qulil-haqqu mir-Rabbikum faman shaaa\'a falyu\'minw-wa man shaaa\'a falyakfur; innaaa a\'tadnaa lizzaalimeena Naaran ahaata bihim suraadiquhaa; wa iny-yastagheesooo yughaasoo bimaaa\'in kalmuhlj yashwil-wujooh; bi\'sash-sharaab; wa saaa\'at murtafaqaa', translation: 'And say, "The truth is from your Lord, so whoever wills - let him believe; and whoever wills - let him disbelieve." Indeed, We have prepared for the wrongdoers a fire whose walls will surround them. And if they call for relief, they will be relieved with water like murky oil, which scalds their faces. Wretched is the drink, and evil is the resting place', audioId: 2169 },
      { number: 30, arabic: 'إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ إِنَّا لَا نُضِيعُ أَجْرَ مَنْ أَحْسَنَ عَمَلًا', transliteration: 'Innal-lazeena aamanoo wa \'amilus-saalihaati innaa laa nudee\'u ajra man ahsana \'amalaa', translation: 'Indeed, those who have believed and done righteous deeds - indeed, We will not allow to be lost the reward of any who did well in deeds', audioId: 2170 },
      { number: 31, arabic: 'أُولَٰئِكَ لَهُمْ جَنَّاتُ عَدْنٍ تَجْرِي مِن تَحْتِهِمُ الْأَنْهَارُ يُحَلَّوْنَ فِيهَا مِنْ أَسَاوِرَ مِن ذَهَبٍ وَيَلْبَسُونَ ثِيَابًا خُضْرًا مِّن سُندُسٍ وَإِسْتَبْرَقٍ مُّتَّكِئِينَ فِيهَا عَلَى الْأَرَائِكِ ۚ نِعْمَ الثَّوَابُ وَحَسُنَتْ مُرْتَفَقًا', transliteration: 'Ulaaa\'ika lahum Jannaatu \'Adnin tajree min tahtihimul-anhaaru yuhallawna feehaa min asaawira min zahabinw-wa yalbasoona siyaaban khudram-min sundusinw-wa istabraqim-muttaki\'eena feehaa \'alal-araaa\'ik; ni\'mas-sawaab; wa hasunat murtafaqaa', translation: 'Those will have gardens of perpetual residence; beneath them rivers will flow. They will be adorned therein with bracelets of gold and will wear green garments of fine silk and brocade, reclining therein on adorned couches. Excellent is the reward, and good is the resting place', audioId: 2171 },
      { number: 32, arabic: 'وَاضْرِبْ لَهُم مَّثَلًا رَّجُلَيْنِ جَعَلْنَا لِأَحَدِهِمَا جَنَّتَيْنِ مِنْ أَعْنَابٍ وَحَفَفْنَاهُمَا بِنَخْلٍ وَجَعَلْنَا بَيْنَهُمَا زَرْعًا', transliteration: 'Wadrib lahum masalar-rajulaini ja\'alnaa li\'ahadihimaa jannataini min a\'naabinw-wa hafafnaahumaa binakhlinw-wa ja\'alnaa bainahumaa zar\'aa', translation: 'And present to them an example of two men: We granted to one of them two gardens of grapevines, and We bordered them with palm trees and placed between them fields of crops', audioId: 2172 },
      { number: 33, arabic: 'كِلْتَا الْجَنَّتَيْنِ آتَتْ أُكُلَهَا وَلَمْ تَظْلِم مِّنْهُ شَيْئًا ۚ وَفَجَّرْنَا خِلَالَهُمَا نَهَرًا', transliteration: 'Kiltal-jannataini aatat ukulahaa wa lam tazlim minhu shai\'aa; wa fajjarnaa khilaalahuma naharaa', translation: 'Each of the two gardens produced its fruit and did not fall short thereof in anything. And We caused to gush forth within them a river', audioId: 2173 },
      { number: 34, arabic: 'وَكَانَ لَهُ ثَمَرٌ فَقَالَ لِصَاحِبِهِ وَهُوَ يُحَاوِرُهُ أَنَا أَكْثَرُ مِنكَ مَالًا وَأَعَزُّ نَفَرًا', transliteration: 'Wa kaana lahoo samarun faqaala lisaahibihee wa huwa yuhaawiruhoo ana aksaru minka maalanw-wa a\'azzu nafaraa', translation: 'And he had fruit, so he said to his companion while he was conversing with him, "I am greater than you in wealth and mightier in numbers of men"', audioId: 2174 },
      { number: 35, arabic: 'وَدَخَلَ جَنَّتَهُ وَهُوَ ظَالِمٌ لِّنَفْسِهِ قَالَ مَا أَظُنُّ أَن تَبِيدَ هَٰذِهِ أَبَدًا', transliteration: 'Wa dakhala jannatahoo wa huwa zaalimul-linafsihee qaala maaa azunnu an tabeeda haazihee abadaa', translation: 'And he entered his garden while he was unjust to himself. He said, "I do not think that this will perish - ever"', audioId: 2175 },
      { number: 36, arabic: 'وَمَا أَظُنُّ السَّاعَةَ قَائِمَةً وَلَئِن رُّدِدتُّ إِلَىٰ رَبِّي لَأَجِدَنَّ خَيْرًا مِّنْهَا مُنقَلَبًا', transliteration: 'Wa maaa azunnus-Saa\'ata qaaa\'imatanw-wa la\'ir-ruddittu ilaa Rabbee la\'ajidanna khairam-minhaa munqalabaa', translation: 'And I do not think the Hour will occur. And even if I should be brought back to my Lord, I will surely find better than this as a return', audioId: 2176 },
      { number: 37, arabic: 'قَالَ لَهُ صَاحِبُهُ وَهُوَ يُحَاوِرُهُ أَكَفَرْتَ بِالَّذِي خَلَقَكَ مِن تُرَابٍ ثُمَّ مِن نُّطْفَةٍ ثُمَّ سَوَّاكَ رَجُلًا', transliteration: 'Qaala lahoo saahibuhoo wa huwa yuhaawiruhoo akafarta billazee khalaqaka min turaabin summa min nutfatin summa sawwaaka rajulaa', translation: 'His companion said to him while he was conversing with him, "Have you disbelieved in He who created you from dust and then from a sperm-drop and then proportioned you as a man?', audioId: 2177 },
      { number: 38, arabic: 'لَّٰكِنَّا هُوَ اللَّهُ رَبِّي وَلَا أُشْرِكُ بِرَبِّي أَحَدًا', transliteration: 'Laakinaa Huwal-laahu Rabbee wa laaa ushriku bi Rabbeee ahadaa', translation: 'But as for me, He is Allah, my Lord, and I do not associate with my Lord anyone', audioId: 2178 },
      { number: 39, arabic: 'وَلَوْلَا إِذْ دَخَلْتَ جَنَّتَكَ قُلْتَ مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ ۚ إِن تَرَنِ أَنَا أَقَلَّ مِنكَ مَالًا وَوَلَدًا', transliteration: 'Wa law laaa iz dakhalta jannataka qulta maa shaaa\'al-laahu laa quwwata illaa billaah; in tarani ana aqalla minka maalanw-wa waladaa', translation: 'And why did you, when you entered your garden, not say, "What Allah willed has occurred; there is no power except in Allah"? Although you see me less than you in wealth and children', audioId: 2179 },
      { number: 40, arabic: 'فَعَسَىٰ رَبِّي أَن يُؤْتِيَنِ خَيْرًا مِّن جَنَّتِكَ وَيُرْسِلَ عَلَيْهَا حُسْبَانًا مِّنَ السَّمَاءِ فَتُصْبِحَ صَعِيدًا زَلَقًا', transliteration: 'Fa\'asaa Rabbeee ai-yu\'tiyani khairam-min jannatika wa yursila \'alaihaa husbaanan minas-samaaa\'i fatusbiha sa\'eedan zalaqaa', translation: 'It may be that my Lord will give me something better than your garden and will send upon it a calamity from the sky, and it will become a smooth, dusty ground', audioId: 2180 },
      { number: 41, arabic: 'أَوْ يُصْبِحَ مَاؤُهَا غَوْرًا فَلَن تَسْتَطِيعَ لَهُ طَلَبًا', transliteration: 'Aw yusbiha maaa\'uhaa ghawran falan tastatee\'a lahoo talabaa', translation: 'Or its water will become sunken into the earth, so you would never be able to seek it', audioId: 2181 },
      { number: 42, arabic: 'وَأُحِيطَ بِثَمَرِهِ فَأَصْبَحَ يُقَلِّبُ كَفَّيْهِ عَلَىٰ مَا أَنفَقَ فِيهَا وَهِيَ خَاوِيَةٌ عَلَىٰ عُرُوشِهَا وَيَقُولُ يَا لَيْتَنِي لَمْ أُشْرِكْ بِرَبِّي أَحَدًا', transliteration: 'Wa uheeta bisamarihee fa\'asbaha yuqallibu kaffaihi \'alaa maaa anfaqa feehaa wa hiya khaawiyatun \'alaa \'urooshihaa wa yaqoolu yaa laitanee lam ushrik bi Rabbeee ahadaa', translation: 'And his fruits were encompassed by ruin, so he began turning his hands about in regret over what he had spent on it, while it had collapsed upon its trellises, and said, "Oh, I wish I had not associated with my Lord anyone"', audioId: 2182 },
      { number: 43, arabic: 'وَلَمْ تَكُن لَّهُ فِئَةٌ يَنصُرُونَهُ مِن دُونِ اللَّهِ وَمَا كَانَ مُنتَصِرًا', transliteration: 'Wa lam takul-lahoo fi\'atuny-yansuroonahoo min doonil-laahi wa maa kaana muntasiraa', translation: 'And there was for him no company to aid him other than Allah, nor could he defend himself', audioId: 2183 },
      { number: 44, arabic: 'هُنَالِكَ الْوَلَايَةُ لِلَّهِ الْحَقِّ ۚ هُوَ خَيْرٌ ثَوَابًا وَخَيْرٌ عُقْبًا', transliteration: 'Hunaalikal-walaayatu lillaahil-haqq; Huwa khairun sawaabanw-wa khairun \'uqbaa', translation: 'There the authority is completely for Allah, the Truth. He is best in reward and best in outcome', audioId: 2184 },
      { number: 45, arabic: 'وَاضْرِبْ لَهُم مَّثَلَ الْحَيَاةِ الدُّنْيَا كَمَاءٍ أَنزَلْنَاهُ مِنَ السَّمَاءِ فَاخْتَلَطَ بِهِ نَبَاتُ الْأَرْضِ فَأَصْبَحَ هَشِيمًا تَذْرُوهُ الرِّيَاحُ ۗ وَكَانَ اللَّهُ عَلَىٰ كُلِّ شَيْءٍ مُّقْتَدِرًا', transliteration: 'Wadrib lahum masalal-hayaatid-dunyaa kamaaa\'in anzalnaahu minas-samaaa\'i fakhtalata bihee nabaatul-ardi fa\'asbaha hasheeman tazroo hur-riyaah; wa kaanal-laahu \'alaa kulli shai\'im-muqtadiraa', translation: 'And present to them the example of the life of this world, its being like rain which We send down from the sky, and the vegetation of the earth mingles with it and then it becomes dry remnants, scattered by the winds. And Allah is ever, over all things, Perfect in Ability', audioId: 2185 },
      { number: 46, arabic: 'الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا ۖ وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ عِندَ رَبِّكَ ثَوَابًا وَخَيْرٌ أَمَلًا', transliteration: 'Almaalu walbanoona zeenatul-hayaatid-dunyaa wal-baaqiyaatus-saalihaatu khairun \'inda Rabbika sawaabanw-wa khairun amalaa', translation: 'Wealth and children are but adornment of the worldly life. But the enduring good deeds are better to your Lord for reward and better for one\'s hope', audioId: 2186 },
      { number: 47, arabic: 'وَيَوْمَ نُسَيِّرُ الْجِبَالَ وَتَرَى الْأَرْضَ بَارِزَةً وَحَشَرْنَاهُمْ فَلَمْ نُغَادِرْ مِنْهُمْ أَحَدًا', transliteration: 'Wa Yawma nusayyirul-jibaala wa taral-arda baarizatanw-wa hasharnaahum falam nughaadir minhum ahadaa', translation: 'And mention the Day We will remove the mountains and you will see the earth prominent, and We will gather them and not leave behind from them anyone', audioId: 2187 },
      { number: 48, arabic: 'وَعُرِضُوا عَلَىٰ رَبِّكَ صَفًّا لَّقَدْ جِئْتُمُونَا كَمَا خَلَقْنَاكُمْ أَوَّلَ مَرَّةٍ ۚ بَلْ زَعَمْتُمْ أَلَّن نَّجْعَلَ لَكُم مَّوْعِدًا', transliteration: 'Wa \'uridoo \'alaa Rabbika saffaa; laqad ji\'tumoonaa kamaa khalaqnaakum awwala marrah; bal za\'amtum allannaj\'ala lakum maw\'idaa', translation: 'And they will be presented before your Lord in rows, and He will say, "You have certainly come to Us just as We created you the first time. But you claimed that We would never make for you an appointment"', audioId: 2188 },
      { number: 49, arabic: 'وَوُضِعَ الْكِتَابُ فَتَرَى الْمُجْرِمِينَ مُشْفِقِينَ مِمَّا فِيهِ وَيَقُولُونَ يَا وَيْلَتَنَا مَالِ هَٰذَا الْكِتَابِ لَا يُغَادِرُ صَغِيرَةً وَلَا كَبِيرَةً إِلَّا أَحْصَاهَا ۚ وَوَجَدُوا مَا عَمِلُوا حَاضِرًا ۗ وَلَا يَظْلِمُ رَبُّكَ أَحَدًا', transliteration: 'Wa wudi\'al-Kitaabu fataral-mujrimeena mushfiqeena mimmaa feehi wa yaqooloona yaa wailatanaa maali haazal-Kitaabi laa yughaadiru sagheeratanw-wa laa kabeeratan illaaa ahsaahaa; wa wajadoo maa \'amiloo haadiraa; wa laa yazlimu Rabbuka ahadaa', translation: 'And the record of deeds will be placed open, and you will see the criminals fearful of that within it, and they will say, "Oh, woe to us! What is this book that leaves nothing small or great except that it has enumerated it?" And they will find what they did present before them. And your Lord does injustice to no one', audioId: 2189 },
      { number: 50, arabic: 'وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ كَانَ مِنَ الْجِنِّ فَفَسَقَ عَنْ أَمْرِ رَبِّهِ ۗ أَفَتَتَّخِذُونَهُ وَذُرِّيَّتَهُ أَوْلِيَاءَ مِن دُونِي وَهُمْ لَكُمْ عَدُوٌّ ۚ بِئْسَ لِلظَّالِمِينَ بَدَلًا', transliteration: 'Wa iz qulnaa lilmalaaa\'ikatis-judoo li\'Aadama fasajadooo illaaa Ibleesa kaana minal-jinni fafasaqa \'an amri Rabbih; afatattakhizoonahoo wa zurriyyatahooo awliyaaa\'a min doonee wa hum lakum \'aduww; bi\'sa lizzaalimeena badalaa', translation: 'And mention when We said to the angels, "Prostrate to Adam," and they prostrated, except for Iblees. He was of the jinn and departed from the command of his Lord. Then will you take him and his descendants as allies other than Me while they are enemies to you? Wretched it is for the wrongdoers as an exchange', audioId: 2190 },
      { number: 51, arabic: 'مَّا أَشْهَدتُّهُمْ خَلْقَ السَّمَاوَاتِ وَالْأَرْضِ وَلَا خَلْقَ أَنفُسِهِمْ وَمَا كُنتُ مُتَّخِذَ الْمُضِلِّينَ عَضُدًا', transliteration: 'Maaa ash-hattuhum khalqas-samaawaati wal-ardi wa laa khalqa anfusihim wa maa kuntu muttakhizal-mudilleena \'adudaa', translation: 'I did not make them witness to the creation of the heavens and the earth or to the creation of themselves, and I would not have taken the misguiders as assistants', audioId: 2191 },
      { number: 52, arabic: 'وَيَوْمَ يَقُولُ نَادُوا شُرَكَائِيَ الَّذِينَ زَعَمْتُمْ فَدَعَوْهُمْ فَلَمْ يَسْتَجِيبُوا لَهُمْ وَجَعَلْنَا بَيْنَهُم مَّوْبِقًا', transliteration: 'Wa Yawma yaqoolu naadoo shurakaaa\'i yal-lazeena za\'amtum fada\'awhum falam yastajeeboo lahum wa ja\'alnaa bainahum mawbiqaa', translation: 'And warn of the Day when He will say, "Call My partners whom you claimed," and they will invoke them, but they will not respond to them. And We will put between them a valley of destruction', audioId: 2192 },
      { number: 53, arabic: 'وَرَأَى الْمُجْرِمُونَ النَّارَ فَظَنُّوا أَنَّهُم مُّوَاقِعُوهَا وَلَمْ يَجِدُوا عَنْهَا مَصْرِفًا', transliteration: 'Wa ra\'al-mujrimoonan-Naara fazannooo annahum muwaaqi\'oohaa wa lam yajidoo \'anhaa masrifaa', translation: 'And the criminals will see the Fire and will be certain that they are to fall therein. And they will not find from it a way elsewhere', audioId: 2193 },
      { number: 54, arabic: 'وَلَقَدْ صَرَّفْنَا فِي هَٰذَا الْقُرْآنِ لِلنَّاسِ مِن كُلِّ مَثَلٍ ۚ وَكَانَ الْإِنسَانُ أَكْثَرَ شَيْءٍ جَدَلًا', transliteration: 'Wa laqad sarrafnaa fee haazal-Qur\'aani linnaasi min kulli masal; wa kaanal-insaanu aksara shai\'in jadalaa', translation: 'And We have certainly diversified in this Quran for the people from every kind of example; but man has ever been, most of anything, prone to dispute', audioId: 2194 },
      { number: 55, arabic: 'وَمَا مَنَعَ النَّاسَ أَن يُؤْمِنُوا إِذْ جَاءَهُمُ الْهُدَىٰ وَيَسْتَغْفِرُوا رَبَّهُمْ إِلَّا أَن تَأْتِيَهُمْ سُنَّةُ الْأَوَّلِينَ أَوْ يَأْتِيَهُمُ الْعَذَابُ قُبُلًا', transliteration: 'Wa maa mana\'an-naasa ai-yu\'minooo iz jaaa\'ahumul-hudaa wa yastaghfiroo Rabbahum illaaa an ta\'tiyahum sunnatul-awwaleena aw ya\'tiyahumul-\'azaabu qubulaa', translation: 'And nothing has prevented the people from believing when guidance came to them and from asking forgiveness of their Lord except that there must befall them the tradition of the former peoples or that the punishment should come directly before them', audioId: 2195 },
      { number: 56, arabic: 'وَمَا نُرْسِلُ الْمُرْسَلِينَ إِلَّا مُبَشِّرِينَ وَمُنذِرِينَ ۚ وَيُجَادِلُ الَّذِينَ كَفَرُوا بِالْبَاطِلِ لِيُدْحِضُوا بِهِ الْحَقَّ ۖ وَاتَّخَذُوا آيَاتِي وَمَا أُنذِرُوا هُزُوًا', transliteration: 'Wa maa nursil mursaleena illaa mubashshireena wa munzireen; wa yujaadilul-lazeena kafaroo bilbaatili liyudhidoo bihil-haqq; wattakhazooo Aayaatee wa maaa unziroo huzuwaa', translation: 'And We send not the messengers except as bringers of good tidings and warners. And those who disbelieve dispute by using falsehood to attempt to invalidate thereby the truth and have taken My verses, and that of which they are warned, in ridicule', audioId: 2196 },
      { number: 57, arabic: 'وَمَنْ أَظْلَمُ مِمَّن ذُكِّرَ بِآيَاتِ رَبِّهِ فَأَعْرَضَ عَنْهَا وَنَسِيَ مَا قَدَّمَتْ يَدَاهُ ۚ إِنَّا جَعَلْنَا عَلَىٰ قُلُوبِهِمْ أَكِنَّةً أَن يَفْقَهُوهُ وَفِي آذَانِهِمْ وَقْرًا ۖ وَإِن تَدْعُهُمْ إِلَى الْهُدَىٰ فَلَن يَهْتَدُوا إِذًا أَبَدًا', transliteration: 'Wa man azlamu mimman zukkira bi\'Aayaati Rabbihee fa\'arada \'anhaa wa nasiya maa qaddamat yadaah; innaa ja\'alnaa \'alaa quloobihim akinnatan ai-yafqahoohu wa feee aazaanihim waqraa; wa in tad\'uhum ilal-hudaa falai-yahtadooo izan abadaa', translation: 'And who is more unjust than one who is reminded of the verses of his Lord but turns away from them and forgets what his hands have put forth? Indeed, We have placed over their hearts coverings, lest they understand it, and in their ears deafness. And if you invite them to guidance - they will never be guided, then - ever', audioId: 2197 },
      { number: 58, arabic: 'وَرَبُّكَ الْغَفُورُ ذُو الرَّحْمَةِ ۖ لَوْ يُؤَاخِذُهُم بِمَا كَسَبُوا لَعَجَّلَ لَهُمُ الْعَذَابَ ۚ بَل لَّهُم مَّوْعِدٌ لَّن يَجِدُوا مِن دُونِهِ مَوْئِلًا', transliteration: 'Wa Rabbukal-Ghafooru zur-rahmati law yu\'aakhizuhum bimaa kasaboo la\'ajjala lahumul-\'azaab; bal lahum maw\'idul-lai-yajidoo min doonihee maw\'ilaa', translation: 'And your Lord is the Forgiving, Full of Mercy. If He were to impose blame upon them for what they earned, He would have hastened for them the punishment. Rather, for them is an appointment from which they will never find an escape', audioId: 2198 },
      { number: 59, arabic: 'وَتِلْكَ الْقُرَىٰ أَهْلَكْنَاهُمْ لَمَّا ظَلَمُوا وَجَعَلْنَا لِمَهْلِكِهِم مَّوْعِدًا', transliteration: 'Wa tilkal-quraaa ahlaknaahum lammaa zalamoo wa ja\'alnaa limahlikihim maw\'idaa', translation: 'And those cities - We destroyed them when they wronged, and We made for their destruction an appointed time', audioId: 2199 },
      { number: 60, arabic: 'وَإِذْ قَالَ مُوسَىٰ لِفَتَاهُ لَا أَبْرَحُ حَتَّىٰ أَبْلُغَ مَجْمَعَ الْبَحْرَيْنِ أَوْ أَمْضِيَ حُقُبًا', transliteration: 'Wa iz qaala Moosaa lifataahu laaa abrahu hattaaa ablugha majma\'al-bahraini aw amdiya huqubaa', translation: 'And mention when Moses said to his servant, "I will not cease traveling until I reach the junction of the two seas or continue for a long period"', audioId: 2200 },
      { number: 61, arabic: 'فَلَمَّا بَلَغَا مَجْمَعَ بَيْنِهِمَا نَسِيَا حُوتَهُمَا فَاتَّخَذَ سَبِيلَهُ فِي الْبَحْرِ سَرَبًا', transliteration: 'Falammaa balaghaa majma\'a bainihimaa nasiyaa hootahumaa fattakhaza sabeelahoo fil-bahri sarabaa', translation: 'But when they reached the junction between them, they forgot their fish, and it took its course into the sea, slipping away', audioId: 2201 },
      { number: 62, arabic: 'فَلَمَّا جَاوَزَا قَالَ لِفَتَاهُ آتِنَا غَدَاءَنَا لَقَدْ لَقِينَا مِن سَفَرِنَا هَٰذَا نَصَبًا', transliteration: 'Falammaa jaawazaa qaala lifataahu aatinaa ghadaaa\'anaa laqad laqeenaa min safarinaa haazaa nasabaa', translation: 'So when they had passed beyond it, Moses said to his boy, "Bring us our morning meal. We have certainly suffered in this, our journey, much fatigue"', audioId: 2202 },
      { number: 63, arabic: 'قَالَ أَرَأَيْتَ إِذْ أَوَيْنَا إِلَى الصَّخْرَةِ فَإِنِّي نَسِيتُ الْحُوتَ وَمَا أَنسَانِيهُ إِلَّا الشَّيْطَانُ أَنْ أَذْكُرَهُ ۚ وَاتَّخَذَ سَبِيلَهُ فِي الْبَحْرِ عَجَبًا', transliteration: 'Qaala ara\'aita iz awainaaa ilas-sakhrati fa\'innee naseetul-hoota wa maaa ansaaneehu illash-Shaitaanu an azkurah; wattakhaza sabeelahoo fil-bahri \'ajabaa', translation: 'He said, "Did you see when we retired to the rock? Indeed, I forgot there the fish. And none made me forget it except Satan - that I should mention it. And it took its course into the sea amazingly"', audioId: 2203 },
      { number: 64, arabic: 'قَالَ ذَٰلِكَ مَا كُنَّا نَبْغِ ۚ فَارْتَدَّا عَلَىٰ آثَارِهِمَا قَصَصًا', transliteration: 'Qaala zaalika maa kunnaa nabghi fartaddaa \'alaaa aasaarihimaa qasasaa', translation: 'Moses said, "That is what we were seeking." So they returned, following their footprints', audioId: 2204 },
      { number: 65, arabic: 'فَوَجَدَا عَبْدًا مِّنْ عِبَادِنَا آتَيْنَاهُ رَحْمَةً مِّنْ عِندِنَا وَعَلَّمْنَاهُ مِن لَّدُنَّا عِلْمًا', transliteration: 'Fawajadaa \'abdam-min \'ibaadinaaa aatainaahu rahmatam-min \'indinaa wa \'allamnaahu mil-ladunnaa \'ilmaa', translation: 'And they found a servant from among Our servants to whom we had given mercy from Us and had taught him from Us a certain knowledge', audioId: 2205 },
      { number: 66, arabic: 'قَالَ لَهُ مُوسَىٰ هَلْ أَتَّبِعُكَ عَلَىٰ أَن تُعَلِّمَنِ مِمَّا عُلِّمْتَ رُشْدًا', transliteration: 'Qaala lahoo Moosaa hal attabi\'uka \'alaaa an tu\'allimani mimmaa \'ullimta rushdaa', translation: 'Moses said to him, "May I follow you on the condition that you teach me from what you have been taught of sound judgment?"', audioId: 2206 },
      { number: 67, arabic: 'قَالَ إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ صَبْرًا', transliteration: 'Qaala innaka lan tastatee\'a ma\'iya sabraa', translation: 'He said, "Indeed, with me you will never be able to have patience"', audioId: 2207 },
      { number: 68, arabic: 'وَكَيْفَ تَصْبِرُ عَلَىٰ مَا لَمْ تُحِطْ بِهِ خُبْرًا', transliteration: 'Wa kaifa tasbiru \'alaa maa lam tuhit bihee khubraa', translation: 'And how can you have patience for what you do not encompass in knowledge?', audioId: 2208 },
      { number: 69, arabic: 'قَالَ سَتَجِدُنِي إِن شَاءَ اللَّهُ صَابِرًا وَلَا أَعْصِي لَكَ أَمْرًا', transliteration: 'Qaala satajidunee in shaaa\'al-laahu saabiranw-wa laaa a\'see laka amraa', translation: 'Moses said, "You will find me, if Allah wills, patient, and I will not disobey you in any order"', audioId: 2209 },
      { number: 70, arabic: 'قَالَ فَإِنِ اتَّبَعْتَنِي فَلَا تَسْأَلْنِي عَن شَيْءٍ حَتَّىٰ أُحْدِثَ لَكَ مِنْهُ ذِكْرًا', transliteration: 'Qaala fa\'init-taba\'tanee falaa tas\'alnee \'an shai\'in hattaaa uhdisa laka minhu zikraa', translation: 'He said, "Then if you follow me, do not ask me about anything until I make to you about it mention"', audioId: 2210 },
      { number: 71, arabic: 'فَانطَلَقَا حَتَّىٰ إِذَا رَكِبَا فِي السَّفِينَةِ خَرَقَهَا ۖ قَالَ أَخَرَقْتَهَا لِتُغْرِقَ أَهْلَهَا لَقَدْ جِئْتَ شَيْئًا إِمْرًا', transliteration: 'Fantalaqaa hattaaa izaa rakibaa fis-safeenati kharaqahaa qaala akharaqtahaa litughriqa ahlahaa laqad ji\'ta shai\'an imraa', translation: 'So they set out, until when they had embarked on the ship, he tore it open. Moses said, "Have you torn it open to drown its people? You have certainly done a grave thing"', audioId: 2211 },
      { number: 72, arabic: 'قَالَ أَلَمْ أَقُلْ إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ صَبْرًا', transliteration: 'Qaala alam aqul innaka lan tastatee\'a ma\'iya sabraa', translation: 'He said, "Did I not say that with me you would never be able to have patience?"', audioId: 2212 },
      { number: 73, arabic: 'قَالَ لَا تُؤَاخِذْنِي بِمَا نَسِيتُ وَلَا تُرْهِقْنِي مِنْ أَمْرِي عُسْرًا', transliteration: 'Qaala laa tu\'aakhiznee bimaa naseetu wa laa turhiqnee min amree \'usraa', translation: 'Moses said, "Do not blame me for what I forgot and do not cover me in my matter with difficulty"', audioId: 2213 },
      { number: 74, arabic: 'فَانطَلَقَا حَتَّىٰ إِذَا لَقِيَا غُلَامًا فَقَتَلَهُ قَالَ أَقَتَلْتَ نَفْسًا زَكِيَّةً بِغَيْرِ نَفْسٍ لَّقَدْ جِئْتَ شَيْئًا نُّكْرًا', transliteration: 'Fantalaqaa hattaaa izaa laqiyaa ghulaaman faqatalahoo qaala aqatalta nafsan zakiyyatam bighairi nafsil-laqad ji\'ta shai\'an nukraa', translation: 'So they set out, until when they met a boy, he killed him. Moses said, "Have you killed a pure soul for other than having killed a soul? You have certainly done a deplorable thing"', audioId: 2214 },
      { number: 75, arabic: 'قَالَ أَلَمْ أَقُل لَّكَ إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ صَبْرًا', transliteration: 'Qaala alam aqul laka innaka lan tastatee\'a ma\'iya sabraa', translation: 'He said, "Did I not tell you that with me you would never be able to have patience?"', audioId: 2215 },
      { number: 76, arabic: 'قَالَ إِن سَأَلْتُكَ عَن شَيْءٍ بَعْدَهَا فَلَا تُصَاحِبْنِي ۖ قَدْ بَلَغْتَ مِن لَّدُنِّي عُذْرًا', transliteration: 'Qaala in sa\'altuka \'an shai\'im ba\'dahaa falaa tusaahibnee qad balaghta mil-ladunnee \'uzraa', translation: 'Moses said, "If I should ask you about anything after this, then do not keep me as a companion. You have obtained from me an excuse"', audioId: 2216 },
      { number: 77, arabic: 'فَانطَلَقَا حَتَّىٰ إِذَا أَتَيَا أَهْلَ قَرْيَةٍ اسْتَطْعَمَا أَهْلَهَا فَأَبَوْا أَن يُضَيِّفُوهُمَا فَوَجَدَا فِيهَا جِدَارًا يُرِيدُ أَن يَنقَضَّ فَأَقَامَهُ ۖ قَالَ لَوْ شِئْتَ لَاتَّخَذْتَ عَلَيْهِ أَجْرًا', transliteration: 'Fantalaqaa hattaaa izaaa atayaaa ahla qaryatinis-tat\'amaaa ahlahaa fa\'abaw ai-yudayyifoohumaa fawajadaa feehaa jidaarany-yureedu ai-yanqadda fa\'aqaamah; qaala law shi\'ta lattakhazta \'alaihi ajraa', translation: 'So they set out, until when they came to the people of a town, they asked its people for food, but they refused to offer them hospitality. And they found therein a wall about to collapse, so he restored it. Moses said, "If you wished, you could have taken for it a payment"', audioId: 2217 },
      { number: 78, arabic: 'قَالَ هَٰذَا فِرَاقُ بَيْنِي وَبَيْنِكَ ۚ سَأُنَبِّئُكَ بِتَأْوِيلِ مَا لَمْ تَسْتَطِع عَّلَيْهِ صَبْرًا', transliteration: 'Qaala haazaa firaaqu bainee wa bainik; sa\'unabbi\'uka bita\'weeli maa lam tastati\' \'alaihi sabraa', translation: 'He said, "This is parting between me and you. I will inform you of the interpretation of that about which you could not have patience"', audioId: 2218 },
      { number: 79, arabic: 'أَمَّا السَّفِينَةُ فَكَانَتْ لِمَسَاكِينَ يَعْمَلُونَ فِي الْبَحْرِ فَأَرَدتُّ أَنْ أَعِيبَهَا وَكَانَ وَرَاءَهُم مَّلِكٌ يَأْخُذُ كُلَّ سَفِينَةٍ غَصْبًا', transliteration: 'Ammas-safeenatu fakaanat limasaakeena ya\'maloona fil-bahri fa\'arattu an a\'eebahaa wa kaana waraaa\'ahum malikun ya\'khuzu kulla safeenatin ghasbaa', translation: 'As for the ship, it belonged to poor people working at sea. So I intended to cause defect in it as there was after them a king who seized every good ship by force', audioId: 2219 },
      { number: 80, arabic: 'وَأَمَّا الْغُلَامُ فَكَانَ أَبَوَاهُ مُؤْمِنَيْنِ فَخَشِينَا أَن يُرْهِقَهُمَا طُغْيَانًا وَكُفْرًا', transliteration: 'Wa ammal-ghulaamu fakaana abawaahu mu\'minaini fakhasheeanaaa ai-yurhiqahumaa tughyaananw-wa kufraa', translation: 'And as for the boy, his parents were believers, and we feared that he would overburden them by transgression and disbelief', audioId: 2220 },
      { number: 81, arabic: 'فَأَرَدْنَا أَن يُبْدِلَهُمَا رَبُّهُمَا خَيْرًا مِّنْهُ زَكَاةً وَأَقْرَبَ رُحْمًا', transliteration: 'Fa\'aradnaaa ai-yubdilahumaa Rabbuhumaa khairam-minhu zakaatanw-wa aqraba ruhmaa', translation: 'So we intended that their Lord should substitute for them one better than him in purity and nearer to mercy', audioId: 2221 },
      { number: 82, arabic: 'وَأَمَّا الْجِدَارُ فَكَانَ لِغُلَامَيْنِ يَتِيمَيْنِ فِي الْمَدِينَةِ وَكَانَ تَحْتَهُ كَنزٌ لَّهُمَا وَكَانَ أَبُوهُمَا صَالِحًا فَأَرَادَ رَبُّكَ أَن يَبْلُغَا أَشُدَّهُمَا وَيَسْتَخْرِجَا كَنزَهُمَا رَحْمَةً مِّن رَّبِّكَ ۚ وَمَا فَعَلْتُهُ عَنْ أَمْرِي ۚ ذَٰلِكَ تَأْوِيلُ مَا لَمْ تَسْطِع عَّلَيْهِ صَبْرًا', transliteration: 'Wa ammal-jidaaru fakaana lighulaamaini yateemaini fil-madeenati wa kaana tahtahoo kanzul-lahumaa wa kaana aboohumaa saalihan fa\'araada Rabbuka ai-yablughaaa ashuddahumaa wa yastakhrijaa kanzahumaa rahmatam-mir-Rabbik; wa maa fa\'altuhoo \'an amree; zaalika ta\'weelu maa lam tasti\' \'alaihi sabraa', translation: 'And as for the wall, it belonged to two orphan boys in the city, and there was beneath it a treasure for them, and their father had been righteous. So your Lord intended that they reach maturity and extract their treasure, as a mercy from your Lord. And I did it not of my own accord. That is the interpretation of that about which you could not have patience"', audioId: 2222 },
      { number: 83, arabic: 'وَيَسْأَلُونَكَ عَن ذِي الْقَرْنَيْنِ ۖ قُلْ سَأَتْلُو عَلَيْكُم مِّنْهُ ذِكْرًا', transliteration: 'Wa yas\'aloonaka \'an Zil-Qarnaini qul sa\'atloo \'alaikum minhu zikraa', translation: 'And they ask you about Dhul-Qarnayn. Say, "I will recite to you about him a report"', audioId: 2223 },
      { number: 84, arabic: 'إِنَّا مَكَّنَّا لَهُ فِي الْأَرْضِ وَآتَيْنَاهُ مِن كُلِّ شَيْءٍ سَبَبًا', transliteration: 'Innaa makkannaa lahoo fil-ardi wa aatainaahu min kulli shai\'in sababaa', translation: 'Indeed We established him upon the earth, and We gave him to everything a way', audioId: 2224 },
      { number: 85, arabic: 'فَأَتْبَعَ سَبَبًا', transliteration: 'Fa\'atba\'a sababaa', translation: 'So he followed a way', audioId: 2225 },
      { number: 86, arabic: 'حَتَّىٰ إِذَا بَلَغَ مَغْرِبَ الشَّمْسِ وَجَدَهَا تَغْرُبُ فِي عَيْنٍ حَمِئَةٍ وَوَجَدَ عِندَهَا قَوْمًا ۗ قُلْنَا يَا ذَا الْقَرْنَيْنِ إِمَّا أَن تُعَذِّبَ وَإِمَّا أَن تَتَّخِذَ فِيهِمْ حُسْنًا', transliteration: 'Hattaaa izaa balagha maghribash-shamsi wajadahaa taghrubu fee \'ainin hami\'atinw-wa wajada \'indahaa qawmaa; qulnaa yaa Zal-Qarnaini immaaa an tu\'azziba wa immaaa an tattakhiza feehim husnaa', translation: 'Until, when he reached the setting of the sun, he found it setting in a spring of dark mud, and he found near it a people. We said, "O Dhul-Qarnayn, either you punish them or else adopt among them a way of goodness"', audioId: 2226 },
      { number: 87, arabic: 'قَالَ أَمَّا مَن ظَلَمَ فَسَوْفَ نُعَذِّبُهُ ثُمَّ يُرَدُّ إِلَىٰ رَبِّهِ فَيُعَذِّبُهُ عَذَابًا نُّكْرًا', transliteration: 'Qaala ammaa man zalama fasawfa nu\'azzibuhoo summa yuraddu ilaa Rabbihee fa\'azzibuhoo \'azaaban nukraa', translation: 'He said, "As for one who wrongs, we will punish him. Then he will be returned to his Lord, and He will punish him with a terrible punishment"', audioId: 2227 },
      { number: 88, arabic: 'وَأَمَّا مَنْ آمَنَ وَعَمِلَ صَالِحًا فَلَهُ جَزَاءً الْحُسْنَىٰ ۖ وَسَنَقُولُ لَهُ مِنْ أَمْرِنَا يُسْرًا', transliteration: 'Wa ammaa man aamana wa \'amila saalihan falahoo jazaaa\'anil-husnaa wa sanaqoolu lahoo min amrinaa yusraa', translation: 'But as for one who believes and does righteousness, he will have a reward of Paradise, and we will speak to him from our command with ease', audioId: 2228 },
      { number: 89, arabic: 'ثُمَّ أَتْبَعَ سَبَبًا', transliteration: 'Summa atba\'a sababaa', translation: 'Then he followed a way', audioId: 2229 },
      { number: 90, arabic: 'حَتَّىٰ إِذَا بَلَغَ مَطْلِعَ الشَّمْسِ وَجَدَهَا تَطْلُعُ عَلَىٰ قَوْمٍ لَّمْ نَجْعَل لَّهُم مِّن دُونِهَا سِتْرًا', transliteration: 'Hattaaa izaa balagha matli\'ash-shamsi wajadahaa tatlu\'u \'alaa qawmil-lam naj\'al lahum min doonihaa sitraa', translation: 'Until, when he came to the rising of the sun, he found it rising on a people for whom We had not made against it any shield', audioId: 2230 },
      { number: 91, arabic: 'كَذَٰلِكَ وَقَدْ أَحَطْنَا بِمَا لَدَيْهِ خُبْرًا', transliteration: 'Kazaalika wa qad ahatnaa bimaa ladaihi khubraa', translation: 'Thus. And We had encompassed all that he had in knowledge', audioId: 2231 },
      { number: 92, arabic: 'ثُمَّ أَتْبَعَ سَبَبًا', transliteration: 'Summa atba\'a sababaa', translation: 'Then he followed a way', audioId: 2232 },
      { number: 93, arabic: 'حَتَّىٰ إِذَا بَلَغَ بَيْنَ السَّدَّيْنِ وَجَدَ مِن دُونِهِمَا قَوْمًا لَّا يَكَادُونَ يَفْقَهُونَ قَوْلًا', transliteration: 'Hattaaa izaa balagha bainas-saddaini wajada min doonihimaa qawmal-laa yakaa doona yafqahoona qawlaa', translation: 'Until, when he reached a pass between two mountains, he found beside them a people who could hardly understand his speech', audioId: 2233 },
      { number: 94, arabic: 'قَالُوا يَا ذَا الْقَرْنَيْنِ إِنَّ يَأْجُوجَ وَمَأْجُوجَ مُفْسِدُونَ فِي الْأَرْضِ فَهَلْ نَجْعَلُ لَكَ خَرْجًا عَلَىٰ أَن تَجْعَلَ بَيْنَنَا وَبَيْنَهُمْ سَدًّا', transliteration: 'Qaaloo yaa Zal-Qarnaini inna Ya\'jooja wa Ma\'jooja mufsidoona fil-ardi fahal naj\'alu laka kharjan \'alaaa an taj\'ala bainanaa wa bainahum saddaa', translation: 'They said, "O Dhul-Qarnayn, indeed Gog and Magog are great corrupters in the land. So may we assign for you an expenditure that you might make between us and them a barrier?"', audioId: 2234 },
      { number: 95, arabic: 'قَالَ مَا مَكَّنِّي فِيهِ رَبِّي خَيْرٌ فَأَعِينُونِي بِقُوَّةٍ أَجْعَلْ بَيْنَكُمْ وَبَيْنَهُمْ رَدْمًا', transliteration: 'Qaala maa makkannee feehi Rabbee khairun fa\'a\'eenoonee biquwwatin aj\'al bainakum wa bainahum radmaa', translation: 'He said, "That in which my Lord has established me is better than what you offer, but assist me with strength; I will make between you and them a dam"', audioId: 2235 },
      { number: 96, arabic: 'آتُونِي زُبَرَ الْحَدِيدِ ۖ حَتَّىٰ إِذَا سَاوَىٰ بَيْنَ الصَّدَفَيْنِ قَالَ انفُخُوا ۖ حَتَّىٰ إِذَا جَعَلَهُ نَارًا قَالَ آتُونِي أُفْرِغْ عَلَيْهِ قِطْرًا', transliteration: 'Aaatoonee zubaral-hadeed; hattaaa izaa saawaa bainas-sadafaini qaalan-fukhoo hattaaa izaa ja\'alahoo naaran qaala aaatoonee ufrigh \'alaihi qitraa', translation: 'Bring me sheets of iron - until, when he had leveled them between the two mountain walls, he said, "Blow with bellows," until when he had made it like fire, he said, "Bring me, that I may pour over it molten copper"', audioId: 2236 },
      { number: 97, arabic: 'فَمَا اسْطَاعُوا أَن يَظْهَرُوهُ وَمَا اسْتَطَاعُوا لَهُ نَقْبًا', transliteration: 'Famas-taa\'ooo ai-yazharoohu wa mastataa\'oo lahoo naqbaa', translation: 'So they were unable to pass over it, nor were they able to effect in it any penetration', audioId: 2237 },
      { number: 98, arabic: 'قَالَ هَٰذَا رَحْمَةٌ مِّن رَّبِّي ۖ فَإِذَا جَاءَ وَعْدُ رَبِّي جَعَلَهُ دَكَّاءَ ۖ وَكَانَ وَعْدُ رَبِّي حَقًّا', transliteration: 'Qaala haazaa rahmatun mir-Rabbee fa\'izaa jaaa\'a wa\'du Rabbee ja\'alahoo dakkaaa\'a wa kaana wa\'du Rabbee haqqaa', translation: 'He said, "This is a mercy from my Lord; but when the promise of my Lord comes, He will make it level, and ever is the promise of my Lord true"', audioId: 2238 },
      { number: 99, arabic: 'وَتَرَكْنَا بَعْضَهُمْ يَوْمَئِذٍ يَمُوجُ فِي بَعْضٍ ۖ وَنُفِخَ فِي الصُّورِ فَجَمَعْنَاهُمْ جَمْعًا', transliteration: 'Wa taraknaa ba\'dahum Yawma\'iziny-yamooju fee ba\'dinw-wa nufikha fis-Soori fajama\' naahum jam\'aa', translation: 'And We will leave them that day surging over each other, and then the Horn will be blown, and We will assemble them in one assembly', audioId: 2239 },
      { number: 100, arabic: 'وَعَرَضْنَا جَهَنَّمَ يَوْمَئِذٍ لِّلْكَافِرِينَ عَرْضًا', transliteration: 'Wa \'aradnaa Jahannama Yawma\'izil-lil kaafireena \'ardaa', translation: 'And We will present Hell that Day to the Disbelievers, on display', audioId: 2240 },
      { number: 101, arabic: 'الَّذِينَ كَانَتْ أَعْيُنُهُمْ فِي غِطَاءٍ عَن ذِكْرِي وَكَانُوا لَا يَسْتَطِيعُونَ سَمْعًا', transliteration: 'Allazeena kaanat a\'yunuhum fee ghitaaa\'in \'an Zikree wa kaanoo laa yastatee\'oona sam\'aa', translation: 'Those whose eyes had been within a cover removed from My remembrance, and they were not able to hear', audioId: 2241 },
      { number: 102, arabic: 'أَفَحَسِبَ الَّذِينَ كَفَرُوا أَن يَتَّخِذُوا عِبَادِي مِن دُونِي أَوْلِيَاءَ ۚ إِنَّا أَعْتَدْنَا جَهَنَّمَ لِلْكَافِرِينَ نُزُلًا', transliteration: 'Afahasibal-lazeena kafarooo ai-yattakhizoo \'ibaadee min dooneee awliyaaa\'; innaaa a\'tadnaa Jahannama lilkaafireena nuzulaa', translation: 'Then do those who disbelieve think that they can take My servants instead of Me as allies? Indeed, We have prepared Hell for the disbelievers as a lodging', audioId: 2242 },
      { number: 103, arabic: 'قُلْ هَلْ نُنَبِّئُكُم بِالْأَخْسَرِينَ أَعْمَالًا', transliteration: 'Qul hal nunabbi\'ukum bilakhsareena a\'maalaa', translation: 'Say, "Shall we inform you of the greatest losers as to their deeds?"', audioId: 2243 },
      { number: 104, arabic: 'الَّذِينَ ضَلَّ سَعْيُهُمْ فِي الْحَيَاةِ الدُّنْيَا وَهُمْ يَحْسَبُونَ أَنَّهُمْ يُحْسِنُونَ صُنْعًا', transliteration: 'Allazeena dalla sa\'yuhum fil-hayaatid-dunyaa wa hum yahsaboona annahum yuhsinoona sun\'aa', translation: 'They are those whose effort is lost in worldly life, while they think that they are doing well in work', audioId: 2244 },
      { number: 105, arabic: 'أُولَٰئِكَ الَّذِينَ كَفَرُوا بِآيَاتِ رَبِّهِمْ وَلِقَائِهِ فَحَبِطَتْ أَعْمَالُهُمْ فَلَا نُقِيمُ لَهُمْ يَوْمَ الْقِيَامَةِ وَزْنًا', transliteration: 'Ulaaa\'ikal-lazeena kafaroo bi\'Aayaati Rabbihim wa liqaaa\'ihee fahabitat a\'maaluhum falaa nuqeemu lahum Yawmal-Qiyaamati waznaa', translation: 'Those are the ones who disbelieve in the verses of their Lord and in their meeting Him, so their deeds have become worthless; and We will not assign to them on the Day of Resurrection any importance', audioId: 2245 },
      { number: 106, arabic: 'ذَٰلِكَ جَزَاؤُهُمْ جَهَنَّمُ بِمَا كَفَرُوا وَاتَّخَذُوا آيَاتِي وَرُسُلِي هُزُوًا', transliteration: 'Zaalika jazaaa\'uhum Jahannamu bimaa kafaroo wattakhazooo Aayaatee wa Rusulee huzuwaa', translation: 'That is their recompense - Hell - for what they denied and because they took My signs and My messengers in ridicule', audioId: 2246 },
      { number: 107, arabic: 'إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا', transliteration: 'Innal-lazeena aamanoo wa \'amilus-saalihaati kaanat lahum Jannaatul-Firdawsi nuzulaa', translation: 'Indeed, those who have believed and done righteous deeds - they will have the Gardens of Paradise as a lodging', audioId: 2247 },
      { number: 108, arabic: 'خَالِدِينَ فِيهَا لَا يَبْغُونَ عَنْهَا حِوَلًا', transliteration: 'Khaalideena feehaa laa yabghoona \'anhaa hiwalaa', translation: 'Wherein they abide eternally. They will not desire from it any transfer', audioId: 2248 },
      { number: 109, arabic: 'قُل لَّوْ كَانَ الْبَحْرُ مِدَادًا لِّكَلِمَاتِ رَبِّي لَنَفِدَ الْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَاتُ رَبِّي وَلَوْ جِئْنَا بِمِثْلِهِ مَدَدًا', transliteration: 'Qul-law kaanal-bahru midaadal-li Kalimaati Rabbee lanafidal-bahru qabla an tanfada Kalimaatu Rabbee wa law ji\'naa bimislihee madadaa', translation: 'Say, "If the sea were ink for writing the words of my Lord, the sea would be exhausted before the words of my Lord were exhausted, even if We brought the like of it as a supplement"', audioId: 2249 },
      { number: 110, arabic: 'قُلْ إِنَّمَا أَنَا بَشَرٌ مِّثْلُكُمْ يُوحَىٰ إِلَيَّ أَنَّمَا إِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ ۖ فَمَن كَانَ يَرْجُو لِقَاءَ رَبِّهِ فَلْيَعْمَلْ عَمَلًا صَالِحًا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا', transliteration: 'Qul innamaaa ana basharum-mislukum yoohaaa ilaiya annamaaa ilaahukum Ilaahunw-Waahid; faman kaana yarjoo liqaaa\'a Rabbihee falya\'mal \'amalan saalihanw-wa laa yushrik bi\'ibaadati Rabbiheee ahadaa', translation: 'Say, "I am only a man like you, to whom has been revealed that your god is one God. So whoever would hope for the meeting with his Lord - let him do righteous work and not associate in the worship of his Lord anyone"', audioId: 2250 }
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
      if (surah && surah.verses) {
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
      if (surah && surah.verses) {
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
