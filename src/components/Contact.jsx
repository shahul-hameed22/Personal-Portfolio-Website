import React from 'react'

const Contact = (props) => {
   const darkmode = props.mode === "dark" && "text-white"
   const darkmode2 = props.mode === "dark" && "text-info"
   return (
      <section className="footer">

         <div className={`box-container ${darkmode}`}>

            <div className="box pl-28">
               <h1 className='text-4xl mb-3'>Quick Links</h1>
               <a className={`link ${darkmode}`} href="#home"> <i className={`fas fa-angle-right ${darkmode2}`}></i> Home</a>
               <a className={`link ${darkmode}`} href="#about"> <i className={`fas fa-angle-right ${darkmode2}`}></i> About</a>
               <a className={`link ${darkmode}`} href="#portfolio"> <i className={`fas fa-angle-right ${darkmode2}`}></i> Projects</a>
            </div>

            <div className="box pl-28">
               <h1 className='text-4xl mb-3'>Contact Info</h1>
               <a href="tel:6364074061" className={`link ${darkmode}`}> <i className={`fas fa-phone ${darkmode2}`}></i> +91 - 6364074061 </a>
               <a href="tel:6363410855" className={`link ${darkmode}`}> <i className={`fas fa-phone ${darkmode2}`}></i> +91 - 6363410855</a>
               <a href="mailto: shahul98869@gmail.com" className={`link ${darkmode}`}> <i className={`fas fa-envelope ${darkmode2}`}></i> shahul66649@gmail.com </a>
               <a href="/" className={`link ${darkmode}`}> <i className={`fas fa-map ${darkmode2}`}></i> BTM 1st Stage, Bangalore </a>
            </div>

            <div className="box pl-28">
               <h1 className='text-4xl mb-3'>Social Links</h1>
               <a href="https://github.com/shahulhameed09" className={`link ${darkmode}`}><i className={`fa-brands fa-github ${darkmode2}`}> </i><span>  GitHub Link</span></a>
               <a href="https://www.linkedin.com/in/shahul-hameed-4670ab22b" className={`link ${darkmode}`}><i className={`fa-brands fa-linkedin ${darkmode2}`}> </i><span>  Linkedin Link</span></a>
               <a href="whatsapp://send?phone=+916364074061" className={`link ${darkmode}`}><i className={`fa-brands fa-whatsapp ${darkmode2}`}> </i><span>  WhatsApp Link</span></a>
               <a href="https://instagram.com/shahul.hameed22?igshid=YmMyMTA2M2Y=" className={`link ${darkmode}`}><i className={`fa-brands fa-instagram ${darkmode2}`}> </i><span>  Instagram Link</span></a>
            </div>
         </div>
      </section>
   )
}

export default Contact
