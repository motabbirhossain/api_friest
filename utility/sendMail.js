const nodemailer = require('nodemailer');




const sendMail = (to,sub) => {
     // create nodemaile
     const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth:{
            user: process.env.EMAIL_USER ,
            pass: process.env.EMAIL_PASS,
        }
    });
 
    transport.sendMail({
        form: process.env.EMAIL_HOST,
        to: to,
        subject: sub,
        // text: `Hi ${req.body.name} wow there`,
        html: `

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>themeforest</title>
        
        </head>
        <body>
           <div class="container" style=" margin: 0%;
           text-align: center;
                padding: 50px;
                background-color: #56555750;
                width: 100%;
                height: 100%;
                font-family: sans-serif;
                overflow: hidden;">
            <div class="body_wrapper" style="
                    background: #13d0a1;
                    max-width: 500px;
                    border-radius: 10px;
                    height: auto;
                    padding: 50px 50px;
                    margin: 0 auto;
            ">
                <div class="logo" style="
                     text-align: center;
                    padding: 20px 0px 30px 0;
                ">
                   <a href="https://rrdevs.net/">
                    <img src="https://s3.envato.com/files/410303630/RRDevs%20Logo.jpg" alt="">
                   </a>
                </div>
                <div class="content">
                    <h1 style="text-align: center; color: #ffffff;">themeforest</h1>
                    <p style=" font-weight: 400;
                    font-size: 16px;
                    text-align: left;
                    color: #ffffff;
                    margin: 10px 0px;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quae exercitationem voluptates voluptatibus. Aut consectetur quo blanditiis odio assumenda explicabo cum iure atque corrupti reprehenderit quod sequi, reiciendis numquam. Error?</p>
                    <p style=" font-weight: 400;
                    font-size: 16px;
                    text-align: left;
                    color: #ffffff;
                    margin: 10px 0px;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam enim dolor cupiditate eius temporibus non, consequatur nemo explicabo placeat voluptate veniam, qui nobis! Laboriosam et inventore veritatis amet quas sunt alias explicabo quisquam adipisci atque, officia cupiditate nostrum minus. Necessitatibus hic, ullam quibusdam repudiandae ratione soluta a quidem obcaecati possimus nesciunt repellendus doloribus ut odit ipsa voluptate? Molestias voluptatum repellendus nihil impedit, error consequuntur explicabo? Cupiditate minus impedit, error animi saepe voluptas deserunt, repellat ullam quo laudantium voluptatem. Soluta necessitatibus rem eum, hic officiis corporis dolorem ex voluptatem atque iusto recusandae a! Officia delectus alias repudiandae, ipsa dignissimos tempora eius!</p>
                    <div class="btn" style="margin-top: 40px;">
                        <a href="#" style=" font-size: 18px;
                        text-decoration: none;
                        color: #ffffff;
                        border-radius: 6px;
                        padding: 15px 30px;
                        background: #ff0055;">Verify</a>
                    </div>
                </div>
            </div>
           </div>
        </body>
        </html>
        `
    });

}


module.exports = sendMail;