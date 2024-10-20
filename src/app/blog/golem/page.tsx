
  /* eslint-disable react/no-unescaped-entities */
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

  
  import Image from "next/image";
  import Link from "next/link";
  import type { Metadata } from "next";

  export const metadata: Metadata = {
    title: "Golem: archetypowy mit czy miejska legenda ? - Blog - Gabinet Łukasz Chwalisz",
    description: "Golem: archetypowy mit czy miejska legenda - Blog - Gabinet Łukasz Chwalisz",
    keywords: "Golem: archetypowy mit czy miejska legenda, blog, gabinet, łukasz chwalisz",
  };

export default function Golem() {
    return (
  
      <main className="container flex h-max max-w-full flex-col items-center justify-between p-4">
        
        <div className="p-20 mb-8 text-center text-6xl">
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Blog</span>
        </div>

        <Breadcrumb>
          <BreadcrumbList>
            
            <BreadcrumbItem>
              <BreadcrumbLink>
              <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            <BreadcrumbSeparator />
            
              <BreadcrumbItem>
              <BreadcrumbLink>
              <Link href="/blog">
              <BreadcrumbPage>Blog</BreadcrumbPage>
              </Link>
              </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
              
              <BreadcrumbPage>Golem</BreadcrumbPage>
              
              </BreadcrumbItem>

            </BreadcrumbList>

        </Breadcrumb>
        

        <div className="container lg:flex lg:space-x-4 m-4 p-4 text-justify">

          <div className="grid gap-4 mt-auto justify-center m-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        

          <div className="p-4 mb-4 space-x-4">
          
            <Image
              src="/obr/golem1.jpg"
              alt="Golem."
              className="rounded-md shadow-md"
              width={500}
              height={100}
              priority
            />
           
          </div>
          

          
            <div>
  
                <div className="p-4 mb-4">
                  <h1 className="text-center font-semibold">Golem: archetypowy mit czy miejska legenda ?</h1>
                  <p className="text-center text-sm text-gray-500">wpis z 10.06.2018 r.</p>
                </div>
          
                <p className="italic mb-4 text-gray-800 dark:text-white">„Polscy Żydzi po odmówieniu pewnych modlitw i odbyciu postów robią ludzką postać z gliny albo mułu, a gdy wypowiedzą cudowne szemhamforas [imię Boga], to człowiek ów musi ożyć. Nazywają go golem i wykorzystują jako posługacza do wszelkich prac domowych, tyle że nie wolno mu wychodzić z domu.</p>
                <p className="italic mb-4 text-gray-800 dark:text-white">Na czole ma napisane emet [prawda], ale codziennie przybiera na wadze i szybko rośnie, przewyższając siłą wszystkich domowników, choć na początku był całkiem mały. Dlatego ze strachu przed nim wymazują pierwsza literę, tak iż zostaje tylko met [martwy], a wtedy rozpada się i zamienia z powrotem w glinę.</p>
                <p className="italic mb-4 text-gray-800 dark:text-white">Komuś jednak golem urósł kiedyś tak wysoko, bo beztrosko pozwolił mu wciąż rosnąć, że w końcu nie mógł sięgnąć jego czoła. Wtedy wystraszył się ogromnie i kazał pochołkowi, żeby zdjął mu buty, bo pomyślał, że sięgnie jego czoła, kiedy ten się schyli. Tak też się stało, i szczęśliwie wymazał pierwszą literę, tyle że cała glina spadła na Żyda i zgniotła go na śmierć swoim ciężarem.”</p>
                <p className="mb-4 text-gray-800 dark:text-white">Tak pisał Jakub Grimm, niemiecki filolog, zbieracz baśni i podań ludowych w „Zietung fur Einsiedler” [„Gazeta dla pustelników”] z 1808 roku.  Legenda o golemie, postaci ulepionej z gliny, która po dodaniu duszy ożywa i zaczyna służyć i chronić swojego twórcę, a jednocześnie władcę życia i śmierci, gdyż twór może być w każdej chwili zamieniony w kawałek gliny, pojawiła się w polskim Chełmie, Wilnie, Grodnie i Drohiczynie oraz w czeskiej Pradze w XVI wieku. Trudno roztrzygnąć spór kto powinien dzierżyć palmę pierszeństwa.</p>
                
                <h3 className="mb-4 text-gray-800 dark:text-white">Legenda.</h3>
                
                <p className="mb-4 text-gray-800 dark:text-white">Pojawienie się legendy nieodłącznie związane jest z postaciami domniemanych twórców postaci z gliny. W wypadku Chełma był to rabbi Eliasz ben Arron, Baal – Szem ( ur. 1550, zm. 1583/4). Wiadomo o nim, że studiował w Lublinie, w lubelskiej jesziwie (szkole talmudycznej) u rektora Salomona Lurii. Potem został rabinem w Chełmie, ale jego sława dotarła aż do Wilna. Rabbi nosił zaszczytne imię Baal - Szem, co oznacza „<i>kogoś kto włada boskim imieniem”.  </i>Podobny zaszczyt spotkał  w następnym wieku, mistyka żydowskiego, kabalistę, cadyka, twórcę chasydyzmu na terenach Reczypospolitej w XVIII wieku - Israela Baal - Szem Towa (ur. 1690 – zm. 1760). Musiał więc to być rabin, który darzony był wielkim autorytetem.</p>
                <p className="mb-4 text-gray-800 dark:text-white">W wypadku Pragi mowa o rabbim Jehudzie Löwie ben Becalel Maharal, (ur. 1520 w Poznaniu, zm. 1609 w Pradze). Według ostatnich ustaleń historycznych, rabin mieszkał na terenie <i>Ha Kehillat szel Pozna</i> (dzielnicy żydowskiej w Poznaniu).  Był rabinem Poznania (1586 – 1588), Pragi (1588 – 1592), ponownie Poznania i Wielkopolski (1592 – 1597) i Pragi (1598 – 1609), aż do swojej śmierci. W Pradze założył swoją własną jesziwę. Znany był z wyrazistych poglądów: był zwolennikiem dostosowania sposobu nauczania Tory do wieku ucznia; przeciwnikiem wprowadzenia do programu nauczania przedmiotów świeckich; wyrażał pogląd, że filozofia wyraża jedynie prawdy zawarte w religii żydowskiej oraz uważał powrót narodu żydowskiego do Palestyny jako warunek zbawienia ludzkości.</p>
                <p className="mb-4 text-gray-800 dark:text-white">Mieszkańcy Pragi przypisywali mu stworzenie Golema – rabbi studiował księgi kabalistyczne m.i. Sefer Jecira [Księgę Stworzenia], która według legendy miała zawierać tajemny przepis na utworzenie żywej postaci z gliny. Póki co, źródła nie podają żadnej potwierdzonej informacji na temat tego, aby rabbi Löw kiedykowiek w swoich pismach wspomniał o tworzeniu golema.  Podobnie rabbi Eliasz ben Arron, domniemany twórca golema z Chełma - nigdy nie wspomninał, o tym w dostępnych dokumentach, aby miał wykorzystywać kabalistyczne księgi do stworzenia żywej postaci.</p>
                <p className="mb-4 text-gray-800 dark:text-white">Być może motywem legendotwórczym była atmosfera jaka panowała na dworze króla czeskiego Rudolfa II Habsburga, która wiązała się z zamiłowaniem do rzeczy dziwnych i tajemniczych. Okres panowania został nazwany Złotym Wiekiem, a sam król, "cesarzem alchemików". Rudolf II Habsburg (ur. 1552 w Wiedniu zm. 1612 w Pradze), w sferze politycznej znany był z pertraktacji z królem Polski Zygmuntem II Wazą w sprawie przekazania korony polskiej Habsburgom (Zygmunt chciał odzyskać tron w Szwecji). Polska opozycja szlachecka jednak udaremniła te plany.</p>
                <p className="mb-4 text-gray-800 dark:text-white">U Rudolfa w wiekiem pogłębiały się u niego zaburzenia psychiczne (spowodowane kiłą), stany lękowe i obsesje na tle religijnym. W wyniku choroby królowi czeskiemu przypisuje się próbę morderstwa i próba samobójczą. W wyniku swoich licznych obsesji, łatwo ulegał modnym prądom mistycznym, kultystycznym i kabalistyczny, a jego dwór stał się oazą dla czarowników, alchemików, astrologów, kabalistów (Arcimbold, John Dea, polski alchemik Michał Sędziwój, Tychon de Brahe, Edward Kelley).</p>
                <p className="mb-4 text-gray-800 dark:text-white">W biografii Jacqueline Dauxiois "Cesarz alchemików. Rudolf II Habsburg" pojawia się nieco zfabularyzowany opis atmosfery jaki panował na dworze królewskim: <em>" Na środku laboratorium stoi alembik, okrągły piec, którego wnętrze dostarczać ma cztery poziomy ciepła. Tu właśnie przygotowuje się mieszankę mającą posłużyć do przemiany w kamień filozoficzny. Cesarz przygląda się pracy alchemika. Niecierpliwość i podniecenie ustępują miejsca przytłaczającej ciszy oczekiwania na zaprogramowany cud. Słychać tylko pomrukiwanie ognia"</em>. Ciekawie także autorka określa czasy w jakim żył cesarz: <em>"Epoka Fausta, w której nie ma podziału na naukę i magię, a świat jest jeszcze do odkrycia, fascynuje cesarza"</em>.</p>
                <p className="mb-4 text-gray-800 dark:text-white">W tym  okresie rabinem Pragi, dwa razy, był wspomniany rabbi Löw, który był przez króla bardzo lubiany i szanowany, pododnie jak inne ciekawe osobowości zamieszkające w tym okresie Pragę. No dobrze, ale co z tym golemem ? Czy to tylko taka luźna opowieść, aby postaszyć niegrzeczne dzieci ? Zapewne także (jeszcze jak!), ale źródła glinianej postaci ożywanej przez człowieka mają swój początek w starożytnych i średniowiecznych pismach.</p>
                
                <h3 className="mb-4 text-gray-800 dark:text-white">Źródła.</h3>
                
                <p className="mb-4 text-gray-800 dark:text-white">Samo słowo golem, w hebrajskim oryginale pojawia się w Torze [Cylkowa] w Psalmie 139,16:</p>
                <p className="mb-4 text-gray-800 dark:text-white"><i>16. </i><i><b>Zaród</b></i><i> mój widział</i><i>y</i><i> oczy Twoje, i w księdze Twojej, gdzie wszystkie zapisane przeznaczenia przyszła, i dla niego byłi jedno między niemi.</i></p>
                <p className="mb-4 text-gray-800 dark:text-white">Zaród jest to właśnie golem → nieukształtowana masa i forma, z której powstał Adam, pierwszy człowiek - Adam Harishon [Kadmon].  Warto dodać, że w interpretacji kabalistycznej chodzi tu o narodziny duszy człowieka, nie chodzi tu o fizyczną płeć. Adam symbolizuje najwyższy świat duchowy, zbiorową duszę Izraela, która ma zostać zbawiona, gdy naród osiągnie doskonałość duchową.</p>
                <p className="mb-4 text-gray-800 dark:text-white">W Talmudzie, który jest głównych komentarzem Tory i podstawą jej rozumienia w judaiźmie we fragmencie z Sanhedin 38b, opisane jest dwanaście pierwszych godzin Adama: <em>„Achiasz bar Chanina powiedział: dwanaście godzin miał dzień. W pierwszej godzinie ziemia została zgarnięta w jedno miejsce; <strong>w drugiej stał się golemem</strong>, nieukształtowaną jeszcze masą; w trzeciej rozciągnięte zostały jego członki; w czwartej wrzucono w niego duszę; w piątej stanął na nogach; w szóstej nadał wszystkim stworzeniom żywym nazwy; w siódmej dano mu towarzyszkę Ewę[Chawa]; w ósmej legli do łoża we dwoje i opuścili się we czworo; w dziewiątej otrzymał nakaz, w dziesiętej go przekroczył; w jedenastej odbyto nad nim sąd; w dwunastej został wypędzony i opuścił raj, jak mówi Psalm 43,13: A Adam nie będzie trwał w świętości nawet przez jedną noc”</em>.</p>
                <p className="mb-4 text-gray-800 dark:text-white">Tak więc człowiek nim stanie się Adamem, doskonałą formą, wcześniej składa się z nieukształtowanej masy, która potencjalnie może zostać ożywiona. Wspomniane cytaty ożywiły fantazje ludzką i pragnienie, aby potrafić stworzyć istoty niczym Bóg. Jednak dalej w Talmudzie, znajdują się słowa, które wskazują, że nie tyle ważne jest znaleźć przepis, sposób na ożywienie golema, ale także osoba, które chciałaby stać się stwórcą, musiałaby posiadać także boskie cechy, jak w cytacie z Sanhendin 65b: <em>„Rabba rzekł: Gdyby sprawiedliwi chcieli, mogliby stworzyć świat, ponieważ mówi się [Iz 59,2]: Bo wasze winy tworzą przepaść między wami a waszym Bogiem”</em>. Co oznaczałoby, że człowiek, który jest bez skazy i przez to staje się bliższy Bogu, posiada także większe moce stwórcze.</p>
                <p className="mb-4 text-gray-800 dark:text-white">W cytatach z Talmudu przytoczonych przez Gerschoma Scholema w "Kabała i jej symbolika" pojawiają się przykłady, kiedy rabiny próbowali tworzyć golemy, dając tym świadectwo swojej bliskości z Bogiem: <em>„Rabba bowiem stworzył mężczyznę i posłał go do rabbiego Zery. Ów przemawiał do niego, lecz ten nie odpowiadał. Wtedy rzekł: Jesteś pewien jednym z towarzyszy [członków jesziwy]; wracaj do swojego prochu”</em>. W innym cytacie: <em>„Rabbi Chanina i rabbi Oszaja w każdą wigilię szabatu zajmowali się Księgą Stworzenia – według inne wersji: przepisami (halachot) o tworzeniu – i stworzywszy sobie cielę mające jedną trzecią naturalnej wielkości, spożyli je"</em>.</p>
                <p className="mb-4 text-gray-800 dark:text-white">W Midraszu Tehillim czyli Komentarzu do Księgi Psalmów, mowa jest na temat budowy świata przez litery alfabetu hebrajskiego: <em>„Nikt nie zna jej [właściwego] porządku albowiem części Tory zostały podane w niewłaściwej kolejności. Gdyby bowiem tak było, każdy kto ją czyta, potrafiłby stworzyć świat, ożywiać umarłych i czynić cuda. Dlatego właściwa kolejność i układ Tory zostały ukryte i znane są tylko Bogu”</em>.</p>
                <p className="mb-4 text-gray-800 dark:text-white">W cytacie wskazującym na sposób na ożywienie glinianej postaci, wskazany jest rodzaj duszy, który musi być nadany, aby golema obudził się: <em>„Niech ziemia wyda żywe dusze”</em> Rdz 1,24. W II wieku stwierdzono, że chodzi tu o <em>R</em><em>uach</em>, duch wynikający z potencji ziemi, symbolizujący powietrze, życie. Wcześniej panowała koncepcja, że chodzi o <em>nefesz chaja</em> → tchnienie życia, nadane z góry przez Boga. [<em>Nefesz</em> to najniższy poziom duszy, pragnienie świata duchowego, witalność fizyczna. Potem znajduje się wspomniany <em>Ruach</em>, a potem znajduje się poziom <em>Neszama</em> - dusza rozumna, świadoma celu. <em>Chaja</em> to wysoki poziom duszy, symbolizuje samą esencję życia. Najwyższym poziomem duszy jest Yehida oznaczająca jedność, całkowitośc duszy i ciała].</p>
                <p className="mb-4 text-gray-800 dark:text-white">Pora powiedzieć o Księdze Stworzenia, <em>Sefer Jecira</em>, w której według legendy korzystał rabii Jehuda Löw ben Becalel Maharal. Jest to jedna z podstawowych ksiąg kabalistycznych powstała w III/IV wieku, napisana przez nieznanego autora. Księga wprowadza pojęcia sefirot - elementów, z których zbudowane jest drzewo kabalistyczne. Według niej świat zbudowany jest w porządku określonym przez 10 sefirot i 22 liter alfabetu hebrajskiego (tzw. 32 drogi mądrości). W drugim rozdziale ksiegi czytamy: <em>„Dwadzieścia dwa elementy literowe: On naszkicował je, wyjął, zważył, połączył i wymienił [zamienił według określonych zasad], i stworzył z ich pomocą duszę wszelkiego stworzenia i wszystkiego, co kiedykolwiek zostanie stworzone"</em>. Wszechświat zapięczętowany jest w szęściu kierunkach sześcioma permutacjami imienia[szem] JHWH. Ten fragment stał się inspiracją dla powstania kabały profetycznej w XIII w., której założyciel Abraham Abulafia stosował bardzo specyficzne praktyki mistyczne - w każdą stronę świata wymawiał literę imienia JHWH, doprowadzając się do ekstazy.</p>
                <p className="mb-4 text-gray-800 dark:text-white">Księga Stworzenia, składająca się z niewielu stron w porównaniu do wpływu jaki miała w rozwój myśli kabalistycznej, zaledwie stawia ogóle zarysy duchowego świata. Potem w napisanej Księdze Blasku, <i>Sefer ha-Zohar</i>  można odnaleść dokładniejszy opis symboliki na sefirot na Drzewie Życia oraz interpretację liter alfabetu hebrajskiego, w kontekście stworzenia świata (rozdział "<span><em>Litery</em> Rawa haMenuna Saba").</span></p>
                <p className="mb-4 text-gray-800 dark:text-white">W znanym komentarzu do <em>Sefer Jecira</em> pojawia się odwołanie do golema:  <em>„W midraszu mówi się, że Jeremiasz i Ben Sira [syn] stworzyli dzięki księdze Jecira człowieka, który miał na czole napisane emet, Prawda, jak imię wypowiedziane przez niego nad stworzeniem, gdy dopełnił swojego dzieła. Ów człowiek wymazał jednak alef, aby w ten sposób powiedzieć, że Bog jest prawd, i musiał umrzeć”</em>. Golem jest więc powtórzeniem stworzenia Adama, dokonanym przez człowieka. Prawda to jest pieczęć Boga, która zostaje odciśnięta nad najdoskonalszym stworzeniu.</p>
                <p className="mb-4 text-gray-800 dark:text-white">Tego typu praktyki uznane są za niebezpieczne, dostępne tylko niewielkiej grupie, która nie będzie chciała ich praktykować w złej intencji. W kolejnym fragmencie pojawia się ostrzeżenie:  <em>„Zaprawdę, takie rzeczy powinno się studiować tylko po to, aby poznać siłę i wszechmoc stwórcy tego świata, nie po to zaś, żeby je urzeczywistniać”</em>.</p>
                
                <h3 className="mb-4 text-gray-800 dark:text-white">Interpretacje.</h3>
                
                <p className="mb-4 text-gray-800 dark:text-white">Najbardziej znaną interpretację literacką napisał Gustaw Meyrink w powieści "Golem” z 1915 r. Autor (ur. 1868 w Wiedniu – zm. 1932 w Starnberg, Niemcy) pisarz austriacki, okultysta, mistyk, znawca buddyzmu i kabały. Bohater powieści Atanazy Pernat, prosty rzemieślnik, wycinacz ozdobnych kamei, ma różne wizje dotyczące siebie i postaci pojawiających się w jego fantazjach - zaczyna od odczuwać i myśleć jak osoba, która go zawiedziła. Staje się przez to golemem - nosicielem czyjegoś ciała, które jest pozbawione duszy. Bohaterowi zostaje przez jedną z fantastycznych postaci wręczona księga Ibbur, która ma byc dla niego źródłem wskazówek wobec konfrontacji ze światem duchowym. Bohater dochodzi do wniosku, że jego ciało także nie ma duszy (świadomości), a on jest sobowtórem samego siebie. Interpretacja "Golema" Meyrinka może być przyczynkiem do osobnego artykułu, gdyż pojawia się tam wiele ciekawych elementów związanych z kabalistycznymi i buddyjskimi odniesieniami.</p>
                <p className="mb-4 text-gray-800 dark:text-white">Wracają do klasycznego ujęcia tematu, golema jako mieskiej legendy pojawia się w kontekście antysemityzmu,  gdzie golem miał być obrońcą twórcy i społeczności żydowskiej z powodu prześladowań miejscowej ludności. Społeczność żydowska była osądzana w nieprawdziwych i nacechowanych niechęcią opowieściach o mordy rytualne na dzieciach, kradzież i profanacja hostii lub innych elementów liturgicznych itd. Legenda o golemie, sprawia, że pojawia się bohater, która przeciwstawia się antysemickiej fali, obdarzony nadludzką mocą, przynosi ratunek i pociechę.</p>
                <p className="mb-4 text-gray-800 dark:text-white">Legendarni twórcy golemów, to byli sławni rabinowie swoich czasów, cenieni za wiedzę i mądrość. Chociaż nie ma dowódów na to, aby w swojej pracy odnosili się do postaci znanej im np. z Talmudu, to  potem ich sława była podnoszona i okraszona niesamowitym opowieściami. Prawda historyczna o realnie istniejącej postaci przestawała mieć znaczenie, ważniejszy stawał się mit, chętnie przekazywany z pokolenia na pokolenie.</p>
                <p className="mb-4 text-gray-800 dark:text-white">Z racji, że jest to blog psychoterapetuyczny warto przedstawić postać golema w ujęciu psychologii analitycznej <strong>Carla Junga</strong>. Wypuntuje elementy, które uznałem za istotne. Zapraszam Państwa do dalszej analizy tematu i własnych amplifikacji.</p>
                
                <p className="mb-4 text-gray-800 dark:text-white"><strong>Nieświadomość zbiorowa</strong> - legenda o golemie pojawia się w róźnych miejscach, miastach, krajach; żyje swoim biegiem i dynamiką w społeczności żydowskiej, a później także poza nią; owiana jest tajemnicą, dostępną studentom szkół talmudycznych, ale pomimo tego żyje własnym życiem jako legenda miejska, z którą utożsamiają się mieszkańcy miasta;</p>
                  
                <p className="mb-4 text-gray-800 dark:text-white"><strong>Archetyp</strong> - mit obrazuje naturę ludzką, próbę zmierzania się z możliwościach boskimi; archetypowe pragnienie ciągłego rozwoju i poszerzania swoich możliwości; dotykanie tajemnicy [stworzenia], konfrontowanie ze sobą sacrum i profanum; współcześnie postać golema przywołuje się w kontekście rozwoju sztucznej inteligencji [AI] - do jakiego etapu rozwoju technologicznego maszyna skonstruowana od zera przez człowieka będzie tlyko maszyną, a kiedy świadomą jednostką, posiadającą duszę, osobowość;</p>
                
                
                <p className="mb-4 text-gray-800 dark:text-white"><strong>Projekcja (mechanizm obronny)</strong> - golema można zinterpretować jako wyprojektowane pragnienia o wszechmocy i nieugiętości w walce z niesprawiedliwością; mit jednoczący, "ku pokrzepieniu serc";</p>
                
                <p className="mb-4 text-gray-800 dark:text-white"><strong>Cień</strong> - kontekst pojawienia się golema wynika ze sfery cienia społecznego jakim jest antysemityzm (nietolerancja w stosunku do społeczności żydowskiej), który przez przedstawicieli tego typu myślenia jest wypierany i zaprzeczany (uważają w sferze publicznej deklaracji, że antysemityzmu nie ma); </p>
                    
                <p className="mb-4 text-gray-800 dark:text-white"><strong>Persona</strong> - najbardziej powierzchowna cześć osobowości człowieka, która aby mogła dobrze funkcjonować, powinna być w stałych kontakcie z nieświadomoscią oraz Jaźnią (całość Psyche) - co jest celem terapii w psychologi analitycznej; kiedy persona nie ma kontaktu z Jaźnią, staje się pustą formą, która zaczyna uwierać pacjentom - świadczy o niedostosowaniu do świata zewnętrznego, jak i wewnętrznego; tego typu persona w jakiś sposób przywołuje symbol golema - kiedy nie ma w sobie "prawdy" (kontakt z Jaźnią), to pozostaje glinianą pustą bezkształtną formą; ożywia dopiero, kiedy staje się w pełni świadoma i zintegrowana z całością Psyche;</p>
                
                <h3 className="mb-4 text-gray-800 dark:text-white">Podsumowanie.</h3>
                <p className="mb-4 text-gray-800 dark:text-white">Golem pojawia się obecnie głównie jako odkurzona legenda miejska, kolejna atrakcja turystystyczna mająca na celu ubarwienie historii miasta. W czeskiej Pradze i w Chełmie żyją legendą golema od lat, ostatnio dołączył Poznań - władza miasta zleciły czeskiemu artyście (David Černý) stworzenie nowoczesnego pomnika golema, który ostateczne postawiony został na Alejach Marcinkowskiego w 2010 roku.</p>
                <p className="mb-4 text-gray-800 dark:text-white">Mit stał się inspiracją do napisania książki "Frankestein" w 1818 roku przez brytyjską romantyczną autorkę Mary Shelley. Do golema doczepiane są także takie postacie jak Terminator czy Robocop. Z drugiej strony golem ma swoje źródła w kulturze żydowskiej, w judaiźmie, gdzie nie jest co prawda postacią centralną, ale służy do wyjaśniania mechanizmu stworzenia człowieka.</p>
                <p className="mb-4 text-gray-800 dark:text-white">Patrząc na podstawy archetypowe, gliniana postać golema porusza struny związane z podstawowymi pragnieniami człowieka - rozwój ludzkich możliwości, ożywianie materii, postęp technologiczny, którego celem jest stworzenie żyjącej maszyny.</p>
                <p className="mb-4 text-gray-800 dark:text-white">Ilość interpretacji wydaje się nie mieć końca. Zdecydowałem się napisać artykuł o golemie przy okazji mojej prelekcji na Pyrkonie 2018 - "Golem i jego twórca. Wątki poznańsko-praskie". A właściwie chciałem cała historię z przygotowanej prezentacji napisać od nowa, gdyż miałem poczucie niedosytu, że nie dotknąłem wszystkich wątków i zagadnień. Będąc na końcu artykułu jestem trochę spokojniejszy, aczkowiek postać golema nadal stanowi dla mnie powód do reflekcji nad głębszym sensem tego symbolu w ujęciu świadomości społecznej. Niemniej czuję, że należy sobie na ten czas powiedzieć "dość" i powrócić do tematu kiedyś ponownie, już z nową wiedzą i doświadczeniem.</p>
                
                <h3 className="mb-4 text-gray-800 dark:text-white">Bibliografia.</h3>
                
                <p className="mb-4 text-gray-800 dark:text-white">1. Kabała i jej symbolika”, rozdz.: „Wyobrażenie golema w kontekście tellurycznym imagicznym”, Gershom Scholem 1960/2014 &gt;</p>
                
                <p className="mb-4 text-gray-800 dark:text-white">2. Od golema do Terminatora. Wizerunku sztucznego człowieka w kulturze.”, Magdalena Radkowska – Walkowicz, 2008</p>
                
                <p className="mb-4 text-gray-800 dark:text-white">3. Rozprawa doktorska: „Golem. Między reifikacją a upodmiotowieniem”, Anna Cieślak, Poznań 2017</p>
                
                <p className="mb-4 text-gray-800 dark:text-white">4. Powieść „Golem”, Gustaw Meyrink, 1915 <Link href="https://wolnelektury.pl/katalog/lektura/golem/">Wolne Lektury</Link></p>
                
                <p className="mb-4 text-gray-800 dark:text-white">5. Cesarz alchemików. Rudolf II Habsburg”, Jacqueline Dauxois, 1997</p>
                
                <p className="mb-4 text-gray-800 dark:text-white">6. Hebrajsko - polski słownik kabalistyczny (materiały <Link href="https://www.youtube.com/channel/UCbzT1K7WwmVN8klLZ52gCKg" target="_blank" rel="noopener">Akademii Kabały Luriańskiej)</Link></p>
                    
                <h3 className="mb-4 text-gray-800 dark:text-white">Multimedia.</h3>

                <ul className="px-3 space-y-2 list-disc text-md text-gray-800 dark:text-white">
                  <li><Link href="https://www.youtube.com/watch?v=B68kPjFB8To&t=3s" className="hover:underline decoration-from-font dark:hover:decoration-gray-500 dark:hover:bg-gray-800">Golem Rabina Eliasza - Legenda o Golemie z Chełma - czyta Robert Koszucki</Link></li>
                  <li><Link href="https://www.youtube.com/watch?v=O6KZEUdTGsk&t=155s" className="hover:underline decoration-from-font dark:hover:decoration-gray-500 dark:hover:bg-gray-800">Golem: a legendary Jewish clay man and his impact on art | DW Documentary</Link>
                  </li>
                  <li><Link href="https://www.youtube.com/watch?v=1HnaNxrMILE" className="hover:underline decoration-from-font dark:hover:decoration-gray-500 dark:hover:bg-gray-800">Przykład praktykowania kabały profetycznej Abrahama Abulafii.</Link>
                  </li>
                  <li><Link href="https://www.youtube.com/watch?v=ZEkkcuNys_I&t=3s" className="hover:underline decoration-from-font dark:hover:decoration-gray-500 dark:hover:bg-gray-800">Film "Golem" z 1920 roku Paula Wegenera.</Link>
                  </li>
                  <li><Link href="https://www.youtube.com/watch?v=d0HstfmZc5E&t=1s" className="hover:underline decoration-from-font dark:hover:decoration-gray-500 dark:hover:bg-gray-800">"Golem" z 1979 roku, polski film Piotra Szulkina.</Link>
                  </li>
                </ul>
                          
             
              </div>

              </div>

            </div>

      </main>
    )
}