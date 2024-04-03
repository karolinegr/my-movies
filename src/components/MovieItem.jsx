import { Link } from "react-router-dom";

export function MovieItem({ id, title }) {
  return (
    <li>
      <Link to={`filme/${id}`}>{title}</Link>
    </li>
  );
}
