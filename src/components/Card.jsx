function Card({data, icons}){
  const iconUpDown = data.nb > 0 ? icons.up : icons.down;
  const textClass = data.nb > 0 ? "text-green-500" : "text-red-500";

    return (
      <>
        <section className={`bg-cardbackground w-full h-fit flex justify-center items-center rounded-lg
        before:block before:absolute before:-inset-1 before:h-3 before:bg-${data.platform} relative overflow-hidden`}>
            <ul className="flex flex-col gap-2 py-8">
                <li className="flex gap-2 justify-center"><img src={icons[data.platform]} alt={data.platform} /> <p className="font-medium text-cardforeground text-sm">{data.name}</p></li>
                <li className="flex justify-center"><p className="font-bold text-6xl text-foreground mt-6">{data.followers}</p></li>
                <li className="flex justify-center"><p className="uppercase tracking-[.25rem] text-cardforeground text-sm mb-6">Followers</p></li>
                <li className="flex justify-center items-center gap-1"><img src={iconUpDown} alt="Arrow" /><p className={`font-medium text-sm ${textClass}`}>{data.nb} Today</p></li>
            </ul>
        </section>
      </>
    );
  }

export default Card;