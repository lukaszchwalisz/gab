
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
    title: "Gra z symbolami - Warsztaty - Gabinet Łukasz Chwalisz",
    description: "Oferta warsztatów w ramach działalności gabinetu psychologicznego",
  };

export default function SklepZMaskami() {
    return (
  
      <main className="container flex h-max max-w-full flex-col items-center justify-between p-4">
        
        <div className="p-20 mb-8 text-center text-6xl">
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Warsztaty</span>
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
            <Link href="/warsztaty">
             <BreadcrumbPage>Warsztaty</BreadcrumbPage>
            </Link>
            </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
            
             <BreadcrumbPage>Sklep z maskami</BreadcrumbPage>
            
            </BreadcrumbItem>




            </BreadcrumbList>

        </Breadcrumb>
        

        <div className="container lg:flex lg:space-x-4 m-4 p-4 text-justify">

          <div className="grid gap-4 mt-auto justify-center m-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        

          <div className="p-4 mb-4 space-x-4">
          
            <Image
              src="/obr/mask.png"
              alt="Gra z symbolami"
              className="rounded-md shadow-md dark:border-2"
              width={500}
              height={100}
              priority
            />
            
           
          </div>
          

          
          <div className="">
  
            <h1 className="p-2 mb-4 text-3xl font-bold text-center text-gray-800 dark:text-white">Sklep z maskami</h1>
            <p className="mb-4 text-gray-800 dark:text-white">
            Gra negocjacyjna rozgrywająca się w przykładowym sklepie z maskami. Zgodnie ze scenariuszem, pomimo początkowego wzrostu i rozwoju,
            sklep zostaje przejęty przez firmą zajmującą się organizacją koncertów. W wyniku czego dochodzi do konfliktu pomiędzy dotychczasową załogą,
            a nowym kierownictwem.
           </p>
            
           <p className="mb-4 text-gray-800 dark:text-white">
           Każda ze stron konfliktu otrzymuje pewien zestaw informacji nie znany drugiej stronie, który może wykorzystać podczas negocjacji.
           Jednak jaką zaplanuje strategię i jak rozegra potyczkę negocjacyjnej zależy od pomysłowości członków grupy, zagrania oraz siy liderów,
           którzy będą przewodzili negocjacjom i mieli decydujący głos odnośnie przyjętej strategii.
          </p>
          
          <p className="mb-4 text-gray-800 dark:text-white">
          Prowadzący w pewnym monencie ogłasza koniec negocjacji. Teraz grupa wspólnie przystępuje do umówienie tego co zaszło podczas zadania - 
          emocje, odczucia, dobrane argumenty, mentalizacja punktu widzenia drugiej strony itd. Bezpośrednim celem zadania nie jest wygrana w negocjacjach,
          ale tylko możliwość zrozumienia procesów dziejących się podczas sytuacji konfliktowej oraz przygotowanie do zmierzenia się z realnymi zdarzeniami
          w firmie na płaszczyźnie relacji międzyludzkich.
          </p>

          <h2 className="mb-2 text-lg font-bold  text-gray-800 dark:text-white">Dla kogo:</h2>
          <ul className="p-3 mb-4 space-y-2 list-disc text-md text-gray-800 dark:text-white">
            <li>firmy, korporacje planujące wprowadzić politykę poprawy relacji na lini zarząd/pracownicy - gra powinna udrożnić kanały komunikacyjne, dać realne wyobrażenie rozwoju i zarządzania konfliktem</li>
            <li>jednostki działalności gospodarczej, w których zaistniał realny spór - gra pomoże w mentalizacji punktów widzenia stron konfliktu</li>
            <li>osoby mobbingowane w pracy, które mogą zarówno utożsamić się z jedną ze stron, jak i próbować zrozumieć drugą stronę - zarząd, a przez to lepiej odnaleźć się w swojej sytuacji w pracy</li> 
            <li>kandydaci na negocjatorów i mediatorów, którzy chcieliby poćwiczyć na przykładzie swoją teoretyczną wiedzę</li>
          </ul>
          
          
          
          
          </div>
        
         
                    
        
        
        </div>

      </div>

      </main>

    )
}