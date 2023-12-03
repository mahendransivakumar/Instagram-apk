import {combineReducers} from 'redux';
import { Userslice } from '../features/Userslice';

export const rootReducer = combineReducers ({
    user : Userslice.reducer,
})