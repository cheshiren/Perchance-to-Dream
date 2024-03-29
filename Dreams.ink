# title: И видеть сны, быть может?
// # theme: dark
// # author: Вячеслав Добранов

VAR key = "лето"
VAR hub_restart_count = 0

#INPUT
{
	- hub_restart_count > 4:
		Если вы играете в первый раз, попробуйте ввести «Лето» # CLASS: choice
}
* [ ] -> hub


// Выберите язык / Choose your language
// * [РУССКИЙ] -> russian
// * [ENGLISH] -> english

=== hub
	#CLEAR
	{
		- key == "лето":
			~ hub_restart_count = 0
			-> russian
		- key == "метро":
			~ hub_restart_count = 0
			-> metro_rus
		- key == "тави":
			~ hub_restart_count = 0
			-> hospital_rus
		- key == "букет":
			~ hub_restart_count = 0
			-> cemetry_rus
		- key == "тишина":
			~ hub_restart_count = 0
			-> office
		- key == "лестница":
			~ hub_restart_count = 0
			-> woods
		- else:
			~ hub_restart_count++
			#RESTART
	}

=== russian
ЛЕТО #CLASS: head
Запахи травы, мокрых камней, горячего асфальта. Прохлада озёрной воды и тепло девичьего плеча. Тень от заброшенного элеватора и жёсткие лепестки полевых цветов. Гуденье ветра в проводах высоко над головой. Ржавый велосипед. Лето.
* …Девятое? Десятое?…
Смеющиеся, загорелые лица, которых не видел столько лет. Облезлый мяч на пустынном, вытоптанном поле с торчащими из снега арматурными прутьями вместо ворот.
** …Из снега?…
Старшие ребята из шланга заливают высоченную ледяную горку. Вода парит под жарким июньским солнцем.
*** …И я уже знаю, что это сон…
«Эй, а не слишком ли она высокая для <b>метро</b>?»
**** >>
#RESTART
// ***** МЕТРО
// -> metro_rus

// === english
// * SUMMER
//     The smell of a grass, of wet stones, of the hot tarn. The coolness of lake water and the warmth of a girl's shoulder. Shadow from the abandoned silo and hard petals of wildflowers. Humming of the wind in wires high above. Rusty bicycle. Summer.
//     ** …Ninth? Tenth?…
//         Laughing, tanned faces haven't seen for ages. Shabby ball on the trampled field, a couple of rebars for a gate sticking from the snow.
//         *** …The snow?…
//             Elder boys pouring water from the hose on the high ice slide. Steam swirling under hot June sun.
//             **** …I know already - it is a dream…
//                 "Isn't it too high for a subway?"
//                 ***** SUBWAY
//                     -> metro_eng

=== metro_rus
VAR Metro_whereabouts = "car"
МЕТРО #CLASS: head
…И я открываю глаза.
Моргаю, отгоняя фантомы сна и затухающие образы детства. Вагон метро. В окне напротив — моё тусклое отражение, за ним — проносятся лампы туннельного совещения. Вагон мерно покачивается, вздрагивая на стыках рельс. Но шума почти не слышно за музыкой в каплях наушников.
Я зеваю и оглядываюсь. Вагон почти пуст. В одном конце что-то живо обсуждает группка школьников. Ближе к середине пожилая пара читает одну на двоих газету. Молодая девушка, поглощённая ярким прямоугольником телефона в руке, прислонилась к дверям — чёрные перья её волос ритмично покачиваются в такт музыке в её больших жёлтых наушниках.
	-> car_opts_rus
	
= car_opts_rus
* [Вынуть свои наушники] -> headphones_take_off_rus
+{Metro_whereabouts != "pupils"}[Подойти к школьникам] -> pupils_goto_rus
+{Metro_whereabouts == "pupils"}[Отойти от мальчишек] -> pupils_from_rus
+{Metro_whereabouts != "oldpair"}[Подойти к старикам] -> oldpair_goto_rus
+{Metro_whereabouts == "oldpair"}[Отойти от стариков] -> oldpair_from_rus
+{Metro_whereabouts != "girl"}[Подойти к девушке] -> girl_goto_rus
+{Metro_whereabouts == "girl"}{girl_goto_rus == 1}{not girl_attention_rus}[Привлечь внимание девушки] -> girl_attention_rus
+{Metro_whereabouts == "girl"}{girl_goto_rus >= 2 || girl_attention_rus}[Заговорить с девушкой] -> girl_talk_rus
+{Metro_whereabouts == "girl"}[Отойти от девушки] -> girl_from_rus

= headphones_take_off_rus
Я вытаскиваю чёрные капельки из ушей и роняю их висеть на шее. Теперь я отчётливо слышу шум поезда.
-> car_opts_rus

= pupils_goto_rus
~ Metro_whereabouts = "pupils"
{stopping:
- Держась за поручни, я прохожу к компании школьников и вижу, чем они так увлечены: один из мальчиков сжимает в руках карманную игровую приставку, а его пальцы мелькают по десятку кнопок с пугающей быстротой и точностью.
<>{headphones_take_off_rus: Остальные подбадривают его радостными возгласами.| Остальные подбадривают его возбуждёнными возгласами, которых я не слышу за музыкой в своих наушниках.}
- Я снова подхожу к школьникам, но им не до меня — тот, что с приставкой, кажется, добрался до босса.
}
-> car_opts_rus

= pupils_from_rus
~ Metro_whereabouts = "car"
Я отхожу от мальчишек и возвращаюсь на своё место.
-> car_opts_rus

= oldpair_goto_rus
~ Metro_whereabouts = "oldpair"
{stopping:
- Я медленно подхожу к пожилой паре и встаю перед ними, держась за поручень.
{headphones_take_off_rus: — Молодой человек, — раздаётся скрипучий голос женщины. — Если вам так нравится стоять рядом с нами, то хотя бы не закрывайте свет. Спасибо.|<> Женщина что-то говорит, обращаясь ко мне, но я не могу разобрать её слов за музыкой, поэтому она лишь качает головой.}
- Я снова подхожу к старикам и встаю над ними. Они осматривают меня поверх своей газеты, переглядываются и, покачав головами, продолжают читать.
}
-> car_opts_rus

= oldpair_from_rus
~ Metro_whereabouts = "car"
Я отхожу от пожилых людей и возвращаюсь на своё место.
-> car_opts_rus

= girl_goto_rus
~ Metro_whereabouts = "girl"
{Ведя рукой по гладким поручням, я приближаюсь к девушке и встаю перед ней. Она лишь бросает на меня краткий взгляд и снова переключается на телефон.|Я снова подхожу к девушке и жестом привлекаю её внимание. Она смотрит на меня, вопросительно поднимает брови и стягивает наушники.|Я снова подхожу к девушке, приветливо улыбаясь. Она хмурится и в очередной раз стягивает наушники.}
-> car_opts_rus

= girl_from_rus
~ Metro_whereabouts = "car"
{Я отхожу от девушки и возвращаюсь на своё место.|Когда я отворачиваюсь от девушки, чтобы вернуться на сиденье, она пожимает плечами и натягивает свои жёлтые наушники.}
-> car_opts_rus

= girl_attention_rus
Взмахом руки я пытаюсь привлечь её внимание. Она смотрит на меня, вопросительно поднимает брови и стягивает наушники.
-> car_opts_rus

= girl_talk_rus
{not headphones_take_off_rus:
	Собираюсь сказать что-нибудь приветственное, но замечаю её выразительный взгляд на мои собственные наушники, торчащие из ушей.
	-> car_opts_rus
- else:    
	-> girl_talk_topics_rus
}

= girl_talk_topics_rus
Но как только я открываю рот, чтобы спросить, как её зовут, она задаёт вопрос:
— Ты никогда не задумывался, как люди становятся плохими? Ведь человек изначально не может быть ни плохим, ни хорошим. Значит, он становится таковым после череды плохих поступков, верно? А сколько должно быть таких поступков?
* [Извини?]
	— Не совсем понимаю, о чём ты.
	— Я говорю о морали. Допустим, ты навредишь десяти людям и всё ещё будешь считаться уважаемым членом общества, но когда счёт дойдёт до одиннадцати — всё, ты изгой. Существует ли эта граница? Не перестаю об этом думать.
* [Зло относительно.]
	— Для разных людей одни и те же поступки могут иметь разное значение. Для вора кража однозначно во благо. Для его жертвы наоборот.
	— Это так. Тогда мы можем попробовать подняться над индивидуальным отношением к действиям личности и оценивать их с позиции общества. Хорошим может считаться только тот поступок, который приносит коллективное благо. Но всё же, если половина членов общества считают поступок хорошим, а другая половина считают его плохим, какой он тогда? Каким должно быть соотношение для однозначности? Не перестаю об этом думать.
* [Одного проступка достаточно.]
	— Это как ложка дёгтя, достаточно одного проступка, чтобы навсегда испортить себе карму.
	Она смеётся:
	— Тогда среди нас нет по-настоящему хороших людей. И хорошими мы называем лишь наименее плохих. Но, по-моему, это слишком строго. Даже религии допускают какую-то долю греховности, которую можно искупить. И здесь мы подходим к понятию тяжести проступка. Сколько конфетных обёрток нужно бросить мимо урны, чтобы сравняться с одной атомной бомбой, сброшенной на город? Не перестаю об этом думать.
- 
* [Ответа может и не быть.]
	— По-моему, такие вопросы вообще не разрешимы. Стоит ли вообще тратить на них своё время?
* [Кто-то наверняка всё это уже продумал.]
	— За две тысячи лет цивилизации кто-нибудь наверняка уже задумывался над этими вопросами. Нужно только почитать нужного философа.
- В этот момент за окнами мелькают огни станции и поезд мягко тормозит у платформы. Девушка разворачивается и не говоря ни слова ныряет в толпу за дверью.
* [Следовать за ней]
	Я устремляюсь за ней, но меня оттирают в сторону, прижимают к поручням. Толкаясь, пинаясь, огрызаясь на ругательства, я, наконец, выбираюсь из вагона и озираюсь по сторонам. Вон она. У подножья широкой лестницы я замечаю жёлтое пятно её наушников.
	** [За ней!]
		Я бегу. Огибая людей, перепрыгивая скамейки, оскальзываясь, едва не падая, добегаю к лестнице. Прыгая через две ступени, добираюсь до верха. Мимо полицейских, усталых лиц пассажиров, недобрых глаз подростков. Бегу по переходу между станциями, выбегаю на галерею над платформой и замечаю её. Внизу, у открытых дверей подоспевшего состава.
		*** [Окликнуть её]
			— Постой! — кричу я над вечерней толпой. — Скажи, как тебя зовут!
			Она медлит у входа в вагон. Оглядывается — чёрные волосы падают на смеющиеся тёмные глаза — и с улыбкой откликается:
			— А ведь когда-то ты клялся, что будешь помнить меня вечно! — и исчезает.
			Что-то обрывается внутри меня и с воем несётся в бездну.
			**** [Тави?!]
				Я вцепляюсь в перила, чтобы унять внезапное головокружение. Это была <b>Тави</b>? Быть этого не может. Но... <b>Тави</b>? Я наверное всё ещё сплю.
				***** >>
				#RESTART
			   // ***** ТАВИ
			   //     -> hospital_rus

// === metro_eng
// …I wake up.
// I blink brushing off dream phantoms and sad childhood memories. Subway car. In the window before me - my dim reflection. Tunnel lights flash across it. Car shakes slightly on rail joints. But I don't hear any noise because of music in my earphones.
// I yawn and look around. The car is almost empty. There is a small group of schoolboys at the far side. They discuss something lively. Elder pair reads a newspaper in the middle. A young girl leans on doors consumed by the bright rectangle of the phone in her hands. Black feathers of her hairs wave according to the music in big yellow headphones.
//     -> car_opts_eng

// = car_opts_eng
// * [Take out earphones] -> headphones_take_off_eng
// +{Metro_whereabouts != "pupils"}[Come to schoolboys] -> pupils_goto_eng
// +{Metro_whereabouts == "pupils"}[Step back from schoolboys] -> pupils_from_eng
// +{Metro_whereabouts != "oldpair"}[Come to elders] -> oldpair_goto_eng
// +{Metro_whereabouts == "oldpair"}[Step back from elders] -> oldpair_from_eng
// +{Metro_whereabouts != "girl"}[Come to the girl] -> girl_goto_eng
// +{Metro_whereabouts == "girl"}{girl_goto_eng == 1}{not girl_attention_eng}[Catch girl's attention] -> girl_attention_eng
// +{Metro_whereabouts == "girl"}{girl_goto_eng >= 2 || girl_attention_eng}[Talk to the girl] -> girl_talk_eng
// +{Metro_whereabouts == "girl"}[Step back from the girl] -> girl_from_eng

// = headphones_take_off_eng
// I pull out black drops and leave them hanging on the neck. Now I hear the noise of the train clearly.
// -> car_opts_eng

// = pupils_goto_eng
// ~ Metro_whereabouts = "pupils"
// {stopping:
// - I come to the boys' group and see what has caught their attention: one of the boys handles portable game console, his fingers move with frightening speed and precision.
// <>{headphones_take_off_eng: Others cheer him up with excited shouts.|Others cheer him up with excited shouts, but I don't hear them behind the music.}
// - I come to the boys again, but they don't give me a glance - the one with the console got to the boss.
// }
// -> car_opts_eng

// = pupils_from_eng
// ~ Metro_whereabouts = "car"
// I step back from the boys and go to my seat.
// -> car_opts_eng

// = oldpair_goto_eng
// ~ Metro_whereabouts = "oldpair"
// {stopping:
// - Я медленно подхожу к пожилым людям и встаю перед ними, держась за поручень.
// {headphones_take_off_eng: — Молодой человек, — раздаётся скрипучий голос женщины. — Если вам так нравится стоять рядом с нами, то хотя бы не закрывайте свет. Спасибо.|<> Женщина что-то говорит, обращаясь ко мне, но я не могу разобрать её слов за музыкой, поэтому она лишь качает головой.}
// - Я снова подхожу к старикам и встаю над ними. Они осматривают меня поверх своей газеты, переглядываются и, покачав головами, продолжают читать.
// }
// -> car_opts_eng

// = oldpair_from_eng
// ~ Metro_whereabouts = "car"
// Я отхожу от пожилых людей и возвращаюсь на своё место.
// -> car_opts_eng

// = girl_goto_eng
// ~ Metro_whereabouts = "girl"
// {Я, ведя рукой по кольцам поручней, приближаюсь к девушке и встаю перед ней. Она лишь бросает на меня мимолётный взгляд и вновь переключается на свой телефон.|Я снова подхожу к девушке и жестом пытаюсь привлечь её внимание. Она смотрит на меня, вопросительно поднимает брови и стягивает свои наушники.|Я снова подхожу к девушке и приветливо улыбаюсь, когда она, хмурясь, в очередной раз стягивает свои наушники.}
// -> car_opts_eng

// = girl_from_eng
// ~ Metro_whereabouts = "car"
// {Я отхожу от девушки и возвращаюсь на своё место.|Когда я отворачиваюсь от девушки, чтобы вернуться на сиденье, она пожимает плечами и натягивает свои жёлтые наушники.}
// -> car_opts_eng

// = girl_attention_eng
// Взмахом руки я пытаюсь привлечь её внимание. Она смотрит на меня, вопросительно поднимает брови и стягивает свои наушники.
// -> car_opts_eng

// = girl_talk_eng
// {not headphones_take_off_eng:
//     Собираюсь сказать что-нибудь приветственное, но замечаю её выразительный взгляд на мои собственные наушники, торчащие из ушей.
//     -> car_opts_eng
// - else:    
//    // -> girl_talk_topics_eng
//    -> DONE
// }


=== hospital_rus
ТАВИ #CLASS: head
…И я прихожу в себя.
В который раз, в третий? Четвёртый?
Ноющая неизбывная боль во всей левой части тела. Плохая боль. Боль-знак. Боль-предвестник. Надо скорее позвать Тави.
Я приоткрываю слезящиеся глаза. Хочу вытереть их тыльной стороной ладони, но всё, что у меня получается — вздрогнуть указательным пальцем.
Я пробую сфокусировать взгляд. Яркий свет мешает, но я упорствую.
Больничная палата. Койка. Я смотрю на светло-зелёное одеяло, подоткнутое с двух сторон под тело. Руки лежат на одеяле. Артритные суставы пальцев. Пигментные пятна. Руки старика.
Я перевожу взгляд дальше. У двери в палату стоит врач и беседует с мужчиной и женщиной. Говорят негромко, до меня мало что доносится: «…домой…состояние…дорога…третий приступ может…лучше здесь…недолго».
За окном слышны шелест листвы и щебет птиц.
-> hospital_opts_rus

= hospital_opts_rus
+ [Сжать кулак]
	{Восемьдесят лет жизни в своё удовольствие, из которых пятьдесят — выкуривая по пачке в день, и ты всё ещё хочешь сжать эту траченую артритом руку?|Уже не в этой жизни, старина.}
* [Приглядеться к посетителям]
	Мужчина среднего роста, со всё ещё густой, но уже седой шевелюрой. Грузноват, а когда-то был спортсменом. Его спутница — стройная ухоженная женщина лет пятидесяти с жёстким и властным ртом.
* [Спросить их, где Тави]
	— Господа, а вы не могли бы позвать мою жену? — пытаюсь сказать я, но на первом же звуке меня сотрясает долгий кашель, от которого левую сторону полосует молниями боли. Я стону.
	Первым поспевает мужчина. Он склоняется надо мной и, положив свою руку на мою, говорит:
	— Пап, я здесь. Я рядом.
	Вот тебе и раз.
	Врач появляется с другой стороны койки и колдует над капельницей:
	— Я введу обезболивающее, через пару минут боль утихнет.
	Цокая, подходит женщина, встаёт за спиной сына.
	Клара. Да, её я вспомнил.
	** [Всё-таки спросить их, где Тави]
		Сквозь хрипы и свист я всё же спрашиваю:
		— Где Тави? Почему я не вижу здесь твоей мамы, сынок?
		Он расстерянно оглядывается на Клару. Потом на врача.
		— Пап… Мы ведь уже об этом…
		— Она будет чуть позже, — Клара показывается из-за его спины, стряхивает несуществующие пылинки с одеяла. — Сейчас вам нужно отдохнуть, набраться сил.
		Всё как-то отдаляется, боль не стихает, но отходит на другой план. Прошла докторская пара минут?
		Краем глаза я замечаю мазки голубого и синего. <b>Букет</b> цветов на столе.
		— А, гортензии. Её любимые.
		Я смотрю и смотрю на цветы. А всё вокруг смазывается, истончается, блекнет, пока не остаётся лишь <b>букет</b>.
		Мне кажется, что я слышу женский плач. Мне кажется, что я чувствую снег в пальцах. Но <b>букет</b> по-прежнему прекрасен.
		*** >>
		#RESTART
		// *** БУКЕТ
		//     -> cemetry_rus
- -> hospital_opts_rus

=== cemetry_rus
БУКЕТ #CLASS: head
Я просыпаюсь, когда автобус наезжает на кочку. Отнимаю голову от запотевшего окна, зеваю. Большинство мест в салоне занято, но когда я схожу на следующей остановке, за мной никто не выходит.
 Я раскрываю зонт и, опираясь на деревянную трость, прохожу в ворота. Кладбищенский сторож, затянутый в жёлтый блестящий дождевик, сметает липнущие к асфальту листья с маленькой парковки. Он приветствует меня, легонько коснувшись своей кепки под капюшоном, я отвечаю ему кивком и иду дальше, постукивая тростью.
Выхожу на аллею с вязами и лёгкий шорох дождевой мороси сменяется дробной капелью по зонту. С обеих сторон от дорожки тянутся аккуратные ряды тусклых надгробий. Некоторым из них уже несколько веков и мрамор статуй оплыл за сотни лет, завитки на курчавых головах ангелов сгладились, а перья их крыльев слиплись.
Через равные промежутки из газона торчат чугунные столбики с номерами кварталов.
-> cemetry_opts_rus

= cemetry_opts_rus
* [Приглядеться к надгробиям]
	В молодости мне нравилось гулять по кладбищам, нравилось гадать, что за судьбы скрываются за именами и датами. Но всё это прошло, когда стали появляться имена, судьбы которых мне были известны лично. Со временем таких становилось всё больше и я быстро охладел к этим местам.
	-> cemetry_opts_rus
* [Свернуть в нужный квартал]
	Ветер осыпает меня ворохом мокрых листьев, когда я сворачиваю у столбика с номером 36. Под шелест дождя я приближаюсь к нужному ряду. Ступая по мягкому газону, подхожу к могиле.
	Скромное надгробие из серого гранита и точно такая же плита. На плите мокнет корзинка со свежими цветами. Значит, Андрос и Клара уже были.
	Я глажу мокрую шершавость гранита и тихо здороваюсь:
	— Добрый день, милая. Ну и погодка, а?
	** [Вынуть свои цветы]
		Перенеся вес на здоровую ногу, я перекладываю трость в руку с зонтом, расстёгиваю плащ и достаю маленький букет голубых гортензий.
		*** [Возложить букет]
			Осторожно опускаюсь на одно колено и аккуратно кладу букет рядом с корзинкой от сына. Нежно-голубые лепестки тут же покрываются дождевой росой. Смахнув с плиты несколько красно-жёлтых листьев, встаю и, охнув от боли, опираюсь на шершавое надгробие:
			— Да, колено меня не щадит.
			-> cemetry_topics_rus
= cemetry_topics_rus
* (knee_rus)[Рассказать про колено]
	{not weather_rus: Я ещё осторожнее сажусь на крошечную скамеечку и складываю руки на трости:}
	— Врач говорит, давно пора делать операцию, менять сустав. Дескать, титановый слишком тяжёл и всё-таки плохо переносится организмом. А с новым полимерным я даже не смогу вспомнить, какое же колено у меня болело. Идиот. Я ещё не настолько стар, чтобы забывать такие вещи. И он, конечно же, сказал, что я смогу танцевать. Если бы мне давали по монете каждый раз, когда я слышал эту фразу от докторов, мы бы с тобой жили богачами. Все врачи вруны и идиоты. Ну, кроме, может быть, стоматологов. Иначе я бы не позволил нашему сыну стать стоматологом, да.
* (son_rus) {knee_rus} [Рассказать про сына]
	— Андрос часто наведывается. Наверное, чаще, чем хочет Клара. Я, конечно, говорю, что не стоит, у них, должно быть, и своих дел по горло. Ему ведь сейчас непросто. Да только не так уж и много у меня сейчас радостей — будь моя воля, всё время проводил бы с внуками.
* (grandchildren_rus) {son_rus} [Рассказать про внуков]
	— У Греты выпали первые два зуба. Переживает. Когда смеётся, ладошкой рот прикрывает, но иногда забывает, хохочет вовсю, а потом вдруг спохватывается, прячется и от этого ещё сильнее смеётся. Малютка Йозеф уже и не такой маленький — начал ходить и теперь всё приходится прятать повыше. Так и воюем, каждую неделю — новые высоты. А Стефан повзрослел, посерьёзнел. Пока малыши играют, сидит в моём кресле, читает. Иногда просит рассказать про тебя…
* (weather_rus) [Рассказать про погоду]
	{not knee_rus: Я ещё осторожнее сажусь на крошечную скамеечку и складываю руки на трости:}
	— Говорят, дождь зарядил надолго. Все этому так удивляются, как дети, ей-богу. Никогда вот не было и на тебе, дождь. Осенью. В сентябре. Я раньше и не замечал, что вокруг столько идиотов. Как же мне не хватает твоего здравомыслия…
* (october_rus) {weather_rus} [Рассказать про октябрь]
	— Вот думаю, не съездить ли через пару недель к морю. Октябрь всё-таки. От нашего домика, наверное, уже и не осталось ничего, да и по песку с моим коленом сильно не разгуляешься. Но что-то в последнее время часто вспоминается та осень…
* {grandchildren_rus && october_rus} [Рассказать про сны]
	— Вот прямо сейчас в автобусе приснилось, будто мне уже далеко за восемьдесят, я лежу в больнице и зову тебя. Но обычно снится прошлое. Причём появляются такие детали, о которых я и забыл давно. Помнишь, например, воздушного змея на том пляже? Как он улетел в море? Или как Андрос расстроился, когда его команда не выиграла на соревнованиях. А наша первая машина, оказывается, была зелёной, и не синей, как я думал. Что бы это всё значило?
	** [Помолчать]
		Я, наконец, замолкаю и долго смотрю на дрожащие под дождём лепестки гортензий. Капли неслышно падают на цветы, на гранит, на зонт.
		Посидев ещё немного, я осторожно встаю, глажу на прощание камень надгробия и ухожу, погружённый в своё неизбывное горе и <b>тишину</b>.
		Я возвращаюсь тем же путём, мимо чугунных столбиков, мимо вязов, метлы сторожа. <b>Тишина</b> заполняет собой весь мир.
		Выхожу в ворота, иду к остановке и сажусь в подъехавший автобус. Водитель что-то говорит, но я не слышу.
		Всё теряет смысл, кроме этой <b>тишины</b>.
		*** >>
		#RESTART
		// *** ТИШИНА
		//     -> office
- {grandchildren_rus && october_rus: — А вообще, ты знаешь, часто начали сниться сны. Как раз про нас с тобой.}
	-> cemetry_topics_rus

=== office
ТИШИНА #CLASS: head
	Я просыпаюсь от того, что стало слишком тихо. Оглянувшись по сторонам, вижу, как сидящие за переговорным столом прячут улыбки. Юный инженер замер в нерешительности перед проекционным экраном.
	Ну вот опять. Я откашливаюсь:
	— Прошу прощения, коллеги. Матиас, будьте добры, продолжайте свой доклад.
	Когда это тощее недоразумение возобновляет свой бубнёж, наклоняюсь к Марку:
	— Я что, храпел?
	— О, не громче обычного, — тот поглядывает на экран поверх очков, делает вид, что записывает, и явно веселится.
	* [Побрюзжать]
		— Напомни, пожалуйста, зачем ты таскаешь меня по этим бесконечным совещаниям? Убитое на них время я бы с куда большей пользой потратил на текущие проекты. Проекты с очень агрессивными, напомню, сроками.
		— По стандартной должностной инструкции ты, как руководитель подразделения, обязан присутствовать на всех еженедельных собраниях, — нет, ну точно развлекается.
		— А ты как исполнительный директор можешь подтереться всей той кипой бумаг, которую исторгает твой отдел стандартизации. — Я наклоняюсь к нему ближе. — Кстати, столкнулся на днях с тамошним главным — кхм — экспертом. И кому как не мне, последнему твоему настоящему другу, открывать тебе горькую правду: если начинаешь нанимать людей, чьи ноги длиннее, чем их извилины, то это старость.
		Марк прячет улыбку в кулак.
		- (opts)
		** (peek) [Подсмотреть, что {presentation: там пишет Марк|он там пишет}]
			Толстенной позолоченной ручкой Марк что-то там выводит в своём кожаном ежедневнике с золотым обрезом. Я незаметно подсматриваю и вижу нечто, отдалённо похожее на женскую фигуру. Ну, что-то подобное я и ожидал — скоро внуки пойдут, а старина Марк всё туда же.
			-> opts
		** (presentation) [Сосредоточиться на презентации]
			Я пытаюсь слушать про календарные графики на второе полугодие, сессии командообразования, результаты программы менторства, но нет, это решительно невозможно. Матиас неплохой инженер для своего возраста, даст фору некоторым старичкам из проектных групп, но вот докладчик из него никакой. Я борюсь с зевотой и вот-вот опять проиграю. Да ещё и несколько чашек кофе вместо того, чтобы отгонять сон, давят на мочевой пузырь. Как бы улизнуть?
			-> opts
		** {presentation} [Попросить {peek: Марка|его} помочь]
			Я опять наклоняюсь к нему:
			— Слушай, мне в уборную приспичило, можешь подстраховать? Позвони мне незаметно, а я сделаю вид, что это звонит кто-то важный, и сбегу, ок?
			Марк смеривает меня взглядом поверх очков без оправы и, оставив мою шпильку без внимания, кивает.
			Через минуту из моего кармана раздаётся трель. Я вынимаю телефон, смотрю на экран и, прижав его к груди, встаю:
			— Коллеги, прошу меня извинить. Продолжайте, пожалуйста, без меня.
			И, едва прихрамывая, убираюсь из постылого конференц-зала.
			За дверью сбрасываю звонок и направляюсь в конец коридора, вспоминая мелодию, слышанную утром в машине.
			*** [Напеть песню]
				«There's a lady who's sure all that glitters is gold. And she's buying a stairway to heaven…» — мурлычу я, подражая Роберту Планту, и подхожу к двери уборной.
				**** [Внутрь!]
					Чем старше становишься, тем больше потакаешь своему организму. Стараешься исполнять все его прихоти. А он становится всё капризнее, продолжает коварно стареть и подкидывать тебе всё новые фокусы.
					С такими мыслями я застёгиваю ширинку и иду к раковинам. Долго и тщательно мою руки — человек с той стороны зеркала ухмыляется, разглядывая мои морщины и седые виски.
					Когда я тянусь к бумажным полотенцам, из кармана вновь доносится трель звонка.
					***** [Ответить]
						Двумя пальцами, стараясь меньше касаться пиджака, достаю телефон. На экране высвечивается: «Жена». О, это Тави!
						Телефон выскальзывает из пальцев и я какое-то время им жонглирую пока окончательно не ловлю.
					***** [Вытереть руки]
						Я, не обращая внимания на трезвон, тщательно вытираю руки и сушу их под феном.
						Телефон всё звонит. Что там, совещание уже закончилось что ли?
						Наконец, достаю трубку и вижу на экране: «Жена». Это же Тави!
					-----
					Немедленно отвечаю:
					— Милая, извини, что долго снимал трубку — твой звонок застал меня в уборной. Давай, я тебе перезвоню минут через пять, поговорим про медосмотр?
					— Мне нужно кое-что тебе рассказать, дорогой.
					Я чувствую напряжение в её голосе.
					***** [Выслушать]
						— Хорошо, говори, — присаживаюсь на край мраморной раковины.
						— Врачи говорят — у меня рак.
						Несколько секунд я трачу на осознание услышанного.
						****** [Нет]
							— Погоди, ты же просто поехала забрать анализы. Анализы после планового осмотра…
							— Они говорят — стадия неоперабельная.
							******* [Нет-нет-нет]
								— Ты сказала, что просто съездишь по своим женским делам и всё, ничего особенного…
								— Ты слышишь? Они даже пытаться не будут!
								******** [Как же так, Тави?]
									Я глубоко вдыхаю.
									— Ничего, мы что-нибудь придумаем. Мы обязательно что-нибудь придумаем, слышишь? Есть клиника на побережье. Все только о ней и говорят, лучшие врачи, лучшее оборудование. Всё будет в порядке. Мы справимся.
									— …Сказали, что у меня всего полгода, — я слышу всхлипы.
									— Где ты сейчас, родная?
									— На парковке у медицинского центра. В машине. Не могу ехать. Мне… Мне страшно… — она плачет.
									— Жди меня там, я сейчас приеду. Жди, Тави!
									********* [Только не ты, Тави!]
										Не обращая внимания на занывшее колено, я бегу по коридорам и <b>лестницам</b> к подземной стоянке, падаю на водительское сиденье и спешу к выезду на улицу. И всё это время никак не могу избавиться от звучащей в голове строчки про даму, что покупает <b>лестницу</b> в небо.
										********** [Не оставляй меня!]
											Я проезжаю на красный, с визгом поворачиваю на перекрёстках, а в голове всё звучит и звучит чёртова <b>лестница</b>.
											*********** >>
											#RESTART
											// *********** ЛЕСТНИЦА
											//     -> woods

=== woods
ЛЕСТНИЦА #CLASS: head
	— There's a lady who's sure all that glitters is gold. And she's buying a stairway to heaven.
	Я открываю глаза под звуки песни и вижу качающиеся тени леса на ткани палатки. Зевая, перебираюсь к выходу, натягиваю ботинки, откидываю полог. Потягиваюсь, вдыхая звонкий воздух осеннего вечера. Свет солнца ещё пробивается сквозь сосны, но в глубине подлеска уже скопилась темнота.
	* [Оглядеться]
	  Лагерь из пары десятков разноцветных палаток разбит вокруг поляны с костром. От костра доносятся звуки гитары, смеха, запахи еды. И оттуда в мою сторону идёт Тави с дымящейся кружкой в руках.
	  — Привет, ну как, выспался? — она протягивает мне кружку с кофе.
	  — Более или менее. Долго я спал?
	  — Пару часов. Скоро всех будут звать к ужину, так что ты как раз вовремя, — с этими словами она лезет в палатку.
	  ** [Отпить кофе]
		— М-м. Слушай, а неплохой кофе. Как будто Марк варил?
		— Угадал, они приехали с полчаса назад, — доносится из палатки голос Тави. — Где-то тут моя кепка была... Ага, вот кепка Андроса. А он, похоже, ушёл в моей, — Тави вылезает из палатки и заправляет свои длинные чёрные волосы под красную кепку с эмблемой хоккейной команды.
		— А где сам Андрос?
		— Не знаю, давно не видела. Он хмурый весь день, расстроился из-за вчерашней игры.
		— М-м. Пойду-ка поищу его, — я возвращаю кружку жене и чмокаю её в щёку.
		-> woods_opts

= woods_opts
	* [Попить ещё кофе]
		— Тави, душа моя, позволь ещё раз отведать сего чудесного напитка.
		Она улыбается и отпивает из кружки:
		— О, любовь моя, в тех землях, куда лежит твой путь, ты сможешь отыскать свой собственный напиток.
		— Жадина.
		— Приживала.
		Я ещё раз чмокаю её в щёку.
		-> woods_opts
	* [Идти к кострам]
		Я иду меж деревьев по пружинистому ковру из палых сосновых иголок и выхожу на поляну с кострами. Кивнув нескольким знакомым, подхожу к Марку, который колдует над кофейником. Он замечает меня и расплывается в улыбке:
		— А, смотрите, кто идёт! Человек, что обозвал финансового директора «ботоксной клячей»! Герой! Дон Кихот!
		— Имел полное моральное право. Ну и как у меня дела? Я уже безработный?
		— Ха! Не надейся, Старик тебя слишком ценит, поэтому стоял насмерть. Но мощного врага ты себе нажил.
		— Ладно, чего мы опять о работе, отдыхаем ведь. Ты Андроса не видел?
		— Только когда он стянул пару сосисок с решётки и скрылся в направлении реки.
		** [Спросить про кофе]
		— Тави говорит, у тебя тут неплохой кофе водится?
		— Да, но придётся подождать, пока новый сварю, — он поболтал в воздухе кофейником.
		— Добро. Поищу пока сына.
		** [К реке]
		Я выхожу из лагеря, иду мимо машин и направляюсь в сторону реки. Когда шум лагеря стихает, а шум бегущей воды усиливается, между деревьев я различаю фигуру сына, сидящего над обрывом.
		Стараясь погромче шуметь палой хвоей, чтобы предупредить о своём появлении, я подхожу ближе и замечаю, как Андрос прячет телефон.
		--
		** [Сделать вид, что не заметил]
		— Привет отшельникам! - я усаживаюсь рядом с ним и осматриваю вид. — Не, ну в целом вид, конечно, очень неплохой. Деревья вот эти. Камни вон те. Река опять же. Но видел бы ты, какие аппетитные стейки сейчас там на гриле готовятся, м-м.
		Андрос натянуто улыбается и кивает:
		— Да, я уже собирался назад, когда услышал твоё шарканье на пол-леса.
		— Что, опять подружки узнали о существовании друг друга? — я киваю на телефон в кармане.
		— Да нет, — усмехается Андрос. — Тут такое дело, пап…
		— У-у, намечается серьёзный разговор. Нечасто мы такими балуемся.
		Он сдерживается, чтобы не закатить глаза:
		— Слушай, я хочу бросить хоккей…
		--
		** [Та-а-ак]
		У меня внутри ёкает. Годы поездок по тренировкам и сборам, дорогущая экипировка, травмы, перспективы.
		— Ну, — протягиваю я, пересаживаясь поудобнее и не сводя взгляда вон с той берёзы на другом берегу. — Это, в первую очередь, решать тебе. Но прости мне следующие слова: ты точно всё хорошо обдумал? Всё-таки столько лет отдать игре. Университет, опять же, выбираем с оглядкой на спорт. Это точно твоё взвешенное решение?
		— Я об этом последние полгода думаю. Взвешеннее некуда.
		--
		** [Мнение тренера]
		— А с тренером говорил об этом, что он думает? Ты же неплохой тафгай с перспективами.
		— Шуруп, конечно, против. Соловьём разливается















->END
