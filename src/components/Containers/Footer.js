// Jsx is the default export so mentione as separate and other exported functions written in the {}
import Link from "next/link";

function Footer(){
  return (
<>
<footer>
<Link href="/">Home</Link>
<Link href="/basics">Basics</Link>
<Link href="/classes">Classes</Link>
<Link href="/hooks">Hooks</Link>
<Link href="/projects">Projects</Link>
</footer>
</>
  );
}
export default Footer;
