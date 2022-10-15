import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Typography } from '@mui/material'

function NoteCard({ note, handleDelete }) {
    return (
        <div>
            <Card sx={{ m: 2 }}>
                <CardHeader action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlineIcon />
                    </IconButton>
                }
                    title={note.title}
                    subheader={note.category}>
                </CardHeader>
                <CardContent>
                    <Typography variant="body2" color="textSecondary">{note.details}</Typography>
                </CardContent>
            </Card>
        </div >
    )
}

export default NoteCard
