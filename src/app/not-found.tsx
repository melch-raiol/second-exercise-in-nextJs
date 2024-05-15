import Link from "next/link";

export default function MotFound() {
    return(
        <div>
            <h2>Página não encontrada!</h2>
            <p>parece que essa página que você está tentando encontrar não existe!</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}