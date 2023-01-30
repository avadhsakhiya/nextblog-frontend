import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-main d-flex justify-content-between">
                    <div>logo</div>
                    <nav>
                        <ul className="d-flex">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="social-media">
                        <ul className="d-flex">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}