import Swal from "sweetalert2";
//Alerts functions
export const sweetWwelcome = () => {
  Swal.fire({
    title: "نتشرف بإسمك",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "التسجيل",
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      if (login) {
        Swal.fire({
          title: `${login}'أهلا وسهلا بيك `,
        });
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  });
};
export const comfirmReplay = () => {
  Swal.fire({
    title: "هل تريد الاستمرار؟",
    icon: "question",
    iconHtml: "؟",
    confirmButtonText: "نعم",
    cancelButtonText: "لا",
    showCancelButton: true,
    showCloseButton: true,
  });
};
export const showCorrectAnsPub = (currentquestion) => {
  const correctAns = questions[currentquestion].options.find(
    (correct) => correct.isCorrect === true
  );
  Swal.fire("الإجابه الصحيحه هي", correctAns.text, "success");
};
export const showCorrectAns = (currentquestion) => {
  const correctAns = questionsIslamic[currentquestion].options.find(
    (correct) => correct.isCorrect === true
  );
  Swal.fire("الإجابه الصحيحه هي", correctAns.text, "success");
};
export const theEnd = () => {
  Swal.fire({
    title: "إنتهي الإختبار إضغط للذهاب للنتيجه",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `,
  });
};

export const showCorrectAnsPublic = (currentquestion) => {
  const correctAns = questionsIslamic[currentquestion].options.find(
    (correct) => correct.isCorrect === true
  );
  Swal.fire("الإجابه الصحيحه هي", correctAns.text, "success");
};
//questions functions
export const questionsIslamic = [
  {
    text: "من هو أول رسول أرسله الله تعالى إلى البشر",
    options: [
      { id: 0, text: "ادم عليه السلام", isCorrect: false },
      { id: 1, text: "إدريس عليه السلام", isCorrect: false },
      { id: 2, text: "هود عليه السلام", isCorrect: false },
      { id: 3, text: "نوح عليه السلام", isCorrect: true },
    ],
  },
  {
    text: " كم عدد سور القرآن الكريم؟",
    options: [
      { id: 0, text: "سوره 114", isCorrect: true },
      { id: 1, text: "سوره 110", isCorrect: false },
      { id: 2, text: "سوره 30", isCorrect: false },
      { id: 3, text: "سوره 100", isCorrect: false },
    ],
  },
  {
    text: "ما اسم والدة الرسول ﷺ ؟",
    options: [
      { id: 0, text: "الشيماء بنت الحارث ", isCorrect: false },
      { id: 1, text: "حليمه السعديه", isCorrect: false },
      { id: 2, text: "خديجه بنت خويلد", isCorrect: false },
      { id: 3, text: "امنه بنت وهب", isCorrect: true },
    ],
  },
  {
    text: "ما هي الصلاة التي لا ركوع ولا سجود فيها؟",
    options: [
      { id: 0, text: "صلاة الإستسقاء", isCorrect: false },
      { id: 1, text: " صلاة الجنازه", isCorrect: true },
      { id: 2, text: "صلاة الخوف", isCorrect: false },
      { id: 3, text: "صلاة العيد", isCorrect: false },
    ],
  },
  {
    text: "يوم يُحرم فيه الصيام؟",
    options: [
      { id: 0, text: "يوم عرفه", isCorrect: false },
      { id: 1, text: "يوم منتصف شعبان", isCorrect: false },
      { id: 2, text: "يوم العيد", isCorrect: true },
      { id: 3, text: " يوم عاشوراء", isCorrect: false },
    ],
  },
  {
    text: "كم عدد أبناء الرسول ﷺ؟",
    options: [
      { id: 0, text: "3", isCorrect: false },
      { id: 1, text: "7", isCorrect: true },
      { id: 2, text: "1", isCorrect: false },
      { id: 3, text: "9", isCorrect: false },
    ],
  },
  {
    text: "ما هو أصح كتب الحديث المعتمدة لدى المسلمين؟",
    options: [
      { id: 0, text: "صحيح مسلم", isCorrect: false },
      { id: 1, text: "موطأ مالك", isCorrect: false },
      { id: 2, text: "صحيح البخاري ", isCorrect: true },
      { id: 3, text: "المعجم الوجيز", isCorrect: false },
    ],
  },
  {
    text: "ما هي المدة التي نزل فيها القرآن الكريم على النبي ﷺ؟",
    options: [
      { id: 0, text: "3 أعوام", isCorrect: false },
      { id: 1, text: "عام 23", isCorrect: true },
      { id: 2, text: "20 عام", isCorrect: false },
      { id: 3, text: "عام 17", isCorrect: false },
    ],
  },
  {
    text: " أين استوت سفينة نوح عليه السلام بعد انحسار الطوفان؟",
    options: [
      { id: 0, text: "الطور", isCorrect: false },
      { id: 1, text: "عرفات", isCorrect: false },
      { id: 2, text: " أحد", isCorrect: false },
      { id: 3, text: "الجودي ", isCorrect: true },
    ],
  },
  {
    text: " من هو النبي الذي كان يعمل في مهنة النجارة؟",
    options: [
      { id: 0, text: " زكريا عليه السلام", isCorrect: true },
      { id: 1, text: " يحي عليه السلام ", isCorrect: false },
      { id: 2, text: " إسماعيل عليه السلام", isCorrect: false },
      { id: 3, text: " يونس عليه السلام", isCorrect: false },
    ],
  },
];
//public questions
export const questions = [
  {
    text: "ما هو البحر الذي يسمى بحر القلزم؟",
    options: [
      { id: 0, text: "البحر العربي", isCorrect: false },
      { id: 1, text: "البحر الأحمر", isCorrect: false },
      { id: 2, text: "بحر قزوين", isCorrect: false },
      { id: 3, text: "البحر الأسود", isCorrect: true },
    ],
  },
  {
    text: "النحلة ترفرف بجناحيها في الثانية الواحدة بمعدل….؟",
    options: [
      { id: 0, text: "(150مرة)", isCorrect: false },
      { id: 1, text: "(250مرة)", isCorrect: false },
      { id: 2, text: "(350 مرة)", isCorrect: true },
      { id: 3, text: "(550مرة)", isCorrect: false },
    ],
  },
  {
    text: "ما المقصود بيوم الفرقان الذي ذكره الله تعالى في القرآن؟",
    options: [
      { id: 0, text: "غزوة بدر ", isCorrect: true },
      { id: 1, text: "غزوة أحد", isCorrect: false },
      { id: 2, text: "فتح مكه", isCorrect: false },
      { id: 3, text: "غزوة تبوك", isCorrect: false },
    ],
  },
  {
    text: "اذا قطع المسلم إحدى شفتي أخيه المسلم فيجب عليه أن يسلم له…؟",
    options: [
      { id: 0, text: "دية النفس كاملة", isCorrect: false },
      { id: 1, text: "نصف الدية ", isCorrect: true },
      { id: 2, text: "ثلث الدية  ", isCorrect: false },
      { id: 3, text: "ربع الدية", isCorrect: false },
    ],
  },
  {
    text: "تصل مده حمل أنثى الفيل إلى…؟",
    options: [
      { id: 0, text: "12شهر", isCorrect: false },
      { id: 1, text: "18 شهر", isCorrect: false },
      { id: 2, text: "22 شهراً", isCorrect: true },
      { id: 3, text: "32 شهر", isCorrect: false },
    ],
  },
  {
    text: "صاحب كتاب (حي إبن يقظان) هو..؟",
    options: [
      { id: 0, text: "إبن رشد", isCorrect: false },
      { id: 1, text: "ابن خلدون", isCorrect: false },
      { id: 2, text: " إبن عربي", isCorrect: false },
      { id: 3, text: " إبن طفيل", isCorrect: true },
    ],
  },
  {
    text: "اكبر دولة افريقية من حيث المساحة هي دولة …؟",
    options: [
      { id: 0, text: "الجزائر ", isCorrect: false },
      { id: 1, text: " مورتانيا ", isCorrect: false },
      { id: 2, text: " السودان", isCorrect: true },
      { id: 3, text: " مصر ", isCorrect: false },
    ],
  },
  {
    text: "الغاز الذي يشكل حوالي 75 %من اجمالي كتلة الشمس هو…؟",
    options: [
      { id: 0, text: "الهيدروجين ", isCorrect: true },
      { id: 1, text: " الكالسيوم", isCorrect: false },
      { id: 2, text: " الأوكسجين ", isCorrect: false },
      { id: 3, text: " النتروجين ", isCorrect: false },
    ],
  },
  {
    text: "يضرب به المثل في الحلم فيقال أحلم من …؟",
    options: [
      { id: 0, text: "الأحنف بن قيس", isCorrect: true },
      { id: 1, text: " الأحنف بن حسان", isCorrect: false },
      { id: 2, text: " المهلب بن صفرة", isCorrect: false },
      { id: 3, text: "المهلب بن حاتم ", isCorrect: false },
    ],
  },
  {
    text: "من شعراء العصر الأموي ..؟",
    options: [
      { id: 0, text: "أبو الطيب المتنبي", isCorrect: false },
      { id: 1, text: "ابن خفاجي الأندلسي ", isCorrect: false },
      { id: 2, text: " الكميت", isCorrect: true },
      { id: 3, text: " ابن هانئ الأندلسي", isCorrect: false },
    ],
  },
];
