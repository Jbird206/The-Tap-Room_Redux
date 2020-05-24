import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import DailyKeg from './DailyKeg'
import KegDetail from './KegDetail'

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [
        {
          name: "Schlutz",
          brand: "Frat Guyz",
          flavor: " Cheap, crisp and guzzleable",
          price: "42",
          alcohol: "6.20",
          pints: 100,
          id: 0
        },
        {
          name: "Citrus Crush",
          brand: "Mountain Bros.",
          flavor: " A citrusy IPA with stong hop notes",
          price: "85",
          alcohol: "7.2",
          pints: 100,
          id: 1
        },
        {
          name: "Irish Breath",
          brand: "Brim Reaper",
          flavor: " A dark, nutty and strong ale",
          price: "59",
          alcohol: "11.5",
          pints: 100,
          id: 2
        }
      ],
      selectedKeg: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false 
    });
  }

  handleChangingSelectedKeg = (id) => {
    //const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleBuyingPint = (name) => {
    const keg = this.state.masterKegList.filter(keg => keg.name === name)[0];
    if(keg.pints > 0){
      keg.pints = keg.pints - 1;
    }
    const otherKegsList = this.state.masterKegList.filter(keg => keg.name !== name);
    const newMasterKegList = [...otherKegsList, keg];
    this.setState({
      ...this.state,
      masterKegList: newMasterKegList,
      
    })
  }



  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onBuyingPint={this.handleBuyingPint} onLoggingPints={this.handleConsoleLoggingPints} />
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
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
            <DailyKeg kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
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
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;