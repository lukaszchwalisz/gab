
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
    title: "Sny a nieświadomy sens? - Blog - Gabinet Łukasz Chwalisz",
    description: "Sny a nieświadomy sens? - Blog - Gabinet Łukasz Chwalisz",
    keywords: "Sny a nieświadomy sens, blog, gabinet, łukasz chwalisz",
  };

export default function Sny() {
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
              
              <BreadcrumbPage>Sny a nieświadomy sens</BreadcrumbPage>
              
              </BreadcrumbItem>

            </BreadcrumbList>

        </Breadcrumb>
        

        <div className="container lg:flex lg:space-x-4 m-4 p-4 text-justify">

          <div className="grid gap-4 mt-auto justify-center m-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        

          <div className="p-4 mb-4 space-x-4">
          
            <Image
              src="/obr/sahara.jpg"
              alt="Gra z symbolami"
              className="rounded-md shadow-md"
              width={500}
              height={100}
              priority
            />
            
           
          </div>
          

          
          <div>
  
                <div className="p-4 mb-4">
                  <h1 className="text-center font-semibold">Sny z nieświadomy sens</h1>
                  <p className="text-center text-sm text-gray-500">07.05.2017 r.</p>
                </div>
          

                <p className="mb-4 text-gray-800 dark:text-white">
                  W rozdziale „Podróże” we książce „Wspomnienia, sny, myśli” C.G. Jung przytoczył sen,
                  który miał podczas podróży do Tunisu.</p>

                <p className="mb-4 text-gray-800 dark:text-white">
                  Jung znalazł się w arabskim mieście, otoczonym murem, do którego można byłoby się dostać przez jedną
                  z czterech bram. Mury otoczone były szeroką fosą, nad  którą przerzucone zostały drewniane mosty.
                  Jung wszedł na jeden z nich, chcąc dostać się do środka. W połowie drogi wyszedł na jego spotkanie 
                  młody Arab, prawdopodobnie książę, który stanął mu naprzeciw, a następnie chciał zrzucić go z mostu.
                  Jung powiedział sobie: „Tego już za wiele!”, chwycił napastnika za głowę, którą zanurzył w wodzie, 
                  starając się go obezwładnić.  Po chwili zmieniła się sceneria. Oboje znaleźli się w białej
                  zamkniętej komnacie. Jung znalazł na podłodze otwartą księgę, z pismem niezwykłej urody na
                  mlecznobiałym pergaminie. Było to prawdopodobnie pismo ujgurskie. Jung przypomniał sobie, 
                  że kiedyś studiował teksty z tego rejonu. Miał poczucie, że jest to jego księga, choć nie
                  potrafił zrozumieć ani słowa. Zwrócił się do księcia, który siedział nieopodal na podłodze,
                  że skoro został pokonany, to musi przeczytać tą księgę. Młody arab nie chciał tego robić, 
                  natomiast Jung podszedł do niego z ojcowską dobrocią i w końcu zmusił księcia do wykonania 
                  polecenia.</p>

                <p className="mb-4 text-gray-800 dark:text-white">
                  W dalszej części rozdziału Jung stara się zinterpretować swój sen. Moją uwagę zwróciły dwa cytaty, 
                  które przytaczam poniżej.</p>

                <p className="mb-4 italic text-gray-800 dark:text-white">
                  „Sny ukazują, że jest w nas coś, co nie tylko biernie poddaje się nieświadomemu cieniowi,
                  lecz co wręcz rzuca się na niego, by się z nim utożsamić (…) Jest to przypomnienie o jeszcze
                  istniejącej, innej możliwości życia – możliwości nieprzytłumionej przez cywilizację. 
                  Gdybyśmy przeżyli to wspomnienie w naiwny sposób, byłoby to równoznaczne z regresją do epoki
                  barbarzyństwa”.</p>

                <p className="mb-4 italic text-gray-800 dark:text-white">
                  (...) „W żywej strukturze psychicznej nic nie dzieje się w sposób czysto mechaniczny, 
                  wszystko wpisane jest w ekonomię całości: jest celowe i ma sens. Ponieważ jednak 
                  świadomość nigdy nie ogarnia całości, z reguły nie potrafi zrozumieć owego sensu”</p>
            
                <h3 className="mb-4 text-gray-800 dark:text-white">Komentarz.</h3>

                <p className="mb-4 text-gray-800 dark:text-white">
                  Nasze sny mają w sobie ukrytą treść, które niesie w sobie znaczenie na Ego.
                  Dla świadomości przekaz wyłaniający się ze snu nie jest oczywisty.
                  Wiele w nim niejasności i dziwacznych powiązań elementów, które na jawie pojawiły się 
                  w różnych kontekstach, miejscu i czasie. Odczytanie znaczenia snu dostępne jest dopiero po
                  poznaniu języku symboli, jakimi jest napisany, wyśniony. Wtedy niepowiązane ze sobą
                  elementy pojawiające się we śnie, nabiorą sensu i możliwości interpretacji.</p>

                <p className="mb-4 text-gray-800 dark:text-white">
                  Atak młodego Araba, Jung zinterpretował jako atak kultury północno – afrykańskiej na
                  europejskość Junga – atak zbiorowej Jaźni, pełnej niekontrolowanych instynktów na
                  europejską sztampowość i nienaturalne zachowanie, wypracowane przez pozbawioną instynktów kulturę.
                  Jung poczuł, że czuje się obco, a właściwie to co uważał za normalne i naturalne, wcale nie jest
                  tak odbierane w innej kulturze, w której się znalazł. Doświadczenie dało Jungowi przekonanie, 
                  że na świecie nie istnieje jeden model zachowania, akceptowany przez wszystkich. Świat jest
                  pełny różnych modeli, wzorców i kultur. Świat nie daje się sklasyfikować w jednostronny sposób.</p>

                <p className="mb-4 text-gray-800 dark:text-white">
                  Osoba, które chce poznać społeczności spoza swojego małego świata, powinna być otwarta i nie
                  powinna kierować się uprzedzeniami, powstałymi w braku wiedzy i woli wyjścia poza własne
                  postrzeganie rzeczywistości.</p>

                <p className="mb-4 text-gray-800 dark:text-white">
                  To co dociera do świadomości, nie zawiera w sobie całkowitego sensu i zrozumienia. 
                  Dociera do niej tylko tyle, ile człowiek jest w stanie przyjąć, w zależności od tego
                  jaką ma bazę wiedzy i doświadczeń. To one są pryzmatem przez który dochodzą do świadomości 
                  kolejne treści. Pełne zrozumienie być może nie jest nawet możliwe. Natomiast można zmienić 
                  swoją postawę, być otwartym i przygotowanym na brak jednoznaczności, wzbudzić w sobie wolę 
                  poznania i doświadczania, aby rozszerzyć swoje umiejętności przyjmowania świata w jego niezmąconej
                  uprzedzeniami formie.</p>
             
              </div>

              </div>

            </div>

      </main>

    )
}