/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export default function Home() {
  return (

    <main className="container bg-slate-50 flex h-max max-w-full flex-col items-center justify-between p-4">

    <Image
      src="/xlcx.webp"
      alt="My Logo"
      className="mb-4"
      width={250}
      height={250}
      priority
    />

    <h2 className="m-4 text-4xl font-bold font-mono text-orange-500">O MNIE</h2>
    <div className="prose prose-base m-4 text-justify font-mono border-dotted border-2 border-orange-500 p-4">

      <p>Cześć! Nazywam się <span className="font-bold text-orange-500">Łukasz Chwalisz</span>. Jestem psychologiem, absolwentem Uniwersytetu im. Adama Mickiewicza w Poznaniu, Wydział Nauk Społecznych, Instytut Psychologii (obecnie Wydział Psychologii i Kogniwistyki UAM) (2006 r.). Pracuję jako psychoterapeuta. Chciałbym zaprosić Państwa do zapoznania się z ofertę mojej pracy w ramach prywatnego gabnetu psychologicznego.
      </p>
      <p> Początki mojej pracy zawodowej to staż w Hostelu Interwencji Kryzysowej w Chybach (koło Poznania), a potem praca w Punkcie Interwencji Kryzysowej w Poznaniu (2007/2008). Kolejne doświadczenia zdobywałem w ośrodkach pomocy osobom potrzebującym, w różnych stadiach zaburzeń psychicznych i niepełnosprawności intelektualnej.</p>

      <p> W latach byłem kuratorem społecznym (2009-2014) dla nieletnich, rodzin dysfunkcyjnych i osób uzależnionych. W 2010 otrzymałem uprawnienia do pełnienia roli mediatora. Od 2011 roku zajmuje się zagadnieniami przemocy w pracy w ramach stowarzyszenia "OSA" (jestem członkiem zarządu, II kadencja). Prowadzę konsultacje indywidualne, dyżury telefoniczne, grupy wsparcia psychologicznego w razie potrzeby. </p>

      <p>Od 2015 roku jestem biegłym sądowym w zakresie psychologii pracy i mobbingu (obecnie druga kadencja). Sporządzam opinie psychologiczne dla sądów, biorę udział w rozprawach.</p>

      <p>W ramach działalności gabinetu psychologicznego prowadzę psychoterapię w nurcie psychodynamicznym psychologii analitycznej Carla Gustawa Junga. Odbyłem szkolenie podstawowe i zaawansowane organizowane przez Polskie Towarzystwo Psychoanalizy Jungowskiej. Jestem w trakcie certyfikacji w International Association for Analytical Psychology – IAAP. Pracuję pod regularną superwizją. </p>

      <p>Od 2022 odbywam szkolenie w ramach terapii systemowej organizowane przez Wielkopolskie Towarzystwo Terapii Systemowej. Dotychczas ukończyłem kurs podstawowy. Uczestniczę w superwizji grupowej w ramach podejścia systemowego.</p>
    </div>

    <h2 className="m-4 text-4xl font-bold font-mono text-orange-500">OFERTA</h2>
    <h2 className="m-4 text-2xl font-bold font-mono text-gray-500 bg-yellow-200">Psychoterapia</h2>

    <div className="container lg:flex lg:space-x-4 m-4 p-4 font-mono text-justify">
      <div className="grid gap-4 mt-auto justify-center m-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">

        <div className="p-4 mb-4">
        <h3 className="text-lg text-center font-bold mb-4">PSYCHOTERAPIA INDYWIDUALNA</h3>
        <div className="">
        <p>Psychoterapia osobowości, analiza treści nieświadomych, mechanizmów obronych, symboliki zawartej w snach, a także funkcjonowania w systemie rodzinnym, analiza genogramu, motywów postępowania wewnętrznęgo i zewnętrznego na różnych poziomach.</p>
        <p className="font-semibold text-orange-500 text-right mt-2">150 zł / 50 minut</p>
        </div>
        </div>

        <div className="p-4 mb-4">
        <h3 className="text-lg text-center font-bold mb-4">PSYCHOTERAPIA INDYWIDUALNA (ONLINE)</h3>
        <p>Psychoterapia indywidualna w formule online może być uzupełnieniem do procesu psychoterapii stacjonalnej albo osobnym procesem terapeutycznym. Ze względu na specyfikę w/w formy kontaktu z pacjentem zalecam okresowe wizyty w formie psychoterapii stacjonarnej.</p>
        <p className="font-semibold text-orange-500 text-right  mt-2">150 zł / 50 minut</p>
        </div>

        <div className="p-4 mb-4">
        <h3 className="text-lg text-center font-bold mb-4">TERAPIA PAR</h3>
        <p>Psychoterapia pary, mediacje rodzinne - poprawa wzajemnego zrozumienia potrzeb, komunikacji w parze, wypracowanie konstruktywnych rozwiązań bądź przepracowanie rozstania, relacje z dziećmi, funcjonowanie rodziny w sytuacji kryzysu małżeńskiego
        </p>
        <p className="font-semibold text-orange-500 text-right mt-2">200 zł / 80 minut</p>
        </div>

      </div>
    </div>

      <h2 className="m-4 text-2xl font-bold font-mono text-gray-500 bg-yellow-200">Warsztaty</h2>


    <div className="container lg:flex lg:space-x-4 m-4 p-4 font-mono text-justify">
    <Carousel>
        <CarouselContent className="">

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 mb-4 space-x-4">
          <h3 className="text-lg text-center font-bold mb-4">Gra z symbolami</h3>
          <p>Zabawa polegająca na tworzeniu i intepretowaniu symbolicznej rzeki.</p>

          </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 mb-4 space-x-4">
          <h3 className="text-lg text-center font-bold mb-4">Zabawa w piaskownicy</h3>
          <p>Warsztaty symboliczne przy użyciu piasku.</p>


          </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 b-4 space-x-4">
          <h3 className="text-lg text-center font-bold mb-4">Sklep z maskami</h3>
          <p>Gra negocjacyjna nastawiona na wyćwiczenie własnej postawy owbec hipotetycznej sytuacji mobbignowej w pracy.
          </p>


          </div>
          </CarouselItem>

        </CarouselContent>
        <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    </div>


    <div className="prose prose-base lg:flex lg:space-x-4 font-mono text-justify">
      <div className="p-4">
      <h3 className="text-lg text-center font-bold mb-4">WARSZTATY</h3>
      <p>Zajęcia grupowe mogą być uzupełnieniem do procesu terapeutycznego albo odpowiadać na konkretne zapotrzebowania uczestników. Warsztat odbywa się przy zgłoszeniu co najmniej 8 osób. W wypadku większej grupy, powyżej 20 osób, jest możliwość rozdzielenia zajęć na kilka spotkań w osobnych terminach. Propozycje warsztatów przedtawiam poniżej.</p>
      <p className="font-semibold text-orange-500 text-right mt-2">100 zł (od uczestnika) / 50 minut</p>
      </div>
    </div>


    <h2 className="m-4 text-4xl font-bold font-mono text-orange-500">BLOG</h2>


    <div className="container lg:flex lg:space-x-4 m-4 p-4 font-mono text-justify">
    <Carousel>
        <CarouselContent className="md:basis-1/2 lg:basis-1/3">

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 mb-4 space-x-4">

          <h3 className="text-lg text-center font-bold mb-4">Pacjent Zero</h3>
          
          <p className="text-gray-500">Rok 2020. Człowiek w masce idący uliczkami miast, trzymający się w odpowiedniej odległości od innych osób, które także mają zakryte twarze. Każdy dzień niesie za sobą informacje o nowych zakażonych, wyleczonych, zmarłych.</p>
          </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 mb-4 space-x-4">
          <h3 className="text-lg text-center font-bold mb-4">Dwa filmy</h3>
          <p className="text-gray-500">Pod koniec 2019 roku miały miejsce premiery dwóch filmów, bardzo ciekawych, w pewien sposób podobnych do siebie i bardzo różnych zarazem. Mam na myśli "Dwóch papieży", wyprodukowany przez Netflix oraz wyświetlany w kinach studyjnych "The Lighthouse".</p>
          </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 mb-4 space-x-4">
          <h3 className="text-lg text-center font-bold mb-4">Nieświadomość indywidualna i zbiorowa - wystąpienie na kongresie "Obrazy nieświadomości – jungowskie metody pracy z psychiką 6.10.2019 r."</h3>
          <p className="text-gray-500">Dzień dobry. W godzinach popołudniowych zaprezentujemy Państwu warsztat „Symbolic constellations” autorstwa czeskiego analityka jungowskiego Martina Skali, który w założeniach teoretycznych odwołuje się bezpośrednio do koncepcji nieświadomości indywidualnej i nieświadomości zbiorowej.</p>
          </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 mb-4 space-x-4">
          <h3 className="text-lg text-center font-bold mb-4">Golem: archetypowy mit czy miejska legenda?</h3>
          <p className="text-gray-500">Pod koniec sesji pacjentka spytała mnie o figurkę, która znajdowała się w moim gabinecie. Figurka przedstawiała słonia, który nosił na sobie zegar.</p>


          </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 mb-4 space-x-4">
          <h3 className="text-lg text-center font-bold mb-4">Sny a nieświadomy sens</h3>
          <p className="text-gray-500">W rozdziale „Podróże” we książce „Wspomnienia, sny, myśli” C.G. Jung przytoczył sen, który miał podczas podróży do Tunisu.</p>


          </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 b-4 space-x-4">
          <h3 className="text-lg text-center font-bold mb-4">Co oznacza Lechaim ?</h3>
          <p className="text-gray-500">„Lechaim !” To tradycyjny toast przed piciem wina czy innego napoju, oznaczający dosłownie „Za życie!”.
          </p>


          </div>
          </CarouselItem>

        </CarouselContent>
        <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>

    <h2 className="m-4 text-4xl font-bold font-mono text-orange-500">KONTAKT</h2>
    <div className="prose prose-base m-4 text-justify font-mono border-dotted border-2 border-orange-500 p-4">
      <p>tel. 665 696 372</p>
      <p>lukasz.chwalisz@gmail.com</p>

    </div>

    </main>
  );
}
