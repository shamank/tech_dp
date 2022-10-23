import { createRouter, createWebHistory } from "vue-router";

import AppNewNote from './components/AppNewNote'
import AppNoteList from './components/AppNoteList'

const routes = [
    {
        name: 'NewNote',
        path: '/create',
        component: AppNewNote
    },
    {
        name: 'NoteList',
        path: '/notes',
        component: AppNoteList
    }
];

export default createRouter({
    routes,
    history: createWebHistory()
})
