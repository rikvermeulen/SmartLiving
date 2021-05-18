import { logDOM, render } from '@testing-library/react';
import react from 'react';

class Avatar extends react.Component{
    //Determine character state
    let value = 0;
    let ShownState = 0;

    let source = "public/logo192.png";

    switch (value) {
        case 1:
            //Set state
            console.log("Emotion is Neutral")
            ShownState = 0;

            //Set source
            source = "public/logo192.png"            
            break;
        case 2:
            //Set state
            console.log("Emotion is Sad")
            ShownState = 0;
    
            //Set source
            source = "public/logo192.png"            
            break;
        case 3:
            //Set state
            console.log("Emotion is Happy")
            ShownState = 0;

            //Set source
            source = "public/logo192.png"            
            break;
        case 4:
                //Set state
                console.log("State is Clicked")
                ShownState = 0;
    
                //Set source
                source = "public/logo192.png"            
                break;
        case 5:
            //Set state
            console.log("State is sleeping")
            ShownState = 0;

            //Set source
            source = "public/logo192.png"            
            break;            
        default:
            break;
    }

    toggleImage = () => {
        this.setState(state => ({ value}))
    }

    render(){
        const imageName = this.getImageName();
        return (
            <div>
                <img style={{maxWidth: '50px'}} src={source}/>
            </div>
        );
    }
}