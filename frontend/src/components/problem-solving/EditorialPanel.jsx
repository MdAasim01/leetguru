import React from 'react'

const EditorialPanel = ({editorial}) => {

    if (!editorial) {
      return (
        <div className="p-6 text-muted-foreground text-sm">
          <p>No editorial available yet.</p>
        </div>
      )
    }

  return (
    <div>
      <h1>Editorial</h1>
      <p>{editorial}</p>
    </div>
  )
}

export default EditorialPanel