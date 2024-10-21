
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
    title: "Nieświadomość indywidualna i zbiorowa - Blog - Gabinet Łukasz Chwalisz",
    description: "Nieświadomość indywidualna i zbiorowa - Blog - Gabinet Łukasz Chwalisz",
    keywords: "Nieświadomość indywidualna i zbiorowa, blog, gabinet, łukasz chwalisz",
  };

export default function Nieswiadomosc() {
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
              
              <BreadcrumbPage>Nieświadomość indywidualna i zbiorowa</BreadcrumbPage>
              
              </BreadcrumbItem>

            </BreadcrumbList>

        </Breadcrumb>

            <Image
              src="/obr/senschody.jpg"
              alt="Nieświadomość indywidualna i zbiorowa."
              className="rounded-md shadow-md m-6"
              width={600}
              height={1}
              priority
            />
           
           <div className="prose prose-base text-justify m-2">
  
                <div className="p-4 mb-4">
                  <h1 className="text-center font-semibold">Nieświadomość indywidualna i zbiorowa</h1>
                  <p className="text-center text-sm text-gray-500">wpis z 17.11.2019 r.</p>
                </div>
          
                  <p className="mb-4 text-gray-800 dark:text-white"> Dzień dobry. W godzinach popołudniowych zaprezentujemy Państwu warsztat „Symbolic
                  constellations” autorstwa czeskiego analityka jungowskiego Martina Skali, który w założeniach
                  teoretycznych odwołuje się bezpośrednio do koncepcji nieświadomości indywidualnej i
                  nieświadomości zbiorowej. Chciałbym pokrótce przedstawić te założenia.
                  Ale najpierw trochę historii. Na początku XX wieku Carl Gustaw Jung zainteresował się
                  koncepcją nieświadomości i innym niż dotychczas podejściem do pacjentów, po lekturze pracy
                  Sigmunda Freuda „Objaśnianie marzeń sennych”. Jung pracował wówczas w Klinice
                  Psychiatrycznej Uniwersytetu Zuryskiego w Burgholzli. Jak wspomniał w książce „Wspomnienia,
                  sny, myśli”: </p>  
                  <p className="italic mb-4 text-gray-800 dark:text-white"> 
                  „Wychodząc z dominującego wówczas stanowiska klinicznego, lekarze nie zajmowali się
                  osobą chorą psychicznie jako człowiekiem, indywidualnością, lecz po prostu pacjentem nr X, do
                  którego dołączona była długa lista diagnoz i objawów.”
                  Podejście Freuda do pacjenta stało się dla Junga inspirujące dla własnej pracy klinicznej.
                  „Jego koncepcje wskazały mi kierunek dalszych poszukiwań, wytyczyły drogę do
                  zrozumienia poszczególnych przypadków. Freud otworzył psychiatrię na psychologię, choć sam nie
                  był psychiatrą, lecz neurologiem.”</p>  

                  <p className="mb-4 text-gray-800 dark:text-white"> 
                  Carl Gustaw Jung zaobserwował mechanizm wyparcia opisywany przez Freuda także u
                  swoich pacjentów. Jung podczas sesji prowadził eksperymenty skojarzeniowe i zauważył, że
                  pacjenci na różne bodźce reagują albo z opóźnieniem albo w ogóle nie reagują. Dalsza praca
                  kliniczna wykazywała, że bodziec dotykał wewnętrznego konfliktu albo psychicznego cierpienia.
                  Z czasem Jung patrzył na poglądy Freuda coraz bardziej krytycznie, choć nadal traktował
                  go jako swój osobisty autorytet.</p>
                  <p className="italic mb-4 text-gray-800 dark:text-white">
                  „Problematyczny wydawał mi się stosunek Freuda do ducha. Zawsze, gdy na światło
                  dzienne wydobył się obraz duchowości – czy to u człowieka, czy w dziele sztuki – Freud stawał się
                  podejrzliwy, przypisując decydującą rolę „wypartej seksualności”.
                  W tym samym czasie Carl Gustaw Jung miał sny, które okazały się przełomowe dla jego
                  własnego psychoanalitycznego myślenia: „Szczególnie jeden z nich był dla mnie ważny, gdyż
                  naprowadził mnie po pojęcie nieświadomości zbiorowej; dlatego stanowił coś w rodzaju uwertury
                  do mojej książki Wandlungen und Symbole der Libido.”
                  </p>
                  <p className="mb-4 text-gray-800 dark:text-white"> 
                  [Jung znajduje się na piętrze w nieznanym piętrowym domu. Obserwuje wokół się stare
                  meble w stylu rokokowym, stare cenne obrazy. Jest zachwycony widokiem i postanawia zejść na
                  parter. Ta część domu pochodzi w ocenie Junga z XV i XVI wieku. Wyposażenie jest
                  średniowieczne pogrążone w lekkim cieniu. Jung postanawia zwiedzić cały dom. Dociera do
                  ciężkich drzwi, które otwiera – przed nim pojawiają się kamienne schody prowadzące do piwnicy.
                  Jung schodzi po schodach i dociera do pięknie sklepionego pomieszczenia z czasów rzymskich.
                  Ogląda dokładnie ściany i zaprawę murarską. Na jednej z płyt podłogowych odkrywa pierścień –
                  kiedy pociąga go, płyta podnosi się i odkrywają się kolejne schody. Schodzi na dół.
                  Dociera do niszy skalnej. Odnajduje kości, szczątki naczyń, pozostałości kultury pierwotnej,
                  wszystko pod grubą warstwą kurzu. Kiedy grzebie w kurzu odkrywa dwie stare sypiące się czaszki
                  ludzkie. Budzi się.]
                  </p>
                  <p className="mb-4 text-gray-800 dark:text-white">
                  Freuda, który także analizował ten sen, zainteresowały przede wszystkim czaszki i
                  zinterpretował to jako wyparte życzenie Junga, w sensie „życzenie śmierci”. Jung odczuwał już
                  wtedy silne opory, aby pójść tym tokiem rozumowania. Sen skłonił Junga do ponownego
                  zainteresowania się archeologią, kulturami pierwotnymi, mitami, gnostycyzmem i do pójścia
                  własną drogą.
                  </p>
                  <p className="mb-4 text-gray-800 dark:text-white"> 
                  Wracając do tematu prezentacji, nieświadomość indywidualna najogólniej mówiąc zawiera
                  w sobie wyparte myśli, wspomnienia, osobiste kompleksy, traumatyczne doświadczenia, treści z
                  cienia indywidualnego. Elementy odnoszą się do doświadczenia osobistego jednostki, związane sątakże z wyróżnionymi przez Junga w ”Typach psychologicznych” funkcjami umysłu, szczególnie
                  jeśli chodzi o czucie, percepcję i intuicję (przy założeniu, że granice pomiędzy świadomością a
                  nieświadomością nie są ostre).
                  </p> 
                  <p className="mb-4 text-gray-800 dark:text-white"> 
                  Nieświadomości zbiorowa znajduje swoje odniesienie z psychice w postaci symbolicznej,
                  której źródłem znaczeniowym są archetypy – czyli treści , które powstały poprzez zbiorowe
                  doświadczenie społeczeństw, odnoszą się do postaw, archetypowych postaci [Wielka Matka, Stary
                  Mędrzec, Anima, Animus, Puella, Trikster itd.], uniwersalnych zachowań dla wszystkich kultur.
                  Nieświadomość zbiorowa ma charakter poza-osobowy, stanowi nieświadome kolektywne
                  połączenie pomiędzy kulturami, społeczeństwami, grupami ludzi.
                  Warto wspomnieć, że Jung nie traktował archetypów jako elementów martwych, raz na
                  zawsze ukrytych i zapomnianych w Psyche. Dla Junga archetypy stanowią nieustanne źródło
                  energii symbolicznej, cały czas pozostają żywe i mogą oddziaływać na psychikę i zachowanie, a
                  których odniesienia można odnaleźć studiując proces rozwoju ludzkości, stare baśnie, opowiadania
                  i mity.
                  </p>
                  <p className="mb-4 text-gray-800 dark:text-white">
                  Ten sposób spostrzegania archetypów naprowadził Junga inny sen o śpiących posągach.
                  [Jung znalazł się w pomieszczeniu przypominającym grobowiec. Odnalazł w nim leżące
                  obok siebie sarkofagi żołnierzy. Zaciekawiony podchodził do każdego z nich. Na podstawie
                  pobieżnej obserwacji uświadomił sobie, że żołnierze pochodzili z różnych epok historycznych. Gdy
                  podchodził do pojedynczego sarkofagu, miał wrażenie, że rzeźba zmarłego, doskonale
                  odwzorowana przez rzeźbiarza porusza się. Ostatni sarkofag przedstawiał żołnierza z czasów
                  starożytnych. On jako jedyny nie chciał się poruszyć. Jung stał przy nim i czekał, aż w końcu gdy
                  już chciał zrezygnować i zauważył, że i ten żołnierz poruszył palcem.]
                  Analizując swój sen szwajcarski psychiatra uświadomił sobie, że w psychice znajdują się
                  elementy zawierają w sobie historię świata i ta historia wiecznie pozostaje żywa, choć być może
                  zapomniana, czeka na osobę (pacjenta, analityka), która do niej się zbliży i ujrzy ją żywą.
                  Przykład pracy i rozwoju psychologii analitycznej Carla Gustawa Junga wskazuje jak wielką
                  rolę odkrywał w niej w kontakt z nieświadomością autora, z której czerpał siłę, inspirował się nią i
                  starał się zainspirować nią swoich pacjentów. Myśli jungowska wychodzi więc od nieświadomości
                  indywidualnej i nie przekreślając jej ważności, kieruje swoją uwagę w stronę nieświadomości
                  zbiorowej, pełnej ukrytych symboli i starożytnej wiedzy, zachęcając nas do nawiązywania z nią
                  transcendentnego kontaktu i korzystania ze zdobyczy ludzkości.
                  </p>
                  <p className="mb-4 text-gray-800 dark:text-white"> 
                  Podczas warsztatu „Symbolic constellations”, spróbujemy się zmierzyć z naszym
                  indywidualnym nieświadomym doświadczeniem oraz obserwując proces grupowy spróbować
                  odnaleźć odniesienia do nieświadomości wykraczającej poza doświadczenie jednostkowe. Skupimy
                  się nad wydobywaniem kolektywnych symboli, które będą stanowiły nieświadome powiązanie w
                  procesie grupowym.
                  </p>
                  <p className="mb-4 text-gray-800 dark:text-white"> 
                  Kluczowym zagadnieniem będzie dla nas symbolika rzeki – jako źródła energii, życia,
                  osobistej drogi; woda symbolizuje nieświadomość, głębię, nieskrępowanie, poszukiwanie ujścia dla
                  energii życiowej a także odnajdywania kolejnych brzegów; bezustanną wolę kontaktu z materią,
                  interakcję z innymi; dostosowanie się do wymogów otoczenia, bądź uderzania z zabójczą siłą.
                  Na zajęciach zachęcimy uczestników do powołania do życia osobistego golema – postaci,
                  wspomnianej w oryginalnej wersji Tory, która będzie podróżowała poprzez kolektywną rzekę
                  doświadczenia zbiorowego. Golem sam w sobie jest martwym zlepkiem gliny, natomiast ożywiony,
                  symbolizuje archetypową siłę, która może być pozornie martwa, ukryta głęboko z odmętach
                  nieświadomości. Natomiast, kiedy dotrze się do glinianej masy znajdującej się pod stertą
                  symbolicznego kurzu i spróbuje ją ożywić, może wtedy pokazać swoje prawdziwe nieznane
                  oblicze.
                  </p>
                                  
              </div>

      </main>

    )
}