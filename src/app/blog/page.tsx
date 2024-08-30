
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  


export default function BLOG() {
    return (
  
      <main className="container bg-slate-50 flex h-max max-w-full flex-col items-center justify-between p-4">
        
        <h2 className="m-4 font-bold text-lime-500">BLOG</h2>  
        
        <div className="container lg:flex lg:space-x-4 m-4 p-4  text-justify">
        
        <Carousel>
        <CarouselContent className="md:basis-1/2 lg:basis-1/3">

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 mb-4 space-x-4">

          <h3 className="text-center font-bold mb-4">Pacjent Zero</h3>
          
          <p className="text-gray-500">Rok 2020. Człowiek w masce idący uliczkami miast, trzymający się w odpowiedniej odległości od innych osób, które także mają zakryte twarze. Każdy dzień niesie za sobą informacje o nowych zakażonych, wyleczonych, zmarłych.</p>
          </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 mb-4 space-x-4">
          <h3 className="text-center font-bold mb-4">Dwa filmy</h3>
          <p className="text-gray-500">Pod koniec 2019 roku miały miejsce premiery dwóch filmów, bardzo ciekawych, w pewien sposób podobnych do siebie i bardzo różnych zarazem. Mam na myśli "Dwóch papieży", wyprodukowany przez Netflix oraz wyświetlany w kinach studyjnych "The Lighthouse".</p>
          </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 mb-4 space-x-4">
          <h3 className="text-center font-bold mb-4">Nieświadomość indywidualna i zbiorowa</h3>
          <p className="text-gray-500">Wystąpienie na kongresie "Obrazy nieświadomości – jungowskie metody pracy z psychiką 6.10.2019 r.</p>
          </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 mb-4 space-x-4">
          <h3 className="text-center font-bold mb-4">Golem: archetypowy mit czy miejska legenda?</h3>
          <p className="text-gray-500">Pod koniec sesji pacjentka spytała mnie o figurkę, która znajdowała się w moim gabinecie. Figurka przedstawiała słonia, który nosił na sobie zegar.</p>


          </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 mb-4 space-x-4">
          <h3 className="text-center font-bold mb-4">Sny a nieświadomy sens</h3>
          <p className="text-gray-500">W rozdziale „Podróże” we książce „Wspomnienia, sny, myśli” C.G. Jung przytoczył sen, który miał podczas podróży do Tunisu.</p>


          </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 b-4 space-x-4">
          <h3 className="text-center font-bold mb-4">Co oznacza Lechaim ?</h3>
          <p className="text-gray-500">„Lechaim !” To tradycyjny toast przed piciem wina czy innego napoju, oznaczający dosłownie „Za życie!”.
          </p>
          </div>
          </CarouselItem>

        </CarouselContent>
        <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  
      </div>


      </main>

    )
}