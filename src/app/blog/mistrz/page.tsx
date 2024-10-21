
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
    title: "Mistrz odzywa się tylko raz - Blog - Gabinet Łukasz Chwalisz",
    description: "Mistrz odzywa się tylko raz - Blog - Gabinet Łukasz Chwalisz",
    keywords: "Mistrz odzywa się tylko raz, blog, gabinet, łukasz chwalisz",
  };

export default function Mistrz() {
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
              
              <BreadcrumbPage>Mistrz odzywa się tylko raz</BreadcrumbPage>
              
              </BreadcrumbItem>

            </BreadcrumbList>

        </Breadcrumb>
        
          
            <Image
              src="/obr/sekretzlotegokwiatu.jpg"
              alt="Mistrz odzywa się tylko raz."
              className="rounded-md shadow-md m-6"
              width={600}
              height={1}
              priority
            />
           
           <div className="prose prose-base text-justify m-2">
  
                <div className="p-4 mb-4">
                  <h1 className="text-center font-semibold dark:text-white">Mistrz odzywa się tylko raz</h1>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300">wpis z 8.06.2017 r.</p>
                </div>
          

                <p className="mb-4 text-gray-800 dark:text-white">Pod koniec sesji pacjentka spytała mnie o figurkę, która znajdowała się w moim gabinecie. Figurka przedstawiała słonia, który nosił na sobie zegar. Powiedziałem, że zakupiłem ją dawno temu w pewnym mieście. Pacjentka słysząc moją odpowiedź, wydała się zaskoczona.</p>

                <p className="mb-4 text-gray-800 dark:text-white">„Czy Pan to robi specjalnie ?” – spytała.</p>

                <p className="mb-4 text-gray-800 dark:text-white">Okazało się, że fantazjowała o mieście, którego nazwę wymieniłem.</p>

                <p className="mb-4 text-gray-800 dark:text-white">„Czy to jest przypadek ?” – dopytywała.</p>

                <p className="mb-4 text-gray-800 dark:text-white">„Tak, oczywiście. Ale można go interpretować.”</p>

                <p className="mb-4 text-gray-800 dark:text-white">Niecodzienna sytuacja z pacjentką dała mi pretekst, aby zastanowić się zjawiskiem synchroniczności. Mowa tu o sytuacjach, kiedy zdaje się nam, że pewne zjawiska, wydarzenia, pojawiają się równocześnie, i choć nie są ze sobą powiązane bezpośrednio, odkrywamy w nich wspólne symboliczne znaczenie.</p>

                <p className="mb-4 text-gray-800 dark:text-white">W 1928 r. Carl Gustaw Jung zafascynował się „Księgą przemian”, taoistycznym tekstem, w którym zawarto interpretację wyroczni „I-Ching”. Odpowiedzi wyroczni były niejasne, tajemnicze, dające do myślenia. Richard Wilhelm pokazał Jungowi techniczne uwagi w jaki sposób należy wróżyć przy użyciu księgi. Psychoanalityk chcąc sprawdzić działanie wyroczni zadał pytanie na temat towarzystwa psychologicznego, na które znał odpowiedź, chciał tylko sprawdzić czy wyrocznia działa. Uzyskana odpowiedź wydała się Jungowi wyjątkowo trafna. Następnie C.G. Jung zastanawiał się na tym, iż w sumie mógł zadawać pytania wielokrotnie, na ten sam temat, a odpowiedź na każdym razem byłaby inna.</p>
                
                <p className="italic mb-4 text-gray-800 dark:text-white">„Zdaję sobie sprawę, że na moje pytanie można by udzielić dowolnej liczby odpowiedzi, nie mogę też utrzymywać, że inna odpowiedź nie byłaby dla mnie równie znacząca. Jednakże ta, którą otrzymałem, była pierwszą i jedyną (…) Zadanie po raz drugi tego samego pytania byłoby nietaktem, a zatem nie uczyniłem tego. Mistrz odzywa się tylko raz ! ”.</p>

                <p className="mb-4 text-gray-800 dark:text-white">Cytat pochodzi z komentarza do „Sekretu Złotego Kwiatu”. Wydaje mi się bardzo rozważny, realistycznie podchodzący do zjawisk niesamowitych. Zakończony jest refleksją, w której Jung wstydzi się swojego naukowego niemalże podejścia. Cytat daje, chcąc nie chcąc, wskazówkę jak traktować owe dziwne zjawiska, kiedy pozornie niepowiązane ze sobą rzeczy, układają się w jedną całość.</p>

                <p className="mb-4 text-gray-800 dark:text-white">Synchroniczne powiązanie następuje w naszej głowie, w naszym postrzeganiu rzeczywistości. Czasem może nam się wydaje, że umysł płata nam figla i odsuwa racjonalne myślenie do lamusa, zastępując je odbiorem rzeczywistości podobnym do tego, jakie towarzyszyło nam w dzieciństwie. Wtedy świat fantazji górował nad światem realnym, niedostępnym, chroniącym swoje tajemnicze. Tworzyły się zaklęte wizje, w śnie czy na jawie. Definiowały nam świat jako niesamowite miejsce, w którym już się znaleźliśmy, ale realnie zaistniejemy w nim, kiedy przestaniemy być dziećmi i wkroczymy w świat dorosłych.</p>

                <p className="mb-4 text-gray-800 dark:text-white">Stając przed takimi zjawiskami, możemy mieć różne odczucia. Od ekstazy po lęk. Niektóre powiązania mogą nas śmieszyć. To co nas fascynuje, równie dobrze nie zawsze może się nam wydawać dobre. Być może wcale nie chcemy tego, bronimy się przed tym. Ważne, aby mieć na to otwartą postawę, zbierać wrażenia w sobie, zostawić swojemu biegowi. Być uważnym i cierpliwym. A jeszcze otrzymamy odpowiedź. Z wyroczni mieszczącej się w nieświadomości. W postaci myśli, sny, fantazji. Zobaczymy, w jaki sposób „mistrz” przemówi.</p>
              
             
              </div>

      </main>

    )
}