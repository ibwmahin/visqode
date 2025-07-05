import React, { useState, useRef, useEffect } from "react";

const hoverSound =
  typeof Audio !== "undefined"
    ? new Audio(
        "https://assets.mixkit.co/sfx/preview/mixkit-click-melodic-tone-1129.mp3",
      )
    : null;

const questions = [
  {
    question: "What services does VisQode offer?",
    answer:
      "VisQode specializes in web design, web development, brand strategy, UI/UX design, and performance optimization tailored to elevate your digital presence.",
  },
  {
    question: "How does VisQode help build a strong brand?",
    answer:
      "We craft custom websites that reflect your brand’s identity and values, ensuring a consistent and memorable user experience across all digital touchpoints.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most web design and development projects take between 3 to 6 weeks, depending on scope and complexity.",
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer:
      "Absolutely. All our websites are fully responsive and optimized for all screen sizes and devices.",
  },
  {
    question: "Can VisQode redesign my existing website?",
    answer:
      "Yes, we offer complete website redesigns to enhance user experience, modernize your visuals, and align your site with your current brand identity.",
  },
  {
    question: "Do you provide ongoing website support and updates?",
    answer:
      "Yes. We offer flexible support plans to keep your site secure, updated, and performing at its best long after launch.",
  },
  {
    question: "Is SEO included in your website packages?",
    answer:
      "Yes, we implement on-page SEO best practices by default. We also offer advanced SEO services upon request.",
  },
  {
    question: "Can you help with branding from scratch?",
    answer:
      "Definitely. We offer brand strategy, logo creation, visual identity design, and guidelines to help you launch with impact.",
  },
  {
    question: "Do I need to provide content, or can VisQode handle it?",
    answer:
      "We can work with your content or create it for you. Our team offers copywriting, content strategy, and even basic photography and video production.",
  },
  {
    question: "What makes VisQode different from other agencies?",
    answer:
      "VisQode combines technical precision with creative excellence. We focus on personalization, attention to detail, and scalable results—not just cookie-cutter templates.",
  },
];

const QuestionBox = ({ question, answer, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  const handleHover = () => {
    if (hoverSound && hoverSound.play) {
      hoverSound.currentTime = 0;
      hoverSound.play().catch(() => {});
    }
  };

  return (
    <div
      onClick={onToggle}
      onMouseEnter={handleHover}
      className="cursor-pointer backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-2xl border border-white/10 p-5 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
    >
      <div className="flex justify-between items-center">
        <p className="text-white text-base font-medium">{question}</p>
        <i
          className={`bx ${
            isOpen ? "bx-minus" : "bx-plus"
          } text-2xl text-[#4A90E2] transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`overflow-hidden transition-all duration-500 ease-in-out mt-3 text-sm text-white/70`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openStates, setOpenStates] = useState(
    Array(questions.length).fill(false),
  );

  const toggleQuestion = (index) => {
    setOpenStates((prev) =>
      prev.map((open, i) => (i === index ? !open : open)),
    );
  };

  return (
    <section className="bg-gradient-to-t from-transparent via-blue-600/10 to-transparent py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="bg-blue-950/50 border border-neutral-500/50 px-5 py-1 rounded-full text-sm text-white uppercase tracking-wide text-center">
          FAQ
        </div>

        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-[0_2px_20px_rgba(0,255,255,0.4)]">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Got questions? We’ve got answers on everything from websites to
            brand-building strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {questions.map((q, index) => (
            <QuestionBox
              key={index}
              question={q.question}
              answer={q.answer}
              isOpen={openStates[index]}
              onToggle={() => toggleQuestion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
