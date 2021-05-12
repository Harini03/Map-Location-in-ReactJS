import React, {Component} from 'react';
import './images/marker-icon.png';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoadingIndicator from './components/LoadingIndicator';
import * as actions from './actions';
import MapComponent from './components/MapComponent';
import ErrorBoundary from './components/ErrorBoundary';


export class App extends Component {
 constructor(props){
   super(props);
 }
 render(){

  return (
    <div className="App App-header">
    <ErrorBoundary>
      <header>
        <label for="state">State:</label>
        <input type="text" name="state" placeholder="Enter state" onChange={(e)=>this.props.actions.updateState(e.target.value)} />
        <label for="city">City:</label>
        <input type="text" name="city" placeholder="Enter city" onChange={(e)=>this.props.actions.updateCity(e.target.value)} />
        <button type="button" className="submit-button" aria-label="Submit" disabled={(!this.props.state || !this.props.city) ? 'disabled' : undefined} onClick={(e) => { this.props.actions.fetchApi(this.props.state,this.props.city); }}>Submit</button>
      </header>
      <h2>
        Your Location: 
        </h2>
    </ErrorBoundary>
      <div>
      {this.props.isFetching
        && <LoadingIndicator />
      }
      {!this.props.isFetching && this.props.isError
        && <p>Something went wrong. Please try again later. </p>
      }
      <ErrorBoundary>
      {!this.props.isFetching && this.props.mapData && this.props.mapData.length > 0 && 
        <MapComponent lat={this.props.mapData[0].latitude} long={this.props.mapData[0].longitude} />
      }
      </ErrorBoundary>
      </div>
    </div>
  );
}
}


const mapStateToProps = (state) => ({
  mapData: state.app.mapData,
  city: state.app.city,
  state: state.app.state,
  isFetching: state.app.isFetching,
  isError: state.app.isError
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(
  App
);
