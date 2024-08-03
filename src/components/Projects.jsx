import React, { useState } from 'react'

const Projects = (props) => {
  const boxStyle = "bg-gradient-to-b from-purple-300 to-purple-600 shadow p-4 text-center rounded-2xl transition-all duration-500 hover:to-purple-800 transform hover:-translate-y-3"
  const boxStyle2 = "bg-gradient-to-b from-gray-500 to-gray-800 shadow p-4 text-center rounded-2xl transition-all duration-500 hover:to-gray-900 transform hover:-translate-y-3"

  const [present, setPresent] = useState("Show More")

  const handleProject = (data) => {
    setPresent(data)
  }

  const project1 = [
    {
      title: 'Electronics Service Web Application',
      desc: 'Electronics Service WebApp is a web-based application. The aim of his project is to buld a website where customer can book an appointment to repair there electronic gadgets.',
      link: 'https://github.com/shahul-hameed22/Django_project_Electronics_Service_app'
    },
    {
      title: 'Matrimony Web Application',
      desc: 'The website displays profiles of all users. In this website you can register & can update your profile, & you can view other profiles & can send & unsend match to any user.',
      link: 'https://github.com/shahulhameed09/Matrimony-Website-django'
    },
    {
      title: 'Complaint Management System',
      desc: 'The main purpose of this project is to help the public in knowing their place details & getting their problems solved in online without going to the officer regularly until the problem is solved.',
      link: 'https://github.com/shahulhameed09/Complaint-Management-System'
    },

  ]

  const project2 = [
    {
      title: 'E-Commerce Website',
      desc: 'The website displays products. Users can add & remove products to/from their cart while also specifying the quantity of each item. They can then enter their address & choose Stripe to handle the payment processing.',
      link: 'https://github.com/shahulhameed09/Ecommerce-Website-Django'
    },
    {
      title: 'Quora Clone Website',
      desc: 'The website displays questions. Users can add & remove questions from this website. They can answer to any questions & they like to other answers given by someone.',
      link: 'https://github.com/shahulhameed09/Quora-clone-website-django'
    },
    {
      title: 'Calorie Tracker Website',
      desc: 'The scope of this project is to track the daily calorie intake. Counting calories can help you lose or gain weight by bringing awareness to what you eat each day. This can help you identify eating patterns that you may need to modify, keeping you on track to reach your goals.',
      link: 'https://github.com/shahulhameed09/Calorie-tracker-website-django'
    },
    {
      title: 'Todo Website Django',
      desc: 'In this project users can create there todo task then they can update when they complete that task & they can delete any task.',
      link: 'https://github.com/shahulhameed09/Todo-App-Django'
    },
    {
      title: 'NammaNews Website (React_App)',
      desc: 'This website gives the top headlines of daily news. & you can click on more details & get brief information about that news.',
      link: 'https://github.com/shahulhameed09/NammaNews_React_App'
    },
    {
      title: 'Portfolio Website (React_App)',
      desc: 'It displays the professional background of an individual. It displays brief information about work experiences till date, education,vskills & contact details along with social media links.',
      link: 'https://github.com/shahulhameed09/My-React-Portfolio'
    },
    {
      title: 'TextUtils Website (React_App)',
      desc: 'TextUtils is a comprehensive online toolkit designed to streamline various text-related tasks. This versatile platform caters to developers, writers, & students alike, offering a range of features such as text transformation, character & word count analysis.',
      link: 'https://github.com/shahulhameed09/TextUtils_ReactApp'
    },
    {
      title: 'Online NoteBook Website (MERN Stack)',
      desc: 'An online notebook website serves as a digital platform for users to create, organize, & store notes in a virtual format accessible from any internet-connected device. Users can create & edit notes, organize them into categories or notebooks.',
      link: 'https://github.com/shahulhameed09/Online_NoteBook'
    },
    {
      title: 'Student Project Management (MERN Stack)',
      desc: 'An online notebook website serves as a digital platform for users to create, organize, & store notes in a virtual format accessible from any internet-connected device. Users can create & edit notes, organize them into categories or notebooks.',
      link: 'https://github.com/shahulhameed09/student_project_management'
    },
  ]

  return (
    <div>
      <h1 className='text-center mb-5'>My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project1.map((i) => {
          return (
            <div className={props.mode === "light" ? boxStyle : boxStyle2}>
              <h3 className='h-17 px-1'>{i.title}</h3>
              <p className='mb-5'>{i.desc}</p>
              <a className={`${props.mode === "light" ? 'bg-purple-900 text-white' : 'bg-info text-dark'} p-2 rounded-full shadow fixed-bottom w-10 m-auto my-3`} href={i.link}><i
                className="fa-sharp fa-solid fa-link"></i></a>
            </div >
          )
        })}
      </div>
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <div id='show' className="my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {project2.map((i) => {
          return (
            <div className={`collapse multi-collapse ${props.mode === "light" ? boxStyle : boxStyle2}`} id="boxCollapse">
              <h3 className='h-17 px-1'>{i.title}</h3>
              <p className='mb-5'>{i.desc}</p>
              <a className={`${props.mode === "light" ? 'bg-purple-900 text-white' : 'bg-info text-dark'} p-2 rounded-full shadow fixed-bottom w-10 m-auto my-3`} href={i.link}><i
                className="fa-sharp fa-solid fa-link"></i></a>
            </div>
          )
        })}

      </div>
      <p onClick={() => { handleProject("Show Less") }} className={` ${present === "Show More" ? 'd-grid' : 'd-none'} ${props.mode === "light" ? 'text-black hover:text-purple-900' : 'text-white'} text-center w-100 cursor-pointer mb-0`} data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="boxCollapse">
        Show More
        <i className='fas fa-chevron-down text-2xl'></i>
      </p>
      <p onClick={() => { handleProject("Show More") }} className={` ${present === "Show Less" ? 'd-grid' : 'd-none'} ${props.mode === "light" ? 'text-black hover:text-purple-900' : 'text-white'} text-center w-100 cursor-pointer mb-0`} data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="boxCollapse">
        <i className='fas fa-chevron-up text-2xl'></i>
        Show Less
      </p>
    </div>

  )
}

export default Projects
