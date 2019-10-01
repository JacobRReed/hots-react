import './HeroSearchInput.css'

import React from 'react'
import { TextField } from '@material-ui/core'

const HeroSearchInput: React.FC = () => {
  return (
    <div className="HeroSearchInput">
      <TextField
        autoComplete="true"
        label="Search for a hero"
        fullWidth={true}
      />
    </div>
  )
}

export default HeroSearchInput
