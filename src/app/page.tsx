/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function Home() {
  return (

    <main className="container flex h-max max-w-full flex-col items-center justify-between p-4">

    <Image
      src="/xlcx.webp"
      alt="My Logo"
      className="mb-4"
      width={250}
      height={250}
      priority
    />

    {/* <h1 className="m-4 font-bold text-lime-500">O MNIE</h1> */}
    <div className="prose prose-base text-justify m-2">

      <p  className="text-gray-500 m-2 p-4 sm:p-0 md:p-0 lg:p-0 2xl:p-0">Cześć! Nazywam się <span className="font-bold text-orange-500">Łukasz Chwalisz</span>. Jestem psychologiem, absolwentem Uniwersytetu im. Adama Mickiewicza w Poznaniu, Wydział Nauk Społecznych, Instytut Psychologii (obecnie Wydział Psychologii i Kogniwistyki UAM) (2006 r.). Pracuję jako psychoterapeuta. Chciałbym zaprosić Państwa do zapoznania się z ofertę mojej pracy w ramach prywatnego gabinetu psychologicznego.
      </p>
      {/* <p> Początki mojej pracy zawodowej to staż w Hostelu Interwencji Kryzysowej w Chybach (koło Poznania), a potem praca w Punkcie Interwencji Kryzysowej w Poznaniu (2007/2008). Kolejne doświadczenia zdobywałem w ośrodkach pomocy osobom potrzebującym, w różnych stadiach zaburzeń psychicznych i niepełnosprawności intelektualnej.</p>

      <p> W latach byłem kuratorem społecznym (2009-2014) dla nieletnich, rodzin dysfunkcyjnych i osób uzależnionych. W 2010 otrzymałem uprawnienia do pełnienia roli mediatora. Od 2011 roku zajmuje się zagadnieniami przemocy w pracy w ramach stowarzyszenia "OSA" (jestem członkiem zarządu, II kadencja). Prowadzę konsultacje indywidualne, dyżury telefoniczne, grupy wsparcia psychologicznego w razie potrzeby. </p>

      <p>Od 2015 roku jestem biegłym sądowym w zakresie psychologii pracy i mobbingu (obecnie druga kadencja). Sporządzam opinie psychologiczne dla sądów, biorę udział w rozprawach.</p>

      <p>W ramach działalności gabinetu psychologicznego prowadzę psychoterapię w nurcie psychodynamicznym psychologii analitycznej Carla Gustawa Junga. Odbyłem szkolenie podstawowe i zaawansowane organizowane przez Polskie Towarzystwo Psychoanalizy Jungowskiej. Jestem w trakcie certyfikacji w International Association for Analytical Psychology – IAAP. Pracuję pod regularną superwizją. </p>

      <p>Od 2022 odbywam szkolenie w ramach terapii systemowej organizowane przez Wielkopolskie Towarzystwo Terapii Systemowej. Dotychczas ukończyłem kurs podstawowy. Uczestniczę w superwizji grupowej w ramach podejścia systemowego.</p> */}
    
    <Link href="/blog" className="no-underline font-bold text-orange-500 m-2 p-4 sm:p-0 md:p-0 lg:p-0 2xl:p-0">Bio</Link>
    </div>

    <div className="container p-4 mb-4 rounded-md shadow-md">
    
    <div className="pt-20 pb-20 text-center text-6xl">
    <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">OFERTA</span>
    </div>
    
    <div className="lg:flex lg:space-x-4 m-4 p-4 text-justify">
      <div className="grid gap-4 mt-auto justify-center m-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">

      <div className="p-2 mb-2 space-x-2">
              <Image
                src="/obr/istock0.jpg"
                alt="My Logo"
                className="rounded-md shadow-md"
                width={1000}
                height={500}
                priority
              />

          </div>

          <div className="p-1 mb-2 space-x-2">
            
            <Card className="shadow-none border-0">
   
              <CardHeader>
              <CardTitle>Psychoterapia indywidualna</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-gray-500">
              Psychoterapia osobowości, analiza treści nieświadomych, mechanizmów obronych, symboliki zawartej w snach, a także funkcjonowania w systemie rodzinnym, analiza genogramu, motywów postępowania wewnętrznęgo i zewnętrznego na różnych poziomach.
                </p>
              </CardContent>

              <CardFooter><p className="font-semibold text-orange-500">150 zł / 50 minut</p></CardFooter>

            </Card>
            
          </div>

          

          <div className="p-2 mb-2 space-x-2">
           
            <Card className="shadow-none border-0">

              <CardHeader>
              <CardTitle>Psychoterapia indywidualna (online)</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-gray-500">
              Psychoterapia indywidualna w formule online może być uzupełnieniem do procesu psychoterapii stacjonalnej albo osobnym procesem terapeutycznym. Ze względu na specyfikę w/w formy kontaktu z pacjentem zalecam okresowe wizyty w formie psychoterapii stacjonarnej.
                </p>
              </CardContent>
              

              <CardFooter><p className="font-semibold text-orange-500">150 zł / 50 minut</p></CardFooter>
              
            </Card>
           
          </div>

          <div className="p-2 mb-2 space-x-2">
              <Image
                src="/obr/istock3.jpg"
                alt="My Logo"
                className="rounded-md shadow-md"
                width={1000}
                height={500}
                priority
              />

          </div>
          
          <div className="p-2 mb-2 space-x-2">
              <Image
                src="/obr/kristina-litvjak-unsplash.jpg"
                alt="My Logo"
                className="rounded-md shadow-md"
                width={1000}
                height={500}
                priority
              />

          </div>

          <div className="p-2 mb-2 space-x-2">
            
            <Card className="shadow-none border-0">
              
              <CardHeader>
              <CardTitle>Terapia par</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-gray-500">
              Psychoterapia pary, mediacje rodzinne - poprawa wzajemnego zrozumienia potrzeb, komunikacji w parze, wypracowanie konstruktywnych rozwiązań bądź przepracowanie rozstania, relacje z dziećmi, funcjonowanie rodziny w sytuacji kryzysu małżeńskiego.
                </p>
              </CardContent>
              
        
              <CardFooter><p className="font-semibold text-orange-500">200 zł / 80 minut</p></CardFooter>
             
            </Card>
            
          </div>

          

          <div className="p-2 mb-2 space-x-2">
            
            <Card className="shadow-none border-0">
              
              <CardHeader>
              <CardTitle>Warsztaty</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-gray-500">
              Zajęcia grupowe mogą być uzupełnieniem do procesu terapeutycznego albo odpowiadać na konkretne zapotrzebowania uczestników. Warsztat odbywa się przy zgłoszeniu co najmniej 8 osób. W wypadku większej grupy, powyżej 20 osób, jest możliwość rozdzielenia zajęć na kilka spotkań w osobnych terminach. Propozycje warsztatów przedtawiam poniżej.
                </p>
              </CardContent>
              
              <CardFooter>
                <Link href="/warsztaty" className="no-underline">
                <Button variant="outline" className="text-md">
                <Plus className="mr-2 h-4 w-4" /> Sprawdź propozycje warsztatów
                </Button>
                </Link>
              </CardFooter>

              <CardFooter><p className="font-semibold text-orange-500">200 zł / 80 minut</p></CardFooter>
             
            </Card>
            
          </div>

          <div className="p-2 mb-2 space-x-2">
              <Image
                src="/obr/istock4.jpg"
                alt="My Logo"
                className="rounded-md shadow-md"
                width={1000}
                height={500}
                priority
              />

          </div>

      </div>
      
      </div>

      

    </div>

    <div className="container p-4 mb-4 rounded-md shadow-md">

        <Link href="/blog" className="no-underline">
        <div className="pt-20 pb-20 text-center text-6xl">
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Blog</span>
        </div>
        </Link>

    <div className="text-justify">

    <Carousel>
    <CarouselContent className="p-5">
        {[
             {
              title: "Pacjent Zero",
              date: "26.04.2020 r.",
              content: "Rok 2020. Człowiek w masce idący uliczkami miast, trzymający się w odpowiedniej odległości od innych osób, które także mają zakryte twarze. Każdy dzień niesie za sobą informacje o nowych zakażonych, wyleczonych, zmarłych.",
              slug: "pacjentzero",
            },
            {
              title: "Dwa filmy",
              date: "10.01.2020 r.",
              content: "Pod koniec 2019 roku miały miejsce premiery dwóch filmów, bardzo ciekawych, w pewien sposób podobnych do siebie i bardzo różnych zarazem. Mam na myśli 'Dwóch papieży', wyprodukowany przez Netflix oraz wyświetlany w kinach studyjnych 'The Lighthouse'.",
              slug: "dwafilmy",
            },
            {
              title: "Nieświadomość indywidualna i zbiorowa",
              date: "17.11.2019 r.",
              content: "Wystąpienie na kongresie 'Obrazy nieświadomości – jungowskie metody pracy z psychiką 6.10.2019 r.",
              slug: "nieswiadomosc",
            },
            {
              title: "Golem: archetypowy mit czy miejska legenda?",
              date: "10.06.2018 r.",
              content: "„Polscy Żydzi po odmówieniu pewnych modlitw i odbyciu postów robią ludzką postać z gliny albo mułu, a gdy wypowiedzą cudowne szemhamforas [imię Boga], to człowiek ów musi ożyć. Nazywają go golem i wykorzystują jako posługacza do wszelkich prac domowych, tyle że nie wolno mu wychodzić z domu.",
              slug: "golem",
            },
            {
              title: "Podążanie",
              date: "18.01.2018 r.",
              content: "Podążanie za pacjentem. Za jego/jej myślą, uczuciem, punktem widzenia.",
              slug: "podazanie",
            },
            {
              title: "Mistrz odzywa się tylko raz",
              date: "08.06.2017 r.",
              content: "Pod koniec sesji pacjentka spytała mnie o figurkę, która znajdowała się w moim gabinecie. Figurka przedstawiała słonia, który nosił na sobie zegar. Powiedziałem, że zakupiłem ją dawno temu w pewnym mieście. Pacjentka słysząc moją odpowiedź, wydała się zaskoczona. 'Czy Pan to robi specjalnie ?' – spytała.",
              slug: "mistrz",
            },
            {
              title: "Sny a nieświadomy sen",
              date: "07.05.2017 r.",
              content: "W rozdziale 'Podróże' we książce 'Wspomnienia, sny, myśli' C.G. Jung przytoczył sen, który miał podczas podróży do Tunisu.",
              slug: "sny",
            },  
            {
              title: "Co oznacza Lechaim ?",
              date: "16.03.2017 r.",
              content: "‘Lechaim !' To tradycyjny toast przed piciem wina czy innego napoju, oznaczający dosłownie 'Za życie!'.",
              slug: "lechaim",
            },
        ].map(({ slug, title, date, content }, index) => (
            <CarouselItem key={index} className="basis 1/1 sm:basis-1/2 md:basis-1/2 lg:basis-1/3">

                <div className="hover:underline decoration-from-font dark:hover:decoration-gray-500 dark:hover:bg-gray-800 border-0 p-4">
                <Link href={`/blog/${slug}`}>
                    <div>
                        <h1 className="font-semibold">{title}</h1>
                        <p className="text-sm text-gray-500">{date}</p>
                    </div>
                    <div className="mt-5">
                        <p className="text-gray-500">{content}</p>
                    </div>
                    </Link>
                </div>
              
            </CarouselItem>
                  ))}

            </CarouselContent>
          </Carousel>

    
    </div>

    </div>


    <div className="container p-4 mb-4 rounded-md shadow-md">
    <div className="pt-20 pb-20 text-center text-6xl">
    <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Kontakt</span>
    </div>


    <div className="m-4 text-center p-4">
      <p>tel. 665 696 372</p>
      <p>lukasz.chwalisz@gmail.com</p>

    </div>

    </div>

   

    </main>
  );
}
