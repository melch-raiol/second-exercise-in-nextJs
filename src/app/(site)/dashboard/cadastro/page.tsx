import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Painel - Cadastro de usuário',
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

  export default function Cadastro() {
    return(
        <div>
            <h1>Cadastro de Cliente</h1>
            <p>Essa página é de cadastro do cliente do Dashboard</p>
        </div>
    )
  }