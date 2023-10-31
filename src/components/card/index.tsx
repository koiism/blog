import './index.scss';
interface Props {
  title: string;
  body: string;
  href: string;
}

export default (props: Props) => {
  const { href, title, body } = props;
  return (
    <li className="link-card">
      <a href={href}>
        <h2>
          {title}
          <span>&rarr;</span>
        </h2>
        <p>{body}</p>
      </a>
    </li>
  );
};
