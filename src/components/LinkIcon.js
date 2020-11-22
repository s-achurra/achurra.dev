import './LinkIcon.css';

function LinkIcon(props) {
  return (
    <li className={props.uneven ? 'uneven' : null}>
      <a href={props.href}
         className='icon'
         target='_blank'
         rel="noreferrer">
        <i className={`fa ${props.icon}`} aria-hidden='true'></i>
      </a>
    </li>
  );
}

export default LinkIcon;
