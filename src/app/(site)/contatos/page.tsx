import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contatos -  Aprendendo nextJs',
    description: "Entre em contato com o Melch",
    keywords: ['HTML', 'CSS', 'JavaScript', 'Programação'],
    openGraph: {
      images: ['https://avatars.githubusercontent.com/u/112730223?v=4']
    },
    robots:{
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      }
    }
  };

export default function Contatos(){
    return(
        <div>
            <h1>Contatos</h1>
            <span>(xx) 231-4390</span>
        </div>
    ) 
}