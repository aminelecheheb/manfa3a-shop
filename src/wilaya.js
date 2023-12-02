export let communes = [];
export const wilayas = [
  "01: ولاية أدرار",
  "02: ولاية الشلف",
  "03: ولاية الأغواط",
  "04: ولاية أم البواقي",
  "05: ولاية باتنة",
  "06: ولاية بجاية",
  "07: ولاية بسكرة",
  "08: ولاية بشار",
  "09: ولاية البليدة",
  "10: ولاية البويرة",
  "11: ولاية تمنراست",
  "12: ولاية تبسة",
  "13: ولاية تلمسان",
  "14: ولاية تيارت",
  "15: ولاية تيزي وزو",
  "16: ولاية الجزائر",
  "17: ولاية الجلفة",
  "18: ولاية جيجل",
  "19: ولاية سطيف",
  "20: ولاية السعيدة",
  "21: ولاية سكيكدة",
  "22: ولاية سيدي بلعباس",
  "23: ولاية عنابة",
  "24: ولاية قالمة",
  "25: ولاية قسنطينة",
  "26: ولاية المدية",
  "27: ولاية مستغانم",
  "28: ولاية المسيلة",
  "29: ولاية معسكر",
  "30: ولاية ورقلة",
  "31: ولاية وهران",
  "32: ولاية البيض",
  "33: ولاية إليزي",
  "34: ولاية برج بوعريريج",
  "35: ولاية بومرداس",
  "36: ولاية الطارف",
  "37: ولاية تندوف",
  "38: ولاية تسيمسيلت",
  "39: ولاية الوادي(واد سوف)",
  "40: ولاية خنشلة",
  "41: ولاية سوق اهراس",
  "42: ولاية تيبازة",
  "43: ولاية ميلة",
  "44: ولاية عين الدفلى",
  "45: ولاية النعامة",
  "46: ولاية عين تموشنت",
  "47: ولاية غرداية",
  "48: ولاية غليزان",
  "49: ولاية تيميمون",
  "50:ولاية برج باجي مختار",
  "51:ولاية أولاد جلال",
  "52:ولاية بني عباس",
  "53:ولاية عين صالح",
  "54:ولاية عين قزام",
  "55:ولاية توقرت",
  "56:ولاية جانت",
  "57:ولاية المغير",
  "58:ولاية المنيعة",
];

export const prices = {
  "01: ولاية أدرار": 800,
  "02: ولاية الشلف": 800,
  "03: ولاية الأغواط": 800,
  "04: ولاية أم البواقي": 600,
  "05: ولاية باتنة": 600,
  "06: ولاية بجاية": 500,
  "07: ولاية بسكرة": 800,
  "08: ولاية بشار": 800,
  "09: ولاية البليدة": 600,
  "10: ولاية البويرة": 600,
  "11: ولاية تمنراست": 800,
  "12: ولاية تبسة": 600,
  "13: ولاية تلمسان": 800,
  "14: ولاية تيارت": 800,
  "15: ولاية تيزي وزو": 600,
  "16: ولاية الجزائر": 600,
  "17: ولاية الجلفة": 600,
  "18: ولاية جيجل": 500,
  "19: ولاية سطيف": 600,
  "20: ولاية السعيدة": 600,
  "21: ولاية سكيكدة": 600,
  "22: ولاية سيدي بلعباس": 800,
  "23: ولاية عنابة": 600,
  "24: ولاية قالمة": 600,
  "25: ولاية قسنطينة": 600,
  "26: ولاية المدية": 800,
  "27: ولاية مستغانم": 800,
  "28: ولاية المسيلة": 600,
  "29: ولاية معسكر": 800,
  "30: ولاية ورقلة": 800,
  "31: ولاية وهران": 800,
  "32: ولاية البيض": 800,
  "33: ولاية إليزي": 800,
  "34: ولاية برج بوعريريج": 800,
  "35: ولاية بومرداس": 800,
  "36: ولاية الطارف": 800,
  "37: ولاية تندوف": 800,
  "38: ولاية تسيمسيلت": 800,
  "39: ولاية الوادي(واد سوف)": 800,
  "40: ولاية خنشلة": 800,
  "41: ولاية سوق اهراس": 800,
  "42: ولاية تيبازة": 800,
  "43: ولاية ميلة": 600,
  "44: ولاية عين الدفلى": 800,
  "45: ولاية النعامة": 800,
  "46: ولاية عين تموشنت": 800,
  "47: ولاية غرداية": 800,
  "48: ولاية غليزان": 800,
  "49: ولاية تيميمون": 800,
  "50:ولاية برج باجي مختار": 800,
  "51:ولاية أولاد جلال": 800,
  "52:ولاية بني عباس": 800,
  "53:ولاية عين صالح": 800,
  "54:ولاية عين قزام": 800,
  "55:ولاية توقرت": 800,
  "56:ولاية جانت": 800,
  "57:ولاية المغير": 800,
  "58:ولاية المنيعة": 800,
};
export function getCommunes(a) {
  if (a === "01: ولاية أدرار") {
    communes = [
      "أدرار",
      "تامست",
      "شروين",
      "رقان  ",
      "إن زغمير  ",
      "تيت",
      "قصر قدور",
      "تسابيت",
      "تيميمون",
      "أولاد السعيد",
      "زاوية كونتة",
      "أولف",
      "تيمقتن",
      "تامنطيت",
      "فنوغيل",
      "تنركوك",
      "دلدول",
      "سالي",
      "أقبلي",
      "المطارفة",
      "أولاد أحمد تيمي",
      "بودة",
      "أوقروت",
      "طالمين",
      "برج باجي مختار",
      "السبع",
      "أولاد عيسى",
      "تيمياوين",
    ];
  }

  if (a === "02: ولاية الشلف") {
    communes = [
      "الشلف",
      "تنس",
      "بنايرية",
      "الكريمية",
      "تاجنة",
      "تاوقريت",
      "بني حواء",
      "صبحة",
      "حرشون",
      "أولاد فارس",
      "سيدي عكاشة",
      "بوقادير",
      "بني راشد",
      "تلعصة",
      "الهرنفة",
      "وادى قوسين",
      "الظهرة",
      "أولاد عباس",
      "السنجاس",
      "الزبوجة",
      "وادي سلي",
      "أبو الحسن",
      "المرسى",
      "الشطية",
      "سيدي عبد الرحمان",
      "مصدق",
      "الحجاج",
      "الأبيض مجاجة",
      "وادي الفضة",
      "أولاد بن عبد القادر",
      "بوزغاية",
      "عين مران",
      "أم الذروع",
      "بريرة",
      "بني بوعتاب",
    ];
  }
  "03: ولاية الأغواط" == a &&
    (communes = [
      "الأغواط",
      "قصر الحيران",
      "بن ناصر بن شهرة",
      "سيدي مخلوف",
      "حاسي الدلاعة",
      "حاسي الرمل",
      "عين ماضي",
      "تاجموت",
      "الخنق",
      "قلتة سيدي سعد",
      "عين سيدي علي",
      "البيضاء",
      "بريدة",
      "الغيشة",
      "الحاج المشري",
      "سبقاق",
      "تاويالة",
      "تاجرونة",
      "أفلو",
      "العسافية",
      "وادي مرة",
      "وادي مزي",
      "الحويطة",
      "سيدي بوزيد",
    ]),
    "04: ولاية أم البواقي" == a &&
      (communes = [
        "أم البواقي",
        "عين البيضاء",
        "عين مليلة",
        "بحير شرقي",
        "العامرية",
        "سيقوس",
        "البلالة",
        "عين بابوش",
        "بريش",
        "أولاد حملة",
        "الضلعة",
        "عين كرشة",
        "هنشير تومغني",
        "الجازية",
        "عين الديس",
        "فكرينة",
        "سوق نعمان",
        "الزرق",
        "الفجوج بوغرارة سعودي",
        "أولاد زواي",
        "بئر الشهداء",
        "قصر صباحي",
        "وادي نيني",
        "مسكيانة",
        "عين فكرون",
        "الراحية",
        "عين الزيتون",
        "أولاد قاسم",
        "الحرميلية",
      ]),
    "05: ولاية باتنة" == a &&
      (communes = [
        "باتنة",
        "غسيرة",
        "معافة",
        "مروانة",
        "سريانة",
        "منعة",
        "المعذر",
        "تازولت",
        "نقاوس",
        "القيقبة",
        "إينوغيسن",
        "عيون العصافير",
        "جرمة",
        "بيطام",
        "عزيل عبد القادر",
        "آريس",
        "كيمل",
        "تيلاطو",
        "عين جاسر",
        "أولاد سلام",
        "تيغرغار",
        "عين ياقوت",
        "سفيان",
        "فسديس",
        "الرحبات",
        "تيغانمين",
        "لمسان",
        "قصر بلزمة",
        "سقانة",
        "إشمول",
        "فم الطوب",
        "بني فضالة الحقانية",
        "وادي الماء",
        "تالخمت",
        "بوزينة",
        "الشمرة",
        "وادي الشعبة",
        "تاكسلانت",
        "القصبات",
        "أولاد عوف",
        "بومقر",
        "بريكة",
        "الجزار",
        "تكوت",
        "عين التوتة",
        "حيدوسة",
        "ثنية العابد",
        "وادي الطاقة",
        "أولاد فاضل",
        "تيمقاد",
        "رأس العيون",
        "شير",
        "أولاد سي سليمان",
        "زانة البيضاء",
        "أمدوكال",
        "أولاد عمار",
        "الحاسي",
        "لازرو",
        "بومية",
        "بولهيلات",
        "لارباع",
      ]),
    "06: ولاية بجاية" == a &&
      (communes = [
        "بجاية",
        "بوخليفة",
        "تيشي",
        "تالة حمزة",
        "أميزور",
        "تامريجت",
        "أوقاس",
        "آيت سماعيل",
        "تاسكريوت",
        "تمقرة",
        "آغرام",
        "كسيلة",
        "تاوريرت آغيل",
        "أمالو",
        "بوحمزة",
        "كنديرة",
        "خراطة",
        "فرعون",
        "بني جليل",
        "القصر",
        "توجة",
        "بوجليل",
        "بني مليكش",
        "سوق أوفلة",
        "شميني",
        "تيفرة",
        "تينبذار",
        "سيدي عياد",
        "تيمزريت",
        "سيدي عيش",
        "لفلاي",
        "أكفادو",
        "تيبيان",
        "آيت أرزين",
        "إيغيل علي",
        "فناية الماثن",
        "سمعون",
        "ذراع القايد",
        "مرباشة",
        "مسيسنة",
        "صدوق",
        "أوزلاقن",
        "آدكار",
        "شلاطة",
        "أقبو",
        "بني معوش",
        "درقينة",
        "تيزي أنبربار",
        "سوق الإثنين",
        "ملبو",
        "وادي غير",
        "تازمالت",
        "شميني جنان",
      ]),
    "07: ولاية بسكرة" == a &&
      (communes = [
        "بسكرة",
        "ليوة",
        "لوطاية",
        "جمورة",
        "البرانيس",
        "القنطرة",
        "عين زعطوط",
        "سيدي عقبة",
        "شتمة",
        "تكوت",
        "الحوش",
        "عين الناقة",
        "زربية الوادي",
        "المزيرعة",
        "خنقة سيدي ناجي",
        "الفيض",
        "مشونش",
        "طولقة",
        "بوشقرون",
        "برج بن عزوز",
        "ليشانه",
        "فوغاله",
        "الغروس",
        "أولاد جلال",
        "الدوسن",
        "الشعيبة",
        "سيدي خالد",
        "البسباس",
        "راس الميعاد",
        "اورلال",
        "أوماش",
        "مليلي",
        "مخادمة",
        "الحاجب",
      ]),
    "08: ولاية بشار" == a &&
      (communes = [
        "بسكرة",
        "ليوة",
        "لوطاية",
        "جمورة",
        "البرانيس",
        "القنطرة",
        "عين زعطوط",
        "سيدي عقبة",
        "شتمة",
        "تكوت",
        "الحوش",
        "عين الناقة",
        "زربية الوادي",
        "المزيرعة",
        "خنقة سيدي ناجي",
        "الفيض",
        "مشونش",
        "طولقة",
        "بوشقرون",
        "برج بن عزوز",
        "ليشانه",
        "فوغاله",
        "الغروس",
        "أولاد جلال",
        "الدوسن",
        "الشعيبة",
        "سيدي خالد",
        "البسباس",
        "راس الميعاد",
        "اورلال",
        "أوماش",
        "مليلي",
        "مخادمة",
        "الحاجب",
      ]),
    "09: ولاية البليدة" == a &&
      (communes = [
        "البليدة",
        "شبلي",
        "بوينان",
        "وادي العلايق",
        "أولاد يعيش",
        "الشريعة",
        "العفرون",
        "الشفة",
        "حمام ملوان",
        "بن خليل",
        "الصومعة",
        "موزاية",
        "صوحان",
        "مفتاح",
        "أولاد السلامة",
        "بوفاريك",
        "الأربعاء",
        "واد جر",
        "بني تامو",
        "بوعرفة",
        "بني مراد",
        "بوقرة",
        "قرواو",
        "عين الرمانة",
        "الجبابرة",
      ]),
    "10: ولاية البويرة" == a &&
      (communes = [
        "البويرة",
        "عين الترك",
        "ايت لعزيز",
        "الأخضرية",
        "قرومة",
        "معالة",
        "بودربالة",
        "بوكرام",
        "الزبربر",
        "قادرية",
        "عمر",
        "جباحية",
        "سوق الخميس",
        "المقراني",
        "بئر اغبالو",
        "الروراوة",
        "الخبوزية",
        "عين بسام",
        "عين العلوي",
        "عين الحجر",
        "سور الغزلان",
        "المعمورة",
        "ديرة",
        "ريدان",
        "الحاكمية",
        "الدشمية",
        "برج اخريص",
        "مسدور",
        "تاقديت",
        "الحجرة الزرقاء",
        "الهاشمية",
        "وادي البردي",
        "امشدالة",
        "احنيف",
        "الشرفة",
        "صحاريج",
        "اث منصور",
        "اغبالو",
        "بشلول",
        "العجيبية",
        "الأسنام",
        "اهل القصر",
        "اولاد راشد",
        "حيزر",
        "تاغزوت",
      ]),
    "11: ولاية تمنراست" == a &&
      (communes = [
        "تمنراست",
        "ابلسة",
        "ادلس",
        "فقارة الزوى",
        "عين غار",
        "عين قزام",
        "عين صالح",
        "تاظروك",
        "تين زاوتين",
        "عين امقل",
      ]),
    "12: ولاية تبسة" == a &&
      (communes = [
        "بئر العاتر",
        "الشريعة سطح قنطيس",
        "العوينات",
        "الحويجبات",
        "صفصاف الوسرة",
        "الحمامات",
        "نقرين",
        "بئر مقدم",
        "الكويف",
        "مرسط",
        "العقلة",
        "بئر الذهب",
        "العقلة المالحة",
        "قريقر",
        "بكارية",
        "بوخضرة",
        "الونزة",
        "الماء الأبيض",
        "أم علي",
        "ثليجان",
        "عين الزرقاء",
        "المريج",
        "بولحاف الدير",
        "بجن",
        "المزرعة",
        "فركان",
      ]),
    "13: ولاية تلمسان" == a &&
      (communes = [
        "تلمسان",
        "المنصورة",
        "تيرني بني ھديل",
        "عين غرابة",
        "بني مستار",
        "شتوان",
        "عين فزة",
        "عمير",
        "أولاد ميمون",
        "الواد الأخضر",
        "بني صميل",
        "عين تالوت",
        "عين نحالة",
        "بن سكران",
        "سيدي العبدلي",
        "الرمشي",
        "بني ورسوس",
        "عين يوسف",
        "السبعة شيوخ",
        "الفحول",
        "الحناية",
        "زناتة",
        "أولاد رياح",
        "الغزوات",
        "السواحلية",
        "تيانت",
        "دار يغمراسن",
        "ندرومة",
        "جبالة",
        "فلاوسن",
        "عين فتاح",
        "عين الكبيرة",
        "مغنية",
        "حمام بوغرارة",
        "بني بوسعيد",
        "سيدي مجاهد",
        "صبرة",
        "بوحلو",
        "سبدو",
        "القور",
        "العريشة",
        "سيدي الجيلالي",
        "البويهي",
        "بني سنوس",
        "العزايل",
        "بني بهدل",
        "باب العسة",
        "السواني",
        "سوق الثلاثاء",
        "مرسى بن مهيدي",
        "مسيردة الفواقة",
        "هنين",
        "بني خلاد",
      ]),
    "14: ولاية تيارت" == a &&
      (communes = [
        "توسنينة",
        "عين بوشقيف",
        "عين الذهب",
        "عين الحديد",
        "عين الكرمة",
        "عين زاريت",
        "بوغرة,",
        "شهايمة",
        "دحموني",
        "جبيلات رصفة",
        "جيلالي بن عمر",
        "فايجة",
        "فرندة",
        "قرطوفة",
        "حمادية",
        "قصر الشلالة",
        "مادنة",
        "مهدية",
        "مشروع الصفا",
        "مدريسة",
        "مدروسة",
        "مغيلة",
        "ملاكو ندورة",
        "النعيمة",
        "واد ليلي",
        "ولاد جراد",
        "رحوية",
        "رشيقة سباين",
        "سبت",
        "سرغين",
        "سي عبد الغاني",
        "سيدي علي ملال",
        "سيدي بختي",
        "سيدي الحسني",
        "السوقر",
        "تاقدمت",
        "تخمارت",
        "تيارت",
        "تيدة",
        "زمالة الأمير عبد القادر",
      ]),
    "15: ولاية تيزي وزو" == a &&
      (communes = [
        "تيزي وزو",
        "واسيف",
        "أيت بومهدي",
        "أيت تودرت",
        "عين الحمام",
        "أيت يح أقبيل",
        "أبي يوسف",
        "عزازقة",
        "فريحة",
        "زكري",
        "إعكوران",
        "إيفيغاء",
        "بوغني",
        "مشطراس",
        "بونوح",
        "أسي يوسف",
        "ذراع الميزان",
        "فريقات",
        "عين الزاوية",
        "أيت يحي موسى",
        "واقنون",
        "تيميزارت",
        "جبل عيسى ميمون",
        "الأربعاء نايث إيراثن",
        "أيت قواشة",
        "إرجن",
        "أزفون",
        "أقرو",
        "أيت شفعة",
        "أغريب",
        "ذراع بن خدة",
        "تادمايت",
        "سيدي نعمان",
        "ترمتين",
        "تقزيرت",
        "إفليسن",
        "مزرانة",
        "بوزغن",
        "إجر",
        "إيلولة أمالو",
        "بني زيكي",
        "بني دوالة",
        "أيت محمود",
        "بني عيسي",
        "بني زمنزر",
        "واضية",
        "أقني قغران",
        "تيزي نثلاثة",
        "أيت بوعدو",
        "المعاتقة ",
        "سوق الإثنين",
        "مقلع",
        "أيت خليلي ",
        "الصوامع",
        "بني يني",
        "يطافن ",
        "إبودرارن",
        "تيزي راشد ",
        "أيت أومالو",
        "إيفرحونن",
        "أمسوحال",
        "إليلتن",
        "تيزي غنيف ",
        "مكيرة",
        "ماكودة",
        "بوجيمة",
      ]),
    "16: ولاية الجزائر" == a &&
      (communes = [
        "سيدي امحمد",
        "المدنية",
        "المرادية",
        "باب الواد",
        "القصبة",
        "بولوغين",
        "واد قريش",
        "رايس حميدو",
        "المقارية",
        "الحامة - العناصر بلوزداد ",
        "حسين داي",
        "القبة",
        "بن عكنون",
        "بني مسوس",
        "بوزريعة",
        "الأبيار",
        "بئر مراد رايس",
        "بئر خادم",
        "جسر قسنطينة",
        "حيدرة",
        "سحاولة",
        "باش جراح",
        "بوروبة",
        "الحراش",
        "وادي السمار",
        "عين طاية",
        "باب الزوار",
        "برج البحري",
        "برج الكيفان",
        "الدار البيضاء",
        "المرسى",
        "المحمدية",
        "عين البنيان",
        "الشراقة",
        "دالي ابراهيم",
        "أولاد فايت",
        "الحمامات",
        "المحالمة",
        "الرحمانية",
        "السويدانية",
        "سطاوالي",
        "زرالدة",
        "بابا حسن",
        "دويرة",
        "الدرارية",
        "العاشور",
        "خرايسية",
        "بئر توتة",
        "أولاد شبل",
        "تسالة المرجة",
        "براقي",
        "الكاليتوس",
        "سيدي موسى",
        "هراوة",
        "الرغاية",
        "الرويبة",
      ]),
    "17: ولاية الجلفة" == a &&
      (communes = [
        "الجلفة",
        "عين وسارة",
        "القرنيني",
        "البيرين",
        "بنهار",
        "سيدي لعجال",
        "الخميس",
        "حاسي فدول",
        "حد الصحاري",
        "بويرة الأحداب",
        "عين أفقه",
        "حاسي بحبح",
        "الزعفران",
        "حاسي العش",
        "عين معبد",
        "دار الشيوخ",
        "مليليحة",
        "سيدي بايزيد",
        "الشارف",
        "القديد",
        "بن يعقوب",
        "الإدريسية",
        "الدويس",
        "عين الشهداء",
        "عين الإبل",
        "مجبارة",
        "تعضميت",
        "زكار",
        "مسعد",
        "دلدول",
        "سلمانة",
        "سد رحال",
        "قطارة",
        "فيض البطمة",
        "عمورة",
        "أم العظام",
      ]),
    "18: ولاية جيجل" == a &&
      (communes = [
        "جيجل",
        "الأمير عبد القادر",
        "اولاد رابح",
        "اولاد يحيى خدروش",
        "ايراقن سويسي",
        "برج الطهر",
        "بودريعة بن ياجيس",
        "بوراوي بلهادف",
        "بوسيف",
        "تاكسنة",
        "الجمعة بني حبيبي",
        "جيملة",
        "خيري واد اعجول",
        "زيامة منصورية",
        "السطارة",
        "سلمى بن زيادة",
        "سيدي عبد العزيز",
        "سيدي معروف",
        "الشحنة",
        "الشقفة",
        "الطاهير",
        "العنصر",
        "العوانة",
        "غبالة",
        "قاوس",
        "القنار نشفي",
        "الميلية",
        "وجانة",
      ]),
    "19: ولاية سطيف" == a &&
      (communes = [
        "عين عباسة",
        "عين أرنات",
        "عين الكبيرة",
        "عين آزال",
        "عين لحجر",
        "عين لقراج",
        "عين ولمان",
        "عين الروى",
        "عين السبت",
        "آيت نوال",
        "آيت تيزي",
        "عموشة",
        "ّ عين الروا",
        "ّ عين الروى",
        "بابور",
        "بازر سكرة",
        "بيضاء برج",
        "بلاعة",
        "بني عزيز",
        "بني شيبانة",
        "بني فودة",
        "بني حسين",
        "بني محلي",
        "بني ورتيلان",
        "بئر العرش",
        "بئر حدادة",
        "بوعنداس",
        "بوقاعة",
        "بوسلام",
        "بوطالب",
        "دهامشة",
        "جميلة",
        "ذراع قبيلة",
        "العلمة",
        "الولجة",
        "الأوريسية",
        "قلال",
        "القلتة الزرقاء",
        "قنزات",
        "ڤجال",
        "رأس الماء",
        "الحامة",
        "حمام قرقور",
        "حربيل",
        "قصر الأبطال",
        "معاوية",
        "ماوكلان",
        "مزلوق",
        "واد البارد",
        "اولاد عدوان",
        "اولاد صابر",
        "اولاد تبان",
        "ام لعجول",
        "رسفة",
        "صالح باي",
        "سرج الغول",
        "سطيف",
        "تاشودة",
        "تالة ايفاسن",
        "الطاية",
        "تلة",
        "تيزي نبشار",
        "ولاد السي أحمد",
        "تيزي نبراهم",
      ]),
    "20: ولاية السعيدة" == a &&
      (communes = [
        "سعيدة",
        "عين الحجر",
        "عين السخونة",
        "عين سلطان",
        "ذوي ثابت",
        "الحساسنة",
        "معمورة",
        "مولاي لعربي",
        "أولاد براهيم",
        "أولاد خالد",
        "سيدي أحمد",
        "سيدي اعمر",
        "سيدي بوبكر",
        "تيرسين",
        "أيوب",
        "هونة",
      ]),
    "21: ولاية سكيكدة" == a &&
      (communes = [
        "سكيكدة",
        "حمادي كرومة",
        "فلفلة",
        "الحدائق",
        "بوشطاطة",
        "عين زويت",
        "رمضان جمال",
        "بني بشير",
        "الحروش",
        "صالح بوالشعور",
        "أمجاز الدشيش",
        "زردازة",
        "أولاد أحبابة",
        "سيدي مزغيش",
        "عين بوزيان",
        "بني ولبان",
        "عزابة",
        "السبت",
        "لغدير",
        "جندل",
        "عين شرشار",
        "بن عزوز",
        "المرسى",
        "بكوش لخضر",
        "تمالوس",
        "الكركرة",
        "بين الويدان",
        "القل",
        "بني زيد",
        "الشرايع",
        "زيتونة",
        "قنواع",
        "عين قشرة",
        "الوجلة بوالبلوط",
        "أولاد عطية",
        "خناق مايون",
        "وادي الزهور",
        "أم الطوب",
      ]),
    "22: ولاية سيدي بلعباس" == a &&
      (communes = [
        "أولاد علي",
        "أمرناس",
        "بئر الحمام",
        "بدر الدين المقراني",
        "بلعربي",
        "بن باديس",
        "بن عشيبة شلية",
        "بوجبع البرج",
        "بوخنيفيس",
        "تاودموت",
        "تسالة",
        "تلموني",
        "تفسور",
        "تغاليمت",
        "تلاغ",
        "تنزارة",
        "تنيرة",
        "حاسي دحو",
        "حاسي زهانة",
        "الحصيبة",
        "رأس الماء",
        "رجم دموش",
        "زروالة",
        "سهالة ثاورة",
        "سفيزف",
        "سيدي اٍبراهيم",
        "سيدي بلعباس",
        "سيدي حمادوش",
        "سيدي خالد",
        "سيدي دحو الزائر",
        "سيدي شعيب",
        "سيدي علي بن يوب",
        "سيدي علي بوسيدي",
        "سيدي لحسن",
        "سيدي يعقوب",
        "شيطوان بليلة",
        "الضاية",
        "طابية",
        "عين أدان",
        "عين البرد",
        "عين تندامين",
        "عين الثريد",
        "عين قادة",
        "لمطار",
        "مرحوم",
        "مرين",
        "مزاورو",
        "مسيد",
        "مصطفى بن إبراهيم",
        "مقدرة",
        "مولاي سليسن",
        "واد تاوريرة",
        "واد سفيون",
        "واد السبع",
      ]),
    "23: ولاية عنابة" == a &&
      (communes = [
        "عنابة",
        "برحال",
        "الحجار",
        "العلمة",
        "البوني",
        "وادي العنب",
        "الشرفة",
        "سرايدي",
        "عين الباردة",
        "شطايبي",
        "سيدي عمار",
        "تريعات",
      ]),
    "24: ولاية قالمة" == a &&
      (communes = [
        "قالمة",
        "قلعة",
        "بو صبيع",
        "بومهرة احمد",
        "جبالة الخميسي",
        "الفجوج",
        "بن جراح",
        "بلخير",
        "بوعاتي محمود",
        "هيليوبوليس",
        "نشامية",
        "بني مزلين",
        "لخزارة",
        "بوشقوف",
        "مجاز الصفاء",
        "حمام النبائل",
        "وادي الشحم",
        "الدهوارة",
        "عين بن بيضاء",
        "وادي فراغة",
        "عين صندل",
        "بوحشانة",
        "وادي الزناتي",
        "راس العقبة",
        "عين رقادة",
        "بوحمدان",
        "برج صباط",
        "الركنية",
        "سلاوة عنونة",
        "عين مخلوف",
        "تاملوكة",
        "حمام دباغ",
        "مجاز عمار",
        "عين العربي",
        "هواري بومدين",
      ]),
    "25: ولاية قسنطينة" == a &&
      (communes = [
        "قسنطينة",
        "الخروب",
        "عين سمارة",
        "أولاد رحمون",
        "عين عبيد",
        "ابن باديس",
        "زيغود يوسف",
        "بني حميدان",
        "حامة بوزيان",
        "ديدوش مراد",
        "ابن زياد",
        "مسعود بوجريو",
      ]),
    "26: ولاية المدية" == a &&
      (communes = [
        "أم الجليل",
        "أولاد إبراهيم",
        "أولاد بو عشرة",
        "أولاد دايد",
        "أولاد عنتر",
        "أولاد معرف",
        "أولاد هلال",
        "البرواقية",
        "بن شكاو",
        "بني سليمان",
        "بوسكن",
        "بوشراحيل",
        "بو عيش",
        "بو عيشون",
        "بوغار",
        "بوغزول",
        "بعطة",
        "بئر بن عابد",
        "تابلاط",
        "تافراوت",
        "تمزقيدة",
        "تيزي المهدي",
        "ثلاثة الدوائر",
        "جواب",
        "الحمدانية",
        "حناشة",
        "الحوضان",
        "خمس جوامع",
        "دراق",
        "ذراع السمار",
        "الربعية",
        "الزبيرية",
        "سانق",
        "سدراية",
        "سغوان",
        "السواقي",
        "سي المحجوب",
        "سيدي دامد",
        "سيدي الربيع",
        "سيدي نعمان",
        "سيدي زهار",
        "سيدي زيان",
        "الشهبونية",
        "عزيز",
        "العزيزية",
        "العمارية",
        "العوينات",
        "العيساوية",
        "عين بوسيف",
        "عين القصير",
        "قصر البخاري",
        "القلب الكبير",
        "الكاف الأخضر",
        "مغراوة",
        "المدية",
        "مجبر",
        "المفاتحة",
        "مزغنة",
        "ميهوب",
        "وامري",
        "وزرة",
        "وادي حربيل",
      ]),
    "27: ولاية مستغانم" == a &&
      (communes = [
        "مستغانم",
        "ستيدية",
        "مزغران",
        "حاسي مماش",
        "الصور",
        "سيدي بلعطار",
        "واد الخير",
        "عين تادلس",
        "سيرات، السوافلية",
        "الصفصاف",
        "بوقيرات",
        "تازقايت",
        "أولاد مع الله",
        "سيدي علي",
        "نقمارية",
        "خضرة",
        "أولاد بوغالم",
        "عشعاشة",
        "فرناكة، الحسيان",
        "عين النويصي",
        "منصورة",
        "الطواهرية",
        "عين سيدي",
        "شريف ماسرى",
        "حجاج",
        "بن عبد المالك رمضان",
        "سيدي لخضر",
        "صيادة",
        "عين بودينار",
        "خير الدين",
      ]),
    "28: ولاية المسيلة" == a &&
      (communes = [
        "المسيلة",
        "أولاد دراج",
        "أولاد سليمان ",
        "أولاد سيدي إبراهيم ",
        "أولاد عدي القبالة",
        "أولاد عطية ",
        "أولاد ماضي",
        "أولاد منصور",
        "أولتام",
        "الحوامد",
        "الزرزور ",
        "المعاريف",
        "المعاضيد ",
        "الهامل",
        "بئر الفضة",
        "برهوم",
        "بلدية ثنية الشارة",
        "بلدية مناعة ",
        "بلعايبة",
        "بن سرور",
        "بنزوه",
        "بني يلمان",
        "بوسعادة",
        "بوطي السايح",
        "تارمونت",
        "تامسة",
        "جبل أمساعد",
        "حمام الضلعة",
        "خبانة",
        "خطوطي سد الجير",
        "الدهاهنة",
        "سليم ",
        "سيدي امحمد ",
        "سيدي عامر",
        "سيدي عيسى ",
        "سيدي هجرس",
        "شلال ",
        "الصوامع ",
        "عين الحجل",
        "عين الريش",
        "عين الملح",
        "عين الخضراء ",
        "عين فارس ",
        "مجدل ",
        "محمد بوضياف ",
        "مسيف",
        "المطارفة ",
        "مقرة ",
        "ونوغة",
      ]),
    "29: ولاية معسكر" == a &&
      (communes = [
        "معسكر",
        "البرج ",
        "البنيان",
        "السحايلية",
        "الشرفة ",
        "الصحاورية",
        "العلايمية",
        "الغمري",
        "القعدة",
        "القيطنة",
        "المامونية",
        "المحمدية ",
        "المنور ",
        "الهاشم",
        "بوحنيفية",
        "بوهني",
        "تيزي ",
        "تيغنيف",
        "حسين ",
        "خلوية ",
        "دوار الملح",
        "رأس عين عميروش",
        "زلامطة",
        "زهانة",
        "سجرارة",
        "سيدي بوسعيد ",
        "سيدي عبد الجبار",
        "سيدي عبد المؤمن",
        "سيدي قادة",
        "عقاز",
        "عوف",
        "عين افرص",
        "عين فارس ",
        "عين فراح",
        "عين فكان",
        "غروس",
        "غريس ",
        "فراقيق",
        "فروحة",
        "قرجوم",
        "القرط",
        "ماقضة",
        "ماوسة",
        "مطمور",
        "مقطع دوز",
        "نسموط",
        "وادي الأبطال",
        "وادي تاغية",
      ]),
    "30: ولاية ورقلة" == a &&
      (communes = [
        "ورقلة",
        "الطيبات",
        "بن ناصر",
        "المنقر",
        "مقارين",
        "سيدي سليمان",
        "تماسين",
        "بلدة أعمر",
        "الحجيرة",
        "العالية",
        "النقوسة",
        "سيدي خويلد",
        "عين البيضاء",
        "حاسي بن عبد الله",
        "الرويسات",
        "البرمة",
        "حاسي مسعود",
        "تقرت",
        "الزاوية العابدية",
        "النزلة",
        "تبسبست",
      ]),
    "31: ولاية وهران" == a &&
      (communes = [
        "وهران",
        "أرزيو",
        "العلايمية",
        "الكرمة ",
        "بئر الجير",
        "البرية ",
        "بطيوة",
        "بن فريحة",
        "بوتليليس",
        "بوسفر",
        "بوفاطيس",
        "حاسي بن عقبة",
        "حاسي بونيف",
        "حاسي مفسوخ",
        "دوار الملح",
        "السانية",
        "سيدي الشحمي",
        "سيدي بن يبقى",
        "سيق",
        "طفراوي",
        "العنصر ",
        "عين البية",
        "عين الترك ",
        "عين الكرمة ",
        "قديل",
        "مرسى الحجاج",
        "المرسى الكبير",
        "مسرغين",
        "وادي تليلات",
      ]),
    "32: ولاية البيض" == a &&
      (communes = [
        "البيض ",
        "أربوات",
        "الأبيض سيدي الشيخ",
        "البنود",
        "الخيثر",
        "الرقاصة",
        "الشلالة",
        "المحرة",
        "بريزينة",
        "بوسمغون",
        "بوعلام",
        "بوقطب",
        "توسمولين",
        "ستيتن",
        "سيدي سليمان ",
        "سيدي طيفور",
        "سيدي عمر ",
        "شقيق ",
        "عين العراك",
        "الغاسول ",
        "كاف لحمر",
        "كراكدة",
      ]),
    "33: ولاية إليزي" == a &&
      (communes = [
        "ايليزي",
        "جانت",
        "الدبداب",
        "برج عمر ادريس",
        "برج الحواس",
        "ان امناس",
      ]),
    "34: ولاية برج بوعريريج" == a &&
      (communes = [
        "برج بوعريريج",
        "أولاد براهم ",
        "أولاد دحمان",
        "أولاد سيدي إبراهيم",
        "الجعافرة ",
        "الحمادية",
        "العش",
        "العناصر ",
        "القلة ",
        "القليعة ",
        "الماين ",
        "المهير",
        "بئر قصد علي",
        "برج الغدير",
        "برج زمورة",
        "بلدية عين تسرة",
        "بليمور",
        "بن داود",
        "تاسمرت",
        "تفرق",
        "تفـرق",
        "تقلعيت",
        "تكستار",
        "ثنية النصر",
        "حرازة",
        "حسناوة",
        "خليل",
        "رأس الوادي",
        "الرابطة ",
        "سيدي امبارك",
        "عين تاغروت",
        "غيلاسة",
        "غيلاسة برج الغدير",
        "القصور ",
        "مجانة",
        "المنصورة ",
        "اليشير",
      ]),
    "35: ولاية بومرداس" == a &&
      (communes = [
        "بومرداس",
        "أولاد عيسى ",
        "أولاد موسى ",
        "أولاد هداج",
        "اعفير",
        "الأربعطاش",
        "الثنية ",
        "الثنية",
        "الخروبة ",
        "الناصرية ",
        "برج منايل",
        "بغلية",
        "بن شود",
        "بني عمران ",
        "بودواو",
        "بودواو البحري",
        "تاورقة",
        "تجلابين",
        "تيمزريت ",
        "جنات ",
        "حمادي ",
        "خميس الخشنة",
        "دلس",
        "زلزال زموري",
        "زموري",
        "سوق الحد",
        "سي مصطفى",
        "سيدي داود ",
        "شعبة العامر",
        "عمال ",
        "قدارة",
        "قورصو",
        "لقاطة ",
        "يسر",
      ]),
    "36: ولاية الطارف" == a &&
      (communes = [
        "الطارف",
        "بحيرة الطيور",
        "بريحان",
        "البسباس ",
        "بن مهيدي ",
        "بوثلجة",
        "بوحجار",
        "بوقوس",
        "حمام بني صالح",
        "الذرعان",
        "رمل السوق",
        "زريزر",
        "الزيتونة ",
        "السوارخ",
        "الشافية ",
        "شبيطة مختار",
        "الشط ",
        "الشيحاني",
        "عصفور ",
        "عين العسل",
        "عين الكرمة ",
        "العيون ",
        "القالة",
        "واد الزيتون",
      ]),
    "37: ولاية تندوف" == a &&
      ((communes = ["تيندوف", "أم العسل"]), add(), shippingprice("37")),
    "38: ولاية تسيمسيلت" == a &&
      (communes = [
        "تيسمسيلت",
        "ثنية الحد",
        "برج بونعامة",
        "لرجام",
        "الأزهرية",
        "الأربعاء",
        "بوقايد",
        "سيدي سليمان",
        "بني شعيب",
        "بني لحسن",
        "عماري",
        "اليوسفية",
        "سيدي بوتشنت",
        "الملعب",
        "سيدي عابد",
        "أولاد بسام",
        "خميستي",
        "العيون",
        "برج الأمير عبد القادر",
        "سيدي العنتري",
        "تملاحت",
        "المعاصم",
      ]),
    "39: ولاية الوادي(واد سوف)" == a &&
      (communes = [
        "الوادي",
        "أميه ونسة",
        "البياضة ",
        "الحمادين",
        "الحمراية",
        "الدبيلة",
        "الرباح ",
        "الرقيبة",
        "الطريفاوي",
        "العقلة ",
        "المقرن ",
        "النخلة  ",
        "بن قشة",
        "تغزوت ",
        "تندلة",
        "حاسي خليفة",
        "حساني عبد الكريم",
        "دوار الماء",
        "سيدي عون",
        "طالب العربي",
        "عين الشوشة",
        "قمار ",
        "كوينين ",
        "وادي العلندة",
        "ورماس",
        "وغلانة",
      ]),
    "40: ولاية خنشلة" == a &&
      (communes = [
        "خنشلة",
        "المحمل",
        "عين الطويلة",
        "بابار",
        "بغاي",
        "بوحمامة",
        "شيليا",
        "ششار",
        "جلال",
        "الحامة",
        "الولجة",
        "أنسيغة",
        "قايس",
        "خيران",
        "لمصارة",
        "متوسة",
        "أولاد رشاش",
        "رميلة",
        "طامزة",
        "يابوس",
        "تاوزيانت",
      ]),
    "41: ولاية سوق اهراس" == a &&
      (communes = [
        "سوق أهراس",
        "أم العظائم",
        "أولاد إدريس",
        "أولاد مؤمن",
        "الحنانشة",
        "الراقوبة",
        "الزوابي",
        "بئر بوحوش",
        "تاورة",
        "ترقالت",
        "تيفاش",
        "الحدادة ",
        "الخضارة",
        "خميسة",
        "الدريعة",
        "الزعرورية",
        "سافل الويدان",
        "سدراتة",
        "سيدي فرج ",
        "عين زانة",
        "عين سلطان ",
        "مادور",
        "مداوروش",
        "المراهنة",
        "المشروحة",
        "وادي الكبريت",
        "ويلان",
      ]),
    "42: ولاية تيبازة" == a &&
      (communes = [
        "تيبازة",
        "أغبال ",
        "الداموس",
        "الشعيبة",
        "الناظور ",
        "بني ميلك",
        "بو إسماعيل",
        "بورقيقة",
        "بوهارون",
        "حجرة النص",
        "حجوط",
        "حطاطبة",
        "حمر العين",
        "خميستي ",
        "دواودة",
        "سيدي اعمر ",
        "سيدي راشد",
        "سيدي سميان",
        "سيدي غيلاس",
        "شرشال",
        "عين تقورايت",
        "فوكة ",
        "القليعة ",
        "قوراية",
        "لارهاط",
        "مراد ",
        "مسلمون ",
        "مناصر",
      ]),
    "43: ولاية ميلة" == a &&
      (communes = [
        "ميلة",
        "أحمد راشدي ",
        "أولاد خلوف ",
        "التلاغمة",
        "الرواشد ",
        "العياضي برباس",
        "القرارم قوقة",
        "المشيرة",
        "بن يحيى عبد الرحمان",
        "بوحاتم",
        "تاجنانت",
        "تبرقنت",
        "ترعي باينان",
        "تسالة لمطاعي",
        "تسدان حدادة",
        "حمالة",
        "دراحي بوصلاح",
        "رجاص",
        "زغاية",
        "سيدي خليفة ",
        "سيدي مروان",
        "شلغوم العيد",
        "الشيقارة",
        "عميرة أراس",
        "عين البيضاء حريش",
        "عين التين",
        "عين الملوك",
        "فرجيوة",
        "مينار زارزة",
        "وادي العثمانية",
        "وادي النجاء",
        "وادي سقان",
        "يحيى بن قشة",
      ]),
    "44: ولاية عين الدفلى" == a &&
      (communes = [
        "عين الدفلى",
        "الحسنية ",
        "الحسينية ",
        "الروينة",
        "العبادية ",
        "الماين ",
        "المخاطرية",
        "بئر ولد خليفة",
        "بربوش",
        "برج الأمير خالد",
        "بطحية",
        "بلعاص",
        "بن علال ",
        "بوراشد",
        "بومدفع",
        "تاشتة زقاغة",
        "تسيلي",
        "تيبركانين",
        "جليدة ",
        "جمعة ولاد الشيخ",
        "جندل ",
        "حمام ريغة",
        "خميس مليانة",
        "زدين",
        "سيدي الأخضر ",
        "طارق بن زياد ",
        "العامرة ",
        "عريب ",
        "العطاف",
        "عين بنيان ",
        "عين بويحيى",
        "عين تركي",
        "عين سلطان ",
        "عين لشياخ",
        "مليانة",
        "واد الشرفاء",
        "وادي الجمعة",
      ]),
    "45: ولاية النعامة" == a &&
      (communes = [
        "النعامة",
        "المشرية",
        "عين الصفراء",
        "تيوت",
        "صفيصيفة",
        "مغرار",
        "عسلة",
        "جنين بورزق",
        "عين بن خليل",
        "بن عمار",
        "القصدير",
        "البيوض",
      ]),
    "46: ولاية عين تموشنت" == a &&
      (communes = [
        "عين تموشنت",
        "بوزجار",
        "المالح",
        "تارقة",
        "حمام بوحجر",
        "بني صاف",
        "شعبة اللحم",
        "الأمير عبد القادر",
        "سيدي الصافي",
        "تامازوغة",
        "وادي الصباح",
        "اغلال",
        "أولاد الكيحل",
        "عقب الليل",
        "حاسى الغلة",
        "أولاد بوجمعة",
        "سيدي بن عدة",
        "العامرية",
        "عين الطلبة",
        "عين الأربعاء",
        "ولهاصة الغرابة",
        "سيدي ورياش",
        "عين الكيحل",
        "مساعيد",
        "وادي برقش",
        "شنتوف",
        "الحساسنة",
        "سيدي بومدين",
      ]),
    "47: ولاية غرداية" == a &&
      (communes = [
        "غرداية",
        "العطف ",
        "بريان",
        "بنورة",
        "حاسي الفحل",
        "حاسي القارة",
        "زلفانة",
        "سبسب",
        "ضاية بن ضحوة",
        "القرارة ",
        "متليلي",
        "المنصورة",
      ]),
    "48: ولاية غليزان" == a &&
      (communes = [
        "غليزان",
        "أولاد سيدي الميهوب",
        "أولاد يعيش ",
        "الحمادنة",
        "الرمكة",
        "القطار ",
        "القلعة ",
        "المرجة ",
        "المطمر ",
        "الولجة ",
        "بلعسل",
        "بن داود ",
        "بني درقن",
        "بني زنطيس",
        "جديوية",
        "الحاسي ",
        "حد الشكالة",
        "حمري ",
        "دار بن عبد الله ",
        "زمورة ",
        "سوق الحد ",
        "سيدي امحمد بن علي",
        "سيدي خطاب",
        "سيدي سعادة",
        "سيدي لزرق",
        "سيدي محمد بن عودة",
        "عمي موسى",
        "عين الرحمة",
        "عين طارق",
        "لحلاف",
        "مازونة",
        "مديونة ",
        "منداس",
        "واد الجمعة ",
        "واد السلام",
        "وادي ارهيو",
        "واريزان",
        "يلل",
      ]),
    "49: ولاية تيميمون" == a &&
      (communes = [
        "تيميون",
        "أولاد السعيد",
        "أقروت",
        "دلدول",
        "المطرفة",
        "تينركوك",
        "قصر قدور",
        "شروين",
        "طلمين",
        "أولاد عيسى",
      ]),
    "50:ولاية برج باجي مختار" == a &&
      (communes = ["برج باجي مختار", "تيمياوين"]),
    "51:ولاية أولاد جلال" == a &&
      (communes = [
        "اولاد جلال",
        "البسباس",
        "الشعيبة",
        "الدوسن",
        "سيدي خالد",
        "راس الميعاد",
      ]),
    "52:ولاية بني عباس" == a &&
      (communes = [
        "بن عباس",
        "بني يخلف",
        "الواتة",
        "إقلي",
        "كرزاز",
        "قصابي",
        "أولاد خدير",
        "تبلبالة",
        "تامترت",
        "تيمودي",
      ]),
    " 53:ولاية عين صالح" == a &&
      (communes = ["عين صالح", "فقارة الزاوية", "عين غار"]),
    "54:ولاية عين قزام" == a && (communes = ["عين قزام", "تين زواتين"]);
  "55:ولاية توقرت" == a &&
    (communes = [
      "البرمة",
      "الحجيرة",
      "الزاوية العابدية",
      "الطيبات",
      "العالية ",
      "المنقر",
      "النزلة ",
      "بلدة عمر",
      "بن ناصر",
      "تبسبست",
      "تقرت",
      "تماسين",
      "سيدي سليمان ",
      "مقارين",
    ]),
    "56:ولاية جانت" == a &&
      ((communes = ["جانت", "برج الحواس"]), add(), shippingprice("56"));
  "57:ولاية المغير" == a &&
    (communes = [
      "المغير",
      "أم الطيور ",
      "اسطيل",
      "تندلة",
      "جامعة ",
      "سيدي خليل",
      "سيدي عمران",
      "مرارة",
    ]),
    "58:ولاية المنيعة" == a &&
      (communes = ["المنيعة", "حاسي القارة", "المنصورة ", "حاسي لفحل"]);
}
