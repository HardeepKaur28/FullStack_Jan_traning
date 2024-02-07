import React, { useContext } from 'react'
import { Section } from './Home'
import { MyContext } from '../utils/useContext'

const PersonalInfo = () => {
    const value = useContext(MyContext)
    console.log(value,"result<>><<>>>")
      return (
        <div>
       <Section heading = {value.store.heading} description = {"I am a good developer in front of amit sir elsewise you know that" } showDescription={true} setShowDescription={()=>{
      }}/>
    </div>
  )
}

export default PersonalInfo
