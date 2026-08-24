import { useMemo, useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import { QUIZ } from "@/lib/chemistry/ozone";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Answers = Record<string, string>;

export function QuizLab() {
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return QUIZ.reduce(
      (sum, q) => sum + (answers[q.id] === q.answer ? 1 : 0),
      0,
    );
  }, [answers]);

  const complete = Object.keys(answers).length === QUIZ.length;

  return (
    <section id="quiz" className="scroll-mt-24">
      <p className="text-xs font-medium tracking-widest text-oxygen-soft uppercase">
        Check yourself
      </p>
      <h2 className="mt-1 font-display text-3xl text-fg">
        Six questions on O₃
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Choose an answer for each item, then reveal the score. Explanations
        use the same formal-charge arithmetic as the figure.
      </p>

      <ol className="mt-6 flex flex-col gap-4">
        {QUIZ.map((q, index) => {
          const picked = answers[q.id];
          return (
            <li
              key={q.id}
              className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5"
            >
              <p className="text-sm font-medium text-fg">
                <span className="mr-2 text-muted tabular-nums">
                  {index + 1}.
                </span>
                {q.prompt}
              </p>
              <div className="mt-3 grid gap-2">
                {q.choices.map((choice) => {
                  const selected = picked === choice.id;
                  const correct = submitted && choice.id === q.answer;
                  const wrong = submitted && selected && choice.id !== q.answer;
                  return (
                    <button
                      key={choice.id}
                      type="button"
                      onClick={() => {
                        if (submitted) return;
                        setAnswers((prev) => ({ ...prev, [q.id]: choice.id }));
                      }}
                      className={cn(
                        "flex min-h-11 items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors duration-150",
                        selected && !submitted && "bg-elevated text-fg",
                        !selected && !submitted && "bg-bg text-muted hover:text-fg",
                        correct && "bg-elevated text-fg",
                        wrong && "bg-oxygen/15 text-fg",
                        submitted && !correct && !wrong && "bg-bg text-subtle",
                      )}
                    >
                      <span>{choice.label}</span>
                      {correct ? <Check className="size-4 text-oxygen-soft" /> : null}
                      {wrong ? <X className="size-4 text-oxygen-soft" /> : null}
                    </button>
                  );
                })}
              </div>
              {submitted ? (
                <p className="mt-3 text-sm leading-relaxed text-muted">{q.why}</p>
              ) : null}
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {!submitted ? (
          <Button onClick={() => setSubmitted(true)} disabled={!complete}>
            Check answers
          </Button>
        ) : (
          <>
            <p className="font-display text-2xl text-fg tabular-nums">
              {score} / {QUIZ.length}
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
              }}
            >
              <RotateCcw />
              Try again
            </Button>
          </>
        )}
        {!complete && !submitted ? (
          <p className="text-xs text-subtle">Answer every item to check.</p>
        ) : null}
      </div>
    </section>
  );
}
