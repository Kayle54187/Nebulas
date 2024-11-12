"use client";

export default function ChallengesSection() {
  return (
    <div className="w-full pt-10" id="journey">
      <h1 className="text-[#130D3A] text-center mb-10 text-4xl font-bold">
        Our E-Lab Challenges
      </h1>
      <div className="h-[800px] grid grid-cols-5">
        <div className="col-span-3">
          <iframe
            width="100%"
            height="100%"
            allowFullScreen
            title="Challenge 1 - Meet the Nebulas"
            src="https://www.youtube.com/embed/wtOOtyriclQ"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
        <div className="col-span-2 bg-[#ECF2F7] p-20">
          <h1 className="text-2xl font-bold mb-4">
            Meet the team: Challenge 1
          </h1>
          <p className="text-[#161C2D] text-justify">
            In this first challenge, we dived into team introductions, sharing
            what drives us, our unique interests, and the sparks of creativity
            we each bring to the table. From surprising fun facts to passions
            that fuel our dedication, this experience was about more than just
            names—it was a celebration of the skills, stories, and dreams that
            define our team. Watch the video to see how each member adds their
            own special energy to Nebulas, setting the stage for the impact
            we’re here to make together!
          </p>
        </div>
      </div>
      <div className="h-[800px] grid grid-cols-5">
        <div className="col-span-2 bg-[#473BF0] text-white p-20">
          <h1 className="text-2xl font-bold mb-4">
            Let&apos;s talk about Massai: Challenge 2
          </h1>
          <p className="text-white text-justify">
            In this challenge, we set out to shine a light on the Maasai people
            of Africa. Known globally for their vibrant culture and unique
            traditions, the Maasai are often seen through a lens of
            misconceptions. We discussed who they truly are—their rich history,
            resilience, and the struggles they face, from land rights to access
            to resources. By exploring their achievements and contributions, we
            aimed to share a fuller picture of their community and celebrate the
            strength of the Maasai people, whose story is an essential part of
            Africa’s heritage.
          </p>
        </div>
        <div className="col-span-3">
          <iframe
            width="100%"
            height="100%"
            allowFullScreen
            src="https://www.youtube.com/embed/BrZSDkGjopc"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Challenge 2 - Let&#39;s talk about Maasai"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </div>
      <div className="h-[800px] grid grid-cols-5">
        <div className="col-span-3">
          <iframe
            width="100%"
            height="100%"
            allowFullScreen
            title="Challenge 3 - A true local hero"
            src="https://www.youtube.com/embed/lIfmGpwvdfc"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="col-span-2 bg-[#20283E] p-20">
          <h1 className="text-2xl font-bold mb-4 text-white">
            A true local hero: Challenge 3
          </h1>
          <p className="text-white text-justify">
            In this challenge, we had the privilege of meeting an inspiring
            woman who has dedicated her life to helping children in need. At her
            own home, she created a kindergarten to teach reading and writing to
            children who lack the means to attend school. We brought biscuits,
            flour, and sugar to support her efforts in providing meals, along
            with educational materials to aid her teaching. Together, we prayed
            with the children, shared our hopes for their futures, and offered
            words of encouragement. This experience reminded us of the impact
            one person can make in uplifting an entire community.
          </p>
        </div>
      </div>
      <div className="h-[800px] grid grid-cols-5">
        <div className="col-span-2 bg-[#68D585] p-20">
          <h1 className="text-2xl font-bold mb-4">
            An interview with Google Developers Group: Challenge 4
          </h1>
          <p className="text-[#161C2D] text-justify">
            In Challenge 4, we had the opportunity to interview a leader from
            the Google Developer Group (GDG) in Rwanda, diving into their
            mission, journey, and the positive impact they’re making in the tech
            community. Our conversation covered both the successes and the
            obstacles GDG faces and the innovative ways they’re tackling these
            challenges. As a highlight, we received an invitation to their
            upcoming annual event on November 16, 2024, giving us an exciting
            chance to witness their work firsthand and engage with a community
            that&apos;s driving technological growth in Rwanda.
          </p>
        </div>
        <div className="col-span-3">
          <iframe
            width="100%"
            height="100%"
            allowFullScreen
            src="https://www.youtube.com/embed/UCeVk2h3_3M"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Challenge 4 - An interview with Google Developers Group"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="h-[800px] grid grid-cols-5">
        <div className="col-span-3">
          <iframe
            width="100%"
            height="100%"
            allowFullScreen
            title="Challenge 5  - Launching our mission!"
            src="https://www.youtube.com/embed/RUpfOoAynhw"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="col-span-2 bg-[#473BF0] p-20">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Launching our mission: Challenge 5
          </h1>
          <p className="text-white text-justify">
            In Challenge 5, we shared the vision behind our work and the mission
            that drives us forward. We presented our goals for creating
            meaningful impact and outlined the strategies we&apos;ll use to
            bring our ideas to life. Additionally, we provided a detailed
            breakdown of how we would allocate a potential $10,000 USD grant,
            demonstrating our commitment to using resources effectively to make
            a lasting difference. This challenge allowed us to clarify our
            purpose and solidify our plan for real, impactful change.
          </p>
        </div>
      </div>
    </div>
  );
}
