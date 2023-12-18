// "use client";
// import Image from 'next/image'
import Link from "next/link";

// import Events from '@/events/page'
// import buttons from '@Buttons'

export default function Home() {
  // const router = useRouter();
  // console.log(router);

  return (
    <>
      <h1>Main Page </h1>
      <br />
      <Link href={"./components/buttons"}>Buttons Page</Link><br/><br/>
      <Link href={"./topics/formHandling"}>FormHandling Page</Link><br/><br/>


      {/* <Link href={"./contactForm"}> Contact Form </Link> */}
    </>
  );
}
