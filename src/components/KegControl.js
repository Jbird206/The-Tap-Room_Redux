import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import DailyKeg from './DailyKeg'
import KegDetail from './KegDetail'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from '../actions/index';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      editing:false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
    this.setState({selectedKeg: null});
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleBuyingPint = (keg) => {
    const { dispatch } = this.props;
    const action = a.buyPint(keg);
    dispatch(action);
  }
  //       {
  //         name: "Schlutz",
  //         brand: "Frat Guyz",
  //         flavor: " Cheap, crisp and guzzleable",
  //         price: "42",
  //         alcohol: "6.20",
  //         pints: 100,
  //         id: 0
  //       },
  //       {
  //         name: "Citrus Crush",
  //         brand: "Mountain Bros.",
  //         flavor: " A citrusy IPA with stong hop notes",
  //         price: "85",
  //         alcohol: "7.2",
  //         pints: 100,
  //         id: 1
  //       },
  //       {
  //         name: "Irish Breath",
  //         brand: "Brim Reaper",
  //         flavor: " A dark, nutty and strong ale",
  //         price: "59",
  //         alcohol: "11.5",
  //         pints: 100,
  //         id: 2
  //       }
  //     ],
  //     selectedKeg: null
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onBuyingPint={this.handleBuyingPint}/>
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg"; 
    }
    return (
      <React.Fragment>
        <div id="container">
          <div id="CurrentState">
            {currentlyVisibleState}
            <button onClick={this.handleClick}>{buttonText}</button>
          </div>
          <div id="DailyKeg">
            <DailyKeg kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
          </div>
        </div>
      </React.Fragment>
    );
  }

}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;