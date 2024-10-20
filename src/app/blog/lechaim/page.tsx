
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
    title: "Co oznacza Lechaim? - Blog - Gabinet Łukasz Chwalisz",
    description: "Co oznacza Lechaim? - Blog - Gabinet Łukasz Chwalisz",
    keywords: "lechaim, blog, gabinet, łukasz chwalisz",
  };

export default function Lechaim() {
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
              
              <BreadcrumbPage>Lechaim</BreadcrumbPage>
              
              </BreadcrumbItem>

            </BreadcrumbList>

        </Breadcrumb>
        

        <div className="container lg:flex lg:space-x-4 m-4 p-4 text-justify">

          <div className="grid gap-4 mt-auto justify-center m-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        

          <div className="p-4 mb-4 space-x-4">
          
            <Image
              src="/obr/lechaim.avif"
              alt="Gra z symbolami"
              className="rounded-md shadow-md"
              width={500}
              height={100}
              priority
            />

           
          </div>
          

          
            <div>
  
                <div className="p-4 mb-4">
                  <h1 className="text-center font-semibold">Co oznacza Lechaim ?</h1>
                  <p className="text-center text-sm text-gray-500">16.03.2017 r.</p>
                </div>
          

                <p className="mb-4 text-gray-800 dark:text-white">
                  „Lechaim !” To tradycyjny toast przed piciem wina czy innego napoju, oznaczający dosłownie „Za życie!”.
                </p>
                <p className="mb-4 text-gray-800 dark:text-white">
                  Według opowieści z Talmudu, rabin Akiwa ben Josef (ok. 50-135) zaprosił innych rabinów na ucztę i gdy wznosił kielich
                  z winem wypowiadał słowa „Za życie i zdrowie nauczycieli i uczniów!”. Toast został przyjęty z aprobatą i tak narodził się
                  trwający do dziś zwyczaj.</p>
                <p className="mb-4 text-gray-800 dark:text-white">
                  W tamtych czasach czyli na początku naszej ery, wino było podawane osobom opłakującym umarłych, dlatego zasadnym stało się,
                  aby w chwilach radości picie wina poprzedzić stwierdzeniem podkreślającym, że pije się je za życie, a nie za śmierć.</p>
                <p className="mb-4 text-gray-800 dark:text-white">
                  Powiedzenie „Lechaim !” stało się także popularnym powiedzeniem wśród mistyków, kabalistów, gdzie określenie za życie w 
                  tym wypadku oznaczało na życie duchowe („Szamati 173” Baal Ha Sulam). Odnosi się to do symboliki kabalistycznej, w której
                  brak życia duchowego oznacza śmierć, stan martwy – „Grzesznicy za życia swego nazywani są martwymi”. „Lechaim!” 
                  wykrzykiwanie po lekturze kabalistycznych artykułów, podkreślało duchowe napełnienie i wzmocnienie wśród uczniów.</p>
                <p className="mb-4 text-gray-800 dark:text-white">
                  W swojej pracy terapeutycznej odwołuję się do życia duchowego, psychicznego, emocjonalnego. Staram się, aby najlepiej 
                  zaczął do niego odwoływać się sam pacjent. Aby dostrzegał ukryty w sobie potencjał. Poznawał siebie, swoje jasne i mroczne strony.
                  Im więcej wiedzy, tym więcej światła dociera do ukrytych zakamarków psychiki. Tym większa świadomość własnego procesu psychicznego.
                    Miejsca, w jakim znajdujemy się w życiu.</p>
                <p className="mb-4 text-gray-800 dark:text-white">
                  Tak więc: Za życie ! Lechaim !
                </p>

                <p className="mb-4 text-gray-800 dark:text-white">
                  <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full" 
                      src="https://www.youtube.com/embed/Vvr8AjT0aD0" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
                    </iframe>
                  </div>
                </p>
             
              </div>

              </div>

            </div>

      </main>

    )
}