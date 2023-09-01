import React from 'react';

const Skills = () => {
  const skillsStyles = {
    // width: '100%',
    // maxWidth: '600px',
    // padding: '0 20px',
  };

  const skillNameStyles = {
    fontSize: '18px',
    fontWeight: '700',
    color: 'white',
    textTransform: 'uppercase',
    margin: '20px 0',
  };

  const skillBarStyles = {
    height: '14px',
    background: '#282828',
    borderRadius: '3px',
  };

  const skillPerStyles = {
    height: '14px',
    background: 'green',
    borderRadius: '3px',
    position: 'relative',
    animation: 'fillBars 2.5s 1',
  };

  const skillPerBeforeStyles = {
    content: 'attr(per)',
    position: 'absolute',
    padding: '4px 6px',
    background: '#f1f1f1',
    borderRadius: '4px',
    fontSize: '12px',
    top: '-35px',
    right: '0',
    transform: 'translateX(50%)',
  };

  const skillPerAfterStyles = {
    content: '""',
    position: 'absolute',
    width: '10px',
    height: '10px',
    background: '#f1f1f1',
    top: '-20px',
    right: '0',
    transform: 'translateX(50%) rotate(45deg)',
    borderRadius: '2px',
  };

  return (
    <>
    
    <div className="skills container" style={skillsStyles}>
    <h2 className='text' style={{fontWeight:'bold',color:'Green'}}>My Skills </h2>
    <div className="skill">
        <div className="skill-name" style={skillNameStyles}>C</div>
        <div className="skill-bar" style={skillBarStyles}>
          <div className="skill-per" per="70%" style={{ ...skillPerStyles, maxWidth: '70%' }}>
            <div style={skillPerBeforeStyles}></div>
            <div style={skillPerAfterStyles}></div>
          </div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name" style={skillNameStyles}>JAVA</div>
        <div className="skill-bar" style={skillBarStyles}>
          <div className="skill-per" per="80%" style={{ ...skillPerStyles, maxWidth: '80%' }}>
            <div style={skillPerBeforeStyles}></div>
            <div style={skillPerAfterStyles}></div>
          </div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name" style={skillNameStyles}>PYTHON</div>
        <div className="skill-bar" style={skillBarStyles}>
          <div className="skill-per" per="50%" style={{ ...skillPerStyles, maxWidth: '50%' }}>
            <div style={skillPerBeforeStyles}></div>
            <div style={skillPerAfterStyles}></div>
          </div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name" style={skillNameStyles}>DBMS</div>
        <div className="skill-bar" style={skillBarStyles}>
          <div className="skill-per" per="70%" style={{ ...skillPerStyles, maxWidth: '70%' }}>
            <div style={skillPerBeforeStyles}></div>
            <div style={skillPerAfterStyles}></div>
          </div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name" style={skillNameStyles}>HTML</div>
        <div className="skill-bar" style={skillBarStyles}>
          <div className="skill-per" per="90%" style={{ ...skillPerStyles, maxWidth: '90%' }}>
            <div style={skillPerBeforeStyles}></div>
            <div style={skillPerAfterStyles}></div>
          </div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-name" style={skillNameStyles}>CSS</div>
        <div className="skill-bar" style={skillBarStyles}>
          <div className="skill-per" per="70%" style={{ ...skillPerStyles, maxWidth: '80%' }}>
            <div style={skillPerBeforeStyles}></div>
            <div style={skillPerAfterStyles}></div>
          </div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-name" style={skillNameStyles}>Javascript</div>
        <div className="skill-bar" style={skillBarStyles}>
          <div className="skill-per" per="60%" style={{ ...skillPerStyles, maxWidth: '60%' }}>
            <div style={skillPerBeforeStyles}></div>
            <div style={skillPerAfterStyles}></div>
          </div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name" style={skillNameStyles}>REACT</div>
        <div className="skill-bar" style={skillBarStyles}>
          <div className="skill-per" per="50%" style={{ ...skillPerStyles, maxWidth: '50%' }}>
            <div style={skillPerBeforeStyles}></div>
            <div style={skillPerAfterStyles}></div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Skills;
