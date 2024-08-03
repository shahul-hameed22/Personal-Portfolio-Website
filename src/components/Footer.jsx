import React from 'react'

const Footer = (props) => {
    return (
        <div>
          <div className={`text-center bg-gradient-to-b py-3 text-white ${props.mode === "light" ? 'from-purple-300 to-purple-800' : 'from-gray-800  to-black'}`}>
           <hr /> Copyright © 2023 Shahul Hameed. All rights reserved.
          </div>
        </div>
      )
}

export default Footer
