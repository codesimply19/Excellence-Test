import React from 'react';

 class PrintDuplicate extends React.Component {
     state={};
     arr = [];

    //   use to fill array
     fillArray = () => {
         for(let i = 0; i < 100; i++){
             this.arr.push(i);
             if(i === 7){
                this.arr.push(i);
             }
         }


     }
//   print duplicate element
   printRepeating = () => {
    for (let i = 0; i < this.arr.length-1; i++)
    {

        if(this.arr[i]===this.arr[i+1])
        return this.arr[i];

    }
    return -1;


   }

   render() {

      return (<div>
          {this.fillArray()}
          {this.printRepeating()}
      </div>);
    }
  }

  export default  PrintDuplicate;