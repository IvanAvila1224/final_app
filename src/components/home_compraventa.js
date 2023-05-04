import React from 'react';
import '../styles/home.css';

function Profile() {
    return (
        <div className="profile-container">
            
            <div className="profile-details">
                <h1 className="profile-name">Jaime Ivan Avila Muñoz</h1>
                <h2 className="profile-matricula">MATRICULA: s20006783</h2>
                <p className="profile-contenido">En esta pagina podras poner a la venta aquellas cosas que quieras 
                vender dentro de la escuela , teniendo en cuenta las reglas de la pagina
                </p>
                <ul>
  <li className='profile-contenido'>No ofrecer ningún tipo de drogas, sustancias, ni alcohol.</li>
  <li className='profile-contenido'>No insultar a los participantes.</li>
  <li className='profile-contenido' >Prohibida la venta de animales, no se consentira la trata de animales en este grupo, solamente la adopción.</li>
</ul>
                

               

        
            </div>
        </div>
    );
}

export default Profile;