// Quran Database for Islamic Ruqyah/Healing
// Includes Surah Al-Fatiha, Al-Baqarah (key verses), Al-Falaq, An-Nas

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
        audioId: 6157
      },
      {
        number: 2,
        arabic: 'مِنْ شَرِّ مَا خَلَقَ',
        transliteration: 'Min sharri ma khalaq',
        translation: 'From the evil of that which He created',
        audioId: 6158
      },
      {
        number: 3,
        arabic: 'وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ',
        transliteration: 'Wa min sharri ghasiqin iza waqab',
        translation: 'And from the evil of darkness when it settles',
        audioId: 6159
      },
      {
        number: 4,
        arabic: 'وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
        transliteration: 'Wa min sharrin-naffathati fil-\'uqad',
        translation: 'And from the evil of the blowers in knots (witchcraft)',
        audioId: 6160
      },
      {
        number: 5,
        arabic: 'وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ',
        transliteration: 'Wa min sharri hasidin iza hasad',
        translation: 'And from the evil of an envier when he envies',
        audioId: 6161
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
        audioId: 6162
      },
      {
        number: 2,
        arabic: 'مَلِكِ النَّاسِ',
        transliteration: 'Malikin-nas',
        translation: 'The Sovereign of mankind',
        audioId: 6163
      },
      {
        number: 3,
        arabic: 'إِلَٰهِ النَّاسِ',
        transliteration: 'Ilahin-nas',
        translation: 'The God of mankind',
        audioId: 6164
      },
      {
        number: 4,
        arabic: 'مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
        transliteration: 'Min sharril-waswasil-khannas',
        translation: 'From the evil of the retreating whisperer',
        audioId: 6165
      },
      {
        number: 5,
        arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
        transliteration: 'Allazee yuwaswisu fee sudurin-nas',
        translation: 'Who whispers in the breasts of mankind',
        audioId: 6166
      },
      {
        number: 6,
        arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
        transliteration: 'Minal-jinnati wan-nas',
        translation: 'From among the jinn and mankind',
        audioId: 6167
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

// Helper function to get surah by ID
export const getSurahById = (id) => surahs.find(s => s.id === id);

// Helper function to get verse audio URL
export const getVerseAudioUrl = (audioId) => `${AUDIO_BASE_URL}${audioId}.mp3`;

// Helper function to get dua by ID
export const getDuaById = (id) => healingDuas.find(d => d.id === id);

export default {
  surahs,
  healingDuas,
  ruqyahProgram,
  ruqyahInfo,
  getSurahById,
  getVerseAudioUrl,
  getDuaById
};
