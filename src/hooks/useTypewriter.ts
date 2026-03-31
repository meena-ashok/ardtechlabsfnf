import { useState, useEffect, useCallback } from "react";

export function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        setText(currentWord.slice(0, text.length + 1));
      } else {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      if (text.length > 0) {
        setText(currentWord.slice(0, text.length - 1));
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [text, wordIndex, isDeleting, words, pauseTime]);

  useEffect(() => {
    const delay = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return text;
}
