const ITEMS = [
  { n: "01", t: "Ищешь окружение", d: "Хочешь быть среди тех, кто тоже растет и действует." },
  { n: "02", t: "Хочешь рост", d: "В деле, теле, отношениях и личной стратегии." },
  { n: "03", t: "Любишь красоту и здоровье", d: "Умный подход без маркетинговых ловушек." },
  { n: "04", t: "Ценишь качество", d: "Предпочитаешь одну сильную встречу десятку случайных." },
  { n: "05", t: "Новая в Мадриде", d: "Ищешь своих и хочешь быстрее войти в среду." },
  { n: "06", t: "Хочешь знакомства уровня", d: "Рядом женщины, с которыми хочется быть на связи." },
]

export function ForWhoSection() {
  return (
    <section aria-label="Для кого SOY ELLA" className="section-pad overflow-hidden bg-brand-cream">
      <div className="site-shell">
        <div className="mt-0 grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-start">
          <div data-reveal="" className="lg:col-span-5">
            <p className="text-[0.65rem] font-bold uppercase tracking-widest text-brand-blue sm:text-xs">Для кого</p>
            <h2 className="section-title mt-3 font-display sm:mt-4">
              Для тебя, если ты выбираешь среду сильнее случайности
            </h2>
          </div>

          <ul className="grid gap-px bg-brand-ink/10 sm:grid-cols-2 lg:col-span-7">
            {ITEMS.map((item, i) => (
              <li
                key={item.n}
                data-reveal=""
                data-delay={i * 60}
                className="group bg-brand-white p-5 transition-colors duration-500 hover:bg-brand-butter sm:p-7 md:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-serif text-3xl italic text-brand-blue sm:text-4xl">{item.n}</span>
                  <span className="size-1.5 rounded-full bg-brand-blue sm:size-2" aria-hidden />
                </div>
                <h3 className="mt-4 font-serif text-xl uppercase leading-none sm:mt-6 sm:text-2xl md:text-3xl">{item.t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-ink/65 sm:mt-3 sm:text-base">{item.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
