import { Quote } from "lucide-react"

const REVIEWS = [
  {
    text: "Пришла без ожиданий, ушла с тремя подругами и новым клиентом. Формат редкий для Мадрида.",
    name: "Алина",
    role: "основательница студии",
  },
  {
    text: "Это не нетворкинг ради нетворкинга. Это про женщин, которые живут интересно и делятся честно.",
    name: "Вика",
    role: "маркетолог",
  },
  {
    text: "Наконец-то встреча, где не стыдно быть серьезной и красивой одновременно. Вернусь на каждую.",
    name: "Мария",
    role: "архитектор",
  },
  {
    text: "Переехала в Мадрид недавно и нашла своих именно здесь. Спасибо за такое бережное комьюнити.",
    name: "Ксения",
    role: "продюсер",
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="reviews"
      aria-label="Отзывы участниц"
      className="section-pad bg-brand-butter text-brand-ink"
    >
      <div className="site-shell">
        <div data-reveal="" className="max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">Отзывы</p>
          <h2 className="section-title mt-4 font-display">
            Что говорят участницы
          </h2>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {REVIEWS.map((review, index) => (
            <li
              key={review.name}
              data-reveal=""
              data-delay={index * 90}
              className={
                "relative min-h-[18rem] p-8 md:p-10 " +
                (index % 2 === 0 ? "bg-brand-white" : "bg-brand-blue text-white")
              }
            >
              <Quote
                className={
                  "absolute right-6 top-6 size-9 " +
                  (index % 2 === 0 ? "text-brand-blue/25" : "text-brand-butter/50")
                }
                aria-hidden
              />
              <p className="max-w-2xl pr-10 font-serif text-3xl uppercase leading-[1.02] md:text-4xl">
                {review.text}
              </p>
              <div className="mt-10">
                <p className="text-sm font-bold uppercase tracking-wider">{review.name}</p>
                <p className={
                  "mt-1 text-xs uppercase tracking-widest " +
                  (index % 2 === 0 ? "text-brand-ink/55" : "text-white/65")
                }>
                  {review.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
