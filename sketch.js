var classInstance;

function setup()
{
    createCanvas(800,800);
    
    classInstance = new myClass();

}

function draw()
{
    background(150);
    
    
    if('onResize' in classInstance)
    {
        console.log("Has property");
    }
    
}


class myClass
{
    constructor()
    {
    
    }

    onResize()
    {
        
    }
    
}