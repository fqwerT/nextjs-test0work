import Link from "next/link"

export const Header = () => {
    return (
        <header>
            <nav>
                <Link href={'src/app/components/list/list'}>друзья</Link>
                <Link href={''}>новости</Link>
            </nav>
        </header>
    )
}