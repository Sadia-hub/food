import React, {useState} from 'react'
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaUserPlus, FaCalendarAlt, FaClock, FaPlus, FaMinus} from 'react-icons/fa'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const Contact = () => {
    const [personCount, setPersonCount] = useState(1)
   
        const [showCalendar, setShowCalendar] = useState(false)
        const [calendarDate, setCalendarDate] = useState(new Date())
        const [showClock, setShowClock] = useState(false)
        const [opentime, setOpenTime] = useState('Open between 6 p.m and 9 p.m')
        const [formMessage, setFormMessage]= useState('')
        const changeDate = (calendarDate) => {
            setCalendarDate(calendarDate)
        } 
        const handleSubmit = (e) => {
            e.preventDefault()
            setFormMessage('Form is Submitted Successfully')
            setTimeout(()=>{
                setFormMessage('')
            }, 7000)
            
        }
    return (
        <div className='contactPage'>
            <h2 id="contacthead">Contact Us</h2>
            <h5 id="contactbody">Any questions or remarks? Just Write us a message</h5>
            <h5> {formMessage}</h5>
            <section id='contactInfoCard'>
                <div id='contactInfo'>
                    <h3 id="infoHead">Contact Information</h3>
                    <h5 id="fillInfo">Fill up the form and our Team will get back to you within a few minutes.</h5>
                    
                    <div className='contactIcons'>
                        <span><FaPhoneAlt size="1.5em" color='black'/></span> 
                        <span id='contactEnd'>+234 810 1111 222</span>
                    </div>
                    <div className='contactIcons'>
                        <span><FaRegEnvelope size="1.5em" color='black'/></span> 
                        <span id='contactEnd'>info@group70.com</span>
                    </div>
                    <div className='contactIcons'>
                        <span ><FaMapMarkerAlt size="1.5em" color='black'/></span> 
                        <span id='contactEnd'>Side Hustle Tower, Lagos, Nigeria</span>
                    </div>
                    <div className='socialContacts'>
                        <div id='socialContacts'>
                        <div id="contactIcon"><FaFacebookF /></div>
                        <div id="contactIcon"><FaInstagram /></div>
                        <div id="contactIcon"><FaTwitter /></div>
                        <div id="contactIcon"><FaTiktok /></div>
                        </div>
                        <div id="circle">
                            <div id='inner'></div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <aside id='topContactInfo'>
                    <div>
                    <label htmlFor='fname' className='inputs'>First_Name
                    <input type="text" id="fname" />
                    </label>
                    <label htmlFor='lname' className='inputs'>Last_Name
                    <input type="text" id="lname" />
                    </label>
                    <label htmlFor='mail' className='inputs'>Mail
                    <input type="email" id="mail" />
                    </label>
                    <label htmlFor='phonenum' className='inputs'>Phone
                    <input type="text" id="phonenum" />
                    </label>
                    </div>
                    <div id="reservation">
                    <h4>Make a reservation</h4>
                    <div className='peopleNum'>
                    <div className='btnNum'>
                    <button type='button' id='contactBtn' onClick={() => setPersonCount(personCount - 1)}>
          <FaMinus size='2em' color='#7a7874'/>
        </button>
        {personCount}
        <button type='button' id='contactBtn' onClick={() => setPersonCount(personCount + 1)}>

          {<FaPlus size='2em' color='#7a7874'/>}
        </button>
        People  
        </div>
                          <span><FaUserPlus /></span>
                            </div>
                            
                   
                    <div className='calendarView'>
                    <span id='spanIcon' onClick={() => setShowCalendar(!showCalendar)}>
                       <FaCalendarAlt />
                        </span>
                        {showCalendar && (
                            
                        <Calendar onChange={changeDate} value={calendarDate} />
                        )}
                        
                        <h4 id='opentime'>{calendarDate.toDateString()}</h4>
                        </div>
                        
                    <div className='calendarView'>
                        <span id='spanIcon' onClick={() => setShowClock(!showClock)}><FaClock /></span>
                        {showClock && (<div className='radioButtons'>
                            <label>
                            <input type='radio' value='6 p.m' name='opentime' onChange={e=>setOpenTime(e.target.value)} />
                            <span>6 p.m to 7 p.m</span>
                            </label>
                            <label>
                            <input type='radio' value='7 p.m' name='opentime' onChange={e=>setOpenTime(e.target.value)} />
                            <span>7 p.m to 8 p.m</span>
                            </label>
                            <label>
                            <input type='radio' value='8 p.m' name='opentime' onChange={e=>setOpenTime(e.target.value)} />
                            <span>8 p.m to 9 p.m</span>
                            </label>
                        </div>
                        )}
                        <h4 id='opentime'>{opentime}</h4>
                        </div>
                        </div>
                        </aside>
                    <label htmlFor='message'>Message</label>
                    <textarea className='textarea'>
                        Type your message here
                    </textarea>
                    <button className='bookTable' type='submit'>Book A Table</button>
                </form>
            </section>
        </div>
    )
} 


export default Contact;