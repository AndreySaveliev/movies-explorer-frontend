import React from 'react';

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs-wrapper">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__paragraph">
          <h3 className="techs__heading">7 технологий</h3>
          <p className="techs__paragraph">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
        </div>
        <ul className="techs__specs">
          <li className="techs__spec techs__spec_html">HTML</li>
          <li className="techs__spec techs__spec_css">CSS</li>
          <li className="techs__spec techs__spec_js">JS</li>
          <li className="techs__spec techs__spec_react">React</li>
          <li className="techs__spec techs__spec_git">Git</li>
          <li className="techs__spec techs__spec_express">Express.js</li>
          <li className="techs__spec techs__spec_monbgo">mognoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
