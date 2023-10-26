import './App.css'
import React, { useState } from 'react';

function App() {
  //ข้อ1 ถึง ข้อ4 
  const numberList = [1, 2, 31, 4, 15, 6, 7, 22, 9, 10];
 
  let maxNumber = numberList[0];
  let minNumber = numberList[0];
  //หาค่ามากที่สุดและน้อยที่สุดโดยการ วนลูปปกติ
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] > maxNumber) {
      maxNumber = numberList[i];
    }
    if (numberList[i] < minNumber) {
      minNumber = numberList[i];
    }
  }
  //
  //เรียงลำดับตัวเลขจากน้อยไปมาก เป็นการ คัดลอกค่าจาก numberList เป็นarrayใหม่ เปรียบเทียบคู่ของสมาชิกarrayเพื่อกำหนดลำดับการเรียงลำดับ
  const sortedAscending = numberList.slice().sort((a, b) => a - b);
  const sortedDescending = numberList.slice().sort((a, b) => b - a);
  ///////////////////////////////////////////////////////////////////////


  //ข้อที่ 5 หาจำนวนเฉพาะที่อยู่ระหว่าง 0 ถึง 500  โดยใช้การวนลูป
  const primeNumbers = [];
  for (let num = 2; num <= 500; num++) {
    //กำ isPrime เป็น true เป็น ค่าเริ่มต้น เพื่อสมมติว่าจำนวนปัจจุบันเป็นจำนวนเฉพาะจนกว่าจะลูปเจอว่า ว่ามันไม่ใช่จำนวนเฉพาะ.
    let isPrime = true;
    //ใช้ลูป for อีกครั้งเพื่อทดสอบว่าจำนวนปัจจุบัน num หารด้วยตัวเลข i ได้หรือไม่ โดยทดสอบทุกตัวเลข i ที่เริ่มจาก 2 ถึง num - 1.
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        //ถ้าพบว่า num หารด้วย i ลงตัว กำหนดค่าของ isPrime เป็น false และใช้คำสั่ง break เพื่อออกจากลูป for ภายในนี้.
        isPrime = false;
        break;
      }
    }
    //หากหลังจากลูป for ทุกตัวเลข i แล้ว isPrime ยังคงเป็น true นั่นแปลว่า num เป็นจำนวนเฉพาะ และจะถูกเพิ่มเข้าใน primeNumbers Array ด้วยคำสั่ง primeNumbers.push(num).
    if (isPrime) {
      primeNumbers.push(num);
    }
  }
  ////////////////////////////////////////////////////////////////////////////

  //ข้อ 6 คำนวณ Factorial
  const [number, setNumber] = useState(""); //ค่าเริ่มต้นเป็นค่าว่าง ("") ที่จะใช้ในการเก็บจำนวนที่ผู้ใช้ป้อนผ่าน input field.
  let factorial = 1; //กำหนดค่าเริ่มต้นเป็น 1 ซึ่งจะใช้ในการคำนวณ factorial ของจำนวนที่ผู้ใช้ป้อน.
  const [result, setResult] = useState(null); //set result และ setResult ด้วยค่าเริ่มต้นเป็น null ที่จะใช้ในการเก็บผลลัพธ์ของการคำนวณ factorial และแสดงผล

  //สร้างฟังก์ชัน handleInputChange ที่จะถูกเรียกเมื่อผู้ใช้ป้อนข้อมูลใน input field ฟังก์ชันนี้จะอ่านค่าที่ผู้ใช้ป้อนและเก็บในสถานะ number ด้วย setNumber และรีเซ็ต result เป็น null
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setNumber(inputValue);
    setResult(null);
  };

  //เมื่อผู้ใช้คลิกปุ่มคำนวณ factorial ในฟังก์ชันนี้ จะทำการแปลงค่าที่ผู้ใช้ป้อนใน number เป็นตัวเลข (inputValue)
  //และตรวจสอบว่ามันเป็นตัวเลขที่ไม่ติดลบ หากใช่ ฟังก์ชันจะคำนวณ factorial และเก็บผลลัพธ์ใน result, หากไม่ใช่ จะแสดงข้อความของการแจ้งเตือนใน result
  const calculateFactorial = () => {
    const inputValue = parseInt(number);

    if (!isNaN(inputValue) && inputValue >= 0) {
      for (let i = 1; i <= inputValue; i++) {
        factorial *= i;
      }
      setResult(factorial);
    } else {
      setResult("โปรดป้อนจำนวนเต็มที่ไม่ติดลบ");
    }
  };
///////////////////////////////////////////////////////////



//ข้อ7 หาค่าด้านตรงข้ามมุมฉากของ สามเหลี่ยม
//เริ่มด้วยการ set ค่า A และ B เป็นค่า ว่างเพื่อรอ ผู้ใช้กรอกเข้ามา
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
//เก็บค่าความยาวของด้าน C หลังจากคำนวณ โดยค่าเริ่มต้นกำหนดให้เป็น null
  const [sideC, setSideC] = useState(null);
  //จะถูกเรียกเมื่อผู้ใช้ป้อนค่าความยาวของด้าน A
  const handleSideAChange = (event) => {
    setSideA(event.target.value);
  };
  //จะถูกเรียกเมื่อผู้ใช้ป้อนค่าความยาวของด้าน B
  const handleSideBChange = (event) => {
    setSideB(event.target.value);
  };

  //คำนวณความยาวของด้าน C โดยใช้ทศนิยมและทศนิยมยกกำลัง 2 และรากที่สอง. ผลลัพธ์จะถูกเก็บใน sideC โดยใช้ setSideC.
  const calculateSideC = () => {
  const a = parseFloat(sideA); // เป็นการแปลงค่าของ sideA เป็นตัวเลขที่มีทศนิยม
  const b = parseFloat(sideB); // เป็นการแปลงค่าของ sideB เป็นตัวเลขที่มีทศนิยม

    if (!isNaN(a) && !isNaN(b)) {
      const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      setSideC(c);
    }
  };
////////////////////////////////////////////


//ข้อ 8 แปลงเลขฐาน 2 เป็น เลขฐาน 10
  const [binaryInput, setBinaryInput] = useState("");
  const [decimalOutput, setDecimalOutput] = useState(null);

  //ผู้ใช้ป้อนค่าเลขฐาน 2 ผ่าน input field. ฟังก์ชันนี้จะอ่านค่าที่ผู้ใช้ป้อนและเก็บใน binaryInput ด้วย setBinaryInput และรีเซ็ต decimalOutput เป็น null
  const handleBinaryInputChange = (event) => {
    setBinaryInput(event.target.value);
    setDecimalOutput(null);
  };

  //ฟังก์ชันนี้, จะทำการตัดช่องว่าง whitespace ออกจาก binaryInput 
  //และตรวจสอบว่าค่าที่ป้อนอยู่ในรูปเลขฐาน 2 ที่ถูกต้อง ประมาณ /^[01]+$/ หากถูกต้อง
  //จะคำนวณค่าเลขฐาน 10 จากค่าเลขฐาน 2 โดยใช้การแปลงค่าเป็นสตริงเป็น Array ของตัวอักษรแต่ละตัวและนำมาคำนวณเป็นเลขฐาน 10
  //ผลลัพธ์จะถูกเก็บใน decimalOutput โดยใช้ setDecimalOutput.
  const convertBinaryToDecimal = () => {
    const binaryString = binaryInput.trim();

    if (/^[01]+$/.test(binaryString)) {
      const decimalValue = binaryString.split('').reverse().reduce((acc, digit, index) => {
        return acc + parseInt(digit, 2) * Math.pow(2, index);
      }, 0);

      setDecimalOutput(decimalValue);
    }
  };
/////////////////////////////////

//ข้อ 9 แปลงเลขฐาน 10 เป็น เลขฐาน 2
  const [decimalInput, setDecimalInput] = useState("");
  const [binaryOutput, setBinaryOutput] = useState(null);

  const handleDecimalInputChange = (event) => {
    setDecimalInput(event.target.value);
    setBinaryOutput(null);
  };

  //ในฟังก์ชันนี้, จะแปลงค่า decimalInput ในรูปของตัวเลข decimalValue และตรวจสอบว่ามันเป็นตัวเลขที่ถูกต้อง หากถูกต้อง จะคำนวณค่าเลขฐาน 2 จากค่าเลขฐาน 10
  //โดยใช้การแปลงเป็นเลขฐาน 2 และการใช้วงรอบ while เพื่อคำนวณค่าเลขฐาน 2 ตามทศนิยมด้วยการหารและการหาเศษ
  //ผลลัพธ์จะถูกเก็บใน binaryOutput โดยใช้ setBinaryOutput.
  const convertDecimalToBinary = () => {
    const decimalValue = parseInt(decimalInput);

    if (!isNaN(decimalValue)) {
      let binaryValue = "";
      let quotient = decimalValue;

      while (quotient > 0) {
        binaryValue = (quotient % 2) + binaryValue;
        quotient = Math.floor(quotient / 2);
      }

      setBinaryOutput(binaryValue);
    }
  };
////////////////////////////////////////

//ข้อ 10 จงหาค่า matrixA + matrixB
  const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const matrixB = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];
  //กำหนดค่า ของ resultMatrix และ setResultMatrix โดยกำหนดค่าเริ่มต้นเป็น null เพื่อเก็บผลลัพธ์ของการบวกเมทริกซ์.
  const [resultMatrix, setResultMatrix] = useState(null);

  const addMatrices = () => {
    const numRows = matrixA.length;
    const numCols = matrixA[0].length;
    const result = [];
    //ฟังก์ชันนี้ มีขั้นตอนการคำนวณเมทริกซ์ในรูปแบบตาราง 3x3 โดยใช้การวนลูปสองรอบ for เพื่อเข้าถึงทุกสมาชิกของ
    //matrixA และ matrixB และทำการบวกค่าที่ตรงกันในแต่ละตำแหน่งของเมทริกซ์
    //และนำผลลัพธ์มาเก็บใน resultMatrix ซึ่งจะแสดงผลเป็นผลลัพธ์ของการบวกเมทริกซ์.
    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < numCols; j++) {
        row.push(matrixA[i][j] + matrixB[i][j]);
      }
      result.push(row);
    }

    setResultMatrix(result);
  };

  //การจัดตำแหน่ง
  const renderMatrix = (matrix) => {
    //ฟังก์ชันนี้ใช้การวนลูปเพื่อสร้างแถวและคอลัมน์ของเมทริกซ์
    //และแสดงค่าในแต่ละตำแหน่งของเมทริกซ์ในรูปของ span elements และระหว่างค่าของเมทริกซ์ในแต่ละแถวจะมี "," เป็นตัวคั่น.
    return matrix.map((row, rowIndex) => (
      <div key={rowIndex}>
        {row.map((value, colIndex) => (
          <span key={colIndex}>{value}{colIndex < row.length - 1 ? ", " : ""}</span>
        ))}
      </div>
    ));
  };
////////////////////////////////


//Bonus แสดงผลดาว (*) ให้เป็นรูปกากบาท โดยมี input เป็นจำนวนแถวของดาว
  const [rowCount, setRowCount] = useState("");
  const [pattern, setPattern] = useState("");
  //เซ็ตค่า rowCount และ setRowCount เพื่อเก็บค่าจำนวนแถวที่ผู้ใช้ป้อน โดยกำหนดค่าเริ่มต้นเป็นค่าว่าง.
  //เซ็ตค่า pattern และ setPattern เพื่อเก็บรูปแบบกากบาท ที่จะแสดงผลลัพธ์ โดยกำหนดค่าเริ่มต้นเป็นค่าว่าง.

  const handleRowCountChange = (event) => {
    //ฟังก์ชันนี้จะอ่านค่าที่ผู้ใช้ป้อนและเก็บใน rowCount โดยใช้ setRowCount.
    const inputValue = event.target.value;
    setRowCount(inputValue);
  };

  const generatePattern = () => {
    const newPattern = [];
    const parsedRowCount = parseInt(rowCount);

    //ฟังก์ชันนี้, มีขั้นตอนการสร้างรูปแบบกากบาท โดยใช้การวนลูป (for) เพื่อสร้างแถวและคอลัมน์ของรูปแบบ 
    
    //และแต่ละแถวของรูปแบบจะถูกคั้นด้วย '\n' เพื่อแสดงผลลัพธ์ในรูปแบบของหลายบรรทัด.

    if (!isNaN(parsedRowCount) && parsedRowCount > 0) {
      for (let i = 1; i <= parsedRowCount; i++) {
        const row = [];
      //โดยถ้าตำแหน่ง (i, j) ตรงกันเหมือนกับแนวทแยงสองของกากบาท จะใส่ '*'
        for (let j = 1; j <= parsedRowCount; j++) {
          if (i === j || i === parsedRowCount - j + 1) {
            row.push('*');
          } else {
            row.push(' ');
            //แต่ถ้าไม่ตรงกันจะใส่ช่องว่าง (' ')
          }
        }
        newPattern.push(row.join(''));
      }
    }
    //ผลลัพธ์จะถูกเก็บใน pattern โดยใช้ setPattern 
    setPattern(newPattern.join('\n'));
  };
/////////////////////////////////////////////////////////


   // Display บนหน้าเว็บไซต์ //
  return (
    <div>
      <h1>เเบบทดสอบสมัครงาน Programmer</h1>

      <h2>1.แสดงค่าจำนวนเต็มที่มากที่สุด กำหนดให้ numberList = (1, 2, 31, 4, 15, 6, 7, 22, 9, 10)</h2>
      <h3>ค่าจำนวนเต็มที่มากที่สุดคือ: {maxNumber}</h3>

      <h2>2.แสดงค่าจำนวนเต็มที่น้อยที่สุด กำหนดให้ numberList = (1, 2, 31, 4, 15, 6, 7, 22, 9, 10)</h2>
      <h3>ค่าจำนวนเต็มที่น้อยที่สุดคือ: {minNumber}</h3>

      <h2>3.เรียงลำดับตัวเลขจากน้อยไปมาก</h2>
      <h3>เรียงลำดับจากน้อยไปหามาก : {sortedAscending.join(', ')}</h3>

      <h2>4.เรียงลำดับตัวเลขจากมากไปน้อย</h2>
      <h3>เรียงลำดับจากน้อยไปหามาก : {sortedDescending.join(', ')}</h3>

      <h2>5.หาจำนวนเฉพาะที่อยู่ระหว่าง 0 ถึง 500</h2>
      <h3>จำนวนเฉพาะระหว่าง 0 ถึง 500 : {primeNumbers.join(', ')}</h3>

      <h2>6.คำนวณ Factorial</h2>
      <input type="text" onChange={handleInputChange} value={number} />
      <button onClick={calculateFactorial}>คำนวณ Factorial</button>
      {result !== null && <h3>{number}! คือ {result}</h3>}

      <h2>7.ป้อนความยาวของด้าน a และ b เพื่อคำนวณค่า c (ด้านตรงข้ามมุมฉาก) ของสามเหลี่ยม:</h2>
      <label>ด้าน a: </label>
      <input type="text" onChange={handleSideAChange} value={sideA} />
      <br />
      <label>ด้าน b: </label>
      <input type="text" onChange={handleSideBChange} value={sideB} />
      <br />
      <button onClick={calculateSideC}>คำนวณค่า c</button>
      <br />
      {sideC !== null && !isNaN(sideC) && (
        <h3>ค่า c (ด้านตรงข้ามมุมฉาก) คือ: {sideC.toFixed(2)}</h3>
      )}

      <h2>8.ป้อนเลขฐาน 2 เพื่อแปลงเป็นเลขฐาน 10:</h2>
      <input type="text" onChange={handleBinaryInputChange} value={binaryInput} />
      <button onClick={convertBinaryToDecimal}>แปลงเป็นเลขฐาน 10</button>
      <br />
      {decimalOutput !== null && (
        <h3>ค่าเลขฐาน 10 คือ: {decimalOutput}</h3>
      )}

      <h2>9.ป้อนเลขฐาน 10 เพื่อแปลงเป็นเลขฐาน 2:</h2>
      <input type="text" onChange={handleDecimalInputChange} value={decimalInput} />
      <button onClick={convertDecimalToBinary}>แปลงเป็นเลขฐาน 2</button>
      <br />
      {binaryOutput !== null && (
        <h3>ค่าเลขฐาน 2 คือ: {binaryOutput}</h3>
      )}

      <h2>Matrix A:</h2>
      {renderMatrix(matrixA)}

      <h2>Matrix B:</h2>
      {renderMatrix(matrixB)}

      <button onClick={addMatrices}>คำนวณ Matrix A + Matrix B</button>

      {resultMatrix !== null && (
        <div>
          <h3>ผลลัพธ์ (Matrix A + Matrix B):</h3>
          {renderMatrix(resultMatrix)}
        </div>
      )}

     <h2>ป้อนจำนวนแถวของดาวที่ต้องการแสดง:</h2>
      <input type="number" onChange={handleRowCountChange} value={rowCount} />
      <button onClick={generatePattern}>แสดงรูปกากบาท</button>
      <pre>{pattern}</pre>
    </div>
  );
///////////////////////////////////////////////////
}

export default App
