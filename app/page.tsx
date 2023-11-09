import Image from "next/image";
import Me from "@/public/me.jpeg";

const bio_string =
  "Hi, I'm Shannon, a seasoned Product Analyst with two years of experience in tech. I started with a passion in tech and evolved into bridging user needs with innovation. Frontend development refined my skills and UX awareness. Now, I'm geared towards becoming a Frontend developer.";

const short_bio_string =
  "Hi, I'm Shannon! I enjoy creating complex frontend apps.";

export default function Home() {
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Home
        </h1>
      </div>
      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image
            alt="Picture of Shannon Chowdhury"
            src={Me}
            className="w-48 h-48 rounded-full object-cover object-top"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Shannon Chowdhury
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">
            {short_bio_string}
          </p>
          <div className="flex space-x-5 pt-6">
            {/*Github*/}
            <a href="https://github.com/xeonmobius" target="_blank">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="w-8 h-8 text-red-500 hover:text-red-600"
              >
                <path d="M15 22v-4a4.8 4.8 0 00-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 004 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shannonchowdhury/"
              target="_blank"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="w-8 h-8 text-red-500 hover:text-red-600"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <path d="M6 4 A2 2 0 0 1 4 6 A2 2 0 0 1 2 4 A2 2 0 0 1 6 4 z" />
              </svg>
            </a>
            {/* mail */}
            <a href="mailto:shannon.chow@live.com" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-red-500 hover:text-red-600"
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="https://twitter.com/Nyonyannyo" target="_blank">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="w-8 h-8 text-red-500 hover:text-red-600"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="prose max-w-none prose-lb pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <p>{bio_string}</p>
        </div>
      </div>
    </div>
  );
}
