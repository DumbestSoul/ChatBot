import { useState } from 'react';
import image from './img/chatbot_img.jpg';

export default function App(){

    const date = new Date();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December' ];

    const Input = document.querySelector('#input')

    const [time, setTime] = useState('${hours}:${seconds}');
    const [dateTime, setDateTime] = useState('${days[day]}, ${months[month]}-${year}');

    function checkStatus(e) {
        let isActive = true;
        
        const status = document.querySelector('.status')

        if(isActive){
            status.innerHTML = 'Active';
            status.style.color = 'green';
        }else{
            status.innerHTML = 'Not Active';
            status.style.color = 'red';
        }
    }

    function handleInput(){
        const botMessage = document.querySelector('#message1');
        const userMessage = document.querySelector('#message2');
        
        let badwords = ['fuck|bad|stupid|useless|bitch|crazy|nonsense']
        let words = new RegExp(badwords);
        if(words.test(Input.value)){
            botMessage.innerHTML = "Typing...";
            setTimeout(() => {
                botMessage.innerHTML = "You're not allowed to use bad words.";
                Input.value = '';
            }, 2000)
        }
        let welcome = ['hey|kkrh|hi|hello|sup|yo|wassup|whatsup|howdy|greetings|good morning|good evening|good afternoon']
        let words2 = new RegExp(welcome);
        if(words2.test(Input.value)){
            const status = document.querySelector('.status')
            botMessage.innerHTML = "Typing...";
            setTimeout(() => {
                botMessage.innerHTML = "Hey there, how you are doing?!";
                status.innerHTML = 'Active';
                status.style.color = 'green';
                Input.value = '';
            }, 2000);
        }
        let bye = ['bye|goodbye|see ya|goodbye|talk to later|goodnight|cya'];
        let words3 = new RegExp(bye);
        if(words3.test(Input.value)){
            const status = document.querySelector(".status")
            botMessage.innerHTML = "Typing...";
            setTimeout(() => {
                botMessage.innerHTML = "It was nice talking to you!.";
                Input.value = "";
            }, 2000);
            setTimeout(() => {
                status.innerHTML = "Not Active"
                status.style.color = 'red';
            }, 5000);
        }

        let thanks = ['thanks|thank you|thank you so much|tysm'];
        let words4 = new RegExp(thanks);
        if(words4.test(Input.value)){
            botMessage.innerHTML = 'Typing...'
            setTimeout(() => {
                botMessage.innerHTML = "You're most welcome!";
                Input.value = '';
            }, 2000);
        }

        let how = ['how are you|how are you doing today?|how things are going for you today?|hru|hry']
        let words5 = new RegExp(how);
        if(words5.test(Input.value)){
            botMessage.innerHTML = 'Typing...'
            setTimeout(() => {
                botMessage.innerHTML = "I am doing all well!";
                status.innerHTML = "Active";
                status.style.color = "green";
                Input.value = '';
            }, 2000);
        }

        userMessage.innerHTML = Input.value;
        
    }

    return (
        <div className="App" onLoad={checkStatus}>
            <div className="wrapper">
                <div className="content">
                    <div className="header">
                        <div className="img">
                            <img src={image} alt="Chatbot Image"/>
                        </div>
                        <div className="right">
                            <div className="name">ChatBot</div>
                            <div className="status">Active</div>
                        </div>
                    </div>
                    <div className="main">
                        <div className="main_content">
                            <div className="messages">
                                <div className="bot-message" id='message1'></div>
                                <div className="human-message" id='message2'></div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="btm">
                            <div className="input">
                                <input type="text" id="input" placeholder="Enter your message" />
                            </div>
                            <div className="btn">
                                <button onClick={handleInput}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}