
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
  title: "Pacjent Zero - Blog - Gabinet Łukasz Chwalisz",
  description: "Pacjent Zero - Blog - Gabinet Łukasz Chwalisz",
  keywords: "Pacjent Zero, blog, gabinet, łukasz chwalisz",
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
            
            <BreadcrumbPage>Pacjent Zero</BreadcrumbPage>
            
            </BreadcrumbItem>

          </BreadcrumbList>

      </Breadcrumb>
      

          <Image
            src="/obr/pacjentzero.jpg"
            alt="Pacjent Zero."
            className="rounded-md shadow-md m-6"
            width={600}
            height={1}
            priority
          />
         
         <div className="prose prose-base text-justify m-2">

              <div className="p-4 mb-4">
                <h1 className="text-center font-semibold dark:text-white">Pacjent Zero</h1>
                <p className="text-center text-sm text-gray-500 dark:text-gray-300">wpis z 26.04.2020 r.</p>
              </div>

                  <p className="mb-4 text-gray-800 dark:text-white">
                  Rok 2020. Człowiek w masce idący uliczkami miast, trzymający się w odpowiedniej odległości
                  od innych osób, które także mają zakryte twarze. Każdy dzień niesie za sobą
                  informacje o nowych zakażonych, wyleczonych, zmarłych. Rząd wydaje zarządzenia,
                  według których określane są reguły poruszania się. Za nieprzestrzeganie ich
                  policja może ukarać wysokim mandatem... </p>
                  <p className="mb-4 text-gray-800 dark:text-white"> 
                  Działają tylko sklepy, w których można się
                  w najpotrzebniejsze produkty. Gospodarka stanęła. Granice zostały zamknięte.
                  Zaprzestano połączeń lotniczych. Cena ropy osiągnęła wartość minusową - teoretycznie
                  stała się więc niepotrzenym towarem, który niepotrzebnie zalega w magazynach, portach,
                  którą każdy chce się pozbyć. Cała działalność gospodarcza przeniosła się do internetu,
                  niektóre fabryki nadal działają, ale pod bardzo restrykcyjnymi warunkami.
                  Ludzkość wykorzystuje dostęną technologię, aby przetrwać. Największa uwaga została
                  zwrócona na laboratoria badawcze, które pracują nad szczepionkę, która zdoła
                  powstrzymać pandemię.</p> 
                  <p className="mb-4 text-gray-800 dark:text-white">
                  Większość osób, które czyta te słowa zdaje sobie sprawę, że nie jest to fragment
                  powieści Williama Gibsona,z serii Ciągu (m.i. Neuromancer, Graf Zero). Na początku roku
                  zagłębiłem się w cyberpunkowy świat uzależniony od technologii, pod całkowitą
                  kontrolą państw i korporacji. Obecnie mam wrażenie, że ten świat przyszedł do mnie
                  i nie jest już tylko postapokaliptycznymi wyobrażeniem. Ja wraz ze wszystkimi
                  obywatelami świata, chcąc nie chcąc, stałem się postacią żyjącą w warunkach znanych
                  dotychczas z tylko kart niszowej literatury. Stałem się aktorem powieści, która
                  pisana jest każdego dnia, której możliwe zakończenia określane są zgodnie z rachunkiem
                  prawdpodobieństwa.</p> 
                  <p className="mb-4 text-gray-800 dark:text-white">
                  A czas biegnie, laboratoria opracowują nowe testy, nowe propozycje szczepionki oraz leku.
                  Stosowane są terapie eksperymentalne w celu zbadania jak zachowa się wirus, który
                  został wstępnie rozpoznany i opisany niecałe półroku temu. Początkowo wirus miał atakować
                  tylko osoby starsze lub z chorobami współistniejącymi. Rosnąca skala przypadków na całym
                  świecie wykazała, że chorują i starzy i młodzi, a nawet dzieci. Większość osób przechodzi
                  chorobę COVID19, wywołaną przez wirusa bezobjawowo, ale może przez to rozprzestrzeniać ją
                  nieświadomie, zarażając kolejne osoby. </p>
                  <p className="mb-4 text-gray-800 dark:text-white">
                  Od początku pandemii pojawiały się historie tzw. "pajenta zero" - kogoś, kto podróżował po
                  świecie z miejsc, gdzie wirus już zdołał się rozpowszechnić i stykając się z zakażonymi
                  przywiózł go ze sobą w nowy obszar, powodując tam zagrożenie pandemiczne dla zdrowia i
                  życia całego kraju. Były to historie zwykłych ludzi, każdego, każdej. Osób nie przygotowanych
                  na taką traumę, taką odpowiedzialność. Pacjent zero z Włoch wyzdrowiał i wrócił do siebie.
                  Historie innych pacjentów są w większości przypadków nieznane. I być może dobrze, bo
                  nie utracili prawa do prywatności.</p>
                  <p className="mb-4 text-gray-800 dark:text-white">
                  Niezależnie od tego jaka to była historia, na początku wszyscy traktowali ze zrozumieniem
                  kontakt z wirusem, którego działanie było i jest nieprzewidywalne. Ludzie stali się
                  jednością wobec nieznanego zagrożenia. Jednak, jak się okazało, do czasu. Szybko w
                  społeczeństwach pojawiły się zachowania obronne, które wiąząły się z napiętnowaniem czy wykluczeniem osób,
                  które mogły być zakażone lub miały kontakt z osobami zakażonymi.</p>
                  <p className="mb-4 text-gray-800 dark:text-white">
                  Wszystkie obostrzenia związane z poruszaniem sie i zakrywaniem twarzy miały na celu powstrzymanie
                  ilości osób zakażonych, tak aby służba zdrowia była na tyle wydolna, aby pomóc jak największej
                  grupie pacjentów. Jednak zdarzały sie liczne przypadki łamania kwarantanny przez zwykłych obywateli.
                  Personel medyczny, bedący na pierwszej linii ognia, lekarze, lekarki, pielęgniarze
                  i pielęgniarki na początku pandemii otrzymywali dużo wsparcia - zbiórki pięniedzy na sprzęt ochronny, darmowa pizza,
                  spontaniczne wyrazy sympatii, koncerty internetowe, oklaski na balkonach. Kolejne informacje o
                  ilości zakażonych, także wśród personelu medycznego, który w kontacie z nowymi chorymi nie ma pojęcia
                  czy ma kontakt z osobą zakażoną, zaczął budzić strach i panikę i wkrótce zachowania instynktowne wzięły
                  górę na zdrowym rozsądkiem (tak, to opinia). Dawni bohaterowie i bohaterki stali się zagrożeniem -
                  zaczęto piętnować ich, ich rodziny, ich dzieci. Stali się w oczach ludzi pacjentem zero, który może
                  być źródłem zakażenia.</p>
                  <p className="mb-4 text-gray-800 dark:text-white">
                  Jeżeli na oddziale ktoś z personelu zostanie zakażony wszyscy pozostają objęci kwarantanną conajmniej na
                  dwa tygodnie. I zostają ze swoimi pacjentami przez ten czas, bez możliwości powrotu do domu. Oddział zostaje
                  oddzielony od świata, wyłączony z możliwości pomory chorym. Stres, trauma, którego skutki spodziewane są
                  przez specjalistów psychiatrów, psychoterapeutów - prawdopodobnie silne objawy zespołu stresu pourazowego,
                  uświadamiają, jak wielkim ryzykiem obciążony jest zawód lekarza. Ale czy teraz ktoś na zwraca uwagę ?
                  Przychodzi mi na myśl historia pielęgniarki z Bergamo, największym ośrodkiem zakażenie we Włoszech, która
                  na wieść o tym, że mogła zostać zakażona, popełniła samobósjtwo. </p>
                  <p className="mb-4 text-gray-800 dark:text-white">
                  Jak napisałem w pierwszych akapitach, ta historia pisana jest cały czas, jej zakończenie nie jest oczywiste.
                  Oprócz niezapowiedzianego gościa, jakim jest korona wirus, nasza planeta cały czas zagrożona jest przez zmiany
                  klimatyne. Pod koniec roku większość terytorium Australii objął pożar widoczny ze stacji kosmicznych. W tym
                  roku w Polsce zimą nie było śniegu. Ziemia jest sucha i jałowa. Nieodpowiedzialne zachowanie człowieka doprowadziło
                  do podpalenia tysięcy hektarów Biebrzańskiego Parku Narodowego. Zginęło tysiące ptaków, które próbowały ratować
                  swoje siedliska. A to dopiero początek wiosny.</p>
                  <p className="mb-4 text-gray-800 dark:text-white">
                  Zagrożeń jest wiele, nie wszystkie jeszcze dały o sobie znać. Na wiele ludzka psychika musi sie przygotować,
                  aby nie popadać w nastrój depresyjny albo w panikę z drugiej strony. Wiele komunikatów z miediów to komunikaty
                  emocjonalne. Bo taka jest natura mediów - wywołać zainteresowanie, budzić emocje. A żyjemy w czasach postprawdy,
                  deep fake'ów - niedawno przekazana informacja o radioaktywnym dymie z Czarnobyla, która kieruje się w stronę
                  Polski okazała sie nieprawdą. Tak więc jesteśmy wystawieni na próbę, na konfrontację z informacją, której
                  wiarygodności nie jesteśmy w stanie zweryfikować. Nie jesteśmy na tyle kompetentni, nie wiem też czy to dobra taktyka,
                  aby być ekspertem w każdej dziedzinie.</p>
                  <p className="mb-4 text-gray-800 dark:text-white">
                  Być może warto wprowadzić pewne informacyjne embargo, ograniczyć się do najważniejszych zaleceń dotyczących mnie
                  bezpośrednio. Na tym etapie niedokończonej historii, w której wszyscy bierzemy udział, trudno znaleźć miejsce, gdzie
                  nie wspomina się o koronawirusie (od teraz także na mojej stronie..), tak więc nie musimy się specjalnie nastawiać
                  na poszukiwanie informacji. Oprócz pandemii, każdy z nas ma swoją własną historię, swojego życia, rodziny, dzieci,
                  swoich pasji, pragnień, kolejnych projektów, nowych obszarów poznania. Może to jest sposób ? Siedząc w domu, można
                  zastanowić się nad możliwościami na odnalezienie się w narzuconej sytuacji. Być może nadszedł czas, aby poruszyć
                  odkładany od dawna temat. Nie chciałbym zabrzmieć jak coach, ale wydaje mi się, że dla zdrowia psychicznego ważne jest,
                  gdy umysł miał alternatywę i nie czuł presji zajmowanie się jednym tylko tematem. Do tego, jak i każdego tematu,
                  można podejść kreatywnie, użyć wyobraźni, jungowskiej amplifikacji - obchodzić wybrany temat wielokrotnie, za każdym
                  razem wynosząc coś nowego. A emocjonalne skupić się na własnych zasobach, na swoich najbliższych, poszukać radości w
                  małych prostych rzeczach. To bardzo ważne teraz, właśnie teraz.</p>
                  <p className="mb-4 text-gray-800 dark:text-white">
                  Bardzo trudno jest mi zakończyć ten post na stronie, bo historia jest bardzo żywa, wylewa się ze mnie sama.
                  Podzieliłem się kilkoma swoimi refleksjami, które pojawiły mi się przez ostanie dwa miesiące. Ten czas uczy pokory,
                  wielkiej pokory i refleksji nad tym jak bezbronny jest człowiek wobec nieznanego zagrożenia, ile wysiłku kosztuje
                  zachowanie zdrowego rozsądku i dobrego nastroju, jak mało wciąż wie o sobie, jak i świecie. Postawione już pytania
                  pozostawiam bez odpowiedzi, mając refleksyjną uważność na to, że pojawią się kolejne, równie ważne.</p>          
                
            </div>


    </main>

  )
}