import React from 'react';


 class PrintEven extends React.Component {
     state={};
     arr = [1, 2, 3, 4, 7, 8, 9 ,10];



   printEven = () => {
       let resArr = []
       for(let i = 0; i < this.arr.length; i++){
           if(this.arr[i]%2===0){
              resArr.push(`${this.arr[i]} `);
           }
       }
       return resArr;
   }

   render() {

      return (<div>
          {this.printEven()}
      </div>);
    }
  }

  export default PrintEven;