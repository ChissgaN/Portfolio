import React from 'react'
import "./stackStyles.css"
import html from "../../../public/html.svg"
import css from "../../../public/css (2).svg"
import js from "../../../public/js-official.svg"
import reactLogo from "../../../public/logos_react.svg"
import boost from "../../../public/logos_bootstrap.svg"
import tail from "../../../public/tailwind.svg"
import git from "../../../public/logos_git-icon.svg"
import vs from "../../../public/vscode.svg"
import github from "../../../public/github-fill.svg"
import php from "../../../public/php.svg"

export default function TechStack() {
  return (
    <div className='text-center divStack'>
      <h1 className='lettersA' >My Tech Stack</h1>
      <h3 className='lettersB' >Technologies I’ve been working with recently</h3>

      <div className='iconsTech d-flex flex-wrap justify-content-around mt-5'>
        <img src={html} alt="HTML" />
        <img src={css} alt="CSS" />
        <img src={js} alt="JS" />
        <img src={reactLogo} alt="React" />
        <img src={boost} alt="Boostrap" />
        <img src={tail} alt="Tailwind" />
        <img src={git} alt="GIT" />
        <img src={vs} alt="VS Code" />
        <img src={github} alt="GitHub" />
        <img src={php} alt="PHP" />      </div>
    </div>
  )
}

