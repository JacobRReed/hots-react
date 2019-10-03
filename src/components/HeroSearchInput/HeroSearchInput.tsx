import './HeroSearchInput.css'

import React, { ChangeEvent } from 'react'

import { TextField } from '@material-ui/core'
import { connect } from 'react-redux'
import { setSearchAction } from '../../store/actions'
import { withStyles } from '@material-ui/styles'

interface DispatchProps {
  setSearch: (str: string) => {}
}

const HeroSearchInput: React.FC<DispatchProps> = props => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setSearch(e.target.value)
  }

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
        opacity: 1
      },
      '& label': {
        opacity: 0.6,
        color: 'lightgrey'
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white'
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: 'lightgrey',
        height: '1px'
      },
      '& .MuiInput-input': {
        color: 'white',
        fontSize: '2em',
        fontFamily: 'Teko, sans-serif',
        letterSpacing: '-1px'
      }
    }
  })(TextField)

  return (
    <div className="HeroSearchInput">
      <CssTextField
        autoComplete="true"
        label="Search for a hero"
        fullWidth={true}
        onChange={handleChange}
        inputProps={{ spellCheck: false }}
      />
    </div>
  )
}

export default connect(
  null,
  { setSearch: setSearchAction }
)(HeroSearchInput)
