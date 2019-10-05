import { Ability, Talent } from '../../models/Hero'
import { Theme, makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import React from 'react'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#2f2f2f'
  }
}))

interface HeroModalTabsProps {
  abilities: Ability[]
  talents: Talent[]
}

const HeroModalTabs: React.FC<HeroModalTabsProps> = props => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className="HeroModalTabs">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Abilities" />
          <Tab label="Talents" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {props.abilities.map(abil => {
          return <div>{abil.name}</div>
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.talents.map(talent => {
          return <div>{talent.name}</div>
        })}
      </TabPanel>
    </div>
  )
}

export default HeroModalTabs
