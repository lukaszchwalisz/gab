
  /* eslint-disable react/no-unescaped-entities */
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import Link from "next/link";
  import type { Metadata } from "next";

  export const metadata: Metadata = {
    title: "Blog - Gabinet Łukasz Chwalisz",
    description: "Oferta warsztatów w ramach działalności gabinetu psychologicznego",
  };

export default function Blog() {
    return (
  
      <main className="container flex h-max max-w-full flex-col items-center justify-between p-4">
        
        <div className="mb-8 text-center text-6xl py-20">
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
              <BreadcrumbPage>Blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        

        <div className="container lg:flex lg:space-x-4 m-4 p-4 text-justify">

          <div className="grid gap-4 mt-auto justify-center m-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
        
     
          <div className="bg-white p-4 mb-4 rounded-md shadow-sm space-x-4">

          <h3 className="text-center font-bold mb-4">Pacjent Zero</h3>
          
          <p className="text-gray-500">Rok 2020. Człowiek w masce idący uliczkami miast, trzymający się w odpowiedniej odległości od innych osób, które także mają zakryte twarze. Każdy dzień niesie za sobą informacje o nowych zakażonych, wyleczonych, zmarłych.</p>
          </div>
          

          
          <div className="bg-white p-4 mb-4 rounded-md shadow-sm space-x-4">
          <h3 className="text-center font-bold mb-4">Dwa filmy</h3>
          <p className="text-gray-500">Pod koniec 2019 roku miały miejsce premiery dwóch filmów, bardzo ciekawych, w pewien sposób podobnych do siebie i bardzo różnych zarazem. Mam na myśli "Dwóch papieży", wyprodukowany przez Netflix oraz wyświetlany w kinach studyjnych "The Lighthouse".</p>
          </div>
        

          
          <div className="bg-white p-4 mb-4 rounded-md shadow-sm space-x-4">
          <h3 className="text-center font-bold mb-4">Nieświadomość indywidualna i zbiorowa</h3>
          <p className="text-gray-500">Wystąpienie na kongresie "Obrazy nieświadomości – jungowskie metody pracy z psychiką 6.10.2019 r.</p>
          </div>
          

          
          <div className="bg-white p-4 mb-4 rounded-md shadow-sm space-x-4">
          <h3 className="text-center font-bold mb-4">Golem: archetypowy mit czy miejska legenda?</h3>
          <p className="text-gray-500">Pod koniec sesji pacjentka spytała mnie o figurkę, która znajdowała się w moim gabinecie. Figurka przedstawiała słonia, który nosił na sobie zegar.</p>


          </div>
          

          
          <div className="bg-white p-4 mb-4 rounded-md shadow-sm">
          <h3 className="text-center font-bold mb-4">Sny a nieświadomy sens</h3>
          <p className="text-gray-500">W rozdziale „Podróże” we książce „Wspomnienia, sny, myśli” C.G. Jung przytoczył sen, który miał podczas podróży do Tunisu.</p>


          </div>
          

          
          <div className="bg-white p-4 mb-4 rounded-md shadow-sm space-x-4">
          <h3 className="text-center font-bold mb-4">Co oznacza Lechaim ?</h3>
          <p className="text-gray-500">„Lechaim !” To tradycyjny toast przed piciem wina czy innego napoju, oznaczający dosłownie „Za życie!”.
          </p>
          </div>
        
        
          </div>
      </div>


      </main>

    )
}