"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

// import { useRouter } from "next/router";

const About = () => {
  const images = [1, 2, 3];
  const router = useRouter();

  return (
    <div className="w-screen mt-12">
      <div className="flex flex-1 justify-start items-center flex-col xs:gap-2 md:gap-6 ">
        <h5 className="font-bold md:text-4xl xs:text-2xl">About Worded</h5>

        <p className="w-3/5 font-light">
          Worded is a web app that helps you learn new words and improve your
          vocabulary. It is a fun and interactive way to learn new words, and it
          can help you improve your understanding of the English language.
          Worded includes a variety of quizzes that help you test your knowledge
          of antonyms and synonyms. These quizzes are a great way to stretch
          your vocabulary. Worded is a free to use web app, and it is available
          on all major browsers.
        </p>

        <h5 className="font-bold md:text-2xl xs:text-2xl ">Features</h5>

        <p className="w-3/5 font-light">
          Worded includes a variety of features that make it a great way to
          learn new words, including:
          <ul>
            <li>
              1. A growing database of words: Worded includes a large database
              of words, so you can always find new words to learn.
            </li>
            <li>
              2. A variety of learning techniques: Worded uses a variety of
              learning techniques to help you learn new words, so you can find
              the techniques that work best for you.
            </li>
            <li>
              3. A fun and interactive interface: Worded is a fun and
              interactive way to learn new words, so you won't get bored.
            </li>
            <li>
              4. Free to use: Worded is a free to use web app, so you can start
              learning new words today.
            </li>
          </ul>
        </p>
      </div>

      <div className="flex flex-1 justify-start items-center flex-col xs:gap-2 md:gap-6 ">
        {/* <h5 className="font-bold md:text-4xl xs:text-2xl">

                    About Worded

                </h5> */}

        <h5 className="font-bold md:text-2xl xs:text-2xl ">Repository</h5>

        <p className="w-3/5 font-light">
          <ul>
            <li>
              Github:{" "}
              <a
                href="https://github.com/NobleOsinachi/worded-nextjs"
                target="_blank"
              >
                https://github.com/NobleOsinachi/worded-nextjs
              </a>
            </li>
            <li>
              Vercel:{" "}
              <a
                href="https://worded-nextjs.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://worded-nextjs.vercel.app
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
