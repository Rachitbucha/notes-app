// const utils = require('./utils');
const notes = require ('./notes.js');
// import validator from 'validator';
// import chalk from 'chalk';
const yargs = require ('yargs');
const { describe } = require('yargs');

//yargs version
yargs.version('1.0.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add new note!',
    builder: {
        title:{
            describe: 'Note title!',
            demandOption: 'true',
            type: 'string',

        },
        body:{
            describe: 'Note Body!',
            demandOption: 'true',
            type: 'string',
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    },
});

//Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note!',
    builder:{
        title:{
        describe:'Some title',
        demandOption: true,
        type: 'string',
    }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    },
});

//Create List command
yargs.command({
    command:'list',
    describe:'Shows the list of note!',
    handler(argv) {
        notes.listNotes()
    },
});

//Create Read command
yargs.command({
    command:'read',
    describe:'Read the note!',
    builder:{
        title:{
            describe:'Some title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.Readnotes(argv.title)
    }
});

yargs.parse()
//console.log(yargs.argv);