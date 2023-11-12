import { useEffect, useState } from 'react';
import client from '../__generated__/client';
import {
  useAutocomplete,
  type AutocompleteGetTagProps,
} from '@mui/base/useAutocomplete';
import { Cross1Icon } from '@radix-ui/react-icons';

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
  className: string;
}

const Tag = (props: TagProps) => {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <Cross1Icon className='pl-1 inline-block cursor-pointer' onClick={onDelete} />
    </div>
  );
};

export function TagSelector(props: any) {
  const { input, field } = props;
  const [tags, setTags] = useState<string[]>([]);
  const {
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: input.value,
    multiple: true,
    options: tags,
    getOptionLabel: (option: string) => {
      return option;
    },
  });
  useEffect(() => {
    client.queries.tagConnection().then((res) => {
      setTags(
        res.data.tagConnection.edges?.map(
          (item) => item?.node?.name
        ) as string[]
      );
    });
  }, []);
  useEffect(() => {
    input.onChange(value);
  }, [value]);
  return (
    <div className="relative mb-5 last:mb-0">
      <label className="block font-sans text-xs font-semibold text-gray-700 whitespace-normal mb-2">
        {field.label}
      </label>
      <div className="input-wrapper bg-white border px-3 py-2">
        {value.map((option, index) => (
          <Tag
            className="tag bg-lime-400 inline-flex items-center px-3 rounded-full mr-1 "
            {...getTagProps({ index })}
            label={option}
          />
        ))}
        <input className="outline-none" type="text" {...getInputProps()} />
      </div>
      <ul
        className="list-box bg-white px-3 hover:bg-slate-50 cursor-pointer"
        {...getListboxProps()}
      >
        {(groupedOptions as string[]).map((option, index) => (
          <li className="option py-2" {...getOptionProps({ option, index })}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
