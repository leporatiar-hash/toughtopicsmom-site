"use client";

import { useState } from "react";

// One place to update if a dedicated Tough Topics Mom inbox is set up later.
const DEST_EMAIL = "kimberlykingbooks@gmail.com";

const inputClasses =
  "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-light";

export default function ShareYourStoryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [story, setStory] = useState("");
  const [lesson, setLesson] = useState("");
  const [credit, setCredit] = useState("");
  const [followup, setFollowup] = useState("");
  const [extra, setExtra] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");

  function buildBody() {
    return [
      `Name: ${name}`,
      `Email: ${email}`,
      `Child's age at the time: ${age}`,
      "",
      "What happened:",
      story,
      "",
      "What they learned / would tell another parent:",
      lesson,
      "",
      `Credit preference: ${credit}`,
      `OK to follow up: ${followup}`,
      "",
      "Anything else:",
      extra,
    ].join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = "Online safety story submission";
    const mailto = `mailto:${DEST_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildBody())}`;
    window.location.href = mailto;
    setConfirmMessage(
      `Your email app should be opening now with your story ready to send. If nothing happens, use the copy option below and paste it into a new email to ${DEST_EMAIL}.`
    );
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(buildBody());
      setConfirmMessage(`Copied. Paste this into an email to ${DEST_EMAIL}.`);
    } catch {
      alert("Copy failed. Please select and copy your answers manually.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Your name <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address <span className="text-accent">*</span>
        </label>
        <p className="mt-1 text-sm italic text-gray-500">
          In case I have a follow-up question.
        </p>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
          Child&apos;s age at the time of the story
        </label>
        <input
          id="age"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="story" className="block text-sm font-medium text-gray-700">
          What happened? <span className="text-accent">*</span>
        </label>
        <p className="mt-1 text-sm italic text-gray-500">
          As much or as little detail as you&apos;re comfortable with. What app or
          platform, what happened, how you found out, what you did next.
        </p>
        <textarea
          id="story"
          required
          rows={4}
          value={story}
          onChange={(e) => setStory(e.target.value)}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="lesson" className="block text-sm font-medium text-gray-700">
          What did you learn, or what would you tell another parent?{" "}
          <span className="text-accent">*</span>
        </label>
        <textarea
          id="lesson"
          required
          rows={4}
          value={lesson}
          onChange={(e) => setLesson(e.target.value)}
          className={inputClasses}
        />
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-gray-700">
          How would you like your story credited? <span className="text-accent">*</span>
        </legend>
        <div className="mt-2 flex flex-col gap-2">
          {[
            "Use my first name only",
            "Use my first name and last initial",
            "Keep me fully anonymous (“a parent shared...”)",
          ].map((option) => (
            <label key={option} className="flex items-start gap-2 text-sm text-gray-700">
              <input
                type="radio"
                name="credit"
                required
                value={option}
                checked={credit === option}
                onChange={(e) => setCredit(e.target.value)}
                className="mt-1"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-medium text-gray-700">
          May I contact you with follow-up questions? <span className="text-accent">*</span>
        </legend>
        <div className="mt-2 flex flex-col gap-2">
          {["Yes", "No, please use only what I've written"].map((option) => (
            <label key={option} className="flex items-start gap-2 text-sm text-gray-700">
              <input
                type="radio"
                name="followup"
                required
                value={option}
                checked={followup === option}
                onChange={(e) => setFollowup(e.target.value)}
                className="mt-1"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="extra" className="block text-sm font-medium text-gray-700">
          Anything else you want me to know?
        </label>
        <textarea
          id="extra"
          rows={3}
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="self-start rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-accent-dark hover:shadow-md"
      >
        Send my story
      </button>

      <p className="text-sm text-gray-500">
        If your email app doesn&apos;t open automatically,{" "}
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-md border border-brand px-3 py-1 text-brand-dark transition-colors hover:bg-brand hover:text-white"
        >
          copy my answers
        </button>{" "}
        to paste into an email instead.
      </p>

      {confirmMessage && (
        <div
          role="status"
          className="rounded-lg border-l-4 border-brand bg-brand-light/20 px-4 py-3 text-sm text-brand-dark"
        >
          {confirmMessage}
        </div>
      )}
    </form>
  );
}
