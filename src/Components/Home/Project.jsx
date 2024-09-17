import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCouch, faShower, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    image: 'image1.jpg',
    titre: 'Villa moderne',
    chambres: 3,
    sallesDeBain: 2,
    surface: 150,
    salon: 1,
  },
  {
    id: 2,
    image: 'image1.jpg',
    titre: 'Duplex moderne',
    chambres: 4,
    sallesDeBain: 4,
    surface: 260,
    salon: 1,
  },
  {
    id: 3,
    image: 'image3.jpg',
    titre: 'Appartement de standing',
    chambres: 2,
    sallesDeBain: 1,
    surface: 80,
    salon: 1,
    balcon: true
  },
  {
    id: 4,
    image: 'image4.jpg',
    titre: 'Maison de campagne',
    chambres: 5,
    sallesDeBain: 3,
    surface: 200,
    salon: 2,
    jardin: true
  },
  {
    id: 5,
    image: 'image5.jpg',
    titre: 'Loft industriel',
    chambres: 1,
    sallesDeBain: 1,
    surface: 120,
    salon: 1,
    hauteurSousPlafond: 4
  },
  {
    id: 6,
    image: 'image6.jpg',
    titre: 'Villa avec piscine',
    chambres: 4,
    sallesDeBain: 3,
    surface: 300,
    salon: 2,
    piscine: true
  },
]

const Project = () => {
  return (
    <div className='project'>
      <div className="project-container row-column">
        <h1 className="title-1">Projects Favoris</h1>
        <div className="row projects">
          {projects.map((project) => (
            <motion.div 
            whileHover={{scale:1.02}} 
            key={project.id} className="project-card">
              <motion.img
                whileHover={{scale:1.03}}
                transition={{type:'spring'}}
              src={require(`../../Assets/Images/home project/${project.image}`)}  alt={project.titre} />
              
              <motion.div 
                whileHover={{paddingBottom:'80px', color:'#ffffff'}}
              className="icons">
                <div className='row icon'>
                  <div>
                    <FontAwesomeIcon icon={faBed} /> {project.chambres}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCouch} /> {project.salon}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faShower} /> {project.sallesDeBain}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faRulerCombined} /> {project.surface} m²
                  </div>
                </div>
                <h3 className='btn'>{project.titre}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

          <motion.a 
            whileHover={{scale:1.1 }} 
            transition={{type:'spring', stiffness:300}} 
            href='#' className="text-link">voir le portfolio
          </motion.a> 

      </div>
      
    </div>
  );
};

export default Project;