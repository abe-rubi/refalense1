<script type ="text/javascript"><!--
myTotal=0;                          //現在の合計値
myInput="";                         //現在入力している値
myCalc="+";                         //合計と入力値の演算子
myFlg=1;                            //1回前に入力したもの0:数字　1:演算子

function myValue(myData){           //  0~9又は小数点ボタンを押した
  myFlg=0;
  myInput+=myData;
  document.myForm.myLine.value=myInput;
}

function myCalculate(myData){
  if(myFlg==0){
    myFlg=1;
    myWork=myTotal+myCalc+myInput;
    myTotal=eval(myWork);
    myInput="";
    document.myForm.myLine.value=myTotal;
  }
  if(myData=="="){
    myTotal=0;
    myCalc="+";
  }else{
    myCalc=myData;
  }
}

function myC(){
  myTotal=0;
  myCalc="+";
  myInput="";
  document.myForm.my1line.value=myTotal;
}
