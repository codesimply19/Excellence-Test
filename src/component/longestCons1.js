import React from 'react';


 class LongestConse extends React.Component {
     state={};
     arr = [0,0,1,1,0,0,0,1,0,0,1,1,1,0];



   printLongest = () => {
    let count = 0;
    let result = 0;

    for (let i = 0; i < this.arr.length; i++)
    {

        if (this.arr[i] === 0)
            count = 0;
        else
        {
            count++;
            result = Math.max(result, count);
        }
    }

    return result;
   }

   render() {

      return (<div>
          {this.printLongest()}
      </div>);
    }
  }

  export default LongestConse;