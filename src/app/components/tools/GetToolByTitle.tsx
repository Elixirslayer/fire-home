import React from 'react'
import GuidGenerator from './GuidGenerator'

export default function GetToolByTitle({title}: {title: string}) {
  if(title){
    switch(title){
      case "Guid Generator":
        return <GuidGenerator/>
      default:
        return <div>No Tool found for {title}</div>
    }
  }
  return <div>Title is required</div>
}
