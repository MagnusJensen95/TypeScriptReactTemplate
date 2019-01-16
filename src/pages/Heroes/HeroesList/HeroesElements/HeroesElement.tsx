import * as React from 'react';

import { Hero } from 'src/store/heroes/types';

interface OwnProps {

}
interface StateProps {
    hero: Hero;
}
interface DispatchProps {

}
type Props = OwnProps & StateProps & DispatchProps;

const heroesElement: React.FunctionComponent<Props> = (props) => {


    return (
        <div className="">
            {props.hero.name}
        </div>
    );
};




export default heroesElement;


