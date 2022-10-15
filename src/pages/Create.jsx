import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const [title, setTitle] = useState()
    const [details, setDetails] = useState()
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('todos')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (title == '') {
            setTitleError(true)
        }

        if (details == '') {
            setDetailsError(true)
        }

        if (title && details) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, details, category })
            }).then(() => navigate('/'))
        }
    }
    return (
        <Container>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ marginTop: 10, marginBottom: 10, display: 'block' }}
                    label="Note Title"
                    variant="outlined"
                    fullWidth
                    required
                    error={titleError}
                >
                </TextField>
                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    sx={{ marginTop: 10, marginBottom: 10, display: 'block' }}
                    label="Details"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={detailsError}
                >
                </TextField>
                <FormControl sx={{ marginTop: 10, marginBottom: 10 }}>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value="money" control={<Radio />} label="Money" />
                        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                        <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                    </RadioGroup>
                </FormControl>
                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<ArrowForwardIosIcon />}
                >Submit</Button>
            </form>
        </Container >
    )
}