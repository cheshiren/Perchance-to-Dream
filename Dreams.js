﻿var storyContent = {"inkVersion":19,"root":[[{"#":"title: И видеть сны, быть может?"},{"#":"INPUT"},["ev",{"VAR?":"hub_restart_count"},4,">","/ev",{"->":".^.b","c":true},{"b":["\n","^Если вы играете в первый раз, попробуйте ввести «Лето» ",{"#":"CLASS: choice"},"\n",{"->":"0.3"},null]}],"nop","\n","ev","str","^ ","/str","/ev",{"*":"0.c-0","flg":20},{"c-0":["^ ",{"->":"hub"},"\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",null]}],"done",{"hub":[{"#":"CLEAR"},["ev",{"VAR?":"key"},"str","^лето","/str","==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",0,"/ev",{"VAR=":"hub_restart_count","re":true},{"->":"russian"},{"->":"hub.8"},null]}],["ev",{"VAR?":"key"},"str","^метро","/str","==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",0,"/ev",{"VAR=":"hub_restart_count","re":true},{"->":"metro_rus"},{"->":"hub.8"},null]}],["ev",{"VAR?":"key"},"str","^тави","/str","==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",0,"/ev",{"VAR=":"hub_restart_count","re":true},{"->":"hospital_rus"},{"->":"hub.8"},null]}],["ev",{"VAR?":"key"},"str","^букет","/str","==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",0,"/ev",{"VAR=":"hub_restart_count","re":true},{"->":"cemetry_rus"},{"->":"hub.8"},null]}],["ev",{"VAR?":"key"},"str","^тишина","/str","==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",0,"/ev",{"VAR=":"hub_restart_count","re":true},{"->":"office"},{"->":"hub.8"},null]}],["ev",{"VAR?":"key"},"str","^лестница","/str","==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",0,"/ev",{"VAR=":"hub_restart_count","re":true},{"->":"woods"},{"->":"hub.8"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"hub_restart_count"},1,"+",{"VAR=":"hub_restart_count","re":true},"/ev",{"#":"RESTART"},{"->":"hub.8"},null]}],"nop","\n",null],"russian":[["^ЛЕТО ",{"#":"CLASS: head"},"\n","^Запахи травы, мокрых камней, горячего <i>асфальта</i>. Прохлада озёрной воды и тепло девичьего плеча. Тень от заброшенного элеватора и жёсткие лепестки полевых цветов. Гуденье ветра в проводах высоко над головой. Ржавый велосипед. Лето.","\n",["ev",{"^->":"russian.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^…Девятое? Десятое?…",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"russian.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^Смеющиеся, загорелые лица, которых не видел столько лет. Облезлый мяч на пустынном, вытоптанном поле с торчащими из снега арматурными прутьями вместо ворот.","\n",[["ev",{"^->":"russian.0.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^…Из снега?…",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"russian.0.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^Старшие ребята из шланга заливают высоченную ледяную горку. Вода парит под жарким июньским солнцем.","\n",[["ev",{"^->":"russian.0.c-0.9.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^…И я уже знаю, что это сон…",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"russian.0.c-0.9.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^«Эй, а не слишком ли она высокая для <b>метро</b>?»","\n",[["ev",{"^->":"russian.0.c-0.9.c-0.9.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^>>",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"russian.0.c-0.9.c-0.9.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#":"RESTART"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],null],"metro_rus":["^МЕТРО ",{"#":"CLASS: head"},"\n","^…И я открываю глаза.","\n","^Моргаю, отгоняя фантомы сна и грусть по затухающим образам детства. Вагон метро. В окне напротив — моё тусклое отражение, за которым то и дело проносятся лампы туннельного совещения. Вагон мерно покачивается, подрагивая на стыках рельс. Но шума почти не слышно за музыкой в каплях наушников.","\n","^Я широко зеваю и осматриваюсь. Вагон почти пуст. В одном конце что-то живо обсуждает небольшая компания школьников. Ближе к середине сидит пожилая пара, читающая одну на двоих газету. Молодая девушка, поглощённая ярким прямоугольником телефона в своей руке, прислонилась к дверям, чёрные перья её волос ритмично покачиваются в такт музыке в больших жёлтых наушниках.","\n",{"->":".^.car_opts_rus"},{"car_opts_rus":[["ev","str","^Вынуть свои наушники","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Подойти к школьникам","/str",{"VAR?":"Metro_whereabouts"},"str","^pupils","/str","!=","/ev",{"*":".^.c-1","flg":5},"ev","str","^Отойти от мальчишек","/str",{"VAR?":"Metro_whereabouts"},"str","^pupils","/str","==","/ev",{"*":".^.c-2","flg":5},"ev","str","^Подойти к старикам","/str",{"VAR?":"Metro_whereabouts"},"str","^oldpair","/str","!=","/ev",{"*":".^.c-3","flg":5},"ev","str","^Отойти от стариков","/str",{"VAR?":"Metro_whereabouts"},"str","^oldpair","/str","==","/ev",{"*":".^.c-4","flg":5},"ev","str","^Подойти к девушке","/str",{"VAR?":"Metro_whereabouts"},"str","^girl","/str","!=","/ev",{"*":".^.c-5","flg":5},"ev","str","^Привлечь внимание девушки","/str",{"VAR?":"Metro_whereabouts"},"str","^girl","/str","==",{"CNT?":".^.^.^.girl_goto_rus"},1,"==","&&",{"CNT?":".^.^.^.girl_attention_rus"},"!","&&","/ev",{"*":".^.c-6","flg":5},"ev","str","^Заговорить с девушкой","/str",{"VAR?":"Metro_whereabouts"},"str","^girl","/str","==",{"CNT?":".^.^.^.girl_goto_rus"},2,">=",{"CNT?":".^.^.^.girl_attention_rus"},"||","&&","/ev",{"*":".^.c-7","flg":5},"ev","str","^Отойти от девушки","/str",{"VAR?":"Metro_whereabouts"},"str","^girl","/str","==","/ev",{"*":".^.c-8","flg":5},{"c-0":["^ ",{"->":".^.^.^.^.headphones_take_off_rus"},"\n",{"#f":5}],"c-1":["^ ",{"->":".^.^.^.^.pupils_goto_rus"},"\n",null],"c-2":["^ ",{"->":".^.^.^.^.pupils_from_rus"},"\n",null],"c-3":["^ ",{"->":".^.^.^.^.oldpair_goto_rus"},"\n",null],"c-4":["^ ",{"->":".^.^.^.^.oldpair_from_rus"},"\n",null],"c-5":["^ ",{"->":".^.^.^.^.girl_goto_rus"},"\n",null],"c-6":["^ ",{"->":".^.^.^.^.girl_attention_rus"},"\n",null],"c-7":["^ ",{"->":".^.^.^.^.girl_talk_rus"},"\n",null],"c-8":["^ ",{"->":".^.^.^.^.girl_from_rus"},"\n",null]}],null],"headphones_take_off_rus":["^Я вытаскиваю чёрные капельки из ушей и оставляю их висеть на шее. Теперь я отчётливо слышу шум поезда.","\n",{"->":".^.^.car_opts_rus"},{"#f":1}],"pupils_goto_rus":["ev","str","^pupils","/str","/ev",{"VAR=":"Metro_whereabouts","re":true},["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","\n","^Я, держась за поручни, прохожу к группке школьников и вижу, чем они так увлечены: один из мальчиков сжимает в руках карманную игровую приставку, а его пальцы мелькают по десятку кнопок с пугающей быстротой и точностью.","\n","<>","ev",{"CNT?":".^.^.^.^.headphones_take_off_rus"},"/ev",[{"->":".^.b","c":true},{"b":["^ Остальные подбадривают его радостными возгласами.",{"->":".^.^.^.10"},null]}],[{"->":".^.b"},{"b":["^ Остальные подбадривают его возбуждёнными возгласами, которых я не слышу из-за музыки.",{"->":".^.^.^.10"},null]}],"nop","\n",{"->":".^.^.17"},null],"s1":["pop","\n","^Я снова подхожу к школьникам, но им не до меня — тот, что с приставкой, кажется, добрался до босса.","\n",{"->":".^.^.17"},null],"#f":5}],"\n",{"->":".^.^.car_opts_rus"},null],"pupils_from_rus":["ev","str","^car","/str","/ev",{"VAR=":"Metro_whereabouts","re":true},"^Я отхожу от мальчишек и возвращаюсь на своё место.","\n",{"->":".^.^.car_opts_rus"},null],"oldpair_goto_rus":["ev","str","^oldpair","/str","/ev",{"VAR=":"Metro_whereabouts","re":true},["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","\n","^Я медленно подхожу к пожилым людям и встаю перед ними, держась за поручень.","\n","ev",{"CNT?":".^.^.^.^.headphones_take_off_rus"},"/ev",[{"->":".^.b","c":true},{"b":["^ — Молодой человек, — раздаётся скрипучий голос женщины. — Если вам так нравится стоять рядом с нами, то хотя бы не закрывайте свет. Спасибо.",{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{"b":["<>","^ Женщина что-то говорит, обращаясь ко мне, но я не могу разобрать её слов за музыкой, поэтому она лишь качает головой.",{"->":".^.^.^.9"},null]}],"nop","\n",{"->":".^.^.17"},null],"s1":["pop","\n","^Я снова подхожу к старикам и встаю над ними. Они осматривают меня поверх своей газеты, переглядываются и, покачав головами, продолжают читать.","\n",{"->":".^.^.17"},null],"#f":5}],"\n",{"->":".^.^.car_opts_rus"},null],"oldpair_from_rus":["ev","str","^car","/str","/ev",{"VAR=":"Metro_whereabouts","re":true},"^Я отхожу от пожилых людей и возвращаюсь на своё место.","\n",{"->":".^.^.car_opts_rus"},null],"girl_goto_rus":["ev","str","^girl","/str","/ev",{"VAR=":"Metro_whereabouts","re":true},["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^Я, ведя рукой по кольцам поручней, приближаюсь к девушке и встаю перед ней. Она лишь бросает на меня мимолётный взгляд и вновь переключается на свой телефон.",{"->":".^.^.23"},null],"s1":["pop","^Я снова подхожу к девушке и жестом пытаюсь привлечь её внимание. Она смотрит на меня, вопросительно поднимает брови и стягивает свои наушники.",{"->":".^.^.23"},null],"s2":["pop","^Я снова подхожу к девушке и приветливо улыбаюсь, когда она, хмурясь, в очередной раз стягивает свои наушники.",{"->":".^.^.23"},null],"#f":5}],"\n",{"->":".^.^.car_opts_rus"},{"#f":1}],"girl_from_rus":["ev","str","^car","/str","/ev",{"VAR=":"Metro_whereabouts","re":true},["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^Я отхожу от девушки и возвращаюсь на своё место.",{"->":".^.^.17"},null],"s1":["pop","^Когда я отворачиваюсь от девушки, чтобы вернуться на сиденье, она пожимает плечами и натягивает свои жёлтые наушники.",{"->":".^.^.17"},null],"#f":5}],"\n",{"->":".^.^.car_opts_rus"},null],"girl_attention_rus":["^Взмахом руки я пытаюсь привлечь её внимание. Она смотрит на меня, вопросительно поднимает брови и стягивает свои наушники.","\n",{"->":".^.^.car_opts_rus"},{"#f":1}],"girl_talk_rus":["ev",{"CNT?":".^.^.headphones_take_off_rus"},"!","/ev",[{"->":".^.b","c":true},{"b":["\n","^Собираюсь сказать что-нибудь приветственное, но замечаю её выразительный взгляд на мои собственные наушники, торчащие из ушей.","\n",{"->":".^.^.^.^.car_opts_rus"},{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{"b":["\n",{"->":".^.^.^.^.girl_talk_topics_rus"},{"->":".^.^.^.6"},null]}],"nop","\n",null],"girl_talk_topics_rus":[["^Но как только я открываю рот, чтобы спросить, как её зовут, она задаёт вопрос:","\n","^— Ты никогда не задумывался, как люди становятся плохими? Ведь человек изначально не такой. Значит, он становится плохим после череды плохих поступков, так? А сколько должно быть таких поступков?","\n","ev","str","^Извини?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Зло относительно.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Одного проступка достаточно.","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","^— Не совсем понимаю, о чём ты.","\n","^— Я говорю о морали. Допустим, ты навредишь десяти людям и всё ещё будешь считаться уважаемым членом общества, но когда счёт дойдёт до одиннадцати, ты становишься парией. Есть ли эта граница? Не перестаю об этом думать.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^— Для разных людей одни и те же поступки могут иметь разное значение. Для вора кража однозначно во благо. Для его жертвы наоборот.","\n","^— Это так. Значит, нужно подняться над индивидуальным отношением к действиям личности и оценивать их с позиции общества. Хорошим может считаться только тот поступок, который приносит коллективное благо. Но опять же, если половина членов общества считают поступок хорошим, а другая половина считают его плохим, какой он тогда? Каким должно быть соотношение для однозначности? Не перестаю об этом думать.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["\n","^— Это как ложка дёгтя, достаточно одного проступка, чтобы испортить себе карму.","\n","^Она смеётся:","\n","^— Тогда среди нас нет по-настоящему хороших людей. А хорошими мы называем наименее плохих. По-моему это слишком строго. Даже религия допускает некоторую долю греховности, которую можно искупить. И здесь мы подходим к понятию тяжести проступка. Сколько обёрток из-под шоколада нужно бросить мимо урны, чтобы сравняться с одной атомной бомбой, сброшенной на город? Не перестаю об этом думать.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["ev","str","^Ответа может и не быть.","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^Кто-то наверняка всё это уже продумал.","/str","/ev",{"*":".^.c-4","flg":20},{"c-3":["\n","^— По-моему, такие вопросы вообще не разрешимы. Стоит ли вообще тратить на них своё время?","\n",{"->":".^.^.^.g-1"},{"#f":5}],"c-4":["\n","^— За две тысячи лет цивилизации кто-нибудь наверняка уже задумывался над этими вопросами. Нужно только почитать нужного философа.","\n",{"->":".^.^.^.g-1"},{"#f":5}]}],"g-1":["^В этот момент за окнами мелькают огни станции и поезд мягко тормозит у платформы. Девушка разворачивается и не говоря ни слова ныряет в толпу за дверью.","\n","ev","str","^Следовать за ней","/str","/ev",{"*":".^.c-5","flg":20},{"c-5":["\n","^Я устремляюсь за ней, но меня оттирают в сторону, прижимают к поручням. Толкаясь, отпинываясь, огрызаясь на ругательства, я, наконец, выбираюсь из вагона и озираюсь по сторонам. Вон она. У подножья широкой лестницы я замечаю жёлтое пятно её наушников.","\n",["ev","str","^За ней!","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Я бегу. Огибая людей, перепрыгивая скамейки, оскальзываясь, едва не падая, достигаю лестницы. Прыгая через две ступени, добираюсь до верха. Мимо полицейских, усталых лиц пассажиров, хохочущих подростков. Бегу по переходу между станциями, выбегаю на галерею над платформой и тут замечаю её. У открытых дверей подоспевшего состава.","\n",["ev","str","^Окликнуть её","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^— Постой! — кричу я в вечернюю толпу. — Скажи, как тебя зовут!","\n","^Она медлит у входа в вагон. Оглядывается — чёрные волосы падают на смеющиеся тёмные глаза — и с улыбкой откликается:","\n","^— А ведь когда-то ты поклялся, что будешь помнить меня вечно! — и исчезает.","\n","^Что-то обрывается внутри меня и с воем несётся в бездну.","\n",["ev","str","^Тави?!","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Я вцепляюсь в перила, чтобы унять внезапное головокружение. Это была <b>Тави</b>? Быть этого не может. Но... <b>Тави</b>? Я наверное всё ещё сплю.","\n",[["ev",{"^->":"metro_rus.girl_talk_topics_rus.0.g-1.c-5.3.c-0.3.c-0.9.c-0.3.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^>>",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"metro_rus.girl_talk_topics_rus.0.g-1.c-5.3.c-0.3.c-0.9.c-0.3.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#":"RESTART"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}]}],null]}],"hospital_rus":["^ТАВИ ",{"#":"CLASS: head"},"\n","^…И я прихожу в себя.","\n","^В который раз, в третий? Четвёртый?","\n","^Ноющая неизбывная боль во всей левой части тела. Плохая боль. Боль-знак. Боль-предвестник. Надо скорее позвать Тави.","\n","^Я приоткрываю слезящиеся глаза. Хочу вытереть их тыльной стороной ладони, но всё, что у меня получается — вздрогнуть указательным пальцем.","\n","^Я пробую сфокусировать взгляд. Яркий свет мешает, но я упорствую.","\n","^Больничная палата. Койка. Я смотрю на светло-зелёное одеяло, подоткнутое с двух сторон под тело. Руки лежат на одеяле. Артритные суставы пальцев. Пигментные пятна. Руки старика.","\n","^Я перевожу взгляд дальше. У двери в палату стоит врач и беседует с мужчиной и женщиной. Говорят негромко, до меня мало что доносится: «…домой…состояние…дорога…третий приступ может…лучше здесь…недолго».","\n","^За окном слышны шелест листвы и щебет птиц.","\n",{"->":".^.hospital_opts_rus"},{"hospital_opts_rus":[["ev","str","^Сжать кулак","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Приглядеться к посетителям","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Спросить их, где Тави","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^Семьдесят лет жизни в своё удовольствие, из которых пятьдесят — выкуривая по пачке в день, и ты всё ещё хочешь сжать эту траченую артритом руку?",{"->":".^.^.17"},null],"s1":["pop","^Уже не в этой жизни, старина.",{"->":".^.^.17"},null],"#f":5}],"\n",{"->":".^.^.g-0"},null],"c-1":["\n","^Мужчина среднего роста, со всё ещё густой шевелюрой, правда, почти седой. Грузноват, но когда-то был спортсменом. Его спутница — стройная ухоженная женщина лет пятидесяти с жёстким и властным ртом.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["\n","^— Господа, а вы не могли бы позвать мою жену? — пытаюсь сказать я, но на первом же звуке меня сотрясает долгий кашель, от которого левую сторону полосует молниями боли. Я стону.","\n","^Первым поспевает мужчина. Он склоняется надо мной и, положив свою руку на мою, говорит:","\n","^— Пап, я здесь. Я рядом.","\n","^Вот тебе и раз.","\n","^Врач появляется с другой стороны койки и колдует над капельницей:","\n","^— Я введу обезболивающее, через пару минут боль утихнет.","\n","^Цокая, подходит женщина, встаёт за спиной сына.","\n","^Клара. Да, её я помню.","\n",["ev","str","^Всё-таки спросить их, где Тави","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Сквозь хрипы и свист я всё же спрашиваю:","\n","^— Где Тави? Почему я не вижу здесь твоей мамы, сынок?","\n","^Он расстерянно оглядывается на Клару. Потом на врача.","\n","^— Пап… Мы ведь уже об этом…","\n","^— Она будет чуть позже, — Клара показывается из-за его спины. Прячет глаза. — Вам пока нужно отдохнуть, набраться сил.","\n","^Всё как-то отдаляется, боль не стихает, но отходит на другой план. Быстро же подействовало лекарство.","\n","^Краем глаза я отмечаю мазки голубого и синего. <b>Букет</b> цветов на столе.","\n","^— А, гортензии. Её любимые.","\n","^Я смотрю и смотрю на цветы. А всё вокруг смазывается, истончается, блекнет, пока не остаётся лишь <b>букет</b>.","\n","^Мне кажется, что я слышу женский плач. Мне кажется, что я чувствую снег в пальцах. Но <b>букет</b> по-прежнему прекрасен.","\n",[["ev",{"^->":"hospital_rus.hospital_opts_rus.0.c-2.17.c-0.21.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^>>",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"hospital_rus.hospital_opts_rus.0.c-2.17.c-0.21.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#":"RESTART"},{"->":".^.^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"g-0":[{"->":".^.^.^"},null]}],null]}],"cemetry_rus":["^БУКЕТ ",{"#":"CLASS: head"},"\n","^Я просыпаюсь, когда автобус наезжает на кочку. Отнимаю голову от запотевшего окна и зеваю. Большинство мест в салоне занято, но когда я схожу на следующей остановке, за мной никто не выходит.","\n","^Я раскрываю зонт и, опираясь на деревянную трость, прохожу в ворота. Кладбищенский сторож, затянутый в жёлтый блестящий дождевик, сметает липнущие к асфальту листья с маленькой парковки. Он приветствует меня, легонько коснувшись своей кепки под капюшоном, я отвечаю ему кивком и иду дальше, постукивая тростью.","\n","^Выхожу на аллею с вязами и лёгкий шорох дождевой мороси сменяется дробной капелью по зонту. По сторонам от дорожки тянутся аккуратные ряды увитых плющом надгробий. Некоторым из них уже несколько веков и мрамор статуй оплыл за сотни лет, завитки на курчавых головах ангелов сгладились, перья их крыльев слиплись.","\n","^Через равные промежутки из газона торчат чугунные столбики с номерами кварталов.","\n",{"->":".^.cemetry_opts_rus"},{"cemetry_opts_rus":[["ev","str","^Приглядеться к надгробиям","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Свернуть в нужный квартал","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^В молодости мне нравилось гулять по кладбищам, нравилось гадать о судьбах за именами и датами. Но это прошло, когда стали появляться имена, судьбы которых мне были хорошо известны. Со временем таких становилось всё больше и я быстро охладел к этим местам.","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n","^Ветер осыпает меня вихрем мокрых листьев, когда я сворачиваю в квартал с номером 36. Под шелест дождя я приближаюсь к нужному ряду. Ступая по мягкому газону, подхожу к могиле.","\n","^Скромное надгробие из серого гранита и точно такая же плита. На плите мокнет корзинка со свежими цветами. Значит, Андрос и Клара уже были.","\n","^Я глажу мокрую шершавость гранита и тихо здороваюсь:","\n","^— Добрый день, милая. Ну и погодка, а?","\n",["ev","str","^Вынуть свои цветы","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Перенеся вес на здоровую ногу, я перекладываю трость в руку с зонтом, расстёгиваю плащ и достаю маленький букет голубых гортензий.","\n",["ev","str","^Возложить букет","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Осторожно опускаюсь на одно колено и аккуратно кладу букет рядом с корзинкой от сына. Нежно-голубые лепестки тут же покрываются дождевой росой. Смахнув с плиты несколько красно-жёлтых листьев, встаю и, охнув от боли, опираюсь на шершавое надгробие:","\n","^— Да, колено меня не щадит.","\n",{"->":"cemetry_rus.cemetry_topics_rus"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],null],"cemetry_topics_rus":[["ev","str","^Рассказать про колено","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Рассказать про сына","/str",{"CNT?":".^.c-0"},"/ev",{"*":".^.c-1","flg":21},"ev","str","^Рассказать про внуков","/str",{"CNT?":".^.c-1"},"/ev",{"*":".^.c-2","flg":21},"ev","str","^Рассказать про погоду","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^Рассказать про октябрь","/str",{"CNT?":".^.c-3"},"/ev",{"*":".^.c-4","flg":21},"ev","str","^Рассказать про сны","/str",{"CNT?":".^.c-2"},{"CNT?":".^.c-4"},"&&","/ev",{"*":".^.c-5","flg":21},{"c-0":["\n","ev",{"CNT?":".^.^.c-3"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ Я ещё осторожнее сажусь на крошечную скамеечку и складываю руки на трости:",{"->":".^.^.^.6"},null]}],"nop","\n","^— Врач говорит, давно пора делать операцию, менять сустав. Дескать, титановый слишком тяжёл и всё-таки плохо переносится организмом. А с новым полимерным я даже не смогу вспомнить, какое же колено у меня болело. Идиот. Я ещё не настолько стар, чтобы забывать такие вещи. И он, конечно же, сказал, что я смогу танцевать. Если бы мне давали по монете каждый раз, когда я слышал эту фразу от докторов, мы бы с тобой жили богачами. Все врачи вруны и идиоты. Ну, кроме стоматологов. Иначе я не бы позволил нашему сыну стать стоматологом, да.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^— Андрос часто наведывается. Наверное, чаще, чем хочет Клара. Я, конечно, говорю, что не стоит, у них, должно быть, и своих дел по горло. Ему сейчас непросто, со всеми этими займами. Да только не так уж и много у меня сейчас радостей — будь моя воля, всё время проводил бы с внуками.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["\n","^— У Греты выпали первые два зуба. Переживает. Когда смеётся, ладошкой рот прикрывает, но иногда забывает, хохочет вовсю, а потом вдруг спохватывается, закрывается и от этого ещё сильнее смеётся. Малютка Йозеф уже и не такой маленький — как начал ходить, приходится всё прятать и повыше складывать. Так и воюем, каждую неделю — новые высоты. А Стефан повзрослел, посерьёзнел. Пока малыши играют, сидит в моём кресле, читает. Бывает, про тебя спрашивает…","\n",{"->":".^.^.g-0"},{"#f":5}],"c-3":["\n","ev",{"CNT?":".^.^.c-0"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ Я ещё осторожнее сажусь на крошечную скамеечку и складываю руки на трости:",{"->":".^.^.^.6"},null]}],"nop","\n","^— Говорят, дождь зарядил надолго. Все этому так удивляются, как дети, ей-богу. Никогда вот не было и на тебе, дождь. Осенью. В сентябре. Я раньше и не замечал, что вокруг столько идиотов. Как же мне не хватает твоего здравомыслия…","\n",{"->":".^.^.g-0"},{"#f":5}],"c-4":["\n","^— Вот думаю, не съездить ли через пару недель к морю. Октябрь всё-таки. От нашего домика, наверное, уже и не осталось ничего, да и по песку с моим коленом сильно не разгуляешься. Но что-то в последнее время часто вспоминается та осень…","\n",{"->":".^.^.g-0"},{"#f":5}],"c-5":["\n","^— Вот прямо сейчас в автобусе приснилось, будто мне уже далеко за восемьдесят, я лежу в больнице и зову тебя. Но обычно снится прошлое. Причём появляются такие детали, о которых я давно забыл. Помнишь, например, воздушного змея на том пляже? Как он улетел в море? Или как Андрос расстроился, когда не занял первого места на соревнованиях. А наша первая машина, оказывается, была зелёной, и не синей, как я думал. Что бы это всё значило?","\n",["ev","str","^Помолчать","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Я, наконец, замолкаю и долго смотрю на дрожащие под усилившимся дождём лепестки гортензий. Капли неслышно падают на цветы, на гранит, на зонт.","\n","^Посидев ещё немного, я осторожно встаю, глажу на прощание камень надгробия и ухожу, давясь слезами. А за мной по пятам следует <b>тишина</b>.","\n","^Я возвращаюсь тем же путём, мимо чугунных столбиков, мимо вязов, метлы сторожа. <b>Тишина</b> заполняет собой весь мир.","\n","^Выхожу в ворота, иду к остановке и сажусь в подъехавший автобус. Водитель что-то говорит, но я не слышу.","\n","^Всё теряет смысл, кроме этой <b>тишины</b>.","\n",[["ev",{"^->":"cemetry_rus.cemetry_topics_rus.0.c-5.3.c-0.11.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^>>",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"cemetry_rus.cemetry_topics_rus.0.c-5.3.c-0.11.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#":"RESTART"},{"->":".^.^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"g-0":["ev",{"CNT?":".^.^.c-2"},{"CNT?":".^.^.c-4"},"&&","/ev",[{"->":".^.b","c":true},{"b":["^ Знаешь, начали сниться сны. Про нас с тобой.",{"->":".^.^.^.6"},null]}],"nop","\n",{"->":".^.^.^"},null]}],null]}],"office":[["^ТИШИНА ",{"#":"CLASS: head"},"\n","^Я просыпаюсь от того, что стало слишком тихо. Оглянувшись по сторонам, вижу, как сидящие за переговорным столом прячут улыбки. Юный инженер замер в нерешительности перед проекционным экраном.","\n","^Ну вот опять. Я откашливаюсь:","\n","^— Прошу прощения, коллеги. Матиас, продолжайте свой доклад, будьте добры.","\n","^Когда это тощее недоразумение возобновляет свой бубнёж, наклоняюсь к Марку:","\n","^— Я что, храпел?","\n","^— О, не громче обычного, — тот поглядывает на проекционный экран поверх очков, делает вид, что записывает, и явно веселится.","\n","ev","str","^Побрюзжать","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^— Напомни, пожалуйста, зачем ты таскаешь меня по этим бесконечным совещаниям? Убитое на них время я бы с куда большей пользой потратил на текущие проекты. Проекты с очень агрессивными, напомню, сроками.","\n","^— По должностной инструкции ты, как руководитель подразделения, обязан присутствовать на всех еженедельных собраниях, — нет, ну точно развлекается.","\n","^— А ты как исполнительный директор можешь подтереться всей той кипой бумаг, которую исторгает твой отдел стандартизации. Кстати, видел тут нового HR-менеджера. И кому как не мне, последнему твоему настоящему другу, открывать тебе горькую правду: если начинаешь нанимать людей, чьи ноги длиннее, чем их извилины, то это старость.","\n","^Марк прячет улыбку в кулак.","\n",{"->":".^.^.opts"},{"#f":5}],"opts":[["ev","str","^Подсмотреть, что ","ev",{"CNT?":".^.c-1"},"/ev",[{"->":".^.b","c":true},{"b":["^ там пишет Марк",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^он там пишет",{"->":".^.^.^.8"},null]}],"nop","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Сосредоточиться на презентации","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Попросить ","ev",{"CNT?":".^.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["^ Марка",{"->":".^.^.^.26"},null]}],[{"->":".^.b"},{"b":["^его",{"->":".^.^.^.26"},null]}],"nop","^ помочь","/str",{"CNT?":".^.c-1"},"/ev",{"*":".^.c-2","flg":21},{"c-0":["\n","^Толстенной позолоченной ручкой Марк что-то там выводит в своём кожаном ежедневнике с золотым обрезом. Я незаметно подсматриваю и вижу нечто, отдалённо похожее на женскую фигуру. Ну, что-то подобное я и ожидал — старина Марк не изменяет сам себе. Скоро внуки пойдут, а всё туда же.","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n","^Я пытаюсь слушать про календарные графики на второе полугодие, сессии командообразования, результаты программы менторства, но нет, это решительно невозможно. Матиас неплохой инженер для своего возраста, даст фору некоторым старичкам из проектных групп, но вот докладчик из него никакой. Я борюсь с зевотой и вот-вот опять проиграю. Да ещё и несколько чашек кофе вместо того, чтобы отгонять сон, давят на мочевой пузырь. Как бы улизнуть?","\n",{"->":".^.^.^"},{"#f":5}],"c-2":["\n","^Я опять наклоняюсь к нему:","\n","^— Слушай, мне в уборную приспичило, можешь подстраховать? Позвони мне незаметно, а я сделаю вид, что это звонит кто-то по-настоящему важный, и сбегу, ок?","\n","^Марк смеривает меня взглядом поверх очков без оправы и, оставив мою шпильку без внимания, кивает.","\n","^Через минуту из моего кармана раздаётся трель. Я вынимаю телефон, смотрю на экран и, прижав его к груди, встаю:","\n","^— Коллеги, прошу меня извинить, важный звонок, я должен ответить. Продолжайте, пожалуйста, без меня.","\n","^И, едва прихрамывая, убираюсь из постылого конференц-зала.","\n","^За дверью сбрасываю звонок и направляюсь в конец коридора, вспоминая мелодию, слышанную утром в машине.","\n",["ev","str","^Напеть песню","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^«There's a lady who's sure all that glitters is gold. And she's buying a stairway to heaven…» — мурлычу я, подражая Роберту Планту, и подхожу к двери уборной.","\n",["ev","str","^Внутрь!","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Чем старше становишься, тем больше потакаешь своему организму. Стараешься исполнять все его прихоти. А он становится всё капризнее, продолжает коварно стареть и подкидывать тебе всё новые фокусы.","\n","^С такими мыслями я застёгиваю ширинку и иду к раковинам. Долго и тщательно мою руки — человек с той стороны зеркала ухмыляется, разглядывая мои морщины и седые виски.","\n","^Когда я тянусь к бумажным полотенцам, из кармана вновь доносится трель звонка.","\n",["ev","str","^Ответить","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Вытереть руки","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^Двумя пальцами, стараясь меньше касаться пиджака, достаю телефон. На экране высвечивается: «Жена». О, это Тави!","\n","^Телефон выскальзывает из пальцев и я какое-то время им жонглирую пока окончательно не ловлю.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^Я, не обращая внимания на трезвон, тщательно вытираю руки и сушу их под феном.","\n","^Телефон всё звонит. Что там, совещание уже закончилось что ли?","\n","^Наконец, достаю трубку и вижу на экране: «Жена». Это же Тави!","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Тут же отвечаю:","\n","^— Милая, извини, что долго снимал трубку — твой звонок застал меня в уборной. Давай, я тебе перезвоню минут через пять, поговорим про медосмотр?","\n","^— Мне нужно что-то тебе рассказать, дорогой.","\n","^Я чувствую напряжение в её голосе.","\n","ev","str","^Выслушать","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n","^— Хорошо, говори, — присаживаюсь на край мраморной раковины.","\n","^— Врачи говорят — у меня рак.","\n","^Несколько секунд я трачу на осознание услышанного.","\n",["ev","str","^Нет","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^— Погоди, ты же просто поехала забрать анализы. Анализы после планового осмотра…","\n","^— Они говорят — стадия неоперабельная.","\n",["ev","str","^Нет-нет-нет","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^— Ты сказала, что просто съездишь по своим женским делам и всё, ничего особенного…","\n","^— Ты слышишь? Они даже пытаться не будут!","\n",["ev","str","^Как же так, Тави?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Я глубоко вдыхаю.","\n","^— Мы что-нибудь придумаем. Мы обязательно что-нибудь придумаем, слышишь? Есть клиника на побережье. Все только о ней и говорят, лучшие врачи, лучшее оборудование. Всё будет в порядке. Мы справимся.","\n","^— Сказали, что у меня осталось полгода, — я слышу всхлипы.","\n","^— Где ты сейчас, родная?","\n","^— На парковке у медицинского центра. В машине. Не могу ехать. Мне… Мне страшно… — она плачет.","\n","^— Жди меня там, я сейчас приеду. Жди, Тави!","\n",["ev","str","^Только не ты, Тави!","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Не обращая внимания на занывшее колено, я бегу по коридорам и <b>лестницам</b> к подземной стоянке, падаю на водительское сиденье и спешу к выезду на улицу. И всё это время никак не могу избавиться от звучащей в голове строчки про даму, что покупает <b>лестницу</b> в небо.","\n",["ev","str","^Не оставляй меня!","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Я проезжаю на красный, с визгом поворачиваю на перекрёстках, а в голове всё звучит и звучит чёртова <b>лестница</b>.","\n",[["ev",{"^->":"office.0.opts.0.c-2.15.c-0.3.c-0.7.g-0.c-2.7.c-0.5.c-0.5.c-0.13.c-0.3.c-0.3.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^>>",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"office.0.opts.0.c-2.15.c-0.3.c-0.7.g-0.c-2.7.c-0.5.c-0.5.c-0.13.c-0.3.c-0.3.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#":"RESTART"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],null]}],null],"woods":[["^ЛЕСТНИЦА ",{"#":"CLASS: head"},"\n","^— There's a lady who's sure all that glitters is gold. And she's buying a stairway to heaven.","\n","^Я открываю глаза под звуки песни и смотрю на качающиеся тени листьев на ткани палатки. Зевая, перебираюсь к выходу, натягиваю ботинки, откидываю полог. Потягиваюсь, вдыхая чистый воздух осеннего вечера. Свет солнца ещё пробивается сквозь сосны, но в глубине подлеска уже скопилась темнота.","\n","ev","str","^Оглядеться","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Лагерь из пары десятков разноцветных палаток разбит вокруг нескольких костров. От костров доносятся звуки гитары, смеха, запахи еды. И оттуда в мою сторону идёт Тави с дымящейся кружкой в руках.","\n","^— Привет, ну как, выспался? — она протягивает мне кружку с кофе.","\n","^— Более или менее. Долго я спал?","\n","^— Пару часов. Скоро всех будут звать к ужину, так что ты как раз вовремя, — с этими словами она лезет в палатку.","\n",["ev","str","^Отпить кофе","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^— М-м. Слушай, а неплохой кофе. Похоже, Марк варил?","\n","^— Угадал, они приехали с полчаса назад, — доносится из палатки голос Тави. — Где-то тут моя кепка была... Ага, вот кепка Андроса. А он, похоже, ушёл в моей, — Тави вылезает из палатки и заправляет свои длинные чёрные волосы под красную кепку с эмблемой школьной сборной.","\n","^— А где сам Андрос?","\n","^— Не знаю, давно не видела. Он хмурый весь день, расстроился из-за вчерашней игры.","\n","^— М-м. Пойду-ка поищу его, — я возвращаю кружку жене и чмокаю её в щёку.","\n",{"->":"woods.woods_opts"},{"#f":5}]}],{"#f":5}]}],{"woods_opts":[["ev","str","^Попить ещё кофе","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Идти к кострам","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^— Тави, душа моя, позволь ещё раз отведать сего чудесного напитка.","\n","^Она улыбается и отпивает из кружки:","\n","^— О, любовь моя, в тех землях, куда лежит твой путь, ты сможешь отыскать свой собственный напиток.","\n","^— Жадина.","\n","^— Приживала.","\n","^Я ещё раз чмокаю её в щёку.","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n","^Я иду меж деревьев по пружинистому ковру из палых сосновых иголок и выхожу на поляну с кострами. Кивнув нескольким знакомым, подхожу к Марку, который колдует над кофейником. Он замечает меня и расплывается в улыбке:","\n","^— А, смотрите, кто идёт! Человек, что обозвал финансового директора «ботоксной клячей»! Герой! Дон Кихот!","\n","^— Имел полное моральное право. Ну и как у меня дела? Я уже безработный?","\n","^— Ха! Не надейся, Старик тебя слишком ценит, поэтому стоял насмерть. Но мощного врага ты себе нажил.","\n","^— Ладно, чего мы опять о работе, отдыхаем ведь. Ты Андроса не видел?","\n","^— Только когда он стянул пару сосисок с решётки и скрылся в направлении реки.","\n","^— Тави сказала, у тебя тут неплохой кофе водится?","\n","^— Да, но придётся подождать, пока новый сварю, — он поболтал в воздухе кофейником.","\n","^— Добро. Поищу пока сына.","\n",["ev","str","^К реке","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Я выхожу из лагеря, иду мимо машин и направляюсь в сторону реки. Когда шум лагеря стихает, а шум бегущей воды усиливается, между деревьев я различаю фигуру сына, сидящего над обрывом.","\n","^Стараясь погромче шуметь палой хвоей, чтобы предупредить о своём появлении, я подхожу ближе и замечаю, как Андрос прячет телефон.","\n",["ev","str","^Сделать вид, что не заметил","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^— Привет отшельникам! - я усаживаюсь рядом с ним и осматриваю вид. — Не, ну в целом вид, конечно, очень неплохой. Деревья вот эти. Камни вон те. Река опять же. Но видел бы ты, какие аппетитные сосиски сейчас там на решётке готовятся, м-м.","\n","^Андрос натянуто улыбается и кивает:","\n","^— Да, я уже собирался назад, когда услышал твоё шарканье на пол-леса. Вот только…","\n","^— Что, опять подружки узнали о существовании друг друга? — я киваю на телефон в кармане.","\n","^— Да нет, — усмехается Андрос. — Тут такое дело, пап…","\n","^— У-у, намечается серьёзный разговор. Нечасто мы такими балуемся.","\n","^— Слушай, я хочу бросить хоккей…","\n",["ev","str","^Та-а-ак","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^У меня внутри ёкает. Годы поездок по тренировкам и сборам, дорогущая экипировка, травмы, перспективы.","\n","^— Ну, — протягиваю я, пересаживаясь поудобнее и не сводя взгляда вон с той берёзы на другом берегу. — Это, в первую очередь, решать тебе. Но прости мне следующие слова: ты точно всё хорошо обдумал? Всё-таки столько лет отдать игре. Университет, опять же, выбираем с оглядкой на спорт. Это точно твоё взвешенное решение?","\n","end",{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],null]}],"global decl":["ev","str","^лето","/str",{"VAR=":"key"},0,{"VAR=":"hub_restart_count"},"str","^car","/str",{"VAR=":"Metro_whereabouts"},"/ev","end",null]}],"listDefs":{}};
