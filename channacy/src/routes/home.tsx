import { A } from "@solidjs/router";

export default function Home() {
  return (
    <>
      <div class="flex-1 grow w-2/3 text-gray-900	py-10 text-left">
        <h1 class="max-4-xs text-4xl my-8 font-semibold">
          👋 Hello, I am Channacy (sha·nan·cee)
        </h1>
        <p class="text-xl my-4">I am a current junior at Drexel University studying computer science and mathematics with a focus on <strong>algorithms & theory</strong> and <strong>computer systems & architecture.</strong></p>
        <p class=" text-xl my-4">Currently, I’m volunteering with the <u><a href="https://drexel.edu/cci/research/centers-labs/Interactive%20Systems%20for%20Healthcare-IS4H/">IS4H Lab</a></u> and working part-time at <u><a href="https://www.codepath.org/" target="_blank">CodePath</a></u>, where I assist teaching technical problem-solving skills to over 100 students and helping build a diverse community of engineers. In the past, I spent 12 months (two co-ops) building fintech applications at <a href="https://sig.com/" target="_blank"><u>Susquehanna International Group</u></a>.</p>
        <p class=" text-xl my-4">In my free time, I love exploring new technologies and developing meaningful applications, focusing on everything from user interface design to seamless delivery. Check out some of my <a href="/projects"><u>selected projects</u></a> to see my work in action!</p>
        <div class="flex my-8 gap-4">
          <A href="https://github.com/channacy" target="_blank">
            <img class="h-14 w-14" src="assets/github.png" />
          </A>
          <A href="mailto:channacyun@gmail.com" target="_blank">
            <img class="h-14 w-14" src="assets/gmail.png" />
          </A>
          <A
            href="https://www.linkedin.com/in/channacy-un/"
            target="_blank"
          >
            <img class="h-14 w-14" src="assets/linkedin.png" />
          </A>
        </div>
      </div>
    </>

  );
}
