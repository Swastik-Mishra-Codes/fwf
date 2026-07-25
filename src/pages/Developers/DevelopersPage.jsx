import React from 'react'
import { motion } from 'motion/react'
import SectionTitle from '../../components/atoms/SectionTitle/SectionTitle.jsx'
import { LampContainer } from '../../components/ui/lamp.jsx'
import { developers } from '../../data/team.js'
import './DevelopersPage.css'

import { FloatingPathsBackground } from '../../components/ui/floating-paths'

export default function DevelopersPage() {
  return (
    <main className="bg-[#020617]">
      {/* Lamp Hero */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center text-center"
        >
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Developers</p>
          <h1 className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Website Development<br />Team
          </h1>
          <p className="mt-4 text-slate-400 text-sm md:text-base max-w-xl">
            The students who designed, developed, tested, and maintained the Mathematics Club website.
          </p>
        </motion.div>
      </LampContainer>

      <section className="section developers-page relative overflow-hidden">
        <FloatingPathsBackground position={-1}>
          <div className="container relative z-10 py-12">
            <SectionTitle
              eyebrow="Development Team"
              title="Meet the Developers"
              subtitle="The team that contributed to structure, design, content, responsiveness, and deployment."
            />

            <div className="developers-grid">
              {developers.map((developer) => (
                <DeveloperCard developer={developer} key={developer.id} />
              ))}
            </div>
          </div>
        </FloatingPathsBackground>
      </section>
    </main>
  )
}

import { Card } from '../../components/ui/card'

function DeveloperCard({ developer }) {
  const isLead = developer.role.toLowerCase().includes('lead')
  return (
    <Card
      variant="animated-border"
      className="!max-w-full !p-0 overflow-hidden developer-card"
    >
      <div className="developer-card__image-box">
        <img
          src={developer.photo || '/assets/members/avatar.svg'}
          alt={developer.name}
          className="developer-card__image"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = '/assets/members/avatar.svg'
          }}
        />
      </div>

      {/* Overlay to darken background image for text readability */}
      <div className="developer-card__overlay" />

      <div className="developer-card__body">
        <div className="developer-card__top">
          {isLead ? (
            <span className="developer-card__badge">Lead Developer</span>
          ) : (
            <span className="developer-card__role-badge">{developer.role}</span>
          )}
        </div>

        <h3 className="developer-card__name">{developer.name}</h3>

        <div className="developer-card__socials">
          {developer.linkedin && (
            <a href={developer.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          )}

          {developer.github && (
            <a href={developer.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
          )}

          {developer.email && (
            <a href={`mailto:${developer.email}`} aria-label="Gmail">
              <GmailIcon />
            </a>
          )}
        </div>

        <div className="developer-card__contribution">
          <p>{developer.contribution}</p>
        </div>
      </div>
    </Card>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.75H3.56v11.7h3.38V8.75zM5.25 3.55a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92zM20.45 20.45h-3.38v-5.7c0-1.36-.02-3.12-1.9-3.12-1.9 0-2.2 1.49-2.2 3.03v5.79H9.6V8.75h3.24v1.6h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18v6.67z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.49v-1.93c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.66.35-1.12.64-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.78-4.57 5.04.36.32.68.95.68 1.91v2.8c0 .27.18.58.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  )
}

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm8 7.2L4.4 7.4V17h15.2V7.4L12 12.2zm0-2.1L18.1 7H5.9L12 10.1z" />
    </svg>
  )
}