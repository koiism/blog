import { useEffect } from "react";
import client from "../__generated__/client";
import { useAutocomplete, AutocompleteGetTagProps } from '@mui/base/useAutocomplete';


export function TagSelector(props: any) {
  console.log(props);
  const { input, field } = props;
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [top10Films[1]],
    multiple: true,
    options: top10Films,
    getOptionLabel: (option) => option.title,
  });
  useEffect(() => {
    client.queries.categoryConnection().then(res => {
      console.log(res);
    })
  }, [])
  return (<div className="relative mb-5 last:mb-0">
    <label className="block font-sans text-xs font-semibold text-gray-700 whitespace-normal mb-2">{field.label}</label>
    <div className="input-wrapper">
      {value.map((option, index) => (
        <div className="tag" {...getTagProps({ index })}>{option.title}</div>
      ))}
      <input type="text" {...getInputProps()} />
    </div>
    <ul className="list-box" {...getListboxProps()}>
      {groupedOptions.map((option, index) => (
        <li className="option" {...getOptionProps({ option, index })}>
          {option.title}
        </li>
      ))}
    </ul>
  </div>)
}
// Top 10 films as rated by IMDb users. http://www.imdb.com/chart/top
const top10Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
];