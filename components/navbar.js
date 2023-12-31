import Link from "next/link"
import Image from "next/image"
import {Montserrat} from "next/font/google"

const montserrat_500 = Montserrat({
    subsets: ['latin'],
    weight:'500'
})
export default function NavBar() { 
    return (
        <div>
            <nav className="h-[58px] flex items-center px-5 md:h-[58px] flex items-center px-20">
                <div className="w-full flex flex-row justify-between items-center">
                    <ul className="flex flex-row item-center gap-7 md:flex flex-row item-center gap-12">
                        <li>
                        <Image width={38} height={38} src="/agro.png" alt="logo"/>
                        </li>
                        <li className={`${montserrat_500.className} text-green-700 hover:text-yellow-700`}><Link href='/'>Home</Link></li>
                        <li className={`${montserrat_500.className}  text-green-700 hover:text-yellow-700 hidden md:block`}><Link href='/about-us'>About us</Link></li>
                        <li className={`${montserrat_500.className} text-green-700 hover:text-yellow-700 hidden md:block`}><Link href='/contact-us'>Contact us</Link></li>
                        <li className={`${montserrat_500.className} text-green-700 hover:text-yellow-700 hidden md:block`}><Link href='/product'>Product</Link></li>
                        
                    </ul>


                    <Link href="/auth/signup">
                        singup
                    </Link>
                </div>
            
            </nav>
            
            <div className="grid grid-cols-3">
                <div className="h-[4px] bg-green-500 "></div>
                <div className="h-[4px] bg-yellow-500 "></div>
                <div className="h-[4px] bg-red-500 "></div>
            </div>
        </div>
    )
    
}