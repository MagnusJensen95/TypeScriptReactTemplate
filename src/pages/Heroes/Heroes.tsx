import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState, AnyActionDispatcher } from '../../store';
import HeroesList from './HeroesList/HeroesList';
import { Hero } from '../../store/heroes/types';
import { fetchRequest } from '../../store/heroes/actions';

interface OwnProps {

}
interface StateProps {
    heroes: Hero[];
}
interface DispatchProps {
    onLoadHeroes: any;
}
type Props = OwnProps & StateProps & DispatchProps;
class Heroes extends React.Component<Props> {

    // componentDidMount() {

    // }

    render() {

        return (
            <div className="">

                <HeroesList heroes={this.props.heroes} />
            </div>
        );
    }
}

const mapStateToProps = ({ heroes }: ApplicationState): StateProps => ({
    heroes: heroes.data
});

const mapDispatchToProps = (dispatch: AnyActionDispatcher): DispatchProps => ({
    onLoadHeroes: () => dispatch(fetchRequest())
});

export default connect<StateProps, DispatchProps, OwnProps, ApplicationState>(mapStateToProps, mapDispatchToProps)(Heroes);