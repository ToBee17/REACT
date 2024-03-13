import { cardIcon } from '../assets/icons.js';
import { arrowIcon } from '../assets/icons.js';

function Card({name, followers, nb, platform, arrow}){

    return (
      <>
        <section className={`bg-cardbackground w-full h-fit flex justify-center items-center rounded-lg
        before:block before:absolute before:-inset-1 before:h-2 before:bg-${platform} relative overflow-hidden`}>
            <ul className="flex flex-col gap-2 py-8">
                <li className="flex gap-2 justify-center"><img src={cardIcon[platform]} alt="icon" /> <p className="font-medium text-cardforeground text-sm">{name}</p></li>
                <li className="flex justify-center"><p className="font-bold text-6xl text-foreground mt-6">{followers}</p></li>
                <li className="flex justify-center"><p className="uppercase tracking-[.25rem] text-cardforeground text-sm mb-6">Followers</p></li>
                <li className="flex justify-center items-center gap-1"><img src={arrowIcon[arrow]} alt="Arrow" /><p className={`font-medium text-${arrow} text-sm`}>{nb} Today</p></li>
            </ul>
        </section>
      </>
    );
  }

export default Card;