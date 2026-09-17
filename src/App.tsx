import { useState } from 'react';
import { CalendarDays, ChevronRight, Menu, Search, Trophy, X } from 'lucide-react';

const news = [
  { tag: 'FUTEBOL', title: 'Mercado da bola movimenta os grandes clubes', text: 'Confira as principais novidades, negociações e bastidores do futebol.', time: 'Há 18 min' },
  { tag: 'BRASILEIRÃO', title: 'Rodada promete grandes duelos neste fim de semana', text: 'Veja os jogos, horários e tudo o que você precisa acompanhar.', time: 'Há 42 min' },
  { tag: 'INTERNACIONAL', title: 'Craques entram em campo em noite decisiva', text: 'Partidas importantes agitam os campeonatos internacionais.', time: 'Há 1 h' },
];

const games = [
  ['Flamengo', 'Palmeiras', '19:00'],
  ['Corinthians', 'São Paulo', '21:30'],
  ['Barcelona', 'Real Madrid', '16:00'],
];

export function App() {
  const [menu, setMenu] = useState(false);
  const [sport, setSport] = useState('Todos');

  return <div className="app">
    <header className="header">
      <div className="container nav">
        <button className="icon mobile" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X/> : <Menu/>}</button>
        <a className="logo" href="#inicio"><span>SPOR</span>CHUT</a>
        <nav className={menu ? 'links open' : 'links'}>
          {['Início','Futebol','Basquete','Vôlei','Notícias','Jogos','Tabelas'].map(x => <a href={'#'+x.toLowerCase()} key={x}>{x}</a>)}
        </nav>
        <button className="search" aria-label="Pesquisar"><Search size={20}/></button>
      </div>
    </header>

    <main id="inicio">
      <section className="hero container">
        <div className="hero-main">
          <div className="hero-copy"><span className="badge">DESTAQUE</span><h1>O esporte não para.<br/><em>A gente também não.</em></h1><p>Notícias, resultados, jogos e tudo que acontece no mundo dos esportes em um só lugar.</p><button className="primary">Ver últimas notícias <ChevronRight size={18}/></button></div>
        </div>
        <aside className="hero-side"><span className="eyebrow">AGORA</span><h2>Jogos de hoje</h2>{games.map(([a,b,t])=><div className="mini-game" key={a}><div><strong>{a}</strong><small>vs. {b}</small></div><b>{t}</b></div>)}<a className="all" href="#jogos">Ver todos os jogos <ChevronRight size={16}/></a></aside>
      </section>

      <section className="ticker"><div className="container ticker-inner"><Trophy size={18}/><strong>EM DESTAQUE</strong><span>Confira os principais acontecimentos esportivos de hoje</span></div></section>

      <section className="container section" id="notícias">
        <div className="section-head"><div><span className="eyebrow">ÚLTIMAS ATUALIZAÇÕES</span><h2>Notícias em destaque</h2></div><a href="#todas">Ver todas <ChevronRight size={16}/></a></div>
        <div className="news-grid">{news.map(n=><article className="card" key={n.title}><div className="photo"><span>{n.tag}</span></div><div className="card-body"><small>{n.time}</small><h3>{n.title}</h3><p>{n.text}</p><a href="#ler">Ler notícia <ChevronRight size={15}/></a></div></article>)}</div>
      </section>

      <section className="dark-section" id="jogos"><div className="container section"><div className="section-head light"><div><span className="eyebrow">PLACARES E PARTIDAS</span><h2>Jogos de hoje</h2></div></div><div className="filters">{['Todos','Futebol','Basquete','Vôlei'].map(x=><button className={sport===x?'active':''} onClick={()=>setSport(x)} key={x}>{x}</button>)}</div><div className="schedule"><div className="schedule-date"><CalendarDays size={18}/> HOJE, 17 DE SETEMBRO</div>{games.map(([a,b,t])=><div className="match" key={a}><span className="league">{sport === 'Todos' ? 'CAMPEONATO' : sport.toUpperCase()}</span><div className="teams"><strong>{a}</strong><span>×</span><strong>{b}</strong></div><time>{t}</time></div>)}</div></div></section>
    </main>

    <footer><div className="container footer"><div className="logo"><span>SPOR</span>CHUT</div><p>Seu portal esportivo. Informação, emoção e paixão pelo esporte.</p><small>© 2026 Sporchut. Todos os direitos reservados.</small></div></footer>
  </div>;
}
