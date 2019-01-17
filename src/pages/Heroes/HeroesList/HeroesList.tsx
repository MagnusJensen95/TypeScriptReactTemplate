import * as React from 'react';
import { Hero } from '../../../store/heroes/types';
import HeroesElement from './HeroesElements/HeroesElement';


interface StateProps {
  heroes: Hero[];
}

interface DispatchProps {

}

type Props = StateProps & DispatchProps;
const heroesList: React.FunctionComponent<Props> = (props) => {



  return (
    <div className="">
      {
        props.heroes.map((elm, idx) => {
          return (<HeroesElement hero={elm} />)

        })
      }
    </div>
  );

}

export default heroesList;
