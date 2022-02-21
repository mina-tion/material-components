/* eslint-disable no-use-before-define */
import React, { useEffect, useState, FC } from 'react'
import MaterialChip from '@material-ui/core/Chip'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { useObserver } from 'mobx-react'
import { NONAME } from 'dns'
import { height } from '@mui/system'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 20,
    width: 306,
    height: 108,
    borderColor: '#B3B6C7',
    boxSizing: 'border-box',
    borderRadius: 3,
    border: '1px solid',
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    padding: 0,
    '& input': {
      bgcolor: 'background.paper',
      background: '#FFFFFF',
    },
    '& .MuiFormControl-fullWidth': {
      height: 100,
      border: 'none',
    },
    '& .MuiAutocomplete-inputRoot': {
      height: '100%',
      background: '#FFFFFF',
      /*   border: '1px' solid '#B3B6C7', */
      border: 'none',
      /* overflowY: 'scroll' */
    },

    '& .MuiFilledInput-underline': {
      '&::before': {
        display: 'none',
      },
      '&::after': {
        display: 'none',
      },
    },

    '& .MuiAutocomplete-endAdornment': {
      display: 'none',
    },
  },
}))

const StyledChip = withStyles({
  root: {
    borderRadius: 3,
    border: '1px solid',
    borderColor: '#C3CAF5',
    color: '#000000',
    backgroundColor: '#F6F7FF ',
    '&:hover': {
      backgroundColor: '#C3CAF5',
      filter: 'brightness(120%)',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#000000',
      borderColor: '#000000',
    },
  },

  deleteIcon: {
    color: 'grey',
  },
})(MaterialChip)

const Tags: FC = () => {
  const classes = useStyles()

  const [inputValue, setInputValue] = useState('')
  const [tags, setTags] = useState([
    { id: 1, title: 'tag' },
    { id: 2, title: 'another tag' },
    { id: 3, title: 'position tag here' },
    { id: 4, title: 'tag three' },
    { id: 5, title: 'second tag' },
  ])
  const [option, setOption] = useState('')

  useEffect(() => {
    if (inputValue) setOption(inputValue + '(New tag)')
    else setOption('')
  }, [inputValue])

  const handleChange = (e: any) => {
    setInputValue(e.target.value)
    setOption(inputValue + '(New tag)')
  }

  const handleClose = () => {
    if (inputValue && !tags.find(tag => tag.title === inputValue)) {
      setTags([...tags, { id: tags.length, title: inputValue }])
    }
    setOption('')
  }

  const handleDelete = () => {
    console.log('DELETE')
  }

  return useObserver(() => (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={option ? [option, ...tags.map(tag => tag.title)] : tags.map(tag => tag.title)}
        defaultValue={[tags[0].title]}
        freeSolo
        includeInputInList
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <StyledChip
              className={classes.root}
              variant="outlined"
              label={option.includes('(New tag)') ? option.replace('(New tag)', '') : option}
              onDelete={handleDelete}
              {...getTagProps({ index })}
            />
          ))
        }
        onInputChange={handleChange}
        onClose={handleClose}
        renderInput={(params: any) => <TextField {...params} variant="filled" />}
      />
    </div>
  ))
}

export default Tags
