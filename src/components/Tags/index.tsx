/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import Chip from '@material-ui/core/Chip'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { useStore } from 'stores'
import { useObserver } from 'mobx-react'

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}))

export default function Tags() {
  const classes = useStyles()
  const { tagsStore } = useStore()
  const { tags, setTag } = tagsStore

  const [inputValue, changeInputValue] = useState('')
  const [options, setOptions] = useState([...tags.map(option => option.title)])

  useEffect(() => {
    setOptions(tags.map(option => option.title))
  }, [tags])


  const handlerChange = (e: any) => {
    if(options.length>tags.length) { 
      setOptions(options.slice(0, tags.length))
    }
    options[options.length] = `${e.target.value} (New tag)`
    changeInputValue(e.target.value)
 
/* 
   if (tags.find(el => el.title === e.target.value)) { 
      console.log("YES")
    }  */
  }

  const handlerKeyDown = (e: any) => {
    if (e.key === 'Enter' && inputValue!='' ) {
      setTag(inputValue)
      changeInputValue('')
    }
  }

  return useObserver(() => (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={options}
        defaultValue={[tags[0].title]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        onInputChange={handlerChange}
        renderInput={(params: any) => (
          <TextField
            {...params}
            variant="filled"
            label="Multiplie tags"
            placeholder="Favorites"
            onKeyDown={handlerKeyDown}
          />
        )}
      />
    </div>
  ))
}
