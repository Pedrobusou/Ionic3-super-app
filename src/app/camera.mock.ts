import {Camera} from '@ionic-native/camera';

export class CameraMock extends Camera{
    getPicture(options){
        return new Promise((resolve, reject) =>{
            resolve("https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg")
        })
    }
}