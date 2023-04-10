// Jsx is the default export so mentione as separate and other exported functions written in the {}
import Link from "next/link";

const MENU={
    Home:{
        Name:"Home",
        url:"/"
    },
    Basics:{
        Name:"Basics",
        url:"/basics"
    },
}

function Header(){
  return (
<>
<header>
<Link href="/">Home</Link>
<Link href="/basics">Basics</Link>
<Link href="/classes">Classes</Link>
<Link href="/hooks">Hooks</Link>
<Link href="/projects">Projects</Link>
</header>
<h1>React Basic Learing</h1>
</>
  );
}
export default Header;
