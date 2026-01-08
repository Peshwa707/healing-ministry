/**
 * Spiritual Afflictions Data - Types of Jinn Possession & Related Conditions
 *
 * DISCLAIMER: This information has been compiled and summarized from various online
 * Islamic resources for educational purposes only. It should not be used for
 * self-diagnosis. Always consult qualified Islamic scholars (Raqis) and medical
 * professionals for proper guidance and treatment.
 *
 * Sources: IslamQA, Al Ruqya Online, Ruqyah Central, IslamWeb, and various
 * Islamic scholarly resources.
 */

export const disclaimer = {
  title: 'Important Disclaimer',
  content: `This information has been compiled and summarized from various online Islamic resources for educational purposes only.

It is NOT intended for self-diagnosis or to replace professional consultation.

Key Points:
- Symptoms mentioned may also have natural medical or psychological causes
- Islam encourages seeking both medical treatment and spiritual remedies
- Always consult qualified Islamic scholars (Raqis) for spiritual matters
- Always consult medical professionals to rule out physical/mental health conditions
- The Prophet (peace be upon him) said: "Make use of medical treatment, for Allah has not made a disease without appointing a remedy for it" (Abu Dawud)

May Allah grant healing to all who are afflicted.`,
  sources: [
    'IslamQA.info',
    'Al Ruqya Online (alruqya.com)',
    'Ruqyah Central',
    'IslamWeb.net',
    'Practical Self Ruqya',
    'Various Islamic scholarly writings'
  ]
};

export const typesOfPossession = {
  title: 'Types of Jinn Possession',
  description: 'Islamic scholars and practitioners of Ruqyah have identified different forms of jinn possession based on their characteristics and manifestations.',
  types: [
    {
      id: 'total',
      name: 'Total Possession (Al-Mass Al-Kamil)',
      arabicName: 'المس الكامل',
      description: 'In total possession, the jinn takes complete control over the individual\'s body, mind, and actions.',
      characteristics: [
        'Complete loss of consciousness or awareness',
        'Drastic changes in personality, speech, and behavior',
        'Speaking in different voices or languages',
        'Displaying supernatural physical strength',
        'No recollection of events during possession episodes',
        'May speak as the jinn and reveal information'
      ],
      severity: 'severe'
    },
    {
      id: 'partial',
      name: 'Partial Possession (Al-Mass Al-Juz\'i)',
      arabicName: 'المس الجزئي',
      description: 'The jinn exerts influence over certain aspects of the individual\'s behavior or specific body parts.',
      characteristics: [
        'Affects only certain parts of the body or mind',
        'Intermittent episodes of influence',
        'Person may be aware during episodes',
        'Localized pain or paralysis without medical cause',
        'Mood swings or behavioral changes at specific times',
        'May worsen at night or in certain locations'
      ],
      severity: 'moderate'
    },
    {
      id: 'temporary',
      name: 'Temporary Possession',
      arabicName: 'المس المؤقت',
      description: 'Short-term possession that occurs in episodes, often triggered by specific situations.',
      characteristics: [
        'Comes and goes at intervals',
        'May be triggered by anger, fear, or specific locations',
        'Episodes may last minutes to hours',
        'Person returns to normal between episodes',
        'Often associated with weak moments in faith'
      ],
      severity: 'moderate'
    },
    {
      id: 'permanent',
      name: 'Long-term/Persistent Possession',
      arabicName: 'المس الدائم',
      description: 'Continuous possession where the jinn remains in the body for extended periods.',
      characteristics: [
        'Constant presence of the jinn',
        'Ongoing symptoms that don\'t subside',
        'Chronic health issues without medical explanation',
        'Persistent personality changes',
        'Requires intensive and prolonged treatment'
      ],
      severity: 'severe'
    }
  ]
};

export const causesOfPossession = {
  title: 'Causes of Jinn Possession',
  description: 'Islamic scholars have identified several reasons why jinn may possess humans. Understanding these causes helps in both prevention and treatment.',
  causes: [
    {
      id: 'harm',
      name: 'Harm to Jinn (Often Unintentional)',
      arabicName: 'إيذاء الجن',
      description: 'Accidentally harming jinn can lead to retaliation through possession.',
      examples: [
        'Pouring hot water without saying Bismillah',
        'Urinating in places where jinn reside',
        'Throwing objects that may harm them',
        'Entering their dwelling places suddenly',
        'Killing jinn unknowingly'
      ],
      prevention: 'Always say Bismillah before pouring water, entering bathrooms, changing clothes, and when in secluded places.',
      reference: 'Ibn Taymiyyah mentioned this in his writings on jinn'
    },
    {
      id: 'sihr',
      name: 'Black Magic (Sihr)',
      arabicName: 'السحر',
      description: 'A magician may send a jinn to possess someone through magic rituals.',
      examples: [
        'Magic performed by enemies or jealous people',
        'Magic done for separation or harm',
        'Magic to cause illness or madness',
        'Magic involving jinn contracts'
      ],
      prevention: 'Maintain morning and evening adhkar, recite Surah Al-Baqarah regularly.',
      reference: 'Mentioned in Surah Al-Baqarah 2:102'
    },
    {
      id: 'love',
      name: 'Love/Desire (Ishq)',
      arabicName: 'العشق',
      description: 'A jinn may become attracted to or fall in love with a human.',
      examples: [
        'Physical attraction to the human',
        'Emotional attachment',
        'Possessiveness over the victim',
        'Preventing marriage to humans'
      ],
      prevention: 'Maintain modesty, recite adhkar, avoid being unclothed without saying Bismillah.',
      reference: 'Ibn Taymiyyah discussed this type'
    },
    {
      id: 'sins',
      name: 'Sins and Weak Faith',
      arabicName: 'الذنوب وضعف الإيمان',
      description: 'Distance from Allah and accumulation of sins makes one vulnerable.',
      examples: [
        'Abandoning prayer and worship',
        'Committing major sins',
        'Neglecting remembrance of Allah',
        'Listening to forbidden content',
        'Being in a state of impurity frequently'
      ],
      prevention: 'Maintain regular prayers, seek forgiveness, and stay close to Allah through worship.',
      reference: 'Based on Quran 43:36 - "And whoever is blinded from remembrance of the Most Merciful - We appoint for him a devil"'
    },
    {
      id: 'evil-eye',
      name: 'Evil Eye (Al-Ayn)',
      arabicName: 'العين',
      description: 'The evil eye can open doors for jinn to affect the victim.',
      examples: [
        'Envy from others',
        'Admiration without saying MashaAllah',
        'Jealousy of blessings'
      ],
      prevention: 'Say MashaAllah when admiring, recite protective duas, don\'t display blessings excessively.',
      reference: 'The Prophet (peace be upon him) said: "The evil eye is real" (Bukhari & Muslim)'
    },
    {
      id: 'places',
      name: 'Being in Jinn Dwelling Places',
      arabicName: 'التواجد في أماكن الجن',
      description: 'Spending time in places where jinn commonly reside.',
      examples: [
        'Abandoned buildings',
        'Graveyards (especially at night)',
        'Deserted areas and caves',
        'Dirty or impure places',
        'Areas with running water at night'
      ],
      prevention: 'Recite protective duas before entering such places, avoid them when possible.',
      reference: 'Various hadith about jinn dwelling places'
    }
  ]
};

export const typesOfAfflictions = {
  title: 'Types of Spiritual Afflictions',
  description: 'Beyond direct possession, there are several categories of spiritual afflictions recognized in Islamic tradition.',
  afflictions: [
    {
      id: 'mass',
      name: 'Jinn Possession (Al-Mass)',
      arabicName: 'المس',
      description: 'Direct possession where a jinn enters and resides in the human body.',
      symptoms: {
        physical: [
          'Seizures without medical cause',
          'Paralysis of limbs without medical explanation',
          'Chronic headaches not relieved by medication',
          'Sudden temperature changes in body',
          'Unexplained bruises or scratches',
          'Chronic fatigue despite adequate rest'
        ],
        psychological: [
          'Sudden personality changes',
          'Extreme mood swings',
          'Uncontrollable anger or violence',
          'Deep depression without clear cause',
          'Hearing voices or whispers',
          'Hallucinations'
        ],
        spiritual: [
          'Aversion to Quran recitation',
          'Difficulty performing prayers',
          'Feeling pain when hearing adhaan',
          'Turning away from religious activities',
          'Feeling discomfort in mosques'
        ],
        sleep: [
          'Recurring nightmares',
          'Seeing snakes, dogs, or dark figures in dreams',
          'Sleep paralysis',
          'Waking up screaming or choking',
          'Feeling held down during sleep',
          'Sexual dreams with unknown entities'
        ]
      }
    },
    {
      id: 'sihr',
      name: 'Black Magic (Sihr)',
      arabicName: 'السحر',
      description: 'Magic performed to cause harm, often involving jinn as agents.',
      types: [
        {
          name: 'Sihr at-Tafreeq (Separation Magic)',
          arabicName: 'سحر التفريق',
          description: 'Magic to cause separation between spouses or loved ones.',
          symptoms: [
            'Sudden change from love to hatred toward spouse',
            'Exaggerating minor issues into major conflicts',
            'Seeing spouse as ugly despite their beauty',
            'Constant suspicion without reason',
            'Unexplained desire for divorce'
          ]
        },
        {
          name: 'Sihr al-Mahabbah (Love Magic)',
          arabicName: 'سحر المحبة',
          description: 'Magic to force someone to love another unnaturally.',
          symptoms: [
            'Unnatural obsessive love',
            'Complete submission to one person',
            'Unable to refuse their demands',
            'Constant thoughts about that person'
          ]
        },
        {
          name: 'Sihr al-Junoon (Madness Magic)',
          arabicName: 'سحر الجنون',
          description: 'Magic intended to cause mental instability.',
          symptoms: [
            'Severe confusion and disorientation',
            'Hallucinations and delusions',
            'Erratic and irrational behavior',
            'Memory problems',
            'Speaking incoherently'
          ]
        },
        {
          name: 'Sihr al-Marad (Sickness Magic)',
          arabicName: 'سحر المرض',
          description: 'Magic to cause physical illness.',
          symptoms: [
            'Chronic illness without medical diagnosis',
            'Treatment-resistant conditions',
            'Pain that moves around the body',
            'Symptoms that worsen with treatment'
          ]
        },
        {
          name: 'Sihr al-Khumool (Lethargy Magic)',
          arabicName: 'سحر الخمول',
          description: 'Magic to cause extreme laziness and apathy.',
          symptoms: [
            'Extreme laziness and no motivation',
            'Inability to work or study',
            'Constant desire to sleep',
            'Withdrawal from life activities'
          ]
        },
        {
          name: 'Sihr for Impeding Marriage',
          arabicName: 'سحر تعطيل الزواج',
          description: 'Magic to prevent someone from getting married.',
          symptoms: [
            'Every proposal fails without reason',
            'Potential spouses suddenly change their minds',
            'Feeling undesirable to opposite gender',
            'Constant obstacles to marriage'
          ]
        }
      ],
      generalSymptoms: [
        'Severe stomach pain during ruqyah',
        'Nausea or vomiting (sometimes unusual substances)',
        'Dreams about graves, snakes, or magicians',
        'Finding strange objects in home (talismans, knots)',
        'Feeling knots in chest or stomach'
      ]
    },
    {
      id: 'ayn',
      name: 'Evil Eye (Al-Ayn)',
      arabicName: 'العين',
      description: 'Harm caused by envious or admiring looks, even unintentionally.',
      types: [
        {
          name: 'Ayn (The Eye)',
          arabicName: 'العين',
          description: 'From someone who may know/love you without evil intent'
        },
        {
          name: 'Hasad (Envy)',
          arabicName: 'الحسد',
          description: 'From someone who envies and wishes to remove your blessings'
        },
        {
          name: 'Nafs (Self-Inflicted)',
          arabicName: 'النفس',
          description: 'The admiring eye one can put on themselves'
        },
        {
          name: 'Nathara (From Jinn)',
          arabicName: 'النظرة',
          description: 'The evil eye which comes from the Jinn'
        }
      ],
      symptoms: [
        'Sudden illness after receiving praise or envy',
        'Headaches that move around the head',
        'Yellow pallor in the face',
        'Excessive sweating and urination',
        'Weak appetite',
        'Palpitations and heart discomfort',
        'Pain in lower back and shoulders',
        'Unexplained sadness and anxiety',
        'Sudden loss of blessings (health, wealth, etc.)'
      ],
      hadith: 'The Prophet (peace be upon him) said: "The evil eye is real and if anything were to overtake the divine decree (Qadr), it would have been the evil eye." (Muslim)'
    },
    {
      id: 'aashiq',
      name: 'Jinn Aashiq (Lover Jinn)',
      arabicName: 'الجن العاشق',
      description: 'A jinn that becomes emotionally or physically attached to a human.',
      characteristics: [
        'The jinn believes they are married to the victim',
        'Extreme possessiveness',
        'May cause physical and psychological problems',
        'Often prevents the victim from marrying humans'
      ],
      symptoms: [
        'Feeling someone in bed but seeing nothing',
        'Sexual dreams with unknown entities',
        'Smelling unexplained perfume',
        'Hearing breathing or whispers when alone',
        'No desire to marry despite opportunities',
        'Marriage proposals constantly failing',
        'Feeling undesirable to opposite gender',
        'Low self-esteem without reason',
        'Preferring isolation and solitude',
        'Dreams of being married to unknown persons'
      ],
      causes: [
        'Black magic sent by someone',
        'Evil eye',
        'Harm done to the jinn',
        'The jinn\'s own attraction'
      ]
    },
    {
      id: 'waswas',
      name: 'Whispers (Waswas)',
      arabicName: 'الوسوسة',
      description: 'Persistent negative thoughts and doubts whispered by Shaytan or jinn.',
      symptoms: [
        'Constant doubts about faith',
        'Intrusive blasphemous thoughts',
        'Excessive worry about purity (wudu, prayer)',
        'Repeating acts of worship excessively',
        'Doubts about whether prayers were done correctly',
        'Constant negative self-talk'
      ],
      treatment: 'Seek refuge in Allah, ignore the whispers, don\'t engage with the thoughts, recite "A\'udhu billahi min ash-shaytan ir-rajeem"'
    }
  ]
};

export const protectionMethods = {
  title: 'Protection from Spiritual Afflictions',
  description: 'Islam provides comprehensive guidance on protecting oneself from spiritual harm.',
  methods: [
    {
      id: 'adhkar',
      name: 'Morning & Evening Adhkar',
      arabicName: 'أذكار الصباح والمساء',
      description: 'Daily remembrances that serve as a spiritual shield.',
      importance: 'Ibn al-Qayyim said: "The morning and evening adhkar play the role of a shield; the thicker it is, the more its owner is protected."',
      timing: {
        morning: 'Between Fajr and sunrise',
        evening: 'Between Asr and Maghrib'
      },
      keyAdhkar: [
        'Ayat al-Kursi (once)',
        'Surah Al-Ikhlas (3 times)',
        'Surah Al-Falaq (3 times)',
        'Surah An-Nas (3 times)',
        'Morning/evening duas from Fortress of the Muslim'
      ]
    },
    {
      id: 'quran',
      name: 'Regular Quran Recitation',
      arabicName: 'تلاوة القرآن',
      description: 'The Quran is the greatest protection and cure.',
      recommendations: [
        'Recite Surah Al-Baqarah - drives Shaytan from the home for 3 days',
        'Recite last two verses of Al-Baqarah before sleep',
        'Recite Surah Al-Mulk before sleep',
        'Make daily Quran recitation a habit'
      ],
      hadith: 'The Prophet (peace be upon him) said: "Do not make your houses like graves. Indeed, Shaytan flees from a house in which Surah Al-Baqarah is recited." (Muslim)'
    },
    {
      id: 'salah',
      name: 'Maintaining Prayer',
      arabicName: 'المحافظة على الصلاة',
      description: 'Prayer is the first line of defense against spiritual harm.',
      benefits: [
        'Creates connection with Allah',
        'Provides regular spiritual cleansing',
        'Includes protective recitations',
        'Keeps one mindful of Allah throughout the day'
      ]
    },
    {
      id: 'bismillah',
      name: 'Saying Bismillah',
      arabicName: 'البسملة',
      description: 'Beginning activities with the name of Allah provides protection.',
      occasions: [
        'Before eating and drinking',
        'Before entering the home',
        'Before entering the bathroom',
        'Before changing clothes',
        'Before sleeping',
        'Before intimate relations'
      ]
    },
    {
      id: 'wudu',
      name: 'Maintaining Wudu',
      arabicName: 'الوضوء',
      description: 'Staying in a state of ritual purity provides spiritual protection.',
      benefits: [
        'Creates a spiritual barrier',
        'Increases mindfulness',
        'Prepares for prayer at any time'
      ]
    },
    {
      id: 'dua',
      name: 'Protective Duas',
      arabicName: 'الأدعية',
      description: 'Specific supplications for protection.',
      duas: [
        {
          arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
          transliteration: 'A\'udhu bi kalimat-Illahit-tammaati min sharri ma khalaq',
          translation: 'I seek refuge in the perfect words of Allah from the evil of what He has created.',
          times: 3,
          occasion: 'Morning, evening, and when in a new place'
        },
        {
          arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
          transliteration: 'Bismillahil-ladhi la yadurru ma\'asmihi shay\'un fil-ardi wa la fis-sama\'i wa Huwas-Sami\'ul-\'Alim',
          translation: 'In the name of Allah, with Whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, the All-Knowing.',
          times: 3,
          occasion: 'Morning and evening'
        }
      ]
    }
  ]
};

export const treatmentGuidelines = {
  title: 'Treatment Guidelines',
  description: 'Islamic principles for treating spiritual afflictions.',
  principles: [
    {
      title: 'Seek Both Medical and Spiritual Help',
      description: 'Islam encourages seeking medical treatment alongside spiritual remedies. Many symptoms can have natural causes that require medical attention.'
    },
    {
      title: 'Ruqyah Must Be Shariah-Compliant',
      description: 'Treatment must use only Quran, authentic duas, and remembrance of Allah. Any practice involving shirk, talismans, or unknown words is forbidden.'
    },
    {
      title: 'Self-Ruqyah is Recommended',
      description: 'Every Muslim can perform ruqyah on themselves. It\'s not exclusive to certain individuals.'
    },
    {
      title: 'Patience and Persistence',
      description: 'Treatment may take time. One must remain patient and consistent, never losing hope in Allah\'s mercy.'
    },
    {
      title: 'Maintain Optimism',
      description: 'Never become despondent. Think highly of Allah and have firm hope in His ability to cure.'
    },
    {
      title: 'Strengthen Faith',
      description: 'Possessing jinn gain power when faith is weak. Strengthening one\'s iman through worship weakens their hold.'
    }
  ],
  warning: {
    title: 'Warning Against Invalid Practices',
    forbidden: [
      'Going to magicians or fortune-tellers',
      'Using talismans or amulets with unknown writing',
      'Any practice involving shirk (polytheism)',
      'Treatment by those who ask for unusual items',
      'Being alone with non-mahram practitioners',
      'Any treatment that feels wrong Islamically'
    ]
  }
};

export const importantNotes = {
  title: 'Important Notes',
  notes: [
    {
      title: 'Symptoms Are Not Definitive',
      content: 'The symptoms mentioned are not definitive and may vary. Many symptoms can also indicate physical or psychological conditions that require medical attention.'
    },
    {
      title: 'Balanced Approach',
      content: 'Islam does not reject medicine. The Prophet (peace be upon him) and his companions encouraged treatment alongside spiritual remedies.'
    },
    {
      title: 'Don\'t Self-Diagnose',
      content: 'Just because someone has some of these symptoms does not mean they are possessed. Professional evaluation is essential.'
    },
    {
      title: 'Avoid Paranoia',
      content: 'Not every problem is spiritual. Sometimes issues have natural causes. Maintain a balanced perspective.'
    },
    {
      title: 'Allah is the Healer',
      content: 'All healing comes from Allah alone. Ruqyah and medicine are means, but the cure is from Allah.'
    }
  ]
};

export default {
  disclaimer,
  typesOfPossession,
  causesOfPossession,
  typesOfAfflictions,
  protectionMethods,
  treatmentGuidelines,
  importantNotes
};
