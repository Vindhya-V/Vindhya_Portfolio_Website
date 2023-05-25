import React, { useState } from 'react';
import './App.css';
import './p.png';


const Resume = () => {
  const [experiences, setExperiences] = useState([
    { company: 'ABC', jobDescription: 'Frontend Developer', companyLogo: 'abc.logo' },
    
  ]);

  const [skills] = useState([
    { name: 'HTML5', proficiency: '90%' },
    { name: 'CSS3', proficiency: '85%' },
    { name: 'JavaScript', proficiency: '80%' },
    { name: 'React', proficiency: '75%' }
  ]);

  const [hobbies, setHobbies] = useState(['']);
  const [languages, setLanguages] = useState(['English']);

  const addExperience = () => {
    setExperiences([...experiences, { company: '', jobDescription: '', companyLogo: '' }]);
  };

  const handleExperienceChange = (index, event) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][event.target.name] = event.target.value;
    setExperiences(updatedExperiences);
  };

  const deleteExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  const handleHobbyChange = (index, event) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies[index] = event.target.value;
    setHobbies(updatedHobbies);
  };

  const addHobby = () => {
    if (hobbies.length < 3) {
      setHobbies([...hobbies, '']);
    }
  };

  const deleteHobby = (index) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies.splice(index, 1);
    setHobbies(updatedHobbies);
  };

  const handleLanguageChange = (index, event) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = event.target.value;
    setLanguages(updatedLanguages);
  };

  const addLanguage = () => {
    if (languages.length < 3) {
      setLanguages([...languages, '']);
    }
  };

  const deleteLanguage = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  return (
    <div className="resume">
      
      <div className="content">
      
        <div className="left-section">
        <div className="header">
      <h1>Vindhya</h1>
      <h3>Frontend Developer</h3>
      
    </div>
        <img src={require('./p.png')} class="App-logo" alt="profile-pic"/>
        
        
          <div className="section">
          
            <h2>Introduction</h2>
            <div className="introduction">
              
              <p>
              A passionate frontend developer who loves building user-friendly and visually appealing web applications. Skilled in HTML, CSS, JavaScript, and React.
              </p>
            </div>
          </div>

          <div className="section">
            <h2>Contact and Links</h2>
            <ul className="contact-links">
              <li>
                <i className="fas fa-phone"></i>
                (+91) 9148560223
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:vindu2002@gmail.com">vindu2002@gmail.com</a>
              </li>
              <li>
                <i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/vindhya-venugopal-486747234/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <i className="fab fa-github"></i>
                <a href="https://github.com/Vindhya-V" target="_blank" rel="noopener noreferrer">Github</a>
              </li>
            </ul>
          </div>

          <div className="section">
            <h2>Experience</h2>
            <div className="experiences">
              {experiences.map((experience, index) => (
                <div className="experience" key={index}>
                  <div className="experience-header">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={experience.company}
                      onChange={(event) => handleExperienceChange(index, event)}
                    />
                    <button className="delete-button" onClick={() => deleteExperience(index)}>
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <textarea
                    name="jobDescription"
                    placeholder="Job Description"
                    value={experience.jobDescription}
                    onChange={(event) => handleExperienceChange(index, event)}
                  ></textarea>
                  <input
                    type="text"
                    name="companyLogo"
                    placeholder="Company Logo URL"
                    value={experience.companyLogo}
                    onChange={(event) => handleExperienceChange(index, event)}
                  />
                </div>
              ))}
            </div>
            <button className="add-button" onClick={addExperience}>
              <i className="fas fa-plus"></i> Add Experience
            </button>
          </div>
        </div>

        <div className="right-section">
          <div className="section">
            <h2>Skills</h2>
            <ul className="skills">
              {skills.map((skill, index) => (
                <li key={index}>
                  {skill.name} <span className="proficiency">{skill.proficiency}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="section">
            <h2>Hobbies</h2>
            <div className="hobbies">
              {hobbies.map((hobby, index) => (
                <div className="hobby" key={index}>
                  <input
                    type="text"
                    placeholder="Enter Hobby"
                    value={hobby}
                    onChange={(event) => handleHobbyChange(index, event)}
                  />
                  {index > 0 && (
                    <button className="delete-button" onClick={() => deleteHobby(index)}>
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                </div>
              ))}
            </div>
            {hobbies.length < 3 && (
              <button className="add-button" onClick={addHobby}>
                <i className="fas fa-plus"></i> Add Hobby
              </button>
            )}
          </div>

          <div className="section">
            <h2>Languages</h2>
            <div className="languages">
              {languages.map((language, index) => (
                <div className="language" key={index}>
                  <input
                    type="text"
                    placeholder="Enter Language"
                    value={language}
                    onChange={(event) => handleLanguageChange(index, event)}
                  />
                  {index > 0 && (
                    <button className="delete-button" onClick={() => deleteLanguage(index)}>
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                </div>
              ))}
            </div>
            {languages.length < 3 && (
              <button className="add-button" onClick={addLanguage}>
                <i className="fas fa-plus"></i> Add Language
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
