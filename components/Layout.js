import {Navbar} from "flowbite-react";
import {Footer} from "flowbite-react";

export default function Layout({children}){
    return(
        <div className="container">
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand href="/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Mercedes-Garage</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/" active={true}> Home </Navbar.Link>
                    <Navbar.Link href="/about"> About </Navbar.Link>
                    <Navbar.Link href="/models"> Models </Navbar.Link>
                    <Navbar.Link href="/blog"> Blog </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

            <div>
                {children}
            </div>

            <Footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/"className="hover:underline">Mercedes™</a>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </Footer>

        </div>
    )
}