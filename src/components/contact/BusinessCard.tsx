import { SocialIcon } from "react-social-icons";

export default function BusinessCard() {
  return <div>
      <div className="bg-gray-700 text-gray-300 flex items-center py-20 px-8">
        <header className="grow w-1/3 text-right">
          <h1 className="text-4xl font-bold">Ukjin Yang</h1>
          <h2 className="text-2xl">The Freelancer</h2>
        </header>
        <div className="w-1 h-16 overflow-hidden bg-gray-500 mx-4">&nbsp;</div>
        <footer className="grow w-2/3 grid">
          <div className="flex flex-wrap justify-center [&>*]:ml-4 [&>*]:mb-4 [&>*]:md:mb-0">
            <SocialIcon bgColor="rgb(209 213 219)" url="https://dev.to/composite" />
            <SocialIcon bgColor="rgb(209 213 219)" url="https://velog.io/composite" network="rss" />
            <SocialIcon bgColor="rgb(209 213 219)" url="https://github.com/composite" />
            <SocialIcon bgColor="rgb(209 213 219)" url="https://facebook.com/ukjinplant" />
            <SocialIcon bgColor="rgb(209 213 219)" url="https://linkedin.com/in/ukjinplant" />
            <SocialIcon bgColor="rgb(209 213 219)" url="mailto:ukjinplant@msn.com" />
          </div>
        </footer>
      </div>
      <div className="relative bg-gray-700">
        <div className="sticky bottom-0 w-full bg-gray-900 text-gray-500 text-center text-lg py-4 [&>a>img]:inline-block [&>a>img]:w-8 [&>a>img]:mx-2">
            Powered by
            <a target="_blank" href="https://astro.build/"><img src="/astro.svg" /></a>
            Astro with
            <a target="_blank" href="https://ko.reactjs.org/"><img src="//cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" /></a>
            <a target="_blank" href="https://vuejs.org/"><img src="//cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="vue" /></a>
            <a target="_blank" href="https://svelte.dev/"><img src="//cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="svelte" /></a>
            <a target="_blank" href="https://tailwindcss.com/"><img src="//cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind" /></a>
        </div>
        <div className="sticky bottom-0 w-full h-8 bg-gray-700"></div>
      </div>
    </div>;
}
