
  /* eslint-disable react/no-unescaped-entities */
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import Image from "next/image";
  import Link from "next/link";
  import type { Metadata } from "next";

  export const metadata: Metadata = {
    title: "Warsztaty - Gabinet Łukasz Chwalisz",
    description: "Oferta warsztatów w ramach działalności gabinetu psychologicznego",
  };

export default function Warsztaty() {
    return (
  
      <main className="container  bg-slate-50 flex h-max max-w-full flex-col items-center justify-between p-4">
        
        <div className="mb-8 text-center text-6xl py-20">
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
              <BreadcrumbPage>Warsztaty</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        

        <div className="container lg:flex lg:space-x-4 m-4 p-4 text-justify">

          <div className="grid gap-4 mt-auto justify-center m-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
        

          <div className="p-4 mb-4 space-x-4">
          
          <Card>
          <Image
            src="/obr/sc3.jpg"
            alt="My Logo"
            className="mx-auto mb-2 p-5"
            width={300}
            height={100}
            priority
            />
            <CardHeader>
              <CardTitle>Gra z symbolami</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-gray-500">Zabawa polegająca na tworzeniu i intepretowaniu symbolicznej rzeki.</p>
              </CardContent>
            

          </Card>
          </div>
          

          
          <div className="p-4 mb-4 space-x-4">
  
          <Card>
          <Image
            src="/obr/sandplay4.jpg"
            alt="My Logo"
            className="mx-auto mb-2 p-5"
            width={250}
            height={100}
            priority
            />
            <CardHeader>
              <CardTitle>Zabawa w piaskownicy</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-gray-500">Warsztaty symboliczne przy użyciu piasku.</p>
              </CardContent>
            

          </Card>
  
          </div>
        
          
          <div className=" p-4 mb-4 space-x-4">
          <Card>
          <Image
            src="/obr/sklep0.jpg"
            alt="My Logo"
            className="mx-auto mb-2 p-5"
            width={200}
            height={100}
            priority
            />
            <CardHeader>
              <CardTitle>Sklep z maskami</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-gray-500">Gra negocjacyjna nastawiona na wyćwiczenie własnej postawy owbec hipotetycznej sytuacji mobbignowej w pracy.</p>
              </CardContent>

          </Card>
          </div>
          
          
          </div>
          
        
        
       </div>



      </main>

    )
}