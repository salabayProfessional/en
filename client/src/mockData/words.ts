const allWords = [ 
    {en: "Destroy", ua: "Знищити"},
    {en: "Adventure", ua: "Пригоди"},
    {en: "Predict", ua: "Передбачити"},
    {en: "Produce", ua: "Виробляти"},
    {en: "Complete", ua: "Повна"},
    {en: "Truly", ua: "Воістину"},
    {en: "Burst", ua: "Вибух"},
    {en: "Supply", ua: "Постачання"},
    {en: "Instead", ua: "Натомість"},
    {en: "Spare", ua: "Запасний"},
    {en: "At once", ua: "Якось"},
    {en: "Explode", ua: "Вибухнути"},
    {en: "Literally", ua: "Буквально"},
    {en: "Spy", ua: "Шпигун"},
    {en: "Closer", ua: "Ближче"},
    {en: "Stab", ua: "Колоти"},
    {en: "Court", ua: "Суд"},
    {en: "Goal", ua: "Гол"},
    {en: "Worn", ua: "Зношені"},
    {en: "Observe", ua: "Спостерігати"},
    {en: "Impatient", ua: "Нетерплячий"},
    {en: "evidence", ua: "Свідчення"},
    {en: "Flare", ua: "Спалах"},
    {en: "Blame", ua: "Винуватий"},
    {en: "Threat", ua: "Загроза"},
    {en: "Trail", ua: "Стежка"},
    {en: "Respect", ua: "Повага"},
    {en: "Fool", ua: "Дурень"},
    {en: "Escape", ua: "Втеча"},
    {en: "Sake", ua: "Користь"},
    {en: "Reveal", ua: "Розкрити"},
    {en: "Coward", ua: "Боягуз"},
    {en: "Proud", ua: "Гордий"},
    {en: "Admit", ua: "Визнати"},
    {en: "Pure", ua: "Чистий"},
    {en: "Cooperate", ua: "Співпрацювати"},
    {en: "Eventually", ua: "Зрештою"},
    {en: "Solve", ua: "Розв’язати"},
    {en: "Envy", ua: "Заздрість"},
    {en: "Regret", ua: "Шкода"},
    {en: "Obviously", ua: "Очевидно"},
    {en: "Apparently", ua: "Мабуть"},
    {en: "Evil", ua: "Зло"},
    {en: "Rush", ua: "Поспіх"},
    {en: "Employ", ua: "Працевлаштування"},
    {en: "Dire", ua: "Страшно"},
    {en: "Consequence", ua: "Наслідок"},
    {en: "Spans", ua: "Прольоти"},
    {en: "Able", ua: "Здатний"},
    {en: "Barely", ua: "Ледве"},
    {en: "Deliver", ua: "Доставити"},
    {en: "Rely", ua: "Вірити"},
    {en: "Honey", ua: "Мед"},
    {en: "Mock", ua: "Макет"},
    {en: "Betray", ua: "Зрада"},
    {en: "Get on", ua: "Вступайте"},
    {en: "Trust", ua: "Довіра"},
    {en: "Steer", ua: "Рульове управління"},
    {en: "Demand", ua: "Попит"},
    {en: "Cost", ua: "Вартість"},
    {en: "Pleasure", ua: "Задоволення"},
    {en: "Edit", ua: "Редагувати"},
    {en: "Case", ua: "Футляр"},
    {en: "Template", ua: "Шаблон"},
    {en: "Give up", ua: "Здаватися"},
    {en: "Robber", ua: "Розбійник"},
    {en: "Suddenly", ua: "Раптом"},
    {en: "Separate", ua: "Окремі"},
    {en: "Dest", ua: "Доля"},
    {en: "Primarily", ua: "Насамперед"},
    {en: "Barely", ua: "Ледве"},
    {en: "trap", ua: "ловушка"},
    {en: "Shelter", ua: "Укриття"},
    {en: "Hang", ua: "Повісити"},
    {en: "around", ua: "навколо"},
    {en: "Surround", ua: "Об'ємне звучання"},
    {en: "Instant", ua: "Миттєвий"},
    {en: "Lick", ua: "Лизати"},
    {en: "Chill out", ua: "Розслабся"},
    {en: "Sprain", ua: "Розтягнення"},
    {en: "Exact", ua: "Точний"},
    {en: "To sum up", ua: "Підсумовуючи"},
    {en: "Stare at", ua: "Дивитися на"},
    {en: "Advert", ua: "Реклама"},
    {en: "Bumb", ua: "Бум"},
    {en: "into", ua: "в"},
    {en: "Get into", ua: "Залазь"},
    {en: "Stuffy", ua: "в'язкий"},
    {en: "Crave", ua: "Жадати"},
    {en: "Confuse", ua: "Плутати"},
    {en: "Elect", ua: "Обраний"},
    {en: "Enforce", ua: "Примусити"},
    {en: "Impress", ua: "Вразити"},
    {en: "Struggle", ua: "Боротьба"},
    {en: "Compulsory", ua: "Обов’язковий"},
    {en: "Climb", ua: "Підйом"},
    {en: "Cliff", ua: "Скеля"},
    {en: "Base", ua: "База"},
    {en: "Camp", ua: "Табір"},
    {en: "Admire", ua: "Захоплюватися"},
    {en: "Sight", ua: "Зір"},
    {en: "Recover", ua: "Відновити"},
    {en: "Vomit", ua: "Блювота"},
    {en: "Fever", ua: "Лихоманка"},
    {en: "Herbar", ua: "Гербар"},
    {en: "Dizzy", ua: "Запаморочення"},
    {en: "Injection", ua: "Ін'єкції"},
    {en: "Busy", ua: "Зайнято"},
    {en: "Dedicate", ua: "Присвячувати"},
    {en: "Prescribe", ua: "Призначити"},
    {en: "Receive", ua: "Отримувати"},
    {en: "Invent", ua: "Винайти"},
    {en: "Average", ua: "Середній"},
    {en: "Aware", ua: "Усвідомлений"},
    {en: "Confuse", ua: "Плутати"},
    {en: "Daily", ua: "Щоденно"},
    {en: "Shout", ua: "Кричати"},
    {en: "Tend", ua: "Схильні"},
    {en: "Lean", ua: "Пісний"},
    {en: "Quilt", ua: "Ковдра"},
    {en: "Wide", ua: "Широкий"},
    {en: "Rude", ua: "Грубо"},
    {en: "Consider", ua: "Поміркуйте"},
    {en: "Faced", ua: "Зіткнувся"},
    {en: "Permit", ua: "Дозвіл"},
    {en: "Occurs", ua: "Виникає"},
    {en: "Apply", ua: "Застосувати"},
    {en: "Hybrid", ua: "Гібридний"},
    {en: "Assume", ua: "Припустимо"},
    {en: "Aligned", ua: "Вирівняно"},
    {en: "Volume", ua: "Обсяг"},
    {en: "Motion", ua: "Рух"},
    {en: "Impact", ua: "Вплив"},
    {en: "Because Of Me", ua: "Через мене"},
    {en: "Actually", ua: "Власне"},
    {en: "Inspect", ua: "Оглянути"},
    {en: "Enture", ua: "Підприємство"},
    {en: "Impression", ua: "Враження"},
    {en: "The same", ua: "Той самий"},
    {en: "Quite", ua: "Цілком"},
    {en: "Reject", ua: "Відхилити"},
    {en: "Absent", ua: "Відсутній"},
    {en: "Occurs", ua: "Виникає"},
    {en: "Woolly", ua: "Вовняний"},
    {en: "Hybrid", ua: "Гібридний"},
    {en: "There for", ua: "Там для"},
    {en: "Hence", ua: "Отже"},
    {en: "Indeed", ua: "Дійсно"},
    {en: "Generally", ua: "Загалом"},
    {en: "Besides", ua: "Крім того"},
    {en: "In spite of", ua: "Попри"},
    {en: "As a rule", ua: "Як правило"},
    {en: "Freak", ua: "Виродка"},
    {en: "Calm down", ua: "Заспокойся"},
    {en: "Never mina", ua: "Ніколи не міна"},
    {en: "I mean", ua: "Я маю на увазі"},
    {en: "For real", ua: "Насправді"},
    {en: "Like what", ua: "Як що"},
    {en: "Cheer", ua: "Вболівати"},
    {en: "Get in", ua: "Залазь"},
    {en: "Holds", ua: "Тримає"},
    {en: "On time", ua: "Вчасно"},
    {en: "Scary", ua: "Страшно"},
    {en: "Fellow", ua: "Товариш"},
    {en: "Gather", ua: "Збирати"},
    {en: "Duties", ua: "Обов’язки"},
    {en: "Vary", ua: "Варіація"},
    {en: "Income", ua: "Дохід"},
    {en: "Profit", ua: "Прибуток"},
    {en: "Decade", ua: "Десятиліття"},
    {en: "Burnt", ua: "Вигоріла"},
    {en: "To note", ua: "Занотовувати"},
    {en: "Shape", ua: "Форма"},
    {en: "Restock", ua: "Поповнення запасів"},
    {en: "Amount", ua: "Сума"},
    {en: "Extreme", ua: "Екстремальний"},
    {en: "Source", ua: "Джерело"},
    {en: "Conversation", ua: "Бесіда"},
    {en: "Average", ua: "Середній"},
    {en: "Obtain", ua: "Отримати"},
    {en: "Arrange", ua: "Влаштувати"},
    {en: "Blind", ua: "Сліпий"},
    {en: "Wage", ua: "Заробітна плата"},
    {en: "Rural", ua: "Сільський"},
    {en: "Goal", ua: "Гол"},
    {en: "Approach", ua: "Підхід"},
    {en: "Pull", ua: "Потягнути"},
    {en: "Undo", ua: "Скасувати"},
    {en: "Redo", ua: "Повторити"},
    {en: "Comit", ua: "Комітет"},
    {en: "Examine", ua: "Вивчити"},
    {en: "Request", ua: "Запит"},
    {en: "Ref", ua: "Посилання"},
    {en: "Consistent", ua: "Послідовний"},
    {en: "Bundle", ua: "Пачка"},
    {en: "Trial", ua: "Випробування"},
    {en: "Affirm", ua: "Підтвердити"},
    {en: "Such", ua: "Такі"},
    {en: "Special", ua: "Спеціальні"},
    {en: "adjust", ua: "коригувати"},
    {en: "charm", ua: "чарівність"},
    {en: "merger", ua: "злиття"},
    {en: "move", ua: "рухатися"},
    {en: "embody", ua: "втілювати"},
    {en: "baffled", ua: "збентежений"},
    {en: "don't worry", ua: "не хвилюйтесь"},
    {en: "time has passed", ua: "час минув"},
    {en: "press", ua: "прес"},
    {en: "produce", ua: "виробляти"},
    {en: "approve", ua: "схвалювати"},
    {en: "deploy", ua: "розгорнути"},
    {en: "conversation", ua: "розмова"},
    {en: "intersection", ua: "перехрестя"},
    {en: "customize", ua: "налаштувати"},
    {en: "reproduce", ua: "відтворювати"},
    {en: "quickly", ua: "швидко"},
    {en: "decition", ua: "постановлення"},
    {en: "anable", ua: "анаболічний"},
    {en: "mention", ua: "згадка"},
    {en: "metric", ua: "метричні"},
    {en: "comper", ua: "компер"},
    {en: "regarding", ua: "стосовно"},
    {en: "becomes", ua: "стає"},
    {en: "publisher", ua: "видавець"},
    {en: "immpresion", ua: "імпресія"},
    {en: "sentually", ua: "посланний"},
    {en: "mock", ua: "макет"},
    {en: "difficult", ua: "важко"},
    {en: "generally", ua: "загалом"},
    {en: "quickly", ua: "швидко"},
    {en: "decition", ua: "постановлення"},
    {en: "mention", ua: "згадка"},
    {en: "compare", ua: "порівнювати"},
    {en: "regarding", ua: "стосовно"},
    {en: "becomes", ua: "стає"},
    {en: "publisher", ua: "видавець"},
    {en: "immpretion", ua: "імпресія"},
    {en: "mock", ua: "макет"},
    {en: "difficult", ua: "важко"},
    {en: "generally", ua: "загалом"},
    {en: "imoleament", ua: "підживлення"},
    {en: "compale", ua: "ущільнювати"},
    {en: "simmilar", ua: "подібний"},
    {en: "compatible", ua: "сумісні"},
    {en: "divide", ua: "розділити"},
    {en: "relate", ua: "пов'язувати"},
    {en: "terrain", ua: "місцевість"},
    {en: "customizable", ua: "настроюється"},
    {en: "enhancements", ua: "покращення"},
    {en: "layer", ua: "шар"},
    {en: "horizon", ua: "горизонт"},
    {en: "fog", ua: "туман"},
    {en: "Invalid", ua: "Недійсний"},
    {en: "assignment", ua: "призначення"},
    {en: "occur", ua: "відбуваються"},
    {en: "toggle-baselayers", ua: "перемикачі-базові шари"},
    {en: "baselayer", ua: "базовий шар"},
    {en: "referre", ua: "направити"},
    {en: "deprecate", ua: "знецінити"},
    {en: "in favor", ua: "на користь"},
    {en: "Internally", ua: "Внутрішньо"},
    {en: "plainly", ua: "однозначно"},
    {en: "snippet", ua: "фрагмент"},
    {en: "hit", ua: "удар"},
    {en: "repetitive", ua: "повторювані"},
    {en: "nullish", ua: "нульовий"},
    {en: "proposal", ua: "пропозиція"},
    {en: "toggler", ua: "перемикач"},
    {en: "posibility", ua: "можливість"},
    {en: "impleament", ua: "реалізація"},
    {en: "doesn't", ua: "не робить"},
    {en: "matter", ua: "матерія"},
    {en: "generally", ua: "загалом"},
    {en: "prefix", ua: "префікс"},
    {en: "abvious", ua: "відсутня"},
    {en: "diff", ua: "різниця"},
    {en: "represents", ua: "представляє"},
    {en: "exposes", ua: "викриває"},
    {en: "bearing", ua: "підшипник"},
    {en: "hash", ua: "хеш"},
    {en: "fired", ua: "звільнений"},
    {en: "idle", ua: "простою"},
    {en: "pointing", ua: "вказування"},
    {en: "rotate", ua: "обертати"},
    {en: "fit", ua: "підходить"},
    {en: "bounds", ua: "межі"},
    {en: "terrain", ua: "місцевість"},
    {en: "repaint", ua: "перефарбувати"},
    {en: "handling", ua: "поводження"},
    {en: "logger", ua: "лісоруб"},
    {en: "Square", ua: "Майдан"},
    {en: "Discast", ua: "Розповсюдження"},
    {en: "capture", ua: "захоплення"},
    {en: "recognize", ua: "впізнати"},
    {en: "execute", ua: "виконувати"},
    {en: "dispense", ua: "дозувати"},
    {en: "monetary", ua: "грошові"},
    {en: "built in", ua: "вбудований"},
    {en: "record", ua: "запис"},
    {en: "we got", ua: "ми отримали"},
    {en: "what we do", ua: "що ми робимо"},
    {en: "what makes all the difference", ua: "у чому різниця"},
    {en: "horrible", ua: "жахливо"},
    {en: "terrible", ua: "страшний"},
    {en: "taste", ua: "смак"},
    {en: "to buzz", ua: "гудіти"},
    {en: "buzz him in", ua: "ввімкніть його"},
    {en: "he finnaly", ua: "він нарешті"},
    {en: "to ask me", ua: "спитати мене"},
    {en: "in other words", ua: "іншими словами"},
    {en: "more", ua: "більше"},
    {en: "less", ua: "менше"},
    {en: "what you think is less important", ua: "те, що ви вважаєте менш важливим"},
    {en: "confident", ua: "впевнений у собі"},
    {en: "is there a defference between you and me?", ua: "чи є різниця між вами та мною ?"},
    {en: "self-help", ua: "самодопомога"},
    {en: "availabel", ua: "доступний"},
    {en: "inreality", ua: "в реальності"},
    {en: "to matter", ua: "мати значення"},
    {en: "where is the?", ua: "де є?"},
    {en: "let is go to", ua: "let is to to"},
    {en: "how much is this", ua: "скільки це коштує"},
    {en: "hungry", ua: "голодний"},
    {en: "what time is it", ua: "котра година"},
    {en: "could be worse", ua: "могло бути гірше"},
    {en: "could be better", ua: "могло б бути краще"},
    {en: "in general! not bad", ua: "загалом! непогано"},
    {en: "i was learnt", ua: "мене навчили"},
    {en: "never better", ua: "ніколи краще"},
    {en: "what dows this word mean", ua: "що означає це слово"},
    {en: "that sound greate", ua: "це чудово звучить"},
    {en: "that suks", ua: "що смокче"},
    {en: "hold on", ua: "Зачекай"},
    {en: "lets have some", ua: "давайте трохи"},
    {en: "i down", ua: "i вниз"},
    {en: "queue", ua: "черга"},
    {en: "for shure!", ua: "за шуре !"},
    {en: "i will you miss to", ua: "я буду сумувати за тобою"},
    {en: "to be here on time", ua: "бути вчасно"},
    {en: "to inform you", ua: "повідомити вас"},
    {en: "this is nonsense", ua: "це нісенітниця"},
    {en: "clearly", ua: "чітко"},
    {en: "this is your fault", ua: "це твоя провина"},
    {en: "but you leave me no choice", ua: "але ти не залишаєш мені вибору"},
    {en: "you will regret this", ua: "ви пошкодуєте про це"},
    {en: "you are a brave", ua: "ти сміливий"},
    {en: "those are actually", ua: "це насправді"},
    {en: "that comes from", ua: "що походить від"},
    {en: "it is pleasure", ua: "це задоволення"},
    {en: "hopefully", ua: "сподіваюся"},
    {en: "introduction", ua: "введення"},
    {en: "i couldn't make", ua: "я не міг зробити"},
    {en: "would you like to have some", ua: "ти хотів би мати"},
    {en: "that is nice", ua: "це мило"},
    {en: "we will probably", ua: "ми напевно будемо"},
    {en: "i am just glad", ua: "я просто радий"},
    {en: "it went really well", ua: "це пройшло дуже добре"},
    {en: "conclusion", ua: "висновок"},
    {en: "this article", ua: "Ця стаття"},
    {en: "those", ua: "ті"},
    {en: "please call me", ua: "будь ласка, зателефонуй мені"},
    {en: "from my point of you", ua: "з моєї точки зору вас"},
    {en: "with regard to", ua: "стосовно"},
    {en: "my best guess", ua: "моє найкраще припущення"},
    {en: "as far as i can see", ua: "наскільки я бачу"},
    {en: "besides", ua: "крім того"},
    {en: "despite", ua: "незважаючи"},
    {en: "based on", ua: "на основі"},
    {en: "capable of", ua: "здатний"},
    {en: "envious of", ua: "заздрить"},
    {en: "famous of", ua: "відомий з"},
    {en: "guilty of", ua: "винен у"},
    {en: "keen on", ua: "Захоплюється"},
    {en: "opposed to", ua: "на відміну від"},
    {en: "used to", ua: "звик до"},
    {en: "well done", ua: "молодець"},
    {en: "keep it up", ua: "так тримати"},
    {en: "that's better than ever", ua: "це краще, ніж будь -коли"},
    {en: "dont apologize", ua: "не вибачайтесь"},
    {en: "forget about it", ua: "забути про це"},
    {en: "miracle", ua: "диво"},
    {en: "passion", ua: "пристрасть"},
    {en: "disire", ua: "неспроможність"},
    {en: "in other words", ua: "іншими словами"},
    {en: "however", ua: "проте"},
    {en: "on the country", ua: "про країну"},
    {en: "after all", ua: "після всього"},
    {en: "to date", ua: "на сьогоднішній день"},
    {en: "assume", ua: "припустити"},
    {en: "there is", ua: "існує"},
    {en: "gotta be", ua: "повинен бути"},
    {en: "definitely", ua: "безумовно"},
    {en: "recently, i notice that", ua: "нещодавно я помітив це"},
    {en: "he is restrain", ua: "він стриманий"},
    {en: "one of them", ua: "один з них"},
    {en: "wake up", ua: "прокинься"},
    {en: "whatever", ua: "що завгодно"},
    {en: "something stange", ua: "щось стояти"},
    {en: "what is the benefit", ua: "яка користь"},
    {en: "refer", ua: "посилатися"},
    {en: "execute", ua: "виконувати"},
    {en: "communicated", ua: "спілкувалися"},
    {en: "consist", ua: "складатися"},
    {en: "examine", ua: "оглядати"},
    {en: "what kind of", ua: "якого типу"},
    {en: "to aassume", ua: "прийняти"},
    {en: "i notice", ua: "я помітив"},
    {en: "to restrain", ua: "стримувати"},
    {en: "ordinary", ua: "звичайний"},
    {en: "underdog", ua: "андердог"},
    {en: "to pick on", ua: "підбирати"},
    {en: "affection", ua: "прихильність"},
    {en: "if i were you", ua: "на твоєму місці"},
    {en: "long time no see", ua: "давно не бачились"},
    {en: "greit to see you", ua: "вітаю вас"},
    {en: "i am not being funny", ua: "я не смішний"},
    {en: "to be honest", ua: "чесно кажучи"},
    {en: "i would love but", ua: "я хотів би, але"},
    {en: "supposed you have", ua: "припустимо, що у вас є"},
    {en: "stab", ua: "колоти"},
    {en: "with pleasure", ua: "із задоволенням"},
    {en: "deprecated", ua: "застарілий"},
    {en: "he is suspect that", ua: "він підозрюється в цьому"},
    {en: "we will probably", ua: "ми напевно будемо"},
    {en: "we gotta go", ua: "ми маємо йти"},
    {en: "it looks desperat", ua: "виглядає відчайдушно"},
    {en: "incredible", ua: "неймовірний"},
    {en: "you should not have gone", ua: "ти не повинен був їхати"},
    {en: "converge on", ua: "сходитись далі"},
    {en: "rarely", ua: "рідко"},
    {en: "barely", ua: "ледве"},
    {en: "i needed out", ua: "мені потрібен був вихід"},
    {en: "i guess anywhere", ua: "я здогадуюсь де завгодно"},
    {en: "is that like", ua: "це схоже"},
    {en: "dont get me wrong", ua: "не зрозумійте мене неправильно"},
    {en: "how come", ua: "як так"},
    {en: "long story short", ua: "короткий розповідь"},
    {en: "did you ever thing that", ua: "ти коли небудь таке робив"},
    {en: "i realized", ua: "я зрозумів"},
    {en: "i moved out", ua: "я виїхав"},
    {en: "odd choice", ua: "непарний вибір"},
    {en: "it scare me", ua: "це мене лякає"},
    {en: "that is weird", ua: "це дивно"},
    {en: "in fact", ua: "фактично"},
    {en: "expessially", ua: "бездоганно"},
    {en: "i mention", ua: "я згадую"},
    {en: "i am impressed", ua: "я перебуваю під враженням"},
    {en: "appropriate", ua: "відповідний"},
    {en: "whole bunch", ua: "ціла купа"},
    {en: "litteraly", ua: "буквально"},
    {en: "i was sore the next day", ua: "наступного дня мені стало боляче"},
    {en: "advance", ua: "заздалегідь"},
    {en: "influence", ua: "впливати"},
    {en: "separate", ua: "окремі"},
    {en: "we'll", ua: "добре"},
    {en: "swept", ua: "підмітається"},
    {en: "nonverbal", ua: "невербальний"},
    {en: "actually", ua: "насправді"},
    {en: "wanna", ua: "хочу"},
    {en: "gonna", ua: "збираюся"},
    {en: "get away", ua: "втекти"},
    {en: "to be into something", ua: "займатися чимось"},
    {en: "mess with fate", ua: "возитися з долею"},
    {en: "relationship", ua: "відносини"},
    {en: "i am little uncomfortable with this anyway", ua: "мені все одно трохи неприємно від цього"},
    {en: "some good ones", ua: "кілька хороших"},
    {en: "i'm desperate, basically", ua: "я відчайдушно, в основному"},
    {en: "not in general", ua: "не загалом"},
    {en: "i realize that", ua: "я це усвідомлюю"},
    {en: "you swing for the fence. hold on aa second, Albert", ua: "ти розгойдуєшся за паркан. зачекайте секунду, Альберте"},
    {en: "That's good", ua: "Добре"},
    {en: "how ridiculous this is", ua: "як це смішно"},
    {en: "you know what it's like", ua: "ти знаєш, як це"},
    {en: "wrong", ua: "неправильно"},
    {en: "but at the same time", ua: "але водночас"},
    {en: "let's go paint that seiling", ua: "підемо пофарбувати це сідло"},
    {en: "take it easy", ua: "заспокойся"},
    {en: "On the one hand", ua: "З одного боку"},
    {en: "i thought  to ask", ua: "я думав запитати"},
    {en: "passion for", ua: "пристрасть до"},
    {en: "respond", ua: "відповідати"},
    {en: "samples", ua: "зразки"},
    {en: "we will run the whole lot of them by you", ua: "ми всі ними керуватимемо вами"},
    {en: "let is go over this one more time", ua: "давайте розглянемо це ще раз"},
    {en: "what is the objective", ua: "яка мета"},
    {en: "shock and awe", ua: "шок і трепет"},
    {en: "awful", ua: "жахливо"},
    {en: "exactly", ua: "саме"},
    {en: "handle", ua: "ручка"},
    {en: "to go over things", ua: "перебирати речі"},
    {en: "I going to buy a car there over", ua: "Я збираюся купити там машину"},
    {en: "occasionally", ua: "зрідка"}, 
    {en: "assist", ua: "допомагати"},
    {en: "complicate", ua: "ускладнювати"},
    {en: "collecte", ua: "збирати"},
    {en: "standardize", ua: "стандартизувати"},
    {en: "should go", ua: "повинен йти"},
    {en: "at the same time", ua: "в той самий час"},
    {en: "i feel obliged", ua: "я відчуваю себе зобов'язаним"},
    {en: "first crossed my mind", ua: "вперше прийшло в голову"},
    {en: "noting", ua: "відзначаючи"},
    {en: "introvert", ua: "інтроверт"},
    {en: "accross", ua: "навпроти"},
    {en: "right away", ua: "зразу"},
    {en: "assign", ua: "призначити"},
    {en: "available", ua: "доступний"},
    {en: "You should inform", ua: "Вам слід повідомити"},
    {en: "From time to time", ua: "Час від часу"},
    {en: "I turned on the dota", ua: "Я включив доту"},
    {en: "urgent", ua: "терміново"},
    {en: "Cool-headed", ua: "З холодною головою"},
    {en: "The fact is that", ua: "Справа в тому, що"},
    {en: "Evidence", ua: "Докази"},
    {en: "You should be honest with what is going on", ua: "Ви повинні бути чесними з тим, що відбувається"},
    {en: "You were busy with the emergency task", ua: "Ви були зайняті надзвичайним завданням"},
    {en: "You will apologies and prioritise this task.", ua: "Ви вибачитесь і визначите пріоритетність цього завдання"}, 
    {en: "what he thinks of proposed solution", ua: "що він думає про запропоноване рішення"},
    {en: "and it will be less time consuming than writing a long post.", ua: "і це займе менше часу, ніж написання довгого повідомлення"},
    {en: "Notifying the client on the time about your vacations and obligations", ua: "Повідомлення клієнта вчасно про ваші відпустки та обов’язки"},
    {en: "feature", ua: "функція"},
    {en: "in front of her", ua: "перед нею"},
    {en: "Plenty", ua: "Вдосталь"},
    {en: "and the essense the fact is", ua: "і суть в тому"},
    {en: "Frequently", ua: "зрідка"},
    {en: "such as what", ua: "наприклад що"},
    {en: "Playing football", ua: "Грати у футбол"},
    {en: "Before", ua: "Раніше"},
    {en: "However", ua: "Однак"}, 
    {en: "The most", ua: "Найбільший"},  
    {en: "on daily basis", ua: "на щоденній основі"},
    {en: "I am constantly thinking about you.", ua:	"Я постійно думаю про тебе"},
    {en: "how is it going?", ua: "Як справи?"},
    {en: "I owe to you", ua: "Я тобі винен"},
    {en: "My pleasure", ua: "Немає за що "},
    {en: "That reminds me", ua: "О згадав"},
    {en: "To ring a bell", ua: "Звучить знайомо"},
    {en: "Could you do me a favor?", ua: "Ти можеж мені помогти?"},
    {en: "It’s may be aa bit tricky", ua: "Це може бути трохи важко"},
    {en: "It was chatting to you!", ua: "Було приємно проговорити"},
    {en: "I gotta go!", ua: "Я маю йти"},
    {en: "Can’t complain", ua: "Не жаліюсь"},

];

const users = [
    {
        name: "oleg",
        surname: "salabay",
        email: "olegsalabaymac@gmail.com",
        photo: "",
        describe: "",
        password: "1234",
        role: "admin",
        dictionary: [],
    }
];

export {
    allWords,
    users
};