import nodemailer from 'nodemailer'



const emailOlvidePassword = async (datos) =>{
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      })
  

    const{ email, nombre, token } = datos;
      //Enviar el email

      const info = await transporter.sendMail({
        from: '"APV - Administrador de Pacientes de Veterinaria" <apv@correo.com>',
        to: email,
        subject: 'Restablece Tu password',
        text: 'Restablece Tu password',
        html: `<p>Hola: ${nombre}, has solicitado restablecer password.</p>
            <p> sigue el siguiente enlance para generar un nuevo password: <a href="${process.env.FRONTEND_URL}/olvide-password/${token}"> Restablecer Password </a> </p>
            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje`,
      })



      console.log("Mensaje enviado: %s", info.messageId)
}

export default emailOlvidePassword