/* eslint-disable react/no-unescaped-entities */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Gabinet Łukasz Chwalisz",
  description: "Oferta warsztatów w ramach działalności gabinetu psychologicznego",
};

export default function Blog() {
  return (
    <main className="container flex h-max max-w-full flex-col items-center justify-between p-4">
      <div className="mb-8 text-6xl py-20">
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Blog
        </span>
      </div>

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
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
        <div className="grid gap-4 mt-auto justify-center m-4 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="hover:underline decoration-from-font dark:hover:decoration-gray-500 dark:hover:bg-gray-800 border-0 p-4"
            >
              <div>
                <h1 className="font-semibold">{post.title}</h1>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
              <div className="mt-5">
                <p className="text-gray-500">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const blogPosts = [
  {
    title: "Pacjent Zero",
    date: "26.04.2020 r.",
    content: "Rok 2020. Człowiek w masce idący uliczkami miast, trzymający się w odpowiedniej odległości od innych osób, które także mają zakryte twarze. Każdy dzień niesie za sobą informacje o nowych zakażonych, wyleczonych, zmarłych.",
  },
  {
    title: "Dwa filmy",
    date: "10.01.2020 r.",
    content: "Pod koniec 2019 roku miały miejsce premiery dwóch filmów, bardzo ciekawych, w pewien sposób podobnych do siebie i bardzo różnych zarazem. Mam na myśli 'Dwóch papieży', wyprodukowany przez Netflix oraz wyświetlany w kinach studyjnych 'The Lighthouse'.",
  },
  {
    title: "Nieświadomość indywidualna i zbiorowa",
    date: "17.11.2019 r.",
    content: "Wystąpienie na kongresie 'Obrazy nieświadomości – jungowskie metody pracy z psychiką 6.10.2019 r.",
  },
  {
    title: "Golem: archetypowy mit czy miejska legenda?",
    date: "10.06.2018 r.",
    content: "„Polscy Żydzi po odmówieniu pewnych modlitw i odbyciu postów robią ludzką postać z gliny albo mułu, a gdy wypowiedzą cudowne szemhamforas [imię Boga], to człowiek ów musi ożyć. Nazywają go golem i wykorzystują jako posługacza do wszelkich prac domowych, tyle że nie wolno mu wychodzić z domu.",
  },
  {
    title: "Mistrz odzywa się tylko raz",
    date: "08.06.2017 r.",
    content: "Pod koniec sesji pacjentka spytała mnie o figurkę, która znajdowała się w moim gabinecie. Figurka przedstawiała słonia, który nosił na sobie zegar. Powiedziałem, że zakupiłem ją dawno temu w pewnym mieście. Pacjentka słysząc moją odpowiedź, wydała się zaskoczona. 'Czy Pan to robi specjalnie ?' – spytała.",
  },
  {
    title: "Sny a nieświadomy sen",
    date: "07.05.2017 r.",
    content: "W rozdziale 'Podróże' we książce 'Wspomnienia, sny, myśli' C.G. Jung przytoczył sen, który miał podczas podróży do Tunisu.",
  },
  {
    title: "Co oznacza Lechaim ?",
    date: "16.03.2017 r.",
    content: "‘Lechaim !' To tradycyjny toast przed piciem wina czy innego napoju, oznaczający dosłownie 'Za życie!'.",
  },
];