'use client';
import Image from 'next/image';
import sdLogo from '../../public/seandonnyartlogo.png';
import paintSplodge from '../../public/paint_splodge.png';
import bouquetsOutside from '../../public/VincoXDonny.webp';
import pinkXBK from '../../public/PocoXDonny.webp';
import lookBack from '../../public/VictorxDonny.webp';
import reflections from '../../public/MannexXDonny.webp';
import codeSnippet from '../../public/voting_challenge_js_code.png';
import BarChart from './components/BarChart';
import votingResults from '../votingResults.json';

export default function Home() {
  return (
    <>
      <div className="bg-[#f8f5ef]">
        <div className="header-container flex flex-row w-full items-center justify-center sticky top-0">
          <Image
            src={sdLogo}
            alt="Sean Donny Logo"
            width={128}
            className="mt-3"
          />
        </div>
        <div
          className="hero-section-container relative w-full min-h-screen flex flex-col md:flex-row"
          id="hero"
        >
          <div className="hero-text-container pt-40 md:pt-0 w-full md:w-3/5 flex flex-col justify-center z-[2] p-10 relative md:static md:ml-10">
            <h1 className="hero-heading text-5xl md:text-7xl font-normal tracking-tight leading-tight">
              May 2024
              <br />
              Art Challenge
            </h1>
            <br />
            <p className="hero-description leading-loose text-lg md:text-xl md:mt-5">
              I launched this competition as a tribute to the community that not
              only transformed my life but also saved it.
              <br />
              <br />
              The challenge was elegantly simple: each artist would choose a
              reference from a curated Pinterest board, infuse it with their
              unique style, and let their creativity shine through!
              <br />
              <br />
              Four exceptional artists enthusiastically took part, and I had the
              privilege of individually collaborating with each of them on their
              masterpieces. A cheeky £50 prize awaited the winner, to be chosen
              through an Instagram voting frenzy.
              <br />
              <br />
              Using the power of JavaScript, I meticulously collected and
              curated the comments, which you can now visually explore right
              here on this very site. Join me as we delve into each artwork and
              unveil the thrilling outcome of this artistic showdown.
            </p>
          </div>
          <div className="hero-image-container absolute overflow-visible right-0 top-0 h-full md:h-auto z-[1] md:top-32">
            <Image
              src={paintSplodge}
              alt="Hero section accent paint splodge"
              className="h-auto z-[1] w-[800px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <div className="bg-pink-100 h-auto w-full pb-20">
          <div className="artist-1-expo-container w-full flex flex-col lg:flex-row items-center justify-center">
            <div className="artist-1-text-container pt-20 lg:pt-0 w-full lg:w-2/5 flex flex-col p-10 lg:ml-10">
              <h1 className="artist-1-heading text-5xl lg:text-7xl font-normal tracking-tight leading-tight lg:pt-40">
                Bouquets
                <br />
                Outside
              </h1>
              <br />
              <p className="artist-1-description leading-loose text-lg lg:text-xl lg:mt-5">
                It was early, well before my usual functioning hours, a faint
                buzz from my phone interrupted my peaceful slumber. &#39;Look
                Outside!&#39; it urged—a confusing directive considering our
                recent disagreement. Reluctantly, I shrugged off the covers and
                sluggishly waddled towards the window.
                <br />
                <br />
                Pulling back the heavy curtains, I was met with a blinding glare
                from the sun, my nocturnal self screeched faintly. Blinking to
                adjust to its brilliance, amidst the overwhelming light, there
                she stood, holding a bouquet of flowers. She knew me all too
                well.
                <br />
                <br />
                This artwork seamlessly blends traditional and digital
                techniques. Artist &#34;
                <a
                  href="https://www.instagram.com/olivinco_/"
                  target="_blank"
                  className="underline"
                >
                  Vinco
                </a>
                &#34; invites us into a world of chromatic brilliance with her
                pink jasmine palette. Meanwhile, Sean Donny adds a bold, modern
                twist to the impressionistic scene, creating a captivating
                fusion of styles and perspectives.
              </p>
            </div>
            <div className="artist-1-artwork-container w-full h-auto lg:w-3/5 p-10">
              <Image
                src={bouquetsOutside}
                alt="Bouquets Outside by Vinco & Sean Donny (2024)"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#738af3] h-auto w-full pb-20">
          <div className="artist-2-expo-container w-full flex flex-col-reverse lg:flex-row items-center justify-center">
            <div className="artist-2-artwork-container w-full h-auto lg:w-2/5 p-10">
              <Image
                src={pinkXBK}
                alt="Pinkpantheress X BK by Poco & Sean Donny (2024)"
              />
            </div>
            <div className="artist-2-text-container pt-20 lg:pt-0 w-full lg:w-3/5 flex flex-col p-10 lg:ml-10">
              <h1 className="artist-2-heading text-5xl lg:text-7xl font-normal tracking-tight leading-tight lg:pt-40">
                Pink Pantheress X
                <br />
                BK
              </h1>
              <br />
              <p className="artist-2-description leading-loose text-lg lg:text-xl lg:mt-5">
                This artwork captures a heartwarming embrace between
                PinkPantheress, illustrated by Sean Donny, and BKtherula,
                portrayed by{' '}
                <a
                  href="https://www.instagram.com/poco_sketches/"
                  target="_blank"
                  className="underline"
                >
                  Poco
                </a>
                , forever immortalized in this Polaroid still. The two digital
                artists approach their subjects from personal angles, allowing
                their unique styles to shine through while complementing each
                other beautifully in this twin pair.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#5a79eb] h-auto w-full pb-20">
          <div className="artist-3-expo-container w-full flex flex-col lg:flex-row items-center justify-center">
            <div className="artist-3-text-container pt-20 lg:pt-0 w-full lg:w-2/5 flex flex-col p-10 lg:ml-10">
              <h1 className="artist-3-heading text-5xl lg:text-7xl font-normal tracking-tight leading-tight lg:pt-40">
                Look Back
              </h1>
              <br />
              <p className="artist-3-description leading-loose text-lg lg:text-xl lg:mt-5">
                <a
                  href="https://www.instagram.com/chimdi.jpg/"
                  target="_blank"
                  className="underline"
                >
                  Victor
                </a>{' '}
                and Sean approached this piece as if it were a mirror of some
                sort. As the subjects gaze back at us, it feels almost
                intrusive, giving us a glimpse into their minds and emotions.
                <br />
                <br />
                On the left, Sean depicts the subject with a subtle smirk,
                signaling a sense of pride in her beauty, from her intricately
                styled hair to the subtle glimmers on her lined lips.
                <br />
                <br />
                To her right, Victor&#39;s rendition offers a more somber and
                piercing gaze, as if she knows something about us that we have
                yet to discover. This piece presents a duality of emotions,
                balancing its interrogatory nature with a calm blue background
                that offers a sense of harmony.
                <br />
                <br />
                Despite their differing styles, the artists brilliantly unify
                their work into a cohesive whole.
              </p>
            </div>
            <div className="artist-3-artwork-container w-full h-auto lg:w-3/5 p-10">
              <Image
                src={lookBack}
                alt="Look Back by Victor Ndubuisi & Sean Donny (2024)"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#58a4c9] h-auto w-full pb-20">
          <div className="artist-4-expo-container w-full flex flex-col-reverse lg:flex-row items-center justify-center">
            <div className="artist-4-artwork-container w-full h-auto lg:w-2/5 p-10">
              <Image
                src={reflections}
                alt="Reflections by Manex & Sean Donny (2024)"
              />
            </div>
            <div className="artist-4-text-container pt-20 lg:pt-0 w-full lg:w-3/5 flex flex-col p-10 lg:ml-10">
              <h1 className="artist-4-heading text-5xl lg:text-7xl font-normal tracking-tight leading-tight lg:pt-40">
                Reflections
              </h1>
              <br />
              <p className="artist-4-description leading-loose text-lg lg:text-xl lg:mt-5">
                Sean and{' '}
                <a
                  href="https://www.instagram.com/manex_draws/"
                  target="_blank"
                  className="underline"
                >
                  Manny
                </a>{' '}
                perform a quadratic digital dance on their canvas. The
                &#34;Falling or Flying&#34; artist is depicted staring directly
                at the viewer, confronting her various sides through
                reflections.
                <br />
                <br />
                Her sharp gaze is like a sword, piercing and subduing us,
                compelling us to question and reflect on our own thoughts,
                emotions, actions, and selves.
                <br />
                <br />
                The piece induces a sense of claustrophobia, as we are
                sandwiched between Jorja&#39;s multiple stares. A prolonged gaze
                could lead one to feel lost, or worse, trapped in this
                kaleidoscopic Tetris.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#f8f5ef] h-auto w-full">
          <div className="voting-results-expo-container w-full flex flex-col lg:flex-row items-center justify-center pb-20">
            <div className="voting-results-text-container pt-20 lg:pt-0 w-full lg:w-2/5 flex flex-col p-10 lg:ml-10">
              <h1 className="voting-results-heading text-5xl lg:text-7xl font-normal tracking-tight leading-tight lg:pt-20">
                Voting Results
              </h1>
              <br />
              <p className="voting-results-description leading-loose text-lg lg:text-xl lg:mt-5">
                After a relentless two-day battle, where every artist showcased
                exceptional brilliance and talent, the competition took a
                dramatic turn as Vinco and Manny surged ahead in the polls
                before the first day&#39;s dusk.
                <br />
                <br />
                In a stunning display of support, Manny skyrocketed in votes,
                securing a landslide victory against all odds. Despite spirited
                efforts from Vinco&#39;s <b>168</b> supporters, marked by
                multiple enthusiastic <b>1&#39;s</b> in the comment section,
                Manny emerged triumphant in the ultimate showdown with a
                staggering <b>374</b> votes.
                <br />
                <br />
                Now adorned with the weighty crown of art competition champion
                and the prize of <b>fifty British pounds</b>, Manny stands
                poised at the pinnacle of artistic achievement, a testament to
                his undeniable skill and the fervent backing of his admirers.
              </p>
            </div>
            <div className="voting-results-chart-container w-full h-auto lg:w-3/5 p-10">
              <BarChart votingResults={votingResults} />
            </div>
          </div>
        </div>
        <div className="bg-[#050413] h-auto w-full pb-20 text-slate-200">
          <div className="development-expo-container w-full flex flex-col-reverse lg:flex-row items-center justify-center">
            <div className="development-snippet-container w-full h-auto lg:w-2/5 p-10">
              <Image
                src={codeSnippet}
                alt="code snippet of voting processing function"
              />
            </div>
            <div className="development-text-container pt-20 lg:pt-0 w-full lg:w-3/5 flex flex-col p-10 lg:ml-10">
              <h1 className="development-heading text-5xl lg:text-7xl font-normal tracking-tight leading-tight lg:pt-40">
                Want to Geek Out?!🤓
              </h1>
              <br />
              <p className="development-description leading-loose text-lg lg:text-xl lg:mt-5">
                This website was built in under 24 hours using the power of
                JavaScript and Next.js. Check out my not-so-sketchy code on the
                GitHub repository{' '}
                <a
                  href="https://github.com/Sean-donny/May2024IGArtChallenge"
                  className="text-[#7f7aff] underline"
                  target="_blank"
                >
                  here
                </a>
                .<br />
                <br />
                Initially, I planned to scrape the comments using Python, but
                that proved unsuccessful. So, I switched to my trusty buddy,
                JavaScript.{' '}
                <i>
                  *You can go ahead and insert a comment about how there&#39;s
                  probably a faster way to do it*
                </i>
                .<br />
                <br />
                If you do geek out and look at the code, please be kind—I am not
                a mid-level front-end heavy web developer. The code works, and
                that&#39;s what matters. I have to put my Software Engineering
                degree to use somehow, right?
              </p>
            </div>
          </div>
        </div>
        <div className="footer bg-[#050413] w-full h-12 flex flex-row items-center justify-center lg:justify-end">
          <div className="footer-links flex space-x-8 md:space-x-12 lg:space-x-20 lg:mx-20">
            <p className="text-base font-semibold text-[#7f7aff]">
              <a href="https://www.instagram.com/sean.donny/" target="_blank">
                Instagram
              </a>
            </p>
            <p className="text-base font-semibold text-[#7f7aff]">
              <a href="https://www.youtube.com/@SeanDonny333" target="_blank">
                YouTube
              </a>
            </p>
            <p className="text-base font-semibold text-[#7f7aff]">
              <a href="mailto:seandonny333@gmail.com">Contact</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
