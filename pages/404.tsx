import Link from "next/link"

 
const NotFound: React.SFC = () => {
  return ( <div>
    <h1>
      404. Strange.
    </h1>
    <Link href="/"><a>Let`s get you back to the site.</a></Link>
    </div> );
}
 
export default NotFound;