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
    text: "Уходила с реальными контактами и желанием вернуться. Редко где одновременно красиво, по делу и по-настоящему тепло.",
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
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-brand-blue sm:text-xs">Отзывы</p>
          <h2 className="section-title mt-3 font-display sm:mt-4">
            Что говорят участницы
          </h2>
        </div>

        <ul className="mt-8 grid gap-3 sm:mt-14 sm:gap-4 md:grid-cols-2">
          {REVIEWS.map((review, index) => (
            <li
              key={review.name}
              data-reveal=""
              data-delay={index * 90}
              className={
                "relative flex flex-col p-5 sm:min-h-[20rem] sm:p-7 md:min-h-[22rem] md:p-10 " +
                (index % 2 === 0 ? "bg-brand-white" : "bg-brand-blue text-white")
              }
            >
              <Quote
                className={
                  "absolute right-4 top-4 size-6 sm:right-6 sm:top-6 sm:size-9 " +
                  (index % 2 === 0 ? "text-brand-blue/25" : "text-brand-butter/50")
                }
                aria-hidden
              />
              <p className="max-w-2xl pr-6 font-serif text-lg uppercase leading-[1.1] sm:pr-8 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                {review.text}
              </p>
              <div className="mt-auto pt-5 sm:pt-8 md:pt-10">
                <p className="text-xs font-bold uppercase tracking-wider sm:text-sm">{review.name}</p>
                <p className={
                  "mt-0.5 text-[0.65rem] uppercase tracking-widest sm:mt-1 sm:text-xs " +
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
