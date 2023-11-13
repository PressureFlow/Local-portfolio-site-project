import React from 'react'
import '../Skills/Skills.css'

export default function Skills() {
  return (
    <section className='skills'>

        <div className="skills-container">

            <h1 className='skills-title'>Мои навыки во Front-End разработке</h1>

            <ol className="skills-list">
                <li className="skills-list-element"><a href="#"> Работа с HTML / CSS.</a></li>
                <li className="skills-list-element"><a href="#">Работа с JavaScript.</a></li>
                <li className="skills-list-element"><a href="#">Работа с CSS и JavaScript Framework.</a></li>
                <li className="skills-list-element"><a href="#">Предварительная обработка CSS.</a></li>
                <li className="skills-list-element"><a href="#">Работа с Git.</a></li>
                <li className="skills-list-element"><a href="#">Адаптация дизайна.</a></li>
                <li className="skills-list-element"><a href="#">Тестирование/отладка.</a></li>
                <li className="skills-list-element"><a href="#">Работа с инструментами для разработчика в браузере.</a></li>
                <li className="skills-list-element"><a href="#">Работа с building and Automation инструментами/Web Performance.</a></li>
                <li className="skills-list-element"><a href="#">Работа с командной строкой.</a></li>
            </ol>

        </div>

    </section>
  )
}
