# Template padrão do site

## HTML

<!DOCTYPE <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title> Ana Valin </title>
        <meta name="Devs" content="Amanda Linhares e Luiz Rubioli">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
            </style>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Rock+Salt&display=swap');
                </style>
    </head>

    <body>

        <div class=home>
            <button type="button" class="btnAcessoRestrito"> ACESSO RESTRITO </button>

            <div class="redes">
            
                <button type="button" class="btnInsta">    </button>
                <button type="button" class="btnFace">     </button>
                <button type="button" class="btnTwitter">  </button>
                <button type="button" class="btnYoutube">  </button>
                <button type="button" class="btnSpotify">  </button>

              </div>

              <div class=conteudo>
                <button type="button" class="btnOucaAgora"> OUÇA AGORA </button>
                <button type="button" class="btnAssistaAgora"> ASSISTA AGORA </button>
              </div>
        
        <header>
               <h1>Ana Valin</h1>
        </header>

        <main>
            
            <nav class="menu">

                <a class="home" href="#">HOME</a>
                <a class="agenda" href="#">AGENDA</a>
                <a class="musica" href="#">MÚSICAS E CLIPES</a>
                <a class="biografia" href="#">BIOGRAFIA</a>
                <a class="fas" href="#">CENTRAL DE FÃS</a>
                <a class="contato" href="#">CONTATO</a>

              </nav>                        
        </main>

                     
        <footer> 
            <div class="rodape">
                <h6>2021 - TODOS OS DIREITOS RESERVADOS &copy; - ANAVALIN.COM.BR</h6>
            </div>
        </footer>
    </div>
    </body>


</html>


## CSS

body{
    margin: 0px;
    padding: 0px;
    border: 0px;
    position: flex;
    background-image: url("https://images.pexels.com/photos/9721021/pexels-photo-9721021.jpeg?cs=srgb&dl=pexels-misha-voguel-9721021.jpg&fm=jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
}

header{
    max-width: 50%;
}
.btnAcessoRestrito{

    float: right;
    width: 156px;
    height: 35px;
    background-color: #000000;
    border: 0;
    margin-right: 35px;
    margin-top: 35px;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #C52C2C;
    clear: both;
    cursor:pointer;
}


h1{
    font-family: Rock Salt;
    font-style: normal;
    font-weight: normal;
    font-size: 86px;
    line-height: 229px;
    color: #FFD234;
    transform: rotate(-0.02deg);
    margin-left: 50px;
    margin-top: 0px;

}

.menu a{
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 50px;
    color:#E5E5E5;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 42px;
    text-decoration:none;
    max-width: 25%;
    display:  flex;
                
}

nav.menu a:hover {
    color: #FFD234;
}


.redes button{
    float: right;
    width: 60px;
    height: 60px;
    border: 0;
    margin-right: 80px;
    margin-top: 20px;
    display: flex;
    direction: column;
    clear: both;
    border-radius: 100%;
               
    }

    .redes>.btnInsta{
        margin-top: 100px;
        background-image: url("fotos/insta1.png");
        background-size: cover;
        cursor:pointer; 
        
    }
    
    .redes>.btnFace{
        background-image: url("fotos/fb.png");
        background-size: cover;
        cursor:pointer;
        
    }

    .redes>.btnTwitter{
        background-image: url("fotos/twiter.png");
        background-size: cover;
        cursor:pointer;
        
    }

    .redes>.btnYoutube{
        background-image: url("fotos/youtt.png");
        background-size: cover;
        cursor:pointer;
        
    }

    .redes>.btnSpotify{
        background-image: url("fotos/spotify.png");
        background-size: cover;
        cursor:pointer;
        
    }

    .conteudo button{

        display: flex;
        direction: column;
        float: right;
        clear: both;
        margin-right: 35px;
        background: rgba(224, 172, 135, 0.5);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
        width: 444px;
        height: 76px;
        border:0;

        font-family: Roboto Slab;
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 42px;
        color: rgba(255, 210, 52, 0.96);
        
        
    }

    .conteudo>.btnOucaAgora{

        margin-top: 100px;
        margin-bottom: 30px;
        justify-content: center;
        line-height: 70px;
        cursor:pointer;
    }

    .conteudo>.btnAssistaAgora{

        margin-bottom: 100px;
        justify-content: center;
        line-height: 70px;
        cursor:pointer;
        
    }

    div.conteudo button:hover{
        color: #FFFFFF;
    }    
    

 .rodape{
    position:-webkit-sticky;
    margin-bottom: -50px;
    height: 50px;
    width:100%;
    bottom:0;
    line-height: 50px;
    text-align: center;
    background-color: #000;
    clear: both;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #FFFFFF;

 }
