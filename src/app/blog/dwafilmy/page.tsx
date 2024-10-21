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
  title: "Dwa filmy - Blog - Gabinet Łukasz Chwalisz",
  description: "Dwa filmy - Blog - Gabinet Łukasz Chwalisz",
  keywords: "Dwa filmy, blog, gabinet, łukasz chwalisz",
};

export default function DwaFilmy() {
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
            
            <BreadcrumbPage>Dwa filmy</BreadcrumbPage>
            
            </BreadcrumbItem>

          </BreadcrumbList>

      </Breadcrumb>
      

          <Image
            src="/obr/popeshouse.png"
            alt="Dwa filmy."
            className="rounded-md shadow-md m-6"
            width={600}
            height={1}
            priority
          />
         
        
        <div className="prose prose-base text-justify m-2">
        

              <div className="p-4 m-4">
                <h1 className="text-center font-semibold dark:text-white">Dwa filmy</h1>
                <p className="text-center text-sm text-gray-500 dark:text-gray-300">wpis z 10.01.2020 r.</p>
              </div>
                
                
              <p className="mb-4 text-gray-800 dark:text-white"> Pod koniec 2019 roku miały miejsce premiery dwóch filmów, bardzo ciekawych, w pewien sposób
              podobnych do siebie i bardzo różnych zarazem. Mam na myśli "Dwóch papieży", wyprodukowany przez
              Netflix oraz wyświetlany w kinach studyjnych "The Lighthouse". </p>
              <p className="mb-4 text-gray-800 dark:text-white"> Główne podobieństwo to przede wszystkim sposób prowadzenia fabuły - w obu produkcjach uwaga widzów skupiona
              jest na dialogu dwóch bohaterów. Postaci filmowe są pokazane jako różniące się od siebie jak ogień i
              woda - tutaj spotyka się dobry ze złym, zły z dobrym, biel z czernią, czerń z bielą,
              otwarty z zamkniętym, postępowy z konserwatystą, doświadczony z żółtodziobem itd..</p>
              <p className="mb-4 text-gray-800 dark:text-white">W wyniku interakcji dochodzi do przemiany bohaterów, a jeżeli nie samej przemiany,
              to do nowego spojrzenia na bohatera albo zmiany spojrzenia na samego siebie.
              Niemniej najbardziej istotnym warunkiem jest skupienie, rozmowa i proces, który został
              uruchomiony. A nie jest to proces łatwy - powoduje wiele bólu, wstydu, skrajnych emocji,
              czasem upokorzenia, wyznania win, refleksji nad sobą, wybuchów nienawiści, jak i
              przyjacielskiej miłości. </p>
              <p className="mb-4 text-gray-800 dark:text-white"> Moje skojarzenia szybko i łatwo podążają w stronę słynnego powiedzenia Junga o spotkaniu
              dwóch osobowości, w wyniku którego obie zostają przemienione. Patrząc uważnie, można
              dostrzec wiele odwołań do symboliki mitologicznej, archetypów i do analitycznych pojęć.
              Myślę, że warto przyjrzeć się im dokładniej. </p>
              <h3 className="mb-4 text-gray-800 dark:text-white"> Dwóch papieży.</h3>
              <p className="mb-4 text-gray-800 dark:text-white"> Jest to historia dziejąca się współcześnie, obaj bohaterowie to postaci realne, fabuła
              opiera się na historycznych faktach. Po śmierci Jana Pawła II odbywa się konklawe w wyniku,
              którego zostaje wybrany na papieża Joseph Ratzinger, Benedykt XVI. Nowy papież, najbliższy
              współpracownik JP II, jest konserwatystą, nie chce żadnych zmian, ostrożnie podchodzi do
              ujawniania prawdy o pedofilii w kościele, nie chce zajmować się dziwnymi powiązaniami z
              mafią i funkcjonowaniem Banku Watykanu. Po drugiej strony sporu o wizję kościoła stoi
              kardynał z Argentyny, Juan Bergoglio, który chce radykalnych reform i rozliczeń, co nie
              podoba się wielu kościelnym hierarchom . Ponadto znany jest z udzielenia rozgrzeszenia rozwodnikom,
              poruszaniem się komunikację miejską, bliskością z wiernymi, a nawet kibicowaniem klubowi piłkarskiemu
              San Lorenzo z Buenos Aires. Jednak w 2005 roku zdecydowanie wygrał papież konserwatysta. </p>
              
              <p className="mb-4 text-gray-800 dark:text-white"> Fabuła filmu zaczyna się, kiedy Juan Bergoglio pisze list do papieża o wyrażenie zgody na
              rezygnację z zajmowanej funkcji i przejścia na emeryturę. Papież Benedykt XVI wzywa kardynała
              do siebie do Rzymu. Podczas spotkania, Juan Bergoglio wypytywany jest o swoje
              poglądy na temat kościoła, wizję zmian i spojrzenie na przyszłość. Oboje doskonale zdają sobie
              sprawę z dzielących ich różnic. Jednak kardynał z Argentyny wypowiada się otwarcie, nie ma już
              nic do stracenia, odchodzi ze wszystkich zajmowanych funkcji. Papież Benedykt może mieć
              poczucie, że wygrał, a jego największy przeciwnik w ramach kościoła wycofuje się. Tymczasem,
              papież Benedykt nie zgadza się na rezygnację kardynała Bergoglio. Mało tego, sam
              zamierza zrezygnować z funkcji papieża, a jego widzi jako swojego następcę... </p> 
              <p className="mb-4 text-gray-800 dark:text-white"> To moment kluczowy filmu. Papież, który uchodzi za twardego konserwatystę, chce zrezygnować
              z funkcji, odwołując się do precedensu renuntiatio z XV w.. Juan Bergoglio w pierwszym odruchu
              sprzeciwia się, odwołuje się nawet do cierpiącego Jezusa, który nie zszedł z krzyża. Teraz to on
              wchodzi w buty konserwatysty, jest w szoku. Benedykt XVI tłumaczy swój wybór, co jest swoistą spowiedzią
              o tym, że nie czuje już obecności Ducha Świętego tak jak kiedyś, a poza tym wydaje mu się, że Duchu Święty
              przemawia przez kardynała z Argentyny. Nie chcąc się sprzeciwiać swojej wizji, pragnie się jej poddać. </p>
              <p className="mb-4 text-gray-800 dark:text-white"> Juan Bergoglio przyjmuje do wiadomości decyzję papieża. Podczas kolejnej rozmowy dzieli się
              swoimi niepokojami odnośnie własnej sytuacji - chodzi o czas, kiedy był prowincjałem jezuitów w
              Buenos Aires i aby ochronić swoich zakonników, poszedł na współpracę w juntą wojskową. Przez
              długi czas wypowiadano mu ten fakt, że wskazywał prawicowym przywódcom junty osoby w kościele,
              które nie chcą współpracować - przeciwnicy junty byli torturowani bądź mordowani. </p>
              <p className="mb-4 text-gray-800 dark:text-white"> Minęło wiele czasu, kiedy przyszły papież Franciszek, zrozumiał swój błąd. Zaczął bardziej
              otwarcie i krytycznie patrzeć na swoje postępowanie, jak i na postępowanie całego kościoła.
              Nastąpiła w nim przemiana, która zmieniła myślącego prostymi kategoriami księdza, dbającego
              w krótkowzroczny sposób o dobro swojego zakonu w osobę, która stara się być przywiązana do
              żadnej instytucji, a chce być bliżej ludzi i ich problemów socjalnych, duchowych, moralnych. </p> 
              <p className="mb-4 text-gray-800 dark:text-white"> Od teraz bohaterowie nie wydają się już tacy jednoznaczni, między nimi zacieśnia się wieź.
              Każdy z nich musiał wyznać grzechy, zmierzyć się ze swoim cieniem, dotknąć ciemną stronę siebie,
              osoby duchownej, ale grzesznej, niedoskonałej. Wzajemne zbliżenie się doprowadziło dawnych wrogów
              to spojrzenia na swoją zakrytą stronę, wstydliwą, czasem małostkową. Uwolnienie się od swojego tabu,
              zerwanie bezpiecznego okrycia, uwolniło energię, która dotąd była tłumiona, nie miała przestrzeni,aby
              wyjść z duchowego ciała. </p>
              <h3 className="mb-4 text-gray-800 dark:text-white"> Latarnia. </h3>
              <p className="mb-4 text-gray-800 dark:text-white"> Realistyczna historia z poprzedniego filmu kontrastuje z fabułą "The Lighthouse" - opowieści
              mrocznej, tajemniczej, nieprzystępnej. Widzowie oglądają czarno-biały obraz, kwadratowy kadr,
              który pogłębia klaustrofobiczny odbiór zamknięcia bohaterów na małej przestrzeni. Brak kolorów
              kompensuje przepiękna gra świateł. Surowość przedstawionego świata wciąga powoli, lecz systematycznie.
              Akcja filmu dzieje się na małej wysepce pośrodku rozszalałego morza. Jest tam latarnia, najwidoczniejsze
              centrum, jakieś budynki gospodarcze i właściwie to wszystko. Rozszalałe emocje między postaciami
              jeszcze bardziej zagęszczą ciasnotę dostępnej przestrzeni. </p>
              <p className="mb-4 text-gray-800 dark:text-white"> Ponownie oglądamy dwie postaci, bardzo od siebie różne, bardzo skomplikowane. Przyjeżdżają na
              wyspę na swoją zmianę do pracy. Jeden z nich to doświadczony latarnik, który poświęcił życie morzu.
              Drugi to młody, niedoświadczony chłopak, który jednak ma swoją traumatyczną historię - nie wytrzymał
              gnębienia w wojsku kanadyjskim i poprosił o odesłania na morskie pustkowie, aby się sprawdzić. Pobyt w
              założeniu miał być dla niego terapią, odpoczynkiem, nabraniem sił i być może powrotem do armi albo
              odnalezieniem roboty w cywilu. </p>
              <p className="mb-4 text-gray-800 dark:text-white"> Szybko jednak musi zweryfikować swoje plany. Pod pozorami braterstwa starszy latarnik przy każdej okazji
              daje do zrozumienia młodszemu koledze kto tu rządzi. Młody początkowo myśli, że to są żarty, stara się
              wykonywać polecenia sumienie. Chociaż czasem tym poleceniem jest picie rumu i śpiew. Czasem czyszczenie
              odchodów. Czasem bezsensowne wykonywanie jakieś czynności ku uciesze tego starszego. Bądź inna upadlająca praca. </p>
              <p className="mb-4 text-gray-800 dark:text-white"> Młodszy powoli zaczyna sobie zdawać sprawę, że bezrefleksyjne posłuszeństwo dochodzi do granicy przyzwolenia
              na upokorzenie. Starszy latarnik stawia się w roli surowego ojca,
              niepodważalnego autorytetu, od którego zależy być albo nie być podwładnego. Za nie wykonywanie poleceń
              grozi kara - brak wypłaty albo zwolnienie ze służby. Zaczyna się niebezpieczna gra. Pojawiają się
              niedomówienia, prowokacje, spiskowe teorie, brak zaufania. Młodszy oskarża starego wilka morskiego, że
              specjalnie chce doprowadzić do sytuacji, kiedy on przestanie
              wykonywać polecenia (absurdalne, niemożliwe do wykonania), tak aby mieć alibi, aby nie zapłacić za pracę albo
              co gorsza cała wypłatę zabrać dla siebie. Spotyka się z wybuchem złości i eskalacji emocji. </p>
              <p className="mb-4 text-gray-800 dark:text-white"> Stary latarnik ma też inne tajemnice. Nie chce mówić o tym co się stało z jego poprzednim pomocnikiem.
              Mówi tylko o nim, że zwariował. Wychodzą na jaw coraz bardziej dziwaczne zwyczaje - stanowczo zabrania
              pilnować światła samej latarni, chociaż według regulaminu młodszy do do tego takie same prawo.
              Pewnego razu zakrada się i wchodzi na górę latarni, aby podpatrzeć starego wygę. Raz przyłapuje go podczas
              masturbacji. Prawdopodobnie zobaczył syrenę - pół nagą kobietę, pół rybę. Z czasem sam zaczyna mieć
              takie erotyczne wizje o mitycznych potworach. </p>
              <p className="mb-4 text-gray-800 dark:text-white"> Starszy latarnik powtarzał to zdanie jak mantrę : "Nie jesteś gotowy!". Co więc może zrobić ? Co to oznacza,
              że nie jest gotowy ? Analizując klasycznie freudowsko pojawia się we mnie skojarzenie z motyw zabójstwa
              symbolicznego ojca. W pracy "Mojżesz i monoteizm" Freud argumentował, że głównym nieświadomym impulsem do 
              powstania religii monoteistycznej było wcześniejsze ojcobójstwo dokonane przez Mojżesza, dzięki czemu mógł
              stać się prorokiem, dzielić się światłem. </p>
              <p className="mb-4 text-gray-800 dark:text-white"> Ja jednak staram się interpretować w ramach psychologi analitycznej.
              W tym ujęciu dojście do światła to osiągnięcie Jaźni, pełni, kontroli nad instynktami. Starszy latarnik to stare,
              kołtuńskie ego, które boi się przemiany. Młody to ideał Ja, który za wszelką cenę dąży do rozwoju.
              Do ostatecznego starcia dochodzi w końcu na krętych schodach latarni. </p>
              <p className="mb-4 text-gray-800 dark:text-white"> W trakcie opowieści dowiadujemy się także, że oboje noszą do samo imię - Thomas. Na początku ten młodszy nie przedstawia
              swoich prawdziwych danych. Język rozwiązuje mu się, kiedy oboje wypili już hektolitry rumu. Ten element nie
              wydaje się aż tak istotną częścią fabuły, ale analizując symbolicznie całość, pojawiają się kolejne pytania:
              A może to ta sama osoba ? A może oglądamy czyjś sen, w którym objawiły się różne elementy osobowości ? Kto więc śni ?
              Jak teraz patrzeć na opowieść i przekaz całego filmu ? </p>
              <p className="mb-4 text-gray-800 dark:text-white"> Kilka takich momentów sprawia, że ogląda się znakomicie film, który jest w sumie bardzo oszczędnie przedstawiony.
              Podobnie w poprzedniej produkcji, kiedy nowy i emerytowany papież  oglądają mecz piłki nożnej czy tańczą ze sobą w ogrodach Watykanu.
              Równie dobrze mogę wyobrazić ich sobie na małej wyspie pośród rozszalałego oceanu. Bo najważniejsze jest bogactwo
              w ich relacji, tam dzieje się akcja, tam zachodzi swoiste participation mistique. Otoczenie, piękne czy brzydkie, nie ma tu
              aż takiego znaczenia. Spotkanie osobowości ma swoje własne pole grawitacyjne, które skupia uwagę widza i nie pozwala się oderwać. </p>
              <h3  className="mb-4 text-gray-800 dark:text-white"> Na koniec. </h3>
              <p className="mb-4 text-gray-800 dark:text-white"> Mam wrażenie, że bogactwo symboliczne zawarte w obu firmach nie ma końca, ale chciałbym się już zatrzymać.
              Ja chciałem tylko uchwycić moment/momenty najbardziej istotne. A dalej można analizować samą formę -
              muzykę, rytm, dźwięki. Ryk przepływających statków, który wciska w fotel, brzmiący niczym odgłos morskiego potwora.
              Dźwięki wrzucanych drewnianych kul z nazwiskami kardynałów, które decydują o wyborze nowego papieża. I tak bez końca.
              Bardzo ciesze się za te produkcje, dały mi nadzieję, że sztuka nadal może czerpać z symbolicznych głębin, choć
              na chwilę odejść od brutalnej dosłowności i banalności przekazu. </p>
              <p className="mb-4 text-gray-800 dark:text-white"> Nie jest to recenzja filmową, lecz zaledwie próba analizy symbolicznych figur, które pojawiły się w obu
              produkcjach. Z góry przepraszam za tak zwane spoilery, ale inaczej nie dałoby się opisać moich obserwacji.
              Zadaję sobie sprawę, że wyciągnąłem tylko niektóre elementy, które wydały mi się istotne i dodatkowo korespondowały ze
              sobą w synchroniczny sposób. To są jednak osobne dzieła filmowe, tak oczywiście należy je traktować.
              Połączenie nastąpiło w mojej głowie, w moim odbiorze, gdzie różne historie kompletnie ze sobą nie powiązane
              zaczęły ze sobą rezonować. Tak jakbym dostał wiadomość, że ta historia została opowiedziana ponownie, na pewnym
              głębszym poziomie, choć jednocześnie jest to bardzo różna historia. Mam nadzieję, że choć kilku czytelników/czytelniczek
              tego artykułu podzieli mój pogląd. </p>
             
              <iframe className="mb-4" width="100%" height="315" src="https://www.youtube.com/embed/3e2_6U5fD6Q"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
              <iframe className="mb-4" width="100%" height="315" src="https://www.youtube.com/embed/Hyag7lR8CPA"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>  
           
          </div>

         

     

    </main>

  )
}