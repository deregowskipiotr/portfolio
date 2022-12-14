import React from 'react';

import './Projects.scss';
import { projects } from './index';



function Projects () {

  return (
    <div className="projects">
      <div className="projects__title">
        <h1>Projekty</h1>
        <p>Zapraszam do obejrzenia moich projektów.</p>
      </div>

      <div className="card">
        {projects.map(
          ({ id, image, title, description, tags, visit, source }) => (
            <div className="card__blog" key={id}>
              <div className="card__blog-image">
                <img src={image} alt="" />
              </div>
              <div className="card__content">
                <div className="card__title">{title}</div>
                <div className="card__info">{description}</div>

                <div className="tag__list">
                  {tags.map((tag, i) => (
                    <div key={i}>{tag}</div>
                  ))}
                </div>

                <div className="utility__list">
                  <div className="externalLinks">
                    <a href={visit} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                  <div className="externalLinks">
                    <a href={source} target="_blank" rel="noopener noreferrer">
                      Strona
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;