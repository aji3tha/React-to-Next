// Jsx is the default export so mentione as separate and other exported functions written in the {}
import Link from "next/link";
import BasicAll from "../src/components/Basic/BasicAll";

function App(){
  return (
<>
{/* <header>
<Link href="/">Home</Link>
<Link href="/basics">Basics</Link>
<Link href="/classes">Classes</Link>
<Link href="/hooks">Hooks</Link>
<Link href="/projects">Projects</Link>
</header> */}
{/* <h1>React Basic Learing</h1> */}
<BasicAll/>
</>
  );
}
export default App;
