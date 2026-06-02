"use client";

import Lenis from "lenis";
import Image from "next/image";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealOnScroll } from "@/app/components/RevealOnScroll";

const page = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      orientation: "vertical",
      wheelMultiplier: 1.2,
    });

    lenis.scrollTo(0, { immediate: true });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <div className="tw:flex tw:flex-col tw:justify-center tw:items-center tw:min-h-screen tw:gap-4 tw:px-6">
        <h1 className="tw:text-6xl tw:font-extrabold tw:tracking-tight tw:bg-linear-to-r tw:from-violet-500 tw:via-fuchsia-500 tw:to-pink-500 tw:bg-clip-text tw:text-transparent tw:select-none tw:md:text-center">
          Welcome To Jiradate Portfolio
        </h1>
        <p className="tw:text-lg tw:text-neutral-400 tw:tracking-widest tw:uppercase">
          Fullstack Developer | Backend Developer
        </p>
      </div>

      <RevealOnScroll>
        <div className="tw:flex tw:md:flex-row tw:flex-col tw:justify-center tw:items-center tw:min-h-screen tw:gap-4 tw:lg:px-0 tw:px-4">
          <div className="tw:relative tw:w-80 tw:h-96 tw:rounded-2xl tw:overflow-hidden">
            <Image
              src="/IMG_1552.JPG"
              alt="my-self"
              fill
              sizes="320px"
              className="tw:object-cover"
            />
          </div>

          <div className="tw:md:flex tw:md:flex-col tw:gap-6 tw:max-w-sm tw:h-96 tw:bg-neutral-900 tw:p-4 tw:rounded-2xl">
            <span className="tw:text-xl tw:font-semibold tw:tracking-widest tw:uppercase tw:text-violet-400">
              About Me
            </span>
            <p className="tw:text-base tw:leading-relaxed tw:text-neutral-300">
              Computer Engineering graduate from Chiang Mai University with
              hands-on experience in full-stack web development and cloud
              infrastructure. Proficient in TypeScript, Vue.js, NestJS, and Go,
              with practical exposure to AWS, Terraform, and Ansible through a
              production internship. Passionate about building clean, scalable
              software and eager to contribute as a full-time software engineer.
            </p>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="tw:flex tw:flex-col tw:justify-center tw:items-center tw:min-h-screen tw:px-6 tw:py-20">
          <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:lg:grid-cols-3 tw:gap-4 tw:w-full tw:max-w-4xl">
            {/* Education — full on mobile, 2 col on md+ */}
            <div className="tw:md:col-span-2 tw:bg-neutral-900 tw:rounded-2xl tw:p-6 tw:flex tw:flex-col tw:gap-3">
              <span className="tw:text-xs tw:font-semibold tw:tracking-widest tw:uppercase tw:text-violet-400">
                Education
              </span>
              <p className="tw:text-xl tw:font-bold tw:text-white">
                Chiang Mai University
              </p>
              <p className="tw:text-sm tw:text-neutral-400">
                B.Eng. Computer Engineering · 2021 – 2026
              </p>
              <p className="tw:text-sm tw:text-neutral-500 tw:leading-relaxed">
                Focused on software engineering, data engineering, and cloud
                systems. Completed a senior project building a dashboard web
                application for managing operations within the Lifelong Education
                organization at Chiang Mai University.
              </p>
            </div>

            {/* Skills — 1 col */}
            <div className="tw:bg-neutral-900 tw:rounded-2xl tw:p-6 tw:flex tw:flex-col tw:gap-3">
              <span className="tw:text-xs tw:font-semibold tw:tracking-widest tw:uppercase tw:text-fuchsia-400">
                Skills
              </span>
              <div className="tw:flex tw:flex-wrap tw:gap-2">
                {[
                  "TypeScript",
                  "JavaScript",
                  "Vue.js",
                  "NestJS",
                  "Go",
                  "Python",
                  "AWS",
                  "Terraform",
                  "Terrgrunt",
                  "Docker",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="tw:text-xs tw:bg-neutral-800 tw:text-neutral-300 tw:px-2 tw:py-1 tw:rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience — 1 col */}
            <div className="tw:bg-neutral-900 tw:rounded-2xl tw:p-6 tw:flex tw:flex-col tw:gap-3">
              <span className="tw:text-xs tw:font-semibold tw:tracking-widest tw:uppercase tw:text-pink-400">
                Experience
              </span>
              <p className="tw:text-base tw:font-bold tw:text-white">
                Fullstack Developer Intern
              </p>
              <p className="tw:text-sm tw:text-neutral-400">
                Migrated a legacy website from AdonisJS to NestJS and implemented
                a new frontend theme based on the company&apos;s UX/UI design
                specifications.
              </p>
            </div>

            {/* Soft Skills — 1 col */}
            <div className="tw:bg-linear-to-br tw:from-violet-500/20 tw:to-pink-500/20 tw:border tw:border-violet-500/30 tw:rounded-2xl tw:p-6 tw:flex tw:flex-col tw:gap-3">
              <span className="tw:text-xs tw:font-semibold tw:tracking-widest tw:uppercase tw:text-violet-400">
                Soft Skills
              </span>
              <p className="tw:text-base tw:font-bold tw:text-white">
                Curious & Inquisitive
              </p>
              <p className="tw:text-sm tw:text-neutral-400">
                Naturally driven to ask questions and dig into the
                &ldquo;why&rdquo; — I explore problems thoroughly before jumping
                to solutions.
              </p>
            </div>

            {/* Contact — 1 col */}
            <div className="tw:bg-linear-to-br tw:from-fuchsia-500 tw:to-pink-500 tw:rounded-2xl tw:p-6 tw:flex tw:flex-col tw:justify-between">
              <span className="tw:text-xs tw:font-semibold tw:tracking-widest tw:uppercase tw:text-white/70">
                Contact
              </span>
              <div>
                <p className="tw:text-base tw:font-bold tw:text-white">
                  Open to work
                </p>
                <p className="tw:text-sm tw:text-white/70">
                  jiradate01@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="tw:flex tw:flex-col tw:justify-center tw:items-center tw:min-h-screen tw:px-6 tw:mb-4 tw:md:mb-0">
          <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:w-full tw:max-w-4xl tw:gap-4">
            <div className="tw:relative tw:aspect-3/4 tw:rounded-2xl tw:overflow-hidden">
              <Image
                src="/Screenshot 2026-05-27 162822.png"
                alt="my-self"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="tw:object-cover"
              />
            </div>

            <div className="tw:bg-neutral-900 tw:p-4 tw:rounded-2xl tw:flex tw:flex-col tw:gap-3">
              <span className="tw:font-semibold tw:uppercase tw:text-violet-400 tw:text-2xl">Lifelong Staff Assistant Website
                <p className="tw:text-gray-500 tw:text-sm">
                  Techstack : Next.js, Go, AWS, REST API
                </p>
              </span>
              <div className="tw:flex tw:flex-col tw:gap-2 tw:text-sm tw:text-neutral-300">
                <p>
                  A senior capstone project developed in collaboration with CMU Lifelong Education to replace a manual, Excel-based workflow for managing course opening requests — a process that made it difficult for faculty to track progress and for administrators to maintain records.
                </p>
                <p>
                  The system allows admins to submit and manage course data through a dedicated dashboard, control user permissions by role, and provides real-time status visibility — eliminating the back-and-forth communication that previously slowed operations.
                </p>
                <p className="tw:text-neutral-500">
                  Built with Go (REST API), Next.js, and PostgreSQL.
                </p>

                <h3>
                  For Testing
                </h3>
                <p>
                  Email : test@gmail.com
                </p>
                <p>
                  Password : 1234test
                </p>
              </div>
              <div className="tw:mt-auto tw:flex tw:gap-2">
                <a
                  href="https://lifelong-ed.jrdproject.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tw:rounded-lg tw:bg-violet-600 tw:px-4 tw:py-2 tw:text-sm tw:font-medium tw:text-white tw:transition-colors hover:tw:bg-violet-500"
                >
                  Live Demo →
                </a>
                <a
                  href="/myReport.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tw:rounded-lg tw:border tw:border-neutral-600 tw:px-4 tw:py-2 tw:text-sm tw:font-medium tw:text-neutral-300 tw:transition-colors hover:tw:border-violet-500 hover:tw:text-violet-400"
                >
                  Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="tw:flex tw:flex-col tw:justify-center tw:items-center tw:min-h-screen tw:px-6 tw:mb-4 tw:md:mb-0">
          <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:w-full tw:max-w-4xl tw:gap-4">
            <div className="tw:relative tw:aspect-3/4 tw:rounded-2xl tw:overflow-hidden">
              <Image
                src="/Screenshot 2026-05-27 203048.png"
                alt="my-self"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="tw:object-cover"
              />
            </div>

            <div className="tw:bg-neutral-900 tw:p-4 tw:rounded-2xl tw:flex tw:flex-col tw:gap-3">
              <span className="tw:font-semibold tw:uppercase tw:text-violet-400 tw:text-2xl">Korea-Lens
                <p className="tw:text-gray-500 tw:text-sm">
                  Techstack : Vite, Node.js, AWS, Gemini API key
                </p>
              </span>
              <div className="tw:flex tw:flex-col tw:gap-2 tw:text-sm tw:text-neutral-300">
                <p>
                  A personal project built to explore the Gemini API — users can upload or capture a photo, and the app identifies the object in the image and returns its name in Thai, English, and Korean.
                </p>
                <p>
                  Each result is displayed as a flashcard, making it a practical tool for language learning through everyday objects.
                </p>
                <p className="tw:text-neutral-500">
                  Built with Node.js (REST API) and Vite (Frontend).
                </p>
              </div>
              <div className="tw:mt-auto tw:flex tw:gap-2">
                <a
                  href="https://korea-lens.jrdproject.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tw:rounded-lg tw:bg-violet-600 tw:px-4 tw:py-2 tw:text-sm tw:font-medium tw:text-white tw:transition-colors hover:tw:bg-violet-500"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </>
  );
};

export default page;
