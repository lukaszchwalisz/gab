
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  


export default function Warsztaty() {
    return (
  
      <main className="container bg-slate-50 flex h-max max-w-full flex-col items-center justify-between p-4">
        
        <h2 className="m-4 font-bold text-lime-500">WARSZTATY</h2>  
        
        <div className="container lg:flex lg:space-x-4 m-4 p-4  text-justify">
        
        <Carousel>
            <CarouselContent className="">
  
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-4 mb-4 space-x-4">
            <h3 className="text-center font-bold mb-4">Gra z symbolami</h3>
            <p className="text-gray-500">Zabawa polegająca na tworzeniu i intepretowaniu symbolicznej rzeki.</p>
            </div>
            </CarouselItem>
  
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-4 mb-4 space-x-4">
            <h3 className="text-center font-bold mb-4">Zabawa w piaskownicy</h3>
            <p className="text-gray-500">Warsztaty symboliczne przy użyciu piasku.</p>
            </div>
            </CarouselItem>
  
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-4 mb-4 space-x-4">
            <h3 className="text-center font-bold mb-4">Sklep z maskami</h3>
            <p className="text-gray-500">Gra negocjacyjna nastawiona na wyćwiczenie własnej postawy owbec hipotetycznej sytuacji mobbignowej w pracy.
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