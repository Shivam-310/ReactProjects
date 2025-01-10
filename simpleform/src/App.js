import React from 'react'
import { useState } from 'react'
import "./App.css"

const App = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [subjects, setSubjects] = useState({
          english: true,
          maths: false,
          physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState();

    const handleSubmit = (e) => {
        e.prventDefault();
        console.log(
            firstname,
            lastname,
            email,
            contact,
            subjects,
            resume,
            url,
        )
    }

    const handleSubjectChange = (sub) => {
      setSubjects((prev) => ({
        ...prev, 
        [sub]: !prev[sub],
      }));
    }

    const handleReset = () => {
      // Reset all state variables here
      setFirstname("");
      setLastName("");
      setEmail("");
      setContact("");
      setSubjects({
          english: true,
          maths: false,
          physics: false,
      });
      setResume("");
      setUrl("");
  };


  return (
    <div className='App'>
      <h1>This is a React Form</h1>
      <fieldset>
        <form action="#" method='get'>
          <label for="firstname">
            First Name*
          </label>
          <input
            type="text"
            name='firstname'
            id='firstname'
            value={firstname}
            onChange={(e) =>
                setFirstname(e.target.value)
            } 
            placeholder='enter first name'
            required
          />
          <label for="lastname">
            Last Name
          </label>
          <input
              type='text'
              name='lastname'
              id='lastname'
              value={lastname}
              onChange={(e) => 
                  setLastName(e.target.value)
              }
              placeholder='enter last name' 
              required
          />
          <label for="email">Enter Email
          </label>
          <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => 
                setEmail(e.target.value)
              } 
              placeholder='Enter email'
              required
          />
          <label for="tel">Contact</label>
          <input
            type='tel'
            name='contact'
            id='contact'
            value={contact}
            onChange={(e) => 
              setContact(e.target.value)
            }
            placeholder='enter mobile number'
            required 
          />
          <label for="lang">
            Your best Subject
          </label>
          <input
              type='checkbox'
              name='lang'
              id='english'
              checked={subjects.english ===
                true}
              onChange={(e) => 
                handleSubjectChange("english")
              }
          />
          English
          <input
              type='checkbox'
              name='lang'
              id='physics'
              checked={subjects.physics === true} 
              onChange={(e) => 
                handleSubjectChange("physics")
              }
          />
          Physics
          <input
              type='checkbox'
              name='lang'
              id='maths'
              checked={subjects.maths === true} 
              onChange={(e) => 
                handleSubjectChange("maths")
              }
          />
          Maths
          <label for="file">Upload Resume</label>
          <input 
              type='file'
              name='file'
              id='file'
              onChange={(e) => 
                  setResume(e.target.files[0])
              }
              placeholder='Upload File'
              required
          />
           <label for="url">Enter URL*</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        onChange={(e) =>
                            setUrl(e.target.value)
                        }
                        placeholder="Enter url"
                        required
                    />
                     <button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
        </form>
      </fieldset>
    </div>
  )
}

export default App
