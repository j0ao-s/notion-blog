import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'
import Contact from './contact'
import Footer from '../components/footer'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        {/*<img
          src="/vercel-and-notion.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        />*/}
        <h1>Meu Blog Pessoal</h1>
        <h2>
          Por:{' '}
          <ExtLink
            href="https://www.linkedin.com/in/joâo-manoel-a789781a2/"
            className="dotted"
            style={{ color: 'inherit' }}
          >
            João Manoel
          </ExtLink>
        </h2>

        {/*<Features />*/}

        <div className="explanation">
          <p>
            Bem vindo ao meu Blog Pessoal, me chamo João Manoel e sou um
            apaixonado por programação e desenvolvimento, acredito na capacidade
            transformadora da Tecnologia, que utilizada como ferramenta pode
            abrir muitas portas e oportunidades. Atualmente Estou concluindo
            minha Graduação em Engenharia de Software e meu Ensino Técnico em
            Desenvolvimento de Jogos.
          </p>

          <p>
            Neste Blog vou documentar minha jornada, trazer minhas participações
            em eventos, insights e muito mais sobre a área da programação. O{' '}
            <ExtLink href="https://vercel.com/templates?type=blog&framework=next.js&search=notion">
              Template
            </ExtLink>{' '}
            usado neste Blog foi disponibilizado na loja de templates da Vercel,
            escrito e desenvolvido por{' '}
            <ExtLink href="https://github.com/ijjk">JJ Kasper,</ExtLink> ele é
            desenvolvido em <ExtLink href="https://nextjs.org">Next.JS</ExtLink>{' '}
            e integrado ao{' '}
            <ExtLink href="https://www.notion.com">Notion,</ExtLink> onde o
            utilizo como CMS.
          </p>
        </div>

        {/*<Footer/>*/}
      </div>
    </>
  )
}
