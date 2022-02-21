import React, { FC } from 'react'
import Switch from '@material-ui/core/Switch'
import { FormControlLabel } from '@material-ui/core'
import { styled } from '@material-ui/core'

interface IProps {
  label?: string
  thumbColor?: string
  baseColor?: string
}

const SwitchButton: FC<IProps> = ({
  component: Component,
  restricted,
  baseColor,
  thumbColor,
  label,
  ...rest
}: any): any => {
  const IOSSwitch = styled(props => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    marginRight: 10,
    width: 44,
    height: 21,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2.4,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(22.8px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: baseColor ? baseColor : '#56D01C',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#56D01C',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.grey[100],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.7,
      },
    },
    '& .MuiSwitch-thumb': {
      color: thumbColor ? thumbColor : '#FFFFFF',
      boxSizing: 'border-box',
      width: 16.5,
      height: 16.5,
      border: 0,
      boxShadow: 'none',
    },
    '& .MuiSwitch-track': {
      borderRadius: 36,
      backgroundColor: '#E9E9EA',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }))

  return (
    <FormControlLabel
      control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
      label={label ? label : 'Open'}
    />
  )
}

export default SwitchButton
