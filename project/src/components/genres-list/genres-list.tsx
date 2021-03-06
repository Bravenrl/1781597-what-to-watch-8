import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ALL_GENRES } from '../../const';
import { getCurrentGenres } from '../../store/app-data/selectors-app-data';

function GenresList(): JSX.Element {
  const allGenres = useSelector(getCurrentGenres);
  const [searchParams, setSearchParams] = useSearchParams();
  const genreInfo = searchParams.get('genre') || '';
  return (
    <ul className='catalog__genres-list'>
      <li
        className={classNames('catalog__genres-item ', {
          'catalog__genres-item--active': genreInfo === '',
        })}
      >
        <a
          href='#todo'
          className='catalog__genres-link'
          onClick={(evt) => {
            evt.preventDefault();
            setSearchParams('');
          }}
        >
          {ALL_GENRES}
        </a>
      </li>
      {allGenres.map((genre) => (
        <li
          key={genre}
          className={classNames('catalog__genres-item ', {
            'catalog__genres-item--active': genreInfo === genre.toLowerCase(),
          })}
        >
          <a
            href='#todo'
            className='catalog__genres-link'
            onClick={(evt) => {
              evt.preventDefault();
              setSearchParams({ genre: genre.toLowerCase() });
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
