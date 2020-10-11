const fs = require('fs')
const chalk = require('chalk')


const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your Notes!'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const removeNote = (title) => {
    const notes = loadNotes()
    const removenotes = notes.filter((note) => note.title !== title )
    // const removenotes = notes.filter((note) =>{
    //     return note.title !== title
    // })
    if(notes.length > removenotes.length)
    {
        console.log(chalk.bgGreen('Note removed!'))
        saveNotes(removenotes)
    }
    else
    {
        console.log(chalk.bgRed('Note not found'))
    }
    
}

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicatenotes = notes.filter((note) => note.title === title )
    const duplicatenote = notes.find((note) => note.title === title)

    // const duplicatenotes = notes.filter((note) =>{
    //     return note.title === title
    // })

    // if(duplicatenotes.length === 0 )
    if(!duplicatenote)
    {
        notes.push({
            title:title,
            body:body
        })
    
        saveNotes(notes)
        console.log(chalk.bgGreen('Note Added'))
    }
    else{
        console.log(chalk.bgRed('Note title taken'))
    }

    
}

const Readnotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title )

    if(note)
    {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse("No Note Found!"))
    }
}

const saveNotes = (notes) => {
    dataJson = JSON.stringify(notes) 
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return []
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    Readnotes:Readnotes,
};