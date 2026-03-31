const image = document.getElementById("image");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const buttonsDiv = document.getElementById("buttons");
let music = new Audio();

class Scene{
    constructor(image_path, text1, text2){
        this.image_path = image_path;
        this.text1=text1;
        this.text2=text2;
        this.children = [];
        

    }
    
    setChildren(children){
        this.children = children;
    }
    
    renderScene(){
        //this.image_path = image_path;
        image.src=this.image_path;
        text1.innerHTML = this.text1
        text2.innerHTML = this.text2;
        buttonsDiv.innerHTML="";

        for (let i =0; i<this.children.length; i++){
            let newbutton = document.createElement('button');
            newbutton.innerText = "Option" + (i+1);
            newbutton.addEventListener('click',()=>this.children[i].renderScene());
            newbutton.addEventListener('click', ()=>this.exitScene());
            buttonsDiv.appendChild(newbutton);
        }
    }
    
    exitScene(){
    }
};
class MusicScene extends Scene{
    constructor (image_path, text1, text2, audio_path){
       super(image_path,text1,text2);
       this.audio_path=audio_path;

    }
    renderScene(){
        super.renderScene();
        music=new Audio(this.audio_path);
        music.play()
    }exitScene(){
        super.exitScene();
        music.pause();
    }
};

let introScene = new Scene("images.jpg", "Welcome to my flower garden", "click to move around");
let SceneA = new Scene("images (1).jpg", "Holllow Garden", "Veiw Astonishment");
let SceneB = new Scene("images (2).jpg", "Amazing field", "Enjoy the Lavender beauty", "Investigations.mp3" );
introScene.setChildren([SceneA,SceneB]);
SceneA.setChildren([introScene]);
SceneB.setChildren([SceneA, introScene]);
introScene.renderScene();