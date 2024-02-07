import React from 'react'
import PersonalInfo from './PersonalInfo'

const CompanyInfo = ({heading}) => {
  return (
    <div>
      <span>Ssta Frontend Developers Community here</span>
      <PersonalInfo heading={heading}/>
    </div>
  )
}

export default CompanyInfo
