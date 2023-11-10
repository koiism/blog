import { useEffect } from "react";
import client from "../__generated__/client";

export function TagSelector(props: any) {
  console.log(props);
  const {input, field} = props;
  useEffect(() => {
    client.queries.categoryConnection().then(res => {
      console.log(res);
    })
  }, [])
  return (<div className="relative mb-5 last:mb-0">
    <label className="block font-sans text-xs font-semibold text-gray-700 whitespace-normal mb-2">{field.label}</label>
  </div>)
}