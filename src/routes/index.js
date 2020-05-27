'use strict';
const { Router } = require('express');
const router = Router();



const Comentario = require('../models/Comentario');

const Inmueble = require('../models/Inmueble');

const imageCompression = require('browser-image-compression');





const PhotoCot = require('../models/PhotoCot');

  const cloudinary = require('cloudinary');


  const nodemailer = require('nodemailer');

  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pruebatopo321@gmail.com',
        pass: 'mada-topo'
      }
  });




  // result = 'abc'

   cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
   }  );

   const fs = require('fs-extra');

/* router.get('/',(req,res) => {
res.render('images')

}   ); */










    router.get('/listar_comentarios', async (req,res) => {

res.send('hola');
        const photos = await Photo.find();
        /* res.render('image_form',{photos}); */
        
        }   );


        router.post('/registrar_comentario', async (req,res) => {

            const { name, email,comentario } = req.body;
                 /*     const photos = await Photo.find();  */
/* 
                 console.log(req.body.name); */

                    const comentario_nuevo = new Comentario(
                        {
                            name,
                           
                            email,
                            
                            comentario 
                        }
                    );

                   /*  console.log(comentario_nuevo);
 */
                await comentario_nuevo.save();
                  
                 
                     
                                let mailOptions = {
                                    from: 'pruebatopo321@gmail.com',
                                    to: 'pruebatopo321@gmail.com',
                                    subject: 'Comentario recibido',
                                    html: `<h1 style="color:#6F1E51;">Mensaje de ${comentario_nuevo.name} + ${comentario_nuevo.email} + ${comentario_nuevo.comentario} </h1>
                                    <p>Gracias por contactarnos</p>
                                    <p>le estaremos escribiendo pronto</p>
                                    `
                                };
                                transporter.sendMail(mailOptions, function(error, info){
                                    if (error) {
                                      console.log(error);
                                    } else {
                                      console.log('Email sent: ' + info.response);
                                    }
                                  });
                                res.json(
                                    {
                                        success : true,
                                        msg : `Se registró el comentario de forma correcta`
                                    }
                                )
                            
                   
                
                  




                    /* res.render('image_form',{photos}); */
                    
                    }   );


 
                    router.get('/listarComentarios', async (req, res) => {
                 
                        Comentario.find().then(
                            function(comentario){
                                if(comentario.length > 0){
                                    res.json(
                                        {
                                            success: true,
                                            comentario: comentario
                                        }
                                    )
                                }else{
                                    res.json(
                                        {
                                            success: false,
                                            comentario: 'No se encontraron comentarios'
                                        }
                                    )
                                }
                            }
                    
                        )
                    
                    
                    });

                   











router.post('/registrarPhotos', async (req, res) => {
  

const { imageURL } = req.body;


    try {
        const result = await cloudinary.v2.uploader.upload(imageURL);
        const newPhotoC = new PhotoCot({imageURL: result.url});
        res.send(newPhotoC);
        await newPhotoC.save();
        await fs.unlink(req.url);
    } catch (e) {
        console.log(e)
    }
    
});



router.get('/registrarPhotosUrl', async (req, res) => {
  

    const { imageURL } = req.body;
    
    
        try {
            const result = await cloudinary.v2.uploader.upload(imageURL);
            const newPhotoC = new PhotoCot({imageURL: result.url});
            await newPhotoC.save();
            await fs.unlink(req.url);
        } catch (e) {
            console.log(e)
        }
        
    });







router.post('/registrarInmueble',async (req, res) => {

    const { tipo,area,pisos,provincia,canton,distrito,comentario,nombre,email,telefono,fotos} = req.body;

    
    const inmueble_nuevo = new Inmueble(
        {
            tipo,
           
            area,
            
            pisos,
            
            provincia,

            canton,

            distrito,
   
            comentario,
            nombre,

            email,
            telefono,

            fotos

        }
    );

  console.log(inmueble_nuevo);
    await inmueble_nuevo.save();



    let mailOptions = {
        from: 'pruebatopo321@gmail.com',
        to: 'pruebatopo321@gmail.com',
        subject: 'Comentario recibido',
        html: `<h1 style="color:#6F1E51;">Mensaje de ${inmueble_nuevo.tipo} + ${inmueble_nuevo.area} + ${inmueble_nuevo.pisos} + ${inmueble_nuevo.provincia} + ${inmueble_nuevo.canton} + ${inmueble_nuevo.distrito} + ${inmueble_nuevo.comentario}+ ${inmueble_nuevo.nombre}+ ${inmueble_nuevo.email}+ ${inmueble_nuevo.telefono} + ${inmueble_nuevo.fotos}</h1>
        <p>Gracias por contactarnos</p>
        <p>le estaremos escribiendo pronto</p>
        `
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    res.json(
        {
            success : true,
            msg : `Se registró el comentario de forma correcta`
        }
    )


 });








    
    module.exports = router;