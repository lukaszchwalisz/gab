
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
              src="/obr/sc3.jpg"
              alt="Gra z symbolami"
              className="rounded-md shadow-md dark:border-2"
              width={500}
              height={100}
              priority
            />
            
           
          </div>
          

          
          <div className="">
  
            <h1 className="p-2 mb-4 text-3xl font-bold text-center text-gray-800 dark:text-white">Gra z symbolami</h1>
            <p className="mb-4 text-gray-800 dark:text-white">
              Warsztat dla ok. 8-10 osób, autorstwa analityka jungowskiego Martina Skali z Pragi. Uczestnicy warsztatu zostaja poproszeni
              o namalowanie symbolicznej rzeki na kartce A3. Rzeka symbolizuje przepływy energii, świadomości. Wokół rzeki pojawia się drzewa,
              góry albo same tylko kolory przedstawiające aktualny stan duszy. Kolejne etapy ćwiczenia pozwalają uczestnikom odejść od swojej
              własnej świadomości i połączyć się ze świadomością zbiorową grupy.
           </p>
            
           <p className="mb-4 text-gray-800 dark:text-white">
              Techniki zastosowane podczas zajęć obejmują malowanie farbami, wycinanie z gazet bliskich sobie obrazów, postaci oraz tworzeni
              archetypowej figury z modeliny. Na każdym etapie prowadzący zachęcają do interpretacji własnych działań i analizy procesu grupowego
              pomiędzy uczestnikami warsztatu.
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