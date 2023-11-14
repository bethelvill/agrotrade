import Head from "next/head";
import { InfoBox } from "../components/infoBox";
import { jobOpening } from "../components/jobOpening";

export default function Index () {
  return (
    <>
    <Head>
      <title>Agro Trade</title>
    </Head>
    <main>

      <InfoBox>
        <ul>
          <li>Watermelon</li>
          <li>Orange</li>
          <li>Gauva</li>
        </ul>
      </InfoBox>
      <jobOpening  
      title='Nextt JS Hybrid Work'
      location='Nairobi'/>

<jobOpening 
      title='Reac Developer'
      location='Enugu'/>
    </main>
    </>
  )
}
