
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
  title: "Podążanie - Blog - Gabinet Łukasz Chwalisz",
  description: "Podążanie - Blog - Gabinet Łukasz Chwalisz",
  keywords: "Podążanie, blog, gabinet, łukasz chwalisz",
};

export default function Podazanie() {
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
            
            <BreadcrumbPage>Podążanie</BreadcrumbPage>
            
            </BreadcrumbItem>

          </BreadcrumbList>

      </Breadcrumb>
      

      <div className="container lg:flex lg:space-x-4 m-4 p-4 text-justify">

        <div className="grid gap-4 mt-auto justify-center m-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
      

        <div className="p-4 mb-4 space-x-4">
        
          <Image
            src="/obr/trampki.jpeg"
            alt="Podążanie."
            className="rounded-md shadow-md"
            width={500}
            height={100}
            priority
          />
         
        </div>
        

        
          <div>

              <div className="p-4 mb-4">
                <h1 className="text-center font-semibold">Podążanie</h1>
                <p className="text-center text-sm text-gray-500">wpis z 18.01.2018 r.</p>
              </div>


                  <p className="mb-4 text-gray-800 dark:text-white">Podążanie za pacjentem. Za jego/jej myślą, uczuciem, punktem widzenia.</p>
                  <p className="mb-4 text-gray-800 dark:text-white">Wymaga cierpliwości, a przede wszystkim powściągliwości..</p>
                  
                  <p className="mb-4 text-gray-800 dark:text-white">Zdarzenia z życia pacjenta, naturalnie mogą skojarzyć się z własnym doświadczeniem.
                  Wywody filozoficzne na istotny dla pacjenta temat, aż zachęcają do komentarza.
                  Mało tego - opowieść pacjenta potwierdza teorię, którą terapeuta zgłębia od lat i
                  nieświadomie poszukuje uzasadnienia dla niej.</p>
                  
                  <p className="mb-4 text-gray-800 dark:text-white">Już wie.</p>
                  <p className="mb-4 text-gray-800 dark:text-white">Już wie lepiej.</p>
                  
                  <p className="mb-4 text-gray-800 dark:text-white">Ale..</p>
                  <p className="mb-4 text-gray-800 dark:text-white">Co wie?</p>
                  <p className="mb-4 text-gray-800 dark:text-white">O pacjencie czy o sobie?</p>
                      
                  <p className="mb-4 text-gray-800 dark:text-white">Z drugiej strony..</p>
                  <p className="mb-4 text-gray-800 dark:text-white">Kiedy można dokonać interpretacji ? Czy należy pytać o każdy szczegół ?
                  Dopytywać, prosić o doprecyzowanie, o lepsze opisanie przekazywanych treści..
                  Czy zaczekać, aż pacjent wypowie się, tak jak potrafi ?
                  A potem dokonać interpretacji.</p>
                  
                  <p className="mb-4 text-gray-800 dark:text-white">Gdzie można znaleźć równowagę pomiędzy skrajnościami ? Czy można ? </p>
                  
                  <p className="mb-4 text-gray-800 dark:text-white">Czy jak wskazuje Jung, należy zintegrować przeciwności ?
                  Uruchomić w sobie Jaźń i spojrzeć jeszcze raz, jak przeciwne bieguny
                  dopełniają się i razem tworzą Całość. Nową jakość.</p>
                  
                  <p className="mb-4 text-gray-800 dark:text-white">Podążanie za pacjentem nie jest łatwe.</p>
                  
                  <p className="mb-4 text-gray-800 dark:text-white">Chcemy mieć za czym podążać, chcemy usłyszeć jak najwięcej.
                  Musimy czasem zareagować, aby odnaleźć kolejną warstwę, podtekst, symptom.
                  Przy tym nauczyć pacjenta, aby sam umiał się zatrzymać i był refleksyjny.</p>
                  
                  <em>Ale bez przesady. Bo co jak pacjent, kiedyś powie analitykowi jak ma daną</em>
                  <em>rzecz zinterpretować. Będzie się domagał, takiej a nie innej reakcji. </em>
                  <em>Tak też być może.</em>
                  
                  <p className="mb-4 text-gray-800 dark:text-white">Każda droga, każda wyznaczony sobie kierunek pracy prowadzi to swojego
                  niedostrzegalnego na początku końca. Kiedy należy zatrzymać się, zmienić,
                  dostosować, aby dalej podążać.</p>
                  
                  <p className="mb-4 text-gray-800 dark:text-white">Podążać za pacjentem.</p>
                
            </div>

            </div>

          </div>

    </main>

  )
}