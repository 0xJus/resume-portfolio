import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`hi! i'm ${DATA.name.split(" ")[0]}🧙🏾`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      {/* Rest of your existing code */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Technical Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold">Graphic & Fashion Designs</h3>
            <h4 className="text-lg text-gray-500">2022-2025</h4>
          </div>
          <section id="designs">
            <div className="columns-2 gap-4 sm:columns-3">
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/1.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/2.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/3.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/4.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/5.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/6.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/7.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/8.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/10.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/11.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/12.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/13.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/14.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/15.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/16.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/17.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/18.png" />
              </div>
              <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px) translateZ(0px)" }}>
                <img alt="" loading="lazy" width="1600" height="900" decoding="async" data-nimg="1" className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" style={{ color: "transparent" }} src="designs/graphics/19.png" />
              </div>
            </div>
          </section>
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold">Social Media Marketing & Ad Content</h3>
            <h4 className="text-lg text-gray-500">2023-2024</h4>
          </div>
          <section id="ads" className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex justify-center items-center">
              <div className="w-full">
                <img
                  alt=""
                  loading="lazy"
                  width="1600"
                  height="900"
                  decoding="async"
                  className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover"
                  src="designs/creative/1.gif"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full">
                <img
                  alt=""
                  loading="lazy"
                  width="1600"
                  height="900"
                  decoding="async"
                  className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover"
                  src="designs/creative/2.gif"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full">
                <img
                  alt=""
                  loading="lazy"
                  width="1600"
                  height="900"
                  decoding="async"
                  className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover"
                  src="designs/creative/3.gif"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full">
                <img
                  alt=""
                  loading="lazy"
                  width="1600"
                  height="900"
                  decoding="async"
                  className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover"
                  src="designs/creative/1.png"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full">
                <img
                  alt=""
                  loading="lazy"
                  width="1600"
                  height="900"
                  decoding="async"
                  className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover"
                  src="designs/creative/7.png"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full">
                <img
                  alt=""
                  loading="lazy"
                  width="1600"
                  height="900"
                  decoding="async"
                  className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover"
                  src="designs/creative/8.png"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full">
                <img
                  alt=""
                  loading="lazy"
                  width="1600"
                  height="900"
                  decoding="async"
                  className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover"
                  src="designs/creative/4.gif"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full">
                <img
                  alt=""
                  loading="lazy"
                  width="1600"
                  height="900"
                  decoding="async"
                  className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover"
                  src="designs/creative/5.gif"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full">
                <img
                  alt=""
                  loading="lazy"
                  width="1600"
                  height="900"
                  decoding="async"
                  className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover"
                  src="designs/creative/6.gif"
                />
              </div>
            </div>
          </section>
            <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold">Web Development Projects</h3>
            <h4 className="text-lg text-gray-500">2022-2025</h4>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  // video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
            <div className="space-y-3">
              <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold">Connect With Me</h3>
              </div>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                If you have any questions regarding my resume, design portfolio, please feel free to reach out to me via email, as listed here.
                </p>
            </div>
      </section>
    </main>
  );
}