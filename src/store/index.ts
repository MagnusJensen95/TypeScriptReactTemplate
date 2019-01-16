import { combineReducers, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connectRouter, RouterState } from 'connected-react-router';
import { all } from 'redux-saga/effects'
import {
    History
} from 'history';
import { heroesReducer } from './heroes/reducer';
import { HeroesState } from './heroes/types';



// The top-level state object.
export interface ApplicationState extends LocalApplicationState {
    router: RouterState

}

interface LocalApplicationState {
    heroes: HeroesState
    // Reducer states
}



// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer = (history: History<any>) => combineReducers<ApplicationState>({
    router: connectRouter(history),
    heroes: heroesReducer
    // Rest of reducers
});

/** Dispatcher type for any action. Please use the more precise Dispatcher whereever possible */
export type AnyActionDispatcher = ThunkDispatch<ApplicationState, void, AnyAction>;

export type GetState = () => ApplicationState;


// We `fork()` these tasks so they execute in the background.
export function* rootSaga() {
    yield all([

        // `fork()` any other store sagas down here...
    ])
}