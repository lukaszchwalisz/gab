
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

export default function ZabawaWPiaskownicy() {
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
            
             <BreadcrumbPage>Zabawa w piaskownicy</BreadcrumbPage>
            
            </BreadcrumbItem>




            </BreadcrumbList>

        </Breadcrumb>
        

        <div className="container lg:flex lg:space-x-4 m-4 p-4 text-justify">

          <div className="grid gap-4 mt-auto justify-center m-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        

          <div className="p-4 mb-4 space-x-4">
          
            <Image
              src="/obr/sand.png"
              alt="Gra z symbolami"
              className="rounded-md shadow-md dark:border-2"
              width={500}
              height={100}
              priority
            />
            
           
          </div>
          

          
          <div className="">
  
            <h1 className="p-2 mb-4 text-3xl font-bold text-center text-gray-800 dark:text-white">Zabawa w piaskownicy</h1>
            <p className="mb-4 text-gray-800 dark:text-white">
            Jest to nieklasyczna wersja sandplaya opracowana przez uczennice C. G. Junga. W oryginale pacjent zaczyna zabawę w piaskownicy zawierającej
            wymierzone granice - co w założeniu ma na celu dać wolność tworzenie, jednocześnie bezpieczenstwo w postaci kontenerowania (Bion) materiału.
            W wersji nieklasycznej, ktorą chciałbym zaproponować, nie ma ustalonej wielkości piaskownicy, ani wysokości jej granic. W zabawie może brać
            udział kilka osób i to od pacjenta zależy w jaki sposób zbuduje granice w relacji do innych, nie przymuszany do tego przez prowadzącego terapeutę.
           </p>
            
           <p className="mb-4 text-gray-800 dark:text-white">
           Bardzo istotne w tym podejściu na sandplay jest obserwacja procesu grupowego jaki zachodzi pomiędzy biorącymi udział, w jaki sposób budowana jest przestrzeń osobista,
           jaka jest gotowość do udostępnienia swojej przestrzeni innym, w jaki sposób budowana jest wspólna przestrzeń tworzona przez członków grupy. Wszystkie te aspekty podlegają analizie,
           przez co warsztaty mają wiele etapów i dotykąją wielu warstw świadomości i nieświadomości indywidualnej i grupowej.
          </p>

          <p className="mb-4 text-gray-800 dark:text-white">
          Celem zajęć jest przede wszystkim tworzenie obrazów swojej świadomości, próba dotarcia do tego co pod powierznią, do fundamentalnych nieświadomomych motywów.
          Technika używana podczas warsztatów to spontaniczne budowanie z piasku, układanie na nim przygotowanych elementów (figurek oraz kolorowych kamyków kojarzących się z zen garden) oraz
          umieszczenie swojego bohatera -postać archetypową, którą każdy uczestnik wybiera na początku zajęć. W późniejszym etapie bohaterowie mogą wchodzić ze sobą w interakcje.
          </p>




          <h2 className="mb-2 text-lg font-bold  text-gray-800 dark:text-white">Dla kogo:</h2>
          <ul className="p-3 mb-4 space-y-2 list-disc text-md text-gray-800 dark:text-white">
            <li>osoby zainteresowane poznaniem nieświadomego procesu grupowego w ujęciu psychologii analitycznej</li>
            <li>grupy osób biorące udział we wspólnych projektach, przedsięwzięciach</li>
            <li>pracownicy firm i korporacji chcący pogłębić integrację i zrozumieć procedy grupowe</li> 
            <li>członkowie rodziny, którzy chcieliby lepiej zrozumieć mechanizmy zachodzące wewnątrz grupy</li>
          </ul>
          
          
          
          
          </div>
        
         
                    
        
        
        </div>

      </div>

      </main>

    )
}