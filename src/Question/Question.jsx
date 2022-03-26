import React from 'react';
import { Alert } from 'react-bootstrap';

const Question = () => {
    return (
            <Alert className='container mt-3' variant="success">
            <Alert.Heading>Q 1: How does Javascript work ?</Alert.Heading>
            <p>
            Ans:
            DOM ধীর তাই  React virtual DOM ব্যবহার করে। State change হলে, React তার virtual DOM-এর কাছে যায়,  virtual DOM ব্যবহার করার ফলে দ্রুত ওয়েব অ্যাপ্লিকেশন তৈরি হয়।  virtual DOM কম্পোনেন্টগুলির পূর্ববর্তী অবস্থার সাথে তুলনা করে আর সেই পরিবর্তনগুলির একটি list তৈরি করে যা main DOM-এ করা দরকার  এবং main web application এর সব উপাদানগুলিকে আবার আপডেট করার পরিবর্তে শুধুমাত্র main DOM-এ  যে উপাদান পরিবর্তন করা হয়েছে সেই আইটেমগুলিকে আপডেট করে। 
            </p>
            <br />
            <p className="mb-0">
                <Alert.Heading>Q 2: How useState works ?</Alert.Heading>
                <p>
                Ans:
                useState special function এটাকে hook বলে হয়ে থাকে .যেটা রিয়েক্ট এর কিছু কিছু functionality implement করে দেয় যাতে সে code কে optimize করতে পারে .useState এবং setState উভয়ই Asynchronous . useState ফাংশন দুটি উপাদান সহ একটি array প্রদান করে: একটি value এবং একটি update function।  আপনি যদি variable জন্য একটি প্রাথমিক মান সেট করতে চান, তাহলে useState ফাংশনে একটি argument হিসাবে প্রাথমিক মানটি পাস করুন। যখন রিঅ্যাক্ট প্রথমে কম্পোনেন্ট চালায়, useState যথারীতি দুই-উপাদান array ফিরিয়ে দেবে কিন্তু অ্যারের প্রথম এলিমেন্টে একটি স্থানীয় variable ফেরত দেয় এবং দ্বিতীয় টি pass করা প্যারামিটারে স্থানীয় variable set করে .
                </p>
            </p>
            <p className="mb-0">
                <Alert.Heading>Q 2: State and Props deference ?</Alert.Heading>
                <p>
                Ans:(state)<br></br>
                i. State changes can be asynchronous <br></br>
                ii. State can be modified using this .setState. <br></br>
                iii. It may or may not change <br></br>
                iv. The place where The state modifies or changes is called the state full component <br></br>
                v. The state is where the state is declared <br></br>
 
                </p>
                <p>
                (Props)<br></br>
                i.Props are read-only <br></br>
                ii.Props can not be modified <br></br>
                iii. It may not changes just read . <br></br>
                iv. If you want to send, you have to send it through props <br></br>
                V. The component with the props is called the presentation component <br></br>
                
                </p>
            </p>
            </Alert>
    );
};

export default Question;