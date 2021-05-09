import React from 'react';
import PrintEven from './printEven';
import LongestConse from './longestCons1';
import PrintDuplicate from './printDuplicate';


 class Navigation extends React.Component {
    render() {
      return (<div>
        <h3>This is first Question's Solution</h3>
        <PrintEven/>
        <h3>This is Second Question's Solution</h3>
        <LongestConse/>
        <h3>This is Third Question's Solution</h3>
        <PrintDuplicate/>
        </div>);
    }
  }

  export default Navigation;


