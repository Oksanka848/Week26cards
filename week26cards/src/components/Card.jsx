export default function Card(props) {
  return (
    <article className={`card ${props.avatar}`}>
      {props.children}
      <div className="card__info-hover"></div>
      <div className="card__img"></div>
      <a href="#" className="card_link">
        <div className="card__img--hover"></div></a>
      <div className="card__info">
        <p className="card__category">{props.name}</p>
        <p className="card__title">Вселенная: <strong>{props.univers}</strong></p>
        <p className="card__title">Альтер эго: <strong>{props.alterago}</strong></p>
        <p className="card__title">Род деятельности: <strong>{props.job}</strong></p>
        <p className="card__title">Друзья: <strong>{props.friens}</strong></p>
        <p className="card__title">Суперсилы: <strong>{props.powers}</strong></p>
        <label className="card__by"> <a className="card__author" title="author">RATE</a></label>

      </div>
    </article>

  );
}
