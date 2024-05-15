import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Painel -  Aprendendo nextJs',
    description: "Site completo que aprendi com o Sujeito Programador",
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

export default function Dashboard(){
    return(
        <div>
            <h1>Página painel</h1>
            <span>Bem vindo ao painel do site</span>
        </div>
    )
}