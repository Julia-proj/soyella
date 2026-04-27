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
        <div className="overflow-hidden border-y border-brand-ink/15 py-5 text-brand-blue">
          <div className="marquee-title flex w-max animate-marquee whitespace-nowrap font-display">
            <span className="pr-12">ДЛЯ ТЕБЯ</span>
            <span className="pr-12">ДЛЯ ТЕБЯ</span>
            <span className="pr-12">ДЛЯ ТЕБЯ</span>
            <span className="pr-12">ДЛЯ ТЕБЯ</span>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div data-reveal="" className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">Для кого</p>
            <h2 className="section-title mt-4 font-display">
              Для тебя, если ты выбираешь среду сильнее случайности
            </h2>
          </div>

          <ul className="grid gap-px bg-brand-ink/15 lg:col-span-7 md:grid-cols-2">
            {ITEMS.map((item, i) => (
              <li
                key={item.n}
                data-reveal=""
                data-delay={i * 60}
                className="group bg-brand-white p-7 transition-colors duration-500 hover:bg-brand-butter"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-serif text-4xl italic text-brand-blue">{item.n}</span>
                  <span className="size-2 rounded-full bg-brand-blue" aria-hidden />
                </div>
                <h3 className="mt-7 font-serif text-3xl uppercase leading-none">{item.t}</h3>
                <p className="mt-4 leading-relaxed text-brand-ink/70">{item.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
