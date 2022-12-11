import {Navbar, Footer} from "flowbite-react";


export default function Layout({children}){
    return(
        <div className="container">
            <Navbar fluid={true} className="main-nav">
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

            <div className="children mt-5">
                {children}
            </div>

            <Footer container={true}>
                <Footer.Copyright
                    href="#"
                    by="Flowbite™"
                    year={2022}
                />
                <Footer.LinkGroup>
                    <Footer.Link href="#">
                    About
                    </Footer.Link>
                    <Footer.Link href="#">
                    Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#">
                    Licensing
                    </Footer.Link>
                    <Footer.Link href="#">
                    Contact
                    </Footer.Link>
                </Footer.LinkGroup>
            </Footer>

        </div>
    )
}