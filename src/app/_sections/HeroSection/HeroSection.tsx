import Hero from "@/components/common/Hero";
import Link from "next/link";
import styles from "./HeroSection.module.scss";
import hero from './hero.json';
import Image from "next/image";
import Button from "@/components/common/Button";
import { BsGithub } from "react-icons/bs";

const HeroSection1 = () => {
    return (<Hero
        left
        text={
          <>
            I&apos;m a Frontend Web Developer currently based in{' '}
            <span className="BOLD">Prague, Czech Republic</span>. My journey in web development
            began with a solid foundation in Computer Science from the{' '}
            <Link href="https://www.birmingham.ac.uk" target="_blank">
              University of Birmingham
            </Link>
            . I&apos;ve had the privilege of working on diverse projects, where I&apos;ve learned
            the value of collaboration and problem-solving in the world of web development. I look
            forward to continuing this journey, contributing to innovative solutions, and working
            alongside talented professionals.
          </>
        }
        title={hero[0].title}
        image={'/images/undraw/undraw_developer_activity_re_39tg.svg'}
        imageAlt={hero[0].imageAlt}
        buttonText={hero[0].buttonText}
        id="about"
      />);
};

const HeroSection2 = () => {
  return (<Hero
    text={
      <>
        My primary focus as a Frontend Web Developer revolves around{' '}
        <span className="BOLD">crafting intuitive and visually engaging web experiences</span>.
        What truly excites me is the art of simplification. I believe that the best web
        solutions are those that make complex tasks feel effortless to users. Ultimately, I aim
        to bring a touch of simplicity and elegance to the digital world, one project at a time.
      </>
    }
    title={hero[1].title}
    image={'/images/undraw/undraw_hacker_mindset_re_8a33.svg'}
    imageAlt={hero[1].imageAlt}
    buttonText={hero[1].buttonText}
  />);
}

const HeroSection3 = () => {
  return (
    <section className={styles.HeroSection3}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Enjoyed the website?</h3>
          <p>
            Did you know that the website code is <b>open-sourced</b> on GitHub? If you want to support me,
            you can <span className="MAGIC">star</span> the repository.
          </p>
          <Button style={4} icon={<BsGithub />} text="View Project on GitHub" link="https://github.com/tomasgrusz/personal-web" />
        </div>
      </div>
      <Image
        src="/images/undraw/undraw_phone_call.svg"
        alt="Web Developer"
        width={500}
        height={252}
        style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
        className={styles.image}
      />
    </section>
  );
};

export {HeroSection1, HeroSection2, HeroSection3};