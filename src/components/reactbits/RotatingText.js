'use client';

import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const RotatingText = forwardRef((props, ref) => {
  const {
    texts,
    transition = { type: 'spring', damping: 25, stiffness: 300 },
    initial = { y: '100%', opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: '-120%', opacity: 0 },
    animatePresenceMode = 'wait',
    animatePresenceInitial = false,
    rotationInterval = 2000,
    staggerDuration = 0,
    staggerFrom = 'first',
    loop = true,
    auto = true,
    splitBy = 'characters',
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const splitIntoCharacters = (text) => {
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
      return Array.from(segmenter.segment(text), segment => segment.segment);
    }
    return Array.from(text);
  };

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex];
    if (splitBy === 'characters') {
      const words = currentText.split(' ');
      return words.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== words.length - 1
      }));
    }
    if (splitBy === 'words') {
      return currentText.split(' ').map((word, i, arr) => ({
        characters: [word],
        needsSpace: i !== arr.length - 1
      }));
    }
    if (splitBy === 'lines') {
      return currentText.split('\n').map((line, i, arr) => ({
        characters: [line],
        needsSpace: i !== arr.length - 1
      }));
    }
    return [{ characters: [currentText], needsSpace: false }];
  }, [texts, currentTextIndex, splitBy]);

  const getStaggerDelay = useCallback(
    (index, total) => {
      if (staggerDuration === 0) return 0;
      const totalDuration = staggerDuration;
      if (staggerFrom === 'first') {
        return (index / Math.max(total - 1, 1)) * totalDuration;
      }
      if (staggerFrom === 'last') {
        return ((total - 1 - index) / Math.max(total - 1, 1)) * totalDuration;
      }
      if (staggerFrom === 'center') {
        const center = (total - 1) / 2;
        return (Math.abs(index - center) / Math.max(center, 1)) * totalDuration;
      }
      if (typeof staggerFrom === 'number') {
        return (Math.abs(index - staggerFrom) / Math.max(total - 1, 1)) * totalDuration;
      }
      return 0;
    },
    [staggerDuration, staggerFrom]
  );

  const handleNext = useCallback(() => {
    setCurrentTextIndex(prev => {
      const nextIndex = prev + 1;
      if (nextIndex >= texts.length) {
        if (!loop) return prev;
        return 0;
      }
      return nextIndex;
    });
    onNext?.(currentTextIndex);
  }, [texts.length, loop, onNext, currentTextIndex]);

  useImperativeHandle(ref, () => ({ next: handleNext }), [handleNext]);

  useEffect(() => {
    if (!auto) return;
    const interval = setInterval(handleNext, rotationInterval);
    return () => clearInterval(interval);
  }, [handleNext, rotationInterval, auto]);

  return (
    <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
      <motion.span
        key={currentTextIndex}
        className={cn('rotating-text', mainClassName)}
        style={{ display: 'inline-flex', flexWrap: 'wrap', whiteSpace: 'pre-wrap', position: 'relative' }}
        {...rest}
      >
        <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }}>
          {texts[currentTextIndex]}
        </span>
        {elements.map((wordObj, wordIndex) => (
          <span
            key={wordIndex}
            className={splitLevelClassName}
            style={{ display: 'inline-flex', overflow: 'hidden' }}
          >
            {wordObj.characters.map((char, charIndex) => {
              const flatIndex = elements
                .slice(0, wordIndex)
                .reduce((sum, w) => sum + w.characters.length, 0) + charIndex;
              const totalChars = elements.reduce((sum, w) => sum + w.characters.length, 0);

              return (
                <motion.span
                  key={charIndex}
                  initial={initial}
                  animate={animate}
                  exit={exit}
                  transition={{
                    ...transition,
                    delay: getStaggerDelay(flatIndex, totalChars)
                  }}
                  className={elementLevelClassName}
                  style={{ display: 'inline-block' }}
                  aria-hidden="true"
                >
                  {char}
                </motion.span>
              );
            })}
            {wordObj.needsSpace && (
              <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
            )}
          </span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
});

RotatingText.displayName = 'RotatingText';

export default RotatingText;
