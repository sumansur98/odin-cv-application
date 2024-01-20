import './App.css';
import PersonalInfo from './Components/PersonalInfo';
import EducationInfo from './Components/EducationInfo';
import ExperienceInfo from './Components/ExperienceInfo';

function App() {

  return (
    <>
      <div className='input-section'>
        <div className="form-container personal-form-div">
          <PersonalInfo></PersonalInfo>
        </div>
        <div className="form-container education-form-div">
          <EducationInfo></EducationInfo>
        </div>
        <div className="form-container experience-form-div">
          <ExperienceInfo></ExperienceInfo>
        </div>
      </div>
      <div></div>
    </>
  )
}

export default App
