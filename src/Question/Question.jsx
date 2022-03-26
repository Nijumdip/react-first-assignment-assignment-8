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
                
                </p>
            </p>
            </Alert>
    );
};

export default Question;