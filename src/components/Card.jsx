import LogoFacebook from '../assets/logo-facebook.svg';

function Card({name, followers, nb, icon, arrow}){

    return (
      <>
        <section>
            <ul>
                <li><img src={LogoFacebook} alt="icon" /> <p>{name}</p></li>
                <li><p>{followers}</p></li>
                <li><p>Followers</p></li>
                <li><img src="" alt="Arrow" />{nb} Todays</li>
            </ul>
        </section>
      </>
    );
  }

export default Card;