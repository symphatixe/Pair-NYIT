import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export default function profile(){
  return (
    <>
    <div className={styles.back}><Link href='/'>Back</Link> </div>
    
    <main className={styles.profileMain}> 
     <div className ={styles.profilePicture}><Image
          src="/silhouette.png"
          alt="13"
          width={160}
          height={160}
          priority
          /></div>
          <div className={styles.profileBio}>
            <form>
              <label for="name">Enter your name: </label>
              <br /><br />
              <input type="text" name="name" id="name" required/>
              <br /><br />
              <label for="major">Enter your major: </label>
              <br /><br />
              <input type="text" name="major" id="major" required/>
              <br /><br />
              <label for="year">Enter your year: </label>
              <br /><br />
              <input type="text" name="year" id="year" required/>
              <br /><br />
              <label for="bio">Enter your bio here: </label>
              <br /><br />
              <textarea name="bio" id="bio" col="30" rows="10" placeHolder="About you..."/>
              <br /> <br />
              <label for="hashtag">Enter your hashtags here: </label>
              <br /><br />
              <textarea name="hashtag" id="hashtag" col="30" rows="5" placeHolder="Hashtags"/>
              <br /> <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
    </main>
    
    </>
  )
}